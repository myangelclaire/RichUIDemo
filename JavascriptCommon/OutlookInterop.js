Type.registerNamespace("Mscrm");function OpenEntityForm(type,id){if(id&&!id.length)id=null;return openObject(type,id)}function IsRibbonControlVisibleOutlook(command,id){var $v_0=$find("crmRibbonData");if(IsNull($v_0))return false;return $v_0.isControlVisible(command,id)}function IsRibbonControlEnabledOutlook(command,id){var $v_0=$find("crmRibbonData");if(IsNull($v_0))return false;var $v_1=Mscrm.RibbonLayout.parentGroupCommands[id];if(!IsNull($v_1)&&!$v_0.isControlEnabled($v_1))return false;return $v_0.isControlVisible(command,id)&&$v_0.isControlEnabled(command)}function IsRibbonControlPressedOutlook(queryCommand,id){var $v_0=$find("crmRibbonData");if(IsNull($v_0))return false;var $v_1={};if(id&&id.length>0)$v_1["SourceControlId"]=id;$v_0.executeCommand(queryCommand,$v_1);return IsNull($v_1["On"])?false:$v_1["On"]}function ExecuteRibbonPopulateCommandAndReturnXml(populateCommand){var $v_0=$find("crmRibbonData");if(IsNull($v_0))return "";return $v_0.getDynamicMenuRibbonFromCommand(populateCommand,{})}function ExecuteRibbonCommandOutlook(command,id){var $v_0=$find("crmRibbonData");if(IsNull($v_0))return;var $v_1={};if(id&&id.length>0)$v_1["SourceControlId"]=id;$v_0.executeCommand(command,$v_1)}function IsRibbonDataReadyOutlook(){if(Mscrm.PageManager.get_isPageLoaded()){var $v_0=$find("crmRibbonData");return !IsNull($v_0)}return false}function AttachHtmlEvent(eventName,elementId,token){var $v_0=$get(elementId);if($v_0)if(typeof $v_0.attachEventHandler===Mscrm.TypeNames.unknownType){var $v_1=function(){EventHandlerForOutlook(eventName,elementId,token)};$v_0.attachEventHandler(eventName,$v_1)}else{var $v_2=function($p1_0){EventHandlerForOutlook(eventName,elementId,token)};$v_0[eventName]=$v_2}}function EventHandlerForOutlook(eventName,elementId,token){var $v_0=getOutlookHostedWindow();$v_0.handleHtmlEvent(eventName,elementId,token)}function PostToNewWindow(url,name,width,height,customWinFeatures,postData){var $v_0=buildWindowFeatures(width,height,customWinFeatures),$v_1=getOutlookHostedWindow(),$v_2=$v_1.postToNewWindow(window.location.href,url,name,$v_0,postData);$v_2.opener=window.self;return $v_2}function GetHelpServerUrl(){return window.HELP_SERVER_URL}function GetHelpRedirectParameters(){var $v_0={};$v_0["IsHelpRedirectAvailable"]=window.HELP_REDIRECT_AVAILABLE;$v_0["HelpSku"]=window.HELP_SKU;$v_0["OnlineTransactionType"]=window.ONLINE_TRANSACTION_TYPE;return $v_0}