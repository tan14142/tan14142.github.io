(this.webpackJsonppages=this.webpackJsonppages||[]).push([[28,45,63,81,86,87,96,100,118,120,121],{110:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return i}));var c=n(84),r=n(0);function i(t){var e=t.lang;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("section",{className:"accent-bottom panel",children:[Object(r.jsx)("h2",{children:"Lexicographic permutations"}),Object(r.jsx)("h4",{children:"Problem 24"}),Object(r.jsx)("p",{children:"A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:"}),Object(r.jsx)("div",{className:"center font-mono",children:"012 021 102 120 201 210"}),Object(r.jsx)("p",{children:"What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?"})]}),Object(r.jsx)(c.default,{lang:e})]})}},176:function(t,e,n){},177:function(t,e,n){},178:function(t,e,n){},80:function(t,e,n){"use strict";function c(t){var e=t.split(/\r|\n/);e.pop(),e.shift();var n=e[0].match(/^\s+/g)||[];return(n?e.map((function(t){return t.replace(n[0],"")})):e).join("\r\n")}n.r(e),n.d(e,"default",(function(){return c}))},81:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return u}));var c=n(1),r=n.n(c),i=n(6),a=n(59),o=n.n(a),s=(n(176),n(0));function u(t){var e=t.children,n=t.tabs,a=Object(c.useRef)(null);return Object(c.useEffect)((function(){var t=o.a.Tabs.init(a.current,{});return function(){return t.destroy()}}),[]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("ul",{className:"tabs",ref:a,children:n.map((function(t,e){return Object(s.jsx)("li",{className:"tab",children:Object(s.jsx)(i.b,{to:"#"+t,children:t})},e)}))}),r.a.Children.toArray(e).map((function(t,e){return Object(s.jsx)("div",{className:"flex-column",id:n[e],children:t},e)}))]})}},82:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return o}));var c=n(1),r=n(80),i=n(85),a=n(0);function o(t){var e=t.indent,n=void 0===e||e,o=t.lang,s=t.onInput,u=void 0===s?function(){}:s,l=Object(i.default)(),d=Object.values(o)[0];return n||(d=Object(r.default)(d)),Object(c.useEffect)((function(){return u(d)}),[u,d]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("button",{className:"reset",onClick:function(t){var e=t.currentTarget.parentNode.querySelector("code").textContent;navigator.clipboard.writeText(e).then((function(){return l("copied to clipboard")})).catch((function(){return l("copy to clipboard failed")}))},children:"Copy to Clipboard"}),Object(a.jsx)("pre",{children:Object(a.jsx)("code",{contentEditable:!0,className:"hljs language-"+Object.keys(o)[0].toLowerCase(),spellCheck:"false",suppressContentEditableWarning:!0,onInput:function(t){var e=t.target;u(e.textContent)},children:d})})]})}},83:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return r}));var c=n(1);function r(){Object(c.useEffect)((function(){var t,e;return window.hljs||(window.hljs=!0,(t=document.createElement("link")).rel="stylesheet",t.href="https://unpkg.com/@highlightjs/cdn-assets@11.1.0/styles/default.min.css",(e=document.createElement("script")).src="https://unpkg.com/@highlightjs/cdn-assets@11.1.0/highlight.min.js",e.onload=function(){return window.hljs.highlightAll()},document.body.appendChild(t),document.body.appendChild(e)),function(){"object"===typeof t&&document.body.removeChild(t),"object"===typeof e&&document.body.removeChild(e),delete window.hljs}}),[])}},84:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return s}));var c=n(60),r=n(82),i=n(81),a=(n(177),n(83)),o=n(0);function s(t){var e=t.lang,n=t.indent,s=void 0===n||n,u=t.onInput,l=void 0===u?function(){}:u;return Object(a.default)(),Object(o.jsx)("div",{className:"panel language-markup",children:Object(o.jsx)(i.default,{tabs:Object.keys(e),children:Object.entries(e).map((function(t,e){return Object(o.jsx)(r.default,{indent:s,lang:Object(c.a)({},t[0],t[1]),onInput:l},e)}))})})}},85:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return o}));var c=n(16),r=n(1),i=n(59),a=n.n(i);n(178);function o(){var t=Object(r.useState)(""),e=Object(c.a)(t,2),n=e[0],i=e[1];return Object(r.useEffect)((function(){return n&&a.a.toast({completeCallback:function(){return i("")},displayLength:2e3,html:n}),function(){return a.a.Toast.dismissAll()}}),[n]),i}}}]);