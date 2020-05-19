(window.webpackJsonp = window.webpackJsonp || []).push([[6], {
    176: function(e, t, a) {
        "use strict";
        a.r(t);
        var n = a(0)
          , l = a.n(n)
          , r = a(189)
          , i = a(181)
          , c = a(184)
          , m = a(185);
        var s = function(e) {
            var t = e.metadata;
            return l.a.createElement("nav", {
                className: "pagination-nav"
            }, l.a.createElement("div", {
                className: "pagination-nav__item"
            }, t.previous && l.a.createElement(m.a, {
                className: "pagination-nav__link",
                to: t.previous.permalink
            }, l.a.createElement("h5", {
                className: "pagination-nav__link--sublabel"
            }, "Previous"), l.a.createElement("h4", {
                className: "pagination-nav__link--label"
            }, "\xab ", t.previous.title))), l.a.createElement("div", {
                className: "pagination-nav__item pagination-nav__item--next"
            }, t.next && l.a.createElement(m.a, {
                className: "pagination-nav__link",
                to: t.next.permalink
            }, l.a.createElement("h5", {
                className: "pagination-nav__link--sublabel"
            }, "Next"), l.a.createElement("h4", {
                className: "pagination-nav__link--label"
            }, t.next.title, " \xbb"))))
        };
        var o = function(e, t, a) {
            var l = Object(n.useState)(void 0)
              , r = l[0]
              , i = l[1];
            Object(n.useEffect)((function() {
                var n = []
                  , l = [];
                function c() {
                    var c = function() {
                        var e = 0
                          , t = null;
                        for (n = document.getElementsByClassName("anchor"); e < n.length && !t; ) {
                            var l = n[e]
                              , r = l.getBoundingClientRect().top;
                            r >= 0 && r <= a && (t = l),
                            e += 1
                        }
                        return t
                    }();
                    if (c) {
                        var m = 0
                          , s = !1;
                        for (l = document.getElementsByClassName(e); m < l.length && !s; ) {
                            var o = l[m]
                              , d = o.href
                              , v = decodeURIComponent(d.substring(d.indexOf("#") + 1));
                            c.id === v && (r && r.classList.remove(t),
                            o.classList.add(t),
                            i(o),
                            s = !0),
                            m += 1
                        }
                    }
                }
                return document.addEventListener("scroll", c),
                document.addEventListener("resize", c),
                c(),
                function() {
                    document.removeEventListener("scroll", c),
                    document.removeEventListener("resize", c)
                }
            }
            ))
        }
          , d = a(126)
          , v = a.n(d)
          , E = "contents__link"
          , g = "contents__link--active"
          , u = 100;
        function p(e) {
            var t = e.headings;
            return o(E, g, u),
            l.a.createElement("div", {
                className: "col col--3"
            }, l.a.createElement("div", {
                className: v.a.tableOfContents
            }, l.a.createElement(h, {
                headings: t
            })))
        }
        function h(e) {
            var t = e.headings
              , a = e.isChild;
            return t.length ? l.a.createElement("ul", {
                className: a ? "" : "contents contents__left-border"
            }, t.map((function(e) {
                return l.a.createElement("li", {
                    key: e.id
                }, l.a.createElement("a", {
                    href: "#" + e.id,
                    className: E,
                    dangerouslySetInnerHTML: {
                        __html: e.value
                    }
                }), l.a.createElement(h, {
                    isChild: !0,
                    headings: e.children
                }))
            }
            ))) : null
        }
        t.default = function(e) {
            var t = Object(i.a)().siteConfig
              , a = (void 0 === t ? {} : t).url
              , n = e.content
              , m = n.metadata
              , o = m.description
              , d = m.title
              , E = m.permalink
              , g = m.image
              , u = m.editUrl
              , h = m.lastUpdatedAt
              , _ = m.lastUpdatedBy
              , f = m.keywords
              , N = m.version
              , b = n.frontMatter
              , k = b.hide_title
              , w = b.hide_table_of_contents
              , y = a + Object(c.a)(g);
            return l.a.createElement(l.a.Fragment, null, l.a.createElement(r.a, null, d && l.a.createElement("title", null, d), o && l.a.createElement("meta", {
                name: "description",
                content: o
            }), o && l.a.createElement("meta", {
                property: "og:description",
                content: o
            }), f && f.length && l.a.createElement("meta", {
                name: "keywords",
                content: f.join(",")
            }), g && l.a.createElement("meta", {
                property: "og:image",
                content: y
            }), g && l.a.createElement("meta", {
                property: "twitter:image",
                content: y
            }), g && l.a.createElement("meta", {
                name: "twitter:image:alt",
                content: "Image for " + d
            }), E && l.a.createElement("meta", {
                property: "og:url",
                content: a + E
            })), l.a.createElement("div", {
                className: "padding-vert--lg"
            }, l.a.createElement("div", {
                className: "container"
            }, l.a.createElement("div", {
                className: "row"
            }, l.a.createElement("div", {
                className: "col"
            }, l.a.createElement("div", {
                className: v.a.docItemContainer
            }, l.a.createElement("article", null, N && l.a.createElement("span", {
                style: {
                    verticalAlign: "top"
                },
                className: "badge badge--info"
            }, "Version: ", N), !k && l.a.createElement("header", null, l.a.createElement("h1", {
                className: v.a.docTitle
            }, d)), l.a.createElement("div", {
                className: "markdown"
            }, l.a.createElement(n, null))), (u || h || _) && l.a.createElement("div", {
                className: "margin-vert--xl"
            }, l.a.createElement("div", {
                className: "row"
            }, l.a.createElement("div", {
                className: "col"
            }, u && l.a.createElement("a", {
                href: u,
                target: "_blank",
                rel: "noreferrer noopener"
            }, l.a.createElement("svg", {
                fill: "currentColor",
                height: "1.2em",
                width: "1.2em",
                preserveAspectRatio: "xMidYMid meet",
                viewBox: "0 0 40 40",
                style: {
                    marginRight: "0.3em",
                    verticalAlign: "sub"
                }
            }, l.a.createElement("g", null, l.a.createElement("path", {
                d: "m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"
            }))), "Edit this page")), (h || _) && l.a.createElement("div", {
                className: "col text--right"
            }, l.a.createElement("em", null, l.a.createElement("small", null, "Last updated", " ", h && l.a.createElement(l.a.Fragment, null, "on", " ", l.a.createElement("time", {
                dateTime: new Date(1e3 * h).toISOString(),
                className: v.a.docLastUpdatedAt
            }, new Date(1e3 * h).toLocaleDateString()), _ && " "), _ && l.a.createElement(l.a.Fragment, null, "by ", l.a.createElement("strong", null, _)), !1))))), l.a.createElement("div", {
                className: "margin-vert--lg"
            }, l.a.createElement(s, {
                metadata: m
            })))), !w && n.rightToc && l.a.createElement(p, {
                headings: n.rightToc
            })))))
        }
    }
}]);
