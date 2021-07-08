(this.webpackJsonppages=this.webpackJsonppages||[]).push([[20,46,51,55,56,63,84,86,87],{133:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return i}));var r=t(81),c=t(0);function i(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("section",{className:"accent-bottom panel",children:[Object(c.jsx)("h2",{children:"Reciprocal cycles"}),Object(c.jsx)("h4",{children:"Problem 26"}),Object(c.jsx)("p",{children:"A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:"}),Object(c.jsxs)("ol",{className:"padded2",children:[Object(c.jsx)("li",{children:"\xbd = 0.5"}),Object(c.jsx)("li",{children:"\u2153 = 0.(3)"}),Object(c.jsx)("li",{children:"\xbc = 0.25"}),Object(c.jsx)("li",{children:"\u2155 = 0.2"}),Object(c.jsx)("li",{children:"\u2159 = 0.1(6)"}),Object(c.jsx)("li",{children:"\u2150 = 0.(142857)"}),Object(c.jsx)("li",{children:"\u215b = 0.125"}),Object(c.jsx)("li",{children:"\u2151 = 0.(1)"}),Object(c.jsx)("li",{children:"\u2152 = 0.1"})]}),Object(c.jsx)("p",{children:"Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle."}),Object(c.jsx)("p",{children:"Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part."})]}),Object(c.jsx)(r.default,{lang:{JavaScript:"\n          m => {\n            let\n            maxIndex = 0,\n            maxLength = 0;\n          \n            for (let i = m; i > 1; --i) {\n            \n              let\n              counter = 0,\n              dividend = 1,\n              length = 0,\n              reciprocals = [],\n              remainder = 1;\n              \n              while (true) {\n                dividend = remainder * 10;\n                remainder = dividend % i;\n                \n                if (remainder === 0) {\n                  break;\n                }\n                if (reciprocals[remainder]) {\n                  length = counter - reciprocals[remainder];\n                  break;\n                }\n                \n                reciprocals[remainder] = counter++;\n              }\n              \n              if (length > maxLength) {\n                maxIndex = i;\n                maxLength = length;\n              }\n            }\n            return maxIndex;\n          }\n      "}})]})}},174:function(n,e,t){},175:function(n,e,t){},176:function(n,e,t){},80:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return l}));var r=t(16),c=t(1),i=t(59),a=t.n(i);t(174);function l(){var n=Object(c.useState)(""),e=Object(r.a)(n,2),t=e[0],i=e[1];return Object(c.useEffect)((function(){return t&&a.a.toast({completeCallback:function(){return i("")},displayLength:2e3,html:t}),function(){return a.a.Toast.dismissAll()}}),[t]),i}},81:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return a}));var r=t(84),c=t(83),i=(t(176),t(0));function a(n){var e=n.lang,t=n.onInput,a=void 0===t?function(){}:t;return Object(i.jsx)("div",{className:"panel language-markup",children:Object(i.jsx)(c.default,{tabs:Object.keys(e),children:Object.entries(e).map((function(n,e){return Object(i.jsx)(r.default,{content:n[1],onInput:a},e)}))})})}},82:function(n,e,t){"use strict";function r(n){var e=n.split(/\r|\n/);e.pop(),e.shift();var t=e[0].match(/^\s+/g)||[];return(t?e.map((function(n){return n.replace(t[0],"")})):e).join("\r\n")}t.r(e),t.d(e,"default",(function(){return r}))},83:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return u}));var r=t(1),c=t.n(r),i=t(6),a=t(59),l=t.n(a),s=(t(175),t(0));function u(n){var e=n.children,t=n.tabs,a=Object(r.useRef)(null);return Object(r.useEffect)((function(){var n=l.a.Tabs.init(a.current,{});return function(){return n.destroy()}}),[]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("ul",{className:"tabs",ref:a,children:t.map((function(n,e){return Object(s.jsx)("li",{className:"tab",children:Object(s.jsx)(i.b,{to:"#"+n,children:n})},e)}))}),c.a.Children.toArray(e).map((function(n,e){return Object(s.jsx)("div",{className:"flex-column",id:t[e],children:n},e)}))]})}},84:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return l}));var r=t(1),c=t(82),i=t(80),a=t(0);function l(n){var e=n.content,t=n.onInput,l=void 0===t?function(){}:t,s=Object(c.default)(e),u=Object(i.default)();return Object(r.useEffect)((function(){return l(s)}),[l,s]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("button",{className:"reset",onClick:function(n){var e=n.currentTarget.parentNode.querySelector("code").textContent;navigator.clipboard.writeText(e).then((function(){return u("copied to clipboard")})).catch((function(){return u("copy to clipboard failed")}))},children:"Copy to Clipboard"}),Object(a.jsx)("pre",{children:Object(a.jsx)("code",{contentEditable:!0,spellCheck:"false",suppressContentEditableWarning:!0,onInput:function(n){var e=n.target;l(e.textContent)},children:s})})]})}}}]);
//# sourceMappingURL=20.865703f8.chunk.js.map