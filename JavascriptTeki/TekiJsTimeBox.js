//
//Register Control Event
// TimeBox Events
//
//

var currTimeBox;
var currTimeList;

$(function () {
    var lst = $("#Dialog_new_datetimetestTimeselectPopup");
    lst.load("JavascriptTeki/TimeSelect.xml", "", function () {
        var tr = $(this).children().children().children().children();
        tr.mouseover(function () {
            $(this).css("background-color", "#abc0e7");
        });

        tr.mouseleave(function () {
            $(this).css("background-color", "#ffffff");
        });

        tr.click(function () {
            currTimeBox.val($(this).children().text());
            currTimeList.hide();
        });

    });

    $("img[title='Select a time']").click(function () {
        if (lst.css("display") == "none") {
            var v1 = $(this).parent();
            var v2 = v1.prev();
            var slt = v2.children();

            var top = slt.position().top + slt.height();
            var left = slt.position().left;
            var width = $(this).position().left - slt.position().left + 40;

            lst.css({ "left": left, "top": top, "width": width });
            lst.show();

            currTimeBox = slt;
            currTimeList = lst;

        } else {
            lst.hide();

        }
    });

})
