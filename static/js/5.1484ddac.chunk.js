(this.webpackJsonppages=this.webpackJsonppages||[]).push([[5,47,55,62,83,86],{173:function(t,e,n){},174:function(t,e,n){},80:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),i=n(82),u=n(81),a=(n(174),n(0)),l=c.a.memo((function(t){var e=t.children,n=t.onInput,c=void 0===n?function(){}:n,l=t.title,o=Object(i.default)(e),s=Object(u.default)();return Object(r.useEffect)((function(){return c(o)}),[c,o]),Object(a.jsxs)("div",{className:"panel language-markup",children:[Object(a.jsx)("h3",{children:l}),Object(a.jsx)("button",{className:"reset",onClick:function(t){var e=t.currentTarget.parentNode.querySelector("code").textContent;navigator.clipboard.writeText(e).then((function(){return s("copied to clipboard")})).catch((function(){return s("copy to clipboard failed")}))},children:"Copy to Clipboard"}),Object(a.jsx)("pre",{children:Object(a.jsx)("code",{contentEditable:!0,spellCheck:"false",suppressContentEditableWarning:!0,onInput:function(t){var e=t.target;c(e.textContent)},children:o})})]})}));e.default=l},81:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return a}));var r=n(16),c=n(1),i=n(59),u=n.n(i);n(173);function a(){var t=Object(c.useState)(""),e=Object(r.a)(t,2),n=e[0],i=e[1];return Object(c.useEffect)((function(){return n&&u.a.toast({completeCallback:function(){return i("")},displayLength:2e3,html:n}),function(){return u.a.Toast.dismissAll()}}),[n]),i}},82:function(t,e,n){"use strict";function r(t){var e=t.split(/\r|\n/);e.pop(),e.shift();var n=e[0].match(/^\s+/g)||[];return(n?e.map((function(t){return t.replace(n[0],"")})):e).join("\r\n")}n.r(e),n.d(e,"default",(function(){return r}))},90:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return i}));var r=n(80),c=n(0);function i(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("section",{className:"accent-bottom panel",children:[Object(c.jsx)("h2",{children:"Multiples of 3 and 5"}),Object(c.jsx)("h4",{children:"Problem 1"}),Object(c.jsx)("p",{children:"If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23."}),Object(c.jsx)("p",{children:"Find the sum of all the multiples of 3 or 5 below 1000."})]}),Object(c.jsx)(r.default,{title:"JavaScript",children:"\n        m => {\n          let result = 0;\n\n          for (let i = 1; i < m; i++) {\n            result += (!(i % 3) || !(i % 5)) && i;\n          }\n\n          return result;\n        }\n    "})]})}}}]);
//# sourceMappingURL=5.1484ddac.chunk.js.map