Type.registerNamespace("Mscrm.FormInputControl.NotesV2");
Mscrm.FormInputControl.NotesV2.WallType = function() {
};
Mscrm.FormInputControl.NotesV2.WallType.prototype = {
	personalWall : 0,
	recordWall : 1
};
Mscrm.FormInputControl.NotesV2.WallType.registerEnum(
		"Mscrm.FormInputControl.NotesV2.WallType", false);
function loadContent(uri, dataType, successCallback, errorCallback) {
	var $v_0 = {};
	$v_0.type = "GET";
	$v_0.url = uri;
	$v_0.dataType = dataType;
	$v_0.success = function($p1_0, $p1_1, $p1_2) {
		successCallback($p1_0)
	};
	if (errorCallback)
		$v_0.error = errorCallback;
	else
		$v_0.error = function($p1_0, $p1_1, $p1_2) {
			throw Error.create("Unable to load requested file:" + uri)
		};
	$.ajax($v_0)
}
function formatDate(dateToFormat, formattedDate) {
	return formattedDate
}
Mscrm.FormInputControl.NotesV2.NotesControl = function(element) {
	Mscrm.FormInputControl.NotesV2.NotesControl.initializeBase(this,
			[ element ])
};
Mscrm.FormInputControl.NotesV2.NotesControl.$U = function() {
	var $v_0 = window.self._notesV2Strings;
	Mscrm.FormInputControl.NotesV2.NotesControl.localizedStrings = $
			.parseJSON($v_0)
};
Mscrm.FormInputControl.NotesV2.NotesControl.prototype = {
	$9_3 : null,
	$5_3 : null,
	$2_3 : null,
	$O_3 : null,
	$1_3 : null,
	$H_3 : null,
	$D_3 : null,
	$C_3 : false,
	get_masterComponentId : function() {
		return this.$D_3
	},
	set_masterComponentId : function(value) {
		this.$D_3 = value;
		return value
	},
	get_isControlReadOnly : function() {
		return this.$C_3
	},
	set_isControlReadOnly : function(value) {
		this.$C_3 = value;
		return value
	},
	handleEvent : function(eventCode, parameters, sourceComponent) {
		Mscrm.CrmUIControl.prototype.handleEvent.call(this, eventCode,
				parameters, sourceComponent);
		switch (eventCode) {
		case Mscrm.ScriptEvents.RefreshNotesWall:
			if (this.$D_3 === sourceComponent.get_id()) {
				!IsNull(parameters[Mscrm.FormInputControl.Tabs.RefreshTabEventParameters.entityId])
						&& this.$9_3
								.set_entityId(parameters[Mscrm.FormInputControl.Tabs.RefreshTabEventParameters.entityId]);
				this.$2_3.refreshAll()
			}
			break
		}
		return null
	},
	initialize : function() {
		Mscrm.CrmUIControl.prototype.initialize.call(this);
		!IsNull(this.get_eventManager())
				&& this.get_eventManager().subscribeEvent(
						Mscrm.ScriptEvents.RefreshNotesWall, this.get_id());
		Mscrm.FormInputControl.NotesV2.NotesControl.$U();
		var $$t_3 = this;
		loadContent("/_controls/notes/notesv2template.aspx", "html", function(
				$p1_0) {
			$$t_3.get_element().innerHTML = $p1_0;
			$$t_3.$5_3 = $($$t_3.get_element());
			$$t_3.$1_3 = $$t_3.$5_3.find("#createNoteAttachFileIframe");
			if (!$$t_3.$C_3) {
				var $v_0 = null;
				$v_0 = function($p2_0) {
					$$t_3.$I_3();
					$$t_3.$1_3.unbind("load", $v_0)
				};
				$$t_3.$1_3.load($v_0)
			} else {
				$$t_3.$H_3 = $$t_3.$5_3.find(".header");
				$$t_3.$H_3.hide();
				$$t_3.$I_3()
			}
		})
	},
	dispatchNoteCommand : function(commandName, parameters) {
		this.$O_3.dispatchNoteCommand(commandName, parameters)
	},
	$I_3 : function() {
		this.$5_3.height(600);
		this.get_element().parentNode.style.height = "auto";
		var $v_0 = new Wall.Service.ObjectModel.EntityReference, $v_1 = Xrm.Page.data.entity;
		$v_0.set_logicalName($v_1.getEntityName());
		$v_0.set_id($v_1.getId());
		this.get_element().className = "notesWall";
		var $v_2 = $("#notesTextBox");
		$v_2.attr("title", "Type your note here");
		$v_2.attr("aria-label", "Type your note here");
		$v_2.textAreaAutoResize();
		this.$9_3 = new Mscrm.FormInputControl.NotesV2.NotesWallService(
				Xrm.Page.context, $v_0, this.$1_3);
		this.$2_3 = new Mscrm.FormInputControl.NotesV2.NotesWall(this.$5_3,
				this.$9_3, "header", "postTemplate", "commentTemplate",
				"notesWallContainer", "notesTextBox", "progressTemplate",
				"firstRunContent", "showMoreLinkTemplate");
		this.$2_3.set_pageSize(20);
		this.$O_3 = new Mscrm.FormInputControl.NotesV2.NotesWallCommandDispatcher(
				this.get_element().id, this.$2_3, this.$9_3);
		var $v_3 = $get("createdPostIdHiddenField"), $$t_F = this;
		this.$2_3.add_postCreated(function($p1_0, $p1_1) {
			$v_3.value = $p1_1.get_post().get_postId() + ":post"
		});
		var $$t_G = this, $v_4 = function($p1_0) {
			$p1_0.target !== $v_2[0] && $$t_G.$M_3()
		}, $$t_H = this, $v_5 = function($p1_0) {
			Wall.Control.Utils.jQueryEventHelper.onlyTabKeyIsPressed($p1_0)
					&& $$t_H.$M_3()
		};
		$v_2.keydown($v_5);
		var $v_6 = this.$5_3.find("#notesTextBoxActionsDiv"), $$t_I = this;
		$v_2.focus(function($p1_0) {
			$v_6.show("fast");
			$(document).click($v_4)
		});
		var $$t_J = this;
		$v_2.blur(function($p1_0) {
			window.setTimeout(function() {
				var $v_7 = getActiveElement();
				if (!IsNull($v_7)
						&& $($v_7).parents().index(
								$v_2.get(0).parentNode.parentNode) > 0)
					return;
				$v_6.hide("fast");
				$(document).unbind("click", $v_4)
			}, 500)
		});
		var $$t_K = this;
		window.setTimeout(function() {
			$v_2.focus()
		}, 100);
		var $$t_L = this;
		Wall.Control.Utils.WindowUtils.add_onWindowUnload(function($p1_0) {
			$v_2.unbind("keydown", $v_5);
			$(document).unbind("click", $v_4)
		})
	},
	$M_3 : function() {
		var $v_0 = $("#notesTextBox").val(), $v_1 = !_String
				.isNullOrEmpty(this.$1_3.contents().find("#userFile").val());
		(!_String.isNullOrEmpty($v_0) && !_String.isNullOrEmpty($v_0.trim()) || $v_1)
				&& this.$2_3.postMessage($v_0)
	}
};
function dispatchNoteCommand($p0, $p1, $p2) {
	var $v_0 = $($p0).parents(".notesWall").first().parents("*").first(), $v_1 = $find($v_0
			.get(0).id);
	$v_1.dispatchNoteCommand($p1, $p2)
}
Mscrm.FormInputControl.NotesV2.NotesWall = function(rootContainer, wallService,
		headerId, postTemplateId, commentTemplateId, wallContainerId,
		postTextBoxId, progressTemplateId, emptyTemplateId,
		showMoreLinkTemplateId) {
	this.$$d_$L_1 = Function.createDelegate(this, this.$L_1);
	this.$4_1 = {};
	Mscrm.FormInputControl.NotesV2.NotesWall.initializeBase(this, [
			rootContainer, wallService, headerId, postTemplateId,
			commentTemplateId, wallContainerId, postTextBoxId,
			progressTemplateId, emptyTemplateId, showMoreLinkTemplateId ]);
	this.$N_1 = $("#deletePostTemplate");
	this.$J_1 = wallService;
	var $$t_I = this;
	this
			.add_postsRefreshing(function($p1_0, $p1_1) {
				setPerfMarkerTimestamp(Mscrm.RefreshFormMarker.StartNotesWallRefreshLoadTime)
			});
	var $$t_J = this;
	this
			.add_postsRefreshed(function($p1_0, $p1_1) {
				setPerfMarkerTimestamp(Mscrm.RefreshFormMarker.FinishNotesWallRefreshLoadTime)
			});
	var $$t_K = this;
	this.add_postCreating(function($p1_0, $p1_1) {
		setPerfMarkerTimestamp(Mscrm.RefreshFormMarker.StartPostNoteTime)
	});
	var $$t_L = this;
	this.add_postCreated(function($p1_0, $p1_1) {
		setPerfMarkerTimestamp(Mscrm.RefreshFormMarker.FinishPostNoteTime)
	})
};
Mscrm.FormInputControl.NotesV2.NotesWall.$E = function($p0) {
	$p0.css("opacity", "1");
	Wall.Control.Utils.Browser.getCurrentBrowser().get_isIE8OrLower()
			&& $p0.css("filter", "")
};
Mscrm.FormInputControl.NotesV2.NotesWall.prototype = {
	$J_1 : null,
	$N_1 : null,
	deletePost : function(postId) {
		var $v_0 = this.wallContainerjQuery.find(String.format(
				Wall.UI.Wall.postjQueryTemplate, postId)), $v_1 = this
				.findDisplayedPostById(postId), $v_2 = {};
		$v_2["height"] = "10px";
		$v_2["opacity"] = "0";
		var $$t_6 = this;
		$v_0.animate($v_2, "fast", "linear", function() {
			$v_0.hide();
			var $v_3 = $$t_6.$N_1.tmpl($v_1, $$t_6).insertBefore($v_0).show();
			$v_3.find("a:last").focus();
			$$t_6.$4_1[postId] = $v_1;
			$$t_6.$L_1($v_3, postId, true);
			var $v_4 = $$t_6.$$d_$L_1;
			$(window).data("undeletePostMessageAnimationCallback_" + postId,
					$v_4);
			$(window)
					.data("undeletePostMessageAnimationObject_" + postId, $v_3)
		})
	},
	undoDeleteNote : function(postId) {
		if (postId in this.$4_1)
			delete this.$4_1[postId];
		this.wallContainerjQuery.find(
				String.format("#undeletePost_{0}", postId)).stop(true).remove();
		var $v_0 = this.wallContainerjQuery.find(String.format(
				Wall.UI.Wall.postjQueryTemplate, postId));
		Mscrm.FormInputControl.NotesV2.NotesWall.$E($v_0);
		$v_0.css("height", "auto").slideDown("fast");
		$v_0.addClass("focus");
		$v_0.find(String.format("#deleteaction_{0}", postId)).focus()
	},
	$S_1 : function($p0) {
		if ($p0 in this.$4_1) {
			setPerfMarkerTimestamp(Mscrm.RefreshFormMarker.StartDeleteNoteTime);
			var $$t_2 = this;
			this.$J_1
					.deletePost(
							this.$4_1[$p0],
							function($p1_0) {
								if ($p1_0.get_isSucceeded()) {
									$$t_2
											.fireEvent(
													Wall.Interfaces.EventArguments.PostDeletedEventArgs,
													Wall.UI.Wall.postDeletedEventName,
													new Wall.Interfaces.EventArguments.PostDeletedEventArgs(
															$p0));
									setPerfMarkerTimestamp(Mscrm.RefreshFormMarker.FinishDeleteNoteTime)
								} else
									$$t_2.processError($p1_0)
							});
			delete this.$4_1[$p0]
		}
	},
	$L_1 : function($p0, $p1, $p2) {
		Mscrm.FormInputControl.NotesV2.NotesWall.$E($p0);
		$p0.stop(true);
		if ($p2) {
			var $v_0 = {};
			$v_0["opacity"] = "0.2";
			var $$t_4 = this;
			$p0.show(1).delay(4e3).animate($v_0, 3e3, "linear", function() {
				$p0.remove();
				$p0.hasClass("deleteNoteDiv") && $$t_4.$S_1($p1)
			})
		}
	}
};
Mscrm.FormInputControl.NotesV2.NotesWallService = function(clientGlobalContext,
		wallEntityReference, createNoteAttachFileIframeJQuery) {
	this.$6_0 = wallEntityReference;
	var $$t_3 = this;
	this.$8_0 = new Mscrm.FormInputControl.NotesV2.NotesWallServiceFactory(
			clientGlobalContext, null, function() {
				return $$t_3.get_$T_0()
			});
	this.$1_0 = createNoteAttachFileIframeJQuery;
	this.$8_0.$3_0
			.set_name(this.get_$7_0().find("#currentUserNameSpan").text());
	Wall.Control.Utils.OutlookUtils.registerOutlookVariables()
};
Mscrm.FormInputControl.NotesV2.NotesWallService.prototype = {
	$8_0 : null,
	$6_0 : null,
	$1_0 : null,
	get_$7_0 : function() {
		return $(this.$1_0.get(0).contentWindow.document.body)
	},
	get_$Q_0 : function() {
		return this.get_$7_0().find("#crmFormSubmitXml")
	},
	get_$A_0 : function() {
		return this.get_$7_0().find("#errorInfoDiv")
	},
	get_$Y_0 : function() {
		return this.get_$7_0().find("#userFile")
	},
	get_$T_0 : function() {
		var $v_0 = this.get_$Y_0().val();
		if (_String.isNullOrEmpty($v_0))
			return _String.empty;
		if ($v_0.indexOf("\\") < 0)
			return $v_0;
		return $v_0.substr($v_0.lastIndexOf("\\") + 1)
	},
	get_entityId : function() {
		return this.$6_0.get_id()
	},
	set_entityId : function(value) {
		this.$6_0.set_id(value);
		return value
	},
	getWallServiceFactory : function() {
		return this.$8_0
	},
	retrievePosts : function(retrievePostsRequest, retrievePostsCallback) {
		var $v_0 = Wall.Control.Utils.RemoteCommandFactory.createRemoteCommand(
				"Annotation", "RetrieveNotesCollection", null);
		$v_0.SetParameter("parentEntityId", this.$6_0.get_id());
		$v_0.SetParameter("pageNumber", 0);
		var $v_1 = new Wall.Service.Messages.RetrievePostsBaseResponse, $$t_C = this;
		$v_0
				.Execute(function($p1_0, $p1_1) {
					$v_1.set_posts(new Array(0));
					if (!IsNull($p1_0) && !IsNull($p1_0.ReturnValue)
							&& $p1_0.Success) {
						var $v_2 = $p1_0.ReturnValue, $v_3 = $v_2.AnnotationUI;
						if (!IsNull($v_3))
							if (typeof $v_3.length === "undefined") {
								var $v_4 = $v_2.AnnotationUI, $v_5 = $v_4;
								$v_1.get_posts()[0] = Mscrm.FormInputControl.NotesV2.Convertors.NoteConverter
										.serviceToWall($v_5)
							} else
								$v_3.length > 0
										&& $v_1
												.set_posts(Mscrm.FormInputControl.NotesV2.Convertors.NoteConverter
														.serviceToWallCollection($v_3))
					} else
						$v_1.set_errorMessage($$t_C.$G_0());
					_Array.each(Wall.Interfaces.IPost, $v_1.get_posts(),
							function($p2_0, $p2_1) {
								$p2_1.set_text($$t_C
										.formatPostTextForRendering($p2_1
												.get_text()))
							});
					retrievePostsCallback($v_1)
				})
	},
	postMessage : function(post, createPostCallback) {
		var $v_0 = post.get_text(), $v_1 = this.$8_0.$3_0.get_id(), $v_2 = this.$6_0
				.get_id(), $v_3 = this.$6_0.get_logicalName(), $v_4 = String
				.format(
						"<annotation><isdocument>0</isdocument><notetext>{0}</notetext><objectid>{1}</objectid><objecttypecode>{2}</objecttypecode><subject></subject><ownerid type='8'>{3}</ownerid></annotation>",
						CrmEncodeDecode.CrmXmlEncode($v_0), CrmEncodeDecode
								.CrmXmlEncode($v_2), CrmEncodeDecode
								.CrmXmlEncode($v_3), CrmEncodeDecode
								.CrmXmlEncode($v_1));
		this.get_$Q_0().val($v_4);
		var $v_5 = null, $v_6 = this.$1_0.get(0).contentWindow, $$t_F = this;
		$v_5 = function($p1_0) {
			var $v_9 = parseQueryString($v_6.location), $v_A = new Wall.Service.Messages.CreatePostResponse, $v_B = $v_9["id"];
			!_String.isNullOrEmpty($v_B)
					&& $v_A
							.set_postId(Sales.Common.CrmSoapServiceProxy.Utils.Utils
									.parseGuid($v_B));
			if ($$t_F.get_$A_0().length > 0
					&& !_String.isNullOrEmpty($$t_F.get_$A_0().html())) {
				$v_A.set_errorMessage($$t_F.get_$A_0().html());
				$v_A.set_revertPost(true)
			}
			createPostCallback($v_A);
			$$t_F.$1_0.unbind("load", $v_5)
		};
		this.$1_0.load($v_5);
		var $v_7 = $v_6.attachForNotesV2();
		if (!_String.isNullOrEmpty($v_7)) {
			var $v_8 = new Wall.Service.Messages.CreatePostResponse;
			$v_8.set_errorMessage($v_7);
			createPostCallback($v_8);
			this.$1_0.unbind("load", $v_5)
		}
	},
	deletePost : function(post, deletePostCallback) {
		var $v_0 = Wall.Control.Utils.RemoteCommandFactory.createRemoteCommand(
				"Annotation", "DeleteAnnotation", null);
		$v_0.SetParameter("id", post.get_postId());
		var $$t_6 = this;
		$v_0.Execute(function($p1_0, $p1_1) {
			var $v_1 = new Wall.Service.Messages.DeletePostResponse;
			(IsNull($p1_0) || IsNull($p1_0.ReturnValue) || !$p1_0.Success)
					&& $v_1.set_errorMessage($$t_6.$G_0());
			deletePostCallback($v_1)
		})
	},
	$G_0 : function() {
		var $v_0 = Mscrm.FormInputControl.NotesV2.NotesControl.localizedStrings.genericErrorMessage;
		return $v_0
	},
	formatPostTextForRendering : function(postText) {
		return Sales.Common.CrmSoapServiceProxy.Utils.EncodingUtils
				.multilineHtmlEncode(postText, true)
	},
	formatCommentTextForRendering : function(commentText) {
		throw Error.notImplemented()
	},
	retrieveComments : function(retrieveCommentsRequest,
			retrieveCommentsCallback) {
		throw Error.notImplemented()
	},
	postComment : function(comment, createCommentCallback) {
		throw Error.notImplemented()
	},
	deleteComment : function(comment, deleteCommentCallback) {
		throw Error.notImplemented()
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
	}
};
Mscrm.FormInputControl.NotesV2.NotesWallServiceFactory = function(
		clientContext, regardingEntity, getFileNameCallback) {
	this.$3_0 = new Wall.Service.ObjectModel.EntityReference;
	this.$3_0.set_id(clientContext.getUserId());
	this.$3_0
			.set_logicalName(Sales.Common.CrmSoapServiceProxy.ObjectModel.SystemUser.entityLogicalName);
	this.$3_0
			.set_name(Mscrm.FormInputControl.NotesV2.NotesControl.localizedStrings.you);
	this.$B_0 = getFileNameCallback;
	this.$K_0 = regardingEntity
};
Mscrm.FormInputControl.NotesV2.NotesWallServiceFactory.prototype = {
	$3_0 : null,
	$K_0 : null,
	$B_0 : null,
	get_currentUser : function() {
		return this.$3_0
	},
	set_currentUser : function(value) {
		this.$3_0 = value;
		return value
	},
	createPost : function() {
		var $v_0 = new Mscrm.FormInputControl.NotesV2.ObjectModel.NotePost;
		$v_0.set_createdBy(this.$3_0);
		$v_0
				.set_formattedCreatedOn(Mscrm.FormInputControl.NotesV2.NotesControl.localizedStrings.justNow);
		$v_0.set_deleteEnabled(true);
		$v_0.set_regardingId(this.$K_0);
		if (!IsNull(this.$B_0))
			$v_0.fileName = this.$B_0();
		return $v_0
	},
	createComment : function() {
		var $v_0 = new Wall.Service.ObjectModel.Comment;
		$v_0.set_createdBy(this.$3_0);
		$v_0
				.set_formattedCreatedOn(Mscrm.FormInputControl.NotesV2.NotesControl.localizedStrings.justNow);
		$v_0.set_deleteEnabled(true);
		return $v_0
	},
	createEntityReference : function() {
		return new Wall.Service.ObjectModel.EntityReference
	},
	createRetrievePostsRequest : function() {
		return new Wall.Service.Messages.RetrieveCommentsRequest
	},
	createRetrieveCommentsRequest : function() {
		return new Wall.Service.Messages.RetrieveCommentsRequest
	},
	createRetrieveLikesRequest : function() {
		throw Error.create("NotImplementedException")
	}
};
Mscrm.FormInputControl.NotesV2.WallCommands = function() {
};
Mscrm.FormInputControl.NotesV2.NotesWallCommandDispatcher = function(
		wallElementId, wall, wallService) {
	this.$2_0 = wall
};
Mscrm.FormInputControl.NotesV2.NotesWallCommandDispatcher.prototype = {
	$2_0 : null,
	dispatchNoteCommand : function(commandName, parameters) {
		var $v_0 = parameters;
		if (_String.isNullOrEmpty(commandName))
			throw Error.create("commandName is undefined");
		commandName = commandName.toLowerCase();
		switch (commandName) {
		case "post":
			var $v_1 = parameters, $v_2 = $($v_1), $v_3 = $v_2.val();
			this.$V_0($v_3, $v_1);
			break;
		case "refreshall":
			this.$W_0();
			break;
		case "delete":
			this.$R_0($v_0);
			break;
		case "undodeletepost":
			this.$X_0($v_0);
			break;
		default:
			throw Error.create("invalid commandName")
		}
	},
	$W_0 : function() {
		this.$P_0();
		this.$2_0.refreshAll()
	},
	$R_0 : function($p0) {
		this.$2_0.deletePost($p0)
	},
	$X_0 : function($p0) {
		this.$2_0.undoDeleteNote($p0)
	},
	$V_0 : function($p0, $p1) {
		!_String.isNullOrEmpty($p0) && !_String.isNullOrEmpty($p0.trim())
				&& this.$2_0.postMessage($p0)
	},
	$P_0 : function() {
	}
};
Type.registerNamespace("Mscrm.FormInputControl.NotesV2.Convertors");
Mscrm.FormInputControl.NotesV2.Convertors.NoteConverter = function() {
};
Mscrm.FormInputControl.NotesV2.Convertors.NoteConverter.serviceToWall = function(
		annotationUI) {
	var $v_0 = new Mscrm.FormInputControl.NotesV2.ObjectModel.NotePost;
	$v_0.set_postId(annotationUI.NoteId);
	$v_0.set_text(annotationUI.Text);
	$v_0.set_createdOn(new Date(annotationUI.CreatedOn.toString()));
	$v_0.set_createdBy(Mscrm.FormInputControl.NotesV2.Convertors.NoteConverter
			.$F(annotationUI.CreatedBy));
	$v_0.modifiedOn = new Date(annotationUI.ModifiedOn.toString());
	$v_0.modifiedBy = Mscrm.FormInputControl.NotesV2.Convertors.NoteConverter
			.$F(annotationUI.ModifiedBy);
	$v_0.fileName = annotationUI.FileName;
	$v_0.fileSize = annotationUI.FileSize;
	$v_0.set_formattedCreatedOn(annotationUI.CreatedOn.toString());
	return $v_0
};
Mscrm.FormInputControl.NotesV2.Convertors.NoteConverter.serviceToWallCollection = function(
		annotationUIs) {
	for ( var $v_0 = new Array(0), $v_1 = 0; $v_1 < annotationUIs.length; $v_1++)
		$v_0[$v_1] = Mscrm.FormInputControl.NotesV2.Convertors.NoteConverter
				.serviceToWall(annotationUIs[$v_1]);
	return $v_0
};
Mscrm.FormInputControl.NotesV2.Convertors.NoteConverter.$F = function($p0) {
	if (IsNull($p0))
		return null;
	var $v_0 = new Wall.Service.ObjectModel.EntityReference;
	$v_0.set_id($p0.Id);
	$v_0.set_logicalName($p0.TypeName);
	$v_0.set_name($p0.Name);
	return $v_0
};
Type.registerNamespace("Mscrm.FormInputControl.NotesV2.ObjectModel");
Mscrm.FormInputControl.NotesV2.ObjectModel.NotePost = function() {
	Mscrm.FormInputControl.NotesV2.ObjectModel.NotePost.initializeBase(this)
};
Mscrm.FormInputControl.NotesV2.ObjectModel.NotePost.prototype = {
	modifiedOn : null,
	modifiedBy : null,
	fileName : null,
	fileSize : 0,
	get_modifiedOn : function() {
		return this.modifiedOn
	},
	set_modifiedOn : function(value) {
		this.modifiedOn = value;
		return value
	},
	get_modifiedBy : function() {
		return this.modifiedBy
	},
	set_modifiedBy : function(value) {
		this.modifiedBy = value;
		return value
	},
	get_fileName : function() {
		return this.fileName
	},
	set_fileName : function(value) {
		this.fileName = value;
		return value
	},
	get_fileSize : function() {
		return this.fileSize
	},
	set_fileSize : function(value) {
		this.fileSize = value;
		return value
	}
};
Mscrm.FormInputControl.NotesV2.NotesControl.registerClass(
		"Mscrm.FormInputControl.NotesV2.NotesControl", Mscrm.CrmUIControl);
Mscrm.FormInputControl.NotesV2.NotesWall.registerClass(
		"Mscrm.FormInputControl.NotesV2.NotesWall", Wall.UI.Wall);
Mscrm.FormInputControl.NotesV2.NotesWallService.registerClass(
		"Mscrm.FormInputControl.NotesV2.NotesWallService", null,
		Wall.Interfaces.IWallService);
Mscrm.FormInputControl.NotesV2.NotesWallServiceFactory.registerClass(
		"Mscrm.FormInputControl.NotesV2.NotesWallServiceFactory", null,
		Wall.Interfaces.IWallServiceFactory);
Mscrm.FormInputControl.NotesV2.WallCommands
		.registerClass("Mscrm.FormInputControl.NotesV2.WallCommands");
Mscrm.FormInputControl.NotesV2.NotesWallCommandDispatcher
		.registerClass("Mscrm.FormInputControl.NotesV2.NotesWallCommandDispatcher");
Mscrm.FormInputControl.NotesV2.Convertors.NoteConverter
		.registerClass("Mscrm.FormInputControl.NotesV2.Convertors.NoteConverter");
Mscrm.FormInputControl.NotesV2.ObjectModel.NotePost.registerClass(
		"Mscrm.FormInputControl.NotesV2.ObjectModel.NotePost",
		Wall.Service.ObjectModel.Post);
Mscrm.FormInputControl.NotesV2.NotesControl.localizedStrings = null;
Mscrm.FormInputControl.NotesV2.NotesWall.notesWallJQuerySelector = ".notesWall";
Mscrm.FormInputControl.NotesV2.WallCommands.postCommandName = "post";
Mscrm.FormInputControl.NotesV2.WallCommands.refreshAllCommandName = "refreshall";
Mscrm.FormInputControl.NotesV2.WallCommands.deleteCommandName = "delete";
Mscrm.FormInputControl.NotesV2.WallCommands.undoDeleteNoteCommandName = "undodeletepost"