Type.registerNamespace("Mscrm.FormInputControl");
Mscrm.FormInputControl.HiddenInputBehavior = function(element) {
	Mscrm.FormInputControl.HiddenInputBehavior
			.initializeBase(this, [ element ])
};
Mscrm.FormInputControl.HiddenInputBehavior.prototype = {
	$0_4 : null,
	initialize : function() {
		Mscrm.FormControlInputBehavior.prototype.initialize.call(this);
		this.$0_4 = IsNull(this.get_element().getAttribute("value")) ? ""
				: this.get_element().getAttribute("value")
	},
	get_isDirty : function() {
		return this.$0_4 !== this.get_elementValue()
	},
	get_defaultValue : function() {
		return this.$0_4
	},
	set_defaultValue : function(value) {
		this.$0_4 = value;
		return value
	},
	get_attributeType : function() {
		return this.get_element().getAttribute("attrType")
	},
	set_attributeType : function(value) {
		this.get_element().setAttribute("attrType", value);
		return value
	},
	fireOnChange : function() {
		var $v_0 = XUI.Html.CreateDomEvent("change");
		XUI.Html.DispatchDomEvent(this.get_element(), $v_0)
	},
	get_dataValue : function() {
		var $v_0 = this.get_element().value.trim();
		return !$v_0.length ? null : $v_0
	},
	set_dataValue : function(value) {
		var $v_0 = IsNull(value) ? "" : value;
		if (typeof $v_0 === Mscrm.TypeNames.stringType) {
			this.get_element().value = $v_0;
			this.handleDataValueChangedEvent()
		} else
			alert(window.LOCID_DEVERROR_BADTYPE_STRING);
		return value
	},
	IsValid : function() {
		return true
	}
};
Mscrm.FormInputControl.HiddenInputBehavior.registerClass(
		"Mscrm.FormInputControl.HiddenInputBehavior",
		Mscrm.FormControlInputBehavior)