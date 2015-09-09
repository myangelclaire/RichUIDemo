Type.registerNamespace("Mscrm.FormInputControl");
Mscrm.FormInputControl.IDateTimeControl = function() {
};
Mscrm.FormInputControl.IDateTimeControl
		.registerInterface("Mscrm.FormInputControl.IDateTimeControl");
Mscrm.FormInputControl.DateTimeBehavior = function(element) {
	this.$$d_$e_4 = Function.createDelegate(this, this.$e_4);
	this.$$d_$f_4 = Function.createDelegate(this, this.$f_4);
	this.$$d_$g_4 = Function.createDelegate(this, this.$g_4);
	this.$$d_$Q_4 = Function.createDelegate(this, this.$Q_4);
	this.$$d_$k_4 = Function.createDelegate(this, this.$k_4);
	this.$$d_$i_4 = Function.createDelegate(this, this.$i_4);
	this.$$d_$m_4 = Function.createDelegate(this, this.$m_4);
	Mscrm.FormInputControl.DateTimeBehavior.initializeBase(this, [ element ])
};
Mscrm.FormInputControl.DateTimeBehavior.registerDateTimeComponents = function(
		field, events) {
	var $v_0 = field.getElementsByTagName("table");
	if ($v_0.length > 0) {
		var $v_1 = $v_0[0];
		if (isNullOrEmptyString($v_1.id))
			$v_1.id = field.id + "_dateTimeControl";
		var $v_2 = null, $v_3 = $v_1.getElementsByTagName("img");
		if ($v_3.length > 0
				&& !IsNull(XUI.Html.DomUtils.GetNextSibling($v_3[0]))) {
			$v_2 = $v_3[0];
			$v_2.id = field.id + "img";
			XUI.Html.DomUtils.GetNextSibling($v_2).id = field.id
					+ "CalContainer"
		}
		var $v_4 = {};
		$v_4["dateTimeControlId"] = $v_1.id;
		var $v_5 = $v_1.getAttribute("format");
		if ($v_5 === "datetime" || $v_5 === "time") {
			var $v_6 = $v_1.getElementsByTagName("span");
			if ($v_6.length > 0) {
				$v_6[0].id = $v_1.id + "Time";
				$create(Mscrm.EditableSelectControl, null, null, null, $v_6[0])
			}
		}
		$create(Mscrm.FormInputControl.DateTimeBehavior, null, events, null,
				$v_1);
		!IsNull($v_2)
				&& $create(Mscrm.FormInputControl.DateTimeImage, $v_4, null,
						null, $v_2)
	}
};
Mscrm.FormInputControl.DateTimeBehavior.disposeDateTimeComponents = function(
		field) {
	var $v_0 = field.getElementsByTagName("table");
	if ($v_0.length > 0) {
		var $v_1 = $v_0[0], $v_2 = null, $v_3 = $v_1
				.getElementsByTagName("img");
		if ($v_3.length > 0)
			$v_2 = $v_3[0];
		if (!IsNull($v_2)) {
			var $v_6 = Mscrm.CrmUIBehavior.getBehaviorByName($v_2,
					"DateTimeImage");
			!IsNull($v_6) && $v_6.dispose()
		}
		var $v_4 = Mscrm.FormControlInputBehavior.GetElementBehavior($v_1);
		!IsNull($v_4) && $v_4.dispose();
		var $v_5 = $v_1.getElementsByTagName("span");
		if ($v_5.length > 0) {
			var $v_7 = $find($v_5[0].id);
			!IsNull($v_7) && $v_7.dispose()
		}
	}
};
Mscrm.FormInputControl.DateTimeBehavior.prototype = {
	$2_4 : null,
	$1_4 : null,
	$S_4 : true,
	$5_4 : "",
	$D_4 : true,
	$H_4 : true,
	$I_4 : false,
	$6_4 : false,
	$3_4 : null,
	$V_4 : false,
	$T_4 : false,
	$0_4 : null,
	$A_4 : false,
	$b_4 : null,
	$M_4 : false,
	$8_4 : true,
	$J_4 : true,
	add_change : function(value) {
		this.get_events().addHandler("OnChangeEvent", value)
	},
	remove_change : function(value) {
		this.get_events().removeHandler("OnChangeEvent", value)
	},
	add_initComplete : function(value) {
		this.get_events().addHandler("InitCompleteEvent", value)
	},
	remove_initComplete : function(value) {
		this.get_events().removeHandler("InitCompleteEvent", value)
	},
	add_focus : function(value) {
		this.get_events().addHandler("FocusEvent", value)
	},
	remove_focus : function(value) {
		this.get_events().removeHandler("FocusEvent", value)
	},
	add_propertyChangedEvent : function(value) {
		this.get_events().addHandler("PropertyChangedEvent", value)
	},
	remove_propertyChangedEvent : function(value) {
		this.get_events().removeHandler("PropertyChangedEvent", value)
	},
	get_showTime : function() {
		return this.$5_4 === "time" || this.$5_4 === "date" || this.$D_4
	},
	set_showTime : function(value) {
		this.$w_4(value);
		return value
	},
	get_allowTimeEdit : function() {
		return this.$H_4
	},
	set_allowTimeEdit : function(value) {
		this.$p_4(value);
		return value
	},
	get_initDisable : function() {
		return this.$I_4
	},
	set_initDisable : function(value) {
		this.$I_4 = value;
		return value
	},
	get_allDayDisplay : function() {
		return this.$6_4
	},
	set_allDayDisplay : function(value) {
		this.$6_4 = value;
		this.$G_4(this.$0_4);
		return value
	},
	get_isDirty : function() {
		return !this.$O_4(this.$0_4, this.$3_4)
				|| !this.$P_4(this.$0_4, this.$3_4)
	},
	setDisplay : function(visibility) {
		var $v_0 = visibility ? "" : "none";
		if (!IsNull(this.get_element()))
			this.get_element().style.display = $v_0
	},
	get_dataXml : function() {
		var $v_0 = "";
		if (!IsNull(this.$0_4))
			$v_0 = FormatUtcDate(new Date(this.$0_4.getTime()));
		return String.format("<{0}>{1}</{0}>", this.get_element().id, $v_0)
	},
	get_dataValue : function() {
		return IsNull(this.$0_4) ? null : new Date(this.$0_4.getTime())
	},
	set_dataValue : function(value) {
		this.$Z_4(value);
		return value
	},
	get_dataValueAsDate : function() {
		return this.get_dataValue()
	},
	set_dataValueAsDate : function(value) {
		this.set_dataValue(value);
		return value
	},
	get_prevDataValue : function() {
		return this.$b_4
	},
	set_prevDataValue : function(value) {
		this.$b_4 = value;
		return value
	},
	get_disabled : function() {
		return IsNull(this.get_element().getAttribute("contentEditable")) ? IsNull(this
				.get_element().disabled) ? false : this.get_element().disabled
				.toString() === "true"
				: this.get_element().getAttribute("contentEditable").toString() === "false"
	},
	set_disabled : function(value) {
		this.$r_4(value);
		return value
	},
	get_innerText : function() {
		var $v_0 = "";
		switch (this.$5_4) {
		case "datetime":
			if (this.$D_4) {
				$v_0 = this.$1_4.value + " "
						+ this.$2_4.get_returnValueProperty();
				break
			}
			$v_0 = this.$1_4.value;
			break;
		case "date":
			$v_0 = this.$1_4.value;
			break;
		case "time":
			$v_0 = this.$2_4.get_returnValueProperty();
			break
		}
		return $v_0
	},
	get_willSubmit : function() {
		return this.$A_4
	},
	set_willSubmit : function(value) {
		this.$A_4 = value;
		return value
	},
	setFocus : function() {
		this.$h_4(null, null)
	},
	get_isDateValid : function() {
		return this.$8_4
	},
	get_isTimeValid : function() {
		return this.$J_4
	},
	get_noValidationAlert : function() {
		return this.$M_4
	},
	set_noValidationAlert : function(value) {
		this.$M_4 = value;
		return value
	},
	get_initialValue : function() {
		return this.$3_4
	},
	set_initialValue : function(value) {
		this.$0_4 = value;
		this.$3_4 = value;
		return value
	},
	get_timeControl : function() {
		return this.$2_4
	},
	initialize : function() {
		this.add_focus(this.$$d_$m_4);
		this.$I_4 = this.$B_4("initialDisableInit");
		if (!this.$I_4) {
			this.$A_4 = true;
			this.$5_4 = this.get_element().getAttribute("format");
			if (this.$5_4 === "date" || this.$5_4 === "datetime")
				this.$1_4 = $get("DateInput", this.get_element());
			if (this.$5_4 === "datetime" || this.$5_4 === "time")
				this.$2_4 = $find(this.get_element().id + "Time");
			this.$5_4 !== "time" && !IsNull(this.$2_4)
					&& this.$2_4.markAsTimeControl();
			var $v_0 = this.get_element().getAttribute("initialValue");
			if (!isNullOrEmptyString($v_0)) {
				this.$0_4 = ParseUtcDate($v_0);
				this.$3_4 = ParseUtcDate($v_0)
			}
			if (!IsNull(this.$1_4)) {
				$addHandler(this.$1_4, "blur", this.$$d_$i_4);
				$addHandler(this.$1_4, "change", this.$$d_$i_4);
				$addHandler(this.$1_4, "focus", this.$$d_$k_4)
			}
			if (!IsNull(this.$2_4)) {
				this.$2_4.add_returnValueChange(this.$$d_$Q_4);
				this.$2_4.add_validate(this.$$d_$g_4);
				this.$2_4.add_findNextSmallestEntry(this.$$d_$f_4)
			}
			this.$D_4 = this.$B_4("initialShowTime");
			this.$H_4 = this.$B_4("initialAllowTimeEdit");
			this.$S_4 = this.$B_4("initialAllowBlankDate");
			this.$6_4 = this.$B_4("initialAllDayDisplayMode");
			this.$T_4 = this.$B_4("cacheValuesOnClient");
			this.$V_4 = true;
			var $v_1 = this.get_element().getAttribute("cachedDataValue");
			if (this.$T_4 && !isNullOrEmptyString($v_1)) {
				var $v_2 = Date.parse($v_1);
				if (!isNaN($v_2)) {
					var $v_3 = null;
					$v_3 = new Date($v_2);
					this.$Z_4($v_3);
					this.$0_4 = $v_3;
					this.$3_4 = $v_3
				}
			}
			if (!this.$n_4()) {
				var $v_4 = this.$0_4;
				this.$0_4 = null;
				if ($v_4 === "null")
					$v_4 = null;
				this.$Z_4($v_4)
			}
			this.$Y_4("InitCompleteEvent")
		}
		Mscrm.FormControlInputBehavior.prototype.initialize.call(this)
	},
	get_isDataSlugSupported : function() {
		return true
	},
	$k_4 : function($p0) {
		var $v_0 = new Mscrm.FormatArguments;
		$v_0.type = $p0.type;
		$v_0.returnValue = $p0.returnValue;
		$v_0.inputValue = $p0.inputValue;
		this.$e_4($p0.target, $v_0)
	},
	$m_4 : function($p0) {
		var $v_0 = new Mscrm.FormatArguments;
		$v_0.type = $p0.type;
		this.$h_4($p0.target, $v_0)
	},
	$B_4 : function($p0) {
		var $v_0 = this.get_element().getAttribute($p0);
		return !IsNull($v_0) && Mscrm.Utilities.parseBoolean($v_0.toString())
	},
	dispose : function() {
		this.remove_focus(this.$$d_$m_4);
		try {
			if (!IsNull(this.$1_4)) {
				$removeHandler(this.$1_4, "blur", this.$$d_$i_4);
				$removeHandler(this.$1_4, "change", this.$$d_$i_4);
				$removeHandler(this.$1_4, "focus", this.$$d_$k_4)
			}
			if (!IsNull(this.$2_4)) {
				this.$2_4.remove_returnValueChange(this.$$d_$Q_4);
				this.$2_4.remove_validate(this.$$d_$g_4);
				this.$2_4.remove_findNextSmallestEntry(this.$$d_$f_4);
				this.$2_4.remove_controlFocus(this.$$d_$e_4)
			}
		} catch ($$e_0) {
		}
		this.$1_4 = null;
		Mscrm.CrmUIBehavior.prototype.dispose.call(this)
	},
	$h_4 : function($p0, $p1) {
		if (!this.get_element().disabled && this.$V_4) {
			var $v_0 = $p1;
			if (!IsNull(this.$1_4)) {
				if (!(!IsNull($v_0) && $v_0.type === "focus")) {
					if (!IsNull(this.$1_4.form)) {
						var $v_1 = $find(this.$1_4.form.id);
						!IsNull($v_1)
								&& $v_1.get_element().className === "ms-crm-Form"
								&& $v_1.GetTab(this.get_element(), true)
					}
					if (isControlVisible(this.get_element())) {
						this.$1_4.focus();
						this.$1_4.select()
					}
				}
			} else
				this.$2_4.get_element().focus()
		}
	},
	resetDefault : function() {
		if (!IsNull(this.$0_4))
			this.$3_4 = new Date(this.$0_4)
	},
	onChange : function() {
		this.handleDataValueChangedEvent();
		this.$Y_4("OnChangeEvent")
	},
	refreshTimeValue : function() {
		!IsNull(this.$2_4) && this.$X_4("ReturnValue")
	},
	handleInvalidDateInput : function(eventObject) {
		this.$G_4(this.$0_4);
		!IsNull(eventObject) && eventObject.type === "blur"
				&& eventObject.preventDefault();
		this.$1_4.focus()
	},
	handleInvalidTimeInput : function(formatArgs) {
		formatArgs.returnValue = false
	},
	setValidationFailedAttribute : function() {
		if (!IsNull(this.$1_4)) {
			this.$1_4.setAttribute("ValidationFailed", true);
			var $v_0 = this.$1_4, $$t_1 = this;
			window.setTimeout(function() {
				$v_0.removeAttribute("ValidationFailed")
			}, 50)
		}
	},
	$Y_4 : function($p0) {
		var $v_0 = $p0;
		switch ($p0) {
		case "OnChangeEvent":
			$v_0 = "change";
			break;
		case "FocusEvent":
			$v_0 = "focus";
			break
		}
		var $v_1 = XUI.Html.CreateDomEvent($v_0), $v_2 = this.get_events()
				.getHandler($p0);
		if (!IsNull($v_2)) {
			var $v_3 = new Sys.UI.DomEvent($v_1);
			$v_3.target = this.get_element();
			$v_2($v_3)
		}
	},
	$n_4 : function() {
		if (IsNull(this.$0_4))
			return false;
		var $v_0 = this.get_innerText(), $v_1 = Date.parse($v_0);
		if (isNaN($v_1))
			return false;
		if (this.$6_4)
			$v_0 += 8.64e7;
		var $v_2 = new Date($v_0);
		if (!IsNull(this.$1_4) && !this.$O_4($v_2, this.$0_4))
			return false;
		if (!IsNull(this.$2_4) && !this.$P_4($v_2, this.$0_4))
			return false;
		return true
	},
	$e_4 : function($p0, $p1) {
		var $v_0 = $p1;
		if ($v_0.type === "returnvaluechange") {
			this.$Q_4($p0, $v_0);
			return
		}
		this.$Y_4("FocusEvent");
		if (Mscrm.FormControlInputBehavior.isSlugSupportEnabled()) {
			var $v_1 = XUI.Html.CreateDomEvent("focus");
			XUI.Html.DispatchDomEvent(this.get_element(), $v_1)
		}
	},
	$w_4 : function($p0) {
		if (this.$5_4 === "datetime" && $p0 !== this.$D_4) {
			this.$2_4.get_element().style.display = $p0 ? "inline" : "none";
			this.$D_4 = $p0;
			this.$X_4("showTimeProperty")
		}
	},
	$r_4 : function($p0) {
		if (this.get_element().disabled !== $p0) {
			var $v_0 = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils
					.GetNextSibling(XUI.Html.DomUtils
							.GetNextSibling(this.$1_4.parentNode)));
			$v_0.setAttribute("contentEditable", "false");
			if (!IsNull(this.$1_4)) {
				this.$1_4.setAttribute("contentEditable", $p0 ? "false"
						: "true");
				this.$1_4.className = $p0 ? "ms-crm-ReadOnlyDateTime"
						: "ms-crm-Input";
				this.$1_4.disabled = $p0;
				$v_0.src = $p0 ? "/_imgs/btn_dis_cal.gif"
						: "/_imgs/btn_off_cal.gif";
				$v_0.disabled = $p0;
				$v_0.style.cursor = $p0 ? "default" : "pointer";
				this.get_element().disabled = $p0
			}
			if (!IsNull(this.$2_4))
				if ($p0)
					this.$2_4.disable();
				else
					(!IsNull(this.$0_4) || this.$5_4 === "time")
							&& this.$2_4.enable()
		}
	},
	$7_4 : function($p0) {
		this.$0_4 = $p0;
		if (this.$T_4) {
			var $v_0 = window.document.createAttribute("cachedDataValue");
			$v_0.value = this.$0_4;
			this.get_element().attributes.setNamedItem($v_0)
		}
	},
	$Z_4 : function($p0) {
		if (!isNaN($p0) && !IsNull($p0))
			$p0 = new Date($p0.valueOf());
		else
			$p0 = null;
		if (!this.$V_4) {
			this.$7_4($p0);
			return
		}
		if (this.$8_4 && this.$O_4($p0, this.$0_4) && this.$P_4($p0, this.$0_4))
			return;
		if (this.$E_4($p0) && (this.$5_4 === "time" || !this.$S_4))
			return;
		this.$7_4($p0);
		!IsNull(this.$1_4) && this.$G_4($p0);
		if (!IsNull(this.$2_4)) {
			this.$R_4($p0);
			if (IsNull($p0))
				this.$2_4.disable();
			else
				!this.get_disabled() && this.$2_4.enable()
		}
		this.handleDataValueChangedEvent()
	},
	$G_4 : function($p0) {
		if (IsNull(this.$1_4))
			return;
		if (!this.$E_4($p0))
			this.$1_4.value = Mscrm.DateTimeUtility.formatDate(!this.$6_4 ? $p0
					: decrementDayAcrossTimeZones($p0));
		else
			this.$1_4.value = ""
	},
	$R_4 : function($p0) {
		if (IsNull(this.$2_4))
			return;
		this.$J_4 = true;
		if (this.$E_4($p0))
			this.$2_4.setValue("", null, true);
		else {
			var $v_0 = timeToString($p0, 0);
			this.$2_4.setValue($v_0, null, true)
		}
	},
	$t_4 : function($p0) {
		if (this.$6_4)
			$p0 = incrementDayAcrossTimeZones($p0);
		if (IsNull(this.$0_4))
			this.$7_4($p0);
		else
			this.$7_4(new Date($p0.getFullYear(), $p0.getMonth(),
					$p0.getDate(), this.$0_4.getHours(),
					this.$0_4.getMinutes(), this.$0_4.getSeconds(), this.$0_4
							.getMilliseconds()))
	},
	$u_4 : function($p0) {
		this.$j_4($p0.getHours(), $p0.getMinutes(), $p0.getSeconds(), $p0
				.getMilliseconds())
	},
	$v_4 : function() {
		this.$j_4(0, 0, 0, 0)
	},
	$j_4 : function($p0, $p1, $p2, $p3) {
		if (!IsNull(this.$0_4)) {
			this.$7_4(new Date(this.$0_4.getFullYear(), this.$0_4.getMonth(),
					this.$0_4.getDate(), $p0, $p1, $p2, $p3));
			if (!$p0 && !$p1 && !$p2 && !$p3)
				this.$0_4 = this.$d_4(this.$0_4);
			($p0 !== this.$0_4.getHours() || $p1 !== this.$0_4.getMinutes())
					&& this.$R_4(this.$0_4)
		} else
			this.$5_4 === "time" && this.$7_4($get("dtNewTime"))
	},
	$d_4 : function($p0) {
		var $v_0 = $p0.getHours(), $v_1 = new Date($p0.getDate());
		if (!$v_0)
			return $p0;
		$v_0 > 12 && $v_0 <= 23 && $v_1.setDate($v_1.getDate() + 1);
		for ( var $v_2, $v_4, $v_5 = 0, $v_3 = 0; $v_3 < 3; $v_3++) {
			switch ($v_3) {
			case 0:
				$v_5 = 25;
				break;
			case 1:
			case 2:
				$v_5 = 61;
				break
			}
			for ($v_4 = 0; $v_4 < $v_5; $v_4++) {
				$v_2 = new Date($v_1.getFullYear(), $v_1.getMonth(), $v_1
						.getDate(), !$v_3 ? $v_1.getHours() - 1 : $v_1
						.getHours(), $v_3 === 1 ? $v_1.getMinutes() - 1 : $v_1
						.getMinutes(), $v_3 === 2 ? $v_1.getSeconds() - 1
						: $v_1.getSeconds());
				if ($v_2.getDate() === $v_1.getDate())
					$v_1 = $v_2;
				else
					$v_4 = $v_5
			}
		}
		return $v_1
	},
	$O_4 : function($p0, $p1) {
		var $v_0 = this.$E_4($p0), $v_1 = this.$E_4($p1);
		if ($v_0 && $v_1)
			return true;
		if ($v_0 && !$v_1 || !$v_0 && $v_1
				|| $p0.getFullYear() !== $p1.getFullYear()
				|| $p0.getMonth() !== $p1.getMonth()
				|| $p0.getDate() !== $p1.getDate())
			return false;
		return true
	},
	$E_4 : function($p0) {
		return isNaN($p0) || IsNull($p0)
	},
	$P_4 : function($p0, $p1) {
		if (IsNull($p0) && IsNull($p1))
			return true;
		if (IsNull($p0) && !IsNull($p1) || !IsNull($p0) && IsNull($p1)
				|| $p0.getHours() !== $p1.getHours()
				|| $p0.getMinutes() !== $p1.getMinutes()
				|| $p0.getSeconds() !== $p1.getSeconds()
				|| $p0.getMilliseconds() !== $p1.getMilliseconds())
			return false;
		return true
	},
	validateDate : function() {
		this.$i_4(null)
	},
	$i_4 : function($p0) {
		if (this.get_disabled() || IsNull(this.$1_4))
			return;
		this.$1_4.value = Mscrm.Utilities.trim(this.$1_4.value, null);
		var $v_0 = this.$1_4.value;
		if (!IsNull(this.$0_4)) {
			var $v_1 = this.$6_4 ? Mscrm.DateTimeUtility
					.formatDate(decrementDayAcrossTimeZones(this.$0_4))
					: Mscrm.DateTimeUtility.formatDate(this.$0_4);
			if ($v_1 === $v_0) {
				this.$8_4 = true;
				return
			}
		}
		if (!$v_0.length)
			if (this.$S_4) {
				this.$8_4 = true;
				if (!IsNull(this.$0_4)) {
					if (!IsNull(this.$2_4)) {
						this.$R_4(null);
						this.$2_4.disable()
					}
					this.$7_4(null);
					this.onChange()
				}
			} else {
				this.setValidationFailedAttribute();
				alert(window.LOCID_DTM_BLANK_TIME_ERROR);
				this.$G_4(this.$0_4);
				!IsNull($p0) && $p0.type === "blur" && $p0.preventDefault();
				this.$1_4.focus()
			}
		else {
			var $v_2 = Mscrm.DateTimeUtility.parseDate($v_0, this.$M_4,
					this.$1_4);
			if (!IsNull($v_2)) {
				this.$8_4 = true;
				$v_2 = this.$d_4($v_2);
				if (!this.$O_4($v_2, this.$0_4) || this.$6_4) {
					var $v_3 = IsNull(this.$0_4);
					this.$t_4($v_2);
					this.$G_4(this.$0_4);
					if (IsNull(this.$2_4))
						this.$v_4();
					else if ($v_3) {
						this.$2_4.enable();
						this.$R_4($v_2);
						if (!IsNull($p0) && $p0.type === "blur") {
							$p0.preventDefault();
							this.$2_4.setFocus()
						}
					}
					this.onChange()
				}
			} else {
				this.$8_4 = false;
				this.handleInvalidDateInput($p0)
			}
		}
	},
	$Q_4 : function($p0, $p1) {
		var $v_0 = $p1;
		if ($v_0.type === "validate")
			return OnSelectValidate($p0, $p1);
		if (this.get_disabled() || IsNull(this.$2_4))
			return;
		var $v_1 = parseTime($v_0.inputValue, 0);
		this.$J_4 = !isNaN($v_1.getTime());
		if (this.$J_4 && !this.$P_4($v_1, this.$0_4)) {
			this.$u_4($v_1);
			this.onChange()
		}
	},
	$g_4 : function($p0, $p1) {
		var $v_0 = $p1;
		if ($v_0.type === "returnvaluechange") {
			this.$Q_4($p0, $p1);
			return
		}
		var $v_1 = Mscrm.Utilities.trim($v_0.inputValue, null), $v_2 = parseTime(
				$v_1, 0);
		if (isNaN($v_2.getTime())) {
			this.setValidationFailedAttribute();
			!this.$M_4 && alert(window.LOCID_DTM_BLANK_TIME_ERROR);
			this.handleInvalidTimeInput($v_0)
		} else
			$v_0.formattedValue = timeToString($v_2, 0)
	},
	$f_4 : function($p0, $p1) {
		var $v_0 = $p1;
		if ($v_0.type === "returnvaluechange") {
			this.$Q_4($p0, $p1);
			return
		}
		var $v_1 = $v_0.inputValue;
		if (IsNull($v_1))
			$v_1 = this.get_dataValue().toString();
		var $v_2 = parseTime($v_1, 0);
		if (!$v_2.getMinutes())
			$v_2.setMinutes(-30);
		else if ($v_2.getMinutes() <= 30)
			$v_2.setMinutes(0);
		else
			$v_2.setMinutes(30);
		$v_0.sEntry = timeToString($v_2, 0)
	},
	$p_4 : function($p0) {
		if (!IsNull(this.$2_4) && $p0 !== this.$H_4) {
			this.$2_4.set_allowValueEditProperty($p0);
			this.$H_4 = $p0;
			this.$X_4("allowTimeEditProperty")
		}
	},
	$X_4 : function($p0) {
		var $v_0 = this.get_events().getHandler("PropertyChangedEvent");
		!IsNull($v_0) && $v_0(this, new Sys.PropertyChangedEventArgs($p0))
	}
};
Mscrm.FormInputControl.DateTimeImage = function(element) {
	this.$$d_onOut = Function.createDelegate(this, this.onOut);
	this.$$d_onOver = Function.createDelegate(this, this.onOver);
	this.$$d_$o_3 = Function.createDelegate(this, this.$o_3);
	Mscrm.FormInputControl.DateTimeImage.initializeBase(this, [ element ])
};
Mscrm.FormInputControl.DateTimeImage.prototype = {
	$U_3 : null,
	$1_3 : null,
	get_$N_3 : function() {
		if (IsNull(this.$1_3))
			this.$1_3 = Mscrm.FormControlInputBehavior.GetBehavior(this.$U_3);
		return this.$1_3
	},
	get_dateTimeControlId : function() {
		return this.$U_3
	},
	set_dateTimeControlId : function(value) {
		this.$U_3 = value;
		return value
	},
	initialize : function() {
		Mscrm.CrmUIBehavior.prototype.initialize.call(this);
		$addHandler(this.get_element(), "click", this.$$d_$o_3);
		$addHandler(this.get_element(), "mouseover", this.$$d_onOver);
		$addHandler(this.get_element(), "mouseout", this.$$d_onOut);
		if (this.get_element().disabled)
			this.get_element().style.cursor = "default"
	},
	dispose : function() {
		$removeHandler(this.get_element(), "click", this.$$d_$o_3);
		$removeHandler(this.get_element(), "mouseover", this.$$d_onOver);
		$removeHandler(this.get_element(), "mouseout", this.$$d_onOut);
		Mscrm.CrmUIBehavior.prototype.dispose.call(this)
	},
	$o_3 : function($p0) {
		if (!this.get_$N_3().get_disabled()) {
			var $v_0 = XUI.Xml.DomUtils.GetFirstChild(XUI.Xml.DomUtils
					.GetPrevSibling(XUI.Xml.DomUtils.GetPrevSibling(this
							.get_element().parentNode)));
			$v_0.focus();
			var $v_1 = this.get_$N_3().get_dataValue();
			if (IsNull($v_1))
				$v_1 = Mscrm.DateTimeUtility.localDateTimeNow();
			var $v_2 = !IsNull(window.USER_DATE_FORMATSTRING) ? window.USER_DATE_FORMATSTRING
					: window.parent.USER_DATE_FORMATSTRING, $v_3 = !IsNull(window.parent.USER_DATE_SEPARATOR) ? window.USER_DATE_SEPARATOR
					: window.parent.USER_DATE_SEPARATOR, $v_4 = !IsNull(window.parent.ORG_DATE_START_DAY) ? window.ORG_DATE_START_DAY
					: window.parent.ORG_DATE_START_DAY;
			InitCalendar($v_2, $v_3, $v_4, null, null);
			LaunchCalendar(
					XUI.Html.DomUtils.GetNextSibling(this.get_element()), $v_0,
					$v_1, 1, false, null, null, window.HILITE_DAY, $v_1, false)
		}
	},
	onOver : function(eventObject) {
		if (!this.get_$N_3().get_disabled())
			this.get_element().src = "/_imgs/btn_on_Cal.gif"
	},
	onOut : function(eventObject) {
		if (!this.get_$N_3().get_disabled())
			this.get_element().src = "/_imgs/btn_off_Cal.gif"
	}
};
Mscrm.FormInputControl.Duration = function(element) {
	this.$$d_$f_4 = Function.createDelegate(this, this.$f_4);
	this.$$d_$F_4 = Function.createDelegate(this, this.$F_4);
	this.$$d_$g_4 = Function.createDelegate(this, this.$g_4);
	this.$0_4 = null;
	Mscrm.FormInputControl.Duration.initializeBase(this, [ element ])
};
Mscrm.FormInputControl.Duration.prototype = {
	$4_4 : null,
	$c_4 : 0,
	$W_4 : false,
	$3_4 : 0,
	$C_4 : false,
	$K_4 : 0,
	$L_4 : 0,
	$A_4 : false,
	$9_4 : true,
	get_$l_4 : function() {
		return XUI.Html.DomUtils.GetNextSibling(this.get_element())
	},
	get_defaultValue : function() {
		return this.$3_4
	},
	set_defaultValue : function(value) {
		this.$3_4 = isNaN(value) ? this.$0_4 : value;
		return value
	},
	get_isDirty : function() {
		return this.$0_4 !== this.$3_4
	},
	get_dataXml : function() {
		var $v_0 = this.get_element().id.toLowerCase(), $v_1 = "";
		if (!IsNull(this.$0_4) && !isNaN(this.$0_4))
			$v_1 = this.$0_4.toString();
		return "<" + $v_0 + ">" + $v_1 + "</" + $v_0 + ">"
	},
	get_dataValue : function() {
		return isNaN(this.$0_4) ? null : this.$0_4
	},
	set_dataValue : function(value) {
		if (!IsNull(value)) {
			if (typeof value !== Mscrm.TypeNames.numberType
					|| parseInt(value.toString()) < this.$L_4
					|| parseInt(value.toString()) > this.$K_4) {
				this.showErrorMessage(String.format(
						window.LOCID_DURATION_BADTYPE, this.$L_4, this.$K_4));
				return value
			}
			value = Math.floor(parseInt(value.toString()))
		}
		var $v_0 = value;
		if (parseInt($v_0) !== this.$0_4) {
			var $v_1 = "";
			if (!isNullOrEmptyString($v_0)) {
				$v_1 = Mscrm.NumberUtility.formatDuration(parseInt($v_0));
				if (isNullOrEmptyString($v_1)) {
					this.showErrorMessage(window.LOCID_ERROR_SAVE_DURATION);
					return value
				}
			}
			this.$0_4 = parseInt($v_0);
			this.get_element().setAttribute("CurrentValue", this.$0_4);
			this.$s_4($v_1)
		}
		this.handleDataValueChangedEvent();
		return value
	},
	get_disabled : function() {
		return this.$C_4
	},
	set_disabled : function(value) {
		if (value !== this.$C_4) {
			this.$C_4 = value;
			if (value)
				this.$4_4.disable();
			else
				this.$4_4.enable()
		}
		return value
	},
	get_displayValue : function() {
		if (!IsNull(this.$0_4))
			return Mscrm.NumberUtility.formatDuration(this.$0_4);
		else
			return ""
	},
	get_willSubmit : function() {
		return this.$A_4
	},
	set_willSubmit : function(value) {
		this.$A_4 = value;
		return value
	},
	get_durationSelect : function() {
		return this.$4_4
	},
	set_durationSelect : function(value) {
		this.$4_4 = value;
		return value
	},
	get_isDurationValid : function() {
		return this.$9_4
	},
	add_change : function(value) {
		this.get_events().addHandler("OnChangeEvent", value)
	},
	remove_change : function(value) {
		this.get_events().removeHandler("OnChangeEvent", value)
	},
	add_onInitComplete : function(value) {
		this.get_events().addHandler("OnInitCompleteEvent", value)
	},
	remove_onInitComplete : function(value) {
		this.get_events().removeHandler("OnInitCompleteEvent", value)
	},
	initialize : function() {
		var $v_0 = this.get_$l_4();
		this.$4_4 = $find($v_0.id);
		this.initializeDuration()
	},
	initializeDuration : function() {
		this.$A_4 = true;
		this.$K_4 = parseInt(this.get_element().getAttribute("MaxMinutes")
				.toString());
		this.$L_4 = parseInt(this.get_element().getAttribute("MinMinutes")
				.toString());
		var $v_0 = this.get_element().getAttribute("InitialValue");
		if (!IsNull($v_0) && $v_0.toString().length) {
			this.$0_4 = parseInt($v_0.toString());
			this.$3_4 = this.$0_4;
			this.get_element().setAttribute("CurrentValue", this.$0_4)
		} else
			this.$4_4.setValue("", "", true);
		Mscrm.FormControlInputBehavior.prototype.initialize.call(this);
		this.$4_4.add_validate(this.$$d_$g_4);
		this.$4_4.add_returnValueChange(this.$$d_$F_4);
		this.$4_4.add_findNextSmallestEntry(this.$$d_$f_4);
		var $v_1 = this.get_element().getAttribute("setdisabled");
		if (!IsNull($v_1) && $v_1.toString() === "1")
			this.$C_4 = true;
		this.fireControlEvent("OnInitCompleteEvent", Sys.EventArgs.Empty)
	},
	handleInvalidDurationInput : function(formatArgs, errorMessage) {
		this.showErrorMessage(errorMessage);
		formatArgs.returnValue = false
	},
	$F_4 : function($p0, $p1) {
		var $v_0 = 0, $v_1 = this.$4_4.get_returnValueProperty();
		if (!IsNull($v_1) && $v_1.toString().length)
			if (!this.$W_4)
				$v_0 = this.parseDuration($v_1.toString());
			else {
				$v_0 = this.$c_4;
				this.$W_4 = false
			}
		if (this.$0_4 !== $v_0) {
			this.$0_4 = $v_0;
			this.get_element().setAttribute("CurrentValue", this.$0_4);
			this.fireOnChange()
		}
	},
	$g_4 : function($p0, $p1) {
		this.$9_4 = true;
		var $v_0 = $p1;
		if ($v_0.type === "returnvaluechange") {
			this.$F_4($p0, $v_0);
			return
		}
		if (typeof $v_0.inputValue === "undefined") {
			this.$F_4($p0, $v_0);
			return
		}
		if (!$v_0.inputValue.length) {
			if (IsNull($v_0.returnValue))
				$v_0.returnValue = true;
			$v_0.formattedValue = ""
		} else {
			var $v_1 = this.parseDuration($v_0.inputValue);
			if (isNaN($v_1) || $v_1 < this.$L_4 || $v_1 > this.$K_4) {
				this.$9_4 = false;
				this.handleInvalidDurationInput($v_0,
						window.LOCID_VALID_DURATION)
			} else {
				this.$c_4 = $v_1;
				this.$W_4 = true;
				var $v_2 = Mscrm.NumberUtility.formatDuration($v_1);
				if (isNullOrEmptyString($v_2)) {
					this.showErrorMessage(window.LOCID_ERROR_SAVE_DURATION);
					$v_0.returnValue = false
				} else {
					$v_0.returnValue = true;
					$v_0.formattedValue = $v_2
				}
			}
		}
	},
	$f_4 : function($p0, $p1) {
		var $v_0 = $p1;
		if ($v_0.type === "returnvaluechange") {
			this.$F_4($p0, $v_0);
			return
		}
		if (typeof $v_0.inputValue === "undefined") {
			this.$F_4($p0, $v_0);
			return
		}
		var $v_1 = $v_0.inputValue;
		this.$q_4($v_0, $v_1)
	},
	$q_4 : function($p0, $p1) {
		if (!$p1.length)
			$p0.sEntry = "";
		else {
			var $v_0 = this.parseDuration($p1);
			if ($v_0 <= 5)
				$p0.sEntry = String.format(window.LOCID_ONE_MINUTE_MASK,
						Mscrm.NumberUtility.addFormatting(1, 0));
			else if ($v_0 <= 15)
				$p0.sEntry = String.format(window.LOCID_N_MINUTES_MASK,
						Mscrm.NumberUtility.addFormatting(5, 0));
			else if ($v_0 <= 30)
				$p0.sEntry = String.format(window.LOCID_N_MINUTES_MASK,
						Mscrm.NumberUtility.addFormatting(15, 0));
			else if ($v_0 <= 45)
				$p0.sEntry = String.format(window.LOCID_N_MINUTES_MASK,
						Mscrm.NumberUtility.addFormatting(30, 0));
			else if ($v_0 <= 60)
				$p0.sEntry = String.format(window.LOCID_N_MINUTES_MASK,
						Mscrm.NumberUtility.addFormatting(45, 0));
			else if ($v_0 <= 90)
				$p0.sEntry = String.format(window.LOCID_ONE_HOUR_MASK,
						Mscrm.NumberUtility.addFormatting(1, 0));
			else if ($v_0 <= 120)
				$p0.sEntry = String.format(window.LOCID_N_HOURS_MASK,
						Mscrm.NumberUtility.addFormatting(1.5, 0));
			else if ($v_0 <= 150)
				$p0.sEntry = String.format(window.LOCID_N_HOURS_MASK,
						Mscrm.NumberUtility.addFormatting(2, 0));
			else if ($v_0 <= 180)
				$p0.sEntry = String.format(window.LOCID_N_HOURS_MASK,
						Mscrm.NumberUtility.addFormatting(2.5, 0));
			else if ($v_0 <= 210)
				$p0.sEntry = String.format(window.LOCID_N_HOURS_MASK,
						Mscrm.NumberUtility.addFormatting(3, 0));
			else if ($v_0 <= 240)
				$p0.sEntry = String.format(window.LOCID_N_HOURS_MASK,
						Mscrm.NumberUtility.addFormatting(3.5, 0));
			else if ($v_0 <= 270)
				$p0.sEntry = String.format(window.LOCID_N_HOURS_MASK,
						Mscrm.NumberUtility.addFormatting(4, 0));
			else if ($v_0 <= 300)
				$p0.sEntry = String.format(window.LOCID_N_HOURS_MASK,
						Mscrm.NumberUtility.addFormatting(4.5, 0));
			else if ($v_0 <= 330)
				$p0.sEntry = String.format(window.LOCID_N_HOURS_MASK,
						Mscrm.NumberUtility.addFormatting(5, 0));
			else if ($v_0 <= 360)
				$p0.sEntry = String.format(window.LOCID_N_HOURS_MASK,
						Mscrm.NumberUtility.addFormatting(5.5, 0));
			else if ($v_0 <= 390)
				$p0.sEntry = String.format(window.LOCID_N_HOURS_MASK,
						Mscrm.NumberUtility.addFormatting(6, 0));
			else if ($v_0 <= 420)
				$p0.sEntry = String.format(window.LOCID_N_HOURS_MASK,
						Mscrm.NumberUtility.addFormatting(6.5, 0));
			else if ($v_0 <= 450)
				$p0.sEntry = String.format(window.LOCID_N_HOURS_MASK,
						Mscrm.NumberUtility.addFormatting(7, 0));
			else if ($v_0 <= 480)
				$p0.sEntry = String.format(window.LOCID_N_HOURS_MASK,
						Mscrm.NumberUtility.addFormatting(7.5, 0));
			else if ($v_0 <= 510)
				$p0.sEntry = String.format(window.LOCID_N_HOURS_MASK,
						Mscrm.NumberUtility.addFormatting(8, 0));
			else if ($v_0 <= 2880)
				$p0.sEntry = String.format(window.LOCID_ONE_DAY_MASK,
						Mscrm.NumberUtility.addFormatting(1, 0));
			else if ($v_0 <= 4320)
				$p0.sEntry = String.format(window.LOCID_N_DAYS_MASK,
						Mscrm.NumberUtility.addFormatting(2, 0));
			else
				$p0.sEntry = String.format(window.LOCID_N_DAYS_MASK,
						Mscrm.NumberUtility.addFormatting(3, 0))
		}
	},
	resetDefault : function(value) {
		if (IsNull(value))
			this.$3_4 = this.$0_4;
		else
			this.$3_4 = value
	},
	resetToDefault : function() {
		this.set_dataValue(this.$3_4);
		this.$0_4 = this.$3_4;
		this.get_element().setAttribute("CurrentValue", this.$0_4)
	},
	setFocus : function() {
		if (!this.$C_4) {
			if (!IsNull(this.get_element().getAttribute("form"))
					&& this.get_element().getAttribute("form").getAttribute(
							"className").toString() === "ms-crm-Form")
				;
			this.$4_4.setFocus()
		}
	},
	$s_4 : function($p0) {
		if (IsNull($p0))
			this.$4_4.setValue("", null, true);
		else
			this.$4_4.setValue($p0, null, true)
	},
	parseDuration : function(durationValue) {
		if (IsNull(durationValue)) {
			this.$9_4 = false;
			return Number.NaN
		}
		var $v_0 = durationValue.trim(), $v_1 = new RegExp("^"
				+ window.LOCID_SINGULAR_MINUTE + "\\s|\\s"
				+ window.LOCID_SINGULAR_MINUTE + "$|^"
				+ window.LOCID_PLURAL_MINUTE + "\\s|\\s"
				+ window.LOCID_PLURAL_MINUTE + "$", "i"), $v_2 = new RegExp("^"
				+ window.LOCID_SINGULAR_HOUR + "\\s|\\s"
				+ window.LOCID_SINGULAR_HOUR + "$|^" + window.LOCID_PLURAL_HOUR
				+ "\\s|\\s" + window.LOCID_PLURAL_HOUR + "$", "i"), $v_3 = new RegExp(
				"^" + window.LOCID_SINGULAR_DAY + "\\s|\\s"
						+ window.LOCID_SINGULAR_DAY + "$|^"
						+ window.LOCID_PLURAL_DAY + "\\s|\\s"
						+ window.LOCID_PLURAL_DAY + "$", "i"), $v_4 = 0;
		if ($v_1.test($v_0)) {
			$v_0 = $v_0.replace($v_1, "");
			$v_4 = 0
		} else if ($v_2.test($v_0)) {
			$v_0 = $v_0.replace($v_2, "");
			$v_4 = 1
		} else if ($v_3.test($v_0)) {
			$v_0 = $v_0.replace($v_3, "");
			$v_4 = 2
		} else
			$v_4 = 0;
		$v_0 = $v_0.trim();
		var $v_5 = Mscrm.NumberUtility.locStringToFloat($v_0);
		if (isNaN($v_5)) {
			this.$9_4 = false;
			return Number.NaN
		}
		switch ($v_4) {
		case 0:
			return Math.round($v_5);
		case 1:
			return Math.round($v_5 * 60);
		case 2:
			return Math.round($v_5 * 1440);
		default:
			this.$9_4 = false;
			return Number.NaN
		}
	},
	fireOnChange : function() {
		var $v_0 = XUI.Html.CreateDomEvent("OnChangeEvent"), $v_1 = this
				.get_events().getHandler("OnChangeEvent");
		if (!IsNull($v_1)) {
			var $v_2 = new Sys.UI.DomEvent($v_0);
			$v_2.target = this.get_element();
			$v_1($v_2)
		}
	},
	showErrorMessage : function(message) {
		if (!IsNull(this.get_element())) {
			this.get_element().setAttribute("ValidationFailed", true);
			var $v_0 = this.get_element(), $$t_2 = this;
			window.setTimeout(function() {
				$v_0.removeAttribute("ValidationFailed")
			}, 50)
		}
		alert(message)
	}
};
Mscrm.FormInputControl.DateTimeBehavior
		.registerClass("Mscrm.FormInputControl.DateTimeBehavior",
				Mscrm.FormControlInputBehavior,
				Mscrm.FormInputControl.IDateTimeControl);
Mscrm.FormInputControl.DateTimeImage.registerClass(
		"Mscrm.FormInputControl.DateTimeImage", Mscrm.CrmUIBehavior);
Mscrm.FormInputControl.Duration.registerClass(
		"Mscrm.FormInputControl.Duration", Mscrm.FormControlInputBehavior)