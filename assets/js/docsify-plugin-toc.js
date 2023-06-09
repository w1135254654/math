!function (n) {
    var e = {};
    function t(o) {
        if (e[o]) {
            return e[o].exports;
        }
        var i = e[o] = {
            i: o, l: !1, exports: {}
        };
        return n[o].call(i.exports, i, i.exports, t), i.l = !0, i.exports
    }
    t.m = n, t.c = e, t.d = function (n, e, o) {
        t.o(n, e) || Object.defineProperty(n, e, {
            enumerable: !0, get: o
        })
    },
        t.r = function (n) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag,
                {
                    value: "Module"
                }), Object.defineProperty(n, "__esModule", {
                    value: !0
                })
        },
        t.t = function (n, e) {
            if (1 & e && (n = t(n)), 8 & e) {
                return n;
            }
            if (4 & e && "object" == typeof n && n && n.__esModule) {
                return n;
            }
            var o = Object.create(null);
            if (t.r(o), Object.defineProperty(o, "default", {
                enumerable: !0, value: n
            }), 2 & e && "string" != typeof n) for (var i in n) t.d(o, i, function (e) {
                return n[e]
            }
                .bind(null, i));
            return o;
        },
        t.n = function (n) {
            var e = n && n.__esModule ? function () {
                return n.default
            }
                : function () {
                    return n;
                };
            return t.d(e, "a", e), e;
        },
        t.o = function (n, e) {
            return Object.prototype.hasOwnProperty.call(n, e);
        },
        t.p = "", t(t.s = 3)
}
    ([function (n, e, t) {
        "use strict";
        var o = t(2), i = t.n(o)()((function (n) {
            return n[1];
        }));
        i.push([n.i, '@media only screen and (max-width: 1299px) {\n  aside.toc-nav {\n    max-width: 45px;\n    opacity: 0.6;\n    right: 0 !important;\n    margin-right: 0 !important;\n    background: #fff;\n  }\n  aside.toc-nav:hover {\n    max-width: inherit;\n    opacity: 1;\n  }\n}\n\n@media only screen and (min-width: 1300px) {\n  section.content {\n    padding-right: 250px;\n  }\n}\n\naside.toc-nav {\n  position: fixed;\n  top: 70px;\n  right: 3%;\n  margin-right: 20px;\n  width: 250px;\n  z-index: 999999;\n  align-self: flex-start;\n  flex: 0 0 auto;\n  overflow-y: auto;\n  max-height: 70%;\n}\n\naside.toc-nav.nothing {\n  width: 0;\n}\n\n.page_toc {\n  position: relative;\n  left: 0;\n  margin: 10px 0;\n  border: none;\n  font-size: 1.0em;\n}\n\n.page_toc p.title {\n  margin: 0;\n  padding-bottom: 5px;\n  font-weight: 600;\n  font-size: 1.2em;\n}\n\n.page_toc .anchor:hover:after {\n  content: "";\n}\n.page_toc div[class^="lv"] a:hover span {\n  color: var(--sidebar-nav-link-color--active, #42b983);\n}\n\n.page_toc div {\n  border-left: 2px solid #e8e8e8;\n  text-indent: 10px;\n  padding: 2px 0;\n  cursor: pointer;\n}\n\n.page_toc div.active {\n  border-left-color: var(--sidebar-nav-link-color--active, #42b983);\n  transition: border-left-color 0.23s;\n}\n\n.page_toc div.active a span {\n  color: var(--sidebar-nav-link-color--active, #42b983);\n  transition: color 0.23s;\n}\n\n.page_toc div[class^="lv"] a {\n  color: var(--text-color-base, black);\n  text-decoration: none;\n  font-weight: 300;\n  line-height: 2em;\n  display: block;\n}\n\n.page_toc div[class^="lv"] a span {\n  color: var(--sidebar-nav-link-color--hover, var(--sidebar-nav-link-color));\n  display: block;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow:ellipsis;\n}\n\n.page_toc div.lv2 {\n  text-indent: 20px;\n}\n\n.page_toc div.lv3 {\n  text-indent: 30px;\n}\n\n.page_toc div.lv4 {\n  text-indent: 40px;\n}\n\n.page_toc div.lv5 {\n  text-indent: 50px;\n}\n\n.page_toc div.lv6 {\n  text-indent: 60px;\n}',
            ""]), e.a = i;
    },
    function (n, e, t) {
        "use strict";
        var o, i = function () {
            return void 0 === o && (o = Boolean(window && document && document.all && !window.atob)), o;
        },
            r = function () {
                var n = {};
                return function (e) {
                    if (void 0 === n[e]) {
                        var t = document.querySelector(e);
                        if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) {
                            try {
                                t = t.contentDocument.head
                            }
                            catch (n) {
                                t = null;
                            }
                        }
                        n[e] = t
                    }
                    return n[e];
                }
            }(),
            a = [];
        function c(n) {
            for (var e = - 1, t = 0; t < a.length; t++) {
                if (a[t].identifier === n) {
                    e = t;
                    break
                }
                return e;
            }
        }
        function d(n, e) {
            for (var t = {}, o = [], i = 0; i < n.length; i++) {
                var r = n[i], d = e.base ? r[0] + e.base : r[0], s = t[d] || 0, l = "".concat(d, " ").concat(s);
                t[d] = s + 1;
                var u = c(l), f = {
                    css: r[1], media: r[2], sourceMap: r[3]
                };
                - 1 !== u ? (a[u].references++, a[u].updater(f)) : a.push({
                    identifier: l, updater: h(f, e), references: 1
                }), o.push(l)
            }
            return o
        }
        function s(n) {
            var e = document.createElement("style"), o = n.attributes || {};
            if (void 0 === o.nonce) {
                var i = t.nc;
                i && (o.nonce = i)
            }
            if (Object.keys(o).forEach((function (n) {
                e.setAttribute(n, o[n])
            })), "function" == typeof n.insert) n.insert(e);
            else {
                var a = r(n.insert || "head");
                if (!a) {
                    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                }
                a.appendChild(e)
            }
            return e
        }
        var l, u = (l = [], function (n, e) {
            return l[n] = e, l.filter(Boolean).join("\n");
        });
        function f(n, e, t, o) {
            var i = t ? "" : o.media ? "@media ".concat(o.media, " {").concat(o.css, "}") : o.css;
            if (n.styleSheet) {
                n.styleSheet.cssText = u(e, i);
            }
            else {
                var r = document.createTextNode(i), a = n.childNodes;
                a[e] && n.removeChild(a[e]), a.length ? n.insertBefore(r, a[e]) : n.appendChild(r)
            }
        }
        function p(n, e, t) {
            var o = t.css, i = t.media, r = t.sourceMap;
            if (i ? n.setAttribute("media", i) : n.removeAttribute("media"), r && "undefined" != typeof btoa && (o += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r)))),
                " */")), n.styleSheet) n.styleSheet.cssText = o;
            else {
                for (; n.firstChild;) {
                    n.removeChild(n.firstChild);
                }
                n.appendChild(document.createTextNode(o))
            }
        }
        var v = null, g = 0;
        function h(n, e) {
            var t, o, i;
            if (e.singleton) {
                var r = g++;
                t = v || (v = s(e)), o = f.bind(null, t, r, !1), i = f.bind(null, t, r, !0)
            }
            else {
                t = s(e), o = p.bind(null, t, e), i = function () {
                    !function (n) {
                        if (null === n.parentNode) {
                            return !1;
                        }
                        n.parentNode.removeChild(n)
                    }
                        (t)
                };
            }
            return o(n), function (e) {
                if (e) {
                    if (e.css === n.css && e.media === n.media && e.sourceMap === n.sourceMap) {
                        return;
                    }
                    o(n = e)
                }
                else {
                    i();
                }
            }
        }
        n.exports = function (n, e) {
            (e = e || {}).singleton || "boolean" == typeof e.singleton || (e.singleton = i());
            var t = d(n = n || [], e);
            return function (n) {
                if (n = n || [], "[object Array]" === Object.prototype.toString.call(n)) {
                    for (var o = 0; o < t.length; o++) {
                        var i = c(t[o]);
                        a[i].references--
                    }
                    for (var r = d(n, e), s = 0; s < t.length; s++) {
                        var l = c(t[s]);
                        0 === a[l].references && (a[l].updater(), a.splice(l, 1))
                    }
                    t = r;
                }
            }
        }
    },
    function (n, e, t) {
        "use strict";
        n.exports = function (n) {
            var e = [];
            return e.toString = function () {
                return this.map((function (e) {
                    var t = n(e);
                    return e[2] ? "@media ".concat(e[2], " {").concat(t, "}") : t;
                })).join("")
            },
                e.i = function (n, t, o) {
                    "string" == typeof n && (n = [[null, n, ""]]);
                    var i = {};
                    if (o) for (var r = 0;
                        r < this.length;
                        r++) {
                        var a = this[r][0];
                        null != a && (i[a] = !0)
                    }
                    for (var c = 0; c < n.length; c++) {
                        var d = [].concat(n[c]);
                        o && i[d[0]] || (t && (d[2] ? d[2] = "".concat(t, " and ").concat(d[2]) : d[2] = t), e.push(d));
                    }
                },
                e
        }
    },
    function (n, e, t) {
        "use strict";
        t.r(e);
        var o = t(1), i = t.n(o), r = t(0), a = {
            insert: "head", singleton: !1
        };
        i()(r.a, a), r.a.locals;
        function c(n, e) {
            let t = ['<div class="page_toc">'];
            const o = [];
            return (n = document.querySelectorAll("#main " + window.$docsify.toc.target)) && n.forEach((function (n) {
                const e = function (n, e) {
                    if (n >= 1 && n <= window.$docsify.toc.tocMaxLevel) {
                        return ['<div class="lv' + n + '">', e, "</div>"].join("")
                    }
                    return ""
                }
                    (n.tagName.replace(/h/gi, ""), n.innerHTML);
                e && o.push(e)
            })), o.length > 0 ? (t = t.concat(o), t.push("</div>"), t.join("")) : ""
        }
        const d = () => {
            const n = window.innerHeight, e = document.querySelectorAll("#main " + window.$docsify.toc.target);
            let t = [];
            e.forEach((e, o) => {
                const i = e.getBoundingClientRect();
                i.top <= n && i.height + i.top > 0 && t.push(o)
            });
            const o = document.scrollingElement || document.body;
            if (0 === o.scrollTop ? t = [0] : o.offsetHeight - window.innerHeight - o.scrollTop < 5 && t.length > 0 && (t = [t[0]]),
                t.length) {
                document.querySelectorAll(".page_toc>div").forEach((n, e) => {
                    e === t[0] ? n.classList.add("active") : n.classList.remove("active")
                })
            }
        };
        window.$docsify || (window.$docsify = {}), window.$docsify.plugins = (window.$docsify.plugins || []).concat((function (n,
            e) {
            n.mounted((function () {
                const n = window.Docsify.dom.find(".content");
                if (n) {
                    const e = window.Docsify.dom.create("aside", "");
                    window.Docsify.dom.toggleClass(e, "add", "toc-nav"), window.Docsify.dom.before(n, e)
                }
            })), n.doneEach((function () {
                const n = window.Docsify.dom.find(".toc-nav");
                n && (n.innerHTML = c().trim(), "" === n.innerHTML ? (window.Docsify.dom.toggleClass(n, "add",
                    "nothing"), window.document.removeEventListener("scroll", d)) : (window.Docsify.dom.toggleClass(n,
                        "remove", "nothing"), d(), window.document.addEventListener("scroll", d)));
            }))
        }))
    }]);