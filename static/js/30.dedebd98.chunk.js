(this.webpackJsonppages=this.webpackJsonppages||[]).push([[30,47,55,62,83,86],{105:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return i}));var r=n(80),c=n(0);function i(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("section",{className:"accent-bottom panel",children:[Object(c.jsx)("h2",{children:"Smallest multiple"}),Object(c.jsx)("h4",{children:"Problem 5"}),Object(c.jsx)("p",{children:"2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder."}),Object(c.jsx)("p",{children:"What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?"})]}),Object(c.jsx)(r.default,{title:"JavaScript",children:"\n        m => {\n\n          let i = m;\n\n          while (true) {\n            for (let j = m - 1; j > 1; j--) {\n              if (i % j > 0) {\n                break;\n              }\n              else if (j === 2) {\n                return i;\n              }\n            }\n            i += m;\n          }\n        }\n    "})]})}},173:function(t,e,n){},174:function(t,e,n){},80:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),i=n(82),a=n(81),o=(n(174),n(0)),s=c.a.memo((function(t){var e=t.children,n=t.onInput,c=void 0===n?function(){}:n,s=t.title,u=Object(i.default)(e),l=Object(a.default)();return Object(r.useEffect)((function(){return c(u)}),[c,u]),Object(o.jsxs)("div",{className:"panel language-markup",children:[Object(o.jsx)("h3",{children:s}),Object(o.jsx)("button",{className:"reset",onClick:function(t){var e=t.currentTarget.parentNode.querySelector("code").textContent;navigator.clipboard.writeText(e).then((function(){return l("copied to clipboard")})).catch((function(){return l("copy to clipboard failed")}))},children:"Copy to Clipboard"}),Object(o.jsx)("pre",{children:Object(o.jsx)("code",{contentEditable:!0,spellCheck:"false",suppressContentEditableWarning:!0,onInput:function(t){var e=t.target;c(e.textContent)},children:u})})]})}));e.default=s},81:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return o}));var r=n(16),c=n(1),i=n(59),a=n.n(i);n(173);function o(){var t=Object(c.useState)(""),e=Object(r.a)(t,2),n=e[0],i=e[1];return Object(c.useEffect)((function(){return n&&a.a.toast({completeCallback:function(){return i("")},displayLength:2e3,html:n}),function(){return a.a.Toast.dismissAll()}}),[n]),i}},82:function(t,e,n){"use strict";function r(t){var e=t.split(/\r|\n/);e.pop(),e.shift();var n=e[0].match(/^\s+/g)||[];return(n?e.map((function(t){return t.replace(n[0],"")})):e).join("\r\n")}n.r(e),n.d(e,"default",(function(){return r}))}}]);
//# sourceMappingURL=30.dedebd98.chunk.js.map