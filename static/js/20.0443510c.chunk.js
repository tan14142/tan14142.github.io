(this.webpackJsonppages=this.webpackJsonppages||[]).push([[20,39,47,54,69,72],{116:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(75);n.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"accent-bottom panel"},r.a.createElement("h2",null,"Quadratic primes"),r.a.createElement("h4",null,"Problem 27"),r.a.createElement("p",null,"Euler discovered the remarkable quadratic formula:"),r.a.createElement("div",{className:"center"},"n\xb2 + n + 41"),r.a.createElement("p",null,"It turns out that the formula will produce 40 primes for the consecutive integer values 0 \u2264 n \u2264 39. However, when n = 40, 40\xb2 + 40 + 41 = 40(40 + 1) + 41 is divisible by 41, and certainly when n = 41, 41\xb2 + 41 + 41 is clearly divisible by 41."),r.a.createElement("p",null,"The incredible formula n\xb2 - 79n + 1601 was discovered, which produces 80 primes for the consecutive values 0 \u2264 n \u2264 79. The product of the coefficients, -79 and 1601, is -126479."),r.a.createElement("p",null,"Considering quadratics of the form:"),r.a.createElement("div",{className:"center"},"n\xb2 + an + b, where |a| < 1000 and |b| \u2264 1000",r.a.createElement("br",null),"where |n| is the modulus/absolute value of n",r.a.createElement("br",null),"e.g. |11| = 11 and |-4| = 4"),r.a.createElement("p",null,"Find the product of the coefficients, a and b, for the quadratic expression that produces the maximum number of primes for consecutive values of n, starting with n = 0.")),r.a.createElement(i.default,{title:"JavaScript"},"\n        m => {\n          const primes = Array(m + 1).fill(true);\n          primes[0] = primes[1] = false;\n          \n          for (let i = 2; i < Math.sqrt(m); i++) {\n            if (primes[i]) {\n              for (let j = i * i; j <= m; j += i) {\n                primes[j] = false;\n              }\n            }\n          }\n          \n          let\n          result = { max: 0 },\n          swapB = b => {\n            let a = m % 2\n              ? -m + 2\n              : -m + 1;\n            \n            for (; a < m; a += 2) {\n            \n              let n = 0;\n              \n              while (primes[n * n + n * a + b]) {\n                n++;\n              }\n              \n              if (n > result.max) {\n                result = {\n                  a: a,\n                  b: b,\n                  max: n\n                };\n              }\n            }\n          };\n          \n          for (let i = m; i >= 0; i--) {\n            if (primes[i]) {\n              swapB(i);\n              swapB(-i);\n            }\n          }\n\n          return result.a * result.b;\n        }\n    "))}},155:function(e,n,t){},156:function(e,n,t){},75:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(77),l=t(76);t(156);n.default=r.a.memo((function(e){var n=e.children,t=e.onInput,c=void 0===t?function(){}:t,u=e.title,o=Object(i.default)(n),s=Object(l.default)();return Object(a.useEffect)((function(){return c(o)}),[c,o]),r.a.createElement("div",{className:"panel language-markup"},r.a.createElement("h3",null,u),r.a.createElement("button",{className:"reset",onClick:function(e){var n=e.currentTarget.parentNode.querySelector("code").textContent;navigator.clipboard.writeText(n).then((function(){return s("copied to clipboard")})).catch((function(){return s("copy to clipboard failed")}))}},"Copy to Clipboard"),r.a.createElement("pre",null,r.a.createElement("code",{contentEditable:!0,spellCheck:"false",suppressContentEditableWarning:!0,onInput:function(e){var n=e.target;c(n.textContent)}},o)))}))},76:function(e,n,t){"use strict";t.r(n);var a=t(14),r=t(0),i=t(55),l=t.n(i);t(155);n.default=function(){var e=Object(r.useState)(""),n=Object(a.a)(e,2),t=n[0],i=n[1];return Object(r.useEffect)((function(){return t&&l.a.toast({completeCallback:function(){return i("")},html:t}),function(){return l.a.Toast.dismissAll()}}),[t]),i}},77:function(e,n,t){"use strict";t.r(n),n.default=function(e){var n=e.split(/\r|\n/);n.pop(),n.shift();var t=n[0].match(/^\s+/g)||[];return(t?n.map((function(e){return e.replace(t[0],"")})):n).join("\r\n")}}}]);
//# sourceMappingURL=20.0443510c.chunk.js.map