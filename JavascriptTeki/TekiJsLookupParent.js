//
//Register Control Event
// LookupParentScreen Events
//
//
$(function () {
    $("img[title='Click to select a value for LookupTestEntity.']").click(function () {
        var url = "LookupSub01.html";
        var _ctrl = $(this).parent().prev().children("div");
        OpenSubModalDialog(url, _ctrl);
    });

})

//---------------------------------------------------
//sub screen
//---------------------------------------------------
function OpenSubModalDialog(url, ctrl) {
    var parm = "dialogWidth=500px;dialogHeight=500px;center=yes;scroll=no";
    //var RtnArr=window.showModalDialog (url, window, parm);
    var RtnObj = window.showModalDialog(url, window, parm);
    if (RtnObj != undefined) {
        setReturnInfoToPage(RtnObj, ctrl);
    }
    
    return false;
}

//---------------------------------------------------
//setReturnInfoToPage
//---------------------------------------------------
function setReturnInfoToPage(rtnObj, ctrl) {
    ctrl.load("JavascriptTeki/Lookup.xml", function (data) {
        data = data.replace("#DisplayContent#", rtnObj.result + "--" + rtnObj.info.cd + "--" + rtnObj.info.name);
        ctrl.html(data);
    });

}



