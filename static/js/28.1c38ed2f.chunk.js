(this.webpackJsonppages=this.webpackJsonppages||[]).push([[28,46,51,55,56,63,84,86,87],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var r=n(81),c=n(0);function s(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("section",{className:"accent-bottom panel",children:[Object(c.jsx)("h2",{children:"Sum square difference"}),Object(c.jsx)("h4",{children:"Problem 6"}),Object(c.jsx)("p",{children:"The sum of the squares of the first ten natural numbers is,"}),Object(c.jsx)("div",{className:"center",children:"1\xb2 + 2\xb2 + ... + 10\xb2 = 385"}),Object(c.jsx)("p",{children:"The square of the sum of the first ten natural numbers is,"}),Object(c.jsx)("div",{className:"center",children:"(1 + 2 + ... + 10)\xb2 = 552 = 3025"}),Object(c.jsx)("p",{children:"Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is,"}),Object(c.jsx)("div",{className:"center",children:"3025 \u2212 385 = 2640"}),Object(c.jsx)("p",{children:"Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum."})]}),Object(c.jsx)(r.default,{lang:{JavaScript:"\n          m => {\n            let s1 = 0;\n            let s2 = 0;\n\n            for (let i = 1; i <= m; i++) {\n              s1 += i * i;\n              s2 += i;\n            }\n            return s2 * s2 - s1;\n          }\n        ",Python:"\n          sum = 0\n          sum_of_squares = 0\n          \n          for i in range(1, 101):\n            sum += i\n            sum_of_squares += i * i\n          \n          print(sum * sum - sum_of_squares)\n      "}})]})}},174:function(e,t,n){},175:function(e,t,n){},176:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var r=n(16),c=n(1),s=n(59),u=n.n(s);n(174);function i(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){return n&&u.a.toast({completeCallback:function(){return s("")},displayLength:2e3,html:n}),function(){return u.a.Toast.dismissAll()}}),[n]),s}},81:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var r=n(84),c=n(83),s=(n(176),n(0));function u(e){var t=e.lang,n=e.onInput,u=void 0===n?function(){}:n;return Object(s.jsx)("div",{className:"panel language-markup",children:Object(s.jsx)(c.default,{tabs:Object.keys(t),children:Object.entries(t).map((function(e,t){return Object(s.jsx)(r.default,{content:e[1],onInput:u},t)}))})})}},82:function(e,t,n){"use strict";function r(e){var t=e.split(/\r|\n/);t.pop(),t.shift();var n=t[0].match(/^\s+/g)||[];return(n?t.map((function(e){return e.replace(n[0],"")})):t).join("\r\n")}n.r(t),n.d(t,"default",(function(){return r}))},83:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o}));var r=n(1),c=n.n(r),s=n(6),u=n(59),i=n.n(u),a=(n(175),n(0));function o(e){var t=e.children,n=e.tabs,u=Object(r.useRef)(null);return Object(r.useEffect)((function(){var e=i.a.Tabs.init(u.current,{});return function(){return e.destroy()}}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("ul",{className:"tabs",ref:u,children:n.map((function(e,t){return Object(a.jsx)("li",{className:"tab",children:Object(a.jsx)(s.b,{to:"#"+e,children:e})},t)}))}),c.a.Children.toArray(t).map((function(e,t){return Object(a.jsx)("div",{className:"flex-column",id:n[t],children:e},t)}))]})}},84:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var r=n(1),c=n(82),s=n(80),u=n(0);function i(e){var t=e.content,n=e.onInput,i=void 0===n?function(){}:n,a=Object(c.default)(t),o=Object(s.default)();return Object(r.useEffect)((function(){return i(a)}),[i,a]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("button",{className:"reset",onClick:function(e){var t=e.currentTarget.parentNode.querySelector("code").textContent;navigator.clipboard.writeText(t).then((function(){return o("copied to clipboard")})).catch((function(){return o("copy to clipboard failed")}))},children:"Copy to Clipboard"}),Object(u.jsx)("pre",{children:Object(u.jsx)("code",{contentEditable:!0,spellCheck:"false",suppressContentEditableWarning:!0,onInput:function(e){var t=e.target;i(t.textContent)},children:a})})]})}}}]);
//# sourceMappingURL=28.1c38ed2f.chunk.js.map