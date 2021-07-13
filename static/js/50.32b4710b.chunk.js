(this.webpackJsonppages=this.webpackJsonppages||[]).push([[50,86,96,100,118,120],{176:function(e,t,n){},177:function(e,t,n){},80:function(e,t,n){"use strict";function c(e){var t=e.split(/\r|\n/);t.pop(),t.shift();var n=t[0].match(/^\s+/g)||[];return(n?t.map((function(e){return e.replace(n[0],"")})):t).join("\r\n")}n.r(t),n.d(t,"default",(function(){return c}))},81:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));var c=n(1),r=n.n(c),i=n(6),s=n(59),l=n.n(s),d=(n(176),n(0));function a(e){var t=e.children,n=e.tabs,s=Object(c.useRef)(null);return Object(c.useEffect)((function(){var e=l.a.Tabs.init(s.current,{});return function(){return e.destroy()}}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("ul",{className:"tabs",ref:s,children:n.map((function(e,t){return Object(d.jsx)("li",{className:"tab",children:Object(d.jsx)(i.b,{to:"#"+e,children:e})},t)}))}),r.a.Children.toArray(t).map((function(e,t){return Object(d.jsx)("div",{className:"flex-column",id:n[t],children:e},t)}))]})}},82:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var c=n(1),r=n(80),i=n(85),s=n(0);function l(e){var t=e.indent,n=void 0===t||t,l=e.lang,d=e.onInput,a=void 0===d?function(){}:d,u=Object(i.default)(),o=Object.values(l)[0];return n||(o=Object(r.default)(o)),Object(c.useEffect)((function(){return a(o)}),[a,o]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("button",{className:"reset",onClick:function(e){var t=e.currentTarget.parentNode.querySelector("code").textContent;navigator.clipboard.writeText(t).then((function(){return u("copied to clipboard")})).catch((function(){return u("copy to clipboard failed")}))},children:"Copy to Clipboard"}),Object(s.jsx)("pre",{children:Object(s.jsx)("code",{contentEditable:!0,className:"hljs language-"+Object.keys(l)[0].toLowerCase(),spellCheck:"false",suppressContentEditableWarning:!0,onInput:function(e){var t=e.target;a(t.textContent)},children:o})})]})}},83:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r}));var c=n(1);function r(){Object(c.useEffect)((function(){var e,t;return window.hljs||(window.hljs=!0,(e=document.createElement("link")).rel="stylesheet",e.href="https://unpkg.com/@highlightjs/cdn-assets@11.1.0/styles/default.min.css",(t=document.createElement("script")).src="https://unpkg.com/@highlightjs/cdn-assets@11.1.0/highlight.min.js",t.onload=function(){return window.hljs.highlightAll()},document.body.appendChild(e),document.body.appendChild(t)),function(){"object"===typeof e&&document.body.removeChild(e),"object"===typeof t&&document.body.removeChild(t),delete window.hljs}}),[])}},84:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var c=n(60),r=n(82),i=n(81),s=(n(177),n(83)),l=n(0);function d(e){var t=e.lang,n=e.indent,d=void 0===n||n,a=e.onInput,u=void 0===a?function(){}:a;return Object(s.default)(),Object(l.jsx)("div",{className:"panel language-markup",children:Object(l.jsx)(i.default,{tabs:Object.keys(t),children:Object.entries(t).map((function(e,t){return Object(l.jsx)(r.default,{indent:d,lang:Object(c.a)({},e[0],e[1]),onInput:u},t)}))})})}},97:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var c=n(84),r=n(0);function i(e){var t=e.lang;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("section",{className:"accent-bottom panel",children:[Object(r.jsx)("h2",{children:"Highly divisible triangular number"}),Object(r.jsx)("h4",{children:"Problem 12"}),Object(r.jsx)("p",{children:"The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:"}),Object(r.jsx)("div",{className:"center",children:"1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ..."}),Object(r.jsx)("p",{children:"Let us list the factors of the first seven triangle numbers:"}),Object(r.jsx)("table",{className:"concise-table container highlight striped",style:{lineHeight:"1rem",width:"10rem"},children:Object(r.jsxs)("tbody",{children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"1:"}),Object(r.jsx)("td",{children:"1"})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"3:"}),Object(r.jsx)("td",{children:"1, 3"})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"6:"}),Object(r.jsx)("td",{children:"1, 2, 3, 6"})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"10:"}),Object(r.jsx)("td",{children:"1, 2, 5, 10"})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"15:"}),Object(r.jsx)("td",{children:"1, 3, 5, 15"})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"21:"}),Object(r.jsx)("td",{children:"1, 3, 7, 21"})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"28:"}),Object(r.jsx)("td",{children:"1, 2, 4, 7, 14, 28"})]})]})}),Object(r.jsx)("p",{children:"We can see that 28 is the first triangle number to have over five divisors."}),Object(r.jsx)("p",{children:"What is the value of the first triangle number to have over five hundred divisors?"})]}),Object(r.jsx)(c.default,{lang:t})]})}}}]);
//# sourceMappingURL=50.32b4710b.chunk.js.map