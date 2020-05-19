/*! For license information please see 2.c26c3b47.js.LICENSE */
(window.webpackJsonp = window.webpackJsonp || []).push([[2], {
    182: function(e, t, n) {
        var a;
        !function() {
            "use strict";
            var n = {}.hasOwnProperty;
            function r() {
                for (var e = [], t = 0; t < arguments.length; t++) {
                    var a = arguments[t];
                    if (a) {
                        var i = typeof a;
                        if ("string" === i || "number" === i)
                            e.push(a);
                        else if (Array.isArray(a) && a.length) {
                            var o = r.apply(null, a);
                            o && e.push(o)
                        } else if ("object" === i)
                            for (var s in a)
                                n.call(a, s) && a[s] && e.push(s)
                    }
                }
                return e.join(" ")
            }
            e.exports ? (r.default = r,
            e.exports = r) : void 0 === (a = function() {
                return r
            }
            .apply(t, [])) || (e.exports = a)
        }()
    },
    190: function(e, t, n) {
        "use strict";
        var a = n(0)
          , r = n.n(a)
          , i = n(189)
          , o = n(181)
          , s = n(184)
          , l = n(1)
          , c = n(9)
          , u = n(185)
          , d = n(182)
          , p = n.n(d)
          , f = n(191)
          , g = (n(118),
        !1)
          , h = function(e) {
            var t = Object(a.useRef)(!1)
              , i = Object(a.useRef)(null)
              , s = Object(o.a)().siteConfig
              , l = (void 0 === s ? {} : s).themeConfig.algolia
              , c = Object(f.b)()
              , u = function() {
                t.current || (window.docsearch({
                    appId: l.appId,
                    apiKey: l.apiKey,
                    indexName: l.indexName,
                    inputSelector: "#search_input_react",
                    algoliaOptions: l.algoliaOptions,
                    handleSelected: function(e, t, n) {
                        var a = document.createElement("a");
                        a.href = n.url;
                        var r = "#__docusaurus" === a.hash ? "" + a.pathname : "" + a.pathname + a.hash;
                        c.push(r)
                    }
                }),
                t.current = !0)
            }
              , d = function() {
                g ? u() : n.e(52).then(n.t.bind(null, 275, 7)).then((function(e) {
                    g = !0,
                    window.docsearch = e.default,
                    u()
                }
                ))
            }
              , h = Object(a.useCallback)((function(t) {
                i.current.contains(t.target) || i.current.focus(),
                e.handleSearchBarToggle(!e.isSearchBarExpanded)
            }
            ), [e.isSearchBarExpanded]);
            return r.a.createElement("div", {
                className: "navbar__search",
                key: "search-box"
            }, r.a.createElement("span", {
                "aria-label": "expand searchbar",
                role: "button",
                className: p()("search-icon", {
                    "search-icon-hidden": e.isSearchBarExpanded
                }),
                onClick: h,
                onKeyDown: h,
                tabIndex: 0
            }), r.a.createElement("input", {
                id: "search_input_react",
                type: "search",
                placeholder: "Search",
                "aria-label": "Search",
                className: p()("navbar__search-input", {
                    "search-bar-expanded": e.isSearchBarExpanded
                }, {
                    "search-bar": !e.isSearchBarExpanded
                }),
                onClick: d,
                onMouseOver: d,
                onFocus: h,
                onBlur: h,
                ref: i
            }))
        }
          , m = n(197)
          , b = n.n(m)
          , y = n(119)
          , v = n.n(y)
          , E = function() {
            return r.a.createElement("span", {
                className: p()(v.a.toggle, v.a.moon)
            })
        }
          , k = function() {
            return r.a.createElement("span", {
                className: p()(v.a.toggle, v.a.sun)
            })
        }
          , S = function(e) {
            var t = Object(o.a)().isClient;
            return r.a.createElement(b.a, Object(l.a)({
                disabled: !t,
                icons: {
                    checked: r.a.createElement(E, null),
                    unchecked: r.a.createElement(k, null)
                }
            }, e))
        }
          , w = function() {
            var e = a.useState("undefined" != typeof document ? document.querySelector("html").getAttribute("data-theme") : "")
              , t = e[0]
              , n = e[1];
            return a.useEffect((function() {
                try {
                    n(localStorage.getItem("theme"))
                } catch (e) {
                    console.error(e)
                }
            }
            ), [n]),
            [t, a.useCallback((function(e) {
                try {
                    localStorage.setItem("theme", e),
                    n(e)
                } catch (t) {
                    console.error(t)
                }
            }
            ), [n])]
        }
          , _ = n(120)
          , A = n.n(_);
        function T(e) {
            var t = e.to
              , n = e.href
              , a = e.label
              , i = (e.position,
            Object(c.a)(e, ["to", "href", "label", "position"]))
              , o = Object(s.a)(t);
            return r.a.createElement(u.a, Object(l.a)({
                className: "navbar__item navbar__link"
            }, n ? {
                target: "_blank",
                rel: "noopener noreferrer",
                href: n
            } : {
                activeClassName: "navbar__link--active",
                to: o
            }, i), a)
        }
        var O = function() {
            var e = Object(o.a)()
              , t = Object(a.useState)(!1)
              , n = t[0]
              , c = t[1]
              , d = Object(a.useState)(!1)
              , f = d[0]
              , g = d[1]
              , m = w()
              , b = m[0]
              , y = m[1]
              , v = e.siteConfig
              , E = void 0 === v ? {} : v
              , k = E.baseUrl
              , _ = E.themeConfig
              , O = void 0 === _ ? {} : _
              , x = O.navbar
              , N = void 0 === x ? {} : x
              , I = O.disableDarkMode
              , R = void 0 !== I && I
              , F = N.title
              , L = N.logo
              , C = void 0 === L ? {} : L
              , j = N.links
              , D = void 0 === j ? [] : j
              , $ = Object(a.useCallback)((function() {
                c(!0)
            }
            ), [c])
              , P = Object(a.useCallback)((function() {
                c(!1)
            }
            ), [c])
              , B = Object(a.useCallback)((function(e) {
                return y(e.target.checked ? "dark" : "")
            }
            ), [y])
              , M = Object(s.a)(C.src);
            return r.a.createElement(r.a.Fragment, null, r.a.createElement(i.a, null, r.a.createElement("html", {
                lang: "en",
                "data-theme": b
            })), r.a.createElement("nav", {
                className: p()("navbar", "navbar--light", "navbar--fixed-top", {
                    "navbar-sidebar--show": n
                })
            }, r.a.createElement("div", {
                className: "navbar__inner"
            }, r.a.createElement("div", {
                className: "navbar__items"
            }, r.a.createElement("div", {
                "aria-label": "Navigation bar toggle",
                className: "navbar__toggle",
                role: "button",
                tabIndex: 0,
                onClick: $,
                onKeyDown: $
            }, r.a.createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "30",
                height: "30",
                viewBox: "0 0 30 30",
                role: "img",
                focusable: "false"
            }, r.a.createElement("title", null, "Menu"), r.a.createElement("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeMiterlimit: "10",
                strokeWidth: "2",
                d: "M4 7h22M4 15h22M4 23h22"
            }))), r.a.createElement(u.a, {
                className: "navbar__brand",
                to: k
            }, null != C && r.a.createElement("img", {
                className: "navbar__logo",
                src: M,
                alt: C.alt
            }), null != F && r.a.createElement("strong", {
                className: f ? A.a.hideLogoText : ""
            }, F)), D.filter((function(e) {
                return "right" !== e.position
            }
            )).map((function(e, t) {
                return r.a.createElement(T, Object(l.a)({}, e, {
                    key: t
                }))
            }
            ))), r.a.createElement("div", {
                className: "navbar__items navbar__items--right"
            }, D.filter((function(e) {
                return "right" === e.position
            }
            )).map((function(e, t) {
                return r.a.createElement(T, Object(l.a)({}, e, {
                    key: t
                }))
            }
            )), !R && r.a.createElement(S, {
                className: A.a.displayOnlyInLargeViewport,
                "aria-label": "Dark mode toggle",
                checked: "dark" === b,
                onChange: B
            }), r.a.createElement(h, {
                handleSearchBarToggle: g,
                isSearchBarExpanded: f
            }))), r.a.createElement("div", {
                role: "presentation",
                className: "navbar-sidebar__backdrop",
                onClick: function() {
                    c(!1)
                }
            }), r.a.createElement("div", {
                className: "navbar-sidebar"
            }, r.a.createElement("div", {
                className: "navbar-sidebar__brand"
            }, r.a.createElement(u.a, {
                className: "navbar__brand",
                onClick: P,
                to: k
            }, null != C && r.a.createElement("img", {
                className: "navbar__logo",
                src: M,
                alt: C.alt
            }), null != F && r.a.createElement("strong", null, F)), !R && n && r.a.createElement(S, {
                "aria-label": "Dark mode toggle in sidebar",
                checked: "dark" === b,
                onChange: B
            })), r.a.createElement("div", {
                className: "navbar-sidebar__items"
            }, r.a.createElement("div", {
                className: "menu"
            }, r.a.createElement("ul", {
                className: "menu__list"
            }, D.map((function(e, t) {
                return r.a.createElement("li", {
                    className: "menu__list-item",
                    key: t
                }, r.a.createElement(T, Object(l.a)({
                    className: "menu__link"
                }, e, {
                    onClick: P
                })))
            }
            ))))))))
        }
          , x = n(121)
          , N = n.n(x);
        function I(e) {
            var t = e.to
              , n = e.href
              , a = e.label
              , i = Object(c.a)(e, ["to", "href", "label"])
              , o = Object(s.a)(t);
            return r.a.createElement(u.a, Object(l.a)({
                className: "footer__link-item"
            }, n ? {
                target: "_blank",
                rel: "noopener noreferrer",
                href: n
            } : {
                to: o
            }, i), a)
        }
        var R = function(e) {
            var t = e.url
              , n = e.alt;
            return r.a.createElement("img", {
                className: "footer__logo",
                alt: n,
                src: t
            })
        };
        var F = function() {
            var e = Object(o.a)().siteConfig
              , t = (void 0 === e ? {} : e).themeConfig
              , n = (void 0 === t ? {} : t).footer
              , a = n || {}
              , i = a.copyright
              , l = a.links
              , c = void 0 === l ? [] : l
              , u = a.logo
              , d = void 0 === u ? {} : u
              , f = Object(s.a)(d.src);
            return n ? r.a.createElement("footer", {
                className: p()("footer", {
                    "footer--dark": "dark" === n.style
                })
            }, r.a.createElement("div", {
                className: "container"
            }, c && c.length > 0 && r.a.createElement("div", {
                className: "row footer__links"
            }, c.map((function(e, t) {
                return r.a.createElement("div", {
                    key: t,
                    className: "col footer__col"
                }, null != e.title ? r.a.createElement("h4", {
                    className: "footer__title"
                }, e.title) : null, null != e.items && Array.isArray(e.items) && e.items.length > 0 ? r.a.createElement("ul", {
                    className: "footer__items"
                }, e.items.map((function(e, t) {
                    return e.html ? r.a.createElement("div", {
                        key: t,
                        dangerouslySetInnerHTML: {
                            __html: e.html
                        }
                    }) : r.a.createElement("li", {
                        key: e.href || e.to,
                        className: "footer__item"
                    }, r.a.createElement(I, e))
                }
                ))) : null)
            }
            ))), (d || i) && r.a.createElement("div", {
                className: "text--center"
            }, d && d.src && r.a.createElement("div", {
                className: "margin-bottom--sm"
            }, d.href ? r.a.createElement("a", {
                href: d.href,
                target: "_blank",
                rel: "noopener noreferrer",
                className: N.a.footerLogoLink
            }, r.a.createElement(R, {
                alt: d.alt,
                url: f
            })) : r.a.createElement(R, {
                alt: d.alt,
                url: f
            })), i))) : null
        };
        n(122);
        t.a = function(e) {
            var t = Object(o.a)().siteConfig
              , n = void 0 === t ? {} : t
              , a = n.favicon
              , l = n.tagline
              , c = n.title
              , u = n.themeConfig.image
              , d = n.url
              , p = e.children
              , f = e.title
              , g = e.noFooter
              , h = e.description
              , m = e.image
              , b = e.keywords
              , y = e.permalink
              , v = e.version
              , E = f || c + " \xb7 " + l
              , k = m || u
              , S = d + Object(s.a)(k)
              , w = Object(s.a)(a);
            return r.a.createElement(r.a.Fragment, null, r.a.createElement(i.a, null, r.a.createElement("meta", {
                httpEquiv: "x-ua-compatible",
                content: "ie=edge"
            }), E && r.a.createElement("title", null, E), E && r.a.createElement("meta", {
                property: "og:title",
                content: E
            }), a && r.a.createElement("link", {
                rel: "shortcut icon",
                href: w
            }), h && r.a.createElement("meta", {
                name: "description",
                content: h
            }), h && r.a.createElement("meta", {
                property: "og:description",
                content: h
            }), v && r.a.createElement("meta", {
                name: "docsearch:version",
                content: v
            }), b && b.length && r.a.createElement("meta", {
                name: "keywords",
                content: b.join(",")
            }), k && r.a.createElement("meta", {
                property: "og:image",
                content: S
            }), k && r.a.createElement("meta", {
                property: "twitter:image",
                content: S
            }), k && r.a.createElement("meta", {
                name: "twitter:image:alt",
                content: "Image for " + E
            }), y && r.a.createElement("meta", {
                property: "og:url",
                content: d + y
            }), r.a.createElement("meta", {
                name: "twitter:card",
                content: "summary"
            })), r.a.createElement(O, null), r.a.createElement("div", {
                className: "main-wrapper"
            }, p), !g && r.a.createElement(F, null))
        }
    },
    191: function(e, t, n) {
        "use strict";
        var a = n(34);
        n.d(t, "a", (function() {
            return a.c
        }
        )),
        n.d(t, "b", (function() {
            return a.d
        }
        ))
    },
    197: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                    Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
        }
          , r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value"in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                t
            }
        }()
          , i = n(0)
          , o = p(i)
          , s = p(n(182))
          , l = p(n(11))
          , c = p(n(198))
          , u = p(n(199))
          , d = n(200);
        function p(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var f = function(e) {
            function t(e) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.handleClick = n.handleClick.bind(n),
                n.handleTouchStart = n.handleTouchStart.bind(n),
                n.handleTouchMove = n.handleTouchMove.bind(n),
                n.handleTouchEnd = n.handleTouchEnd.bind(n),
                n.handleFocus = n.handleFocus.bind(n),
                n.handleBlur = n.handleBlur.bind(n),
                n.previouslyChecked = !(!e.checked && !e.defaultChecked),
                n.state = {
                    checked: !(!e.checked && !e.defaultChecked),
                    hasFocus: !1
                },
                n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, e),
            r(t, [{
                key: "componentDidUpdate",
                value: function(e) {
                    e.checked !== this.props.checked && this.setState({
                        checked: !!this.props.checked
                    })
                }
            }, {
                key: "handleClick",
                value: function(e) {
                    var t = this.input;
                    if (e.target !== t && !this.moved)
                        return this.previouslyChecked = t.checked,
                        e.preventDefault(),
                        t.focus(),
                        void t.click();
                    var n = this.props.hasOwnProperty("checked") ? this.props.checked : t.checked;
                    this.setState({
                        checked: n
                    })
                }
            }, {
                key: "handleTouchStart",
                value: function(e) {
                    this.startX = (0,
                    d.pointerCoord)(e).x,
                    this.activated = !0
                }
            }, {
                key: "handleTouchMove",
                value: function(e) {
                    if (this.activated && (this.moved = !0,
                    this.startX)) {
                        var t = (0,
                        d.pointerCoord)(e).x;
                        this.state.checked && t + 15 < this.startX ? (this.setState({
                            checked: !1
                        }),
                        this.startX = t,
                        this.activated = !0) : t - 15 > this.startX && (this.setState({
                            checked: !0
                        }),
                        this.startX = t,
                        this.activated = t < this.startX + 5)
                    }
                }
            }, {
                key: "handleTouchEnd",
                value: function(e) {
                    if (this.moved) {
                        var t = this.input;
                        if (e.preventDefault(),
                        this.startX) {
                            var n = (0,
                            d.pointerCoord)(e).x;
                            !0 === this.previouslyChecked && this.startX + 4 > n ? this.previouslyChecked !== this.state.checked && (this.setState({
                                checked: !1
                            }),
                            this.previouslyChecked = this.state.checked,
                            t.click()) : this.startX - 4 < n && this.previouslyChecked !== this.state.checked && (this.setState({
                                checked: !0
                            }),
                            this.previouslyChecked = this.state.checked,
                            t.click()),
                            this.activated = !1,
                            this.startX = null,
                            this.moved = !1
                        }
                    }
                }
            }, {
                key: "handleFocus",
                value: function(e) {
                    var t = this.props.onFocus;
                    t && t(e),
                    this.setState({
                        hasFocus: !0
                    })
                }
            }, {
                key: "handleBlur",
                value: function(e) {
                    var t = this.props.onBlur;
                    t && t(e),
                    this.setState({
                        hasFocus: !1
                    })
                }
            }, {
                key: "getIcon",
                value: function(e) {
                    var n = this.props.icons;
                    return n ? void 0 === n[e] ? t.defaultProps.icons[e] : n[e] : null
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.className
                      , r = (t.icons,
                    function(e, t) {
                        var n = {};
                        for (var a in e)
                            t.indexOf(a) >= 0 || Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
                        return n
                    }(t, ["className", "icons"]))
                      , i = (0,
                    s.default)("react-toggle", {
                        "react-toggle--checked": this.state.checked,
                        "react-toggle--focus": this.state.hasFocus,
                        "react-toggle--disabled": this.props.disabled
                    }, n);
                    return o.default.createElement("div", {
                        className: i,
                        onClick: this.handleClick,
                        onTouchStart: this.handleTouchStart,
                        onTouchMove: this.handleTouchMove,
                        onTouchEnd: this.handleTouchEnd
                    }, o.default.createElement("div", {
                        className: "react-toggle-track"
                    }, o.default.createElement("div", {
                        className: "react-toggle-track-check"
                    }, this.getIcon("checked")), o.default.createElement("div", {
                        className: "react-toggle-track-x"
                    }, this.getIcon("unchecked"))), o.default.createElement("div", {
                        className: "react-toggle-thumb"
                    }), o.default.createElement("input", a({}, r, {
                        ref: function(t) {
                            e.input = t
                        },
                        onFocus: this.handleFocus,
                        onBlur: this.handleBlur,
                        className: "react-toggle-screenreader-only",
                        type: "checkbox"
                    })))
                }
            }]),
            t
        }(i.PureComponent);
        t.default = f,
        f.displayName = "Toggle",
        f.defaultProps = {
            icons: {
                checked: o.default.createElement(c.default, null),
                unchecked: o.default.createElement(u.default, null)
            }
        },
        f.propTypes = {
            checked: l.default.bool,
            disabled: l.default.bool,
            defaultChecked: l.default.bool,
            onChange: l.default.func,
            onFocus: l.default.func,
            onBlur: l.default.func,
            className: l.default.string,
            name: l.default.string,
            value: l.default.string,
            id: l.default.string,
            "aria-labelledby": l.default.string,
            "aria-label": l.default.string,
            icons: l.default.oneOfType([l.default.bool, l.default.shape({
                checked: l.default.node,
                unchecked: l.default.node
            })])
        }
    },
    198: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a, r = n(0), i = (a = r) && a.__esModule ? a : {
            default: a
        };
        t.default = function() {
            return i.default.createElement("svg", {
                width: "14",
                height: "11",
                viewBox: "0 0 14 11"
            }, i.default.createElement("title", null, "switch-check"), i.default.createElement("path", {
                d: "M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",
                fill: "#fff",
                fillRule: "evenodd"
            }))
        }
    },
    199: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a, r = n(0), i = (a = r) && a.__esModule ? a : {
            default: a
        };
        t.default = function() {
            return i.default.createElement("svg", {
                width: "10",
                height: "10",
                viewBox: "0 0 10 10"
            }, i.default.createElement("title", null, "switch-x"), i.default.createElement("path", {
                d: "M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",
                fill: "#fff",
                fillRule: "evenodd"
            }))
        }
    },
    200: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.pointerCoord = function(e) {
            if (e) {
                var t = e.changedTouches;
                if (t && t.length > 0) {
                    var n = t[0];
                    return {
                        x: n.clientX,
                        y: n.clientY
                    }
                }
                var a = e.pageX;
                if (void 0 !== a)
                    return {
                        x: a,
                        y: e.pageY
                    }
            }
            return {
                x: 0,
                y: 0
            }
        }
    },
    201: function(e, t, n) {
        "use strict";
        var a = n(8)
          , r = n(50)
          , i = n(35)
          , o = n(36)
          , s = n(68)
          , l = n(69)
          , c = Math.max
          , u = Math.min
          , d = Math.floor
          , p = /\$([$&`']|\d\d?|<[^>]*>)/g
          , f = /\$([$&`']|\d\d?)/g;
        n(70)("replace", 2, (function(e, t, n, g) {
            return [function(a, r) {
                var i = e(this)
                  , o = null == a ? void 0 : a[t];
                return void 0 !== o ? o.call(a, i, r) : n.call(String(i), a, r)
            }
            , function(e, t) {
                var r = g(n, e, this, t);
                if (r.done)
                    return r.value;
                var d = a(e)
                  , p = String(this)
                  , f = "function" == typeof t;
                f || (t = String(t));
                var m = d.global;
                if (m) {
                    var b = d.unicode;
                    d.lastIndex = 0
                }
                for (var y = []; ; ) {
                    var v = l(d, p);
                    if (null === v)
                        break;
                    if (y.push(v),
                    !m)
                        break;
                    "" === String(v[0]) && (d.lastIndex = s(p, i(d.lastIndex), b))
                }
                for (var E, k = "", S = 0, w = 0; w < y.length; w++) {
                    v = y[w];
                    for (var _ = String(v[0]), A = c(u(o(v.index), p.length), 0), T = [], O = 1; O < v.length; O++)
                        T.push(void 0 === (E = v[O]) ? E : String(E));
                    var x = v.groups;
                    if (f) {
                        var N = [_].concat(T, A, p);
                        void 0 !== x && N.push(x);
                        var I = String(t.apply(void 0, N))
                    } else
                        I = h(_, p, A, T, x, t);
                    A >= S && (k += p.slice(S, A) + I,
                    S = A + _.length)
                }
                return k + p.slice(S)
            }
            ];
            function h(e, t, a, i, o, s) {
                var l = a + e.length
                  , c = i.length
                  , u = f;
                return void 0 !== o && (o = r(o),
                u = p),
                n.call(s, u, (function(n, r) {
                    var s;
                    switch (r.charAt(0)) {
                    case "$":
                        return "$";
                    case "&":
                        return e;
                    case "`":
                        return t.slice(0, a);
                    case "'":
                        return t.slice(l);
                    case "<":
                        s = o[r.slice(1, -1)];
                        break;
                    default:
                        var u = +r;
                        if (0 === u)
                            return n;
                        if (u > c) {
                            var p = d(u / 10);
                            return 0 === p ? n : p <= c ? void 0 === i[p - 1] ? r.charAt(1) : i[p - 1] + r.charAt(1) : n
                        }
                        s = i[u - 1]
                    }
                    return void 0 === s ? "" : s
                }
                ))
            }
        }
        ))
    },
    219: function(e, t, n) {
        "use strict";
        var a, r, i, o = n(1), s = (n(225),
        n(226),
        n(201),
        n(227),
        n(0)), l = n.n(s), c = n(182), u = n.n(c), d = (a = 0,
        r = {
            util: {
                encode: function(e) {
                    return e instanceof i ? new i(e.type,r.util.encode(e.content),e.alias) : "Array" === r.util.type(e) ? e.map(r.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                },
                type: function(e) {
                    return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]
                },
                objId: function(e) {
                    return e.__id || Object.defineProperty(e, "__id", {
                        value: ++a
                    }),
                    e.__id
                },
                clone: function(e, t) {
                    var n = r.util.type(e);
                    switch (t = t || {},
                    n) {
                    case "Object":
                        if (t[r.util.objId(e)])
                            return t[r.util.objId(e)];
                        var a = {};
                        for (var i in t[r.util.objId(e)] = a,
                        e)
                            e.hasOwnProperty(i) && (a[i] = r.util.clone(e[i], t));
                        return a;
                    case "Array":
                        return t[r.util.objId(e)] ? t[r.util.objId(e)] : (a = [],
                        t[r.util.objId(e)] = a,
                        e.forEach((function(e, n) {
                            a[n] = r.util.clone(e, t)
                        }
                        )),
                        a)
                    }
                    return e
                }
            },
            languages: {
                extend: function(e, t) {
                    var n = r.util.clone(r.languages[e]);
                    for (var a in t)
                        n[a] = t[a];
                    return n
                },
                insertBefore: function(e, t, n, a) {
                    var i = (a = a || r.languages)[e];
                    if (2 == arguments.length) {
                        for (var o in n = arguments[1])
                            n.hasOwnProperty(o) && (i[o] = n[o]);
                        return i
                    }
                    var s = {};
                    for (var l in i)
                        if (i.hasOwnProperty(l)) {
                            if (l == t)
                                for (var o in n)
                                    n.hasOwnProperty(o) && (s[o] = n[o]);
                            s[l] = i[l]
                        }
                    return r.languages.DFS(r.languages, (function(t, n) {
                        n === a[e] && t != e && (this[t] = s)
                    }
                    )),
                    a[e] = s
                },
                DFS: function(e, t, n, a) {
                    for (var i in a = a || {},
                    e)
                        e.hasOwnProperty(i) && (t.call(e, i, e[i], n || i),
                        "Object" !== r.util.type(e[i]) || a[r.util.objId(e[i])] ? "Array" !== r.util.type(e[i]) || a[r.util.objId(e[i])] || (a[r.util.objId(e[i])] = !0,
                        r.languages.DFS(e[i], t, i, a)) : (a[r.util.objId(e[i])] = !0,
                        r.languages.DFS(e[i], t, null, a)))
                }
            },
            plugins: {},
            highlight: function(e, t, n) {
                var a = {
                    code: e,
                    grammar: t,
                    language: n
                };
                return a.tokens = r.tokenize(a.code, a.grammar),
                i.stringify(r.util.encode(a.tokens), a.language)
            },
            matchGrammar: function(e, t, n, a, i, o, s) {
                var l = r.Token;
                for (var c in n)
                    if (n.hasOwnProperty(c) && n[c]) {
                        if (c == s)
                            return;
                        var u = n[c];
                        u = "Array" === r.util.type(u) ? u : [u];
                        for (var d = 0; d < u.length; ++d) {
                            var p = u[d]
                              , f = p.inside
                              , g = !!p.lookbehind
                              , h = !!p.greedy
                              , m = 0
                              , b = p.alias;
                            if (h && !p.pattern.global) {
                                var y = p.pattern.toString().match(/[imuy]*$/)[0];
                                p.pattern = RegExp(p.pattern.source, y + "g")
                            }
                            p = p.pattern || p;
                            for (var v = a, E = i; v < t.length; E += t[v].length,
                            ++v) {
                                var k = t[v];
                                if (t.length > e.length)
                                    return;
                                if (!(k instanceof l)) {
                                    if (h && v != t.length - 1) {
                                        if (p.lastIndex = E,
                                        !(O = p.exec(e)))
                                            break;
                                        for (var S = O.index + (g ? O[1].length : 0), w = O.index + O[0].length, _ = v, A = E, T = t.length; _ < T && (A < w || !t[_].type && !t[_ - 1].greedy); ++_)
                                            S >= (A += t[_].length) && (++v,
                                            E = A);
                                        if (t[v]instanceof l)
                                            continue;
                                        x = _ - v,
                                        k = e.slice(E, A),
                                        O.index -= E
                                    } else {
                                        p.lastIndex = 0;
                                        var O = p.exec(k)
                                          , x = 1
                                    }
                                    if (O) {
                                        g && (m = O[1] ? O[1].length : 0),
                                        w = (S = O.index + m) + (O = O[0].slice(m)).length;
                                        var N = k.slice(0, S)
                                          , I = k.slice(w)
                                          , R = [v, x];
                                        N && (++v,
                                        E += N.length,
                                        R.push(N));
                                        var F = new l(c,f ? r.tokenize(O, f) : O,b,O,h);
                                        if (R.push(F),
                                        I && R.push(I),
                                        Array.prototype.splice.apply(t, R),
                                        1 != x && r.matchGrammar(e, t, n, v, E, !0, c),
                                        o)
                                            break
                                    } else if (o)
                                        break
                                }
                            }
                        }
                    }
            },
            hooks: {
                add: function() {}
            },
            tokenize: function(e, t, n) {
                var a = [e]
                  , i = t.rest;
                if (i) {
                    for (var o in i)
                        t[o] = i[o];
                    delete t.rest
                }
                return r.matchGrammar(e, a, t, 0, 0, !1),
                a
            }
        },
        (i = r.Token = function(e, t, n, a, r) {
            this.type = e,
            this.content = t,
            this.alias = n,
            this.length = 0 | (a || "").length,
            this.greedy = !!r
        }
        ).stringify = function(e, t, n) {
            if ("string" == typeof e)
                return e;
            if ("Array" === r.util.type(e))
                return e.map((function(n) {
                    return i.stringify(n, t, e)
                }
                )).join("");
            var a = {
                type: e.type,
                content: i.stringify(e.content, t, n),
                tag: "span",
                classes: ["token", e.type],
                attributes: {},
                language: t,
                parent: n
            };
            if (e.alias) {
                var o = "Array" === r.util.type(e.alias) ? e.alias : [e.alias];
                Array.prototype.push.apply(a.classes, o)
            }
            var s = Object.keys(a.attributes).map((function(e) {
                return e + '="' + (a.attributes[e] || "").replace(/"/g, "&quot;") + '"'
            }
            )).join(" ");
            return "<" + a.tag + ' class="' + a.classes.join(" ") + '"' + (s ? " " + s : "") + ">" + a.content + "</" + a.tag + ">"
        }
        ,
        r);
        d.languages.markup = {
            comment: /<!--[\s\S]*?-->/,
            prolog: /<\?[\s\S]+?\?>/,
            doctype: /<!DOCTYPE[\s\S]+?>/i,
            cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
            tag: {
                pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
                greedy: !0,
                inside: {
                    tag: {
                        pattern: /^<\/?[^\s>\/]+/i,
                        inside: {
                            punctuation: /^<\/?/,
                            namespace: /^[^\s>\/:]+:/
                        }
                    },
                    "attr-value": {
                        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
                        inside: {
                            punctuation: [/^=/, {
                                pattern: /^(\s*)["']|["']$/,
                                lookbehind: !0
                            }]
                        }
                    },
                    punctuation: /\/?>/,
                    "attr-name": {
                        pattern: /[^\s>\/]+/,
                        inside: {
                            namespace: /^[^\s>\/:]+:/
                        }
                    }
                }
            },
            entity: /&#?[\da-z]{1,8};/i
        },
        d.languages.markup.tag.inside["attr-value"].inside.entity = d.languages.markup.entity,
        d.hooks.add("wrap", (function(e) {
            "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
        }
        )),
        Object.defineProperty(d.languages.markup.tag, "addInlined", {
            value: function(e, t) {
                var n = {};
                n["language-" + t] = {
                    pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                    lookbehind: !0,
                    inside: d.languages[t]
                },
                n.cdata = /^<!\[CDATA\[|\]\]>$/i;
                var a = {
                    "included-cdata": {
                        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                        inside: n
                    }
                };
                a["language-" + t] = {
                    pattern: /[\s\S]+/,
                    inside: d.languages[t]
                };
                var r = {};
                r[e] = {
                    pattern: RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g, e), "i"),
                    lookbehind: !0,
                    greedy: !0,
                    inside: a
                },
                d.languages.insertBefore("markup", "cdata", r)
            }
        }),
        d.languages.xml = d.languages.extend("markup", {}),
        d.languages.html = d.languages.markup,
        d.languages.mathml = d.languages.markup,
        d.languages.svg = d.languages.markup,
        function(e) {
            var t = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b"
              , n = {
                environment: {
                    pattern: RegExp("\\$" + t),
                    alias: "constant"
                },
                variable: [{
                    pattern: /\$?\(\([\s\S]+?\)\)/,
                    greedy: !0,
                    inside: {
                        variable: [{
                            pattern: /(^\$\(\([\s\S]+)\)\)/,
                            lookbehind: !0
                        }, /^\$\(\(/],
                        number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/,
                        operator: /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
                        punctuation: /\(\(?|\)\)?|,|;/
                    }
                }, {
                    pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
                    greedy: !0,
                    inside: {
                        variable: /^\$\(|^`|\)$|`$/
                    }
                }, {
                    pattern: /\$\{[^}]+\}/,
                    greedy: !0,
                    inside: {
                        operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
                        punctuation: /[\[\]]/,
                        environment: {
                            pattern: RegExp("(\\{)" + t),
                            lookbehind: !0,
                            alias: "constant"
                        }
                    }
                }, /\$(?:\w+|[#?*!@$])/],
                entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/
            };
            e.languages.bash = {
                shebang: {
                    pattern: /^#!\s*\/.*/,
                    alias: "important"
                },
                comment: {
                    pattern: /(^|[^"{\\$])#.*/,
                    lookbehind: !0
                },
                "function-name": [{
                    pattern: /(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/,
                    lookbehind: !0,
                    alias: "function"
                }, {
                    pattern: /\b\w+(?=\s*\(\s*\)\s*\{)/,
                    alias: "function"
                }],
                "for-or-select": {
                    pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
                    alias: "variable",
                    lookbehind: !0
                },
                "assign-left": {
                    pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
                    inside: {
                        environment: {
                            pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + t),
                            lookbehind: !0,
                            alias: "constant"
                        }
                    },
                    alias: "variable",
                    lookbehind: !0
                },
                string: [{
                    pattern: /((?:^|[^<])<<-?\s*)(\w+?)\s*(?:\r?\n|\r)(?:[\s\S])*?(?:\r?\n|\r)\2/,
                    lookbehind: !0,
                    greedy: !0,
                    inside: n
                }, {
                    pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s*(?:\r?\n|\r)(?:[\s\S])*?(?:\r?\n|\r)\3/,
                    lookbehind: !0,
                    greedy: !0
                }, {
                    pattern: /(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\1)[^\\])*\1/,
                    greedy: !0,
                    inside: n
                }],
                environment: {
                    pattern: RegExp("\\$?" + t),
                    alias: "constant"
                },
                variable: n.variable,
                function: {
                    pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
                    lookbehind: !0
                },
                keyword: {
                    pattern: /(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,
                    lookbehind: !0
                },
                builtin: {
                    pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,
                    lookbehind: !0,
                    alias: "class-name"
                },
                boolean: {
                    pattern: /(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,
                    lookbehind: !0
                },
                "file-descriptor": {
                    pattern: /\B&\d\b/,
                    alias: "important"
                },
                operator: {
                    pattern: /\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/,
                    inside: {
                        "file-descriptor": {
                            pattern: /^\d/,
                            alias: "important"
                        }
                    }
                },
                punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
                number: {
                    pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
                    lookbehind: !0
                }
            };
            for (var a = ["comment", "function-name", "for-or-select", "assign-left", "string", "environment", "function", "keyword", "builtin", "boolean", "file-descriptor", "operator", "punctuation", "number"], r = n.variable[1].inside, i = 0; i < a.length; i++)
                r[a[i]] = e.languages.bash[a[i]];
            e.languages.shell = e.languages.bash
        }(d),
        d.languages.clike = {
            comment: [{
                pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
                lookbehind: !0
            }, {
                pattern: /(^|[^\\:])\/\/.*/,
                lookbehind: !0,
                greedy: !0
            }],
            string: {
                pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                greedy: !0
            },
            "class-name": {
                pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
                lookbehind: !0,
                inside: {
                    punctuation: /[.\\]/
                }
            },
            keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
            boolean: /\b(?:true|false)\b/,
            function: /\w+(?=\()/,
            number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
            operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
            punctuation: /[{}[\];(),.:]/
        },
        d.languages.c = d.languages.extend("clike", {
            "class-name": {
                pattern: /(\b(?:enum|struct)\s+)\w+/,
                lookbehind: !0
            },
            keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
            operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/,
            number: /(?:\b0x(?:[\da-f]+\.?[\da-f]*|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?)[ful]*/i
        }),
        d.languages.insertBefore("c", "string", {
            macro: {
                pattern: /(^\s*)#\s*[a-z]+(?:[^\r\n\\]|\\(?:\r\n|[\s\S]))*/im,
                lookbehind: !0,
                alias: "property",
                inside: {
                    string: {
                        pattern: /(#\s*include\s*)(?:<.+?>|("|')(?:\\?.)+?\2)/,
                        lookbehind: !0
                    },
                    directive: {
                        pattern: /(#\s*)\b(?:define|defined|elif|else|endif|error|ifdef|ifndef|if|import|include|line|pragma|undef|using)\b/,
                        lookbehind: !0,
                        alias: "keyword"
                    }
                }
            },
            constant: /\b(?:__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|stdin|stdout|stderr)\b/
        }),
        delete d.languages.c.boolean,
        d.languages.cpp = d.languages.extend("c", {
            "class-name": {
                pattern: /(\b(?:class|enum|struct)\s+)\w+/,
                lookbehind: !0
            },
            keyword: /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|class|compl|const|constexpr|const_cast|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|long|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
            number: {
                pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+\.?[\da-f']*|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+\.?[\d']*|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]*/i,
                greedy: !0
            },
            operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
            boolean: /\b(?:true|false)\b/
        }),
        d.languages.insertBefore("cpp", "string", {
            "raw-string": {
                pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
                alias: "string",
                greedy: !0
            }
        }),
        function(e) {
            var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
            e.languages.css = {
                comment: /\/\*[\s\S]*?\*\//,
                atrule: {
                    pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
                    inside: {
                        rule: /@[\w-]+/
                    }
                },
                url: {
                    pattern: RegExp("url\\((?:" + t.source + "|[^\n\r()]*)\\)", "i"),
                    inside: {
                        function: /^url/i,
                        punctuation: /^\(|\)$/
                    }
                },
                selector: RegExp("[^{}\\s](?:[^{};\"']|" + t.source + ")*?(?=\\s*\\{)"),
                string: {
                    pattern: t,
                    greedy: !0
                },
                property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
                important: /!important\b/i,
                function: /[-a-z0-9]+(?=\()/i,
                punctuation: /[(){};:,]/
            },
            e.languages.css.atrule.inside.rest = e.languages.css;
            var n = e.languages.markup;
            n && (n.tag.addInlined("style", "css"),
            e.languages.insertBefore("inside", "attr-value", {
                "style-attr": {
                    pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
                    inside: {
                        "attr-name": {
                            pattern: /^\s*style/i,
                            inside: n.tag.inside
                        },
                        punctuation: /^\s*=\s*['"]|['"]\s*$/,
                        "attr-value": {
                            pattern: /.+/i,
                            inside: e.languages.css
                        }
                    },
                    alias: "language-css"
                }
            }, n.tag))
        }(d),
        d.languages.css.selector = {
            pattern: d.languages.css.selector,
            inside: {
                "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
                "pseudo-class": /:[-\w]+/,
                class: /\.[-:.\w]+/,
                id: /#[-:.\w]+/,
                attribute: {
                    pattern: /\[(?:[^[\]"']|("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1)*\]/,
                    greedy: !0,
                    inside: {
                        punctuation: /^\[|\]$/,
                        "case-sensitivity": {
                            pattern: /(\s)[si]$/i,
                            lookbehind: !0,
                            alias: "keyword"
                        },
                        namespace: {
                            pattern: /^(\s*)[-*\w\xA0-\uFFFF]*\|(?!=)/,
                            lookbehind: !0,
                            inside: {
                                punctuation: /\|$/
                            }
                        },
                        attribute: {
                            pattern: /^(\s*)[-\w\xA0-\uFFFF]+/,
                            lookbehind: !0
                        },
                        value: [/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, {
                            pattern: /(=\s*)[-\w\xA0-\uFFFF]+(?=\s*$)/,
                            lookbehind: !0
                        }],
                        operator: /[|~*^$]?=/
                    }
                },
                "n-th": [{
                    pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
                    lookbehind: !0,
                    inside: {
                        number: /[\dn]+/,
                        operator: /[+-]/
                    }
                }, {
                    pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i,
                    lookbehind: !0
                }],
                punctuation: /[()]/
            }
        },
        d.languages.insertBefore("css", "property", {
            variable: {
                pattern: /(^|[^-\w\xA0-\uFFFF])--[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*/i,
                lookbehind: !0
            }
        }),
        d.languages.insertBefore("css", "function", {
            operator: {
                pattern: /(\s)[+\-*\/](?=\s)/,
                lookbehind: !0
            },
            hexcode: /#[\da-f]{3,8}/i,
            entity: /\\[\da-f]{1,8}/i,
            unit: {
                pattern: /(\d)(?:%|[a-z]+)/,
                lookbehind: !0
            },
            number: /-?[\d.]+/
        }),
        d.languages.javascript = d.languages.extend("clike", {
            "class-name": [d.languages.clike["class-name"], {
                pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
                lookbehind: !0
            }],
            keyword: [{
                pattern: /((?:^|})\s*)(?:catch|finally)\b/,
                lookbehind: !0
            }, {
                pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
                lookbehind: !0
            }],
            number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
            function: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
            operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
        }),
        d.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,
        d.languages.insertBefore("javascript", "keyword", {
            regex: {
                pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,
                lookbehind: !0,
                greedy: !0
            },
            "function-variable": {
                pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
                alias: "function"
            },
            parameter: [{
                pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
                lookbehind: !0,
                inside: d.languages.javascript
            }, {
                pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
                inside: d.languages.javascript
            }, {
                pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
                lookbehind: !0,
                inside: d.languages.javascript
            }, {
                pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
                lookbehind: !0,
                inside: d.languages.javascript
            }],
            constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
        }),
        d.languages.insertBefore("javascript", "string", {
            "template-string": {
                pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
                greedy: !0,
                inside: {
                    "template-punctuation": {
                        pattern: /^`|`$/,
                        alias: "string"
                    },
                    interpolation: {
                        pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
                        lookbehind: !0,
                        inside: {
                            "interpolation-punctuation": {
                                pattern: /^\${|}$/,
                                alias: "punctuation"
                            },
                            rest: d.languages.javascript
                        }
                    },
                    string: /[\s\S]+/
                }
            }
        }),
        d.languages.markup && d.languages.markup.tag.addInlined("script", "javascript"),
        d.languages.js = d.languages.javascript,
        function(e) {
            var t = e.util.clone(e.languages.javascript);
            e.languages.jsx = e.languages.extend("markup", t),
            e.languages.jsx.tag.pattern = /<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}))*\s*\/?)?>/i,
            e.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/i,
            e.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i,
            e.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/,
            e.languages.insertBefore("inside", "attr-name", {
                spread: {
                    pattern: /\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}/,
                    inside: {
                        punctuation: /\.{3}|[{}.]/,
                        "attr-value": /\w+/
                    }
                }
            }, e.languages.jsx.tag),
            e.languages.insertBefore("inside", "attr-value", {
                script: {
                    pattern: /=(\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i,
                    inside: {
                        "script-punctuation": {
                            pattern: /^=(?={)/,
                            alias: "punctuation"
                        },
                        rest: e.languages.jsx
                    },
                    alias: "language-javascript"
                }
            }, e.languages.jsx.tag);
            var n = function(e) {
                return e ? "string" == typeof e ? e : "string" == typeof e.content ? e.content : e.content.map(n).join("") : ""
            }
              , a = function(t) {
                for (var r = [], i = 0; i < t.length; i++) {
                    var o = t[i]
                      , s = !1;
                    if ("string" != typeof o && ("tag" === o.type && o.content[0] && "tag" === o.content[0].type ? "</" === o.content[0].content[0].content ? r.length > 0 && r[r.length - 1].tagName === n(o.content[0].content[1]) && r.pop() : "/>" === o.content[o.content.length - 1].content || r.push({
                        tagName: n(o.content[0].content[1]),
                        openedBraces: 0
                    }) : r.length > 0 && "punctuation" === o.type && "{" === o.content ? r[r.length - 1].openedBraces++ : r.length > 0 && r[r.length - 1].openedBraces > 0 && "punctuation" === o.type && "}" === o.content ? r[r.length - 1].openedBraces-- : s = !0),
                    (s || "string" == typeof o) && r.length > 0 && 0 === r[r.length - 1].openedBraces) {
                        var l = n(o);
                        i < t.length - 1 && ("string" == typeof t[i + 1] || "plain-text" === t[i + 1].type) && (l += n(t[i + 1]),
                        t.splice(i + 1, 1)),
                        i > 0 && ("string" == typeof t[i - 1] || "plain-text" === t[i - 1].type) && (l = n(t[i - 1]) + l,
                        t.splice(i - 1, 1),
                        i--),
                        t[i] = new e.Token("plain-text",l,null,l)
                    }
                    o.content && "string" != typeof o.content && a(o.content)
                }
            };
            e.hooks.add("after-tokenize", (function(e) {
                "jsx" !== e.language && "tsx" !== e.language || a(e.tokens)
            }
            ))
        }(d),
        function(e) {
            var t = e.languages.javadoclike = {
                parameter: {
                    pattern: /(^\s*(?:\/{3}|\*|\/\*\*)\s*@(?:param|arg|arguments)\s+)\w+/m,
                    lookbehind: !0
                },
                keyword: {
                    pattern: /(^\s*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,
                    lookbehind: !0
                },
                punctuation: /[{}]/
            };
            Object.defineProperty(t, "addSupport", {
                value: function(t, n) {
                    "string" == typeof t && (t = [t]),
                    t.forEach((function(t) {
                        !function(t, n) {
                            var a = e.languages[t];
                            if (a) {
                                var r = a["doc-comment"];
                                if (!r) {
                                    var i = {
                                        "doc-comment": {
                                            pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,
                                            alias: "comment"
                                        }
                                    };
                                    r = (a = e.languages.insertBefore(t, "comment", i))["doc-comment"]
                                }
                                if (r instanceof RegExp && (r = a["doc-comment"] = {
                                    pattern: r
                                }),
                                Array.isArray(r))
                                    for (var o = 0, s = r.length; o < s; o++)
                                        r[o]instanceof RegExp && (r[o] = {
                                            pattern: r[o]
                                        }),
                                        n(r[o]);
                                else
                                    n(r)
                            }
                        }(t, (function(e) {
                            e.inside || (e.inside = {}),
                            e.inside.rest = n
                        }
                        ))
                    }
                    ))
                }
            }),
            t.addSupport(["java", "javascript", "php"], t)
        }(d),
        function(e) {
            var t = /\b(?:abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while|var|null|exports|module|open|opens|provides|requires|to|transitive|uses|with)\b/
              , n = /\b[A-Z](?:\w*[a-z]\w*)?\b/;
            e.languages.java = e.languages.extend("clike", {
                "class-name": [n, /\b[A-Z]\w*(?=\s+\w+\s*[;,=())])/],
                keyword: t,
                function: [e.languages.clike.function, {
                    pattern: /(\:\:)[a-z_]\w*/,
                    lookbehind: !0
                }],
                number: /\b0b[01][01_]*L?\b|\b0x[\da-f_]*\.?[\da-f_p+-]+\b|(?:\b\d[\d_]*\.?[\d_]*|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
                operator: {
                    pattern: /(^|[^.])(?:<<=?|>>>?=?|->|([-+&|])\2|[?:~]|[-+*/%&|^!=<>]=?)/m,
                    lookbehind: !0
                }
            }),
            e.languages.insertBefore("java", "class-name", {
                annotation: {
                    alias: "punctuation",
                    pattern: /(^|[^.])@\w+/,
                    lookbehind: !0
                },
                namespace: {
                    pattern: /(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)[a-z]\w*(\.[a-z]\w*)+/,
                    lookbehind: !0,
                    inside: {
                        punctuation: /\./
                    }
                },
                generics: {
                    pattern: /<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,
                    inside: {
                        "class-name": n,
                        keyword: t,
                        punctuation: /[<>(),.:]/,
                        operator: /[?&|]/
                    }
                }
            })
        }(d),
        function(e) {
            function t(e, t) {
                return "___" + e.toUpperCase() + t + "___"
            }
            Object.defineProperties(e.languages["markup-templating"] = {}, {
                buildPlaceholders: {
                    value: function(n, a, r, i) {
                        if (n.language === a) {
                            var o = n.tokenStack = [];
                            n.code = n.code.replace(r, (function(e) {
                                if ("function" == typeof i && !i(e))
                                    return e;
                                for (var r, s = o.length; -1 !== n.code.indexOf(r = t(a, s)); )
                                    ++s;
                                return o[s] = e,
                                r
                            }
                            )),
                            n.grammar = e.languages.markup
                        }
                    }
                },
                tokenizePlaceholders: {
                    value: function(n, a) {
                        if (n.language === a && n.tokenStack) {
                            n.grammar = e.languages[a];
                            var r = 0
                              , i = Object.keys(n.tokenStack);
                            !function o(s) {
                                for (var l = 0; l < s.length && !(r >= i.length); l++) {
                                    var c = s[l];
                                    if ("string" == typeof c || c.content && "string" == typeof c.content) {
                                        var u = i[r]
                                          , d = n.tokenStack[u]
                                          , p = "string" == typeof c ? c : c.content
                                          , f = t(a, u)
                                          , g = p.indexOf(f);
                                        if (g > -1) {
                                            ++r;
                                            var h = p.substring(0, g)
                                              , m = new e.Token(a,e.tokenize(d, n.grammar),"language-" + a,d)
                                              , b = p.substring(g + f.length)
                                              , y = [];
                                            h && y.push.apply(y, o([h])),
                                            y.push(m),
                                            b && y.push.apply(y, o([b])),
                                            "string" == typeof c ? s.splice.apply(s, [l, 1].concat(y)) : c.content = y
                                        }
                                    } else
                                        c.content && o(c.content)
                                }
                                return s
                            }(n.tokens)
                        }
                    }
                }
            })
        }(d),
        function(e) {
            e.languages.php = e.languages.extend("clike", {
                keyword: /\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|class|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|final|finally|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|new|or|parent|print|private|protected|public|require|require_once|return|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i,
                boolean: {
                    pattern: /\b(?:false|true)\b/i,
                    alias: "constant"
                },
                constant: [/\b[A-Z_][A-Z0-9_]*\b/, /\b(?:null)\b/i],
                comment: {
                    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
                    lookbehind: !0
                }
            }),
            e.languages.insertBefore("php", "string", {
                "shell-comment": {
                    pattern: /(^|[^\\])#.*/,
                    lookbehind: !0,
                    alias: "comment"
                }
            }),
            e.languages.insertBefore("php", "comment", {
                delimiter: {
                    pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
                    alias: "important"
                }
            }),
            e.languages.insertBefore("php", "keyword", {
                variable: /\$+(?:\w+\b|(?={))/i,
                package: {
                    pattern: /(\\|namespace\s+|use\s+)[\w\\]+/,
                    lookbehind: !0,
                    inside: {
                        punctuation: /\\/
                    }
                }
            }),
            e.languages.insertBefore("php", "operator", {
                property: {
                    pattern: /(->)[\w]+/,
                    lookbehind: !0
                }
            });
            var t = {
                pattern: /{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[.+?]|->\w+)*)/,
                lookbehind: !0,
                inside: {
                    rest: e.languages.php
                }
            };
            e.languages.insertBefore("php", "string", {
                "nowdoc-string": {
                    pattern: /<<<'([^']+)'(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;/,
                    greedy: !0,
                    alias: "string",
                    inside: {
                        delimiter: {
                            pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
                            alias: "symbol",
                            inside: {
                                punctuation: /^<<<'?|[';]$/
                            }
                        }
                    }
                },
                "heredoc-string": {
                    pattern: /<<<(?:"([^"]+)"(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;|([a-z_]\w*)(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\2;)/i,
                    greedy: !0,
                    alias: "string",
                    inside: {
                        delimiter: {
                            pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
                            alias: "symbol",
                            inside: {
                                punctuation: /^<<<"?|[";]$/
                            }
                        },
                        interpolation: t
                    }
                },
                "single-quoted-string": {
                    pattern: /'(?:\\[\s\S]|[^\\'])*'/,
                    greedy: !0,
                    alias: "string"
                },
                "double-quoted-string": {
                    pattern: /"(?:\\[\s\S]|[^\\"])*"/,
                    greedy: !0,
                    alias: "string",
                    inside: {
                        interpolation: t
                    }
                }
            }),
            delete e.languages.php.string,
            e.hooks.add("before-tokenize", (function(t) {
                if (/<\?/.test(t.code)) {
                    e.languages["markup-templating"].buildPlaceholders(t, "php", /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#)(?:[^?\n\r]|\?(?!>))*|\/\*[\s\S]*?(?:\*\/|$))*?(?:\?>|$)/gi)
                }
            }
            )),
            e.hooks.add("after-tokenize", (function(t) {
                e.languages["markup-templating"].tokenizePlaceholders(t, "php")
            }
            ))
        }(d),
        function(e) {
            var t = e.languages.javascript
              , n = /{(?:[^{}]|{(?:[^{}]|{[^{}]*})*})+}/.source
              , a = "(@(?:param|arg|argument|property)\\s+(?:" + n + "\\s+)?)";
            e.languages.jsdoc = e.languages.extend("javadoclike", {
                parameter: {
                    pattern: RegExp(a + /[$\w\xA0-\uFFFF.]+(?=\s|$)/.source),
                    lookbehind: !0,
                    inside: {
                        punctuation: /\./
                    }
                }
            }),
            e.languages.insertBefore("jsdoc", "keyword", {
                "optional-parameter": {
                    pattern: RegExp(a + /\[[$\w\xA0-\uFFFF.]+(?:=[^[\]]+)?\](?=\s|$)/.source),
                    lookbehind: !0,
                    inside: {
                        parameter: {
                            pattern: /(^\[)[$\w\xA0-\uFFFF\.]+/,
                            lookbehind: !0,
                            inside: {
                                punctuation: /\./
                            }
                        },
                        code: {
                            pattern: /(=)[\s\S]*(?=\]$)/,
                            lookbehind: !0,
                            inside: t,
                            alias: "language-javascript"
                        },
                        punctuation: /[=[\]]/
                    }
                },
                "class-name": [{
                    pattern: RegExp("(@[a-z]+\\s+)" + n),
                    lookbehind: !0,
                    inside: {
                        punctuation: /[.,:?=<>|{}()[\]]/
                    }
                }, {
                    pattern: /(@(?:augments|extends|class|interface|memberof!?|this)\s+)[A-Z]\w*(?:\.[A-Z]\w*)*/,
                    lookbehind: !0,
                    inside: {
                        punctuation: /\./
                    }
                }],
                example: {
                    pattern: /(@example\s+)[^@]+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,
                    lookbehind: !0,
                    inside: {
                        code: {
                            pattern: /^(\s*(?:\*\s*)?).+$/m,
                            lookbehind: !0,
                            inside: t,
                            alias: "language-javascript"
                        }
                    }
                }
            }),
            e.languages.javadoclike.addSupport("javascript", e.languages.jsdoc)
        }(d),
        d.languages.actionscript = d.languages.extend("javascript", {
            keyword: /\b(?:as|break|case|catch|class|const|default|delete|do|else|extends|finally|for|function|if|implements|import|in|instanceof|interface|internal|is|native|new|null|package|private|protected|public|return|super|switch|this|throw|try|typeof|use|var|void|while|with|dynamic|each|final|get|include|namespace|native|override|set|static)\b/,
            operator: /\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/
        }),
        d.languages.actionscript["class-name"].alias = "function",
        d.languages.markup && d.languages.insertBefore("actionscript", "string", {
            xml: {
                pattern: /(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,
                lookbehind: !0,
                inside: {
                    rest: d.languages.markup
                }
            }
        }),
        function(e) {
            var t = /#(?!\{).+/
              , n = {
                pattern: /#\{[^}]+\}/,
                alias: "variable"
            };
            e.languages.coffeescript = e.languages.extend("javascript", {
                comment: t,
                string: [{
                    pattern: /'(?:\\[\s\S]|[^\\'])*'/,
                    greedy: !0
                }, {
                    pattern: /"(?:\\[\s\S]|[^\\"])*"/,
                    greedy: !0,
                    inside: {
                        interpolation: n
                    }
                }],
                keyword: /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
                "class-member": {
                    pattern: /@(?!\d)\w+/,
                    alias: "variable"
                }
            }),
            e.languages.insertBefore("coffeescript", "comment", {
                "multiline-comment": {
                    pattern: /###[\s\S]+?###/,
                    alias: "comment"
                },
                "block-regex": {
                    pattern: /\/{3}[\s\S]*?\/{3}/,
                    alias: "regex",
                    inside: {
                        comment: t,
                        interpolation: n
                    }
                }
            }),
            e.languages.insertBefore("coffeescript", "string", {
                "inline-javascript": {
                    pattern: /`(?:\\[\s\S]|[^\\`])*`/,
                    inside: {
                        delimiter: {
                            pattern: /^`|`$/,
                            alias: "punctuation"
                        },
                        rest: e.languages.javascript
                    }
                },
                "multiline-string": [{
                    pattern: /'''[\s\S]*?'''/,
                    greedy: !0,
                    alias: "string"
                }, {
                    pattern: /"""[\s\S]*?"""/,
                    greedy: !0,
                    alias: "string",
                    inside: {
                        interpolation: n
                    }
                }]
            }),
            e.languages.insertBefore("coffeescript", "keyword", {
                property: /(?!\d)\w+(?=\s*:(?!:))/
            }),
            delete e.languages.coffeescript["template-string"],
            e.languages.coffee = e.languages.coffeescript
        }(d),
        function(e) {
            e.languages.insertBefore("javascript", "function-variable", {
                "method-variable": {
                    pattern: RegExp("(\\.\\s*)" + e.languages.javascript["function-variable"].pattern.source),
                    lookbehind: !0,
                    alias: ["function-variable", "method", "function", "property-access"]
                }
            }),
            e.languages.insertBefore("javascript", "function", {
                method: {
                    pattern: RegExp("(\\.\\s*)" + e.languages.javascript.function.source),
                    lookbehind: !0,
                    alias: ["function", "property-access"]
                }
            }),
            e.languages.insertBefore("javascript", "constant", {
                "known-class-name": [{
                    pattern: /\b(?:(?:(?:Uint|Int)(?:8|16|32)|Uint8Clamped|Float(?:32|64))?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|(?:Weak)?(?:Set|Map)|WebAssembly)\b/,
                    alias: "class-name"
                }, {
                    pattern: /\b(?:[A-Z]\w*)Error\b/,
                    alias: "class-name"
                }]
            }),
            e.languages.javascript.keyword.unshift({
                pattern: /\b(?:as|default|export|from|import)\b/,
                alias: "module"
            }, {
                pattern: /\bnull\b/,
                alias: ["null", "nil"]
            }, {
                pattern: /\bundefined\b/,
                alias: "nil"
            }),
            e.languages.insertBefore("javascript", "operator", {
                spread: {
                    pattern: /\.{3}/,
                    alias: "operator"
                },
                arrow: {
                    pattern: /=>/,
                    alias: "operator"
                }
            }),
            e.languages.insertBefore("javascript", "punctuation", {
                "property-access": {
                    pattern: /(\.\s*)#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*/,
                    lookbehind: !0
                },
                "maybe-class-name": {
                    pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
                    lookbehind: !0
                },
                dom: {
                    pattern: /\b(?:document|location|navigator|performance|(?:local|session)Storage|window)\b/,
                    alias: "variable"
                },
                console: {
                    pattern: /\bconsole(?=\s*\.)/,
                    alias: "class-name"
                }
            });
            for (var t = ["function", "function-variable", "method", "method-variable", "property-access"], n = 0; n < t.length; n++) {
                var a = t[n]
                  , r = e.languages.javascript[a];
                "RegExp" === e.util.type(r) && (r = e.languages.javascript[a] = {
                    pattern: r
                });
                var i = r.inside || {};
                r.inside = i,
                i["maybe-class-name"] = /^[A-Z][\s\S]*/
            }
        }(d),
        function(e) {
            e.languages.flow = e.languages.extend("javascript", {}),
            e.languages.insertBefore("flow", "keyword", {
                type: [{
                    pattern: /\b(?:[Nn]umber|[Ss]tring|[Bb]oolean|Function|any|mixed|null|void)\b/,
                    alias: "tag"
                }]
            }),
            e.languages.flow["function-variable"].pattern = /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,
            delete e.languages.flow.parameter,
            e.languages.insertBefore("flow", "operator", {
                "flow-punctuation": {
                    pattern: /\{\||\|\}/,
                    alias: "punctuation"
                }
            }),
            Array.isArray(e.languages.flow.keyword) || (e.languages.flow.keyword = [e.languages.flow.keyword]),
            e.languages.flow.keyword.unshift({
                pattern: /(^|[^$]\b)(?:type|opaque|declare|Class)\b(?!\$)/,
                lookbehind: !0
            }, {
                pattern: /(^|[^$]\B)\$(?:await|Diff|Exact|Keys|ObjMap|PropertyType|Shape|Record|Supertype|Subtype|Enum)\b(?!\$)/,
                lookbehind: !0
            })
        }(d),
        d.languages.n4js = d.languages.extend("javascript", {
            keyword: /\b(?:any|Array|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/
        }),
        d.languages.insertBefore("n4js", "constant", {
            annotation: {
                pattern: /@+\w+/,
                alias: "operator"
            }
        }),
        d.languages.n4jsd = d.languages.n4js,
        d.languages.typescript = d.languages.extend("javascript", {
            keyword: /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,
            builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/
        }),
        d.languages.ts = d.languages.typescript,
        function(e) {
            var t = e.languages.javascript["template-string"]
              , n = t.pattern.source
              , a = t.inside.interpolation
              , r = a.inside["interpolation-punctuation"]
              , i = a.pattern.source;
            function o(t, a) {
                if (e.languages[t])
                    return {
                        pattern: RegExp("((?:" + a + ")\\s*)" + n),
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            "template-punctuation": {
                                pattern: /^`|`$/,
                                alias: "string"
                            },
                            "embedded-code": {
                                pattern: /[\s\S]+/,
                                alias: t
                            }
                        }
                    }
            }
            function s(e, t) {
                return "___" + t.toUpperCase() + "_" + e + "___"
            }
            function l(t, n, a) {
                var r = {
                    code: t,
                    grammar: n,
                    language: a
                };
                return e.hooks.run("before-tokenize", r),
                r.tokens = e.tokenize(r.code, r.grammar),
                e.hooks.run("after-tokenize", r),
                r.tokens
            }
            function c(t) {
                var n = {};
                n["interpolation-punctuation"] = r;
                var i = e.tokenize(t, n);
                if (3 === i.length) {
                    var o = [1, 1];
                    o.push.apply(o, l(i[1], e.languages.javascript, "javascript")),
                    i.splice.apply(i, o)
                }
                return new e.Token("interpolation",i,a.alias,t)
            }
            function u(t, n, a) {
                var r = e.tokenize(t, {
                    interpolation: {
                        pattern: RegExp(i),
                        lookbehind: !0
                    }
                })
                  , o = 0
                  , u = {}
                  , d = l(r.map((function(e) {
                    if ("string" == typeof e)
                        return e;
                    for (var n, r = e.content; -1 !== t.indexOf(n = s(o++, a)); )
                        ;
                    return u[n] = r,
                    n
                }
                )).join(""), n, a)
                  , p = Object.keys(u);
                return o = 0,
                function e(t) {
                    for (var n = 0; n < t.length; n++) {
                        if (o >= p.length)
                            return;
                        var a = t[n];
                        if ("string" == typeof a || "string" == typeof a.content) {
                            var r = p[o]
                              , i = "string" == typeof a ? a : a.content
                              , s = i.indexOf(r);
                            if (-1 !== s) {
                                ++o;
                                var l = i.substring(0, s)
                                  , d = c(u[r])
                                  , f = i.substring(s + r.length)
                                  , g = [];
                                if (l && g.push(l),
                                g.push(d),
                                f) {
                                    var h = [f];
                                    e(h),
                                    g.push.apply(g, h)
                                }
                                "string" == typeof a ? (t.splice.apply(t, [n, 1].concat(g)),
                                n += g.length - 1) : a.content = g
                            }
                        } else {
                            var m = a.content;
                            Array.isArray(m) ? e(m) : e([m])
                        }
                    }
                }(d),
                new e.Token(a,d,"language-" + a,t)
            }
            e.languages.javascript["template-string"] = [o("css", /\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source), o("html", /\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source), o("svg", /\bsvg/.source), o("markdown", /\b(?:md|markdown)/.source), o("graphql", /\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source), t].filter(Boolean);
            var d = {
                javascript: !0,
                js: !0,
                typescript: !0,
                ts: !0,
                jsx: !0,
                tsx: !0
            };
            function p(e) {
                return "string" == typeof e ? e : Array.isArray(e) ? e.map(p).join("") : p(e.content)
            }
            e.hooks.add("after-tokenize", (function(t) {
                t.language in d && function t(n) {
                    for (var a = 0, r = n.length; a < r; a++) {
                        var i = n[a];
                        if ("string" != typeof i) {
                            var o = i.content;
                            if (Array.isArray(o))
                                if ("template-string" === i.type) {
                                    var s = o[1];
                                    if (3 === o.length && "string" != typeof s && "embedded-code" === s.type) {
                                        var l = p(s)
                                          , c = s.alias
                                          , d = Array.isArray(c) ? c[0] : c
                                          , f = e.languages[d];
                                        if (!f)
                                            continue;
                                        o[1] = u(l, f, d)
                                    }
                                } else
                                    t(o);
                            else
                                "string" != typeof o && t([o])
                        }
                    }
                }(t.tokens)
            }
            ))
        }(d),
        d.languages.graphql = {
            comment: /#.*/,
            string: {
                pattern: /"(?:\\.|[^\\"\r\n])*"/,
                greedy: !0
            },
            number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
            boolean: /\b(?:true|false)\b/,
            variable: /\$[a-z_]\w*/i,
            directive: {
                pattern: /@[a-z_]\w*/i,
                alias: "function"
            },
            "attr-name": {
                pattern: /[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
                greedy: !0
            },
            "class-name": {
                pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+)[a-zA-Z_]\w*/,
                lookbehind: !0
            },
            fragment: {
                pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
                lookbehind: !0,
                alias: "function"
            },
            keyword: /\b(?:enum|fragment|implements|input|interface|mutation|on|query|scalar|schema|type|union)\b/,
            operator: /[!=|]|\.{3}/,
            punctuation: /[!(){}\[\]:=,]/,
            constant: /\b(?!ID\b)[A-Z][A-Z_\d]*\b/
        },
        function(e) {
            var t = /(?:\\.|[^\\\n\r]|(?:\r?\n|\r)(?!\r?\n|\r))/.source;
            function n(e, n) {
                return e = e.replace(/<inner>/g, t),
                n && (e = e + "|" + e.replace(/_/g, "\\*")),
                RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + e + ")")
            }
            var a = /(?:\\.|``.+?``|`[^`\r\n]+`|[^\\|\r\n`])+/.source
              , r = /\|?__(?:\|__)+\|?(?:(?:\r?\n|\r)|$)/.source.replace(/__/g, a)
              , i = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\r?\n|\r)/.source;
            e.languages.markdown = e.languages.extend("markup", {}),
            e.languages.insertBefore("markdown", "prolog", {
                blockquote: {
                    pattern: /^>(?:[\t ]*>)*/m,
                    alias: "punctuation"
                },
                table: {
                    pattern: RegExp("^" + r + i + "(?:" + r + ")*", "m"),
                    inside: {
                        "table-data-rows": {
                            pattern: RegExp("^(" + r + i + ")(?:" + r + ")*$"),
                            lookbehind: !0,
                            inside: {
                                "table-data": {
                                    pattern: RegExp(a),
                                    inside: e.languages.markdown
                                },
                                punctuation: /\|/
                            }
                        },
                        "table-line": {
                            pattern: RegExp("^(" + r + ")" + i + "$"),
                            lookbehind: !0,
                            inside: {
                                punctuation: /\||:?-{3,}:?/
                            }
                        },
                        "table-header-row": {
                            pattern: RegExp("^" + r + "$"),
                            inside: {
                                "table-header": {
                                    pattern: RegExp(a),
                                    alias: "important",
                                    inside: e.languages.markdown
                                },
                                punctuation: /\|/
                            }
                        }
                    }
                },
                code: [{
                    pattern: /(^[ \t]*(?:\r?\n|\r))(?: {4}|\t).+(?:(?:\r?\n|\r)(?: {4}|\t).+)*/m,
                    lookbehind: !0,
                    alias: "keyword"
                }, {
                    pattern: /``.+?``|`[^`\r\n]+`/,
                    alias: "keyword"
                }, {
                    pattern: /^```[\s\S]*?^```$/m,
                    greedy: !0,
                    inside: {
                        "code-block": {
                            pattern: /^(```.*(?:\r?\n|\r))[\s\S]+?(?=(?:\r?\n|\r)^```$)/m,
                            lookbehind: !0
                        },
                        "code-language": {
                            pattern: /^(```).+/,
                            lookbehind: !0
                        },
                        punctuation: /```/
                    }
                }],
                title: [{
                    pattern: /\S.*(?:\r?\n|\r)(?:==+|--+)(?=[ \t]*$)/m,
                    alias: "important",
                    inside: {
                        punctuation: /==+$|--+$/
                    }
                }, {
                    pattern: /(^\s*)#+.+/m,
                    lookbehind: !0,
                    alias: "important",
                    inside: {
                        punctuation: /^#+|#+$/
                    }
                }],
                hr: {
                    pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
                    lookbehind: !0,
                    alias: "punctuation"
                },
                list: {
                    pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
                    lookbehind: !0,
                    alias: "punctuation"
                },
                "url-reference": {
                    pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
                    inside: {
                        variable: {
                            pattern: /^(!?\[)[^\]]+/,
                            lookbehind: !0
                        },
                        string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                        punctuation: /^[\[\]!:]|[<>]/
                    },
                    alias: "url"
                },
                bold: {
                    pattern: n(/__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__/.source, !0),
                    lookbehind: !0,
                    greedy: !0,
                    inside: {
                        content: {
                            pattern: /(^..)[\s\S]+(?=..$)/,
                            lookbehind: !0,
                            inside: {}
                        },
                        punctuation: /\*\*|__/
                    }
                },
                italic: {
                    pattern: n(/_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_/.source, !0),
                    lookbehind: !0,
                    greedy: !0,
                    inside: {
                        content: {
                            pattern: /(^.)[\s\S]+(?=.$)/,
                            lookbehind: !0,
                            inside: {}
                        },
                        punctuation: /[*_]/
                    }
                },
                strike: {
                    pattern: n(/(~~?)(?:(?!~)<inner>)+?\2/.source, !1),
                    lookbehind: !0,
                    greedy: !0,
                    inside: {
                        content: {
                            pattern: /(^~~?)[\s\S]+(?=\1$)/,
                            lookbehind: !0,
                            inside: {}
                        },
                        punctuation: /~~?/
                    }
                },
                url: {
                    pattern: n(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[(?:(?!\])<inner>)+\])/.source, !1),
                    lookbehind: !0,
                    greedy: !0,
                    inside: {
                        variable: {
                            pattern: /(\[)[^\]]+(?=\]$)/,
                            lookbehind: !0
                        },
                        content: {
                            pattern: /(^!?\[)[^\]]+(?=\])/,
                            lookbehind: !0,
                            inside: {}
                        },
                        string: {
                            pattern: /"(?:\\.|[^"\\])*"(?=\)$)/
                        }
                    }
                }
            }),
            ["url", "bold", "italic", "strike"].forEach((function(t) {
                ["url", "bold", "italic", "strike"].forEach((function(n) {
                    t !== n && (e.languages.markdown[t].inside.content.inside[n] = e.languages.markdown[n])
                }
                ))
            }
            )),
            e.hooks.add("after-tokenize", (function(e) {
                "markdown" !== e.language && "md" !== e.language || function e(t) {
                    if (t && "string" != typeof t)
                        for (var n = 0, a = t.length; n < a; n++) {
                            var r = t[n];
                            if ("code" === r.type) {
                                var i = r.content[1]
                                  , o = r.content[3];
                                if (i && o && "code-language" === i.type && "code-block" === o.type && "string" == typeof i.content) {
                                    var s = "language-" + i.content.trim().split(/\s+/)[0].toLowerCase();
                                    o.alias ? "string" == typeof o.alias ? o.alias = [o.alias, s] : o.alias.push(s) : o.alias = [s]
                                }
                            } else
                                e(r.content)
                        }
                }(e.tokens)
            }
            )),
            e.hooks.add("wrap", (function(t) {
                if ("code-block" === t.type) {
                    for (var n = "", a = 0, r = t.classes.length; a < r; a++) {
                        var i = t.classes[a]
                          , o = /language-(.+)/.exec(i);
                        if (o) {
                            n = o[1];
                            break
                        }
                    }
                    var s = e.languages[n];
                    if (s) {
                        var l = t.content.replace(/&lt;/g, "<").replace(/&amp;/g, "&");
                        t.content = e.highlight(l, s, n)
                    } else if (n && "none" !== n && e.plugins.autoloader) {
                        var c = "md-" + (new Date).valueOf() + "-" + Math.floor(1e16 * Math.random());
                        t.attributes.id = c,
                        e.plugins.autoloader.loadLanguages(n, (function() {
                            var t = document.getElementById(c);
                            t && (t.innerHTML = e.highlight(t.textContent, e.languages[n], n))
                        }
                        ))
                    }
                }
            }
            )),
            e.languages.md = e.languages.markdown
        }(d),
        function(e) {
            e.languages.diff = {
                coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d+.*$/m]
            };
            var t = {
                "deleted-sign": "-",
                "deleted-arrow": "<",
                "inserted-sign": "+",
                "inserted-arrow": ">",
                unchanged: " ",
                diff: "!"
            };
            Object.keys(t).forEach((function(n) {
                var a = t[n]
                  , r = [];
                /^\w+$/.test(n) || r.push(/\w+/.exec(n)[0]),
                "diff" === n && r.push("bold"),
                e.languages.diff[n] = {
                    pattern: RegExp("^(?:[" + a + "].*(?:\r\n?|\n|(?![\\s\\S])))+", "m"),
                    alias: r
                }
            }
            )),
            Object.defineProperty(e.languages.diff, "PREFIXES", {
                value: t
            })
        }(d),
        d.languages.git = {
            comment: /^#.*/m,
            deleted: /^[-\u2013].*/m,
            inserted: /^\+.*/m,
            string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,
            command: {
                pattern: /^.*\$ git .*$/m,
                inside: {
                    parameter: /\s--?\w+/m
                }
            },
            coord: /^@@.*@@$/m,
            commit_sha1: /^commit \w{40}$/m
        },
        d.languages.go = d.languages.extend("clike", {
            keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
            builtin: /\b(?:bool|byte|complex(?:64|128)|error|float(?:32|64)|rune|string|u?int(?:8|16|32|64)?|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(?:ln)?|real|recover)\b/,
            boolean: /\b(?:_|iota|nil|true|false)\b/,
            operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
            number: /(?:\b0x[a-f\d]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e[-+]?\d+)?)i?/i,
            string: {
                pattern: /(["'`])(\\[\s\S]|(?!\1)[^\\])*\1/,
                greedy: !0
            }
        }),
        delete d.languages.go["class-name"],
        function(e) {
            e.languages.handlebars = {
                comment: /\{\{![\s\S]*?\}\}/,
                delimiter: {
                    pattern: /^\{\{\{?|\}\}\}?$/i,
                    alias: "punctuation"
                },
                string: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
                number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
                boolean: /\b(?:true|false)\b/,
                block: {
                    pattern: /^(\s*~?\s*)[#\/]\S+?(?=\s*~?\s*$|\s)/i,
                    lookbehind: !0,
                    alias: "keyword"
                },
                brackets: {
                    pattern: /\[[^\]]+\]/,
                    inside: {
                        punctuation: /\[|\]/,
                        variable: /[\s\S]+/
                    }
                },
                punctuation: /[!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]/,
                variable: /[^!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~\s]+/
            },
            e.hooks.add("before-tokenize", (function(t) {
                e.languages["markup-templating"].buildPlaceholders(t, "handlebars", /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g)
            }
            )),
            e.hooks.add("after-tokenize", (function(t) {
                e.languages["markup-templating"].tokenizePlaceholders(t, "handlebars")
            }
            ))
        }(d),
        d.languages.json = {
            property: {
                pattern: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
                greedy: !0
            },
            string: {
                pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
                greedy: !0
            },
            comment: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
            number: /-?\d+\.?\d*(e[+-]?\d+)?/i,
            punctuation: /[{}[\],]/,
            operator: /:/,
            boolean: /\b(?:true|false)\b/,
            null: {
                pattern: /\bnull\b/,
                alias: "keyword"
            }
        },
        d.languages.less = d.languages.extend("css", {
            comment: [/\/\*[\s\S]*?\*\//, {
                pattern: /(^|[^\\])\/\/.*/,
                lookbehind: !0
            }],
            atrule: {
                pattern: /@[\w-]+?(?:\([^{}]+\)|[^(){};])*?(?=\s*\{)/i,
                inside: {
                    punctuation: /[:()]/
                }
            },
            selector: {
                pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\([^{}]*\)|[^{};@])*?(?=\s*\{)/,
                inside: {
                    variable: /@+[\w-]+/
                }
            },
            property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,
            operator: /[+\-*\/]/
        }),
        d.languages.insertBefore("less", "property", {
            variable: [{
                pattern: /@[\w-]+\s*:/,
                inside: {
                    punctuation: /:/
                }
            }, /@@?[\w-]+/],
            "mixin-usage": {
                pattern: /([{;]\s*)[.#](?!\d)[\w-]+.*?(?=[(;])/,
                lookbehind: !0,
                alias: "function"
            }
        }),
        d.languages.makefile = {
            comment: {
                pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
                lookbehind: !0
            },
            string: {
                pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                greedy: !0
            },
            builtin: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
            symbol: {
                pattern: /^[^:=\r\n]+(?=\s*:(?!=))/m,
                inside: {
                    variable: /\$+(?:[^(){}:#=\s]+|(?=[({]))/
                }
            },
            variable: /\$+(?:[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
            keyword: [/-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/, {
                pattern: /(\()(?:addsuffix|abspath|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:s|list)?)(?=[ \t])/,
                lookbehind: !0
            }],
            operator: /(?:::|[?:+!])?=|[|@]/,
            punctuation: /[:;(){}]/
        },
        d.languages.objectivec = d.languages.extend("c", {
            keyword: /\b(?:asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|in|self|super)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
            string: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|@"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
            operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
        }),
        delete d.languages.objectivec["class-name"],
        d.languages.ocaml = {
            comment: /\(\*[\s\S]*?\*\)/,
            string: [{
                pattern: /"(?:\\.|[^\\\r\n"])*"/,
                greedy: !0
            }, {
                pattern: /(['`])(?:\\(?:\d+|x[\da-f]+|.)|(?!\1)[^\\\r\n])\1/i,
                greedy: !0
            }],
            number: /\b(?:0x[\da-f][\da-f_]+|(?:0[bo])?\d[\d_]*\.?[\d_]*(?:e[+-]?[\d_]+)?)/i,
            type: {
                pattern: /\B['`]\w*/,
                alias: "variable"
            },
            directive: {
                pattern: /\B#\w+/,
                alias: "function"
            },
            keyword: /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|object|of|open|prefix|private|rec|then|sig|struct|to|try|type|val|value|virtual|where|while|with)\b/,
            boolean: /\b(?:false|true)\b/,
            operator: /:=|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lxor|lsl|lsr|mod|nor|or)\b/,
            punctuation: /[(){}\[\]|_.,:;]/
        },
        d.languages.python = {
            comment: {
                pattern: /(^|[^\\])#.*/,
                lookbehind: !0
            },
            "string-interpolation": {
                pattern: /(?:f|rf|fr)(?:("""|''')[\s\S]+?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
                greedy: !0,
                inside: {
                    interpolation: {
                        pattern: /((?:^|[^{])(?:{{)*){(?!{)(?:[^{}]|{(?!{)(?:[^{}]|{(?!{)(?:[^{}])+})+})+}/,
                        lookbehind: !0,
                        inside: {
                            "format-spec": {
                                pattern: /(:)[^:(){}]+(?=}$)/,
                                lookbehind: !0
                            },
                            "conversion-option": {
                                pattern: /![sra](?=[:}]$)/,
                                alias: "punctuation"
                            },
                            rest: null
                        }
                    },
                    string: /[\s\S]+/
                }
            },
            "triple-quoted-string": {
                pattern: /(?:[rub]|rb|br)?("""|''')[\s\S]+?\1/i,
                greedy: !0,
                alias: "string"
            },
            string: {
                pattern: /(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
                greedy: !0
            },
            function: {
                pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
                lookbehind: !0
            },
            "class-name": {
                pattern: /(\bclass\s+)\w+/i,
                lookbehind: !0
            },
            decorator: {
                pattern: /(^\s*)@\w+(?:\.\w+)*/i,
                lookbehind: !0,
                alias: ["annotation", "punctuation"],
                inside: {
                    punctuation: /\./
                }
            },
            keyword: /\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
            builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
            boolean: /\b(?:True|False|None)\b/,
            number: /(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,
            operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
            punctuation: /[{}[\];(),.:]/
        },
        d.languages.python["string-interpolation"].inside.interpolation.inside.rest = d.languages.python,
        d.languages.py = d.languages.python,
        d.languages.reason = d.languages.extend("clike", {
            comment: {
                pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
                lookbehind: !0
            },
            string: {
                pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
                greedy: !0
            },
            "class-name": /\b[A-Z]\w*/,
            keyword: /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
            operator: /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:mod|land|lor|lxor|lsl|lsr|asr)\b/
        }),
        d.languages.insertBefore("reason", "class-name", {
            character: {
                pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
                alias: "string"
            },
            constructor: {
                pattern: /\b[A-Z]\w*\b(?!\s*\.)/,
                alias: "variable"
            },
            label: {
                pattern: /\b[a-z]\w*(?=::)/,
                alias: "symbol"
            }
        }),
        delete d.languages.reason.function,
        function(e) {
            e.languages.sass = e.languages.extend("css", {
                comment: {
                    pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t]+.+)*/m,
                    lookbehind: !0
                }
            }),
            e.languages.insertBefore("sass", "atrule", {
                "atrule-line": {
                    pattern: /^(?:[ \t]*)[@+=].+/m,
                    inside: {
                        atrule: /(?:@[\w-]+|[+=])/m
                    }
                }
            }),
            delete e.languages.sass.atrule;
            var t = /\$[-\w]+|#\{\$[-\w]+\}/
              , n = [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/, {
                pattern: /(\s+)-(?=\s)/,
                lookbehind: !0
            }];
            e.languages.insertBefore("sass", "property", {
                "variable-line": {
                    pattern: /^[ \t]*\$.+/m,
                    inside: {
                        punctuation: /:/,
                        variable: t,
                        operator: n
                    }
                },
                "property-line": {
                    pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s]+.*)/m,
                    inside: {
                        property: [/[^:\s]+(?=\s*:)/, {
                            pattern: /(:)[^:\s]+/,
                            lookbehind: !0
                        }],
                        punctuation: /:/,
                        variable: t,
                        operator: n,
                        important: e.languages.sass.important
                    }
                }
            }),
            delete e.languages.sass.property,
            delete e.languages.sass.important,
            e.languages.insertBefore("sass", "punctuation", {
                selector: {
                    pattern: /([ \t]*)\S(?:,?[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,?[^,\r\n]+)*)*/,
                    lookbehind: !0
                }
            })
        }(d),
        d.languages.scss = d.languages.extend("css", {
            comment: {
                pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
                lookbehind: !0
            },
            atrule: {
                pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,
                inside: {
                    rule: /@[\w-]+/
                }
            },
            url: /(?:[-a-z]+-)?url(?=\()/i,
            selector: {
                pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()]|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,
                inside: {
                    parent: {
                        pattern: /&/,
                        alias: "important"
                    },
                    placeholder: /%[-\w]+/,
                    variable: /\$[-\w]+|#\{\$[-\w]+\}/
                }
            },
            property: {
                pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/,
                inside: {
                    variable: /\$[-\w]+|#\{\$[-\w]+\}/
                }
            }
        }),
        d.languages.insertBefore("scss", "atrule", {
            keyword: [/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i, {
                pattern: /( +)(?:from|through)(?= )/,
                lookbehind: !0
            }]
        }),
        d.languages.insertBefore("scss", "important", {
            variable: /\$[-\w]+|#\{\$[-\w]+\}/
        }),
        d.languages.insertBefore("scss", "function", {
            placeholder: {
                pattern: /%[-\w]+/,
                alias: "selector"
            },
            statement: {
                pattern: /\B!(?:default|optional)\b/i,
                alias: "keyword"
            },
            boolean: /\b(?:true|false)\b/,
            null: {
                pattern: /\bnull\b/,
                alias: "keyword"
            },
            operator: {
                pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
                lookbehind: !0
            }
        }),
        d.languages.scss.atrule.inside.rest = d.languages.scss,
        d.languages.sql = {
            comment: {
                pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
                lookbehind: !0
            },
            variable: [{
                pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
                greedy: !0
            }, /@[\w.$]+/],
            string: {
                pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
                greedy: !0,
                lookbehind: !0
            },
            function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
            keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURNS?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
            boolean: /\b(?:TRUE|FALSE|NULL)\b/i,
            number: /\b0x[\da-f]+\b|\b\d+\.?\d*|\B\.\d+\b/i,
            operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
            punctuation: /[;[\]()`,.]/
        },
        function(e) {
            var t = {
                url: /url\((["']?).*?\1\)/i,
                string: {
                    pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
                    greedy: !0
                },
                interpolation: null,
                func: null,
                important: /\B!(?:important|optional)\b/i,
                keyword: {
                    pattern: /(^|\s+)(?:(?:if|else|for|return|unless)(?=\s+|$)|@[\w-]+)/,
                    lookbehind: !0
                },
                hexcode: /#[\da-f]{3,6}/i,
                number: /\b\d+(?:\.\d+)?%?/,
                boolean: /\b(?:true|false)\b/,
                operator: [/~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.+|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/],
                punctuation: /[{}()\[\];:,]/
            };
            t.interpolation = {
                pattern: /\{[^\r\n}:]+\}/,
                alias: "variable",
                inside: {
                    delimiter: {
                        pattern: /^{|}$/,
                        alias: "punctuation"
                    },
                    rest: t
                }
            },
            t.func = {
                pattern: /[\w-]+\([^)]*\).*/,
                inside: {
                    function: /^[^(]+/,
                    rest: t
                }
            },
            e.languages.stylus = {
                comment: {
                    pattern: /(^|[^\\])(\/\*[\s\S]*?\*\/|\/\/.*)/,
                    lookbehind: !0
                },
                "atrule-declaration": {
                    pattern: /(^\s*)@.+/m,
                    lookbehind: !0,
                    inside: {
                        atrule: /^@[\w-]+/,
                        rest: t
                    }
                },
                "variable-declaration": {
                    pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:(?:\{[^}]*\}|.+)|$)/m,
                    lookbehind: !0,
                    inside: {
                        variable: /^\S+/,
                        rest: t
                    }
                },
                statement: {
                    pattern: /(^[ \t]*)(?:if|else|for|return|unless)[ \t]+.+/m,
                    lookbehind: !0,
                    inside: {
                        keyword: /^\S+/,
                        rest: t
                    }
                },
                "property-declaration": {
                    pattern: /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)[^{\r\n]*(?:;|[^{\r\n,](?=$)(?!(\r?\n|\r)(?:\{|\2[ \t]+)))/m,
                    lookbehind: !0,
                    inside: {
                        property: {
                            pattern: /^[^\s:]+/,
                            inside: {
                                interpolation: t.interpolation
                            }
                        },
                        rest: t
                    }
                },
                selector: {
                    pattern: /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\))?|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\))?|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t]+)))/m,
                    lookbehind: !0,
                    inside: {
                        interpolation: t.interpolation,
                        punctuation: /[{},]/
                    }
                },
                func: t.func,
                string: t.string,
                interpolation: t.interpolation,
                punctuation: /[{}()\[\];:.]/
            }
        }(d);
        var p = d.util.clone(d.languages.typescript);
        d.languages.tsx = d.languages.extend("jsx", p),
        d.languages.wasm = {
            comment: [/\(;[\s\S]*?;\)/, {
                pattern: /;;.*/,
                greedy: !0
            }],
            string: {
                pattern: /"(?:\\[\s\S]|[^"\\])*"/,
                greedy: !0
            },
            keyword: [{
                pattern: /\b(?:align|offset)=/,
                inside: {
                    operator: /=/
                }
            }, {
                pattern: /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
                inside: {
                    punctuation: /\./
                }
            }, /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/],
            variable: /\$[\w!#$%&'*+\-./:<=>?@\\^_`|~]+/i,
            number: /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
            punctuation: /[()]/
        },
        d.languages.yaml = {
            scalar: {
                pattern: /([\-:]\s*(?:![^\s]+)?[ \t]*[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)[^\r\n]+(?:\2[^\r\n]+)*)/,
                lookbehind: !0,
                alias: "string"
            },
            comment: /#.*/,
            key: {
                pattern: /(\s*(?:^|[:\-,[{\r\n?])[ \t]*(?:![^\s]+)?[ \t]*)[^\r\n{[\]},#\s]+?(?=\s*:\s)/,
                lookbehind: !0,
                alias: "atrule"
            },
            directive: {
                pattern: /(^[ \t]*)%.+/m,
                lookbehind: !0,
                alias: "important"
            },
            datetime: {
                pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?)?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?)(?=[ \t]*(?:$|,|]|}))/m,
                lookbehind: !0,
                alias: "number"
            },
            boolean: {
                pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:true|false)[ \t]*(?=$|,|]|})/im,
                lookbehind: !0,
                alias: "important"
            },
            null: {
                pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:null|~)[ \t]*(?=$|,|]|})/im,
                lookbehind: !0,
                alias: "important"
            },
            string: {
                pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)("|')(?:(?!\2)[^\\\r\n]|\\.)*\2(?=[ \t]*(?:$|,|]|}|\s*#))/m,
                lookbehind: !0,
                greedy: !0
            },
            number: {
                pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+\.?\d*|\.?\d+)(?:e[+-]?\d+)?|\.inf|\.nan)[ \t]*(?=$|,|]|})/im,
                lookbehind: !0
            },
            tag: /![^\s]+/,
            important: /[&*][\w]+/,
            punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
        },
        d.languages.yml = d.languages.yaml;
        var f = {
            Prism: d,
            theme: {
                plain: {
                    backgroundColor: "#2a2734",
                    color: "#9a86fd"
                },
                styles: [{
                    types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
                    style: {
                        color: "#6c6783"
                    }
                }, {
                    types: ["namespace"],
                    style: {
                        opacity: .7
                    }
                }, {
                    types: ["tag", "operator", "number"],
                    style: {
                        color: "#e09142"
                    }
                }, {
                    types: ["property", "function"],
                    style: {
                        color: "#9a86fd"
                    }
                }, {
                    types: ["tag-id", "selector", "atrule-id"],
                    style: {
                        color: "#eeebff"
                    }
                }, {
                    types: ["attr-name"],
                    style: {
                        color: "#c4b9fe"
                    }
                }, {
                    types: ["boolean", "string", "entity", "url", "attr-value", "keyword", "control", "directive", "unit", "statement", "regex", "at-rule", "placeholder", "variable"],
                    style: {
                        color: "#ffcc99"
                    }
                }, {
                    types: ["deleted"],
                    style: {
                        textDecorationLine: "line-through"
                    }
                }, {
                    types: ["inserted"],
                    style: {
                        textDecorationLine: "underline"
                    }
                }, {
                    types: ["italic"],
                    style: {
                        fontStyle: "italic"
                    }
                }, {
                    types: ["important", "bold"],
                    style: {
                        fontWeight: "bold"
                    }
                }, {
                    types: ["important"],
                    style: {
                        color: "#c4b9fe"
                    }
                }]
            }
        };
        function g(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function h() {
            return (h = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n)
                        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var m = /\r\n|\r|\n/
          , b = function(e) {
            0 === e.length ? e.push({
                types: ["plain"],
                content: "",
                empty: !0
            }) : 1 === e.length && "" === e[0].content && (e[0].empty = !0)
        }
          , y = function(e, t) {
            var n = e.length;
            return n > 0 && e[n - 1] === t ? e : e.concat(t)
        }
          , v = function(e, t) {
            var n = e.plain
              , a = Object.create(null)
              , r = e.styles.reduce((function(e, n) {
                var a = n.languages
                  , r = n.style;
                return a && !a.includes(t) ? e : (n.types.forEach((function(t) {
                    var n = h({}, e[t], r);
                    e[t] = n
                }
                )),
                e)
            }
            ), a);
            return r.root = n,
            r.plain = h({}, n, {
                backgroundColor: null
            }),
            r
        };
        function E(e, t) {
            var n = {};
            for (var a in e)
                Object.prototype.hasOwnProperty.call(e, a) && -1 === t.indexOf(a) && (n[a] = e[a]);
            return n
        }
        var k = function(e) {
            function t() {
                for (var t = this, n = [], a = arguments.length; a--; )
                    n[a] = arguments[a];
                e.apply(this, n),
                g(this, "getThemeDict", (function(e) {
                    if (void 0 !== t.themeDict && e.theme === t.prevTheme && e.language === t.prevLanguage)
                        return t.themeDict;
                    t.prevTheme = e.theme,
                    t.prevLanguage = e.language;
                    var n = e.theme ? v(e.theme, e.language) : void 0;
                    return t.themeDict = n
                }
                )),
                g(this, "getLineProps", (function(e) {
                    var n = e.key
                      , a = e.className
                      , r = e.style
                      , i = h({}, E(e, ["key", "className", "style", "line"]), {
                        className: "token-line",
                        style: void 0,
                        key: void 0
                    })
                      , o = t.getThemeDict(t.props);
                    return void 0 !== o && (i.style = o.plain),
                    void 0 !== r && (i.style = void 0 !== i.style ? h({}, i.style, r) : r),
                    void 0 !== n && (i.key = n),
                    a && (i.className += " " + a),
                    i
                }
                )),
                g(this, "getStyleForToken", (function(e) {
                    var n = e.types
                      , a = e.empty
                      , r = n.length
                      , i = t.getThemeDict(t.props);
                    if (void 0 !== i) {
                        if (1 === r && "plain" === n[0])
                            return a ? {
                                display: "inline-block"
                            } : void 0;
                        if (1 === r && !a)
                            return i[n[0]];
                        var o = a ? {
                            display: "inline-block"
                        } : {}
                          , s = n.map((function(e) {
                            return i[e]
                        }
                        ));
                        return Object.assign.apply(Object, [o].concat(s))
                    }
                }
                )),
                g(this, "getTokenProps", (function(e) {
                    var n = e.key
                      , a = e.className
                      , r = e.style
                      , i = e.token
                      , o = h({}, E(e, ["key", "className", "style", "token"]), {
                        className: "token " + i.types.join(" "),
                        children: i.content,
                        style: t.getStyleForToken(i),
                        key: void 0
                    });
                    return void 0 !== r && (o.style = void 0 !== o.style ? h({}, o.style, r) : r),
                    void 0 !== n && (o.key = n),
                    a && (o.className += " " + a),
                    o
                }
                ))
            }
            return e && (t.__proto__ = e),
            t.prototype = Object.create(e && e.prototype),
            t.prototype.constructor = t,
            t.prototype.render = function() {
                var e = this.props
                  , t = e.Prism
                  , n = e.language
                  , a = e.code
                  , r = e.children
                  , i = this.getThemeDict(this.props)
                  , o = t.languages[n];
                return r({
                    tokens: function(e) {
                        for (var t = [[]], n = [e], a = [0], r = [e.length], i = 0, o = 0, s = [], l = [s]; o > -1; ) {
                            for (; (i = a[o]++) < r[o]; ) {
                                var c = void 0
                                  , u = t[o]
                                  , d = n[o][i];
                                if ("string" == typeof d ? (u = o > 0 ? u : ["plain"],
                                c = d) : (u = y(u, d.type),
                                d.alias && (u = y(u, d.alias)),
                                c = d.content),
                                "string" == typeof c) {
                                    var p = c.split(m)
                                      , f = p.length;
                                    s.push({
                                        types: u,
                                        content: p[0]
                                    });
                                    for (var g = 1; g < f; g++)
                                        b(s),
                                        l.push(s = []),
                                        s.push({
                                            types: u,
                                            content: p[g]
                                        })
                                } else
                                    o++,
                                    t.push(u),
                                    n.push(c),
                                    a.push(0),
                                    r.push(c.length)
                            }
                            o--,
                            t.pop(),
                            n.pop(),
                            a.pop(),
                            r.pop()
                        }
                        return b(s),
                        l
                    }(void 0 !== o ? t.tokenize(a, o, n) : [a]),
                    className: "prism-code language-" + n,
                    style: void 0 !== i ? i.root : {},
                    getLineProps: this.getLineProps,
                    getTokenProps: this.getTokenProps
                })
            }
            ,
            t
        }(s.Component)
          , S = n(230)
          , w = n.n(S)
          , _ = n(228)
          , A = n.n(_)
          , T = n(229)
          , O = n.n(T)
          , x = n(181)
          , N = n(128)
          , I = n.n(N)
          , R = /{([\d,-]+)}/;
        t.a = function(e) {
            var t = e.children
              , n = e.className
              , a = e.metastring
              , r = Object(x.a)().siteConfig.themeConfig.prism
              , i = void 0 === r ? {} : r
              , c = Object(s.useState)(!1)
              , d = c[0]
              , p = c[1]
              , g = Object(s.useRef)(null)
              , h = Object(s.useRef)(null)
              , m = [];
            if (a && R.test(a)) {
                var b = a.match(R)[1];
                m = O.a.parse(b).filter((function(e) {
                    return e > 0
                }
                ))
            }
            Object(s.useEffect)((function() {
                var e;
                return h.current && (e = new A.a(h.current,{
                    target: function() {
                        return g.current
                    }
                })),
                function() {
                    e && e.destroy()
                }
            }
            ), [h.current, g.current]);
            var y = n && n.replace(/language-/, "");
            !y && i.defaultLanguage && (y = i.defaultLanguage);
            var v = function() {
                window.getSelection().empty(),
                p(!0),
                setTimeout((function() {
                    return p(!1)
                }
                ), 2e3)
            };
            return l.a.createElement(k, Object(o.a)({}, f, {
                theme: i.theme || w.a,
                code: t.trim(),
                language: y
            }), (function(e) {
                var t = e.className
                  , n = e.style
                  , a = e.tokens
                  , r = e.getLineProps
                  , i = e.getTokenProps;
                return l.a.createElement("div", {
                    className: I.a.codeBlockWrapper
                }, l.a.createElement("pre", {
                    ref: g,
                    className: u()(t, I.a.codeBlock),
                    style: n
                }, a.map((function(e, t) {
                    var n = r({
                        line: e,
                        key: t
                    });
                    return m.includes(t + 1) && (n.className = n.className + " docusaurus-highlight-code-line"),
                    l.a.createElement("div", Object(o.a)({
                        key: t
                    }, n), e.map((function(e, t) {
                        return l.a.createElement("span", Object(o.a)({
                            key: t
                        }, i({
                            token: e,
                            key: t
                        })))
                    }
                    )))
                }
                ))), l.a.createElement("button", {
                    ref: h,
                    type: "button",
                    "aria-label": "Copy code to clipboard",
                    className: I.a.copyButton,
                    onClick: v
                }, d ? "Copied" : "Copy"))
            }
            ))
        }
    },
    225: function(e, t, n) {
        "use strict";
        var a = n(17)
          , r = n(73)(!0);
        a(a.P, "Array", {
            includes: function(e) {
                return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
            }
        }),
        n(72)("includes")
    },
    226: function(e, t, n) {
        "use strict";
        var a = n(17)
          , r = n(205);
        a(a.P + a.F * n(206)("includes"), "String", {
            includes: function(e) {
                return !!~r(this, e, "includes").indexOf(e, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    },
    227: function(e, t, n) {
        "use strict";
        var a = n(8)
          , r = n(35)
          , i = n(68)
          , o = n(69);
        n(70)("match", 1, (function(e, t, n, s) {
            return [function(n) {
                var a = e(this)
                  , r = null == n ? void 0 : n[t];
                return void 0 !== r ? r.call(n, a) : new RegExp(n)[t](String(a))
            }
            , function(e) {
                var t = s(n, e, this);
                if (t.done)
                    return t.value;
                var l = a(e)
                  , c = String(this);
                if (!l.global)
                    return o(l, c);
                var u = l.unicode;
                l.lastIndex = 0;
                for (var d, p = [], f = 0; null !== (d = o(l, c)); ) {
                    var g = String(d[0]);
                    p[f] = g,
                    "" === g && (l.lastIndex = i(c, r(l.lastIndex), u)),
                    f++
                }
                return 0 === f ? null : p
            }
            ]
        }
        ))
    },
    228: function(e, t, n) {
        var a;
        a = function() {
            return function(e) {
                var t = {};
                function n(a) {
                    if (t[a])
                        return t[a].exports;
                    var r = t[a] = {
                        i: a,
                        l: !1,
                        exports: {}
                    };
                    return e[a].call(r.exports, r, r.exports, n),
                    r.l = !0,
                    r.exports
                }
                return n.m = e,
                n.c = t,
                n.d = function(e, t, a) {
                    n.o(e, t) || Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: a
                    })
                }
                ,
                n.r = function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }
                ,
                n.t = function(e, t) {
                    if (1 & t && (e = n(e)),
                    8 & t)
                        return e;
                    if (4 & t && "object" == typeof e && e && e.__esModule)
                        return e;
                    var a = Object.create(null);
                    if (n.r(a),
                    Object.defineProperty(a, "default", {
                        enumerable: !0,
                        value: e
                    }),
                    2 & t && "string" != typeof e)
                        for (var r in e)
                            n.d(a, r, function(t) {
                                return e[t]
                            }
                            .bind(null, r));
                    return a
                }
                ,
                n.n = function(e) {
                    var t = e && e.__esModule ? function() {
                        return e.default
                    }
                    : function() {
                        return e
                    }
                    ;
                    return n.d(t, "a", t),
                    t
                }
                ,
                n.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }
                ,
                n.p = "",
                n(n.s = 0)
            }([function(e, t, n) {
                "use strict";
                var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                  , r = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n];
                            a.enumerable = a.enumerable || !1,
                            a.configurable = !0,
                            "value"in a && (a.writable = !0),
                            Object.defineProperty(e, a.key, a)
                        }
                    }
                    return function(t, n, a) {
                        return n && e(t.prototype, n),
                        a && e(t, a),
                        t
                    }
                }()
                  , i = l(n(1))
                  , o = l(n(3))
                  , s = l(n(4));
                function l(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                var c = function(e) {
                    function t(e, n) {
                        !function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        var a = function(e, t) {
                            if (!e)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                        return a.resolveOptions(n),
                        a.listenClick(e),
                        a
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t)
                            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }),
                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(t, e),
                    r(t, [{
                        key: "resolveOptions",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.action = "function" == typeof e.action ? e.action : this.defaultAction,
                            this.target = "function" == typeof e.target ? e.target : this.defaultTarget,
                            this.text = "function" == typeof e.text ? e.text : this.defaultText,
                            this.container = "object" === a(e.container) ? e.container : document.body
                        }
                    }, {
                        key: "listenClick",
                        value: function(e) {
                            var t = this;
                            this.listener = (0,
                            s.default)(e, "click", (function(e) {
                                return t.onClick(e)
                            }
                            ))
                        }
                    }, {
                        key: "onClick",
                        value: function(e) {
                            var t = e.delegateTarget || e.currentTarget;
                            this.clipboardAction && (this.clipboardAction = null),
                            this.clipboardAction = new i.default({
                                action: this.action(t),
                                target: this.target(t),
                                text: this.text(t),
                                container: this.container,
                                trigger: t,
                                emitter: this
                            })
                        }
                    }, {
                        key: "defaultAction",
                        value: function(e) {
                            return u("action", e)
                        }
                    }, {
                        key: "defaultTarget",
                        value: function(e) {
                            var t = u("target", e);
                            if (t)
                                return document.querySelector(t)
                        }
                    }, {
                        key: "defaultText",
                        value: function(e) {
                            return u("text", e)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.listener.destroy(),
                            this.clipboardAction && (this.clipboardAction.destroy(),
                            this.clipboardAction = null)
                        }
                    }], [{
                        key: "isSupported",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"]
                              , t = "string" == typeof e ? [e] : e
                              , n = !!document.queryCommandSupported;
                            return t.forEach((function(e) {
                                n = n && !!document.queryCommandSupported(e)
                            }
                            )),
                            n
                        }
                    }]),
                    t
                }(o.default);
                function u(e, t) {
                    var n = "data-clipboard-" + e;
                    if (t.hasAttribute(n))
                        return t.getAttribute(n)
                }
                e.exports = c
            }
            , function(e, t, n) {
                "use strict";
                var a, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                , i = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var a = t[n];
                            a.enumerable = a.enumerable || !1,
                            a.configurable = !0,
                            "value"in a && (a.writable = !0),
                            Object.defineProperty(e, a.key, a)
                        }
                    }
                    return function(t, n, a) {
                        return n && e(t.prototype, n),
                        a && e(t, a),
                        t
                    }
                }(), o = n(2), s = (a = o) && a.__esModule ? a : {
                    default: a
                }, l = function() {
                    function e(t) {
                        !function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, e),
                        this.resolveOptions(t),
                        this.initSelection()
                    }
                    return i(e, [{
                        key: "resolveOptions",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.action = e.action,
                            this.container = e.container,
                            this.emitter = e.emitter,
                            this.target = e.target,
                            this.text = e.text,
                            this.trigger = e.trigger,
                            this.selectedText = ""
                        }
                    }, {
                        key: "initSelection",
                        value: function() {
                            this.text ? this.selectFake() : this.target && this.selectTarget()
                        }
                    }, {
                        key: "selectFake",
                        value: function() {
                            var e = this
                              , t = "rtl" == document.documentElement.getAttribute("dir");
                            this.removeFake(),
                            this.fakeHandlerCallback = function() {
                                return e.removeFake()
                            }
                            ,
                            this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0,
                            this.fakeElem = document.createElement("textarea"),
                            this.fakeElem.style.fontSize = "12pt",
                            this.fakeElem.style.border = "0",
                            this.fakeElem.style.padding = "0",
                            this.fakeElem.style.margin = "0",
                            this.fakeElem.style.position = "absolute",
                            this.fakeElem.style[t ? "right" : "left"] = "-9999px";
                            var n = window.pageYOffset || document.documentElement.scrollTop;
                            this.fakeElem.style.top = n + "px",
                            this.fakeElem.setAttribute("readonly", ""),
                            this.fakeElem.value = this.text,
                            this.container.appendChild(this.fakeElem),
                            this.selectedText = (0,
                            s.default)(this.fakeElem),
                            this.copyText()
                        }
                    }, {
                        key: "removeFake",
                        value: function() {
                            this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback),
                            this.fakeHandler = null,
                            this.fakeHandlerCallback = null),
                            this.fakeElem && (this.container.removeChild(this.fakeElem),
                            this.fakeElem = null)
                        }
                    }, {
                        key: "selectTarget",
                        value: function() {
                            this.selectedText = (0,
                            s.default)(this.target),
                            this.copyText()
                        }
                    }, {
                        key: "copyText",
                        value: function() {
                            var e = void 0;
                            try {
                                e = document.execCommand(this.action)
                            } catch (t) {
                                e = !1
                            }
                            this.handleResult(e)
                        }
                    }, {
                        key: "handleResult",
                        value: function(e) {
                            this.emitter.emit(e ? "success" : "error", {
                                action: this.action,
                                text: this.selectedText,
                                trigger: this.trigger,
                                clearSelection: this.clearSelection.bind(this)
                            })
                        }
                    }, {
                        key: "clearSelection",
                        value: function() {
                            this.trigger && this.trigger.focus(),
                            window.getSelection().removeAllRanges()
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.removeFake()
                        }
                    }, {
                        key: "action",
                        set: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
                            if (this._action = e,
                            "copy" !== this._action && "cut" !== this._action)
                                throw new Error('Invalid "action" value, use either "copy" or "cut"')
                        },
                        get: function() {
                            return this._action
                        }
                    }, {
                        key: "target",
                        set: function(e) {
                            if (void 0 !== e) {
                                if (!e || "object" !== (void 0 === e ? "undefined" : r(e)) || 1 !== e.nodeType)
                                    throw new Error('Invalid "target" value, use a valid Element');
                                if ("copy" === this.action && e.hasAttribute("disabled"))
                                    throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled")))
                                    throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                this._target = e
                            }
                        },
                        get: function() {
                            return this._target
                        }
                    }]),
                    e
                }();
                e.exports = l
            }
            , function(e, t) {
                e.exports = function(e) {
                    var t;
                    if ("SELECT" === e.nodeName)
                        e.focus(),
                        t = e.value;
                    else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) {
                        var n = e.hasAttribute("readonly");
                        n || e.setAttribute("readonly", ""),
                        e.select(),
                        e.setSelectionRange(0, e.value.length),
                        n || e.removeAttribute("readonly"),
                        t = e.value
                    } else {
                        e.hasAttribute("contenteditable") && e.focus();
                        var a = window.getSelection()
                          , r = document.createRange();
                        r.selectNodeContents(e),
                        a.removeAllRanges(),
                        a.addRange(r),
                        t = a.toString()
                    }
                    return t
                }
            }
            , function(e, t) {
                function n() {}
                n.prototype = {
                    on: function(e, t, n) {
                        var a = this.e || (this.e = {});
                        return (a[e] || (a[e] = [])).push({
                            fn: t,
                            ctx: n
                        }),
                        this
                    },
                    once: function(e, t, n) {
                        var a = this;
                        function r() {
                            a.off(e, r),
                            t.apply(n, arguments)
                        }
                        return r._ = t,
                        this.on(e, r, n)
                    },
                    emit: function(e) {
                        for (var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), a = 0, r = n.length; a < r; a++)
                            n[a].fn.apply(n[a].ctx, t);
                        return this
                    },
                    off: function(e, t) {
                        var n = this.e || (this.e = {})
                          , a = n[e]
                          , r = [];
                        if (a && t)
                            for (var i = 0, o = a.length; i < o; i++)
                                a[i].fn !== t && a[i].fn._ !== t && r.push(a[i]);
                        return r.length ? n[e] = r : delete n[e],
                        this
                    }
                },
                e.exports = n
            }
            , function(e, t, n) {
                var a = n(5)
                  , r = n(6);
                e.exports = function(e, t, n) {
                    if (!e && !t && !n)
                        throw new Error("Missing required arguments");
                    if (!a.string(t))
                        throw new TypeError("Second argument must be a String");
                    if (!a.fn(n))
                        throw new TypeError("Third argument must be a Function");
                    if (a.node(e))
                        return function(e, t, n) {
                            return e.addEventListener(t, n),
                            {
                                destroy: function() {
                                    e.removeEventListener(t, n)
                                }
                            }
                        }(e, t, n);
                    if (a.nodeList(e))
                        return function(e, t, n) {
                            return Array.prototype.forEach.call(e, (function(e) {
                                e.addEventListener(t, n)
                            }
                            )),
                            {
                                destroy: function() {
                                    Array.prototype.forEach.call(e, (function(e) {
                                        e.removeEventListener(t, n)
                                    }
                                    ))
                                }
                            }
                        }(e, t, n);
                    if (a.string(e))
                        return function(e, t, n) {
                            return r(document.body, e, t, n)
                        }(e, t, n);
                    throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
                }
            }
            , function(e, t) {
                t.node = function(e) {
                    return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
                }
                ,
                t.nodeList = function(e) {
                    var n = Object.prototype.toString.call(e);
                    return void 0 !== e && ("[object NodeList]" === n || "[object HTMLCollection]" === n) && "length"in e && (0 === e.length || t.node(e[0]))
                }
                ,
                t.string = function(e) {
                    return "string" == typeof e || e instanceof String
                }
                ,
                t.fn = function(e) {
                    return "[object Function]" === Object.prototype.toString.call(e)
                }
            }
            , function(e, t, n) {
                var a = n(7);
                function r(e, t, n, a, r) {
                    var o = i.apply(this, arguments);
                    return e.addEventListener(n, o, r),
                    {
                        destroy: function() {
                            e.removeEventListener(n, o, r)
                        }
                    }
                }
                function i(e, t, n, r) {
                    return function(n) {
                        n.delegateTarget = a(n.target, t),
                        n.delegateTarget && r.call(e, n)
                    }
                }
                e.exports = function(e, t, n, a, i) {
                    return "function" == typeof e.addEventListener ? r.apply(null, arguments) : "function" == typeof n ? r.bind(null, document).apply(null, arguments) : ("string" == typeof e && (e = document.querySelectorAll(e)),
                    Array.prototype.map.call(e, (function(e) {
                        return r(e, t, n, a, i)
                    }
                    )))
                }
            }
            , function(e, t) {
                var n = 9;
                if ("undefined" != typeof Element && !Element.prototype.matches) {
                    var a = Element.prototype;
                    a.matches = a.matchesSelector || a.mozMatchesSelector || a.msMatchesSelector || a.oMatchesSelector || a.webkitMatchesSelector
                }
                e.exports = function(e, t) {
                    for (; e && e.nodeType !== n; ) {
                        if ("function" == typeof e.matches && e.matches(t))
                            return e;
                        e = e.parentNode
                    }
                }
            }
            ])
        }
        ,
        e.exports = a()
    },
    229: function(e, t) {
        e.exports.parse = function(e) {
            var t = e.split(",").map((function(e) {
                return function(e) {
                    if (/^-?\d+$/.test(e))
                        return parseInt(e, 10);
                    var t;
                    if (t = e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)) {
                        var n = t[1]
                          , a = t[2]
                          , r = t[3];
                        if (n && r) {
                            var i = []
                              , o = (n = parseInt(n)) < (r = parseInt(r)) ? 1 : -1;
                            "-" != a && ".." != a && "\u2025" != a || (r += o);
                            for (var s = n; s != r; s += o)
                                i.push(s);
                            return i
                        }
                    }
                    return []
                }(e)
            }
            ));
            return 0 === t.length ? [] : 1 === t.length ? Array.isArray(t[0]) ? t[0] : t : t.reduce((function(e, t) {
                return Array.isArray(e) || (e = [e]),
                Array.isArray(t) || (t = [t]),
                e.concat(t)
            }
            ))
        }
    },
    230: function(e, t) {
        e.exports = {
            plain: {
                color: "#bfc7d5",
                backgroundColor: "#292d3e"
            },
            styles: [{
                types: ["comment"],
                style: {
                    color: "rgb(105, 112, 152)",
                    fontStyle: "italic"
                }
            }, {
                types: ["string"],
                style: {
                    color: "rgb(195, 232, 141)"
                }
            }, {
                types: ["number"],
                style: {
                    color: "rgb(247, 140, 108)"
                }
            }, {
                types: ["builtin", "char", "constant", "function"],
                style: {
                    color: "rgb(130, 170, 255)"
                }
            }, {
                types: ["punctuation", "selector"],
                style: {
                    color: "rgb(199, 146, 234)"
                }
            }, {
                types: ["variable"],
                style: {
                    color: "rgb(191, 199, 213)"
                }
            }, {
                types: ["class-name", "attr-name"],
                style: {
                    color: "rgb(255, 203, 107)"
                }
            }, {
                types: ["tag"],
                style: {
                    color: "rgb(255, 85, 114)"
                }
            }, {
                types: ["operator"],
                style: {
                    color: "rgb(137, 221, 255)"
                }
            }, {
                types: ["boolean"],
                style: {
                    color: "rgb(255, 88, 116)"
                }
            }, {
                types: ["keyword"],
                style: {
                    fontStyle: "italic"
                }
            }, {
                types: ["doctype"],
                style: {
                    color: "rgb(199, 146, 234)",
                    fontStyle: "italic"
                }
            }, {
                types: ["namespace"],
                style: {
                    color: "rgb(178, 204, 214)"
                }
            }, {
                types: ["url"],
                style: {
                    color: "rgb(221, 221, 221)"
                }
            }]
        }
    }
}]);
