(this.webpackJsonppages=this.webpackJsonppages||[]).push([[40,45,75,81,86,87,96,100,118,120,121],{122:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return s}));var c=n(84),r=n(0);function s(t){var e=t.lang;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("section",{className:"accent-bottom panel",children:[Object(r.jsx)("h2",{children:"Largest product in a series"}),Object(r.jsx)("h4",{children:"Problem 8"}),Object(r.jsx)("p",{children:"The four adjacent digits in the 1000-digit number that have the greatest product are 9 \xd7 9 \xd7 8 \xd7 9 = 5832."}),Object(r.jsxs)("div",{className:"center font-mono nowrap",children:["73167176531330624919225119674426574742355349194934",Object(r.jsx)("br",{}),"96983520312774506326239578318016984801869478851843",Object(r.jsx)("br",{}),"85861560789112949495459501737958331952853208805511",Object(r.jsx)("br",{}),"12540698747158523863050715693290963295227443043557",Object(r.jsx)("br",{}),"66896648950445244523161731856403098711121722383113",Object(r.jsx)("br",{}),"62229893423380308135336276614282806444486645238749",Object(r.jsx)("br",{}),"30358907296290491560440772390713810515859307960866",Object(r.jsx)("br",{}),"70172427121883998797908792274921901699720888093776",Object(r.jsx)("br",{}),"65727333001053367881220235421809751254540594752243",Object(r.jsx)("br",{}),"52584907711670556013604839586446706324415722155397",Object(r.jsx)("br",{}),"53697817977846174064955149290862569321978468622482",Object(r.jsx)("br",{}),"83972241375657056057490261407972968652414535100474",Object(r.jsx)("br",{}),"82166370484403199890008895243450658541227588666881",Object(r.jsx)("br",{}),"16427171479924442928230863465674813919123162824586",Object(r.jsx)("br",{}),"17866458359124566529476545682848912883142607690042",Object(r.jsx)("br",{}),"24219022671055626321111109370544217506941658960408",Object(r.jsx)("br",{}),"07198403850962455444362981230987879927244284909188",Object(r.jsx)("br",{}),"84580156166097919133875499200524063689912560717606",Object(r.jsx)("br",{}),"05886116467109405077541002256983155200055935729725",Object(r.jsx)("br",{}),"71636269561882670428252483600823257530420752963450"]}),Object(r.jsx)("p",{children:"Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product?"})]}),Object(r.jsx)(c.default,{lang:e})]})}},176:function(t,e,n){},177:function(t,e,n){},178:function(t,e,n){},80:function(t,e,n){"use strict";function c(t){var e=t.split(/\r|\n/);e.pop(),e.shift();var n=e[0].match(/^\s+/g)||[];return(n?e.map((function(t){return t.replace(n[0],"")})):e).join("\r\n")}n.r(e),n.d(e,"default",(function(){return c}))},81:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return o}));var c=n(1),r=n.n(c),s=n(6),i=n(59),a=n.n(i),u=(n(176),n(0));function o(t){var e=t.children,n=t.tabs,i=Object(c.useRef)(null);return Object(c.useEffect)((function(){var t=a.a.Tabs.init(i.current,{});return function(){return t.destroy()}}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("ul",{className:"tabs",ref:i,children:n.map((function(t,e){return Object(u.jsx)("li",{className:"tab",children:Object(u.jsx)(s.b,{to:"#"+t,children:t})},e)}))}),r.a.Children.toArray(e).map((function(t,e){return Object(u.jsx)("div",{className:"flex-column",id:n[e],children:t},e)}))]})}},82:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return a}));var c=n(1),r=n(80),s=n(85),i=n(0);function a(t){var e=t.indent,n=void 0===e||e,a=t.lang,u=t.onInput,o=void 0===u?function(){}:u,j=Object(s.default)(),l=Object.values(a)[0];return n||(l=Object(r.default)(l)),Object(c.useEffect)((function(){return o(l)}),[o,l]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("button",{className:"reset",onClick:function(t){var e=t.currentTarget.parentNode.querySelector("code").textContent;navigator.clipboard.writeText(e).then((function(){return j("copied to clipboard")})).catch((function(){return j("copy to clipboard failed")}))},children:"Copy to Clipboard"}),Object(i.jsx)("pre",{children:Object(i.jsx)("code",{contentEditable:!0,className:"hljs language-"+Object.keys(a)[0].toLowerCase(),spellCheck:"false",suppressContentEditableWarning:!0,onInput:function(t){var e=t.target;o(e.textContent)},children:l})})]})}},83:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return r}));var c=n(1);function r(){Object(c.useEffect)((function(){var t,e;return window.hljs||(window.hljs=!0,(t=document.createElement("link")).rel="stylesheet",t.href="https://unpkg.com/@highlightjs/cdn-assets@11.1.0/styles/default.min.css",(e=document.createElement("script")).src="https://unpkg.com/@highlightjs/cdn-assets@11.1.0/highlight.min.js",e.onload=function(){return window.hljs.highlightAll()},document.body.appendChild(t),document.body.appendChild(e)),function(){"object"===typeof t&&document.body.removeChild(t),"object"===typeof e&&document.body.removeChild(e),delete window.hljs}}),[])}},84:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return u}));var c=n(60),r=n(82),s=n(81),i=(n(177),n(83)),a=n(0);function u(t){var e=t.lang,n=t.indent,u=void 0===n||n,o=t.onInput,j=void 0===o?function(){}:o;return Object(i.default)(),Object(a.jsx)("div",{className:"panel language-markup",children:Object(a.jsx)(s.default,{tabs:Object.keys(e),children:Object.entries(e).map((function(t,e){return Object(a.jsx)(r.default,{indent:u,lang:Object(c.a)({},t[0],t[1]),onInput:j},e)}))})})}},85:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return a}));var c=n(16),r=n(1),s=n(59),i=n.n(s);n(178);function a(){var t=Object(r.useState)(""),e=Object(c.a)(t,2),n=e[0],s=e[1];return Object(r.useEffect)((function(){return n&&i.a.toast({completeCallback:function(){return s("")},displayLength:2e3,html:n}),function(){return i.a.Toast.dismissAll()}}),[n]),s}}}]);