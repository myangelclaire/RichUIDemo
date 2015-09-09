/// <reference path="jquery_1.11.0.min.js" />
/// <reference path="json2.js" />
/// <reference path="XrmServiceToolkit.js" />
/// 使用下列方法时请添加以上依赖文件


String.format = function () {
    if (arguments.length == 0)
        return null;
    var str = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        var re = new RegExp('\\{' + (i - 1) + '\\}', 'gm');
        str = str.replace(re, arguments[i]);
    }
    return str;
}

String.formatArgs = function (str, agrs) {
    for (var i = 0; i < agrs.length; i++) {
        var re = new RegExp('\\{' + (i) + '\\}', 'gm');
        str = str.replace(re, agrs[i]);
    }
    return str;
};



GetCurrentLanguageCode = function () {
    if (!Xrm) {
        return null;
    }
    return Xrm.Page.context.getUserLcid();
}


GetMessageInfoByCode = function (messageCode, args) {

    var fetchXml = [
                    "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>",
                        "<entity name='jkh_custommessage'>",
                        "<attribute name='jkh_message' />",
                        "<order attribute='jkh_message' descending='false' />",
                        "<link-entity name='jkh_messagecode' from='jkh_messagecodeid' to='jkh_messagecode' alias='mc'>",
                            "<attribute name='jkh_messagecode' />",
                            "<filter type='and'>",
                                "<condition attribute='jkh_messagecode' operator='eq' value='" + messageCode + "' />",
                            "</filter>",
                        "</link-entity>",
                        "<link-entity name='jkh_languagecode' from='jkh_languagecodeid' to='jkh_languagecode' alias='lc'>",
                            "<attribute name='jkh_languagecode' />",
                            "<filter type='and'>",
                                "<condition attribute='jkh_active' operator='eq' value='" + true + "' />",
                            "</filter>",
                        "</link-entity>",
                        "</entity>",
                    "</fetch>"
                    ].join("");

    var output = XrmServiceToolkit.Soap.Fetch(fetchXml, false);

    var result = null;

    if (!output || output.length == 0) {
        result = null;
    } else {
        var language = GetCurrentLanguageCode();
        if (!language) {
            result = output[0].attributes["jkh_message"].value;
        } else {
            var exist = false;
            for (var i = 0; i < output.length; i++) {
                if (output[i].attributes["lc.jkh_languagecode"].value == language) {
                    exist = true;
                    result = output[i].attributes["jkh_message"].value;
                    break;
                }
            }
        }
        if (!exist) {
            result = output[0].attributes["jkh_message"].value;
        }
    }

    if (args) {
        result = String.formatArgs(result, args);
    }

    return result;
}