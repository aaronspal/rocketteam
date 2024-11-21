/*! For license information please see main.d742527f.js.LICENSE.txt */
(() => {
  "use strict";
  var e = {
      730: (e, t, n) => {
        var r = n(43),
          a = n(853);
        function l(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var i = new Set(),
          o = {};
        function s(e, t) {
          u(e, t), u(e + "Capture", t);
        }
        function u(e, t) {
          for (o[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function m(e, t, n, r, a, l, i) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = l),
            (this.removeEmptyString = i);
        }
        var g = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            g[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            g[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              g[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            g[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              g[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            g[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            g[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            g[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            g[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var v = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var a = g.hasOwnProperty(t) ? g[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!d.call(h, e) ||
                    (!d.call(p, e) &&
                      (f.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(v, y);
            g[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(v, y);
              g[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(v, y);
            g[t] = new m(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new m(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var x = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          w = Symbol.for("react.element"),
          k = Symbol.for("react.portal"),
          j = Symbol.for("react.fragment"),
          S = Symbol.for("react.strict_mode"),
          C = Symbol.for("react.profiler"),
          E = Symbol.for("react.provider"),
          N = Symbol.for("react.context"),
          P = Symbol.for("react.forward_ref"),
          L = Symbol.for("react.suspense"),
          T = Symbol.for("react.suspense_list"),
          R = Symbol.for("react.memo"),
          A = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var z = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var O = Symbol.iterator;
        function M(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (O && e[O]) || e["@@iterator"])
            ? e
            : null;
        }
        var I,
          D = Object.assign;
        function F(e) {
          if (void 0 === I)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              I = (t && t[1]) || "";
            }
          return "\n" + I + e;
        }
        var B = !1;
        function _(e, t) {
          if (!e || B) return "";
          B = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (u) {
                  var r = u;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (u) {
                  r = u;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (u) {
                r = u;
              }
              e();
            }
          } catch (u) {
            if (u && r && "string" === typeof u.stack) {
              for (
                var a = u.stack.split("\n"),
                  l = r.stack.split("\n"),
                  i = a.length - 1,
                  o = l.length - 1;
                1 <= i && 0 <= o && a[i] !== l[o];

              )
                o--;
              for (; 1 <= i && 0 <= o; i--, o--)
                if (a[i] !== l[o]) {
                  if (1 !== i || 1 !== o)
                    do {
                      if ((i--, 0 > --o || a[i] !== l[o])) {
                        var s = "\n" + a[i].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            s.includes("<anonymous>") &&
                            (s = s.replace("<anonymous>", e.displayName)),
                          s
                        );
                      }
                    } while (1 <= i && 0 <= o);
                  break;
                }
            }
          } finally {
            (B = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? F(e) : "";
        }
        function U(e) {
          switch (e.tag) {
            case 5:
              return F(e.type);
            case 16:
              return F("Lazy");
            case 13:
              return F("Suspense");
            case 19:
              return F("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = _(e.type, !1));
            case 11:
              return (e = _(e.type.render, !1));
            case 1:
              return (e = _(e.type, !0));
            default:
              return "";
          }
        }
        function V(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case j:
              return "Fragment";
            case k:
              return "Portal";
            case C:
              return "Profiler";
            case S:
              return "StrictMode";
            case L:
              return "Suspense";
            case T:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case N:
                return (e.displayName || "Context") + ".Consumer";
              case E:
                return (e._context.displayName || "Context") + ".Provider";
              case P:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case R:
                return null !== (t = e.displayName || null)
                  ? t
                  : V(e.type) || "Memo";
              case A:
                (t = e._payload), (e = e._init);
                try {
                  return V(e(t));
                } catch (n) {}
            }
          return null;
        }
        function W(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return V(t);
            case 8:
              return t === S ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function H(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function Q(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function G(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = Q(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  l = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), l.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function Y(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = Q(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function K(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function q(e, t) {
          var n = t.checked;
          return D({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function X(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = H(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function J(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function Z(e, t) {
          J(e, t);
          var n = H(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, H(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function $(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && K(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + H(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(l(91));
          return D({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(l(92));
              if (te(n)) {
                if (1 < n.length) throw Error(l(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: H(n) };
        }
        function le(e, t) {
          var n = H(t.value),
            r = H(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ie(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function oe(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function se(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? oe(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ue,
          ce,
          de =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ue = ue || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ue.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function fe(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function me(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ge(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = me(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ve = D(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ye(e, t) {
          if (t) {
            if (
              ve[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(l(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(l(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(l(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(l(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var xe = null;
        function we(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var ke = null,
          je = null,
          Se = null;
        function Ce(e) {
          if ((e = ba(e))) {
            if ("function" !== typeof ke) throw Error(l(280));
            var t = e.stateNode;
            t && ((t = wa(t)), ke(e.stateNode, e.type, t));
          }
        }
        function Ee(e) {
          je ? (Se ? Se.push(e) : (Se = [e])) : (je = e);
        }
        function Ne() {
          if (je) {
            var e = je,
              t = Se;
            if (((Se = je = null), Ce(e), t))
              for (e = 0; e < t.length; e++) Ce(t[e]);
          }
        }
        function Pe(e, t) {
          return e(t);
        }
        function Le() {}
        var Te = !1;
        function Re(e, t, n) {
          if (Te) return e(t, n);
          Te = !0;
          try {
            return Pe(e, t, n);
          } finally {
            (Te = !1), (null !== je || null !== Se) && (Le(), Ne());
          }
        }
        function Ae(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = wa(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(l(231, t, typeof n));
          return n;
        }
        var ze = !1;
        if (c)
          try {
            var Oe = {};
            Object.defineProperty(Oe, "passive", {
              get: function () {
                ze = !0;
              },
            }),
              window.addEventListener("test", Oe, Oe),
              window.removeEventListener("test", Oe, Oe);
          } catch (ce) {
            ze = !1;
          }
        function Me(e, t, n, r, a, l, i, o, s) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var Ie = !1,
          De = null,
          Fe = !1,
          Be = null,
          _e = {
            onError: function (e) {
              (Ie = !0), (De = e);
            },
          };
        function Ue(e, t, n, r, a, l, i, o, s) {
          (Ie = !1), (De = null), Me.apply(_e, arguments);
        }
        function Ve(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function We(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function He(e) {
          if (Ve(e) !== e) throw Error(l(188));
        }
        function Qe(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Ve(e))) throw Error(l(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var i = a.alternate;
                if (null === i) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === i.child) {
                  for (i = a.child; i; ) {
                    if (i === n) return He(a), e;
                    if (i === r) return He(a), t;
                    i = i.sibling;
                  }
                  throw Error(l(188));
                }
                if (n.return !== r.return) (n = a), (r = i);
                else {
                  for (var o = !1, s = a.child; s; ) {
                    if (s === n) {
                      (o = !0), (n = a), (r = i);
                      break;
                    }
                    if (s === r) {
                      (o = !0), (r = a), (n = i);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!o) {
                    for (s = i.child; s; ) {
                      if (s === n) {
                        (o = !0), (n = i), (r = a);
                        break;
                      }
                      if (s === r) {
                        (o = !0), (r = i), (n = a);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!o) throw Error(l(189));
                  }
                }
                if (n.alternate !== r) throw Error(l(190));
              }
              if (3 !== n.tag) throw Error(l(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Ge(e)
            : null;
        }
        function Ge(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Ge(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Ye = a.unstable_scheduleCallback,
          Ke = a.unstable_cancelCallback,
          qe = a.unstable_shouldYield,
          Xe = a.unstable_requestPaint,
          Je = a.unstable_now,
          Ze = a.unstable_getCurrentPriorityLevel,
          $e = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          lt = null;
        var it = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((ot(e) / st) | 0)) | 0;
              },
          ot = Math.log,
          st = Math.LN2;
        var ut = 64,
          ct = 4194304;
        function dt(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function ft(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            l = e.pingedLanes,
            i = 268435455 & n;
          if (0 !== i) {
            var o = i & ~a;
            0 !== o ? (r = dt(o)) : 0 !== (l &= i) && (r = dt(l));
          } else 0 !== (i = n & ~a) ? (r = dt(i)) : 0 !== l && (r = dt(l));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (l = t & -t) || (16 === a && 0 !== (4194240 & l)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - it(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function mt() {
          var e = ut;
          return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e;
        }
        function gt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function vt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - it(t))] = n);
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - it(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var bt = 0;
        function xt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var wt,
          kt,
          jt,
          St,
          Ct,
          Et = !1,
          Nt = [],
          Pt = null,
          Lt = null,
          Tt = null,
          Rt = new Map(),
          At = new Map(),
          zt = [],
          Ot =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function Mt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Pt = null;
              break;
            case "dragenter":
            case "dragleave":
              Lt = null;
              break;
            case "mouseover":
            case "mouseout":
              Tt = null;
              break;
            case "pointerover":
            case "pointerout":
              Rt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              At.delete(t.pointerId);
          }
        }
        function It(e, t, n, r, a, l) {
          return null === e || e.nativeEvent !== l
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: l,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && kt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Dt(e) {
          var t = ya(e.target);
          if (null !== t) {
            var n = Ve(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = We(n)))
                  return (
                    (e.blockedOn = t),
                    void Ct(e.priority, function () {
                      jt(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Ft(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = qt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ba(n)) && kt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (xe = r), n.target.dispatchEvent(r), (xe = null), t.shift();
          }
          return !0;
        }
        function Bt(e, t, n) {
          Ft(e) && n.delete(t);
        }
        function _t() {
          (Et = !1),
            null !== Pt && Ft(Pt) && (Pt = null),
            null !== Lt && Ft(Lt) && (Lt = null),
            null !== Tt && Ft(Tt) && (Tt = null),
            Rt.forEach(Bt),
            At.forEach(Bt);
        }
        function Ut(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Et ||
              ((Et = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, _t)));
        }
        function Vt(e) {
          function t(t) {
            return Ut(t, e);
          }
          if (0 < Nt.length) {
            Ut(Nt[0], e);
            for (var n = 1; n < Nt.length; n++) {
              var r = Nt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Pt && Ut(Pt, e),
              null !== Lt && Ut(Lt, e),
              null !== Tt && Ut(Tt, e),
              Rt.forEach(t),
              At.forEach(t),
              n = 0;
            n < zt.length;
            n++
          )
            (r = zt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < zt.length && null === (n = zt[0]).blockedOn; )
            Dt(n), null === n.blockedOn && zt.shift();
        }
        var Wt = x.ReactCurrentBatchConfig,
          Ht = !0;
        function Qt(e, t, n, r) {
          var a = bt,
            l = Wt.transition;
          Wt.transition = null;
          try {
            (bt = 1), Yt(e, t, n, r);
          } finally {
            (bt = a), (Wt.transition = l);
          }
        }
        function Gt(e, t, n, r) {
          var a = bt,
            l = Wt.transition;
          Wt.transition = null;
          try {
            (bt = 4), Yt(e, t, n, r);
          } finally {
            (bt = a), (Wt.transition = l);
          }
        }
        function Yt(e, t, n, r) {
          if (Ht) {
            var a = qt(e, t, n, r);
            if (null === a) Hr(e, t, r, Kt, n), Mt(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (Pt = It(Pt, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (Lt = It(Lt, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (Tt = It(Tt, e, t, n, r, a)), !0;
                  case "pointerover":
                    var l = a.pointerId;
                    return Rt.set(l, It(Rt.get(l) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (l = a.pointerId),
                      At.set(l, It(At.get(l) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Mt(e, r), 4 & t && -1 < Ot.indexOf(e))) {
              for (; null !== a; ) {
                var l = ba(a);
                if (
                  (null !== l && wt(l),
                  null === (l = qt(e, t, n, r)) && Hr(e, t, r, Kt, n),
                  l === a)
                )
                  break;
                a = l;
              }
              null !== a && r.stopPropagation();
            } else Hr(e, t, r, null, n);
          }
        }
        var Kt = null;
        function qt(e, t, n, r) {
          if (((Kt = null), null !== (e = ya((e = we(r))))))
            if (null === (t = Ve(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = We(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Kt = e), null;
        }
        function Xt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Ze()) {
                case $e:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Jt = null,
          Zt = null,
          $t = null;
        function en() {
          if ($t) return $t;
          var e,
            t,
            n = Zt,
            r = n.length,
            a = "value" in Jt ? Jt.value : Jt.textContent,
            l = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === a[l - t]; t++);
          return ($t = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, l) {
            for (var i in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = l),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(a) : a[i]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            D(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var ln,
          on,
          sn,
          un = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(un),
          dn = D({}, un, { view: 0, detail: 0 }),
          fn = an(dn),
          pn = D({}, dn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Cn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== sn &&
                    (sn && "mousemove" === e.type
                      ? ((ln = e.screenX - sn.screenX),
                        (on = e.screenY - sn.screenY))
                      : (on = ln = 0),
                    (sn = e)),
                  ln);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : on;
            },
          }),
          hn = an(pn),
          mn = an(D({}, pn, { dataTransfer: 0 })),
          gn = an(D({}, dn, { relatedTarget: 0 })),
          vn = an(
            D({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          yn = D({}, un, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(yn),
          xn = an(D({}, un, { data: 0 })),
          wn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          kn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          jn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function Sn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = jn[e]) && !!t[e];
        }
        function Cn() {
          return Sn;
        }
        var En = D({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = wn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? kn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Cn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Nn = an(En),
          Pn = an(
            D({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          Ln = an(
            D({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Cn,
            })
          ),
          Tn = an(
            D({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Rn = D({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          An = an(Rn),
          zn = [9, 13, 27, 32],
          On = c && "CompositionEvent" in window,
          Mn = null;
        c && "documentMode" in document && (Mn = document.documentMode);
        var In = c && "TextEvent" in window && !Mn,
          Dn = c && (!On || (Mn && 8 < Mn && 11 >= Mn)),
          Fn = String.fromCharCode(32),
          Bn = !1;
        function _n(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== zn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Un(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Vn = !1;
        var Wn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Hn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Wn[e.type] : "textarea" === t;
        }
        function Qn(e, t, n, r) {
          Ee(r),
            0 < (t = Gr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Gn = null,
          Yn = null;
        function Kn(e) {
          Fr(e, 0);
        }
        function qn(e) {
          if (Y(xa(e))) return e;
        }
        function Xn(e, t) {
          if ("change" === e) return t;
        }
        var Jn = !1;
        if (c) {
          var Zn;
          if (c) {
            var $n = "oninput" in document;
            if (!$n) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                ($n = "function" === typeof er.oninput);
            }
            Zn = $n;
          } else Zn = !1;
          Jn = Zn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Gn && (Gn.detachEvent("onpropertychange", nr), (Yn = Gn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && qn(Yn)) {
            var t = [];
            Qn(t, Yn, e, we(e)), Re(Kn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (Yn = n), (Gn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return qn(Yn);
        }
        function lr(e, t) {
          if ("click" === e) return qn(t);
        }
        function ir(e, t) {
          if ("input" === e || "change" === e) return qn(t);
        }
        var or =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function sr(e, t) {
          if (or(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!d.call(t, a) || !or(e[a], t[a])) return !1;
          }
          return !0;
        }
        function ur(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = ur(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = ur(r);
          }
        }
        function dr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? dr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function fr() {
          for (var e = window, t = K(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = K((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = fr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            dr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  l = Math.min(r.start, a);
                (r = void 0 === r.end ? l : Math.min(r.end, a)),
                  !e.extend && l > r && ((a = r), (r = l), (l = a)),
                  (a = cr(n, l));
                var i = cr(n, r);
                a &&
                  i &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== i.node ||
                    e.focusOffset !== i.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  l > r
                    ? (e.addRange(t), e.extend(i.node, i.offset))
                    : (t.setEnd(i.node, i.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var mr = c && "documentMode" in document && 11 >= document.documentMode,
          gr = null,
          vr = null,
          yr = null,
          br = !1;
        function xr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == gr ||
            gr !== K(r) ||
            ("selectionStart" in (r = gr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && sr(yr, r)) ||
              ((yr = r),
              0 < (r = Gr(vr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = gr))));
        }
        function wr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var kr = {
            animationend: wr("Animation", "AnimationEnd"),
            animationiteration: wr("Animation", "AnimationIteration"),
            animationstart: wr("Animation", "AnimationStart"),
            transitionend: wr("Transition", "TransitionEnd"),
          },
          jr = {},
          Sr = {};
        function Cr(e) {
          if (jr[e]) return jr[e];
          if (!kr[e]) return e;
          var t,
            n = kr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Sr) return (jr[e] = n[t]);
          return e;
        }
        c &&
          ((Sr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete kr.animationend.animation,
            delete kr.animationiteration.animation,
            delete kr.animationstart.animation),
          "TransitionEvent" in window || delete kr.transitionend.transition);
        var Er = Cr("animationend"),
          Nr = Cr("animationiteration"),
          Pr = Cr("animationstart"),
          Lr = Cr("transitionend"),
          Tr = new Map(),
          Rr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Ar(e, t) {
          Tr.set(e, t), s(t, [e]);
        }
        for (var zr = 0; zr < Rr.length; zr++) {
          var Or = Rr[zr];
          Ar(Or.toLowerCase(), "on" + (Or[0].toUpperCase() + Or.slice(1)));
        }
        Ar(Er, "onAnimationEnd"),
          Ar(Nr, "onAnimationIteration"),
          Ar(Pr, "onAnimationStart"),
          Ar("dblclick", "onDoubleClick"),
          Ar("focusin", "onFocus"),
          Ar("focusout", "onBlur"),
          Ar(Lr, "onTransitionEnd"),
          u("onMouseEnter", ["mouseout", "mouseover"]),
          u("onMouseLeave", ["mouseout", "mouseover"]),
          u("onPointerEnter", ["pointerout", "pointerover"]),
          u("onPointerLeave", ["pointerout", "pointerover"]),
          s(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          s(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          s("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          s(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Mr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Ir = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Mr)
          );
        function Dr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, i, o, s, u) {
              if ((Ue.apply(this, arguments), Ie)) {
                if (!Ie) throw Error(l(198));
                var c = De;
                (Ie = !1), (De = null), Fe || ((Fe = !0), (Be = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Fr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var l = void 0;
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var o = r[i],
                    s = o.instance,
                    u = o.currentTarget;
                  if (((o = o.listener), s !== l && a.isPropagationStopped()))
                    break e;
                  Dr(a, o, u), (l = s);
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((s = (o = r[i]).instance),
                    (u = o.currentTarget),
                    (o = o.listener),
                    s !== l && a.isPropagationStopped())
                  )
                    break e;
                  Dr(a, o, u), (l = s);
                }
            }
          }
          if (Fe) throw ((e = Be), (Fe = !1), (Be = null), e);
        }
        function Br(e, t) {
          var n = t[ma];
          void 0 === n && (n = t[ma] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Wr(t, e, 2, !1), n.add(r));
        }
        function _r(e, t, n) {
          var r = 0;
          t && (r |= 4), Wr(n, e, r, t);
        }
        var Ur = "_reactListening" + Math.random().toString(36).slice(2);
        function Vr(e) {
          if (!e[Ur]) {
            (e[Ur] = !0),
              i.forEach(function (t) {
                "selectionchange" !== t &&
                  (Ir.has(t) || _r(t, !1, e), _r(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Ur] || ((t[Ur] = !0), _r("selectionchange", !1, t));
          }
        }
        function Wr(e, t, n, r) {
          switch (Xt(t)) {
            case 1:
              var a = Qt;
              break;
            case 4:
              a = Gt;
              break;
            default:
              a = Yt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !ze ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Hr(e, t, n, r, a) {
          var l = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var i = r.tag;
              if (3 === i || 4 === i) {
                var o = r.stateNode.containerInfo;
                if (o === a || (8 === o.nodeType && o.parentNode === a)) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var s = i.tag;
                    if (
                      (3 === s || 4 === s) &&
                      ((s = i.stateNode.containerInfo) === a ||
                        (8 === s.nodeType && s.parentNode === a))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== o; ) {
                  if (null === (i = ya(o))) return;
                  if (5 === (s = i.tag) || 6 === s) {
                    r = l = i;
                    continue e;
                  }
                  o = o.parentNode;
                }
              }
              r = r.return;
            }
          Re(function () {
            var r = l,
              a = we(n),
              i = [];
            e: {
              var o = Tr.get(e);
              if (void 0 !== o) {
                var s = cn,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    s = Nn;
                    break;
                  case "focusin":
                    (u = "focus"), (s = gn);
                    break;
                  case "focusout":
                    (u = "blur"), (s = gn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    s = gn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    s = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    s = mn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    s = Ln;
                    break;
                  case Er:
                  case Nr:
                  case Pr:
                    s = vn;
                    break;
                  case Lr:
                    s = Tn;
                    break;
                  case "scroll":
                    s = fn;
                    break;
                  case "wheel":
                    s = An;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    s = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    s = Pn;
                }
                var c = 0 !== (4 & t),
                  d = !c && "scroll" === e,
                  f = c ? (null !== o ? o + "Capture" : null) : o;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m),
                      null !== f &&
                        null != (m = Ae(h, f)) &&
                        c.push(Qr(h, m, p))),
                    d)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((o = new s(o, u, null, n, a)),
                  i.push({ event: o, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((s = "mouseout" === e || "pointerout" === e),
                (!(o = "mouseover" === e || "pointerover" === e) ||
                  n === xe ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!ya(u) && !u[ha])) &&
                  (s || o) &&
                  ((o =
                    a.window === a
                      ? a
                      : (o = a.ownerDocument)
                      ? o.defaultView || o.parentWindow
                      : window),
                  s
                    ? ((s = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? ya(u)
                          : null) &&
                        (u !== (d = Ve(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((s = null), (u = r)),
                  s !== u))
              ) {
                if (
                  ((c = hn),
                  (m = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Pn),
                    (m = "onPointerLeave"),
                    (f = "onPointerEnter"),
                    (h = "pointer")),
                  (d = null == s ? o : xa(s)),
                  (p = null == u ? o : xa(u)),
                  ((o = new c(m, h + "leave", s, n, a)).target = d),
                  (o.relatedTarget = p),
                  (m = null),
                  ya(a) === r &&
                    (((c = new c(f, h + "enter", u, n, a)).target = p),
                    (c.relatedTarget = d),
                    (m = c)),
                  (d = m),
                  s && u)
                )
                  e: {
                    for (f = u, h = 0, p = c = s; p; p = Yr(p)) h++;
                    for (p = 0, m = f; m; m = Yr(m)) p++;
                    for (; 0 < h - p; ) (c = Yr(c)), h--;
                    for (; 0 < p - h; ) (f = Yr(f)), p--;
                    for (; h--; ) {
                      if (c === f || (null !== f && c === f.alternate)) break e;
                      (c = Yr(c)), (f = Yr(f));
                    }
                    c = null;
                  }
                else c = null;
                null !== s && Kr(i, o, s, c, !1),
                  null !== u && null !== d && Kr(i, d, u, c, !0);
              }
              if (
                "select" ===
                  (s =
                    (o = r ? xa(r) : window).nodeName &&
                    o.nodeName.toLowerCase()) ||
                ("input" === s && "file" === o.type)
              )
                var g = Xn;
              else if (Hn(o))
                if (Jn) g = ir;
                else {
                  g = ar;
                  var v = rr;
                }
              else
                (s = o.nodeName) &&
                  "input" === s.toLowerCase() &&
                  ("checkbox" === o.type || "radio" === o.type) &&
                  (g = lr);
              switch (
                (g && (g = g(e, r))
                  ? Qn(i, g, n, a)
                  : (v && v(e, o, r),
                    "focusout" === e &&
                      (v = o._wrapperState) &&
                      v.controlled &&
                      "number" === o.type &&
                      ee(o, "number", o.value)),
                (v = r ? xa(r) : window),
                e)
              ) {
                case "focusin":
                  (Hn(v) || "true" === v.contentEditable) &&
                    ((gr = v), (vr = r), (yr = null));
                  break;
                case "focusout":
                  yr = vr = gr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), xr(i, n, a);
                  break;
                case "selectionchange":
                  if (mr) break;
                case "keydown":
                case "keyup":
                  xr(i, n, a);
              }
              var y;
              if (On)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Vn
                  ? _n(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Dn &&
                  "ko" !== n.locale &&
                  (Vn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Vn && (y = en())
                    : ((Zt = "value" in (Jt = a) ? Jt.value : Jt.textContent),
                      (Vn = !0))),
                0 < (v = Gr(r, b)).length &&
                  ((b = new xn(b, e, null, n, a)),
                  i.push({ event: b, listeners: v }),
                  y ? (b.data = y) : null !== (y = Un(n)) && (b.data = y))),
                (y = In
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Un(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Bn = !0), Fn);
                        case "textInput":
                          return (e = t.data) === Fn && Bn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Vn)
                        return "compositionend" === e || (!On && _n(e, t))
                          ? ((e = en()), ($t = Zt = Jt = null), (Vn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Dn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Gr(r, "onBeforeInput")).length &&
                  ((a = new xn("onBeforeInput", "beforeinput", null, n, a)),
                  i.push({ event: a, listeners: r }),
                  (a.data = y));
            }
            Fr(i, t);
          });
        }
        function Qr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Gr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              l = a.stateNode;
            5 === a.tag &&
              null !== l &&
              ((a = l),
              null != (l = Ae(e, n)) && r.unshift(Qr(e, l, a)),
              null != (l = Ae(e, t)) && r.push(Qr(e, l, a))),
              (e = e.return);
          }
          return r;
        }
        function Yr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Kr(e, t, n, r, a) {
          for (var l = t._reactName, i = []; null !== n && n !== r; ) {
            var o = n,
              s = o.alternate,
              u = o.stateNode;
            if (null !== s && s === r) break;
            5 === o.tag &&
              null !== u &&
              ((o = u),
              a
                ? null != (s = Ae(n, l)) && i.unshift(Qr(n, s, o))
                : a || (null != (s = Ae(n, l)) && i.push(Qr(n, s, o)))),
              (n = n.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        var qr = /\r\n?/g,
          Xr = /\u0000|\uFFFD/g;
        function Jr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(qr, "\n")
            .replace(Xr, "");
        }
        function Zr(e, t, n) {
          if (((t = Jr(t)), Jr(e) !== t && n)) throw Error(l(425));
        }
        function $r() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          la = "function" === typeof Promise ? Promise : void 0,
          ia =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof la
              ? function (e) {
                  return la.resolve(null).then(e).catch(oa);
                }
              : ra;
        function oa(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function sa(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Vt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Vt(t);
        }
        function ua(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ca(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var da = Math.random().toString(36).slice(2),
          fa = "__reactFiber$" + da,
          pa = "__reactProps$" + da,
          ha = "__reactContainer$" + da,
          ma = "__reactEvents$" + da,
          ga = "__reactListeners$" + da,
          va = "__reactHandles$" + da;
        function ya(e) {
          var t = e[fa];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ha] || n[fa])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ca(e); null !== e; ) {
                  if ((n = e[fa])) return n;
                  e = ca(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[fa] || e[ha]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function xa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(l(33));
        }
        function wa(e) {
          return e[pa] || null;
        }
        var ka = [],
          ja = -1;
        function Sa(e) {
          return { current: e };
        }
        function Ca(e) {
          0 > ja || ((e.current = ka[ja]), (ka[ja] = null), ja--);
        }
        function Ea(e, t) {
          ja++, (ka[ja] = e.current), (e.current = t);
        }
        var Na = {},
          Pa = Sa(Na),
          La = Sa(!1),
          Ta = Na;
        function Ra(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Na;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            l = {};
          for (a in n) l[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = l)),
            l
          );
        }
        function Aa(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function za() {
          Ca(La), Ca(Pa);
        }
        function Oa(e, t, n) {
          if (Pa.current !== Na) throw Error(l(168));
          Ea(Pa, t), Ea(La, n);
        }
        function Ma(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(l(108, W(e) || "Unknown", a));
          return D({}, n, r);
        }
        function Ia(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Na),
            (Ta = Pa.current),
            Ea(Pa, e),
            Ea(La, La.current),
            !0
          );
        }
        function Da(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(l(169));
          n
            ? ((e = Ma(e, t, Ta)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ca(La),
              Ca(Pa),
              Ea(Pa, e))
            : Ca(La),
            Ea(La, n);
        }
        var Fa = null,
          Ba = !1,
          _a = !1;
        function Ua(e) {
          null === Fa ? (Fa = [e]) : Fa.push(e);
        }
        function Va() {
          if (!_a && null !== Fa) {
            _a = !0;
            var e = 0,
              t = bt;
            try {
              var n = Fa;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Fa = null), (Ba = !1);
            } catch (a) {
              throw (null !== Fa && (Fa = Fa.slice(e + 1)), Ye($e, Va), a);
            } finally {
              (bt = t), (_a = !1);
            }
          }
          return null;
        }
        var Wa = [],
          Ha = 0,
          Qa = null,
          Ga = 0,
          Ya = [],
          Ka = 0,
          qa = null,
          Xa = 1,
          Ja = "";
        function Za(e, t) {
          (Wa[Ha++] = Ga), (Wa[Ha++] = Qa), (Qa = e), (Ga = t);
        }
        function $a(e, t, n) {
          (Ya[Ka++] = Xa), (Ya[Ka++] = Ja), (Ya[Ka++] = qa), (qa = e);
          var r = Xa;
          e = Ja;
          var a = 32 - it(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var l = 32 - it(t) + a;
          if (30 < l) {
            var i = a - (a % 5);
            (l = (r & ((1 << i) - 1)).toString(32)),
              (r >>= i),
              (a -= i),
              (Xa = (1 << (32 - it(t) + a)) | (n << a) | r),
              (Ja = l + e);
          } else (Xa = (1 << l) | (n << a) | r), (Ja = e);
        }
        function el(e) {
          null !== e.return && (Za(e, 1), $a(e, 1, 0));
        }
        function tl(e) {
          for (; e === Qa; )
            (Qa = Wa[--Ha]), (Wa[Ha] = null), (Ga = Wa[--Ha]), (Wa[Ha] = null);
          for (; e === qa; )
            (qa = Ya[--Ka]),
              (Ya[Ka] = null),
              (Ja = Ya[--Ka]),
              (Ya[Ka] = null),
              (Xa = Ya[--Ka]),
              (Ya[Ka] = null);
        }
        var nl = null,
          rl = null,
          al = !1,
          ll = null;
        function il(e, t) {
          var n = Ru(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function ol(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (nl = e), (rl = ua(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (nl = e), (rl = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== qa ? { id: Xa, overflow: Ja } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Ru(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (nl = e),
                (rl = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function sl(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function ul(e) {
          if (al) {
            var t = rl;
            if (t) {
              var n = t;
              if (!ol(e, t)) {
                if (sl(e)) throw Error(l(418));
                t = ua(n.nextSibling);
                var r = nl;
                t && ol(e, t)
                  ? il(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (al = !1), (nl = e));
              }
            } else {
              if (sl(e)) throw Error(l(418));
              (e.flags = (-4097 & e.flags) | 2), (al = !1), (nl = e);
            }
          }
        }
        function cl(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          nl = e;
        }
        function dl(e) {
          if (e !== nl) return !1;
          if (!al) return cl(e), (al = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = rl))
          ) {
            if (sl(e)) throw (fl(), Error(l(418)));
            for (; t; ) il(e, t), (t = ua(t.nextSibling));
          }
          if ((cl(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(l(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      rl = ua(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              rl = null;
            }
          } else rl = nl ? ua(e.stateNode.nextSibling) : null;
          return !0;
        }
        function fl() {
          for (var e = rl; e; ) e = ua(e.nextSibling);
        }
        function pl() {
          (rl = nl = null), (al = !1);
        }
        function hl(e) {
          null === ll ? (ll = [e]) : ll.push(e);
        }
        var ml = x.ReactCurrentBatchConfig;
        function gl(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(l(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(l(147, e));
              var a = r,
                i = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    null === e ? delete t[i] : (t[i] = e);
                  }),
                  (t._stringRef = i),
                  t);
            }
            if ("string" !== typeof e) throw Error(l(284));
            if (!n._owner) throw Error(l(290, e));
          }
          return e;
        }
        function vl(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              l(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function yl(e) {
          return (0, e._init)(e._payload);
        }
        function bl(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = zu(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function o(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Du(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            var l = n.type;
            return l === j
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === l ||
                  ("object" === typeof l &&
                    null !== l &&
                    l.$$typeof === A &&
                    yl(l) === t.type))
              ? (((r = a(t, n.props)).ref = gl(e, t, n)), (r.return = e), r)
              : (((r = Ou(n.type, n.key, n.props, null, e.mode, r)).ref = gl(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Fu(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, l) {
            return null === t || 7 !== t.tag
              ? (((t = Mu(n, e.mode, r, l)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Du("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case w:
                  return (
                    ((n = Ou(t.type, t.key, t.props, null, e.mode, n)).ref = gl(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case k:
                  return ((t = Fu(t, e.mode, n)).return = e), t;
                case A:
                  return f(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || M(t))
                return ((t = Mu(t, e.mode, n, null)).return = e), t;
              vl(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : s(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case w:
                  return n.key === a ? u(e, t, n, r) : null;
                case k:
                  return n.key === a ? c(e, t, n, r) : null;
                case A:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || M(n)) return null !== a ? null : d(e, t, n, r, null);
              vl(e, n);
            }
            return null;
          }
          function h(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return s(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case w:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case k:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case A:
                  return h(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || M(r))
                return d(t, (e = e.get(n) || null), r, a, null);
              vl(t, r);
            }
            return null;
          }
          function m(a, l, o, s) {
            for (
              var u = null, c = null, d = l, m = (l = 0), g = null;
              null !== d && m < o.length;
              m++
            ) {
              d.index > m ? ((g = d), (d = null)) : (g = d.sibling);
              var v = p(a, d, o[m], s);
              if (null === v) {
                null === d && (d = g);
                break;
              }
              e && d && null === v.alternate && t(a, d),
                (l = i(v, l, m)),
                null === c ? (u = v) : (c.sibling = v),
                (c = v),
                (d = g);
            }
            if (m === o.length) return n(a, d), al && Za(a, m), u;
            if (null === d) {
              for (; m < o.length; m++)
                null !== (d = f(a, o[m], s)) &&
                  ((l = i(d, l, m)),
                  null === c ? (u = d) : (c.sibling = d),
                  (c = d));
              return al && Za(a, m), u;
            }
            for (d = r(a, d); m < o.length; m++)
              null !== (g = h(d, a, m, o[m], s)) &&
                (e &&
                  null !== g.alternate &&
                  d.delete(null === g.key ? m : g.key),
                (l = i(g, l, m)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g));
            return (
              e &&
                d.forEach(function (e) {
                  return t(a, e);
                }),
              al && Za(a, m),
              u
            );
          }
          function g(a, o, s, u) {
            var c = M(s);
            if ("function" !== typeof c) throw Error(l(150));
            if (null == (s = c.call(s))) throw Error(l(151));
            for (
              var d = (c = null), m = o, g = (o = 0), v = null, y = s.next();
              null !== m && !y.done;
              g++, y = s.next()
            ) {
              m.index > g ? ((v = m), (m = null)) : (v = m.sibling);
              var b = p(a, m, y.value, u);
              if (null === b) {
                null === m && (m = v);
                break;
              }
              e && m && null === b.alternate && t(a, m),
                (o = i(b, o, g)),
                null === d ? (c = b) : (d.sibling = b),
                (d = b),
                (m = v);
            }
            if (y.done) return n(a, m), al && Za(a, g), c;
            if (null === m) {
              for (; !y.done; g++, y = s.next())
                null !== (y = f(a, y.value, u)) &&
                  ((o = i(y, o, g)),
                  null === d ? (c = y) : (d.sibling = y),
                  (d = y));
              return al && Za(a, g), c;
            }
            for (m = r(a, m); !y.done; g++, y = s.next())
              null !== (y = h(m, a, g, y.value, u)) &&
                (e &&
                  null !== y.alternate &&
                  m.delete(null === y.key ? g : y.key),
                (o = i(y, o, g)),
                null === d ? (c = y) : (d.sibling = y),
                (d = y));
            return (
              e &&
                m.forEach(function (e) {
                  return t(a, e);
                }),
              al && Za(a, g),
              c
            );
          }
          return function e(r, l, i, s) {
            if (
              ("object" === typeof i &&
                null !== i &&
                i.type === j &&
                null === i.key &&
                (i = i.props.children),
              "object" === typeof i && null !== i)
            ) {
              switch (i.$$typeof) {
                case w:
                  e: {
                    for (var u = i.key, c = l; null !== c; ) {
                      if (c.key === u) {
                        if ((u = i.type) === j) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((l = a(c, i.props.children)).return = r),
                              (r = l);
                            break e;
                          }
                        } else if (
                          c.elementType === u ||
                          ("object" === typeof u &&
                            null !== u &&
                            u.$$typeof === A &&
                            yl(u) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((l = a(c, i.props)).ref = gl(r, c, i)),
                            (l.return = r),
                            (r = l);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    i.type === j
                      ? (((l = Mu(i.props.children, r.mode, s, i.key)).return =
                          r),
                        (r = l))
                      : (((s = Ou(
                          i.type,
                          i.key,
                          i.props,
                          null,
                          r.mode,
                          s
                        )).ref = gl(r, l, i)),
                        (s.return = r),
                        (r = s));
                  }
                  return o(r);
                case k:
                  e: {
                    for (c = i.key; null !== l; ) {
                      if (l.key === c) {
                        if (
                          4 === l.tag &&
                          l.stateNode.containerInfo === i.containerInfo &&
                          l.stateNode.implementation === i.implementation
                        ) {
                          n(r, l.sibling),
                            ((l = a(l, i.children || [])).return = r),
                            (r = l);
                          break e;
                        }
                        n(r, l);
                        break;
                      }
                      t(r, l), (l = l.sibling);
                    }
                    ((l = Fu(i, r.mode, s)).return = r), (r = l);
                  }
                  return o(r);
                case A:
                  return e(r, l, (c = i._init)(i._payload), s);
              }
              if (te(i)) return m(r, l, i, s);
              if (M(i)) return g(r, l, i, s);
              vl(r, i);
            }
            return ("string" === typeof i && "" !== i) || "number" === typeof i
              ? ((i = "" + i),
                null !== l && 6 === l.tag
                  ? (n(r, l.sibling), ((l = a(l, i)).return = r), (r = l))
                  : (n(r, l), ((l = Du(i, r.mode, s)).return = r), (r = l)),
                o(r))
              : n(r, l);
          };
        }
        var xl = bl(!0),
          wl = bl(!1),
          kl = Sa(null),
          jl = null,
          Sl = null,
          Cl = null;
        function El() {
          Cl = Sl = jl = null;
        }
        function Nl(e) {
          var t = kl.current;
          Ca(kl), (e._currentValue = t);
        }
        function Pl(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Ll(e, t) {
          (jl = e),
            (Cl = Sl = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (bo = !0), (e.firstContext = null));
        }
        function Tl(e) {
          var t = e._currentValue;
          if (Cl !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === Sl)
            ) {
              if (null === jl) throw Error(l(308));
              (Sl = e), (jl.dependencies = { lanes: 0, firstContext: e });
            } else Sl = Sl.next = e;
          return t;
        }
        var Rl = null;
        function Al(e) {
          null === Rl ? (Rl = [e]) : Rl.push(e);
        }
        function zl(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), Al(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            Ol(e, r)
          );
        }
        function Ol(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Ml = !1;
        function Il(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Dl(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Fl(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Bl(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Ps))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              Ol(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), Al(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            Ol(e, n)
          );
        }
        function _l(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        function Ul(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              l = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === l ? (a = l = i) : (l = l.next = i), (n = n.next);
              } while (null !== n);
              null === l ? (a = l = t) : (l = l.next = t);
            } else a = l = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: l,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Vl(e, t, n, r) {
          var a = e.updateQueue;
          Ml = !1;
          var l = a.firstBaseUpdate,
            i = a.lastBaseUpdate,
            o = a.shared.pending;
          if (null !== o) {
            a.shared.pending = null;
            var s = o,
              u = s.next;
            (s.next = null), null === i ? (l = u) : (i.next = u), (i = s);
            var c = e.alternate;
            null !== c &&
              (o = (c = c.updateQueue).lastBaseUpdate) !== i &&
              (null === o ? (c.firstBaseUpdate = u) : (o.next = u),
              (c.lastBaseUpdate = s));
          }
          if (null !== l) {
            var d = a.baseState;
            for (i = 0, c = u = s = null, o = l; ; ) {
              var f = o.lane,
                p = o.eventTime;
              if ((r & f) === f) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: o.tag,
                      payload: o.payload,
                      callback: o.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    m = o;
                  switch (((f = t), (p = n), m.tag)) {
                    case 1:
                      if ("function" === typeof (h = m.payload)) {
                        d = h.call(p, d, f);
                        break e;
                      }
                      d = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (f =
                            "function" === typeof (h = m.payload)
                              ? h.call(p, d, f)
                              : h) ||
                        void 0 === f
                      )
                        break e;
                      d = D({}, d, f);
                      break e;
                    case 2:
                      Ml = !0;
                  }
                }
                null !== o.callback &&
                  0 !== o.lane &&
                  ((e.flags |= 64),
                  null === (f = a.effects) ? (a.effects = [o]) : f.push(o));
              } else
                (p = {
                  eventTime: p,
                  lane: f,
                  tag: o.tag,
                  payload: o.payload,
                  callback: o.callback,
                  next: null,
                }),
                  null === c ? ((u = c = p), (s = d)) : (c = c.next = p),
                  (i |= f);
              if (null === (o = o.next)) {
                if (null === (o = a.shared.pending)) break;
                (o = (f = o).next),
                  (f.next = null),
                  (a.lastBaseUpdate = f),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === c && (s = d),
              (a.baseState = s),
              (a.firstBaseUpdate = u),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (i |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === l && (a.shared.lanes = 0);
            (Is |= i), (e.lanes = i), (e.memoizedState = d);
          }
        }
        function Wl(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(l(191, a));
                a.call(r);
              }
            }
        }
        var Hl = {},
          Ql = Sa(Hl),
          Gl = Sa(Hl),
          Yl = Sa(Hl);
        function Kl(e) {
          if (e === Hl) throw Error(l(174));
          return e;
        }
        function ql(e, t) {
          switch ((Ea(Yl, t), Ea(Gl, e), Ea(Ql, Hl), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : se(null, "");
              break;
            default:
              t = se(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Ca(Ql), Ea(Ql, t);
        }
        function Xl() {
          Ca(Ql), Ca(Gl), Ca(Yl);
        }
        function Jl(e) {
          Kl(Yl.current);
          var t = Kl(Ql.current),
            n = se(t, e.type);
          t !== n && (Ea(Gl, e), Ea(Ql, n));
        }
        function Zl(e) {
          Gl.current === e && (Ca(Ql), Ca(Gl));
        }
        var $l = Sa(0);
        function ei(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var ti = [];
        function ni() {
          for (var e = 0; e < ti.length; e++)
            ti[e]._workInProgressVersionPrimary = null;
          ti.length = 0;
        }
        var ri = x.ReactCurrentDispatcher,
          ai = x.ReactCurrentBatchConfig,
          li = 0,
          ii = null,
          oi = null,
          si = null,
          ui = !1,
          ci = !1,
          di = 0,
          fi = 0;
        function pi() {
          throw Error(l(321));
        }
        function hi(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!or(e[n], t[n])) return !1;
          return !0;
        }
        function mi(e, t, n, r, a, i) {
          if (
            ((li = i),
            (ii = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (ri.current = null === e || null === e.memoizedState ? Zi : $i),
            (e = n(r, a)),
            ci)
          ) {
            i = 0;
            do {
              if (((ci = !1), (di = 0), 25 <= i)) throw Error(l(301));
              (i += 1),
                (si = oi = null),
                (t.updateQueue = null),
                (ri.current = eo),
                (e = n(r, a));
            } while (ci);
          }
          if (
            ((ri.current = Ji),
            (t = null !== oi && null !== oi.next),
            (li = 0),
            (si = oi = ii = null),
            (ui = !1),
            t)
          )
            throw Error(l(300));
          return e;
        }
        function gi() {
          var e = 0 !== di;
          return (di = 0), e;
        }
        function vi() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === si ? (ii.memoizedState = si = e) : (si = si.next = e), si
          );
        }
        function yi() {
          if (null === oi) {
            var e = ii.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = oi.next;
          var t = null === si ? ii.memoizedState : si.next;
          if (null !== t) (si = t), (oi = e);
          else {
            if (null === e) throw Error(l(310));
            (e = {
              memoizedState: (oi = e).memoizedState,
              baseState: oi.baseState,
              baseQueue: oi.baseQueue,
              queue: oi.queue,
              next: null,
            }),
              null === si ? (ii.memoizedState = si = e) : (si = si.next = e);
          }
          return si;
        }
        function bi(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function xi(e) {
          var t = yi(),
            n = t.queue;
          if (null === n) throw Error(l(311));
          n.lastRenderedReducer = e;
          var r = oi,
            a = r.baseQueue,
            i = n.pending;
          if (null !== i) {
            if (null !== a) {
              var o = a.next;
              (a.next = i.next), (i.next = o);
            }
            (r.baseQueue = a = i), (n.pending = null);
          }
          if (null !== a) {
            (i = a.next), (r = r.baseState);
            var s = (o = null),
              u = null,
              c = i;
            do {
              var d = c.lane;
              if ((li & d) === d)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var f = {
                  lane: d,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === u ? ((s = u = f), (o = r)) : (u = u.next = f),
                  (ii.lanes |= d),
                  (Is |= d);
              }
              c = c.next;
            } while (null !== c && c !== i);
            null === u ? (o = r) : (u.next = s),
              or(r, t.memoizedState) || (bo = !0),
              (t.memoizedState = r),
              (t.baseState = o),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (i = a.lane), (ii.lanes |= i), (Is |= i), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function wi(e) {
          var t = yi(),
            n = t.queue;
          if (null === n) throw Error(l(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            i = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var o = (a = a.next);
            do {
              (i = e(i, o.action)), (o = o.next);
            } while (o !== a);
            or(i, t.memoizedState) || (bo = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i);
          }
          return [i, r];
        }
        function ki() {}
        function ji(e, t) {
          var n = ii,
            r = yi(),
            a = t(),
            i = !or(r.memoizedState, a);
          if (
            (i && ((r.memoizedState = a), (bo = !0)),
            (r = r.queue),
            Mi(Ei.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              i ||
              (null !== si && 1 & si.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Ti(9, Ci.bind(null, n, r, a, t), void 0, null),
              null === Ls)
            )
              throw Error(l(349));
            0 !== (30 & li) || Si(n, t, a);
          }
          return a;
        }
        function Si(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = ii.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (ii.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Ci(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Ni(t) && Pi(e);
        }
        function Ei(e, t, n) {
          return n(function () {
            Ni(t) && Pi(e);
          });
        }
        function Ni(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !or(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Pi(e) {
          var t = Ol(e, 1);
          null !== t && nu(t, e, 1, -1);
        }
        function Li(e) {
          var t = vi();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: bi,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = Yi.bind(null, ii, e)),
            [t.memoizedState, e]
          );
        }
        function Ti(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = ii.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (ii.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Ri() {
          return yi().memoizedState;
        }
        function Ai(e, t, n, r) {
          var a = vi();
          (ii.flags |= e),
            (a.memoizedState = Ti(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function zi(e, t, n, r) {
          var a = yi();
          r = void 0 === r ? null : r;
          var l = void 0;
          if (null !== oi) {
            var i = oi.memoizedState;
            if (((l = i.destroy), null !== r && hi(r, i.deps)))
              return void (a.memoizedState = Ti(t, n, l, r));
          }
          (ii.flags |= e), (a.memoizedState = Ti(1 | t, n, l, r));
        }
        function Oi(e, t) {
          return Ai(8390656, 8, e, t);
        }
        function Mi(e, t) {
          return zi(2048, 8, e, t);
        }
        function Ii(e, t) {
          return zi(4, 2, e, t);
        }
        function Di(e, t) {
          return zi(4, 4, e, t);
        }
        function Fi(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Bi(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            zi(4, 4, Fi.bind(null, t, e), n)
          );
        }
        function _i() {}
        function Ui(e, t) {
          var n = yi();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && hi(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Vi(e, t) {
          var n = yi();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && hi(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Wi(e, t, n) {
          return 0 === (21 & li)
            ? (e.baseState && ((e.baseState = !1), (bo = !0)),
              (e.memoizedState = n))
            : (or(n, t) ||
                ((n = mt()), (ii.lanes |= n), (Is |= n), (e.baseState = !0)),
              t);
        }
        function Hi(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = ai.transition;
          ai.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (ai.transition = r);
          }
        }
        function Qi() {
          return yi().memoizedState;
        }
        function Gi(e, t, n) {
          var r = tu(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            Ki(e))
          )
            qi(t, n);
          else if (null !== (n = zl(e, t, n, r))) {
            nu(n, e, r, eu()), Xi(n, t, r);
          }
        }
        function Yi(e, t, n) {
          var r = tu(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (Ki(e)) qi(t, a);
          else {
            var l = e.alternate;
            if (
              0 === e.lanes &&
              (null === l || 0 === l.lanes) &&
              null !== (l = t.lastRenderedReducer)
            )
              try {
                var i = t.lastRenderedState,
                  o = l(i, n);
                if (((a.hasEagerState = !0), (a.eagerState = o), or(o, i))) {
                  var s = t.interleaved;
                  return (
                    null === s
                      ? ((a.next = a), Al(t))
                      : ((a.next = s.next), (s.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (u) {}
            null !== (n = zl(e, t, a, r)) &&
              (nu(n, e, r, (a = eu())), Xi(n, t, r));
          }
        }
        function Ki(e) {
          var t = e.alternate;
          return e === ii || (null !== t && t === ii);
        }
        function qi(e, t) {
          ci = ui = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function Xi(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        var Ji = {
            readContext: Tl,
            useCallback: pi,
            useContext: pi,
            useEffect: pi,
            useImperativeHandle: pi,
            useInsertionEffect: pi,
            useLayoutEffect: pi,
            useMemo: pi,
            useReducer: pi,
            useRef: pi,
            useState: pi,
            useDebugValue: pi,
            useDeferredValue: pi,
            useTransition: pi,
            useMutableSource: pi,
            useSyncExternalStore: pi,
            useId: pi,
            unstable_isNewReconciler: !1,
          },
          Zi = {
            readContext: Tl,
            useCallback: function (e, t) {
              return (vi().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Tl,
            useEffect: Oi,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Ai(4194308, 4, Fi.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Ai(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Ai(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = vi();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = vi();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = Gi.bind(null, ii, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (vi().memoizedState = e);
            },
            useState: Li,
            useDebugValue: _i,
            useDeferredValue: function (e) {
              return (vi().memoizedState = e);
            },
            useTransition: function () {
              var e = Li(!1),
                t = e[0];
              return (
                (e = Hi.bind(null, e[1])), (vi().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = ii,
                a = vi();
              if (al) {
                if (void 0 === n) throw Error(l(407));
                n = n();
              } else {
                if (((n = t()), null === Ls)) throw Error(l(349));
                0 !== (30 & li) || Si(r, t, n);
              }
              a.memoizedState = n;
              var i = { value: n, getSnapshot: t };
              return (
                (a.queue = i),
                Oi(Ei.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                Ti(9, Ci.bind(null, r, i, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = vi(),
                t = Ls.identifierPrefix;
              if (al) {
                var n = Ja;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Xa & ~(1 << (32 - it(Xa) - 1))).toString(32) + n)),
                  0 < (n = di++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = fi++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          $i = {
            readContext: Tl,
            useCallback: Ui,
            useContext: Tl,
            useEffect: Mi,
            useImperativeHandle: Bi,
            useInsertionEffect: Ii,
            useLayoutEffect: Di,
            useMemo: Vi,
            useReducer: xi,
            useRef: Ri,
            useState: function () {
              return xi(bi);
            },
            useDebugValue: _i,
            useDeferredValue: function (e) {
              return Wi(yi(), oi.memoizedState, e);
            },
            useTransition: function () {
              return [xi(bi)[0], yi().memoizedState];
            },
            useMutableSource: ki,
            useSyncExternalStore: ji,
            useId: Qi,
            unstable_isNewReconciler: !1,
          },
          eo = {
            readContext: Tl,
            useCallback: Ui,
            useContext: Tl,
            useEffect: Mi,
            useImperativeHandle: Bi,
            useInsertionEffect: Ii,
            useLayoutEffect: Di,
            useMemo: Vi,
            useReducer: wi,
            useRef: Ri,
            useState: function () {
              return wi(bi);
            },
            useDebugValue: _i,
            useDeferredValue: function (e) {
              var t = yi();
              return null === oi
                ? (t.memoizedState = e)
                : Wi(t, oi.memoizedState, e);
            },
            useTransition: function () {
              return [wi(bi)[0], yi().memoizedState];
            },
            useMutableSource: ki,
            useSyncExternalStore: ji,
            useId: Qi,
            unstable_isNewReconciler: !1,
          };
        function to(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = D({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        function no(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : D({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var ro = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Ve(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = eu(),
              a = tu(e),
              l = Fl(r, a);
            (l.payload = t),
              void 0 !== n && null !== n && (l.callback = n),
              null !== (t = Bl(e, l, a)) && (nu(t, e, a, r), _l(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = eu(),
              a = tu(e),
              l = Fl(r, a);
            (l.tag = 1),
              (l.payload = t),
              void 0 !== n && null !== n && (l.callback = n),
              null !== (t = Bl(e, l, a)) && (nu(t, e, a, r), _l(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = eu(),
              r = tu(e),
              a = Fl(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Bl(e, a, r)) && (nu(t, e, r, n), _l(t, e, r));
          },
        };
        function ao(e, t, n, r, a, l, i) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, l, i)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !sr(n, r) ||
                !sr(a, l);
        }
        function lo(e, t, n) {
          var r = !1,
            a = Na,
            l = t.contextType;
          return (
            "object" === typeof l && null !== l
              ? (l = Tl(l))
              : ((a = Aa(t) ? Ta : Pa.current),
                (l = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Ra(e, a)
                  : Na)),
            (t = new t(n, l)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = ro),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = l)),
            t
          );
        }
        function io(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && ro.enqueueReplaceState(t, t.state, null);
        }
        function oo(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = {}), Il(e);
          var l = t.contextType;
          "object" === typeof l && null !== l
            ? (a.context = Tl(l))
            : ((l = Aa(t) ? Ta : Pa.current), (a.context = Ra(e, l))),
            (a.state = e.memoizedState),
            "function" === typeof (l = t.getDerivedStateFromProps) &&
              (no(e, t, l, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && ro.enqueueReplaceState(a, a.state, null),
              Vl(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function so(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += U(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (l) {
            a = "\nError generating stack: " + l.message + "\n" + l.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function uo(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function co(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var fo = "function" === typeof WeakMap ? WeakMap : Map;
        function po(e, t, n) {
          ((n = Fl(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Hs || ((Hs = !0), (Qs = r)), co(0, t);
            }),
            n
          );
        }
        function ho(e, t, n) {
          (n = Fl(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                co(0, t);
              });
          }
          var l = e.stateNode;
          return (
            null !== l &&
              "function" === typeof l.componentDidCatch &&
              (n.callback = function () {
                co(0, t),
                  "function" !== typeof r &&
                    (null === Gs ? (Gs = new Set([this])) : Gs.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function mo(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new fo();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Cu.bind(null, e, t, n)), t.then(e, e));
        }
        function go(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function vo(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Fl(-1, 1)).tag = 2), Bl(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var yo = x.ReactCurrentOwner,
          bo = !1;
        function xo(e, t, n, r) {
          t.child = null === e ? wl(t, null, n, r) : xl(t, e.child, n, r);
        }
        function wo(e, t, n, r, a) {
          n = n.render;
          var l = t.ref;
          return (
            Ll(t, a),
            (r = mi(e, t, n, r, l, a)),
            (n = gi()),
            null === e || bo
              ? (al && n && el(t), (t.flags |= 1), xo(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Ho(e, t, a))
          );
        }
        function ko(e, t, n, r, a) {
          if (null === e) {
            var l = n.type;
            return "function" !== typeof l ||
              Au(l) ||
              void 0 !== l.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Ou(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = l), jo(e, t, l, r, a));
          }
          if (((l = e.child), 0 === (e.lanes & a))) {
            var i = l.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : sr)(i, r) &&
              e.ref === t.ref
            )
              return Ho(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = zu(l, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function jo(e, t, n, r, a) {
          if (null !== e) {
            var l = e.memoizedProps;
            if (sr(l, r) && e.ref === t.ref) {
              if (((bo = !1), (t.pendingProps = r = l), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), Ho(e, t, a);
              0 !== (131072 & e.flags) && (bo = !0);
            }
          }
          return Eo(e, t, n, r, a);
        }
        function So(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            l = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Ea(zs, As),
                (As |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== l ? l.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Ea(zs, As),
                  (As |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== l ? l.baseLanes : n),
                Ea(zs, As),
                (As |= r);
            }
          else
            null !== l
              ? ((r = l.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Ea(zs, As),
              (As |= r);
          return xo(e, t, a, n), t.child;
        }
        function Co(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Eo(e, t, n, r, a) {
          var l = Aa(n) ? Ta : Pa.current;
          return (
            (l = Ra(t, l)),
            Ll(t, a),
            (n = mi(e, t, n, r, l, a)),
            (r = gi()),
            null === e || bo
              ? (al && r && el(t), (t.flags |= 1), xo(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Ho(e, t, a))
          );
        }
        function No(e, t, n, r, a) {
          if (Aa(n)) {
            var l = !0;
            Ia(t);
          } else l = !1;
          if ((Ll(t, a), null === t.stateNode))
            Wo(e, t), lo(t, n, r), oo(t, n, r, a), (r = !0);
          else if (null === e) {
            var i = t.stateNode,
              o = t.memoizedProps;
            i.props = o;
            var s = i.context,
              u = n.contextType;
            "object" === typeof u && null !== u
              ? (u = Tl(u))
              : (u = Ra(t, (u = Aa(n) ? Ta : Pa.current)));
            var c = n.getDerivedStateFromProps,
              d =
                "function" === typeof c ||
                "function" === typeof i.getSnapshotBeforeUpdate;
            d ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((o !== r || s !== u) && io(t, i, r, u)),
              (Ml = !1);
            var f = t.memoizedState;
            (i.state = f),
              Vl(t, r, i, a),
              (s = t.memoizedState),
              o !== r || f !== s || La.current || Ml
                ? ("function" === typeof c &&
                    (no(t, n, c, r), (s = t.memoizedState)),
                  (o = Ml || ao(t, n, o, r, f, s, u))
                    ? (d ||
                        ("function" !== typeof i.UNSAFE_componentWillMount &&
                          "function" !== typeof i.componentWillMount) ||
                        ("function" === typeof i.componentWillMount &&
                          i.componentWillMount(),
                        "function" === typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      "function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (i.props = r),
                  (i.state = s),
                  (i.context = u),
                  (r = o))
                : ("function" === typeof i.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (i = t.stateNode),
              Dl(e, t),
              (o = t.memoizedProps),
              (u = t.type === t.elementType ? o : to(t.type, o)),
              (i.props = u),
              (d = t.pendingProps),
              (f = i.context),
              "object" === typeof (s = n.contextType) && null !== s
                ? (s = Tl(s))
                : (s = Ra(t, (s = Aa(n) ? Ta : Pa.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof i.getSnapshotBeforeUpdate) ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((o !== d || f !== s) && io(t, i, r, s)),
              (Ml = !1),
              (f = t.memoizedState),
              (i.state = f),
              Vl(t, r, i, a);
            var h = t.memoizedState;
            o !== d || f !== h || La.current || Ml
              ? ("function" === typeof p &&
                  (no(t, n, p, r), (h = t.memoizedState)),
                (u = Ml || ao(t, n, u, r, f, h, s) || !1)
                  ? (c ||
                      ("function" !== typeof i.UNSAFE_componentWillUpdate &&
                        "function" !== typeof i.componentWillUpdate) ||
                      ("function" === typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, h, s),
                      "function" === typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, h, s)),
                    "function" === typeof i.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof i.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof i.componentDidUpdate ||
                      (o === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof i.getSnapshotBeforeUpdate ||
                      (o === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (i.props = r),
                (i.state = h),
                (i.context = s),
                (r = u))
              : ("function" !== typeof i.componentDidUpdate ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof i.getSnapshotBeforeUpdate ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Po(e, t, n, r, l, a);
        }
        function Po(e, t, n, r, a, l) {
          Co(e, t);
          var i = 0 !== (128 & t.flags);
          if (!r && !i) return a && Da(t, n, !1), Ho(e, t, l);
          (r = t.stateNode), (yo.current = t);
          var o =
            i && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = xl(t, e.child, null, l)),
                (t.child = xl(t, null, o, l)))
              : xo(e, t, o, l),
            (t.memoizedState = r.state),
            a && Da(t, n, !0),
            t.child
          );
        }
        function Lo(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Oa(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Oa(0, t.context, !1),
            ql(e, t.containerInfo);
        }
        function To(e, t, n, r, a) {
          return pl(), hl(a), (t.flags |= 256), xo(e, t, n, r), t.child;
        }
        var Ro,
          Ao,
          zo,
          Oo,
          Mo = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Io(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Do(e, t, n) {
          var r,
            a = t.pendingProps,
            i = $l.current,
            o = !1,
            s = 0 !== (128 & t.flags);
          if (
            ((r = s) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
            r
              ? ((o = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (i |= 1),
            Ea($l, 1 & i),
            null === e)
          )
            return (
              ul(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((s = a.children),
                  (e = a.fallback),
                  o
                    ? ((a = t.mode),
                      (o = t.child),
                      (s = { mode: "hidden", children: s }),
                      0 === (1 & a) && null !== o
                        ? ((o.childLanes = 0), (o.pendingProps = s))
                        : (o = Iu(s, a, 0, null)),
                      (e = Mu(e, a, n, null)),
                      (o.return = t),
                      (e.return = t),
                      (o.sibling = e),
                      (t.child = o),
                      (t.child.memoizedState = Io(n)),
                      (t.memoizedState = Mo),
                      e)
                    : Fo(t, s))
            );
          if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
            return (function (e, t, n, r, a, i, o) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Bo(e, t, o, (r = uo(Error(l(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((i = r.fallback),
                    (a = t.mode),
                    (r = Iu(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null
                    )),
                    ((i = Mu(i, a, o, null)).flags |= 2),
                    (r.return = t),
                    (i.return = t),
                    (r.sibling = i),
                    (t.child = r),
                    0 !== (1 & t.mode) && xl(t, e.child, null, o),
                    (t.child.memoizedState = Io(o)),
                    (t.memoizedState = Mo),
                    i);
              if (0 === (1 & t.mode)) return Bo(e, t, o, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var s = r.dgst;
                return (
                  (r = s), Bo(e, t, o, (r = uo((i = Error(l(419))), r, void 0)))
                );
              }
              if (((s = 0 !== (o & e.childLanes)), bo || s)) {
                if (null !== (r = Ls)) {
                  switch (o & -o) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | o)) ? 0 : a) &&
                    a !== i.retryLane &&
                    ((i.retryLane = a), Ol(e, a), nu(r, e, a, -1));
                }
                return mu(), Bo(e, t, o, (r = uo(Error(l(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Nu.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = i.treeContext),
                  (rl = ua(a.nextSibling)),
                  (nl = t),
                  (al = !0),
                  (ll = null),
                  null !== e &&
                    ((Ya[Ka++] = Xa),
                    (Ya[Ka++] = Ja),
                    (Ya[Ka++] = qa),
                    (Xa = e.id),
                    (Ja = e.overflow),
                    (qa = t)),
                  (t = Fo(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, s, a, r, i, n);
          if (o) {
            (o = a.fallback), (s = t.mode), (r = (i = e.child).sibling);
            var u = { mode: "hidden", children: a.children };
            return (
              0 === (1 & s) && t.child !== i
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = u),
                  (t.deletions = null))
                : ((a = zu(i, u)).subtreeFlags = 14680064 & i.subtreeFlags),
              null !== r
                ? (o = zu(r, o))
                : ((o = Mu(o, s, n, null)).flags |= 2),
              (o.return = t),
              (a.return = t),
              (a.sibling = o),
              (t.child = a),
              (a = o),
              (o = t.child),
              (s =
                null === (s = e.child.memoizedState)
                  ? Io(n)
                  : {
                      baseLanes: s.baseLanes | n,
                      cachePool: null,
                      transitions: s.transitions,
                    }),
              (o.memoizedState = s),
              (o.childLanes = e.childLanes & ~n),
              (t.memoizedState = Mo),
              a
            );
          }
          return (
            (e = (o = e.child).sibling),
            (a = zu(o, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Fo(e, t) {
          return (
            ((t = Iu(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Bo(e, t, n, r) {
          return (
            null !== r && hl(r),
            xl(t, e.child, null, n),
            ((e = Fo(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function _o(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Pl(e.return, t, n);
        }
        function Uo(e, t, n, r, a) {
          var l = e.memoizedState;
          null === l
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((l.isBackwards = t),
              (l.rendering = null),
              (l.renderingStartTime = 0),
              (l.last = r),
              (l.tail = n),
              (l.tailMode = a));
        }
        function Vo(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            l = r.tail;
          if ((xo(e, t, r.children, n), 0 !== (2 & (r = $l.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && _o(e, n, t);
                else if (19 === e.tag) _o(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Ea($l, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === ei(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Uo(t, !1, a, n, l);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === ei(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Uo(t, !0, n, null, l);
                break;
              case "together":
                Uo(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Wo(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Ho(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Is |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(l(153));
          if (null !== t.child) {
            for (
              n = zu((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = zu(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Qo(e, t) {
          if (!al)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Go(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Yo(e, t, n) {
          var r = t.pendingProps;
          switch ((tl(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Go(t), null;
            case 1:
            case 17:
              return Aa(t.type) && za(), Go(t), null;
            case 3:
              return (
                (r = t.stateNode),
                Xl(),
                Ca(La),
                Ca(Pa),
                ni(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (dl(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== ll && (iu(ll), (ll = null)))),
                Ao(e, t),
                Go(t),
                null
              );
            case 5:
              Zl(t);
              var a = Kl(Yl.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                zo(e, t, n, r, a),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(l(166));
                  return Go(t), null;
                }
                if (((e = Kl(Ql.current)), dl(t))) {
                  (r = t.stateNode), (n = t.type);
                  var i = t.memoizedProps;
                  switch (
                    ((r[fa] = t), (r[pa] = i), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Br("cancel", r), Br("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Br("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Mr.length; a++) Br(Mr[a], r);
                      break;
                    case "source":
                      Br("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Br("error", r), Br("load", r);
                      break;
                    case "details":
                      Br("toggle", r);
                      break;
                    case "input":
                      X(r, i), Br("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!i.multiple }),
                        Br("invalid", r);
                      break;
                    case "textarea":
                      ae(r, i), Br("invalid", r);
                  }
                  for (var s in (ye(n, i), (a = null), i))
                    if (i.hasOwnProperty(s)) {
                      var u = i[s];
                      "children" === s
                        ? "string" === typeof u
                          ? r.textContent !== u &&
                            (!0 !== i.suppressHydrationWarning &&
                              Zr(r.textContent, u, e),
                            (a = ["children", u]))
                          : "number" === typeof u &&
                            r.textContent !== "" + u &&
                            (!0 !== i.suppressHydrationWarning &&
                              Zr(r.textContent, u, e),
                            (a = ["children", "" + u]))
                        : o.hasOwnProperty(s) &&
                          null != u &&
                          "onScroll" === s &&
                          Br("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      G(r), $(r, i, !0);
                      break;
                    case "textarea":
                      G(r), ie(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof i.onClick && (r.onclick = $r);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (s = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = oe(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = s.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = s.createElement(n, { is: r.is }))
                        : ((e = s.createElement(n)),
                          "select" === n &&
                            ((s = e),
                            r.multiple
                              ? (s.multiple = !0)
                              : r.size && (s.size = r.size)))
                      : (e = s.createElementNS(e, n)),
                    (e[fa] = t),
                    (e[pa] = r),
                    Ro(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((s = be(n, r)), n)) {
                      case "dialog":
                        Br("cancel", e), Br("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Br("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Mr.length; a++) Br(Mr[a], e);
                        a = r;
                        break;
                      case "source":
                        Br("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Br("error", e), Br("load", e), (a = r);
                        break;
                      case "details":
                        Br("toggle", e), (a = r);
                        break;
                      case "input":
                        X(e, r), (a = q(e, r)), Br("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = D({}, r, { value: void 0 })),
                          Br("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Br("invalid", e);
                    }
                    for (i in (ye(n, a), (u = a)))
                      if (u.hasOwnProperty(i)) {
                        var c = u[i];
                        "style" === i
                          ? ge(e, c)
                          : "dangerouslySetInnerHTML" === i
                          ? null != (c = c ? c.__html : void 0) && de(e, c)
                          : "children" === i
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && fe(e, c)
                            : "number" === typeof c && fe(e, "" + c)
                          : "suppressContentEditableWarning" !== i &&
                            "suppressHydrationWarning" !== i &&
                            "autoFocus" !== i &&
                            (o.hasOwnProperty(i)
                              ? null != c && "onScroll" === i && Br("scroll", e)
                              : null != c && b(e, i, c, s));
                      }
                    switch (n) {
                      case "input":
                        G(e), $(e, r, !1);
                        break;
                      case "textarea":
                        G(e), ie(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + H(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (i = r.value)
                            ? ne(e, !!r.multiple, i, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = $r);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Go(t), null;
            case 6:
              if (e && null != t.stateNode) Oo(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(l(166));
                if (((n = Kl(Yl.current)), Kl(Ql.current), dl(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[fa] = t),
                    (i = r.nodeValue !== n) && null !== (e = nl))
                  )
                    switch (e.tag) {
                      case 3:
                        Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  i && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[fa] = t),
                    (t.stateNode = r);
              }
              return Go(t), null;
            case 13:
              if (
                (Ca($l),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  al &&
                  null !== rl &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  fl(), pl(), (t.flags |= 98560), (i = !1);
                else if (((i = dl(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(l(318));
                    if (
                      !(i =
                        null !== (i = t.memoizedState) ? i.dehydrated : null)
                    )
                      throw Error(l(317));
                    i[fa] = t;
                  } else
                    pl(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Go(t), (i = !1);
                } else null !== ll && (iu(ll), (ll = null)), (i = !0);
                if (!i) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & $l.current)
                        ? 0 === Os && (Os = 3)
                        : mu())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Go(t),
                  null);
            case 4:
              return (
                Xl(),
                Ao(e, t),
                null === e && Vr(t.stateNode.containerInfo),
                Go(t),
                null
              );
            case 10:
              return Nl(t.type._context), Go(t), null;
            case 19:
              if ((Ca($l), null === (i = t.memoizedState))) return Go(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (s = i.rendering)))
                if (r) Qo(i, !1);
                else {
                  if (0 !== Os || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = ei(e))) {
                        for (
                          t.flags |= 128,
                            Qo(i, !1),
                            null !== (r = s.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((i = n).flags &= 14680066),
                            null === (s = i.alternate)
                              ? ((i.childLanes = 0),
                                (i.lanes = e),
                                (i.child = null),
                                (i.subtreeFlags = 0),
                                (i.memoizedProps = null),
                                (i.memoizedState = null),
                                (i.updateQueue = null),
                                (i.dependencies = null),
                                (i.stateNode = null))
                              : ((i.childLanes = s.childLanes),
                                (i.lanes = s.lanes),
                                (i.child = s.child),
                                (i.subtreeFlags = 0),
                                (i.deletions = null),
                                (i.memoizedProps = s.memoizedProps),
                                (i.memoizedState = s.memoizedState),
                                (i.updateQueue = s.updateQueue),
                                (i.type = s.type),
                                (e = s.dependencies),
                                (i.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Ea($l, (1 & $l.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail &&
                    Je() > Vs &&
                    ((t.flags |= 128),
                    (r = !0),
                    Qo(i, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = ei(s))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Qo(i, !0),
                      null === i.tail &&
                        "hidden" === i.tailMode &&
                        !s.alternate &&
                        !al)
                    )
                      return Go(t), null;
                  } else
                    2 * Je() - i.renderingStartTime > Vs &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Qo(i, !1),
                      (t.lanes = 4194304));
                i.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (n = i.last) ? (n.sibling = s) : (t.child = s),
                    (i.last = s));
              }
              return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Je()),
                  (t.sibling = null),
                  (n = $l.current),
                  Ea($l, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Go(t), null);
            case 22:
            case 23:
              return (
                du(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & As) &&
                    (Go(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Go(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(l(156, t.tag));
        }
        function Ko(e, t) {
          switch ((tl(t), t.tag)) {
            case 1:
              return (
                Aa(t.type) && za(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                Xl(),
                Ca(La),
                Ca(Pa),
                ni(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return Zl(t), null;
            case 13:
              if (
                (Ca($l),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(l(340));
                pl();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Ca($l), null;
            case 4:
              return Xl(), null;
            case 10:
              return Nl(t.type._context), null;
            case 22:
            case 23:
              return du(), null;
            default:
              return null;
          }
        }
        (Ro = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Ao = function () {}),
          (zo = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), Kl(Ql.current);
              var l,
                i = null;
              switch (n) {
                case "input":
                  (a = q(e, a)), (r = q(e, r)), (i = []);
                  break;
                case "select":
                  (a = D({}, a, { value: void 0 })),
                    (r = D({}, r, { value: void 0 })),
                    (i = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (i = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = $r);
              }
              for (c in (ye(n, r), (n = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ("style" === c) {
                    var s = a[c];
                    for (l in s)
                      s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (o.hasOwnProperty(c)
                        ? i || (i = [])
                        : (i = i || []).push(c, null));
              for (c in r) {
                var u = r[c];
                if (
                  ((s = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && u !== s && (null != u || null != s))
                )
                  if ("style" === c)
                    if (s) {
                      for (l in s)
                        !s.hasOwnProperty(l) ||
                          (u && u.hasOwnProperty(l)) ||
                          (n || (n = {}), (n[l] = ""));
                      for (l in u)
                        u.hasOwnProperty(l) &&
                          s[l] !== u[l] &&
                          (n || (n = {}), (n[l] = u[l]));
                    } else n || (i || (i = []), i.push(c, n)), (n = u);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((u = u ? u.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != u && s !== u && (i = i || []).push(c, u))
                      : "children" === c
                      ? ("string" !== typeof u && "number" !== typeof u) ||
                        (i = i || []).push(c, "" + u)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (o.hasOwnProperty(c)
                          ? (null != u && "onScroll" === c && Br("scroll", e),
                            i || s === u || (i = []))
                          : (i = i || []).push(c, u));
              }
              n && (i = i || []).push("style", n);
              var c = i;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Oo = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var qo = !1,
          Xo = !1,
          Jo = "function" === typeof WeakSet ? WeakSet : Set,
          Zo = null;
        function $o(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Su(e, t, r);
              }
            else n.current = null;
        }
        function es(e, t, n) {
          try {
            n();
          } catch (r) {
            Su(e, t, r);
          }
        }
        var ts = !1;
        function ns(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var l = a.destroy;
                (a.destroy = void 0), void 0 !== l && es(t, n, l);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function rs(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function as(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function ls(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), ls(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[fa],
              delete t[pa],
              delete t[ma],
              delete t[ga],
              delete t[va]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function is(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function os(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || is(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function ss(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = $r));
          else if (4 !== r && null !== (e = e.child))
            for (ss(e, t, n), e = e.sibling; null !== e; )
              ss(e, t, n), (e = e.sibling);
        }
        function us(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (us(e, t, n), e = e.sibling; null !== e; )
              us(e, t, n), (e = e.sibling);
        }
        var cs = null,
          ds = !1;
        function fs(e, t, n) {
          for (n = n.child; null !== n; ) ps(e, t, n), (n = n.sibling);
        }
        function ps(e, t, n) {
          if (lt && "function" === typeof lt.onCommitFiberUnmount)
            try {
              lt.onCommitFiberUnmount(at, n);
            } catch (o) {}
          switch (n.tag) {
            case 5:
              Xo || $o(n, t);
            case 6:
              var r = cs,
                a = ds;
              (cs = null),
                fs(e, t, n),
                (ds = a),
                null !== (cs = r) &&
                  (ds
                    ? ((e = cs),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : cs.removeChild(n.stateNode));
              break;
            case 18:
              null !== cs &&
                (ds
                  ? ((e = cs),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? sa(e.parentNode, n)
                      : 1 === e.nodeType && sa(e, n),
                    Vt(e))
                  : sa(cs, n.stateNode));
              break;
            case 4:
              (r = cs),
                (a = ds),
                (cs = n.stateNode.containerInfo),
                (ds = !0),
                fs(e, t, n),
                (cs = r),
                (ds = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Xo &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var l = a,
                    i = l.destroy;
                  (l = l.tag),
                    void 0 !== i &&
                      (0 !== (2 & l) || 0 !== (4 & l)) &&
                      es(n, t, i),
                    (a = a.next);
                } while (a !== r);
              }
              fs(e, t, n);
              break;
            case 1:
              if (
                !Xo &&
                ($o(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (o) {
                  Su(n, t, o);
                }
              fs(e, t, n);
              break;
            case 21:
              fs(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Xo = (r = Xo) || null !== n.memoizedState),
                  fs(e, t, n),
                  (Xo = r))
                : fs(e, t, n);
              break;
            default:
              fs(e, t, n);
          }
        }
        function hs(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Jo()),
              t.forEach(function (t) {
                var r = Pu.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function ms(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var i = e,
                  o = t,
                  s = o;
                e: for (; null !== s; ) {
                  switch (s.tag) {
                    case 5:
                      (cs = s.stateNode), (ds = !1);
                      break e;
                    case 3:
                    case 4:
                      (cs = s.stateNode.containerInfo), (ds = !0);
                      break e;
                  }
                  s = s.return;
                }
                if (null === cs) throw Error(l(160));
                ps(i, o, a), (cs = null), (ds = !1);
                var u = a.alternate;
                null !== u && (u.return = null), (a.return = null);
              } catch (c) {
                Su(a, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) gs(t, e), (t = t.sibling);
        }
        function gs(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((ms(t, e), vs(e), 4 & r)) {
                try {
                  ns(3, e, e.return), rs(3, e);
                } catch (g) {
                  Su(e, e.return, g);
                }
                try {
                  ns(5, e, e.return);
                } catch (g) {
                  Su(e, e.return, g);
                }
              }
              break;
            case 1:
              ms(t, e), vs(e), 512 & r && null !== n && $o(n, n.return);
              break;
            case 5:
              if (
                (ms(t, e),
                vs(e),
                512 & r && null !== n && $o(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  fe(a, "");
                } catch (g) {
                  Su(e, e.return, g);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var i = e.memoizedProps,
                  o = null !== n ? n.memoizedProps : i,
                  s = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    "input" === s &&
                      "radio" === i.type &&
                      null != i.name &&
                      J(a, i),
                      be(s, o);
                    var c = be(s, i);
                    for (o = 0; o < u.length; o += 2) {
                      var d = u[o],
                        f = u[o + 1];
                      "style" === d
                        ? ge(a, f)
                        : "dangerouslySetInnerHTML" === d
                        ? de(a, f)
                        : "children" === d
                        ? fe(a, f)
                        : b(a, d, f, c);
                    }
                    switch (s) {
                      case "input":
                        Z(a, i);
                        break;
                      case "textarea":
                        le(a, i);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!i.multiple;
                        var h = i.value;
                        null != h
                          ? ne(a, !!i.multiple, h, !1)
                          : p !== !!i.multiple &&
                            (null != i.defaultValue
                              ? ne(a, !!i.multiple, i.defaultValue, !0)
                              : ne(a, !!i.multiple, i.multiple ? [] : "", !1));
                    }
                    a[pa] = i;
                  } catch (g) {
                    Su(e, e.return, g);
                  }
              }
              break;
            case 6:
              if ((ms(t, e), vs(e), 4 & r)) {
                if (null === e.stateNode) throw Error(l(162));
                (a = e.stateNode), (i = e.memoizedProps);
                try {
                  a.nodeValue = i;
                } catch (g) {
                  Su(e, e.return, g);
                }
              }
              break;
            case 3:
              if (
                (ms(t, e),
                vs(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Vt(t.containerInfo);
                } catch (g) {
                  Su(e, e.return, g);
                }
              break;
            case 4:
            default:
              ms(t, e), vs(e);
              break;
            case 13:
              ms(t, e),
                vs(e),
                8192 & (a = e.child).flags &&
                  ((i = null !== a.memoizedState),
                  (a.stateNode.isHidden = i),
                  !i ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Us = Je())),
                4 & r && hs(e);
              break;
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Xo = (c = Xo) || d), ms(t, e), (Xo = c))
                  : ms(t, e),
                vs(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !d && 0 !== (1 & e.mode))
                )
                  for (Zo = e, d = e.child; null !== d; ) {
                    for (f = Zo = d; null !== Zo; ) {
                      switch (((h = (p = Zo).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          ns(4, p, p.return);
                          break;
                        case 1:
                          $o(p, p.return);
                          var m = p.stateNode;
                          if ("function" === typeof m.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount();
                            } catch (g) {
                              Su(r, n, g);
                            }
                          }
                          break;
                        case 5:
                          $o(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            ws(f);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Zo = h)) : ws(f);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, f = e; ; ) {
                  if (5 === f.tag) {
                    if (null === d) {
                      d = f;
                      try {
                        (a = f.stateNode),
                          c
                            ? "function" === typeof (i = a.style).setProperty
                              ? i.setProperty("display", "none", "important")
                              : (i.display = "none")
                            : ((s = f.stateNode),
                              (o =
                                void 0 !== (u = f.memoizedProps.style) &&
                                null !== u &&
                                u.hasOwnProperty("display")
                                  ? u.display
                                  : null),
                              (s.style.display = me("display", o)));
                      } catch (g) {
                        Su(e, e.return, g);
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === d)
                      try {
                        f.stateNode.nodeValue = c ? "" : f.memoizedProps;
                      } catch (g) {
                        Su(e, e.return, g);
                      }
                  } else if (
                    ((22 !== f.tag && 23 !== f.tag) ||
                      null === f.memoizedState ||
                      f === e) &&
                    null !== f.child
                  ) {
                    (f.child.return = f), (f = f.child);
                    continue;
                  }
                  if (f === e) break e;
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === e) break e;
                    d === f && (d = null), (f = f.return);
                  }
                  d === f && (d = null),
                    (f.sibling.return = f.return),
                    (f = f.sibling);
                }
              }
              break;
            case 19:
              ms(t, e), vs(e), 4 & r && hs(e);
            case 21:
          }
        }
        function vs(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (is(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(l(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (fe(a, ""), (r.flags &= -33)),
                    us(e, os(e), a);
                  break;
                case 3:
                case 4:
                  var i = r.stateNode.containerInfo;
                  ss(e, os(e), i);
                  break;
                default:
                  throw Error(l(161));
              }
            } catch (o) {
              Su(e, e.return, o);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function ys(e, t, n) {
          (Zo = e), bs(e, t, n);
        }
        function bs(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Zo; ) {
            var a = Zo,
              l = a.child;
            if (22 === a.tag && r) {
              var i = null !== a.memoizedState || qo;
              if (!i) {
                var o = a.alternate,
                  s = (null !== o && null !== o.memoizedState) || Xo;
                o = qo;
                var u = Xo;
                if (((qo = i), (Xo = s) && !u))
                  for (Zo = a; null !== Zo; )
                    (s = (i = Zo).child),
                      22 === i.tag && null !== i.memoizedState
                        ? ks(a)
                        : null !== s
                        ? ((s.return = i), (Zo = s))
                        : ks(a);
                for (; null !== l; ) (Zo = l), bs(l, t, n), (l = l.sibling);
                (Zo = a), (qo = o), (Xo = u);
              }
              xs(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== l
                ? ((l.return = a), (Zo = l))
                : xs(e);
          }
        }
        function xs(e) {
          for (; null !== Zo; ) {
            var t = Zo;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xo || rs(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Xo)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : to(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var i = t.updateQueue;
                      null !== i && Wl(t, i, r);
                      break;
                    case 3:
                      var o = t.updateQueue;
                      if (null !== o) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Wl(t, o, n);
                      }
                      break;
                    case 5:
                      var s = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = s;
                        var u = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            u.autoFocus && n.focus();
                            break;
                          case "img":
                            u.src && (n.src = u.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var d = c.memoizedState;
                          if (null !== d) {
                            var f = d.dehydrated;
                            null !== f && Vt(f);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(l(163));
                  }
                Xo || (512 & t.flags && as(t));
              } catch (p) {
                Su(t, t.return, p);
              }
            }
            if (t === e) {
              Zo = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Zo = n);
              break;
            }
            Zo = t.return;
          }
        }
        function ws(e) {
          for (; null !== Zo; ) {
            var t = Zo;
            if (t === e) {
              Zo = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Zo = n);
              break;
            }
            Zo = t.return;
          }
        }
        function ks(e) {
          for (; null !== Zo; ) {
            var t = Zo;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    rs(4, t);
                  } catch (s) {
                    Su(t, n, s);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (s) {
                      Su(t, a, s);
                    }
                  }
                  var l = t.return;
                  try {
                    as(t);
                  } catch (s) {
                    Su(t, l, s);
                  }
                  break;
                case 5:
                  var i = t.return;
                  try {
                    as(t);
                  } catch (s) {
                    Su(t, i, s);
                  }
              }
            } catch (s) {
              Su(t, t.return, s);
            }
            if (t === e) {
              Zo = null;
              break;
            }
            var o = t.sibling;
            if (null !== o) {
              (o.return = t.return), (Zo = o);
              break;
            }
            Zo = t.return;
          }
        }
        var js,
          Ss = Math.ceil,
          Cs = x.ReactCurrentDispatcher,
          Es = x.ReactCurrentOwner,
          Ns = x.ReactCurrentBatchConfig,
          Ps = 0,
          Ls = null,
          Ts = null,
          Rs = 0,
          As = 0,
          zs = Sa(0),
          Os = 0,
          Ms = null,
          Is = 0,
          Ds = 0,
          Fs = 0,
          Bs = null,
          _s = null,
          Us = 0,
          Vs = 1 / 0,
          Ws = null,
          Hs = !1,
          Qs = null,
          Gs = null,
          Ys = !1,
          Ks = null,
          qs = 0,
          Xs = 0,
          Js = null,
          Zs = -1,
          $s = 0;
        function eu() {
          return 0 !== (6 & Ps) ? Je() : -1 !== Zs ? Zs : (Zs = Je());
        }
        function tu(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Ps) && 0 !== Rs
            ? Rs & -Rs
            : null !== ml.transition
            ? (0 === $s && ($s = mt()), $s)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Xt(e.type));
        }
        function nu(e, t, n, r) {
          if (50 < Xs) throw ((Xs = 0), (Js = null), Error(l(185)));
          vt(e, n, r),
            (0 !== (2 & Ps) && e === Ls) ||
              (e === Ls && (0 === (2 & Ps) && (Ds |= n), 4 === Os && ou(e, Rs)),
              ru(e, r),
              1 === n &&
                0 === Ps &&
                0 === (1 & t.mode) &&
                ((Vs = Je() + 500), Ba && Va()));
        }
        function ru(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                l = e.pendingLanes;
              0 < l;

            ) {
              var i = 31 - it(l),
                o = 1 << i,
                s = a[i];
              -1 === s
                ? (0 !== (o & n) && 0 === (o & r)) || (a[i] = pt(o, t))
                : s <= t && (e.expiredLanes |= o),
                (l &= ~o);
            }
          })(e, t);
          var r = ft(e, e === Ls ? Rs : 0);
          if (0 === r)
            null !== n && Ke(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ke(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Ba = !0), Ua(e);
                  })(su.bind(null, e))
                : Ua(su.bind(null, e)),
                ia(function () {
                  0 === (6 & Ps) && Va();
                }),
                (n = null);
            else {
              switch (xt(r)) {
                case 1:
                  n = $e;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Lu(n, au.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function au(e, t) {
          if (((Zs = -1), ($s = 0), 0 !== (6 & Ps))) throw Error(l(327));
          var n = e.callbackNode;
          if (ku() && e.callbackNode !== n) return null;
          var r = ft(e, e === Ls ? Rs : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = gu(e, r);
          else {
            t = r;
            var a = Ps;
            Ps |= 2;
            var i = hu();
            for (
              (Ls === e && Rs === t) ||
              ((Ws = null), (Vs = Je() + 500), fu(e, t));
              ;

            )
              try {
                yu();
                break;
              } catch (s) {
                pu(e, s);
              }
            El(),
              (Cs.current = i),
              (Ps = a),
              null !== Ts ? (t = 0) : ((Ls = null), (Rs = 0), (t = Os));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = ht(e)) && ((r = a), (t = lu(e, a))),
              1 === t)
            )
              throw ((n = Ms), fu(e, 0), ou(e, r), ru(e, Je()), n);
            if (6 === t) ou(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              l = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!or(l(), a)) return !1;
                            } catch (o) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = gu(e, r)) &&
                    0 !== (i = ht(e)) &&
                    ((r = i), (t = lu(e, i))),
                  1 === t))
              )
                throw ((n = Ms), fu(e, 0), ou(e, r), ru(e, Je()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(l(345));
                case 2:
                case 5:
                  wu(e, _s, Ws);
                  break;
                case 3:
                  if (
                    (ou(e, r),
                    (130023424 & r) === r && 10 < (t = Us + 500 - Je()))
                  ) {
                    if (0 !== ft(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      eu(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(wu.bind(null, e, _s, Ws), t);
                    break;
                  }
                  wu(e, _s, Ws);
                  break;
                case 4:
                  if ((ou(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var o = 31 - it(r);
                    (i = 1 << o), (o = t[o]) > a && (a = o), (r &= ~i);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Je() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * Ss(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(wu.bind(null, e, _s, Ws), r);
                    break;
                  }
                  wu(e, _s, Ws);
                  break;
                default:
                  throw Error(l(329));
              }
            }
          }
          return ru(e, Je()), e.callbackNode === n ? au.bind(null, e) : null;
        }
        function lu(e, t) {
          var n = Bs;
          return (
            e.current.memoizedState.isDehydrated && (fu(e, t).flags |= 256),
            2 !== (e = gu(e, t)) && ((t = _s), (_s = n), null !== t && iu(t)),
            e
          );
        }
        function iu(e) {
          null === _s ? (_s = e) : _s.push.apply(_s, e);
        }
        function ou(e, t) {
          for (
            t &= ~Fs,
              t &= ~Ds,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - it(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function su(e) {
          if (0 !== (6 & Ps)) throw Error(l(327));
          ku();
          var t = ft(e, 0);
          if (0 === (1 & t)) return ru(e, Je()), null;
          var n = gu(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = lu(e, r)));
          }
          if (1 === n) throw ((n = Ms), fu(e, 0), ou(e, t), ru(e, Je()), n);
          if (6 === n) throw Error(l(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            wu(e, _s, Ws),
            ru(e, Je()),
            null
          );
        }
        function uu(e, t) {
          var n = Ps;
          Ps |= 1;
          try {
            return e(t);
          } finally {
            0 === (Ps = n) && ((Vs = Je() + 500), Ba && Va());
          }
        }
        function cu(e) {
          null !== Ks && 0 === Ks.tag && 0 === (6 & Ps) && ku();
          var t = Ps;
          Ps |= 1;
          var n = Ns.transition,
            r = bt;
          try {
            if (((Ns.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Ns.transition = n), 0 === (6 & (Ps = t)) && Va();
          }
        }
        function du() {
          (As = zs.current), Ca(zs);
        }
        function fu(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Ts))
            for (n = Ts.return; null !== n; ) {
              var r = n;
              switch ((tl(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    za();
                  break;
                case 3:
                  Xl(), Ca(La), Ca(Pa), ni();
                  break;
                case 5:
                  Zl(r);
                  break;
                case 4:
                  Xl();
                  break;
                case 13:
                case 19:
                  Ca($l);
                  break;
                case 10:
                  Nl(r.type._context);
                  break;
                case 22:
                case 23:
                  du();
              }
              n = n.return;
            }
          if (
            ((Ls = e),
            (Ts = e = zu(e.current, null)),
            (Rs = As = t),
            (Os = 0),
            (Ms = null),
            (Fs = Ds = Is = 0),
            (_s = Bs = null),
            null !== Rl)
          ) {
            for (t = 0; t < Rl.length; t++)
              if (null !== (r = (n = Rl[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  l = n.pending;
                if (null !== l) {
                  var i = l.next;
                  (l.next = a), (r.next = i);
                }
                n.pending = r;
              }
            Rl = null;
          }
          return e;
        }
        function pu(e, t) {
          for (;;) {
            var n = Ts;
            try {
              if ((El(), (ri.current = Ji), ui)) {
                for (var r = ii.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                ui = !1;
              }
              if (
                ((li = 0),
                (si = oi = ii = null),
                (ci = !1),
                (di = 0),
                (Es.current = null),
                null === n || null === n.return)
              ) {
                (Os = 1), (Ms = t), (Ts = null);
                break;
              }
              e: {
                var i = e,
                  o = n.return,
                  s = n,
                  u = t;
                if (
                  ((t = Rs),
                  (s.flags |= 32768),
                  null !== u &&
                    "object" === typeof u &&
                    "function" === typeof u.then)
                ) {
                  var c = u,
                    d = s,
                    f = d.tag;
                  if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                    var p = d.alternate;
                    p
                      ? ((d.updateQueue = p.updateQueue),
                        (d.memoizedState = p.memoizedState),
                        (d.lanes = p.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var h = go(o);
                  if (null !== h) {
                    (h.flags &= -257),
                      vo(h, o, s, 0, t),
                      1 & h.mode && mo(i, c, t),
                      (u = c);
                    var m = (t = h).updateQueue;
                    if (null === m) {
                      var g = new Set();
                      g.add(u), (t.updateQueue = g);
                    } else m.add(u);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    mo(i, c, t), mu();
                    break e;
                  }
                  u = Error(l(426));
                } else if (al && 1 & s.mode) {
                  var v = go(o);
                  if (null !== v) {
                    0 === (65536 & v.flags) && (v.flags |= 256),
                      vo(v, o, s, 0, t),
                      hl(so(u, s));
                    break e;
                  }
                }
                (i = u = so(u, s)),
                  4 !== Os && (Os = 2),
                  null === Bs ? (Bs = [i]) : Bs.push(i),
                  (i = o);
                do {
                  switch (i.tag) {
                    case 3:
                      (i.flags |= 65536),
                        (t &= -t),
                        (i.lanes |= t),
                        Ul(i, po(0, u, t));
                      break e;
                    case 1:
                      s = u;
                      var y = i.type,
                        b = i.stateNode;
                      if (
                        0 === (128 & i.flags) &&
                        ("function" === typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === Gs || !Gs.has(b))))
                      ) {
                        (i.flags |= 65536),
                          (t &= -t),
                          (i.lanes |= t),
                          Ul(i, ho(i, s, t));
                        break e;
                      }
                  }
                  i = i.return;
                } while (null !== i);
              }
              xu(n);
            } catch (x) {
              (t = x), Ts === n && null !== n && (Ts = n = n.return);
              continue;
            }
            break;
          }
        }
        function hu() {
          var e = Cs.current;
          return (Cs.current = Ji), null === e ? Ji : e;
        }
        function mu() {
          (0 !== Os && 3 !== Os && 2 !== Os) || (Os = 4),
            null === Ls ||
              (0 === (268435455 & Is) && 0 === (268435455 & Ds)) ||
              ou(Ls, Rs);
        }
        function gu(e, t) {
          var n = Ps;
          Ps |= 2;
          var r = hu();
          for ((Ls === e && Rs === t) || ((Ws = null), fu(e, t)); ; )
            try {
              vu();
              break;
            } catch (a) {
              pu(e, a);
            }
          if ((El(), (Ps = n), (Cs.current = r), null !== Ts))
            throw Error(l(261));
          return (Ls = null), (Rs = 0), Os;
        }
        function vu() {
          for (; null !== Ts; ) bu(Ts);
        }
        function yu() {
          for (; null !== Ts && !qe(); ) bu(Ts);
        }
        function bu(e) {
          var t = js(e.alternate, e, As);
          (e.memoizedProps = e.pendingProps),
            null === t ? xu(e) : (Ts = t),
            (Es.current = null);
        }
        function xu(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Yo(n, t, As))) return void (Ts = n);
            } else {
              if (null !== (n = Ko(n, t)))
                return (n.flags &= 32767), void (Ts = n);
              if (null === e) return (Os = 6), void (Ts = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Ts = t);
            Ts = t = e;
          } while (null !== t);
          0 === Os && (Os = 5);
        }
        function wu(e, t, n) {
          var r = bt,
            a = Ns.transition;
          try {
            (Ns.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  ku();
                } while (null !== Ks);
                if (0 !== (6 & Ps)) throw Error(l(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(l(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var i = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - it(n),
                        l = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~l);
                    }
                  })(e, i),
                  e === Ls && ((Ts = Ls = null), (Rs = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Ys ||
                    ((Ys = !0),
                    Lu(tt, function () {
                      return ku(), null;
                    })),
                  (i = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || i)
                ) {
                  (i = Ns.transition), (Ns.transition = null);
                  var o = bt;
                  bt = 1;
                  var s = Ps;
                  (Ps |= 4),
                    (Es.current = null),
                    (function (e, t) {
                      if (((ea = Ht), pr((e = fr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                i = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, i.nodeType;
                              } catch (w) {
                                n = null;
                                break e;
                              }
                              var o = 0,
                                s = -1,
                                u = -1,
                                c = 0,
                                d = 0,
                                f = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  f !== n ||
                                    (0 !== a && 3 !== f.nodeType) ||
                                    (s = o + a),
                                    f !== i ||
                                      (0 !== r && 3 !== f.nodeType) ||
                                      (u = o + r),
                                    3 === f.nodeType &&
                                      (o += f.nodeValue.length),
                                    null !== (h = f.firstChild);

                                )
                                  (p = f), (f = h);
                                for (;;) {
                                  if (f === e) break t;
                                  if (
                                    (p === n && ++c === a && (s = o),
                                    p === i && ++d === r && (u = o),
                                    null !== (h = f.nextSibling))
                                  )
                                    break;
                                  p = (f = p).parentNode;
                                }
                                f = h;
                              }
                              n =
                                -1 === s || -1 === u
                                  ? null
                                  : { start: s, end: u };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Ht = !1,
                          Zo = t;
                        null !== Zo;

                      )
                        if (
                          ((e = (t = Zo).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Zo = e);
                        else
                          for (; null !== Zo; ) {
                            t = Zo;
                            try {
                              var m = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var g = m.memoizedProps,
                                        v = m.memoizedState,
                                        y = t.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? g
                                            : to(t.type, g),
                                          v
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var x = t.stateNode.containerInfo;
                                    1 === x.nodeType
                                      ? (x.textContent = "")
                                      : 9 === x.nodeType &&
                                        x.documentElement &&
                                        x.removeChild(x.documentElement);
                                    break;
                                  default:
                                    throw Error(l(163));
                                }
                            } catch (w) {
                              Su(t, t.return, w);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Zo = e);
                              break;
                            }
                            Zo = t.return;
                          }
                      (m = ts), (ts = !1);
                    })(e, n),
                    gs(n, e),
                    hr(ta),
                    (Ht = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    ys(n, e, a),
                    Xe(),
                    (Ps = s),
                    (bt = o),
                    (Ns.transition = i);
                } else e.current = n;
                if (
                  (Ys && ((Ys = !1), (Ks = e), (qs = a)),
                  (i = e.pendingLanes),
                  0 === i && (Gs = null),
                  (function (e) {
                    if (lt && "function" === typeof lt.onCommitFiberRoot)
                      try {
                        lt.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  ru(e, Je()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (a = t[n]),
                      r(a.value, { componentStack: a.stack, digest: a.digest });
                if (Hs) throw ((Hs = !1), (e = Qs), (Qs = null), e);
                0 !== (1 & qs) && 0 !== e.tag && ku(),
                  (i = e.pendingLanes),
                  0 !== (1 & i)
                    ? e === Js
                      ? Xs++
                      : ((Xs = 0), (Js = e))
                    : (Xs = 0),
                  Va();
              })(e, t, n, r);
          } finally {
            (Ns.transition = a), (bt = r);
          }
          return null;
        }
        function ku() {
          if (null !== Ks) {
            var e = xt(qs),
              t = Ns.transition,
              n = bt;
            try {
              if (((Ns.transition = null), (bt = 16 > e ? 16 : e), null === Ks))
                var r = !1;
              else {
                if (((e = Ks), (Ks = null), (qs = 0), 0 !== (6 & Ps)))
                  throw Error(l(331));
                var a = Ps;
                for (Ps |= 4, Zo = e.current; null !== Zo; ) {
                  var i = Zo,
                    o = i.child;
                  if (0 !== (16 & Zo.flags)) {
                    var s = i.deletions;
                    if (null !== s) {
                      for (var u = 0; u < s.length; u++) {
                        var c = s[u];
                        for (Zo = c; null !== Zo; ) {
                          var d = Zo;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ns(8, d, i);
                          }
                          var f = d.child;
                          if (null !== f) (f.return = d), (Zo = f);
                          else
                            for (; null !== Zo; ) {
                              var p = (d = Zo).sibling,
                                h = d.return;
                              if ((ls(d), d === c)) {
                                Zo = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Zo = p);
                                break;
                              }
                              Zo = h;
                            }
                        }
                      }
                      var m = i.alternate;
                      if (null !== m) {
                        var g = m.child;
                        if (null !== g) {
                          m.child = null;
                          do {
                            var v = g.sibling;
                            (g.sibling = null), (g = v);
                          } while (null !== g);
                        }
                      }
                      Zo = i;
                    }
                  }
                  if (0 !== (2064 & i.subtreeFlags) && null !== o)
                    (o.return = i), (Zo = o);
                  else
                    e: for (; null !== Zo; ) {
                      if (0 !== (2048 & (i = Zo).flags))
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ns(9, i, i.return);
                        }
                      var y = i.sibling;
                      if (null !== y) {
                        (y.return = i.return), (Zo = y);
                        break e;
                      }
                      Zo = i.return;
                    }
                }
                var b = e.current;
                for (Zo = b; null !== Zo; ) {
                  var x = (o = Zo).child;
                  if (0 !== (2064 & o.subtreeFlags) && null !== x)
                    (x.return = o), (Zo = x);
                  else
                    e: for (o = b; null !== Zo; ) {
                      if (0 !== (2048 & (s = Zo).flags))
                        try {
                          switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rs(9, s);
                          }
                        } catch (k) {
                          Su(s, s.return, k);
                        }
                      if (s === o) {
                        Zo = null;
                        break e;
                      }
                      var w = s.sibling;
                      if (null !== w) {
                        (w.return = s.return), (Zo = w);
                        break e;
                      }
                      Zo = s.return;
                    }
                }
                if (
                  ((Ps = a),
                  Va(),
                  lt && "function" === typeof lt.onPostCommitFiberRoot)
                )
                  try {
                    lt.onPostCommitFiberRoot(at, e);
                  } catch (k) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Ns.transition = t);
            }
          }
          return !1;
        }
        function ju(e, t, n) {
          (e = Bl(e, (t = po(0, (t = so(n, t)), 1)), 1)),
            (t = eu()),
            null !== e && (vt(e, 1, t), ru(e, t));
        }
        function Su(e, t, n) {
          if (3 === e.tag) ju(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                ju(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Gs || !Gs.has(r)))
                ) {
                  (t = Bl(t, (e = ho(t, (e = so(n, e)), 1)), 1)),
                    (e = eu()),
                    null !== t && (vt(t, 1, e), ru(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Cu(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = eu()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Ls === e &&
              (Rs & n) === n &&
              (4 === Os ||
              (3 === Os && (130023424 & Rs) === Rs && 500 > Je() - Us)
                ? fu(e, 0)
                : (Fs |= n)),
            ru(e, t);
        }
        function Eu(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = eu();
          null !== (e = Ol(e, t)) && (vt(e, t, n), ru(e, n));
        }
        function Nu(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Eu(e, n);
        }
        function Pu(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(l(314));
          }
          null !== r && r.delete(t), Eu(e, n);
        }
        function Lu(e, t) {
          return Ye(e, t);
        }
        function Tu(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Ru(e, t, n, r) {
          return new Tu(e, t, n, r);
        }
        function Au(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function zu(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Ru(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Ou(e, t, n, r, a, i) {
          var o = 2;
          if (((r = e), "function" === typeof e)) Au(e) && (o = 1);
          else if ("string" === typeof e) o = 5;
          else
            e: switch (e) {
              case j:
                return Mu(n.children, a, i, t);
              case S:
                (o = 8), (a |= 8);
                break;
              case C:
                return (
                  ((e = Ru(12, n, t, 2 | a)).elementType = C), (e.lanes = i), e
                );
              case L:
                return (
                  ((e = Ru(13, n, t, a)).elementType = L), (e.lanes = i), e
                );
              case T:
                return (
                  ((e = Ru(19, n, t, a)).elementType = T), (e.lanes = i), e
                );
              case z:
                return Iu(n, a, i, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case E:
                      o = 10;
                      break e;
                    case N:
                      o = 9;
                      break e;
                    case P:
                      o = 11;
                      break e;
                    case R:
                      o = 14;
                      break e;
                    case A:
                      (o = 16), (r = null);
                      break e;
                  }
                throw Error(l(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Ru(o, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = i),
            t
          );
        }
        function Mu(e, t, n, r) {
          return ((e = Ru(7, e, r, t)).lanes = n), e;
        }
        function Iu(e, t, n, r) {
          return (
            ((e = Ru(22, e, r, t)).elementType = z),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Du(e, t, n) {
          return ((e = Ru(6, e, null, t)).lanes = n), e;
        }
        function Fu(e, t, n) {
          return (
            ((t = Ru(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Bu(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = gt(0)),
            (this.expirationTimes = gt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = gt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function _u(e, t, n, r, a, l, i, o, s) {
          return (
            (e = new Bu(e, t, n, o, s)),
            1 === t ? ((t = 1), !0 === l && (t |= 8)) : (t = 0),
            (l = Ru(3, null, null, t)),
            (e.current = l),
            (l.stateNode = e),
            (l.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Il(l),
            e
          );
        }
        function Uu(e) {
          if (!e) return Na;
          e: {
            if (Ve((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(l(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Aa(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(l(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Aa(n)) return Ma(e, n, t);
          }
          return t;
        }
        function Vu(e, t, n, r, a, l, i, o, s) {
          return (
            ((e = _u(n, r, !0, e, 0, l, 0, o, s)).context = Uu(null)),
            (n = e.current),
            ((l = Fl((r = eu()), (a = tu(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Bl(n, l, a),
            (e.current.lanes = a),
            vt(e, a, r),
            ru(e, r),
            e
          );
        }
        function Wu(e, t, n, r) {
          var a = t.current,
            l = eu(),
            i = tu(a);
          return (
            (n = Uu(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Fl(l, i)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Bl(a, t, i)) && (nu(e, a, i, l), _l(e, a, i)),
            i
          );
        }
        function Hu(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Qu(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Gu(e, t) {
          Qu(e, t), (e = e.alternate) && Qu(e, t);
        }
        js = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || La.current) bo = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (bo = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Lo(t), pl();
                        break;
                      case 5:
                        Jl(t);
                        break;
                      case 1:
                        Aa(t.type) && Ia(t);
                        break;
                      case 4:
                        ql(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Ea(kl, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Ea($l, 1 & $l.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Do(e, t, n)
                            : (Ea($l, 1 & $l.current),
                              null !== (e = Ho(e, t, n)) ? e.sibling : null);
                        Ea($l, 1 & $l.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Vo(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Ea($l, $l.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), So(e, t, n);
                    }
                    return Ho(e, t, n);
                  })(e, t, n)
                );
              bo = 0 !== (131072 & e.flags);
            }
          else (bo = !1), al && 0 !== (1048576 & t.flags) && $a(t, Ga, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Wo(e, t), (e = t.pendingProps);
              var a = Ra(t, Pa.current);
              Ll(t, n), (a = mi(null, t, r, e, a, n));
              var i = gi();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Aa(r) ? ((i = !0), Ia(t)) : (i = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Il(t),
                    (a.updater = ro),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    oo(t, r, e, n),
                    (t = Po(null, t, r, !0, i, n)))
                  : ((t.tag = 0),
                    al && i && el(t),
                    xo(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Wo(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Au(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === P) return 11;
                        if (e === R) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = to(r, e)),
                  a)
                ) {
                  case 0:
                    t = Eo(null, t, r, e, n);
                    break e;
                  case 1:
                    t = No(null, t, r, e, n);
                    break e;
                  case 11:
                    t = wo(null, t, r, e, n);
                    break e;
                  case 14:
                    t = ko(null, t, r, to(r.type, e), n);
                    break e;
                }
                throw Error(l(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Eo(e, t, r, (a = t.elementType === r ? a : to(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                No(e, t, r, (a = t.elementType === r ? a : to(r, a)), n)
              );
            case 3:
              e: {
                if ((Lo(t), null === e)) throw Error(l(387));
                (r = t.pendingProps),
                  (a = (i = t.memoizedState).element),
                  Dl(e, t),
                  Vl(t, r, null, n);
                var o = t.memoizedState;
                if (((r = o.element), i.isDehydrated)) {
                  if (
                    ((i = {
                      element: r,
                      isDehydrated: !1,
                      cache: o.cache,
                      pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                      transitions: o.transitions,
                    }),
                    (t.updateQueue.baseState = i),
                    (t.memoizedState = i),
                    256 & t.flags)
                  ) {
                    t = To(e, t, r, n, (a = so(Error(l(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = To(e, t, r, n, (a = so(Error(l(424)), t)));
                    break e;
                  }
                  for (
                    rl = ua(t.stateNode.containerInfo.firstChild),
                      nl = t,
                      al = !0,
                      ll = null,
                      n = wl(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((pl(), r === a)) {
                    t = Ho(e, t, n);
                    break e;
                  }
                  xo(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                Jl(t),
                null === e && ul(t),
                (r = t.type),
                (a = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (o = a.children),
                na(r, a)
                  ? (o = null)
                  : null !== i && na(r, i) && (t.flags |= 32),
                Co(e, t),
                xo(e, t, o, n),
                t.child
              );
            case 6:
              return null === e && ul(t), null;
            case 13:
              return Do(e, t, n);
            case 4:
              return (
                ql(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = xl(t, null, r, n)) : xo(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                wo(e, t, r, (a = t.elementType === r ? a : to(r, a)), n)
              );
            case 7:
              return xo(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return xo(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (i = t.memoizedProps),
                  (o = a.value),
                  Ea(kl, r._currentValue),
                  (r._currentValue = o),
                  null !== i)
                )
                  if (or(i.value, o)) {
                    if (i.children === a.children && !La.current) {
                      t = Ho(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (i = t.child) && (i.return = t);
                      null !== i;

                    ) {
                      var s = i.dependencies;
                      if (null !== s) {
                        o = i.child;
                        for (var u = s.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === i.tag) {
                              (u = Fl(-1, n & -n)).tag = 2;
                              var c = i.updateQueue;
                              if (null !== c) {
                                var d = (c = c.shared).pending;
                                null === d
                                  ? (u.next = u)
                                  : ((u.next = d.next), (d.next = u)),
                                  (c.pending = u);
                              }
                            }
                            (i.lanes |= n),
                              null !== (u = i.alternate) && (u.lanes |= n),
                              Pl(i.return, n, t),
                              (s.lanes |= n);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === i.tag)
                        o = i.type === t.type ? null : i.child;
                      else if (18 === i.tag) {
                        if (null === (o = i.return)) throw Error(l(341));
                        (o.lanes |= n),
                          null !== (s = o.alternate) && (s.lanes |= n),
                          Pl(o, n, t),
                          (o = i.sibling);
                      } else o = i.child;
                      if (null !== o) o.return = i;
                      else
                        for (o = i; null !== o; ) {
                          if (o === t) {
                            o = null;
                            break;
                          }
                          if (null !== (i = o.sibling)) {
                            (i.return = o.return), (o = i);
                            break;
                          }
                          o = o.return;
                        }
                      i = o;
                    }
                xo(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                Ll(t, n),
                (r = r((a = Tl(a)))),
                (t.flags |= 1),
                xo(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = to((r = t.type), t.pendingProps)),
                ko(e, t, r, (a = to(r.type, a)), n)
              );
            case 15:
              return jo(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : to(r, a)),
                Wo(e, t),
                (t.tag = 1),
                Aa(r) ? ((e = !0), Ia(t)) : (e = !1),
                Ll(t, n),
                lo(t, r, a),
                oo(t, r, a, n),
                Po(null, t, r, !0, e, n)
              );
            case 19:
              return Vo(e, t, n);
            case 22:
              return So(e, t, n);
          }
          throw Error(l(156, t.tag));
        };
        var Yu =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Ku(e) {
          this._internalRoot = e;
        }
        function qu(e) {
          this._internalRoot = e;
        }
        function Xu(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Ju(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Zu() {}
        function $u(e, t, n, r, a) {
          var l = n._reactRootContainer;
          if (l) {
            var i = l;
            if ("function" === typeof a) {
              var o = a;
              a = function () {
                var e = Hu(i);
                o.call(e);
              };
            }
            Wu(t, i, e, a);
          } else
            i = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var l = r;
                  r = function () {
                    var e = Hu(i);
                    l.call(e);
                  };
                }
                var i = Vu(t, r, e, 0, null, !1, 0, "", Zu);
                return (
                  (e._reactRootContainer = i),
                  (e[ha] = i.current),
                  Vr(8 === e.nodeType ? e.parentNode : e),
                  cu(),
                  i
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var o = r;
                r = function () {
                  var e = Hu(s);
                  o.call(e);
                };
              }
              var s = _u(e, 0, !1, null, 0, !1, 0, "", Zu);
              return (
                (e._reactRootContainer = s),
                (e[ha] = s.current),
                Vr(8 === e.nodeType ? e.parentNode : e),
                cu(function () {
                  Wu(t, s, n, r);
                }),
                s
              );
            })(n, t, e, a, r);
          return Hu(i);
        }
        (qu.prototype.render = Ku.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(l(409));
            Wu(e, t, null, null);
          }),
          (qu.prototype.unmount = Ku.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                cu(function () {
                  Wu(null, e, null, null);
                }),
                  (t[ha] = null);
              }
            }),
          (qu.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = St();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < zt.length && 0 !== t && t < zt[n].priority;
                n++
              );
              zt.splice(n, 0, e), 0 === n && Dt(e);
            }
          }),
          (wt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes);
                  0 !== n &&
                    (yt(t, 1 | n),
                    ru(t, Je()),
                    0 === (6 & Ps) && ((Vs = Je() + 500), Va()));
                }
                break;
              case 13:
                cu(function () {
                  var t = Ol(e, 1);
                  if (null !== t) {
                    var n = eu();
                    nu(t, e, 1, n);
                  }
                }),
                  Gu(e, 1);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = Ol(e, 134217728);
              if (null !== t) nu(t, e, 134217728, eu());
              Gu(e, 134217728);
            }
          }),
          (jt = function (e) {
            if (13 === e.tag) {
              var t = tu(e),
                n = Ol(e, t);
              if (null !== n) nu(n, e, t, eu());
              Gu(e, t);
            }
          }),
          (St = function () {
            return bt;
          }),
          (Ct = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (ke = function (e, t, n) {
            switch (t) {
              case "input":
                if ((Z(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = wa(r);
                      if (!a) throw Error(l(90));
                      Y(r), Z(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                le(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Pe = uu),
          (Le = cu);
        var ec = {
            usingClientEntryPoint: !1,
            Events: [ba, xa, wa, Ee, Ne, uu],
          },
          tc = {
            findFiberByHostInstance: ya,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom",
          },
          nc = {
            bundleType: tc.bundleType,
            version: tc.version,
            rendererPackageName: tc.rendererPackageName,
            rendererConfig: tc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: x.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = Qe(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              tc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var rc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!rc.isDisabled && rc.supportsFiber)
            try {
              (at = rc.inject(nc)), (lt = rc);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ec),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Xu(t)) throw Error(l(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: k,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Xu(e)) throw Error(l(299));
            var n = !1,
              r = "",
              a = Yu;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = _u(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ha] = t.current),
              Vr(8 === e.nodeType ? e.parentNode : e),
              new Ku(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(l(188));
              throw ((e = Object.keys(e).join(",")), Error(l(268, e)));
            }
            return (e = null === (e = Qe(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return cu(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Ju(t)) throw Error(l(200));
            return $u(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Xu(e)) throw Error(l(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              i = "",
              o = Yu;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (o = n.onRecoverableError)),
              (t = Vu(t, null, e, 1, null != n ? n : null, a, 0, i, o)),
              (e[ha] = t.current),
              Vr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new qu(t);
          }),
          (t.render = function (e, t, n) {
            if (!Ju(t)) throw Error(l(200));
            return $u(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Ju(e)) throw Error(l(40));
            return (
              !!e._reactRootContainer &&
              (cu(function () {
                $u(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ha] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = uu),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Ju(n)) throw Error(l(200));
            if (null == e || void 0 === e._reactInternals) throw Error(l(38));
            return $u(e, t, n, !1, r);
          }),
          (t.version = "18.3.1-next-f1338f8080-20240426");
      },
      391: (e, t, n) => {
        var r = n(950);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      950: (e, t, n) => {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(730));
      },
      153: (e, t, n) => {
        var r = n(43),
          a = Symbol.for("react.element"),
          l = Symbol.for("react.fragment"),
          i = Object.prototype.hasOwnProperty,
          o =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, n) {
          var r,
            l = {},
            u = null,
            c = null;
          for (r in (void 0 !== n && (u = "" + n),
          void 0 !== t.key && (u = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            i.call(t, r) && !s.hasOwnProperty(r) && (l[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === l[r] && (l[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: u,
            ref: c,
            props: l,
            _owner: o.current,
          };
        }
        (t.Fragment = l), (t.jsx = u), (t.jsxs = u);
      },
      202: (e, t) => {
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          l = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          o = Symbol.for("react.provider"),
          s = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          g = {};
        function v(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        function y() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        (v.prototype.isReactComponent = {}),
          (v.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (v.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = v.prototype);
        var x = (b.prototype = new y());
        (x.constructor = b), m(x, v.prototype), (x.isPureReactComponent = !0);
        var w = Array.isArray,
          k = Object.prototype.hasOwnProperty,
          j = { current: null },
          S = { key: !0, ref: !0, __self: !0, __source: !0 };
        function C(e, t, r) {
          var a,
            l = {},
            i = null,
            o = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (o = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              k.call(t, a) && !S.hasOwnProperty(a) && (l[a] = t[a]);
          var s = arguments.length - 2;
          if (1 === s) l.children = r;
          else if (1 < s) {
            for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
            l.children = u;
          }
          if (e && e.defaultProps)
            for (a in (s = e.defaultProps)) void 0 === l[a] && (l[a] = s[a]);
          return {
            $$typeof: n,
            type: e,
            key: i,
            ref: o,
            props: l,
            _owner: j.current,
          };
        }
        function E(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var N = /\/+/g;
        function P(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function L(e, t, a, l, i) {
          var o = typeof e;
          ("undefined" !== o && "boolean" !== o) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (o) {
              case "string":
              case "number":
                s = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    s = !0;
                }
            }
          if (s)
            return (
              (i = i((s = e))),
              (e = "" === l ? "." + P(s, 0) : l),
              w(i)
                ? ((a = ""),
                  null != e && (a = e.replace(N, "$&/") + "/"),
                  L(i, t, a, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (E(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      a +
                        (!i.key || (s && s.key === i.key)
                          ? ""
                          : ("" + i.key).replace(N, "$&/") + "/") +
                        e
                    )),
                  t.push(i)),
              1
            );
          if (((s = 0), (l = "" === l ? "." : l + ":"), w(e)))
            for (var u = 0; u < e.length; u++) {
              var c = l + P((o = e[u]), u);
              s += L(o, t, a, c, i);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), u = 0; !(o = e.next()).done; )
              s += L((o = o.value), t, a, (c = l + P(o, u++)), i);
          else if ("object" === o)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return s;
        }
        function T(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            L(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function R(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var A = { current: null },
          z = { transition: null },
          O = {
            ReactCurrentDispatcher: A,
            ReactCurrentBatchConfig: z,
            ReactCurrentOwner: j,
          };
        function M() {
          throw Error(
            "act(...) is not supported in production builds of React."
          );
        }
        (t.Children = {
          map: T,
          forEach: function (e, t, n) {
            T(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              T(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              T(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!E(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = v),
          (t.Fragment = a),
          (t.Profiler = i),
          (t.PureComponent = b),
          (t.StrictMode = l),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O),
          (t.act = M),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = m({}, e.props),
              l = e.key,
              i = e.ref,
              o = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (o = j.current)),
                void 0 !== t.key && (l = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (u in t)
                k.call(t, u) &&
                  !S.hasOwnProperty(u) &&
                  (a[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) a.children = r;
            else if (1 < u) {
              s = Array(u);
              for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
              a.children = s;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: l,
              ref: i,
              props: a,
              _owner: o,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: o, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = C),
          (t.createFactory = function (e) {
            var t = C.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = E),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: R,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = z.transition;
            z.transition = {};
            try {
              e();
            } finally {
              z.transition = t;
            }
          }),
          (t.unstable_act = M),
          (t.useCallback = function (e, t) {
            return A.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return A.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return A.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return A.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return A.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return A.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return A.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return A.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return A.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return A.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return A.current.useRef(e);
          }),
          (t.useState = function (e) {
            return A.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return A.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return A.current.useTransition();
          }),
          (t.version = "18.3.1");
      },
      43: (e, t, n) => {
        e.exports = n(202);
      },
      579: (e, t, n) => {
        e.exports = n(153);
      },
      234: (e, t) => {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < l(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, i = a >>> 1; r < i; ) {
              var o = 2 * (r + 1) - 1,
                s = e[o],
                u = o + 1,
                c = e[u];
              if (0 > l(s, n))
                u < a && 0 > l(c, s)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = s), (e[o] = n), (r = o));
              else {
                if (!(u < a && 0 > l(c, n))) break e;
                (e[r] = c), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        function l(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var o = Date,
            s = o.now();
          t.unstable_now = function () {
            return o.now() - s;
          };
        }
        var u = [],
          c = [],
          d = 1,
          f = null,
          p = 3,
          h = !1,
          m = !1,
          g = !1,
          v = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function x(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(u, t);
            }
            t = r(c);
          }
        }
        function w(e) {
          if (((g = !1), x(e), !m))
            if (null !== r(u)) (m = !0), z(k);
            else {
              var t = r(c);
              null !== t && O(w, t.startTime - e);
            }
        }
        function k(e, n) {
          (m = !1), g && ((g = !1), y(E), (E = -1)), (h = !0);
          var l = p;
          try {
            for (
              x(n), f = r(u);
              null !== f && (!(f.expirationTime > n) || (e && !L()));

            ) {
              var i = f.callback;
              if ("function" === typeof i) {
                (f.callback = null), (p = f.priorityLevel);
                var o = i(f.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof o
                    ? (f.callback = o)
                    : f === r(u) && a(u),
                  x(n);
              } else a(u);
              f = r(u);
            }
            if (null !== f) var s = !0;
            else {
              var d = r(c);
              null !== d && O(w, d.startTime - n), (s = !1);
            }
            return s;
          } finally {
            (f = null), (p = l), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var j,
          S = !1,
          C = null,
          E = -1,
          N = 5,
          P = -1;
        function L() {
          return !(t.unstable_now() - P < N);
        }
        function T() {
          if (null !== C) {
            var e = t.unstable_now();
            P = e;
            var n = !0;
            try {
              n = C(!0, e);
            } finally {
              n ? j() : ((S = !1), (C = null));
            }
          } else S = !1;
        }
        if ("function" === typeof b)
          j = function () {
            b(T);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var R = new MessageChannel(),
            A = R.port2;
          (R.port1.onmessage = T),
            (j = function () {
              A.postMessage(null);
            });
        } else
          j = function () {
            v(T, 0);
          };
        function z(e) {
          (C = e), S || ((S = !0), j());
        }
        function O(e, n) {
          E = v(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || h || ((m = !0), z(k));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (N = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, l) {
            var i = t.unstable_now();
            switch (
              ("object" === typeof l && null !== l
                ? (l = "number" === typeof (l = l.delay) && 0 < l ? i + l : i)
                : (l = i),
              e)
            ) {
              case 1:
                var o = -1;
                break;
              case 2:
                o = 250;
                break;
              case 5:
                o = 1073741823;
                break;
              case 4:
                o = 1e4;
                break;
              default:
                o = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: a,
                priorityLevel: e,
                startTime: l,
                expirationTime: (o = l + o),
                sortIndex: -1,
              }),
              l > i
                ? ((e.sortIndex = l),
                  n(c, e),
                  null === r(u) &&
                    e === r(c) &&
                    (g ? (y(E), (E = -1)) : (g = !0), O(w, l - i)))
                : ((e.sortIndex = o), n(u, e), m || h || ((m = !0), z(k))),
              e
            );
          }),
          (t.unstable_shouldYield = L),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      853: (e, t, n) => {
        e.exports = n(234);
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var l = (t[r] = { exports: {} });
    return e[r](l, l.exports, n), l.exports;
  }
  (n.m = e),
    (() => {
      var e,
        t = Object.getPrototypeOf
          ? (e) => Object.getPrototypeOf(e)
          : (e) => e.__proto__;
      n.t = function (r, a) {
        if ((1 & a && (r = this(r)), 8 & a)) return r;
        if ("object" === typeof r && r) {
          if (4 & a && r.__esModule) return r;
          if (16 & a && "function" === typeof r.then) return r;
        }
        var l = Object.create(null);
        n.r(l);
        var i = {};
        e = e || [null, t({}), t([]), t(t)];
        for (
          var o = 2 & a && r;
          "object" == typeof o && !~e.indexOf(o);
          o = t(o)
        )
          Object.getOwnPropertyNames(o).forEach((e) => (i[e] = () => r[e]));
        return (i.default = () => r), n.d(l, i), l;
      };
    })(),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.f = {}),
    (n.e = (e) =>
      Promise.all(Object.keys(n.f).reduce((t, r) => (n.f[r](e, t), t), []))),
    (n.u = (e) => "static/js/" + e + ".58f6a3fc.chunk.js"),
    (n.miniCssF = (e) => {}),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = {},
        t = "rocketteam:";
      n.l = (r, a, l, i) => {
        if (e[r]) e[r].push(a);
        else {
          var o, s;
          if (void 0 !== l)
            for (
              var u = document.getElementsByTagName("script"), c = 0;
              c < u.length;
              c++
            ) {
              var d = u[c];
              if (
                d.getAttribute("src") == r ||
                d.getAttribute("data-webpack") == t + l
              ) {
                o = d;
                break;
              }
            }
          o ||
            ((s = !0),
            ((o = document.createElement("script")).charset = "utf-8"),
            (o.timeout = 120),
            n.nc && o.setAttribute("nonce", n.nc),
            o.setAttribute("data-webpack", t + l),
            (o.src = r)),
            (e[r] = [a]);
          var f = (t, n) => {
              (o.onerror = o.onload = null), clearTimeout(p);
              var a = e[r];
              if (
                (delete e[r],
                o.parentNode && o.parentNode.removeChild(o),
                a && a.forEach((e) => e(n)),
                t)
              )
                return t(n);
            },
            p = setTimeout(
              f.bind(null, void 0, { type: "timeout", target: o }),
              12e4
            );
          (o.onerror = f.bind(null, o.onerror)),
            (o.onload = f.bind(null, o.onload)),
            s && document.head.appendChild(o);
        }
      };
    })(),
    (n.r = (e) => {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/"),
    (() => {
      var e = { 792: 0 };
      n.f.j = (t, r) => {
        var a = n.o(e, t) ? e[t] : void 0;
        if (0 !== a)
          if (a) r.push(a[2]);
          else {
            var l = new Promise((n, r) => (a = e[t] = [n, r]));
            r.push((a[2] = l));
            var i = n.p + n.u(t),
              o = new Error();
            n.l(
              i,
              (r) => {
                if (n.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var l = r && ("load" === r.type ? "missing" : r.type),
                    i = r && r.target && r.target.src;
                  (o.message =
                    "Loading chunk " + t + " failed.\n(" + l + ": " + i + ")"),
                    (o.name = "ChunkLoadError"),
                    (o.type = l),
                    (o.request = i),
                    a[1](o);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = (t, r) => {
          var a,
            l,
            i = r[0],
            o = r[1],
            s = r[2],
            u = 0;
          if (i.some((t) => 0 !== e[t])) {
            for (a in o) n.o(o, a) && (n.m[a] = o[a]);
            if (s) s(n);
          }
          for (t && t(r); u < i.length; u++)
            (l = i[u]), n.o(e, l) && e[l] && e[l][0](), (e[l] = 0);
        },
        r = (self.webpackChunkrocketteam = self.webpackChunkrocketteam || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var r,
    a = n(43),
    l = n.t(a, 2),
    i = n(391);
  function o() {
    return (
      (o = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      o.apply(this, arguments)
    );
  }
  !(function (e) {
    (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
  })(r || (r = {}));
  const s = "popstate";
  function u(e, t) {
    if (!1 === e || null === e || "undefined" === typeof e) throw new Error(t);
  }
  function c(e, t) {
    if (!e) {
      "undefined" !== typeof console && console.warn(t);
      try {
        throw new Error(t);
      } catch (n) {}
    }
  }
  function d(e, t) {
    return { usr: e.state, key: e.key, idx: t };
  }
  function f(e, t, n, r) {
    return (
      void 0 === n && (n = null),
      o(
        {
          pathname: "string" === typeof e ? e : e.pathname,
          search: "",
          hash: "",
        },
        "string" === typeof t ? h(t) : t,
        {
          state: n,
          key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
        }
      )
    );
  }
  function p(e) {
    let { pathname: t = "/", search: n = "", hash: r = "" } = e;
    return (
      n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n),
      r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r),
      t
    );
  }
  function h(e) {
    let t = {};
    if (e) {
      let n = e.indexOf("#");
      n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
      let r = e.indexOf("?");
      r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
        e && (t.pathname = e);
    }
    return t;
  }
  function m(e, t, n, a) {
    void 0 === a && (a = {});
    let { window: l = document.defaultView, v5Compat: i = !1 } = a,
      c = l.history,
      h = r.Pop,
      m = null,
      g = v();
    function v() {
      return (c.state || { idx: null }).idx;
    }
    function y() {
      h = r.Pop;
      let e = v(),
        t = null == e ? null : e - g;
      (g = e), m && m({ action: h, location: x.location, delta: t });
    }
    function b(e) {
      let t =
          "null" !== l.location.origin ? l.location.origin : l.location.href,
        n = "string" === typeof e ? e : p(e);
      return (
        (n = n.replace(/ $/, "%20")),
        u(
          t,
          "No window.location.(origin|href) available to create URL for href: " +
            n
        ),
        new URL(n, t)
      );
    }
    null == g && ((g = 0), c.replaceState(o({}, c.state, { idx: g }), ""));
    let x = {
      get action() {
        return h;
      },
      get location() {
        return e(l, c);
      },
      listen(e) {
        if (m) throw new Error("A history only accepts one active listener");
        return (
          l.addEventListener(s, y),
          (m = e),
          () => {
            l.removeEventListener(s, y), (m = null);
          }
        );
      },
      createHref: (e) => t(l, e),
      createURL: b,
      encodeLocation(e) {
        let t = b(e);
        return { pathname: t.pathname, search: t.search, hash: t.hash };
      },
      push: function (e, t) {
        h = r.Push;
        let a = f(x.location, e, t);
        n && n(a, e), (g = v() + 1);
        let o = d(a, g),
          s = x.createHref(a);
        try {
          c.pushState(o, "", s);
        } catch (u) {
          if (u instanceof DOMException && "DataCloneError" === u.name) throw u;
          l.location.assign(s);
        }
        i && m && m({ action: h, location: x.location, delta: 1 });
      },
      replace: function (e, t) {
        h = r.Replace;
        let a = f(x.location, e, t);
        n && n(a, e), (g = v());
        let l = d(a, g),
          o = x.createHref(a);
        c.replaceState(l, "", o),
          i && m && m({ action: h, location: x.location, delta: 0 });
      },
      go: (e) => c.go(e),
    };
    return x;
  }
  var g;
  !(function (e) {
    (e.data = "data"),
      (e.deferred = "deferred"),
      (e.redirect = "redirect"),
      (e.error = "error");
  })(g || (g = {}));
  new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
  function v(e, t, n) {
    return void 0 === n && (n = "/"), y(e, t, n, !1);
  }
  function y(e, t, n, r) {
    let a = A(("string" === typeof t ? h(t) : t).pathname || "/", n);
    if (null == a) return null;
    let l = b(e);
    !(function (e) {
      e.sort((e, t) =>
        e.score !== t.score
          ? t.score - e.score
          : (function (e, t) {
              let n =
                e.length === t.length &&
                e.slice(0, -1).every((e, n) => e === t[n]);
              return n ? e[e.length - 1] - t[t.length - 1] : 0;
            })(
              e.routesMeta.map((e) => e.childrenIndex),
              t.routesMeta.map((e) => e.childrenIndex)
            )
      );
    })(l);
    let i = null;
    for (let o = 0; null == i && o < l.length; ++o) {
      let e = R(a);
      i = L(l[o], e, r);
    }
    return i;
  }
  function b(e, t, n, r) {
    void 0 === t && (t = []),
      void 0 === n && (n = []),
      void 0 === r && (r = "");
    let a = (e, a, l) => {
      let i = {
        relativePath: void 0 === l ? e.path || "" : l,
        caseSensitive: !0 === e.caseSensitive,
        childrenIndex: a,
        route: e,
      };
      i.relativePath.startsWith("/") &&
        (u(
          i.relativePath.startsWith(r),
          'Absolute route path "' +
            i.relativePath +
            '" nested under path "' +
            r +
            '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
        ),
        (i.relativePath = i.relativePath.slice(r.length)));
      let o = D([r, i.relativePath]),
        s = n.concat(i);
      e.children &&
        e.children.length > 0 &&
        (u(
          !0 !== e.index,
          'Index routes must not have child routes. Please remove all child routes from route path "' +
            o +
            '".'
        ),
        b(e.children, t, s, o)),
        (null != e.path || e.index) &&
          t.push({ path: o, score: P(o, e.index), routesMeta: s });
    };
    return (
      e.forEach((e, t) => {
        var n;
        if ("" !== e.path && null != (n = e.path) && n.includes("?"))
          for (let r of x(e.path)) a(e, t, r);
        else a(e, t);
      }),
      t
    );
  }
  function x(e) {
    let t = e.split("/");
    if (0 === t.length) return [];
    let [n, ...r] = t,
      a = n.endsWith("?"),
      l = n.replace(/\?$/, "");
    if (0 === r.length) return a ? [l, ""] : [l];
    let i = x(r.join("/")),
      o = [];
    return (
      o.push(...i.map((e) => ("" === e ? l : [l, e].join("/")))),
      a && o.push(...i),
      o.map((t) => (e.startsWith("/") && "" === t ? "/" : t))
    );
  }
  const w = /^:[\w-]+$/,
    k = 3,
    j = 2,
    S = 1,
    C = 10,
    E = -2,
    N = (e) => "*" === e;
  function P(e, t) {
    let n = e.split("/"),
      r = n.length;
    return (
      n.some(N) && (r += E),
      t && (r += j),
      n
        .filter((e) => !N(e))
        .reduce((e, t) => e + (w.test(t) ? k : "" === t ? S : C), r)
    );
  }
  function L(e, t, n) {
    void 0 === n && (n = !1);
    let { routesMeta: r } = e,
      a = {},
      l = "/",
      i = [];
    for (let o = 0; o < r.length; ++o) {
      let e = r[o],
        s = o === r.length - 1,
        u = "/" === l ? t : t.slice(l.length) || "/",
        c = T(
          { path: e.relativePath, caseSensitive: e.caseSensitive, end: s },
          u
        ),
        d = e.route;
      if (
        (!c &&
          s &&
          n &&
          !r[r.length - 1].route.index &&
          (c = T(
            { path: e.relativePath, caseSensitive: e.caseSensitive, end: !1 },
            u
          )),
        !c)
      )
        return null;
      Object.assign(a, c.params),
        i.push({
          params: a,
          pathname: D([l, c.pathname]),
          pathnameBase: F(D([l, c.pathnameBase])),
          route: d,
        }),
        "/" !== c.pathnameBase && (l = D([l, c.pathnameBase]));
    }
    return i;
  }
  function T(e, t) {
    "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
    let [n, r] = (function (e, t, n) {
        void 0 === t && (t = !1);
        void 0 === n && (n = !0);
        c(
          "*" === e || !e.endsWith("*") || e.endsWith("/*"),
          'Route path "' +
            e +
            '" will be treated as if it were "' +
            e.replace(/\*$/, "/*") +
            '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
            e.replace(/\*$/, "/*") +
            '".'
        );
        let r = [],
          a =
            "^" +
            e
              .replace(/\/*\*?$/, "")
              .replace(/^\/*/, "/")
              .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
              .replace(
                /\/:([\w-]+)(\?)?/g,
                (e, t, n) => (
                  r.push({ paramName: t, isOptional: null != n }),
                  n ? "/?([^\\/]+)?" : "/([^\\/]+)"
                )
              );
        e.endsWith("*")
          ? (r.push({ paramName: "*" }),
            (a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
          : n
          ? (a += "\\/*$")
          : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
        let l = new RegExp(a, t ? void 0 : "i");
        return [l, r];
      })(e.path, e.caseSensitive, e.end),
      a = t.match(n);
    if (!a) return null;
    let l = a[0],
      i = l.replace(/(.)\/+$/, "$1"),
      o = a.slice(1);
    return {
      params: r.reduce((e, t, n) => {
        let { paramName: r, isOptional: a } = t;
        if ("*" === r) {
          let e = o[n] || "";
          i = l.slice(0, l.length - e.length).replace(/(.)\/+$/, "$1");
        }
        const s = o[n];
        return (e[r] = a && !s ? void 0 : (s || "").replace(/%2F/g, "/")), e;
      }, {}),
      pathname: l,
      pathnameBase: i,
      pattern: e,
    };
  }
  function R(e) {
    try {
      return e
        .split("/")
        .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
        .join("/");
    } catch (t) {
      return (
        c(
          !1,
          'The URL path "' +
            e +
            '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
            t +
            ")."
        ),
        e
      );
    }
  }
  function A(e, t) {
    if ("/" === t) return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
      r = e.charAt(n);
    return r && "/" !== r ? null : e.slice(n) || "/";
  }
  function z(e, t, n, r) {
    return (
      "Cannot include a '" +
      e +
      "' character in a manually specified `to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the `to." +
      n +
      '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
    );
  }
  function O(e) {
    return e.filter(
      (e, t) => 0 === t || (e.route.path && e.route.path.length > 0)
    );
  }
  function M(e, t) {
    let n = O(e);
    return t
      ? n.map((e, t) => (t === n.length - 1 ? e.pathname : e.pathnameBase))
      : n.map((e) => e.pathnameBase);
  }
  function I(e, t, n, r) {
    let a;
    void 0 === r && (r = !1),
      "string" === typeof e
        ? (a = h(e))
        : ((a = o({}, e)),
          u(
            !a.pathname || !a.pathname.includes("?"),
            z("?", "pathname", "search", a)
          ),
          u(
            !a.pathname || !a.pathname.includes("#"),
            z("#", "pathname", "hash", a)
          ),
          u(!a.search || !a.search.includes("#"), z("#", "search", "hash", a)));
    let l,
      i = "" === e || "" === a.pathname,
      s = i ? "/" : a.pathname;
    if (null == s) l = n;
    else {
      let e = t.length - 1;
      if (!r && s.startsWith("..")) {
        let t = s.split("/");
        for (; ".." === t[0]; ) t.shift(), (e -= 1);
        a.pathname = t.join("/");
      }
      l = e >= 0 ? t[e] : "/";
    }
    let c = (function (e, t) {
        void 0 === t && (t = "/");
        let {
            pathname: n,
            search: r = "",
            hash: a = "",
          } = "string" === typeof e ? h(e) : e,
          l = n
            ? n.startsWith("/")
              ? n
              : (function (e, t) {
                  let n = t.replace(/\/+$/, "").split("/");
                  return (
                    e.split("/").forEach((e) => {
                      ".." === e
                        ? n.length > 1 && n.pop()
                        : "." !== e && n.push(e);
                    }),
                    n.length > 1 ? n.join("/") : "/"
                  );
                })(n, t)
            : t;
        return { pathname: l, search: B(r), hash: _(a) };
      })(a, l),
      d = s && "/" !== s && s.endsWith("/"),
      f = (i || "." === s) && n.endsWith("/");
    return c.pathname.endsWith("/") || (!d && !f) || (c.pathname += "/"), c;
  }
  const D = (e) => e.join("/").replace(/\/\/+/g, "/"),
    F = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    B = (e) => (e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : ""),
    _ = (e) => (e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "");
  Error;
  function U(e) {
    return (
      null != e &&
      "number" === typeof e.status &&
      "string" === typeof e.statusText &&
      "boolean" === typeof e.internal &&
      "data" in e
    );
  }
  const V = ["post", "put", "patch", "delete"],
    W = (new Set(V), ["get", ...V]);
  new Set(W), new Set([301, 302, 303, 307, 308]), new Set([307, 308]);
  Symbol("deferred");
  function H() {
    return (
      (H = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      H.apply(this, arguments)
    );
  }
  const Q = a.createContext(null);
  const G = a.createContext(null);
  const Y = a.createContext(null);
  const K = a.createContext(null);
  const q = a.createContext({ outlet: null, matches: [], isDataRoute: !1 });
  const X = a.createContext(null);
  function J() {
    return null != a.useContext(K);
  }
  function Z() {
    return J() || u(!1), a.useContext(K).location;
  }
  function $(e) {
    a.useContext(Y).static || a.useLayoutEffect(e);
  }
  function ee() {
    let { isDataRoute: e } = a.useContext(q);
    return e
      ? (function () {
          let { router: e } = ce(se.UseNavigateStable),
            t = fe(ue.UseNavigateStable),
            n = a.useRef(!1);
          return (
            $(() => {
              n.current = !0;
            }),
            a.useCallback(
              function (r, a) {
                void 0 === a && (a = {}),
                  n.current &&
                    ("number" === typeof r
                      ? e.navigate(r)
                      : e.navigate(r, H({ fromRouteId: t }, a)));
              },
              [e, t]
            )
          );
        })()
      : (function () {
          J() || u(!1);
          let e = a.useContext(Q),
            { basename: t, future: n, navigator: r } = a.useContext(Y),
            { matches: l } = a.useContext(q),
            { pathname: i } = Z(),
            o = JSON.stringify(M(l, n.v7_relativeSplatPath)),
            s = a.useRef(!1);
          return (
            $(() => {
              s.current = !0;
            }),
            a.useCallback(
              function (n, a) {
                if ((void 0 === a && (a = {}), !s.current)) return;
                if ("number" === typeof n) return void r.go(n);
                let l = I(n, JSON.parse(o), i, "path" === a.relative);
                null == e &&
                  "/" !== t &&
                  (l.pathname = "/" === l.pathname ? t : D([t, l.pathname])),
                  (a.replace ? r.replace : r.push)(l, a.state, a);
              },
              [t, r, o, i, e]
            )
          );
        })();
  }
  function te(e, t) {
    let { relative: n } = void 0 === t ? {} : t,
      { future: r } = a.useContext(Y),
      { matches: l } = a.useContext(q),
      { pathname: i } = Z(),
      o = JSON.stringify(M(l, r.v7_relativeSplatPath));
    return a.useMemo(() => I(e, JSON.parse(o), i, "path" === n), [e, o, i, n]);
  }
  function ne(e, t, n, l) {
    J() || u(!1);
    let { navigator: i } = a.useContext(Y),
      { matches: o } = a.useContext(q),
      s = o[o.length - 1],
      c = s ? s.params : {},
      d = (s && s.pathname, s ? s.pathnameBase : "/");
    s && s.route;
    let f,
      p = Z();
    if (t) {
      var m;
      let e = "string" === typeof t ? h(t) : t;
      "/" === d ||
        (null == (m = e.pathname) ? void 0 : m.startsWith(d)) ||
        u(!1),
        (f = e);
    } else f = p;
    let g = f.pathname || "/",
      y = g;
    if ("/" !== d) {
      let e = d.replace(/^\//, "").split("/");
      y = "/" + g.replace(/^\//, "").split("/").slice(e.length).join("/");
    }
    let b = v(e, { pathname: y });
    let x = oe(
      b &&
        b.map((e) =>
          Object.assign({}, e, {
            params: Object.assign({}, c, e.params),
            pathname: D([
              d,
              i.encodeLocation
                ? i.encodeLocation(e.pathname).pathname
                : e.pathname,
            ]),
            pathnameBase:
              "/" === e.pathnameBase
                ? d
                : D([
                    d,
                    i.encodeLocation
                      ? i.encodeLocation(e.pathnameBase).pathname
                      : e.pathnameBase,
                  ]),
          })
        ),
      o,
      n,
      l
    );
    return t && x
      ? a.createElement(
          K.Provider,
          {
            value: {
              location: H(
                {
                  pathname: "/",
                  search: "",
                  hash: "",
                  state: null,
                  key: "default",
                },
                f
              ),
              navigationType: r.Pop,
            },
          },
          x
        )
      : x;
  }
  function re() {
    let e = (function () {
        var e;
        let t = a.useContext(X),
          n = de(ue.UseRouteError),
          r = fe(ue.UseRouteError);
        if (void 0 !== t) return t;
        return null == (e = n.errors) ? void 0 : e[r];
      })(),
      t = U(e)
        ? e.status + " " + e.statusText
        : e instanceof Error
        ? e.message
        : JSON.stringify(e),
      n = e instanceof Error ? e.stack : null,
      r = "rgba(200,200,200, 0.5)",
      l = { padding: "0.5rem", backgroundColor: r };
    return a.createElement(
      a.Fragment,
      null,
      a.createElement("h2", null, "Unexpected Application Error!"),
      a.createElement("h3", { style: { fontStyle: "italic" } }, t),
      n ? a.createElement("pre", { style: l }, n) : null,
      null
    );
  }
  const ae = a.createElement(re, null);
  class le extends a.Component {
    constructor(e) {
      super(e),
        (this.state = {
          location: e.location,
          revalidation: e.revalidation,
          error: e.error,
        });
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location ||
        ("idle" !== t.revalidation && "idle" === e.revalidation)
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: void 0 !== e.error ? e.error : t.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation,
          };
    }
    componentDidCatch(e, t) {
      console.error(
        "React Router caught the following error during render",
        e,
        t
      );
    }
    render() {
      return void 0 !== this.state.error
        ? a.createElement(
            q.Provider,
            { value: this.props.routeContext },
            a.createElement(X.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  }
  function ie(e) {
    let { routeContext: t, match: n, children: r } = e,
      l = a.useContext(Q);
    return (
      l &&
        l.static &&
        l.staticContext &&
        (n.route.errorElement || n.route.ErrorBoundary) &&
        (l.staticContext._deepestRenderedBoundaryId = n.route.id),
      a.createElement(q.Provider, { value: t }, r)
    );
  }
  function oe(e, t, n, r) {
    var l;
    if (
      (void 0 === t && (t = []),
      void 0 === n && (n = null),
      void 0 === r && (r = null),
      null == e)
    ) {
      var i;
      if (!n) return null;
      if (n.errors) e = n.matches;
      else {
        if (
          !(
            null != (i = r) &&
            i.v7_partialHydration &&
            0 === t.length &&
            !n.initialized &&
            n.matches.length > 0
          )
        )
          return null;
        e = n.matches;
      }
    }
    let o = e,
      s = null == (l = n) ? void 0 : l.errors;
    if (null != s) {
      let e = o.findIndex(
        (e) => e.route.id && void 0 !== (null == s ? void 0 : s[e.route.id])
      );
      e >= 0 || u(!1), (o = o.slice(0, Math.min(o.length, e + 1)));
    }
    let c = !1,
      d = -1;
    if (n && r && r.v7_partialHydration)
      for (let a = 0; a < o.length; a++) {
        let e = o[a];
        if (
          ((e.route.HydrateFallback || e.route.hydrateFallbackElement) &&
            (d = a),
          e.route.id)
        ) {
          let { loaderData: t, errors: r } = n,
            a =
              e.route.loader &&
              void 0 === t[e.route.id] &&
              (!r || void 0 === r[e.route.id]);
          if (e.route.lazy || a) {
            (c = !0), (o = d >= 0 ? o.slice(0, d + 1) : [o[0]]);
            break;
          }
        }
      }
    return o.reduceRight((e, r, l) => {
      let i,
        u = !1,
        f = null,
        p = null;
      var h;
      n &&
        ((i = s && r.route.id ? s[r.route.id] : void 0),
        (f = r.route.errorElement || ae),
        c &&
          (d < 0 && 0 === l
            ? ((h = "route-fallback"),
              !1 || pe[h] || (pe[h] = !0),
              (u = !0),
              (p = null))
            : d === l &&
              ((u = !0), (p = r.route.hydrateFallbackElement || null))));
      let m = t.concat(o.slice(0, l + 1)),
        g = () => {
          let t;
          return (
            (t = i
              ? f
              : u
              ? p
              : r.route.Component
              ? a.createElement(r.route.Component, null)
              : r.route.element
              ? r.route.element
              : e),
            a.createElement(ie, {
              match: r,
              routeContext: { outlet: e, matches: m, isDataRoute: null != n },
              children: t,
            })
          );
        };
      return n && (r.route.ErrorBoundary || r.route.errorElement || 0 === l)
        ? a.createElement(le, {
            location: n.location,
            revalidation: n.revalidation,
            component: f,
            error: i,
            children: g(),
            routeContext: { outlet: null, matches: m, isDataRoute: !0 },
          })
        : g();
    }, null);
  }
  var se = (function (e) {
      return (
        (e.UseBlocker = "useBlocker"),
        (e.UseRevalidator = "useRevalidator"),
        (e.UseNavigateStable = "useNavigate"),
        e
      );
    })(se || {}),
    ue = (function (e) {
      return (
        (e.UseBlocker = "useBlocker"),
        (e.UseLoaderData = "useLoaderData"),
        (e.UseActionData = "useActionData"),
        (e.UseRouteError = "useRouteError"),
        (e.UseNavigation = "useNavigation"),
        (e.UseRouteLoaderData = "useRouteLoaderData"),
        (e.UseMatches = "useMatches"),
        (e.UseRevalidator = "useRevalidator"),
        (e.UseNavigateStable = "useNavigate"),
        (e.UseRouteId = "useRouteId"),
        e
      );
    })(ue || {});
  function ce(e) {
    let t = a.useContext(Q);
    return t || u(!1), t;
  }
  function de(e) {
    let t = a.useContext(G);
    return t || u(!1), t;
  }
  function fe(e) {
    let t = (function () {
        let e = a.useContext(q);
        return e || u(!1), e;
      })(),
      n = t.matches[t.matches.length - 1];
    return n.route.id || u(!1), n.route.id;
  }
  const pe = {};
  l.startTransition;
  function he(e) {
    u(!1);
  }
  function me(e) {
    let {
      basename: t = "/",
      children: n = null,
      location: l,
      navigationType: i = r.Pop,
      navigator: o,
      static: s = !1,
      future: c,
    } = e;
    J() && u(!1);
    let d = t.replace(/^\/*/, "/"),
      f = a.useMemo(
        () => ({
          basename: d,
          navigator: o,
          static: s,
          future: H({ v7_relativeSplatPath: !1 }, c),
        }),
        [d, c, o, s]
      );
    "string" === typeof l && (l = h(l));
    let {
        pathname: p = "/",
        search: m = "",
        hash: g = "",
        state: v = null,
        key: y = "default",
      } = l,
      b = a.useMemo(() => {
        let e = A(p, d);
        return null == e
          ? null
          : {
              location: { pathname: e, search: m, hash: g, state: v, key: y },
              navigationType: i,
            };
      }, [d, p, m, g, v, y, i]);
    return null == b
      ? null
      : a.createElement(
          Y.Provider,
          { value: f },
          a.createElement(K.Provider, { children: n, value: b })
        );
  }
  function ge(e) {
    let { children: t, location: n } = e;
    return ne(ve(t), n);
  }
  new Promise(() => {});
  a.Component;
  function ve(e, t) {
    void 0 === t && (t = []);
    let n = [];
    return (
      a.Children.forEach(e, (e, r) => {
        if (!a.isValidElement(e)) return;
        let l = [...t, r];
        if (e.type === a.Fragment)
          return void n.push.apply(n, ve(e.props.children, l));
        e.type !== he && u(!1), e.props.index && e.props.children && u(!1);
        let i = {
          id: e.props.id || l.join("-"),
          caseSensitive: e.props.caseSensitive,
          element: e.props.element,
          Component: e.props.Component,
          index: e.props.index,
          path: e.props.path,
          loader: e.props.loader,
          action: e.props.action,
          errorElement: e.props.errorElement,
          ErrorBoundary: e.props.ErrorBoundary,
          hasErrorBoundary:
            null != e.props.ErrorBoundary || null != e.props.errorElement,
          shouldRevalidate: e.props.shouldRevalidate,
          handle: e.props.handle,
          lazy: e.props.lazy,
        };
        e.props.children && (i.children = ve(e.props.children, l)), n.push(i);
      }),
      n
    );
  }
  const ye = function () {
    const { pathname: e } = Z();
    return (
      (0, a.useEffect)(() => {
        window.scrollTo(0, 0);
      }, [e]),
      null
    );
  };
  var be = n(579);
  const xe = function (e) {
    let { label: t, link: n } = e;
    return (0, be.jsx)("button", {
      onClick: () => (window.location.href = n),
      children: t,
    });
  };
  const we = function (e) {
    let { day: t, month: n, eventName: r, eventLocation: a, eventTime: l } = e;
    return (0, be.jsxs)("div", {
      className: "eventsTile",
      children: [
        (0, be.jsx)("h4", { children: n }),
        (0, be.jsx)("h1", { children: t }),
        (0, be.jsx)("div", {
          className: "eventTitle",
          children: (0, be.jsx)("h4", { children: r }),
        }),
        (0, be.jsxs)("div", {
          className: "eventInfo",
          children: [
            (0, be.jsx)("p", { children: a }),
            (0, be.jsx)("p", { children: l }),
          ],
        }),
      ],
    });
  };
  const ke = function (e) {
      let { targetNumber: t, subtext: n, suffix: r } = e;
      const [l, i] = (0, a.useState)(0),
        [o, s] = (0, a.useState)(!1),
        u = (0, a.useRef)(null);
      return (
        (0, a.useEffect)(() => {
          const e = new IntersectionObserver(
            (t) => {
              let [n] = t;
              n.isIntersecting && (s(!0), e.unobserve(n.target));
            },
            { threshold: 0.1 }
          );
          return (
            u.current && e.observe(u.current),
            () => {
              u.current && e.unobserve(u.current);
            }
          );
        }, []),
        (0, a.useEffect)(() => {
          if (o) {
            const e = 2e3,
              n = Date.now(),
              r = t,
              a = () => {
                const t = Date.now() - n,
                  l = Math.min(t / e, 1),
                  o = Math.floor(l * r);
                i(o), l < 1 && requestAnimationFrame(a);
              };
            a();
          }
        }, [o, t]),
        (0, be.jsxs)("div", {
          className: "bentoStat",
          ref: u,
          children: [
            (0, be.jsxs)("h2", { children: [l, r] }),
            (0, be.jsx)("span", { children: n }),
          ],
        })
      );
    },
    je = n.p + "static/media/splashvideo.f90085090f705a74158d.mp4",
    Se = n.p + "static/media/FARLaunch2.a76fb6829ded60d41cfa.mp4";
  const Ce =
    n.p +
    "static/media/UC_Santa_Cruz_logo.c445294ae0a1b6c2ab96b5956336c22d.svg";
  const Ee =
    n.p +
    "static/media/UCSC_BaskinEng_Logo_Color_RGB.620a339131d7a3d26491ed379e40d7ba.svg";
  var Ne = n(950),
    Pe = n.t(Ne, 2);
  function Le() {
    return (
      (Le = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      Le.apply(this, arguments)
    );
  }
  function Te(e, t) {
    if (null == e) return {};
    var n,
      r,
      a = {},
      l = Object.keys(e);
    for (r = 0; r < l.length; r++)
      (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
    return a;
  }
  new Set([
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain",
  ]);
  const Re = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ];
  try {
    window.__reactRouterVersion = "6";
  } catch (Dt) {}
  new Map();
  const Ae = l.startTransition;
  Pe.flushSync, l.useId;
  function ze(e) {
    let { basename: t, children: n, future: r, window: l } = e,
      i = a.useRef();
    var o;
    null == i.current &&
      (i.current =
        (void 0 === (o = { window: l, v5Compat: !0 }) && (o = {}),
        m(
          function (e, t) {
            let {
              pathname: n = "/",
              search: r = "",
              hash: a = "",
            } = h(e.location.hash.substr(1));
            return (
              n.startsWith("/") || n.startsWith(".") || (n = "/" + n),
              f(
                "",
                { pathname: n, search: r, hash: a },
                (t.state && t.state.usr) || null,
                (t.state && t.state.key) || "default"
              )
            );
          },
          function (e, t) {
            let n = e.document.querySelector("base"),
              r = "";
            if (n && n.getAttribute("href")) {
              let t = e.location.href,
                n = t.indexOf("#");
              r = -1 === n ? t : t.slice(0, n);
            }
            return r + "#" + ("string" === typeof t ? t : p(t));
          },
          function (e, t) {
            c(
              "/" === e.pathname.charAt(0),
              "relative pathnames are not supported in hash history.push(" +
                JSON.stringify(t) +
                ")"
            );
          },
          o
        )));
    let s = i.current,
      [u, d] = a.useState({ action: s.action, location: s.location }),
      { v7_startTransition: g } = r || {},
      v = a.useCallback(
        (e) => {
          g && Ae ? Ae(() => d(e)) : d(e);
        },
        [d, g]
      );
    return (
      a.useLayoutEffect(() => s.listen(v), [s, v]),
      a.createElement(me, {
        basename: t,
        children: n,
        location: u.location,
        navigationType: u.action,
        navigator: s,
        future: r,
      })
    );
  }
  const Oe =
      "undefined" !== typeof window &&
      "undefined" !== typeof window.document &&
      "undefined" !== typeof window.document.createElement,
    Me = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    Ie = a.forwardRef(function (e, t) {
      let n,
        {
          onClick: r,
          relative: l,
          reloadDocument: i,
          replace: o,
          state: s,
          target: c,
          to: d,
          preventScrollReset: f,
          viewTransition: h,
        } = e,
        m = Te(e, Re),
        { basename: g } = a.useContext(Y),
        v = !1;
      if ("string" === typeof d && Me.test(d) && ((n = d), Oe))
        try {
          let e = new URL(window.location.href),
            t = d.startsWith("//") ? new URL(e.protocol + d) : new URL(d),
            n = A(t.pathname, g);
          t.origin === e.origin && null != n
            ? (d = n + t.search + t.hash)
            : (v = !0);
        } catch (Dt) {}
      let y = (function (e, t) {
          let { relative: n } = void 0 === t ? {} : t;
          J() || u(!1);
          let { basename: r, navigator: l } = a.useContext(Y),
            { hash: i, pathname: o, search: s } = te(e, { relative: n }),
            c = o;
          return (
            "/" !== r && (c = "/" === o ? r : D([r, o])),
            l.createHref({ pathname: c, search: s, hash: i })
          );
        })(d, { relative: l }),
        b = (function (e, t) {
          let {
              target: n,
              replace: r,
              state: l,
              preventScrollReset: i,
              relative: o,
              viewTransition: s,
            } = void 0 === t ? {} : t,
            u = ee(),
            c = Z(),
            d = te(e, { relative: o });
          return a.useCallback(
            (t) => {
              if (
                (function (e, t) {
                  return (
                    0 === e.button &&
                    (!t || "_self" === t) &&
                    !(function (e) {
                      return !!(
                        e.metaKey ||
                        e.altKey ||
                        e.ctrlKey ||
                        e.shiftKey
                      );
                    })(e)
                  );
                })(t, n)
              ) {
                t.preventDefault();
                let n = void 0 !== r ? r : p(c) === p(d);
                u(e, {
                  replace: n,
                  state: l,
                  preventScrollReset: i,
                  relative: o,
                  viewTransition: s,
                });
              }
            },
            [c, u, d, r, l, n, e, i, o, s]
          );
        })(d, {
          replace: o,
          state: s,
          target: c,
          preventScrollReset: f,
          relative: l,
          viewTransition: h,
        });
      return a.createElement(
        "a",
        Le({}, m, {
          href: n || y,
          onClick:
            v || i
              ? r
              : function (e) {
                  r && r(e), e.defaultPrevented || b(e);
                },
          ref: t,
          target: c,
        })
      );
    });
  var De, Fe;
  (function (e) {
    (e.UseScrollRestoration = "useScrollRestoration"),
      (e.UseSubmit = "useSubmit"),
      (e.UseSubmitFetcher = "useSubmitFetcher"),
      (e.UseFetcher = "useFetcher"),
      (e.useViewTransitionState = "useViewTransitionState");
  })(De || (De = {})),
    (function (e) {
      (e.UseFetcher = "useFetcher"),
        (e.UseFetchers = "useFetchers"),
        (e.UseScrollRestoration = "useScrollRestoration");
    })(Fe || (Fe = {}));
  const Be = function () {
    const e = (0, a.useRef)([]);
    return (
      (0, a.useEffect)(() => {
        const t = new IntersectionObserver(
          (e, t) => {
            e.forEach((e) => {
              e.isIntersecting &&
                (e.target.classList.add("visible"), t.unobserve(e.target));
            });
          },
          { root: null, rootMargin: "0px", threshold: 0.1 }
        );
        return (
          e.current.forEach((e) => {
            e && t.observe(e);
          }),
          () => {
            e.current.forEach((e) => {
              e && t.unobserve(e);
            });
          }
        );
      }, []),
      (0, be.jsxs)("section", {
        children: [
          (0, be.jsxs)("section", {
            className: "landing hero",
            children: [
              (0, be.jsxs)("video", {
                className: "backgroundVideo",
                autoPlay: !0,
                loop: !0,
                muted: !0,
                playsInline: !0,
                children: [
                  (0, be.jsx)("source", { src: je, type: "video/mp4" }),
                  "Your browser does not support the video tag.",
                ],
              }),
              (0, be.jsx)("div", {
                className: "headlineContainer",
                children: (0, be.jsxs)("h1", {
                  children: [
                    "FROM SEA TO SPACE,",
                    (0, be.jsx)("br", {}),
                    "YOU'LL FIND SLUGS",
                    (0, be.jsx)("br", {}),
                    "EVERYWHERE",
                  ],
                }),
              }),
            ],
          }),
          (0, be.jsx)("section", {
            className: "weare",
            children: (0, be.jsxs)("div", {
              className: "headlineContainer",
              children: [
                (0, be.jsxs)("div", {
                  className: "bentoStatContainer",
                  children: [
                    (0, be.jsx)(ke, {
                      targetNumber: "70",
                      subtext: "Members",
                      suffix: "+",
                    }),
                    (0, be.jsx)(ke, { targetNumber: "10", subtext: "Teams" }),
                    (0, be.jsx)(ke, {
                      targetNumber: "20",
                      subtext: "Industry Partners",
                      suffix: "+",
                    }),
                  ],
                }),
                (0, be.jsx)("hr", {}),
                (0, be.jsxs)("div", {
                  className: "flexContainer g30",
                  children: [
                    (0, be.jsxs)("div", {
                      className: "textContainer",
                      children: [
                        (0, be.jsx)("h3", {
                          children:
                            "WE ARE UCSC'S PREMIER AEROSPACE ORGANIZATION",
                        }),
                        (0, be.jsx)("p", {
                          children:
                            "Nested within the forests of Santa Cruz, California, the UCSC Rocket Team is the leading aerospace organization for the University of California, Santa Cruz. We design and build high-powered rockets that model current challenges in space exploration and aerospace engineering.",
                        }),
                        (0, be.jsx)("p", {
                          children:
                            "We are dedicated to providing our students with a unique hands-on experience that spans a variety of disciplines such as Computer Science, Robotics Engineering, Electrical Engineering, Astrophysics, as well as Business Administration and the Arts. We also pride ourselves in being open to any major, year, or background. Rocket Team is open to any student enrolled at UC Santa Cruz.",
                        }),
                        (0, be.jsxs)("p", {
                          children: [
                            "This year, the UCSC Rocket team will be competing in the International Rocketry Engineering Competition (IREC), formerly known as Spaceport America. Students will be constructing a rocket that goes ",
                            (0, be.jsx)("span", {
                              className: "highlight",
                              children:
                                " ten thousand feet into the air at speeds exceeding Mach 1.",
                            }),
                          ],
                        }),
                        (0, be.jsxs)("div", {
                          className: "row",
                          children: [
                            (0, be.jsx)("img", {
                              src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWIAAABkCAYAAAC8cjrTAAAeb0lEQVR42u2deZhcRbmH3zrdM5lJJiGEZMIahQSQNcgWVo0LYb0kCImigF4VjMtlERRF8HoR9LKIAj6SoCKKhl0EgQsjKIICIvsii4iQQAJDtkkmy8z0OXX/qKp09emeSZ/TPUv3fL/n6SfTnT6nT21vffVV1VdZEqittSX+kQIyQGRfAFlgR2AasCewCzAJ2AwYZb9fSprqStvfWg7sBLTb59Uz2jvLu8PMefFP3LOH3mdbAPsCewO7A5OBicAYoMH+ZrnPW4ly9vdOBa4EDgIesuWiKry3SvgcncC7wOvAc8ATwN+A17x0Bva+YdEdbp9Lv6q4XF3ZapNfCtAK2M7W472A3YD3AhOAFlvPI2C9rWOLgReBp4DHgKeBdbF2EhaVc3+nVVQTyqYEMB6Ac7ai7QUcCxwK7Aw09WNjTwK2TOJ7FzfUIAbgLYCjgZkWwptV4XkrTX/Qx33VANepsfa1PXCI/bzTwulu4FbglV6BPHNe/wGqdOeqvd/fAfSxwBHAHha6feX5SPva2taFT9t7vQb8yab1z0BXzHDRBc8jQBYQJ4SwD6VG4Bhrhe0Xg4GrbGoQYJDO0ixupMqmyaVlD+A04GPW4nXp057lqfqpY6k1ae+lLNAOsq/vAH8AfgTcb/OufwHVe9mG9u9DbNkeYut1knocT2vGdkJTgFNspzMf+AWwwv5uMGCdj6i2QVwCwn5jmQmcb4fj2huWBl4lrx2VtoKdpTYF+B9gjs0z34IKvMYn6t0S117daQCOtK8HgHOAR/oNUH1bwQcAFwLTvefMeXU4SJFWB/DIXr898APgTOAiC+Wukp2PwFhA3AeEHWhyGL/Z5cBRMSBlynV11ACEM2gVonQW+AZwLsa/7VwxGQFvKjBnPNg5S3Q68BfgZ8DZwEry/tTKYVwawqF1nVwEfD426gmqVI99iDsob2HbzueAL9t0e75pgbGAuG8IBxZAJ2AmgsZ6Dam2gVTcULNADqUnA78EDrSNJKxiIxUoF098nmLdAp8BHrT5HFZkLRaWrW9MfAC4FtjW/kbYz/U4DuTdMX7jC+1IS3udgcBYQFwE4YC87+uHwOkelGrfIuwNwmbCcQEwzrOAA6ku/aKM5w7YFvgjcIbt8NMP3Ysh7IyJ/7J1OeOV7UD5830ga+A8zGqbEzArL/IjAYHx8AVxCQhHwAgLpY+R9wHXM4T/E/ip1yjEAh4YCzlLfgnkFcBW1i2UHMalIRwC/2vdH6G952CVbeB1Podb6/go4A2B8TAHcQl3hIPwbzFLeXowkyz1mg85YC5wlTeEFD/w4AHqbMwSyNO9z9kooEqvjggxvtlTB8EK3ljnkwN2xawiORT4t7gphimIS0DY/bugLiFc2FhdY/iEB2GFLD8bTEA5t8FpwCrg2145pelgvzvEIFzqGbcH7gQ+DLwjMB7GrgnPKgkxy22cO6JuIKwL26Br8Adj1njGOyPR4MI4xPhR3wSu3uiwvbCDdWX7Bcyql3AIQjgO452BXwOHeQaBLG0bDiCOWcOuop8IfJU69JEubG6ND1knWAg3kV/3WZt9TP3B2JXFj4BnMNukS1uKhRB2xsQ0zMSc+2wod7AOxh8FLrHtr3AZn2hYWMSu8k6JVd5K5cehGEjIuVgTkQ+pS6Z8wm/oGuM7nGwbQbYKvxnfiTVQiqoI5KjCPPDjSVRS5q6zbMZsgtgfE79B9ZFON78x0l7TTHVW+fj12C9bf0ddpbB3E5ZnYLZH/x6ZvBu2rolLMLETKqm82rMuK22MlVqIBcPRV+67AGbNd5V7NnB8FSx/f1PLYE3wBX2Uadp7VauD0BXki3MxTLUuhm/h774rvSMytN+bWoUONiTZLruwStb3pZj11B0b6XhEdQRiB6ZjgFkVQthVRGeNvgg8DDwPLPEsmkqHreV+rxuzW4vObLNm1nxnZY3GTOJQwfNEXv6BmWR5BBNt7HXbiHSKtOkUz6QxMRKeiXUOSa5XwBrMrq937P2SWsctmAA4UzGbYbaN5VUayLv8PQO4ARPRLSjxbA7Cu9mhPRXU43jZ/hv4q83fNzFBjBowrq33YWKt7IlZaaQraENuvfMOwFkYH3kgLor6B7HyLMJzKgSTq3zrbYOZb6HUA1B2+Mn+UN5ycpV6LiZcZ1qLyQfL3zBrX/8PE9TFwHSgh5EmjZkKXRQ9mKVUi4GA2+dGKfMZ6xb4APAVTFwJlRJQvovibMwGCNVHB/0NjM8/LQzdddq6B36MCSm6bsM3in3TysLzJMwuwfEVWMfumb8MXIO/pE3cE3ULYgem4zC7fNJUXueKyFjf1qnWAlbesFS1tbYM1vAqnHrvXLac8RMVqiAENgG+VIGF5vLoXWu1/DoGZrPutXTc2/5WNUYbjRvSMnOeSnkPbcHVBtyLWZZ1JWZlQJo65sppDmZFz1Mxq9jV4/dbl1OlZfsP24H8KV6PY2WrvOtesS6Ry4HvA5+l0K+cJP9ywKa2nn4NWclT9yB2FSVtN+tD+EKUOhet/V49Guxh1ZKmzZhx4I8gyjl/43GYIN9pgOCueQTjX3a7ofwA+dEgJrcaPurQK7tK0uKvfPgjZhXDfOCTKfLewakBONkCSpXogE6230kz0nHPtACz7K0zYT12nfBSTGCf+4Gfk25FjvvdT2HmbdoLOgGxiusOxBrYB/hgyobsLIXTgcvROh4mcoMGzTUx81KIcj5gTqzQ9XIfxpe+hnhwmvjQdXDcL9VVkrQUPoMGHVpGZoC1FizLMDEfksLYfXcWZuJuecwiHYeZ50hTj92zXGlHdG6eI+wzTwrT61vnDRbo7cDtmFUcSXz/zh2zhU3v1YivuK5BjFd5k1oRrvJeYIdjRVAaVL9wYUNxw9hdMTFokw5dndX/rLWo15Cf0R9cAA8l+emfOc/njj+Je6oFzHEJYezD6RDgRgoPKpgBbJ4C8O77t9hny5Q0JkqVbVF6C0YSDbbTPsneO61mWxBHgqz6BXFA/jibIEXlbaNwZnfoQLh42Bhh9vM3JGysLkzhOjvk7CiylmSoWI7V6A/P52L8uZNJt5HmKAtiX0emeErXwf7LuiNceUeJy/b2uXELuce2sVuBi4GvJ6x3Lk/2A95j3WCBALk+QbyztRIh2UGXbnXE17xroyEKYX/Y+OEKGusPgceJxz0QCCcBlIt6tgz4JnBTwru5OnoAJlj/Gvt+lDfSSTOx9U3r6qisbIth7Drr72JOtdkxQcfjRgAtGP/6GxvSJn7iugPxviSfTHDL3X5th+oFlXcIQth1EmMxQbmTWP+u03kb4z9ELOGKYeyOIroZc0rFQQnhBOakmB2BJ+37He1nSUDsfvMv9llUVTrYwrRq2z46bUc+j2RLC7XX8dyErJ6oWxDvmfI6MGscGeKWsGuYGrNSYusUjTVjh8Fvky4KmKgYUM6VdY0FsU5Qlm54v4sH4l29TjKJywnMygb/mSrvYAvT6jruW4D/xvi4y524c9/ZreBeYgDUHYh3STFMDzA7jB6LVeihKleZp8TSUI7c935XlFZpDJXIdd5tmJ2PYxPASXtWMLG/y62LbqSz0j5DgUFR5Y7H/dYyzOTdiZQf79ofATRh3IGKmfO01L/6AvGklMO5hz3rIxzC1rCftm0SgtiB4W3yW4cjgXDV4KSAtzBblg9OAaf3eJ+lqcduFcxi/HgO/Vu2fybZ8kmXnnGY7dSLAq3V1c9coicVn7KeSEO4vQ5LEI9PWIHd955LeN1Q0MQUVlsGeA1/67KoWnKugBcsiHUF5Zm0bN1v/aPILdG/ej420ipXI4GxDTpcNKP9sWDSuvaAdDFJNqxsamttERgPIRCPSmldLq4Rt4T/jKNTXv/OADfW4aJ4XUqqUb38nURv9atBUTgCwLon1lL+Bg/X+WeBph6V4a6J++u7Ju4flmu5lziBRwmMhx6I026JXVuDw5y0J410FjUuUTW1JuV1mV7+Tl2PB6Bsu7BBsBJX3ijX8KGlT/Gl12/fbWS4/qO0tqxLYFkr+7sLMOvgN6xHFhgPDRAPJ6Vd7dBc8E7WcFZbzSmvM/56rUGlNmgHakRX8e+MiHqCHTsX0Rj1TMfEn0iyE9bNixwJHBvqoCujIoGxgHhQhsBpLa/WgoYvqjacJqa83lizZ8+Fi+cPjwxTCo1yFnVIMpdKjwXxrRkVHRuguyKUwFhAPOBqT/h9N+zbFuNfXo1M2PUHiHeKdZjl6l0ALrlaDa8s0/5pLEmDJuUcjCPUsaC7EBgLiAe4wb+ZsMH7y952xYS+lFCElagwjm+EOZYrzW5HgIUbXBOiJG3ewfgWUMdh/NYCYwHxgIH41YQNHvJ+uCMtiCXoSnXkVqB8COP6SbLJxnWQr6S0pKXdm3p9FGZr92yBsYB4IEH8b8xStImUvwbTweF4TAStVWIVV2wN+2Xy2dj7cofYYNYfQxBERNI3poTxfwiMBcQDCWJ3csILFsTl7uJyltt2wOeBy/DjEAuM00DY7cb8KHA4yU55dh3om5iDaSEMK1k1ITAWGAuIB3goHAEPYEJh6oTXggmV+DvMTrt8PGKBcRIIu6A9TZhz3SDZDjHXgf4NFxdaKdlkUx0Y3wTMQdGFFhgLiPtHbux6L3B+wrQ7eIzHnLl2GHmfZlQAGwFybwB2+ehGExeT/rBagLu9e4qqA+OjgZvQzEbTjRIYC4irpeItpn/HBHffm2QTRP5w+heY428gflKHALm3s/PcwZo54GzSnVnnXBjLgXtiHayoejC+GcVsDd1K3BQC4ipLe5VtgQVx0nVPDronYmIFfIbCk37DXmFUz2Du+9DSwBtRRMCFwDmU76Mv5Za4ExOfovfDPUUVw1iZMwV7EBgLiKss12gXAN/ALJtKujvJ7dk/Fngf5uy1v3j38IOqaHIhZDNw9FVwxxcHyyVTbozfTMzC3HhHdfR887UoMvsCVEEeROTPf5sC/BhzZmBB407QkTr9rJd0JklvVHYaq28QRCnLJp4XEdV3zQRAt4XxjcAc8ieqSKAgAXHV3BMZzBK2n1nLDJKHJHTf3wV4CLgLcwzOw5gDRgcirm25zxiQLNh6Ntap9A2qO75QyjrW3ghkqu2sTgRG2M/TBF9yboy7bJ7HQZ6NuUDKzZ+BagMuL1XsWcsuGw2up8t49wz64Vkbbd4eY0cfx2LCAyhAC4SHMIjbKgxS3e965CzebRzLt3b6fPT66PeiwnVXatR0zMkQuZSWhTsifjdr7T0O/FWhHw20Xjj6iEs7rn3q++Gbza1su2YJDbp/T1gKH/06J+x5rl42YhxK96zRqJesdZPE6lodaN0dZZuY1LlQz3vmMrJ9lK0GXh21NQcuf4lZ+35HLdLh6EgFW4LaS5sYw9Mwk5yvWks4bZQ0bQFxISrDZl0r1LQVL+oG3aNu326OZu3iV4FNLTDKgVMOE2y9HRUwuqeT6578HiP7oR7nHj2bL079qn6jZRJBbn1PpNQLmC3zYYKyaQzyUQDfBV7HnC6SqdJj6l7yaBfgW57RotpaW2QrY5kqt9OqBMSqn3vlqmtC90quefoiVjSMVvdN2LP9vJfvOWjT7gxNUXo346Lmsfpfo7KsaBihTtvtCyNXZUc1BUTRmJ616w9tf4zRubXB5DWLyej+d2VmdMT1T5xPpAhG90TPHrB87c7lrgsLlSKjNc+OGcuKxpzqCghUYTn3Wgm2XbuEFQ1NnPLG77l2m8O6lzZu8naoMvc0R113fHDpM2saIx2d8OYzzGh/OdUwOlKKiAwrG3LM3eN4dWj734OdV78erck0K9Cc+tptaov13Z/aaXUPkYJAl5NeyGh4dpNGljQ1BoFONHGbzNrRIT99+hI0qBER7eO6MwfstqpjQ56XQ0gFPDJuJKsagiDQXK811/dZLiplay7+cY2ZD8l6HUc9r1SJvBxRfTCvVAemvfd6YwaqD+lKQOzIome0d9bYzPU6WHwPVxUkI+2tVhpnBGiWfHuNtchYAVxtX+4LQ1oOCKtWQlq/6dIn4JUn1mPOVaMD42QEuK53q6vMZ8sZ2/6x6/WtG/5jtS7LruvL/uvoho5uPah5Xq6Wr02fh5VpbYocrnXppGlta21BadCqwEBV3r0K7ulDOg2IndVwqR0iZYe8W0IkEok2Dt2RmKWVD2E2fX3X2lQ5a1yst53SGusWWmX/fzlm1+4Kreiwn/X0YuW5tfRu0lZXahHvIeUnEonqyCURkI+NvQVwAMnWundZOK/ELK9cCPwLE5zqFfv3SgoPqMgAUbbCBxenvUgkqicQOyvWwTIsYT371q37V2FWBU2wr+1L3P9dTHyUR4D77b9rAVUJiAMpO5FIVCfqbWIuQ7KAVL6rQ3v3ctb2RGA6Jm7NG5hppCuzkv8ikUhUVZirPkDtPAkBMAmz03SOgFgkEokGWQJikUgkqo425ppwKyacquKakMk6kUhUL4pv6HFsSzJZ15drIsIcXiyTdSKRSNSL/Mk531uQZLKu3OVrvipevvY0dkOHlKFIJKpxl4Lb0PGO/WwJJoiXv6FjnX31uqEDCjZ09AZ8f0NHSEqIOhP+LGteZ2a0d0pMWJFIVE/6o32VrbbWFn/7R19bnIuif1VizW4IxdfW2iJuivgYJWhgq/Ur9JXbzgzaWvduWpNpHgEwvrtj7at/OH+9Vop1mQaaw56KAqh0ZDfRp+3+oeDTi+6lR2VRaCIFY3oivf/ytWVHsnEBaF4YM4ZljZFaH5Qf2SVUAVkdsrRxLOfvcFJD+4hNm3Iqk22OuroPXvbsmqwmmvPW88xa8nzqoD+hytAd5PjM+z+hZrz7ODuvfl27oD8NWrPVuvV6h84wbdAfFQzAbIcGmiLYrDvQu6xaVXbQH5cmG/RHBdqG4unjd6oc9GeUHXYnjd1di6os6E+mYMKuTwO1WkF//B+U42oKMkbx2KY7cf6LD3Prlh+gM9M8Uis1WaMOWNnQchCz5k9VM+cpO4xJG70uApqBZ5ui7uN/eeZtuek/maueHTNZLR8xLlK6Z6pG3YAJlUMZDcgPg3lMlG16e1LnQjXvmct0diOR495qmkBj1MONW31Y/bNl64ZQBZuD2quDUQffvOX0acCE67ea3mGfJVtBXWsEPnfLVh95eLOuFZlpK16MGnQPNgzmAmAfkofB/DYq+NXons7sdU9+LzcyXF/1+pBTGb449avqjZZJOsit3zxS6jbKD4O5Ie2jc2s/9elF9z55+DuPfrKB8EJ6CYOp0rdmXSKPWjExm86JWXfDxV1RkQYiDGaqHxw2an+Y7wLcdWbIzHnvYvzpjwI/B2ZY186+JDvBuBSMd1gfNN7KTfNveGD8+w2AdA6NGoU5QaTc+7vvrY6UaiTsYmHzRHXEfhfpjQe4t2W/6FoN13Yyc97LwMuYU4F3xwSGP4l8YPi0sZ8zwDno8KhljWP03ROnmedeuxjMCSBTKD82QM7W/1Z0xOrsSGbte0H/BPM3wfIVYZeOlGrAxPgdnbRsIpSLrjUBeK+Xhv6yDAPMYbsX+s8ibb36kom2/lDp04udNdEB3Gxfc4ArMNse0wRNd4HpTwduiEEo7XE8udhop5L05oCngFOAizDB8w8jf1SSSpHeIzEB5x+i8My6XML0RrHrBsLCIuYjTFQ2CiJ7m7CfR6M5O/q4DTkqSUBcs8ofzVRqmOO7Im4CHgNuAfYi+anGgb3vNGtlt1EYuASSH5UUxICqU0Innt5/AYcDF2BOfEgTiN2l62QLYv8Z/aOhkhyVNNA+T0X6Y6zi3oeA6i8jdRC+A/i4fV9wLJVAWEBcWzAubTX6Tvws5sibQ4C7gf1SwNidbHyiBfFQSqtveTponItZ9nNRyo4HaxVvBbzldUai6kA4ayE8mxKHvAqEBcT1AeZCSOUsiFZgDmh8CNguobXovncoZmKlfYim1e3EzAIXW5CemhDGyn5/nE3vNSQ/DVpUBoS1plspgbCAePi4LUJbDosxk1ptCYfLDk4TgAMxfr2h2vn4o4GvA/tjVjqkcVMcaUEs1nB1ITwHBMIC4uFpHbuG8AcLl88mtBQdjKYPKRCX7nzcpGAXJibrfQk7HgfsfYFNgA60TrFwVhSre7+3EO4Sd4SAeDhbx67iX4bx9zZQ/vImB6d9aiStbrXH/Rjf+BEJOh6XH1sDOwGPkslAJN6JCiE8WyAsIBblh+cvWMv4CPITceXCaTvyfuKhZyIWwtg93zU2rUme10F7V+BRokh2dgqEBcSiqsPpdguncuWuawW2HLIgLu54AB7ABFqZSLINDgA7xN6LkkH4TmC2hi4lEBYQi4oA85hn9ZULJ2dRb4mJjDc0QZzveNza32XAcxbESUcA25h3CrSwOCGE7wKOU+guUAJhAbEoBieAf2O2RG+eAuLjayjlDqgvAh9NYdm2AnDbKZpZ84dJZVGASrsrMMLMPdwFHKvQXVogLCAW9ao11lLcnOSxGVpikKsFEL+d8vpmwHRiw2TVhNIahW6wb5MELS+AcKiDroyKBMICYtFGGk13ymszQz51xWup04Y8Cza4JoaBuoKG6OWWbfjI0icfyIbh1zBBysudqFSYnXILAIHwEARxmLLxjvTfSCCQqioDNKW8tkeyrz7VE2R1W+s+tLXu8xzwdLmR4tpaW4p8GwLhoQfiNcCYBNc4P96WNTQErjWNxuyUS5O/nbFyEtVTg9UhBy97Vn3zn7/J0tqSJqRo6NcNgfDQAfFSC+KkS4d2kwZfJRUuX9OYuLrjE4LYfa9dMrR+lVMZHhi/hz75jTvD8d0dFd1LIDy0QLwQsxEg6S6uAyiMByvuicrl/HYHetZLOW4jtxQsxMSskA6yjqVRfHKv8/oniL1o0ED8AiZGQRJYAEzFbKl9FImAVQ1rGC8PZ6a829sCYpGoNkH8ZJoRkr32c3EQi1WcGsJudHEA8EHvs3LkNkK8gjnaW0AsEtUYiP+OWT7UlMA94QBxAuaon+cExlXT2QndEj50/ybZJxLVrmvieWDvBCB2MXCbgEsw55C5z+Vcq2SWsCuHnO3Yjqb8rb5Ozl30J8lckag2QRxhon3tTbIA3W4ofShwPvBt8uuSBcbJIbwrcLnXoZUrN1G3EOMmEolENQhigN9hgnQn3WmXsfA+DxMb4UoP7hvcFE7DFsrF8HWwdacmb48JRziO5KdVOOv5TsxZcI2k35UnEokGCcQKE+3rQeADJN9p53bpXIEJwnKeQqNR7h4Fy9sGQ4uaW7l08sd5afQk9ODvP3GHaEYWwvsDN2POcEuzy9F9/zrPQhaJRDUGYrf+9CoL4qRSHnDPBfbXqFOBf5DfTumODR8USIyIesLmqBsFgR6cnYB+HmkL4JHAWcA5wAiS+4XxwN1GbS8jlM5DNOxB7BruLRYMe6UYHisP6B8BnsAEF5mPWR6XG1zXRCcs+gGDBqlC18RWmBMRvgJMJu/GSXPKhAP8D2PvRSJRjYHYHeaYA74H3JrSQnE+z9BaeJ8FPmMt44eB59taW5aQj7RVqRWky7CyFdDzzohNH7xs8pz1T28yZapGbYsJjKNSpjGpMhjf7xTMgZf7YmJJuBONg5T3ddbw7cA9XkeYkWotEtUeiPGA8FvbsGdW0KgzMcjsal+DMdxVQIdC7xxovVjBqdp0EDkGNwRo6HVcadOWAdZiJkpFIlEdgNjX14CDrRWXJroTMchEnktgIA951HkLXWltUpEr8UwD9SwuL4MqWK2hLbsLMJtpCmJ+iESi2gWxmyz6J3AG8EvSTSDFFQwwgIm5PvyhfzDIz1QNOWu+Dfg++c01IpGoVkE8o73TX1bm3BG/At4PnD4EhvGiYkv4NYz/3Y0+ZNWBSFQvrgm1tBM9viWyjftM4D3AMZjJrQbJrkGHcAboAD4OLBGXhEhURyB2VrEe3+KG9G6TxvHAbcDhAuMhAeFO4GPA40UQLj4HTiQS1ZpFHHNRuPgFXbbhL7CWcc4CQNarDpyca2iZLYsHycenEIlE9eaaiME48mA8G/gBcBr5FQeyXrV/5fLZRcg7DnipJITlpAaRqH5A3AuMnfV7OmbH3JXAJuTXwgaSjVWV9jrBLPAb4MsY33BGICwSDQMQ9+KmcJbZdZhdclcAR5DfuIFYyFWxgJ1/PoM58uhM4Abyy+1CgXCBxEUmql8Q9wJj5x9+DTgS4zM+H7NrTlO8ZVcaSXnWr59nAbAaE4DpYoxfOONBWiAsEg0nEJeAMTFo3AbcjZlA+i9gP4o3iGgPysMdzNqDqfby0U1+LsFsorkKE+Td7cATK1gkGs4g7gXGkeeK6AauB24E9sRMKM0AdsYE/hEVDqNVDMxvAg/ZTu1eTGB35VnBkUBYJBIQb4AxUMo6VuRDaT5uX+cCOwHTLJx3AbYBxmNi8NaSL1lX6R5dwEpr9b4CPIMJxv+k/dwvj0isYJFoeOn/AR07mdCOaPpBAAAAAElFTkSuQmCC",
                              className: "ESRALogo",
                            }),
                            (0, be.jsxs)("div", {
                              className: "UCSCLogos",
                              children: [
                                (0, be.jsx)("img", {
                                  src: Ce,
                                  className: "UCSCLogo",
                                }),
                                (0, be.jsx)("img", {
                                  src: Ee,
                                  className: "BaskinLogo",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, be.jsxs)("div", {
                      className: "column",
                      children: [
                        (0, be.jsxs)("video", {
                          className: "RocketVideo",
                          autoPlay: !0,
                          loop: !0,
                          muted: !0,
                          playsInline: !0,
                          children: [
                            (0, be.jsx)("source", {
                              src: Se,
                              type: "video/mp4",
                            }),
                            "Your browser does not support the video tag.",
                          ],
                        }),
                        (0, be.jsx)("figcaption", {
                          children: "Fullscale Test Launch, February 2024",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          (0, be.jsx)("section", {
            className: "projects hero",
            children: (0, be.jsx)("div", {
              className: "heroOverlay",
              children: (0, be.jsx)("div", {
                className: "headlineContainer",
                children: (0, be.jsxs)("div", {
                  ref: (t) => (e.current[0] = t),
                  className: "heroTextContainer",
                  children: [
                    (0, be.jsx)("h2", { children: "PUSHING LIMITS" }),
                    (0, be.jsx)("p", {
                      children:
                        "Even without an aerospace department, the UCSC Rocket Team pushes on. From competing in the most prestigious rocketry competitions to researching groundbreaking thrust-vectoring designs, our team is the embodiment of success in the midst of challenges.",
                    }),
                    (0, be.jsx)(Ie, {
                      to: "/projects",
                      children: (0, be.jsx)(xe, { label: "Explore Projects" }),
                    }),
                  ],
                }),
              }),
            }),
          }),
          (0, be.jsx)("section", {
            className: "upcomingEvents",
            children: (0, be.jsxs)("div", {
              className: "headlineContainer",
              children: [
                (0, be.jsx)("h3", { children: "Upcoming Events" }),
                (0, be.jsxs)("div", {
                  className: "eventsContainer g10",
                  children: [
                    (0, be.jsx)(we, {
                      day: "20",
                      month: "November",
                      eventName: "Giving Day",
                      eventLocation: "Online",
                      eventTime: "ALL DAY",
                    }),
                    (0, be.jsx)(we, {
                      day: "22",
                      month: "November",
                      eventName: "General Meeting",
                      eventLocation: "Baskin Engineering E2 180",
                      eventTime: "5PM - 6PM",
                    }),
                    (0, be.jsx)(we, {
                      day: "5",
                      month: "December",
                      eventName: "General Meeting",
                      eventLocation: "Baskin Engineering E2 180",
                      eventTime: "5PM - 6PM",
                    }),
                    (0, be.jsx)(we, {
                      day: "14",
                      month: "December",
                      eventName: "L1 Launch",
                      eventLocation: "Tripoli Centeral California",
                      eventTime: "ALL DAY",
                    }),
                  ],
                }),
                (0, be.jsx)("span", {
                  className: "infoNote",
                  children:
                    "For individual subteam meetings, please refer to the events calendar!",
                }),
              ],
            }),
          }),
          (0, be.jsx)("section", {
            className: "outreach hero",
            children: (0, be.jsx)("div", {
              className: "heroOverlay",
              children: (0, be.jsx)("div", {
                className: "headlineContainer",
                children: (0, be.jsxs)("div", {
                  ref: (t) => (e.current[1] = t),
                  className: "heroTextContainer",
                  children: [
                    (0, be.jsx)("h2", {
                      children: "EMPOWERING OUR LOCAL COMMUNITY",
                    }),
                    (0, be.jsx)("p", {
                      children:
                        "Not only do we love rocketry, but we share our love with the wider community. From visits to grade schools, to partnerships with local companies, we're deeply embedded within our community.",
                    }),
                    (0, be.jsx)(Ie, {
                      to: "/outreach",
                      children: (0, be.jsx)(xe, { label: "Learn More" }),
                    }),
                  ],
                }),
              }),
            }),
          }),
        ],
      })
    );
  };
  const _e = function (e) {
      let { team: t, type: n, info: r, photo: l } = e;
      const i = (0, a.useRef)([]);
      return (
        (0, a.useEffect)(() => {
          const e = new IntersectionObserver(
            (e, t) => {
              e.forEach((e) => {
                e.isIntersecting &&
                  (e.target.classList.add("visible"), t.unobserve(e.target));
              });
            },
            { root: null, rootMargin: "0px", threshold: 0.1 }
          );
          return (
            i.current.forEach((t) => {
              t && e.observe(t);
            }),
            () => {
              i.current.forEach((t) => {
                t && e.unobserve(t);
              });
            }
          );
        }, []),
        (0, be.jsxs)("section", {
          className: "splashImage projectFeature",
          children: [
            (0, be.jsx)("img", { src: l, className: "backgroundImage" }),
            (0, be.jsx)("div", { className: "overlay" }),
            (0, be.jsxs)("section", {
              ref: (e) => (i.current[0] = e),
              className: "contentContainer",
              children: [
                (0, be.jsx)("h2", { children: t }),
                (0, be.jsx)("h4", { children: n }),
                (0, be.jsx)("p", { children: r }),
              ],
            }),
          ],
        })
      );
    },
    Ue = n.p + "static/media/bluebackground.adc7d36dace13adfaebb.png",
    Ve = n.p + "static/media/loading.59d76a8e87aafa937d2f.jpg",
    We = n.p + "static/media/payload.6e64fc74f082df503766.jpg",
    He = n.p + "static/media/avionics.2763e6764b30c688d220.png",
    Qe = n.p + "static/media/gcs.e945a6aa5acda72df030.jpg",
    Ge = n.p + "static/media/rocketsim.4c320b1b613dd379d68a.jpg",
    Ye = n.p + "static/media/IMG_1667.12d712596697fc01fba3.png",
    Ke = n.p + "static/media/RocketTeamLogoWhite.9de6e80ce551f9048576.png";
  const qe = function () {
      return (0, be.jsxs)("section", {
        children: [
          (0, be.jsxs)("section", {
            className: "topImage",
            children: [
              (0, be.jsx)("img", { src: Ue, className: "backgroundImage" }),
              (0, be.jsx)("section", {
                className: "pageHeadlineContainer",
                children: (0, be.jsx)("h2", { children: "PROJECTS" }),
              }),
            ],
          }),
          (0, be.jsxs)("section", {
            className: "contentContainer",
            children: [
              (0, be.jsx)("h3", { children: "Competition Teams" }),
              (0, be.jsx)("p", {
                children:
                  "The UCSC Rocket Team has a rich history competing in rocektry competitions since it's founding in 2017. The team has previously competed in the NASA USLI competition, where it has placed high and even won awards for outstanding design and sportsmanship in 2018, 2019, and 2021.",
              }),
              (0, be.jsx)("p", {
                children:
                  "Beginning in 2024, the team has taken the step up to the International Rocketry Engineering Challenge, formerly known as Spaceport America. Over 150 teams compete annually in what is widely considered one of the largest and most prestigious competitions in the world.",
              }),
              (0, be.jsx)("a", {
                href: "https://www.soundingrocket.org/2025-irec.html",
                children: (0, be.jsx)("span", {
                  className: "infoNote",
                  children:
                    "Learn more about the International Rocketry Engineering Competition",
                }),
              }),
            ],
          }),
          (0, be.jsx)(Ie, {
            to: "/irec/vehicle-systems",
            children: (0, be.jsx)(_e, {
              photo: Ve,
              team: "Vehicle Systems",
              type: "IREC Competition Team",
              info: "The heart of our project. The vehicle team designs and constructs the airframe of the rocket.",
            }),
          }),
          (0, be.jsx)(Ie, {
            to: "/irec/payload",
            children: (0, be.jsx)(_e, {
              photo: We,
              team: "Payload",
              type: "IREC Competition Team",
              info: "The soul of any rocket. The payload team designs what exactly will be going up with the Rocket. From drones to variable roll-control, this team does it all",
            }),
          }),
          (0, be.jsxs)("section", {
            className: "contentContainer",
            children: [
              (0, be.jsx)("h3", { children: "Project Teams" }),
              (0, be.jsx)("p", {
                children:
                  "In addition to our competition subteams, our team also works on projects to be integrated into a future rocket.",
              }),
            ],
          }),
          (0, be.jsx)(Ie, {
            to: "/technical-projects/avionics",
            children: (0, be.jsx)(_e, {
              photo: He,
              team: "Avionics",
              type: "Project Team",
              info: "Percision control in high-powered rockets. Designed to gather and transmit data with dead-reckoning accuracy.",
            }),
          }),
          (0, be.jsx)(Ie, {
            to: "/technical-projects/ground-control-systems",
            children: (0, be.jsx)(_e, {
              photo: Qe,
              team: "Ground Control Systems",
              type: "Project Team",
              info: "Developing state-of-the-art visualization tool that can interpret real-time data.",
            }),
          }),
          (0, be.jsx)(Ie, {
            to: "/technical-projects/thrust-vector-control",
            children: (0, be.jsx)(_e, {
              photo: Ye,
              team: "Thrust Vector Control",
              type: "Project Team",
              info: "Reduce, Reuse, Recycle, Rockets.",
            }),
          }),
          (0, be.jsx)(Ie, {
            to: "/technical-projects/simulations",
            children: (0, be.jsx)(_e, {
              photo: Ge,
              team: "Simulations",
              type: "Project Team",
              info: "Computer simulations involving: ",
            }),
          }),
        ],
      });
    },
    Xe = n.p + "static/media/rocketlaunchfeb.1b3c99c33c6a362f2e88.jpg",
    Je = n.p + "static/media/LeWireframe.7495d4f90d9eeb37d46c.png";
  const Ze = function (e) {
    let { name: t } = e;
    return (0, be.jsx)("section", { className: "skill", children: t });
  };
  const $e = function (e) {
    let { active: t } = e;
    return (0, be.jsxs)("section", {
      className: "sideNavigation",
      children: [
        (0, be.jsx)("h5", { children: "IREC 2025" }),
        (0, be.jsx)(Ie, {
          to: "/irec/vehichle-systems",
          children: (0, be.jsx)("h6", { children: "Vehicle Systems" }),
        }),
        (0, be.jsx)("hr", {}),
        (0, be.jsx)(Ie, {
          to: "/irec/payload",
          children: (0, be.jsx)("h6", { children: "Payload" }),
        }),
        (0, be.jsx)("hr", {}),
        (0, be.jsx)("br", {}),
        (0, be.jsx)("h5", { children: "Technical Projects" }),
        (0, be.jsx)(Ie, {
          to: "/technical-projects/avionics",
          children: (0, be.jsx)("h6", { children: "Avionics" }),
        }),
        (0, be.jsx)("hr", {}),
        (0, be.jsx)(Ie, {
          to: "/technical-projects/ground-control-systems",
          children: (0, be.jsx)("h6", { children: "Ground Control Systems" }),
        }),
        (0, be.jsx)("hr", {}),
        (0, be.jsx)(Ie, {
          to: "/technical-projects/thrust-vector-control",
          children: (0, be.jsx)("h6", { children: "Thrust Vector Control" }),
        }),
        (0, be.jsx)("hr", {}),
        (0, be.jsx)(Ie, {
          to: "/technical-projects/simulations",
          children: (0, be.jsx)("h6", { children: "Simulations" }),
        }),
        (0, be.jsx)("hr", {}),
      ],
    });
  };
  const et = function () {
    return (0, be.jsxs)("section", {
      children: [
        (0, be.jsxs)("section", {
          className: "splashImage",
          children: [
            (0, be.jsx)("img", { src: Ve, className: "backgroundImage" }),
            (0, be.jsx)("div", { className: "overlay" }),
            (0, be.jsxs)("section", {
              className: "contentContainer",
              children: [
                (0, be.jsx)("h2", { children: "VEHICLE SYSTEMS" }),
                (0, be.jsx)("h4", {
                  children: "International Rocketry Engineering Competition",
                }),
              ],
            }),
          ],
        }),
        (0, be.jsxs)("section", {
          className: "contentContainer",
          children: [
            (0, be.jsx)("figure", {
              children: (0, be.jsx)("img", { src: Je, className: "wireframe" }),
            }),
            (0, be.jsx)("figcaption", {
              children: "Celsius 01 Fullscale Design, 2023",
            }),
            (0, be.jsxs)("div", {
              className: "flexContainer g30",
              children: [
                (0, be.jsx)($e, {}),
                (0, be.jsxs)("div", {
                  className: "textContainer",
                  children: [
                    (0, be.jsx)("h6", { children: "Overview" }),
                    (0, be.jsx)("p", {
                      children:
                        "The Vehicle Systems Team leads the design, manufacturing, and testing of the main launch vehicle, including critical components like the airframe, fins, and propulsion system. Our team prioritizes structural integrity, propulsion efficiency, and overall flight readiness throughout each stage of the design and building process.",
                    }),
                    (0, be.jsx)("p", {
                      children:
                        "Clear and consistent communication with other teams is essential to the smooth integration of subsystems within the final launch vehicle. We prioritize the safe housing and deployment of the Payload while accommodating space and functionality for student-developed avionics, ensuring a successful performance during the competition flight.",
                    }),
                    (0, be.jsx)("h6", { children: "Recovery" }),
                    (0, be.jsx)("p", {
                      children:
                        "The Recovery Subteam is a specialized branch of the Vehicle Team focused on designing, testing, and implementing systems to ensure the safe return of rocket components post-flight. Our primary objective is to minimize damage during descent and landing, enabling the reuse of critical components and enhancing overall mission sustainability.",
                    }),
                  ],
                }),
              ],
            }),
            (0, be.jsxs)("section", {
              className: "skills",
              children: [
                (0, be.jsx)("h3", { children: "Skills used" }),
                (0, be.jsxs)("section", {
                  className: "row g10",
                  children: [
                    (0, be.jsx)(Ze, { name: "Computer Aid Design" }),
                    (0, be.jsx)(Ze, { name: "OpenRocket" }),
                    (0, be.jsx)(Ze, { name: "Computational Fluid Dynamics" }),
                    (0, be.jsx)(Ze, { name: "Composites" }),
                    (0, be.jsx)(Ze, { name: "3D Printing" }),
                    (0, be.jsx)(Ze, { name: "Flight Simulations" }),
                  ],
                }),
              ],
            }),
            (0, be.jsxs)("div", {
              className: "bentoContainer",
              children: [
                (0, be.jsx)("div", {
                  className: "column",
                  children: (0, be.jsx)("img", {
                    src: Ve,
                    className: "bentoImage",
                  }),
                }),
                (0, be.jsx)("div", {
                  className: "column",
                  children: (0, be.jsx)("img", {
                    src: Xe,
                    className: "bentoImage",
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  };
  const tt = function () {
      return (0, be.jsxs)("section", {
        children: [
          (0, be.jsxs)("section", {
            className: "splashImage",
            children: [
              (0, be.jsx)("img", { src: We, className: "backgroundImage" }),
              (0, be.jsx)("div", { className: "overlay" }),
              (0, be.jsxs)("section", {
                className: "contentContainer",
                children: [
                  (0, be.jsx)("h2", { children: "PAYLOAD" }),
                  (0, be.jsx)("h4", {
                    children: "International Rocketry Engineering Competition",
                  }),
                ],
              }),
            ],
          }),
          (0, be.jsxs)("section", {
            className: "contentContainer",
            children: [
              (0, be.jsxs)("div", {
                className: "flexContainer g30",
                children: [
                  (0, be.jsx)($e, {}),
                  (0, be.jsxs)("div", {
                    className: "textContainer",
                    children: [
                      (0, be.jsx)("h6", { children: "Overview" }),
                      (0, be.jsx)("p", {
                        children:
                          "Throughout the 2023-2024 NASA SLI competition season, the payload team designed, manufactured, and configured a large (minimum 5-lb) folding quadcopter drone. The goal of this drone was to successfully land 3D-printed astronauts, known as STEMnauts, from a height of 400 feet without using a parachute or streamer.",
                      }),
                      (0, be.jsx)("p", {
                        children:
                          "This year, the Payload Subteam will focus its research on a novel fin actuation design for controlling the roll of a rocket, called Aerodynamic Fin Roll Control (AFRC). Our design utilizes a capstan mechanism to ensure precise and accurate torque control. Additionally our design follows a tail-end actuation instead of a wholle aft fin movement to allow for easier integration into the rocket. Before this design is integrated into the main competition vehicle for future competitions, we will simulate the roll of the rocket using the payload.",
                      }),
                    ],
                  }),
                ],
              }),
              (0, be.jsxs)("section", {
                className: "skills",
                children: [
                  (0, be.jsx)("h3", { children: "Skills used" }),
                  (0, be.jsxs)("section", {
                    className: "row g10",
                    children: [
                      (0, be.jsx)(Ze, { name: "Computer Aid Design" }),
                      (0, be.jsx)(Ze, { name: "Control Theory" }),
                      (0, be.jsx)(Ze, { name: "C Language" }),
                      (0, be.jsx)(Ze, { name: "PID Control" }),
                      (0, be.jsx)(Ze, { name: "3D Printing" }),
                      (0, be.jsx)(Ze, { name: "PCB Design" }),
                    ],
                  }),
                ],
              }),
              (0, be.jsxs)("div", {
                className: "bentoContainer",
                children: [
                  (0, be.jsx)("div", {
                    className: "column",
                    children: (0, be.jsx)("img", {
                      src: We,
                      className: "bentoImage",
                    }),
                  }),
                  (0, be.jsx)("div", {
                    className: "column",
                    children: (0, be.jsx)("img", {
                      src: Xe,
                      className: "bentoImage",
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    },
    nt = n.p + "static/media/blaze.027ff799e999905e5474.png";
  const rt = function () {
    return (0, be.jsxs)("section", {
      children: [
        (0, be.jsxs)("section", {
          className: "splashImage",
          children: [
            (0, be.jsx)("img", { src: He, className: "backgroundImage" }),
            (0, be.jsx)("div", { className: "overlay" }),
            (0, be.jsxs)("section", {
              className: "contentContainer",
              children: [
                (0, be.jsx)("h2", { children: "AVIONICS" }),
                (0, be.jsx)("h4", { children: "Technical Project" }),
              ],
            }),
          ],
        }),
        (0, be.jsxs)("section", {
          className: "contentContainer",
          children: [
            (0, be.jsxs)("div", {
              className: "flexContainer g30",
              children: [
                (0, be.jsx)($e, {}),
                (0, be.jsxs)("div", {
                  className: "textContainer",
                  children: [
                    (0, be.jsx)("h6", { children: "Project Blaze" }),
                    (0, be.jsx)("p", {
                      children:
                        "Project Blaze is advancing high-powered rocketry avionics to serve researchers, students, professionals, and enthusiasts with an open-source approach to development. Blaze delivers a comprehensive guidance, control, and data acquisition system, providing dependable control and high-fidelity data collection for rockets reaching up to 10 kilometers and experiencing accelerations as high as 200 g's before data clipping, with built-in expandability to exceed design limits.",
                    }),
                    (0, be.jsx)("p", {
                      children:
                        "As a first-of-its-kind general-purpose avionics platform, Blaze was created with modularity and mission adaptability in mind, ensuring it meets the demands of varied rocketry applications. Whether for academic exploration, rigorous field testing, or personal projects, Blaze is equipped to handle diverse mission profiles, making advanced rocketry avionics more accessible than ever.",
                    }),
                    (0, be.jsx)("h6", { children: "Software" }),
                    (0, be.jsx)("p", {
                      children:
                        "Avionics Software is tackling the software-hardware integration as we begin development of the Blaze project, while ensuring our work remains open-source, modular, and accessible. Our goal is to design a plug-and-play avionics system, leveraging the Zephyr RTOS for its flexibility and robust support for embedded systems. This project emphasizes scalability and adaptability, enabling seamless integration of sensors, actuators, and communication modules. By focusing on clean, readable code and a user-friendly architecture, we aim to create a platform that not only supports our rocket systems but also provides a valuable resource for the broader rocketry and open-source hardware communities.",
                    }),
                  ],
                }),
              ],
            }),
            (0, be.jsxs)("section", {
              className: "skills",
              children: [
                (0, be.jsx)("h3", { children: "Skills used" }),
                (0, be.jsxs)("section", {
                  className: "row g10",
                  children: [
                    (0, be.jsx)(Ze, { name: "Embeded Systems" }),
                    (0, be.jsx)(Ze, { name: "Control Theory" }),
                    (0, be.jsx)(Ze, { name: "Signal Processing" }),
                    (0, be.jsx)(Ze, { name: "RTOS" }),
                    (0, be.jsx)(Ze, { name: "PCB Design" }),
                    (0, be.jsx)(Ze, { name: "KiCAD" }),
                  ],
                }),
              ],
            }),
            (0, be.jsx)("img", { src: nt, className: "IMG100" }),
          ],
        }),
      ],
    });
  };
  const at = function () {
    return (0, be.jsxs)("section", {
      children: [
        (0, be.jsxs)("section", {
          className: "splashImage",
          children: [
            (0, be.jsx)("img", { src: He, className: "backgroundImage" }),
            (0, be.jsx)("div", { className: "overlay" }),
            (0, be.jsxs)("section", {
              className: "contentContainer",
              children: [
                (0, be.jsx)("h2", { children: "Ground Control Systems" }),
                (0, be.jsx)("h4", { children: "Technical Project" }),
              ],
            }),
          ],
        }),
        (0, be.jsxs)("section", {
          className: "contentContainer",
          children: [
            (0, be.jsxs)("div", {
              className: "flexContainer g30",
              children: [
                (0, be.jsx)($e, {}),
                (0, be.jsxs)("div", {
                  className: "textContainer",
                  children: [
                    (0, be.jsx)("h6", { children: "Overview" }),
                    (0, be.jsx)("p", {
                      children:
                        "The Ground Control System (GCS) team at UCSC Rocketry plays a pivotal role in ensuring the success of our rocket missions by developing and maintaining cutting-edge software solutions. Our work encompasses data visualization, creating intuitive and interactive displays that help monitor the rocket\u2019s performance in real time. We excel in data logging and analysis, capturing and interpreting critical telemetry to inform decision-making during launches. The team also implements real-time alerts to notify operators of anomalies, ensuring rapid responses to potential issues. Through centralized control, we streamline mission operations, while calibration tools ensure all sensors and systems function with precision. In addition, we bring creativity and usability to the forefront with Figma design for UI/UX, integrate mapping systems for enhanced situational awareness, and employ web development to build robust platforms that tie all these elements together.",
                    }),
                  ],
                }),
              ],
            }),
            (0, be.jsxs)("section", {
              className: "skills",
              children: [
                (0, be.jsx)("h3", { children: "Skills used" }),
                (0, be.jsxs)("section", {
                  className: "row g10",
                  children: [
                    (0, be.jsx)(Ze, { name: "Figma" }),
                    (0, be.jsx)(Ze, { name: "React" }),
                    (0, be.jsx)(Ze, { name: "Data Logging" }),
                    (0, be.jsx)(Ze, { name: "Data Analysis" }),
                    (0, be.jsx)(Ze, { name: "Data Visualization" }),
                  ],
                }),
              ],
            }),
            (0, be.jsx)("img", { src: nt, className: "IMG100" }),
          ],
        }),
      ],
    });
  };
  const lt = function () {
    return (0, be.jsxs)("section", {
      children: [
        (0, be.jsxs)("section", {
          className: "splashImage",
          children: [
            (0, be.jsx)("img", { src: Ye, className: "backgroundImage" }),
            (0, be.jsx)("div", { className: "overlay" }),
            (0, be.jsxs)("section", {
              className: "contentContainer",
              children: [
                (0, be.jsx)("h2", { children: "Thrust Vector Control" }),
                (0, be.jsx)("h4", { children: "Technical Project" }),
              ],
            }),
          ],
        }),
        (0, be.jsxs)("section", {
          className: "contentContainer",
          children: [
            (0, be.jsxs)("div", {
              className: "flexContainer g30",
              children: [
                (0, be.jsx)($e, {}),
                (0, be.jsxs)("div", {
                  className: "textContainer",
                  children: [
                    (0, be.jsx)("h6", { children: "Overview" }),
                    (0, be.jsx)("p", {
                      children:
                        "The TVC Project is aimed at enhancing the maneuverability and stability of Vertical Takeoff Vertical Landing (VTVL) rockets during flight. Thrust vector control involves the precise manipulation of the direction of thrust generated by the rocket engine, allowing for greater control over the vehicle\u2019s trajectory without the need for aerodynamic surfaces like fins. We focus on developing cutting-edge systems that can adjust the engine nozzle or redirect exhaust flow using actuators and gimbals to enable real-time course corrections, improve payload delivery accuracy, and ensure safe re-entry and landing.",
                    }),
                    (0, be.jsx)("p", {
                      children:
                        "Subteams of the project include Guidance Navigation and Control (GNC) which entails mechanical design, simulations, electronics, and embedded systems to maneuver the rocket and adjust its trajectory. We deal with control algorithms such as PID and LQR/LQM for active stabilization.",
                    }),
                    (0, be.jsx)("p", {
                      children:
                        "Our other subteam is Computer Vision (CV), which goals include utilizing on-board live footage into openCV to create a map of the site. The footage is then put into a Machine Learning program (utilizing YOLO), to select the best position the rocket should land in. It will then send a vector to the GNC side of the rocket, adjusting its trajectory to self-land in the most optimal spot.",
                    }),
                    (0, be.jsx)("p", {
                      children:
                        "As a first-of-its-kind general-purpose avionics platform, Blaze was created with modularity and mission adaptability in mind, ensuring it meets the demands of varied rocketry applications. Whether for academic exploration, rigorous field testing, or personal projects, Blaze is equipped to handle diverse mission profiles, making advanced rocketry avionics more accessible than ever.",
                    }),
                  ],
                }),
              ],
            }),
            (0, be.jsxs)("section", {
              className: "skills",
              children: [
                (0, be.jsx)("h3", { children: "Skills used" }),
                (0, be.jsxs)("section", {
                  className: "row g10",
                  children: [
                    (0, be.jsx)(Ze, { name: "Computer Aid Design" }),
                    (0, be.jsx)(Ze, { name: "Machine Learning" }),
                    (0, be.jsx)(Ze, { name: "PID Control" }),
                    (0, be.jsx)(Ze, { name: "Photogrammetery" }),
                    (0, be.jsx)(Ze, { name: "OpenCV" }),
                    (0, be.jsx)(Ze, { name: "Pytorch" }),
                    (0, be.jsx)(Ze, { name: "Coppeliasim" }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  };
  const it = function () {
      return (0, be.jsxs)("section", {
        children: [
          (0, be.jsxs)("section", {
            className: "splashImage",
            children: [
              (0, be.jsx)("img", { src: Ge, className: "backgroundImage" }),
              (0, be.jsx)("div", { className: "overlay" }),
              (0, be.jsxs)("section", {
                className: "contentContainer",
                children: [
                  (0, be.jsx)("h2", { children: "Simulations" }),
                  (0, be.jsx)("h4", { children: "Technical Project" }),
                ],
              }),
            ],
          }),
          (0, be.jsxs)("section", {
            className: "contentContainer",
            children: [
              (0, be.jsxs)("div", {
                className: "flexContainer g30",
                children: [
                  (0, be.jsx)($e, {}),
                  (0, be.jsxs)("div", {
                    className: "textContainer",
                    children: [
                      (0, be.jsx)("h6", { children: "Project Blaze" }),
                      (0, be.jsx)("p", {
                        children:
                          "Project Blaze is advancing high-powered rocketry avionics to serve researchers, students, professionals, and enthusiasts with an open-source approach to development. Blaze delivers a comprehensive guidance, control, and data acquisition system, providing dependable control and high-fidelity data collection for rockets reaching up to 10 kilometers and experiencing accelerations as high as 200 g's before data clipping, with built-in expandability to exceed design limits.",
                      }),
                      (0, be.jsx)("p", {
                        children:
                          "As a first-of-its-kind general-purpose avionics platform, Blaze was created with modularity and mission adaptability in mind, ensuring it meets the demands of varied rocketry applications. Whether for academic exploration, rigorous field testing, or personal projects, Blaze is equipped to handle diverse mission profiles, making advanced rocketry avionics more accessible than ever.",
                      }),
                    ],
                  }),
                ],
              }),
              (0, be.jsxs)("section", {
                className: "skills",
                children: [
                  (0, be.jsx)("h3", { children: "Skills used" }),
                  (0, be.jsxs)("section", {
                    className: "row g10",
                    children: [
                      (0, be.jsx)(Ze, { name: "Computer Aid Design" }),
                      (0, be.jsx)(Ze, { name: "OpenRocket" }),
                      (0, be.jsx)(Ze, { name: "Control Fluid Dynamics" }),
                      (0, be.jsx)(Ze, { name: "Composites" }),
                      (0, be.jsx)(Ze, { name: "3D Printing" }),
                    ],
                  }),
                ],
              }),
              (0, be.jsx)("img", { src: nt, className: "IMG100" }),
            ],
          }),
        ],
      });
    },
    ot = n.p + "static/media/IMG_0379.f770a75b1bfc6db60a66.jpg";
  const st = function () {
      return (0, be.jsxs)("section", {
        children: [
          (0, be.jsx)(_e, {
            photo: ot,
            team: "Outreach",
            type: "Administrative Team",
          }),
          (0, be.jsxs)("section", {
            className: "contentContainer",
            children: [
              (0, be.jsxs)("div", {
                className: "flexContainer g30",
                children: [
                  (0, be.jsx)($e, {}),
                  (0, be.jsxs)("div", {
                    className: "textContainer",
                    children: [
                      (0, be.jsx)("h6", { children: "Overview" }),
                      (0, be.jsx)("p", {
                        children:
                          "The Outreach team at UCSC Rocketry is dedicated to fostering community engagement and sharing our mission with the world. We specialize in photography and videography, capturing the excitement of rocket launches and team activities to inspire audiences. Through social media and content creation, we craft compelling stories, updates, and visuals that showcase our progress and achievements. Our team actively pursues collaborations with organizations and individuals to expand our impact and resources. We embrace opportunities like MESA (Mathematics, Engineering, Science Achievement) partnerships and teaching engagements, inspiring the next generation of engineers and scientists. By volunteering and organizing events, we connect with the community, celebrate our passion for aerospace, and build lasting relationships that support our mission.",
                      }),
                    ],
                  }),
                ],
              }),
              (0, be.jsxs)("section", {
                className: "skills",
                children: [
                  (0, be.jsx)("h3", { children: "Skills used" }),
                  (0, be.jsxs)("section", {
                    className: "row g10",
                    children: [
                      (0, be.jsx)(Ze, { name: "Videography" }),
                      (0, be.jsx)(Ze, { name: "Photography" }),
                      (0, be.jsx)(Ze, { name: "Event Coordinating" }),
                      (0, be.jsx)(Ze, { name: "Graphic Design" }),
                      (0, be.jsx)(Ze, { name: "Social Media" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    },
    ut = (e) => {
      let { videoId: t } = e;
      return (0, be.jsx)("div", {
        style: { position: "relative", paddingTop: "56.25%" },
        children: (0, be.jsx)("iframe", {
          src: `https://www.youtube.com/embed/${t}`,
          title: "YouTube video player",
          allow:
            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          allowFullScreen: !0,
        }),
      });
    };
  const ct = function () {
    return (0, be.jsxs)("section", {
      children: [
        (0, be.jsxs)("section", {
          className: "topImage",
          children: [
            (0, be.jsx)("img", { src: Ue, className: "backgroundImage" }),
            (0, be.jsx)("section", {
              className: "pageHeadlineContainer",
              children: (0, be.jsx)("h2", { children: "Media" }),
            }),
          ],
        }),
        (0, be.jsx)("div", {
          className: "contentContainer",
          children: (0, be.jsxs)("div", {
            children: [
              (0, be.jsx)(ut, { videoId: "KjC0E-SoNAs" }),
              (0, be.jsx)("figcaption", {
                children: "UCSC Rocket Team, Giving Day 2024",
              }),
            ],
          }),
        }),
      ],
    });
  };
  const dt = function (e) {
      let {
        big: t,
        image: n,
        name: r,
        title: a,
        year: l,
        major: i,
        about: o,
      } = e;
      return (0, be.jsxs)("div", {
        className: "leadTile g20 flexContainer " + (t ? "bigTrue" : "bigFalse"),
        children: [
          (0, be.jsx)("div", {
            className: "" + (t ? "bigPhotoTrue" : "bigPhotoFalse"),
            children: (0, be.jsx)("img", {
              className: "leadIMG",
              src: n,
              alt: `${r}'s Profile`,
            }),
          }),
          (0, be.jsxs)("div", {
            className: "textContainer",
            children: [
              (0, be.jsx)("h4", { children: r }),
              (0, be.jsx)("h5", { children: a }),
              (0, be.jsxs)("span", { children: [l, " year ", i, " major"] }),
              t && (0, be.jsx)("p", { children: o }),
            ],
          }),
        ],
      });
    },
    ft =
      n.p +
      "static/media/Screenshot 2024-11-18 at 11.35.06\u202fPM.65a38a84320042e80004.png",
    pt =
      n.p +
      "static/media/Screenshot 2024-10-12 at 3.11.00\u202fPM.ea36f48cf8e603567567.jpg",
    ht = n.p + "static/media/ich2.bd5b60ffc6128b0107fc.png",
    mt = n.p + "static/media/IMG_0713.9f870a609a2cb044d41f.png",
    gt = n.p + "static/media/IMG_8848.180fd6c7618a03e15aa5.jpg",
    vt = n.p + "static/media/IMG_1754.9cfda938917607ab2cb6.jpg",
    yt = n.p + "static/media/IMG_5571.160aeaba13f6e6478d96.jpg",
    bt = n.p + "static/media/IMG_5724.61dbd5ac0bf249805797.jpg",
    xt = n.p + "static/media/img_9983.deab3fe885a488c6a065.jpg",
    wt = n.p + "static/media/IMG_7105.6c4747d7dd3f9026ffa2.jpg",
    kt = n.p + "static/media/FullSizeRender Kopie.c3f94648c41f8621e011.png",
    jt = n.p + "static/media/IMG_2201.2db9d95814b687fb99e5.JPG";
  const St = function () {
    return (0, be.jsxs)("section", {
      children: [
        (0, be.jsxs)("section", {
          className: "topImage",
          children: [
            (0, be.jsx)("img", { src: Ue, className: "backgroundImage" }),
            (0, be.jsx)("section", {
              className: "pageHeadlineContainer",
              children: (0, be.jsx)("h2", { children: "Leadership" }),
            }),
          ],
        }),
        (0, be.jsxs)("div", {
          className: "contentContainer",
          children: [
            (0, be.jsx)("h5", {
              className: "H5Gray",
              children: "Administration Team",
            }),
            (0, be.jsx)(dt, {
              big: !0,
              name: "Qingyuan Cao",
              title: "President",
              year: "4th",
              major: "Computer Engineering",
              image: ft,
              about:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            }),
            (0, be.jsx)(dt, {
              big: !0,
              name: "Khanh Tran",
              title: "Vice President",
              year: "4th",
              major: "Robotics",
              image: mt,
              about:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            }),
            (0, be.jsx)("hr", {}),
            (0, be.jsxs)("div", {
              className: "leadsContainer",
              children: [
                (0, be.jsx)(dt, {
                  big: !1,
                  name: "Marcus Chan",
                  title: "Lab Saftey Officer",
                  year: "4th",
                  major: "Computer Engineering",
                  image: yt,
                }),
                (0, be.jsx)(dt, {
                  big: !1,
                  name: "Aaron Spalding",
                  title: "Business and Finance",
                  year: "3rd",
                  major: "Art and Design: Games and Playable Media",
                  image: ht,
                }),
                (0, be.jsx)(dt, {
                  big: !1,
                  name: "Alexander Dalchev",
                  title: "Launch Operations",
                  year: "2nd",
                  major: "Business",
                  image: kt,
                }),
                (0, be.jsx)(dt, {
                  big: !1,
                  name: "Heli Kadakia",
                  title: "Outreach",
                  year: "2nd",
                  major: "Computer Science and Computer Engineering",
                  image: pt,
                }),
              ],
            }),
            (0, be.jsx)("hr", {}),
            (0, be.jsx)("h5", {
              className: "H5Gray",
              children: "Competition Leads",
            }),
            (0, be.jsxs)("div", {
              className: "leadsContainer",
              children: [
                (0, be.jsx)(dt, {
                  big: !1,
                  name: "Teodor Langan",
                  title: "Vehicle Systems",
                  year: "4th",
                  major: "Computer Engineering",
                  image: jt,
                }),
                (0, be.jsx)(dt, {
                  big: !1,
                  name: "Amber Borjigin",
                  title: "Recovery",
                  year: "4th",
                  major: "Computer Engineering",
                  image: gt,
                }),
                (0, be.jsx)(dt, {
                  big: !1,
                  name: "Laura Ortiz",
                  title: "Payload",
                  year: "4th",
                  major: "Robotics",
                  image: vt,
                }),
              ],
            }),
            (0, be.jsx)("hr", {}),
            (0, be.jsx)("h5", {
              className: "H5Gray",
              children: "Project Leads",
            }),
            (0, be.jsxs)("div", {
              className: "leadsContainer",
              children: [
                (0, be.jsx)(dt, {
                  big: !1,
                  name: "Julian Barberra",
                  title: "Avionics Electrical",
                  year: "4th",
                  major: "Computer Engineering",
                  image: xt,
                }),
                (0, be.jsx)(dt, {
                  big: !1,
                  name: "Merrick Fort",
                  title: "Avionics Software",
                  year: "4th",
                  major: "Art and Design: Games and Playable Media",
                  image: wt,
                }),
                (0, be.jsx)(dt, {
                  big: !1,
                  name: "Sage Silberman",
                  title: "Ground Control Systems",
                  year: "4th",
                  major: "Art and Design: Games and Playable Media",
                  image: ht,
                }),
                (0, be.jsx)(dt, {
                  big: !1,
                  name: "Amber Borjigin",
                  title: "Thrust Vector Control",
                  year: "4th",
                  major: "Art and Design: Games and Playable Media",
                  image: gt,
                }),
                (0, be.jsx)(dt, {
                  big: !1,
                  name: "Arjun Padiyar",
                  title: "Simulations",
                  year: "4th",
                  major: "Art and Design: Games and Playable Media",
                  image: bt,
                }),
              ],
            }),
          ],
        }),
      ],
    });
  };
  const Ct = function () {
      return (0, be.jsxs)("section", {
        children: [
          (0, be.jsxs)("section", {
            className: "topImage",
            children: [
              (0, be.jsx)("img", { src: Ue, className: "backgroundImage" }),
              (0, be.jsx)("section", {
                className: "pageHeadlineContainer",
                children: (0, be.jsx)("h2", { children: "Alumni" }),
              }),
            ],
          }),
          (0, be.jsx)("div", {
            className: "contentContainer",
            children: (0, be.jsxs)("div", {
              className: "leadsContainer",
              children: [
                (0, be.jsx)(dt, {
                  big: !1,
                  name: "Marcus Chan",
                  title: "Lab Saftey Officer",
                  year: "4th",
                  major: "Computer Engineering",
                  image: yt,
                }),
                (0, be.jsx)(dt, {
                  big: !1,
                  name: "Aaron Spalding",
                  title: "Business and Finance",
                  year: "3rd",
                  major: "Art and Design: Games and Playable Media",
                  image: ht,
                }),
              ],
            }),
          }),
        ],
      });
    },
    Et = n.p + "static/media/RocketTeamInfoBoard.2e6a096f949cce6a0009.png";
  n.p;
  const Nt = function () {
    return (0, be.jsxs)("section", {
      children: [
        (0, be.jsxs)("section", {
          className: "topImage",
          children: [
            (0, be.jsx)("img", { src: Ue, className: "backgroundImage" }),
            (0, be.jsx)("section", {
              className: "pageHeadlineContainer",
              children: (0, be.jsx)("h2", { children: "New Members" }),
            }),
          ],
        }),
        (0, be.jsxs)("div", {
          className: "contentContainer",
          children: [
            (0, be.jsx)("img", { src: Et, className: "IMG100" }),
            (0, be.jsx)("h6", { children: "Who Can Join?" }),
            (0, be.jsx)("p", {
              children:
                "Anyone! At UCSC Rocket Team all majors and students are welcome to join there is no requirement to join the team and its ok if you don\u2019t know anything, and if you do that great! We encourage members of all different backgrounds to join.",
            }),
            (0, be.jsx)("h6", { children: "What do we do?" }),
            (0, be.jsx)("p", {
              children:
                "Anyone! At UCSC Rocket Team all majors and students are welcome to join there is no requirement to join the team and its ok if you don\u2019t know anything, and if you do that great! We encourage members of all different backgrounds to join.",
            }),
            (0, be.jsx)("h6", { children: "Why join rocket team?" }),
            (0, be.jsx)("p", {
              children:
                "As the first rocketry club at UCSC, the team was inspired to provide its members a unique hands-on engineering experience, spanning across Computer Science, Robotics Engineering, Physics, Electrical Engineering, Business, and numerous other fields. The team also actively participates in STEM outreach throughout the local community. If you wish to request an outreach event or workshop from the team, contact us. As a team, our mission is to design and build high-powered rockets that model current challenges in space exploration and Aerospace Engineering.",
            }),
          ],
        }),
      ],
    });
  };
  const Pt = {
      Projects:
        n.p + "static/media/rocket.24603d110e4e2eb4f0dbd870a72f89c7.svg",
      Outreach:
        n.p + "static/media/outreach.790239d0535c47428a5b21fef78be576.svg",
      Leadership:
        n.p + "static/media/leadership.f3cdae4e0b7fbe8675b1c809c9074b92.svg",
      "New Members":
        n.p + "static/media/newperson.b54206c2b471ea70935feb15a4842404.svg",
    },
    Lt = (e) => {
      let { subcategories: t } = e;
      const [n, r] = (0, a.useState)(null),
        [l, i] = (0, a.useState)(!1),
        o = (e) => r(e);
      return (
        (0, a.useEffect)(() => {
          const e = () => {
            i(window.scrollY > 0);
          };
          return (
            window.addEventListener("scroll", e),
            () => window.removeEventListener("scroll", e)
          );
        }, []),
        (0, be.jsxs)("nav", {
          onMouseLeave: () => r(null),
          className: `desktop-nav ${n ? "expanded" : ""} ${
            l ? "scrolled" : ""
          }`,
          children: [
            (0, be.jsxs)("div", {
              className: "navContainer",
              children: [
                (0, be.jsxs)("div", {
                  className: "links",
                  children: [
                    (0, be.jsx)(Ie, {
                      to: "/",
                      children: (0, be.jsx)("img", {
                        src: Ke,
                        className: "RTLogoNav",
                        alt: "Rocket Team Logo",
                      }),
                    }),
                    (0, be.jsx)(Ie, {
                      to: "/projects",
                      onMouseEnter: () => o("Projects"),
                      children: "Projects",
                    }),
                    (0, be.jsx)(Ie, {
                      to: "/outreach",
                      onMouseEnter: () => o("Outreach"),
                      children: "Outreach",
                    }),
                    (0, be.jsx)(Ie, {
                      to: "/leadership/current-leadership",
                      onMouseEnter: () => o("Leadership"),
                      children: "Leadership",
                    }),
                    (0, be.jsx)(Ie, {
                      to: "/new-members/new-members",
                      onMouseEnter: () => o("New Members"),
                      children: "New Members",
                    }),
                  ],
                }),
                (0, be.jsx)("a", {
                  href: "https://www.givecampus.com/schools/UniversityofCaliforniaSantaCruz/giving-day-2024/pages/ucscrocketry",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: (0, be.jsx)("button", {
                    className: "givingDayButton",
                    role: "button",
                    children: "DONATE",
                  }),
                }),
              ],
            }),
            n &&
              t[n] &&
              (0, be.jsxs)("div", {
                className: "subcategoryContainer",
                children: [
                  (0, be.jsx)("img", {
                    src: Pt[n],
                    className: "navIcon",
                    alt: `${n} icon`,
                  }),
                  t[n].map((e, t) =>
                    (0, be.jsxs)(
                      "div",
                      {
                        className: "subcategorySection",
                        children: [
                          (0, be.jsx)("h5", { children: e.header }),
                          e.links.map((e, t) =>
                            e.url
                              ? (0, be.jsx)(
                                  "a",
                                  {
                                    href: e.url,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: e.name,
                                  },
                                  t
                                )
                              : (0, be.jsx)(
                                  Ie,
                                  { to: e.path, children: e.name },
                                  t
                                )
                          ),
                        ],
                      },
                      t
                    )
                  ),
                ],
              }),
          ],
        })
      );
    };
  const Tt = n.p + "static/media/menuicon.444d0e11927b4093fcb9984b421bfade.svg",
    Rt = (e) => {
      var t;
      let { subcategories: n } = e;
      const [r, l] = (0, a.useState)(!1),
        [i, o] = (0, a.useState)(null),
        s = (e, t) => {
          t.preventDefault(), o(e);
        },
        [u, c] = (0, a.useState)(null),
        [d, f] = (0, a.useState)(!1);
      return (
        (0, a.useEffect)(() => {
          const e = () => {
            f(window.scrollY > 0);
          };
          return (
            window.addEventListener("scroll", e),
            () => window.removeEventListener("scroll", e)
          );
        }, []),
        (0, be.jsxs)("nav", {
          className: `mobile-nav ${r ? "expanded" : ""} ${
            i ? "showing-subcategory" : ""
          } ${d ? "scrolled" : ""}`,
          children: [
            (0, be.jsxs)("div", {
              className: "navContainer",
              children: [
                (0, be.jsx)("div", {
                  className: "menuButton " + (r ? "active" : ""),
                  onClick: () => {
                    i ? o(null) : l(!r);
                  },
                  children: (0, be.jsx)("img", {
                    src: Tt,
                    className: "menuIconNav",
                    alt: "Menu",
                  }),
                }),
                (0, be.jsx)(Ie, {
                  to: "/",
                  children: (0, be.jsx)("img", {
                    src: Ke,
                    className: "RTLogoNav",
                    alt: "Rocket Team Logo",
                  }),
                }),
              ],
            }),
            (0, be.jsx)("div", {
              className: "mobileContent",
              children: i
                ? (0, be.jsxs)("div", {
                    className: "mobileSubcategories",
                    children: [
                      null === (t = n[i]) || void 0 === t
                        ? void 0
                        : t.map((e, t) =>
                            (0, be.jsxs)(
                              "div",
                              {
                                className: "subcategorySection",
                                children: [
                                  (0, be.jsx)("h5", { children: e.header }),
                                  e.links.map((e, t) =>
                                    (0, be.jsx)(
                                      "div",
                                      {
                                        className: "subcategoryLink",
                                        children: e.url
                                          ? (0, be.jsx)("a", {
                                              href: e.url,
                                              target: "_blank",
                                              rel: "noopener noreferrer",
                                              children: e.name,
                                            })
                                          : (0, be.jsx)(Ie, {
                                              to: e.path,
                                              children: e.name,
                                            }),
                                      },
                                      t
                                    )
                                  ),
                                ],
                              },
                              t
                            )
                          ),
                      (0, be.jsx)("button", {
                        className: "backButton",
                        onClick: () => {
                          o(null);
                        },
                        children: "Go Back",
                      }),
                    ],
                  })
                : (0, be.jsxs)("div", {
                    className: "mobileLinks",
                    children: [
                      (0, be.jsx)(Ie, {
                        to: "/projects",
                        onClick: (e) => s("Projects", e),
                        children: "Projects",
                      }),
                      (0, be.jsx)("hr", {}),
                      (0, be.jsx)(Ie, {
                        to: "/outreach",
                        onClick: (e) => s("Outreach", e),
                        children: "Outreach",
                      }),
                      (0, be.jsx)("hr", {}),
                      (0, be.jsx)(Ie, {
                        to: "/leadership/current-leadership",
                        onClick: (e) => s("Leadership", e),
                        children: "Leadership",
                      }),
                      (0, be.jsx)("hr", {}),
                      (0, be.jsx)(Ie, {
                        to: "/new-members/new-members",
                        onClick: (e) => s("New Members", e),
                        children: "New Members",
                      }),
                      (0, be.jsx)("hr", {}),
                      (0, be.jsx)("a", {
                        target: "_blank",
                        href: "https://www.givecampus.com/schools/UniversityofCaliforniaSantaCruz/giving-day-2024/pages/ucscrocketry",
                        children: "DONATE",
                      }),
                      (0, be.jsx)("hr", {}),
                    ],
                  }),
            }),
          ],
        })
      );
    },
    At = {
      Projects: [
        {
          header: "IREC 2025",
          links: [
            { name: "Vehicle Systems", path: "/irec/vehicle-systems" },
            { name: "Payload", path: "/irec/payload" },
          ],
        },
        {
          header: "Technical Projects",
          links: [
            { name: "Avionics", path: "/technical-projects/avionics" },
            {
              name: "Ground Control Systems",
              path: "/technical-projects/ground-control-systems",
            },
            {
              name: "Thrust Vector Control",
              path: "/technical-projects/thrust-vector-control",
            },
            { name: "Simulations", path: "/technical-projects/simulations" },
          ],
        },
      ],
      Outreach: [
        {
          header: "Outreach",
          links: [
            { name: "Outreach", path: "/outreach/outreach" },
            { name: "Media", path: "/outreach/media" },
          ],
        },
        {
          header: "Sponsors",
          links: [
            { name: "Our Sponsors", path: "/outreach/outreach" },
            { name: "Become a Sponsor", path: "/outreach/cinematics" },
          ],
        },
      ],
      Leadership: [
        {
          header: "Our Leadership",
          links: [
            {
              name: "Current Leadership",
              path: "/leadership/current-leadership",
            },
            { name: "Alumni", path: "/leadership/alumni" },
          ],
        },
      ],
      "New Members": [
        {
          header: "New Members",
          links: [
            { name: "How To Join", path: "/new-members/how-to-join" },
            { name: "Getting Started", path: "/new-members/getting-started" },
          ],
        },
        {
          header: "External Resources",
          links: [
            {
              name: "Events Calendar",
              url: "https://ucscrocketry.notion.site/",
            },
            { name: "Slack", url: "https://rocketslug.slack.com" },
            {
              name: "Notion",
              url: "https://calendar.google.com/calendar/u/1?cid=MzE0NnRvaXNuZmhqYnEyY3N1cHI4ZTZyam9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
            },
          ],
        },
      ],
    },
    zt = () =>
      (0, be.jsxs)(be.Fragment, {
        children: [
          (0, be.jsx)(Lt, { subcategories: At }),
          (0, be.jsx)(Rt, { subcategories: At }),
        ],
      });
  const Ot = function () {
    return (0, be.jsx)("footer", {
      children: (0, be.jsxs)("section", {
        className: "footerContainer",
        children: [
          (0, be.jsxs)("div", {
            className: "footerLogos",
            children: [
              (0, be.jsx)("div", {
                children: (0, be.jsx)("img", {
                  src: Ke,
                  className: "RocketTeamLogoWhite",
                }),
              }),
              (0, be.jsxs)("div", {
                className: "UCSCLogos",
                children: [
                  (0, be.jsx)("img", { src: Ce, className: "UCSCLogo" }),
                  (0, be.jsx)("img", { src: Ee, className: "BaskinLogo" }),
                ],
              }),
            ],
          }),
          (0, be.jsxs)("div", {
            className: "footerLinks",
            children: [
              (0, be.jsxs)("div", {
                className: "footerColumn",
                children: [
                  (0, be.jsx)("h5", { children: "IREC 2025" }),
                  (0, be.jsx)("a", { children: "Vehicle Systems" }),
                  (0, be.jsx)("a", { children: "Payload" }),
                ],
              }),
              (0, be.jsxs)("div", {
                className: "footerColumn",
                children: [
                  (0, be.jsx)("h5", { children: "TECHNICAL PROJECTS" }),
                  (0, be.jsx)("a", { children: "Avionics" }),
                  (0, be.jsx)("a", { children: "Ground Control Systems" }),
                  (0, be.jsx)("a", { children: "Thrust Vector Control" }),
                  (0, be.jsx)("a", { children: "Simulations" }),
                ],
              }),
              (0, be.jsxs)("div", {
                className: "footerColumn",
                children: [
                  (0, be.jsx)("h5", { children: "OUTREACH" }),
                  (0, be.jsx)("a", { children: "Outreach" }),
                  (0, be.jsx)("a", { children: "Media" }),
                  (0, be.jsx)("a", { children: "Our Sponsors" }),
                  (0, be.jsx)("a", { children: "Become a Sponsor" }),
                ],
              }),
              (0, be.jsxs)("div", {
                className: "footerColumn",
                children: [
                  (0, be.jsx)("h5", { children: "LEADERSHIP" }),
                  (0, be.jsx)("a", { children: "Current Leads" }),
                  (0, be.jsx)("a", { children: "Alumni" }),
                ],
              }),
              (0, be.jsxs)("div", {
                className: "footerColumn",
                children: [
                  (0, be.jsx)("h5", { children: "NEW MEMBERS" }),
                  (0, be.jsx)("a", { children: "How to Join" }),
                  (0, be.jsx)("a", { children: "Events Calendar" }),
                  (0, be.jsx)("a", { children: "Slack Link" }),
                ],
              }),
            ],
          }),
          (0, be.jsxs)("div", {
            className: "footerInfo",
            children: [
              (0, be.jsx)("div", {
                className: "copywrite",
                children: (0, be.jsx)("h5", {
                  children: "\xa9 UCSC ROCKETRY 2024. ALL RIGHTS RESERVED",
                }),
              }),
              (0, be.jsx)("div", {
                className: "preferences",
                children: (0, be.jsx)("h5", { children: "PRIVACY POLICY" }),
              }),
            ],
          }),
        ],
      }),
    });
  };
  const Mt = function () {
      return (0, be.jsxs)("div", {
        className: "App",
        children: [
          (0, be.jsx)(ye, {}),
          (0, be.jsx)(zt, {}),
          (0, be.jsxs)(ge, {
            children: [
              (0, be.jsx)(he, { path: "/", element: (0, be.jsx)(Be, {}) }),
              (0, be.jsx)(he, {
                path: "/projects",
                element: (0, be.jsx)(qe, {}),
              }),
              (0, be.jsx)(he, {
                path: "/irec/vehicle-systems",
                element: (0, be.jsx)(et, {}),
              }),
              (0, be.jsx)(he, {
                path: "/irec/payload",
                element: (0, be.jsx)(tt, {}),
              }),
              (0, be.jsx)(he, {
                path: "/technical-projects/avionics",
                element: (0, be.jsx)(rt, {}),
              }),
              (0, be.jsx)(he, {
                path: "/technical-projects/ground-control-systems",
                element: (0, be.jsx)(at, {}),
              }),
              (0, be.jsx)(he, {
                path: "/technical-projects/thrust-vector-control",
                element: (0, be.jsx)(lt, {}),
              }),
              (0, be.jsx)(he, {
                path: "/technical-projects/simulations",
                element: (0, be.jsx)(it, {}),
              }),
              (0, be.jsx)(he, {
                path: "/outreach",
                element: (0, be.jsx)(st, {}),
              }),
              (0, be.jsx)(he, {
                path: "/outreach/media",
                element: (0, be.jsx)(ct, {}),
              }),
              (0, be.jsx)(he, {
                path: "/leadership/current-leadership",
                element: (0, be.jsx)(St, {}),
              }),
              (0, be.jsx)(he, {
                path: "/leadership/alumni",
                element: (0, be.jsx)(Ct, {}),
              }),
              (0, be.jsx)(he, {
                path: "/new-members/new-members",
                element: (0, be.jsx)(Nt, {}),
              }),
            ],
          }),
          (0, be.jsx)(Ot, {}),
        ],
      });
    },
    It = (e) => {
      e &&
        e instanceof Function &&
        n
          .e(453)
          .then(n.bind(n, 453))
          .then((t) => {
            let { getCLS: n, getFID: r, getFCP: a, getLCP: l, getTTFB: i } = t;
            n(e), r(e), a(e), l(e), i(e);
          });
    };
  i
    .createRoot(document.getElementById("root"))
    .render(
      (0, be.jsx)(a.StrictMode, {
        children: (0, be.jsx)(ze, { children: (0, be.jsx)(Mt, {}) }),
      })
    ),
    It();
})();
//# sourceMappingURL=main.d742527f.js.map
