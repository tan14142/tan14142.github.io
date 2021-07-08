(this.webpackJsonppages=this.webpackJsonppages||[]).push([[17,46,51,55,56,63,84,86,87],{102:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return s}));var r=n(81),i=n(0);function s(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("section",{className:"accent-bottom panel",children:[Object(i.jsx)("h2",{children:"Non-abundant sums"}),Object(i.jsx)("h4",{children:"Problem 23"}),Object(i.jsx)("p",{children:"A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number."}),Object(i.jsx)("p",{children:"A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n."}),Object(i.jsx)("p",{children:"As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit."}),Object(i.jsx)("p",{children:"Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers."})]}),Object(i.jsx)(r.default,{lang:{JavaScript:"\n          () => {\n            let\n            limit = 28123,\n            abundants = [],\n            sieve = new Array(limit).fill(true),\n            sumsOfDivisors = new Array(limit).fill(1);\n\n            for (let i = 2; i <= limit; i++) {\n              for (let j = i + i; j < limit; j += i) {\n                sumsOfDivisors[j] += i;\n              }\n              if (sumsOfDivisors[i] > i && sumsOfDivisors[i] < limit) {\n                abundants.push(i);\n                abundants.map(abundant => {\n                  sieve[abundant + i] = false;\n                });\n              }\n            }\n            return sieve.reduce((sum, value, key) => value\n              ? sum + key\n              : sum\n            , 0);\n          }\n      "}})]})}},174:function(t,e,n){},175:function(t,e,n){},176:function(t,e,n){},80:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return u}));var r=n(16),i=n(1),s=n(59),a=n.n(s);n(174);function u(){var t=Object(i.useState)(""),e=Object(r.a)(t,2),n=e[0],s=e[1];return Object(i.useEffect)((function(){return n&&a.a.toast({completeCallback:function(){return s("")},displayLength:2e3,html:n}),function(){return a.a.Toast.dismissAll()}}),[n]),s}},81:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return a}));var r=n(84),i=n(83),s=(n(176),n(0));function a(t){var e=t.lang,n=t.onInput,a=void 0===n?function(){}:n;return Object(s.jsx)("div",{className:"panel language-markup",children:Object(s.jsx)(i.default,{tabs:Object.keys(e),children:Object.entries(e).map((function(t,e){return Object(s.jsx)(r.default,{content:t[1],onInput:a},e)}))})})}},82:function(t,e,n){"use strict";function r(t){var e=t.split(/\r|\n/);e.pop(),e.shift();var n=e[0].match(/^\s+/g)||[];return(n?e.map((function(t){return t.replace(n[0],"")})):e).join("\r\n")}n.r(e),n.d(e,"default",(function(){return r}))},83:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return o}));var r=n(1),i=n.n(r),s=n(6),a=n(59),u=n.n(a),c=(n(175),n(0));function o(t){var e=t.children,n=t.tabs,a=Object(r.useRef)(null);return Object(r.useEffect)((function(){var t=u.a.Tabs.init(a.current,{});return function(){return t.destroy()}}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("ul",{className:"tabs",ref:a,children:n.map((function(t,e){return Object(c.jsx)("li",{className:"tab",children:Object(c.jsx)(s.b,{to:"#"+t,children:t})},e)}))}),i.a.Children.toArray(e).map((function(t,e){return Object(c.jsx)("div",{className:"flex-column",id:n[e],children:t},e)}))]})}},84:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return u}));var r=n(1),i=n(82),s=n(80),a=n(0);function u(t){var e=t.content,n=t.onInput,u=void 0===n?function(){}:n,c=Object(i.default)(e),o=Object(s.default)();return Object(r.useEffect)((function(){return u(c)}),[u,c]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("button",{className:"reset",onClick:function(t){var e=t.currentTarget.parentNode.querySelector("code").textContent;navigator.clipboard.writeText(e).then((function(){return o("copied to clipboard")})).catch((function(){return o("copy to clipboard failed")}))},children:"Copy to Clipboard"}),Object(a.jsx)("pre",{children:Object(a.jsx)("code",{contentEditable:!0,spellCheck:"false",suppressContentEditableWarning:!0,onInput:function(t){var e=t.target;u(e.textContent)},children:c})})]})}}}]);
//# sourceMappingURL=17.5e6a8079.chunk.js.map