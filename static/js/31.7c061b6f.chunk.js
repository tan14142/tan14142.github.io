(this.webpackJsonppages=this.webpackJsonppages||[]).push([[31,46,51,55,56,63,84,86,87],{111:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return a}));var r=e(81),c=e(0);function a(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("section",{className:"accent-bottom panel",children:[Object(c.jsx)("h2",{children:"Special Pythagorean triplet"}),Object(c.jsx)("h4",{children:"Problem 9"}),Object(c.jsx)("p",{children:"A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,"}),Object(c.jsx)("div",{className:"center",children:"a\xb2 + b\xb2 = c\xb2"}),Object(c.jsx)("p",{children:"For example, 3\xb2 + 4\xb2 = 9 + 16 = 25 = 5\xb2."}),Object(c.jsx)("p",{children:"There exists exactly one Pythagorean triplet for which a + b + c = 1000."}),Object(c.jsx)("p",{children:"Find the product abc."})]}),Object(c.jsx)(r.default,{lang:{JavaScript:"\n          m => {\n            const\n            h = Math.ceil(m / 2),\n            s = 6 * m;\n\n            for (let a = 1; a < h; a++) {\n              let b = (2 * m * a - m * m) / (2 * (a - m));\n              if (b % 1 === 0) {\n                return String([a, b, m - a - b])\n              }\n            }\n            return 'no integers found';\n          }\n      "}})]})}},174:function(t,n,e){},175:function(t,n,e){},176:function(t,n,e){},80:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return u}));var r=e(16),c=e(1),a=e(59),i=e.n(a);e(174);function u(){var t=Object(c.useState)(""),n=Object(r.a)(t,2),e=n[0],a=n[1];return Object(c.useEffect)((function(){return e&&i.a.toast({completeCallback:function(){return a("")},displayLength:2e3,html:e}),function(){return i.a.Toast.dismissAll()}}),[e]),a}},81:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return i}));var r=e(84),c=e(83),a=(e(176),e(0));function i(t){var n=t.lang,e=t.onInput,i=void 0===e?function(){}:e;return Object(a.jsx)("div",{className:"panel language-markup",children:Object(a.jsx)(c.default,{tabs:Object.keys(n),children:Object.entries(n).map((function(t,n){return Object(a.jsx)(r.default,{content:t[1],onInput:i},n)}))})})}},82:function(t,n,e){"use strict";function r(t){var n=t.split(/\r|\n/);n.pop(),n.shift();var e=n[0].match(/^\s+/g)||[];return(e?n.map((function(t){return t.replace(e[0],"")})):n).join("\r\n")}e.r(n),e.d(n,"default",(function(){return r}))},83:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return o}));var r=e(1),c=e.n(r),a=e(6),i=e(59),u=e.n(i),s=(e(175),e(0));function o(t){var n=t.children,e=t.tabs,i=Object(r.useRef)(null);return Object(r.useEffect)((function(){var t=u.a.Tabs.init(i.current,{});return function(){return t.destroy()}}),[]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("ul",{className:"tabs",ref:i,children:e.map((function(t,n){return Object(s.jsx)("li",{className:"tab",children:Object(s.jsx)(a.b,{to:"#"+t,children:t})},n)}))}),c.a.Children.toArray(n).map((function(t,n){return Object(s.jsx)("div",{className:"flex-column",id:e[n],children:t},n)}))]})}},84:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return u}));var r=e(1),c=e(82),a=e(80),i=e(0);function u(t){var n=t.content,e=t.onInput,u=void 0===e?function(){}:e,s=Object(c.default)(n),o=Object(a.default)();return Object(r.useEffect)((function(){return u(s)}),[u,s]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("button",{className:"reset",onClick:function(t){var n=t.currentTarget.parentNode.querySelector("code").textContent;navigator.clipboard.writeText(n).then((function(){return o("copied to clipboard")})).catch((function(){return o("copy to clipboard failed")}))},children:"Copy to Clipboard"}),Object(i.jsx)("pre",{children:Object(i.jsx)("code",{contentEditable:!0,spellCheck:"false",suppressContentEditableWarning:!0,onInput:function(t){var n=t.target;u(n.textContent)},children:s})})]})}}}]);
//# sourceMappingURL=31.7c061b6f.chunk.js.map