(this.webpackJsonppages=this.webpackJsonppages||[]).push([[29,46,51,55,56,63,84,86,87],{109:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return i}));var r=e(81),c=e(0);function i(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("section",{className:"accent-bottom panel",children:[Object(c.jsx)("h2",{children:"10001st prime"}),Object(c.jsx)("h4",{children:"Problem 7"}),Object(c.jsx)("p",{children:"By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13."}),Object(c.jsx)("p",{children:"What is the 10 001st prime number?"})]}),Object(c.jsx)(r.default,{lang:{JavaScript:"\n          m => {\n            let p = [3]\n\n            for (let i = 3; p.length < m - 1; i += 2) {\n              if (p.every(v => i % v)) {\n                p.push(i);\n              }\n            }\n            return p.pop();\n          }\n      "}})]})}},174:function(t,n,e){},175:function(t,n,e){},176:function(t,n,e){},80:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return a}));var r=e(16),c=e(1),i=e(59),u=e.n(i);e(174);function a(){var t=Object(c.useState)(""),n=Object(r.a)(t,2),e=n[0],i=n[1];return Object(c.useEffect)((function(){return e&&u.a.toast({completeCallback:function(){return i("")},displayLength:2e3,html:e}),function(){return u.a.Toast.dismissAll()}}),[e]),i}},81:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return u}));var r=e(84),c=e(83),i=(e(176),e(0));function u(t){var n=t.lang,e=t.onInput,u=void 0===e?function(){}:e;return Object(i.jsx)("div",{className:"panel language-markup",children:Object(i.jsx)(c.default,{tabs:Object.keys(n),children:Object.entries(n).map((function(t,n){return Object(i.jsx)(r.default,{content:t[1],onInput:u},n)}))})})}},82:function(t,n,e){"use strict";function r(t){var n=t.split(/\r|\n/);n.pop(),n.shift();var e=n[0].match(/^\s+/g)||[];return(e?n.map((function(t){return t.replace(e[0],"")})):n).join("\r\n")}e.r(n),e.d(n,"default",(function(){return r}))},83:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return o}));var r=e(1),c=e.n(r),i=e(6),u=e(59),a=e.n(u),s=(e(175),e(0));function o(t){var n=t.children,e=t.tabs,u=Object(r.useRef)(null);return Object(r.useEffect)((function(){var t=a.a.Tabs.init(u.current,{});return function(){return t.destroy()}}),[]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("ul",{className:"tabs",ref:u,children:e.map((function(t,n){return Object(s.jsx)("li",{className:"tab",children:Object(s.jsx)(i.b,{to:"#"+t,children:t})},n)}))}),c.a.Children.toArray(n).map((function(t,n){return Object(s.jsx)("div",{className:"flex-column",id:e[n],children:t},n)}))]})}},84:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return a}));var r=e(1),c=e(82),i=e(80),u=e(0);function a(t){var n=t.content,e=t.onInput,a=void 0===e?function(){}:e,s=Object(c.default)(n),o=Object(i.default)();return Object(r.useEffect)((function(){return a(s)}),[a,s]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("button",{className:"reset",onClick:function(t){var n=t.currentTarget.parentNode.querySelector("code").textContent;navigator.clipboard.writeText(n).then((function(){return o("copied to clipboard")})).catch((function(){return o("copy to clipboard failed")}))},children:"Copy to Clipboard"}),Object(u.jsx)("pre",{children:Object(u.jsx)("code",{contentEditable:!0,spellCheck:"false",suppressContentEditableWarning:!0,onInput:function(t){var n=t.target;a(n.textContent)},children:s})})]})}}}]);
//# sourceMappingURL=29.57fb7ed0.chunk.js.map