Type.registerNamespace("Mscrm.FormInputControl");
Mscrm.FormInputControl.ActivitiesWallPage = function(element) {
	this.$$d_handleViewportInitialization = Function.createDelegate(this,
			this.handleViewportInitialization);
	this.$J_3 = new Sales.Common.Framework.Loaders.ConcurrentContentLoader;
	Mscrm.FormInputControl.ActivitiesWallPage.initializeBase(this, [ element ])
};
Mscrm.FormInputControl.ActivitiesWallPage.$r = function() {
	if (!Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings)
		Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings = window.self.activitieswallStrings
};
Mscrm.FormInputControl.ActivitiesWallPage.prototype = {
	$8_3 : null,
	$F_3 : null,
	$C_3 : null,
	$P_3 : null,
	$L_3 : null,
	$2_3 : null,
	$Q_3 : false,
	$S_3 : null,
	$B_3 : null,
	$c_3 : false,
	$R_3 : false,
	get_wallCommandDispatcher : function() {
		return this.$2_3
	},
	set_wallCommandDispatcher : function(value) {
		this.$2_3 = value;
		return value
	},
	get_entityId : function() {
		return this.$8_3
	},
	set_entityId : function(value) {
		this.$8_3 = value;
		return value
	},
	get_viewId : function() {
		return this.$F_3
	},
	set_viewId : function(value) {
		this.$F_3 = value;
		return value
	},
	get_entityObjectTypeCode : function() {
		return this.$C_3
	},
	set_entityObjectTypeCode : function(value) {
		this.$C_3 = value;
		return value
	},
	get_masterComponentId : function() {
		return this.$L_3
	},
	set_masterComponentId : function(value) {
		this.$L_3 = value;
		return value
	},
	get_wallContentPageUrl : function() {
		return this.$P_3
	},
	set_wallContentPageUrl : function(value) {
		this.$P_3 = value;
		return value
	},
	get_tabId : function() {
		return this.$S_3
	},
	set_tabId : function(value) {
		this.$S_3 = value;
		return value
	},
	get_isControlReadOnly : function() {
		return this.$Q_3
	},
	set_isControlReadOnly : function(value) {
		this.$Q_3 = value;
		return value
	},
	initialize : function() {
		Mscrm.CrmUIControl.prototype.initialize.call(this);
		Mscrm.FormInputControl.ActivitiesWallPage.$r();
		!IsNull(this.get_eventManager())
				&& this.get_eventManager()
						.subscribeEvent(
								Mscrm.ScriptEvents.RefreshActivitiesWall,
								this.get_id());
		Mscrm.InlineEditInitializationManager.get_instance()
				.add_inlineEditViewportInitializationCompleted(
						this.$$d_handleViewportInitialization);
		this.$t_3()
	},
	handleEvent : function(eventCode, parameters, sourceComponent) {
		Mscrm.CrmUIControl.prototype.handleEvent.call(this, eventCode,
				parameters, sourceComponent);
		switch (eventCode) {
		case Mscrm.ScriptEvents.RefreshActivitiesWall:
			if (this.$L_3 === sourceComponent.get_id()) {
				if (isNullOrEmptyString(this.get_element().innerHTML)
						&& !IsNull(this.$B_3)) {
					this.get_element().innerHTML = this.$B_3;
					this.$K_3()
				}
				if (isNullOrEmptyString(this.get_element().innerHTML)
						&& IsNull(this.$B_3))
					break;
				this.$q_3(parameters)
			}
			break
		}
		return null
	},
	dispose : function() {
		this.$J_3.dispose();
		!IsNull(this.$2_3) && this.$2_3.dispose();
		Mscrm.CrmUIControl.prototype.dispose.call(this)
	},
	handleViewportInitialization : function(initializer, eventArgs) {
		Mscrm.InlineEditInitializationManager.get_instance()
				.remove_inlineEditViewportInitializationCompleted(
						this.$$d_handleViewportInitialization);
		if (isNullOrEmptyString(this.get_element().innerHTML)
				&& !IsNull(this.$B_3)) {
			this.get_element().innerHTML = this.$B_3;
			this.$K_3()
		}
		this.$R_3 = true
	},
	$K_3 : function() {
		if (!this.$c_3)
			this.$c_3 = true;
		else
			return;
		if (!this.$2_3)
			this.$2_3 = new Mscrm.FormInputControl.ActivitiesWallCommandDispatcher(
					this.get_element().id, this.$8_3, this.$F_3, this.$C_3);
		var $$t_1 = this;
		window
				.setTimeout(
						function() {
							var $v_0 = $find(Mscrm.ClientApiConstants.primaryEntityId);
							!IsNull($v_0)
									&& $v_0.get_isNew()
									&& $$t_1.$2_3
											.dispatchCommand(
													"showtext",
													Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.EMPTY_MESSAGE_LOC_STRING)
						}, 1e3)
	},
	$t_3 : function() {
		setPerfMarkerTimestamp(Mscrm.RefreshFormMarker.StartWallHtmlLoad);
		var $$t_1 = this;
		this.$J_3.loadContent(this.$P_3, "html", function($p1_0) {
			$$t_1.$B_3 = $p1_0;
			setPerfMarkerTimestamp(Mscrm.RefreshFormMarker.FinishWallHtmlLoad);
			if ($$t_1.$R_3
					&& isNullOrEmptyString($$t_1.get_element().innerHTML)) {
				$$t_1.get_element().innerHTML = $$t_1.$B_3;
				$$t_1.$K_3()
			}
		})
	},
	$d_3 : function($p0, $p1) {
		if (!this.$2_3)
			this.$2_3 = new Mscrm.FormInputControl.ActivitiesWallCommandDispatcher(
					this.get_element().id, this.$8_3, this.$F_3, this.$C_3);
		this.$2_3
				.dispatchCommand(
						"showtext",
						Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.LOADING_TEXT_LOC_STRING);
		if (!this.$C_3)
			if (!isNullOrEmptyString(Xrm.Page.data.entity.getEntityName())) {
				var $v_0 = convertETNtoETC(Xrm.Page.data.entity.getEntityName());
				if ($v_0 !== -1)
					this.$C_3 = $v_0.toString()
			}
		if ($p0) {
			this.$8_3 = $p0;
			this.$2_3.set_entityId($p0)
		}
		if (!isNullOrEmptyString($p1))
			this.$2_3.dispatchCommand("loadwall", $p1);
		else
			this.$2_3.dispatchCommand("loadwall", null)
	},
	$q_3 : function($p0) {
		if ($p0
				&& $p0[Mscrm.FormInputControl.Tabs.RefreshTabEventParameters.entityId])
			if (!isNullOrEmptyString($p0["entityTypeToExpand"]))
				this
						.$d_3(
								$p0[Mscrm.FormInputControl.Tabs.RefreshTabEventParameters.entityId],
								$p0[Mscrm.FormInputControl.Tabs.RefreshTabEventParameters.entityTypeToExpand]);
			else
				this
						.$d_3($p0[Mscrm.FormInputControl.Tabs.RefreshTabEventParameters.entityId]);
		else {
			if (!this.$2_3)
				this.$2_3 = new Mscrm.FormInputControl.ActivitiesWallCommandDispatcher(
						this.get_element().id, this.$8_3, this.$F_3, this.$C_3);
			this.$2_3
					.dispatchCommand(
							"showtext",
							Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.EMPTY_MESSAGE_LOC_STRING)
		}
	}
};
Mscrm.FormInputControl.WallCommands = function() {
};
Mscrm.FormInputControl.ActivitiesWallCommandDispatcher = function(
		wallElementId, entityId, viewId, entityObjectTypeCode) {
	this.$$d_$y_0 = Function.createDelegate(this, this.$y_0);
	this.$1_0 = $("#" + wallElementId);
	this.$l_0 = this.$1_0.find("#wall");
	this.$l_0.height("auto");
	this.$16_0 = $($get(wallElementId));
	this.$3_0 = new ActivitiesWall.Service.WallService(entityId, viewId,
			entityObjectTypeCode);
	this.$4_0 = new ActivitiesWall.UI.ActivitiesWall(this.$3_0, "header",
			"postTemplate", "wallContainer", wallElementId);
	this.$4_0.$9_0 = 10
};
Mscrm.FormInputControl.ActivitiesWallCommandDispatcher.prototype = {
	$1_0 : null,
	$l_0 : null,
	$16_0 : null,
	$3_0 : null,
	$4_0 : null,
	$8_0 : null,
	get_entityId : function() {
		return this.$8_0
	},
	set_entityId : function(value) {
		this.$8_0 = value;
		this.$4_0 && this.$4_0.set_entityId(this.$8_0);
		return value
	},
	dispatchCommand : function(commandName) {
		for ( var parameters = [], $$pai_2 = 1; $$pai_2 < arguments.length; ++$$pai_2)
			parameters[$$pai_2 - 1] = arguments[$$pai_2];
		if (_String.isNullOrEmpty(commandName))
			throw Error.create("commandName is undefined");
		commandName = commandName.toLowerCase();
		switch (commandName) {
		case "refreshall":
			this.$N_0(parameters[0]);
			break;
		case "loadentitywall":
			this.$u_0(parameters[0], parameters[1]);
			break;
		case "loadwall":
			this.$s_0(parameters[0]);
			break;
		case "showtext":
			this.$4_0.showText(parameters[0], true);
			break;
		case "clearwall":
			this.$4_0.clearWall();
			break;
		case "prependtowall":
			this.$4_0.addToWall(parameters[0]);
			break;
		default:
			throw Error.create("invalid commandName")
		}
	},
	dispose : function() {
		!IsNull(this.$4_0) && this.$4_0.dispose()
	},
	$y_0 : function($p0) {
		this.$N_0()
	},
	$u_0 : function($p0, $p1) {
		this.$3_0.$7_0 = $p0;
		this.$3_0.$A_0 = $p1;
		this.$N_0()
	},
	$s_0 : function($p0) {
		var $$t_1 = this;
		$(function() {
			$$t_1.dispatchCommand("refreshall", $p0);
			$$t_1.$1_0.find(".refreshDiv #refreshAllLink").bind("click",
					$$t_1.$$d_$y_0)
		})
	},
	$N_0 : function($p0) {
		this.$4_0.clearWall();
		if (!this.get_entityId()
				&& isNullOrEmptyString(Xrm.Page.data.entity.getId()))
			this
					.dispatchCommand(
							"showtext",
							Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.EMPTY_MESSAGE_LOC_STRING);
		else
			this.$4_0.refreshAll($p0)
	}
};
Type.registerNamespace("ActivitiesWall.UI");
ActivitiesWall.UI.ActivitiesWall = function(wallService, headerId,
		postTemplateId, wallContainerId, wallControlId) {
	this.$$d_$h_0 = Function.createDelegate(this, this.$h_0);
	this.$$d_$w_0 = Function.createDelegate(this, this.$w_0);
	this._events = new Sys.EventHandlerList;
	this.set_wallService(wallService);
	this.$5_0 = new Array(0);
	this.$9_0 = 10;
	this.$M_0 = postTemplateId;
	this.$Y_0 = "emptyMessage";
	this.$b_0 = "InlineErrorMessage";
	this.$O_0 = wallContainerId;
	this.$G_0 = wallControlId;
	this.headerJQuery = $($get(headerId));
	this.$1_0 = $($get(this.$G_0));
	this.postTemplatejQuery = this.$1_0.find("#" + postTemplateId);
	this.emptyMessagejQuery = this.$1_0.find("#" + this.$Y_0);
	this.wallContainerjQuery = this.$1_0.find("#" + wallContainerId);
	this.inlineMessagejQuery = this.$1_0.find("#" + this.$b_0);
	this.$j_0 = this.$1_0.find("#showMoreLinkTemplate");
	Wall.Control.Utils.WallUtils.enableTextSelection();
	Mscrm.InlineEditDataService.get_dataService().add_formRefreshed(
			this.$$d_$w_0)
};
ActivitiesWall.UI.ActivitiesWall.$6 = function($p0, $p1, $p2) {
	switch ($p2) {
	case 1:
		$p0.find(".expandIcon").hide();
		break;
	case 2:
		$p0.find(".expandIcon").show();
		break
	}
	switch ($p1) {
	case 1:
		$p0.find(".collapseIcon").hide();
		break;
	case 2:
		$p0.find(".collapseIcon").show();
		break
	}
};
ActivitiesWall.UI.ActivitiesWall.prototype = {
	$O_0 : null,
	$M_0 : null,
	$Y_0 : null,
	$b_0 : null,
	$G_0 : null,
	$3_0 : null,
	$5_0 : null,
	$D_0 : 0,
	$9_0 : 0,
	$E_0 : null,
	headerJQuery : null,
	postTemplatejQuery : null,
	inlineMessagejQuery : null,
	wallContainerjQuery : null,
	emptyMessagejQuery : null,
	$j_0 : null,
	$1_0 : null,
	get_wallContainerId : function() {
		return this.$O_0
	},
	set_wallContainerId : function(value) {
		this.$O_0 = value;
		return value
	},
	get_activitiesWallId : function() {
		return this.$G_0
	},
	set_activitiesWallId : function(value) {
		this.$G_0 = value;
		return value
	},
	get_postTemplateId : function() {
		return this.$M_0
	},
	set_postTemplateId : function(value) {
		this.$M_0 = value;
		return value
	},
	get_commentTemplateId : function() {
		throw Error.notImplemented()
	},
	set_commentTemplateId : function(value) {
		throw Error.notImplemented();
		return value
	},
	get_entityId : function() {
		return this.$3_0.$7_0
	},
	set_entityId : function(value) {
		this.$3_0.$7_0 = value;
		return value
	},
	get_entityObjectTypeCode : function() {
		return this.$3_0.$A_0
	},
	set_entityObjectTypeCode : function(value) {
		this.$3_0.$7_0 = value;
		return value
	},
	get_wallService : function() {
		return this.$3_0
	},
	set_wallService : function(value) {
		this.$3_0 = value;
		return value
	},
	get_pageSize : function() {
		return this.$9_0
	},
	set_pageSize : function(value) {
		this.$9_0 = value;
		return value
	},
	add_postsRefreshing : function(value) {
		this._events.addHandler("PostsRefreshing", value)
	},
	remove_postsRefreshing : function(value) {
		this._events.removeHandler("PostsRefreshing", value)
	},
	add_postsRefreshed : function(value) {
		this._events.addHandler("PostsRefreshed", value)
	},
	remove_postsRefreshed : function(value) {
		this._events.removeHandler("PostsRefreshed", value)
	},
	add_commentsRefreshed : function(value) {
		this._events.addHandler("CommentsRefreshed", value)
	},
	remove_commentsRefreshed : function(value) {
		this._events.removeHandler("CommentsRefreshed", value)
	},
	add_postCreated : function(value) {
		this._events.addHandler("PostCreated", value)
	},
	remove_postCreated : function(value) {
		this._events.removeHandler("PostCreated", value)
	},
	add_commentCreated : function(value) {
		throw Error.notImplemented()
	},
	remove_commentCreated : function(value) {
		throw Error.notImplemented()
	},
	add_postDeleted : function(value) {
		throw Error.notImplemented()
	},
	remove_postDeleted : function(value) {
		throw Error.notImplemented()
	},
	add_commentDeleted : function(value) {
		throw Error.notImplemented()
	},
	remove_commentDeleted : function(value) {
		throw Error.notImplemented()
	},
	add_filtersRefreshed : function(value) {
		throw Error.notImplemented()
	},
	remove_filtersRefreshed : function(value) {
		throw Error.notImplemented()
	},
	add_error : function(value) {
		this._events.addHandler("Error", value)
	},
	remove_error : function(value) {
		this._events.removeHandler("Error", value)
	},
	fireEvent : function(T, eventName, args) {
		_Event.fireEvent(T, this._events, eventName, this, args)
	},
	refreshAll : function(entityTypeToExpand) {
		setPerfMarkerTimestamp(Mscrm.RefreshFormMarker.StartWallRefreshLoadTime);
		this.$D_0 = 1;
		this.$E_0 = null;
		var $v_0 = this.$3_0.getWallServiceFactory()
				.createRetrievePostsRequest();
		$v_0.set_pageNumber(this.$D_0);
		$v_0.set_pageSize(this.$9_0);
		$v_0.set_pagingCookie(this.$E_0);
		var $$t_4 = this;
		this
				.get_wallService()
				.retrievePosts(
						$v_0,
						function($p1_0) {
							$$t_4.$f_0($p1_0, function() {
								var $v_1 = $p1_0.get_posts();
								$$t_4.$5_0 = new Array(0);
								$$t_4.clearWall();
								$$t_4.$T_0($v_1, $p1_0.get_morePosts());
								$$t_4.$1_0.find(".post:first")
										.addClass("first");
								!IsNull(entityTypeToExpand)
										&& $$t_4.$p_0(entityTypeToExpand)
							}, $$t_4.$$d_$h_0, function() {
								$$t_4.$i_0($p1_0, true)
							});
							setPerfMarkerTimestamp(Mscrm.RefreshFormMarker.FinishWallRefreshLoadTime)
						})
	},
	renderOlderPosts : function() {
		var $v_0 = this.wallContainerjQuery.find(".showMoreLink");
		$v_0.addClass("showMoreLinkProgress");
		var $v_1 = this.$3_0.getWallServiceFactory()
				.createRetrievePostsRequest();
		$v_1.set_pageSize(this.$9_0);
		$v_1.set_pagingCookie(this.$E_0);
		$v_1.set_pageNumber(this.$D_0 + 1);
		var $$t_4 = this;
		this.get_wallService().retrievePosts(
				$v_1,
				function($p1_0) {
					$$t_4.$f_0($p1_0, function() {
						$v_0.removeClass("showMoreLinkProgress").remove();
						var $v_2 = Wall.Control.Utils.WallUtils
								.removeDuplicatePosts($p1_0.get_posts(),
										$$t_4.$5_0);
						$$t_4.$D_0++;
						$$t_4.$E_0 = $p1_0.get_pagingCookie();
						$$t_4.$T_0($v_2, $p1_0.get_morePosts());
						if ($v_2.length > 0)
							;
					}, function() {
						$v_0.removeClass("showMoreLinkProgress");
						$$t_4.$h_0()
					}, function() {
						$$t_4.$i_0($p1_0, false);
						$v_0.removeClass("showMoreLinkProgress");
						$$t_4.$U_0()
					})
				})
	},
	clearWall : function() {
		this.$1_0.find(".wallContainer").empty()
	},
	showText : function(wallText, isClearWall) {
		isClearWall && this.clearWall();
		var $v_0 = new ActivitiesWall.Service.ObjectModel.EmptyMessage(
				CrmEncodeDecode.CrmHtmlEncode(wallText));
		!IsNull(this.wallContainerjQuery)
				&& !IsNull(this.emptyMessagejQuery)
				&& this.emptyMessagejQuery.tmpl($v_0, this).appendTo(
						this.wallContainerjQuery)
	},
	addToWall : function(parameter) {
		var $v_0 = ActivitiesWall.Service.GridDataToActivityPostConvertor
				.convertJsonToRowData(parameter), $v_1 = [ $v_0 ], $v_2 = ActivitiesWall.Service.GridDataToActivityPostConvertor
				.gridDataToWallPostCollection($v_1);
		this.$x_0($v_2)
	},
	dispose : function() {
		if (!IsNull(this.wallContainerjQuery)) {
			this.wallContainerjQuery.empty().remove();
			this.wallContainerjQuery = null
		}
		Mscrm.InlineEditDataService.get_dataService().remove_formRefreshed(
				this.$$d_$w_0)
	},
	refreshComments : function(parentPostId, pageSize, olderThanDate) {
		throw Error.notImplemented()
	},
	postMessage : function(text) {
		throw Error.notImplemented()
	},
	postComment : function(parentPostId, text) {
		throw Error.notImplemented()
	},
	deletePost : function(postId) {
		throw Error.notImplemented()
	},
	deleteComment : function(commentId) {
		throw Error.notImplemented()
	},
	getWallActions : function(actionType, context) {
		throw Error.notImplemented()
	},
	refreshWallFilters : function() {
		throw Error.notImplemented()
	},
	refreshWallFilter : function(filterType) {
		throw Error.notImplemented()
	},
	$w_0 : function($p0, $p1) {
		if ($p1.get_command() === Mscrm.InlineCommands.Save
				&& !Mscrm.InlineEditDataService.isNew()) {
			Mscrm.InlineEditDataService.get_dataService().remove_formRefreshed(
					this.$$d_$w_0);
			var $v_0 = this.$1_0.find("[statecode='Open']");
			if ($v_0.length > 0) {
				var $v_1 = $v_0.find(".markcomplete");
				$v_1.show();
				$v_1.next().show()
			}
		}
	},
	$h_0 : function() {
		this
				.showText(
						Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.EMPTY_MESSAGE_LOC_STRING,
						true);
		this.$a_0()
	},
	$i_0 : function($p0, $p1) {
		if ($p0.$H_2)
			this
					.showText(
							Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.WALL_LOAD_ERROR_RETRY_LOC_STRING,
							$p1);
		else
			this
					.showText(
							Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.WALL_LOAD_ERROR_LOC_STRING,
							$p1)
	},
	$U_0 : function() {
		var $v_0 = this.wallContainerjQuery.find(".showMoreLink");
		if (IsNull($v_0) || !$v_0.length)
			$v_0 = this.$j_0.tmpl("[]").appendTo(this.wallContainerjQuery);
		var $$t_2 = this;
		$v_0.bind("click", function($p1_0) {
			$v_0.unbind("click");
			$$t_2.renderOlderPosts();
			$p1_0.preventDefault();
			$p1_0.stopPropagation()
		}).show()
	},
	$a_0 : function() {
		var $v_0 = this.wallContainerjQuery.find(".showMoreLink");
		!IsNull($v_0) && $v_0.hide()
	},
	$T_0 : function($p0, $p1) {
		if (IsNull($p0) || !$p0.length)
			return;
		this.$1_0.find(".post").removeClass("last");
		var $$t_3;
		this.$5_0 = ($$t_3 = this.$5_0).concat.apply($$t_3, $p0);
		var $v_0 = this.postTemplatejQuery.tmpl($p0, this).appendTo(
				this.wallContainerjQuery);
		this.$1_0.find(".post:last").addClass("last");
		if ($p1)
			this.$U_0();
		else
			this.$a_0();
		this.$g_0($v_0)
	},
	$f_0 : function($p0, $p1, $p2, $p3) {
		if ($p0.get_isSucceeded()) {
			this.$E_0 = $p0.get_pagingCookie();
			if (!IsNull($p0.get_posts()) && $p0.get_posts().length > 0)
				$p1();
			else if (IsNull($p0.get_posts()) && !IsNull($p3))
				$p3();
			else
				!IsNull($p2) && $p2()
		} else if (!IsNull($p3))
			$p3();
		else
			alert($p0.get_errorMessage())
	},
	$x_0 : function($p0) {
		if (IsNull($p0) || !$p0.length)
			return;
		this.$1_0.find(".post").removeClass("first");
		var $v_0 = $p0;
		if (!IsNull(this.$5_0) && this.$5_0.length)
			$v_0 = $v_0.concat.apply($v_0, this.$5_0);
		else {
			this.$5_0 = new Array(0);
			this.clearWall()
		}
		this.$5_0 = $v_0;
		var $v_1 = this.postTemplatejQuery.tmpl($p0, this);
		this.wallContainerjQuery.prepend($v_1);
		this.$1_0.find(".post:first").addClass("first");
		this.$g_0($v_1)
	},
	$g_0 : function($p0) {
		var $v_0 = this.$1_0.attr("walltabIndex").toString();
		this.$1_0.find(".textAndArrow").attr("tabindex",
				CrmEncodeDecode.CrmHtmlAttributeEncode($v_0));
		$p0.attr("tabindex", CrmEncodeDecode.CrmHtmlAttributeEncode($v_0));
		$p0.find(".clickable").attr("tabindex",
				CrmEncodeDecode.CrmHtmlAttributeEncode($v_0));
		$p0.find(".markcomplete").attr("tabindex",
				CrmEncodeDecode.CrmHtmlAttributeEncode($v_0));
		$p0.find(".clickableOwner").attr("tabindex",
				CrmEncodeDecode.CrmHtmlAttributeEncode($v_0));
		$p0.find(".openrecord").attr("tabindex",
				CrmEncodeDecode.CrmHtmlAttributeEncode($v_0));
		$p0.find(".collapseIcon").attr("tabindex",
				CrmEncodeDecode.CrmHtmlAttributeEncode($v_0));
		$p0.find(".expandIcon").attr("tabindex",
				CrmEncodeDecode.CrmHtmlAttributeEncode($v_0));
		$p0.find(".postActions").hide();
		$p0.find(".emailexpandedaccordion").hide();
		ActivitiesWall.UI.ActivitiesWall.$6($p0, 1, 1);
		this.$14_0($p0);
		this.$13_0($p0);
		this.$11_0($p0);
		if (Mscrm.InlineEditDataService.isNew()) {
			var $v_1 = $p0.find(".markcomplete");
			$v_1.css("display", "none");
			$v_1.next().css("display", "none")
		}
	},
	$12_0 : function($p0) {
		var $$t_8 = this;
		this.$1_0.find(".textAndArrow").keydown(function($p1_0) {
			switch ($p1_0.which) {
			case 13:
				$(this).parents(".showMoreLink").click();
				break
			}
			$p1_0.stopPropagation()
		});
		var $$t_9 = this;
		$p0.find(".clickableOwner").keydown(function($p1_0) {
			switch ($p1_0.which) {
			case 13:
				$(this).click();
				break
			}
			$p1_0.stopPropagation()
		});
		var $$t_A = this;
		$p0.find(".clickable").keydown(function($p1_0) {
			switch ($p1_0.which) {
			case 13:
				$(this).parents("a").click();
				break
			}
			$p1_0.stopPropagation()
		});
		var $$t_B = this;
		$p0.find(".collapseIcon").keydown(function($p1_0) {
			switch ($p1_0.which) {
			case 13:
				$(this).parents(".post").trigger("click");
				break
			}
			$p1_0.stopPropagation()
		});
		var $$t_C = this;
		$p0.find(".expandIcon").keydown(function($p1_0) {
			switch ($p1_0.which) {
			case 13:
				$(this).parents(".post").trigger("click");
				break
			}
			$p1_0.stopPropagation()
		});
		var $$t_D = this;
		$p0.keyup(function($p1_0) {
			switch ($p1_0.which) {
			case 9:
				$(this).prev(".post").find(".postActions").hide();
				$(this).next(".post").find(".postActions").hide();
				$(this).trigger("mouseenter");
				break
			}
			$p1_0.stopPropagation()
		});
		var $$t_E = this;
		$p0.keydown(function($p1_0) {
			switch ($p1_0.which) {
			case 13:
				$(this).trigger("click");
				$(this).focus();
				break
			}
			$p1_0.stopPropagation()
		})
	},
	$15_0 : function($p0) {
		var $$t_3 = this;
		$p0.find(".markcomplete").keydown(function($p1_0) {
			switch ($p1_0.which) {
			case 13:
				$(this).click();
				break
			}
			$p1_0.stopPropagation()
		});
		var $$t_4 = this;
		$p0.find(".openrecord").keydown(function($p1_0) {
			switch ($p1_0.which) {
			case 13:
				$(this).children("a").click();
				break
			}
			$p1_0.stopPropagation()
		})
	},
	$11_0 : function($p0) {
		this.$12_0($p0);
		this.$15_0($p0)
	},
	$13_0 : function($p0) {
		var $$t_5 = this;
		$p0.find(".markcomplete").click(
				function($p1_0) {
					$$t_5.$v_0($(this).attr("entityid"), $(this).attr(
							"entitylogicalname"), $(this));
					$p1_0.preventDefault();
					$p1_0.stopPropagation()
				});
		var $$t_6 = this;
		$p0.find(".iconThumbnail").click(
				function($p1_0) {
					Wall.Control.Utils.WindowUtils.openObject(Number
							.parseInvariant($(this).attr("objecttypecode")), $(
							this).attr("postid"));
					$p1_0.stopPropagation()
				});
		var $$t_7 = this;
		$p0.find(".openrecord").click(
				function($p1_0) {
					Wall.Control.Utils.WindowUtils.openObject(Number
							.parseInvariant($(this).attr("objecttypecode")), $(
							this).attr("postid"));
					$p1_0.stopPropagation()
				});
		var $$t_8 = this;
		$p0
				.bind(
						"click",
						function($p1_0) {
							if ($(this).children(".collapsedaccordion").length > 0) {
								ActivitiesWall.UI.ActivitiesWall.$6($(this), 2,
										1);
								$(this).find(".collapseIcon").focus();
								$(this)
										.children(".collapsedaccordion")
										.toggleClass(
												"collapsedaccordion expandedaccordion")
							} else if ($(this).children(".expandedaccordion").length > 0) {
								ActivitiesWall.UI.ActivitiesWall.$6($(this), 1,
										2);
								$(this).find(".expandIcon").focus();
								$(this)
										.children(".expandedaccordion")
										.toggleClass(
												"expandedaccordion collapsedaccordion")
							} else if ($(this).children(
									".emailexpandedaccordion").length > 0) {
								if ($(this).children(
										".emailexpandedaccordion:visible").length) {
									ActivitiesWall.UI.ActivitiesWall.$6(
											$(this), 1, 2);
									$(this).find(".expandIcon").focus()
								} else {
									ActivitiesWall.UI.ActivitiesWall.$6(
											$(this), 2, 1);
									$(this).find(".collapseIcon").focus()
								}
								$(this).children(".emailexpandedaccordion")
										.toggle()
							}
							$p1_0.preventDefault();
							$p1_0.stopPropagation()
						})
	},
	$v_0 : function($p0, $p1, $p2) {
		$p1 = $p2.attr("entitylogicalname");
		if (IsNull($p1))
			return;
		var $$t_7 = this, $$t_8 = this;
		Mscrm.InlineEditDataService
				.deactivateWithReference(
						"Completed",
						-1,
						$p0,
						$p1,
						null,
						true,
						null,
						function($p1_0) {
							var $v_0 = $p2.parents(".post");
							$v_0.children(".inlineerrormessage").remove();
							$p2.attr("statecode", "Completed");
							$p2.next().attr("statecode", "Completed");
							$v_0.attr("statecode", "Completed");
							var $v_1 = $v_0.find(".lastDiv .acDetails");
							$v_1.empty();
							$v_1 = $v_0.find(".lastDiv .modifiedOnDate");
							$v_1.empty();
							$v_1
									.text(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.ACT_WALL_JUST_NOW);
							$v_0.find(".you").show();
							return true
						},
						function($p1_0) {
							$p2.parents(".post")
									.children(".inlineerrormessage").remove();
							$$t_8.inlineMessagejQuery
									.tmpl(
											new ActivitiesWall.Service.ObjectModel.EmptyMessage(
													CrmEncodeDecode
															.CrmHtmlEncode(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.COMPLETE_FAILED_ACTION_ERROR_MESSAGE)),
											$$t_8).appendTo(
											$p2.parents(".post"));
							return true
						}, true)
	},
	$14_0 : function($p0) {
		var $$t_3 = this;
		$p0.bind("mouseenter", function($p1_0) {
			$(this).find(".postActions").show();
			if ($(this).find(".collapsedaccordion").length)
				ActivitiesWall.UI.ActivitiesWall.$6($(this).children(
						".wallbody"), 0, 2);
			else if ($(this).find(".expandedaccordion").length)
				ActivitiesWall.UI.ActivitiesWall.$6($(this).children(
						".wallbody"), 2, 0);
			else if ($(this).find(".emailexpandedaccordion").length)
				if ($(this).find(".emailexpandedaccordion:visible").length)
					ActivitiesWall.UI.ActivitiesWall.$6($(this).children(
							".wallbody"), 2, 0);
				else
					ActivitiesWall.UI.ActivitiesWall.$6($(this).children(
							".wallbody"), 0, 2);
			$p1_0.preventDefault();
			$p1_0.stopPropagation()
		});
		var $$t_4 = this;
		$p0.bind("mouseleave", function($p1_0) {
			ActivitiesWall.UI.ActivitiesWall.$6($(this).children(".wallbody"),
					1, 1);
			$p0.find(".postActions").hide();
			$p1_0.preventDefault();
			$p1_0.stopPropagation()
		})
	},
	$p_0 : function($p0) {
		var $v_0 = this.$1_0.find("[objecttypecode='" + $p0 + "']");
		if ($v_0.length > 0) {
			var $v_1 = $v_0.first(), $v_2 = $v_1.find(".wallbody").next();
			if (!IsNull($v_2))
				!$v_2.hasClass("expandedaccordion")
						&& $v_2
								.toggleClass("collapsedaccordion expandedaccordion")
		}
	}
};
Type.registerNamespace("ActivitiesWall.Service");
ActivitiesWall.Service.GridDataToActivityPostConvertor = function() {
};
ActivitiesWall.Service.GridDataToActivityPostConvertor.gridDataToWallPostCollection = function(
		grid) {
	var $v_0 = new Array(grid.length), $v_1 = 0;
	while (grid.length > $v_1) {
		var $v_2 = new ActivitiesWall.Service.ObjectModel.Post, $v_3 = grid[$v_1];
		$v_2.text = CrmEncodeDecode.CrmHtmlEncode($v_3.subject);
		$v_2.postId = CrmEncodeDecode.CrmHtmlAttributeEncode($v_3.RowId);
		$v_2.objectTypeCode = $v_3.RowType;
		if ($v_3.RowType.toString() === Mscrm.EntityTypeCode.Email.toString())
			if (!isNullOrEmptyString($v_3.description))
				$v_2.description = $v_3.description;
			else
				$v_2.description = " ";
		else {
			var $v_6 = Mscrm.InlineEditUtilities
					.normalizeNewLineForTextArea($v_3.description);
			if (!isNullOrEmptyString($v_6)) {
				var $v_7 = $v_6.split("\r");
				$v_6 = "";
				for ( var $v_8 = 0; $v_8 < $v_7.length - 1; $v_8++)
					$v_6 += CrmEncodeDecode.CrmHtmlEncode($v_7[$v_8]) + "<br>";
				$v_6 += CrmEncodeDecode.CrmHtmlEncode($v_7[$v_7.length - 1]);
				$v_2.description = $v_6
			} else
				$v_2.description = " "
		}
		$v_2.modifiedOn = CrmEncodeDecode
				.CrmHtmlEncode(Wall.Control.Utils.DateUtils
						.formatDateAsReadableString($v_3.modifiedon_Value,
								$v_3.modifiedon));
		$v_2.scheduledEnd = CrmEncodeDecode.CrmHtmlEncode($v_3.scheduledend);
		var $v_4 = new Wall.Service.ObjectModel.EntityReference;
		$v_4.set_name(CrmEncodeDecode.CrmHtmlEncode($v_3.modifiedby));
		$v_4.set_id(CrmEncodeDecode
				.CrmHtmlAttributeEncode($v_3.modifiedby_Value.Data.ID));
		$v_4.set_typeCode($v_3.modifiedby_Value.Data.Type);
		$v_2.set_modifiedBy($v_4);
		$v_2.priority = CrmEncodeDecode.CrmHtmlEncode($v_3.prioritycode);
		var $v_5 = new Wall.Service.ObjectModel.EntityReference;
		$v_5.set_name(CrmEncodeDecode.CrmHtmlEncode($v_3.ownerid));
		$v_5.set_id(CrmEncodeDecode
				.CrmHtmlAttributeEncode($v_3.ownerid_Value.Data.ID));
		$v_5.set_typeCode($v_3.ownerid_Value.Data.Type);
		$v_2.state = CrmEncodeDecode
				.CrmHtmlAttributeEncode($v_3.statecode_Value);
		$v_2.statusReason = $v_3.statuscode_Value;
		$v_2.entityLogicalName = CrmEncodeDecode
				.CrmHtmlAttributeEncode($v_3.EntityLogicalName);
		$v_2.isUnsafe = $v_3.IsUnsafe;
		if (!IsNull($v_3.directioncode))
			$v_2.directionCode = ActivitiesWall.Service.GridDataToActivityPostConvertor
					.$X($v_3.directioncode.toString());
		if (!IsNull($v_3.leftvoicemail_Value))
			$v_2.leftVoicemail = ActivitiesWall.Service.GridDataToActivityPostConvertor
					.$X($v_3.leftvoicemail_Value.toString());
		$v_2.imageSource = ActivitiesWall.Service.GridDataToActivityPostConvertor
				.$z($v_2, $v_3.IconUrl, $v_3.activitytypecode);
		ActivitiesWall.Service.GridDataToActivityPostConvertor.$10($v_3, $v_2);
		$v_0[$v_1] = $v_2;
		$v_1 = $v_1 + 1
	}
	return $v_0
};
ActivitiesWall.Service.GridDataToActivityPostConvertor.convertJsonToRowData = function(
		parameters) {
	if (IsNull(parameters))
		return null;
	var $v_0 = new ActivitiesWall.Service.ObjectModel.RowData, $v_1 = parameters, $v_2 = Mscrm.InlineEditUtilities
			.getEntityReference($v_1), $v_3 = $v_2.TypeCode, $v_4 = $v_2.Id, $v_5 = Mscrm.InlineEditUtilities
			.getLookupValue($v_1["ownerid"]), $v_6 = $v_5[0].id, $v_7 = Mscrm.NumberUtility
			.locStringToInt($v_5[0].type), $v_8 = $v_5[0].name, $v_9 = Mscrm.InlineEditUtilities
			.getLookupValue($v_1["modifiedby"]);
	$v_0.RowId = $v_4;
	$v_0.RowType = $v_3;
	$v_0.EntityLogicalName = $v_2.TypeName;
	$v_0.subject = Mscrm.InlineEditUtilities.getDecodedValue($v_1["subject"]);
	$v_0.description = Mscrm.InlineEditUtilities.getDecodedValue(
			$v_1["description"], true);
	$v_0.directioncode = Mscrm.InlineEditUtilities
			.getRawValue($v_1["directioncode"]);
	$v_0.ownerid = $v_8;
	$v_0.leftvoicemail_Value = Mscrm.InlineEditUtilities
			.getRawValue($v_1["leftvoicemail"]);
	$v_0.activitytypecode = $v_2.TypeDisplayName;
	$v_0.modifiedby = $v_9[0].name;
	$v_0.statecode_Value = Mscrm.InlineEditUtilities.getData($v_1, "statecode",
			"invariant");
	$v_0.modifiedon = Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.ACT_WALL_JUST_NOW;
	$v_0.prioritycode = Mscrm.InlineEditUtilities
			.getDecodedValue($v_1["prioritycode"]);
	$v_0.scheduledend = Mscrm.InlineEditUtilities
			.getDecodedValue($v_1["scheduledend"]);
	var $v_A = new ActivitiesWall.Service.ObjectModel.EntityData;
	$v_A.ID = $v_6;
	$v_A.Type = $v_7;
	$v_A.Name = $v_8;
	var $v_B = new ActivitiesWall.Service.ObjectModel.GridDataEntityReference;
	$v_B.Data = $v_A;
	$v_0.modifiedby_Value = $v_B;
	var $v_C = new Array(0);
	if (!IsNull($v_1["from"]))
		$v_C = ActivitiesWall.Service.GridDataToActivityPostConvertor.$W($v_1,
				"from", 1);
	if (!IsNull($v_1["to"]))
		$v_C = $v_C.concat.apply($v_C,
				ActivitiesWall.Service.GridDataToActivityPostConvertor.$W($v_1,
						"to", 2));
	$v_0.allparties_Value = $v_C;
	$v_0.ownerid_Value = $v_B;
	return $v_0
};
ActivitiesWall.Service.GridDataToActivityPostConvertor.$W = function($p0, $p1,
		$p2) {
	var $v_0 = new Array(0), $v_1 = Mscrm.InlineEditUtilities
			.getInnerDataObject($p0, $p1);
	if (!IsNull($v_1))
		for ( var $v_2 = Mscrm.InlineEditUtilities.getLookupValue($v_1), $$arr_6 = $v_2, $$len_7 = $$arr_6.length, $$idx_8 = 0; $$idx_8 < $$len_7; ++$$idx_8) {
			var $v_3 = $$arr_6[$$idx_8], $v_4 = new ActivitiesWall.Service.ObjectModel.ActivityParty;
			$v_4.participationtypemask = $p2;
			var $v_5 = new ActivitiesWall.Service.ObjectModel.EntityData;
			$v_5.ID = $v_3.id;
			$v_5.Type = Mscrm.NumberUtility.locStringToInt($v_3.type);
			$v_5.Name = $v_3.name;
			$v_4.partyid = $v_5;
			$v_0[$v_0.length] = $v_4
		}
	return $v_0
};
ActivitiesWall.Service.GridDataToActivityPostConvertor.$z = function($p0, $p1,
		$p2) {
	var $v_0;
	if ($p0.objectTypeCode.toString() === Mscrm.EntityTypeCode.PhoneCall
			.toString())
		if (!IsNull($p0.leftVoicemail) && $p0.leftVoicemail)
			$v_0 = "/_imgs/leftvoicemail_32.png";
		else if (!IsNull($p0.directionCode))
			if (!$p0.directionCode)
				$v_0 = "/_imgs/Incoming_call_32.png";
			else
				$v_0 = "/_imgs/Outgoing_call_32.png";
		else
			$v_0 = "/_imgs/Ribbon/Entity32_4210.png";
	else if (isNullOrEmptyString($p1))
		if ($p0.objectTypeCode.toString() === Mscrm.EntityTypeCode.Task
				.toString())
			$v_0 = "/_imgs/Ribbon/Entity32_4212.png";
		else
			$v_0 = "/_imgs/Ribbon/AddActivity_32.png";
	else
		$v_0 = $p1;
	return String.format('<img src="{0}" alt="{1}" title="{1}"/>',
			CrmEncodeDecode.CrmHtmlAttributeEncode($v_0), CrmEncodeDecode
					.CrmHtmlAttributeEncode($p2))
};
ActivitiesWall.Service.GridDataToActivityPostConvertor.$10 = function($p0, $p1) {
	for ( var $$arr_2 = $p0.allparties_Value, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
		var $v_0 = $$arr_2[$$idx_4];
		if ($v_0.participationtypemask === 1
				|| $v_0.participationtypemask === 2
				|| $v_0.participationtypemask === 3) {
			var $v_1 = new ActivitiesWall.Service.ObjectModel.Party;
			$v_1.participationTypeMask = $v_0.participationtypemask;
			if (IsNull($v_0.partyid)) {
				if (!isNullOrEmptyString($v_0.addressused))
					$v_1.partyName = CrmEncodeDecode
							.CrmHtmlEncode($v_0.addressused)
			} else {
				$v_1.partyID = CrmEncodeDecode
						.CrmHtmlAttributeEncode($v_0.partyid.ID);
				$v_1.partyObjectTypeCode = CrmEncodeDecode
						.CrmHtmlAttributeEncode($v_0.partyid.Type.toString());
				if ($v_0.partyid.Name)
					$v_1.partyName = CrmEncodeDecode
							.CrmHtmlEncode($v_0.partyid.Name)
			}
			if ($v_0.participationtypemask === 1)
				if (!$p1.from) {
					$p1.from = [];
					$p1.from[0] = $v_1
				} else
					$p1.from[$p1.from.length] = $v_1;
			if ($v_0.participationtypemask === 2)
				if (!$p1.to) {
					$p1.to = [];
					$p1.to[0] = $v_1
				} else
					$p1.to[$p1.to.length] = $v_1;
			if ($v_0.participationtypemask === 3)
				if (!$p1.cc) {
					$p1.cc = [];
					$p1.cc[0] = $v_1
				} else
					$p1.cc[$p1.cc.length] = $v_1
		}
	}
};
ActivitiesWall.Service.GridDataToActivityPostConvertor.$X = function($p0) {
	var $v_0 = false;
	if (!IsNull($p0))
		if (!IsNull(Boolean.parse($p0)))
			$v_0 = Boolean.parse($p0);
		else if (!IsNull(Number.parseInvariant($p0)))
			switch (Number.parseInvariant($p0)) {
			case 0:
				$v_0 = false;
				break;
			case 1:
				$v_0 = true;
				break
			}
	return $v_0
};
ActivitiesWall.Service.WallService = function(entityId, viewId,
		entityObjectTypeCode) {
	this.$$d_$17_0 = Function.createDelegate(this, this.$17_0);
	this.$V_0 = Mscrm.EntityTypeCode.Incident.toString();
	this.$m_0 = new ActivitiesWall.Service.WallServiceFactory;
	this.$7_0 = entityId;
	this.$I_0 = viewId;
	this.$A_0 = entityObjectTypeCode
};
ActivitiesWall.Service.WallService.prototype = {
	$7_0 : null,
	$I_0 : null,
	$A_0 : null,
	get_entityId : function() {
		return this.$7_0
	},
	set_entityId : function(value) {
		this.$7_0 = value;
		return value
	},
	get_entityObjectTypeCode : function() {
		return this.$A_0
	},
	set_entityObjectTypeCode : function(value) {
		this.$A_0 = value;
		return value
	},
	$m_0 : null,
	retrievePosts : function(retrievePostsRequest, retrievePostsCallback) {
		var $v_0 = this.$o_0(retrievePostsRequest.get_pageNumber(),
				retrievePostsRequest.get_pageSize(), retrievePostsRequest
						.get_pagingCookie()), $v_1 = new Mscrm.RemoteCommandXml(
				"AppGridWebService", "RefreshData");
		$v_1.setContent($v_0);
		$v_1.set_reference(retrievePostsCallback);
		$v_1.execute(this.$$d_$17_0)
	},
	$17_0 : function($p0, $p1) {
		var $v_0 = $p1.get_reference();
		if ($p0.get_success() && !isNullOrEmptyString($p0.get_returnValue())) {
			var $v_1 = XUI.Xml.LoadXml($p0.get_returnValue()), $v_2 = XUI.Xml
					.GetText(XUI.Xml.SelectSingleNode($v_1,
							"gridXml/pagingCookie", null)), $v_3 = Boolean
					.parse(XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_1,
							"gridXml/moreRecords", null))), $v_4 = XUI.Xml
					.GetText(XUI.Xml.SelectSingleNode($v_1, "gridXml/gridHtml",
							null));
			$v_4 = $v_4.substring(8, $v_4.length);
			var $v_5 = new ActivitiesWall.Service.Messages.RetrieveActivityPostsResponse, $v_6 = Sys.Serialization.JavaScriptSerializer
					.deserialize($v_4);
			$v_5
					.set_posts(ActivitiesWall.Service.GridDataToActivityPostConvertor
							.gridDataToWallPostCollection($v_6));
			$v_5.set_pagingCookie($v_2);
			$v_5.set_morePosts($v_3);
			!IsNull($v_0) && $v_0($v_5)
		} else {
			var $v_7 = new ActivitiesWall.Service.Messages.RetrieveActivityPostsResponse;
			$v_7.$H_2 = $p0.get_retry();
			$v_7.set_errorMessage($p0.get_returnValue());
			!IsNull($v_0) && $v_0($v_7)
		}
	},
	$n_0 : function($p0) {
		var $v_0;
		switch (Mscrm.NumberUtility.locStringToInt($p0)) {
		case Mscrm.EntityTypeCode.Account:
		case Mscrm.EntityTypeCode.Contact:
			$v_0 = "<queryapi>CRMActivity.RollupRelatedByParty</queryapi>";
			break;
		case Mscrm.EntityTypeCode.Opportunity:
			$v_0 = "<queryapi>CRMActivity.RollupByParty</queryapi>";
			break;
		default:
			if (!isNullOrEmptyString(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.ISACTIVITYPARTY_LOC_STRING)
					&& Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.ISACTIVITYPARTY_LOC_STRING === "true")
				$v_0 = "<queryapi>CRMActivity.RetrieveByParty</queryapi>";
			else
				$v_0 = "<queryapi>CRMActivity.RetrieveByObject</queryapi>";
			break
		}
		return $v_0
	},
	$o_0 : function($p0, $p1, $p2) {
		var $v_0 = null, $v_1 = null, $v_2 = null;
		if (this.$7_0)
			$v_0 = this.$7_0;
		else
			$v_0 = Xrm.Page.data.entity.getId();
		if (this.$A_0)
			$v_1 = this.$A_0;
		else
			$v_1 = this.$V_0;
		if (this.$I_0)
			$v_2 = this.$I_0;
		else
			$v_2 = "7F15E2BB-305A-468F-9AF7-BE865755A984";
		var $v_3 = "<grid>";
		$v_3 += "<sortColumns>" + CrmEncodeDecode.CrmXmlEncode("modifiedon")
				+ ":0</sortColumns>";
		$v_3 += String.format("<pageNum>{0}</pageNum>", CrmEncodeDecode
				.CrmXmlEncode($p0.toString()));
		$v_3 += String.format("<recsPerPage>{0}</recsPerPage>", CrmEncodeDecode
				.CrmXmlEncode($p1.toString()));
		$v_3 += isNullOrEmptyString($p2) ? "<pagingCookie/>" : String.format(
				"<pagingCookie>{0}</pagingCookie>", CrmEncodeDecode
						.CrmXmlEncode($p2));
		$v_3 += "<returntotalrecordcount>true</returntotalrecordcount>";
		$v_3 += "<parameters>";
		$v_3 += "<oId>" + CrmEncodeDecode.CrmXmlEncode($v_0) + "</oId>";
		$v_3 += "<oType>" + CrmEncodeDecode.CrmXmlEncode($v_1) + "</oType>";
		$v_3 += this.$n_0($v_1);
		$v_3 += "<viewid>" + CrmEncodeDecode.CrmXmlEncode($v_2) + "</viewid>";
		$v_3 += "<viewtype>1039</viewtype>";
		$v_3 += "<otn>" + CrmEncodeDecode.CrmXmlEncode("activitypointer")
				+ "</otn>";
		$v_3 += "<GridType>AssociatedGrid</GridType>";
		var $v_4 = Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.ACTIVITYPOINTER_RELATIONSHIP_NAME;
		$v_3 += "<relName>" + $v_4 + "</relName>";
		$v_3 += "<relationshipType>1</relationshipType>";
		$v_3 += "</parameters>";
		$v_3 += "<columns>";
		$v_3 += '<column width="0" isHidden="false" isMetadataBound="true" isSortable="true" label="Subject" fieldname="subject" entityname="activitypointer" renderertype="Crm.PrimaryField">subject</column>';
		$v_3 += '<column width="0" isHidden="false" isMetadataBound="true" isSortable="true" label="Activity&#32;Type" fieldname="activitytypecode" entityname="activitypointer">activitytypecode</column>';
		$v_3 += ' <column width="0" isHidden="false" isMetadataBound="true" isSortable="true" label="Activity&#32;Status" fieldname="statecode" entityname="activitypointer">statecode</column>';
		$v_3 += '<column width="0" isHidden="false" isMetadataBound="true" isSortable="true" label="Priority" fieldname="prioritycode" entityname="activitypointer">prioritycode</column>';
		$v_3 += ' <column width="0" isHidden="false" isMetadataBound="true" isSortable="true" label="Due&#32;Date" fieldname="scheduledend" entityname="activitypointer">scheduledend</column>';
		$v_3 += '<column width="0" isHidden="false" isMetadataBound="true" isSortable="true" label="Regarding" fieldname="regardingobjectid" entityname="activitypointer">regardingobjectid</column>';
		$v_3 += '<column width="0" isHidden="true" isMetadataBound="true" isSortable="false" label="Recurring&#32;Instance&#32;Type" fieldname="instancetypecode" entityname="activitypointer">instancetypecode</column>';
		$v_3 += '<column width="0" isHidden="false" isMetadataBound="true" isSortable="true" label="Description" fieldname="description" entityname="activitypointer">description</column>';
		$v_3 += '<column width="0" isHidden="false" isMetadataBound="true" isSortable="true" label="ModifiedOn" fieldname="modifiedon" entityname="activitypointer">modifiedon</column>';
		$v_3 += '<column width="0" isHidden="false" isMetadataBound="true" isSortable="true" label="ModifiedBy" fieldname="modifiedby" entityname="activitypointer">modifiedby</column>';
		$v_3 += '<column width="0" isHidden="false" isMetadataBound="true" isSortable="true" label="allparties" fieldname="allparties" entityname="activitypointer">allparties</column>';
		$v_3 += '<column width="0" isHidden="false" isMetadataBound="true" isSortable="true" label="OwnerId" fieldname="ownerid" entityname="activitypointer">ownerid</column>';
		$v_3 += '<column width="0" isHidden="false" isMetadataBound="true" isSortable="true" label="PriorityCode" fieldname="prioritycode" entityname="activitypointer">prioritycode</column>';
		$v_3 += '<column width="0" isHidden="false" isMetadataBound="true" isSortable="true" label="StateCode" fieldname="statecode" entityname="activitypointer">statecode</column>';
		$v_3 += '<column width="0" isHidden="false" isMetadataBound="true" isSortable="true" label="StatusCode" fieldname="statuscode" entityname="activitypointer">statuscode</column>';
		$v_3 += '<column width="0" isHidden="false" isMetadataBound="true" isSortable="true" label="Left&#32;Voice&#32;Mail" fieldname="leftvoicemail" entityname="activitypointer">leftvoicemail</column>';
		$v_3 += "</columns>";
		$v_3 += "</grid>";
		return $v_3
	},
	retrieveComments : function(retrieveCommentsRequest,
			retrieveCommentsCallback) {
		throw Error.notImplemented()
	},
	postMessage : function(post, createPostCallback) {
		throw Error.notImplemented()
	},
	postComment : function(comment, createCommentCallback) {
		throw Error.notImplemented()
	},
	deletePost : function(post, deletePostCallback) {
		throw Error.notImplemented()
	},
	deleteComment : function(comment, deleteCommentCallback) {
		return
	},
	getWallActions : function(actionType, context) {
		throw Error.notImplemented()
	},
	getWallFilters : function(filterType, context) {
		throw Error.notImplemented()
	},
	retrieveWallFilters : function(filterType, context,
			retrieveWallFiltersCallback) {
		throw Error.notImplemented()
	},
	selectWallFilter : function(wallFilter) {
		throw Error.notImplemented()
	},
	getSelectedWallFilter : function(filterType) {
		throw Error.notImplemented()
	},
	setDefaultFilter : function(wallFilter, setDefaultFilterCallback) {
		throw Error.notImplemented()
	},
	getWallActionsAsync : function(actionType, context,
			getWallActionsSuccessCallback, getWallActionsFailureCallback) {
		throw Error.notImplemented()
	},
	getWallServiceFactory : function() {
		return this.$m_0
	},
	formatPostTextForRendering : function(postText) {
		throw Error.notImplemented()
	},
	formatCommentTextForRendering : function(commentText) {
		throw Error.notImplemented()
	}
};
ActivitiesWall.Service.WallServiceFactory = function() {
};
ActivitiesWall.Service.WallServiceFactory.prototype = {
	createRetrievePostsRequest : function() {
		return new ActivitiesWall.Service.Messages.RetrieveActivityPostsRequest
	},
	createPost : function() {
		throw Error.notImplemented()
	},
	createComment : function() {
		throw Error.notImplemented()
	},
	createEntityReference : function() {
		throw Error.notImplemented()
	},
	createRetrieveCommentsRequest : function() {
		throw Error.notImplemented()
	},
	createRetrieveLikesRequest : function() {
		throw Error.notImplemented()
	}
};
Type.registerNamespace("ActivitiesWall.Service.Messages");
ActivitiesWall.Service.Messages.RetrieveActivityPostsRequest = function() {
};
ActivitiesWall.Service.Messages.RetrieveActivityPostsRequest.prototype = {
	$D_0 : 0,
	$9_0 : 0,
	$Z_0 : null,
	$k_0 : null,
	$e_0 : null,
	get_endDate : function() {
		return this.$Z_0
	},
	set_endDate : function(value) {
		this.$Z_0 = value;
		return value
	},
	get_pageNumber : function() {
		return this.$D_0
	},
	set_pageNumber : function(value) {
		this.$D_0 = value;
		return value
	},
	get_pageSize : function() {
		return this.$9_0
	},
	set_pageSize : function(value) {
		this.$9_0 = value;
		return value
	},
	get_pagingCookie : function() {
		return this.$e_0
	},
	set_pagingCookie : function(value) {
		this.$e_0 = value;
		return value
	},
	get_startDate : function() {
		return this.$k_0
	},
	set_startDate : function(value) {
		this.$k_0 = value;
		return value
	}
};
ActivitiesWall.Service.Messages.RetrieveActivityPostsResponse = function() {
	ActivitiesWall.Service.Messages.RetrieveActivityPostsResponse
			.initializeBase(this)
};
ActivitiesWall.Service.Messages.RetrieveActivityPostsResponse.prototype = {
	$H_2 : false,
	get_retry : function() {
		return this.$H_2
	},
	set_retry : function(value) {
		this.$H_2 = value;
		return value
	}
};
Type.registerNamespace("ActivitiesWall.Service.ObjectModel");
ActivitiesWall.Service.ObjectModel.ParticipationTypeMask = function() {
};
ActivitiesWall.Service.ObjectModel.ParticipationTypeMask.prototype = {
	sender : 1,
	toRecepient : 2,
	ccRecipient : 3,
	bccRecipient : 4,
	requiredattendee : 5,
	optionalattendee : 6,
	organizer : 7,
	regarding : 8,
	owner : 9,
	resource : 10,
	customer : 11,
	partner : 12
};
ActivitiesWall.Service.ObjectModel.ParticipationTypeMask.registerEnum(
		"ActivitiesWall.Service.ObjectModel.ParticipationTypeMask", false);
ActivitiesWall.Service.ObjectModel.RowData = function() {
};
ActivitiesWall.Service.ObjectModel.RowData.prototype = {
	RowId : null,
	RowType : 0,
	subject : null,
	description : null,
	activitytypecode : null,
	modifiedby : null,
	ownerid : null,
	modifiedon_Value : null,
	modifiedon : null,
	scheduledend : null,
	modifiedby_Value : null,
	regardingobjectid_Value : null,
	allparties_Value : null,
	ownerid_Value : null,
	prioritycode : null,
	statecode_Value : null,
	statuscode_Value : 0,
	directioncode : null,
	leftvoicemail_Value : null,
	EntityLogicalName : null,
	IsUnsafe : false,
	IconUrl : null
};
ActivitiesWall.Service.ObjectModel.GridDataEntityReference = function() {
};
ActivitiesWall.Service.ObjectModel.GridDataEntityReference.prototype = {
	Data : null
};
ActivitiesWall.Service.ObjectModel.EntityData = function() {
};
ActivitiesWall.Service.ObjectModel.EntityData.prototype = {
	Type : 0,
	Name : null,
	ID : null
};
ActivitiesWall.Service.ObjectModel.ActivityParty = function() {
};
ActivitiesWall.Service.ObjectModel.ActivityParty.prototype = {
	activitypartyid : null,
	ownerid : null,
	participationtypemask : 0,
	activityid : null,
	ispartydeleted : null,
	scheduleend : null,
	partyid : null,
	schedulestart : null,
	instancetypecode : null,
	addressused : null
};
ActivitiesWall.Service.ObjectModel.Post = function() {
};
ActivitiesWall.Service.ObjectModel.Post.prototype = {
	modifiedBy : null,
	modifiedOn : null,
	scheduledEnd : null,
	postId : null,
	text : null,
	description : null,
	objectTypeCode : 0,
	imageSource : null,
	from : null,
	to : null,
	cc : null,
	owner : null,
	priority : null,
	state : null,
	statusReason : 0,
	entityLogicalName : null,
	directionCodeDisplayString : null,
	directionCode : false,
	leftVoicemail : false,
	isUnsafe : false,
	get_createdBy : function() {
		return null
	},
	set_createdBy : function(value) {
		return value
	},
	get_createdOn : function() {
		return null
	},
	set_createdOn : function(value) {
		return value
	},
	get_modifiedBy : function() {
		return this.modifiedBy
	},
	set_modifiedBy : function(value) {
		this.modifiedBy = value;
		return value
	},
	get_modifiedOnValue : function() {
		return this.modifiedOn
	},
	set_modifiedOnValue : function(value) {
		this.modifiedOn = value;
		return value
	},
	get_modifiedOn : function() {
		return new Date(this.modifiedOn)
	},
	set_modifiedOn : function(value) {
		this.modifiedOn = value.toString();
		return value
	},
	get_scheduledEnd : function() {
		return this.scheduledEnd
	},
	set_scheduledEnd : function(value) {
		this.scheduledEnd = value;
		return value
	},
	get_postId : function() {
		return this.postId
	},
	set_postId : function(value) {
		this.postId = value;
		return value
	},
	get_text : function() {
		return this.text
	},
	set_text : function(value) {
		this.text = value;
		return value
	},
	get_description : function() {
		return this.description
	},
	set_description : function(value) {
		this.description = value;
		return value
	},
	get_objectTypeCode : function() {
		return this.objectTypeCode
	},
	set_objectTypeCode : function(value) {
		this.objectTypeCode = value;
		return value
	},
	get_imageSource : function() {
		return this.imageSource
	},
	set_imageSource : function(value) {
		this.imageSource = value;
		return value
	},
	get_from : function() {
		return this.from
	},
	set_from : function(value) {
		this.from = value;
		return value
	},
	get_to : function() {
		return this.to
	},
	set_to : function(value) {
		this.to = value;
		return value
	},
	get_CC : function() {
		return this.cc
	},
	set_CC : function(value) {
		this.cc = value;
		return value
	},
	get_priority : function() {
		return this.priority
	},
	set_priority : function(value) {
		this.priority = value;
		return value
	},
	get_state : function() {
		return this.state
	},
	set_state : function(value) {
		this.state = value;
		return value
	},
	get_statusReason : function() {
		return this.statusReason
	},
	set_statusReason : function(value) {
		this.statusReason = value;
		return value
	},
	get_entityLogicalName : function() {
		return this.entityLogicalName
	},
	set_entityLogicalName : function(value) {
		this.entityLogicalName = value;
		return value
	},
	get_directionCode : function() {
		return this.directionCode
	},
	set_directionCode : function(value) {
		this.directionCode = value;
		return value
	},
	get_leftVoicemail : function() {
		return this.leftVoicemail
	},
	set_leftVoicemail : function(value) {
		this.leftVoicemail = value;
		return value
	},
	get_isUnsafe : function() {
		return this.isUnsafe
	},
	set_isUnsafe : function(value) {
		this.isUnsafe = value;
		return value
	},
	get_comments : function() {
		throw Error.notImplemented()
	},
	set_comments : function(value) {
		throw Error.notImplemented();
		return value
	},
	get_likeCounter : function() {
		throw Error.notImplemented()
	},
	set_likeCounter : function(value) {
		throw Error.notImplemented();
		return value
	},
	get_likeId : function() {
		throw Error.notImplemented()
	},
	set_likeId : function(value) {
		throw Error.notImplemented();
		return value
	}
};
ActivitiesWall.Service.ObjectModel.Party = function() {
};
ActivitiesWall.Service.ObjectModel.Party.prototype = {
	participationTypeMask : 0,
	partyID : null,
	partyName : null,
	partyObjectTypeCode : null
};
ActivitiesWall.Service.ObjectModel.EmptyMessage = function(emptyMessageText) {
	this.message = emptyMessageText
};
ActivitiesWall.Service.ObjectModel.EmptyMessage.prototype = {
	message : null,
	get_messageAccessor : function() {
		return this.message
	},
	set_messageAccessor : function(value) {
		this.message = value;
		return value
	}
};
Mscrm.FormInputControl.ActivitiesWallPage.registerClass(
		"Mscrm.FormInputControl.ActivitiesWallPage", Mscrm.CrmUIControl,
		Sys.IDisposable);
Mscrm.FormInputControl.WallCommands
		.registerClass("Mscrm.FormInputControl.WallCommands");
Mscrm.FormInputControl.ActivitiesWallCommandDispatcher
		.registerClass("Mscrm.FormInputControl.ActivitiesWallCommandDispatcher");
ActivitiesWall.UI.ActivitiesWall.registerClass(
		"ActivitiesWall.UI.ActivitiesWall", null, Wall.Interfaces.IWall);
ActivitiesWall.Service.GridDataToActivityPostConvertor
		.registerClass("ActivitiesWall.Service.GridDataToActivityPostConvertor");
ActivitiesWall.Service.WallService.registerClass(
		"ActivitiesWall.Service.WallService", null,
		Wall.Interfaces.IWallService);
ActivitiesWall.Service.WallServiceFactory.registerClass(
		"ActivitiesWall.Service.WallServiceFactory", null,
		Wall.Interfaces.IWallServiceFactory);
ActivitiesWall.Service.Messages.RetrieveActivityPostsRequest.registerClass(
		"ActivitiesWall.Service.Messages.RetrieveActivityPostsRequest", null,
		Wall.Interfaces.IRetrievePostsRequest);
ActivitiesWall.Service.Messages.RetrieveActivityPostsResponse.registerClass(
		"ActivitiesWall.Service.Messages.RetrieveActivityPostsResponse",
		Wall.Service.Messages.RetrievePostsBaseResponse,
		Wall.Interfaces.IRetrievePostsResponse);
ActivitiesWall.Service.ObjectModel.RowData
		.registerClass("ActivitiesWall.Service.ObjectModel.RowData");
ActivitiesWall.Service.ObjectModel.GridDataEntityReference
		.registerClass("ActivitiesWall.Service.ObjectModel.GridDataEntityReference");
ActivitiesWall.Service.ObjectModel.EntityData
		.registerClass("ActivitiesWall.Service.ObjectModel.EntityData");
ActivitiesWall.Service.ObjectModel.ActivityParty
		.registerClass("ActivitiesWall.Service.ObjectModel.ActivityParty");
ActivitiesWall.Service.ObjectModel.Post.registerClass(
		"ActivitiesWall.Service.ObjectModel.Post", null, Wall.Interfaces.IPost);
ActivitiesWall.Service.ObjectModel.Party
		.registerClass("ActivitiesWall.Service.ObjectModel.Party");
ActivitiesWall.Service.ObjectModel.EmptyMessage
		.registerClass("ActivitiesWall.Service.ObjectModel.EmptyMessage");
Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings = null;
Mscrm.FormInputControl.WallCommands.refreshAllCommandName = "refreshall";
Mscrm.FormInputControl.WallCommands.loadEntityWall = "loadentitywall";
Mscrm.FormInputControl.WallCommands.loadWall = "loadwall";
Mscrm.FormInputControl.WallCommands.showText = "showtext";
Mscrm.FormInputControl.WallCommands.clearWallText = "clearwall";
Mscrm.FormInputControl.WallCommands.prependToWall = "prependtowall";
ActivitiesWall.UI.ActivitiesWall.postsRefreshingEventName = "PostsRefreshing";
ActivitiesWall.UI.ActivitiesWall.postsRefreshedEventName = "PostsRefreshed";
ActivitiesWall.UI.ActivitiesWall.commentsRefreshedEventName = "CommentsRefreshed";
ActivitiesWall.UI.ActivitiesWall.postCreatedEventName = "PostCreated";
ActivitiesWall.UI.ActivitiesWall.commentCreatedEventName = "CommentCreated";
ActivitiesWall.UI.ActivitiesWall.postDeletedEventName = "PostDeleted";
ActivitiesWall.UI.ActivitiesWall.commentDeletedEventName = "CommentDeleted";
ActivitiesWall.UI.ActivitiesWall.filtersRefreshedEventName = "FiltersRefreshed";
ActivitiesWall.UI.ActivitiesWall.errorEventName = "Error"