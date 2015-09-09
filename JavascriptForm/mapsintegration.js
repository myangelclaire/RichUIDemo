var map, searchManager, mapLocale, mapDiv, addressString = "", initialMapBounds, lastFocusedControl, mapDivTouchStartTime, mapDivClickIsValid = false;
function hideMap() {
	if (Exists(mapDiv))
		mapDiv.style.display = "none"
}
function RefreshMapOnLoad() {
	(IsNull(window._IsRefreshForm) || "1" !== window._IsRefreshForm)
			&& RefreshBingMap(window.A1_ADDRESS)
}
function CallbackNullCheckAndExecute(callback) {
	callback != null && callback != undefined && callback()
}
function RefreshBingMap(address, mapLoadedCallback) {
	switch (window.LOCID_MAP_MODE) {
	case "NotRendered":
		CallbackNullCheckAndExecute(mapLoadedCallback);
		return;
	case "RenderAsLink":
		var addressAnchor = document.getElementById("bingAddressLink");
		if (Exists(addressAnchor)) {
			addressString = address;
			addressAnchor.setAttribute("href", getAddressUrl())
		}
		CallbackNullCheckAndExecute(mapLoadedCallback);
		break;
	case "RenderAsMap":
		if (typeof Microsoft == "undefined"
				|| typeof Microsoft.Maps == "undefined"
				|| typeof Microsoft.Maps.loadModule == "undefined") {
			window.setTimeout(function() {
				RefreshBingMap(address)
			}, 100);
			return
		}
		setPerfMarkerTimestamp("StartRefreshMap");
		if (Exists(map)) {
			if (address != addressString) {
				addressString = address;
				if (IsStringAvailable(addressString))
					Microsoft.Maps.loadModule("Microsoft.Maps.Search", {
						callback : geoCodeAndRender
					});
				else {
					map.setView({
						bounds : initialMapBounds
					});
					map.entities.clear()
				}
			}
		} else {
			addressString = address;
			mapDiv = document.getElementById("mapcontrol_container");
			if (Exists(mapDiv)) {
				var bingMapKey = mapDiv.getAttribute("bingMapsApiKey");
				Microsoft.Maps.loadModule("Microsoft.Maps.Themes.BingTheme", {
					callback : function() {
						lastFocusedControl = document.activeElement;
						map = new Microsoft.Maps.Map(mapDiv, {
							credentials : bingMapKey,
							showDashboard : false,
							enableSearchLogo : false,
							showScalebar : false,
							theme : new Microsoft.Maps.Themes.BingTheme
						});
						!IsNull(lastFocusedControl)
								&& lastFocusedControl.focus();
						CallbackNullCheckAndExecute(mapLoadedCallback);
						if (window.UseTabletExperience) {
							Microsoft.Maps.Events.addHandler(map,
									"viewchangestart", handleViewChangeStart);
							Microsoft.Maps.Events.addHandler(map,
									"viewchangeend", handleViewChangeEnd);
							mapDiv.addEventListener("touchend",
									handleMapDivTouchEnd, false)
						} else
							Microsoft.Maps.Events.addHandler(map, "click",
									handleClick);
						initialMapBounds = map.getBounds();
						Microsoft.Maps.loadModule("Microsoft.Maps.Search", {
							callback : geoCodeAndRender
						})
					}
				})
			}
		}
		break
	}
}
function Exists(object) {
	return typeof object != "undefined" && object != null
}
function IsStringAvailable(variable) {
	return !(variable === undefined || IsNull(variable) || variable == "")
}
function createSearchManager() {
	if (!searchManager) {
		map.addComponent("searchManager",
				new Microsoft.Maps.Search.SearchManager(map));
		searchManager = map.getComponent("searchManager")
	}
}
function configureMap(location) {
	map.entities.clear();
	map.setView({
		center : location,
		zoom : 15
	});
	var pin1 = new Microsoft.Maps.Pushpin(location, null);
	map.entities.push(pin1);
	map.entities.push(new Microsoft.Maps.Infobox(location, {
		title : addressString,
		pushpin : pin1
	}))
}
function handleClick(e) {
	e.mouseMoved == false && openBingWebsite()
}
function handleViewChangeStart(e) {
	var mapDiv = document.getElementById("mapcontrol_container");
	if (mapDiv != null)
		for ( var images = mapDiv.getElementsByTagName("img"), i = 0; i < images.length; i++) {
			images[i].removeEventListener("touchstart", handleMapDivTouchStart);
			images[i].removeEventListener("touchmove", handleMapDivTouchMove)
		}
}
function handleViewChangeEnd(e) {
	var mapDiv = document.getElementById("mapcontrol_container");
	if (mapDiv != null)
		for ( var images = mapDiv.getElementsByTagName("img"), i = 0; i < images.length; i++) {
			images[i].addEventListener("touchstart", handleMapDivTouchStart,
					false);
			images[i].addEventListener("touchmove", handleMapDivTouchMove,
					false)
		}
}
function handleMapDivTouchStart(e) {
	mapDivTouchStartTime = (new Date).getTime();
	mapDivClickIsValid = true
}
function handleMapDivTouchMove(e) {
	mapDivClickIsValid = false
}
function handleMapDivTouchEnd(e) {
	var currentTime = (new Date).getTime();
	mapDivClickIsValid && currentTime - mapDivTouchStartTime > 100
			&& openBingWebsite();
	mapDivClickIsValid = false
}
function openBingWebsite() {
	window.open(getAddressUrl())
}
function getAddressUrl() {
	return "http://www.bing.com/maps/?where1="
			+ CrmEncodeDecode.CrmUrlEncode(addressString) + "&mkt="
			+ CrmEncodeDecode.CrmUrlEncode(window.LOCID_MAP_LOCALE)
}
function geoCodeAndRender(address) {
	createSearchManager();
	var userData = {
		name : "Maps Test User",
		id : "XYZ"
	}, request = {
		where : addressString,
		count : 5,
		bounds : map.getBounds(),
		callback : onGeocodeSuccess,
		errorCallback : onGeocodeFailed,
		userData : userData
	};
	setPerfMarkerTimestamp("StartGeocode");
	searchManager.geocode(request)
}
function onGeocodeSuccess(result, userData) {
	setPerfMarkerTimestamp("FinishGeocode");
	if (result) {
		var topResult = result.results && result.results[0];
		topResult && configureMap(topResult.location)
	}
	setPerfMarkerTimestamp("FinishRefreshMap")
}
function onGeocodeFailed(result, userData) {
	setPerfMarkerTimestamp("FinishGeocode");
	setPerfMarkerTimestamp("FinishRefreshMap")
}