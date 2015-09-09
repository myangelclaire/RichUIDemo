//
//Register Control Event
// TextBox Events
//
//Tekikesyo v0.1
//
var msg_001 = "You must enter a number between {0} and {1}.";
var msg_002 = "You must enter a text less than {0} char.";

var FullKatakana = "アイウエオァィゥェォカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤイユエヨャュョラリルレロワヲンヵヶッガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポヴ";
var HalfKatakana = ["ｱ" ,"ｲ" ,"ｳ" ,"ｴ" ,"ｵ" ,"ｧ" ,"ｨ" ,"ｩ" ,"ｪ" ,"ｫ" ,"ｶ" ,"ｷ" ,"ｸ" ,"ｹ" ,"ｺ" ,"ｻ" ,"ｼ" ,"ｽ" ,"ｾ" ,"ｿ" ,"ﾀ" ,"ﾁ" ,"ﾂ" ,"ﾃ" ,"ﾄ" ,"ﾅ" ,"ﾆ" ,"ﾇ" ,"ﾈ" ,"ﾉ" ,"ﾊ" ,"ﾋ" ,"ﾌ" ,"ﾍ" ,"ﾎ" ,"ﾏ" ,"ﾐ" ,"ﾑ" ,"ﾒ" ,"ﾓ" ,"ﾔ" ,"ｲ" ,"ﾕ" ,"ｴ" ,"ﾖ" ,"ｬ" ,"ｭ" ,"ｮ" ,"ﾗ" ,"ﾘ" ,"ﾙ" ,"ﾚ" ,"ﾛ" ,"ﾜ" ,"ｦ" ,"ﾝ" ,"ヵ" ,"ヶ" ,"ッ" ,"ｶﾞ" ,"ｷﾞ" ,"ｸﾞ" ,"ｹﾞ" ,"ｺﾞ" ,"ｻﾞ" ,"ｼﾞ" ,"ｽﾞ" ,"ｾﾞ" ,"ｿﾞ" ,"ﾀﾞ" ,"ﾁﾞ" ,"ﾂﾞ" ,"ﾃﾞ" ,"ﾄﾞ" ,"ﾊﾞ" ,"ﾋﾞ" ,"ﾌﾞ" ,"ﾍﾞ" ,"ﾎﾞ" ,"ﾊﾟ" ,"ﾋﾟ" ,"ﾌﾟ" ,"ﾍﾟ" ,"ﾎﾟ" ,"ｳﾞ" ];
var HalfKatakanaStr = "ｱｲｳｴｵｧｨｩｪｫｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔｲﾕｴﾖｬｭｮﾗﾘﾙﾚﾛﾜｦﾝヵヶッｶﾞｷﾞｸﾞｹﾞｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟｳﾞ";
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
    });

    ////////////////////////////////////////////////////////////////
    //MultipleText
    /////////////
    //"textarea[dt='MultiText']" customize
    $("textarea").change(function () {
        _TextEventHandler($(this));
    });

    $("textarea").keydown(function () {
        _TextEventHandler($(this));
    });

    $("textarea").keyup(function () {
        _TextEventHandler($(this));
    });


    ////////////////////////////////////////////////////////////
    //FullKatakana2HalfKatakana
    /////////////
    $("input[imeextmod='half-katakana']").change(function () {
        _HalfKataganaHandler($(this));
    });

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
    var rtn="";
    for(var i=0; i< val.length; i++){
        var item =val.substr(i, 1);
        var idx = FullKatakana.indexOf(item);
        var idx2 = HalfKatakanaStr.indexOf(item);
        if(idx2>=0){
            rtn=rtn + item;
        }else if(idx>=0){
            rtn = rtn + HalfKatakana[idx];
        }
    }
    _ctrl.val( rtn);
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
