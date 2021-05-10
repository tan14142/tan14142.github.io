(this.webpackJsonppages=this.webpackJsonppages||[]).push([[20,47,55,62,83,86],{100:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return r}));var i=n(80),s=n(0);function r(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("section",{className:"accent-bottom panel",children:[Object(s.jsx)("h2",{children:"Non-abundant sums"}),Object(s.jsx)("h4",{children:"Problem 23"}),Object(s.jsx)("p",{children:"A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number."}),Object(s.jsx)("p",{children:"A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n."}),Object(s.jsx)("p",{children:"As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit."}),Object(s.jsx)("p",{children:"Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers."})]}),Object(s.jsx)(i.default,{title:"JavaScript",children:"\n        () => {\n          let\n          limit = 28123,\n          abundants = [],\n          sieve = new Array(limit).fill(true),\n          sumsOfDivisors = new Array(limit).fill(1);\n\n          for (let i = 2; i <= limit; i++) {\n            for (let j = i + i; j < limit; j += i) {\n              sumsOfDivisors[j] += i;\n            }\n            if (sumsOfDivisors[i] > i && sumsOfDivisors[i] < limit) {\n              abundants.push(i);\n              abundants.map(abundant => {\n                sieve[abundant + i] = false;\n              });\n            }\n          }\n          return sieve.reduce((sum, value, key) => value\n            ? sum + key\n            : sum\n          , 0);\n        }\n    "})]})}},173:function(t,e,n){},174:function(t,e,n){},80:function(t,e,n){"use strict";n.r(e);var i=n(1),s=n.n(i),r=n(82),a=n(81),u=(n(174),n(0)),c=s.a.memo((function(t){var e=t.children,n=t.onInput,s=void 0===n?function(){}:n,c=t.title,o=Object(r.default)(e),l=Object(a.default)();return Object(i.useEffect)((function(){return s(o)}),[s,o]),Object(u.jsxs)("div",{className:"panel language-markup",children:[Object(u.jsx)("h3",{children:c}),Object(u.jsx)("button",{className:"reset",onClick:function(t){var e=t.currentTarget.parentNode.querySelector("code").textContent;navigator.clipboard.writeText(e).then((function(){return l("copied to clipboard")})).catch((function(){return l("copy to clipboard failed")}))},children:"Copy to Clipboard"}),Object(u.jsx)("pre",{children:Object(u.jsx)("code",{contentEditable:!0,spellCheck:"false",suppressContentEditableWarning:!0,onInput:function(t){var e=t.target;s(e.textContent)},children:o})})]})}));e.default=c},81:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return u}));var i=n(16),s=n(1),r=n(59),a=n.n(r);n(173);function u(){var t=Object(s.useState)(""),e=Object(i.a)(t,2),n=e[0],r=e[1];return Object(s.useEffect)((function(){return n&&a.a.toast({completeCallback:function(){return r("")},displayLength:2e3,html:n}),function(){return a.a.Toast.dismissAll()}}),[n]),r}},82:function(t,e,n){"use strict";function i(t){var e=t.split(/\r|\n/);e.pop(),e.shift();var n=e[0].match(/^\s+/g)||[];return(n?e.map((function(t){return t.replace(n[0],"")})):e).join("\r\n")}n.r(e),n.d(e,"default",(function(){return i}))}}]);
//# sourceMappingURL=20.d3f69941.chunk.js.map