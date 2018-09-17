/*!
 * Lamine AZINAKOU - v0.1
 * Copyright 2018 azinakou
 * @azinakou | agazinakou@gmail.com 
 */

if (function (t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
      if (!t.document) throw new Error("jQuery requires a window with a document");
      return e(t)
    } : e(t)
  }("undefined" != typeof window ? window : this, function (t, e) {
    "use strict";
    var n = [],
      r = t.document,
      i = Object.getPrototypeOf,
      o = n.slice,
      s = n.concat,
      a = n.push,
      l = n.indexOf,
      u = {},
      c = u.toString,
      d = u.hasOwnProperty,
      h = d.toString,
      f = h.call(Object),
      p = {},
      g = function (t) {
        return "function" == typeof t && "number" != typeof t.nodeType
      },
      m = function (t) {
        return null != t && t === t.window
      },
      v = {
        type: !0,
        src: !0,
        noModule: !0
      };

    function y(t, e, n) {
      var i, o = (e = e || r).createElement("script");
      if (o.text = t, n)
        for (i in v) n[i] && (o[i] = n[i]);
      e.head.appendChild(o).parentNode.removeChild(o)
    }

    function b(t) {
      return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? u[c.call(t)] || "object" : typeof t
    }
    var w = function (t, e) {
        return new w.fn.init(t, e)
      },
      _ = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function S(t) {
      var e = !!t && "length" in t && t.length,
        n = b(t);
      return !g(t) && !m(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }
    w.fn = w.prototype = {
      jquery: "3.3.1",
      constructor: w,
      length: 0,
      toArray: function () {
        return o.call(this)
      },
      get: function (t) {
        return null == t ? o.call(this) : t < 0 ? this[t + this.length] : this[t]
      },
      pushStack: function (t) {
        var e = w.merge(this.constructor(), t);
        return e.prevObject = this, e
      },
      each: function (t) {
        return w.each(this, t)
      },
      map: function (t) {
        return this.pushStack(w.map(this, function (e, n) {
          return t.call(e, n, e)
        }))
      },
      slice: function () {
        return this.pushStack(o.apply(this, arguments))
      },
      first: function () {
        return this.eq(0)
      },
      last: function () {
        return this.eq(-1)
      },
      eq: function (t) {
        var e = this.length,
          n = +t + (t < 0 ? e : 0);
        return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
      },
      end: function () {
        return this.prevObject || this.constructor()
      },
      push: a,
      sort: n.sort,
      splice: n.splice
    }, w.extend = w.fn.extend = function () {
      var t, e, n, r, i, o, s = arguments[0] || {},
        a = 1,
        l = arguments.length,
        u = !1;
      for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || g(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
        if (null != (t = arguments[a]))
          for (e in t) n = s[e], s !== (r = t[e]) && (u && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, s[e] = w.extend(u, o, r)) : void 0 !== r && (s[e] = r));
      return s
    }, w.extend({
      expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (t) {
        throw new Error(t)
      },
      noop: function () {},
      isPlainObject: function (t) {
        var e, n;
        return !(!t || "[object Object]" !== c.call(t) || (e = i(t)) && ("function" != typeof (n = d.call(e, "constructor") && e.constructor) || h.call(n) !== f))
      },
      isEmptyObject: function (t) {
        var e;
        for (e in t) return !1;
        return !0
      },
      globalEval: function (t) {
        y(t)
      },
      each: function (t, e) {
        var n, r = 0;
        if (S(t))
          for (n = t.length; r < n && !1 !== e.call(t[r], r, t[r]); r++);
        else
          for (r in t)
            if (!1 === e.call(t[r], r, t[r])) break;
        return t
      },
      trim: function (t) {
        return null == t ? "" : (t + "").replace(_, "")
      },
      makeArray: function (t, e) {
        var n = e || [];
        return null != t && (S(Object(t)) ? w.merge(n, "string" == typeof t ? [t] : t) : a.call(n, t)), n
      },
      inArray: function (t, e, n) {
        return null == e ? -1 : l.call(e, t, n)
      },
      merge: function (t, e) {
        for (var n = +e.length, r = 0, i = t.length; r < n; r++) t[i++] = e[r];
        return t.length = i, t
      },
      grep: function (t, e, n) {
        for (var r = [], i = 0, o = t.length, s = !n; i < o; i++) !e(t[i], i) !== s && r.push(t[i]);
        return r
      },
      map: function (t, e, n) {
        var r, i, o = 0,
          a = [];
        if (S(t))
          for (r = t.length; o < r; o++) null != (i = e(t[o], o, n)) && a.push(i);
        else
          for (o in t) null != (i = e(t[o], o, n)) && a.push(i);
        return s.apply([], a)
      },
      guid: 1,
      support: p
    }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
      u["[object " + e + "]"] = e.toLowerCase()
    });
    var D = function (t) {
      var e, n, r, i, o, s, a, l, u, c, d, h, f, p, g, m, v, y, b, w = "sizzle" + 1 * new Date,
        _ = t.document,
        S = 0,
        D = 0,
        x = st(),
        C = st(),
        T = st(),
        E = function (t, e) {
          return t === e && (d = !0), 0
        },
        M = {}.hasOwnProperty,
        I = [],
        R = I.pop,
        A = I.push,
        P = I.push,
        O = I.slice,
        k = function (t, e) {
          for (var n = 0, r = t.length; n < r; n++)
            if (t[n] === e) return n;
          return -1
        },
        H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        N = "[\\x20\\t\\r\\n\\f]",
        L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        F = "\\[" + N + "*(" + L + ")(?:" + N + "*([*^$|!~]?=)" + N + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + N + "*\\]",
        j = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)",
        B = new RegExp(N + "+", "g"),
        z = new RegExp("^" + N + "+|((?:^|[^\\\\])(?:\\\\.)*)" + N + "+$", "g"),
        W = new RegExp("^" + N + "*," + N + "*"),
        Y = new RegExp("^" + N + "*([>+~]|" + N + ")" + N + "*"),
        U = new RegExp("=" + N + "*([^\\]'\"]*?)" + N + "*\\]", "g"),
        V = new RegExp(j),
        G = new RegExp("^" + L + "$"),
        q = {
          ID: new RegExp("^#(" + L + ")"),
          CLASS: new RegExp("^\\.(" + L + ")"),
          TAG: new RegExp("^(" + L + "|[*])"),
          ATTR: new RegExp("^" + F),
          PSEUDO: new RegExp("^" + j),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + N + "*(even|odd|(([+-]|)(\\d*)n|)" + N + "*(?:([+-]|)" + N + "*(\\d+)|))" + N + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + H + ")$", "i"),
          needsContext: new RegExp("^" + N + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + N + "*((?:-\\d)?\\d*)" + N + "*\\)|)(?=[^-]|$)", "i")
        },
        X = /^(?:input|select|textarea|button)$/i,
        $ = /^h\d$/i,
        Q = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        K = /[+~]/,
        J = new RegExp("\\\\([\\da-f]{1,6}" + N + "?|(" + N + ")|.)", "ig"),
        tt = function (t, e, n) {
          var r = "0x" + e - 65536;
          return r != r || n ? e : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        },
        et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        nt = function (t, e) {
          return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
        },
        rt = function () {
          h()
        },
        it = yt(function (t) {
          return !0 === t.disabled && ("form" in t || "label" in t)
        }, {
          dir: "parentNode",
          next: "legend"
        });
      try {
        P.apply(I = O.call(_.childNodes), _.childNodes), I[_.childNodes.length].nodeType
      } catch (t) {
        P = {
          apply: I.length ? function (t, e) {
            A.apply(t, O.call(e))
          } : function (t, e) {
            for (var n = t.length, r = 0; t[n++] = e[r++];);
            t.length = n - 1
          }
        }
      }

      function ot(t, e, r, i) {
        var o, a, u, c, d, p, v, y = e && e.ownerDocument,
          S = e ? e.nodeType : 9;
        if (r = r || [], "string" != typeof t || !t || 1 !== S && 9 !== S && 11 !== S) return r;
        if (!i && ((e ? e.ownerDocument || e : _) !== f && h(e), e = e || f, g)) {
          if (11 !== S && (d = Z.exec(t)))
            if (o = d[1]) {
              if (9 === S) {
                if (!(u = e.getElementById(o))) return r;
                if (u.id === o) return r.push(u), r
              } else if (y && (u = y.getElementById(o)) && b(e, u) && u.id === o) return r.push(u), r
            } else {
              if (d[2]) return P.apply(r, e.getElementsByTagName(t)), r;
              if ((o = d[3]) && n.getElementsByClassName && e.getElementsByClassName) return P.apply(r, e.getElementsByClassName(o)), r
            } if (n.qsa && !T[t + " "] && (!m || !m.test(t))) {
            if (1 !== S) y = e, v = t;
            else if ("object" !== e.nodeName.toLowerCase()) {
              for ((c = e.getAttribute("id")) ? c = c.replace(et, nt) : e.setAttribute("id", c = w), a = (p = s(t)).length; a--;) p[a] = "#" + c + " " + vt(p[a]);
              v = p.join(","), y = K.test(t) && gt(e.parentNode) || e
            }
            if (v) try {
              return P.apply(r, y.querySelectorAll(v)), r
            } catch (t) {} finally {
              c === w && e.removeAttribute("id")
            }
          }
        }
        return l(t.replace(z, "$1"), e, r, i)
      }

      function st() {
        var t = [];
        return function e(n, i) {
          return t.push(n + " ") > r.cacheLength && delete e[t.shift()], e[n + " "] = i
        }
      }

      function at(t) {
        return t[w] = !0, t
      }

      function lt(t) {
        var e = f.createElement("fieldset");
        try {
          return !!t(e)
        } catch (t) {
          return !1
        } finally {
          e.parentNode && e.parentNode.removeChild(e), e = null
        }
      }

      function ut(t, e) {
        for (var n = t.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = e
      }

      function ct(t, e) {
        var n = e && t,
          r = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
        if (r) return r;
        if (n)
          for (; n = n.nextSibling;)
            if (n === e) return -1;
        return t ? 1 : -1
      }

      function dt(t) {
        return function (e) {
          return "input" === e.nodeName.toLowerCase() && e.type === t
        }
      }

      function ht(t) {
        return function (e) {
          var n = e.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && e.type === t
        }
      }

      function ft(t) {
        return function (e) {
          return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && it(e) === t : e.disabled === t : "label" in e && e.disabled === t
        }
      }

      function pt(t) {
        return at(function (e) {
          return e = +e, at(function (n, r) {
            for (var i, o = t([], n.length, e), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
          })
        })
      }

      function gt(t) {
        return t && void 0 !== t.getElementsByTagName && t
      }
      for (e in n = ot.support = {}, o = ot.isXML = function (t) {
          var e = t && (t.ownerDocument || t).documentElement;
          return !!e && "HTML" !== e.nodeName
        }, h = ot.setDocument = function (t) {
          var e, i, s = t ? t.ownerDocument || t : _;
          return s !== f && 9 === s.nodeType && s.documentElement ? (p = (f = s).documentElement, g = !o(f), _ !== f && (i = f.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", rt, !1) : i.attachEvent && i.attachEvent("onunload", rt)), n.attributes = lt(function (t) {
            return t.className = "i", !t.getAttribute("className")
          }), n.getElementsByTagName = lt(function (t) {
            return t.appendChild(f.createComment("")), !t.getElementsByTagName("*").length
          }), n.getElementsByClassName = Q.test(f.getElementsByClassName), n.getById = lt(function (t) {
            return p.appendChild(t).id = w, !f.getElementsByName || !f.getElementsByName(w).length
          }), n.getById ? (r.filter.ID = function (t) {
            var e = t.replace(J, tt);
            return function (t) {
              return t.getAttribute("id") === e
            }
          }, r.find.ID = function (t, e) {
            if (void 0 !== e.getElementById && g) {
              var n = e.getElementById(t);
              return n ? [n] : []
            }
          }) : (r.filter.ID = function (t) {
            var e = t.replace(J, tt);
            return function (t) {
              var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
              return n && n.value === e
            }
          }, r.find.ID = function (t, e) {
            if (void 0 !== e.getElementById && g) {
              var n, r, i, o = e.getElementById(t);
              if (o) {
                if ((n = o.getAttributeNode("id")) && n.value === t) return [o];
                for (i = e.getElementsByName(t), r = 0; o = i[r++];)
                  if ((n = o.getAttributeNode("id")) && n.value === t) return [o]
              }
              return []
            }
          }), r.find.TAG = n.getElementsByTagName ? function (t, e) {
            return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0
          } : function (t, e) {
            var n, r = [],
              i = 0,
              o = e.getElementsByTagName(t);
            if ("*" === t) {
              for (; n = o[i++];) 1 === n.nodeType && r.push(n);
              return r
            }
            return o
          }, r.find.CLASS = n.getElementsByClassName && function (t, e) {
            if (void 0 !== e.getElementsByClassName && g) return e.getElementsByClassName(t)
          }, v = [], m = [], (n.qsa = Q.test(f.querySelectorAll)) && (lt(function (t) {
            p.appendChild(t).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + N + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || m.push("\\[" + N + "*(?:value|" + H + ")"), t.querySelectorAll("[id~=" + w + "-]").length || m.push("~="), t.querySelectorAll(":checked").length || m.push(":checked"), t.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]")
          }), lt(function (t) {
            t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
            var e = f.createElement("input");
            e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && m.push("name" + N + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), p.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), m.push(",.*:")
          })), (n.matchesSelector = Q.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && lt(function (t) {
            n.disconnectedMatch = y.call(t, "*"), y.call(t, "[s!='']:x"), v.push("!=", j)
          }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), e = Q.test(p.compareDocumentPosition), b = e || Q.test(p.contains) ? function (t, e) {
            var n = 9 === t.nodeType ? t.documentElement : t,
              r = e && e.parentNode;
            return t === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
          } : function (t, e) {
            if (e)
              for (; e = e.parentNode;)
                if (e === t) return !0;
            return !1
          }, E = e ? function (t, e) {
            if (t === e) return d = !0, 0;
            var r = !t.compareDocumentPosition - !e.compareDocumentPosition;
            return r || (1 & (r = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !n.sortDetached && e.compareDocumentPosition(t) === r ? t === f || t.ownerDocument === _ && b(_, t) ? -1 : e === f || e.ownerDocument === _ && b(_, e) ? 1 : c ? k(c, t) - k(c, e) : 0 : 4 & r ? -1 : 1)
          } : function (t, e) {
            if (t === e) return d = !0, 0;
            var n, r = 0,
              i = t.parentNode,
              o = e.parentNode,
              s = [t],
              a = [e];
            if (!i || !o) return t === f ? -1 : e === f ? 1 : i ? -1 : o ? 1 : c ? k(c, t) - k(c, e) : 0;
            if (i === o) return ct(t, e);
            for (n = t; n = n.parentNode;) s.unshift(n);
            for (n = e; n = n.parentNode;) a.unshift(n);
            for (; s[r] === a[r];) r++;
            return r ? ct(s[r], a[r]) : s[r] === _ ? -1 : a[r] === _ ? 1 : 0
          }, f) : f
        }, ot.matches = function (t, e) {
          return ot(t, null, null, e)
        }, ot.matchesSelector = function (t, e) {
          if ((t.ownerDocument || t) !== f && h(t), e = e.replace(U, "='$1']"), n.matchesSelector && g && !T[e + " "] && (!v || !v.test(e)) && (!m || !m.test(e))) try {
            var r = y.call(t, e);
            if (r || n.disconnectedMatch || t.document && 11 !== t.document.nodeType) return r
          } catch (t) {}
          return ot(e, f, null, [t]).length > 0
        }, ot.contains = function (t, e) {
          return (t.ownerDocument || t) !== f && h(t), b(t, e)
        }, ot.attr = function (t, e) {
          (t.ownerDocument || t) !== f && h(t);
          var i = r.attrHandle[e.toLowerCase()],
            o = i && M.call(r.attrHandle, e.toLowerCase()) ? i(t, e, !g) : void 0;
          return void 0 !== o ? o : n.attributes || !g ? t.getAttribute(e) : (o = t.getAttributeNode(e)) && o.specified ? o.value : null
        }, ot.escape = function (t) {
          return (t + "").replace(et, nt)
        }, ot.error = function (t) {
          throw new Error("Syntax error, unrecognized expression: " + t)
        }, ot.uniqueSort = function (t) {
          var e, r = [],
            i = 0,
            o = 0;
          if (d = !n.detectDuplicates, c = !n.sortStable && t.slice(0), t.sort(E), d) {
            for (; e = t[o++];) e === t[o] && (i = r.push(o));
            for (; i--;) t.splice(r[i], 1)
          }
          return c = null, t
        }, i = ot.getText = function (t) {
          var e, n = "",
            r = 0,
            o = t.nodeType;
          if (o) {
            if (1 === o || 9 === o || 11 === o) {
              if ("string" == typeof t.textContent) return t.textContent;
              for (t = t.firstChild; t; t = t.nextSibling) n += i(t)
            } else if (3 === o || 4 === o) return t.nodeValue
          } else
            for (; e = t[r++];) n += i(e);
          return n
        }, (r = ot.selectors = {
          cacheLength: 50,
          createPseudo: at,
          match: q,
          attrHandle: {},
          find: {},
          relative: {
            ">": {
              dir: "parentNode",
              first: !0
            },
            " ": {
              dir: "parentNode"
            },
            "+": {
              dir: "previousSibling",
              first: !0
            },
            "~": {
              dir: "previousSibling"
            }
          },
          preFilter: {
            ATTR: function (t) {
              return t[1] = t[1].replace(J, tt), t[3] = (t[3] || t[4] || t[5] || "").replace(J, tt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
            },
            CHILD: function (t) {
              return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || ot.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && ot.error(t[0]), t
            },
            PSEUDO: function (t) {
              var e, n = !t[6] && t[2];
              return q.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && V.test(n) && (e = s(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
            }
          },
          filter: {
            TAG: function (t) {
              var e = t.replace(J, tt).toLowerCase();
              return "*" === t ? function () {
                return !0
              } : function (t) {
                return t.nodeName && t.nodeName.toLowerCase() === e
              }
            },
            CLASS: function (t) {
              var e = x[t + " "];
              return e || (e = new RegExp("(^|" + N + ")" + t + "(" + N + "|$)")) && x(t, function (t) {
                return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
              })
            },
            ATTR: function (t, e, n) {
              return function (r) {
                var i = ot.attr(r, t);
                return null == i ? "!=" === e : !e || (i += "", "=" === e ? i === n : "!=" === e ? i !== n : "^=" === e ? n && 0 === i.indexOf(n) : "*=" === e ? n && i.indexOf(n) > -1 : "$=" === e ? n && i.slice(-n.length) === n : "~=" === e ? (" " + i.replace(B, " ") + " ").indexOf(n) > -1 : "|=" === e && (i === n || i.slice(0, n.length + 1) === n + "-"))
              }
            },
            CHILD: function (t, e, n, r, i) {
              var o = "nth" !== t.slice(0, 3),
                s = "last" !== t.slice(-4),
                a = "of-type" === e;
              return 1 === r && 0 === i ? function (t) {
                return !!t.parentNode
              } : function (e, n, l) {
                var u, c, d, h, f, p, g = o !== s ? "nextSibling" : "previousSibling",
                  m = e.parentNode,
                  v = a && e.nodeName.toLowerCase(),
                  y = !l && !a,
                  b = !1;
                if (m) {
                  if (o) {
                    for (; g;) {
                      for (h = e; h = h[g];)
                        if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                      p = g = "only" === t && !p && "nextSibling"
                    }
                    return !0
                  }
                  if (p = [s ? m.firstChild : m.lastChild], s && y) {
                    for (b = (f = (u = (c = (d = (h = m)[w] || (h[w] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[t] || [])[0] === S && u[1]) && u[2], h = f && m.childNodes[f]; h = ++f && h && h[g] || (b = f = 0) || p.pop();)
                      if (1 === h.nodeType && ++b && h === e) {
                        c[t] = [S, f, b];
                        break
                      }
                  } else if (y && (b = f = (u = (c = (d = (h = e)[w] || (h[w] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[t] || [])[0] === S && u[1]), !1 === b)
                    for (;
                      (h = ++f && h && h[g] || (b = f = 0) || p.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && ((c = (d = h[w] || (h[w] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[t] = [S, b]), h !== e)););
                  return (b -= i) === r || b % r == 0 && b / r >= 0
                }
              }
            },
            PSEUDO: function (t, e) {
              var n, i = r.pseudos[t] || r.setFilters[t.toLowerCase()] || ot.error("unsupported pseudo: " + t);
              return i[w] ? i(e) : i.length > 1 ? (n = [t, t, "", e], r.setFilters.hasOwnProperty(t.toLowerCase()) ? at(function (t, n) {
                for (var r, o = i(t, e), s = o.length; s--;) t[r = k(t, o[s])] = !(n[r] = o[s])
              }) : function (t) {
                return i(t, 0, n)
              }) : i
            }
          },
          pseudos: {
            not: at(function (t) {
              var e = [],
                n = [],
                r = a(t.replace(z, "$1"));
              return r[w] ? at(function (t, e, n, i) {
                for (var o, s = r(t, null, i, []), a = t.length; a--;)(o = s[a]) && (t[a] = !(e[a] = o))
              }) : function (t, i, o) {
                return e[0] = t, r(e, null, o, n), e[0] = null, !n.pop()
              }
            }),
            has: at(function (t) {
              return function (e) {
                return ot(t, e).length > 0
              }
            }),
            contains: at(function (t) {
              return t = t.replace(J, tt),
                function (e) {
                  return (e.textContent || e.innerText || i(e)).indexOf(t) > -1
                }
            }),
            lang: at(function (t) {
              return G.test(t || "") || ot.error("unsupported lang: " + t), t = t.replace(J, tt).toLowerCase(),
                function (e) {
                  var n;
                  do {
                    if (n = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                  } while ((e = e.parentNode) && 1 === e.nodeType);
                  return !1
                }
            }),
            target: function (e) {
              var n = t.location && t.location.hash;
              return n && n.slice(1) === e.id
            },
            root: function (t) {
              return t === p
            },
            focus: function (t) {
              return t === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
            },
            enabled: ft(!1),
            disabled: ft(!0),
            checked: function (t) {
              var e = t.nodeName.toLowerCase();
              return "input" === e && !!t.checked || "option" === e && !!t.selected
            },
            selected: function (t) {
              return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
            },
            empty: function (t) {
              for (t = t.firstChild; t; t = t.nextSibling)
                if (t.nodeType < 6) return !1;
              return !0
            },
            parent: function (t) {
              return !r.pseudos.empty(t)
            },
            header: function (t) {
              return $.test(t.nodeName)
            },
            input: function (t) {
              return X.test(t.nodeName)
            },
            button: function (t) {
              var e = t.nodeName.toLowerCase();
              return "input" === e && "button" === t.type || "button" === e
            },
            text: function (t) {
              var e;
              return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
            },
            first: pt(function () {
              return [0]
            }),
            last: pt(function (t, e) {
              return [e - 1]
            }),
            eq: pt(function (t, e, n) {
              return [n < 0 ? n + e : n]
            }),
            even: pt(function (t, e) {
              for (var n = 0; n < e; n += 2) t.push(n);
              return t
            }),
            odd: pt(function (t, e) {
              for (var n = 1; n < e; n += 2) t.push(n);
              return t
            }),
            lt: pt(function (t, e, n) {
              for (var r = n < 0 ? n + e : n; --r >= 0;) t.push(r);
              return t
            }),
            gt: pt(function (t, e, n) {
              for (var r = n < 0 ? n + e : n; ++r < e;) t.push(r);
              return t
            })
          }
        }).pseudos.nth = r.pseudos.eq, {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
        }) r.pseudos[e] = dt(e);
      for (e in {
          submit: !0,
          reset: !0
        }) r.pseudos[e] = ht(e);

      function mt() {}

      function vt(t) {
        for (var e = 0, n = t.length, r = ""; e < n; e++) r += t[e].value;
        return r
      }

      function yt(t, e, n) {
        var r = e.dir,
          i = e.next,
          o = i || r,
          s = n && "parentNode" === o,
          a = D++;
        return e.first ? function (e, n, i) {
          for (; e = e[r];)
            if (1 === e.nodeType || s) return t(e, n, i);
          return !1
        } : function (e, n, l) {
          var u, c, d, h = [S, a];
          if (l) {
            for (; e = e[r];)
              if ((1 === e.nodeType || s) && t(e, n, l)) return !0
          } else
            for (; e = e[r];)
              if (1 === e.nodeType || s)
                if (c = (d = e[w] || (e[w] = {}))[e.uniqueID] || (d[e.uniqueID] = {}), i && i === e.nodeName.toLowerCase()) e = e[r] || e;
                else {
                  if ((u = c[o]) && u[0] === S && u[1] === a) return h[2] = u[2];
                  if (c[o] = h, h[2] = t(e, n, l)) return !0
                } return !1
        }
      }

      function bt(t) {
        return t.length > 1 ? function (e, n, r) {
          for (var i = t.length; i--;)
            if (!t[i](e, n, r)) return !1;
          return !0
        } : t[0]
      }

      function wt(t, e, n, r, i) {
        for (var o, s = [], a = 0, l = t.length, u = null != e; a < l; a++)(o = t[a]) && (n && !n(o, r, i) || (s.push(o), u && e.push(a)));
        return s
      }

      function _t(t, e, n, r, i, o) {
        return r && !r[w] && (r = _t(r)), i && !i[w] && (i = _t(i, o)), at(function (o, s, a, l) {
          var u, c, d, h = [],
            f = [],
            p = s.length,
            g = o || function (t, e, n) {
              for (var r = 0, i = e.length; r < i; r++) ot(t, e[r], n);
              return n
            }(e || "*", a.nodeType ? [a] : a, []),
            m = !t || !o && e ? g : wt(g, h, t, a, l),
            v = n ? i || (o ? t : p || r) ? [] : s : m;
          if (n && n(m, v, a, l), r)
            for (u = wt(v, f), r(u, [], a, l), c = u.length; c--;)(d = u[c]) && (v[f[c]] = !(m[f[c]] = d));
          if (o) {
            if (i || t) {
              if (i) {
                for (u = [], c = v.length; c--;)(d = v[c]) && u.push(m[c] = d);
                i(null, v = [], u, l)
              }
              for (c = v.length; c--;)(d = v[c]) && (u = i ? k(o, d) : h[c]) > -1 && (o[u] = !(s[u] = d))
            }
          } else v = wt(v === s ? v.splice(p, v.length) : v), i ? i(null, s, v, l) : P.apply(s, v)
        })
      }

      function St(t) {
        for (var e, n, i, o = t.length, s = r.relative[t[0].type], a = s || r.relative[" "], l = s ? 1 : 0, c = yt(function (t) {
            return t === e
          }, a, !0), d = yt(function (t) {
            return k(e, t) > -1
          }, a, !0), h = [function (t, n, r) {
            var i = !s && (r || n !== u) || ((e = n).nodeType ? c(t, n, r) : d(t, n, r));
            return e = null, i
          }]; l < o; l++)
          if (n = r.relative[t[l].type]) h = [yt(bt(h), n)];
          else {
            if ((n = r.filter[t[l].type].apply(null, t[l].matches))[w]) {
              for (i = ++l; i < o && !r.relative[t[i].type]; i++);
              return _t(l > 1 && bt(h), l > 1 && vt(t.slice(0, l - 1).concat({
                value: " " === t[l - 2].type ? "*" : ""
              })).replace(z, "$1"), n, l < i && St(t.slice(l, i)), i < o && St(t = t.slice(i)), i < o && vt(t))
            }
            h.push(n)
          } return bt(h)
      }
      return mt.prototype = r.filters = r.pseudos, r.setFilters = new mt, s = ot.tokenize = function (t, e) {
        var n, i, o, s, a, l, u, c = C[t + " "];
        if (c) return e ? 0 : c.slice(0);
        for (a = t, l = [], u = r.preFilter; a;) {
          for (s in n && !(i = W.exec(a)) || (i && (a = a.slice(i[0].length) || a), l.push(o = [])), n = !1, (i = Y.exec(a)) && (n = i.shift(), o.push({
              value: n,
              type: i[0].replace(z, " ")
            }), a = a.slice(n.length)), r.filter) !(i = q[s].exec(a)) || u[s] && !(i = u[s](i)) || (n = i.shift(), o.push({
            value: n,
            type: s,
            matches: i
          }), a = a.slice(n.length));
          if (!n) break
        }
        return e ? a.length : a ? ot.error(t) : C(t, l).slice(0)
      }, a = ot.compile = function (t, e) {
        var n, i, o, a, l, c, d = [],
          p = [],
          m = T[t + " "];
        if (!m) {
          for (e || (e = s(t)), n = e.length; n--;)(m = St(e[n]))[w] ? d.push(m) : p.push(m);
          (m = T(t, (i = p, o = d, a = o.length > 0, l = i.length > 0, c = function (t, e, n, s, c) {
            var d, p, m, v = 0,
              y = "0",
              b = t && [],
              w = [],
              _ = u,
              D = t || l && r.find.TAG("*", c),
              x = S += null == _ ? 1 : Math.random() || .1,
              C = D.length;
            for (c && (u = e === f || e || c); y !== C && null != (d = D[y]); y++) {
              if (l && d) {
                for (p = 0, e || d.ownerDocument === f || (h(d), n = !g); m = i[p++];)
                  if (m(d, e || f, n)) {
                    s.push(d);
                    break
                  } c && (S = x)
              }
              a && ((d = !m && d) && v--, t && b.push(d))
            }
            if (v += y, a && y !== v) {
              for (p = 0; m = o[p++];) m(b, w, e, n);
              if (t) {
                if (v > 0)
                  for (; y--;) b[y] || w[y] || (w[y] = R.call(s));
                w = wt(w)
              }
              P.apply(s, w), c && !t && w.length > 0 && v + o.length > 1 && ot.uniqueSort(s)
            }
            return c && (S = x, u = _), b
          }, a ? at(c) : c))).selector = t
        }
        return m
      }, l = ot.select = function (t, e, n, i) {
        var o, l, u, c, d, h = "function" == typeof t && t,
          f = !i && s(t = h.selector || t);
        if (n = n || [], 1 === f.length) {
          if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (u = l[0]).type && 9 === e.nodeType && g && r.relative[l[1].type]) {
            if (!(e = (r.find.ID(u.matches[0].replace(J, tt), e) || [])[0])) return n;
            h && (e = e.parentNode), t = t.slice(l.shift().value.length)
          }
          for (o = q.needsContext.test(t) ? 0 : l.length; o-- && (u = l[o], !r.relative[c = u.type]);)
            if ((d = r.find[c]) && (i = d(u.matches[0].replace(J, tt), K.test(l[0].type) && gt(e.parentNode) || e))) {
              if (l.splice(o, 1), !(t = i.length && vt(l))) return P.apply(n, i), n;
              break
            }
        }
        return (h || a(t, f))(i, e, !g, n, !e || K.test(t) && gt(e.parentNode) || e), n
      }, n.sortStable = w.split("").sort(E).join("") === w, n.detectDuplicates = !!d, h(), n.sortDetached = lt(function (t) {
        return 1 & t.compareDocumentPosition(f.createElement("fieldset"))
      }), lt(function (t) {
        return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
      }) || ut("type|href|height|width", function (t, e, n) {
        if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
      }), n.attributes && lt(function (t) {
        return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
      }) || ut("value", function (t, e, n) {
        if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
      }), lt(function (t) {
        return null == t.getAttribute("disabled")
      }) || ut(H, function (t, e, n) {
        var r;
        if (!n) return !0 === t[e] ? e.toLowerCase() : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
      }), ot
    }(t);
    w.find = D, w.expr = D.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = D.uniqueSort, w.text = D.getText, w.isXMLDoc = D.isXML, w.contains = D.contains, w.escapeSelector = D.escape;
    var x = function (t, e, n) {
        for (var r = [], i = void 0 !== n;
          (t = t[e]) && 9 !== t.nodeType;)
          if (1 === t.nodeType) {
            if (i && w(t).is(n)) break;
            r.push(t)
          } return r
      },
      C = function (t, e) {
        for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
        return n
      },
      T = w.expr.match.needsContext;

    function E(t, e) {
      return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
    }
    var M = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function I(t, e, n) {
      return g(e) ? w.grep(t, function (t, r) {
        return !!e.call(t, r, t) !== n
      }) : e.nodeType ? w.grep(t, function (t) {
        return t === e !== n
      }) : "string" != typeof e ? w.grep(t, function (t) {
        return l.call(e, t) > -1 !== n
      }) : w.filter(e, t, n)
    }
    w.filter = function (t, e, n) {
      var r = e[0];
      return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === r.nodeType ? w.find.matchesSelector(r, t) ? [r] : [] : w.find.matches(t, w.grep(e, function (t) {
        return 1 === t.nodeType
      }))
    }, w.fn.extend({
      find: function (t) {
        var e, n, r = this.length,
          i = this;
        if ("string" != typeof t) return this.pushStack(w(t).filter(function () {
          for (e = 0; e < r; e++)
            if (w.contains(i[e], this)) return !0
        }));
        for (n = this.pushStack([]), e = 0; e < r; e++) w.find(t, i[e], n);
        return r > 1 ? w.uniqueSort(n) : n
      },
      filter: function (t) {
        return this.pushStack(I(this, t || [], !1))
      },
      not: function (t) {
        return this.pushStack(I(this, t || [], !0))
      },
      is: function (t) {
        return !!I(this, "string" == typeof t && T.test(t) ? w(t) : t || [], !1).length
      }
    });
    var R, A = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w.fn.init = function (t, e, n) {
      var i, o;
      if (!t) return this;
      if (n = n || R, "string" == typeof t) {
        if (!(i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : A.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
        if (i[1]) {
          if (e = e instanceof w ? e[0] : e, w.merge(this, w.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : r, !0)), M.test(i[1]) && w.isPlainObject(e))
            for (i in e) g(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
          return this
        }
        return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this
      }
      return t.nodeType ? (this[0] = t, this.length = 1, this) : g(t) ? void 0 !== n.ready ? n.ready(t) : t(w) : w.makeArray(t, this)
    }).prototype = w.fn, R = w(r);
    var P = /^(?:parents|prev(?:Until|All))/,
      O = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
      };

    function k(t, e) {
      for (;
        (t = t[e]) && 1 !== t.nodeType;);
      return t
    }
    w.fn.extend({
      has: function (t) {
        var e = w(t, this),
          n = e.length;
        return this.filter(function () {
          for (var t = 0; t < n; t++)
            if (w.contains(this, e[t])) return !0
        })
      },
      closest: function (t, e) {
        var n, r = 0,
          i = this.length,
          o = [],
          s = "string" != typeof t && w(t);
        if (!T.test(t))
          for (; r < i; r++)
            for (n = this[r]; n && n !== e; n = n.parentNode)
              if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, t))) {
                o.push(n);
                break
              } return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o)
      },
      index: function (t) {
        return t ? "string" == typeof t ? l.call(w(t), this[0]) : l.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function (t, e) {
        return this.pushStack(w.uniqueSort(w.merge(this.get(), w(t, e))))
      },
      addBack: function (t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
      }
    }), w.each({
      parent: function (t) {
        var e = t.parentNode;
        return e && 11 !== e.nodeType ? e : null
      },
      parents: function (t) {
        return x(t, "parentNode")
      },
      parentsUntil: function (t, e, n) {
        return x(t, "parentNode", n)
      },
      next: function (t) {
        return k(t, "nextSibling")
      },
      prev: function (t) {
        return k(t, "previousSibling")
      },
      nextAll: function (t) {
        return x(t, "nextSibling")
      },
      prevAll: function (t) {
        return x(t, "previousSibling")
      },
      nextUntil: function (t, e, n) {
        return x(t, "nextSibling", n)
      },
      prevUntil: function (t, e, n) {
        return x(t, "previousSibling", n)
      },
      siblings: function (t) {
        return C((t.parentNode || {}).firstChild, t)
      },
      children: function (t) {
        return C(t.firstChild)
      },
      contents: function (t) {
        return E(t, "iframe") ? t.contentDocument : (E(t, "template") && (t = t.content || t), w.merge([], t.childNodes))
      }
    }, function (t, e) {
      w.fn[t] = function (n, r) {
        var i = w.map(this, e, n);
        return "Until" !== t.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[t] || w.uniqueSort(i), P.test(t) && i.reverse()), this.pushStack(i)
      }
    });
    var H = /[^\x20\t\r\n\f]+/g;

    function N(t) {
      return t
    }

    function L(t) {
      throw t
    }

    function F(t, e, n, r) {
      var i;
      try {
        t && g(i = t.promise) ? i.call(t).done(e).fail(n) : t && g(i = t.then) ? i.call(t, e, n) : e.apply(void 0, [t].slice(r))
      } catch (t) {
        n.apply(void 0, [t])
      }
    }
    w.Callbacks = function (t) {
      var e, n;
      t = "string" == typeof t ? (e = t, n = {}, w.each(e.match(H) || [], function (t, e) {
        n[e] = !0
      }), n) : w.extend({}, t);
      var r, i, o, s, a = [],
        l = [],
        u = -1,
        c = function () {
          for (s = s || t.once, o = r = !0; l.length; u = -1)
            for (i = l.shift(); ++u < a.length;) !1 === a[u].apply(i[0], i[1]) && t.stopOnFalse && (u = a.length, i = !1);
          t.memory || (i = !1), r = !1, s && (a = i ? [] : "")
        },
        d = {
          add: function () {
            return a && (i && !r && (u = a.length - 1, l.push(i)), function e(n) {
              w.each(n, function (n, r) {
                g(r) ? t.unique && d.has(r) || a.push(r) : r && r.length && "string" !== b(r) && e(r)
              })
            }(arguments), i && !r && c()), this
          },
          remove: function () {
            return w.each(arguments, function (t, e) {
              for (var n;
                (n = w.inArray(e, a, n)) > -1;) a.splice(n, 1), n <= u && u--
            }), this
          },
          has: function (t) {
            return t ? w.inArray(t, a) > -1 : a.length > 0
          },
          empty: function () {
            return a && (a = []), this
          },
          disable: function () {
            return s = l = [], a = i = "", this
          },
          disabled: function () {
            return !a
          },
          lock: function () {
            return s = l = [], i || r || (a = i = ""), this
          },
          locked: function () {
            return !!s
          },
          fireWith: function (t, e) {
            return s || (e = [t, (e = e || []).slice ? e.slice() : e], l.push(e), r || c()), this
          },
          fire: function () {
            return d.fireWith(this, arguments), this
          },
          fired: function () {
            return !!o
          }
        };
      return d
    }, w.extend({
      Deferred: function (e) {
        var n = [
            ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
            ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
            ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
          ],
          r = "pending",
          i = {
            state: function () {
              return r
            },
            always: function () {
              return o.done(arguments).fail(arguments), this
            },
            catch: function (t) {
              return i.then(null, t)
            },
            pipe: function () {
              var t = arguments;
              return w.Deferred(function (e) {
                w.each(n, function (n, r) {
                  var i = g(t[r[4]]) && t[r[4]];
                  o[r[1]](function () {
                    var t = i && i.apply(this, arguments);
                    t && g(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[r[0] + "With"](this, i ? [t] : arguments)
                  })
                }), t = null
              }).promise()
            },
            then: function (e, r, i) {
              var o = 0;

              function s(e, n, r, i) {
                return function () {
                  var a = this,
                    l = arguments,
                    u = function () {
                      var t, u;
                      if (!(e < o)) {
                        if ((t = r.apply(a, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                        u = t && ("object" == typeof t || "function" == typeof t) && t.then, g(u) ? i ? u.call(t, s(o, n, N, i), s(o, n, L, i)) : (o++, u.call(t, s(o, n, N, i), s(o, n, L, i), s(o, n, N, n.notifyWith))) : (r !== N && (a = void 0, l = [t]), (i || n.resolveWith)(a, l))
                      }
                    },
                    c = i ? u : function () {
                      try {
                        u()
                      } catch (t) {
                        w.Deferred.exceptionHook && w.Deferred.exceptionHook(t, c.stackTrace), e + 1 >= o && (r !== L && (a = void 0, l = [t]), n.rejectWith(a, l))
                      }
                    };
                  e ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), t.setTimeout(c))
                }
              }
              return w.Deferred(function (t) {
                n[0][3].add(s(0, t, g(i) ? i : N, t.notifyWith)), n[1][3].add(s(0, t, g(e) ? e : N)), n[2][3].add(s(0, t, g(r) ? r : L))
              }).promise()
            },
            promise: function (t) {
              return null != t ? w.extend(t, i) : i
            }
          },
          o = {};
        return w.each(n, function (t, e) {
          var s = e[2],
            a = e[5];
          i[e[1]] = s.add, a && s.add(function () {
            r = a
          }, n[3 - t][2].disable, n[3 - t][3].disable, n[0][2].lock, n[0][3].lock), s.add(e[3].fire), o[e[0]] = function () {
            return o[e[0] + "With"](this === o ? void 0 : this, arguments), this
          }, o[e[0] + "With"] = s.fireWith
        }), i.promise(o), e && e.call(o, o), o
      },
      when: function (t) {
        var e = arguments.length,
          n = e,
          r = Array(n),
          i = o.call(arguments),
          s = w.Deferred(),
          a = function (t) {
            return function (n) {
              r[t] = this, i[t] = arguments.length > 1 ? o.call(arguments) : n, --e || s.resolveWith(r, i)
            }
          };
        if (e <= 1 && (F(t, s.done(a(n)).resolve, s.reject, !e), "pending" === s.state() || g(i[n] && i[n].then))) return s.then();
        for (; n--;) F(i[n], a(n), s.reject);
        return s.promise()
      }
    });
    var j = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w.Deferred.exceptionHook = function (e, n) {
      t.console && t.console.warn && e && j.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n)
    }, w.readyException = function (e) {
      t.setTimeout(function () {
        throw e
      })
    };
    var B = w.Deferred();

    function z() {
      r.removeEventListener("DOMContentLoaded", z), t.removeEventListener("load", z), w.ready()
    }
    w.fn.ready = function (t) {
      return B.then(t).catch(function (t) {
        w.readyException(t)
      }), this
    }, w.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (t) {
        (!0 === t ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== t && --w.readyWait > 0 || B.resolveWith(r, [w]))
      }
    }), w.ready.then = B.then, "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? t.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", z), t.addEventListener("load", z));
    var W = function (t, e, n, r, i, o, s) {
        var a = 0,
          l = t.length,
          u = null == n;
        if ("object" === b(n))
          for (a in i = !0, n) W(t, e, a, n[a], !0, o, s);
        else if (void 0 !== r && (i = !0, g(r) || (s = !0), u && (s ? (e.call(t, r), e = null) : (u = e, e = function (t, e, n) {
            return u.call(w(t), n)
          })), e))
          for (; a < l; a++) e(t[a], n, s ? r : r.call(t[a], a, e(t[a], n)));
        return i ? t : u ? e.call(t) : l ? e(t[0], n) : o
      },
      Y = /^-ms-/,
      U = /-([a-z])/g;

    function V(t, e) {
      return e.toUpperCase()
    }

    function G(t) {
      return t.replace(Y, "ms-").replace(U, V)
    }
    var q = function (t) {
      return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    };

    function X() {
      this.expando = w.expando + X.uid++
    }
    X.uid = 1, X.prototype = {
      cache: function (t) {
        var e = t[this.expando];
        return e || (e = {}, q(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
          value: e,
          configurable: !0
        }))), e
      },
      set: function (t, e, n) {
        var r, i = this.cache(t);
        if ("string" == typeof e) i[G(e)] = n;
        else
          for (r in e) i[G(r)] = e[r];
        return i
      },
      get: function (t, e) {
        return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][G(e)]
      },
      access: function (t, e, n) {
        return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
      },
      remove: function (t, e) {
        var n, r = t[this.expando];
        if (void 0 !== r) {
          if (void 0 !== e) {
            n = (e = Array.isArray(e) ? e.map(G) : (e = G(e)) in r ? [e] : e.match(H) || []).length;
            for (; n--;) delete r[e[n]]
          }(void 0 === e || w.isEmptyObject(r)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
        }
      },
      hasData: function (t) {
        var e = t[this.expando];
        return void 0 !== e && !w.isEmptyObject(e)
      }
    };
    var $ = new X,
      Q = new X,
      Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      K = /[A-Z]/g;

    function J(t, e, n) {
      var r, i;
      if (void 0 === n && 1 === t.nodeType)
        if (r = "data-" + e.replace(K, "-$&").toLowerCase(), "string" == typeof (n = t.getAttribute(r))) {
          try {
            n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : Z.test(i) ? JSON.parse(i) : i)
          } catch (t) {}
          Q.set(t, e, n)
        } else n = void 0;
      return n
    }
    w.extend({
      hasData: function (t) {
        return Q.hasData(t) || $.hasData(t)
      },
      data: function (t, e, n) {
        return Q.access(t, e, n)
      },
      removeData: function (t, e) {
        Q.remove(t, e)
      },
      _data: function (t, e, n) {
        return $.access(t, e, n)
      },
      _removeData: function (t, e) {
        $.remove(t, e)
      }
    }), w.fn.extend({
      data: function (t, e) {
        var n, r, i, o = this[0],
          s = o && o.attributes;
        if (void 0 === t) {
          if (this.length && (i = Q.get(o), 1 === o.nodeType && !$.get(o, "hasDataAttrs"))) {
            for (n = s.length; n--;) s[n] && 0 === (r = s[n].name).indexOf("data-") && (r = G(r.slice(5)), J(o, r, i[r]));
            $.set(o, "hasDataAttrs", !0)
          }
          return i
        }
        return "object" == typeof t ? this.each(function () {
          Q.set(this, t)
        }) : W(this, function (e) {
          var n;
          if (o && void 0 === e) {
            if (void 0 !== (n = Q.get(o, t))) return n;
            if (void 0 !== (n = J(o, t))) return n
          } else this.each(function () {
            Q.set(this, t, e)
          })
        }, null, e, arguments.length > 1, null, !0)
      },
      removeData: function (t) {
        return this.each(function () {
          Q.remove(this, t)
        })
      }
    }), w.extend({
      queue: function (t, e, n) {
        var r;
        if (t) return e = (e || "fx") + "queue", r = $.get(t, e), n && (!r || Array.isArray(n) ? r = $.access(t, e, w.makeArray(n)) : r.push(n)), r || []
      },
      dequeue: function (t, e) {
        e = e || "fx";
        var n = w.queue(t, e),
          r = n.length,
          i = n.shift(),
          o = w._queueHooks(t, e);
        "inprogress" === i && (i = n.shift(), r--), i && ("fx" === e && n.unshift("inprogress"), delete o.stop, i.call(t, function () {
          w.dequeue(t, e)
        }, o)), !r && o && o.empty.fire()
      },
      _queueHooks: function (t, e) {
        var n = e + "queueHooks";
        return $.get(t, n) || $.access(t, n, {
          empty: w.Callbacks("once memory").add(function () {
            $.remove(t, [e + "queue", n])
          })
        })
      }
    }), w.fn.extend({
      queue: function (t, e) {
        var n = 2;
        return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? w.queue(this[0], t) : void 0 === e ? this : this.each(function () {
          var n = w.queue(this, t, e);
          w._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && w.dequeue(this, t)
        })
      },
      dequeue: function (t) {
        return this.each(function () {
          w.dequeue(this, t)
        })
      },
      clearQueue: function (t) {
        return this.queue(t || "fx", [])
      },
      promise: function (t, e) {
        var n, r = 1,
          i = w.Deferred(),
          o = this,
          s = this.length,
          a = function () {
            --r || i.resolveWith(o, [o])
          };
        for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)(n = $.get(o[s], t + "queueHooks")) && n.empty && (r++, n.empty.add(a));
        return a(), i.promise(e)
      }
    });
    var tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      et = new RegExp("^(?:([+-])=|)(" + tt + ")([a-z%]*)$", "i"),
      nt = ["Top", "Right", "Bottom", "Left"],
      rt = function (t, e) {
        return "none" === (t = e || t).style.display || "" === t.style.display && w.contains(t.ownerDocument, t) && "none" === w.css(t, "display")
      },
      it = function (t, e, n, r) {
        var i, o, s = {};
        for (o in e) s[o] = t.style[o], t.style[o] = e[o];
        for (o in i = n.apply(t, r || []), e) t.style[o] = s[o];
        return i
      };

    function ot(t, e, n, r) {
      var i, o, s = 20,
        a = r ? function () {
          return r.cur()
        } : function () {
          return w.css(t, e, "")
        },
        l = a(),
        u = n && n[3] || (w.cssNumber[e] ? "" : "px"),
        c = (w.cssNumber[e] || "px" !== u && +l) && et.exec(w.css(t, e));
      if (c && c[3] !== u) {
        for (l /= 2, u = u || c[3], c = +l || 1; s--;) w.style(t, e, c + u), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), c /= o;
        c *= 2, w.style(t, e, c + u), n = n || []
      }
      return n && (c = +c || +l || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = u, r.start = c, r.end = i)), i
    }
    var st = {};

    function at(t, e) {
      for (var n, r, i = [], o = 0, s = t.length; o < s; o++)(r = t[o]).style && (n = r.style.display, e ? ("none" === n && (i[o] = $.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && rt(r) && (i[o] = (l = void 0, u = void 0, void 0, d = void 0, u = (a = r).ownerDocument, c = a.nodeName, (d = st[c]) || (l = u.body.appendChild(u.createElement(c)), d = w.css(l, "display"), l.parentNode.removeChild(l), "none" === d && (d = "block"), st[c] = d, d)))) : "none" !== n && (i[o] = "none", $.set(r, "display", n)));
      var a, l, u, c, d;
      for (o = 0; o < s; o++) null != i[o] && (t[o].style.display = i[o]);
      return t
    }
    w.fn.extend({
      show: function () {
        return at(this, !0)
      },
      hide: function () {
        return at(this)
      },
      toggle: function (t) {
        return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
          rt(this) ? w(this).show() : w(this).hide()
        })
      }
    });
    var lt = /^(?:checkbox|radio)$/i,
      ut = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      ct = /^$|^module$|\/(?:java|ecma)script/i,
      dt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };

    function ht(t, e) {
      var n;
      return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && E(t, e) ? w.merge([t], n) : n
    }

    function ft(t, e) {
      for (var n = 0, r = t.length; n < r; n++) $.set(t[n], "globalEval", !e || $.get(e[n], "globalEval"))
    }
    dt.optgroup = dt.option, dt.tbody = dt.tfoot = dt.colgroup = dt.caption = dt.thead, dt.th = dt.td;
    var pt, gt, mt = /<|&#?\w+;/;

    function vt(t, e, n, r, i) {
      for (var o, s, a, l, u, c, d = e.createDocumentFragment(), h = [], f = 0, p = t.length; f < p; f++)
        if ((o = t[f]) || 0 === o)
          if ("object" === b(o)) w.merge(h, o.nodeType ? [o] : o);
          else if (mt.test(o)) {
        for (s = s || d.appendChild(e.createElement("div")), a = (ut.exec(o) || ["", ""])[1].toLowerCase(), l = dt[a] || dt._default, s.innerHTML = l[1] + w.htmlPrefilter(o) + l[2], c = l[0]; c--;) s = s.lastChild;
        w.merge(h, s.childNodes), (s = d.firstChild).textContent = ""
      } else h.push(e.createTextNode(o));
      for (d.textContent = "", f = 0; o = h[f++];)
        if (r && w.inArray(o, r) > -1) i && i.push(o);
        else if (u = w.contains(o.ownerDocument, o), s = ht(d.appendChild(o), "script"), u && ft(s), n)
        for (c = 0; o = s[c++];) ct.test(o.type || "") && n.push(o);
      return d
    }
    pt = r.createDocumentFragment().appendChild(r.createElement("div")), (gt = r.createElement("input")).setAttribute("type", "radio"), gt.setAttribute("checked", "checked"), gt.setAttribute("name", "t"), pt.appendChild(gt), p.checkClone = pt.cloneNode(!0).cloneNode(!0).lastChild.checked, pt.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!pt.cloneNode(!0).lastChild.defaultValue;
    var yt = r.documentElement,
      bt = /^key/,
      wt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      _t = /^([^.]*)(?:\.(.+)|)/;

    function St() {
      return !0
    }

    function Dt() {
      return !1
    }

    function xt() {
      try {
        return r.activeElement
      } catch (t) {}
    }

    function Ct(t, e, n, r, i, o) {
      var s, a;
      if ("object" == typeof e) {
        for (a in "string" != typeof n && (r = r || n, n = void 0), e) Ct(t, a, n, r, e[a], o);
        return t
      }
      if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Dt;
      else if (!i) return t;
      return 1 === o && (s = i, (i = function (t) {
        return w().off(t), s.apply(this, arguments)
      }).guid = s.guid || (s.guid = w.guid++)), t.each(function () {
        w.event.add(this, e, i, r, n)
      })
    }
    w.event = {
      global: {},
      add: function (t, e, n, r, i) {
        var o, s, a, l, u, c, d, h, f, p, g, m = $.get(t);
        if (m)
          for (n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(yt, i), n.guid || (n.guid = w.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function (e) {
              return void 0 !== w && w.event.triggered !== e.type ? w.event.dispatch.apply(t, arguments) : void 0
            }), u = (e = (e || "").match(H) || [""]).length; u--;) f = g = (a = _t.exec(e[u]) || [])[1], p = (a[2] || "").split(".").sort(), f && (d = w.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, d = w.event.special[f] || {}, c = w.extend({
            type: f,
            origType: g,
            data: r,
            handler: n,
            guid: n.guid,
            selector: i,
            needsContext: i && w.expr.match.needsContext.test(i),
            namespace: p.join(".")
          }, o), (h = l[f]) || ((h = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, r, p, s) || t.addEventListener && t.addEventListener(f, s)), d.add && (d.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? h.splice(h.delegateCount++, 0, c) : h.push(c), w.event.global[f] = !0)
      },
      remove: function (t, e, n, r, i) {
        var o, s, a, l, u, c, d, h, f, p, g, m = $.hasData(t) && $.get(t);
        if (m && (l = m.events)) {
          for (u = (e = (e || "").match(H) || [""]).length; u--;)
            if (f = g = (a = _t.exec(e[u]) || [])[1], p = (a[2] || "").split(".").sort(), f) {
              for (d = w.event.special[f] || {}, h = l[f = (r ? d.delegateType : d.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = h.length; o--;) c = h[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (h.splice(o, 1), c.selector && h.delegateCount--, d.remove && d.remove.call(t, c));
              s && !h.length && (d.teardown && !1 !== d.teardown.call(t, p, m.handle) || w.removeEvent(t, f, m.handle), delete l[f])
            } else
              for (f in l) w.event.remove(t, f + e[u], n, r, !0);
          w.isEmptyObject(l) && $.remove(t, "handle events")
        }
      },
      dispatch: function (t) {
        var e, n, r, i, o, s, a = w.event.fix(t),
          l = new Array(arguments.length),
          u = ($.get(this, "events") || {})[a.type] || [],
          c = w.event.special[a.type] || {};
        for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
        if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
          for (s = w.event.handlers.call(this, a, u), e = 0;
            (i = s[e++]) && !a.isPropagationStopped();)
            for (a.currentTarget = i.elem, n = 0;
              (o = i.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (r = ((w.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, l)) && !1 === (a.result = r) && (a.preventDefault(), a.stopPropagation()));
          return c.postDispatch && c.postDispatch.call(this, a), a.result
        }
      },
      handlers: function (t, e) {
        var n, r, i, o, s, a = [],
          l = e.delegateCount,
          u = t.target;
        if (l && u.nodeType && !("click" === t.type && t.button >= 1))
          for (; u !== this; u = u.parentNode || this)
            if (1 === u.nodeType && ("click" !== t.type || !0 !== u.disabled)) {
              for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[i = (r = e[n]).selector + " "] && (s[i] = r.needsContext ? w(i, this).index(u) > -1 : w.find(i, this, null, [u]).length), s[i] && o.push(r);
              o.length && a.push({
                elem: u,
                handlers: o
              })
            } return u = this, l < e.length && a.push({
          elem: u,
          handlers: e.slice(l)
        }), a
      },
      addProp: function (t, e) {
        Object.defineProperty(w.Event.prototype, t, {
          enumerable: !0,
          configurable: !0,
          get: g(e) ? function () {
            if (this.originalEvent) return e(this.originalEvent)
          } : function () {
            if (this.originalEvent) return this.originalEvent[t]
          },
          set: function (e) {
            Object.defineProperty(this, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: e
            })
          }
        })
      },
      fix: function (t) {
        return t[w.expando] ? t : new w.Event(t)
      },
      special: {
        load: {
          noBubble: !0
        },
        focus: {
          trigger: function () {
            if (this !== xt() && this.focus) return this.focus(), !1
          },
          delegateType: "focusin"
        },
        blur: {
          trigger: function () {
            if (this === xt() && this.blur) return this.blur(), !1
          },
          delegateType: "focusout"
        },
        click: {
          trigger: function () {
            if ("checkbox" === this.type && this.click && E(this, "input")) return this.click(), !1
          },
          _default: function (t) {
            return E(t.target, "a")
          }
        },
        beforeunload: {
          postDispatch: function (t) {
            void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
          }
        }
      }
    }, w.removeEvent = function (t, e, n) {
      t.removeEventListener && t.removeEventListener(e, n)
    }, w.Event = function (t, e) {
      if (!(this instanceof w.Event)) return new w.Event(t, e);
      t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? St : Dt, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && w.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[w.expando] = !0
    }, w.Event.prototype = {
      constructor: w.Event,
      isDefaultPrevented: Dt,
      isPropagationStopped: Dt,
      isImmediatePropagationStopped: Dt,
      isSimulated: !1,
      preventDefault: function () {
        var t = this.originalEvent;
        this.isDefaultPrevented = St, t && !this.isSimulated && t.preventDefault()
      },
      stopPropagation: function () {
        var t = this.originalEvent;
        this.isPropagationStopped = St, t && !this.isSimulated && t.stopPropagation()
      },
      stopImmediatePropagation: function () {
        var t = this.originalEvent;
        this.isImmediatePropagationStopped = St, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
      }
    }, w.each({
      altKey: !0,
      bubbles: !0,
      cancelable: !0,
      changedTouches: !0,
      ctrlKey: !0,
      detail: !0,
      eventPhase: !0,
      metaKey: !0,
      pageX: !0,
      pageY: !0,
      shiftKey: !0,
      view: !0,
      char: !0,
      charCode: !0,
      key: !0,
      keyCode: !0,
      button: !0,
      buttons: !0,
      clientX: !0,
      clientY: !0,
      offsetX: !0,
      offsetY: !0,
      pointerId: !0,
      pointerType: !0,
      screenX: !0,
      screenY: !0,
      targetTouches: !0,
      toElement: !0,
      touches: !0,
      which: function (t) {
        var e = t.button;
        return null == t.which && bt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && wt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
      }
    }, w.event.addProp), w.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function (t, e) {
      w.event.special[t] = {
        delegateType: e,
        bindType: e,
        handle: function (t) {
          var n, r = t.relatedTarget,
            i = t.handleObj;
          return r && (r === this || w.contains(this, r)) || (t.type = i.origType, n = i.handler.apply(this, arguments), t.type = e), n
        }
      }
    }), w.fn.extend({
      on: function (t, e, n, r) {
        return Ct(this, t, e, n, r)
      },
      one: function (t, e, n, r) {
        return Ct(this, t, e, n, r, 1)
      },
      off: function (t, e, n) {
        var r, i;
        if (t && t.preventDefault && t.handleObj) return r = t.handleObj, w(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
        if ("object" == typeof t) {
          for (i in t) this.off(i, e, t[i]);
          return this
        }
        return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = Dt), this.each(function () {
          w.event.remove(this, t, n, e)
        })
      }
    });
    var Tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      Et = /<script|<style|<link/i,
      Mt = /checked\s*(?:[^=]|=\s*.checked.)/i,
      It = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Rt(t, e) {
      return E(t, "table") && E(11 !== e.nodeType ? e : e.firstChild, "tr") && w(t).children("tbody")[0] || t
    }

    function At(t) {
      return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function Pt(t) {
      return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
    }

    function Ot(t, e) {
      var n, r, i, o, s, a, l, u;
      if (1 === e.nodeType) {
        if ($.hasData(t) && (o = $.access(t), s = $.set(e, o), u = o.events))
          for (i in delete s.handle, s.events = {}, u)
            for (n = 0, r = u[i].length; n < r; n++) w.event.add(e, i, u[i][n]);
        Q.hasData(t) && (a = Q.access(t), l = w.extend({}, a), Q.set(e, l))
      }
    }

    function kt(t, e, n, r) {
      e = s.apply([], e);
      var i, o, a, l, u, c, d = 0,
        h = t.length,
        f = h - 1,
        m = e[0],
        v = g(m);
      if (v || h > 1 && "string" == typeof m && !p.checkClone && Mt.test(m)) return t.each(function (i) {
        var o = t.eq(i);
        v && (e[0] = m.call(this, i, o.html())), kt(o, e, n, r)
      });
      if (h && (o = (i = vt(e, t[0].ownerDocument, !1, t, r)).firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
        for (l = (a = w.map(ht(i, "script"), At)).length; d < h; d++) u = i, d !== f && (u = w.clone(u, !0, !0), l && w.merge(a, ht(u, "script"))), n.call(t[d], u, d);
        if (l)
          for (c = a[a.length - 1].ownerDocument, w.map(a, Pt), d = 0; d < l; d++) u = a[d], ct.test(u.type || "") && !$.access(u, "globalEval") && w.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(u.src) : y(u.textContent.replace(It, ""), c, u))
      }
      return t
    }

    function Ht(t, e, n) {
      for (var r, i = e ? w.filter(e, t) : t, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || w.cleanData(ht(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ft(ht(r, "script")), r.parentNode.removeChild(r));
      return t
    }
    w.extend({
      htmlPrefilter: function (t) {
        return t.replace(Tt, "<$1></$2>")
      },
      clone: function (t, e, n) {
        var r, i, o, s, a, l, u, c = t.cloneNode(!0),
          d = w.contains(t.ownerDocument, t);
        if (!(p.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || w.isXMLDoc(t)))
          for (s = ht(c), r = 0, i = (o = ht(t)).length; r < i; r++) a = o[r], l = s[r], void 0, "input" === (u = l.nodeName.toLowerCase()) && lt.test(a.type) ? l.checked = a.checked : "input" !== u && "textarea" !== u || (l.defaultValue = a.defaultValue);
        if (e)
          if (n)
            for (o = o || ht(t), s = s || ht(c), r = 0, i = o.length; r < i; r++) Ot(o[r], s[r]);
          else Ot(t, c);
        return (s = ht(c, "script")).length > 0 && ft(s, !d && ht(t, "script")), c
      },
      cleanData: function (t) {
        for (var e, n, r, i = w.event.special, o = 0; void 0 !== (n = t[o]); o++)
          if (q(n)) {
            if (e = n[$.expando]) {
              if (e.events)
                for (r in e.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, e.handle);
              n[$.expando] = void 0
            }
            n[Q.expando] && (n[Q.expando] = void 0)
          }
      }
    }), w.fn.extend({
      detach: function (t) {
        return Ht(this, t, !0)
      },
      remove: function (t) {
        return Ht(this, t)
      },
      text: function (t) {
        return W(this, function (t) {
          return void 0 === t ? w.text(this) : this.empty().each(function () {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
          })
        }, null, t, arguments.length)
      },
      append: function () {
        return kt(this, arguments, function (t) {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Rt(this, t).appendChild(t)
        })
      },
      prepend: function () {
        return kt(this, arguments, function (t) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var e = Rt(this, t);
            e.insertBefore(t, e.firstChild)
          }
        })
      },
      before: function () {
        return kt(this, arguments, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this)
        })
      },
      after: function () {
        return kt(this, arguments, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
        })
      },
      empty: function () {
        for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (w.cleanData(ht(t, !1)), t.textContent = "");
        return this
      },
      clone: function (t, e) {
        return t = null != t && t, e = null == e ? t : e, this.map(function () {
          return w.clone(this, t, e)
        })
      },
      html: function (t) {
        return W(this, function (t) {
          var e = this[0] || {},
            n = 0,
            r = this.length;
          if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
          if ("string" == typeof t && !Et.test(t) && !dt[(ut.exec(t) || ["", ""])[1].toLowerCase()]) {
            t = w.htmlPrefilter(t);
            try {
              for (; n < r; n++) 1 === (e = this[n] || {}).nodeType && (w.cleanData(ht(e, !1)), e.innerHTML = t);
              e = 0
            } catch (t) {}
          }
          e && this.empty().append(t)
        }, null, t, arguments.length)
      },
      replaceWith: function () {
        var t = [];
        return kt(this, arguments, function (e) {
          var n = this.parentNode;
          w.inArray(this, t) < 0 && (w.cleanData(ht(this)), n && n.replaceChild(e, this))
        }, t)
      }
    }), w.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function (t, e) {
      w.fn[t] = function (t) {
        for (var n, r = [], i = w(t), o = i.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), w(i[s])[e](n), a.apply(r, n.get());
        return this.pushStack(r)
      }
    });
    var Nt = new RegExp("^(" + tt + ")(?!px)[a-z%]+$", "i"),
      Lt = function (e) {
        var n = e.ownerDocument.defaultView;
        return n && n.opener || (n = t), n.getComputedStyle(e)
      },
      Ft = new RegExp(nt.join("|"), "i");

    function jt(t, e, n) {
      var r, i, o, s, a = t.style;
      return (n = n || Lt(t)) && ("" !== (s = n.getPropertyValue(e) || n[e]) || w.contains(t.ownerDocument, t) || (s = w.style(t, e)), !p.pixelBoxStyles() && Nt.test(s) && Ft.test(e) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function Bt(t, e) {
      return {
        get: function () {
          if (!t()) return (this.get = e).apply(this, arguments);
          delete this.get
        }
      }
    }! function () {
      function e() {
        if (c) {
          u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", yt.appendChild(u).appendChild(c);
          var e = t.getComputedStyle(c);
          i = "1%" !== e.top, l = 12 === n(e.marginLeft), c.style.right = "60%", a = 36 === n(e.right), o = 36 === n(e.width), c.style.position = "absolute", s = 36 === c.offsetWidth || "absolute", yt.removeChild(u), c = null
        }
      }

      function n(t) {
        return Math.round(parseFloat(t))
      }
      var i, o, s, a, l, u = r.createElement("div"),
        c = r.createElement("div");
      c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(p, {
        boxSizingReliable: function () {
          return e(), o
        },
        pixelBoxStyles: function () {
          return e(), a
        },
        pixelPosition: function () {
          return e(), i
        },
        reliableMarginLeft: function () {
          return e(), l
        },
        scrollboxSize: function () {
          return e(), s
        }
      }))
    }();
    var zt = /^(none|table(?!-c[ea]).+)/,
      Wt = /^--/,
      Yt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
      Ut = {
        letterSpacing: "0",
        fontWeight: "400"
      },
      Vt = ["Webkit", "Moz", "ms"],
      Gt = r.createElement("div").style;

    function qt(t) {
      var e = w.cssProps[t];
      return e || (e = w.cssProps[t] = function (t) {
        if (t in Gt) return t;
        for (var e = t[0].toUpperCase() + t.slice(1), n = Vt.length; n--;)
          if ((t = Vt[n] + e) in Gt) return t
      }(t) || t), e
    }

    function Xt(t, e, n) {
      var r = et.exec(e);
      return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : e
    }

    function $t(t, e, n, r, i, o) {
      var s = "width" === e ? 1 : 0,
        a = 0,
        l = 0;
      if (n === (r ? "border" : "content")) return 0;
      for (; s < 4; s += 2) "margin" === n && (l += w.css(t, n + nt[s], !0, i)), r ? ("content" === n && (l -= w.css(t, "padding" + nt[s], !0, i)), "margin" !== n && (l -= w.css(t, "border" + nt[s] + "Width", !0, i))) : (l += w.css(t, "padding" + nt[s], !0, i), "padding" !== n ? l += w.css(t, "border" + nt[s] + "Width", !0, i) : a += w.css(t, "border" + nt[s] + "Width", !0, i));
      return !r && o >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - o - l - a - .5))), l
    }

    function Qt(t, e, n) {
      var r = Lt(t),
        i = jt(t, e, r),
        o = "border-box" === w.css(t, "boxSizing", !1, r),
        s = o;
      if (Nt.test(i)) {
        if (!n) return i;
        i = "auto"
      }
      return s = s && (p.boxSizingReliable() || i === t.style[e]), ("auto" === i || !parseFloat(i) && "inline" === w.css(t, "display", !1, r)) && (i = t["offset" + e[0].toUpperCase() + e.slice(1)], s = !0), (i = parseFloat(i) || 0) + $t(t, e, n || (o ? "border" : "content"), s, r, i) + "px"
    }

    function Zt(t, e, n, r, i) {
      return new Zt.prototype.init(t, e, n, r, i)
    }
    w.extend({
      cssHooks: {
        opacity: {
          get: function (t, e) {
            if (e) {
              var n = jt(t, "opacity");
              return "" === n ? "1" : n
            }
          }
        }
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {},
      style: function (t, e, n, r) {
        if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
          var i, o, s, a = G(e),
            l = Wt.test(e),
            u = t.style;
          if (l || (e = qt(a)), s = w.cssHooks[e] || w.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (i = s.get(t, !1, r)) ? i : u[e];
          "string" == (o = typeof n) && (i = et.exec(n)) && i[1] && (n = ot(t, e, i), o = "number"), null != n && n == n && ("number" === o && (n += i && i[3] || (w.cssNumber[a] ? "" : "px")), p.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, r)) || (l ? u.setProperty(e, n) : u[e] = n))
        }
      },
      css: function (t, e, n, r) {
        var i, o, s, a = G(e);
        return Wt.test(e) || (e = qt(a)), (s = w.cssHooks[e] || w.cssHooks[a]) && "get" in s && (i = s.get(t, !0, n)), void 0 === i && (i = jt(t, e, r)), "normal" === i && e in Ut && (i = Ut[e]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
      }
    }), w.each(["height", "width"], function (t, e) {
      w.cssHooks[e] = {
        get: function (t, n, r) {
          if (n) return !zt.test(w.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? Qt(t, e, r) : it(t, Yt, function () {
            return Qt(t, e, r)
          })
        },
        set: function (t, n, r) {
          var i, o = Lt(t),
            s = "border-box" === w.css(t, "boxSizing", !1, o),
            a = r && $t(t, e, r, s, o);
          return s && p.scrollboxSize() === o.position && (a -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(o[e]) - $t(t, e, "border", !1, o) - .5)), a && (i = et.exec(n)) && "px" !== (i[3] || "px") && (t.style[e] = n, n = w.css(t, e)), Xt(0, n, a)
        }
      }
    }), w.cssHooks.marginLeft = Bt(p.reliableMarginLeft, function (t, e) {
      if (e) return (parseFloat(jt(t, "marginLeft")) || t.getBoundingClientRect().left - it(t, {
        marginLeft: 0
      }, function () {
        return t.getBoundingClientRect().left
      })) + "px"
    }), w.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function (t, e) {
      w.cssHooks[t + e] = {
        expand: function (n) {
          for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[t + nt[r] + e] = o[r] || o[r - 2] || o[0];
          return i
        }
      }, "margin" !== t && (w.cssHooks[t + e].set = Xt)
    }), w.fn.extend({
      css: function (t, e) {
        return W(this, function (t, e, n) {
          var r, i, o = {},
            s = 0;
          if (Array.isArray(e)) {
            for (r = Lt(t), i = e.length; s < i; s++) o[e[s]] = w.css(t, e[s], !1, r);
            return o
          }
          return void 0 !== n ? w.style(t, e, n) : w.css(t, e)
        }, t, e, arguments.length > 1)
      }
    }), w.Tween = Zt, Zt.prototype = {
      constructor: Zt,
      init: function (t, e, n, r, i, o) {
        this.elem = t, this.prop = n, this.easing = i || w.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px")
      },
      cur: function () {
        var t = Zt.propHooks[this.prop];
        return t && t.get ? t.get(this) : Zt.propHooks._default.get(this)
      },
      run: function (t) {
        var e, n = Zt.propHooks[this.prop];
        return this.options.duration ? this.pos = e = w.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Zt.propHooks._default.set(this), this
      }
    }, Zt.prototype.init.prototype = Zt.prototype, Zt.propHooks = {
      _default: {
        get: function (t) {
          var e;
          return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = w.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
        },
        set: function (t) {
          w.fx.step[t.prop] ? w.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[w.cssProps[t.prop]] && !w.cssHooks[t.prop] ? t.elem[t.prop] = t.now : w.style(t.elem, t.prop, t.now + t.unit)
        }
      }
    }, Zt.propHooks.scrollTop = Zt.propHooks.scrollLeft = {
      set: function (t) {
        t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
      }
    }, w.easing = {
      linear: function (t) {
        return t
      },
      swing: function (t) {
        return .5 - Math.cos(t * Math.PI) / 2
      },
      _default: "swing"
    }, w.fx = Zt.prototype.init, w.fx.step = {};
    var Kt, Jt, te, ee, ne = /^(?:toggle|show|hide)$/,
      re = /queueHooks$/;

    function ie() {
      Jt && (!1 === r.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(ie) : t.setTimeout(ie, w.fx.interval), w.fx.tick())
    }

    function oe() {
      return t.setTimeout(function () {
        Kt = void 0
      }), Kt = Date.now()
    }

    function se(t, e) {
      var n, r = 0,
        i = {
          height: t
        };
      for (e = e ? 1 : 0; r < 4; r += 2 - e) i["margin" + (n = nt[r])] = i["padding" + n] = t;
      return e && (i.opacity = i.width = t), i
    }

    function ae(t, e, n) {
      for (var r, i = (le.tweeners[e] || []).concat(le.tweeners["*"]), o = 0, s = i.length; o < s; o++)
        if (r = i[o].call(n, e, t)) return r
    }

    function le(t, e, n) {
      var r, i, o = 0,
        s = le.prefilters.length,
        a = w.Deferred().always(function () {
          delete l.elem
        }),
        l = function () {
          if (i) return !1;
          for (var e = Kt || oe(), n = Math.max(0, u.startTime + u.duration - e), r = 1 - (n / u.duration || 0), o = 0, s = u.tweens.length; o < s; o++) u.tweens[o].run(r);
          return a.notifyWith(t, [u, r, n]), r < 1 && s ? n : (s || a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u]), !1)
        },
        u = a.promise({
          elem: t,
          props: w.extend({}, e),
          opts: w.extend(!0, {
            specialEasing: {},
            easing: w.easing._default
          }, n),
          originalProperties: e,
          originalOptions: n,
          startTime: Kt || oe(),
          duration: n.duration,
          tweens: [],
          createTween: function (e, n) {
            var r = w.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
            return u.tweens.push(r), r
          },
          stop: function (e) {
            var n = 0,
              r = e ? u.tweens.length : 0;
            if (i) return this;
            for (i = !0; n < r; n++) u.tweens[n].run(1);
            return e ? (a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u, e])) : a.rejectWith(t, [u, e]), this
          }
        }),
        c = u.props;
      for (function (t, e) {
          var n, r, i, o, s;
          for (n in t)
            if (i = e[r = G(n)], o = t[n], Array.isArray(o) && (i = o[1], o = t[n] = o[0]), n !== r && (t[r] = o, delete t[n]), (s = w.cssHooks[r]) && "expand" in s)
              for (n in o = s.expand(o), delete t[r], o) n in t || (t[n] = o[n], e[n] = i);
            else e[r] = i
        }(c, u.opts.specialEasing); o < s; o++)
        if (r = le.prefilters[o].call(u, t, c, u.opts)) return g(r.stop) && (w._queueHooks(u.elem, u.opts.queue).stop = r.stop.bind(r)), r;
      return w.map(c, ae, u), g(u.opts.start) && u.opts.start.call(t, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), w.fx.timer(w.extend(l, {
        elem: t,
        anim: u,
        queue: u.opts.queue
      })), u
    }
    w.Animation = w.extend(le, {
      tweeners: {
        "*": [function (t, e) {
          var n = this.createTween(t, e);
          return ot(n.elem, t, et.exec(e), n), n
        }]
      },
      tweener: function (t, e) {
        g(t) ? (e = t, t = ["*"]) : t = t.match(H);
        for (var n, r = 0, i = t.length; r < i; r++) n = t[r], le.tweeners[n] = le.tweeners[n] || [], le.tweeners[n].unshift(e)
      },
      prefilters: [function (t, e, n) {
        var r, i, o, s, a, l, u, c, d = "width" in e || "height" in e,
          h = this,
          f = {},
          p = t.style,
          g = t.nodeType && rt(t),
          m = $.get(t, "fxshow");
        for (r in n.queue || (null == (s = w._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
            s.unqueued || a()
          }), s.unqueued++, h.always(function () {
            h.always(function () {
              s.unqueued--, w.queue(t, "fx").length || s.empty.fire()
            })
          })), e)
          if (i = e[r], ne.test(i)) {
            if (delete e[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
              if ("show" !== i || !m || void 0 === m[r]) continue;
              g = !0
            }
            f[r] = m && m[r] || w.style(t, r)
          } if ((l = !w.isEmptyObject(e)) || !w.isEmptyObject(f))
          for (r in d && 1 === t.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (u = m && m.display) && (u = $.get(t, "display")), "none" === (c = w.css(t, "display")) && (u ? c = u : (at([t], !0), u = t.style.display || u, c = w.css(t, "display"), at([t]))), ("inline" === c || "inline-block" === c && null != u) && "none" === w.css(t, "float") && (l || (h.done(function () {
              p.display = u
            }), null == u && (c = p.display, u = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always(function () {
              p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
            })), l = !1, f) l || (m ? "hidden" in m && (g = m.hidden) : m = $.access(t, "fxshow", {
            display: u
          }), o && (m.hidden = !g), g && at([t], !0), h.done(function () {
            for (r in g || at([t]), $.remove(t, "fxshow"), f) w.style(t, r, f[r])
          })), l = ae(g ? m[r] : 0, r, h), r in m || (m[r] = l.start, g && (l.end = l.start, l.start = 0))
      }],
      prefilter: function (t, e) {
        e ? le.prefilters.unshift(t) : le.prefilters.push(t)
      }
    }), w.speed = function (t, e, n) {
      var r = t && "object" == typeof t ? w.extend({}, t) : {
        complete: n || !n && e || g(t) && t,
        duration: t,
        easing: n && e || e && !g(e) && e
      };
      return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
        g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue)
      }, r
    }, w.fn.extend({
      fadeTo: function (t, e, n, r) {
        return this.filter(rt).css("opacity", 0).show().end().animate({
          opacity: e
        }, t, n, r)
      },
      animate: function (t, e, n, r) {
        var i = w.isEmptyObject(t),
          o = w.speed(e, n, r),
          s = function () {
            var e = le(this, w.extend({}, t), o);
            (i || $.get(this, "finish")) && e.stop(!0)
          };
        return s.finish = s, i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
      },
      stop: function (t, e, n) {
        var r = function (t) {
          var e = t.stop;
          delete t.stop, e(n)
        };
        return "string" != typeof t && (n = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function () {
          var e = !0,
            i = null != t && t + "queueHooks",
            o = w.timers,
            s = $.get(this);
          if (i) s[i] && s[i].stop && r(s[i]);
          else
            for (i in s) s[i] && s[i].stop && re.test(i) && r(s[i]);
          for (i = o.length; i--;) o[i].elem !== this || null != t && o[i].queue !== t || (o[i].anim.stop(n), e = !1, o.splice(i, 1));
          !e && n || w.dequeue(this, t)
        })
      },
      finish: function (t) {
        return !1 !== t && (t = t || "fx"), this.each(function () {
          var e, n = $.get(this),
            r = n[t + "queue"],
            i = n[t + "queueHooks"],
            o = w.timers,
            s = r ? r.length : 0;
          for (n.finish = !0, w.queue(this, t, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
          for (e = 0; e < s; e++) r[e] && r[e].finish && r[e].finish.call(this);
          delete n.finish
        })
      }
    }), w.each(["toggle", "show", "hide"], function (t, e) {
      var n = w.fn[e];
      w.fn[e] = function (t, r, i) {
        return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(se(e, !0), t, r, i)
      }
    }), w.each({
      slideDown: se("show"),
      slideUp: se("hide"),
      slideToggle: se("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function (t, e) {
      w.fn[t] = function (t, n, r) {
        return this.animate(e, t, n, r)
      }
    }), w.timers = [], w.fx.tick = function () {
      var t, e = 0,
        n = w.timers;
      for (Kt = Date.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
      n.length || w.fx.stop(), Kt = void 0
    }, w.fx.timer = function (t) {
      w.timers.push(t), w.fx.start()
    }, w.fx.interval = 13, w.fx.start = function () {
      Jt || (Jt = !0, ie())
    }, w.fx.stop = function () {
      Jt = null
    }, w.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, w.fn.delay = function (e, n) {
      return e = w.fx && w.fx.speeds[e] || e, n = n || "fx", this.queue(n, function (n, r) {
        var i = t.setTimeout(n, e);
        r.stop = function () {
          t.clearTimeout(i)
        }
      })
    }, te = r.createElement("input"), ee = r.createElement("select").appendChild(r.createElement("option")), te.type = "checkbox", p.checkOn = "" !== te.value, p.optSelected = ee.selected, (te = r.createElement("input")).value = "t", te.type = "radio", p.radioValue = "t" === te.value;
    var ue, ce = w.expr.attrHandle;
    w.fn.extend({
      attr: function (t, e) {
        return W(this, w.attr, t, e, arguments.length > 1)
      },
      removeAttr: function (t) {
        return this.each(function () {
          w.removeAttr(this, t)
        })
      }
    }), w.extend({
      attr: function (t, e, n) {
        var r, i, o = t.nodeType;
        if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? w.prop(t, e, n) : (1 === o && w.isXMLDoc(t) || (i = w.attrHooks[e.toLowerCase()] || (w.expr.match.bool.test(e) ? ue : void 0)), void 0 !== n ? null === n ? void w.removeAttr(t, e) : i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : (t.setAttribute(e, n + ""), n) : i && "get" in i && null !== (r = i.get(t, e)) ? r : null == (r = w.find.attr(t, e)) ? void 0 : r)
      },
      attrHooks: {
        type: {
          set: function (t, e) {
            if (!p.radioValue && "radio" === e && E(t, "input")) {
              var n = t.value;
              return t.setAttribute("type", e), n && (t.value = n), e
            }
          }
        }
      },
      removeAttr: function (t, e) {
        var n, r = 0,
          i = e && e.match(H);
        if (i && 1 === t.nodeType)
          for (; n = i[r++];) t.removeAttribute(n)
      }
    }), ue = {
      set: function (t, e, n) {
        return !1 === e ? w.removeAttr(t, n) : t.setAttribute(n, n), n
      }
    }, w.each(w.expr.match.bool.source.match(/\w+/g), function (t, e) {
      var n = ce[e] || w.find.attr;
      ce[e] = function (t, e, r) {
        var i, o, s = e.toLowerCase();
        return r || (o = ce[s], ce[s] = i, i = null != n(t, e, r) ? s : null, ce[s] = o), i
      }
    });
    var de = /^(?:input|select|textarea|button)$/i,
      he = /^(?:a|area)$/i;

    function fe(t) {
      return (t.match(H) || []).join(" ")
    }

    function pe(t) {
      return t.getAttribute && t.getAttribute("class") || ""
    }

    function ge(t) {
      return Array.isArray(t) ? t : "string" == typeof t && t.match(H) || []
    }
    w.fn.extend({
      prop: function (t, e) {
        return W(this, w.prop, t, e, arguments.length > 1)
      },
      removeProp: function (t) {
        return this.each(function () {
          delete this[w.propFix[t] || t]
        })
      }
    }), w.extend({
      prop: function (t, e, n) {
        var r, i, o = t.nodeType;
        if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(t) || (e = w.propFix[e] || e, i = w.propHooks[e]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : t[e] = n : i && "get" in i && null !== (r = i.get(t, e)) ? r : t[e]
      },
      propHooks: {
        tabIndex: {
          get: function (t) {
            var e = w.find.attr(t, "tabindex");
            return e ? parseInt(e, 10) : de.test(t.nodeName) || he.test(t.nodeName) && t.href ? 0 : -1
          }
        }
      },
      propFix: {
        for: "htmlFor",
        class: "className"
      }
    }), p.optSelected || (w.propHooks.selected = {
      get: function (t) {
        var e = t.parentNode;
        return e && e.parentNode && e.parentNode.selectedIndex, null
      },
      set: function (t) {
        var e = t.parentNode;
        e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
      }
    }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
      w.propFix[this.toLowerCase()] = this
    }), w.fn.extend({
      addClass: function (t) {
        var e, n, r, i, o, s, a, l = 0;
        if (g(t)) return this.each(function (e) {
          w(this).addClass(t.call(this, e, pe(this)))
        });
        if ((e = ge(t)).length)
          for (; n = this[l++];)
            if (i = pe(n), r = 1 === n.nodeType && " " + fe(i) + " ") {
              for (s = 0; o = e[s++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
              i !== (a = fe(r)) && n.setAttribute("class", a)
            } return this
      },
      removeClass: function (t) {
        var e, n, r, i, o, s, a, l = 0;
        if (g(t)) return this.each(function (e) {
          w(this).removeClass(t.call(this, e, pe(this)))
        });
        if (!arguments.length) return this.attr("class", "");
        if ((e = ge(t)).length)
          for (; n = this[l++];)
            if (i = pe(n), r = 1 === n.nodeType && " " + fe(i) + " ") {
              for (s = 0; o = e[s++];)
                for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
              i !== (a = fe(r)) && n.setAttribute("class", a)
            } return this
      },
      toggleClass: function (t, e) {
        var n = typeof t,
          r = "string" === n || Array.isArray(t);
        return "boolean" == typeof e && r ? e ? this.addClass(t) : this.removeClass(t) : g(t) ? this.each(function (n) {
          w(this).toggleClass(t.call(this, n, pe(this), e), e)
        }) : this.each(function () {
          var e, i, o, s;
          if (r)
            for (i = 0, o = w(this), s = ge(t); e = s[i++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
          else void 0 !== t && "boolean" !== n || ((e = pe(this)) && $.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : $.get(this, "__className__") || ""))
        })
      },
      hasClass: function (t) {
        var e, n, r = 0;
        for (e = " " + t + " "; n = this[r++];)
          if (1 === n.nodeType && (" " + fe(pe(n)) + " ").indexOf(e) > -1) return !0;
        return !1
      }
    });
    var me = /\r/g;
    w.fn.extend({
      val: function (t) {
        var e, n, r, i = this[0];
        return arguments.length ? (r = g(t), this.each(function (n) {
          var i;
          1 === this.nodeType && (null == (i = r ? t.call(this, n, w(this).val()) : t) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function (t) {
            return null == t ? "" : t + ""
          })), (e = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, i, "value") || (this.value = i))
        })) : i ? (e = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(me, "") : null == n ? "" : n : void 0
      }
    }), w.extend({
      valHooks: {
        option: {
          get: function (t) {
            var e = w.find.attr(t, "value");
            return null != e ? e : fe(w.text(t))
          }
        },
        select: {
          get: function (t) {
            var e, n, r, i = t.options,
              o = t.selectedIndex,
              s = "select-one" === t.type,
              a = s ? null : [],
              l = s ? o + 1 : i.length;
            for (r = o < 0 ? l : s ? o : 0; r < l; r++)
              if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !E(n.parentNode, "optgroup"))) {
                if (e = w(n).val(), s) return e;
                a.push(e)
              } return a
          },
          set: function (t, e) {
            for (var n, r, i = t.options, o = w.makeArray(e), s = i.length; s--;)((r = i[s]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
            return n || (t.selectedIndex = -1), o
          }
        }
      }
    }), w.each(["radio", "checkbox"], function () {
      w.valHooks[this] = {
        set: function (t, e) {
          if (Array.isArray(e)) return t.checked = w.inArray(w(t).val(), e) > -1
        }
      }, p.checkOn || (w.valHooks[this].get = function (t) {
        return null === t.getAttribute("value") ? "on" : t.value
      })
    }), p.focusin = "onfocusin" in t;
    var ve = /^(?:focusinfocus|focusoutblur)$/,
      ye = function (t) {
        t.stopPropagation()
      };
    w.extend(w.event, {
      trigger: function (e, n, i, o) {
        var s, a, l, u, c, h, f, p, v = [i || r],
          y = d.call(e, "type") ? e.type : e,
          b = d.call(e, "namespace") ? e.namespace.split(".") : [];
        if (a = p = l = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !ve.test(y + w.event.triggered) && (y.indexOf(".") > -1 && (y = (b = y.split(".")).shift(), b.sort()), c = y.indexOf(":") < 0 && "on" + y, (e = e[w.expando] ? e : new w.Event(y, "object" == typeof e && e)).isTrigger = o ? 2 : 3, e.namespace = b.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : w.makeArray(n, [e]), f = w.event.special[y] || {}, o || !f.trigger || !1 !== f.trigger.apply(i, n))) {
          if (!o && !f.noBubble && !m(i)) {
            for (u = f.delegateType || y, ve.test(u + y) || (a = a.parentNode); a; a = a.parentNode) v.push(a), l = a;
            l === (i.ownerDocument || r) && v.push(l.defaultView || l.parentWindow || t)
          }
          for (s = 0;
            (a = v[s++]) && !e.isPropagationStopped();) p = a, e.type = s > 1 ? u : f.bindType || y, (h = ($.get(a, "events") || {})[e.type] && $.get(a, "handle")) && h.apply(a, n), (h = c && a[c]) && h.apply && q(a) && (e.result = h.apply(a, n), !1 === e.result && e.preventDefault());
          return e.type = y, o || e.isDefaultPrevented() || f._default && !1 !== f._default.apply(v.pop(), n) || !q(i) || c && g(i[y]) && !m(i) && ((l = i[c]) && (i[c] = null), w.event.triggered = y, e.isPropagationStopped() && p.addEventListener(y, ye), i[y](), e.isPropagationStopped() && p.removeEventListener(y, ye), w.event.triggered = void 0, l && (i[c] = l)), e.result
        }
      },
      simulate: function (t, e, n) {
        var r = w.extend(new w.Event, n, {
          type: t,
          isSimulated: !0
        });
        w.event.trigger(r, null, e)
      }
    }), w.fn.extend({
      trigger: function (t, e) {
        return this.each(function () {
          w.event.trigger(t, e, this)
        })
      },
      triggerHandler: function (t, e) {
        var n = this[0];
        if (n) return w.event.trigger(t, e, n, !0)
      }
    }), p.focusin || w.each({
      focus: "focusin",
      blur: "focusout"
    }, function (t, e) {
      var n = function (t) {
        w.event.simulate(e, t.target, w.event.fix(t))
      };
      w.event.special[e] = {
        setup: function () {
          var r = this.ownerDocument || this,
            i = $.access(r, e);
          i || r.addEventListener(t, n, !0), $.access(r, e, (i || 0) + 1)
        },
        teardown: function () {
          var r = this.ownerDocument || this,
            i = $.access(r, e) - 1;
          i ? $.access(r, e, i) : (r.removeEventListener(t, n, !0), $.remove(r, e))
        }
      }
    });
    var be = t.location,
      we = Date.now(),
      _e = /\?/;
    w.parseXML = function (e) {
      var n;
      if (!e || "string" != typeof e) return null;
      try {
        n = (new t.DOMParser).parseFromString(e, "text/xml")
      } catch (t) {
        n = void 0
      }
      return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + e), n
    };
    var Se = /\[\]$/,
      De = /\r?\n/g,
      xe = /^(?:submit|button|image|reset|file)$/i,
      Ce = /^(?:input|select|textarea|keygen)/i;

    function Te(t, e, n, r) {
      var i;
      if (Array.isArray(e)) w.each(e, function (e, i) {
        n || Se.test(t) ? r(t, i) : Te(t + "[" + ("object" == typeof i && null != i ? e : "") + "]", i, n, r)
      });
      else if (n || "object" !== b(e)) r(t, e);
      else
        for (i in e) Te(t + "[" + i + "]", e[i], n, r)
    }
    w.param = function (t, e) {
      var n, r = [],
        i = function (t, e) {
          var n = g(e) ? e() : e;
          r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
        };
      if (Array.isArray(t) || t.jquery && !w.isPlainObject(t)) w.each(t, function () {
        i(this.name, this.value)
      });
      else
        for (n in t) Te(n, t[n], e, i);
      return r.join("&")
    }, w.fn.extend({
      serialize: function () {
        return w.param(this.serializeArray())
      },
      serializeArray: function () {
        return this.map(function () {
          var t = w.prop(this, "elements");
          return t ? w.makeArray(t) : this
        }).filter(function () {
          var t = this.type;
          return this.name && !w(this).is(":disabled") && Ce.test(this.nodeName) && !xe.test(t) && (this.checked || !lt.test(t))
        }).map(function (t, e) {
          var n = w(this).val();
          return null == n ? null : Array.isArray(n) ? w.map(n, function (t) {
            return {
              name: e.name,
              value: t.replace(De, "\r\n")
            }
          }) : {
            name: e.name,
            value: n.replace(De, "\r\n")
          }
        }).get()
      }
    });
    var Ee = /%20/g,
      Me = /#.*$/,
      Ie = /([?&])_=[^&]*/,
      Re = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Ae = /^(?:GET|HEAD)$/,
      Pe = /^\/\//,
      Oe = {},
      ke = {},
      He = "*/".concat("*"),
      Ne = r.createElement("a");

    function Le(t) {
      return function (e, n) {
        "string" != typeof e && (n = e, e = "*");
        var r, i = 0,
          o = e.toLowerCase().match(H) || [];
        if (g(n))
          for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (t[r] = t[r] || []).unshift(n)) : (t[r] = t[r] || []).push(n)
      }
    }

    function Fe(t, e, n, r) {
      var i = {},
        o = t === ke;

      function s(a) {
        var l;
        return i[a] = !0, w.each(t[a] || [], function (t, a) {
          var u = a(e, n, r);
          return "string" != typeof u || o || i[u] ? o ? !(l = u) : void 0 : (e.dataTypes.unshift(u), s(u), !1)
        }), l
      }
      return s(e.dataTypes[0]) || !i["*"] && s("*")
    }

    function je(t, e) {
      var n, r, i = w.ajaxSettings.flatOptions || {};
      for (n in e) void 0 !== e[n] && ((i[n] ? t : r || (r = {}))[n] = e[n]);
      return r && w.extend(!0, t, r), t
    }
    Ne.href = be.href, w.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: be.href,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(be.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": He,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": w.parseXML
        },
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      ajaxSetup: function (t, e) {
        return e ? je(je(t, w.ajaxSettings), e) : je(w.ajaxSettings, t)
      },
      ajaxPrefilter: Le(Oe),
      ajaxTransport: Le(ke),
      ajax: function (e, n) {
        "object" == typeof e && (n = e, e = void 0), n = n || {};
        var i, o, s, a, l, u, c, d, h, f, p = w.ajaxSetup({}, n),
          g = p.context || p,
          m = p.context && (g.nodeType || g.jquery) ? w(g) : w.event,
          v = w.Deferred(),
          y = w.Callbacks("once memory"),
          b = p.statusCode || {},
          _ = {},
          S = {},
          D = "canceled",
          x = {
            readyState: 0,
            getResponseHeader: function (t) {
              var e;
              if (c) {
                if (!a)
                  for (a = {}; e = Re.exec(s);) a[e[1].toLowerCase()] = e[2];
                e = a[t.toLowerCase()]
              }
              return null == e ? null : e
            },
            getAllResponseHeaders: function () {
              return c ? s : null
            },
            setRequestHeader: function (t, e) {
              return null == c && (t = S[t.toLowerCase()] = S[t.toLowerCase()] || t, _[t] = e), this
            },
            overrideMimeType: function (t) {
              return null == c && (p.mimeType = t), this
            },
            statusCode: function (t) {
              var e;
              if (t)
                if (c) x.always(t[x.status]);
                else
                  for (e in t) b[e] = [b[e], t[e]];
              return this
            },
            abort: function (t) {
              var e = t || D;
              return i && i.abort(e), C(0, e), this
            }
          };
        if (v.promise(x), p.url = ((e || p.url || be.href) + "").replace(Pe, be.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(H) || [""], null == p.crossDomain) {
          u = r.createElement("a");
          try {
            u.href = p.url, u.href = u.href, p.crossDomain = Ne.protocol + "//" + Ne.host != u.protocol + "//" + u.host
          } catch (t) {
            p.crossDomain = !0
          }
        }
        if (p.data && p.processData && "string" != typeof p.data && (p.data = w.param(p.data, p.traditional)), Fe(Oe, p, n, x), c) return x;
        for (h in (d = w.event && p.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Ae.test(p.type), o = p.url.replace(Me, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Ee, "+")) : (f = p.url.slice(o.length), p.data && (p.processData || "string" == typeof p.data) && (o += (_e.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (o = o.replace(Ie, "$1"), f = (_e.test(o) ? "&" : "?") + "_=" + we++ + f), p.url = o + f), p.ifModified && (w.lastModified[o] && x.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && x.setRequestHeader("If-None-Match", w.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && x.setRequestHeader("Content-Type", p.contentType), x.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + He + "; q=0.01" : "") : p.accepts["*"]), p.headers) x.setRequestHeader(h, p.headers[h]);
        if (p.beforeSend && (!1 === p.beforeSend.call(g, x, p) || c)) return x.abort();
        if (D = "abort", y.add(p.complete), x.done(p.success), x.fail(p.error), i = Fe(ke, p, n, x)) {
          if (x.readyState = 1, d && m.trigger("ajaxSend", [x, p]), c) return x;
          p.async && p.timeout > 0 && (l = t.setTimeout(function () {
            x.abort("timeout")
          }, p.timeout));
          try {
            c = !1, i.send(_, C)
          } catch (t) {
            if (c) throw t;
            C(-1, t)
          }
        } else C(-1, "No Transport");

        function C(e, n, r, a) {
          var u, h, f, _, S, D = n;
          c || (c = !0, l && t.clearTimeout(l), i = void 0, s = a || "", x.readyState = e > 0 ? 4 : 0, u = e >= 200 && e < 300 || 304 === e, r && (_ = function (t, e, n) {
            for (var r, i, o, s, a = t.contents, l = t.dataTypes;
              "*" === l[0];) l.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
            if (r)
              for (i in a)
                if (a[i] && a[i].test(r)) {
                  l.unshift(i);
                  break
                } if (l[0] in n) o = l[0];
            else {
              for (i in n) {
                if (!l[0] || t.converters[i + " " + l[0]]) {
                  o = i;
                  break
                }
                s || (s = i)
              }
              o = o || s
            }
            if (o) return o !== l[0] && l.unshift(o), n[o]
          }(p, x, r)), _ = function (t, e, n, r) {
            var i, o, s, a, l, u = {},
              c = t.dataTypes.slice();
            if (c[1])
              for (s in t.converters) u[s.toLowerCase()] = t.converters[s];
            for (o = c.shift(); o;)
              if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
              if (!(s = u[l + " " + o] || u["* " + o]))
                for (i in u)
                  if ((a = i.split(" "))[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                    !0 === s ? s = u[i] : !0 !== u[i] && (o = a[0], c.unshift(a[1]));
                    break
                  } if (!0 !== s)
                if (s && t.throws) e = s(e);
                else try {
                  e = s(e)
                } catch (t) {
                  return {
                    state: "parsererror",
                    error: s ? t : "No conversion from " + l + " to " + o
                  }
                }
            }
            return {
              state: "success",
              data: e
            }
          }(p, _, x, u), u ? (p.ifModified && ((S = x.getResponseHeader("Last-Modified")) && (w.lastModified[o] = S), (S = x.getResponseHeader("etag")) && (w.etag[o] = S)), 204 === e || "HEAD" === p.type ? D = "nocontent" : 304 === e ? D = "notmodified" : (D = _.state, h = _.data, u = !(f = _.error))) : (f = D, !e && D || (D = "error", e < 0 && (e = 0))), x.status = e, x.statusText = (n || D) + "", u ? v.resolveWith(g, [h, D, x]) : v.rejectWith(g, [x, D, f]), x.statusCode(b), b = void 0, d && m.trigger(u ? "ajaxSuccess" : "ajaxError", [x, p, u ? h : f]), y.fireWith(g, [x, D]), d && (m.trigger("ajaxComplete", [x, p]), --w.active || w.event.trigger("ajaxStop")))
        }
        return x
      },
      getJSON: function (t, e, n) {
        return w.get(t, e, n, "json")
      },
      getScript: function (t, e) {
        return w.get(t, void 0, e, "script")
      }
    }), w.each(["get", "post"], function (t, e) {
      w[e] = function (t, n, r, i) {
        return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({
          url: t,
          type: e,
          dataType: i,
          data: n,
          success: r
        }, w.isPlainObject(t) && t))
      }
    }), w._evalUrl = function (t) {
      return w.ajax({
        url: t,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0
      })
    }, w.fn.extend({
      wrapAll: function (t) {
        var e;
        return this[0] && (g(t) && (t = t.call(this[0])), e = w(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
          for (var t = this; t.firstElementChild;) t = t.firstElementChild;
          return t
        }).append(this)), this
      },
      wrapInner: function (t) {
        return g(t) ? this.each(function (e) {
          w(this).wrapInner(t.call(this, e))
        }) : this.each(function () {
          var e = w(this),
            n = e.contents();
          n.length ? n.wrapAll(t) : e.append(t)
        })
      },
      wrap: function (t) {
        var e = g(t);
        return this.each(function (n) {
          w(this).wrapAll(e ? t.call(this, n) : t)
        })
      },
      unwrap: function (t) {
        return this.parent(t).not("body").each(function () {
          w(this).replaceWith(this.childNodes)
        }), this
      }
    }), w.expr.pseudos.hidden = function (t) {
      return !w.expr.pseudos.visible(t)
    }, w.expr.pseudos.visible = function (t) {
      return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }, w.ajaxSettings.xhr = function () {
      try {
        return new t.XMLHttpRequest
      } catch (t) {}
    };
    var Be = {
        0: 200,
        1223: 204
      },
      ze = w.ajaxSettings.xhr();
    p.cors = !!ze && "withCredentials" in ze, p.ajax = ze = !!ze, w.ajaxTransport(function (e) {
      var n, r;
      if (p.cors || ze && !e.crossDomain) return {
        send: function (i, o) {
          var s, a = e.xhr();
          if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
            for (s in e.xhrFields) a[s] = e.xhrFields[s];
          for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) a.setRequestHeader(s, i[s]);
          n = function (t) {
            return function () {
              n && (n = r = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Be[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                binary: a.response
              } : {
                text: a.responseText
              }, a.getAllResponseHeaders()))
            }
          }, a.onload = n(), r = a.onerror = a.ontimeout = n("error"), void 0 !== a.onabort ? a.onabort = r : a.onreadystatechange = function () {
            4 === a.readyState && t.setTimeout(function () {
              n && r()
            })
          }, n = n("abort");
          try {
            a.send(e.hasContent && e.data || null)
          } catch (t) {
            if (n) throw t
          }
        },
        abort: function () {
          n && n()
        }
      }
    }), w.ajaxPrefilter(function (t) {
      t.crossDomain && (t.contents.script = !1)
    }), w.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function (t) {
          return w.globalEval(t), t
        }
      }
    }), w.ajaxPrefilter("script", function (t) {
      void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), w.ajaxTransport("script", function (t) {
      var e, n;
      if (t.crossDomain) return {
        send: function (i, o) {
          e = w("<script>").prop({
            charset: t.scriptCharset,
            src: t.url
          }).on("load error", n = function (t) {
            e.remove(), n = null, t && o("error" === t.type ? 404 : 200, t.type)
          }), r.head.appendChild(e[0])
        },
        abort: function () {
          n && n()
        }
      }
    });
    var We, Ye = [],
      Ue = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var t = Ye.pop() || w.expando + "_" + we++;
        return this[t] = !0, t
      }
    }), w.ajaxPrefilter("json jsonp", function (e, n, r) {
      var i, o, s, a = !1 !== e.jsonp && (Ue.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ue.test(e.data) && "data");
      if (a || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = g(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ue, "$1" + i) : !1 !== e.jsonp && (e.url += (_e.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
        return s || w.error(i + " was not called"), s[0]
      }, e.dataTypes[0] = "json", o = t[i], t[i] = function () {
        s = arguments
      }, r.always(function () {
        void 0 === o ? w(t).removeProp(i) : t[i] = o, e[i] && (e.jsonpCallback = n.jsonpCallback, Ye.push(i)), s && g(o) && o(s[0]), s = o = void 0
      }), "script"
    }), p.createHTMLDocument = ((We = r.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === We.childNodes.length), w.parseHTML = function (t, e, n) {
      return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e, e = !1), e || (p.createHTMLDocument ? ((i = (e = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, e.head.appendChild(i)) : e = r), o = M.exec(t), s = !n && [], o ? [e.createElement(o[1])] : (o = vt([t], e, s), s && s.length && w(s).remove(), w.merge([], o.childNodes)));
      var i, o, s
    }, w.fn.load = function (t, e, n) {
      var r, i, o, s = this,
        a = t.indexOf(" ");
      return a > -1 && (r = fe(t.slice(a)), t = t.slice(0, a)), g(e) ? (n = e, e = void 0) : e && "object" == typeof e && (i = "POST"), s.length > 0 && w.ajax({
        url: t,
        type: i || "GET",
        dataType: "html",
        data: e
      }).done(function (t) {
        o = arguments, s.html(r ? w("<div>").append(w.parseHTML(t)).find(r) : t)
      }).always(n && function (t, e) {
        s.each(function () {
          n.apply(this, o || [t.responseText, e, t])
        })
      }), this
    }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
      w.fn[e] = function (t) {
        return this.on(e, t)
      }
    }), w.expr.pseudos.animated = function (t) {
      return w.grep(w.timers, function (e) {
        return t === e.elem
      }).length
    }, w.offset = {
      setOffset: function (t, e, n) {
        var r, i, o, s, a, l, u = w.css(t, "position"),
          c = w(t),
          d = {};
        "static" === u && (t.style.position = "relative"), a = c.offset(), o = w.css(t, "top"), l = w.css(t, "left"), ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1 ? (s = (r = c.position()).top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(l) || 0), g(e) && (e = e.call(t, n, w.extend({}, a))), null != e.top && (d.top = e.top - a.top + s), null != e.left && (d.left = e.left - a.left + i), "using" in e ? e.using.call(t, d) : c.css(d)
      }
    }, w.fn.extend({
      offset: function (t) {
        if (arguments.length) return void 0 === t ? this : this.each(function (e) {
          w.offset.setOffset(this, t, e)
        });
        var e, n, r = this[0];
        return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
          top: e.top + n.pageYOffset,
          left: e.left + n.pageXOffset
        }) : {
          top: 0,
          left: 0
        } : void 0
      },
      position: function () {
        if (this[0]) {
          var t, e, n, r = this[0],
            i = {
              top: 0,
              left: 0
            };
          if ("fixed" === w.css(r, "position")) e = r.getBoundingClientRect();
          else {
            for (e = this.offset(), n = r.ownerDocument, t = r.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === w.css(t, "position");) t = t.parentNode;
            t && t !== r && 1 === t.nodeType && ((i = w(t).offset()).top += w.css(t, "borderTopWidth", !0), i.left += w.css(t, "borderLeftWidth", !0))
          }
          return {
            top: e.top - i.top - w.css(r, "marginTop", !0),
            left: e.left - i.left - w.css(r, "marginLeft", !0)
          }
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (var t = this.offsetParent; t && "static" === w.css(t, "position");) t = t.offsetParent;
          return t || yt
        })
      }
    }), w.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function (t, e) {
      var n = "pageYOffset" === e;
      w.fn[t] = function (r) {
        return W(this, function (t, r, i) {
          var o;
          if (m(t) ? o = t : 9 === t.nodeType && (o = t.defaultView), void 0 === i) return o ? o[e] : t[r];
          o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : t[r] = i
        }, t, r, arguments.length)
      }
    }), w.each(["top", "left"], function (t, e) {
      w.cssHooks[e] = Bt(p.pixelPosition, function (t, n) {
        if (n) return n = jt(t, e), Nt.test(n) ? w(t).position()[e] + "px" : n
      })
    }), w.each({
      Height: "height",
      Width: "width"
    }, function (t, e) {
      w.each({
        padding: "inner" + t,
        content: e,
        "": "outer" + t
      }, function (n, r) {
        w.fn[r] = function (i, o) {
          var s = arguments.length && (n || "boolean" != typeof i),
            a = n || (!0 === i || !0 === o ? "margin" : "border");
          return W(this, function (e, n, i) {
            var o;
            return m(e) ? 0 === r.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === i ? w.css(e, n, a) : w.style(e, n, i, a)
          }, e, s ? i : void 0, s)
        }
      })
    }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, e) {
      w.fn[e] = function (t, n) {
        return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
      }
    }), w.fn.extend({
      hover: function (t, e) {
        return this.mouseenter(t).mouseleave(e || t)
      }
    }), w.fn.extend({
      bind: function (t, e, n) {
        return this.on(t, null, e, n)
      },
      unbind: function (t, e) {
        return this.off(t, null, e)
      },
      delegate: function (t, e, n, r) {
        return this.on(e, t, n, r)
      },
      undelegate: function (t, e, n) {
        return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
      }
    }), w.proxy = function (t, e) {
      var n, r, i;
      if ("string" == typeof e && (n = t[e], e = t, t = n), g(t)) return r = o.call(arguments, 2), (i = function () {
        return t.apply(e || this, r.concat(o.call(arguments)))
      }).guid = t.guid = t.guid || w.guid++, i
    }, w.holdReady = function (t) {
      t ? w.readyWait++ : w.ready(!0)
    }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = E, w.isFunction = g, w.isWindow = m, w.camelCase = G, w.type = b, w.now = Date.now, w.isNumeric = function (t) {
      var e = w.type(t);
      return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
      return w
    });
    var Ve = t.jQuery,
      Ge = t.$;
    return w.noConflict = function (e) {
      return t.$ === w && (t.$ = Ge), e && t.jQuery === w && (t.jQuery = Ve), w
    }, e || (t.jQuery = t.$ = w), w
  }), function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], e) : e(t.bootstrap = {}, t.jQuery)
  }(this, function (t, e) {
    "use strict";

    function n(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
      }
    }

    function r(t, e, r) {
      return e && n(t.prototype, e), r && n(t, r), t
    }

    function i() {
      return (i = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
        }
        return t
      }).apply(this, arguments)
    }
    for (var o, s, a, l, u, c, d, h, f, p, g, m, v, y, b, w, _, S, D, x, C = function (t) {
        var e = !1;
        var n = {
          TRANSITION_END: "bsTransitionEnd",
          getUID: function (t) {
            do {
              t += ~~(1e6 * Math.random())
            } while (document.getElementById(t));
            return t
          },
          getSelectorFromElement: function (e) {
            var n, r = e.getAttribute("data-target");
            r && "#" !== r || (r = e.getAttribute("href") || ""), "#" === r.charAt(0) && (n = r, r = n = "function" == typeof t.escapeSelector ? t.escapeSelector(n).substr(1) : n.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1"));
            try {
              return t(document).find(r).length > 0 ? r : null
            } catch (t) {
              return null
            }
          },
          reflow: function (t) {
            return t.offsetHeight
          },
          triggerTransitionEnd: function (n) {
            t(n).trigger(e.end)
          },
          supportsTransitionEnd: function () {
            return Boolean(e)
          },
          isElement: function (t) {
            return (t[0] || t).nodeType
          },
          typeCheckConfig: function (t, e, r) {
            for (var i in r)
              if (Object.prototype.hasOwnProperty.call(r, i)) {
                var o = r[i],
                  s = e[i],
                  a = s && n.isElement(s) ? "element" : (l = s, {}.toString.call(l).match(/\s([a-zA-Z]+)/)[1].toLowerCase());
                if (!new RegExp(o).test(a)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + o + '".')
              } var l
          }
        };
        return e = ("undefined" == typeof window || !window.QUnit) && {
          end: "transitionend"
        }, t.fn.emulateTransitionEnd = function (e) {
          var r = this,
            i = !1;
          return t(this).one(n.TRANSITION_END, function () {
            i = !0
          }), setTimeout(function () {
            i || n.triggerTransitionEnd(r)
          }, e), this
        }, n.supportsTransitionEnd() && (t.event.special[n.TRANSITION_END] = {
          bindType: e.end,
          delegateType: e.end,
          handle: function (e) {
            if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
          }
        }), n
      }(e = e && e.hasOwnProperty("default") ? e.default : e), T = (s = "alert", l = "." + (a = "bs.alert"), u = (o = e).fn[s], c = {
        CLOSE: "close" + l,
        CLOSED: "closed" + l,
        CLICK_DATA_API: "click" + l + ".data-api"
      }, "alert", "fade", "show", d = function () {
        function t(t) {
          this._element = t
        }
        var e = t.prototype;
        return e.close = function (t) {
          t = t || this._element;
          var e = this._getRootElement(t);
          this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
        }, e.dispose = function () {
          o.removeData(this._element, a), this._element = null
        }, e._getRootElement = function (t) {
          var e = C.getSelectorFromElement(t),
            n = !1;
          return e && (n = o(e)[0]), n || (n = o(t).closest(".alert")[0]), n
        }, e._triggerCloseEvent = function (t) {
          var e = o.Event(c.CLOSE);
          return o(t).trigger(e), e
        }, e._removeElement = function (t) {
          var e = this;
          o(t).removeClass("show"), C.supportsTransitionEnd() && o(t).hasClass("fade") ? o(t).one(C.TRANSITION_END, function (n) {
            return e._destroyElement(t, n)
          }).emulateTransitionEnd(150) : this._destroyElement(t)
        }, e._destroyElement = function (t) {
          o(t).detach().trigger(c.CLOSED).remove()
        }, t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = o(this),
              r = n.data(a);
            r || (r = new t(this), n.data(a, r)), "close" === e && r[e](this)
          })
        }, t._handleDismiss = function (t) {
          return function (e) {
            e && e.preventDefault(), t.close(this)
          }
        }, r(t, null, [{
          key: "VERSION",
          get: function () {
            return "4.0.0"
          }
        }]), t
      }(), o(document).on(c.CLICK_DATA_API, '[data-dismiss="alert"]', d._handleDismiss(new d)), o.fn[s] = d._jQueryInterface, o.fn[s].Constructor = d, o.fn[s].noConflict = function () {
        return o.fn[s] = u, d._jQueryInterface
      }, d), E = (f = "button", g = "." + (p = "bs.button"), m = ".data-api", v = (h = e).fn[f], y = "active", "btn", "focus", b = '[data-toggle^="button"]', w = '[data-toggle="buttons"]', "input", _ = ".active", S = ".btn", D = {
        CLICK_DATA_API: "click" + g + m,
        FOCUS_BLUR_DATA_API: "focus" + g + m + " blur" + g + m
      }, x = function () {
        function t(t) {
          this._element = t
        }
        var e = t.prototype;
        return e.toggle = function () {
          var t = !0,
            e = !0,
            n = h(this._element).closest(w)[0];
          if (n) {
            var r = h(this._element).find("input")[0];
            if (r) {
              if ("radio" === r.type)
                if (r.checked && h(this._element).hasClass(y)) t = !1;
                else {
                  var i = h(n).find(_)[0];
                  i && h(i).removeClass(y)
                } if (t) {
                if (r.hasAttribute("disabled") || n.hasAttribute("disabled") || r.classList.contains("disabled") || n.classList.contains("disabled")) return;
                r.checked = !h(this._element).hasClass(y), h(r).trigger("change")
              }
              r.focus(), e = !1
            }
          }
          e && this._element.setAttribute("aria-pressed", !h(this._element).hasClass(y)), t && h(this._element).toggleClass(y)
        }, e.dispose = function () {
          h.removeData(this._element, p), this._element = null
        }, t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = h(this).data(p);
            n || (n = new t(this), h(this).data(p, n)), "toggle" === e && n[e]()
          })
        }, r(t, null, [{
          key: "VERSION",
          get: function () {
            return "4.0.0"
          }
        }]), t
      }(), h(document).on(D.CLICK_DATA_API, b, function (t) {
        t.preventDefault();
        var e = t.target;
        h(e).hasClass("btn") || (e = h(e).closest(S)), x._jQueryInterface.call(h(e), "toggle")
      }).on(D.FOCUS_BLUR_DATA_API, b, function (t) {
        var e = h(t.target).closest(S)[0];
        h(e).toggleClass("focus", /^focus(in)?$/.test(t.type))
      }), h.fn[f] = x._jQueryInterface, h.fn[f].Constructor = x, h.fn[f].noConflict = function () {
        return h.fn[f] = v, x._jQueryInterface
      }, x), M = function (t) {
        var e = "carousel",
          n = "bs.carousel",
          o = "." + n,
          s = t.fn[e],
          a = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0
          },
          l = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean"
          },
          u = "next",
          c = "prev",
          d = {
            SLIDE: "slide" + o,
            SLID: "slid" + o,
            KEYDOWN: "keydown" + o,
            MOUSEENTER: "mouseenter" + o,
            MOUSELEAVE: "mouseleave" + o,
            TOUCHEND: "touchend" + o,
            LOAD_DATA_API: "load" + o + ".data-api",
            CLICK_DATA_API: "click" + o + ".data-api"
          },
          h = "active",
          f = {
            ACTIVE: ".active",
            ACTIVE_ITEM: ".active.carousel-item",
            ITEM: ".carousel-item",
            NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
            INDICATORS: ".carousel-indicators",
            DATA_SLIDE: "[data-slide], [data-slide-to]",
            DATA_RIDE: '[data-ride="carousel"]'
          },
          p = function () {
            function s(e, n) {
              this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(n), this._element = t(e)[0], this._indicatorsElement = t(this._element).find(f.INDICATORS)[0], this._addEventListeners()
            }
            var p = s.prototype;
            return p.next = function () {
              this._isSliding || this._slide(u)
            }, p.nextWhenVisible = function () {
              !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
            }, p.prev = function () {
              this._isSliding || this._slide(c)
            }, p.pause = function (e) {
              e || (this._isPaused = !0), t(this._element).find(f.NEXT_PREV)[0] && C.supportsTransitionEnd() && (C.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, p.cycle = function (t) {
              t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, p.to = function (e) {
              var n = this;
              this._activeElement = t(this._element).find(f.ACTIVE_ITEM)[0];
              var r = this._getItemIndex(this._activeElement);
              if (!(e > this._items.length - 1 || e < 0))
                if (this._isSliding) t(this._element).one(d.SLID, function () {
                  return n.to(e)
                });
                else {
                  if (r === e) return this.pause(), void this.cycle();
                  var i = e > r ? u : c;
                  this._slide(i, this._items[e])
                }
            }, p.dispose = function () {
              t(this._element).off(o), t.removeData(this._element, n), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, p._getConfig = function (t) {
              return t = i({}, a, t), C.typeCheckConfig(e, t, l), t
            }, p._addEventListeners = function () {
              var e = this;
              this._config.keyboard && t(this._element).on(d.KEYDOWN, function (t) {
                return e._keydown(t)
              }), "hover" === this._config.pause && (t(this._element).on(d.MOUSEENTER, function (t) {
                return e.pause(t)
              }).on(d.MOUSELEAVE, function (t) {
                return e.cycle(t)
              }), "ontouchstart" in document.documentElement && t(this._element).on(d.TOUCHEND, function () {
                e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
                  return e.cycle(t)
                }, 500 + e._config.interval)
              }))
            }, p._keydown = function (t) {
              if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                case 37:
                  t.preventDefault(), this.prev();
                  break;
                case 39:
                  t.preventDefault(), this.next()
              }
            }, p._getItemIndex = function (e) {
              return this._items = t.makeArray(t(e).parent().find(f.ITEM)), this._items.indexOf(e)
            }, p._getItemByDirection = function (t, e) {
              var n = t === u,
                r = t === c,
                i = this._getItemIndex(e),
                o = this._items.length - 1;
              if ((r && 0 === i || n && i === o) && !this._config.wrap) return e;
              var s = (i + (t === c ? -1 : 1)) % this._items.length;
              return -1 === s ? this._items[this._items.length - 1] : this._items[s]
            }, p._triggerSlideEvent = function (e, n) {
              var r = this._getItemIndex(e),
                i = this._getItemIndex(t(this._element).find(f.ACTIVE_ITEM)[0]),
                o = t.Event(d.SLIDE, {
                  relatedTarget: e,
                  direction: n,
                  from: i,
                  to: r
                });
              return t(this._element).trigger(o), o
            }, p._setActiveIndicatorElement = function (e) {
              if (this._indicatorsElement) {
                t(this._indicatorsElement).find(f.ACTIVE).removeClass(h);
                var n = this._indicatorsElement.children[this._getItemIndex(e)];
                n && t(n).addClass(h)
              }
            }, p._slide = function (e, n) {
              var r, i, o, s = this,
                a = t(this._element).find(f.ACTIVE_ITEM)[0],
                l = this._getItemIndex(a),
                c = n || a && this._getItemByDirection(e, a),
                p = this._getItemIndex(c),
                g = Boolean(this._interval);
              if (e === u ? (r = "carousel-item-left", i = "carousel-item-next", o = "left") : (r = "carousel-item-right", i = "carousel-item-prev", o = "right"), c && t(c).hasClass(h)) this._isSliding = !1;
              else if (!this._triggerSlideEvent(c, o).isDefaultPrevented() && a && c) {
                this._isSliding = !0, g && this.pause(), this._setActiveIndicatorElement(c);
                var m = t.Event(d.SLID, {
                  relatedTarget: c,
                  direction: o,
                  from: l,
                  to: p
                });
                C.supportsTransitionEnd() && t(this._element).hasClass("slide") ? (t(c).addClass(i), C.reflow(c), t(a).addClass(r), t(c).addClass(r), t(a).one(C.TRANSITION_END, function () {
                  t(c).removeClass(r + " " + i).addClass(h), t(a).removeClass(h + " " + i + " " + r), s._isSliding = !1, setTimeout(function () {
                    return t(s._element).trigger(m)
                  }, 0)
                }).emulateTransitionEnd(600)) : (t(a).removeClass(h), t(c).addClass(h), this._isSliding = !1, t(this._element).trigger(m)), g && this.cycle()
              }
            }, s._jQueryInterface = function (e) {
              return this.each(function () {
                var r = t(this).data(n),
                  o = i({}, a, t(this).data());
                "object" == typeof e && (o = i({}, o, e));
                var l = "string" == typeof e ? e : o.slide;
                if (r || (r = new s(this, o), t(this).data(n, r)), "number" == typeof e) r.to(e);
                else if ("string" == typeof l) {
                  if (void 0 === r[l]) throw new TypeError('No method named "' + l + '"');
                  r[l]()
                } else o.interval && (r.pause(), r.cycle())
              })
            }, s._dataApiClickHandler = function (e) {
              var r = C.getSelectorFromElement(this);
              if (r) {
                var o = t(r)[0];
                if (o && t(o).hasClass("carousel")) {
                  var a = i({}, t(o).data(), t(this).data()),
                    l = this.getAttribute("data-slide-to");
                  l && (a.interval = !1), s._jQueryInterface.call(t(o), a), l && t(o).data(n).to(l), e.preventDefault()
                }
              }
            }, r(s, null, [{
              key: "VERSION",
              get: function () {
                return "4.0.0"
              }
            }, {
              key: "Default",
              get: function () {
                return a
              }
            }]), s
          }();
        return t(document).on(d.CLICK_DATA_API, f.DATA_SLIDE, p._dataApiClickHandler), t(window).on(d.LOAD_DATA_API, function () {
          t(f.DATA_RIDE).each(function () {
            var e = t(this);
            p._jQueryInterface.call(e, e.data())
          })
        }), t.fn[e] = p._jQueryInterface, t.fn[e].Constructor = p, t.fn[e].noConflict = function () {
          return t.fn[e] = s, p._jQueryInterface
        }, p
      }(e), I = function (t) {
        var e = "collapse",
          n = "bs.collapse",
          o = "." + n,
          s = t.fn[e],
          a = {
            toggle: !0,
            parent: ""
          },
          l = {
            toggle: "boolean",
            parent: "(string|element)"
          },
          u = {
            SHOW: "show" + o,
            SHOWN: "shown" + o,
            HIDE: "hide" + o,
            HIDDEN: "hidden" + o,
            CLICK_DATA_API: "click" + o + ".data-api"
          },
          c = "show",
          d = "collapse",
          h = "collapsing",
          f = "collapsed",
          p = {
            ACTIVES: ".show, .collapsing",
            DATA_TOGGLE: '[data-toggle="collapse"]'
          },
          g = function () {
            function o(e, n) {
              this._isTransitioning = !1, this._element = e, this._config = this._getConfig(n), this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
              for (var r = t(p.DATA_TOGGLE), i = 0; i < r.length; i++) {
                var o = r[i],
                  s = C.getSelectorFromElement(o);
                null !== s && t(s).filter(e).length > 0 && (this._selector = s, this._triggerArray.push(o))
              }
              this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            var s = o.prototype;
            return s.toggle = function () {
              t(this._element).hasClass(c) ? this.hide() : this.show()
            }, s.show = function () {
              var e, r, i = this;
              if (!(this._isTransitioning || t(this._element).hasClass(c) || (this._parent && 0 === (e = t.makeArray(t(this._parent).find(p.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (e = null), e && (r = t(e).not(this._selector).data(n)) && r._isTransitioning))) {
                var s = t.Event(u.SHOW);
                if (t(this._element).trigger(s), !s.isDefaultPrevented()) {
                  e && (o._jQueryInterface.call(t(e).not(this._selector), "hide"), r || t(e).data(n, null));
                  var a = this._getDimension();
                  t(this._element).removeClass(d).addClass(h), this._element.style[a] = 0, this._triggerArray.length > 0 && t(this._triggerArray).removeClass(f).attr("aria-expanded", !0), this.setTransitioning(!0);
                  var l = function () {
                    t(i._element).removeClass(h).addClass(d).addClass(c), i._element.style[a] = "", i.setTransitioning(!1), t(i._element).trigger(u.SHOWN)
                  };
                  if (C.supportsTransitionEnd()) {
                    var g = "scroll" + (a[0].toUpperCase() + a.slice(1));
                    t(this._element).one(C.TRANSITION_END, l).emulateTransitionEnd(600), this._element.style[a] = this._element[g] + "px"
                  } else l()
                }
              }
            }, s.hide = function () {
              var e = this;
              if (!this._isTransitioning && t(this._element).hasClass(c)) {
                var n = t.Event(u.HIDE);
                if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                  var r = this._getDimension();
                  if (this._element.style[r] = this._element.getBoundingClientRect()[r] + "px", C.reflow(this._element), t(this._element).addClass(h).removeClass(d).removeClass(c), this._triggerArray.length > 0)
                    for (var i = 0; i < this._triggerArray.length; i++) {
                      var o = this._triggerArray[i],
                        s = C.getSelectorFromElement(o);
                      null !== s && (t(s).hasClass(c) || t(o).addClass(f).attr("aria-expanded", !1))
                    }
                  this.setTransitioning(!0);
                  var a = function () {
                    e.setTransitioning(!1), t(e._element).removeClass(h).addClass(d).trigger(u.HIDDEN)
                  };
                  this._element.style[r] = "", C.supportsTransitionEnd() ? t(this._element).one(C.TRANSITION_END, a).emulateTransitionEnd(600) : a()
                }
              }
            }, s.setTransitioning = function (t) {
              this._isTransitioning = t
            }, s.dispose = function () {
              t.removeData(this._element, n), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, s._getConfig = function (t) {
              return (t = i({}, a, t)).toggle = Boolean(t.toggle), C.typeCheckConfig(e, t, l), t
            }, s._getDimension = function () {
              return t(this._element).hasClass("width") ? "width" : "height"
            }, s._getParent = function () {
              var e = this,
                n = null;
              C.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = t(this._config.parent)[0];
              var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
              return t(n).find(r).each(function (t, n) {
                e._addAriaAndCollapsedClass(o._getTargetFromElement(n), [n])
              }), n
            }, s._addAriaAndCollapsedClass = function (e, n) {
              if (e) {
                var r = t(e).hasClass(c);
                n.length > 0 && t(n).toggleClass(f, !r).attr("aria-expanded", r)
              }
            }, o._getTargetFromElement = function (e) {
              var n = C.getSelectorFromElement(e);
              return n ? t(n)[0] : null
            }, o._jQueryInterface = function (e) {
              return this.each(function () {
                var r = t(this),
                  s = r.data(n),
                  l = i({}, a, r.data(), "object" == typeof e && e);
                if (!s && l.toggle && /show|hide/.test(e) && (l.toggle = !1), s || (s = new o(this, l), r.data(n, s)), "string" == typeof e) {
                  if (void 0 === s[e]) throw new TypeError('No method named "' + e + '"');
                  s[e]()
                }
              })
            }, r(o, null, [{
              key: "VERSION",
              get: function () {
                return "4.0.0"
              }
            }, {
              key: "Default",
              get: function () {
                return a
              }
            }]), o
          }();
        return t(document).on(u.CLICK_DATA_API, p.DATA_TOGGLE, function (e) {
          "A" === e.currentTarget.tagName && e.preventDefault();
          var r = t(this),
            i = C.getSelectorFromElement(this);
          t(i).each(function () {
            var e = t(this),
              i = e.data(n) ? "toggle" : r.data();
            g._jQueryInterface.call(e, i)
          })
        }), t.fn[e] = g._jQueryInterface, t.fn[e].Constructor = g, t.fn[e].noConflict = function () {
          return t.fn[e] = s, g._jQueryInterface
        }, g
      }(e), R = "undefined" != typeof window && "undefined" != typeof document, A = ["Edge", "Trident", "Firefox"], P = 0, O = 0; O < A.length; O += 1)
      if (R && navigator.userAgent.indexOf(A[O]) >= 0) {
        P = 1;
        break
      } var k = R && window.Promise ? function (t) {
      var e = !1;
      return function () {
        e || (e = !0, window.Promise.resolve().then(function () {
          e = !1, t()
        }))
      }
    } : function (t) {
      var e = !1;
      return function () {
        e || (e = !0, setTimeout(function () {
          e = !1, t()
        }, P))
      }
    };

    function H(t) {
      return t && "[object Function]" === {}.toString.call(t)
    }

    function N(t, e) {
      if (1 !== t.nodeType) return [];
      var n = getComputedStyle(t, null);
      return e ? n[e] : n
    }

    function L(t) {
      return "HTML" === t.nodeName ? t : t.parentNode || t.host
    }

    function F(t) {
      if (!t) return document.body;
      switch (t.nodeName) {
        case "HTML":
        case "BODY":
          return t.ownerDocument.body;
        case "#document":
          return t.body
      }
      var e = N(t),
        n = e.overflow,
        r = e.overflowX,
        i = e.overflowY;
      return /(auto|scroll)/.test(n + i + r) ? t : F(L(t))
    }

    function j(t) {
      var e = t && t.offsetParent,
        n = e && e.nodeName;
      return n && "BODY" !== n && "HTML" !== n ? -1 !== ["TD", "TABLE"].indexOf(e.nodeName) && "static" === N(e, "position") ? j(e) : e : t ? t.ownerDocument.documentElement : document.documentElement
    }

    function B(t) {
      return null !== t.parentNode ? B(t.parentNode) : t
    }

    function z(t, e) {
      if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
      var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
        r = n ? t : e,
        i = n ? e : t,
        o = document.createRange();
      o.setStart(r, 0), o.setEnd(i, 0);
      var s, a, l = o.commonAncestorContainer;
      if (t !== l && e !== l || r.contains(i)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && j(s.firstElementChild) !== s ? j(l) : l;
      var u = B(t);
      return u.host ? z(u.host, e) : z(t, B(e).host)
    }

    function W(t) {
      var e = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
        n = t.nodeName;
      if ("BODY" === n || "HTML" === n) {
        var r = t.ownerDocument.documentElement;
        return (t.ownerDocument.scrollingElement || r)[e]
      }
      return t[e]
    }

    function Y(t, e) {
      var n = "x" === e ? "Left" : "Top",
        r = "Left" === n ? "Right" : "Bottom";
      return parseFloat(t["border" + n + "Width"], 10) + parseFloat(t["border" + r + "Width"], 10)
    }
    var U = void 0,
      V = function () {
        return void 0 === U && (U = -1 !== navigator.appVersion.indexOf("MSIE 10")), U
      };

    function G(t, e, n, r) {
      return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], V() ? n["offset" + t] + r["margin" + ("Height" === t ? "Top" : "Left")] + r["margin" + ("Height" === t ? "Bottom" : "Right")] : 0)
    }

    function q() {
      var t = document.body,
        e = document.documentElement,
        n = V() && getComputedStyle(e);
      return {
        height: G("Height", t, e, n),
        width: G("Width", t, e, n)
      }
    }
    var X = function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      },
      $ = function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
          }
        }
        return function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e
        }
      }(),
      Q = function (t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = n, t
      },
      Z = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
        }
        return t
      };

    function K(t) {
      return Z({}, t, {
        right: t.left + t.width,
        bottom: t.top + t.height
      })
    }

    function J(t) {
      var e = {};
      if (V()) try {
        e = t.getBoundingClientRect();
        var n = W(t, "top"),
          r = W(t, "left");
        e.top += n, e.left += r, e.bottom += n, e.right += r
      } catch (t) {} else e = t.getBoundingClientRect();
      var i = {
          left: e.left,
          top: e.top,
          width: e.right - e.left,
          height: e.bottom - e.top
        },
        o = "HTML" === t.nodeName ? q() : {},
        s = o.width || t.clientWidth || i.right - i.left,
        a = o.height || t.clientHeight || i.bottom - i.top,
        l = t.offsetWidth - s,
        u = t.offsetHeight - a;
      if (l || u) {
        var c = N(t);
        l -= Y(c, "x"), u -= Y(c, "y"), i.width -= l, i.height -= u
      }
      return K(i)
    }

    function tt(t, e) {
      var n = V(),
        r = "HTML" === e.nodeName,
        i = J(t),
        o = J(e),
        s = F(t),
        a = N(e),
        l = parseFloat(a.borderTopWidth, 10),
        u = parseFloat(a.borderLeftWidth, 10),
        c = K({
          top: i.top - o.top - l,
          left: i.left - o.left - u,
          width: i.width,
          height: i.height
        });
      if (c.marginTop = 0, c.marginLeft = 0, !n && r) {
        var d = parseFloat(a.marginTop, 10),
          h = parseFloat(a.marginLeft, 10);
        c.top -= l - d, c.bottom -= l - d, c.left -= u - h, c.right -= u - h, c.marginTop = d, c.marginLeft = h
      }
      return (n ? e.contains(s) : e === s && "BODY" !== s.nodeName) && (c = function (t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          r = W(e, "top"),
          i = W(e, "left"),
          o = n ? -1 : 1;
        return t.top += r * o, t.bottom += r * o, t.left += i * o, t.right += i * o, t
      }(c, e)), c
    }

    function et(t, e, n, r) {
      var i, o, s, a, l, u, c, d = {
          top: 0,
          left: 0
        },
        h = z(t, e);
      if ("viewport" === r) o = (i = h).ownerDocument.documentElement, s = tt(i, o), a = Math.max(o.clientWidth, window.innerWidth || 0), l = Math.max(o.clientHeight, window.innerHeight || 0), u = W(o), c = W(o, "left"), d = K({
        top: u - s.top + s.marginTop,
        left: c - s.left + s.marginLeft,
        width: a,
        height: l
      });
      else {
        var f = void 0;
        "scrollParent" === r ? "BODY" === (f = F(L(e))).nodeName && (f = t.ownerDocument.documentElement) : f = "window" === r ? t.ownerDocument.documentElement : r;
        var p = tt(f, h);
        if ("HTML" !== f.nodeName || function t(e) {
            var n = e.nodeName;
            return "BODY" !== n && "HTML" !== n && ("fixed" === N(e, "position") || t(L(e)))
          }(h)) d = p;
        else {
          var g = q(),
            m = g.height,
            v = g.width;
          d.top += p.top - p.marginTop, d.bottom = m + p.top, d.left += p.left - p.marginLeft, d.right = v + p.left
        }
      }
      return d.left += n, d.top += n, d.right -= n, d.bottom -= n, d
    }

    function nt(t, e, n, r, i) {
      var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
      if (-1 === t.indexOf("auto")) return t;
      var s = et(n, r, o, i),
        a = {
          top: {
            width: s.width,
            height: e.top - s.top
          },
          right: {
            width: s.right - e.right,
            height: s.height
          },
          bottom: {
            width: s.width,
            height: s.bottom - e.bottom
          },
          left: {
            width: e.left - s.left,
            height: s.height
          }
        },
        l = Object.keys(a).map(function (t) {
          return Z({
            key: t
          }, a[t], {
            area: (e = a[t], e.width * e.height)
          });
          var e
        }).sort(function (t, e) {
          return e.area - t.area
        }),
        u = l.filter(function (t) {
          var e = t.width,
            r = t.height;
          return e >= n.clientWidth && r >= n.clientHeight
        }),
        c = u.length > 0 ? u[0].key : l[0].key,
        d = t.split("-")[1];
      return c + (d ? "-" + d : "")
    }

    function rt(t, e, n) {
      return tt(n, z(e, n))
    }

    function it(t) {
      var e = getComputedStyle(t),
        n = parseFloat(e.marginTop) + parseFloat(e.marginBottom),
        r = parseFloat(e.marginLeft) + parseFloat(e.marginRight);
      return {
        width: t.offsetWidth + r,
        height: t.offsetHeight + n
      }
    }

    function ot(t) {
      var e = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
      };
      return t.replace(/left|right|bottom|top/g, function (t) {
        return e[t]
      })
    }

    function st(t, e, n) {
      n = n.split("-")[0];
      var r = it(t),
        i = {
          width: r.width,
          height: r.height
        },
        o = -1 !== ["right", "left"].indexOf(n),
        s = o ? "top" : "left",
        a = o ? "left" : "top",
        l = o ? "height" : "width",
        u = o ? "width" : "height";
      return i[s] = e[s] + e[l] / 2 - r[l] / 2, i[a] = n === a ? e[a] - r[u] : e[ot(a)], i
    }

    function at(t, e) {
      return Array.prototype.find ? t.find(e) : t.filter(e)[0]
    }

    function lt(t, e, n) {
      return (void 0 === n ? t : t.slice(0, function (t, e, n) {
        if (Array.prototype.findIndex) return t.findIndex(function (t) {
          return t.name === n
        });
        var r = at(t, function (t) {
          return t.name === n
        });
        return t.indexOf(r)
      }(t, 0, n))).forEach(function (t) {
        t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
        var n = t.function || t.fn;
        t.enabled && H(n) && (e.offsets.popper = K(e.offsets.popper), e.offsets.reference = K(e.offsets.reference), e = n(e, t))
      }), e
    }

    function ut(t, e) {
      return t.some(function (t) {
        var n = t.name;
        return t.enabled && n === e
      })
    }

    function ct(t) {
      for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), r = 0; r < e.length - 1; r++) {
        var i = e[r],
          o = i ? "" + i + n : t;
        if (void 0 !== document.body.style[o]) return o
      }
      return null
    }

    function dt(t) {
      var e = t.ownerDocument;
      return e ? e.defaultView : window
    }

    function ht(t) {
      return "" !== t && !isNaN(parseFloat(t)) && isFinite(t)
    }

    function ft(t, e) {
      Object.keys(e).forEach(function (n) {
        var r = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && ht(e[n]) && (r = "px"), t.style[n] = e[n] + r
      })
    }

    function pt(t, e, n) {
      var r = at(t, function (t) {
          return t.name === e
        }),
        i = !!r && t.some(function (t) {
          return t.name === n && t.enabled && t.order < r.order
        });
      if (!i) {
        var o = "`" + e + "`",
          s = "`" + n + "`";
        console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
      }
      return i
    }
    var gt = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
      mt = gt.slice(3);

    function vt(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = mt.indexOf(t),
        r = mt.slice(n + 1).concat(mt.slice(0, n));
      return e ? r.reverse() : r
    }
    var yt = "flip",
      bt = "clockwise",
      wt = "counterclockwise";
    var _t = {
        placement: "bottom",
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function () {},
        onUpdate: function () {},
        modifiers: {
          shift: {
            order: 100,
            enabled: !0,
            fn: function (t) {
              var e = t.placement,
                n = e.split("-")[0],
                r = e.split("-")[1];
              if (r) {
                var i = t.offsets,
                  o = i.reference,
                  s = i.popper,
                  a = -1 !== ["bottom", "top"].indexOf(n),
                  l = a ? "left" : "top",
                  u = a ? "width" : "height",
                  c = {
                    start: Q({}, l, o[l]),
                    end: Q({}, l, o[l] + o[u] - s[u])
                  };
                t.offsets.popper = Z({}, s, c[r])
              }
              return t
            }
          },
          offset: {
            order: 200,
            enabled: !0,
            fn: function (t, e) {
              var n, r = e.offset,
                i = t.placement,
                o = t.offsets,
                s = o.popper,
                a = o.reference,
                l = i.split("-")[0];
              return n = ht(+r) ? [+r, 0] : function (t, e, n, r) {
                var i = [0, 0],
                  o = -1 !== ["right", "left"].indexOf(r),
                  s = t.split(/(\+|\-)/).map(function (t) {
                    return t.trim()
                  }),
                  a = s.indexOf(at(s, function (t) {
                    return -1 !== t.search(/,|\s/)
                  }));
                s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                var l = /\s*,\s*|\s+/,
                  u = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];
                return (u = u.map(function (t, r) {
                  var i = (1 === r ? !o : o) ? "height" : "width",
                    s = !1;
                  return t.reduce(function (t, e) {
                    return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, s = !0, t) : s ? (t[t.length - 1] += e, s = !1, t) : t.concat(e)
                  }, []).map(function (t) {
                    return function (t, e, n, r) {
                      var i = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                        o = +i[1],
                        s = i[2];
                      if (!o) return t;
                      if (0 === s.indexOf("%")) {
                        var a = void 0;
                        switch (s) {
                          case "%p":
                            a = n;
                            break;
                          case "%":
                          case "%r":
                          default:
                            a = r
                        }
                        return K(a)[e] / 100 * o
                      }
                      return "vh" === s || "vw" === s ? ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o : o
                    }(t, i, e, n)
                  })
                })).forEach(function (t, e) {
                  t.forEach(function (n, r) {
                    ht(n) && (i[e] += n * ("-" === t[r - 1] ? -1 : 1))
                  })
                }), i
              }(r, s, a, l), "left" === l ? (s.top += n[0], s.left -= n[1]) : "right" === l ? (s.top += n[0], s.left += n[1]) : "top" === l ? (s.left += n[0], s.top -= n[1]) : "bottom" === l && (s.left += n[0], s.top += n[1]), t.popper = s, t
            },
            offset: 0
          },
          preventOverflow: {
            order: 300,
            enabled: !0,
            fn: function (t, e) {
              var n = e.boundariesElement || j(t.instance.popper);
              t.instance.reference === n && (n = j(n));
              var r = et(t.instance.popper, t.instance.reference, e.padding, n);
              e.boundaries = r;
              var i = e.priority,
                o = t.offsets.popper,
                s = {
                  primary: function (t) {
                    var n = o[t];
                    return o[t] < r[t] && !e.escapeWithReference && (n = Math.max(o[t], r[t])), Q({}, t, n)
                  },
                  secondary: function (t) {
                    var n = "right" === t ? "left" : "top",
                      i = o[n];
                    return o[t] > r[t] && !e.escapeWithReference && (i = Math.min(o[n], r[t] - ("right" === t ? o.width : o.height))), Q({}, n, i)
                  }
                };
              return i.forEach(function (t) {
                var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                o = Z({}, o, s[e](t))
              }), t.offsets.popper = o, t
            },
            priority: ["left", "right", "top", "bottom"],
            padding: 5,
            boundariesElement: "scrollParent"
          },
          keepTogether: {
            order: 400,
            enabled: !0,
            fn: function (t) {
              var e = t.offsets,
                n = e.popper,
                r = e.reference,
                i = t.placement.split("-")[0],
                o = Math.floor,
                s = -1 !== ["top", "bottom"].indexOf(i),
                a = s ? "right" : "bottom",
                l = s ? "left" : "top",
                u = s ? "width" : "height";
              return n[a] < o(r[l]) && (t.offsets.popper[l] = o(r[l]) - n[u]), n[l] > o(r[a]) && (t.offsets.popper[l] = o(r[a])), t
            }
          },
          arrow: {
            order: 500,
            enabled: !0,
            fn: function (t, e) {
              var n;
              if (!pt(t.instance.modifiers, "arrow", "keepTogether")) return t;
              var r = e.element;
              if ("string" == typeof r) {
                if (!(r = t.instance.popper.querySelector(r))) return t
              } else if (!t.instance.popper.contains(r)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
              var i = t.placement.split("-")[0],
                o = t.offsets,
                s = o.popper,
                a = o.reference,
                l = -1 !== ["left", "right"].indexOf(i),
                u = l ? "height" : "width",
                c = l ? "Top" : "Left",
                d = c.toLowerCase(),
                h = l ? "left" : "top",
                f = l ? "bottom" : "right",
                p = it(r)[u];
              a[f] - p < s[d] && (t.offsets.popper[d] -= s[d] - (a[f] - p)), a[d] + p > s[f] && (t.offsets.popper[d] += a[d] + p - s[f]), t.offsets.popper = K(t.offsets.popper);
              var g = a[d] + a[u] / 2 - p / 2,
                m = N(t.instance.popper),
                v = parseFloat(m["margin" + c], 10),
                y = parseFloat(m["border" + c + "Width"], 10),
                b = g - t.offsets.popper[d] - v - y;
              return b = Math.max(Math.min(s[u] - p, b), 0), t.arrowElement = r, t.offsets.arrow = (Q(n = {}, d, Math.round(b)), Q(n, h, ""), n), t
            },
            element: "[x-arrow]"
          },
          flip: {
            order: 600,
            enabled: !0,
            fn: function (t, e) {
              if (ut(t.instance.modifiers, "inner")) return t;
              if (t.flipped && t.placement === t.originalPlacement) return t;
              var n = et(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement),
                r = t.placement.split("-")[0],
                i = ot(r),
                o = t.placement.split("-")[1] || "",
                s = [];
              switch (e.behavior) {
                case yt:
                  s = [r, i];
                  break;
                case bt:
                  s = vt(r);
                  break;
                case wt:
                  s = vt(r, !0);
                  break;
                default:
                  s = e.behavior
              }
              return s.forEach(function (a, l) {
                if (r !== a || s.length === l + 1) return t;
                r = t.placement.split("-")[0], i = ot(r);
                var u, c = t.offsets.popper,
                  d = t.offsets.reference,
                  h = Math.floor,
                  f = "left" === r && h(c.right) > h(d.left) || "right" === r && h(c.left) < h(d.right) || "top" === r && h(c.bottom) > h(d.top) || "bottom" === r && h(c.top) < h(d.bottom),
                  p = h(c.left) < h(n.left),
                  g = h(c.right) > h(n.right),
                  m = h(c.top) < h(n.top),
                  v = h(c.bottom) > h(n.bottom),
                  y = "left" === r && p || "right" === r && g || "top" === r && m || "bottom" === r && v,
                  b = -1 !== ["top", "bottom"].indexOf(r),
                  w = !!e.flipVariations && (b && "start" === o && p || b && "end" === o && g || !b && "start" === o && m || !b && "end" === o && v);
                (f || y || w) && (t.flipped = !0, (f || y) && (r = s[l + 1]), w && (o = "end" === (u = o) ? "start" : "start" === u ? "end" : u), t.placement = r + (o ? "-" + o : ""), t.offsets.popper = Z({}, t.offsets.popper, st(t.instance.popper, t.offsets.reference, t.placement)), t = lt(t.instance.modifiers, t, "flip"))
              }), t
            },
            behavior: "flip",
            padding: 5,
            boundariesElement: "viewport"
          },
          inner: {
            order: 700,
            enabled: !1,
            fn: function (t) {
              var e = t.placement,
                n = e.split("-")[0],
                r = t.offsets,
                i = r.popper,
                o = r.reference,
                s = -1 !== ["left", "right"].indexOf(n),
                a = -1 === ["top", "left"].indexOf(n);
              return i[s ? "left" : "top"] = o[n] - (a ? i[s ? "width" : "height"] : 0), t.placement = ot(e), t.offsets.popper = K(i), t
            }
          },
          hide: {
            order: 800,
            enabled: !0,
            fn: function (t) {
              if (!pt(t.instance.modifiers, "hide", "preventOverflow")) return t;
              var e = t.offsets.reference,
                n = at(t.instance.modifiers, function (t) {
                  return "preventOverflow" === t.name
                }).boundaries;
              if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
                if (!0 === t.hide) return t;
                t.hide = !0, t.attributes["x-out-of-boundaries"] = ""
              } else {
                if (!1 === t.hide) return t;
                t.hide = !1, t.attributes["x-out-of-boundaries"] = !1
              }
              return t
            }
          },
          computeStyle: {
            order: 850,
            enabled: !0,
            fn: function (t, e) {
              var n = e.x,
                r = e.y,
                i = t.offsets.popper,
                o = at(t.instance.modifiers, function (t) {
                  return "applyStyle" === t.name
                }).gpuAcceleration;
              void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
              var s, a, l = void 0 !== o ? o : e.gpuAcceleration,
                u = J(j(t.instance.popper)),
                c = {
                  position: i.position
                },
                d = {
                  left: Math.floor(i.left),
                  top: Math.floor(i.top),
                  bottom: Math.floor(i.bottom),
                  right: Math.floor(i.right)
                },
                h = "bottom" === n ? "top" : "bottom",
                f = "right" === r ? "left" : "right",
                p = ct("transform");
              if (a = "bottom" === h ? -u.height + d.bottom : d.top, s = "right" === f ? -u.width + d.right : d.left, l && p) c[p] = "translate3d(" + s + "px, " + a + "px, 0)", c[h] = 0, c[f] = 0, c.willChange = "transform";
              else {
                var g = "bottom" === h ? -1 : 1,
                  m = "right" === f ? -1 : 1;
                c[h] = a * g, c[f] = s * m, c.willChange = h + ", " + f
              }
              var v = {
                "x-placement": t.placement
              };
              return t.attributes = Z({}, v, t.attributes), t.styles = Z({}, c, t.styles), t.arrowStyles = Z({}, t.offsets.arrow, t.arrowStyles), t
            },
            gpuAcceleration: !0,
            x: "bottom",
            y: "right"
          },
          applyStyle: {
            order: 900,
            enabled: !0,
            fn: function (t) {
              var e, n;
              return ft(t.instance.popper, t.styles), e = t.instance.popper, n = t.attributes, Object.keys(n).forEach(function (t) {
                !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t)
              }), t.arrowElement && Object.keys(t.arrowStyles).length && ft(t.arrowElement, t.arrowStyles), t
            },
            onLoad: function (t, e, n, r, i) {
              var o = rt(0, e, t),
                s = nt(n.placement, o, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
              return e.setAttribute("x-placement", s), ft(e, {
                position: "absolute"
              }), n
            },
            gpuAcceleration: void 0
          }
        }
      },
      St = function () {
        function t(e, n) {
          var r = this,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          X(this, t), this.scheduleUpdate = function () {
            return requestAnimationFrame(r.update)
          }, this.update = k(this.update.bind(this)), this.options = Z({}, t.Defaults, i), this.state = {
            isDestroyed: !1,
            isCreated: !1,
            scrollParents: []
          }, this.reference = e && e.jquery ? e[0] : e, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(Z({}, t.Defaults.modifiers, i.modifiers)).forEach(function (e) {
            r.options.modifiers[e] = Z({}, t.Defaults.modifiers[e] || {}, i.modifiers ? i.modifiers[e] : {})
          }), this.modifiers = Object.keys(this.options.modifiers).map(function (t) {
            return Z({
              name: t
            }, r.options.modifiers[t])
          }).sort(function (t, e) {
            return t.order - e.order
          }), this.modifiers.forEach(function (t) {
            t.enabled && H(t.onLoad) && t.onLoad(r.reference, r.popper, r.options, t, r.state)
          }), this.update();
          var o = this.options.eventsEnabled;
          o && this.enableEventListeners(), this.state.eventsEnabled = o
        }
        return $(t, [{
          key: "update",
          value: function () {
            return function () {
              if (!this.state.isDestroyed) {
                var t = {
                  instance: this,
                  styles: {},
                  arrowStyles: {},
                  attributes: {},
                  flipped: !1,
                  offsets: {}
                };
                t.offsets.reference = rt(this.state, this.popper, this.reference), t.placement = nt(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.offsets.popper = st(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = "absolute", t = lt(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t))
              }
            }.call(this)
          }
        }, {
          key: "destroy",
          value: function () {
            return function () {
              return this.state.isDestroyed = !0, ut(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.left = "", this.popper.style.position = "", this.popper.style.top = "", this.popper.style[ct("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
            }.call(this)
          }
        }, {
          key: "enableEventListeners",
          value: function () {
            return function () {
              this.state.eventsEnabled || (this.state = function (t, e, n, r) {
                n.updateBound = r, dt(t).addEventListener("resize", n.updateBound, {
                  passive: !0
                });
                var i = F(t);
                return function t(e, n, r, i) {
                  var o = "BODY" === e.nodeName,
                    s = o ? e.ownerDocument.defaultView : e;
                  s.addEventListener(n, r, {
                    passive: !0
                  }), o || t(F(s.parentNode), n, r, i), i.push(s)
                }(i, "scroll", n.updateBound, n.scrollParents), n.scrollElement = i, n.eventsEnabled = !0, n
              }(this.reference, this.options, this.state, this.scheduleUpdate))
            }.call(this)
          }
        }, {
          key: "disableEventListeners",
          value: function () {
            return function () {
              var t, e;
              this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.reference, e = this.state, dt(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach(function (t) {
                t.removeEventListener("scroll", e.updateBound)
              }), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e))
            }.call(this)
          }
        }]), t
      }();
    St.Utils = ("undefined" != typeof window ? window : global).PopperUtils, St.placements = gt, St.Defaults = _t;
    var Dt, xt, Ct, Tt, Et, Mt, It, Rt, At, Pt, Ot, kt, Ht, Nt, Lt, Ft, jt, Bt, zt, Wt, Yt, Ut, Vt, Gt, qt, Xt, $t, Qt, Zt, Kt, Jt, te, ee, ne, re, ie, oe, se, ae, le, ue, ce, de, he, fe, pe, ge, me, ve, ye, be, we, _e, Se, De, xe, Ce, Te, Ee, Me, Ie, Re, Ae, Pe, Oe, ke, He, Ne, Le, Fe, je, Be, ze, We = (Me = "dropdown", Re = "." + (Ie = "bs.dropdown"), Ae = (Ee = e).fn[Me], Pe = new RegExp("38|40|27"), Oe = {
        HIDE: "hide" + Re,
        HIDDEN: "hidden" + Re,
        SHOW: "show" + Re,
        SHOWN: "shown" + Re,
        CLICK: "click" + Re,
        CLICK_DATA_API: "click" + Re + ".data-api",
        KEYDOWN_DATA_API: "keydown" + Re + ".data-api",
        KEYUP_DATA_API: "keyup" + Re + ".data-api"
      }, ke = "disabled", He = "show", Ne = "dropdown-menu-right", Le = '[data-toggle="dropdown"]', Fe = ".dropdown-menu", je = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent"
      }, Be = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)"
      }, ze = function () {
        function t(t, e) {
          this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
        }
        var e = t.prototype;
        return e.toggle = function () {
          if (!this._element.disabled && !Ee(this._element).hasClass(ke)) {
            var e = t._getParentFromElement(this._element),
              n = Ee(this._menu).hasClass(He);
            if (t._clearMenus(), !n) {
              var r = {
                  relatedTarget: this._element
                },
                i = Ee.Event(Oe.SHOW, r);
              if (Ee(e).trigger(i), !i.isDefaultPrevented()) {
                if (!this._inNavbar) {
                  if (void 0 === St) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                  var o = this._element;
                  Ee(e).hasClass("dropup") && (Ee(this._menu).hasClass("dropdown-menu-left") || Ee(this._menu).hasClass(Ne)) && (o = e), "scrollParent" !== this._config.boundary && Ee(e).addClass("position-static"), this._popper = new St(o, this._menu, this._getPopperConfig())
                }
                "ontouchstart" in document.documentElement && 0 === Ee(e).closest(".navbar-nav").length && Ee("body").children().on("mouseover", null, Ee.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), Ee(this._menu).toggleClass(He), Ee(e).toggleClass(He).trigger(Ee.Event(Oe.SHOWN, r))
              }
            }
          }
        }, e.dispose = function () {
          Ee.removeData(this._element, Ie), Ee(this._element).off(Re), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
        }, e.update = function () {
          this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
        }, e._addEventListeners = function () {
          var t = this;
          Ee(this._element).on(Oe.CLICK, function (e) {
            e.preventDefault(), e.stopPropagation(), t.toggle()
          })
        }, e._getConfig = function (t) {
          return t = i({}, this.constructor.Default, Ee(this._element).data(), t), C.typeCheckConfig(Me, t, this.constructor.DefaultType), t
        }, e._getMenuElement = function () {
          if (!this._menu) {
            var e = t._getParentFromElement(this._element);
            this._menu = Ee(e).find(Fe)[0]
          }
          return this._menu
        }, e._getPlacement = function () {
          var t = Ee(this._element).parent(),
            e = "bottom-start";
          return t.hasClass("dropup") ? (e = "top-start", Ee(this._menu).hasClass(Ne) && (e = "top-end")) : t.hasClass("dropright") ? e = "right-start" : t.hasClass("dropleft") ? e = "left-start" : Ee(this._menu).hasClass(Ne) && (e = "bottom-end"), e
        }, e._detectNavbar = function () {
          return Ee(this._element).closest(".navbar").length > 0
        }, e._getPopperConfig = function () {
          var t = this,
            e = {};
          return "function" == typeof this._config.offset ? e.fn = function (e) {
            return e.offsets = i({}, e.offsets, t._config.offset(e.offsets) || {}), e
          } : e.offset = this._config.offset, {
            placement: this._getPlacement(),
            modifiers: {
              offset: e,
              flip: {
                enabled: this._config.flip
              },
              preventOverflow: {
                boundariesElement: this._config.boundary
              }
            }
          }
        }, t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = Ee(this).data(Ie);
            if (n || (n = new t(this, "object" == typeof e ? e : null), Ee(this).data(Ie, n)), "string" == typeof e) {
              if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
              n[e]()
            }
          })
        }, t._clearMenus = function (e) {
          if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
            for (var n = Ee.makeArray(Ee(Le)), r = 0; r < n.length; r++) {
              var i = t._getParentFromElement(n[r]),
                o = Ee(n[r]).data(Ie),
                s = {
                  relatedTarget: n[r]
                };
              if (o) {
                var a = o._menu;
                if (Ee(i).hasClass(He) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && Ee.contains(i, e.target))) {
                  var l = Ee.Event(Oe.HIDE, s);
                  Ee(i).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && Ee("body").children().off("mouseover", null, Ee.noop), n[r].setAttribute("aria-expanded", "false"), Ee(a).removeClass(He), Ee(i).removeClass(He).trigger(Ee.Event(Oe.HIDDEN, s)))
                }
              }
            }
        }, t._getParentFromElement = function (t) {
          var e, n = C.getSelectorFromElement(t);
          return n && (e = Ee(n)[0]), e || t.parentNode
        }, t._dataApiKeydownHandler = function (e) {
          if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || Ee(e.target).closest(Fe).length)) : Pe.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !Ee(this).hasClass(ke))) {
            var n = t._getParentFromElement(this),
              r = Ee(n).hasClass(He);
            if ((r || 27 === e.which && 32 === e.which) && (!r || 27 !== e.which && 32 !== e.which)) {
              var i = Ee(n).find(".dropdown-menu .dropdown-item:not(.disabled)").get();
              if (0 !== i.length) {
                var o = i.indexOf(e.target);
                38 === e.which && o > 0 && o--, 40 === e.which && o < i.length - 1 && o++, o < 0 && (o = 0), i[o].focus()
              }
            } else {
              if (27 === e.which) {
                var s = Ee(n).find(Le)[0];
                Ee(s).trigger("focus")
              }
              Ee(this).trigger("click")
            }
          }
        }, r(t, null, [{
          key: "VERSION",
          get: function () {
            return "4.0.0"
          }
        }, {
          key: "Default",
          get: function () {
            return je
          }
        }, {
          key: "DefaultType",
          get: function () {
            return Be
          }
        }]), t
      }(), Ee(document).on(Oe.KEYDOWN_DATA_API, Le, ze._dataApiKeydownHandler).on(Oe.KEYDOWN_DATA_API, Fe, ze._dataApiKeydownHandler).on(Oe.CLICK_DATA_API + " " + Oe.KEYUP_DATA_API, ze._clearMenus).on(Oe.CLICK_DATA_API, Le, function (t) {
        t.preventDefault(), t.stopPropagation(), ze._jQueryInterface.call(Ee(this), "toggle")
      }).on(Oe.CLICK_DATA_API, ".dropdown form", function (t) {
        t.stopPropagation()
      }), Ee.fn[Me] = ze._jQueryInterface, Ee.fn[Me].Constructor = ze, Ee.fn[Me].noConflict = function () {
        return Ee.fn[Me] = Ae, ze._jQueryInterface
      }, ze),
      Ye = (ve = "." + (me = "bs.modal"), ye = (ge = e).fn.modal, be = {
        backdrop: !0,
        keyboard: !0,
        focus: !0,
        show: !0
      }, we = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
      }, _e = {
        HIDE: "hide" + ve,
        HIDDEN: "hidden" + ve,
        SHOW: "show" + ve,
        SHOWN: "shown" + ve,
        FOCUSIN: "focusin" + ve,
        RESIZE: "resize" + ve,
        CLICK_DISMISS: "click.dismiss" + ve,
        KEYDOWN_DISMISS: "keydown.dismiss" + ve,
        MOUSEUP_DISMISS: "mouseup.dismiss" + ve,
        MOUSEDOWN_DISMISS: "mousedown.dismiss" + ve,
        CLICK_DATA_API: "click.bs.modal.data-api"
      }, Se = "modal-open", De = "fade", xe = "show", Ce = {
        DIALOG: ".modal-dialog",
        DATA_TOGGLE: '[data-toggle="modal"]',
        DATA_DISMISS: '[data-dismiss="modal"]',
        FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        STICKY_CONTENT: ".sticky-top",
        NAVBAR_TOGGLER: ".navbar-toggler"
      }, Te = function () {
        function t(t, e) {
          this._config = this._getConfig(e), this._element = t, this._dialog = ge(t).find(Ce.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
        }
        var e = t.prototype;
        return e.toggle = function (t) {
          return this._isShown ? this.hide() : this.show(t)
        }, e.show = function (t) {
          var e = this;
          if (!this._isTransitioning && !this._isShown) {
            C.supportsTransitionEnd() && ge(this._element).hasClass(De) && (this._isTransitioning = !0);
            var n = ge.Event(_e.SHOW, {
              relatedTarget: t
            });
            ge(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), ge(document.body).addClass(Se), this._setEscapeEvent(), this._setResizeEvent(), ge(this._element).on(_e.CLICK_DISMISS, Ce.DATA_DISMISS, function (t) {
              return e.hide(t)
            }), ge(this._dialog).on(_e.MOUSEDOWN_DISMISS, function () {
              ge(e._element).one(_e.MOUSEUP_DISMISS, function (t) {
                ge(t.target).is(e._element) && (e._ignoreBackdropClick = !0)
              })
            }), this._showBackdrop(function () {
              return e._showElement(t)
            }))
          }
        }, e.hide = function (t) {
          var e = this;
          if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
            var n = ge.Event(_e.HIDE);
            if (ge(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
              this._isShown = !1;
              var r = C.supportsTransitionEnd() && ge(this._element).hasClass(De);
              r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), ge(document).off(_e.FOCUSIN), ge(this._element).removeClass(xe), ge(this._element).off(_e.CLICK_DISMISS), ge(this._dialog).off(_e.MOUSEDOWN_DISMISS), r ? ge(this._element).one(C.TRANSITION_END, function (t) {
                return e._hideModal(t)
              }).emulateTransitionEnd(300) : this._hideModal()
            }
          }
        }, e.dispose = function () {
          ge.removeData(this._element, me), ge(window, document, this._element, this._backdrop).off(ve), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
        }, e.handleUpdate = function () {
          this._adjustDialog()
        }, e._getConfig = function (t) {
          return t = i({}, be, t), C.typeCheckConfig("modal", t, we), t
        }, e._showElement = function (t) {
          var e = this,
            n = C.supportsTransitionEnd() && ge(this._element).hasClass(De);
          this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && C.reflow(this._element), ge(this._element).addClass(xe), this._config.focus && this._enforceFocus();
          var r = ge.Event(_e.SHOWN, {
              relatedTarget: t
            }),
            i = function () {
              e._config.focus && e._element.focus(), e._isTransitioning = !1, ge(e._element).trigger(r)
            };
          n ? ge(this._dialog).one(C.TRANSITION_END, i).emulateTransitionEnd(300) : i()
        }, e._enforceFocus = function () {
          var t = this;
          ge(document).off(_e.FOCUSIN).on(_e.FOCUSIN, function (e) {
            document !== e.target && t._element !== e.target && 0 === ge(t._element).has(e.target).length && t._element.focus()
          })
        }, e._setEscapeEvent = function () {
          var t = this;
          this._isShown && this._config.keyboard ? ge(this._element).on(_e.KEYDOWN_DISMISS, function (e) {
            27 === e.which && (e.preventDefault(), t.hide())
          }) : this._isShown || ge(this._element).off(_e.KEYDOWN_DISMISS)
        }, e._setResizeEvent = function () {
          var t = this;
          this._isShown ? ge(window).on(_e.RESIZE, function (e) {
            return t.handleUpdate(e)
          }) : ge(window).off(_e.RESIZE)
        }, e._hideModal = function () {
          var t = this;
          this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
            ge(document.body).removeClass(Se), t._resetAdjustments(), t._resetScrollbar(), ge(t._element).trigger(_e.HIDDEN)
          })
        }, e._removeBackdrop = function () {
          this._backdrop && (ge(this._backdrop).remove(), this._backdrop = null)
        }, e._showBackdrop = function (t) {
          var e = this,
            n = ge(this._element).hasClass(De) ? De : "";
          if (this._isShown && this._config.backdrop) {
            var r = C.supportsTransitionEnd() && n;
            if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n && ge(this._backdrop).addClass(n), ge(this._backdrop).appendTo(document.body), ge(this._element).on(_e.CLICK_DISMISS, function (t) {
                e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide())
              }), r && C.reflow(this._backdrop), ge(this._backdrop).addClass(xe), !t) return;
            if (!r) return void t();
            ge(this._backdrop).one(C.TRANSITION_END, t).emulateTransitionEnd(150)
          } else if (!this._isShown && this._backdrop) {
            ge(this._backdrop).removeClass(xe);
            var i = function () {
              e._removeBackdrop(), t && t()
            };
            C.supportsTransitionEnd() && ge(this._element).hasClass(De) ? ge(this._backdrop).one(C.TRANSITION_END, i).emulateTransitionEnd(150) : i()
          } else t && t()
        }, e._adjustDialog = function () {
          var t = this._element.scrollHeight > document.documentElement.clientHeight;
          !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
        }, e._resetAdjustments = function () {
          this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
        }, e._checkScrollbar = function () {
          var t = document.body.getBoundingClientRect();
          this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
        }, e._setScrollbar = function () {
          var t = this;
          if (this._isBodyOverflowing) {
            ge(Ce.FIXED_CONTENT).each(function (e, n) {
              var r = ge(n)[0].style.paddingRight,
                i = ge(n).css("padding-right");
              ge(n).data("padding-right", r).css("padding-right", parseFloat(i) + t._scrollbarWidth + "px")
            }), ge(Ce.STICKY_CONTENT).each(function (e, n) {
              var r = ge(n)[0].style.marginRight,
                i = ge(n).css("margin-right");
              ge(n).data("margin-right", r).css("margin-right", parseFloat(i) - t._scrollbarWidth + "px")
            }), ge(Ce.NAVBAR_TOGGLER).each(function (e, n) {
              var r = ge(n)[0].style.marginRight,
                i = ge(n).css("margin-right");
              ge(n).data("margin-right", r).css("margin-right", parseFloat(i) + t._scrollbarWidth + "px")
            });
            var e = document.body.style.paddingRight,
              n = ge("body").css("padding-right");
            ge("body").data("padding-right", e).css("padding-right", parseFloat(n) + this._scrollbarWidth + "px")
          }
        }, e._resetScrollbar = function () {
          ge(Ce.FIXED_CONTENT).each(function (t, e) {
            var n = ge(e).data("padding-right");
            void 0 !== n && ge(e).css("padding-right", n).removeData("padding-right")
          }), ge(Ce.STICKY_CONTENT + ", " + Ce.NAVBAR_TOGGLER).each(function (t, e) {
            var n = ge(e).data("margin-right");
            void 0 !== n && ge(e).css("margin-right", n).removeData("margin-right")
          });
          var t = ge("body").data("padding-right");
          void 0 !== t && ge("body").css("padding-right", t).removeData("padding-right")
        }, e._getScrollbarWidth = function () {
          var t = document.createElement("div");
          t.className = "modal-scrollbar-measure", document.body.appendChild(t);
          var e = t.getBoundingClientRect().width - t.clientWidth;
          return document.body.removeChild(t), e
        }, t._jQueryInterface = function (e, n) {
          return this.each(function () {
            var r = ge(this).data(me),
              o = i({}, t.Default, ge(this).data(), "object" == typeof e && e);
            if (r || (r = new t(this, o), ge(this).data(me, r)), "string" == typeof e) {
              if (void 0 === r[e]) throw new TypeError('No method named "' + e + '"');
              r[e](n)
            } else o.show && r.show(n)
          })
        }, r(t, null, [{
          key: "VERSION",
          get: function () {
            return "4.0.0"
          }
        }, {
          key: "Default",
          get: function () {
            return be
          }
        }]), t
      }(), ge(document).on(_e.CLICK_DATA_API, Ce.DATA_TOGGLE, function (t) {
        var e, n = this,
          r = C.getSelectorFromElement(this);
        r && (e = ge(r)[0]);
        var o = ge(e).data(me) ? "toggle" : i({}, ge(e).data(), ge(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
        var s = ge(e).one(_e.SHOW, function (t) {
          t.isDefaultPrevented() || s.one(_e.HIDDEN, function () {
            ge(n).is(":visible") && n.focus()
          })
        });
        Te._jQueryInterface.call(ge(e), o, this)
      }), ge.fn.modal = Te._jQueryInterface, ge.fn.modal.Constructor = Te, ge.fn.modal.noConflict = function () {
        return ge.fn.modal = ye, Te._jQueryInterface
      }, Te),
      Ue = (te = "tooltip", ne = "." + (ee = "bs.tooltip"), re = (Jt = e).fn[te], ie = new RegExp("(^|\\s)bs-tooltip\\S+", "g"), oe = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(number|string)",
        container: "(string|element|boolean)",
        fallbackPlacement: "(string|array)",
        boundary: "(string|element)"
      }, se = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: "right",
        BOTTOM: "bottom",
        LEFT: "left"
      }, ae = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent"
      }, le = "show", ue = {
        HIDE: "hide" + ne,
        HIDDEN: "hidden" + ne,
        SHOW: "show" + ne,
        SHOWN: "shown" + ne,
        INSERTED: "inserted" + ne,
        CLICK: "click" + ne,
        FOCUSIN: "focusin" + ne,
        FOCUSOUT: "focusout" + ne,
        MOUSEENTER: "mouseenter" + ne,
        MOUSELEAVE: "mouseleave" + ne
      }, ce = "fade", de = "show", he = "hover", fe = "focus", pe = function () {
        function t(t, e) {
          if (void 0 === St) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
          this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
        }
        var e = t.prototype;
        return e.enable = function () {
          this._isEnabled = !0
        }, e.disable = function () {
          this._isEnabled = !1
        }, e.toggleEnabled = function () {
          this._isEnabled = !this._isEnabled
        }, e.toggle = function (t) {
          if (this._isEnabled)
            if (t) {
              var e = this.constructor.DATA_KEY,
                n = Jt(t.currentTarget).data(e);
              n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), Jt(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
            } else {
              if (Jt(this.getTipElement()).hasClass(de)) return void this._leave(null, this);
              this._enter(null, this)
            }
        }, e.dispose = function () {
          clearTimeout(this._timeout), Jt.removeData(this.element, this.constructor.DATA_KEY), Jt(this.element).off(this.constructor.EVENT_KEY), Jt(this.element).closest(".modal").off("hide.bs.modal"), this.tip && Jt(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
        }, e.show = function () {
          var e = this;
          if ("none" === Jt(this.element).css("display")) throw new Error("Please use show on visible elements");
          var n = Jt.Event(this.constructor.Event.SHOW);
          if (this.isWithContent() && this._isEnabled) {
            Jt(this.element).trigger(n);
            var r = Jt.contains(this.element.ownerDocument.documentElement, this.element);
            if (n.isDefaultPrevented() || !r) return;
            var i = this.getTipElement(),
              o = C.getUID(this.constructor.NAME);
            i.setAttribute("id", o), this.element.setAttribute("aria-describedby", o), this.setContent(), this.config.animation && Jt(i).addClass(ce);
            var s = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement,
              a = this._getAttachment(s);
            this.addAttachmentClass(a);
            var l = !1 === this.config.container ? document.body : Jt(this.config.container);
            Jt(i).data(this.constructor.DATA_KEY, this), Jt.contains(this.element.ownerDocument.documentElement, this.tip) || Jt(i).appendTo(l), Jt(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new St(this.element, i, {
              placement: a,
              modifiers: {
                offset: {
                  offset: this.config.offset
                },
                flip: {
                  behavior: this.config.fallbackPlacement
                },
                arrow: {
                  element: ".arrow"
                },
                preventOverflow: {
                  boundariesElement: this.config.boundary
                }
              },
              onCreate: function (t) {
                t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
              },
              onUpdate: function (t) {
                e._handlePopperPlacementChange(t)
              }
            }), Jt(i).addClass(de), "ontouchstart" in document.documentElement && Jt("body").children().on("mouseover", null, Jt.noop);
            var u = function () {
              e.config.animation && e._fixTransition();
              var t = e._hoverState;
              e._hoverState = null, Jt(e.element).trigger(e.constructor.Event.SHOWN), "out" === t && e._leave(null, e)
            };
            C.supportsTransitionEnd() && Jt(this.tip).hasClass(ce) ? Jt(this.tip).one(C.TRANSITION_END, u).emulateTransitionEnd(t._TRANSITION_DURATION) : u()
          }
        }, e.hide = function (t) {
          var e = this,
            n = this.getTipElement(),
            r = Jt.Event(this.constructor.Event.HIDE),
            i = function () {
              e._hoverState !== le && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), Jt(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t()
            };
          Jt(this.element).trigger(r), r.isDefaultPrevented() || (Jt(n).removeClass(de), "ontouchstart" in document.documentElement && Jt("body").children().off("mouseover", null, Jt.noop), this._activeTrigger.click = !1, this._activeTrigger[fe] = !1, this._activeTrigger[he] = !1, C.supportsTransitionEnd() && Jt(this.tip).hasClass(ce) ? Jt(n).one(C.TRANSITION_END, i).emulateTransitionEnd(150) : i(), this._hoverState = "")
        }, e.update = function () {
          null !== this._popper && this._popper.scheduleUpdate()
        }, e.isWithContent = function () {
          return Boolean(this.getTitle())
        }, e.addAttachmentClass = function (t) {
          Jt(this.getTipElement()).addClass("bs-tooltip-" + t)
        }, e.getTipElement = function () {
          return this.tip = this.tip || Jt(this.config.template)[0], this.tip
        }, e.setContent = function () {
          var t = Jt(this.getTipElement());
          this.setElementContent(t.find(".tooltip-inner"), this.getTitle()), t.removeClass(ce + " " + de)
        }, e.setElementContent = function (t, e) {
          var n = this.config.html;
          "object" == typeof e && (e.nodeType || e.jquery) ? n ? Jt(e).parent().is(t) || t.empty().append(e) : t.text(Jt(e).text()) : t[n ? "html" : "text"](e)
        }, e.getTitle = function () {
          var t = this.element.getAttribute("data-original-title");
          return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
        }, e._getAttachment = function (t) {
          return se[t.toUpperCase()]
        }, e._setListeners = function () {
          var t = this;
          this.config.trigger.split(" ").forEach(function (e) {
            if ("click" === e) Jt(t.element).on(t.constructor.Event.CLICK, t.config.selector, function (e) {
              return t.toggle(e)
            });
            else if ("manual" !== e) {
              var n = e === he ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                r = e === he ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
              Jt(t.element).on(n, t.config.selector, function (e) {
                return t._enter(e)
              }).on(r, t.config.selector, function (e) {
                return t._leave(e)
              })
            }
            Jt(t.element).closest(".modal").on("hide.bs.modal", function () {
              return t.hide()
            })
          }), this.config.selector ? this.config = i({}, this.config, {
            trigger: "manual",
            selector: ""
          }) : this._fixTitle()
        }, e._fixTitle = function () {
          var t = typeof this.element.getAttribute("data-original-title");
          (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
        }, e._enter = function (t, e) {
          var n = this.constructor.DATA_KEY;
          (e = e || Jt(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), Jt(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? fe : he] = !0), Jt(e.getTipElement()).hasClass(de) || e._hoverState === le ? e._hoverState = le : (clearTimeout(e._timeout), e._hoverState = le, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () {
            e._hoverState === le && e.show()
          }, e.config.delay.show) : e.show())
        }, e._leave = function (t, e) {
          var n = this.constructor.DATA_KEY;
          (e = e || Jt(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), Jt(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? fe : he] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = "out", e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () {
            "out" === e._hoverState && e.hide()
          }, e.config.delay.hide) : e.hide())
        }, e._isWithActiveTrigger = function () {
          for (var t in this._activeTrigger)
            if (this._activeTrigger[t]) return !0;
          return !1
        }, e._getConfig = function (t) {
          return "number" == typeof (t = i({}, this.constructor.Default, Jt(this.element).data(), t)).delay && (t.delay = {
            show: t.delay,
            hide: t.delay
          }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), C.typeCheckConfig(te, t, this.constructor.DefaultType), t
        }, e._getDelegateConfig = function () {
          var t = {};
          if (this.config)
            for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
          return t
        }, e._cleanTipClass = function () {
          var t = Jt(this.getTipElement()),
            e = t.attr("class").match(ie);
          null !== e && e.length > 0 && t.removeClass(e.join(""))
        }, e._handlePopperPlacementChange = function (t) {
          this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
        }, e._fixTransition = function () {
          var t = this.getTipElement(),
            e = this.config.animation;
          null === t.getAttribute("x-placement") && (Jt(t).removeClass(ce), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e)
        }, t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = Jt(this).data(ee),
              r = "object" == typeof e && e;
            if ((n || !/dispose|hide/.test(e)) && (n || (n = new t(this, r), Jt(this).data(ee, n)), "string" == typeof e)) {
              if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
              n[e]()
            }
          })
        }, r(t, null, [{
          key: "VERSION",
          get: function () {
            return "4.0.0"
          }
        }, {
          key: "Default",
          get: function () {
            return ae
          }
        }, {
          key: "NAME",
          get: function () {
            return te
          }
        }, {
          key: "DATA_KEY",
          get: function () {
            return ee
          }
        }, {
          key: "Event",
          get: function () {
            return ue
          }
        }, {
          key: "EVENT_KEY",
          get: function () {
            return ne
          }
        }, {
          key: "DefaultType",
          get: function () {
            return oe
          }
        }]), t
      }(), Jt.fn[te] = pe._jQueryInterface, Jt.fn[te].Constructor = pe, Jt.fn[te].noConflict = function () {
        return Jt.fn[te] = re, pe._jQueryInterface
      }, pe),
      Ve = (Ut = "popover", Gt = "." + (Vt = "bs.popover"), qt = (Yt = e).fn[Ut], Xt = new RegExp("(^|\\s)bs-popover\\S+", "g"), $t = i({}, Ue.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
      }), Qt = i({}, Ue.DefaultType, {
        content: "(string|element|function)"
      }), Zt = {
        HIDE: "hide" + Gt,
        HIDDEN: "hidden" + Gt,
        SHOW: "show" + Gt,
        SHOWN: "shown" + Gt,
        INSERTED: "inserted" + Gt,
        CLICK: "click" + Gt,
        FOCUSIN: "focusin" + Gt,
        FOCUSOUT: "focusout" + Gt,
        MOUSEENTER: "mouseenter" + Gt,
        MOUSELEAVE: "mouseleave" + Gt
      }, Kt = function (t) {
        var e, n;

        function i() {
          return t.apply(this, arguments) || this
        }
        n = t, (e = i).prototype = Object.create(n.prototype), e.prototype.constructor = e, e.__proto__ = n;
        var o = i.prototype;
        return o.isWithContent = function () {
          return this.getTitle() || this._getContent()
        }, o.addAttachmentClass = function (t) {
          Yt(this.getTipElement()).addClass("bs-popover-" + t)
        }, o.getTipElement = function () {
          return this.tip = this.tip || Yt(this.config.template)[0], this.tip
        }, o.setContent = function () {
          var t = Yt(this.getTipElement());
          this.setElementContent(t.find(".popover-header"), this.getTitle());
          var e = this._getContent();
          "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(".popover-body"), e), t.removeClass("fade show")
        }, o._getContent = function () {
          return this.element.getAttribute("data-content") || this.config.content
        }, o._cleanTipClass = function () {
          var t = Yt(this.getTipElement()),
            e = t.attr("class").match(Xt);
          null !== e && e.length > 0 && t.removeClass(e.join(""))
        }, i._jQueryInterface = function (t) {
          return this.each(function () {
            var e = Yt(this).data(Vt),
              n = "object" == typeof t ? t : null;
            if ((e || !/destroy|hide/.test(t)) && (e || (e = new i(this, n), Yt(this).data(Vt, e)), "string" == typeof t)) {
              if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
              e[t]()
            }
          })
        }, r(i, null, [{
          key: "VERSION",
          get: function () {
            return "4.0.0"
          }
        }, {
          key: "Default",
          get: function () {
            return $t
          }
        }, {
          key: "NAME",
          get: function () {
            return Ut
          }
        }, {
          key: "DATA_KEY",
          get: function () {
            return Vt
          }
        }, {
          key: "Event",
          get: function () {
            return Zt
          }
        }, {
          key: "EVENT_KEY",
          get: function () {
            return Gt
          }
        }, {
          key: "DefaultType",
          get: function () {
            return Qt
          }
        }]), i
      }(Ue), Yt.fn[Ut] = Kt._jQueryInterface, Yt.fn[Ut].Constructor = Kt, Yt.fn[Ut].noConflict = function () {
        return Yt.fn[Ut] = qt, Kt._jQueryInterface
      }, Kt),
      Ge = (Pt = "scrollspy", kt = "." + (Ot = "bs.scrollspy"), Ht = (At = e).fn[Pt], Nt = {
        offset: 10,
        method: "auto",
        target: ""
      }, Lt = {
        offset: "number",
        method: "string",
        target: "(string|element)"
      }, Ft = {
        ACTIVATE: "activate" + kt,
        SCROLL: "scroll" + kt,
        LOAD_DATA_API: "load" + kt + ".data-api"
      }, jt = "active", Bt = {
        DATA_SPY: '[data-spy="scroll"]',
        ACTIVE: ".active",
        NAV_LIST_GROUP: ".nav, .list-group",
        NAV_LINKS: ".nav-link",
        NAV_ITEMS: ".nav-item",
        LIST_ITEMS: ".list-group-item",
        DROPDOWN: ".dropdown",
        DROPDOWN_ITEMS: ".dropdown-item",
        DROPDOWN_TOGGLE: ".dropdown-toggle"
      }, zt = "position", Wt = function () {
        function t(t, e) {
          var n = this;
          this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + Bt.NAV_LINKS + "," + this._config.target + " " + Bt.LIST_ITEMS + "," + this._config.target + " " + Bt.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, At(this._scrollElement).on(Ft.SCROLL, function (t) {
            return n._process(t)
          }), this.refresh(), this._process()
        }
        var e = t.prototype;
        return e.refresh = function () {
          var t = this,
            e = this._scrollElement === this._scrollElement.window ? "offset" : zt,
            n = "auto" === this._config.method ? e : this._config.method,
            r = n === zt ? this._getScrollTop() : 0;
          this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), At.makeArray(At(this._selector)).map(function (t) {
            var e, i = C.getSelectorFromElement(t);
            if (i && (e = At(i)[0]), e) {
              var o = e.getBoundingClientRect();
              if (o.width || o.height) return [At(e)[n]().top + r, i]
            }
            return null
          }).filter(function (t) {
            return t
          }).sort(function (t, e) {
            return t[0] - e[0]
          }).forEach(function (e) {
            t._offsets.push(e[0]), t._targets.push(e[1])
          })
        }, e.dispose = function () {
          At.removeData(this._element, Ot), At(this._scrollElement).off(kt), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
        }, e._getConfig = function (t) {
          if ("string" != typeof (t = i({}, Nt, t)).target) {
            var e = At(t.target).attr("id");
            e || (e = C.getUID(Pt), At(t.target).attr("id", e)), t.target = "#" + e
          }
          return C.typeCheckConfig(Pt, t, Lt), t
        }, e._getScrollTop = function () {
          return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }, e._getScrollHeight = function () {
          return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }, e._getOffsetHeight = function () {
          return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }, e._process = function () {
          var t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            n = this._config.offset + e - this._getOffsetHeight();
          if (this._scrollHeight !== e && this.refresh(), t >= n) {
            var r = this._targets[this._targets.length - 1];
            this._activeTarget !== r && this._activate(r)
          } else {
            if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
            for (var i = this._offsets.length; i--;) this._activeTarget !== this._targets[i] && t >= this._offsets[i] && (void 0 === this._offsets[i + 1] || t < this._offsets[i + 1]) && this._activate(this._targets[i])
          }
        }, e._activate = function (t) {
          this._activeTarget = t, this._clear();
          var e = this._selector.split(",");
          e = e.map(function (e) {
            return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
          });
          var n = At(e.join(","));
          n.hasClass("dropdown-item") ? (n.closest(Bt.DROPDOWN).find(Bt.DROPDOWN_TOGGLE).addClass(jt), n.addClass(jt)) : (n.addClass(jt), n.parents(Bt.NAV_LIST_GROUP).prev(Bt.NAV_LINKS + ", " + Bt.LIST_ITEMS).addClass(jt), n.parents(Bt.NAV_LIST_GROUP).prev(Bt.NAV_ITEMS).children(Bt.NAV_LINKS).addClass(jt)), At(this._scrollElement).trigger(Ft.ACTIVATE, {
            relatedTarget: t
          })
        }, e._clear = function () {
          At(this._selector).filter(Bt.ACTIVE).removeClass(jt)
        }, t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = At(this).data(Ot);
            if (n || (n = new t(this, "object" == typeof e && e), At(this).data(Ot, n)), "string" == typeof e) {
              if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
              n[e]()
            }
          })
        }, r(t, null, [{
          key: "VERSION",
          get: function () {
            return "4.0.0"
          }
        }, {
          key: "Default",
          get: function () {
            return Nt
          }
        }]), t
      }(), At(window).on(Ft.LOAD_DATA_API, function () {
        for (var t = At.makeArray(At(Bt.DATA_SPY)), e = t.length; e--;) {
          var n = At(t[e]);
          Wt._jQueryInterface.call(n, n.data())
        }
      }), At.fn[Pt] = Wt._jQueryInterface, At.fn[Pt].Constructor = Wt, At.fn[Pt].noConflict = function () {
        return At.fn[Pt] = Ht, Wt._jQueryInterface
      }, Wt),
      qe = (xt = ".bs.tab", Ct = (Dt = e).fn.tab, Tt = {
        HIDE: "hide" + xt,
        HIDDEN: "hidden" + xt,
        SHOW: "show" + xt,
        SHOWN: "shown" + xt,
        CLICK_DATA_API: "click.bs.tab.data-api"
      }, Et = "active", Mt = ".active", It = "> li > .active", Rt = function () {
        function t(t) {
          this._element = t
        }
        var e = t.prototype;
        return e.show = function () {
          var t = this;
          if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && Dt(this._element).hasClass(Et) || Dt(this._element).hasClass("disabled"))) {
            var e, n, r = Dt(this._element).closest(".nav, .list-group")[0],
              i = C.getSelectorFromElement(this._element);
            if (r) {
              var o = "UL" === r.nodeName ? It : Mt;
              n = (n = Dt.makeArray(Dt(r).find(o)))[n.length - 1]
            }
            var s = Dt.Event(Tt.HIDE, {
                relatedTarget: this._element
              }),
              a = Dt.Event(Tt.SHOW, {
                relatedTarget: n
              });
            if (n && Dt(n).trigger(s), Dt(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
              i && (e = Dt(i)[0]), this._activate(this._element, r);
              var l = function () {
                var e = Dt.Event(Tt.HIDDEN, {
                    relatedTarget: t._element
                  }),
                  r = Dt.Event(Tt.SHOWN, {
                    relatedTarget: n
                  });
                Dt(n).trigger(e), Dt(t._element).trigger(r)
              };
              e ? this._activate(e, e.parentNode, l) : l()
            }
          }
        }, e.dispose = function () {
          Dt.removeData(this._element, "bs.tab"), this._element = null
        }, e._activate = function (t, e, n) {
          var r = this,
            i = ("UL" === e.nodeName ? Dt(e).find(It) : Dt(e).children(Mt))[0],
            o = n && C.supportsTransitionEnd() && i && Dt(i).hasClass("fade"),
            s = function () {
              return r._transitionComplete(t, i, n)
            };
          i && o ? Dt(i).one(C.TRANSITION_END, s).emulateTransitionEnd(150) : s()
        }, e._transitionComplete = function (t, e, n) {
          if (e) {
            Dt(e).removeClass("show " + Et);
            var r = Dt(e.parentNode).find("> .dropdown-menu .active")[0];
            r && Dt(r).removeClass(Et), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
          }
          if (Dt(t).addClass(Et), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), C.reflow(t), Dt(t).addClass("show"), t.parentNode && Dt(t.parentNode).hasClass("dropdown-menu")) {
            var i = Dt(t).closest(".dropdown")[0];
            i && Dt(i).find(".dropdown-toggle").addClass(Et), t.setAttribute("aria-expanded", !0)
          }
          n && n()
        }, t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = Dt(this),
              r = n.data("bs.tab");
            if (r || (r = new t(this), n.data("bs.tab", r)), "string" == typeof e) {
              if (void 0 === r[e]) throw new TypeError('No method named "' + e + '"');
              r[e]()
            }
          })
        }, r(t, null, [{
          key: "VERSION",
          get: function () {
            return "4.0.0"
          }
        }]), t
      }(), Dt(document).on(Tt.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function (t) {
        t.preventDefault(), Rt._jQueryInterface.call(Dt(this), "show")
      }), Dt.fn.tab = Rt._jQueryInterface, Dt.fn.tab.Constructor = Rt, Dt.fn.tab.noConflict = function () {
        return Dt.fn.tab = Ct, Rt._jQueryInterface
      }, Rt);
    ! function (t) {
      if (void 0 === t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
      var e = t.fn.jquery.split(" ")[0].split(".");
      if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(e), t.Util = C, t.Alert = T, t.Button = E, t.Carousel = M, t.Collapse = I, t.Dropdown = We, t.Modal = Ye, t.Popover = Ve, t.Scrollspy = Ge, t.Tab = qe, t.Tooltip = Ue, Object.defineProperty(t, "__esModule", {
      value: !0
    })
  }), function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.moment = e()
  }(this, function () {
    "use strict";

    function t() {
      return qt.apply(null, arguments)
    }

    function e(t) {
      return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t)
    }

    function n(t) {
      return null != t && "[object Object]" === Object.prototype.toString.call(t)
    }

    function r(t) {
      return void 0 === t
    }

    function i(t) {
      return "number" == typeof t || "[object Number]" === Object.prototype.toString.call(t)
    }

    function o(t) {
      return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
    }

    function s(t, e) {
      var n, r = [];
      for (n = 0; n < t.length; ++n) r.push(e(t[n], n));
      return r
    }

    function a(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }

    function l(t, e) {
      for (var n in e) a(e, n) && (t[n] = e[n]);
      return a(e, "toString") && (t.toString = e.toString), a(e, "valueOf") && (t.valueOf = e.valueOf), t
    }

    function u(t, e, n, r) {
      return ft(t, e, n, r, !0).utc()
    }

    function c(t) {
      return null == t._pf && (t._pf = {
        empty: !1,
        unusedTokens: [],
        unusedInput: [],
        overflow: -2,
        charsLeftOver: 0,
        nullInput: !1,
        invalidMonth: null,
        invalidFormat: !1,
        userInvalidated: !1,
        iso: !1,
        parsedDateParts: [],
        meridiem: null,
        rfc2822: !1,
        weekdayMismatch: !1
      }), t._pf
    }

    function d(t) {
      if (null == t._isValid) {
        var e = c(t),
          n = Xt.call(e.parsedDateParts, function (t) {
            return null != t
          }),
          r = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.weekdayMismatch && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && n);
        if (t._strict && (r = r && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour), null != Object.isFrozen && Object.isFrozen(t)) return r;
        t._isValid = r
      }
      return t._isValid
    }

    function h(t) {
      var e = u(NaN);
      return null != t ? l(c(e), t) : c(e).userInvalidated = !0, e
    }

    function f(t, e) {
      var n, i, o;
      if (r(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), r(e._i) || (t._i = e._i), r(e._f) || (t._f = e._f), r(e._l) || (t._l = e._l), r(e._strict) || (t._strict = e._strict), r(e._tzm) || (t._tzm = e._tzm), r(e._isUTC) || (t._isUTC = e._isUTC), r(e._offset) || (t._offset = e._offset), r(e._pf) || (t._pf = c(e)), r(e._locale) || (t._locale = e._locale), Qt.length > 0)
        for (n = 0; n < Qt.length; n++) r(o = e[i = Qt[n]]) || (t[i] = o);
      return t
    }

    function p(e) {
      f(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === Zt && (Zt = !0, t.updateOffset(this), Zt = !1)
    }

    function g(t) {
      return t instanceof p || null != t && null != t._isAMomentObject
    }

    function m(t) {
      return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
    }

    function v(t) {
      var e = +t,
        n = 0;
      return 0 !== e && isFinite(e) && (n = m(e)), n
    }

    function y(t, e, n) {
      var r, i = Math.min(t.length, e.length),
        o = Math.abs(t.length - e.length),
        s = 0;
      for (r = 0; r < i; r++)(n && t[r] !== e[r] || !n && v(t[r]) !== v(e[r])) && s++;
      return s + o
    }

    function b(e) {
      !1 === t.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
    }

    function w(e, n) {
      var r = !0;
      return l(function () {
        if (null != t.deprecationHandler && t.deprecationHandler(null, e), r) {
          for (var i, o = [], s = 0; s < arguments.length; s++) {
            if (i = "", "object" == typeof arguments[s]) {
              for (var a in i += "\n[" + s + "] ", arguments[0]) i += a + ": " + arguments[0][a] + ", ";
              i = i.slice(0, -2)
            } else i = arguments[s];
            o.push(i)
          }
          b(e + "\nArguments: " + Array.prototype.slice.call(o).join("") + "\n" + (new Error).stack), r = !1
        }
        return n.apply(this, arguments)
      }, n)
    }

    function _(e, n) {
      null != t.deprecationHandler && t.deprecationHandler(e, n), Kt[e] || (b(n), Kt[e] = !0)
    }

    function S(t) {
      return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t)
    }

    function D(t, e) {
      var r, i = l({}, t);
      for (r in e) a(e, r) && (n(t[r]) && n(e[r]) ? (i[r] = {}, l(i[r], t[r]), l(i[r], e[r])) : null != e[r] ? i[r] = e[r] : delete i[r]);
      for (r in t) a(t, r) && !a(e, r) && n(t[r]) && (i[r] = l({}, i[r]));
      return i
    }

    function x(t) {
      null != t && this.set(t)
    }

    function C(t, e) {
      var n = t.toLowerCase();
      Jt[n] = Jt[n + "s"] = Jt[e] = t
    }

    function T(t) {
      return "string" == typeof t ? Jt[t] || Jt[t.toLowerCase()] : void 0
    }

    function E(t) {
      var e, n, r = {};
      for (n in t) a(t, n) && (e = T(n)) && (r[e] = t[n]);
      return r
    }

    function M(t, e) {
      te[t] = e
    }

    function I(t, e, n) {
      var r = "" + Math.abs(t),
        i = e - r.length;
      return (t >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + r
    }

    function R(t, e, n, r) {
      var i = r;
      "string" == typeof r && (i = function () {
        return this[r]()
      }), t && (ie[t] = i), e && (ie[e[0]] = function () {
        return I(i.apply(this, arguments), e[1], e[2])
      }), n && (ie[n] = function () {
        return this.localeData().ordinal(i.apply(this, arguments), t)
      })
    }

    function A(t, e) {
      return t.isValid() ? (e = P(e, t.localeData()), re[e] = re[e] || function (t) {
        var e, n, r, i = t.match(ee);
        for (e = 0, n = i.length; e < n; e++) ie[i[e]] ? i[e] = ie[i[e]] : i[e] = (r = i[e]).match(/\[[\s\S]/) ? r.replace(/^\[|\]$/g, "") : r.replace(/\\/g, "");
        return function (e) {
          var r, o = "";
          for (r = 0; r < n; r++) o += S(i[r]) ? i[r].call(e, t) : i[r];
          return o
        }
      }(e), re[e](t)) : t.localeData().invalidDate()
    }

    function P(t, e) {
      function n(t) {
        return e.longDateFormat(t) || t
      }
      var r = 5;
      for (ne.lastIndex = 0; r >= 0 && ne.test(t);) t = t.replace(ne, n), ne.lastIndex = 0, r -= 1;
      return t
    }

    function O(t, e, n) {
      _e[t] = S(e) ? e : function (t, r) {
        return t && n ? n : e
      }
    }

    function k(t) {
      return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function H(t, e) {
      var n, r = e;
      for ("string" == typeof t && (t = [t]), i(e) && (r = function (t, n) {
          n[e] = v(t)
        }), n = 0; n < t.length; n++) Se[t[n]] = r
    }

    function N(t, e) {
      H(t, function (t, n, r, i) {
        r._w = r._w || {}, e(t, r._w, r, i)
      })
    }

    function L(t) {
      return F(t) ? 366 : 365
    }

    function F(t) {
      return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
    }

    function j(e, n) {
      return function (r) {
        return null != r ? (z(this, e, r), t.updateOffset(this, n), this) : B(this, e)
      }
    }

    function B(t, e) {
      return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN
    }

    function z(t, e, n) {
      t.isValid() && !isNaN(n) && ("FullYear" === e && F(t.year()) && 1 === t.month() && 29 === t.date() ? t._d["set" + (t._isUTC ? "UTC" : "") + e](n, t.month(), W(n, t.month())) : t._d["set" + (t._isUTC ? "UTC" : "") + e](n))
    }

    function W(t, e) {
      if (isNaN(t) || isNaN(e)) return NaN;
      var n = (e % 12 + 12) % 12;
      return t += (e - n) / 12, 1 === n ? F(t) ? 29 : 28 : 31 - n % 7 % 2
    }

    function Y(t, e) {
      var n;
      if (!t.isValid()) return t;
      if ("string" == typeof e)
        if (/^\d+$/.test(e)) e = v(e);
        else if (!i(e = t.localeData().monthsParse(e))) return t;
      return n = Math.min(t.date(), W(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n), t
    }

    function U(e) {
      return null != e ? (Y(this, e), t.updateOffset(this, !0), this) : B(this, "Month")
    }

    function V() {
      function t(t, e) {
        return e.length - t.length
      }
      var e, n, r = [],
        i = [],
        o = [];
      for (e = 0; e < 12; e++) n = u([2e3, e]), r.push(this.monthsShort(n, "")), i.push(this.months(n, "")), o.push(this.months(n, "")), o.push(this.monthsShort(n, ""));
      for (r.sort(t), i.sort(t), o.sort(t), e = 0; e < 12; e++) r[e] = k(r[e]), i[e] = k(i[e]);
      for (e = 0; e < 24; e++) o[e] = k(o[e]);
      this._monthsRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")
    }

    function G(t) {
      var e = new Date(Date.UTC.apply(null, arguments));
      return t < 100 && t >= 0 && isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t), e
    }

    function q(t, e, n) {
      var r = 7 + e - n;
      return -(7 + G(t, 0, r).getUTCDay() - e) % 7 + r - 1
    }

    function X(t, e, n, r, i) {
      var o, s, a = 1 + 7 * (e - 1) + (7 + n - r) % 7 + q(t, r, i);
      return a <= 0 ? s = L(o = t - 1) + a : a > L(t) ? (o = t + 1, s = a - L(t)) : (o = t, s = a), {
        year: o,
        dayOfYear: s
      }
    }

    function $(t, e, n) {
      var r, i, o = q(t.year(), e, n),
        s = Math.floor((t.dayOfYear() - o - 1) / 7) + 1;
      return s < 1 ? r = s + Q(i = t.year() - 1, e, n) : s > Q(t.year(), e, n) ? (r = s - Q(t.year(), e, n), i = t.year() + 1) : (i = t.year(), r = s), {
        week: r,
        year: i
      }
    }

    function Q(t, e, n) {
      var r = q(t, e, n),
        i = q(t + 1, e, n);
      return (L(t) - r + i) / 7
    }

    function Z() {
      function t(t, e) {
        return e.length - t.length
      }
      var e, n, r, i, o, s = [],
        a = [],
        l = [],
        c = [];
      for (e = 0; e < 7; e++) n = u([2e3, 1]).day(e), r = this.weekdaysMin(n, ""), i = this.weekdaysShort(n, ""), o = this.weekdays(n, ""), s.push(r), a.push(i), l.push(o), c.push(r), c.push(i), c.push(o);
      for (s.sort(t), a.sort(t), l.sort(t), c.sort(t), e = 0; e < 7; e++) a[e] = k(a[e]), l[e] = k(l[e]), c[e] = k(c[e]);
      this._weekdaysRegex = new RegExp("^(" + c.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")
    }

    function K() {
      return this.hours() % 12 || 12
    }

    function J(t, e) {
      R(t, 0, 0, function () {
        return this.localeData().meridiem(this.hours(), this.minutes(), e)
      })
    }

    function tt(t, e) {
      return e._meridiemParse
    }

    function et(t) {
      return t ? t.toLowerCase().replace("_", "-") : t
    }

    function nt(t) {
      var e = null;
      if (!Xe[t] && "undefined" != typeof module && module && module.exports) try {
        e = Ve._abbr, require("./locale/" + t), rt(e)
      } catch (t) {}
      return Xe[t]
    }

    function rt(t, e) {
      var n;
      return t && (n = r(e) ? ot(t) : it(t, e)) && (Ve = n), Ve._abbr
    }

    function it(t, e) {
      if (null !== e) {
        var n = qe;
        if (e.abbr = t, null != Xe[t]) _("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = Xe[t]._config;
        else if (null != e.parentLocale) {
          if (null == Xe[e.parentLocale]) return $e[e.parentLocale] || ($e[e.parentLocale] = []), $e[e.parentLocale].push({
            name: t,
            config: e
          }), null;
          n = Xe[e.parentLocale]._config
        }
        return Xe[t] = new x(D(n, e)), $e[t] && $e[t].forEach(function (t) {
          it(t.name, t.config)
        }), rt(t), Xe[t]
      }
      return delete Xe[t], null
    }

    function ot(t) {
      var n;
      if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return Ve;
      if (!e(t)) {
        if (n = nt(t)) return n;
        t = [t]
      }
      return function (t) {
        for (var e, n, r, i, o = 0; o < t.length;) {
          for (e = (i = et(t[o]).split("-")).length, n = (n = et(t[o + 1])) ? n.split("-") : null; e > 0;) {
            if (r = nt(i.slice(0, e).join("-"))) return r;
            if (n && n.length >= e && y(i, n, !0) >= e - 1) break;
            e--
          }
          o++
        }
        return null
      }(t)
    }

    function st(t) {
      var e, n = t._a;
      return n && -2 === c(t).overflow && (e = n[xe] < 0 || n[xe] > 11 ? xe : n[Ce] < 1 || n[Ce] > W(n[De], n[xe]) ? Ce : n[Te] < 0 || n[Te] > 24 || 24 === n[Te] && (0 !== n[Ee] || 0 !== n[Me] || 0 !== n[Ie]) ? Te : n[Ee] < 0 || n[Ee] > 59 ? Ee : n[Me] < 0 || n[Me] > 59 ? Me : n[Ie] < 0 || n[Ie] > 999 ? Ie : -1, c(t)._overflowDayOfYear && (e < De || e > Ce) && (e = Ce), c(t)._overflowWeeks && -1 === e && (e = Re), c(t)._overflowWeekday && -1 === e && (e = Ae), c(t).overflow = e), t
    }

    function at(t, e, n) {
      return null != t ? t : null != e ? e : n
    }

    function lt(e) {
      var n, r, i, o, s, a, l, u = [];
      if (!e._d) {
        for (a = e, l = void 0, l = new Date(t.now()), i = a._useUTC ? [l.getUTCFullYear(), l.getUTCMonth(), l.getUTCDate()] : [l.getFullYear(), l.getMonth(), l.getDate()], e._w && null == e._a[Ce] && null == e._a[xe] && function (t) {
            var e, n, r, i, o, s, a, l;
            if (null != (e = t._w).GG || null != e.W || null != e.E) o = 1, s = 4, n = at(e.GG, t._a[De], $(pt(), 1, 4).year), r = at(e.W, 1), ((i = at(e.E, 1)) < 1 || i > 7) && (l = !0);
            else {
              o = t._locale._week.dow, s = t._locale._week.doy;
              var u = $(pt(), o, s);
              n = at(e.gg, t._a[De], u.year), r = at(e.w, u.week), null != e.d ? ((i = e.d) < 0 || i > 6) && (l = !0) : null != e.e ? (i = e.e + o, (e.e < 0 || e.e > 6) && (l = !0)) : i = o
            }
            r < 1 || r > Q(n, o, s) ? c(t)._overflowWeeks = !0 : null != l ? c(t)._overflowWeekday = !0 : (a = X(n, r, i, o, s), t._a[De] = a.year, t._dayOfYear = a.dayOfYear)
          }(e), null != e._dayOfYear && (s = at(e._a[De], i[De]), (e._dayOfYear > L(s) || 0 === e._dayOfYear) && (c(e)._overflowDayOfYear = !0), r = G(s, 0, e._dayOfYear), e._a[xe] = r.getUTCMonth(), e._a[Ce] = r.getUTCDate()), n = 0; n < 3 && null == e._a[n]; ++n) e._a[n] = u[n] = i[n];
        for (; n < 7; n++) e._a[n] = u[n] = null == e._a[n] ? 2 === n ? 1 : 0 : e._a[n];
        24 === e._a[Te] && 0 === e._a[Ee] && 0 === e._a[Me] && 0 === e._a[Ie] && (e._nextDay = !0, e._a[Te] = 0), e._d = (e._useUTC ? G : function (t, e, n, r, i, o, s) {
          var a = new Date(t, e, n, r, i, o, s);
          return t < 100 && t >= 0 && isFinite(a.getFullYear()) && a.setFullYear(t), a
        }).apply(null, u), o = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Te] = 24), e._w && void 0 !== e._w.d && e._w.d !== o && (c(e).weekdayMismatch = !0)
      }
    }

    function ut(t) {
      var e, n, r, i, o, s, a = t._i,
        l = Qe.exec(a) || Ze.exec(a);
      if (l) {
        for (c(t).iso = !0, e = 0, n = Je.length; e < n; e++)
          if (Je[e][1].exec(l[1])) {
            i = Je[e][0], r = !1 !== Je[e][2];
            break
          } if (null == i) return void(t._isValid = !1);
        if (l[3]) {
          for (e = 0, n = tn.length; e < n; e++)
            if (tn[e][1].exec(l[3])) {
              o = (l[2] || " ") + tn[e][0];
              break
            } if (null == o) return void(t._isValid = !1)
        }
        if (!r && null != o) return void(t._isValid = !1);
        if (l[4]) {
          if (!Ke.exec(l[4])) return void(t._isValid = !1);
          s = "Z"
        }
        t._f = i + (o || "") + (s || ""), dt(t)
      } else t._isValid = !1
    }

    function ct(t) {
      var e, n, r, i, o, s, a, l, u, d, h, f = nn.exec(t._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim());
      if (f) {
        var p = (i = f[4], o = f[3], s = f[2], a = f[5], l = f[6], u = f[7], h = [(d = parseInt(i, 10), d <= 49 ? 2e3 + d : d <= 999 ? 1900 + d : d), Ne.indexOf(o), parseInt(s, 10), parseInt(a, 10), parseInt(l, 10)], u && h.push(parseInt(u, 10)), h);
        if (e = f[1], n = p, r = t, e && Be.indexOf(e) !== new Date(n[0], n[1], n[2]).getDay() && (c(r).weekdayMismatch = !0, r._isValid = !1, 1)) return;
        t._a = p, t._tzm = function (t, e, n) {
          if (t) return rn[t];
          if (e) return 0;
          var r = parseInt(n, 10),
            i = r % 100;
          return (r - i) / 100 * 60 + i
        }(f[8], f[9], f[10]), t._d = G.apply(null, t._a), t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), c(t).rfc2822 = !0
      } else t._isValid = !1
    }

    function dt(e) {
      if (e._f !== t.ISO_8601)
        if (e._f !== t.RFC_2822) {
          e._a = [], c(e).empty = !0;
          var n, r, i, o, s, l = "" + e._i,
            u = l.length,
            d = 0;
          for (i = P(e._f, e._locale).match(ee) || [], n = 0; n < i.length; n++) o = i[n], (r = (l.match((b = o, w = e, a(_e, b) ? _e[b](w._strict, w._locale) : new RegExp(k(b.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (t, e, n, r, i) {
            return e || n || r || i
          }))))) || [])[0]) && ((s = l.substr(0, l.indexOf(r))).length > 0 && c(e).unusedInput.push(s), l = l.slice(l.indexOf(r) + r.length), d += r.length), ie[o] ? (r ? c(e).empty = !1 : c(e).unusedTokens.push(o), m = o, y = e, null != (v = r) && a(Se, m) && Se[m](v, y._a, y, m)) : e._strict && !r && c(e).unusedTokens.push(o);
          c(e).charsLeftOver = u - d, l.length > 0 && c(e).unusedInput.push(l), e._a[Te] <= 12 && !0 === c(e).bigHour && e._a[Te] > 0 && (c(e).bigHour = void 0), c(e).parsedDateParts = e._a.slice(0), c(e).meridiem = e._meridiem, e._a[Te] = (h = e._locale, f = e._a[Te], null == (p = e._meridiem) ? f : null != h.meridiemHour ? h.meridiemHour(f, p) : null != h.isPM ? ((g = h.isPM(p)) && f < 12 && (f += 12), g || 12 !== f || (f = 0), f) : f), lt(e), st(e)
        } else ct(e);
      else ut(e);
      var h, f, p, g, m, v, y, b, w
    }

    function ht(a) {
      var u, m, v, y, b = a._i,
        w = a._f;
      return a._locale = a._locale || ot(a._l), null === b || void 0 === w && "" === b ? h({
        nullInput: !0
      }) : ("string" == typeof b && (a._i = b = a._locale.preparse(b)), g(b) ? new p(st(b)) : (o(b) ? a._d = b : e(w) ? function (t) {
        var e, n, r, i, o;
        if (0 === t._f.length) return c(t).invalidFormat = !0, void(t._d = new Date(NaN));
        for (i = 0; i < t._f.length; i++) o = 0, e = f({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[i], dt(e), d(e) && (o += c(e).charsLeftOver, o += 10 * c(e).unusedTokens.length, c(e).score = o, (null == r || o < r) && (r = o, n = e));
        l(t, n || e)
      }(a) : w ? dt(a) : r(y = (u = a)._i) ? u._d = new Date(t.now()) : o(y) ? u._d = new Date(y.valueOf()) : "string" == typeof y ? (m = u, null === (v = en.exec(m._i)) ? (ut(m), !1 === m._isValid && (delete m._isValid, ct(m), !1 === m._isValid && (delete m._isValid, t.createFromInputFallback(m)))) : m._d = new Date(+v[1])) : e(y) ? (u._a = s(y.slice(0), function (t) {
        return parseInt(t, 10)
      }), lt(u)) : n(y) ? function (t) {
        if (!t._d) {
          var e = E(t._i);
          t._a = s([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], function (t) {
            return t && parseInt(t, 10)
          }), lt(t)
        }
      }(u) : i(y) ? u._d = new Date(y) : t.createFromInputFallback(u), d(a) || (a._d = null), a))
    }

    function ft(t, r, i, o, s) {
      var a, l = {};
      return !0 !== i && !1 !== i || (o = i, i = void 0), (n(t) && function (t) {
        if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(t).length;
        var e;
        for (e in t)
          if (t.hasOwnProperty(e)) return !1;
        return !0
      }(t) || e(t) && 0 === t.length) && (t = void 0), l._isAMomentObject = !0, l._useUTC = l._isUTC = s, l._l = i, l._i = t, l._f = r, l._strict = o, (a = new p(st(ht(l))))._nextDay && (a.add(1, "d"), a._nextDay = void 0), a
    }

    function pt(t, e, n, r) {
      return ft(t, e, n, r, !1)
    }

    function gt(t, n) {
      var r, i;
      if (1 === n.length && e(n[0]) && (n = n[0]), !n.length) return pt();
      for (r = n[0], i = 1; i < n.length; ++i) n[i].isValid() && !n[i][t](r) || (r = n[i]);
      return r
    }

    function mt(t) {
      var e = E(t),
        n = e.year || 0,
        r = e.quarter || 0,
        i = e.month || 0,
        o = e.week || 0,
        s = e.day || 0,
        a = e.hour || 0,
        l = e.minute || 0,
        u = e.second || 0,
        c = e.millisecond || 0;
      this._isValid = function (t) {
        for (var e in t)
          if (-1 === Pe.call(an, e) || null != t[e] && isNaN(t[e])) return !1;
        for (var n = !1, r = 0; r < an.length; ++r)
          if (t[an[r]]) {
            if (n) return !1;
            parseFloat(t[an[r]]) !== v(t[an[r]]) && (n = !0)
          } return !0
      }(e), this._milliseconds = +c + 1e3 * u + 6e4 * l + 1e3 * a * 60 * 60, this._days = +s + 7 * o, this._months = +i + 3 * r + 12 * n, this._data = {}, this._locale = ot(), this._bubble()
    }

    function vt(t) {
      return t instanceof mt
    }

    function yt(t) {
      return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t)
    }

    function bt(t, e) {
      R(t, 0, 0, function () {
        var t = this.utcOffset(),
          n = "+";
        return t < 0 && (t = -t, n = "-"), n + I(~~(t / 60), 2) + e + I(~~t % 60, 2)
      })
    }

    function wt(t, e) {
      var n = (e || "").match(t);
      if (null === n) return null;
      var r = ((n[n.length - 1] || []) + "").match(ln) || ["-", 0, 0],
        i = 60 * r[1] + v(r[2]);
      return 0 === i ? 0 : "+" === r[0] ? i : -i
    }

    function _t(e, n) {
      var r, i;
      return n._isUTC ? (r = n.clone(), i = (g(e) || o(e) ? e.valueOf() : pt(e).valueOf()) - r.valueOf(), r._d.setTime(r._d.valueOf() + i), t.updateOffset(r, !1), r) : pt(e).local()
    }

    function St(t) {
      return 15 * -Math.round(t._d.getTimezoneOffset() / 15)
    }

    function Dt() {
      return !!this.isValid() && this._isUTC && 0 === this._offset
    }

    function xt(t, e) {
      var n, r, o, s, l, u, c = t,
        d = null;
      return vt(t) ? c = {
        ms: t._milliseconds,
        d: t._days,
        M: t._months
      } : i(t) ? (c = {}, e ? c[e] = t : c.milliseconds = t) : (d = un.exec(t)) ? (n = "-" === d[1] ? -1 : 1, c = {
        y: 0,
        d: v(d[Ce]) * n,
        h: v(d[Te]) * n,
        m: v(d[Ee]) * n,
        s: v(d[Me]) * n,
        ms: v(yt(1e3 * d[Ie])) * n
      }) : (d = cn.exec(t)) ? (n = "-" === d[1] ? -1 : (d[1], 1), c = {
        y: Ct(d[2], n),
        M: Ct(d[3], n),
        w: Ct(d[4], n),
        d: Ct(d[5], n),
        h: Ct(d[6], n),
        m: Ct(d[7], n),
        s: Ct(d[8], n)
      }) : null == c ? c = {} : "object" == typeof c && ("from" in c || "to" in c) && (s = pt(c.from), l = pt(c.to), o = s.isValid() && l.isValid() ? (l = _t(l, s), s.isBefore(l) ? u = Tt(s, l) : ((u = Tt(l, s)).milliseconds = -u.milliseconds, u.months = -u.months), u) : {
        milliseconds: 0,
        months: 0
      }, (c = {}).ms = o.milliseconds, c.M = o.months), r = new mt(c), vt(t) && a(t, "_locale") && (r._locale = t._locale), r
    }

    function Ct(t, e) {
      var n = t && parseFloat(t.replace(",", "."));
      return (isNaN(n) ? 0 : n) * e
    }

    function Tt(t, e) {
      var n = {
        milliseconds: 0,
        months: 0
      };
      return n.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(n.months, "M").isAfter(e) && --n.months, n.milliseconds = +e - +t.clone().add(n.months, "M"), n
    }

    function Et(t, e) {
      return function (n, r) {
        var i;
        return null === r || isNaN(+r) || (_(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), i = n, n = r, r = i), Mt(this, xt(n = "string" == typeof n ? +n : n, r), t), this
      }
    }

    function Mt(e, n, r, i) {
      var o = n._milliseconds,
        s = yt(n._days),
        a = yt(n._months);
      e.isValid() && (i = null == i || i, a && Y(e, B(e, "Month") + a * r), s && z(e, "Date", B(e, "Date") + s * r), o && e._d.setTime(e._d.valueOf() + o * r), i && t.updateOffset(e, s || a))
    }

    function It(t, e) {
      var n = 12 * (e.year() - t.year()) + (e.month() - t.month()),
        r = t.clone().add(n, "months");
      return -(n + (e - r < 0 ? (e - r) / (r - t.clone().add(n - 1, "months")) : (e - r) / (t.clone().add(n + 1, "months") - r))) || 0
    }

    function Rt(t) {
      var e;
      return void 0 === t ? this._locale._abbr : (null != (e = ot(t)) && (this._locale = e), this)
    }

    function At() {
      return this._locale
    }

    function Pt(t, e) {
      R(0, [t, t.length], 0, e)
    }

    function Ot(t, e, n, r, i) {
      var o;
      return null == t ? $(this, r, i).year : (e > (o = Q(t, r, i)) && (e = o), function (t, e, n, r, i) {
        var o = X(t, e, n, r, i),
          s = G(o.year, 0, o.dayOfYear);
        return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this
      }.call(this, t, e, n, r, i))
    }

    function kt(t, e) {
      e[Ie] = v(1e3 * ("0." + t))
    }

    function Ht(t) {
      return t
    }

    function Nt(t, e, n, r) {
      var i = ot(),
        o = u().set(r, e);
      return i[n](o, t)
    }

    function Lt(t, e, n) {
      if (i(t) && (e = t, t = void 0), t = t || "", null != e) return Nt(t, e, n, "month");
      var r, o = [];
      for (r = 0; r < 12; r++) o[r] = Nt(t, r, n, "month");
      return o
    }

    function Ft(t, e, n, r) {
      "boolean" == typeof t ? (i(e) && (n = e, e = void 0), e = e || "") : (n = e = t, t = !1, i(e) && (n = e, e = void 0), e = e || "");
      var o = ot(),
        s = t ? o._week.dow : 0;
      if (null != n) return Nt(e, (n + s) % 7, r, "day");
      var a, l = [];
      for (a = 0; a < 7; a++) l[a] = Nt(e, (a + s) % 7, r, "day");
      return l
    }

    function jt(t, e, n, r) {
      var i = xt(e, n);
      return t._milliseconds += r * i._milliseconds, t._days += r * i._days, t._months += r * i._months, t._bubble()
    }

    function Bt(t) {
      return t < 0 ? Math.floor(t) : Math.ceil(t)
    }

    function zt(t) {
      return 4800 * t / 146097
    }

    function Wt(t) {
      return 146097 * t / 4800
    }

    function Yt(t) {
      return function () {
        return this.as(t)
      }
    }

    function Ut(t) {
      return function () {
        return this.isValid() ? this._data[t] : NaN
      }
    }

    function Vt(t) {
      return (t > 0) - (t < 0) || +t
    }

    function Gt() {
      if (!this.isValid()) return this.localeData().invalidDate();
      var t, e, n = jn(this._milliseconds) / 1e3,
        r = jn(this._days),
        i = jn(this._months);
      e = m((t = m(n / 60)) / 60), n %= 60, t %= 60;
      var o = m(i / 12),
        s = i %= 12,
        a = r,
        l = e,
        u = t,
        c = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
        d = this.asSeconds();
      if (!d) return "P0D";
      var h = d < 0 ? "-" : "",
        f = Vt(this._months) !== Vt(d) ? "-" : "",
        p = Vt(this._days) !== Vt(d) ? "-" : "",
        g = Vt(this._milliseconds) !== Vt(d) ? "-" : "";
      return h + "P" + (o ? f + o + "Y" : "") + (s ? f + s + "M" : "") + (a ? p + a + "D" : "") + (l || u || c ? "T" : "") + (l ? g + l + "H" : "") + (u ? g + u + "M" : "") + (c ? g + c + "S" : "")
    }
    var qt, Xt;
    Xt = Array.prototype.some ? Array.prototype.some : function (t) {
      for (var e = Object(this), n = e.length >>> 0, r = 0; r < n; r++)
        if (r in e && t.call(this, e[r], r, e)) return !0;
      return !1
    };
    var $t, Qt = t.momentProperties = [],
      Zt = !1,
      Kt = {};
    t.suppressDeprecationWarnings = !1, t.deprecationHandler = null, $t = Object.keys ? Object.keys : function (t) {
      var e, n = [];
      for (e in t) a(t, e) && n.push(e);
      return n
    };
    var Jt = {},
      te = {},
      ee = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
      ne = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
      re = {},
      ie = {},
      oe = /\d/,
      se = /\d\d/,
      ae = /\d{3}/,
      le = /\d{4}/,
      ue = /[+-]?\d{6}/,
      ce = /\d\d?/,
      de = /\d\d\d\d?/,
      he = /\d\d\d\d\d\d?/,
      fe = /\d{1,3}/,
      pe = /\d{1,4}/,
      ge = /[+-]?\d{1,6}/,
      me = /\d+/,
      ve = /[+-]?\d+/,
      ye = /Z|[+-]\d\d:?\d\d/gi,
      be = /Z|[+-]\d\d(?::?\d\d)?/gi,
      we = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
      _e = {},
      Se = {},
      De = 0,
      xe = 1,
      Ce = 2,
      Te = 3,
      Ee = 4,
      Me = 5,
      Ie = 6,
      Re = 7,
      Ae = 8;
    R("Y", 0, 0, function () {
      var t = this.year();
      return t <= 9999 ? "" + t : "+" + t
    }), R(0, ["YY", 2], 0, function () {
      return this.year() % 100
    }), R(0, ["YYYY", 4], 0, "year"), R(0, ["YYYYY", 5], 0, "year"), R(0, ["YYYYYY", 6, !0], 0, "year"), C("year", "y"), M("year", 1), O("Y", ve), O("YY", ce, se), O("YYYY", pe, le), O("YYYYY", ge, ue), O("YYYYYY", ge, ue), H(["YYYYY", "YYYYYY"], De), H("YYYY", function (e, n) {
      n[De] = 2 === e.length ? t.parseTwoDigitYear(e) : v(e)
    }), H("YY", function (e, n) {
      n[De] = t.parseTwoDigitYear(e)
    }), H("Y", function (t, e) {
      e[De] = parseInt(t, 10)
    }), t.parseTwoDigitYear = function (t) {
      return v(t) + (v(t) > 68 ? 1900 : 2e3)
    };
    var Pe, Oe = j("FullYear", !0);
    Pe = Array.prototype.indexOf ? Array.prototype.indexOf : function (t) {
      var e;
      for (e = 0; e < this.length; ++e)
        if (this[e] === t) return e;
      return -1
    }, R("M", ["MM", 2], "Mo", function () {
      return this.month() + 1
    }), R("MMM", 0, 0, function (t) {
      return this.localeData().monthsShort(this, t)
    }), R("MMMM", 0, 0, function (t) {
      return this.localeData().months(this, t)
    }), C("month", "M"), M("month", 8), O("M", ce), O("MM", ce, se), O("MMM", function (t, e) {
      return e.monthsShortRegex(t)
    }), O("MMMM", function (t, e) {
      return e.monthsRegex(t)
    }), H(["M", "MM"], function (t, e) {
      e[xe] = v(t) - 1
    }), H(["MMM", "MMMM"], function (t, e, n, r) {
      var i = n._locale.monthsParse(t, r, n._strict);
      null != i ? e[xe] = i : c(n).invalidMonth = t
    });
    var ke = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
      He = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
      Ne = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
      Le = we,
      Fe = we;
    R("w", ["ww", 2], "wo", "week"), R("W", ["WW", 2], "Wo", "isoWeek"), C("week", "w"), C("isoWeek", "W"), M("week", 5), M("isoWeek", 5), O("w", ce), O("ww", ce, se), O("W", ce), O("WW", ce, se), N(["w", "ww", "W", "WW"], function (t, e, n, r) {
      e[r.substr(0, 1)] = v(t)
    }), R("d", 0, "do", "day"), R("dd", 0, 0, function (t) {
      return this.localeData().weekdaysMin(this, t)
    }), R("ddd", 0, 0, function (t) {
      return this.localeData().weekdaysShort(this, t)
    }), R("dddd", 0, 0, function (t) {
      return this.localeData().weekdays(this, t)
    }), R("e", 0, 0, "weekday"), R("E", 0, 0, "isoWeekday"), C("day", "d"), C("weekday", "e"), C("isoWeekday", "E"), M("day", 11), M("weekday", 11), M("isoWeekday", 11), O("d", ce), O("e", ce), O("E", ce), O("dd", function (t, e) {
      return e.weekdaysMinRegex(t)
    }), O("ddd", function (t, e) {
      return e.weekdaysShortRegex(t)
    }), O("dddd", function (t, e) {
      return e.weekdaysRegex(t)
    }), N(["dd", "ddd", "dddd"], function (t, e, n, r) {
      var i = n._locale.weekdaysParse(t, r, n._strict);
      null != i ? e.d = i : c(n).invalidWeekday = t
    }), N(["d", "e", "E"], function (t, e, n, r) {
      e[r] = v(t)
    });
    var je = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      Be = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
      ze = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
      We = we,
      Ye = we,
      Ue = we;
    R("H", ["HH", 2], 0, "hour"), R("h", ["hh", 2], 0, K), R("k", ["kk", 2], 0, function () {
      return this.hours() || 24
    }), R("hmm", 0, 0, function () {
      return "" + K.apply(this) + I(this.minutes(), 2)
    }), R("hmmss", 0, 0, function () {
      return "" + K.apply(this) + I(this.minutes(), 2) + I(this.seconds(), 2)
    }), R("Hmm", 0, 0, function () {
      return "" + this.hours() + I(this.minutes(), 2)
    }), R("Hmmss", 0, 0, function () {
      return "" + this.hours() + I(this.minutes(), 2) + I(this.seconds(), 2)
    }), J("a", !0), J("A", !1), C("hour", "h"), M("hour", 13), O("a", tt), O("A", tt), O("H", ce), O("h", ce), O("k", ce), O("HH", ce, se), O("hh", ce, se), O("kk", ce, se), O("hmm", de), O("hmmss", he), O("Hmm", de), O("Hmmss", he), H(["H", "HH"], Te), H(["k", "kk"], function (t, e, n) {
      var r = v(t);
      e[Te] = 24 === r ? 0 : r
    }), H(["a", "A"], function (t, e, n) {
      n._isPm = n._locale.isPM(t), n._meridiem = t
    }), H(["h", "hh"], function (t, e, n) {
      e[Te] = v(t), c(n).bigHour = !0
    }), H("hmm", function (t, e, n) {
      var r = t.length - 2;
      e[Te] = v(t.substr(0, r)), e[Ee] = v(t.substr(r)), c(n).bigHour = !0
    }), H("hmmss", function (t, e, n) {
      var r = t.length - 4,
        i = t.length - 2;
      e[Te] = v(t.substr(0, r)), e[Ee] = v(t.substr(r, 2)), e[Me] = v(t.substr(i)), c(n).bigHour = !0
    }), H("Hmm", function (t, e, n) {
      var r = t.length - 2;
      e[Te] = v(t.substr(0, r)), e[Ee] = v(t.substr(r))
    }), H("Hmmss", function (t, e, n) {
      var r = t.length - 4,
        i = t.length - 2;
      e[Te] = v(t.substr(0, r)), e[Ee] = v(t.substr(r, 2)), e[Me] = v(t.substr(i))
    });
    var Ve, Ge = j("Hours", !0),
      qe = {
        calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L"
        },
        longDateFormat: {
          LTS: "h:mm:ss A",
          LT: "h:mm A",
          L: "MM/DD/YYYY",
          LL: "MMMM D, YYYY",
          LLL: "MMMM D, YYYY h:mm A",
          LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        invalidDate: "Invalid date",
        ordinal: "%d",
        dayOfMonthOrdinalParse: /\d{1,2}/,
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years"
        },
        months: He,
        monthsShort: Ne,
        week: {
          dow: 0,
          doy: 6
        },
        weekdays: je,
        weekdaysMin: ze,
        weekdaysShort: Be,
        meridiemParse: /[ap]\.?m?\.?/i
      },
      Xe = {},
      $e = {},
      Qe = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      Ze = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      Ke = /Z|[+-]\d\d(?::?\d\d)?/,
      Je = [
        ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
        ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
        ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
        ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
        ["YYYY-DDD", /\d{4}-\d{3}/],
        ["YYYY-MM", /\d{4}-\d\d/, !1],
        ["YYYYYYMMDD", /[+-]\d{10}/],
        ["YYYYMMDD", /\d{8}/],
        ["GGGG[W]WWE", /\d{4}W\d{3}/],
        ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
        ["YYYYDDD", /\d{7}/]
      ],
      tn = [
        ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
        ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
        ["HH:mm:ss", /\d\d:\d\d:\d\d/],
        ["HH:mm", /\d\d:\d\d/],
        ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
        ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
        ["HHmmss", /\d\d\d\d\d\d/],
        ["HHmm", /\d\d\d\d/],
        ["HH", /\d\d/]
      ],
      en = /^\/?Date\((\-?\d+)/i,
      nn = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
      rn = {
        UT: 0,
        GMT: 0,
        EDT: -240,
        EST: -300,
        CDT: -300,
        CST: -360,
        MDT: -360,
        MST: -420,
        PDT: -420,
        PST: -480
      };
    t.createFromInputFallback = w("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (t) {
      t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
    }), t.ISO_8601 = function () {}, t.RFC_2822 = function () {};
    var on = w("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
        var t = pt.apply(null, arguments);
        return this.isValid() && t.isValid() ? t < this ? this : t : h()
      }),
      sn = w("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
        var t = pt.apply(null, arguments);
        return this.isValid() && t.isValid() ? t > this ? this : t : h()
      }),
      an = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
    bt("Z", ":"), bt("ZZ", ""), O("Z", be), O("ZZ", be), H(["Z", "ZZ"], function (t, e, n) {
      n._useUTC = !0, n._tzm = wt(be, t)
    });
    var ln = /([\+\-]|\d\d)/gi;
    t.updateOffset = function () {};
    var un = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
      cn = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    xt.fn = mt.prototype, xt.invalid = function () {
      return xt(NaN)
    };
    var dn = Et(1, "add"),
      hn = Et(-1, "subtract");
    t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    var fn = w("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (t) {
      return void 0 === t ? this.localeData() : this.locale(t)
    });
    R(0, ["gg", 2], 0, function () {
      return this.weekYear() % 100
    }), R(0, ["GG", 2], 0, function () {
      return this.isoWeekYear() % 100
    }), Pt("gggg", "weekYear"), Pt("ggggg", "weekYear"), Pt("GGGG", "isoWeekYear"), Pt("GGGGG", "isoWeekYear"), C("weekYear", "gg"), C("isoWeekYear", "GG"), M("weekYear", 1), M("isoWeekYear", 1), O("G", ve), O("g", ve), O("GG", ce, se), O("gg", ce, se), O("GGGG", pe, le), O("gggg", pe, le), O("GGGGG", ge, ue), O("ggggg", ge, ue), N(["gggg", "ggggg", "GGGG", "GGGGG"], function (t, e, n, r) {
      e[r.substr(0, 2)] = v(t)
    }), N(["gg", "GG"], function (e, n, r, i) {
      n[i] = t.parseTwoDigitYear(e)
    }), R("Q", 0, "Qo", "quarter"), C("quarter", "Q"), M("quarter", 7), O("Q", oe), H("Q", function (t, e) {
      e[xe] = 3 * (v(t) - 1)
    }), R("D", ["DD", 2], "Do", "date"), C("date", "D"), M("date", 9), O("D", ce), O("DD", ce, se), O("Do", function (t, e) {
      return t ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient
    }), H(["D", "DD"], Ce), H("Do", function (t, e) {
      e[Ce] = v(t.match(ce)[0])
    });
    var pn = j("Date", !0);
    R("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), C("dayOfYear", "DDD"), M("dayOfYear", 4), O("DDD", fe), O("DDDD", ae), H(["DDD", "DDDD"], function (t, e, n) {
      n._dayOfYear = v(t)
    }), R("m", ["mm", 2], 0, "minute"), C("minute", "m"), M("minute", 14), O("m", ce), O("mm", ce, se), H(["m", "mm"], Ee);
    var gn = j("Minutes", !1);
    R("s", ["ss", 2], 0, "second"), C("second", "s"), M("second", 15), O("s", ce), O("ss", ce, se), H(["s", "ss"], Me);
    var mn, vn = j("Seconds", !1);
    for (R("S", 0, 0, function () {
        return ~~(this.millisecond() / 100)
      }), R(0, ["SS", 2], 0, function () {
        return ~~(this.millisecond() / 10)
      }), R(0, ["SSS", 3], 0, "millisecond"), R(0, ["SSSS", 4], 0, function () {
        return 10 * this.millisecond()
      }), R(0, ["SSSSS", 5], 0, function () {
        return 100 * this.millisecond()
      }), R(0, ["SSSSSS", 6], 0, function () {
        return 1e3 * this.millisecond()
      }), R(0, ["SSSSSSS", 7], 0, function () {
        return 1e4 * this.millisecond()
      }), R(0, ["SSSSSSSS", 8], 0, function () {
        return 1e5 * this.millisecond()
      }), R(0, ["SSSSSSSSS", 9], 0, function () {
        return 1e6 * this.millisecond()
      }), C("millisecond", "ms"), M("millisecond", 16), O("S", fe, oe), O("SS", fe, se), O("SSS", fe, ae), mn = "SSSS"; mn.length <= 9; mn += "S") O(mn, me);
    for (mn = "S"; mn.length <= 9; mn += "S") H(mn, kt);
    var yn = j("Milliseconds", !1);
    R("z", 0, 0, "zoneAbbr"), R("zz", 0, 0, "zoneName");
    var bn = p.prototype;
    bn.add = dn, bn.calendar = function (e, n) {
      var r = e || pt(),
        i = _t(r, this).startOf("day"),
        o = t.calendarFormat(this, i) || "sameElse",
        s = n && (S(n[o]) ? n[o].call(this, r) : n[o]);
      return this.format(s || this.localeData().calendar(o, this, pt(r)))
    }, bn.clone = function () {
      return new p(this)
    }, bn.diff = function (t, e, n) {
      var r, i, o;
      if (!this.isValid()) return NaN;
      if (!(r = _t(t, this)).isValid()) return NaN;
      switch (i = 6e4 * (r.utcOffset() - this.utcOffset()), e = T(e)) {
        case "year":
          o = It(this, r) / 12;
          break;
        case "month":
          o = It(this, r);
          break;
        case "quarter":
          o = It(this, r) / 3;
          break;
        case "second":
          o = (this - r) / 1e3;
          break;
        case "minute":
          o = (this - r) / 6e4;
          break;
        case "hour":
          o = (this - r) / 36e5;
          break;
        case "day":
          o = (this - r - i) / 864e5;
          break;
        case "week":
          o = (this - r - i) / 6048e5;
          break;
        default:
          o = this - r
      }
      return n ? o : m(o)
    }, bn.endOf = function (t) {
      return void 0 === (t = T(t)) || "millisecond" === t ? this : ("date" === t && (t = "day"), this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms"))
    }, bn.format = function (e) {
      e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
      var n = A(this, e);
      return this.localeData().postformat(n)
    }, bn.from = function (t, e) {
      return this.isValid() && (g(t) && t.isValid() || pt(t).isValid()) ? xt({
        to: this,
        from: t
      }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
    }, bn.fromNow = function (t) {
      return this.from(pt(), t)
    }, bn.to = function (t, e) {
      return this.isValid() && (g(t) && t.isValid() || pt(t).isValid()) ? xt({
        from: this,
        to: t
      }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
    }, bn.toNow = function (t) {
      return this.to(pt(), t)
    }, bn.get = function (t) {
      return S(this[t = T(t)]) ? this[t]() : this
    }, bn.invalidAt = function () {
      return c(this).overflow
    }, bn.isAfter = function (t, e) {
      var n = g(t) ? t : pt(t);
      return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = T(r(e) ? "millisecond" : e)) ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(e).valueOf())
    }, bn.isBefore = function (t, e) {
      var n = g(t) ? t : pt(t);
      return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = T(r(e) ? "millisecond" : e)) ? this.valueOf() < n.valueOf() : this.clone().endOf(e).valueOf() < n.valueOf())
    }, bn.isBetween = function (t, e, n, r) {
      return ("(" === (r = r || "()")[0] ? this.isAfter(t, n) : !this.isBefore(t, n)) && (")" === r[1] ? this.isBefore(e, n) : !this.isAfter(e, n))
    }, bn.isSame = function (t, e) {
      var n, r = g(t) ? t : pt(t);
      return !(!this.isValid() || !r.isValid()) && ("millisecond" === (e = T(e || "millisecond")) ? this.valueOf() === r.valueOf() : (n = r.valueOf(), this.clone().startOf(e).valueOf() <= n && n <= this.clone().endOf(e).valueOf()))
    }, bn.isSameOrAfter = function (t, e) {
      return this.isSame(t, e) || this.isAfter(t, e)
    }, bn.isSameOrBefore = function (t, e) {
      return this.isSame(t, e) || this.isBefore(t, e)
    }, bn.isValid = function () {
      return d(this)
    }, bn.lang = fn, bn.locale = Rt, bn.localeData = At, bn.max = sn, bn.min = on, bn.parsingFlags = function () {
      return l({}, c(this))
    }, bn.set = function (t, e) {
      if ("object" == typeof t)
        for (var n = function (t) {
            var e = [];
            for (var n in t) e.push({
              unit: n,
              priority: te[n]
            });
            return e.sort(function (t, e) {
              return t.priority - e.priority
            }), e
          }(t = E(t)), r = 0; r < n.length; r++) this[n[r].unit](t[n[r].unit]);
      else if (S(this[t = T(t)])) return this[t](e);
      return this
    }, bn.startOf = function (t) {
      switch (t = T(t)) {
        case "year":
          this.month(0);
        case "quarter":
        case "month":
          this.date(1);
        case "week":
        case "isoWeek":
        case "day":
        case "date":
          this.hours(0);
        case "hour":
          this.minutes(0);
        case "minute":
          this.seconds(0);
        case "second":
          this.milliseconds(0)
      }
      return "week" === t && this.weekday(0), "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this
    }, bn.subtract = hn, bn.toArray = function () {
      return [this.year(), this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()]
    }, bn.toObject = function () {
      return {
        years: this.year(),
        months: this.month(),
        date: this.date(),
        hours: this.hours(),
        minutes: this.minutes(),
        seconds: this.seconds(),
        milliseconds: this.milliseconds()
      }
    }, bn.toDate = function () {
      return new Date(this.valueOf())
    }, bn.toISOString = function (t) {
      if (!this.isValid()) return null;
      var e = !0 !== t,
        n = e ? this.clone().utc() : this;
      return n.year() < 0 || n.year() > 9999 ? A(n, e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : S(Date.prototype.toISOString) ? e ? this.toDate().toISOString() : new Date(this._d.valueOf()).toISOString().replace("Z", A(n, "Z")) : A(n, e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
    }, bn.inspect = function () {
      if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
      var t = "moment",
        e = "";
      this.isLocal() || (t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", e = "Z");
      var n = "[" + t + '("]',
        r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
        i = e + '[")]';
      return this.format(n + r + "-MM-DD[T]HH:mm:ss.SSS" + i)
    }, bn.toJSON = function () {
      return this.isValid() ? this.toISOString() : null
    }, bn.toString = function () {
      return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }, bn.unix = function () {
      return Math.floor(this.valueOf() / 1e3)
    }, bn.valueOf = function () {
      return this._d.valueOf() - 6e4 * (this._offset || 0)
    }, bn.creationData = function () {
      return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict
      }
    }, bn.year = Oe, bn.isLeapYear = function () {
      return F(this.year())
    }, bn.weekYear = function (t) {
      return Ot.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    }, bn.isoWeekYear = function (t) {
      return Ot.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4)
    }, bn.quarter = bn.quarters = function (t) {
      return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
    }, bn.month = U, bn.daysInMonth = function () {
      return W(this.year(), this.month())
    }, bn.week = bn.weeks = function (t) {
      var e = this.localeData().week(this);
      return null == t ? e : this.add(7 * (t - e), "d")
    }, bn.isoWeek = bn.isoWeeks = function (t) {
      var e = $(this, 1, 4).week;
      return null == t ? e : this.add(7 * (t - e), "d")
    }, bn.weeksInYear = function () {
      var t = this.localeData()._week;
      return Q(this.year(), t.dow, t.doy)
    }, bn.isoWeeksInYear = function () {
      return Q(this.year(), 1, 4)
    }, bn.date = pn, bn.day = bn.days = function (t) {
      if (!this.isValid()) return null != t ? this : NaN;
      var e, n, r = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
      return null != t ? (e = t, n = this.localeData(), t = "string" != typeof e ? e : isNaN(e) ? "number" == typeof (e = n.weekdaysParse(e)) ? e : null : parseInt(e, 10), this.add(t - r, "d")) : r
    }, bn.weekday = function (t) {
      if (!this.isValid()) return null != t ? this : NaN;
      var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
      return null == t ? e : this.add(t - e, "d")
    }, bn.isoWeekday = function (t) {
      if (!this.isValid()) return null != t ? this : NaN;
      if (null != t) {
        var e = (n = t, r = this.localeData(), "string" == typeof n ? r.weekdaysParse(n) % 7 || 7 : isNaN(n) ? null : n);
        return this.day(this.day() % 7 ? e : e - 7)
      }
      var n, r;
      return this.day() || 7
    }, bn.dayOfYear = function (t) {
      var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
      return null == t ? e : this.add(t - e, "d")
    }, bn.hour = bn.hours = Ge, bn.minute = bn.minutes = gn, bn.second = bn.seconds = vn, bn.millisecond = bn.milliseconds = yn, bn.utcOffset = function (e, n, r) {
      var i, o = this._offset || 0;
      if (!this.isValid()) return null != e ? this : NaN;
      if (null != e) {
        if ("string" == typeof e) {
          if (null === (e = wt(be, e))) return this
        } else Math.abs(e) < 16 && !r && (e *= 60);
        return !this._isUTC && n && (i = St(this)), this._offset = e, this._isUTC = !0, null != i && this.add(i, "m"), o !== e && (!n || this._changeInProgress ? Mt(this, xt(e - o, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this
      }
      return this._isUTC ? o : St(this)
    }, bn.utc = function (t) {
      return this.utcOffset(0, t)
    }, bn.local = function (t) {
      return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(St(this), "m")), this
    }, bn.parseZone = function () {
      if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
      else if ("string" == typeof this._i) {
        var t = wt(ye, this._i);
        null != t ? this.utcOffset(t) : this.utcOffset(0, !0)
      }
      return this
    }, bn.hasAlignedHourOffset = function (t) {
      return !!this.isValid() && (t = t ? pt(t).utcOffset() : 0, (this.utcOffset() - t) % 60 == 0)
    }, bn.isDST = function () {
      return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }, bn.isLocal = function () {
      return !!this.isValid() && !this._isUTC
    }, bn.isUtcOffset = function () {
      return !!this.isValid() && this._isUTC
    }, bn.isUtc = Dt, bn.isUTC = Dt, bn.zoneAbbr = function () {
      return this._isUTC ? "UTC" : ""
    }, bn.zoneName = function () {
      return this._isUTC ? "Coordinated Universal Time" : ""
    }, bn.dates = w("dates accessor is deprecated. Use date instead.", pn), bn.months = w("months accessor is deprecated. Use month instead", U), bn.years = w("years accessor is deprecated. Use year instead", Oe), bn.zone = w("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function (t, e) {
      return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset()
    }), bn.isDSTShifted = w("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function () {
      if (!r(this._isDSTShifted)) return this._isDSTShifted;
      var t = {};
      if (f(t, this), (t = ht(t))._a) {
        var e = t._isUTC ? u(t._a) : pt(t._a);
        this._isDSTShifted = this.isValid() && y(t._a, e.toArray()) > 0
      } else this._isDSTShifted = !1;
      return this._isDSTShifted
    });
    var wn = x.prototype;
    wn.calendar = function (t, e, n) {
      var r = this._calendar[t] || this._calendar.sameElse;
      return S(r) ? r.call(e, n) : r
    }, wn.longDateFormat = function (t) {
      var e = this._longDateFormat[t],
        n = this._longDateFormat[t.toUpperCase()];
      return e || !n ? e : (this._longDateFormat[t] = n.replace(/MMMM|MM|DD|dddd/g, function (t) {
        return t.slice(1)
      }), this._longDateFormat[t])
    }, wn.invalidDate = function () {
      return this._invalidDate
    }, wn.ordinal = function (t) {
      return this._ordinal.replace("%d", t)
    }, wn.preparse = Ht, wn.postformat = Ht, wn.relativeTime = function (t, e, n, r) {
      var i = this._relativeTime[n];
      return S(i) ? i(t, e, n, r) : i.replace(/%d/i, t)
    }, wn.pastFuture = function (t, e) {
      var n = this._relativeTime[t > 0 ? "future" : "past"];
      return S(n) ? n(e) : n.replace(/%s/i, e)
    }, wn.set = function (t) {
      var e, n;
      for (n in t) S(e = t[n]) ? this[n] = e : this["_" + n] = e;
      this._config = t, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
    }, wn.months = function (t, n) {
      return t ? e(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || ke).test(n) ? "format" : "standalone"][t.month()] : e(this._months) ? this._months : this._months.standalone
    }, wn.monthsShort = function (t, n) {
      return t ? e(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[ke.test(n) ? "format" : "standalone"][t.month()] : e(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
    }, wn.monthsParse = function (t, e, n) {
      var r, i, o;
      if (this._monthsParseExact) return function (t, e, n) {
        var r, i, o, s = t.toLocaleLowerCase();
        if (!this._monthsParse)
          for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r) o = u([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(o, "").toLocaleLowerCase(), this._longMonthsParse[r] = this.months(o, "").toLocaleLowerCase();
        return n ? "MMM" === e ? -1 !== (i = Pe.call(this._shortMonthsParse, s)) ? i : null : -1 !== (i = Pe.call(this._longMonthsParse, s)) ? i : null : "MMM" === e ? -1 !== (i = Pe.call(this._shortMonthsParse, s)) ? i : -1 !== (i = Pe.call(this._longMonthsParse, s)) ? i : null : -1 !== (i = Pe.call(this._longMonthsParse, s)) ? i : -1 !== (i = Pe.call(this._shortMonthsParse, s)) ? i : null
      }.call(this, t, e, n);
      for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
        if (i = u([2e3, r]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), n || this._monthsParse[r] || (o = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[r] = new RegExp(o.replace(".", ""), "i")), n && "MMMM" === e && this._longMonthsParse[r].test(t)) return r;
        if (n && "MMM" === e && this._shortMonthsParse[r].test(t)) return r;
        if (!n && this._monthsParse[r].test(t)) return r
      }
    }, wn.monthsRegex = function (t) {
      return this._monthsParseExact ? (a(this, "_monthsRegex") || V.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (a(this, "_monthsRegex") || (this._monthsRegex = Fe), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex)
    }, wn.monthsShortRegex = function (t) {
      return this._monthsParseExact ? (a(this, "_monthsRegex") || V.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (a(this, "_monthsShortRegex") || (this._monthsShortRegex = Le), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex)
    }, wn.week = function (t) {
      return $(t, this._week.dow, this._week.doy).week
    }, wn.firstDayOfYear = function () {
      return this._week.doy
    }, wn.firstDayOfWeek = function () {
      return this._week.dow
    }, wn.weekdays = function (t, n) {
      return t ? e(this._weekdays) ? this._weekdays[t.day()] : this._weekdays[this._weekdays.isFormat.test(n) ? "format" : "standalone"][t.day()] : e(this._weekdays) ? this._weekdays : this._weekdays.standalone
    }, wn.weekdaysMin = function (t) {
      return t ? this._weekdaysMin[t.day()] : this._weekdaysMin
    }, wn.weekdaysShort = function (t) {
      return t ? this._weekdaysShort[t.day()] : this._weekdaysShort
    }, wn.weekdaysParse = function (t, e, n) {
      var r, i, o;
      if (this._weekdaysParseExact) return function (t, e, n) {
        var r, i, o, s = t.toLocaleLowerCase();
        if (!this._weekdaysParse)
          for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r) o = u([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(o, "").toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(o, "").toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(o, "").toLocaleLowerCase();
        return n ? "dddd" === e ? -1 !== (i = Pe.call(this._weekdaysParse, s)) ? i : null : "ddd" === e ? -1 !== (i = Pe.call(this._shortWeekdaysParse, s)) ? i : null : -1 !== (i = Pe.call(this._minWeekdaysParse, s)) ? i : null : "dddd" === e ? -1 !== (i = Pe.call(this._weekdaysParse, s)) ? i : -1 !== (i = Pe.call(this._shortWeekdaysParse, s)) ? i : -1 !== (i = Pe.call(this._minWeekdaysParse, s)) ? i : null : "ddd" === e ? -1 !== (i = Pe.call(this._shortWeekdaysParse, s)) ? i : -1 !== (i = Pe.call(this._weekdaysParse, s)) ? i : -1 !== (i = Pe.call(this._minWeekdaysParse, s)) ? i : null : -1 !== (i = Pe.call(this._minWeekdaysParse, s)) ? i : -1 !== (i = Pe.call(this._weekdaysParse, s)) ? i : -1 !== (i = Pe.call(this._shortWeekdaysParse, s)) ? i : null
      }.call(this, t, e, n);
      for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
        if (i = u([2e3, 1]).day(r), n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp("^" + this.weekdays(i, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[r] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[r] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[r] || (o = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[r] = new RegExp(o.replace(".", ""), "i")), n && "dddd" === e && this._fullWeekdaysParse[r].test(t)) return r;
        if (n && "ddd" === e && this._shortWeekdaysParse[r].test(t)) return r;
        if (n && "dd" === e && this._minWeekdaysParse[r].test(t)) return r;
        if (!n && this._weekdaysParse[r].test(t)) return r
      }
    }, wn.weekdaysRegex = function (t) {
      return this._weekdaysParseExact ? (a(this, "_weekdaysRegex") || Z.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (a(this, "_weekdaysRegex") || (this._weekdaysRegex = We), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex)
    }, wn.weekdaysShortRegex = function (t) {
      return this._weekdaysParseExact ? (a(this, "_weekdaysRegex") || Z.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (a(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Ye), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
    }, wn.weekdaysMinRegex = function (t) {
      return this._weekdaysParseExact ? (a(this, "_weekdaysRegex") || Z.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (a(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ue), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
    }, wn.isPM = function (t) {
      return "p" === (t + "").toLowerCase().charAt(0)
    }, wn.meridiem = function (t, e, n) {
      return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
    }, rt("en", {
      dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
      ordinal: function (t) {
        var e = t % 10;
        return t + (1 === v(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th")
      }
    }), t.lang = w("moment.lang is deprecated. Use moment.locale instead.", rt), t.langData = w("moment.langData is deprecated. Use moment.localeData instead.", ot);
    var _n = Math.abs,
      Sn = Yt("ms"),
      Dn = Yt("s"),
      xn = Yt("m"),
      Cn = Yt("h"),
      Tn = Yt("d"),
      En = Yt("w"),
      Mn = Yt("M"),
      In = Yt("y"),
      Rn = Ut("milliseconds"),
      An = Ut("seconds"),
      Pn = Ut("minutes"),
      On = Ut("hours"),
      kn = Ut("days"),
      Hn = Ut("months"),
      Nn = Ut("years"),
      Ln = Math.round,
      Fn = {
        ss: 44,
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        M: 11
      },
      jn = Math.abs,
      Bn = mt.prototype;
    return Bn.isValid = function () {
      return this._isValid
    }, Bn.abs = function () {
      var t = this._data;
      return this._milliseconds = _n(this._milliseconds), this._days = _n(this._days), this._months = _n(this._months), t.milliseconds = _n(t.milliseconds), t.seconds = _n(t.seconds), t.minutes = _n(t.minutes), t.hours = _n(t.hours), t.months = _n(t.months), t.years = _n(t.years), this
    }, Bn.add = function (t, e) {
      return jt(this, t, e, 1)
    }, Bn.subtract = function (t, e) {
      return jt(this, t, e, -1)
    }, Bn.as = function (t) {
      if (!this.isValid()) return NaN;
      var e, n, r = this._milliseconds;
      if ("month" === (t = T(t)) || "year" === t) return e = this._days + r / 864e5, n = this._months + zt(e), "month" === t ? n : n / 12;
      switch (e = this._days + Math.round(Wt(this._months)), t) {
        case "week":
          return e / 7 + r / 6048e5;
        case "day":
          return e + r / 864e5;
        case "hour":
          return 24 * e + r / 36e5;
        case "minute":
          return 1440 * e + r / 6e4;
        case "second":
          return 86400 * e + r / 1e3;
        case "millisecond":
          return Math.floor(864e5 * e) + r;
        default:
          throw new Error("Unknown unit " + t)
      }
    }, Bn.asMilliseconds = Sn, Bn.asSeconds = Dn, Bn.asMinutes = xn, Bn.asHours = Cn, Bn.asDays = Tn, Bn.asWeeks = En, Bn.asMonths = Mn, Bn.asYears = In, Bn.valueOf = function () {
      return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * v(this._months / 12) : NaN
    }, Bn._bubble = function () {
      var t, e, n, r, i, o = this._milliseconds,
        s = this._days,
        a = this._months,
        l = this._data;
      return o >= 0 && s >= 0 && a >= 0 || o <= 0 && s <= 0 && a <= 0 || (o += 864e5 * Bt(Wt(a) + s), s = 0, a = 0), l.milliseconds = o % 1e3, t = m(o / 1e3), l.seconds = t % 60, e = m(t / 60), l.minutes = e % 60, n = m(e / 60), l.hours = n % 24, a += i = m(zt(s += m(n / 24))), s -= Bt(Wt(i)), r = m(a / 12), a %= 12, l.days = s, l.months = a, l.years = r, this
    }, Bn.clone = function () {
      return xt(this)
    }, Bn.get = function (t) {
      return t = T(t), this.isValid() ? this[t + "s"]() : NaN
    }, Bn.milliseconds = Rn, Bn.seconds = An, Bn.minutes = Pn, Bn.hours = On, Bn.days = kn, Bn.weeks = function () {
      return m(this.days() / 7)
    }, Bn.months = Hn, Bn.years = Nn, Bn.humanize = function (t) {
      if (!this.isValid()) return this.localeData().invalidDate();
      var e, n, r, i, o, s, a, l, u, c, d, h = this.localeData(),
        f = (n = !t, r = h, i = xt(e = this).abs(), o = Ln(i.as("s")), s = Ln(i.as("m")), a = Ln(i.as("h")), l = Ln(i.as("d")), u = Ln(i.as("M")), c = Ln(i.as("y")), (d = o <= Fn.ss && ["s", o] || o < Fn.s && ["ss", o] || s <= 1 && ["m"] || s < Fn.m && ["mm", s] || a <= 1 && ["h"] || a < Fn.h && ["hh", a] || l <= 1 && ["d"] || l < Fn.d && ["dd", l] || u <= 1 && ["M"] || u < Fn.M && ["MM", u] || c <= 1 && ["y"] || ["yy", c])[2] = n, d[3] = +e > 0, d[4] = r, function (t, e, n, r, i) {
          return i.relativeTime(e || 1, !!n, t, r)
        }.apply(null, d));
      return t && (f = h.pastFuture(+this, f)), h.postformat(f)
    }, Bn.toISOString = Gt, Bn.toString = Gt, Bn.toJSON = Gt, Bn.locale = Rt, Bn.localeData = At, Bn.toIsoString = w("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Gt), Bn.lang = fn, R("X", 0, 0, "unix"), R("x", 0, 0, "valueOf"), O("x", ve), O("X", /[+-]?\d+(\.\d{1,3})?/), H("X", function (t, e, n) {
      n._d = new Date(1e3 * parseFloat(t, 10))
    }), H("x", function (t, e, n) {
      n._d = new Date(v(t))
    }), t.version = "2.20.1", qt = pt, t.fn = bn, t.min = function () {
      return gt("isBefore", [].slice.call(arguments, 0))
    }, t.max = function () {
      return gt("isAfter", [].slice.call(arguments, 0))
    }, t.now = function () {
      return Date.now ? Date.now() : +new Date
    }, t.utc = u, t.unix = function (t) {
      return pt(1e3 * t)
    }, t.months = function (t, e) {
      return Lt(t, e, "months")
    }, t.isDate = o, t.locale = rt, t.invalid = h, t.duration = xt, t.isMoment = g, t.weekdays = function (t, e, n) {
      return Ft(t, e, n, "weekdays")
    }, t.parseZone = function () {
      return pt.apply(null, arguments).parseZone()
    }, t.localeData = ot, t.isDuration = vt, t.monthsShort = function (t, e) {
      return Lt(t, e, "monthsShort")
    }, t.weekdaysMin = function (t, e, n) {
      return Ft(t, e, n, "weekdaysMin")
    }, t.defineLocale = it, t.updateLocale = function (t, e) {
      if (null != e) {
        var n, r, i = qe;
        null != (r = nt(t)) && (i = r._config), (n = new x(e = D(i, e))).parentLocale = Xe[t], Xe[t] = n, rt(t)
      } else null != Xe[t] && (null != Xe[t].parentLocale ? Xe[t] = Xe[t].parentLocale : null != Xe[t] && delete Xe[t]);
      return Xe[t]
    }, t.locales = function () {
      return $t(Xe)
    }, t.weekdaysShort = function (t, e, n) {
      return Ft(t, e, n, "weekdaysShort")
    }, t.normalizeUnits = T, t.relativeTimeRounding = function (t) {
      return void 0 === t ? Ln : "function" == typeof t && (Ln = t, !0)
    }, t.relativeTimeThreshold = function (t, e) {
      return void 0 !== Fn[t] && (void 0 === e ? Fn[t] : (Fn[t] = e, "s" === t && (Fn.ss = e - 1), !0))
    }, t.calendarFormat = function (t, e) {
      var n = t.diff(e, "days", !0);
      return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
    }, t.prototype = bn, t.HTML5_FMT = {
      DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
      DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
      DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
      DATE: "YYYY-MM-DD",
      TIME: "HH:mm",
      TIME_SECONDS: "HH:mm:ss",
      TIME_MS: "HH:mm:ss.SSS",
      WEEK: "YYYY-[W]WW",
      MONTH: "YYYY-MM"
    }, t
  }), function (t, e) {
    "function" == typeof define && define.amd ? define("Chartist", [], function () {
      return t.Chartist = e()
    }) : "object" == typeof module && module.exports ? module.exports = e() : t.Chartist = e()
  }(this, function () {
    var t = {
      version: "0.11.0"
    };
    return function (t, e, n) {
        "use strict";
        n.namespaces = {
          svg: "http://www.w3.org/2000/svg",
          xmlns: "http://www.w3.org/2000/xmlns/",
          xhtml: "http://www.w3.org/1999/xhtml",
          xlink: "http://www.w3.org/1999/xlink",
          ct: "http://gionkunz.github.com/chartist-js/ct"
        }, n.noop = function (t) {
          return t
        }, n.alphaNumerate = function (t) {
          return String.fromCharCode(97 + t % 26)
        }, n.extend = function (t) {
          var e, r, i;
          for (t = t || {}, e = 1; e < arguments.length; e++)
            for (var o in r = arguments[e]) "object" != typeof (i = r[o]) || null === i || i instanceof Array ? t[o] = i : t[o] = n.extend(t[o], i);
          return t
        }, n.replaceAll = function (t, e, n) {
          return t.replace(new RegExp(e, "g"), n)
        }, n.ensureUnit = function (t, e) {
          return "number" == typeof t && (t += e), t
        }, n.quantity = function (t) {
          if ("string" == typeof t) {
            var e = /^(\d+)\s*(.*)$/g.exec(t);
            return {
              value: +e[1],
              unit: e[2] || void 0
            }
          }
          return {
            value: t
          }
        }, n.querySelector = function (t) {
          return t instanceof Node ? t : e.querySelector(t)
        }, n.times = function (t) {
          return Array.apply(null, new Array(t))
        }, n.sum = function (t, e) {
          return t + (e || 0)
        }, n.mapMultiply = function (t) {
          return function (e) {
            return e * t
          }
        }, n.mapAdd = function (t) {
          return function (e) {
            return e + t
          }
        }, n.serialMap = function (t, e) {
          var r = [],
            i = Math.max.apply(null, t.map(function (t) {
              return t.length
            }));
          return n.times(i).forEach(function (n, i) {
            var o = t.map(function (t) {
              return t[i]
            });
            r[i] = e.apply(null, o)
          }), r
        }, n.roundWithPrecision = function (t, e) {
          var r = Math.pow(10, e || n.precision);
          return Math.round(t * r) / r
        }, n.precision = 8, n.escapingMap = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#039;"
        }, n.serialize = function (t) {
          return null === t || void 0 === t ? t : ("number" == typeof t ? t = "" + t : "object" == typeof t && (t = JSON.stringify({
            data: t
          })), Object.keys(n.escapingMap).reduce(function (t, e) {
            return n.replaceAll(t, e, n.escapingMap[e])
          }, t))
        }, n.deserialize = function (t) {
          if ("string" != typeof t) return t;
          t = Object.keys(n.escapingMap).reduce(function (t, e) {
            return n.replaceAll(t, n.escapingMap[e], e)
          }, t);
          try {
            t = void 0 !== (t = JSON.parse(t)).data ? t.data : t
          } catch (t) {}
          return t
        }, n.createSvg = function (t, e, r, i) {
          var o;
          return e = e || "100%", r = r || "100%", Array.prototype.slice.call(t.querySelectorAll("svg")).filter(function (t) {
            return t.getAttributeNS(n.namespaces.xmlns, "ct")
          }).forEach(function (e) {
            t.removeChild(e)
          }), (o = new n.Svg("svg").attr({
            width: e,
            height: r
          }).addClass(i))._node.style.width = e, o._node.style.height = r, t.appendChild(o._node), o
        }, n.normalizeData = function (t, e, r) {
          var i, o = {
            raw: t,
            normalized: {}
          };
          return o.normalized.series = n.getDataArray({
            series: t.series || []
          }, e, r), i = o.normalized.series.every(function (t) {
            return t instanceof Array
          }) ? Math.max.apply(null, o.normalized.series.map(function (t) {
            return t.length
          })) : o.normalized.series.length, o.normalized.labels = (t.labels || []).slice(), Array.prototype.push.apply(o.normalized.labels, n.times(Math.max(0, i - o.normalized.labels.length)).map(function () {
            return ""
          })), e && n.reverseData(o.normalized), o
        }, n.safeHasProperty = function (t, e) {
          return null !== t && "object" == typeof t && t.hasOwnProperty(e)
        }, n.isDataHoleValue = function (t) {
          return null === t || void 0 === t || "number" == typeof t && isNaN(t)
        }, n.reverseData = function (t) {
          t.labels.reverse(), t.series.reverse();
          for (var e = 0; e < t.series.length; e++) "object" == typeof t.series[e] && void 0 !== t.series[e].data ? t.series[e].data.reverse() : t.series[e] instanceof Array && t.series[e].reverse()
        }, n.getDataArray = function (t, e, r) {
          return t.series.map(function t(e) {
            if (n.safeHasProperty(e, "value")) return t(e.value);
            if (n.safeHasProperty(e, "data")) return t(e.data);
            if (e instanceof Array) return e.map(t);
            if (!n.isDataHoleValue(e)) {
              if (r) {
                var i = {};
                return "string" == typeof r ? i[r] = n.getNumberOrUndefined(e) : i.y = n.getNumberOrUndefined(e), i.x = e.hasOwnProperty("x") ? n.getNumberOrUndefined(e.x) : i.x, i.y = e.hasOwnProperty("y") ? n.getNumberOrUndefined(e.y) : i.y, i
              }
              return n.getNumberOrUndefined(e)
            }
          })
        }, n.normalizePadding = function (t, e) {
          return e = e || 0, "number" == typeof t ? {
            top: t,
            right: t,
            bottom: t,
            left: t
          } : {
            top: "number" == typeof t.top ? t.top : e,
            right: "number" == typeof t.right ? t.right : e,
            bottom: "number" == typeof t.bottom ? t.bottom : e,
            left: "number" == typeof t.left ? t.left : e
          }
        }, n.getMetaData = function (t, e) {
          var n = t.data ? t.data[e] : t[e];
          return n ? n.meta : void 0
        }, n.orderOfMagnitude = function (t) {
          return Math.floor(Math.log(Math.abs(t)) / Math.LN10)
        }, n.projectLength = function (t, e, n) {
          return e / n.range * t
        }, n.getAvailableHeight = function (t, e) {
          return Math.max((n.quantity(e.height).value || t.height()) - (e.chartPadding.top + e.chartPadding.bottom) - e.axisX.offset, 0)
        }, n.getHighLow = function (t, e, r) {
          var i = {
              high: void 0 === (e = n.extend({}, e, r ? e["axis" + r.toUpperCase()] : {})).high ? -Number.MAX_VALUE : +e.high,
              low: void 0 === e.low ? Number.MAX_VALUE : +e.low
            },
            o = void 0 === e.high,
            s = void 0 === e.low;
          return (o || s) && function t(e) {
            if (void 0 !== e)
              if (e instanceof Array)
                for (var n = 0; n < e.length; n++) t(e[n]);
              else {
                var a = r ? +e[r] : +e;
                o && a > i.high && (i.high = a), s && a < i.low && (i.low = a)
              }
          }(t), (e.referenceValue || 0 === e.referenceValue) && (i.high = Math.max(e.referenceValue, i.high), i.low = Math.min(e.referenceValue, i.low)), i.high <= i.low && (0 === i.low ? i.high = 1 : i.low < 0 ? i.high = 0 : i.high > 0 ? i.low = 0 : (i.high = 1, i.low = 0)), i
        }, n.isNumeric = function (t) {
          return null !== t && isFinite(t)
        }, n.isFalseyButZero = function (t) {
          return !t && 0 !== t
        }, n.getNumberOrUndefined = function (t) {
          return n.isNumeric(t) ? +t : void 0
        }, n.isMultiValue = function (t) {
          return "object" == typeof t && ("x" in t || "y" in t)
        }, n.getMultiValue = function (t, e) {
          return n.isMultiValue(t) ? n.getNumberOrUndefined(t[e || "y"]) : n.getNumberOrUndefined(t)
        }, n.rho = function (t) {
          function e(t, n) {
            return t % n == 0 ? n : e(n, t % n)
          }

          function n(t) {
            return t * t + 1
          }
          if (1 === t) return t;
          var r, i = 2,
            o = 2;
          if (t % 2 == 0) return 2;
          do {
            i = n(i) % t, o = n(n(o)) % t, r = e(Math.abs(i - o), t)
          } while (1 === r);
          return r
        }, n.getBounds = function (t, e, r, i) {
          function o(t, e) {
            return t === (t += e) && (t *= 1 + (e > 0 ? f : -f)), t
          }
          var s, a, l, u = 0,
            c = {
              high: e.high,
              low: e.low
            };
          c.valueRange = c.high - c.low, c.oom = n.orderOfMagnitude(c.valueRange), c.step = Math.pow(10, c.oom), c.min = Math.floor(c.low / c.step) * c.step, c.max = Math.ceil(c.high / c.step) * c.step, c.range = c.max - c.min, c.numberOfSteps = Math.round(c.range / c.step);
          var d = n.projectLength(t, c.step, c) < r,
            h = i ? n.rho(c.range) : 0;
          if (i && n.projectLength(t, 1, c) >= r) c.step = 1;
          else if (i && h < c.step && n.projectLength(t, h, c) >= r) c.step = h;
          else
            for (;;) {
              if (d && n.projectLength(t, c.step, c) <= r) c.step *= 2;
              else {
                if (d || !(n.projectLength(t, c.step / 2, c) >= r)) break;
                if (c.step /= 2, i && c.step % 1 != 0) {
                  c.step *= 2;
                  break
                }
              }
              if (u++ > 1e3) throw new Error("Exceeded maximum number of iterations while optimizing scale step!")
            }
          var f = 2.221e-16;
          for (c.step = Math.max(c.step, f), a = c.min, l = c.max; a + c.step <= c.low;) a = o(a, c.step);
          for (; l - c.step >= c.high;) l = o(l, -c.step);
          c.min = a, c.max = l, c.range = c.max - c.min;
          var p = [];
          for (s = c.min; s <= c.max; s = o(s, c.step)) {
            var g = n.roundWithPrecision(s);
            g !== p[p.length - 1] && p.push(g)
          }
          return c.values = p, c
        }, n.polarToCartesian = function (t, e, n, r) {
          var i = (r - 90) * Math.PI / 180;
          return {
            x: t + n * Math.cos(i),
            y: e + n * Math.sin(i)
          }
        }, n.createChartRect = function (t, e, r) {
          var i = !(!e.axisX && !e.axisY),
            o = i ? e.axisY.offset : 0,
            s = i ? e.axisX.offset : 0,
            a = t.width() || n.quantity(e.width).value || 0,
            l = t.height() || n.quantity(e.height).value || 0,
            u = n.normalizePadding(e.chartPadding, r);
          a = Math.max(a, o + u.left + u.right), l = Math.max(l, s + u.top + u.bottom);
          var c = {
            padding: u,
            width: function () {
              return this.x2 - this.x1
            },
            height: function () {
              return this.y1 - this.y2
            }
          };
          return i ? ("start" === e.axisX.position ? (c.y2 = u.top + s, c.y1 = Math.max(l - u.bottom, c.y2 + 1)) : (c.y2 = u.top, c.y1 = Math.max(l - u.bottom - s, c.y2 + 1)), "start" === e.axisY.position ? (c.x1 = u.left + o, c.x2 = Math.max(a - u.right, c.x1 + 1)) : (c.x1 = u.left, c.x2 = Math.max(a - u.right - o, c.x1 + 1))) : (c.x1 = u.left, c.x2 = Math.max(a - u.right, c.x1 + 1), c.y2 = u.top, c.y1 = Math.max(l - u.bottom, c.y2 + 1)), c
        }, n.createGrid = function (t, e, r, i, o, s, a, l) {
          var u = {};
          u[r.units.pos + "1"] = t, u[r.units.pos + "2"] = t, u[r.counterUnits.pos + "1"] = i, u[r.counterUnits.pos + "2"] = i + o;
          var c = s.elem("line", u, a.join(" "));
          l.emit("draw", n.extend({
            type: "grid",
            axis: r,
            index: e,
            group: s,
            element: c
          }, u))
        }, n.createGridBackground = function (t, e, n, r) {
          var i = t.elem("rect", {
            x: e.x1,
            y: e.y2,
            width: e.width(),
            height: e.height()
          }, n, !0);
          r.emit("draw", {
            type: "gridBackground",
            group: t,
            element: i
          })
        }, n.createLabel = function (t, r, i, o, s, a, l, u, c, d, h) {
          var f, p = {};
          if (p[s.units.pos] = t + l[s.units.pos], p[s.counterUnits.pos] = l[s.counterUnits.pos], p[s.units.len] = r, p[s.counterUnits.len] = Math.max(0, a - 10), d) {
            var g = e.createElement("span");
            g.className = c.join(" "), g.setAttribute("xmlns", n.namespaces.xhtml), g.innerText = o[i], g.style[s.units.len] = Math.round(p[s.units.len]) + "px", g.style[s.counterUnits.len] = Math.round(p[s.counterUnits.len]) + "px", f = u.foreignObject(g, n.extend({
              style: "overflow: visible;"
            }, p))
          } else f = u.elem("text", p, c.join(" ")).text(o[i]);
          h.emit("draw", n.extend({
            type: "label",
            axis: s,
            index: i,
            group: u,
            element: f,
            text: o[i]
          }, p))
        }, n.getSeriesOption = function (t, e, n) {
          if (t.name && e.series && e.series[t.name]) {
            var r = e.series[t.name];
            return r.hasOwnProperty(n) ? r[n] : e[n]
          }
          return e[n]
        }, n.optionsProvider = function (e, r, i) {
          function o(e) {
            var o = s;
            if (s = n.extend({}, l), r)
              for (a = 0; a < r.length; a++) {
                t.matchMedia(r[a][0]).matches && (s = n.extend(s, r[a][1]))
              }
            i && e && i.emit("optionsChanged", {
              previousOptions: o,
              currentOptions: s
            })
          }
          var s, a, l = n.extend({}, e),
            u = [];
          if (!t.matchMedia) throw "window.matchMedia not found! Make sure you're using a polyfill.";
          if (r)
            for (a = 0; a < r.length; a++) {
              var c = t.matchMedia(r[a][0]);
              c.addListener(o), u.push(c)
            }
          return o(), {
            removeMediaQueryListeners: function () {
              u.forEach(function (t) {
                t.removeListener(o)
              })
            },
            getCurrentOptions: function () {
              return n.extend({}, s)
            }
          }
        }, n.splitIntoSegments = function (t, e, r) {
          r = n.extend({}, {
            increasingX: !1,
            fillHoles: !1
          }, r);
          for (var i = [], o = !0, s = 0; s < t.length; s += 2) void 0 === n.getMultiValue(e[s / 2].value) ? r.fillHoles || (o = !0) : (r.increasingX && s >= 2 && t[s] <= t[s - 2] && (o = !0), o && (i.push({
            pathCoordinates: [],
            valueData: []
          }), o = !1), i[i.length - 1].pathCoordinates.push(t[s], t[s + 1]), i[i.length - 1].valueData.push(e[s / 2]));
          return i
        }
      }(window, document, t),
      function (t, e, n) {
        "use strict";
        n.Interpolation = {}, n.Interpolation.none = function (t) {
          return t = n.extend({}, {
              fillHoles: !1
            }, t),
            function (e, r) {
              for (var i = new n.Svg.Path, o = !0, s = 0; s < e.length; s += 2) {
                var a = e[s],
                  l = e[s + 1],
                  u = r[s / 2];
                void 0 !== n.getMultiValue(u.value) ? (o ? i.move(a, l, !1, u) : i.line(a, l, !1, u), o = !1) : t.fillHoles || (o = !0)
              }
              return i
            }
        }, n.Interpolation.simple = function (t) {
          t = n.extend({}, {
            divisor: 2,
            fillHoles: !1
          }, t);
          var e = 1 / Math.max(1, t.divisor);
          return function (r, i) {
            for (var o, s, a, l = new n.Svg.Path, u = 0; u < r.length; u += 2) {
              var c = r[u],
                d = r[u + 1],
                h = (c - o) * e,
                f = i[u / 2];
              void 0 !== f.value ? (void 0 === a ? l.move(c, d, !1, f) : l.curve(o + h, s, c - h, d, c, d, !1, f), o = c, s = d, a = f) : t.fillHoles || (o = c = a = void 0)
            }
            return l
          }
        }, n.Interpolation.cardinal = function (t) {
          t = n.extend({}, {
            tension: 1,
            fillHoles: !1
          }, t);
          var e = Math.min(1, Math.max(0, t.tension)),
            r = 1 - e;
          return function i(o, s) {
            var a = n.splitIntoSegments(o, s, {
              fillHoles: t.fillHoles
            });
            if (a.length) {
              if (a.length > 1) {
                var l = [];
                return a.forEach(function (t) {
                  l.push(i(t.pathCoordinates, t.valueData))
                }), n.Svg.Path.join(l)
              }
              if (o = a[0].pathCoordinates, s = a[0].valueData, o.length <= 4) return n.Interpolation.none()(o, s);
              for (var u = (new n.Svg.Path).move(o[0], o[1], !1, s[0]), c = 0, d = o.length; d - 2 > c; c += 2) {
                var h = [{
                  x: +o[c - 2],
                  y: +o[c - 1]
                }, {
                  x: +o[c],
                  y: +o[c + 1]
                }, {
                  x: +o[c + 2],
                  y: +o[c + 3]
                }, {
                  x: +o[c + 4],
                  y: +o[c + 5]
                }];
                d - 4 === c ? h[3] = h[2] : c || (h[0] = {
                  x: +o[c],
                  y: +o[c + 1]
                }), u.curve(e * (-h[0].x + 6 * h[1].x + h[2].x) / 6 + r * h[2].x, e * (-h[0].y + 6 * h[1].y + h[2].y) / 6 + r * h[2].y, e * (h[1].x + 6 * h[2].x - h[3].x) / 6 + r * h[2].x, e * (h[1].y + 6 * h[2].y - h[3].y) / 6 + r * h[2].y, h[2].x, h[2].y, !1, s[(c + 2) / 2])
              }
              return u
            }
            return n.Interpolation.none()([])
          }
        }, n.Interpolation.monotoneCubic = function (t) {
          return t = n.extend({}, {
              fillHoles: !1
            }, t),
            function e(r, i) {
              var o = n.splitIntoSegments(r, i, {
                fillHoles: t.fillHoles,
                increasingX: !0
              });
              if (o.length) {
                if (o.length > 1) {
                  var s = [];
                  return o.forEach(function (t) {
                    s.push(e(t.pathCoordinates, t.valueData))
                  }), n.Svg.Path.join(s)
                }
                if (r = o[0].pathCoordinates, i = o[0].valueData, r.length <= 4) return n.Interpolation.none()(r, i);
                var a, l, u = [],
                  c = [],
                  d = r.length / 2,
                  h = [],
                  f = [],
                  p = [],
                  g = [];
                for (a = 0; a < d; a++) u[a] = r[2 * a], c[a] = r[2 * a + 1];
                for (a = 0; a < d - 1; a++) p[a] = c[a + 1] - c[a], g[a] = u[a + 1] - u[a], f[a] = p[a] / g[a];
                for (h[0] = f[0], h[d - 1] = f[d - 2], a = 1; a < d - 1; a++) 0 === f[a] || 0 === f[a - 1] || f[a - 1] > 0 != f[a] > 0 ? h[a] = 0 : (h[a] = 3 * (g[a - 1] + g[a]) / ((2 * g[a] + g[a - 1]) / f[a - 1] + (g[a] + 2 * g[a - 1]) / f[a]), isFinite(h[a]) || (h[a] = 0));
                for (l = (new n.Svg.Path).move(u[0], c[0], !1, i[0]), a = 0; a < d - 1; a++) l.curve(u[a] + g[a] / 3, c[a] + h[a] * g[a] / 3, u[a + 1] - g[a] / 3, c[a + 1] - h[a + 1] * g[a] / 3, u[a + 1], c[a + 1], !1, i[a + 1]);
                return l
              }
              return n.Interpolation.none()([])
            }
        }, n.Interpolation.step = function (t) {
          return t = n.extend({}, {
              postpone: !0,
              fillHoles: !1
            }, t),
            function (e, r) {
              for (var i, o, s, a = new n.Svg.Path, l = 0; l < e.length; l += 2) {
                var u = e[l],
                  c = e[l + 1],
                  d = r[l / 2];
                void 0 !== d.value ? (void 0 === s ? a.move(u, c, !1, d) : (t.postpone ? a.line(u, o, !1, s) : a.line(i, c, !1, d), a.line(u, c, !1, d)), i = u, o = c, s = d) : t.fillHoles || (i = o = s = void 0)
              }
              return a
            }
        }
      }(window, document, t),
      function (e, n, r) {
        "use strict";
        t.EventEmitter = function () {
          var t = [];
          return {
            addEventHandler: function (e, n) {
              t[e] = t[e] || [], t[e].push(n)
            },
            removeEventHandler: function (e, n) {
              t[e] && (n ? (t[e].splice(t[e].indexOf(n), 1), 0 === t[e].length && delete t[e]) : delete t[e])
            },
            emit: function (e, n) {
              t[e] && t[e].forEach(function (t) {
                t(n)
              }), t["*"] && t["*"].forEach(function (t) {
                t(e, n)
              })
            }
          }
        }
      }(window, document),
      function (t, e, n) {
        "use strict";
        n.Class = {
          extend: function (t, e) {
            var r = e || this.prototype || n.Class,
              i = Object.create(r);
            n.Class.cloneDefinitions(i, t);
            var o = function () {
              var t, e = i.constructor || function () {};
              return t = this === n ? Object.create(i) : this, e.apply(t, Array.prototype.slice.call(arguments, 0)), t
            };
            return o.prototype = i, o.super = r, o.extend = this.extend, o
          },
          cloneDefinitions: function () {
            var t = function (t) {
                var e = [];
                if (t.length)
                  for (var n = 0; n < t.length; n++) e.push(t[n]);
                return e
              }(arguments),
              e = t[0];
            return t.splice(1, t.length - 1).forEach(function (t) {
              Object.getOwnPropertyNames(t).forEach(function (n) {
                delete e[n], Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
              })
            }), e
          }
        }
      }(window, document, t),
      function (t, e, n) {
        "use strict";
        n.Base = n.Class.extend({
          constructor: function (e, r, i, o, s) {
            this.container = n.querySelector(e), this.data = r || {}, this.data.labels = this.data.labels || [], this.data.series = this.data.series || [], this.defaultOptions = i, this.options = o, this.responsiveOptions = s, this.eventEmitter = n.EventEmitter(), this.supportsForeignObject = n.Svg.isSupported("Extensibility"), this.supportsAnimations = n.Svg.isSupported("AnimationEventsAttribute"), this.resizeListener = function () {
              this.update()
            }.bind(this), this.container && (this.container.__chartist__ && this.container.__chartist__.detach(), this.container.__chartist__ = this), this.initializeTimeoutId = setTimeout(function () {
              t.addEventListener("resize", this.resizeListener), this.optionsProvider = n.optionsProvider(this.options, this.responsiveOptions, this.eventEmitter), this.eventEmitter.addEventHandler("optionsChanged", function () {
                this.update()
              }.bind(this)), this.options.plugins && this.options.plugins.forEach(function (t) {
                t instanceof Array ? t[0](this, t[1]) : t(this)
              }.bind(this)), this.eventEmitter.emit("data", {
                type: "initial",
                data: this.data
              }), this.createChart(this.optionsProvider.getCurrentOptions()), this.initializeTimeoutId = void 0
            }.bind(this), 0)
          },
          optionsProvider: void 0,
          container: void 0,
          svg: void 0,
          eventEmitter: void 0,
          createChart: function () {
            throw new Error("Base chart type can't be instantiated!")
          },
          update: function (t, e, r) {
            return t && (this.data = t || {}, this.data.labels = this.data.labels || [], this.data.series = this.data.series || [], this.eventEmitter.emit("data", {
              type: "update",
              data: this.data
            })), e && (this.options = n.extend({}, r ? this.options : this.defaultOptions, e), this.initializeTimeoutId || (this.optionsProvider.removeMediaQueryListeners(), this.optionsProvider = n.optionsProvider(this.options, this.responsiveOptions, this.eventEmitter))), this.initializeTimeoutId || this.createChart(this.optionsProvider.getCurrentOptions()), this
          },
          detach: function () {
            return this.initializeTimeoutId ? t.clearTimeout(this.initializeTimeoutId) : (t.removeEventListener("resize", this.resizeListener), this.optionsProvider.removeMediaQueryListeners()), this
          },
          on: function (t, e) {
            return this.eventEmitter.addEventHandler(t, e), this
          },
          off: function (t, e) {
            return this.eventEmitter.removeEventHandler(t, e), this
          },
          version: n.version,
          supportsForeignObject: !1
        })
      }(window, document, t),
      function (t, e, n) {
        "use strict";
        n.Svg = n.Class.extend({
          constructor: function (t, r, i, o, s) {
            t instanceof Element ? this._node = t : (this._node = e.createElementNS(n.namespaces.svg, t), "svg" === t && this.attr({
              "xmlns:ct": n.namespaces.ct
            })), r && this.attr(r), i && this.addClass(i), o && (s && o._node.firstChild ? o._node.insertBefore(this._node, o._node.firstChild) : o._node.appendChild(this._node))
          },
          attr: function (t, e) {
            return "string" == typeof t ? e ? this._node.getAttributeNS(e, t) : this._node.getAttribute(t) : (Object.keys(t).forEach(function (e) {
              if (void 0 !== t[e])
                if (-1 !== e.indexOf(":")) {
                  var r = e.split(":");
                  this._node.setAttributeNS(n.namespaces[r[0]], e, t[e])
                } else this._node.setAttribute(e, t[e])
            }.bind(this)), this)
          },
          elem: function (t, e, r, i) {
            return new n.Svg(t, e, r, this, i)
          },
          parent: function () {
            return this._node.parentNode instanceof SVGElement ? new n.Svg(this._node.parentNode) : null
          },
          root: function () {
            for (var t = this._node;
              "svg" !== t.nodeName;) t = t.parentNode;
            return new n.Svg(t)
          },
          querySelector: function (t) {
            var e = this._node.querySelector(t);
            return e ? new n.Svg(e) : null
          },
          querySelectorAll: function (t) {
            var e = this._node.querySelectorAll(t);
            return e.length ? new n.Svg.List(e) : null
          },
          getNode: function () {
            return this._node
          },
          foreignObject: function (t, r, i, o) {
            if ("string" == typeof t) {
              var s = e.createElement("div");
              s.innerHTML = t, t = s.firstChild
            }
            t.setAttribute("xmlns", n.namespaces.xmlns);
            var a = this.elem("foreignObject", r, i, o);
            return a._node.appendChild(t), a
          },
          text: function (t) {
            return this._node.appendChild(e.createTextNode(t)), this
          },
          empty: function () {
            for (; this._node.firstChild;) this._node.removeChild(this._node.firstChild);
            return this
          },
          remove: function () {
            return this._node.parentNode.removeChild(this._node), this.parent()
          },
          replace: function (t) {
            return this._node.parentNode.replaceChild(t._node, this._node), t
          },
          append: function (t, e) {
            return e && this._node.firstChild ? this._node.insertBefore(t._node, this._node.firstChild) : this._node.appendChild(t._node), this
          },
          classes: function () {
            return this._node.getAttribute("class") ? this._node.getAttribute("class").trim().split(/\s+/) : []
          },
          addClass: function (t) {
            return this._node.setAttribute("class", this.classes(this._node).concat(t.trim().split(/\s+/)).filter(function (t, e, n) {
              return n.indexOf(t) === e
            }).join(" ")), this
          },
          removeClass: function (t) {
            var e = t.trim().split(/\s+/);
            return this._node.setAttribute("class", this.classes(this._node).filter(function (t) {
              return -1 === e.indexOf(t)
            }).join(" ")), this
          },
          removeAllClasses: function () {
            return this._node.setAttribute("class", ""), this
          },
          height: function () {
            return this._node.getBoundingClientRect().height
          },
          width: function () {
            return this._node.getBoundingClientRect().width
          },
          animate: function (t, e, r) {
            return void 0 === e && (e = !0), Object.keys(t).forEach(function (i) {
              function o(t, e) {
                var o, s, a, l = {};
                t.easing && (a = t.easing instanceof Array ? t.easing : n.Svg.Easing[t.easing], delete t.easing), t.begin = n.ensureUnit(t.begin, "ms"), t.dur = n.ensureUnit(t.dur, "ms"), a && (t.calcMode = "spline", t.keySplines = a.join(" "), t.keyTimes = "0;1"), e && (t.fill = "freeze", l[i] = t.from, this.attr(l), s = n.quantity(t.begin || 0).value, t.begin = "indefinite"), o = this.elem("animate", n.extend({
                  attributeName: i
                }, t)), e && setTimeout(function () {
                  try {
                    o._node.beginElement()
                  } catch (e) {
                    l[i] = t.to, this.attr(l), o.remove()
                  }
                }.bind(this), s), r && o._node.addEventListener("beginEvent", function () {
                  r.emit("animationBegin", {
                    element: this,
                    animate: o._node,
                    params: t
                  })
                }.bind(this)), o._node.addEventListener("endEvent", function () {
                  r && r.emit("animationEnd", {
                    element: this,
                    animate: o._node,
                    params: t
                  }), e && (l[i] = t.to, this.attr(l), o.remove())
                }.bind(this))
              }
              t[i] instanceof Array ? t[i].forEach(function (t) {
                o.bind(this)(t, !1)
              }.bind(this)) : o.bind(this)(t[i], e)
            }.bind(this)), this
          }
        }), n.Svg.isSupported = function (t) {
          return e.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#" + t, "1.1")
        };
        n.Svg.Easing = {
          easeInSine: [.47, 0, .745, .715],
          easeOutSine: [.39, .575, .565, 1],
          easeInOutSine: [.445, .05, .55, .95],
          easeInQuad: [.55, .085, .68, .53],
          easeOutQuad: [.25, .46, .45, .94],
          easeInOutQuad: [.455, .03, .515, .955],
          easeInCubic: [.55, .055, .675, .19],
          easeOutCubic: [.215, .61, .355, 1],
          easeInOutCubic: [.645, .045, .355, 1],
          easeInQuart: [.895, .03, .685, .22],
          easeOutQuart: [.165, .84, .44, 1],
          easeInOutQuart: [.77, 0, .175, 1],
          easeInQuint: [.755, .05, .855, .06],
          easeOutQuint: [.23, 1, .32, 1],
          easeInOutQuint: [.86, 0, .07, 1],
          easeInExpo: [.95, .05, .795, .035],
          easeOutExpo: [.19, 1, .22, 1],
          easeInOutExpo: [1, 0, 0, 1],
          easeInCirc: [.6, .04, .98, .335],
          easeOutCirc: [.075, .82, .165, 1],
          easeInOutCirc: [.785, .135, .15, .86],
          easeInBack: [.6, -.28, .735, .045],
          easeOutBack: [.175, .885, .32, 1.275],
          easeInOutBack: [.68, -.55, .265, 1.55]
        }, n.Svg.List = n.Class.extend({
          constructor: function (t) {
            var e = this;
            this.svgElements = [];
            for (var r = 0; r < t.length; r++) this.svgElements.push(new n.Svg(t[r]));
            Object.keys(n.Svg.prototype).filter(function (t) {
              return -1 === ["constructor", "parent", "querySelector", "querySelectorAll", "replace", "append", "classes", "height", "width"].indexOf(t)
            }).forEach(function (t) {
              e[t] = function () {
                var r = Array.prototype.slice.call(arguments, 0);
                return e.svgElements.forEach(function (e) {
                  n.Svg.prototype[t].apply(e, r)
                }), e
              }
            })
          }
        })
      }(window, document, t),
      function (t, e, n) {
        "use strict";

        function r(t, e, r, i, o, s) {
          var a = n.extend({
            command: o ? t.toLowerCase() : t.toUpperCase()
          }, e, s ? {
            data: s
          } : {});
          r.splice(i, 0, a)
        }

        function i(t, e) {
          t.forEach(function (n, r) {
            o[n.command.toLowerCase()].forEach(function (i, o) {
              e(n, i, r, o, t)
            })
          })
        }
        var o = {
            m: ["x", "y"],
            l: ["x", "y"],
            c: ["x1", "y1", "x2", "y2", "x", "y"],
            a: ["rx", "ry", "xAr", "lAf", "sf", "x", "y"]
          },
          s = {
            accuracy: 3
          };
        n.Svg.Path = n.Class.extend({
          constructor: function (t, e) {
            this.pathElements = [], this.pos = 0, this.close = t, this.options = n.extend({}, s, e)
          },
          position: function (t) {
            return void 0 !== t ? (this.pos = Math.max(0, Math.min(this.pathElements.length, t)), this) : this.pos
          },
          remove: function (t) {
            return this.pathElements.splice(this.pos, t), this
          },
          move: function (t, e, n, i) {
            return r("M", {
              x: +t,
              y: +e
            }, this.pathElements, this.pos++, n, i), this
          },
          line: function (t, e, n, i) {
            return r("L", {
              x: +t,
              y: +e
            }, this.pathElements, this.pos++, n, i), this
          },
          curve: function (t, e, n, i, o, s, a, l) {
            return r("C", {
              x1: +t,
              y1: +e,
              x2: +n,
              y2: +i,
              x: +o,
              y: +s
            }, this.pathElements, this.pos++, a, l), this
          },
          arc: function (t, e, n, i, o, s, a, l, u) {
            return r("A", {
              rx: +t,
              ry: +e,
              xAr: +n,
              lAf: +i,
              sf: +o,
              x: +s,
              y: +a
            }, this.pathElements, this.pos++, l, u), this
          },
          scale: function (t, e) {
            return i(this.pathElements, function (n, r) {
              n[r] *= "x" === r[0] ? t : e
            }), this
          },
          translate: function (t, e) {
            return i(this.pathElements, function (n, r) {
              n[r] += "x" === r[0] ? t : e
            }), this
          },
          transform: function (t) {
            return i(this.pathElements, function (e, n, r, i, o) {
              var s = t(e, n, r, i, o);
              (s || 0 === s) && (e[n] = s)
            }), this
          },
          parse: function (t) {
            var e = t.replace(/([A-Za-z])([0-9])/g, "$1 $2").replace(/([0-9])([A-Za-z])/g, "$1 $2").split(/[\s,]+/).reduce(function (t, e) {
              return e.match(/[A-Za-z]/) && t.push([]), t[t.length - 1].push(e), t
            }, []);
            "Z" === e[e.length - 1][0].toUpperCase() && e.pop();
            var r = e.map(function (t) {
                var e = t.shift(),
                  r = o[e.toLowerCase()];
                return n.extend({
                  command: e
                }, r.reduce(function (e, n, r) {
                  return e[n] = +t[r], e
                }, {}))
              }),
              i = [this.pos, 0];
            return Array.prototype.push.apply(i, r), Array.prototype.splice.apply(this.pathElements, i), this.pos += r.length, this
          },
          stringify: function () {
            var t = Math.pow(10, this.options.accuracy);
            return this.pathElements.reduce(function (e, n) {
              var r = o[n.command.toLowerCase()].map(function (e) {
                return this.options.accuracy ? Math.round(n[e] * t) / t : n[e]
              }.bind(this));
              return e + n.command + r.join(",")
            }.bind(this), "") + (this.close ? "Z" : "")
          },
          clone: function (t) {
            var e = new n.Svg.Path(t || this.close);
            return e.pos = this.pos, e.pathElements = this.pathElements.slice().map(function (t) {
              return n.extend({}, t)
            }), e.options = n.extend({}, this.options), e
          },
          splitByCommand: function (t) {
            var e = [new n.Svg.Path];
            return this.pathElements.forEach(function (r) {
              r.command === t.toUpperCase() && 0 !== e[e.length - 1].pathElements.length && e.push(new n.Svg.Path), e[e.length - 1].pathElements.push(r)
            }), e
          }
        }), n.Svg.Path.elementDescriptions = o, n.Svg.Path.join = function (t, e, r) {
          for (var i = new n.Svg.Path(e, r), o = 0; o < t.length; o++)
            for (var s = t[o], a = 0; a < s.pathElements.length; a++) i.pathElements.push(s.pathElements[a]);
          return i
        }
      }(window, document, t),
      function (t, e, n) {
        "use strict";
        var r = {
          x: {
            pos: "x",
            len: "width",
            dir: "horizontal",
            rectStart: "x1",
            rectEnd: "x2",
            rectOffset: "y2"
          },
          y: {
            pos: "y",
            len: "height",
            dir: "vertical",
            rectStart: "y2",
            rectEnd: "y1",
            rectOffset: "x1"
          }
        };
        n.Axis = n.Class.extend({
          constructor: function (t, e, n, i) {
            this.units = t, this.counterUnits = t === r.x ? r.y : r.x, this.chartRect = e, this.axisLength = e[t.rectEnd] - e[t.rectStart], this.gridOffset = e[t.rectOffset], this.ticks = n, this.options = i
          },
          createGridAndLabels: function (t, e, r, i, o) {
            var s = i["axis" + this.units.pos.toUpperCase()],
              a = this.ticks.map(this.projectValue.bind(this)),
              l = this.ticks.map(s.labelInterpolationFnc);
            a.forEach(function (u, c) {
              var d, h = {
                x: 0,
                y: 0
              };
              d = a[c + 1] ? a[c + 1] - u : Math.max(this.axisLength - u, 30), n.isFalseyButZero(l[c]) && "" !== l[c] || ("x" === this.units.pos ? (u = this.chartRect.x1 + u, h.x = i.axisX.labelOffset.x, "start" === i.axisX.position ? h.y = this.chartRect.padding.top + i.axisX.labelOffset.y + (r ? 5 : 20) : h.y = this.chartRect.y1 + i.axisX.labelOffset.y + (r ? 5 : 20)) : (u = this.chartRect.y1 - u, h.y = i.axisY.labelOffset.y - (r ? d : 0), "start" === i.axisY.position ? h.x = r ? this.chartRect.padding.left + i.axisY.labelOffset.x : this.chartRect.x1 - 10 : h.x = this.chartRect.x2 + i.axisY.labelOffset.x + 10), s.showGrid && n.createGrid(u, c, this, this.gridOffset, this.chartRect[this.counterUnits.len](), t, [i.classNames.grid, i.classNames[this.units.dir]], o), s.showLabel && n.createLabel(u, d, c, l, this, s.offset, h, e, [i.classNames.label, i.classNames[this.units.dir], "start" === s.position ? i.classNames[s.position] : i.classNames.end], r, o))
            }.bind(this))
          },
          projectValue: function (t, e, n) {
            throw new Error("Base axis can't be instantiated!")
          }
        }), n.Axis.units = r
      }(window, document, t),
      function (t, e, n) {
        "use strict";
        n.AutoScaleAxis = n.Axis.extend({
          constructor: function (t, e, r, i) {
            var o = i.highLow || n.getHighLow(e, i, t.pos);
            this.bounds = n.getBounds(r[t.rectEnd] - r[t.rectStart], o, i.scaleMinSpace || 20, i.onlyInteger), this.range = {
              min: this.bounds.min,
              max: this.bounds.max
            }, n.AutoScaleAxis.super.constructor.call(this, t, r, this.bounds.values, i)
          },
          projectValue: function (t) {
            return this.axisLength * (+n.getMultiValue(t, this.units.pos) - this.bounds.min) / this.bounds.range
          }
        })
      }(window, document, t),
      function (t, e, n) {
        "use strict";
        n.FixedScaleAxis = n.Axis.extend({
          constructor: function (t, e, r, i) {
            var o = i.highLow || n.getHighLow(e, i, t.pos);
            this.divisor = i.divisor || 1, this.ticks = i.ticks || n.times(this.divisor).map(function (t, e) {
              return o.low + (o.high - o.low) / this.divisor * e
            }.bind(this)), this.ticks.sort(function (t, e) {
              return t - e
            }), this.range = {
              min: o.low,
              max: o.high
            }, n.FixedScaleAxis.super.constructor.call(this, t, r, this.ticks, i), this.stepLength = this.axisLength / this.divisor
          },
          projectValue: function (t) {
            return this.axisLength * (+n.getMultiValue(t, this.units.pos) - this.range.min) / (this.range.max - this.range.min)
          }
        })
      }(window, document, t),
      function (t, e, n) {
        "use strict";
        n.StepAxis = n.Axis.extend({
          constructor: function (t, e, r, i) {
            n.StepAxis.super.constructor.call(this, t, r, i.ticks, i);
            var o = Math.max(1, i.ticks.length - (i.stretch ? 1 : 0));
            this.stepLength = this.axisLength / o
          },
          projectValue: function (t, e) {
            return this.stepLength * e
          }
        })
      }(window, document, t),
      function (t, e, n) {
        "use strict";
        var r = {
          axisX: {
            offset: 30,
            position: "end",
            labelOffset: {
              x: 0,
              y: 0
            },
            showLabel: !0,
            showGrid: !0,
            labelInterpolationFnc: n.noop,
            type: void 0
          },
          axisY: {
            offset: 40,
            position: "start",
            labelOffset: {
              x: 0,
              y: 0
            },
            showLabel: !0,
            showGrid: !0,
            labelInterpolationFnc: n.noop,
            type: void 0,
            scaleMinSpace: 20,
            onlyInteger: !1
          },
          width: void 0,
          height: void 0,
          showLine: !0,
          showPoint: !0,
          showArea: !1,
          areaBase: 0,
          lineSmooth: !0,
          showGridBackground: !1,
          low: void 0,
          high: void 0,
          chartPadding: {
            top: 15,
            right: 15,
            bottom: 5,
            left: 10
          },
          fullWidth: !1,
          reverseData: !1,
          classNames: {
            chart: "ct-chart-line",
            label: "ct-label",
            labelGroup: "ct-labels",
            series: "ct-series",
            line: "ct-line",
            point: "ct-point",
            area: "ct-area",
            grid: "ct-grid",
            gridGroup: "ct-grids",
            gridBackground: "ct-grid-background",
            vertical: "ct-vertical",
            horizontal: "ct-horizontal",
            start: "ct-start",
            end: "ct-end"
          }
        };
        n.Line = n.Base.extend({
          constructor: function (t, e, i, o) {
            n.Line.super.constructor.call(this, t, e, r, n.extend({}, r, i), o)
          },
          createChart: function (t) {
            var e = n.normalizeData(this.data, t.reverseData, !0);
            this.svg = n.createSvg(this.container, t.width, t.height, t.classNames.chart);
            var i, o, s = this.svg.elem("g").addClass(t.classNames.gridGroup),
              a = this.svg.elem("g"),
              l = this.svg.elem("g").addClass(t.classNames.labelGroup),
              u = n.createChartRect(this.svg, t, r.padding);
            i = void 0 === t.axisX.type ? new n.StepAxis(n.Axis.units.x, e.normalized.series, u, n.extend({}, t.axisX, {
              ticks: e.normalized.labels,
              stretch: t.fullWidth
            })) : t.axisX.type.call(n, n.Axis.units.x, e.normalized.series, u, t.axisX), o = void 0 === t.axisY.type ? new n.AutoScaleAxis(n.Axis.units.y, e.normalized.series, u, n.extend({}, t.axisY, {
              high: n.isNumeric(t.high) ? t.high : t.axisY.high,
              low: n.isNumeric(t.low) ? t.low : t.axisY.low
            })) : t.axisY.type.call(n, n.Axis.units.y, e.normalized.series, u, t.axisY), i.createGridAndLabels(s, l, this.supportsForeignObject, t, this.eventEmitter), o.createGridAndLabels(s, l, this.supportsForeignObject, t, this.eventEmitter), t.showGridBackground && n.createGridBackground(s, u, t.classNames.gridBackground, this.eventEmitter), e.raw.series.forEach(function (r, s) {
              var l = a.elem("g");
              l.attr({
                "ct:series-name": r.name,
                "ct:meta": n.serialize(r.meta)
              }), l.addClass([t.classNames.series, r.className || t.classNames.series + "-" + n.alphaNumerate(s)].join(" "));
              var c = [],
                d = [];
              e.normalized.series[s].forEach(function (t, a) {
                var l = {
                  x: u.x1 + i.projectValue(t, a, e.normalized.series[s]),
                  y: u.y1 - o.projectValue(t, a, e.normalized.series[s])
                };
                c.push(l.x, l.y), d.push({
                  value: t,
                  valueIndex: a,
                  meta: n.getMetaData(r, a)
                })
              }.bind(this));
              var h = {
                  lineSmooth: n.getSeriesOption(r, t, "lineSmooth"),
                  showPoint: n.getSeriesOption(r, t, "showPoint"),
                  showLine: n.getSeriesOption(r, t, "showLine"),
                  showArea: n.getSeriesOption(r, t, "showArea"),
                  areaBase: n.getSeriesOption(r, t, "areaBase")
                },
                f = ("function" == typeof h.lineSmooth ? h.lineSmooth : h.lineSmooth ? n.Interpolation.monotoneCubic() : n.Interpolation.none())(c, d);
              if (h.showPoint && f.pathElements.forEach(function (e) {
                  var a = l.elem("line", {
                    x1: e.x,
                    y1: e.y,
                    x2: e.x + .01,
                    y2: e.y
                  }, t.classNames.point).attr({
                    "ct:value": [e.data.value.x, e.data.value.y].filter(n.isNumeric).join(","),
                    "ct:meta": n.serialize(e.data.meta)
                  });
                  this.eventEmitter.emit("draw", {
                    type: "point",
                    value: e.data.value,
                    index: e.data.valueIndex,
                    meta: e.data.meta,
                    series: r,
                    seriesIndex: s,
                    axisX: i,
                    axisY: o,
                    group: l,
                    element: a,
                    x: e.x,
                    y: e.y
                  })
                }.bind(this)), h.showLine) {
                var p = l.elem("path", {
                  d: f.stringify()
                }, t.classNames.line, !0);
                this.eventEmitter.emit("draw", {
                  type: "line",
                  values: e.normalized.series[s],
                  path: f.clone(),
                  chartRect: u,
                  index: s,
                  series: r,
                  seriesIndex: s,
                  seriesMeta: r.meta,
                  axisX: i,
                  axisY: o,
                  group: l,
                  element: p
                })
              }
              if (h.showArea && o.range) {
                var g = Math.max(Math.min(h.areaBase, o.range.max), o.range.min),
                  m = u.y1 - o.projectValue(g);
                f.splitByCommand("M").filter(function (t) {
                  return t.pathElements.length > 1
                }).map(function (t) {
                  var e = t.pathElements[0],
                    n = t.pathElements[t.pathElements.length - 1];
                  return t.clone(!0).position(0).remove(1).move(e.x, m).line(e.x, e.y).position(t.pathElements.length + 1).line(n.x, m)
                }).forEach(function (n) {
                  var a = l.elem("path", {
                    d: n.stringify()
                  }, t.classNames.area, !0);
                  this.eventEmitter.emit("draw", {
                    type: "area",
                    values: e.normalized.series[s],
                    path: n.clone(),
                    series: r,
                    seriesIndex: s,
                    axisX: i,
                    axisY: o,
                    chartRect: u,
                    index: s,
                    group: l,
                    element: a
                  })
                }.bind(this))
              }
            }.bind(this)), this.eventEmitter.emit("created", {
              bounds: o.bounds,
              chartRect: u,
              axisX: i,
              axisY: o,
              svg: this.svg,
              options: t
            })
          }
        })
      }(window, document, t),
      function (t, e, n) {
        "use strict";
        var r = {
          axisX: {
            offset: 30,
            position: "end",
            labelOffset: {
              x: 0,
              y: 0
            },
            showLabel: !0,
            showGrid: !0,
            labelInterpolationFnc: n.noop,
            scaleMinSpace: 30,
            onlyInteger: !1
          },
          axisY: {
            offset: 40,
            position: "start",
            labelOffset: {
              x: 0,
              y: 0
            },
            showLabel: !0,
            showGrid: !0,
            labelInterpolationFnc: n.noop,
            scaleMinSpace: 20,
            onlyInteger: !1
          },
          width: void 0,
          height: void 0,
          high: void 0,
          low: void 0,
          referenceValue: 0,
          chartPadding: {
            top: 15,
            right: 15,
            bottom: 5,
            left: 10
          },
          seriesBarDistance: 15,
          stackBars: !1,
          stackMode: "accumulate",
          horizontalBars: !1,
          distributeSeries: !1,
          reverseData: !1,
          showGridBackground: !1,
          classNames: {
            chart: "ct-chart-bar",
            horizontalBars: "ct-horizontal-bars",
            label: "ct-label",
            labelGroup: "ct-labels",
            series: "ct-series",
            bar: "ct-bar",
            grid: "ct-grid",
            gridGroup: "ct-grids",
            gridBackground: "ct-grid-background",
            vertical: "ct-vertical",
            horizontal: "ct-horizontal",
            start: "ct-start",
            end: "ct-end"
          }
        };
        n.Bar = n.Base.extend({
          constructor: function (t, e, i, o) {
            n.Bar.super.constructor.call(this, t, e, r, n.extend({}, r, i), o)
          },
          createChart: function (t) {
            var e, i;
            t.distributeSeries ? (e = n.normalizeData(this.data, t.reverseData, t.horizontalBars ? "x" : "y")).normalized.series = e.normalized.series.map(function (t) {
              return [t]
            }) : e = n.normalizeData(this.data, t.reverseData, t.horizontalBars ? "x" : "y"), this.svg = n.createSvg(this.container, t.width, t.height, t.classNames.chart + (t.horizontalBars ? " " + t.classNames.horizontalBars : ""));
            var o = this.svg.elem("g").addClass(t.classNames.gridGroup),
              s = this.svg.elem("g"),
              a = this.svg.elem("g").addClass(t.classNames.labelGroup);
            if (t.stackBars && 0 !== e.normalized.series.length) {
              var l = n.serialMap(e.normalized.series, function () {
                return Array.prototype.slice.call(arguments).map(function (t) {
                  return t
                }).reduce(function (t, e) {
                  return {
                    x: t.x + (e && e.x) || 0,
                    y: t.y + (e && e.y) || 0
                  }
                }, {
                  x: 0,
                  y: 0
                })
              });
              i = n.getHighLow([l], t, t.horizontalBars ? "x" : "y")
            } else i = n.getHighLow(e.normalized.series, t, t.horizontalBars ? "x" : "y");
            i.high = +t.high || (0 === t.high ? 0 : i.high), i.low = +t.low || (0 === t.low ? 0 : i.low);
            var u, c, d, h, f, p = n.createChartRect(this.svg, t, r.padding);
            c = t.distributeSeries && t.stackBars ? e.normalized.labels.slice(0, 1) : e.normalized.labels, t.horizontalBars ? (u = h = void 0 === t.axisX.type ? new n.AutoScaleAxis(n.Axis.units.x, e.normalized.series, p, n.extend({}, t.axisX, {
              highLow: i,
              referenceValue: 0
            })) : t.axisX.type.call(n, n.Axis.units.x, e.normalized.series, p, n.extend({}, t.axisX, {
              highLow: i,
              referenceValue: 0
            })), d = f = void 0 === t.axisY.type ? new n.StepAxis(n.Axis.units.y, e.normalized.series, p, {
              ticks: c
            }) : t.axisY.type.call(n, n.Axis.units.y, e.normalized.series, p, t.axisY)) : (d = h = void 0 === t.axisX.type ? new n.StepAxis(n.Axis.units.x, e.normalized.series, p, {
              ticks: c
            }) : t.axisX.type.call(n, n.Axis.units.x, e.normalized.series, p, t.axisX), u = f = void 0 === t.axisY.type ? new n.AutoScaleAxis(n.Axis.units.y, e.normalized.series, p, n.extend({}, t.axisY, {
              highLow: i,
              referenceValue: 0
            })) : t.axisY.type.call(n, n.Axis.units.y, e.normalized.series, p, n.extend({}, t.axisY, {
              highLow: i,
              referenceValue: 0
            })));
            var g = t.horizontalBars ? p.x1 + u.projectValue(0) : p.y1 - u.projectValue(0),
              m = [];
            d.createGridAndLabels(o, a, this.supportsForeignObject, t, this.eventEmitter), u.createGridAndLabels(o, a, this.supportsForeignObject, t, this.eventEmitter), t.showGridBackground && n.createGridBackground(o, p, t.classNames.gridBackground, this.eventEmitter), e.raw.series.forEach(function (r, i) {
              var o, a, l = i - (e.raw.series.length - 1) / 2;
              o = t.distributeSeries && !t.stackBars ? d.axisLength / e.normalized.series.length / 2 : t.distributeSeries && t.stackBars ? d.axisLength / 2 : d.axisLength / e.normalized.series[i].length / 2, (a = s.elem("g")).attr({
                "ct:series-name": r.name,
                "ct:meta": n.serialize(r.meta)
              }), a.addClass([t.classNames.series, r.className || t.classNames.series + "-" + n.alphaNumerate(i)].join(" ")), e.normalized.series[i].forEach(function (s, c) {
                var v, y, b, w;
                if (w = t.distributeSeries && !t.stackBars ? i : t.distributeSeries && t.stackBars ? 0 : c, v = t.horizontalBars ? {
                    x: p.x1 + u.projectValue(s && s.x ? s.x : 0, c, e.normalized.series[i]),
                    y: p.y1 - d.projectValue(s && s.y ? s.y : 0, w, e.normalized.series[i])
                  } : {
                    x: p.x1 + d.projectValue(s && s.x ? s.x : 0, w, e.normalized.series[i]),
                    y: p.y1 - u.projectValue(s && s.y ? s.y : 0, c, e.normalized.series[i])
                  }, d instanceof n.StepAxis && (d.options.stretch || (v[d.units.pos] += o * (t.horizontalBars ? -1 : 1)), v[d.units.pos] += t.stackBars || t.distributeSeries ? 0 : l * t.seriesBarDistance * (t.horizontalBars ? -1 : 1)), b = m[c] || g, m[c] = b - (g - v[d.counterUnits.pos]), void 0 !== s) {
                  var _ = {};
                  _[d.units.pos + "1"] = v[d.units.pos], _[d.units.pos + "2"] = v[d.units.pos], !t.stackBars || "accumulate" !== t.stackMode && t.stackMode ? (_[d.counterUnits.pos + "1"] = g, _[d.counterUnits.pos + "2"] = v[d.counterUnits.pos]) : (_[d.counterUnits.pos + "1"] = b, _[d.counterUnits.pos + "2"] = m[c]), _.x1 = Math.min(Math.max(_.x1, p.x1), p.x2), _.x2 = Math.min(Math.max(_.x2, p.x1), p.x2), _.y1 = Math.min(Math.max(_.y1, p.y2), p.y1), _.y2 = Math.min(Math.max(_.y2, p.y2), p.y1);
                  var S = n.getMetaData(r, c);
                  y = a.elem("line", _, t.classNames.bar).attr({
                    "ct:value": [s.x, s.y].filter(n.isNumeric).join(","),
                    "ct:meta": n.serialize(S)
                  }), this.eventEmitter.emit("draw", n.extend({
                    type: "bar",
                    value: s,
                    index: c,
                    meta: S,
                    series: r,
                    seriesIndex: i,
                    axisX: h,
                    axisY: f,
                    chartRect: p,
                    group: a,
                    element: y
                  }, _))
                }
              }.bind(this))
            }.bind(this)), this.eventEmitter.emit("created", {
              bounds: u.bounds,
              chartRect: p,
              axisX: h,
              axisY: f,
              svg: this.svg,
              options: t
            })
          }
        })
      }(window, document, t),
      function (t, e, n) {
        "use strict";

        function r(t, e, n) {
          var r = e.x > t.x;
          return r && "explode" === n || !r && "implode" === n ? "start" : r && "implode" === n || !r && "explode" === n ? "end" : "middle"
        }
        var i = {
          width: void 0,
          height: void 0,
          chartPadding: 5,
          classNames: {
            chartPie: "ct-chart-pie",
            chartDonut: "ct-chart-donut",
            series: "ct-series",
            slicePie: "ct-slice-pie",
            sliceDonut: "ct-slice-donut",
            sliceDonutSolid: "ct-slice-donut-solid",
            label: "ct-label"
          },
          startAngle: 0,
          total: void 0,
          donut: !1,
          donutSolid: !1,
          donutWidth: 60,
          showLabel: !0,
          labelOffset: 0,
          labelPosition: "inside",
          labelInterpolationFnc: n.noop,
          labelDirection: "neutral",
          reverseData: !1,
          ignoreEmptyValues: !1
        };
        n.Pie = n.Base.extend({
          constructor: function (t, e, r, o) {
            n.Pie.super.constructor.call(this, t, e, i, n.extend({}, i, r), o)
          },
          createChart: function (t) {
            var e, o, s, a, l, u = n.normalizeData(this.data),
              c = [],
              d = t.startAngle;
            this.svg = n.createSvg(this.container, t.width, t.height, t.donut ? t.classNames.chartDonut : t.classNames.chartPie), o = n.createChartRect(this.svg, t, i.padding), s = Math.min(o.width() / 2, o.height() / 2), l = t.total || u.normalized.series.reduce(function (t, e) {
              return t + e
            }, 0);
            var h = n.quantity(t.donutWidth);
            "%" === h.unit && (h.value *= s / 100), s -= t.donut && !t.donutSolid ? h.value / 2 : 0, a = "outside" === t.labelPosition || t.donut && !t.donutSolid ? s : "center" === t.labelPosition ? 0 : t.donutSolid ? s - h.value / 2 : s / 2, a += t.labelOffset;
            var f = {
                x: o.x1 + o.width() / 2,
                y: o.y2 + o.height() / 2
              },
              p = 1 === u.raw.series.filter(function (t) {
                return t.hasOwnProperty("value") ? 0 !== t.value : 0 !== t
              }).length;
            u.raw.series.forEach(function (t, e) {
              c[e] = this.svg.elem("g", null, null)
            }.bind(this)), t.showLabel && (e = this.svg.elem("g", null, null)), u.raw.series.forEach(function (i, o) {
              if (0 !== u.normalized.series[o] || !t.ignoreEmptyValues) {
                c[o].attr({
                  "ct:series-name": i.name
                }), c[o].addClass([t.classNames.series, i.className || t.classNames.series + "-" + n.alphaNumerate(o)].join(" "));
                var g = l > 0 ? d + u.normalized.series[o] / l * 360 : 0,
                  m = Math.max(0, d - (0 === o || p ? 0 : .2));
                g - m >= 359.99 && (g = m + 359.99);
                var v, y, b, w = n.polarToCartesian(f.x, f.y, s, m),
                  _ = n.polarToCartesian(f.x, f.y, s, g),
                  S = new n.Svg.Path(!t.donut || t.donutSolid).move(_.x, _.y).arc(s, s, 0, g - d > 180, 0, w.x, w.y);
                t.donut ? t.donutSolid && (b = s - h.value, v = n.polarToCartesian(f.x, f.y, b, d - (0 === o || p ? 0 : .2)), y = n.polarToCartesian(f.x, f.y, b, g), S.line(v.x, v.y), S.arc(b, b, 0, g - d > 180, 1, y.x, y.y)) : S.line(f.x, f.y);
                var D = t.classNames.slicePie;
                t.donut && (D = t.classNames.sliceDonut, t.donutSolid && (D = t.classNames.sliceDonutSolid));
                var x = c[o].elem("path", {
                  d: S.stringify()
                }, D);
                if (x.attr({
                    "ct:value": u.normalized.series[o],
                    "ct:meta": n.serialize(i.meta)
                  }), t.donut && !t.donutSolid && (x._node.style.strokeWidth = h.value + "px"), this.eventEmitter.emit("draw", {
                    type: "slice",
                    value: u.normalized.series[o],
                    totalDataSum: l,
                    index: o,
                    meta: i.meta,
                    series: i,
                    group: c[o],
                    element: x,
                    path: S.clone(),
                    center: f,
                    radius: s,
                    startAngle: d,
                    endAngle: g
                  }), t.showLabel) {
                  var C, T;
                  C = 1 === u.raw.series.length ? {
                    x: f.x,
                    y: f.y
                  } : n.polarToCartesian(f.x, f.y, a, d + (g - d) / 2), T = u.normalized.labels && !n.isFalseyButZero(u.normalized.labels[o]) ? u.normalized.labels[o] : u.normalized.series[o];
                  var E = t.labelInterpolationFnc(T, o);
                  if (E || 0 === E) {
                    var M = e.elem("text", {
                      dx: C.x,
                      dy: C.y,
                      "text-anchor": r(f, C, t.labelDirection)
                    }, t.classNames.label).text("" + E);
                    this.eventEmitter.emit("draw", {
                      type: "label",
                      index: o,
                      group: e,
                      element: M,
                      text: "" + E,
                      x: C.x,
                      y: C.y
                    })
                  }
                }
                d = g
              }
            }.bind(this)), this.eventEmitter.emit("created", {
              chartRect: o,
              svg: this.svg,
              options: t
            })
          },
          determineAnchorPosition: r
        })
      }(window, document, t), t
  }), function (t, e) {
    "function" == typeof define && define.amd ? define(["chartist"], function (n) {
      return t.returnExportsGlobal = e(n)
    }) : "object" == typeof exports ? module.exports = e(require("chartist")) : t["Chartist.plugins.tooltips"] = e(Chartist)
  }(this, function (t) {
    return function (t, e, n) {
      "use strict";

      function r(t) {
        var e = new RegExp("tooltip-show\\s*", "gi");
        t.className = t.className.replace(e, "").trim()
      }

      function i(t, e) {
        return (" " + t.getAttribute("class") + " ").indexOf(" " + e + " ") > -1
      }
      var o = {
        currency: void 0,
        currencyFormatCallback: void 0,
        tooltipOffset: {
          x: 0,
          y: -20
        },
        anchorToPoint: !1,
        appendToBody: !1,
        class: void 0,
        pointClass: "ct-point"
      };
      n.plugins = n.plugins || {}, n.plugins.tooltip = function (s) {
        return s = n.extend({}, o, s),
          function (o) {
            function a(t, e, n) {
              c.addEventListener(t, function (t) {
                e && !i(t.target, e) || n(t)
              })
            }

            function l(e) {
              h = h || d.offsetHeight;
              var n, r, i = -(f = f || d.offsetWidth) / 2 + s.tooltipOffset.x,
                o = -h + s.tooltipOffset.y;
              if (s.appendToBody) d.style.top = e.pageY + o + "px", d.style.left = e.pageX + i + "px";
              else {
                var a = c.getBoundingClientRect(),
                  l = e.pageX - a.left - t.pageXOffset,
                  u = e.pageY - a.top - t.pageYOffset;
                !0 === s.anchorToPoint && e.target.x2 && e.target.y2 && (n = parseInt(e.target.x2.baseVal.value), r = parseInt(e.target.y2.baseVal.value)), d.style.top = (r || u) + o + "px", d.style.left = (n || l) + i + "px"
              }
            }
            var u = s.pointClass;
            o instanceof n.Bar ? u = "ct-bar" : o instanceof n.Pie && (u = o.options.donut ? "ct-slice-donut" : "ct-slice-pie");
            var c = o.container,
              d = c.querySelector(".chartist-tooltip");
            d || ((d = e.createElement("div")).className = s.class ? "chartist-tooltip " + s.class : "chartist-tooltip", s.appendToBody ? e.body.appendChild(d) : c.appendChild(d));
            var h = d.offsetHeight,
              f = d.offsetWidth;
            r(d), a("mouseover", u, function (t) {
              var r, a, u = t.target,
                c = "",
                p = (o instanceof n.Pie ? u : u.parentNode) ? u.parentNode.getAttribute("ct:meta") || u.parentNode.getAttribute("ct:series-name") : "",
                g = u.getAttribute("ct:meta") || p || "",
                m = !!g,
                v = u.getAttribute("ct:value");
              if (s.transformTooltipTextFnc && "function" == typeof s.transformTooltipTextFnc && (v = s.transformTooltipTextFnc(v)), s.tooltipFnc && "function" == typeof s.tooltipFnc) c = s.tooltipFnc(g, v);
              else {
                if (s.metaIsHTML) {
                  var y = e.createElement("textarea");
                  y.innerHTML = g, g = y.value
                }
                if (g = '<span class="chartist-tooltip-meta">' + g + "</span>", m) c += g + "<br>";
                else if (o instanceof n.Pie) {
                  var b = function (t, e) {
                    do {
                      t = t.nextSibling
                    } while (t && !i(t, e));
                    return t
                  }(u, "ct-label");
                  b && (c += ((r = b).innerText || r.textContent) + "<br>")
                }
                v && (s.currency && (v = void 0 != s.currencyFormatCallback ? s.currencyFormatCallback(v, s) : s.currency + v.replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,")), c += v = '<span class="chartist-tooltip-value">' + v + "</span>")
              }
              c && (d.innerHTML = c, l(t), i(a = d, "tooltip-show") || (a.className = a.className + " tooltip-show"), h = d.offsetHeight, f = d.offsetWidth)
            }), a("mouseout", u, function () {
              r(d)
            }), a("mousemove", null, function (t) {
              !1 === s.anchorToPoint && l(t)
            })
          }
      }
    }(window, document, t), t.plugins.tooltips
  }), function (t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
      ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).dragula = t()
    }
  }(function () {
    return function t(e, n, r) {
      function i(s, a) {
        if (!n[s]) {
          if (!e[s]) {
            var l = "function" == typeof require && require;
            if (!a && l) return l(s, !0);
            if (o) return o(s, !0);
            var u = new Error("Cannot find module '" + s + "'");
            throw u.code = "MODULE_NOT_FOUND", u
          }
          var c = n[s] = {
            exports: {}
          };
          e[s][0].call(c.exports, function (t) {
            var n = e[s][1][t];
            return i(n || t)
          }, c, c.exports, t, e, n, r)
        }
        return n[s].exports
      }
      for (var o = "function" == typeof require && require, s = 0; s < r.length; s++) i(r[s]);
      return i
    }({
      1: [function (t, e, n) {
        "use strict";

        function r(t) {
          var e = i[t];
          return e ? e.lastIndex = 0 : i[t] = e = new RegExp(o + t + s, "g"), e
        }
        var i = {},
          o = "(?:^|\\s)",
          s = "(?:\\s|$)";
        e.exports = {
          add: function (t, e) {
            var n = t.className;
            n.length ? r(e).test(n) || (t.className += " " + e) : t.className = e
          },
          rm: function (t, e) {
            t.className = t.className.replace(r(e), " ").trim()
          }
        }
      }, {}],
      2: [function (t, e, n) {
        (function (n) {
          "use strict";

          function r(t, e, r, i) {
            n.navigator.pointerEnabled ? m[e](t, {
              mouseup: "pointerup",
              mousedown: "pointerdown",
              mousemove: "pointermove"
            } [r], i) : n.navigator.msPointerEnabled ? m[e](t, {
              mouseup: "MSPointerUp",
              mousedown: "MSPointerDown",
              mousemove: "MSPointerMove"
            } [r], i) : (m[e](t, {
              mouseup: "touchend",
              mousedown: "touchstart",
              mousemove: "touchmove"
            } [r], i), m[e](t, r, i))
          }

          function i(t) {
            if (void 0 !== t.touches) return t.touches.length;
            if (void 0 !== t.which && 0 !== t.which) return t.which;
            if (void 0 !== t.buttons) return t.buttons;
            var e = t.button;
            return void 0 !== e ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : void 0
          }

          function o(t, e) {
            return void 0 !== n[e] ? n[e] : b.clientHeight ? b[t] : y.body[t]
          }

          function s(t, e, n) {
            var r, i = t || {},
              o = i.className;
            return i.className += " gu-hide", r = y.elementFromPoint(e, n), i.className = o, r
          }

          function a() {
            return !1
          }

          function l() {
            return !0
          }

          function u(t) {
            return t.width || t.right - t.left
          }

          function c(t) {
            return t.height || t.bottom - t.top
          }

          function d(t) {
            return t.parentNode === y ? null : t.parentNode
          }

          function h(t) {
            return "INPUT" === t.tagName || "TEXTAREA" === t.tagName || "SELECT" === t.tagName || function t(e) {
              return !!e && ("false" !== e.contentEditable && ("true" === e.contentEditable || t(d(e))))
            }(t)
          }

          function f(t) {
            return t.nextElementSibling || function () {
              var e = t;
              do {
                e = e.nextSibling
              } while (e && 1 !== e.nodeType);
              return e
            }()
          }

          function p(t, e) {
            var n, r = (n = e).targetTouches && n.targetTouches.length ? n.targetTouches[0] : n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n,
              i = {
                pageX: "clientX",
                pageY: "clientY"
              };
            return t in i && !(t in r) && i[t] in r && (t = i[t]), r[t]
          }
          var g = t("contra/emitter"),
            m = t("crossvent"),
            v = t("./classes"),
            y = document,
            b = y.documentElement;
          e.exports = function (t, e) {
            function n(t) {
              return -1 !== tt.containers.indexOf(t) || J.isContainer(t)
            }

            function w(t) {
              var e = t ? "remove" : "add";
              r(b, e, "mousedown", x), r(b, e, "mouseup", R)
            }

            function _(t) {
              r(b, t ? "remove" : "add", "mousemove", C)
            }

            function S(t) {
              var e = t ? "remove" : "add";
              m[e](b, "selectstart", D), m[e](b, "click", D)
            }

            function D(t) {
              Z && t.preventDefault()
            }

            function x(t) {
              if (V = t.clientX, G = t.clientY, 1 === i(t) && !t.metaKey && !t.ctrlKey) {
                var e = t.target,
                  n = T(e);
                n && (Z = n, _(), "mousedown" === t.type && (h(e) ? e.focus() : t.preventDefault()))
              }
            }

            function C(t) {
              if (Z) {
                if (0 === i(t)) return void R({});
                if (void 0 === t.clientX || t.clientX !== V || void 0 === t.clientY || t.clientY !== G) {
                  if (J.ignoreInputTextSelection) {
                    var e = p("clientX", t),
                      n = p("clientY", t);
                    if (h(y.elementFromPoint(e, n))) return
                  }
                  var s = Z;
                  _(!0), S(), M(), E(s);
                  var a = {
                    left: (l = W.getBoundingClientRect()).left + o("scrollLeft", "pageXOffset"),
                    top: l.top + o("scrollTop", "pageYOffset")
                  };
                  Y = p("pageX", t) - a.left, U = p("pageY", t) - a.top, v.add($ || W, "gu-transit"),
                    function () {
                      if (!B) {
                        var t = W.getBoundingClientRect();
                        (B = W.cloneNode(!0)).style.width = u(t) + "px", B.style.height = c(t) + "px", v.rm(B, "gu-transit"), v.add(B, "gu-mirror"), J.mirrorContainer.appendChild(B), r(b, "add", "mousemove", L), v.add(J.mirrorContainer, "gu-unselectable"), tt.emit("cloned", B, W, "mirror")
                      }
                    }(), L(t)
                }
              }
              var l
            }

            function T(t) {
              if (!(tt.dragging && B || n(t))) {
                for (var e = t; d(t) && !1 === n(d(t));) {
                  if (J.invalid(t, e)) return;
                  if (!(t = d(t))) return
                }
                var r = d(t);
                if (r && !J.invalid(t, e) && J.moves(t, r, e, f(t))) return {
                  item: t,
                  source: r
                }
              }
            }

            function E(t) {
              var e, n;
              e = t.item, n = t.source, ("boolean" == typeof J.copy ? J.copy : J.copy(e, n)) && ($ = t.item.cloneNode(!0), tt.emit("cloned", $, t.item, "copy")), z = t.source, W = t.item, q = X = f(t.item), tt.dragging = !0, tt.emit("drag", W, z)
            }

            function M() {
              if (tt.dragging) {
                var t = $ || W;
                A(t, d(t))
              }
            }

            function I() {
              Z = !1, _(!0), S(!0)
            }

            function R(t) {
              if (I(), tt.dragging) {
                var e = $ || W,
                  n = p("clientX", t),
                  r = p("clientY", t),
                  i = N(s(B, n, r), n, r);
                i && ($ && J.copySortSource || !$ || i !== z) ? A(e, i) : J.removeOnSpill ? P() : O()
              }
            }

            function A(t, e) {
              var n = d(t);
              $ && J.copySortSource && e === z && n.removeChild(W), H(e) ? tt.emit("cancel", t, z, z) : tt.emit("drop", t, e, z, X), k()
            }

            function P() {
              if (tt.dragging) {
                var t = $ || W,
                  e = d(t);
                e && e.removeChild(t), tt.emit($ ? "cancel" : "remove", t, e, z), k()
              }
            }

            function O(t) {
              if (tt.dragging) {
                var e = arguments.length > 0 ? t : J.revertOnSpill,
                  n = $ || W,
                  r = d(n),
                  i = H(r);
                !1 === i && e && ($ ? r && r.removeChild($) : z.insertBefore(n, q)), i || e ? tt.emit("cancel", n, z, z) : tt.emit("drop", n, r, z, X), k()
              }
            }

            function k() {
              var t = $ || W;
              I(), B && (v.rm(J.mirrorContainer, "gu-unselectable"), r(b, "remove", "mousemove", L), d(B).removeChild(B), B = null), t && v.rm(t, "gu-transit"), Q && clearTimeout(Q), tt.dragging = !1, K && tt.emit("out", t, K, z), tt.emit("dragend", t), z = W = $ = q = X = Q = K = null
            }

            function H(t, e) {
              var n;
              return n = void 0 !== e ? e : B ? X : f($ || W), t === z && n === q
            }

            function N(t, e, r) {
              function i() {
                if (!1 === n(o)) return !1;
                var i = F(o, t),
                  s = j(o, i, e, r);
                return !!H(o, s) || J.accepts(W, o, z, s)
              }
              for (var o = t; o && !i();) o = d(o);
              return o
            }

            function L(t) {
              function e(t) {
                tt.emit(t, a, K, z)
              }
              if (B) {
                t.preventDefault();
                var n = p("clientX", t),
                  r = p("clientY", t),
                  i = n - Y,
                  o = r - U;
                B.style.left = i + "px", B.style.top = o + "px";
                var a = $ || W,
                  l = s(B, n, r),
                  u = N(l, n, r),
                  c = null !== u && u !== K;
                (c || null === u) && (K && e("out"), K = u, c && e("over"));
                var h = d(a);
                if (u === z && $ && !J.copySortSource) return void(h && h.removeChild(a));
                var g, m = F(u, l);
                if (null !== m) g = j(u, m, n, r);
                else {
                  if (!0 !== J.revertOnSpill || $) return void($ && h && h.removeChild(a));
                  g = q, u = z
                }(null === g && c || g !== a && g !== f(a)) && (X = g, u.insertBefore(a, g), tt.emit("shadow", a, u, z))
              }
            }

            function F(t, e) {
              for (var n = e; n !== t && d(n) !== t;) n = d(n);
              return n === b ? null : n
            }

            function j(t, e, n, r) {
              var i, o = "horizontal" === J.direction;
              return e !== t ? (i = e.getBoundingClientRect(), (o ? n > i.left + u(i) / 2 : r > i.top + c(i) / 2) ? f(e) : e) : function () {
                var e, i, s, a = t.children.length;
                for (e = 0; a > e; e++) {
                  if (s = (i = t.children[e]).getBoundingClientRect(), o && s.left + s.width / 2 > n) return i;
                  if (!o && s.top + s.height / 2 > r) return i
                }
                return null
              }()
            }
            1 === arguments.length && !1 === Array.isArray(t) && (e = t, t = []);
            var B, z, W, Y, U, V, G, q, X, $, Q, Z, K = null,
              J = e || {};
            void 0 === J.moves && (J.moves = l), void 0 === J.accepts && (J.accepts = l), void 0 === J.invalid && (J.invalid = function () {
              return !1
            }), void 0 === J.containers && (J.containers = t || []), void 0 === J.isContainer && (J.isContainer = a), void 0 === J.copy && (J.copy = !1), void 0 === J.copySortSource && (J.copySortSource = !1), void 0 === J.revertOnSpill && (J.revertOnSpill = !1), void 0 === J.removeOnSpill && (J.removeOnSpill = !1), void 0 === J.direction && (J.direction = "vertical"), void 0 === J.ignoreInputTextSelection && (J.ignoreInputTextSelection = !0), void 0 === J.mirrorContainer && (J.mirrorContainer = y.body);
            var tt = g({
              containers: J.containers,
              start: function (t) {
                var e = T(t);
                e && E(e)
              },
              end: M,
              cancel: O,
              remove: P,
              destroy: function () {
                w(!0), R({})
              },
              canMove: function (t) {
                return !!T(t)
              },
              dragging: !1
            });
            return !0 === J.removeOnSpill && tt.on("over", function (t) {
              v.rm(t, "gu-hide")
            }).on("out", function (t) {
              tt.dragging && v.add(t, "gu-hide")
            }), w(), tt
          }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
      }, {
        "./classes": 1,
        "contra/emitter": 5,
        crossvent: 6
      }],
      3: [function (t, e, n) {
        e.exports = function (t, e) {
          return Array.prototype.slice.call(t, e)
        }
      }, {}],
      4: [function (t, e, n) {
        "use strict";
        var r = t("ticky");
        e.exports = function (t, e, n) {
          t && r(function () {
            t.apply(n || null, e || [])
          })
        }
      }, {
        ticky: 9
      }],
      5: [function (t, e, n) {
        "use strict";
        var r = t("atoa"),
          i = t("./debounce");
        e.exports = function (t, e) {
          var n = e || {},
            o = {};
          return void 0 === t && (t = {}), t.on = function (e, n) {
            return o[e] ? o[e].push(n) : o[e] = [n], t
          }, t.once = function (e, n) {
            return n._once = !0, t.on(e, n), t
          }, t.off = function (e, n) {
            var r = arguments.length;
            if (1 === r) delete o[e];
            else if (0 === r) o = {};
            else {
              var i = o[e];
              if (!i) return t;
              i.splice(i.indexOf(n), 1)
            }
            return t
          }, t.emit = function () {
            var e = r(arguments);
            return t.emitterSnapshot(e.shift()).apply(this, e)
          }, t.emitterSnapshot = function (e) {
            var s = (o[e] || []).slice(0);
            return function () {
              var o = r(arguments),
                a = this || t;
              if ("error" === e && !1 !== n.throws && !s.length) throw 1 === o.length ? o[0] : o;
              return s.forEach(function (r) {
                n.async ? i(r, o, a) : r.apply(a, o), r._once && t.off(e, r)
              }), t
            }
          }, t
        }
      }, {
        "./debounce": 4,
        atoa: 3
      }],
      6: [function (t, e, n) {
        (function (n) {
          "use strict";

          function r(t, e, n) {
            var r = function (t, e, n) {
              var r, i;
              for (r = 0; r < u.length; r++)
                if ((i = u[r]).element === t && i.type === e && i.fn === n) return r
            }(t, e, n);
            if (r) {
              var i = u[r].wrapper;
              return u.splice(r, 1), i
            }
          }
          var i = t("custom-event"),
            o = t("./eventmap"),
            s = n.document,
            a = function (t, e, n, r) {
              return t.addEventListener(e, n, r)
            },
            l = function (t, e, n, r) {
              return t.removeEventListener(e, n, r)
            },
            u = [];
          n.addEventListener || (a = function (t, e, i) {
            return t.attachEvent("on" + e, (l = r(o = t, s = e, a = i) || (c = o, d = a, function (t) {
              var e = t || n.event;
              e.target = e.target || e.srcElement, e.preventDefault = e.preventDefault || function () {
                e.returnValue = !1
              }, e.stopPropagation = e.stopPropagation || function () {
                e.cancelBubble = !0
              }, e.which = e.which || e.keyCode, d.call(c, e)
            }), u.push({
              wrapper: l,
              element: o,
              type: s,
              fn: a
            }), l));
            var o, s, a, l, c, d
          }, l = function (t, e, n) {
            var i = r(t, e, n);
            return i ? t.detachEvent("on" + e, i) : void 0
          }), e.exports = {
            add: a,
            remove: l,
            fabricate: function (t, e, n) {
              var r, a = -1 === o.indexOf(e) ? new i(e, {
                detail: n
              }) : (s.createEvent ? (r = s.createEvent("Event")).initEvent(e, !0, !0) : s.createEventObject && (r = s.createEventObject()), r);
              t.dispatchEvent ? t.dispatchEvent(a) : t.fireEvent("on" + e, a)
            }
          }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
      }, {
        "./eventmap": 7,
        "custom-event": 8
      }],
      7: [function (t, e, n) {
        (function (t) {
          "use strict";
          var n = [],
            r = "",
            i = /^on/;
          for (r in t) i.test(r) && n.push(r.slice(2));
          e.exports = n
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
      }, {}],
      8: [function (t, e, n) {
        (function (t) {
          var n = t.CustomEvent;
          e.exports = function () {
            try {
              var t = new n("cat", {
                detail: {
                  foo: "bar"
                }
              });
              return "cat" === t.type && "bar" === t.detail.foo
            } catch (t) {}
            return !1
          }() ? n : "function" == typeof document.createEvent ? function (t, e) {
            var n = document.createEvent("CustomEvent");
            return e ? n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail) : n.initCustomEvent(t, !1, !1, void 0), n
          } : function (t, e) {
            var n = document.createEventObject();
            return n.type = t, e ? (n.bubbles = Boolean(e.bubbles), n.cancelable = Boolean(e.cancelable), n.detail = e.detail) : (n.bubbles = !1, n.cancelable = !1, n.detail = void 0), n
          }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
      }, {}],
      9: [function (t, e, n) {
        var r;
        r = "function" == typeof setImmediate ? function (t) {
          setImmediate(t)
        } : function (t) {
          setTimeout(t, 0)
        }, e.exports = r
      }, {}]
    }, {}, [2])(2)
  }), function (t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], function (e) {
      return t(e, window, document)
    }) : "object" == typeof exports ? module.exports = function (e, n) {
      return e || (e = window), n || (n = "undefined" != typeof window ? require("jquery") : require("jquery")(e)), t(n, e, e.document)
    } : t(jQuery, window, document)
  }(function (t, e, n, r) {
    "use strict";
    var i, o, s, a, l = function (e) {
        this.$ = function (t, e) {
          return this.api(!0).$(t, e)
        }, this._ = function (t, e) {
          return this.api(!0).rows(t, e).data()
        }, this.api = function (t) {
          return new o(t ? oe(this[i.iApiIndex]) : this)
        }, this.fnAddData = function (e, n) {
          var i = this.api(!0),
            o = t.isArray(e) && (t.isArray(e[0]) || t.isPlainObject(e[0])) ? i.rows.add(e) : i.row.add(e);
          return (n === r || n) && i.draw(), o.flatten().toArray()
        }, this.fnAdjustColumnSizing = function (t) {
          var e = this.api(!0).columns.adjust(),
            n = e.settings()[0],
            i = n.oScroll;
          t === r || t ? e.draw(!1) : "" === i.sX && "" === i.sY || zt(n)
        }, this.fnClearTable = function (t) {
          var e = this.api(!0).clear();
          (t === r || t) && e.draw()
        }, this.fnClose = function (t) {
          this.api(!0).row(t).child.hide()
        }, this.fnDeleteRow = function (t, e, n) {
          var i = this.api(!0),
            o = i.rows(t),
            s = o.settings()[0],
            a = s.aoData[o[0][0]];
          return o.remove(), e && e.call(this, s, a), (n === r || n) && i.draw(), a
        }, this.fnDestroy = function (t) {
          this.api(!0).destroy(t)
        }, this.fnDraw = function (t) {
          this.api(!0).draw(t)
        }, this.fnFilter = function (t, e, n, i, o, s) {
          var a = this.api(!0);
          null === e || e === r ? a.search(t, n, i, s) : a.column(e).search(t, n, i, s), a.draw()
        }, this.fnGetData = function (t, e) {
          var n = this.api(!0);
          if (t !== r) {
            var i = t.nodeName ? t.nodeName.toLowerCase() : "";
            return e !== r || "td" == i || "th" == i ? n.cell(t, e).data() : n.row(t).data() || null
          }
          return n.data().toArray()
        }, this.fnGetNodes = function (t) {
          var e = this.api(!0);
          return t !== r ? e.row(t).node() : e.rows().nodes().flatten().toArray()
        }, this.fnGetPosition = function (t) {
          var e = this.api(!0),
            n = t.nodeName.toUpperCase();
          if ("TR" == n) return e.row(t).index();
          if ("TD" == n || "TH" == n) {
            var r = e.cell(t).index();
            return [r.row, r.columnVisible, r.column]
          }
          return null
        }, this.fnIsOpen = function (t) {
          return this.api(!0).row(t).child.isShown()
        }, this.fnOpen = function (t, e, n) {
          return this.api(!0).row(t).child(e, n).show().child()[0]
        }, this.fnPageChange = function (t, e) {
          var n = this.api(!0).page(t);
          (e === r || e) && n.draw(!1)
        }, this.fnSetColumnVis = function (t, e, n) {
          var i = this.api(!0).column(t).visible(e);
          (n === r || n) && i.columns.adjust().draw()
        }, this.fnSettings = function () {
          return oe(this[i.iApiIndex])
        }, this.fnSort = function (t) {
          this.api(!0).order(t).draw()
        }, this.fnSortListener = function (t, e, n) {
          this.api(!0).order.listener(t, e, n)
        }, this.fnUpdate = function (t, e, n, i, o) {
          var s = this.api(!0);
          return n === r || null === n ? s.row(e).data(t) : s.cell(e, n).data(t), (o === r || o) && s.columns.adjust(), (i === r || i) && s.draw(), 0
        }, this.fnVersionCheck = i.fnVersionCheck;
        var n = this,
          s = e === r,
          a = this.length;
        for (var u in s && (e = {}), this.oApi = this.internal = i.internal, l.ext.internal) u && (this[u] = ke(u));
        return this.each(function () {
          var i, o = a > 1 ? le({}, e, !0) : e,
            u = 0,
            c = this.getAttribute("id"),
            d = !1,
            h = l.defaults,
            f = t(this);
          if ("table" == this.nodeName.toLowerCase()) {
            R(h), A(h.column), E(h, h, !0), E(h.column, h.column, !0), E(h, t.extend(o, f.data()));
            var p = l.settings;
            for (u = 0, i = p.length; u < i; u++) {
              var g = p[u];
              if (g.nTable == this || g.nTHead.parentNode == this || g.nTFoot && g.nTFoot.parentNode == this) {
                var m = o.bRetrieve !== r ? o.bRetrieve : h.bRetrieve,
                  v = o.bDestroy !== r ? o.bDestroy : h.bDestroy;
                if (s || m) return g.oInstance;
                if (v) {
                  g.oInstance.fnDestroy();
                  break
                }
                return void se(g, 0, "Cannot reinitialise DataTable", 3)
              }
              if (g.sTableId == this.id) {
                p.splice(u, 1);
                break
              }
            }
            null !== c && "" !== c || (c = "DataTables_Table_" + l.ext._unique++, this.id = c);
            var y = t.extend(!0, {}, l.models.oSettings, {
              sDestroyWidth: f[0].style.width,
              sInstance: c,
              sTableId: c
            });
            y.nTable = this, y.oApi = n.internal, y.oInit = o, p.push(y), y.oInstance = 1 === n.length ? n : f.dataTable(), R(o), o.oLanguage && M(o.oLanguage), o.aLengthMenu && !o.iDisplayLength && (o.iDisplayLength = t.isArray(o.aLengthMenu[0]) ? o.aLengthMenu[0][0] : o.aLengthMenu[0]), o = le(t.extend(!0, {}, h), o), ae(y.oFeatures, o, ["bPaginate", "bLengthChange", "bFilter", "bSort", "bSortMulti", "bInfo", "bProcessing", "bAutoWidth", "bSortClasses", "bServerSide", "bDeferRender"]), ae(y, o, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", "rowId", ["iCookieDuration", "iStateDuration"],
              ["oSearch", "oPreviousSearch"],
              ["aoSearchCols", "aoPreSearchCols"],
              ["iDisplayLength", "_iDisplayLength"]
            ]), ae(y.oScroll, o, [
              ["sScrollX", "sX"],
              ["sScrollXInner", "sXInner"],
              ["sScrollY", "sY"],
              ["bScrollCollapse", "bCollapse"]
            ]), ae(y.oLanguage, o, "fnInfoCallback"), ce(y, "aoDrawCallback", o.fnDrawCallback, "user"), ce(y, "aoServerParams", o.fnServerParams, "user"), ce(y, "aoStateSaveParams", o.fnStateSaveParams, "user"), ce(y, "aoStateLoadParams", o.fnStateLoadParams, "user"), ce(y, "aoStateLoaded", o.fnStateLoaded, "user"), ce(y, "aoRowCallback", o.fnRowCallback, "user"), ce(y, "aoRowCreatedCallback", o.fnCreatedRow, "user"), ce(y, "aoHeaderCallback", o.fnHeaderCallback, "user"), ce(y, "aoFooterCallback", o.fnFooterCallback, "user"), ce(y, "aoInitComplete", o.fnInitComplete, "user"), ce(y, "aoPreDrawCallback", o.fnPreDrawCallback, "user"), y.rowIdFn = Q(o.rowId), P(y);
            var b = y.oClasses;
            if (t.extend(b, l.ext.classes, o.oClasses), f.addClass(b.sTable), y.iInitDisplayStart === r && (y.iInitDisplayStart = o.iDisplayStart, y._iDisplayStart = o.iDisplayStart), null !== o.iDeferLoading) {
              y.bDeferLoading = !0;
              var w = t.isArray(o.iDeferLoading);
              y._iRecordsDisplay = w ? o.iDeferLoading[0] : o.iDeferLoading, y._iRecordsTotal = w ? o.iDeferLoading[1] : o.iDeferLoading
            }
            var _ = y.oLanguage;
            t.extend(!0, _, o.oLanguage), _.sUrl && (t.ajax({
              dataType: "json",
              url: _.sUrl,
              success: function (e) {
                M(e), E(h.oLanguage, e), t.extend(!0, _, e), Pt(y)
              },
              error: function () {
                Pt(y)
              }
            }), d = !0), null === o.asStripeClasses && (y.asStripeClasses = [b.sStripeOdd, b.sStripeEven]);
            var S = y.asStripeClasses,
              D = f.children("tbody").find("tr").eq(0); - 1 !== t.inArray(!0, t.map(S, function (t, e) {
              return D.hasClass(t)
            })) && (t("tbody tr", this).removeClass(S.join(" ")), y.asDestroyStripes = S.slice());
            var x, C = [],
              T = this.getElementsByTagName("thead");
            if (0 !== T.length && (ct(y.aoHeader, T[0]), C = dt(y)), null === o.aoColumns)
              for (x = [], u = 0, i = C.length; u < i; u++) x.push(null);
            else x = o.aoColumns;
            for (u = 0, i = x.length; u < i; u++) k(y, C ? C[u] : null);
            if (W(y, o.aoColumnDefs, x, function (t, e) {
                H(y, t, e)
              }), D.length) {
              var I = function (t, e) {
                return null !== t.getAttribute("data-" + e) ? e : null
              };
              t(D[0]).children("th, td").each(function (t, e) {
                var n = y.aoColumns[t];
                if (n.mData === t) {
                  var i = I(e, "sort") || I(e, "order"),
                    o = I(e, "filter") || I(e, "search");
                  null === i && null === o || (n.mData = {
                    _: t + ".display",
                    sort: null !== i ? t + ".@data-" + i : r,
                    type: null !== i ? t + ".@data-" + i : r,
                    filter: null !== o ? t + ".@data-" + o : r
                  }, H(y, t))
                }
              })
            }
            var O = y.oFeatures,
              N = function () {
                if (o.aaSorting === r) {
                  var e = y.aaSorting;
                  for (u = 0, i = e.length; u < i; u++) e[u][1] = y.aoColumns[u].asSorting[0]
                }
                ee(y), O.bSort && ce(y, "aoDrawCallback", function () {
                  if (y.bSorted) {
                    var e = Qt(y),
                      n = {};
                    t.each(e, function (t, e) {
                      n[e.src] = e.dir
                    }), de(y, null, "order", [y, e, n]), Kt(y)
                  }
                }), ce(y, "aoDrawCallback", function () {
                  (y.bSorted || "ssp" === pe(y) || O.bDeferRender) && ee(y)
                }, "sc");
                var n = f.children("caption").each(function () {
                    this._captionSide = t(this).css("caption-side")
                  }),
                  s = f.children("thead");
                0 === s.length && (s = t("<thead/>").appendTo(f)), y.nTHead = s[0];
                var a = f.children("tbody");
                0 === a.length && (a = t("<tbody/>").appendTo(f)), y.nTBody = a[0];
                var l = f.children("tfoot");
                if (0 === l.length && n.length > 0 && ("" !== y.oScroll.sX || "" !== y.oScroll.sY) && (l = t("<tfoot/>").appendTo(f)), 0 === l.length || 0 === l.children().length ? f.addClass(b.sNoFooter) : l.length > 0 && (y.nTFoot = l[0], ct(y.aoFooter, y.nTFoot)), o.aaData)
                  for (u = 0; u < o.aaData.length; u++) Y(y, o.aaData[u]);
                else(y.bDeferLoading || "dom" == pe(y)) && U(y, t(y.nTBody).children("tr"));
                y.aiDisplay = y.aiDisplayMaster.slice(), y.bInitialised = !0, !1 === d && Pt(y)
              };
            o.bStateSave ? (O.bStateSave = !0, ce(y, "aoDrawCallback", re, "state_save"), ie(y, o, N)) : N()
          } else se(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2)
        }), n = null, this
      },
      u = {},
      c = /[\r\n]/g,
      d = /<.*?>/g,
      h = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,
      f = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^", "-"].join("|\\") + ")", "g"),
      p = /[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi,
      g = function (t) {
        return !t || !0 === t || "-" === t
      },
      m = function (t) {
        var e = parseInt(t, 10);
        return !isNaN(e) && isFinite(t) ? e : null
      },
      v = function (t, e) {
        return u[e] || (u[e] = new RegExp(Dt(e), "g")), "string" == typeof t && "." !== e ? t.replace(/\./g, "").replace(u[e], ".") : t
      },
      y = function (t, e, n) {
        var r = "string" == typeof t;
        return !!g(t) || (e && r && (t = v(t, e)), n && r && (t = t.replace(p, "")), !isNaN(parseFloat(t)) && isFinite(t))
      },
      b = function (t, e, n) {
        return !!g(t) || ((g(r = t) || "string" == typeof r) && !!y(x(t), e, n) || null);
        var r
      },
      w = function (t, e, n) {
        var i = [],
          o = 0,
          s = t.length;
        if (n !== r)
          for (; o < s; o++) t[o] && t[o][e] && i.push(t[o][e][n]);
        else
          for (; o < s; o++) t[o] && i.push(t[o][e]);
        return i
      },
      _ = function (t, e, n, i) {
        var o = [],
          s = 0,
          a = e.length;
        if (i !== r)
          for (; s < a; s++) t[e[s]][n] && o.push(t[e[s]][n][i]);
        else
          for (; s < a; s++) o.push(t[e[s]][n]);
        return o
      },
      S = function (t, e) {
        var n, i = [];
        e === r ? (e = 0, n = t) : (n = e, e = t);
        for (var o = e; o < n; o++) i.push(o);
        return i
      },
      D = function (t) {
        for (var e = [], n = 0, r = t.length; n < r; n++) t[n] && e.push(t[n]);
        return e
      },
      x = function (t) {
        return t.replace(d, "")
      },
      C = function (t) {
        if (function (t) {
            if (t.length < 2) return !0;
            for (var e = t.slice().sort(), n = e[0], r = 1, i = e.length; r < i; r++) {
              if (e[r] === n) return !1;
              n = e[r]
            }
            return !0
          }(t)) return t.slice();
        var e, n, r, i = [],
          o = t.length,
          s = 0;
        t: for (n = 0; n < o; n++) {
          for (e = t[n], r = 0; r < s; r++)
            if (i[r] === e) continue t;
          i.push(e), s++
        }
        return i
      };

    function T(e) {
      var n, r, i = {};
      t.each(e, function (t, o) {
        (n = t.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== "a aa ai ao as b fn i m o s ".indexOf(n[1] + " ") && (r = t.replace(n[0], n[2].toLowerCase()), i[r] = t, "o" === n[1] && T(e[t]))
      }), e._hungarianMap = i
    }

    function E(e, n, i) {
      var o;
      e._hungarianMap || T(e), t.each(n, function (s, a) {
        (o = e._hungarianMap[s]) === r || !i && n[o] !== r || ("o" === o.charAt(0) ? (n[o] || (n[o] = {}), t.extend(!0, n[o], n[s]), E(e[o], n[o], i)) : n[o] = n[s])
      })
    }

    function M(t) {
      var e = l.defaults.oLanguage,
        n = t.sZeroRecords;
      !t.sEmptyTable && n && "No data available in table" === e.sEmptyTable && ae(t, t, "sZeroRecords", "sEmptyTable"), !t.sLoadingRecords && n && "Loading..." === e.sLoadingRecords && ae(t, t, "sZeroRecords", "sLoadingRecords"), t.sInfoThousands && (t.sThousands = t.sInfoThousands);
      var r = t.sDecimal;
      r && Pe(r)
    }
    l.util = {
      throttle: function (t, e) {
        var n, i, o = e !== r ? e : 200;
        return function () {
          var e = this,
            s = +new Date,
            a = arguments;
          n && s < n + o ? (clearTimeout(i), i = setTimeout(function () {
            n = r, t.apply(e, a)
          }, o)) : (n = s, t.apply(e, a))
        }
      },
      escapeRegex: function (t) {
        return t.replace(f, "\\$1")
      }
    };
    var I = function (t, e, n) {
      t[e] !== r && (t[n] = t[e])
    };

    function R(t) {
      I(t, "ordering", "bSort"), I(t, "orderMulti", "bSortMulti"), I(t, "orderClasses", "bSortClasses"), I(t, "orderCellsTop", "bSortCellsTop"), I(t, "order", "aaSorting"), I(t, "orderFixed", "aaSortingFixed"), I(t, "paging", "bPaginate"), I(t, "pagingType", "sPaginationType"), I(t, "pageLength", "iDisplayLength"), I(t, "searching", "bFilter"), "boolean" == typeof t.sScrollX && (t.sScrollX = t.sScrollX ? "100%" : ""), "boolean" == typeof t.scrollX && (t.scrollX = t.scrollX ? "100%" : "");
      var e = t.aoSearchCols;
      if (e)
        for (var n = 0, r = e.length; n < r; n++) e[n] && E(l.models.oSearch, e[n])
    }

    function A(e) {
      I(e, "orderable", "bSortable"), I(e, "orderData", "aDataSort"), I(e, "orderSequence", "asSorting"), I(e, "orderDataType", "sortDataType");
      var n = e.aDataSort;
      "number" != typeof n || t.isArray(n) || (e.aDataSort = [n])
    }

    function P(n) {
      if (!l.__browser) {
        var r = {};
        l.__browser = r;
        var i = t("<div/>").css({
            position: "fixed",
            top: 0,
            left: -1 * t(e).scrollLeft(),
            height: 1,
            width: 1,
            overflow: "hidden"
          }).append(t("<div/>").css({
            position: "absolute",
            top: 1,
            left: 1,
            width: 100,
            overflow: "scroll"
          }).append(t("<div/>").css({
            width: "100%",
            height: 10
          }))).appendTo("body"),
          o = i.children(),
          s = o.children();
        r.barWidth = o[0].offsetWidth - o[0].clientWidth, r.bScrollOversize = 100 === s[0].offsetWidth && 100 !== o[0].clientWidth, r.bScrollbarLeft = 1 !== Math.round(s.offset().left), r.bBounding = !!i[0].getBoundingClientRect().width, i.remove()
      }
      t.extend(n.oBrowser, l.__browser), n.oScroll.iBarWidth = l.__browser.barWidth
    }

    function O(t, e, n, i, o, s) {
      var a, l = i,
        u = !1;
      for (n !== r && (a = n, u = !0); l !== o;) t.hasOwnProperty(l) && (a = u ? e(a, t[l], l, t) : t[l], u = !0, l += s);
      return a
    }

    function k(e, r) {
      var i = l.defaults.column,
        o = e.aoColumns.length,
        s = t.extend({}, l.models.oColumn, i, {
          nTh: r || n.createElement("th"),
          sTitle: i.sTitle ? i.sTitle : r ? r.innerHTML : "",
          aDataSort: i.aDataSort ? i.aDataSort : [o],
          mData: i.mData ? i.mData : o,
          idx: o
        });
      e.aoColumns.push(s);
      var a = e.aoPreSearchCols;
      a[o] = t.extend({}, l.models.oSearch, a[o]), H(e, o, t(r).data())
    }

    function H(e, n, i) {
      var o = e.aoColumns[n],
        s = e.oClasses,
        a = t(o.nTh);
      if (!o.sWidthOrig) {
        o.sWidthOrig = a.attr("width") || null;
        var u = (a.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
        u && (o.sWidthOrig = u[1])
      }
      i !== r && null !== i && (A(i), E(l.defaults.column, i), i.mDataProp === r || i.mData || (i.mData = i.mDataProp), i.sType && (o._sManualType = i.sType), i.className && !i.sClass && (i.sClass = i.className), i.sClass && a.addClass(i.sClass), t.extend(o, i), ae(o, i, "sWidth", "sWidthOrig"), i.iDataSort !== r && (o.aDataSort = [i.iDataSort]), ae(o, i, "aDataSort"));
      var c = o.mData,
        d = Q(c),
        h = o.mRender ? Q(o.mRender) : null,
        f = function (t) {
          return "string" == typeof t && -1 !== t.indexOf("@")
        };
      o._bAttrSrc = t.isPlainObject(c) && (f(c.sort) || f(c.type) || f(c.filter)), o._setter = null, o.fnGetData = function (t, e, n) {
        var i = d(t, e, r, n);
        return h && e ? h(i, e, t, n) : i
      }, o.fnSetData = function (t, e, n) {
        return Z(c)(t, e, n)
      }, "number" != typeof c && (e._rowReadObject = !0), e.oFeatures.bSort || (o.bSortable = !1, a.addClass(s.sSortableNone));
      var p = -1 !== t.inArray("asc", o.asSorting),
        g = -1 !== t.inArray("desc", o.asSorting);
      o.bSortable && (p || g) ? p && !g ? (o.sSortingClass = s.sSortableAsc, o.sSortingClassJUI = s.sSortJUIAscAllowed) : !p && g ? (o.sSortingClass = s.sSortableDesc, o.sSortingClassJUI = s.sSortJUIDescAllowed) : (o.sSortingClass = s.sSortable, o.sSortingClassJUI = s.sSortJUI) : (o.sSortingClass = s.sSortableNone, o.sSortingClassJUI = "")
    }

    function N(t) {
      if (!1 !== t.oFeatures.bAutoWidth) {
        var e = t.aoColumns;
        Ut(t);
        for (var n = 0, r = e.length; n < r; n++) e[n].nTh.style.width = e[n].sWidth
      }
      var i = t.oScroll;
      "" === i.sY && "" === i.sX || zt(t), de(t, null, "column-sizing", [t])
    }

    function L(t, e) {
      var n = B(t, "bVisible");
      return "number" == typeof n[e] ? n[e] : null
    }

    function F(e, n) {
      var r = B(e, "bVisible"),
        i = t.inArray(n, r);
      return -1 !== i ? i : null
    }

    function j(e) {
      var n = 0;
      return t.each(e.aoColumns, function (e, r) {
        r.bVisible && "none" !== t(r.nTh).css("display") && n++
      }), n
    }

    function B(e, n) {
      var r = [];
      return t.map(e.aoColumns, function (t, e) {
        t[n] && r.push(e)
      }), r
    }

    function z(t) {
      var e, n, i, o, s, a, u, c, d, h = t.aoColumns,
        f = t.aoData,
        p = l.ext.type.detect;
      for (e = 0, n = h.length; e < n; e++)
        if (d = [], !(u = h[e]).sType && u._sManualType) u.sType = u._sManualType;
        else if (!u.sType) {
        for (i = 0, o = p.length; i < o; i++) {
          for (s = 0, a = f.length; s < a && (d[s] === r && (d[s] = V(t, s, e, "type")), (c = p[i](d[s], t)) || i === p.length - 1) && "html" !== c; s++);
          if (c) {
            u.sType = c;
            break
          }
        }
        u.sType || (u.sType = "string")
      }
    }

    function W(e, n, i, o) {
      var s, a, l, u, c, d, h, f = e.aoColumns;
      if (n)
        for (s = n.length - 1; s >= 0; s--) {
          var p = (h = n[s]).targets !== r ? h.targets : h.aTargets;
          for (t.isArray(p) || (p = [p]), l = 0, u = p.length; l < u; l++)
            if ("number" == typeof p[l] && p[l] >= 0) {
              for (; f.length <= p[l];) k(e);
              o(p[l], h)
            } else if ("number" == typeof p[l] && p[l] < 0) o(f.length + p[l], h);
          else if ("string" == typeof p[l])
            for (c = 0, d = f.length; c < d; c++)("_all" == p[l] || t(f[c].nTh).hasClass(p[l])) && o(c, h)
        }
      if (i)
        for (s = 0, a = i.length; s < a; s++) o(s, i[s])
    }

    function Y(e, n, i, o) {
      var s = e.aoData.length,
        a = t.extend(!0, {}, l.models.oRow, {
          src: i ? "dom" : "data",
          idx: s
        });
      a._aData = n, e.aoData.push(a);
      for (var u = e.aoColumns, c = 0, d = u.length; c < d; c++) u[c].sType = null;
      e.aiDisplayMaster.push(s);
      var h = e.rowIdFn(n);
      return h !== r && (e.aIds[h] = a), !i && e.oFeatures.bDeferRender || rt(e, s, i, o), s
    }

    function U(e, n) {
      var r;
      return n instanceof t || (n = t(n)), n.map(function (t, n) {
        return r = nt(e, n), Y(e, r.data, n, r.cells)
      })
    }

    function V(t, e, n, i) {
      var o = t.iDraw,
        s = t.aoColumns[n],
        a = t.aoData[e]._aData,
        l = s.sDefaultContent,
        u = s.fnGetData(a, i, {
          settings: t,
          row: e,
          col: n
        });
      if (u === r) return t.iDrawError != o && null === l && (se(t, 0, "Requested unknown parameter " + ("function" == typeof s.mData ? "{function}" : "'" + s.mData + "'") + " for row " + e + ", column " + n, 4), t.iDrawError = o), l;
      if (u !== a && null !== u || null === l || i === r) {
        if ("function" == typeof u) return u.call(a)
      } else u = l;
      return null === u && "display" == i ? "" : u
    }

    function G(t, e, n, r) {
      var i = t.aoColumns[n],
        o = t.aoData[e]._aData;
      i.fnSetData(o, r, {
        settings: t,
        row: e,
        col: n
      })
    }
    var q = /\[.*?\]$/,
      X = /\(\)$/;

    function $(e) {
      return t.map(e.match(/(\\.|[^\.])+/g) || [""], function (t) {
        return t.replace(/\\\./g, ".")
      })
    }

    function Q(e) {
      if (t.isPlainObject(e)) {
        var n = {};
        return t.each(e, function (t, e) {
            e && (n[t] = Q(e))
          }),
          function (t, e, i, o) {
            var s = n[e] || n._;
            return s !== r ? s(t, e, i, o) : t
          }
      }
      if (null === e) return function (t) {
        return t
      };
      if ("function" == typeof e) return function (t, n, r, i) {
        return e(t, n, r, i)
      };
      if ("string" != typeof e || -1 === e.indexOf(".") && -1 === e.indexOf("[") && -1 === e.indexOf("(")) return function (t, n) {
        return t[e]
      };
      var i = function (e, n, o) {
        var s, a, l, u;
        if ("" !== o)
          for (var c = $(o), d = 0, h = c.length; d < h; d++) {
            if (s = c[d].match(q), a = c[d].match(X), s) {
              if (c[d] = c[d].replace(q, ""), "" !== c[d] && (e = e[c[d]]), l = [], c.splice(0, d + 1), u = c.join("."), t.isArray(e))
                for (var f = 0, p = e.length; f < p; f++) l.push(i(e[f], n, u));
              var g = s[0].substring(1, s[0].length - 1);
              e = "" === g ? l : l.join(g);
              break
            }
            if (a) c[d] = c[d].replace(X, ""), e = e[c[d]]();
            else {
              if (null === e || e[c[d]] === r) return r;
              e = e[c[d]]
            }
          }
        return e
      };
      return function (t, n) {
        return i(t, n, e)
      }
    }

    function Z(e) {
      if (t.isPlainObject(e)) return Z(e._);
      if (null === e) return function () {};
      if ("function" == typeof e) return function (t, n, r) {
        e(t, "set", n, r)
      };
      if ("string" != typeof e || -1 === e.indexOf(".") && -1 === e.indexOf("[") && -1 === e.indexOf("(")) return function (t, n) {
        t[e] = n
      };
      var n = function (e, i, o) {
        for (var s, a, l, u, c, d = $(o), h = d[d.length - 1], f = 0, p = d.length - 1; f < p; f++) {
          if (a = d[f].match(q), l = d[f].match(X), a) {
            if (d[f] = d[f].replace(q, ""), e[d[f]] = [], (s = d.slice()).splice(0, f + 1), c = s.join("."), t.isArray(i))
              for (var g = 0, m = i.length; g < m; g++) n(u = {}, i[g], c), e[d[f]].push(u);
            else e[d[f]] = i;
            return
          }
          l && (d[f] = d[f].replace(X, ""), e = e[d[f]](i)), null !== e[d[f]] && e[d[f]] !== r || (e[d[f]] = {}), e = e[d[f]]
        }
        h.match(X) ? e = e[h.replace(X, "")](i) : e[h.replace(q, "")] = i
      };
      return function (t, r) {
        return n(t, r, e)
      }
    }

    function K(t) {
      return w(t.aoData, "_aData")
    }

    function J(t) {
      t.aoData.length = 0, t.aiDisplayMaster.length = 0, t.aiDisplay.length = 0, t.aIds = {}
    }

    function tt(t, e, n) {
      for (var i = -1, o = 0, s = t.length; o < s; o++) t[o] == e ? i = o : t[o] > e && t[o]--; - 1 != i && n === r && t.splice(i, 1)
    }

    function et(t, e, n, i) {
      var o, s, a = t.aoData[e],
        l = function (n, r) {
          for (; n.childNodes.length;) n.removeChild(n.firstChild);
          n.innerHTML = V(t, e, r, "display")
        };
      if ("dom" !== n && (n && "auto" !== n || "dom" !== a.src)) {
        var u = a.anCells;
        if (u)
          if (i !== r) l(u[i], i);
          else
            for (o = 0, s = u.length; o < s; o++) l(u[o], o)
      } else a._aData = nt(t, a, i, i === r ? r : a._aData).data;
      a._aSortData = null, a._aFilterData = null;
      var c = t.aoColumns;
      if (i !== r) c[i].sType = null;
      else {
        for (o = 0, s = c.length; o < s; o++) c[o].sType = null;
        it(t, a)
      }
    }

    function nt(e, n, i, o) {
      var s, a, l, u = [],
        c = n.firstChild,
        d = 0,
        h = e.aoColumns,
        f = e._rowReadObject;
      o = o !== r ? o : f ? {} : [];
      var p = function (t, e) {
          if ("string" == typeof t) {
            var n = t.indexOf("@");
            if (-1 !== n) {
              var r = t.substring(n + 1);
              Z(t)(o, e.getAttribute(r))
            }
          }
        },
        g = function (e) {
          i !== r && i !== d || (a = h[d], l = t.trim(e.innerHTML), a && a._bAttrSrc ? (Z(a.mData._)(o, l), p(a.mData.sort, e), p(a.mData.type, e), p(a.mData.filter, e)) : f ? (a._setter || (a._setter = Z(a.mData)), a._setter(o, l)) : o[d] = l);
          d++
        };
      if (c)
        for (; c;) "TD" != (s = c.nodeName.toUpperCase()) && "TH" != s || (g(c), u.push(c)), c = c.nextSibling;
      else
        for (var m = 0, v = (u = n.anCells).length; m < v; m++) g(u[m]);
      var y = n.firstChild ? n : n.nTr;
      if (y) {
        var b = y.getAttribute("id");
        b && Z(e.rowId)(o, b)
      }
      return {
        data: o,
        cells: u
      }
    }

    function rt(e, r, i, o) {
      var s, a, l, u, c, d = e.aoData[r],
        h = d._aData,
        f = [];
      if (null === d.nTr) {
        for (s = i || n.createElement("tr"), d.nTr = s, d.anCells = f, s._DT_RowIndex = r, it(e, d), u = 0, c = e.aoColumns.length; u < c; u++) l = e.aoColumns[u], (a = i ? o[u] : n.createElement(l.sCellType))._DT_CellIndex = {
          row: r,
          column: u
        }, f.push(a), i && !l.mRender && l.mData === u || t.isPlainObject(l.mData) && l.mData._ === u + ".display" || (a.innerHTML = V(e, r, u, "display")), l.sClass && (a.className += " " + l.sClass), l.bVisible && !i ? s.appendChild(a) : !l.bVisible && i && a.parentNode.removeChild(a), l.fnCreatedCell && l.fnCreatedCell.call(e.oInstance, a, V(e, r, u), h, r, u);
        de(e, "aoRowCreatedCallback", null, [s, h, r])
      }
      d.nTr.setAttribute("role", "row")
    }

    function it(e, n) {
      var r = n.nTr,
        i = n._aData;
      if (r) {
        var o = e.rowIdFn(i);
        if (o && (r.id = o), i.DT_RowClass) {
          var s = i.DT_RowClass.split(" ");
          n.__rowc = n.__rowc ? C(n.__rowc.concat(s)) : s, t(r).removeClass(n.__rowc.join(" ")).addClass(i.DT_RowClass)
        }
        i.DT_RowAttr && t(r).attr(i.DT_RowAttr), i.DT_RowData && t(r).data(i.DT_RowData)
      }
    }

    function ot(e) {
      var n, r, i, o, s, a = e.nTHead,
        l = e.nTFoot,
        u = 0 === t("th, td", a).length,
        c = e.oClasses,
        d = e.aoColumns;
      for (u && (o = t("<tr/>").appendTo(a)), n = 0, r = d.length; n < r; n++) s = d[n], i = t(s.nTh).addClass(s.sClass), u && i.appendTo(o), e.oFeatures.bSort && (i.addClass(s.sSortingClass), !1 !== s.bSortable && (i.attr("tabindex", e.iTabIndex).attr("aria-controls", e.sTableId), te(e, s.nTh, n))), s.sTitle != i[0].innerHTML && i.html(s.sTitle), fe(e, "header")(e, i, s, c);
      if (u && ct(e.aoHeader, a), t(a).find(">tr").attr("role", "row"), t(a).find(">tr>th, >tr>td").addClass(c.sHeaderTH), t(l).find(">tr>th, >tr>td").addClass(c.sFooterTH), null !== l) {
        var h = e.aoFooter[0];
        for (n = 0, r = h.length; n < r; n++)(s = d[n]).nTf = h[n].cell, s.sClass && t(s.nTf).addClass(s.sClass)
      }
    }

    function st(e, n, i) {
      var o, s, a, l, u, c, d, h, f, p = [],
        g = [],
        m = e.aoColumns.length;
      if (n) {
        for (i === r && (i = !1), o = 0, s = n.length; o < s; o++) {
          for (p[o] = n[o].slice(), p[o].nTr = n[o].nTr, a = m - 1; a >= 0; a--) e.aoColumns[a].bVisible || i || p[o].splice(a, 1);
          g.push([])
        }
        for (o = 0, s = p.length; o < s; o++) {
          if (d = p[o].nTr)
            for (; c = d.firstChild;) d.removeChild(c);
          for (a = 0, l = p[o].length; a < l; a++)
            if (h = 1, f = 1, g[o][a] === r) {
              for (d.appendChild(p[o][a].cell), g[o][a] = 1; p[o + h] !== r && p[o][a].cell == p[o + h][a].cell;) g[o + h][a] = 1, h++;
              for (; p[o][a + f] !== r && p[o][a].cell == p[o][a + f].cell;) {
                for (u = 0; u < h; u++) g[o + u][a + f] = 1;
                f++
              }
              t(p[o][a].cell).attr("rowspan", h).attr("colspan", f)
            }
        }
      }
    }

    function at(e) {
      var n = de(e, "aoPreDrawCallback", "preDraw", [e]);
      if (-1 === t.inArray(!1, n)) {
        var i = [],
          o = 0,
          s = e.asStripeClasses,
          a = s.length,
          l = (e.aoOpenRows.length, e.oLanguage),
          u = e.iInitDisplayStart,
          c = "ssp" == pe(e),
          d = e.aiDisplay;
        e.bDrawing = !0, u !== r && -1 !== u && (e._iDisplayStart = c ? u : u >= e.fnRecordsDisplay() ? 0 : u, e.iInitDisplayStart = -1);
        var h = e._iDisplayStart,
          f = e.fnDisplayEnd();
        if (e.bDeferLoading) e.bDeferLoading = !1, e.iDraw++, jt(e, !1);
        else if (c) {
          if (!e.bDestroying && !ft(e)) return
        } else e.iDraw++;
        if (0 !== d.length)
          for (var p = c ? 0 : h, g = c ? e.aoData.length : f, m = p; m < g; m++) {
            var v = d[m],
              y = e.aoData[v];
            null === y.nTr && rt(e, v);
            var b = y.nTr;
            if (0 !== a) {
              var w = s[o % a];
              y._sRowStripe != w && (t(b).removeClass(y._sRowStripe).addClass(w), y._sRowStripe = w)
            }
            de(e, "aoRowCallback", null, [b, y._aData, o, m]), i.push(b), o++
          } else {
            var _ = l.sZeroRecords;
            1 == e.iDraw && "ajax" == pe(e) ? _ = l.sLoadingRecords : l.sEmptyTable && 0 === e.fnRecordsTotal() && (_ = l.sEmptyTable), i[0] = t("<tr/>", {
              class: a ? s[0] : ""
            }).append(t("<td />", {
              valign: "top",
              colSpan: j(e),
              class: e.oClasses.sRowEmpty
            }).html(_))[0]
          }
        de(e, "aoHeaderCallback", "header", [t(e.nTHead).children("tr")[0], K(e), h, f, d]), de(e, "aoFooterCallback", "footer", [t(e.nTFoot).children("tr")[0], K(e), h, f, d]);
        var S = t(e.nTBody);
        S.children().detach(), S.append(t(i)), de(e, "aoDrawCallback", "draw", [e]), e.bSorted = !1, e.bFiltered = !1, e.bDrawing = !1
      } else jt(e, !1)
    }

    function lt(t, e) {
      var n = t.oFeatures,
        r = n.bSort,
        i = n.bFilter;
      r && Zt(t), i ? yt(t, t.oPreviousSearch) : t.aiDisplay = t.aiDisplayMaster.slice(), !0 !== e && (t._iDisplayStart = 0), t._drawHold = e, at(t), t._drawHold = !1
    }

    function ut(e) {
      var n = e.oClasses,
        r = t(e.nTable),
        i = t("<div/>").insertBefore(r),
        o = e.oFeatures,
        s = t("<div/>", {
          id: e.sTableId + "_wrapper",
          class: n.sWrapper + (e.nTFoot ? "" : " " + n.sNoFooter)
        });
      e.nHolding = i[0], e.nTableWrapper = s[0], e.nTableReinsertBefore = e.nTable.nextSibling;
      for (var a, u, c, d, h, f, p = e.sDom.split(""), g = 0; g < p.length; g++) {
        if (a = null, "<" == (u = p[g])) {
          if (c = t("<div/>")[0], "'" == (d = p[g + 1]) || '"' == d) {
            for (h = "", f = 2; p[g + f] != d;) h += p[g + f], f++;
            if ("H" == h ? h = n.sJUIHeader : "F" == h && (h = n.sJUIFooter), -1 != h.indexOf(".")) {
              var m = h.split(".");
              c.id = m[0].substr(1, m[0].length - 1), c.className = m[1]
            } else "#" == h.charAt(0) ? c.id = h.substr(1, h.length - 1) : c.className = h;
            g += f
          }
          s.append(c), s = t(c)
        } else if (">" == u) s = s.parent();
        else if ("l" == u && o.bPaginate && o.bLengthChange) a = Ht(e);
        else if ("f" == u && o.bFilter) a = vt(e);
        else if ("r" == u && o.bProcessing) a = Ft(e);
        else if ("t" == u) a = Bt(e);
        else if ("i" == u && o.bInfo) a = It(e);
        else if ("p" == u && o.bPaginate) a = Nt(e);
        else if (0 !== l.ext.feature.length)
          for (var v = l.ext.feature, y = 0, b = v.length; y < b; y++)
            if (u == v[y].cFeature) {
              a = v[y].fnInit(e);
              break
            } if (a) {
          var w = e.aanFeatures;
          w[u] || (w[u] = []), w[u].push(a), s.append(a)
        }
      }
      i.replaceWith(s), e.nHolding = null
    }

    function ct(e, n) {
      var r, i, o, s, a, l, u, c, d, h, f, p = t(n).children("tr"),
        g = function (t, e, n) {
          for (var r = t[e]; r[n];) n++;
          return n
        };
      for (e.splice(0, e.length), o = 0, l = p.length; o < l; o++) e.push([]);
      for (o = 0, l = p.length; o < l; o++)
        for (c = 0, i = (r = p[o]).firstChild; i;) {
          if ("TD" == i.nodeName.toUpperCase() || "TH" == i.nodeName.toUpperCase())
            for (d = 1 * i.getAttribute("colspan"), h = 1 * i.getAttribute("rowspan"), d = d && 0 !== d && 1 !== d ? d : 1, h = h && 0 !== h && 1 !== h ? h : 1, u = g(e, o, c), f = 1 === d, a = 0; a < d; a++)
              for (s = 0; s < h; s++) e[o + s][u + a] = {
                cell: i,
                unique: f
              }, e[o + s].nTr = r;
          i = i.nextSibling
        }
    }

    function dt(t, e, n) {
      var r = [];
      n || (n = t.aoHeader, e && ct(n = [], e));
      for (var i = 0, o = n.length; i < o; i++)
        for (var s = 0, a = n[i].length; s < a; s++) !n[i][s].unique || r[s] && t.bSortCellsTop || (r[s] = n[i][s].cell);
      return r
    }

    function ht(e, n, r) {
      if (de(e, "aoServerParams", "serverParams", [n]), n && t.isArray(n)) {
        var i = {},
          o = /(.*?)\[\]$/;
        t.each(n, function (t, e) {
          var n = e.name.match(o);
          if (n) {
            var r = n[0];
            i[r] || (i[r] = []), i[r].push(e.value)
          } else i[e.name] = e.value
        }), n = i
      }
      var s, a = e.ajax,
        l = e.oInstance,
        u = function (t) {
          de(e, null, "xhr", [e, t, e.jqXHR]), r(t)
        };
      if (t.isPlainObject(a) && a.data) {
        s = a.data;
        var c = t.isFunction(s) ? s(n, e) : s;
        n = t.isFunction(s) && c ? c : t.extend(!0, n, c), delete a.data
      }
      var d = {
        data: n,
        success: function (t) {
          var n = t.error || t.sError;
          n && se(e, 0, n), e.json = t, u(t)
        },
        dataType: "json",
        cache: !1,
        type: e.sServerMethod,
        error: function (n, r, i) {
          var o = de(e, null, "xhr", [e, null, e.jqXHR]); - 1 === t.inArray(!0, o) && ("parsererror" == r ? se(e, 0, "Invalid JSON response", 1) : 4 === n.readyState && se(e, 0, "Ajax error", 7)), jt(e, !1)
        }
      };
      e.oAjaxData = n, de(e, null, "preXhr", [e, n]), e.fnServerData ? e.fnServerData.call(l, e.sAjaxSource, t.map(n, function (t, e) {
        return {
          name: e,
          value: t
        }
      }), u, e) : e.sAjaxSource || "string" == typeof a ? e.jqXHR = t.ajax(t.extend(d, {
        url: a || e.sAjaxSource
      })) : t.isFunction(a) ? e.jqXHR = a.call(l, n, u, e) : (e.jqXHR = t.ajax(t.extend(d, a)), a.data = s)
    }

    function ft(t) {
      return !t.bAjaxDataGet || (t.iDraw++, jt(t, !0), ht(t, pt(t), function (e) {
        gt(t, e)
      }), !1)
    }

    function pt(e) {
      var n, r, i, o, s = e.aoColumns,
        a = s.length,
        u = e.oFeatures,
        c = e.oPreviousSearch,
        d = e.aoPreSearchCols,
        h = [],
        f = Qt(e),
        p = e._iDisplayStart,
        g = !1 !== u.bPaginate ? e._iDisplayLength : -1,
        m = function (t, e) {
          h.push({
            name: t,
            value: e
          })
        };
      m("sEcho", e.iDraw), m("iColumns", a), m("sColumns", w(s, "sName").join(",")), m("iDisplayStart", p), m("iDisplayLength", g);
      var v = {
        draw: e.iDraw,
        columns: [],
        order: [],
        start: p,
        length: g,
        search: {
          value: c.sSearch,
          regex: c.bRegex
        }
      };
      for (n = 0; n < a; n++) i = s[n], o = d[n], r = "function" == typeof i.mData ? "function" : i.mData, v.columns.push({
        data: r,
        name: i.sName,
        searchable: i.bSearchable,
        orderable: i.bSortable,
        search: {
          value: o.sSearch,
          regex: o.bRegex
        }
      }), m("mDataProp_" + n, r), u.bFilter && (m("sSearch_" + n, o.sSearch), m("bRegex_" + n, o.bRegex), m("bSearchable_" + n, i.bSearchable)), u.bSort && m("bSortable_" + n, i.bSortable);
      u.bFilter && (m("sSearch", c.sSearch), m("bRegex", c.bRegex)), u.bSort && (t.each(f, function (t, e) {
        v.order.push({
          column: e.col,
          dir: e.dir
        }), m("iSortCol_" + t, e.col), m("sSortDir_" + t, e.dir)
      }), m("iSortingCols", f.length));
      var y = l.ext.legacy.ajax;
      return null === y ? e.sAjaxSource ? h : v : y ? h : v
    }

    function gt(t, e) {
      var n = function (t, n) {
          return e[t] !== r ? e[t] : e[n]
        },
        i = mt(t, e),
        o = n("sEcho", "draw"),
        s = n("iTotalRecords", "recordsTotal"),
        a = n("iTotalDisplayRecords", "recordsFiltered");
      if (o) {
        if (1 * o < t.iDraw) return;
        t.iDraw = 1 * o
      }
      J(t), t._iRecordsTotal = parseInt(s, 10), t._iRecordsDisplay = parseInt(a, 10);
      for (var l = 0, u = i.length; l < u; l++) Y(t, i[l]);
      t.aiDisplay = t.aiDisplayMaster.slice(), t.bAjaxDataGet = !1, at(t), t._bInitComplete || Ot(t, e), t.bAjaxDataGet = !0, jt(t, !1)
    }

    function mt(e, n) {
      var i = t.isPlainObject(e.ajax) && e.ajax.dataSrc !== r ? e.ajax.dataSrc : e.sAjaxDataProp;
      return "data" === i ? n.aaData || n[i] : "" !== i ? Q(i)(n) : n
    }

    function vt(e) {
      var r = e.oClasses,
        i = e.sTableId,
        o = e.oLanguage,
        s = e.oPreviousSearch,
        a = e.aanFeatures,
        l = '<input type="search" class="' + r.sFilterInput + '"/>',
        u = o.sSearch;
      u = u.match(/_INPUT_/) ? u.replace("_INPUT_", l) : u + l;
      var c = t("<div/>", {
          id: a.f ? null : i + "_filter",
          class: r.sFilter
        }).append(t("<label/>").append(u)),
        d = function () {
          a.f;
          var t = this.value ? this.value : "";
          t != s.sSearch && (yt(e, {
            sSearch: t,
            bRegex: s.bRegex,
            bSmart: s.bSmart,
            bCaseInsensitive: s.bCaseInsensitive
          }), e._iDisplayStart = 0, at(e))
        },
        h = null !== e.searchDelay ? e.searchDelay : "ssp" === pe(e) ? 400 : 0,
        f = t("input", c).val(s.sSearch).attr("placeholder", o.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT", h ? Vt(d, h) : d).on("keypress.DT", function (t) {
          if (13 == t.keyCode) return !1
        }).attr("aria-controls", i);
      return t(e.nTable).on("search.dt.DT", function (t, r) {
        if (e === r) try {
          f[0] !== n.activeElement && f.val(s.sSearch)
        } catch (t) {}
      }), c[0]
    }

    function yt(t, e, n) {
      var i = t.oPreviousSearch,
        o = t.aoPreSearchCols,
        s = function (t) {
          i.sSearch = t.sSearch, i.bRegex = t.bRegex, i.bSmart = t.bSmart, i.bCaseInsensitive = t.bCaseInsensitive
        },
        a = function (t) {
          return t.bEscapeRegex !== r ? !t.bEscapeRegex : t.bRegex
        };
      if (z(t), "ssp" != pe(t)) {
        _t(t, e.sSearch, n, a(e), e.bSmart, e.bCaseInsensitive), s(e);
        for (var l = 0; l < o.length; l++) wt(t, o[l].sSearch, l, a(o[l]), o[l].bSmart, o[l].bCaseInsensitive);
        bt(t)
      } else s(e);
      t.bFiltered = !0, de(t, null, "search", [t])
    }

    function bt(e) {
      for (var n, r, i = l.ext.search, o = e.aiDisplay, s = 0, a = i.length; s < a; s++) {
        for (var u = [], c = 0, d = o.length; c < d; c++) r = o[c], n = e.aoData[r], i[s](e, n._aFilterData, r, n._aData, c) && u.push(r);
        o.length = 0, t.merge(o, u)
      }
    }

    function wt(t, e, n, r, i, o) {
      if ("" !== e) {
        for (var s, a = [], l = t.aiDisplay, u = St(e, r, i, o), c = 0; c < l.length; c++) s = t.aoData[l[c]]._aFilterData[n], u.test(s) && a.push(l[c]);
        t.aiDisplay = a
      }
    }

    function _t(t, e, n, r, i, o) {
      var s, a, u, c = St(e, r, i, o),
        d = t.oPreviousSearch.sSearch,
        h = t.aiDisplayMaster,
        f = [];
      if (0 !== l.ext.search.length && (n = !0), a = Tt(t), e.length <= 0) t.aiDisplay = h.slice();
      else {
        for ((a || n || d.length > e.length || 0 !== e.indexOf(d) || t.bSorted) && (t.aiDisplay = h.slice()), s = t.aiDisplay, u = 0; u < s.length; u++) c.test(t.aoData[s[u]]._sFilterRow) && f.push(s[u]);
        t.aiDisplay = f
      }
    }

    function St(e, n, r, i) {
      (e = n ? e : Dt(e), r) && (e = "^(?=.*?" + t.map(e.match(/"[^"]+"|[^ ]+/g) || [""], function (t) {
        if ('"' === t.charAt(0)) {
          var e = t.match(/^"(.*)"$/);
          t = e ? e[1] : t
        }
        return t.replace('"', "")
      }).join(")(?=.*?") + ").*$");
      return new RegExp(e, i ? "i" : "")
    }
    var Dt = l.util.escapeRegex,
      xt = t("<div>")[0],
      Ct = xt.textContent !== r;

    function Tt(t) {
      var e, n, r, i, o, s, a, u, c = t.aoColumns,
        d = l.ext.type.search,
        h = !1;
      for (n = 0, i = t.aoData.length; n < i; n++)
        if (!(u = t.aoData[n])._aFilterData) {
          for (s = [], r = 0, o = c.length; r < o; r++)(e = c[r]).bSearchable ? (a = V(t, n, r, "filter"), d[e.sType] && (a = d[e.sType](a)), null === a && (a = ""), "string" != typeof a && a.toString && (a = a.toString())) : a = "", a.indexOf && -1 !== a.indexOf("&") && (xt.innerHTML = a, a = Ct ? xt.textContent : xt.innerText), a.replace && (a = a.replace(/[\r\n]/g, "")), s.push(a);
          u._aFilterData = s, u._sFilterRow = s.join("  "), h = !0
        } return h
    }

    function Et(t) {
      return {
        search: t.sSearch,
        smart: t.bSmart,
        regex: t.bRegex,
        caseInsensitive: t.bCaseInsensitive
      }
    }

    function Mt(t) {
      return {
        sSearch: t.search,
        bSmart: t.smart,
        bRegex: t.regex,
        bCaseInsensitive: t.caseInsensitive
      }
    }

    function It(e) {
      var n = e.sTableId,
        r = e.aanFeatures.i,
        i = t("<div/>", {
          class: e.oClasses.sInfo,
          id: r ? null : n + "_info"
        });
      return r || (e.aoDrawCallback.push({
        fn: Rt,
        sName: "information"
      }), i.attr("role", "status").attr("aria-live", "polite"), t(e.nTable).attr("aria-describedby", n + "_info")), i[0]
    }

    function Rt(e) {
      var n = e.aanFeatures.i;
      if (0 !== n.length) {
        var r = e.oLanguage,
          i = e._iDisplayStart + 1,
          o = e.fnDisplayEnd(),
          s = e.fnRecordsTotal(),
          a = e.fnRecordsDisplay(),
          l = a ? r.sInfo : r.sInfoEmpty;
        a !== s && (l += " " + r.sInfoFiltered), l = At(e, l += r.sInfoPostFix);
        var u = r.fnInfoCallback;
        null !== u && (l = u.call(e.oInstance, e, i, o, s, a, l)), t(n).html(l)
      }
    }

    function At(t, e) {
      var n = t.fnFormatNumber,
        r = t._iDisplayStart + 1,
        i = t._iDisplayLength,
        o = t.fnRecordsDisplay(),
        s = -1 === i;
      return e.replace(/_START_/g, n.call(t, r)).replace(/_END_/g, n.call(t, t.fnDisplayEnd())).replace(/_MAX_/g, n.call(t, t.fnRecordsTotal())).replace(/_TOTAL_/g, n.call(t, o)).replace(/_PAGE_/g, n.call(t, s ? 1 : Math.ceil(r / i))).replace(/_PAGES_/g, n.call(t, s ? 1 : Math.ceil(o / i)))
    }

    function Pt(t) {
      var e, n, r, i = t.iInitDisplayStart,
        o = t.aoColumns,
        s = t.oFeatures,
        a = t.bDeferLoading;
      if (t.bInitialised) {
        for (ut(t), ot(t), st(t, t.aoHeader), st(t, t.aoFooter), jt(t, !0), s.bAutoWidth && Ut(t), e = 0, n = o.length; e < n; e++)(r = o[e]).sWidth && (r.nTh.style.width = $t(r.sWidth));
        de(t, null, "preInit", [t]), lt(t);
        var l = pe(t);
        ("ssp" != l || a) && ("ajax" == l ? ht(t, [], function (n) {
          var r = mt(t, n);
          for (e = 0; e < r.length; e++) Y(t, r[e]);
          t.iInitDisplayStart = i, lt(t), jt(t, !1), Ot(t, n)
        }) : (jt(t, !1), Ot(t)))
      } else setTimeout(function () {
        Pt(t)
      }, 200)
    }

    function Ot(t, e) {
      t._bInitComplete = !0, (e || t.oInit.aaData) && N(t), de(t, null, "plugin-init", [t, e]), de(t, "aoInitComplete", "init", [t, e])
    }

    function kt(t, e) {
      var n = parseInt(e, 10);
      t._iDisplayLength = n, he(t), de(t, null, "length", [t, n])
    }

    function Ht(e) {
      for (var n = e.oClasses, r = e.sTableId, i = e.aLengthMenu, o = t.isArray(i[0]), s = o ? i[0] : i, a = o ? i[1] : i, l = t("<select/>", {
          name: r + "_length",
          "aria-controls": r,
          class: n.sLengthSelect
        }), u = 0, c = s.length; u < c; u++) l[0][u] = new Option("number" == typeof a[u] ? e.fnFormatNumber(a[u]) : a[u], s[u]);
      var d = t("<div><label/></div>").addClass(n.sLength);
      return e.aanFeatures.l || (d[0].id = r + "_length"), d.children().append(e.oLanguage.sLengthMenu.replace("_MENU_", l[0].outerHTML)), t("select", d).val(e._iDisplayLength).on("change.DT", function (n) {
        kt(e, t(this).val()), at(e)
      }), t(e.nTable).on("length.dt.DT", function (n, r, i) {
        e === r && t("select", d).val(i)
      }), d[0]
    }

    function Nt(e) {
      var n = e.sPaginationType,
        r = l.ext.pager[n],
        i = "function" == typeof r,
        o = function (t) {
          at(t)
        },
        s = t("<div/>").addClass(e.oClasses.sPaging + n)[0],
        a = e.aanFeatures;
      return i || r.fnInit(e, s, o), a.p || (s.id = e.sTableId + "_paginate", e.aoDrawCallback.push({
        fn: function (t) {
          if (i) {
            var e, n, s = t._iDisplayStart,
              l = t._iDisplayLength,
              u = t.fnRecordsDisplay(),
              c = -1 === l,
              d = c ? 0 : Math.ceil(s / l),
              h = c ? 1 : Math.ceil(u / l),
              f = r(d, h);
            for (e = 0, n = a.p.length; e < n; e++) fe(t, "pageButton")(t, a.p[e], e, f, d, h)
          } else r.fnUpdate(t, o)
        },
        sName: "pagination"
      })), s
    }

    function Lt(t, e, n) {
      var r = t._iDisplayStart,
        i = t._iDisplayLength,
        o = t.fnRecordsDisplay();
      0 === o || -1 === i ? r = 0 : "number" == typeof e ? (r = e * i) > o && (r = 0) : "first" == e ? r = 0 : "previous" == e ? (r = i >= 0 ? r - i : 0) < 0 && (r = 0) : "next" == e ? r + i < o && (r += i) : "last" == e ? r = Math.floor((o - 1) / i) * i : se(t, 0, "Unknown paging action: " + e, 5);
      var s = t._iDisplayStart !== r;
      return t._iDisplayStart = r, s && (de(t, null, "page", [t]), n && at(t)), s
    }

    function Ft(e) {
      return t("<div/>", {
        id: e.aanFeatures.r ? null : e.sTableId + "_processing",
        class: e.oClasses.sProcessing
      }).html(e.oLanguage.sProcessing).insertBefore(e.nTable)[0]
    }

    function jt(e, n) {
      e.oFeatures.bProcessing && t(e.aanFeatures.r).css("display", n ? "block" : "none"), de(e, null, "processing", [e, n])
    }

    function Bt(e) {
      var n = t(e.nTable);
      n.attr("role", "grid");
      var r = e.oScroll;
      if ("" === r.sX && "" === r.sY) return e.nTable;
      var i = r.sX,
        o = r.sY,
        s = e.oClasses,
        a = n.children("caption"),
        l = a.length ? a[0]._captionSide : null,
        u = t(n[0].cloneNode(!1)),
        c = t(n[0].cloneNode(!1)),
        d = n.children("tfoot"),
        h = "<div/>",
        f = function (t) {
          return t ? $t(t) : null
        };
      d.length || (d = null);
      var p = t(h, {
        class: s.sScrollWrapper
      }).append(t(h, {
        class: s.sScrollHead
      }).css({
        overflow: "hidden",
        position: "relative",
        border: 0,
        width: i ? f(i) : "100%"
      }).append(t(h, {
        class: s.sScrollHeadInner
      }).css({
        "box-sizing": "content-box",
        width: r.sXInner || "100%"
      }).append(u.removeAttr("id").css("margin-left", 0).append("top" === l ? a : null).append(n.children("thead"))))).append(t(h, {
        class: s.sScrollBody
      }).css({
        position: "relative",
        overflow: "auto",
        width: f(i)
      }).append(n));
      d && p.append(t(h, {
        class: s.sScrollFoot
      }).css({
        overflow: "hidden",
        border: 0,
        width: i ? f(i) : "100%"
      }).append(t(h, {
        class: s.sScrollFootInner
      }).append(c.removeAttr("id").css("margin-left", 0).append("bottom" === l ? a : null).append(n.children("tfoot")))));
      var g = p.children(),
        m = g[0],
        v = g[1],
        y = d ? g[2] : null;
      return i && t(v).on("scroll.DT", function (t) {
        var e = this.scrollLeft;
        m.scrollLeft = e, d && (y.scrollLeft = e)
      }), t(v).css(o && r.bCollapse ? "max-height" : "height", o), e.nScrollHead = m, e.nScrollBody = v, e.nScrollFoot = y, e.aoDrawCallback.push({
        fn: zt,
        sName: "scrolling"
      }), p[0]
    }

    function zt(e) {
      var n, i, o, s, a, l, u, c, d, h = e.oScroll,
        f = h.sX,
        p = h.sXInner,
        g = h.sY,
        m = h.iBarWidth,
        v = t(e.nScrollHead),
        y = v[0].style,
        b = v.children("div"),
        _ = b[0].style,
        S = b.children("table"),
        D = e.nScrollBody,
        x = t(D),
        C = D.style,
        T = t(e.nScrollFoot).children("div"),
        E = T.children("table"),
        M = t(e.nTHead),
        I = t(e.nTable),
        R = I[0],
        A = R.style,
        P = e.nTFoot ? t(e.nTFoot) : null,
        O = e.oBrowser,
        k = O.bScrollOversize,
        H = w(e.aoColumns, "nTh"),
        F = [],
        j = [],
        B = [],
        z = [],
        W = function (t) {
          var e = t.style;
          e.paddingTop = "0", e.paddingBottom = "0", e.borderTopWidth = "0", e.borderBottomWidth = "0", e.height = 0
        },
        Y = D.scrollHeight > D.clientHeight;
      if (e.scrollBarVis !== Y && e.scrollBarVis !== r) return e.scrollBarVis = Y, void N(e);
      e.scrollBarVis = Y, I.children("thead, tfoot").remove(), P && (l = P.clone().prependTo(I), i = P.find("tr"), s = l.find("tr")), a = M.clone().prependTo(I), n = M.find("tr"), o = a.find("tr"), a.find("th, td").removeAttr("tabindex"), f || (C.width = "100%", v[0].style.width = "100%"), t.each(dt(e, a), function (t, n) {
        u = L(e, t), n.style.width = e.aoColumns[u].sWidth
      }), P && Wt(function (t) {
        t.style.width = ""
      }, s), d = I.outerWidth(), "" === f ? (A.width = "100%", k && (I.find("tbody").height() > D.offsetHeight || "scroll" == x.css("overflow-y")) && (A.width = $t(I.outerWidth() - m)), d = I.outerWidth()) : "" !== p && (A.width = $t(p), d = I.outerWidth()), Wt(W, o), Wt(function (e) {
        B.push(e.innerHTML), F.push($t(t(e).css("width")))
      }, o), Wt(function (e, n) {
        -1 !== t.inArray(e, H) && (e.style.width = F[n])
      }, n), t(o).height(0), P && (Wt(W, s), Wt(function (e) {
        z.push(e.innerHTML), j.push($t(t(e).css("width")))
      }, s), Wt(function (t, e) {
        t.style.width = j[e]
      }, i), t(s).height(0)), Wt(function (t, e) {
        t.innerHTML = '<div class="dataTables_sizing" style="height:0;overflow:hidden;">' + B[e] + "</div>", t.style.width = F[e]
      }, o), P && Wt(function (t, e) {
        t.innerHTML = '<div class="dataTables_sizing" style="height:0;overflow:hidden;">' + z[e] + "</div>", t.style.width = j[e]
      }, s), I.outerWidth() < d ? (c = D.scrollHeight > D.offsetHeight || "scroll" == x.css("overflow-y") ? d + m : d, k && (D.scrollHeight > D.offsetHeight || "scroll" == x.css("overflow-y")) && (A.width = $t(c - m)), "" !== f && "" === p || se(e, 1, "Possible column misalignment", 6)) : c = "100%", C.width = $t(c), y.width = $t(c), P && (e.nScrollFoot.style.width = $t(c)), g || k && (C.height = $t(R.offsetHeight + m));
      var U = I.outerWidth();
      S[0].style.width = $t(U), _.width = $t(U);
      var V = I.height() > D.clientHeight || "scroll" == x.css("overflow-y"),
        G = "padding" + (O.bScrollbarLeft ? "Left" : "Right");
      _[G] = V ? m + "px" : "0px", P && (E[0].style.width = $t(U), T[0].style.width = $t(U), T[0].style[G] = V ? m + "px" : "0px"), I.children("colgroup").insertBefore(I.children("thead")), x.scroll(), !e.bSorted && !e.bFiltered || e._drawHold || (D.scrollTop = 0)
    }

    function Wt(t, e, n) {
      for (var r, i, o = 0, s = 0, a = e.length; s < a;) {
        for (r = e[s].firstChild, i = n ? n[s].firstChild : null; r;) 1 === r.nodeType && (n ? t(r, i, o) : t(r, o), o++), r = r.nextSibling, i = n ? i.nextSibling : null;
        s++
      }
    }
    var Yt = /<.*?>/g;

    function Ut(n) {
      var r, i, o, s = n.nTable,
        a = n.aoColumns,
        l = n.oScroll,
        u = l.sY,
        c = l.sX,
        d = l.sXInner,
        h = a.length,
        f = B(n, "bVisible"),
        p = t("th", n.nTHead),
        g = s.getAttribute("width"),
        m = s.parentNode,
        v = !1,
        y = n.oBrowser,
        b = y.bScrollOversize,
        w = s.style.width;
      for (w && -1 !== w.indexOf("%") && (g = w), r = 0; r < f.length; r++) null !== (i = a[f[r]]).sWidth && (i.sWidth = Gt(i.sWidthOrig, m), v = !0);
      if (b || !v && !c && !u && h == j(n) && h == p.length)
        for (r = 0; r < h; r++) {
          var _ = L(n, r);
          null !== _ && (a[_].sWidth = $t(p.eq(r).width()))
        } else {
          var S = t(s).clone().css("visibility", "hidden").removeAttr("id");
          S.find("tbody tr").remove();
          var D = t("<tr/>").appendTo(S.find("tbody"));
          for (S.find("thead, tfoot").remove(), S.append(t(n.nTHead).clone()).append(t(n.nTFoot).clone()), S.find("tfoot th, tfoot td").css("width", ""), p = dt(n, S.find("thead")[0]), r = 0; r < f.length; r++) i = a[f[r]], p[r].style.width = null !== i.sWidthOrig && "" !== i.sWidthOrig ? $t(i.sWidthOrig) : "", i.sWidthOrig && c && t(p[r]).append(t("<div/>").css({
            width: i.sWidthOrig,
            margin: 0,
            padding: 0,
            border: 0,
            height: 1
          }));
          if (n.aoData.length)
            for (r = 0; r < f.length; r++) i = a[o = f[r]], t(qt(n, o)).clone(!1).append(i.sContentPadding).appendTo(D);
          t("[name]", S).removeAttr("name");
          var x = t("<div/>").css(c || u ? {
            position: "absolute",
            top: 0,
            left: 0,
            height: 1,
            right: 0,
            overflow: "hidden"
          } : {}).append(S).appendTo(m);
          c && d ? S.width(d) : c ? (S.css("width", "auto"), S.removeAttr("width"), S.width() < m.clientWidth && g && S.width(m.clientWidth)) : u ? S.width(m.clientWidth) : g && S.width(g);
          var C = 0;
          for (r = 0; r < f.length; r++) {
            var T = t(p[r]),
              E = T.outerWidth() - T.width(),
              M = y.bBounding ? Math.ceil(p[r].getBoundingClientRect().width) : T.outerWidth();
            C += M, a[f[r]].sWidth = $t(M - E)
          }
          s.style.width = $t(C), x.remove()
        }
      if (g && (s.style.width = $t(g)), (g || c) && !n._reszEvt) {
        var I = function () {
          t(e).on("resize.DT-" + n.sInstance, Vt(function () {
            N(n)
          }))
        };
        b ? setTimeout(I, 1e3) : I(), n._reszEvt = !0
      }
    }
    var Vt = l.util.throttle;

    function Gt(e, r) {
      if (!e) return 0;
      var i = t("<div/>").css("width", $t(e)).appendTo(r || n.body),
        o = i[0].offsetWidth;
      return i.remove(), o
    }

    function qt(e, n) {
      var r = Xt(e, n);
      if (r < 0) return null;
      var i = e.aoData[r];
      return i.nTr ? i.anCells[n] : t("<td/>").html(V(e, r, n, "display"))[0]
    }

    function Xt(t, e) {
      for (var n, r = -1, i = -1, o = 0, s = t.aoData.length; o < s; o++)(n = (n = (n = V(t, o, e, "display") + "").replace(Yt, "")).replace(/&nbsp;/g, " ")).length > r && (r = n.length, i = o);
      return i
    }

    function $t(t) {
      return null === t ? "0px" : "number" == typeof t ? t < 0 ? "0px" : t + "px" : t.match(/\d$/) ? t + "px" : t
    }

    function Qt(e) {
      var n, i, o, s, a, u, c, d = [],
        h = e.aoColumns,
        f = e.aaSortingFixed,
        p = t.isPlainObject(f),
        g = [],
        m = function (e) {
          e.length && !t.isArray(e[0]) ? g.push(e) : t.merge(g, e)
        };
      for (t.isArray(f) && m(f), p && f.pre && m(f.pre), m(e.aaSorting), p && f.post && m(f.post), n = 0; n < g.length; n++)
        for (i = 0, o = (s = h[c = g[n][0]].aDataSort).length; i < o; i++) u = h[a = s[i]].sType || "string", g[n]._idx === r && (g[n]._idx = t.inArray(g[n][1], h[a].asSorting)), d.push({
          src: c,
          col: a,
          dir: g[n][1],
          index: g[n]._idx,
          type: u,
          formatter: l.ext.type.order[u + "-pre"]
        });
      return d
    }

    function Zt(t) {
      var e, n, r, i, o, s = [],
        a = l.ext.type.order,
        u = t.aoData,
        c = (t.aoColumns, 0),
        d = t.aiDisplayMaster;
      for (z(t), e = 0, n = (o = Qt(t)).length; e < n; e++)(i = o[e]).formatter && c++, ne(t, i.col);
      if ("ssp" != pe(t) && 0 !== o.length) {
        for (e = 0, r = d.length; e < r; e++) s[d[e]] = e;
        c === o.length ? d.sort(function (t, e) {
          var n, r, i, a, l, c = o.length,
            d = u[t]._aSortData,
            h = u[e]._aSortData;
          for (i = 0; i < c; i++)
            if (0 !== (a = (n = d[(l = o[i]).col]) < (r = h[l.col]) ? -1 : n > r ? 1 : 0)) return "asc" === l.dir ? a : -a;
          return (n = s[t]) < (r = s[e]) ? -1 : n > r ? 1 : 0
        }) : d.sort(function (t, e) {
          var n, r, i, l, c, d = o.length,
            h = u[t]._aSortData,
            f = u[e]._aSortData;
          for (i = 0; i < d; i++)
            if (n = h[(c = o[i]).col], r = f[c.col], 0 !== (l = (a[c.type + "-" + c.dir] || a["string-" + c.dir])(n, r))) return l;
          return (n = s[t]) < (r = s[e]) ? -1 : n > r ? 1 : 0
        })
      }
      t.bSorted = !0
    }

    function Kt(t) {
      for (var e, n, r = t.aoColumns, i = Qt(t), o = t.oLanguage.oAria, s = 0, a = r.length; s < a; s++) {
        var l = r[s],
          u = l.asSorting,
          c = l.sTitle.replace(/<.*?>/g, ""),
          d = l.nTh;
        d.removeAttribute("aria-sort"), l.bSortable ? (i.length > 0 && i[0].col == s ? (d.setAttribute("aria-sort", "asc" == i[0].dir ? "ascending" : "descending"), n = u[i[0].index + 1] || u[0]) : n = u[0], e = c + ("asc" === n ? o.sSortAscending : o.sSortDescending)) : e = c, d.setAttribute("aria-label", e)
      }
    }

    function Jt(e, n, i, o) {
      var s, a = e.aoColumns[n],
        l = e.aaSorting,
        u = a.asSorting,
        c = function (e, n) {
          var i = e._idx;
          return i === r && (i = t.inArray(e[1], u)), i + 1 < u.length ? i + 1 : n ? null : 0
        };
      if ("number" == typeof l[0] && (l = e.aaSorting = [l]), i && e.oFeatures.bSortMulti) {
        var d = t.inArray(n, w(l, "0")); - 1 !== d ? (null === (s = c(l[d], !0)) && 1 === l.length && (s = 0), null === s ? l.splice(d, 1) : (l[d][1] = u[s], l[d]._idx = s)) : (l.push([n, u[0], 0]), l[l.length - 1]._idx = 0)
      } else l.length && l[0][0] == n ? (s = c(l[0]), l.length = 1, l[0][1] = u[s], l[0]._idx = s) : (l.length = 0, l.push([n, u[0]]), l[0]._idx = 0);
      lt(e), "function" == typeof o && o(e)
    }

    function te(t, e, n, r) {
      var i = t.aoColumns[n];
      ue(e, {}, function (e) {
        !1 !== i.bSortable && (t.oFeatures.bProcessing ? (jt(t, !0), setTimeout(function () {
          Jt(t, n, e.shiftKey, r), "ssp" !== pe(t) && jt(t, !1)
        }, 0)) : Jt(t, n, e.shiftKey, r))
      })
    }

    function ee(e) {
      var n, r, i, o = e.aLastSort,
        s = e.oClasses.sSortColumn,
        a = Qt(e),
        l = e.oFeatures;
      if (l.bSort && l.bSortClasses) {
        for (n = 0, r = o.length; n < r; n++) i = o[n].src, t(w(e.aoData, "anCells", i)).removeClass(s + (n < 2 ? n + 1 : 3));
        for (n = 0, r = a.length; n < r; n++) i = a[n].src, t(w(e.aoData, "anCells", i)).addClass(s + (n < 2 ? n + 1 : 3))
      }
      e.aLastSort = a
    }

    function ne(t, e) {
      var n, r, i, o = t.aoColumns[e],
        s = l.ext.order[o.sSortDataType];
      s && (n = s.call(t.oInstance, t, e, F(t, e)));
      for (var a = l.ext.type.order[o.sType + "-pre"], u = 0, c = t.aoData.length; u < c; u++)(r = t.aoData[u])._aSortData || (r._aSortData = []), r._aSortData[e] && !s || (i = s ? n[u] : V(t, u, e, "sort"), r._aSortData[e] = a ? a(i) : i)
    }

    function re(e) {
      if (e.oFeatures.bStateSave && !e.bDestroying) {
        var n = {
          time: +new Date,
          start: e._iDisplayStart,
          length: e._iDisplayLength,
          order: t.extend(!0, [], e.aaSorting),
          search: Et(e.oPreviousSearch),
          columns: t.map(e.aoColumns, function (t, n) {
            return {
              visible: t.bVisible,
              search: Et(e.aoPreSearchCols[n])
            }
          })
        };
        de(e, "aoStateSaveParams", "stateSaveParams", [e, n]), e.oSavedState = n, e.fnStateSaveCallback.call(e.oInstance, e, n)
      }
    }

    function ie(e, n, i) {
      var o, s, a = e.aoColumns,
        l = function (n) {
          if (n && n.time) {
            var l = de(e, "aoStateLoadParams", "stateLoadParams", [e, n]);
            if (-1 === t.inArray(!1, l)) {
              var u = e.iStateDuration;
              if (u > 0 && n.time < +new Date - 1e3 * u) i();
              else if (n.columns && a.length !== n.columns.length) i();
              else {
                if (e.oLoadedState = t.extend(!0, {}, n), n.start !== r && (e._iDisplayStart = n.start, e.iInitDisplayStart = n.start), n.length !== r && (e._iDisplayLength = n.length), n.order !== r && (e.aaSorting = [], t.each(n.order, function (t, n) {
                    e.aaSorting.push(n[0] >= a.length ? [0, n[1]] : n)
                  })), n.search !== r && t.extend(e.oPreviousSearch, Mt(n.search)), n.columns)
                  for (o = 0, s = n.columns.length; o < s; o++) {
                    var c = n.columns[o];
                    c.visible !== r && (a[o].bVisible = c.visible), c.search !== r && t.extend(e.aoPreSearchCols[o], Mt(c.search))
                  }
                de(e, "aoStateLoaded", "stateLoaded", [e, n]), i()
              }
            } else i()
          } else i()
        };
      if (e.oFeatures.bStateSave) {
        var u = e.fnStateLoadCallback.call(e.oInstance, e, l);
        u !== r && l(u)
      } else i()
    }

    function oe(e) {
      var n = l.settings,
        r = t.inArray(e, w(n, "nTable"));
      return -1 !== r ? n[r] : null
    }

    function se(t, n, r, i) {
      if (r = "DataTables warning: " + (t ? "table id=" + t.sTableId + " - " : "") + r, i && (r += ". For more information about this error, please see http://datatables.net/tn/" + i), n) e.console && console.log && console.log(r);
      else {
        var o = l.ext,
          s = o.sErrMode || o.errMode;
        if (t && de(t, null, "error", [t, i, r]), "alert" == s) alert(r);
        else {
          if ("throw" == s) throw new Error(r);
          "function" == typeof s && s(t, i, r)
        }
      }
    }

    function ae(e, n, i, o) {
      t.isArray(i) ? t.each(i, function (r, i) {
        t.isArray(i) ? ae(e, n, i[0], i[1]) : ae(e, n, i)
      }) : (o === r && (o = i), n[i] !== r && (e[o] = n[i]))
    }

    function le(e, n, r) {
      var i;
      for (var o in n) n.hasOwnProperty(o) && (i = n[o], t.isPlainObject(i) ? (t.isPlainObject(e[o]) || (e[o] = {}), t.extend(!0, e[o], i)) : r && "data" !== o && "aaData" !== o && t.isArray(i) ? e[o] = i.slice() : e[o] = i);
      return e
    }

    function ue(e, n, r) {
      t(e).on("click.DT", n, function (t) {
        e.blur(), r(t)
      }).on("keypress.DT", n, function (t) {
        13 === t.which && (t.preventDefault(), r(t))
      }).on("selectstart.DT", function () {
        return !1
      })
    }

    function ce(t, e, n, r) {
      n && t[e].push({
        fn: n,
        sName: r
      })
    }

    function de(e, n, r, i) {
      var o = [];
      if (n && (o = t.map(e[n].slice().reverse(), function (t, n) {
          return t.fn.apply(e.oInstance, i)
        })), null !== r) {
        var s = t.Event(r + ".dt");
        t(e.nTable).trigger(s, i), o.push(s.result)
      }
      return o
    }

    function he(t) {
      var e = t._iDisplayStart,
        n = t.fnDisplayEnd(),
        r = t._iDisplayLength;
      e >= n && (e = n - r), e -= e % r, (-1 === r || e < 0) && (e = 0), t._iDisplayStart = e
    }

    function fe(e, n) {
      var r = e.renderer,
        i = l.ext.renderer[n];
      return t.isPlainObject(r) && r[n] ? i[r[n]] || i._ : "string" == typeof r && i[r] || i._
    }

    function pe(t) {
      return t.oFeatures.bServerSide ? "ssp" : t.ajax || t.sAjaxSource ? "ajax" : "dom"
    }
    var ge = [],
      me = Array.prototype;
    o = function (e, n) {
      if (!(this instanceof o)) return new o(e, n);
      var r = [],
        i = function (e) {
          var n, i, o, s, a, u = (n = e, s = l.settings, a = t.map(s, function (t, e) {
            return t.nTable
          }), n ? n.nTable && n.oApi ? [n] : n.nodeName && "table" === n.nodeName.toLowerCase() ? -1 !== (i = t.inArray(n, a)) ? [s[i]] : null : n && "function" == typeof n.settings ? n.settings().toArray() : ("string" == typeof n ? o = t(n) : n instanceof t && (o = n), o ? o.map(function (e) {
            return -1 !== (i = t.inArray(this, a)) ? s[i] : null
          }).toArray() : void 0) : []);
          u && (r = r.concat(u))
        };
      if (t.isArray(e))
        for (var s = 0, a = e.length; s < a; s++) i(e[s]);
      else i(e);
      this.context = C(r), n && t.merge(this, n), this.selector = {
        rows: null,
        cols: null,
        opts: null
      }, o.extend(this, this, ge)
    }, l.Api = o, t.extend(o.prototype, {
      any: function () {
        return 0 !== this.count()
      },
      concat: me.concat,
      context: [],
      count: function () {
        return this.flatten().length
      },
      each: function (t) {
        for (var e = 0, n = this.length; e < n; e++) t.call(this, this[e], e, this);
        return this
      },
      eq: function (t) {
        var e = this.context;
        return e.length > t ? new o(e[t], this[t]) : null
      },
      filter: function (t) {
        var e = [];
        if (me.filter) e = me.filter.call(this, t, this);
        else
          for (var n = 0, r = this.length; n < r; n++) t.call(this, this[n], n, this) && e.push(this[n]);
        return new o(this.context, e)
      },
      flatten: function () {
        var t = [];
        return new o(this.context, t.concat.apply(t, this.toArray()))
      },
      join: me.join,
      indexOf: me.indexOf || function (t, e) {
        for (var n = e || 0, r = this.length; n < r; n++)
          if (this[n] === t) return n;
        return -1
      },
      iterator: function (t, e, n, i) {
        var s, a, l, u, c, d, h, f, p = [],
          g = this.context,
          m = this.selector;
        for ("string" == typeof t && (i = n, n = e, e = t, t = !1), a = 0, l = g.length; a < l; a++) {
          var v = new o(g[a]);
          if ("table" === e)(s = n.call(v, g[a], a)) !== r && p.push(s);
          else if ("columns" === e || "rows" === e)(s = n.call(v, g[a], this[a], a)) !== r && p.push(s);
          else if ("column" === e || "column-rows" === e || "row" === e || "cell" === e)
            for (h = this[a], "column-rows" === e && (d = _e(g[a], m.opts)), u = 0, c = h.length; u < c; u++) f = h[u], (s = "cell" === e ? n.call(v, g[a], f.row, f.column, a, u) : n.call(v, g[a], f, a, u, d)) !== r && p.push(s)
        }
        if (p.length || i) {
          var y = new o(g, t ? p.concat.apply([], p) : p),
            b = y.selector;
          return b.rows = m.rows, b.cols = m.cols, b.opts = m.opts, y
        }
        return this
      },
      lastIndexOf: me.lastIndexOf || function (t, e) {
        return this.indexOf.apply(this.toArray.reverse(), arguments)
      },
      length: 0,
      map: function (t) {
        var e = [];
        if (me.map) e = me.map.call(this, t, this);
        else
          for (var n = 0, r = this.length; n < r; n++) e.push(t.call(this, this[n], n));
        return new o(this.context, e)
      },
      pluck: function (t) {
        return this.map(function (e) {
          return e[t]
        })
      },
      pop: me.pop,
      push: me.push,
      reduce: me.reduce || function (t, e) {
        return O(this, t, e, 0, this.length, 1)
      },
      reduceRight: me.reduceRight || function (t, e) {
        return O(this, t, e, this.length - 1, -1, -1)
      },
      reverse: me.reverse,
      selector: null,
      shift: me.shift,
      slice: function () {
        return new o(this.context, this)
      },
      sort: me.sort,
      splice: me.splice,
      toArray: function () {
        return me.slice.call(this)
      },
      to$: function () {
        return t(this)
      },
      toJQuery: function () {
        return t(this)
      },
      unique: function () {
        return new o(this.context, C(this))
      },
      unshift: me.unshift
    }), o.extend = function (e, n, r) {
      if (r.length && n && (n instanceof o || n.__dt_wrapper)) {
        var i, s, a, l = function (t, e, n) {
          return function () {
            var r = e.apply(t, arguments);
            return o.extend(r, r, n.methodExt), r
          }
        };
        for (i = 0, s = r.length; i < s; i++) n[(a = r[i]).name] = "function" == typeof a.val ? l(e, a.val, a) : t.isPlainObject(a.val) ? {} : a.val, n[a.name].__dt_wrapper = !0, o.extend(e, n[a.name], a.propExt)
      }
    }, o.register = s = function (e, n) {
      if (t.isArray(e))
        for (var r = 0, i = e.length; r < i; r++) o.register(e[r], n);
      else {
        var s, a, l, u, c = e.split("."),
          d = ge,
          h = function (t, e) {
            for (var n = 0, r = t.length; n < r; n++)
              if (t[n].name === e) return t[n];
            return null
          };
        for (s = 0, a = c.length; s < a; s++) {
          var f = h(d, l = (u = -1 !== c[s].indexOf("()")) ? c[s].replace("()", "") : c[s]);
          f || (f = {
            name: l,
            val: {},
            methodExt: [],
            propExt: []
          }, d.push(f)), s === a - 1 ? f.val = n : d = u ? f.methodExt : f.propExt
        }
      }
    }, o.registerPlural = a = function (e, n, i) {
      o.register(e, i), o.register(n, function () {
        var e = i.apply(this, arguments);
        return e === this ? this : e instanceof o ? e.length ? t.isArray(e[0]) ? new o(e.context, e[0]) : e[0] : r : e
      })
    };
    s("tables()", function (e) {
      return e ? new o(function (e, n) {
        if ("number" == typeof e) return [n[e]];
        var r = t.map(n, function (t, e) {
          return t.nTable
        });
        return t(r).filter(e).map(function (e) {
          var i = t.inArray(this, r);
          return n[i]
        }).toArray()
      }(e, this.context)) : this
    }), s("table()", function (t) {
      var e = this.tables(t),
        n = e.context;
      return n.length ? new o(n[0]) : e
    }), a("tables().nodes()", "table().node()", function () {
      return this.iterator("table", function (t) {
        return t.nTable
      }, 1)
    }), a("tables().body()", "table().body()", function () {
      return this.iterator("table", function (t) {
        return t.nTBody
      }, 1)
    }), a("tables().header()", "table().header()", function () {
      return this.iterator("table", function (t) {
        return t.nTHead
      }, 1)
    }), a("tables().footer()", "table().footer()", function () {
      return this.iterator("table", function (t) {
        return t.nTFoot
      }, 1)
    }), a("tables().containers()", "table().container()", function () {
      return this.iterator("table", function (t) {
        return t.nTableWrapper
      }, 1)
    }), s("draw()", function (t) {
      return this.iterator("table", function (e) {
        "page" === t ? at(e) : ("string" == typeof t && (t = "full-hold" !== t), lt(e, !1 === t))
      })
    }), s("page()", function (t) {
      return t === r ? this.page.info().page : this.iterator("table", function (e) {
        Lt(e, t)
      })
    }), s("page.info()", function (t) {
      if (0 === this.context.length) return r;
      var e = this.context[0],
        n = e._iDisplayStart,
        i = e.oFeatures.bPaginate ? e._iDisplayLength : -1,
        o = e.fnRecordsDisplay(),
        s = -1 === i;
      return {
        page: s ? 0 : Math.floor(n / i),
        pages: s ? 1 : Math.ceil(o / i),
        start: n,
        end: e.fnDisplayEnd(),
        length: i,
        recordsTotal: e.fnRecordsTotal(),
        recordsDisplay: o,
        serverSide: "ssp" === pe(e)
      }
    }), s("page.len()", function (t) {
      return t === r ? 0 !== this.context.length ? this.context[0]._iDisplayLength : r : this.iterator("table", function (e) {
        kt(e, t)
      })
    });
    var ve = function (t, e, n) {
      if (n) {
        var r = new o(t);
        r.one("draw", function () {
          n(r.ajax.json())
        })
      }
      if ("ssp" == pe(t)) lt(t, e);
      else {
        jt(t, !0);
        var i = t.jqXHR;
        i && 4 !== i.readyState && i.abort(), ht(t, [], function (n) {
          J(t);
          for (var r = mt(t, n), i = 0, o = r.length; i < o; i++) Y(t, r[i]);
          lt(t, e), jt(t, !1)
        })
      }
    };
    s("ajax.json()", function () {
      var t = this.context;
      if (t.length > 0) return t[0].json
    }), s("ajax.params()", function () {
      var t = this.context;
      if (t.length > 0) return t[0].oAjaxData
    }), s("ajax.reload()", function (t, e) {
      return this.iterator("table", function (n) {
        ve(n, !1 === e, t)
      })
    }), s("ajax.url()", function (e) {
      var n = this.context;
      return e === r ? 0 === n.length ? r : (n = n[0]).ajax ? t.isPlainObject(n.ajax) ? n.ajax.url : n.ajax : n.sAjaxSource : this.iterator("table", function (n) {
        t.isPlainObject(n.ajax) ? n.ajax.url = e : n.ajax = e
      })
    }), s("ajax.url().load()", function (t, e) {
      return this.iterator("table", function (n) {
        ve(n, !1 === e, t)
      })
    });
    var ye = function (e, n, o, s, a) {
        var l, u, c, d, h, f, p = [],
          g = typeof n;
        for (n && "string" !== g && "function" !== g && n.length !== r || (n = [n]), c = 0, d = n.length; c < d; c++)
          for (h = 0, f = (u = n[c] && n[c].split && !n[c].match(/[\[\(:]/) ? n[c].split(",") : [n[c]]).length; h < f; h++)(l = o("string" == typeof u[h] ? t.trim(u[h]) : u[h])) && l.length && (p = p.concat(l));
        var m = i.selector[e];
        if (m.length)
          for (c = 0, d = m.length; c < d; c++) p = m[c](s, a, p);
        return C(p)
      },
      be = function (e) {
        return e || (e = {}), e.filter && e.search === r && (e.search = e.filter), t.extend({
          search: "none",
          order: "current",
          page: "all"
        }, e)
      },
      we = function (t) {
        for (var e = 0, n = t.length; e < n; e++)
          if (t[e].length > 0) return t[0] = t[e], t[0].length = 1, t.length = 1, t.context = [t.context[e]], t;
        return t.length = 0, t
      },
      _e = function (e, n) {
        var r, i, o, s = [],
          a = e.aiDisplay,
          l = e.aiDisplayMaster,
          u = n.search,
          c = n.order,
          d = n.page;
        if ("ssp" == pe(e)) return "removed" === u ? [] : S(0, l.length);
        if ("current" == d)
          for (r = e._iDisplayStart, i = e.fnDisplayEnd(); r < i; r++) s.push(a[r]);
        else if ("current" == c || "applied" == c) s = "none" == u ? l.slice() : "applied" == u ? a.slice() : t.map(l, function (e, n) {
          return -1 === t.inArray(e, a) ? e : null
        });
        else if ("index" == c || "original" == c)
          for (r = 0, i = e.aoData.length; r < i; r++) "none" == u ? s.push(r) : (-1 === (o = t.inArray(r, a)) && "removed" == u || o >= 0 && "applied" == u) && s.push(r);
        return s
      };
    s("rows()", function (e, n) {
      e === r ? e = "" : t.isPlainObject(e) && (n = e, e = ""), n = be(n);
      var i = this.iterator("table", function (i) {
        return ye("row", e, function (e) {
          var n = m(e);
          if (null !== n && !s) return [n];
          if (a || (a = _e(o, s)), null !== n && -1 !== t.inArray(n, a)) return [n];
          if (null === e || e === r || "" === e) return a;
          if ("function" == typeof e) return t.map(a, function (t) {
            var n = o.aoData[t];
            return e(t, n._aData, n.nTr) ? t : null
          });
          var i = D(_(o.aoData, a, "nTr"));
          if (e.nodeName) {
            if (e._DT_RowIndex !== r) return [e._DT_RowIndex];
            if (e._DT_CellIndex) return [e._DT_CellIndex.row];
            var l = t(e).closest("*[data-dt-row]");
            return l.length ? [l.data("dt-row")] : []
          }
          if ("string" == typeof e && "#" === e.charAt(0)) {
            var u = o.aIds[e.replace(/^#/, "")];
            if (u !== r) return [u.idx]
          }
          return t(i).filter(e).map(function () {
            return this._DT_RowIndex
          }).toArray()
        }, o = i, s = n);
        var o, s, a
      }, 1);
      return i.selector.rows = e, i.selector.opts = n, i
    }), s("rows().nodes()", function () {
      return this.iterator("row", function (t, e) {
        return t.aoData[e].nTr || r
      }, 1)
    }), s("rows().data()", function () {
      return this.iterator(!0, "rows", function (t, e) {
        return _(t.aoData, e, "_aData")
      }, 1)
    }), a("rows().cache()", "row().cache()", function (t) {
      return this.iterator("row", function (e, n) {
        var r = e.aoData[n];
        return "search" === t ? r._aFilterData : r._aSortData
      }, 1)
    }), a("rows().invalidate()", "row().invalidate()", function (t) {
      return this.iterator("row", function (e, n) {
        et(e, n, t)
      })
    }), a("rows().indexes()", "row().index()", function () {
      return this.iterator("row", function (t, e) {
        return e
      }, 1)
    }), a("rows().ids()", "row().id()", function (t) {
      for (var e = [], n = this.context, r = 0, i = n.length; r < i; r++)
        for (var s = 0, a = this[r].length; s < a; s++) {
          var l = n[r].rowIdFn(n[r].aoData[this[r][s]]._aData);
          e.push((!0 === t ? "#" : "") + l)
        }
      return new o(n, e)
    }), a("rows().remove()", "row().remove()", function () {
      var t = this;
      return this.iterator("row", function (e, n, i) {
        var o, s, a, l, u, c, d = e.aoData,
          h = d[n];
        for (d.splice(n, 1), o = 0, s = d.length; o < s; o++)
          if (c = (u = d[o]).anCells, null !== u.nTr && (u.nTr._DT_RowIndex = o), null !== c)
            for (a = 0, l = c.length; a < l; a++) c[a]._DT_CellIndex.row = o;
        tt(e.aiDisplayMaster, n), tt(e.aiDisplay, n), tt(t[i], n, !1), e._iRecordsDisplay > 0 && e._iRecordsDisplay--, he(e);
        var f = e.rowIdFn(h._aData);
        f !== r && delete e.aIds[f]
      }), this.iterator("table", function (t) {
        for (var e = 0, n = t.aoData.length; e < n; e++) t.aoData[e].idx = e
      }), this
    }), s("rows.add()", function (e) {
      var n = this.iterator("table", function (t) {
          var n, r, i, o = [];
          for (r = 0, i = e.length; r < i; r++)(n = e[r]).nodeName && "TR" === n.nodeName.toUpperCase() ? o.push(U(t, n)[0]) : o.push(Y(t, n));
          return o
        }, 1),
        r = this.rows(-1);
      return r.pop(), t.merge(r, n), r
    }), s("row()", function (t, e) {
      return we(this.rows(t, e))
    }), s("row().data()", function (t) {
      var e = this.context;
      return t === r ? e.length && this.length ? e[0].aoData[this[0]]._aData : r : (e[0].aoData[this[0]]._aData = t, et(e[0], this[0], "data"), this)
    }), s("row().node()", function () {
      var t = this.context;
      return t.length && this.length && t[0].aoData[this[0]].nTr || null
    }), s("row.add()", function (e) {
      e instanceof t && e.length && (e = e[0]);
      var n = this.iterator("table", function (t) {
        return e.nodeName && "TR" === e.nodeName.toUpperCase() ? U(t, e)[0] : Y(t, e)
      });
      return this.row(n[0])
    });
    var Se = function (t, e) {
        var n = t.context;
        if (n.length) {
          var i = n[0].aoData[e !== r ? e : t[0]];
          i && i._details && (i._details.remove(), i._detailsShow = r, i._details = r)
        }
      },
      De = function (t, e) {
        var n = t.context;
        if (n.length && t.length) {
          var r = n[0].aoData[t[0]];
          r._details && (r._detailsShow = e, e ? r._details.insertAfter(r.nTr) : r._details.detach(), xe(n[0]))
        }
      },
      xe = function (t) {
        var e = new o(t),
          n = ".dt.DT_details",
          r = "draw" + n,
          i = "column-visibility" + n,
          s = "destroy" + n,
          a = t.aoData;
        e.off(r + " " + i + " " + s), w(a, "_details").length > 0 && (e.on(r, function (n, r) {
          t === r && e.rows({
            page: "current"
          }).eq(0).each(function (t) {
            var e = a[t];
            e._detailsShow && e._details.insertAfter(e.nTr)
          })
        }), e.on(i, function (e, n, r, i) {
          if (t === n)
            for (var o, s = j(n), l = 0, u = a.length; l < u; l++)(o = a[l])._details && o._details.children("td[colspan]").attr("colspan", s)
        }), e.on(s, function (n, r) {
          if (t === r)
            for (var i = 0, o = a.length; i < o; i++) a[i]._details && Se(e, i)
        }))
      },
      Ce = "row().child",
      Te = Ce + "()";
    s(Te, function (e, n) {
      var i, o, s, a, l = this.context;
      return e === r ? l.length && this.length ? l[0].aoData[this[0]]._details : r : (!0 === e ? this.child.show() : !1 === e ? Se(this) : l.length && this.length && (i = l[0], o = l[0].aoData[this[0]], s = [], (a = function (e, n) {
        if (t.isArray(e) || e instanceof t)
          for (var r = 0, o = e.length; r < o; r++) a(e[r], n);
        else if (e.nodeName && "tr" === e.nodeName.toLowerCase()) s.push(e);
        else {
          var l = t("<tr><td/></tr>").addClass(n);
          t("td", l).addClass(n).html(e)[0].colSpan = j(i), s.push(l[0])
        }
      })(e, n), o._details && o._details.detach(), o._details = t(s), o._detailsShow && o._details.insertAfter(o.nTr)), this)
    }), s([Ce + ".show()", Te + ".show()"], function (t) {
      return De(this, !0), this
    }), s([Ce + ".hide()", Te + ".hide()"], function () {
      return De(this, !1), this
    }), s([Ce + ".remove()", Te + ".remove()"], function () {
      return Se(this), this
    }), s(Ce + ".isShown()", function () {
      var t = this.context;
      return t.length && this.length && t[0].aoData[this[0]]._detailsShow || !1
    });
    var Ee = /^([^:]+):(name|visIdx|visible)$/,
      Me = function (t, e, n, r, i) {
        for (var o = [], s = 0, a = i.length; s < a; s++) o.push(V(t, i[s], e));
        return o
      };
    s("columns()", function (e, n) {
      e === r ? e = "" : t.isPlainObject(e) && (n = e, e = ""), n = be(n);
      var i = this.iterator("table", function (r) {
        return o = e, s = n, a = (i = r).aoColumns, l = w(a, "sName"), u = w(a, "nTh"), ye("column", o, function (e) {
          var n = m(e);
          if ("" === e) return S(a.length);
          if (null !== n) return [n >= 0 ? n : a.length + n];
          if ("function" == typeof e) {
            var r = _e(i, s);
            return t.map(a, function (t, n) {
              return e(n, Me(i, n, 0, 0, r), u[n]) ? n : null
            })
          }
          var o = "string" == typeof e ? e.match(Ee) : "";
          if (o) switch (o[2]) {
            case "visIdx":
            case "visible":
              var c = parseInt(o[1], 10);
              if (c < 0) {
                var d = t.map(a, function (t, e) {
                  return t.bVisible ? e : null
                });
                return [d[d.length + c]]
              }
              return [L(i, c)];
            case "name":
              return t.map(l, function (t, e) {
                return t === o[1] ? e : null
              });
            default:
              return []
          }
          if (e.nodeName && e._DT_CellIndex) return [e._DT_CellIndex.column];
          var h = t(u).filter(e).map(function () {
            return t.inArray(this, u)
          }).toArray();
          if (h.length || !e.nodeName) return h;
          var f = t(e).closest("*[data-dt-column]");
          return f.length ? [f.data("dt-column")] : []
        }, i, s);
        var i, o, s, a, l, u
      }, 1);
      return i.selector.cols = e, i.selector.opts = n, i
    }), a("columns().header()", "column().header()", function (t, e) {
      return this.iterator("column", function (t, e) {
        return t.aoColumns[e].nTh
      }, 1)
    }), a("columns().footer()", "column().footer()", function (t, e) {
      return this.iterator("column", function (t, e) {
        return t.aoColumns[e].nTf
      }, 1)
    }), a("columns().data()", "column().data()", function () {
      return this.iterator("column-rows", Me, 1)
    }), a("columns().dataSrc()", "column().dataSrc()", function () {
      return this.iterator("column", function (t, e) {
        return t.aoColumns[e].mData
      }, 1)
    }), a("columns().cache()", "column().cache()", function (t) {
      return this.iterator("column-rows", function (e, n, r, i, o) {
        return _(e.aoData, o, "search" === t ? "_aFilterData" : "_aSortData", n)
      }, 1)
    }), a("columns().nodes()", "column().nodes()", function () {
      return this.iterator("column-rows", function (t, e, n, r, i) {
        return _(t.aoData, i, "anCells", e)
      }, 1)
    }), a("columns().visible()", "column().visible()", function (e, n) {
      var i = this.iterator("column", function (n, i) {
        if (e === r) return n.aoColumns[i].bVisible;
        ! function (e, n, i) {
          var o, s, a, l, u = e.aoColumns,
            c = u[n],
            d = e.aoData;
          if (i === r) return c.bVisible;
          if (c.bVisible !== i) {
            if (i) {
              var h = t.inArray(!0, w(u, "bVisible"), n + 1);
              for (s = 0, a = d.length; s < a; s++) l = d[s].nTr, o = d[s].anCells, l && l.insertBefore(o[n], o[h] || null)
            } else t(w(e.aoData, "anCells", n)).detach();
            c.bVisible = i, st(e, e.aoHeader), st(e, e.aoFooter), re(e)
          }
        }(n, i, e)
      });
      return e !== r && (this.iterator("column", function (t, r) {
        de(t, null, "column-visibility", [t, r, e, n])
      }), (n === r || n) && this.columns.adjust()), i
    }), a("columns().indexes()", "column().index()", function (t) {
      return this.iterator("column", function (e, n) {
        return "visible" === t ? F(e, n) : n
      }, 1)
    }), s("columns.adjust()", function () {
      return this.iterator("table", function (t) {
        N(t)
      }, 1)
    }), s("column.index()", function (t, e) {
      if (0 !== this.context.length) {
        var n = this.context[0];
        if ("fromVisible" === t || "toData" === t) return L(n, e);
        if ("fromData" === t || "toVisible" === t) return F(n, e)
      }
    }), s("column()", function (t, e) {
      return we(this.columns(t, e))
    });
    s("cells()", function (e, n, i) {
      if (t.isPlainObject(e) && (e.row === r ? (i = e, e = null) : (i = n, n = null)), t.isPlainObject(n) && (i = n, n = null), null === n || n === r) return this.iterator("table", function (n) {
        return o = n, s = e, a = be(i), g = o.aoData, m = _e(o, a), v = D(_(g, m, "anCells")), y = t([].concat.apply([], v)), b = o.aoColumns.length, ye("cell", s, function (e) {
          var n = "function" == typeof e;
          if (null === e || e === r || n) {
            for (u = [], c = 0, d = m.length; c < d; c++)
              for (l = m[c], h = 0; h < b; h++) f = {
                row: l,
                column: h
              }, n ? (p = g[l], e(f, V(o, l, h), p.anCells ? p.anCells[h] : null) && u.push(f)) : u.push(f);
            return u
          }
          if (t.isPlainObject(e)) return [e];
          var i = y.filter(e).map(function (t, e) {
            return {
              row: e._DT_CellIndex.row,
              column: e._DT_CellIndex.column
            }
          }).toArray();
          return i.length || !e.nodeName ? i : (p = t(e).closest("*[data-dt-row]")).length ? [{
            row: p.data("dt-row"),
            column: p.data("dt-column")
          }] : []
        }, o, a);
        var o, s, a, l, u, c, d, h, f, p, g, m, v, y, b
      });
      var o, s, a, l, u, c = this.columns(n, i),
        d = this.rows(e, i),
        h = this.iterator("table", function (t, e) {
          for (o = [], s = 0, a = d[e].length; s < a; s++)
            for (l = 0, u = c[e].length; l < u; l++) o.push({
              row: d[e][s],
              column: c[e][l]
            });
          return o
        }, 1);
      return t.extend(h.selector, {
        cols: n,
        rows: e,
        opts: i
      }), h
    }), a("cells().nodes()", "cell().node()", function () {
      return this.iterator("cell", function (t, e, n) {
        var i = t.aoData[e];
        return i && i.anCells ? i.anCells[n] : r
      }, 1)
    }), s("cells().data()", function () {
      return this.iterator("cell", function (t, e, n) {
        return V(t, e, n)
      }, 1)
    }), a("cells().cache()", "cell().cache()", function (t) {
      return t = "search" === t ? "_aFilterData" : "_aSortData", this.iterator("cell", function (e, n, r) {
        return e.aoData[n][t][r]
      }, 1)
    }), a("cells().render()", "cell().render()", function (t) {
      return this.iterator("cell", function (e, n, r) {
        return V(e, n, r, t)
      }, 1)
    }), a("cells().indexes()", "cell().index()", function () {
      return this.iterator("cell", function (t, e, n) {
        return {
          row: e,
          column: n,
          columnVisible: F(t, n)
        }
      }, 1)
    }), a("cells().invalidate()", "cell().invalidate()", function (t) {
      return this.iterator("cell", function (e, n, r) {
        et(e, n, t, r)
      })
    }), s("cell()", function (t, e, n) {
      return we(this.cells(t, e, n))
    }), s("cell().data()", function (t) {
      var e = this.context,
        n = this[0];
      return t === r ? e.length && n.length ? V(e[0], n[0].row, n[0].column) : r : (G(e[0], n[0].row, n[0].column, t), et(e[0], n[0].row, "data", n[0].column), this)
    }), s("order()", function (e, n) {
      var i = this.context;
      return e === r ? 0 !== i.length ? i[0].aaSorting : r : ("number" == typeof e ? e = [
        [e, n]
      ] : e.length && !t.isArray(e[0]) && (e = Array.prototype.slice.call(arguments)), this.iterator("table", function (t) {
        t.aaSorting = e.slice()
      }))
    }), s("order.listener()", function (t, e, n) {
      return this.iterator("table", function (r) {
        te(r, t, e, n)
      })
    }), s("order.fixed()", function (e) {
      if (!e) {
        var n = this.context,
          i = n.length ? n[0].aaSortingFixed : r;
        return t.isArray(i) ? {
          pre: i
        } : i
      }
      return this.iterator("table", function (n) {
        n.aaSortingFixed = t.extend(!0, {}, e)
      })
    }), s(["columns().order()", "column().order()"], function (e) {
      var n = this;
      return this.iterator("table", function (r, i) {
        var o = [];
        t.each(n[i], function (t, n) {
          o.push([n, e])
        }), r.aaSorting = o
      })
    }), s("search()", function (e, n, i, o) {
      var s = this.context;
      return e === r ? 0 !== s.length ? s[0].oPreviousSearch.sSearch : r : this.iterator("table", function (r) {
        r.oFeatures.bFilter && yt(r, t.extend({}, r.oPreviousSearch, {
          sSearch: e + "",
          bRegex: null !== n && n,
          bSmart: null === i || i,
          bCaseInsensitive: null === o || o
        }), 1)
      })
    }), a("columns().search()", "column().search()", function (e, n, i, o) {
      return this.iterator("column", function (s, a) {
        var l = s.aoPreSearchCols;
        if (e === r) return l[a].sSearch;
        s.oFeatures.bFilter && (t.extend(l[a], {
          sSearch: e + "",
          bRegex: null !== n && n,
          bSmart: null === i || i,
          bCaseInsensitive: null === o || o
        }), yt(s, s.oPreviousSearch, 1))
      })
    }), s("state()", function () {
      return this.context.length ? this.context[0].oSavedState : null
    }), s("state.clear()", function () {
      return this.iterator("table", function (t) {
        t.fnStateSaveCallback.call(t.oInstance, t, {})
      })
    }), s("state.loaded()", function () {
      return this.context.length ? this.context[0].oLoadedState : null
    }), s("state.save()", function () {
      return this.iterator("table", function (t) {
        re(t)
      })
    }), l.versionCheck = l.fnVersionCheck = function (t) {
      for (var e, n, r = l.version.split("."), i = t.split("."), o = 0, s = i.length; o < s; o++)
        if ((e = parseInt(r[o], 10) || 0) !== (n = parseInt(i[o], 10) || 0)) return e > n;
      return !0
    }, l.isDataTable = l.fnIsDataTable = function (e) {
      var n = t(e).get(0),
        r = !1;
      return e instanceof l.Api || (t.each(l.settings, function (e, i) {
        var o = i.nScrollHead ? t("table", i.nScrollHead)[0] : null,
          s = i.nScrollFoot ? t("table", i.nScrollFoot)[0] : null;
        i.nTable !== n && o !== n && s !== n || (r = !0)
      }), r)
    }, l.tables = l.fnTables = function (e) {
      var n = !1;
      t.isPlainObject(e) && (n = e.api, e = e.visible);
      var r = t.map(l.settings, function (n) {
        if (!e || e && t(n.nTable).is(":visible")) return n.nTable
      });
      return n ? new o(r) : r
    }, l.camelToHungarian = E, s("$()", function (e, n) {
      var r = this.rows(n).nodes(),
        i = t(r);
      return t([].concat(i.filter(e).toArray(), i.find(e).toArray()))
    }), t.each(["on", "one", "off"], function (e, n) {
      s(n + "()", function () {
        var e = Array.prototype.slice.call(arguments);
        e[0] = t.map(e[0].split(/\s/), function (t) {
          return t.match(/\.dt\b/) ? t : t + ".dt"
        }).join(" ");
        var r = t(this.tables().nodes());
        return r[n].apply(r, e), this
      })
    }), s("clear()", function () {
      return this.iterator("table", function (t) {
        J(t)
      })
    }), s("settings()", function () {
      return new o(this.context, this.context)
    }), s("init()", function () {
      var t = this.context;
      return t.length ? t[0].oInit : null
    }), s("data()", function () {
      return this.iterator("table", function (t) {
        return w(t.aoData, "_aData")
      }).flatten()
    }), s("destroy()", function (n) {
      return n = n || !1, this.iterator("table", function (r) {
        var i, s = r.nTableWrapper.parentNode,
          a = r.oClasses,
          u = r.nTable,
          c = r.nTBody,
          d = r.nTHead,
          h = r.nTFoot,
          f = t(u),
          p = t(c),
          g = t(r.nTableWrapper),
          m = t.map(r.aoData, function (t) {
            return t.nTr
          });
        r.bDestroying = !0, de(r, "aoDestroyCallback", "destroy", [r]), n || new o(r).columns().visible(!0), g.off(".DT").find(":not(tbody *)").off(".DT"), t(e).off(".DT-" + r.sInstance), u != d.parentNode && (f.children("thead").detach(), f.append(d)), h && u != h.parentNode && (f.children("tfoot").detach(), f.append(h)), r.aaSorting = [], r.aaSortingFixed = [], ee(r), t(m).removeClass(r.asStripeClasses.join(" ")), t("th, td", d).removeClass(a.sSortable + " " + a.sSortableAsc + " " + a.sSortableDesc + " " + a.sSortableNone), p.children().detach(), p.append(m);
        var v = n ? "remove" : "detach";
        f[v](), g[v](), !n && s && (s.insertBefore(u, r.nTableReinsertBefore), f.css("width", r.sDestroyWidth).removeClass(a.sTable), (i = r.asDestroyStripes.length) && p.children().each(function (e) {
          t(this).addClass(r.asDestroyStripes[e % i])
        }));
        var y = t.inArray(r, l.settings); - 1 !== y && l.settings.splice(y, 1)
      })
    }), t.each(["column", "row", "cell"], function (t, e) {
      s(e + "s().every()", function (t) {
        var n = this.selector.opts,
          i = this;
        return this.iterator(e, function (o, s, a, l, u) {
          t.call(i[e](s, "cell" === e ? a : n, "cell" === e ? n : r), s, a, l, u)
        })
      })
    }), s("i18n()", function (e, n, i) {
      var o = this.context[0],
        s = Q(e)(o.oLanguage);
      return s === r && (s = n), i !== r && t.isPlainObject(s) && (s = s[i] !== r ? s[i] : s._), s.replace("%d", i)
    }), l.version = "1.10.16", l.settings = [], l.models = {}, l.models.oSearch = {
      bCaseInsensitive: !0,
      sSearch: "",
      bRegex: !1,
      bSmart: !0
    }, l.models.oRow = {
      nTr: null,
      anCells: null,
      _aData: [],
      _aSortData: null,
      _aFilterData: null,
      _sFilterRow: null,
      _sRowStripe: "",
      src: null,
      idx: -1
    }, l.models.oColumn = {
      idx: null,
      aDataSort: null,
      asSorting: null,
      bSearchable: null,
      bSortable: null,
      bVisible: null,
      _sManualType: null,
      _bAttrSrc: !1,
      fnCreatedCell: null,
      fnGetData: null,
      fnSetData: null,
      mData: null,
      mRender: null,
      nTh: null,
      nTf: null,
      sClass: null,
      sContentPadding: null,
      sDefaultContent: null,
      sName: null,
      sSortDataType: "std",
      sSortingClass: null,
      sSortingClassJUI: null,
      sTitle: null,
      sType: null,
      sWidth: null,
      sWidthOrig: null
    }, l.defaults = {
      aaData: null,
      aaSorting: [
        [0, "asc"]
      ],
      aaSortingFixed: [],
      ajax: null,
      aLengthMenu: [10, 25, 50, 100],
      aoColumns: null,
      aoColumnDefs: null,
      aoSearchCols: [],
      asStripeClasses: null,
      bAutoWidth: !0,
      bDeferRender: !1,
      bDestroy: !1,
      bFilter: !0,
      bInfo: !0,
      bLengthChange: !0,
      bPaginate: !0,
      bProcessing: !1,
      bRetrieve: !1,
      bScrollCollapse: !1,
      bServerSide: !1,
      bSort: !0,
      bSortMulti: !0,
      bSortCellsTop: !1,
      bSortClasses: !0,
      bStateSave: !1,
      fnCreatedRow: null,
      fnDrawCallback: null,
      fnFooterCallback: null,
      fnFormatNumber: function (t) {
        return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands)
      },
      fnHeaderCallback: null,
      fnInfoCallback: null,
      fnInitComplete: null,
      fnPreDrawCallback: null,
      fnRowCallback: null,
      fnServerData: null,
      fnServerParams: null,
      fnStateLoadCallback: function (t) {
        try {
          return JSON.parse((-1 === t.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" + t.sInstance + "_" + location.pathname))
        } catch (t) {}
      },
      fnStateLoadParams: null,
      fnStateLoaded: null,
      fnStateSaveCallback: function (t, e) {
        try {
          (-1 === t.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + t.sInstance + "_" + location.pathname, JSON.stringify(e))
        } catch (t) {}
      },
      fnStateSaveParams: null,
      iStateDuration: 7200,
      iDeferLoading: null,
      iDisplayLength: 10,
      iDisplayStart: 0,
      iTabIndex: 0,
      oClasses: {},
      oLanguage: {
        oAria: {
          sSortAscending: ": activate to sort column ascending",
          sSortDescending: ": activate to sort column descending"
        },
        oPaginate: {
          sFirst: "First",
          sLast: "Last",
          sNext: "Next",
          sPrevious: "Previous"
        },
        sEmptyTable: "No data available in table",
        sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
        sInfoEmpty: "Showing 0 to 0 of 0 entries",
        sInfoFiltered: "(filtered from _MAX_ total entries)",
        sInfoPostFix: "",
        sDecimal: "",
        sThousands: ",",
        sLengthMenu: "Show _MENU_ entries",
        sLoadingRecords: "Loading...",
        sProcessing: "Processing...",
        sSearch: "Search:",
        sSearchPlaceholder: "",
        sUrl: "",
        sZeroRecords: "No matching records found"
      },
      oSearch: t.extend({}, l.models.oSearch),
      sAjaxDataProp: "data",
      sAjaxSource: null,
      sDom: "lfrtip",
      searchDelay: null,
      sPaginationType: "simple_numbers",
      sScrollX: "",
      sScrollXInner: "",
      sScrollY: "",
      sServerMethod: "GET",
      renderer: null,
      rowId: "DT_RowId"
    }, T(l.defaults), l.defaults.column = {
      aDataSort: null,
      iDataSort: -1,
      asSorting: ["asc", "desc"],
      bSearchable: !0,
      bSortable: !0,
      bVisible: !0,
      fnCreatedCell: null,
      mData: null,
      mRender: null,
      sCellType: "td",
      sClass: "",
      sContentPadding: "",
      sDefaultContent: null,
      sName: "",
      sSortDataType: "std",
      sTitle: null,
      sType: null,
      sWidth: null
    }, T(l.defaults.column), l.models.oSettings = {
      oFeatures: {
        bAutoWidth: null,
        bDeferRender: null,
        bFilter: null,
        bInfo: null,
        bLengthChange: null,
        bPaginate: null,
        bProcessing: null,
        bServerSide: null,
        bSort: null,
        bSortMulti: null,
        bSortClasses: null,
        bStateSave: null
      },
      oScroll: {
        bCollapse: null,
        iBarWidth: 0,
        sX: null,
        sXInner: null,
        sY: null
      },
      oLanguage: {
        fnInfoCallback: null
      },
      oBrowser: {
        bScrollOversize: !1,
        bScrollbarLeft: !1,
        bBounding: !1,
        barWidth: 0
      },
      ajax: null,
      aanFeatures: [],
      aoData: [],
      aiDisplay: [],
      aiDisplayMaster: [],
      aIds: {},
      aoColumns: [],
      aoHeader: [],
      aoFooter: [],
      oPreviousSearch: {},
      aoPreSearchCols: [],
      aaSorting: null,
      aaSortingFixed: [],
      asStripeClasses: null,
      asDestroyStripes: [],
      sDestroyWidth: 0,
      aoRowCallback: [],
      aoHeaderCallback: [],
      aoFooterCallback: [],
      aoDrawCallback: [],
      aoRowCreatedCallback: [],
      aoPreDrawCallback: [],
      aoInitComplete: [],
      aoStateSaveParams: [],
      aoStateLoadParams: [],
      aoStateLoaded: [],
      sTableId: "",
      nTable: null,
      nTHead: null,
      nTFoot: null,
      nTBody: null,
      nTableWrapper: null,
      bDeferLoading: !1,
      bInitialised: !1,
      aoOpenRows: [],
      sDom: null,
      searchDelay: null,
      sPaginationType: "two_button",
      iStateDuration: 0,
      aoStateSave: [],
      aoStateLoad: [],
      oSavedState: null,
      oLoadedState: null,
      sAjaxSource: null,
      sAjaxDataProp: null,
      bAjaxDataGet: !0,
      jqXHR: null,
      json: r,
      oAjaxData: r,
      fnServerData: null,
      aoServerParams: [],
      sServerMethod: null,
      fnFormatNumber: null,
      aLengthMenu: null,
      iDraw: 0,
      bDrawing: !1,
      iDrawError: -1,
      _iDisplayLength: 10,
      _iDisplayStart: 0,
      _iRecordsTotal: 0,
      _iRecordsDisplay: 0,
      oClasses: {},
      bFiltered: !1,
      bSorted: !1,
      bSortCellsTop: null,
      oInit: null,
      aoDestroyCallback: [],
      fnRecordsTotal: function () {
        return "ssp" == pe(this) ? 1 * this._iRecordsTotal : this.aiDisplayMaster.length
      },
      fnRecordsDisplay: function () {
        return "ssp" == pe(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length
      },
      fnDisplayEnd: function () {
        var t = this._iDisplayLength,
          e = this._iDisplayStart,
          n = e + t,
          r = this.aiDisplay.length,
          i = this.oFeatures,
          o = i.bPaginate;
        return i.bServerSide ? !1 === o || -1 === t ? e + r : Math.min(e + t, this._iRecordsDisplay) : !o || n > r || -1 === t ? r : n
      },
      oInstance: null,
      sInstance: null,
      iTabIndex: 0,
      nScrollHead: null,
      nScrollFoot: null,
      aLastSort: [],
      oPlugins: {},
      rowIdFn: null,
      rowId: null
    }, l.ext = i = {
      buttons: {},
      classes: {},
      builder: "-source-",
      errMode: "alert",
      feature: [],
      search: [],
      selector: {
        cell: [],
        column: [],
        row: []
      },
      internal: {},
      legacy: {
        ajax: null
      },
      pager: {},
      renderer: {
        pageButton: {},
        header: {}
      },
      order: {},
      type: {
        detect: [],
        search: {},
        order: {}
      },
      _unique: 0,
      fnVersionCheck: l.fnVersionCheck,
      iApiIndex: 0,
      oJUIClasses: {},
      sVersion: l.version
    }, t.extend(i, {
      afnFiltering: i.search,
      aTypes: i.type.detect,
      ofnSearch: i.type.search,
      oSort: i.type.order,
      afnSortData: i.order,
      aoFeatures: i.feature,
      oApi: i.internal,
      oStdClasses: i.classes,
      oPagination: i.pager
    }), t.extend(l.ext.classes, {
      sTable: "dataTable",
      sNoFooter: "no-footer",
      sPageButton: "paginate_button",
      sPageButtonActive: "current",
      sPageButtonDisabled: "disabled",
      sStripeOdd: "odd",
      sStripeEven: "even",
      sRowEmpty: "dataTables_empty",
      sWrapper: "dataTables_wrapper",
      sFilter: "dataTables_filter",
      sInfo: "dataTables_info",
      sPaging: "dataTables_paginate paging_",
      sLength: "dataTables_length",
      sProcessing: "dataTables_processing",
      sSortAsc: "sorting_asc",
      sSortDesc: "sorting_desc",
      sSortable: "sorting",
      sSortableAsc: "sorting_asc_disabled",
      sSortableDesc: "sorting_desc_disabled",
      sSortableNone: "sorting_disabled",
      sSortColumn: "sorting_",
      sFilterInput: "",
      sLengthSelect: "",
      sScrollWrapper: "dataTables_scroll",
      sScrollHead: "dataTables_scrollHead",
      sScrollHeadInner: "dataTables_scrollHeadInner",
      sScrollBody: "dataTables_scrollBody",
      sScrollFoot: "dataTables_scrollFoot",
      sScrollFootInner: "dataTables_scrollFootInner",
      sHeaderTH: "",
      sFooterTH: "",
      sSortJUIAsc: "",
      sSortJUIDesc: "",
      sSortJUI: "",
      sSortJUIAscAllowed: "",
      sSortJUIDescAllowed: "",
      sSortJUIWrapper: "",
      sSortIcon: "",
      sJUIHeader: "",
      sJUIFooter: ""
    });
    var Ie = l.ext.pager;

    function Re(t, e) {
      var n = [],
        r = Ie.numbers_length,
        i = Math.floor(r / 2);
      return e <= r ? n = S(0, e) : t <= i ? ((n = S(0, r - 2)).push("ellipsis"), n.push(e - 1)) : t >= e - 1 - i ? ((n = S(e - (r - 2), e)).splice(0, 0, "ellipsis"), n.splice(0, 0, 0)) : ((n = S(t - i + 2, t + i - 1)).push("ellipsis"), n.push(e - 1), n.splice(0, 0, "ellipsis"), n.splice(0, 0, 0)), n.DT_el = "span", n
    }
    t.extend(Ie, {
      simple: function (t, e) {
        return ["previous", "next"]
      },
      full: function (t, e) {
        return ["first", "previous", "next", "last"]
      },
      numbers: function (t, e) {
        return [Re(t, e)]
      },
      simple_numbers: function (t, e) {
        return ["previous", Re(t, e), "next"]
      },
      full_numbers: function (t, e) {
        return ["first", "previous", Re(t, e), "next", "last"]
      },
      first_last_numbers: function (t, e) {
        return ["first", Re(t, e), "last"]
      },
      _numbers: Re,
      numbers_length: 7
    }), t.extend(!0, l.ext.renderer, {
      pageButton: {
        _: function (e, i, o, s, a, l) {
          var u, c, d, h = e.oClasses,
            f = e.oLanguage.oPaginate,
            p = e.oLanguage.oAria.paginate || {},
            g = 0,
            m = function (n, r) {
              var i, s, d, v = function (t) {
                Lt(e, t.data.action, !0)
              };
              for (i = 0, s = r.length; i < s; i++)
                if (d = r[i], t.isArray(d)) {
                  var y = t("<" + (d.DT_el || "div") + "/>").appendTo(n);
                  m(y, d)
                } else {
                  switch (u = null, c = "", d) {
                    case "ellipsis":
                      n.append('<span class="ellipsis">&#x2026;</span>');
                      break;
                    case "first":
                      u = f.sFirst, c = d + (a > 0 ? "" : " " + h.sPageButtonDisabled);
                      break;
                    case "previous":
                      u = f.sPrevious, c = d + (a > 0 ? "" : " " + h.sPageButtonDisabled);
                      break;
                    case "next":
                      u = f.sNext, c = d + (a < l - 1 ? "" : " " + h.sPageButtonDisabled);
                      break;
                    case "last":
                      u = f.sLast, c = d + (a < l - 1 ? "" : " " + h.sPageButtonDisabled);
                      break;
                    default:
                      u = d + 1, c = a === d ? h.sPageButtonActive : ""
                  }
                  null !== u && (ue(t("<a>", {
                    class: h.sPageButton + " " + c,
                    "aria-controls": e.sTableId,
                    "aria-label": p[d],
                    "data-dt-idx": g,
                    tabindex: e.iTabIndex,
                    id: 0 === o && "string" == typeof d ? e.sTableId + "_" + d : null
                  }).html(u).appendTo(n), {
                    action: d
                  }, v), g++)
                }
            };
          try {
            d = t(i).find(n.activeElement).data("dt-idx")
          } catch (t) {}
          m(t(i).empty(), s), d !== r && t(i).find("[data-dt-idx=" + d + "]").focus()
        }
      }
    }), t.extend(l.ext.type.detect, [function (t, e) {
      var n = e.oLanguage.sDecimal;
      return y(t, n) ? "num" + n : null
    }, function (t, e) {
      if (t && !(t instanceof Date) && !h.test(t)) return null;
      var n = Date.parse(t);
      return null !== n && !isNaN(n) || g(t) ? "date" : null
    }, function (t, e) {
      var n = e.oLanguage.sDecimal;
      return y(t, n, !0) ? "num-fmt" + n : null
    }, function (t, e) {
      var n = e.oLanguage.sDecimal;
      return b(t, n) ? "html-num" + n : null
    }, function (t, e) {
      var n = e.oLanguage.sDecimal;
      return b(t, n, !0) ? "html-num-fmt" + n : null
    }, function (t, e) {
      return g(t) || "string" == typeof t && -1 !== t.indexOf("<") ? "html" : null
    }]), t.extend(l.ext.type.search, {
      html: function (t) {
        return g(t) ? t : "string" == typeof t ? t.replace(c, " ").replace(d, "") : ""
      },
      string: function (t) {
        return g(t) ? t : "string" == typeof t ? t.replace(c, " ") : t
      }
    });
    var Ae = function (t, e, n, r) {
      return 0 === t || t && "-" !== t ? (e && (t = v(t, e)), t.replace && (n && (t = t.replace(n, "")), r && (t = t.replace(r, ""))), 1 * t) : -1 / 0
    };

    function Pe(e) {
      t.each({
        num: function (t) {
          return Ae(t, e)
        },
        "num-fmt": function (t) {
          return Ae(t, e, p)
        },
        "html-num": function (t) {
          return Ae(t, e, d)
        },
        "html-num-fmt": function (t) {
          return Ae(t, e, d, p)
        }
      }, function (t, n) {
        i.type.order[t + e + "-pre"] = n, t.match(/^html\-/) && (i.type.search[t + e] = i.type.search.html)
      })
    }
    t.extend(i.type.order, {
      "date-pre": function (t) {
        return Date.parse(t) || -1 / 0
      },
      "html-pre": function (t) {
        return g(t) ? "" : t.replace ? t.replace(/<.*?>/g, "").toLowerCase() : t + ""
      },
      "string-pre": function (t) {
        return g(t) ? "" : "string" == typeof t ? t.toLowerCase() : t.toString ? t.toString() : ""
      },
      "string-asc": function (t, e) {
        return t < e ? -1 : t > e ? 1 : 0
      },
      "string-desc": function (t, e) {
        return t < e ? 1 : t > e ? -1 : 0
      }
    }), Pe(""), t.extend(!0, l.ext.renderer, {
      header: {
        _: function (e, n, r, i) {
          t(e.nTable).on("order.dt.DT", function (t, o, s, a) {
            if (e === o) {
              var l = r.idx;
              n.removeClass(r.sSortingClass + " " + i.sSortAsc + " " + i.sSortDesc).addClass("asc" == a[l] ? i.sSortAsc : "desc" == a[l] ? i.sSortDesc : r.sSortingClass)
            }
          })
        },
        jqueryui: function (e, n, r, i) {
          t("<div/>").addClass(i.sSortJUIWrapper).append(n.contents()).append(t("<span/>").addClass(i.sSortIcon + " " + r.sSortingClassJUI)).appendTo(n), t(e.nTable).on("order.dt.DT", function (t, o, s, a) {
            if (e === o) {
              var l = r.idx;
              n.removeClass(i.sSortAsc + " " + i.sSortDesc).addClass("asc" == a[l] ? i.sSortAsc : "desc" == a[l] ? i.sSortDesc : r.sSortingClass), n.find("span." + i.sSortIcon).removeClass(i.sSortJUIAsc + " " + i.sSortJUIDesc + " " + i.sSortJUI + " " + i.sSortJUIAscAllowed + " " + i.sSortJUIDescAllowed).addClass("asc" == a[l] ? i.sSortJUIAsc : "desc" == a[l] ? i.sSortJUIDesc : r.sSortingClassJUI)
            }
          })
        }
      }
    });
    var Oe = function (t) {
      return "string" == typeof t ? t.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : t
    };

    function ke(t) {
      return function () {
        var e = [oe(this[l.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
        return l.ext.internal[t].apply(this, e)
      }
    }
    return l.render = {
      number: function (t, e, n, r, i) {
        return {
          display: function (o) {
            if ("number" != typeof o && "string" != typeof o) return o;
            var s = o < 0 ? "-" : "",
              a = parseFloat(o);
            if (isNaN(a)) return Oe(o);
            a = a.toFixed(n), o = Math.abs(a);
            var l = parseInt(o, 10),
              u = n ? e + (o - l).toFixed(n).substring(2) : "";
            return s + (r || "") + l.toString().replace(/\B(?=(\d{3})+(?!\d))/g, t) + u + (i || "")
          }
        }
      },
      text: function () {
        return {
          display: Oe
        }
      }
    }, t.extend(l.ext.internal, {
      _fnExternApiFunc: ke,
      _fnBuildAjax: ht,
      _fnAjaxUpdate: ft,
      _fnAjaxParameters: pt,
      _fnAjaxUpdateDraw: gt,
      _fnAjaxDataSrc: mt,
      _fnAddColumn: k,
      _fnColumnOptions: H,
      _fnAdjustColumnSizing: N,
      _fnVisibleToColumnIndex: L,
      _fnColumnIndexToVisible: F,
      _fnVisbleColumns: j,
      _fnGetColumns: B,
      _fnColumnTypes: z,
      _fnApplyColumnDefs: W,
      _fnHungarianMap: T,
      _fnCamelToHungarian: E,
      _fnLanguageCompat: M,
      _fnBrowserDetect: P,
      _fnAddData: Y,
      _fnAddTr: U,
      _fnNodeToDataIndex: function (t, e) {
        return e._DT_RowIndex !== r ? e._DT_RowIndex : null
      },
      _fnNodeToColumnIndex: function (e, n, r) {
        return t.inArray(r, e.aoData[n].anCells)
      },
      _fnGetCellData: V,
      _fnSetCellData: G,
      _fnSplitObjNotation: $,
      _fnGetObjectDataFn: Q,
      _fnSetObjectDataFn: Z,
      _fnGetDataMaster: K,
      _fnClearTable: J,
      _fnDeleteIndex: tt,
      _fnInvalidate: et,
      _fnGetRowElements: nt,
      _fnCreateTr: rt,
      _fnBuildHead: ot,
      _fnDrawHead: st,
      _fnDraw: at,
      _fnReDraw: lt,
      _fnAddOptionsHtml: ut,
      _fnDetectHeader: ct,
      _fnGetUniqueThs: dt,
      _fnFeatureHtmlFilter: vt,
      _fnFilterComplete: yt,
      _fnFilterCustom: bt,
      _fnFilterColumn: wt,
      _fnFilter: _t,
      _fnFilterCreateSearch: St,
      _fnEscapeRegex: Dt,
      _fnFilterData: Tt,
      _fnFeatureHtmlInfo: It,
      _fnUpdateInfo: Rt,
      _fnInfoMacros: At,
      _fnInitialise: Pt,
      _fnInitComplete: Ot,
      _fnLengthChange: kt,
      _fnFeatureHtmlLength: Ht,
      _fnFeatureHtmlPaginate: Nt,
      _fnPageChange: Lt,
      _fnFeatureHtmlProcessing: Ft,
      _fnProcessingDisplay: jt,
      _fnFeatureHtmlTable: Bt,
      _fnScrollDraw: zt,
      _fnApplyToChildren: Wt,
      _fnCalculateColumnWidths: Ut,
      _fnThrottle: Vt,
      _fnConvertToWidth: Gt,
      _fnGetWidestNode: qt,
      _fnGetMaxLenString: Xt,
      _fnStringToCss: $t,
      _fnSortFlatten: Qt,
      _fnSort: Zt,
      _fnSortAria: Kt,
      _fnSortListener: Jt,
      _fnSortAttachListener: te,
      _fnSortingClasses: ee,
      _fnSortData: ne,
      _fnSaveState: re,
      _fnLoadState: ie,
      _fnSettingsFromNode: oe,
      _fnLog: se,
      _fnMap: ae,
      _fnBindAction: ue,
      _fnCallbackReg: ce,
      _fnCallbackFire: de,
      _fnLengthOverflow: he,
      _fnRenderer: fe,
      _fnDataSource: pe,
      _fnRowAttributes: it,
      _fnCalculateEnd: function () {}
    }), t.fn.dataTable = l, l.$ = t, t.fn.dataTableSettings = l.settings, t.fn.dataTableExt = l.ext, t.fn.DataTable = function (e) {
      return t(this).dataTable(e).api()
    }, t.each(l, function (e, n) {
      t.fn.DataTable[e] = n
    }), t.fn.dataTable
  }), function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e(require("moment"), require("jquery")) : "function" == typeof define && define.amd ? define(["moment", "jquery"], e) : "object" == typeof exports ? exports.FullCalendar = e(require("moment"), require("jquery")) : t.FullCalendar = e(t.moment, t.jQuery)
  }("undefined" != typeof self ? self : this, function (t, e) {
    return function (t) {
      var e = {};

      function n(r) {
        if (e[r]) return e[r].exports;
        var i = e[r] = {
          i: r,
          l: !1,
          exports: {}
        };
        return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
      }
      return n.m = t, n.c = e, n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
          configurable: !1,
          enumerable: !0,
          get: r
        })
      }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
          return t.default
        } : function () {
          return t
        };
        return n.d(e, "a", e), e
      }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
      }, n.p = "", n(n.s = 236)
    }([function (e, n) {
      e.exports = t
    }, , function (t, e) {
      var n = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function (t, e) {
        t.__proto__ = e
      } || function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
      };
      e.__extends = function (t, e) {
        function r() {
          this.constructor = t
        }
        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
      }
    }, function (t, n) {
      t.exports = e
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(0),
        i = n(3);

      function o(t) {
        t.height("")
      }

      function s(t) {
        var e, n = t[0].offsetWidth - t[0].clientWidth,
          r = t[0].offsetHeight - t[0].clientHeight;
        return n = a(n), e = {
          left: 0,
          right: 0,
          top: 0,
          bottom: r = a(r)
        }, ! function () {
          null === l && (t = i("<div><div/></div>").css({
            position: "absolute",
            top: -1e3,
            left: 0,
            border: 0,
            padding: 0,
            overflow: "scroll",
            direction: "rtl"
          }).appendTo("body"), e = t.children().offset().left > t.offset().left, t.remove(), l = e);
          var t, e;
          return l
        }() || "rtl" !== t.css("direction") ? e.right = n : e.left = n, e
      }

      function a(t) {
        return t = Math.max(0, t), t = Math.round(t)
      }
      e.compensateScroll = function (t, e) {
        e.left && t.css({
          "border-left-width": 1,
          "margin-left": e.left - 1
        }), e.right && t.css({
          "border-right-width": 1,
          "margin-right": e.right - 1
        })
      }, e.uncompensateScroll = function (t) {
        t.css({
          "margin-left": "",
          "margin-right": "",
          "border-left-width": "",
          "border-right-width": ""
        })
      }, e.disableCursor = function () {
        i("body").addClass("fc-not-allowed")
      }, e.enableCursor = function () {
        i("body").removeClass("fc-not-allowed")
      }, e.distributeHeight = function (t, e, n) {
        var r = Math.floor(e / t.length),
          s = Math.floor(e - r * (t.length - 1)),
          a = [],
          l = [],
          u = [],
          c = 0;
        o(t), t.each(function (e, n) {
          var o = e === t.length - 1 ? s : r,
            d = i(n).outerHeight(!0);
          d < o ? (a.push(n), l.push(d), u.push(i(n).height())) : c += d
        }), n && (e -= c, r = Math.floor(e / a.length), s = Math.floor(e - r * (a.length - 1))), i(a).each(function (t, e) {
          var n = t === a.length - 1 ? s : r,
            o = l[t],
            c = n - (o - u[t]);
          o < n && i(e).height(c)
        })
      }, e.undistributeHeight = o, e.matchCellWidths = function (t) {
        var e = 0;
        return t.find("> *").each(function (t, n) {
          var r = i(n).outerWidth();
          r > e && (e = r)
        }), e++, t.width(e), e
      }, e.subtractInnerElHeight = function (t, e) {
        var n, r = t.add(e);
        return r.css({
          position: "relative",
          left: -1
        }), n = t.outerHeight() - e.outerHeight(), r.css({
          position: "",
          left: ""
        }), n
      }, e.getScrollParent = function (t) {
        var e = t.css("position"),
          n = t.parents().filter(function () {
            var t = i(this);
            return /(auto|scroll)/.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
          }).eq(0);
        return "fixed" !== e && n.length ? n : i(t[0].ownerDocument || document)
      }, e.getOuterRect = function (t, e) {
        var n = t.offset(),
          r = n.left - (e ? e.left : 0),
          i = n.top - (e ? e.top : 0);
        return {
          left: r,
          right: r + t.outerWidth(),
          top: i,
          bottom: i + t.outerHeight()
        }
      }, e.getClientRect = function (t, e) {
        var n = t.offset(),
          r = s(t),
          i = n.left + u(t, "border-left-width") + r.left - (e ? e.left : 0),
          o = n.top + u(t, "border-top-width") + r.top - (e ? e.top : 0);
        return {
          left: i,
          right: i + t[0].clientWidth,
          top: o,
          bottom: o + t[0].clientHeight
        }
      }, e.getContentRect = function (t, e) {
        var n = t.offset(),
          r = n.left + u(t, "border-left-width") + u(t, "padding-left") - (e ? e.left : 0),
          i = n.top + u(t, "border-top-width") + u(t, "padding-top") - (e ? e.top : 0);
        return {
          left: r,
          right: r + t.width(),
          top: i,
          bottom: i + t.height()
        }
      }, e.getScrollbarWidths = s;
      var l = null;

      function u(t, e) {
        return parseFloat(t.css(e)) || 0
      }

      function c(t) {
        t.preventDefault()
      }

      function d(t, e, n, r, i) {
        if (n.func) return n.func(t, e);
        var o = t[n.field],
          s = e[n.field];
        return null == o && r && (o = r[n.field]), null == s && i && (s = i[n.field]), h(o, s) * (n.order || 1)
      }

      function h(t, e) {
        return t || e ? null == e ? -1 : null == t ? 1 : "string" === i.type(t) || "string" === i.type(e) ? String(t).localeCompare(String(e)) : t - e : 0
      }

      function f(t, n) {
        var r, i, o;
        for (r = 0; r < e.unitsDesc.length && !((o = p(i = e.unitsDesc[r], t, n)) >= 1 && w(o)); r++);
        return i
      }

      function p(t, e, n) {
        return null != n ? n.diff(e, t, !0) : r.isDuration(e) ? e.as(t) : e.end.diff(e.start, t, !0)
      }

      function g(t) {
        return Boolean(t.hours() || t.minutes() || t.seconds() || t.milliseconds())
      }

      function m() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = window.console;
        if (n && n.log) return n.log.apply(n, t)
      }
      e.isPrimaryMouseButton = function (t) {
        return 1 === t.which && !t.ctrlKey
      }, e.getEvX = function (t) {
        var e = t.originalEvent.touches;
        return e && e.length ? e[0].pageX : t.pageX
      }, e.getEvY = function (t) {
        var e = t.originalEvent.touches;
        return e && e.length ? e[0].pageY : t.pageY
      }, e.getEvIsTouch = function (t) {
        return /^touch/.test(t.type)
      }, e.preventSelection = function (t) {
        t.addClass("fc-unselectable").on("selectstart", c)
      }, e.allowSelection = function (t) {
        t.removeClass("fc-unselectable").off("selectstart", c)
      }, e.preventDefault = c, e.intersectRects = function (t, e) {
        var n = {
          left: Math.max(t.left, e.left),
          right: Math.min(t.right, e.right),
          top: Math.max(t.top, e.top),
          bottom: Math.min(t.bottom, e.bottom)
        };
        return n.left < n.right && n.top < n.bottom && n
      }, e.constrainPoint = function (t, e) {
        return {
          left: Math.min(Math.max(t.left, e.left), e.right),
          top: Math.min(Math.max(t.top, e.top), e.bottom)
        }
      }, e.getRectCenter = function (t) {
        return {
          left: (t.left + t.right) / 2,
          top: (t.top + t.bottom) / 2
        }
      }, e.diffPoints = function (t, e) {
        return {
          left: t.left - e.left,
          top: t.top - e.top
        }
      }, e.parseFieldSpecs = function (t) {
        var e, n, r = [],
          o = [];
        for ("string" == typeof t ? o = t.split(/\s*,\s*/) : "function" == typeof t ? o = [t] : i.isArray(t) && (o = t), e = 0; e < o.length; e++) "string" == typeof (n = o[e]) ? r.push("-" === n.charAt(0) ? {
          field: n.substring(1),
          order: -1
        } : {
          field: n,
          order: 1
        }) : "function" == typeof n && r.push({
          func: n
        });
        return r
      }, e.compareByFieldSpecs = function (t, e, n, r, i) {
        var o, s;
        for (o = 0; o < n.length; o++)
          if (s = d(t, e, n[o], r, i)) return s;
        return 0
      }, e.compareByFieldSpec = d, e.flexibleCompare = h, e.dayIDs = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"], e.unitsDesc = ["year", "month", "week", "day", "hour", "minute", "second", "millisecond"], e.diffDayTime = function (t, e) {
        return r.duration({
          days: t.clone().stripTime().diff(e.clone().stripTime(), "days"),
          ms: t.time() - e.time()
        })
      }, e.diffDay = function (t, e) {
        return r.duration({
          days: t.clone().stripTime().diff(e.clone().stripTime(), "days")
        })
      }, e.diffByUnit = function (t, e, n) {
        return r.duration(Math.round(t.diff(e, n, !0)), n)
      }, e.computeGreatestUnit = f, e.computeDurationGreatestUnit = function (t, e) {
        var n = f(t);
        return "week" === n && "object" == typeof e && e.days && (n = "day"), n
      }, e.divideRangeByDuration = function (t, e, n) {
        var r;
        return g(n) ? (e - t) / n : (r = n.asMonths(), Math.abs(r) >= 1 && w(r) ? e.diff(t, "months", !0) / r : e.diff(t, "days", !0) / n.asDays())
      }, e.divideDurationByDuration = function (t, e) {
        var n, r;
        return g(t) || g(e) ? t / e : (n = t.asMonths(), r = e.asMonths(), Math.abs(n) >= 1 && w(n) && Math.abs(r) >= 1 && w(r) ? n / r : t.asDays() / e.asDays())
      }, e.multiplyDuration = function (t, e) {
        var n;
        return g(t) ? r.duration(t * e) : (n = t.asMonths(), Math.abs(n) >= 1 && w(n) ? r.duration({
          months: n * e
        }) : r.duration({
          days: t.asDays() * e
        }))
      }, e.durationHasTime = g, e.isNativeDate = function (t) {
        return "[object Date]" === Object.prototype.toString.call(t) || t instanceof Date
      }, e.isTimeString = function (t) {
        return "string" == typeof t && /^\d+\:\d+(?:\:\d+\.?(?:\d{3})?)?$/.test(t)
      }, e.log = m, e.warn = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = window.console;
        return n && n.warn ? n.warn.apply(n, t) : m.apply(null, t)
      };
      var v = {}.hasOwnProperty;

      function y(t, e) {
        return v.call(t, e)
      }

      function b(t) {
        return (t + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#039;").replace(/"/g, "&quot;").replace(/\n/g, "<br />")
      }

      function w(t) {
        return t % 1 == 0
      }
      e.mergeProps = function t(e, n) {
        var r, i, o, s, a, l, u = {};
        if (n)
          for (r = 0; r < n.length; r++) {
            for (i = n[r], o = [], s = e.length - 1; s >= 0; s--)
              if ("object" == typeof (a = e[s][i])) o.unshift(a);
              else if (void 0 !== a) {
              u[i] = a;
              break
            }
            o.length && (u[i] = t(o))
          }
        for (r = e.length - 1; r >= 0; r--)
          for (i in l = e[r]) i in u || (u[i] = l[i]);
        return u
      }, e.copyOwnProps = function (t, e) {
        for (var n in t) y(t, n) && (e[n] = t[n])
      }, e.hasOwnProp = y, e.applyAll = function (t, e, n) {
        if (i.isFunction(t) && (t = [t]), t) {
          var r = void 0,
            o = void 0;
          for (r = 0; r < t.length; r++) o = t[r].apply(e, n) || o;
          return o
        }
      }, e.removeMatching = function (t, e) {
        for (var n = 0, r = 0; r < t.length;) e(t[r]) ? (t.splice(r, 1), n++) : r++;
        return n
      }, e.removeExact = function (t, e) {
        for (var n = 0, r = 0; r < t.length;) t[r] === e ? (t.splice(r, 1), n++) : r++;
        return n
      }, e.isArraysEqual = function (t, e) {
        var n, r = t.length;
        if (null == r || r !== e.length) return !1;
        for (n = 0; n < r; n++)
          if (t[n] !== e[n]) return !1;
        return !0
      }, e.firstDefined = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        for (var n = 0; n < t.length; n++)
          if (void 0 !== t[n]) return t[n]
      }, e.htmlEscape = b, e.stripHtmlEntities = function (t) {
        return t.replace(/&.*?;/g, "")
      }, e.cssToStr = function (t) {
        var e = [];
        return i.each(t, function (t, n) {
          null != n && e.push(t + ":" + n)
        }), e.join(";")
      }, e.attrsToStr = function (t) {
        var e = [];
        return i.each(t, function (t, n) {
          null != n && e.push(t + '="' + b(n) + '"')
        }), e.join(" ")
      }, e.capitaliseFirstLetter = function (t) {
        return t.charAt(0).toUpperCase() + t.slice(1)
      }, e.compareNumbers = function (t, e) {
        return t - e
      }, e.isInt = w, e.proxy = function (t, e) {
        var n = t[e];
        return function () {
          return n.apply(t, arguments)
        }
      }, e.debounce = function (t, e, n) {
        var r, i, o, s, a;
        void 0 === n && (n = !1);
        var l = function () {
          var u = +new Date - s;
          u < e ? r = setTimeout(l, e - u) : (r = null, n || (a = t.apply(o, i), o = i = null))
        };
        return function () {
          o = this, i = arguments, s = +new Date;
          var u = n && !r;
          return r || (r = setTimeout(l, e)), u && (a = t.apply(o, i), o = i = null), a
        }
      }
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(0),
        i = n(10),
        o = function () {
          function t(t, e) {
            this.isStart = !0, this.isEnd = !0, r.isMoment(t) && (t = t.clone().stripZone()), r.isMoment(e) && (e = e.clone().stripZone()), t && (this.startMs = t.valueOf()), e && (this.endMs = e.valueOf())
          }
          return t.invertRanges = function (e, n) {
            var r, i, o = [],
              a = n.startMs;
            for (e.sort(s), r = 0; r < e.length; r++)(i = e[r]).startMs > a && o.push(new t(a, i.startMs)), i.endMs > a && (a = i.endMs);
            return a < n.endMs && o.push(new t(a, n.endMs)), o
          }, t.prototype.intersect = function (e) {
            var n = this.startMs,
              r = this.endMs,
              i = null;
            return null != e.startMs && (n = null == n ? e.startMs : Math.max(n, e.startMs)), null != e.endMs && (r = null == r ? e.endMs : Math.min(r, e.endMs)), (null == n || null == r || n < r) && ((i = new t(n, r)).isStart = this.isStart && n === this.startMs, i.isEnd = this.isEnd && r === this.endMs), i
          }, t.prototype.intersectsWith = function (t) {
            return (null == this.endMs || null == t.startMs || this.endMs > t.startMs) && (null == this.startMs || null == t.endMs || this.startMs < t.endMs)
          }, t.prototype.containsRange = function (t) {
            return (null == this.startMs || null != t.startMs && t.startMs >= this.startMs) && (null == this.endMs || null != t.endMs && t.endMs <= this.endMs)
          }, t.prototype.containsDate = function (t) {
            var e = t.valueOf();
            return (null == this.startMs || e >= this.startMs) && (null == this.endMs || e < this.endMs)
          }, t.prototype.constrainDate = function (t) {
            var e = t.valueOf();
            return null != this.startMs && e < this.startMs && (e = this.startMs), null != this.endMs && e >= this.endMs && (e = this.endMs - 1), e
          }, t.prototype.equals = function (t) {
            return this.startMs === t.startMs && this.endMs === t.endMs
          }, t.prototype.clone = function () {
            var e = new t(this.startMs, this.endMs);
            return e.isStart = this.isStart, e.isEnd = this.isEnd, e
          }, t.prototype.getStart = function () {
            return null != this.startMs ? i.default.utc(this.startMs).stripZone() : null
          }, t.prototype.getEnd = function () {
            return null != this.endMs ? i.default.utc(this.endMs).stripZone() : null
          }, t.prototype.as = function (t) {
            return r.utc(this.endMs).diff(r.utc(this.startMs), t, !0)
          }, t
        }();

      function s(t, e) {
        return t.startMs - e.startMs
      }
      e.default = o
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(2),
        i = n(3),
        o = n(208),
        s = n(32),
        a = n(49),
        l = function (t) {
          function e(n) {
            var r = t.call(this) || this;
            return r.calendar = n, r.className = [], r.uid = String(e.uuid++), r
          }
          return r.__extends(e, t), e.parse = function (t, e) {
            var n = new this(e);
            return !("object" != typeof t || !n.applyProps(t)) && n
          }, e.normalizeId = function (t) {
            return t ? String(t) : null
          }, e.prototype.fetch = function (t, e, n) {}, e.prototype.removeEventDefsById = function (t) {}, e.prototype.removeAllEventDefs = function () {}, e.prototype.getPrimitive = function (t) {}, e.prototype.parseEventDefs = function (t) {
            var e, n, r = [];
            for (e = 0; e < t.length; e++)(n = this.parseEventDef(t[e])) && r.push(n);
            return r
          }, e.prototype.parseEventDef = function (t) {
            var e = this.calendar.opt("eventDataTransform"),
              n = this.eventDataTransform;
            return e && (t = e(t, this.calendar)), n && (t = n(t, this.calendar)), a.default.parse(t, this)
          }, e.prototype.applyManualStandardProps = function (t) {
            return null != t.id && (this.id = e.normalizeId(t.id)), i.isArray(t.className) ? this.className = t.className : "string" == typeof t.className && (this.className = t.className.split(/\s+/)), !0
          }, e.uuid = 0, e.defineStandardProps = o.default.defineStandardProps, e.copyVerbatimStandardProps = o.default.copyVerbatimStandardProps, e
        }(s.default);
      e.default = l, o.default.mixInto(l), l.defineStandardProps({
        id: !1,
        className: !1,
        color: !0,
        backgroundColor: !0,
        borderColor: !0,
        textColor: !0,
        editable: !0,
        startEditable: !0,
        durationEditable: !0,
        rendering: !0,
        overlap: !0,
        constraint: !0,
        allDayDefault: !0,
        eventDataTransform: !0
      })
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(2),
        i = n(3),
        o = 0,
        s = function (t) {
          function e() {
            return null !== t && t.apply(this, arguments) || this
          }
          return r.__extends(e, t), e.prototype.listenTo = function (t, e, n) {
            if ("object" == typeof e)
              for (var r in e) e.hasOwnProperty(r) && this.listenTo(t, r, e[r]);
            else "string" == typeof e && t.on(e + "." + this.getListenerNamespace(), i.proxy(n, this))
          }, e.prototype.stopListeningTo = function (t, e) {
            t.off((e || "") + "." + this.getListenerNamespace())
          }, e.prototype.getListenerNamespace = function () {
            return null == this.listenerId && (this.listenerId = o++), "_listener" + this.listenerId
          }, e
        }(n(14).default);
      e.default = s
    }, , , function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(0),
        i = n(3),
        o = n(4),
        s = /^\s*\d{4}-\d\d$/,
        a = /^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?)?$/,
        l = r.fn;
      e.newMomentProto = l;
      var u = i.extend({}, l);
      e.oldMomentProto = u;
      var c = r.momentProperties;
      c.push("_fullCalendar"), c.push("_ambigTime"), c.push("_ambigZone"), e.oldMomentFormat = function (t, e) {
        return u.format.call(t, e)
      };
      var d = function () {
        return h(arguments)
      };

      function h(t, e, n) {
        void 0 === e && (e = !1), void 0 === n && (n = !1);
        var l, u, c, d, h = t[0],
          f = 1 === t.length && "string" == typeof h;
        return r.isMoment(h) || o.isNativeDate(h) || void 0 === h ? d = r.apply(null, t) : (l = !1, u = !1, f ? s.test(h) ? (t = [h += "-01"], l = !0, u = !0) : (c = a.exec(h)) && (l = !c[5], u = !0) : i.isArray(h) && (u = !0), d = e || l ? r.utc.apply(r, t) : r.apply(null, t), l ? (d._ambigTime = !0, d._ambigZone = !0) : n && (u ? d._ambigZone = !0 : f && d.utcOffset(h))), d._fullCalendar = !0, d
      }
      e.default = d, d.utc = function () {
        var t = h(arguments, !0);
        return t.hasTime() && t.utc(), t
      }, d.parseZone = function () {
        return h(arguments, !0, !0)
      }, l.week = l.weeks = function (t) {
        var e = this._locale._fullCalendar_weekCalc;
        return null == t && "function" == typeof e ? e(this) : "ISO" === e ? u.isoWeek.apply(this, arguments) : u.week.apply(this, arguments)
      }, l.time = function (t) {
        if (!this._fullCalendar) return u.time.apply(this, arguments);
        if (null == t) return r.duration({
          hours: this.hours(),
          minutes: this.minutes(),
          seconds: this.seconds(),
          milliseconds: this.milliseconds()
        });
        this._ambigTime = !1, r.isDuration(t) || r.isMoment(t) || (t = r.duration(t));
        var e = 0;
        return r.isDuration(t) && (e = 24 * Math.floor(t.asDays())), this.hours(e + t.hours()).minutes(t.minutes()).seconds(t.seconds()).milliseconds(t.milliseconds())
      }, l.stripTime = function () {
        return this._ambigTime || (this.utc(!0), this.set({
          hours: 0,
          minutes: 0,
          seconds: 0,
          ms: 0
        }), this._ambigTime = !0, this._ambigZone = !0), this
      }, l.hasTime = function () {
        return !this._ambigTime
      }, l.stripZone = function () {
        var t;
        return this._ambigZone || (t = this._ambigTime, this.utc(!0), this._ambigTime = t || !1, this._ambigZone = !0), this
      }, l.hasZone = function () {
        return !this._ambigZone
      }, l.local = function (t) {
        return u.local.call(this, this._ambigZone || t), this._ambigTime = !1, this._ambigZone = !1, this
      }, l.utc = function (t) {
        return u.utc.call(this, t), this._ambigTime = !1, this._ambigZone = !1, this
      }, l.utcOffset = function (t) {
        return null != t && (this._ambigTime = !1, this._ambigZone = !1), u.utcOffset.apply(this, arguments)
      }
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(2),
        i = n(3),
        o = function (t) {
          function e() {
            return null !== t && t.apply(this, arguments) || this
          }
          return r.__extends(e, t), e.prototype.on = function (t, e) {
            return i(this).on(t, this._prepareIntercept(e)), this
          }, e.prototype.one = function (t, e) {
            return i(this).one(t, this._prepareIntercept(e)), this
          }, e.prototype._prepareIntercept = function (t) {
            var e = function (e, n) {
              return t.apply(n.context || this, n.args || [])
            };
            return t.guid || (t.guid = i.guid++), e.guid = t.guid, e
          }, e.prototype.off = function (t, e) {
            return i(this).off(t, e), this
          }, e.prototype.trigger = function (t) {
            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            return i(this).triggerHandler(t, {
              args: e
            }), this
          }, e.prototype.triggerWith = function (t, e, n) {
            return i(this).triggerHandler(t, {
              context: e,
              args: n
            }), this
          }, e.prototype.hasHandlers = function (t) {
            var e = i._data(this, "events");
            return e && e[t] && e[t].length > 0
          }, e
        }(n(14).default);
      e.default = o
    }, function (t, e) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var n = function () {
        function t(t, e) {
          this.isAllDay = !1, this.unzonedRange = t, this.isAllDay = e
        }
        return t.prototype.toLegacy = function (t) {
          return {
            start: t.msToMoment(this.unzonedRange.startMs, this.isAllDay),
            end: t.msToMoment(this.unzonedRange.endMs, this.isAllDay)
          }
        }, t
      }();
      e.default = n
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(2),
        i = n(33),
        o = n(209),
        s = n(17),
        a = function (t) {
          function e() {
            return null !== t && t.apply(this, arguments) || this
          }
          return r.__extends(e, t), e.prototype.buildInstances = function () {
            return [this.buildInstance()]
          }, e.prototype.buildInstance = function () {
            return new o.default(this, this.dateProfile)
          }, e.prototype.isAllDay = function () {
            return this.dateProfile.isAllDay()
          }, e.prototype.clone = function () {
            var e = t.prototype.clone.call(this);
            return e.dateProfile = this.dateProfile, e
          }, e.prototype.rezone = function () {
            var t = this.source.calendar,
              e = this.dateProfile;
            this.dateProfile = new s.default(t.moment(e.start), e.end ? t.moment(e.end) : null, t)
          }, e.prototype.applyManualStandardProps = function (e) {
            var n = t.prototype.applyManualStandardProps.call(this, e),
              r = s.default.parse(e, this.source);
            return !!r && (this.dateProfile = r, null != e.date && (this.miscProps.date = e.date), n)
          }, e
        }(i.default);
      e.default = a, a.defineStandardProps({
        start: !1,
        date: !1,
        end: !1,
        allDay: !1
      })
    }, function (t, e) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var n = function () {
        function t() {}
        return t.mixInto = function (t) {
          var e = this;
          Object.getOwnPropertyNames(this.prototype).forEach(function (n) {
            t.prototype[n] || (t.prototype[n] = e.prototype[n])
          })
        }, t.mixOver = function (t) {
          var e = this;
          Object.getOwnPropertyNames(this.prototype).forEach(function (n) {
            t.prototype[n] = e.prototype[n]
          })
        }, t
      }();
      e.default = n
    }, function (t, e) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var n = function () {
        function t(t) {
          this.view = t._getView(), this.component = t
        }
        return t.prototype.opt = function (t) {
          return this.view.opt(t)
        }, t.prototype.end = function () {}, t
      }();
      e.default = n
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.version = "3.8.2", e.internalApiVersion = 12;
      var r = n(4);
      e.applyAll = r.applyAll, e.debounce = r.debounce, e.isInt = r.isInt, e.htmlEscape = r.htmlEscape, e.cssToStr = r.cssToStr, e.proxy = r.proxy, e.capitaliseFirstLetter = r.capitaliseFirstLetter, e.getOuterRect = r.getOuterRect, e.getClientRect = r.getClientRect, e.getContentRect = r.getContentRect, e.getScrollbarWidths = r.getScrollbarWidths, e.preventDefault = r.preventDefault, e.parseFieldSpecs = r.parseFieldSpecs, e.compareByFieldSpecs = r.compareByFieldSpecs, e.compareByFieldSpec = r.compareByFieldSpec, e.flexibleCompare = r.flexibleCompare, e.computeGreatestUnit = r.computeGreatestUnit, e.divideRangeByDuration = r.divideRangeByDuration, e.divideDurationByDuration = r.divideDurationByDuration, e.multiplyDuration = r.multiplyDuration, e.durationHasTime = r.durationHasTime, e.log = r.log, e.warn = r.warn, e.removeExact = r.removeExact, e.intersectRects = r.intersectRects;
      var i = n(47);
      e.formatDate = i.formatDate, e.formatRange = i.formatRange, e.queryMostGranularFormatUnit = i.queryMostGranularFormatUnit;
      var o = n(30);
      e.datepickerLocale = o.datepickerLocale, e.locale = o.locale;
      var s = n(10);
      e.moment = s.default;
      var a = n(11);
      e.EmitterMixin = a.default;
      var l = n(7);
      e.ListenerMixin = l.default;
      var u = n(48);
      e.Model = u.default;
      var c = n(207);
      e.Constraints = c.default;
      var d = n(5);
      e.UnzonedRange = d.default;
      var h = n(12);
      e.ComponentFootprint = h.default;
      var f = n(212);
      e.BusinessHourGenerator = f.default;
      var p = n(33);
      e.EventDef = p.default;
      var g = n(36);
      e.EventDefMutation = g.default;
      var m = n(37);
      e.EventSourceParser = m.default;
      var v = n(6);
      e.EventSource = v.default;
      var y = n(51);
      e.defineThemeSystem = y.defineThemeSystem;
      var b = n(18);
      e.EventInstanceGroup = b.default;
      var w = n(52);
      e.ArrayEventSource = w.default;
      var _ = n(215);
      e.FuncEventSource = _.default;
      var S = n(216);
      e.JsonFeedEventSource = S.default;
      var D = n(35);
      e.EventFootprint = D.default;
      var x = n(32);
      e.Class = x.default;
      var C = n(14);
      e.Mixin = C.default;
      var T = n(53);
      e.CoordCache = T.default;
      var E = n(54);
      e.DragListener = E.default;
      var M = n(19);
      e.Promise = M.default;
      var I = n(217);
      e.TaskQueue = I.default;
      var R = n(218);
      e.RenderQueue = R.default;
      var A = n(39);
      e.Scroller = A.default;
      var P = n(38);
      e.Theme = P.default;
      var O = n(219);
      e.DateComponent = O.default;
      var k = n(40);
      e.InteractiveDateComponent = k.default;
      var H = n(220);
      e.Calendar = H.default;
      var N = n(41);
      e.View = N.default;
      var L = n(21);
      e.defineView = L.defineView, e.getViewConfig = L.getViewConfig;
      var F = n(55);
      e.DayTableMixin = F.default;
      var j = n(56);
      e.BusinessHourRenderer = j.default;
      var B = n(42);
      e.EventRenderer = B.default;
      var z = n(57);
      e.FillRenderer = z.default;
      var W = n(58);
      e.HelperRenderer = W.default;
      var Y = n(222);
      e.ExternalDropping = Y.default;
      var U = n(223);
      e.EventResizing = U.default;
      var V = n(59);
      e.EventPointing = V.default;
      var G = n(224);
      e.EventDragging = G.default;
      var q = n(225);
      e.DateSelecting = q.default;
      var X = n(60);
      e.StandardInteractionsMixin = X.default;
      var $ = n(226);
      e.AgendaView = $.default;
      var Q = n(227);
      e.TimeGrid = Q.default;
      var Z = n(61);
      e.DayGrid = Z.default;
      var K = n(62);
      e.BasicView = K.default;
      var J = n(229);
      e.MonthView = J.default;
      var tt = n(230);
      e.ListView = tt.default
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(5),
        i = function () {
          function t(t, e, n) {
            this.start = t, this.end = e || null, this.unzonedRange = this.buildUnzonedRange(n)
          }
          return t.parse = function (e, n) {
            var r = e.start || e.date,
              i = e.end;
            if (!r) return !1;
            var o = n.calendar,
              s = o.moment(r),
              a = i ? o.moment(i) : null,
              l = e.allDay,
              u = o.opt("forceEventDuration");
            return !!s.isValid() && (!a || a.isValid() && a.isAfter(s) || (a = null), null == l && null == (l = n.allDayDefault) && (l = o.opt("allDayDefault")), !0 === l ? (s.stripTime(), a && a.stripTime()) : !1 === l && (s.hasTime() || s.time(0), a && !a.hasTime() && a.time(0)), !a && u && (a = o.getDefaultEventEnd(!s.hasTime(), s)), new t(s, a, o))
          }, t.isStandardProp = function (t) {
            return "start" === t || "date" === t || "end" === t || "allDay" === t
          }, t.prototype.isAllDay = function () {
            return !(this.start.hasTime() || this.end && this.end.hasTime())
          }, t.prototype.buildUnzonedRange = function (t) {
            var e = this.start.clone().stripZone().valueOf(),
              n = this.getEnd(t).stripZone().valueOf();
            return new r.default(e, n)
          }, t.prototype.getEnd = function (t) {
            return this.end ? this.end.clone() : t.getDefaultEventEnd(this.isAllDay(), this.start)
          }, t
        }();
      e.default = i
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(5),
        i = n(34),
        o = n(211),
        s = function () {
          function t(t) {
            this.eventInstances = t || []
          }
          return t.prototype.getAllEventRanges = function (t) {
            return t ? this.sliceNormalRenderRanges(t) : this.eventInstances.map(i.eventInstanceToEventRange)
          }, t.prototype.sliceRenderRanges = function (t) {
            return this.isInverse() ? this.sliceInverseRenderRanges(t) : this.sliceNormalRenderRanges(t)
          }, t.prototype.sliceNormalRenderRanges = function (t) {
            var e, n, r, i = this.eventInstances,
              s = [];
            for (e = 0; e < i.length; e++)(r = (n = i[e]).dateProfile.unzonedRange.intersect(t)) && s.push(new o.default(r, n.def, n));
            return s
          }, t.prototype.sliceInverseRenderRanges = function (t) {
            var e = this.eventInstances.map(i.eventInstanceToUnzonedRange),
              n = this.getEventDef();
            return (e = r.default.invertRanges(e, t)).map(function (t) {
              return new o.default(t, n)
            })
          }, t.prototype.isInverse = function () {
            return this.getEventDef().hasInverseRendering()
          }, t.prototype.getEventDef = function () {
            return this.explicitEventDef || this.eventInstances[0].def
          }, t
        }();
      e.default = s
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(3),
        i = {
          construct: function (t) {
            var e = r.Deferred(),
              n = e.promise();
            return "function" == typeof t && t(function (t) {
              e.resolve(t), o(n, t)
            }, function () {
              e.reject(), s(n)
            }), n
          },
          resolve: function (t) {
            var e = r.Deferred().resolve(t).promise();
            return o(e, t), e
          },
          reject: function () {
            var t = r.Deferred().reject().promise();
            return s(t), t
          }
        };

      function o(t, e) {
        t.then = function (n) {
          return "function" == typeof n ? i.resolve(n(e)) : t
        }
      }

      function s(t) {
        t.then = function (e, n) {
          return "function" == typeof n && n(), t
        }
      }
      e.default = i
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(3),
        i = n(16),
        o = n(11),
        s = n(7);
      i.touchMouseIgnoreWait = 500;
      var a = null,
        l = 0,
        u = function () {
          function t() {
            this.isTouching = !1, this.mouseIgnoreDepth = 0
          }
          return t.get = function () {
            return a || (a = new t).bind(), a
          }, t.needed = function () {
            t.get(), l++
          }, t.unneeded = function () {
            --l || (a.unbind(), a = null)
          }, t.prototype.bind = function () {
            var t = this;
            this.listenTo(r(document), {
              touchstart: this.handleTouchStart,
              touchcancel: this.handleTouchCancel,
              touchend: this.handleTouchEnd,
              mousedown: this.handleMouseDown,
              mousemove: this.handleMouseMove,
              mouseup: this.handleMouseUp,
              click: this.handleClick,
              selectstart: this.handleSelectStart,
              contextmenu: this.handleContextMenu
            }), window.addEventListener("touchmove", this.handleTouchMoveProxy = function (e) {
              t.handleTouchMove(r.Event(e))
            }, {
              passive: !1
            }), window.addEventListener("scroll", this.handleScrollProxy = function (e) {
              t.handleScroll(r.Event(e))
            }, !0)
          }, t.prototype.unbind = function () {
            this.stopListeningTo(r(document)), window.removeEventListener("touchmove", this.handleTouchMoveProxy), window.removeEventListener("scroll", this.handleScrollProxy, !0)
          }, t.prototype.handleTouchStart = function (t) {
            this.stopTouch(t, !0), this.isTouching = !0, this.trigger("touchstart", t)
          }, t.prototype.handleTouchMove = function (t) {
            this.isTouching && this.trigger("touchmove", t)
          }, t.prototype.handleTouchCancel = function (t) {
            this.isTouching && (this.trigger("touchcancel", t), this.stopTouch(t))
          }, t.prototype.handleTouchEnd = function (t) {
            this.stopTouch(t)
          }, t.prototype.handleMouseDown = function (t) {
            this.shouldIgnoreMouse() || this.trigger("mousedown", t)
          }, t.prototype.handleMouseMove = function (t) {
            this.shouldIgnoreMouse() || this.trigger("mousemove", t)
          }, t.prototype.handleMouseUp = function (t) {
            this.shouldIgnoreMouse() || this.trigger("mouseup", t)
          }, t.prototype.handleClick = function (t) {
            this.shouldIgnoreMouse() || this.trigger("click", t)
          }, t.prototype.handleSelectStart = function (t) {
            this.trigger("selectstart", t)
          }, t.prototype.handleContextMenu = function (t) {
            this.trigger("contextmenu", t)
          }, t.prototype.handleScroll = function (t) {
            this.trigger("scroll", t)
          }, t.prototype.stopTouch = function (t, e) {
            void 0 === e && (e = !1), this.isTouching && (this.isTouching = !1, this.trigger("touchend", t), e || this.startTouchMouseIgnore())
          }, t.prototype.startTouchMouseIgnore = function () {
            var t = this,
              e = i.touchMouseIgnoreWait;
            e && (this.mouseIgnoreDepth++, setTimeout(function () {
              t.mouseIgnoreDepth--
            }, e))
          }, t.prototype.shouldIgnoreMouse = function () {
            return this.isTouching || Boolean(this.mouseIgnoreDepth)
          }, t
        }();
      e.default = u, s.default.mixInto(u), o.default.mixInto(u)
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(16);
      e.viewHash = {}, r.views = e.viewHash, e.defineView = function (t, n) {
        e.viewHash[t] = n
      }, e.getViewConfig = function (t) {
        return e.viewHash[t]
      }
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(2),
        i = n(4),
        o = function (t) {
          function e(e, n) {
            var r = t.call(this, n) || this;
            return r.component = e, r
          }
          return r.__extends(e, t), e.prototype.handleInteractionStart = function (e) {
            var n, r, o, s = this.subjectEl;
            this.component.hitsNeeded(), this.computeScrollBounds(), e ? (o = r = {
              left: i.getEvX(e),
              top: i.getEvY(e)
            }, s && (n = i.getOuterRect(s), o = i.constrainPoint(o, n)), this.origHit = this.queryHit(o.left, o.top), s && this.options.subjectCenter && (this.origHit && (n = i.intersectRects(this.origHit, n) || n), o = i.getRectCenter(n)), this.coordAdjust = i.diffPoints(o, r)) : (this.origHit = null, this.coordAdjust = null), t.prototype.handleInteractionStart.call(this, e)
          }, e.prototype.handleDragStart = function (e) {
            var n;
            t.prototype.handleDragStart.call(this, e), (n = this.queryHit(i.getEvX(e), i.getEvY(e))) && this.handleHitOver(n)
          }, e.prototype.handleDrag = function (e, n, r) {
            var o;
            t.prototype.handleDrag.call(this, e, n, r), s(o = this.queryHit(i.getEvX(r), i.getEvY(r)), this.hit) || (this.hit && this.handleHitOut(), o && this.handleHitOver(o))
          }, e.prototype.handleDragEnd = function (e) {
            this.handleHitDone(), t.prototype.handleDragEnd.call(this, e)
          }, e.prototype.handleHitOver = function (t) {
            var e = s(t, this.origHit);
            this.hit = t, this.trigger("hitOver", this.hit, e, this.origHit)
          }, e.prototype.handleHitOut = function () {
            this.hit && (this.trigger("hitOut", this.hit), this.handleHitDone(), this.hit = null)
          }, e.prototype.handleHitDone = function () {
            this.hit && this.trigger("hitDone", this.hit)
          }, e.prototype.handleInteractionEnd = function (e, n) {
            t.prototype.handleInteractionEnd.call(this, e, n), this.origHit = null, this.hit = null, this.component.hitsNotNeeded()
          }, e.prototype.handleScrollEnd = function () {
            t.prototype.handleScrollEnd.call(this), this.isDragging && (this.component.releaseHits(), this.component.prepareHits())
          }, e.prototype.queryHit = function (t, e) {
            return this.coordAdjust && (t += this.coordAdjust.left, e += this.coordAdjust.top), this.component.queryHit(t, e)
          }, e
        }(n(54).default);

      function s(t, e) {
        return !t && !e || !(!t || !e) && (t.component === e.component && a(t, e) && a(e, t))
      }

      function a(t, e) {
        for (var n in t)
          if (!/^(component|left|right|top|bottom)$/.test(n) && t[n] !== e[n]) return !1;
        return !0
      }
      e.default = o
    }, , , , , , , , function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(3),
        i = n(0),
        o = n(16),
        s = n(31),
        a = n(4);
      e.localeOptionHash = {}, o.locales = e.localeOptionHash;
      var l = {
          buttonText: function (t) {
            return {
              prev: a.stripHtmlEntities(t.prevText),
              next: a.stripHtmlEntities(t.nextText),
              today: a.stripHtmlEntities(t.currentText)
            }
          },
          monthYearFormat: function (t) {
            return t.showMonthAfterYear ? "YYYY[" + t.yearSuffix + "] MMMM" : "MMMM YYYY[" + t.yearSuffix + "]"
          }
        },
        u = {
          dayOfMonthFormat: function (t, e) {
            var n = t.longDateFormat("l");
            return n = n.replace(/^Y+[^\w\s]*|[^\w\s]*Y+$/g, ""), e.isRTL ? n += " ddd" : n = "ddd " + n, n
          },
          mediumTimeFormat: function (t) {
            return t.longDateFormat("LT").replace(/\s*a$/i, "a")
          },
          smallTimeFormat: function (t) {
            return t.longDateFormat("LT").replace(":mm", "(:mm)").replace(/(\Wmm)$/, "($1)").replace(/\s*a$/i, "a")
          },
          extraSmallTimeFormat: function (t) {
            return t.longDateFormat("LT").replace(":mm", "(:mm)").replace(/(\Wmm)$/, "($1)").replace(/\s*a$/i, "t")
          },
          hourFormat: function (t) {
            return t.longDateFormat("LT").replace(":mm", "").replace(/(\Wmm)$/, "").replace(/\s*a$/i, "a")
          },
          noMeridiemTimeFormat: function (t) {
            return t.longDateFormat("LT").replace(/\s*a$/i, "")
          }
        },
        c = {
          smallDayDateFormat: function (t) {
            return t.isRTL ? "D dd" : "dd D"
          },
          weekFormat: function (t) {
            return t.isRTL ? "w[ " + t.weekNumberTitle + "]" : "[" + t.weekNumberTitle + " ]w"
          },
          smallWeekFormat: function (t) {
            return t.isRTL ? "w[" + t.weekNumberTitle + "]" : "[" + t.weekNumberTitle + "]w"
          }
        };

      function d(t, n) {
        var i, o;
        i = e.localeOptionHash[t] || (e.localeOptionHash[t] = {}), n && (i = e.localeOptionHash[t] = s.mergeOptions([i, n])), o = h(t), r.each(u, function (t, e) {
          null == i[t] && (i[t] = e(o, i))
        }), s.globalDefaults.locale = t
      }

      function h(t) {
        return i.localeData(t) || i.localeData("en")
      }
      e.populateInstanceComputableOptions = function (t) {
        r.each(c, function (e, n) {
          null == t[e] && (t[e] = n(t))
        })
      }, e.datepickerLocale = function (t, n, i) {
        var o = e.localeOptionHash[t] || (e.localeOptionHash[t] = {});
        o.isRTL = i.isRTL, o.weekNumberTitle = i.weekHeader, r.each(l, function (t, e) {
          o[t] = e(i)
        });
        var s = r.datepicker;
        s && (s.regional[n] = s.regional[t] = i, s.regional.en = s.regional[""], s.setDefaults(i))
      }, e.locale = d, e.getMomentLocaleData = h, d("en", s.englishDefaults)
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(4);
      e.globalDefaults = {
        titleRangeSeparator: " – ",
        monthYearFormat: "MMMM YYYY",
        defaultTimedEventDuration: "02:00:00",
        defaultAllDayEventDuration: {
          days: 1
        },
        forceEventDuration: !1,
        nextDayThreshold: "09:00:00",
        columnHeader: !0,
        defaultView: "month",
        aspectRatio: 1.35,
        header: {
          left: "title",
          center: "",
          right: "today prev,next"
        },
        weekends: !0,
        weekNumbers: !1,
        weekNumberTitle: "W",
        weekNumberCalculation: "local",
        scrollTime: "06:00:00",
        minTime: "00:00:00",
        maxTime: "24:00:00",
        showNonCurrentDates: !0,
        lazyFetching: !0,
        startParam: "start",
        endParam: "end",
        timezoneParam: "timezone",
        timezone: !1,
        locale: null,
        isRTL: !1,
        buttonText: {
          prev: "prev",
          next: "next",
          prevYear: "prev year",
          nextYear: "next year",
          year: "year",
          today: "today",
          month: "month",
          week: "week",
          day: "day"
        },
        allDayText: "all-day",
        agendaEventMinHeight: 0,
        theme: !1,
        dragOpacity: .75,
        dragRevertDuration: 500,
        dragScroll: !0,
        unselectAuto: !0,
        dropAccept: "*",
        eventOrder: "title",
        eventLimit: !1,
        eventLimitText: "more",
        eventLimitClick: "popover",
        dayPopoverFormat: "LL",
        handleWindowResize: !0,
        windowResizeDelay: 100,
        longPressDelay: 1e3
      }, e.englishDefaults = {
        dayPopoverFormat: "dddd, MMMM D"
      }, e.rtlDefaults = {
        header: {
          left: "next,prev today",
          center: "",
          right: "title"
        },
        buttonIcons: {
          prev: "right-single-arrow",
          next: "left-single-arrow",
          prevYear: "right-double-arrow",
          nextYear: "left-double-arrow"
        },
        themeButtonIcons: {
          prev: "circle-triangle-e",
          next: "circle-triangle-w",
          nextYear: "seek-prev",
          prevYear: "seek-next"
        }
      };
      var i = ["header", "footer", "buttonText", "buttonIcons", "themeButtonIcons"];
      e.mergeOptions = function (t) {
        return r.mergeProps(t, i)
      }
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(2),
        i = n(4),
        o = function () {
          function t() {}
          return t.extend = function (t) {
            var e = function (t) {
              function e() {
                return null !== t && t.apply(this, arguments) || this
              }
              return r.__extends(e, t), e
            }(this);
            return i.copyOwnProps(t, e.prototype), e
          }, t.mixin = function (t) {
            i.copyOwnProps(t, this.prototype)
          }, t
        }();
      e.default = o
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(3),
        i = n(208),
        o = function () {
          function t(t) {
            this.source = t, this.className = [], this.miscProps = {}
          }
          return t.parse = function (t, e) {
            var n = new this(e);
            return !!n.applyProps(t) && n
          }, t.normalizeId = function (t) {
            return String(t)
          }, t.generateId = function () {
            return "_fc" + t.uuid++
          }, t.prototype.clone = function () {
            var e = new this.constructor(this.source);
            return e.id = this.id, e.rawId = this.rawId, e.uid = this.uid, t.copyVerbatimStandardProps(this, e), e.className = this.className.slice(), e.miscProps = r.extend({}, this.miscProps), e
          }, t.prototype.hasInverseRendering = function () {
            return "inverse-background" === this.getRendering()
          }, t.prototype.hasBgRendering = function () {
            var t = this.getRendering();
            return "inverse-background" === t || "background" === t
          }, t.prototype.getRendering = function () {
            return null != this.rendering ? this.rendering : this.source.rendering
          }, t.prototype.getConstraint = function () {
            return null != this.constraint ? this.constraint : null != this.source.constraint ? this.source.constraint : this.source.calendar.opt("eventConstraint")
          }, t.prototype.getOverlap = function () {
            return null != this.overlap ? this.overlap : null != this.source.overlap ? this.source.overlap : this.source.calendar.opt("eventOverlap")
          }, t.prototype.isStartExplicitlyEditable = function () {
            return null != this.startEditable ? this.startEditable : this.source.startEditable
          }, t.prototype.isDurationExplicitlyEditable = function () {
            return null != this.durationEditable ? this.durationEditable : this.source.durationEditable
          }, t.prototype.isExplicitlyEditable = function () {
            return null != this.editable ? this.editable : this.source.editable
          }, t.prototype.toLegacy = function () {
            var e = r.extend({}, this.miscProps);
            return e._id = this.uid, e.source = this.source, e.className = this.className.slice(), e.allDay = this.isAllDay(), null != this.rawId && (e.id = this.rawId), t.copyVerbatimStandardProps(this, e), e
          }, t.prototype.applyManualStandardProps = function (e) {
            return null != e.id ? this.id = t.normalizeId(this.rawId = e.id) : this.id = t.generateId(), null != e._id ? this.uid = String(e._id) : this.uid = t.generateId(), r.isArray(e.className) && (this.className = e.className), "string" == typeof e.className && (this.className = e.className.split(/\s+/)), !0
          }, t.prototype.applyMiscProps = function (t) {
            r.extend(this.miscProps, t)
          }, t.uuid = 0, t.defineStandardProps = i.default.defineStandardProps, t.copyVerbatimStandardProps = i.default.copyVerbatimStandardProps, t
        }();
      e.default = o, i.default.mixInto(o), o.defineStandardProps({
        _id: !1,
        id: !1,
        className: !1,
        source: !1,
        title: !0,
        url: !0,
        rendering: !0,
        constraint: !0,
        overlap: !0,
        editable: !0,
        startEditable: !0,
        durationEditable: !0,
        color: !0,
        backgroundColor: !0,
        borderColor: !0,
        textColor: !0
      })
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(211),
        i = n(35),
        o = n(12);
      e.eventDefsToEventInstances = function (t, e) {
        var n, r = [];
        for (n = 0; n < t.length; n++) r.push.apply(r, t[n].buildInstances(e));
        return r
      }, e.eventInstanceToEventRange = function (t) {
        return new r.default(t.dateProfile.unzonedRange, t.def, t)
      }, e.eventRangeToEventFootprint = function (t) {
        return new i.default(new o.default(t.unzonedRange, t.eventDef.isAllDay()), t.eventDef, t.eventInstance)
      }, e.eventInstanceToUnzonedRange = function (t) {
        return t.dateProfile.unzonedRange
      }, e.eventFootprintToComponentFootprint = function (t) {
        return t.componentFootprint
      }
    }, function (t, e) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var n = function () {
        function t(t, e, n) {
          this.componentFootprint = t, this.eventDef = e, n && (this.eventInstance = n)
        }
        return t.prototype.getEventLegacy = function () {
          return (this.eventInstance || this.eventDef).toLegacy()
        }, t
      }();
      e.default = n
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(4),
        i = n(17),
        o = n(33),
        s = n(50),
        a = n(13),
        l = function () {
          function t() {}
          return t.createFromRawProps = function (e, n, a) {
            var l, u, c, d, h = e.def,
              f = {},
              p = {},
              g = {},
              m = {},
              v = null,
              y = null;
            for (l in n) i.default.isStandardProp(l) ? f[l] = n[l] : h.isStandardProp(l) ? p[l] = n[l] : h.miscProps[l] !== n[l] && (g[l] = n[l]);
            return (u = i.default.parse(f, h.source)) && (c = s.default.createFromDiff(e.dateProfile, u, a)), p.id !== h.id && (v = p.id), r.isArraysEqual(p.className, h.className) || (y = p.className), o.default.copyVerbatimStandardProps(p, m), (d = new t).eventDefId = v, d.className = y, d.verbatimStandardProps = m, d.miscProps = g, c && (d.dateMutation = c), d
          }, t.prototype.mutateSingle = function (t) {
            var e;
            return this.dateMutation && (e = t.dateProfile, t.dateProfile = this.dateMutation.buildNewDateProfile(e, t.source.calendar)), null != this.eventDefId && (t.id = o.default.normalizeId(t.rawId = this.eventDefId)), this.className && (t.className = this.className), this.verbatimStandardProps && a.default.copyVerbatimStandardProps(this.verbatimStandardProps, t), this.miscProps && t.applyMiscProps(this.miscProps), e ? function () {
              t.dateProfile = e
            } : function () {}
          }, t.prototype.setDateMutation = function (t) {
            t && !t.isEmpty() ? this.dateMutation = t : this.dateMutation = null
          }, t.prototype.isEmpty = function () {
            return !this.dateMutation
          }, t
        }();
      e.default = l
    }, function (t, e) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = {
        sourceClasses: [],
        registerClass: function (t) {
          this.sourceClasses.unshift(t)
        },
        parse: function (t, e) {
          var n, r, i = this.sourceClasses;
          for (n = 0; n < i.length; n++)
            if (r = i[n].parse(t, e)) return r
        }
      }
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(3),
        i = function () {
          function t(t) {
            this.optionsManager = t, this.processIconOverride()
          }
          return t.prototype.processIconOverride = function () {
            this.iconOverrideOption && this.setIconOverride(this.optionsManager.get(this.iconOverrideOption))
          }, t.prototype.setIconOverride = function (t) {
            var e, n;
            if (r.isPlainObject(t)) {
              for (n in e = r.extend({}, this.iconClasses), t) e[n] = this.applyIconOverridePrefix(t[n]);
              this.iconClasses = e
            } else !1 === t && (this.iconClasses = {})
          }, t.prototype.applyIconOverridePrefix = function (t) {
            var e = this.iconOverridePrefix;
            return e && 0 !== t.indexOf(e) && (t = e + t), t
          }, t.prototype.getClass = function (t) {
            return this.classes[t] || ""
          }, t.prototype.getIconClass = function (t) {
            var e = this.iconClasses[t];
            return e ? this.baseIconClass + " " + e : ""
          }, t.prototype.getCustomButtonIconClass = function (t) {
            var e;
            return this.iconOverrideCustomButtonOption && (e = t[this.iconOverrideCustomButtonOption]) ? this.baseIconClass + " " + this.applyIconOverridePrefix(e) : ""
          }, t
        }();
      e.default = i, i.prototype.classes = {}, i.prototype.iconClasses = {}, i.prototype.baseIconClass = "", i.prototype.iconOverridePrefix = ""
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(2),
        i = n(3),
        o = n(4),
        s = function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return e = e || {}, n.overflowX = e.overflowX || e.overflow || "auto", n.overflowY = e.overflowY || e.overflow || "auto", n
          }
          return r.__extends(e, t), e.prototype.render = function () {
            this.el = this.renderEl(), this.applyOverflow()
          }, e.prototype.renderEl = function () {
            return this.scrollEl = i('<div class="fc-scroller"></div>')
          }, e.prototype.clear = function () {
            this.setHeight("auto"), this.applyOverflow()
          }, e.prototype.destroy = function () {
            this.el.remove()
          }, e.prototype.applyOverflow = function () {
            this.scrollEl.css({
              "overflow-x": this.overflowX,
              "overflow-y": this.overflowY
            })
          }, e.prototype.lockOverflow = function (t) {
            var e = this.overflowX,
              n = this.overflowY;
            t = t || this.getScrollbarWidths(), "auto" === e && (e = t.top || t.bottom || this.scrollEl[0].scrollWidth - 1 > this.scrollEl[0].clientWidth ? "scroll" : "hidden"), "auto" === n && (n = t.left || t.right || this.scrollEl[0].scrollHeight - 1 > this.scrollEl[0].clientHeight ? "scroll" : "hidden"), this.scrollEl.css({
              "overflow-x": e,
              "overflow-y": n
            })
          }, e.prototype.setHeight = function (t) {
            this.scrollEl.height(t)
          }, e.prototype.getScrollTop = function () {
            return this.scrollEl.scrollTop()
          }, e.prototype.setScrollTop = function (t) {
            this.scrollEl.scrollTop(t)
          }, e.prototype.getClientWidth = function () {
            return this.scrollEl[0].clientWidth
          }, e.prototype.getClientHeight = function () {
            return this.scrollEl[0].clientHeight
          }, e.prototype.getScrollbarWidths = function () {
            return o.getScrollbarWidths(this.scrollEl)
          }, e
        }(n(32).default);
      e.default = s
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(2),
        i = n(3),
        o = n(4),
        s = n(219),
        a = n(20),
        l = function (t) {
          function e(e, n) {
            var r = t.call(this, e, n) || this;
            return r.segSelector = ".fc-event-container > *", r.dateSelectingClass && (r.dateClicking = new r.dateClickingClass(r)), r.dateSelectingClass && (r.dateSelecting = new r.dateSelectingClass(r)), r.eventPointingClass && (r.eventPointing = new r.eventPointingClass(r)), r.eventDraggingClass && r.eventPointing && (r.eventDragging = new r.eventDraggingClass(r, r.eventPointing)), r.eventResizingClass && r.eventPointing && (r.eventResizing = new r.eventResizingClass(r, r.eventPointing)), r.externalDroppingClass && (r.externalDropping = new r.externalDroppingClass(r)), r
          }
          return r.__extends(e, t), e.prototype.setElement = function (e) {
            t.prototype.setElement.call(this, e), this.dateClicking && this.dateClicking.bindToEl(e), this.dateSelecting && this.dateSelecting.bindToEl(e), this.bindAllSegHandlersToEl(e)
          }, e.prototype.removeElement = function () {
            this.endInteractions(), t.prototype.removeElement.call(this)
          }, e.prototype.executeEventUnrender = function () {
            this.endInteractions(), t.prototype.executeEventUnrender.call(this)
          }, e.prototype.bindGlobalHandlers = function () {
            t.prototype.bindGlobalHandlers.call(this), this.externalDropping && this.externalDropping.bindToDocument()
          }, e.prototype.unbindGlobalHandlers = function () {
            t.prototype.unbindGlobalHandlers.call(this), this.externalDropping && this.externalDropping.unbindFromDocument()
          }, e.prototype.bindDateHandlerToEl = function (t, e, n) {
            var r = this;
            this.el.on(e, function (t) {
              if (!i(t.target).is(r.segSelector + ":not(.fc-helper)," + r.segSelector + ":not(.fc-helper) *,.fc-more,a[data-goto]")) return n.call(r, t)
            })
          }, e.prototype.bindAllSegHandlersToEl = function (t) {
            [this.eventPointing, this.eventDragging, this.eventResizing].forEach(function (e) {
              e && e.bindToEl(t)
            })
          }, e.prototype.bindSegHandlerToEl = function (t, e, n) {
            var r = this;
            t.on(e, this.segSelector, function (t) {
              var e = i(t.currentTarget);
              if (!e.is(".fc-helper")) {
                var o = e.data("fc-seg");
                if (o && !r.shouldIgnoreEventPointing()) return n.call(r, o, t)
              }
            })
          }, e.prototype.shouldIgnoreMouse = function () {
            return a.default.get().shouldIgnoreMouse()
          }, e.prototype.shouldIgnoreTouch = function () {
            var t = this._getView();
            return t.isSelected || t.selectedEvent
          }, e.prototype.shouldIgnoreEventPointing = function () {
            return this.eventDragging && this.eventDragging.isDragging || this.eventResizing && this.eventResizing.isResizing
          }, e.prototype.canStartSelection = function (t, e) {
            return o.getEvIsTouch(e) && !this.canStartResize(t, e) && (this.isEventDefDraggable(t.footprint.eventDef) || this.isEventDefResizable(t.footprint.eventDef))
          }, e.prototype.canStartDrag = function (t, e) {
            return !this.canStartResize(t, e) && this.isEventDefDraggable(t.footprint.eventDef)
          }, e.prototype.canStartResize = function (t, e) {
            var n = this._getView(),
              r = t.footprint.eventDef;
            return (!o.getEvIsTouch(e) || n.isEventDefSelected(r)) && this.isEventDefResizable(r) && i(e.target).is(".fc-resizer")
          }, e.prototype.endInteractions = function () {
            [this.dateClicking, this.dateSelecting, this.eventPointing, this.eventDragging, this.eventResizing].forEach(function (t) {
              t && t.end()
            })
          }, e.prototype.isEventDefDraggable = function (t) {
            return this.isEventDefStartEditable(t)
          }, e.prototype.isEventDefStartEditable = function (t) {
            var e = t.isStartExplicitlyEditable();
            return null == e && null == (e = this.opt("eventStartEditable")) && (e = this.isEventDefGenerallyEditable(t)), e
          }, e.prototype.isEventDefGenerallyEditable = function (t) {
            var e = t.isExplicitlyEditable();
            return null == e && (e = this.opt("editable")), e
          }, e.prototype.isEventDefResizableFromStart = function (t) {
            return this.opt("eventResizableFromStart") && this.isEventDefResizable(t)
          }, e.prototype.isEventDefResizableFromEnd = function (t) {
            return this.isEventDefResizable(t)
          }, e.prototype.isEventDefResizable = function (t) {
            var e = t.isDurationExplicitlyEditable();
            return null == e && null == (e = this.opt("eventDurationEditable")) && (e = this.isEventDefGenerallyEditable(t)), e
          }, e.prototype.diffDates = function (t, e) {
            return this.largeUnit ? o.diffByUnit(t, e, this.largeUnit) : o.diffDayTime(t, e)
          }, e.prototype.isEventInstanceGroupAllowed = function (t) {
            var e, n = this._getView(),
              r = this.dateProfile,
              i = this.eventRangesToEventFootprints(t.getAllEventRanges());
            for (e = 0; e < i.length; e++)
              if (!r.validUnzonedRange.containsRange(i[e].componentFootprint.unzonedRange)) return !1;
            return n.calendar.constraints.isEventInstanceGroupAllowed(t)
          }, e.prototype.isExternalInstanceGroupAllowed = function (t) {
            var e, n = this._getView(),
              r = this.dateProfile,
              i = this.eventRangesToEventFootprints(t.getAllEventRanges());
            for (e = 0; e < i.length; e++)
              if (!r.validUnzonedRange.containsRange(i[e].componentFootprint.unzonedRange)) return !1;
            for (e = 0; e < i.length; e++)
              if (!n.calendar.constraints.isSelectionFootprintAllowed(i[e].componentFootprint)) return !1;
            return !0
          }, e
        }(s.default);
      e.default = l
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(2),
        i = n(3),
        o = n(0),
        s = n(4),
        a = n(218),
        l = n(221),
        u = n(40),
        c = n(20),
        d = n(5),
        h = function (t) {
          function e(e, n) {
            var r = t.call(this, null, n.options) || this;
            return r.batchRenderDepth = 0, r.isSelected = !1, r.calendar = e, r.viewSpec = n, r.type = n.type, r.name = r.type, r.initRenderQueue(), r.initHiddenDays(), r.dateProfileGenerator = new r.dateProfileGeneratorClass(r), r.bindBaseRenderHandlers(), r.eventOrderSpecs = s.parseFieldSpecs(r.opt("eventOrder")), r.initialize && r.initialize(), r
          }
          return r.__extends(e, t), e.prototype._getView = function () {
            return this
          }, e.prototype.opt = function (t) {
            return this.options[t]
          }, e.prototype.initRenderQueue = function () {
            this.renderQueue = new a.default({
              event: this.opt("eventRenderWait")
            }), this.renderQueue.on("start", this.onRenderQueueStart.bind(this)), this.renderQueue.on("stop", this.onRenderQueueStop.bind(this)), this.on("before:change", this.startBatchRender), this.on("change", this.stopBatchRender)
          }, e.prototype.onRenderQueueStart = function () {
            this.calendar.freezeContentHeight(), this.addScroll(this.queryScroll())
          }, e.prototype.onRenderQueueStop = function () {
            this.calendar.updateViewSize() && this.popScroll(), this.calendar.thawContentHeight()
          }, e.prototype.startBatchRender = function () {
            this.batchRenderDepth++ || this.renderQueue.pause()
          }, e.prototype.stopBatchRender = function () {
            --this.batchRenderDepth || this.renderQueue.resume()
          }, e.prototype.requestRender = function (t, e, n) {
            this.renderQueue.queue(t, e, n)
          }, e.prototype.whenSizeUpdated = function (t) {
            this.renderQueue.isRunning ? this.renderQueue.one("stop", t.bind(this)) : t.call(this)
          }, e.prototype.computeTitle = function (t) {
            var e;
            return e = /^(year|month)$/.test(t.currentRangeUnit) ? t.currentUnzonedRange : t.activeUnzonedRange, this.formatRange({
              start: this.calendar.msToMoment(e.startMs, t.isRangeAllDay),
              end: this.calendar.msToMoment(e.endMs, t.isRangeAllDay)
            }, t.isRangeAllDay, this.opt("titleFormat") || this.computeTitleFormat(t), this.opt("titleRangeSeparator"))
          }, e.prototype.computeTitleFormat = function (t) {
            var e = t.currentRangeUnit;
            return "year" === e ? "YYYY" : "month" === e ? this.opt("monthYearFormat") : t.currentUnzonedRange.as("days") > 1 ? "ll" : "LL"
          }, e.prototype.setDate = function (t) {
            var e = this.get("dateProfile"),
              n = this.dateProfileGenerator.build(t, void 0, !0);
            e && e.activeUnzonedRange.equals(n.activeUnzonedRange) || this.set("dateProfile", n)
          }, e.prototype.unsetDate = function () {
            this.unset("dateProfile")
          }, e.prototype.fetchInitialEvents = function (t) {
            var e = this.calendar,
              n = t.isRangeAllDay && !this.usesMinMaxTime;
            return e.requestEvents(e.msToMoment(t.activeUnzonedRange.startMs, n), e.msToMoment(t.activeUnzonedRange.endMs, n))
          }, e.prototype.bindEventChanges = function () {
            this.listenTo(this.calendar, "eventsReset", this.resetEvents)
          }, e.prototype.unbindEventChanges = function () {
            this.stopListeningTo(this.calendar, "eventsReset")
          }, e.prototype.setEvents = function (t) {
            this.set("currentEvents", t), this.set("hasEvents", !0)
          }, e.prototype.unsetEvents = function () {
            this.unset("currentEvents"), this.unset("hasEvents")
          }, e.prototype.resetEvents = function (t) {
            this.startBatchRender(), this.unsetEvents(), this.setEvents(t), this.stopBatchRender()
          }, e.prototype.requestDateRender = function (t) {
            var e = this;
            this.requestRender(function () {
              e.executeDateRender(t)
            }, "date", "init")
          }, e.prototype.requestDateUnrender = function () {
            var t = this;
            this.requestRender(function () {
              t.executeDateUnrender()
            }, "date", "destroy")
          }, e.prototype.executeDateRender = function (e) {
            t.prototype.executeDateRender.call(this, e), this.render && this.render(), this.trigger("datesRendered"), this.addScroll({
              isDateInit: !0
            }), this.startNowIndicator()
          }, e.prototype.executeDateUnrender = function () {
            this.unselect(), this.stopNowIndicator(), this.trigger("before:datesUnrendered"), this.destroy && this.destroy(), t.prototype.executeDateUnrender.call(this)
          }, e.prototype.bindBaseRenderHandlers = function () {
            var t = this;
            this.on("datesRendered", function () {
              t.whenSizeUpdated(t.triggerViewRender)
            }), this.on("before:datesUnrendered", function () {
              t.triggerViewDestroy()
            })
          }, e.prototype.triggerViewRender = function () {
            this.publiclyTrigger("viewRender", {
              context: this,
              args: [this, this.el]
            })
          }, e.prototype.triggerViewDestroy = function () {
            this.publiclyTrigger("viewDestroy", {
              context: this,
              args: [this, this.el]
            })
          }, e.prototype.requestEventsRender = function (t) {
            var e = this;
            this.requestRender(function () {
              e.executeEventRender(t), e.whenSizeUpdated(e.triggerAfterEventsRendered)
            }, "event", "init")
          }, e.prototype.requestEventsUnrender = function () {
            var t = this;
            this.requestRender(function () {
              t.triggerBeforeEventsDestroyed(), t.executeEventUnrender()
            }, "event", "destroy")
          }, e.prototype.requestBusinessHoursRender = function (t) {
            var e = this;
            this.requestRender(function () {
              e.renderBusinessHours(t)
            }, "businessHours", "init")
          }, e.prototype.requestBusinessHoursUnrender = function () {
            var t = this;
            this.requestRender(function () {
              t.unrenderBusinessHours()
            }, "businessHours", "destroy")
          }, e.prototype.bindGlobalHandlers = function () {
            t.prototype.bindGlobalHandlers.call(this), this.listenTo(c.default.get(), {
              touchstart: this.processUnselect,
              mousedown: this.handleDocumentMousedown
            })
          }, e.prototype.unbindGlobalHandlers = function () {
            t.prototype.unbindGlobalHandlers.call(this), this.stopListeningTo(c.default.get())
          }, e.prototype.startNowIndicator = function () {
            var t, e, n, r = this;
            this.opt("nowIndicator") && (t = this.getNowIndicatorUnit()) && (e = s.proxy(this, "updateNowIndicator"), this.initialNowDate = this.calendar.getNow(), this.initialNowQueriedMs = (new Date).valueOf(), n = this.initialNowDate.clone().startOf(t).add(1, t).valueOf() - this.initialNowDate.valueOf(), this.nowIndicatorTimeoutID = setTimeout(function () {
              r.nowIndicatorTimeoutID = null, e(), n = +o.duration(1, t), n = Math.max(100, n), r.nowIndicatorIntervalID = setInterval(e, n)
            }, n))
          }, e.prototype.updateNowIndicator = function () {
            this.isDatesRendered && this.initialNowDate && (this.unrenderNowIndicator(), this.renderNowIndicator(this.initialNowDate.clone().add((new Date).valueOf() - this.initialNowQueriedMs)), this.isNowIndicatorRendered = !0)
          }, e.prototype.stopNowIndicator = function () {
            this.isNowIndicatorRendered && (this.nowIndicatorTimeoutID && (clearTimeout(this.nowIndicatorTimeoutID), this.nowIndicatorTimeoutID = null), this.nowIndicatorIntervalID && (clearInterval(this.nowIndicatorIntervalID), this.nowIndicatorIntervalID = null), this.unrenderNowIndicator(), this.isNowIndicatorRendered = !1)
          }, e.prototype.updateSize = function (e, n, r) {
            this.setHeight ? this.setHeight(e, n) : t.prototype.updateSize.call(this, e, n, r), this.updateNowIndicator()
          }, e.prototype.addScroll = function (t) {
            var e = this.queuedScroll || (this.queuedScroll = {});
            i.extend(e, t)
          }, e.prototype.popScroll = function () {
            this.applyQueuedScroll(), this.queuedScroll = null
          }, e.prototype.applyQueuedScroll = function () {
            this.queuedScroll && this.applyScroll(this.queuedScroll)
          }, e.prototype.queryScroll = function () {
            var t = {};
            return this.isDatesRendered && i.extend(t, this.queryDateScroll()), t
          }, e.prototype.applyScroll = function (t) {
            t.isDateInit && this.isDatesRendered && i.extend(t, this.computeInitialDateScroll()), this.isDatesRendered && this.applyDateScroll(t)
          }, e.prototype.computeInitialDateScroll = function () {
            return {}
          }, e.prototype.queryDateScroll = function () {
            return {}
          }, e.prototype.applyDateScroll = function (t) {}, e.prototype.reportEventDrop = function (t, e, n, r) {
            var i = this.calendar.eventManager.mutateEventsWithId(t.def.id, e),
              s = e.dateMutation;
            s && (t.dateProfile = s.buildNewDateProfile(t.dateProfile, this.calendar)), this.triggerEventDrop(t, s && s.dateDelta || o.duration(), i, n, r)
          }, e.prototype.triggerEventDrop = function (t, e, n, r, i) {
            this.publiclyTrigger("eventDrop", {
              context: r[0],
              args: [t.toLegacy(), e, n, i, {}, this]
            })
          }, e.prototype.reportExternalDrop = function (t, e, n, r, i, o) {
            e && this.calendar.eventManager.addEventDef(t, n), this.triggerExternalDrop(t, e, r, i, o)
          }, e.prototype.triggerExternalDrop = function (t, e, n, r, i) {
            this.publiclyTrigger("drop", {
              context: n[0],
              args: [t.dateProfile.start.clone(), r, i, this]
            }), e && this.publiclyTrigger("eventReceive", {
              context: this,
              args: [t.buildInstance().toLegacy(), this]
            })
          }, e.prototype.reportEventResize = function (t, e, n, r) {
            var i = this.calendar.eventManager.mutateEventsWithId(t.def.id, e);
            t.dateProfile = e.dateMutation.buildNewDateProfile(t.dateProfile, this.calendar), this.triggerEventResize(t, e.dateMutation.endDelta, i, n, r)
          }, e.prototype.triggerEventResize = function (t, e, n, r, i) {
            this.publiclyTrigger("eventResize", {
              context: r[0],
              args: [t.toLegacy(), e, n, i, {}, this]
            })
          }, e.prototype.select = function (t, e) {
            this.unselect(e), this.renderSelectionFootprint(t), this.reportSelection(t, e)
          }, e.prototype.renderSelectionFootprint = function (e) {
            this.renderSelection ? this.renderSelection(e.toLegacy(this.calendar)) : t.prototype.renderSelectionFootprint.call(this, e)
          }, e.prototype.reportSelection = function (t, e) {
            this.isSelected = !0, this.triggerSelect(t, e)
          }, e.prototype.triggerSelect = function (t, e) {
            var n = this.calendar.footprintToDateProfile(t);
            this.publiclyTrigger("select", {
              context: this,
              args: [n.start, n.end, e, this]
            })
          }, e.prototype.unselect = function (t) {
            this.isSelected && (this.isSelected = !1, this.destroySelection && this.destroySelection(), this.unrenderSelection(), this.publiclyTrigger("unselect", {
              context: this,
              args: [t, this]
            }))
          }, e.prototype.selectEventInstance = function (t) {
            this.selectedEventInstance && this.selectedEventInstance === t || (this.unselectEventInstance(), this.getEventSegs().forEach(function (e) {
              e.footprint.eventInstance === t && e.el && e.el.addClass("fc-selected")
            }), this.selectedEventInstance = t)
          }, e.prototype.unselectEventInstance = function () {
            this.selectedEventInstance && (this.getEventSegs().forEach(function (t) {
              t.el && t.el.removeClass("fc-selected")
            }), this.selectedEventInstance = null)
          }, e.prototype.isEventDefSelected = function (t) {
            return this.selectedEventInstance && this.selectedEventInstance.def.id === t.id
          }, e.prototype.handleDocumentMousedown = function (t) {
            s.isPrimaryMouseButton(t) && this.processUnselect(t)
          }, e.prototype.processUnselect = function (t) {
            this.processRangeUnselect(t), this.processEventUnselect(t)
          }, e.prototype.processRangeUnselect = function (t) {
            var e;
            this.isSelected && this.opt("unselectAuto") && ((e = this.opt("unselectCancel")) && i(t.target).closest(e).length || this.unselect(t))
          }, e.prototype.processEventUnselect = function (t) {
            this.selectedEventInstance && (i(t.target).closest(".fc-selected").length || this.unselectEventInstance())
          }, e.prototype.triggerBaseRendered = function () {
            this.publiclyTrigger("viewRender", {
              context: this,
              args: [this, this.el]
            })
          }, e.prototype.triggerBaseUnrendered = function () {
            this.publiclyTrigger("viewDestroy", {
              context: this,
              args: [this, this.el]
            })
          }, e.prototype.triggerDayClick = function (t, e, n) {
            var r = this.calendar.footprintToDateProfile(t);
            this.publiclyTrigger("dayClick", {
              context: e,
              args: [r.start, n, this]
            })
          }, e.prototype.isDateInOtherMonth = function (t, e) {
            return !1
          }, e.prototype.getUnzonedRangeOption = function (t) {
            var e = this.opt(t);
            if ("function" == typeof e && (e = e.apply(null, Array.prototype.slice.call(arguments, 1))), e) return this.calendar.parseUnzonedRange(e)
          }, e.prototype.initHiddenDays = function () {
            var t, e = this.opt("hiddenDays") || [],
              n = [],
              r = 0;
            for (!1 === this.opt("weekends") && e.push(0, 6), t = 0; t < 7; t++)(n[t] = -1 !== i.inArray(t, e)) || r++;
            if (!r) throw new Error("invalid hiddenDays");
            this.isHiddenDayHash = n
          }, e.prototype.trimHiddenDays = function (t) {
            var e = t.getStart(),
              n = t.getEnd();
            return e && (e = this.skipHiddenDays(e)), n && (n = this.skipHiddenDays(n, -1, !0)), null === e || null === n || e < n ? new d.default(e, n) : null
          }, e.prototype.isHiddenDay = function (t) {
            return o.isMoment(t) && (t = t.day()), this.isHiddenDayHash[t]
          }, e.prototype.skipHiddenDays = function (t, e, n) {
            void 0 === e && (e = 1), void 0 === n && (n = !1);
            for (var r = t.clone(); this.isHiddenDayHash[(r.day() + (n ? e : 0) + 7) % 7];) r.add(e, "days");
            return r
          }, e
        }(u.default);
      e.default = h, h.prototype.usesMinMaxTime = !1, h.prototype.dateProfileGeneratorClass = l.default, h.watch("displayingDates", ["isInDom", "dateProfile"], function (t) {
        this.requestDateRender(t.dateProfile)
      }, function () {
        this.requestDateUnrender()
      }), h.watch("displayingBusinessHours", ["displayingDates", "businessHourGenerator"], function (t) {
        this.requestBusinessHoursRender(t.businessHourGenerator)
      }, function () {
        this.requestBusinessHoursUnrender()
      }), h.watch("initialEvents", ["dateProfile"], function (t) {
        return this.fetchInitialEvents(t.dateProfile)
      }), h.watch("bindingEvents", ["initialEvents"], function (t) {
        this.setEvents(t.initialEvents), this.bindEventChanges()
      }, function () {
        this.unbindEventChanges(), this.unsetEvents()
      }), h.watch("displayingEvents", ["displayingDates", "hasEvents"], function () {
        this.requestEventsRender(this.get("currentEvents"))
      }, function () {
        this.requestEventsUnrender()
      }), h.watch("title", ["dateProfile"], function (t) {
        return this.title = this.computeTitle(t.dateProfile)
      }), h.watch("legacyDateProps", ["dateProfile"], function (t) {
        var e = this.calendar,
          n = t.dateProfile;
        this.start = e.msToMoment(n.activeUnzonedRange.startMs, n.isRangeAllDay), this.end = e.msToMoment(n.activeUnzonedRange.endMs, n.isRangeAllDay), this.intervalStart = e.msToMoment(n.currentUnzonedRange.startMs, n.isRangeAllDay), this.intervalEnd = e.msToMoment(n.currentUnzonedRange.endMs, n.isRangeAllDay)
      })
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(3),
        i = n(4),
        o = function () {
          function t(t, e) {
            this.view = t._getView(), this.component = t, this.fillRenderer = e
          }
          return t.prototype.opt = function (t) {
            return this.view.opt(t)
          }, t.prototype.rangeUpdated = function () {
            var t, e;
            this.eventTimeFormat = this.opt("eventTimeFormat") || this.opt("timeFormat") || this.computeEventTimeFormat(), null == (t = this.opt("displayEventTime")) && (t = this.computeDisplayEventTime()), null == (e = this.opt("displayEventEnd")) && (e = this.computeDisplayEventEnd()), this.displayEventTime = t, this.displayEventEnd = e
          }, t.prototype.render = function (t) {
            var e, n, r, i = this.component._getDateProfile(),
              o = [],
              s = [];
            for (e in t) r = (n = t[e]).sliceRenderRanges(i.activeUnzonedRange), n.getEventDef().hasBgRendering() ? o.push.apply(o, r) : s.push.apply(s, r);
            this.renderBgRanges(o), this.renderFgRanges(s)
          }, t.prototype.unrender = function () {
            this.unrenderBgRanges(), this.unrenderFgRanges()
          }, t.prototype.renderFgRanges = function (t) {
            var e = this.component.eventRangesToEventFootprints(t),
              n = this.component.eventFootprintsToSegs(e);
            n = this.renderFgSegEls(n), !1 !== this.renderFgSegs(n) && (this.fgSegs = n)
          }, t.prototype.unrenderFgRanges = function () {
            this.unrenderFgSegs(this.fgSegs || []), this.fgSegs = null
          }, t.prototype.renderBgRanges = function (t) {
            var e = this.component.eventRangesToEventFootprints(t),
              n = this.component.eventFootprintsToSegs(e);
            !1 !== this.renderBgSegs(n) && (this.bgSegs = n)
          }, t.prototype.unrenderBgRanges = function () {
            this.unrenderBgSegs(), this.bgSegs = null
          }, t.prototype.getSegs = function () {
            return (this.bgSegs || []).concat(this.fgSegs || [])
          }, t.prototype.renderFgSegs = function (t) {
            return !1
          }, t.prototype.unrenderFgSegs = function (t) {}, t.prototype.renderBgSegs = function (t) {
            var e = this;
            if (!this.fillRenderer) return !1;
            this.fillRenderer.renderSegs("bgEvent", t, {
              getClasses: function (t) {
                return e.getBgClasses(t.footprint.eventDef)
              },
              getCss: function (t) {
                return {
                  "background-color": e.getBgColor(t.footprint.eventDef)
                }
              },
              filterEl: function (t, n) {
                return e.filterEventRenderEl(t.footprint, n)
              }
            })
          }, t.prototype.unrenderBgSegs = function () {
            this.fillRenderer && this.fillRenderer.unrender("bgEvent")
          }, t.prototype.renderFgSegEls = function (t, e) {
            var n = this;
            void 0 === e && (e = !1);
            var i, o = this.view.hasPublicHandlers("eventRender"),
              s = "",
              a = [];
            if (t.length) {
              for (i = 0; i < t.length; i++) this.beforeFgSegHtml(t[i]), s += this.fgSegHtml(t[i], e);
              r(s).each(function (e, i) {
                var s = t[e],
                  l = r(i);
                o && (l = n.filterEventRenderEl(s.footprint, l)), l && (l.data("fc-seg", s), s.el = l, a.push(s))
              })
            }
            return a
          }, t.prototype.beforeFgSegHtml = function (t) {}, t.prototype.fgSegHtml = function (t, e) {}, t.prototype.getSegClasses = function (t, e, n) {
            var r = ["fc-event", t.isStart ? "fc-start" : "fc-not-start", t.isEnd ? "fc-end" : "fc-not-end"].concat(this.getClasses(t.footprint.eventDef));
            return e && r.push("fc-draggable"), n && r.push("fc-resizable"), this.view.isEventDefSelected(t.footprint.eventDef) && r.push("fc-selected"), r
          }, t.prototype.filterEventRenderEl = function (t, e) {
            var n = t.getEventLegacy(),
              i = this.view.publiclyTrigger("eventRender", {
                context: n,
                args: [n, e, this.view]
              });
            return !1 === i ? e = null : i && !0 !== i && (e = r(i)), e
          }, t.prototype.getTimeText = function (t, e, n) {
            return this._getTimeText(t.eventInstance.dateProfile.start, t.eventInstance.dateProfile.end, t.componentFootprint.isAllDay, e, n)
          }, t.prototype._getTimeText = function (t, e, n, r, i) {
            return null == r && (r = this.eventTimeFormat), null == i && (i = this.displayEventEnd), this.displayEventTime && !n ? i && e ? this.view.formatRange({
              start: t,
              end: e
            }, !1, r) : t.format(r) : ""
          }, t.prototype.computeEventTimeFormat = function () {
            return this.opt("smallTimeFormat")
          }, t.prototype.computeDisplayEventTime = function () {
            return !0
          }, t.prototype.computeDisplayEventEnd = function () {
            return !0
          }, t.prototype.getBgClasses = function (t) {
            var e = this.getClasses(t);
            return e.push("fc-bgevent"), e
          }, t.prototype.getClasses = function (t) {
            var e, n = this.getStylingObjs(t),
              r = [];
            for (e = 0; e < n.length; e++) r.push.apply(r, n[e].eventClassName || n[e].className || []);
            return r
          }, t.prototype.getSkinCss = function (t) {
            return {
              "background-color": this.getBgColor(t),
              "border-color": this.getBorderColor(t),
              color: this.getTextColor(t)
            }
          }, t.prototype.getBgColor = function (t) {
            var e, n, r = this.getStylingObjs(t);
            for (e = 0; e < r.length && !n; e++) n = r[e].eventBackgroundColor || r[e].eventColor || r[e].backgroundColor || r[e].color;
            return n || (n = this.opt("eventBackgroundColor") || this.opt("eventColor")), n
          }, t.prototype.getBorderColor = function (t) {
            var e, n, r = this.getStylingObjs(t);
            for (e = 0; e < r.length && !n; e++) n = r[e].eventBorderColor || r[e].eventColor || r[e].borderColor || r[e].color;
            return n || (n = this.opt("eventBorderColor") || this.opt("eventColor")), n
          }, t.prototype.getTextColor = function (t) {
            var e, n, r = this.getStylingObjs(t);
            for (e = 0; e < r.length && !n; e++) n = r[e].eventTextColor || r[e].textColor;
            return n || (n = this.opt("eventTextColor")), n
          }, t.prototype.getStylingObjs = function (t) {
            var e = this.getFallbackStylingObjs(t);
            return e.unshift(t), e
          }, t.prototype.getFallbackStylingObjs = function (t) {
            return [t.source]
          }, t.prototype.sortEventSegs = function (t) {
            t.sort(i.proxy(this, "compareEventSegs"))
          }, t.prototype.compareEventSegs = function (t, e) {
            var n = t.footprint,
              r = e.footprint,
              o = n.componentFootprint,
              s = r.componentFootprint,
              a = o.unzonedRange,
              l = s.unzonedRange;
            return a.startMs - l.startMs || l.endMs - l.startMs - (a.endMs - a.startMs) || s.isAllDay - o.isAllDay || i.compareByFieldSpecs(n.eventDef, r.eventDef, this.view.eventOrderSpecs, n.eventDef.miscProps, r.eventDef.miscProps)
          }, t
        }();
      e.default = o
    }, , , , , function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(10);

      function i(t) {
        return "en" !== t.locale() ? t.clone().locale("en") : t
      }
      r.newMomentProto.format = function () {
        return this._fullCalendar && arguments[0] ? d(this, arguments[0]) : this._ambigTime ? r.oldMomentFormat(i(this), "YYYY-MM-DD") : this._ambigZone ? r.oldMomentFormat(i(this), "YYYY-MM-DD[T]HH:mm:ss") : this._fullCalendar ? r.oldMomentFormat(i(this)) : r.oldMomentProto.format.apply(this, arguments)
      }, r.newMomentProto.toISOString = function () {
        return this._ambigTime ? r.oldMomentFormat(i(this), "YYYY-MM-DD") : this._ambigZone ? r.oldMomentFormat(i(this), "YYYY-MM-DD[T]HH:mm:ss") : this._fullCalendar ? r.oldMomentProto.toISOString.apply(i(this), arguments) : r.oldMomentProto.toISOString.apply(this, arguments)
      };
      var o = "\v",
        s = "",
        a = "",
        l = new RegExp(a + "([^" + a + "]*)" + a, "g"),
        u = {
          t: function (t) {
            return r.oldMomentFormat(t, "a").charAt(0)
          },
          T: function (t) {
            return r.oldMomentFormat(t, "A").charAt(0)
          }
        },
        c = {
          Y: {
            value: 1,
            unit: "year"
          },
          M: {
            value: 2,
            unit: "month"
          },
          W: {
            value: 3,
            unit: "week"
          },
          w: {
            value: 3,
            unit: "week"
          },
          D: {
            value: 4,
            unit: "day"
          },
          d: {
            value: 4,
            unit: "day"
          }
        };

      function d(t, e) {
        return v(m(f(e).fakeFormatString, t).join(""))
      }
      e.formatDate = d, e.formatRange = function (t, e, n, i, o) {
        return t = r.default.parseZone(t), e = r.default.parseZone(e),
          function (t, e, n, r, i) {
            var o, s, a, l = t.sameUnits,
              u = e.clone().stripZone(),
              c = n.clone().stripZone(),
              d = m(t.fakeFormatString, e),
              h = m(t.fakeFormatString, n),
              f = "",
              p = "",
              g = "",
              y = "",
              b = "";
            for (o = 0; o < l.length && (!l[o] || u.isSame(c, l[o])); o++) f += d[o];
            for (s = l.length - 1; s > o && (!l[s] || u.isSame(c, l[s])) && (s - 1 !== o || "." !== d[s]); s--) p = d[s] + p;
            for (a = o; a <= s; a++) g += d[a], y += h[a];
            return (g || y) && (b = i ? y + r + g : g + r + y), v(f + b + p)
          }(f(n = t.localeData().longDateFormat(n) || n), t, e, i || " - ", o)
      };
      var h = {};

      function f(t) {
        return h[t] || (h[t] = {
          fakeFormatString: function t(e) {
            var n, r, i = [];
            for (n = 0; n < e.length; n++) "string" == typeof (r = e[n]) ? i.push("[" + r + "]") : r.token ? r.token in u ? i.push(s + "[" + r.token + "]") : i.push(r.token) : r.maybe && i.push(a + t(r.maybe) + a);
            return i.join(o)
          }(e = p(t)),
          sameUnits: function t(e) {
            var n, r, i, o = [];
            for (n = 0; n < e.length; n++)(r = e[n]).token ? (i = c[r.token.charAt(0)], o.push(i ? i.unit : "second")) : r.maybe ? o.push.apply(o, t(r.maybe)) : o.push(null);
            return o
          }(e)
        });
        var e
      }

      function p(t) {
        for (var e, n = [], r = /\[([^\]]*)\]|\(([^\)]*)\)|(LTS|LT|(\w)\4*o?)|([^\w\[\(]+)/g; e = r.exec(t);) e[1] ? n.push.apply(n, g(e[1])) : e[2] ? n.push({
          maybe: p(e[2])
        }) : e[3] ? n.push({
          token: e[3]
        }) : e[5] && n.push.apply(n, g(e[5]));
        return n
      }

      function g(t) {
        return ". " === t ? [".", " "] : [t]
      }

      function m(t, e) {
        var n, i, a = [],
          l = r.oldMomentFormat(e, t).split(o);
        for (n = 0; n < l.length; n++)(i = l[n]).charAt(0) === s ? a.push(u[i.substring(1)](e)) : a.push(i);
        return a
      }

      function v(t) {
        return t.replace(l, function (t, e) {
          return e.match(/[1-9]/) ? e : ""
        })
      }
      e.queryMostGranularFormatUnit = function (t) {
        var e, n, r, i, o = p(t);
        for (e = 0; e < o.length; e++)(n = o[e]).token && (r = c[n.token.charAt(0)]) && (!i || r.value > i.value) && (i = r);
        return i ? i.unit : null
      }
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(2),
        i = n(32),
        o = n(11),
        s = n(7),
        a = function (t) {
          function e() {
            var e = t.call(this) || this;
            return e._watchers = {}, e._props = {}, e.applyGlobalWatchers(), e.constructed(), e
          }
          return r.__extends(e, t), e.watch = function (t) {
            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            this.prototype.hasOwnProperty("_globalWatchArgs") || (this.prototype._globalWatchArgs = Object.create(this.prototype._globalWatchArgs)), this.prototype._globalWatchArgs[t] = e
          }, e.prototype.constructed = function () {}, e.prototype.applyGlobalWatchers = function () {
            var t, e = this._globalWatchArgs;
            for (t in e) this.watch.apply(this, [t].concat(e[t]))
          }, e.prototype.has = function (t) {
            return t in this._props
          }, e.prototype.get = function (t) {
            return void 0 === t ? this._props : this._props[t]
          }, e.prototype.set = function (t, e) {
            var n;
            "string" == typeof t ? (n = {})[t] = void 0 === e ? null : e : n = t, this.setProps(n)
          }, e.prototype.reset = function (t) {
            var e, n = this._props,
              r = {};
            for (e in n) r[e] = void 0;
            for (e in t) r[e] = t[e];
            this.setProps(r)
          }, e.prototype.unset = function (t) {
            var e, n, r = {};
            for (e = "string" == typeof t ? [t] : t, n = 0; n < e.length; n++) r[e[n]] = void 0;
            this.setProps(r)
          }, e.prototype.setProps = function (t) {
            var e, n, r = {},
              i = 0;
            for (e in t) "object" != typeof (n = t[e]) && n === this._props[e] || (r[e] = n, i++);
            if (i) {
              for (e in this.trigger("before:batchChange", r), r) n = r[e], this.trigger("before:change", e, n), this.trigger("before:change:" + e, n);
              for (e in r) void 0 === (n = r[e]) ? delete this._props[e] : this._props[e] = n, this.trigger("change:" + e, n), this.trigger("change", e, n);
              this.trigger("batchChange", r)
            }
          }, e.prototype.watch = function (t, e, n, r) {
            var i = this;
            this.unwatch(t), this._watchers[t] = this._watchDeps(e, function (e) {
              var r = n.call(i, e);
              r && r.then ? (i.unset(t), r.then(function (e) {
                i.set(t, e)
              })) : i.set(t, r)
            }, function (e) {
              i.unset(t), r && r.call(i, e)
            })
          }, e.prototype.unwatch = function (t) {
            var e = this._watchers[t];
            e && (delete this._watchers[t], e.teardown())
          }, e.prototype._watchDeps = function (t, e, n) {
            var r = this,
              i = 0,
              o = t.length,
              s = 0,
              a = {},
              l = [],
              u = !1,
              c = function (t, e) {
                r.on(t, e), l.push([t, e])
              };
            return t.forEach(function (t) {
              var r = !1;
              "?" === t.charAt(0) && (t = t.substring(1), r = !0), c("before:change:" + t, function (t) {
                1 == ++i && s === o && (u = !0, n(a), u = !1)
              }), c("change:" + t, function (n) {
                var l, c, d;
                l = t, d = r, void 0 === (c = n) ? (d || void 0 === a[l] || s--, delete a[l]) : (d || void 0 !== a[l] || s++, a[l] = c), --i || s === o && (u || e(a))
              })
            }), t.forEach(function (t) {
              var e = !1;
              "?" === t.charAt(0) && (t = t.substring(1), e = !0), r.has(t) ? (a[t] = r.get(t), s++) : e && s++
            }), s === o && e(a), {
              teardown: function () {
                for (var t = 0; t < l.length; t++) r.off(l[t][0], l[t][1]);
                l = null, s === o && n()
              },
              flash: function () {
                s === o && (n(), e(a))
              }
            }
          }, e.prototype.flash = function (t) {
            var e = this._watchers[t];
            e && e.flash()
          }, e
        }(i.default);
      e.default = a, a.prototype._globalWatchArgs = {}, o.default.mixInto(a), s.default.mixInto(a)
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(0),
        i = n(4),
        o = n(13),
        s = n(210);
      e.default = {
        parse: function (t, e) {
          return i.isTimeString(t.start) || r.isDuration(t.start) || i.isTimeString(t.end) || r.isDuration(t.end) ? s.default.parse(t, e) : o.default.parse(t, e)
        }
      }
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(4),
        i = n(17),
        o = function () {
          function t() {
            this.clearEnd = !1, this.forceTimed = !1, this.forceAllDay = !1
          }
          return t.createFromDiff = function (e, n, i) {
            var o, s, a, l = e.end && !n.end,
              u = e.isAllDay() && !n.isAllDay(),
              c = !e.isAllDay() && n.isAllDay();

            function d(t, e) {
              return i ? r.diffByUnit(t, e, i) : n.isAllDay() ? r.diffDay(t, e) : r.diffDayTime(t, e)
            }
            return o = d(n.start, e.start), n.end && (s = d(n.unzonedRange.getEnd(), e.unzonedRange.getEnd()).subtract(o)), (a = new t).clearEnd = l, a.forceTimed = u, a.forceAllDay = c, a.setDateDelta(o), a.setEndDelta(s), a
          }, t.prototype.buildNewDateProfile = function (t, e) {
            var n = t.start.clone(),
              r = null,
              o = !1;
            return t.end && !this.clearEnd ? r = t.end.clone() : this.endDelta && !r && (r = e.getDefaultEventEnd(t.isAllDay(), n)), this.forceTimed ? (o = !0, n.hasTime() || n.time(0), r && !r.hasTime() && r.time(0)) : this.forceAllDay && (n.hasTime() && n.stripTime(), r && r.hasTime() && r.stripTime()), this.dateDelta && (o = !0, n.add(this.dateDelta), r && r.add(this.dateDelta)), this.endDelta && (o = !0, r.add(this.endDelta)), this.startDelta && (o = !0, n.add(this.startDelta)), o && (n = e.applyTimezone(n), r && (r = e.applyTimezone(r))), !r && e.opt("forceEventDuration") && (r = e.getDefaultEventEnd(t.isAllDay(), n)), new i.default(n, r, e)
          }, t.prototype.setDateDelta = function (t) {
            t && t.valueOf() ? this.dateDelta = t : this.dateDelta = null
          }, t.prototype.setStartDelta = function (t) {
            t && t.valueOf() ? this.startDelta = t : this.startDelta = null
          }, t.prototype.setEndDelta = function (t) {
            t && t.valueOf() ? this.endDelta = t : this.endDelta = null
          }, t.prototype.isEmpty = function () {
            return !(this.clearEnd || this.forceTimed || this.forceAllDay || this.dateDelta || this.startDelta || this.endDelta)
          }, t
        }();
      e.default = o
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(213),
        i = n(214),
        o = {};
      e.defineThemeSystem = function (t, e) {
        o[t] = e
      }, e.getThemeSystemClass = function (t) {
        return t ? !0 === t ? i.default : o[t] : r.default
      }
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(2),
        i = n(3),
        o = n(4),
        s = n(19),
        a = n(6),
        l = n(13),
        u = function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return n.eventDefs = [], n
          }
          return r.__extends(e, t), e.parse = function (t, e) {
            var n;
            return i.isArray(t.events) ? n = t : i.isArray(t) && (n = {
              events: t
            }), !!n && a.default.parse.call(this, n, e)
          }, e.prototype.setRawEventDefs = function (t) {
            this.rawEventDefs = t, this.eventDefs = this.parseEventDefs(t)
          }, e.prototype.fetch = function (t, e, n) {
            var r, i = this.eventDefs;
            if (null != this.currentTimezone && this.currentTimezone !== n)
              for (r = 0; r < i.length; r++) i[r] instanceof l.default && i[r].rezone();
            return this.currentTimezone = n, s.default.resolve(i)
          }, e.prototype.addEventDef = function (t) {
            this.eventDefs.push(t)
          }, e.prototype.removeEventDefsById = function (t) {
            return o.removeMatching(this.eventDefs, function (e) {
              return e.id === t
            })
          }, e.prototype.removeAllEventDefs = function () {
            this.eventDefs = []
          }, e.prototype.getPrimitive = function () {
            return this.rawEventDefs
          }, e.prototype.applyManualStandardProps = function (e) {
            var n = t.prototype.applyManualStandardProps.call(this, e);
            return this.setRawEventDefs(e.events), n
          }, e
        }(a.default);
      e.default = u, u.defineStandardProps({
        events: !1
      })
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(3),
        i = n(4),
        o = function () {
          function t(t) {
            this.isHorizontal = !1, this.isVertical = !1, this.els = r(t.els), this.isHorizontal = t.isHorizontal, this.isVertical = t.isVertical, this.forcedOffsetParentEl = t.offsetParent ? r(t.offsetParent) : null
          }
          return t.prototype.build = function () {
            var t = this.forcedOffsetParentEl;
            !t && this.els.length > 0 && (t = this.els.eq(0).offsetParent()), this.origin = t ? t.offset() : null, this.boundingRect = this.queryBoundingRect(), this.isHorizontal && this.buildElHorizontals(), this.isVertical && this.buildElVerticals()
          }, t.prototype.clear = function () {
            this.origin = null, this.boundingRect = null, this.lefts = null, this.rights = null, this.tops = null, this.bottoms = null
          }, t.prototype.ensureBuilt = function () {
            this.origin || this.build()
          }, t.prototype.buildElHorizontals = function () {
            var t = [],
              e = [];
            this.els.each(function (n, i) {
              var o = r(i),
                s = o.offset().left,
                a = o.outerWidth();
              t.push(s), e.push(s + a)
            }), this.lefts = t, this.rights = e
          }, t.prototype.buildElVerticals = function () {
            var t = [],
              e = [];
            this.els.each(function (n, i) {
              var o = r(i),
                s = o.offset().top,
                a = o.outerHeight();
              t.push(s), e.push(s + a)
            }), this.tops = t, this.bottoms = e
          }, t.prototype.getHorizontalIndex = function (t) {
            this.ensureBuilt();
            var e, n = this.lefts,
              r = this.rights,
              i = n.length;
            for (e = 0; e < i; e++)
              if (t >= n[e] && t < r[e]) return e
          }, t.prototype.getVerticalIndex = function (t) {
            this.ensureBuilt();
            var e, n = this.tops,
              r = this.bottoms,
              i = n.length;
            for (e = 0; e < i; e++)
              if (t >= n[e] && t < r[e]) return e
          }, t.prototype.getLeftOffset = function (t) {
            return this.ensureBuilt(), this.lefts[t]
          }, t.prototype.getLeftPosition = function (t) {
            return this.ensureBuilt(), this.lefts[t] - this.origin.left
          }, t.prototype.getRightOffset = function (t) {
            return this.ensureBuilt(), this.rights[t]
          }, t.prototype.getRightPosition = function (t) {
            return this.ensureBuilt(), this.rights[t] - this.origin.left
          }, t.prototype.getWidth = function (t) {
            return this.ensureBuilt(), this.rights[t] - this.lefts[t]
          }, t.prototype.getTopOffset = function (t) {
            return this.ensureBuilt(), this.tops[t]
          }, t.prototype.getTopPosition = function (t) {
            return this.ensureBuilt(), this.tops[t] - this.origin.top
          }, t.prototype.getBottomOffset = function (t) {
            return this.ensureBuilt(), this.bottoms[t]
          }, t.prototype.getBottomPosition = function (t) {
            return this.ensureBuilt(), this.bottoms[t] - this.origin.top
          }, t.prototype.getHeight = function (t) {
            return this.ensureBuilt(), this.bottoms[t] - this.tops[t]
          }, t.prototype.queryBoundingRect = function () {
            var t;
            return this.els.length > 0 && !(t = i.getScrollParent(this.els.eq(0))).is(document) ? i.getClientRect(t) : null
          }, t.prototype.isPointInBounds = function (t, e) {
            return this.isLeftInBounds(t) && this.isTopInBounds(e)
          }, t.prototype.isLeftInBounds = function (t) {
            return !this.boundingRect || t >= this.boundingRect.left && t < this.boundingRect.right
          }, t.prototype.isTopInBounds = function (t) {
            return !this.boundingRect || t >= this.boundingRect.top && t < this.boundingRect.bottom
          }, t
        }();
      e.default = o
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(3),
        i = n(4),
        o = n(7),
        s = n(20),
        a = function () {
          function t(t) {
            this.isInteracting = !1, this.isDistanceSurpassed = !1, this.isDelayEnded = !1, this.isDragging = !1, this.isTouch = !1, this.isGeneric = !1, this.shouldCancelTouchScroll = !0, this.scrollAlwaysKills = !1, this.isAutoScroll = !1, this.scrollSensitivity = 30, this.scrollSpeed = 200, this.scrollIntervalMs = 50, this.options = t || {}
          }
          return t.prototype.startInteraction = function (t, e) {
            if (void 0 === e && (e = {}), "mousedown" === t.type) {
              if (s.default.get().shouldIgnoreMouse()) return;
              if (!i.isPrimaryMouseButton(t)) return;
              t.preventDefault()
            }
            this.isInteracting || (this.delay = i.firstDefined(e.delay, this.options.delay, 0), this.minDistance = i.firstDefined(e.distance, this.options.distance, 0), this.subjectEl = this.options.subjectEl, i.preventSelection(r("body")), this.isInteracting = !0, this.isTouch = i.getEvIsTouch(t), this.isGeneric = "dragstart" === t.type, this.isDelayEnded = !1, this.isDistanceSurpassed = !1, this.originX = i.getEvX(t), this.originY = i.getEvY(t), this.scrollEl = i.getScrollParent(r(t.target)), this.bindHandlers(), this.initAutoScroll(), this.handleInteractionStart(t), this.startDelay(t), this.minDistance || this.handleDistanceSurpassed(t))
          }, t.prototype.handleInteractionStart = function (t) {
            this.trigger("interactionStart", t)
          }, t.prototype.endInteraction = function (t, e) {
            this.isInteracting && (this.endDrag(t), this.delayTimeoutId && (clearTimeout(this.delayTimeoutId), this.delayTimeoutId = null), this.destroyAutoScroll(), this.unbindHandlers(), this.isInteracting = !1, this.handleInteractionEnd(t, e), i.allowSelection(r("body")))
          }, t.prototype.handleInteractionEnd = function (t, e) {
            this.trigger("interactionEnd", t, e || !1)
          }, t.prototype.bindHandlers = function () {
            var t = s.default.get();
            this.isGeneric ? this.listenTo(r(document), {
              drag: this.handleMove,
              dragstop: this.endInteraction
            }) : this.isTouch ? this.listenTo(t, {
              touchmove: this.handleTouchMove,
              touchend: this.endInteraction,
              scroll: this.handleTouchScroll
            }) : this.listenTo(t, {
              mousemove: this.handleMouseMove,
              mouseup: this.endInteraction
            }), this.listenTo(t, {
              selectstart: i.preventDefault,
              contextmenu: i.preventDefault
            })
          }, t.prototype.unbindHandlers = function () {
            this.stopListeningTo(s.default.get()), this.stopListeningTo(r(document))
          }, t.prototype.startDrag = function (t, e) {
            this.startInteraction(t, e), this.isDragging || (this.isDragging = !0, this.handleDragStart(t))
          }, t.prototype.handleDragStart = function (t) {
            this.trigger("dragStart", t)
          }, t.prototype.handleMove = function (t) {
            var e = i.getEvX(t) - this.originX,
              n = i.getEvY(t) - this.originY,
              r = this.minDistance;
            this.isDistanceSurpassed || e * e + n * n >= r * r && this.handleDistanceSurpassed(t), this.isDragging && this.handleDrag(e, n, t)
          }, t.prototype.handleDrag = function (t, e, n) {
            this.trigger("drag", t, e, n), this.updateAutoScroll(n)
          }, t.prototype.endDrag = function (t) {
            this.isDragging && (this.isDragging = !1, this.handleDragEnd(t))
          }, t.prototype.handleDragEnd = function (t) {
            this.trigger("dragEnd", t)
          }, t.prototype.startDelay = function (t) {
            var e = this;
            this.delay ? this.delayTimeoutId = setTimeout(function () {
              e.handleDelayEnd(t)
            }, this.delay) : this.handleDelayEnd(t)
          }, t.prototype.handleDelayEnd = function (t) {
            this.isDelayEnded = !0, this.isDistanceSurpassed && this.startDrag(t)
          }, t.prototype.handleDistanceSurpassed = function (t) {
            this.isDistanceSurpassed = !0, this.isDelayEnded && this.startDrag(t)
          }, t.prototype.handleTouchMove = function (t) {
            this.isDragging && this.shouldCancelTouchScroll && t.preventDefault(), this.handleMove(t)
          }, t.prototype.handleMouseMove = function (t) {
            this.handleMove(t)
          }, t.prototype.handleTouchScroll = function (t) {
            this.isDragging && !this.scrollAlwaysKills || this.endInteraction(t, !0)
          }, t.prototype.trigger = function (t) {
            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            this.options[t] && this.options[t].apply(this, e), this["_" + t] && this["_" + t].apply(this, e)
          }, t.prototype.initAutoScroll = function () {
            var t = this.scrollEl;
            this.isAutoScroll = this.options.scroll && t && !t.is(window) && !t.is(document), this.isAutoScroll && this.listenTo(t, "scroll", i.debounce(this.handleDebouncedScroll, 100))
          }, t.prototype.destroyAutoScroll = function () {
            this.endAutoScroll(), this.isAutoScroll && this.stopListeningTo(this.scrollEl, "scroll")
          }, t.prototype.computeScrollBounds = function () {
            this.isAutoScroll && (this.scrollBounds = i.getOuterRect(this.scrollEl))
          }, t.prototype.updateAutoScroll = function (t) {
            var e, n, r, o, s = this.scrollSensitivity,
              a = this.scrollBounds,
              l = 0,
              u = 0;
            a && (e = (s - (i.getEvY(t) - a.top)) / s, n = (s - (a.bottom - i.getEvY(t))) / s, r = (s - (i.getEvX(t) - a.left)) / s, o = (s - (a.right - i.getEvX(t))) / s, e >= 0 && e <= 1 ? l = e * this.scrollSpeed * -1 : n >= 0 && n <= 1 && (l = n * this.scrollSpeed), r >= 0 && r <= 1 ? u = r * this.scrollSpeed * -1 : o >= 0 && o <= 1 && (u = o * this.scrollSpeed)), this.setScrollVel(l, u)
          }, t.prototype.setScrollVel = function (t, e) {
            this.scrollTopVel = t, this.scrollLeftVel = e, this.constrainScrollVel(), !this.scrollTopVel && !this.scrollLeftVel || this.scrollIntervalId || (this.scrollIntervalId = setInterval(i.proxy(this, "scrollIntervalFunc"), this.scrollIntervalMs))
          }, t.prototype.constrainScrollVel = function () {
            var t = this.scrollEl;
            this.scrollTopVel < 0 ? t.scrollTop() <= 0 && (this.scrollTopVel = 0) : this.scrollTopVel > 0 && t.scrollTop() + t[0].clientHeight >= t[0].scrollHeight && (this.scrollTopVel = 0), this.scrollLeftVel < 0 ? t.scrollLeft() <= 0 && (this.scrollLeftVel = 0) : this.scrollLeftVel > 0 && t.scrollLeft() + t[0].clientWidth >= t[0].scrollWidth && (this.scrollLeftVel = 0)
          }, t.prototype.scrollIntervalFunc = function () {
            var t = this.scrollEl,
              e = this.scrollIntervalMs / 1e3;
            this.scrollTopVel && t.scrollTop(t.scrollTop() + this.scrollTopVel * e), this.scrollLeftVel && t.scrollLeft(t.scrollLeft() + this.scrollLeftVel * e), this.constrainScrollVel(), this.scrollTopVel || this.scrollLeftVel || this.endAutoScroll()
          }, t.prototype.endAutoScroll = function () {
            this.scrollIntervalId && (clearInterval(this.scrollIntervalId), this.scrollIntervalId = null, this.handleScrollEnd())
          }, t.prototype.handleDebouncedScroll = function () {
            this.scrollIntervalId || this.handleScrollEnd()
          }, t.prototype.handleScrollEnd = function () {}, t
        }();
      e.default = a, o.default.mixInto(a)
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(2),
        i = n(4),
        o = function (t) {
          function e() {
            return null !== t && t.apply(this, arguments) || this
          }
          return r.__extends(e, t), e.prototype.updateDayTable = function () {
            for (var t, e, n, r = this.view, i = r.calendar, o = i.msToUtcMoment(this.dateProfile.renderUnzonedRange.startMs, !0), s = i.msToUtcMoment(this.dateProfile.renderUnzonedRange.endMs, !0), a = -1, l = [], u = []; o.isBefore(s);) r.isHiddenDay(o) ? l.push(a + .5) : (a++, l.push(a), u.push(o.clone())), o.add(1, "days");
            if (this.breakOnWeeks) {
              for (e = u[0].day(), t = 1; t < u.length && u[t].day() !== e; t++);
              n = Math.ceil(u.length / t)
            } else n = 1, t = u.length;
            this.dayDates = u, this.dayIndices = l, this.daysPerRow = t, this.rowCnt = n, this.updateDayTableCols()
          }, e.prototype.updateDayTableCols = function () {
            this.colCnt = this.computeColCnt(), this.colHeadFormat = this.opt("columnHeaderFormat") || this.opt("columnFormat") || this.computeColHeadFormat()
          }, e.prototype.computeColCnt = function () {
            return this.daysPerRow
          }, e.prototype.getCellDate = function (t, e) {
            return this.dayDates[this.getCellDayIndex(t, e)].clone()
          }, e.prototype.getCellRange = function (t, e) {
            var n = this.getCellDate(t, e);
            return {
              start: n,
              end: n.clone().add(1, "days")
            }
          }, e.prototype.getCellDayIndex = function (t, e) {
            return t * this.daysPerRow + this.getColDayIndex(e)
          }, e.prototype.getColDayIndex = function (t) {
            return this.isRTL ? this.colCnt - 1 - t : t
          }, e.prototype.getDateDayIndex = function (t) {
            var e = this.dayIndices,
              n = t.diff(this.dayDates[0], "days");
            return n < 0 ? e[0] - 1 : n >= e.length ? e[e.length - 1] + 1 : e[n]
          }, e.prototype.computeColHeadFormat = function () {
            return this.rowCnt > 1 || this.colCnt > 10 ? "ddd" : this.colCnt > 1 ? this.opt("dayOfMonthFormat") : "dddd"
          }, e.prototype.sliceRangeByRow = function (t) {
            var e, n, r, i, o, s = this.daysPerRow,
              a = this.view.computeDayRange(t),
              l = this.getDateDayIndex(a.start),
              u = this.getDateDayIndex(a.end.clone().subtract(1, "days")),
              c = [];
            for (e = 0; e < this.rowCnt; e++) r = (n = e * s) + s - 1, i = Math.max(l, n), o = Math.min(u, r), (i = Math.ceil(i)) <= (o = Math.floor(o)) && c.push({
              row: e,
              firstRowDayIndex: i - n,
              lastRowDayIndex: o - n,
              isStart: i === l,
              isEnd: o === u
            });
            return c
          }, e.prototype.sliceRangeByDay = function (t) {
            var e, n, r, i, o, s, a = this.daysPerRow,
              l = this.view.computeDayRange(t),
              u = this.getDateDayIndex(l.start),
              c = this.getDateDayIndex(l.end.clone().subtract(1, "days")),
              d = [];
            for (e = 0; e < this.rowCnt; e++)
              for (r = (n = e * a) + a - 1, i = n; i <= r; i++) o = Math.max(u, i), s = Math.min(c, i), (o = Math.ceil(o)) <= (s = Math.floor(s)) && d.push({
                row: e,
                firstRowDayIndex: o - n,
                lastRowDayIndex: s - n,
                isStart: o === u,
                isEnd: s === c
              });
            return d
          }, e.prototype.renderHeadHtml = function () {
            var t = this.view.calendar.theme;
            return '<div class="fc-row ' + t.getClass("headerRow") + '"><table class="' + t.getClass("tableGrid") + '"><thead>' + this.renderHeadTrHtml() + "</thead></table></div>"
          }, e.prototype.renderHeadIntroHtml = function () {
            return this.renderIntroHtml()
          }, e.prototype.renderHeadTrHtml = function () {
            return "<tr>" + (this.isRTL ? "" : this.renderHeadIntroHtml()) + this.renderHeadDateCellsHtml() + (this.isRTL ? this.renderHeadIntroHtml() : "") + "</tr>"
          }, e.prototype.renderHeadDateCellsHtml = function () {
            var t, e, n = [];
            for (t = 0; t < this.colCnt; t++) e = this.getCellDate(0, t), n.push(this.renderHeadDateCellHtml(e));
            return n.join("")
          }, e.prototype.renderHeadDateCellHtml = function (t, e, n) {
            var r, o = this,
              s = o.view,
              a = o.dateProfile.activeUnzonedRange.containsDate(t),
              l = ["fc-day-header", s.calendar.theme.getClass("widgetHeader")];
            return r = "function" == typeof o.opt("columnHeaderHtml") ? o.opt("columnHeaderHtml")(t) : "function" == typeof o.opt("columnHeaderText") ? i.htmlEscape(o.opt("columnHeaderText")(t)) : i.htmlEscape(t.format(o.colHeadFormat)), 1 === o.rowCnt ? l = l.concat(o.getDayClasses(t, !0)) : l.push("fc-" + i.dayIDs[t.day()]), '<th class="' + l.join(" ") + '"' + (1 === (a && o.rowCnt) ? ' data-date="' + t.format("YYYY-MM-DD") + '"' : "") + (e > 1 ? ' colspan="' + e + '"' : "") + (n ? " " + n : "") + ">" + (a ? s.buildGotoAnchorHtml({
              date: t,
              forceOff: o.rowCnt > 1 || 1 === o.colCnt
            }, r) : r) + "</th>"
          }, e.prototype.renderBgTrHtml = function (t) {
            return "<tr>" + (this.isRTL ? "" : this.renderBgIntroHtml(t)) + this.renderBgCellsHtml(t) + (this.isRTL ? this.renderBgIntroHtml(t) : "") + "</tr>"
          }, e.prototype.renderBgIntroHtml = function (t) {
            return this.renderIntroHtml()
          }, e.prototype.renderBgCellsHtml = function (t) {
            var e, n, r = [];
            for (e = 0; e < this.colCnt; e++) n = this.getCellDate(t, e), r.push(this.renderBgCellHtml(n));
            return r.join("")
          }, e.prototype.renderBgCellHtml = function (t, e) {
            var n = this.view,
              r = this.dateProfile.activeUnzonedRange.containsDate(t),
              i = this.getDayClasses(t);
            return i.unshift("fc-day", n.calendar.theme.getClass("widgetContent")), '<td class="' + i.join(" ") + '"' + (r ? ' data-date="' + t.format("YYYY-MM-DD") + '"' : "") + (e ? " " + e : "") + "></td>"
          }, e.prototype.renderIntroHtml = function () {}, e.prototype.bookendCells = function (t) {
            var e = this.renderIntroHtml();
            e && (this.isRTL ? t.append(e) : t.prepend(e))
          }, e
        }(n(14).default);
      e.default = o
    }, function (t, e) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var n = function () {
        function t(t, e) {
          this.component = t, this.fillRenderer = e
        }
        return t.prototype.render = function (t) {
          var e = this.component,
            n = e._getDateProfile().activeUnzonedRange,
            r = t.buildEventInstanceGroup(e.hasAllDayBusinessHours, n),
            i = r ? e.eventRangesToEventFootprints(r.sliceRenderRanges(n)) : [];
          this.renderEventFootprints(i)
        }, t.prototype.renderEventFootprints = function (t) {
          var e = this.component.eventFootprintsToSegs(t);
          this.renderSegs(e), this.segs = e
        }, t.prototype.renderSegs = function (t) {
          this.fillRenderer && this.fillRenderer.renderSegs("businessHours", t, {
            getClasses: function (t) {
              return ["fc-nonbusiness", "fc-bgevent"]
            }
          })
        }, t.prototype.unrender = function () {
          this.fillRenderer && this.fillRenderer.unrender("businessHours"), this.segs = null
        }, t.prototype.getSegs = function () {
          return this.segs || []
        }, t
      }();
      e.default = n
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(3),
        i = n(4),
        o = function () {
          function t(t) {
            this.fillSegTag = "div", this.component = t, this.elsByFill = {}
          }
          return t.prototype.renderFootprint = function (t, e, n) {
            this.renderSegs(t, this.component.componentFootprintToSegs(e), n)
          }, t.prototype.renderSegs = function (t, e, n) {
            var r;
            return e = this.buildSegEls(t, e, n), (r = this.attachSegEls(t, e)) && this.reportEls(t, r), e
          }, t.prototype.unrender = function (t) {
            var e = this.elsByFill[t];
            e && (e.remove(), delete this.elsByFill[t])
          }, t.prototype.buildSegEls = function (t, e, n) {
            var i, o = this,
              s = "",
              a = [];
            if (e.length) {
              for (i = 0; i < e.length; i++) s += this.buildSegHtml(t, e[i], n);
              r(s).each(function (t, i) {
                var s = e[t],
                  l = r(i);
                n.filterEl && (l = n.filterEl(s, l)), l && (l = r(l)).is(o.fillSegTag) && (s.el = l, a.push(s))
              })
            }
            return a
          }, t.prototype.buildSegHtml = function (t, e, n) {
            var r = n.getClasses ? n.getClasses(e) : [],
              o = i.cssToStr(n.getCss ? n.getCss(e) : {});
            return "<" + this.fillSegTag + (r.length ? ' class="' + r.join(" ") + '"' : "") + (o ? ' style="' + o + '"' : "") + " />"
          }, t.prototype.attachSegEls = function (t, e) {}, t.prototype.reportEls = function (t, e) {
            this.elsByFill[t] ? this.elsByFill[t] = this.elsByFill[t].add(e) : this.elsByFill[t] = r(e)
          }, t
        }();
      e.default = o
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(13),
        i = n(35),
        o = n(6),
        s = function () {
          function t(t, e) {
            this.view = t._getView(), this.component = t, this.eventRenderer = e
          }
          return t.prototype.renderComponentFootprint = function (t) {
            this.renderEventFootprints([this.fabricateEventFootprint(t)])
          }, t.prototype.renderEventDraggingFootprints = function (t, e, n) {
            this.renderEventFootprints(t, e, "fc-dragging", n ? null : this.view.opt("dragOpacity"))
          }, t.prototype.renderEventResizingFootprints = function (t, e, n) {
            this.renderEventFootprints(t, e, "fc-resizing")
          }, t.prototype.renderEventFootprints = function (t, e, n, r) {
            var i, o = this.component.eventFootprintsToSegs(t),
              s = "fc-helper " + (n || "");
            for (o = this.eventRenderer.renderFgSegEls(o), i = 0; i < o.length; i++) o[i].el.addClass(s);
            if (null != r)
              for (i = 0; i < o.length; i++) o[i].el.css("opacity", r);
            this.helperEls = this.renderSegs(o, e)
          }, t.prototype.renderSegs = function (t, e) {}, t.prototype.unrender = function () {
            this.helperEls && (this.helperEls.remove(), this.helperEls = null)
          }, t.prototype.fabricateEventFootprint = function (t) {
            var e, n = this.view.calendar,
              s = n.footprintToDateProfile(t),
              a = new r.default(new o.default(n));
            return a.dateProfile = s, e = a.buildInstance(), new i.default(t, a, e)
          }, t
        }();
      e.default = s
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(2),
        i = n(20),
        o = function (t) {
          function e() {
            return null !== t && t.apply(this, arguments) || this
          }
          return r.__extends(e, t), e.prototype.bindToEl = function (t) {
            var e = this.component;
            e.bindSegHandlerToEl(t, "click", this.handleClick.bind(this)), e.bindSegHandlerToEl(t, "mouseenter", this.handleMouseover.bind(this)), e.bindSegHandlerToEl(t, "mouseleave", this.handleMouseout.bind(this))
          }, e.prototype.handleClick = function (t, e) {
            !1 === this.component.publiclyTrigger("eventClick", {
              context: t.el[0],
              args: [t.footprint.getEventLegacy(), e, this.view]
            }) && e.preventDefault()
          }, e.prototype.handleMouseover = function (t, e) {
            i.default.get().shouldIgnoreMouse() || this.mousedOverSeg || (this.mousedOverSeg = t, this.view.isEventDefResizable(t.footprint.eventDef) && t.el.addClass("fc-allow-mouse-resize"), this.component.publiclyTrigger("eventMouseover", {
              context: t.el[0],
              args: [t.footprint.getEventLegacy(), e, this.view]
            }))
          }, e.prototype.handleMouseout = function (t, e) {
            this.mousedOverSeg && (this.mousedOverSeg = null, this.view.isEventDefResizable(t.footprint.eventDef) && t.el.removeClass("fc-allow-mouse-resize"), this.component.publiclyTrigger("eventMouseout", {
              context: t.el[0],
              args: [t.footprint.getEventLegacy(), e || {}, this.view]
            }))
          }, e.prototype.end = function () {
            this.mousedOverSeg && this.handleMouseout(this.mousedOverSeg)
          }, e
        }(n(15).default);
      e.default = o
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(2),
        i = n(14),
        o = n(245),
        s = n(225),
        a = n(59),
        l = n(224),
        u = n(223),
        c = n(222),
        d = function (t) {
          function e() {
            return null !== t && t.apply(this, arguments) || this
          }
          return r.__extends(e, t), e
        }(i.default);
      e.default = d, d.prototype.dateClickingClass = o.default, d.prototype.dateSelectingClass = s.default, d.prototype.eventPointingClass = a.default, d.prototype.eventDraggingClass = l.default, d.prototype.eventResizingClass = u.default, d.prototype.externalDroppingClass = c.default
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(2),
        i = n(3),
        o = n(4),
        s = n(53),
        a = n(249),
        l = n(5),
        u = n(12),
        c = n(35),
        d = n(56),
        h = n(60),
        f = n(40),
        p = n(55),
        g = n(250),
        m = n(251),
        v = n(252),
        y = function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return n.cellWeekNumbersVisible = !1, n.bottomCoordPadding = 0, n.isRigid = !1, n.hasAllDayBusinessHours = !0, n
          }
          return r.__extends(e, t), e.prototype.componentFootprintToSegs = function (t) {
            var e, n, r = this.sliceRangeByRow(t.unzonedRange);
            for (e = 0; e < r.length; e++) n = r[e], this.isRTL ? (n.leftCol = this.daysPerRow - 1 - n.lastRowDayIndex, n.rightCol = this.daysPerRow - 1 - n.firstRowDayIndex) : (n.leftCol = n.firstRowDayIndex, n.rightCol = n.lastRowDayIndex);
            return r
          }, e.prototype.renderDates = function (t) {
            this.dateProfile = t, this.updateDayTable(), this.renderGrid()
          }, e.prototype.unrenderDates = function () {
            this.removeSegPopover()
          }, e.prototype.renderGrid = function () {
            var t, e, n = this.view,
              r = this.rowCnt,
              i = this.colCnt,
              o = "";
            for (this.headContainerEl && this.headContainerEl.html(this.renderHeadHtml()), t = 0; t < r; t++) o += this.renderDayRowHtml(t, this.isRigid);
            for (this.el.html(o), this.rowEls = this.el.find(".fc-row"), this.cellEls = this.el.find(".fc-day, .fc-disabled-day"), this.rowCoordCache = new s.default({
                els: this.rowEls,
                isVertical: !0
              }), this.colCoordCache = new s.default({
                els: this.cellEls.slice(0, this.colCnt),
                isHorizontal: !0
              }), t = 0; t < r; t++)
              for (e = 0; e < i; e++) this.publiclyTrigger("dayRender", {
                context: n,
                args: [this.getCellDate(t, e), this.getCellEl(t, e), n]
              })
          }, e.prototype.renderDayRowHtml = function (t, e) {
            var n = this.view.calendar.theme,
              r = ["fc-row", "fc-week", n.getClass("dayRow")];
            return e && r.push("fc-rigid"), '<div class="' + r.join(" ") + '"><div class="fc-bg"><table class="' + n.getClass("tableGrid") + '">' + this.renderBgTrHtml(t) + '</table></div><div class="fc-content-skeleton"><table>' + (this.getIsNumbersVisible() ? "<thead>" + this.renderNumberTrHtml(t) + "</thead>" : "") + "</table></div></div>"
          }, e.prototype.getIsNumbersVisible = function () {
            return this.getIsDayNumbersVisible() || this.cellWeekNumbersVisible
          }, e.prototype.getIsDayNumbersVisible = function () {
            return this.rowCnt > 1
          }, e.prototype.renderNumberTrHtml = function (t) {
            return "<tr>" + (this.isRTL ? "" : this.renderNumberIntroHtml(t)) + this.renderNumberCellsHtml(t) + (this.isRTL ? this.renderNumberIntroHtml(t) : "") + "</tr>"
          }, e.prototype.renderNumberIntroHtml = function (t) {
            return this.renderIntroHtml()
          }, e.prototype.renderNumberCellsHtml = function (t) {
            var e, n, r = [];
            for (e = 0; e < this.colCnt; e++) n = this.getCellDate(t, e), r.push(this.renderNumberCellHtml(n));
            return r.join("")
          }, e.prototype.renderNumberCellHtml = function (t) {
            var e, n, r = this.view,
              i = "",
              o = this.dateProfile.activeUnzonedRange.containsDate(t),
              s = this.getIsDayNumbersVisible() && o;
            return s || this.cellWeekNumbersVisible ? ((e = this.getDayClasses(t)).unshift("fc-day-top"), this.cellWeekNumbersVisible && (n = "ISO" === t._locale._fullCalendar_weekCalc ? 1 : t._locale.firstDayOfWeek()), i += '<td class="' + e.join(" ") + '"' + (o ? ' data-date="' + t.format() + '"' : "") + ">", this.cellWeekNumbersVisible && t.day() === n && (i += r.buildGotoAnchorHtml({
              date: t,
              type: "week"
            }, {
              class: "fc-week-number"
            }, t.format("w"))), s && (i += r.buildGotoAnchorHtml(t, {
              class: "fc-day-number"
            }, t.format("D"))), i += "</td>") : "<td/>"
          }, e.prototype.prepareHits = function () {
            this.colCoordCache.build(), this.rowCoordCache.build(), this.rowCoordCache.bottoms[this.rowCnt - 1] += this.bottomCoordPadding
          }, e.prototype.releaseHits = function () {
            this.colCoordCache.clear(), this.rowCoordCache.clear()
          }, e.prototype.queryHit = function (t, e) {
            if (this.colCoordCache.isLeftInBounds(t) && this.rowCoordCache.isTopInBounds(e)) {
              var n = this.colCoordCache.getHorizontalIndex(t),
                r = this.rowCoordCache.getVerticalIndex(e);
              if (null != r && null != n) return this.getCellHit(r, n)
            }
          }, e.prototype.getHitFootprint = function (t) {
            var e = this.getCellRange(t.row, t.col);
            return new u.default(new l.default(e.start, e.end), !0)
          }, e.prototype.getHitEl = function (t) {
            return this.getCellEl(t.row, t.col)
          }, e.prototype.getCellHit = function (t, e) {
            return {
              row: t,
              col: e,
              component: this,
              left: this.colCoordCache.getLeftOffset(e),
              right: this.colCoordCache.getRightOffset(e),
              top: this.rowCoordCache.getTopOffset(t),
              bottom: this.rowCoordCache.getBottomOffset(t)
            }
          }, e.prototype.getCellEl = function (t, e) {
            return this.cellEls.eq(t * this.colCnt + e)
          }, e.prototype.executeEventUnrender = function () {
            this.removeSegPopover(), t.prototype.executeEventUnrender.call(this)
          }, e.prototype.getOwnEventSegs = function () {
            return t.prototype.getOwnEventSegs.call(this).concat(this.popoverSegs || [])
          }, e.prototype.renderDrag = function (t, e, n) {
            var r;
            for (r = 0; r < t.length; r++) this.renderHighlight(t[r].componentFootprint);
            if (t.length && e && e.component !== this) return this.helperRenderer.renderEventDraggingFootprints(t, e, n), !0
          }, e.prototype.unrenderDrag = function () {
            this.unrenderHighlight(), this.helperRenderer.unrender()
          }, e.prototype.renderEventResize = function (t, e, n) {
            var r;
            for (r = 0; r < t.length; r++) this.renderHighlight(t[r].componentFootprint);
            this.helperRenderer.renderEventResizingFootprints(t, e, n)
          }, e.prototype.unrenderEventResize = function () {
            this.unrenderHighlight(), this.helperRenderer.unrender()
          }, e.prototype.removeSegPopover = function () {
            this.segPopover && this.segPopover.hide()
          }, e.prototype.limitRows = function (t) {
            var e, n, r = this.eventRenderer.rowStructs || [];
            for (e = 0; e < r.length; e++) this.unlimitRow(e), !1 !== (n = !!t && ("number" == typeof t ? t : this.computeRowLevelLimit(e))) && this.limitRow(e, n)
          }, e.prototype.computeRowLevelLimit = function (t) {
            var e, n, r, o = this.rowEls.eq(t).height(),
              s = this.eventRenderer.rowStructs[t].tbodyEl.children();

            function a(t, e) {
              r = Math.max(r, i(e).outerHeight())
            }
            for (e = 0; e < s.length; e++)
              if (n = s.eq(e).removeClass("fc-limited"), r = 0, n.find("> td > :first-child").each(a), n.position().top + r > o) return e;
            return !1
          }, e.prototype.limitRow = function (t, e) {
            var n, r, o, s, a, l, u, c, d, h, f, p, g, m, v, y = this,
              b = this.eventRenderer.rowStructs[t],
              w = [],
              _ = 0,
              S = function (n) {
                for (; _ < n;)(l = y.getCellSegs(t, _, e)).length && (d = r[e - 1][_], v = y.renderMoreLink(t, _, l), m = i("<div/>").append(v), d.append(m), w.push(m[0])), _++
              };
            if (e && e < b.segLevels.length) {
              for (n = b.segLevels[e - 1], r = b.cellMatrix, o = b.tbodyEl.children().slice(e).addClass("fc-limited").get(), s = 0; s < n.length; s++) {
                for (S((a = n[s]).leftCol), c = [], u = 0; _ <= a.rightCol;) l = this.getCellSegs(t, _, e), c.push(l), u += l.length, _++;
                if (u) {
                  for (h = (d = r[e - 1][a.leftCol]).attr("rowspan") || 1, f = [], p = 0; p < c.length; p++) g = i('<td class="fc-more-cell"/>').attr("rowspan", h), l = c[p], v = this.renderMoreLink(t, a.leftCol + p, [a].concat(l)), m = i("<div/>").append(v), g.append(m), f.push(g[0]), w.push(g[0]);
                  d.addClass("fc-limited").after(i(f)), o.push(d[0])
                }
              }
              S(this.colCnt), b.moreEls = i(w), b.limitedEls = i(o)
            }
          }, e.prototype.unlimitRow = function (t) {
            var e = this.eventRenderer.rowStructs[t];
            e.moreEls && (e.moreEls.remove(), e.moreEls = null), e.limitedEls && (e.limitedEls.removeClass("fc-limited"), e.limitedEls = null)
          }, e.prototype.renderMoreLink = function (t, e, n) {
            var r = this,
              o = this.view;
            return i('<a class="fc-more"/>').text(this.getMoreLinkText(n.length)).on("click", function (s) {
              var a = r.opt("eventLimitClick"),
                l = r.getCellDate(t, e),
                u = i(s.currentTarget),
                c = r.getCellEl(t, e),
                d = r.getCellSegs(t, e),
                h = r.resliceDaySegs(d, l),
                f = r.resliceDaySegs(n, l);
              "function" == typeof a && (a = r.publiclyTrigger("eventLimitClick", {
                context: o,
                args: [{
                  date: l.clone(),
                  dayEl: c,
                  moreEl: u,
                  segs: h,
                  hiddenSegs: f
                }, s, o]
              })), "popover" === a ? r.showSegPopover(t, e, u, h) : "string" == typeof a && o.calendar.zoomTo(l, a)
            })
          }, e.prototype.showSegPopover = function (t, e, n, r) {
            var i, o, s = this,
              l = this.view,
              u = n.parent();
            i = 1 === this.rowCnt ? l.el : this.rowEls.eq(t), o = {
              className: "fc-more-popover " + l.calendar.theme.getClass("popover"),
              content: this.renderSegPopoverContent(t, e, r),
              parentEl: l.el,
              top: i.offset().top,
              autoHide: !0,
              viewportConstrain: this.opt("popoverViewportConstrain"),
              hide: function () {
                s.popoverSegs && s.triggerBeforeEventSegsDestroyed(s.popoverSegs), s.segPopover.removeElement(), s.segPopover = null, s.popoverSegs = null
              }
            }, this.isRTL ? o.right = u.offset().left + u.outerWidth() + 1 : o.left = u.offset().left - 1, this.segPopover = new a.default(o), this.segPopover.show(), this.bindAllSegHandlersToEl(this.segPopover.el), this.triggerAfterEventSegsRendered(r)
          }, e.prototype.renderSegPopoverContent = function (t, e, n) {
            var r, s = this.view.calendar.theme,
              a = this.getCellDate(t, e).format(this.opt("dayPopoverFormat")),
              l = i('<div class="fc-header ' + s.getClass("popoverHeader") + '"><span class="fc-close ' + s.getIconClass("close") + '"></span><span class="fc-title">' + o.htmlEscape(a) + '</span><div class="fc-clear"/></div><div class="fc-body ' + s.getClass("popoverContent") + '"><div class="fc-event-container"></div></div>'),
              u = l.find(".fc-event-container");
            for (n = this.eventRenderer.renderFgSegEls(n, !0), this.popoverSegs = n, r = 0; r < n.length; r++) this.hitsNeeded(), n[r].hit = this.getCellHit(t, e), this.hitsNotNeeded(), u.append(n[r].el);
            return l
          }, e.prototype.resliceDaySegs = function (t, e) {
            var n, r, o, s = e.clone(),
              a = s.clone().add(1, "days"),
              d = new l.default(s, a),
              h = [];
            for (n = 0; n < t.length; n++)(o = (r = t[n]).footprint.componentFootprint.unzonedRange.intersect(d)) && h.push(i.extend({}, r, {
              footprint: new c.default(new u.default(o, r.footprint.componentFootprint.isAllDay), r.footprint.eventDef, r.footprint.eventInstance),
              isStart: r.isStart && o.isStart,
              isEnd: r.isEnd && o.isEnd
            }));
            return this.eventRenderer.sortEventSegs(h), h
          }, e.prototype.getMoreLinkText = function (t) {
            var e = this.opt("eventLimitText");
            return "function" == typeof e ? e(t) : "+" + t + " " + e
          }, e.prototype.getCellSegs = function (t, e, n) {
            for (var r, i = this.eventRenderer.rowStructs[t].segMatrix, o = n || 0, s = []; o < i.length;)(r = i[o][e]) && s.push(r), o++;
            return s
          }, e
        }(f.default);
      e.default = y, y.prototype.eventRendererClass = g.default, y.prototype.businessHourRendererClass = d.default, y.prototype.helperRendererClass = m.default, y.prototype.fillRendererClass = v.default, h.default.mixInto(y), p.default.mixInto(y)
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(2),
        i = n(3),
        o = n(4),
        s = n(39),
        a = n(41),
        l = n(228),
        u = n(61),
        c = function (t) {
          function e(e, n) {
            var r = t.call(this, e, n) || this;
            return r.dayGrid = r.instantiateDayGrid(), r.dayGrid.isRigid = r.hasRigidRows(), r.opt("weekNumbers") && (r.opt("weekNumbersWithinDays") ? (r.dayGrid.cellWeekNumbersVisible = !0, r.dayGrid.colWeekNumbersVisible = !1) : (r.dayGrid.cellWeekNumbersVisible = !1, r.dayGrid.colWeekNumbersVisible = !0)), r.addChild(r.dayGrid), r.scroller = new s.default({
              overflowX: "hidden",
              overflowY: "auto"
            }), r
          }
          return r.__extends(e, t), e.prototype.instantiateDayGrid = function () {
            return new(function (t) {
              function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.colWeekNumbersVisible = !1, e
              }
              return r.__extends(e, t), e.prototype.renderHeadIntroHtml = function () {
                var t = this.view;
                return this.colWeekNumbersVisible ? '<th class="fc-week-number ' + t.calendar.theme.getClass("widgetHeader") + '" ' + t.weekNumberStyleAttr() + "><span>" + o.htmlEscape(this.opt("weekNumberTitle")) + "</span></th>" : ""
              }, e.prototype.renderNumberIntroHtml = function (t) {
                var e = this.view,
                  n = this.getCellDate(t, 0);
                return this.colWeekNumbersVisible ? '<td class="fc-week-number" ' + e.weekNumberStyleAttr() + ">" + e.buildGotoAnchorHtml({
                  date: n,
                  type: "week",
                  forceOff: 1 === this.colCnt
                }, n.format("w")) + "</td>" : ""
              }, e.prototype.renderBgIntroHtml = function () {
                var t = this.view;
                return this.colWeekNumbersVisible ? '<td class="fc-week-number ' + t.calendar.theme.getClass("widgetContent") + '" ' + t.weekNumberStyleAttr() + "></td>" : ""
              }, e.prototype.renderIntroHtml = function () {
                var t = this.view;
                return this.colWeekNumbersVisible ? '<td class="fc-week-number" ' + t.weekNumberStyleAttr() + "></td>" : ""
              }, e.prototype.getIsNumbersVisible = function () {
                return u.default.prototype.getIsNumbersVisible.apply(this, arguments) || this.colWeekNumbersVisible
              }, e
            }(this.dayGridClass))(this)
          }, e.prototype.executeDateRender = function (e) {
            this.dayGrid.breakOnWeeks = /year|month|week/.test(e.currentRangeUnit), t.prototype.executeDateRender.call(this, e)
          }, e.prototype.renderSkeleton = function () {
            var t, e;
            this.el.addClass("fc-basic-view").html(this.renderSkeletonHtml()), this.scroller.render(), t = this.scroller.el.addClass("fc-day-grid-container"), e = i('<div class="fc-day-grid" />').appendTo(t), this.el.find(".fc-body > tr > td").append(t), this.dayGrid.headContainerEl = this.el.find(".fc-head-container"), this.dayGrid.setElement(e)
          }, e.prototype.unrenderSkeleton = function () {
            this.dayGrid.removeElement(), this.scroller.destroy()
          }, e.prototype.renderSkeletonHtml = function () {
            var t = this.calendar.theme;
            return '<table class="' + t.getClass("tableGrid") + '">' + (this.opt("columnHeader") ? '<thead class="fc-head"><tr><td class="fc-head-container ' + t.getClass("widgetHeader") + '">&nbsp;</td></tr></thead>' : "") + '<tbody class="fc-body"><tr><td class="' + t.getClass("widgetContent") + '"></td></tr></tbody></table>'
          }, e.prototype.weekNumberStyleAttr = function () {
            return null != this.weekNumberWidth ? 'style="width:' + this.weekNumberWidth + 'px"' : ""
          }, e.prototype.hasRigidRows = function () {
            var t = this.opt("eventLimit");
            return t && "number" != typeof t
          }, e.prototype.updateSize = function (e, n, r) {
            var i, s, a = this.opt("eventLimit"),
              l = this.dayGrid.headContainerEl.find(".fc-row");
            this.dayGrid.rowEls ? (t.prototype.updateSize.call(this, e, n, r), this.dayGrid.colWeekNumbersVisible && (this.weekNumberWidth = o.matchCellWidths(this.el.find(".fc-week-number"))), this.scroller.clear(), o.uncompensateScroll(l), this.dayGrid.removeSegPopover(), a && "number" == typeof a && this.dayGrid.limitRows(a), i = this.computeScrollerHeight(e), this.setGridHeight(i, n), a && "number" != typeof a && this.dayGrid.limitRows(a), n || (this.scroller.setHeight(i), ((s = this.scroller.getScrollbarWidths()).left || s.right) && (o.compensateScroll(l, s), i = this.computeScrollerHeight(e), this.scroller.setHeight(i)), this.scroller.lockOverflow(s))) : n || (i = this.computeScrollerHeight(e), this.scroller.setHeight(i))
          }, e.prototype.computeScrollerHeight = function (t) {
            return t - o.subtractInnerElHeight(this.el, this.scroller.el)
          }, e.prototype.setGridHeight = function (t, e) {
            e ? o.undistributeHeight(this.dayGrid.rowEls) : o.distributeHeight(this.dayGrid.rowEls, t, !0)
          }, e.prototype.computeInitialDateScroll = function () {
            return {
              top: 0
            }
          }, e.prototype.queryDateScroll = function () {
            return {
              top: this.scroller.getScrollTop()
            }
          }, e.prototype.applyDateScroll = function (t) {
            void 0 !== t.top && this.scroller.setScrollTop(t.top)
          }, e
        }(a.default);
      e.default = c, c.prototype.dateProfileGeneratorClass = l.default, c.prototype.dayGridClass = u.default
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(5),
        i = n(12),
        o = n(49),
        s = n(6),
        a = n(34),
        l = function () {
          function t(t, e) {
            this.eventManager = t, this._calendar = e
          }
          return t.prototype.opt = function (t) {
            return this._calendar.opt(t)
          }, t.prototype.isEventInstanceGroupAllowed = function (t) {
            var e, n = t.getEventDef(),
              r = this.eventRangesToEventFootprints(t.getAllEventRanges()),
              i = this.getPeerEventInstances(n).map(a.eventInstanceToEventRange),
              o = this.eventRangesToEventFootprints(i),
              s = n.getConstraint(),
              l = n.getOverlap(),
              u = this.opt("eventAllow");
            for (e = 0; e < r.length; e++)
              if (!this.isFootprintAllowed(r[e].componentFootprint, o, s, l, r[e].eventInstance)) return !1;
            if (u)
              for (e = 0; e < r.length; e++)
                if (!1 === u(r[e].componentFootprint.toLegacy(this._calendar), r[e].getEventLegacy())) return !1;
            return !0
          }, t.prototype.getPeerEventInstances = function (t) {
            return this.eventManager.getEventInstancesWithoutId(t.id)
          }, t.prototype.isSelectionFootprintAllowed = function (t) {
            var e, n = this.eventManager.getEventInstances().map(a.eventInstanceToEventRange),
              r = this.eventRangesToEventFootprints(n);
            return !!this.isFootprintAllowed(t, r, this.opt("selectConstraint"), this.opt("selectOverlap")) && (!(e = this.opt("selectAllow")) || !1 !== e(t.toLegacy(this._calendar)))
          }, t.prototype.isFootprintAllowed = function (t, e, n, r, i) {
            var o, s;
            if (null != n && (o = this.constraintValToFootprints(n, t.isAllDay), !this.isFootprintWithinConstraints(t, o))) return !1;
            if (s = this.collectOverlapEventFootprints(e, t), !1 === r) {
              if (s.length) return !1
            } else if ("function" == typeof r && ! function (t, e, n) {
                var r;
                for (r = 0; r < t.length; r++)
                  if (!e(t[r].eventInstance.toLegacy(), n ? n.toLegacy() : null)) return !1;
                return !0
              }(s, r, i)) return !1;
            return !(i && ! function (t, e) {
              var n, r, i, o, s = e.toLegacy();
              for (n = 0; n < t.length; n++) {
                if (r = t[n].eventInstance, i = r.def, !1 === (o = i.getOverlap())) return !1;
                if ("function" == typeof o && !o(r.toLegacy(), s)) return !1
              }
              return !0
            }(s, i))
          }, t.prototype.isFootprintWithinConstraints = function (t, e) {
            var n;
            for (n = 0; n < e.length; n++)
              if (this.footprintContainsFootprint(e[n], t)) return !0;
            return !1
          }, t.prototype.constraintValToFootprints = function (t, e) {
            var n;
            return "businessHours" === t ? this.buildCurrentBusinessFootprints(e) : "object" == typeof t ? (n = this.parseEventDefToInstances(t)) ? this.eventInstancesToFootprints(n) : this.parseFootprints(t) : null != t ? (n = this.eventManager.getEventInstancesWithId(t), this.eventInstancesToFootprints(n)) : void 0
          }, t.prototype.buildCurrentBusinessFootprints = function (t) {
            var e = this._calendar.view,
              n = e.get("businessHourGenerator"),
              r = e.dateProfile.activeUnzonedRange,
              i = n.buildEventInstanceGroup(t, r);
            return i ? this.eventInstancesToFootprints(i.eventInstances) : []
          }, t.prototype.eventInstancesToFootprints = function (t) {
            var e = t.map(a.eventInstanceToEventRange);
            return this.eventRangesToEventFootprints(e).map(a.eventFootprintToComponentFootprint)
          }, t.prototype.collectOverlapEventFootprints = function (t, e) {
            var n, r = [];
            for (n = 0; n < t.length; n++) this.footprintsIntersect(e, t[n].componentFootprint) && r.push(t[n]);
            return r
          }, t.prototype.parseEventDefToInstances = function (t) {
            var e = this.eventManager,
              n = o.default.parse(t, new s.default(this._calendar));
            return !!n && n.buildInstances(e.currentPeriod.unzonedRange)
          }, t.prototype.eventRangesToEventFootprints = function (t) {
            var e, n = [];
            for (e = 0; e < t.length; e++) n.push.apply(n, this.eventRangeToEventFootprints(t[e]));
            return n
          }, t.prototype.eventRangeToEventFootprints = function (t) {
            return [a.eventRangeToEventFootprint(t)]
          }, t.prototype.parseFootprints = function (t) {
            var e, n;
            return t.start && ((e = this._calendar.moment(t.start)).isValid() || (e = null)), t.end && ((n = this._calendar.moment(t.end)).isValid() || (n = null)), [new i.default(new r.default(e, n), e && !e.hasTime() || n && !n.hasTime())]
          }, t.prototype.footprintContainsFootprint = function (t, e) {
            return t.unzonedRange.containsRange(e.unzonedRange)
          }, t.prototype.footprintsIntersect = function (t, e) {
            return t.unzonedRange.intersectsWith(e.unzonedRange)
          }, t
        }();
      e.default = l
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(2),
        i = n(4),
        o = function (t) {
          function e() {
            return null !== t && t.apply(this, arguments) || this
          }
          return r.__extends(e, t), e.defineStandardProps = function (t) {
            var e = this.prototype;
            e.hasOwnProperty("standardPropMap") || (e.standardPropMap = Object.create(e.standardPropMap)), i.copyOwnProps(t, e.standardPropMap)
          }, e.copyVerbatimStandardProps = function (t, e) {
            var n, r = this.prototype.standardPropMap;
            for (n in r) null != t[n] && !0 === r[n] && (e[n] = t[n])
          }, e.prototype.applyProps = function (t) {
            var e, n = this.standardPropMap,
              r = {},
              i = {};
            for (e in t) !0 === n[e] ? this[e] = t[e] : !1 === n[e] ? r[e] = t[e] : i[e] = t[e];
            return this.applyMiscProps(i), this.applyManualStandardProps(r)
          }, e.prototype.applyManualStandardProps = function (t) {
            return !0
          }, e.prototype.applyMiscProps = function (t) {}, e.prototype.isStandardProp = function (t) {
            return t in this.standardPropMap
          }, e
        }(n(14).default);
      e.default = o, o.prototype.standardPropMap = {}
    }, function (t, e) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var n = function () {
        function t(t, e) {
          this.def = t, this.dateProfile = e
        }
        return t.prototype.toLegacy = function () {
          var t = this.dateProfile,
            e = this.def.toLegacy();
          return e.start = t.start.clone(), e.end = t.end ? t.end.clone() : null, e
        }, t
      }();
      e.default = n
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(2),
        i = n(3),
        o = n(0),
        s = n(33),
        a = n(209),
        l = n(17),
        u = function (t) {
          function e() {
            return null !== t && t.apply(this, arguments) || this
          }
          return r.__extends(e, t), e.prototype.isAllDay = function () {
            return !this.startTime && !this.endTime
          }, e.prototype.buildInstances = function (t) {
            for (var e, n, r, i = this.source.calendar, o = t.getStart(), s = t.getEnd(), u = []; o.isBefore(s);) this.dowHash && !this.dowHash[o.day()] || (n = (e = i.applyTimezone(o)).clone(), r = null, this.startTime ? n.time(this.startTime) : n.stripTime(), this.endTime && (r = e.clone().time(this.endTime)), u.push(new a.default(this, new l.default(n, r, i)))), o.add(1, "days");
            return u
          }, e.prototype.setDow = function (t) {
            this.dowHash || (this.dowHash = {});
            for (var e = 0; e < t.length; e++) this.dowHash[t[e]] = !0
          }, e.prototype.clone = function () {
            var e = t.prototype.clone.call(this);
            return e.startTime && (e.startTime = o.duration(this.startTime)), e.endTime && (e.endTime = o.duration(this.endTime)), this.dowHash && (e.dowHash = i.extend({}, this.dowHash)), e
          }, e
        }(s.default);
      e.default = u, u.prototype.applyProps = function (t) {
        var e = s.default.prototype.applyProps.call(this, t);
        return t.start && (this.startTime = o.duration(t.start)), t.end && (this.endTime = o.duration(t.end)), t.dow && this.setDow(t.dow), e
      }, u.defineStandardProps({
        start: !1,
        end: !1,
        dow: !1
      })
    }, function (t, e) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var n = function () {
        return function (t, e, n) {
          this.unzonedRange = t, this.eventDef = e, n && (this.eventInstance = n)
        }
      }();
      e.default = n
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(3),
        i = n(34),
        o = n(18),
        s = n(210),
        a = n(6),
        l = {
          start: "09:00",
          end: "17:00",
          dow: [1, 2, 3, 4, 5],
          rendering: "inverse-background"
        },
        u = function () {
          function t(t, e) {
            this.rawComplexDef = t, this.calendar = e
          }
          return t.prototype.buildEventInstanceGroup = function (t, e) {
            var n, r = this.buildEventDefs(t);
            if (r.length) return (n = new o.default(i.eventDefsToEventInstances(r, e))).explicitEventDef = r[0], n
          }, t.prototype.buildEventDefs = function (t) {
            var e, n = this.rawComplexDef,
              i = [],
              o = !1,
              s = [];
            for (!0 === n ? i = [{}] : r.isPlainObject(n) ? i = [n] : r.isArray(n) && (i = n, o = !0), e = 0; e < i.length; e++) o && !i[e].dow || s.push(this.buildEventDef(t, i[e]));
            return s
          }, t.prototype.buildEventDef = function (t, e) {
            var n = r.extend({}, l, e);
            return t && (n.start = null, n.end = null), s.default.parse(n, new a.default(this.calendar))
          }, t
        }();
      e.default = u
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(2),
        i = function (t) {
          function e() {
            return null !== t && t.apply(this, arguments) || this
          }
          return r.__extends(e, t), e
        }(n(38).default);
      e.default = i, i.prototype.classes = {
        widget: "fc-unthemed",
        widgetHeader: "fc-widget-header",
        widgetContent: "fc-widget-content",
        buttonGroup: "fc-button-group",
        button: "fc-button",
        cornerLeft: "fc-corner-left",
        cornerRight: "fc-corner-right",
        stateDefault: "fc-state-default",
        stateActive: "fc-state-active",
        stateDisabled: "fc-state-disabled",
        stateHover: "fc-state-hover",
        stateDown: "fc-state-down",
        popoverHeader: "fc-widget-header",
        popoverContent: "fc-widget-content",
        headerRow: "fc-widget-header",
        dayRow: "fc-widget-content",
        listView: "fc-widget-content"
      }, i.prototype.baseIconClass = "fc-icon", i.prototype.iconClasses = {
        close: "fc-icon-x",
        prev: "fc-icon-left-single-arrow",
        next: "fc-icon-right-single-arrow",
        prevYear: "fc-icon-left-double-arrow",
        nextYear: "fc-icon-right-double-arrow"
      }, i.prototype.iconOverrideOption = "buttonIcons", i.prototype.iconOverrideCustomButtonOption = "icon", i.prototype.iconOverridePrefix = "fc-icon-"
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(2),
        i = function (t) {
          function e() {
            return null !== t && t.apply(this, arguments) || this
          }
          return r.__extends(e, t), e
        }(n(38).default);
      e.default = i, i.prototype.classes = {
        widget: "ui-widget",
        widgetHeader: "ui-widget-header",
        widgetContent: "ui-widget-content",
        buttonGroup: "fc-button-group",
        button: "ui-button",
        cornerLeft: "ui-corner-left",
        cornerRight: "ui-corner-right",
        stateDefault: "ui-state-default",
        stateActive: "ui-state-active",
        stateDisabled: "ui-state-disabled",
        stateHover: "ui-state-hover",
        stateDown: "ui-state-down",
        today: "ui-state-highlight",
        popoverHeader: "ui-widget-header",
        popoverContent: "ui-widget-content",
        headerRow: "ui-widget-header",
        dayRow: "ui-widget-content",
        listView: "ui-widget-content"
      }, i.prototype.baseIconClass = "ui-icon", i.prototype.iconClasses = {
        close: "ui-icon-closethick",
        prev: "ui-icon-circle-triangle-w",
        next: "ui-icon-circle-triangle-e",
        prevYear: "ui-icon-seek-prev",
        nextYear: "ui-icon-seek-next"
      }, i.prototype.iconOverrideOption = "themeButtonIcons", i.prototype.iconOverrideCustomButtonOption = "themeIcon", i.prototype.iconOverridePrefix = "ui-icon-"
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(2),
        i = n(3),
        o = n(19),
        s = n(6),
        a = function (t) {
          function e() {
            return null !== t && t.apply(this, arguments) || this
          }
          return r.__extends(e, t), e.parse = function (t, e) {
            var n;
            return i.isFunction(t.events) ? n = t : i.isFunction(t) && (n = {
              events: t
            }), !!n && s.default.parse.call(this, n, e)
          }, e.prototype.fetch = function (t, e, n) {
            var r = this;
            return this.calendar.pushLoading(), o.default.construct(function (i) {
              r.func.call(r.calendar, t.clone(), e.clone(), n, function (t) {
                r.calendar.popLoading(), i(r.parseEventDefs(t))
              })
            })
          }, e.prototype.getPrimitive = function () {
            return this.func
          }, e.prototype.applyManualStandardProps = function (e) {
            var n = t.prototype.applyManualStandardProps.call(this, e);
            return this.func = e.events, n
          }, e
        }(s.default);
      e.default = a, a.defineStandardProps({
        events: !1
      })
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(2),
        i = n(3),
        o = n(4),
        s = n(19),
        a = n(6),
        l = function (t) {
          function e() {
            return null !== t && t.apply(this, arguments) || this
          }
          return r.__extends(e, t), e.parse = function (t, e) {
            var n;
            return "string" == typeof t.url ? n = t : "string" == typeof t && (n = {
              url: t
            }), !!n && a.default.parse.call(this, n, e)
          }, e.prototype.fetch = function (t, n, r) {
            var a = this,
              l = this.ajaxSettings,
              u = l.success,
              c = l.error,
              d = this.buildRequestParams(t, n, r);
            return this.calendar.pushLoading(), s.default.construct(function (t, n) {
              i.ajax(i.extend({}, e.AJAX_DEFAULTS, l, {
                url: a.url,
                data: d,
                success: function (e, r, s) {
                  var l;
                  a.calendar.popLoading(), e ? (l = o.applyAll(u, a, [e, r, s]), i.isArray(l) && (e = l), t(a.parseEventDefs(e))) : n()
                },
                error: function (t, e, r) {
                  a.calendar.popLoading(), o.applyAll(c, a, [t, e, r]), n()
                }
              }))
            })
          }, e.prototype.buildRequestParams = function (t, e, n) {
            var r, o, s, a, l = this.calendar,
              u = this.ajaxSettings,
              c = {};
            return null == (r = this.startParam) && (r = l.opt("startParam")), null == (o = this.endParam) && (o = l.opt("endParam")), null == (s = this.timezoneParam) && (s = l.opt("timezoneParam")), a = i.isFunction(u.data) ? u.data() : u.data || {}, i.extend(c, a), c[r] = t.format(), c[o] = e.format(), n && "local" !== n && (c[s] = n), c
          }, e.prototype.getPrimitive = function () {
            return this.url
          }, e.prototype.applyMiscProps = function (t) {
            this.ajaxSettings = t
          }, e.AJAX_DEFAULTS = {
            dataType: "json",
            cache: !1
          }, e
        }(a.default);
      e.default = l, l.defineStandardProps({
        url: !0,
        startParam: !0,
        endParam: !0,
        timezoneParam: !0
      })
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(11),
        i = function () {
          function t() {
            this.q = [], this.isPaused = !1, this.isRunning = !1
          }
          return t.prototype.queue = function () {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            this.q.push.apply(this.q, t), this.tryStart()
          }, t.prototype.pause = function () {
            this.isPaused = !0
          }, t.prototype.resume = function () {
            this.isPaused = !1, this.tryStart()
          }, t.prototype.getIsIdle = function () {
            return !this.isRunning && !this.isPaused
          }, t.prototype.tryStart = function () {
            !this.isRunning && this.canRunNext() && (this.isRunning = !0, this.trigger("start"), this.runRemaining())
          }, t.prototype.canRunNext = function () {
            return !this.isPaused && this.q.length
          }, t.prototype.runRemaining = function () {
            var t, e, n = this;
            do {
              if (t = this.q.shift(), (e = this.runTask(t)) && e.then) return void e.then(function () {
                n.canRunNext() && n.runRemaining()
              })
            } while (this.canRunNext());
            this.trigger("stop"), this.isRunning = !1, this.tryStart()
          }, t.prototype.runTask = function (t) {
            return t()
          }, t
        }();
      e.default = i, r.default.mixInto(i)
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(2),
        i = function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return n.waitsByNamespace = e || {}, n
          }
          return r.__extends(e, t), e.prototype.queue = function (t, e, n) {
            var r, i = {
              func: t,
              namespace: e,
              type: n
            };
            e && (r = this.waitsByNamespace[e]), this.waitNamespace && (e === this.waitNamespace && null != r ? this.delayWait(r) : (this.clearWait(), this.tryStart())), this.compoundTask(i) && (this.waitNamespace || null == r ? this.tryStart() : this.startWait(e, r))
          }, e.prototype.startWait = function (t, e) {
            this.waitNamespace = t, this.spawnWait(e)
          }, e.prototype.delayWait = function (t) {
            clearTimeout(this.waitId), this.spawnWait(t)
          }, e.prototype.spawnWait = function (t) {
            var e = this;
            this.waitId = setTimeout(function () {
              e.waitNamespace = null, e.tryStart()
            }, t)
          }, e.prototype.clearWait = function () {
            this.waitNamespace && (clearTimeout(this.waitId), this.waitId = null, this.waitNamespace = null)
          }, e.prototype.canRunNext = function () {
            if (!t.prototype.canRunNext.call(this)) return !1;
            if (this.waitNamespace) {
              for (var e = this.q, n = 0; n < e.length; n++)
                if (e[n].namespace !== this.waitNamespace) return !0;
              return !1
            }
            return !0
          }, e.prototype.runTask = function (t) {
            t.func()
          }, e.prototype.compoundTask = function (t) {
            var e, n = this.q,
              r = !0;
            if (t.namespace && "destroy" === t.type)
              for (e = n.length - 1; e >= 0; e--) switch (n[e].type) {
                case "init":
                  r = !1;
                case "add":
                case "remove":
                  n.splice(e, 1)
              }
            return r && n.push(t), r
          }, e
        }(n(217).default);
      e.default = i
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(2),
        i = n(3),
        o = n(0),
        s = n(4),
        a = n(10),
        l = n(47),
        u = n(237),
        c = n(34),
        d = function (t) {
          function e(n, r) {
            var i = t.call(this) || this;
            return i.isRTL = !1, i.hitsNeededDepth = 0, i.hasAllDayBusinessHours = !1, i.isDatesRendered = !1, n && (i.view = n), r && (i.options = r), i.uid = String(e.guid++), i.childrenByUid = {}, i.nextDayThreshold = o.duration(i.opt("nextDayThreshold")), i.isRTL = i.opt("isRTL"), i.fillRendererClass && (i.fillRenderer = new i.fillRendererClass(i)), i.eventRendererClass && (i.eventRenderer = new i.eventRendererClass(i, i.fillRenderer)), i.helperRendererClass && i.eventRenderer && (i.helperRenderer = new i.helperRendererClass(i, i.eventRenderer)), i.businessHourRendererClass && i.fillRenderer && (i.businessHourRenderer = new i.businessHourRendererClass(i, i.fillRenderer)), i
          }
          return r.__extends(e, t), e.prototype.addChild = function (t) {
            return !this.childrenByUid[t.uid] && (this.childrenByUid[t.uid] = t, !0)
          }, e.prototype.removeChild = function (t) {
            return !!this.childrenByUid[t.uid] && (delete this.childrenByUid[t.uid], !0)
          }, e.prototype.updateSize = function (t, e, n) {
            this.callChildren("updateSize", arguments)
          }, e.prototype.opt = function (t) {
            return this._getView().opt(t)
          }, e.prototype.publiclyTrigger = function () {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            var n = this._getCalendar();
            return n.publiclyTrigger.apply(n, t)
          }, e.prototype.hasPublicHandlers = function () {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            var n = this._getCalendar();
            return n.hasPublicHandlers.apply(n, t)
          }, e.prototype.executeDateRender = function (t) {
            this.dateProfile = t, this.renderDates(t), this.isDatesRendered = !0, this.callChildren("executeDateRender", arguments)
          }, e.prototype.executeDateUnrender = function () {
            this.callChildren("executeDateUnrender", arguments), this.dateProfile = null, this.unrenderDates(), this.isDatesRendered = !1
          }, e.prototype.renderDates = function (t) {}, e.prototype.unrenderDates = function () {}, e.prototype.getNowIndicatorUnit = function () {}, e.prototype.renderNowIndicator = function (t) {
            this.callChildren("renderNowIndicator", arguments)
          }, e.prototype.unrenderNowIndicator = function () {
            this.callChildren("unrenderNowIndicator", arguments)
          }, e.prototype.renderBusinessHours = function (t) {
            this.businessHourRenderer && this.businessHourRenderer.render(t), this.callChildren("renderBusinessHours", arguments)
          }, e.prototype.unrenderBusinessHours = function () {
            this.callChildren("unrenderBusinessHours", arguments), this.businessHourRenderer && this.businessHourRenderer.unrender()
          }, e.prototype.executeEventRender = function (t) {
            this.eventRenderer ? (this.eventRenderer.rangeUpdated(), this.eventRenderer.render(t)) : this.renderEvents && this.renderEvents(function (t) {
              var e, n, r, i = [];
              for (e in t)
                for (n = t[e].eventInstances, r = 0; r < n.length; r++) i.push(n[r].toLegacy());
              return i
            }(t)), this.callChildren("executeEventRender", arguments)
          }, e.prototype.executeEventUnrender = function () {
            this.callChildren("executeEventUnrender", arguments), this.eventRenderer ? this.eventRenderer.unrender() : this.destroyEvents && this.destroyEvents()
          }, e.prototype.getBusinessHourSegs = function () {
            var t = this.getOwnBusinessHourSegs();
            return this.iterChildren(function (e) {
              t.push.apply(t, e.getBusinessHourSegs())
            }), t
          }, e.prototype.getOwnBusinessHourSegs = function () {
            return this.businessHourRenderer ? this.businessHourRenderer.getSegs() : []
          }, e.prototype.getEventSegs = function () {
            var t = this.getOwnEventSegs();
            return this.iterChildren(function (e) {
              t.push.apply(t, e.getEventSegs())
            }), t
          }, e.prototype.getOwnEventSegs = function () {
            return this.eventRenderer ? this.eventRenderer.getSegs() : []
          }, e.prototype.triggerAfterEventsRendered = function () {
            this.triggerAfterEventSegsRendered(this.getEventSegs()), this.publiclyTrigger("eventAfterAllRender", {
              context: this,
              args: [this]
            })
          }, e.prototype.triggerAfterEventSegsRendered = function (t) {
            var e = this;
            this.hasPublicHandlers("eventAfterRender") && t.forEach(function (t) {
              var n;
              t.el && (n = t.footprint.getEventLegacy(), e.publiclyTrigger("eventAfterRender", {
                context: n,
                args: [n, t.el, e]
              }))
            })
          }, e.prototype.triggerBeforeEventsDestroyed = function () {
            this.triggerBeforeEventSegsDestroyed(this.getEventSegs())
          }, e.prototype.triggerBeforeEventSegsDestroyed = function (t) {
            var e = this;
            this.hasPublicHandlers("eventDestroy") && t.forEach(function (t) {
              var n;
              t.el && (n = t.footprint.getEventLegacy(), e.publiclyTrigger("eventDestroy", {
                context: n,
                args: [n, t.el, e]
              }))
            })
          }, e.prototype.showEventsWithId = function (t) {
            this.getEventSegs().forEach(function (e) {
              e.footprint.eventDef.id === t && e.el && e.el.css("visibility", "")
            }), this.callChildren("showEventsWithId", arguments)
          }, e.prototype.hideEventsWithId = function (t) {
            this.getEventSegs().forEach(function (e) {
              e.footprint.eventDef.id === t && e.el && e.el.css("visibility", "hidden")
            }), this.callChildren("hideEventsWithId", arguments)
          }, e.prototype.renderDrag = function (t, e, n) {
            var r = !1;
            return this.iterChildren(function (i) {
              i.renderDrag(t, e, n) && (r = !0)
            }), r
          }, e.prototype.unrenderDrag = function () {
            this.callChildren("unrenderDrag", arguments)
          }, e.prototype.renderEventResize = function (t, e, n) {
            this.callChildren("renderEventResize", arguments)
          }, e.prototype.unrenderEventResize = function () {
            this.callChildren("unrenderEventResize", arguments)
          }, e.prototype.renderSelectionFootprint = function (t) {
            this.renderHighlight(t), this.callChildren("renderSelectionFootprint", arguments)
          }, e.prototype.unrenderSelection = function () {
            this.unrenderHighlight(), this.callChildren("unrenderSelection", arguments)
          }, e.prototype.renderHighlight = function (t) {
            this.fillRenderer && this.fillRenderer.renderFootprint("highlight", t, {
              getClasses: function () {
                return ["fc-highlight"]
              }
            }), this.callChildren("renderHighlight", arguments)
          }, e.prototype.unrenderHighlight = function () {
            this.fillRenderer && this.fillRenderer.unrender("highlight"), this.callChildren("unrenderHighlight", arguments)
          }, e.prototype.hitsNeeded = function () {
            this.hitsNeededDepth++ || this.prepareHits(), this.callChildren("hitsNeeded", arguments)
          }, e.prototype.hitsNotNeeded = function () {
            this.hitsNeededDepth && !--this.hitsNeededDepth && this.releaseHits(), this.callChildren("hitsNotNeeded", arguments)
          }, e.prototype.prepareHits = function () {}, e.prototype.releaseHits = function () {}, e.prototype.queryHit = function (t, e) {
            var n, r, i = this.childrenByUid;
            for (n in i)
              if (r = i[n].queryHit(t, e)) break;
            return r
          }, e.prototype.getSafeHitFootprint = function (t) {
            var e = this.getHitFootprint(t);
            return this.dateProfile.activeUnzonedRange.containsRange(e.unzonedRange) ? e : null
          }, e.prototype.getHitFootprint = function (t) {}, e.prototype.getHitEl = function (t) {}, e.prototype.eventRangesToEventFootprints = function (t) {
            var e, n = [];
            for (e = 0; e < t.length; e++) n.push.apply(n, this.eventRangeToEventFootprints(t[e]));
            return n
          }, e.prototype.eventRangeToEventFootprints = function (t) {
            return [c.eventRangeToEventFootprint(t)]
          }, e.prototype.eventFootprintsToSegs = function (t) {
            var e, n = [];
            for (e = 0; e < t.length; e++) n.push.apply(n, this.eventFootprintToSegs(t[e]));
            return n
          }, e.prototype.eventFootprintToSegs = function (t) {
            var e, n, r, i = t.componentFootprint.unzonedRange;
            for (e = this.componentFootprintToSegs(t.componentFootprint), n = 0; n < e.length; n++) r = e[n], i.isStart || (r.isStart = !1), i.isEnd || (r.isEnd = !1), r.footprint = t;
            return e
          }, e.prototype.componentFootprintToSegs = function (t) {
            return []
          }, e.prototype.callChildren = function (t, e) {
            this.iterChildren(function (n) {
              n[t].apply(n, e)
            })
          }, e.prototype.iterChildren = function (t) {
            var e, n = this.childrenByUid;
            for (e in n) t(n[e])
          }, e.prototype._getCalendar = function () {
            return this.calendar || this.view.calendar
          }, e.prototype._getView = function () {
            return this.view
          }, e.prototype._getDateProfile = function () {
            return this._getView().get("dateProfile")
          }, e.prototype.buildGotoAnchorHtml = function (t, e, n) {
            var r, o, l, u;
            return i.isPlainObject(t) ? (r = t.date, o = t.type, l = t.forceOff) : r = t, u = {
              date: (r = a.default(r)).format("YYYY-MM-DD"),
              type: o || "day"
            }, "string" == typeof e && (n = e, e = null), e = e ? " " + s.attrsToStr(e) : "", n = n || "", !l && this.opt("navLinks") ? "<a" + e + ' data-goto="' + s.htmlEscape(JSON.stringify(u)) + '">' + n + "</a>" : "<span" + e + ">" + n + "</span>"
          }, e.prototype.getAllDayHtml = function () {
            return this.opt("allDayHtml") || s.htmlEscape(this.opt("allDayText"))
          }, e.prototype.getDayClasses = function (t, e) {
            var n, r = this._getView(),
              i = [];
            return this.dateProfile.activeUnzonedRange.containsDate(t) ? (i.push("fc-" + s.dayIDs[t.day()]), r.isDateInOtherMonth(t, this.dateProfile) && i.push("fc-other-month"), n = r.calendar.getNow(), t.isSame(n, "day") ? (i.push("fc-today"), !0 !== e && i.push(r.calendar.theme.getClass("today"))) : t < n ? i.push("fc-past") : i.push("fc-future")) : i.push("fc-disabled-day"), i
          }, e.prototype.formatRange = function (t, e, n, r) {
            var i = t.end;
            return e && (i = i.clone().subtract(1)), l.formatRange(t.start, i, n, r, this.isRTL)
          }, e.prototype.currentRangeAs = function (t) {
            return this._getDateProfile().currentUnzonedRange.as(t)
          }, e.prototype.computeDayRange = function (t) {
            var e = this._getCalendar(),
              n = e.msToUtcMoment(t.startMs, !0),
              r = e.msToUtcMoment(t.endMs),
              i = +r.time(),
              o = r.clone().stripTime();
            return i && i >= this.nextDayThreshold && o.add(1, "days"), o <= n && (o = n.clone().add(1, "days")), {
              start: n,
              end: o
            }
          }, e.prototype.isMultiDayRange = function (t) {
            var e = this.computeDayRange(t);
            return e.end.diff(e.start, "days") > 1
          }, e.guid = 0, e
        }(u.default);
      e.default = d
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(3),
        i = n(0),
        o = n(4),
        s = n(31),
        a = n(238),
        l = n(20),
        u = n(11),
        c = n(7),
        d = n(239),
        h = n(240),
        f = n(241),
        p = n(207),
        g = n(30),
        m = n(10),
        v = n(5),
        y = n(12),
        b = n(17),
        w = n(242),
        _ = n(212),
        S = n(37),
        D = n(49),
        x = n(13),
        C = n(36),
        T = n(6),
        E = n(51),
        M = function () {
          function t(t, e) {
            this.loadingLevel = 0, this.ignoreUpdateViewSize = 0, this.freezeContentHeightDepth = 0, l.default.needed(), this.el = t, this.viewsByType = {}, this.optionsManager = new h.default(this, e), this.viewSpecManager = new f.default(this.optionsManager, this), this.initMomentInternals(), this.initCurrentDate(), this.initEventManager(), this.constraints = new p.default(this.eventManager, this), this.constructed()
          }
          return t.prototype.constructed = function () {}, t.prototype.getView = function () {
            return this.view
          }, t.prototype.publiclyTrigger = function (t, e) {
            var n, i, o = this.opt(t);
            if (r.isPlainObject(e) ? (n = e.context, i = e.args) : r.isArray(e) && (i = e), null == n && (n = this.el[0]), i || (i = []), this.triggerWith(t, n, i), o) return o.apply(n, i)
          }, t.prototype.hasPublicHandlers = function (t) {
            return this.hasHandlers(t) || this.opt(t)
          }, t.prototype.option = function (t, e) {
            var n;
            if ("string" == typeof t) {
              if (void 0 === e) return this.optionsManager.get(t);
              (n = {})[t] = e, this.optionsManager.add(n)
            } else "object" == typeof t && this.optionsManager.add(t)
          }, t.prototype.opt = function (t) {
            return this.optionsManager.get(t)
          }, t.prototype.instantiateView = function (t) {
            var e = this.viewSpecManager.getViewSpec(t);
            if (!e) throw new Error('View type "' + t + '" is not valid');
            return new e.class(this, e)
          }, t.prototype.isValidViewType = function (t) {
            return Boolean(this.viewSpecManager.getViewSpec(t))
          }, t.prototype.changeView = function (t, e) {
            e && (e.start && e.end ? this.optionsManager.recordOverrides({
              visibleRange: e
            }) : this.currentDate = this.moment(e).stripZone()), this.renderView(t)
          }, t.prototype.zoomTo = function (t, e) {
            var n;
            e = e || "day", n = this.viewSpecManager.getViewSpec(e) || this.viewSpecManager.getUnitViewSpec(e), this.currentDate = t.clone(), this.renderView(n ? n.type : null)
          }, t.prototype.initCurrentDate = function () {
            var t = this.opt("defaultDate");
            this.currentDate = null != t ? this.moment(t).stripZone() : this.getNow()
          }, t.prototype.prev = function () {
            var t = this.view,
              e = t.dateProfileGenerator.buildPrev(t.get("dateProfile"));
            e.isValid && (this.currentDate = e.date, this.renderView())
          }, t.prototype.next = function () {
            var t = this.view,
              e = t.dateProfileGenerator.buildNext(t.get("dateProfile"));
            e.isValid && (this.currentDate = e.date, this.renderView())
          }, t.prototype.prevYear = function () {
            this.currentDate.add(-1, "years"), this.renderView()
          }, t.prototype.nextYear = function () {
            this.currentDate.add(1, "years"), this.renderView()
          }, t.prototype.today = function () {
            this.currentDate = this.getNow(), this.renderView()
          }, t.prototype.gotoDate = function (t) {
            this.currentDate = this.moment(t).stripZone(), this.renderView()
          }, t.prototype.incrementDate = function (t) {
            this.currentDate.add(i.duration(t)), this.renderView()
          }, t.prototype.getDate = function () {
            return this.applyTimezone(this.currentDate)
          }, t.prototype.pushLoading = function () {
            this.loadingLevel++ || this.publiclyTrigger("loading", [!0, this.view])
          }, t.prototype.popLoading = function () {
            --this.loadingLevel || this.publiclyTrigger("loading", [!1, this.view])
          }, t.prototype.render = function () {
            this.contentEl ? this.elementVisible() && (this.calcSize(), this.updateViewSize()) : this.initialRender()
          }, t.prototype.initialRender = function () {
            var t = this,
              e = this.el;
            e.addClass("fc"), e.on("click.fc", "a[data-goto]", function (e) {
              var n = r(e.currentTarget).data("goto"),
                i = t.moment(n.date),
                s = n.type,
                a = t.view.opt("navLink" + o.capitaliseFirstLetter(s) + "Click");
              "function" == typeof a ? a(i, e) : ("string" == typeof a && (s = a), t.zoomTo(i, s))
            }), this.optionsManager.watch("settingTheme", ["?theme", "?themeSystem"], function (n) {
              var r = new(E.getThemeSystemClass(n.themeSystem || n.theme))(t.optionsManager),
                i = r.getClass("widget");
              t.theme = r, i && e.addClass(i)
            }, function () {
              var n = t.theme.getClass("widget");
              t.theme = null, n && e.removeClass(n)
            }), this.optionsManager.watch("settingBusinessHourGenerator", ["?businessHours"], function (e) {
              t.businessHourGenerator = new _.default(e.businessHours, t), t.view && t.view.set("businessHourGenerator", t.businessHourGenerator)
            }, function () {
              t.businessHourGenerator = null
            }), this.optionsManager.watch("applyingDirClasses", ["?isRTL", "?locale"], function (t) {
              e.toggleClass("fc-ltr", !t.isRTL), e.toggleClass("fc-rtl", t.isRTL)
            }), this.contentEl = r("<div class='fc-view-container'/>").prependTo(e), this.initToolbars(), this.renderHeader(), this.renderFooter(), this.renderView(this.opt("defaultView")), this.opt("handleWindowResize") && r(window).resize(this.windowResizeProxy = o.debounce(this.windowResize.bind(this), this.opt("windowResizeDelay")))
          }, t.prototype.destroy = function () {
            this.view && this.clearView(), this.toolbarsManager.proxyCall("removeElement"), this.contentEl.remove(), this.el.removeClass("fc fc-ltr fc-rtl"), this.optionsManager.unwatch("settingTheme"), this.optionsManager.unwatch("settingBusinessHourGenerator"), this.el.off(".fc"), this.windowResizeProxy && (r(window).unbind("resize", this.windowResizeProxy), this.windowResizeProxy = null), l.default.unneeded()
          }, t.prototype.elementVisible = function () {
            return this.el.is(":visible")
          }, t.prototype.bindViewHandlers = function (t) {
            var e = this;
            t.watch("titleForCalendar", ["title"], function (n) {
              t === e.view && e.setToolbarsTitle(n.title)
            }), t.watch("dateProfileForCalendar", ["dateProfile"], function (n) {
              t === e.view && (e.currentDate = n.dateProfile.date, e.updateToolbarButtons(n.dateProfile))
            })
          }, t.prototype.unbindViewHandlers = function (t) {
            t.unwatch("titleForCalendar"), t.unwatch("dateProfileForCalendar")
          }, t.prototype.renderView = function (t) {
            var e, n = this.view;
            this.freezeContentHeight(), n && t && n.type !== t && this.clearView(), !this.view && t && (e = this.view = this.viewsByType[t] || (this.viewsByType[t] = this.instantiateView(t)), this.bindViewHandlers(e), e.startBatchRender(), e.setElement(r("<div class='fc-view fc-" + t + "-view' />").appendTo(this.contentEl)), this.toolbarsManager.proxyCall("activateButton", t)), this.view && (this.view.get("businessHourGenerator") !== this.businessHourGenerator && this.view.set("businessHourGenerator", this.businessHourGenerator), this.view.setDate(this.currentDate), e && e.stopBatchRender()), this.thawContentHeight()
          }, t.prototype.clearView = function () {
            var t = this.view;
            this.toolbarsManager.proxyCall("deactivateButton", t.type), this.unbindViewHandlers(t), t.removeElement(), t.unsetDate(), this.view = null
          }, t.prototype.reinitView = function () {
            var t = this.view,
              e = t.queryScroll();
            this.freezeContentHeight(), this.clearView(), this.calcSize(), this.renderView(t.type), this.view.applyScroll(e), this.thawContentHeight()
          }, t.prototype.getSuggestedViewHeight = function () {
            return null == this.suggestedViewHeight && this.calcSize(), this.suggestedViewHeight
          }, t.prototype.isHeightAuto = function () {
            return "auto" === this.opt("contentHeight") || "auto" === this.opt("height")
          }, t.prototype.updateViewSize = function (t) {
            void 0 === t && (t = !1);
            var e, n = this.view;
            if (!this.ignoreUpdateViewSize && n) return t && (this.calcSize(), e = n.queryScroll()), this.ignoreUpdateViewSize++, n.updateSize(this.getSuggestedViewHeight(), this.isHeightAuto(), t), this.ignoreUpdateViewSize--, t && n.applyScroll(e), !0
          }, t.prototype.calcSize = function () {
            this.elementVisible() && this._calcSize()
          }, t.prototype._calcSize = function () {
            var t = this.opt("contentHeight"),
              e = this.opt("height");
            this.suggestedViewHeight = "number" == typeof t ? t : "function" == typeof t ? t() : "number" == typeof e ? e - this.queryToolbarsHeight() : "function" == typeof e ? e() - this.queryToolbarsHeight() : "parent" === e ? this.el.parent().height() - this.queryToolbarsHeight() : Math.round(this.contentEl.width() / Math.max(this.opt("aspectRatio"), .5))
          }, t.prototype.windowResize = function (t) {
            t.target === window && this.view && this.view.isDatesRendered && this.updateViewSize(!0) && this.publiclyTrigger("windowResize", [this.view])
          }, t.prototype.freezeContentHeight = function () {
            this.freezeContentHeightDepth++ || this.forceFreezeContentHeight()
          }, t.prototype.forceFreezeContentHeight = function () {
            this.contentEl.css({
              width: "100%",
              height: this.contentEl.height(),
              overflow: "hidden"
            })
          }, t.prototype.thawContentHeight = function () {
            this.freezeContentHeightDepth--, this.contentEl.css({
              width: "",
              height: "",
              overflow: ""
            }), this.freezeContentHeightDepth && this.forceFreezeContentHeight()
          }, t.prototype.initToolbars = function () {
            this.header = new d.default(this, this.computeHeaderOptions()), this.footer = new d.default(this, this.computeFooterOptions()), this.toolbarsManager = new a.default([this.header, this.footer])
          }, t.prototype.computeHeaderOptions = function () {
            return {
              extraClasses: "fc-header-toolbar",
              layout: this.opt("header")
            }
          }, t.prototype.computeFooterOptions = function () {
            return {
              extraClasses: "fc-footer-toolbar",
              layout: this.opt("footer")
            }
          }, t.prototype.renderHeader = function () {
            var t = this.header;
            t.setToolbarOptions(this.computeHeaderOptions()), t.render(), t.el && this.el.prepend(t.el)
          }, t.prototype.renderFooter = function () {
            var t = this.footer;
            t.setToolbarOptions(this.computeFooterOptions()), t.render(), t.el && this.el.append(t.el)
          }, t.prototype.setToolbarsTitle = function (t) {
            this.toolbarsManager.proxyCall("updateTitle", t)
          }, t.prototype.updateToolbarButtons = function (t) {
            var e = this.getNow(),
              n = this.view,
              r = n.dateProfileGenerator.build(e),
              i = n.dateProfileGenerator.buildPrev(n.get("dateProfile")),
              o = n.dateProfileGenerator.buildNext(n.get("dateProfile"));
            this.toolbarsManager.proxyCall(r.isValid && !t.currentUnzonedRange.containsDate(e) ? "enableButton" : "disableButton", "today"), this.toolbarsManager.proxyCall(i.isValid ? "enableButton" : "disableButton", "prev"), this.toolbarsManager.proxyCall(o.isValid ? "enableButton" : "disableButton", "next")
          }, t.prototype.queryToolbarsHeight = function () {
            return this.toolbarsManager.items.reduce(function (t, e) {
              return t + (e.el ? e.el.outerHeight(!0) : 0)
            }, 0)
          }, t.prototype.select = function (t, e) {
            this.view.select(this.buildSelectFootprint.apply(this, arguments))
          }, t.prototype.unselect = function () {
            this.view && this.view.unselect()
          }, t.prototype.buildSelectFootprint = function (t, e) {
            var n, r = this.moment(t).stripZone();
            return n = e ? this.moment(e).stripZone() : r.hasTime() ? r.clone().add(this.defaultTimedEventDuration) : r.clone().add(this.defaultAllDayEventDuration), new y.default(new v.default(r, n), !r.hasTime())
          }, t.prototype.initMomentInternals = function () {
            var t = this;
            this.defaultAllDayEventDuration = i.duration(this.opt("defaultAllDayEventDuration")), this.defaultTimedEventDuration = i.duration(this.opt("defaultTimedEventDuration")), this.optionsManager.watch("buildingMomentLocale", ["?locale", "?monthNames", "?monthNamesShort", "?dayNames", "?dayNamesShort", "?firstDay", "?weekNumberCalculation"], function (e) {
              var n, r = e.weekNumberCalculation,
                i = e.firstDay;
              "iso" === r && (r = "ISO");
              var o = Object.create(g.getMomentLocaleData(e.locale));
              e.monthNames && (o._months = e.monthNames), e.monthNamesShort && (o._monthsShort = e.monthNamesShort), e.dayNames && (o._weekdays = e.dayNames), e.dayNamesShort && (o._weekdaysShort = e.dayNamesShort), null == i && "ISO" === r && (i = 1), null != i && ((n = Object.create(o._week)).dow = i, o._week = n), "ISO" !== r && "local" !== r && "function" != typeof r || (o._fullCalendar_weekCalc = r), t.localeData = o, t.currentDate && t.localizeMoment(t.currentDate)
            })
          }, t.prototype.moment = function () {
            for (var t, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
            return "local" === this.opt("timezone") ? (t = m.default.apply(null, e)).hasTime() && t.local() : t = "UTC" === this.opt("timezone") ? m.default.utc.apply(null, e) : m.default.parseZone.apply(null, e), this.localizeMoment(t), t
          }, t.prototype.msToMoment = function (t, e) {
            var n = m.default.utc(t);
            return e ? n.stripTime() : n = this.applyTimezone(n), this.localizeMoment(n), n
          }, t.prototype.msToUtcMoment = function (t, e) {
            var n = m.default.utc(t);
            return e && n.stripTime(), this.localizeMoment(n), n
          }, t.prototype.localizeMoment = function (t) {
            t._locale = this.localeData
          }, t.prototype.getIsAmbigTimezone = function () {
            return "local" !== this.opt("timezone") && "UTC" !== this.opt("timezone")
          }, t.prototype.applyTimezone = function (t) {
            if (!t.hasTime()) return t.clone();
            var e, n = this.moment(t.toArray()),
              r = t.time().asMilliseconds() - n.time().asMilliseconds();
            return r && (e = n.clone().add(r), t.time().asMilliseconds() - e.time().asMilliseconds() == 0 && (n = e)), n
          }, t.prototype.footprintToDateProfile = function (t, e) {
            void 0 === e && (e = !1);
            var n, r = m.default.utc(t.unzonedRange.startMs);
            return e || (n = m.default.utc(t.unzonedRange.endMs)), t.isAllDay ? (r.stripTime(), n && n.stripTime()) : (r = this.applyTimezone(r), n && (n = this.applyTimezone(n))), new b.default(r, n, this)
          }, t.prototype.getNow = function () {
            var t = this.opt("now");
            return "function" == typeof t && (t = t()), this.moment(t).stripZone()
          }, t.prototype.humanizeDuration = function (t) {
            return t.locale(this.opt("locale")).humanize()
          }, t.prototype.parseUnzonedRange = function (t) {
            var e = null,
              n = null;
            return t.start && (e = this.moment(t.start).stripZone()), t.end && (n = this.moment(t.end).stripZone()), e || n ? e && n && n.isBefore(e) ? null : new v.default(e, n) : null
          }, t.prototype.initEventManager = function () {
            var t = this,
              e = new w.default(this),
              n = this.opt("eventSources") || [],
              r = this.opt("events");
            this.eventManager = e, r && n.unshift(r), e.on("release", function (e) {
              t.trigger("eventsReset", e)
            }), e.freeze(), n.forEach(function (n) {
              var r = S.default.parse(n, t);
              r && e.addSource(r)
            }), e.thaw()
          }, t.prototype.requestEvents = function (t, e) {
            return this.eventManager.requestEvents(t, e, this.opt("timezone"), !this.opt("lazyFetching"))
          }, t.prototype.getEventEnd = function (t) {
            return t.end ? t.end.clone() : this.getDefaultEventEnd(t.allDay, t.start)
          }, t.prototype.getDefaultEventEnd = function (t, e) {
            var n = e.clone();
            return t ? n.stripTime().add(this.defaultAllDayEventDuration) : n.add(this.defaultTimedEventDuration), this.getIsAmbigTimezone() && n.stripZone(), n
          }, t.prototype.rerenderEvents = function () {
            this.view.flash("displayingEvents")
          }, t.prototype.refetchEvents = function () {
            this.eventManager.refetchAllSources()
          }, t.prototype.renderEvents = function (t, e) {
            this.eventManager.freeze();
            for (var n = 0; n < t.length; n++) this.renderEvent(t[n], e);
            this.eventManager.thaw()
          }, t.prototype.renderEvent = function (t, e) {
            void 0 === e && (e = !1);
            var n = this.eventManager,
              r = D.default.parse(t, t.source || n.stickySource);
            r && n.addEventDef(r, e)
          }, t.prototype.removeEvents = function (t) {
            var e, n = this.eventManager,
              r = [],
              i = {};
            if (null == t) n.removeAllEventDefs();
            else {
              for (n.getEventInstances().forEach(function (t) {
                  r.push(t.toLegacy())
                }), r = I(r, t), e = 0; e < r.length; e++) i[this.eventManager.getEventDefByUid(r[e]._id).id] = !0;
              for (e in n.freeze(), i) n.removeEventDefsById(e);
              n.thaw()
            }
          }, t.prototype.clientEvents = function (t) {
            var e = [];
            return this.eventManager.getEventInstances().forEach(function (t) {
              e.push(t.toLegacy())
            }), I(e, t)
          }, t.prototype.updateEvents = function (t) {
            this.eventManager.freeze();
            for (var e = 0; e < t.length; e++) this.updateEvent(t[e]);
            this.eventManager.thaw()
          }, t.prototype.updateEvent = function (t) {
            var e, n, r = this.eventManager.getEventDefByUid(t._id);
            r instanceof x.default && (e = r.buildInstance(), n = C.default.createFromRawProps(e, t, null), this.eventManager.mutateEventsWithId(r.id, n))
          }, t.prototype.getEventSources = function () {
            return this.eventManager.otherSources.slice()
          }, t.prototype.getEventSourceById = function (t) {
            return this.eventManager.getSourceById(T.default.normalizeId(t))
          }, t.prototype.addEventSource = function (t) {
            var e = S.default.parse(t, this);
            e && this.eventManager.addSource(e)
          }, t.prototype.removeEventSources = function (t) {
            var e, n, r = this.eventManager;
            if (null == t) this.eventManager.removeAllSources();
            else {
              for (e = r.multiQuerySources(t), r.freeze(), n = 0; n < e.length; n++) r.removeSource(e[n]);
              r.thaw()
            }
          }, t.prototype.removeEventSource = function (t) {
            var e, n = this.eventManager,
              r = n.querySources(t);
            for (n.freeze(), e = 0; e < r.length; e++) n.removeSource(r[e]);
            n.thaw()
          }, t.prototype.refetchEventSources = function (t) {
            var e, n = this.eventManager,
              r = n.multiQuerySources(t);
            for (n.freeze(), e = 0; e < r.length; e++) n.refetchSource(r[e]);
            n.thaw()
          }, t.defaults = s.globalDefaults, t.englishDefaults = s.englishDefaults, t.rtlDefaults = s.rtlDefaults, t
        }();

      function I(t, e) {
        return null == e ? t : r.isFunction(e) ? t.filter(e) : (e += "", t.filter(function (t) {
          return t.id == e || t._id === e
        }))
      }
      e.default = M, u.default.mixInto(M), c.default.mixInto(M)
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(0),
        i = n(4),
        o = n(5),
        s = function () {
          function t(t) {
            this._view = t
          }
          return t.prototype.opt = function (t) {
            return this._view.opt(t)
          }, t.prototype.trimHiddenDays = function (t) {
            return this._view.trimHiddenDays(t)
          }, t.prototype.msToUtcMoment = function (t, e) {
            return this._view.calendar.msToUtcMoment(t, e)
          }, t.prototype.buildPrev = function (t) {
            var e = t.date.clone().startOf(t.currentRangeUnit).subtract(t.dateIncrement);
            return this.build(e, -1)
          }, t.prototype.buildNext = function (t) {
            var e = t.date.clone().startOf(t.currentRangeUnit).add(t.dateIncrement);
            return this.build(e, 1)
          }, t.prototype.build = function (t, e, n) {
            void 0 === n && (n = !1);
            var i, o, s, a, l, u, c, d, h = !t.hasTime();
            return i = this.buildValidRange(), i = this.trimHiddenDays(i), n && (t = this.msToUtcMoment(i.constrainDate(t), h)), a = this.buildCurrentRangeInfo(t, e), l = /^(year|month|week|day)$/.test(a.unit), u = this.buildRenderRange(this.trimHiddenDays(a.unzonedRange), a.unit, l), c = (u = this.trimHiddenDays(u)).clone(), this.opt("showNonCurrentDates") || (c = c.intersect(a.unzonedRange)), o = r.duration(this.opt("minTime")), s = r.duration(this.opt("maxTime")), (c = (c = this.adjustActiveRange(c, o, s)).intersect(i)) && (t = this.msToUtcMoment(c.constrainDate(t), h)), d = a.unzonedRange.intersectsWith(i), {
              validUnzonedRange: i,
              currentUnzonedRange: a.unzonedRange,
              currentRangeUnit: a.unit,
              isRangeAllDay: l,
              activeUnzonedRange: c,
              renderUnzonedRange: u,
              minTime: o,
              maxTime: s,
              isValid: d,
              date: t,
              dateIncrement: this.buildDateIncrement(a.duration)
            }
          }, t.prototype.buildValidRange = function () {
            return this._view.getUnzonedRangeOption("validRange", this._view.calendar.getNow()) || new o.default
          }, t.prototype.buildCurrentRangeInfo = function (t, e) {
            var n, r = this._view.viewSpec,
              o = null,
              s = null,
              a = null;
            return r.duration ? (o = r.duration, s = r.durationUnit, a = this.buildRangeFromDuration(t, e, o, s)) : (n = this.opt("dayCount")) ? (s = "day", a = this.buildRangeFromDayCount(t, e, n)) : (a = this.buildCustomVisibleRange(t)) ? s = i.computeGreatestUnit(a.getStart(), a.getEnd()) : (o = this.getFallbackDuration(), s = i.computeGreatestUnit(o), a = this.buildRangeFromDuration(t, e, o, s)), {
              duration: o,
              unit: s,
              unzonedRange: a
            }
          }, t.prototype.getFallbackDuration = function () {
            return r.duration({
              days: 1
            })
          }, t.prototype.adjustActiveRange = function (t, e, n) {
            var r = t.getStart(),
              i = t.getEnd();
            return this._view.usesMinMaxTime && (e < 0 && r.time(0).add(e), n > 864e5 && i.time(n - 864e5)), new o.default(r, i)
          }, t.prototype.buildRangeFromDuration = function (t, e, n, s) {
            var a, l, u, c, d, h = this.opt("dateAlignment");

            function f() {
              u = t.clone().startOf(h), c = u.clone().add(n), d = new o.default(u, c)
            }
            return h || ((a = this.opt("dateIncrement")) ? (l = r.duration(a), h = l < n ? i.computeDurationGreatestUnit(l, a) : s) : h = s), n.as("days") <= 1 && this._view.isHiddenDay(u) && (u = this._view.skipHiddenDays(u, e)).startOf("day"), f(), this.trimHiddenDays(d) || (t = this._view.skipHiddenDays(t, e), f()), d
          }, t.prototype.buildRangeFromDayCount = function (t, e, n) {
            var r, i = this.opt("dateAlignment"),
              s = 0,
              a = t.clone();
            i && a.startOf(i), a.startOf("day"), r = (a = this._view.skipHiddenDays(a, e)).clone();
            do {
              r.add(1, "day"), this._view.isHiddenDay(r) || s++
            } while (s < n);
            return new o.default(a, r)
          }, t.prototype.buildCustomVisibleRange = function (t) {
            var e = this._view.getUnzonedRangeOption("visibleRange", this._view.calendar.applyTimezone(t));
            return !e || null != e.startMs && null != e.endMs ? e : null
          }, t.prototype.buildRenderRange = function (t, e, n) {
            return t.clone()
          }, t.prototype.buildDateIncrement = function (t) {
            var e, n = this.opt("dateIncrement");
            return n ? r.duration(n) : (e = this.opt("dateAlignment")) ? r.duration(1, e) : t || r.duration({
              days: 1
            })
          }, t
        }();
      e.default = s
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(2),
        i = n(3),
        o = n(0),
        s = n(16),
        a = n(4),
        l = n(10),
        u = n(7),
        c = n(22),
        d = n(13),
        h = n(18),
        f = n(6),
        p = function (t) {
          function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.isDragging = !1, e
          }
          return r.__extends(e, t), e.prototype.end = function () {
            this.dragListener && this.dragListener.endInteraction()
          }, e.prototype.bindToDocument = function () {
            this.listenTo(i(document), {
              dragstart: this.handleDragStart,
              sortstart: this.handleDragStart
            })
          }, e.prototype.unbindFromDocument = function () {
            this.stopListeningTo(i(document))
          }, e.prototype.handleDragStart = function (t, e) {
            var n, r;
            this.opt("droppable") && (n = i((e ? e.item : null) || t.target), r = this.opt("dropAccept"), (i.isFunction(r) ? r.call(n[0], n) : n.is(r)) && (this.isDragging || this.listenToExternalDrag(n, t, e)))
          }, e.prototype.listenToExternalDrag = function (t, e, n) {
            var r, l = this,
              u = this.component,
              d = this.view,
              f = function (t) {
                var e, n, r, a, l = s.dataAttrPrefix;
                l && (l += "-");
                (e = t.data(l + "event") || null) && (e = "object" == typeof e ? i.extend({}, e) : {}, null == (n = e.start) && (n = e.time), r = e.duration, a = e.stick, delete e.start, delete e.time, delete e.duration, delete e.stick);
                null == n && (n = t.data(l + "start"));
                null == n && (n = t.data(l + "time"));
                null == r && (r = t.data(l + "duration"));
                null == a && (a = t.data(l + "stick"));
                return n = null != n ? o.duration(n) : null, r = null != r ? o.duration(r) : null, a = Boolean(a), {
                  eventProps: e,
                  startTime: n,
                  duration: r,
                  stick: a
                }
              }(t);
            (this.dragListener = new c.default(u, {
              interactionStart: function () {
                l.isDragging = !0
              },
              hitOver: function (t) {
                var e, n = !0,
                  i = t.component.getSafeHitFootprint(t);
                i && (r = l.computeExternalDrop(i, f)) ? (e = new h.default(r.buildInstances()), n = f.eventProps ? u.isEventInstanceGroupAllowed(e) : u.isExternalInstanceGroupAllowed(e)) : n = !1, n || (r = null, a.disableCursor()), r && u.renderDrag(u.eventRangesToEventFootprints(e.sliceRenderRanges(u.dateProfile.renderUnzonedRange, d.calendar)))
              },
              hitOut: function () {
                r = null
              },
              hitDone: function () {
                a.enableCursor(), u.unrenderDrag()
              },
              interactionEnd: function (e) {
                r && d.reportExternalDrop(r, Boolean(f.eventProps), Boolean(f.stick), t, e, n), l.isDragging = !1, l.dragListener = null
              }
            })).startDrag(e)
          }, e.prototype.computeExternalDrop = function (t, e) {
            var n, r = this.view.calendar,
              o = l.default.utc(t.unzonedRange.startMs).stripZone();
            return t.isAllDay && (e.startTime ? o.time(e.startTime) : o.stripTime()), e.duration && (n = o.clone().add(e.duration)), o = r.applyTimezone(o), n && (n = r.applyTimezone(n)), d.default.parse(i.extend({}, e.eventProps, {
              start: o,
              end: n
            }), new f.default(r))
          }, e
        }(n(15).default);
      e.default = p, u.default.mixInto(p), s.dataAttrPrefix = ""
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(2),
        i = n(3),
        o = n(4),
        s = n(36),
        a = n(50),
        l = n(22),
        u = function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return r.isResizing = !1, r.eventPointing = n, r
          }
          return r.__extends(e, t), e.prototype.end = function () {
            this.dragListener && this.dragListener.endInteraction()
          }, e.prototype.bindToEl = function (t) {
            var e = this.component;
            e.bindSegHandlerToEl(t, "mousedown", this.handleMouseDown.bind(this)), e.bindSegHandlerToEl(t, "touchstart", this.handleTouchStart.bind(this))
          }, e.prototype.handleMouseDown = function (t, e) {
            this.component.canStartResize(t, e) && this.buildDragListener(t, i(e.target).is(".fc-start-resizer")).startInteraction(e, {
              distance: 5
            })
          }, e.prototype.handleTouchStart = function (t, e) {
            this.component.canStartResize(t, e) && this.buildDragListener(t, i(e.target).is(".fc-start-resizer")).startInteraction(e)
          }, e.prototype.buildDragListener = function (t, e) {
            var n, r, i = this,
              s = this.component,
              a = this.view,
              u = a.calendar,
              c = u.eventManager,
              d = t.el,
              h = t.footprint.eventDef,
              f = t.footprint.eventInstance;
            return this.dragListener = new l.default(s, {
              scroll: this.opt("dragScroll"),
              subjectEl: d,
              interactionStart: function () {
                n = !1
              },
              dragStart: function (e) {
                n = !0, i.eventPointing.handleMouseout(t, e), i.segResizeStart(t, e)
              },
              hitOver: function (n, l, d) {
                var f, p = !0,
                  g = s.getSafeHitFootprint(d),
                  m = s.getSafeHitFootprint(n);
                g && m && (r = e ? i.computeEventStartResizeMutation(g, m, t.footprint) : i.computeEventEndResizeMutation(g, m, t.footprint)) ? (f = c.buildMutatedEventInstanceGroup(h.id, r), p = s.isEventInstanceGroupAllowed(f)) : p = !1, p ? r.isEmpty() && (r = null) : (r = null, o.disableCursor()), r && (a.hideEventsWithId(t.footprint.eventDef.id), a.renderEventResize(s.eventRangesToEventFootprints(f.sliceRenderRanges(s.dateProfile.renderUnzonedRange, u)), t))
              },
              hitOut: function () {
                r = null
              },
              hitDone: function () {
                a.unrenderEventResize(t), a.showEventsWithId(t.footprint.eventDef.id), o.enableCursor()
              },
              interactionEnd: function (e) {
                n && i.segResizeStop(t, e), r && a.reportEventResize(f, r, d, e), i.dragListener = null
              }
            })
          }, e.prototype.segResizeStart = function (t, e) {
            this.isResizing = !0, this.component.publiclyTrigger("eventResizeStart", {
              context: t.el[0],
              args: [t.footprint.getEventLegacy(), e, {}, this.view]
            })
          }, e.prototype.segResizeStop = function (t, e) {
            this.isResizing = !1, this.component.publiclyTrigger("eventResizeStop", {
              context: t.el[0],
              args: [t.footprint.getEventLegacy(), e, {}, this.view]
            })
          }, e.prototype.computeEventStartResizeMutation = function (t, e, n) {
            var r, i, o = n.componentFootprint.unzonedRange,
              l = this.component.diffDates(e.unzonedRange.getStart(), t.unzonedRange.getStart());
            return o.getStart().add(l) < o.getEnd() && ((r = new a.default).setStartDelta(l), (i = new s.default).setDateMutation(r), i)
          }, e.prototype.computeEventEndResizeMutation = function (t, e, n) {
            var r, i, o = n.componentFootprint.unzonedRange,
              l = this.component.diffDates(e.unzonedRange.getEnd(), t.unzonedRange.getEnd());
            return o.getEnd().add(l) > o.getStart() && ((r = new a.default).setEndDelta(l), (i = new s.default).setDateMutation(r), i)
          }, e
        }(n(15).default);
      e.default = u
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(2),
        i = n(4),
        o = n(36),
        s = n(50),
        a = n(54),
        l = n(22),
        u = n(244),
        c = function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return r.isDragging = !1, r.eventPointing = n, r
          }
          return r.__extends(e, t), e.prototype.end = function () {
            this.dragListener && this.dragListener.endInteraction()
          }, e.prototype.getSelectionDelay = function () {
            var t = this.opt("eventLongPressDelay");
            return null == t && (t = this.opt("longPressDelay")), t
          }, e.prototype.bindToEl = function (t) {
            var e = this.component;
            e.bindSegHandlerToEl(t, "mousedown", this.handleMousedown.bind(this)), e.bindSegHandlerToEl(t, "touchstart", this.handleTouchStart.bind(this))
          }, e.prototype.handleMousedown = function (t, e) {
            !this.component.shouldIgnoreMouse() && this.component.canStartDrag(t, e) && this.buildDragListener(t).startInteraction(e, {
              distance: 5
            })
          }, e.prototype.handleTouchStart = function (t, e) {
            var n = this.component,
              r = {
                delay: this.view.isEventDefSelected(t.footprint.eventDef) ? 0 : this.getSelectionDelay()
              };
            n.canStartDrag(t, e) ? this.buildDragListener(t).startInteraction(e, r) : n.canStartSelection(t, e) && this.buildSelectListener(t).startInteraction(e, r)
          }, e.prototype.buildSelectListener = function (t) {
            var e = this,
              n = this.view,
              r = t.footprint.eventDef,
              i = t.footprint.eventInstance;
            if (this.dragListener) return this.dragListener;
            var o = this.dragListener = new a.default({
              dragStart: function (t) {
                o.isTouch && !n.isEventDefSelected(r) && i && n.selectEventInstance(i)
              },
              interactionEnd: function (t) {
                e.dragListener = null
              }
            });
            return o
          }, e.prototype.buildDragListener = function (t) {
            var e, n, r, o = this,
              s = this.component,
              a = this.view,
              c = a.calendar,
              d = c.eventManager,
              h = t.el,
              f = t.footprint.eventDef,
              p = t.footprint.eventInstance;
            if (this.dragListener) return this.dragListener;
            var g = this.dragListener = new l.default(a, {
              scroll: this.opt("dragScroll"),
              subjectEl: h,
              subjectCenter: !0,
              interactionStart: function (r) {
                t.component = s, e = !1, (n = new u.default(t.el, {
                  additionalClass: "fc-dragging",
                  parentEl: a.el,
                  opacity: g.isTouch ? null : o.opt("dragOpacity"),
                  revertDuration: o.opt("dragRevertDuration"),
                  zIndex: 2
                })).hide(), n.start(r)
              },
              dragStart: function (n) {
                g.isTouch && !a.isEventDefSelected(f) && p && a.selectEventInstance(p), e = !0, o.eventPointing.handleMouseout(t, n), o.segDragStart(t, n), a.hideEventsWithId(t.footprint.eventDef.id)
              },
              hitOver: function (e, l, u) {
                var h, p, m, v = !0;
                t.hit && (u = t.hit), h = u.component.getSafeHitFootprint(u), p = e.component.getSafeHitFootprint(e), h && p && (r = o.computeEventDropMutation(h, p, f)) ? (m = d.buildMutatedEventInstanceGroup(f.id, r), v = s.isEventInstanceGroupAllowed(m)) : v = !1, v || (r = null, i.disableCursor()), r && a.renderDrag(s.eventRangesToEventFootprints(m.sliceRenderRanges(s.dateProfile.renderUnzonedRange, c)), t, g.isTouch) ? n.hide() : n.show(), l && (r = null)
              },
              hitOut: function () {
                a.unrenderDrag(t), n.show(), r = null
              },
              hitDone: function () {
                i.enableCursor()
              },
              interactionEnd: function (i) {
                delete t.component, n.stop(!r, function () {
                  e && (a.unrenderDrag(t), o.segDragStop(t, i)), a.showEventsWithId(t.footprint.eventDef.id), r && a.reportEventDrop(p, r, h, i)
                }), o.dragListener = null
              }
            });
            return g
          }, e.prototype.segDragStart = function (t, e) {
            this.isDragging = !0, this.component.publiclyTrigger("eventDragStart", {
              context: t.el[0],
              args: [t.footprint.getEventLegacy(), e, {}, this.view]
            })
          }, e.prototype.segDragStop = function (t, e) {
            this.isDragging = !1, this.component.publiclyTrigger("eventDragStop", {
              context: t.el[0],
              args: [t.footprint.getEventLegacy(), e, {}, this.view]
            })
          }, e.prototype.computeEventDropMutation = function (t, e, n) {
            var r = new o.default;
            return r.setDateMutation(this.computeEventDateMutation(t, e)), r
          }, e.prototype.computeEventDateMutation = function (t, e) {
            var n, r, i = t.unzonedRange.getStart(),
              o = e.unzonedRange.getStart(),
              a = !1,
              l = !1,
              u = !1;
            return t.isAllDay !== e.isAllDay && (a = !0, e.isAllDay ? (u = !0, i.stripTime()) : l = !0), n = this.component.diffDates(o, i), (r = new s.default).clearEnd = a, r.forceTimed = l, r.forceAllDay = u, r.setDateDelta(n), r
          }, e
        }(n(15).default);
      e.default = c
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(2),
        i = n(4),
        o = n(22),
        s = n(12),
        a = n(5),
        l = function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return n.dragListener = n.buildDragListener(), n
          }
          return r.__extends(e, t), e.prototype.end = function () {
            this.dragListener.endInteraction()
          }, e.prototype.getDelay = function () {
            var t = this.opt("selectLongPressDelay");
            return null == t && (t = this.opt("longPressDelay")), t
          }, e.prototype.bindToEl = function (t) {
            var e = this,
              n = this.component,
              r = this.dragListener;
            n.bindDateHandlerToEl(t, "mousedown", function (t) {
              e.opt("selectable") && !n.shouldIgnoreMouse() && r.startInteraction(t, {
                distance: e.opt("selectMinDistance")
              })
            }), n.bindDateHandlerToEl(t, "touchstart", function (t) {
              e.opt("selectable") && !n.shouldIgnoreTouch() && r.startInteraction(t, {
                delay: e.getDelay()
              })
            }), i.preventSelection(t)
          }, e.prototype.buildDragListener = function () {
            var t, e = this,
              n = this.component;
            return new o.default(n, {
              scroll: this.opt("dragScroll"),
              interactionStart: function () {
                t = null
              },
              dragStart: function (t) {
                e.view.unselect(t)
              },
              hitOver: function (r, o, s) {
                var a, l;
                s && (a = n.getSafeHitFootprint(s), l = n.getSafeHitFootprint(r), (t = a && l ? e.computeSelection(a, l) : null) ? n.renderSelectionFootprint(t) : !1 === t && i.disableCursor())
              },
              hitOut: function () {
                t = null, n.unrenderSelection()
              },
              hitDone: function () {
                i.enableCursor()
              },
              interactionEnd: function (n, r) {
                !r && t && e.view.reportSelection(t, n)
              }
            })
          }, e.prototype.computeSelection = function (t, e) {
            var n = this.computeSelectionFootprint(t, e);
            return !(n && !this.isSelectionFootprintAllowed(n)) && n
          }, e.prototype.computeSelectionFootprint = function (t, e) {
            var n = [t.unzonedRange.startMs, t.unzonedRange.endMs, e.unzonedRange.startMs, e.unzonedRange.endMs];
            return n.sort(i.compareNumbers), new s.default(new a.default(n[0], n[3]), t.isAllDay)
          }, e.prototype.isSelectionFootprintAllowed = function (t) {
            return this.component.dateProfile.validUnzonedRange.containsRange(t.unzonedRange) && this.view.calendar.constraints.isSelectionFootprintAllowed(t)
          }, e
        }(n(15).default);
      e.default = l
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r, i, o = n(2),
        s = n(0),
        a = n(3),
        l = n(4),
        u = n(39),
        c = n(41),
        d = n(227),
        h = n(61),
        f = function (t) {
          function e(e, n) {
            var r = t.call(this, e, n) || this;
            return r.usesMinMaxTime = !0, r.timeGrid = r.instantiateTimeGrid(), r.addChild(r.timeGrid), r.opt("allDaySlot") && (r.dayGrid = r.instantiateDayGrid(), r.addChild(r.dayGrid)), r.scroller = new u.default({
              overflowX: "hidden",
              overflowY: "auto"
            }), r
          }
          return o.__extends(e, t), e.prototype.instantiateTimeGrid = function () {
            var t = new this.timeGridClass(this);
            return l.copyOwnProps(r, t), t
          }, e.prototype.instantiateDayGrid = function () {
            var t = new this.dayGridClass(this);
            return l.copyOwnProps(i, t), t
          }, e.prototype.renderSkeleton = function () {
            var t, e;
            this.el.addClass("fc-agenda-view").html(this.renderSkeletonHtml()), this.scroller.render(), t = this.scroller.el.addClass("fc-time-grid-container"), e = a('<div class="fc-time-grid" />').appendTo(t), this.el.find(".fc-body > tr > td").append(t), this.timeGrid.headContainerEl = this.el.find(".fc-head-container"), this.timeGrid.setElement(e), this.dayGrid && (this.dayGrid.setElement(this.el.find(".fc-day-grid")), this.dayGrid.bottomCoordPadding = this.dayGrid.el.next("hr").outerHeight())
          }, e.prototype.unrenderSkeleton = function () {
            this.timeGrid.removeElement(), this.dayGrid && this.dayGrid.removeElement(), this.scroller.destroy()
          }, e.prototype.renderSkeletonHtml = function () {
            var t = this.calendar.theme;
            return '<table class="' + t.getClass("tableGrid") + '">' + (this.opt("columnHeader") ? '<thead class="fc-head"><tr><td class="fc-head-container ' + t.getClass("widgetHeader") + '">&nbsp;</td></tr></thead>' : "") + '<tbody class="fc-body"><tr><td class="' + t.getClass("widgetContent") + '">' + (this.dayGrid ? '<div class="fc-day-grid"/><hr class="fc-divider ' + t.getClass("widgetHeader") + '"/>' : "") + "</td></tr></tbody></table>"
          }, e.prototype.axisStyleAttr = function () {
            return null != this.axisWidth ? 'style="width:' + this.axisWidth + 'px"' : ""
          }, e.prototype.getNowIndicatorUnit = function () {
            return this.timeGrid.getNowIndicatorUnit()
          }, e.prototype.updateSize = function (e, n, r) {
            var i, o, s;
            if (t.prototype.updateSize.call(this, e, n, r), this.axisWidth = l.matchCellWidths(this.el.find(".fc-axis")), this.timeGrid.colEls) {
              var a = this.el.find(".fc-row:not(.fc-scroller *)");
              this.timeGrid.bottomRuleEl.hide(), this.scroller.clear(), l.uncompensateScroll(a), this.dayGrid && (this.dayGrid.removeSegPopover(), (i = this.opt("eventLimit")) && "number" != typeof i && (i = 5), i && this.dayGrid.limitRows(i)), n || (o = this.computeScrollerHeight(e), this.scroller.setHeight(o), ((s = this.scroller.getScrollbarWidths()).left || s.right) && (l.compensateScroll(a, s), o = this.computeScrollerHeight(e), this.scroller.setHeight(o)), this.scroller.lockOverflow(s), this.timeGrid.getTotalSlatHeight() < o && this.timeGrid.bottomRuleEl.show())
            } else n || (o = this.computeScrollerHeight(e), this.scroller.setHeight(o))
          }, e.prototype.computeScrollerHeight = function (t) {
            return t - l.subtractInnerElHeight(this.el, this.scroller.el)
          }, e.prototype.computeInitialDateScroll = function () {
            var t = s.duration(this.opt("scrollTime")),
              e = this.timeGrid.computeTimeTop(t);
            return (e = Math.ceil(e)) && e++, {
              top: e
            }
          }, e.prototype.queryDateScroll = function () {
            return {
              top: this.scroller.getScrollTop()
            }
          }, e.prototype.applyDateScroll = function (t) {
            void 0 !== t.top && this.scroller.setScrollTop(t.top)
          }, e.prototype.getHitFootprint = function (t) {
            return t.component.getHitFootprint(t)
          }, e.prototype.getHitEl = function (t) {
            return t.component.getHitEl(t)
          }, e.prototype.executeEventRender = function (t) {
            var e, n, r = {},
              i = {};
            for (e in t)(n = t[e]).getEventDef().isAllDay() ? r[e] = n : i[e] = n;
            this.timeGrid.executeEventRender(i), this.dayGrid && this.dayGrid.executeEventRender(r)
          }, e.prototype.renderDrag = function (t, e, n) {
            var r = p(t),
              i = !1;
            return i = this.timeGrid.renderDrag(r.timed, e, n), this.dayGrid && (i = this.dayGrid.renderDrag(r.allDay, e, n) || i), i
          }, e.prototype.renderEventResize = function (t, e, n) {
            var r = p(t);
            this.timeGrid.renderEventResize(r.timed, e, n), this.dayGrid && this.dayGrid.renderEventResize(r.allDay, e, n)
          }, e.prototype.renderSelectionFootprint = function (t) {
            t.isAllDay ? this.dayGrid && this.dayGrid.renderSelectionFootprint(t) : this.timeGrid.renderSelectionFootprint(t)
          }, e
        }(c.default);

      function p(t) {
        var e, n = [],
          r = [];
        for (e = 0; e < t.length; e++) t[e].componentFootprint.isAllDay ? n.push(t[e]) : r.push(t[e]);
        return {
          allDay: n,
          timed: r
        }
      }
      e.default = f, f.prototype.timeGridClass = d.default, f.prototype.dayGridClass = h.default, r = {
        renderHeadIntroHtml: function () {
          var t, e = this.view,
            n = e.calendar,
            r = n.msToUtcMoment(this.dateProfile.renderUnzonedRange.startMs, !0);
          return this.opt("weekNumbers") ? (t = r.format(this.opt("smallWeekFormat")), '<th class="fc-axis fc-week-number ' + n.theme.getClass("widgetHeader") + '" ' + e.axisStyleAttr() + ">" + e.buildGotoAnchorHtml({
            date: r,
            type: "week",
            forceOff: this.colCnt > 1
          }, l.htmlEscape(t)) + "</th>") : '<th class="fc-axis ' + n.theme.getClass("widgetHeader") + '" ' + e.axisStyleAttr() + "></th>"
        },
        renderBgIntroHtml: function () {
          var t = this.view;
          return '<td class="fc-axis ' + t.calendar.theme.getClass("widgetContent") + '" ' + t.axisStyleAttr() + "></td>"
        },
        renderIntroHtml: function () {
          return '<td class="fc-axis" ' + this.view.axisStyleAttr() + "></td>"
        }
      }, i = {
        renderBgIntroHtml: function () {
          var t = this.view;
          return '<td class="fc-axis ' + t.calendar.theme.getClass("widgetContent") + '" ' + t.axisStyleAttr() + "><span>" + t.getAllDayHtml() + "</span></td>"
        },
        renderIntroHtml: function () {
          return '<td class="fc-axis" ' + this.view.axisStyleAttr() + "></td>"
        }
      }
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(2),
        i = n(3),
        o = n(0),
        s = n(4),
        a = n(40),
        l = n(56),
        u = n(60),
        c = n(55),
        d = n(53),
        h = n(5),
        f = n(12),
        p = n(246),
        g = n(247),
        m = n(248),
        v = [{
          hours: 1
        }, {
          minutes: 30
        }, {
          minutes: 15
        }, {
          seconds: 30
        }, {
          seconds: 15
        }],
        y = function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return n.processOptions(), n
          }
          return r.__extends(e, t), e.prototype.componentFootprintToSegs = function (t) {
            var e, n = this.sliceRangeByTimes(t.unzonedRange);
            for (e = 0; e < n.length; e++) this.isRTL ? n[e].col = this.daysPerRow - 1 - n[e].dayIndex : n[e].col = n[e].dayIndex;
            return n
          }, e.prototype.sliceRangeByTimes = function (t) {
            var e, n, r = [];
            for (n = 0; n < this.daysPerRow; n++)(e = t.intersect(this.dayRanges[n])) && r.push({
              startMs: e.startMs,
              endMs: e.endMs,
              isStart: e.isStart,
              isEnd: e.isEnd,
              dayIndex: n
            });
            return r
          }, e.prototype.processOptions = function () {
            var t, e = this.opt("slotDuration"),
              n = this.opt("snapDuration");
            e = o.duration(e), n = n ? o.duration(n) : e, this.slotDuration = e, this.snapDuration = n, this.snapsPerSlot = e / n, t = this.opt("slotLabelFormat"), i.isArray(t) && (t = t[t.length - 1]), this.labelFormat = t || this.opt("smallTimeFormat"), t = this.opt("slotLabelInterval"), this.labelInterval = t ? o.duration(t) : this.computeLabelInterval(e)
          }, e.prototype.computeLabelInterval = function (t) {
            var e, n, r;
            for (e = v.length - 1; e >= 0; e--)
              if (n = o.duration(v[e]), r = s.divideDurationByDuration(n, t), s.isInt(r) && r > 1) return n;
            return o.duration(t)
          }, e.prototype.renderDates = function (t) {
            this.dateProfile = t, this.updateDayTable(), this.renderSlats(), this.renderColumns()
          }, e.prototype.unrenderDates = function () {
            this.unrenderColumns()
          }, e.prototype.renderSkeleton = function () {
            var t = this.view.calendar.theme;
            this.el.html('<div class="fc-bg"></div><div class="fc-slats"></div><hr class="fc-divider ' + t.getClass("widgetHeader") + '" style="display:none" />'), this.bottomRuleEl = this.el.find("hr")
          }, e.prototype.renderSlats = function () {
            var t = this.view.calendar.theme;
            this.slatContainerEl = this.el.find("> .fc-slats").html('<table class="' + t.getClass("tableGrid") + '">' + this.renderSlatRowHtml() + "</table>"), this.slatEls = this.slatContainerEl.find("tr"), this.slatCoordCache = new d.default({
              els: this.slatEls,
              isVertical: !0
            })
          }, e.prototype.renderSlatRowHtml = function () {
            for (var t, e, n, r = this.view, i = r.calendar, a = i.theme, l = this.isRTL, u = this.dateProfile, c = "", d = o.duration(+u.minTime), h = o.duration(0); d < u.maxTime;) t = i.msToUtcMoment(u.renderUnzonedRange.startMs).time(d), e = s.isInt(s.divideDurationByDuration(h, this.labelInterval)), n = '<td class="fc-axis fc-time ' + a.getClass("widgetContent") + '" ' + r.axisStyleAttr() + ">" + (e ? "<span>" + s.htmlEscape(t.format(this.labelFormat)) + "</span>" : "") + "</td>", c += '<tr data-time="' + t.format("HH:mm:ss") + '"' + (e ? "" : ' class="fc-minor"') + ">" + (l ? "" : n) + '<td class="' + a.getClass("widgetContent") + '"/>' + (l ? n : "") + "</tr>", d.add(this.slotDuration), h.add(this.slotDuration);
            return c
          }, e.prototype.renderColumns = function () {
            var t = this.dateProfile,
              e = this.view.calendar.theme;
            this.dayRanges = this.dayDates.map(function (e) {
              return new h.default(e.clone().add(t.minTime), e.clone().add(t.maxTime))
            }), this.headContainerEl && this.headContainerEl.html(this.renderHeadHtml()), this.el.find("> .fc-bg").html('<table class="' + e.getClass("tableGrid") + '">' + this.renderBgTrHtml(0) + "</table>"), this.colEls = this.el.find(".fc-day, .fc-disabled-day"), this.colCoordCache = new d.default({
              els: this.colEls,
              isHorizontal: !0
            }), this.renderContentSkeleton()
          }, e.prototype.unrenderColumns = function () {
            this.unrenderContentSkeleton()
          }, e.prototype.renderContentSkeleton = function () {
            var t, e, n = "";
            for (t = 0; t < this.colCnt; t++) n += '<td><div class="fc-content-col"><div class="fc-event-container fc-helper-container"></div><div class="fc-event-container"></div><div class="fc-highlight-container"></div><div class="fc-bgevent-container"></div><div class="fc-business-container"></div></div></td>';
            e = this.contentSkeletonEl = i('<div class="fc-content-skeleton"><table><tr>' + n + "</tr></table></div>"), this.colContainerEls = e.find(".fc-content-col"), this.helperContainerEls = e.find(".fc-helper-container"), this.fgContainerEls = e.find(".fc-event-container:not(.fc-helper-container)"), this.bgContainerEls = e.find(".fc-bgevent-container"), this.highlightContainerEls = e.find(".fc-highlight-container"), this.businessContainerEls = e.find(".fc-business-container"), this.bookendCells(e.find("tr")), this.el.append(e)
          }, e.prototype.unrenderContentSkeleton = function () {
            this.contentSkeletonEl && (this.contentSkeletonEl.remove(), this.contentSkeletonEl = null, this.colContainerEls = null, this.helperContainerEls = null, this.fgContainerEls = null, this.bgContainerEls = null, this.highlightContainerEls = null, this.businessContainerEls = null)
          }, e.prototype.groupSegsByCol = function (t) {
            var e, n = [];
            for (e = 0; e < this.colCnt; e++) n.push([]);
            for (e = 0; e < t.length; e++) n[t[e].col].push(t[e]);
            return n
          }, e.prototype.attachSegsByCol = function (t, e) {
            var n, r, i;
            for (n = 0; n < this.colCnt; n++)
              for (r = t[n], i = 0; i < r.length; i++) e.eq(n).append(r[i].el)
          }, e.prototype.getNowIndicatorUnit = function () {
            return "minute"
          }, e.prototype.renderNowIndicator = function (t) {
            if (this.colContainerEls) {
              var e, n = this.componentFootprintToSegs(new f.default(new h.default(t, t.valueOf() + 1), !1)),
                r = this.computeDateTop(t, t),
                o = [];
              for (e = 0; e < n.length; e++) o.push(i('<div class="fc-now-indicator fc-now-indicator-line"></div>').css("top", r).appendTo(this.colContainerEls.eq(n[e].col))[0]);
              n.length > 0 && o.push(i('<div class="fc-now-indicator fc-now-indicator-arrow"></div>').css("top", r).appendTo(this.el.find(".fc-content-skeleton"))[0]), this.nowIndicatorEls = i(o)
            }
          }, e.prototype.unrenderNowIndicator = function () {
            this.nowIndicatorEls && (this.nowIndicatorEls.remove(), this.nowIndicatorEls = null)
          }, e.prototype.updateSize = function (e, n, r) {
            t.prototype.updateSize.call(this, e, n, r), this.slatCoordCache.build(), r && this.updateSegVerticals([].concat(this.eventRenderer.getSegs(), this.businessSegs || []))
          }, e.prototype.getTotalSlatHeight = function () {
            return this.slatContainerEl.outerHeight()
          }, e.prototype.computeDateTop = function (t, e) {
            return this.computeTimeTop(o.duration(t - e.clone().stripTime()))
          }, e.prototype.computeTimeTop = function (t) {
            var e, n, r = this.slatEls.length,
              i = (t - this.dateProfile.minTime) / this.slotDuration;
            return i = Math.max(0, i), i = Math.min(r, i), e = Math.floor(i), n = i - (e = Math.min(e, r - 1)), this.slatCoordCache.getTopPosition(e) + this.slatCoordCache.getHeight(e) * n
          }, e.prototype.updateSegVerticals = function (t) {
            this.computeSegVerticals(t), this.assignSegVerticals(t)
          }, e.prototype.computeSegVerticals = function (t) {
            var e, n, r, i = this.opt("agendaEventMinHeight");
            for (e = 0; e < t.length; e++) n = t[e], r = this.dayDates[n.dayIndex], n.top = this.computeDateTop(n.startMs, r), n.bottom = Math.max(n.top + i, this.computeDateTop(n.endMs, r))
          }, e.prototype.assignSegVerticals = function (t) {
            var e, n;
            for (e = 0; e < t.length; e++)(n = t[e]).el.css(this.generateSegVerticalCss(n))
          }, e.prototype.generateSegVerticalCss = function (t) {
            return {
              top: t.top,
              bottom: -t.bottom
            }
          }, e.prototype.prepareHits = function () {
            this.colCoordCache.build(), this.slatCoordCache.build()
          }, e.prototype.releaseHits = function () {
            this.colCoordCache.clear()
          }, e.prototype.queryHit = function (t, e) {
            var n = this.snapsPerSlot,
              r = this.colCoordCache,
              i = this.slatCoordCache;
            if (r.isLeftInBounds(t) && i.isTopInBounds(e)) {
              var o = r.getHorizontalIndex(t),
                s = i.getVerticalIndex(e);
              if (null != o && null != s) {
                var a = i.getTopOffset(s),
                  l = i.getHeight(s),
                  u = (e - a) / l,
                  c = Math.floor(u * n),
                  d = a + c / n * l,
                  h = a + (c + 1) / n * l;
                return {
                  col: o,
                  snap: s * n + c,
                  component: this,
                  left: r.getLeftOffset(o),
                  right: r.getRightOffset(o),
                  top: d,
                  bottom: h
                }
              }
            }
          }, e.prototype.getHitFootprint = function (t) {
            var e, n = this.getCellDate(0, t.col),
              r = this.computeSnapTime(t.snap);
            return n.time(r), e = n.clone().add(this.snapDuration), new f.default(new h.default(n, e), !1)
          }, e.prototype.computeSnapTime = function (t) {
            return o.duration(this.dateProfile.minTime + this.snapDuration * t)
          }, e.prototype.getHitEl = function (t) {
            return this.colEls.eq(t.col)
          }, e.prototype.renderDrag = function (t, e, n) {
            var r;
            if (e) {
              if (t.length) return this.helperRenderer.renderEventDraggingFootprints(t, e, n), !0
            } else
              for (r = 0; r < t.length; r++) this.renderHighlight(t[r].componentFootprint)
          }, e.prototype.unrenderDrag = function () {
            this.unrenderHighlight(), this.helperRenderer.unrender()
          }, e.prototype.renderEventResize = function (t, e, n) {
            this.helperRenderer.renderEventResizingFootprints(t, e, n)
          }, e.prototype.unrenderEventResize = function () {
            this.helperRenderer.unrender()
          }, e.prototype.renderSelectionFootprint = function (t) {
            this.opt("selectHelper") ? this.helperRenderer.renderComponentFootprint(t) : this.renderHighlight(t)
          }, e.prototype.unrenderSelection = function () {
            this.helperRenderer.unrender(), this.unrenderHighlight()
          }, e
        }(a.default);
      e.default = y, y.prototype.eventRendererClass = p.default, y.prototype.businessHourRendererClass = l.default, y.prototype.helperRendererClass = g.default, y.prototype.fillRendererClass = m.default, u.default.mixInto(y), c.default.mixInto(y)
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(2),
        i = n(5),
        o = function (t) {
          function e() {
            return null !== t && t.apply(this, arguments) || this
          }
          return r.__extends(e, t), e.prototype.buildRenderRange = function (e, n, r) {
            var o = t.prototype.buildRenderRange.call(this, e, n, r),
              s = this.msToUtcMoment(o.startMs, r),
              a = this.msToUtcMoment(o.endMs, r);
            return /^(year|month)$/.test(n) && (s.startOf("week"), a.weekday() && a.add(1, "week").startOf("week")), new i.default(s, a)
          }, e
        }(n(221).default);
      e.default = o
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(2),
        i = n(0),
        o = n(4),
        s = n(62),
        a = n(253),
        l = function (t) {
          function e() {
            return null !== t && t.apply(this, arguments) || this
          }
          return r.__extends(e, t), e.prototype.setGridHeight = function (t, e) {
            e && (t *= this.dayGrid.rowCnt / 6), o.distributeHeight(this.dayGrid.rowEls, t, !e)
          }, e.prototype.isDateInOtherMonth = function (t, e) {
            return t.month() !== i.utc(e.currentUnzonedRange.startMs).month()
          }, e
        }(s.default);
      e.default = l, l.prototype.dateProfileGeneratorClass = a.default
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(2),
        i = n(3),
        o = n(4),
        s = n(5),
        a = n(41),
        l = n(39),
        u = n(254),
        c = n(255),
        d = function (t) {
          function e(e, n) {
            var r = t.call(this, e, n) || this;
            return r.segSelector = ".fc-list-item", r.scroller = new l.default({
              overflowX: "hidden",
              overflowY: "auto"
            }), r
          }
          return r.__extends(e, t), e.prototype.renderSkeleton = function () {
            this.el.addClass("fc-list-view " + this.calendar.theme.getClass("listView")), this.scroller.render(), this.scroller.el.appendTo(this.el), this.contentEl = this.scroller.scrollEl
          }, e.prototype.unrenderSkeleton = function () {
            this.scroller.destroy()
          }, e.prototype.updateSize = function (t, e, n) {
            this.scroller.setHeight(this.computeScrollerHeight(t))
          }, e.prototype.computeScrollerHeight = function (t) {
            return t - o.subtractInnerElHeight(this.el, this.scroller.el)
          }, e.prototype.renderDates = function (t) {
            for (var e = this.calendar, n = e.msToUtcMoment(t.renderUnzonedRange.startMs, !0), r = e.msToUtcMoment(t.renderUnzonedRange.endMs, !0), i = [], o = []; n < r;) i.push(n.clone()), o.push(new s.default(n, n.clone().add(1, "day"))), n.add(1, "day");
            this.dayDates = i, this.dayRanges = o
          }, e.prototype.componentFootprintToSegs = function (t) {
            var e, n, r, i = this.dayRanges,
              o = [];
            for (e = 0; e < i.length; e++)
              if ((n = t.unzonedRange.intersect(i[e])) && (r = {
                  startMs: n.startMs,
                  endMs: n.endMs,
                  isStart: n.isStart,
                  isEnd: n.isEnd,
                  dayIndex: e
                }, o.push(r), !r.isEnd && !t.isAllDay && e + 1 < i.length && t.unzonedRange.endMs < i[e + 1].startMs + this.nextDayThreshold)) {
                r.endMs = t.unzonedRange.endMs, r.isEnd = !0;
                break
              } return o
          }, e.prototype.renderEmptyMessage = function () {
            this.contentEl.html('<div class="fc-list-empty-wrap2"><div class="fc-list-empty-wrap1"><div class="fc-list-empty">' + o.htmlEscape(this.opt("noEventsMessage")) + "</div></div></div>")
          }, e.prototype.renderSegList = function (t) {
            var e, n, r, o = this.groupSegsByDay(t),
              s = i('<table class="fc-list-table ' + this.calendar.theme.getClass("tableList") + '"><tbody/></table>'),
              a = s.find("tbody");
            for (e = 0; e < o.length; e++)
              if (n = o[e])
                for (a.append(this.dayHeaderHtml(this.dayDates[e])), this.eventRenderer.sortEventSegs(n), r = 0; r < n.length; r++) a.append(n[r].el);
            this.contentEl.empty().append(s)
          }, e.prototype.groupSegsByDay = function (t) {
            var e, n, r = [];
            for (e = 0; e < t.length; e++)(r[(n = t[e]).dayIndex] || (r[n.dayIndex] = [])).push(n);
            return r
          }, e.prototype.dayHeaderHtml = function (t) {
            var e = this.opt("listDayFormat"),
              n = this.opt("listDayAltFormat");
            return '<tr class="fc-list-heading" data-date="' + t.format("YYYY-MM-DD") + '"><td class="' + this.calendar.theme.getClass("widgetHeader") + '" colspan="3">' + (e ? this.buildGotoAnchorHtml(t, {
              class: "fc-list-heading-main"
            }, o.htmlEscape(t.format(e))) : "") + (n ? this.buildGotoAnchorHtml(t, {
              class: "fc-list-heading-alt"
            }, o.htmlEscape(t.format(n))) : "") + "</td></tr>"
          }, e
        }(a.default);
      e.default = d, d.prototype.eventRendererClass = u.default, d.prototype.eventPointingClass = c.default
    }, , , , , , function (t, e, n) {
      var r = n(3),
        i = n(16),
        o = n(4),
        s = n(220);
      n(10), n(47), n(256), n(257), n(259), n(260), n(261), n(262), r.fullCalendar = i, r.fn.fullCalendar = function (t) {
        var e = Array.prototype.slice.call(arguments, 1),
          n = this;
        return this.each(function (i, a) {
          var l, u = r(a),
            c = u.data("fullCalendar");
          "string" == typeof t ? "getCalendar" === t ? i || (n = c) : "destroy" === t ? c && (c.destroy(), u.removeData("fullCalendar")) : c ? r.isFunction(c[t]) ? (l = c[t].apply(c, e), i || (n = l), "destroy" === t && u.removeData("fullCalendar")) : o.warn("'" + t + "' is an unknown FullCalendar method.") : o.warn("Attempting to call a FullCalendar method on an element with no calendar.") : c || (c = new s.default(u, t), u.data("fullCalendar", c), c.render())
        }), n
      }, t.exports = i
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(2),
        i = function (t) {
          function e() {
            return null !== t && t.apply(this, arguments) || this
          }
          return r.__extends(e, t), e.prototype.setElement = function (t) {
            this.el = t, this.bindGlobalHandlers(), this.renderSkeleton(), this.set("isInDom", !0)
          }, e.prototype.removeElement = function () {
            this.unset("isInDom"), this.unrenderSkeleton(), this.unbindGlobalHandlers(), this.el.remove()
          }, e.prototype.bindGlobalHandlers = function () {}, e.prototype.unbindGlobalHandlers = function () {}, e.prototype.renderSkeleton = function () {}, e.prototype.unrenderSkeleton = function () {}, e
        }(n(48).default);
      e.default = i
    }, function (t, e) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var n = function () {
        function t(t) {
          this.items = t || []
        }
        return t.prototype.proxyCall = function (t) {
          for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
          var r = [];
          return this.items.forEach(function (n) {
            r.push(n[t].apply(n, e))
          }), r
        }, t
      }();
      e.default = n
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(3),
        i = n(4),
        o = function () {
          function t(t, e) {
            this.el = null, this.viewsWithButtons = [], this.calendar = t, this.toolbarOptions = e
          }
          return t.prototype.setToolbarOptions = function (t) {
            this.toolbarOptions = t
          }, t.prototype.render = function () {
            var t = this.toolbarOptions.layout,
              e = this.el;
            t ? (e ? e.empty() : e = this.el = r("<div class='fc-toolbar " + this.toolbarOptions.extraClasses + "'/>"), e.append(this.renderSection("left")).append(this.renderSection("right")).append(this.renderSection("center")).append('<div class="fc-clear"/>')) : this.removeElement()
          }, t.prototype.removeElement = function () {
            this.el && (this.el.remove(), this.el = null)
          }, t.prototype.renderSection = function (t) {
            var e = this,
              n = this.calendar,
              o = n.theme,
              s = n.optionsManager,
              a = n.viewSpecManager,
              l = r('<div class="fc-' + t + '"/>'),
              u = this.toolbarOptions.layout[t],
              c = s.get("customButtons") || {},
              d = s.overrides.buttonText || {},
              h = s.get("buttonText") || {};
            return u && r.each(u.split(" "), function (t, s) {
              var u, f = r(),
                p = !0;
              r.each(s.split(","), function (t, s) {
                var l, u, g, m, v, y, b, w, _;
                "title" === s ? (f = f.add(r("<h2>&nbsp;</h2>")), p = !1) : ((l = c[s]) ? (g = function (t) {
                  l.click && l.click.call(w[0], t)
                }, (m = o.getCustomButtonIconClass(l)) || (m = o.getIconClass(s)) || (v = l.text)) : (u = a.getViewSpec(s)) ? (e.viewsWithButtons.push(s), g = function () {
                  n.changeView(s)
                }, (v = u.buttonTextOverride) || (m = o.getIconClass(s)) || (v = u.buttonTextDefault)) : n[s] && (g = function () {
                  n[s]()
                }, (v = d[s]) || (m = o.getIconClass(s)) || (v = h[s])), g && (b = ["fc-" + s + "-button", o.getClass("button"), o.getClass("stateDefault")], v ? (y = i.htmlEscape(v), _ = "") : m && (y = "<span class='" + m + "'></span>", _ = ' aria-label="' + s + '"'), w = r('<button type="button" class="' + b.join(" ") + '"' + _ + ">" + y + "</button>").click(function (t) {
                  w.hasClass(o.getClass("stateDisabled")) || (g(t), (w.hasClass(o.getClass("stateActive")) || w.hasClass(o.getClass("stateDisabled"))) && w.removeClass(o.getClass("stateHover")))
                }).mousedown(function () {
                  w.not("." + o.getClass("stateActive")).not("." + o.getClass("stateDisabled")).addClass(o.getClass("stateDown"))
                }).mouseup(function () {
                  w.removeClass(o.getClass("stateDown"))
                }).hover(function () {
                  w.not("." + o.getClass("stateActive")).not("." + o.getClass("stateDisabled")).addClass(o.getClass("stateHover"))
                }, function () {
                  w.removeClass(o.getClass("stateHover")).removeClass(o.getClass("stateDown"))
                }), f = f.add(w)))
              }), p && f.first().addClass(o.getClass("cornerLeft")).end().last().addClass(o.getClass("cornerRight")).end(), f.length > 1 ? (u = r("<div/>"), p && u.addClass(o.getClass("buttonGroup")), u.append(f), l.append(u)) : l.append(f)
            }), l
          }, t.prototype.updateTitle = function (t) {
            this.el && this.el.find("h2").text(t)
          }, t.prototype.activateButton = function (t) {
            this.el && this.el.find(".fc-" + t + "-button").addClass(this.calendar.theme.getClass("stateActive"))
          }, t.prototype.deactivateButton = function (t) {
            this.el && this.el.find(".fc-" + t + "-button").removeClass(this.calendar.theme.getClass("stateActive"))
          }, t.prototype.disableButton = function (t) {
            this.el && this.el.find(".fc-" + t + "-button").prop("disabled", !0).addClass(this.calendar.theme.getClass("stateDisabled"))
          }, t.prototype.enableButton = function (t) {
            this.el && this.el.find(".fc-" + t + "-button").prop("disabled", !1).removeClass(this.calendar.theme.getClass("stateDisabled"))
          }, t.prototype.getViewsWithButtons = function () {
            return this.viewsWithButtons
          }, t
        }();
      e.default = o
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(2),
        i = n(3),
        o = n(4),
        s = n(31),
        a = n(30),
        l = function (t) {
          function e(e, n) {
            var r = t.call(this) || this;
            return r._calendar = e, r.overrides = i.extend({}, n), r.dynamicOverrides = {}, r.compute(), r
          }
          return r.__extends(e, t), e.prototype.add = function (t) {
            var e, n = 0;
            for (e in this.recordOverrides(t), t) n++;
            if (1 === n) {
              if ("height" === e || "contentHeight" === e || "aspectRatio" === e) return void this._calendar.updateViewSize(!0);
              if ("defaultDate" === e) return;
              if ("businessHours" === e) return;
              if (/^(event|select)(Overlap|Constraint|Allow)$/.test(e)) return;
              if ("timezone" === e) return void this._calendar.view.flash("initialEvents")
            }
            this._calendar.renderHeader(), this._calendar.renderFooter(), this._calendar.viewsByType = {}, this._calendar.reinitView()
          }, e.prototype.compute = function () {
            var t, e, n, r;
            t = o.firstDefined(this.dynamicOverrides.locale, this.overrides.locale), (e = a.localeOptionHash[t]) || (t = s.globalDefaults.locale, e = a.localeOptionHash[t] || {}), n = o.firstDefined(this.dynamicOverrides.isRTL, this.overrides.isRTL, e.isRTL, s.globalDefaults.isRTL) ? s.rtlDefaults : {}, this.dirDefaults = n, this.localeDefaults = e, r = s.mergeOptions([s.globalDefaults, n, e, this.overrides, this.dynamicOverrides]), a.populateInstanceComputableOptions(r), this.reset(r)
          }, e.prototype.recordOverrides = function (t) {
            var e;
            for (e in t) this.dynamicOverrides[e] = t[e];
            this._calendar.viewSpecManager.clearCache(), this.compute()
          }, e
        }(n(48).default);
      e.default = l
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(0),
        i = n(3),
        o = n(21),
        s = n(4),
        a = n(31),
        l = n(30),
        u = function () {
          function t(t, e) {
            this.optionsManager = t, this._calendar = e, this.clearCache()
          }
          return t.prototype.clearCache = function () {
            this.viewSpecCache = {}
          }, t.prototype.getViewSpec = function (t) {
            var e = this.viewSpecCache;
            return e[t] || (e[t] = this.buildViewSpec(t))
          }, t.prototype.getUnitViewSpec = function (t) {
            var e, n, r;
            if (-1 !== i.inArray(t, s.unitsDesc))
              for (e = this._calendar.header.getViewsWithButtons(), i.each(o.viewHash, function (t) {
                  e.push(t)
                }), n = 0; n < e.length; n++)
                if ((r = this.getViewSpec(e[n])) && r.singleUnit === t) return r
          }, t.prototype.buildViewSpec = function (t) {
            for (var e, n, i, l, u, c = this.optionsManager.overrides.views || {}, d = [], h = [], f = [], p = t; p;) e = o.viewHash[p], n = c[p], p = null, "function" == typeof e && (e = {
              class: e
            }), e && (d.unshift(e), h.unshift(e.defaults || {}), i = i || e.duration, p = p || e.type), n && (f.unshift(n), i = i || n.duration, p = p || n.type);
            return (e = s.mergeProps(d)).type = t, !!e.class && ((i = i || this.optionsManager.dynamicOverrides.duration || this.optionsManager.overrides.duration) && (l = r.duration(i)).valueOf() && (u = s.computeDurationGreatestUnit(l, i), e.duration = l, e.durationUnit = u, 1 === l.as(u) && (e.singleUnit = u, f.unshift(c[u] || {}))), e.defaults = a.mergeOptions(h), e.overrides = a.mergeOptions(f), this.buildViewSpecOptions(e), this.buildViewSpecButtonText(e, t), e)
          }, t.prototype.buildViewSpecOptions = function (t) {
            var e = this.optionsManager;
            t.options = a.mergeOptions([a.globalDefaults, t.defaults, e.dirDefaults, e.localeDefaults, e.overrides, t.overrides, e.dynamicOverrides]), l.populateInstanceComputableOptions(t.options)
          }, t.prototype.buildViewSpecButtonText = function (t, e) {
            var n = this.optionsManager;

            function r(n) {
              var r = n.buttonText || {};
              return r[e] || (t.buttonTextKey ? r[t.buttonTextKey] : null) || (t.singleUnit ? r[t.singleUnit] : null)
            }
            t.buttonTextOverride = r(n.dynamicOverrides) || r(n.overrides) || t.overrides.buttonText, t.buttonTextDefault = r(n.localeDefaults) || r(n.dirDefaults) || t.defaults.buttonText || r(a.globalDefaults) || (t.duration ? this._calendar.humanizeDuration(t.duration) : null) || e
          }, t
        }();
      e.default = u
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(3),
        i = n(4),
        o = n(243),
        s = n(52),
        a = n(6),
        l = n(37),
        u = n(13),
        c = n(18),
        d = n(11),
        h = n(7),
        f = function () {
          function t(t) {
            this.calendar = t, this.stickySource = new s.default(t), this.otherSources = []
          }
          return t.prototype.requestEvents = function (t, e, n, r) {
            return !r && this.currentPeriod && this.currentPeriod.isWithinRange(t, e) && n === this.currentPeriod.timezone || this.setPeriod(new o.default(t, e, n)), this.currentPeriod.whenReleased()
          }, t.prototype.addSource = function (t) {
            this.otherSources.push(t), this.currentPeriod && this.currentPeriod.requestSource(t)
          }, t.prototype.removeSource = function (t) {
            i.removeExact(this.otherSources, t), this.currentPeriod && this.currentPeriod.purgeSource(t)
          }, t.prototype.removeAllSources = function () {
            this.otherSources = [], this.currentPeriod && this.currentPeriod.purgeAllSources()
          }, t.prototype.refetchSource = function (t) {
            var e = this.currentPeriod;
            e && (e.freeze(), e.purgeSource(t), e.requestSource(t), e.thaw())
          }, t.prototype.refetchAllSources = function () {
            var t = this.currentPeriod;
            t && (t.freeze(), t.purgeAllSources(), t.requestSources(this.getSources()), t.thaw())
          }, t.prototype.getSources = function () {
            return [this.stickySource].concat(this.otherSources)
          }, t.prototype.multiQuerySources = function (t) {
            t ? r.isArray(t) || (t = [t]) : t = [];
            var e, n = [];
            for (e = 0; e < t.length; e++) n.push.apply(n, this.querySources(t[e]));
            return n
          }, t.prototype.querySources = function (t) {
            var e, n, i = this.otherSources;
            for (e = 0; e < i.length; e++)
              if ((n = i[e]) === t) return [n];
            return (n = this.getSourceById(a.default.normalizeId(t))) ? [n] : (t = l.default.parse(t, this.calendar)) ? r.grep(i, function (e) {
              return n = e, t.getPrimitive() === n.getPrimitive();
              var n
            }) : void 0
          }, t.prototype.getSourceById = function (t) {
            return r.grep(this.otherSources, function (e) {
              return e.id && e.id === t
            })[0]
          }, t.prototype.setPeriod = function (t) {
            this.currentPeriod && (this.unbindPeriod(this.currentPeriod), this.currentPeriod = null), this.currentPeriod = t, this.bindPeriod(t), t.requestSources(this.getSources())
          }, t.prototype.bindPeriod = function (t) {
            this.listenTo(t, "release", function (t) {
              this.trigger("release", t)
            })
          }, t.prototype.unbindPeriod = function (t) {
            this.stopListeningTo(t)
          }, t.prototype.getEventDefByUid = function (t) {
            if (this.currentPeriod) return this.currentPeriod.getEventDefByUid(t)
          }, t.prototype.addEventDef = function (t, e) {
            e && this.stickySource.addEventDef(t), this.currentPeriod && this.currentPeriod.addEventDef(t)
          }, t.prototype.removeEventDefsById = function (t) {
            this.getSources().forEach(function (e) {
              e.removeEventDefsById(t)
            }), this.currentPeriod && this.currentPeriod.removeEventDefsById(t)
          }, t.prototype.removeAllEventDefs = function () {
            this.getSources().forEach(function (t) {
              t.removeAllEventDefs()
            }), this.currentPeriod && this.currentPeriod.removeAllEventDefs()
          }, t.prototype.mutateEventsWithId = function (t, e) {
            var n, r = this.currentPeriod,
              i = [];
            return r ? (r.freeze(), (n = r.getEventDefsById(t)).forEach(function (t) {
              r.removeEventDef(t), i.push(e.mutateSingle(t)), r.addEventDef(t)
            }), r.thaw(), function () {
              r.freeze();
              for (var t = 0; t < n.length; t++) r.removeEventDef(n[t]), i[t](), r.addEventDef(n[t]);
              r.thaw()
            }) : function () {}
          }, t.prototype.buildMutatedEventInstanceGroup = function (t, e) {
            var n, r, i = this.getEventDefsById(t),
              o = [];
            for (n = 0; n < i.length; n++)(r = i[n].clone()) instanceof u.default && (e.mutateSingle(r), o.push.apply(o, r.buildInstances()));
            return new c.default(o)
          }, t.prototype.freeze = function () {
            this.currentPeriod && this.currentPeriod.freeze()
          }, t.prototype.thaw = function () {
            this.currentPeriod && this.currentPeriod.thaw()
          }, t.prototype.getEventDefsById = function (t) {
            return this.currentPeriod.getEventDefsById(t)
          }, t.prototype.getEventInstances = function () {
            return this.currentPeriod.getEventInstances()
          }, t.prototype.getEventInstancesWithId = function (t) {
            return this.currentPeriod.getEventInstancesWithId(t)
          }, t.prototype.getEventInstancesWithoutId = function (t) {
            return this.currentPeriod.getEventInstancesWithoutId(t)
          }, t
        }();
      e.default = f, d.default.mixInto(f), h.default.mixInto(f)
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(3),
        i = n(4),
        o = n(19),
        s = n(11),
        a = n(5),
        l = n(18),
        u = function () {
          function t(t, e, n) {
            this.pendingCnt = 0, this.freezeDepth = 0, this.stuntedReleaseCnt = 0, this.releaseCnt = 0, this.start = t, this.end = e, this.timezone = n, this.unzonedRange = new a.default(t.clone().stripZone(), e.clone().stripZone()), this.requestsByUid = {}, this.eventDefsByUid = {}, this.eventDefsById = {}, this.eventInstanceGroupsById = {}
          }
          return t.prototype.isWithinRange = function (t, e) {
            return !t.isBefore(this.start) && !e.isAfter(this.end)
          }, t.prototype.requestSources = function (t) {
            this.freeze();
            for (var e = 0; e < t.length; e++) this.requestSource(t[e]);
            this.thaw()
          }, t.prototype.requestSource = function (t) {
            var e = this,
              n = {
                source: t,
                status: "pending",
                eventDefs: null
              };
            this.requestsByUid[t.uid] = n, this.pendingCnt += 1, t.fetch(this.start, this.end, this.timezone).then(function (t) {
              "cancelled" !== n.status && (n.status = "completed", n.eventDefs = t, e.addEventDefs(t), e.pendingCnt--, e.tryRelease())
            }, function () {
              "cancelled" !== n.status && (n.status = "failed", e.pendingCnt--, e.tryRelease())
            })
          }, t.prototype.purgeSource = function (t) {
            var e = this.requestsByUid[t.uid];
            e && (delete this.requestsByUid[t.uid], "pending" === e.status ? (e.status = "cancelled", this.pendingCnt--, this.tryRelease()) : "completed" === e.status && e.eventDefs.forEach(this.removeEventDef.bind(this)))
          }, t.prototype.purgeAllSources = function () {
            var t, e, n = this.requestsByUid,
              r = 0;
            for (t in n) "pending" === (e = n[t]).status ? e.status = "cancelled" : "completed" === e.status && r++;
            this.requestsByUid = {}, this.pendingCnt = 0, r && this.removeAllEventDefs()
          }, t.prototype.getEventDefByUid = function (t) {
            return this.eventDefsByUid[t]
          }, t.prototype.getEventDefsById = function (t) {
            var e = this.eventDefsById[t];
            return e ? e.slice() : []
          }, t.prototype.addEventDefs = function (t) {
            for (var e = 0; e < t.length; e++) this.addEventDef(t[e])
          }, t.prototype.addEventDef = function (t) {
            var e, n = this.eventDefsById,
              r = t.id,
              i = n[r] || (n[r] = []),
              o = t.buildInstances(this.unzonedRange);
            for (i.push(t), this.eventDefsByUid[t.uid] = t, e = 0; e < o.length; e++) this.addEventInstance(o[e], r)
          }, t.prototype.removeEventDefsById = function (t) {
            var e = this;
            this.getEventDefsById(t).forEach(function (t) {
              e.removeEventDef(t)
            })
          }, t.prototype.removeAllEventDefs = function () {
            var t = r.isEmptyObject(this.eventDefsByUid);
            this.eventDefsByUid = {}, this.eventDefsById = {}, this.eventInstanceGroupsById = {}, t || this.tryRelease()
          }, t.prototype.removeEventDef = function (t) {
            var e = this.eventDefsById,
              n = e[t.id];
            delete this.eventDefsByUid[t.uid], n && (i.removeExact(n, t), n.length || delete e[t.id], this.removeEventInstancesForDef(t))
          }, t.prototype.getEventInstances = function () {
            var t, e = this.eventInstanceGroupsById,
              n = [];
            for (t in e) n.push.apply(n, e[t].eventInstances);
            return n
          }, t.prototype.getEventInstancesWithId = function (t) {
            var e = this.eventInstanceGroupsById[t];
            return e ? e.eventInstances.slice() : []
          }, t.prototype.getEventInstancesWithoutId = function (t) {
            var e, n = this.eventInstanceGroupsById,
              r = [];
            for (e in n) e !== t && r.push.apply(r, n[e].eventInstances);
            return r
          }, t.prototype.addEventInstance = function (t, e) {
            var n = this.eventInstanceGroupsById;
            (n[e] || (n[e] = new l.default)).eventInstances.push(t), this.tryRelease()
          }, t.prototype.removeEventInstancesForDef = function (t) {
            var e, n = this.eventInstanceGroupsById,
              r = n[t.id];
            r && (e = i.removeMatching(r.eventInstances, function (e) {
              return e.def === t
            }), r.eventInstances.length || delete n[t.id], e && this.tryRelease())
          }, t.prototype.tryRelease = function () {
            this.pendingCnt || (this.freezeDepth ? this.stuntedReleaseCnt++ : this.release())
          }, t.prototype.release = function () {
            this.releaseCnt++, this.trigger("release", this.eventInstanceGroupsById)
          }, t.prototype.whenReleased = function () {
            var t = this;
            return this.releaseCnt ? o.default.resolve(this.eventInstanceGroupsById) : o.default.construct(function (e) {
              t.one("release", e)
            })
          }, t.prototype.freeze = function () {
            this.freezeDepth++ || (this.stuntedReleaseCnt = 0)
          }, t.prototype.thaw = function () {
            --this.freezeDepth || !this.stuntedReleaseCnt || this.pendingCnt || this.release()
          }, t
        }();
      e.default = u, s.default.mixInto(u)
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(3),
        i = n(4),
        o = n(7),
        s = function () {
          function t(t, e) {
            this.isFollowing = !1, this.isHidden = !1, this.isAnimating = !1, this.options = e = e || {}, this.sourceEl = t, this.parentEl = e.parentEl ? r(e.parentEl) : t.parent()
          }
          return t.prototype.start = function (t) {
            this.isFollowing || (this.isFollowing = !0, this.y0 = i.getEvY(t), this.x0 = i.getEvX(t), this.topDelta = 0, this.leftDelta = 0, this.isHidden || this.updatePosition(), i.getEvIsTouch(t) ? this.listenTo(r(document), "touchmove", this.handleMove) : this.listenTo(r(document), "mousemove", this.handleMove))
          }, t.prototype.stop = function (t, e) {
            var n = this,
              i = this.options.revertDuration,
              o = function () {
                n.isAnimating = !1, n.removeElement(), n.top0 = n.left0 = null, e && e()
              };
            this.isFollowing && !this.isAnimating && (this.isFollowing = !1, this.stopListeningTo(r(document)), t && i && !this.isHidden ? (this.isAnimating = !0, this.el.animate({
              top: this.top0,
              left: this.left0
            }, {
              duration: i,
              complete: o
            })) : o())
          }, t.prototype.getEl = function () {
            var t = this.el;
            return t || ((t = this.el = this.sourceEl.clone().addClass(this.options.additionalClass || "").css({
              position: "absolute",
              visibility: "",
              display: this.isHidden ? "none" : "",
              margin: 0,
              right: "auto",
              bottom: "auto",
              width: this.sourceEl.width(),
              height: this.sourceEl.height(),
              opacity: this.options.opacity || "",
              zIndex: this.options.zIndex
            })).addClass("fc-unselectable"), t.appendTo(this.parentEl)), t
          }, t.prototype.removeElement = function () {
            this.el && (this.el.remove(), this.el = null)
          }, t.prototype.updatePosition = function () {
            var t, e;
            this.getEl(), null == this.top0 && (t = this.sourceEl.offset(), e = this.el.offsetParent().offset(), this.top0 = t.top - e.top, this.left0 = t.left - e.left), this.el.css({
              top: this.top0 + this.topDelta,
              left: this.left0 + this.leftDelta
            })
          }, t.prototype.handleMove = function (t) {
            this.topDelta = i.getEvY(t) - this.y0, this.leftDelta = i.getEvX(t) - this.x0, this.isHidden || this.updatePosition()
          }, t.prototype.hide = function () {
            this.isHidden || (this.isHidden = !0, this.el && this.el.hide())
          }, t.prototype.show = function () {
            this.isHidden && (this.isHidden = !1, this.updatePosition(), this.getEl().show())
          }, t
        }();
      e.default = s, o.default.mixInto(s)
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(2),
        i = n(22),
        o = function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return n.dragListener = n.buildDragListener(), n
          }
          return r.__extends(e, t), e.prototype.end = function () {
            this.dragListener.endInteraction()
          }, e.prototype.bindToEl = function (t) {
            var e = this.component,
              n = this.dragListener;
            e.bindDateHandlerToEl(t, "mousedown", function (t) {
              e.shouldIgnoreMouse() || n.startInteraction(t)
            }), e.bindDateHandlerToEl(t, "touchstart", function (t) {
              e.shouldIgnoreTouch() || n.startInteraction(t)
            })
          }, e.prototype.buildDragListener = function () {
            var t, e = this,
              n = this.component,
              r = new i.default(n, {
                scroll: this.opt("dragScroll"),
                interactionStart: function () {
                  t = r.origHit
                },
                hitOver: function (e, n, r) {
                  n || (t = null)
                },
                hitOut: function () {
                  t = null
                },
                interactionEnd: function (r, i) {
                  var o;
                  !i && t && (o = n.getSafeHitFootprint(t)) && e.view.triggerDayClick(o, n.getHitEl(t), r)
                }
              });
            return r.shouldCancelTouchScroll = !1, r.scrollAlwaysKills = !0, r
          }, e
        }(n(15).default);
      e.default = o
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(2),
        i = n(4),
        o = function (t) {
          function e(e, n) {
            var r = t.call(this, e, n) || this;
            return r.timeGrid = e, r
          }
          return r.__extends(e, t), e.prototype.renderFgSegs = function (t) {
            this.renderFgSegsIntoContainers(t, this.timeGrid.fgContainerEls)
          }, e.prototype.renderFgSegsIntoContainers = function (t, e) {
            var n, r;
            for (n = this.timeGrid.groupSegsByCol(t), r = 0; r < this.timeGrid.colCnt; r++) this.updateFgSegCoords(n[r]);
            this.timeGrid.attachSegsByCol(n, e)
          }, e.prototype.unrenderFgSegs = function () {
            this.fgSegs && this.fgSegs.forEach(function (t) {
              t.el.remove()
            })
          }, e.prototype.computeEventTimeFormat = function () {
            return this.opt("noMeridiemTimeFormat")
          }, e.prototype.computeDisplayEventEnd = function () {
            return !0
          }, e.prototype.fgSegHtml = function (t, e) {
            var n, r, o, s = this.view,
              a = s.calendar,
              l = t.footprint.componentFootprint,
              u = l.isAllDay,
              c = t.footprint.eventDef,
              d = s.isEventDefDraggable(c),
              h = !e && t.isStart && s.isEventDefResizableFromStart(c),
              f = !e && t.isEnd && s.isEventDefResizableFromEnd(c),
              p = this.getSegClasses(t, d, h || f),
              g = i.cssToStr(this.getSkinCss(c));
            if (p.unshift("fc-time-grid-event", "fc-v-event"), s.isMultiDayRange(l.unzonedRange)) {
              if (t.isStart || t.isEnd) {
                var m = a.msToMoment(t.startMs),
                  v = a.msToMoment(t.endMs);
                n = this._getTimeText(m, v, u), r = this._getTimeText(m, v, u, "LT"), o = this._getTimeText(m, v, u, null, !1)
              }
            } else n = this.getTimeText(t.footprint), r = this.getTimeText(t.footprint, "LT"), o = this.getTimeText(t.footprint, null, !1);
            return '<a class="' + p.join(" ") + '"' + (c.url ? ' href="' + i.htmlEscape(c.url) + '"' : "") + (g ? ' style="' + g + '"' : "") + '><div class="fc-content">' + (n ? '<div class="fc-time" data-start="' + i.htmlEscape(o) + '" data-full="' + i.htmlEscape(r) + '"><span>' + i.htmlEscape(n) + "</span></div>" : "") + (c.title ? '<div class="fc-title">' + i.htmlEscape(c.title) + "</div>" : "") + '</div><div class="fc-bg"/>' + (f ? '<div class="fc-resizer fc-end-resizer" />' : "") + "</a>"
          }, e.prototype.updateFgSegCoords = function (t) {
            this.timeGrid.computeSegVerticals(t), this.computeFgSegHorizontals(t), this.timeGrid.assignSegVerticals(t), this.assignFgSegHorizontals(t)
          }, e.prototype.computeFgSegHorizontals = function (t) {
            var e, n, r;
            if (this.sortEventSegs(t), function (t) {
                var e, n, r, i, o;
                for (e = 0; e < t.length; e++)
                  for (n = t[e], r = 0; r < n.length; r++)
                    for ((i = n[r]).forwardSegs = [], o = e + 1; o < t.length; o++) a(i, t[o], i.forwardSegs)
              }(e = function (t) {
                var e, n, r, i = [];
                for (e = 0; e < t.length; e++) {
                  for (n = t[e], r = 0; r < i.length && a(n, i[r]).length; r++);
                  n.level = r, (i[r] || (i[r] = [])).push(n)
                }
                return i
              }(t)), n = e[0]) {
              for (r = 0; r < n.length; r++) s(n[r]);
              for (r = 0; r < n.length; r++) this.computeFgSegForwardBack(n[r], 0, 0)
            }
          }, e.prototype.computeFgSegForwardBack = function (t, e, n) {
            var r, i = t.forwardSegs;
            if (void 0 === t.forwardCoord)
              for (i.length ? (this.sortForwardSegs(i), this.computeFgSegForwardBack(i[0], e + 1, n), t.forwardCoord = i[0].backwardCoord) : t.forwardCoord = 1, t.backwardCoord = t.forwardCoord - (t.forwardCoord - n) / (e + 1), r = 0; r < i.length; r++) this.computeFgSegForwardBack(i[r], 0, t.forwardCoord)
          }, e.prototype.sortForwardSegs = function (t) {
            t.sort(i.proxy(this, "compareForwardSegs"))
          }, e.prototype.compareForwardSegs = function (t, e) {
            return e.forwardPressure - t.forwardPressure || (t.backwardCoord || 0) - (e.backwardCoord || 0) || this.compareEventSegs(t, e)
          }, e.prototype.assignFgSegHorizontals = function (t) {
            var e, n;
            for (e = 0; e < t.length; e++)(n = t[e]).el.css(this.generateFgSegHorizontalCss(n)), n.bottom - n.top < 30 && n.el.addClass("fc-short")
          }, e.prototype.generateFgSegHorizontalCss = function (t) {
            var e, n, r = this.opt("slotEventOverlap"),
              i = t.backwardCoord,
              o = t.forwardCoord,
              s = this.timeGrid.generateSegVerticalCss(t),
              a = this.timeGrid.isRTL;
            return r && (o = Math.min(1, i + 2 * (o - i))), a ? (e = 1 - o, n = i) : (e = i, n = 1 - o), s.zIndex = t.level + 1, s.left = 100 * e + "%", s.right = 100 * n + "%", r && t.forwardPressure && (s[a ? "marginLeft" : "marginRight"] = 20), s
          }, e
        }(n(42).default);

      function s(t) {
        var e, n, r = t.forwardSegs,
          i = 0;
        if (void 0 === t.forwardPressure) {
          for (e = 0; e < r.length; e++) s(n = r[e]), i = Math.max(i, 1 + n.forwardPressure);
          t.forwardPressure = i
        }
      }

      function a(t, e, n) {
        void 0 === n && (n = []);
        for (var r = 0; r < e.length; r++) i = t, o = e[r], i.bottom > o.top && i.top < o.bottom && n.push(e[r]);
        var i, o;
        return n
      }
      e.default = o
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(2),
        i = n(3),
        o = function (t) {
          function e() {
            return null !== t && t.apply(this, arguments) || this
          }
          return r.__extends(e, t), e.prototype.renderSegs = function (t, e) {
            var n, r, o, s = [];
            for (this.eventRenderer.renderFgSegsIntoContainers(t, this.component.helperContainerEls), n = 0; n < t.length; n++) r = t[n], e && e.col === r.col && (o = e.el, r.el.css({
              left: o.css("left"),
              right: o.css("right"),
              "margin-left": o.css("margin-left"),
              "margin-right": o.css("margin-right")
            })), s.push(r.el[0]);
            return i(s)
          }, e
        }(n(58).default);
      e.default = o
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(2),
        i = function (t) {
          function e() {
            return null !== t && t.apply(this, arguments) || this
          }
          return r.__extends(e, t), e.prototype.attachSegEls = function (t, e) {
            var n, r = this.component;
            return "bgEvent" === t ? n = r.bgContainerEls : "businessHours" === t ? n = r.businessContainerEls : "highlight" === t && (n = r.highlightContainerEls), r.updateSegVerticals(e), r.attachSegsByCol(r.groupSegsByCol(e), n), e.map(function (t) {
              return t.el[0]
            })
          }, e
        }(n(57).default);
      e.default = i
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(3),
        i = n(4),
        o = n(7),
        s = function () {
          function t(t) {
            this.isHidden = !0, this.margin = 10, this.options = t || {}
          }
          return t.prototype.show = function () {
            this.isHidden && (this.el || this.render(), this.el.show(), this.position(), this.isHidden = !1, this.trigger("show"))
          }, t.prototype.hide = function () {
            this.isHidden || (this.el.hide(), this.isHidden = !0, this.trigger("hide"))
          }, t.prototype.render = function () {
            var t = this,
              e = this.options;
            this.el = r('<div class="fc-popover"/>').addClass(e.className || "").css({
              top: 0,
              left: 0
            }).append(e.content).appendTo(e.parentEl), this.el.on("click", ".fc-close", function () {
              t.hide()
            }), e.autoHide && this.listenTo(r(document), "mousedown", this.documentMousedown)
          }, t.prototype.documentMousedown = function (t) {
            this.el && !r(t.target).closest(this.el).length && this.hide()
          }, t.prototype.removeElement = function () {
            this.hide(), this.el && (this.el.remove(), this.el = null), this.stopListeningTo(r(document), "mousedown")
          }, t.prototype.position = function () {
            var t, e, n, o, s, a = this.options,
              l = this.el.offsetParent().offset(),
              u = this.el.outerWidth(),
              c = this.el.outerHeight(),
              d = r(window),
              h = i.getScrollParent(this.el);
            o = a.top || 0, s = void 0 !== a.left ? a.left : void 0 !== a.right ? a.right - u : 0, h.is(window) || h.is(document) ? (h = d, t = 0, e = 0) : (t = (n = h.offset()).top, e = n.left), t += d.scrollTop(), e += d.scrollLeft(), !1 !== a.viewportConstrain && (o = Math.min(o, t + h.outerHeight() - c - this.margin), o = Math.max(o, t + this.margin), s = Math.min(s, e + h.outerWidth() - u - this.margin), s = Math.max(s, e + this.margin)), this.el.css({
              top: o - l.top,
              left: s - l.left
            })
          }, t.prototype.trigger = function (t) {
            this.options[t] && this.options[t].apply(this, Array.prototype.slice.call(arguments, 1))
          }, t
        }();
      e.default = s, o.default.mixInto(s)
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(2),
        i = n(3),
        o = n(4),
        s = function (t) {
          function e(e, n) {
            var r = t.call(this, e, n) || this;
            return r.dayGrid = e, r
          }
          return r.__extends(e, t), e.prototype.renderBgRanges = function (e) {
            e = i.grep(e, function (t) {
              return t.eventDef.isAllDay()
            }), t.prototype.renderBgRanges.call(this, e)
          }, e.prototype.renderFgSegs = function (t) {
            var e = this.rowStructs = this.renderSegRows(t);
            this.dayGrid.rowEls.each(function (t, n) {
              i(n).find(".fc-content-skeleton > table").append(e[t].tbodyEl)
            })
          }, e.prototype.unrenderFgSegs = function () {
            for (var t, e = this.rowStructs || []; t = e.pop();) t.tbodyEl.remove();
            this.rowStructs = null
          }, e.prototype.renderSegRows = function (t) {
            var e, n, r = [];
            for (e = this.groupSegRows(t), n = 0; n < e.length; n++) r.push(this.renderSegRow(n, e[n]));
            return r
          }, e.prototype.renderSegRow = function (t, e) {
            var n, r, o, s, a, l, u, c = this.dayGrid.colCnt,
              d = this.buildSegLevels(e),
              h = Math.max(1, d.length),
              f = i("<tbody/>"),
              p = [],
              g = [],
              m = [];

            function v(t) {
              for (; o < t;)(u = (m[n - 1] || [])[o]) ? u.attr("rowspan", parseInt(u.attr("rowspan") || 1, 10) + 1) : (u = i("<td/>"), s.append(u)), g[n][o] = u, m[n][o] = u, o++
            }
            for (n = 0; n < h; n++) {
              if (r = d[n], o = 0, s = i("<tr/>"), p.push([]), g.push([]), m.push([]), r)
                for (a = 0; a < r.length; a++) {
                  for (v((l = r[a]).leftCol), u = i('<td class="fc-event-container"/>').append(l.el), l.leftCol !== l.rightCol ? u.attr("colspan", l.rightCol - l.leftCol + 1) : m[n][o] = u; o <= l.rightCol;) g[n][o] = u, p[n][o] = l, o++;
                  s.append(u)
                }
              v(c), this.dayGrid.bookendCells(s), f.append(s)
            }
            return {
              row: t,
              tbodyEl: f,
              cellMatrix: g,
              segMatrix: p,
              segLevels: d,
              segs: e
            }
          }, e.prototype.buildSegLevels = function (t) {
            var e, n, r, i = [];
            for (this.sortEventSegs(t), e = 0; e < t.length; e++) {
              for (n = t[e], r = 0; r < i.length && a(n, i[r]); r++);
              n.level = r, (i[r] || (i[r] = [])).push(n)
            }
            for (r = 0; r < i.length; r++) i[r].sort(l);
            return i
          }, e.prototype.groupSegRows = function (t) {
            var e, n = [];
            for (e = 0; e < this.dayGrid.rowCnt; e++) n.push([]);
            for (e = 0; e < t.length; e++) n[t[e].row].push(t[e]);
            return n
          }, e.prototype.computeEventTimeFormat = function () {
            return this.opt("extraSmallTimeFormat")
          }, e.prototype.computeDisplayEventEnd = function () {
            return 1 === this.dayGrid.colCnt
          }, e.prototype.fgSegHtml = function (t, e) {
            var n, r, i = this.view,
              s = t.footprint.eventDef,
              a = t.footprint.componentFootprint.isAllDay,
              l = i.isEventDefDraggable(s),
              u = !e && a && t.isStart && i.isEventDefResizableFromStart(s),
              c = !e && a && t.isEnd && i.isEventDefResizableFromEnd(s),
              d = this.getSegClasses(t, l, u || c),
              h = o.cssToStr(this.getSkinCss(s)),
              f = "";
            return d.unshift("fc-day-grid-event", "fc-h-event"), t.isStart && (n = this.getTimeText(t.footprint)) && (f = '<span class="fc-time">' + o.htmlEscape(n) + "</span>"), r = '<span class="fc-title">' + (o.htmlEscape(s.title || "") || "&nbsp;") + "</span>", '<a class="' + d.join(" ") + '"' + (s.url ? ' href="' + o.htmlEscape(s.url) + '"' : "") + (h ? ' style="' + h + '"' : "") + '><div class="fc-content">' + (this.dayGrid.isRTL ? r + " " + f : f + " " + r) + "</div>" + (u ? '<div class="fc-resizer fc-start-resizer" />' : "") + (c ? '<div class="fc-resizer fc-end-resizer" />' : "") + "</a>"
          }, e
        }(n(42).default);

      function a(t, e) {
        var n, r;
        for (n = 0; n < e.length; n++)
          if ((r = e[n]).leftCol <= t.rightCol && r.rightCol >= t.leftCol) return !0;
        return !1
      }

      function l(t, e) {
        return t.leftCol - e.leftCol
      }
      e.default = s
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(2),
        i = n(3),
        o = function (t) {
          function e() {
            return null !== t && t.apply(this, arguments) || this
          }
          return r.__extends(e, t), e.prototype.renderSegs = function (t, e) {
            var n, r = [];
            return n = this.eventRenderer.renderSegRows(t), this.component.rowEls.each(function (t, o) {
              var s, a, l = i(o),
                u = i('<div class="fc-helper-skeleton"><table/></div>');
              e && e.row === t ? a = e.el.position().top : ((s = l.find(".fc-content-skeleton tbody")).length || (s = l.find(".fc-content-skeleton table")), a = s.position().top), u.css("top", a).find("table").append(n[t].tbodyEl), l.append(u), r.push(u[0])
            }), i(r)
          }, e
        }(n(58).default);
      e.default = o
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(2),
        i = n(3),
        o = function (t) {
          function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.fillSegTag = "td", e
          }
          return r.__extends(e, t), e.prototype.attachSegEls = function (t, e) {
            var n, r, i, o = [];
            for (n = 0; n < e.length; n++) r = e[n], i = this.renderFillRow(t, r), this.component.rowEls.eq(r.row).append(i), o.push(i[0]);
            return o
          }, e.prototype.renderFillRow = function (t, e) {
            var n, r, o, s = this.component.colCnt,
              a = e.leftCol,
              l = e.rightCol + 1;
            return n = "businessHours" === t ? "bgevent" : t.toLowerCase(), o = (r = i('<div class="fc-' + n + '-skeleton"><table><tr/></table></div>')).find("tr"), a > 0 && o.append('<td colspan="' + a + '"/>'), o.append(e.el.attr("colspan", l - a)), l < s && o.append('<td colspan="' + (s - l) + '"/>'), this.component.bookendCells(o), r
          }, e
        }(n(57).default);
      e.default = o
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(2),
        i = n(228),
        o = n(5),
        s = function (t) {
          function e() {
            return null !== t && t.apply(this, arguments) || this
          }
          return r.__extends(e, t), e.prototype.buildRenderRange = function (e, n, r) {
            var i, s = t.prototype.buildRenderRange.call(this, e, n, r),
              a = this.msToUtcMoment(s.startMs, r),
              l = this.msToUtcMoment(s.endMs, r);
            return this.opt("fixedWeekCount") && (i = Math.ceil(l.diff(a, "weeks", !0)), l.add(6 - i, "weeks")), new o.default(a, l)
          }, e
        }(i.default);
      e.default = s
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(2),
        i = n(4),
        o = function (t) {
          function e() {
            return null !== t && t.apply(this, arguments) || this
          }
          return r.__extends(e, t), e.prototype.renderFgSegs = function (t) {
            t.length ? this.component.renderSegList(t) : this.component.renderEmptyMessage()
          }, e.prototype.fgSegHtml = function (t) {
            var e, n = this.view,
              r = n.calendar,
              o = r.theme,
              s = t.footprint,
              a = s.eventDef,
              l = s.componentFootprint,
              u = a.url,
              c = ["fc-list-item"].concat(this.getClasses(a)),
              d = this.getBgColor(a);
            return e = l.isAllDay ? n.getAllDayHtml() : n.isMultiDayRange(l.unzonedRange) ? t.isStart || t.isEnd ? i.htmlEscape(this._getTimeText(r.msToMoment(t.startMs), r.msToMoment(t.endMs), l.isAllDay)) : n.getAllDayHtml() : i.htmlEscape(this.getTimeText(s)), u && c.push("fc-has-url"), '<tr class="' + c.join(" ") + '">' + (this.displayEventTime ? '<td class="fc-list-item-time ' + o.getClass("widgetContent") + '">' + (e || "") + "</td>" : "") + '<td class="fc-list-item-marker ' + o.getClass("widgetContent") + '"><span class="fc-event-dot"' + (d ? ' style="background-color:' + d + '"' : "") + '></span></td><td class="fc-list-item-title ' + o.getClass("widgetContent") + '"><a' + (u ? ' href="' + i.htmlEscape(u) + '"' : "") + ">" + i.htmlEscape(a.title || "") + "</a></td></tr>"
          }, e.prototype.computeEventTimeFormat = function () {
            return this.opt("mediumTimeFormat")
          }, e
        }(n(42).default);
      e.default = o
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(2),
        i = n(3),
        o = function (t) {
          function e() {
            return null !== t && t.apply(this, arguments) || this
          }
          return r.__extends(e, t), e.prototype.handleClick = function (e, n) {
            var r;
            t.prototype.handleClick.call(this, e, n), i(n.target).closest("a[href]").length || (r = e.footprint.eventDef.url) && !n.isDefaultPrevented() && (window.location.href = r)
          }, e
        }(n(59).default);
      e.default = o
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(37),
        i = n(52),
        o = n(215),
        s = n(216);
      r.default.registerClass(i.default), r.default.registerClass(o.default), r.default.registerClass(s.default)
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(51),
        i = n(213),
        o = n(214),
        s = n(258);
      r.defineThemeSystem("standard", i.default), r.defineThemeSystem("jquery-ui", o.default), r.defineThemeSystem("bootstrap3", s.default)
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(2),
        i = function (t) {
          function e() {
            return null !== t && t.apply(this, arguments) || this
          }
          return r.__extends(e, t), e
        }(n(38).default);
      e.default = i, i.prototype.classes = {
        widget: "fc-bootstrap3",
        tableGrid: "table-bordered",
        tableList: "table table-striped",
        buttonGroup: "btn-group",
        button: "btn btn-default",
        stateActive: "active",
        stateDisabled: "disabled",
        today: "alert alert-info",
        popover: "panel panel-default",
        popoverHeader: "panel-heading",
        popoverContent: "panel-body",
        headerRow: "panel-default",
        dayRow: "panel-default",
        listView: "panel panel-default"
      }, i.prototype.baseIconClass = "glyphicon", i.prototype.iconClasses = {
        close: "glyphicon-remove",
        prev: "glyphicon-chevron-left",
        next: "glyphicon-chevron-right",
        prevYear: "glyphicon-backward",
        nextYear: "glyphicon-forward"
      }, i.prototype.iconOverrideOption = "bootstrapGlyphicons", i.prototype.iconOverrideCustomButtonOption = "bootstrapGlyphicon", i.prototype.iconOverridePrefix = "glyphicon-"
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(21),
        i = n(62),
        o = n(229);
      r.defineView("basic", {
        class: i.default
      }), r.defineView("basicDay", {
        type: "basic",
        duration: {
          days: 1
        }
      }), r.defineView("basicWeek", {
        type: "basic",
        duration: {
          weeks: 1
        }
      }), r.defineView("month", {
        class: o.default,
        duration: {
          months: 1
        },
        defaults: {
          fixedWeekCount: !0
        }
      })
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(21),
        i = n(226);
      r.defineView("agenda", {
        class: i.default,
        defaults: {
          allDaySlot: !0,
          slotDuration: "00:30:00",
          slotEventOverlap: !0
        }
      }), r.defineView("agendaDay", {
        type: "agenda",
        duration: {
          days: 1
        }
      }), r.defineView("agendaWeek", {
        type: "agenda",
        duration: {
          weeks: 1
        }
      })
    }, function (t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(21),
        i = n(230);
      r.defineView("list", {
        class: i.default,
        buttonTextKey: "list",
        defaults: {
          buttonText: "list",
          listDayFormat: "LL",
          noEventsMessage: "No events to display"
        }
      }), r.defineView("listDay", {
        type: "list",
        duration: {
          days: 1
        },
        defaults: {
          listDayFormat: "dddd"
        }
      }), r.defineView("listWeek", {
        type: "list",
        duration: {
          weeks: 1
        },
        defaults: {
          listDayFormat: "dddd",
          listDayAltFormat: "LL"
        }
      }), r.defineView("listMonth", {
        type: "list",
        duration: {
          month: 1
        },
        defaults: {
          listDayAltFormat: "dddd"
        }
      }), r.defineView("listYear", {
        type: "list",
        duration: {
          year: 1
        },
        defaults: {
          listDayAltFormat: "dddd"
        }
      })
    }, function (t, e) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      })
    }])
  }), function (t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
  }(function (t) {
    var e = -1,
      n = -1,
      r = function (t) {
        return parseFloat(t) || 0
      },
      i = function (e) {
        var n = null,
          i = [];
        return t(e).each(function () {
          var e = t(this),
            o = e.offset().top - r(e.css("margin-top")),
            s = i.length > 0 ? i[i.length - 1] : null;
          null === s ? i.push(e) : Math.floor(Math.abs(n - o)) <= 1 ? i[i.length - 1] = s.add(e) : i.push(e), n = o
        }), i
      },
      o = function (e) {
        var n = {
          byRow: !0,
          property: "height",
          target: null,
          remove: !1
        };
        return "object" == typeof e ? t.extend(n, e) : ("boolean" == typeof e ? n.byRow = e : "remove" === e && (n.remove = !0), n)
      },
      s = t.fn.matchHeight = function (e) {
        var n = o(e);
        if (n.remove) {
          var r = this;
          return this.css(n.property, ""), t.each(s._groups, function (t, e) {
            e.elements = e.elements.not(r)
          }), this
        }
        return this.length <= 1 && !n.target ? this : (s._groups.push({
          elements: this,
          options: n
        }), s._apply(this, n), this)
      };
    s.version = "0.7.2", s._groups = [], s._throttle = 80, s._maintainScroll = !1, s._beforeUpdate = null, s._afterUpdate = null, s._rows = i, s._parse = r, s._parseOptions = o, s._apply = function (e, n) {
      var a = o(n),
        l = t(e),
        u = [l],
        c = t(window).scrollTop(),
        d = t("html").outerHeight(!0),
        h = l.parents().filter(":hidden");
      return h.each(function () {
        var e = t(this);
        e.data("style-cache", e.attr("style"))
      }), h.css("display", "block"), a.byRow && !a.target && (l.each(function () {
        var e = t(this),
          n = e.css("display");
        "inline-block" !== n && "flex" !== n && "inline-flex" !== n && (n = "block"), e.data("style-cache", e.attr("style")), e.css({
          display: n,
          "padding-top": "0",
          "padding-bottom": "0",
          "margin-top": "0",
          "margin-bottom": "0",
          "border-top-width": "0",
          "border-bottom-width": "0",
          height: "100px",
          overflow: "hidden"
        })
      }), u = i(l), l.each(function () {
        var e = t(this);
        e.attr("style", e.data("style-cache") || "")
      })), t.each(u, function (e, n) {
        var i = t(n),
          o = 0;
        if (a.target) o = a.target.outerHeight(!1);
        else {
          if (a.byRow && i.length <= 1) return void i.css(a.property, "");
          i.each(function () {
            var e = t(this),
              n = e.attr("style"),
              r = e.css("display");
            "inline-block" !== r && "flex" !== r && "inline-flex" !== r && (r = "block");
            var i = {
              display: r
            };
            i[a.property] = "", e.css(i), e.outerHeight(!1) > o && (o = e.outerHeight(!1)), n ? e.attr("style", n) : e.css("display", "")
          })
        }
        i.each(function () {
          var e = t(this),
            n = 0;
          a.target && e.is(a.target) || ("border-box" !== e.css("box-sizing") && (n += r(e.css("border-top-width")) + r(e.css("border-bottom-width")), n += r(e.css("padding-top")) + r(e.css("padding-bottom"))), e.css(a.property, o - n + "px"))
        })
      }), h.each(function () {
        var e = t(this);
        e.attr("style", e.data("style-cache") || null)
      }), s._maintainScroll && t(window).scrollTop(c / d * t("html").outerHeight(!0)), this
    }, s._applyDataApi = function () {
      var e = {};
      t("[data-match-height], [data-mh]").each(function () {
        var n = t(this),
          r = n.attr("data-mh") || n.attr("data-match-height");
        e[r] = r in e ? e[r].add(n) : n
      }), t.each(e, function () {
        this.matchHeight(!0)
      })
    };
    var a = function (e) {
      s._beforeUpdate && s._beforeUpdate(e, s._groups), t.each(s._groups, function () {
        s._apply(this.elements, this.options)
      }), s._afterUpdate && s._afterUpdate(e, s._groups)
    };
    s._update = function (r, i) {
      if (i && "resize" === i.type) {
        var o = t(window).width();
        if (o === e) return;
        e = o
      }
      r ? -1 === n && (n = setTimeout(function () {
        a(i), n = -1
      }, s._throttle)) : a(i)
    }, t(s._applyDataApi);
    var l = t.fn.on ? "on" : "bind";
    t(window)[l]("load", function (t) {
      s._update(!1, t)
    }), t(window)[l]("resize orientationchange", function (t) {
      s._update(!0, t)
    })
  }), $(function () {
    $(".js-calendar") && $(".js-calendar").fullCalendar({
      header: {
        left: "prev,next",
        center: "title",
        right: "month,agendaWeek,agendaDay"
      },
      dayNamesShort: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      timeFormat: "hh:mm a",
      events: [{
        title: "Meeting with James",
        start: "2018-01-28",
        className: "fc-event--orange",
        allDay: !0
      }, {
        title: "New branding launch",
        start: "2018-02-24",
        end: "2018-02-26",
        className: "fc-event--green",
        allDay: !0
      }, {
        title: "Deliver new product",
        start: "2018-02-08",
        end: "2018-02-12",
        className: "fc-event--blue"
      }, {
        title: "Meeting with CEO",
        start: "2018-02-27",
        className: "fc-event--green",
        allDay: !0
      }, {
        title: "Julia's birthday",
        start: "2018-02-30",
        className: "fc-event--green"
      }, {
        title: "New job interview",
        start: "2018-02-28",
        className: "fc-event--orange",
        allDay: !0
      }, {
        title: "Custom design",
        start: "2018-02-24",
        end: "2018-02-26",
        className: "fc-event--green",
        allDay: !0
      }, {
        title: "Buy New iPhone",
        start: "2018-02-08",
        end: "2018-02-12",
        className: "fc-event--blue"
      }, {
        title: "Travel to Canada",
        start: "2018-02-27",
        className: "fc-event--green",
        allDay: !0
      }, {
        title: "Agency brainstorming",
        start: "2018-02-30",
        className: "fc-event--green"
      }]
    })
  }), $(".pie-chart").length && new Chartist.Pie(".pie-chart", {
    series: [40, 25, 15, 20]
  }, {
    donut: !0,
    donutWidth: 20,
    donutSolid: !0,
    startAngle: 30,
    showLabel: !1
  }), $(".sales-chart").length && new Chartist.Line(".sales-chart", {
    labels: ["Jan", "Feb", "Mars", "Apr", "May", "June"],
    series: [
      [{
        meta: "Sales",
        value: 50
      }, {
        meta: "Sales",
        value: 40
      }, {
        meta: "Sales",
        value: 55
      }, {
        meta: "Sales",
        value: 65
      }, {
        meta: "Sales",
        value: 40
      }, {
        meta: "Sales",
        value: 50
      }]
    ]
  }, {
    fullWidth: !0,
    height: "300px",
    low: 0,
    high: 70,
    showArea: !0,
    axisY: {
      showLabel: !0,
      offset: 20
    },
    chartPadding: {
      top: 20,
      right: 10,
      bottom: 0,
      left: 10
    },
    plugins: [Chartist.plugins.tooltip()]
  }), $(".payouts-chart").length && new Chartist.Line(".payouts-chart", {
    labels: ["Jan", "Feb", "Mars", "Apr", "May", "June"],
    series: [{
      value: [20, 40, 35, 55, 28, 43],
      className: "ct-series-b"
    }]
  }, {
    fullWidth: !0,
    height: "300px",
    low: 0,
    high: 70,
    showArea: !0,
    axisY: {
      showLabel: !0,
      offset: 20
    },
    chartPadding: {
      top: 20,
      right: 20,
      bottom: 0,
      left: 10
    },
    plugins: [Chartist.plugins.tooltip()]
  }), $(".two-lines-chart").length) {
  new Chartist.Line(".two-lines-chart", {
    labels: ["Jan", "Feb", "Mars", "Apr", "May", "June"],
    series: [
      [50, 40, 55, 35, 40, 50],
      [30, 60, 25, 65, 24, 55]
    ]
  }, {
    fullWidth: !0,
    height: "300px",
    chartPadding: {
      top: 20,
      right: 10,
      bottom: 0,
      left: 0
    }
  });
  var data = {
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10", "W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10"],
      series: [
        [4, 5, 6, 5, 8, 7, 5, 6, 8, 9, 8, 7, 6, 4, 5, 4, 6, 4, 5, 4]
      ]
    },
    options = {
      high: 10,
      low: 0,
      width: "100%",
      chartPadding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      axisX: {
        showLabel: !1,
        showGrid: !1,
        offset: 0
      },
      axisY: {
        showLabel: !1,
        showGrid: !1,
        offset: 0
      }
    };
  new Chartist.Bar(".overlapp-bars-chart", data, options)
}
var Sidebar = function () {
  var t = $(document),
    e = $(".o-page"),
    n = $(".js-page-sidebar");
  $(".js-sidebar-toggle");
  t.on("click", ".js-sidebar-toggle", function (t) {
    return e.toggleClass("is-sidebar-open"), !1
  }), t.on("click", function (t) {
    $(t.target).closest(n).length || e.removeClass("is-sidebar-open")
  })
};
$(function () {
  Sidebar();
  dragula($(".c-pipeline").toArray(), {})
});
//# sourceMappingURL=neat.min.js.map
