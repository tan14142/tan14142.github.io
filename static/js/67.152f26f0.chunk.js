(this.webpackJsonppages=this.webpackJsonppages||[]).push([[67,86,96,100,118,120],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var c=n(84),r=n(0);function s(e){var t=e.lang;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("section",{className:"accent-bottom panel",children:[Object(r.jsx)("h2",{children:"Number spiral diagonals"}),Object(r.jsx)("h4",{children:"Problem 28"}),Object(r.jsx)("p",{children:"Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:"}),Object(r.jsxs)("div",{className:"center font-mono nowrap",children:[Object(r.jsx)("span",{className:"red-text",children:"21"})," ","22 23 24"," ",Object(r.jsx)("span",{className:"red-text",children:"25"}),Object(r.jsx)("br",{}),"20 \xa0",Object(r.jsx)("span",{className:"red-text",children:"7"}),"\xa0 8 \xa0",Object(r.jsx)("span",{className:"red-text",children:"9"})," ","10",Object(r.jsx)("br",{}),"19 \xa06 \xa0",Object(r.jsx)("span",{className:"red-text",children:"1"}),"\xa0 2 11",Object(r.jsx)("br",{}),"18 \xa0",Object(r.jsx)("span",{className:"red-text",children:"5"}),"\xa0 4 \xa0",Object(r.jsx)("span",{className:"red-text",children:"3"})," ","12",Object(r.jsx)("br",{}),Object(r.jsx)("span",{className:"red-text",children:"17"})," ","16 15 14"," ",Object(r.jsx)("span",{className:"red-text",children:"13"})]}),Object(r.jsx)("p",{children:"It can be verified that the sum of the numbers on the diagonals is 101."}),Object(r.jsx)("p",{children:"What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?"})]}),Object(r.jsx)(c.default,{lang:t})]})}},176:function(e,t,n){},177:function(e,t,n){},80:function(e,t,n){"use strict";function c(e){var t=e.split(/\r|\n/);t.pop(),t.shift();var n=t[0].match(/^\s+/g)||[];return(n?t.map((function(e){return e.replace(n[0],"")})):t).join("\r\n")}n.r(t),n.d(t,"default",(function(){return c}))},81:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o}));var c=n(1),r=n.n(c),s=n(6),a=n(59),i=n.n(a),l=(n(176),n(0));function o(e){var t=e.children,n=e.tabs,a=Object(c.useRef)(null);return Object(c.useEffect)((function(){var e=i.a.Tabs.init(a.current,{});return function(){return e.destroy()}}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("ul",{className:"tabs",ref:a,children:n.map((function(e,t){return Object(l.jsx)("li",{className:"tab",children:Object(l.jsx)(s.b,{to:"#"+e,children:e})},t)}))}),r.a.Children.toArray(t).map((function(e,t){return Object(l.jsx)("div",{className:"flex-column",id:n[t],children:e},t)}))]})}},82:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var c=n(1),r=n(80),s=n(85),a=n(0);function i(e){var t=e.indent,n=void 0===t||t,i=e.lang,l=e.onInput,o=void 0===l?function(){}:l,d=Object(s.default)(),u=Object.values(i)[0];return n||(u=Object(r.default)(u)),Object(c.useEffect)((function(){return o(u)}),[o,u]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("button",{className:"reset",onClick:function(e){var t=e.currentTarget.parentNode.querySelector("code").textContent;navigator.clipboard.writeText(t).then((function(){return d("copied to clipboard")})).catch((function(){return d("copy to clipboard failed")}))},children:"Copy to Clipboard"}),Object(a.jsx)("pre",{children:Object(a.jsx)("code",{contentEditable:!0,className:"hljs language-"+Object.keys(i)[0].toLowerCase(),spellCheck:"false",suppressContentEditableWarning:!0,onInput:function(e){var t=e.target;o(t.textContent)},children:u})})]})}},83:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r}));var c=n(1);function r(){Object(c.useEffect)((function(){var e,t;return window.hljs||(window.hljs=!0,(e=document.createElement("link")).rel="stylesheet",e.href="https://unpkg.com/@highlightjs/cdn-assets@11.1.0/styles/default.min.css",(t=document.createElement("script")).src="https://unpkg.com/@highlightjs/cdn-assets@11.1.0/highlight.min.js",t.onload=function(){return window.hljs.highlightAll()},document.body.appendChild(e),document.body.appendChild(t)),function(){"object"===typeof e&&document.body.removeChild(e),"object"===typeof t&&document.body.removeChild(t),delete window.hljs}}),[])}},84:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var c=n(60),r=n(82),s=n(81),a=(n(177),n(83)),i=n(0);function l(e){var t=e.lang,n=e.indent,l=void 0===n||n,o=e.onInput,d=void 0===o?function(){}:o;return Object(a.default)(),Object(i.jsx)("div",{className:"panel language-markup",children:Object(i.jsx)(s.default,{tabs:Object.keys(t),children:Object.entries(t).map((function(e,t){return Object(i.jsx)(r.default,{indent:l,lang:Object(c.a)({},e[0],e[1]),onInput:d},t)}))})})}}}]);
//# sourceMappingURL=67.152f26f0.chunk.js.map