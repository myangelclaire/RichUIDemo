Type.registerNamespace("Mscrm");
Mscrm.FormControlType = function() {
};
Mscrm.FormControlType.prototype = {
	none : -1,
	standard : 0,
	hidden : 1,
	iFrame : 2,
	lookup : 3,
	optionSet : 4,
	subGrid : 5,
	webResource : 6,
	quickForm : 7,
	notes : 8
};
Mscrm.FormControlType.registerEnum("Mscrm.FormControlType", false);
Mscrm.FormDataAttributePrivileges = function() {
};
Mscrm.FormDataAttributePrivileges.prototype = {
	none : 0,
	create : 1,
	read : 2,
	update : 4
};
Mscrm.FormDataAttributePrivileges.registerEnum(
		"Mscrm.FormDataAttributePrivileges", true);
Mscrm.IFormDataControl = function() {
};
Mscrm.IFormDataControl.registerInterface("Mscrm.IFormDataControl");
Mscrm.IWebResourceControl = function() {
};
Mscrm.IWebResourceControl.registerInterface("Mscrm.IWebResourceControl");
Mscrm.IWebResourceDataControl = function() {
};
Mscrm.IWebResourceDataControl
		.registerInterface("Mscrm.IWebResourceDataControl");
Mscrm.SerializationMode = function() {
};
Mscrm.SerializationMode.prototype = {
	onlyNonNullValues : 0,
	onlyDirtyValues : 1,
	everything : 2
};
Mscrm.SerializationMode.registerEnum("Mscrm.SerializationMode", false);
Mscrm.ValidationType = function() {
};
Mscrm.ValidationType.prototype = {
	edit : 1,
	save : 2
};
Mscrm.ValidationType.registerEnum("Mscrm.ValidationType", false);
Mscrm.ValueSource = function() {
};
Mscrm.ValueSource.prototype = {
	control : 0,
	initialization : 1,
	newApi : 2,
	oldApi : 3
};
Mscrm.ValueSource.registerEnum("Mscrm.ValueSource", false);
Mscrm.ISerializableFormData = function() {
};
Mscrm.ISerializableFormData.registerInterface("Mscrm.ISerializableFormData");
Mscrm.OptionSetItem = function(value, text) {
	this.value = value;
	this.text = text
};
Mscrm.RecordSetStringKeys = function() {
};
Mscrm.RecordSetStringKeys.prototype = {
	records : 0,
	moreRecords : 1,
	gridXml : 2,
	remoteCommand : 3,
	refreshData : 4
};
Mscrm.RecordSetStringKeys.registerEnum("Mscrm.RecordSetStringKeys", false);
Mscrm.ClientApiConstants = function() {
};
Mscrm.ClientApiCollection = function() {
	this.$P_0 = []
};
Mscrm.ClientApiCollection.prototype = {
	$P_0 : null,
	$26_0 : false,
	forEach : function(actions, filter) {
		var $v_0 = false;
		if (IsNull(filter))
			$v_0 = true;
		for ( var $v_1 = 0; $v_1 < this.$P_0.length; $v_1++) {
			var $v_2 = this.$28_0($v_1);
			($v_0 || filter($v_2, $v_1)) && actions($v_2, $v_1)
		}
	},
	"get" : function(o) {
		if (IsNull(o)) {
			Mscrm.Utilities.syncInitAllControls();
			return this.$4k_0()
		}
		switch (typeof o) {
		case Mscrm.TypeNames.functionType:
			Mscrm.Utilities.syncInitAllControls();
			return this.$5K_0(o);
		case Mscrm.TypeNames.stringType:
			Mscrm.Utilities.tryInitOnDemandControl(o);
			for ( var $v_1 = 0; $v_1 < this.$P_0.length; $v_1++)
				if (this.$P_0[$v_1].getKey() === o)
					return this.$28_0($v_1);
			return null;
		case Mscrm.TypeNames.numberType:
			var $v_0 = parseInt(o, 10);
			Mscrm.Utilities.syncInitAllControls();
			return this.$28_0($v_0);
		default:
			Mscrm.Utilities.syncInitAllControls();
			return this.$4k_0()
		}
	},
	getFirst : function(filter) {
		for ( var $v_0 = 0; $v_0 < this.$P_0.length; $v_0++) {
			var $v_1 = this.$28_0($v_0);
			if (filter($v_1, $v_0))
				return $v_1
		}
		return null
	},
	getLength : function() {
		return this.$P_0.length
	},
	add : function(item) {
		Array.add(this.$P_0, item)
	},
	$1j_0 : function() {
		var $v_0 = new Mscrm.ClientApiCollection;
		$v_0.$P_0 = this.$P_0;
		$v_0.$26_0 = true;
		return $v_0
	},
	$5K_0 : function($p0) {
		for ( var $v_0 = [], $v_1 = 0; $v_1 < this.$P_0.length; $v_1++) {
			var $v_2 = this.$28_0($v_1);
			$p0($v_2, $v_1) && Array.add($v_0, $v_2)
		}
		return $v_0
	},
	$28_0 : function($p0) {
		var $v_0 = this.$P_0[$p0];
		if ($v_0)
			return this.$26_0 ? $v_0.getWrapper() : $v_0;
		return null
	},
	$5a_0 : function($p0) {
		for ( var $v_0 = [], $v_1 = 0; $v_1 < $p0.length; $v_1++)
			Array.add($v_0, $p0[$v_1].getWrapper());
		return $v_0
	},
	$4k_0 : function() {
		if (this.$26_0)
			return this.$5a_0(this.$P_0);
		else
			return this.$P_0
	}
};
Mscrm.ClientApiEventHandlerList = function($p0) {
	this.$2X_0 = $p0
};
Mscrm.ClientApiEventHandlerList.prototype = {
	$2X_0 : null,
	$23_0 : null,
	addHandler : function($p0, $p1, $p2) {
		if ($p2)
			this.$2X_0.addHandler($p0, $p1);
		else {
			var $v_0 = this.$3J_0($p0, true);
			Array.add($v_0, $p1)
		}
	},
	getHandler : function($p0) {
		var $v_0 = this.$2X_0.getHandler($p0), $v_1 = this.$3J_0($p0, false);
		if (!$v_1 || !$v_1.length)
			return $v_0 ? $v_0 : null;
		$v_1 = Array.clone($v_1);
		var $$t_8 = this;
		return function($p1_0, $p1_1) {
			$v_0 && $v_0($p1_0, $p1_1);
			for ( var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
				var $v_3 = Mscrm.FormUtility.constructExecutionObject($p1_0, 0,
						$p1_1, null), $v_4 = $v_1[$v_2];
				$v_4($v_3)
			}
		}
	},
	removeHandler : function($p0, $p1) {
		this.$2X_0.removeHandler($p0, $p1);
		var $v_0 = this.$3J_0($p0, false);
		$v_0 && Array.remove($v_0, $p1)
	},
	$3J_0 : function($p0, $p1) {
		if (!this.$23_0)
			if ($p1)
				this.$23_0 = {};
			else
				return null;
		if (!this.$23_0[$p0] && $p1)
			this.$23_0[$p0] = [];
		return this.$23_0[$p0]
	}
};
Mscrm.ClientApiUtility = function() {
};
Mscrm.ClientApiUtility.$$cctor = function() {
	Xrm.Page.getAttribute = Mscrm.ClientApiUtility.getAttribute;
	Xrm.Page.getControl = Mscrm.ClientApiUtility.getControl
};
Mscrm.ClientApiUtility.getAttribute = function(name) {
	var $v_0 = Xrm.Page.data;
	return !$v_0 ? null : $v_0.entity.attributes.get(name)
};
Mscrm.ClientApiUtility.getControl = function(id) {
	var $v_0 = Xrm.Page.ui;
	return !$v_0 ? null : $v_0.controls.get(id)
};
Mscrm.EntitySaveEventArgs = function($p0) {
	Mscrm.EntitySaveEventArgs.initializeBase(this);
	this.$3m_2 = $p0
};
Mscrm.EntitySaveEventArgs.prototype = {
	$3m_2 : 0,
	$2p_2 : false,
	getSaveMode : function() {
		return this.$3m_2
	},
	get_isCalledFromSubmitCrmForm : function() {
		return this.$2p_2
	},
	set_isCalledFromSubmitCrmForm : function(value) {
		this.$2p_2 = value;
		return value
	}
};
Mscrm.FormCloseEventArgs = function() {
	Mscrm.FormCloseEventArgs.initializeBase(this)
};
Mscrm.FormEventArgs = function() {
	Mscrm.FormEventArgs.initializeBase(this)
};
Mscrm.FormEventArgs.prototype = {
	$3h_1 : false,
	isDefaultPrevented : function() {
		return this.$3h_1
	},
	preventDefault : function() {
		this.$3h_1 = true
	}
};
Mscrm.FormDataManager = function() {
	this.$1r_0 = {}
};
Mscrm.FormDataManager.$76 = function($p0) {
	var $v_0 = Xrm.Page.data;
	if (!$v_0)
		Xrm.Page.data = $v_0 = new Mscrm.FormDataManager;
	var $v_1 = $v_0.getEntityById($p0.get_id());
	if (!IsNull($v_1)) {
		$v_1.$4x_0();
		$v_1 = null
	}
	var $v_2 = $p0.$29_1();
	if ($p0.get_id() === "PrimaryEntity")
		$v_0.entity = $v_2;
	$v_0.$1r_0[$p0.get_id()] = $v_2
};
Mscrm.FormDataManager.$7b = function($p0) {
	var $v_0 = Xrm.Page.data;
	if (IsNull($v_0))
		return;
	if ($p0 === "PrimaryEntity")
		$v_0.entity = null;
	$v_0.$1r_0[$p0] = null
};
Mscrm.FormDataManager.prototype = {
	entity : null,
	getEntityById : function(id) {
		if (id in this.$1r_0)
			return this.$1r_0[id];
		else
			return null
	},
	$1r_0 : null
};
Mscrm.FormDataAttributePrivilege = function(privileges) {
	this.canCreate = !!(privileges & 1);
	this.canRead = !!(privileges & 2);
	this.canUpdate = !!(privileges & 4)
};
Mscrm.FormDataAttributePrivilege.prototype = {
	canCreate : false,
	canRead : false,
	canUpdate : false
};
Mscrm.FormUIControl = function($p0) {
	this.$$d_$5j_4 = Function.createDelegate(this, this.$5j_4);
	this.$$d_$5e_4 = Function.createDelegate(this, this.$5e_4);
	Mscrm.FormUIControl.initializeBase(this, [ $p0 ])
};
Mscrm.FormUIControl.$4M = function($p0) {
	var $v_0 = $p0.getAttribute("isAutoExpanding");
	if (!IsNull($v_0) && $v_0.toString() === "TRUE")
		return true;
	else
		return false
};
Mscrm.FormUIControl.prototype = {
	$1R_4 : 0,
	$2t_4 : null,
	$6_4 : null,
	$2_4 : null,
	$3s_4 : true,
	$17_4 : null,
	get_dataFieldName : function() {
		return this.$2t_4
	},
	set_dataFieldName : function(value) {
		this.$2t_4 = value;
		return value
	},
	get_innerControl : function() {
		if (!this.$6_4) {
			Mscrm.Utilities.tryInitOnDemandControl(this.$f_3);
			if (this.$1R_4 === 5)
				this.$6_4 = Mscrm.GridControl.findComponent(this.$f_3);
			else
				this.$6_4 = $find(this.$f_3)
		}
		return this.$6_4
	},
	set_innerControl : function(value) {
		this.$6_4 = value;
		return value
	},
	initialize : function() {
		Mscrm.CrmUIControl.prototype.initialize.call(this);
		if (!this.$6_4) {
			var $v_0 = false;
			if (IsNull(window._aControlHeaderList))
				$v_0 = true;
			else {
				var $v_1 = window._aControlHeaderList[this.$f_3];
				if (!$v_1 || $v_1.State === "complete")
					$v_0 = true
			}
			if ($v_0)
				if (this.$2t_4)
					;
		}
		this.$2_4 = $get(this.$f_3 + "_c");
		this.$3s_4 = !!this.$2_4 && this.$2_4.getAttribute("sl") !== "false";
		this.$4o_4()
	},
	isVisibleInTree : function() {
		var $v_0 = this.get_parent();
		return this.getVisible() && $v_0.getVisible()
				&& $v_0.get_parent().getVisible()
	},
	setFocus : function() {
		!this.getVisible() && this.setVisible(true);
		var $v_0 = this.get_parent();
		!$v_0.getVisible() && $v_0.setVisible(true);
		var $v_1 = $v_0.get_parent();
		!$v_1.getVisible() && $v_1.setVisible(true);
		$v_1.get_displayState() === "collapsed"
				&& $v_1.set_displayState("expanded");
		this.get_innerControl().setFocus()
	},
	setRequiredLevel : function(level) {
		if (this.$2_4) {
			var $v_0 = "";
			switch (level) {
			case "recommended":
				$v_0 = LOCID_FORM_RECOMMENDED_ALT;
				break;
			case "required":
				$v_0 = LOCID_FORM_REQUIRED_ALT;
				break;
			case "none":
				break;
			default:
				return
			}
			Mscrm.Form.setFieldRequiredOrRecommended(this.$2_4,
					Xrm.RequiredLevel.toLegacyValue(level), $v_0)
		}
		if (this.get_innerControl()
				&& Sys.UI.Control.isInstanceOfType(this.get_innerControl())) {
			var $v_1 = this.get_innerControl().get_element();
			$v_1.setAttribute("req", level)
		}
	},
	setVisible : function(isVisible) {
		this.get_element().style.visibility = isVisible ? "visible" : "hidden";
		this.get_innerControl().setVisible(isVisible);
		if (isVisible && !isNullOrEmptyString(this.get_element().style.display))
			this.get_element().style.display = "";
		if (!IsNull(this.$2_4) && this.$3s_4) {
			this.$2_4.style.visibility = isVisible ? "visible" : "hidden";
			if (isVisible && !isNullOrEmptyString(this.$2_4.style.display))
				this.$2_4.style.display = ""
		}
		this.$5m_4(isVisible)
	},
	isEditing : function() {
		return false
	},
	$5m_4 : function($p0) {
		var $v_0 = this.get_parent(), $v_1 = $v_0.get_element().offsetHeight;
		this.$7T_4(this.get_element());
		this.$7S_4(this.get_element(), $p0);
		this.$4m_4($p0);
		this.$5f_4($p0, $v_1)
	},
	$7T_4 : function($p0) {
		var $v_0 = true, $v_1 = $p0.parentNode;
		if ($v_1.hasChildNodes())
			for ( var $v_2 = $v_1.childNodes, $v_3 = 0; $v_3 < $v_2.length; $v_3++) {
				var $v_4 = $v_2[$v_3];
				if ($v_4.style.visibility !== "hidden") {
					$v_0 = false;
					break
				}
			}
		if ($v_0 && this.$43_4())
			$v_1.style.display = "none";
		else
			$v_1.style.display = ""
	},
	$7S_4 : function($p0, $p1) {
		if (!IsNull($p0)) {
			var $v_0 = XUI.Html.DomUtils.GetNextSibling($p0.parentNode), $v_1 = 1, $v_2 = $p0
					.getAttribute("rowspan");
			if (!IsNull($v_2))
				$v_1 = parseInt($v_2.toString(), 10);
			if (this.$43_4())
				while (!IsNull($v_0) && $v_1-- > 1) {
					$v_0.style.display = $p1 ? "" : "none";
					$v_0 = XUI.Html.DomUtils.GetNextSibling($v_0)
				}
		}
	},
	$4m_4 : function($p0) {
		if (this.$4K_4()) {
			var $v_0 = this.get_parent(), $v_1 = $v_0.get_parent();
			!IsNull($v_1)
					&& $v_1.get_element().setAttribute("IsViewportTab",
							$p0 ? "1" : "0");
			$v_0.get_element().setAttribute("IsViewportSection",
					$p0 ? "1" : "0");
			if (!$p0) {
				if (!IsNull($v_1)) {
					$v_1.get_element().style.height = "";
					$v_1.get_element().childNodes[1].style.height = ""
				}
				$v_0.get_element().style.height = ""
			}
		}
	},
	$5f_4 : function($p0, $p1) {
		var $v_0 = $find("crmForm");
		if (!IsNull($v_0)) {
			var $v_1 = this.get_parent(), $v_2 = $v_1.get_parent();
			if (this.$4K_4()) {
				!IsNull($v_2)
						&& $v_0
								.SetViewportTabSection("tab", $v_2.get_id(),
										$p0);
				$v_0.SetViewportTabSection("section", $v_1.get_id(), $p0)
			} else
				!IsNull($v_2)
						&& $v_0.ModifyMinimumTabHeight(
								$v_1.get_element().offsetHeight - $p1, $v_2
										.get_id());
			$v_0.HandleResize()
		}
	},
	$43_4 : function() {
		var $v_0 = 1, $v_1 = this.get_element().getAttribute("formXmlColSpan");
		if (!IsNull($v_1))
			$v_0 = parseInt($v_1.toString(), 10);
		var $v_2 = this.$5W_4();
		return $v_0 === $v_2
	},
	$4K_4 : function() {
		return Mscrm.FormUIControl.$4M(this.get_element())
	},
	$5W_4 : function() {
		var $v_0 = this.get_parent(), $v_1 = $v_0.get_element().getAttribute(
				"columns");
		if (!IsNull($v_1))
			return parseInt($v_1.toString(), 10);
		else
			return XUI.Html.DomUtils.GetFirstChild($v_0.get_element()).childNodes.length / 2
	},
	getWrapperInternal : function() {
		switch (this.$1R_4) {
		case 3:
			return new Mscrm.LookupUIControlWrapper(this);
		case 5:
			return new Mscrm.SubGridUIControlWrapper(this);
		case 6:
			switch (this.get_innerControl().get_element().tagName) {
			case "IMG":
				return new Mscrm.WebResourceUIControlWrapper(this);
			case "OBJECT":
				return new Mscrm.WebResourceDataUIControlWrapper(this);
			default:
				return new Mscrm.WebResourceObjectUIControlWrapper(this)
			}
		case 2:
			return new Mscrm.IFrameUIControlWrapper(this);
		case 4:
			var $v_0 = this.get_innerControl().get_attribute();
			if ($v_0 && $v_0.$H_1 === "boolean")
				return new Mscrm.BooleanOptionSetUIControlWrapper(this);
			else
				return new Mscrm.OptionSetUIControlWrapper(this);
		case 8:
		case 0:
			var $v_1 = this.get_innerControl().get_element();
			if (Sys.UI.DomElement.containsCssClass($v_1, "ms-crm-CheckBox")
					|| Sys.UI.DomElement.containsCssClass($v_1,
							"ms-crm-RadioButton"))
				return new Mscrm.BooleanUIControlWrapper(this);
			else
				return new Mscrm.DataUIControlWrapper(this);
		default:
			return null
		}
	},
	get_label : function() {
		return Mscrm.Utilities.getNonHiddenInnerText(this.$2_4)
	},
	set_label : function(value) {
		Mscrm.Utilities.setNonHiddenLabelValue(this.$2_4, value);
		return value
	},
	get_controlType : function() {
		return this.$1R_4
	},
	set_controlType : function(value) {
		this.$1R_4 = value;
		return value
	},
	dispose : function() {
		this.$4v_4();
		this.$17_4 = null;
		this.$2_4 = null;
		Mscrm.FormUIElement.prototype.dispose.call(this)
	},
	$4o_4 : function() {
		var $v_0 = this.$5P_4();
		if (IsNull($v_0)) {
			Mscrm.FormUtility.$2b(this.get_element(), this.$$d_$5e_4, true);
			return
		}
		$addHandler($v_0, "load", this.$$d_$5j_4)
	},
	$5j_4 : function($p0) {
		var $v_0 = $p0.target, $v_1 = null;
		try {
			$v_1 = $v_0.contentWindow.document.body;
			Mscrm.FormUtility.$2b($v_1, this.$$d_$5e_4, true)
		} catch ($$e_3) {
		}
	},
	$5e_4 : function($p0) {
		Mscrm.Utilities.tryInitOnDemandControl(this.$f_3);
		Mscrm.FormUIControl.$2n = this
	},
	$5P_4 : function() {
		if (this.$1R_4 !== 8)
			return null;
		if (IsNull(this.$17_4))
			this.$17_4 = this.get_innerControl().get_element();
		return this.$17_4
	},
	$4v_4 : function() {
		if (IsNull(this.$17_4)) {
			Mscrm.FormUtility.$2b(this.get_element(), this.$$d_$5e_4, false);
			return
		}
		try {
			$removeHandler(this.$17_4, "load", this.$$d_$5j_4);
			var $v_0 = this.$17_4.contentWindow.document.body;
			Mscrm.FormUtility.$2b($v_0, this.$$d_$5e_4, false)
		} catch ($$e_1) {
		}
	}
};
Mscrm.FormUIElement = function(e) {
	Mscrm.FormUIElement.initializeBase(this, [ e ])
};
Mscrm.FormUIElement.prototype = {
	$f_3 : null,
	$2P_3 : null,
	$l_3 : null,
	get_elementId : function() {
		return this.$f_3
	},
	set_elementId : function(value) {
		this.$f_3 = value;
		return value
	},
	get_elementName : function() {
		return this.$2P_3
	},
	set_elementName : function(value) {
		this.$2P_3 = value;
		return value
	},
	getKey : function() {
		return this.$2P_3
	},
	getVisible : function() {
		return this.get_visible()
	},
	setVisible : function(isVisible) {
		this.set_visible(isVisible)
	},
	getWrapper : function() {
		if (!this.$l_3)
			this.$l_3 = this.getWrapperInternal();
		return this.$l_3
	},
	dispose : function() {
		Mscrm.CrmUIControl.prototype.dispose.call(this)
	}
};
Mscrm.FormUIFormSelector = function() {
	Mscrm.FormUIFormSelector.initializeBase(this);
	this.$h_1 = new Mscrm.ClientApiCollection
};
Mscrm.FormUIFormSelector.prototype = {
	$N_1 : null,
	$h_1 : null,
	get_currentForm : function() {
		var $v_0 = !this.$N_1 ? null : this.$N_1.$q_3;
		return isNullOrEmptyString($v_0) ? null : this.$h_1.get($v_0)
	},
	get_formSelector : function() {
		return this.$N_1
	},
	set_formSelector : function(value) {
		this.$N_1 = value;
		return value
	},
	get_items : function() {
		return this.$h_1
	},
	initialize : function() {
		Sys.Component.prototype.initialize.call(this);
		if (this.$N_1) {
			var $v_0 = this.$N_1.$1t_3;
			if ($v_0)
				for ( var $v_1 = this.$N_1.$2Q_3, $v_2 = 0; $v_2 < $v_0.length; $v_2++)
					this.$h_1.add(new Mscrm.FormUIRuleForm($v_0[$v_2],
							$v_1[$v_2]))
		}
	},
	dispose : function() {
		Sys.Component.prototype.dispose.call(this);
		Mscrm.Utilities.destroyObject(this)
	},
	$29_1 : function() {
		return new Mscrm.FormSelectorWrapper(this)
	}
};
Mscrm.FormUIManager = function() {
	Mscrm.FormUIManager.initializeBase(this);
	this.controls = new Mscrm.ClientApiCollection;
	this.controls.$26_0 = true;
	this.tabs = new Mscrm.ClientApiCollection;
	this.tabs.$26_0 = true;
	this.$67_1();
	this.$62_1();
	var $v_0 = Sys.Serialization.JavaScriptSerializer
			.deserialize(_formHierarchy).children;
	this.$4q_1($v_0);
	this.$1s_1 = $find("crmForm")
};
Mscrm.FormUIManager.$61 = function($p0, $p1, $p2) {
	var $v_0 = $p0.child;
	if (!IsNull($v_0) && $v_0.isClientApiEnabled) {
		var $v_1 = $get($v_0.id), $v_2 = $get($v_0.id + "_d");
		if (($v_1 || $v_0.controlType === 5) && $v_2 && $v_0.controlType !== 1) {
			var $v_3 = {
				controlType : $v_0.controlType,
				dataFieldName : $v_0.name,
				elementId : $v_0.id,
				elementName : $v_0.id,
				parent : $p1
			}, $v_4 = {
				innerControl : $v_0.id
			}, $v_5 = $create(Mscrm.FormUIControl, $v_3, null, $v_4, $v_2);
			$p1.$K_4.add($v_5);
			$p2.controls.add($v_5)
		}
	}
};
Mscrm.FormUIManager.$69 = function($p0, $p1) {
	var $v_0 = $get($p0.id);
	if ($v_0) {
		var $v_1 = {
			elementId : $p0.id,
			elementName : $p0.name,
			parent : $p1
		}, $v_2 = $create(Mscrm.FormUISection, $v_1, null, null, $v_0);
		$p1.$38_4.add($v_2);
		return $v_2
	} else if (Mscrm.CrmUri.create(window.location.href).get_pageType() === "entityrecord")
		;
	return null
};
Mscrm.FormUIManager.$6B = function($p0, $p1, $p2) {
	var $v_0 = String.format("tab{0}", $p1), $v_1 = $get($v_0);
	if ($v_1) {
		var $v_2 = {
			elementId : $p0.id,
			elementName : $p0.name,
			parent : $p2
		}, $v_3 = "crmEventManager";
		if (!IsNull($find("crmInlinePageManager")))
			$v_3 = "__Page_crmEventManager";
		var $v_4 = {
			eventManager : $v_3
		}, $v_5 = $create(Mscrm.FormUITab, $v_2, null, $v_4, $v_1);
		$p2.tabs.add($v_5);
		return $v_5
	} else if (Mscrm.CrmUri.create(window.location.href).get_pageType() === "entityrecord")
		;
	return null
};
Mscrm.FormUIManager.prototype = {
	controls : null,
	navigation : null,
	formSelector : null,
	tabs : null,
	$1s_1 : null,
	dispose : function() {
		Sys.Component.prototype.dispose.call(this);
		Mscrm.Utilities.destroyObject(this)
	},
	getCurrentControl : function() {
		var $v_0 = Mscrm.FormUIControl.$2n;
		if (!IsNull($v_0) && $v_0.get_element().id
				&& $v_0.get_id().endsWith("_d")) {
			var $v_1 = $v_0.get_element().id;
			return this.controls.get($v_1.substring(0, $v_1.length - 2))
		}
		return null
	},
	getFormType : function() {
		return this.$1s_1.get_formType()
	},
	getViewPortHeight : function() {
		return this.$1s_1.GetViewportHeight()
	},
	getViewPortWidth : function() {
		return this.$1s_1.GetViewportWidth()
	},
	refreshRibbon : function() {
		refreshRibbon()
	},
	close : function() {
		this.$1s_1.CloseRecord()
	},
	$4q_1 : function($p0) {
		this.$2c_1($p0, this)
	},
	$2c_1 : function($p0, $p1) {
		if (!IsNull($p0))
			for ( var $v_0 = 0; $v_0 < $p0.length; $v_0++) {
				var $v_1 = $p0[$v_0];
				switch ($v_1.__type) {
				case "tab":
					var $v_2 = Mscrm.FormUIManager.$6B($v_1, $v_0, this);
					$v_2 && this.$2c_1($v_1.children, $v_2);
					break;
				case "section":
					var $v_3 = Mscrm.FormUIManager.$69($v_1, $p1);
					$v_3 && this.$2c_1($v_1.children, $v_3);
					break;
				case "cell":
					Mscrm.FormUIManager.$61($v_1, $p1, this);
					break;
				case "column":
				case "row":
				default:
					this.$2c_1($v_1.children, $p1);
					break
				}
			}
	},
	$67_1 : function() {
		var $v_0 = {};
		$v_0["formNavControl"] = "crmNavBar";
		var $v_1 = $create(Mscrm.FormUINavigationBar, null, null, $v_0, null);
		this.navigation = $v_1.$29_1()
	},
	$62_1 : function() {
		var $v_0 = {};
		$v_0["formSelector"] = "crmFormSelector";
		var $v_1 = $create(Mscrm.FormUIFormSelector, null, null, $v_0, null);
		this.formSelector = $v_1.$29_1()
	}
};
Mscrm.FormUINavigationBar = function() {
	this.$$d_$64_1 = Function.createDelegate(this, this.$64_1);
	Mscrm.FormUINavigationBar.initializeBase(this);
	this.$h_1 = new Mscrm.ClientApiCollection
};
Mscrm.FormUINavigationBar.prototype = {
	$1B_1 : null,
	$h_1 : null,
	get_formNavControl : function() {
		return this.$1B_1
	},
	set_formNavControl : function(value) {
		this.$1B_1 = value;
		return value
	},
	get_items : function() {
		return this.$h_1
	},
	get_visible : function() {
		return !!this.$1B_1
	},
	initialize : function() {
		Sys.Component.prototype.initialize.call(this);
		this.$1B_1 && this.$1B_1.add_$4n_3(this.$$d_$64_1)
	},
	dispose : function() {
		Sys.Component.prototype.dispose.call(this);
		Mscrm.Utilities.destroyObject(this)
	},
	$29_1 : function() {
		return new Mscrm.NavigationBarWrapper(this)
	},
	$64_1 : function($p0, $p1) {
		for ( var $v_0 = this.$1B_1.getItemIds(), $v_1 = 0; $v_1 < $v_0.length; $v_1++)
			this.$h_1.add(new Mscrm.FormUINavigationBarItem(this.$1B_1,
					$v_0[$v_1]))
	}
};
Mscrm.FormUINavigationBarItem = function($p0, $p1) {
	this.$1v_0 = $p0;
	this.$U_0 = $p1
};
Mscrm.FormUINavigationBarItem.prototype = {
	$1v_0 : null,
	$U_0 : null,
	getId : function() {
		return this.$U_0
	},
	getKey : function() {
		return this.$U_0
	},
	getLabel : function() {
		return this.$1v_0.getItemText(this.$U_0)
	},
	getVisible : function() {
		return this.$1v_0.getItemVisibility(this.$U_0)
	},
	getWrapper : function() {
		return this
	},
	setFocus : function() {
		this.setVisible(true);
		var $v_0 = $get(this.$U_0);
		XUI.Html.DispatchDomEvent($v_0, XUI.Html.CreateDomEvent("click"))
	},
	setLabel : function(labelText) {
		this.$1v_0.setItemText(this.$U_0, labelText)
	},
	setVisible : function(isVisible) {
		this.$1v_0.setItemVisibility(this.$U_0, isVisible)
	}
};
Mscrm.FormUIRuleForm = function(id, label) {
	this.$$d_navigate = Function.createDelegate(this, this.navigate);
	this.$U_0 = id;
	this.$2_0 = label
};
Mscrm.FormUIRuleForm.prototype = {
	$U_0 : null,
	$2_0 : null,
	getId : function() {
		return this.$U_0
	},
	getKey : function() {
		return this.$U_0
	},
	getLabel : function() {
		return this.$2_0
	},
	getWrapper : function() {
		return this
	},
	navigate : function() {
		if (isActionQueueActive()) {
			window.setTimeout(this.$$d_navigate, 5);
			return
		}
		var $v_0 = Mscrm.Utilities.getContentUrl(this);
		$v_0.get_query()["formid"] = this.$U_0;
		var $v_1 = {};
		$v_1["uri"] = $v_0.toString();
		$v_1["sameWindow"] = true;
		Mscrm.PageManager.get_instance().raiseEvent(
				Mscrm.ScriptEvents.NavigateRequest, $v_1)
	}
};
Mscrm.FormUISection = function($p0) {
	Mscrm.FormUISection.initializeBase(this, [ $p0 ]);
	this.$K_4 = new Mscrm.ClientApiCollection;
	var $v_0 = $p0, $v_1 = $v_0.rows[0];
	if ($v_1) {
		var $v_2 = $v_1.cells[0];
		if ($v_2
				&& Sys.UI.DomElement.containsCssClass($v_2,
						"ms-crm-Form-Section")
				&& !Sys.UI.DomElement.containsCssClass($v_2,
						"ms-crm-Form-SectionBar-Spacer"))
			this.$2_4 = XUI.Html.DomUtils.GetFirstChild($v_2);
		else
			this.$1W_4 = $v_0.getAttribute("label")
	}
	this.$60_4()
};
Mscrm.FormUISection.$4E = function($p0) {
	var $v_0 = $find($p0);
	if (IsNull($v_0)) {
		Mscrm.CrmUIComponent.crmCreate(Mscrm.FormUISection, null, null, null,
				$get($p0));
		$v_0 = $find($p0)
	}
	return $v_0
};
Mscrm.FormUISection.prototype = {
	$K_4 : null,
	$2_4 : null,
	$1W_4 : null,
	$2G_4 : null,
	dispose : function() {
		this.$2G_4 = null;
		this.$K_4 = null;
		this.$2_4 = null;
		Mscrm.FormUIElement.prototype.dispose.call(this)
	},
	get_label : function() {
		return this.$2_4 ? XUI.Html.GetText(this.$2_4) : this.$1W_4
	},
	set_label : function(value) {
		if (this.$2_4)
			XUI.Html.SetText(this.$2_4, value);
		else
			this.$1W_4 = value;
		return value
	},
	setVisible : function(isVisible) {
		Mscrm.FormUIElement.prototype.setVisible.call(this, isVisible);
		if (isVisible)
			this.get_element().style.display = ""
	},
	getWrapperInternal : function() {
		return new Mscrm.SectionWrapper(this)
	},
	$60_4 : function() {
		for ( var $v_0 = this.get_element().getElementsByTagName("TD"), $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
			var $v_2 = $v_0[$v_1];
			if (Mscrm.FormUIControl.$4M($v_2))
				this.$2G_4 = $v_2
		}
	},
	$3R_4 : function() {
		this.$4Y_4(false)
	},
	$4W_4 : function() {
		this.$4Y_4(true)
	},
	$4Y_4 : function($p0) {
		if (!IsNull(this.$2G_4)) {
			var $v_0 = this.$2G_4;
			if (this.$7X_4($v_0))
				return;
			var $v_1 = $v_0.offsetHeight;
			if ($v_1 > 0)
				if ($p0)
					$v_0.style.height = "auto";
				else
					$v_0.style.height = ($v_1 - Mscrm.Utilities
							.getVerticalBoxPadding($v_0)).toString()
							+ "px"
		}
	},
	$7X_4 : function($p0) {
		var $v_0 = XUI.Html.DomUtils.GetLastChild($p0);
		if (!IsNull($v_0)) {
			if ($v_0.tagName === "IFRAME")
				return false;
			var $v_1 = $v_0.getAttribute("type");
			if ($v_1 === "subgrid")
				return true
		}
		return false
	}
};
Mscrm.FormUITab = function($p0) {
	this.$$d_$6a_4 = Function.createDelegate(this, this.$6a_4);
	Mscrm.FormUITab.initializeBase(this, [ $p0 ]);
	this.$38_4 = new Mscrm.ClientApiCollection
};
Mscrm.FormUITab.get_$4T = function() {
	return $find("crmNavBar")
};
Mscrm.FormUITab.$5M = function($p0) {
	if (IsNull($p0.style))
		return true;
	else
		return $p0.style.display !== "none"
				&& $p0.style.visibility !== "hidden"
};
Mscrm.FormUITab.$7F = function($p0, $p1) {
	$p0.style.display = $p1 ? "" : "none"
};
Mscrm.FormUITab.prototype = {
	$1Q_4 : null,
	$s_4 : null,
	$2_4 : null,
	$1W_4 : null,
	$38_4 : null,
	add_tabStateChange : function(value) {
		this.get_events().addHandler("TabStateChange", value)
	},
	remove_tabStateChange : function(value) {
		this.get_events().removeHandler("TabStateChange", value)
	},
	get_displayState : function() {
		return Mscrm.FormUITab.$5M(this.$1Q_4) ? "expanded" : "collapsed"
	},
	set_displayState : function(value) {
		switch (value) {
		case "collapsed":
		case "expanded":
			break;
		default:
			return value
		}
		var $v_0 = this.get_displayState(), $v_1 = value === "expanded";
		Mscrm.FormUITab.$7F(this.$1Q_4, $v_1);
		if (this.$s_4) {
			var $v_2 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri
					.create($v_1 ? "/_imgs/tab_section_down.png"
							: "/_imgs/tab_section_right.png"));
			this.$s_4.src = $v_2.source;
			this.$s_4.className = Mscrm.ImageStrip
					.replaceExistingImageStripClass(this.$s_4.className,
							$v_2.cssClass);
			this.$s_4.alt = this.$s_4.title = $v_1 ? window.LOCID_FORM_TABHEADER_COLLAPSE
					: window.LOCID_FORM_TABHEADER_EXPAND
		}
		if (this.get_isInitialized() && $v_0 !== value) {
			if (value === "expanded")
				for ( var $v_3 = this.get_element().getElementsByTagName(
						"IFRAME"), $v_4 = 0; $v_4 < $v_3.length; $v_4++) {
					var $v_5 = $v_3[$v_4].attributes.getNamedItem("gridId");
					if (!IsNull($v_5)) {
						var $v_6 = {};
						$v_6["id"] = $v_5.value;
						Mscrm.PageManager.get_instance().raiseEvent(
								Mscrm.ScriptEvents.TabExpended, $v_6)
					}
				}
			this.$6i_4()
		}
		return value
	},
	get_label : function() {
		return this.$2_4 ? XUI.Html.GetText(this.$2_4) : this.$1W_4
	},
	set_label : function(value) {
		if (this.$2_4) {
			XUI.Html.SetText(this.$2_4, value);
			var $v_0 = Mscrm.FormUITab.get_$4T();
			$v_0
					&& $v_0.setItemText(String.format("{0}Tab", this.get_id()),
							value)
		} else
			this.$1W_4 = value;
		return value
	},
	initialize : function() {
		Mscrm.CrmUIControl.prototype.initialize.call(this);
		var $v_0 = $get(String.format("{0}_Header", this.$f_3));
		if ($v_0) {
			var $v_1 = $v_0.getElementsByTagName("H2");
			if ($v_1.length > 0)
				this.$2_4 = $v_1[0];
			this.$1Q_4 = XUI.Html.DomUtils.GetNextSibling($v_0);
			var $v_2 = $v_0.getElementsByTagName("IMG");
			if ($v_2.length > 0) {
				this.$s_4 = $v_2[0];
				for ( var $v_3 = $v_0.getElementsByTagName("A"), $v_4 = 0; $v_4 < $v_3.length; $v_4++)
					$addHandler($v_3[$v_4], "click", this.$$d_$6a_4)
			}
		} else {
			this.$1Q_4 = XUI.Html.DomUtils.GetFirstChild(this.get_element());
			this.$1W_4 = this.$1Q_4.getAttribute("label")
		}
		this.set_displayState(this.get_displayState())
	},
	dispose : function() {
		this.$1Q_4 = null;
		this.$s_4 = null;
		this.$2_4 = null;
		Mscrm.FormUIElement.prototype.dispose.call(this)
	},
	setFocus : function() {
		var $v_0 = $find("crmForm");
		$v_0 && $v_0.GetTab(this.get_element(), true)
	},
	setVisible : function(isVisible) {
		Mscrm.FormUIElement.prototype.setVisible.call(this, isVisible);
		var $v_0 = Mscrm.FormUITab.get_$4T();
		$v_0
				&& $v_0.setItemVisibility(String
						.format("{0}Tab", this.get_id()), isVisible)
	},
	getWrapperInternal : function() {
		return new Mscrm.TabWrapper(this)
	},
	$6a_4 : function($p0) {
		this
				.set_displayState(this.get_displayState() === "collapsed" ? "expanded"
						: "collapsed");
		Mscrm.FormUtility.refreshWindowInIE7();
		$p0.preventDefault()
	},
	$6i_4 : function() {
		var $v_0 = this.get_events().getHandler("TabStateChange");
		if ($v_0) {
			var $v_1 = new Mscrm.TabStateChangeEventArgs(this
					.get_displayState());
			$v_0(this.getWrapper(), $v_1)
		}
	}
};
Mscrm.TabStateChangeEventArgs = function($p0) {
	Mscrm.TabStateChangeEventArgs.initializeBase(this);
	this.$1q_1 = $p0
};
Mscrm.TabStateChangeEventArgs.prototype = {
	$1q_1 : null,
	get_displayState : function() {
		return this.$1q_1
	}
};
Mscrm.AttributeWrapper = function($p0) {
	this._attribute = $p0;
	this.$3v_0 = new Mscrm.FormDataAttributePrivilege($p0.$1H_1);
	this.controls = this._attribute.$K_1.$1j_0()
};
Mscrm.AttributeWrapper.prototype = {
	controls : null,
	_attribute : null,
	$3v_0 : null,
	addOnChange : function(handler, system) {
		this._attribute.addOnChange(handler, !!system)
	},
	fireOnChange : function() {
		this._attribute.fireOnChange()
	},
	getAttributeType : function() {
		return this._attribute.$H_1
	},
	getFormat : function() {
		return this._attribute.$g_1
	},
	getIsDirty : function() {
		return this._attribute.get_isDirty()
	},
	getName : function() {
		return this._attribute.$7_1
	},
	getParent : function() {
		return this._attribute.$x_1.$29_1()
	},
	getRequiredLevel : function() {
		return this._attribute.get_requiredLevelValue()
	},
	getSubmitMode : function() {
		return this._attribute.get_submitModeValue()
	},
	getUserPrivilege : function() {
		return this.$3v_0
	},
	getValue : function() {
		return this._attribute.get_value()
	},
	removeOnChange : function(handler) {
		this._attribute.removeOnChange(handler)
	},
	setRequiredLevel : function(level) {
		this._attribute.set_requiredLevelValue(level)
	},
	setSubmitMode : function(value) {
		this._attribute.set_submitModeValue(value)
	},
	setValue : function(value) {
		this._attribute.set_value(value)
	}
};
Mscrm.BooleanAttributeWrapper = function($p0) {
	Mscrm.BooleanAttributeWrapper.initializeBase(this, [ $p0 ])
};
Mscrm.BooleanAttributeWrapper.prototype = {
	getInitialValue : function() {
		return this._attribute.$V_1
	}
};
Mscrm.BooleanOptionSetUIControlWrapper = function($p0) {
	Mscrm.BooleanOptionSetUIControlWrapper.initializeBase(this, [ $p0 ])
};
Mscrm.BooleanOptionSetUIControlWrapper.prototype = {
	getFormat : function() {
		return "dropdown"
	}
};
Mscrm.BooleanUIControlWrapper = function($p0) {
	Mscrm.BooleanUIControlWrapper.initializeBase(this, [ $p0 ])
};
Mscrm.BooleanUIControlWrapper.prototype = {
	getFormat : function() {
		return Sys.UI.DomElement.containsCssClass(this._control
				.get_innerControl().get_element(), "ms-crm-CheckBox") ? "checkbox"
				: "radiobutton"
	}
};
Mscrm.DataUIControlWrapper = function($p0) {
	Mscrm.DataUIControlWrapper.initializeBase(this, [ $p0 ])
};
Mscrm.DataUIControlWrapper.prototype = {
	getAttribute : function() {
		var $v_0 = this._control.get_innerControl();
		if (Mscrm.IFormDataControl.isInstanceOfType($v_0))
			return $v_0.get_attribute().getWrapper();
		return null
	}
};
Mscrm.EntityWrapper = function($p0) {
	this.$T_0 = $p0;
	this.attributes = $p0.$d_1.$1j_0()
};
Mscrm.EntityWrapper.prototype = {
	attributes : null,
	$T_0 : null,
	addOnSave : function(handler, system) {
		this.$T_0.addOnSave(handler, !!system)
	},
	getIsDirty : function() {
		return this.$T_0.get_isDirty()
	},
	getDataXml : function() {
		var $v_0 = this.$T_0.get_isNew() ? 0 : 1;
		return this.$T_0.serialize($v_0)
	},
	getId : function() {
		return this.$T_0.get_recordId()
	},
	getClientId : function() {
		return this.$T_0.get_id()
	},
	getEntityName : function() {
		return this.$T_0.$22_1
	},
	removeOnSave : function(handler) {
		this.$T_0.removeOnSave(handler)
	},
	save : function(action) {
		this.$T_0.save(action)
	},
	$4x_0 : function() {
		this.$T_0.dispose();
		this.$T_0 = null
	}
};
Mscrm.FormSelectorWrapper = function($p0) {
	this.$3g_0 = $p0;
	this.items = $p0.$h_1.$1j_0()
};
Mscrm.FormSelectorWrapper.prototype = {
	items : null,
	$3g_0 : null,
	getCurrentItem : function() {
		return this.$3g_0.get_currentForm()
	}
};
Mscrm.FormUIElementWrapper = function(control) {
	this._control = control
};
Mscrm.FormUIElementWrapper.prototype = {
	_control : null,
	getLabel : function() {
		return this._control.get_label()
	},
	getName : function() {
		return this._control.$2P_3
	},
	getParent : function() {
		return this._control.get_parent().getWrapper()
	},
	getVisible : function() {
		return this._control.getVisible()
	},
	setLabel : function(labelText) {
		this._control.set_label(labelText)
	},
	setVisible : function(isVisible) {
		this._control.setVisible(isVisible)
	}
};
Mscrm.IFrameUIControlWrapper = function($p0) {
	Mscrm.IFrameUIControlWrapper.initializeBase(this, [ $p0 ]);
	this.$6_2 = $p0.get_innerControl()
};
Mscrm.IFrameUIControlWrapper.prototype = {
	$6_2 : null,
	add_readyStateComplete : function(value) {
		this.$6_2.add_readyStateComplete(value)
	},
	remove_readyStateComplete : function(value) {
		this.$6_2.remove_readyStateComplete(value)
	},
	getObject : function() {
		return this.$6_2.get_element()
	},
	getSrc : function() {
		return this.$6_2.getSrc()
	},
	setSrc : function(src) {
		this.$6_2.setSrc(src)
	},
	getInitialUrl : function() {
		return this.$6_2.getUrl()
	}
};
Mscrm.LookupUIControlWrapper = function($p0) {
	Mscrm.LookupUIControlWrapper.initializeBase(this, [ $p0 ]);
	this.$6_3 = $p0.get_innerControl()
};
Mscrm.LookupUIControlWrapper.prototype = {
	$6_3 : null,
	addCustomView : function(viewGuid, entityName, viewDisplayName, fetchXml,
			layoutXml, isDefault) {
		this.$6_3.addCustomView(viewGuid, entityName, viewDisplayName,
				fetchXml, layoutXml, isDefault)
	},
	getDefaultView : function() {
		return this.$6_3.getDefaultView()
	},
	setDefaultView : function(viewGuid) {
		this.$6_3.setDefaultView(viewGuid)
	}
};
Mscrm.OptionSetAttributeWrapper = function($p0) {
	Mscrm.OptionSetAttributeWrapper.initializeBase(this, [ $p0 ])
};
Mscrm.OptionSetAttributeWrapper.prototype = {
	getInitialValue : function() {
		return this._attribute.$V_1
	},
	getOption : function(value) {
		return this._attribute.getOption(value)
	},
	getOptions : function() {
		return this._attribute.get_options()
	},
	getSelectedOption : function() {
		return this._attribute.get_selectedOption()
	},
	getText : function() {
		return this._attribute.get_formattedValue()
	}
};
Mscrm.OptionSetUIControlWrapper = function($p0) {
	Mscrm.OptionSetUIControlWrapper.initializeBase(this, [ $p0 ]);
	this.$6_3 = $p0.get_innerControl()
};
Mscrm.OptionSetUIControlWrapper.prototype = {
	$6_3 : null,
	addOption : function(option, placement) {
		this.$6_3.addOption(option, placement)
	},
	removeOption : function(value) {
		this.$6_3.removeOption(value)
	},
	clearOptions : function() {
		this.$6_3.clearOptions()
	}
};
Mscrm.NavigationBarWrapper = function($p0) {
	this.items = $p0.$h_1.$1j_0()
};
Mscrm.NavigationBarWrapper.prototype = {
	items : null
};
Mscrm.NumberAttributeWrapper = function($p0) {
	Mscrm.NumberAttributeWrapper.initializeBase(this, [ $p0 ])
};
Mscrm.NumberAttributeWrapper.prototype = {
	getMax : function() {
		return this._attribute.$v_2
	},
	getMin : function() {
		return this._attribute.$w_2
	},
	getPrecision : function() {
		return this._attribute.$a_2
	}
};
Mscrm.SectionWrapper = function($p0) {
	Mscrm.SectionWrapper.initializeBase(this, [ $p0 ]);
	this.controls = $p0.$K_4.$1j_0()
};
Mscrm.SectionWrapper.prototype = {
	controls : null
};
Mscrm.SubGridUIControlWrapper = function($p0) {
	Mscrm.SubGridUIControlWrapper.initializeBase(this, [ $p0 ])
};
Mscrm.SubGridUIControlWrapper.prototype = {
	refresh : function() {
		this._control.get_innerControl().Refresh()
	}
};
Mscrm.TabWrapper = function($p0) {
	Mscrm.TabWrapper.initializeBase(this, [ $p0 ]);
	this.sections = $p0.$38_4.$1j_0()
};
Mscrm.TabWrapper.prototype = {
	sections : null,
	add_tabStateChange : function(value) {
		this._control.add_tabStateChange(value)
	},
	remove_tabStateChange : function(value) {
		this._control.remove_tabStateChange(value)
	},
	getDisplayState : function() {
		return this._control.get_displayState()
	},
	getParent : function() {
		return this._control.get_parent()
	},
	setDisplayState : function(state) {
		this._control.set_displayState(state)
	},
	setFocus : function() {
		this._control.setFocus()
	}
};
Mscrm.TextAttributeWrapper = function($p0) {
	Mscrm.TextAttributeWrapper.initializeBase(this, [ $p0 ])
};
Mscrm.TextAttributeWrapper.prototype = {
	getMaxLength : function() {
		return this._attribute.$i_2
	}
};
Mscrm.UIControlWrapper = function($p0) {
	Mscrm.UIControlWrapper.initializeBase(this, [ $p0 ])
};
Mscrm.UIControlWrapper.prototype = {
	setFocus : function() {
		this._control.setFocus()
	},
	getDisabled : function() {
		var $v_0 = this._control.get_innerControl();
		if (!$v_0)
			return true;
		else
			return $v_0.get_disabled()
	},
	setDisabled : function(isDisabled) {
		var $v_0 = this._control.get_innerControl();
		!IsNull($v_0) && $v_0.set_disabled(isDisabled)
	},
	getControlType : function() {
		return Xrm.ControlType.$5I(this._control.$1R_4)
	}
};
Mscrm.WebResourceDataUIControlWrapper = function($p0) {
	Mscrm.WebResourceDataUIControlWrapper.initializeBase(this, [ $p0 ])
};
Mscrm.WebResourceDataUIControlWrapper.prototype = {
	getData : function() {
		return this._control.get_innerControl().getData()
	},
	setData : function(data) {
		this._control.get_innerControl().setData(data)
	}
};
Mscrm.WebResourceObjectUIControlWrapper = function($p0) {
	Mscrm.WebResourceObjectUIControlWrapper.initializeBase(this, [ $p0 ])
};
Mscrm.WebResourceObjectUIControlWrapper.prototype = {
	getObject : function() {
		return "get_webResourceContainer" in this._control.get_innerControl() ? this._control
				.get_innerControl().get_webResourceContainer()
				: this._control.get_innerControl().get_element()
	}
};
Mscrm.WebResourceUIControlWrapper = function($p0) {
	Mscrm.WebResourceUIControlWrapper.initializeBase(this, [ $p0 ])
};
Mscrm.WebResourceUIControlWrapper.prototype = {
	getSrc : function() {
		return this._control.get_innerControl().getSrc()
	},
	setSrc : function(src) {
		this._control.get_innerControl().setSrc(src)
	}
};
Mscrm.DataSlug = function(element) {
	this.$$d_$5c_3 = Function.createDelegate(this, this.$5c_3);
	this.$$d_$5v_3 = Function.createDelegate(this, this.$5v_3);
	this.$$d_$5d_3 = Function.createDelegate(this, this.$5d_3);
	this.$$d_$5b_3 = Function.createDelegate(this, this.$5b_3);
	this.$$d_$5k_3 = Function.createDelegate(this, this.$5k_3);
	this.$$d_$5l_3 = Function.createDelegate(this, this.$5l_3);
	this.$o_3 = -1;
	this.$p_3 = -1;
	Mscrm.DataSlug.initializeBase(this, [ element ])
};
Mscrm.DataSlug.prototype = {
	$4_3 : null,
	$1_3 : null,
	$c_3 : true,
	$O_3 : false,
	$1n_3 : null,
	$Z_3 : null,
	$31_3 : false,
	initialize : function() {
		Mscrm.CrmUIControl.prototype.initialize.call(this);
		var $v_0 = this.get_element();
		if (!this.$31_3) {
			$addHandler($v_0, "keyup", this.$$d_$5l_3);
			$addHandler($v_0, "keydown", this.$$d_$5k_3)
		}
		$addHandler($v_0, "click", this.$$d_$5b_3);
		$addHandler($v_0, "focus", this.$$d_$5d_3)
	},
	dispose : function() {
		$clearHandlers(this.get_element());
		this.$1_3 = null;
		this.$Z_3 = null;
		Mscrm.CrmUIControl.prototype.dispose.call(this)
	},
	add_dataSlugDelete : function(value) {
		this.get_events().addHandler("OnDeleteDataSlugEvent", value)
	},
	remove_dataSlugDelete : function(value) {
		this.get_events().removeHandler("OnDeleteDataSlugEvent", value)
	},
	add_dataSlugChange : function(value) {
		this.get_events().addHandler("OnChangeDataSlugEvent", value)
	},
	remove_dataSlugChange : function(value) {
		this.get_events().removeHandler("OnChangeDataSlugEvent", value)
	},
	add_dataSlugFocus : function(value) {
		this.get_events().addHandler("OnFocusDataSlugEvent", value)
	},
	remove_dataSlugFocus : function(value) {
		this.get_events().removeHandler("OnFocusDataSlugEvent", value)
	},
	get_text : function() {
		return XUI.Html.GetText(this.$1_3)
	},
	set_text : function(value) {
		XUI.Html.SetText(this.$1_3, IsNull(value) ? "" : value);
		return value
	},
	get_value : function() {
		return this.$4_3
	},
	set_value : function(value) {
		this.$4_3 = value;
		return value
	},
	get_isExternallySetKeyHandlers : function() {
		return this.$31_3
	},
	set_isExternallySetKeyHandlers : function(value) {
		this.$31_3 = value;
		return value
	},
	GetXml : function() {
		return null
	},
	ParseXml : function() {
		return true
	},
	RaiseOnChange : function() {
		this.$1K_3("OnChangeDataSlugEvent")
	},
	CreateInnerSlug : function(value, text, isMultipleSlug, isReadOnly,
			isDisabled, isInsertHyperlink) {
		this.$O_3 = isDisabled;
		isInsertHyperlink = !IsNull(isInsertHyperlink) ? isInsertHyperlink
				: false;
		if (!isMultipleSlug && !IsNull(this.$1_3)
				&& this.$4J_3(this.$1_3, this.get_element())) {
			var $v_6 = this.get_element().removeChild(this.$1_3);
			try {
				this.get_element().focus()
			} catch ($$e_7) {
			}
			$v_6 = null
		}
		var $v_0 = 0, $v_1 = this.get_element().parentNode.parentNode, $v_2 = XUI.Html.DomUtils
				.GetFirstChild($v_1), $v_3 = Mscrm.FormUtility
				.getSlugBehavior($v_2);
		if (IsNull($v_3)) {
			$v_2 = XUI.Html.DomUtils.GetChildElementAt($v_1, 1);
			if (!IsNull($v_2)) {
				$v_3 = Mscrm.FormUtility.getSlugBehavior($v_2);
				if (!IsNull($v_3))
					$v_0 = $v_3.CalculateDataSlugTabIndex()
			}
		} else
			$v_0 = $v_3.CalculateDataSlugTabIndex();
		this.$1_3 = window.document.createElement("SPAN");
		this.$1_3.className = "ms-crm-DataSlug";
		this.$1_3.tabIndex = $v_0;
		var $v_4 = false, $v_5 = false;
		if (this.$o_3 >= 0 && this.$p_3 >= 0 && isMultipleSlug
				&& !isInsertHyperlink) {
			if (!IsNull(this.$Z_3) && this.$4J_3(this.$Z_3, this.get_element())) {
				if (isNullOrEmptyString(XUI.Html.GetText(this.$Z_3))) {
					this.$Z_3.parentNode.removeChild(this.$Z_3);
					this.$Z_3 = null
				} else {
					this.$Z_3.setAttribute("value", value);
					XUI.Html.SetText(this.$Z_3, text)
				}
				$v_4 = true;
				$v_5 = true
			}
			if (!$v_4) {
				var $v_7 = null, $$t_J = this;
				XUI.Html.DomUtils.ForEachChild(this.get_element(), function(
						$p1_0) {
					var $v_8 = $p1_0.nodeName;
					if (IsNull($v_8) || $v_8.toUpperCase() === "#TEXT")
						return false;
					var $v_9 = Sys.UI.DomElement.getBounds($p1_0);
					if ($$t_J.$o_3 >= $v_9.x && $$t_J.$p_3 >= $v_9.y
							&& $$t_J.$o_3 < $v_9.x + $v_9.width
							&& $$t_J.$p_3 < $v_9.y + $v_9.height) {
						$v_7 = $p1_0;
						return true
					}
					return false
				});
				if (!IsNull($v_7)) {
					this.get_element().insertBefore(this.$1_3, $v_7);
					$v_4 = true
				}
			}
			if (!$v_4)
				$v_4 = this.$6C_3(this.$1_3)
		}
		if (!$v_4)
			if (XUI.Html.DomUtils.HasChildElements(this.get_element())) {
				var $v_A = XUI.Html.DomUtils.GetLastChild(this.get_element());
				if (!IsNull($v_A.tagName) && $v_A.tagName.toUpperCase() === "P")
					$v_A.appendChild(this.$1_3);
				else
					this.get_element().appendChild(this.$1_3)
			} else
				this.get_element().appendChild(this.$1_3);
		if (!isDisabled) {
			this.get_element().setAttribute(
					Mscrm.SlugSupport.get_contentEditableAttribute(), true);
			if (Sys.Browser.agent === Sys.Browser.InternetExplorer
					&& Sys.Browser.version >= 9 && !isMultipleSlug)
				this.$1_3.setAttribute(Mscrm.SlugSupport
						.get_contentEditableAttribute(), "inherit");
			else if (Sys.Browser.agent === Sys.Browser.InternetExplorer
					|| !isMultipleSlug)
				this.$1_3.setAttribute(Mscrm.SlugSupport
						.get_contentEditableAttribute(), true);
			else
				this.$1_3.setAttribute(Mscrm.SlugSupport
						.get_contentEditableAttribute(), false);
			$addHandler(this.get_element(), "selectstart", this.$$d_$5v_3);
			$addHandler(this.get_element(), "controlselect", this.$$d_$5c_3)
		}
		this.$1_3.setAttribute("value", value);
		this.$1_3.style.display = Mscrm.Utilities.isFirefox() ? "inline-block"
				: "inline";
		XUI.Html.SetText(this.$1_3, IsNull(text) ? "" : text);
		this.$1_3.title = XUI.Html.GetText(this.$1_3);
		this.get_element().style.display = "block";
		if (Mscrm.Utilities.get_isLeftToRight())
			this.get_element().style.paddingLeft = "2px";
		else
			this.get_element().style.paddingRight = "2px";
		this.get_element().style.overflowX = "hidden";
		this.get_element().style.minHeight = "15px";
		this.get_element().title = XUI.Html.GetText(this.get_element());
		if (!$v_5 && !isInsertHyperlink
				&& Sys.Browser.agent === Sys.Browser.InternetExplorer
				&& Sys.Browser.version < 9) {
			this.$1_3.parentNode.insertBefore(window.document
					.createTextNode(" "), this.$1_3);
			this.$1_3.parentNode.insertBefore(window.document
					.createTextNode(" "), XUI.Html.DomUtils
					.GetNextSibling(this.$1_3))
		}
		this.$c_3 = isReadOnly
	},
	$49_3 : function($p0) {
		var $v_0 = null;
		if (Mscrm.Utilities.get_ieBrowserVersion() > 0
				&& Mscrm.Utilities.get_ieBrowserVersion() < 9)
			if (document.selection.type.toUpperCase() != "CONTROL")
				$v_0 = document.selection.createRange().parentElement();
			else
				$v_0 = document.selection.createRange().commonParentElement();
		else if (!IsNull(window.getSelection()))
			try {
				$v_0 = window.getSelection().getRangeAt(0).commonAncestorContainer;
				if ($v_0.parentNode.className !== "ms-crm-DataSlug"
						&& !IsNull($p0))
					$v_0 = this.$5N_3($v_0, $p0);
				else if ($v_0.nodeType !== 1)
					$v_0 = $v_0.parentNode
			} catch ($$e_2) {
				$v_0 = null
			}
		return $v_0
	},
	$5N_3 : function($p0, $p1) {
		var $v_0 = $p0.previousSibling, $v_1 = $p0.nextSibling, $v_2 = window
				.getSelection().getRangeAt(0).startOffset, $v_3 = window
				.getSelection().getRangeAt(0).commonAncestorContainer.length;
		switch (Mscrm.Utilities.getDomEventKeyCode($p1)) {
		case 46:
		case 127:
			if (!IsNull($v_1))
				if ($v_1.nodeType === 3 && !XUI.Html.GetText($v_1).length) {
					$v_1.parentNode.removeChild($v_1);
					$v_1 = $p0.nextSibling
				}
			if (!IsNull($v_1) && !IsNull($v_1.className))
				if ($v_2 === $v_3 && $v_1.className === "ms-crm-DataSlug")
					return $v_1;
			break;
		case 8:
			if (!IsNull($v_0))
				if ($v_0.nodeType === 3 && !XUI.Html.GetText($v_0).length) {
					$v_0.parentNode.removeChild($v_0);
					$v_0 = $p0.previousSibling
				}
			if (!IsNull($v_0) && !IsNull($v_0.className))
				if (!$v_2 && $v_0.className === "ms-crm-DataSlug")
					return $v_0;
			break;
		default:
			$p0 = $p0.parentNode;
			break
		}
		return $p0
	},
	$5l_3 : function($p0) {
		if ($p0.keyCode === 127 || $p0.keyCode === 8)
			!this.$3z_3(this.get_element())
					&& this.$1K_3("OnDeleteDataSlugEvent");
		else
			this.$4j_3()
	},
	$5k_3 : function($p0) {
		if (this.$O_3) {
			$p0.stopPropagation();
			$p0.preventDefault();
			return
		}
		var $v_0 = this.$49_3($p0);
		if (IsNull($v_0))
			$v_0 = $p0.target;
		var $v_1 = false;
		switch (Mscrm.Utilities.getDomEventKeyCode($p0)) {
		case 46:
		case 127:
		case 8:
			if ($v_0.className === "ms-crm-DataSlug") {
				var $v_2 = $v_0;
				$v_0 = $v_2.parentNode;
				$v_2.setAttribute(Mscrm.SlugSupport
						.get_contentEditableAttribute(), "true");
				$v_0.removeChild($v_2);
				!this.$3z_3(this.get_element())
						&& this.$1K_3("OnDeleteDataSlugEvent");
				$v_1 = true
			}
			break;
		case 9:
		case 38:
		case 40:
			return;
		case 37:
			this.$3O_3($v_0, true);
			this.$2k_3($v_0);
			return;
		case 39:
			this.$3O_3($v_0, false);
			this.$2k_3($v_0);
			return;
		default:
			this.$3O_3($v_0, false);
			break
		}
		if ($v_0.className === "ms-crm-DataSlug"
				&& Sys.Browser.agent === Sys.Browser.InternetExplorer
				&& Sys.Browser.version < 9 || this.$c_3 && !$v_1 || !this.$c_3
				&& $v_1 || Sys.Browser.agent === Sys.Browser.InternetExplorer
				&& Sys.Browser.version >= 9 && $v_1
				&& $v_0.className === "ms-crm-DataSlugBodySingleSlug") {
			$p0.stopPropagation();
			$p0.preventDefault()
		}
	},
	$5b_3 : function($p0) {
		$p0.target.className === "ms-crm-DataSlug" && $p0.target.focus();
		this.$4j_3();
		this.$2k_3($p0.target)
	},
	$5d_3 : function($p0) {
		this.$1K_3("OnFocusDataSlugEvent")
	},
	$5v_3 : function($p0) {
		var $v_0 = $p0.target;
		this.$2k_3($v_0);
		$p0.stopPropagation()
	},
	$5c_3 : function($p0) {
		Mscrm.Utilities.click(this.get_element())
	},
	$4j_3 : function() {
		var $v_0 = null, $v_1 = -1;
		if (Sys.Browser.agent === Sys.Browser.InternetExplorer
				&& Sys.Browser.version < 9) {
			this.$1n_3 = window.document.selection.createRange();
			$v_0 = this.$1n_3
		} else {
			var $v_2 = window.getSelection();
			$v_1 = $v_2.anchorOffset;
			if ($v_2.rangeCount > 0) {
				this.$1n_3 = $v_2.getRangeAt(0);
				$v_0 = $v_2.anchorNode
			}
		}
		if (!IsNull($v_0)) {
			this.$o_3 = $v_0.offsetLeft;
			this.$p_3 = $v_0.offsetTop
		}
		if (IsNull(this.$o_3))
			this.$o_3 = $v_1;
		if (IsNull(this.$p_3))
			this.$p_3 = 0
	},
	$6C_3 : function($p0) {
		var $v_0 = this.$49_3(null);
		if (!IsNull($v_0) && $v_0.className === "ms-crm-DataSlug") {
			$v_0.parentNode.replaceChild($p0, $v_0);
			return true
		}
		var $v_1 = null, $v_2 = "df"
				+ Mscrm.DateTimeUtility.localDateTimeNow().getTime();
		if (this.$o_3 >= 0 && this.$p_3 >= 0 && !IsNull(this.$1n_3))
			if (Sys.Browser.agent === Sys.Browser.InternetExplorer
					&& Sys.Browser.version < 9) {
				this.$1n_3.select();
				window.document.execCommand("InsertButton", false, $v_2);
				$v_1 = $get($v_2)
			} else {
				var $v_3 = window.getSelection();
				$v_3.removeAllRanges();
				$v_3.addRange(this.$1n_3);
				var $v_4 = $v_3.getRangeAt(0);
				$v_1 = window.document.createElement("button");
				$v_1.id = $v_2;
				$v_4.insertNode($v_1);
				$v_4.collapse(true)
			}
		if (IsNull($v_1))
			return false;
		$v_1.parentNode.replaceChild($p0, $v_1);
		return true
	},
	$3z_3 : function($p0) {
		var $v_0 = $p0.getElementsByTagName("SPAN");
		return $v_0.length > 0
	},
	$4J_3 : function($p0, $p1) {
		return XUI.Html.DomUtils.Contains($p1, $p0)
	},
	$1K_3 : function($p0) {
		var $v_0 = this.get_events().getHandler($p0);
		!IsNull($v_0) && $v_0(this.get_element(), Sys.EventArgs.Empty)
	},
	$7E_3 : function($p0, $p1) {
		var $v_0 = null;
		if (Mscrm.Utilities.get_ieBrowserVersion() > 0
				&& Mscrm.Utilities.get_ieBrowserVersion() < 9)
			$v_0 = window.document.selection.createRange();
		else if (!IsNull(window.getSelection()))
			$v_0 = window.getSelection();
		if (!IsNull($v_0) && !IsNull($v_0.collapse))
			if (!IsNull($p0) && $p0.nodeType === 3) {
				!IsNull($p0.parentNode) && $p0.parentNode.focus();
				$v_0.collapse($p0, $p1 ? $p0.nodeValue.length : 0)
			}
	},
	$3O_3 : function($p0, $p1) {
		if (this.$c_3)
			return;
		if (!IsNull($p0) && $p0.className === "ms-crm-DataSlug") {
			var $v_0 = $p0.previousSibling, $v_1 = $p0.nextSibling, $v_2 = null;
			if ($p1) {
				if (IsNull($v_0) || $v_0.nodeType !== 3) {
					$v_2 = window.document.createTextNode(" ");
					$p0.parentNode.insertBefore($v_2, $p0)
				} else if ($v_0.nodeType === 3)
					$v_2 = $v_0
			} else if (IsNull($v_1)) {
				$v_2 = window.document.createTextNode(" ");
				$p0.parentNode.appendChild($v_2)
			} else if ($v_1.nodeType !== 3) {
				$v_2 = window.document.createTextNode(" ");
				$p0.parentNode.insertBefore($v_2, $v_1)
			} else
				$v_2 = $v_1;
			this.$7E_3($v_2, $p1)
		}
	},
	$2k_3 : function($p0) {
		if (!IsNull($p0) && $p0.className === "ms-crm-DataSlug" && !this.$O_3)
			this.$Z_3 = $p0;
		else
			this.$Z_3 = null
	}
};
Mscrm.EmailBodyControl = function(element) {
	this.$$d_$6U_5 = Function.createDelegate(this, this.$6U_5);
	Mscrm.EmailBodyControl.initializeBase(this, [ element ])
};
Mscrm.EmailBodyControl.prototype = {
	$32_5 : false,
	initialize : function() {
		Mscrm.FormDataControl.prototype.initialize.call(this);
		var $v_0 = this.get_$5_4();
		$v_0.add_contentReady(this.$$d_$6U_5)
	},
	get_isIFrameLoaded : function() {
		return this.$32_5
	},
	$6U_5 : function($p0, $p1) {
		this.$1P_4.$2C_1(this.get_value(), 1, this);
		this.$7c_5();
		this.$32_5 = true
	},
	$7c_5 : function() {
		var $v_0 = $find("PrimaryEntity");
		if (!IsNull($v_0) && !IsNull(window.initialFormXml))
			window.initialFormXml = $v_0.serialize(1)
	}
};
Mscrm.FormDataControl = function(element) {
	this.$$d_handleDataValueChange = Function.createDelegate(this,
			this.handleDataValueChange);
	this.$$d_$6c_4 = Function.createDelegate(this, this.$6c_4);
	this.$$d_onUIValueChangedByAjax = Function.createDelegate(this,
			this.onUIValueChangedByAjax);
	Mscrm.FormDataControl.initializeBase(this, [ element ])
};
Mscrm.FormDataControl.prototype = {
	$1P_4 : null,
	$3A_4 : false,
	$3C_4 : false,
	$2v_4 : null,
	get_attribute : function() {
		return this.$1P_4
	},
	set_attribute : function(value) {
		this.$1P_4 = value;
		return value
	},
	get_disabled : function() {
		return this.$3C_4 ? this.get_$5_4().get_disabled()
				: Mscrm.UIControl.prototype.get_disabled.call(this)
	},
	set_disabled : function(value) {
		if (this.$3C_4)
			this.get_$5_4().set_disabled(value);
		else
			Mscrm.UIControl.prototype.set_disabled.call(this, value);
		return value
	},
	get_value : function() {
		return this.get_$5_4().get_dataValue()
	},
	set_value : function(value) {
		this.$3A_4 = true;
		try {
			this.get_$5_4().set_dataValue(value)
		} finally {
			this.$3A_4 = false
		}
		return value
	},
	get_$2l_4 : function() {
		var $v_0 = "dirty";
		if (this.get_$5_4().get_forceSubmit())
			$v_0 = "always";
		else if (this.get_$5_4().get_doNotSubmit())
			$v_0 = "never";
		return $v_0
	},
	set_$2l_4 : function($p0) {
		this.get_$5_4().set_forceSubmit($p0 === "always");
		this.get_$5_4().set_doNotSubmit($p0 === "never");
		return $p0
	},
	initialize : function() {
		Mscrm.CrmUIControl.prototype.initialize.call(this);
		this.initializeBehaviors();
		if (IsNull(this.$1P_4))
			;
		this.$1P_4.$4V_1(this, this.get_element())
	},
	initializeBehaviors : function() {
		this.$3C_4 = true;
		var $v_0 = "add_change" in this.get_$5_4();
		if ($v_0)
			this.get_$5_4().add_change(this.$$d_onUIValueChangedByAjax);
		else
			$addHandler(this.get_element(), "change", this.$$d_$6c_4);
		!IsNull(this.get_$5_4())
				&& this.get_$5_4().add_dataValueChanged(
						this.$$d_handleDataValueChange)
	},
	handleDataValueChange : function(sender, args) {
		this.setAttributeValue(3)
	},
	$6c_4 : function($p0) {
		!this.setAttributeValue(0) && $p0.preventDefault()
	},
	onUIValueChangedByAjax : function(sender, args) {
		if (!this.setAttributeValue(0))
			window.event.returnValue = false
	},
	setAttributeValue : function(source) {
		if (!this.$3A_4)
			return this.$1P_4.$2C_1(this.get_value(), source, this);
		return true
	},
	setAttributeValueFromControl : function() {
		return this.setAttributeValue(0)
	},
	get_$5_4 : function() {
		if (IsNull(this.$2v_4))
			this.$2v_4 = Mscrm.FormControlInputBehavior.GetElementBehavior(this
					.get_element());
		return this.$2v_4
	},
	dispose : function() {
		if (this.get_isDisposed())
			return;
		this.disposeHtmlControl();
		Mscrm.UIControl.prototype.dispose.call(this)
	},
	disposeHtmlControl : function() {
		var $v_0 = this.get_$5_4(), $v_1 = "remove_change" in $v_0;
		if ($v_1)
			$v_0.remove_change(this.$$d_onUIValueChangedByAjax);
		else
			try {
				$removeHandler(this.get_element(), "change", this.$$d_$6c_4)
			} catch ($v_2) {
			}
		!IsNull($v_0)
				&& $v_0.remove_dataValueChanged(this.$$d_handleDataValueChange)
	}
};
Mscrm.HiddenFormDataControl = function(element) {
	Mscrm.HiddenFormDataControl.initializeBase(this, [ element ])
};
Mscrm.HiddenFormDataControl.prototype = {
	initialize : function() {
		Mscrm.FormDataControl.prototype.initialize.call(this);
		Mscrm.FormDataControl.prototype.get_$5_4.call(this)
				.add_dataValueChanged(this.$$d_handleDataValueChange)
	},
	dispose : function() {
		Mscrm.FormDataControl.prototype.get_$5_4.call(this)
				.remove_dataValueChanged(this.$$d_handleDataValueChange);
		Mscrm.FormDataControl.prototype.dispose.call(this)
	}
};
Mscrm.NotesControl = function(element) {
	Mscrm.NotesControl.initializeBase(this, [ element ])
};
Mscrm.NotesControl.prototype = {
	get_disabled : function() {
		return Mscrm.UIControl.prototype.get_disabled.call(this)
	},
	set_disabled : function(value) {
		return value
	}
};
Mscrm.SlugSupport = function(element) {
	this.$$d_$6W_3 = Function.createDelegate(this, this.$6W_3);
	this.$$d_$6V_3 = Function.createDelegate(this, this.$6V_3);
	this.$$d_$6Y_3 = Function.createDelegate(this, this.$6Y_3);
	this.$15_3 = [];
	this.$1V_3 = [];
	Mscrm.SlugSupport.initializeBase(this, [ element ])
};
Mscrm.SlugSupport.get_contentEditableAttribute = function() {
	return Sys.Browser.agent === Sys.Browser.InternetExplorer ? "contentEditable"
			: "contenteditable"
};
Mscrm.SlugSupport.prototype = {
	$Y_3 : null,
	$18_3 : false,
	$3i_3 : false,
	$2R_3 : false,
	$O_3 : false,
	$c_3 : true,
	$19_3 : false,
	$2D_3 : "",
	$3_3 : null,
	$L_3 : null,
	$A_3 : null,
	$2S_3 : false,
	$34_3 : true,
	$u_3 : null,
	$t_3 : null,
	$2y_3 : null,
	initialize : function() {
		var $v_0 = Mscrm.FormControlInputBehavior.GetElementBehavior(this
				.get_element());
		!IsNull($v_0) && !IsNull($v_0.set_trimValue)
				&& $v_0.set_trimValue(false);
		this.$t_3 = this.get_element();
		if (Sys.UI.DomElement.containsCssClass(this.get_element(),
				"ms-crm-Input"))
			this.$t_3 = this.$t_3.parentNode;
		Mscrm.CrmUIBehavior.prototype.initialize.call(this)
	},
	dispose : function() {
		this.$3_3 = null;
		this.$t_3 = null;
		this.$L_3 = null;
		this.$A_3 = null;
		Mscrm.CrmUIBehavior.prototype.dispose.call(this)
	},
	add_deleteSlugBody : function(value) {
		this.get_events().addHandler("deleteSlugBodyEvent", value)
	},
	remove_deleteSlugBody : function(value) {
		this.get_events().removeHandler("deleteSlugBodyEvent", value)
	},
	add_changeDataSlug : function(value) {
		this.get_events().addHandler("dataSlugChangeEvent", value)
	},
	remove_changeDataSlug : function(value) {
		this.get_events().removeHandler("dataSlugChangeEvent", value)
	},
	get_isDataSlug : function() {
		if (this.$1N_3())
			return this.get_$1k_3().hasDataSlug();
		return this.$18_3
	},
	set_isDataSlug : function(value) {
		if (value)
			this.$50_3();
		else
			this.DeleteDataSlug();
		return value
	},
	get_isMultiSlug : function() {
		return this.$19_3
	},
	set_isMultiSlug : function(value) {
		this.$19_3 = value;
		if (!IsNull(this.$3_3))
			if (this.$19_3) {
				this.$3_3.className = "ms-crm-DataSlugBody";
				this.$A_3.style.height = this.$2D_3
			} else {
				this.$3_3.className = "ms-crm-DataSlugBodySingleSlug";
				this.$3_3.innerHTML = "";
				this.$A_3.style.height = "auto"
			}
		return value
	},
	get_isTextSlugInTextBox : function() {
		return this.$34_3
	},
	set_isTextSlugInTextBox : function(value) {
		this.$34_3 = value;
		return value
	},
	get_isReadOnly : function() {
		return this.$c_3
	},
	set_isReadOnly : function(value) {
		this.$c_3 = value;
		return value
	},
	get_isDisabled : function() {
		return this.$O_3
	},
	set_isDisabled : function(value) {
		this.$O_3 = value;
		return value
	},
	get_attributeName : function() {
		return this.$Y_3
	},
	set_attributeName : function(value) {
		this.$Y_3 = value;
		return value
	},
	get_isSlugDirty : function() {
		if (this.$1N_3())
			return this.get_$1k_3().get_isDirty();
		return !this.$3i_3
	},
	get_isSlugDeleted : function() {
		return this.$2S_3
	},
	get_slugValue : function() {
		if (this.$1N_3())
			return this.$5Y_3();
		if (IsNull(this.$3_3))
			return "";
		if (isNullOrEmptyString(this.$Y_3))
			this.$Y_3 = this.get_element().id;
		if (!this.$19_3 || this.$3_3.children.length === 1) {
			var $v_5 = XUI.Html.DomUtils.GetFirstChild(this.$3_3);
			if (XUI.Html.GetText($v_5) === XUI.Html.GetText(this.$3_3)) {
				var $v_6 = "<slugbody>" + this.$L_3.getAttribute("value")
						+ $v_5.getAttribute("value") + "</slugbody>", $v_7 = String
						.format("<{0}>{1}</{0}>", IsNull(this.$Y_3) ? "null"
								: this.$Y_3, CrmEncodeDecode.CrmXmlEncode($v_6));
				return $v_7
			}
		}
		var $v_0 = [], $v_1 = 0;
		if (this.$c_3) {
			var $$t_E = this;
			XUI.Html.DomUtils.ForEachChild(this.$3_3, function($p1_0) {
				if (!IsNull($p1_0.attributes)) {
					$v_0[$v_1] = $p1_0.getAttribute("value");
					$v_1++
				}
				return false
			})
		} else {
			var $v_8 = 0, $v_9 = this.$3I_3(this.$3_3), $v_A = this.$4D_3(
					this.$3_3.innerHTML, $v_9, 0, 0);
			while (!IsNull($v_A)) {
				var $v_B = this.$4A_3($v_A), $v_C = $v_B[0];
				if (!IsNull($v_C)) {
					$v_0[$v_1] = $v_C;
					$v_1++
				}
				$v_C = $v_B[1];
				if (!IsNull($v_C)) {
					$v_0[$v_1] = $v_C;
					$v_1++;
					$v_8++
				}
				$v_A = $v_B[2]
			}
		}
		var $v_2 = this.$4B_3($v_0), $v_3 = "<slugbody>"
				+ this.$L_3.getAttribute("value") + $v_2 + "</slugbody>", $v_4 = "<"
				+ this.$Y_3
				+ ">"
				+ CrmEncodeDecode.CrmXmlEncode($v_3)
				+ "</"
				+ this.$Y_3 + ">";
		return $v_4
	},
	get_firstSlugValue : function() {
		if (IsNull(this.$3_3))
			return "";
		else {
			var $v_0 = Mscrm.Utilities.getChildElementsByClassName(this.$3_3,
					"ms-crm-DataSlug", true);
			if ($v_0.length <= 0)
				return "";
			return $v_0[0].getAttribute("value")
		}
	},
	get_masterControl : function() {
		if (IsNull(this.$u_3)) {
			this.$u_3 = Mscrm.FormControlInputBehavior.GetElementBehavior(this
					.get_element());
			if (IsNull(this.$u_3))
				this.$u_3 = $find(this.get_element().id);
			if (Object.getType(this.$u_3).getName() === "Mscrm.EditableSelectControl")
				this.$u_3 = Mscrm.FormControlInputBehavior
						.GetElementBehavior(XUI.Html.DomUtils
								.GetPrevSibling(this.$u_3.get_element()))
		}
		return this.$u_3
	},
	InsertSlugControl : function(value, text, defaultValueSlug,
			isInsertHyperlink) {
		isInsertHyperlink = IsNull(isInsertHyperlink) ? false
				: isInsertHyperlink;
		if (this.$2R_3)
			this.$2y_3.CreateInnerSlug(value, text, this.$19_3, this.$c_3,
					this.$O_3, isInsertHyperlink);
		else {
			this.$15_3.push(value);
			this.$1V_3.push(text)
		}
		this.$2S_3 = false;
		this.$3i_3 = defaultValueSlug
	},
	UpdateOperatorControl : function(value, text, displayText) {
		this.$L_3.setAttribute("value", value);
		XUI.Html.SetText(this.$L_3, displayText + " ");
		(text === "=" || text === "clear") && XUI.Html.SetText(this.$L_3, "")
	},
	UpdateInnerHtml : function(htmlValue) {
		if (this.$2R_3)
			this.$3S_3(htmlValue);
		else {
			this.$15_3.push(null);
			this.$1V_3.push(htmlValue)
		}
	},
	DeleteDataSlug : function() {
		if (this.$1N_3()) {
			this.$18_3 = this.get_$1k_3().hasDataSlug();
			this.$1K_3("deleteSlugBodyEvent");
			this.$3P_3();
			return
		}
		if (this.$18_3) {
			this.$18_3 = false;
			if (!IsNull(this.$3_3)) {
				var $v_0 = this.get_masterControl();
				if (!this.$c_3 && this.$19_3)
					$v_0.set_dataValue(this.$3I_3(this.$3_3));
				else
					$v_0.set_dataValue(null);
				this.$1K_3("deleteSlugBodyEvent");
				this.$A_3.style.display = "none";
				this.$A_3.removeChild(this.$L_3);
				this.$L_3 = null;
				this.$A_3.removeChild(this.$3_3);
				this.$3_3 = null;
				this.$2y_3 = null;
				this.$t_3.parentNode.removeChild(this.$A_3);
				this.$A_3 = null;
				this.$t_3.style.display = "";
				this.get_element().focus();
				this.$3P_3();
				this.$2S_3 = true;
				this.$2R_3 = false
			}
		}
	},
	CurrentOperatorIsClear : function() {
		if (this.$1N_3())
			return this.get_$1k_3().isClearOperator();
		if (!IsNull(this.$L_3)
				&& this.$L_3.getAttribute("value") === '<slugelement type="operator" value="clear"/>')
			return true;
		return false
	},
	CalculateDataSlugTabIndex : function() {
		var $v_0 = 0, $v_1 = this.get_element().getAttribute("tabindex");
		if (!IsNull($v_1)) {
			var $v_3 = $v_1.toString(), $v_4 = Number.parseInvariant($v_3);
			if ($v_4 > $v_0)
				return $v_4
		}
		for ( var $v_2 = this.get_element().getElementsByTagName("*"), $v_5 = 0, $v_6 = $v_2.length; $v_5 < $v_6; $v_5++) {
			var $v_7 = $v_2[$v_5], $v_8 = $v_7.getAttribute("tabindex");
			if (!IsNull($v_8)) {
				var $v_9 = Number.parseInvariant($v_8.toString());
				if ($v_9 > $v_0)
					$v_0 = $v_9
			}
		}
		return $v_0
	},
	get_$1k_3 : function() {
		return this.get_masterControl()
	},
	$3S_3 : function($p0) {
		var $v_0 = window.document.createElement("span");
		XUI.Html.SetText($v_0, $p0);
		var $v_1 = $v_0.innerHTML, $v_2 = new RegExp(
				"\x0d\x0a|\x0a|&#13;&#10;|&#10;", "g");
		$v_1 = $v_1.replace($v_2, "<br>");
		this.$3_3.innerHTML += $v_1
	},
	$50_3 : function() {
		if (this.$1N_3()) {
			this.$18_3 = this.get_$1k_3().hasDataSlug();
			return
		}
		if (!this.$18_3) {
			this.$4s_3();
			this.$t_3.style.display = "none";
			var $v_0 = this.get_masterControl(), $v_1 = $v_0.get_dataValue(), $v_2;
			if ("get_defaultValue" in $v_0)
				$v_2 = $v_0.get_defaultValue();
			else
				$v_2 = null;
			if (this.$6J_3() && !IsNull($v_1)
					&& typeof $v_1 === Mscrm.TypeNames.stringType && this.$34_3) {
				this.$3S_3($v_1);
				this.$3_3.title = $v_1
			} else
				XUI.Html.SetText(this.$3_3, "");
			try {
				if (!IsNull($v_2))
					$v_0.set_dataValue($v_2);
				else
					$v_0.set_dataValue(null)
			} catch ($$e_3) {
				$v_0.set_dataValue(null)
			}
			this.$18_3 = true
		}
	},
	$6J_3 : function() {
		switch (this.get_element().tagName.toLowerCase()) {
		case "body":
		case "textarea":
		case "button":
			return true;
		case "input":
			return IsNull(this.get_element().getAttribute("type"))
					|| this.get_element().getAttribute("type").toString() === "text";
		default:
			return false
		}
	},
	$3P_3 : function() {
		this.$1K_3("dataSlugChangeEvent")
	},
	$4s_3 : function() {
		if (IsNull(this.$3_3)) {
			if (this.$1N_3())
				return;
			this.$A_3 = window.document.createElement("span");
			this.$A_3.setAttribute(Mscrm.SlugSupport
					.get_contentEditableAttribute(), false);
			this.$t_3.parentNode.appendChild(this.$A_3);
			this.$A_3.style.display = "";
			if (!Mscrm.Utilities.isIE())
				this.$A_3.style.whiteSpace = "pre";
			var $v_0 = "", $v_1 = "";
			try {
				$v_1 = this.get_element().style.display;
				this.get_element().style.display = "inline-block";
				this.$2D_3 = (this.get_element().offsetHeight + 2).toString()
						+ "px";
				this.get_element().style.display = $v_1
			} catch ($$e_2) {
				this.$2D_3 = "100%"
			}
			this.$A_3.style.height = this.$2D_3;
			if (this.get_element().className === "ms-crm-CheckBox"
					|| this.get_element().className === "ms-crm-RadioButton")
				$v_0 = "100%";
			else if (this.get_element().className === "ms-crm-Lookup") {
				$v_0 = this.get_element().parentNode.style.width;
				this.$A_3.style.display = "block"
			} else
				try {
					$v_0 = XUI.Html.GetComputedStyle(this.get_element(),
							"width");
					if ($v_0.toUpperCase() === "0PX") {
						$v_1 = this.get_element().style.display;
						this.get_element().style.display = "inline-block";
						$v_0 = (this.get_element().offsetWidth - 2).toString()
								+ "px";
						this.get_element().style.display = $v_1
					}
				} catch ($$e_3) {
					$v_0 = "100%"
				}
			this.$A_3.style.width = $v_0;
			this.$L_3 = window.document.createElement("span");
			this.$L_3.setAttribute("Id", "operatorSpan");
			this.$L_3.setAttribute(Mscrm.SlugSupport
					.get_contentEditableAttribute(), false);
			this.$A_3.appendChild(this.$L_3);
			var $v_2 = null;
			if (this.$O_3) {
				this.$A_3.className = "ms-crm-ReadOnly";
				$v_2 = window.document.createElement("span");
				$v_2.setAttribute("class", "ms-crm-DataSlugBodySingleSlug")
			} else {
				var $v_4 = this.CalculateDataSlugTabIndex();
				$v_2 = window.document.createElement("span");
				$v_2.setAttribute("class", "ms-crm-DataSlugBodySingleSlug");
				$v_2.setAttribute("tabindex", $v_4);
				$v_2.setAttribute(Mscrm.SlugSupport
						.get_contentEditableAttribute(), true)
			}
			this.$A_3.appendChild($v_2);
			$v_2.style.display = "block";
			$v_2.style.height = this.$2D_3;
			this.$3_3 = $v_2;
			var $v_3 = $create(Mscrm.DataSlug, null, null, null, this.$3_3);
			this.$2y_3 = $v_3;
			this.$6X_3($v_3);
			this.$2S_3 = false
		}
	},
	$6X_3 : function($p0) {
		if (!this.$O_3) {
			$p0.add_dataSlugDelete(this.$$d_$6Y_3);
			$p0.add_dataSlugChange(this.$$d_$6V_3);
			$p0.add_dataSlugFocus(this.$$d_$6W_3)
		}
		if (!IsNull(this.$15_3) && !IsNull(this.$1V_3)) {
			this.$1V_3.reverse();
			this.$15_3.reverse();
			while (this.$15_3.length) {
				var $v_0 = this.$15_3.pop(), $v_1 = this.$1V_3.pop();
				if (IsNull($v_0))
					this.$3S_3($v_1);
				else
					$p0.CreateInnerSlug($v_0, $v_1, this.$19_3, this.$c_3,
							this.$O_3, false)
			}
		}
		$p0.RaiseOnChange();
		this.$2R_3 = true
	},
	$6Y_3 : function($p0, $p1) {
		this.DeleteDataSlug()
	},
	$6V_3 : function($p0, $p1) {
		this.$3P_3()
	},
	$6W_3 : function($p0, $p1) {
		try {
			var $v_0 = null;
			if (this.$6I_3())
				$v_0 = this.$5Q_3();
			if (IsNull($v_0))
				$v_0 = this.get_element();
			SetDatatypeAttributeListAtFocus($v_0)
		} catch ($$e_3) {
		}
	},
	$6I_3 : function() {
		return Sys.UI.DomElement.containsCssClass(this.get_element(),
				"ms-crm-Lookup")
	},
	$5Q_3 : function() {
		var $v_0 = this.get_element().getElementsByTagName("IMG");
		if (!IsNull($v_0) && $v_0.length > 0)
			return $v_0[0];
		return null
	},
	$3I_3 : function($p0) {
		var $v_0 = "", $$t_4 = this;
		XUI.Html.DomUtils.ForEachChild($p0, function($p1_0) {
			if (!IsNull($p1_0.nodeName)
					&& $p1_0.nodeName.toUpperCase() === "#TEXT") {
				var $v_1 = $p1_0.nodeValue;
				if (!isNullOrEmptyString($v_1))
					$v_0 += $v_1
			} else if (!IsNull($p1_0.tagName)
					&& ($p1_0.tagName.toUpperCase() === "P" || $p1_0.tagName
							.toUpperCase() === "DIV")) {
				$v_0 += "\r\n";
				if ($p1_0.children.length > 0)
					$v_0 += $$t_4.$3I_3($p1_0);
				else
					$v_0 += XUI.Html.GetText($p1_0)
			} else if (!IsNull($p1_0.tagName)
					&& $p1_0.tagName.toUpperCase() === "BR")
				$v_0 += "\r\n";
			else if (!IsNull(XUI.Html.GetText($p1_0)))
				$v_0 += XUI.Html.GetText($p1_0);
			return false
		});
		return $v_0
	},
	$5Y_3 : function() {
		var $v_0 = 0, $v_1 = this.get_$1k_3().getHTML(), $v_2 = [], $v_3 = 0;
		while (!IsNull($v_1)) {
			var $v_6 = this.$4A_3($v_1), $v_7 = $v_6[0];
			if (!IsNull($v_7)) {
				$v_2[$v_3] = $v_7;
				$v_3++
			}
			$v_7 = $v_6[1];
			if (!IsNull($v_7)) {
				$v_2[$v_3] = $v_7;
				$v_3++;
				$v_0++
			}
			$v_1 = $v_6[2]
		}
		var $v_4 = this.$4B_3($v_2), $v_5 = String
				.format(
						'<slugbody><slugelement type="operator" value="="/>{0}</slugbody>',
						$v_4);
		if (this.$6D_3($v_4))
			$v_5 = String
					.format(
							'<slugbody>{0}<slugelement type="slug">{1}</slugelement></slugbody>',
							'<slugelement type="operator" value="clear"/>',
							'<slug type="dynamic" value="null"/>');
		if (isNullOrEmptyString(this.$Y_3))
			this.$Y_3 = this.get_element().id;
		return String.format("<{0}>{1}</{0}>", this.$Y_3, CrmEncodeDecode
				.CrmXmlEncode($v_5))
	},
	$6D_3 : function($p0) {
		return $p0.indexOf('<slug type="dynamic" value="null"/>') > 0
	},
	$4B_3 : function($p0) {
		for ( var $v_0 = null, $v_1 = 0, $v_2 = $p0.length; $v_1 < $v_2; $v_1++)
			if (IsNull($v_0))
				$v_0 = $p0[$v_1];
			else
				$v_0 += $p0[$v_1];
		return $v_0
	},
	$4D_3 : function($p0, $p1, $p2, $p3) {
		var $v_0 = this.$4F_3($p0, $p2), $v_1 = $p0.toUpperCase().indexOf(
				"</SPAN>", $v_0);
		if ($v_0 < 0 || $v_1 < 0)
			return $p1;
		var $v_2 = CrmEncodeDecode.CrmHtmlDecode($p0.substr($v_0, $v_1 + 7
				- $v_0)), $v_3 = $p0.substr($v_0, $v_1 - $v_0), $v_4 = $v_0
				+ $v_3.lastIndexOf(">") + 1, $v_5 = $v_1 - $v_4, $v_6 = CrmEncodeDecode
				.CrmXmlDecode($p0.substr($v_4, $v_5)), $v_7 = $p1.indexOf(
				CrmEncodeDecode.CrmHtmlDecode($v_6), $p3), $v_8 = $p1.substr(0,
				$v_7)
				+ $v_2 + $p1.substr($v_7 + $v_6.length);
		$p3 = $v_8.indexOf($v_2, $p3) + $v_2.length;
		return this.$4D_3($p0, $v_8, $v_1 + 7, $p3)
	},
	$4A_3 : function($p0) {
		var $v_0 = this.$4F_3($p0, 0), $v_1 = $p0.toUpperCase().indexOf(
				"</SPAN>", $v_0), $v_2 = null, $v_3 = null;
		if ($v_0 < 0 || $v_1 < 0)
			$v_3 = $p0;
		else if ($v_0 > 0)
			$v_3 = $p0.substr(0, $v_0);
		var $v_4 = null;
		if ($v_0 >= 0 && $v_1 >= 0 && $v_1 + 7 !== $p0.length)
			$v_4 = $p0.substr($v_1 + 7, $p0.length - $v_1 + 7);
		var $v_5 = null;
		if ($v_0 !== -1 && $v_1 !== -1) {
			var $v_7 = $p0.indexOf("<slugelement", $v_0), $v_8 = $p0.indexOf(
					"</slugelement>", $v_0), $v_9 = 14, $v_A = false;
			if (!Mscrm.Utilities.isIE() && $v_7 === -1 && $v_8 === -1) {
				$v_7 = $p0.indexOf("&lt;slugelement", $v_0);
				$v_8 = $p0.indexOf("&lt;/slugelement&gt;", $v_0);
				$v_9 = 20;
				$v_A = true
			}
			if (Sys.Browser.agent === Sys.Browser.Firefox
					&& Sys.Browser.version >= 15)
				$v_A = true;
			if ($v_7 > 0 && $v_8 > 0) {
				$v_5 = $p0.substring($v_7, $v_8 + $v_9);
				if ($v_A)
					$v_5 = CrmEncodeDecode.CrmHtmlDecode($v_5);
				var $v_B = this.$53_3($p0.substring($v_8 + $v_9, $v_1)), $v_C = $v_B[0];
				if (!IsNull($v_C))
					$v_3 = IsNull($v_3) ? $v_C : $v_3 + $v_C;
				$v_C = $v_B[1];
				if (!IsNull($v_C))
					$v_4 = IsNull($v_4) ? $v_C : $v_C + $v_4
			}
		}
		if (!IsNull($v_3))
			$v_2 = String.format('<slugelement type="primitive" value="{0}"/>',
					CrmEncodeDecode.CrmXmlEncode($v_3));
		var $v_6 = [];
		$v_6[0] = $v_2;
		$v_6[1] = $v_5;
		$v_6[2] = $v_4;
		return $v_6
	},
	$4F_3 : function($p0, $p1) {
		var $v_0 = $p0.toUpperCase(), $v_1 = IsNull($p1) ? 0 : $p1, $v_2 = $v_0
				.indexOf("<SPAN ", $v_1), $v_3 = this.$5L_3($p0, $v_2);
		if ($v_2 < 0 || $v_3 < 0)
			return -1;
		var $v_4 = $v_2;
		while ($v_4 < $v_3) {
			if ($v_4 < 0)
				break;
			$v_2 = $v_4;
			$v_4 = $v_0.indexOf("<SPAN ", $v_4 + 1)
		}
		var $v_5 = $v_0.indexOf("</SPAN>", $v_2);
		if ($v_2 < 0 || $v_5 < 0)
			return -1;
		return $v_2
	},
	$5L_3 : function($p0, $p1) {
		var $v_0 = $p0.indexOf(" class=ms-crm-DataSlug", $p1);
		if ($v_0 < 0)
			$v_0 = $p0.indexOf(" class='ms-crm-DataSlug'", $p1);
		if ($v_0 < 0)
			$v_0 = $p0.indexOf(' class="ms-crm-DataSlug"', $p1);
		return $v_0
	},
	$53_3 : function($p0) {
		var $v_0 = [], $v_1 = null, $v_2 = null;
		if (!IsNull($p0)) {
			var $v_3 = $p0.indexOf(">{"), $v_4 = $p0.indexOf("}</", $v_3);
			if ($v_3 >= 0 && $v_4 >= 0) {
				$v_1 = $p0.substring(0, $v_3 + 1);
				$v_2 = $p0.substring($v_4 + 1, $p0.length)
			}
		}
		$v_0[0] = $v_1;
		$v_0[1] = $v_2;
		return $v_0
	},
	$1N_3 : function() {
		return !IsNull(this.get_element().className)
				&& this.get_element().className.indexOf("ms-crm-Email-Body") >= 0
	},
	$1K_3 : function($p0) {
		var $v_0 = this.get_events().getHandler($p0);
		!IsNull($v_0) && $v_0(this.get_element(), Sys.EventArgs.Empty)
	}
};
Mscrm.Association = function(relationshipName, relationshipRoleOrdinal,
		sourceEntityId, sourceEntityLogicalName) {
	this.$3p_0 = relationshipName;
	this.$3q_0 = relationshipRoleOrdinal;
	this.$3t_0 = sourceEntityId;
	this.$3u_0 = sourceEntityLogicalName
};
Mscrm.Association.prototype = {
	$3p_0 : null,
	$3q_0 : 0,
	$3t_0 : null,
	$3u_0 : null,
	get_relationshipName : function() {
		return this.$3p_0
	},
	get_isReverse : function() {
		return this.$3q_0
	},
	get_sourceEntityId : function() {
		return this.$3t_0
	},
	get_sourceEntityLogicalName : function() {
		return this.$3u_0
	}
};
Mscrm.BooleanAttribute = function() {
	Mscrm.BooleanAttribute.initializeBase(this);
	this.$H_1 = "boolean";
	this.add_validate(Mscrm.BooleanAttribute.$1O)
};
Mscrm.BooleanAttribute.$1O = function($p0, $p1) {
	var $v_0 = $p1.$4_1;
	if (IsNull($v_0))
		return new Mscrm.ValidationResult(true, null);
	var $v_1 = typeof $v_0;
	if ($v_1 === Mscrm.TypeNames.stringType
			|| $v_1 === Mscrm.TypeNames.numberType) {
		var $v_2 = Mscrm.BooleanAttribute.$35[$v_0];
		if (!IsNull($v_2))
			$v_0 = $v_2
	}
	if (typeof $v_0 !== Mscrm.TypeNames.booleanType)
		return new Mscrm.ValidationResult(false,
				LOCID_DEVERROR_BADDATATYPE_BOOL);
	return new Mscrm.ValidationResult(true, null)
};
Mscrm.BooleanAttribute.prototype = {
	$3L_2 : false,
	initializeFromDomElement : function(element) {
		Mscrm.FormDataAttribute.prototype.initializeFromDomElement.call(this,
				element);
		if (Sys.UI.DomElement.containsCssClass(element, "ms-crm-CheckBox"))
			this.$3L_2 = true
	},
	get_isDirty : function() {
		if (IsNull(this.$V_1)
				&& IsNull(Mscrm.FormDataAttribute.prototype.get_value
						.call(this)))
			return false;
		else if (this.$3L_2
				&& IsNull(this.$V_1)
				&& !IsNull(Mscrm.FormDataAttribute.prototype.get_value
						.call(this))
				&& !Mscrm.FormDataAttribute.prototype.get_value.call(this))
			return false;
		else if (this.isAttributeForBulkEdit() && !this.$3L_2)
			if (IsNull(this.getValue()))
				return false;
			else
				return true;
		return Mscrm.FormDataAttribute.prototype.get_isDirty.call(this)
	},
	deserialize : function(attributeNode) {
		return this.preProcessValue(Boolean.parse(XUI.Xml
				.GetText(attributeNode)))
	},
	getWrapperInternal : function() {
		return new Mscrm.BooleanAttributeWrapper(this)
	},
	preProcessValue : function(value) {
		var $v_0 = Mscrm.FormDataAttribute.prototype.preProcessValue.call(this,
				value);
		if (!IsNull($v_0) && typeof $v_0 !== Mscrm.TypeNames.booleanType)
			$v_0 = Mscrm.BooleanAttribute.$35[$v_0];
		return $v_0
	},
	pushValueToControl : function(control, value) {
		var $v_0 = value;
		if (!IsNull($v_0) && Mscrm.OptionSetUIControl.isInstanceOfType(control))
			$v_0 = $v_0 ? 1 : 0;
		Mscrm.FormDataAttribute.prototype.pushValueToControl.call(this,
				control, $v_0)
	}
};
Mscrm.DateTimeAttribute = function() {
	Mscrm.DateTimeAttribute.initializeBase(this);
	this.$H_1 = "datetime"
};
Mscrm.DateTimeAttribute.prototype = {
	isEqual : function(value1, value2) {
		var $v_0 = value1, $v_1 = value2;
		if (IsNull($v_0) && IsNull($v_1))
			return true;
		if (IsNull($v_0) || IsNull($v_1))
			return false;
		return $v_0.getTime() === $v_1.getTime()
	},
	deserialize : function(attributeNode) {
		return this
				.preProcessValue(ParseUtcDate(XUI.Xml.GetText(attributeNode)))
	},
	getValue : function() {
		var $v_0 = Mscrm.FormDataAttribute.prototype.getValue.call(this);
		return !$v_0 ? null : new Date($v_0.getTime())
	},
	initializeFromDomElement : function(element) {
		Mscrm.FormDataAttribute.prototype.initializeFromDomElement.call(this,
				element)
	},
	preProcessValue : function(value) {
		var $v_0 = Mscrm.FormDataAttribute.prototype.preProcessValue.call(this,
				value), $v_1 = null;
		if ($v_0)
			if (Date.isInstanceOfType($v_0) || !isNaN($v_0)
					&& typeof $v_0 === Mscrm.TypeNames.objectType)
				$v_1 = new Date($v_0.getTime());
			else if (typeof $v_0 === Mscrm.TypeNames.numberType)
				$v_1 = new Date($v_0);
		return $v_1
	},
	serializeInternal : function(writer) {
		var $v_0 = CrmEncodeDecode.CrmXmlEncode(this.$7_1), $v_1 = this
				.get_value();
		$v_1 = new Date($v_1.getFullYear(), $v_1.getMonth(), $v_1.getDate(),
				$v_1.getHours(), $v_1.getMinutes());
		writer.append("<");
		writer.append($v_0);
		writer.append(">");
		writer.append(CrmEncodeDecode.CrmXmlEncode($v_1.format("s")));
		writer.append("</");
		writer.append($v_0);
		writer.append(">")
	}
};
Mscrm.EmailAddressAttribute = function() {
	Mscrm.EmailAddressAttribute.initializeBase(this);
	this.add_validate(Mscrm.EmailAddressAttribute.$7f)
};
Mscrm.EmailAddressAttribute.isValidEmailWithQuotedString = function(
		emailAddress) {
	var $v_0 = emailAddress.indexOf('"'), $v_1 = emailAddress.indexOf('"@', 1);
	if (!$v_0 && $v_1 !== -1 && $v_1 > 1) {
		var $v_2 = emailAddress.substring(1, $v_1), $v_3 = emailAddress
				.replace('"' + $v_2 + '"', "abc"), $v_4 = new RegExp('[\\\\"]');
		if ($v_2.search($v_4) === -1
				&& Mscrm.EmailAddressAttribute.$3D.test($v_3))
			return true
	}
	return false
};
Mscrm.EmailAddressAttribute.$7f = function($p0, $p1) {
	if (IsNull($p1.$4_1))
		return new Mscrm.ValidationResult(true, null);
	var $v_0 = Mscrm.Utilities.trim($p1.$4_1, null);
	if ($v_0.length > 0 && !Mscrm.EmailAddressAttribute.$3D.test($v_0)
			&& !Mscrm.EmailAddressAttribute.isValidEmailWithQuotedString($v_0))
		return new Mscrm.ValidationResult(false, LOCID_ENTER_VALID_EMAIL);
	return new Mscrm.ValidationResult(true, null)
};
Mscrm.EmailBodyAttribute = function() {
	Mscrm.EmailBodyAttribute.initializeBase(this);
	this.$H_1 = "memo";
	this.add_validate(Mscrm.EmailBodyAttribute.$1O)
};
Mscrm.EmailBodyAttribute.$1O = function($p0, $p1) {
	if (IsNull($p1.$4_1))
		return new Mscrm.ValidationResult(true, null);
	if (typeof $p1.$4_1 !== Mscrm.TypeNames.stringType)
		return new Mscrm.ValidationResult(false, LOCID_DEVERROR_BADTYPE_STRING);
	return new Mscrm.ValidationResult(true, null)
};
Mscrm.EmailBodyAttribute.prototype = {
	preProcessValue : function(value) {
		return Mscrm.FormDataAttribute.prototype.preProcessValue.call(this,
				value)
				|| ""
	},
	get_isDirty : function() {
		if (!this.get_primaryDataControl().$32_5)
			return false;
		return Mscrm.FormDataAttribute.prototype.get_isDirty.call(this)
	},
	serializeInternal : function(writer) {
		var $v_0 = CrmEncodeDecode.CrmXmlEncode(this.$7_1), $v_1 = window.LOCID_UI_DIR === "RTL";
		writer.append("<");
		writer.append($v_0);
		writer.append(">");
		$v_1
				&& writer.append(CrmEncodeDecode
						.CrmXmlEncode('<div style="direction:rtl">'));
		writer.append(CrmEncodeDecode.CrmXmlEncode(this.get_value()));
		$v_1 && writer.append(CrmEncodeDecode.CrmXmlEncode("</div>"));
		writer.append("</");
		writer.append($v_0);
		writer.append(">")
	},
	deserialize : function(attributeNode) {
		if (Mscrm.Utilities.isFirefox())
			!IsNull(attributeNode) && !IsNull(attributeNode.normalize)
					&& attributeNode.normalize();
		return Mscrm.FormDataAttribute.prototype.deserialize.call(this,
				attributeNode)
	},
	$4b_2 : function($p0) {
		var $v_0 = document.createElement("div");
		$v_0.innerHTML = $p0;
		$p0 = $v_0.innerHTML;
		$v_0.innerHTML = $p0;
		$p0 = $v_0.innerHTML;
		$v_0 = null;
		return $p0
	},
	isEqual : function(value1, value2) {
		var $v_0 = Mscrm.FormDataAttribute.removeCarriageReturnsOnNewLines(this
				.preProcessValue(value1)), $v_1 = Mscrm.FormDataAttribute
				.removeCarriageReturnsOnNewLines(this.preProcessValue(value2));
		$v_0 = this.$4b_2($v_0);
		$v_1 = this.$4b_2($v_1);
		return $v_0 === $v_1
	}
};
Mscrm.FormDataAttribute = function() {
	this.$20_1 = "none";
	this.$1G_1 = "dirty";
	this.$1H_1 = 0;
	Mscrm.FormDataAttribute.initializeBase(this);
	this.$K_1 = new Mscrm.ClientApiCollection;
	this.$14_1 = new Array(0);
	this.$24_1 = [];
	this.add_validate(Mscrm.FormDataAttribute.$7k)
};
Mscrm.FormDataAttribute.removeCarriageReturnsOnNewLines = function(input) {
	var $v_0 = null;
	if (input) {
		$v_0 = input.replace(new RegExp("\x0d\x0a", "g"), "\n");
		$v_0 = $v_0.replace(new RegExp("\x0d", "g"), "\n")
	}
	return $v_0
};
Mscrm.FormDataAttribute.$7k = function($p0, $p1) {
	if ($p1.$2Z_1 === 2 && $p0.get_requiredLevelValue() === "required"
			&& !$p0.get_hasValue())
		if (!$p0.$3x_1()) {
			for ( var $v_0 = null, $v_1 = $p0.$K_1.get(), $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
				var $v_3 = $v_1[$v_2];
				if (!IsNull($v_3) && !$v_3.get_innerControl().get_disabled())
					if ($v_3.get_label() !== $p0.$7_1) {
						$v_0 = $v_3.get_label();
						break
					}
			}
			if (isNullOrEmptyString($v_0))
				$v_0 = $p0.$7_1;
			return new Mscrm.ValidationResult(false, String.format(
					LOCID_FORM_PROIVE_VALUE_MASK, $v_0))
		}
	return new Mscrm.ValidationResult(true, null)
};
Mscrm.FormDataAttribute.prototype = {
	$K_1 : null,
	$14_1 : null,
	$1U_1 : null,
	$g_1 : null,
	$V_1 : null,
	$30_1 : false,
	$7_1 : null,
	$x_1 : null,
	$3r_1 : 0,
	$H_1 : null,
	$24_1 : null,
	$4_1 : null,
	$3l_1 : false,
	$l_1 : null,
	$2T_1 : false,
	add_validate : function(value) {
		Array.add(this.$24_1, value)
	},
	remove_validate : function(value) {
		Array.remove(this.$24_1, value)
	},
	get_metadataType : function() {
		return this.$H_1
	},
	set_metadataType : function(value) {
		this.$H_1 = value;
		return value
	},
	get_controls : function() {
		return this.$K_1
	},
	get_submitModeValue : function() {
		var $v_0 = this.get_primaryDataControl();
		if ($v_0)
			if (Mscrm.FormDataControl.isInstanceOfType($v_0))
				this.$1G_1 = $v_0.get_$2l_4();
			else if (Mscrm.HiddenFormDataControl.isInstanceOfType($v_0))
				this.$1G_1 = $v_0.get_$2l_4();
		return this.$1G_1
	},
	set_submitModeValue : function(value) {
		switch (value) {
		case "always":
		case "dirty":
		case "never":
			break;
		default:
			return value
		}
		this.$1G_1 = value;
		var $v_0 = this.get_primaryDataControl();
		if ($v_0)
			if (Mscrm.FormDataControl.isInstanceOfType($v_0))
				$v_0.set_$2l_4(this.$1G_1);
			else
				Mscrm.HiddenFormDataControl.isInstanceOfType($v_0)
						&& $v_0.set_$2l_4(this.$1G_1);
		return value
	},
	get_format : function() {
		return this.$g_1
	},
	set_format : function(value) {
		this.$g_1 = value;
		return value
	},
	get_initialValue : function() {
		return this.$V_1
	},
	get_isDirty : function() {
		return this.$30_1 || !this.isEqual(this.$V_1, this.get_value())
	},
	isEqual : function(value1, value2) {
		return value1 === value2
	},
	get_isDirtyOverride : function() {
		return this.$30_1
	},
	get_name : function() {
		return this.$7_1
	},
	set_name : function(value) {
		this.$7_1 = value;
		return value
	},
	get_parent : function() {
		return this.$x_1
	},
	set_parent : function(value) {
		this.$x_1 = value;
		return value
	},
	get_requiredLevelValue : function() {
		return this.$20_1
	},
	set_requiredLevelValue : function(value) {
		switch (value) {
		case "none":
		case "recommended":
		case "required":
			break;
		default:
			return value
		}
		this.$20_1 = value;
		for ( var $v_0 = this.$K_1.get(), $v_1 = 0; $v_1 < $v_0.length; $v_1++)
			$v_0[$v_1].setRequiredLevel(this.$20_1);
		return value
	},
	get_userPrivilegeMask : function() {
		return this.$1H_1
	},
	set_userPrivilegeMask : function(value) {
		this.$1H_1 = value;
		return value
	},
	get_value : function() {
		return this.getValue()
	},
	set_value : function(value) {
		this.$2C_1(value, 2, null);
		return value
	},
	get_dataControls : function() {
		return this.$14_1
	},
	get_hasValue : function() {
		return !IsNull(this.get_value())
	},
	get_primaryDataControl : function() {
		for ( var $v_0 = this.$14_1, $v_1 = null, $v_2 = 0; $v_2 < $v_0.length
				&& !$v_1; $v_2++) {
			var $v_3 = $v_0[$v_2];
			if ($v_3.get_id() === this.$7_1)
				$v_1 = $v_3
		}
		return $v_1
	},
	get_$X_1 : function() {
		if (!this.$1U_1)
			this.$1U_1 = new Mscrm.ClientApiEventHandlerList(this.get_events());
		return this.$1U_1
	},
	get_isVirtual : function() {
		return this.$2T_1
	},
	set_isVirtual : function(value) {
		this.$2T_1 = value;
		return value
	},
	addOnChange : function(handler, system) {
		this.get_$X_1().addHandler("Change", handler, system)
	},
	fireOnChange : function() {
		var $v_0 = this.get_$X_1().getHandler("Change");
		$v_0 && $v_0(this.getWrapper(), null)
	},
	getKey : function() {
		return this.$7_1
	},
	getWrapper : function() {
		if (!this.$l_1)
			this.$l_1 = this.getWrapperInternal();
		return this.$l_1
	},
	isAttributeForBulkEdit : function() {
		return typeof FORM_TYPE != "undefined" && FORM_TYPE == "BulkEdit"
	},
	dispose : function() {
		Sys.Component.prototype.dispose.call(this);
		Mscrm.Utilities.destroyObject(this)
	},
	initialize : function() {
		Sys.Component.prototype.initialize.call(this);
		!IsNull(this.$x_1) && this.$x_1.$74_1(this);
		this.$3r_1 = !IsNull(this.$x_1) && this.$x_1.get_isNew() ? 1 : 4
	},
	hasDataToSerialize : function(mode) {
		if (this.$2T_1)
			return false;
		var $v_0 = this.get_submitModeValue();
		switch ($v_0) {
		case "always":
			return this.get_isDirty();
		case "never":
			return false;
		case "dirty":
			switch (mode) {
			case 2:
				return true;
			case 0:
				return this.get_hasValue();
			case 1:
				return this.get_isDirty() && !this.$3x_1();
			default:
				break
			}
			break;
		default:
			break
		}
		return false
	},
	removeOnChange : function(handler) {
		this.get_$X_1().removeHandler("Change", handler)
	},
	serialize : function(writer, mode) {
		if (this.$2T_1)
			return;
		var $v_0 = this.get_submitModeValue();
		if ($v_0 === "never" || $v_0 !== "always"
				&& !this.hasDataToSerialize(mode))
			return;
		if (this.get_hasValue())
			this.serializeInternal(writer);
		else {
			writer.append("<");
			writer.append(CrmEncodeDecode.CrmXmlEncode(this.$7_1));
			writer.append("/>")
		}
	},
	$47_1 : function($p0) {
		var $v_0 = XUI.Xml.SelectSingleNode($p0, this.$7_1, null), $v_1 = !$v_0 ? this
				.preProcessValue(null)
				: this.deserialize($v_0), $v_2 = null;
		if ($v_1)
			$v_2 = $v_1;
		switch (this.$g_1) {
		case "datetime":
		case "date":
			if ($v_2 && $v_2.length > 19) {
				$v_2 = $v_2.substring(0, 19);
				$v_1 = $v_2
			}
			break;
		default:
			break
		}
		var $v_3 = IsNull(this.$V_1) || !IsNull($v_1) || !this.$x_1.get_isNew();
		if ($v_3 || window._appFormErrorOnPage)
			this.$V_1 = $v_1
	},
	get_firstAvailableControl : function() {
		for ( var $v_0 = null, $v_1 = this.$K_1.get(), $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
			var $v_3 = $v_1[$v_2];
			if (!$v_3.get_innerControl().get_disabled()) {
				if (typeof $v_3.get_doNotSubmit !== "undefined"
						&& $v_3.get_doNotSubmit())
					continue;
				if (!$v_0)
					$v_0 = $v_3;
				if ($v_3.isVisibleInTree())
					return $v_3
			}
		}
		return $v_0
	},
	$4V_1 : function($p0, $p1) {
		if (!this.$14_1.length) {
			this.initializeFromDomElement($p1);
			this.$4H_1($p0)
		}
		if (Mscrm.UIControl.isInstanceOfType($p0)) {
			var $v_0 = $p0.get_parent();
			$v_0 && Mscrm.FormUIControl.isInstanceOfType($v_0)
					&& this.$K_1.add($v_0)
		}
		Array.add(this.$14_1, $p0)
	},
	resetValue : function(value) {
		return this.resetValueWithDirtyCheck(value, false)
	},
	resetValueWithDirtyCheck : function(value, needDirtyCheck) {
		var $v_0 = this.get_value(), $v_1 = this.preProcessValue(value), $v_2 = needDirtyCheck
				&& this.get_isDirty() && !this.isEqual($v_0, $v_1);
		if (!(this.$6E_1() || $v_2)) {
			var $v_4 = this.$2C_1(value, 1, null);
			if (!$v_4)
				return false
		} else {
			var $v_5 = this.$1O_1(value, 1);
			if (IsNull($v_5) || !$v_5.isValid)
				return false
		}
		var $v_3 = !this.isEqual($v_0, this.get_value());
		this.$V_1 = $v_1;
		return $v_3
	},
	$6E_1 : function() {
		for ( var $v_0 = this.$K_1.get(), $v_1 = 0; $v_1 < $v_0.length; $v_1++)
			if ($v_0[$v_1].isEditing())
				return true;
		return false
	},
	$2C_1 : function($p0, $p1, $p2) {
		if ($p1 === 1)
			this.$3l_1 = true;
		if ($p1 === 2 && !(this.$1H_1 & this.$3r_1))
			return false;
		var $v_0 = $p1 !== 1 ? this.$1O_1($p0, 1) : new Mscrm.ValidationResult(
				true, null);
		if ($v_0.isValid) {
			var $v_1 = this.preProcessValue($p0);
			this.$4_1 = $v_1;
			this.$6h_1($p2);
			!$p1 && this.fireOnChange()
		} else if (!isNullOrEmptyString($v_0.errorText)) {
			alert($v_0.errorText);
			if ($p2 && Mscrm.UIControl.isInstanceOfType($p2)) {
				var $v_2 = $p2.get_parent();
				$v_2.setFocus()
			} else {
				var $v_3 = this.get_firstAvailableControl();
				$v_3 && $v_3.setFocus()
			}
		}
		return $v_0.isValid
	},
	$1O_1 : function($p0, $p1) {
		for ( var $v_0 = new Mscrm.ValidationEventArgs($p0, $p1), $v_1 = null, $v_2 = 0; $v_2 < this.$24_1.length
				&& (!$v_1 || $v_1.isValid); $v_2++) {
			var $v_3 = this.$24_1[$v_2];
			$v_1 = $v_3(this, $v_0)
		}
		if (!$v_1)
			$v_1 = new Mscrm.ValidationResult(true, null);
		return $v_1
	},
	deserialize : function(attributeNode) {
		var $v_0 = XUI.Xml.DomUtils.GetFirstChild(attributeNode);
		return this.preProcessValue($v_0 ? CrmEncodeDecode
				.CrmXmlDecode(XUI.Xml.XMLSerializer.serializeToString($v_0))
				: null)
	},
	getValue : function() {
		!this.$3l_1 && this.$4H_1(this.$14_1[0]);
		return this.$4_1
	},
	getWrapperInternal : function() {
		return new Mscrm.AttributeWrapper(this)
	},
	initializeFromDomElement : function(element) {
		if (isNullOrEmptyString(this.$7_1))
			this.$7_1 = element.getAttribute("attrName");
		if (isNullOrEmptyString(this.$g_1))
			this.$g_1 = element.getAttribute("attrFormat");
		if (!this.$1H_1) {
			var $v_1 = element.getAttribute("attrPriv");
			if (!isNullOrEmptyString($v_1))
				this.$1H_1 = parseInt($v_1, 10)
		}
		var $v_0 = element.getAttribute("req");
		if (!isNullOrEmptyString($v_0))
			this.$20_1 = Xrm.RequiredLevel.fromLegacyValue(parseInt($v_0, 10))
	},
	preProcessValue : function(value) {
		return IsNull(value) ? null : value
	},
	pushValueToControl : function(control, value) {
		control.set_value(value)
	},
	serializeInternal : function(writer) {
		var $v_0 = CrmEncodeDecode.CrmXmlEncode(this.$7_1);
		writer.append("<");
		writer.append($v_0);
		writer.append(">");
		writer
				.append(CrmEncodeDecode.CrmXmlEncode(this.get_value()
						.toString()));
		writer.append("</");
		writer.append($v_0);
		writer.append(">")
	},
	$3x_1 : function() {
		for ( var $v_0 = false, $v_1 = this.$K_1.get(), $v_2 = 0; $v_2 < $v_1.length
				&& !$v_0; $v_2++)
			$v_0 = !$v_1[$v_2].get_innerControl().get_disabled();
		return this.$K_1.getLength() > 0 && !$v_0
	},
	$4H_1 : function($p0) {
		if (IsNull($p0))
			return;
		var $v_0 = $p0.get_value();
		if (typeof $v_0 !== Mscrm.TypeNames.undefinedType) {
			this.$2C_1($v_0, 1, $p0);
			this.$V_1 = this.get_value();
			var $v_1 = window._dirtyProperties;
			this.$30_1 = !!$v_1 && $v_1[this.$7_1] === this.$7_1
		}
	},
	$6h_1 : function($p0) {
		for ( var $v_0 = this.get_value(), $v_1 = this.$14_1, $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
			var $v_3 = $v_1[$v_2];
			$v_3 !== $p0 && this.pushValueToControl($v_3, $v_0)
		}
	}
};
Mscrm.FormDataEntity = function() {
	Mscrm.FormDataEntity.initializeBase(this);
	this.$d_1 = new Mscrm.ClientApiCollection;
	this.$1Z_1 = new Array(0);
	this.$1F_1 = [];
	this.$65_1()
};
Mscrm.FormDataEntity.prototype = {
	$d_1 : null,
	$1U_1 : null,
	$1u_1 : null,
	$1Z_1 : null,
	$1y_1 : null,
	$39_1 : null,
	$22_1 : null,
	$O_1 : false,
	$l_1 : null,
	$1F_1 : null,
	$3a_1 : false,
	$2z_1 : null,
	$3n_1 : null,
	add_onIsDisabledChanged : function(value) {
		this.get_$3K_1().addHandler("OnIsDisabledChanged", value)
	},
	remove_onIsDisabledChanged : function(value) {
		this.get_$3K_1().removeHandler("OnIsDisabledChanged", value)
	},
	get_attributes : function() {
		return this.$d_1
	},
	get_isDirty : function() {
		return this.hasDataToSerialize(1)
	},
	get_isCreateMode : function() {
		return IsNull(this.$1y_1) || !this.$1y_1.length
	},
	get_recordName : function() {
		return this.$3n_1
	},
	set_recordName : function(value) {
		this.$3n_1 = value;
		this.$58_1();
		return value
	},
	get_recordId : function() {
		return this.$1y_1
	},
	set_recordId : function(value) {
		this.$1y_1 = value;
		this.$57_1();
		return value
	},
	get_typeName : function() {
		return this.$22_1
	},
	set_typeName : function(value) {
		this.$22_1 = value;
		return value
	},
	get_isDisabled : function() {
		return this.$O_1
	},
	set_isDisabled : function(value) {
		var $v_0 = this.$O_1;
		this.$O_1 = value;
		this.$O_1 !== $v_0 && this.$56_1();
		return value
	},
	get_pendingAssociations : function() {
		return this.$1F_1
	},
	set_pendingAssociations : function(value) {
		this.$1F_1 = value;
		return value
	},
	get_deferredAssociation : function() {
		return this.$3a_1
	},
	set_deferredAssociation : function(value) {
		this.$3a_1 = value;
		return value
	},
	get_isNew : function() {
		return isNullOrEmptyString(this.$1y_1)
	},
	get_$X_1 : function() {
		if (!this.$1U_1)
			this.$1U_1 = new Mscrm.ClientApiEventHandlerList(this.get_events());
		return this.$1U_1
	},
	get_$3K_1 : function() {
		if (IsNull(this.$2z_1))
			this.$2z_1 = new Sys.EventHandlerList;
		return this.$2z_1
	},
	addOnRecordNameChanged : function(handler, system) {
		this.get_$X_1().addHandler("OnRecordNameChanged", handler, system)
	},
	addOnRecordIdChanged : function(handler, system) {
		this.get_$X_1().addHandler("OnRecordIdChanged", handler, system)
	},
	removeOnRecordIdChanged : function(handler) {
		this.get_$X_1().removeHandler("OnRecordIdChanged", handler)
	},
	removeOnRecordNameChanged : function(handler) {
		this.get_$X_1().removeHandler("OnRecordNameChanged", handler)
	},
	addOnSave : function(handler, system) {
		this.get_$X_1().addHandler("Save", handler, system)
	},
	fireOnSave : function(args) {
		var $v_0 = this.get_$X_1().getHandler("Save");
		if ($v_0) {
			$v_0(this.$29_1(), args);
			return !args.isDefaultPrevented()
		}
		return true
	},
	hasDataToSerialize : function(mode) {
		for ( var $v_0 = false, $v_1 = this.$d_1.get(), $v_2 = 0; $v_2 < $v_1.length
				&& !$v_0; $v_2++)
			$v_0 = $v_1[$v_2].hasDataToSerialize(mode);
		if (!$v_0)
			for ( var $v_3 = 0; $v_3 < this.$1Z_1.length && !$v_0; $v_3++)
				$v_0 = this.$1Z_1[$v_3].hasDataToSerialize(mode);
		return $v_0
	},
	initialize : function() {
		Sys.Component.prototype.initialize.call(this);
		Mscrm.FormDataManager.$76(this);
		this.$6A_1()
	},
	dispose : function() {
		Mscrm.FormDataManager.$7b(this.get_id());
		Sys.Component.prototype.dispose.call(this);
		Mscrm.Utilities.destroyObject(this)
	},
	registerOtherData : function(data) {
		Array.add(this.$1Z_1, data)
	},
	removeOnSave : function(handler) {
		this.get_$X_1().removeHandler("Save", handler)
	},
	save : function(action) {
		var $v_0 = $find("crmForm");
		switch (action) {
		case "save":
			$v_0.Save();
			break;
		case "saveandclose":
			$v_0.SaveAndClose();
			break;
		case "saveandnew":
			$v_0.SubmitCrmForm(59, true, true, false, false);
			break;
		default:
			IsNull(action) && $v_0.Save();
			break
		}
	},
	serialize : function(mode) {
		var $v_0 = CrmEncodeDecode.CrmXmlEncode(this.$22_1), $v_1 = new Sys.StringBuilder;
		$v_1.append("<");
		$v_1.append($v_0);
		$v_1.append(">");
		var $$t_5 = this, $v_2 = function($p1_0) {
			$p1_0.serialize($v_1, mode)
		};
		Array.forEach(this.$d_1.get(), $v_2);
		Array.forEach(this.$1Z_1, $v_2);
		$v_1.append("</");
		$v_1.append($v_0);
		$v_1.append(">");
		return $v_1.toString()
	},
	validateForSave : function() {
		for ( var $v_0 = null, $v_1 = this.$d_1.get(), $v_2 = 0; $v_2 < $v_1.length
				&& (!$v_0 || $v_0.isValid); $v_2++) {
			var $v_3 = $v_1[$v_2];
			$v_0 = $v_3.$1O_1($v_3.get_value(), 2);
			if (!isNullOrEmptyString($v_0.errorText)) {
				alert($v_0.errorText);
				var $v_4 = $v_3.get_firstAvailableControl();
				$v_4 && $v_4.setFocus()
			}
		}
		return $v_0.isValid
	},
	validateFieldsValue : function(createMode) {
		for ( var $v_0 = null, $v_1 = this.$d_1.get(), $v_2 = !IsNull(createMode)
				&& createMode, $v_3 = 0; $v_3 < $v_1.length; $v_3++) {
			var $v_4 = $v_1[$v_3];
			if (!$v_4.get_isDirty() && !$v_2
					&& $v_4.get_requiredLevelValue() === "none")
				continue;
			var $v_5 = $v_4.get_firstAvailableControl();
			if (IsNull($v_5))
				continue;
			$v_0 = $v_4.$1O_1($v_4.get_value(), 2);
			if (!$v_0 || $v_0.isValid)
				continue;
			$v_5.setFocus();
			return $v_0.errorText
		}
		return null
	},
	$29_1 : function() {
		if (!this.$l_1)
			this.$l_1 = new Mscrm.EntityWrapper(this);
		return this.$l_1
	},
	$74_1 : function($p0) {
		var $v_0 = this.$d_1.get($p0.getKey());
		if (!$v_0) {
			this.$d_1.add($p0);
			if (this.$1u_1[$p0.$7_1]) {
				Array.remove(this.$1Z_1, this.$1u_1[$p0.$7_1]);
				delete this.$1u_1[$p0.$7_1]
			}
			this.$39_1 && $p0.$47_1(this.$39_1)
		}
	},
	$65_1 : function() {
		this.$1u_1 = {};
		var $v_0 = $get("crmFormSubmitMappedDataRemainder");
		if ($v_0 && !isNullOrEmptyString($v_0.value))
			for ( var $v_1 = XUI.Xml.LoadXml("<mapped>" + $v_0.value
					+ "</mapped>"), $v_2 = XUI.Xml.SelectNodes($v_1,
					"/mapped/*", null), $v_3 = 0; $v_3 < $v_2.length; $v_3++) {
				var $v_4 = $v_2[$v_3], $v_5 = new Mscrm.RemainderData(
						XUI.Xml.XMLSerializer.serializeToString($v_4));
				this.registerOtherData($v_5);
				this.$1u_1[$v_4.nodeName] = $v_5
			}
	},
	$6A_1 : function() {
		var $v_0 = $get("crmFormOriginalXml");
		if ($v_0 && !isNullOrEmptyString($v_0.value)) {
			var $v_1 = XUI.Xml.LoadXml($v_0.value), $v_2 = XUI.Xml
					.SelectSingleNode($v_1, this.$22_1, null);
			if ($v_2)
				this.$39_1 = $v_2
		}
	},
	$58_1 : function() {
		var $v_0 = this.get_$X_1().getHandler("OnRecordNameChanged");
		$v_0 && $v_0(this, null)
	},
	$57_1 : function() {
		var $v_0 = this.get_$X_1().getHandler("OnRecordIdChanged");
		$v_0 && $v_0(this, null)
	},
	$56_1 : function() {
		var $v_0 = this.get_$3K_1().getHandler("OnIsDisabledChanged");
		!IsNull($v_0) && $v_0(this, null)
	},
	clearPendingAssociations : function() {
		if (this.$1F_1.length > 0) {
			for ( var $v_0 = 0; $v_0 < this.$1F_1.length; $v_0++)
				this.$1F_1[$v_0] = null;
			Array.clear(this.$1F_1)
		}
	}
};
Mscrm.HtcProxyFormData = function(control) {
	this.$2H_0 = control
};
Mscrm.HtcProxyFormData.prototype = {
	$2H_0 : null,
	hasDataToSerialize : function(mode) {
		switch (mode) {
		case 2:
			return true;
		case 0:
			return !IsNull(this.$2H_0.get_dataValue());
		case 1:
			return this.$2H_0.get_isDirty();
		default:
			break
		}
		return false
	},
	serialize : function(writer, mode) {
		if (!this.hasDataToSerialize(mode))
			return;
		writer.append(this.$2H_0.get_dataXml())
	}
};
Mscrm.InlineFormDataLookupAttribute = function() {
	Mscrm.InlineFormDataLookupAttribute.initializeBase(this)
};
Mscrm.InlineFormDataLookupAttribute.prototype = {
	get_isDirty : function() {
		return this.get_isDirtyOverride()
				|| Mscrm.FormInputControl.LookupUIBehavior.itemsDifferent(
						this.$V_1, this.get_value())
	}
};
Mscrm.InlineFormDataRelatedCasesLookupAttribute = function() {
	Mscrm.InlineFormDataRelatedCasesLookupAttribute.initializeBase(this)
};
Mscrm.InlineFormDataRelatedCasesLookupAttribute.prototype = {
	resetValue : function(value) {
		return true
	},
	get_isDirty : function() {
		return false
	}
};
Mscrm.LookupAttribute = function() {
	this.$1d_2 = 1;
	Mscrm.LookupAttribute.initializeBase(this);
	this.$M_2 = new Array(0);
	this.$H_1 = "lookup";
	this.add_validate(Mscrm.LookupAttribute.$7g);
	this.add_validate(Mscrm.LookupAttribute.$7d)
};
Mscrm.LookupAttribute.$7d = function($p0, $p1) {
	if ($p1.$2Z_1 === 2) {
		for ( var $v_0 = true, $v_1 = $p0.$M_2, $v_2 = 0; $v_2 < $v_1.length
				&& $v_0; $v_2++)
			if (!IsNull($v_1[$v_2]))
				$v_0 = !!($v_0 & $v_1[$v_2].IsValid());
		return new Mscrm.ValidationResult($v_0, null)
	}
	return new Mscrm.ValidationResult(true, null)
};
Mscrm.LookupAttribute.$7g = function($p0, $p1) {
	var $v_0 = $p0, $v_1 = $p1.$4_1;
	if (IsNull($v_1))
		return new Mscrm.ValidationResult(true, null);
	if (!isArray($v_1))
		return new Mscrm.ValidationResult(false, null);
	if ($v_0.$1d_2 === 1 && $v_1.length > 1)
		return new Mscrm.ValidationResult(false, null);
	for ( var $v_2 = $v_0.$M_2[0], $v_3 = 0; $v_3 < $v_1.length; $v_3++) {
		var $v_4 = $v_1[$v_3], $v_5 = $v_4.entityType;
		if ($v_5)
			$v_4.typename = $v_5;
		if (!$v_2.IsPermissibleType($v_4))
			return new Mscrm.ValidationResult(false, null)
	}
	return new Mscrm.ValidationResult(true, null)
};
Mscrm.LookupAttribute.prototype = {
	$M_2 : null,
	get_isDirty : function() {
		for ( var $v_0 = false, $v_1 = 0; $v_1 < this.$M_2.length && !$v_0; $v_1++)
			$v_0 = this.$M_2[$v_1].get_isDirty();
		return $v_0
	},
	isEqual : function(value1, value2) {
		return !Mscrm.FormInputControl.LookupUIBehavior.itemsDifferent(value1,
				value2)
	},
	get_hasValue : function() {
		for ( var $v_0 = false, $v_1 = 0; $v_1 < this.$M_2.length && !$v_0; $v_1++)
			$v_0 = !IsNull(this.$M_2[$v_1])
					&& !IsNull(this.$M_2[$v_1].get_dataValue());
		return $v_0
	},
	$47_1 : function($p0) {
		Mscrm.FormDataAttribute.prototype.$47_1.call(this, $p0);
		for ( var $v_0 = this.$V_1, $v_1 = 0; $v_1 < this.$M_2.length; $v_1++)
			this.$M_2[$v_1].set_defaultValue($v_0)
	},
	$4V_1 : function($p0, $p1) {
		Mscrm.FormDataAttribute.prototype.$4V_1.call(this, $p0, $p1);
		Array
				.add(this.$M_2, Mscrm.FormControlInputBehavior
						.GetBehavior($p1.id))
	},
	deserialize : function(attributeNode) {
		var $v_0 = XUI.Xml.DomUtils.GetFirstChild(attributeNode);
		if (!$v_0)
			return null;
		else if ($v_0.nodeType === 3) {
			var $v_1 = new LookupControlItem;
			$v_1.id = XUI.Xml.GetText(attributeNode);
			$v_1.name = XUI.Xml.GetText(attributeNode.attributes
					.getNamedItem("name"));
			$v_1.type = XUI.Xml.GetText(attributeNode.attributes
					.getNamedItem("type"));
			return [ $v_1 ]
		} else {
			for ( var $v_2 = [], $v_3 = attributeNode.childNodes, $v_4 = 0; $v_4 < $v_3.length; $v_4++) {
				var $v_5 = $v_3[$v_4], $v_6 = new LookupControlItem;
				switch ($v_5.nodeName) {
				case "item":
					$v_6.id = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_5,
							"id", null));
					$v_6.name = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_5,
							"name", null));
					$v_6.type = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_5,
							"type", null));
					Array.add($v_2, $v_6);
					break;
				case "activityparty":
					var $v_7 = XUI.Xml.SelectSingleNode($v_5, "partyid", null);
					if ($v_7) {
						$v_6.id = XUI.Xml.GetText($v_7);
						$v_6.name = XUI.Xml.GetText($v_7.attributes
								.getNamedItem("name"));
						$v_6.type = XUI.Xml.GetText($v_7.attributes
								.getNamedItem("type"))
					} else {
						var $v_A = XUI.Xml.SelectSingleNode($v_5,
								"addressused", null);
						if ($v_A) {
							$v_6.data = XUI.Xml.GetText($v_A);
							$v_6.name = XUI.Xml.GetText($v_A);
							$v_6.type = Mscrm.EntityTypeCode.UnresolvedEmailParty
									.toString()
						}
					}
					var $v_8 = XUI.Xml.SelectSingleNode($v_5, "effort", null);
					if ($v_8)
						$v_6.effort = XUI.Xml.GetText($v_8);
					var $v_9 = XUI.Xml.SelectSingleNode($v_5, "resourcespecid",
							null);
					if ($v_9)
						$v_6.resourceSpecId = XUI.Xml.GetText($v_9);
					Array.add($v_2, $v_6);
					break;
				default:
					break
				}
			}
			return $v_2.length > 0 ? $v_2 : null
		}
	},
	initializeFromDomElement : function(element) {
		Mscrm.FormDataAttribute.prototype.initializeFromDomElement.call(this,
				element);
		var $v_0 = element.getAttribute("lookupstyle");
		if (!isNullOrEmptyString($v_0))
			switch ($v_0) {
			case "single":
				this.$1d_2 = 1;
				break;
			case "multi":
				this.$1d_2 = 2;
				break;
			case "subject":
				this.$1d_2 = 3;
				break;
			default:
				break
			}
	},
	dispose : function() {
		this.$M_2 = null;
		Mscrm.FormDataAttribute.prototype.dispose.call(this)
	},
	preProcessValue : function(value) {
		var $v_0 = Mscrm.FormDataAttribute.prototype.preProcessValue.call(this,
				value);
		if ($v_0)
			if (!$v_0.length)
				$v_0 = null;
			else {
				if (this.$1d_2 === 1 && $v_0.length > 1)
					$v_0 = [ $v_0[0] ];
				for ( var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
					var $v_2 = $v_0[$v_1];
					$v_2.entityType = $v_2.typename
				}
			}
		return $v_0
	},
	serializeInternal : function(writer) {
		var $v_0 = this.$M_2[0];
		writer.append($v_0.GetDataXml(this.$7_1))
	}
};
Mscrm.NumberAttribute = function() {
	this.$$d_$5s_2 = Function.createDelegate(this, this.$5s_2);
	Mscrm.NumberAttribute.initializeBase(this)
};
Mscrm.NumberAttribute.$7e = function($p0, $p1) {
	if (IsNull($p1.$4_1))
		return new Mscrm.ValidationResult(true, null);
	var $v_0 = $p1.$4_1, $v_1 = $p0;
	if (typeof $v_0 !== Mscrm.TypeNames.numberType || $v_0 < $v_1.$w_2
			|| $v_1.$v_2 < $v_0) {
		var $v_2 = LOCID_DURATION_BADTYPE, $v_3 = String.format($v_2,
				Mscrm.NumberUtility.addFormatting($v_1.$w_2, $v_1.$a_2),
				Mscrm.NumberUtility.addFormatting($v_1.$v_2, $v_1.$a_2));
		return new Mscrm.ValidationResult(false, $v_3)
	}
	return new Mscrm.ValidationResult(true, null)
};
Mscrm.NumberAttribute.$7h = function($p0, $p1) {
	if (IsNull($p1.$4_1))
		return new Mscrm.ValidationResult(true, null);
	if (typeof $p1.$4_1 !== Mscrm.TypeNames.numberType) {
		var $v_2 = $p0.$g_1 === "duration" ? LOCID_DEVERROR_BADDATATYPE_INT
				: LOCID_DEVERROR_BADDATATYPE_INT;
		return new Mscrm.ValidationResult(false, LOCID_DEVERROR_BADDATATYPE_INT)
	}
	var $v_0 = $p1.$4_1, $v_1 = $p0;
	if ($v_0 < $v_1.$w_2 || $v_1.$v_2 < $v_0) {
		var $v_3 = $v_1.$H_1 === "integer" ? LOCID_NUMBER_RANGE_MASK
				: LOCID_FLOAT_RANGE_MASK, $v_4 = String.format($v_3,
				Mscrm.NumberUtility.addFormatting($v_1.$w_2, $v_1.$a_2),
				Mscrm.NumberUtility.addFormatting($v_1.$v_2, $v_1.$a_2));
		return new Mscrm.ValidationResult(false, $v_4)
	}
	return new Mscrm.ValidationResult(true, null)
};
Mscrm.NumberAttribute.prototype = {
	$v_2 : null,
	$w_2 : null,
	$a_2 : 0,
	$1w_2 : null,
	$j_2 : null,
	get_max : function() {
		return this.$v_2
	},
	get_min : function() {
		return this.$w_2
	},
	get_precision : function() {
		return this.$a_2
	},
	getWrapperInternal : function() {
		return new Mscrm.NumberAttributeWrapper(this)
	},
	deserialize : function(attributeNode) {
		return this.preProcessValue(parseFloat(XUI.Xml.GetText(attributeNode)))
	},
	initializeFromDomElement : function(element) {
		Mscrm.FormDataAttribute.prototype.initializeFromDomElement.call(this,
				element);
		this.$j_2 = Mscrm.FormControlInputBehavior.GetBehavior(element.id);
		if (Sys.UI.DomElement.containsCssClass(element, "ms-crm-Duration")) {
			this.add_validate(Mscrm.NumberAttribute.$7e);
			this.$w_2 = parseInt(element.getAttribute("MinMinutes"), 10);
			this.$v_2 = parseInt(element.getAttribute("MaxMinutes"), 10);
			this.$a_2 = 0;
			this.$H_1 = "integer"
		} else {
			this.add_validate(Mscrm.NumberAttribute.$7h);
			this.$w_2 = this.$j_2.get_min();
			this.$v_2 = this.$j_2.get_max();
			this.$a_2 = this.$j_2.get_precision();
			var $v_0 = this.$j_2.get_dataType();
			switch ($v_0) {
			case "float":
				$v_0 = "double";
				break;
			case "int":
				$v_0 = "integer";
				if (IsNull(this.$g_1))
					this.$g_1 = "none";
				break;
			case "decimal":
			case "money":
				break;
			default:
				break
			}
			this.$H_1 = $v_0;
			this.$1w_2 = this.$$d_$5s_2;
			this.$j_2.add_precisionChange(this.$1w_2)
		}
	},
	dispose : function() {
		if (!IsNull(this.$j_2) && !IsNull(this.$1w_2)) {
			this.$j_2.remove_precisionChange(this.$1w_2);
			this.$1w_2 = null;
			this.$j_2 = null
		}
		Mscrm.FormDataAttribute.prototype.dispose.call(this)
	},
	preProcessValue : function(value) {
		var $v_0 = Mscrm.FormDataAttribute.prototype.preProcessValue.call(this,
				value);
		if (!IsNull($v_0))
			if (this.$H_1 === "integer")
				$v_0 = Math.floor($v_0);
			else {
				var $v_1 = 1;
				if (this.$a_2 > 0)
					for ( var $v_2 = 0; $v_2 < this.$a_2; $v_2++)
						$v_1 *= 10;
				$v_0 = Math.round($v_0 * $v_1) / $v_1
			}
		return $v_0
	},
	$5s_2 : function($p0, $p1) {
		this.$a_2 = $p1.precision
	}
};
Mscrm.OptionSetAttribute = function() {
	Mscrm.OptionSetAttribute.initializeBase(this);
	this.$H_1 = "optionset";
	this.add_validate(Mscrm.OptionSetAttribute.$1O)
};
Mscrm.OptionSetAttribute.$6O = function($p0, $p1) {
	for ( var $v_0 = $p0.getElementsByTagName("INPUT"), $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
		var $v_2 = $v_0[$v_1], $v_3 = XUI.Html.DomUtils.GetNextSibling($v_2);
		$p1[$v_2.value] = XUI.Html.GetText($v_3)
	}
};
Mscrm.OptionSetAttribute.$1O = function($p0, $p1) {
	if (IsNull($p1.$4_1))
		return new Mscrm.ValidationResult(true, null);
	var $v_0 = typeof $p1.$4_1;
	if ($v_0 !== Mscrm.TypeNames.stringType
			&& $v_0 !== Mscrm.TypeNames.numberType)
		return new Mscrm.ValidationResult(false,
				LOCID_DEVERROR_BADTYPE_PICKLIST);
	return new Mscrm.ValidationResult(true, null)
};
Mscrm.OptionSetAttribute.prototype = {
	$k_2 : null,
	get_formattedValue : function() {
		var $v_0 = this.get_value();
		return IsNull($v_0) ? "" : this.$k_2[$v_0]
	},
	get_isDirty : function() {
		if (this.isAttributeForBulkEdit())
			if (IsNull(this.getValue()))
				return false;
			else
				return true;
		else
			return Mscrm.FormDataAttribute.prototype.get_isDirty.call(this)
	},
	get_selectedOption : function() {
		var $v_0 = this.get_value();
		return IsNull($v_0) ? null : new Mscrm.OptionSetItem($v_0,
				this.$k_2[$v_0])
	},
	get_options : function() {
		var $v_0 = [], $$dict_1 = this.$k_2;
		for ( var $$key_2 in $$dict_1) {
			var $v_1 = {
				key : $$key_2,
				value : $$dict_1[$$key_2]
			};
			Array.add($v_0, new Mscrm.OptionSetItem($v_1.key, $v_1.value))
		}
		return $v_0
	},
	getOption : function(value) {
		var $v_0 = this.$k_2[value];
		if ($v_0)
			return new Mscrm.OptionSetItem(value, $v_0);
		return null
	},
	deserialize : function(attributeNode) {
		return this
				.preProcessValue(parseInt(XUI.Xml.GetText(attributeNode), 10))
	},
	getWrapperInternal : function() {
		return new Mscrm.OptionSetAttributeWrapper(this)
	},
	initializeFromDomElement : function(element) {
		Mscrm.FormDataAttribute.prototype.initializeFromDomElement.call(this,
				element);
		this.$k_2 = {};
		if (element.tagName === "SELECT")
			this.loadOptionsFromSelectControl(element);
		else
			element.tagName === "DIV"
					&& Mscrm.OptionSetAttribute.$6O(element, this.$k_2)
	},
	preProcessValue : function(value) {
		var $v_0 = Mscrm.FormDataAttribute.prototype.preProcessValue.call(this,
				value);
		if (!IsNull($v_0)) {
			if (IsNull(this.$k_2[$v_0]))
				$v_0 = null;
			if (!IsNull($v_0) && typeof $v_0 === Mscrm.TypeNames.stringType)
				$v_0 = parseInt($v_0, 10)
		}
		return $v_0
	},
	loadOptionsFromSelectControl : function(element) {
		this.$k_2 = {};
		for ( var $v_0 = element.options, $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
			var $v_2 = $v_0[$v_1], $v_3 = isNullOrEmptyString($v_2.value) ? null
					: $v_2.value;
			this.$k_2[$v_3] = $v_2.text
		}
	}
};
Mscrm.RemainderData = function($p0) {
	this.$3w_0 = $p0
};
Mscrm.RemainderData.prototype = {
	$3w_0 : null,
	hasDataToSerialize : function($p0) {
		return false
	},
	serialize : function($p0, $p1) {
		$p0.append(this.$3w_0)
	}
};
Mscrm.TextAttribute = function() {
	Mscrm.TextAttribute.initializeBase(this);
	this.add_validate(Mscrm.TextAttribute.$7i)
};
Mscrm.TextAttribute.$7i = function($p0, $p1) {
	if (IsNull(window.event) || IsNull(window.event.returnValue)
			|| window.event.returnValue) {
		if (IsNull($p1.$4_1))
			return new Mscrm.ValidationResult(true, null);
		if (typeof $p1.$4_1 !== Mscrm.TypeNames.stringType)
			return new Mscrm.ValidationResult(false,
					LOCID_DEVERROR_BADTYPE_STRING);
		var $v_0 = $p1.$4_1, $v_1 = $p0;
		if (!$v_1.$3k_2)
			if ($v_0 && Mscrm.Utilities.trim($v_0, null).length > $v_1.$i_2)
				return new Mscrm.ValidationResult(false, String.format(
						LOCID_DEVERROR_TOO_LONG, $v_1.$i_2))
	}
	return new Mscrm.ValidationResult(true, null)
};
Mscrm.TextAttribute.prototype = {
	$3e_2 : null,
	$i_2 : 0,
	$3k_2 : false,
	get_maxLength : function() {
		return this.$i_2
	},
	deserialize : function(attributeNode) {
		if (this.$3e_2 !== "bit") {
			if (Mscrm.Utilities.isFirefox())
				!IsNull(attributeNode) && !IsNull(attributeNode.normalize)
						&& attributeNode.normalize();
			return this.preProcessValue(XUI.Xml.GetText(attributeNode))
		}
		return Boolean.parse(XUI.Xml.GetText(attributeNode)) ? "1" : "0"
	},
	isEqual : function(value1, value2) {
		var $v_0 = Mscrm.FormDataAttribute.removeCarriageReturnsOnNewLines(this
				.preProcessValue(value1)), $v_1 = Mscrm.FormDataAttribute
				.removeCarriageReturnsOnNewLines(this.preProcessValue(value2));
		return $v_0 === $v_1
	},
	getWrapperInternal : function() {
		return new Mscrm.TextAttributeWrapper(this)
	},
	initializeFromDomElement : function(element) {
		Mscrm.FormDataAttribute.prototype.initializeFromDomElement.call(this,
				element);
		if (element.tagName === "TEXTAREA") {
			this.$H_1 = "memo";
			this.$i_2 = parseInt(
					element.attributes.getNamedItem("maxlength").value, 10);
			this.$3k_2 = true
		} else {
			this.$H_1 = "string";
			if (element.type === "hidden") {
				var $v_0 = Mscrm.FormControlInputBehavior
						.GetBehavior(element.id);
				this.$3e_2 = $v_0.get_attributeType();
				this.$i_2 = Number.MAX_VALUE
			} else
				this.$i_2 = parseInt(element.attributes
						.getNamedItem("maxlength").value, 10)
		}
	},
	preProcessValue : function(value) {
		var $v_0 = Mscrm.FormDataAttribute.prototype.preProcessValue.call(this,
				value);
		if (!IsNull($v_0)) {
			$v_0 = Mscrm.Utilities.trim($v_0, null);
			if (!$v_0.length)
				$v_0 = null
		}
		return $v_0
	}
};
Mscrm.TickerAttribute = function() {
	Mscrm.TickerAttribute.initializeBase(this)
};
Mscrm.TickerAttribute.prototype = {
	preProcessValue : function(value) {
		var $v_0 = Mscrm.TextAttribute.prototype.preProcessValue.call(this,
				value);
		if ($v_0)
			$v_0 = $v_0.toUpperCase();
		return $v_0
	}
};
Mscrm.UrlAttribute = function() {
	Mscrm.UrlAttribute.initializeBase(this);
	this.add_validate(Mscrm.UrlAttribute.$7j)
};
Mscrm.UrlAttribute.$7j = function($p0, $p1) {
	if (IsNull($p1.$4_1))
		return new Mscrm.ValidationResult(true, null);
	var $v_0 = Mscrm.Utilities.trim($p1.$4_1, null);
	if ($v_0.length > 0) {
		var $v_1 = 2;
		if (validateUrlProtocol($v_0) === $v_1)
			return new Mscrm.ValidationResult(false,
					LOCID_URLCTRL_INVALID_PROTOCOL)
	}
	return new Mscrm.ValidationResult(true, null)
};
Mscrm.UrlAttribute.prototype = {
	preProcessValue : function(value) {
		var $v_0 = Mscrm.TextAttribute.prototype.preProcessValue.call(this,
				value);
		if ($v_0) {
			var $v_1 = 0;
			if (validateUrlProtocol($v_0) === $v_1) {
				var $v_2 = $v_0.toLowerCase();
				if (!$v_2.startsWith("http://") && !$v_2.startsWith("https://")) {
					$v_0 = "http://" + $v_0;
					if ($v_0.length > this.$i_2)
						$v_0 = $v_0.substr(0, this.$i_2)
				}
			}
		}
		return $v_0
	}
};
Mscrm.ValidationEventArgs = function(newValue, type) {
	Mscrm.ValidationEventArgs.initializeBase(this);
	this.$4_1 = newValue;
	this.$2Z_1 = type
};
Mscrm.ValidationEventArgs.prototype = {
	$4_1 : null,
	$2Z_1 : 0,
	get_value : function() {
		return this.$4_1
	},
	get_type : function() {
		return this.$2Z_1
	}
};
function addToQueue(objectType) {
	Mscrm.FormAction.addToQueue(objectType)
}
function assignObject(objectType) {
	Mscrm.FormAction.assignObject(objectType)
}
function changeState(action, objectType, formEventId, objectSubType) {
	Mscrm.FormAction
			.changeState(action, objectType, formEventId, objectSubType)
}
function onActionMenuClick(action, objectType, objectSubType) {
	return Mscrm.FormAction
			.onActionMenuClick(action, objectType, objectSubType)
}
function SendFormShortcut(isThroughEmail, entityTitle) {
	Mscrm.FormAction.sendFormShortcut(isThroughEmail, entityTitle)
}
function openRecordInNewWindow(objectType, formControl) {
	Mscrm.FormAction.openRecordInNewWindow(objectType, formControl)
}
Mscrm.FormAction = function() {
};
Mscrm.FormAction.addToQueue = function(objectType) {
	var $v_0 = Mscrm.CrmUri.create("/_grid/cmds/dlg_addtoqueue.aspx");
	$v_0.get_query()["iObjType"] = objectType;
	$v_0.get_query()["iTotal"] = "1";
	openStdDlg($v_0, [ Mscrm.FormAction.$1L(null) ], 400, 200, true, false,
			null)
};
Mscrm.FormAction.assignObject = function(objectType) {
	if (typeof objectType !== Mscrm.TypeNames.numberType)
		objectType = parseInt(objectType, 10);
	var $v_0, $v_1 = null, $v_2, $v_3 = $get("crmFormSubmit"), $v_4 = Mscrm.FormAction
			.$1L($v_3);
	if (objectType === Mscrm.EntityTypeCode.Incident) {
		$v_2 = 49;
		$v_0 = Mscrm.CrmUri.create("/_grid/cmds/dlg_assignqueue.aspx");
		$v_0.get_query()["iObjType"] = "112";
		$v_0.get_query()["iTotal"] = "1";
		$v_0.get_query()["sQType"] = "1";
		$v_0.get_query()["FromForm"] = "1";
		$v_0.get_query()["uid"] = $v_4;
		var $v_5 = [ objectType, $v_2 ], $v_6 = Mscrm.Utilities
				.createCallbackFunctionObject("assignObjectAction",
						Mscrm.FormAction, $v_5);
		$v_1 = openStdDlgWithCallback($v_0, [ $v_4 ], 456, 300, $v_6, true,
				false, null)
	} else if (Mscrm.EntityPropUtil.isActivityTypeCode(objectType)) {
		$v_2 = 47;
		$v_0 = Mscrm.CrmUri.create("/_grid/cmds/dlg_assignqueue.aspx");
		$v_0.get_query()["iObjType"] = objectType;
		$v_0.get_query()["iTotal"] = "1";
		$v_0.get_query()["sQType"] = "1";
		$v_0.get_query()["FromForm"] = "1";
		var $v_7 = [ objectType, $v_2 ], $v_8 = Mscrm.Utilities
				.createCallbackFunctionObject("assignObjectAction",
						Mscrm.FormAction, $v_7);
		$v_1 = openStdDlgWithCallback($v_0, [ $v_4 ], 500, 310, $v_8, true,
				false, null)
	} else {
		$v_2 = 47;
		$v_0 = Mscrm.CrmUri.create("/_grid/cmds/dlg_frmassign.aspx");
		$v_0.get_query()["pId"] = $v_4;
		$v_0.get_query()["pType"] = $get("crmFormSubmitObjectType").value;
		$v_0.get_query()["iObjType"] = objectType;
		$v_0.get_query()["iTotal"] = "1";
		var $v_9 = [ objectType, $v_2 ], $v_A = Mscrm.Utilities
				.createCallbackFunctionObject("assignObjectAction",
						Mscrm.FormAction, $v_9), $v_B = objectType !== Mscrm.EntityTypeCode.Workflow ? 260
				: 290;
		$v_1 = openStdDlgWithCallback($v_0, window.document, 456, $v_B, $v_A,
				true, false, null)
	}
	Mscrm.Utilities.isModalDialogSupported()
			&& Mscrm.FormAction.assignObjectAction($v_1, objectType, $v_2)
};
Mscrm.FormAction.assignObjectAction = function(returnValue, objectType,
		eventCode) {
	if (returnValue) {
		var $v_0 = returnValue["OwnerId"];
		if ($v_0) {
			var $v_1 = returnValue["OwnerType"], $v_2 = Mscrm.PostBackUtil
					.createHiddenInput("assignOwnerId", $v_0), $v_3 = Mscrm.PostBackUtil
					.createHiddenInput("assignOwnerType", $v_1), $v_4 = new LookupControlItem;
			$v_4.id = $v_0;
			$v_4.type = $v_1;
			$v_4.name = returnValue["OwnerName"];
			var $v_5 = [ $v_4 ], $v_6 = Mscrm.FormUtility
					.getCrmFormElement(objectType), $v_7 = Mscrm.FormControlInputBehavior
					.GetBehavior("ownerid");
			$v_7.set_dataValue($v_5);
			if (!$v_6.SubmitCrmForm(eventCode, true, true, false, false)) {
				Mscrm.PostBackUtil.deleteInput($v_2);
				Mscrm.PostBackUtil.deleteInput($v_3)
			}
		}
	}
};
Mscrm.FormAction.changeState = function(action, objectType, formEventId,
		objectSubType) {
	var $v_0 = $find("crmForm");
	if (!$v_0.IsValid(false))
		return;
	var $v_1 = [ action, formEventId, $v_0 ], $v_2 = Mscrm.Utilities
			.createCallbackFunctionObject("callbackArgumentFunc",
					Mscrm.FormAction, $v_1), $v_3 = Mscrm.FormAction
			.onActionMenuClick(action, objectType, objectSubType, $v_2);
	Mscrm.Utilities.isModalDialogSupported()
			&& Mscrm.FormAction.callbackArgumentFunc($v_3, action, formEventId,
					$v_0)
};
Mscrm.FormAction.callbackArgumentFunc = function(result, action, formEventId,
		crmForm) {
	if (result) {
		var $v_0 = result["iStateCode"], $v_1 = Mscrm.PostBackUtil
				.createHiddenInput("newStateCode", $v_0 ? $v_0.toString()
						: "-1"), $v_2 = result["iStatusCode"], $v_3 = Mscrm.PostBackUtil
				.createHiddenInput("newStatusCode", $v_2 ? $v_2.toString()
						: "-1");
		if (action === "deactivatecampactivity") {
			var $v_4 = result["iStartDate"];
			if (IsNull($v_4))
				$v_4 = "";
			Mscrm.PostBackUtil.createHiddenInput("acStartDate", $v_4);
			var $v_5 = result["iEndDate"];
			if (IsNull($v_5))
				$v_5 = "";
			Mscrm.PostBackUtil.createHiddenInput("acEndDate", $v_5)
		}
		if (!crmForm.SubmitCrmForm(formEventId, true, true, false, false)) {
			Mscrm.PostBackUtil.deleteInput($v_1);
			Mscrm.PostBackUtil.deleteInput($v_3)
		}
	}
};
Mscrm.FormAction.launchOnDemandWorkflowForm = function(objectType, workflowId) {
	var $v_0 = workflowId;
	if (isNullOrEmptyString($v_0)) {
		var $v_1 = [ objectType ], $v_2 = Mscrm.Utilities
				.createCallbackFunctionObject("setObjectIdAndRunWorkflow",
						Mscrm.FormAction, $v_1), $v_3 = LookupObjectsWithCallback(
				$v_2, null, "single", "4703", 0, null, "membertypecode="
						+ CrmEncodeDecode.CrmUrlEncode(objectType.toString()),
				0, 1, false, "", "", "",
				"45102185-B1B4-422B-A3BF-F1BA9C6E130A", null, null, null, null,
				null, null, null, null,
				"{45102185-B1B4-422B-A3BF-F1BA9C6E130A}");
		Mscrm.Utilities.isModalDialogSupported()
				&& Mscrm.FormAction.setObjectIdAndRunWorkflow($v_3, objectType);
		return
	}
	Mscrm.FormAction.runWorkflow($v_0, objectType)
};
Mscrm.FormAction.setObjectIdAndRunWorkflow = function(lookupItems, objectType) {
	var $v_0;
	if (IsNull(lookupItems) || !lookupItems.items.length)
		return;
	$v_0 = lookupItems.items[0].id;
	Mscrm.FormAction.runWorkflow($v_0, objectType);
	return
};
Mscrm.FormAction.runWorkflow = function(itemObjectId, objectType) {
	var $v_0 = Mscrm.FormAction.$1L(null), $v_1 = Mscrm.CrmUri
			.create("/_grid/cmds/dlg_runworkflow.aspx");
	$v_1.get_query()["iObjType"] = objectType;
	$v_1.get_query()["iTotal"] = "1";
	$v_1.get_query()["wfId"] = itemObjectId;
	$v_1.get_query()["sIds"] = $v_0 + ";";
	openStdDlg($v_1, [ $v_0 ], 500, 200, true, false, null)
};
Mscrm.FormAction.resolveCase = function(caseId, gridControl) {
	var $v_0 = Mscrm.CrmUri.create("/CS/cases/dlg_closecase.aspx"), $v_1 = false;
	$v_0.get_query()["pId"] = caseId;
	$v_0.get_query()["pType"] = Mscrm.EntityTypeCode.Incident;
	var $v_2 = [ gridControl ], $v_3 = Mscrm.Utilities
			.createCallbackFunctionObject("performActionAfterResolveCase",
					Mscrm.IncidentActions, $v_2), $v_4 = openStdDlgWithCallback(
			$v_0, window.document, 400, 365, $v_3);
	if (Mscrm.Utilities.isModalDialogSupported())
		$v_1 = Mscrm.FormAction
				.performActionAfterResolveCase($v_4, gridControl);
	return $v_1
};
Mscrm.FormAction.performActionAfterResolveCase = function(returnValue,
		gridControl) {
	var $v_0 = false;
	if (returnValue) {
		var $v_1 = new RemoteCommand("CustomerService", "ResolveCase");
		$v_1.SetParameter("activityXml", returnValue.ActivityXml);
		$v_1.SetParameter("newStatus", returnValue.StatusCode);
		var $v_2 = $v_1.Execute();
		$v_0 = $v_2.Success;
		gridControl && gridControl.refresh()
	}
	return $v_0
};
Mscrm.FormAction.runScript = function(objectTypeCode, entityName) {
	var $v_0 = Mscrm.FormAction.$1L(null), $v_1 = [ $v_0, entityName ], $v_2 = Mscrm.Utilities
			.createCallbackFunctionObject("runDialog", Mscrm.FormAction, $v_1), $v_3 = LookupObjectsWithCallback(
			$v_2, null, "single", "4703", 0, null, "membertypecode="
					+ CrmEncodeDecode.CrmUrlEncode(objectTypeCode.toString()),
			0, 0, false, "", "", "", "5DC43D17-D871-4470-B9D7-5B64AC2AF436",
			null, null, null, null, null, null, null, null,
			"{5DC43D17-D871-4470-B9D7-5B64AC2AF436}");
	Mscrm.Utilities.isModalDialogSupported()
			&& Mscrm.FormAction.runDialog($v_3, $v_0, entityName)
};
Mscrm.FormAction.runDialog = function(lookupItems, objectId, entityName) {
	if (!IsNull(lookupItems))
		if (0 !== lookupItems.items.length) {
			var $v_0 = lookupItems.items[0].id, $v_1 = Mscrm.CrmUri
					.create("/cs/dialog/rundialog.aspx");
			$v_1.get_query()["DialogId"] = $v_0;
			$v_1.get_query()["ObjectId"] = objectId;
			$v_1.get_query()["EntityName"] = entityName;
			openStdWin($v_1, buildWinName(null), 615, 480, null)
		}
};
Mscrm.FormAction.onActionMenuClick = function(action, objectType,
		objectSubtype, callbackArgumentRef) {
	var $v_0 = {};
	$v_0["action"] = action;
	$v_0["objectType"] = objectType;
	$v_0["objectSubtype"] = objectSubtype;
	$v_0["callbackArgumentRef"] = callbackArgumentRef;
	return Mscrm.FormAction.handleActionMenuClick($v_0)
};
Mscrm.FormAction.handleActionMenuClick = function(clickContext) {
	var $v_0 = null, $v_1 = null, $v_2 = null, $v_3 = null, $v_4 = null;
	if ("action" in clickContext)
		$v_0 = clickContext["action"];
	if ("objectType" in clickContext)
		$v_1 = clickContext["objectType"];
	if ("objectSubtype" in clickContext)
		$v_2 = clickContext["objectSubtype"];
	if ("callbackArgumentRef" in clickContext)
		$v_3 = clickContext["callbackArgumentRef"];
	if ("recordId" in clickContext)
		$v_4 = clickContext["recordId"];
	if (Mscrm.Utilities.isIosDevice() && "webmailmerge" === $v_0) {
		alert(window.LOCID_UNSUPPORTED_RIBBONACTION);
		return null
	}
	if (typeof $v_1 !== Mscrm.TypeNames.numberType)
		$v_1 = parseInt($v_1, 10);
	var $v_5 = 400, $v_6 = 200, $v_7 = false, $v_8 = false, $v_9 = true, $v_A = null, $v_B = null, $v_C = null, $v_D = null, $v_E = $find("crmForm"), $v_F = $get("crmFormSubmit"), $v_G = null;
	if (isNullOrEmptyString($v_4))
		if ($v_1 !== Mscrm.EntityTypeCode.WebResource)
			$v_G = Mscrm.FormAction.$1L($v_F);
		else
			$v_G = $get("crmFormSubmitId").value;
	else
		$v_G = $v_4;
	var $v_H = [ $v_G ], $v_I = Mscrm.CrmUri.create("/_grid/cmds/dlg_"
			+ CrmEncodeDecode.CrmUrlEncode($v_0) + ".aspx");
	$v_I.get_query()["iObjType"] = $v_1;
	$v_I.get_query()["iTotal"] = "1";
	$v_I.get_query()["sIds"] = $v_G;
	if (!IsNull($v_2))
		$v_I.get_query()["iObjSubType"] = $v_2;
	if (!$v_E
			&& ($v_1 === Mscrm.EntityTypeCode.Report || $v_1 === Mscrm.EntityTypeCode.WebResource))
		$v_E = $find("crmFormSubmit");
	switch ($v_0) {
	case "applyrule":
		$v_5 = 400;
		$v_6 = 275;
		break;
	case "approve_user":
	case "reject_user":
	case "approve_queue":
	case "reject_queue":
		$v_8 = true;
		break;
	case "assign":
		$v_5 = 456;
		$v_6 = 260;
		$v_7 = true;
		break;
	case "actsetrespon":
		$v_5 = 456;
		$v_6 = 310;
		break;
	case "changeorg":
		$v_5 = 400;
		$v_6 = 325;
		if ($v_1 === Mscrm.EntityTypeCode.SystemUser
				|| $v_1 === Mscrm.EntityTypeCode.Team)
			$v_8 = true;
		else
			$v_7 = true;
		break;
	case "changecaptain":
		$v_5 = 400;
		$v_6 = 225;
		$v_7 = true;
		break;
	case "changeparent":
		$v_5 = 400;
		$v_6 = 225;
		$v_8 = true;
		break;
	case "delete":
		$v_5 = 450;
		$v_6 = 205;
		!IsNull($v_E) && $v_1 !== Mscrm.EntityTypeCode.WebResource
				&& $v_E.detachCloseAlert();
		$v_7 = true;
		switch ($v_1) {
		case Mscrm.EntityTypeCode.Account:
			$v_I = Mscrm.CrmUri.create("/_grid/cmds/dlg_delete_account.aspx");
			$v_I.get_query()["iObjType"] = $v_1;
			$v_I.get_query()["iTotal"] = "1";
			$v_I.get_query()["sIds"] = $v_G;
			$v_C = [ $v_0, $v_1, $v_7, $v_8, $v_G, $v_E, $v_3 ];
			$v_D = Mscrm.Utilities.createCallbackFunctionObject(
					"performActionAfterSwitch", Mscrm.FormAction, $v_C);
			$v_A = openStdDlgWithCallback($v_I, $v_H, 450, 250, $v_D, true,
					false, null);
			$v_I = null;
			break;
		case Mscrm.EntityTypeCode.Calendar:
			var $v_J = $get("calendarid", $v_E.get_element());
			$v_I.get_query()["sCalendarId"] = $v_J.value;
			break;
		case Mscrm.EntityTypeCode.Contact:
			$v_I = Mscrm.CrmUri.create("/_grid/cmds/dlg_delete_contact.aspx");
			$v_I.get_query()["iObjType"] = $v_1;
			$v_I.get_query()["iTotal"] = "1";
			$v_I.get_query()["sIds"] = $v_G;
			$v_C = [ $v_0, $v_1, $v_7, $v_8, $v_G, $v_E, $v_3 ];
			$v_D = Mscrm.Utilities.createCallbackFunctionObject(
					"performActionAfterSwitch", Mscrm.FormAction, $v_C);
			$v_A = openStdDlgWithCallback($v_I, $v_H, 450, 250, $v_D, true,
					false, null);
			$v_I = null;
			break;
		case Mscrm.EntityTypeCode.OpportunityProduct:
		case Mscrm.EntityTypeCode.QuoteDetail:
		case Mscrm.EntityTypeCode.SalesOrderDetail:
		case Mscrm.EntityTypeCode.InvoiceDetail:
			var $v_K = "", $v_L = [], $v_M = window.opener;
			if ($v_M && !$v_M.closed) {
				var $v_P = $v_M.parent;
				$v_L[0] = $v_P;
				var $v_Q = $v_P.document.getElementById("crmFormSubmit");
				$v_K = Mscrm.FormAction.$1L($v_Q)
			} else
				$v_L[0] = null;
			$v_L[1] = $v_H;
			$v_I = Mscrm.CrmUri.create("/_grid/cmds/dlg_deleteqoiproduct.aspx");
			$v_I.get_query()["iObjType"] = $v_1;
			$v_I.get_query()["iTotal"] = $v_H.length;
			$v_I.get_query()["sParentId"] = $v_K;
			$v_C = [ $v_0, $v_1, $v_7, $v_8, $v_G, $v_E, $v_3 ];
			$v_D = Mscrm.Utilities.createCallbackFunctionObject(
					"performActionAfterSwitch", Mscrm.FormAction, $v_C);
			$v_A = openStdDlgWithCallback($v_I, $v_L, 450, 205, $v_D, true,
					false, null);
			$v_I = null;
			break;
		case Mscrm.EntityTypeCode.RecurringAppointmentMaster:
			$v_I = Mscrm.CrmUri
					.create("/activities/act_dlgs/dlg_seriesaction.aspx");
			$v_I.get_query()["actionType"] = "6";
			$v_I.get_query()["iTotal"] = "1";
			$v_I.get_query()["insDel"] = _seriesActive;
			$v_A = openStdDlg($v_I, $v_H, 570, 205, true, false, null);
			$v_A
					&& Mscrm.Utilities.refreshParentGrid(
							Mscrm.EntityTypeCode.Appointment, "", $v_G);
			$v_I = null;
			break;
		case Mscrm.EntityTypeCode.Appointment:
			var $v_N = $get("instancetypecode");
			if (!IsNull($v_N) && $v_N.value !== "0" && $v_N.value !== "1") {
				$v_I = Mscrm.CrmUri
						.create("/activities/act_dlgs/dlg_seriesaction.aspx");
				$v_I.get_query()["actionType"] = "5";
				$v_I.get_query()["iTotal"] = "1";
				$v_I.get_query()["eId"] = $v_G;
				$v_A = openStdDlg($v_I, $v_H, 350, 250, true, false, null);
				$v_A
						&& Mscrm.Utilities.refreshParentGrid(
								Mscrm.EntityTypeCode.Appointment, "", $v_G);
				$v_I = null
			}
			break;
		case Mscrm.EntityTypeCode.Queue:
			$v_I = Mscrm.CrmUri.create("/_grid/cmds/dlg_delete_queue.aspx");
			$v_I.get_query()["iObjType"] = $v_1;
			$v_I.get_query()["iTotal"] = "1";
			$v_I.get_query()["sIds"] = $v_G + ";";
			$v_C = [ $v_0, $v_1, $v_7, $v_8, $v_G, $v_E, $v_3 ];
			$v_D = Mscrm.Utilities.createCallbackFunctionObject(
					"performActionAfterSwitch", Mscrm.FormAction, $v_C);
			$v_A = openStdDlgWithCallback($v_I, $v_H, $v_5, $v_6, $v_D, $v_9,
					false, null);
			$v_I = null;
			break;
		case Mscrm.EntityTypeCode.SharePointSite:
			$v_I = Mscrm.CrmUri
					.create("/_grid/cmds/dlg_delete_sharepointsite.aspx");
			$v_I.get_query()["iObjType"] = $v_1;
			$v_I.get_query()["iTotal"] = "1";
			$v_A = openStdDlg($v_I, $v_H, $v_5, $v_6, $v_9, false, null);
			$v_I = null;
			break;
		case Mscrm.EntityTypeCode.Workflow:
			$v_I.get_query()["sIds"] = $v_G;
			break
		}
		break;
	case "addtoqueue":
		delete $v_I.get_query().sIds;
		$v_A = openStdDlg($v_I, $v_H, $v_5, $v_6, true, false, null);
		$v_I = null;
		break;
	case "activate":
	case "deactivate":
		if ($v_1 === Mscrm.EntityTypeCode.Goal && $v_0 === "deactivate") {
			var $v_R = new RemoteCommand("GoalManagement",
					"GoalHasActiveChildGoals");
			$v_R.SetParameter("goalId", $v_G);
			var $v_S = $v_R.Execute();
			if ($v_S.Success)
				if ($v_S.ReturnValue)
					if (!confirm(window.LOCID_ACTIVE_CHILD_MSG))
						return null
		}
		if ($v_1 === Mscrm.EntityTypeCode.Workflow)
			if ($v_I.get_query()["iObjSubType"])
				$v_I.get_query()["iObjSubType"] = Mscrm.FormAction.$5Z();
		if ($v_1 !== Mscrm.EntityTypeCode.ConnectionRole)
			$v_I.get_query()["confirmMode"] = "1";
		else
			$v_8 = true;
		$v_6 = 250;
		$v_5 = 420;
		break;
	case "deactivatecampactivity":
		$v_I.get_query()["confirmMode"] = "1";
		$v_6 = 260;
		$v_5 = 350;
		break;
	case "role":
		$v_5 = 500;
		$v_6 = 335;
		break;
	case "share":
		$v_5 = 800;
		$v_6 = 480;
		break;
	case "grant":
		$v_5 = 900;
		$v_6 = 480;
		break;
	case "status":
		$v_5 = 456;
		$v_6 = 250;
		break;
	case "webmailmerge":
		$v_5 = 600;
		$v_6 = 500;
		var $v_O = {};
		$v_O["TotalRecords"] = 1;
		$v_O["SelectedRecords"] = 1;
		$v_O["Ids"] = $v_G;
		$v_O["GridXml"] = "";
		$v_I = Mscrm.CrmUri.create("/_grid/cmds/dlg_webmailmerge.aspx");
		$v_I.get_query()["objectTypeCode"] = $v_1;
		$v_C = [ $v_0, $v_1, $v_7, $v_8, $v_G, $v_E, $v_3 ];
		$v_D = Mscrm.Utilities.createCallbackFunctionObject(
				"performActionAfterSwitch", Mscrm.FormAction, $v_C);
		$v_A = openStdDlgWithCallback($v_I, $v_O, $v_5, $v_6, $v_D, $v_9,
				false, null);
		$v_I = null;
		break
	}
	if (Mscrm.Utilities.isModalDialogSupported() || !$v_D)
		$v_B = Mscrm.FormAction.callbackFunction($v_A, $v_I, $v_0, $v_1, $v_H,
				$v_5, $v_6, $v_7, $v_8, $v_9, $v_G, $v_E, $v_3);
	return $v_B
};
Mscrm.FormAction.callbackFunction = function(result, url, action, objectType,
		ids, width, height, close, reload, resize, id, crmForm,
		callbackArgumentRef) {
	if (!IsNull(url)) {
		var $v_0 = null;
		$v_0 = [ action, objectType, close, reload, id, crmForm,
				callbackArgumentRef ];
		var $v_1 = Mscrm.Utilities.createCallbackFunctionObject(
				"performActionAfterSwitch", Mscrm.FormAction, $v_0);
		result = openStdDlgWithCallback(url, ids, width, height, $v_1, resize,
				false, null)
	}
	if (Mscrm.Utilities.isModalDialogSupported())
		return Mscrm.FormAction.performActionAfterSwitch(result, action,
				objectType, close, reload, id, crmForm, callbackArgumentRef);
	return result
};
Mscrm.FormAction.performActionAfterSwitch = function(result, action,
		objectType, close, reload, id, crmForm, callbackArgumentRef) {
	if (result && close) {
		!Mscrm.Utilities.isIosDevice()
				&& Mscrm.Utilities.refreshParentGrid(objectType, "", id);
		if (action === "delete") {
			var $v_0 = crmForm;
			if (!IsNull($v_0))
				$v_0.recordDeleted();
			else
				typeof Mscrm.ReadFormUtilities !== "undefined"
						&& typeof Mscrm.ReadFormUtilities.set_forceNavigationAway !== "undefined"
						&& Mscrm.ReadFormUtilities
								.set_forceNavigationAway(true);
			Mscrm.Utilities.isIosDevice() && window.top.focus()
		}
		Mscrm.Utilities.closeCurrentWindow();
		Mscrm.Utilities.isIosDevice()
				&& Mscrm.Utilities.refreshParentGrid(objectType, "", id)
	} else if (result && reload) {
		crmForm.SubmitCrmForm(4, true, true, false, false);
		Mscrm.Utilities.refreshParentGrid(objectType, "", id)
	}
	Mscrm.Utilities.executeFunctionIfModeless(callbackArgumentRef, result);
	return result
};
Mscrm.FormAction.sendFormShortcut = function(isThroughEmail, entityTitle,
		recordId) {
	var $v_0 = Mscrm.CrmUri.create(window.location.href);
	if (Mscrm.SessionInfo.isOutlookLaptopClient()
			&& !Mscrm.SessionInfo.isOnline()) {
		var $v_2 = window.location.href, $v_3 = window.location.pathname;
		$v_0 = Mscrm.CrmUri.create(Mscrm.Help.concatenateUrl(
				window.WEB_APP_URL, $v_2.substr($v_2.indexOf($v_3))));
		$v_0.set_useOrganizationName(false)
	}
	if (!Mscrm.Utilities.isNewPageModel($v_0))
		$v_0 = Mscrm.Utilities.removeExtraQSParameters($v_0, Mscrm.Utilities
				.getRecordPageQueryStringParams());
	else {
		$v_0 = Mscrm.Utilities.getPageUrl($v_0, "entityrecord");
		delete $v_0.get_query().pagemode;
		if (!IsNull(recordId))
			$v_0.get_query()["id"] = recordId;
		delete $v_0.get_query().extraqs;
		var $v_4 = $find("crmFormSelector");
		if ($v_4)
			$v_0.get_query()["extraqs"] = "formid="
					+ CrmEncodeDecode.CrmUrlEncode($v_4.$q_3)
	}
	var $v_1 = new Sys.StringBuilder;
	$v_1.append(entityTitle);
	$v_1.append("\r\n" + (Mscrm.Utilities.isIosDevice() ? "[" : "<"));
	$v_1.append($v_0.toString());
	$v_1.append(Mscrm.Utilities.isIosDevice() ? "]" : ">");
	if (!isThroughEmail)
		Mscrm.Shortcuts.copyTextToClipboard($v_1.toString(), "",
				window.LOCID_COPY_SHORTCUT_ERROR);
	else
		Mscrm.Shortcuts.openEmailForm("", entityTitle, $v_1.toString())
};
Mscrm.FormAction.openRecordInNewWindow = function(objectType, formControl) {
	if (typeof objectType !== Mscrm.TypeNames.numberType)
		objectType = parseInt(objectType, 10);
	var $v_0 = $get("crmFormSubmit"), $v_1 = Mscrm.FormAction.$1L($v_0), $v_2 = {};
	$v_2["etc"] = objectType;
	$v_2["id"] = $v_1;
	$v_2["pagetype"] = "entityrecord";
	$v_2["newWindow"] = true;
	if (!IsNull($v_1) && $v_1 !== "" && !IsNull(objectType)) {
		var $v_3 = "?_CreateFromType="
				+ CrmEncodeDecode.CrmUrlEncode(objectType.toString())
				+ "&_CreateFromId=" + CrmEncodeDecode.CrmUrlEncode($v_1);
		$v_2["queryString"] = $v_3
	}
	formControl.raiseEvent(Mscrm.ScriptEvents.NavigateRequest, $v_2)
};
Mscrm.FormAction.$1L = function($p0) {
	if (IsNull($p0))
		$p0 = $get("crmFormSubmit");
	return $get("crmFormSubmitId", $p0).value
};
Mscrm.FormAction.$5Z = function() {
	var $v_0 = 1, $v_1 = 3, $v_2 = $get("type");
	return $v_2.options[$v_2.selectedIndex].value === "1" ? $v_0 : $v_1
};
Mscrm.FormControl = function(element) {
	this.$$d_$5h_3 = Function.createDelegate(this, this.$5h_3);
	this.$$d_$5i_3 = Function.createDelegate(this, this.$5i_3);
	this.$$d_$7B_3 = Function.createDelegate(this, this.$7B_3);
	this.$$d_$4X_3 = Function.createDelegate(this, this.$4X_3);
	this.$$d_$55_3 = Function.createDelegate(this, this.$55_3);
	this.$$d_$59_3 = Function.createDelegate(this, this.$59_3);
	this.$$d_$5u_3 = Function.createDelegate(this, this.$5u_3);
	this.$$d_$6K_3 = Function.createDelegate(this, this.$6K_3);
	this.$$d_Close = Function.createDelegate(this, this.Close);
	this.$$d_$6M_3 = Function.createDelegate(this, this.$6M_3);
	this.$$d_$7A_3 = Function.createDelegate(this, this.$7A_3);
	this.$$d_$78_3 = Function.createDelegate(this, this.$78_3);
	this.$$d_$7W_3 = Function.createDelegate(this, this.$7W_3);
	this.$$d_$7V_3 = Function.createDelegate(this, this.$7V_3);
	this.$$d_$70_3 = Function.createDelegate(this, this.$70_3);
	this.$$d_$71_3 = Function.createDelegate(this, this.$71_3);
	this.$$d_$5E_3 = Function.createDelegate(this, this.$5E_3);
	this.$$d_$72_3 = Function.createDelegate(this, this.$72_3);
	this.$$d_$4z_3 = Function.createDelegate(this, this.$4z_3);
	this.$$d_$6z_3 = Function.createDelegate(this, this.$6z_3);
	this.$$d_saveAndNavigate = Function.createDelegate(this,
			this.saveAndNavigate);
	this.$$d_$6s_3 = Function.createDelegate(this, this.$6s_3);
	this.$$d_$6q_3 = Function.createDelegate(this, this.$6q_3);
	this.$$d_$6p_3 = Function.createDelegate(this, this.$6p_3);
	this.$$d_$6r_3 = Function.createDelegate(this, this.$6r_3);
	this.$$d_$6o_3 = Function.createDelegate(this, this.$6o_3);
	this.$$d_$6k_3 = Function.createDelegate(this, this.$6k_3);
	this.$$d_$6m_3 = Function.createDelegate(this, this.$6m_3);
	this.$$d_$6l_3 = Function.createDelegate(this, this.$6l_3);
	this.$$d_$6j_3 = Function.createDelegate(this, this.$6j_3);
	this.$$d_$6n_3 = Function.createDelegate(this, this.$6n_3);
	this.$$d_$6y_3 = Function.createDelegate(this, this.$6y_3);
	this.$$d_$6u_3 = Function.createDelegate(this, this.$6u_3);
	this.$$d_$6w_3 = Function.createDelegate(this, this.$6w_3);
	this.$$d_$6v_3 = Function.createDelegate(this, this.$6v_3);
	this.$$d_$6t_3 = Function.createDelegate(this, this.$6t_3);
	this.$$d_$6x_3 = Function.createDelegate(this, this.$6x_3);
	this.$$d_$68_3 = Function.createDelegate(this, this.$68_3);
	this.$$d_$63_3 = Function.createDelegate(this, this.$63_3);
	this.$$d_setFirstElementFocus = Function.createDelegate(this,
			this.setFirstElementFocus);
	this.$$d_$4l_3 = Function.createDelegate(this, this.$4l_3);
	this.$$d_$6Z_3 = Function.createDelegate(this, this.$6Z_3);
	this.$1I_3 = [];
	this.$1C_3 = [];
	this.$25_3 = [];
	this.$1Y_3 = {};
	this.$1X_3 = {};
	this.$1o_3 = Mscrm.FormControl.$1M;
	this.$1p_3 = Mscrm.FormControl.$2m;
	this.$r_3 = Mscrm.FormControl.$2m;
	Mscrm.FormControl.initializeBase(this, [ element ]);
	this.$16_3 = this.$$d_$6Z_3;
	if (Sys.Browser.agent === Sys.Browser.InternetExplorer)
		$addHandler(this.get_element(), "focusin", this.$16_3);
	else if (!window.UseTabletExperience)
		this.get_element().addEventListener("focus", this.$16_3, true);
	else
		this.get_element().addEventListener("touchstart", this.$16_3, true);
	window.setTimeout(this.$$d_$4l_3, 0)
};
Mscrm.FormControl.$5O = function($p0, $p1, $p2, $p3) {
	var $v_0 = "", $v_1 = window.ORG_FULLNAME_FORMAT;
	switch ($v_1) {
	case 0:
		if ($p1.length)
			$v_0 = String.format("{0}, {1}", $p1, $p0);
		else
			$v_0 = $p0;
		break;
	case 1:
		$v_0 = String.format("{0} {1}", $p0, $p1);
		break;
	case 2:
		if ($p1.length)
			$v_0 = String.format("{0}, {1} {2}", $p1, $p0, $p3);
		else
			$v_0 = String.format("{0} {1}", $p0, $p3);
		break;
	case 3:
		$v_0 = String.format("{0} {1} {2}", $p0, $p3, $p1);
		break;
	case 4:
		if ($p1.length)
			$v_0 = String.format("{0}, {1} {2}", $p1, $p0, $p2);
		else
			$v_0 = String.format("{0} {1}", $p0, $p2);
		break;
	case 5:
		$v_0 = String.format("{0} {1} {2}", $p0, $p2, $p1);
		break;
	case 6:
		$v_0 = String.format("{0} {1}", $p1, $p0);
		break;
	case 7:
		$v_0 = String.format("{0}{1}", $p1, $p0);
		break
	}
	$v_0 = Mscrm.Utilities.trimSpaces($v_0);
	return Mscrm.Utilities.trimEnd($v_0, [ "," ])
};
Mscrm.FormControl.$8 = function($p0, $p1) {
	switch ($p0) {
	case 0:
		return String.format(Mscrm.RecordSetNavigation.RecordsMask, $p1);
	case 1:
		return String.format(Mscrm.RecordSetNavigation.MoreRecordsMask, $p1);
	case 2:
		return String.format(Mscrm.RecordSetNavigation.GridXmlMask, $p1);
	case 3:
		return String.format(Mscrm.RecordSetNavigation.RemoteCommandMask, $p1);
	case 4:
		return String.format(Mscrm.RecordSetNavigation.RefreshDataMask, $p1);
	default:
		break
	}
	return ""
};
Mscrm.FormControl.getHttpPostBody = function(formElement) {
	for ( var $v_0 = formElement.getElementsByTagName("input"), $v_1 = Mscrm.CrmUri
			.create(""), $v_3 = 0; $v_3 < $v_0.length; $v_3++) {
		var $v_4 = $v_0[$v_3].getAttribute("name"), $v_5 = $v_0[$v_3]
				.getAttribute("value");
		if (isNullOrEmptyString($v_4))
			continue;
		$v_1.setQueryParameter($v_4, $v_5)
	}
	var $v_2 = $v_1.get_queryString();
	return $v_2.substring(1, $v_2.length)
};
Mscrm.FormControl.prototype = {
	$1a_3 : false,
	$b_3 : null,
	$3B_3 : "crmFormSubmit",
	$z_3 : false,
	$2o_3 : false,
	$1z_3 : true,
	$2r_3 : true,
	$2a_3 : 0,
	$2q_3 : false,
	$2u_3 : false,
	$2F_3 : true,
	$2I_3 : null,
	$2N_3 : null,
	$2L_3 : null,
	$2O_3 : null,
	$2K_3 : null,
	$2M_3 : null,
	$2J_3 : null,
	$11_3 : null,
	$3X_3 : 0,
	$16_3 : null,
	confirmDialogHeight : 0,
	confirmDialogWidth : 0,
	entityTitle : null,
	entityDisplayName : null,
	pageTitle : null,
	openActionTitle : null,
	openInNewWindowActionTitle : null,
	copyShortcutActionTitle : null,
	sendShortcutActionTitle : null,
	initialize : function() {
		Mscrm.CrmUIControl.prototype.initialize.call(this);
		this.$7a_3();
		if (!IsNull(this.get_eventManager())) {
			this.get_eventManager().subscribeEvent(
					Mscrm.ScriptEvents.NavigateConfirm, this.get_id());
			this.get_eventManager().subscribeEvent(
					Mscrm.ScriptEvents.GetPageInfo, this.get_id())
		}
		setPageTitle(this.pageTitle);
		if (IsNull(Mscrm.PageManager.get_instance()))
			window.setTimeout(this.$$d_setFirstElementFocus, 0);
		else {
			!this.get_isNew()
					&& executeFunctionDeferred(this.$$d_$63_3, false, false);
			executeFunctionDeferred(this.$$d_setFirstElementFocus, false, false)
		}
	},
	openAdvancedFind : function() {
		var $v_0 = Mscrm.CrmUri.create("/AdvancedFind/AdvFind.aspx");
		$v_0.get_query()["EntityCode"] = this.get_entityTypeCode();
		openStdWin($v_0, "_blank", 700, 600, null)
	},
	$63_3 : function() {
		var $v_0 = {}, $v_1 = this.$$d_$68_3;
		$v_0["cacheInitializedCallback"] = $v_1;
		this.raiseEvent(Mscrm.ScriptEvents.CacheInitializedCallback, $v_0)
	},
	dispose : function() {
		if (this.get_isDisposed())
			return;
		if (!IsNull(this.$16_3))
			if (Sys.Browser.agent === Sys.Browser.InternetExplorer)
				$removeHandler(this.get_element(), "focusin", this.$16_3);
			else
				this.get_element().removeEventListener("focus", this.$16_3,
						true);
		this.$4y_3();
		this.$7Z_3();
		this.$2I_3 = null;
		this.$2N_3 = null;
		this.$2L_3 = null;
		this.$2O_3 = null;
		this.$2K_3 = null;
		this.$2M_3 = null;
		this.$2J_3 = null;
		this.$D_3 = null;
		this.$e_3 = null;
		this.$1T_3 = null;
		this.$2U_3 = null;
		this.$9_3 = null;
		this.$C_3 = null;
		this.$b_3 = null;
		Mscrm.CrmUIControl.prototype.dispose.call(this)
	},
	$4y_3 : function() {
		!IsNull(this.$C_3) && $clearHandlers(this.$C_3);
		!IsNull(this.$D_3) && $clearHandlers(this.$D_3);
		!IsNull(this.$9_3) && $clearHandlers(this.$9_3)
	},
	handleEvent : function(eventCode, parameters, sourceComponent) {
		switch (eventCode) {
		case Mscrm.ScriptEvents.NavigateConfirm:
			return this.$5p_3(parameters);
		case Mscrm.ScriptEvents.GetPageInfo:
			return this.$5g_3(parameters)
		}
		return null
	},
	$4l_3 : function() {
		if (this.get_isDisposed())
			return;
		this.$3y_3();
		this.$5J_3();
		this.$4X_3()
	},
	$6Z_3 : function($p0) {
		var $v_0 = $p0;
		if (IsNull($v_0.rawEvent))
			$v_0 = Mscrm.Utilities.eventToDomEvent($p0);
		var $v_1 = $p0.target, $v_2 = null;
		if ($v_1.className !== "ms-crm-InlineTabContainer") {
			while ($v_1 !== this.get_element() && IsNull($v_2)) {
				var $v_4 = $find($v_1.id);
				if (!IsNull($v_4))
					if (Mscrm.IRibbonSelectionControl.isInstanceOfType($v_4))
						$v_2 = $v_4;
					else if (Mscrm.IRibbonSelectionControlProxy
							.isInstanceOfType($v_4))
						$v_2 = $v_4.get_selectionControl();
				$v_1 = $v_1.parentNode
			}
			var $v_3 = {};
			$v_3["selectedControl"] = $v_2;
			this.raiseEventWithCheck(
					Mscrm.ScriptEvents.SetRibbonSelectedControl, $v_3)
		}
	},
	$D_3 : null,
	$e_3 : null,
	$1T_3 : null,
	$2U_3 : null,
	$9_3 : null,
	$C_3 : null,
	$7O_3 : function() {
		this.$7L_3();
		this.$7K_3();
		this.$7J_3()
	},
	$S_3 : function($p0) {
		var $v_0 = "";
		switch ($p0) {
		case "recnav-dropdown-disabled":
		case "recnav-dropdown-rest":
		case "recnav-down-disabled":
		case "recnav-down-rest":
		case "recnav-up-disabled":
		case "recnav-up-rest":
			$v_0 = "ms-crm-recnav-default";
			break;
		case "recnav-dropdown-hover":
		case "recnav-down-hover":
		case "recnav-up-hover":
			$v_0 = "ms-crm-recnav-hover";
			break;
		case "recnav-dropdown-selected":
		case "recnav-down-selected":
		case "recnav-up-selected":
			$v_0 = "ms-crm-recnav-selected";
			break;
		default:
			return $p0
		}
		return $v_0
	},
	$7K_3 : function() {
		var $v_0 = XUI.Html.DomUtils.GetFirstChild(this.$9_3);
		this.$9_3.className = "recnav-up " + this.$S_3("recnav-up-disabled");
		Mscrm.ImageStrip.changeImage($v_0, "/_imgs/recnav/Up_Disabled.png")
	},
	$3U_3 : function() {
		var $v_0 = XUI.Html.DomUtils.GetFirstChild(this.$9_3);
		this.$9_3.className = "recnav-up " + this.$S_3("recnav-up-rest");
		Mscrm.ImageStrip.changeImage($v_0, "/_imgs/recnav/Up_Enabled.png")
	},
	$4f_3 : function() {
		var $v_0 = XUI.Html.DomUtils.GetFirstChild(this.$9_3);
		this.$9_3.className = "recnav-up " + this.$S_3("recnav-up-hover");
		Mscrm.ImageStrip.changeImage($v_0, "/_imgs/recnav/Up_Enabled.png")
	},
	$7J_3 : function() {
		var $v_0 = XUI.Html.DomUtils.GetFirstChild(this.$C_3);
		this.$C_3.className = "recnav-down "
				+ this.$S_3("recnav-down-disabled");
		Mscrm.ImageStrip.changeImage($v_0, "/_imgs/recnav/Down_Disabled.png")
	},
	$3T_3 : function() {
		var $v_0 = XUI.Html.DomUtils.GetFirstChild(this.$C_3);
		this.$C_3.className = "recnav-down " + this.$S_3("recnav-down-rest");
		Mscrm.ImageStrip.changeImage($v_0, "/_imgs/recnav/Down_Enabled.png")
	},
	$4e_3 : function() {
		var $v_0 = XUI.Html.DomUtils.GetFirstChild(this.$C_3);
		this.$C_3.className = "recnav-down " + this.$S_3("recnav-down-hover");
		Mscrm.ImageStrip.changeImage($v_0, "/_imgs/recnav/Down_Enabled.png")
	},
	$7L_3 : function() {
		this.$D_3.className = "recnav-dropdown "
				+ this.$S_3("recnav-dropdown-disabled");
		Mscrm.ImageStrip.changeImage(this.$1T_3,
				"/_imgs/recnav/disabled_arrow.png");
		this.$e_3.className = "recnav-dropdown recnav-dropdown-disabled"
	},
	$3V_3 : function() {
		this.$D_3.className = "recnav-dropdown "
				+ this.$S_3("recnav-dropdown-rest");
		Mscrm.ImageStrip.changeImage(this.$1T_3,
				"/_imgs/recnav/enabled_arrow.png");
		this.$e_3.className = "recnav-dropdown recnav-dropdown-rest "
				+ this.$S_3("recnav-dropdown-rest")
	},
	$7M_3 : function() {
		this.$D_3.className = "recnav-dropdown "
				+ this.$S_3("recnav-dropdown-hover");
		Mscrm.ImageStrip.changeImage(this.$1T_3,
				"/_imgs/recnav/enabled_arrow.png");
		this.$e_3.className = "recnav-dropdown recnav-dropdown-hover "
				+ this.$S_3("recnav-dropdown-hover")
	},
	$7N_3 : function() {
		this.$D_3.className = "recnav-dropdown "
				+ this.$S_3("recnav-dropdown-selected");
		Mscrm.ImageStrip.changeImage(this.$1T_3,
				"/_imgs/recnav/enabled_arrow.png");
		this.$e_3.className = "recnav-dropdown recnav-dropdown-selected "
				+ this.$S_3("recnav-dropdown-selected")
	},
	$4S_3 : 142,
	$68_3 : function() {
		this.$10_3();
		var $v_0 = $get("recordSetToolBar");
		if (IsNull($v_0))
			return;
		this.$D_3 = XUI.Html.DomUtils.GetFirstChild($v_0);
		this.$e_3 = XUI.Html.DomUtils.GetFirstChild(this.$D_3);
		this.$1T_3 = XUI.Html.DomUtils.GetNextSibling(this.$e_3);
		this.$9_3 = XUI.Html.DomUtils.GetNextSibling(this.$D_3);
		this.$2U_3 = this.$9_3;
		this.$C_3 = XUI.Html.DomUtils.GetNextSibling(this.$9_3);
		this.$7O_3();
		var $v_1 = this.$e_3.scrollWidth;
		$v_1 = $v_1 < this.$4S_3 ? $v_1 : this.$4S_3;
		this.$e_3.style.width = $v_1.toString() + "px";
		if (this.$B_3) {
			if (this.get_$5y_3()) {
				this.$9_3.tabIndex = 0;
				this.$3U_3();
				$addHandler(this.$9_3, "mouseover", this.$$d_$6x_3);
				$addHandler(this.$9_3, "mouseout", this.$$d_$6t_3);
				$addHandler(this.$9_3, "focusin", this.$$d_$6v_3);
				$addHandler(this.$9_3, "focusout", this.$$d_$6w_3);
				$addHandler(this.$9_3, "click", this.$$d_$6u_3);
				$addHandler(this.$9_3, "keydown", this.$$d_$6y_3)
			}
			if (this.get_$5x_3()) {
				this.$C_3.tabIndex = 0;
				this.$3T_3();
				$addHandler(this.$C_3, "mouseover", this.$$d_$6n_3);
				$addHandler(this.$C_3, "mouseout", this.$$d_$6j_3);
				$addHandler(this.$C_3, "focusin", this.$$d_$6l_3);
				$addHandler(this.$C_3, "focusout", this.$$d_$6m_3);
				$addHandler(this.$C_3, "click", this.$$d_$6k_3);
				$addHandler(this.$C_3, "keydown", this.$$d_$6o_3)
			}
			this.$D_3.tabIndex = 0;
			this.$3V_3();
			$addHandler(this.$D_3, "mouseover", this.$$d_$6r_3);
			$addHandler(this.$D_3, "mouseout", this.$$d_$6p_3);
			$addHandler(this.$D_3, "focusin", this.$$d_$6r_3);
			$addHandler(this.$D_3, "focusout", this.$$d_$6p_3);
			$addHandler(this.$D_3, "click", this.$$d_$6q_3);
			$addHandler(this.$D_3, "keydown", this.$$d_$6s_3)
		}
	},
	$6r_3 : function($p0) {
		if (!this.$2V_3) {
			$p0.stopPropagation();
			this.$7M_3()
		}
	},
	$6p_3 : function($p0) {
		if (!this.$2V_3) {
			$p0.stopPropagation();
			this.$3V_3()
		}
	},
	$6q_3 : function($p0) {
		if (!$p0.button) {
			$p0.stopPropagation();
			this.$4U_3()
		}
	},
	$6s_3 : function($p0) {
		if ($p0.keyCode === 13 || $p0.keyCode === 32) {
			$p0.stopPropagation();
			this.$4U_3()
		}
	},
	$3H_3 : function() {
		var $v_0 = Mscrm.Utilities.getXYPos(this.$2U_3,
				window.LOCID_UI_DIR === "RTL");
		$v_0["y"] = $v_0["y"] + this.$2U_3.offsetHeight;
		return $v_0
	},
	$2V_3 : false,
	$4U_3 : function() {
		this.$2V_3 = true;
		this.$7N_3();
		this.showRecordSelector(this.$3H_3())
	},
	$70_3 : function($p0) {
		this.$2V_3 = false;
		this.$3V_3()
	},
	$6x_3 : function($p0) {
		$p0.stopPropagation();
		this.$4f_3()
	},
	$6t_3 : function($p0) {
		$p0.stopPropagation();
		this.$3U_3()
	},
	$6v_3 : function($p0) {
		$p0.stopPropagation();
		this.$4f_3()
	},
	$6w_3 : function($p0) {
		$p0.stopPropagation();
		this.$3U_3()
	},
	$6u_3 : function($p0) {
		$p0.stopPropagation();
		!$p0.button && this.previousRecord()
	},
	$6y_3 : function($p0) {
		$p0.stopPropagation();
		($p0.keyCode === 13 || $p0.keyCode === 32) && this.previousRecord()
	},
	$6n_3 : function($p0) {
		$p0.stopPropagation();
		this.$4e_3()
	},
	$6j_3 : function($p0) {
		$p0.stopPropagation();
		this.$3T_3()
	},
	$6l_3 : function($p0) {
		$p0.stopPropagation();
		this.$4e_3()
	},
	$6m_3 : function($p0) {
		$p0.stopPropagation();
		this.$3T_3()
	},
	$6k_3 : function($p0) {
		$p0.stopPropagation();
		!$p0.button && this.nextRecord()
	},
	$6o_3 : function($p0) {
		$p0.stopPropagation();
		($p0.keyCode === 13 || $p0.keyCode === 32) && this.nextRecord()
	},
	$5p_3 : function($p0) {
		var $v_0 = true;
		if (this.CheckFormDirty() && this.CloseAlertAttached()) {
			$v_0 = false;
			var $v_1 = [ $p0 ], $v_2 = Mscrm.Utilities
					.createCallbackFunctionObject(
							"performActionAfterNavigateConfirm", this, $v_1), $v_3 = openStdDlgWithCallback(
					Mscrm.CrmUri.create("/_forms/dlg_navigateconfirm.aspx"),
					$p0, this.confirmDialogWidth, this.confirmDialogHeight,
					$v_2, true, false, null);
			if (Mscrm.Utilities.isModalDialogSupported())
				$v_0 = this.performActionAfterNavigateConfirm($v_3, $p0)
		}
		return $v_0
	},
	performActionAfterNavigateConfirm : function(returnValue, parameters) {
		var $v_0 = false;
		switch (returnValue) {
		case 0:
			$v_0 = false;
			this.$11_3 = parameters;
			this.$3X_3 = 0;
			window.setTimeout(this.$$d_saveAndNavigate, 1);
			break;
		case 1:
			this.detachCloseAlert();
			$v_0 = true;
			!IsNull(parameters["callbackForNavigate"])
					&& Mscrm.Utilities.executeFunctionIfModeless(
							parameters["callbackForNavigate"], parameters);
			break;
		case 2:
			if (!IsNull(parameters["windowClosing"])
					&& parameters["windowClosing"]) {
				$v_0 = false;
				break
			}
			$v_0 = false;
			var $v_1 = {};
			$v_1["newWindow"] = true;
			var $v_2 = Mscrm.CrmUri.create(parameters["uri"]);
			delete $v_2.get_query().pagemode;
			$v_1["uri"] = $v_2.toString();
			this.raiseEvent(Mscrm.ScriptEvents.NavigateRequest, $v_1);
			break
		}
		return $v_0
	},
	saveAndNavigate : function() {
		if (this.get_eventManager().isEventing()) {
			if (this.$3X_3 >= 1e3) {
				openErrorDlg("0x80700000", null, null, 0, 0);
				this.$11_3 = null;
				return
			}
			this.$3X_3 += 25;
			window.setTimeout(this.$$d_saveAndNavigate, 25);
			return
		}
		this.$11_3["isCommand"] = true;
		if (!IsNull(this.$11_3["windowClosing"]) && this.$11_3["windowClosing"])
			this.$11_3["eventCode"] = Mscrm.ScriptEvents.NavigateClose;
		else
			this.$11_3["eventCode"] = Mscrm.ScriptEvents.NavigateRequest;
		var $v_0 = {};
		$v_0["data"] = this.$11_3;
		var $v_1 = this.raiseEvent(Mscrm.ScriptEvents.InsertCacheData, $v_0);
		this.$1z_3 = false;
		this.SetDeferredCmdId($v_1[0]);
		this.Save()
	},
	pagingMask : null,
	viewPrefix : null,
	firstPageToolTip : null,
	previousPageToolTip : null,
	nextPageToolTip : null,
	$37_3 : null,
	get_$1m_3 : function() {
		if (IsNull(this.$37_3))
			this.$37_3 = this.$$d_$6z_3;
		return this.$37_3
	},
	$5V_3 : function() {
		var $v_0 = document.createElement("DIV");
		$v_0.className = "ms-crm-RecordSelector-Header";
		var $v_1 = this.get_$0_3()[Mscrm.RecordSetNavigation.ViewName], $v_2 = this
				.get_$0_3()[Mscrm.RecordSetNavigation.DisplayFieldLabel];
		$v_0.innerHTML = String
				.format(
						"\r\n\t\t<div class='ms-crm-RS-Header-Title'>\r\n\t\t\t\t<nobr class='ms-crm-RS-Header-Title' title='{1}'>{0}&nbsp</nobr><nobr class='ms-crm-RS-Header-Title-Value'>{1}</nobr>\r\n\t\t</div>\r\n\t\t<div class='ms-crm-RS-Column-Title'>\r\n\t\t\t<nobr class='ms-crm-RS-Column-Title' title='{2}'>{2}</nobr>\r\n\t\t</div>\r\n\t\t",
						this.viewPrefix, CrmEncodeDecode
								.CrmHtmlAttributeEncode($v_1), CrmEncodeDecode
								.CrmHtmlAttributeEncode($v_2));
		$addHandler($v_0, "click", this.$$d_$4z_3);
		return $v_0
	},
	$4z_3 : function($p0) {
		$p0.stopPropagation()
	},
	$5U_3 : function($p0) {
		var $v_0 = true, $v_1 = true, $v_2 = true;
		if (!IsNull($p0)) {
			var $v_B = $p0["firstEnabled"];
			if (!IsNull($v_B))
				$v_0 = $v_B;
			$v_B = $p0["previousEnabled"];
			if (!IsNull($v_B))
				$v_1 = $v_B;
			$v_B = $p0["nextEnabled"];
			if (!IsNull($v_B))
				$v_2 = $v_B
		}
		var $v_3 = $p0[Mscrm.RecordSetNavigation.PageNumber], $v_4 = String
				.format(this.pagingMask, $v_3), $v_5 = Mscrm.ImageStrip
				.getImageInfo(Mscrm.CrmUri
						.create($v_0 ? "/_imgs/grid/page_FL1.gif"
								: "/_imgs/grid/page_FL0.gif")), $v_6 = Mscrm.ImageStrip
				.getImageInfo(Mscrm.CrmUri
						.create($v_1 ? "/_imgs/grid/page_L1.gif"
								: "/_imgs/grid/page_L0.gif")), $v_7 = Mscrm.ImageStrip
				.getImageInfo(Mscrm.CrmUri
						.create($v_2 ? "/_imgs/grid/page_R1.gif"
								: "/_imgs/grid/page_R0.gif")), $v_8 = String
				.format(
						"\r\n\t\t\t<div class='ms-crm-RS-Footer-Container'>\r\n\t\t\t\t<span><a page='f' title='{0}'><img class='bidi {7}' src='{1}' alt='{0}'/></a></span>\r\n\t\t\t\t<span><a page='p' title='{2}'><img class='bidi {8}' src='{3}' alt='{2}'/></a></span>\r\n\t\t\t\t<span class='ms-crm-RS-Footer-PageText'>{4}</span>\r\n\t\t\t\t<span><a page='n' title='{5}'><img class='bidi {9}' src='{6}' alt='{5}'/></a></span>\r\n\t\t\t</div>",
						CrmEncodeDecode
								.CrmHtmlAttributeEncode($v_0 ? this.firstPageToolTip
										: ""),
						CrmEncodeDecode.CrmHtmlAttributeEncode($v_5.source),
						CrmEncodeDecode
								.CrmHtmlAttributeEncode($v_1 ? this.previousPageToolTip
										: ""),
						CrmEncodeDecode.CrmHtmlAttributeEncode($v_6.source),
						CrmEncodeDecode.CrmHtmlAttributeEncode($v_4),
						CrmEncodeDecode
								.CrmHtmlAttributeEncode($v_2 ? this.nextPageToolTip
										: ""), CrmEncodeDecode
								.CrmHtmlAttributeEncode($v_7.source),
						CrmEncodeDecode.CrmHtmlAttributeEncode($v_5.cssClass),
						CrmEncodeDecode.CrmHtmlAttributeEncode($v_6.cssClass),
						CrmEncodeDecode.CrmHtmlAttributeEncode($v_7.cssClass)), $v_9 = document
				.createElement("DIV");
		$v_9.className = "ms-crm-RecordSelector-Footer";
		$v_9.innerHTML = $v_8;
		var $v_A = $v_9.getElementsByTagName("A");
		if ($v_0) {
			$v_A[0].style.cursor = "hand";
			$v_A[0].tabIndex = 0;
			$addHandler($v_A[0], "click", this.get_$1m_3());
			$addHandler($v_A[0], "keypress", this.get_$1m_3())
		}
		if ($v_1) {
			$v_A[1].style.cursor = "hand";
			$v_A[1].tabIndex = 0;
			$addHandler($v_A[1], "click", this.get_$1m_3());
			$addHandler($v_A[1], "keypress", this.get_$1m_3())
		}
		if ($v_2) {
			$v_A[2].style.cursor = "hand";
			$v_A[2].tabIndex = 0;
			$addHandler($v_A[2], "click", this.get_$1m_3());
			$addHandler($v_A[2], "keypress", this.get_$1m_3())
		}
		$addHandler($v_9, "click", this.$$d_$4z_3);
		return $v_9
	},
	getRecordSelectorContextMenu : function() {
		var $v_0 = document.createElement("div");
		$get("FormCell").appendChild($v_0);
		var $v_1 = Mscrm.Menu.createMenu($v_0);
		$v_1.set_stylePrefix(Mscrm.MenuStyles.contextMenuStylePrefix);
		var $v_2 = Mscrm.MenuItem.createMenuItem(this.openActionTitle);
		$v_2.set_reference(Mscrm.ContextMenuAction.open);
		$v_2.set_actionCallback(this.$$d_$72_3);
		$v_1.addItem($v_2);
		if (Mscrm.NavigationMode.DefaultNavigationMode === Mscrm.NavigationMode.NavigationModeInline) {
			var $v_5 = Mscrm.MenuItem
					.createMenuItem(this.openInNewWindowActionTitle);
			$v_5.set_reference(Mscrm.ContextMenuAction.openInNewWindow);
			$v_5.set_actionCallback(this.$$d_$72_3);
			$v_1.addItem($v_5)
		}
		var $v_3 = Mscrm.MenuItem.createMenuItem(this.copyShortcutActionTitle);
		$v_3.set_reference(Mscrm.ContextMenuAction.copyShortcut);
		$v_3.set_actionCallback(this.$$d_$72_3);
		$v_3.set_disabled(!Mscrm.Utilities.get_ieBrowserVersion());
		$v_1.addItem($v_3);
		var $v_4 = Mscrm.MenuItem.createMenuItem(this.sendShortcutActionTitle);
		$v_4.set_reference(Mscrm.ContextMenuAction.sendShortcut);
		$v_4.set_actionCallback(this.$$d_$72_3);
		$v_1.addItem($v_4);
		$v_1.set_width(200);
		return $v_1
	},
	$E_3 : null,
	$2h_3 : 0,
	$2i_3 : 0,
	$3o_3 : false,
	$10_3 : function() {
		if (this.$3o_3)
			return;
		this.$3o_3 = true;
		if (IsNull(Mscrm.PageManager.get_instance())) {
			this.$B_3 = false;
			return
		}
		if (!IsNull(this.get_$0_3()) && this.get_currentRecordPosition() >= 0) {
			this.$E_3 = new Array(1);
			$addHandler(document.documentElement, "keydown", this.$$d_$5E_3)
		}
	},
	$5E_3 : function($p0) {
		if ($p0.ctrlKey && $p0.keyCode === 190) {
			$p0.stopPropagation();
			$p0.preventDefault();
			this.nextRecord()
		}
		if ($p0.ctrlKey && $p0.keyCode === 188) {
			$p0.stopPropagation();
			$p0.preventDefault();
			this.previousRecord()
		}
		if ($p0.ctrlKey && $p0.shiftKey && $p0.keyCode === 50) {
			$p0.stopPropagation();
			this.showRecordSelector(this.$3H_3())
		}
	},
	showRecordSelector : function(parameters) {
		this.$10_3();
		this.$2h_3 = parameters["x"];
		this.$2i_3 = parameters["y"];
		var $v_0 = this.get_$0_3()[Mscrm.FormControl.$8(0, this.get_$I_3())], $v_1 = this
				.get_$I_3(), $v_2 = this.$E_3[$v_1];
		if (!IsNull(parameters[Mscrm.RecordSetNavigation.PageNumber])) {
			var $v_3 = parameters[Mscrm.RecordSetNavigation.PageNumber], $v_4 = parameters[Mscrm.FormControl
					.$8(0, $v_3)];
			if (!IsNull($v_4) && $v_4.length > 0) {
				$v_1 = $v_3;
				$v_0 = parameters[Mscrm.FormControl.$8(0, $v_3)];
				$v_2 = this.$E_3[$v_1]
			}
		}
		if (IsNull($v_2)) {
			var $v_5 = this.getRecordSelectorContextMenu(), $v_6 = this
					.get_$0_3()[Mscrm.RecordSetNavigation.DisplayFieldName], $v_7 = document
					.createElement("div");
			document.body.appendChild($v_7);
			$v_2 = Mscrm.Menu.createMenu($v_7);
			$v_2.set_launchesRight(false);
			$v_2.set_stylePrefix(Mscrm.MenuStyles.recordSelectorStylePrefix);
			$v_2.set_loadingClassName("ms-crm-VS-loadingmenu");
			for ( var $v_9 = 0; $v_9 < $v_0.length; $v_9++) {
				var $v_A = $v_0[$v_9], $v_B = Mscrm.MenuItem
						.createMenuItem($v_A[$v_6]);
				$v_B.set_iconPath(Mscrm.Utilities.getIconPath($v_A["otype"]));
				$v_A["menuitem"] = $v_B;
				var $v_C = {};
				$v_C["index"] = $v_9;
				$v_C[Mscrm.RecordSetNavigation.PageNumber] = $v_1;
				$v_B.set_reference($v_C);
				$v_B.set_actionCallback(this.$$d_$71_3);
				$v_B.set_contextMenu($v_5);
				$v_2.addItem($v_B);
				if ($v_1 === this.get_$I_3()
						&& $v_9 === this.get_currentRecordPosition()) {
					$v_B.set_isSelected(true);
					$v_2.set_activeItem($v_B)
				}
			}
			$v_2.set_hideCallback(this.$$d_$70_3);
			$v_2.set_shiftVertical(false);
			var $v_8 = {};
			$v_8[Mscrm.RecordSetNavigation.PageNumber] = $v_1;
			if ($v_1 === 1) {
				$v_8["firstEnabled"] = false;
				$v_8["previousEnabled"] = false
			}
			if (!this.$3Q_3($v_1))
				$v_8["nextEnabled"] = false;
			$v_2.set_footer(this.$5U_3($v_8));
			$v_2.set_header(this.$5V_3());
			this.$E_3[$v_1] = $v_2
		}
		$v_2.set_left(this.$2h_3);
		$v_2.set_top(this.$2i_3);
		$v_2.set_maxHeight(412);
		$v_2.set_minHeight(412);
		$v_2.set_width(260);
		this.get_$R_3() !== $v_1 && !IsNull(this.$E_3[this.get_$R_3()])
				&& this.$E_3[this.get_$R_3()].hide();
		this.set_$R_3($v_1);
		$v_2.show()
	},
	$6z_3 : function($p0) {
		var $v_0 = false;
		if ($p0.type === "click" && !$p0.button)
			$v_0 = true;
		if ($p0.type === "keypress"
				&& ($p0.charCode === 13 || $p0.charCode === 32))
			$v_0 = true;
		if (!$v_0)
			return;
		$p0.stopPropagation();
		$p0.preventDefault();
		var $v_1 = Mscrm.Utilities.getEventElement($p0.rawEvent, "A");
		if (!IsNull($v_1)) {
			var $v_2 = $v_1.attributes.getNamedItem("page");
			if (!IsNull($v_2))
				switch ($v_2.value) {
				case "f":
					this.$7P_3();
					break;
				case "n":
					this.$7R_3();
					break;
				case "p":
					this.$7U_3();
					break
				}
		}
	},
	$7P_3 : function() {
		this.$3W_3(1)
	},
	$7U_3 : function() {
		this.$3W_3(this.get_$R_3() - 1)
	},
	$7R_3 : function() {
		this.$3W_3(this.get_$R_3() + 1)
	},
	$3W_3 : function($p0) {
		if ($p0 <= 0)
			return;
		this.$10_3();
		if (!IsNull(this.$E_3[$p0])) {
			this.$E_3[this.get_$R_3()].hide();
			this.set_$R_3($p0);
			var $v_1 = this.$3H_3();
			this.$E_3[$p0].set_left($v_1["x"]);
			this.$E_3[$p0].set_top($v_1["y"]);
			this.$E_3[$p0].show();
			return
		}
		var $v_0 = this.get_$0_3()[Mscrm.FormControl.$8(0, $p0)];
		if (!IsNull($v_0)) {
			var $v_2 = {};
			$v_2["oldPageNumber"] = this.get_$I_3();
			$v_2["newPageNumber"] = $p0;
			$v_2[Mscrm.FormControl.$8(0, $p0)] = $v_0;
			$v_2[Mscrm.RecordSetNavigation.PageNumber] = $p0;
			$v_2["x"] = this.$2h_3;
			$v_2["y"] = this.$2i_3;
			this.showRecordSelector($v_2);
			return
		}
		this.$E_3[this.get_$R_3()].set_reference($p0);
		this.$E_3[this.get_$R_3()].set_isLoading(true);
		this.$E_3[this.get_$R_3()].show(this.$$d_$7V_3)
	},
	$5g_3 : function($p0) {
		if (!IsNull($p0) && !IsNull($p0["pageType"])
				&& $p0["pageType"] === "entity") {
			var $v_0 = {};
			$v_0["Id"] = this.get_objectId();
			$v_0["otc"] = this.get_objectTypeCode();
			$v_0["etn"] = this.get_objectTypeName();
			$v_0["title"] = this.entityTitle;
			$v_0["entitydisplayname"] = this.entityDisplayName;
			return $v_0
		}
		return null
	},
	$5t_3 : function($p0, $p1) {
		var $v_0 = this.$5T_3($p0);
		if (!IsNull($v_0)) {
			var $v_1 = this.get_$0_3()[Mscrm.RecordSetNavigation.DisplayFieldName];
			$v_0[$v_1] = $p1;
			var $v_2 = $v_0["menuitem"];
			if (!IsNull($v_2)) {
				var $v_3 = this.$E_3[this.get_$I_3()];
				!IsNull($v_3) && $v_3 === $v_2.get_parentMenu()
						&& $v_2.set_title($p1)
			}
		}
	},
	$2w_3 : 0,
	get_entityPermissions : function() {
		return this.$2w_3
	},
	set_entityPermissions : function(value) {
		this.$2w_3 = value;
		return value
	},
	$1x_3 : null,
	get_primaryFieldName : function() {
		return this.$1x_3
	},
	set_primaryFieldName : function(value) {
		this.$1x_3 = value;
		return value
	},
	get_primaryFieldValue : function() {
		return this.getFieldValue(this.$1x_3)
	},
	get_setInitialFocus : function() {
		var $v_0 = this.get_element().getAttribute("setinitialfocus");
		return IsNull($v_0) || $v_0.toLowerCase() === "true"
	},
	set_setInitialFocus : function(value) {
		this.get_element().setAttribute("setinitialfocus",
				value.toString().toLowerCase());
		return value
	},
	getFieldValue : function(fieldName) {
		var $v_0 = "";
		if (fieldName === "fullname") {
			var $v_1 = this.getUnformattedValue("firstname"), $v_2 = "";
			if (!IsNull($v_1))
				$v_2 = $v_1.toString();
			var $v_3 = this.getUnformattedValue("lastname"), $v_4 = "";
			if (!IsNull($v_3))
				$v_4 = $v_3.toString();
			var $v_5 = this.getUnformattedValue("middlename"), $v_6 = "", $v_7 = "";
			if (!IsNull($v_5)) {
				$v_6 = $v_5.toString();
				$v_7 = $v_6.substring(0, 1)
			}
			$v_0 = Mscrm.FormControl.$5O($v_2, $v_4, $v_6, $v_7)
		} else {
			var $v_8 = this.getUnformattedValue(fieldName);
			if ($v_8)
				if (Object.getType($v_8) === String)
					$v_0 = $v_8;
				else if (isArray($v_8)) {
					var $v_9 = $v_8;
					if ($v_9[0].id
							&& $v_9[0].displayClass === "ms-crm-Lookup-Item")
						$v_0 = $v_9[0].name
				}
		}
		return $v_0
	},
	get_ribbonContextType : function() {
		return Mscrm.RibbonContexts.form
	},
	get_ribbonRelationshipType : function() {
		return 0
	},
	get_entityTypeCode : function() {
		return this.get_objectTypeCode()
	},
	get_entityTypeName : function() {
		return this.get_objectTypeName()
	},
	get_selectedRecordCount : function() {
		return 1
	},
	get_recordCount : function() {
		return 1
	},
	get_selectedIds : function() {
		return [ this.get_objectId() ]
	},
	get_allRecordIds : function() {
		return this.get_selectedIds()
	},
	get_selectedRecords : function() {
		var $v_0 = new Mscrm.EntityReference;
		$v_0.Id = this.get_objectId();
		$v_0.TypeCode = this.get_objectTypeCode();
		$v_0.TypeName = this.get_objectTypeName();
		$v_0.Name = isNullOrEmptyString(this.$1x_3) ? null : this
				.getUnformattedValue(this.$1x_3);
		return [ $v_0 ]
	},
	get_allRecords : function() {
		return this.get_selectedRecords()
	},
	get_unselectedIds : function() {
		return []
	},
	get_unselectedRecords : function() {
		return []
	},
	$7V_3 : function($p0) {
		var $v_0 = $p0.get_reference();
		if ($v_0 <= 0) {
			$p0.set_reference(null);
			return
		}
		var $v_1 = {};
		$v_1["oldPageNumber"] = this.get_$I_3();
		$v_1["newPageNumber"] = $v_0;
		this.$4Z_3($v_1, this.$$d_$7W_3)
	},
	$7W_3 : function($p0, $p1) {
		var $v_0 = $p1.get_reference(), $v_1 = $v_0["data"], $v_2 = $v_1["newPageNumber"], $v_3 = $v_1["oldPageNumber"], $v_4 = this
				.$4a_3($p0, $v_2, $v_3);
		this.$E_3[this.get_$R_3()].set_isLoading(false);
		if (!this.$E_3[this.get_$R_3()].get_isVisible())
			return;
		if (!IsNull($v_4)) {
			$v_1[Mscrm.FormControl.$8(0, $v_2)] = $v_4;
			$v_1[Mscrm.RecordSetNavigation.PageNumber] = $v_2;
			$v_1["x"] = this.$2h_3;
			$v_1["y"] = this.$2i_3;
			this.showRecordSelector($v_1)
		}
	},
	$72_3 : function($p0) {
		var $v_0 = $p0.get_parentMenu(), $v_1 = $p0.get_reference();
		switch ($v_1) {
		case Mscrm.ContextMenuAction.open:
			this.$41_3($v_0.get_contextItem(),
					Mscrm.NavigationMode.NavigationModeInline);
			break;
		case Mscrm.ContextMenuAction.openInNewWindow:
			this.$41_3($v_0.get_contextItem(),
					Mscrm.NavigationMode.NavigationModeNewWindow);
			break;
		case Mscrm.ContextMenuAction.copyShortcut:
			this.$42_3($v_0.get_contextItem(), false);
			break;
		case Mscrm.ContextMenuAction.sendShortcut:
			this.$42_3($v_0.get_contextItem(), true);
			break
		}
	},
	$41_3 : function($p0, $p1) {
		var $v_0 = $p0.get_reference(), $v_1 = $v_0["index"], $v_2 = $v_0[Mscrm.RecordSetNavigation.PageNumber];
		this.moveRecordSetTo($v_1, $v_2, $p1)
	},
	$42_3 : function($p0, $p1) {
		var $v_0 = $p0.get_reference(), $v_1 = $v_0[Mscrm.RecordSetNavigation.PageNumber], $v_2 = $v_0["index"], $v_3 = this
				.$1h_3($v_1);
		if (IsNull($v_3) || !$v_3.length || $v_2 < 0 || $v_2 > $v_3.length)
			return;
		var $v_4 = $v_3[$v_2], $v_5 = new Mscrm.RecentlyViewedItem;
		$v_5.TypeCode = $v_4["otype"];
		$v_5.Id = $v_4["oid"];
		var $v_6 = this.get_$0_3()[Mscrm.RecordSetNavigation.DisplayFieldName];
		$v_5.Name = $v_4[$v_6];
		Mscrm.Utilities.sendSelectedRecordsUrl($p1, [ $v_5 ], $v_5.TypeCode,
				false)
	},
	$71_3 : function($p0) {
		var $v_0 = $p0.get_reference(), $v_1 = $v_0["index"], $v_2 = $v_0[Mscrm.RecordSetNavigation.PageNumber];
		this.moveRecordSetTo($v_1, $v_2,
				Mscrm.NavigationMode.DefaultNavigationMode)
	},
	$5T_3 : function($p0) {
		if (isNullOrEmptyString($p0))
			return null;
		for ( var $v_0 = this.get_$I_3(); $v_0 > 0; $v_0--) {
			var $v_1 = this.$1h_3($v_0);
			if (IsNull($v_1) || !$v_1.length)
				continue;
			for ( var $v_2 = 0; $v_2 < $v_1.length; ++$v_2) {
				var $v_3 = $v_1[$v_2];
				if ($v_3["oid"] === $p0)
					return $v_3
			}
		}
		for ( var $v_4 = this.get_$I_3() + 1; this.$3Q_3($v_4); $v_4++) {
			var $v_5 = this.$1h_3($v_4);
			if (IsNull($v_5) || !$v_5.length)
				continue;
			for ( var $v_6 = 0; $v_6 < $v_5.length; ++$v_6) {
				var $v_7 = $v_5[$v_6];
				if ($v_7["oid"] === $p0)
					return $v_7
			}
		}
		return null
	},
	$5S_3 : function($p0, $p1, $p2) {
		while (true) {
			if ($p1 + $p2 < 0 || $p1 + $p2 >= $p0.length)
				break;
			var $v_0 = $p0[$p1 + $p2];
			if (!IsNull($v_0["oid"]))
				return $p1 + $p2;
			$p2 += $p2 > 0 ? 1 : -1
		}
		return -1
	},
	$21_3 : null,
	get_$73_3 : function() {
		if (!IsNull(this.$21_3))
			return this.$21_3;
		if (!this.$B_3)
			return null;
		var $v_0 = Mscrm.Utilities.getContentUrl(this);
		this.$21_3 = $v_0.get_query()["rskey"];
		if (IsNull(this.$21_3))
			this.$B_3 = false;
		return this.$21_3
	},
	$y_3 : null,
	get_$0_3 : function() {
		if (!IsNull(this.$y_3))
			return this.$y_3;
		if (!this.$B_3)
			return null;
		var $v_0 = {};
		$v_0["key"] = this.get_$73_3();
		var $v_1 = this.raiseEvent(Mscrm.ScriptEvents.RetrieveCacheData, $v_0);
		this.$y_3 = $v_1[0];
		if (IsNull(this.$y_3))
			this.$B_3 = false;
		else {
			var $v_2 = this.get_$I_3(), $v_3 = Mscrm.FormControl.$8(0, $v_2);
			if (typeof this.$y_3[$v_3] === "string")
				this.$y_3[$v_3] = Sys.Serialization.JavaScriptSerializer
						.deserialize(this.$y_3[$v_3])
		}
		return this.$y_3
	},
	$36_3 : null,
	get_$6e_3 : function() {
		if (IsNull(this.$36_3))
			this.$36_3 = new RegExp("<pageNum>[0-9]+</pageNum>");
		return this.$36_3
	},
	get_$I_3 : function() {
		if (this.$1o_3 !== Mscrm.FormControl.$1M)
			return this.$1o_3;
		if (!this.$B_3)
			return Mscrm.FormControl.$1M;
		var $v_0 = this.get_$0_3()[Mscrm.RecordSetNavigation.PageNumber];
		if (IsNull($v_0))
			this.$B_3 = false;
		this.$1o_3 = parseInt($v_0, 10);
		return this.$1o_3
	},
	get_$R_3 : function() {
		if (this.$1p_3 === Mscrm.FormControl.$2m)
			this.$1p_3 = this.get_$I_3();
		return this.$1p_3
	},
	set_$R_3 : function($p0) {
		this.$1p_3 = $p0;
		return $p0
	},
	$1S_3 : null,
	get_$1g_3 : function() {
		if (!IsNull(this.$1S_3))
			return this.$1S_3;
		if (!this.$B_3)
			return null;
		this.$1S_3 = this.get_$0_3()[Mscrm.FormControl.$8(0, this.get_$I_3())];
		if (IsNull(this.$1S_3) || !this.$1S_3.length)
			this.$B_3 = false;
		return this.$1S_3
	},
	$B_3 : true,
	get_currentRecordPosition : function() {
		if (this.$r_3 >= Mscrm.FormControl.$1M)
			return this.$r_3;
		if (!this.$B_3)
			return Mscrm.FormControl.$1M;
		this.$10_3();
		this.$r_3 = Mscrm.FormControl.$1M;
		var $v_0 = this.get_$0_3()[Mscrm.RecordSetNavigation.RecordPosition];
		if ($v_0 >= 0 && $v_0 < this.get_$1g_3().length) {
			var $v_1 = this.get_$1g_3()[$v_0];
			if ($v_1["oid"] === this.get_objectId()) {
				this.$r_3 = $v_0;
				return this.$r_3
			}
		}
		$v_0 = 0;
		while ($v_0 < this.get_$1g_3().length) {
			var $v_2 = this.get_$1g_3()[$v_0];
			if ($v_2["oid"] === this.get_objectId()) {
				this.$r_3 = $v_0;
				break
			}
			$v_0++
		}
		return this.$r_3
	},
	$1h_3 : function($p0) {
		if (!this.$B_3)
			return null;
		return this.get_$0_3()[Mscrm.FormControl.$8(0, $p0)]
	},
	$3Q_3 : function($p0) {
		if (!this.$B_3)
			return false;
		var $v_0 = false, $v_1 = this.get_$0_3()[Mscrm.FormControl.$8(1, $p0)];
		if (!IsNull($v_1))
			$v_0 = $v_1;
		return $v_0
	},
	get_$5x_3 : function() {
		return this.get_$1g_3().length - 1 > this.get_currentRecordPosition()
				|| this.get_$3N_3()
	},
	get_$5y_3 : function() {
		return this.get_currentRecordPosition() > 0 || this.get_$I_3() > 1
	},
	get_$3N_3 : function() {
		return this.$3Q_3(this.get_$I_3())
	},
	$1A_3 : null,
	get_$2g_3 : function() {
		if (IsNull(this.$1A_3)) {
			var $v_0 = document.createElement("div");
			document.body.appendChild($v_0);
			this.$1A_3 = Mscrm.Dialog.createDialog($v_0);
			this.$1A_3.set_top(document.body.offsetHeight / 2 - 20);
			this.$1A_3.set_left(document.body.offsetWidth / 2 - 30);
			this.$1A_3.set_enableShadow(false);
			this.$1A_3.set_isLoading(true)
		}
		return this.$1A_3
	},
	moveRecordSetTo : function(position, itemPageNumber, mode) {
		if (!this.$B_3)
			return;
		var $v_0 = this.$1h_3(itemPageNumber);
		if (IsNull($v_0) || !$v_0.length || position < 0
				|| position > $v_0.length)
			return;
		var $v_1 = $v_0[position], $v_2 = $v_1["otype"], $v_3 = $v_1["oid"], $v_4 = {};
		$v_4["checkpoint"] = false;
		$v_4["sameWindow"] = true;
		this.get_$0_3()[Mscrm.RecordSetNavigation.PageNumber] = itemPageNumber;
		this.get_$0_3()[Mscrm.RecordSetNavigation.RecordPosition] = position;
		var $v_5 = Mscrm.Utilities.getContentUrl(this);
		delete $v_5.get_query().etc;
		delete $v_5.get_query().etn;
		delete $v_5.get_query().id;
		delete $v_5.get_query().preloadcache;
		var $v_6 = $find("crmFormSelector");
		if ($v_6)
			$v_5.get_query()["formid"] = $v_6.$q_3;
		openObj($v_2, $v_3, $v_5.get_queryString(), null,
				Mscrm.NavigationMode.DefaultNavigationMode, $v_4)
	},
	moveRecordSet : function(iPos, itemPageNumber) {
		if (!this.$B_3)
			return;
		if (this.get_currentRecordPosition() < 0)
			return;
		var $v_0 = this.$1h_3(itemPageNumber), $v_1 = this.$5S_3($v_0, this
				.get_currentRecordPosition(), iPos);
		if ($v_1 >= 0) {
			this.moveRecordSetTo($v_1, itemPageNumber,
					Mscrm.NavigationMode.DefaultNavigationMode);
			return
		}
		$v_0 = null;
		if (itemPageNumber === 1 && iPos < 0 || !this.get_$3N_3() && iPos > 0)
			return;
		var $v_2 = iPos > 0 && this.get_$3N_3(), $v_3 = itemPageNumber
				+ ($v_2 ? 1 : -1);
		$v_0 = this.$1h_3($v_3);
		if (!IsNull($v_0) && $v_0.length > 0) {
			$v_1 = $v_2 ? 0 : $v_0.length - 1;
			$v_3 = itemPageNumber + ($v_2 ? 1 : -1);
			this.get_$0_3()[Mscrm.RecordSetNavigation.PageNumber] = $v_3;
			this.moveRecordSetTo($v_1, $v_3,
					Mscrm.NavigationMode.DefaultNavigationMode);
			return
		}
		var $v_4 = {};
		$v_4["iPos"] = iPos;
		$v_4["oldPageNumber"] = itemPageNumber;
		$v_4["newPageNumber"] = $v_3;
		$v_4["isNextPage"] = $v_2;
		this.$79_3($v_4, this.$$d_$78_3);
		return
	},
	$78_3 : function($p0, $p1) {
		var $v_0 = $p1.get_reference(), $v_1 = $v_0["data"], $v_2 = $v_1["newPageNumber"], $v_3 = $v_1["oldPageNumber"], $v_4 = $v_1["isNextPage"], $v_5 = this
				.$4a_3($p0, $v_2, $v_3);
		if (IsNull($v_5))
			return;
		if (!this.get_$2g_3().get_isVisible())
			return;
		this.get_$2g_3().hide();
		var $v_6 = $v_3 + ($v_4 ? 1 : -1);
		this.get_$0_3()[Mscrm.RecordSetNavigation.PageNumber] = $v_3
				+ ($v_4 ? 1 : -1);
		var $v_7 = $v_4 ? 0 : $v_5.length - 1;
		this.moveRecordSetTo($v_7, $v_6,
				Mscrm.NavigationMode.DefaultNavigationMode)
	},
	$79_3 : function($p0, $p1) {
		$p0["loadingCallback"] = $p1;
		this.get_$2g_3().set_reference($p0);
		this.get_$2g_3().show(this.$$d_$7A_3)
	},
	$7A_3 : function($p0) {
		var $v_0 = $p0.get_reference(), $v_1 = $v_0["loadingCallback"];
		this.$4Z_3($v_0, $v_1)
	},
	$4Z_3 : function($p0, $p1) {
		var $v_0 = $p0["oldPageNumber"], $v_1 = $p0["newPageNumber"], $v_2 = this
				.get_$0_3()[Mscrm.FormControl.$8(3, $v_1)];
		if (!IsNull($v_2) && !$v_2.get_aborted())
			return;
		var $v_3 = {};
		$v_3["data"] = $p0;
		$v_3["callback"] = $p1;
		var $v_4 = new Mscrm.RemoteCommandXml("AppGridWebService", "Refresh");
		$v_4.set_reference($v_3);
		var $v_5 = this.get_$0_3()[Mscrm.FormControl.$8(2, $v_1 - 1)];
		if (isNullOrEmptyString($v_5))
			$v_5 = this.get_$0_3()[Mscrm.FormControl.$8(2, $v_1 + 1)];
		if (isNullOrEmptyString($v_5))
			$v_5 = this.get_$0_3()[Mscrm.FormControl.$8(2, $v_0)];
		$v_5 = $v_5
				.replace(this.get_$6e_3(), "<pageNum>" + $v_1 + "</pageNum>");
		$v_4.setContent($v_5);
		this.get_$0_3()[Mscrm.FormControl.$8(3, $v_1)] = $v_4;
		$v_4.execute($p1)
	},
	$4a_3 : function($p0, $p1, $p2) {
		var $v_0 = null;
		if ($p0.get_success() && !IsNull($p0.get_returnValue())) {
			var $v_1 = XUI.Xml.LoadXml($p0.get_returnValue());
			if (Mscrm.NavigationMode.DefaultNavigationMode === Mscrm.NavigationMode.NavigationModeInline)
				this.get_$0_3()[Mscrm.FormControl.$8(4, $p1)] = $p0
						.get_returnValue();
			var $v_2 = document.createElement("div");
			$v_2.innerHTML = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_1,
					"gridXml/gridHtml", null));
			var $v_3 = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils
					.GetFirstChild($v_2)).attributes
					.getNamedItem("morerecords").value === "1";
			this.get_$0_3()[Mscrm.FormControl.$8(1, $p1)] = $v_3;
			var $v_4 = new Array(1);
			$v_4[0] = this.get_$0_3()[Mscrm.RecordSetNavigation.DisplayFieldName];
			$v_0 = Mscrm.Grid.getGridRecords(XUI.Html.DomUtils
					.GetFirstChild(XUI.Html.DomUtils.GetFirstChild($v_2)),
					$v_4, this.get_$0_3()[Mscrm.RecordSetNavigation.LayoutXml]);
			this.get_$0_3()[Mscrm.FormControl.$8(0, $p1)] = $v_0;
			var $v_5 = XUI.Xml.LoadXml(this.get_$0_3()[Mscrm.FormControl.$8(2,
					$p2)]), $v_6 = XUI.Xml.SelectSingleNode($v_5,
					"grid/pagingCookie", null), $v_7 = XUI.Xml
					.SelectSingleNode($v_1, "gridXml/pagingCookie", null);
			XUI.Xml.SelectSingleNode($v_5, "grid", null).replaceChild($v_7,
					$v_6);
			XUI.Xml.SelectSingleNode($v_5, "grid/pageNum", null).text = $p1;
			this.get_$0_3()[Mscrm.FormControl.$8(2, $p1)] = XUI.Xml.XMLSerializer
					.serializeToString($v_5)
		}
		return $v_0
	},
	previousRecord : function() {
		this.$10_3();
		this.moveRecordSet(-1, this.get_$I_3())
	},
	nextRecord : function() {
		this.$10_3();
		this.moveRecordSet(1, this.get_$I_3())
	},
	recordDeleted : function() {
		if (Mscrm.NavigationMode.DefaultNavigationMode === Mscrm.NavigationMode.NavigationModeInline) {
			this.$10_3();
			if (!this.$B_3)
				return;
			if (this.get_currentRecordPosition() < 0)
				return;
			var $v_0 = this.get_$1g_3()[this.get_currentRecordPosition()];
			$v_0["otype"] = null;
			$v_0["oid"] = null
		}
	},
	recordUpdating : function() {
		this.$10_3();
		if (this.$B_3) {
			var $v_0 = this.get_$0_3()[Mscrm.RecordSetNavigation.DisplayFieldName];
			this.$5t_3(this.get_objectId(), this.getFieldValue($v_0))
		}
	},
	getUnformattedValue : function(column) {
		var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior(column);
		if (!IsNull($v_0))
			return $v_0.get_dataValue();
		else
			return null
	},
	verifyRecordPermission : function(permissionMask) {
		return (permissionMask & this.$2w_3) === permissionMask
	},
	$7a_3 : function() {
		$addHandler(this.get_element(), "keypress", this.$$d_$6M_3);
		this.$b_3 = $get(this.$3B_3);
		if (IsNull(this.$b_3))
			return;
		if (this.get_formType() === 3 || this.get_formType() === 4)
			this.$2F_3 = false;
		this.$2r_3 = true;
		attachWindowOnBeforeUnload(this.$$d_Close, null);
		$addHandler(document, "keydown", this.$$d_$6K_3);
		$addHandler(window, "resize", this.$$d_$5u_3);
		var $v_0 = this.get_$1J_3();
		if (!IsNull(window.name))
			!IsNull(window.frameElement) ? (window.name = window.frameElement
					.getAttribute("name")) : void 0;
		var $v_1 = this.get_$46_3();
		if (!IsNull($v_1) && !IsNull($v_1.value))
			this.$z_3 = $v_1.value === "true";
		if (this.$3M_3() && this.$6G_3())
			$v_0.value = "";
		this.add_onSave(this.$$d_$59_3);
		this.add_onSaveAppointmentAndServiceAppointment(this.$$d_$55_3)
	},
	$7Z_3 : function() {
		if (!IsNull(this.$b_3)) {
			$removeHandler(this.get_element(), "keypress", this.$$d_$6M_3);
			$removeHandler(document, "keydown", this.$$d_$6K_3);
			$removeHandler(window, "resize", this.$$d_$5u_3)
		}
	},
	get_allowFormFocus : function() {
		return this.$2F_3
	},
	set_allowFormFocus : function(value) {
		this.$2F_3 = value;
		return value
	},
	get_saving : function() {
		return this.$1a_3
	},
	set_saving : function(value) {
		this.$1a_3 = value;
		return value
	},
	get_submitFormId : function() {
		return this.$3B_3
	},
	set_submitFormId : function(value) {
		this.$3B_3 = value;
		return value
	},
	get_noDataValue : function() {
		return 3
	},
	get_isDirty : function() {
		return this.BuildXml(false, false, false, false, true) !== 3
	},
	get_isNew : function() {
		return isNullOrEmptyString(this.get_objectId())
	},
	get_formType : function() {
		if (this.get_isDisposed())
			return 0;
		var $v_0 = this.get_element().attributes.getNamedItem("formtype");
		return !IsNull($v_0) && !IsNull($v_0.value) ? parseInt($v_0.value, 10)
				: 0
	},
	get_objectTypeCode : function() {
		try {
			var $v_0 = this.get_$45_3();
			if (IsNull($v_0) || isNullOrEmptyString($v_0.value))
				return 0;
			else
				return parseInt($v_0.value, 10)
		} catch ($$e_1) {
			return 0
		}
	},
	get_objectTypeName : function() {
		try {
			var $v_0 = $get("crmFormSubmitObjectTypeName");
			return IsNull($v_0) ? null : $v_0.value
		} catch ($$e_1) {
			return null
		}
	},
	get_objectId : function() {
		try {
			var $v_0 = this.get_$1J_3();
			if (IsNull($v_0) || isNullOrEmptyString($v_0.value))
				return null;
			else
				return $v_0.value
		} catch ($$e_1) {
			return null
		}
	},
	set_objectId : function(value) {
		var $v_0 = this.get_$1J_3();
		$v_0.value = value;
		return value
	},
	get_bypassValidation : function() {
		return this.$2o_3
	},
	set_bypassValidation : function(value) {
		this.$2o_3 = value;
		return value
	},
	get_refreshOnSave : function() {
		return this.$1z_3
	},
	set_refreshOnSave : function(value) {
		this.$1z_3 = value;
		return value
	},
	add_onSave : function(value) {
		this.get_events().addHandler("onSaveEvent", value)
	},
	remove_onSave : function(value) {
		this.get_events().removeHandler("onSaveEvent", value)
	},
	add_onClose : function(value) {
		this.get_events().addHandler("onCloseEvent", value)
	},
	remove_onClose : function(value) {
		this.get_events().removeHandler("onCloseEvent", value)
	},
	add_onFormResized : function(value) {
		this.get_events().addHandler("OnFormResized", value)
	},
	remove_onFormResized : function(value) {
		this.get_events().removeHandler("OnFormResized", value)
	},
	add_onSaveAppointmentAndServiceAppointment : function(value) {
		this.get_events().addHandler(
				"OnSaveAppointmentAndServiceAppointmentEvent", value)
	},
	remove_onSaveAppointmentAndServiceAppointment : function(value) {
		this.get_events().removeHandler(
				"OnSaveAppointmentAndServiceAppointmentEvent", value)
	},
	CheckFormDirty : function() {
		return this.BuildXml(false, this.get_isNew(), false, false, true) !== 3
	},
	Save : function() {
		return this.SubmitCrmForm(1, true, false, false, false)
	},
	SaveAndClose : function() {
		return this.SubmitCrmForm(2, true, false, true, false)
	},
	CloseRecord : function(eventCode) {
		if (IsNull(Mscrm.PageManager.get_instance())
				|| !Mscrm.PageManager.isFlatUIPage()) {
			closeWindow();
			return
		}
		if (IsNull(eventCode))
			eventCode = Mscrm.NavigationMode.DefaultNavigationMode === Mscrm.NavigationMode.NavigationModeNewWindow ? Mscrm.ScriptEvents.NavigateClose
					: Mscrm.ScriptEvents.NavigateBackCheckpoint;
		this.raiseEvent(eventCode, null)
	},
	ShowAppNav : function() {
		if (IsNull(Mscrm.PageManager.get_instance())
				|| !Mscrm.PageManager.isFlatUIPage())
			return;
		var $v_0 = {};
		$v_0["mode"] = "float";
		$v_0["activeElement"] = window.document.activeElement;
		this.raiseEvent(Mscrm.ScriptEvents.ShowAppNav, $v_0)
	},
	IsValid : function(bypassValidateOwner) {
		if (this.$2o_3)
			return true;
		try {
			var $v_3 = window.document.activeElement;
			if (!IsNull($v_3)
					&& typeof $v_3.tagName !== Mscrm.TypeNames.undefinedType) {
				if (!IsNull(Mscrm.FormInputControl.NumberInputBehavior)) {
					var $v_4 = Sys.UI.Behavior.getBehaviorsByType($v_3,
							Mscrm.FormInputControl.NumberInputBehavior)[0];
					if (!IsNull($v_4)
							&& !IsNull($v_4.get_element().getAttribute(
									"blockFormSubmit"))) {
						var $v_5 = $v_4.get_element();
						$v_5.removeAttribute("blockFormSubmit");
						return false
					}
				}
				$v_3.tagName.toUpperCase() === "IFRAME"
						&& Sys.UI.DomElement.containsCssClass($v_3,
								"ms-crm-Email-Body") && this.$4G_3($v_3)
			}
			window.self.focus()
		} catch ($$e_4) {
			return false
		}
		var $v_0 = this.$3G_3();
		if (!IsNull($v_0))
			return $v_0.validateForSave();
		for ( var $v_1 = null, $v_2 = this.get_element().getElementsByTagName(
				"*"), $v_6 = 0, $v_7 = $v_2.length; $v_6 < $v_7; $v_6++) {
			$v_1 = $v_2[$v_6];
			switch ($v_1.tagName.toUpperCase()) {
			case "INPUT":
			case "SELECT":
			case "TEXTAREA":
			case "TABLE":
			case "DIV":
			case "SPAN":
			case "IMG":
			case "IFRAME":
				if ($v_1.id === "ownerid" && bypassValidateOwner)
					continue;
				if (!this.$4O_3($v_1, false))
					return false;
				break
			}
		}
		return true
	},
	SubmitCrmForm : function(mode, checkValid, forceSubmit, close, buildFullXml) {
		if (this.$1a_3)
			return false;
		if (IsNull(buildFullXml))
			buildFullXml = false;
		this.$75_3(mode);
		var $v_0;
		if (this.IsValid(false) && this.fireSaveEvent(mode)) {
			var $v_1 = this.get_objectTypeName();
			if ($v_1 === "appointment" || $v_1 === "serviceappointment") {
				var $v_3 = this.$5A_3(mode);
				if (!$v_3)
					return true
			}
			var $v_2 = this.get_$1J_3();
			$v_0 = this.BuildXml(false, !isNullOrEmptyString($v_2.value),
					buildFullXml, false, false);
			if ($v_0 === 1 || $v_0 === 3 && forceSubmit) {
				var $v_4 = this.get_$4t_3();
				$v_4.value = mode;
				var $v_5 = this.get_$46_3();
				if (!IsNull($v_5))
					$v_5.value = this.$z_3 ? "true" : "false";
				var $v_6 = this.get_$3F_3();
				if (forceSubmit || !IsNull($v_6)
						&& !isNullOrEmptyString($v_6.value)) {
					this.$7Y_3();
					return true
				}
			}
			$v_0 === 3 && close && this.CloseRecord(null);
			if ($v_0 === 2)
				return false
		} else
			return false;
		Sys.Browser.agent === Sys.Browser.InternetExplorer && window.focus();
		return undefined
	},
	Close : function(eventData) {
		var $v_0 = eventData.rawEvent;
		if (!this.IsReadyToClose()) {
			$v_0.returnValue = window.LOCID_FORMS_SAVE_CONFIRM_TITLE;
			return window.LOCID_FORMS_SAVE_CONFIRM_TITLE
		}
	},
	IsReadyToClose : function() {
		if (!this.$1a_3) {
			try {
				var $v_1 = document.activeElement;
				if (!IsNull($v_1))
					if ($v_1.tagName.toUpperCase() === "IFRAME"
							&& Sys.UI.DomElement.containsCssClass($v_1,
									"ms-crm-Email-Body"))
						this.$4G_3($v_1);
					else
						$v_1.tagName.toUpperCase() !== "BODY" && $v_1.blur()
			} catch ($$e_1) {
				return false
			}
			var $v_0 = this.$54_3();
			if (!IsNull($v_0) && !$v_0
					|| this.BuildXml(false, true, false, false, true) !== 3)
				return false
		}
		return true
	},
	$4G_3 : function($p0) {
		while ($p0.tagName.toUpperCase() !== "TABLE"
				|| !Sys.UI.DomElement
						.containsCssClass($p0, "ms-crm-Email-Body")) {
			$p0 = $p0.parentNode;
			if ($p0 === this.get_element()) {
				$p0 = null;
				break
			}
		}
		if (!IsNull($p0)) {
			var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior($p0.id);
			$v_0.updateMessageBody()
		}
	},
	detachCloseAlert : function() {
		this.$2r_3 = false;
		detachWindowOnBeforeUnload(this.$$d_Close, null)
	},
	RunReport : function(instance, name, reportType, helpId) {
		var $v_0 = Mscrm.WindowInformation
				.getWindowInformation(Mscrm.EntityTypeCode.Report);
		if (instance) {
			var $v_1 = Mscrm.CrmUri.create($v_0.Url.toString()), $v_2 = $v_1
					.get_query();
			$v_2["action"] = "run";
			$v_2["id"] = name;
			$v_2["context"] = "records";
			$v_2["recordstype"] = this.get_objectTypeCode();
			$v_2["records"] = this.get_objectId();
			$v_2["helpID"] = helpId;
			openStdWin($v_1, buildWinName(), $v_0.Width, $v_0.Height, null)
		} else
			Mscrm.ReportUtil.viewReport(reportType, name, helpId, "run", null)
	},
	$4P_3 : function($p0) {
		var $v_0 = $p0.attributes.getNamedItem("disabled");
		return !IsNull($v_0)
				&& (Boolean.parse($v_0.value) || $v_0.value === "disabled")
	},
	$40_3 : function($p0) {
		if (IsNull($p0))
			return false;
		for ( var $v_0 = 0, $v_1 = $p0.length; $v_0 < $v_1; $v_0++) {
			var $v_2 = $p0[$v_0], $v_3 = $get("_prevPageImg", $v_2), $v_4 = $get(
					"_nextPageImg", $v_2);
			if (!IsNull($v_3) && !this.$4P_3($v_3) || !IsNull($v_4)
					&& !this.$4P_3($v_4))
				return true
		}
		return false
	},
	Print : function() {
		if (this.get_isDirty())
			alert(window.LOCID_FORM_PRINT_DIRTY_MESSAGE);
		else {
			var $v_0 = this.$40_3(Mscrm.Utilities.getChildElementsByClassName(
					this.get_element(), "ms-crm-Form-SubGrid-Layout", false));
			if (!$v_0)
				$v_0 = this.$40_3(Mscrm.Utilities.getChildElementsByClassName(
						this.get_element(),
						"ms-crm-Form-SubGrid-Layout-Selected", false));
			var $v_1 = 0;
			if ($v_0) {
				var $v_8 = Mscrm.CrmUri.create("/_grid/print/print_dlg.aspx");
				$v_8.get_query()["printform"] = "true";
				$v_1 = openStdDlg($v_8, null, parseInt(
						window.LOCID_PRINT_WINDOW_WIDTH, 10), parseInt(
						window.LOCID_PRINT_WINDOW_HEIGHT, 10));
				if (IsNull($v_1) || $v_1 === -1)
					return
			}
			var $v_2 = this.get_$1J_3(), $v_3 = $v_2.value, $v_4 = Mscrm.CrmUri
					.create("/_forms/print/print.aspx"), $v_5 = this
					.get_$45_3(), $v_6 = $v_4.get_query();
			$v_6["objectType"] = $v_5.value;
			$v_6["id"] = $v_3;
			$v_6["title"] = window.parent.document.title;
			$v_6["allsubgridspages"] = $v_1 === 1;
			var $v_7 = $find("crmFormSelector");
			if (!IsNull($v_7))
				$v_6["formid"] = $v_7.$q_3;
			openStdWin($v_4, "print" + buildWinName($v_3), 0, 0, null)
		}
	},
	BuildXml : function(validate, close, buildFullXml, validateForWorkflow,
			isDirtyCheck) {
		if (IsNull(this.$b_3))
			return 3;
		Mscrm.Utilities.syncInitAllControls();
		var $v_0 = this.get_$1J_3(), $v_1 = isNullOrEmptyString($v_0.value), $v_2 = this
				.$3G_3();
		if (!validateForWorkflow && !IsNull($v_2)
				&& Mscrm.FormDataEntity.isInstanceOfType($v_2)) {
			if (validate && !$v_2.validateForSave())
				return 2;
			var $v_9 = $v_1 && !close ? 0 : 1;
			if (!$v_1 && !!buildFullXml)
				$v_9 = 2;
			if (!this.$z_3 && $v_9 !== 1 && $v_2.hasDataToSerialize(1))
				this.$z_3 = true;
			if ($v_2.hasDataToSerialize($v_9)) {
				if (!this.$z_3 && $v_9 === 1)
					this.$z_3 = true;
				if (!isDirtyCheck) {
					var $v_A = this.get_$3F_3();
					$v_A.value = $v_2.serialize($v_9)
				}
				if (!this.$3M_3() && $v_1
						&& window.initialFormXml === $v_2.serialize($v_9))
					return 3;
				return 1
			} else if (isDirtyCheck)
				return this.$4L_3() ? 1 : 3;
			else
				return 3
		}
		var $v_3, $v_4 = this.get_element().getElementsByTagName("*"), $v_5 = "", $v_6 = "", $v_7 = false, $v_8 = false;
		if (!IsNull(validateForWorkflow) && validateForWorkflow)
			$v_8 = true;
		for ( var $v_B = 0, $v_C = $v_4.length; $v_B < $v_C; $v_B++) {
			$v_3 = $v_4[$v_B];
			var $v_D = Mscrm.FormControlInputBehavior.GetBehavior($v_3.id);
			switch ($v_3.tagName.toUpperCase()) {
			case "INPUT":
			case "SELECT":
			case "TEXTAREA":
			case "TABLE":
			case "DIV":
			case "SPAN":
			case "IMG":
			case "IFRAME":
				if (validate && !this.$4O_3($v_3, $v_8))
					return 2;
				var $v_E;
				if ($v_3.className === "ms-crm-Email-Body"
						&& !IsNull(isDirtyCheck) && isDirtyCheck) {
					var $v_H = Mscrm.FormControlInputBehavior
							.GetElementBehavior($v_3);
					$v_E = IsNull($v_H) ? null : $v_H.get_dataXmlUnEncoded()
				} else if (!IsNull($v_D))
					$v_E = $v_D.get_dataXml();
				else
					$v_E = $v_3.DataXml;
				var $v_F;
				if (Sys.UI.DomElement.containsCssClass($v_3, "ms-crm-Lookup")
						&& !IsNull($v_D) && !IsNull($v_D.get_dataValue())
						&& !IsNull(isDirtyCheck) && isDirtyCheck)
					$v_F = $v_D.get_dataValue();
				else if (!IsNull($v_D))
					$v_F = $v_D.get_dataValue();
				else
					$v_F = $v_3.DataValue;
				var $v_G = IsNull($v_D) ? Mscrm.FormControlInputBehavior
						.GetBehavior($v_3.id) : $v_D;
				if ($v_3.tagName.toUpperCase() === "IMG"
						&& ($v_3.IsDirty || !IsNull($v_G) && $v_G.get_isDirty())
						&& IsNull($v_F))
					$v_F = "";
				if ($v_3.id !== "chkAll" && !IsNull($v_E)) {
					var $v_I = false, $v_J = false, $v_K = Mscrm.FormUtility
							.getSlugControl($v_3);
					if (!IsNull($v_K) && $v_K.get_isDataSlug()) {
						$v_E = $v_K.get_slugValue();
						$v_I = true;
						$v_J = $v_K.get_isSlugDirty()
					}
					var $v_L = !IsNull($v_D) ? $v_D.get_isDirty()
							: $v_3.IsDirty, $v_M = !IsNull($v_D) ? $v_D
							.get_disabled() : $v_3.Disabled, $v_N = !IsNull($v_D) ? $v_D
							.get_forceSubmit()
							: $v_3.ForceSubmit, $v_O = !IsNull($v_D) ? $v_D
							.get_doNotSubmit() : $v_3.DoNotSubmit;
					if ($v_L || $v_I && $v_J)
						this.$z_3 = true;
					if ($v_N) {
						if ($v_L || $v_I && $v_J)
							$v_7 = true;
						$v_6 += $v_E
					} else {
						var $v_P = window._dirtyProperties;
						if (!$v_O
								&& ($v_1 && (!IsNull($v_F) || $v_I)
										&& !(close && !$v_L && !($v_I && $v_J)) || !$v_1
										&& ($v_L || !IsNull($v_P)
												&& $v_P[$v_3.id] === $v_3.id
												|| $v_I && $v_J || buildFullXml)
										&& !$v_M))
							$v_5 += $v_E;
						else if (!$v_O && this.$3M_3() && this.$z_3
								&& !IsNull($v_F) && !$v_M)
							$v_5 += $v_E
					}
				}
				break
			}
		}
		if (IsNull(isDirtyCheck) || !isDirtyCheck) {
			var $v_Q = this.get_$44_3(), $v_R = $v_Q.value, $v_S = this.$5R_3(), $v_T = $v_5
					+ $v_6, $v_U = this.get_$3F_3();
			if ($v_T.length > 0 && $v_S.length > 0) {
				for ( var $v_V = XUI.Xml.LoadXml("<changes>" + $v_T
						+ "</changes>"), $v_W = XUI.Xml.LoadXml("<mapped>"
						+ $v_S + "</mapped>"), $v_X = XUI.Xml.SelectNodes(
						$v_V.documentElement, "*", null), $v_Z = 0, $v_a = $v_X.length; $v_Z < $v_a; $v_Z++) {
					var $v_b = $v_X[$v_Z];
					if ($v_b.nodeType === 1) {
						var $v_c = XUI.Xml.SelectNodes($v_W.firstChild,
								$v_b.nodeName, null);
						!IsNull($v_c) && $v_c.length > 0
								&& $v_W.firstChild.removeChild($v_c[0])
					}
				}
				var $v_Y = XUI.Xml.XMLSerializer.serializeToString($v_W)
						.replace("<mapped>", "");
				$v_Y = $v_Y.replace("</mapped>", "");
				$v_U.value = String.format("<{0}>{1}</{0}>", CrmEncodeDecode
						.CrmXmlEncode($v_R), $v_T + $v_Y)
			} else
				$v_U.value = String.format("<{0}>{1}</{0}>", CrmEncodeDecode
						.CrmXmlEncode($v_R), $v_T + $v_S)
		}
		if ($v_5.length > 0 || $v_7)
			return 1;
		else
			return 3
	},
	GetControl : function(id) {
		return $get(id)
	},
	GetViewportHeight : function() {
		var $v_0 = this.get_element().parentNode.parentNode.parentNode, $v_1;
		$v_1 = $v_0.offsetHeight - 35;
		return $v_1
	},
	GetViewportWidth : function() {
		var $v_0 = this.get_element().parentNode;
		return $v_0.offsetWidth
	},
	SetFieldReqLevel : function(field, required) {
		var $v_0 = $get(field);
		if (IsNull($v_0))
			return;
		this.$4c_3($v_0, required)
	},
	SetAllFieldsToNonReqLevel : function() {
		for ( var $v_0 = this.get_element().getElementsByTagName("*"), $v_1 = 0, $v_2 = $v_0.length; $v_1 < $v_2; $v_1++) {
			var $v_3 = $v_0[$v_1];
			switch ($v_3.tagName.toUpperCase()) {
			case "INPUT":
			case "SELECT":
			case "TEXTAREA":
			case "TABLE":
			case "DIV":
			case "SPAN":
			case "IMG":
			case "IFRAME":
				!isNullOrEmptyString($v_3.id) && this.$4c_3($v_3, false);
				break
			}
		}
	},
	displayMissingValue : function(fieldName) {
		alert(String.format(window.LOCID_FORM_PROIVE_VALUE_MASK, fieldName))
	},
	GetTab : function(control, makeVisible) {
		var $v_0 = control;
		while (!IsNull($v_0) && $v_0.className !== "ms-crm-Tab"
				&& $v_0.className !== "ms-crm-InlineTab"
				&& $v_0 !== this.get_element())
			$v_0 = $v_0.parentNode;
		makeVisible && !IsNull($v_0) && $v_0 !== this.get_element()
				&& !this.$2q_3 && this.$6P_3($v_0);
		return $v_0
	},
	GetLabel : function(control) {
		var $v_0 = this.GetLabelControl(control);
		return !IsNull($v_0) ? Mscrm.Utilities.getNonHiddenInnerText($v_0)
				: control.id
	},
	GetLabelControl : function(control) {
		var $v_0 = $get(control.id + "_c");
		return !IsNull($v_0) ? XUI.Html.DomUtils.GetFirstChild($v_0) : null
	},
	SetLabel : function(control, label) {
		var $v_0 = this.GetLabelControl(control);
		if (!IsNull($v_0)) {
			var $v_1 = XUI.Html.DomUtils.GetFirstChild($v_0);
			if ($v_1.setAttribute)
				$v_1.setAttribute("data", label);
			else
				$v_1.data = label;
			return true
		}
		return false
	},
	HideField : function(control) {
		var $v_0 = this.GetLabelControl(control);
		$v_0.parentNode.parentNode.style.display = "none"
	},
	VerifyFieldIsSet : function(field, errorMessage) {
		var $v_0 = this.GetControl(field), $v_1 = Mscrm.FormControlInputBehavior
				.GetBehavior($v_0.id), $v_2 = $v_1.get_dataValue();
		if (isNullOrEmptyString($v_2)) {
			!IsNull(errorMessage) && alert(errorMessage);
			return false
		}
		return true
	},
	SetDeferredCmdId : function(cmdId) {
		var $v_0 = this.get_$3E_3();
		$v_0.value = cmdId
	},
	CloseAlertAttached : function() {
		return this.$2r_3
	},
	SetViewportTabSection : function(type, id, isViewport) {
		var $v_0;
		if (type === "tab")
			$v_0 = this.$25_3;
		else if (type === "section")
			$v_0 = this.$1I_3;
		else
			return;
		if (isViewport) {
			for ( var $v_1 = $v_0.length, $v_2 = 0; $v_2 < $v_1; $v_2++)
				if ($v_0[$v_2] === id)
					return;
			$v_0[$v_1] = id
		} else
			for ( var $v_3 = $v_0.length, $v_4 = 0; $v_4 < $v_3; $v_4++)
				if ($v_0[$v_4] === id)
					$v_0[$v_4] = null
	},
	ModifyMinimumTabHeight : function(height, tabId) {
		var $v_0 = this.$1Y_3[tabId];
		if (!IsNull($v_0)) {
			var $v_1 = $v_0 + height;
			if ($v_1 >= 0)
				this.$1Y_3[tabId] = $v_1
		}
	},
	HandleResize : function() {
		var $v_0 = window.document.readyState;
		if (!IsNull($v_0) && $v_0 !== "complete") {
			var $v_1 = this, $$t_2 = this;
			window.setTimeout(function() {
				$v_1.HandleResize()
			}, 10)
		} else
			executeFunctionDeferred(this.$$d_$4X_3, false, false)
	},
	$33_3 : false,
	get_isResizeFormComplete : function() {
		return this.$33_3
	},
	$4X_3 : function() {
		if (this.get_isDisposed())
			return;
		this.$33_3 = false;
		this.$4h_3();
		this.$4g_3();
		this.fireControlEvent("OnFormResized", null);
		this.$33_3 = true
	},
	setFirstElementFocus : function() {
		if (window.location.href.indexOf("dashboard.aspx") >= 0)
			return;
		if (this.$2F_3 && this.get_setInitialFocus() && !this.$4L_3()
				&& !this.$6H_3(window.document.activeElement) && !this.$6S_3()) {
			window.focus();
			if (!IsNull(this.get_$m_3())) {
				var $v_0 = this.$4C_3(false);
				if (IsNull($v_0))
					$v_0 = this.$4C_3(true);
				if (IsNull($v_0)) {
					var $$t_5 = this;
					$v_0 = this.get_$m_3().controls.getFirst(function($p1_0,
							$p1_1) {
						return $p1_0.getDisabled && !$p1_0.getDisabled()
								&& $p1_0.getAttribute && $p1_0.getAttribute()
					})
				}
				if (!IsNull($v_0)) {
					this.$2u_3 = true;
					try {
						$v_0.setFocus()
					} catch ($$e_1) {
					}
					this.$2u_3 = false
				}
			} else {
				var $v_1 = $get("tab0");
				if (!IsNull($v_1)
						&& Sys.UI.DomElement.containsCssClass($v_1,
								"ms-crm-InlineTab")) {
					this.$7G_3($v_1);
					Mscrm.Form.resetFormToVisibleArea()
				}
			}
		}
	},
	$6S_3 : function() {
		var $v_0 = window.document.documentElement.getElementsByTagName("a");
		if (!IsNull($v_0))
			for ( var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
				var $v_2 = $v_0[$v_1];
				if (Sys.UI.DomElement.containsCssClass($v_2,
						"ms-crm-FormSelector-SubItem-Selected")
						|| Sys.UI.DomElement.containsCssClass($v_2,
								"ms-crm-Nav-Subarea-Selected"))
					return true
			}
		return false
	},
	$6H_3 : function($p0) {
		if (IsNull($p0))
			return false;
		var $v_0 = $p0.tagName;
		return $v_0 === "INPUT" || $v_0 === "TEXTAREA" || $v_0 === "SELECT"
				|| $v_0 === "BUTTON" || $v_0 === "OPTION"
				|| $v_0 === "OPTGROUP" || $v_0 === "FIELDSET"
				|| $v_0 === "LABEL"
	},
	get_$m_3 : function() {
		return Xrm.Page.ui
	},
	get_$3E_3 : function() {
		if (IsNull(this.$2I_3))
			this.$2I_3 = $get("crmCmdId");
		return this.$2I_3
	},
	get_$3F_3 : function() {
		if (IsNull(this.$2N_3))
			this.$2N_3 = $get("crmFormSubmitXml");
		return this.$2N_3
	},
	get_$4t_3 : function() {
		if (IsNull(this.$2L_3))
			this.$2L_3 = $get("crmFormSubmitMode");
		return this.$2L_3
	},
	get_$46_3 : function() {
		if (IsNull(this.$2O_3))
			this.$2O_3 = $get("crmFormUserModified");
		return this.$2O_3
	},
	get_$1J_3 : function() {
		if (IsNull(this.$2K_3))
			this.$2K_3 = $get("crmFormSubmitId");
		return this.$2K_3
	},
	get_$45_3 : function() {
		if (IsNull(this.$2M_3))
			this.$2M_3 = $get("crmFormSubmitObjectType");
		return this.$2M_3
	},
	get_$44_3 : function() {
		if (IsNull(this.$2J_3))
			this.$2J_3 = $get("crmFormRootElem");
		return this.$2J_3
	},
	$5u_3 : function($p0) {
		this.HandleResize()
	},
	$6M_3 : function($p0) {
		var $v_0 = Mscrm.Utilities.getDomEventKeyCode($p0);
		$v_0 === 13 && $p0.target.tagName.toUpperCase() === "INPUT"
				&& $p0.target.getAttribute("type").toLowerCase() === "text"
				&& $p0.preventDefault()
	},
	$6K_3 : function($p0) {
		switch ($p0.keyCode) {
		case 27:
			this.CloseRecord();
			return;
		case 70:
			if ($p0.ctrlKey && $p0.shiftKey) {
				var $v_0 = $find("RelatedInformationPane");
				!IsNull($v_0) && $v_0.ToggleInformationPane($p0);
				return
			}
			break;
		case 123:
			if ($p0.shiftKey) {
				this.Save();
				return
			}
			break;
		case 54:
			if ($p0.ctrlKey) {
				this.ShowAppNav();
				return
			}
			break;
		case 83:
			if ($p0.ctrlKey) {
				if ($p0.altKey)
					return;
				document.activeElement.blur();
				document.activeElement.focus();
				if ($p0.shiftKey) {
					var $v_1 = window._saveAndNewEnabled;
					if (!IsNull($v_1))
						$v_1
								&& this.SubmitCrmForm(59, true, true, false,
										false);
					else {
						var $v_2 = this.get_$44_3(), $v_3 = $v_2.value, $v_4 = "Mscrm.Form."
								+ $v_3 + ".SaveAndNew", $v_5 = $v_3
								+ "|NoRelationship|Form|Mscrm.SaveAndNewPrimary";
						isRibbonControlEnabled($v_5, $v_4)
								&& executeRibbonCommand($v_5)
					}
				} else {
					this.Save();
					$p0.preventDefault()
				}
				return
			} else if ($p0.altKey) {
				document.activeElement.blur();
				document.activeElement.focus();
				this.SaveAndClose();
				$p0.preventDefault();
				return
			}
			break;
		case 68:
			if ($p0.ctrlKey && window._deleteActionEnabled) {
				!this.get_isNew()
						&& Mscrm.FormAction.onActionMenuClick("delete", this
								.get_objectTypeCode());
				return
			}
			break
		}
	},
	$59_3 : function($p0, $p1) {
		var $v_0 = this.$3G_3();
		if (!IsNull($v_0)) {
			var $v_1 = $v_0.fireOnSave($p1);
			!$v_1 && $p1.preventDefault()
		}
	},
	$55_3 : function($p0, $p1) {
		CustomFormSubmit($p0, $p1)
	},
	$54_3 : function() {
		var $v_0 = this.get_events().getHandler("onCloseEvent"), $v_1 = new Mscrm.FormCloseEventArgs;
		!IsNull($v_0) && $v_0(this, $v_1);
		return !$v_1.isDefaultPrevented()
	},
	fireSaveEvent : function(mode) {
		var $v_0 = $get("crmForm");
		if (!IsNull($v_0)) {
			var $v_1 = true;
			$v_1 = $v_0.IsHtc;
			if (!IsNull($v_1))
				return this.$5C_3(mode)
		}
		return this.$5B_3(mode)
	},
	$5B_3 : function($p0) {
		var $v_0 = this.get_events().getHandler("onSaveEvent"), $v_1 = new Mscrm.EntitySaveEventArgs(
				$p0);
		!IsNull($v_0) && $v_0(this, $v_1);
		return !$v_1.isDefaultPrevented()
	},
	$5A_3 : function($p0) {
		var $v_0 = this.get_events().getHandler(
				"OnSaveAppointmentAndServiceAppointmentEvent"), $v_1 = new Mscrm.EntitySaveEventArgs(
				$p0);
		$v_1.$2p_2 = true;
		!IsNull($v_0) && $v_0(this, $v_1);
		return !$v_1.isDefaultPrevented()
	},
	$5C_3 : function($p0) {
		var $v_0 = $get("crmForm"), $v_1 = this.$$d_$7B_3;
		$v_0.attachEvent("onsave", $v_1);
		var $v_2 = true;
		$v_2 = $v_0.fireSaveEvent($p0);
		$v_0.detachEvent("onsave", $v_1);
		return $v_2
	},
	$7B_3 : function() {
		var $v_0 = this.get_events().getHandler("onSaveEvent"), $v_1 = 0;
		$v_1 = window.event.Mode;
		var $v_2 = new Mscrm.EntitySaveEventArgs($v_1);
		!IsNull($v_0) && $v_0(this, $v_2);
		if ($v_2.isDefaultPrevented())
			window.event.returnValue = false
	},
	$3G_3 : function() {
		var $v_0 = $find("PrimaryEntity");
		return !IsNull($v_0) ? $v_0 : null
	},
	$4h_3 : function() {
		this.$4r_3();
		(IsNull(this.$1I_3) || IsNull(this.$1I_3[0]) && IsNull(this.$1C_3) || IsNull(this.$1C_3[0]))
				&& this.$3y_3();
		for ( var $v_0 = 0, $v_1 = this.$1I_3.length; $v_0 < $v_1; $v_0++) {
			var $v_2 = this.$1I_3[$v_0];
			if (IsNull($v_2))
				continue;
			var $v_3 = this.GetControl($v_2);
			if (IsNull($v_3))
				continue;
			var $v_4 = this.GetTab($v_3, false);
			if (!$v_4.offsetHeight || !$v_3.offsetHeight) {
				var $v_6 = $find($v_4.id);
				if (!IsNull($v_6)
						&& $v_6.getWrapper().getDisplayState() === "collapsed") {
					$v_6.add_tabStateChange(this.$$d_$5i_3);
					continue
				}
			}
			var $v_5 = Mscrm.FormUISection.$4E($v_3.id);
			if (IsNull(this.$1X_3[$v_2])) {
				this.$1X_3[$v_2] = $v_3.offsetHeight;
				this.$1Y_3[$v_4.id] = $v_4.offsetHeight
			}
			if (this.$2a_3 < this.$1Y_3[$v_4.id]) {
				if (parseInt($v_3.style.height, 10) !== this.$1X_3[$v_2]) {
					$v_5.$4W_4();
					$v_3.style.height = this.$1X_3[$v_2] + "px";
					$v_5.$3R_4()
				}
				continue
			} else {
				var $v_7 = this.$1X_3[$v_2] + this.$2a_3 - this.$1Y_3[$v_4.id];
				$v_5.$4W_4();
				$v_3.style.height = $v_7 + "px";
				$v_5.$3R_4()
			}
		}
		for ( var $v_8 = 0, $v_9 = this.$25_3.length; $v_8 < $v_9; $v_8++) {
			var $v_A = this.$25_3[$v_8];
			if (IsNull($v_A))
				continue;
			var $v_B = this.GetControl($v_A);
			if (IsNull($v_B))
				continue;
			if (!$v_B.offsetHeight)
				continue;
			var $v_C = XUI.Html.DomUtils.GetChildElementAt($v_B, 1);
			if (!IsNull($v_C)) {
				if (!$v_C.offsetHeight)
					continue;
				var $v_D = this.$2a_3
						- XUI.Html.DomUtils.GetFirstChild($v_B).offsetHeight, $v_E = parseInt(
						$v_C.style.height.replace("px", "").trim(), 10);
				if ($v_E !== $v_D && $v_D > 0)
					$v_C.style.height = $v_D + "px"
			}
		}
	},
	$4g_3 : function($p0) {
		for ( var $v_0 = [], $v_1 = 0; $v_1 < this.$1C_3.length; $v_1++) {
			var $v_2 = this.$1C_3[$v_1];
			if (IsNull($v_2))
				continue;
			var $v_3 = this.GetControl($v_2);
			if (IsNull($v_3))
				continue;
			var $v_4 = this.GetTab($v_3, false);
			if (!isNullOrEmptyString($p0) && $p0 !== $v_4.id)
				continue;
			if (!$v_4.offsetHeight || !$v_3.offsetHeight) {
				if (Array.contains($v_0, $v_4.id))
					continue;
				var $v_6 = $find($v_4.id);
				if (!IsNull($v_6)
						&& $v_6.getWrapper().getDisplayState() === "collapsed") {
					Array.add($v_0, $v_4.id);
					$v_6.add_tabStateChange(this.$$d_$5h_3);
					continue
				}
			}
			var $v_5 = Mscrm.FormUISection.$4E(this.$1C_3[$v_1]);
			!IsNull($v_5) && $v_5.$3R_4()
		}
	},
	$4r_3 : function() {
		this.$2a_3 = this.GetViewportHeight()
	},
	$5i_3 : function($p0, $p1) {
		var $v_0 = $p1, $v_1 = $p0;
		if ($v_0.$1q_1 === "expanded") {
			this.$4h_3();
			$v_1.remove_tabStateChange(this.$$d_$5i_3)
		}
	},
	$5h_3 : function($p0, $p1) {
		var $v_0 = $p1, $v_1 = $p0._control;
		if ($v_0.$1q_1 === "expanded") {
			this.$4g_3($v_1.get_id());
			$p0.remove_tabStateChange(this.$$d_$5h_3)
		}
	},
	$5J_3 : function() {
		var $v_0 = window.document.getElementById("crmFormTabContainer");
		if (IsNull($v_0))
			return;
		var $v_1 = 0, $$t_3 = this;
		XUI.Xml.DomUtils.ForEachChild($v_0, function($p1_0) {
			if ($p1_0.className === "ms-crm-InlineTab")
				if ($p1_0.getAttribute("IsViewportTab") === "1")
					$$t_3.$25_3[$v_1++] = $p1_0.id;
			return false
		})
	},
	$3y_3 : function() {
		var $v_0 = window.document.documentElement
				.getElementsByTagName("TABLE"), $v_1 = 0, $v_2 = 0;
		if (!IsNull($v_0))
			for ( var $v_3 = 0, $v_4 = $v_0.length; $v_3 < $v_4; $v_3++) {
				var $v_5 = $v_0[$v_3], $v_6 = $v_5
						.getAttribute("IsViewportSection");
				if (IsNull($v_6))
					continue;
				if ($v_6 === "1")
					this.$1I_3[$v_1++] = $v_5.id;
				else
					this.$1C_3[$v_2++] = $v_5.id
			}
	},
	$6G_3 : function() {
		if (typeof _appFormErrorOnNewPage !== Mscrm.TypeNames.undefinedType) {
			var $v_0 = _appFormErrorOnNewPage;
			return !IsNull($v_0) && $v_0
		} else
			return false
	},
	$3M_3 : function() {
		if (typeof _appFormErrorOnPage !== Mscrm.TypeNames.undefinedType) {
			var $v_0 = _appFormErrorOnPage;
			return !IsNull($v_0) && $v_0
		} else
			return false
	},
	$4C_3 : function($p0) {
		for ( var $$t_D = this, $v_0 = function($p1_0, $p1_1) {
			return $p1_0.getVisible() && $p1_0.getDisabled
					&& !$p1_0.getDisabled() && $p1_0.getAttribute
					&& $p1_0.getAttribute()
		}, $v_1 = null, $v_2 = this.get_$m_3().tabs, $v_3 = $v_2.getLength(), $v_4 = 0; $v_4 < $v_3
				&& IsNull($v_1); $v_4++) {
			var $v_5 = $v_2.get($v_4);
			if ($v_5.getVisible()
					&& ($p0 || $v_5.getDisplayState() === "expanded"))
				for ( var $v_6 = $v_5.sections, $v_7 = $v_6.getLength(), $v_8 = 0; $v_8 < $v_7
						&& IsNull($v_1); $v_8++) {
					var $v_9 = $v_6.get($v_8);
					if ($v_9.getVisible())
						$v_1 = $v_9.controls.getFirst($v_0)
				}
		}
		return $v_1
	},
	$7G_3 : function($p0) {
		for ( var $v_0 = $p0.getElementsByTagName("*"), $v_1 = 0, $v_2 = $v_0.length; $v_1 < $v_2; $v_1++) {
			var $v_3 = $v_0[$v_1], $v_4 = Mscrm.FormControlInputBehavior
					.GetBehavior($v_3.id);
			if (!IsNull($v_4))
				$v_4 = null;
			if ($v_3.tagName.toUpperCase() === "INPUT"
					&& $v_3.getAttribute("type") === "hidden")
				continue;
			var $v_5 = !IsNull($v_4) ? $v_4.get_dataValue() : $v_3.DataValue, $v_6 = !IsNull($v_4) ? $v_4
					.get_disabled()
					: $v_3.Disabled;
			if (this.get_setInitialFocus()
					&& typeof $v_5 !== Mscrm.TypeNames.undefinedType && !$v_6) {
				try {
					if (!IsNull($v_4)
							&& !Type.parse("Mscrm.IUIControl").isImplementedBy(
									$v_4))
						$v_4.setFocus();
					else
						$v_3.SetFocus()
				} catch ($$e_8) {
				}
				return
			}
		}
		this.set_setInitialFocus(false)
	},
	$2j_3 : function($p0) {
		if (IsNull(Mscrm.PageManager.get_instance())
				|| !Mscrm.PageManager.isFlatUIPage())
			return;
		var $v_0 = {}, $v_1 = null, $v_2 = this.get_$3E_3();
		if (!isNullOrEmptyString($v_2.value)) {
			var $v_5 = {};
			$v_5["key"] = $v_2.value;
			var $v_6 = this.raiseEvent(Mscrm.ScriptEvents.RetrieveCacheData,
					$v_5);
			if (!IsNull($v_6) && $v_6.length === 1) {
				$v_0 = $v_6[0];
				$v_1 = $v_2.value
			}
		}
		$v_0["etc"] = this.get_objectTypeCode();
		var $v_3 = Mscrm.Utilities.getContentUrl(this), $v_4 = $v_3.get_query();
		$v_0["_CreateFromId"] = $v_4["_CreateFromId"];
		$v_0["_CreateFromType"] = $v_4["_CreateFromType"];
		$v_0["pId"] = $v_4["pId"];
		$v_0["pName"] = $v_4["pName"];
		$v_0["pType"] = $v_4["pType"];
		$v_0["etn"] = this.get_objectTypeName();
		$v_0["action"] = $p0;
		$v_0["handlerId"] = "RecordUpdated";
		$v_0["isNew"] = this.get_isNew();
		try {
			$v_0["title"] = this.get_primaryFieldValue();
			$v_0["entitydisplayname"] = this.entityDisplayName;
			var $v_7 = this.get_$1J_3();
			$v_0["id"] = $v_7.value
		} catch ($$e_9) {
		}
		$v_0["refreshOnSave"] = this.$1z_3;
		if (this.$1z_3) {
			var $v_8 = Mscrm.CrmUri.create(window.location.href);
			delete $v_8.get_query().preloadcache;
			this.$b_3.setAttribute("action", $v_8.toString());
			$v_0["uri"] = $v_8.toString()
		}
		if (IsNull($v_1)) {
			var $v_9 = {};
			$v_9["data"] = $v_0;
			var $v_A = this
					.raiseEvent(Mscrm.ScriptEvents.InsertCacheData, $v_9), $v_B = $v_A[0];
			$v_2.value = $v_B
		}
	},
	$4c_3 : function($p0, $p1) {
		var $v_0 = Xrm.Page.data;
		if (!IsNull($v_0)) {
			var $v_3 = $v_0.entity.attributes.get($p0.id);
			if (!IsNull($v_3)) {
				$v_3.setRequiredLevel($p1 ? "required" : "none");
				return
			}
		}
		var $v_1 = Mscrm.FormControlInputBehavior.GetBehavior($p0.id);
		if (IsNull($v_1)) {
			var $v_4 = $p1 ? 2 : 0;
			$p0.req = $v_4
		} else
			$v_1.set_requiredLevel($p1 ? 2 : 0);
		var $v_2 = this.GetLabelControl($p0);
		!IsNull($v_2)
				&& Mscrm.Form.setFieldRequiredOrRecommended($v_2.parentNode,
						$p1 ? 2 : 0, window.LOCID_FORM_REQUIRED_ALT);
		if (!IsNull($p0.className)) {
			if ($p0.className === "ms-crm-Duration") {
				var $v_5 = $get($p0.id + "Select");
				$v_5.setAttribute("defaultbgcolor",
						$p1 ? window.LOCID_FORM_REQUIRED_BKG_COLOR : "");
				$v_5.className = "ms-crm-SelectBox"
			}
			if (Sys.UI.DomElement.containsCssClass($p0, "ms-crm-Lookup"))
				XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils
						.GetFirstChild($p0.parentNode.parentNode)).style.backgroundColor = $p1 ? window.LOCID_FORM_REQUIRED_BKG_COLOR
						: ""
		}
	},
	$7Y_3 : function() {
		Mscrm && Mscrm.RibbonData
				&& Mscrm.RibbonData.setRibbonEnabledState(false);
		var $v_0 = this.$4w_3();
		this.$1a_3 = true;
		if (XUI.Html.DispatchDomEvent(this.$b_3, XUI.Html
				.CreateDomEvent("submit"))) {
			if (!IsNull($find("crmInlinePageManager"))) {
				var $v_1 = Mscrm.FormControl.getHttpPostBody(this.$b_3), $v_2 = $find("crmContentPanel");
				$v_2.loadContentByPost(Mscrm.CrmUri.create(this.$b_3
						.getAttribute("action").toString()), $v_1)
			} else
				this.$b_3.submit();
			this.recordUpdating()
		} else {
			this.$1a_3 = false;
			Mscrm && Mscrm.RibbonData
					&& Mscrm.RibbonData.setRibbonEnabledState(true);
			this.$51_3($v_0)
		}
		if (!IsNull(Mscrm.PageManager.get_instance())
				&& Mscrm.PageManager.isFlatUIPage()
				&& this.$b_3.children.length > 0) {
			var $v_3 = this.get_$3E_3();
			$v_3.value = ""
		}
	},
	$51_3 : function($p0) {
		if (!IsNull(this.get_$m_3()) && !IsNull(this.get_$m_3().controls))
			for ( var $v_0 = this.get_$m_3().controls, $v_1 = 0, $v_2 = $p0.length; $v_1 < $v_2; $v_1++)
				$v_0.get($v_1).set_disabled($p0[$v_1])
	},
	$4w_3 : function() {
		var $v_0 = [];
		if (!IsNull(this.get_$m_3()) && !IsNull(this.get_$m_3().controls)) {
			var $$t_4 = this;
			this.get_$m_3().controls.forEach(function($p1_0, $p1_1) {
				try {
					if ($p1_0.get_disabled) {
						$v_0[$p1_1] = $p1_0.get_disabled();
						$p1_0.set_disabled(true)
					}
				} catch ($v_1) {
				}
			})
		}
		return $v_0
	},
	$75_3 : function($p0) {
		switch ($p0) {
		case 1:
			this.$2j_3("save");
			break;
		case 2:
			this.$2j_3("saveandclose");
			break;
		case 59:
			this.$2j_3("saveandnew");
			break;
		case 3:
			this.$2j_3("delete");
			break
		}
	},
	$6F_3 : function($p0) {
		var $v_0 = Mscrm.FormUtility.getSlugControl($p0);
		return !IsNull($v_0) && $v_0.get_isDataSlug()
	},
	$4O_3 : function($p0, $p1) {
		var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior($p0.id);
		if ($p1 && $p0.id === "ownerid") {
			if (typeof $p0.IsValid !== Mscrm.TypeNames.undefinedType
					&& !$p0.IsValid()) {
				$p0.SetFocus();
				return false
			} else if (!IsNull($v_0)
					&& typeof $v_0.get_isValid !== Mscrm.TypeNames.undefinedType
					&& !$v_0.get_isValid()) {
				$v_0.setFocus();
				return false
			}
			return true
		}
		var $v_1 = IsNull($v_0) ? $p0.RequiredLevel === FIELD_REQUIRED : $v_0
				.get_requiredLevel() === FIELD_REQUIRED, $v_2 = !IsNull($v_0) ? $v_0
				.get_disabled()
				: $p0.disabled, $v_3 = !IsNull($v_0) ? $v_0.get_dataValue()
				: $p0.DataValue;
		if ($p1 && $v_1 && !$v_2 && this.$6F_3($p0))
			return true;
		else if ($v_1 && IsNull($v_3) && !$v_2) {
			this.displayMissingValue(this.GetLabel($p0));
			if (!IsNull($v_0))
				$v_0.setFocus();
			else
				$p0.SetFocus();
			return false
		} else if (typeof $p0.IsValid !== Mscrm.TypeNames.undefinedType
				&& !$p0.IsValid()) {
			$p0.SetFocus();
			return false
		} else if (!IsNull($v_0)
				&& typeof $v_0.get_isValid !== Mscrm.TypeNames.undefinedType
				&& !$v_0.get_isValid()) {
			$v_0.setFocus();
			return false
		}
		return true
	},
	$4L_3 : function() {
		var $v_0 = false;
		if (typeof window.document.activeElement !== Mscrm.TypeNames.unknownType) {
			var $v_1 = window.document.activeElement;
			while (!IsNull($v_1) && $v_1 !== this.get_element()) {
				var $v_2 = $v_1.IsDirty;
				if (!IsNull($v_2)) {
					$v_0 = $v_2;
					break
				} else {
					var $v_3 = $v_1.id;
					if (!isNullOrEmptyString($v_3)) {
						var $v_4 = Mscrm.FormControlInputBehavior
								.GetBehavior($v_3);
						if (!IsNull($v_4))
							try {
								$v_0 = $v_4.get_isDirty();
								break
							} catch ($$e_5) {
							}
					}
				}
				$v_1 = $v_1.parentNode
			}
		}
		return $v_0
	},
	$5R_3 : function() {
		var $v_0 = $get("crmFormSubmitMappedDataRemainder");
		if (!IsNull($v_0))
			return $v_0.value;
		return ""
	},
	$6P_3 : function($p0) {
		this.$2q_3 = true;
		var $v_0 = $get("navInfo");
		!IsNull($v_0)
				&& XUI.Html.DispatchDomEvent($v_0, XUI.Html
						.CreateDomEvent("click"));
		var $v_1 = $find($p0.id);
		!IsNull($v_1) && !$v_1.get_visible() && $v_1.set_visible(true);
		var $v_2 = $get($p0.id + "Tab");
		!IsNull($v_2)
				&& XUI.Html.DispatchDomEvent($v_2, XUI.Html
						.CreateDomEvent("click"));
		if ($p0.className === "ms-crm-Tab") {
			var $v_3 = $get("crmTabBar"), $v_4 = XUI.Html.DomUtils
					.GetChildElementAt($v_3, parseInt($p0.id.substr(3), 10));
			XUI.Html.DispatchDomEvent($v_4, XUI.Html.CreateDomEvent("click"))
		} else {
			if (!IsNull($v_1) && $v_1.get_displayState() === "collapsed") {
				$v_1.set_displayState("expanded");
				Mscrm.FormUtility.refreshWindowInIE7()
			}
			!this.$2u_3 && this.$7C_3($p0)
		}
		this.$2q_3 = false
	},
	$7C_3 : function($p0) {
		var $v_0 = $get("formBodyContainer");
		if ($v_0) {
			var $v_1 = $v_0.scrollTop, $v_2 = $p0.offsetTop;
			if ($v_2 !== $v_1)
				$v_0.scrollTop = $v_2
		}
	}
};
Mscrm.FormNavControl = function($p0) {
	this.$$d_$7Q_3 = Function.createDelegate(this, this.$7Q_3);
	this.$$d_$5z_3 = Function.createDelegate(this, this.$5z_3);
	this.$$d_$6f_3 = Function.createDelegate(this, this.$6f_3);
	this.$$d_$6g_3 = Function.createDelegate(this, this.$6g_3);
	this.$$d_$6d_3 = Function.createDelegate(this, this.$6d_3);
	this.$$d_$2E_3 = Function.createDelegate(this, this.$2E_3);
	this.$$d_$6T_3 = Function.createDelegate(this, this.$6T_3);
	this.$$d_$77_3 = Function.createDelegate(this, this.$77_3);
	this.$$d_$5D_3 = Function.createDelegate(this, this.$5D_3);
	this.$$d_$6Q_3 = Function.createDelegate(this, this.$6Q_3);
	this.$$d_$6R_3 = Function.createDelegate(this, this.$6R_3);
	this.$$d_$6L_3 = Function.createDelegate(this, this.$6L_3);
	this.$$d_$6N_3 = Function.createDelegate(this, this.$6N_3);
	this.$2e_3 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri
			.create("/_imgs/navup.png"));
	this.$2d_3 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri
			.create("/_imgs/navdown.png"));
	this.$Q_3 = new Array(0);
	Mscrm.FormNavControl.initializeBase(this, [ $p0 ])
};
Mscrm.FormNavControl.isNavLinkEnabled = function(element) {
	return !Sys.UI.DomElement.containsCssClass(element,
			"ms-crm-Nav-Subarea-Disabled")
};
Mscrm.FormNavControl.enableNavLinks = function() {
	var $v_0 = Mscrm.FormNavControl.$4Q();
	if ($v_0)
		for ( var $v_1 = document.getElementsByTagName("a"), $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
			var $v_3 = $v_1[$v_2];
			if ($v_3.className.indexOf("ms-crm-Nav-Subarea-Link") >= 0)
				$v_3.className = $v_3.className.replace(
						"ms-crm-Nav-Subarea-Disabled", "")
		}
};
Mscrm.FormNavControl.$1i = function($p0) {
	return Sys.UI.DomElement.getVisible($p0)
};
Mscrm.FormNavControl.$n = function($p0, $p1) {
	Sys.UI.DomElement.setVisible($p0, $p1)
};
Mscrm.FormNavControl.$2A = function($p0) {
	return !IsNull($p0)
			&& (Sys.UI.DomElement.containsCssClass($p0,
					"ms-crm-FormSelector-SubItem") || Sys.UI.DomElement
					.containsCssClass($p0, "ms-crm-Nav-Subarea-Link"))
};
Mscrm.FormNavControl.$4N = function($p0) {
	return !IsNull($p0)
			&& Sys.UI.DomElement.containsCssClass($p0,
					"ms-crm-Nav-Group-Heading")
};
Mscrm.FormNavControl.$4Q = function() {
	return Mscrm.FormNavControl.$4R("_id")
};
Mscrm.FormNavControl.$4R = function($p0) {
	var $v_0 = window[$p0];
	if (!IsNull($v_0) && !isNullOrEmptyString($v_0))
		return false;
	return true
};
Mscrm.FormNavControl.glowPaneStrip = function(on, controlId) {
	var $v_0 = window.document.getElementById(controlId + "_paneStripDiv");
	Mscrm.Utilities.glowBackground(on, $v_0,
			"ms-crm-control-SideStrip-Hovered", "ms-crm-control-SideStrip")
};
Mscrm.FormNavControl.prototype = {
	$5G_3 : "180",
	$5F_3 : "40",
	$2Y_3 : null,
	$W_3 : null,
	$2W_3 : null,
	$1e_3 : null,
	$13_3 : null,
	$12_3 : null,
	$N_3 : null,
	$3Y_3 : null,
	add_$4n_3 : function($p0) {
		this.get_events().addHandler("AfterInit", $p0);
		this.get_isInitialized() && $p0(this, Sys.EventArgs.Empty)
	},
	remove_$4n_3 : function($p0) {
		this.get_events().removeHandler("AfterInit", $p0)
	},
	get_tabLinksListId : function() {
		return this.$2Y_3
	},
	set_tabLinksListId : function(value) {
		this.$2Y_3 = value;
		return value
	},
	get_subAreaLinksListId : function() {
		return this.$2W_3
	},
	set_subAreaLinksListId : function(value) {
		this.$2W_3 = value;
		return value
	},
	get_formSelector : function() {
		return this.$N_3
	},
	set_formSelector : function(value) {
		this.$N_3 = value;
		return value
	},
	initialize : function() {
		var $$t_9 = this;
		window
				.setTimeout(
						function() {
							Mscrm.CrmUIControl.prototype.initialize.call($$t_9);
							var $v_0 = $$t_9.get_element();
							$$t_9.$W_3 = isNullOrEmptyString($$t_9.$2Y_3) ? null
									: $get($$t_9.$2Y_3);
							$$t_9.$1e_3 = isNullOrEmptyString($$t_9.$2W_3) ? null
									: $get($$t_9.$2W_3);
							for ( var $v_1 = $$t_9.$W_3 ? $$t_9.$W_3
									.getElementsByTagName("A") : [], $v_2 = $$t_9.$1e_3 ? $$t_9.$1e_3
									.getElementsByTagName("A")
									: [], $v_3 = 0; $v_3 < $v_1.length; $v_3++)
								Array.add($$t_9.$Q_3, $v_1[$v_3]);
							var $v_4 = !IsNull($find("crmForm")), $v_5 = !Mscrm.FormNavControl
									.$4R("frmReloadId"), $v_6 = Mscrm.FormNavControl
									.$4Q();
							for ($v_3 = 0; $v_3 < $v_2.length; $v_3++) {
								var $v_8 = $v_2[$v_3];
								if (Sys.UI.DomElement.containsCssClass($v_8,
										"ms-crm-Nav-Subarea-Link")) {
									Array.add($$t_9.$Q_3, $v_8);
									if (!$v_4 && !$v_5)
										if ($v_6)
											Sys.UI.DomElement
													.addCssClass($v_8,
															"ms-crm-Nav-Subarea-Disabled");
										else
											Sys.UI.DomElement
													.removeCssClass($v_8,
															"ms-crm-Nav-Subarea-Disabled")
								}
							}
							$$t_9.$4d_3();
							$$t_9.$48_3(true);
							$addHandler($v_0, "keyup", $$t_9.$$d_$6N_3);
							$addHandler($v_0, "keydown", $$t_9.$$d_$6L_3);
							$addHandler($v_0, "mouseover", $$t_9.$$d_$6R_3);
							$addHandler($v_0, "mouseout", $$t_9.$$d_$6Q_3);
							$addHandler($v_0, "focusin", $$t_9.$$d_$5D_3);
							$addHandler($v_0, "focusout", $$t_9.$$d_$77_3);
							$addHandler($v_0, "click", $$t_9.$$d_$6T_3);
							$addHandler(window, "resize", $$t_9.$$d_$2E_3);
							window.UseTabletExperience
									&& $addHandler($v_0, "orientationchange",
											$$t_9.$$d_$6d_3);
							var $v_7 = $$t_9.get_events().getHandler(
									"AfterInit");
							!IsNull($v_7) && $v_7($$t_9, Sys.EventArgs.Empty);
							$$t_9.$2E_3(null)
						}, 0)
	},
	dispose : function() {
		var $v_0 = this.get_element();
		if (!IsNull($v_0)) {
			$removeHandler($v_0, "keyup", this.$$d_$6N_3);
			$removeHandler($v_0, "keydown", this.$$d_$6L_3);
			$removeHandler($v_0, "mouseover", this.$$d_$6R_3);
			$removeHandler($v_0, "mouseout", this.$$d_$6Q_3);
			$removeHandler($v_0, "focusin", this.$$d_$5D_3);
			$removeHandler($v_0, "focusout", this.$$d_$77_3);
			$removeHandler($v_0, "click", this.$$d_$6T_3)
		}
		try {
			$removeHandler(window, "resize", this.$$d_$2E_3);
			this.$48_3(false)
		} catch ($$e_1) {
		}
		!IsNull(this.$3Y_3) && Sys.Application.remove_load(this.$3Y_3);
		this.$Q_3 = null;
		this.$12_3 = null;
		this.$13_3 = null;
		this.$1e_3 = null;
		this.$W_3 = null;
		Mscrm.CrmUIControl.prototype.dispose.call(this)
	},
	getItemIds : function() {
		for ( var $v_0 = [], $v_1 = 0; $v_1 < this.$Q_3.length; $v_1++) {
			var $v_2 = this.$Q_3[$v_1];
			Sys.UI.DomElement.containsCssClass($v_2, "ms-crm-Nav-Subarea-Link")
					&& Array.add($v_0, $v_2.id)
		}
		return $v_0
	},
	getItemText : function(itemId) {
		var $v_0 = $get(itemId, this.get_element());
		if (!IsNull($v_0)) {
			var $v_1 = $v_0.getElementsByTagName("NOBR");
			if ($v_1.length > 0)
				return XUI.Html.GetText($v_1[0])
		}
		return null
	},
	getItemVisibility : function(itemId) {
		var $v_0 = $get(itemId, this.get_element());
		if (!IsNull($v_0)) {
			var $v_1 = $v_0.parentNode;
			return Mscrm.FormNavControl.$1i($v_1)
		}
		return false
	},
	setItemText : function(itemId, text) {
		var $v_0 = $get(itemId, this.get_element());
		if (!IsNull($v_0)) {
			var $v_1 = $v_0.getElementsByTagName("NOBR");
			$v_1.length > 0 && XUI.Html.SetText($v_1[0], text)
		}
	},
	setItemVisibility : function(itemId, visible) {
		var $v_0 = $get(itemId, this.get_element());
		if (!IsNull($v_0)) {
			var $v_1 = $v_0.parentNode;
			if (!visible && this.$13_3 === $v_0) {
				var $v_2 = Sys.UI.DomElement.containsCssClass($v_0,
						"ms-crm-FormSelector-SubItem") ? "ms-crm-FormSelector-SubItem"
						: "ms-crm-Nav-Subarea-Link", $$t_9 = this, $v_3 = function(
						$p1_0) {
					return Sys.UI.DomElement.containsCssClass($p1_0, $v_2)
				}, $v_4 = Array.indexOf(this.$Q_3, $v_0), $v_5 = this.$2f_3(
						this.$Q_3, $v_4, true, $v_3);
				if ($v_5 === $v_0)
					$v_5 = this.$2f_3(this.$Q_3, -1, true, $v_3);
				if ($v_5 === $v_0)
					$v_5 = this.$2f_3(this.$Q_3, -1, true);
				Mscrm.Utilities.click($v_5)
			}
			Mscrm.FormNavControl.$n($v_1, visible)
		}
	},
	$2f_3 : function($p0, $p1, $p2, $p3) {
		for ( var $v_0 = $p2 ? 1 : -1, $v_1 = $p1 + $v_0; $v_1 >= 0
				&& $v_1 < $p0.length; $v_1 += $v_0) {
			var $v_2 = $p0[$v_1];
			if (!$v_2.disabled && Mscrm.FormNavControl.$1i($v_2)
					&& (!$p3 || $p3($v_2))) {
				var $v_3 = $v_2.parentNode, $v_4 = this.get_element();
				while (!IsNull($v_3) && $v_3 !== $v_4 && $v_3.tagName !== "UL")
					$v_3 = $v_3.parentNode;
				if (!$v_3 || $v_3.tagName !== "UL"
						|| Mscrm.FormNavControl.$1i($v_3))
					return $v_2
			}
		}
		if ($p1 < 0)
			$p1 = 0;
		else if ($p1 >= $p0.length)
			$p1 = $p0.length - 1;
		return $p0[$p1]
	},
	$27_3 : function($p0) {
		var $v_0 = $p0.target, $v_1 = this.get_element();
		while (!IsNull($v_0) && $v_0 !== $v_1 && $v_0.tagName !== "A")
			$v_0 = $v_0.parentNode;
		if (!IsNull($v_0)
				&& $v_0.tagName === "A"
				&& (Mscrm.FormNavControl.$2A($v_0) || Mscrm.FormNavControl
						.$4N($v_0)))
			return $v_0;
		else
			return null
	},
	$6T_3 : function($p0) {
		var $v_0 = this.$27_3($p0), $v_1 = IsNull($v_0) ? null : $v_0
				.getAttribute("disabled");
		if (Mscrm.Utilities.parseBoolean($v_1))
			return;
		this.$2B_3(null);
		if (!IsNull($v_0) && !$v_0.disabled) {
			if (Mscrm.FormNavControl.$2A($v_0))
				this.$7D_3($v_0);
			else
				Mscrm.FormNavControl.$4N($v_0) && this.$52_3($v_0);
			$p0.ctrlKey && $p0.preventDefault()
		}
	},
	$6d_3 : function($p0) {
		var $v_0 = window.orientation;
		!($v_0 % 180) && Mscrm.FormNavControl.$1i($get("crmNavBar_paneTD"))
				&& this.sideStripOnClick()
	},
	$6N_3 : function($p0) {
		var $v_0 = this.$27_3($p0);
		if (!IsNull($v_0)) {
			var $v_1 = Mscrm.Utilities.getDomEventKeyCode($p0);
			if ($v_1 === 32)
				Mscrm.Utilities.click($v_0);
			else if (Mscrm.FormNavControl.$2A($v_0)) {
				var $v_2 = Array.indexOf(this.$Q_3, $v_0), $v_3 = true, $v_4 = true;
				switch ($v_1) {
				case 38:
					$v_3 = false;
					break;
				case 40:
					$v_3 = true;
					break;
				case 36:
					$v_2 = -1;
					$v_3 = true;
					break;
				case 35:
					$v_2 = this.$Q_3.length;
					$v_3 = false;
					break;
				default:
					$v_4 = false;
					break
				}
				if ($v_4) {
					var $v_5 = this.$2f_3(this.$Q_3, $v_2, $v_3);
					this.$2B_3($v_5)
				}
			}
		}
	},
	$6L_3 : function($p0) {
		switch (Mscrm.Utilities.getDomEventKeyCode($p0)) {
		case 38:
		case 40:
		case 36:
		case 35:
		case 32:
			$p0.preventDefault();
			break
		}
	},
	$6R_3 : function($p0) {
		var $v_0 = this.$27_3($p0);
		if (!IsNull($v_0) && Mscrm.FormNavControl.$2A($v_0) && !$v_0.disabled)
			if (Sys.UI.DomElement.containsCssClass($v_0,
					"ms-crm-FormSelector-SubItem")
					&& !Sys.UI.DomElement.containsCssClass($v_0,
							"ms-crm-FormSelector-SubItem-Selected"))
				Sys.UI.DomElement.addCssClass($v_0,
						"ms-crm-FormSelector-SubItem-Hovered");
			else if (Sys.UI.DomElement.containsCssClass($v_0,
					"ms-crm-Nav-Subarea-Link")
					&& !Sys.UI.DomElement.containsCssClass($v_0,
							"ms-crm-Nav-Subarea-Selected"))
				Sys.UI.DomElement.addCssClass($v_0,
						"ms-crm-Nav-Subarea-Hovered");
			else if (!(!Sys.UI.DomElement.containsCssClass($v_0,
					"ms-crm-FormSelector-SubItem") && !Sys.UI.DomElement
					.containsCssClass($v_0, "ms-crm-Nav-Subarea-Link")))
				return
	},
	$6Q_3 : function($p0) {
		var $v_0 = this.$27_3($p0);
		if (!IsNull($v_0)) {
			Sys.UI.DomElement.removeCssClass($v_0,
					"ms-crm-FormSelector-SubItem-Hovered");
			Sys.UI.DomElement
					.removeCssClass($v_0, "ms-crm-Nav-Subarea-Hovered")
		}
	},
	$5D_3 : function($p0) {
		var $v_0 = this.$27_3($p0);
		if (!IsNull($v_0))
			if (Mscrm.FormNavControl.$2A($v_0))
				this.$2B_3($v_0);
			else
				this.$2B_3(null)
	},
	$77_3 : function($p0) {
		this.$2B_3(null)
	},
	$2E_3 : function($p0) {
		if (this.get_element().parentNode.clientHeight <= 0) {
			var $$t_6 = this;
			window.setTimeout(function() {
				$$t_6.$2E_3($p0)
			}, 1);
			return
		}
		this.$4d_3();
		if (this.$W_3) {
			var $v_0 = this.$W_3.parentNode, $v_1 = this.get_element().parentNode.clientHeight - 13 - 5, $v_2 = IsNull(this.$N_3) ? 0
					: this.$N_3.get_height(), $v_3 = $v_2
					+ this.$W_3.scrollHeight;
			this.$7I_3($v_3 > .6 * $v_1, $v_1);
			var $v_4 = $v_1
					- ($v_0.offsetHeight + XUI.Html.DomUtils
							.GetNextSibling($v_0).offsetHeight);
			if ($v_4 > 0)
				this.$1e_3.style.height = $v_4.toString() + "px"
		}
	},
	$7I_3 : function($p0, $p1) {
		if ($p0) {
			var $v_0 = IsNull(this.$N_3) ? 0 : this.$N_3.get_height(), $v_1 = Math
					.round(.6 * $p1 - $v_0);
			if ($v_1 > 0)
				this.$W_3.style.height = $v_1.toString() + "px";
			this.$W_3.style.overflowY = "auto"
		} else {
			this.$W_3.style.height = "auto";
			this.$W_3.style.overflowY = "visible"
		}
	},
	$7D_3 : function($p0) {
		if (this.$13_3 !== $p0) {
			this.$4u_3(this.$13_3);
			this.$13_3 = $p0;
			if (!IsNull($p0))
				if (Sys.UI.DomElement.containsCssClass($p0,
						"ms-crm-FormSelector-SubItem"))
					Sys.UI.DomElement.addCssClass($p0,
							"ms-crm-FormSelector-SubItem-Selected");
				else if (Sys.UI.DomElement.containsCssClass($p0,
						"ms-crm-Nav-Subarea-Link"))
					!Sys.UI.DomElement.containsCssClass($p0,
							"ms-crm-Nav-Subarea-Disabled")
							&& Sys.UI.DomElement.addCssClass($p0,
									"ms-crm-Nav-Subarea-Selected")
		}
	},
	$4u_3 : function($p0) {
		if (!IsNull($p0) && this.$13_3 === $p0) {
			this.$13_3 = null;
			Sys.UI.DomElement.removeCssClass($p0,
					"ms-crm-FormSelector-SubItem-Selected");
			Sys.UI.DomElement
					.removeCssClass($p0, "ms-crm-Nav-Subarea-Selected")
		}
	},
	$52_3 : function($p0) {
		var $v_0 = XUI.Html.DomUtils.GetNextSibling($p0), $v_1 = $p0
				.getElementsByTagName("IMG")[0];
		if (Mscrm.FormNavControl.$1i($v_0)) {
			Sys.UI.DomElement.removeCssClass($v_1, this.$2e_3.cssClass);
			Sys.UI.DomElement.addCssClass($v_1, this.$2d_3.cssClass);
			$v_1.src = this.$2d_3.source;
			$v_1.alt = window.LOCID_TREE_PLUS;
			Mscrm.FormNavControl.$n($v_0, false)
		} else {
			Sys.UI.DomElement.removeCssClass($v_1, this.$2d_3.cssClass);
			Sys.UI.DomElement.addCssClass($v_1, this.$2e_3.cssClass);
			$v_1.src = this.$2e_3.source;
			$v_1.alt = window.LOCID_TREE_MINUS;
			Mscrm.FormNavControl.$n($v_0, true)
		}
	},
	$2B_3 : function($p0) {
		if (!IsNull(this.$12_3)) {
			Sys.UI.DomElement.removeCssClass(this.$12_3,
					"ms-crm-FormSelector-SubItem-Hovered");
			Sys.UI.DomElement.removeCssClass(this.$12_3,
					"ms-crm-Nav-Subarea-Hovered");
			this.$12_3 = null
		}
		if (!IsNull($p0) && !$p0.disabled) {
			var $v_0 = null;
			if (Sys.UI.DomElement.containsCssClass($p0,
					"ms-crm-FormSelector-SubItem")
					&& !Sys.UI.DomElement.containsCssClass($p0,
							"ms-crm-FormSelector-SubItem-Selected")) {
				Sys.UI.DomElement.addCssClass($p0,
						"ms-crm-FormSelector-SubItem-Hovered");
				$v_0 = this.$W_3
			} else if (Sys.UI.DomElement.containsCssClass($p0,
					"ms-crm-Nav-Subarea-Link")
					&& !Sys.UI.DomElement.containsCssClass($p0,
							"ms-crm-Nav-Subarea-Selected")) {
				Sys.UI.DomElement
						.addCssClass($p0, "ms-crm-Nav-Subarea-Hovered");
				$v_0 = this.$1e_3
			} else if (!(!Sys.UI.DomElement.containsCssClass($p0,
					"ms-crm-FormSelector-SubItem") && !Sys.UI.DomElement
					.containsCssClass($p0, "ms-crm-Nav-Subarea-Link")))
				return;
			this.$12_3 = $p0;
			this.$12_3.focus();
			if (!IsNull($v_0)) {
				var $v_1 = $v_0.scrollTop, $v_2 = $v_1 + $v_0.offsetHeight, $v_3 = $p0.offsetTop, $v_4 = $v_3
						+ $p0.offsetHeight;
				if ($v_3 < $v_1)
					$v_0.scrollTop = $v_3;
				else if ($v_4 > $v_2)
					$v_0.scrollTop = $v_4 - $v_0.offsetHeight
			}
		}
	},
	$48_3 : function($p0) {
		var $v_0 = window.document.getElementById("crmNavBar_paneStripDiv");
		if (!IsNull($v_0))
			if ($p0) {
				$addHandler($v_0, "mouseover", this.$$d_$6g_3);
				$addHandler($v_0, "mouseout", this.$$d_$6f_3)
			} else {
				$removeHandler($v_0, "mouseover", this.$$d_$6g_3);
				$removeHandler($v_0, "mouseout", this.$$d_$6f_3)
			}
		var $v_1 = window.document.getElementById("crmNavBar_paneAnchor");
		if (!IsNull($v_1))
			if ($p0) {
				$addHandler($v_1, "focus", this.$$d_$6g_3);
				$addHandler($v_1, "blur", this.$$d_$6f_3)
			} else {
				$removeHandler($v_1, "focus", this.$$d_$6g_3);
				$removeHandler($v_1, "blur", this.$$d_$6f_3)
			}
	},
	$6f_3 : function($p0) {
		Mscrm.FormNavControl.glowPaneStrip(false, "crmNavBar")
	},
	$6g_3 : function($p0) {
		Mscrm.FormNavControl.glowPaneStrip(true, "crmNavBar")
	},
	sideStripOnClick : function() {
		var $v_0 = Mscrm.FormNavControl.$1i($get("crmNavBar_paneTD"));
		if ($v_0)
			window.setTimeout(this.$$d_$5z_3, 1);
		else
			window.setTimeout(this.$$d_$7Q_3, 1);
		var $$t_1 = this;
		window.setTimeout(function() {
			$(window).trigger("navControlToggled", [ $v_0 ])
		}, 10)
	},
	$7Q_3 : function() {
		Mscrm.FormNavControl.$n($get("crmNavBar_paneTD"), true);
		Mscrm.FormNavControl.$n(
				$get("crmNavBar_VisualizationPaneStripToCollapse"), true);
		Mscrm.FormNavControl
				.$n($get("crmNavBar_VisualizationPaneStrip"), false);
		$get("crmNavBar").parentNode.style.width = this.$5G_3 + "px";
		var $v_0 = $get("mainContainer");
		$v_0.className = $v_0.className
				.replace("ms-crm-readForm-Container", "");
		$v_0.className += " ms-crm-readForm-Container-showNav";
		$get("expandedChevron_anchor").focus();
		if (Mscrm.FormUtility.isBrowserIE8OrLower()) {
			document.body.fireEvent("onresize");
			this.$2E_3(null)
		} else
			XUI.Html
					.DispatchDomEvent(window, XUI.Html.CreateDomEvent("resize"))
	},
	$5z_3 : function() {
		Mscrm.FormNavControl.$n($get("crmNavBar_paneTD"), false);
		Mscrm.FormNavControl.$n(
				$get("crmNavBar_VisualizationPaneStripToCollapse"), false);
		Mscrm.FormNavControl.$n($get("crmNavBar_VisualizationPaneStrip"), true);
		$get("crmNavBar").parentNode.style.width = this.$5F_3 + "px";
		var $v_0 = $get("mainContainer");
		$v_0.className = $v_0.className.replace(
				"ms-crm-readForm-Container-showNav", "");
		$v_0.className += " ms-crm-readForm-Container";
		$get("crmNavBar_paneAnchor").focus();
		if (Mscrm.FormUtility.isBrowserIE8OrLower()) {
			document.body.fireEvent("onresize");
			this.$2E_3(null)
		} else
			XUI.Html
					.DispatchDomEvent(window, XUI.Html.CreateDomEvent("resize"))
	},
	$4d_3 : function() {
		var $v_0 = $get("areaForm"), $v_1 = $get("mainContainer"), $v_2 = $get("divInformation");
		if (!IsNull($v_1))
			this.get_element().style.height = $v_1.clientHeight + "px";
		else if (!IsNull($v_0))
			if ($v_0.clientHeight)
				this.get_element().style.height = $v_0.clientHeight + "px";
			else if (!IsNull($v_2))
				this.get_element().style.height = $v_2.clientHeight + "px"
	}
};
Mscrm.FormSelector = function(element) {
	this.$$d_$5n_3 = Function.createDelegate(this, this.$5n_3);
	this.$$d_$5o_3 = Function.createDelegate(this, this.$5o_3);
	this.$$d_$5r_3 = Function.createDelegate(this, this.$5r_3);
	this.$$d_$5q_3 = Function.createDelegate(this, this.$5q_3);
	Mscrm.FormSelector.initializeBase(this, [ element ])
};
Mscrm.FormSelector.prototype = {
	$1t_3 : null,
	$2Q_3 : null,
	$q_3 : null,
	$1b_3 : null,
	$1D_3 : null,
	$1E_3 : null,
	$F_3 : null,
	get_formIds : function() {
		return this.$1t_3
	},
	set_formIds : function(value) {
		this.$1t_3 = value;
		return value
	},
	get_formTitles : function() {
		return this.$2Q_3
	},
	set_formTitles : function(value) {
		this.$2Q_3 = value;
		return value
	},
	get_currentFormId : function() {
		return this.$q_3
	},
	set_currentFormId : function(value) {
		this.$q_3 = value;
		return value
	},
	initialize : function() {
		Mscrm.CrmUIControl.prototype.initialize.call(this);
		if (this.get_element().tagName.toUpperCase() === "A") {
			this.$1D_3 = this.$$d_$5q_3;
			this.$1E_3 = this.$$d_$5r_3;
			$addHandler(this.get_element(), "click", this.$1D_3);
			$addHandler(this.get_element(), "keypress", this.$1E_3);
			this.$1b_3 = XUI.Html.DomUtils.GetNextSibling(this.get_element());
			$addHandler(this.$1b_3, "click", this.$1D_3);
			$addHandler(this.$1b_3, "keypress", this.$1E_3)
		}
	},
	dispose : function() {
		if (this.$1D_3) {
			$removeHandler(this.get_element(), "click", this.$1D_3);
			$removeHandler(this.$1b_3, "click", this.$1D_3);
			this.$1D_3 = null
		}
		if (this.$1E_3) {
			$removeHandler(this.get_element(), "keypress", this.$1E_3);
			$removeHandler(this.$1b_3, "keypress", this.$1E_3);
			this.$1E_3 = null
		}
		this.$1b_3 = null;
		Mscrm.CrmUIControl.prototype.dispose.call(this)
	},
	$1l_3 : function($p0) {
		var $v_0 = Mscrm.Utilities.getContentUrl(this);
		$v_0.get_query()["formid"] = $p0;
		var $v_1 = {};
		$v_1["sameWindow"] = true;
		openUrlByCrmUrl($v_0, $v_1)
	},
	$5q_3 : function($p0) {
		this.$4i_3()
	},
	$5r_3 : function($p0) {
		Mscrm.Utilities.getDomEventKeyCode($p0) === 32 && this.$4i_3()
	},
	$4i_3 : function() {
		this.$66_3();
		var $v_0 = this.get_element(), $v_1 = Mscrm.Utilities.getXYPos($v_0,
				window.LOCID_UI_DIR === "RTL");
		this.$F_3.set_top($v_0.offsetHeight + $v_1["y"]);
		this.$F_3.set_left($v_1["x"]);
		this.$F_3.show();
		Sys.UI.DomElement.removeCssClass($v_0, "ms-crm-FormSelector");
		Sys.UI.DomElement.addCssClass($v_0, "ms-crm-FormSelector-Opened")
	},
	$66_3 : function() {
		if (!this.$F_3) {
			var $v_0 = this.get_element();
			this.$F_3 = Mscrm.Menu.createMenuForParentElement(document.body);
			this.$F_3.set_stylePrefix(Mscrm.MenuStyles.formSelectorStylePrefix);
			this.$F_3.set_propagateStyle(true);
			this.$F_3.set_width($v_0.offsetWidth);
			this.$F_3.set_shiftVertical(false);
			this.$F_3.set_enforceHorizontalOffset(false);
			if (window.LOCID_UI_DIR === "RTL")
				this.$F_3.set_launchesRight(false);
			else
				this.$F_3.set_launchesRight(true);
			for ( var $v_1 = 0; $v_1 < this.$1t_3.length; $v_1++) {
				var $v_2 = this.$2Q_3[$v_1], $v_3 = this.$1t_3[$v_1], $v_4 = Mscrm.MenuItem
						.createMenuItem($v_2);
				$v_4.set_tooltip($v_2);
				$v_4.set_reference($v_3);
				$v_4.set_menuItemId($v_3);
				$v_4.set_actionCallback(this.$$d_$5o_3);
				this.$F_3.addItem($v_4);
				if ($v_3 === this.$q_3) {
					$v_4.set_isSelected(true);
					this.$F_3.set_focusElementOnShow($v_4.get_itemContents())
				}
			}
			this.$F_3.set_hideCallback(this.$$d_$5n_3);
			this.$F_3.set_focusElementOnHide(this.get_element())
		}
	},
	$5o_3 : function($p0) {
		$p0.get_reference() !== this.$q_3 && this.$1l_3($p0.get_reference())
	},
	$5n_3 : function($p0) {
		Sys.UI.DomElement.removeCssClass(this.get_element(),
				"ms-crm-FormSelector-Opened");
		Sys.UI.DomElement
				.addCssClass(this.get_element(), "ms-crm-FormSelector")
	}
};
Mscrm.FormUtility = function() {
};
Mscrm.FormUtility.isControlDirty = function(control) {
	var $v_0 = false;
	switch (control.tagName) {
	case "INPUT":
	case "SELECT":
	case "TEXTAREA":
	case "TABLE":
	case "DIV":
	case "SPAN":
	case "IMG":
	case "IFRAME":
		var $v_1 = false, $v_2 = Mscrm.FormUtility.getSlugControl(control);
		if (!IsNull($v_2) && $v_2.get_isDataSlug())
			$v_1 = $v_2.get_isSlugDirty();
		if (!isNullOrEmptyString(control.id)) {
			var $v_3 = Mscrm.FormControlInputBehavior.GetBehavior(control.id);
			if (!IsNull($v_3))
				$v_0 = $v_3.get_isDirty()
		}
		$v_0 = $v_0 || $v_1;
		break
	}
	return $v_0
};
Mscrm.FormUtility.isControlEditable = function(control) {
	var $v_0 = false;
	if (!IsNull(control.disabled))
		$v_0 = control.disabled;
	else if (control.contentEditable === "inherit")
		$v_0 = control.isContentEditable;
	else
		$v_0 = control.contentEditable === "true" ? true : false;
	return $v_0
};
Mscrm.FormUtility.setFormPropertyValue = function(name, value) {
	var $v_0 = Sys.Serialization.JavaScriptSerializer.deserialize(value), $v_1 = $get("crmForm"), $v_2 = $get(
			name, $v_1), $v_3 = Mscrm.FormControlInputBehavior
			.GetElementBehavior($v_2);
	$v_3.set_dataValue($v_0);
	$v_3.fireOnChange()
};
Mscrm.FormUtility.setEditableState = function(control, isDisabled) {
	if (!IsNull(control.disabled))
		control.disabled = isDisabled;
	else
		control.contentEditable = !isDisabled
};
Mscrm.FormUtility.getSlugControl = function(control) {
	if (control.tagName === "IMG" || control.className === "ms-crm-Money")
		while (control && IsNull(Mscrm.FormUtility.getSlugBehavior(control)))
			control = control.parentNode;
	else if (control.className === "ms-crm-Duration"
			&& control.tagName.toUpperCase() === "INPUT") {
		var $v_0 = XUI.Html.DomUtils.GetNextSibling(control);
		if ($v_0.className === "ms-crm-SelectBox")
			control = $v_0
	}
	return Mscrm.FormUtility.getSlugBehavior(control)
};
Mscrm.FormUtility.getSlugBehavior = function(behaviorOwner) {
	if (IsNull(behaviorOwner))
		return null;
	var $v_0 = Sys.UI.Behavior.getBehaviorByName(behaviorOwner, "SlugSupport");
	return IsNull($v_0) ? null : $v_0
};
Mscrm.FormUtility.getFormPropertyXmlValue = function(name, value) {
	var $v_0 = $get("crmForm"), $v_1 = $get(name, $v_0);
	return $v_1.DataXml
};
Mscrm.FormUtility.getFormDataXml = function() {
	var $v_0 = $find("crmForm");
	$v_0.BuildXml(false, false, false, false, false);
	var $v_1 = $get("crmFormSubmitXml");
	return $v_1.value
};
Mscrm.FormUtility.constructExecutionObject = function(eventSource, depth,
		eventArgs, eContext) {
	var $v_0 = new Mscrm.ExecutionContext(eventSource, Xrm.Page.context, depth,
			eventArgs, eContext);
	return $v_0
};
Mscrm.FormUtility.detachCloseAlert = function() {
	var $v_0 = $find("crmForm");
	$v_0.detachCloseAlert()
};
Mscrm.FormUtility.getCrmFormElement = function(objectTypeCode) {
	var $v_0;
	if (objectTypeCode === Mscrm.EntityTypeCode.Report)
		$v_0 = $find("crmFormSubmit");
	else
		$v_0 = $find("crmForm");
	return $v_0
};
Mscrm.FormUtility.$2b = function($p0, $p1, $p2) {
	if ($p2)
		if (Sys.Browser.agent === Sys.Browser.InternetExplorer)
			$addHandler($p0, "focusin", $p1);
		else
			$p0.addEventListener("focus", $p1, true);
	else if (Sys.Browser.agent === Sys.Browser.InternetExplorer)
		$removeHandler($p0, "focusin", $p1);
	else
		$p0.removeEventListener("focus", $p1, true)
};
Mscrm.FormUtility.refreshWindowInIE7 = function() {
	if (Mscrm.Utilities.get_ieBrowserVersion() > 0)
		if (IsNull(window.document.documentMode)
				|| window.document.documentMode === 7) {
			Sys.UI.DomElement.toggleCssClass(document.body, "IE7DivReset");
			Sys.UI.DomElement.toggleCssClass(document.body, "IE7DivReset")
		}
};
Mscrm.FormUtility.isBrowserIE8OrLower = function() {
	return Sys.Browser.agent === Sys.Browser.InternetExplorer
			&& Sys.Browser.version <= 8
};
function setFormPropertyValue(name, value) {
	Mscrm.FormUtility.setFormPropertyValue(name, value)
}
function getFormPropertyXmlValue(name, value) {
	return Mscrm.FormUtility.getFormPropertyXmlValue(name, value)
}
function getFormDataXml() {
	return Mscrm.FormUtility.getFormDataXml()
}
function saveAndCloseForm() {
	var $v_0 = $find("crmForm");
	!IsNull($v_0) && $v_0.SaveAndClose()
}
function isFormReadyToClose() {
	var $v_0 = $find("crmForm"), $v_1 = !$v_0 ? true : $v_0.IsReadyToClose();
	if ($v_1 && typeof Mscrm.ReadFormUtilities !== "undefined"
			&& typeof Mscrm.ReadFormUtilities.promptOnClose !== "undefined")
		return false === Mscrm.ReadFormUtilities.promptOnClose();
	return $v_1
}
function isCloseAlertAttached() {
	var $v_0 = $find("crmForm"), $v_1 = !$v_0 ? false : $v_0
			.CloseAlertAttached();
	if (!$v_1 && typeof Mscrm.ReadFormUtilities !== "undefined"
			&& typeof Mscrm.ReadFormUtilities.isRefreshForm !== "undefined")
		return Mscrm.ReadFormUtilities.isRefreshForm();
	return $v_1
}
function detachCloseAlert() {
	Mscrm.FormUtility.detachCloseAlert()
}
function getCrmFormElement(objectTypeCode) {
	return Mscrm.FormUtility.getCrmFormElement(objectTypeCode)
}
Mscrm.ExecutionContext = function($p0, $p1, $p2, $p3, $p4) {
	this.$3d_0 = $p0;
	this.$3b_0 = $p2;
	this.$3Z_0 = $p1;
	this.$3c_0 = $p3;
	if ($p4 && $p4.$1c_0)
		this.$1c_0 = $p4.$1c_0;
	else
		this.$1c_0 = {}
};
Mscrm.ExecutionContext.prototype = {
	$3c_0 : null,
	$3d_0 : null,
	$3b_0 : 0,
	$3Z_0 : null,
	$1c_0 : null,
	getEventArgs : function() {
		return this.$3c_0
	},
	getEventSource : function() {
		return this.$3d_0
	},
	getContext : function() {
		return this.$3Z_0
	},
	getDepth : function() {
		return this.$3b_0
	},
	setSharedVariable : function(key, variable) {
		this.$1c_0[key] = variable
	},
	getSharedVariable : function(key) {
		return this.$1c_0[key]
	}
};
Mscrm.FormIFrameControl = function(element) {
	this.$$d_$5w_4 = Function.createDelegate(this, this.$5w_4);
	this.$$d_$6b_4 = Function.createDelegate(this, this.$6b_4);
	this.$$d_$5H_4 = Function.createDelegate(this, this.$5H_4);
	Mscrm.FormIFrameControl.initializeBase(this, [ element ]);
	this.$3f_4 = element.id;
	this.$G_4 = element
};
Mscrm.FormIFrameControl.prototype = {
	$3f_4 : "",
	$G_4 : null,
	$2x_4 : "",
	$1f_4 : null,
	$3j_4 : false,
	initialize : function() {
		Mscrm.CrmUIControl.prototype.initialize.call(this);
		this.$2x_4 = this.$G_4.getAttribute("url");
		this.$1f_4 = this.$5X_4();
		this.$4p_4()
	},
	dispose : function() {
		$removeHandler(this.$G_4, "load", this.$$d_$5H_4);
		!IsNull(this.$1f_4) && this.$1f_4.remove_change(this.$$d_$6b_4);
		this.$G_4 = null;
		Mscrm.UIControl.prototype.dispose.call(this)
	},
	setFocus : function() {
		this.$G_4.focus()
	},
	get_disabled : function() {
		return false
	},
	set_disabled : function(value) {
		return value
	},
	handleEvent : function(eventCode, parameters, sourceComponent) {
		Mscrm.CrmUIControl.prototype.handleEvent.call(this, eventCode,
				parameters, sourceComponent);
		switch (eventCode) {
		case Mscrm.ScriptEvents.OnDashboardRefresh:
			if (!isNullOrEmptyString(this.$3f_4.trim()))
				if (!IsNull(this.$G_4))
					try {
						this.$G_4.src = this.$G_4.src
					} catch ($$e_3) {
					}
			break
		}
		return null
	},
	getSrc : function() {
		return this.$G_4.src
	},
	setSrc : function(src) {
		this.$G_4.src = src
	},
	getUrl : function() {
		return this.$2x_4
	},
	add_readyStateComplete : function(value) {
		this.get_events().addHandler("ReadyStateComplete", value)
	},
	remove_readyStateComplete : function(value) {
		this.get_events().removeHandler("ReadyStateComplete", value)
	},
	$7H_4 : function() {
		var $v_0 = this.get_element().parentNode.parentNode;
		if (IsNull($v_0))
			return;
		var $v_1 = this.get_element().id + "_d";
		if ($v_1 !== $v_0.id) {
			$v_0 = $v_0.parentNode;
			if (IsNull($v_0) || $v_0.id !== $v_1)
				return
		}
		if (!Sys.UI.DomElement
				.containsCssClass($v_0, "ms-crm-Field-Data-Print"))
			return;
		var $v_2 = 25, $v_3 = parseInt($v_0.getAttribute("rowspan"), 10);
		if (IsNull($v_3) || $v_3 < 1 || isNaN($v_3))
			$v_3 = 1;
		this.get_element().style.height = ($v_2 * $v_3).toString() + "px"
	},
	$5X_4 : function() {
		var $v_0 = null, $v_1 = $get("crmForm");
		if (!IsNull($v_1))
			$v_0 = $find("crmTabBar");
		return $v_0
	},
	$4I_4 : function($p0) {
		var $v_0 = this.get_element();
		while (!IsNull($v_0) && $v_0 !== $p0)
			$v_0 = $v_0.parentNode;
		return IsNull($v_0)
	},
	$5w_4 : function($p0, $p1) {
		if ($p1.$1q_1 === "expanded") {
			$p0.remove_tabStateChange(this.$$d_$5w_4);
			this.$1l_4()
		}
	},
	$1l_4 : function() {
		this.$3j_4 = true;
		if (!IsNull(this.$G_4.src)
				&& (this.$G_4.src.toLowerCase().endsWith("/_static/blank.htm") || this.$G_4.src
						.toLowerCase().endsWith(
								Mscrm.CrmUri.create("/_static/blank.htm")
										.toString().toLowerCase())))
			this.$G_4.src = this.$2x_4
	},
	$6b_4 : function($p0, $p1) {
		!this.$3j_4 && this.$4I_4($p1.get_tabContent()) && this.$1l_4()
	},
	$4p_4 : function() {
		this.$7H_4();
		$addHandler(this.$G_4, "load", this.$$d_$5H_4);
		var $v_0 = $find("crmForm");
		if (!IsNull($v_0)) {
			var $v_1 = $v_0.GetTab(this.get_element(), false);
			if (!IsNull($v_1)) {
				var $v_2 = $find($v_1.id);
				if ($v_2.get_displayState() === "expanded")
					this.$1l_4();
				else
					$v_2.add_tabStateChange(this.$$d_$5w_4)
			} else
				this.$1l_4()
		} else if (IsNull(this.$1f_4)
				|| this.$4I_4(this.$1f_4.get_currentTabContent())
				|| parseInt(this.get_element().getAttribute("preload"), 10) === 1)
			this.$1l_4();
		else
			this.$1f_4.add_change(this.$$d_$6b_4)
	},
	$5H_4 : function($p0) {
		var $v_0 = this.get_events().getHandler("ReadyStateComplete");
		if ($v_0) {
			var $v_1 = this.get_parent();
			!IsNull($v_1)
					&& Mscrm.FormUIControl.isInstanceOfType($v_1)
					&& $v_0(new Mscrm.IFrameUIControlWrapper($v_1),
							Sys.EventArgs.Empty)
		}
	}
};
Mscrm.LookupUIControl = function(control) {
	Mscrm.LookupUIControl.initializeBase(this, [ control ])
};
Mscrm.LookupUIControl.prototype = {
	addCustomView : function(viewGuid, entityName, viewDisplayName, fetchXml,
			layoutXml, isDefault) {
		this.get_$5_4().AddCustomView(viewGuid, entityName, viewDisplayName,
				fetchXml, layoutXml, isDefault)
	},
	getDefaultView : function() {
		return this.get_$5_4().get_defaultViewId()
	},
	setDefaultView : function(viewGuid) {
		this.get_$5_4().set_defaultViewId(viewGuid)
	}
};
Mscrm.OptionSetUIControl = function(control) {
	Mscrm.OptionSetUIControl.initializeBase(this, [ control ])
};
Mscrm.OptionSetUIControl.prototype = {
	addOption : function(option, placement) {
		this.get_$5_4().AddOption(option.text, option.value, null, placement)
	},
	clearOptions : function() {
		this.get_element().innerHTML = "";
		this.get_$5_4().AddOption("", "", null, 0)
	},
	removeOption : function(value) {
		this.get_$5_4().RemoveOption(value);
		this.get_$5_4().RemoveOption(value)
	}
};
Mscrm.PostBackUtil = function() {
};
Mscrm.PostBackUtil.boolToStr = function(b) {
	return b ? "true" : "false"
};
Mscrm.PostBackUtil.createHiddenInput = function(name, value) {
	var $v_0 = document.createElement("INPUT");
	$v_0.name = name;
	$v_0.id = name;
	$v_0.type = "hidden";
	$v_0.value = value;
	var $v_1 = $get("crmFormSubmit");
	$v_1.appendChild($v_0);
	return $v_0
};
Mscrm.PostBackUtil.deleteInput = function(element) {
	var $v_0 = element.parentNode;
	!IsNull($v_0) && $v_0.removeChild(element)
};
function boolToStr(b) {
	return Mscrm.PostBackUtil.boolToStr(b)
}
function createHiddenInput(name, value) {
	return Mscrm.PostBackUtil.createHiddenInput(name, value)
}
function deleteInput(element) {
	Mscrm.PostBackUtil.deleteInput(element)
}
Mscrm.FormProxyForRibbon = function(element) {
	Mscrm.FormProxyForRibbon.initializeBase(this, [ element ])
};
Mscrm.FormProxyForRibbon.prototype = {
	get_ribbonContextType : function() {
		return this.get_crmFormControl().get_ribbonContextType()
	},
	get_ribbonRelationshipType : function() {
		return this.get_crmFormControl().get_ribbonRelationshipType()
	},
	get_entityTypeCode : function() {
		return this.get_crmFormControl().get_entityTypeCode()
	},
	get_entityTypeName : function() {
		return this.get_crmFormControl().get_entityTypeName()
	},
	get_selectedRecordCount : function() {
		return this.get_crmFormControl().get_selectedRecordCount()
	},
	get_recordCount : function() {
		return this.get_crmFormControl().get_recordCount()
	},
	get_selectedIds : function() {
		return this.get_crmFormControl().get_selectedIds()
	},
	get_allRecordIds : function() {
		return this.get_crmFormControl().get_allRecordIds()
	},
	get_selectedRecords : function() {
		return this.get_crmFormControl().get_selectedRecords()
	},
	get_allRecords : function() {
		return this.get_crmFormControl().get_allRecords()
	},
	get_unselectedIds : function() {
		return this.get_crmFormControl().get_unselectedIds()
	},
	get_unselectedRecords : function() {
		return this.get_crmFormControl().get_unselectedRecords()
	},
	getUnformattedValue : function(column) {
		return this.get_crmFormControl().getUnformattedValue(column)
	},
	verifyRecordPermission : function(permissionMask) {
		return this.get_crmFormControl().verifyRecordPermission(permissionMask)
	},
	$2s_3 : null,
	get_crmFormControl : function() {
		if (!this.$2s_3)
			this.$2s_3 = window.parent.Sys.Application.findComponent("crmForm");
		return this.$2s_3
	}
};
Type.registerNamespace("Xrm");
Xrm.AttributeFormat = function() {
};
Xrm.AttributeType = function() {
};
Xrm.BooleanFormat = function() {
};
Xrm.ControlType = function() {
};
Xrm.ControlType.$5I = function($p0) {
	switch ($p0) {
	case 1:
		return "hidden";
	case 2:
		return "iframe";
	case 3:
		return "lookup";
	case -1:
		return "none";
	case 4:
		return "optionset";
	case 0:
		return "standard";
	case 5:
		return "subgrid";
	case 6:
		return "webresource";
	case 8:
		return "notes";
	default:
		return null
	}
};
Xrm.FormSaveAction = function() {
};
Xrm.RequiredLevel = function() {
};
Xrm.RequiredLevel.fromLegacyValue = function(level) {
	switch (level) {
	case 0:
		return "none";
	case 1:
		return "recommended";
	case 2:
		return "required"
	}
	return "none"
};
Xrm.RequiredLevel.toLegacyValue = function(level) {
	switch (level) {
	case "none":
		return 0;
	case "recommended":
		return 1;
	case "required":
		return 2
	}
	return 0
};
Xrm.SubmitMode = function() {
};
Xrm.TabDisplayState = function() {
};
Mscrm.OptionSetItem.registerClass("Mscrm.OptionSetItem");
Mscrm.ClientApiConstants.registerClass("Mscrm.ClientApiConstants");
Mscrm.ClientApiCollection.registerClass("Mscrm.ClientApiCollection");
Mscrm.ClientApiEventHandlerList
		.registerClass("Mscrm.ClientApiEventHandlerList");
Mscrm.ClientApiUtility.registerClass("Mscrm.ClientApiUtility");
Mscrm.FormEventArgs.registerClass("Mscrm.FormEventArgs", Sys.EventArgs);
Mscrm.EntitySaveEventArgs.registerClass("Mscrm.EntitySaveEventArgs",
		Mscrm.FormEventArgs);
Mscrm.FormCloseEventArgs.registerClass("Mscrm.FormCloseEventArgs",
		Mscrm.FormEventArgs);
Mscrm.FormDataManager.registerClass("Mscrm.FormDataManager");
Mscrm.FormDataAttributePrivilege
		.registerClass("Mscrm.FormDataAttributePrivilege");
Mscrm.FormUIElement.registerClass("Mscrm.FormUIElement", Mscrm.CrmUIControl,
		Mscrm.IClientApiCollectionItem);
Mscrm.FormUIControl.registerClass("Mscrm.FormUIControl", Mscrm.FormUIElement,
		Mscrm.IFormUIControl);
Mscrm.FormUIFormSelector.registerClass("Mscrm.FormUIFormSelector",
		Sys.Component);
Mscrm.FormUIManager.registerClass("Mscrm.FormUIManager", Sys.Component);
Mscrm.FormUINavigationBar.registerClass("Mscrm.FormUINavigationBar",
		Sys.Component);
Mscrm.FormUINavigationBarItem.registerClass("Mscrm.FormUINavigationBarItem",
		null, Mscrm.IClientApiCollectionItem);
Mscrm.FormUIRuleForm.registerClass("Mscrm.FormUIRuleForm", null,
		Mscrm.IClientApiCollectionItem);
Mscrm.FormUISection.registerClass("Mscrm.FormUISection", Mscrm.FormUIElement);
Mscrm.FormUITab.registerClass("Mscrm.FormUITab", Mscrm.FormUIElement);
Mscrm.TabStateChangeEventArgs.registerClass("Mscrm.TabStateChangeEventArgs",
		Sys.EventArgs);
Mscrm.AttributeWrapper.registerClass("Mscrm.AttributeWrapper");
Mscrm.BooleanAttributeWrapper.registerClass("Mscrm.BooleanAttributeWrapper",
		Mscrm.AttributeWrapper);
Mscrm.FormUIElementWrapper.registerClass("Mscrm.FormUIElementWrapper");
Mscrm.UIControlWrapper.registerClass("Mscrm.UIControlWrapper",
		Mscrm.FormUIElementWrapper);
Mscrm.DataUIControlWrapper.registerClass("Mscrm.DataUIControlWrapper",
		Mscrm.UIControlWrapper);
Mscrm.OptionSetUIControlWrapper.registerClass(
		"Mscrm.OptionSetUIControlWrapper", Mscrm.DataUIControlWrapper);
Mscrm.BooleanOptionSetUIControlWrapper.registerClass(
		"Mscrm.BooleanOptionSetUIControlWrapper",
		Mscrm.OptionSetUIControlWrapper);
Mscrm.BooleanUIControlWrapper.registerClass("Mscrm.BooleanUIControlWrapper",
		Mscrm.DataUIControlWrapper);
Mscrm.EntityWrapper.registerClass("Mscrm.EntityWrapper");
Mscrm.FormSelectorWrapper.registerClass("Mscrm.FormSelectorWrapper");
Mscrm.IFrameUIControlWrapper.registerClass("Mscrm.IFrameUIControlWrapper",
		Mscrm.UIControlWrapper);
Mscrm.LookupUIControlWrapper.registerClass("Mscrm.LookupUIControlWrapper",
		Mscrm.DataUIControlWrapper);
Mscrm.OptionSetAttributeWrapper.registerClass(
		"Mscrm.OptionSetAttributeWrapper", Mscrm.AttributeWrapper);
Mscrm.NavigationBarWrapper.registerClass("Mscrm.NavigationBarWrapper");
Mscrm.NumberAttributeWrapper.registerClass("Mscrm.NumberAttributeWrapper",
		Mscrm.AttributeWrapper);
Mscrm.SectionWrapper.registerClass("Mscrm.SectionWrapper",
		Mscrm.FormUIElementWrapper);
Mscrm.SubGridUIControlWrapper.registerClass("Mscrm.SubGridUIControlWrapper",
		Mscrm.UIControlWrapper);
Mscrm.TabWrapper.registerClass("Mscrm.TabWrapper", Mscrm.FormUIElementWrapper);
Mscrm.TextAttributeWrapper.registerClass("Mscrm.TextAttributeWrapper",
		Mscrm.AttributeWrapper);
Mscrm.WebResourceUIControlWrapper.registerClass(
		"Mscrm.WebResourceUIControlWrapper", Mscrm.UIControlWrapper);
Mscrm.WebResourceObjectUIControlWrapper.registerClass(
		"Mscrm.WebResourceObjectUIControlWrapper",
		Mscrm.WebResourceUIControlWrapper);
Mscrm.WebResourceDataUIControlWrapper.registerClass(
		"Mscrm.WebResourceDataUIControlWrapper",
		Mscrm.WebResourceObjectUIControlWrapper);
Mscrm.DataSlug.registerClass("Mscrm.DataSlug", Mscrm.CrmUIControl);
Mscrm.FormDataControl.registerClass("Mscrm.FormDataControl", Mscrm.UIControl,
		Mscrm.IFormDataControl);
Mscrm.EmailBodyControl.registerClass("Mscrm.EmailBodyControl",
		Mscrm.FormDataControl);
Mscrm.HiddenFormDataControl.registerClass("Mscrm.HiddenFormDataControl",
		Mscrm.FormDataControl);
Mscrm.NotesControl.registerClass("Mscrm.NotesControl", Mscrm.UIControl);
Mscrm.SlugSupport.registerClass("Mscrm.SlugSupport", Mscrm.CrmUIBehavior);
Mscrm.Association.registerClass("Mscrm.Association");
Mscrm.FormDataAttribute.registerClass("Mscrm.FormDataAttribute", Sys.Component,
		Mscrm.IClientApiCollectionItem, Mscrm.ISerializableFormData);
Mscrm.BooleanAttribute.registerClass("Mscrm.BooleanAttribute",
		Mscrm.FormDataAttribute);
Mscrm.DateTimeAttribute.registerClass("Mscrm.DateTimeAttribute",
		Mscrm.FormDataAttribute);
Mscrm.TextAttribute.registerClass("Mscrm.TextAttribute",
		Mscrm.FormDataAttribute);
Mscrm.EmailAddressAttribute.registerClass("Mscrm.EmailAddressAttribute",
		Mscrm.TextAttribute);
Mscrm.EmailBodyAttribute.registerClass("Mscrm.EmailBodyAttribute",
		Mscrm.FormDataAttribute);
Mscrm.FormDataEntity.registerClass("Mscrm.FormDataEntity", Sys.Component);
Mscrm.HtcProxyFormData.registerClass("Mscrm.HtcProxyFormData", null,
		Mscrm.ISerializableFormData);
Mscrm.LookupAttribute.registerClass("Mscrm.LookupAttribute",
		Mscrm.FormDataAttribute);
Mscrm.InlineFormDataLookupAttribute.registerClass(
		"Mscrm.InlineFormDataLookupAttribute", Mscrm.LookupAttribute);
Mscrm.InlineFormDataRelatedCasesLookupAttribute.registerClass(
		"Mscrm.InlineFormDataRelatedCasesLookupAttribute",
		Mscrm.InlineFormDataLookupAttribute);
Mscrm.NumberAttribute.registerClass("Mscrm.NumberAttribute",
		Mscrm.FormDataAttribute);
Mscrm.OptionSetAttribute.registerClass("Mscrm.OptionSetAttribute",
		Mscrm.FormDataAttribute);
Mscrm.RemainderData.registerClass("Mscrm.RemainderData", null,
		Mscrm.ISerializableFormData);
Mscrm.TickerAttribute.registerClass("Mscrm.TickerAttribute",
		Mscrm.TextAttribute);
Mscrm.UrlAttribute.registerClass("Mscrm.UrlAttribute", Mscrm.TextAttribute);
Mscrm.ValidationEventArgs.registerClass("Mscrm.ValidationEventArgs",
		Sys.EventArgs);
Mscrm.FormAction.registerClass("Mscrm.FormAction");
Mscrm.FormControl.registerClass("Mscrm.FormControl", Mscrm.CrmUIControl,
		Mscrm.IRibbonSelectionControl, Mscrm.IDataControl);
Mscrm.FormNavControl.registerClass("Mscrm.FormNavControl", Mscrm.CrmUIControl);
Mscrm.FormSelector.registerClass("Mscrm.FormSelector", Mscrm.CrmUIControl);
Mscrm.FormUtility.registerClass("Mscrm.FormUtility");
Mscrm.ExecutionContext.registerClass("Mscrm.ExecutionContext");
Mscrm.FormIFrameControl.registerClass("Mscrm.FormIFrameControl",
		Mscrm.UIControl);
Mscrm.LookupUIControl.registerClass("Mscrm.LookupUIControl",
		Mscrm.FormDataControl);
Mscrm.OptionSetUIControl.registerClass("Mscrm.OptionSetUIControl",
		Mscrm.FormDataControl);
Mscrm.PostBackUtil.registerClass("Mscrm.PostBackUtil");
Mscrm.FormProxyForRibbon.registerClass("Mscrm.FormProxyForRibbon",
		Mscrm.CrmUIControl, Mscrm.IRibbonSelectionControl, Mscrm.IDataControl);
Xrm.AttributeFormat.registerClass("Xrm.AttributeFormat");
Xrm.AttributeType.registerClass("Xrm.AttributeType");
Xrm.BooleanFormat.registerClass("Xrm.BooleanFormat");
Xrm.ControlType.registerClass("Xrm.ControlType");
Xrm.FormSaveAction.registerClass("Xrm.FormSaveAction");
Xrm.RequiredLevel.registerClass("Xrm.RequiredLevel");
Xrm.SubmitMode.registerClass("Xrm.SubmitMode");
Xrm.TabDisplayState.registerClass("Xrm.TabDisplayState");
Mscrm.ClientApiConstants.attributeIdPrefix = "Attribute_";
Mscrm.ClientApiConstants.primaryEntityId = "PrimaryEntity";
Mscrm.ClientApiUtility.$$cctor();
Mscrm.FormUIControl.$2n = null;
Mscrm.BooleanAttribute.$35 = [ false, true ];
Mscrm.EmailAddressAttribute.$3D = new RegExp(
		'^[^@\\s\\"<>)(\\[\\]:;,]+@[^@\\s\\"<>)(\\[\\]:;,]+$');
Mscrm.FormDataAttribute.sortableDateTimeLength = 19;
Mscrm.FormControl.$2m = -2;
Mscrm.FormControl.$1M = -1;
Mscrm.FormNavControl.toggleEvent = "navControlToggled";
Xrm.AttributeFormat.dateFormat = "date";
Xrm.AttributeFormat.dateTimeFormat = "datetime";
Xrm.AttributeFormat.durationFormat = "duration";
Xrm.AttributeFormat.emailFormat = "email";
Xrm.AttributeFormat.languageFormat = "language";
Xrm.AttributeFormat.noneFormat = "none";
Xrm.AttributeFormat.textFormat = "text";
Xrm.AttributeFormat.textAreaFormat = "textarea";
Xrm.AttributeFormat.tickerSymbolFormat = "tickersymbol";
Xrm.AttributeFormat.timeZoneFormat = "timezone";
Xrm.AttributeFormat.urlFormat = "url";
Xrm.AttributeType.booleanType = "boolean";
Xrm.AttributeType.dateTimeType = "datetime";
Xrm.AttributeType.decimalType = "decimal";
Xrm.AttributeType.doubleType = "double";
Xrm.AttributeType.integerType = "integer";
Xrm.AttributeType.lookupType = "lookup";
Xrm.AttributeType.memoType = "memo";
Xrm.AttributeType.moneyType = "money";
Xrm.AttributeType.optionSetType = "optionset";
Xrm.AttributeType.stringType = "string";
Xrm.BooleanFormat.checkBox = "checkbox";
Xrm.BooleanFormat.dropDown = "dropdown";
Xrm.BooleanFormat.radioButton = "radiobutton";
Xrm.ControlType.hidden = "hidden";
Xrm.ControlType.iFrame = "iframe";
Xrm.ControlType.lookup = "lookup";
Xrm.ControlType.none = "none";
Xrm.ControlType.optionSet = "optionset";
Xrm.ControlType.standard = "standard";
Xrm.ControlType.subGrid = "subgrid";
Xrm.ControlType.webResource = "webresource";
Xrm.ControlType.notes = "notes";
Xrm.FormSaveAction.save = "save";
Xrm.FormSaveAction.saveAndClose = "saveandclose";
Xrm.FormSaveAction.saveAndNew = "saveandnew";
Xrm.RequiredLevel.none = "none";
Xrm.RequiredLevel.recommended = "recommended";
Xrm.RequiredLevel.required = "required";
Xrm.SubmitMode.dirty = "dirty";
Xrm.SubmitMode.always = "always";
Xrm.SubmitMode.never = "never";
Xrm.TabDisplayState.collapsed = "collapsed";
Xrm.TabDisplayState.expanded = "expanded"