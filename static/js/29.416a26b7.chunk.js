(this.webpackJsonppages=this.webpackJsonppages||[]).push([[29,45,64,81,86,87,96,100,118,120,121],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r}));var c=n(84),i=n(0);function r(e){var t=e.lang;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("section",{className:"accent-bottom panel",children:[Object(i.jsx)("h2",{children:"1000-digit Fibonacci number"}),Object(i.jsx)("h4",{children:"Problem 25"}),Object(i.jsx)("p",{children:"The Fibonacci sequence is defined by the recurrence relation:"}),Object(i.jsx)("ol",{className:"padded2",children:Object(i.jsx)("li",{children:"F\u2099 = F\u2099\u208b\u2081 + F\u2099\u208b\u2082, where F\u2081 = 1 and F\u2082 = 1."})}),Object(i.jsx)("p",{children:"Hence the first 12 terms will be:"}),Object(i.jsxs)("ol",{className:"padded2",children:[Object(i.jsx)("li",{children:"F\u2081 = 1"}),Object(i.jsx)("li",{children:"F\u2082 = 1"}),Object(i.jsx)("li",{children:"F\u2083 = 2"}),Object(i.jsx)("li",{children:"F\u2084 = 3"}),Object(i.jsx)("li",{children:"F\u2085 = 5"}),Object(i.jsx)("li",{children:"F\u2086 = 8"}),Object(i.jsx)("li",{children:"F\u2087 = 13"}),Object(i.jsx)("li",{children:"F\u2088 = 21"}),Object(i.jsx)("li",{children:"F\u2089 = 34"}),Object(i.jsx)("li",{children:"F\u2081\u2080 = 55"}),Object(i.jsx)("li",{children:"F\u2081\u2081 = 89"}),Object(i.jsx)("li",{children:"F\u2081\u2082 = 144"})]}),Object(i.jsx)("p",{children:"The 12th term, F12, is the first term to contain three digits."}),Object(i.jsx)("p",{children:"What is the index of the first term in the Fibonacci sequence to contain 1000 digits?"})]}),Object(i.jsx)(c.default,{lang:t})]})}},176:function(e,t,n){},177:function(e,t,n){},178:function(e,t,n){},80:function(e,t,n){"use strict";function c(e){var t=e.split(/\r|\n/);t.pop(),t.shift();var n=t[0].match(/^\s+/g)||[];return(n?t.map((function(e){return e.replace(n[0],"")})):t).join("\r\n")}n.r(t),n.d(t,"default",(function(){return c}))},81:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var c=n(1),i=n.n(c),r=n(6),s=n(59),l=n.n(s),a=(n(176),n(0));function u(e){var t=e.children,n=e.tabs,s=Object(c.useRef)(null);return Object(c.useEffect)((function(){var e=l.a.Tabs.init(s.current,{});return function(){return e.destroy()}}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("ul",{className:"tabs",ref:s,children:n.map((function(e,t){return Object(a.jsx)("li",{className:"tab",children:Object(a.jsx)(r.b,{to:"#"+e,children:e})},t)}))}),i.a.Children.toArray(t).map((function(e,t){return Object(a.jsx)("div",{className:"flex-column",id:n[t],children:e},t)}))]})}},82:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var c=n(1),i=n(80),r=n(85),s=n(0);function l(e){var t=e.indent,n=void 0===t||t,l=e.lang,a=e.onInput,u=void 0===a?function(){}:a,o=Object(r.default)(),d=Object.values(l)[0];return n||(d=Object(i.default)(d)),Object(c.useEffect)((function(){return u(d)}),[u,d]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("button",{className:"reset",onClick:function(e){var t=e.currentTarget.parentNode.querySelector("code").textContent;navigator.clipboard.writeText(t).then((function(){return o("copied to clipboard")})).catch((function(){return o("copy to clipboard failed")}))},children:"Copy to Clipboard"}),Object(s.jsx)("pre",{children:Object(s.jsx)("code",{contentEditable:!0,className:"hljs language-"+Object.keys(l)[0].toLowerCase(),spellCheck:"false",suppressContentEditableWarning:!0,onInput:function(e){var t=e.target;u(t.textContent)},children:d})})]})}},83:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var c=n(1);function i(){Object(c.useEffect)((function(){var e,t;return window.hljs||(window.hljs=!0,(e=document.createElement("link")).rel="stylesheet",e.href="https://unpkg.com/@highlightjs/cdn-assets@11.1.0/styles/default.min.css",(t=document.createElement("script")).src="https://unpkg.com/@highlightjs/cdn-assets@11.1.0/highlight.min.js",t.onload=function(){return window.hljs.highlightAll()},document.body.appendChild(e),document.body.appendChild(t)),function(){"object"===typeof e&&document.body.removeChild(e),"object"===typeof t&&document.body.removeChild(t),delete window.hljs}}),[])}},84:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));var c=n(60),i=n(82),r=n(81),s=(n(177),n(83)),l=n(0);function a(e){var t=e.lang,n=e.indent,a=void 0===n||n,u=e.onInput,o=void 0===u?function(){}:u;return Object(s.default)(),Object(l.jsx)("div",{className:"panel language-markup",children:Object(l.jsx)(r.default,{tabs:Object.keys(t),children:Object.entries(t).map((function(e,t){return Object(l.jsx)(i.default,{indent:a,lang:Object(c.a)({},e[0],e[1]),onInput:o},t)}))})})}},85:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var c=n(16),i=n(1),r=n(59),s=n.n(r);n(178);function l(){var e=Object(i.useState)(""),t=Object(c.a)(e,2),n=t[0],r=t[1];return Object(i.useEffect)((function(){return n&&s.a.toast({completeCallback:function(){return r("")},displayLength:2e3,html:n}),function(){return s.a.Toast.dismissAll()}}),[n]),r}}}]);
//# sourceMappingURL=29.416a26b7.chunk.js.map