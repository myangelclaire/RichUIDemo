//
//Register Control Event
// TextBox Events
//
//Tekikesyo v0.1
//
var msg_001 = "You must enter a number between {0} and {1}.";
var msg_002 = "You must enter a text less than {0} char.";

$(function () {
    ////////////////////////////////////////////////////////////////
    //WholeNumber
    /////////////
    $("input[dt='int']").change(function () {
        _NumberEventHandler($(this));
    });

    ////////////////////////////////////////////////////////////////
    //FolatNumber
    /////////////
    $("input[dt='float']").change(function () {
        _NumberEventHandler($(this));
    });

    ////////////////////////////////////////////////////////////////
    //DecimalNumber
    /////////////
    $("input[dt='decimal']").change(function () {
        _NumberEventHandler($(this));
    });

    ////////////////////////////////////////////////////////////////
    //money
    /////////////
    $("input[dt='money']").change(function () {
        _NumberEventHandler($(this));
    });

    ////////////////////////////////////////////////////////////////
    //SingleLineText
    /////////////
    $("input[attrformat='text']").change(function () {
        _TextEventHandler($(this));
        alert($(this).attr("imeextmod"));
        if ($(this).attr("imeextmod") == "en-upper-case") {
            alert(45);
        }
    });

    ////////////////////////////////////////////////////////////////
    //MultipleText
    /////////////
    //"textarea[dt='MultiText']" customize
    $("textarea").change(function () {
        _TextEventHandler($(this));
    });

    $("textarea").keydown(function () {
        _TextEventHandlerTextAreaSize($(this));
    });

    $("textarea").keyup(function () {
        _TextEventHandlerTextAreaSize($(this));
    });


    ////////////////////////////////////////////////////////////
    //FullKatakana2HalfKatakana
    /////////////
    //    $("input[imeextmod='half-katakana']").keydown(function () {
    //        _HalfKataganaHandler($(this));
    //    });

    //    $("input[imeextmod='half-katakana']").keyup(function () {
    //        _HalfKataganaHandler($(this));
    //    });

    //    $("input[imeextmod='half-katakana']").change(function () {
    //        _HalfKataganaHandler($(this));
    //    });

    ////////////////////////////////////////////////////////////
    //En2UppCase
    /////////////
    $("input[imeextmod='en-upper-case']").keydown(function () {
        _EnUpperCaseHandler($(this));
    });

    $("input[imeextmod='en-upper-case']").keyup(function () {
        _EnUpperCaseHandler($(this));
    });

    $("input[imeextmod='en-upper-case']").change(function () {
        _EnUpperCaseHandler($(this));
    });

})

//
//_EnUpperCase
//
function _EnUpperCaseHandler(_ctrl) {
    var val = _ctrl.val();
    _ctrl.val(val.replace("[^a-z]*", "").toUpperCase());
}

//
//_HalfKataganaHandler
//
function _HalfKataganaHandler(_ctrl) {
    var val = _ctrl.val();
    //Todo replace
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//_NumberEventHandler
//
function _NumberEventHandler(_ctrl) {
    var val = _ctrl.val();
    var max = _ctrl.attr("max");
    var min = _ctrl.attr("min");

    var pre = _ctrl.attr("acc");
    var dt = _ctrl.attr("dt");

    //Validation
    if (!CheckNumberFormat(val, max, min, dt)) {
        alert(String.format(msg_001, min, max));

        //Format the value  
    } else {
        _ctrl.val(accounting.formatNumber(val, pre, ","));
    }

}

//
//_TextEventHandler
//
function _TextEventHandler(_ctrl) {
    var val = _ctrl.val();
    var maxLength = _ctrl.attr("maxlength");  //Ie bug maxLength

    //Validation
    if (!CheckTextFormat(val, maxLength)) {
        alert(String.format(msg_002, maxLength));

    }
}

//
//_TextEventHandlerTextAreaSize
//
function _TextEventHandlerTextAreaSize(_ctrl) {
    var val = _ctrl.val();

    var maxLength = _ctrl.attr("maxlength");  //Ie bug maxLength

    if (val.length > maxLength) {
        _ctrl.val(val.substr(0, maxLength));

    }

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//
//CheckTextFormat
//Param:val
//      maxLength
//Return:True/False
//
function CheckTextFormat(val, maxLength) {
    if (val.length > maxLength) {
        return false;
    }
    else {
        return true;
    }

}

//
//CheckNumberFormat
//Param:val
//      maxVal
//      minVal
//      dt
//Return:True/False
//
function CheckNumberFormat(val, max, min, dt) {
    var $v_0 = Mscrm.Utilities.trim(val, null);

    if (!isNullOrEmptyString($v_0)) {
        var $v_1 = "int" === dt ? Mscrm.NumberUtility.locStringToInt($v_0) : Mscrm.NumberUtility.locStringToFloat($v_0);

        if ($.isNumeric($v_1)) {
            if ($v_1 < min || $v_1 > max) {
                return false;

            } else {
                return true;
            }
        } else {
            return false;
        }
    } else {
        return true;
    }

}
