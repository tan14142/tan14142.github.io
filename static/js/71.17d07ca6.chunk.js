(this.webpackJsonppages=this.webpackJsonppages||[]).push([[71,86,96,100,118,120],{118:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return i}));var r=n(84),c=n(0);function i(t){var e=t.lang;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("section",{className:"accent-bottom panel",children:[Object(c.jsx)("h2",{children:"Largest palindrome product"}),Object(c.jsx)("h4",{children:"Problem 4"}),Object(c.jsx)("p",{children:"A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 \xd7 99."}),Object(c.jsx)("p",{children:"Find the largest palindrome made from the product of two 3-digit numbers."})]}),Object(c.jsx)(r.default,{lang:e})]})}},176:function(t,e,n){},177:function(t,e,n){},80:function(t,e,n){"use strict";function r(t){var e=t.split(/\r|\n/);e.pop(),e.shift();var n=e[0].match(/^\s+/g)||[];return(n?e.map((function(t){return t.replace(n[0],"")})):e).join("\r\n")}n.r(e),n.d(e,"default",(function(){return r}))},81:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return u}));var r=n(1),c=n.n(r),i=n(6),o=n(59),a=n.n(o),s=(n(176),n(0));function u(t){var e=t.children,n=t.tabs,o=Object(r.useRef)(null);return Object(r.useEffect)((function(){var t=a.a.Tabs.init(o.current,{});return function(){return t.destroy()}}),[]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("ul",{className:"tabs",ref:o,children:n.map((function(t,e){return Object(s.jsx)("li",{className:"tab",children:Object(s.jsx)(i.b,{to:"#"+t,children:t})},e)}))}),c.a.Children.toArray(e).map((function(t,e){return Object(s.jsx)("div",{className:"flex-column",id:n[e],children:t},e)}))]})}},82:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return a}));var r=n(1),c=n(80),i=n(85),o=n(0);function a(t){var e=t.indent,n=void 0===e||e,a=t.lang,s=t.onInput,u=void 0===s?function(){}:s,l=Object(i.default)(),d=Object.values(a)[0];return n||(d=Object(c.default)(d)),Object(r.useEffect)((function(){return u(d)}),[u,d]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("button",{className:"reset",onClick:function(t){var e=t.currentTarget.parentNode.querySelector("code").textContent;navigator.clipboard.writeText(e).then((function(){return l("copied to clipboard")})).catch((function(){return l("copy to clipboard failed")}))},children:"Copy to Clipboard"}),Object(o.jsx)("pre",{children:Object(o.jsx)("code",{contentEditable:!0,className:"hljs language-"+Object.keys(a)[0].toLowerCase(),spellCheck:"false",suppressContentEditableWarning:!0,onInput:function(t){var e=t.target;u(e.textContent)},children:d})})]})}},83:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return c}));var r=n(1);function c(){Object(r.useEffect)((function(){var t,e;return window.hljs||(window.hljs=!0,(t=document.createElement("link")).rel="stylesheet",t.href="https://unpkg.com/@highlightjs/cdn-assets@11.1.0/styles/default.min.css",(e=document.createElement("script")).src="https://unpkg.com/@highlightjs/cdn-assets@11.1.0/highlight.min.js",e.onload=function(){return window.hljs.highlightAll()},document.body.appendChild(t),document.body.appendChild(e)),function(){"object"===typeof t&&document.body.removeChild(t),"object"===typeof e&&document.body.removeChild(e),delete window.hljs}}),[])}},84:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return s}));var r=n(60),c=n(82),i=n(81),o=(n(177),n(83)),a=n(0);function s(t){var e=t.lang,n=t.indent,s=void 0===n||n,u=t.onInput,l=void 0===u?function(){}:u;return Object(o.default)(),Object(a.jsx)("div",{className:"panel language-markup",children:Object(a.jsx)(i.default,{tabs:Object.keys(e),children:Object.entries(e).map((function(t,e){return Object(a.jsx)(c.default,{indent:s,lang:Object(r.a)({},t[0],t[1]),onInput:l},e)}))})})}}}]);