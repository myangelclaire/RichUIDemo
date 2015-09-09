Type.registerNamespace("Mscrm.FormInputControl.Tabs");
Mscrm.FormInputControl.Tabs.TabChangingEventArgs = function() {
	Mscrm.FormInputControl.Tabs.TabChangingEventArgs.initializeBase(this)
};
Mscrm.FormInputControl.Tabs.TabChangingEventArgs.prototype = {
	$E_2 : null,
	$I_2 : null,
	$9_2 : null,
	$C_2 : null,
	$F_2 : null,
	$4_2 : null,
	$A_2 : false,
	get_currentTabContainer : function() {
		return this.$E_2
	},
	set_currentTabContainer : function(value) {
		this.$E_2 = value;
		return value
	},
	get_newTabContainer : function() {
		return this.$I_2
	},
	set_newTabContainer : function(value) {
		this.$I_2 = value;
		return value
	},
	get_currentTabHeader : function() {
		return this.$9_2
	},
	set_currentTabHeader : function(value) {
		this.$9_2 = value;
		return value
	},
	get_newTabHeader : function() {
		return this.$C_2
	},
	set_newTabHeader : function(value) {
		this.$C_2 = value;
		return value
	},
	get_currentTabId : function() {
		return this.$F_2
	},
	set_currentTabId : function(value) {
		this.$F_2 = value;
		return value
	},
	get_newTabId : function() {
		return this.$4_2
	},
	set_newTabId : function(value) {
		this.$4_2 = value;
		return value
	},
	get_firstTime : function() {
		return this.$A_2
	},
	set_firstTime : function(value) {
		this.$A_2 = value;
		return value
	}
};
Mscrm.FormInputControl.Tabs.TabsContainerResizedEventArgs = function() {
	Mscrm.FormInputControl.Tabs.TabsContainerResizedEventArgs
			.initializeBase(this)
};
Mscrm.FormInputControl.Tabs.TabsContainerResizedEventArgs.prototype = {
	$K_1 : 0,
	$H_1 : 0,
	$6_1 : 0,
	$J_1 : 0,
	get_oldHeight : function() {
		return this.$K_1
	},
	set_oldHeight : function(value) {
		this.$K_1 = value;
		return value
	},
	get_newHeight : function() {
		return this.$H_1
	},
	set_newHeight : function(value) {
		this.$H_1 = value;
		return value
	},
	get_oldWidth : function() {
		return this.$6_1
	},
	set_oldWidth : function(value) {
		this.$6_1 = value;
		return value
	},
	get_newWidth : function() {
		return this.$J_1
	},
	set_newWidth : function(value) {
		this.$J_1 = value;
		return value
	}
};
Mscrm.FormInputControl.Tabs.TabsControl = function(element) {
	this.$$d_$b_3 = Function.createDelegate(this, this.$b_3);
	Mscrm.FormInputControl.Tabs.TabsControl.initializeBase(this, [ element ])
};
Mscrm.FormInputControl.Tabs.TabsControl.prototype = {
	$3_3 : null,
	$0_3 : null,
	$8_3 : null,
	$7_3 : null,
	$M_3 : null,
	$D_3 : null,
	$6_3 : 0,
	get_tabLinksjQueryObject : function() {
		return this.$0_3
	},
	set_tabLinksjQueryObject : function(value) {
		this.$0_3 = value;
		return value
	},
	get_tabsControljQueryObject : function() {
		return this.$3_3
	},
	get_tabsHeaderjQueryObject : function() {
		return this.$M_3
	},
	get_tabsContentjQueryObject : function() {
		return this.$7_3
	},
	add_onTabChanging : function(value) {
		this.get_events().addHandler("otch", value)
	},
	remove_onTabChanging : function(value) {
		this.get_events().removeHandler("otch", value)
	},
	add_tabsContainerResized : function(value) {
		this.get_events().addHandler("otcrd", value)
	},
	remove_tabsContainerResized : function(value) {
		this.get_events().removeHandler("otcrd", value)
	},
	initialize : function() {
		Mscrm.CrmUIControl.prototype.initialize.call(this);
		this.$3_3 = $(this.get_element().parentNode);
		this.$M_3 = this.$3_3.find(".tabsHeader");
		this.$7_3 = this.$3_3.find(".tabsContent");
		this.$0_3 = this.$3_3.find(".tabLink");
		this.$8_3 = this.$3_3.find(".tabContainer");
		this.$U_3();
		this.$V_3()
	},
	$U_3 : function() {
		var $$t_7 = this;
		this.$D_3 = function($p1_0) {
			var $v_0 = $$t_7.$7_3.height(), $v_1 = $$t_7.$3_3.height()
					- $$t_7.$M_3.height(), $v_2 = $$t_7.$7_3.width();
			if ($v_0 !== $v_1 || $v_2 !== $$t_7.$6_3) {
				$$t_7.$7_3.height($v_1);
				var $v_3 = $$t_7.get_events().getHandler("otcrd");
				if ($v_3) {
					var $v_4 = $v_3, $v_5 = new Mscrm.FormInputControl.Tabs.TabsContainerResizedEventArgs;
					$v_5.$K_1 = $v_0;
					$v_5.$H_1 = $v_1;
					$v_5.$6_1 = $$t_7.$6_3;
					$v_5.$J_1 = $v_2;
					$v_4($$t_7, $v_5)
				}
				$$t_7.$6_3 = $v_2
			}
		};
		$(window).resize(this.$D_3);
		this.$D_3(null)
	},
	$V_3 : function() {
		for ( var $v_0 = 0; $v_0 < this.$0_3.length; $v_0++) {
			var $v_1 = $(this.$0_3.get($v_0)), $v_2 = $(this.$8_3.get($v_0));
			$v_1.data("associatedTabContainer", $v_2);
			$v_1.click(this.$$d_$b_3)
		}
	},
	$b_3 : function($p0) {
		var $v_0 = $($p0.currentTarget);
		this.changeCurrentTab($v_0)
	},
	changeCurrentTab : function(tab) {
		var $v_0 = tab.data("associatedTabContainer"), $v_1 = !Boolean
				.parse($v_0.attr("shown")), $v_2 = this.get_events()
				.getHandler("otch");
		if ($v_2) {
			var $v_4 = $v_2, $v_5 = new Mscrm.FormInputControl.Tabs.TabChangingEventArgs;
			$v_5.set_cancel(false);
			$v_5.$9_2 = this.$3_3.find(".tabLink.active");
			$v_5.$E_2 = this.$3_3.find(".tabContainer.active");
			$v_5.$C_2 = tab;
			$v_5.$I_2 = $v_0;
			$v_5.$F_2 = $v_5.$9_2.attr("tabid");
			$v_5.$4_2 = $v_5.$C_2.attr("tabid");
			$v_5.$A_2 = $v_1;
			$v_4(this, $v_5);
			if ($v_5.get_cancel())
				return
		}
		this.$0_3.removeClass("active");
		this.$8_3.removeClass("active");
		tab.addClass("active");
		$v_0.addClass("active");
		$v_1 && $v_0.attr("shown", "true");
		var $v_3 = tab.attr("tabid");
		this.onTabChanged($v_3)
	},
	onTabChanged : function(selectedTabId) {
	},
	$R_3 : function($p0, $p1) {
		if (isNullOrEmptyString($p0))
			return;
		for ( var $v_0 = 0; $v_0 < this.$0_3.length; $v_0++) {
			var $v_1 = $(this.$0_3.get($v_0)), $v_2 = $(this.$8_3.get($v_0));
			if ($v_1.attr("tabid") === $p0)
				if ($p1) {
					$v_1.show();
					$v_2.css("display", "")
				} else {
					$v_1.hide();
					$v_2.hide()
				}
		}
	},
	getTabContainerById : function(tabId) {
		for ( var $v_0 = 0; $v_0 < this.$0_3.length; $v_0++) {
			var $v_1 = $(this.$0_3.get($v_0));
			if ($v_1.attr("tabid") === tabId)
				return $(this.$8_3.get($v_0))
		}
		return null
	},
	getTabHeaderById : function(tabId) {
		for ( var $v_0 = 0; $v_0 < this.$0_3.length; $v_0++) {
			var $v_1 = $(this.$0_3.get($v_0));
			if ($v_1.attr("tabid") === tabId)
				return $v_1
		}
		return null
	},
	setActiveTab : function(tabId) {
		var $v_0 = this.getTabHeaderById(tabId);
		$v_0 && this.changeCurrentTab($v_0)
	},
	showTab : function(tabId) {
		this.$R_3(tabId, true)
	},
	hideTab : function(tabId) {
		this.$R_3(tabId, false)
	},
	getActiveTabId : function() {
		return this.$0_3.filter(".active").attr("tabid")
	},
	dispose : function() {
		this.$0_3.unbind();
		$(window).unbind("resize", this.$D_3);
		Mscrm.CrmUIControl.prototype.dispose.call(this)
	}
};
Mscrm.FormInputControl.Tabs.RefreshTabEventParameters = function() {
};
Mscrm.FormInputControl.Tabs.SfaTabsControl = function(element) {
	this.$$d_$Z_4 = Function.createDelegate(this, this.$Z_4);
	Mscrm.FormInputControl.Tabs.SfaTabsControl
			.initializeBase(this, [ element ]);
	this.$2_4 = new Mscrm.EntityReference
};
Mscrm.FormInputControl.Tabs.SfaTabsControl.prototype = {
	$B_4 : null,
	$5_4 : false,
	$L_4 : false,
	$1_4 : null,
	$2_4 : null,
	$S_4 : false,
	$G_4 : null,
	get_masterComponentId : function() {
		return this.$B_4
	},
	set_masterComponentId : function(value) {
		this.$B_4 = value;
		return value
	},
	get_isControlReadOnly : function() {
		return this.$5_4
	},
	set_isControlReadOnly : function(value) {
		this.$5_4 = value;
		return value
	},
	get_showWallContentOnLoad : function() {
		return this.$L_4
	},
	set_showWallContentOnLoad : function(value) {
		this.$L_4 = value;
		return value
	},
	get_defaultTabId : function() {
		return this.get_element().getAttribute("DefaultTabId")
	},
	set_defaultTabId : function(value) {
		this.get_element().setAttribute("DefaultTabId", value);
		return value
	},
	get_$X_4 : function() {
		return !!this.getTabHeaderById("ActivityFeedsSystemTab")
	},
	initialize : function() {
		Mscrm.FormInputControl.Tabs.TabsControl.prototype.initialize.call(this);
		if (!IsNull(this.get_eventManager())) {
			this.get_eventManager().subscribeEvent(
					Mscrm.ScriptEvents.RefreshTabsControl, this.get_id());
			this.get_eventManager().subscribeEvent(
					Mscrm.ScriptEvents.GridRowPreview, this.get_id())
		}
		var $v_0 = this.getTabContainerById("ActivityFeedsTab"), $v_1 = this
				.getTabContainerById("ActivityFeedsSystemTab");
		if (Mscrm.Utilities.isIosDevice() && !IsNull($v_1)) {
			this.$1_4 = $find(XUI.Html.DomUtils.GetFirstChild($v_1.get(0)).id);
			this.$1_4.set_hasInitialSkeleton(true)
		} else if (!IsNull($v_0)) {
			this.$1_4 = $find(XUI.Html.DomUtils.GetFirstChild($v_0.get(0)).id);
			!IsNull(this.$1_4.set_hasInitialSkeleton)
					&& this.$1_4.set_hasInitialSkeleton(true);
			var $v_3 = this.getTabHeaderById("ActivityFeedsSystemTab");
			!IsNull($v_3) && $v_3.data("associatedTabContainer", $v_0)
		}
		var $v_2 = $(this.get_element()).find(".getYammerHolder");
		if ($v_2.length === 1)
			this.$G_4 = Mscrm.CrmUIComponent.crmCreate(Mscrm.GetYammer, null,
					null, null, $v_2[0]);
		this.$2_4.Id = Xrm.Page.data.entity.getId();
		if (!this.$5_4 || this.$L_4) {
			var $$t_4 = this;
			window.setTimeout(function() {
				$$t_4.setActiveTab($$t_4.get_defaultTabId())
			}, 2e3)
		}
		this.add_onTabChanging(this.$$d_$Z_4)
	},
	$Z_4 : function($p0, $p1) {
		if (window.UseTabletExperience) {
			var $v_0 = document.createElement("textarea");
			$v_0.style.height = "0 px";
			$v_0.style.width = "100 px";
			$v_0.style.position = "absolute";
			$v_0.style.top = "0 px";
			$v_0.style.left = "0 px";
			document.body.appendChild($v_0);
			$v_0.focus();
			$v_0.blur();
			document.body.removeChild($v_0)
		}
		($p1.$4_2 === "ActivityFeedsTab" || $p1.$4_2 === "ActivityFeedsSystemTab")
				&& this.$N_4($p1.$4_2);
		$p1.$4_2 === "NotesTab" && $p1.$A_2 && this.$Y_4()
	},
	$Y_4 : function() {
		for ( var $v_0 = this.getTabContainerById("NotesTab"), $v_1 = $v_0
				.get(0), $v_2 = XUI.Html.DomUtils.GetFirstChild($v_1), $v_3 = document
				.createElement("iframe"), $v_4 = $v_2.attributes, $v_5 = 0; $v_5 < $v_4.length; $v_5++)
			$v_3.setAttribute($v_4.item($v_5).nodeName,
					$v_4.item($v_5).nodeValue);
		$v_1.replaceChild($v_3, $v_2);
		Mscrm.FormInputControl.NotesControlBehavior.attachNoteControlBehavior(
				$v_3, 0);
		this.$T_4()
	},
	$W_4 : function() {
		var $v_0 = Mscrm.CrmUri.create("/_controls/notes/notesdata.aspx");
		$v_0.get_query()["EnableInlineEdit"] = this.$5_4 ? "false" : "true";
		$v_0.get_query()["EnableInsert"] = this.$5_4 ? "false" : "true";
		$v_0.get_query()["id"] = this.$2_4.Id;
		$v_0.get_query()["ReadForm"] = "true";
		$v_0.get_query()["ParentEntity"] = this.$2_4.TypeCode;
		$v_0.get_query()["theme"] = window.RefreshFormTheme;
		var $v_1 = this.getTabHeaderById("NotesTab").get(0), $v_2 = $v_1.offsetLeft
				- $v_1.parentNode.offsetLeft + $v_1.clientWidth / 2 - 10;
		$v_0.get_query()["Notch"] = Math.floor($v_2);
		Mscrm.CrmUri.updateCrmUriHostAndScheme($v_0);
		return $v_0.toLocaleString()
	},
	refresh : function(entity) {
		if (!IsNull(entity)) {
			this.updateParentEntity(entity);
			var $v_0 = this.getActiveTabId();
			!IsNull($v_0) && $v_0 !== "ActivitiesTab"
					&& this.setActiveTab($v_0)
		}
	},
	updateParentEntity : function(entityReference) {
		this.$2_4 = entityReference;
		this.$N_4(this.getActiveTabId())
	},
	$T_4 : function() {
		var $v_0 = this.getTabContainerById("NotesTab"), $v_1 = XUI.Html.DomUtils
				.GetFirstChild($v_0.first().get(0));
		if ($v_1.nodeName.toUpperCase() === "IFRAME") {
			var $v_2 = this.$W_4();
			if (!$v_1.src.endsWith($v_2))
				$v_1.src = $v_2
		}
	},
	$N_4 : function($p0) {
		if (this.$1_4) {
			if (($p0 === "ActivityFeedsTab" || $p0 === "ActivityFeedsSystemTab")
					&& (this.$2_4.Id !== this.$1_4.get_entityId() || this.$2_4.TypeName !== this.$1_4
							.get_entityType())) {
				if (IsNull(this.$1_4.set_hasInitialSkeleton)) {
					var $v_0 = this.getTabContainerById($p0).find(
							".recordWall.initialFiller");
					if ($v_0.length > 0) {
						var $v_1 = $v_0.get(0);
						$v_1.parentNode.removeChild($v_1)
					}
				}
				this.$1_4.loadWallForEntity(this.$2_4)
			}
			this.get_$X_4()
					&& this.$1_4
							.selectPostSourceFilter($p0 === "ActivityFeedsTab" ? 2
									: 1)
		}
	},
	setActivityFeedsTabState : function(isActivityFeedsEnabled) {
		if (isActivityFeedsEnabled) {
			if (!Mscrm.Utilities.isIosDevice())
				this.showTab("ActivityFeedsTab");
			else
				this.set_defaultTabId("ActivityFeedsSystemTab");
			this.showTab("ActivityFeedsSystemTab")
		} else
			this.set_defaultTabId("ActivitiesTab")
	},
	handleEvent : function(eventCode, parameters, sourceComponent) {
		Mscrm.CrmUIControl.prototype.handleEvent.call(this, eventCode,
				parameters, sourceComponent);
		switch (eventCode) {
		case Mscrm.ScriptEvents.GridRowPreview:
		case Mscrm.ScriptEvents.RefreshTabsControl:
			if (IsNull(sourceComponent) && this.$B_4 === this.get_id()
					|| !IsNull(sourceComponent)
					&& this.$B_4 === sourceComponent.get_id())
				if (!IsNull(parameters)) {
					if (!IsNull(parameters["entityReference"]))
						this.$2_4 = parameters["entityReference"];
					var $v_0 = false, $v_1 = null;
					if (!IsNull(parameters["onlyFocus"]))
						$v_0 = parameters["onlyFocus"];
					if (!IsNull(parameters["tabName"]))
						$v_1 = parameters["tabName"];
					else {
						$v_1 = this.getActiveTabId();
						parameters["tabName"] = $v_1
					}
					if ($v_0)
						this.setActiveTab($v_1);
					else
						this.$Q_4($v_1, parameters)
				}
			break
		}
		return null
	},
	updateNotesTabTabIndex : function() {
		for ( var $v_0 = "", $v_3 = 0; $v_3 < this.$0_3.length; $v_3++)
			if (this.$0_3.get($v_3).getAttribute("tabid") === "NotesTab") {
				$v_0 = this.$0_3.get($v_3).getAttribute("tabIndex");
				break
			}
		var $v_1 = this.getTabContainerById("NotesTab"), $v_2 = $v_1
				.find(".noteData");
		!IsNull($v_2) && !isNullOrEmptyString($v_0)
				&& $v_2.attr("tabIndex", $v_0)
	},
	dispose : function() {
		this.$G_4 && this.$G_4.dispose();
		this.$0_3.unbind();
		Mscrm.FormInputControl.Tabs.TabsControl.prototype.dispose.call(this)
	},
	onTabChanged : function(tabId) {
		Mscrm.FormInputControl.Tabs.TabsControl.prototype.onTabChanged.call(
				this, tabId);
		this.$a_4(tabId)
	},
	$a_4 : function($p0) {
		var $v_0 = {};
		if (!isNullOrEmptyString(this.$2_4.Id))
			$v_0["entityID"] = this.$2_4.Id;
		this.$Q_4($p0, $v_0)
	},
	$Q_4 : function($p0, $p1) {
		if (!IsNull($p1["entityID"]))
			this.$2_4.Id = $p1["entityID"];
		if (isNullOrEmptyString(this.$2_4.Id)) {
			var $v_0 = $find(Mscrm.ClientApiConstants.primaryEntityId);
			!IsNull($v_0) && !$v_0.get_isNew() && this.$P_4($p0, $p1)
		} else
			this.$P_4($p0, $p1)
	},
	$P_4 : function($p0, $p1) {
		this.$7_3.get(0).style.overflowY = $p0 === "NotesTab" ? "hidden" : "";
		switch ($p0) {
		case "ActivitiesTab":
			this.get_eventManager().raiseEvent(
					this.$5_4 ? Mscrm.ScriptEvents.RefreshActivitiesWall
							: Mscrm.ScriptEvents.RefreshActivityContainer, $p1,
					this);
			break;
		case "NotesTab":
			this.$T_4();
			break;
		case "ActivityFeedsTab":
		case "ActivityFeedsSystemTab":
			this.$N_4($p0);
			break
		}
	},
	processData : function() {
		!IsNull(this.$1_4) && this.$1_4.processData()
	},
	get_shouldDeferDataProcessing : function() {
		return this.$S_4
	},
	set_shouldDeferDataProcessing : function(value) {
		this.$S_4 = value;
		!IsNull(this.$1_4) && this.$1_4.set_shouldDeferDataProcessing(value);
		return value
	}
};
Mscrm.FormInputControl.Tabs.TabChangingEventArgs
		.registerClass("Mscrm.FormInputControl.Tabs.TabChangingEventArgs",
				Sys.CancelEventArgs);
Mscrm.FormInputControl.Tabs.TabsContainerResizedEventArgs.registerClass(
		"Mscrm.FormInputControl.Tabs.TabsContainerResizedEventArgs",
		Sys.EventArgs);
Mscrm.FormInputControl.Tabs.TabsControl.registerClass(
		"Mscrm.FormInputControl.Tabs.TabsControl", Mscrm.CrmUIControl);
Mscrm.FormInputControl.Tabs.RefreshTabEventParameters
		.registerClass("Mscrm.FormInputControl.Tabs.RefreshTabEventParameters");
Mscrm.FormInputControl.Tabs.SfaTabsControl.registerClass(
		"Mscrm.FormInputControl.Tabs.SfaTabsControl",
		Mscrm.FormInputControl.Tabs.TabsControl,
		Mscrm.IDeferredDataProcessingControl);
Mscrm.FormInputControl.Tabs.TabsControl.associatedTabContainerKey = "associatedTabContainer";
Mscrm.FormInputControl.Tabs.TabsControl.activeTabClassName = "active";
Mscrm.FormInputControl.Tabs.TabsControl.tabAttributeId = "tabid";
Mscrm.FormInputControl.Tabs.RefreshTabEventParameters.tabName = "tabName";
Mscrm.FormInputControl.Tabs.RefreshTabEventParameters.refreshAll = "refreshAll";
Mscrm.FormInputControl.Tabs.RefreshTabEventParameters.onlyFocus = "onlyFocus";
Mscrm.FormInputControl.Tabs.RefreshTabEventParameters.entityId = "entityID";
Mscrm.FormInputControl.Tabs.RefreshTabEventParameters.entityTypeToExpand = "entityTypeToExpand";
Mscrm.FormInputControl.Tabs.RefreshTabEventParameters.entityReference = "entityReference"