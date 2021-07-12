(this.webpackJsonppages=this.webpackJsonppages||[]).push([[68,86,96,100,118,120],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var c=n(84),r=n(0);function i(e){var t=e.lang;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("section",{className:"accent-bottom panel",children:[Object(r.jsx)("h2",{children:"Distinct powers"}),Object(r.jsx)("h4",{children:"Problem 29"}),Object(r.jsx)("p",{children:"Consider all integer combinations of a\u1d47 for 2 \u2264 a \u2264 5 and 2 \u2264 b \u2264 5:"}),Object(r.jsxs)("ol",{className:"padded2",children:[Object(r.jsx)("li",{children:"2\xb2=4, 2\xb3=8, 2\u2074=16, 2\u2075=32"}),Object(r.jsx)("li",{children:"3\xb2=9, 3\xb3=27, 3\u2074=81, 3\u2075=243"}),Object(r.jsx)("li",{children:"4\xb2=16, 4\xb3=64, 4\u2074=256, 4\u2075=1024"}),Object(r.jsx)("li",{children:"5\xb2=25, 5\xb3=125, 5\u2074=625, 5\u2075=3125"})]}),Object(r.jsx)("p",{children:"If they are then placed in numerical order, with any repeats removed, we get the following sequence of 15 distinct terms:"}),Object(r.jsx)("div",{className:"center",children:"4, 8, 9, 16, 25, 27, 32, 64, 81, 125, 243, 256, 625, 1024, 3125"}),Object(r.jsx)("p",{children:"How many distinct terms are in the sequence generated by a\u1d47 for 2 \u2264 a \u2264 100 and 2 \u2264 b \u2264 100?"})]}),Object(r.jsx)(c.default,{lang:t})]})}},176:function(e,t,n){},177:function(e,t,n){},80:function(e,t,n){"use strict";function c(e){var t=e.split(/\r|\n/);t.pop(),t.shift();var n=t[0].match(/^\s+/g)||[];return(n?t.map((function(e){return e.replace(n[0],"")})):t).join("\r\n")}n.r(t),n.d(t,"default",(function(){return c}))},81:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var c=n(1),r=n.n(c),i=n(6),s=n(59),a=n.n(s),o=(n(176),n(0));function l(e){var t=e.children,n=e.tabs,s=Object(c.useRef)(null);return Object(c.useEffect)((function(){var e=a.a.Tabs.init(s.current,{});return function(){return e.destroy()}}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("ul",{className:"tabs",ref:s,children:n.map((function(e,t){return Object(o.jsx)("li",{className:"tab",children:Object(o.jsx)(i.b,{to:"#"+e,children:e})},t)}))}),r.a.Children.toArray(t).map((function(e,t){return Object(o.jsx)("div",{className:"flex-column",id:n[t],children:e},t)}))]})}},82:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));var c=n(1),r=n(80),i=n(85),s=n(0);function a(e){var t=e.indent,n=void 0===t||t,a=e.lang,o=e.onInput,l=void 0===o?function(){}:o,u=Object(i.default)(),d=Object.values(a)[0];return n||(d=Object(r.default)(d)),Object(c.useEffect)((function(){return l(d)}),[l,d]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("button",{className:"reset",onClick:function(e){var t=e.currentTarget.parentNode.querySelector("code").textContent;navigator.clipboard.writeText(t).then((function(){return u("copied to clipboard")})).catch((function(){return u("copy to clipboard failed")}))},children:"Copy to Clipboard"}),Object(s.jsx)("pre",{children:Object(s.jsx)("code",{contentEditable:!0,className:"hljs language-"+Object.keys(a)[0].toLowerCase(),spellCheck:"false",suppressContentEditableWarning:!0,onInput:function(e){var t=e.target;l(t.textContent)},children:d})})]})}},83:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r}));var c=n(1);function r(){Object(c.useEffect)((function(){var e,t;return window.hljs||(window.hljs=!0,(e=document.createElement("link")).rel="stylesheet",e.href="https://unpkg.com/@highlightjs/cdn-assets@11.1.0/styles/default.min.css",(t=document.createElement("script")).src="https://unpkg.com/@highlightjs/cdn-assets@11.1.0/highlight.min.js",t.onload=function(){return window.hljs.highlightAll()},document.body.appendChild(e),document.body.appendChild(t)),function(){"object"===typeof e&&document.body.removeChild(e),"object"===typeof t&&document.body.removeChild(t),delete window.hljs}}),[])}},84:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o}));var c=n(60),r=n(82),i=n(81),s=(n(177),n(83)),a=n(0);function o(e){var t=e.lang,n=e.indent,o=void 0===n||n,l=e.onInput,u=void 0===l?function(){}:l;return Object(s.default)(),Object(a.jsx)("div",{className:"panel language-markup",children:Object(a.jsx)(i.default,{tabs:Object.keys(t),children:Object.entries(t).map((function(e,t){return Object(a.jsx)(r.default,{indent:o,lang:Object(c.a)({},e[0],e[1]),onInput:u},t)}))})})}}}]);
//# sourceMappingURL=68.926c1599.chunk.js.map