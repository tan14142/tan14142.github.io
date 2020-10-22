(this.webpackJsonppages=this.webpackJsonppages||[]).push([[4,39,47,54,69,72],{155:function(e,t,n){},156:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(77),i=n(76);n(156);t.default=a.a.memo((function(e){var t=e.children,n=e.onInput,c=void 0===n?function(){}:n,u=e.title,o=Object(l.default)(t),s=Object(i.default)();return Object(r.useEffect)((function(){return c(o)}),[c,o]),a.a.createElement("div",{className:"panel language-markup"},a.a.createElement("h3",null,u),a.a.createElement("button",{className:"reset",onClick:function(e){var t=e.currentTarget.parentNode.querySelector("code").textContent;navigator.clipboard.writeText(t).then((function(){return s("copied to clipboard")})).catch((function(){return s("copy to clipboard failed")}))}},"Copy to Clipboard"),a.a.createElement("pre",null,a.a.createElement("code",{contentEditable:!0,spellCheck:"false",suppressContentEditableWarning:!0,onInput:function(e){var t=e.target;c(t.textContent)}},o)))}))},76:function(e,t,n){"use strict";n.r(t);var r=n(14),a=n(0),l=n(55),i=n.n(l);n(155);t.default=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),n=t[0],l=t[1];return Object(a.useEffect)((function(){return n&&i.a.toast({completeCallback:function(){return l("")},html:n}),function(){return i.a.Toast.dismissAll()}}),[n]),l}},77:function(e,t,n){"use strict";n.r(t),t.default=function(e){var t=e.split(/\r|\n/);t.pop(),t.shift();var n=t[0].match(/^\s+/g)||[];return(n?t.map((function(e){return e.replace(n[0],"")})):t).join("\r\n")}},83:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(75);t.default=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("section",{className:"accent-bottom panel"},a.a.createElement("h2",null,"Highly divisible triangular number"),a.a.createElement("h4",null,"Problem 12"),a.a.createElement("p",null,"The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:"),a.a.createElement("div",{className:"center"},"1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ..."),a.a.createElement("p",null,"Let us list the factors of the first seven triangle numbers:"),a.a.createElement("table",{className:"concise-table container highlight striped",style:{lineHeight:"1rem",width:"10rem"}},a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"1:"),a.a.createElement("td",null,"1")),a.a.createElement("tr",null,a.a.createElement("td",null,"3:"),a.a.createElement("td",null,"1, 3")),a.a.createElement("tr",null,a.a.createElement("td",null,"6:"),a.a.createElement("td",null,"1, 2, 3, 6")),a.a.createElement("tr",null,a.a.createElement("td",null,"10:"),a.a.createElement("td",null,"1, 2, 5, 10")),a.a.createElement("tr",null,a.a.createElement("td",null,"15:"),a.a.createElement("td",null,"1, 3, 5, 15")),a.a.createElement("tr",null,a.a.createElement("td",null,"21:"),a.a.createElement("td",null,"1, 3, 7, 21")),a.a.createElement("tr",null,a.a.createElement("td",null,"28:"),a.a.createElement("td",null,"1, 2, 4, 7, 14, 28")))),a.a.createElement("p",null,"We can see that 28 is the first triangle number to have over five divisors."),a.a.createElement("p",null,"What is the value of the first triangle number to have over five hundred divisors?")),a.a.createElement(l.default,{title:"JavaScript"},"\n        m => {\n          let\n          primes = [],\n          tDividers = 1,\n          t1 = 1,\n          t2 = 1,\n\n          primeFactorization = n => {\n            \n            let dividers = 1;\n            \n            for (let key = 0; primes[key] <= n; key++) {\n              \n              let power = 1;\n              \n              while (n % primes[key] === 0) {\n                n /= primes[key];\n                power++;\n              }\n              dividers *= power;\n            }\n            return dividers;\n          };\n\n          const\n          list = Array(m * 4).fill(true);\n          list[0] = list[1] = false;\n          \n          list.map((v, k) => {\n            if (v) {\n              primes.push(k);\n              for (let key = k * k; key < list.length; key += k) {\n                list[key] = false;\n              }\n            }\n          });\n\n          for (var counter = 2; tDividers <= m ; counter++) {\n            if (counter % 2) {\n              t1 = primeFactorization((counter + 1) / 2);\n            }\n            else {\n              t2 = primeFactorization(counter + 1);\n            }\n            tDividers = t1 * t2;\n          }\n          return counter * (counter - 1) / 2;\n        }\n    "))}}}]);
//# sourceMappingURL=4.2e176562.chunk.js.map