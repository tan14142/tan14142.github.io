(this.webpackJsonppages=this.webpackJsonppages||[]).push([[31,45,66,81,86,87,96,100,118,120,121],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var c=n(84),r=n(0);function i(e){var t=e.lang;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("section",{className:"accent-bottom panel",children:[Object(r.jsx)("h2",{children:"Quadratic primes"}),Object(r.jsx)("h4",{children:"Problem 27"}),Object(r.jsx)("p",{children:"Euler discovered the remarkable quadratic formula:"}),Object(r.jsx)("div",{className:"center",children:"n\xb2 + n + 41"}),Object(r.jsx)("p",{children:"It turns out that the formula will produce 40 primes for the consecutive integer values 0 \u2264 n \u2264 39. However, when n = 40, 40\xb2 + 40 + 41 = 40(40 + 1) + 41 is divisible by 41, and certainly when n = 41, 41\xb2 + 41 + 41 is clearly divisible by 41."}),Object(r.jsx)("p",{children:"The incredible formula n\xb2 - 79n + 1601 was discovered, which produces 80 primes for the consecutive values 0 \u2264 n \u2264 79. The product of the coefficients, -79 and 1601, is -126479."}),Object(r.jsx)("p",{children:"Considering quadratics of the form:"}),Object(r.jsxs)("div",{className:"center",children:["n\xb2 + an + b, where |a| < 1000 and |b| \u2264 1000",Object(r.jsx)("br",{}),"where |n| is the modulus/absolute value of n",Object(r.jsx)("br",{}),"e.g. |11| = 11 and |-4| = 4"]}),Object(r.jsx)("p",{children:"Find the product of the coefficients, a and b, for the quadratic expression that produces the maximum number of primes for consecutive values of n, starting with n = 0."})]}),Object(r.jsx)(c.default,{lang:t})]})}},176:function(e,t,n){},177:function(e,t,n){},178:function(e,t,n){},80:function(e,t,n){"use strict";function c(e){var t=e.split(/\r|\n/);t.pop(),t.shift();var n=t[0].match(/^\s+/g)||[];return(n?t.map((function(e){return e.replace(n[0],"")})):t).join("\r\n")}n.r(t),n.d(t,"default",(function(){return c}))},81:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o}));var c=n(1),r=n.n(c),i=n(6),s=n(59),a=n.n(s),u=(n(176),n(0));function o(e){var t=e.children,n=e.tabs,s=Object(c.useRef)(null);return Object(c.useEffect)((function(){var e=a.a.Tabs.init(s.current,{});return function(){return e.destroy()}}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("ul",{className:"tabs",ref:s,children:n.map((function(e,t){return Object(u.jsx)("li",{className:"tab",children:Object(u.jsx)(i.b,{to:"#"+e,children:e})},t)}))}),r.a.Children.toArray(t).map((function(e,t){return Object(u.jsx)("div",{className:"flex-column",id:n[t],children:e},t)}))]})}},82:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));var c=n(1),r=n(80),i=n(85),s=n(0);function a(e){var t=e.indent,n=void 0===t||t,a=e.lang,u=e.onInput,o=void 0===u?function(){}:u,l=Object(i.default)(),d=Object.values(a)[0];return n||(d=Object(r.default)(d)),Object(c.useEffect)((function(){return o(d)}),[o,d]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("button",{className:"reset",onClick:function(e){var t=e.currentTarget.parentNode.querySelector("code").textContent;navigator.clipboard.writeText(t).then((function(){return l("copied to clipboard")})).catch((function(){return l("copy to clipboard failed")}))},children:"Copy to Clipboard"}),Object(s.jsx)("pre",{children:Object(s.jsx)("code",{contentEditable:!0,className:"hljs language-"+Object.keys(a)[0].toLowerCase(),spellCheck:"false",suppressContentEditableWarning:!0,onInput:function(e){var t=e.target;o(t.textContent)},children:d})})]})}},83:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r}));var c=n(1);function r(){Object(c.useEffect)((function(){var e,t;return window.hljs||(window.hljs=!0,(e=document.createElement("link")).rel="stylesheet",e.href="https://unpkg.com/@highlightjs/cdn-assets@11.1.0/styles/default.min.css",(t=document.createElement("script")).src="https://unpkg.com/@highlightjs/cdn-assets@11.1.0/highlight.min.js",t.onload=function(){return window.hljs.highlightAll()},document.body.appendChild(e),document.body.appendChild(t)),function(){"object"===typeof e&&document.body.removeChild(e),"object"===typeof t&&document.body.removeChild(t),delete window.hljs}}),[])}},84:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var c=n(60),r=n(82),i=n(81),s=(n(177),n(83)),a=n(0);function u(e){var t=e.lang,n=e.indent,u=void 0===n||n,o=e.onInput,l=void 0===o?function(){}:o;return Object(s.default)(),Object(a.jsx)("div",{className:"panel language-markup",children:Object(a.jsx)(i.default,{tabs:Object.keys(t),children:Object.entries(t).map((function(e,t){return Object(a.jsx)(r.default,{indent:u,lang:Object(c.a)({},e[0],e[1]),onInput:l},t)}))})})}},85:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));var c=n(16),r=n(1),i=n(59),s=n.n(i);n(178);function a(){var e=Object(r.useState)(""),t=Object(c.a)(e,2),n=t[0],i=t[1];return Object(r.useEffect)((function(){return n&&s.a.toast({completeCallback:function(){return i("")},displayLength:2e3,html:n}),function(){return s.a.Toast.dismissAll()}}),[n]),i}}}]);
//# sourceMappingURL=31.20d73c9d.chunk.js.map