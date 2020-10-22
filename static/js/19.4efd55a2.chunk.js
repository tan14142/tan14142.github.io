(this.webpackJsonppages=this.webpackJsonppages||[]).push([[19,39,47,54,69,72],{115:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(75);n.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"accent-bottom panel"},r.a.createElement("h2",null,"Reciprocal cycles"),r.a.createElement("h4",null,"Problem 26"),r.a.createElement("p",null,"A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:"),r.a.createElement("ol",{className:"padded"},r.a.createElement("li",null,"\xbd = 0.5"),r.a.createElement("li",null,"\u2153 = 0.(3)"),r.a.createElement("li",null,"\xbc = 0.25"),r.a.createElement("li",null,"\u2155 = 0.2"),r.a.createElement("li",null,"\u2159 = 0.1(6)"),r.a.createElement("li",null,"\u2150 = 0.(142857)"),r.a.createElement("li",null,"\u215b = 0.125"),r.a.createElement("li",null,"\u2151 = 0.(1)"),r.a.createElement("li",null,"\u2152 = 0.1")),r.a.createElement("p",null,"Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle."),r.a.createElement("p",null,"Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.")),r.a.createElement(l.default,{title:"JavaScript"},"\n        m => {\n          let\n          maxIndex = 0,\n          maxLength = 0;\n        \n          for (let i = m; i > 1; --i) {\n          \n            let\n            counter = 0,\n            dividend = 1,\n            length = 0,\n            reciprocals = [],\n            remainder = 1;\n            \n            while (true) {\n              dividend = remainder * 10;\n              remainder = dividend % i;\n              \n              if (remainder === 0) {\n                break;\n              }\n              if (reciprocals[remainder]) {\n                length = counter - reciprocals[remainder];\n                break;\n              }\n              \n              reciprocals[remainder] = counter++;\n            }\n            \n            if (length > maxLength) {\n              maxIndex = i;\n              maxLength = length;\n            }\n          }\n          return maxIndex;\n        }\n    "))}},155:function(e,n,t){},156:function(e,n,t){},75:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(77),c=t(76);t(156);n.default=r.a.memo((function(e){var n=e.children,t=e.onInput,i=void 0===t?function(){}:t,u=e.title,o=Object(l.default)(n),m=Object(c.default)();return Object(a.useEffect)((function(){return i(o)}),[i,o]),r.a.createElement("div",{className:"panel language-markup"},r.a.createElement("h3",null,u),r.a.createElement("button",{className:"reset",onClick:function(e){var n=e.currentTarget.parentNode.querySelector("code").textContent;navigator.clipboard.writeText(n).then((function(){return m("copied to clipboard")})).catch((function(){return m("copy to clipboard failed")}))}},"Copy to Clipboard"),r.a.createElement("pre",null,r.a.createElement("code",{contentEditable:!0,spellCheck:"false",suppressContentEditableWarning:!0,onInput:function(e){var n=e.target;i(n.textContent)}},o)))}))},76:function(e,n,t){"use strict";t.r(n);var a=t(14),r=t(0),l=t(55),c=t.n(l);t(155);n.default=function(){var e=Object(r.useState)(""),n=Object(a.a)(e,2),t=n[0],l=n[1];return Object(r.useEffect)((function(){return t&&c.a.toast({completeCallback:function(){return l("")},html:t}),function(){return c.a.Toast.dismissAll()}}),[t]),l}},77:function(e,n,t){"use strict";t.r(n),n.default=function(e){var n=e.split(/\r|\n/);n.pop(),n.shift();var t=n[0].match(/^\s+/g)||[];return(t?n.map((function(e){return e.replace(t[0],"")})):n).join("\r\n")}}}]);
//# sourceMappingURL=19.4efd55a2.chunk.js.map