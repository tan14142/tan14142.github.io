(this.webpackJsonpwww=this.webpackJsonpwww||[]).push([[2,44,56,76],{177:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(87),c=n(38);n(177);t.default=l.a.memo((function(e){var t=e.children,n=e.onInput,u=void 0===n?function(){}:n,o=e.title,i=Object(r.default)(t),s=Object(c.default)();return Object(a.useEffect)((function(){return u(i)}),[u,i]),l.a.createElement("div",{className:"panel language-markup"},l.a.createElement("h3",null,o),l.a.createElement("button",{className:"reset",onClick:function(e){var t=e.currentTarget.parentNode.querySelector("code").textContent;navigator.clipboard.writeText(t).then((function(){return s("copied to clipboard")})).catch((function(){return s("copy to clipboard failed")}))}},"Copy to Clipboard"),l.a.createElement("pre",null,l.a.createElement("code",{contentEditable:!0,spellCheck:"false",suppressContentEditableWarning:!0,onInput:function(e){var t=e.target;u(t.textContent)}},i)))}))},87:function(e,t,n){"use strict";n.r(t),t.default=function(e){var t=e.split(/\r|\n/);t.pop(),t.shift();var n=t[0].match(/^\s+/g)||[];return(n?t.map((function(e){return e.replace(n[0],"")})):t).join("\r\n")}},94:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(86);t.default=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"accent-bottom panel"},l.a.createElement("h2",null,"Multiples of 3 and 5"),l.a.createElement("h4",null,"Problem 1"),l.a.createElement("p",null,"If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23."),l.a.createElement("p",null,"Find the sum of all the multiples of 3 or 5 below 1000.")),l.a.createElement(r.default,{title:"JavaScript"},"\n        m => {\n          let result = 0;\n\n          for (let i = 1; i < m; i++) {\n            result += (!(i % 3) || !(i % 5)) && i;\n          }\n\n          return result;\n        }\n    "))}}}]);
//# sourceMappingURL=2.09cc772f.chunk.js.map