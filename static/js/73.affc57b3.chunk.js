(this.webpackJsonppages=this.webpackJsonppages||[]).push([[73,86,96,100,118,120],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var r=n(84),c=n(0);function s(e){var t=e.lang;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("section",{className:"accent-bottom panel",children:[Object(c.jsx)("h2",{children:"Sum square difference"}),Object(c.jsx)("h4",{children:"Problem 6"}),Object(c.jsx)("p",{children:"The sum of the squares of the first ten natural numbers is,"}),Object(c.jsx)("div",{className:"center",children:"1\xb2 + 2\xb2 + ... + 10\xb2 = 385"}),Object(c.jsx)("p",{children:"The square of the sum of the first ten natural numbers is,"}),Object(c.jsx)("div",{className:"center",children:"(1 + 2 + ... + 10)\xb2 = 552 = 3025"}),Object(c.jsx)("p",{children:"Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is,"}),Object(c.jsx)("div",{className:"center",children:"3025 \u2212 385 = 2640"}),Object(c.jsx)("p",{children:"Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum."})]}),Object(c.jsx)(r.default,{lang:t})]})}},176:function(e,t,n){},177:function(e,t,n){},80:function(e,t,n){"use strict";function r(e){var t=e.split(/\r|\n/);t.pop(),t.shift();var n=t[0].match(/^\s+/g)||[];return(n?t.map((function(e){return e.replace(n[0],"")})):t).join("\r\n")}n.r(t),n.d(t,"default",(function(){return r}))},81:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o}));var r=n(1),c=n.n(r),s=n(6),i=n(59),u=n.n(i),a=(n(176),n(0));function o(e){var t=e.children,n=e.tabs,i=Object(r.useRef)(null);return Object(r.useEffect)((function(){var e=u.a.Tabs.init(i.current,{});return function(){return e.destroy()}}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("ul",{className:"tabs",ref:i,children:n.map((function(e,t){return Object(a.jsx)("li",{className:"tab",children:Object(a.jsx)(s.b,{to:"#"+e,children:e})},t)}))}),c.a.Children.toArray(t).map((function(e,t){return Object(a.jsx)("div",{className:"flex-column",id:n[t],children:e},t)}))]})}},82:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var r=n(1),c=n(80),s=n(85),i=n(0);function u(e){var t=e.indent,n=void 0===t||t,u=e.lang,a=e.onInput,o=void 0===a?function(){}:a,l=Object(s.default)(),d=Object.values(u)[0];return n||(d=Object(c.default)(d)),Object(r.useEffect)((function(){return o(d)}),[o,d]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("button",{className:"reset",onClick:function(e){var t=e.currentTarget.parentNode.querySelector("code").textContent;navigator.clipboard.writeText(t).then((function(){return l("copied to clipboard")})).catch((function(){return l("copy to clipboard failed")}))},children:"Copy to Clipboard"}),Object(i.jsx)("pre",{children:Object(i.jsx)("code",{contentEditable:!0,className:"hljs language-"+Object.keys(u)[0].toLowerCase(),spellCheck:"false",suppressContentEditableWarning:!0,onInput:function(e){var t=e.target;o(t.textContent)},children:d})})]})}},83:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var r=n(1);function c(){Object(r.useEffect)((function(){var e,t;return window.hljs||(window.hljs=!0,(e=document.createElement("link")).rel="stylesheet",e.href="https://unpkg.com/@highlightjs/cdn-assets@11.1.0/styles/default.min.css",(t=document.createElement("script")).src="https://unpkg.com/@highlightjs/cdn-assets@11.1.0/highlight.min.js",t.onload=function(){return window.hljs.highlightAll()},document.body.appendChild(e),document.body.appendChild(t)),function(){"object"===typeof e&&document.body.removeChild(e),"object"===typeof t&&document.body.removeChild(t),delete window.hljs}}),[])}},84:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));var r=n(60),c=n(82),s=n(81),i=(n(177),n(83)),u=n(0);function a(e){var t=e.lang,n=e.indent,a=void 0===n||n,o=e.onInput,l=void 0===o?function(){}:o;return Object(i.default)(),Object(u.jsx)("div",{className:"panel language-markup",children:Object(u.jsx)(s.default,{tabs:Object.keys(t),children:Object.entries(t).map((function(e,t){return Object(u.jsx)(c.default,{indent:a,lang:Object(r.a)({},e[0],e[1]),onInput:l},t)}))})})}}}]);