Type.registerNamespace("Mscrm.FormInputControl");
Mscrm.FormInputControl.EmailBodyInputBehavior = function(element) {
	this.$$d_$y_4 = Function.createDelegate(this, this.$y_4);
	this.$$d_$w_4 = Function.createDelegate(this, this.$w_4);
	this.$$d_updateMessageBody = Function.createDelegate(this,
			this.updateMessageBody);
	this.$$d_$v_4 = Function.createDelegate(this, this.$v_4);
	this.$$d_$x_4 = Function.createDelegate(this, this.$x_4);
	this.$$d_$t_4 = Function.createDelegate(this, this.$t_4);
	this.$$d_$u_4 = Function.createDelegate(this, this.$u_4);
	this.$$d_$z_4 = Function.createDelegate(this, this.$z_4);
	this.$$d_$b_4 = Function.createDelegate(this, this.$b_4);
	this.$$d_setUrl = Function.createDelegate(this, this.setUrl);
	Mscrm.FormInputControl.EmailBodyInputBehavior.initializeBase(this,
			[ element ])
};
Mscrm.FormInputControl.EmailBodyInputBehavior.prototype = {
	initialize : function() {
		Mscrm.FormControlInputBehavior.prototype.initialize.call(this);
		this.$R_4 = 0;
		this.$B_4 = $get(this.$e_4("HtmlBar"), this.get_element());
		this.$2_4 = $get(this.$e_4("IFrame"), this.get_element());
		this.$0_4 = this.$2_4.contentWindow;
		this.$R_4 = this.$2_4.tabIndex;
		if (this.$2_4.parentNode.getAttribute("disabled")) {
			this.$2_4.tabIndex = -1;
			this.set_disabled(true)
		}
		if (this.$W_4() && this.$2_4.src.indexOf("/_static/blank.htm") > -1)
			this.setUrl();
		else
			$addHandler(this.$2_4, "load", this.$$d_setUrl)
	},
	dispose : function() {
		this.$3_4 = null;
		this.$2_4 = null;
		this.$B_4 = null;
		Mscrm.CrmUIBehavior.prototype.dispose.call(this)
	},
	get_isDataSlugSupported : function() {
		return true
	},
	$P_4 : false,
	$A_4 : false,
	$a_4 : true,
	$3_4 : null,
	$8_4 : null,
	$L_4 : false,
	$C_4 : false,
	$K_4 : false,
	get_willSubmit : function() {
		return this.$a_4
	},
	set_willSubmit : function(value) {
		this.$a_4 = value;
		return value
	},
	get_disabled : function() {
		return this.$K_4
	},
	set_disabled : function(value) {
		if (this.$K_4 !== value) {
			this.$0_4.document.body.setAttribute("contentEditable",
					value ? false : true);
			this.$B_4.style.display = value ? "none" : "inline";
			this.$2_4.tabIndex = value ? -1 : this.$R_4
		}
		this.$K_4 = value;
		return value
	},
	get_isDirty : function() {
		if (this.$5_4) {
			this.updateMessageBody();
			return this.$9_4 !== this.$1_4
		}
		return false
	},
	get_dataXml : function() {
		return this.$d_4(true)
	},
	get_dataValue : function() {
		return this.$q_4()
	},
	set_dataValue : function(value) {
		this.$12_4(value);
		return value
	},
	get_slugSupport : function() {
		return this.$P_4
	},
	set_slugSupport : function(value) {
		this.$13_4(value);
		return value
	},
	get_dataXmlUnEncoded : function() {
		return this.$d_4(false)
	},
	get_dataChangeHandler : function() {
		return this.$8_4
	},
	set_dataChangeHandler : function(value) {
		this.$8_4 = value;
		return value
	},
	$B_4 : null,
	$2_4 : null,
	get_frame : function() {
		return this.$2_4
	},
	set_frame : function(value) {
		this.$2_4 = value;
		return value
	},
	$0_4 : null,
	$1_4 : null,
	$9_4 : null,
	$R_4 : 0,
	$5_4 : false,
	get_initialized : function() {
		return this.$5_4
	},
	set_initialized : function(value) {
		this.$5_4 = value;
		return value
	},
	$4_4 : null,
	get_$D_4 : function() {
		return String.format("<P>{0}&nbsp;</P>", this.$4_4)
	},
	$7_4 : null,
	add_change : function(value) {
		this.get_events().addHandler("selectionchange", value)
	},
	remove_change : function(value) {
		this.get_events().removeHandler("selectionchange", value)
	},
	add_focus : function(value) {
		this.get_events().addHandler("focus", value)
	},
	remove_focus : function(value) {
		this.get_events().removeHandler("focus", value)
	},
	add_contentReady : function(value) {
		this.get_events().addHandler("ContentReadyEvent", value)
	},
	remove_contentReady : function(value) {
		this.get_events().removeHandler("ContentReadyEvent", value)
	},
	$d_4 : function($p0) {
		this.updateMessageBody();
		var $v_0 = this.get_element().id, $v_1 = this.$1_4
				|| Mscrm.Utilities.emptyString;
		if (this.get_slugSupport())
			if (IsNull(this.$1_4) || this.$1_4 === this.$4_4
					|| this.$1_4 === this.get_$D_4())
				$v_1 = Mscrm.Utilities.emptyString;
		if (!Mscrm.Utilities.get_isLeftToRight())
			$v_1 = String.format("<div style='direction:rtl;'>{0}</div>", $v_1);
		if ($p0)
			$v_1 = CrmEncodeDecode.CrmXmlEncode($v_1);
		return String.format("<{0}>{1}</{0}>", $v_0, $v_1)
	},
	$12_4 : function($p0) {
		if (!this.get_disabled() && $p0 !== this.$1_4) {
			if (IsNull($p0)) {
				this.$0_4.document.body.innerHTML = Mscrm.Utilities.emptyString;
				this.$1_4 = Mscrm.Utilities.emptyString
			} else {
				this.$0_4.document.body.innerHTML = $p0;
				$p0 = CrmEncodeDecode.CrmHtmlEncode($p0);
				this.$1_4 = $p0
			}
			!IsNull(this.$8_4) && this.$8_4()
		}
	},
	$q_4 : function() {
		this.updateMessageBody();
		if (this.get_slugSupport())
			if (IsNull(this.$1_4) || this.$1_4 === this.$4_4
					|| this.$1_4 === this.get_$D_4())
				return null;
		return this.$1_4
	},
	$b_4 : function() {
		this.fireControlEvent("focus", Sys.EventArgs.Empty)
	},
	$m_4 : function() {
		this.fireControlEvent("ContentReadyEvent", Sys.EventArgs.Empty)
	},
	$y_4 : function($p0) {
		if (this.get_disabled()) {
			$p0.stopPropagation();
			$p0.preventDefault();
			return
		}
		var $v_0 = this.$c_4($p0);
		if (IsNull($v_0))
			$v_0 = $p0.target;
		var $v_1 = this.$U_4();
		if (!IsNull($v_1)) {
			var $v_2 = $v_1.anchorOffset, $v_3 = $v_0.tagName.toUpperCase();
			if ("HTML" !== $v_3 && "DIV" !== $v_3) {
				var $v_4 = $v_0;
				while (!IsNull($v_4) && "P" !== $v_4.tagName.toUpperCase()) {
					$v_4 = $v_4.parentNode;
					if (XUI.Html.DomUtils.NodeType.Document === $v_4.nodeType)
						return
				}
				if (!IsNull($v_4)) {
					var $v_5 = this.$0_4.document.createElement("DIV");
					$v_5.innerHTML = $v_4.innerHTML;
					$v_5.setAttribute("style", $v_4.getAttribute("style"));
					$v_5.style.display = "inline";
					$v_0.parentNode.insertBefore($v_5, $v_4);
					var $v_6 = $v_1.getRangeAt(0).commonAncestorContainer;
					if (!IsNull($v_6)) {
						var $v_7 = XUI.Html.DomUtils
								.GetFirstChild($v_6.parentNode), $v_8 = XUI.Html.DomUtils
								.GetFirstChild($v_5);
						while ($v_7 !== $v_6) {
							$v_7 = XUI.Html.DomUtils.GetNextSibling($v_7);
							$v_8 = XUI.Html.DomUtils.GetNextSibling($v_8)
						}
						if (XUI.Html.DomUtils.NodeType.TextNode !== $v_8.nodeType)
							$v_8 = this.$E_4($v_8);
						this.$6_4($v_8, false, $v_2)
					}
					$v_4.parentNode.removeChild($v_4)
				} else {
					var $v_9 = this.$0_4.document.createElement("DIV"), $v_A = this.$0_4.document
							.createTextNode("");
					$v_9.style.display = "inline";
					var $v_B = this.$s_4($v_0, $v_2);
					if (!IsNull($v_B)) {
						var $v_C = XUI.Html.GetText($v_B), $v_D = $v_0
								.getAttribute("style"), $v_E = this.$0_4.document
								.createElement($v_3);
						$v_E.setAttribute("style", $v_D);
						var $v_F = this.$0_4.document.createTextNode($v_C
								.substring(0, $v_2));
						$v_E.appendChild($v_F);
						XUI.Html.SetText($v_B, $v_C
								.substring($v_2, $v_C.length));
						$v_0.parentNode.insertBefore($v_9, $v_0);
						$v_0.parentNode.insertBefore($v_E, $v_9)
					} else
						$v_0.appendChild($v_9);
					$v_9.appendChild($v_A);
					this.$6_4($v_A, true, 0)
				}
				this.$0_4.document.execCommand("paste", false, null);
				$p0.stopPropagation();
				$p0.preventDefault()
			} else {
				var $v_G = window.clipboardData.getData("Text").length, $$t_I = this;
				window.setTimeout(function() {
					$$t_I.$6_4($$t_I.$T_4($v_0), false, $v_2 + $v_G)
				}, 0)
			}
		}
	},
	$p_4 : function($p0, $p1, $p2) {
		if (XUI.Html.DomUtils.NodeType.TextNode === $p0.nodeType)
			$p0 = $p0.parentNode;
		if ("P" === $p0.tagName.toUpperCase()
				&& "MS-CRM-DATASLUG" !== $p0.className.toUpperCase()) {
			var $v_0 = this.$U_4();
			if (!IsNull($v_0) && $v_0.isCollapsed) {
				var $v_1 = $v_0.anchorOffset;
				if (46 === $p1 || 127 === $p1)
					return this.$o_4($p2, $p0, $v_1);
				else if (8 === $p1)
					return this.$n_4($p2, $p0, $v_1)
			}
		}
		return false
	},
	$o_4 : function($p0, $p1, $p2) {
		var $v_0 = XUI.Html.GetText($p1).length;
		if ($p2 >= $v_0) {
			var $v_1 = this.$S_4($p1);
			if (!IsNull($v_1)) {
				$p1.removeChild($v_1);
				$p0.stopPropagation();
				$p0.preventDefault();
				return true
			}
			var $v_2 = XUI.Html.DomUtils.GetNextSibling($p1);
			if (!IsNull($v_2) && "SPAN" === $v_2.tagName.toUpperCase()) {
				var $v_3 = XUI.Html.DomUtils.GetFirstChild($v_2);
				if (!IsNull($v_3)) {
					if (isNullOrEmptyString(XUI.Html.GetText($v_3))) {
						$v_1 = this.$S_4($v_3);
						if (!IsNull($v_1))
							$v_3.removeChild($v_1);
						else
							$v_2.removeChild($v_3)
					} else {
						$v_3.innerHTML = $p1.innerHTML + $v_3.innerHTML;
						$p1.parentNode.removeChild($p1);
						this.$6_4(this.$E_4($v_3), false, $v_0)
					}
					$p0.stopPropagation();
					$p0.preventDefault();
					return true
				}
			}
		}
		return false
	},
	$n_4 : function($p0, $p1, $p2) {
		if (0 === $p2) {
			var $v_0 = XUI.Html.DomUtils.GetPrevSibling($p1);
			if (!IsNull($v_0)) {
				if ("SPAN" === $v_0.tagName.toUpperCase()) {
					var $v_1 = XUI.Html.DomUtils.GetLastChild($v_0);
					if (!IsNull($v_1)) {
						var $v_2 = XUI.Html.DomUtils.GetLastChild($v_1);
						if (!IsNull($v_2)
								&& "BR" === $v_2.tagName.toUpperCase())
							$v_1.removeChild($v_2);
						else {
							$v_1.innerHTML += $p1.innerHTML;
							this.$6_4(this.$T_4($v_1), true, XUI.Html
									.GetText($p1).length);
							$p1.parentNode.removeChild($p1)
						}
						$p0.stopPropagation();
						$p0.preventDefault();
						return true
					}
				}
			} else if (isNullOrEmptyString(XUI.Html.GetText($p1))) {
				$v_0 = XUI.Html.DomUtils.GetPrevSibling($p1.parentNode);
				if (!IsNull($v_0) && "P" === $v_0.tagName.toUpperCase()) {
					if (isNullOrEmptyString(XUI.Html.GetText($v_0))) {
						var $v_3 = this.$S_4($v_0);
						if (!IsNull($v_3))
							$v_0.removeChild($v_3);
						else
							$v_0.parentNode.removeChild($v_0)
					} else {
						$p1.innerHTML = $v_0.innerHTML + $p1.innerHTML;
						this.$6_4(this.$E_4($p1), false,
								XUI.Html.GetText($v_0).length);
						$v_0.parentNode.removeChild($v_0)
					}
					$p0.stopPropagation();
					$p0.preventDefault();
					return true
				}
			}
		}
		return false
	},
	$w_4 : function($p0) {
		if (this.get_disabled()) {
			$p0.stopPropagation();
			$p0.preventDefault();
			return
		}
		var $v_0 = this.$c_4($p0);
		if (IsNull($v_0))
			$v_0 = $p0.target;
		var $v_1 = Mscrm.Utilities.getDomEventKeyCode($p0);
		if (Mscrm.Utilities.get_ieBrowserVersion() >= 9
				&& (46 === $v_1 || 127 === $v_1 || 8 === $v_1)
				&& this.$p_4($v_0, $v_1, $p0))
			return;
		if (this.get_slugSupport()) {
			this.$L_4 = this.isClearOperator();
			var $v_2 = false;
			switch ($v_1) {
			case 46:
			case 127:
			case 8:
				if ($v_0.className === "ms-crm-DataSlug") {
					var $v_4 = $v_0;
					$v_0 = $v_4.parentNode;
					$v_0.removeChild($v_4);
					if (this.$L_4) {
						this.$0_4.document.body.innerHTML = this.$4_4;
						this.$j_4()
					}
				}
				$v_2 = true;
				break;
			case 9:
			case 38:
			case 40:
				return;
			case 37:
				this.$X_4($v_0, true);
				this.$F_4($v_0);
				return;
			case 39:
				this.$X_4($v_0, false);
				this.$F_4($v_0);
				return;
			default:
				this.$X_4($v_0, false);
				break
			}
			if ($v_0.className === "ms-crm-DataSlug"
					&& !Mscrm.Utilities.isFirefox() || this.$C_4 && !$v_2) {
				$p0.stopPropagation();
				$p0.preventDefault()
			}
			var $v_3 = $p0;
			if (this.$k_4($v_3)) {
				var $v_5 = new Mscrm.FormInputControl.BubbleArgs;
				$v_5.$M_1 = $v_3.keyCode;
				$v_5.$O_1 = $v_3.shiftKey;
				$v_5.$J_1 = $v_3.ctrlKey;
				$v_5.$H_1 = $v_3.altKey;
				$v_5.$Q_1 = this.get_element();
				$v_5.$N_1 = $v_3.rawEvent.returnValue;
				$v_5.$I_1 = false;
				this.fireControlEvent("keydown", $v_5)
			}
		}
	},
	$k_4 : function($p0) {
		switch ($p0.keyCode) {
		case 27:
			return true;
		case 123:
			if ($p0.shiftKey)
				return true;
			break;
		case 83:
			if ($p0.ctrlKey || $p0.altKey)
				return true;
			break
		}
		return false
	},
	$x_4 : function($p0) {
		if ($p0.keyCode === 46 || $p0.keyCode === 127)
			if (this.$L_4 && !this.isClearOperator()) {
				this.$0_4.document.body.innerHTML = this.$4_4;
				this.$j_4()
			}
	},
	$j_4 : function() {
		this.$C_4 = false;
		this.$b_4()
	},
	$h_4 : function($p0) {
		return $p0.indexOf('<slug type="dynamic" value="null"/>') > 0
	},
	$z_4 : function($p0) {
		$p0.stopPropagation()
	},
	$u_4 : function($p0) {
		var $v_0 = $p0.target;
		this.$F_4($v_0)
	},
	$t_4 : function($p0) {
		this.$F_4($p0.target)
	},
	$13_4 : function($p0) {
		this.$P_4 = $p0;
		var $v_0 = this.$0_4.document.body;
		if (this.$P_4 && !this.get_disabled()) {
			if (!this.$A_4) {
				$addHandler($v_0, "focus", this.$$d_$b_4);
				$addHandler($v_0, "selectstart", this.$$d_$z_4);
				$addHandler($v_0, "controlselect", this.$$d_$u_4);
				$addHandler($v_0, "click", this.$$d_$t_4);
				Mscrm.Utilities.get_ieBrowserVersion() < 9
						&& $addHandler($v_0, "keydown", this.$$d_$t_4);
				$addHandler($v_0, "keyup", this.$$d_$x_4);
				this.$A_4 = true
			}
		} else if (this.$A_4) {
			$removeHandler($v_0, "focus", this.$$d_$b_4);
			$removeHandler($v_0, "selectstart", this.$$d_$z_4);
			$removeHandler($v_0, "controlselect", this.$$d_$u_4);
			$removeHandler($v_0, "click", this.$$d_$t_4);
			Mscrm.Utilities.get_ieBrowserVersion() < 9
					&& $removeHandler($v_0, "keydown", this.$$d_$t_4);
			$removeHandler($v_0, "keyup", this.$$d_$x_4);
			this.$A_4 = false
		}
	},
	$11_4 : function($p0, $p1) {
		this.$0_4.document.body.innerHTML = this.$4_4;
		XUI.Html.DispatchDomEvent(this.$0_4.document.body, XUI.Html
				.CreateDomEvent("click"));
		this.$V_4($p0, $p1, true)
	},
	$10_4 : function() {
		if (!IsNull(this.$0_4.getSelection)) {
			var $v_0 = this.$0_4.getSelection();
			if (!IsNull($v_0.getRangeAt)) {
				var $v_1 = this.$0_4.document.createElement("span");
				$v_0.getRangeAt(0).insertNode($v_1);
				return $v_1
			}
		} else if (!IsNull(this.$0_4.document.selection)) {
			var $v_2 = "df"
					+ Mscrm.DateTimeUtility.localDateTimeNow().getTime();
			this.$0_4.document.selection.createRange().pasteHTML(
					'<span id="' + CrmEncodeDecode.CrmHtmlAttributeEncode($v_2)
							+ '" />');
			var $v_3 = this.$0_4.document.getElementById($v_2);
			$v_3.removeAttribute("id");
			return $v_3
		}
		return null
	},
	$V_4 : function($p0, $p1, $p2) {
		this.$0_4.document.body.focus();
		if (isNullOrEmptyString(this.$0_4.document.body.innerHTML))
			this.$0_4.document.body.innerHTML = this.$4_4;
		var $v_0 = false, $v_1 = null;
		if (!IsNull(this.$3_4)) {
			$v_1 = this.$3_4;
			$v_0 = true
		} else
			$v_1 = this.$10_4();
		if (IsNull($v_1))
			return;
		$v_1.parentNode.insertBefore(this.$0_4.document.createTextNode(" "),
				$v_1);
		$v_1.parentNode.insertBefore(this.$0_4.document.createTextNode(" "),
				XUI.Html.DomUtils.GetNextSibling($v_1));
		$v_1.className = "ms-crm-DataSlug";
		this.get_element().setAttribute("contentEditable", true);
		$v_1.tabIndex = -1;
		$v_1.setAttribute("contentEditable", true);
		$v_1.setAttribute("value", $p0);
		XUI.Html.SetText($v_1, IsNull($p1) ? "" : $p1);
		$v_1.title = $p1;
		$v_1.style.display = "inline";
		if (!$v_0) {
			var $$t_6 = this;
			$addHandler($v_1, "beforeeditfocus", function($p1_0) {
				$p1_0.stopPropagation();
				$p1_0.preventDefault()
			})
		}
		Mscrm.Utilities.click($v_1);
		this.$C_4 = $p2
	},
	$c_4 : function($p0) {
		var $v_0 = null;
		if (Mscrm.Utilities.get_ieBrowserVersion() > 0
				&& Mscrm.Utilities.get_ieBrowserVersion() < 9)
			if (this.$0_4.document.selection.type.toUpperCase() != "CONTROL")
				$v_0 = this.$0_4.document.selection.createRange()
						.parentElement();
			else
				$v_0 = this.$0_4.document.selection.createRange()
						.commonParentElement();
		else if (!IsNull(this.$0_4.getSelection()))
			try {
				$v_0 = this.$0_4.getSelection().getRangeAt(0).commonAncestorContainer;
				if ($v_0.parentNode.className !== "ms-crm-DataSlug"
						&& !IsNull($p0))
					$v_0 = this.$r_4($v_0, $p0);
				else if ($v_0.nodeType !== 1)
					$v_0 = $v_0.parentNode
			} catch ($$e_2) {
				$v_0 = null
			}
		return $v_0
	},
	$r_4 : function($p0, $p1) {
		var $v_0 = $p0.previousSibling, $v_1 = $p0.nextSibling, $v_2 = this.$0_4
				.getSelection().getRangeAt(0).startOffset, $v_3 = this.$0_4
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
	$U_4 : function() {
		if (Mscrm.Utilities.get_ieBrowserVersion() > 0
				&& Mscrm.Utilities.get_ieBrowserVersion() < 9)
			return this.$0_4.document.selection.createRange();
		else if (!IsNull(this.$0_4.getSelection()))
			return this.$0_4.getSelection();
		return null
	},
	$6_4 : function($p0, $p1, $p2) {
		var $v_0 = this.$U_4();
		if (!IsNull($v_0) && !IsNull($v_0.collapse))
			if (!IsNull($p0)
					&& $p0.nodeType === XUI.Html.DomUtils.NodeType.TextNode) {
				!IsNull($p0.parentNode) && $p0.parentNode.focus();
				var $v_1 = $p1 ? $p0.nodeValue.length - $p2 : $p2;
				if ($v_1 < 0)
					$v_1 = 0;
				else if ($v_1 > $p0.nodeValue.length)
					$v_1 = $p0.nodeValue.length;
				$v_0.collapse($p0, $v_1)
			}
	},
	$X_4 : function($p0, $p1) {
		if (this.$C_4)
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
			this.$6_4($v_2, $p1, 0)
		}
	},
	$F_4 : function($p0) {
		if (!IsNull($p0) && $p0.className === "ms-crm-DataSlug"
				&& !this.get_disabled())
			this.$3_4 = $p0;
		else
			this.$3_4 = null
	},
	$s_4 : function($p0, $p1) {
		return this.$f_4($p0, $p1)[0]
	},
	$f_4 : function($p0, $p1) {
		var $v_0 = [ null, $p1 ], $v_1 = XUI.Html.DomUtils.GetFirstChild($p0);
		while (!IsNull($v_1)) {
			if (XUI.Html.DomUtils.NodeType.TextNode === $v_1.nodeType) {
				$p1 -= XUI.Html.GetText($v_1).length;
				if (0 >= $p1) {
					$v_0[0] = $v_1;
					$v_0[1] = $p1;
					break
				}
			} else {
				var $v_2 = this.$f_4($v_1, $v_0[1]);
				if (!IsNull($v_2[0]))
					return $v_2;
				$p1 = $v_2[1]
			}
			$v_1 = XUI.Html.DomUtils.GetNextSibling($v_1)
		}
		return $v_0
	},
	$E_4 : function($p0) {
		var $v_0 = XUI.Html.DomUtils.GetFirstChild($p0);
		while (!IsNull($v_0)) {
			if (XUI.Html.DomUtils.NodeType.TextNode === $v_0.nodeType)
				return $v_0;
			var $v_1 = this.$E_4($v_0);
			if (!IsNull($v_1))
				return $v_1;
			$v_0 = XUI.Html.DomUtils.GetNextSibling($v_0)
		}
		return null
	},
	$T_4 : function($p0) {
		var $v_0 = XUI.Html.DomUtils.GetLastChild($p0);
		while (!IsNull($v_0)) {
			if (XUI.Html.DomUtils.NodeType.TextNode === $v_0.nodeType)
				return $v_0;
			var $v_1 = this.$T_4($v_0);
			if (!IsNull($v_1))
				return $v_1;
			$v_0 = XUI.Html.DomUtils.GetPrevSibling($v_0)
		}
		return null
	},
	$S_4 : function($p0) {
		var $v_0 = XUI.Html.DomUtils.GetFirstChild($p0);
		while (!IsNull($v_0)) {
			if (!IsNull($v_0.tagName) && "BR" === $v_0.tagName.toUpperCase())
				return $v_0;
			$v_0 = XUI.Html.DomUtils.GetNextSibling($v_0)
		}
		return null
	},
	setUrl : function() {
		if (this.$W_4() && this.$2_4.src.indexOf("/_static/blank.htm") > -1)
			if (this.$i_4())
				this.$g_4();
			else {
				$addHandler(this.$2_4, "load", this.$$d_$v_4);
				this.$2_4.src = this.$2_4.getAttribute("url").toString();
				$removeHandler(this.$2_4, "load", this.$$d_setUrl)
			}
		else
			$addHandler(this.$2_4, "load", this.$$d_setUrl)
	},
	updateMessageBody : function() {
		if (this.get_disabled() || !this.$5_4)
			return;
		this.$l_4();
		var $v_0 = this.$0_4.document.body.innerHTML;
		if (this.$1_4 !== $v_0) {
			this.$1_4 = $v_0;
			this.fireOnChange()
		}
	},
	fireOnChange : function() {
		var $v_0 = new Mscrm.FormInputControl.MessageBodyChangedArgs(
				Mscrm.DateTimeUtility.localDateTimeNow(), this.$1_4);
		this.fireControlEvent("selectionchange", $v_0)
	},
	InsertValue : function(htmlToInsert) {
		if (!this.$5_4) {
			this.$7_4 = htmlToInsert;
			return null
		}
		this.$0_4.document.body.focus();
		var $v_0 = "df" + Mscrm.DateTimeUtility.localDateTimeNow().getTime(), $v_1;
		if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
			this.$0_4.document.execCommand("insertParagraph", false, $v_0);
			$v_1 = this.$0_4.document.getElementById($v_0)
		} else {
			var $v_3 = this.$0_4.document, $v_4 = this.$0_4.getSelection(), $v_5 = $v_4
					.getRangeAt(0);
			$v_5.deleteContents();
			$v_1 = $v_3.createElement("p");
			$v_1.id = $v_0;
			$v_5.insertNode($v_1);
			$v_5.collapse(true)
		}
		if (IsNull($v_1)) {
			this.$7_4 = htmlToInsert;
			return null
		}
		var $v_2 = this.$0_4.document.createElement("SPAN");
		$v_2.innerHTML = htmlToInsert;
		$v_1.parentNode.replaceChild($v_2, $v_1);
		this.$1_4 = this.$0_4.document.body.innerHTML;
		return Mscrm.Utilities.emptyString
	},
	loadMessageContent : function(textToInsert) {
		if (this.$5_4) {
			var $v_0 = this.$0_4.document.createElement("SPAN");
			$v_0.innerHTML = textToInsert;
			this.$0_4.document.body.innerHTML = XUI.Html.GetOuterHTML($v_0);
			this.$1_4 = this.$0_4.document.body.innerHTML
		} else {
			this.$7_4 = textToInsert;
			return
		}
		this.$9_4 = this.$1_4
	},
	setFocus : function() {
		!this.get_disabled() && this.$0_4.document.body.focus()
	},
	updateDataField : function(value, text, disabled) {
		if (this.$h_4(value)) {
			this.$11_4(value, text);
			return
		}
		if (!IsNull(this.$3_4))
			if (isNullOrEmptyString(XUI.Html.GetText(this.$3_4))) {
				try {
					this.$0_4.document.body.removeChild(this.$3_4)
				} catch ($$e_3) {
				}
				this.$3_4 = null;
				this.$V_4(value, text, disabled)
			} else {
				this.$3_4.setAttribute("value", value);
				XUI.Html.SetText(this.$3_4, IsNull(text) ? "" : text);
				this.$3_4.title = text
			}
		else
			this.$V_4(value, text, disabled)
	},
	getHTML : function() {
		return this.$0_4.document.body.innerHTML
	},
	hasDataSlug : function() {
		for ( var $v_0 = this.$0_4.document.getElementsByTagName("SPAN"), $v_1 = $v_0.length, $v_2 = 0; $v_2 < $v_1; $v_2++) {
			var $v_3 = $v_0[$v_2];
			if ($v_3.className === "ms-crm-DataSlug")
				return true
		}
		return false
	},
	isClearOperator : function() {
		return this.$h_4(this.getHTML())
	},
	useTemplate : function(shouldUseTemplate) {
		this.$0_4.document.body.setAttribute("contentEditable",
				shouldUseTemplate ? "False" : "True");
		var $$t_5 = this, $v_0 = function($p1_0) {
			$p1_0
					.setAttribute("unselectable", shouldUseTemplate ? "off"
							: "on");
			$p1_0.disabled = shouldUseTemplate;
			var $v_1 = $p1_0.getAttribute("href"), $v_2 = $p1_0
					.getAttribute("addHref");
			if (shouldUseTemplate) {
				if (!isNullOrEmptyString($v_1)
						&& $v_1 === "javascript:onclick();") {
					$p1_0.removeAttribute("href");
					$p1_0.setAttribute("addHref", "javascript:onclick();")
				}
			} else if (!isNullOrEmptyString($v_2)
					&& $v_2 === "javascript:onclick();") {
				$p1_0.setAttribute("href", $v_2);
				$p1_0.removeAttribute("addHref")
			}
			return false
		};
		XUI.Html.DomUtils.ForEachChild(this.$B_4, $v_0)
	},
	$v_4 : function($p0) {
		if (this.$W_4() && this.$2_4.src.indexOf("/_static/blank.htm") === -1) {
			this.$g_4();
			$removeHandler(this.$2_4, "load", this.$$d_$v_4)
		}
	},
	$g_4 : function() {
		this.$1_4 = this.$0_4.document.body.innerHTML;
		if (!Mscrm.Utilities.get_isLeftToRight())
			this.$0_4.document.body.style.direction = window.LOCID_UI_DIR
					.toLowerCase();
		this.$9_4 = this.$1_4;
		var $v_0 = window._appFormErrorOnPage;
		if (!IsNull($v_0)
				&& typeof $v_0 !== Mscrm.TypeNames.undefinedType
				&& $v_0
				|| !IsNull(this.get_element().getAttribute("IsDefaultDirty"))
				&& Boolean.parse(this.get_element().getAttribute(
						"IsDefaultDirty"))) {
			var $v_2 = $get("savedEmailBodyUserInput", this.get_element());
			if (!IsNull($v_2)) {
				this.$0_4.document.body.innerHTML = $v_2.value;
				this.$1_4 = $v_2.value
			}
		}
		if (!this.get_disabled()) {
			this.$0_4.document.body.setAttribute("contentEditable", true);
			if (!Mscrm.Utilities.isIE())
				this.$0_4.document.body.style.wordWrap = "break-word"
		}
		var $v_1 = this.$0_4.document.body;
		$addHandler($v_1, "blur", this.$$d_updateMessageBody);
		this.$4_4 = this.$0_4.document.body.innerHTML;
		if (this.get_slugSupport()) {
			$addHandler($v_1, "focus", this.$$d_$b_4);
			$addHandler($v_1, "selectstart", this.$$d_$z_4);
			$addHandler($v_1, "controlselect", this.$$d_$u_4);
			$addHandler($v_1, "click", this.$$d_$t_4);
			$addHandler($v_1, "keydown", this.$$d_$w_4);
			$addHandler($v_1, "keyup", this.$$d_$x_4);
			this.$9_4 = this.$4_4
		}
		if (Mscrm.Utilities.get_ieBrowserVersion() >= 9) {
			!this.get_slugSupport()
					&& $addHandler($v_1, "keydown", this.$$d_$w_4);
			$addHandler($v_1, "paste", this.$$d_$y_4)
		}
		this.$14_4();
		this.$5_4 = true;
		!IsNull(this.$7_4) && this.loadMessageContent(this.$7_4);
		this.$m_4()
	},
	$14_4 : function() {
		if (!this.$i_4()) {
			var $v_0 = this.$0_4.document.getElementsByTagName("head")[0], $v_1 = this.$0_4.document
					.createElement("link");
			$v_1.setAttribute("rel", "stylesheet");
			$v_1.setAttribute("href", "/_forms/controls/controls.css.aspx");
			$v_0.appendChild($v_1)
		}
	},
	$i_4 : function() {
		var $v_0 = window.msgBodyIsFor;
		return !IsNull($v_0) && $v_0 === "webResourceEditor"
	},
	$l_4 : function() {
		for ( var $v_0 = this.$0_4.document.getElementsByTagName("SPAN"), $v_1 = $v_0.length - 1; $v_1 >= 0; $v_1--) {
			var $v_2 = $v_0[$v_1];
			(isNullOrEmptyString($v_2.innerHTML)
					|| $v_2.innerHTML === this.$4_4 || $v_2.innerHTML === this
					.get_$D_4())
					&& Mscrm.Utilities.destroyElement($v_2)
		}
		if (this.$0_4.document.body.innerHTML === this.get_$D_4())
			this.$0_4.document.body.innerHTML = this.$4_4
	},
	$W_4 : function() {
		var $v_0;
		try {
			var $v_1 = this.$2_4;
			$v_0 = $v_1.contentWindow.document.readyState
		} catch ($$e_2) {
			return false
		}
		return $v_0.toLowerCase() === "complete"
	},
	$e_4 : function($p0) {
		return this.get_element().id + $p0
	}
};
Mscrm.FormInputControl.MessageBodyChangedArgs = function($p0, $p1) {
	Mscrm.FormInputControl.MessageBodyChangedArgs.initializeBase(this);
	this.$Y_1 = $p0;
	this.$Z_1 = $p1
};
Mscrm.FormInputControl.MessageBodyChangedArgs.prototype = {
	$Y_1 : null,
	$Z_1 : null,
	get_dateChanged : function() {
		return this.$Y_1
	},
	get_value : function() {
		return this.$Z_1
	}
};
Mscrm.FormInputControl.BubbleArgs = function() {
	Mscrm.FormInputControl.BubbleArgs.initializeBase(this)
};
Mscrm.FormInputControl.BubbleArgs.prototype = {
	$M_1 : 0,
	get_keyCode : function() {
		return this.$M_1
	},
	set_keyCode : function($p0) {
		this.$M_1 = $p0;
		return $p0
	},
	$O_1 : false,
	get_shiftKey : function() {
		return this.$O_1
	},
	set_shiftKey : function($p0) {
		this.$O_1 = $p0;
		return $p0
	},
	$J_1 : false,
	get_ctrlKey : function() {
		return this.$J_1
	},
	set_ctrlKey : function($p0) {
		this.$J_1 = $p0;
		return $p0
	},
	$H_1 : false,
	get_altKey : function() {
		return this.$H_1
	},
	set_altKey : function($p0) {
		this.$H_1 = $p0;
		return $p0
	},
	$Q_1 : null,
	get_srcElement : function() {
		return this.$Q_1
	},
	set_srcElement : function($p0) {
		this.$Q_1 = $p0;
		return $p0
	},
	$N_1 : false,
	get_returnValue : function() {
		return this.$N_1
	},
	set_returnValue : function($p0) {
		this.$N_1 = $p0;
		return $p0
	},
	$I_1 : false,
	get_cancelBubble : function() {
		return this.$I_1
	},
	set_cancelBubble : function($p0) {
		this.$I_1 = $p0;
		return $p0
	}
};
Mscrm.FormInputControl.EmailBodyInputBehavior.registerClass(
		"Mscrm.FormInputControl.EmailBodyInputBehavior",
		Mscrm.FormControlInputBehavior);
Mscrm.FormInputControl.MessageBodyChangedArgs.registerClass(
		"Mscrm.FormInputControl.MessageBodyChangedArgs", Sys.EventArgs);
Mscrm.FormInputControl.BubbleArgs.registerClass(
		"Mscrm.FormInputControl.BubbleArgs", Sys.EventArgs)