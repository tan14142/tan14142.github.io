(this.webpackJsonppages=this.webpackJsonppages||[]).push([[72,86,96,100,118,120],{119:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return i}));var c=n(84),r=n(0);function i(t){var e=t.lang;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("section",{className:"accent-bottom panel",children:[Object(r.jsx)("h2",{children:"Smallest multiple"}),Object(r.jsx)("h4",{children:"Problem 5"}),Object(r.jsx)("p",{children:"2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder."}),Object(r.jsx)("p",{children:"What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?"})]}),Object(r.jsx)(c.default,{lang:e})]})}},176:function(t,e,n){},177:function(t,e,n){},80:function(t,e,n){"use strict";function c(t){var e=t.split(/\r|\n/);e.pop(),e.shift();var n=e[0].match(/^\s+/g)||[];return(n?e.map((function(t){return t.replace(n[0],"")})):e).join("\r\n")}n.r(e),n.d(e,"default",(function(){return c}))},81:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return o}));var c=n(1),r=n.n(c),i=n(6),s=n(59),a=n.n(s),u=(n(176),n(0));function o(t){var e=t.children,n=t.tabs,s=Object(c.useRef)(null);return Object(c.useEffect)((function(){var t=a.a.Tabs.init(s.current,{});return function(){return t.destroy()}}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("ul",{className:"tabs",ref:s,children:n.map((function(t,e){return Object(u.jsx)("li",{className:"tab",children:Object(u.jsx)(i.b,{to:"#"+t,children:t})},e)}))}),r.a.Children.toArray(e).map((function(t,e){return Object(u.jsx)("div",{className:"flex-column",id:n[e],children:t},e)}))]})}},82:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return a}));var c=n(1),r=n(80),i=n(85),s=n(0);function a(t){var e=t.indent,n=void 0===e||e,a=t.lang,u=t.onInput,o=void 0===u?function(){}:u,l=Object(i.default)(),d=Object.values(a)[0];return n||(d=Object(r.default)(d)),Object(c.useEffect)((function(){return o(d)}),[o,d]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("button",{className:"reset",onClick:function(t){var e=t.currentTarget.parentNode.querySelector("code").textContent;navigator.clipboard.writeText(e).then((function(){return l("copied to clipboard")})).catch((function(){return l("copy to clipboard failed")}))},children:"Copy to Clipboard"}),Object(s.jsx)("pre",{children:Object(s.jsx)("code",{contentEditable:!0,className:"hljs language-"+Object.keys(a)[0].toLowerCase(),spellCheck:"false",suppressContentEditableWarning:!0,onInput:function(t){var e=t.target;o(e.textContent)},children:d})})]})}},83:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return r}));var c=n(1);function r(){Object(c.useEffect)((function(){var t,e;return window.hljs||(window.hljs=!0,(t=document.createElement("link")).rel="stylesheet",t.href="https://unpkg.com/@highlightjs/cdn-assets@11.1.0/styles/default.min.css",(e=document.createElement("script")).src="https://unpkg.com/@highlightjs/cdn-assets@11.1.0/highlight.min.js",e.onload=function(){return window.hljs.highlightAll()},document.body.appendChild(t),document.body.appendChild(e)),function(){"object"===typeof t&&document.body.removeChild(t),"object"===typeof e&&document.body.removeChild(e),delete window.hljs}}),[])}},84:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return u}));var c=n(60),r=n(82),i=n(81),s=(n(177),n(83)),a=n(0);function u(t){var e=t.lang,n=t.indent,u=void 0===n||n,o=t.onInput,l=void 0===o?function(){}:o;return Object(s.default)(),Object(a.jsx)("div",{className:"panel language-markup",children:Object(a.jsx)(i.default,{tabs:Object.keys(e),children:Object.entries(e).map((function(t,e){return Object(a.jsx)(r.default,{indent:u,lang:Object(c.a)({},t[0],t[1]),onInput:l},e)}))})})}}}]);