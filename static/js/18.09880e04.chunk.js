(this.webpackJsonppages=this.webpackJsonppages||[]).push([[18,45,53,81,86,87,96,100,118,120,121],{100:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return i}));var c=n(84),r=n(0);function i(t){var e=t.lang;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("section",{className:"accent-bottom panel",children:[Object(r.jsx)("h2",{children:"Lattice paths"}),Object(r.jsx)("h4",{children:"Problem 15"}),Object(r.jsx)("p",{children:"Starting in the top left corner of a 2\xd72 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner."}),Object(r.jsx)("div",{className:"center",children:Object(r.jsx)("img",{alt:"Lattice paths",src:"/Projects/Project-Euler/P15.png"})}),Object(r.jsx)("p",{children:"How many such routes are there through a 20\xd720 grid?"})]}),Object(r.jsx)(c.default,{lang:e})]})}},176:function(t,e,n){},177:function(t,e,n){},178:function(t,e,n){},80:function(t,e,n){"use strict";function c(t){var e=t.split(/\r|\n/);e.pop(),e.shift();var n=e[0].match(/^\s+/g)||[];return(n?e.map((function(t){return t.replace(n[0],"")})):e).join("\r\n")}n.r(e),n.d(e,"default",(function(){return c}))},81:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return s}));var c=n(1),r=n.n(c),i=n(6),o=n(59),a=n.n(o),u=(n(176),n(0));function s(t){var e=t.children,n=t.tabs,o=Object(c.useRef)(null);return Object(c.useEffect)((function(){var t=a.a.Tabs.init(o.current,{});return function(){return t.destroy()}}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("ul",{className:"tabs",ref:o,children:n.map((function(t,e){return Object(u.jsx)("li",{className:"tab",children:Object(u.jsx)(i.b,{to:"#"+t,children:t})},e)}))}),r.a.Children.toArray(e).map((function(t,e){return Object(u.jsx)("div",{className:"flex-column",id:n[e],children:t},e)}))]})}},82:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return a}));var c=n(1),r=n(80),i=n(85),o=n(0);function a(t){var e=t.indent,n=void 0===e||e,a=t.lang,u=t.onInput,s=void 0===u?function(){}:u,l=Object(i.default)(),d=Object.values(a)[0];return n||(d=Object(r.default)(d)),Object(c.useEffect)((function(){return s(d)}),[s,d]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("button",{className:"reset",onClick:function(t){var e=t.currentTarget.parentNode.querySelector("code").textContent;navigator.clipboard.writeText(e).then((function(){return l("copied to clipboard")})).catch((function(){return l("copy to clipboard failed")}))},children:"Copy to Clipboard"}),Object(o.jsx)("pre",{children:Object(o.jsx)("code",{contentEditable:!0,className:"hljs language-"+Object.keys(a)[0].toLowerCase(),spellCheck:"false",suppressContentEditableWarning:!0,onInput:function(t){var e=t.target;s(e.textContent)},children:d})})]})}},83:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return r}));var c=n(1);function r(){Object(c.useEffect)((function(){var t,e;return window.hljs||(window.hljs=!0,(t=document.createElement("link")).rel="stylesheet",t.href="https://unpkg.com/@highlightjs/cdn-assets@11.1.0/styles/default.min.css",(e=document.createElement("script")).src="https://unpkg.com/@highlightjs/cdn-assets@11.1.0/highlight.min.js",e.onload=function(){return window.hljs.highlightAll()},document.body.appendChild(t),document.body.appendChild(e)),function(){"object"===typeof t&&document.body.removeChild(t),"object"===typeof e&&document.body.removeChild(e),delete window.hljs}}),[])}},84:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return u}));var c=n(60),r=n(82),i=n(81),o=(n(177),n(83)),a=n(0);function u(t){var e=t.lang,n=t.indent,u=void 0===n||n,s=t.onInput,l=void 0===s?function(){}:s;return Object(o.default)(),Object(a.jsx)("div",{className:"panel language-markup",children:Object(a.jsx)(i.default,{tabs:Object.keys(e),children:Object.entries(e).map((function(t,e){return Object(a.jsx)(r.default,{indent:u,lang:Object(c.a)({},t[0],t[1]),onInput:l},e)}))})})}},85:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return a}));var c=n(16),r=n(1),i=n(59),o=n.n(i);n(178);function a(){var t=Object(r.useState)(""),e=Object(c.a)(t,2),n=e[0],i=e[1];return Object(r.useEffect)((function(){return n&&o.a.toast({completeCallback:function(){return i("")},displayLength:2e3,html:n}),function(){return o.a.Toast.dismissAll()}}),[n]),i}}}]);
//# sourceMappingURL=18.09880e04.chunk.js.map