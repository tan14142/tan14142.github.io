(this.webpackJsonpwww=this.webpackJsonpwww||[]).push([[32,44,56,76],{114:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(86);t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"accent-bottom panel"},r.a.createElement("h2",null,"Largest exponential"),r.a.createElement("h4",null,"Problem 99"),r.a.createElement("p",null,"Comparing two numbers written in index form like 2\xb9\xb9 and 3\u2077 is not difficult, as any calculator would confirm that 2\xb9\xb9 = 2048 < 3\u2077 = 2187."),r.a.createElement("p",null,"However, confirming that 632382\u2075\xb9\u2078\u2070\u2076\xb9 > 519432\u2075\xb2\u2075\u2078\u2070\u2076 would be much more difficult, as both numbers contain over three million digits."),r.a.createElement("p",null,"Using ",r.a.createElement("a",{href:"/Projects/Project-Euler/P9.txt"},"base_exp.txt")," (right click and 'Save Link/Target As...'), a 22K text file containing one thousand lines with a base/exponent pair on each line, determine which line number has the greatest numerical value."),r.a.createElement("p",null,"NOTE: The first two lines in the file represent the numbers in the example given above.")),r.a.createElement(l.default,{title:"JavaScript"},"\n        m => {\n          const\n          { csvParseRows, values } = require('d3'),\n          fs = require('fs'),    \n          buffer = fs.readFileSync(process.cwd() + '/public/Projects/Project-Euler/P99.txt'),\n          data = csvParseRows(String(buffer));\n\n          let\n          c = 0,\n          r = '';\n          m = m || data.length;\n\n          for (let i = 0; i < m; i++) {\n            let\n            v = values(data[i]),\n            p = Math.log(v[0]) * v[1];\n            if (p > c) {\n              c = p;\n              r = v.join();\n            }\n          }\n          return r;\n        }\n    "))}},177:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(87),i=n(38);n(177);t.default=r.a.memo((function(e){var t=e.children,n=e.onInput,c=void 0===n?function(){}:n,o=e.title,u=Object(l.default)(t),s=Object(i.default)();return Object(a.useEffect)((function(){return c(u)}),[c,u]),r.a.createElement("div",{className:"panel language-markup"},r.a.createElement("h3",null,o),r.a.createElement("button",{className:"reset",onClick:function(e){var t=e.currentTarget.parentNode.querySelector("code").textContent;navigator.clipboard.writeText(t).then((function(){return s("copied to clipboard")})).catch((function(){return s("copy to clipboard failed")}))}},"Copy to Clipboard"),r.a.createElement("pre",null,r.a.createElement("code",{contentEditable:!0,spellCheck:"false",suppressContentEditableWarning:!0,onInput:function(e){var t=e.target;c(t.textContent)}},u)))}))},87:function(e,t,n){"use strict";n.r(t),t.default=function(e){var t=e.split(/\r|\n/);t.pop(),t.shift();var n=t[0].match(/^\s+/g)||[];return(n?t.map((function(e){return e.replace(n[0],"")})):t).join("\r\n")}}}]);
//# sourceMappingURL=32.981a9c9c.chunk.js.map