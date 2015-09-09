Type.registerNamespace("Mscrm.FormInputControl");
Mscrm.FormInputControl.CheckBoxInputBehavior = function(element) {
	this.$$d_$1_4 = Function.createDelegate(this, this.$1_4);
	Mscrm.FormInputControl.CheckBoxInputBehavior.initializeBase(this,
			[ element ])
};
Mscrm.FormInputControl.CheckBoxInputBehavior.prototype = {
	$0_4 : false,
	initialize : function() {
		Mscrm.FormControlInputBehavior.prototype.initialize.call(this);
		this.$0_4 = this.get_element().checked;
		$addHandler(this.get_element(), "change", this.$$d_$1_4)
	},
	get_isDataSlugSupported : function() {
		return true
	},
	get_isDirty : function() {
		return this.$0_4 !== this.get_dataValue()
	},
	get_dataXml : function() {
		var $v_0 = this.get_dataValue(), $v_1 = this.get_element().id;
		return String.format("<{0}>{1}</{0}>", $v_1, $v_0 ? "1" : "0")
	},
	get_dataValue : function() {
		return this.get_element().checked
	},
	set_dataValue : function(value) {
		this.get_element().checked = !!value;
		this.handleDataValueChangedEvent();
		return value
	},
	dispose : function() {
		!IsNull(this.get_element())
				&& $removeHandler(this.get_element(), "change", this.$$d_$1_4);
		Mscrm.CrmUIBehavior.prototype.dispose.call(this)
	},
	setFocus : function() {
		var form = $find("crmForm");
		!IsNull(form) && form.GetTab(this.get_element(), true);
		this.get_element().focus()
	},
	$1_4 : function($p0) {
		this.handleDataValueChangedEvent()
	}
};
Mscrm.FormInputControl.CheckBoxInputBehavior.registerClass(
		"Mscrm.FormInputControl.CheckBoxInputBehavior",
		Mscrm.FormControlInputBehavior)