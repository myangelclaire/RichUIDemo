Type.registerNamespace("Mscrm.FormInputControl");
Mscrm.FormInputControl.PicklistOption = function(text, dataValue) {
	this.Text = text;
	this.DataValue = dataValue
};
Mscrm.FormInputControl.RelationshipRoleSelectBehavior = function(element) {
	Mscrm.FormInputControl.RelationshipRoleSelectBehavior.initializeBase(this,
			[ element ])
};
Mscrm.FormInputControl.RelationshipRoleSelectBehavior.prototype = {
	$4_5 : null,
	$5_5 : 0,
	$3_5 : 0,
	$8_5 : null,
	initialize : function() {
		Mscrm.FormInputControl.SelectInputBehavior.prototype.initialize
				.call(this);
		var $v_0 = this.get_element().getAttribute("pOTC"), $v_1 = this
				.get_element().getAttribute("aOTC"), $v_2 = this.get_element()
				.getAttribute("defaultRole");
		this.$5_5 = IsNull($v_0) ? Mscrm.EntityTypeCode.None : parseInt($v_0,
				10);
		this.$3_5 = IsNull($v_1) ? Mscrm.EntityTypeCode.None : parseInt($v_1,
				10);
		this.$8_5 = IsNull($v_2) ? this.get_$2_5().value : $v_2;
		this.$4_5 = new RemoteCommand("RelationshipRolePicklist", "GetOptions")
	},
	get_primaryObjectTypeCode : function() {
		return this.$5_5
	},
	set_primaryObjectTypeCode : function(value) {
		if (IsNull(value))
			this.$5_5 = Mscrm.EntityTypeCode.None;
		else if (value !== this.get_primaryObjectTypeCode())
			this.$5_5 = value;
		else
			return value;
		this.$9_5();
		return value
	},
	get_associatedObjectTypeCode : function() {
		return this.$3_5
	},
	set_associatedObjectTypeCode : function(value) {
		if (IsNull(value))
			this.$3_5 = Mscrm.EntityTypeCode.None;
		else if (value !== this.get_associatedObjectTypeCode())
			this.$3_5 = value;
		else
			return value;
		this.$9_5();
		return value
	},
	get_isDirty : function() {
		return this.$8_5 !== this.get_$2_5().value
	},
	get_$2_5 : function() {
		return this.get_element()
	},
	$9_5 : function() {
		if (this.get_primaryObjectTypeCode() !== Mscrm.EntityTypeCode.None
				&& this.get_associatedObjectTypeCode() !== Mscrm.EntityTypeCode.None) {
			this.$4_5.SetParameter("primaryType", this
					.get_primaryObjectTypeCode());
			this.$4_5.SetParameter("associatedType", this
					.get_associatedObjectTypeCode());
			var $v_0 = this.$4_5.Execute();
			this.$C_5($v_0)
		} else {
			this.set_dataValue(null);
			this.set_disabled(true)
		}
	},
	$C_5 : function($p0) {
		if ($p0.Success && !IsNull($p0.ReturnValue)) {
			var $v_0 = this.get_$2_5().value;
			Array.clear(this.get_$2_5().options);
			var $v_1 = window.document, $v_2 = Sys.Serialization.JavaScriptSerializer
					.deserialize($p0.ReturnValue);
			for ( var key in $v_2)
				if ($v_2.hasOwnProperty(key)) {
					var option = $v_1.createElement("OPTION");
					option.value = key;
					option.text = $v_2[key];
					if (key === $v_0)
						option.selected = true;
					Array.add(this.get_$2_5().options, option)
				}
			this.set_disabled(false)
		}
	}
};
Mscrm.FormInputControl.SortingMode = function() {
};
Mscrm.FormInputControl.SelectInputBehavior = function(control) {
	Mscrm.FormInputControl.SelectInputBehavior
			.initializeBase(this, [ control ])
};
Mscrm.FormInputControl.SelectInputBehavior.prototype = {
	$1_4 : null,
	initialize : function() {
		Mscrm.FormControlInputBehavior.prototype.initialize.call(this);
		var $v_0 = this.get_element().getAttribute("isValueNull");
		parseInt(this.get_defaultValue()) === -1
				&& (IsNull($v_0) || $v_0 === "1") && this.set_selectedIndex(-1);
		if (Mscrm.Utilities.isIosDevice() && this.get_disabled())
			this.get_element().style.color = "#AFAFAF";
		isNullOrEmptyString(this.get_defaultValue())
				&& this.set_defaultValue(this.get_dataValue());
		this.$B_4()
	},
	get_isDataSlugSupported : function() {
		return true
	},
	get_isDirty : function() {
		return this.get_defaultValue() !== this.get_dataValue()
				&& !(this.get_selectedIndex() === -1 && parseInt(this
						.get_defaultValue()) === -1)
	},
	get_dataXml : function() {
		var $v_0 = this.get_element().id, $v_1 = this.get_$0_4().value;
		return String.format('<{0} name="{1}">{2}</{0}>', $v_0, CrmEncodeDecode
				.CrmXmlAttributeEncode(this.$7_4()), $v_1)
	},
	get_dataValue : function() {
		var $v_0 = this.get_$0_4().value;
		return isNullOrEmptyString($v_0) ? null : $v_0
	},
	set_dataValue : function(value) {
		var $v_0 = true;
		if (IsNull(value)) {
			this.get_$0_4().selectedIndex = -1;
			this.get_$0_4().value = ""
		} else {
			var $v_1 = typeof value;
			if (Mscrm.TypeNames.stringType === $v_1
					|| Mscrm.TypeNames.numberType === $v_1)
				this.get_$0_4().value = value;
			else {
				alert(window.LOCID_DEVERROR_BADTYPE_PICKLIST);
				$v_0 = false
			}
		}
		$v_0 && this.handleDataValueChangedEvent();
		return value
	},
	get_disabled : function() {
		return this.get_element().disabled
	},
	set_disabled : function(value) {
		this.get_element().disabled = value;
		if (Mscrm.Utilities.isIosDevice())
			if (value)
				this.get_element().style.color = "#AFAFAF";
			else
				this.get_element().style.color = "";
		return value
	},
	get_requiredLevel : function() {
		try {
			var $v_0 = this.get_element().getAttribute("req");
			return IsNull($v_0) ? 0 : Mscrm.Utilities.parseInt($v_0)
		} catch ($$e_1) {
			return 0
		}
	},
	get_defaultValue : function() {
		return this.get_element().getAttribute("defaultSelected")
	},
	set_defaultValue : function(value) {
		this.get_element().setAttribute("defaultSelected", value);
		return value
	},
	get_selectedIndex : function() {
		return this.get_$0_4().selectedIndex
	},
	set_selectedIndex : function(value) {
		this.get_$0_4().selectedIndex = value;
		return value
	},
	get_optionsXml : function() {
		var $v_0 = new Sys.StringBuilder("<select>"), $v_1 = this.get_element()
				.getElementsByTagName("OPTGROUP"), $v_2 = 0, $v_3 = $v_1.length;
		while ($v_2 < $v_3) {
			var $v_4 = $v_1[$v_2];
			$v_0.append(String.format('<OPTGROUP id="{0}" LABEL="{1}">',
					CrmEncodeDecode.CrmXmlAttributeEncode($v_4.id),
					CrmEncodeDecode.CrmXmlAttributeEncode($v_1[$v_2]
							.getAttribute("label"))));
			var $$t_7 = this;
			XUI.Xml.DomUtils
					.ForEachChild(
							$v_4,
							function($p1_0) {
								var $v_5 = $p1_0;
								$v_0
										.append(String
												.format(
														'<option title="{0}" value="{1}" Type="{2}">{3}</option>',
														CrmEncodeDecode
																.CrmXmlAttributeEncode($v_5.title),
														CrmEncodeDecode
																.CrmXmlAttributeEncode($v_5.value),
														CrmEncodeDecode
																.CrmXmlAttributeEncode($v_1[$v_2]
																		.getAttribute("Type")),
														CrmEncodeDecode
																.CrmXmlEncode($v_5.text)));
								return false
							});
			$v_0.append("</OPTGROUP>");
			++$v_2
		}
		$v_0.append("</select>");
		return $v_0.toString()
	},
	get_innerText : function() {
		return this.$7_4()
	},
	get_selectedText : function() {
		return this.$7_4()
	},
	set_selectedText : function(value) {
		this.get_selectedIndex() !== -1
				&& XUI.Html.SetText(this.get_$0_4().options[this
						.get_selectedIndex()], value);
		return value
	},
	get_selectedOption : function() {
		return this.get_selectedIndex() === -1 ? null
				: this.get_$0_4().options[this.get_selectedIndex()]
	},
	get_sort : function() {
		return this.get_element().getAttribute("Sort")
	},
	set_sort : function(value) {
		this.get_element().setAttribute("Sort", value);
		return value
	},
	get_options : function() {
		if (IsNull(this.$1_4)) {
			for ( var $v_0 = [], $v_1 = this.get_$0_4().options, $v_2 = $v_1.length, $v_3 = 0; $v_3 < $v_2; $v_3++) {
				var $v_4 = $v_1[$v_3];
				Array.add($v_0, new Mscrm.FormInputControl.PicklistOption(
						$v_4.text, $v_4.value))
			}
			this.$1_4 = $v_0
		}
		return this.$1_4
	},
	set_options : function(value) {
		var $v_0 = value.length;
		this.get_element().innerHTML = "";
		for ( var $v_1 = 0; $v_1 < $v_0; $v_1++) {
			var $v_2 = value[$v_1];
			this.AddOption($v_2.Text, $v_2.DataValue)
		}
		return value
	},
	setFocus : function() {
		if (!IsNull(this.get_$0_4().form)) {
			var form = $find("crmForm");
			!IsNull(form) && form.GetTab(this.get_element(), true)
		}
		this.get_element().focus()
	},
	AddOptionGroup : function(label, id, sorting) {
		this.$1_4 = null;
		var $v_0 = window.document.createElement("OPTGROUP");
		$v_0.id = id;
		$v_0.setAttribute("label", label);
		!isNullOrEmptyString(sorting) && $v_0.setAttribute("Sort", sorting);
		this.get_element().appendChild($v_0)
	},
	AddOption : function(name, value, groupId, position) {
		this.$1_4 = null;
		var $v_0 = null, $v_1 = null, $v_2 = null, $v_3 = window.document
				.createElement("OPTION");
		$v_3.value = value;
		if (!isNullOrEmptyString(groupId)) {
			for ( var $v_6 = this.get_element()
					.getElementsByTagName("OPTGROUP"), $v_7 = $v_6.length, $v_8 = 0; $v_8 < $v_7; $v_8++)
				if ($v_6[$v_8].id === groupId) {
					$v_2 = $v_6[$v_8];
					$v_1 = $v_2.children;
					$v_0 = $v_2.getAttribute("Sort");
					break
				}
		} else {
			$v_1 = this.get_$0_4().options;
			$v_0 = this.get_sort();
			$v_2 = this.get_element()
		}
		var $v_4 = $v_1.length, $v_5 = $v_4;
		if (IsNull(position)) {
			if (!IsNull($v_0)
					&& ($v_0 === "ascending" || $v_0 === "descending")
					&& $v_4 > 0)
				$v_5 = this.$6_4(name, 0, $v_4 - 1, $v_1, $v_0 === "ascending")
		} else
			$v_5 = position;
		if ($v_5 === $v_4)
			if ($v_2.tagName.toUpperCase() === "SELECT") {
				var $v_9 = $v_2;
				try {
					$v_9.add($v_3)
				} catch ($$e_E) {
					$v_9.add($v_3, null)
				}
			} else
				$v_2.insertBefore($v_3, null);
		else {
			$v_2 = $v_1[$v_5].parentNode;
			$v_2.insertBefore($v_3, $v_1[$v_5])
		}
		XUI.Html.SetText($v_3, name);
		$v_3.title = name;
		return $v_3
	},
	RemoveOption : function(value) {
		this.$1_4 = null;
		var $v_0 = this.indexOf(value);
		if ($v_0 !== -1)
			try {
				this.get_$0_4().remove($v_0)
			} catch ($$e_2) {
				var $v_1 = this.get_$0_4().options[$v_0];
				$v_1.parentNode.removeChild($v_1)
			}
	},
	indexOf : function(value) {
		var $v_0 = this.get_$0_4().value;
		this.get_$0_4().selectedIndex = -1;
		this.get_$0_4().value = value;
		var $v_1 = this.get_$0_4().selectedIndex;
		this.get_$0_4().value = $v_0;
		return $v_1
	},
	fireOnChange : function() {
		var $v_0 = XUI.Html.CreateDomEvent("change");
		XUI.Html.DispatchDomEvent(this.get_element(), $v_0)
	},
	get_$0_4 : function() {
		return this.get_element()
	},
	$B_4 : function() {
		if (this.get_isDisposed())
			return;
		for ( var $v_0 = this.get_$0_4().options, $v_1 = $v_0.length, $v_2 = 0; $v_2 < $v_1; $v_2++) {
			var $v_3 = $v_0[$v_2];
			if (!$v_3.title.length)
				$v_3.title = $v_3.text
		}
	},
	$7_4 : function() {
		if (this.get_selectedIndex() !== -1)
			return XUI.Html.GetText(this.get_$0_4().options[this
					.get_selectedIndex()]);
		return ""
	},
	$6_4 : function($p0, $p1, $p2, $p3, $p4) {
		var $v_0 = $p4 ? 1 : -1, $v_1 = -$v_0, $v_2 = Math
				.floor(($p1 + $p2) / 2), $v_3 = $p0
				.localeCompare($p3[$v_2].text);
		if ($v_3 > 1)
			$v_3 = 1;
		if ($v_3 < -1)
			$v_3 = -1;
		if ($p2 !== $p1)
			if ($v_3 === $v_0) {
				if ($v_2 !== $p2)
					return this.$6_4($p0, $v_2 + 1, $p2, $p3, $p4)
			} else if ($v_3 === $v_1) {
				if ($v_2 !== $p1)
					return this.$6_4($p0, $p1, $v_2 - 1, $p3, $p4)
			} else
				return $v_2;
		return $v_3 === $v_0 ? $v_2 + 1 : $v_2
	}
};
Mscrm.FormInputControl.PicklistOption
		.registerClass("Mscrm.FormInputControl.PicklistOption");
Mscrm.FormInputControl.SelectInputBehavior.registerClass(
		"Mscrm.FormInputControl.SelectInputBehavior",
		Mscrm.FormControlInputBehavior);
Mscrm.FormInputControl.RelationshipRoleSelectBehavior.registerClass(
		"Mscrm.FormInputControl.RelationshipRoleSelectBehavior",
		Mscrm.FormInputControl.SelectInputBehavior);
Mscrm.FormInputControl.SortingMode
		.registerClass("Mscrm.FormInputControl.SortingMode");
Mscrm.FormInputControl.SortingMode.Ascending = "ascending";
Mscrm.FormInputControl.SortingMode.Descending = "descending";
var ASCENDING = "ascending", DESCENDING = "descending";
function Select(bSorted, bAscend) {
	this.innerHTML = "";
	this.outerHTML = "";
	this.Attributes = "";
	this.Selected;
	this.OnChange;
	this.Disabled = false;
	this.ID = "";
	this.TabIndex = "";
	this.Sorted = bSorted;
	this.Ascend = bAscend;
	this.MultiSelect = false;
	this.Size = 0;
	this.AddEmptyOption = _addEmptyOption;
	this.AddOption = _addOption;
	this.AddOptionHtml = _addOptionHtml;
	this.AddOptionGroup = _addOptionGroup;
	this.AddAttribute = _addAttribute;
	this.Render = _render;
	this.SetMultiSelect = _multiSelect;
	this.AddToControl = _addToControl;
	var _optionGroup = new OptionGroup("", bSorted, bAscend, false), OptionGroupArray = [];
	OptionGroupArray.push(_optionGroup);
	function _addEmptyOption() {
		_optionGroup.AddEmptyOption()
	}
	function _addOptionHtml(sOptionHtml) {
		_optionGroup.AddOptionHtml(sOptionHtml)
	}
	function _addOption(sOptionText, sOptionValue, sExpandos) {
		_optionGroup.AddOption(sOptionText, sOptionValue, sExpandos)
	}
	function _addOptionGroup(oOptionGroup) {
		OptionGroupArray.push(oOptionGroup)
	}
	function _addAttribute(sAttributeName, sAttributeValue) {
		this.Attributes += " " + sAttributeName + '="'
				+ CrmEncodeDecode.CrmHtmlAttributeEncode(sAttributeValue)
				+ '" '
	}
	function _multiSelect(bMultiSelect, iSize) {
		this.MultiSelect = bMultiSelect;
		this.Size = iSize
	}
	function _render() {
		this.TabIndex != "" && this.AddAttribute("TabIndex", this.TabIndex);
		this.Disabled && this.AddAttribute("disabled", "true");
		if (this.Sorted)
			if (this.Ascend)
				this.AddAttribute("Sort", ASCENDING);
			else
				this.AddAttribute("Sort", DESCENDING);
		this.AddAttribute("id", this.ID);
		this.AddAttribute("name", this.ID);
		this.AddAttribute("class", "ms-crm-SelectBox");
		!IsNull(this.OnChange) && this.OnChange != ""
				&& this.AddAttribute("onchange", this.OnChange);
		!IsNull(this.Selected)
				&& this.AddAttribute("defaultSelected", this.Selected);
		if (this.MultiSelect)
			this.outerHTML = "<select multiple size='" + this.Size + "' ";
		else
			this.outerHTML = "<select ";
		this.outerHTML += this.Attributes;
		this.outerHTML += ">";
		for (index in OptionGroupArray) {
			var oGroup = OptionGroupArray[index];
			oGroup.Selected = this.Selected;
			this.innerHTML += oGroup.Render()
		}
		this.outerHTML += this.innerHTML;
		this.outerHTML += "</select>";
		return this.outerHTML
	}
	function _addToControl(control, bOuterHtml) {
		if (IsNull(bOuterHtml) || bOuterHtml == false)
			control.innerHTML = this.Render();
		else
			control.outerHTML = this.Render();
		$create(Mscrm.FormInputControl.SelectInputBehavior, {}, null, null,
				$get(this.ID))
	}
}
function OptionGroup(sLabel, bSorted, bAscend, bDisplayGrouping) {
	this.innerHTML = "";
	this.outerHTML = "";
	this.Attributes = "";
	this.Selected;
	this.Label = sLabel;
	this.Sorted = IsNull(bSorted) ? false : bSorted;
	this.Ascend = IsNull(bAscend) ? false : bAscend;
	this.ID = "";
	this.DisplayGrouping = IsNull(bDisplayGrouping) ? true : bDisplayGrouping;
	this.AddEmptyOption = _addEmptyOption;
	this.AddOption = _addOption;
	this.AddOptionHtml = _addOptionHtml;
	this.AddAttribute = _addAttribute;
	this.Render = _render;
	var arrayOptions = [];
	function _addEmptyOption(sExpandos) {
		_addOption("", "", sExpandos)
	}
	function _addOption(sOptionText, sOptionValue, sExpandos) {
		var oOption = new Option;
		oOption.Text = sOptionText;
		oOption.Value = sOptionValue;
		oOption.Expandos = sExpandos;
		arrayOptions.push(oOption)
	}
	function _addAttribute(sAttributeName, sAttributeValue) {
		this.Attributes += " " + sAttributeName + '="'
				+ CrmEncodeDecode.CrmHtmlAttributeEncode(sAttributeValue)
				+ '" '
	}
	function _addOptionHtml(sOptionHtml) {
		this.innerHTML += sOptionHtml
	}
	function _render() {
		if (this.DisplayGrouping) {
			this.AddAttribute("id", this.ID);
			this.AddAttribute("label", this.Label);
			if (this.Sorted)
				if (this.Ascend)
					this.AddAttribute("Sort", ASCENDING);
				else
					this.AddAttribute("Sort", DESCENDING);
			this.outerHTML = "<optgroup ";
			this.outerHTML += this.Attributes;
			this.outerHTML += ">"
		}
		this.Sorted
				&& arrayOptions.sort(this.Ascend ? ascendingComparator
						: descendingComparator);
		for (index in arrayOptions) {
			var oOption = arrayOptions[index];
			if (!IsNull(this.Selected) && oOption.Value == this.Selected)
				oOption.Selected = true;
			this.innerHTML += oOption.Render()
		}
		this.outerHTML += this.innerHTML;
		if (this.DisplayGrouping)
			this.outerHTML += "</optgroup>";
		return this.outerHTML
	}
	function ascendingComparator(oLHS, oRHS) {
		return oLHS.Text.localeCompare(oRHS.Text)
	}
	function descendingComparator(oLHS, oRHS) {
		return oRHS.Text.localeCompare(oLHS.Text)
	}
}
function Option() {
	this.Selected = false;
	this.Text = "";
	this.Value = "";
	this.outerHTML = "";
	this.Title = "";
	this.Expandos = "";
	this.Render = _render;
	function _render() {
		this.outerHTML = '<option value="';
		this.outerHTML += CrmEncodeDecode.CrmHtmlAttributeEncode(this.Value);
		this.outerHTML += '" ';
		this.outerHTML += 'title="';
		this.outerHTML += this.Title.length == 0 ? CrmEncodeDecode
				.CrmHtmlAttributeEncode(this.Text) : CrmEncodeDecode
				.CrmHtmlAttributeEncode(this.Title);
		this.outerHTML += '" ';
		if (this.Selected)
			this.outerHTML += "SELECTED ";
		if (!IsNull(this.Expandos))
			this.outerHTML += this.Expandos;
		this.outerHTML += ">";
		this.outerHTML += CrmEncodeDecode.CrmHtmlEncode(this.Text);
		this.outerHTML += "</option>";
		return this.outerHTML
	}
}