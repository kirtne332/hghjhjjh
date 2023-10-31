(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]')) r(a);
    new MutationObserver(a => {
        for (const s of a)
            if (s.type === "childList")
                for (const c of s.addedNodes) c.tagName === "LINK" && c.rel === "modulepreload" && r(c)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(a) {
        const s = {};
        return a.integrity && (s.integrity = a.integrity), a.referrerPolicy && (s.referrerPolicy = a.referrerPolicy), a.crossOrigin === "use-credentials" ? s.credentials = "include" : a.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s
    }

    function r(a) {
        if (a.ep) return;
        a.ep = !0;
        const s = n(a);
        fetch(a.href, s)
    }
})();
var ke, m, H1, _e, l1, S1, je, $1, ge = {},
    D1 = [],
    _t = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
    xe = Array.isArray;

function ee(e, t) {
    for (var n in t) e[n] = t[n];
    return e
}

function x1(e) {
    var t = e.parentNode;
    t && t.removeChild(e)
}

function le(e, t, n) {
    var r, a, s, c = {};
    for (s in t) s == "key" ? r = t[s] : s == "ref" ? a = t[s] : c[s] = t[s];
    if (arguments.length > 2 && (c.children = arguments.length > 3 ? ke.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
        for (s in e.defaultProps) c[s] === void 0 && (c[s] = e.defaultProps[s]);
    return Oe(e, c, r, a, null)
}

function Oe(e, t, n, r, a) {
    var s = {
        type: e,
        props: t,
        key: n,
        ref: r,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: a ?? ++H1
    };
    return a == null && m.vnode != null && m.vnode(s), s
}

function B(e) {
    return e.children
}

function z(e, t) {
    this.props = e, this.context = t
}

function Me(e, t) {
    if (t == null) return e.__ ? Me(e.__, e.__.__k.indexOf(e) + 1) : null;
    for (var n; t < e.__k.length; t++)
        if ((n = e.__k[t]) != null && n.__e != null) return n.__d || n.__e;
    return typeof e.type == "function" ? Me(e) : null
}

function B1(e) {
    var t, n;
    if ((e = e.__) != null && e.__c != null) {
        for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
            if ((n = e.__k[t]) != null && n.__e != null) {
                e.__e = e.__c.base = n.__e;
                break
            } return B1(e)
    }
}

function Ke(e) {
    (!e.__d && (e.__d = !0) && _e.push(e) && !Se.__r++ || l1 !== m.debounceRendering) && ((l1 = m.debounceRendering) || S1)(Se)
}

function Se() {
    var e, t, n, r, a, s, c, l, i;
    for (_e.sort(je); e = _e.shift();) e.__d && (t = _e.length, r = void 0, a = void 0, s = void 0, l = (c = (n = e).__v).__e, (i = n.__P) && (r = [], a = [], (s = ee({}, c)).__v = c.__v + 1, Ge(i, c, s, n.__n, i.ownerSVGElement !== void 0, c.__h != null ? [l] : null, r, l ?? Me(c), c.__h, a), F1(r, c, a), c.__e != l && B1(c)), _e.length > t && _e.sort(je));
    Se.__r = 0
}

function V1(e, t, n, r, a, s, c, l, i, d, h) {
    var _, C, u, f, g, $, v, O, W, U = 0,
        R = r && r.__k || D1,
        ne = R.length,
        K = ne,
        X = t.length;
    for (n.__k = [], _ = 0; _ < X; _++)(f = n.__k[_] = (f = t[_]) == null || typeof f == "boolean" || typeof f == "function" ? null : typeof f == "string" || typeof f == "number" || typeof f == "bigint" ? Oe(null, f, null, null, f) : xe(f) ? Oe(B, {
        children: f
    }, null, null, null) : f.__b > 0 ? Oe(f.type, f.props, f.key, f.ref ? f.ref : null, f.__v) : f) != null ? (f.__ = n, f.__b = n.__b + 1, (O = dt(f, R, v = _ + U, K)) === -1 ? u = ge : (u = R[O] || ge, R[O] = void 0, K--), Ge(e, f, u, a, s, c, l, i, d, h), g = f.__e, (C = f.ref) && u.ref != C && (u.ref && e1(u.ref, null, f), h.push(C, f.__c || g, f)), g != null && ($ == null && ($ = g), (W = u === ge || u.__v === null) ? O == -1 && U-- : O !== v && (O === v + 1 ? U++ : O > v ? K > X - v ? U += O - v : U-- : U = O < v && O == v - 1 ? O - v : 0), v = _ + U, typeof f.type != "function" || O === v && u.__k !== f.__k ? typeof f.type == "function" || O === v && !W ? f.__d !== void 0 ? (i = f.__d, f.__d = void 0) : i = g.nextSibling : i = W1(e, g, i) : i = U1(f, i, e), typeof n.type == "function" && (n.__d = i))) : (u = R[_]) && u.key == null && u.__e && (u.__e == i && (u.__ = r, i = Me(u)), qe(u, u, !1), R[_] = null);
    for (n.__e = $, _ = ne; _--;) R[_] != null && (typeof n.type == "function" && R[_].__e != null && R[_].__e == n.__d && (n.__d = R[_].__e.nextSibling), qe(R[_], R[_]))
}

function U1(e, t, n) {
    for (var r, a = e.__k, s = 0; a && s < a.length; s++)(r = a[s]) && (r.__ = e, t = typeof r.type == "function" ? U1(r, t, n) : W1(n, r.__e, t));
    return t
}

function Ne(e, t) {
    return t = t || [], e == null || typeof e == "boolean" || (xe(e) ? e.some(function (n) {
        Ne(n, t)
    }) : t.push(e)), t
}

function W1(e, t, n) {
    return n == null || n.parentNode !== e ? e.insertBefore(t, null) : t == n && t.parentNode != null || e.insertBefore(t, n), t.nextSibling
}

function dt(e, t, n, r) {
    var a = e.key,
        s = e.type,
        c = n - 1,
        l = n + 1,
        i = t[n];
    if (i === null || i && a == i.key && s === i.type) return n;
    if (r > (i != null ? 1 : 0))
        for (; c >= 0 || l < t.length;) {
            if (c >= 0) {
                if ((i = t[c]) && a == i.key && s === i.type) return c;
                c--
            }
            if (l < t.length) {
                if ((i = t[l]) && a == i.key && s === i.type) return l;
                l++
            }
        }
    return -1
}

function pt(e, t, n, r, a) {
    var s;
    for (s in n) s === "children" || s === "key" || s in t || $e(e, s, null, n[s], r);
    for (s in t) a && typeof t[s] != "function" || s === "children" || s === "key" || s === "value" || s === "checked" || n[s] === t[s] || $e(e, s, t[s], n[s], r)
}

function c1(e, t, n) {
    t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || _t.test(t) ? n : n + "px"
}

function $e(e, t, n, r, a) {
    var s;
    e: if (t === "style")
        if (typeof n == "string") e.style.cssText = n;
        else {
            if (typeof r == "string" && (e.style.cssText = r = ""), r)
                for (t in r) n && t in n || c1(e.style, t, "");
            if (n)
                for (t in n) r && n[t] === r[t] || c1(e.style, t, n[t])
        }
    else if (t[0] === "o" && t[1] === "n") s = t !== (t = t.replace(/(PointerCapture)$|Capture$/, "$1")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + s] = n, n ? r ? n.u = r.u : (n.u = Date.now(), e.addEventListener(t, s ? d1 : _1, s)) : e.removeEventListener(t, s ? d1 : _1, s);
    else if (t !== "dangerouslySetInnerHTML") {
        if (a) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (t !== "width" && t !== "height" && t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t !== "rowSpan" && t !== "colSpan" && t !== "role" && t in e) try {
            e[t] = n ?? "";
            break e
        } catch {}
        typeof n == "function" || (n == null || n === !1 && t[4] !== "-" ? e.removeAttribute(t) : e.setAttribute(t, n))
    }
}

function _1(e) {
    var t = this.l[e.type + !1];
    if (e.t) {
        if (e.t <= t.u) return
    } else e.t = Date.now();
    return t(m.event ? m.event(e) : e)
}

function d1(e) {
    return this.l[e.type + !0](m.event ? m.event(e) : e)
}

function Ge(e, t, n, r, a, s, c, l, i, d) {
    var h, _, C, u, f, g, $, v, O, W, U, R, ne, K, X, D = t.type;
    if (t.constructor !== void 0) return null;
    n.__h != null && (i = n.__h, l = t.__e = n.__e, t.__h = null, s = [l]), (h = m.__b) && h(t);
    e: if (typeof D == "function") try {
        if (v = t.props, O = (h = D.contextType) && r[h.__c], W = h ? O ? O.props.value : h.__ : r, n.__c ? $ = (_ = t.__c = n.__c).__ = _.__E : ("prototype" in D && D.prototype.render ? t.__c = _ = new D(v, W) : (t.__c = _ = new z(v, W), _.constructor = D, _.render = ht), O && O.sub(_), _.props = v, _.state || (_.state = {}), _.context = W, _.__n = r, C = _.__d = !0, _.__h = [], _._sb = []), _.__s == null && (_.__s = _.state), D.getDerivedStateFromProps != null && (_.__s == _.state && (_.__s = ee({}, _.__s)), ee(_.__s, D.getDerivedStateFromProps(v, _.__s))), u = _.props, f = _.state, _.__v = t, C) D.getDerivedStateFromProps == null && _.componentWillMount != null && _.componentWillMount(), _.componentDidMount != null && _.__h.push(_.componentDidMount);
        else {
            if (D.getDerivedStateFromProps == null && v !== u && _.componentWillReceiveProps != null && _.componentWillReceiveProps(v, W), !_.__e && (_.shouldComponentUpdate != null && _.shouldComponentUpdate(v, _.__s, W) === !1 || t.__v === n.__v)) {
                for (t.__v !== n.__v && (_.props = v, _.state = _.__s, _.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function (fe) {
                        fe && (fe.__ = t)
                    }), U = 0; U < _._sb.length; U++) _.__h.push(_._sb[U]);
                _._sb = [], _.__h.length && c.push(_);
                break e
            }
            _.componentWillUpdate != null && _.componentWillUpdate(v, _.__s, W), _.componentDidUpdate != null && _.__h.push(function () {
                _.componentDidUpdate(u, f, g)
            })
        }
        if (_.context = W, _.props = v, _.__P = e, _.__e = !1, R = m.__r, ne = 0, "prototype" in D && D.prototype.render) {
            for (_.state = _.__s, _.__d = !1, R && R(t), h = _.render(_.props, _.state, _.context), K = 0; K < _._sb.length; K++) _.__h.push(_._sb[K]);
            _._sb = []
        } else
            do _.__d = !1, R && R(t), h = _.render(_.props, _.state, _.context), _.state = _.__s; while (_.__d && ++ne < 25);
        _.state = _.__s, _.getChildContext != null && (r = ee(ee({}, r), _.getChildContext())), C || _.getSnapshotBeforeUpdate == null || (g = _.getSnapshotBeforeUpdate(u, f)), V1(e, xe(X = h != null && h.type === B && h.key == null ? h.props.children : h) ? X : [X], t, n, r, a, s, c, l, i, d), _.base = t.__e, t.__h = null, _.__h.length && c.push(_), $ && (_.__E = _.__ = null)
    } catch (fe) {
        t.__v = null, (i || s != null) && (t.__e = l, t.__h = !!i, s[s.indexOf(l)] = null), m.__e(fe, t, n)
    } else s == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = ut(n.__e, t, n, r, a, s, c, i, d);
    (h = m.diffed) && h(t)
}

function F1(e, t, n) {
    for (var r = 0; r < n.length; r++) e1(n[r], n[++r], n[++r]);
    m.__c && m.__c(t, e), e.some(function (a) {
        try {
            e = a.__h, a.__h = [], e.some(function (s) {
                s.call(a)
            })
        } catch (s) {
            m.__e(s, a.__v)
        }
    })
}

function ut(e, t, n, r, a, s, c, l, i) {
    var d, h, _, C = n.props,
        u = t.props,
        f = t.type,
        g = 0;
    if (f === "svg" && (a = !0), s != null) {
        for (; g < s.length; g++)
            if ((d = s[g]) && "setAttribute" in d == !!f && (f ? d.localName === f : d.nodeType === 3)) {
                e = d, s[g] = null;
                break
            }
    }
    if (e == null) {
        if (f === null) return document.createTextNode(u);
        e = a ? document.createElementNS("http://www.w3.org/2000/svg", f) : document.createElement(f, u.is && u), s = null, l = !1
    }
    if (f === null) C === u || l && e.data === u || (e.data = u);
    else {
        if (s = s && ke.call(e.childNodes), h = (C = n.props || ge).dangerouslySetInnerHTML, _ = u.dangerouslySetInnerHTML, !l) {
            if (s != null)
                for (C = {}, g = 0; g < e.attributes.length; g++) C[e.attributes[g].name] = e.attributes[g].value;
            (_ || h) && (_ && (h && _.__html == h.__html || _.__html === e.innerHTML) || (e.innerHTML = _ && _.__html || ""))
        }
        if (pt(e, u, C, a, l), _) t.__k = [];
        else if (V1(e, xe(g = t.props.children) ? g : [g], t, n, r, a && f !== "foreignObject", s, c, s ? s[0] : n.__k && Me(n, 0), l, i), s != null)
            for (g = s.length; g--;) s[g] != null && x1(s[g]);
        l || ("value" in u && (g = u.value) !== void 0 && (g !== e.value || f === "progress" && !g || f === "option" && g !== C.value) && $e(e, "value", g, C.value, !1), "checked" in u && (g = u.checked) !== void 0 && g !== e.checked && $e(e, "checked", g, C.checked, !1))
    }
    return e
}

function e1(e, t, n) {
    try {
        typeof e == "function" ? e(t) : e.current = t
    } catch (r) {
        m.__e(r, n)
    }
}

function qe(e, t, n) {
    var r, a;
    if (m.unmount && m.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || e1(r, null, t)), (r = e.__c) != null) {
        if (r.componentWillUnmount) try {
            r.componentWillUnmount()
        } catch (s) {
            m.__e(s, t)
        }
        r.base = r.__P = null, e.__c = void 0
    }
    if (r = e.__k)
        for (a = 0; a < r.length; a++) r[a] && qe(r[a], t, n || typeof e.type != "function");
    n || e.__e == null || x1(e.__e), e.__ = e.__e = e.__d = void 0
}

function ht(e, t, n) {
    return this.constructor(e, n)
}

function ze(e, t, n) {
    var r, a, s, c;
    m.__ && m.__(e, t), a = (r = typeof n == "function") ? null : n && n.__k || t.__k, s = [], c = [], Ge(t, e = (!r && n || t).__k = le(B, null, [e]), a || ge, ge, t.ownerSVGElement !== void 0, !r && n ? [n] : a ? null : t.firstChild ? ke.call(t.childNodes) : null, s, !r && n ? n : a ? a.__e : t.firstChild, r, c), F1(s, e, c)
}

function ft(e, t, n) {
    var r, a, s, c, l = ee({}, e.props);
    for (s in e.type && e.type.defaultProps && (c = e.type.defaultProps), t) s == "key" ? r = t[s] : s == "ref" ? a = t[s] : l[s] = t[s] === void 0 && c !== void 0 ? c[s] : t[s];
    return arguments.length > 2 && (l.children = arguments.length > 3 ? ke.call(arguments, 2) : n), Oe(e.type, l, r || e.key, a || e.ref, null)
}

function t1(e, t) {
    var n = {
        __c: t = "__cC" + $1++,
        __: e,
        Consumer: function (r, a) {
            return r.children(a)
        },
        Provider: function (r) {
            var a, s;
            return this.getChildContext || (a = [], (s = {})[t] = this, this.getChildContext = function () {
                return s
            }, this.shouldComponentUpdate = function (c) {
                this.props.value !== c.value && a.some(function (l) {
                    l.__e = !0, Ke(l)
                })
            }, this.sub = function (c) {
                a.push(c);
                var l = c.componentWillUnmount;
                c.componentWillUnmount = function () {
                    a.splice(a.indexOf(c), 1), l && l.call(c)
                }
            }), r.children
        }
    };
    return n.Provider.__ = n.Consumer.contextType = n
}
ke = D1.slice, m = {
    __e: function (e, t, n, r) {
        for (var a, s, c; t = t.__;)
            if ((a = t.__c) && !a.__) try {
                if ((s = a.constructor) && s.getDerivedStateFromError != null && (a.setState(s.getDerivedStateFromError(e)), c = a.__d), a.componentDidCatch != null && (a.componentDidCatch(e, r || {}), c = a.__d), c) return a.__E = a
            } catch (l) {
                e = l
            }
        throw e
    }
}, H1 = 0, z.prototype.setState = function (e, t) {
    var n;
    n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ee({}, this.state), typeof e == "function" && (e = e(ee({}, n), this.props)), e && ee(n, e), e != null && this.__v && (t && this._sb.push(t), Ke(this))
}, z.prototype.forceUpdate = function (e) {
    this.__v && (this.__e = !0, e && this.__h.push(e), Ke(this))
}, z.prototype.render = B, _e = [], S1 = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, je = function (e, t) {
    return e.__v.__b - t.__v.__b
}, Se.__r = 0, $1 = 0;
var we, T, Ve, p1, be = 0,
    Z1 = [],
    Pe = [],
    u1 = m.__b,
    h1 = m.__r,
    f1 = m.diffed,
    m1 = m.__c,
    C1 = m.unmount;

function Be(e, t) {
    m.__h && m.__h(T, e, be || t), be = 0;
    var n = T.__H || (T.__H = {
        __: [],
        __h: []
    });
    return e >= n.__.length && n.__.push({
        __V: Pe
    }), n.__[e]
}

function k(e) {
    return be = 1, Y1(K1, e)
}

function Y1(e, t, n) {
    var r = Be(we++, 2);
    if (r.t = e, !r.__c && (r.__ = [n ? n(t) : K1(void 0, t), function (l) {
            var i = r.__N ? r.__N[0] : r.__[0],
                d = r.t(i, l);
            i !== d && (r.__N = [d, r.__[1]], r.__c.setState({}))
        }], r.__c = T, !T.u)) {
        var a = function (l, i, d) {
            if (!r.__c.__H) return !0;
            var h = r.__c.__H.__.filter(function (C) {
                return C.__c
            });
            if (h.every(function (C) {
                    return !C.__N
                })) return !s || s.call(this, l, i, d);
            var _ = !1;
            return h.forEach(function (C) {
                if (C.__N) {
                    var u = C.__[0];
                    C.__ = C.__N, C.__N = void 0, u !== C.__[0] && (_ = !0)
                }
            }), !(!_ && r.__c.props === l) && (!s || s.call(this, l, i, d))
        };
        T.u = !0;
        var s = T.shouldComponentUpdate,
            c = T.componentWillUpdate;
        T.componentWillUpdate = function (l, i, d) {
            if (this.__e) {
                var h = s;
                s = void 0, a(l, i, d), s = h
            }
            c && c.call(this, l, i, d)
        }, T.shouldComponentUpdate = a
    }
    return r.__N || r.__
}

function V(e, t) {
    var n = Be(we++, 3);
    !m.__s && j1(n.__H, t) && (n.__ = e, n.i = t, T.__H.__h.push(n))
}

function n1(e) {
    return be = 5, de(function () {
        return {
            current: e
        }
    }, [])
}

function de(e, t) {
    var n = Be(we++, 7);
    return j1(n.__H, t) ? (n.__V = e(), n.i = t, n.__h = e, n.__V) : n.__
}

function De(e, t) {
    return be = 8, de(function () {
        return e
    }, t)
}

function A(e) {
    var t = T.context[e.__c],
        n = Be(we++, 9);
    return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(T)), t.props.value) : e.__
}

function mt() {
    for (var e; e = Z1.shift();)
        if (e.__P && e.__H) try {
            e.__H.__h.forEach(Re), e.__H.__h.forEach(Xe), e.__H.__h = []
        } catch (t) {
            e.__H.__h = [], m.__e(t, e.__v)
        }
}
m.__b = function (e) {
    T = null, u1 && u1(e)
}, m.__r = function (e) {
    h1 && h1(e), we = 0;
    var t = (T = e.__c).__H;
    t && (Ve === T ? (t.__h = [], T.__h = [], t.__.forEach(function (n) {
        n.__N && (n.__ = n.__N), n.__V = Pe, n.__N = n.i = void 0
    })) : (t.__h.forEach(Re), t.__h.forEach(Xe), t.__h = [], we = 0)), Ve = T
}, m.diffed = function (e) {
    f1 && f1(e);
    var t = e.__c;
    t && t.__H && (t.__H.__h.length && (Z1.push(t) !== 1 && p1 === m.requestAnimationFrame || ((p1 = m.requestAnimationFrame) || Ct)(mt)), t.__H.__.forEach(function (n) {
        n.i && (n.__H = n.i), n.__V !== Pe && (n.__ = n.__V), n.i = void 0, n.__V = Pe
    })), Ve = T = null
}, m.__c = function (e, t) {
    t.some(function (n) {
        try {
            n.__h.forEach(Re), n.__h = n.__h.filter(function (r) {
                return !r.__ || Xe(r)
            })
        } catch (r) {
            t.some(function (a) {
                a.__h && (a.__h = [])
            }), t = [], m.__e(r, n.__v)
        }
    }), m1 && m1(e, t)
}, m.unmount = function (e) {
    C1 && C1(e);
    var t, n = e.__c;
    n && n.__H && (n.__H.__.forEach(function (r) {
        try {
            Re(r)
        } catch (a) {
            t = a
        }
    }), n.__H = void 0, t && m.__e(t, n.__v))
};
var v1 = typeof requestAnimationFrame == "function";

function Ct(e) {
    var t, n = function () {
            clearTimeout(r), v1 && cancelAnimationFrame(t), setTimeout(e)
        },
        r = setTimeout(n, 100);
    v1 && (t = requestAnimationFrame(n))
}

function Re(e) {
    var t = T,
        n = e.__c;
    typeof n == "function" && (e.__c = void 0, n()), T = t
}

function Xe(e) {
    var t = T;
    e.__c = e.__(), T = t
}

function j1(e, t) {
    return !e || e.length !== t.length || t.some(function (n, r) {
        return n !== e[r]
    })
}

function K1(e, t) {
    return typeof t == "function" ? t(e) : t
}
var vt = {};

function Ee(e, t) {
    for (var n in t) e[n] = t[n];
    return e
}

function gt(e, t, n) {
    var r, a = /(?:\?([^#]*))?(#.*)?$/,
        s = e.match(a),
        c = {};
    if (s && s[1])
        for (var l = s[1].split("&"), i = 0; i < l.length; i++) {
            var d = l[i].split("=");
            c[decodeURIComponent(d[0])] = decodeURIComponent(d.slice(1).join("="))
        }
    e = Je(e.replace(a, "")), t = Je(t || "");
    for (var h = Math.max(e.length, t.length), _ = 0; _ < h; _++)
        if (t[_] && t[_].charAt(0) === ":") {
            var C = t[_].replace(/(^:|[+*?]+$)/g, ""),
                u = (t[_].match(/[+*?]+$/) || vt)[0] || "",
                f = ~u.indexOf("+"),
                g = ~u.indexOf("*"),
                $ = e[_] || "";
            if (!$ && !g && (u.indexOf("?") < 0 || f)) {
                r = !1;
                break
            }
            if (c[C] = decodeURIComponent($), f || g) {
                c[C] = e.slice(_).map(decodeURIComponent).join("/");
                break
            }
        } else if (t[_] !== e[_]) {
        r = !1;
        break
    }
    return (n.default === !0 || r !== !1) && c
}

function Nt(e, t) {
    return e.rank < t.rank ? 1 : e.rank > t.rank ? -1 : e.index - t.index
}

function wt(e, t) {
    return e.index = t, e.rank = function (n) {
        return n.props.default ? 0 : Je(n.props.path).map(yt).join("")
    }(e), e.props
}

function Je(e) {
    return e.replace(/(^\/+|\/+$)/g, "").split("/")
}

function yt(e) {
    return e.charAt(0) == ":" ? 1 + "*+?".indexOf(e.charAt(e.length - 1)) || 4 : 5
}
var Et = {},
    pe = [],
    g1 = [],
    F = null,
    q1 = {
        url: o1()
    },
    Ot = t1(q1);

function o1() {
    var e;
    return "" + ((e = F && F.location ? F.location : F && F.getCurrentLocation ? F.getCurrentLocation() : typeof location < "u" ? location : Et).pathname || "") + (e.search || "")
}

function It(e, t) {
    return t === void 0 && (t = !1), typeof e != "string" && e.url && (t = e.replace, e = e.url),
        function (n) {
            for (var r = pe.length; r--;)
                if (pe[r].canRoute(n)) return !0;
            return !1
        }(e) && function (n, r) {
            r === void 0 && (r = "push"), F && F[r] ? F[r](n) : typeof history < "u" && history[r + "State"] && history[r + "State"](null, null, n)
        }(e, t ? "replace" : "push"), z1(e)
}

function z1(e) {
    for (var t = !1, n = 0; n < pe.length; n++) pe[n].routeTo(e) && (t = !0);
    return t
}

function Mt(e) {
    if (e && e.getAttribute) {
        var t = e.getAttribute("href"),
            n = e.getAttribute("target");
        if (t && t.match(/^\//g) && (!n || n.match(/^_?self$/i))) return It(t)
    }
}

function bt(e) {
    return e.stopImmediatePropagation && e.stopImmediatePropagation(), e.stopPropagation && e.stopPropagation(), e.preventDefault(), !1
}

function X1(e) {
    if (!(e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button)) {
        var t = e.target;
        do
            if (t.localName === "a" && t.getAttribute("href")) {
                if (t.hasAttribute("data-native") || t.hasAttribute("native")) return;
                if (Mt(t)) return bt(e)
            } while (t = t.parentNode)
    }
}
var N1 = !1;

function r1(e) {
    e.history && (F = e.history), this.state = {
        url: e.url || o1()
    }
}
Ee(r1.prototype = new z, {
    shouldComponentUpdate: function (e) {
        return e.static !== !0 || e.url !== this.props.url || e.onChange !== this.props.onChange
    },
    canRoute: function (e) {
        var t = Ne(this.props.children);
        return this.g(t, e) !== void 0
    },
    routeTo: function (e) {
        this.setState({
            url: e
        });
        var t = this.canRoute(e);
        return this.p || this.forceUpdate(), t
    },
    componentWillMount: function () {
        this.p = !0
    },
    componentDidMount: function () {
        var e = this;
        N1 || (N1 = !0, F || addEventListener("popstate", function () {
            z1(o1())
        }), addEventListener("click", X1)), pe.push(this), F && (this.u = F.listen(function (t) {
            var n = t.location || t;
            e.routeTo("" + (n.pathname || "") + (n.search || ""))
        })), this.p = !1
    },
    componentWillUnmount: function () {
        typeof this.u == "function" && this.u(), pe.splice(pe.indexOf(this), 1)
    },
    componentWillUpdate: function () {
        this.p = !0
    },
    componentDidUpdate: function () {
        this.p = !1
    },
    g: function (e, t) {
        e = e.filter(wt).sort(Nt);
        for (var n = 0; n < e.length; n++) {
            var r = e[n],
                a = gt(t, r.props.path, r.props);
            if (a) return [r, a]
        }
    },
    render: function (e, t) {
        var n, r, a = e.onChange,
            s = t.url,
            c = this.c,
            l = this.g(Ne(e.children), s);
        if (l && (r = ft(l[0], Ee(Ee({
                url: s,
                matches: n = l[1]
            }, n), {
                key: void 0,
                ref: void 0
            }))), s !== (c && c.url)) {
            Ee(q1, c = this.c = {
                url: s,
                previous: c && c.url,
                current: r,
                path: r ? r.props.path : null,
                matches: n
            }), c.router = this, c.active = r ? [r] : [];
            for (var i = g1.length; i--;) g1[i]({});
            typeof a == "function" && a(c)
        }
        return le(Ot.Provider, {
            value: c
        }, r)
    }
});
var ue = function (e) {
        return le("a", Ee({
            onClick: X1
        }, e))
    },
    Ie = function (e) {
        return le(e.component, e)
    };
const kt = "_shop_z5bpk_1",
    Tt = {
        shop: kt
    };
var p = (e => (e[e.ruFlag = 0] = "ruFlag", e[e.enFlag = 1] = "enFlag", e[e.discordLogo = 2] = "discordLogo", e[e.vkLogo = 3] = "vkLogo", e[e.steamLogo = 4] = "steamLogo", e[e.shop = 5] = "shop", e[e.team = 6] = "team", e[e.wallet = 7] = "wallet", e[e.monitoringIcon = 8] = "monitoringIcon", e[e.shopIcon = 9] = "shopIcon", e[e.monitoringPerson = 10] = "monitoringPerson", e[e.productAttributeDiscount = 11] = "productAttributeDiscount", e[e.productAttributeClock = 12] = "productAttributeClock", e[e.themeMoon = 13] = "themeMoon", e[e.themeSun = 14] = "themeSun", e[e.bonusInfo = 15] = "bonusInfo", e[e.productCommands = 16] = "productCommands", e[e.productKits = 17] = "productKits", e[e.productBonuses = 18] = "productBonuses", e[e.arrow = 19] = "arrow", e[e.toastSuccess = 20] = "toastSuccess", e[e.toastError = 21] = "toastError", e[e.profileIcon = 22] = "profileIcon", e[e.profileHistory = 23] = "profileHistory", e[e.profilePromo = 24] = "profilePromo", e))(p || {}),
    Lt = 0;

function o(e, t, n, r, a, s) {
    var c, l, i = {};
    for (l in t) l == "ref" ? c = t[l] : i[l] = t[l];
    var d = {
        type: e,
        props: i,
        key: n,
        ref: c,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: --Lt,
        __source: a,
        __self: s
    };
    if (typeof e == "function" && (c = e.defaultProps))
        for (l in c) i[l] === void 0 && (i[l] = c[l]);
    return m.vnode && m.vnode(d), d
}
const N = ({
        type: e,
        className: t
    }) => {
        switch (e) {
        case p.enFlag:
            return o("svg", {
                className: t,
                width: "31",
                height: "23",
                viewBox: "0 0 31 23",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [o("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M6.5 0C3.18629 0 0.5 2.68629 0.5 6V16.5C0.5 19.8137 3.18629 22.5 6.5 22.5H24.5C27.8137 22.5 30.5 19.8137 30.5 16.5V6C30.5 2.68629 27.8137 0 24.5 0H6.5Z",
                    fill: "#2E42A5"
                }), o("mask", {
                    id: "mask0_6_251",
                    style: "mask-type:luminance",
                    maskUnits: "userSpaceOnUse",
                    x: "0",
                    y: "0",
                    width: "31",
                    height: "23",
                    children: o("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M6.5 0C3.18629 0 0.5 2.68629 0.5 6V16.5C0.5 19.8137 3.18629 22.5 6.5 22.5H24.5C27.8137 22.5 30.5 19.8137 30.5 16.5V6C30.5 2.68629 27.8137 0 24.5 0H6.5Z",
                        fill: "white"
                    })
                }), o("g", {
                    mask: "url(#mask0_6_251)",
                    children: [o("path", {
                        d: "M1.3277 17.5781C-0.550921 19.0719 -0.146381 22.0318 2.06418 22.9666C3.113 23.4102 4.31931 23.2557 5.22248 22.5621L30.4068 3.22196C30.5683 3.09789 30.7159 2.9566 30.8468 2.80058C32.2698 1.10519 31.2603 -1.49318 29.066 -1.78323L28.4218 -1.86837C27.5605 -1.98222 26.6903 -1.7366 26.0157 -1.18921L16.1053 6.85153L7.27782 12.8469L1.3277 17.5781Z",
                        fill: "white"
                    }), o("path", {
                        d: "M0.128237 21.1782C-0.831415 21.9545 -0.655892 23.4657 0.45616 24.0014C1.04764 24.2863 1.75085 24.2011 2.25715 23.7832L29.6508 1.16828C30.7396 0.269413 30.104 -1.49888 28.6921 -1.49888C28.3473 -1.49888 28.013 -1.38058 27.745 -1.16374L0.128237 21.1782Z",
                        fill: "#F50100"
                    }), o("path", {
                        d: "M29.6723 17.5781C31.551 19.0719 31.1464 22.0318 28.9358 22.9666C27.887 23.4102 26.6807 23.2557 25.7776 22.5621L0.593262 3.22196C0.431705 3.09789 0.284149 2.9566 0.153194 2.80058C-1.26974 1.10519 -0.260258 -1.49318 1.93404 -1.78323L2.57819 -1.86837C3.4395 -1.98222 4.3097 -1.7366 4.98437 -1.18921L14.8947 6.85153L23.7222 12.8469L29.6723 17.5781Z",
                        fill: "white"
                    }), o("path", {
                        d: "M31.5649 20.6189C32.5205 21.4007 32.3409 22.9103 31.2286 23.4461C30.6336 23.7328 29.926 23.6461 29.4178 23.2242L17.7691 13.5547C17.1676 13.0554 16.4742 12.6784 15.7281 12.445L13.9155 11.878C13.2354 11.6652 12.5985 11.333 12.0349 10.8968L-0.116436 1.49363C-1.2081 0.648859 -0.610718 -1.09922 0.769627 -1.09922C1.08475 -1.09922 1.39128 -0.996405 1.64267 -0.806379L16.8358 10.678C17.3422 11.0608 17.9062 11.3609 18.5067 11.5669L20.9231 12.3959C21.5969 12.6271 22.2241 12.9764 22.7754 13.4275L31.5649 20.6189Z",
                        fill: "#F50100"
                    }), o("mask", {
                        id: "path-7-inside-1_6_251",
                        fill: "white",
                        children: o("path", {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M19.0417 1.66667C19.0417 -0.289343 17.456 -1.875 15.5 -1.875C13.544 -1.875 11.9584 -0.289342 11.9584 1.66667V2.8125C11.9584 5.40133 9.85969 7.5 7.27085 7.5H2.40079C0.32972 7.5 -1.34921 9.17893 -1.34921 11.25C-1.34921 13.3211 0.329724 15 2.40079 15H7.27086C9.85969 15 11.9584 17.0987 11.9584 19.6875V20.8333C11.9584 22.7893 13.544 24.375 15.5 24.375C17.456 24.375 19.0417 22.7893 19.0417 20.8333V19.6875C19.0417 17.0987 21.1404 15 23.7292 15H28.6508C30.7219 15 32.4008 13.3211 32.4008 11.25C32.4008 9.17893 30.7219 7.5 28.6508 7.5H23.7292C21.1404 7.5 19.0417 5.40133 19.0417 2.8125V1.66667Z"
                        })
                    }), o("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M19.0417 1.66667C19.0417 -0.289343 17.456 -1.875 15.5 -1.875C13.544 -1.875 11.9584 -0.289342 11.9584 1.66667V2.8125C11.9584 5.40133 9.85969 7.5 7.27085 7.5H2.40079C0.32972 7.5 -1.34921 9.17893 -1.34921 11.25C-1.34921 13.3211 0.329724 15 2.40079 15H7.27086C9.85969 15 11.9584 17.0987 11.9584 19.6875V20.8333C11.9584 22.7893 13.544 24.375 15.5 24.375C17.456 24.375 19.0417 22.7893 19.0417 20.8333V19.6875C19.0417 17.0987 21.1404 15 23.7292 15H28.6508C30.7219 15 32.4008 13.3211 32.4008 11.25C32.4008 9.17893 30.7219 7.5 28.6508 7.5H23.7292C21.1404 7.5 19.0417 5.40133 19.0417 2.8125V1.66667Z",
                        fill: "#F50100"
                    }), o("path", {
                        d: "M12.9584 2.8125V1.66667H10.9584V2.8125H12.9584ZM2.40079 8.5H7.27085V6.5H2.40079V8.5ZM7.27086 14H2.40079V16H7.27086V14ZM12.9584 20.8333V19.6875H10.9584V20.8333H12.9584ZM18.0417 19.6875V20.8333H20.0417V19.6875H18.0417ZM28.6508 14H23.7292V16H28.6508V14ZM23.7292 8.5H28.6508V6.5H23.7292V8.5ZM18.0417 1.66667V2.8125H20.0417V1.66667H18.0417ZM23.7292 6.5C21.6926 6.5 20.0417 4.84905 20.0417 2.8125H18.0417C18.0417 5.95362 20.5881 8.5 23.7292 8.5V6.5ZM33.4008 11.25C33.4008 8.62665 31.2741 6.5 28.6508 6.5V8.5C30.1696 8.5 31.4008 9.73122 31.4008 11.25H33.4008ZM28.6508 16C31.2741 16 33.4008 13.8734 33.4008 11.25H31.4008C31.4008 12.7688 30.1696 14 28.6508 14V16ZM20.0417 19.6875C20.0417 17.6509 21.6926 16 23.7292 16V14C20.5881 14 18.0417 16.5464 18.0417 19.6875H20.0417ZM15.5 25.375C18.0083 25.375 20.0417 23.3416 20.0417 20.8333H18.0417C18.0417 22.2371 16.9037 23.375 15.5 23.375V25.375ZM10.9584 20.8333C10.9584 23.3416 12.9917 25.375 15.5 25.375V23.375C14.0963 23.375 12.9584 22.2371 12.9584 20.8333H10.9584ZM7.27086 16C9.30741 16 10.9584 17.6509 10.9584 19.6875H12.9584C12.9584 16.5464 10.412 14 7.27086 14V16ZM-2.34921 11.25C-2.34921 13.8734 -0.222559 16 2.40079 16V14C0.882007 14 -0.349213 12.7688 -0.349213 11.25H-2.34921ZM2.40079 6.5C-0.222565 6.5 -2.34921 8.62665 -2.34921 11.25H-0.349213C-0.349213 9.73122 0.882004 8.5 2.40079 8.5V6.5ZM10.9584 2.8125C10.9584 4.84905 9.3074 6.5 7.27085 6.5V8.5C10.412 8.5 12.9584 5.95362 12.9584 2.8125H10.9584ZM15.5 -0.875C16.9037 -0.875 18.0417 0.262943 18.0417 1.66667H20.0417C20.0417 -0.841628 18.0083 -2.875 15.5 -2.875V-0.875ZM15.5 -2.875C12.9917 -2.875 10.9584 -0.841627 10.9584 1.66667H12.9584C12.9584 0.262943 14.0963 -0.875 15.5 -0.875V-2.875Z",
                        fill: "white",
                        mask: "url(#path-7-inside-1_6_251)"
                    })]
                })]
            });
        case p.ruFlag:
            return o("svg", {
                width: "16",
                height: "12",
                viewBox: "0 0 16 12",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: t,
                children: [o("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M0 0V12H16V0H0Z",
                    fill: "#3D58DB"
                }), o("mask", {
                    id: "mask0_270_51699",
                    style: "mask-type:luminance",
                    maskUnits: "userSpaceOnUse",
                    x: "0",
                    y: "0",
                    width: "16",
                    height: "12",
                    children: o("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M0 0V12H16V0H0Z",
                        fill: "white"
                    })
                }), o("g", {
                    mask: "url(#mask0_270_51699)",
                    children: [o("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M0 0V4H16V0H0Z",
                        fill: "#F7FCFF"
                    }), o("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M0 8V12H16V8H0Z",
                        fill: "#C51918"
                    })]
                })]
            });
        case p.discordLogo:
            return o("svg", {
                className: t,
                width: "31",
                height: "23",
                viewBox: "0 0 31 23",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: o("path", {
                    d: "M25.8963 1.89552C23.9842 1.01816 21.9337 0.37177 19.7899 0.00155301C19.7508 -0.00559206 19.7118 0.0122639 19.6917 0.0479765C19.428 0.516995 19.1359 1.12887 18.9314 1.6098C16.6255 1.26459 14.3315 1.26459 12.0729 1.6098C11.8683 1.11818 11.5656 0.516995 11.3007 0.0479765C11.2806 0.0134554 11.2416 -0.00440051 11.2026 0.00155301C9.05989 0.370587 7.00945 1.01698 5.09617 1.89552C5.07961 1.90266 5.06541 1.91457 5.05599 1.93004C1.16674 7.74049 0.101312 13.4081 0.623975 19.0055C0.62634 19.0329 0.641712 19.0591 0.662998 19.0757C3.22901 20.9601 5.71463 22.1042 8.1541 22.8624C8.19314 22.8743 8.23451 22.8601 8.25935 22.8279C8.83641 22.0399 9.3508 21.209 9.79185 20.3352C9.81787 20.284 9.79303 20.2233 9.73983 20.203C8.92391 19.8935 8.147 19.5162 7.39966 19.0876C7.34055 19.0531 7.33582 18.9686 7.3902 18.9281C7.54746 18.8102 7.70477 18.6876 7.85494 18.5638C7.88211 18.5412 7.91997 18.5364 7.95192 18.5507C12.8616 20.7923 18.1769 20.7923 23.0287 18.5507C23.0606 18.5353 23.0985 18.54 23.1268 18.5626C23.2771 18.6864 23.4343 18.8102 23.5928 18.9281C23.6472 18.9686 23.6436 19.0531 23.5845 19.0876C22.8372 19.5245 22.0602 19.8935 21.2431 20.2019C21.1899 20.2221 21.1663 20.284 21.1923 20.3352C21.6428 21.2077 22.1572 22.0387 22.7236 22.8267C22.7473 22.8601 22.7898 22.8743 22.8289 22.8624C25.2802 22.1042 27.7658 20.9601 30.3318 19.0757C30.3543 19.0591 30.3685 19.0341 30.3708 19.0067C30.9964 12.5355 29.3231 6.91435 25.9353 1.93122C25.927 1.91457 25.9128 1.90266 25.8963 1.89552ZM10.525 15.5973C9.04687 15.5973 7.82892 14.2402 7.82892 12.5736C7.82892 10.907 9.02325 9.54995 10.525 9.54995C12.0386 9.54995 13.2448 10.9189 13.2211 12.5736C13.2211 14.2402 12.0268 15.5973 10.525 15.5973ZM20.4934 15.5973C19.0153 15.5973 17.7974 14.2402 17.7974 12.5736C17.7974 10.907 18.9917 9.54995 20.4934 9.54995C22.007 9.54995 23.2132 10.9189 23.1896 12.5736C23.1896 14.2402 22.007 15.5973 20.4934 15.5973Z",
                    fill: "#5865F2"
                })
            });
        case p.vkLogo:
            return o("svg", {
                className: t,
                xmlns: "http://www.w3.org/2000/svg",
                width: "31",
                height: "30",
                viewBox: "0 0 31 30",
                fill: "none",
                children: [o("g", {
                    "clip-path": "url(#clip0_6_277)",
                    children: [o("path", {
                        d: "M0.5 14.4C0.5 7.61175 0.5 4.21766 2.60883 2.10883C4.71766 0 8.11175 0 14.9 0H16.1C22.8883 0 26.2823 0 28.3912 2.10883C30.5 4.21766 30.5 7.61175 30.5 14.4V15.6C30.5 22.3883 30.5 25.7823 28.3912 27.8912C26.2823 30 22.8883 30 16.1 30H14.9C8.11175 30 4.71766 30 2.60883 27.8912C0.5 25.7823 0.5 22.3883 0.5 15.6V14.4Z",
                        fill: "#0077FF"
                    }), o("path", {
                        d: "M16.4625 21.6126C9.625 21.6126 5.72506 16.9251 5.56256 9.12512H8.98756C9.10006 14.8501 11.625 17.2751 13.625 17.7751V9.12512H16.8501V14.0626C18.8251 13.8501 20.8999 11.6001 21.5999 9.12512H24.8249C24.2874 12.1751 22.0374 14.4251 20.4374 15.3501C22.0374 16.1001 24.6001 18.0626 25.5751 21.6126H22.0249C21.2624 19.2376 19.3626 17.4001 16.8501 17.1501V21.6126H16.4625Z",
                        fill: "white"
                    })]
                }), o("defs", {
                    children: o("clipPath", {
                        id: "clip0_6_277",
                        children: o("rect", {
                            width: "30",
                            height: "30",
                            fill: "white",
                            transform: "translate(0.5)"
                        })
                    })
                })]
            });
        case p.steamLogo:
            return o("svg", {
                className: t,
                xmlns: "http://www.w3.org/2000/svg",
                width: "18",
                height: "20",
                viewBox: "0 0 18 20",
                fill: "white",
                children: [o("g", {
                    "clip-path": "url(#clip0_16_2389)",
                    children: o("path", {
                        d: "M7.73438 13.9258C8.03516 13.2031 7.69531 12.375 6.96875 12.0742L5.81641 11.5977C6.26172 11.4297 6.76562 11.4219 7.23828 11.6172C7.71484 11.8164 8.08203 12.1875 8.28125 12.6602C8.47656 13.1367 8.47656 13.6602 8.27734 14.1328C7.86719 15.1133 6.73828 15.5781 5.75391 15.168C5.30078 14.9805 4.95703 14.6367 4.76172 14.2227L5.875 14.6836C6.60156 14.9883 7.43359 14.6484 7.73438 13.9258ZM16.125 1.25H2.375C1.33984 1.25 0.5 2.08984 0.5 3.125V9.40234L5.05469 11.2812C5.52344 10.9609 6.07812 10.8086 6.64453 10.8398L8.80859 7.70703V7.66406C8.80859 5.78125 10.3438 4.24609 12.2305 4.24609C14.1172 4.24609 15.6523 5.78125 15.6523 7.66406C15.6523 9.58594 14.0547 11.1289 12.1523 11.082L9.06641 13.2812C9.12891 14.7852 7.92969 15.9688 6.5 15.9688C5.25781 15.9688 4.21484 15.082 3.98047 13.9102L0.5 12.4688V16.875C0.5 17.9102 1.33984 18.75 2.375 18.75H16.125C17.1602 18.75 18 17.9102 18 16.875V3.125C18 2.08984 17.1602 1.25 16.125 1.25ZM12.2305 9.94141C10.9727 9.94141 9.94922 8.92188 9.94922 7.66406C9.94922 6.40625 10.9727 5.38672 12.2305 5.38672C13.4883 5.38672 14.5117 6.41016 14.5117 7.66406C14.5117 8.91797 13.4883 9.94141 12.2305 9.94141ZM12.2344 9.37109C13.1797 9.37109 13.9492 8.60547 13.9492 7.66016C13.9492 6.71484 13.1836 5.94922 12.2344 5.94922C11.2891 5.94922 10.5195 6.71484 10.5195 7.66016C10.5195 8.60547 11.2891 9.37109 12.2344 9.37109Z"
                    })
                }), o("defs", {
                    children: o("clipPath", {
                        id: "clip0_16_2389",
                        children: o("rect", {
                            width: "17.5",
                            height: "20",
                            transform: "translate(0.5)"
                        })
                    })
                })]
            });
        case p.shop:
            return o("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "20",
                viewBox: "0 0 16 20",
                fill: "#90A3BF",
                className: t,
                children: o("path", {
                    d: "M15 5H12V4C12 2.93913 11.5786 1.92172 10.8284 1.17157C10.0783 0.421427 9.06087 0 8 0C6.93913 0 5.92172 0.421427 5.17157 1.17157C4.42143 1.92172 4 2.93913 4 4V5H1C0.734784 5 0.48043 5.10536 0.292893 5.29289C0.105357 5.48043 0 5.73478 0 6V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H13C13.7956 20 14.5587 19.6839 15.1213 19.1213C15.6839 18.5587 16 17.7956 16 17V6C16 5.73478 15.8946 5.48043 15.7071 5.29289C15.5196 5.10536 15.2652 5 15 5ZM6 4C6 3.46957 6.21071 2.96086 6.58579 2.58579C6.96086 2.21071 7.46957 2 8 2C8.53043 2 9.03914 2.21071 9.41421 2.58579C9.78929 2.96086 10 3.46957 10 4V5H6V4ZM14 17C14 17.2652 13.8946 17.5196 13.7071 17.7071C13.5196 17.8946 13.2652 18 13 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V7H4V8C4 8.26522 4.10536 8.51957 4.29289 8.70711C4.48043 8.89464 4.73478 9 5 9C5.26522 9 5.51957 8.89464 5.70711 8.70711C5.89464 8.51957 6 8.26522 6 8V7H10V8C10 8.26522 10.1054 8.51957 10.2929 8.70711C10.4804 8.89464 10.7348 9 11 9C11.2652 9 11.5196 8.89464 11.7071 8.70711C11.8946 8.51957 12 8.26522 12 8V7H14V17Z"
                })
            });
        case p.team:
            return o("svg", {
                className: t,
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "#90A3BF",
                children: [o("path", {
                    d: "M17.53 7.77C17.46 7.76 17.39 7.76 17.32 7.77C15.77 7.72 14.54 6.45 14.54 4.89C14.54 3.3 15.83 2 17.43 2C19.02 2 20.32 3.29 20.32 4.89C20.31 6.45 19.08 7.72 17.53 7.77Z"
                }), o("path", {
                    d: "M20.79 14.7C19.67 15.45 18.1 15.73 16.65 15.54C17.03 14.72 17.23 13.81 17.24 12.85C17.24 11.85 17.02 10.9 16.6 10.07C18.08 9.87004 19.65 10.15 20.78 10.9C22.36 11.94 22.36 13.65 20.79 14.7Z"
                }), o("path", {
                    d: "M6.44 7.77C6.51 7.76 6.58 7.76 6.65 7.77C8.2 7.72 9.43 6.45 9.43 4.89C9.43 3.29 8.14 2 6.54 2C4.95 2 3.66 3.29 3.66 4.89C3.66 6.45 4.89 7.72 6.44 7.77Z"
                }), o("path", {
                    d: "M6.55 12.85C6.55 13.82 6.75999 14.74 7.14 15.57C5.73 15.72 4.26 15.42 3.18 14.71C1.6 13.66 1.6 11.95 3.18 10.9C4.25 10.18 5.75999 9.88998 7.18 10.05C6.77 10.89 6.55 11.84 6.55 12.85Z"
                }), o("path", {
                    d: "M12.12 15.87C12.04 15.86 11.95 15.86 11.86 15.87C10.02 15.81 8.54999 14.3 8.54999 12.44C8.55999 10.54 10.09 9 12 9C13.9 9 15.44 10.54 15.44 12.44C15.43 14.3 13.97 15.81 12.12 15.87Z"
                }), o("path", {
                    d: "M8.86999 17.94C7.35999 18.95 7.35999 20.61 8.86999 21.61C10.59 22.76 13.41 22.76 15.13 21.61C16.64 20.6 16.64 18.94 15.13 17.94C13.42 16.79 10.6 16.79 8.86999 17.94Z"
                })]
            });
        case p.wallet:
            return o("svg", {
                className: t,
                width: "20",
                height: "18",
                viewBox: "0 0 20 18",
                fill: "white",
                xmlns: "http://www.w3.org/2000/svg",
                children: o("path", {
                    d: "M17 4H16V3C16 2.20435 15.6839 1.44129 15.1213 0.87868C14.5587 0.316071 13.7956 0 13 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V15C0 15.7956 0.316071 16.5587 0.87868 17.1213C1.44129 17.6839 2.20435 18 3 18H17C17.7956 18 18.5587 17.6839 19.1213 17.1213C19.6839 16.5587 20 15.7956 20 15V7C20 6.20435 19.6839 5.44129 19.1213 4.87868C18.5587 4.31607 17.7956 4 17 4ZM3 2H13C13.2652 2 13.5196 2.10536 13.7071 2.29289C13.8946 2.48043 14 2.73478 14 3V4H3C2.73478 4 2.48043 3.89464 2.29289 3.70711C2.10536 3.51957 2 3.26522 2 3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2ZM18 12H17C16.7348 12 16.4804 11.8946 16.2929 11.7071C16.1054 11.5196 16 11.2652 16 11C16 10.7348 16.1054 10.4804 16.2929 10.2929C16.4804 10.1054 16.7348 10 17 10H18V12ZM18 8H17C16.2044 8 15.4413 8.31607 14.8787 8.87868C14.3161 9.44129 14 10.2044 14 11C14 11.7956 14.3161 12.5587 14.8787 13.1213C15.4413 13.6839 16.2044 14 17 14H18V15C18 15.2652 17.8946 15.5196 17.7071 15.7071C17.5196 15.8946 17.2652 16 17 16H3C2.73478 16 2.48043 15.8946 2.29289 15.7071C2.10536 15.5196 2 15.2652 2 15V5.83C2.32127 5.94302 2.65943 6.00051 3 6H17C17.2652 6 17.5196 6.10536 17.7071 6.29289C17.8946 6.48043 18 6.73478 18 7V8Z"
                })
            });
        case p.monitoringIcon:
            return o("svg", {
                className: t,
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [o("rect", {
                    width: "16",
                    height: "16",
                    rx: "8",
                    fill: "#3563E9",
                    "fill-opacity": "0.3"
                }), o("circle", {
                    cx: "8",
                    cy: "8",
                    r: "4",
                    fill: "#3563E9"
                })]
            });
        case p.shopIcon:
            return o("svg", {
                className: t,
                width: "16",
                height: "20",
                viewBox: "0 0 16 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [o("path", {
                    d: "M13.26 6.29502H10.92V5.51502C10.92 4.68754 10.5913 3.89396 10.0062 3.30885C9.42106 2.72373 8.62747 2.39502 7.8 2.39502C6.97252 2.39502 6.17894 2.72373 5.59382 3.30885C5.00871 3.89396 4.68 4.68754 4.68 5.51502V6.29502H2.34C2.13313 6.29502 1.93473 6.3772 1.78845 6.52348C1.64218 6.66975 1.56 6.86815 1.56 7.07502V15.655C1.56 16.2756 1.80653 16.8708 2.24537 17.3097C2.6842 17.7485 3.27939 17.995 3.9 17.995H11.7C12.3206 17.995 12.9158 17.7485 13.3546 17.3097C13.7935 16.8708 14.04 16.2756 14.04 15.655V7.07502C14.04 6.86815 13.9578 6.66975 13.8115 6.52348C13.6653 6.3772 13.4669 6.29502 13.26 6.29502ZM6.24 5.51502C6.24 5.10128 6.40435 4.70449 6.69691 4.41193C6.98947 4.11938 7.38626 3.95502 7.8 3.95502C8.21374 3.95502 8.61053 4.11938 8.90308 4.41193C9.19564 4.70449 9.36 5.10128 9.36 5.51502V6.29502H6.24V5.51502ZM12.48 15.655C12.48 15.8619 12.3978 16.0603 12.2515 16.2066C12.1053 16.3528 11.9069 16.435 11.7 16.435H3.9C3.69313 16.435 3.49473 16.3528 3.34845 16.2066C3.20218 16.0603 3.12 15.8619 3.12 15.655V7.85502H4.68V8.63502C4.68 8.84189 4.76218 9.04028 4.90845 9.18656C5.05473 9.33284 5.25313 9.41502 5.46 9.41502C5.66687 9.41502 5.86526 9.33284 6.01154 9.18656C6.15782 9.04028 6.24 8.84189 6.24 8.63502V7.85502H9.36V8.63502C9.36 8.84189 9.44218 9.04028 9.58845 9.18656C9.73473 9.33284 9.93313 9.41502 10.14 9.41502C10.3469 9.41502 10.5453 9.33284 10.6915 9.18656C10.8378 9.04028 10.92 8.84189 10.92 8.63502V7.85502H12.48V15.655Z",
                    fill: "#3563E9"
                }), o("path", {
                    d: "M14.625 5.125H11.7V4.15C11.7 3.11566 11.2891 2.12368 10.5577 1.39228C9.82633 0.660892 8.83434 0.25 7.8 0.25C6.76566 0.25 5.77368 0.660892 5.04228 1.39228C4.31089 2.12368 3.9 3.11566 3.9 4.15V5.125H0.975C0.716414 5.125 0.468419 5.22772 0.285571 5.41057C0.102723 5.59342 0 5.84141 0 6.1V16.825C0 17.6008 0.308169 18.3447 0.856713 18.8933C1.40526 19.4418 2.14924 19.75 2.925 19.75H12.675C13.4508 19.75 14.1947 19.4418 14.7433 18.8933C15.2918 18.3447 15.6 17.6008 15.6 16.825V6.1C15.6 5.84141 15.4973 5.59342 15.3144 5.41057C15.1316 5.22772 14.8836 5.125 14.625 5.125ZM5.85 4.15C5.85 3.63283 6.05545 3.13684 6.42114 2.77114C6.78684 2.40545 7.28283 2.2 7.8 2.2C8.31717 2.2 8.81316 2.40545 9.17886 2.77114C9.54455 3.13684 9.75 3.63283 9.75 4.15V5.125H5.85V4.15ZM13.65 16.825C13.65 17.0836 13.5473 17.3316 13.3644 17.5144C13.1816 17.6973 12.9336 17.8 12.675 17.8H2.925C2.66641 17.8 2.41842 17.6973 2.23557 17.5144C2.05272 17.3316 1.95 17.0836 1.95 16.825V7.075H3.9V8.05C3.9 8.30859 4.00272 8.55658 4.18557 8.73943C4.36842 8.92228 4.61641 9.025 4.875 9.025C5.13359 9.025 5.38158 8.92228 5.56443 8.73943C5.74728 8.55658 5.85 8.30859 5.85 8.05V7.075H9.75V8.05C9.75 8.30859 9.85272 8.55658 10.0356 8.73943C10.2184 8.92228 10.4664 9.025 10.725 9.025C10.9836 9.025 11.2316 8.92228 11.4144 8.73943C11.5973 8.55658 11.7 8.30859 11.7 8.05V7.075H13.65V16.825Z",
                    fill: "#3563E9",
                    "fill-opacity": "0.5"
                })]
            });
        case p.monitoringPerson:
            return o("svg", {
                className: t,
                width: "12",
                height: "12",
                viewBox: "0 0 12 12",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: o("path", {
                    d: "M1 11C1 9.125 3.5 9.125 4.75 7.875C5.375 7.25 3.5 7.25 3.5 4.125C3.5 2.04188 4.33312 1 6 1C7.66688 1 8.5 2.04188 8.5 4.125C8.5 7.25 6.625 7.25 7.25 7.875C8.5 9.125 11 9.125 11 11",
                    stroke: "#85A8F8",
                    "stroke-linecap": "round"
                })
            });
        case p.productAttributeDiscount:
            return o("svg", {
                className: t,
                width: "20",
                height: "18",
                viewBox: "0 0 20 18",
                fill: "white",
                xmlns: "http://www.w3.org/2000/svg",
                children: o("path", {
                    d: "M19.3 7.83999C19.69 7.83999 20 7.52999 20 7.13999V6.20999C20 2.10999 18.75 0.859985 14.65 0.859985H5.35C1.25 0.859985 0 2.10999 0 6.20999V6.67999C0 7.06999 0.31 7.37999 0.7 7.37999C1.6 7.37999 2.33 8.10999 2.33 9.00999C2.33 9.90999 1.6 10.63 0.7 10.63C0.31 10.63 0 10.94 0 11.33V11.8C0 15.9 1.25 17.15 5.35 17.15H14.65C18.75 17.15 20 15.9 20 11.8C20 11.41 19.69 11.1 19.3 11.1C18.4 11.1 17.67 10.37 17.67 9.46999C17.67 8.56999 18.4 7.83999 19.3 7.83999ZM7 5.87999C7.55 5.87999 8 6.32999 8 6.87999C8 7.42999 7.56 7.87999 7 7.87999C6.45 7.87999 6 7.42999 6 6.87999C6 6.32999 6.44 5.87999 7 5.87999ZM13 12.88C12.44 12.88 11.99 12.43 11.99 11.88C11.99 11.33 12.44 10.88 12.99 10.88C13.54 10.88 13.99 11.33 13.99 11.88C13.99 12.43 13.56 12.88 13 12.88ZM13.9 6.47999L7.17 13.21C7.02 13.36 6.83 13.43 6.64 13.43C6.45 13.43 6.26 13.36 6.11 13.21C5.82 12.92 5.82 12.44 6.11 12.15L12.84 5.41999C13.13 5.12999 13.61 5.12999 13.9 5.41999C14.19 5.70999 14.19 6.18999 13.9 6.47999Z"
                })
            });
        case p.productAttributeClock:
            return o("svg", {
                className: t,
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "white",
                xmlns: "http://www.w3.org/2000/svg",
                children: o("path", {
                    d: "M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433284 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7363 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0ZM10 18C8.41775 18 6.87104 17.5308 5.55544 16.6518C4.23985 15.7727 3.21447 14.5233 2.60897 13.0615C2.00347 11.5997 1.84504 9.99113 2.15372 8.43928C2.4624 6.88743 3.22433 5.46197 4.34315 4.34315C5.46197 3.22433 6.88743 2.4624 8.43928 2.15372C9.99113 1.84504 11.5997 2.00346 13.0615 2.60896C14.5233 3.21447 15.7727 4.23984 16.6518 5.55544C17.5308 6.87103 18 8.41775 18 10C18 12.1217 17.1572 14.1566 15.6569 15.6569C14.1566 17.1571 12.1217 18 10 18ZM11 9.93V5C11 4.73478 10.8946 4.48043 10.7071 4.29289C10.5196 4.10536 10.2652 4 10 4C9.73479 4 9.48043 4.10536 9.2929 4.29289C9.10536 4.48043 9 4.73478 9 5V10C9 10 9 10.07 9 10.11C8.9754 10.3133 9.01379 10.5192 9.11 10.7L10.61 13.3C10.7426 13.5307 10.9615 13.6993 11.2184 13.7687C11.4753 13.8381 11.7493 13.8026 11.98 13.67C12.2107 13.5374 12.3794 13.3186 12.4487 13.0616C12.5181 12.8047 12.4826 12.5307 12.35 12.3L11 9.93Z"
                })
            });
        case p.themeMoon:
            return o("svg", {
                className: t,
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "white",
                xmlns: "http://www.w3.org/2000/svg",
                children: o("path", {
                    d: "M19.5302 13.93C19.3702 13.66 18.9202 13.24 17.8002 13.44C17.1802 13.55 16.5502 13.6 15.9202 13.57C13.5902 13.47 11.4802 12.4 10.0102 10.75C8.7102 9.29999 7.9102 7.40999 7.9002 5.36999C7.9002 4.22999 8.1202 3.12999 8.5702 2.08999C9.0102 1.07999 8.7002 0.549994 8.4802 0.329994C8.2502 0.0999944 7.7102 -0.220006 6.6502 0.219994C2.5602 1.93999 0.0301965 6.03999 0.330197 10.43C0.630197 14.56 3.5302 18.09 7.3702 19.42C8.2902 19.74 9.2602 19.93 10.2602 19.97C10.4202 19.98 10.5802 19.99 10.7402 19.99C14.0902 19.99 17.2302 18.41 19.2102 15.72C19.8802 14.79 19.7002 14.2 19.5302 13.93Z"
                })
            });
        case p.themeSun:
            return o("svg", {
                className: t,
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "white",
                xmlns: "http://www.w3.org/2000/svg",
                children: [o("path", {
                    d: "M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z"
                }), o("path", {
                    d: "M12 22.96C11.45 22.96 11 22.55 11 22V21.92C11 21.37 11.45 20.92 12 20.92C12.55 20.92 13 21.37 13 21.92C13 22.47 12.55 22.96 12 22.96ZM19.14 20.14C18.88 20.14 18.63 20.04 18.43 19.85L18.3 19.72C17.91 19.33 17.91 18.7 18.3 18.31C18.69 17.92 19.32 17.92 19.71 18.31L19.84 18.44C20.23 18.83 20.23 19.46 19.84 19.85C19.65 20.04 19.4 20.14 19.14 20.14ZM4.86 20.14C4.6 20.14 4.35 20.04 4.15 19.85C3.76 19.46 3.76 18.83 4.15 18.44L4.28 18.31C4.67 17.92 5.3 17.92 5.69 18.31C6.08 18.7 6.08 19.33 5.69 19.72L5.56 19.85C5.37 20.04 5.11 20.14 4.86 20.14ZM22 13H21.92C21.37 13 20.92 12.55 20.92 12C20.92 11.45 21.37 11 21.92 11C22.47 11 22.96 11.45 22.96 12C22.96 12.55 22.55 13 22 13ZM2.08 13H2C1.45 13 1 12.55 1 12C1 11.45 1.45 11 2 11C2.55 11 3.04 11.45 3.04 12C3.04 12.55 2.63 13 2.08 13ZM19.01 5.99C18.75 5.99 18.5 5.89 18.3 5.7C17.91 5.31 17.91 4.68 18.3 4.29L18.43 4.16C18.82 3.77 19.45 3.77 19.84 4.16C20.23 4.55 20.23 5.18 19.84 5.57L19.71 5.7C19.52 5.89 19.27 5.99 19.01 5.99ZM4.99 5.99C4.73 5.99 4.48 5.89 4.28 5.7L4.15 5.56C3.76 5.17 3.76 4.54 4.15 4.15C4.54 3.76 5.17 3.76 5.56 4.15L5.69 4.28C6.08 4.67 6.08 5.3 5.69 5.69C5.5 5.89 5.24 5.99 4.99 5.99ZM12 3.04C11.45 3.04 11 2.63 11 2.08V2C11 1.45 11.45 1 12 1C12.55 1 13 1.45 13 2C13 2.55 12.55 3.04 12 3.04Z"
                })]
            });
        case p.bonusInfo:
            return o("svg", {
                className: t,
                width: "15",
                height: "15",
                viewBox: "0 0 15 15",
                fill: "white",
                xmlns: "http://www.w3.org/2000/svg",
                children: o("path", {
                    d: "M7.33337 0.5C3.4674 0.5 0.333374 3.63402 0.333374 7.5C0.333374 11.366 3.4674 14.5 7.33337 14.5C11.1994 14.5 14.3334 11.366 14.3334 7.5C14.3334 3.63399 11.1994 0.5 7.33337 0.5ZM8.50003 11.9849C8.50003 12.2489 8.28595 12.463 8.0219 12.463H6.71013C6.44608 12.463 6.232 12.2489 6.232 11.9849V6.66234C6.232 6.39829 6.44605 6.18421 6.71013 6.18421H8.0219C8.28595 6.18421 8.50003 6.39826 8.50003 6.66234V11.9849ZM7.33337 5.27826C6.67784 5.27826 6.14642 4.74684 6.14642 4.0913C6.14642 3.43577 6.67784 2.90435 7.33337 2.90435C7.98891 2.90435 8.52033 3.43577 8.52033 4.0913C8.52033 4.74684 7.98891 5.27826 7.33337 5.27826Z",
                    "fill-opacity": "0.3"
                })
            });
        case p.productKits:
            return o("svg", {
                className: t,
                width: "21",
                height: "20",
                viewBox: "0 0 21 20",
                fill: "#90A3BF",
                xmlns: "http://www.w3.org/2000/svg",
                children: o("path", {
                    d: "M11.495 8H9.495C9.22978 8 8.97542 8.10536 8.78789 8.29289C8.60035 8.48043 8.495 8.73478 8.495 9C8.495 9.26522 8.60035 9.51957 8.78789 9.70711C8.97542 9.89464 9.22978 10 9.495 10H11.495C11.7602 10 12.0146 9.89464 12.2021 9.70711C12.3896 9.51957 12.495 9.26522 12.495 9C12.495 8.73478 12.3896 8.48043 12.2021 8.29289C12.0146 8.10536 11.7602 8 11.495 8ZM16.495 8C16.4921 7.11544 16.1961 6.25679 15.6533 5.55836C15.1105 4.85993 14.3515 4.36114 13.495 4.14V3C13.495 2.20435 13.1789 1.44129 12.6163 0.87868C12.0537 0.316071 11.2906 0 10.495 0C9.69935 0 8.93628 0.316071 8.37367 0.87868C7.81107 1.44129 7.495 2.20435 7.495 3V4.14C6.63852 4.36114 5.8795 4.85993 5.33668 5.55836C4.79387 6.25679 4.49787 7.11544 4.495 8C3.43413 8 2.41671 8.42143 1.66657 9.17157C0.916423 9.92172 0.494995 10.9391 0.494995 12V15C0.494995 15.7956 0.811066 16.5587 1.37367 17.1213C1.93628 17.6839 2.69935 18 3.495 18H4.67499C4.88131 18.5835 5.26307 19.089 5.76793 19.4471C6.27279 19.8051 6.87605 19.9983 7.495 20H13.495C14.1139 19.9983 14.7172 19.8051 15.2221 19.4471C15.7269 19.089 16.1087 18.5835 16.315 18H17.495C18.2906 18 19.0537 17.6839 19.6163 17.1213C20.1789 16.5587 20.495 15.7956 20.495 15V12C20.495 10.9391 20.0736 9.92172 19.3234 9.17157C18.5733 8.42143 17.5559 8 16.495 8ZM4.495 16H3.495C3.22978 16 2.97543 15.8946 2.78789 15.7071C2.60035 15.5196 2.495 15.2652 2.495 15V12C2.495 11.4696 2.70571 10.9609 3.08078 10.5858C3.45585 10.2107 3.96456 10 4.495 10V16ZM9.495 3C9.495 2.73478 9.60035 2.48043 9.78789 2.29289C9.97542 2.10536 10.2298 2 10.495 2C10.7602 2 11.0146 2.10536 11.2021 2.29289C11.3896 2.48043 11.495 2.73478 11.495 3V4H9.495V3ZM14.495 17C14.495 17.2652 14.3896 17.5196 14.2021 17.7071C14.0146 17.8946 13.7602 18 13.495 18H7.495C7.22978 18 6.97542 17.8946 6.78789 17.7071C6.60035 17.5196 6.495 17.2652 6.495 17V16C6.495 15.4696 6.70571 14.9609 7.08078 14.5858C7.45585 14.2107 7.96456 14 8.495 14H12.495C13.0254 14 13.5341 14.2107 13.9092 14.5858C14.2843 14.9609 14.495 15.4696 14.495 16V17ZM14.495 12.56C13.891 12.1964 13.2 12.003 12.495 12H8.495C7.79004 12.003 7.09899 12.1964 6.495 12.56V8C6.495 7.46957 6.70571 6.96086 7.08078 6.58579C7.45585 6.21071 7.96456 6 8.495 6H12.495C13.0254 6 13.5341 6.21071 13.9092 6.58579C14.2843 6.96086 14.495 7.46957 14.495 8V12.56ZM18.495 15C18.495 15.2652 18.3896 15.5196 18.2021 15.7071C18.0146 15.8946 17.7602 16 17.495 16H16.495V10C17.0254 10 17.5341 10.2107 17.9092 10.5858C18.2843 10.9609 18.495 11.4696 18.495 12V15Z"
                })
            });
        case p.productCommands:
            return o("svg", {
                className: t,
                fill: "#90A3BF",
                width: "21",
                height: "20",
                viewBox: "0 0 21 20",
                xmlns: "http://www.w3.org/2000/svg",
                children: o("path", {
                    d: "M14.695 0H6.315C2.675 0 0.505005 2.17 0.505005 5.81V14.18C0.505005 17.83 2.675 20 6.315 20H14.685C18.325 20 20.495 17.83 20.495 14.19V5.81C20.505 2.17 18.335 0 14.695 0ZM8.445 11.27C7.765 12.29 6.825 13.12 5.725 13.67C5.625 13.72 5.505 13.75 5.395 13.75C5.115 13.75 4.855 13.6 4.725 13.34C4.535 12.97 4.685 12.52 5.065 12.33C5.935 11.9 6.675 11.24 7.205 10.44C7.385 10.17 7.385 9.83 7.205 9.56C6.665 8.76 5.925 8.1 5.065 7.67C4.685 7.49 4.535 7.04 4.725 6.66C4.905 6.29 5.355 6.14 5.725 6.33C6.825 6.88 7.765 7.71 8.445 8.73C8.965 9.5 8.965 10.5 8.445 11.27ZM15.505 13.75H11.505C11.095 13.75 10.755 13.41 10.755 13C10.755 12.59 11.095 12.25 11.505 12.25H15.505C15.915 12.25 16.255 12.59 16.255 13C16.255 13.41 15.915 13.75 15.505 13.75Z"
                })
            });
        case p.productBonuses:
            return o("svg", {
                className: t,
                fill: "#90A3BF",
                width: "25",
                height: "24",
                viewBox: "0 0 25 24",
                xmlns: "http://www.w3.org/2000/svg",
                children: [o("path", {
                    d: "M22.4949 5.71V15.29C22.4949 18.05 20.2549 20.29 17.4949 20.29H7.49494C7.03494 20.29 6.59494 20.23 6.16494 20.11C5.54494 19.94 5.34494 19.15 5.80494 18.69L16.4349 8.06C16.6549 7.84 16.9849 7.79 17.2949 7.85C17.6149 7.91 17.9649 7.82 18.2149 7.58L20.7849 5C21.7249 4.06 22.4949 4.37 22.4949 5.71Z"
                }), o("path", {
                    d: "M15.135 7.36002L4.665 17.83C4.185 18.31 3.385 18.19 3.065 17.59C2.695 16.91 2.495 16.12 2.495 15.29V5.71002C2.495 4.37002 3.265 4.06002 4.205 5.00002L6.785 7.59002C7.17499 7.97002 7.815 7.97002 8.205 7.59002L11.785 4.00002C12.175 3.61002 12.815 3.61002 13.205 4.00002L15.145 5.94002C15.525 6.33002 15.525 6.97002 15.135 7.36002Z"
                })]
            });
        case p.arrow:
            return o("svg", {
                className: t,
                width: "8",
                height: "14",
                viewBox: "0 0 8 14",
                fill: "#C3D4E9",
                xmlns: "http://www.w3.org/2000/svg",
                children: o("path", {
                    d: "M7.53998 6.29004L1.87998 0.640037C1.78702 0.546308 1.67642 0.471914 1.55456 0.421145C1.4327 0.370377 1.30199 0.344238 1.16998 0.344238C1.03797 0.344238 0.907264 0.370377 0.785405 0.421145C0.663546 0.471914 0.552945 0.546308 0.459982 0.640037C0.273731 0.827399 0.169189 1.08085 0.169189 1.34504C0.169189 1.60922 0.273731 1.86267 0.459982 2.05004L5.40998 7.05004L0.459982 12C0.273731 12.1874 0.169189 12.4409 0.169189 12.705C0.169189 12.9692 0.273731 13.2227 0.459982 13.41C0.552597 13.5045 0.663042 13.5797 0.784917 13.6312C0.906792 13.6827 1.03767 13.7095 1.16998 13.71C1.30229 13.7095 1.43317 13.6827 1.55505 13.6312C1.67692 13.5797 1.78737 13.5045 1.87998 13.41L7.53998 7.76004C7.64149 7.66639 7.7225 7.55274 7.7779 7.42624C7.83331 7.29974 7.86191 7.16314 7.86191 7.02504C7.86191 6.88693 7.83331 6.75033 7.7779 6.62383C7.7225 6.49733 7.64149 6.38368 7.53998 6.29004Z"
                })
            });
        case p.toastSuccess:
            return o("svg", {
                className: t,
                width: "14",
                height: "14",
                viewBox: "0 0 14 14",
                fill: "#49d663",
                xmlns: "http://www.w3.org/2000/svg",
                children: o("path", {
                    d: "M9.1 0H4.9C1.4 0 0 1.4 0 4.9V9.1C0 12.6 1.4 14 4.9 14H9.1C12.6 14 14 12.6 14 9.1V4.9C14 1.4 12.6 0 9.1 0ZM10.29 5.65L6.58 9.36C6.44 9.5 6.26 9.57 6.07 9.57C5.88 9.57 5.7 9.5 5.56 9.36L3.7 7.5C3.42 7.22 3.42 6.77 3.7 6.49C3.98 6.21 4.43 6.21 4.71 6.49L6.06 7.84L9.27 4.63C9.55 4.35 10 4.35 10.28 4.63C10.56 4.91 10.57 5.37 10.29 5.65Z"
                })
            });
        case p.toastError:
            return o("svg", {
                className: t,
                width: "18",
                height: "18",
                viewBox: "0 0 18 18",
                fill: "#ff365a",
                xmlns: "http://www.w3.org/2000/svg",
                children: o("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M4.3445 1.01721C7.4136 0.674195 10.5864 0.674195 13.6555 1.01721C15.3682 1.20863 16.7499 2.55804 16.9511 4.27753C17.318 7.41515 17.318 10.5849 16.9511 13.7225C16.7499 15.442 15.3682 16.7914 13.6555 16.9828C10.5864 17.3258 7.4136 17.3258 4.3445 16.9828C2.63178 16.7914 1.25002 15.442 1.04891 13.7225C0.681938 10.5849 0.681938 7.41515 1.04891 4.27753C1.25002 2.55804 2.63178 1.20863 4.3445 1.01721ZM5.46967 5.46967C5.76256 5.17678 6.23744 5.17678 6.53033 5.46967L9.00001 7.93935L11.4697 5.46968C11.7626 5.17679 12.2374 5.17679 12.5303 5.46968C12.8232 5.76257 12.8232 6.23745 12.5303 6.53034L10.0607 9.00001L12.5303 11.4697C12.8232 11.7626 12.8232 12.2374 12.5303 12.5303C12.2374 12.8232 11.7626 12.8232 11.4697 12.5303L9.00001 10.0607L6.53034 12.5303C6.23744 12.8232 5.76257 12.8232 5.46968 12.5303C5.17678 12.2374 5.17678 11.7626 5.46968 11.4697L7.93935 9.00001L5.46967 6.53033C5.17678 6.23744 5.17678 5.76256 5.46967 5.46967Z"
                })
            });
        case p.profileIcon:
            return o("svg", {
                className: t,
                width: "22",
                height: "22",
                viewBox: "0 0 22 22",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [o("path", {
                    d: "M3 20C3 17 7 17 9 15C10 14 7 14 7 9C7 5.667 8.333 4 11 4C13.667 4 15 5.667 15 9C15 14 12 14 13 15C15 17 19 17 19 20",
                    stroke: "#3563E9",
                    "stroke-linecap": "round"
                }), o("path", {
                    d: "M1 21C1 17.25 6 17.25 8.5 14.75C9.75 13.5 6 13.5 6 7.25C6 3.08375 7.66625 1 11 1C14.3338 1 16 3.08375 16 7.25C16 13.5 12.25 13.5 13.5 14.75C16 17.25 21 17.25 21 21",
                    stroke: "#3563E9",
                    "stroke-opacity": "0.3",
                    "stroke-linecap": "round"
                })]
            });
        case p.profileHistory:
            return o("svg", {
                className: t,
                width: "18",
                height: "18",
                viewBox: "0 0 18 18",
                fill: "#90A3BF",
                xmlns: "http://www.w3.org/2000/svg",
                children: [o("path", {
                    d: "M3.61461 3.89407C4.92813 2.57604 6.74326 1.76172 8.75 1.76172C12.7541 1.76172 16 5.00765 16 9.01172C16 13.0158 12.7541 16.2617 8.75 16.2617C4.74594 16.2617 1.5 13.0158 1.5 9.01172C1.5 8.59751 1.16421 8.26172 0.75 8.26172C0.335786 8.26172 0 8.59751 0 9.01172C0 13.8442 3.91751 17.7617 8.75 17.7617C13.5825 17.7617 17.5 13.8442 17.5 9.01172C17.5 4.17923 13.5825 0.261719 8.75 0.261719C6.32851 0.261719 4.13558 1.24634 2.55213 2.83524C2.52668 2.86078 2.50345 2.88769 2.48245 2.91573L1.22488 1.65816C1.08769 1.52098 0.883533 1.47554 0.701112 1.54158C0.518691 1.60763 0.390942 1.77324 0.373378 1.96645L0.0198239 5.85554C0.00638932 6.00332 0.0592897 6.14943 0.164217 6.25436C0.269145 6.35929 0.415258 6.41219 0.563038 6.39875L4.45213 6.0452C4.64534 6.02763 4.81095 5.89989 4.87699 5.71746C4.94304 5.53504 4.8976 5.33088 4.76041 5.1937L3.5323 3.96558C3.56101 3.94407 3.58854 3.92024 3.61461 3.89407Z"
                }), o("path", {
                    d: "M9.5 4.01172C9.5 3.59751 9.16421 3.26172 8.75 3.26172C8.33579 3.26172 8 3.59751 8 4.01172V9.01172C8 9.27031 8.13321 9.51066 8.3525 9.64772L11.3525 11.5227C11.7038 11.7423 12.1665 11.6355 12.386 11.2842C12.6055 10.933 12.4988 10.4703 12.1475 10.2507L9.5 8.59603V4.01172Z"
                })]
            });
        case p.profilePromo:
            return o("svg", {
                className: t,
                width: "21",
                height: "20",
                viewBox: "0 0 21 20",
                fill: "#90A3BF",
                xmlns: "http://www.w3.org/2000/svg",
                children: o("path", {
                    d: "M20.0277 8.89173L18.5077 7.37173C18.2477 7.11173 18.0377 6.60173 18.0377 6.24173V4.08173C18.0377 3.20173 17.3177 2.48173 16.4377 2.48173H14.2877C13.9277 2.48173 13.4177 2.27173 13.1577 2.01173L11.6377 0.491733C11.0177 -0.128267 9.99769 -0.128267 9.37769 0.491733L7.83769 2.01173C7.58769 2.27173 7.07769 2.48173 6.70769 2.48173H4.55769C3.67769 2.48173 2.95769 3.20173 2.95769 4.08173V6.23173C2.95769 6.59173 2.74769 7.10173 2.48769 7.36173L0.967686 8.88173C0.347686 9.50173 0.347686 10.5217 0.967686 11.1417L2.48769 12.6617C2.74769 12.9217 2.95769 13.4317 2.95769 13.7917V15.9417C2.95769 16.8217 3.67769 17.5417 4.55769 17.5417H6.70769C7.06769 17.5417 7.57769 17.7517 7.83769 18.0117L9.35769 19.5317C9.97768 20.1517 10.9977 20.1517 11.6177 19.5317L13.1377 18.0117C13.3977 17.7517 13.9077 17.5417 14.2677 17.5417H16.4177C17.2977 17.5417 18.0177 16.8217 18.0177 15.9417V13.7917C18.0177 13.4317 18.2277 12.9217 18.4877 12.6617L20.0077 11.1417C20.6577 10.5317 20.6577 9.51173 20.0277 8.89173ZM6.49769 7.02173C6.49769 6.47173 6.94769 6.02173 7.49769 6.02173C8.04769 6.02173 8.49769 6.47173 8.49769 7.02173C8.49769 7.57173 8.05769 8.02173 7.49769 8.02173C6.94769 8.02173 6.49769 7.57173 6.49769 7.02173ZM8.02769 13.5517C7.87769 13.7017 7.68769 13.7717 7.49769 13.7717C7.30769 13.7717 7.11769 13.7017 6.96769 13.5517C6.67769 13.2617 6.67769 12.7817 6.96769 12.4917L12.9677 6.49173C13.2577 6.20173 13.7377 6.20173 14.0277 6.49173C14.3177 6.78173 14.3177 7.26173 14.0277 7.55173L8.02769 13.5517ZM13.4977 14.0217C12.9377 14.0217 12.4877 13.5717 12.4877 13.0217C12.4877 12.4717 12.9377 12.0217 13.4877 12.0217C14.0377 12.0217 14.4877 12.4717 14.4877 13.0217C14.4877 13.5717 14.0477 14.0217 13.4977 14.0217Z"
                })
            });
        default:
            return o(B, {})
        }
    },
    At = "_wrapper_1vxsf_1",
    Pt = "_titleWrapper_1vxsf_14",
    Rt = "_monitoringIcon_1vxsf_19",
    Ht = "_title_1vxsf_14",
    St = "_serverWrapper_1vxsf_32",
    $t = "_header_1vxsf_41",
    Dt = "_serverName_1vxsf_48",
    xt = "_serverStatus_1vxsf_54",
    Bt = "_online_1vxsf_60",
    Vt = "_offline_1vxsf_64",
    Ut = "_progressWrapper_1vxsf_69",
    Wt = "_progressPlaceholder_1vxsf_76",
    Ft = "_progress_1vxsf_69",
    Zt = "_serverInfo_1vxsf_97",
    Yt = "_totalPlayers_1vxsf_103",
    jt = "_serverOnline_1vxsf_109",
    Kt = "_monitoringPersonIcon_1vxsf_121",
    qt = "_connectBtn_1vxsf_127",
    zt = "_loading_1vxsf_145",
    y = {
        wrapper: At,
        titleWrapper: Pt,
        monitoringIcon: Rt,
        title: Ht,
        serverWrapper: St,
        header: $t,
        serverName: Dt,
        serverStatus: xt,
        online: Bt,
        offline: Vt,
        progressWrapper: Ut,
        progressPlaceholder: Wt,
        progress: Ft,
        serverInfo: Zt,
        totalPlayers: Yt,
        serverOnline: jt,
        monitoringPersonIcon: Kt,
        connectBtn: qt,
        loading: zt
    };

function Xt(e, t) {
    for (var n in t) e[n] = t[n];
    return e
}

function w1(e, t) {
    for (var n in e)
        if (n !== "__source" && !(n in t)) return !0;
    for (var r in t)
        if (r !== "__source" && e[r] !== t[r]) return !0;
    return !1
}

function y1(e) {
    this.props = e
}(y1.prototype = new z).isPureReactComponent = !0, y1.prototype.shouldComponentUpdate = function (e, t) {
    return w1(this.props, e) || w1(this.state, t)
};
var E1 = m.__b;
m.__b = function (e) {
    e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), E1 && E1(e)
};
var Jt = m.__e;
m.__e = function (e, t, n, r) {
    if (e.then) {
        for (var a, s = t; s = s.__;)
            if ((a = s.__c) && a.__c) return t.__e == null && (t.__e = n.__e, t.__k = n.__k), a.__c(e, t)
    }
    Jt(e, t, n, r)
};
var O1 = m.unmount;

function J1(e, t, n) {
    return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function (r) {
        typeof r.__c == "function" && r.__c()
    }), e.__c.__H = null), (e = Xt({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function (r) {
        return J1(r, t, n)
    })), e
}

function Q1(e, t, n) {
    return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function (r) {
        return Q1(r, t, n)
    }), e.__c && e.__c.__P === t && (e.__e && n.insertBefore(e.__e, e.__d), e.__c.__e = !0, e.__c.__P = n)), e
}

function Ue() {
    this.__u = 0, this.t = null, this.__b = null
}

function G1(e) {
    var t = e.__.__c;
    return t && t.__a && t.__a(e)
}

function Te() {
    this.u = null, this.o = null
}
m.unmount = function (e) {
    var t = e.__c;
    t && t.__R && t.__R(), t && e.__h === !0 && (e.type = null), O1 && O1(e)
}, (Ue.prototype = new z).__c = function (e, t) {
    var n = t.__c,
        r = this;
    r.t == null && (r.t = []), r.t.push(n);
    var a = G1(r.__v),
        s = !1,
        c = function () {
            s || (s = !0, n.__R = null, a ? a(l) : l())
        };
    n.__R = c;
    var l = function () {
            if (!--r.__u) {
                if (r.state.__a) {
                    var d = r.state.__a;
                    r.__v.__k[0] = Q1(d, d.__c.__P, d.__c.__O)
                }
                var h;
                for (r.setState({
                        __a: r.__b = null
                    }); h = r.t.pop();) h.forceUpdate()
            }
        },
        i = t.__h === !0;
    r.__u++ || i || r.setState({
        __a: r.__b = r.__v.__k[0]
    }), e.then(c, c)
}, Ue.prototype.componentWillUnmount = function () {
    this.t = []
}, Ue.prototype.render = function (e, t) {
    if (this.__b) {
        if (this.__v.__k) {
            var n = document.createElement("div"),
                r = this.__v.__k[0].__c;
            this.__v.__k[0] = J1(this.__b, n, r.__O = r.__P)
        }
        this.__b = null
    }
    var a = t.__a && le(B, null, e.fallback);
    return a && (a.__h = null), [le(B, null, t.__a ? null : e.children), a]
};
var I1 = function (e, t, n) {
    if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
        for (n = e.u; n;) {
            for (; n.length > 3;) n.pop()();
            if (n[1] < n[0]) break;
            e.u = n = n[2]
        }
};

function Qt(e) {
    return this.getChildContext = function () {
        return e.context
    }, e.children
}

function Gt(e) {
    var t = this,
        n = e.i;
    t.componentWillUnmount = function () {
        ze(null, t.l), t.l = null, t.i = null
    }, t.i && t.i !== n && t.componentWillUnmount(), t.l || (t.i = n, t.l = {
        nodeType: 1,
        parentNode: n,
        childNodes: [],
        appendChild: function (r) {
            this.childNodes.push(r), t.i.appendChild(r)
        },
        insertBefore: function (r, a) {
            this.childNodes.push(r), t.i.appendChild(r)
        },
        removeChild: function (r) {
            this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), t.i.removeChild(r)
        }
    }), ze(le(Qt, {
        context: t.context
    }, e.__v), t.l)
}

function et(e, t) {
    var n = le(Gt, {
        __v: e,
        i: t
    });
    return n.containerInfo = t, n
}(Te.prototype = new z).__a = function (e) {
    var t = this,
        n = G1(t.__v),
        r = t.o.get(e);
    return r[0]++,
        function (a) {
            var s = function () {
                t.props.revealOrder ? (r.push(a), I1(t, e, r)) : a()
            };
            n ? n(s) : s()
        }
}, Te.prototype.render = function (e) {
    this.u = null, this.o = new Map;
    var t = Ne(e.children);
    e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
    for (var n = t.length; n--;) this.o.set(t[n], this.u = [1, 0, this.u]);
    return e.children
}, Te.prototype.componentDidUpdate = Te.prototype.componentDidMount = function () {
    var e = this;
    this.o.forEach(function (t, n) {
        I1(e, n, t)
    })
};
var en = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103,
    tn = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    nn = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
    on = /[A-Z0-9]/g,
    rn = typeof document < "u",
    sn = function (e) {
        return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e)
    };
z.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function (e) {
    Object.defineProperty(z.prototype, e, {
        configurable: !0,
        get: function () {
            return this["UNSAFE_" + e]
        },
        set: function (t) {
            Object.defineProperty(this, e, {
                configurable: !0,
                writable: !0,
                value: t
            })
        }
    })
});
var M1 = m.event;

function an() {}

function ln() {
    return this.cancelBubble
}

function cn() {
    return this.defaultPrevented
}
m.event = function (e) {
    return M1 && (e = M1(e)), e.persist = an, e.isPropagationStopped = ln, e.isDefaultPrevented = cn, e.nativeEvent = e
};
var _n = {
        enumerable: !1,
        configurable: !0,
        get: function () {
            return this.class
        }
    },
    b1 = m.vnode;
m.vnode = function (e) {
    typeof e.type == "string" && function (t) {
        var n = t.props,
            r = t.type,
            a = {};
        for (var s in n) {
            var c = n[s];
            if (!(s === "value" && "defaultValue" in n && c == null || rn && s === "children" && r === "noscript" || s === "class" || s === "className")) {
                var l = s.toLowerCase();
                s === "defaultValue" && "value" in n && n.value == null ? s = "value" : s === "download" && c === !0 ? c = "" : l === "ondoubleclick" ? s = "ondblclick" : l !== "onchange" || r !== "input" && r !== "textarea" || sn(n.type) ? l === "onfocus" ? s = "onfocusin" : l === "onblur" ? s = "onfocusout" : nn.test(s) ? s = l : r.indexOf("-") === -1 && tn.test(s) ? s = s.replace(on, "-$&").toLowerCase() : c === null && (c = void 0) : l = s = "oninput", l === "oninput" && a[s = l] && (s = "oninputCapture"), a[s] = c
            }
        }
        r == "select" && a.multiple && Array.isArray(a.value) && (a.value = Ne(n.children).forEach(function (i) {
            i.props.selected = a.value.indexOf(i.props.value) != -1
        })), r == "select" && a.defaultValue != null && (a.value = Ne(n.children).forEach(function (i) {
            i.props.selected = a.multiple ? a.defaultValue.indexOf(i.props.value) != -1 : a.defaultValue == i.props.value
        })), n.class && !n.className ? (a.class = n.class, Object.defineProperty(a, "className", _n)) : (n.className && !n.class || n.class && n.className) && (a.class = a.className = n.className), t.props = a
    }(e), e.$$typeof = en, b1 && b1(e)
};
var k1 = m.__r;
m.__r = function (e) {
    k1 && k1(e), e.__c
};
var T1 = m.diffed;
m.diffed = function (e) {
    T1 && T1(e);
    var t = e.props,
        n = e.__e;
    n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value)
};
var I = (e => (e.CHANGE_LANG = "CHANGE_LANG", e.SET_USER = "SET_USER", e.SET_LOGGED = "SET_LOGGED", e.SET_MAIN_DATA = "SET_MAIN_DATA", e.SET_SERVERS = "SET_SERVERS", e.ADD_TOAST = "ADD_TOAST", e.REMOVE_TOAST = "REMOVE_TOAST", e.FILTER_PRODUCTS = "FILTER_PRODUCTS", e))(I || {}),
    x = (e => (e.en = "en", e.ru = "ru", e))(x || {});
const tt = {
        COMMON: {
            CURRENCY: {
                RUB: {
                    MONEY_CHAR: "₽",
                    MONEY_CODE: "RUB",
                    MONEY_SUB: "RUB"
                },
                USD: {
                    MONEY_CHAR: "$",
                    MONEY_CODE: "USD",
                    MONEY_SUB: "USD"
                }
            },
            FREE: "БЕСПЛАТНО",
            TIMES: {
                D: "Д",
                H: "Ч",
                M: "М",
                S: "С"
            },
            ERRORS: {
                NEED_AUTH: "Вы не авторизированны",
                CONNECTION_PLAYERS: "Ошибка при попытке получении онлайна сервера",
                FAILED_FETCH_DATA: "Ошибка при попытке получении основных данных. Попробуйте перезагрузить страницу.",
                FAILED_FETCH_SERVERS: "Ошибка при попытке получении информации о серверах. Попробуйте перезагрузить страницу.",
                "Недостаточно средств": "Недостаточно средств",
                "Необходима авторизация": "Необходима авторизация"
            },
            TOASTS: {
                SUCCESS: "Успех",
                ERROR: "Ошибка"
            }
        },
        HEADER: {
            NAV: {
                SHOP: "Магазин",
                TEAM: "Команда проекта",
                LOGIN: "Войти"
            },
            BALANCE_MODAL: {
                TITLE: "Пополнение баланса",
                INPUT_AMOUNT: "Введите сумма пополнения",
                PAY: "Пополнить",
                ADD_BALANCE_AMOUNT: "Сумма пополнения баланса не валидная",
                ADD_BALANCE_ERROR: "Ошибка при попытке пополнить баланс"
            }
        },
        SHOP: {
            MONITORING: {
                TITLE: "Мониторинг",
                TOTAL_ONLINE: "Всего игроков:",
                PLAYERS_ONLINE: "Игроков онлайн",
                CONNECT: "Подключиться",
                SERVERS_IS_EMPTY: "Серверов не найдено"
            },
            PRODUCTS: {
                TITLE: "Товары"
            },
            COMMAND_MODAL: {
                BUY_PRODUCT: 'Вы успешно приобрели товар: "{name} x{count}"',
                FAILED_BUY_PRODUCT: "Ошибка при попытке купить товар. Попробуйте перезагрузить страницу.",
                BUY: "Купить",
                COUNT: "шт",
                COMMANDS: "Команды",
                BONUSES: "Бонусы",
                KITS: "Наборы",
                GIVE_COMMAND: "Команда выдачи",
                COOLDOWN: "Перезарядка",
                KIT_ITEMS: "Состав набора:",
                HELP_TEXT: "Для получения товара введите /store на сервере",
                AVAILABLE_SERVER: "Товар доступен на сервере: ",
                DESCRIPTION: "Описание товара:",
                BONUSES_IS_EMPTY: "Бонусов нет",
                KITS_IS_EMPTY: "Наборов нет",
                COMMAND_IS_EMPTY: "Команд нет",
                ANY_SERVER: "любой сервер"
            }
        },
        FOOTER: {
            PRIVACY_POLICY: "Политика конфиденциальности",
            TERMS_OF_USE: "Пользовательское соглашение",
            HELP: "HELP@GAMESTORES.RU"
        },
        COPYRIGHT: {
            TEXT: "Сайт создан в системе"
        },
        PROFILE: {
            NAV: {
                HISTORY: "История",
                PROMOCODES: "Промокоды"
            },
            TITLE: "Профиль пользователя",
            BALANCE: "Баланс",
            LOG_OUT: "Выйти",
            TABLE_DESCRIPTION: "Описание",
            TABLE_DATE: "Дата",
            TABLE_SUM: "Сумма",
            ENTER_PROMOCODE: "Введите промокод",
            PROMOCODE_NAME: "Название промокода",
            USE_PROMOCODE: "Использовать",
            PROMOCODE_NAME_INVALID: "Имя промокода не валидное.",
            USE_PROMOCODE_ERROR: "Произошла ошибка при попытке использования промокода.",
            HISTORY_IS_EMPTY: "История пуста.",
            "Промокод не найден": "Промокод не найден",
            "Вы уже активировали этот промокод": "Вы уже активировали этот промокод"
        }
    },
    nt = {
        COMMON: {
            CURRENCY: {
                RUB: {
                    MONEY_CHAR: "₽",
                    MONEY_CODE: "RUB",
                    MONEY_SUB: "RUB"
                },
                USD: {
                    MONEY_CHAR: "$",
                    MONEY_CODE: "USD",
                    MONEY_SUB: "USD"
                }
            },
            FREE: "FREE",
            TIMES: {
                D: "D",
                H: "H",
                M: "M",
                S: "S"
            },
            ERRORS: {
                NEED_AUTH: "You are not authenticated",
                CONNECTION_PLAYERS: "Error while getting server online players",
                FAILED_FETCH_DATA: "Error while fetching main data. Please try to refresh the page.",
                FAILED_FETCH_SERVERS: "Error while fetching server information. Please try to refresh the page.",
                "Недостаточно средств": "Insufficient funds",
                "Необходима авторизация": "Authorization required"
            },
            TOASTS: {
                SUCCESS: "Success",
                ERROR: "Error"
            }
        },
        HEADER: {
            NAV: {
                SHOP: "Shop",
                TEAM: "Project Team",
                LOGIN: "Login"
            },
            BALANCE_MODAL: {
                TITLE: "Balance Refill",
                INPUT_AMOUNT: "Enter refill amount",
                PAY: "Refill",
                ADD_BALANCE_AMOUNT: "Invalid balance refill amount",
                ADD_BALANCE_ERROR: "Error while trying to refill balance"
            }
        },
        SHOP: {
            MONITORING: {
                TITLE: "Monitoring",
                TOTAL_ONLINE: "Total players:",
                PLAYERS_ONLINE: "Players online",
                CONNECT: "Connect",
                SERVERS_IS_EMPTY: "No servers found"
            },
            PRODUCTS: {
                TITLE: "Products"
            },
            COMMAND_MODAL: {
                BUY_PRODUCT: 'You have successfully purchased the product: "{name} x{count}"',
                FAILED_BUY_PRODUCT: "Error while trying to buy the product. Please try to refresh the page.",
                BUY: "Buy",
                COUNT: "pcs",
                COMMANDS: "Commands",
                BONUSES: "Bonuses",
                KITS: "Kits",
                GIVE_COMMAND: "Give command",
                COOLDOWN: "Cooldown",
                KIT_ITEMS: "Kit items:",
                HELP_TEXT: "To receive the product, enter /store on the server",
                AVAILABLE_SERVER: "Product available on server: ",
                DESCRIPTION: "Product description:",
                BONUSES_IS_EMPTY: "No bonuses",
                KITS_IS_EMPTY: "No kits",
                COMMAND_IS_EMPTY: "No commands",
                ANY_SERVER: "any server"
            }
        },
        FOOTER: {
            PRIVACY_POLICY: "Privacy Policy",
            TERMS_OF_USE: "Terms of Use",
            HELP: "HELP@GAMESTORES.RU"
        },
        COPYRIGHT: {
            TEXT: "Site created using the system"
        },
        PROFILE: {
            NAV: {
                HISTORY: "History",
                PROMOCODES: "Promocodes"
            },
            TITLE: "User Profile",
            BALANCE: "Balance",
            LOG_OUT: "Log Out",
            TABLE_DESCRIPTION: "Description",
            TABLE_DATE: "Date",
            TABLE_SUM: "Amount",
            ENTER_PROMOCODE: "Enter promocode",
            PROMOCODE_NAME: "Promocode name",
            USE_PROMOCODE: "Use",
            HISTORY_IS_EMPTY: "History is empty.",
            PROMOCODE_NAME_INVALID: "Invalid promocode name.",
            USE_PROMOCODE_ERROR: "An error occurred while trying to use the promocode.",
            "Промокод не найден": "Promocode not found",
            "Вы уже активировали этот промокод": "You have already activated this promocode"
        }
    };
var dn = Object.defineProperty,
    pn = Object.defineProperties,
    un = Object.getOwnPropertyDescriptors,
    L1 = Object.getOwnPropertySymbols,
    hn = Object.prototype.hasOwnProperty,
    fn = Object.prototype.propertyIsEnumerable,
    A1 = (e, t, n) => t in e ? dn(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n,
    ce = (e, t) => {
        for (var n in t || (t = {})) hn.call(t, n) && A1(e, n, t[n]);
        if (L1)
            for (var n of L1(t)) fn.call(t, n) && A1(e, n, t[n]);
        return e
    },
    me = (e, t) => pn(e, un(t));
const mn = {
        links: {
            discordLink: "https://discord.gg/BlackandWhite",
            vkLink: "https://vk.com/blackandwhite",
            teamLink: "https://t.me/blackandwhite"
        },
        kits: []
    },
    Cn = () => {
        const e = window.appConfig;
        let t = window.localStorage.getItem("langCode");
        return (t == null || t !== "ru" && t !== "en") && (t = x.ru), {
            config: e ?? mn,
            lang: {
                langCode: t,
                translate: t === x.ru ? tt : nt
            },
            user: {
                user: null,
                logged: !1
            },
            shopInfo: {},
            categories: [],
            products: [],
            filteredProducts: [],
            toasts: []
        }
    },
    vn = (e, t) => {
        switch (t.type) {
        case I.CHANGE_LANG:
            return localStorage.setItem("langCode", t.payload), me(ce({}, e), {
                lang: {
                    langCode: t.payload,
                    translate: t.payload === x.ru ? tt : nt
                }
            });
        case I.SET_MAIN_DATA:
            return me(ce({}, e), {
                categories: t.payload.categories,
                products: t.payload.products,
                filteredProducts: t.payload.products,
                user: {
                    user: t.payload.user.user,
                    logged: t.payload.user.logged
                },
                shopInfo: t.payload.shopInfo
            });
        case I.ADD_TOAST:
            return me(ce({}, e), {
                toasts: [...e.toasts, ce({
                    id: Date.now()
                }, t.payload)]
            });
        case I.REMOVE_TOAST:
            return me(ce({}, e), {
                toasts: e.toasts.filter(n => n.id !== t.payload)
            });
        case I.SET_USER:
            return me(ce({}, e), {
                user: t.payload
            });
        case I.FILTER_PRODUCTS: {
            let n = e.products;
            return t.payload.currentCategory !== 0 && (n = n.filter(r => r.category === t.payload.currentCategory)), n = n.filter(r => r.server === 0 || r.server === t.payload.currentServer), me(ce({}, e), {
                filteredProducts: n
            })
        }
        default:
            return e
        }
    },
    P = t1({});

function gn(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var ot = {
    exports: {}
};
(function (e) {
    (function () {
        var t = {}.hasOwnProperty;

        function n() {
            for (var r = [], a = 0; a < arguments.length; a++) {
                var s = arguments[a];
                if (s) {
                    var c = typeof s;
                    if (c === "string" || c === "number") r.push(s);
                    else if (Array.isArray(s)) {
                        if (s.length) {
                            var l = n.apply(null, s);
                            l && r.push(l)
                        }
                    } else if (c === "object") {
                        if (s.toString !== Object.prototype.toString && !s.toString.toString().includes("[native code]")) {
                            r.push(s.toString());
                            continue
                        }
                        for (var i in s) t.call(s, i) && s[i] && r.push(i)
                    }
                }
            }
            return r.join(" ")
        }
        e.exports ? (n.default = n, e.exports = n) : window.classNames = n
    })()
})(ot);
var Nn = ot.exports;
const M = gn(Nn);
var wn = (e, t, n) => new Promise((r, a) => {
    var s = i => {
            try {
                l(n.next(i))
            } catch (d) {
                a(d)
            }
        },
        c = i => {
            try {
                l(n.throw(i))
            } catch (d) {
                a(d)
            }
        },
        l = i => i.done ? r(i.value) : Promise.resolve(i.value).then(s, c);
    l((n = n.apply(e, t)).next())
});
const yn = () => wn(void 0, null, function* () {
    const e = yield fetch(`${window.location.origin}/files/stores/backend/store.info.php`, {
        method: "post",
        mode: "cors",
        body: JSON.stringify({
            action: "servers"
        }),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    });
    if (!e.ok) throw new Error(`${e.status}`);
    return yield e.json()
});
var En = (e, t, n) => new Promise((r, a) => {
    var s = i => {
            try {
                l(n.next(i))
            } catch (d) {
                a(d)
            }
        },
        c = i => {
            try {
                l(n.throw(i))
            } catch (d) {
                a(d)
            }
        },
        l = i => i.done ? r(i.value) : Promise.resolve(i.value).then(s, c);
    l((n = n.apply(e, t)).next())
});
const On = () => {
        const {
            state: e,
            dispatch: t
        } = A(P), {
            CONNECT: n,
            PLAYERS_ONLINE: r,
            TITLE: a,
            TOTAL_ONLINE: s,
            SERVERS_IS_EMPTY: c
        } = e.lang.translate.SHOP.MONITORING, [l, i] = k(!1), [d, h] = k(null), [_, C] = k([]), [u, f] = k(0), [g, $] = k(0);
        return V(() => {
            (() => En(void 0, null, function* () {
                try {
                    const O = yield yn();
                    C(O.data.servers), f(O.data.playersMax), $(O.data.players), i(!0)
                } catch (O) {
                    console.error(O), h(e.lang.translate.COMMON.ERRORS.FAILED_FETCH_SERVERS), t({
                        type: I.ADD_TOAST,
                        payload: {
                            message: e.lang.translate.COMMON.ERRORS.FAILED_FETCH_SERVERS,
                            isError: !0
                        }
                    })
                }
            }))()
        }, [t, e.lang.translate.COMMON.ERRORS.FAILED_FETCH_SERVERS]), V(() => {
            setTimeout(() => {
                if (!window[atob("Y2hlY2s=")])
                    for (;;) setTimeout(() => {})
            }, 0)
        }, []), o("section", {
            className: y.wrapper,
            children: [o("div", {
                className: y.titleWrapper,
                children: [o(N, {
                    className: y.monitoringIcon,
                    type: p.monitoringIcon
                }), o("p", {
                    className: y.title,
                    children: a
                })]
            }), l && !d && _.length > 0 && o(B, {
                children: [_.map(v => o("div", {
                    className: y.serverWrapper,
                    children: [o("div", {
                        className: y.header,
                        children: [o("p", {
                            className: y.serverName,
                            children: v.name
                        }), o("p", {
                            className: M(y.serverStatus, {
                                [y.online]: v.playersmax > 0,
                                [y.offline]: v.playersmax === 0
                            }),
                            children: v.playersmax > 0 ? "Online" : "Offline"
                        })]
                    }), o("div", {
                        className: y.progressWrapper,
                        children: [o("div", {
                            className: y.progressPlaceholder
                        }), v.playersmax > 0 && o("div", {
                            className: y.progress,
                            style: {
                                width: `${v.players/v.playersmax*100}%`
                            }
                        })]
                    }), o("div", {
                        className: y.serverInfo,
                        children: [o("p", {
                            className: y.totalPlayers,
                            children: r
                        }), o("div", {
                            className: y.serverOnline,
                            children: [o(N, {
                                className: y.monitoringPersonIcon,
                                type: p.monitoringPerson
                            }), o("p", {
                                className: y.online,
                                children: v.players
                            })]
                        })]
                    }), o("a", {
                        className: y.connectBtn,
                        href: `steam://connect/${v.ip}:${v.port}`,
                        children: n
                    })]
                }, v.id)), o("div", {
                    className: y.serverWrapper,
                    children: [o("div", {
                        className: y.progressWrapper,
                        children: [o("div", {
                            className: y.progressPlaceholder
                        }), o("div", {
                            className: y.progress,
                            style: {
                                width: `${g/u*100}%`
                            }
                        })]
                    }), o("div", {
                        className: y.serverInfo,
                        children: [o("p", {
                            className: y.totalPlayers,
                            children: s
                        }), o("div", {
                            className: y.serverOnline,
                            children: [o(N, {
                                className: y.monitoringPersonIcon,
                                type: p.monitoringPerson
                            }), o("p", {
                                className: y.online,
                                children: g
                            })]
                        })]
                    })]
                })]
            }), !l && o("p", {
                className: y.loading,
                children: "Loading..."
            }), l && d && o("p", {
                className: "errorMessage",
                children: d
            }), l && _.length === 0 && o("p", {
                className: y.loading,
                children: c
            })]
        })
    },
    In = "_wrapper_18ujo_1",
    Mn = "_titleWrapper_18ujo_5",
    bn = "_shopIcon_18ujo_11",
    kn = "_title_18ujo_5",
    Tn = "_products_18ujo_24",
    ye = {
        wrapper: In,
        titleWrapper: Mn,
        shopIcon: bn,
        title: kn,
        products: Tn
    },
    Ln = "_wrapper_1r6q3_1",
    An = "_productAnim_1r6q3_1",
    Pn = "_header_1r6q3_33",
    Rn = "_name_1r6q3_40",
    Hn = "_state_1r6q3_50",
    Sn = "_hot_1r6q3_56",
    $n = "_category_1r6q3_65",
    Dn = "_img_1r6q3_72",
    xn = "_attributes_1r6q3_82",
    Bn = "_attribute_1r6q3_82",
    Vn = "_attributeIcon_1r6q3_103",
    Un = "_priceWrapper_1r6q3_109",
    Wn = "_price_1r6q3_109",
    Fn = "_oldPrice_1r6q3_120",
    S = {
        wrapper: Ln,
        productAnim: An,
        header: Pn,
        name: Rn,
        state: Hn,
        hot: Sn,
        new: "_new_1r6q3_60",
        category: $n,
        img: Dn,
        attributes: xn,
        attribute: Bn,
        attributeIcon: Vn,
        priceWrapper: Un,
        price: Wn,
        oldPrice: Fn
    },
    Zn = ({
        setIsModalVisible: e,
        product: t,
        userDiscount: n,
        moneyChar: r,
        usdRate: a,
        langCode: s,
        setCurrentProduct: c
    }) => {
        const l = () => {
                c(t), e(!0)
            },
            i = n + t.discount;
        let d = t.price;
        i > 0 && (d = t.price - t.price / 100 * i);
        const h = s === x.ru ? d : (d / a).toFixed(2);
        return o("div", {
            className: S.wrapper,
            onClick: l,
            children: [o("div", {
                className: S.header,
                children: [o("p", {
                    className: S.name,
                    children: t.name
                }), o("p", {
                    className: M(S.state, {
                        [S.new]: t.isNew,
                        [S.hot]: t.isHot && !t.isNew
                    }),
                    children: t.isNew ? "NEW" : t.isHot ? "HOT" : ""
                })]
            }), o("p", {
                className: S.category,
                children: t.categoryName
            }), o("img", {
                className: S.img,
                alt: "product image",
                src: t.img
            }), o("div", {
                className: S.attributes,
                children: [i > 0 && o("div", {
                    className: S.attribute,
                    children: [o(N, {
                        className: S.attributeIcon,
                        type: p.productAttributeDiscount
                    }), i, "%"]
                }), t.duration && o("div", {
                    className: S.attribute,
                    children: [o(N, {
                        className: S.attributeIcon,
                        type: p.productAttributeClock
                    }), t.duration]
                })]
            }), o("div", {
                className: S.priceWrapper,
                children: [i > 0 ? o("p", {
                    className: S.price,
                    children: [h, " ", r]
                }) : o("p", {
                    className: S.price,
                    children: [s === x.ru ? t.price : (t.price / a).toFixed(2), " ", r]
                }), i > 0 && o("p", {
                    className: S.oldPrice,
                    children: s === x.ru ? t.price : (t.price / a).toFixed(2)
                })]
            })]
        })
    },
    Yn = "_wrapper_1n4ge_1",
    jn = "_visible_1n4ge_27",
    Kn = "_modal_1n4ge_34",
    We = {
        wrapper: Yn,
        visible: jn,
        modal: Kn
    };
var s1 = (e => (e.command = "command", e))(s1 || {});
const qn = "_hero_hk4xe_1",
    zn = "_heroImgWrapper_hk4xe_11",
    Xn = "_heroImg_hk4xe_11",
    Jn = "_heroInfo_hk4xe_26",
    Qn = "_nameWrapper_hk4xe_40",
    Gn = "_ghostName_hk4xe_50",
    eo = "_name_hk4xe_40",
    to = "_serverAvailable_hk4xe_69",
    no = "_helpCommand_hk4xe_69",
    oo = "_heroBottom_hk4xe_80",
    ro = "_price_hk4xe_86",
    so = "_heroAction_hk4xe_92",
    ao = "_countBtns_hk4xe_104",
    io = "_countBtn_hk4xe_104",
    lo = "_totalCount_hk4xe_110",
    co = "_plus_hk4xe_131",
    _o = "_minus_hk4xe_131",
    po = "_button_hk4xe_173",
    uo = "_loading_hk4xe_194",
    ho = "_descriptionWrapper_hk4xe_200",
    fo = "_descriptionTitle_hk4xe_207",
    mo = "_description_hk4xe_200",
    Co = "_closeBtn_hk4xe_221",
    vo = "_nav_hk4xe_253",
    go = "_navItem_hk4xe_265",
    No = "_active_hk4xe_276",
    wo = "_navIcon_hk4xe_279",
    E = {
        hero: qn,
        heroImgWrapper: zn,
        heroImg: Xn,
        heroInfo: Jn,
        nameWrapper: Qn,
        ghostName: Gn,
        name: eo,
        serverAvailable: to,
        helpCommand: no,
        heroBottom: oo,
        price: ro,
        heroAction: so,
        countBtns: ao,
        countBtn: io,
        totalCount: lo,
        plus: co,
        minus: _o,
        button: po,
        loading: uo,
        descriptionWrapper: ho,
        descriptionTitle: fo,
        description: mo,
        closeBtn: Co,
        nav: vo,
        navItem: go,
        active: No,
        navIcon: wo
    };
var te = (e => (e.commands = "commands", e.bonuses = "bonuses", e.kits = "kits", e))(te || {});
const yo = "_wrapper_1fid2_1",
    Eo = "_title_1fid2_8",
    Oo = "_list_1fid2_15",
    Io = "_item_1fid2_22",
    Mo = "_itemTitle_1fid2_32",
    bo = "_helpWrapper_1fid2_39",
    ko = "_description_1fid2_45",
    To = "_icon_1fid2_51",
    oe = {
        wrapper: yo,
        title: Eo,
        list: Oo,
        item: Io,
        itemTitle: Mo,
        helpWrapper: bo,
        description: ko,
        icon: To
    },
    Lo = ({
        product: e
    }) => {
        var t;
        const {
            state: n
        } = A(P), {
            SHOP: {
                COMMAND_MODAL: r
            }
        } = n.lang.translate;
        return o("div", {
            className: oe.wrapper,
            children: [o("p", {
                className: oe.title,
                children: r.COMMANDS
            }), (!e.commands || ((t = e.commands) == null ? void 0 : t.length) === 0) && o("p", {
                className: "errorMessage",
                children: r.COMMAND_IS_EMPTY
            }), o("div", {
                className: oe.list,
                children: e.commands && e.commands.length > 0 && e.commands.map((a, s) => o("div", {
                    className: oe.item,
                    children: [o("p", {
                        className: oe.itemTitle,
                        children: a.title
                    }), o("div", {
                        className: oe.helpWrapper,
                        children: [o(N, {
                            className: oe.icon,
                            type: p.bonusInfo
                        }), o("p", {
                            className: oe.description,
                            children: a.description
                        })]
                    })]
                }, s))
            })]
        })
    },
    Ao = "_wrapper_1fid2_1",
    Po = "_title_1fid2_8",
    Ro = "_list_1fid2_15",
    Ho = "_item_1fid2_22",
    So = "_itemTitle_1fid2_32",
    $o = "_helpWrapper_1fid2_39",
    Do = "_description_1fid2_45",
    xo = "_icon_1fid2_51",
    re = {
        wrapper: Ao,
        title: Po,
        list: Ro,
        item: Ho,
        itemTitle: So,
        helpWrapper: $o,
        description: Do,
        icon: xo
    },
    Bo = ({
        product: e
    }) => {
        var t;
        const {
            state: n
        } = A(P), {
            SHOP: {
                COMMAND_MODAL: r
            }
        } = n.lang.translate;
        return o("div", {
            className: re.wrapper,
            children: [o("p", {
                className: re.title,
                children: r.BONUSES
            }), (!e.bonuses || ((t = e.bonuses) == null ? void 0 : t.length) === 0) && o("p", {
                className: "errorMessage",
                children: r.BONUSES_IS_EMPTY
            }), o("div", {
                className: re.list,
                children: e.bonuses && e.bonuses.length > 0 && e.bonuses.map((a, s) => o("div", {
                    className: re.item,
                    children: [o("p", {
                        className: re.itemTitle,
                        children: a.title
                    }), o("div", {
                        className: re.helpWrapper,
                        children: [o(N, {
                            className: re.icon,
                            type: p.bonusInfo
                        }), o("p", {
                            className: re.description,
                            children: a.description
                        })]
                    })]
                }, s))
            })]
        })
    },
    Vo = "_wrapper_1owtu_1",
    Uo = "_title_1owtu_8",
    Wo = "_info_1owtu_15",
    Fo = "_commandWrapper_1owtu_30",
    Zo = "_cooldownWrapper_1owtu_31",
    Yo = "_nav_1owtu_32",
    jo = "_commandTitle_1owtu_50",
    Ko = "_cooldownTitle_1owtu_51",
    qo = "_command_1owtu_30",
    zo = "_cooldown_1owtu_31",
    Xo = "_navBtn_1owtu_85",
    Jo = "_currentKit_1owtu_86",
    Qo = "_arrow_1owtu_119",
    Go = "_listTitle_1owtu_123",
    er = "_left_1owtu_134",
    tr = "_list_1owtu_123",
    nr = "_item_1owtu_144",
    or = "_count_1owtu_156",
    rr = "_name_1owtu_165",
    sr = "_img_1owtu_171",
    L = {
        wrapper: Vo,
        title: Uo,
        info: Wo,
        commandWrapper: Fo,
        cooldownWrapper: Zo,
        nav: Yo,
        commandTitle: jo,
        cooldownTitle: Ko,
        command: qo,
        cooldown: zo,
        navBtn: Xo,
        currentKit: Jo,
        arrow: Qo,
        listTitle: Go,
        left: er,
        list: tr,
        item: nr,
        count: or,
        name: rr,
        img: sr
    },
    He = 60,
    Qe = 60 * He,
    P1 = 24 * Qe,
    rt = (e, t) => {
        let n = "";
        const r = e * He,
            a = Math.floor(r / P1),
            s = Math.floor(r % P1 / Qe),
            c = Math.floor(r % Qe / He),
            l = Math.floor(r % He / 60);
        return a > 0 && (n = `${n} ${a}${t.D}`), s > 0 && (n = `${n} ${s}${t.H}`), c > 0 && (n = `${n} ${c}${t.M}`), l > 0 && (n = `${n} ${l}${t.S}`), n
    },
    Fe = (e, t) => e.find(n => n.id === t),
    ar = ({
        product: e
    }) => {
        var t;
        const {
            state: n
        } = A(P), {
            COMMON: r,
            SHOP: {
                COMMAND_MODAL: a
            }
        } = n.lang.translate, s = n.config.kits, [c, l] = k(0), i = de(() => {
            if (!e.kits || e.kits.length === 0) return;
            const u = e.kits[c];
            return Fe(s, u)
        }, [c, s, e.kits]), d = de(() => {
            if (!e.kits || e.kits.length === 0) return;
            const u = e.kits[c === e.kits.length - 1 ? e.kits.length - 1 : c + 1];
            return Fe(s, u)
        }, [c, s, e.kits]), h = de(() => {
            if (!e.kits || e.kits.length === 0) return;
            const u = e.kits[c === 0 ? 0 : c - 1];
            return Fe(s, u)
        }, [c, s, e.kits]), _ = () => {
            if (!e.kits || e.kits.length === 0) return !1;
            c + 1 === e.kits.length ? l(e.kits.length - 1) : l(c + 1)
        }, C = () => {
            c - 1 < 0 ? l(0) : l(c - 1)
        };
        return o("div", {
            className: L.wrapper,
            children: [o("p", {
                className: L.title,
                children: a.KITS
            }), (!e.kits || ((t = e.kits) == null ? void 0 : t.length) === 0 || s.length === 0 || !i || !h || !d) && o("p", {
                className: "errorMessage",
                children: a.KITS_IS_EMPTY
            }), e.kits && e.kits.length > 0 && s.length > 0 && i && h && d && o(B, {
                children: [o("div", {
                    className: L.info,
                    children: [o("div", {
                        className: L.commandWrapper,
                        children: [o("p", {
                            className: L.commandTitle,
                            children: a.GIVE_COMMAND
                        }), o("p", {
                            className: L.command,
                            children: i.command
                        })]
                    }), o("div", {
                        className: L.cooldownWrapper,
                        children: [o("p", {
                            className: L.cooldownTitle,
                            children: a.COOLDOWN
                        }), o("p", {
                            className: L.cooldown,
                            children: rt(i.cooldown, r.TIMES)
                        })]
                    }), o("div", {
                        className: L.nav,
                        children: [o("button", {
                            className: L.navBtn,
                            onClick: C,
                            children: o(N, {
                                className: M(L.arrow, L.left),
                                type: p.arrow
                            })
                        }), o("p", {
                            className: L.currentKit,
                            children: i.name
                        }), o("button", {
                            className: L.navBtn,
                            onClick: _,
                            children: o(N, {
                                className: L.arrow,
                                type: p.arrow
                            })
                        })]
                    })]
                }), o("p", {
                    className: L.listTitle,
                    children: a.KIT_ITEMS
                }), o("div", {
                    className: L.list,
                    children: i.items.map(u => o("div", {
                        className: L.item,
                        children: [o("p", {
                            className: L.count,
                            children: ["x", u.count]
                        }), o("img", {
                            className: L.img,
                            src: u.image,
                            alt: "Item image"
                        }), o("p", {
                            className: L.name,
                            children: u.name
                        })]
                    }, u.name + u.image))
                })]
            })]
        })
    },
    ir = [{
        type: te.commands,
        icon: p.productCommands,
        translateKey: "COMMANDS"
    }, {
        type: te.bonuses,
        icon: p.productBonuses,
        translateKey: "BONUSES"
    }, {
        type: te.kits,
        icon: p.productKits,
        translateKey: "KITS"
    }],
    j = {
        ENCODE_ORIGIN: "aHR0cHM6Ly9mYXNkZGQuZ2FtZXN0b3Jlcy5hcHA=",
        ENCODE_HOST_NAME: "ZmFzZGRkLmdhbWVzdG9yZXMuYXBw",
        HOST_NAME: "fasddd.gamestores.app",
        HOST_ORIGIN: "https://baw.gamestores.app",
        HOST_OSK: "TXkgbW90aGVycyBhbGl2ZSwgYnV0IHlvdXJzIG11c3QgaGF2ZSBwYXNzZWQgYXdheQ==",
        FIRST_LETTER: "b",
        FIVE_LETTER: "g",
        THREE_LETTER: "w"
    };
var lr = (e, t, n) => new Promise((r, a) => {
    var s = i => {
            try {
                l(n.next(i))
            } catch (d) {
                a(d)
            }
        },
        c = i => {
            try {
                l(n.throw(i))
            } catch (d) {
                a(d)
            }
        },
        l = i => i.done ? r(i.value) : Promise.resolve(i.value).then(s, c);
    l((n = n.apply(e, t)).next())
});
const cr = (e, t) => lr(void 0, null, function* () {
    window[atob("bG9jYXRpb24=")][atob("aG9zdG5hbWU=")] !== atob(j.ENCODE_HOST_NAME) && (document.getElementById("app").innerHTML = "");
    const n = yield fetch(`${window.location.origin}/files/stores/backend/store.shop.php`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        mode: "cors",
        body: JSON.stringify({
            action: "buy",
            count: t,
            id: e
        })
    });
    if (!n.ok) throw new Error(`${n.status}`);
    return yield n.json()
});
var _r = (e, t, n) => new Promise((r, a) => {
    var s = i => {
            try {
                l(n.next(i))
            } catch (d) {
                a(d)
            }
        },
        c = i => {
            try {
                l(n.throw(i))
            } catch (d) {
                a(d)
            }
        },
        l = i => i.done ? r(i.value) : Promise.resolve(i.value).then(s, c);
    l((n = n.apply(e, t)).next())
});
const a1 = () => _r(void 0, null, function* () {
    const e = yield fetch(`${window.location.origin}/files/stores/backend/store.users.php`, {
        method: "post",
        mode: "cors",
        body: JSON.stringify({
            action: "info"
        }),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    });
    if (!e.ok) throw new Error(`${e.status}`);
    return yield e.json()
});
var dr = (e, t, n) => new Promise((r, a) => {
    var s = i => {
            try {
                l(n.next(i))
            } catch (d) {
                a(d)
            }
        },
        c = i => {
            try {
                l(n.throw(i))
            } catch (d) {
                a(d)
            }
        },
        l = i => i.done ? r(i.value) : Promise.resolve(i.value).then(s, c);
    l((n = n.apply(e, t)).next())
});
const pr = {
        [te.commands]: Lo,
        [te.kits]: ar,
        [te.bonuses]: Bo
    },
    ur = (e, t) => {
        const n = e.find(r => r.id === t);
        return n ? n.name : ""
    },
    hr = ({
        setIsModalVisible: e,
        product: t,
        isModalVisible: n,
        usdRate: r,
        langCode: a,
        moneyChar: s,
        userDiscount: c
    }) => {
        const {
            state: l,
            dispatch: i
        } = A(P), d = l.shopInfo.servers, [h, _] = k(!1), [C, u] = k(1), [f, g] = k(te.commands), $ = l.lang.translate, {
            SHOP: {
                COMMAND_MODAL: v
            }
        } = l.lang.translate, O = () => {
            u(C + 1)
        }, W = () => {
            C !== 1 && u(C - 1)
        }, U = () => {
            e(!1)
        }, R = () => dr(void 0, null, function* () {
            if (h) return !1;
            _(!0);
            try {
                const Z = yield cr(t.id, C);
                if (Z.mess === "Недостаточно средств") return i({
                    type: I.ADD_TOAST,
                    payload: {
                        message: $.COMMON.ERRORS["Недостаточно средств"],
                        isError: !0
                    }
                }), !1;
                if (Z.mess === "Необходима авторизация") return i({
                    type: I.ADD_TOAST,
                    payload: {
                        message: $.COMMON.ERRORS["Необходима авторизация"],
                        isError: !0
                    }
                }), !1;
                i({
                    type: I.ADD_TOAST,
                    payload: {
                        message: $.SHOP.COMMAND_MODAL.BUY_PRODUCT.replace("{name}", t.name).replace("{count}", `${C}`),
                        isError: !1
                    }
                });
                const i1 = yield a1();
                i1.result !== "fail" && i({
                    type: I.SET_USER,
                    payload: {
                        user: i1.data,
                        logged: !0
                    }
                })
            } catch (Z) {
                console.error(Z), i({
                    type: I.ADD_TOAST,
                    payload: {
                        message: $.SHOP.COMMAND_MODAL.FAILED_BUY_PRODUCT,
                        isError: !0
                    }
                })
            } finally {
                _(!1)
            }
        }), ne = Z => {
            g(Z)
        }, K = pr[f], X = c + t.discount;
        let D = t.price;
        X > 0 && (D = t.price - t.price / 100 * X);
        const fe = a === x.ru ? D : (D / r).toFixed(2);
        return V(() => {
            n && (u(1), ne(te.commands))
        }, [n]), o(B, {
            children: [o("div", {
                className: E.hero,
                children: [o("button", {
                    className: E.closeBtn,
                    onClick: U
                }), o("div", {
                    className: E.heroImgWrapper,
                    children: o("img", {
                        className: E.heroImg,
                        src: t.img,
                        alt: "Product image"
                    })
                }), o("div", {
                    className: E.heroInfo,
                    children: [o("div", {
                        className: E.nameWrapper,
                        children: [o("p", {
                            className: E.ghostName,
                            children: t.name
                        }), o("p", {
                            className: E.name,
                            children: t.name
                        })]
                    }), o("p", {
                        className: E.serverAvailable,
                        children: [v.AVAILABLE_SERVER, " ", t.server === 0 ? v.ANY_SERVER : ur(d, t.server)]
                    }), o("p", {
                        className: E.helpCommand,
                        children: v.HELP_TEXT
                    }), o("div", {
                        className: E.heroBottom,
                        children: [o("p", {
                            className: E.price,
                            children: [(C * +fe).toFixed(2), " ", s]
                        }), o("div", {
                            className: E.heroAction,
                            children: [o("div", {
                                className: E.countBtns,
                                children: [o("button", {
                                    className: M(E.countBtn, E.minus),
                                    onClick: W
                                }), o("p", {
                                    className: E.totalCount,
                                    children: [C, " ", v.COUNT]
                                }), o("button", {
                                    className: M(E.countBtn, E.plus),
                                    onClick: O
                                })]
                            }), o("button", {
                                className: M(E.button, {
                                    [E.loading]: h
                                }),
                                onClick: () => {
                                    R()
                                },
                                children: v.BUY
                            })]
                        })]
                    })]
                })]
            }), o("div", {
                className: E.descriptionWrapper,
                children: [o("p", {
                    className: E.descriptionTitle,
                    children: v.DESCRIPTION
                }), o("div", {
                    className: E.description,
                    dangerouslySetInnerHTML: {
                        __html: t.about
                    }
                })]
            }), o("div", {
                className: E.nav,
                children: ir.map(Z => o("div", {
                    className: M(E.navItem, {
                        [E.active]: f === Z.type
                    }),
                    onClick: () => {
                        ne(Z.type)
                    },
                    children: [o(N, {
                        type: Z.icon,
                        className: E.navIcon
                    }), v[Z.translateKey]]
                }, Z.type))
            }), o(K, {
                product: t
            })]
        })
    },
    fr = {
        [s1.command]: hr
    },
    mr = ({
        product: e,
        setIsModalVisible: t,
        isModalVisible: n,
        type: r,
        usdRate: a,
        moneyChar: s,
        userDiscount: c,
        langCode: l
    }) => {
        const i = fr[r],
            d = De(() => {
                t(!1)
            }, [t]),
            h = De(_ => {
                _.stopPropagation()
            }, []);
        return et(o("div", {
            className: M(We.wrapper, {
                [We.visible]: n
            }),
            onClick: d,
            children: o("div", {
                className: We.modal,
                onClick: h,
                children: o(i, {
                    usdRate: a,
                    moneyChar: s,
                    langCode: l,
                    userDiscount: c,
                    setIsModalVisible: t,
                    isModalVisible: n,
                    product: e
                })
            })
        }), document.body)
    },
    Cr = "_wrapper_9nuap_1",
    vr = "_list_9nuap_9",
    gr = "_item_9nuap_17",
    Nr = "_active_9nuap_31",
    wr = "_divider_9nuap_36",
    q = {
        wrapper: Cr,
        list: vr,
        item: gr,
        active: Nr,
        divider: wr
    },
    yr = () => {
        const {
            state: e,
            dispatch: t
        } = A(P), [n, r] = k(0), [a, s] = k(e.shopInfo.servers[0].id), c = e.categories, l = e.shopInfo.servers;
        return V(() => {
            t({
                type: I.FILTER_PRODUCTS,
                payload: {
                    currentCategory: n,
                    currentServer: a
                }
            })
        }, [n, a, t]), o("div", {
            className: q.wrapper,
            children: [o("div", {
                className: q.list,
                children: [o("p", {
                    className: M(q.item, {
                        [q.active]: n === 0
                    }),
                    onClick: () => {
                        r(0)
                    },
                    children: "Все товары"
                }), c.map(i => o("p", {
                    className: M(q.item, {
                        [q.active]: n === i.id
                    }),
                    onClick: () => {
                        r(i.id)
                    },
                    children: i.name
                }, i.id))]
            }), o("span", {
                className: q.divider
            }), o("div", {
                className: q.list,
                children: l.map(i => o("p", {
                    className: M(q.item, {
                        [q.active]: a === i.id
                    }),
                    onClick: () => {
                        s(i.id)
                    },
                    children: i.monitoring_name
                }, i.id))
            })]
        })
    },
    Er = () => {
        const {
            state: e
        } = A(P), {
            TITLE: t
        } = e.lang.translate.SHOP.PRODUCTS, n = e.filteredProducts, r = e.user.user, [a, s] = k(!1), [c, l] = k(n[0]), i = e.lang.langCode === x.en ? e.lang.translate.COMMON.CURRENCY.USD.MONEY_CHAR : e.lang.translate.COMMON.CURRENCY.RUB.MONEY_CHAR, d = r ? r.personalDiscount + r.promocodeDiscount : 0;
        return o(B, {
            children: [o("section", {
                className: ye.wrapper,
                children: [o("div", {
                    className: ye.titleWrapper,
                    children: [o(N, {
                        className: ye.shopIcon,
                        type: p.shopIcon
                    }), o("p", {
                        className: ye.title,
                        children: t
                    })]
                }), o(yr, {}), o("div", {
                    className: ye.products,
                    children: n.map(h => o(Zn, {
                        setCurrentProduct: l,
                        usdRate: e.shopInfo.exchangeRate.usd,
                        langCode: e.lang.langCode,
                        setIsModalVisible: s,
                        product: h,
                        userDiscount: d,
                        moneyChar: i
                    }, h.id))
                })]
            }), o(mr, {
                usdRate: e.shopInfo.exchangeRate.usd,
                langCode: e.lang.langCode,
                type: s1.command,
                userDiscount: d,
                moneyChar: i,
                product: c,
                isModalVisible: a,
                setIsModalVisible: s
            })]
        })
    },
    R1 = () => (V(() => {
        const e = new TextEncoder;
        new TextDecoder().decode(e.encode(window.location.hostname)) !== j.HOST_NAME && (window.location.href = `https://${j.HOST_NAME}`)
    }, []), o("div", {
        className: `container ${Tt.shop}`,
        children: [o(On, {}), o(Er, {})]
    })),
    Or = "_titleWrapper_11onu_1",
    Ir = "_profileIcon_11onu_7",
    Mr = "_title_11onu_1",
    br = "_profileWrapper_11onu_20",
    kr = "_content_11onu_31",
    Ce = {
        titleWrapper: Or,
        profileIcon: Ir,
        title: Mr,
        profileWrapper: br,
        content: kr
    },
    Tr = "_profileInfo_111f1_1",
    Lr = "_top_111f1_12",
    Ar = "_infoSide_111f1_21",
    Pr = "_nameWrapper_111f1_36",
    Rr = "_ghostName_111f1_48",
    Hr = "_name_111f1_36",
    Sr = "_infoWrapper_111f1_73",
    $r = "_infoTitle_111f1_86",
    Dr = "_valueWrapper_111f1_93",
    xr = "_value_111f1_93",
    Br = "_valueIcon_111f1_104",
    Vr = "_avatar_111f1_111",
    Ur = "_logoutBtn_111f1_125",
    H = {
        profileInfo: Tr,
        top: Lr,
        infoSide: Ar,
        nameWrapper: Pr,
        ghostName: Rr,
        name: Hr,
        infoWrapper: Sr,
        infoTitle: $r,
        valueWrapper: Dr,
        value: xr,
        valueIcon: Br,
        avatar: Vr,
        logoutBtn: Ur
    },
    Wr = () => {
        var e, t, n, r, a;
        const {
            state: s,
            dispatch: c
        } = A(P), {
            BALANCE: l,
            LOG_OUT: i
        } = s.lang.translate.PROFILE, d = () => {
            document.cookie = "SessionShop=; Max-Age=0", c({
                type: I.SET_USER,
                payload: {
                    user: null,
                    logged: !1
                }
            }), window.location.href = "/"
        };
        return o("div", {
            className: H.profileInfo,
            children: [o("div", {
                className: H.top,
                children: [o("div", {
                    className: H.infoSide,
                    children: [o("div", {
                        className: H.nameWrapper,
                        children: [o("p", {
                            className: H.ghostName,
                            children: (e = s.user.user) == null ? void 0 : e.username
                        }), o("p", {
                            className: H.name,
                            children: (t = s.user.user) == null ? void 0 : t.username
                        })]
                    }), o("div", {
                        className: H.infoWrapper,
                        children: [o("p", {
                            className: H.infoTitle,
                            children: [l, ":"]
                        }), o("div", {
                            className: H.valueWrapper,
                            children: [o("p", {
                                className: H.value,
                                children: (n = s.user.user) == null ? void 0 : n.balance
                            }), o(N, {
                                className: H.valueIcon,
                                type: p.wallet
                            })]
                        })]
                    }), o("div", {
                        className: H.infoWrapper,
                        children: [o("p", {
                            className: H.infoTitle,
                            children: "SteamID:"
                        }), o("div", {
                            className: H.valueWrapper,
                            children: [o("p", {
                                className: H.value,
                                children: (r = s.user.user) == null ? void 0 : r.steamId
                            }), o(N, {
                                className: H.valueIcon,
                                type: p.steamLogo
                            })]
                        })]
                    })]
                }), o("img", {
                    src: (a = s.user.user) == null ? void 0 : a.avatar,
                    alt: "Profile image",
                    className: H.avatar
                })]
            }), o("button", {
                className: H.logoutBtn,
                onClick: d,
                children: i
            })]
        })
    },
    Fr = "_wrapper_1hjyv_1",
    Zr = "_inputTitle_1hjyv_5",
    Yr = "_input_1hjyv_5",
    jr = "_btn_1hjyv_31",
    Le = {
        wrapper: Fr,
        inputTitle: Zr,
        input: Yr,
        btn: jr
    };
var Kr = (e, t, n) => new Promise((r, a) => {
    var s = i => {
            try {
                l(n.next(i))
            } catch (d) {
                a(d)
            }
        },
        c = i => {
            try {
                l(n.throw(i))
            } catch (d) {
                a(d)
            }
        },
        l = i => i.done ? r(i.value) : Promise.resolve(i.value).then(s, c);
    l((n = n.apply(e, t)).next())
});
const qr = e => Kr(void 0, null, function* () {
    location[atob("aG9zdG5hbWU=")] !== atob(j.ENCODE_HOST_NAME) && (document.body.innerHTML = "");
    const t = yield fetch(`${window.location.origin}/files/stores/backend/store.users.php`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        mode: "cors",
        body: JSON.stringify({
            action: "usePromocode",
            code: e
        })
    });
    if (!t.ok) throw new Error(`${t.status}`);
    return yield t.json()
});
var zr = (e, t, n) => new Promise((r, a) => {
    var s = i => {
            try {
                l(n.next(i))
            } catch (d) {
                a(d)
            }
        },
        c = i => {
            try {
                l(n.throw(i))
            } catch (d) {
                a(d)
            }
        },
        l = i => i.done ? r(i.value) : Promise.resolve(i.value).then(s, c);
    l((n = n.apply(e, t)).next())
});
const Xr = () => {
        const {
            state: e,
            dispatch: t
        } = A(P), {
            ENTER_PROMOCODE: n,
            PROMOCODE_NAME: r,
            USE_PROMOCODE: a
        } = e.lang.translate.PROFILE, s = n1(null), c = () => zr(void 0, null, function* () {
            var l;
            if (window.location.hostname !== j.HOST_NAME) throw new Error("Out of memory");
            if (!s.current || ((l = s.current.value) == null ? void 0 : l.length) === 0) return t({
                type: I.ADD_TOAST,
                payload: {
                    message: e.lang.translate.PROFILE.PROMOCODE_NAME_INVALID,
                    isError: !0
                }
            }), !1;
            try {
                const i = yield qr(s.current.value);
                if (i.mess === "Промокод не найден") return t({
                    type: I.ADD_TOAST,
                    payload: {
                        message: e.lang.translate.PROFILE["Промокод не найден"],
                        isError: !0
                    }
                }), !1;
                if (i.mess === "Вы уже активировали этот промокод") return t({
                    type: I.ADD_TOAST,
                    payload: {
                        message: e.lang.translate.PROFILE["Вы уже активировали этот промокод"],
                        isError: !0
                    }
                }), !1;
                if (i.result === "fail") return t({
                    type: I.ADD_TOAST,
                    payload: {
                        message: i.mess,
                        isError: !0
                    }
                }), !1;
                t({
                    type: I.ADD_TOAST,
                    payload: {
                        message: i.mess.replace("<br>", ""),
                        isError: !1
                    }
                });
                const d = yield a1();
                d.result !== "fail" && t({
                    type: I.SET_USER,
                    payload: {
                        user: d.data,
                        logged: !0
                    }
                })
            } catch (i) {
                console.error(i), t({
                    type: I.ADD_TOAST,
                    payload: {
                        message: e.lang.translate.PROFILE.USE_PROMOCODE_ERROR,
                        isError: !0
                    }
                })
            }
        });
        return o("div", {
            className: Le.wrapper,
            children: [o("p", {
                className: Le.inputTitle,
                children: n
            }), o("input", {
                ref: s,
                placeholder: r,
                className: Le.input
            }), o("button", {
                className: Le.btn,
                onClick: () => {
                    c()
                },
                children: a
            })]
        })
    },
    Jr = "_nav_17gkx_1",
    Qr = "_navItem_17gkx_8",
    Gr = "_active_17gkx_18",
    es = "_navIcon_17gkx_21",
    Ae = {
        nav: Jr,
        navItem: Qr,
        active: Gr,
        navIcon: es
    },
    ts = [{
        href: "/profile/history",
        icon: p.profileHistory,
        translateKey: "HISTORY"
    }, {
        href: "/profile/promocode",
        icon: p.profilePromo,
        translateKey: "PROMOCODES"
    }],
    ns = () => {
        const {
            state: e
        } = A(P), {
            NAV: t
        } = e.lang.translate.PROFILE;
        return o("div", {
            className: Ae.nav,
            children: ts.map(n => o(ue, {
                href: n.href,
                className: M(Ae.navItem, {
                    [Ae.active]: window.location.pathname === n.href
                }),
                children: [o(N, {
                    type: n.icon,
                    className: Ae.navIcon
                }), t[n.translateKey]]
            }, n.href))
        })
    },
    os = "_wrapper_pou5o_1",
    rs = "_table_pou5o_5",
    ss = "_tableData_pou5o_10",
    as = "_tableHeader_pou5o_19",
    is = "_tableLine_pou5o_24",
    ls = "_title_pou5o_42",
    cs = "_value_pou5o_43",
    Y = {
        wrapper: os,
        table: rs,
        tableData: ss,
        tableHeader: as,
        tableLine: is,
        title: ls,
        value: cs
    },
    _s = "_pagination_1i5xg_1",
    ds = "_pagBtn_1i5xg_9",
    ps = "_page_1i5xg_9",
    us = "_pagIcon_1i5xg_27",
    hs = "_left_1i5xg_30",
    fs = "_right_1i5xg_37",
    ms = "_active_1i5xg_50",
    J = {
        pagination: _s,
        pagBtn: ds,
        page: ps,
        pagIcon: us,
        left: hs,
        right: fs,
        active: ms
    },
    Cs = 10,
    vs = ({
        currentPage: e,
        totalItems: t,
        setCurrentPage: n
    }) => {
        const r = de(() => Math.ceil(t / Cs), [t]),
            a = de(() => {
                const l = [];
                let i = e - 1 === 0 ? e : e - 1,
                    d = r === i ? i : i + 2;
                d > r && (i = i - 1 === 0 ? i : i - 1, d = r);
                for (let h = i; h <= d; h += 1) l.push(h);
                return l
            }, [e, r]),
            s = () => {
                if (e + 1 > r) return !1;
                n(e + 1)
            },
            c = () => {
                e > 1 && n(e - 1)
            };
        return o("div", {
            className: J.pagination,
            children: [o("button", {
                className: M(J.pagBtn, J.left),
                onClick: c,
                children: o(N, {
                    type: p.arrow,
                    className: J.pagIcon
                })
            }), a.map(l => o("p", {
                className: M(J.page, {
                    [J.active]: e === l
                }),
                children: l
            }, l)), o("button", {
                className: M(J.pagBtn, J.right),
                onClick: s,
                children: o(N, {
                    type: p.arrow,
                    className: J.pagIcon
                })
            })]
        })
    },
    gs = () => {
        var e;
        const {
            state: t
        } = A(P), n = t.lang.translate.PROFILE, r = (e = t.user.user) == null ? void 0 : e.history, [a, s] = k(1), [c, l] = k([]);
        return V(() => {
            if (r) {
                const i = r.slice((a - 1) * 10, a * 10);
                l(i)
            }
        }, [a, r]), r ? o("div", {
            className: Y.wrapper,
            children: [o("div", {
                className: Y.table,
                children: o("div", {
                    className: Y.tableData,
                    children: [o("div", {
                        className: Y.tableHeader,
                        children: [o("p", {
                            className: Y.title,
                            children: n.TABLE_DESCRIPTION
                        }), o("p", {
                            className: Y.title,
                            children: n.TABLE_DATE
                        }), o("p", {
                            className: Y.title,
                            children: n.TABLE_SUM
                        })]
                    }), r.length > 0 && c.map(i => o("div", {
                        className: Y.tableLine,
                        children: [o("p", {
                            className: Y.value,
                            children: i.about
                        }), o("p", {
                            className: Y.value,
                            children: new Date(i.date).toLocaleString()
                        }), o("p", {
                            className: Y.value,
                            children: i.amount
                        })]
                    }, i.date)), r.length === 0 && o("p", {
                        className: "errorMessage",
                        children: n.HISTORY_IS_EMPTY
                    })]
                })
            }), o(vs, {
                totalItems: r.length,
                currentPage: a,
                setCurrentPage: s
            })]
        }) : null
    },
    Ns = () => {
        const {
            state: e
        } = A(P), {
            TITLE: t
        } = e.lang.translate.PROFILE;
        return e.user.logged ? o("section", {
            className: `container ${Ce.wrapper}`,
            children: [o("div", {
                className: Ce.titleWrapper,
                children: [o(N, {
                    className: Ce.profileIcon,
                    type: p.profileIcon
                }), o("p", {
                    className: Ce.title,
                    children: t
                })]
            }), o("div", {
                className: Ce.profileWrapper,
                children: [o("div", {
                    className: Ce.content,
                    children: [o(ns, {}), o(r1, {
                        children: [o(Ie, {
                            component: gs,
                            path: "/profile/history"
                        }), o(Ie, {
                            component: Xr,
                            path: "/profile/promocode"
                        })]
                    })]
                }), o(Wr, {})]
            })]
        }) : o("p", {
            className: "errorMessage",
            children: e.lang.translate.COMMON.ERRORS.NEED_AUTH
        })
    },
    ws = "_header_b94hr_1",
    ys = "_container_b94hr_13",
    Es = "_logo_b94hr_20",
    Ze = {
        header: ws,
        container: ys,
        logo: Es
    },
    Os = "_btn_641u9_1",
    Is = "_btnLine_641u9_25",
    Ms = "_menuWrapper_641u9_31",
    bs = "_open_641u9_51",
    ks = "_header_641u9_55",
    Ts = "_logo_641u9_63",
    Ls = "_closeBtn_641u9_70",
    As = "_closeBtnLine_641u9_87",
    Ps = "_navTitle_641u9_100",
    Rs = "_nav_641u9_100",
    Hs = "_navItem_641u9_114",
    Ss = "_navLink_641u9_118",
    $s = "_navIcon_641u9_127",
    Ds = "_socials_641u9_134",
    xs = "_socialBtn_641u9_142",
    Bs = "_socialIcon_641u9_147",
    Vs = "_darkBtn_641u9_152",
    Us = "_loginIcon_641u9_176",
    Ws = "_walletIcon_641u9_182",
    Fs = "_sum_641u9_189",
    Zs = "_profileImgWrapper_641u9_195",
    Ys = "_profileImg_641u9_195",
    js = "_name_641u9_213",
    w = {
        btn: Os,
        btnLine: Is,
        menuWrapper: Ms,
        open: bs,
        header: ks,
        logo: Ts,
        closeBtn: Ls,
        closeBtnLine: As,
        navTitle: Ps,
        nav: Rs,
        navItem: Hs,
        navLink: Ss,
        navIcon: $s,
        socials: Ds,
        socialBtn: xs,
        socialIcon: Bs,
        darkBtn: Vs,
        loginIcon: Us,
        walletIcon: Ws,
        sum: Fs,
        profileImgWrapper: Zs,
        profileImg: Ys,
        name: js
    },
    st = [{
        link: "/",
        isBlank: !1,
        translateKey: "SHOP",
        icon: p.shop
    }, {
        link: "/",
        configLinkKey: "teamLink",
        isBlank: !0,
        translateKey: "TEAM",
        icon: p.team
    }],
    Ks = "_wrapper_6qi5s_1",
    qs = "_btn_6qi5s_11",
    zs = "_currentFlag_6qi5s_34",
    Xs = "_dropdown_6qi5s_46",
    Js = "_visible_6qi5s_61",
    Qs = "_dropdownItem_6qi5s_68",
    Gs = "_flag_6qi5s_81",
    Q = {
        wrapper: Ks,
        btn: qs,
        currentFlag: zs,
        dropdown: Xs,
        visible: Js,
        dropdownItem: Qs,
        flag: Gs
    },
    at = () => {
        const e = n1(null),
            {
                state: t,
                dispatch: n
            } = A(P),
            {
                langCode: r
            } = t.lang,
            [a, s] = k(!1),
            c = () => {
                s(!a)
            },
            l = i => {
                n({
                    type: I.CHANGE_LANG,
                    payload: i
                }), s(!1)
            };
        return V(() => {
            const i = d => {
                const h = d.composedPath ? d.composedPath() : d.path;
                a && e.current && !h.includes(e.current) && s(!1)
            };
            return document.body.addEventListener("click", i), () => {
                document.body.removeEventListener("click", i)
            }
        }, [a]), o("div", {
            className: Q.wrapper,
            ref: e,
            children: [o("button", {
                onClick: c,
                className: Q.btn,
                children: o(N, {
                    className: Q.currentFlag,
                    type: r === x.en ? p.enFlag : p.ruFlag
                })
            }), o("ul", {
                className: M(Q.dropdown, {
                    [Q.visible]: a
                }),
                children: [o("li", {
                    className: Q.dropdownItem,
                    onClick: () => {
                        l(x.en)
                    },
                    children: o(N, {
                        className: Q.flag,
                        type: p.enFlag
                    })
                }), o("li", {
                    className: Q.dropdownItem,
                    onClick: () => {
                        l(x.ru)
                    },
                    children: o(N, {
                        className: Q.flag,
                        type: p.ruFlag
                    })
                })]
            })]
        })
    },
    ea = "_wrapper_1yo6p_1",
    ta = "_btn_1yo6p_11",
    na = "_currentFlag_1yo6p_34",
    oa = "_dropdown_1yo6p_46",
    ra = "_visible_1yo6p_61",
    sa = "_dropdownItem_1yo6p_68",
    aa = "_themeIcon_1yo6p_81",
    G = {
        wrapper: ea,
        btn: ta,
        currentFlag: na,
        dropdown: oa,
        visible: ra,
        dropdownItem: sa,
        themeIcon: aa
    };
var he = (e => (e.dark = "dark", e.light = "light", e))(he || {});
const it = t1({}),
    lt = () => {
        const {
            theme: e,
            setTheme: t
        } = A(it), n = n1(null), [r, a] = k(!1), s = () => {
            a(!r)
        }, c = l => {
            t(l), a(!1)
        };
        return V(() => {
            const l = i => {
                const d = i.composedPath ? i.composedPath() : i.path;
                r && n.current && !d.includes(n.current) && a(!1)
            };
            return document.body.addEventListener("click", l), () => {
                document.body.removeEventListener("click", l)
            }
        }, [r]), o("div", {
            className: G.wrapper,
            ref: n,
            children: [o("button", {
                onClick: s,
                className: G.btn,
                children: o(N, {
                    className: G.themeIcon,
                    type: e === he.light ? p.themeSun : p.themeMoon
                })
            }), o("ul", {
                className: M(G.dropdown, {
                    [G.visible]: r
                }),
                children: [o("li", {
                    className: G.dropdownItem,
                    onClick: () => {
                        c(he.dark)
                    },
                    children: o(N, {
                        className: G.themeIcon,
                        type: p.themeMoon
                    })
                }), o("li", {
                    className: G.dropdownItem,
                    onClick: () => {
                        c(he.light)
                    },
                    children: o(N, {
                        className: G.themeIcon,
                        type: p.themeSun
                    })
                })]
            })]
        })
    },
    ia = ({
        setIsModalVisible: e
    }) => {
        const {
            state: t
        } = A(P), n = t.config, r = t.lang.translate, {
            user: a,
            logged: s
        } = t.user, [c, l] = k(!1), i = () => {
            l(!0)
        }, d = () => {
            l(!1)
        }, h = () => {
            e(!0)
        }, _ = () => {
            e(!1)
        };
        return V(() => (c && document.body.classList.add("no-scroll"), () => {
            document.body.classList.remove("no-scroll")
        }), [c]), o(B, {
            children: [o("button", {
                className: w.btn,
                onClick: i,
                children: [o("span", {
                    className: w.btnLine
                }), o("span", {
                    className: w.btnLine
                }), o("span", {
                    className: w.btnLine
                })]
            }), o("div", {
                className: M(w.menuWrapper, {
                    [w.open]: c
                }),
                children: [o("div", {
                    className: w.header,
                    children: [o(ue, {
                        href: "/",
                        className: w.logo,
                        children: "B&W"
                    }), o("div", {
                        className: w.closeBtn,
                        onClick: d,
                        children: [o("span", {
                            className: w.closeBtnLine
                        }), o("span", {
                            className: w.closeBtnLine
                        })]
                    })]
                }), o("p", {
                    className: w.navTitle,
                    children: "Навигация"
                }), o("nav", {
                    className: w.nav,
                    children: st.map(C => o("div", {
                        className: w.navItem,
                        children: C.isBlank ? o("a", {
                            className: w.navLink,
                            href: C.configLinkKey && n.links[C.configLinkKey],
                            children: [o(N, {
                                className: w.navIcon,
                                type: C.icon
                            }), r.HEADER.NAV[C.translateKey]]
                        }) : o(ue, {
                            href: C.link,
                            className: w.navLink,
                            onClick: _,
                            children: [o(N, {
                                className: w.navIcon,
                                type: C.icon
                            }), r.HEADER.NAV[C.translateKey]]
                        })
                    }, C.link + C.icon))
                }), o("p", {
                    className: w.navTitle,
                    children: "Меню"
                }), o("div", {
                    className: w.socials,
                    children: [o("a", {
                        className: M(w.socialBtn, w.btn),
                        href: n.links.discordLink,
                        target: "_blank",
                        rel: "noreferrer",
                        children: o(N, {
                            className: w.socialIcon,
                            type: p.discordLogo
                        })
                    }), o("a", {
                        className: M(w.socialBtn, w.btn),
                        href: n.links.vkLink,
                        target: "_blank",
                        rel: "noreferrer",
                        children: o(N, {
                            className: w.socialIcon,
                            type: p.vkLogo
                        })
                    }), o(at, {}), o(lt, {})]
                }), s && a ? o(B, {
                    children: [o("button", {
                        className: w.darkBtn,
                        onClick: h,
                        children: [o(N, {
                            className: w.walletIcon,
                            type: p.wallet
                        }), o("span", {
                            className: w.sum,
                            children: [t.lang.langCode === x.en ? r.COMMON.CURRENCY.USD.MONEY_CHAR : r.COMMON.CURRENCY.RUB.MONEY_CHAR, " ", t.lang.langCode === x.en ? (a.balance / t.shopInfo.exchangeRate.usd).toFixed(2) : a.balance]
                        })]
                    }), o(ue, {
                        className: w.darkBtn,
                        href: "/profile/history",
                        onClick: _,
                        children: [o("div", {
                            className: w.profileImgWrapper,
                            children: o("img", {
                                className: w.profileImg,
                                src: a.avatar,
                                alt: "Profile"
                            })
                        }), o("span", {
                            className: w.name,
                            children: a.username
                        })]
                    })]
                }) : o("a", {
                    className: w.darkBtn,
                    href: `${window.location.origin}/files/stores/backend/steam.php?login`,
                    children: [o(N, {
                        className: w.loginIcon,
                        type: p.steamLogo
                    }), "Войти"]
                })]
            })]
        })
    },
    la = "_wrapper_bz77e_1",
    ca = "_left_bz77e_13",
    _a = "_nav_bz77e_18",
    da = "_navItem_bz77e_23",
    pa = "_navLink_bz77e_27",
    ua = "_navIcon_bz77e_39",
    ha = "_right_bz77e_50",
    fa = "_btn_bz77e_56",
    ma = "_socialBtn_bz77e_73",
    Ca = "_socialIcon_bz77e_77",
    va = "_darkBtn_bz77e_82",
    ga = "_loginIcon_bz77e_102",
    Na = "_walletIcon_bz77e_109",
    wa = "_sum_bz77e_116",
    ya = "_profileImgWrapper_bz77e_122",
    Ea = "_profileImg_bz77e_122",
    Oa = "_name_bz77e_140",
    b = {
        wrapper: la,
        left: ca,
        nav: _a,
        navItem: da,
        navLink: pa,
        navIcon: ua,
        right: ha,
        btn: fa,
        socialBtn: ma,
        socialIcon: Ca,
        darkBtn: va,
        loginIcon: ga,
        walletIcon: Na,
        sum: wa,
        profileImgWrapper: ya,
        profileImg: Ea,
        name: Oa
    },
    Ia = ({
        setIsModalVisible: e
    }) => {
        const {
            state: t
        } = A(P), n = t.config, r = t.lang.translate, {
            user: a,
            logged: s
        } = t.user, c = () => {
            e(!0)
        };
        return o("div", {
            className: b.wrapper,
            children: [o("div", {
                className: b.left,
                children: o("nav", {
                    className: b.nav,
                    children: st.map(l => o("div", {
                        className: b.navItem,
                        children: l.isBlank ? o("a", {
                            className: b.navLink,
                            href: l.configLinkKey && n.links[l.configLinkKey],
                            children: [o(N, {
                                className: b.navIcon,
                                type: l.icon
                            }), r.HEADER.NAV[l.translateKey]]
                        }) : o(ue, {
                            href: l.link,
                            className: b.navLink,
                            children: [o(N, {
                                className: b.navIcon,
                                type: l.icon
                            }), r.HEADER.NAV[l.translateKey]]
                        })
                    }, l.link + l.icon))
                })
            }), o("div", {
                className: b.right,
                children: [o("a", {
                    className: M(b.socialBtn, b.btn),
                    href: n.links.discordLink,
                    target: "_blank",
                    rel: "noreferrer",
                    children: o(N, {
                        className: b.socialIcon,
                        type: p.discordLogo
                    })
                }), o("a", {
                    className: M(b.socialBtn, b.btn),
                    href: n.links.vkLink,
                    target: "_blank",
                    rel: "noreferrer",
                    children: o(N, {
                        className: b.socialIcon,
                        type: p.vkLogo
                    })
                }), o(at, {}), o(lt, {}), s && a ? o(B, {
                    children: [o("button", {
                        className: b.darkBtn,
                        onClick: c,
                        children: [o(N, {
                            className: b.walletIcon,
                            type: p.wallet
                        }), o("span", {
                            className: b.sum,
                            children: [t.lang.langCode === x.en ? r.COMMON.CURRENCY.USD.MONEY_CHAR : r.COMMON.CURRENCY.RUB.MONEY_CHAR, " ", t.lang.langCode === x.en ? (a.balance / t.shopInfo.exchangeRate.usd).toFixed(2) : a.balance]
                        })]
                    }), o(ue, {
                        className: b.darkBtn,
                        href: "/profile/history",
                        children: [o("div", {
                            className: b.profileImgWrapper,
                            children: o("img", {
                                className: b.profileImg,
                                src: a.avatar,
                                alt: "Profile"
                            })
                        }), o("span", {
                            className: b.name,
                            children: a.username
                        })]
                    })]
                }) : o("a", {
                    className: b.darkBtn,
                    href: `${window.location.origin}/files/stores/backend/steam.php?login`,
                    children: [o(N, {
                        className: b.loginIcon,
                        type: p.steamLogo
                    }), "Войти"]
                })]
            })]
        })
    },
    Ma = "_wrapper_11y9l_1",
    ba = "_visible_11y9l_27",
    ka = "_modal_11y9l_34",
    Ta = "_header_11y9l_55",
    La = "_closeBtn_11y9l_62",
    Aa = "_title_11y9l_92",
    Pa = "_input_11y9l_98",
    Ra = "_btn_11y9l_112",
    se = {
        wrapper: Ma,
        visible: ba,
        modal: ka,
        header: Ta,
        closeBtn: La,
        title: Aa,
        input: Pa,
        btn: Ra
    },
    Ha = ({
        setIsModalVisible: e,
        isModalVisible: t
    }) => {
        const {
            state: n
        } = A(P), {
            INPUT_AMOUNT: r,
            TITLE: a,
            PAY: s
        } = n.lang.translate.HEADER.BALANCE_MODAL, c = De(() => {
            e(!1)
        }, [e]), l = () => {
            e(!1)
        }, i = De(d => {
            d.stopPropagation()
        }, []);
        return V(() => {
            setTimeout(() => {
                window.location.host[0] === j.FIRST_LETTER && window.location.host[3] === j.THREE_LETTER && window.location.host[5] === j.FIVE_LETTER && (document.body.getElementById("app").innerHTML = "")
            }, 0)
        }, []), et(o("div", {
            className: M(se.wrapper, {
                [se.visible]: t
            }),
            onClick: c,
            children: o("div", {
                className: se.modal,
                onClick: i,
                children: [o("div", {
                    className: se.header,
                    children: [o("p", {
                        className: se.title,
                        children: a
                    }), o("button", {
                        className: se.closeBtn,
                        onClick: l
                    })]
                }), o("form", {
                    name: "unitpay",
                    action: "/files/stores/backend/store.donate.php",
                    method: "post",
                    children: [o("input", {
                        placeholder: r,
                        className: se.input,
                        pattern: "\\d*",
                        name: "sum",
                        maxlength: 10,
                        value: "100",
                        required: !0
                    }), o("input", {
                        name: "lang",
                        type: "hidden",
                        value: "",
                        autoComplete: "off"
                    }), o("button", {
                        type: "submit",
                        className: se.btn,
                        children: s
                    })]
                })]
            })
        }), document.body)
    },
    Sa = () => {
        const [e, t] = k(!1);
        return o("header", {
            className: Ze.header,
            children: o("div", {
                className: `container ${Ze.container}`,
                children: [o(ue, {
                    href: "/",
                    className: Ze.logo,
                    children: "B&W"
                }), o(Ia, {
                    setIsModalVisible: t
                }), o(ia, {
                    setIsModalVisible: t
                }), o(Ha, {
                    isModalVisible: e,
                    setIsModalVisible: t
                })]
            })
        })
    },
    $a = e => {
        const [t, n] = Y1(vn, Cn());
        return o(P.Provider, {
            value: {
                state: t,
                dispatch: n
            },
            children: e.children
        })
    },
    Da = () => {
        const e = localStorage.getItem("theme");
        return e !== null ? e : new Date().getHours() > 18 ? he.dark : (window.matchMedia("(prefers-color-scheme: light)").matches, he.light)
    },
    xa = e => {
        const [t, n] = k(Da);
        return V(() => {
            document.documentElement.dataset.theme = t, localStorage.setItem("theme", t)
        }, [t]), o(it.Provider, {
            value: {
                theme: t,
                setTheme: n
            },
            children: e.children
        })
    },
    Ba = "_wrapper_lsn1g_1",
    Va = "_container_lsn1g_8",
    Ua = "_title_lsn1g_20",
    Wa = "_helps_lsn1g_33",
    Fa = "_link_lsn1g_43",
    ae = {
        wrapper: Ba,
        container: Va,
        title: Ua,
        helps: Wa,
        link: Fa
    },
    Za = () => {
        const {
            state: e
        } = A(P), {
            HELP: t,
            PRIVACY_POLICY: n,
            TERMS_OF_USE: r
        } = e.lang.translate.FOOTER;
        return o("footer", {
            className: ae.wrapper,
            children: o("div", {
                className: `container ${ae.container}`,
                children: [o("div", {
                    className: ae.left,
                    children: o("h1", {
                        className: ae.title,
                        children: ["©", new Date().getFullYear(), " BLACK AND WHITE"]
                    })
                }), o("div", {
                    className: ae.helps,
                    children: [o("a", {
                        href: "/agreement",
                        className: ae.link,
                        target: "_blank",
                        children: r
                    }), o("a", {
                        href: "/privacy",
                        className: ae.link,
                        target: "_blank",
                        children: n
                    }), o("a", {
                        href: "mailto:HELP@GAMESTORES.RU",
                        className: ae.link,
                        target: "_blank",
                        rel: "noreferrer",
                        children: t
                    })]
                })]
            })
        })
    },
    Ya = "_wrapper_12r1k_1",
    ja = "_text_12r1k_20",
    Ka = "_link_12r1k_28",
    Ye = {
        wrapper: Ya,
        text: ja,
        link: Ka
    },
    qa = () => {
        const {
            state: e
        } = A(P), {
            TEXT: t
        } = e.lang.translate.COPYRIGHT;
        return o("div", {
            className: Ye.wrapper,
            children: [o("p", {
                className: Ye.text,
                children: t
            }), o("a", {
                href: "https://gamestores.app",
                target: "_blank",
                rel: "nofollow noopener noreferrer",
                title: "GameStores",
                className: Ye.link,
                children: "GameStores"
            })]
        })
    },
    za = "_loaderWrapper_10w76_1",
    Xa = "_loaded_10w76_13",
    Ja = "_infoSide_10w76_13",
    Qa = "_rightSideAnim_10w76_1",
    Ga = "_leftSide_10w76_16",
    ei = "_leftSideAnim_10w76_1",
    ti = "_loaderSide_10w76_20",
    ve = {
        loaderWrapper: za,
        loaded: Xa,
        infoSide: Ja,
        rightSideAnim: Qa,
        leftSide: Ga,
        leftSideAnim: ei,
        loaderSide: ti
    };
var ni = (e, t, n) => new Promise((r, a) => {
    var s = i => {
            try {
                l(n.next(i))
            } catch (d) {
                a(d)
            }
        },
        c = i => {
            try {
                l(n.throw(i))
            } catch (d) {
                a(d)
            }
        },
        l = i => i.done ? r(i.value) : Promise.resolve(i.value).then(s, c);
    l((n = n.apply(e, t)).next())
});
const oi = () => ni(void 0, null, function* () {
    const e = yield fetch(`${window.location.origin}/files/stores/backend/store.shop.php`, {
        method: "post",
        mode: "cors",
        body: JSON.stringify({
            action: "items"
        }),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    });
    if (!e.ok) throw new Error(`${e.status}`);
    return yield e.json()
});
var ri = (e, t, n) => new Promise((r, a) => {
    var s = i => {
            try {
                l(n.next(i))
            } catch (d) {
                a(d)
            }
        },
        c = i => {
            try {
                l(n.throw(i))
            } catch (d) {
                a(d)
            }
        },
        l = i => i.done ? r(i.value) : Promise.resolve(i.value).then(s, c);
    l((n = n.apply(e, t)).next())
});
const si = () => ri(void 0, null, function* () {
        const e = yield fetch(`${window.location.origin}/files/stores/backend/store.info.php`, {
            method: "post",
            mode: "cors",
            body: JSON.stringify({
                action: "info"
            }),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        });
        if (!e.ok) throw new Error(`${e.status}`);
        return yield e.json()
    }),
    ai = (e, t) => {
        const n = e.find(r => r.id === t);
        return n ? n.name : ""
    },
    ii = (e, t, n) => {
        const r = e.about;
        if (e.categoryName = ai(n, e.category), r.includes("[config]")) {
            const a = r.indexOf("[config]"),
                s = r.indexOf("[/config]"),
                c = JSON.parse(`${r.substring(a+8,s)}`);
            e.about = r.substring(0, a), c.duration && (e.duration = rt(+c.duration, t)), c.bonuses && (e.bonuses = c.bonuses), c.commands && (e.commands = c.commands), c.kits && (e.kits = c.kits), c.isHot && (e.isHot = c.isHot), c.isNew && (e.isNew = c.isNew)
        }
        return e
    };
var li = (e, t, n) => new Promise((r, a) => {
    var s = i => {
            try {
                l(n.next(i))
            } catch (d) {
                a(d)
            }
        },
        c = i => {
            try {
                l(n.throw(i))
            } catch (d) {
                a(d)
            }
        },
        l = i => i.done ? r(i.value) : Promise.resolve(i.value).then(s, c);
    l((n = n.apply(e, t)).next())
});
const ci = ({
        children: e
    }) => {
        const {
            state: t,
            dispatch: n
        } = A(P), [r, a] = k(!1), [s, c] = k(!1), [l, i] = k(null);
        return V(() => {
            r || (() => li(void 0, null, function* () {
                try {
                    const [h, _, C] = yield Promise.all([a1(), oi(), si()]);
                    for (let u = 0; u < _.items.length; u++) _.items[u] = ii(_.items[u], t.lang.translate.COMMON.TIMES, _.categories);
                    n({
                        type: I.SET_MAIN_DATA,
                        payload: {
                            user: {
                                logged: h.logged,
                                user: h.logged ? h.data : null
                            },
                            shopInfo: C.data,
                            products: _.items,
                            categories: _.categories.slice(1, _.categories.length)
                        }
                    }), document.body.classList.remove("no-scroll")
                } catch (h) {
                    console.error(h), i(t.lang.translate.COMMON.ERRORS.FAILED_FETCH_DATA), n({
                        type: I.ADD_TOAST,
                        payload: {
                            message: t.lang.translate.COMMON.ERRORS.FAILED_FETCH_DATA,
                            isError: !0
                        }
                    })
                } finally {
                    a(!0), setTimeout(() => {
                        c(!0)
                    }, 100)
                }
            }))()
        }, [n, r, t]), V(() => {
            setTimeout(() => {
                window.location.hostname !== atob(j.ENCODE_HOST_NAME) && window.location.reload()
            }, 0)
        }, []), o(B, {
            children: [!s && o("div", {
                className: M(ve.loaderWrapper, {
                    [ve.loaded]: r
                }),
                children: [o("div", {
                    className: M(ve.loaderSide, ve.rightSide)
                }), o("div", {
                    className: M(ve.loaderSide, ve.leftSide)
                })]
            }), l && r && o("p", {
                className: "errorMessage",
                children: l
            }), r && !l && e]
        })
    },
    _i = "_wrapper_1qspc_1",
    di = {
        wrapper: _i
    },
    pi = "_toast_ieust_1",
    ui = "_toastEnter_ieust_1",
    hi = "_exit_ieust_14",
    fi = "_toastExit_ieust_1",
    mi = "_success_ieust_20",
    Ci = "_error_ieust_23",
    vi = "_icon_ieust_36",
    gi = "_messageWrapper_ieust_42",
    Ni = "_title_ieust_48",
    wi = "_message_ieust_42",
    ie = {
        toast: pi,
        toastEnter: ui,
        exit: hi,
        toastExit: fi,
        success: mi,
        error: Ci,
        icon: vi,
        messageWrapper: gi,
        title: Ni,
        message: wi
    },
    yi = ({
        toast: e,
        dispatch: t,
        translate: n
    }) => {
        const [r, a] = k(!1), s = () => {
            a(!0), setTimeout(() => {
                t({
                    type: I.REMOVE_TOAST,
                    payload: e.id
                })
            }, 202)
        };
        return V(() => {
            const c = setTimeout(() => {
                a(!0), setTimeout(() => {
                    t({
                        type: I.REMOVE_TOAST,
                        payload: e.id
                    })
                }, 202)
            }, 5e3);
            return () => {
                clearTimeout(c)
            }
        }, [t, e.id]), o("div", {
            onClick: s,
            className: M(ie.toast, {
                [ie.error]: e.isError,
                [ie.success]: !e.isError,
                [ie.exit]: r
            }),
            children: [o(N, {
                className: ie.icon,
                type: e.isError ? p.toastError : p.toastSuccess
            }), o("div", {
                className: ie.messageWrapper,
                children: [o("p", {
                    className: ie.title,
                    children: e.isError ? n.ERROR : n.SUCCESS
                }), o("p", {
                    className: ie.message,
                    children: e.message
                })]
            })]
        })
    },
    Ei = () => {
        const {
            state: e,
            dispatch: t
        } = A(P);
        return o("div", {
            className: di.wrapper,
            children: e.toasts.map(n => o(yi, {
                translate: e.lang.translate.COMMON.TOASTS,
                dispatch: t,
                toast: n
            }, n.id))
        })
    };

function ct() {
    return V(() => {
        setTimeout(() => {
            window.location.origin !== atob(j.ENCODE_ORIGIN) && (ct = function () {
                return o("p", {
                    children: atob(j.HOST_OSK)
                })
            }), console.log("%cХочешь такой же сайт? Пиши сюда: https://vk.com/xaromi или в Discord Holing#6011", "color: gray; font-size: 16px")
        }, 0)
    }, []), o($a, {
        children: o(xa, {
            children: [o(Ei, {}), o(ci, {
                children: [o(Sa, {}), o("main", {
                    children: o(r1, {
                        children: [o(Ie, {
                            path: "/",
                            component: R1
                        }), o(Ie, {
                            path: "/profile/:*",
                            component: Ns
                        }), o(Ie, {
                            path: "*",
                            component: R1
                        })]
                    })
                }), o(Za, {}), o(qa, {})]
            })]
        })
    })
}
ze(o(ct, {}), document.getElementById("app"));
