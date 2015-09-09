//
//Register Control Event
// LookupSubScreen Events
//
//
$(function () {
    $("td").mouseover(function () { $(this).css("background-color", "red"); });
    $("td").mouseleave(function () { $(this).css("background-color", "Green"); });
    $("td").click(function () {

        //各値を配列に保存する。
        //var rtnArr = new Array(valTdfkCd, valSkcs, valSkcsIka, valSkcsCd);
        var rtnObj = new Object();
        rtnObj.result = true;

        rtnObj.info = new Object();
        rtnObj.info.cd = $(this).attr("cd");
        rtnObj.info.name = $(this).attr("name");

        //戻す
        //window.returnValue = rtnArr;
        window.returnValue = rtnObj;

        //画面をクローズ
        window.close();

        return false;
    });
})