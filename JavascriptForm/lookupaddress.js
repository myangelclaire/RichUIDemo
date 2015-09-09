function LookupAddress() {
	var aoItems = Mscrm.FormControlInputBehavior.GetBehavior("customerid")
			.get_dataValue();
	if (aoItems == null) {
		var sArg = $find("crmForm").GetLabel($get("customerid"));
		alert(formatString(LOCID_PROVIDE_VALUE_ADDRESS, sArg));
		return
	}
	var callbackFunction = Mscrm.Utilities.createCallbackFunctionObject(
			"performActionAfterLookupAddress", this), o = openStdDlgWithCallback(
			Mscrm.CrmUri
					.create("/sfa/quotes/dlg_lookupaddress.aspx?headerForm=1&parentType="
							+ CrmEncodeDecode.CrmUrlEncode(aoItems[0].type)
							+ "&parentId="
							+ CrmEncodeDecode.CrmUrlEncode(aoItems[0].id)
							+ "&willCall="
							+ (Mscrm.FormControlInputBehavior.GetBehavior(
									"willcall").get_dataValue() ? "1" : "0")),
			"LookupAddress", 500, 330, callbackFunction, true);
	Mscrm.Utilities.isModalDialogSupported()
			&& performActionAfterLookupAddress(o)
}
function performActionAfterLookupAddress(o) {
	if (o) {
		SetBillTo(o);
		SetShipTo(o, false, parseInt(
				$get("crmFormSubmit").crmFormSubmitObjectType.value, 10))
	}
}
function LookupDetailAddress() {
	var oCrmFormElement = $get("crmForm");
	if (!Mscrm.FormControlInputBehavior.GetBehavior("willcall").get_dataValue()) {
		var iHeaderType, sHeaderId;
		switch (parseInt($get("crmFormSubmit").crmFormSubmitObjectType.value,
				10)) {
		case QuoteDetail:
			iHeaderType = Quote;
			sHeaderId = oCrmFormElement.quoteid.value;
			break;
		case SalesOrderDetail:
			iHeaderType = SalesOrder;
			sHeaderId = oCrmFormElement.salesorderid.value;
			break;
		case InvoiceDetail:
			iHeaderType = Invoice;
			sHeaderId = oCrmFormElement.invoiceid.value;
			break
		}
		var callbackFunction = Mscrm.Utilities.createCallbackFunctionObject(
				"performActionAfterLookupDetailAddress", this), o = openStdDlgWithCallback(
				Mscrm.CrmUri
						.create("/sfa/quotes/dlg_lookupaddress.aspx?headerForm=0&headerType="
								+ CrmEncodeDecode.CrmUrlEncode(iHeaderType)
								+ "&headerId="
								+ CrmEncodeDecode.CrmUrlEncode(sHeaderId)),
				"LookupAddress", 500, 330, callbackFunction, true);
		Mscrm.Utilities.isModalDialogSupported()
				&& performActionAfterLookupDetailAddress(o)
	}
}
function performActionAfterLookupDetailAddress(o) {
	o && SetShipTo(o, true)
}
function SetBillTo(o) {
	var oCrmFormElement = $get("crmForm");
	if (o.BillTo) {
		Mscrm.FormControlInputBehavior.GetBehavior("billto_name")
				.set_dataValue(o.Address.Name);
		Mscrm.FormControlInputBehavior.GetBehavior("billto_line1")
				.set_dataValue(o.Address.Line1);
		Mscrm.FormControlInputBehavior.GetBehavior("billto_city")
				.set_dataValue(o.Address.City);
		Mscrm.FormControlInputBehavior.GetBehavior("billto_stateorprovince")
				.set_dataValue(o.Address.StateOrProvince);
		Mscrm.FormControlInputBehavior.GetBehavior("billto_postalcode")
				.set_dataValue(o.Address.PostalCode);
		Mscrm.FormControlInputBehavior.GetBehavior("billto_country")
				.set_dataValue(o.Address.Country);
		Mscrm.FormControlInputBehavior.GetBehavior("billto_telephone")
				.set_dataValue(o.Address.Telephone);
		Mscrm.FormControlInputBehavior.GetBehavior("billto_fax").set_dataValue(
				o.Address.Fax);
		!IsNull(oCrmFormElement.billto_addressid)
				&& Mscrm.FormControlInputBehavior.GetBehavior(
						"billto_addressid").set_dataValue(o.Address.AddressId);
		!IsNull(oCrmFormElement.billto_contactname)
				&& Mscrm.FormControlInputBehavior.GetBehavior(
						"billto_contactname").set_dataValue(
						o.Address.ContactName);
		!IsNull(oCrmFormElement.billto_line2)
				&& Mscrm.FormControlInputBehavior.GetBehavior("billto_line2")
						.set_dataValue(o.Address.Line2);
		!IsNull(oCrmFormElement.billto_line3)
				&& Mscrm.FormControlInputBehavior.GetBehavior("billto_line3")
						.set_dataValue(o.Address.Line3)
	}
}
function SetShipTo(o, isDetail, iObjectType) {
	var oCrmFormElement = $get("crmForm");
	if (o.ShipTo) {
		Mscrm.FormControlInputBehavior.GetBehavior("shipto_name")
				.set_dataValue(o.Address.Name);
		Mscrm.FormControlInputBehavior.GetBehavior("shipto_line1")
				.set_dataValue(o.Address.Line1);
		Mscrm.FormControlInputBehavior.GetBehavior("shipto_city")
				.set_dataValue(o.Address.City);
		Mscrm.FormControlInputBehavior.GetBehavior("shipto_stateorprovince")
				.set_dataValue(o.Address.StateOrProvince);
		Mscrm.FormControlInputBehavior.GetBehavior("shipto_postalcode")
				.set_dataValue(o.Address.PostalCode);
		Mscrm.FormControlInputBehavior.GetBehavior("shipto_country")
				.set_dataValue(o.Address.Country);
		Mscrm.FormControlInputBehavior.GetBehavior("shipto_telephone")
				.set_dataValue(o.Address.Telephone);
		Mscrm.FormControlInputBehavior.GetBehavior("shipto_fax").set_dataValue(
				o.Address.Fax);
		!IsNull(oCrmFormElement.shipto_addressid)
				&& Mscrm.FormControlInputBehavior.GetBehavior(
						"shipto_addressid").set_dataValue(o.Address.AddressId);
		!IsNull(oCrmFormElement.shipto_contactname)
				&& Mscrm.FormControlInputBehavior.GetBehavior(
						"shipto_contactname").set_dataValue(
						o.Address.ContactName);
		!IsNull(oCrmFormElement.shipto_line2)
				&& Mscrm.FormControlInputBehavior.GetBehavior("shipto_line2")
						.set_dataValue(o.Address.Line2);
		!IsNull(oCrmFormElement.shipto_line3)
				&& Mscrm.FormControlInputBehavior.GetBehavior("shipto_line3")
						.set_dataValue(o.Address.Line3);
		if (isDetail)
			Mscrm.FormControlInputBehavior.GetBehavior(
					"shipto_freighttermscode").set_dataValue(
					o.Address.FreightTerms);
		else {
			iObjectType != Invoice
					&& Mscrm.FormControlInputBehavior.GetBehavior(
							"freighttermscode").set_dataValue(
							o.Address.FreightTerms);
			Mscrm.FormControlInputBehavior.GetBehavior("shippingmethodcode")
					.set_dataValue(o.Address.ShippingMethod)
		}
	}
}