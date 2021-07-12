(this.webpackJsonppages=this.webpackJsonppages||[]).push([[44,45,81,86,87,96,100,118,120,121],{159:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var c=n(84),r=n(0);function i(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("section",{className:"panel",children:[Object(r.jsx)("h2",{children:"A Guide to Typescript"}),Object(r.jsx)("h4",{children:"Getting Started"}),Object(r.jsx)("p",{children:"This guide will outline how to port your existing CRA application from ES to Typescript. If you are using CRA like I do, you can safely follow the offial documentation here:"}),Object(r.jsx)("a",{href:"https://create-react-app.dev/docs/adding-typescript/",children:"https://create-react-app.dev/docs/adding-typescript/"}),Object(r.jsx)("p",{children:"Or simply stick to this guide and do it the minimalist and lazy way."})]}),Object(r.jsx)(c.default,{indent:!1,lang:{Bash:"\n        npm i -D @types/node @types/react @types/react-dom @types/react-router\n        @types/react-router-dom typescript\n      "}}),Object(r.jsx)("section",{className:"panel",children:Object(r.jsx)("p",{children:"Next rename all your file extensions in the src subdirectory: .js to .ts and .jsx to .tsx."})}),Object(r.jsxs)("section",{className:"panel",children:[Object(r.jsx)("h4",{children:"Troubleshooting"}),Object(r.jsx)("p",{children:"Now it is time to fix missing types. As usual, your best approach is Google. Search for the types of your 3rd party dependencies which are usually hosted on npm. Another good resource is DefinitelyTyped on github. If you cannot find the right @types for the 3rd party library, open up your project directory. Inside src you will find a file named react-app-env. Declare every library without types here:"})]}),Object(r.jsx)(c.default,{indent:!1,lang:{TypeScript:"\n          declare module 'libraryname';\n      "}}),Object(r.jsx)("section",{className:"panel",children:Object(r.jsx)("p",{children:"If you have a bunch components that you do not want to translate from ES to Typescript straight away, you can add them onto the exclude array. This will allow you to start fresh and not worrying about old code. ES code will work without porting, since it is a subset of Typescript. To ignore your newly renamed files from src, open up tsconfig.json and create an exclude array. Add any file to the array that you do not want to rewrite straight away."})}),Object(r.jsx)(c.default,{indent:!1,lang:{"tsconfig.json":'\n        "exclude": [\n          "src/App.tsx",\n          "src/Router.tsx",\n          "src/index.tsx"\n        ],\n        "include": [\n          "src"\n        ]\n      '}}),Object(r.jsx)("h2",{children:"Shallow Dive into Types"}),Object(r.jsx)(c.default,{indent:!1,lang:{TypeScript:"\n        //explicite type declaration\n        let a: number;\n\n        //implicite type declaration\n        let b = 5;\n\n        //implicite any\n        let c;\n      "}}),Object(r.jsxs)("section",{className:"panel",children:[Object(r.jsx)("h2",{children:"Basic Types"}),Object(r.jsxs)("table",{className:"highlight responsive-table",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Type"}),Object(r.jsx)("th",{children:"Code"})]})}),Object(r.jsxs)("tbody",{children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Boolean"}),Object(r.jsx)("td",{children:": bool"})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Number"}),Object(r.jsx)("td",{children:": number"})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"String"}),Object(r.jsx)("td",{children:": string"})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Array"}),Object(r.jsx)("td",{children:": string[] or : number[]"})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Tuple"}),Object(r.jsx)("td",{children:": [bool, number, string]"})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Enum"}),Object(r.jsx)("td",{children:"enum Color { Red, Blue = 4 }"})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Any"}),Object(r.jsx)("td",{children:": any"})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Void"}),Object(r.jsx)("td",{children:": void"})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Null"}),Object(r.jsx)("td",{children:": null"})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Undefined"}),Object(r.jsx)("td",{children:": undefined"})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Never"}),Object(r.jsx)("td",{children:": never"})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Object"}),Object(r.jsx)("td",{children:"{ key1: bool, key2?: any }"})]})]})]})]}),Object(r.jsx)("h2",{children:"Union Types"}),Object(r.jsx)(c.default,{indent:!1,lang:{TypeScript:"\n        let a: number | boolean | null;\n      "}}),Object(r.jsx)("h2",{children:"Optional Parameters"}),Object(r.jsx)("h2",{children:"Interfaces"}),Object(r.jsx)(c.default,{indent:!1,lang:{TypeScript:"\n        interface Person {\n          firstName: string,\n          lastName: string\n        }\n      "}}),Object(r.jsx)("h2",{children:"setter getter"})]})}},176:function(e,t,n){},177:function(e,t,n){},178:function(e,t,n){},80:function(e,t,n){"use strict";function c(e){var t=e.split(/\r|\n/);t.pop(),t.shift();var n=t[0].match(/^\s+/g)||[];return(n?t.map((function(e){return e.replace(n[0],"")})):t).join("\r\n")}n.r(t),n.d(t,"default",(function(){return c}))},81:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));var c=n(1),r=n.n(c),i=n(6),s=n(59),l=n.n(s),d=(n(176),n(0));function a(e){var t=e.children,n=e.tabs,s=Object(c.useRef)(null);return Object(c.useEffect)((function(){var e=l.a.Tabs.init(s.current,{});return function(){return e.destroy()}}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("ul",{className:"tabs",ref:s,children:n.map((function(e,t){return Object(d.jsx)("li",{className:"tab",children:Object(d.jsx)(i.b,{to:"#"+e,children:e})},t)}))}),r.a.Children.toArray(t).map((function(e,t){return Object(d.jsx)("div",{className:"flex-column",id:n[t],children:e},t)}))]})}},82:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var c=n(1),r=n(80),i=n(85),s=n(0);function l(e){var t=e.indent,n=void 0===t||t,l=e.lang,d=e.onInput,a=void 0===d?function(){}:d,o=Object(i.default)(),j=Object.values(l)[0];return n||(j=Object(r.default)(j)),Object(c.useEffect)((function(){return a(j)}),[a,j]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("button",{className:"reset",onClick:function(e){var t=e.currentTarget.parentNode.querySelector("code").textContent;navigator.clipboard.writeText(t).then((function(){return o("copied to clipboard")})).catch((function(){return o("copy to clipboard failed")}))},children:"Copy to Clipboard"}),Object(s.jsx)("pre",{children:Object(s.jsx)("code",{contentEditable:!0,className:"hljs language-"+Object.keys(l)[0].toLowerCase(),spellCheck:"false",suppressContentEditableWarning:!0,onInput:function(e){var t=e.target;a(t.textContent)},children:j})})]})}},83:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r}));var c=n(1);function r(){Object(c.useEffect)((function(){var e,t;return window.hljs||(window.hljs=!0,(e=document.createElement("link")).rel="stylesheet",e.href="https://unpkg.com/@highlightjs/cdn-assets@11.1.0/styles/default.min.css",(t=document.createElement("script")).src="https://unpkg.com/@highlightjs/cdn-assets@11.1.0/highlight.min.js",t.onload=function(){return window.hljs.highlightAll()},document.body.appendChild(e),document.body.appendChild(t)),function(){"object"===typeof e&&document.body.removeChild(e),"object"===typeof t&&document.body.removeChild(t),delete window.hljs}}),[])}},84:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var c=n(60),r=n(82),i=n(81),s=(n(177),n(83)),l=n(0);function d(e){var t=e.lang,n=e.indent,d=void 0===n||n,a=e.onInput,o=void 0===a?function(){}:a;return Object(s.default)(),Object(l.jsx)("div",{className:"panel language-markup",children:Object(l.jsx)(i.default,{tabs:Object.keys(t),children:Object.entries(t).map((function(e,t){return Object(l.jsx)(r.default,{indent:d,lang:Object(c.a)({},e[0],e[1]),onInput:o},t)}))})})}},85:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var c=n(16),r=n(1),i=n(59),s=n.n(i);n(178);function l(){var e=Object(r.useState)(""),t=Object(c.a)(e,2),n=t[0],i=t[1];return Object(r.useEffect)((function(){return n&&s.a.toast({completeCallback:function(){return i("")},displayLength:2e3,html:n}),function(){return s.a.Toast.dismissAll()}}),[n]),i}}}]);
//# sourceMappingURL=44.54d7aa5a.chunk.js.map