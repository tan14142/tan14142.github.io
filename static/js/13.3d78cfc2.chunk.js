(this.webpackJsonpwww=this.webpackJsonpwww||[]).push([[13,44,56,76],{100:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(86);t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"accent-bottom panel"},r.a.createElement("h2",null,"Even Fibonacci numbers"),r.a.createElement("h4",null,"Problem 2"),r.a.createElement("p",null,"Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:"),r.a.createElement("div",{className:"center"},"1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ..."),r.a.createElement("p",null,"By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.")),r.a.createElement(c.default,{title:"JavaScript"},"\n        m => {\n          let\n          i = 0,\n          j = 1,\n          k,\n          result = 0;\n  \n          while (j <= m) {\n            k = j;\n            j += i;\n            i = k;\n            if (i % 2 === 0) {\n              result += i;\n            }\n          }\n          return result;\n        }\n    "))}},177:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(87),i=n(38);n(177);t.default=r.a.memo((function(e){var t=e.children,n=e.onInput,l=void 0===n?function(){}:n,o=e.title,u=Object(c.default)(t),s=Object(i.default)();return Object(a.useEffect)((function(){return l(u)}),[l,u]),r.a.createElement("div",{className:"panel language-markup"},r.a.createElement("h3",null,o),r.a.createElement("button",{className:"reset",onClick:function(e){var t=e.currentTarget.parentNode.querySelector("code").textContent;navigator.clipboard.writeText(t).then((function(){return s("copied to clipboard")})).catch((function(){return s("copy to clipboard failed")}))}},"Copy to Clipboard"),r.a.createElement("pre",null,r.a.createElement("code",{contentEditable:!0,spellCheck:"false",suppressContentEditableWarning:!0,onInput:function(e){var t=e.target;l(t.textContent)}},u)))}))},87:function(e,t,n){"use strict";n.r(t),t.default=function(e){var t=e.split(/\r|\n/);t.pop(),t.shift();var n=t[0].match(/^\s+/g)||[];return(n?t.map((function(e){return e.replace(n[0],"")})):t).join("\r\n")}}}]);
//# sourceMappingURL=13.3d78cfc2.chunk.js.map