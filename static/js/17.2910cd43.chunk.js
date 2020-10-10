(this.webpackJsonpwww=this.webpackJsonpwww||[]).push([[17,44,56,76],{104:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(86);t.default=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("section",{className:"accent-bottom panel"},i.a.createElement("h2",null,"Non-abundant sums"),i.a.createElement("h4",null,"Problem 23"),i.a.createElement("p",null,"A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number."),i.a.createElement("p",null,"A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n."),i.a.createElement("p",null,"As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit."),i.a.createElement("p",null,"Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.")),i.a.createElement(r.default,{title:"JavaScript"},"\n        () => {\n          let\n          limit = 28123,\n          abundants = [],\n          sieve = new Array(limit).fill(true),\n          sumsOfDivisors = new Array(limit).fill(1);\n\n          for (let i = 2; i <= limit; i++) {\n            for (let j = i + i; j < limit; j += i) {\n              sumsOfDivisors[j] += i;\n            }\n            if (sumsOfDivisors[i] > i && sumsOfDivisors[i] < limit) {\n              abundants.push(i);\n              abundants.map(abundant => {\n                sieve[abundant + i] = false;\n              });\n            }\n          }\n          return sieve.reduce((sum, value, key) => value\n            ? sum + key\n            : sum\n          , 0);\n        }\n    "))}},177:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(87),s=n(38);n(177);t.default=i.a.memo((function(e){var t=e.children,n=e.onInput,u=void 0===n?function(){}:n,l=e.title,o=Object(r.default)(t),c=Object(s.default)();return Object(a.useEffect)((function(){return u(o)}),[u,o]),i.a.createElement("div",{className:"panel language-markup"},i.a.createElement("h3",null,l),i.a.createElement("button",{className:"reset",onClick:function(e){var t=e.currentTarget.parentNode.querySelector("code").textContent;navigator.clipboard.writeText(t).then((function(){return c("copied to clipboard")})).catch((function(){return c("copy to clipboard failed")}))}},"Copy to Clipboard"),i.a.createElement("pre",null,i.a.createElement("code",{contentEditable:!0,spellCheck:"false",suppressContentEditableWarning:!0,onInput:function(e){var t=e.target;u(t.textContent)}},o)))}))},87:function(e,t,n){"use strict";n.r(t),t.default=function(e){var t=e.split(/\r|\n/);t.pop(),t.shift();var n=t[0].match(/^\s+/g)||[];return(n?t.map((function(e){return e.replace(n[0],"")})):t).join("\r\n")}}}]);
//# sourceMappingURL=17.2910cd43.chunk.js.map