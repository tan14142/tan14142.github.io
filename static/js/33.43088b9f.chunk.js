(this.webpackJsonppages=this.webpackJsonppages||[]).push([[33,47,55,62,83,86],{108:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return s}));var r=n(80),c=n(0);function s(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("section",{className:"accent-bottom panel",children:[Object(c.jsx)("h2",{children:"Largest product in a series"}),Object(c.jsx)("h4",{children:"Problem 8"}),Object(c.jsx)("p",{children:"The four adjacent digits in the 1000-digit number that have the greatest product are 9 \xd7 9 \xd7 8 \xd7 9 = 5832."}),Object(c.jsxs)("div",{className:"center font-mono nowrap",children:["73167176531330624919225119674426574742355349194934",Object(c.jsx)("br",{}),"96983520312774506326239578318016984801869478851843",Object(c.jsx)("br",{}),"85861560789112949495459501737958331952853208805511",Object(c.jsx)("br",{}),"12540698747158523863050715693290963295227443043557",Object(c.jsx)("br",{}),"66896648950445244523161731856403098711121722383113",Object(c.jsx)("br",{}),"62229893423380308135336276614282806444486645238749",Object(c.jsx)("br",{}),"30358907296290491560440772390713810515859307960866",Object(c.jsx)("br",{}),"70172427121883998797908792274921901699720888093776",Object(c.jsx)("br",{}),"65727333001053367881220235421809751254540594752243",Object(c.jsx)("br",{}),"52584907711670556013604839586446706324415722155397",Object(c.jsx)("br",{}),"53697817977846174064955149290862569321978468622482",Object(c.jsx)("br",{}),"83972241375657056057490261407972968652414535100474",Object(c.jsx)("br",{}),"82166370484403199890008895243450658541227588666881",Object(c.jsx)("br",{}),"16427171479924442928230863465674813919123162824586",Object(c.jsx)("br",{}),"17866458359124566529476545682848912883142607690042",Object(c.jsx)("br",{}),"24219022671055626321111109370544217506941658960408",Object(c.jsx)("br",{}),"07198403850962455444362981230987879927244284909188",Object(c.jsx)("br",{}),"84580156166097919133875499200524063689912560717606",Object(c.jsx)("br",{}),"05886116467109405077541002256983155200055935729725",Object(c.jsx)("br",{}),"71636269561882670428252483600823257530420752963450"]}),Object(c.jsx)("p",{children:"Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product?"})]}),Object(c.jsx)(r.default,{title:"JavaScript",children:"\n        m => {\n          let\n          c = 0,\n          n = '7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450';\n          n = n.split('');\n\n          for (let i = 0; i < n.length - m; i++) {\n            \n            let s = 1;\n\n            for (let j = 0; j < m; j++) {\n              s *= n[i + j];\n            }\n            if (s > c) {\n              c = s;\n            }\n          }\n          return c;\n        }\n    "})]})}},173:function(t,e,n){},174:function(t,e,n){},80:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),s=n(82),i=n(81),a=(n(174),n(0)),j=c.a.memo((function(t){var e=t.children,n=t.onInput,c=void 0===n?function(){}:n,j=t.title,b=Object(s.default)(e),o=Object(i.default)();return Object(r.useEffect)((function(){return c(b)}),[c,b]),Object(a.jsxs)("div",{className:"panel language-markup",children:[Object(a.jsx)("h3",{children:j}),Object(a.jsx)("button",{className:"reset",onClick:function(t){var e=t.currentTarget.parentNode.querySelector("code").textContent;navigator.clipboard.writeText(e).then((function(){return o("copied to clipboard")})).catch((function(){return o("copy to clipboard failed")}))},children:"Copy to Clipboard"}),Object(a.jsx)("pre",{children:Object(a.jsx)("code",{contentEditable:!0,spellCheck:"false",suppressContentEditableWarning:!0,onInput:function(t){var e=t.target;c(e.textContent)},children:b})})]})}));e.default=j},81:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return a}));var r=n(16),c=n(1),s=n(59),i=n.n(s);n(173);function a(){var t=Object(c.useState)(""),e=Object(r.a)(t,2),n=e[0],s=e[1];return Object(c.useEffect)((function(){return n&&i.a.toast({completeCallback:function(){return s("")},displayLength:2e3,html:n}),function(){return i.a.Toast.dismissAll()}}),[n]),s}},82:function(t,e,n){"use strict";function r(t){var e=t.split(/\r|\n/);e.pop(),e.shift();var n=e[0].match(/^\s+/g)||[];return(n?e.map((function(t){return t.replace(n[0],"")})):e).join("\r\n")}n.r(e),n.d(e,"default",(function(){return r}))}}]);
//# sourceMappingURL=33.43088b9f.chunk.js.map