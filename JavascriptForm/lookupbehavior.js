Type.registerNamespace("Mscrm.FormInputControl");
Mscrm.FormInputControl.ImageLookupParty = function(element) {
	Mscrm.FormInputControl.ImageLookupParty.initializeBase(this, [ element ])
};
Mscrm.FormInputControl.ImageLookupParty.prototype = {
	get_dataXml : function() {
		return this.GetDataXml(null)
	},
	initialize : function() {
		Mscrm.FormInputControl.PresenceLookupUIBehavior.prototype.initialize
				.call(this);
		this.$M_4 = true
	},
	GetDataXml : function(attributeName) {
		var $v_0 = this.Items(false, true, false, false, false), $v_1 = isNullOrEmptyString(attributeName) ? this
				.get_element().id
				: attributeName;
		return Mscrm.Utilities.partyListXml($v_1, $v_0)
	}
};
Mscrm.FormInputControl.ImageLookupTransactionCurrency = function(element) {
	this.$$d_$1n_6 = Function.createDelegate(this, this.$1n_6);
	this.$$d_$2m_6 = Function.createDelegate(this, this.$2m_6);
	Mscrm.FormInputControl.ImageLookupTransactionCurrency.initializeBase(this,
			[ element ])
};
Mscrm.FormInputControl.ImageLookupTransactionCurrency.prototype = {
	$s_6 : null,
	$P_6 : null,
	$T_6 : null,
	_currencyPrecision : 0,
	$u_6 : 0,
	get_form : function() {
		return this.$P_6
	},
	set_form : function(value) {
		this.$P_6 = value;
		return value
	},
	get_$14_6 : function() {
		return this.get_element().getAttribute("cursymclm")
	},
	initialize : function() {
		Mscrm.FormInputControl.PresenceLookupUIBehavior.prototype.initialize
				.call(this);
		this.$u_6 = window.DefaultCurrencyPrecision;
		this._currencyPrecision = this.$u_6;
		this.AddBindingColumn(this.get_$14_6());
		this.AddBindingColumn("currencyprecision");
		this.$s_6 = this.get_dataValue();
		this.add_internalBeforeChange(this.$$d_$2m_6);
		this.add_change(this.$$d_$1n_6);
		var $v_0 = this.get_element();
		while (!IsNull($v_0)) {
			if (this.isControlsContainer($v_0)) {
				this.$P_6 = $v_0;
				break
			}
			$v_0 = $v_0.parentNode
		}
	},
	isControlsContainer : function(domNode) {
		if (!isNullOrEmptyString(domNode.tagName)
				&& domNode.tagName.toUpperCase() === "FORM")
			return true;
		else
			return false
	},
	dispose : function() {
		this.remove_internalBeforeChange(this.$$d_$2m_6);
		this.remove_change(this.$$d_$1n_6);
		Mscrm.FormInputControl.PresenceLookupUIBehavior.prototype.dispose
				.call(this)
	},
	currencyCheckRequired : function() {
		if (IsNull(this.$P_6) || !IsNull(this.get_dataValue()))
			return false;
		for ( var $v_0 = Sys.Application.getComponents(), $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
			var $v_2 = $v_0[$v_1];
			if (this.$1g_6($v_2)) {
				var $v_3 = $v_2;
				if (!$v_3.get_isBaseCurrency() && !IsNull($v_2.get_dataValue()))
					return true
			}
		}
		return false
	},
	$2m_6 : function($p0, $p1) {
		var $v_0 = $p1, $v_1 = $v_0.$5_1.items;
		if (this.currencyCheckRequired()) {
			if (!this.get_isInlineLookup()) {
				alert(window.LOCID_CURRENCY_CANNOT_BE_NULL);
				this.set_dataValue(this.$s_6)
			}
			$v_0.$R_1 = false;
			return
		}
		this.$s_6 = this.get_dataValue();
		var $v_2 = null, $v_3 = null;
		if (!IsNull($v_1) && $v_1.length > 0) {
			var $v_4 = $v_1[0].keyValues;
			$v_2 = $v_4[this.get_$14_6()];
			$v_3 = $v_4["currencyprecision"]
		}
		this.$T_6 = !IsNull($v_2) ? $v_2.value : "";
		this._currencyPrecision = !IsNull($v_3) ? Number
				.parseInvariant($v_3.value.toString()) : this.$u_6;
		$v_0.$R_1 = true
	},
	$1n_6 : function($p0, $p1) {
		if (!IsNull(this.$P_6))
			for ( var $v_0 = this.$P_6.getElementsByTagName("*"), $v_1 = $v_0.length, $v_2 = 0; $v_2 < $v_1; $v_2++) {
				var $v_3 = $v_0[$v_2];
				if (IsNull($v_3))
					continue;
				var $v_4 = Mscrm.FormControlInputBehavior.GetBehavior($v_3.id), $v_5;
				if (this.$1g_6($v_4)) {
					$v_5 = $v_4;
					if (!$v_5.get_isBaseCurrency()) {
						$v_5.set_currencySymbol(this.$T_6);
						$v_5.set_currencyPrecision(this._currencyPrecision)
					}
				}
			}
	},
	$1g_6 : function($p0) {
		return !IsNull($p0) && !IsNull($p0.get_isMoney) && $p0.get_isMoney()
	},
	SetCurrency : function(transactionCurrencyId) {
		if (!isNullOrEmptyString(transactionCurrencyId)) {
			var $v_0 = new RemoteCommand("TransactionCurrencyWebService",
					"Retrieve");
			$v_0.SetParameter("transactionCurrencyId", transactionCurrencyId);
			var $v_1 = $v_0.Execute();
			if ($v_1.Success
					&& typeof $v_1.ReturnValue === Mscrm.TypeNames.stringType) {
				var $v_2 = XUI.Xml.LoadXml($v_1.ReturnValue), $v_3 = XUI.Xml
						.SelectSingleNode($v_2,
								"/TransactionCurrency/CurrencySymbol", null);
				this.$T_6 = XUI.Xml.GetText($v_3);
				var $v_4 = new LookupControlItem;
				$v_4.id = transactionCurrencyId;
				var $v_5 = XUI.Xml.SelectSingleNode($v_2,
						"/TransactionCurrency/CurrencyName", null);
				$v_4.name = XUI.Xml.GetText($v_5);
				$v_4.type = Mscrm.EntityTypeCode.TransactionCurrency.toString();
				$v_4.values = [];
				$v_4.keyValues = {};
				$v_4.keyValues[this.get_$14_6()] = this.$T_6;
				$v_4.keyValues["currencyprecision"] = this._currencyPrecision;
				var $v_6 = [];
				$v_6[0] = $v_4;
				this.set_dataValue($v_6)
			}
		} else {
			this.set_dataValue(null);
			this.$T_6 = ""
		}
		if (this.get_disabled())
			this.$1n_6(this, Sys.EventArgs.Empty);
		else
			this.fireOnChange()
	}
};
Mscrm.FormInputControl.FilterRelationshipData = function(name, id, type,
		dependantAttributeName) {
	this.$W_0 = name;
	this.$Q_0 = id;
	this.$d_0 = type;
	this.$V_0 = dependantAttributeName
};
Mscrm.FormInputControl.FilterRelationshipData.prototype = {
	$V_0 : null,
	$W_0 : null,
	$Q_0 : null,
	$d_0 : null,
	get_dependantAttributeName : function() {
		return this.$V_0
	},
	set_dependantAttributeName : function(value) {
		this.$V_0 = value;
		return value
	},
	get_name : function() {
		return this.$W_0
	},
	set_name : function(value) {
		this.$W_0 = value;
		return value
	},
	get_id : function() {
		return this.$Q_0
	},
	set_id : function(value) {
		this.$Q_0 = value;
		return value
	},
	get_relationshipType : function() {
		return this.$d_0
	},
	set_relationshipType : function(value) {
		this.$d_0 = value;
		return value
	}
};
Mscrm.FormInputControl.LookupItemData = function(name, value) {
	this.name = name;
	this.value = value
};
Mscrm.FormInputControl.LookupItemData.prototype = {
	name : null,
	value : null,
	get_name : function() {
		return this.name
	},
	get_value : function() {
		return this.value
	}
};
Mscrm.FormInputControl.ShowDialogEventArgs = function(lookupField) {
	Mscrm.FormInputControl.ShowDialogEventArgs.initializeBase(this);
	this.$1J_1 = lookupField
};
Mscrm.FormInputControl.ShowDialogEventArgs.prototype = {
	$1J_1 : null,
	$l_1 : null,
	$q_1 : null,
	get_callbackForShowDialog : function() {
		return this.$q_1
	},
	set_callbackForShowDialog : function(value) {
		this.$q_1 = value;
		return value
	},
	get_lookupField : function() {
		return this.$1J_1
	},
	get_lookupItems : function() {
		return this.$l_1
	},
	set_lookupItems : function(value) {
		this.$l_1 = value;
		return value
	}
};
Mscrm.FormInputControl.GenerateDataXmlEventArgs = function() {
	Mscrm.FormInputControl.GenerateDataXmlEventArgs.initializeBase(this)
};
Mscrm.FormInputControl.GenerateDataXmlEventArgs.prototype = {
	$5_1 : null,
	get_result : function() {
		return this.$5_1
	},
	set_result : function(value) {
		this.$5_1 = value;
		return value
	}
};
Mscrm.FormInputControl.ResultEventArgs = function() {
	Mscrm.FormInputControl.ResultEventArgs.initializeBase(this);
	this.$5_1 = new LookupItems;
	this.$R_1 = true
};
Mscrm.FormInputControl.ResultEventArgs.prototype = {
	$5_1 : null,
	$R_1 : false,
	get_result : function() {
		return this.$5_1
	},
	set_result : function(value) {
		this.$5_1 = value;
		return value
	},
	get_success : function() {
		return this.$R_1
	},
	set_success : function(value) {
		this.$R_1 = value;
		return value
	}
};
Mscrm.FormInputControl.LookupTypeIcon = function() {
	this.$B_0 = "";
	this.$O_0 = true
};
Mscrm.FormInputControl.LookupTypeIcon.prototype = {
	$B_0 : null,
	$O_0 : false,
	get_source : function() {
		return this.$B_0
	},
	set_source : function(value) {
		this.$B_0 = value;
		return value
	},
	get_flip : function() {
		return this.$O_0
	},
	set_flip : function(value) {
		this.$O_0 = value;
		return value
	}
};
Mscrm.FormInputControl.LookupUIBehavior = function(control) {
	this.$$d_$2Z_4 = Function.createDelegate(this, this.$2Z_4);
	this.$$d_$1d_4 = Function.createDelegate(this, this.$1d_4);
	this.$$d_$2R_4 = Function.createDelegate(this, this.$2R_4);
	this.$$d_$2b_4 = Function.createDelegate(this, this.$2b_4);
	this.$$d_$2e_4 = Function.createDelegate(this, this.$2e_4);
	this.$$d_$2i_4 = Function.createDelegate(this, this.$2i_4);
	this.$$d_autoResolveHandler = Function.createDelegate(this,
			this.autoResolveHandler);
	this.$$d_RefreshLookupItemImage = Function.createDelegate(this,
			this.RefreshLookupItemImage);
	this.$$d_$2g_4 = Function.createDelegate(this, this.$2g_4);
	this.$$d_$2B_4 = Function.createDelegate(this, this.$2B_4);
	this.$$d_showLookupDialog = Function.createDelegate(this,
			this.showLookupDialog);
	this.$$d_$1D_4 = Function.createDelegate(this, this.$1D_4);
	this.$$d_focusEdit = Function.createDelegate(this, this.focusEdit);
	this.$$d_$2J_4 = Function.createDelegate(this, this.$2J_4);
	this.$$d_$2M_4 = Function.createDelegate(this, this.$2M_4);
	this.$$d_$2O_4 = Function.createDelegate(this, this.$2O_4);
	this.$$d_$2Q_4 = Function.createDelegate(this, this.$2Q_4);
	this.$$d_$2G_4 = Function.createDelegate(this, this.$2G_4);
	this.$$d_$2L_4 = Function.createDelegate(this, this.$2L_4);
	this.$$d_$2N_4 = Function.createDelegate(this, this.$2N_4);
	this.$$d_setFocus = Function.createDelegate(this, this.setFocus);
	this.$$d_$2F_4 = Function.createDelegate(this, this.$2F_4);
	this.$$d_$1s_4 = Function.createDelegate(this, this.$1s_4);
	this.$$d_Focus = Function.createDelegate(this, this.Focus);
	this.$$d_$G_4 = Function.createDelegate(this, this.$G_4);
	this.$$d_$2I_4 = Function.createDelegate(this, this.$2I_4);
	this.$$d_$2P_4 = Function.createDelegate(this, this.$2P_4);
	this.$$d_onLookup = Function.createDelegate(this, this.onLookup);
	this.$J_4 = [];
	this.$e_4 = [];
	this.$v_4 = new RegExp("[^{]+{[ \\n\\t]*");
	this.$w_4 = new RegExp("[ \\n\\t]*}[ \\n\\t]*$");
	this.$1N_4 = new RegExp(
			'^[^@\\s\\"<>)(\\[\\]:;,]+@[^@\\s\\"<>)(\\[\\]:;,]+$');
	this.$8_4 = [];
	this.$6_4 = {};
	this.$3_4 = -1;
	Mscrm.FormInputControl.LookupUIBehavior.initializeBase(this, [ control ])
};
Mscrm.FormInputControl.LookupUIBehavior.itemsDifferent = function(itemsA,
		itemsB) {
	if (IsNull(itemsA) && IsNull(itemsB))
		return false;
	if (IsNull(itemsA) || IsNull(itemsB))
		return true;
	if (itemsA.length !== itemsB.length)
		return true;
	var $v_0 = itemsA.length - 1;
	while ($v_0 >= 0) {
		if (Mscrm.FormInputControl.LookupUIBehavior.$1Q(itemsA[$v_0],
				itemsB[$v_0]))
			return true;
		$v_0--
	}
	return false
};
Mscrm.FormInputControl.LookupUIBehavior.$1Q = function($p0, $p1) {
	return !Mscrm.FormInputControl.LookupUIBehavior.$1T($p0.id, $p1.id)
			&& !!$p1.type
			|| Mscrm.FormInputControl.LookupUIBehavior.$L($p1.type) !== Mscrm.FormInputControl.LookupUIBehavior
					.$L($p0.type)
			|| Mscrm.FormInputControl.LookupUIBehavior.$L($p1.data) !== Mscrm.FormInputControl.LookupUIBehavior
					.$L($p0.data)
			|| Mscrm.FormInputControl.LookupUIBehavior.$L($p1.resourceSpecId) !== Mscrm.FormInputControl.LookupUIBehavior
					.$L($p0.resourceSpecId)
			|| Mscrm.FormInputControl.LookupUIBehavior.$L($p1.effort) !== Mscrm.FormInputControl.LookupUIBehavior
					.$L($p0.effort)
};
Mscrm.FormInputControl.LookupUIBehavior.$L = function($p0) {
	if (IsNull($p0) || typeof $p0 === Mscrm.TypeNames.stringType
			&& isNullOrEmptyString($p0))
		return null;
	return $p0
};
Mscrm.FormInputControl.LookupUIBehavior.$1T = function($p0, $p1) {
	var $v_0 = $p0, $v_1 = $p1;
	if (isNullOrEmptyString($v_0) && isNullOrEmptyString($v_1))
		return true;
	if (isNullOrEmptyString($v_0) || isNullOrEmptyString($v_1))
		return false;
	if ($v_0.length === 36 && $v_0.charAt(0) !== "{" && $v_0.charAt(35) !== "}")
		$v_0 = String.format("{{{0}}}", $v_0);
	if ($v_1.length === 36 && $v_1.charAt(0) !== "{" && $v_1.charAt(35) !== "}")
		$v_1 = String.format("{{{0}}}", $v_1);
	return $v_0.toString().toUpperCase() === $v_1.toString().toUpperCase()
};
Mscrm.FormInputControl.LookupUIBehavior.prototype = {
	$U_4 : null,
	$E_4 : null,
	$t_4 : "",
	$1M_4 : null,
	$1_4 : null,
	$b_4 : false,
	$c_4 : false,
	$F_4 : false,
	$r_4 : null,
	$1L_4 : false,
	$10_4 : false,
	$I_4 : "",
	$2_4 : null,
	$1K_4 : null,
	$C_4 : null,
	$M_4 : false,
	$1I_4 : null,
	$k_4 : null,
	$0_4 : null,
	$4_4 : null,
	$9_4 : false,
	$x_4 : true,
	$12_4 : false,
	$j_4 : "",
	$1H_4 : 0,
	$i_4 : false,
	$13_4 : null,
	$K_4 : null,
	add_setadditionalparams : function(value) {
		this.get_events().addHandler("OnSetAdditionalParamsEvent", value)
	},
	remove_setadditionalparams : function(value) {
		this.get_events().removeHandler("OnSetAdditionalParamsEvent", value)
	},
	add_setAdditionalParams : function(value) {
		this.get_events().addHandler("OnSetAdditionalParamsEvent", value)
	},
	remove_setAdditionalParams : function(value) {
		this.get_events().removeHandler("OnSetAdditionalParamsEvent", value)
	},
	add_change : function(value) {
		this.get_events().addHandler("OnChangeEvent", value)
	},
	remove_change : function(value) {
		this.get_events().removeHandler("OnChangeEvent", value)
	},
	add_internalBeforeChange : function(value) {
		this.get_events().addHandler("OnInternalBeforeChangeEvent", value)
	},
	remove_internalBeforeChange : function(value) {
		this.get_events().removeHandler("OnInternalBeforeChangeEvent", value)
	},
	add_onafterselect : function(value) {
		this.get_events().addHandler("OnAfterSelectEvent", value)
	},
	remove_onafterselect : function(value) {
		this.get_events().removeHandler("OnAfterSelectEvent", value)
	},
	add_afterSelect : function(value) {
		this.get_events().addHandler("OnAfterSelectEvent", value)
	},
	remove_afterSelect : function(value) {
		this.get_events().removeHandler("OnAfterSelectEvent", value)
	},
	add_generateDataXml : function(value) {
		this.get_events().addHandler("OnGeneratedDataXml", value)
	},
	remove_generateDataXml : function(value) {
		this.get_events().removeHandler("OnGeneratedDataXml", value)
	},
	add_showDialog : function(value) {
		this.get_events().addHandler("OnShowDialog", value)
	},
	remove_showDialog : function(value) {
		this.get_events().removeHandler("OnShowDialog", value)
	},
	add_onshowdialog : function(value) {
		this.get_events().addHandler("OnShowDialog", value)
	},
	remove_onshowdialog : function(value) {
		this.get_events().removeHandler("OnShowDialog", value)
	},
	get_disableInlineLookup : function() {
		return this.$i_4
	},
	set_disableInlineLookup : function(value) {
		this.$i_4 = value;
		return value
	},
	get_lookupItems : function() {
		return this.$1I_4
	},
	get_searchRecords : function() {
		return this.$8_4
	},
	get_inlineLookupMenu : function() {
		return this.$0_4
	},
	get_readOnly : function() {
		return this.get_disabled()
	},
	set_readOnly : function(value) {
		this.set_disabled(value);
		return value
	},
	get_lastFocusItem : function() {
		return this.$1_4
	},
	get_lookupStyle : function() {
		return this.get_element().getAttribute("lookupstyle")
	},
	set_lookupStyle : function(value) {
		var $v_0 = this.get_element().getAttribute("lookupstyle");
		!IsNull($v_0) && $v_0 !== value && this.set_crmAttributeId("");
		this.get_element().setAttribute("lookupstyle", value);
		return value
	},
	get_lookupTypes : function() {
		return this.get_element().getAttribute("lookuptypes")
	},
	set_lookupTypes : function(value) {
		var $v_0 = this.get_element().getAttribute("lookuptypes");
		!IsNull($v_0) && $v_0 !== value && this.set_crmAttributeId("");
		this.get_element().setAttribute("lookuptypes", value);
		return value
	},
	get_lookupTypeNames : function() {
		return this.get_element().getAttribute("lookuptypenames")
	},
	set_lookupTypeNames : function(value) {
		this.get_element().setAttribute("lookuptypenames", value);
		return value
	},
	get_crmAttributeId : function() {
		return this.get_element().getAttribute("crmattributeid")
	},
	set_crmAttributeId : function(value) {
		this.get_element().setAttribute("crmattributeid", value);
		return value
	},
	get_lookupTypeIcons : function() {
		return this.get_element().getAttribute("lookuptypeIcons")
	},
	set_lookupTypeIcons : function(value) {
		this.get_element().setAttribute("lookuptypeIcons", value);
		return value
	},
	get_showProperty : function() {
		var $v_0 = this.get_element().getAttribute("showproperty");
		return IsNull($v_0) ? 0 : parseInt($v_0.toString())
	},
	set_showProperty : function(value) {
		this.get_element().setAttribute("showproperty", value);
		return value
	},
	get_bindingColumns : function() {
		return this.$C_4
	},
	set_bindingColumns : function(value) {
		this.$C_4 = value;
		return value
	},
	get_additionalParams : function() {
		return this.get_element().getAttribute("additionalparams")
	},
	set_additionalParams : function(value) {
		this.get_element().setAttribute("additionalparams", value);
		return value
	},
	get_defaultType : function() {
		var $v_0 = this.get_element().getAttribute("defaulttype");
		return IsNull($v_0) ? null : parseInt($v_0.toString())
	},
	set_defaultType : function(value) {
		this.get_element().setAttribute("defaulttype", value);
		return value
	},
	get_forField : function() {
		return this.get_element().getAttribute("forfield")
	},
	set_forField : function(value) {
		this.get_element().setAttribute("forfield", value);
		return value
	},
	get_allowUnknownItems : function() {
		return this.$M_4
	},
	set_allowUnknownItems : function(value) {
		this.$M_4 = value;
		return value
	},
	get_autoResolve : function() {
		var $v_0 = this.get_element().getAttribute("autoresolve");
		return IsNull($v_0) || Mscrm.Utilities.parseBoolean($v_0.toString())
	},
	set_autoResolve : function(value) {
		this.get_element().setAttribute("autoresolve", value);
		return value
	},
	get_resolveEmailAddress : function() {
		var $v_0 = this.get_element().getAttribute("resolveemailaddress");
		return IsNull($v_0) || Mscrm.Utilities.parseBoolean($v_0.toString())
	},
	set_resolveEmailAddress : function(value) {
		this.get_element().setAttribute("resolveemailaddress", value);
		return value
	},
	get_createPermissionDictionary : function() {
		var $v_0 = this.get_element()
				.getAttribute("createpermissiondictionary");
		if (IsNull($v_0))
			return "";
		else
			return $v_0
	},
	set_createPermissionDictionary : function(value) {
		this.get_element().setAttribute("createpermissiondictionary", value);
		return value
	},
	get_lookupBrowse : function() {
		var $v_0 = this.get_element().getAttribute("lookupbrowse");
		if (IsNull($v_0))
			return false;
		return Mscrm.Utilities.parseBoolean($v_0.toString())
	},
	set_lookupBrowse : function(value) {
		var $v_0 = this.get_element().getAttribute("lookupbrowse");
		!IsNull($v_0)
				&& Mscrm.Utilities.parseBoolean($v_0.toString()) !== value
				&& this.set_crmAttributeId("");
		this.get_element().setAttribute("lookupbrowse", value);
		return value
	},
	get_defaultValue : function() {
		return IsNull(this.$U_4) ? null : this.$U_4
	},
	set_defaultValue : function(value) {
		this.$U_4 = value;
		return value
	},
	get_isDisplayOnly : function() {
		return Mscrm.Utilities.parseBoolean(this.get_element().getAttribute(
				"isDisplayOnly").toString())
	},
	set_isDisplayOnly : function(value) {
		this.get_element().setAttribute("isDisplayOnly", value);
		return value
	},
	get_customViews : function() {
		return IsNull(this.$E_4) ? null : this.$E_4
	},
	set_customViews : function(value) {
		this.$E_4 = value;
		return value
	},
	get_filterRelationshipId : function() {
		var $v_0 = this.get_element().getAttribute("RelationshipId");
		return IsNull($v_0) ? null : $v_0
	},
	set_filterRelationshipId : function(value) {
		this.get_element().setAttribute("RelationshipId", value);
		return value
	},
	get_dependantAttributeName : function() {
		var $v_0 = this.get_element().getAttribute("DependantAttributeName");
		return IsNull($v_0) ? null : $v_0
	},
	set_dependantAttributeName : function(value) {
		this.get_element().setAttribute("DependantAttributeName", value);
		return value
	},
	get_dependantAttributeType : function() {
		var $v_0 = this.get_element().getAttribute("DependantAttributeType");
		return IsNull($v_0) ? null : $v_0
	},
	set_dependantAttributeType : function(value) {
		this.get_element().setAttribute("DependantAttributeType", value);
		return value
	},
	get_dataProviderOverride : function() {
		return IsNull(this.$t_4) ? null : this.$t_4
	},
	set_dataProviderOverride : function(value) {
		this.$t_4 = value;
		return value
	},
	get_isDirty : function() {
		return this.$1z_4()
	},
	get_innerText : function() {
		var $v_0 = this.Items(false, false, false, false, false);
		return !$v_0.length ? "" : XUI.Html.GetText(this.getLookupField())
	},
	get_dataXml : function() {
		return this.GetDataXml(null)
	},
	get_dataValue : function() {
		return this.$g_4(false, false)
	},
	set_dataValue : function(value) {
		this.setValue(value);
		return value
	},
	get_typedDataValue : function() {
		return this.get_dataValue()
	},
	set_typedDataValue : function(value) {
		this.set_dataValue(value);
		return value
	},
	get_disabled : function() {
		return Mscrm.Utilities.parseBoolean(this.get_element().getAttribute(
				"lookupdisabled"))
	},
	set_disabled : function(value) {
		this.setDisabled(value);
		return value
	},
	get_isVisible : function() {
		return this.get_rootControl().style.display !== "none"
	},
	set_isVisible : function(value) {
		this.get_rootControl().style.display = value ? "block" : "none";
		return value
	},
	get_defaultViewId : function() {
		return this.getDefaultView()
	},
	set_defaultViewId : function(value) {
		this.setDefaultView(value);
		return value
	},
	get_rootControl : function() {
		if (IsNull(this.$r_4))
			this.$r_4 = this.get_element().parentNode.parentNode.parentNode.parentNode;
		return this.$r_4
	},
	get_inlineResultsSorted : function() {
		return this.$x_4
	},
	set_inlineResultsSorted : function(value) {
		this.$x_4 = value;
		return value
	},
	get_showInlineLookupHeader : function() {
		return this.$12_4
	},
	set_showInlineLookupHeader : function(value) {
		this.$12_4 = value;
		return value
	},
	get_inlineLookupHeaderText : function() {
		return this.$j_4
	},
	set_inlineLookupHeaderText : function(value) {
		this.$j_4 = value;
		return value
	},
	get_isInlineLookup : function() {
		if (IsNull(this.get_element().getAttribute("isInline")))
			return false;
		else
			return this.get_element().getAttribute("isInline")
	},
	AddCustomView : function(viewGuid, entityName, viewDisplayName, fetchXml,
			layoutXml, isDefault) {
		var $v_0 = 0;
		try {
			var $v_3 = new RemoteCommand("LookupService", "RetrieveTypeCode");
			$v_3.SetParameter("entityName", entityName);
			var $v_4 = $v_3.Execute();
			if ($v_4.Success
					&& typeof $v_4.ReturnValue === Mscrm.TypeNames.numberType)
				$v_0 = $v_4.ReturnValue;
			else
				return
		} catch ($v_5) {
			return
		}
		if (!IsNull(viewGuid))
			viewGuid = viewGuid.toUpperCase();
		if (isDefault) {
			this.get_defaultType() !== $v_0 && this.set_defaultType($v_0);
			this.set_defaultViewId(viewGuid)
		}
		if (IsNull(this.$E_4))
			this.$E_4 = new Array(0);
		for ( var $v_1 = null, $v_2 = this.$E_4.length, $v_6 = 0; $v_6 < $v_2; $v_6++)
			if (this.$E_4[$v_6].id === viewGuid) {
				$v_1 = this.$E_4[$v_6];
				break
			}
		if (!IsNull($v_1)) {
			$v_1.recordType = $v_0;
			$v_1.name = viewDisplayName;
			$v_1.fetchXml = fetchXml;
			$v_1.layoutXml = layoutXml
		} else {
			$v_1 = new CustomView(viewGuid, $v_0, viewDisplayName, fetchXml,
					layoutXml);
			Array.add(this.$E_4, $v_1)
		}
	},
	getDefaultView : function() {
		return IsNull(this.get_element().getAttribute("defaultViewId")) ? null
				: this.get_element().getAttribute("defaultViewId")
	},
	setDefaultView : function(viewGuid) {
		if (this.get_element().getAttribute("disableViewPicker") === "1")
			return;
		this.get_element().setAttribute("defaultViewId", viewGuid)
	},
	initialize : function() {
		Mscrm.FormControlInputBehavior.prototype.initialize.call(this);
		$addHandler(this.get_element(), "click", this.$$d_onLookup);
		$addHandler(this.get_element(), "keyup", this.$$d_$2P_4);
		$addHandler(this.get_element(), "mouseover", this.$$d_$2I_4);
		$addHandler(this.get_element(), "mouseout", this.$$d_$G_4);
		$addHandler(this.get_element(), "focus", this.$$d_Focus);
		$addHandler(this.get_element(), "blur", this.$$d_$1s_4);
		this.$M_4 = false;
		this.set_isDisplayOnly(false);
		this.$2C_4();
		if (Mscrm.FormControlInputBehavior.isSlugSupportEnabled()) {
			var $v_0 = this.$24_4(), $v_1 = this.get_element().id;
			if (!IsNull($v_0)) {
				var $$t_5 = this;
				Sys.Application.add_init(function($p1_0, $p1_1) {
					var $v_2 = {};
					$v_2["innerControlId"] = $v_1;
					$create(Mscrm.FormInputControl.TableLookupUIControl, $v_2,
							null, null, $v_0)
				})
			}
		}
	},
	dispose : function() {
		if (IsNull(this.get_element()))
			return;
		$removeHandler(this.get_element(), "click", this.$$d_onLookup);
		$removeHandler(this.get_element(), "keyup", this.$$d_$2P_4);
		$removeHandler(this.get_element(), "mouseover", this.$$d_$2I_4);
		$removeHandler(this.get_element(), "mouseout", this.$$d_$G_4);
		$removeHandler(this.get_element(), "focus", this.$$d_Focus);
		$removeHandler(this.get_element(), "blur", this.$$d_$1s_4);
		try {
			var $v_0 = this.getLookupField();
			if (!IsNull($v_0)) {
				$removeHandler($v_0, "blur", this.$$d_$1s_4);
				$removeHandler($v_0, "dblclick", this.$$d_$2F_4);
				$removeHandler($v_0, "focus", this.$$d_setFocus);
				$removeHandler($v_0, "keyup", this.$$d_$2P_4);
				$removeHandler($v_0, "keypress", this.$$d_$2N_4);
				$removeHandler($v_0, "keydown", this.$$d_$2L_4)
			}
			var $v_1 = this.getLookupEdit();
			if (!IsNull($v_1)) {
				$removeHandler($v_1, "dblclick", this.$$d_$2G_4);
				$removeHandler($v_1, "keyup", this.$$d_$2Q_4);
				$removeHandler($v_1, "keypress", this.$$d_$2O_4);
				$removeHandler($v_1, "keydown", this.$$d_$2M_4);
				$removeHandler($v_1, "blur", this.$$d_$2J_4);
				$removeHandler($v_1, "focus", this.$$d_focusEdit)
			}
		} catch ($$e_2) {
		}
		!IsNull(this.$2_4) && this.$2_4.dispose();
		Mscrm.CrmUIBehavior.prototype.dispose.call(this)
	},
	AddDependantParameters : function(dependantFieldId) {
		if (isNullOrEmptyString(dependantFieldId))
			return;
		var $v_0 = this.$f_4();
		if (IsNull($v_0))
			return;
		var $v_1 = Mscrm.FormControlInputBehavior.GetBehavior(dependantFieldId);
		if (IsNull($v_1) && this.get_isInlineLookup())
			$v_1 = Mscrm.FormControlInputBehavior.GetBehavior(dependantFieldId
					+ "_i");
		if (IsNull($v_1))
			return;
		var $v_2 = $v_1.get_typedDataValue();
		if (!IsNull($v_2) && $v_2.length > 0)
			if ($v_2[0].id.length) {
				this.AddParam("rId", $v_2[0].id);
				this.AddParam("rType", $v_2[0].type)
			}
	},
	AddParam : function(name, value) {
		var $v_0 = String.format("&{0}={1}",
				CrmEncodeDecode.CrmUrlEncode(name), CrmEncodeDecode
						.CrmUrlEncode(value));
		if (!isNullOrEmptyString(this.get_additionalParams())) {
			var $v_1 = this.get_additionalParams().indexOf(name);
			if ($v_1 > -1) {
				var $v_2 = $v_1 - 1, $v_3 = this.get_additionalParams()
						.indexOf("&", $v_1);
				if ($v_3 === -1)
					$v_3 = this.get_additionalParams().length;
				this.set_additionalParams(this.get_additionalParams()
						.substring(0, $v_2)
						+ this.get_additionalParams().substring($v_3,
								this.get_additionalParams().length))
			}
			this.set_additionalParams(this.get_additionalParams() + $v_0)
		} else
			this.set_additionalParams($v_0)
	},
	AddBindingColumn : function(name) {
		if (!IsNull(this.$C_4)) {
			if (this.$C_4.indexOf(name.toLowerCase()) === -1)
				this.$C_4 = this.$C_4 + "," + name
		} else
			this.$C_4 = name
	},
	setDisabled : function(value) {
		this.endContentEditing(true);
		this.get_element().setAttribute("lookupdisabled", value);
		this.$1R_4(null);
		if (value) {
			Sys.UI.DomElement
					.addCssClass(this.get_element(), "ms-crm-ReadOnly");
			Sys.UI.DomElement.addCssClass(this.get_element(),
					"ms-crm-Lookup-ReadOnly")
		} else {
			Sys.UI.DomElement.removeCssClass(this.get_element(),
					"ms-crm-ReadOnly");
			Sys.UI.DomElement.removeCssClass(this.get_element(),
					"ms-crm-Lookup-ReadOnly")
		}
		this.get_element().style.cursor = value ? "auto" : "pointer";
		var $v_0 = this.get_element();
		if (this.get_isInlineLookup())
			!this.$F_4
					&& Mscrm.ImageStrip.changeImage($v_0,
							value ? "/_imgs/search_disable.png"
									: "/_imgs/search_normal.gif");
		else
			Mscrm.ImageStrip.changeImage($v_0,
					value ? "/_imgs/btn_dis_lookup.png"
							: "/_imgs/btn_off_lookup.png");
		var $v_1 = this.$1c_4();
		$v_0.alt = value ? "" : $v_1;
		$v_0.setAttribute("title", value ? "" : $v_1);
		XUI.Html.DomUtils.GetNextSibling(this.get_element()).setAttribute(
				"title", $v_0.getAttribute("title"))
	},
	getLookupField : function() {
		try {
			return XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils
					.GetFirstChild(this.get_element().parentNode.parentNode))
		} catch ($$e_0) {
			return null
		}
	},
	Clear : function(executeDataChangeHandler) {
		XUI.Html.SetText(
				XUI.Html.DomUtils.GetFirstChild(this.getLookupField()), "");
		this.get_element().setAttribute("value", "");
		(IsNull(executeDataChangeHandler) || executeDataChangeHandler)
				&& this.handleDataValueChangedEvent()
	},
	Lookup : function(ignoreOnClick, noDialog, searchValue, asyncOperation) {
		if (this.get_readOnly())
			return;
		var $v_0 = this.get_element().onclick;
		if (ignoreOnClick || IsNull($v_0)) {
			!noDialog && !Mscrm.Utilities.isIosDevice() && this.setFocus(null);
			this.RaiseSetAdditionalParamsEvent();
			var $v_1 = this.getLookupField(), $v_2 = null;
			if (noDialog) {
				this.$23_4(asyncOperation);
				return
			}
			var $v_3 = new Mscrm.FormInputControl.ShowDialogEventArgs($v_1);
			if (!Mscrm.Utilities.isModalDialogSupported()) {
				var $v_4 = [ $v_2 ];
				$v_3.$q_1 = Mscrm.Utilities.createCallbackFunctionObject(
						"callbackForShowDialog", this, $v_4)
			}
			if (this.$2S_4($v_3))
				$v_2 = $v_3.$l_1;
			else {
				var $v_5 = this.$1X_4(), $v_6 = this.$f_4(), $v_7 = this
						.$15_4($v_6), $v_8 = this.$1Y_4($v_6);
				if (!IsNull($v_6) && !isNullOrEmptyString($v_7)) {
					this.AddParam("currentid", $v_7);
					!isNullOrEmptyString($v_8)
							&& this.AddParam("currentObjectType", $v_8)
				}
				var $v_9 = this.get_element().getAttribute("allowFilterOff");
				$v_9 = !IsNull($v_9) ? $v_9 : null;
				var $v_A = this.get_element().getAttribute("disableQuickFind");
				$v_A = !IsNull($v_A) ? $v_A : null;
				var $v_B = this.get_element().getAttribute("disableViewPicker");
				$v_B = !IsNull($v_B) ? $v_B : null;
				var $v_C = this.get_element().getAttribute("availableViewIds");
				$v_C = !IsNull($v_C) ? $v_C : null;
				var $v_D = Mscrm.Utilities.createCallbackFunctionObject(
						"handleAfterLookup", this);
				$v_2 = LookupObjectsWithCallback($v_D, $v_1, this
						.get_lookupStyle(), this.get_lookupTypes(), this
						.get_lookupBrowse(), this.$C_4, this
						.get_additionalParams(), 1, this.get_showProperty(),
						false, this.get_defaultType(), searchValue, this
								.get_dataProviderOverride(), this
								.get_defaultViewId(), this.get_customViews(),
						$v_5.$W_0, $v_5.$Q_0, $v_5.$d_0, $v_5.$V_0, $v_9, $v_A,
						$v_B, $v_C)
			}
			Mscrm.Utilities.isModalDialogSupported()
					&& this.handleAfterLookup($v_2)
		}
	},
	showInlineLookupMenu : function() {
		this.isMruEnabled() && !IsNull(this.$2_4)
				&& this.$2_4.set_isInlineSearchMenuOpening(true);
		!IsNull(this.$0_4) && this.$n_4();
		this.$6_4["onClickCallback"] = this.$$d_$1D_4;
		this.$6_4["inlineMenuId"] = this.get_element().id + "_IMenu";
		this.$6_4["enableShowMore"] = true;
		this.$6_4["showMoreCallback"] = this.$$d_showLookupDialog;
		var $v_0 = this.getLookupEdit(), $v_1 = this.getLookupField();
		this.$3_4 = -1;
		this.$9_4 = false;
		if (window.UseTabletExperience) {
			this.$6_4["focusElementOnShow"] = null;
			this.$6_4["focusElementOnHide"] = null
		} else if (!IsNull($v_0)
				&& $v_0.className !== "ms-crm-Hidden-NoBehavior") {
			this.$6_4["focusElementOnShow"] = $v_0;
			this.$6_4["focusElementOnHide"] = $v_0
		} else if (!IsNull($v_1)) {
			this.$6_4["focusElementOnShow"] = $v_1;
			this.$6_4["focusElementOnHide"] = $v_1
		}
		this.$2c_4();
		var $v_2 = this.$21_4(), $v_3 = Mscrm.Utilities.getILMenuDimension(this
				.get_rootControl(), this.$8_4.length > 7, $v_2), $v_4 = $v_3["valid"];
		if ($v_4) {
			this.$6_4["top"] = $v_3["top"];
			this.$6_4["left"] = $v_3["left"];
			this.$6_4["width"] = $v_3["width"];
			this.$6_4["inlineMenu"] = this.$0_4;
			this.$1q_4();
			this.$1p_4();
			this.$G_4(null);
			this.$0_4 = Mscrm.Utilities.showInlineMenu(this.$8_4, this.$6_4)
		} else
			this.$G_4(null);
		var $$t_5 = this;
		this.$1H_4 = window.setTimeout(function() {
			window.clearTimeout($$t_5.$1H_4);
			$$t_5.isMruVisible() && $$t_5.$S_4();
			!IsNull($$t_5.$2_4)
					&& $$t_5.$2_4.set_isInlineSearchMenuOpening(false)
		}, 120)
	},
	$21_4 : function() {
		var $v_0, $v_1 = this.$8_4.length > 6 ? 6 : this.$8_4.length;
		if (!$v_1)
			$v_1++;
		if (Mscrm.Utilities.ilMenuHasMoreInfoColumns(this.get_element())) {
			$v_0 = 37 * $v_1 + 24;
			$v_0 += this.$8_4.length > 6 ? 37 : 24
		} else
			$v_0 = 24 * ($v_1 + 1) + 23;
		return $v_0
	},
	$2c_4 : function() {
		if (Mscrm.Utilities.ilMenuHasMoreInfoColumns(this.get_element())) {
			this.$6_4["itemHeight"] = 35;
			this.$6_4["maxHeight"] = 284
		} else
			this.$6_4["maxHeight"] = 193
	},
	linkControlId : function() {
		var $v_0 = $get(this.get_element().id.replace("_i", ""));
		if (IsNull($v_0))
			return "";
		var $v_1 = $v_0.getAttribute("associatedLinkControlId"), $v_2 = null;
		if (!IsNull($v_1))
			$v_2 = $v_1.toString();
		else
			$v_2 = "";
		return $v_2
	},
	inlineNewFlyOutId : function() {
		if (IsNull(this.$K_4))
			return null;
		else
			return this.$K_4.get_flyOutId()
	},
	showAddNewButton : function() {
		return true
	},
	showErrorMessage : function(message, iconPath) {
		return
	},
	$2E_4 : function() {
		var $v_0 = {};
		$v_0["IsFullFormMode"] = true;
		switch (this.get_element().id) {
		case "parentcustomerid_i":
		case "header_process_parentaccountid1_i":
		case "parentaccountid_i":
			$v_0["EntityLogicalName"] = "account";
			break;
		case "primarycontactid_i":
		case "header_process_parentcontactid1_i":
		case "parentcontactid_i":
			$v_0["EntityLogicalName"] = "contact";
			break;
		case "_Stakeholders_i":
			$v_0["EntityLogicalName"] = "contact";
			$v_0["CanCreate"] = "true";
			$v_0["NewButtonToolTip"] = LOCID_INLINELOOKUP_NEW_FULLFORM;
			break;
		case "_Competitors_i":
			$v_0["EntityLogicalName"] = "competitor";
			$v_0["CanCreate"] = "true";
			$v_0["NewButtonToolTip"] = LOCID_INLINELOOKUP_NEW_FULLFORM;
			break;
		default:
			$v_0["IsFullFormMode"] = false;
			break
		}
		return $v_0
	},
	$1p_4 : function() {
		var $v_0 = $get(this.get_element().id.substring(0,
				this.get_element().id.length - 2));
		if (!IsNull($v_0)) {
			var $v_1 = $v_0.getAttribute("entityDisplayName"), $v_2 = $v_0
					.getAttribute("entityLogicalName"), $v_3 = $v_0
					.getAttribute("isInlineNewEnabled")
					&& !!$v_2.length, $v_4 = false, $v_5 = this.$2E_4();
			if ($v_5["IsFullFormMode"]) {
				$v_3 = true;
				if ("EntityLogicalName" in $v_5)
					$v_2 = $v_5["EntityLogicalName"].toString();
				if ("CanCreate" in $v_5)
					$v_4 = $v_5["CanCreate"]
			}
			if (!IsNull($v_2)) {
				var $v_8 = this.get_element().getAttribute(
						"createpermissiondictionary");
				if (!isNullOrEmptyString($v_8))
					for ( var $v_9 = $v_8.split(","), $v_A = 0; $v_A < $v_9.length; $v_A++)
						if ($v_9[$v_A].split(":")[0].toUpperCase() === $v_2
								.toUpperCase())
							$v_4 = Mscrm.Utilities.parseBoolean($v_9[$v_A]
									.split(":")[1])
			}
			var $v_6 = document.createElement("DIV");
			Sys.UI.DomElement.addCssClass($v_6, "ms-crm-IL-Footer");
			var $v_7 = document.createElement("DIV");
			if (this.$8_4.length > 0) {
				var $v_B = LOCID_INLINELOOKUP_RESULTS;
				if (this.$8_4.length === 1)
					$v_B = LOCID_INLINELOOKUP_RESULT;
				var $v_C = String.format(LOCID_INLINELOOKUP_RFORMAT,
						this.$8_4.length.toString(), $v_B);
				XUI.Html.SetText($v_7, $v_C)
			}
			Sys.UI.DomElement.addCssClass($v_7,
					"ms-crm-InlineLookup-FooterSection-TopResults");
			$v_6.appendChild($v_7);
			if ($v_3 && $v_4 && this.showAddNewButton()) {
				var $v_D = document.createElement("DIV");
				Sys.UI.DomElement.addCssClass($v_D,
						"ms-crm-InlineLookup-FooterSection-AddNew");
				$v_6.appendChild($v_D);
				this.$4_4 = document.createElement("A");
				$v_D.appendChild(this.$4_4);
				this.$4_4.href = "javascript:void(0);";
				if ("NewButtonToolTip" in $v_5)
					this.$4_4.title = $v_5["NewButtonToolTip"].toString();
				else
					this.$4_4.title = String.format(
							window.LOCID_INLINELOOKUP_NEW_RECORD, $v_1);
				this.$4_4.tabIndex = 0;
				Sys.UI.DomElement.addCssClass(this.$4_4,
						"ms-crm-InlineLookup-FooterSection-AddAnchor");
				var $v_E = this.linkControlId();
				if ($v_5["IsFullFormMode"])
					this.$4_4
							.setAttribute(
									"onclick",
									String
											.format(
													"Mscrm.ReadFormUtilities.set_forceNavigationAway(true);Mscrm.Utilities.selectAddButton('{0}','{1}');window.setTimeout(\"Mscrm.ReadFormUtilities.set_forceNavigationAway(false)\",500)",
													$v_2, this.get_element().id));
				else if (!isNullOrEmptyString($v_E)) {
					this.$K_4 = Mscrm.FormControlInputBehavior
							.GetBehavior($v_E);
					if (IsNull(this.$K_4))
						return;
					var $v_G = null, $v_H = this.getLookupEdit();
					if (IsNull($v_H)
							|| $v_H.className === "ms-crm-Hidden-NoBehavior") {
						var $v_I = this.getLookupField();
						$v_G = $($v_I)
					} else
						$v_G = $($v_H);
					this.$K_4.set_anchor($v_G);
					$addHandler(this.$4_4, "click", this.$$d_$2B_4);
					this.$13_4 = this.$4_4;
					this.$K_4.set_isEnabledForNewState(true);
					this.$K_4.set_hostId(this.get_element().id)
				}
				var $v_F = document.createElement("IMG");
				$v_F.src = "/_imgs/add_10.png";
				Sys.UI.DomElement.addCssClass($v_F,
						"ms-crm-InlineLookup-FooterSection-AddImage");
				this.$4_4.appendChild($v_F);
				this.$4_4.innerHTML += CrmEncodeDecode
						.CrmHtmlEncode(LOCID_INLINELOOKUP_NEW)
			}
			this.$6_4["inlineMenuFooterDOM"] = $v_6
		}
	},
	$1q_4 : function() {
		if (this.$12_4 && !isNullOrEmptyString(this.$j_4)) {
			var $v_0 = document.createElement("DIV");
			Sys.UI.DomElement.addCssClass($v_0, "ms-crm-IL-Header");
			XUI.Html.SetText($v_0, this.$j_4);
			if (!this.$8_4.length)
				$v_0.style.display = "none";
			this.$6_4["inlineMenuHeaderDOM"] = $v_0
		}
	},
	$2B_4 : function($p0) {
		$p0.preventDefault();
		this.$0_4.hide();
		var $v_0 = this.getLookupEdit();
		if (!IsNull($v_0))
			$v_0.value = "";
		var $v_1 = this.linkControlId();
		!(isNullOrEmptyString($v_1) || IsNull(this.$13_4))
				&& $removeHandler(this.$13_4, "click", this.$$d_$2B_4);
		this.$K_4.openFlyOut($p0)
	},
	showLookupDialog : function(item) {
		this.$n_4();
		this.Lookup(true, false, this.getLookupEdit().value, true)
	},
	$2b_4 : function($p0) {
		this.onLookup(null)
	},
	$1D_4 : function($p0) {
		if ($p0.get_isSearchMore()) {
			this.showLookupDialog($p0);
			return
		}
		var $v_0 = this.$8_4[$p0.get_reference()];
		if (!IsNull($v_0)) {
			var $v_1 = new LookupControlItem;
			$v_1.id = $v_0.get_objectId();
			$v_1.type = $v_0.get_entityTypeCode();
			$v_1.typename = $v_0.get_entityLogicalName();
			$v_1.name = $v_0.get_title().get_value();
			$v_1.onclick = "openlui(new Sys.UI.DomEvent(event)); return false;";
			$v_1.displayClass = "ms-crm-Lookup-Item";
			$v_1.data = "";
			$v_1.keyValues = {};
			for ( var $v_2 = 0; $v_2 < $v_0.get_hiddenColumns().length; $v_2++) {
				var $v_3 = $v_0.get_hiddenColumns()[$v_2];
				$v_1.keyValues[$v_3.get_columnName()] = new Mscrm.FormInputControl.LookupItemData(
						$v_3.get_columnName(), $v_3.get_value())
			}
			this.selectAndRaiseEvent($v_1)
		}
	},
	selectAndRaiseEvent : function(lookupItem) {
		var $v_0 = false, $v_1 = new Array(1);
		$v_1[0] = lookupItem;
		$v_0 = this.checkIfItemsChangedAndAdd($v_1);
		var $v_2 = new Mscrm.FormInputControl.ResultEventArgs;
		$v_2.$5_1.items = $v_1;
		this.$1j_4($v_2, $v_0)
	},
	checkIfItemsChangedAndAdd : function(itemsAfter) {
		var $v_0 = false, $v_1 = this.Items(false, true, false, false, false);
		this.Clear(false);
		if (!IsNull(itemsAfter) && !IsNull(itemsAfter[0])) {
			this.addItem(itemsAfter[0]);
			$v_0 = Mscrm.FormInputControl.LookupUIBehavior.itemsDifferent($v_1,
					itemsAfter)
		} else
			$v_0 = !IsNull($v_1) && !IsNull($v_1[0]);
		return $v_0
	},
	callbackForShowDialog : function(args, lookupItems) {
		lookupItems = args.$l_1;
		this.handleAfterLookup(lookupItems)
	},
	AddItems : function(lookupControlItems, executeDataChangeHandler) {
		this.$1S_4("start");
		for ( var $v_0 = true, $v_1 = lookupControlItems.length, $v_2 = this
				.Items(false, true, false, false, false), $v_3 = "", $v_4 = 0; $v_4 < $v_1; $v_4++) {
			if (this.$1f_4(lookupControlItems[$v_4], $v_2)) {
				$v_0 = false;
				continue
			}
			var $v_5 = this.$1P_4(lookupControlItems[$v_4], false);
			if (isNullOrEmptyString($v_5))
				$v_0 = false;
			else
				$v_3 += $v_5;
			$v_2.push(lookupControlItems[$v_4])
		}
		if (!isNullOrEmptyString($v_3)) {
			XUI.Html.DomUtils.GetFirstChild(this.getLookupField()).innerHTML += $v_3;
			this.$N_4();
			this.$m_4()
		}
		this.$1l_4();
		this.initializeLookupPresence();
		(IsNull(executeDataChangeHandler) || executeDataChangeHandler)
				&& this.handleDataValueChangedEvent();
		return $v_0
	},
	$1f_4 : function($p0, $p1) {
		for ( var $v_0 = 0; $v_0 < $p1.length; $v_0++)
			if (!Mscrm.FormInputControl.LookupUIBehavior.$1Q($p1[$v_0], $p0))
				return true;
		return false
	},
	Items : function(addUnresolvedText, addUnresolvedItems, clearOnClickMethod,
			resetClassName, serializeValues) {
		addUnresolvedItems = typeof addUnresolvedItems !== Mscrm.TypeNames.undefinedType
				&& addUnresolvedItems;
		clearOnClickMethod = typeof clearOnClickMethod !== Mscrm.TypeNames.undefinedType
				&& clearOnClickMethod;
		resetClassName = typeof resetClassName !== Mscrm.TypeNames.undefinedType
				&& resetClassName;
		for ( var $v_0 = this.getLookupField(), $v_1 = XUI.Html.DomUtils
				.GetFirstChild($v_0).childNodes, $v_2 = [], $v_3 = $v_1.length, $v_4, $v_5 = null, $v_6 = 0; $v_6 < $v_3; $v_6++) {
			$v_5 = null;
			if ($v_1[$v_6].nodeName.toUpperCase() === "LI")
				$v_5 = XUI.Html.DomUtils.GetFirstChild($v_1[$v_6]);
			else if ($v_1[$v_6].nodeName.toLowerCase() === "#text")
				$v_5 = XUI.Html.DomUtils.GetFirstChild($v_1[$v_6]);
			if (IsNull($v_5))
				continue;
			if ($v_5.nodeName.toLowerCase() === "#text") {
				if (addUnresolvedText)
					if (this.allowSemicolonSeparatedValues())
						for ( var $v_8 = $v_5.nodeValue.split(";"), $v_9 = $v_8.length, $v_A = 0; $v_A < $v_9; $v_A++) {
							var $v_B = $v_8[$v_A].trim();
							$v_B.length > 0 && Array.add($v_2, $v_B)
						}
					else
						Array.add($v_2, $v_5.nodeValue.trim());
				continue
			}
			var $v_7 = parseInt($v_5.getAttribute("category"));
			if (($v_7 === LookupItemCategories.AMBIGUOUS || $v_7 === LookupItemCategories.UNKNOWN)
					&& !addUnresolvedItems)
				continue;
			$v_4 = new LookupControlItem;
			$v_4.id = $v_5.getAttribute("oid");
			$v_4.type = $v_5.getAttribute("otype");
			$v_4.typename = this.$J_4[parseInt($v_4.type, 10)];
			if (typeof $v_4.typename === Mscrm.TypeNames.undefinedType
					&& Mscrm.EntityPropUtil.isActivityTypeCode($v_4.type))
				$v_4.typename = this.$J_4[4200];
			$v_4.resourceSpecId = $v_5.getAttribute("resourcespecid");
			$v_4.effort = $v_5.getAttribute("effort");
			$v_4.exchangeEntryId = $v_5.getAttribute("exchangeentryid");
			$v_4.activityPartyId = $v_5.getAttribute("activitypartyid");
			$v_4.name = XUI.Html.GetText($v_5);
			$v_4.category = isFinite($v_7) ? $v_7 : LookupItemCategories.NONE;
			$v_4.ambiguousRecordsXml = $v_5.getAttribute("ambiguousRecordsXml");
			$v_4.selected = $v_5.getAttribute("selected");
			$v_4.onclick = null;
			$v_4.values = this.$1W_4($v_5.getAttribute("values"), new String,
					serializeValues);
			$v_4.keyValues = this.$1W_4($v_5.getAttribute("keyValues"),
					new String, serializeValues);
			if ($v_5.nodeName.toUpperCase() === "SPAN") {
				var $v_C = $v_5.getAttribute("onclick");
				if (!IsNull($v_C) && !clearOnClickMethod) {
					$v_4.onclick = $v_C.toString();
					$v_4.onclick = $v_4.onclick.replace(this.$v_4, "");
					$v_4.onclick = $v_4.onclick.replace(this.$w_4, "")
				}
				$v_4.displayClass = resetClassName ? "ms-crm-Lookup-Item"
						: $v_5.className;
				$v_4.data = $v_5.getAttribute("data");
				Array.add($v_2, $v_4)
			} else
				$v_5.nodeName.toUpperCase() === "A" && addUnresolvedText
						&& Array.add($v_2, XUI.Html.GetText($v_5).trim())
		}
		return $v_2
	},
	RemoveItem : function(guid) {
		var $v_0 = XUI.Html.DomUtils.GetFirstChild(this.getLookupField()), $v_1 = $v_0
				.getElementsByTagName("LI");
		if (!$v_1.length)
			return false;
		var $v_2 = $v_1.length - 1;
		while ($v_2 >= 0) {
			var $v_3 = XUI.Html.DomUtils.GetFirstChild($v_1[$v_2]), $v_4 = $v_3
					.getAttribute("oid");
			if ($v_4 === guid) {
				var $v_5 = $v_3.getAttribute("onclick"), $v_6 = IsNull($v_5) ? ""
						: $v_5.toString();
				$v_6 = $v_6.replace(this.$v_4, "");
				$v_6 = $v_6.replace(this.$w_4, "");
				$v_3.setAttribute("otype",
						IsNull($v_3.getAttribute("otype")) ? "" : $v_3
								.getAttribute("otype"));
				$v_3.className = IsNull($v_3.className) ? "" : $v_3.className;
				this.get_element().setAttribute(
						"data",
						IsNull(this.get_element().getAttribute("data")) ? ""
								: this.get_element().getAttribute("data"));
				var $v_7 = new LookupControlItem;
				$v_7.id = $v_4;
				$v_7.type = $v_3.getAttribute("otype");
				$v_7.name = XUI.Html.GetText($v_3);
				$v_7.onclick = $v_6;
				$v_7.displayClass = $v_3.className;
				$v_7.data = $v_3.getAttribute("data");
				$v_7.typename = this.$J_4[parseInt($v_3.getAttribute("otype"),
						10)];
				$v_0.removeChild($v_1[$v_2]);
				this.$N_4();
				return $v_7
			}
			$v_2--
		}
		this.$G_4(null);
		return null
	},
	IsValid : function() {
		!this.$F_4 && this.get_autoResolve() && this.hasUnresolvedText()
				&& this.resolveAndExitEdit(true, false);
		if (this.$F_4) {
			alert(window.LOCID_LU_MSG_HASUNRESOLVEDITEMS);
			return false
		}
		for ( var $v_0 = this.Items(true, true, false, false, false), $v_1 = $v_0.length, $v_2 = 0; $v_2 < $v_1; $v_2++) {
			var $v_3 = $v_0[$v_2].category;
			if ($v_3 === LookupItemCategories.AMBIGUOUS
					|| $v_3 === LookupItemCategories.UNKNOWN) {
				alert(window.LOCID_LU_MSG_HASUNRESOLVEDITEMS);
				return false
			}
			if ($v_3 === LookupItemCategories.MRU_ITEM) {
				alert("The Lookup MRU Item that you have selected hasn't been resolved yet.");
				return false
			}
		}
		return true
	},
	RaiseOnAfterSelectEvent : function(args) {
		if (IsNull(args)) {
			args = new Mscrm.FormInputControl.ResultEventArgs;
			args.$5_1.items = this.Items(false, false, false, false, false)
		}
		var $v_0 = this.get_events().getHandler("OnAfterSelectEvent");
		!IsNull($v_0) && $v_0(this, args)
	},
	RaiseOnChangeEvent : function(args) {
		if (IsNull(args)) {
			args = new Mscrm.FormInputControl.ResultEventArgs;
			args.$5_1.items = this.Items(false, false, false, false, false)
		}
		this.fireControlEvent("OnInternalBeforeChangeEvent", args);
		args.$R_1 && this.fireControlEvent("OnChangeEvent", args)
	},
	RaiseSetAdditionalParamsEvent : function() {
		var $v_0 = this.get_events().getHandler("OnSetAdditionalParamsEvent");
		!IsNull($v_0) && $v_0(this, Sys.EventArgs.Empty)
	},
	AreValuesDifferent : function(items) {
		return Mscrm.FormInputControl.LookupUIBehavior.itemsDifferent(items,
				this.$g_4(false, false))
	},
	RefreshLookupItemImage : function() {
		var $v_0 = this.getLookupField();
		if (IsNull($v_0))
			return;
		var $v_1 = $v_0.getElementsByTagName("Img");
		if (!IsNull($v_1))
			for ( var $v_2 = $v_1.length, $v_3 = 0; $v_3 < $v_2; $v_3++) {
				var $v_4 = $v_1[$v_3];
				if (!IsNull($v_4)) {
					var $v_5 = $v_4.getAttribute("imageSrc");
					if (!IsNull($v_5))
						$v_4.src = $v_5
				}
			}
	},
	GetLookupTypeIcon : function(currentType, unresolvedCategory) {
		var $v_0 = new Mscrm.FormInputControl.LookupTypeIcon;
		$v_0.$O_0 = Mscrm.IconUtil.isIconFlipped(currentType, 0);
		if (Mscrm.EntityPropUtil.isActivityTypeCode(currentType)
				&& (this.get_lookupTypes() === "4200"
						|| this.get_lookupTypes().indexOf("4200,") !== -1 || this
						.get_lookupTypes().indexOf(",4200") !== -1)
				|| currentType === 9005)
			$v_0.$B_0 = Mscrm.IconUtil.getIconPath(currentType, 0).toString();
		else {
			if (!IsNull(this.get_lookupTypes())
					&& !IsNull(this.get_lookupTypeIcons())
					&& this.get_lookupTypes().length > 0
					&& this.get_lookupTypeIcons().length > 0)
				for ( var $v_1 = this.get_lookupTypes().split(","), $v_2 = this
						.get_lookupTypeIcons().split(":"), $v_3 = $v_1.length, $v_4 = 0; $v_4 < $v_3; $v_4++)
					if ($v_1[$v_4] === currentType.toString())
						$v_0.$B_0 = $v_2[$v_4];
			if (currentType === Mscrm.EntityTypeCode.UnresolvedEmailParty) {
				$v_0.$B_0 = "/_imgs/ico_16_9206.gif";
				$v_0.$O_0 = false
			} else if (unresolvedCategory === LookupItemCategories.AMBIGUOUS)
				$v_0.$B_0 = "/_imgs/error/notif_icn_warn16.png";
			else if (unresolvedCategory === LookupItemCategories.UNKNOWN)
				$v_0.$B_0 = "/_imgs/error/notif_icn_crit16.png"
		}
		return $v_0
	},
	Focus : function(eventObject) {
		this.tryStopFocusEventPropagation(eventObject);
		var $v_0 = this.getLookupField(), $v_1 = this.getLookupEdit();
		if (IsNull($v_1) || $v_1.className === "ms-crm-Hidden-NoBehavior") {
			try {
				$v_0.style.backgroundColor = "#abc0e7";
				$v_0.focus()
			} catch ($$e_3) {
			}
			if (!IsNull($v_1))
				$v_1.disabled = true
		} else
			try {
				$v_1.focus()
			} catch ($$e_4) {
			}
	},
	tryStopFocusEventPropagation : function(eventObject) {
		if (this.get_isInlineLookup())
			if (!IsNull(eventObject)) {
				eventObject.stopPropagation();
				return true
			}
		return false
	},
	UpdateItem : function(guid, lookupControlItem, fireOnChange) {
		if (!this.IsPermissibleType(lookupControlItem)
				|| IsNull(lookupControlItem.name)
				|| IsNull(lookupControlItem.displayClass))
			return false;
		for ( var $v_0 = this.$7_4(), $v_1 = this.getLookupField()
				.getElementsByTagName("SPAN"), $v_2 = $v_1.length, $v_3 = 0; $v_3 < $v_2; $v_3++) {
			var $v_4 = $v_1[$v_3];
			if ($v_4.getAttribute("oid") === guid) {
				if ($v_0) {
					var $v_7 = XUI.Html.DomUtils
							.GetNextSibling(XUI.Html.DomUtils
									.GetFirstChild(XUI.Html.DomUtils
											.GetFirstChild($v_4)));
					if (!IsNull($v_7)) {
						$v_7.nodeValue = lookupControlItem.name;
						XUI.Html.SetText($v_7, lookupControlItem.name)
					}
				} else {
					var $v_8 = XUI.Html.DomUtils
							.GetNextSibling(XUI.Html.DomUtils
									.GetFirstChild($v_4));
					if (!IsNull($v_8)) {
						$v_8.nodeValue = lookupControlItem.name;
						XUI.Html.SetText($v_8, lookupControlItem.name)
					}
				}
				$v_4.title = lookupControlItem.name;
				!IsNull(lookupControlItem.id)
						&& $v_4.setAttribute("oid", lookupControlItem.id);
				if (!IsNull(lookupControlItem.type)) {
					$v_4.setAttribute("otype", lookupControlItem.type);
					$v_4
							.setAttribute(
									"otypename",
									IsNull(lookupControlItem.typename) ? this.$J_4[parseInt(
											lookupControlItem.type, 10)]
											: lookupControlItem.typename);
					var $v_9 = XUI.Html.DomUtils.GetFirstChild($v_4);
					if ($v_0)
						$v_9 = XUI.Html.DomUtils.GetFirstChild($v_9);
					$v_9.src = this.GetLookupTypeIcon(lookupControlItem.type,
							lookupControlItem.category).$B_0
				}
				if (!IsNull(lookupControlItem.displayClass))
					$v_4.className = lookupControlItem.displayClass;
				!IsNull(lookupControlItem.onclick)
						&& $v_4.setAttribute("onclick",
								lookupControlItem.onclick);
				!IsNull(lookupControlItem.data)
						&& $v_4.setAttribute("data", lookupControlItem.data);
				!IsNull(lookupControlItem.category)
						&& $v_4.setAttribute("category",
								lookupControlItem.category);
				!IsNull(lookupControlItem.ambiguousRecordsXml)
						&& $v_4.setAttribute("ambiguousRecordsXml",
								lookupControlItem.ambiguousRecordsXml);
				!IsNull(lookupControlItem.resourceSpecId)
						&& $v_4.setAttribute("resourcespecid",
								lookupControlItem.resourceSpecId);
				!IsNull(lookupControlItem.effort)
						&& $v_4
								.setAttribute("effort",
										lookupControlItem.effort);
				!IsNull(lookupControlItem.exchangeEntryId)
						&& $v_4.setAttribute("exchangeentryid",
								lookupControlItem.exchangeEntryId);
				!IsNull(lookupControlItem.activityPartyId)
						&& $v_4.setAttribute("activitypartyid",
								lookupControlItem.activityPartyId);
				typeof lookupControlItem.values !== Mscrm.TypeNames.undefinedType
						&& $v_4.setAttribute("values", this
								.$p_4(lookupControlItem.values));
				typeof lookupControlItem.keyValues !== Mscrm.TypeNames.undefinedType
						&& $v_4.setAttribute("keyValues", this
								.$p_4(lookupControlItem.keyValues));
				var $v_5 = new Mscrm.FormInputControl.ResultEventArgs;
				$v_5.$5_1.items = this.Items(false, false, false, false, false);
				if (!$v_0)
					if (!IsNull($v_5.$5_1.items) && $v_5.$5_1.items.length > 0)
						$v_5.$5_1.items[0].keyValues = lookupControlItem.keyValues;
				this.RaiseOnAfterSelectEvent($v_5);
				if (fireOnChange) {
					$v_5 = new Mscrm.FormInputControl.ResultEventArgs;
					$v_5.$5_1.items = this.Items(false, false, false, false,
							false);
					if (!$v_0)
						if (!IsNull($v_5.$5_1.items)
								&& $v_5.$5_1.items.length > 0)
							$v_5.$5_1.items[0].keyValues = lookupControlItem.keyValues;
					this.RaiseOnChangeEvent($v_5)
				}
				var $v_6 = [];
				Array.add($v_6, $v_4);
				this.queryLookupPresence($v_6);
				this.$N_4();
				this.$m_4();
				return true
			}
		}
		return false
	},
	IsPermissibleType : function(lookupControlItem) {
		if (typeof lookupControlItem === Mscrm.TypeNames.stringType)
			return true;
		if (lookupControlItem.category === LookupItemCategories.UNKNOWN_TYPE)
			return true;
		if (this.$M_4
				&& parseInt(lookupControlItem.type, 10) === Mscrm.EntityTypeCode.None
				|| parseInt(lookupControlItem.type, 10) === Mscrm.EntityTypeCode.UnresolvedEmailParty)
			return true;
		if (!this.$F_4 && !this.hasUnresolvedText())
			if (!this.get_isDirty())
				return true;
		if (!IsNull(lookupControlItem.typename)
				&& !isNullOrEmptyString(lookupControlItem.typename)) {
			if (isNullOrEmptyString(this.get_lookupTypeNames()))
				return false;
			this.$1M_4 = new RegExp("(?:^|,)\\s*" + lookupControlItem.typename
					+ "\\s*:\\s*([0-9]+)\\s*:\\s*([^,]+)\\s*(?:,|$)", "i");
			var $v_0 = this.$1M_4.exec(this.get_lookupTypeNames());
			if (!IsNull($v_0))
				lookupControlItem.type = $v_0[1];
			else
				return false
		} else if (!IsNull(lookupControlItem.type)
				&& !isNaN(parseInt(lookupControlItem.type, 10))) {
			var $v_1 = parseInt(lookupControlItem.type, 10) === Mscrm.EntityTypeCode.AppWorkflowInstance ? Mscrm.EntityTypeCode.AsyncOperation
					: lookupControlItem.type;
			if (Mscrm.EntityPropUtil.isActivityTypeCode($v_1)
					&& (this.get_lookupTypes() === "4200"
							|| this.get_lookupTypes().indexOf("4200,") !== -1 || this
							.get_lookupTypes().indexOf(",4200") !== -1))
				return true;
			if (isNullOrEmptyString(this.get_lookupTypes()))
				return false;
			if ($v_1.toString() !== this.get_lookupTypes())
				if (this.get_lookupTypes().indexOf($v_1 + ",") === -1) {
					if (this.get_lookupTypes().indexOf("," + $v_1) === -1)
						return false;
					lookupControlItem.typename = this.$J_4[parseInt(
							lookupControlItem.type, 10)]
				}
		} else
			return false;
		return true
	},
	GetDataXml : function(attributeName) {
		var $v_0 = "", $v_1 = null, $v_2 = this.$2K_4();
		if (!IsNull($v_2.$5_1))
			$v_0 = $v_2.$5_1;
		else {
			var $v_3 = !IsNull(attributeName) ? attributeName : this
					.get_element().id;
			$v_0 = "<" + CrmEncodeDecode.CrmXmlEncode($v_3);
			if (this.get_lookupStyle().toLowerCase() === "single"
					|| this.get_lookupStyle().toLowerCase() === "subject") {
				$v_1 = this.Items(false, false, false, false, false);
				if ($v_1.length > 0) {
					$v_0 += ' type="'
							+ CrmEncodeDecode
									.CrmXmlAttributeEncode($v_1[0].type) + '"';
					$v_0 += ' name="'
							+ CrmEncodeDecode
									.CrmXmlAttributeEncode($v_1[0].name) + '"';
					$v_0 += ">" + CrmEncodeDecode.CrmXmlEncode($v_1[0].id)
				} else {
					var $v_4 = this.get_defaultValue();
					$v_0 += ' type="';
					if (IsNull($v_4))
						$v_0 += '0">';
					else {
						$v_0 += CrmEncodeDecode
								.CrmXmlAttributeEncode(this.$U_4[0].type);
						$v_0 += '" name="'
								+ CrmEncodeDecode
										.CrmXmlAttributeEncode(this.$U_4[0].name)
								+ '">'
					}
				}
			} else if (this.get_lookupStyle().toLowerCase() === "multi") {
				$v_0 += ">";
				$v_1 = this.Items(false, false, false, false, false);
				for ( var $v_5 = $v_1.length, $v_6 = 0; $v_6 < $v_5; $v_6++)
					$v_0 += String
							.format(
									"<item><id>{0}</id><type>{1}</type><name>{2}</name></item>",
									CrmEncodeDecode.CrmXmlEncode($v_1[$v_6].id),
									CrmEncodeDecode
											.CrmXmlEncode($v_1[$v_6].type),
									CrmEncodeDecode
											.CrmXmlEncode($v_1[$v_6].name))
			} else
				$v_0 += ">dataxml NYI for lookup of style = "
						+ CrmEncodeDecode.CrmXmlEncode(this.get_lookupStyle());
			$v_0 += "</" + CrmEncodeDecode.CrmXmlEncode($v_3) + ">"
		}
		return $v_0
	},
	setFocus : function(eventObject) {
		this.tryStopFocusEventPropagation(eventObject);
		if (this.$b_4) {
			this.$b_4 = false;
			return
		}
		this.$1_4 = "start";
		if (!IsNull(eventObject) && eventObject.shiftKey)
			this.$1_4 = "end";
		if (!IsNull(eventObject) && !IsNull(eventObject.target)) {
			var $v_0 = eventObject.target;
			switch ($v_0.className.toLowerCase()) {
			case "ms-crm-lookup-item":
			case "ms-crm-lookup-partyitem-noaddress":
			case "ms-crm-lookup-partyitem-unresolved":
			case "ms-crm-lookup-ambiguous":
			case "ms-crm-lookup-unresolved":
				switch ($v_0.tagName.toUpperCase()) {
				case "SPAN":
				case "IMG":
					return
				}
				break
			}
		}
		if (!this.get_disabled()) {
			var $v_1 = this.getLookupEdit();
			if (!IsNull($v_1))
				$v_1.disabled = true;
			var $v_2 = !IsNull(eventObject) && eventObject.type === "focus";
			if (this.isEditable() && !$v_2) {
				var $v_5 = this.$f_4();
				!IsNull($v_5) && !IsNull($v_5.GetTab)
						&& $v_5.GetTab(this.get_element(), true)
			}
			var $v_3 = this.getLookupField();
			if (XUI.Html.GetText($v_3).length <= 0
					&& !this.Items(true, true, false, false, false).length)
				if (isControlVisible(this.get_element()))
					this.$1F_4();
				else
					return;
			var $v_4 = XUI.Html.DomUtils.GetFirstChild($v_3);
			if (!Mscrm.Utilities.get_isLeftToRight() && !IsNull($v_3)
					&& !IsNull($v_4)) {
				var $v_6 = XUI.Html.DomUtils.GetFirstChild($v_4);
				if (!IsNull($v_6)) {
					var $v_7 = $v_6;
					$v_7.scrollIntoView(false)
				}
			}
			if (!IsNull(eventObject) && !IsNull(eventObject.target)
					&& eventObject.target === this.get_element())
				return;
			this.$1w_4()
		}
	},
	fireOnChange : function() {
		this.RaiseOnChangeEvent(null)
	},
	onLookup : function(domEvent) {
		if (this.get_isInlineLookup() && !this.$i_4)
			if (!IsNull(this.get_element().getAttribute("isDeDupLookup"))
					&& this.get_element().getAttribute("isDeDupLookup")
							.toString() === "1"
					&& !isNullOrEmptyString(this.$1Z_4()))
				this.$2f_4();
			else
				this.showSearchResults();
		else
			this.Lookup(false, false, "", false)
	},
	$1w_4 : function() {
		var $v_0 = XUI.Html.CreateDomEvent("focus");
		XUI.Html.DispatchDomEvent(this.get_element(), $v_0)
	},
	$2f_4 : function() {
		this.$2a_4(this.$$d_$2g_4)
	},
	$2a_4 : function($p0) {
		var $v_0 = null, $v_1 = this.$28_4();
		$v_0 = new RemoteCommand("LookupService", "RetrieveDuplicates");
		$v_0.SetParameter("leadId", this.$1Z_4());
		$v_0.SetParameter("lookupType", $v_1);
		$v_0.SetParameter("inlineViewIds", this.get_element().getAttribute(
				"inlineViewIds"));
		Mscrm.MetricsReporting.instance().addMetric("MatchRecords",
				$v_1.toString());
		$v_0.Execute($p0)
	},
	$28_4 : function() {
		return parseInt(this.get_element().getAttribute("lookuptypes")
				.toString())
	},
	$2g_4 : function($p0, $p1) {
		this.$1U_4($p0);
		this.showInlineLookupMenu()
	},
	$1Z_4 : function() {
		return window._id
	},
	$2S_4 : function($p0) {
		var $v_0 = this.get_events().getHandler("OnShowDialog");
		if (!IsNull($v_0)) {
			$v_0(this, $p0);
			return true
		}
		return false
	},
	focusEdit : function(domEvent) {
		if (this.$c_4) {
			this.$c_4 = false;
			return
		}
		var $v_0 = XUI.Html.CreateDomEvent("focus");
		XUI.Html.DispatchDomEvent(this.get_element(), $v_0)
	},
	$f_4 : function() {
		if (!this.get_isInlineLookup()) {
			var $v_0 = this.get_element();
			while (!IsNull($v_0) && $v_0.tagName !== "FORM")
				$v_0 = $v_0.parentNode;
			if (IsNull($v_0))
				return null;
			return $v_0.className === "ms-crm-Form" ? $find($v_0.id) : null
		} else
			return $find(this.get_element().getAttribute(
					Mscrm.InlineEditConstants.HtmlAttributeForFormDataEntityId))
	},
	$1F_4 : function() {
		if (this.$o_4()) {
			var $v_0 = this.getLookupEdit(), $v_1 = this.getLookupField(), $v_2 = this
					.$7_4()
					&& XUI.Html.GetText($v_1).length > 0;
			if (!IsNull($v_0)) {
				$v_0.disabled = false;
				if (this.get_isInlineLookup())
					$v_0.className = "ms-crm-InlineInput ms-crm-InlineLookupEdit";
				else
					$v_0.className = "ms-crm-Normal";
				Sys.UI.DomElement.addCssClass($v_1, $v_2
						&& !this.get_isInlineLookup() ? "ms-crm-FloatLookup"
						: "ms-crm-Hidden-NoBehavior");
				try {
					$v_0.focus()
				} catch ($$e_3) {
				}
				if ($v_2) {
					$v_1.style.top = ($v_1.offsetTop + $v_0.offsetHeight)
							.toString()
							+ "px";
					$v_1.style.width = $v_1.parentNode.offsetWidth.toString()
							+ "px"
				} else
					$v_1.style.width = "0px"
			}
		}
	},
	endContentEditing : function(isOnBlur) {
		this.$S_4();
		var $v_0 = this.getLookupEdit(), $v_1 = this.getLookupField();
		if (!IsNull($v_0) && $v_0.className !== "ms-crm-Hidden-NoBehavior") {
			if ($v_1.className.indexOf("ms-crm-FloatLookup") >= 0) {
				$v_1.style.top = (Mscrm.Utilities.parseInt(XUI.Html
						.GetComputedStyle($v_1, "top")) - $v_0.offsetHeight)
						.toString()
						+ "px";
				$v_1.style.width = "100%"
			} else
				$v_1.style.width = "100%";
			$v_0.className = "ms-crm-Hidden-NoBehavior";
			Sys.UI.DomElement.removeCssClass($v_1, "ms-crm-FloatLookup");
			Sys.UI.DomElement.removeCssClass($v_1, "ms-crm-Hidden-NoBehavior");
			$v_0.value = ""
		}
	},
	$2d_4 : function() {
		var $v_0 = this.getLookupEdit();
		if (IsNull($v_0))
			return;
		$addHandler($v_0, "dblclick", this.$$d_$2G_4);
		$addHandler($v_0, "keyup", this.$$d_$2Q_4);
		$addHandler($v_0, "keypress", this.$$d_$2O_4);
		$addHandler($v_0, "keydown", this.$$d_$2M_4);
		$addHandler($v_0, "blur", this.$$d_$2J_4);
		$addHandler($v_0, "focus", this.$$d_focusEdit);
		this.$1R_4($v_0)
	},
	$1R_4 : function($p0) {
		if (IsNull($p0))
			$p0 = this.getLookupEdit();
		if (IsNull($p0))
			return;
		$p0.disabled = true;
		var $v_0 = this.$o_4();
		if ($v_0 && $p0.style.display === "none")
			$p0.style.display = "inline";
		else if (!$v_0 && $p0.style.display !== "none")
			$p0.style.display = "none"
	},
	$o_4 : function() {
		return this.get_autoResolve() && !this.getLookupField().disabled
				&& this.isEditable()
	},
	$2C_4 : function() {
		var $v_0 = this.getLookupField();
		$addHandler($v_0, "dblclick", this.$$d_$2F_4);
		$addHandler($v_0, "keyup", this.$$d_$2P_4);
		$addHandler($v_0, "keypress", this.$$d_$2N_4);
		$addHandler($v_0, "keydown", this.$$d_$2L_4);
		$addHandler($v_0, "focus", this.$$d_setFocus);
		$addHandler($v_0, "blur", this.$$d_$1s_4);
		this.$2d_4();
		this.get_element().title = this.get_element().alt = this.get_disabled() ? ""
				: this.$1c_4();
		XUI.Html.DomUtils.GetNextSibling(this.get_element()).title = this
				.get_element().title;
		var $v_1 = this.getLookupEdit();
		if (!IsNull($v_1)) {
			XUI.Html.SetText(XUI.Html.DomUtils.GetPrevSibling($v_1), this
					.$1a_4());
			Mscrm.Utilities.isIosDevice() && this.$o_4()
					&& $v_0.setAttribute("contentEditable", "true")
		}
		this.set_defaultValue(this.$g_4(false, false));
		this.set_forceSubmit(false);
		var $v_2 = this.get_lookupTypeNames();
		if (!isNullOrEmptyString($v_2)) {
			var $v_3 = new RegExp(
					"(?:^|,)\\s*([^:]+)\\s*:\\s*([0-9]+)\\s*:\\s*([^,]+)\\s*",
					"ig"), $v_4 = null;
			while (!IsNull($v_4 = $v_3.exec($v_2))) {
				this.$J_4[parseInt($v_4[2], 10)] = $v_4[1];
				this.$e_4[parseInt($v_4[2], 10)] = $v_4[3]
			}
		}
		this.$2D_4()
	},
	$1c_4 : function() {
		if (this.get_isInlineLookup())
			return window.LOCID_INLINELOOKUP_SELECT_VALUE;
		var $v_0 = this.$1a_4();
		return !isNullOrEmptyString($v_0) ? String.format(
				window.LOCID_LU_SELECT_VALUE_FOR, $v_0)
				: window.LOCID_LU_SELECT_VALUE
	},
	$1a_4 : function() {
		if (!IsNull(this.get_forField()))
			return this.get_forField();
		var $v_0 = XUI.Html.DomUtils
				.GetPrevSibling(this.get_element().parentNode.parentNode.parentNode.parentNode.parentNode);
		if (!IsNull($v_0)) {
			var $v_2 = XUI.Html.GetText($v_0);
			if (!isNullOrEmptyString($v_2))
				return $v_2.trim()
		}
		var $v_1 = XUI.Html.DomUtils
				.GetFirstChild(this.get_element().parentNode.parentNode);
		if (!IsNull($v_1)) {
			var $v_3 = XUI.Html.DomUtils.GetFirstChild($v_1);
			if (!IsNull($v_3)) {
				$v_0 = XUI.Html.DomUtils.GetNextSibling($v_3);
				if (!IsNull($v_0)) {
					var $v_4 = XUI.Html.GetText($v_0);
					if (!isNullOrEmptyString($v_4))
						return $v_4
				}
			}
		}
		return ""
	},
	$2G_4 : function($p0) {
		var $v_0 = this.getLookupEdit();
		if ($v_0.className !== "ms-crm-Hidden-NoBehavior") {
			if (!$v_0.value.length)
				if (this.isMruEnabled() && !this.isMruVisible()) {
					this.$1G_4(true);
					return
				}
			this.Lookup(true, true, $v_0.value, false);
			this.endContentEditing(false)
		}
	},
	$2F_4 : function($p0) {
		var $v_0 = $p0.target;
		while ($v_0.tagName.toUpperCase() !== "DIV")
			$v_0 = $v_0.parentNode;
		if (!this.get_disabled() && XUI.Html.GetText($v_0) === " ") {
			this.Focus(null);
			Mscrm.Utilities.click(this.get_element())
		}
	},
	$1r_4 : function($p0) {
		for ( var $v_0 = $p0.length, $v_1 = 0; $v_1 < $v_0; $v_1++)
			$p0[$v_1].typename = this.$J_4[parseInt($p0[$v_1].type, 10)]
	},
	$29_4 : function($p0) {
		var $v_0 = this.get_lookupTypeNames();
		if (!isNullOrEmptyString($v_0)) {
			var $v_1 = new RegExp("(?:^|,)\\s*" + $p0
					+ "\\s*:\\s*([0-9]+)\\s*:\\s*([^,]+)\\s*(?:,|$)", "i");
			if ($v_1.test($v_0))
				return $v_1.exec($v_0)[1]
		}
		return 0
	},
	$1v_4 : function($p0) {
		for ( var $v_0 = $p0.length, $v_1 = 0; $v_1 < $v_0; $v_1++) {
			var $v_2 = $p0[$v_1], $v_3 = $v_2.values;
			if (!IsNull($v_3) && typeof $v_3 === Mscrm.TypeNames.stringType)
				$v_2.values = Sys.Serialization.JavaScriptSerializer
						.deserialize($v_3);
			var $v_4 = $v_2.keyValues;
			if (!IsNull($v_4) && typeof $v_4 === Mscrm.TypeNames.stringType)
				$v_2.keyValues = Sys.Serialization.JavaScriptSerializer
						.deserialize($v_4)
		}
	},
	$1y_4 : function($p0) {
		if (IsNull($p0))
			return null;
		else if (!IsNull($p0.get_objectTypeName))
			return $p0.get_objectTypeName();
		else
			return $p0.get_typeName()
	},
	$15_4 : function($p0) {
		if (IsNull($p0))
			return null;
		else if (!IsNull($p0.get_objectId))
			return $p0.get_objectId();
		else
			return $p0.get_recordId()
	},
	$1Y_4 : function($p0) {
		if (IsNull($p0))
			return null;
		else if (!IsNull($p0.get_objectTypeCode))
			return $p0.get_objectTypeCode();
		else
			return Mscrm.EntityPropUtil.EntityTypeName2CodeMap[$p0
					.get_typeName()]
	},
	$1X_4 : function() {
		var $v_0 = this.get_filterRelationshipId(), $v_1 = "", $v_2 = "", $v_3 = this
				.get_element().getAttribute("DependantAttributeName"), $v_4 = this
				.get_element().getAttribute("DependantAttributeType");
		if (!isNullOrEmptyString($v_0))
			if (!isNullOrEmptyString($v_3) && !isNullOrEmptyString($v_4)) {
				var $v_5 = this.$f_4();
				if (!IsNull($v_5)) {
					var $v_6 = $v_3.split(".");
					if ($v_6.length > 1)
						if ($v_6[0] !== this.$1y_4($v_5)) {
							$v_1 = this.$15_4($v_5);
							$v_2 = this.$1Y_4($v_5)
						} else {
							var $v_7 = $get($v_6[1]), $v_8 = Mscrm.FormControlInputBehavior
									.GetElementBehavior($v_7);
							if (IsNull($v_8) && this.get_isInlineLookup())
								$v_8 = Mscrm.FormControlInputBehavior
										.GetBehavior($v_6[1] + "_i");
							if (!IsNull($v_8)) {
								$v_2 = $v_4;
								var $v_9 = $v_8.get_dataValue();
								if (!IsNull($v_9))
									if ($v_7.className === "ms-crm-Hidden")
										$v_1 = $v_9;
									else if ($v_9[0].id.length)
										if ($v_4 === $v_9[0].type) {
											$v_1 = $v_9[0].id;
											$v_2 = $v_9[0].type
										}
							}
						}
				}
				if (IsNull($v_1) || IsNull($v_2) || IsNull($v_3) || $v_1 === ""
						|| $v_2 === "" || $v_3 === "") {
					$v_1 = "";
					$v_2 = "";
					$v_0 = "";
					$v_3 = ""
				}
			}
		return new Mscrm.FormInputControl.FilterRelationshipData($v_0, $v_1,
				$v_2, $v_3)
	},
	$2H_4 : function($p0) {
		if (IsNull($p0))
			return null;
		if (IsNull($p0.tagName))
			return null;
		do {
			if ($p0.tagName.toUpperCase() === "DIV"
					|| $p0.tagName.toUpperCase() === "SPAN"
					|| $p0.tagName.toUpperCase() === "LI")
				if ($p0.className.toLowerCase().indexOf("ms-crm-lookup") >= 0)
					return $p0;
			if (IsNull($p0.parentNode) || $p0.parentNode === $p0)
				return null;
			$p0 = $p0.parentNode
		} while (true)
	},
	$2Q_4 : function($p0) {
		switch ($p0.keyCode) {
		case 13:
		case 27:
		case 127:
		case 38:
		case 40:
		case 9:
		case 16:
		case 17:
		case 18:
			$p0.stopPropagation();
			$p0.preventDefault();
			break;
		default:
			if (this.get_isInlineLookup() && !IsNull(this.$0_4)
					&& this.$0_4.get_isVisible()) {
				if (this.$3_4 !== -1) {
					var $v_0 = this.$0_4.get_menuItems()[this.$3_4];
					!IsNull($v_0) && $v_0.displayRestStyle()
				}
				this.$3_4 = -1
			} else
				this.$1G_4(false);
			break
		}
	},
	$2P_4 : function($p0) {
		switch ($p0.keyCode) {
		case 8:
			$p0.preventDefault();
			$p0.stopPropagation();
			break;
		case 13:
			$p0.preventDefault();
			$p0.stopPropagation();
			break;
		case 85:
			$p0.ctrlKey && $p0.stopPropagation();
			break
		}
	},
	$2O_4 : function($p0) {
		switch ($p0.keyCode) {
		case 13:
			$p0.preventDefault();
			$p0.stopPropagation();
			break;
		case 11:
		case 75:
			$p0.ctrlKey && $p0.preventDefault();
			break
		}
	},
	$2N_4 : function($p0) {
		switch ($p0.keyCode) {
		case 8:
			$p0.stopPropagation();
			$p0.preventDefault();
			return;
		case 13:
			$p0.stopPropagation();
			$p0.preventDefault();
			break;
		case 11:
		case 75:
			if ($p0.ctrlKey) {
				$p0.preventDefault();
				return
			}
			break;
		case 85:
			if ($p0.ctrlKey) {
				$p0.stopPropagation();
				$p0.preventDefault();
				return
			}
			break
		}
	},
	getLookupEdit : function() {
		try {
			return XUI.Html.DomUtils.GetLastChild(XUI.Html.DomUtils
					.GetFirstChild(this.get_element().parentNode.parentNode))
		} catch ($$e_0) {
			return null
		}
	},
	$24_4 : function() {
		var $v_0 = this.get_element(), $v_1 = this.get_element().ownerDocument.body;
		do {
			$v_0 = $v_0.parentNode;
			if (!IsNull($v_0)) {
				if ($v_0.className === "ms-crm-Lookup"
						&& $v_0.tagName.toUpperCase() === "TABLE")
					return $v_0
			} else
				return null
		} while ($v_0 !== $v_1);
		return null
	},
	$1S_4 : function($p0) {
		if (IsNull(this.$1_4)
				|| typeof this.$1_4 === Mscrm.TypeNames.stringType) {
			this.$1_4 = $p0;
			return
		}
		this.$1_4.style.border = "";
		this.$1_4 = $get($p0)
	},
	resolveAndExitEdit : function(isBlur, asyncOperation) {
		var $v_0 = this.getLookupEdit();
		if (IsNull($v_0))
			return;
		if (this.get_autoResolve() && this.hasUnresolvedText()) {
			var $v_1 = XUI.Html.DomUtils.GetFirstChild(this.getLookupField());
			if (this.$7_4())
				$v_1.innerHTML = String.format(
						'{0}<LI style="display:inline">{1}</LI>',
						$v_1.innerHTML, CrmEncodeDecode
								.CrmHtmlEncode($v_0.value));
			else
				$v_1.innerHTML = String.format(
						'<LI style="display:inline">{0}</LI>', CrmEncodeDecode
								.CrmHtmlEncode($v_0.value));
			this.$N_4();
			this.Lookup(true, true, $v_0.value, asyncOperation)
		}
		this.endContentEditing(isBlur);
		$v_0.disabled = true
	},
	hasUnresolvedText : function() {
		var $v_0 = this.getLookupEdit();
		return !IsNull($v_0) && $v_0.value.trim().length > 0
	},
	$2J_4 : function($p0) {
		if (this.get_isInlineLookup())
			return;
		var $v_0 = this.getLookupEdit();
		if (this.isMruVisible()) {
			!IsNull($v_0) && $v_0.focus();
			return
		}
		if (!IsNull($v_0)
				&& !Sys.UI.DomElement.containsCssClass($v_0,
						"ms-crm-Hidden-NoBehavior")) {
			this.$b_4 = true;
			var $$t_2 = this;
			window.setTimeout(function() {
				$$t_2.$b_4 = false
			}, 50)
		}
		this.resolveAndExitEdit(true, true)
	},
	toggleSwallowFocusEdit : function() {
		this.$c_4 = false
	},
	$1s_4 : function($p0) {
		this.$c_4 = true;
		this.$1S_4("end");
		var $v_0 = this.getLookupField();
		$v_0.style.backgroundColor = ""
	},
	$2I_4 : function($p0) {
		if (this.get_disabled())
			return;
		this.setonImage()
	},
	setonImage : function() {
		if (this.get_isInlineLookup())
			this.get_element().src = "/_imgs/search_hover.gif";
		else
			this.get_element().src = "/_imgs/btn_on_lookup.png"
	},
	$G_4 : function($p0) {
		if (this.get_disabled())
			return;
		this.setoffImage()
	},
	setoffImage : function() {
		if (this.get_isInlineLookup())
			this.get_element().src = "/_imgs/search_normal.gif";
		else
			this.get_element().src = "/_imgs/btn_off_lookup.png"
	},
	$1B_4 : function() {
		if (this.get_disabled())
			return;
		this.get_element().src = "/_imgs/btn_lookup_resolving.gif"
	},
	$g_4 : function($p0, $p1) {
		!this.$F_4 && this.get_autoResolve() && this.hasUnresolvedText()
				&& this.resolveAndExitEdit(true, false);
		var $v_0 = this.Items($p0, $p1, false, false, false);
		if (!$v_0.length)
			return null;
		return $v_0
	},
	setValue : function(items) {
		this.Clear(false);
		if (!IsNull(items)) {
			this.AddItems(items, false);
			this.endContentEditing(false)
		} else {
			var $v_0 = this.getLookupEdit();
			if (!IsNull($v_0))
				$v_0.value = ""
		}
		this.verify();
		this.handleDataValueChangedEvent()
	},
	verify : function() {
		return true
	},
	$N_4 : function() {
		this.$k_4 = null
	},
	$1z_4 : function() {
		if (this.$k_4)
			return this.$k_4;
		var $v_0 = this.get_defaultValue();
		if (!IsNull($v_0) && $v_0.length > 0)
			for ( var $v_2 = $v_0.length, $v_3 = 0; $v_3 < $v_2; $v_3++)
				if (!IsNull($v_0[$v_3].name))
					$v_0[$v_3].name = Mscrm.Utilities
							.trimSpaces($v_0[$v_3].name);
		var $v_1 = Mscrm.FormInputControl.LookupUIBehavior.itemsDifferent(this
				.$g_4(false, false), this.get_defaultValue());
		if (!$v_1) {
			var $v_4 = this.$g_4(true, true);
			if (!IsNull($v_4) && $v_4.length > 0)
				for ( var $v_5 = $v_4.length, $v_6 = 0; $v_6 < $v_5; $v_6++) {
					var $v_7 = $v_4[$v_6];
					if (!IsNull($v_7)
							&& ($v_7.category === LookupItemCategories.AMBIGUOUS || $v_7.category === LookupItemCategories.UNKNOWN)) {
						$v_1 = true;
						break
					}
				}
		}
		this.$k_4 = $v_1;
		return $v_1
	},
	$1l_4 : function() {
		window.setTimeout(this.$$d_RefreshLookupItemImage, 10)
	},
	addItem : function(lookupControlItem) {
		var $v_0 = this.$1P_4(lookupControlItem, true);
		return !!$v_0.length
	},
	$1P_4 : function($p0, $p1) {
		if (this.get_lookupStyle() === "single"
				&& this.getLookupField().getElementsByTagName("SPAN").length)
			return "";
		if (!this.IsPermissibleType($p0))
			return "";
		if (typeof $p1 === Mscrm.TypeNames.undefinedType)
			$p1 = true;
		var $v_0 = this.getLookupField();
		if (typeof $p0 === Mscrm.TypeNames.stringType) {
			var $v_1 = $p0;
			if ($p1) {
				XUI.Html.DomUtils.GetFirstChild($v_0).innerHTML += $v_1;
				this.$N_4()
			}
			return $v_1
		} else {
			if ($p1) {
				var $v_B = this.Items(false, true, false, false, false);
				if (this.$1f_4($p0, $v_B))
					return ""
			}
			var $v_2 = new Sys.StringBuilder;
			$v_2
					.append(String
							.format(
									'<LI style="float:{1};white-space:nowrap"><SPAN id="lookupItem" contentEditable="false" oid="{0}" otype="',
									CrmEncodeDecode
											.CrmHtmlAttributeEncode($p0.id),
									Mscrm.Utilities.get_isLeftToRight() ? "left"
											: "right"));
			if (IsNull($p0.type))
				$p0.type = this.$29_4($p0.typename);
			$v_2.append(String.format('{0}" otypename="{1}"', CrmEncodeDecode
					.CrmHtmlAttributeEncode($p0.type), CrmEncodeDecode
					.CrmHtmlAttributeEncode($p0.typename)));
			var $v_3, $v_4;
			if (this.get_isInlineLookup()) {
				$v_3 = window.LOCID_INLINELOOKUP_MOREMATCHES;
				$v_4 = window.LOCID_INLINELOOKUP_NOMATCH
			} else {
				$v_3 = window.LOCID_LU_LOOKUPAMBIGUOUSTOOLTIP;
				$v_4 = window.LOCID_LU_LOOKUPUNRESOLVEDTOOLTIP
			}
			if ($p0.category === LookupItemCategories.AMBIGUOUS) {
				$p0.displayClass = !this.get_isInlineLookup() ? "ms-crm-Lookup-Ambiguous"
						: null;
				$v_2
						.append(String
								.format(
										' category="{0}" title="{1}" ambiguousRecordsXml="{2}',
										CrmEncodeDecode
												.CrmHtmlAttributeEncode($p0.category),
										CrmEncodeDecode
												.CrmHtmlAttributeEncode($v_3),
										CrmEncodeDecode
												.CrmHtmlAttributeEncode($p0.ambiguousRecordsXml)))
			} else if ($p0.category === LookupItemCategories.UNKNOWN) {
				$p0.displayClass = !this.get_isInlineLookup() ? "ms-crm-Lookup-Unresolved"
						: null;
				$v_2.append(String.format(' category="{0}" title="{1}',
						CrmEncodeDecode.CrmHtmlAttributeEncode($p0.category),
						CrmEncodeDecode.CrmHtmlAttributeEncode($v_4)))
			} else if ($p0.category === LookupItemCategories.UNKNOWN_EMAIL) {
				$p0.displayClass = !this.get_isInlineLookup() ? "ms-crm-Lookup-PartyItem-Unresolved"
						: null;
				if (IsNull($p0.onclick))
					$p0.onclick = String
							.format(
									"ResolveUnkownParty(new Sys.UI.DomEvent(event), {0})",
									CrmEncodeDecode
											.CrmJavaScriptEncode($p0.name));
				$v_2.append(String.format(' category="{0}', CrmEncodeDecode
						.CrmHtmlAttributeEncode($p0.category)))
			} else if ($p0.category === LookupItemCategories.NON_ENTITY) {
				$p0.displayClass = "ms-crm-Lookup-Item-NonEntity";
				$p0.onclick = ""
			} else if ($p0.category === LookupItemCategories.UNKNOWN_TYPE) {
				$p0.displayClass = "ms-crm-Lookup-Item-NonEntity";
				$v_2.append(' category="'
						+ CrmEncodeDecode.CrmHtmlAttributeEncode($p0.category))
			} else if ($p0.category === LookupItemCategories.MRU_ITEM)
				$v_2.append(String.format(' category="{0}" title="{1}',
						CrmEncodeDecode.CrmHtmlAttributeEncode($p0.category),
						CrmEncodeDecode.CrmHtmlAttributeEncode($p0.name)));
			else
				$v_2.append('title="'
						+ CrmEncodeDecode.CrmHtmlAttributeEncode($p0.name));
			$v_2.append('" class="');
			$v_2.append(IsNull($p0.displayClass) ? "ms-crm-Lookup-Item"
					: CrmEncodeDecode.CrmHtmlAttributeEncode($p0.displayClass));
			if (this.get_isInlineLookup()
					&& $p0.category === LookupItemCategories.AMBIGUOUS) {
				$v_2.append(" ms-crm-LookupItemText-Color");
				$v_2.append('" onclick="');
				$v_2
						.append(String
								.format(
										"Mscrm.FormControlInputBehavior.GetBehavior({0}).showResultsForUnresolved()",
										CrmEncodeDecode
												.CrmJavaScriptEncode(this
														.get_element().id)));
				$v_2.append('" style="text-decoration:none; "')
			} else if (!this.get_isInlineLookup()
					|| $p0.category !== LookupItemCategories.UNKNOWN) {
				$v_2.append('" onclick="');
				$v_2
						.append(IsNull($p0.onclick) ? "openlui(new Sys.UI.DomEvent(event))"
								: CrmEncodeDecode
										.CrmHtmlAttributeEncode($p0.onclick))
			}
			(IsNull(this.get_additionalParams()) || this.get_additionalParams()
					.toUpperCase().indexOf("DISABLECONTEXTMENU=1") === -1)
					&& $v_2
							.append('" oncontextmenu="handleGridRightClick(new Sys.UI.DomEvent(event))');
			if (!IsNull($p0.data)) {
				$v_2.append('" data="');
				$v_2.append(CrmEncodeDecode.CrmHtmlAttributeEncode($p0.data))
			}
			!IsNull($p0.resourceSpecId)
					&& $v_2
							.append('" resourcespecid="'
									+ CrmEncodeDecode
											.CrmHtmlAttributeEncode($p0.resourceSpecId));
			!IsNull($p0.effort)
					&& $v_2.append('" effort="'
							+ CrmEncodeDecode
									.CrmHtmlAttributeEncode($p0.effort));
			var $v_5 = $p0.exchangeEntryId;
			!IsNull($v_5)
					&& $v_2.append('" exchangeentryid="'
							+ CrmEncodeDecode.CrmHtmlAttributeEncode($v_5));
			var $v_6 = $p0.activityPartyId;
			!IsNull($v_6)
					&& $v_2.append('" activitypartyid="'
							+ CrmEncodeDecode.CrmHtmlAttributeEncode($v_6));
			var $v_7 = $p0.values;
			if (!IsNull($v_7)) {
				var $v_C = this.$p_4($v_7);
				$v_2.append('" values="'
						+ CrmEncodeDecode.CrmHtmlAttributeEncode($v_C))
			}
			var $v_8 = $p0.keyValues;
			if (!IsNull($v_8)) {
				var $v_D = this.$p_4($v_8);
				$v_2.append('" keyValues="'
						+ CrmEncodeDecode.CrmHtmlAttributeEncode($v_D))
			}
			$v_2.append('">');
			this.$7_4()
					&& $v_2
							.append('<SPAN contentEditable="false" unselectable="on" wrapper="true">');
			var $v_9 = IsNull($p0.category)
					|| $p0.category !== LookupItemCategories.NON_ENTITY
					&& $p0.category !== LookupItemCategories.UNKNOWN_TYPE;
			$v_9 = $v_9
					&& !(this.get_isInlineLookup() && ($p0.category === LookupItemCategories.AMBIGUOUS || $p0.category === LookupItemCategories.UNKNOWN));
			$v_9 = $v_9
					&& !(this.get_isInlineLookup() && this.get_lookupTypes()
							.split(",").length < 2);
			if ($v_9) {
				var $v_E = this.GetLookupTypeIcon($p0.type, $p0.category), $v_F = this
						.$25_4($v_E.$B_0);
				$v_2.append('<IMG alt="');
				$v_2.append(CrmEncodeDecode.CrmHtmlAttributeEncode($v_F));
				$v_2.append('" class="ms-crm-Lookup-Item" imageSrc="');
				$v_2.append(CrmEncodeDecode.CrmHtmlAttributeEncode($v_E.$B_0));
				$v_2.append('"');
				!Mscrm.Utilities.get_isLeftToRight()
						&& $v_E.$O_0
						&& $v_2.append(' style="'
								+ Mscrm.Utilities.flipImage("h") + '"');
				$v_2.append(">")
			}
			$v_2.append("<SPAN class='ms-crm-LookupItem-Name");
			this.get_isInlineLookup()
					&& $p0.category === LookupItemCategories.AMBIGUOUS
					&& $v_2.append(" ms-crm-Inline-LookupItem-Ambiguous-Name");
			$v_2.append("' wrapper='true'>"
					+ CrmEncodeDecode.CrmHtmlEncode($p0.name));
			$v_2.append("</SPAN>");
			if ($p0.category !== LookupItemCategories.NON_ENTITY
					&& !window.UseTabletExperience) {
				$v_2.append("<a contentEditable='false' id=\"at");
				$v_2.append(CrmEncodeDecode.CrmHtmlAttributeEncode($p0.id));
				$v_2
						.append('" tabindex=-1 onclick="return false;" href="javascript:onclick();" target="_self" title="');
				$v_2.append(CrmEncodeDecode.CrmHtmlAttributeEncode($p0.name));
				$v_2.append("\" class='atLink'></a>")
			}
			if (this.$18_4()) {
				var $v_G = String
						.format(
								"Mscrm.FormControlInputBehavior.GetBehavior({0}).RemoveItem({1}); return false;",
								CrmEncodeDecode.CrmJavaScriptEncode(this
										.get_element().id), CrmEncodeDecode
										.CrmJavaScriptEncode($p0.id));
				$v_2
						.append('<a class="atLink" href="javascript:onclick();" onclick="'
								+ CrmEncodeDecode.CrmHtmlAttributeEncode($v_G)
								+ '" tabIndex="-1" title="'
								+ CrmEncodeDecode
										.CrmHtmlAttributeEncode(window.LOCID_LOOKUP_ITEM_REMOVE)
								+ '"></a>');
				$v_2
						.append('<a class="atLink" href="javascript:onclick();" onclick="openlui(new Sys.UI.DomEvent(event)); return false;" tabIndex="-1" title="'
								+ CrmEncodeDecode
										.CrmHtmlAttributeEncode(window.LOCID_LOOKUP_ITEM_PROPERTIES)
								+ '"></a>')
			}
			$v_2.append('<b class="IMG_lu_htc_b"></b>');
			this.$7_4() && $v_2.append("</SPAN>");
			$v_2.append("</SPAN></LI>");
			$v_0.innerHTML === "&nbsp;" && XUI.Html.SetText($v_0, "");
			var $v_A = $v_2.toString();
			if ($p1) {
				XUI.Html.DomUtils.GetFirstChild($v_0).innerHTML += $v_A;
				this.$N_4();
				this.$m_4()
			}
			return $v_A
		}
	},
	$25_4 : function($p0) {
		switch ($p0) {
		case "/_imgs/error/notif_icn_warn16.png":
			return window.LOCID_LU_LOOKUPAMBIGUOUSTOOLTIP;
		case "/_imgs/error/notif_icn_crit16.png":
			return window.LOCID_LU_LOOKUPUNRESOLVEDTOOLTIP
		}
		return ""
	},
	$2A_4 : function() {
		for ( var $v_0 = this.Items(true, false, false, false, false), $v_1 = $v_0.length, $v_2 = 0; $v_2 < $v_1; $v_2++) {
			var $v_3 = $v_0[$v_2];
			if (typeof $v_3 === Mscrm.TypeNames.stringType)
				return true
		}
		return false
	},
	$23_4 : function($p0) {
		this.$F_4 = true;
		if (typeof $p0 === Mscrm.TypeNames.undefinedType)
			$p0 = true;
		try {
			var $v_0 = {}, $v_1 = this.$16_4($v_0, "RetrieveItem"), $v_2 = $v_0.values;
			if ($v_2 !== "") {
				this.$1B_4();
				this.set_disabled(true);
				if ($p0)
					$v_1.Execute(this.$$d_autoResolveHandler);
				else
					this.autoResolveHandler($v_1.Execute(), null)
			} else
				this.$F_4 = false
		} catch ($$e_4) {
			alert(window.LOCID_LU_ERROR_RESOLVED)
		}
	},
	showSearchResults : function() {
		if (this.$i_4)
			return;
		this.$1B_4();
		this.RaiseSetAdditionalParamsEvent();
		var $$t_0 = this;
		window.setTimeout(function() {
			$$t_0.$2h_4()
		}, 0)
	},
	$2h_4 : function() {
		Mscrm.Utilities.addControlMarker(this.get_element().id, "Lookup",
				"StartLoadTimestamp", (new Date).getTime().toString());
		var $v_0 = null;
		try {
			$v_0 = this.$26_4(this.get_element().getAttribute("inlineViewIds"))
		} catch ($$e_1) {
			alert(window.LOCID_INLINELOOKUP_ERROR_SEARCH)
		}
		this.$1U_4($v_0);
		this.showInlineLookupMenu();
		Mscrm.Utilities.addControlMarker(this.get_element().id, "Lookup",
				"FinishLoadTimestamp", (new Date).getTime().toString())
	},
	$26_4 : function($p0) {
		var $v_0 = this.getLookupSearchText();
		if (null !== $v_0) {
			var $v_1 = {}, $v_2 = this.$22_4($v_1, $p0), $v_3 = [], $v_4 = [];
			$v_3.type = "string";
			$v_4.type = "int";
			Array.add($v_3, $v_0);
			Array.add($v_4, 0);
			$v_1.values = $v_3;
			$v_2.SetParameter("values", $v_3);
			$v_2.SetParameter("positions", $v_4);
			var $v_5 = $v_2.Execute();
			return $v_5
		}
		return null
	},
	$1U_4 : function($p0) {
		Array.clear(this.$8_4);
		if (!IsNull($p0) && $p0.Success
				&& typeof $p0.ReturnValue === Mscrm.TypeNames.stringType) {
			var $v_0 = XUI.Xml.LoadXml($p0.ReturnValue), $v_1 = {}, $v_2 = {}, $v_3 = XUI.Xml
					.SelectNodes($v_0.documentElement,
							"/SearchResults/Layout/Entity", null);
			if (!IsNull($v_3))
				for ( var $v_7 = $v_3.length, $v_8 = 0; $v_8 < $v_7; $v_8++) {
					var $v_9 = [], $v_A = XUI.Xml.GetText($v_3[$v_8].attributes
							.getNamedItem("otc")), $v_B = {}, $v_C = XUI.Xml
							.SelectSingleNode($v_3[$v_8], "Columns", null), $v_D = XUI.Xml.DomUtils
							.GetFirstChild($v_C);
					if (!IsNull($v_D)) {
						Array.add($v_9, $v_D);
						var $v_E = $v_D.nodeName, $v_F = Number
								.parseInvariant(XUI.Xml.GetText($v_D.attributes
										.getNamedItem("width")));
						$v_B[$v_E] = $v_F;
						var $v_G = XUI.Xml.DomUtils.GetNextSibling($v_D);
						if (!IsNull($v_G)) {
							Array.add($v_9, $v_G);
							var $v_H = $v_G.nodeName, $v_I = Number
									.parseInvariant(XUI.Xml
											.GetText($v_G.attributes
													.getNamedItem("width")));
							$v_B[$v_H] = $v_I
						}
					}
					$v_1[$v_A] = $v_B;
					$v_2[$v_A] = $v_9
				}
			for ( var $v_4 = this.$1x_4(), $v_5 = XUI.Xml.SelectNodes(
					$v_0.documentElement, "/SearchResults/items/records", null), $v_6 = $v_5.length, $v_J = 0; $v_J < $v_6; $v_J++)
				for ( var $v_K = XUI.Xml
						.SelectNodes($v_5[$v_J], "record", null), $v_L = 0; $v_L < $v_K.length; $v_L++) {
					var $v_M = $v_K[$v_L], $v_N = new Mscrm.SearchRecord;
					$v_N.set_resultColumns([]);
					var $v_O = XUI.Xml.GetText($v_M.attributes
							.getNamedItem("otype"));
					$v_N.set_entityTypeCode(Number.parseInvariant($v_O));
					$v_N.set_title(new Mscrm.SearchRecordColumn);
					$v_N.get_title().set_value(
							XUI.Xml.GetText($v_M.attributes
									.getNamedItem("oname")));
					$v_N.set_objectId(XUI.Xml.GetText($v_M.attributes
							.getNamedItem("oid")));
					if (!isNullOrEmptyString($v_4)
							&& $v_N.get_objectId() === $v_4)
						continue;
					$v_N.set_entityLogicalName(XUI.Xml.GetText($v_M.attributes
							.getNamedItem("otypename")));
					var $v_P = $v_1[$v_O];
					if (!IsNull($v_P)) {
						var $v_Q = $v_2[$v_O][0];
						this.$1O_4($v_Q, $v_M, $v_P, $v_N);
						var $v_R = $v_2[$v_O][1];
						this.$1O_4($v_R, $v_M, $v_P, $v_N)
					}
					this.$1o_4($v_M, $v_N);
					Array.add(this.$8_4, $v_N)
				}
		}
	},
	$1x_4 : function() {
		var $v_0 = this.$f_4(), $v_1 = this.$15_4($v_0), $v_2 = "";
		if (!IsNull($v_0) && !isNullOrEmptyString($v_1))
			$v_2 = $v_1;
		return $v_2
	},
	$1o_4 : function($p0, $p1) {
		$p1.set_hiddenColumns([]);
		var $$t_6 = this;
		XUI.Xml.DomUtils
				.ForEachChild(
						$p0,
						function($p1_0) {
							var $v_0 = $p1_0.nodeName, $v_1 = XUI.Xml
									.GetText($p1_0), $v_2 = new Mscrm.SearchRecordColumn;
							$v_2.set_columnName($v_0);
							$v_2.set_value($v_1);
							Array.add($p1.get_hiddenColumns(), $v_2);
							return false
						})
	},
	$1O_4 : function($p0, $p1, $p2, $p3) {
		if (!IsNull($p0)) {
			var $v_0 = new Mscrm.SearchRecordColumn, $v_1 = "", $v_2 = XUI.Xml
					.SelectSingleNode($p1, $p0.nodeName, null);
			if (!IsNull($v_2)) {
				$v_1 = XUI.Xml.GetText($v_2);
				if (IsNull($v_1))
					$v_1 = ""
			}
			$v_0.set_columnName($p0.nodeName);
			$v_0.set_value($v_1);
			$v_0.set_columnWidth($p2[$p0.nodeName]);
			Array.add($p3.get_resultColumns(), $v_0)
		}
	},
	$22_4 : function($p0, $p1) {
		var $v_0 = this.$16_4($p0, "RetrieveInlineSearchResults");
		$v_0.SetParameter("inlineViewIds", $p1);
		$v_0.SetParameter("sortResults", this.$x_4);
		return $v_0
	},
	$16_4 : function($p0, $p1) {
		var $v_0 = null;
		try {
			var $v_1 = this.Items(true, true, false, false, false), $v_2 = this
					.get_lookupTypes().split(","), $v_3 = $v_2.length, $v_4 = new Array(
					$v_3);
			$v_4.type = "int";
			for ( var $v_5 = 0, $v_5 = 0; $v_5 < $v_3; $v_5++)
				$v_4[$v_5] = parseInt($v_2[$v_5], 10);
			var $v_6 = [], $v_7 = [];
			$v_6.type = "string";
			$v_7.type = "int";
			for ($v_5 = 0; $v_5 < $v_1.length; $v_5++) {
				var $v_E = $v_1[$v_5];
				if (typeof $v_E === Mscrm.TypeNames.stringType) {
					Array.add($v_6, $v_E);
					Array.add($v_7, $v_5)
				}
			}
			var $v_8 = this.get_defaultViewId(), $v_9 = this.get_customViews(), $v_A = null;
			if (!IsNull($v_9)) {
				var $v_F = $v_9.length;
				for ($v_5 = 0; $v_5 < $v_F; $v_5++)
					if ($v_9[$v_5].id === $v_8) {
						$v_A = $v_9[$v_5];
						break
					}
			}
			var $v_B = this.get_additionalParams(), $v_C = this.$1X_4();
			if (!isNullOrEmptyString($v_C.$Q_0)) {
				$v_B += "&filterrelationship=true&relationshipid="
						+ CrmEncodeDecode.CrmUrlEncode($v_C.$W_0);
				$v_B += "&oId=" + CrmEncodeDecode.CrmUrlEncode($v_C.$Q_0);
				$v_B += "&oType=" + CrmEncodeDecode.CrmUrlEncode($v_C.$d_0);
				$v_B += "&rDependAttr="
						+ CrmEncodeDecode.CrmUrlEncode($v_C.$V_0)
			}
			$v_0 = new RemoteCommand("LookupService", $p1);
			$v_0.SetParameter("typesArray", $v_4);
			$v_0.SetParameter("bindingColumns", IsNull(this.$C_4) ? ""
					: this.$C_4);
			$v_0.SetParameter("additionalParameters", $v_B);
			$v_0.SetParameter("positions", $v_7);
			$v_0.SetParameter("resolveEmailAddress", this
					.get_resolveEmailAddress());
			$v_0.SetParameter("savedQueryTypeParameter", this.get_element()
					.getAttribute("savedquerytype"));
			$v_0.SetParameter("defaultViewId", $v_8);
			if (!IsNull($v_A)) {
				$v_0.SetParameter("defaultViewId",
						"{00000000-0000-0000-0000-000000000000}");
				$v_0.SetParameter("defaultViewType", $v_A.recordType);
				$v_0.SetParameter("defaultViewFetchXml", $v_A.fetchXml);
				$v_0.SetParameter("defaultViewLayoutXml", $v_A.layoutXml)
			}
			if (!IsNull($p0))
				$p0.values = $v_6;
			var $v_D = $v_6;
			!isNullOrEmptyString($v_D) && $v_0.SetParameter("values", $v_6)
		} catch ($$e_I) {
			alert(window.LOCID_LU_ERROR_RESOLVED)
		}
		return $v_0
	},
	isEditable : function() {
		return (this.get_lookupStyle() === "single"
				|| this.get_lookupStyle() === "multi" || this.get_lookupStyle() === "subject")
				&& !this.get_disabled() && this.get_autoResolve()
	},
	$7_4 : function() {
		return this.get_lookupStyle() === "multi"
	},
	allowSemicolonSeparatedValues : function() {
		return this.$7_4()
	},
	$18_4 : function() {
		return this.get_isDisplayOnly()
	},
	$p_4 : function($p0) {
		return typeof $p0 === Mscrm.TypeNames.stringType ? $p0
				: Sys.Serialization.JavaScriptSerializer.serialize($p0)
	},
	$1W_4 : function($p0, $p1, $p2) {
		if (isNullOrEmptyString($p0))
			return $p2 ? Sys.Serialization.JavaScriptSerializer.serialize($p1)
					: $p1;
		return $p2 ? $p0 : Sys.Serialization.JavaScriptSerializer
				.deserialize($p0)
	},
	isMruEnabled : function() {
		if (!this.$10_4) {
			try {
				if (IsNull(this.$2_4)
						|| this.$2_4.get_isInlineLookupMru() !== this
								.get_isInlineLookup()) {
					this.$2_4 = new Mscrm.LookupMruListUI(this
							.get_isInlineLookup(), this.get_rootControl());
					this.$2_4.set_onDeleteCallback(this.$$d_$2i_4);
					this.$2_4.set_shouldDisplayMru(this.$$d_$2e_4)
				}
			} catch ($$e_0) {
				this.$2_4 = null
			}
			this.$10_4 = !this.$7_4()
					&& !IsNull(this.$2_4)
					&& !IsNull(Mscrm.LookupMruListUI.get_mruList())
					&& !(IsNull(this.get_element().getAttribute("disableMru")) || Mscrm.Utilities
							.parseBoolean(this.get_element().getAttribute(
									"disableMru")))
		}
		return this.$10_4
	},
	$2e_4 : function() {
		return this.isMruEnabled()
				&& this.getLookupEdit().className !== "ms-crm-Hidden-NoBehavior"
	},
	isMruVisible : function() {
		return this.isMruEnabled() && this.$2_4.isVisible()
	},
	$2D_4 : function() {
		if (this.$1L_4)
			return;
		this.$1L_4 = true
	},
	$1C_4 : function() {
		var $v_0 = this.getLookupEdit();
		$v_0.value = this.$I_4
	},
	$1G_4 : function($p0) {
		if (!this.isMruEnabled())
			return;
		if (!IsNull(this.$0_4) && this.$0_4.get_isVisible())
			return;
		var $v_0 = this.getLookupEdit(), $v_1 = this.$27_4($v_0), $v_2 = this.$2_4
				.lookupMruSelectedItemTitle();
		if (!$p0 && isNullOrEmptyString($v_1)) {
			this.$I_4 = "";
			this.$S_4();
			return
		}
		if ($v_1 !== this.$I_4 && $v_1 !== $v_2)
			this.$I_4 = $v_1;
		else if (!$p0)
			return;
		if (this.isMruVisible())
			this.$2_4.refreshLookupMruList(this.$I_4, false, 0);
		else {
			var $v_3 = this.mruXYPosition(), $v_4 = $v_3["x"], $v_5 = $v_3["y"], $v_6 = $v_0.scrollWidth;
			if (this.get_isInlineLookup())
				$v_6 = Mscrm.Utilities.getILMenuWidth(this.get_rootControl());
			var $v_7 = $v_0.parentNode.scrollHeight;
			this.$2_4.set_searchMoreCallback(this.$$d_$2b_4);
			this.$2_4.showLookupMruItems($v_4, $v_5, $v_6, $v_7, this
					.get_lookupTypes(), this.$I_4, this.$$d_$2R_4)
		}
	},
	mruXYPosition : function() {
		var $v_0 = $get("contentDiv");
		if (IsNull($v_0))
			$v_0 = document.body;
		var $v_1 = this.getLookupEdit(), $v_2 = Mscrm.Utilities.getXYPos($v_1,
				!Mscrm.Utilities.get_isLeftToRight(), $v_0), $v_3 = parseInt(
				$v_2["x"], 10), $v_4 = parseInt($v_2["y"], 10);
		if (!Mscrm.Utilities.get_isLeftToRight()) {
			$v_3 += $v_1.parentNode.parentNode.scrollWidth;
			$v_3 -= 7
		}
		var $v_5 = {};
		$v_5["x"] = $v_3;
		$v_5["y"] = $v_4;
		return $v_5
	},
	$m_4 : function() {
		if (!this.isMruEnabled())
			return;
		this.$I_4 = "";
		var $v_0 = this.Items(false, false, false, false, false), $v_1 = $v_0.length;
		if (!IsNull($v_0) && $v_1 > 0) {
			for ( var $v_2 = new Array(0), $v_3 = 0; $v_3 < $v_1; $v_3++) {
				var $v_4 = $v_0[$v_3];
				if ($v_4.name.trim().length > 0) {
					var $v_5 = this.$e_4[parseInt($v_4.type, 10)];
					if (typeof $v_5 === Mscrm.TypeNames.undefinedType
							&& Mscrm.EntityPropUtil
									.isActivityTypeCode($v_4.type))
						$v_5 = this.$e_4[4200];
					Array
							.add($v_2, Mscrm.LookupMruItem.createLookupMruItem(
									$v_4.id, $v_4.type, $v_4.typename,
									$v_4.name, $v_5))
				}
			}
			$v_2.length > 0 && this.$2_4.addLookupMruItems($v_2)
		}
	},
	$S_4 : function() {
		if (!this.isMruEnabled())
			return;
		this.$1d_4();
		window.setTimeout(this.$$d_$1d_4, 0)
	},
	$1d_4 : function() {
		if (!this.isMruEnabled())
			return;
		this.$2_4.hideLookupMruItems()
	},
	selectPreviousLookupItem : function() {
		return this.$1k_4(false)
	},
	selectNextLookupItem : function() {
		return this.$1k_4(true)
	},
	$1k_4 : function($p0) {
		var $v_0 = Mscrm.Utilities.selectMenuItemOnNavigation($p0, this.$0_4,
				this.$3_4, "InlineLookupmenu");
		this.$3_4 = $v_0["itemindex"];
		if (IsNull($v_0["itemtitle"]))
			return "";
		else
			return $v_0["itemtitle"].toString()
	},
	$19_4 : function($p0, $p1) {
		var $v_0 = null;
		if (this.get_isInlineLookup() && !IsNull(this.$0_4)
				&& this.$0_4.get_isVisible()) {
			if (!IsNull(this.$4_4)
					&& Sys.UI.DomElement
							.containsCssClass(this.$4_4,
									"ms-crm-InlineLookup-FooterSection-AddAnchor-Selected")) {
				Sys.UI.DomElement.removeCssClass(this.$4_4,
						"ms-crm-InlineLookup-FooterSection-AddAnchor-Selected");
				this.$9_4 = false;
				if ($p0)
					this.$3_4 = -1;
				else
					this.$3_4 = this.$0_4.get_menuItems().length
			}
			if ($p0)
				$v_0 = this.selectNextLookupItem();
			else
				$v_0 = this.selectPreviousLookupItem();
			return true
		} else if (this.isMruEnabled()) {
			if ($p0) {
				if ($p1) {
					if (!this.isMruVisible()) {
						this.$1G_4(true);
						return true
					}
				} else if (this.isMruVisible())
					$v_0 = this.$2_4.selectNextLookupMruItem()
			} else if (this.isMruVisible() && !$p1)
				$v_0 = this.$2_4.selectPreviousLookupMruItem();
			this.$2j_4($v_0);
			return true
		} else
			return false
	},
	$2j_4 : function($p0) {
		if (!IsNull($p0) && $p0.length)
			this.$2k_4(this.getLookupEdit(), $p0);
		else
			this.$1C_4()
	},
	$2X_4 : function($p0) {
		var $v_0 = new Mscrm.FormInputControl.ResultEventArgs;
		$v_0.$5_1.items = $p0;
		this.RaiseOnAfterSelectEvent($v_0);
		this.RaiseOnChangeEvent($v_0)
	},
	$17_4 : function() {
		var $v_0 = null;
		if (this.$7_4())
			return $v_0;
		var $v_1 = this.getLookupField(), $v_2 = XUI.Html.DomUtils
				.GetFirstChild(XUI.Html.DomUtils.GetFirstChild($v_1));
		if (!IsNull($v_2))
			if ($v_2.nodeName === "LI" || $v_2.nodeName === "#text")
				$v_0 = XUI.Html.DomUtils.GetFirstChild($v_2);
		return $v_0
	},
	$2l_4 : function($p0) {
		var $v_0 = this.$17_4(), $v_1 = XUI.Html.DomUtils
				.GetNextSibling(XUI.Html.DomUtils.GetFirstChild($v_0));
		XUI.Html.SetText($v_1, $p0)
	},
	$1m_4 : function($p0) {
		var $v_0 = this.$17_4();
		if (IsNull($v_0))
			return;
		$v_0.setAttribute("category", $p0);
		if (!this.get_isInlineLookup()) {
			var $v_1 = this.$20_4($p0);
			if (!isNullOrEmptyString($v_1))
				XUI.Html.DomUtils.GetFirstChild($v_0).src = $v_1
		} else {
			var $v_2 = this.Items(false, true, false, false, false);
			if (!IsNull($v_2) && $v_2.length
					&& $p0 === LookupItemCategories.UNKNOWN) {
				var $v_3 = $v_2[0];
				$v_3.type > 0
						&& this.showErrorMessage(
								window.LOCID_INLINELOOKUP_NOMATCH,
								"/_imgs/inlineedit/warning.png")
			}
		}
	},
	$20_4 : function($p0) {
		switch ($p0) {
		case LookupItemCategories.UNKNOWN:
			return "/_imgs/error/notif_icn_crit16.png";
		default:
			return null
		}
	},
	$1u_4 : function() {
		if (!this.isMruVisible())
			return;
		var $v_0 = this.$2_4.deleteCurrLookupMruItem();
		if (!IsNull($v_0))
			this.getLookupEdit().value = $v_0
	},
	$2i_4 : function($p0) {
		if (!IsNull($p0))
			this.getLookupEdit().value = $p0
	},
	$27_4 : function($p0) {
		return $p0.value
	},
	$2k_4 : function($p0, $p1) {
		$p0.value = $p1
	},
	autoResolveHandler : function(result, cmd) {
		if (!this.$2A_4()) {
			this.set_disabled(false);
			this.$F_4 = false;
			this.$G_4(null);
			return
		}
		var $v_0 = this.Items(true, true, false, false, false);
		if (result.Success
				&& typeof result.ReturnValue === Mscrm.TypeNames.stringType)
			for ( var $v_1 = XUI.Xml.LoadXml(result.ReturnValue), $v_2 = XUI.Xml
					.SelectNodes($v_1.documentElement, "/items/records", null), $v_3 = $v_2.length, $v_4 = 0; $v_4 < $v_3; $v_4++) {
				var $v_5 = new LookupControlItem;
				$v_5.values = [];
				$v_5.keyValues = {};
				$v_5.data = "";
				var $v_6 = XUI.Xml.SelectSingleNode($v_2[$v_4], "@position",
						null), $v_7 = parseInt(XUI.Xml.GetText($v_6)), $v_8 = $v_0[$v_7], $v_9 = XUI.Xml
						.SelectNodes($v_2[$v_4], "record", null);
				if ($v_9.length === 1) {
					var $v_A = $v_9[0];
					$v_5.id = XUI.Xml.GetText($v_A.attributes
							.getNamedItem("oid"));
					$v_5.name = XUI.Xml.GetText($v_A.attributes
							.getNamedItem("oname"));
					$v_5.type = XUI.Xml.GetText($v_A.attributes
							.getNamedItem("otype"));
					var $$t_G = this;
					XUI.Xml.DomUtils
							.ForEachChild(
									$v_A,
									function($p1_0) {
										var $v_B = $p1_0.nodeName, $v_C = XUI.Xml
												.GetText($p1_0);
										Array
												.add(
														$v_5.values,
														new Mscrm.FormInputControl.LookupItemData(
																$v_B, $v_C));
										$v_5.keyValues[$v_B] = new Mscrm.FormInputControl.LookupItemData(
												$v_B, $v_C);
										return false
									})
				} else if ($v_9.length > 1) {
					$v_5.id = (new Date).getTime() + $v_4.toString();
					$v_5.name = $v_8;
					this.$M_4 = true;
					$v_5.type = Mscrm.EntityTypeCode.None;
					$v_5.category = LookupItemCategories.AMBIGUOUS;
					$v_5.ambiguousRecordsXml = XUI.Xml.XMLSerializer
							.serializeToString($v_2[$v_4])
				} else {
					$v_5.id = (new Date).getTime();
					$v_5.name = $v_8;
					this.$M_4 = true;
					if (this.get_resolveEmailAddress()
							&& (this.$1N_4.test($v_8) || Mscrm.EmailAddressAttribute
									.isValidEmailWithQuotedString($v_8))) {
						$v_5.category = LookupItemCategories.UNKNOWN_EMAIL;
						$v_5.type = Mscrm.EntityTypeCode.UnresolvedEmailParty;
						$v_5.data = $v_8
					} else {
						$v_5.category = LookupItemCategories.UNKNOWN;
						$v_5.type = Mscrm.EntityTypeCode.None
					}
				}
				$v_0[$v_7] = $v_5
			}
		this.set_disabled(false);
		this.$F_4 = false;
		this.$G_4(null);
		$v_0.items = $v_0;
		this.handleAfterLookup($v_0)
	},
	$2R_4 : function($p0) {
		this.$1E_4($p0)
	},
	$1E_4 : function($p0) {
		var $v_0 = false;
		if (this.$7_4() || !this.isMruEnabled())
			return $v_0;
		var $v_1 = this.$2_4.lookupMruSelectedMruItem();
		if (IsNull($v_1))
			$v_1 = $p0;
		if (!IsNull($v_1)) {
			this.Clear(false);
			var $v_2 = new LookupControlItem;
			$v_2.id = $v_1.get_objectId();
			$v_2.type = $v_1.get_entityTypeCode();
			$v_2.name = $v_1.get_title();
			$v_2.onclick = "openlui(new Sys.UI.DomEvent(event)); return false;";
			$v_2.displayClass = "ms-crm-Lookup-Item";
			$v_2.data = "";
			$v_2.typename = $v_1.get_entityTypeName();
			$v_2.category = LookupItemCategories.MRU_ITEM;
			this.addItem($v_2);
			this.RefreshLookupItemImage();
			this.$I_4 = "";
			this.$1C_4();
			this.resolveAndExitEdit(false, false);
			this.getLookupField().focus();
			this.$2Y_4($v_2);
			$v_0 = true
		}
		return $v_0
	},
	$2Y_4 : function($p0) {
		this.$1B_4();
		this.RaiseSetAdditionalParamsEvent();
		var $v_0 = this.$16_4(null, "RetrieveItem"), $v_1 = [];
		Array.add($v_1, $p0.id);
		$v_1.type = "string";
		$v_0.SetParameter("guidValues", $v_1);
		$v_0.Reference = $p0.id;
		$v_0.Execute(this.$$d_$2Z_4)
	},
	$2Z_4 : function($p0, $p1) {
		if (this.$7_4())
			return;
		if ($p0.Success)
			try {
				var $v_0 = $p0.ReturnValue;
				if ($v_0.indexOf("</record>") > 0) {
					this.$1K_4 = XUI.Xml.LoadXml($v_0);
					var $v_1 = XUI.Xml.SelectSingleNode(
							this.$1K_4.documentElement,
							"/items/records/record", null), $v_2 = $v_1.attributes
							.getNamedItem("oid").nodeValue, $v_3 = $v_1.attributes
							.getNamedItem("oname").nodeValue, $v_4 = this
							.Items(false, false, false, false, false), $v_5 = $v_4[0];
					if (!IsNull($v_1.childNodes)) {
						var $v_6 = {}, $$t_F = this;
						XUI.Xml.DomUtils
								.ForEachChild(
										$v_1,
										function($p1_0) {
											$v_6[$p1_0.nodeName] = new Mscrm.FormInputControl.LookupItemData(
													$p1_0.nodeName, XUI.Xml
															.GetText($p1_0));
											return false
										});
						var $v_7 = this.$17_4();
						!IsNull($v_7)
								&& $v_7.setAttribute("keyValues",
										Sys.Serialization.JavaScriptSerializer
												.serialize($v_6))
					}
					if (Mscrm.FormInputControl.LookupUIBehavior.$1T($v_5.id,
							$v_2)) {
						this.$1m_4(LookupItemCategories.NONE);
						this.$G_4(null);
						this.$2X_4(this
								.Items(false, false, false, false, false));
						if ($v_3 !== $v_5.name) {
							this.$2l_4($v_3);
							var $v_8 = new Array(1), $v_9 = this.$e_4[parseInt(
									$v_5.type, 10)];
							Array.add($v_8, Mscrm.LookupMruItem
									.createLookupMruItem($v_5.id, $v_5.type,
											$v_5.typename, $v_3, $v_9));
							this.$2_4.updateLookupMruItems($v_8)
						}
					}
				} else {
					var $v_A = this.Items(false, false, false, false, false)[0];
					if (this.get_isInlineLookup())
						$v_A.onclick = "return false;";
					if ($v_A.id === $p0.RemoteCommand.Reference) {
						this.$1m_4(LookupItemCategories.UNKNOWN);
						this.$G_4(null)
					}
				}
			} catch ($v_B) {
			}
	},
	$2K_4 : function() {
		var $v_0 = new Mscrm.FormInputControl.GenerateDataXmlEventArgs, $v_1 = this
				.get_events().getHandler("OnGeneratedDataXml");
		!IsNull($v_1) && $v_1(this, $v_0);
		return $v_0
	},
	handleAfterLookup : function(lookupItems) {
		if (IsNull(lookupItems))
			return;
		var $v_0 = false, $v_1 = lookupItems.items;
		this.$1r_4($v_1);
		var $v_2 = this.Items(false, true, false, false, false);
		this.Clear(false);
		this.AddItems($v_1, false);
		$v_0 = Mscrm.FormInputControl.LookupUIBehavior.itemsDifferent($v_2,
				this.Items(false, true, false, false, false));
		this.$1I_4 = $v_1;
		this.$1v_4($v_1);
		var $v_3 = new Mscrm.FormInputControl.ResultEventArgs;
		$v_3.$5_1 = lookupItems;
		this.$1j_4($v_3, $v_0)
	},
	$1j_4 : function($p0, $p1) {
		this.exitEditing();
		this.raiseEvents($p0, $p1)
	},
	showResultsForUnresolved : function() {
		var $v_0 = this.Items(false, true, false, false, false);
		if (!IsNull($v_0) && $v_0.length) {
			var $v_1 = $v_0[0];
			switch ($v_1.category) {
			case LookupItemCategories.AMBIGUOUS:
				this.onLookup(null);
				break;
			case LookupItemCategories.UNKNOWN:
				Array.clear(this.$8_4);
				this.showInlineLookupMenu();
				break;
			default:
				break
			}
		}
	},
	getLookupSearchText : function() {
		var $v_0 = "", $v_1 = null, $v_2 = this.Items(false, true, false,
				false, false);
		if (!IsNull($v_2) && $v_2.length)
			$v_1 = $v_2[0];
		if (this.hasUnresolvedText())
			$v_0 = this.getLookupEdit().value;
		else if (!IsNull($v_1) && $v_2.length < 2)
			$v_0 = $v_1.name;
		return $v_0
	},
	raiseEvents : function(args, changed) {
		this.RaiseOnAfterSelectEvent(args);
		changed && this.RaiseOnChangeEvent(args)
	},
	exitEditing : function() {
		this.$1l_4();
		this.endContentEditing(false);
		this.$N_4();
		this.$m_4();
		this.focusEdit(null)
	},
	$1A_4 : function($p0) {
		var $v_0 = null, $v_1 = -1;
		if (this.$3_4 > -1) {
			var $v_2 = this.$0_4.get_menuItems()[this.$3_4];
			!IsNull($v_2) && $v_2.displayRestStyle()
		}
		if (this.$3_4 === this.$0_4.get_menuItems().length - 1 && !$p0
				&& !IsNull(this.$4_4) && !this.$9_4) {
			Sys.UI.DomElement.addCssClass(this.$4_4,
					"ms-crm-InlineLookup-FooterSection-AddAnchor-Selected");
			this.$9_4 = true;
			return
		}
		if (!this.$3_4 && $p0 && !IsNull(this.$4_4) && !this.$9_4) {
			Sys.UI.DomElement.addCssClass(this.$4_4,
					"ms-crm-InlineLookup-FooterSection-AddAnchor-Selected");
			this.$9_4 = true;
			return
		}
		if (!IsNull(this.$4_4)
				&& Sys.UI.DomElement.containsCssClass(this.$4_4,
						"ms-crm-InlineLookup-FooterSection-AddAnchor-Selected")) {
			Sys.UI.DomElement.removeCssClass(this.$4_4,
					"ms-crm-InlineLookup-FooterSection-AddAnchor-Selected");
			this.$9_4 = false;
			if ($p0)
				this.$3_4 = this.$0_4.get_menuItems().length;
			else
				this.$3_4 = -1
		}
		if ($p0)
			if (!this.$3_4)
				$v_1 = this.$0_4.get_menuItems().length - 1;
			else
				$v_1 = this.$3_4 - 1;
		else if (this.$3_4 === this.$0_4.get_menuItems().length - 1)
			$v_1 = 0;
		else
			$v_1 = this.$3_4 + 1;
		this.$3_4 = $v_1;
		if ($v_1 !== -1) {
			$v_0 = this.$0_4.get_menuItems()[$v_1];
			$v_0.displayHoverStyle();
			$v_0.get_itemContents().scrollIntoView(false);
			if ($v_0.get_isNotFound()) {
				this.$1A_4($p0);
				return
			}
		}
	},
	$2M_4 : function($p0) {
		var $v_0 = this.getLookupEdit();
		switch ($p0.keyCode) {
		case 38:
			if (this.$19_4(false, false)) {
				$p0.stopPropagation();
				$p0.preventDefault();
				return
			}
			break;
		case 40:
			if (this.lookupDownKeyEdit($p0))
				return;
			break;
		case 27:
			if (this.isMruVisible()) {
				this.$1C_4();
				this.$S_4();
				$p0.stopPropagation();
				$p0.preventDefault();
				return
			}
			if (this.get_isInlineLookup() && !IsNull(this.$0_4)
					&& this.$0_4.get_isVisible()) {
				this.$n_4();
				$p0.stopPropagation();
				$p0.preventDefault();
				return
			}
			break;
		case 13:
			if (this.isMruVisible()) {
				if (this.$1E_4(null)) {
					$p0.stopPropagation();
					$p0.preventDefault();
					return
				}
				this.$S_4()
			}
			if (!this.get_readOnly()) {
				$p0.stopPropagation();
				$p0.preventDefault();
				if (!this.get_isInlineLookup()) {
					var $v_1 = $v_0.value;
					$v_0.value = "";
					this.Lookup(true, false, $v_1, false);
					this.endContentEditing(false)
				} else {
					if (this.$9_4) {
						this.$9_4 = false;
						this.$4_4.click();
						$p0.stopPropagation();
						$p0.preventDefault();
						return
					}
					if (!IsNull(this.$0_4) && this.$0_4.get_isVisible()
							&& this.$3_4 !== -1) {
						this.$1D_4(this.$0_4.get_menuItems()[this.$3_4]);
						$p0.stopPropagation();
						$p0.preventDefault();
						return
					} else
						this.showSearchResults()
				}
				return
			}
			break;
		case 127:
			if ($p0.ctrlKey && !$p0.altKey && !$p0.shiftKey)
				if (this.$2_4.isSelected()) {
					this.$1u_4();
					$p0.stopPropagation();
					$p0.preventDefault();
					return
				}
			break;
		case 75:
			if (!this.get_readOnly() && $p0.ctrlKey && this.get_autoResolve()) {
				this.resolveAndExitEdit(false, true);
				$p0.stopPropagation();
				$p0.preventDefault()
			}
			break;
		case 9:
			if (!this.$7_4() && this.get_isInlineLookup() && !IsNull(this.$0_4)
					&& this.$0_4.get_isVisible() && this.$3_4 !== -1) {
				this.$1A_4($p0.shiftKey);
				$p0.stopPropagation();
				$p0.preventDefault();
				return
			}
			if (this.isMruVisible()) {
				if (this.$1E_4(null)) {
					$p0.stopPropagation();
					$p0.preventDefault();
					return
				}
				this.$S_4()
			}
			if ($v_0.tabIndex > 0)
				if (!$p0.shiftKey) {
					this.$b_4 = true;
					this.getLookupField().focus();
					return
				}
			break;
		case 123:
			if ($p0.shiftKey && $v_0.className !== "ms-crm-Hidden-NoBehavior"
					&& $v_0.value.length > 0) {
				this.Lookup(true, true, $v_0.value, false);
				this.endContentEditing(false)
			}
			break;
		case 83:
			if (!this.get_readOnly() && $p0.ctrlKey) {
				if ($p0.altKey)
					return;
				this.Lookup(true, true, $v_0.value, false);
				this.endContentEditing(false)
			}
			break
		}
	},
	$n_4 : function() {
		this.$0_4.clear();
		this.$0_4.hide()
	},
	lookupDownKeyEdit : function(eventObject) {
		if (this.$19_4(true, eventObject.altKey && !eventObject.ctrlKey
				&& !eventObject.shiftKey)) {
			eventObject.stopPropagation();
			eventObject.preventDefault();
			return true
		}
		return false
	},
	$2L_4 : function($p0) {
		var $v_0 = this.$2H_4(IsNull(this.$1_4) || this.$1_4 === "end"
				|| this.$1_4 === "start" ? $p0.target : this.$1_4);
		if (IsNull($v_0))
			return;
		if (!this.$7_4()) {
			var $v_3 = XUI.Html.DomUtils.GetFirstChild($v_0);
			if ($v_0.tagName.toUpperCase() === "DIV" && !IsNull($v_3)) {
				$v_0 = $v_3;
				for ( var $v_4 = $v_0.getElementsByTagName("SPAN"), $v_5 = $v_4.length, $v_6 = 0; $v_6 < $v_5; $v_6++) {
					var $v_7 = $v_4[$v_6];
					if ($v_7.tagName.toUpperCase() === "SPAN") {
						$v_0 = $v_7;
						break
					}
				}
			}
		}
		switch ($p0.keyCode) {
		case 16:
		case 17:
		case 18:
			return;
		case 27:
			if (this.get_isInlineLookup() && !IsNull(this.$0_4)
					&& this.$0_4.get_isVisible()) {
				this.$n_4();
				$p0.stopPropagation();
				$p0.preventDefault();
				return
			}
			break;
		case 38:
			if (this.get_isInlineLookup() && !IsNull(this.$0_4)
					&& this.$0_4.get_isVisible())
				if (this.$19_4(false, false)) {
					$p0.stopPropagation();
					$p0.preventDefault();
					return
				}
			break;
		case 32:
		case 13:
			if (this.$9_4) {
				this.$9_4 = false;
				this.$4_4.click();
				$p0.preventDefault();
				$p0.stopPropagation();
				return
			}
			if (!IsNull(this.$0_4) && this.$0_4.get_isVisible()
					&& this.$3_4 !== -1) {
				this.$1D_4(this.$0_4.get_menuItems()[this.$3_4]);
				$p0.preventDefault();
				$p0.stopPropagation();
				return
			}
			if ($v_0.tagName.toUpperCase() === "SPAN"
					|| $v_0.tagName.toUpperCase() === "LI") {
				Mscrm.Utilities.click($v_0);
				$p0.preventDefault();
				$p0.stopPropagation();
				return
			}
			if (!this.get_readOnly()) {
				$p0.stopPropagation();
				$p0.preventDefault();
				if (!this.get_isInlineLookup()) {
					this.Lookup(true, false, null, false);
					this.endContentEditing(false)
				} else
					this.showSearchResults();
				return
			}
			break;
		case 40:
			if (this.get_isInlineLookup() && !IsNull(this.$0_4)
					&& this.$0_4.get_isVisible())
				if (this.lookupDownKeyEdit($p0)) {
					$p0.stopPropagation();
					$p0.preventDefault();
					return
				}
			if (this.lookupDownKey($p0, $v_0))
				return;
			break;
		case 67:
			if ($p0.ctrlKey)
				return;
			break;
		case 83:
			if ($p0.ctrlKey || $p0.altKey) {
				$p0.preventDefault();
				return
			}
			break;
		case 85:
			if ($p0.ctrlKey)
				if ($v_0.className === "ms-crm-Lookup-Item") {
					Mscrm.Utilities.click($v_0);
					$p0.stopPropagation();
					$p0.preventDefault();
					return
				}
			break;
		case 8:
		case 127:
			if ($p0.keyCode === 8 && !this.get_isInlineLookup()) {
				$p0.preventDefault();
				$p0.stopPropagation()
			}
			if (this.$18_4() || !this.get_readOnly())
				if ($v_0.tagName.toUpperCase() !== "SPAN"
						&& $v_0.tagName.toUpperCase() !== "LI") {
					if ($p0.keyCode === 127 || $p0.keyCode === 8
							&& (this.get_isInlineLookup() || !this.$7_4())) {
						this.Clear(false);
						this.RaiseOnChangeEvent(null)
					}
				} else {
					if (this.$7_4() && this.$18_4()) {
						for ( var $v_8 = this.Items(false, false, false, false,
								false), $v_9 = $v_8.length, $v_A = 0; $v_A < $v_9; $v_A++)
							$v_8[$v_A].selected
									&& this.RemoveItem($v_8[$v_A].id);
						this.getLookupField().focus()
					} else {
						var $v_B = XUI.Html.DomUtils
								.GetPrevSibling($v_0.parentNode), $v_C = !IsNull($v_B) ? $v_B
								: XUI.Html.DomUtils
										.GetNextSibling($v_0.parentNode);
						XUI.Html.DomUtils.GetFirstChild(this.getLookupField())
								.removeChild($v_0.parentNode);
						if (!IsNull($v_C)) {
							$v_C = XUI.Html.DomUtils.GetFirstChild($v_C);
							if (IsNull($v_C)) {
								this.$1_4 = "start";
								this.Focus(null)
							} else {
								this.$1_4 = $v_C;
								this.$1_4.style.border = "BLUE 1 DOTTED";
								this.$1_4.scrollIntoView(false);
								this.getLookupField().focus()
							}
						}
						this.$G_4(null)
					}
					this.RaiseOnChangeEvent(null)
				}
			break;
		case 9:
			if (this.get_isInlineLookup())
				if (!this.$7_4() && !IsNull(this.$0_4)
						&& this.$0_4.get_isVisible() && this.$3_4 !== -1) {
					this.$1A_4($p0.shiftKey);
					$p0.stopPropagation();
					$p0.preventDefault();
					return
				}
			if (this.getLookupField().tabIndex)
				if ($p0.shiftKey && this.isEditable()) {
					try {
						this.$1F_4();
						this.$c_4 = true
					} catch ($$e_C) {
					}
					return
				}
			if (!this.$7_4())
				return;
			var $v_1 = XUI.Html.DomUtils.GetFirstChild(this.getLookupField()), $v_2 = this
					.Items(false, true, false, false, false);
			if (!$v_2.length)
				return;
			if (IsNull(this.$1_4)
					|| this.$1_4 === ($p0.shiftKey ? "start" : "end"))
				return;
			if (this.$1_4 === ($p0.shiftKey ? "end" : "start")) {
				var $v_D = $v_2[$p0.shiftKey ? $v_2.length - 1 : 0].id, $$t_J = this;
				XUI.Html.DomUtils.ForEachChild($v_1, function($p1_0) {
					var $v_E = XUI.Html.DomUtils.GetFirstChild($p1_0);
					if ($v_E.getAttribute("oid") === $v_D) {
						$v_E.style.border = "BLACK 1 DOTTED";
						$v_E.scrollIntoView(false);
						$$t_J.$1_4 = $v_E;
						$p0.stopPropagation();
						$p0.preventDefault();
						return true
					}
					return false
				})
			} else {
				this.$1_4.style.border = "";
				var $v_F = $p0.shiftKey ? XUI.Html.DomUtils
						.GetPrevSibling(this.$1_4.parentNode)
						: XUI.Html.DomUtils
								.GetNextSibling(this.$1_4.parentNode);
				if (!IsNull($v_F)) {
					$v_F = XUI.Html.DomUtils.GetFirstChild($v_F);
					if (!IsNull($v_F) && $v_F.tagName.toUpperCase() === "SPAN") {
						this.$1_4 = $v_F;
						this.$1_4.style.border = "BLUE 1 DOTTED";
						this.$1_4.scrollIntoView(false);
						$p0.stopPropagation();
						$p0.preventDefault();
						return
					}
				}
				this.$1_4 = null;
				return
			}
			return
		}
		if (!this.get_isInlineLookup()
				&& ($p0.keyCode === 8 || $p0.keyCode === 127))
			if (this.$7_4())
				return;
		(this.isEditable() || this.$o_4()) && this.$1F_4()
	},
	lookupDownKey : function(eventObject, selectedElement) {
		if (eventObject.altKey)
			if (selectedElement.className === "ms-crm-Lookup-Ambiguous") {
				Mscrm.Utilities.click(selectedElement);
				eventObject.preventDefault();
				return true
			}
		return false
	}
};
Mscrm.FormInputControl.PresenceLookupUIBehavior = function(element) {
	this.$$d_$2T_5 = Function.createDelegate(this, this.$2T_5);
	this.$$d_$2U_5 = Function.createDelegate(this, this.$2U_5);
	this.$$d_$2V_5 = Function.createDelegate(this, this.$2V_5);
	this.$$d_$2W_5 = Function.createDelegate(this, this.$2W_5);
	this.$$d_onPresenceControlOnStatusChange = Function.createDelegate(this,
			this.onPresenceControlOnStatusChange);
	this.$$d_initializeLookupPresence = Function.createDelegate(this,
			this.initializeLookupPresence);
	Mscrm.FormInputControl.PresenceLookupUIBehavior.initializeBase(this,
			[ element ])
};
Mscrm.FormInputControl.PresenceLookupUIBehavior.prototype = {
	$11_5 : false,
	$A_5 : null,
	$h_5 : null,
	$D_5 : null,
	$a_5 : null,
	$Z_5 : null,
	$Y_5 : null,
	$X_5 : null,
	initialize : function() {
		Mscrm.FormInputControl.LookupUIBehavior.prototype.initialize.call(this);
		executeFunctionDeferred(this.$$d_initializeLookupPresence, false, false)
	},
	dispose : function() {
		try {
			if (!IsNull(this.$A_5)) {
				destroyPresenceControlInstance(this.$A_5);
				this.$A_5 = null;
				this.$11_5 = false
			}
			if (this.$D_5) {
				!IsNull(this.$a_5)
						&& $removeHandler(this.$D_5, "mouseover", this.$a_5);
				!IsNull(this.$Z_5)
						&& $removeHandler(this.$D_5, "focus", this.$Z_5);
				!IsNull(this.$Y_5)
						&& $removeHandler(this.$D_5, "mouseout", this.$Y_5);
				!IsNull(this.$X_5)
						&& $removeHandler(this.$D_5, "blur", this.$X_5)
			}
			this.$a_5 = null;
			this.$Z_5 = null;
			this.$Y_5 = null;
			this.$X_5 = null
		} catch ($$e_0) {
		}
		Mscrm.FormInputControl.LookupUIBehavior.prototype.dispose.call(this)
	},
	$1t_5 : function() {
		try {
			if (!this.$11_5) {
				var $v_0 = createPresenceControlInstance();
				if (!IsNull($v_0) && $v_0.PresenceEnabled) {
					this.$A_5 = $v_0;
					this.$A_5.OnStatusChange = this.$$d_onPresenceControlOnStatusChange
				}
			}
		} catch ($$e_1) {
			this.$A_5 = null
		}
		this.$11_5 = true;
		return this.$A_5
	},
	$1b_5 : function() {
		try {
			var $v_0 = this.getLookupField();
			return !IsNull($v_0) ? $v_0.getElementsByTagName("SPAN") : null
		} catch ($$e_1) {
			return null
		}
	},
	onPresenceControlOnStatusChange : function(name, state, id) {
		var $v_0 = this.$1b_5();
		!IsNull($v_0) && this.$1i_5($v_0, state, id)
	},
	initializeLookupPresence : function() {
		var $v_0 = this.$1b_5();
		!IsNull($v_0) && this.queryLookupPresence($v_0)
	},
	queryLookupPresence : function(spans) {
		if (!window._bPresenceEnabled)
			return;
		var $v_0 = null, $v_1 = null;
		if (IsNull(spans))
			spans = [];
		for ( var $v_2 = spans.length, $v_4 = 0; $v_4 < $v_2; $v_4++) {
			var $v_5 = spans[$v_4];
			if (IsNull($v_5))
				continue;
			var $v_6 = $v_5.getAttribute("otype"), $v_7 = IsPresenceType($v_6);
			if (!$v_7)
				continue;
			var $v_8 = $v_5.getAttribute("oid").toString(), $v_9 = $v_5
					.getAttribute("sip"), $v_A = hasSipAttribute($v_5);
			if ($v_A && $v_9 !== "EMAIL_ADDRESS") {
				if (IsNull($v_1))
					$v_1 = [];
				Array.add($v_1, createPresenceInfo($v_8, $v_9))
			} else {
				if (IsNull($v_0))
					$v_0 = "<grid>";
				$v_0 += addElementSipRequest($v_5)
			}
		}
		var $v_3 = !IsNull($v_0) || !IsNull($v_1);
		if ($v_3 && !IsNull(this.$1t_5()) && !IsNull(this.$A_5)) {
			!IsNull($v_1) && this.$1V_5(spans, $v_1);
			if (!IsNull($v_0)) {
				$v_0 += "</grid>";
				if (IsNull(this.$h_5))
					this.$h_5 = new RemoteCommand("PresenceService",
							"QuerySipInfo");
				this.$h_5.SetParameter("entityListXml", $v_0);
				var $v_B = this.$$d_$2W_5;
				this.$h_5.Execute($v_B)
			}
		}
	},
	$1e_5 : function($p0) {
		if (!IsNull($p0) && !IsNull($p0.tagName)
				&& $p0.tagName.toUpperCase() === "IMG")
			return true;
		return false
	},
	$1i_5 : function($p0, $p1, $p2) {
		for ( var $v_0 = null, $v_1 = 0; $v_1 < $p0.length; $v_1++) {
			var $v_2 = $p0[$v_1];
			if (!IsNull($v_2)) {
				var $v_3 = XUI.Html.DomUtils.GetFirstChild($v_2);
				while (!IsNull($v_3) && !this.$1e_5($v_3))
					$v_3 = XUI.Html.DomUtils.GetFirstChild($v_3);
				if (this.$1e_5($v_3))
					$v_0 = $v_3;
				var $v_4 = $v_2.getAttribute("oid");
				if ($v_4 === $p2)
					if (!IsNull($v_0)
							&& parseInt($v_0.getAttribute("state")) !== $p1) {
						$v_0
								.setAttribute("class",
										"ms-crm-Lookup-PresenceItem");
						var $v_5 = getPresenceUri($p1);
						$v_0.setAttribute("imageSrc", $v_5);
						$v_0.src = $v_5;
						$v_0.setAttribute("state", $p1);
						return $v_0
					}
			}
		}
		return null
	},
	$2V_5 : function($p0) {
		this.$1h_5($p0, 0)
	},
	$2U_5 : function($p0) {
		this.$1h_5($p0, 1)
	},
	$2T_5 : function($p0) {
		this.$A_5.HideOOUI()
	},
	$1h_5 : function($p0, $p1) {
		var $v_0 = $p0.target, $v_1 = $v_0;
		while (!IsNull($v_1) && !IsNull($v_1.getAttribute("oid")))
			$v_1 = $v_1.parentNode;
		var $v_2 = getImageLocation($v_0), $v_3 = $v_2.oouiX, $v_4 = $v_2.oouiY, $v_5 = $v_0
				.getAttribute("sipuri");
		this.$A_5.ShowOOUI($v_5, $p1, $v_3, $v_4)
	},
	$1V_5 : function($p0, $p1) {
		for ( var $v_0 = $p1.length, $v_1 = 0; $v_1 < $v_0; $v_1++) {
			var $v_2 = $p1[$v_1], $v_3 = $v_2.oid, $v_4 = $v_2.sipuri;
			if ($v_4.length > 0) {
				var $v_5 = this.$A_5.GetStatus($v_4, $v_3), $v_6 = this.$1i_5(
						$p0, $v_5, $v_3);
				if (!IsNull($v_6)) {
					$v_6.setAttribute("sipuri", $v_4);
					this.$D_5 = $v_6;
					this.$a_5 = this.$$d_$2V_5;
					this.$Z_5 = this.$$d_$2U_5;
					this.$Y_5 = this.$$d_$2T_5;
					this.$X_5 = this.$$d_$2T_5;
					$addHandler(this.$D_5, "mouseover", this.$a_5);
					$addHandler(this.$D_5, "focus", this.$Z_5);
					$addHandler(this.$D_5, "mouseout", this.$Y_5);
					$addHandler(this.$D_5, "blur", this.$X_5)
				}
			}
		}
	},
	$2W_5 : function($p0, $p1) {
		var $v_0 = $p0.ReturnValue;
		if (!$p0.Success || isNullOrEmptyString($v_0))
			return;
		var $v_1 = this.getLookupField();
		if (IsNull($v_1))
			return;
		var $v_2 = $v_1.getElementsByTagName("SPAN"), $v_3 = createPresenceInfoArray($p0);
		this.$1V_5($v_2, $v_3)
	}
};
Mscrm.FormInputControl.TableLookupUIControl = function(element) {
	this.$$d_setFocus = Function.createDelegate(this, this.setFocus);
	Mscrm.FormInputControl.TableLookupUIControl.initializeBase(this,
			[ element ])
};
Mscrm.FormInputControl.TableLookupUIControl.prototype = {
	$y_3 : null,
	$z_3 : null,
	get_dataValue : function() {
		return this.get_innerControl().get_dataValue()
	},
	set_dataValue : function(value) {
		this.get_innerControl().set_dataValue(value);
		return value
	},
	get_innerDataXml : function() {
		return this.get_innerControl().get_dataXml()
	},
	get_innerControlId : function() {
		return this.$z_3
	},
	set_innerControlId : function(value) {
		this.$z_3 = value;
		return value
	},
	initialize : function() {
		Mscrm.CrmUIControl.prototype.initialize.call(this);
		$addHandler(this.get_element(), "focus", this.$$d_setFocus);
		Mscrm.FormControlInputBehavior.createSlugSupportIfNeeded(this
				.get_element())
	},
	dispose : function() {
		!IsNull(this.get_element())
				&& $removeHandler(this.get_element(), "focus",
						this.$$d_setFocus);
		Mscrm.CrmUIControl.prototype.dispose.call(this)
	},
	fireOnChange : function() {
		this.get_innerControl().RaiseOnChangeEvent(null)
	},
	setFocus : function(eventObject) {
		this.get_innerControl().Focus(eventObject)
	},
	get_innerControl : function() {
		if (IsNull(this.$y_3))
			this.$y_3 = Mscrm.FormControlInputBehavior.GetBehavior(this.$z_3);
		return this.$y_3
	}
};
Mscrm.FormInputControl.LookupUIBehavior.registerClass(
		"Mscrm.FormInputControl.LookupUIBehavior",
		Mscrm.FormControlInputBehavior);
Mscrm.FormInputControl.PresenceLookupUIBehavior.registerClass(
		"Mscrm.FormInputControl.PresenceLookupUIBehavior",
		Mscrm.FormInputControl.LookupUIBehavior);
Mscrm.FormInputControl.ImageLookupParty.registerClass(
		"Mscrm.FormInputControl.ImageLookupParty",
		Mscrm.FormInputControl.PresenceLookupUIBehavior);
Mscrm.FormInputControl.ImageLookupTransactionCurrency.registerClass(
		"Mscrm.FormInputControl.ImageLookupTransactionCurrency",
		Mscrm.FormInputControl.PresenceLookupUIBehavior);
Mscrm.FormInputControl.FilterRelationshipData
		.registerClass("Mscrm.FormInputControl.FilterRelationshipData");
Mscrm.FormInputControl.LookupItemData
		.registerClass("Mscrm.FormInputControl.LookupItemData");
Mscrm.FormInputControl.ShowDialogEventArgs.registerClass(
		"Mscrm.FormInputControl.ShowDialogEventArgs", Sys.EventArgs);
Mscrm.FormInputControl.GenerateDataXmlEventArgs.registerClass(
		"Mscrm.FormInputControl.GenerateDataXmlEventArgs", Sys.EventArgs);
Mscrm.FormInputControl.ResultEventArgs.registerClass(
		"Mscrm.FormInputControl.ResultEventArgs", Sys.EventArgs);
Mscrm.FormInputControl.LookupTypeIcon
		.registerClass("Mscrm.FormInputControl.LookupTypeIcon");
Mscrm.FormInputControl.TableLookupUIControl.registerClass(
		"Mscrm.FormInputControl.TableLookupUIControl", Mscrm.CrmUIControl)