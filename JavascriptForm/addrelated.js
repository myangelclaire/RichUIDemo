function locAddRelatedTo(iTypeToAdd) {
	locAddRelatedToPlusAdditional(iTypeToAdd, "")
}
function locAddRelatedToPlusAdditional(iTypeToAdd, additionalAttributes) {
	var oCrmFormSubmit = $get("crmFormSubmit");
	locAddRelatedToNonForm(iTypeToAdd,
			oCrmFormSubmit.crmFormSubmitObjectType.value,
			oCrmFormSubmit.crmFormSubmitId.value, additionalAttributes)
}
function locAddRelatedToNonForm(iTypeToAdd, createFromType, createFromId,
		additionalAttributes) {
	var sUrl = "?_CreateFromType="
			+ CrmEncodeDecode.CrmUrlEncode(createFromType) + "&_CreateFromId="
			+ CrmEncodeDecode.CrmUrlEncode(createFromId) + additionalAttributes;
	openFrmObj(sUrl, buildWinName(), iTypeToAdd)
}
function locAddObjTo(iType) {
	var oCrmFormSubmit = $get("crmFormSubmit");
	if (Mscrm.Utilities.isIosDevice()
			&& (oCrmFormSubmit.crmFormSubmitObjectType.value == 4202 || oCrmFormSubmit.crmFormSubmitObjectType.value == 1038)) {
		alert(LOCID_UNSUPPORTED_RIBBONACTION);
		return
	}
	openObjEx(iType, oCrmFormSubmit.crmFormSubmitObjectType.value,
			oCrmFormSubmit.crmFormSubmitId.value)
}
function locAddFileTo(iAttachmentType) {
	var oCrmFormSubmit = $get("crmFormSubmit"), oUrl = getObjUrl(iAttachmentType);
	oUrl.get_query()["hideDesc"] = "1";
	oUrl.get_query()["pId"] = oCrmFormSubmit.crmFormSubmitId.value;
	oUrl.get_query()["pType"] = oCrmFormSubmit.crmFormSubmitObjectType.value;
	openStdWin(oUrl, buildWinName(), 500, 175)
}
function locAddAttachmentForWorkflow(workflowid, stepid) {
	var oUrl = getObjUrl(Annotation);
	oUrl.get_query()["hideDesc"] = "1";
	oUrl.get_query()["pId"] = workflowid;
	oUrl.get_query()["pType"] = Workflow;
	oUrl.get_query()["stepId"] = stepid;
	openStdWin(oUrl, buildWinName(), 500, 175)
}