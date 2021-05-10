(this.webpackJsonppages=this.webpackJsonppages||[]).push([[26,47,55,62,83,86],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var c=n(80),r=n(0);function i(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("section",{className:"accent-bottom panel",children:[Object(r.jsx)("h2",{children:"Distinct powers"}),Object(r.jsx)("h4",{children:"Problem 29"}),Object(r.jsx)("p",{children:"Consider all integer combinations of a\u1d47 for 2 \u2264 a \u2264 5 and 2 \u2264 b \u2264 5:"}),Object(r.jsxs)("ol",{className:"padded2",children:[Object(r.jsx)("li",{children:"2\xb2=4, 2\xb3=8, 2\u2074=16, 2\u2075=32"}),Object(r.jsx)("li",{children:"3\xb2=9, 3\xb3=27, 3\u2074=81, 3\u2075=243"}),Object(r.jsx)("li",{children:"4\xb2=16, 4\xb3=64, 4\u2074=256, 4\u2075=1024"}),Object(r.jsx)("li",{children:"5\xb2=25, 5\xb3=125, 5\u2074=625, 5\u2075=3125"})]}),Object(r.jsx)("p",{children:"If they are then placed in numerical order, with any repeats removed, we get the following sequence of 15 distinct terms:"}),Object(r.jsx)("div",{className:"center",children:"4, 8, 9, 16, 25, 27, 32, 64, 81, 125, 243, 256, 625, 1024, 3125"}),Object(r.jsx)("p",{children:"How many distinct terms are in the sequence generated by a\u1d47 for 2 \u2264 a \u2264 100 and 2 \u2264 b \u2264 100?"})]}),Object(r.jsx)(c.default,{title:"JavaScript",children:"\n        m => {\n          const sets = [];\n        \n          for (let i = BigInt(2); i <= m; i++) {\n            let power = i;\n            for (let j = 2; j <= m; j++) {\n              power *= i;\n              if (!sets.includes(power)) {\n                sets.push(power);\n              }\n            }\n          }\n          return sets.length;\n        }\n    "})]})}},173:function(e,t,n){},174:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(82),s=n(81),a=(n(174),n(0)),o=r.a.memo((function(e){var t=e.children,n=e.onInput,r=void 0===n?function(){}:n,o=e.title,l=Object(i.default)(t),u=Object(s.default)();return Object(c.useEffect)((function(){return r(l)}),[r,l]),Object(a.jsxs)("div",{className:"panel language-markup",children:[Object(a.jsx)("h3",{children:o}),Object(a.jsx)("button",{className:"reset",onClick:function(e){var t=e.currentTarget.parentNode.querySelector("code").textContent;navigator.clipboard.writeText(t).then((function(){return u("copied to clipboard")})).catch((function(){return u("copy to clipboard failed")}))},children:"Copy to Clipboard"}),Object(a.jsx)("pre",{children:Object(a.jsx)("code",{contentEditable:!0,spellCheck:"false",suppressContentEditableWarning:!0,onInput:function(e){var t=e.target;r(t.textContent)},children:l})})]})}));t.default=o},81:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));var c=n(16),r=n(1),i=n(59),s=n.n(i);n(173);function a(){var e=Object(r.useState)(""),t=Object(c.a)(e,2),n=t[0],i=t[1];return Object(r.useEffect)((function(){return n&&s.a.toast({completeCallback:function(){return i("")},displayLength:2e3,html:n}),function(){return s.a.Toast.dismissAll()}}),[n]),i}},82:function(e,t,n){"use strict";function c(e){var t=e.split(/\r|\n/);t.pop(),t.shift();var n=t[0].match(/^\s+/g)||[];return(n?t.map((function(e){return e.replace(n[0],"")})):t).join("\r\n")}n.r(t),n.d(t,"default",(function(){return c}))}}]);
//# sourceMappingURL=26.057ca36d.chunk.js.map