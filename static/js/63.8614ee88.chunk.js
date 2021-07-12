(this.webpackJsonppages=this.webpackJsonppages||[]).push([[63,86,96,100,118,120],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var c=n(84),r=n(0);function i(e){var t=e.lang;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("section",{className:"accent-bottom panel",children:[Object(r.jsx)("h2",{children:"Lexicographic permutations"}),Object(r.jsx)("h4",{children:"Problem 24"}),Object(r.jsx)("p",{children:"A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:"}),Object(r.jsx)("div",{className:"center font-mono",children:"012 021 102 120 201 210"}),Object(r.jsx)("p",{children:"What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?"})]}),Object(r.jsx)(c.default,{lang:t})]})}},176:function(e,t,n){},177:function(e,t,n){},80:function(e,t,n){"use strict";function c(e){var t=e.split(/\r|\n/);t.pop(),t.shift();var n=t[0].match(/^\s+/g)||[];return(n?t.map((function(e){return e.replace(n[0],"")})):t).join("\r\n")}n.r(t),n.d(t,"default",(function(){return c}))},81:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var c=n(1),r=n.n(c),i=n(6),a=n(59),o=n.n(a),s=(n(176),n(0));function u(e){var t=e.children,n=e.tabs,a=Object(c.useRef)(null);return Object(c.useEffect)((function(){var e=o.a.Tabs.init(a.current,{});return function(){return e.destroy()}}),[]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("ul",{className:"tabs",ref:a,children:n.map((function(e,t){return Object(s.jsx)("li",{className:"tab",children:Object(s.jsx)(i.b,{to:"#"+e,children:e})},t)}))}),r.a.Children.toArray(t).map((function(e,t){return Object(s.jsx)("div",{className:"flex-column",id:n[t],children:e},t)}))]})}},82:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o}));var c=n(1),r=n(80),i=n(85),a=n(0);function o(e){var t=e.indent,n=void 0===t||t,o=e.lang,s=e.onInput,u=void 0===s?function(){}:s,l=Object(i.default)(),d=Object.values(o)[0];return n||(d=Object(r.default)(d)),Object(c.useEffect)((function(){return u(d)}),[u,d]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("button",{className:"reset",onClick:function(e){var t=e.currentTarget.parentNode.querySelector("code").textContent;navigator.clipboard.writeText(t).then((function(){return l("copied to clipboard")})).catch((function(){return l("copy to clipboard failed")}))},children:"Copy to Clipboard"}),Object(a.jsx)("pre",{children:Object(a.jsx)("code",{contentEditable:!0,className:"hljs language-"+Object.keys(o)[0].toLowerCase(),spellCheck:"false",suppressContentEditableWarning:!0,onInput:function(e){var t=e.target;u(t.textContent)},children:d})})]})}},83:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r}));var c=n(1);function r(){Object(c.useEffect)((function(){var e,t;return window.hljs||(window.hljs=!0,(e=document.createElement("link")).rel="stylesheet",e.href="https://unpkg.com/@highlightjs/cdn-assets@11.1.0/styles/default.min.css",(t=document.createElement("script")).src="https://unpkg.com/@highlightjs/cdn-assets@11.1.0/highlight.min.js",t.onload=function(){return window.hljs.highlightAll()},document.body.appendChild(e),document.body.appendChild(t)),function(){"object"===typeof e&&document.body.removeChild(e),"object"===typeof t&&document.body.removeChild(t),delete window.hljs}}),[])}},84:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var c=n(60),r=n(82),i=n(81),a=(n(177),n(83)),o=n(0);function s(e){var t=e.lang,n=e.indent,s=void 0===n||n,u=e.onInput,l=void 0===u?function(){}:u;return Object(a.default)(),Object(o.jsx)("div",{className:"panel language-markup",children:Object(o.jsx)(i.default,{tabs:Object.keys(t),children:Object.entries(t).map((function(e,t){return Object(o.jsx)(r.default,{indent:s,lang:Object(c.a)({},e[0],e[1]),onInput:l},t)}))})})}}}]);
//# sourceMappingURL=63.8614ee88.chunk.js.map