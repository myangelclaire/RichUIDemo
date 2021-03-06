Type.registerNamespace("Mscrm.FormInputControl");
Mscrm.FormInputControl.EmailAddressInputBehavior = function(element) {
	this.$$d_$B_5 = Function.createDelegate(this, this.$B_5);
	this.$$d_onDblClick = Function.createDelegate(this, this.onDblClick);
	this.$$d_$7_5 = Function.createDelegate(this, this.$7_5);
	this.$$d_$F_5 = Function.createDelegate(this, this.$F_5);
	this.$$d_$8_5 = Function.createDelegate(this, this.$8_5);
	this.$$d_onChange = Function.createDelegate(this, this.onChange);
	Mscrm.FormInputControl.EmailAddressInputBehavior.initializeBase(this,
			[ element ])
};
Mscrm.FormInputControl.EmailAddressInputBehavior.prototype = {
	$5_5 : true,
	$A_5 : null,
	$1_5 : false,
	$4_5 : null,
	initialize : function() {
		Mscrm.FormInputControl.TextInputBehaviorBase.prototype.initialize
				.call(this);
		this.$4_5 = this.get_element().value;
		$addHandler(this.get_element(), "change", this.$$d_onChange);
		$addHandler(this.get_element(), "blur", this.$$d_$8_5);
		$addHandler(this.get_element(), "focus", this.$$d_$F_5);
		$addHandler(this.get_element(), "keydown", this.$$d_$7_5);
		if (Mscrm.Utilities.isIosDevice())
			$addHandler(this.get_element(), "touchstart", this.$$d_onTouch);
		else
			$addHandler(this.get_element(), "dblclick", this.$$d_onDblClick);
		this.$A_5 = new RegExp(
				this.get_element().className !== "ms-crm-LiveId-Email-Address" ? '^[^@\\s"<>)(\\[\\]:;,]+@[^@\\s"<>)(\\[\\]:;,]+$'
						: "^[0-9a-zA-Z._-]+@[0-9a-zA-Z._-]+\\.[a-zA-Z]{2,5}$");
		attachWindowOnBeforeUnload(this.$$d_$B_5, null)
	},
	get_disabled : function() {
		return Mscrm.FormInputControl.TextInputBehaviorBase.prototype.get_disabled
				.call(this)
	},
	set_disabled : function(value) {
		this.get_element().className = value ? "ms-crm-Email-Address ms-crm-ReadOnly"
				: "ms-crm-Email-Address ms-crm-Input";
		Mscrm.FormInputControl.TextInputBehaviorBase.prototype.set_disabled
				.call(this, value);
		return value
	},
	dispose : function() {
		if (!IsNull(this.get_element())) {
			$removeHandler(this.get_element(), "change", this.$$d_onChange);
			$removeHandler(this.get_element(), "blur", this.$$d_$8_5);
			$removeHandler(this.get_element(), "focus", this.$$d_$F_5);
			$removeHandler(this.get_element(), "keydown", this.$$d_$7_5);
			if (Mscrm.Utilities.isIosDevice())
				$removeHandler(this.get_element(), "touchstart",
						this.$$d_onTouch);
			else
				$removeHandler(this.get_element(), "dblclick",
						this.$$d_onDblClick)
		}
		detachWindowOnBeforeUnload(this.$$d_$B_5, null);
		Mscrm.FormInputControl.TextInputBehaviorBase.prototype.dispose
				.call(this)
	},
	isValid : function() {
		return this.$0_5(true)
	},
	get_value : function() {
		return this.get_element().value.trim()
	},
	get_allowValidationMessage : function() {
		return this.$5_5
	},
	onChange : function(domEvent) {
		var $v_0 = !Mscrm.Utilities.isDefaultPrevented(domEvent.rawEvent);
		!this.$0_5($v_0) && Mscrm.Utilities.preventDefault(domEvent.rawEvent)
	},
	$8_5 : function($p0) {
		var $v_0 = !Mscrm.Utilities.isDefaultPrevented($p0.rawEvent);
		this.$1_5 && !this.$0_5($v_0)
				&& Mscrm.Utilities.preventDefault($p0.rawEvent)
	},
	$F_5 : function($p0) {
		this.$5_5 = true
	},
	onDblClick : function(domEvent) {
		this.$3_5(domEvent)
	},
	$3_5 : function($p0) {
		var $v_0 = this.get_value();
		if ($v_0.length > 0) {
			var $v_1 = !Mscrm.Utilities.isDefaultPrevented($p0.rawEvent);
			if (this.$0_5($v_1)) {
				var $v_2 = safeEmailWindowOpen(
						Mscrm.CrmUri.create("mailto:" + $v_0),
						"",
						"height="
								+ window.screen.availHeight
								* .75
								+ ",width="
								+ window.screen.availWidth
								* .75
								+ ",scrollbars=1,resizable=1,status=1,toolbar=1,menubar=1,location=1",
						false);
				!IsNull($v_2) && $v_2.close()
			} else
				Mscrm.Utilities.preventDefault($p0.rawEvent)
		}
	},
	verify : function() {
		return this.$0_5(true)
	},
	$0_5 : function($p0) {
		var $v_0 = this.get_value();
		this.$1_5 = false;
		if (this.get_isDirty())
			if ($v_0.length > 0
					&& !this.$A_5.test($v_0)
					&& (this.get_element().className === "ms-crm-LiveId-Email-Address" || !Mscrm.EmailAddressAttribute
							.isValidEmailWithQuotedString($v_0))) {
				$p0
						&& this.get_allowValidationMessage()
						&& this
								.showErrorMessage(window.LOCID_ENTER_VALID_EMAIL);
				this.handleParseError();
				this.$1_5 = true
			} else
				this.$4_5 = $v_0;
		return !this.$1_5
	},
	handleParseError : function() {
		this.setOldValue();
		this.setFocus()
	},
	$B_5 : function($p0) {
		this.$5_5 = false
	},
	showErrorMessage : function(message) {
		alert(message)
	},
	setOldValue : function() {
		this.get_element().value = this.$4_5
	},
	$7_5 : function($p0) {
		if ($p0.ctrlKey && $p0.keyCode === 13) {
			this.$3_5($p0);
			$p0.stopPropagation();
			$p0.preventDefault()
		}
	}
};
Mscrm.FormInputControl.TextAreaInputBehavior = function(element) {
	this.$$d_OnChangeRawEventHandler = Function.createDelegate(this,
			this.OnChangeRawEventHandler);
	Mscrm.FormInputControl.TextAreaInputBehavior.initializeBase(this,
			[ element ])
};
Mscrm.FormInputControl.TextAreaInputBehavior.prototype = {
	$9_5 : false,
	$6_5 : null,
	initialize : function() {
		Mscrm.FormInputControl.TextInputBehaviorBase.prototype.initialize
				.call(this);
		if (!this.$9_5) {
			this.$6_5 = Mscrm.Utilities.getLegacyEventHandler(this
					.get_element(), "onchange");
			Mscrm.Utilities.removeLegacyEventHandler(this.get_element(),
					"onchange");
			this.get_element().onchange = this.$$d_OnChangeRawEventHandler;
			this.$9_5 = true
		}
		this.$D_5();
		this.$C_5()
	},
	$C_5 : function() {
		var $v_0 = window.navigator.userAgent;
		if ($v_0.indexOf("MSIE 10.0") < 0
				|| !Mscrm.Utilities.get_isStandardsMode())
			return;
		this.get_element().style.position = "relative"
	},
	$D_5 : function() {
		var $v_0 = window.navigator.userAgent;
		if ($v_0.indexOf("MSIE 7.0") > -1
				&& Mscrm.Utilities.get_isStandardsMode()) {
			var $v_1 = this.get_element();
			if (!IsNull($v_1)) {
				var $v_2 = this.get_element().parentNode;
				if (!IsNull($v_2)) {
					var $v_3 = this.get_element().parentNode.parentNode;
					if (!IsNull($v_3)) {
						var $v_4 = $v_3.tagName;
						switch ($v_4) {
						case "TD":
							Sys.UI.DomElement.addCssClass($v_1,
									"ms-crm-IE7-Texarea");
							Sys.UI.DomElement.addCssClass($v_2,
									"ms-crm-IE7-td-Texarea-Container");
							$v_2.style.position = "relative";
							$v_2.style.left = "0px";
							$v_2.style.top = "0px";
							$v_2.style.height = "99%";
							$v_2.style.minHeight = "25px";
							$v_2.style.width = "auto";
							break;
						default:
							Sys.UI.DomElement.addCssClass($v_1,
									"ms-crm-IE7-Texarea");
							Sys.UI.DomElement.addCssClass($v_2,
									"ms-crm-IE7-Texarea-Container");
							break
						}
					}
				}
			}
		}
	},
	OnChangeRawEventHandler : function(eventObj) {
		if (IsNull(eventObj))
			eventObj = window.event;
		this.onChange(new Sys.UI.DomEvent(eventObj))
	},
	onChange : function(e) {
		var $v_0 = this.verify();
		!Mscrm.Utilities.isDefaultPrevented(e.rawEvent) && !$v_0
				&& Mscrm.Utilities.preventDefault(e.rawEvent);
		!Mscrm.Utilities.isDefaultPrevented(e.rawEvent) && !IsNull(this.$6_5)
				&& this.$6_5.call(this.get_element(), e.rawEvent)
	},
	verify : function() {
		var $v_0 = false;
		if (!this.get_disabled())
			if (!IsNull(this.get_element().getAttribute("maxLength"))) {
				var $v_1 = this.get_maxLength(), $v_2 = this.get_value();
				if ($v_2.length > $v_1)
					if (confirm(String.format(
							window.LOCID_EXCEEDED_MAX_CHARS_MASK, $v_1))) {
						$v_2 = $v_2.substr(0, $v_1);
						this.get_element().value = $v_2
					} else {
						this.get_element().select();
						$v_0 = true
					}
			}
		return !$v_0
	},
	get_disabled : function() {
		return Mscrm.FormInputControl.TextInputBehaviorBase.prototype.get_disabled
				.call(this)
	},
	set_disabled : function(value) {
		this.get_element().className = value ? "ms-crm-ReadOnly"
				: "ms-crm-Input";
		Mscrm.FormInputControl.TextInputBehaviorBase.prototype.set_disabled
				.call(this, value);
		return value
	}
};
Mscrm.FormInputControl.TextBoxInputBehavior = function(element) {
	this.$$d_onChange = Function.createDelegate(this, this.onChange);
	this.$$d_$8_5 = Function.createDelegate(this, this.$8_5);
	Mscrm.FormInputControl.TextBoxInputBehavior.initializeBase(this,
			[ element ])
};
Mscrm.FormInputControl.TextBoxInputBehavior.prototype = {
	$1_5 : false,
	initialize : function() {
		Mscrm.FormInputControl.TextInputBehaviorBase.prototype.initialize
				.call(this);
		$addHandler(this.get_element(), "blur", this.$$d_$8_5);
		$addHandler(this.get_element(), "change", this.$$d_onChange)
	},
	dispose : function() {
		if (!IsNull(this.get_element())) {
			$removeHandler(this.get_element(), "blur", this.$$d_$8_5);
			$removeHandler(this.get_element(), "change", this.$$d_onChange)
		}
		Mscrm.FormInputControl.TextInputBehaviorBase.prototype.dispose
				.call(this)
	},
	get_disabled : function() {
		return Mscrm.FormInputControl.TextInputBehaviorBase.prototype.get_disabled
				.call(this)
	},
	set_disabled : function(value) {
		this.get_element().className = value ? "ms-crm-Text ms-crm-ReadOnly"
				: "ms-crm-Text ms-crm-Input";
		Mscrm.FormInputControl.TextInputBehaviorBase.prototype.set_disabled
				.call(this, value);
		return value
	},
	$8_5 : function($p0) {
		this.$1_5 && this.fireOnChange()
	},
	onChange : function(e) {
		!this.verify() && Mscrm.Utilities.preventDefault(e.rawEvent)
	},
	verify : function() {
		this.$1_5 = false;
		var $v_0 = this.$2_4 ? this.get_element().value.trim() : this
				.get_element().value;
		if (this.get_isDirty())
			if ($v_0.length > this.get_maxLength()) {
				this.get_element().value = $v_0.substring(0, this
						.get_maxLength());
				alert(String.format(window.LOCID_MAXLENGTH_EXCEEDED, this
						.get_maxLength()));
				this.setFocus();
				this.$1_5 = true
			} else
				this.get_element().value = $v_0;
		return !this.$1_5
	}
};
Mscrm.FormInputControl.TextInputBehaviorBase = function(element) {
	this.$$d_handleBlur = Function.createDelegate(this, this.handleBlur);
	this.$$d_handleFocus = Function.createDelegate(this, this.handleFocus);
	this.$$d_onTouch = Function.createDelegate(this, this.onTouch);
	Mscrm.FormInputControl.TextInputBehaviorBase.initializeBase(this,
			[ element ])
};
Mscrm.FormInputControl.TextInputBehaviorBase.prototype = {
	$2_4 : false,
	initialize : function() {
		Mscrm.FormControlInputBehavior.prototype.initialize.call(this);
		var $v_0 = Sys.UI.Behavior.getBehaviorByName(this.get_element(),
				"SlugSupport");
		if (IsNull($v_0))
			this.$2_4 = this.get_element().getAttribute("defaultTrimValue") !== "false";
		$addHandler(this.get_element(), "focus", this.$$d_handleFocus);
		$addHandler(this.get_element(), "blur", this.$$d_handleBlur)
	},
	handleFocus : function(domEvent) {
		Sys.UI.DomElement.addCssClass(this.get_element().parentNode, "focus")
	},
	handleBlur : function(domEvent) {
		Sys.UI.DomElement
				.removeCssClass(this.get_element().parentNode, "focus")
	},
	get_isDataSlugSupported : function() {
		return true
	},
	get_isDirty : function() {
		return this.get_defaultValue() !== this.get_element().value
	},
	get_dataXml : function() {
		return String.format("<{0}>{1}</{0}>", this.get_element().id,
				CrmEncodeDecode.CrmXmlEncode(this.get_value()))
	},
	get_dataValue : function() {
		var $v_0 = this.get_value();
		return !$v_0.length ? null : $v_0
	},
	set_dataValue : function(value) {
		var $v_0 = IsNull(value) ? "" : value;
		if (typeof $v_0 === Mscrm.TypeNames.stringType) {
			this.get_element().value = $v_0;
			this.verify() && this.handleDataValueChangedEvent()
		} else
			alert(window.LOCID_DEVERROR_BADTYPE_STRING);
		return value
	},
	get_maxLength : function() {
		try {
			var $v_0 = this.get_element().getAttribute("maxLength");
			if (IsNull($v_0))
				return 2e3;
			return parseInt($v_0, 10)
		} catch ($$e_1) {
			return 2e3
		}
	},
	get_trimValue : function() {
		return this.$2_4
	},
	set_trimValue : function(value) {
		this.$2_4 = value;
		return value
	},
	get_defaultValue : function() {
		return this.get_element().defaultValue
	},
	dispose : function() {
		if (!IsNull(this.get_element())) {
			$removeHandler(this.get_element(), "focus", this.$$d_handleFocus);
			$removeHandler(this.get_element(), "blur", this.$$d_handleBlur)
		}
		Mscrm.CrmUIBehavior.prototype.dispose.call(this)
	},
	setFocus : function() {
		try {
			var form = $find("crmForm");
			!IsNull(form) && form.GetTab(this.get_element(), true);
			this.get_element().focus();
			this.get_element().select()
		} catch ($$e_0) {
		}
	},
	fireOnChange : function() {
		var $v_0 = XUI.Html.CreateDomEvent("change");
		XUI.Html.DispatchDomEvent(this.get_element(), $v_0)
	},
	get_disabled : function() {
		var $v_0 = false;
		if (!IsNull(this.get_element().disabled))
			$v_0 = this.get_element().disabled;
		else if (this.get_element().contentEditable === "inherit")
			$v_0 = this.get_element().isContentEditable;
		else
			$v_0 = this.get_element().contentEditable === "true" ? true : false;
		return $v_0
	},
	set_disabled : function(value) {
		this.setEditableState(value);
		return value
	},
	get_value : function() {
		return this.$2_4 ? this.get_element().value.trim()
				: this.get_element().value
	},
	get_allowTrimValue : function() {
		return this.$2_4
	},
	setEditableState : function(isDisabled) {
		if (!IsNull(this.get_element().disabled))
			this.get_element().disabled = isDisabled;
		this.get_element().contentEditable = !isDisabled
	},
	setDisplay : function(visibility) {
		var $v_0 = visibility ? "block" : "none";
		if (!IsNull(this.get_element())
				&& !IsNull(this.get_element().parentNode)) {
			this.get_element().style.display = $v_0;
			this.get_element().parentNode.style.display = $v_0
		}
	},
	onTouch : function(domEvent) {
		if (!event.targetTouches)
			return;
		var $v_0 = event.targetTouches.length;
		$v_0 === 2 && this.onDblTouch(domEvent)
	},
	onDblTouch : function(domEvent) {
		this.onDblClick(domEvent)
	},
	onDblClick : function(domEvent) {
	}
};
Mscrm.FormInputControl.TickerInputBehavior = function(element) {
	this.$$d_$7_5 = Function.createDelegate(this, this.$7_5);
	this.$$d_$E_5 = Function.createDelegate(this, this.$E_5);
	this.$$d_onChange = Function.createDelegate(this, this.onChange);
	Mscrm.FormInputControl.TickerInputBehavior
			.initializeBase(this, [ element ])
};
Mscrm.FormInputControl.TickerInputBehavior.prototype = {
	get_disabled : function() {
		return Mscrm.FormInputControl.TextInputBehaviorBase.prototype.get_disabled
				.call(this)
	},
	set_disabled : function(value) {
		this.get_element().className = value ? "ms-crm-Ticker ms-crm-ReadOnly"
				: "ms-crm-Ticker ms-crm-Input";
		Mscrm.FormInputControl.TextInputBehaviorBase.prototype.set_disabled
				.call(this, value);
		return value
	},
	initialize : function() {
		Mscrm.FormInputControl.TextInputBehaviorBase.prototype.initialize
				.call(this);
		this.$0_5();
		$addHandler(this.get_element(), "change", this.$$d_onChange);
		$addHandler(this.get_element(), "dblclick", this.$$d_$E_5);
		$addHandler(this.get_element(), "keydown", this.$$d_$7_5)
	},
	dispose : function() {
		if (!IsNull(this.get_element())) {
			$removeHandler(this.get_element(), "change", this.$$d_onChange);
			$removeHandler(this.get_element(), "dblclick", this.$$d_$E_5);
			$removeHandler(this.get_element(), "keydown", this.$$d_$7_5)
		}
		Mscrm.FormInputControl.TextInputBehaviorBase.prototype.dispose
				.call(this)
	},
	get_value : function() {
		return this.get_element().value
	},
	$3_5 : function() {
		var $v_0 = this.get_value();
		if ($v_0.length > 0) {
			this.$0_5();
			var $v_1 = Mscrm.CrmUri.create("http://go.microsoft.com/fwlink");
			$v_1.get_query()["linkid"] = 8506;
			$v_1.get_query()["clcid"] = window.USER_LANGUAGE_CODE.toString(16);
			$v_1.get_query()["Symbol"] = $v_0;
			$v_1.get_query()["q"] = $v_0;
			safeWindowOpen(
					$v_1,
					"",
					String
							.format(
									"height={0}, width={1}, scrollbars=1, resizable=1, status=1, toolbar=1, menubar=1, location=1",
									window.screen.availHeight * .75,
									window.screen.availWidth * .75), false,
					true)
		}
	},
	onChange : function(domEvent) {
		this.$0_5()
	},
	verify : function() {
		this.$0_5();
		return true
	},
	formatStringValue : function(value) {
		this.get_element().value = value.toUpperCase()
	},
	$E_5 : function($p0) {
		this.$3_5()
	},
	$0_5 : function() {
		var $v_0 = this.get_value().trim();
		if ($v_0.length > 0) {
			this.formatStringValue($v_0);
			this.get_element().setAttribute("title",
					String.format(window.LOCID_OPEN_TICKER_MASK, $v_0))
		}
	},
	$7_5 : function($p0) {
		if ($p0.ctrlKey && $p0.keyCode === 13) {
			this.$3_5();
			$p0.stopPropagation();
			$p0.preventDefault()
		}
	}
};
Mscrm.FormInputControl.UrlInputBehavior = function(element) {
	this.$$d_onDblClick = Function.createDelegate(this, this.onDblClick);
	this.$$d_$7_5 = Function.createDelegate(this, this.$7_5);
	this.$$d_$8_5 = Function.createDelegate(this, this.$8_5);
	this.$$d_onChange = Function.createDelegate(this, this.onChange);
	Mscrm.FormInputControl.UrlInputBehavior.initializeBase(this, [ element ])
};
Mscrm.FormInputControl.UrlInputBehavior.prefixHttp = function(value, maxLength) {
	value = value.trim();
	if (1 !== validateUrlProtocol(value))
		value = "http://" + value.substring(0, maxLength - 7);
	return value
};
Mscrm.FormInputControl.UrlInputBehavior.prototype = {
	$1_5 : false,
	$4_5 : null,
	initialize : function() {
		Mscrm.FormInputControl.TextInputBehaviorBase.prototype.initialize
				.call(this);
		this.saveOldValue();
		$addHandler(this.get_element(), "change", this.$$d_onChange);
		$addHandler(this.get_element(), "blur", this.$$d_$8_5);
		$addHandler(this.get_element(), "keydown", this.$$d_$7_5);
		if (Mscrm.Utilities.isIosDevice())
			$addHandler(this.get_element(), "touchstart", this.$$d_onTouch);
		else
			$addHandler(this.get_element(), "dblclick", this.$$d_onDblClick)
	},
	get_disabled : function() {
		return Mscrm.FormInputControl.TextInputBehaviorBase.prototype.get_disabled
				.call(this)
	},
	set_disabled : function(value) {
		this.get_element().className = value ? "ms-crm-Url ms-crm-ReadOnly"
				: "ms-crm-Url ms-crm-Input";
		Mscrm.FormInputControl.TextInputBehaviorBase.prototype.set_disabled
				.call(this, value);
		return value
	},
	dispose : function() {
		if (!IsNull(this.get_element())) {
			$removeHandler(this.get_element(), "change", this.$$d_onChange);
			$removeHandler(this.get_element(), "blur", this.$$d_$8_5);
			$removeHandler(this.get_element(), "keydown", this.$$d_$7_5);
			if (Mscrm.Utilities.isIosDevice())
				$removeHandler(this.get_element(), "touchstart",
						this.$$d_onTouch);
			else
				$removeHandler(this.get_element(), "dblclick",
						this.$$d_onDblClick)
		}
		Mscrm.FormInputControl.TextInputBehaviorBase.prototype.dispose
				.call(this)
	},
	isValid : function() {
		return this.$0_5(true)
	},
	get_value : function() {
		return this.get_element().value.trim()
	},
	onChange : function(domEvent) {
		var $v_0 = !Mscrm.Utilities.isDefaultPrevented(domEvent.rawEvent);
		!this.$0_5($v_0) && Mscrm.Utilities.preventDefault(domEvent.rawEvent)
	},
	$8_5 : function($p0) {
		this.$1_5 && !this.$0_5(true)
				&& Mscrm.Utilities.preventDefault($p0.rawEvent)
	},
	verify : function() {
		return this.$0_5(true)
	},
	onDblClick : function(domEvent) {
		this.$3_5()
	},
	$3_5 : function() {
		var $v_0 = this.get_value();
		if ($v_0.length > 0) {
			var $v_1 = "";
			switch (validateUrlProtocol($v_0)) {
			case 0:
				$v_1 = Mscrm.FormInputControl.UrlInputBehavior.prefixHttp($v_0,
						this.get_maxLength());
				break;
			case 1:
				$v_1 = $v_0;
				break;
			case 2:
			default:
				this.get_element().select();
				return
			}
			var $v_2 = Mscrm.CrmUri.createForOrganization($v_1, null);
			$v_2.checkParamsNoEqual = true;
			safeWindowOpen(
					$v_2,
					"",
					"height="
							+ window.screen.availHeight
							* .75
							+ ",width="
							+ window.screen.availWidth
							* .75
							+ ",scrollbars=1,resizable=1,status=1,toolbar=1,menubar=1,location=1",
					false, true)
		} else
			this.get_element().title = ""
	},
	$0_5 : function($p0) {
		var $v_0 = this.get_value();
		this.$1_5 = false;
		if (this.get_isDirty())
			if ($v_0.length > 0) {
				var $v_1 = validateUrlProtocol($v_0);
				if (!$v_1 || $v_1 === 1 || "ABOUT:BLANK" === $v_0.toUpperCase()) {
					this.get_element().title = window.LOCID_DBLCLICK_URL_OPEN;
					!$v_1 && this.formatStringValue($v_0);
					this.saveOldValue()
				} else {
					$p0
							&& this
									.showErrorMessage(window.LOCID_URLCTRL_INVALID_PROTOCOL);
					this.handleParseError();
					this.$1_5 = true
				}
			} else
				this.get_element().title = "";
		return !this.$1_5
	},
	handleParseError : function() {
		this.restoreOldValue();
		this.setFocus()
	},
	saveOldValue : function() {
		this.$4_5 = this.get_value()
	},
	restoreOldValue : function() {
		this.get_element().value = this.$4_5
	},
	formatStringValue : function(value) {
		this.get_element().value = Mscrm.FormInputControl.UrlInputBehavior
				.prefixHttp(value, this.get_maxLength())
	},
	showErrorMessage : function(message) {
		alert(message)
	},
	$7_5 : function($p0) {
		if ($p0.ctrlKey && $p0.keyCode === 13) {
			this.$3_5();
			$p0.stopPropagation();
			$p0.preventDefault()
		}
	}
};
Mscrm.FormInputControl.TextInputBehaviorBase.registerClass(
		"Mscrm.FormInputControl.TextInputBehaviorBase",
		Mscrm.FormControlInputBehavior);
Mscrm.FormInputControl.EmailAddressInputBehavior.registerClass(
		"Mscrm.FormInputControl.EmailAddressInputBehavior",
		Mscrm.FormInputControl.TextInputBehaviorBase);
Mscrm.FormInputControl.TextAreaInputBehavior.registerClass(
		"Mscrm.FormInputControl.TextAreaInputBehavior",
		Mscrm.FormInputControl.TextInputBehaviorBase);
Mscrm.FormInputControl.TextBoxInputBehavior.registerClass(
		"Mscrm.FormInputControl.TextBoxInputBehavior",
		Mscrm.FormInputControl.TextInputBehaviorBase);
Mscrm.FormInputControl.TickerInputBehavior.registerClass(
		"Mscrm.FormInputControl.TickerInputBehavior",
		Mscrm.FormInputControl.TextInputBehaviorBase);
Mscrm.FormInputControl.UrlInputBehavior.registerClass(
		"Mscrm.FormInputControl.UrlInputBehavior",
		Mscrm.FormInputControl.TextInputBehaviorBase)