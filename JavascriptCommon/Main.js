Type.registerNamespace("Mscrm");
Mscrm.RecordField = function () { };
Mscrm.RecordField.prototype = {
    type: 0,
    objectId: 1,
    entityTypeCode: 2,
    entityTypeName: 3,
    entityDisplayName: 4,
    title: 5,
    action: 6,
    iconPath: 7,
    lastAccessed: 8,
    pinStatus: 9
};
Mscrm.RecordField.registerEnum("Mscrm.RecordField", false);
Mscrm.RecordType = function () { };
Mscrm.RecordType.prototype = {
    entity: 0,
    grid: 1,
    ISV: 2
};
Mscrm.RecordType.registerEnum("Mscrm.RecordType", false);
Mscrm.CacheManager = function () {
    this.$$d_$1n_2 = Function.createDelegate(this, this.$1n_2);
    this.$C_2 = {};
    Mscrm.CacheManager.initializeBase(this)
};
Mscrm.CacheManager.prototype = {
    $H_2: null,
    get_pageManager: function () {
        return this.$H_2
    },
    set_pageManager: function (value) {
        this.$H_2 = value;
        return value
    },
    $h_2: false,
    initialize: function () {
        Mscrm.CrmUIComponent.prototype.initialize.call(this);
        Mscrm.NavigationMode.DefaultNavigationMode === Mscrm.NavigationMode.NavigationModeNewWindow && executeFunctionDeferred(this.$$d_$1n_2, false, false)
    },
    $1n_2: function () {
        if (this.$h_2)
            return;
        var $v_0 = 0;
        if (IsNull(this.$H_2)) {
            this.$H_2 = Mscrm.PageManager.get_instance();
            if (IsNull(this.$H_2))
                return
        }
        if (!IsNull(this.$H_2.get_parentWindowPageManager())) {
            this.$h_2 = true;
            var $v_1 = this.$H_2.get_parentWindowPageManager().raiseEvent(Mscrm.ScriptEvents.SyncCache, null);
            $v_0 = 0;
            while (!IsNull($v_1) && $v_0 < $v_1.length) {
                var $v_2 = $v_1[$v_0],
				$$dict_3 = $v_2;
                for (var $$key_4 in $$dict_3) {
                    var $v_3 = {
                        key: $$key_4,
                        value: $$dict_3[$$key_4]
                    },
					$v_4 = $v_3.value;
                    switch ($v_4["cacheScope"]) {
                        case Mscrm.CacheScope.Global:
                            break;
                        case Mscrm.CacheScope.ChildOnly:
                            $v_4["cacheScope"] = Mscrm.CacheScope.Local;
                            break;
                        case Mscrm.CacheScope.Local:
                            continue;
                        default:
                            continue
                    }
                    this.$C_2[$v_3.key] = this.$1A_2($v_4)
                }
                ++$v_0
            }
        }
        $v_0 = 0;
        while (!IsNull(this.$G_2) && $v_0 < this.$G_2.length) {
            var $v_5 = this.$G_2[$v_0];
            $v_5();
            $v_0++
        }
    },
    $18_2: function ($p0) {
        var $v_0 = [];
        if (IsNull($p0))
            return $v_0;
        for (var $v_1 = 0; $v_1 < $p0.length; ++$v_1)
            $v_0[$v_1] = this.$19_2($p0[$v_1]);
        return $v_0
    },
    $1A_2: function ($p0) {
        var $v_0 = {};
        if (IsNull($p0))
            return $v_0;
        var $$dict_2 = $p0;
        for (var $$key_3 in $$dict_2) {
            var $v_1 = {
                key: $$key_3,
                value: $$dict_2[$$key_3]
            };
            $v_0[$v_1.key] = this.$19_2($v_1.value)
        }
        return $v_0
    },
    $19_2: function ($p0) {
        var $v_0 = null;
        if (IsNull($p0))
            return $v_0;
        switch (Object.getType($p0).getName()) {
            case "Object":
                var $v_1 = false;
                if (!IsNull($p0.splice)) {
                    var $v_2 = -1,
				$v_3 = $p0.length;
                    if (!IsNull($v_3))
                        try {
                            $v_2 = parseInt($v_3, 10);
                            $v_1 = $v_2 >= 0
                        } catch ($$e_5) { }

                }
                if ($v_1)
                    $v_0 = this.$18_2($p0);
                else
                    $v_0 = this.$1A_2($p0);
                break;
            case "Array":
                $v_0 = this.$18_2($p0);
                break;
            case "Number":
                $v_0 = $p0;
                break;
            case "String":
                $v_0 = $p0;
                break;
            case "Boolean":
                $v_0 = $p0;
                break;
            case "Date":
                $v_0 = new Date(Date.parse($p0.toString()));
                break;
            default:
                $v_0 = $p0;
                break
        }
        return $v_0
    },
    handleEvent: function (eventCode, parameters, sourceComponent) {
        switch (eventCode) {
            case Mscrm.ScriptEvents.InsertCacheData:
                return this.$14_2(parameters);
            case Mscrm.ScriptEvents.RetrieveCacheData:
                return this.$1F_2(parameters);
            case Mscrm.ScriptEvents.SyncCache:
                return this.$1z_2(parameters);
            case Mscrm.ScriptEvents.CacheInitializedCallback:
                this.$1N_2(parameters);
                break;
            default:
                break
        }
        return null
    },
    insertCacheData: function (parameters) {
        return this.$14_2(parameters)
    },
    retrieveCacheData: function (parameters) {
        return this.$1F_2(parameters)
    },
    $G_2: null,
    $1N_2: function ($p0) {
        if (this.$h_2) {
            var $v_0 = $p0["cacheInitializedCallback"];
            $v_0();
            return
        }
        if (IsNull(this.$G_2))
            this.$G_2 = [];
        this.$G_2[this.$G_2.length] = $p0["cacheInitializedCallback"]
    },
    $14_2: function ($p0) {
        var $v_0 = $p0["key"],
		$v_1 = false;
        if (!IsNull($p0["checkDuplicate"]))
            $v_1 = $p0["checkDuplicate"];
        if ($v_1 && !IsNull(this.$C_2[$v_0]))
            throw Error.argumentOutOfRange("key", "null or duplicate key passed");
        if (IsNull($v_0))
            $v_0 = this.$1Q_2();
        var $v_2 = {};
        $v_2["data"] = $p0["data"];
        if (!IsNull($p0["purgeDataOnCacheSync"]))
            $v_2["purgeDataOnCacheSync"] = $p0["purgeDataOnCacheSync"];
        this.$C_2[$v_0] = $v_2;
        var $v_3 = Mscrm.CacheManager.DefaultCacheScope;
        if (!IsNull($p0["cacheScope"]))
            $v_3 = $p0["cacheScope"];
        $v_2["cacheScope"] = $v_3;
        return $v_0
    },
    $1F_2: function ($p0) {
        var $v_0 = null,
		$v_1 = $p0["key"],
		$v_2 = this.$C_2[$v_1];
        if (!IsNull($v_2))
            $v_0 = $v_2["data"];
        return $v_0
    },
    $1Q_2: function () {
        var $v_0;
        while (true) {
            $v_0 = Math.ceil(Math.random() * 1e9).toString();
            if (IsNull(this.$C_2[$v_0]))
                break
        }
        return $v_0
    },
    $1z_2: function ($p0) {
        var $v_0 = {},
		$$dict_2 = this.$C_2;
        for (var $$key_3 in $$dict_2) {
            var $v_1 = {
                key: $$key_3,
                value: $$dict_2[$$key_3]
            },
			$v_2 = $v_1.value,
			$v_3 = $v_2["cacheScope"];
            if ($v_3 === Mscrm.CacheScope.Global || $v_3 === Mscrm.CacheScope.ChildOnly) {
                $v_0[$v_1.key] = $v_1.value;
                if (!IsNull($v_2["purgeDataOnCacheSync"]) && $v_2["purgeDataOnCacheSync"])
                    delete this.$C_2[$v_1.key]
            }
        }
        return $v_0
    }
};
Mscrm.ContentPanel = function (element) {
    this.$$d_$1H_3 = Function.createDelegate(this, this.$1H_3);
    Mscrm.ContentPanel.initializeBase(this, [element]);
    this.$Y_3 = this.$$d_$1H_3
};
Mscrm.ContentPanel.prototype = {
    $B_3: null,
    $0_3: null,
    $4_3: null,
    $7_3: null,
    $Y_3: null,
    $X_3: false,
    $Q_3: "currentContentId",
    $e_3: "contentDiv",
    $P_3: "contentIFrame",
    $u_3: "domReadyDiv",
    $V_3: null,
    dispose: function () {
        this.$4_3 = null;
        this.$0_3 = null;
        this.$V_3 = null;
        this.$7_3 = null;
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    get_contentUrl: function () {
        return Mscrm.CrmUri.create(this.$B_3)
    },
    set_contentUrl: function (value) {
        if (typeof value === Mscrm.TypeNames.stringType)
            this.$B_3 = value.toString();
        else
            this.$B_3 = value.toString();
        this.get_isInitialized() && this.$n_3(Mscrm.CrmUri.create(this.$B_3), this.title);
        return value
    },
    title: null,
    defaultTitle: null,
    contentAreaText: null,
    get_contentWindow: function () {
        if (this.$0_3)
            return this.$0_3.contentWindow;
        return window.self
    },
    initialize: function () {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.$0_3 = $get("contentIFrame");
        this.$V_3 = $get("contentPanelAnchor");
        this.get_element().setAttribute("src", this.$B_3);
        if (IsNull(this.$0_3))
            this.$n_3(Mscrm.CrmUri.create(this.$B_3), this.title);
        else
            this.$X_3 = true
    },
    handleEvent: function (eventCode, parameters, sourceComponent) {
        Mscrm.CrmUIControl.prototype.handleEvent.call(this, eventCode, parameters, sourceComponent);
        switch (eventCode) {
            case Mscrm.ScriptEvents.Navigate:
                var $v_0 = Mscrm.CrmUri.create(parameters["uri"]),
			$$t_6 = this;
                window.setTimeout(function () {
                    $$t_6.$n_3($v_0, parameters["appNavTitle"])
                }, 0);
                return true;
            case Mscrm.ScriptEvents.WindowResize:
                this.$1t_3(parameters);
                break;
            case Mscrm.ScriptEvents.GetContentUrl:
                return this.$1R_3();
            case Mscrm.ScriptEvents.BeforePageLoaded:
                var $v_1 = Mscrm.CrmUri.create(parameters["uri"]),
			$v_2 = Mscrm.CrmUri.create(this.get_rootManager().get_contentUrl());
                !$v_1.equals($v_2, true) && this.$20_3();
                break;
            case Mscrm.ScriptEvents.ContentPanelSetFocusOnDivContentPanel:
                if (!IsNull(this.$V_3))
                    this.$V_3.focus();
                else
                    this.get_element().focus();
                break
        }
        return null
    },
    $1R_3: function () {
        var $v_0 = Mscrm.CrmUri.create(this.get_element().getAttribute("src")),
		$v_1 = $v_0.get_query()["pagemode"];
        if (!IsNull($v_1) && $v_0.get_query()["pagemode"].toString().toLowerCase() === "iframe")
            delete $v_0.get_query().pagemode;
        return $v_0.toString()
    },
    $20_3: function () {
        var $v_0 = this.get_element().getAttribute(this.$Q_3);
        if (!isNullOrEmptyString($v_0) && $v_0 === this.$e_3)
            this.$21_3();
        else
            this.$1H_3(null)
    },
    $21_3: function () {
        this.$c_3();
        this.$4_3.style.visibility = "visible";
        this.$1I_3();
        this.$1M_3()
    },
    $1H_3: function ($p0) {
        if (!this.$X_3) {
            $removeHandler(this.$0_3, "load", this.$Y_3);
            this.$X_3 = true;
            this.$c_3();
            this.$r_3();
            var $v_0 = this.$0_3.contentWindow._ISFLATUIPAGE;
            if (!$v_0) {
                setPageTitle(!isNullOrEmptyString(this.title) ? this.title : this.defaultTitle);
                var $v_1 = {};
                $v_1["uri"] = this.get_contentUrl().toString();
                this.raiseEvent(Mscrm.ScriptEvents.PageLoaded, $v_1)
            }
            if (this.get_contentUrl().get_pageType() !== "entitylist") {
                var $v_2 = this.$0_3.contentWindow;
                $v_2 && $v_2.focus()
            }
            this.$1I_3()
        }
    },
    $1I_3: function () {
        var $v_0 = window.status;
        window.status = null;
        window.status = $v_0
    },
    $1G_3: function () {
        if (IsNull(this.$7_3)) {
            this.$7_3 = document.createElement("DIV");
            this.get_element().appendChild(this.$7_3);
            this.$7_3.style.width = "100%";
            this.$7_3.style.height = "100%";
            this.$7_3.style.position = "absolute";
            this.$7_3.innerHTML = "<table style='height:100%;width:100%;background-color:FFFFFF'><tr><td style='vertical-align: middle' align='center'><IMG id='loading' alt='' src='/_imgs/AdvFind/progress.gif'><br>" + CrmEncodeDecode.CrmHtmlEncode(window.LOCID_PAGELOADING_MSG) + "</td></tr></table>"
        }
        this.$7_3.style.display = "inline"
    },
    $c_3: function () {
        if (IsNull(this.$7_3))
            return;
        this.$7_3.style.display = "none";
        this.$7_3.parentNode.removeChild(this.$7_3);
        this.$7_3 = null
    },
    $r_3: function () {
        XUI.Html.SetOpacity(this.$0_3, 1);
        this.$0_3.style.display = "inline"
    },
    $1m_3: function () {
        XUI.Html.SetOpacity(this.$0_3, 0)
    },
    $j_3: function () {
        if (IsNull(this.$0_3)) {
            this.$0_3 = document.createElement("IFRAME");
            this.$0_3.frameBorder = "0";
            this.$0_3.setAttribute("name", this.$P_3);
            this.get_element().appendChild(this.$0_3);
            this.$0_3.id = this.$P_3;
            this.$0_3.style.border = "0";
            this.$0_3.style.borderStyle = "none";
            this.$0_3.style.overflow = "hidden";
            this.$0_3.style.position = "absolute";
            this.$0_3.style.left = "0px";
            this.$0_3.style.right = "0px";
            this.$0_3.style.height = "100%";
            this.$0_3.style.width = "100%";
            this.$0_3.title = this.contentAreaText
        }
        try {
            $removeHandler(this.$0_3, "load", this.$Y_3)
        } catch ($$e_0) { }

        $addHandler(this.$0_3, "load", this.$Y_3)
    },
    $x_3: function () {
        if (IsNull(this.$4_3)) {
            this.$4_3 = document.createElement("div");
            this.get_element().appendChild(this.$4_3);
            this.$4_3.id = this.$e_3;
            this.$4_3.className = "contentDiv"
        }
    },
    $z_3: function () {
        if (!IsNull(this.$0_3)) {
            this.$0_3.src = "";
            $clearHandlers(this.$0_3);
            Mscrm.Utilities.destroyElement(this.$0_3);
            this.$0_3 = null
        }
    },
    $l_3: function () {
        if (!IsNull(this.$4_3)) {
            Mscrm.Utilities.destroyElement(this.$4_3);
            this.$4_3.innerHTML = "";
            this.$4_3 = null;
            try {
                window.focus()
            } catch ($$e_0) { }

        }
    },
    $1O_3: function () {
        if (IsNull(this.$4_3))
            return;
        var $v_0 = $get("scriptContainer_" + this.$4_3.id);
        Mscrm.CrmHeader.get_scriptLoader().cleanupMarkedScripts($v_0, true);
        if (!IsNull($v_0)) {
            Mscrm.Utilities.destroyElement($v_0);
            $v_0.innerHTML = ""
        }
        var $v_1 = $get("styleContainer_" + this.$4_3.id);
        if (!IsNull($v_1)) {
            Mscrm.Utilities.destroyElement($v_1);
            $v_1.innerHTML = ""
        }
    },
    $1E_3: function () {
        var $v_0 = $get(this.$u_3);
        !IsNull($v_0) && $v_0.parentNode.removeChild($v_0)
    },
    $1M_3: function () {
        var $v_0 = document.createElement("div");
        $v_0.id = this.$u_3;
        this.$4_3.appendChild($v_0)
    },
    $1D_3: function ($p0) {
        if ($p0.substring(0, 8) === "for(;;);")
            $p0 = $p0.substring(8, $p0.length);
        return $p0
    },
    $1p_3: function ($p0, $p1) {
        this.$s_3();
        this.$z_3();
        this.$l_3();
        this.$x_3();
        this.$1E_3();
        $p0.get_query()["responseType"] = Mscrm.ResponseType.Json;
        addPassiveAuthParameters($p0);
        if ($p0.get_isLocalServer())
            $p0.get_query()["pagemode"] = "iframe";
        this.$B_3 = $p0.toString();
        var $$t_6 = this,
		$$t_7 = this;
        Mscrm.InlineContentLoader.requestJsonContentByGet($p0, function ($p1_0) {
            var $v_0 = $$t_6.$1D_3($p1_0.responseText);
            Mscrm.InlineContentLoader.loadJsonResponse(Sys.Serialization.JavaScriptSerializer.deserialize($v_0), $$t_6.$4_3);
            $$t_6.$4_3.style.visibility = "visible";
            $$t_6.$c_3();
            $$t_6.title = $p1
        }, function ($p1_0) {
            IsNull($$t_7.$0_3) && $$t_7.$j_3();
            $$t_7.$4_3.style.display = "none";
            $$t_7.$r_3();
            $$t_7.get_element().setAttribute($$t_7.$Q_3, $$t_7.$P_3);
            var $v_1 = $$t_7.$0_3.contentWindow.document;
            $v_1.open();
            $v_1.write($p1_0.responseText);
            $v_1.close()
        });
        setPageTitle(this.defaultTitle);
        this.$4_3.style.visibility = "hidden";
        this.$1G_3();
        this.raiseEvent(Mscrm.ScriptEvents.RequestResize, null)
    },
    loadContentByPost: function (uri, httpBody) {
        this.$s_3();
        this.$z_3();
        this.$l_3();
        this.$x_3();
        this.$1E_3();
        var $$t_6 = this,
		$$t_7 = this;
        Mscrm.InlineContentLoader.requestJsonContentByPost(uri, httpBody, function ($p1_0) {
            var $v_0 = $$t_6.$1D_3($p1_0.responseText);
            Mscrm.InlineContentLoader.loadJsonResponse(Sys.Serialization.JavaScriptSerializer.deserialize($v_0), $$t_6.$4_3);
            $$t_6.$4_3.style.visibility = "visible";
            $$t_6.$c_3()
        }, function ($p1_0) {
            IsNull($$t_7.$0_3) && $$t_7.$j_3();
            $$t_7.$4_3.style.display = "none";
            $$t_7.$r_3();
            $$t_7.get_element().setAttribute($$t_7.$Q_3, $$t_7.$P_3);
            var $v_1 = $$t_7.$0_3.contentWindow.document;
            $v_1.open();
            $v_1.write($p1_0.responseText);
            $v_1.close()
        })
    },
    $n_3: function ($p0, $p1) {
        this.get_element().setAttribute("src", $p0.toString());
        this.$X_3 = false;
        if (Mscrm.Utilities.isJsonResponseSupported($p0)) {
            this.get_element().setAttribute(this.$Q_3, this.$e_3);
            this.$1p_3($p0, $p1)
        } else {
            this.get_element().setAttribute(this.$Q_3, this.$P_3);
            this.$1o_3($p0, $p1)
        }
    },
    $1o_3: function ($p0, $p1) {
        this.$0_3 && Mscrm.PerformanceTracing.write("Unload", this.$0_3.src);
        (IsNull(this.$0_3) || Mscrm.CrmUri.isSameDomain(this.$0_3.src, window.location.href)) && this.$s_3();
        this.$B_3 = $p0.toString();
        if (!IsNull(this.$0_3)) {
            if (Mscrm.Utilities.isFirefox())
                try {
                    if (!IsNull(this.$0_3.contentWindow) && !IsNull(this.$0_3.contentWindow.document) && !IsNull(this.$0_3.contentWindow.document.body))
                        this.$0_3.contentWindow.document.body.style.display = "none"
                } catch ($$e_2) { }

            this.$0_3.src = ""
        }
        this.$1O_3();
        this.$l_3();
        this.$j_3();
        this.$1m_3();
        this.$1G_3();
        setPageTitle(this.defaultTitle);
        if ($p0.get_isLocalServer())
            $p0.get_query()["pagemode"] = "iframe";
        addPassiveAuthParameters($p0);
        var $v_0 = $p0.toString();
        Mscrm.PerformanceTracing.write("Navigate", $v_0);
        this.$0_3.src = $v_0;
        window.self.InnerIFrameSrcChangeTimestamp = (new Date).getTime();
        this.title = $p1;
        if (window.LOCID_UI_DIR === "RTL" && $p0.toString().indexOf("PersonalWall") >= 0 && window.UseTabletExperience)
            this.$0_3.style.position = "RELATIVE"
    },
    $s_3: function () {
        var $v_0 = null;
        try {
            $v_0 = $find("crmInlinePageManager");
            if (IsNull($v_0))
                $v_0 = this.$0_3.contentWindow.Sys.Application.findComponent("crmPageManager")
        } catch ($$e_1) {
            $v_0 = null
        }
        if (!IsNull($v_0))
            try {
                $v_0.unloadHandler()
            } catch ($v_1) { }

        else
            this.raiseEvent(Mscrm.ScriptEvents.PageUnloaded, null)
    },
    $1t_3: function ($p0) {
        $p0 = $p0[this.get_id()];
        var $v_0 = $p0["top"];
        this.get_element().offsetTop !== $v_0 && this.set_top($v_0);
        var $v_1 = $p0["left"];
        if (!IsNull($v_1)) {
            this.get_element().offsetLeft !== $v_1 && this.set_left($v_1);
            var $v_2 = $p0["width"];
            this.get_element().offsetWidth !== $v_2 && $v_2 > 0 && this.set_width($v_2);
            if (Sys.Browser.agent === Sys.Browser.Firefox) {
                var $v_3 = document.createElement("div");
                this.get_element().appendChild($v_3);
                this.get_element().removeChild($v_3)
            }
        }
    }
};
Mscrm.HistoryManager = function ($p0) {
    this.$S_3 = [];
    this.$9_3 = [];
    this.$N_3 = [];
    Mscrm.HistoryManager.initializeBase(this, [$p0])
};
Mscrm.HistoryManager.prototype = {
    $W_3: null,
    $f_3: 0,
    $g_3: 0,
    get_$3_3: function () {
        return this.$g_3
    },
    set_$3_3: function ($p0) {
        this.$g_3 = $p0;
        this.$22_3();
        return $p0
    },
    $O_3: 0,
    $v_3: 0,
    initialize: function () {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.$S_3[this.get_$3_3()] = null;
        var $$t_0;
        this.$9_3[(this.set_$3_3(($$t_0 = this.get_$3_3()) + 1), $$t_0)] = window.document.URL;
        this.$N_3[this.$O_3++] = true
    },
    handleEvent: function (eventCode, parameters, sourceComponent) {
        switch (eventCode) {
            case Mscrm.ScriptEvents.Navigate:
                this.$1W_3(parameters);
                break;
            case Mscrm.ScriptEvents.NavigateBack:
                this.$1X_3(parameters);
                break;
            case Mscrm.ScriptEvents.NavigateForward:
                this.$1Z_3(parameters);
                break;
            case Mscrm.ScriptEvents.NavigateBackCheckpoint:
                this.$1Y_3(parameters);
                break;
            case Mscrm.ScriptEvents.NavigateRetrieveDetails:
                return this.$1U_3(parameters);
            case Mscrm.ScriptEvents.NavigateSaveState:
                this.$1d_3(parameters);
                break;
            case Mscrm.ScriptEvents.PageLoaded:
                this.$a_3(parameters, sourceComponent);
                break;
            case Mscrm.ScriptEvents.UpdatePageInformation:
                this.$1j_3(parameters);
                break;
            default:
                break
        }
        return null
    },
    navigateBack: function (count) {
        if (this.get_$3_3() === 1) {
            var $v_1 = Mscrm.CrmUri.create(this.$9_3[0]);
            if ($v_1.get_path().endsWith("/edit.aspx")) {
                this.raiseEvent(Mscrm.ScriptEvents.NavigateClose, null);
                return
            }
            return
        }
        if (count <= 0)
            count = 1;
        if (count > this.get_$3_3())
            count = 1;
        var $v_0 = this.$p_3(this.$9_3[this.get_$3_3() - count]);
        $v_0 && this.set_$3_3(this.get_$3_3() - count)
    },
    navigateForward: function (count) {
        if (this.$f_3 === 1)
            return;
        if (count <= 0)
            count = 1;
        if (count > this.$f_3 - this.get_$3_3())
            count = 1;
        var $v_0 = this.$p_3(this.$9_3[this.get_$3_3() + count]);
        $v_0 && this.set_$3_3(this.get_$3_3() + count)
    },
    navigateBackCheckpoint: function (count) {
        if (this.get_$3_3() === 1) {
            var $v_2 = Mscrm.CrmUri.create(this.$9_3[0]);
            this.raiseEvent(Mscrm.ScriptEvents.NavigateClose, null);
            return
        }
        if (count > this.$v_3)
            count = 1;
        var $v_0 = this.$O_3;
        while (count > 0) {
            $v_0--;
            if (this.$N_3[$v_0])
                --count
        }
        var $v_1 = this.$p_3(this.$9_3[$v_0 - 1]);
        if ($v_1) {
            this.set_$3_3($v_0);
            this.$O_3 = $v_0
        }
    },
    $10_3: true,
    $a_3: function ($p0, $p1) {
        if (this.$10_3 && $p1 !== Mscrm.PageManager.get_instance()) {
            this.$9_3[0] = $p0["uri"];
            this.$10_3 = false
        }
    },
    $1j_3: function ($p0) {
        var $v_0 = 0;
        if (!IsNull($p0["count"]))
            $v_0 = $p0["count"];
        var $v_1 = $p0["updateQueryString"];
        if (!IsNull($v_1)) {
            var $v_2 = Mscrm.CrmUri.create(this.$9_3[this.get_$3_3() - $v_0 - 1]),
			$v_3 = Mscrm.CrmUri.create("");
            $v_3.appendToQuery($v_1);
            var $$dict_5 = $v_3.get_query();
            for (var $$key_6 in $$dict_5) {
                var $v_4 = {
                    key: $$key_6,
                    value: $$dict_5[$$key_6]
                };
                $v_2.get_query()[$v_4.key] = $v_4.value
            }
            this.$9_3[this.get_$3_3() - $v_0 - 1] = $v_2.toString()
        }
    },
    $p_3: function ($p0) {
        var $v_0 = {};
        $v_0["uri"] = $p0;
        $v_0["historyNavigation"] = true;
        var $v_1 = this.raiseEvent(Mscrm.ScriptEvents.NavigateRequest, $v_0),
		$v_2 = false;
        if ($v_1.length > 0)
            $v_2 = $v_1[0];
        return $v_2
    },
    $1U_3: function ($p0) {
        var $v_0 = {};
        $v_0["uri"] = this.$9_3[this.get_$3_3() - 1];
        $v_0["checkpoint"] = this.$N_3[this.$O_3 - 1];
        $v_0["saveStateId"] = this.$S_3[this.get_$3_3() - 1];
        return $v_0
    },
    $1d_3: function ($p0) {
        this.$S_3[this.get_$3_3() - 1] = $p0["saveStateId"]
    },
    $1W_3: function ($p0) {
        if (!IsNull($p0["historyNavigation"]) && $p0["historyNavigation"])
            return;
        if (!IsNull($p0["refresh"]) && $p0["refresh"])
            return;
        if ($p0["historyNavigation"])
            this.$S_3[this.get_$3_3()] = null;
        var $$t_2;
        this.$9_3[(this.set_$3_3(($$t_2 = this.get_$3_3()) + 1), $$t_2)] = $p0["uri"];
        this.$f_3 = this.get_$3_3();
        var $v_0 = true;
        if (!IsNull($p0["checkpoint"]))
            $v_0 = $p0["checkpoint"];
        this.$N_3[this.$O_3++] = $v_0;
        if ($v_0)
            this.$v_3++
    },
    $1X_3: function ($p0) {
        var $v_0 = 1;
        if (!IsNull($p0) && !IsNull($p0["count"]))
            $v_0 = $p0["count"];
        this.navigateBack($v_0)
    },
    $1Z_3: function ($p0) {
        var $v_0 = 1;
        if (!IsNull($p0) && !IsNull($p0["count"]))
            $v_0 = $p0["count"];
        this.navigateForward($v_0)
    },
    $1Y_3: function ($p0) {
        var $v_0 = 1;
        if (!IsNull($p0) && !IsNull($p0["count"]))
            $v_0 = $p0["count"];
        this.navigateBackCheckpoint($v_0)
    },
    $22_3: function () {
        if (IsNull(this.$W_3)) {
            this.$W_3 = document.createAttribute("count");
            this.get_element().attributes.setNamedItem(this.$W_3)
        }
        this.$W_3.value = this.$g_3.toString()
    }
};
Mscrm.NavigationManager = function () {
    Mscrm.NavigationManager.initializeBase(this)
};
Mscrm.NavigationManager.prototype = {
    initialize: function () {
        Mscrm.CrmUIComponent.prototype.initialize.call(this)
    },
    handleEvent: function (eventCode, parameters, sourceComponent) {
        switch (eventCode) {
            case Mscrm.ScriptEvents.NavigateRequest:
                return this.$1c_2(parameters, sourceComponent);
            case Mscrm.ScriptEvents.NavigateRefresh:
                this.$1b_2(parameters, sourceComponent);
                break;
            case Mscrm.ScriptEvents.NavigateClose:
                return this.$1a_2(parameters, sourceComponent);
            case Mscrm.ScriptEvents.SignOut:
                this.$1i_2(parameters);
                break;
            case Mscrm.ScriptEvents.PageLoaded:
                return this.$a_2(parameters, sourceComponent)
        }
        return null
    },
    $1i_2: function ($p0) {
        if (!(window.IS_LIVE || window.IS_SPLA || window.IS_CLAIMS))
            return false;
        this.raiseEvent(Mscrm.ScriptEvents.SignOutRequested, null);
        var $v_0 = Mscrm.CrmUri.create(window.location.href);
        $v_0.get_query()["signout"] = "1";
        window.location.href = $v_0.toString();
        return false
    },
    $a_2: function ($p0, $p1) {
        var $v_0 = this.raiseEvent(Mscrm.ScriptEvents.NavigateRetrieveDetails, null);
        if (!IsNull($v_0) && !IsNull($v_0[0])) {
            var $v_1 = {};
            $v_1["saveStateId"] = $v_0[0]["saveStateId"];
            !IsNull($v_1["saveStateId"]) && this.raiseEvent(Mscrm.ScriptEvents.NavigateSaveState, $v_1)
        }
        return null
    },
    $w_2: function ($p0) {
        var $v_0 = this.raiseEvent(Mscrm.ScriptEvents.NavigateConfirm, $p0),
		$v_1 = true,
		$v_2 = 0;
        while ($v_1 && $v_2 < $v_0.length) {
            var $v_3 = $v_0[$v_2++];
            if (!IsNull($v_3))
                $v_1 = $v_1 && $v_3
        }
        return $v_1
    },
    $1a_2: function ($p0, $p1) {
        if (!$p0)
            $p0 = {};
        $p0["windowClosing"] = true;
        if (this.$w_2($p0)) {
            closeWindow();
            return true
        }
        return false
    },
    $1b_2: function ($p0, $p1) {
        $p0["refresh"] = true;
        $p1.raiseEvent(Mscrm.ScriptEvents.Navigate, $p0)
    },
    $1c_2: function ($p0, $p1) {
        var $v_0 = null,
		$v_1 = false,
		$v_2 = null,
		$v_3 = $p0["uri"];
        if (IsNull($v_3) || !$v_3.length) {
            $v_0 = Mscrm.CrmUri.create("/main.aspx");
            $v_0.get_query()["pagetype"] = $p0["pagetype"];
            switch ($v_0.get_query()["pagetype"]) {
                case "entityrecord":
                    $v_0.get_query()["etc"] = $p0["etc"];
                    $v_0.get_query()["id"] = $p0["id"];
                    break;
                case "entitylist":
                    $v_0.get_query()["etc"] = $p0["etc"];
                    $v_0.get_query()["viewid"] = $p0["viewid"];
                    break
            }
        } else
            $v_0 = Mscrm.CrmUri.create($v_3);
        if (isNullOrEmptyString($v_0.get_path()))
            $p0["uri"] = "/_common/error/errorHandler.aspx?inline=1&ErrorCode=0x80631116";
        $v_1 = $v_0.get_path().toLowerCase().endsWith("/main.aspx");
        if ($v_1)
            $v_2 = Mscrm.CrmUri.create("");
        var $v_4 = $p0["queryString"];
        if ($v_1)
            if (!IsNull($v_0.get_query()["pagemode"])) {
                if (!IsNull($v_4) && $v_4.length > 0)
                    $v_4 = $v_4 + "&pagemode=" + CrmEncodeDecode.CrmUrlEncode($v_0.get_query()["pagemode"].toString());
                else
                    $v_4 = "pagemode=" + CrmEncodeDecode.CrmUrlEncode($v_0.get_query()["pagemode"].toString());
                delete $v_0.get_query().pagemode
            }
        if (!IsNull($v_4) && $v_4.length > 0)
            if ($v_1) {
                var $v_9 = Mscrm.CrmUri.create("");
                $v_9.appendToQuery($v_4);
                var $$dict_8 = $v_9.get_query();
                for (var $$key_9 in $$dict_8) {
                    var $v_A = {
                        key: $$key_9,
                        value: $$dict_8[$$key_9]
                    };
                    $v_2.get_query()[$v_A.key] = $v_A.value
                }
            } else
                $v_0.appendToQuery($v_4);
        var $v_5 = $p0["query"];
        if (!IsNull($v_5)) {
            var $$dict_C = $v_5;
            for (var $$key_D in $$dict_C) {
                var $v_B = {
                    key: $$key_D,
                    value: $$dict_C[$$key_D]
                };
                if ($v_1)
                    $v_2.get_query()[$v_B.key] = $v_B.value;
                else
                    $v_0.get_query()[$v_B.key] = $v_B.value
            }
        }
        if ($v_1 && !IsNull($v_2))
            $v_0.get_query()["extraqs"] = $v_2.get_queryString();
        var $v_6 = true;
        if ($v_1) {
            if ($v_0.get_query()["pagetype"] === "entityrecord")
                $v_6 = false
        } else if ($v_0.get_path().toUpperCase().endsWith("/EDIT.ASPX"))
            $v_6 = false;
        if (!IsNull($p0["sameWindow"]) && $p0["sameWindow"])
            $v_6 = $p0["sameWindow"];
        if (!$v_6) {
            var $v_C = "";
            if ($v_0.get_path().toLowerCase().endsWith("/homepage.aspx"))
                $v_C = "ENTITYLIST";
            if ($v_0.get_path().toLowerCase().endsWith("/edit.aspx"))
                $v_C = "ENTITYRECORD";
            $v_0 = Mscrm.Utilities.getPageUrl($v_0, $v_C);
            $v_1 = $v_0.get_path().toLowerCase().endsWith("/main.aspx");
            var $v_D = $p0["windowWidth"],
			$v_E = $p0["windowHeight"],
			$v_F = buildWinName(null),
			$v_G = "";
            if (!window.ORG_IS_APP_MODE)
                $v_G = ",location=1,toolbar=1,menubar=1";
            return !IsNull(openStdWin($v_0, $v_F, $v_D, $v_E, $v_G))
        }
        var $v_7 = [$p1],
		$v_8 = Mscrm.Utilities.createCallbackFunctionObject("handleNavigateRequestCallback", this, $v_7);
        $p0["callbackForNavigate"] = $v_8;
        if (!this.$w_2($p0))
            return false;
        return this.handleNavigateRequestCallback($p0, $p1)
    },
    handleNavigateRequestCallback: function (parameters, sourceComponent) {
        if (!IsNull(parameters["historyNavigation"]) && parameters["historyNavigation"]) {
            sourceComponent.raiseEvent(Mscrm.ScriptEvents.Navigate, parameters);
            return true
        }
        if (Mscrm.NavigationMode.DefaultNavigationMode === Mscrm.NavigationMode.NavigationModeInline) {
            parameters["saveStateId"] = Math.random().toString();
            this.raiseEvent(Mscrm.ScriptEvents.NavigateSaveState, parameters)
        }
        if (IsNull(sourceComponent))
            sourceComponent = Mscrm.PageManager.get_instance();
        sourceComponent.raiseEvent(Mscrm.ScriptEvents.Navigate, parameters);
        return true
    }
};
Mscrm.RecentlyViewed = function ($p0) {
    this.$$d_recentlyViewedContextMenuHandler = Function.createDelegate(this, this.recentlyViewedContextMenuHandler);
    this.$$d_pinRecentlyViewedItemSelected = Function.createDelegate(this, this.pinRecentlyViewedItemSelected);
    this.$$d_recentlyViewedItemSelected = Function.createDelegate(this, this.recentlyViewedItemSelected);
    this.$$d_recentlyViewedHidden = Function.createDelegate(this, this.recentlyViewedHidden);
    this.$$d_empty = Function.createDelegate(this, this.empty);
    this.$$d_$1h_3 = Function.createDelegate(this, this.$1h_3);
    this.$$d_$1u_3 = Function.createDelegate(this, this.$1u_3);
    this.$$d_$1w_3 = Function.createDelegate(this, this.$1w_3);
    this.$$d_$1v_3 = Function.createDelegate(this, this.$1v_3);
    this.$$d_$24_3 = Function.createDelegate(this, this.$24_3);
    this.$$d_$1s_3 = Function.createDelegate(this, this.$1s_3);
    this.$$d_$1C_3 = Function.createDelegate(this, this.$1C_3);
    this.$K_3 = new Array(0);
    this.$m_3 = new RegExp("Timestamp:Loaded=([^,\x0a]+),Updated=([^,\x0a]+),Saved=([^,\x0a]*)\x0a([\\s\\S]*)");
    this.pinnedIconPath = window.LOCID_UI_DIR === "RTL" ? "/_imgs/RecentlyViewed/Pinned_RTL.png" : "/_imgs/RecentlyViewed/Pinned.png";
    this.unPinnedIconPath = window.LOCID_UI_DIR === "RTL" ? "/_imgs/RecentlyViewed/Unpinned_RTL.png" : "/_imgs/RecentlyViewed/Unpinned.png";
    Mscrm.RecentlyViewed.initializeBase(this, [$p0])
};
Mscrm.RecentlyViewed.createRecentlyViewedItemObject = function () {
    return new Mscrm.RecentlyViewedItem
};
Mscrm.RecentlyViewed.prototype = {
    $1_3: null,
    $8_3: null,
    $T_3: false,
    get_dateFormat: function () {
        return "MM/dd/yyyy HH:mm:ss"
    },
    userId: null,
    isSaveEnabled: true,
    $R_3: "",
    $J_3: 11,
    get_maxRecordLength: function () {
        return this.$J_3
    },
    $D_3: 40,
    get_maxEntityRecordCount: function () {
        return this.$D_3
    },
    set_maxEntityRecordCount: function (value) {
        this.$D_3 = value;
        return value
    },
    $E_3: 10,
    get_maxViewRecordCount: function () {
        return this.$E_3
    },
    set_maxViewRecordCount: function (value) {
        this.$E_3 = value;
        return value
    },
    $d_3: 0,
    $b_3: null,
    $M_3: null,
    $L_3: null,
    $2_3: "\n",
    $5_3: ";",
    $U_3: null,
    initialize: function () {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.$R_3 = "RV" + this.userId;
        this.$1_3 = new Array(0);
        this.$8_3 = new Array(0);
        $addHandler(window, "unload", this.$$d_$1C_3);
        this.$d_3 = window.setTimeout(this.$$d_$1s_3, 1.8e6)
    },
    dispose: function () {
        if (this.get_isDisposed())
            return;
        $removeHandler(window, "unload", this.$$d_$1C_3);
        window.clearTimeout(this.$d_3);
        this.$1C_3(null);
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    handleEvent: function (eventCode, parameters, sourceComponent) {
        switch (eventCode) {
            case Mscrm.ScriptEvents.PageLoaded:
                this.$a_3(parameters, sourceComponent);
                break;
            case Mscrm.ScriptEvents.GridViewChanged:
                this.$1k_3(parameters, sourceComponent);
                break;
            case Mscrm.ScriptEvents.RetrieveRecentData:
                return this.$1g_3(parameters);
            case Mscrm.ScriptEvents.RecordUpdated:
                this.$1f_3(parameters);
                break;
            case Mscrm.ScriptEvents.RecentlyViewedAddItem:
                this.$1T_3(parameters);
                break;
            case Mscrm.ScriptEvents.UpdateVisualizationUrl:
                this.$1l_3(parameters, sourceComponent);
                break;
            case Mscrm.ScriptEvents.DashboardViewChanged:
                this.$1V_3(parameters, sourceComponent);
                break;
            case Mscrm.ScriptEvents.SignOutRequested:
                this.$1J_3();
                this.$i_3();
                this.$T_3 = true;
                break;
            case Mscrm.ScriptEvents.SignInRequested:
                this.$T_3 = false;
                break;
            default:
                break
        }
        return null
    },
    $1s_3: function () {
        this.$1J_3();
        this.$d_3 = window.setTimeout(this.$$d_$1s_3, 1.8e6)
    },
    $1J_3: function () {
        if (this.$15_3()) {
            this.$M_3 = new Date;
            var $$t_1 = this;
            this.$F_3(function ($p1_0) {
                $$t_1.$23_3($p1_0)
            })
        }
    },
    $23_3: function ($p0) {
        this.$1K_3($p0, true, this.$$d_$24_3, Mscrm.RecentlyViewed.$1B, false)
    },
    $24_3: function ($p0, $p1) {
        if ($p0.Success) {
            this.$L_3 = new Date;
            var $v_0 = $p0.ReturnValue.toString();
            if (!isNullOrEmptyString($v_0)) {
                var $v_1 = this.$k_3($v_0);
                this.$I_3($v_1, $v_1)
            }
        }
    },
    $1C_3: function ($p0) {
        if (this.get_isDisposed())
            return;
        window.clearTimeout(this.$d_3);
        if (this.$T_3)
            return;
        var $v_0 = Mscrm.CrmUri.create(window.location.href);
        if (!IsNull($v_0.get_query()["signout"]) && ($v_0.get_query()["signout"] === "1" || $v_0.get_query()["signout"] === "2"))
            return;
        var $v_1 = false;
        try {
            var $v_2 = window.self.masterWindow();
            if (!IsNull($v_2) && $v_2 !== window.self) {
                var $v_3 = $v_2.Sys.Application.findComponent("crmRecentlyViewed");
                if (!IsNull($v_3))
                    $v_1 = true
            }
        } catch ($$e_5) { }

        if (!$v_1)
            if (this.$15_3()) {
                var $v_4 = this.$F_3(null);
                this.$1K_3($v_4, false, null, 500, true);
                this.$i_3()
            }
    },
    $15_3: function () {
        if (!this.isSaveEnabled)
            return false;
        var $v_0 = true,
		$v_1 = {};
        if (this.$1r_3($v_1)) {
            var $v_2 = $v_1["savedTime"];
            if (!IsNull($v_2) && !isNaN($v_2)) {
                $v_0 = false;
                var $v_3 = false,
				$v_4 = $v_1["updatedTime"];
                if (!IsNull($v_4))
                    $v_3 = !!($v_3 | elapsedTime($v_2, $v_4) > 0);
                $v_0 = $v_3
            }
        } else
            $v_0 = false;
        return $v_0
    },
    $1T_3: function ($p0) {
        var $v_0 = $p0;
        this.addRecord(0, $v_0.Id, $v_0.TypeCode.toString(), $v_0.TypeName, $v_0.DisplayName, $v_0.Name, $v_0.Action, null)
    },
    $a_3: function ($p0, $p1) {
        var $v_0 = Mscrm.CrmUri.create($p0["uri"]);
        if ($v_0.get_path().toUpperCase().endsWith("/MAIN.ASPX")) {
            var $v_1 = $v_0.get_query()["mode"];
            if (isNullOrEmptyString($v_1) || $v_1 !== "iframe")
                return
        }
        var $$t_5 = this;
        this.$F_3(function ($p1_0) {
            $$t_5.$1e_3($p0, $p1)
        })
    },
    $1e_3: function ($p0, $p1) {
        var $v_0 = 0,
		$v_1 = $p0["uri"],
		$v_2 = Mscrm.CrmUri.create($v_1),
		$v_3 = null,
		$v_4 = {};
        if ($p1.get_id() === "crmContentPanel") {
            if ($v_2.get_path().toUpperCase().endsWith("/HOMEPAGE.ASPX"))
                return;
            $v_4["pageType"] = "isv";
            $v_0 = 2;
            delete $v_2.get_query().pagemode;
            $v_3 = $v_2.toString()
        } else if ($p1.get_id() === "crmPageManager" || $p1.get_id() === "crmInlinePageManager")
            if ($v_2.get_path().toUpperCase().endsWith("/USERDEFINED/EDIT.ASPX")) {
                $v_4["pageType"] = "entity";
                $v_0 = 0
            } else if ($v_2.get_path().toUpperCase().endsWith("/HOMEPAGE.ASPX")) {
                $v_4["pageType"] = "grid";
                $v_0 = 1;
                this.$U_3 = $v_2.get_query()["sitemappath"]
            } else if (Mscrm.Utilities.isHomepageUrl($v_2)) {
                $v_4["pageType"] = "isv";
                $v_0 = 2;
                delete $v_2.get_query().pagemode;
                $v_3 = $v_2.toString()
            }
        var $v_5 = Mscrm.PageManager.get_instance().raiseEvent(Mscrm.ScriptEvents.GetPageInfo, $v_4);
        if (IsNull($v_5) || $v_5.length < 1)
            return;
        for (var $v_6 = {}, $v_D = 0; $v_D < $v_5.length; $v_D++)
            if (!IsNull($v_5[$v_D]))
                $v_6 = $v_5[$v_D];
        if (!$v_6)
            return;
        var $v_7 = $v_6["Id"],
		$v_8 = $v_6["otc"],
		$v_9 = $v_6["etn"],
		$v_A = $v_6["title"],
		$v_B = $v_6["entitydisplayname"],
		$v_C = $v_6["iconpath"];
        if (!IsNull($v_6["viewtype"])) {
            $v_3 = String.format("viewtype={0}", CrmEncodeDecode.CrmUrlEncode($v_6["viewtype"]));
            if (!isNullOrEmptyString(this.$U_3))
                $v_3 = String.format("{0}&sitemappath={1}", $v_3, CrmEncodeDecode.CrmUrlEncode(this.$U_3));
            if (Mscrm.EntityPropUtil.isActivityTypeCode(parseInt($v_8, 10)))
                $v_3 = String.format("{0}&type={1}", $v_3, CrmEncodeDecode.CrmUrlEncode($v_9))
        }
        if (!IsNull($v_2.get_query()["visualizationId"]))
            $v_3 = String.format("{0}&visualizationId={1}", $v_3, CrmEncodeDecode.CrmUrlEncode($v_2.get_query()["visualizationId"]));
        if (!IsNull($v_2.get_query()["visualizationType"]))
            $v_3 = String.format("{0}&visualizationType={1}", $v_3, CrmEncodeDecode.CrmUrlEncode($v_2.get_query()["visualizationType"]));
        if (!IsNull($v_2.get_query()["visualizationPaneMode"]))
            $v_3 = String.format("{0}&visualizationPaneMode={1}", $v_3, CrmEncodeDecode.CrmUrlEncode($v_2.get_query()["visualizationPaneMode"]));
        if (!IsNull($v_2.get_query()["layout"]))
            $v_3 = String.format("{0}&layout={1}", $v_3, CrmEncodeDecode.CrmUrlEncode($v_2.get_query()["layout"]));
        if ($v_2.get_path().toUpperCase().endsWith("/HOME_DASHBOARDS.ASPX")) {
            $v_7 = $p0["id"];
            if (IsNull($v_7))
                return;
            $v_8 = $p0["otc"];
            $v_9 = $p0["etn"];
            $v_A = $p0["title"];
            $v_B = $p0["entitydisplayname"];
            $v_3 = $p0["action"];
            $v_0 = 0
        }
        if ($v_0 !== 2 && IsNull($v_7))
            return;
        this.addRecord($v_0, $v_7, $v_8, $v_9, $v_B, $v_A, $v_3, $v_C)
    },
    $1k_3: function ($p0, $p1) {
        var $v_0 = $p0["Id"],
		$v_1 = $p0["otc"],
		$v_2 = $p0["etn"],
		$v_3 = $p0["title"],
		$v_4 = $p0["entitydisplayname"],
		$v_5 = String.format("viewtype={0}", CrmEncodeDecode.CrmUrlEncode($p0["viewtype"]));
        if (!isNullOrEmptyString(this.$U_3))
            $v_5 = String.format("{0}&sitemappath={1}", $v_5, CrmEncodeDecode.CrmUrlEncode(this.$U_3));
        if (Mscrm.EntityPropUtil.isActivityTypeCode(parseInt($v_1, 10)))
            $v_5 = String.format("{0}&type={1}", $v_5, CrmEncodeDecode.CrmUrlEncode($v_2));
        var $v_6 = $p0["iconpath"];
        this.addRecord(1, $v_0, $v_1, $v_2, $v_4, $v_3, $v_5, $v_6)
    },
    $1l_3: function ($p0, $p1) {
        var $v_0 = "",
		$v_1 = false,
		$v_2 = this.$F_3(null);
        if (!IsNull($v_2)) {
            for (var $v_3 = $v_2.split(this.$2_3), $v_4 = 0; $v_4 < $v_3.length; $v_4++) {
                var $v_5 = $v_3[$v_4].trimStart(),
				$v_6 = $v_5.split(this.$5_3);
                if ($v_6.length === this.$J_3)
                    if ($v_6[1] === $p0["viewId"]) {
                        var $v_8 = Mscrm.CrmUri.create("dummy?" + $v_6[6]);
                        $v_8.get_query()["visualizationId"] = $p0["visualizationId"];
                        $v_8.get_query()["visualizationType"] = $p0["visualizationType"];
                        $v_8.get_query()["visualizationPaneMode"] = $p0["visualizationPaneMode"];
                        $v_8.get_query()["layout"] = $p0["layout"];
                        $v_6[6] = $v_8.get_queryString().substring(1, $v_8.get_queryString().length);
                        $v_1 = true
                    }
                var $v_7 = $v_6.join(this.$5_3);
                $v_0 = $v_0 + $v_7 + this.$2_3
            }
            $v_1 && this.$I_3($v_0, $v_2)
        }
    },
    $1V_3: function ($p0, $p1) {
        this.$a_3($p0, $p1)
    },
    $1f_3: function ($p0) {
        var $v_0 = $p0["Id"],
		$v_1 = $p0["otc"],
		$v_2 = $p0["etn"],
		$v_3 = $p0["title"],
		$v_4 = $p0["entitydisplayname"],
		$v_5 = $p0["iconPath"];
        this.addRecord(0, $v_0, $v_1, $v_2, $v_4, $v_3, null, $v_5)
    },
    $Z_3: function ($p0, $p1) {
        if (!$p0) {
            var $v_0 = this.$F_3(null);
            this.$y_3($v_0)
        } else {
            var $$t_4 = this;
            this.$F_3(function ($p1_0) {
                $$t_4.$y_3($p1_0);
                !IsNull($p1) && $p1()
            })
        }
    },
    $y_3: function ($p0) {
        if (!IsNull($p0)) {
            var $v_0 = 0,
			$v_1 = 0;
            this.$8_3 = new Array(0);
            this.$1_3 = new Array(0);
            for (var $v_2 = $p0.split(this.$2_3), $v_3 = 0; $v_3 < $v_2.length; $v_3++) {
                var $v_4 = $v_2[$v_3].trimStart(),
				$v_5 = $v_4.split(this.$5_3);
                if ($v_5.length === this.$J_3) {
                    var $v_6 = parseInt($v_5[0], 10),
					$v_7 = $v_6,
					$v_8 = {};
                    $v_8["Id"] = $v_5[1];
                    $v_8["entityTypeCode"] = $v_5[2];
                    $v_8["entityTypeName"] = $v_5[3];
                    $v_8["entityDisplayName"] = CrmEncodeDecode.CrmUrlDecode($v_5[4]);
                    $v_8["title"] = CrmEncodeDecode.CrmUrlDecode($v_5[5]);
                    $v_8["action"] = CrmEncodeDecode.CrmUrlDecode($v_5[6]);
                    $v_8["pinStatus"] = $v_5[9];
                    $v_8["iconPath"] = $v_5[7];
                    $v_8["lastAccessed"] = $v_5[8];
                    if ($v_7 === 1)
                        this.$8_3[$v_1++] = $v_8;
                    else
                        this.$1_3[$v_0++] = $v_8
                }
            }
        } else {
            this.$1_3 = new Array(0);
            this.$8_3 = new Array(0)
        }
        this.$8_3.sort(this.$$d_$1v_3);
        this.$1_3.sort(this.$$d_$1v_3)
    },
    $1v_3: function ($p0, $p1) {
        var $v_0 = $p0,
		$v_1 = $p1,
		$v_2 = new Date($v_0["lastAccessed"]),
		$v_3 = new Date($v_1["lastAccessed"]),
		$v_4 = elapsedTime($v_3, $v_2);
        if (IsNull($v_4) || isNaN($v_4))
            $v_4 = 1;
        return $v_4
    },
    addRecord: function (type, objectId, entityTypeCode, entityTypeName, entityDisplayName, title, action, iconPath) {
        try {
            if (isNullOrEmptyString(title))
                return;
            title = CrmEncodeDecode.CrmUrlEncode(title);
            action = CrmEncodeDecode.CrmUrlEncode(action);
            entityDisplayName = CrmEncodeDecode.CrmUrlEncode(entityDisplayName);
            var $v_0 = new Date;
            $v_0.setHours($v_0.getHours() + $v_0.getTimezoneOffset() / 60);
            var $v_1 = "";
            $v_1 = this.$1P_3(type, objectId, entityTypeCode, entityTypeName, entityDisplayName, title, action, iconPath, $v_0);
            var $$t_C = this;
            this.$F_3(function ($p1_0) {
                $$t_C.$1L_3($p1_0, $v_1, type, objectId, action)
            })
        } catch ($$e_A) { }

    },
    $1L_3: function ($p0, $p1, $p2, $p3, $p4) {
        var $v_0 = $p1 + "0;" + this.$2_3,
		$v_1 = "",
		$v_2 = "",
		$v_3 = "",
		$v_4 = 0;
        if (!IsNull($p0))
            for (var $v_7 = $p0.split(this.$2_3), $v_8 = 0; $v_8 < $v_7.length; $v_8++) {
                var $v_9 = $v_7[$v_8].trimStart(),
				$v_A = $v_9.split(this.$5_3);
                if ($v_A.length === this.$J_3) {
                    var $v_B = $v_A[0].trimStart(),
					$v_C = $v_A[1].trimStart(),
					$v_D = $v_A[6].trimStart();
                    if (this.$1x_3($v_B, $p2))
                        if (!IsNull($p3) && $v_C !== "" && $v_C === $p3) {
                            if ($v_A[9] === "1")
                                $v_0 = $p1 + "1;" + this.$2_3
                        } else if ($p2 === 2 && $v_D !== "" && !IsNull($p4) && ($v_D.startsWith($p4) || $p4.startsWith($v_D))) {
                            var $v_E = new Date;
                            $v_E.setHours($v_E.getHours() + $v_E.getTimezoneOffset() / 60);
                            $v_A[8] = $v_E.format("MM/dd/yyyy HH:mm:ss");
                            $v_0 = $v_A.join(this.$5_3) + this.$2_3
                        } else if ($v_3 === "" && $v_A[9] === "0")
                            $v_3 = $v_9 + this.$2_3;
                        else {
                            if ($v_3 === "")
                                $v_1 = $v_1 + $v_9 + this.$2_3;
                            else
                                $v_2 = $v_2 + $v_9 + this.$2_3;
                            $v_4++
                        }
                    else
                        $v_1 = $v_1 + $v_9 + this.$2_3
                }
            }
        var $v_5 = 0;
        if (!$p2 || $p2 === 2)
            $v_5 = this.$D_3 - 1;
        if ($p2 === 1)
            $v_5 = this.$E_3 - 1;
        if ($v_4 < $v_5)
            $v_1 = $v_1 + $v_3 + $v_2 + $v_0;
        else if ($v_4 === $v_5)
            $v_1 = $v_1 + $v_2 + $v_0;
        else
            $v_1 = $v_1 + $v_2;
        var $v_6 = $v_1.trim().split(this.$2_3);
        $v_6.sort(this.$$d_$1w_3);
        this.$M_3 = new Date;
        this.$I_3($v_6.join(this.$2_3), $p0)
    },
    $1w_3: function ($p0, $p1) {
        if (isNullOrEmptyString($p0))
            return 1;
        if (isNullOrEmptyString($p1))
            return -1;
        var $v_0 = new Date($p0.split(this.$5_3)[8]),
		$v_1 = new Date($p1.split(this.$5_3)[8]),
		$v_2 = elapsedTime($v_1, $v_0);
        if (IsNull($v_2) || isNaN($v_2))
            $v_2 = 1;
        return $v_2
    },
    $1x_3: function ($p0, $p1) {
        var $v_0 = parseInt($p0, 10);
        if ($v_0 === $p1)
            return true;
        if (!$v_0 && $p1 === 2 || $v_0 === 2 && !$p1)
            return true;
        return false
    },
    $1P_3: function ($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8) {
        var $v_0 = $p0,
		$v_1 = $v_0,
		$v_2 = new Array(1),
		$v_3 = 0;
        $v_2[$v_3++] = $v_1;
        if (!IsNull($p1))
            $v_2[$v_3++] = $p1;
        else
            $v_2[$v_3++] = "";
        if (!IsNull($p2))
            $v_2[$v_3++] = $p2;
        else
            $v_2[$v_3++] = "";
        if (!IsNull($p3))
            $v_2[$v_3++] = $p3;
        else
            $v_2[$v_3++] = "";
        if (!IsNull($p4))
            $v_2[$v_3++] = $p4;
        else
            $v_2[$v_3++] = "";
        $v_2[$v_3++] = $p5;
        if (!IsNull($p6))
            $v_2[$v_3++] = $p6;
        else
            $v_2[$v_3++] = "";
        if (!IsNull($p7))
            $v_2[$v_3++] = $p7;
        else
            $v_2[$v_3++] = "";
        $v_2[$v_3++] = $p8.format("MM/dd/yyyy HH:mm:ss");
        return this.$11_3($v_2)
    },
    $11_3: function ($p0) {
        var $v_0 = new Sys.StringBuilder;
        $v_0.append($p0[0]);
        $v_0.append(this.$5_3);
        $v_0.append($p0[1]);
        $v_0.append(this.$5_3);
        $v_0.append($p0[2]);
        $v_0.append(this.$5_3);
        $v_0.append($p0[3]);
        $v_0.append(this.$5_3);
        $v_0.append($p0[4]);
        $v_0.append(this.$5_3);
        $v_0.append($p0[5]);
        $v_0.append(this.$5_3);
        $v_0.append($p0[6]);
        $v_0.append(this.$5_3);
        $v_0.append($p0[7]);
        $v_0.append(this.$5_3);
        $v_0.append($p0[8]);
        $v_0.append(this.$5_3);
        return $v_0.toString()
    },
    $1r_3: function ($p0) {
        var $v_0 = false,
		$v_1 = this.$17_3();
        if (!isNullOrEmptyString($v_1)) {
            var $v_2 = $v_1.match(this.$m_3);
            if (!IsNull($v_2) && $v_2.length === 5) {
                if (IsNull($p0))
                    $p0 = {};
                $p0["syncedTime"] = isNullOrEmptyString($v_2[1]) ? null : new Date($v_2[1]);
                $p0["updatedTime"] = isNullOrEmptyString($v_2[2]) ? null : new Date($v_2[2]);
                $p0["savedTime"] = isNullOrEmptyString($v_2[3]) ? null : new Date($v_2[3]);
                $v_0 = true
            }
        }
        return $v_0
    },
    $17_3: function () {
        var $v_0 = null;
        try {
            $v_0 = Mscrm.CrmLocalStorage.getItem(this.$R_3)
        } catch ($v_1) { }

        return $v_0
    },
    $F_3: function ($p0) {
        var $v_0 = this.$17_3(),
		$v_1 = false;
        if (!isNullOrEmptyString($v_0)) {
            var $v_2 = $v_0.match(this.$m_3);
            if (!IsNull($v_2) && $v_2.length === 5) {
                var $v_3 = new Date($v_2[1]),
				$v_4 = new Date;
                if (elapsedTime($v_3, $v_4) < 3.6e6) {
                    this.$b_3 = $v_3;
                    $v_0 = $v_2[4];
                    $v_1 = true
                }
            }
        }
        if ($v_1) {
            if (!IsNull($v_0))
                $v_0 = this.$12_3($v_0);
            !IsNull($p0) && $p0($v_0)
        } else {
            this.$i_3();
            if (!IsNull($p0))
                this.$K_3[this.$K_3.length] = $p0;
            $v_0 = this.$1q_3(!IsNull($p0))
        }
        return $v_0
    },
    $o_3: false,
    $16_3: null,
    $1q_3: function ($p0) {
        var $v_0 = null;
        if (this.$T_3 || $p0 && this.$o_3)
            return $v_0;
        this.$16_3 = new Date;
        var $v_1 = new RemoteCommand("RecentlyViewedWebService", "RetrieveRecentlyViewedData", null);
        $v_1.ErrorHandler = this.$$d_$1u_3;
        var $v_2 = null;
        if ($p0)
            $v_2 = this.$$d_$1h_3;
        var $v_3 = $v_1.Execute($v_2);
        if (!$p0) {
            if ($v_3.Success) {
                var $v_4 = $v_3.ReturnValue;
                $v_0 = this.$13_3($v_4)
            }
        } else
            this.$o_3 = true;
        return $v_0
    },
    $1u_3: function ($p0, $p1) { },
    $1h_3: function ($p0, $p1) {
        var $v_0 = null;
        if ($p0.Success) {
            $v_0 = $p0.ReturnValue;
            this.$13_3($v_0)
        }
        this.$o_3 = false
    },
    $13_3: function ($p0) {
        this.$b_3 = this.$16_3;
        var $v_0 = this.$k_3($p0);
        $v_0 = this.$12_3($v_0);
        this.$I_3($v_0, $v_0);
        for (var $v_1 = 0; $v_1 < this.$K_3.length; $v_1++) {
            var $v_2 = this.$K_3[$v_1];
            $v_2($v_0)
        }
        this.$K_3 = new Array(0);
        return $v_0
    },
    $12_3: function ($p0) {
        $p0 = $p0.trim();
        for (var $v_0 = $p0.split(this.$2_3), $v_1 = new Array(0), $v_2 = new Array(0), $v_3 = false, $v_4 = 0; $v_4 < $v_0.length; $v_4++) {
            var $v_5 = $v_0[$v_4].split(this.$5_3);
            try {
                var $v_6 = parseInt($v_5[0]);
                if ($v_6 === 1)
                    $v_2[$v_2.length] = $v_0[$v_4];
                else
                    $v_1[$v_1.length] = $v_0[$v_4]
            } catch ($v_7) {
                $v_3 = true
            }
        }
        if ($v_2.length > this.$E_3) {
            var $v_8 = $v_2.length - this.$E_3;
            $v_2.sort(this.$$d_$1w_3);
            for (var $v_9 = 0; $v_9 < this.$E_3; $v_9++)
                $v_2[$v_9] = $v_2[$v_9 + $v_8];
            $v_2.length = this.$E_3;
            $v_3 = true
        }
        if ($v_1.length > this.$D_3) {
            var $v_A = $v_1.length - this.$D_3;
            $v_2.sort(this.$$d_$1w_3);
            for (var $v_B = 0; $v_B < this.$D_3; $v_B++)
                $v_1[$v_B] = $v_1[$v_B + $v_A];
            $v_1.length = this.$D_3;
            $v_3 = true
        }
        if ($v_3) {
            var $v_C = $v_2.join(this.$2_3);
            $v_C = $v_C + this.$2_3 + $v_1.join(this.$2_3);
            $v_C = $v_C.trim();
            this.$I_3($v_C, $v_C);
            $p0 = $v_C
        }
        return $p0
    },
    $1K_3: function ($p0, $p1, $p2, $p3, $p4) {
        var $v_0 = null;
        if (this.$T_3)
            return $v_0;
        if (isNullOrEmptyString($p0))
            return $v_0;
        for (var $v_1 = $p0.split(this.$2_3), $v_2 = {}, $v_7 = 0; $v_7 < $v_1.length; $v_7++) {
            var $v_8 = $v_1[$v_7].split(this.$5_3);
            if ($v_8.length !== this.$J_3) {
                if (!isNullOrEmptyString($v_1[$v_7]));
                continue
            }
            var $v_9 = 0,
			$v_A = $v_8[2];
            if (!isNullOrEmptyString($v_A))
                $v_9 = parseInt($v_A, 10);
            else
                $v_9 = Mscrm.EntityTypeCode.SiteMap;
            if (isNaN($v_9) || !$v_9)
                continue;
            var $v_B = $v_2[$v_9.toString()];
            if (IsNull($v_B)) {
                $v_B = [];
                $v_2[$v_9.toString()] = $v_B
            }
            $v_B[$v_B.length] = $v_8
        }
        var $v_3 = new Sys.StringBuilder("<RecentlyViewedData>"),
		$$dict_E = $v_2;
        for (var $$key_F in $$dict_E) {
            var $v_C = {
                key: $$key_F,
                value: $$dict_E[$$key_F]
            };
            $v_3.append(String.format("<RecentlyViewedEntityData etc='{0}'>", CrmEncodeDecode.CrmXmlAttributeEncode($v_C.key)));
            for (var $v_D = $v_C.value, $v_E = 0; $v_E < $v_D.length; $v_E++) {
                var $v_F = $v_D[$v_E];
                $v_3.append(String.format("<RecentlyViewedItem>\r\n\t\t\t\t\t\t<Type>{0}</Type>\r\n\t\t\t\t\t\t<ObjectId>{1}</ObjectId>\r\n\t\t\t\t\t\t<EntityTypeCode>{2}</EntityTypeCode>\r\n\t\t\t\t\t\t<EntityTypeName>{3}</EntityTypeName>\r\n\t\t\t\t\t\t<DisplayName>{4}</DisplayName>\r\n\t\t\t\t\t\t<Title>{5}</Title>\r\n\t\t\t\t\t\t<Action>{6}</Action>\r\n\t\t\t\t\t\t<IconPath>{7}</IconPath>\r\n\t\t\t\t\t\t<LastAccessed>{8}</LastAccessed>\r\n\t\t\t\t\t\t<PinStatus>{9}</PinStatus>\r\n\t\t\t\t\t</RecentlyViewedItem>", CrmEncodeDecode.CrmXmlEncode($v_F[0]), CrmEncodeDecode.CrmXmlEncode($v_F[1]), CrmEncodeDecode.CrmXmlEncode($v_F[2]), CrmEncodeDecode.CrmXmlEncode($v_F[3]), CrmEncodeDecode.CrmXmlEncode(CrmEncodeDecode.CrmUrlDecode($v_F[4])), CrmEncodeDecode.CrmXmlEncode(CrmEncodeDecode.CrmUrlDecode($v_F[5])), CrmEncodeDecode.CrmXmlEncode(CrmEncodeDecode.CrmUrlDecode($v_F[6])), CrmEncodeDecode.CrmXmlEncode($v_F[7]), CrmEncodeDecode.CrmXmlEncode($v_F[8]), CrmEncodeDecode.CrmXmlEncode($v_F[9] === "1" ? "true" : "false")))
            }
            $v_3.append("</RecentlyViewedEntityData>")
        }
        $v_3.append("</RecentlyViewedData>");
        var $v_4 = new RemoteCommand("RecentlyViewedWebService", "UploadRecentlyViewed", null);
        $v_4.ErrorHandler = this.$$d_$1u_3;
        $v_4.SetParameter("recentlyViewedXml", $v_3.toString().trim());
        $v_4.SetParameter("retrieveAfterUpdated", $p1);
        var $v_5 = new Date,
		$v_6 = $p3 < 0 ? $v_4.Execute($p2) : $v_4.Execute($p2, $p3, $p4);
        if (IsNull($p2) && !IsNull($v_6) && $v_6.Success) {
            this.$L_3 = $v_5;
            if ($p1)
                $v_0 = $v_6.ReturnValue.toString()
        }
        return $v_0
    },
    $k_3: function ($p0) {
        if (isNullOrEmptyString($p0))
            return "";
        for (var $v_0 = new Sys.StringBuilder, $v_1 = XUI.Xml.LoadXml($p0), $v_2 = XUI.Xml.SelectNodes($v_1, "/RecentlyViewedData/RecentlyViewedEntityData", null), $v_3 = 0; $v_3 < $v_2.length; $v_3++) {
            var $v_4 = $v_2[$v_3];
            try {
                var $v_5 = 0,
				$v_6 = null,
				$v_7 = $v_4.attributes.getNamedItem("etn");
                if (!IsNull($v_7))
                    $v_6 = $v_7.nodeValue;
                if (isNullOrEmptyString($v_6))
                    $v_5 = parseInt($v_4.attributes.getNamedItem("etc").nodeValue, 10);
                if (isNullOrEmptyString($v_6) && $v_5 <= 0)
                    continue;
                for (var $v_8 = XUI.Xml.SelectNodes($v_4, "RecentlyViewedItem", null), $v_9 = 0; $v_9 < $v_8.length; $v_9++) {
                    var $v_A = $v_8[$v_9];
                    try {
                        var $v_B = parseInt(XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_A, "Type", null)), 10),
						$v_C = null,
						$v_D = XUI.Xml.SelectSingleNode($v_A, "ObjectId", null);
                        if (!IsNull($v_D))
                            $v_C = XUI.Xml.GetText($v_D);
                        var $v_E = null,
						$v_F = XUI.Xml.SelectSingleNode($v_A, "DisplayName", null);
                        if (!IsNull($v_F))
                            $v_E = XUI.Xml.GetText($v_F);
                        var $v_G = null,
						$v_H = XUI.Xml.SelectSingleNode($v_A, "Title", null);
                        if (!IsNull($v_H))
                            $v_G = XUI.Xml.GetText($v_H);
                        var $v_I = null,
						$v_J = XUI.Xml.SelectSingleNode($v_A, "Action", null);
                        if (!IsNull($v_J))
                            $v_I = XUI.Xml.GetText($v_J);
                        var $v_K = null,
						$v_L = XUI.Xml.SelectSingleNode($v_A, "IconPath", null);
                        if (!IsNull($v_L))
                            $v_K = XUI.Xml.GetText($v_L);
                        var $v_M = false,
						$v_N = XUI.Xml.SelectSingleNode($v_A, "PinStatus", null);
                        if (!IsNull($v_N))
                            $v_M = Boolean.parse(XUI.Xml.GetText($v_N));
                        var $v_O = new Date(XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_A, "LastAccessed", null)));
                        $v_0.append(String.format("{1}{0}{2}{0}{3}{0}{4}{0}{5}{0}{6}{0}{7}{0}{8}{0}{9}{0}{10}{0}{11}", this.$5_3, $v_B, $v_C, $v_5 === Mscrm.EntityTypeCode.SiteMap ? "" : $v_5.toString(), $v_6, CrmEncodeDecode.CrmUrlEncode($v_E), CrmEncodeDecode.CrmUrlEncode($v_G), CrmEncodeDecode.CrmUrlEncode($v_I), $v_K, $v_O.format("MM/dd/yyyy HH:mm:ss"), $v_M ? 1 : 0, this.$2_3))
                    } catch ($v_P) {
                        continue
                    }
                }
            } catch ($v_Q) {
                continue
            }
        }
        return $v_0.toString()
    },
    $i_3: function () {
        try {
            Mscrm.CrmLocalStorage.removeItem(this.$R_3)
        } catch ($$e_0) { }

    },
    $I_3: function ($p0, $p1) {
        try {
            if (!IsNull($p0)) {
                var $v_0 = String.format("Timestamp:Loaded={0},Updated={1},Saved={2}{3}{4}", this.$b_3.toString(), !IsNull(this.$M_3) ? this.$M_3.toString() : (new Date).toString(), !IsNull(this.$L_3) ? this.$L_3.toString() : "", this.$2_3, $p0);
                Mscrm.CrmLocalStorage.setItem(this.$R_3, $v_0)
            }
        } catch ($$e_3) {
            var $v_1 = String.format("Timestamp:Loaded={0},Updated={1},Saved={2}{3}{4}", this.$b_3.toString(), this.$M_3.toString(), !IsNull(this.$L_3) ? this.$L_3.toString() : "", this.$2_3, $p1);
            Mscrm.CrmLocalStorage.setItem(this.$R_3, $v_1)
        }
    },
    getRecordsByEntityType: function (entityTypeCode) {
        this.$Z_3(false, null);
        for (var $v_0 = new Array(1), $v_1 = 0, $v_2 = this.$1_3.length - 1; $v_2 >= 0; $v_2--) {
            var $v_3 = this.$1_3[$v_2];
            if (IsNull($v_3))
                break;
            var $v_4 = $v_3["entityTypeCode"];
            if ($v_4 === entityTypeCode)
                $v_0[$v_1++] = $v_3
        }
        return $v_0
    },
    getAllEntityRecords: function (rvXml) {
        if (!isNullOrEmptyString(rvXml) && rvXml.length > 150) {
            var $v_2 = this.$k_3(rvXml);
            this.$I_3($v_2, $v_2)
        } else
            this.$Z_3(false, null);
        for (var $v_0 = new Array(1), $v_1 = 0, $v_3 = this.$1_3.length - 1; $v_3 >= 0; $v_3--) {
            var $v_4 = this.$1_3[$v_3];
            if (IsNull($v_4))
                break;
            $v_0[$v_1++] = $v_4
        }
        return $v_0
    },
    $1g_3: function ($p0) {
        this.$Z_3(false, null);
        var $v_0 = false,
		$v_1 = true,
		$v_2 = this.$D_3,
		$v_3 = this.$E_3,
		$v_4 = $p0["etc"],
		$v_5 = $p0["etn"],
		$v_6 = $p0["etcList"],
		$v_7 = $p0["etnList"];
        if (!IsNull($p0["excludeRecords"]))
            $v_0 = $p0["excludeRecords"];
        if (!IsNull($p0["excludeViews"]))
            $v_1 = $p0["excludeViews"];
        if (!IsNull($p0["maxRecords"]))
            $v_2 = $p0["maxRecords"];
        if (!IsNull($p0["maxViews"]))
            $v_3 = $p0["maxViews"];
        var $v_8 = [],
		$v_9 = [],
		$v_A = 0,
		$v_B = 0,
		$v_C = false,
		$v_D = {};
        if (!$v_0) {
            for (var $v_E = this.$1_3.length - 1; $v_E >= 0; $v_E--) {
                if ($v_A >= $v_2)
                    break;
                var $v_F = this.$1_3[$v_E];
                if (IsNull($v_F))
                    break;
                var $v_G = parseInt($v_F["entityTypeCode"], 10),
				$v_H = $v_F["entityTypeName"];
                if (!IsNull($v_4) && $v_4 === $v_G) {
                    $v_8[$v_A++] = $v_F;
                    continue
                }
                if (!IsNull($v_6)) {
                    $v_C = false;
                    for (var $v_I = 0; $v_I < $v_6.length; $v_I++)
                        if ($v_G === $v_6[$v_I]) {
                            $v_8[$v_A++] = $v_F;
                            $v_C = true;
                            break
                        }
                    if ($v_C)
                        continue
                }
                if (!IsNull($v_5) && $v_5 === $v_H) {
                    $v_8[$v_A++] = $v_F;
                    continue
                }
                if (!IsNull($v_7))
                    for (var $v_J = 0; $v_J < $v_7.length; $v_J++)
                        if ($v_H === $v_7[$v_J]) {
                            $v_8[$v_A++] = $v_F;
                            break
                        }
            }
            $v_D["recordList"] = this.$1S_3($v_8)
        }
        if (!$v_1) {
            for (var $v_K = this.$8_3.length - 1; $v_K >= 0; $v_K--) {
                if ($v_B >= $v_3)
                    break;
                var $v_L = this.$8_3[$v_K];
                if (IsNull($v_L))
                    break;
                var $v_M = parseInt($v_L["entityTypeCode"], 10),
				$v_N = $v_L["entityTypeName"];
                if (!IsNull($v_4) && $v_4 === $v_M) {
                    $v_9[$v_B++] = $v_L;
                    continue
                }
                if (!IsNull($v_6)) {
                    $v_C = false;
                    for (var $v_O = 0; $v_O < $v_6.length; $v_O++)
                        if ($v_M === $v_6[$v_O]) {
                            $v_9[$v_B++] = $v_L;
                            $v_C = true;
                            break
                        }
                    if ($v_C)
                        continue
                }
                if (!IsNull($v_5) && $v_5 === $v_N) {
                    $v_9[$v_B++] = $v_L;
                    continue
                }
                if (!IsNull($v_7))
                    for (var $v_P = 0; $v_P < $v_7.length; $v_P++)
                        if ($v_N === $v_7[$v_P]) {
                            $v_9[$v_B++] = $v_L;
                            break
                        }
            }
            $v_D["viewList"] = $v_9
        }
        return $v_D
    },
    $1S_3: function ($p0) {
        for (var $v_0 = new Array($p0.length), $v_1 = 0; $v_1 < $p0.length; $v_1++) {
            var $v_2 = $p0[$v_1],
			$v_3 = new Mscrm.RecentlyViewedItem;
            $v_3.TypeCode = $v_2["entityTypeCode"];
            $v_3.TypeName = $v_2["entityTypeName"];
            $v_3.Id = $v_2["Id"];
            $v_3.Name = $v_2["title"];
            $v_3.Action = $v_2["action"];
            $v_0[$v_1] = $v_3
        }
        return $v_0
    },
    rvHideCallback: null,
    recentlyViewedHeaderTitle: null,
    recentlyViewedViewsHeaderTitle: null,
    pinItemActionTitle: null,
    unpinItemActionTitle: null,
    copyShortcutActionTitle: null,
    sendShortcutActionTitle: null,
    $6_3: null,
    $q_3: null,
    $t_3: null,
    getRecentlyViewedHeader: function () {
        var $v_0 = document.createElement("DIV");
        $v_0.className = "ms-crm-RecentlyViewed-Header";
        var $v_1 = document.createElement("NOBR");
        $v_1.className = "ms-crm-RV-Header-Title";
        XUI.Html.SetText($v_1, this.recentlyViewedHeaderTitle);
        $v_0.appendChild($v_1);
        $addHandler($v_0, "click", this.$$d_empty);
        return $v_0
    },
    showRecentlyViewed: function (parameters, focusOnHideElement) {
        var $$t_2 = this;
        this.$Z_3(true, function () {
            $$t_2.$1y_3(parameters, focusOnHideElement)
        })
    },
    $1y_3: function ($p0, $p1) {
        if (!this.$6_3) {
            this.$6_3 = Mscrm.Menu.createMenuForParentElement(document.body);
            this.$6_3.set_propagateStyle(false);
            this.$q_3 = this.getRecentlyViewedContextMenu(true);
            this.$t_3 = this.getRecentlyViewedContextMenu(false)
        } else
            this.$6_3.clear();
        this.$6_3.set_width(422);
        this.$6_3.set_stylePrefix(Mscrm.MenuStyles.recentlyViewedStylePrefix);
        this.$6_3.set_isVertical(false);
        var $v_0 = $p0["x"],
		$v_1 = $p0["y"],
		$v_2 = Mscrm.Menu.createMenuForParentElement(document.body);
        $v_2.set_width(210);
        $v_2.set_stylePrefix(Mscrm.MenuStyles.recentlyViewedStylePrefix);
        $v_2.set_propagateStyle(false);
        $v_2.set_isInline(true);
        if (!this.$1_3.length) {
            var $v_6 = Mscrm.MenuItem.createMenuItem("");
            $v_6.set_stylePrefix("RV-view-header");
            $v_6.set_isFocusable(false);
            $v_2.addItem($v_6)
        }
        this.populateRVSubMenuInternal($v_2, this.$1_3, 0, Mscrm.MenuStyles.recentlyViewedStylePrefix);
        this.$6_3.addItem($v_2);
        var $v_3 = Mscrm.MenuItemSeparator.createSeparator(true);
        $v_3.set_stylePrefix(Mscrm.MenuStyles.recentlyViewedStylePrefix);
        this.$6_3.addItem($v_3);
        this.$6_3.set_width(427);
        var $v_4 = Mscrm.Menu.createMenuForParentElement(document.body);
        $v_4.set_width(210);
        $v_4.set_stylePrefix(Mscrm.MenuStyles.recentlyViewedStylePrefix);
        $v_4.set_propagateStyle(false);
        $v_4.set_isInline(true);
        var $v_5 = Mscrm.MenuItem.createMenuItem(this.recentlyViewedViewsHeaderTitle);
        $v_5.set_stylePrefix("RV-view-header");
        $v_5.set_isFocusable(false);
        $v_4.addItem($v_5);
        this.populateRVSubMenuInternal($v_4, this.$8_3, this.$1_3.length, "RV-view-item");
        this.$6_3.addItem($v_4);
        this.$6_3.set_hideCallback(this.$$d_recentlyViewedHidden);
        this.$6_3.set_shiftVertical(false);
        this.$6_3.set_header(this.getRecentlyViewedHeader());
        this.$6_3.set_left($v_0);
        this.$6_3.set_top($v_1);
        this.$6_3.set_minHeight(200);
        this.$6_3.set_focusElementOnHide($p1);
        this.$6_3.refresh();
        this.$6_3.show()
    },
    populateRVSubMenuInternal: function (itemSubMenu, itemSet, baseIndex, menuItemStyle) {
        for (var $v_0 = itemSet.length - 1; $v_0 >= 0; $v_0--) {
            var $v_1 = itemSet[$v_0];
            if (IsNull($v_1))
                break;
            var $v_2 = $v_1["title"],
			$v_3 = $v_1["entityDisplayName"],
			$v_4 = $v_1["entityTypeCode"],
			$v_5 = $v_1["pinStatus"],
			$v_6 = $v_1["iconPath"],
			$v_7 = $v_2;
            if (!isNullOrEmptyString($v_3))
                $v_7 = String.format("{0}: {1}", $v_3, $v_2);
            var $v_8 = $v_6;
            if (isNullOrEmptyString($v_8)) {
                if (!isNullOrEmptyString($v_4))
                    $v_8 = Mscrm.Utilities.getIconPath(parseInt($v_4));
                if (isNullOrEmptyString($v_8))
                    $v_8 = "/_imgs/placeholders/ribbon_placeholder_16.png"
            }
            var $v_9 = Mscrm.MenuItem.createMenuItem($v_2);
            $v_9.set_stylePrefix(menuItemStyle);
            $v_9.set_iconPath($v_8);
            $v_9.set_tooltip($v_7);
            $v_9.set_actionCallback(this.$$d_recentlyViewedItemSelected);
            var $v_A = {};
            $v_A["index"] = baseIndex + $v_0;
            $v_9.set_reference($v_A);
            $v_9.set_auxActionCallback(this.$$d_pinRecentlyViewedItemSelected);
            $v_9.set_hideOnAuxAction(false);
            if ($v_5 === "1") {
                $v_9.set_auxIconPath(this.pinnedIconPath);
                $v_9.set_auxIconTooltip(window.LOCID_RV_PINICON_TOOLTIP);
                $v_9.set_contextMenu(this.$t_3)
            } else {
                $v_9.set_auxIconPath(this.unPinnedIconPath);
                $v_9.set_auxIconTooltip(window.LOCID_RV_UNPINICON_TOOLTIP);
                $v_9.set_contextMenu(this.$q_3)
            }
            itemSubMenu.addItem($v_9)
        }
    },
    recentlyViewedHidden: function (menu) {
        !IsNull(this.rvHideCallback) && this.rvHideCallback(this)
    },
    recentlyViewedItemSelected: function (item) {
        var $v_0 = item.get_reference(),
		$v_1 = $v_0["index"];
        this.openRecentlyViewedItem($v_1)
    },
    pinRecentlyViewedItemSelected: function (item) {
        var $v_0 = item.get_reference(),
		$v_1 = $v_0["index"];
        this.pinChanged(item, $v_1)
    },
    empty: function (evt) {
        evt.stopPropagation()
    },
    openRecentlyViewedItem: function (position) {
        var $v_0;
        if (position < this.$1_3.length) {
            $v_0 = this.$1_3[position];
            var $v_1 = $v_0["entityTypeCode"],
			$v_2 = $v_0["Id"],
			$v_3 = $v_0["action"];
            if ($v_1 > 0)
                openObj($v_1, $v_2, $v_3, null, 0, null);
            else
                openUrl($v_3, false)
        } else if (position < this.$1_3.length + this.$8_3.length) {
            $v_0 = this.$8_3[position - this.$1_3.length];
            var $v_4 = $v_0["entityTypeCode"],
			$v_5 = $v_0["Id"],
			$v_6 = $v_0["action"],
			$v_7 = Mscrm.Utilities.getViewURL($v_4, $v_5, $v_6);
            openUrl($v_7, true)
        }
    },
    pinChanged: function (item, position) {
        var $v_0;
        if (position < this.$1_3.length)
            $v_0 = this.$1_3[position];
        else
            $v_0 = this.$8_3[position - this.$1_3.length];
        var $v_1 = $v_0["Id"],
		$v_2 = $v_0["action"],
		$v_3 = $v_0["pinStatus"],
		$v_4 = this.changePinRecord($v_1, $v_2, $v_3);
        $v_0["pinStatus"] = $v_4;
        if ($v_4 === "1") {
            item.set_auxIconPath(this.pinnedIconPath);
            item.set_auxIconTooltip(window.LOCID_RV_PINICON_TOOLTIP);
            item.set_contextMenu(this.$t_3)
        } else {
            item.set_auxIconPath(this.unPinnedIconPath);
            item.set_auxIconTooltip(window.LOCID_RV_UNPINICON_TOOLTIP);
            item.set_contextMenu(this.$q_3)
        }
    },
    changePinRecord: function (objectId, action, pinStatus) {
        action = CrmEncodeDecode.CrmUrlEncode(action);
        var $v_0 = this.$F_3(null),
		$v_1 = "",
		$v_2 = "";
        if (!IsNull($v_0))
            for (var $v_3 = $v_0.split(this.$2_3), $v_4 = 0; $v_4 < $v_3.length; $v_4++) {
                var $v_5 = $v_3[$v_4].trimStart(),
				$v_6 = $v_5.split(this.$5_3);
                if ($v_6.length === this.$J_3) {
                    var $v_7 = $v_6[0].trimStart(),
					$v_8 = $v_6[1].trimStart(),
					$v_9 = $v_6[6].trimStart(),
					$v_A = $v_6[9].trimStart();
                    if ($v_8 === objectId && CrmEncodeDecode.CrmUrlDecode($v_9) === CrmEncodeDecode.CrmUrlDecode(action) && pinStatus === $v_A) {
                        var $v_B = this.$11_3($v_6);
                        if (pinStatus === "1") {
                            $v_B = $v_B + "0" + this.$5_3;
                            $v_2 = "0"
                        } else {
                            $v_B = $v_B + "1" + this.$5_3;
                            $v_2 = "1"
                        }
                        $v_1 = $v_1 + $v_B + this.$2_3
                    } else
                        $v_1 = $v_1 + $v_5 + this.$2_3
                }
            }
        this.$M_3 = new Date;
        this.$I_3($v_1.trim(), $v_0);
        return $v_2
    },
    getRecentlyViewedContextMenu: function (isPinLabel) {
        var $v_0 = Mscrm.Menu.createMenuForParentElement(document.body);
        $v_0.set_stylePrefix(Mscrm.MenuStyles.contextMenuStylePrefix);
        if (isPinLabel) {
            var $v_3 = Mscrm.MenuItem.createMenuItem(this.pinItemActionTitle);
            $v_3.set_reference(Mscrm.ContextMenuAction.pinItem);
            $v_3.set_actionCallback(this.$$d_recentlyViewedContextMenuHandler);
            $v_3.set_hideParentOnContextItemAction(false);
            $v_0.addItem($v_3)
        } else {
            var $v_4 = Mscrm.MenuItem.createMenuItem(this.unpinItemActionTitle);
            $v_4.set_reference(Mscrm.ContextMenuAction.unpinItem);
            $v_4.set_actionCallback(this.$$d_recentlyViewedContextMenuHandler);
            $v_4.set_hideParentOnContextItemAction(false);
            $v_0.addItem($v_4)
        }
        var $v_1 = Mscrm.MenuItem.createMenuItem(this.copyShortcutActionTitle);
        $v_1.set_reference(Mscrm.ContextMenuAction.copyShortcut);
        $v_1.set_actionCallback(this.$$d_recentlyViewedContextMenuHandler);
        $v_1.set_disabled(!Mscrm.Utilities.get_ieBrowserVersion());
        $v_0.addItem($v_1);
        var $v_2 = Mscrm.MenuItem.createMenuItem(this.sendShortcutActionTitle);
        $v_2.set_reference(Mscrm.ContextMenuAction.sendShortcut);
        $v_2.set_actionCallback(this.$$d_recentlyViewedContextMenuHandler);
        $v_0.addItem($v_2);
        $v_0.set_width(200);
        return $v_0
    },
    recentlyViewedContextMenuHandler: function (item) {
        var $v_0 = item.get_parentMenu(),
		$v_1 = item.get_reference();
        switch ($v_1) {
            case Mscrm.ContextMenuAction.pinItem:
            case Mscrm.ContextMenuAction.unpinItem:
                this.pinRecentlyViewedItemSelected($v_0.get_contextItem());
                break;
            case Mscrm.ContextMenuAction.copyShortcut:
                this.contextMenuActionShortCut($v_0.get_contextItem(), false);
                break;
            case Mscrm.ContextMenuAction.sendShortcut:
                this.contextMenuActionShortCut($v_0.get_contextItem(), true);
                break
        }
    },
    contextMenuActionShortCut: function (item, sendEMail) {
        var $v_0 = item.get_reference(),
		$v_1 = false,
		$v_2 = $v_0["index"],
		$v_3,
		$v_4;
        if ($v_2 < this.$1_3.length)
            $v_4 = this.$1_3[$v_2];
        else if ($v_2 < this.$1_3.length + this.$8_3.length) {
            $v_4 = this.$8_3[$v_2 - this.$1_3.length];
            $v_1 = true
        } else
            return;
        $v_3 = new Mscrm.RecentlyViewedItem;
        $v_3.TypeCode = isNullOrEmptyString($v_4["entityTypeCode"]) ? Mscrm.EntityTypeCode.None : $v_4["entityTypeCode"];
        $v_3.Id = $v_4["Id"];
        $v_3.Name = $v_4["title"];
        $v_3.Action = $v_4["action"];
        if ($v_1) {
            var $v_5 = window.location.href;
            if (!Mscrm.SessionInfo.isOnline())
                $v_5 = window.WEB_APP_URL;
            else
                $v_5 = $v_5.substring(0, $v_5.indexOf(window.location.pathname));
            var $v_6 = Mscrm.CrmUri.create(Mscrm.Help.concatenateUrl($v_5, Mscrm.Utilities.getViewURL($v_3.TypeCode, $v_3.Id, $v_3.Action)));
            Mscrm.Utilities.sendViewUrl(sendEMail, $v_6, $v_4["title"], $v_4["Id"])
        } else
            Mscrm.Utilities.sendSelectedRecordsUrl(sendEMail, [$v_3], $v_3.TypeCode, false)
    }
};
Mscrm.CacheManager.registerClass("Mscrm.CacheManager", Mscrm.CrmUIComponent);
Mscrm.ContentPanel.registerClass("Mscrm.ContentPanel", Mscrm.CrmUIControl);
Mscrm.HistoryManager.registerClass("Mscrm.HistoryManager", Mscrm.CrmUIControl);
Mscrm.NavigationManager.registerClass("Mscrm.NavigationManager", Mscrm.CrmUIComponent);
Mscrm.RecentlyViewed.registerClass("Mscrm.RecentlyViewed", Mscrm.CrmUIControl);
Mscrm.CacheManager.DefaultCacheScope = Mscrm.CacheScope.Local;
Mscrm.RecentlyViewed.$1B = -1;
Mscrm.RecentlyViewed.innerMenuWidth = 210;
Mscrm.RecentlyViewed.separatorWidth = 5;
Mscrm.RecentlyViewed.menuWidth = 422;
Mscrm.RecentlyViewed.minMenuHeight = 200;
Mscrm.RecentlyViewed.contextMenuWidth = 200;
function MainAspxPageOnLoad() {
    var isOutlookClient = isOutlookHostedWindow();
    if (!isOutlookClient && window.location.pathname.toUpperCase().endsWith("MAIN.ASPX") >= 0) {
        var mainPage = false;
        if (window.location.search.length == 0)
            mainPage = true;
        else {
            var uri = Mscrm.CrmUri.create(window.location.href),
			pageType = uri.get_query()["pageType"];
            if (IsNull(pageType) || pageType.length == 0)
                mainPage = true
        }
        mainPage && RegisterAuthExpiryReminder()
    }
    !isOutlookClient && (window.location.pathname.toUpperCase().endsWith("/MAIN.ASPX") >= 0 && window.location.search.length == 0) && registerReminder();
    _bInvalidSitemap && openErrorDlg("0x8063110e")
}
function registerReminder() {
    setTimeout(openReminder, 0)
}
function openReminder() {
    _bShowTrialReminder && openStdDlg(Mscrm.CrmUri.create("/tools/trial/trialReminder.aspx"), null, 560, 300);
    _bShowPendingEmailReminder && openStdDlg(Mscrm.CrmUri.create("/Activities/email/dlg_pendingEmailReminder.aspx"), null, 560, 300);
    if (_bShowPendingApprovalReminder) {
        var callbackRef = Mscrm.Utilities.createCallbackFunctionObject("pendingEmailApprovalAction", this),
		returnValue = openStdDlgWithCallback(Mscrm.CrmUri.create("/Activities/email/dlg_pendingEmailApproval.aspx"), null, 560, 300, callbackRef);
        Mscrm.Utilities.isModalDialogSupported() && pendingEmailApprovalAction(returnValue)
    }
}
function pendingEmailApprovalAction(returnValue) {
    if (typeof returnValue != "undefined" && returnValue != "undefined" && returnValue != null) {
        var url = Mscrm.CrmUri.create(returnValue);
        openStdDlg(url, null, 0, 0)
    }
}
var _authTimeoutIds = [];
function RegisterAuthExpiryReminder(enabled, timer) {
    if (IsNull(enabled) == false)
        REMIND_AUTH_EXPIRATION = enabled;
    if (IsNull(timer) == false)
        AUTH_EXPIRATION_REMINDER_TIME_IN_MINUTES = timer;
    if (IsNull(REMIND_AUTH_EXPIRATION) || REMIND_AUTH_EXPIRATION == false)
        return;
    if (IsNull(AUTH_EXPIRATION_REMINDER_TIME_IN_MINUTES) || AUTH_EXPIRATION_REMINDER_TIME_IN_MINUTES == 0)
        return;
    (typeof getGlobalAuthReminderTime() == "undefined" || getGlobalAuthReminderTime() < (new Date).getTime() + AUTH_EXPIRATION_REMINDER_TIME_IN_MINUTES * 60 * 1e3) && setGlobalAuthReminderTime((new Date).getTime() + AUTH_EXPIRATION_REMINDER_TIME_IN_MINUTES * 60 * 1e3);
    ReInitializeAuthExpireReminder()
}
function getGlobalAuthReminderTime() {
    return window.self.masterWindow().globalAuthReminderTime
}
function setGlobalAuthReminderTime(time) {
    window.self.masterWindow().globalAuthReminderTime = time
}
function getGlobalReminderLastRespondedTime() {
    return window.self.masterWindow().globalReminderLastClickedTime
}
function setGlobalReminderLastRespondedTime(time) {
    window.self.masterWindow().globalReminderLastClickedTime = time
}
function IsActionMsgShown(divName) {
    var dark = document.getElementById(divName + "Container");
    return !IsNull(dark) && dark.style.display != "none"
}
function CheckReminderState() {
    if (IsActionMsgShown("reAuthObject")) {
        var globalReminderLastRespondedTime = getGlobalReminderLastRespondedTime();
        if (typeof globalReminderLastRespondedTime != "undefined" && globalReminderLastRespondedTime > reminderOpenedTime)
            HideActionMsg();
        else
            window.setTimeout("CheckReminderState()", 50)
    }
}
function ReInitializeAuthExpireReminder() {
    for (var i = 0; i < _authTimeoutIds.length; i++)
        clearTimeout(_authTimeoutIds[i]);
    authReminderTimeOnDialogShow = getGlobalAuthReminderTime();
    var timeoutId = window.setTimeout("AuthExpiryReminder()", getGlobalAuthReminderTime() - (new Date).getTime());
    _authTimeoutIds.push(timeoutId)
}
function AuthExpiryReminder() {
    if (authReminderTimeOnDialogShow >= getGlobalAuthReminderTime()) {
        showAuthDiv(true, "reAuthObject", {
            zindex: "1000",
            bgcolor: "#130E19"
        }, DIALOG_REAUTH_DESCRIPTION, "<table cellspacing='0' cellpadding='0' width='100%' height='100%'><tr><td width='70%'></td><td class='ms-crm-ReAuth-Buttons' style='" + CrmEncodeDecode.CrmHtmlAttributeEncode(getPaddingDirection()) + ":7px;'><button id='_sign_in' onclick='signin()'  class='ms-crm-Button'>" + CrmEncodeDecode.CrmHtmlEncode(DIALOG_REAUTH_SIGNIN_BUTTON) + "</button></td><td class='ms-crm-ReAuth-Buttons'><button id='_cancel' onclick='cancelSignin()'  class='ms-crm-Button'>" + CrmEncodeDecode.CrmHtmlEncode(DIALOG_REAUTH_CANCEL_BUTTON) + "</button></td><td style='" + CrmEncodeDecode.CrmHtmlAttributeEncode(getPaddingDirection()) + ":14px;'><div>&nbsp;</div></td></tr></table>", "ShowSessionExpired()");
        reminderOpenedTime = (new Date).getTime();
        CheckReminderState()
    } else
        ReInitializeAuthExpireReminder()
}
function ShowSessionExpired() {
    if ((new Date).getTime() < getGlobalAuthReminderTime() + (AUTH_EXPIRATION_AFTER_REMINDER_IN_MINUTES - 1) * 60 * 1e3) {
        ReInitializeAuthExpireReminder();
        return
    }
    HideActionMsg();
    Mscrm.PageManager.get_instance().raiseEvent(Mscrm.ScriptEvents.SignOutRequested, null);
    showAuthDiv(true, "sessionExpiredObject", {
        zindex: "1000",
        bgcolor: "#130E19"
    }, DIALOG_REAUTH_EXPIRED_DESCRIPTION, "<table cellspacing='0' cellpadding='0' width='100%' height='100%'><tr><td width='80%'></td><td class='ms-crm-ReAuth-Buttons'><button id='_close_session' onclick='closeSession()' class='ms-crm-Button'>" + CrmEncodeDecode.CrmHtmlEncode(DIALOG_REAUTH_CLOSE_BUTTON) + "</button></td><td style='" + CrmEncodeDecode.CrmHtmlAttributeEncode(getPaddingDirection()) + ":14px;'><div>&nbsp;</div></td></tr></table>")
}
function getPaddingDirection() {
    if (LOCID_UI_DIR == "RTL")
        return "padding-left";
    else
        return "padding-right"
}
function cancelSignin() {
    HideActionMsg();
    setGlobalReminderLastRespondedTime((new Date).getTime())
}
function signin() {
    var baseUri = Mscrm.CrmUri.create("/_root/dlg_prompt_reauthenticate.aspx");
    baseUri.get_query()["user_lcid"] = USER_LANGUAGE_CODE;
    baseUri.get_query()["reauth"] = true;
    var oUrl = baseUri.toString(),
	window = openStdWin(oUrl, null, 980, 520, true);
    HideActionMsg();
    setGlobalReminderLastRespondedTime((new Date).getTime())
}
function HideActionMsg() {
    showAuthDiv(false, "reAuthObject")
}
function closeSession() {
    showAuthDiv(false, "sessionExpiredObject");
    Mscrm.PageManager.get_instance().raiseEvent(Mscrm.ScriptEvents.SignOutRequested, null);
    var uri = Mscrm.CrmUri.create(window.location.href);
    uri.appendToQuery("signout=2");
    if (IS_LIVE)
        window.location.href = uri.toString();
    else {
        var current = window.parent;
        while (current && current != window.parent);
        if (current)
            current.location.href = uri.toString()
    }
}
function showAuthDiv(vis, divName, options, message, buttons, timerFunction) {
    var options = options || {},
	zindex = options.zindex || 50,
	opacity = 75,
	dark = document.getElementById(divName + "Container");
    if (!dark) {
        var tbody = document.getElementsByTagName("body")[0],
		tContainer = document.createElement("div");
        tContainer.id = divName + "Container";
        tContainer.style.display = "none";
        tbody.appendChild(tContainer);
        var tBackgroundNode = document.createElement("div");
        tBackgroundNode.id = divName + "Background";
        tBackgroundNode.className = "ms-crm-ReAuth-Background";
        tBackgroundNode.style.zIndex = zindex + 1;
        XUI.Html.SetOpacity(tBackgroundNode, opacity);
        tContainer.appendChild(tBackgroundNode);
        var tnode = document.createElement("div");
        tnode.id = divName;
        tnode.className = "ms-crm-ReAuth-Dialog";
        tnode.style.zIndex = zindex + 2;
        tnode.style.width = "420px";
        tnode.style.height = "179px";
        tbody.appendChild(tnode);
        var pageWidth = window.innerWidth,
		pageHeight = window.innerHeight;
        if (typeof pageWidth != "number") {
            pageWidth = document.body.clientWidth;
            pageHeight = document.body.clientHeight
        }
        var divWidth = XUI.Html.GetComputedStyle(tnode, "width").replace("px", ""),
		divHeight = XUI.Html.GetComputedStyle(tnode, "height").replace("px", ""),
		divLeft = (pageWidth - divWidth) / 2,
		divTop = (pageHeight - divHeight) / 2;
        tnode.style.left = divLeft + "px";
        tnode.style.top = divTop + "px";
        var ror1Div = document.createElement("div");
        ror1Div.id = divName + "Row1";
        ror1Div.style.height = "65px";
        ror1Div.className = "ms-crm-Dialog-Header";
        ror1Div.style.verticalAlign = "middle";
        var tHeaderDiv = document.createElement("div");
        tHeaderDiv.className = "ms-crm-Dialog-Header-Desc";
        tHeaderDiv.innerHTML = "<table cellspacing='0' cellpadding='0' width='100%' height='100%'><tr><td class='ms-crm-ReAuth-Image' ><img alt='warning' src='/_imgs/error/notif_icn_warn.png' /></td><td class='ms-crm-ReAuth-Message' style='" + CrmEncodeDecode.CrmHtmlAttributeEncode(getPaddingDirection()) + ":7px;'>" + message + "</td></tr></table>";
        tHeaderDiv.style.height = "100%";
        ror1Div.appendChild(tHeaderDiv);
        tnode.appendChild(ror1Div);
        var ror2Div = document.createElement("div");
        ror2Div.id = divName + "Row2";
        ror2Div.style.height = "66px";
        ror2Div.className = "ms-crm-Dialog-Header";
        ror2Div.style.borderBottom = "#a4abb2 1px solid";
        tnode.appendChild(ror2Div);
        var ror3Div = document.createElement("div");
        ror3Div.id = divName + "Row3";
        ror3Div.style.height = "42px";
        ror3Div.className = "ms-crm-Dialog-Footer ms-crm-Dialog-Header";
        ror3Div.style.textAlign = "center";
        ror3Div.style.verticalAlign = "middle";
        ror3Div.innerHTML = buttons;
        tnode.appendChild(ror3Div);
        tContainer.appendChild(tnode);
        dark = document.getElementById(divName + "Container")
    }
    if (vis) {
        dark.style.width = "100%";
        dark.style.height = "100%";
        dark.style.display = "block";
        if (timerFunction) {
            var iTimer = (AUTH_EXPIRATION_AFTER_REMINDER_IN_MINUTES - 1) * 60 * 1e3;
            if (iTimer > 0) {
                var timeoutId = window.setTimeout(timerFunction, iTimer);
                _authTimeoutIds.push(timeoutId)
            }
        }
    } else
        dark.style.display = "none"
}
function goTo(sAreaId, sGroupId, sSubAreaId) {
    var parameters = {};
    parameters["areaId"] = sAreaId;
    parameters["subAreaId"] = sSubAreaId;
    parameters["groupId"] = sGroupId;
    Mscrm.PageManager.get_instance().raiseEvent(Mscrm.ScriptEvents.AppNavGoTo, parameters)
}
