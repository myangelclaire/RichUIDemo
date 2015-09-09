Type.registerNamespace("Mscrm.FormInputControl");
Mscrm.FormInputControl.LinkControlBehavior = function(element) {
	this.$$d_$a_4 = Function.createDelegate(this, this.$a_4);
	this.$3_4 = {};
	this.$8_4 = [];
	Mscrm.FormInputControl.LinkControlBehavior
			.initializeBase(this, [ element ]);
	var $$t_2 = this;
	this.$L_4 = function($p1_0) {
		$$t_2.get_isLinkControlInitialized() && $$t_2.openFlyOut($p1_0)
	}
};
Mscrm.FormInputControl.LinkControlBehavior.prototype = {
	$U_4 : null,
	$T_4 : null,
	$4_4 : null,
	$6_4 : null,
	$0_4 : null,
	$9_4 : false,
	$A_4 : true,
	$2_4 : null,
	$G_4 : null,
	$7_4 : null,
	$5_4 : false,
	$P_4 : false,
	$L_4 : null,
	$O_4 : false,
	$J_4 : false,
	$Q_4 : false,
	$I_4 : false,
	$H_4 : null,
	$N_4 : null,
	$B_4 : null,
	$C_4 : null,
	$K_4 : null,
	$F_4 : null,
	get_isEnabledForNewState : function() {
		return this.$I_4
	},
	set_isEnabledForNewState : function(value) {
		this.$I_4 = value;
		return value
	},
	get_isDirty : function() {
		return false
	},
	get_flyOutDialog : function() {
		return this.$0_4
	},
	get_initialLabel : function() {
		return this.$G_4
	},
	get_completedLabel : function() {
		return this.$7_4
	},
	set_completedLabel : function(value) {
		this.$7_4 = value;
		return value
	},
	get_isLinkControlInitialized : function() {
		return this.$O_4 && this.$J_4
	},
	get_wasFlyOutOpened : function() {
		return this.$Q_4
	},
	get_anchor : function() {
		return this.$4_4
	},
	set_anchor : function(value) {
		this.$4_4 = value;
		return value
	},
	get_viewport : function() {
		return this.$6_4
	},
	set_viewport : function(value) {
		this.$6_4 = value;
		return value
	},
	get_$S_4 : function() {
		if (IsNull(this.$F_4)) {
			var $v_0 = this.get_element().getAttribute("id"), $v_1 = $get($v_0
					+ "_flyoutContent");
			this.$F_4 = $($v_1)
		}
		return this.$F_4
	},
	get_$b_4 : function() {
		if (IsNull(this.$K_4)) {
			var $v_0 = this.get_element().getAttribute("id"), $v_1 = $get($v_0
					+ "_flyoutLoadingArea");
			this.$K_4 = $($v_1)
		}
		return this.$K_4
	},
	get_showProgressIndicator : function() {
		return this.$5_4
	},
	set_showProgressIndicator : function(value) {
		this.$5_4 = value;
		if (this.$5_4 && IsNull(this.$C_4))
			this.$C_4 = new Mscrm.ProgressControl;
		return value
	},
	get_hostId : function() {
		return this.$N_4
	},
	set_hostId : function(value) {
		this.$N_4 = value;
		return value
	},
	get_isAssociatedStepCompleted : function() {
		if (!IsNull(this.$B_4)) {
			this.$9_4 = this.$B_4();
			this.$W_4()
		}
		return this.$9_4
	},
	set_isAssociatedStepCompleted : function(value) {
		this.$9_4 = value;
		this.$W_4();
		return value
	},
	get_onAssociatedStepCheck : function() {
		return this.$B_4
	},
	set_onAssociatedStepCheck : function(value) {
		this.$B_4 = value;
		return value
	},
	get_isEligibleForMarkComplete : function() {
		return this.$A_4
	},
	set_isEligibleForMarkComplete : function(value) {
		this.$A_4 = value;
		return value
	},
	onRender : function() {
		var $v_0 = $(this.get_element());
		if (!this.$R_4())
			$v_0.addClass("linkControlDisabled");
		else
			$v_0.hasClass("linkControlDisabled")
					&& $v_0.removeClass("linkControlDisabled")
	},
	initialize : function() {
		Mscrm.FormControlInputBehavior.prototype.initialize.call(this);
		this.$0_4 = new Mscrm.FlyOutDialog;
		this.$0_4.set_position(Mscrm.FlyOutPosition.bottom);
		this.$0_4.get_options().set_showCloseButton(false);
		this.$0_4.get_options().set_showButtonPane(true);
		this.$0_4.get_options().set_applyAnchorClassChange(false);
		var $v_0 = this.get_element().getAttribute("id");
		this.$2_4 = $(this.get_element());
		if (!IsNull($v_0)) {
			this.$G_4 = this.$2_4.text();
			this.$A_4 = Boolean.parse(this.get_element().getAttribute(
					"isEligibleForMarkComplete").toString());
			this.$Y_4();
			var $v_1 = this.get_$S_4()[0];
			if (!IsNull($v_1)) {
				var $v_2 = $v_1.getAttribute("flyoutTabIndex");
				!IsNull($v_2)
						&& this.$0_4.set_buttonsInitialTabIndex(parseInt($v_2
								.toString()));
				this.$0_4.set_viewport($("#processControlContainer"));
				this.$6_4 = this.$0_4.get_viewport();
				this.$0_4.get_options().set_isInDelayMode(true);
				this.$0_4.setContent(this.get_$b_4());
				this.$4_4 = this.$2_4;
				var $v_3 = $v_1.getAttribute("flyOutTitle");
				if (!IsNull($v_3)) {
					var $v_7 = $v_3.toString();
					if ($v_7.length) {
						this.$0_4.get_options().set_title($v_7);
						this.$0_4.get_options().set_showTitlePane(true)
					}
				}
				var $v_4 = $v_1.getAttribute("confirm");
				!IsNull($v_4)
						&& this.$0_4.get_options().setButtonTooltip(0,
								$v_4.toString());
				var $v_5 = $v_1.getAttribute("cancel");
				!IsNull($v_5)
						&& this.$0_4.get_options().setButtonTooltip(1,
								$v_5.toString());
				var $$t_D = this;
				this.$0_4
						.bind(
								Mscrm.FlyOutDialogEventName.visibleChanged,
								function($p1_0) {
									if (!$$t_D.$0_4.get_visible()) {
										Mscrm.InlineEditCommonUtilities
												.setIFramesSourceUrls($v_1);
										$$t_D.$2_4
												.trigger(
														Mscrm.EditEvents.attributeChanged,
														[ $$t_D.$2_4.data() ])
									} else if ($$t_D.$P_4)
										for ( var $v_8 = 0; $v_8 < $$t_D.$8_4.length; $v_8++) {
											var $v_9 = $$t_D.$8_4[$v_8];
											$v_9.handleLinkControlEvents()
										}
									if ($$t_D.$0_4.get_visible()) {
										$$t_D.$5_4 && $$t_D.$C_4.hide();
										for ( var $v_A = 0; $v_A < $$t_D
												.get_$M_4().length; $v_A++) {
											var $v_B = $$t_D.get_$M_4()[$v_A];
											$v_B.resetLayout()
										}
									}
								});
				var $v_6 = $v_1.getAttribute("flyout-opening");
				if (!IsNull($v_6))
					this.$U_4 = $v_6.toString();
				$v_6 = null;
				$v_6 = $v_1.getAttribute("flyout-opened");
				if (!IsNull($v_6))
					this.$T_4 = $v_6.toString();
				this.$d_4($v_1);
				this.$Z_4($v_1);
				this.onRender()
			}
		}
		$addHandler(this.get_element(), "click", this.$L_4);
		$addHandler(this.get_element(), "keydown", this.$$d_$a_4);
		$addHandler(this.get_element(), "keypress", this.$$d_$a_4);
		this.$c_4();
		this.$O_4 = true
	},
	$c_4 : function() {
		var $v_0 = this
				.get_$S_4()
				.find(
						"div["
								+ Mscrm.InlineEditConstants.HtmlAttributeForAttributeLogicalName
								+ "]"), $v_1 = {}, $$t_D = this;
		$v_0
				.each(function($p1_0, $p1_1) {
					var $v_2 = $($p1_1), $v_3 = $v_2
							.attr(Mscrm.InlineEditConstants.HtmlAttributeForFormDataEntityId), $v_4 = $v_2
							.attr(Mscrm.InlineEditConstants.HtmlAttributeForAttributeLogicalName), $v_5 = $v_1[$v_4];
					if (IsNull($v_5)) {
						var $v_6 = $find($v_3), $v_7 = $v_6.get_attributes()
								.get($v_4);
						$v_1[$v_4] = $v_7;
						$v_7.get_controls().forEach(function($p2_0, $p2_1) {
							var $v_8 = $p2_0;
							Array.add($$t_D.get_$M_4(), $v_8)
						})
					}
				})
	},
	get_$M_4 : function() {
		if (IsNull(this.$H_4))
			this.$H_4 = new Array(0);
		return this.$H_4
	},
	subscribeToEvent : function(eventCode, eventHandler) {
		if (!IsNull(eventHandler)) {
			this.get_eventManager().subscribeEvent(eventCode, this.get_id());
			if (eventCode.toString() in this.$3_4) {
				var $v_0 = this.$3_4[eventCode.toString()];
				$v_0[$v_0.length] = eventHandler
			} else {
				var $v_1 = [];
				$v_1[0] = eventHandler;
				this.$3_4[eventCode.toString()] = $v_1
			}
		}
	},
	handleEvent : function(eventCode, parameters, sourceComponent) {
		if (eventCode.toString() in this.$3_4)
			for ( var $v_0 = this.$3_4[eventCode.toString()], $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
				var $v_2 = $v_0[$v_1];
				!IsNull($v_2)
						&& $v_2(this, eventCode, parameters, sourceComponent)
			}
		return Mscrm.CrmUIBehavior.prototype.handleEvent.call(this, eventCode,
				parameters, sourceComponent)
	},
	$a_4 : function($p0) {
		switch ($p0.keyCode) {
		case 13:
			this.openFlyOut($p0);
			$p0.preventDefault();
			$p0.stopPropagation();
			break;
		default:
			break
		}
	},
	$Y_4 : function() {
		for ( var $v_0 = Mscrm.Utilities.getChildElementsByClassName(this
				.get_element().parentNode, "ms-crm-Form-SubGrid-Layout-Lite",
				false), $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
			var $v_2 = $v_0[$v_1].parentNode.id, $v_3 = $find($v_2);
			if (!IsNull($v_3)) {
				this.$P_4 = true;
				Array.add(this.$8_4, $v_3)
			}
		}
	},
	$Z_4 : function($p0) {
		var $v_0 = $p0.getAttribute("flyout-initialize");
		if (null !== $v_0) {
			var $v_1 = $v_0.toString(), $$t_3 = this;
			window.setTimeout(function() {
				$$t_3.$D_4($v_1);
				$$t_3.$J_4 = true
			}, 0)
		} else
			this.$J_4 = true
	},
	$E_4 : function($p0, $p1) {
		var $v_0 = $p0.getAttribute($p1);
		if (!IsNull($v_0)) {
			var $v_1 = $v_0.toString(), $$t_5 = this;
			this.$0_4.bind($p1, function($p1_0) {
				$$t_5.$D_4($v_1)
			})
		}
	},
	$d_4 : function($p0) {
		this.$E_4($p0, Mscrm.FlyOutDialogEventName.confirming);
		this.$E_4($p0, Mscrm.FlyOutDialogEventName.confirmed);
		this.$E_4($p0, Mscrm.FlyOutDialogEventName.canceling);
		this.$E_4($p0, Mscrm.FlyOutDialogEventName.canceled)
	},
	dispose : function() {
		if (!IsNull(this.get_element())) {
			null !== this.$0_4 && this.$0_4.unbind();
			$removeHandler(this.get_element(), "click", this.$L_4);
			$removeHandler(this.get_element(), "keydown", this.$$d_$a_4);
			$removeHandler(this.get_element(), "keypress", this.$$d_$a_4)
		}
		Mscrm.CrmUIBehavior.prototype.dispose.call(this)
	},
	openFlyOut : function(domEvent, anchorPoint) {
		setPerfMarkerTimestamp(Mscrm.RefreshFormMarker.StartOpenFlyOut);
		if (!IsNull(domEvent) || !IsNull(anchorPoint)) {
			if (!this.$R_4())
				return;
			if (!this.$A_4) {
				var $$t_2 = this;
				window.setTimeout(function() {
					$$t_2.$X_4(anchorPoint)
				}, 0)
			}
			this.$D_4(this.$U_4);
			if (this.$5_4) {
				this.$C_4.show(Mscrm.InlineCommands.None);
				var $$t_3 = this;
				window.setTimeout(function() {
					$$t_3.$V_4(anchorPoint)
				}, 0)
			} else
				this.$V_4(anchorPoint)
		}
	},
	$X_4 : function($p0) {
		var $v_0 = null;
		if (!IsNull($p0))
			$v_0 = $p0;
		else
			$v_0 = this.$4_4;
		var $v_1 = "";
		if (!IsNull($v_0) && !IsNull($v_0[0])) {
			if (!isNullOrEmptyString($v_0[0].id))
				$v_1 = $v_0[0].id.replace("_ledit", "");
			else {
				var $v_2 = XUI.Html.DomUtils.GetNextSibling(XUI.Html.DomUtils
						.GetNextSibling($v_0[0]));
				if (!IsNull($v_2) && !isNullOrEmptyString($v_2.id))
					$v_1 = $v_2.id.replace("_ledit", "")
			}
			if (!IsNull($get($v_1))) {
				var $v_3 = Sys.UI.Behavior.getBehaviors($get($v_1));
				if (!IsNull($v_3) && $v_3.length) {
					var $v_4 = $v_3[0];
					!IsNull($v_4) && $v_4.hideValidationElement()
				}
			}
		}
	},
	$V_4 : function($p0) {
		if (!IsNull($p0))
			this.$0_4.show($p0, this.$6_4);
		else
			this.$0_4.show(this.$4_4, this.$6_4);
		this.$D_4(this.$T_4);
		this.$Q_4 = true;
		setPerfMarkerTimestamp(Mscrm.RefreshFormMarker.FinishOpenFlyOut)
	},
	get_flyOutId : function() {
		return this.$0_4.get_id()
	},
	$R_4 : function() {
		var $v_0 = $find(Mscrm.ClientApiConstants.primaryEntityId), $v_1 = $v_0
				.get_isNew(), $v_2 = $v_0.get_isDisabled();
		if ($v_1 && !this.$I_4)
			return false;
		if ($v_2)
			return false;
		return true
	},
	$D_4 : function($p0) {
		if (!IsNull($p0)) {
			var $v_0 = eval($p0);
			$v_0(this)
		}
	},
	$W_4 : function() {
		if (isNullOrEmptyString(this.$7_4))
			return;
		if (this.$9_4)
			this.$2_4.text(this.$7_4);
		else
			this.$2_4.text(this.$G_4)
	}
};
Mscrm.FormInputControl.LinkControlInitializer = function() {
};
Mscrm.FormInputControl.LinkControlInitializer.initializeAllLinkControls = function() {
	$("[" + Mscrm.InlineEditConstants.HtmlAttributeForLinkControlBegin + "]")
			.each(
					function($p1_0, $p1_1) {
						var $v_0 = {};
						$v_0["eventManager"] = "__Page_crmEventManager";
						Mscrm.CrmUIComponent.crmCreate(
								Mscrm.FormInputControl.LinkControlBehavior,
								null, null, $v_0, $p1_1)
					})
};
Mscrm.FormInputControl.LinkControlBehavior.registerClass(
		"Mscrm.FormInputControl.LinkControlBehavior",
		Mscrm.FormControlInputBehavior, Mscrm.IProcessAwareDataUnboundControl);
Mscrm.FormInputControl.LinkControlInitializer
		.registerClass("Mscrm.FormInputControl.LinkControlInitializer")