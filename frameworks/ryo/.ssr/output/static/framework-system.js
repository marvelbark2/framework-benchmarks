"use strict";
var framework = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/flamethrower-router/dist/main.js
  var main_exports = {};
  __export(main_exports, {
    default: () => T
  });
  function m(o, e) {
    if (["link", "go"].includes(o))
      if (e) {
        const t = document.querySelector(e);
        t ? t.scrollIntoView({ behavior: "smooth", block: "start" }) : window.scrollTo({ top: 0 });
      } else
        window.scrollTo({ top: 0 });
  }
  function u(o) {
    const e = new URL(o || window.location.href).href;
    return e.endsWith("/") || e.includes(".") || e.includes("#") ? e : `${e}/`;
  }
  function E(o) {
    (!window.history.state || window.history.state.url !== o) && window.history.pushState({ url: o }, "internalLink", o);
  }
  function k(o) {
    document.querySelector(o).scrollIntoView({ behavior: "smooth", block: "start" });
  }
  function S(o) {
    const e = u();
    return { type: "popstate", next: e };
  }
  function F(o) {
    var t;
    let e;
    if (o.altKey || o.ctrlKey || o.metaKey || o.shiftKey)
      return { type: "disqualified" };
    for (let r = o.target; r.parentNode; r = r.parentNode)
      if (r.nodeName === "A") {
        e = r;
        break;
      }
    if (e && e.host !== location.host)
      return e.target = "_blank", { type: "external" };
    if (e && "cold" in (e == null ? void 0 : e.dataset))
      return { type: "disqualified" };
    if (e != null && e.hasAttribute("href")) {
      const r = e.getAttribute("href"), n = new URL(r, location.href);
      if (o.preventDefault(), r != null && r.startsWith("#"))
        return k(r), { type: "scrolled" };
      const s = (t = r.match(/#([\w'-]+)\b/g)) == null ? void 0 : t[0], i = u(n.href), c = u();
      return { type: "link", next: i, prev: c, scrollId: s };
    } else
      return { type: "noop" };
  }
  function N(o) {
    return new DOMParser().parseFromString(o, "text/html");
  }
  function g(o) {
    document.body.querySelectorAll("[flamethrower-preserve]").forEach((t) => {
      let r = o.body.querySelector('[flamethrower-preserve][id="' + t.id + '"]');
      if (r) {
        const n = t.cloneNode(true);
        r.replaceWith(n);
      }
    }), document.body.replaceWith(o.body);
  }
  function A(o) {
    const e = (i) => Array.from(i.querySelectorAll('head>:not([rel="prefetch"]')), t = e(document), r = e(o), { staleNodes: n, freshNodes: s } = L(t, r);
    n.forEach((i) => i.remove()), document.head.append(...s);
  }
  function L(o, e) {
    const t = [], r = [];
    let n = 0, s = 0;
    for (; n < o.length || s < e.length; ) {
      const i = o[n], c = e[s];
      if (i != null && i.isEqualNode(c)) {
        n++, s++;
        continue;
      }
      const a = i ? r.findIndex((l) => l.isEqualNode(i)) : -1;
      if (a !== -1) {
        r.splice(a, 1), n++;
        continue;
      }
      const h = c ? t.findIndex((l) => l.isEqualNode(c)) : -1;
      if (h !== -1) {
        t.splice(h, 1), s++;
        continue;
      }
      i && t.push(i), c && r.push(c), n++, s++;
    }
    return { staleNodes: t, freshNodes: r };
  }
  function b() {
    document.head.querySelectorAll("[data-reload]").forEach(v), document.body.querySelectorAll("script").forEach(v);
  }
  function v(o) {
    const e = document.createElement("script"), t = Array.from(o.attributes);
    for (const { name: r, value: n } of t)
      e[r] = n;
    e.append(o.textContent), o.replaceWith(e);
  }
  var x, q, T;
  var init_main = __esm({
    "node_modules/flamethrower-router/dist/main.js"() {
      x = {
        log: false,
        pageTransitions: false
      };
      q = class {
        constructor(e) {
          this.opts = e, this.enabled = true, this.prefetched = /* @__PURE__ */ new Set(), this.opts = { ...x, ...e != null ? e : {} }, window != null && window.history ? (document.addEventListener("click", (t) => this.onClick(t)), window.addEventListener("popstate", (t) => this.onPop(t)), this.prefetch()) : (console.warn("flamethrower router not supported in this browser or environment"), this.enabled = false);
        }
        go(e) {
          const t = window.location.href, r = new URL(e, location.origin).href;
          return this.reconstructDOM({ type: "go", next: r, prev: t });
        }
        back() {
          window.history.back();
        }
        forward() {
          window.history.forward();
        }
        get allLinks() {
          return Array.from(document.links).filter(
            (e) => e.href.includes(document.location.origin) && !e.href.includes("#") && e.href !== (document.location.href || document.location.href + "/") && !this.prefetched.has(e.href)
          );
        }
        log(...e) {
          this.opts.log && console.log(...e);
        }
        prefetch() {
          if (this.opts.prefetch === "visible")
            this.prefetchVisible();
          else if (this.opts.prefetch === "hover")
            this.prefetchOnHover();
          else
            return;
        }
        prefetchOnHover() {
          this.allLinks.forEach((e) => {
            const t = e.getAttribute("href");
            e.addEventListener("pointerenter", () => this.createLink(t), { once: true });
          });
        }
        prefetchVisible() {
          const e = {
            root: null,
            rootMargin: "0px",
            threshold: 1
          };
          "IntersectionObserver" in window && (this.observer || (this.observer = new IntersectionObserver((t, r) => {
            t.forEach((n) => {
              const s = n.target.getAttribute("href");
              if (this.prefetched.has(s)) {
                r.unobserve(n.target);
                return;
              }
              n.isIntersecting && (this.createLink(s), r.unobserve(n.target));
            });
          }, e)), this.allLinks.forEach((t) => this.observer.observe(t)));
        }
        createLink(e) {
          const t = document.createElement("link");
          t.rel = "prefetch", t.href = e, t.as = "document", t.onload = () => this.log("\u{1F329}\uFE0F prefetched", e), t.onerror = (r) => this.log("\u{1F915} can't prefetch", e, r), document.head.appendChild(t), this.prefetched.add(e);
        }
        onClick(e) {
          this.reconstructDOM(F(e));
        }
        onPop(e) {
          this.reconstructDOM(S());
        }
        async reconstructDOM({ type: e, next: t, prev: r, scrollId: n }) {
          if (!this.enabled) {
            this.log("router disabled");
            return;
          }
          try {
            if (this.log("\u26A1", e), ["popstate", "link", "go"].includes(e) && t !== r) {
              this.opts.log && console.time("\u23F1\uFE0F"), window.dispatchEvent(new CustomEvent("flamethrower:router:fetch")), e != "popstate" && E(t);
              const i = await (await fetch(t, { headers: { "X-Flamethrower": "1" } }).then((a) => {
                const h = a.body.getReader(), l = parseInt(a.headers.get("Content-Length"));
                let d = 0;
                return new ReadableStream({
                  start(f) {
                    function p() {
                      h.read().then(({ done: y, value: w }) => {
                        if (y) {
                          f.close();
                          return;
                        }
                        d += w.length, window.dispatchEvent(
                          new CustomEvent("flamethrower:router:fetch-progress", {
                            detail: {
                              progress: Number.isNaN(l) ? 0 : d / l * 100,
                              received: d,
                              length: l || 0
                            }
                          })
                        ), f.enqueue(w), p();
                      });
                    }
                    p();
                  }
                });
              }).then((a) => new Response(a, { headers: { "Content-Type": "text/html" } }))).text(), c = N(i);
              A(c), this.opts.pageTransitions && document.createDocumentTransition ? document.createDocumentTransition().start(() => {
                g(c), b(), m(e, n);
              }) : (g(c), b(), m(e, n)), window.dispatchEvent(new CustomEvent("flamethrower:router:end")), setTimeout(() => {
                this.prefetch();
              }, 200), this.opts.log && console.timeEnd("\u23F1\uFE0F");
            }
          } catch (s) {
            return window.dispatchEvent(new CustomEvent("flamethrower:router:error", s)), this.opts.log && console.timeEnd("\u23F1\uFE0F"), console.error("\u{1F4A5} router fetch failed", s), false;
          }
        }
      };
      T = (o) => {
        const e = new q(o);
        if (o.log && console.log("\u{1F525} flamethrower engaged"), window) {
          const t = window;
          t.flamethrower = e;
        }
        return e;
      };
    }
  });

  // node_modules/ryo.js/dist/cjs/lib/utils/serializer.js
  var require_serializer = __commonJS({
    "node_modules/ryo.js/dist/cjs/lib/utils/serializer.js"(exports) {
      "use strict";
      var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Deserializer = exports.Serializer = exports.Specials = void 0;
      var ObjectHandler = (
        /** @class */
        function() {
          function ObjectHandler2(object) {
            this.object = object;
          }
          ObjectHandler2.prototype.isArray = function() {
            return Array.isArray(this.object) || this.object instanceof Array;
          };
          ObjectHandler2.prototype.isObject = function() {
            return this.object.__proto_ === Object.prototype;
          };
          ObjectHandler2.prototype.each = function(iterator) {
            for (var key in this.object)
              if (this.object.hasOwnProperty(key))
                iterator(this.object[key]);
          };
          ObjectHandler2.prototype.map = function(iterator) {
            var obj = this.object;
            if (Array.isArray(obj))
              return obj.map(iterator);
            var newObj = {};
            for (var key in obj)
              if (obj.hasOwnProperty(key))
                newObj[key] = iterator(obj[key]);
            return newObj;
          };
          return ObjectHandler2;
        }()
      );
      var defaultSpecials = [
        {
          $class: "regexp",
          match: function(obj) {
            return obj instanceof RegExp;
          },
          serialize: function(obj) {
            return {
              $class: this.$class,
              source: obj.source,
              global: obj.global,
              multiline: obj.multiline,
              lastIndex: obj.lastIndex,
              ignoreCase: obj.ignoreCase
            };
          },
          deserialize: function(json) {
            var flags = "";
            flags += json.global ? "g" : "";
            flags += json.multiline ? "m" : "";
            flags += json.ignoreCase ? "i" : "";
            var regexp = new RegExp(json.source, flags);
            regexp.lastIndex = json.lastIndex;
            return regexp;
          }
        },
        {
          $class: "function",
          match: function(obj) {
            return obj instanceof Function;
          },
          serialize: function(obj) {
            return {
              $class: this.$class,
              source: obj.toString()
            };
          },
          deserialize: function(json) {
            return new Function("return ".concat(json.source))();
          }
        },
        {
          $class: "date",
          match: function(obj) {
            return obj instanceof Date;
          },
          serialize: function(obj) {
            return {
              $class: this.$class,
              source: obj
            };
          },
          deserialize: function(json) {
            return new Date(json.source);
          }
        },
        {
          $class: "map",
          match: function(obj) {
            return obj instanceof Map;
          },
          serialize: function(obj) {
            return {
              $class: this.$class,
              source: Object.fromEntries(obj)
            };
          },
          deserialize: function(json) {
            return new Map(Object.entries(json.source));
          }
        }
      ];
      var Specials = (
        /** @class */
        function() {
          function Specials2() {
            this.specials = __spreadArray([], defaultSpecials, true);
          }
          Specials2.prototype.add = function(special) {
            this.specials.push(special);
          };
          Specials2.prototype.match = function(obj) {
            return this.specials.find(function(s) {
              return s.match(obj);
            });
          };
          Specials2.prototype.byClass = function($class) {
            return this.specials.find(function(s) {
              return s.$class === $class;
            });
          };
          return Specials2;
        }()
      );
      exports.Specials = Specials;
      var Serializer = (
        /** @class */
        function() {
          function Serializer2(object, specials) {
            if (specials === void 0) {
              specials = new Specials();
            }
            this.specials = specials;
            this.objectHandler = new ObjectHandler(object);
          }
          Serializer2.prototype.handleValue = function(val) {
            var _this = this;
            var json;
            if (val) {
              var specials = this.specials;
              var special = specials.match(val);
              if (special) {
                json = special.serialize(val);
                var currentNodeHandler = new ObjectHandler(val);
                if (currentNodeHandler.isArray()) {
                  json = val.map(function(item) {
                    return _this.handleValue(item);
                  });
                } else if (currentNodeHandler.isObject())
                  json = this.handleValue(val);
              }
            }
            return json ? json : val;
          };
          Serializer2.prototype.toJSON = function() {
            var _this = this;
            var rootNodeHandler = this.objectHandler;
            var payload = rootNodeHandler.map(function(node) {
              return _this.handleValue(node);
            });
            return JSON.stringify(payload);
          };
          return Serializer2;
        }()
      );
      exports.Serializer = Serializer;
      var Deserializer = (
        /** @class */
        function() {
          function Deserializer2(json, specials) {
            if (specials === void 0) {
              specials = new Specials();
            }
            this.specials = specials;
            this.objectHandler = new ObjectHandler(JSON.parse(json));
          }
          Deserializer2.prototype.handleNode = function(node) {
            var _this = this;
            var obj;
            if (node === null || node === void 0 ? void 0 : node.$class) {
              var special = this.specials.byClass(node.$class);
              if (special)
                obj = special.deserialize(node);
            }
            var currentNodeHandler = new ObjectHandler(node);
            if (currentNodeHandler.isArray()) {
              obj = node.map(function(item) {
                return _this.handleNode(item);
              });
            } else if (currentNodeHandler.isObject())
              obj = this.handleNode(obj);
            return obj ? obj : node;
          };
          Deserializer2.prototype.fromJSON = function() {
            var _this = this;
            var object = this.objectHandler;
            if (object.isArray())
              return object.map(function(node) {
                return _this.handleNode(node);
              });
            return object.map(function(node) {
              return _this.handleNode(node);
            });
          };
          return Deserializer2;
        }()
      );
      exports.Deserializer = Deserializer;
    }
  });

  // node_modules/ryo.js/dist/cjs/lib/build/ryo-tools.js
  var require_ryo_tools = __commonJS({
    "node_modules/ryo.js/dist/cjs/lib/build/ryo-tools.js"(exports, module) {
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var flamethrower_router_1 = __importDefault((init_main(), __toCommonJS(main_exports)));
      var serializer_1 = require_serializer();
      exports["ROUTER"] = (0, flamethrower_router_1.default)({ prefetch: "visible", log: true, pageTransitions: true });
      exports["DESERIALIZE"] = serializer_1.Deserializer;
      module.ROUTER = exports["ROUTER"];
    }
  });
  return require_ryo_tools();
})();
