(this.webpackJsonppages=this.webpackJsonppages||[]).push([[56,86,96,100,118,120],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var c=n(84),r=n(0);function s(e){var t=e.lang;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("section",{className:"accent-bottom panel",children:[Object(r.jsx)("h2",{children:"Maximum path sum I"}),Object(r.jsx)("h4",{children:"Problem 18"}),Object(r.jsx)("p",{children:"By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23."}),Object(r.jsxs)("div",{className:"center font-mono",children:[Object(r.jsx)("span",{className:"red-text",children:"3"}),Object(r.jsx)("br",{}),Object(r.jsx)("span",{className:"red-text",children:"7"})," 4",Object(r.jsx)("br",{}),"2 ",Object(r.jsx)("span",{className:"red-text",children:"4"})," 6",Object(r.jsx)("br",{}),"8 5 ",Object(r.jsx)("span",{className:"red-text",children:"9"})," 3"]}),Object(r.jsx)("p",{children:"That is, 3 + 7 + 4 + 9 = 23."}),Object(r.jsx)("p",{children:"Find the maximum total from top to bottom of the triangle below:"}),Object(r.jsx)("div",{className:"center font-mono nowrap",children:Object(r.jsxs)("div",{style:{minWidth:480},children:["75",Object(r.jsx)("br",{}),"95 64",Object(r.jsx)("br",{}),"17 47 82",Object(r.jsx)("br",{}),"18 35 87 10",Object(r.jsx)("br",{}),"20 04 82 47 65",Object(r.jsx)("br",{}),"19 01 23 75 03 34",Object(r.jsx)("br",{}),"88 02 77 73 07 63 67",Object(r.jsx)("br",{}),"99 65 04 28 06 16 70 92",Object(r.jsx)("br",{}),"41 41 26 56 83 40 80 70 33",Object(r.jsx)("br",{}),"41 48 72 33 47 32 37 16 94 29",Object(r.jsx)("br",{}),"53 71 44 65 25 43 91 52 97 51 14",Object(r.jsx)("br",{}),"70 11 33 28 77 73 17 78 39 68 17 57",Object(r.jsx)("br",{}),"91 71 52 38 17 14 91 43 58 50 27 29 48",Object(r.jsx)("br",{}),"63 66 04 68 89 53 67 30 73 16 69 87 40 31",Object(r.jsx)("br",{}),"04 62 98 27 23 09 70 98 73 93 38 53 60 04 23"]})}),Object(r.jsx)("p",{children:"NOTE: As there are only 16384 routes, it is possible to solve this problem by trying every route. However, Problem 67, is the same challenge with a triangle containing one-hundred rows; it cannot be solved by brute force, and requires a clever method! ;o)"})]}),Object(r.jsx)(c.default,{lang:t})]})}},176:function(e,t,n){},177:function(e,t,n){},80:function(e,t,n){"use strict";function c(e){var t=e.split(/\r|\n/);t.pop(),t.shift();var n=t[0].match(/^\s+/g)||[];return(n?t.map((function(e){return e.replace(n[0],"")})):t).join("\r\n")}n.r(t),n.d(t,"default",(function(){return c}))},81:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var c=n(1),r=n.n(c),s=n(6),i=n(59),o=n.n(i),a=(n(176),n(0));function l(e){var t=e.children,n=e.tabs,i=Object(c.useRef)(null);return Object(c.useEffect)((function(){var e=o.a.Tabs.init(i.current,{});return function(){return e.destroy()}}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("ul",{className:"tabs",ref:i,children:n.map((function(e,t){return Object(a.jsx)("li",{className:"tab",children:Object(a.jsx)(s.b,{to:"#"+e,children:e})},t)}))}),r.a.Children.toArray(t).map((function(e,t){return Object(a.jsx)("div",{className:"flex-column",id:n[t],children:e},t)}))]})}},82:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o}));var c=n(1),r=n(80),s=n(85),i=n(0);function o(e){var t=e.indent,n=void 0===t||t,o=e.lang,a=e.onInput,l=void 0===a?function(){}:a,u=Object(s.default)(),j=Object.values(o)[0];return n||(j=Object(r.default)(j)),Object(c.useEffect)((function(){return l(j)}),[l,j]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("button",{className:"reset",onClick:function(e){var t=e.currentTarget.parentNode.querySelector("code").textContent;navigator.clipboard.writeText(t).then((function(){return u("copied to clipboard")})).catch((function(){return u("copy to clipboard failed")}))},children:"Copy to Clipboard"}),Object(i.jsx)("pre",{children:Object(i.jsx)("code",{contentEditable:!0,className:"hljs language-"+Object.keys(o)[0].toLowerCase(),spellCheck:"false",suppressContentEditableWarning:!0,onInput:function(e){var t=e.target;l(t.textContent)},children:j})})]})}},83:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r}));var c=n(1);function r(){Object(c.useEffect)((function(){var e,t;return window.hljs||(window.hljs=!0,(e=document.createElement("link")).rel="stylesheet",e.href="https://unpkg.com/@highlightjs/cdn-assets@11.1.0/styles/default.min.css",(t=document.createElement("script")).src="https://unpkg.com/@highlightjs/cdn-assets@11.1.0/highlight.min.js",t.onload=function(){return window.hljs.highlightAll()},document.body.appendChild(e),document.body.appendChild(t)),function(){"object"===typeof e&&document.body.removeChild(e),"object"===typeof t&&document.body.removeChild(t),delete window.hljs}}),[])}},84:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));var c=n(60),r=n(82),s=n(81),i=(n(177),n(83)),o=n(0);function a(e){var t=e.lang,n=e.indent,a=void 0===n||n,l=e.onInput,u=void 0===l?function(){}:l;return Object(i.default)(),Object(o.jsx)("div",{className:"panel language-markup",children:Object(o.jsx)(s.default,{tabs:Object.keys(t),children:Object.entries(t).map((function(e,t){return Object(o.jsx)(r.default,{indent:a,lang:Object(c.a)({},e[0],e[1]),onInput:u},t)}))})})}}}]);
//# sourceMappingURL=56.b767d315.chunk.js.map