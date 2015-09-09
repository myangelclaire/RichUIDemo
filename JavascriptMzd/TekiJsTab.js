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
    var rootTab = $("#tabs");
    var _suffix = rootTab.attr("suffix");

    var _lis = rootTab.children("ul").children();
    var _tabs = rootTab.children("div").children();

    _lis.click(function () {
        _h = $(this);
        var _hId = _h.attr("id");
        _lis.each(function () {
            var _hId_ = $(this).attr("id");
            if (_hId == _hId_) {

                $("#" + _hId_).css({color: "#ffffff" , "background-color" : "rgb(0, 114, 198)"});
            } else {
                $("#" + _hId_).css({color: "#000000" , "background-color" : "gray"});
            }
        });//each end

        var _tabId = _h.attr("id") + _suffix;
        _tabs.each(function (idx, element) {
            var _tcId = $(this).attr("id");

            if (_tabId == _tcId) {
                $("#" + _tcId).show();
            } else {
                $("#" + _tcId).hide();
            }
        });//each end

    });//Click end

    //init
    _lis.first().click();

})

$(function () {
    var rootTab = $("#choice");
    var _suffix = rootTab.attr("suffix");
    var _lis = rootTab.children("ul").children();
    var resultsTab = $("#results");
    var _tabs = resultsTab.children();

    _lis.click(function () {
        _h = $(this);
        var _hId = _h.attr("id");
        _lis.each(function () {
            var _hId_ = $(this).attr("id");
            if (_hId == _hId_) {
                $("#" + _hId_).css({ "text-shadow": "5px 5px 2px rgba(150, 150, 150, 1)",
                                     "transition": "text-shadow 1s ease-out",
                                     "background-color": "pink" });
            } else {
                $("#" + _hId_).css({ "text-shadow": "",
                                     "transition": "",
                                     "background-color": ""
                });
            }
        }); //each end

        var _tabId = _h.attr("id") + _suffix;
        _tabs.each(function (idx, element) {
            var _tcId = $(this).attr("id");

            if (_tabId == _tcId) {
                $("#" + _tcId).show();
            } else {
                $("#" + _tcId).hide();
            }
        }); //each end

    }); //Click end

    //init
    _lis.first().click();

})


$(function () {
    var rootTab = $("#colTab");
    var _suffix = rootTab.attr("suffix");
    var _lis = rootTab.children().children().children();
    var resultsTab = $("#results");
    var _tabs = resultsTab.children();
    _lis.click(function () {
        _h = $(this);
        var _hId = _h.attr("id");
        _lis.each(function () {
            var _hId_ = $(this).attr("id");
            if (_hId == _hId_) {
                $("#" + _hId_).css({ "text-shadow": "5px 5px 2px rgba(150, 150, 150, 1)",
                    "transition": "text-shadow 1s ease-out",
                    "background-color": "pink"
                });
            } else {
                $("#" + _hId_).css({ "text-shadow": "",
                    "transition": "",
                    "background-color": ""
                });
            }
        }); //each end
        var _tabId = _h.attr("id") + _suffix;
        _tabs.each(function (idx, element) {
            var _tcId = $(this).attr("id");
            if (_tabId == _tcId) {
                $("#" + _tcId).show();
            } else {
                $("#" + _tcId).hide();
            }
        }); //each end

    }); //Click end

    //init
    _lis.first().click();

})