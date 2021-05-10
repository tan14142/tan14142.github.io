(this.webpackJsonppages=this.webpackJsonppages||[]).push([[11,47,55,62,83,86],{173:function(t,e,n){},174:function(t,e,n){},80:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),i=n(82),o=n(81),a=(n(174),n(0)),u=c.a.memo((function(t){var e=t.children,n=t.onInput,c=void 0===n?function(){}:n,u=t.title,s=Object(i.default)(e),l=Object(o.default)();return Object(r.useEffect)((function(){return c(s)}),[c,s]),Object(a.jsxs)("div",{className:"panel language-markup",children:[Object(a.jsx)("h3",{children:u}),Object(a.jsx)("button",{className:"reset",onClick:function(t){var e=t.currentTarget.parentNode.querySelector("code").textContent;navigator.clipboard.writeText(e).then((function(){return l("copied to clipboard")})).catch((function(){return l("copy to clipboard failed")}))},children:"Copy to Clipboard"}),Object(a.jsx)("pre",{children:Object(a.jsx)("code",{contentEditable:!0,spellCheck:"false",suppressContentEditableWarning:!0,onInput:function(t){var e=t.target;c(e.textContent)},children:s})})]})}));e.default=u},81:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return a}));var r=n(16),c=n(1),i=n(59),o=n.n(i);n(173);function a(){var t=Object(c.useState)(""),e=Object(r.a)(t,2),n=e[0],i=e[1];return Object(c.useEffect)((function(){return n&&o.a.toast({completeCallback:function(){return i("")},displayLength:2e3,html:n}),function(){return o.a.Toast.dismissAll()}}),[n]),i}},82:function(t,e,n){"use strict";function r(t){var e=t.split(/\r|\n/);e.pop(),e.shift();var n=e[0].match(/^\s+/g)||[];return(n?e.map((function(t){return t.replace(n[0],"")})):e).join("\r\n")}n.r(e),n.d(e,"default",(function(){return r}))},95:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return i}));var r=n(80),c=n(0);function i(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("section",{className:"accent-bottom panel",children:[Object(c.jsx)("h2",{children:"Lattice paths"}),Object(c.jsx)("h4",{children:"Problem 15"}),Object(c.jsx)("p",{children:"Starting in the top left corner of a 2\xd72 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner."}),Object(c.jsx)("div",{className:"center",children:Object(c.jsx)("img",{alt:"Lattice paths",src:"/Projects/Project-Euler/P15.png"})}),Object(c.jsx)("p",{children:"How many such routes are there through a 20\xd720 grid?"})]}),Object(c.jsx)(r.default,{title:"JavaScript",children:"\n        m => {\n          const f = (n, limit) => {\n            let prod = 1;\n            for (let i = n; i > limit; i -= 1) {\n              prod *= i;\n            }\n            return prod;\n          }\n          return Math.round(f(m * 2, m) / f(m, 1));\n        }\n    "})]})}}}]);
//# sourceMappingURL=11.e938022f.chunk.js.map