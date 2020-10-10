(this.webpackJsonpwww=this.webpackJsonpwww||[]).push([[5,44,56,76],{177:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var l=n(0),r=n.n(l),a=n(87),i=n(38);n(177);t.default=r.a.memo((function(e){var t=e.children,n=e.onInput,c=void 0===n?function(){}:n,u=e.title,o=Object(a.default)(t),s=Object(i.default)();return Object(l.useEffect)((function(){return c(o)}),[c,o]),r.a.createElement("div",{className:"panel language-markup"},r.a.createElement("h3",null,u),r.a.createElement("button",{className:"reset",onClick:function(e){var t=e.currentTarget.parentNode.querySelector("code").textContent;navigator.clipboard.writeText(t).then((function(){return s("copied to clipboard")})).catch((function(){return s("copy to clipboard failed")}))}},"Copy to Clipboard"),r.a.createElement("pre",null,r.a.createElement("code",{contentEditable:!0,spellCheck:"false",suppressContentEditableWarning:!0,onInput:function(e){var t=e.target;c(t.textContent)}},o)))}))},87:function(e,t,n){"use strict";n.r(t),t.default=function(e){var t=e.split(/\r|\n/);t.pop(),t.shift();var n=t[0].match(/^\s+/g)||[];return(n?t.map((function(e){return e.replace(n[0],"")})):t).join("\r\n")}},97:function(e,t,n){"use strict";n.r(t);var l=n(0),r=n.n(l),a=n(86);t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"accent-bottom panel"},r.a.createElement("h2",null,"Highly divisible triangular number"),r.a.createElement("h4",null,"Problem 12"),r.a.createElement("p",null,"The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:"),r.a.createElement("div",{className:"center"},"1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ..."),r.a.createElement("p",null,"Let us list the factors of the first seven triangle numbers:"),r.a.createElement("table",{className:"concise-table container highlight striped",style:{lineHeight:"1rem",width:"10rem"}},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"1:"),r.a.createElement("td",null,"1")),r.a.createElement("tr",null,r.a.createElement("td",null,"3:"),r.a.createElement("td",null,"1, 3")),r.a.createElement("tr",null,r.a.createElement("td",null,"6:"),r.a.createElement("td",null,"1, 2, 3, 6")),r.a.createElement("tr",null,r.a.createElement("td",null,"10:"),r.a.createElement("td",null,"1, 2, 5, 10")),r.a.createElement("tr",null,r.a.createElement("td",null,"15:"),r.a.createElement("td",null,"1, 3, 5, 15")),r.a.createElement("tr",null,r.a.createElement("td",null,"21:"),r.a.createElement("td",null,"1, 3, 7, 21")),r.a.createElement("tr",null,r.a.createElement("td",null,"28:"),r.a.createElement("td",null,"1, 2, 4, 7, 14, 28")))),r.a.createElement("p",null,"We can see that 28 is the first triangle number to have over five divisors."),r.a.createElement("p",null,"What is the value of the first triangle number to have over five hundred divisors?")),r.a.createElement(a.default,{title:"JavaScript"},"\n        m => {\n          let\n          primes = [],\n          tDividers = 1,\n          t1 = 1,\n          t2 = 1,\n\n          primeFactorization = n => {\n            \n            let dividers = 1;\n            \n            for (let key = 0; primes[key] <= n; key++) {\n              \n              let power = 1;\n              \n              while (n % primes[key] === 0) {\n                n /= primes[key];\n                power++;\n              }\n              dividers *= power;\n            }\n            return dividers;\n          };\n\n          const\n          list = Array(m * 4).fill(true);\n          list[0] = list[1] = false;\n          \n          list.map((v, k) => {\n            if (v) {\n              primes.push(k);\n              for (let key = k * k; key < list.length; key += k) {\n                list[key] = false;\n              }\n            }\n          });\n\n          for (var counter = 2; tDividers <= m ; counter++) {\n            if (counter % 2) {\n              t1 = primeFactorization((counter + 1) / 2);\n            }\n            else {\n              t2 = primeFactorization(counter + 1);\n            }\n            tDividers = t1 * t2;\n          }\n          return counter * (counter - 1) / 2;\n        }\n    "))}}}]);
//# sourceMappingURL=5.9ddacde2.chunk.js.map