Type.registerNamespace("Mscrm");
Mscrm.LayoutManager = function () {
    this.$$d_$S_2 = Function.createDelegate(this, this.$S_2);
    Mscrm.LayoutManager.initializeBase(this)
};
Mscrm.LayoutManager.prototype = {
    $B_2: 0,
    $G_2: 0,
    $2_2: null,
    $7_2: null,
    $C_2: null,
    $5_2: null,
    $6_2: null,
    $P_2: false,
    appNavWidth: 0,
    $H_2: null,
    get_ribbonManager: function () {
        return this.$H_2
    },
    set_ribbonManager: function (value) {
        this.$H_2 = value;
        return value
    },
    $F_2: null,
    get_appNav: function () {
        return this.$F_2
    },
    set_appNav: function (value) {
        this.$F_2 = value;
        return value
    },
    $9_2: null,
    get_appMessageBar: function () {
        return this.$9_2
    },
    set_appMessageBar: function (value) {
        this.$9_2 = value;
        return value
    },
    $1_2: null,
    get_splitterControl: function () {
        return this.$1_2
    },
    set_splitterControl: function (value) {
        this.$1_2 = value;
        return value
    },
    $L_2: null,
    get_contentPanel: function () {
        return this.$L_2
    },
    set_contentPanel: function (value) {
        this.$L_2 = value;
        return value
    },
    initialize: function () {
        Mscrm.CrmUIComponent.prototype.initialize.call(this);
        $addHandler(window, "resize", this.$$d_$S_2);
        this.$2_2 = {};
        this.$7_2 = {};
        this.$C_2 = {};
        this.$5_2 = {};
        this.$6_2 = {};
        this.$6_2["crmSplitterControl"] = this.$2_2;
        this.$6_2["crmAppNav"] = this.$7_2;
        this.$6_2["crmAppMessageBar"] = this.$C_2;
        this.$6_2["crmContentPanel"] = this.$5_2;
        this.$P_2 = IsNull(this.$F_2) || IsNull(this.$1_2)
    },
    handleEvent: function (eventCode, parameters, sourceComponent) {
        switch (eventCode) {
            case Mscrm.ScriptEvents.PageLoaded:
                var $v_0 = Mscrm.CrmUri.create(window.location.href).get_query()["pagetype"];
                if (!isNullOrEmptyString($v_0))
                    $v_0 = $v_0.toUpperCase();
                $v_0 !== "ENTITYRECORD" && this.$V_2();
                break;
            case Mscrm.ScriptEvents.RequestResize:
                this.$W_2();
                break;
            case Mscrm.ScriptEvents.GetWindowSize:
                return this.$U_2();
            default:
                break
        }
        return null
    },
    $K_2: function ($p0) {
        this.$B_2 = 0;
        if (!IsNull(this.$H_2))
            this.$B_2 = this.$H_2.get_height();
        else
            this.$B_2 = window.UseTabletExperience ? 54 : 135;
        this.$G_2 = 0;
        var $v_0 = 0,
		$v_1 = 0;
        if (!IsNull(this.$9_2) && this.$9_2.get_isVisible()) {
            this.$G_2 = this.$9_2.get_actualHeight();
            $v_0 = 2;
            $v_1 = 2
        }
        var $v_2 = document.body,
		$v_3 = $v_2.offsetHeight,
		$v_4 = $v_2.offsetWidth;
        this.$6_2["bodyHeight"] = $v_3;
        this.$6_2["bodyWidth"] = $v_4;
        var $v_5 = this.$B_2 + this.$G_2 + $v_0 + $v_1,
		$v_6 = $v_3 - $v_5;
        if ($v_6 < 0)
            $v_6 = 0;
        this.$5_2["top"] = $v_5;
        this.$5_2["height"] = $v_6;
        if (this.$P_2) {
            this.$5_2["width"] = $v_4;
            this.$5_2["left"] = "0";
            return this.$6_2
        }
        var $v_7 = 0;
        this.$2_2["defaultXPos"] = window.LOCID_UI_DIR === "RTL" ? $v_4 - this.appNavWidth - this.$1_2.get_width() : this.appNavWidth;
        this.$2_2["height"] = $v_6;
        this.$2_2["width"] = this.$1_2.get_width();
        this.$2_2["top"] = $v_5;
        this.$2_2["minLeft"] = window.LOCID_UI_DIR === "RTL" ? $v_4 / 2 - this.$1_2.get_width() : 40;
        this.$2_2["maxLeft"] = window.LOCID_UI_DIR === "RTL" ? $v_4 - 40 - this.$1_2.get_width() : $v_4 / 2;
        if (!$p0 && !window.UseTabletExperience) {
            $v_7 = Mscrm.LayoutManager.$D ? window.LOCID_UI_DIR === "RTL" ? $v_4 - this.$1_2.get_left() - this.$1_2.get_width() : this.$1_2.get_left() : this.appNavWidth;
            this.$2_2["left"] = this.$1_2.get_left()
        } else {
            $v_7 = !Mscrm.LayoutManager.$D ? this.appNavWidth : this.$F_2.get_width();
            this.$2_2["left"] = window.LOCID_UI_DIR === "RTL" ? $v_4 - $v_7 - this.$1_2.get_width() : $v_7
        }
        if ($v_7 > $v_4 / 2) {
            $v_7 = $v_4 / 2;
            this.$2_2["left"] = window.LOCID_UI_DIR === "RTL" ? $v_4 - $v_7 - this.$1_2.get_width() : $v_7
        }
        this.$7_2["top"] = $v_5;
        this.$7_2["height"] = $v_6;
        this.$7_2["width"] = $v_7;
        this.$5_2["width"] = $v_4 - $v_7 - this.$1_2.get_width();
        if ($v_7 > 0)
            if (window.LOCID_UI_DIR === "LTR") {
                this.$7_2["left"] = 0;
                this.$5_2["left"] = $v_7 + this.$1_2.get_width()
            } else {
                this.$7_2["left"] = $v_4 - $v_7;
                this.$5_2["left"] = 0
            }
        this.$C_2["top"] = this.$B_2 + $v_0;
        this.$C_2["height"] = this.$G_2;
        this.$C_2["width"] = $v_4 - 6;
        return this.$6_2
    },
    $U_2: function () {
        return this.$K_2(false)
    },
    $W_2: function () {
        var $v_0 = this.$K_2(false);
        $v_0["sizeChanged"] = false;
        this.raiseEvent(Mscrm.ScriptEvents.WindowResize, $v_0)
    },
    $V_2: function () {
        if (!Mscrm.LayoutManager.$D) {
            this.$S_2(null);
            Mscrm.LayoutManager.$D = true
        }
    },
    $S_2: function ($p0) {
        var $v_0 = this.$K_2(true);
        $v_0["sizeChanged"] = true;
        this.raiseEvent(Mscrm.ScriptEvents.WindowResize, $v_0)
    }
};
Mscrm.UserInfo = function ($p0) {
    this.$$d_$Q_3 = Function.createDelegate(this, this.$Q_3);
    this.$$d_$Z_3 = Function.createDelegate(this, this.$Z_3);
    this.$$d_$e_3 = Function.createDelegate(this, this.$e_3);
    this.$I_3 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create("/_imgs/ribbon/arrow_ribboncollapse.png"));
    this.$J_3 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create("/_imgs/ribbon/arrow_ribbonexpand.png"));
    Mscrm.UserInfo.initializeBase(this, [$p0])
};
Mscrm.UserInfo.prototype = {
    userName: null,
    organizationName: null,
    showSignoutUrl: false,
    signoutText: null,
    helpImgAlt: null,
    minimizeRibbonAlt: null,
    unminimizeRibbonAlt: null,
    $A_3: null,
    get_launchMobileExpressText: function () {
        return this.$A_3
    },
    set_launchMobileExpressText: function (value) {
        this.$A_3 = value;
        return value
    },
    $M_3: null,
    get_crmBrand: function () {
        return this.$M_3
    },
    set_crmBrand: function (value) {
        this.$M_3 = value;
        return value
    },
    $4_3: null,
    $O_3: null,
    $0_3: null,
    $8_3: null,
    $3_3: null,
    $N_3: 260,
    get_maxWidth: function () {
        return this.$N_3
    },
    set_maxWidth: function (value) {
        if (value >= 0)
            this.$N_3 = value;
        return value
    },
    get_currentRibbonManager: function () {
        return this.$8_3
    },
    set_currentRibbonManager: function (value) {
        this.$8_3 = value;
        return value
    },
    get_$E_3: function () {
        return Sys.UI.DomElement.containsCssClass(this.$4_3, "ms-crm-MastHead-Button-Selected")
    },
    set_$E_3: function ($p0) {
        if ($p0) {
            Sys.UI.DomElement.removeCssClass(this.$4_3, this.$I_3.cssClass);
            Sys.UI.DomElement.addCssClass(this.$4_3, this.$J_3.cssClass)
        } else {
            Sys.UI.DomElement.removeCssClass(this.$4_3, this.$J_3.cssClass);
            Sys.UI.DomElement.addCssClass(this.$4_3, this.$I_3.cssClass)
        }
        Sys.UI.DomElement.addCssClass(this.$4_3, !$p0 ? "ms-crm-MastHead-Button" : "ms-crm-MastHead-Button-Selected");
        Sys.UI.DomElement.removeCssClass(this.$4_3, $p0 ? "ms-crm-MastHead-Button" : "ms-crm-MastHead-Button-Selected");
        this.$4_3.alt = this.$O_3.title = $p0 ? this.unminimizeRibbonAlt : this.minimizeRibbonAlt;
        return $p0
    },
    handleEvent: function (eventCode, parameters, sourceComponent) {
        switch (eventCode) {
            case Mscrm.ScriptEvents.WindowResize:
                this.$Y_3(parameters);
                break;
            case Mscrm.ScriptEvents.RibbonRootEvent:
                var $v_0 = parameters,
			$v_1 = $v_0.Minimized;
                !IsNull($v_1) && typeof $v_1 === Mscrm.TypeNames.booleanType && this.set_$E_3($v_1);
                break;
            case Mscrm.ScriptEvents.RibbonMinimizeToggle:
                this.$Q_3(null);
                break;
            case Mscrm.ScriptEvents.RibbonTabScalingComplete:
                this.$X_3(parameters);
                break
        }
        return null
    },
    initialize: function () {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        var $v_0 = Mscrm.CrmUri.create(window.location.href).get_query()["pagetype"];
        if (!isNullOrEmptyString($v_0))
            $v_0 = $v_0.toUpperCase();
        this.get_element().style.visibility = "hidden";
        var $v_1 = document.createElement("SPAN");
        $v_1.className = "ms-crm-MastHead-UserInfo ms-crm-MastHead-SignIn-User";
        $v_1.className += $v_0 === "ENTITYRECORD" ? " ms-crm-MastHead-UserInfo-Record" : " ms-crm-MastHead-UserInfo-Other";
        $v_1.id = "lblUserName";
        XUI.Html.SetText($v_1, this.userName);
        $v_1.title = this.userName;
        var $v_2 = document.createElement("SPAN");
        $v_2.className = "ms-crm-MastHead-UserInfo ms-crm-MastHead-SignIn-Org autoellipsis";
        $v_2.className += $v_0 === "ENTITYRECORD" ? " ms-crm-MastHead-UserInfo-Record" : " ms-crm-MastHead-UserInfo-Other";
        $v_2.id = "lblOrgName";
        XUI.Html.SetText($v_2, this.organizationName);
        $v_2.title = this.organizationName;
        var $v_3 = null;
        if (!isNullOrEmptyString($v_0))
            this.showSignoutUrl = false;
        if (Mscrm.SessionInfo.isOutlookClient() && !Mscrm.SessionInfo.isOnline())
            this.showSignoutUrl = false;
        if (this.showSignoutUrl) {
            var $v_F = document.createElement("A");
            $v_F.className = $v_0 === "ENTITYRECORD" ? " ms-crm-MastHead-UserInfo-Record-SignOut" : " ms-crm-MastHead-UserInfo-SignOut";
            $v_F.className += " ms-crm-MastHead-SignOut-Link";
            XUI.Html.SetText($v_F, this.signoutText);
            $v_F.title = this.signoutText;
            $v_F.tabIndex = 0;
            $v_F.href = "#";
            $addHandler($v_F, "click", this.$$d_$e_3);
            $v_3 = document.createElement("SPAN");
            $v_3.className = "ms-crm-MastHead-UserInfo ms-crm-MastHead-SignOut";
            $v_3.className += $v_0 === "ENTITYRECORD" ? " ms-crm-MastHead-UserInfo-Record-SignOut" : " ms-crm-MastHead-UserInfo-SignOut";
            $v_3.id = "tdSignOut";
            $v_3.appendChild($v_F);
            if (window.UseTabletExperience) {
                var $v_G = Mscrm.ImageStrip.getImage(Mscrm.CrmUri.create("/_imgs/theme/Tablet/Login_DownArrow_White_7x4.png"));
                Sys.UI.DomElement.addCssClass($v_G, "ms-crm-MastHead-UserInfo-SignOut");
                $v_G.alt = $v_G.title = this.signoutText;
                $v_F.appendChild($v_G)
            }
        }
        var $v_4 = document.createElement("span"),
		$v_5 = document.createElement("a"),
		$v_6;
        if (window.LOCID_UI_DIR.toLowerCase() === "rtl" && window.USER_LANGUAGE_CODE !== Mscrm.LocaleIds.hebrew)
            if (window.UseTabletExperience)
                $v_6 = Mscrm.ImageStrip.getImage(Mscrm.CrmUri.create("/_imgs/theme/Tablet/Help_White_20x20_rtl.png"));
            else
                $v_6 = Mscrm.ImageStrip.getImage(Mscrm.CrmUri.create("/_imgs/ico/17_help_rtl.png"));
        else if (window.UseTabletExperience)
            $v_6 = Mscrm.ImageStrip.getImage(Mscrm.CrmUri.create("/_imgs/theme/Tablet/Help_White_20x20.png"));
        else
            $v_6 = Mscrm.ImageStrip.getImage(Mscrm.CrmUri.create("/_imgs/ico/17_help.png"));
        $v_4.appendChild($v_5);
        $v_5.appendChild($v_6);
        $v_6.alt = $v_5.title = this.helpImgAlt;
        $v_5.id = "helponthispage";
        $v_5.tabIndex = 0;
        $v_5.href = "#";
        $addHandler($v_5, "click", this.$$d_$Z_3);
        Sys.UI.DomElement.addCssClass($v_6, "ms-crm-MastHead-Button");
        Sys.UI.DomElement.addCssClass($v_4, "ms-crm-MastHead-Button");
        var $v_7 = window.UseTabletExperience || this.$8_3.get_hideChrome(),
		$v_8 = null;
        if (!$v_7) {
            var $v_H = document.createElement("a");
            $v_8 = document.createElement("span");
            var $v_I = Mscrm.ImageStrip.getImage(Mscrm.CrmUri.create("/_imgs/ribbon/arrow_ribboncollapse.png"));
            $v_8.appendChild($v_H);
            $v_H.appendChild($v_I);
            $v_I.alt = $v_H.title = this.minimizeRibbonAlt;
            $v_H.id = "minimizeribbon";
            $v_H.tabIndex = 0;
            $v_H.href = "#";
            $addHandler($v_H, "click", this.$$d_$Q_3);
            Sys.UI.DomElement.addCssClass($v_I, "ms-crm-MastHead-Button");
            Sys.UI.DomElement.addCssClass($v_8, "ms-crm-MastHead-Button");
            this.$4_3 = $v_I;
            this.$O_3 = $v_H;
            this.set_$E_3(IsNull(this.$8_3) || window.UseTabletExperience ? true : this.$8_3.get_isMinimized())
        }
        this.$a_3();
        var $v_9 = document.createElement("table");
        $v_9.setAttribute("cellSpacing", "0");
        var $v_A = document.createElement("tbody");
        $v_9.appendChild($v_A);
        var $v_B = document.createElement("tr");
        $v_A.appendChild($v_B);
        var $v_C = document.createElement("td");
        $v_C.appendChild($v_1);
        $v_C.appendChild($v_2);
        this.showSignoutUrl && $v_C.appendChild($v_3);
        $v_B.appendChild($v_C);
        var $v_D = document.createElement("td");
        $v_D.appendChild($v_4);
        $v_D.appendChild(document.createElement("br"));
        !$v_7 && $v_D.appendChild($v_8);
        $v_B.appendChild($v_D);
        this.get_element().appendChild($v_9);
        var $$t_J = this;
        Sys.Application.add_init(function () {
            $create(Mscrm.AutoToolTip, null, null, null, $v_2)
        });
        this.$0_3 = document.createElement("IMG");
        this.$0_3.alt = "";
        this.$0_3.style.position = "fixed";
        this.$0_3.style.display = "none";
        this.$0_3.style.top = "0px";
        var $v_E = this.get_element();
        if (window.UseTabletExperience) {
            this.$0_3.src = "/_imgs/theme/Tablet/DynamicsCRMLogo_White.png";
            this.$0_3.style.width = "268px";
            this.$0_3.style.height = "30px";
            $v_E = this.get_element().parentNode
        } else
            this.$0_3.src = "/_imgs/crmmastheadlogo.png";
        $v_E.appendChild(this.$0_3)
    },
    $R_3: function ($p0) {
        if (window.LOCID_UI_DIR.toLowerCase() === "rtl")
            this.$c_3($p0);
        else
            this.$b_3($p0)
    },
    $b_3: function ($p0) {
        var $v_0 = window.UseTabletExperience ? 268 : 140;
        if (!IsNull(this.$0_3.offsetWidth) && this.$0_3.offsetWidth > 0)
            $v_0 = this.$0_3.offsetWidth;
        var $v_1 = $v_0;
        $v_0 += 12;
        var $v_2 = 0;
        if (!IsNull($p0)) {
            var $v_4 = Mscrm.Utilities.getXYPos($p0, false);
            $v_2 = $v_4["x"] + $p0.offsetWidth
        }
        var $v_3 = document.body.offsetWidth - this.get_maxWidth();
        if ($v_3 - $v_2 < $v_0) {
            this.$0_3.style.display = "none";
            return
        }
        this.$0_3.style.display = "inline";
        if (window.UseTabletExperience) {
            this.$0_3.style.left = "8px";
            this.$0_3.style.top = "8px"
        } else {
            this.$0_3.style.width = $v_1.toString() + "px";
            var $v_5 = document.body.offsetWidth / 2 - this.get_maxWidth(),
			$v_6 = document.body.offsetWidth / 2 - $v_2;
            if ($v_6 >= $v_0 / 2 && $v_5 >= $v_0 / 2)
                this.$0_3.style.left = ((document.body.offsetWidth - $v_0) / 2).toString() + "px";
            else
                this.$0_3.style.left = (($v_3 + $v_2 - $v_0) / 2).toString() + "px"
        }
    },
    $c_3: function ($p0) {
        var $v_0 = window.UseTabletExperience ? 268 : 140;
        if (!IsNull(this.$0_3.offsetWidth) && this.$0_3.offsetWidth > 0)
            $v_0 = this.$0_3.offsetWidth;
        var $v_1 = $v_0;
        $v_0 += 12;
        var $v_2 = document.body.offsetWidth;
        if (!IsNull($p0)) {
            var $v_4 = Mscrm.Utilities.getXYPos($p0, false);
            $v_2 = $v_4["x"]
        }
        var $v_3 = this.get_maxWidth();
        if ($v_2 - $v_3 < $v_0) {
            this.$0_3.style.display = "none";
            return
        }
        this.$0_3.style.display = "inline";
        if (window.UseTabletExperience) {
            this.$0_3.style.left = document.body.offsetWidth - $v_0 + "px";
            this.$0_3.style.top = "8px"
        } else {
            this.$0_3.style.width = $v_1.toString() + "px";
            var $v_5 = document.body.offsetWidth / 2 - this.get_maxWidth(),
			$v_6 = $v_2 - document.body.offsetWidth / 2;
            if ($v_5 >= $v_0 / 2 && $v_6 >= $v_0 / 2)
                this.$0_3.style.left = ((document.body.offsetWidth - $v_0) / 2).toString() + "px";
            else
                this.$0_3.style.left = (($v_2 + $v_3 - $v_0) / 2).toString() + "px"
        }
    },
    $Y_3: function ($p0) {
        var $v_0 = this.get_element().scrollWidth,
		$v_1 = $p0["bodyWidth"];
        if (window.LOCID_UI_DIR.toLowerCase() === "rtl")
            this.set_left(0);
        else
            this.set_left($v_1 - this.get_maxWidth());
        this.get_element().style.visibility = "visible";
        var $v_2 = $get("crmTopBar");
        if (!IsNull($v_2))
            if (window.LOCID_UI_DIR.toLowerCase() === "rtl")
                $v_2.style.backgroundPosition = "0px 0px";
            else {
                var $v_3 = 429;
                $v_2.style.backgroundPosition = ($v_1 - $v_3).toString() + "px 0px"
            }
        if (window.UseTabletExperience) {
            this.$R_3(null);
            this.$d_3()
        }
    },
    $X_3: function ($p0) {
        this.$R_3($p0["lastContextualTabElement"])
    },
    $e_3: function ($p0) {
        this.raiseEvent(Mscrm.ScriptEvents.SignOut, null)
    },
    $Z_3: function ($p0) {
        if (window.UseTabletExperience)
            Mscrm.Help.loadHelp(null);
        else
            executeRibbonCommand("|NoRelationship||Mscrm.LoadHelp")
    },
    $Q_3: function ($p0) {
        this.set_$E_3(!this.get_$E_3());
        this.$8_3.set_isMinimized(this.get_$E_3())
    },
    $a_3: function () {
        if (window.UseTabletExperience) {
            var $v_0 = document.createElement("nobr"),
			$v_1 = document.createElement("span");
            XUI.Html.SetText($v_1, this.$A_3);
            var $v_2 = Mscrm.ImageStrip.getImage(Mscrm.CrmUri.create("/_imgs/theme/Tablet/Open_White_20x20.png"));
            Sys.UI.DomElement.addCssClass($v_2, "ms-crm-Masthead-go");
            $v_2.alt = $v_2.title = this.$A_3;
            !Mscrm.Utilities.get_isLeftToRight() && Mscrm.Utilities.flipElementHorizontally($v_2);
            $v_0.appendChild($v_2);
            $v_0.appendChild($v_1);
            var $v_3 = document.createElement("A");
            $v_3.className = "ms-crm-Masthead-LaunchMobileExpress";
            $v_3.title = this.$A_3;
            $v_3.tabIndex = 0;
            $v_3.href = Mscrm.MobileUtility.getMobileUrl(0, null, null, false).toString();
            $v_3.appendChild($v_0);
            var $v_4 = document.createElement("SPAN");
            $v_4.className = "ms-crm-Masthead-LaunchMobileExpress";
            $v_4.appendChild($v_3);
            this.$3_3 = document.createElement("DIV");
            this.$3_3.style.top = "20px";
            this.$3_3.style.position = "relative";
            this.$3_3.style.display = "inline";
            this.$3_3.appendChild($v_4)
        }
        !IsNull(this.$3_3) && this.get_element().parentNode.appendChild(this.$3_3)
    },
    $d_3: function () {
        if (!IsNull(this.$3_3))
            if (window.LOCID_UI_DIR.toLowerCase() === "rtl")
                this.$3_3.style.right = document.body.offsetWidth / 2 - 20 + "px";
            else
                this.$3_3.style.left = document.body.offsetWidth / 2 - 20 + "px"
        }
    };
    Mscrm.LayoutManager.registerClass("Mscrm.LayoutManager", Mscrm.CrmUIComponent);
    Mscrm.UserInfo.registerClass("Mscrm.UserInfo", Mscrm.CrmUIControl);
    Mscrm.LayoutManager.$D = false
