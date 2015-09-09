//
//
//Register Control Event
// Tab Events
//
//
//
//
//
$(function () {

    var rootLink = $("#results");
    var _suffix = rootLink.attr("suffix");
    var _links = rootLink.children().children().children().children().children().children().children().children().children().children("a");
    var _divs = rootLink.children().children().children().children().children().children().children().children("div");
    _links.click(function () {
        _h = $(this);
        var _hId = _h.attr("id");
        if (_hId.substring(0, 1) == "s") {
            $("#" + "h" + _hId.substring(1, 2)).show();
            $("#" + _hId).hide();
        } else {
            $("#" + "s" + _hId.substring(1, 2)).show();
            $("#" + _hId).hide();
        }

        var _divId = _h.attr("id") + _suffix;
        _divs.each(function (idx, element) {
            var _shId = $(this).attr("id");
            if (_divId.substring(0, 1) == "s") {
                $("#" + _divId).show();
            } else {
                $("#" + "s" + _divId.substring(1, 5)).hide();
            }
        }); //each end

    }); //Click end

    //init
    _links.first().click();

})

$(function () {

    var rootLink = $("#results");
    var _suffix = rootLink.attr("suffix");
    var _links = rootLink.children().children().children().children().children().children().children().children().children().children().children("a");
    var _divs = rootLink.children().children().children().children().children().children().children().children("div");
    _links.click(function () {
        _h = $(this);
        var _hId = _h.attr("id");
        if (_hId.substring(0, 1) == "s") {
            $("#" + "h" + _hId.substring(1, 2)).show();
            $("#" + _hId).hide();
        } else {
            $("#" + "s" + _hId.substring(1, 2)).show();
            $("#" + _hId).hide();
        }

        var _divId = _h.attr("id") + _suffix;
        _divs.each(function (idx, element) {
            var _shId = $(this).attr("id");
            if (_divId.substring(0, 1) == "s") {
                $("#" + _divId).show();
            } else {
                $("#" + "s" + _divId.substring(1, 5)).hide();
            }
        }); //each end

    }); //Click end
})

