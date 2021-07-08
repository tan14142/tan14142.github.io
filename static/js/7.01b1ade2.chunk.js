(this.webpackJsonppages=this.webpackJsonppages||[]).push([[7,46,51,55,56,63,84,86,87],{174:function(n,t,e){},175:function(n,t,e){},176:function(n,t,e){},80:function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return a}));var r=e(16),c=e(1),i=e(59),s=e.n(i);e(174);function a(){var n=Object(c.useState)(""),t=Object(r.a)(n,2),e=t[0],i=t[1];return Object(c.useEffect)((function(){return e&&s.a.toast({completeCallback:function(){return i("")},displayLength:2e3,html:e}),function(){return s.a.Toast.dismissAll()}}),[e]),i}},81:function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return s}));var r=e(84),c=e(83),i=(e(176),e(0));function s(n){var t=n.lang,e=n.onInput,s=void 0===e?function(){}:e;return Object(i.jsx)("div",{className:"panel language-markup",children:Object(i.jsx)(c.default,{tabs:Object.keys(t),children:Object.entries(t).map((function(n,t){return Object(i.jsx)(r.default,{content:n[1],onInput:s},t)}))})})}},82:function(n,t,e){"use strict";function r(n){var t=n.split(/\r|\n/);t.pop(),t.shift();var e=t[0].match(/^\s+/g)||[];return(e?t.map((function(n){return n.replace(e[0],"")})):t).join("\r\n")}e.r(t),e.d(t,"default",(function(){return r}))},83:function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return u}));var r=e(1),c=e.n(r),i=e(6),s=e(59),a=e.n(s),o=(e(175),e(0));function u(n){var t=n.children,e=n.tabs,s=Object(r.useRef)(null);return Object(r.useEffect)((function(){var n=a.a.Tabs.init(s.current,{});return function(){return n.destroy()}}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("ul",{className:"tabs",ref:s,children:e.map((function(n,t){return Object(o.jsx)("li",{className:"tab",children:Object(o.jsx)(i.b,{to:"#"+n,children:n})},t)}))}),c.a.Children.toArray(t).map((function(n,t){return Object(o.jsx)("div",{className:"flex-column",id:e[t],children:n},t)}))]})}},84:function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return a}));var r=e(1),c=e(82),i=e(80),s=e(0);function a(n){var t=n.content,e=n.onInput,a=void 0===e?function(){}:e,o=Object(c.default)(t),u=Object(i.default)();return Object(r.useEffect)((function(){return a(o)}),[a,o]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("button",{className:"reset",onClick:function(n){var t=n.currentTarget.parentNode.querySelector("code").textContent;navigator.clipboard.writeText(t).then((function(){return u("copied to clipboard")})).catch((function(){return u("copy to clipboard failed")}))},children:"Copy to Clipboard"}),Object(s.jsx)("pre",{children:Object(s.jsx)("code",{contentEditable:!0,spellCheck:"false",suppressContentEditableWarning:!0,onInput:function(n){var t=n.target;a(t.textContent)},children:o})})]})}},96:function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return i}));var r=e(81),c=e(0);function i(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("section",{className:"accent-bottom panel",children:[Object(c.jsx)("h2",{children:"Longest Collatz sequence"}),Object(c.jsx)("h4",{children:"Problem 14"}),Object(c.jsx)("p",{children:"The following iterative sequence is defined for the set of positive integers:"}),Object(c.jsx)("div",{className:"center font-mono",children:"n \u2192 n/2 (n is even)"}),Object(c.jsx)("div",{className:"center font-mono",children:"n \u2192 3n + 1 (n is odd)"}),Object(c.jsx)("p",{children:"Using the rule above and starting with 13, we generate the following sequence:"}),Object(c.jsx)("div",{className:"center font-mono",children:"13 \u2192 40 \u2192 20 \u2192 10 \u2192 5 \u2192 16 \u2192 8 \u2192 4 \u2192 2 \u2192 1"}),Object(c.jsx)("p",{children:"It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1."}),Object(c.jsx)("p",{children:"Which starting number, under one million, produces the longest chain?"}),Object(c.jsx)("p",{children:"NOTE: Once the chain starts the terms are allowed to go above one million."})]}),Object(c.jsx)(r.default,{lang:{JavaScript:"\n          m => {\n            let\n            max = 0,\n            n,\n            terms = [, 1];\n            \n            const f = i => {\n              let next;\n              if (i % 2) {\n                next = i * 3 + 1;\n              }\n              else {\n                next = i / 2;\n              }\n              if (!terms[next]) {\n                f(next);\n              }\n              terms[i] = terms[next] + 1;\n              return terms[next] + 1;\n            }\n            for (let i = 2; i < m; i++) {\n              if (!terms[i] && max < f(i)) {\n                max = terms[i];\n                n = i;\n              }\n            }\n            return n;\n          }\n      "}})]})}}}]);
//# sourceMappingURL=7.01b1ade2.chunk.js.map