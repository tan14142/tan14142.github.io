(this.webpackJsonppages=this.webpackJsonppages||[]).push([[27,45,62,81,86,87,96,100,118,120,121],{109:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return c}));var r=n(84),s=n(0);function c(t){var e=t.lang;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("section",{className:"accent-bottom panel",children:[Object(s.jsx)("h2",{children:"Non-abundant sums"}),Object(s.jsx)("h4",{children:"Problem 23"}),Object(s.jsx)("p",{children:"A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number."}),Object(s.jsx)("p",{children:"A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n."}),Object(s.jsx)("p",{children:"As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit."}),Object(s.jsx)("p",{children:"Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers."})]}),Object(s.jsx)(r.default,{lang:e})]})}},176:function(t,e,n){},177:function(t,e,n){},178:function(t,e,n){},80:function(t,e,n){"use strict";function r(t){var e=t.split(/\r|\n/);e.pop(),e.shift();var n=e[0].match(/^\s+/g)||[];return(n?e.map((function(t){return t.replace(n[0],"")})):e).join("\r\n")}n.r(e),n.d(e,"default",(function(){return r}))},81:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return o}));var r=n(1),s=n.n(r),c=n(6),i=n(59),a=n.n(i),u=(n(176),n(0));function o(t){var e=t.children,n=t.tabs,i=Object(r.useRef)(null);return Object(r.useEffect)((function(){var t=a.a.Tabs.init(i.current,{});return function(){return t.destroy()}}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("ul",{className:"tabs",ref:i,children:n.map((function(t,e){return Object(u.jsx)("li",{className:"tab",children:Object(u.jsx)(c.b,{to:"#"+t,children:t})},e)}))}),s.a.Children.toArray(e).map((function(t,e){return Object(u.jsx)("div",{className:"flex-column",id:n[e],children:t},e)}))]})}},82:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return a}));var r=n(1),s=n(80),c=n(85),i=n(0);function a(t){var e=t.indent,n=void 0===e||e,a=t.lang,u=t.onInput,o=void 0===u?function(){}:u,l=Object(c.default)(),d=Object.values(a)[0];return n||(d=Object(s.default)(d)),Object(r.useEffect)((function(){return o(d)}),[o,d]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("button",{className:"reset",onClick:function(t){var e=t.currentTarget.parentNode.querySelector("code").textContent;navigator.clipboard.writeText(e).then((function(){return l("copied to clipboard")})).catch((function(){return l("copy to clipboard failed")}))},children:"Copy to Clipboard"}),Object(i.jsx)("pre",{children:Object(i.jsx)("code",{contentEditable:!0,className:"hljs language-"+Object.keys(a)[0].toLowerCase(),spellCheck:"false",suppressContentEditableWarning:!0,onInput:function(t){var e=t.target;o(e.textContent)},children:d})})]})}},83:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return s}));var r=n(1);function s(){Object(r.useEffect)((function(){var t,e;return window.hljs||(window.hljs=!0,(t=document.createElement("link")).rel="stylesheet",t.href="https://unpkg.com/@highlightjs/cdn-assets@11.1.0/styles/default.min.css",(e=document.createElement("script")).src="https://unpkg.com/@highlightjs/cdn-assets@11.1.0/highlight.min.js",e.onload=function(){return window.hljs.highlightAll()},document.body.appendChild(t),document.body.appendChild(e)),function(){"object"===typeof t&&document.body.removeChild(t),"object"===typeof e&&document.body.removeChild(e),delete window.hljs}}),[])}},84:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return u}));var r=n(60),s=n(82),c=n(81),i=(n(177),n(83)),a=n(0);function u(t){var e=t.lang,n=t.indent,u=void 0===n||n,o=t.onInput,l=void 0===o?function(){}:o;return Object(i.default)(),Object(a.jsx)("div",{className:"panel language-markup",children:Object(a.jsx)(c.default,{tabs:Object.keys(e),children:Object.entries(e).map((function(t,e){return Object(a.jsx)(s.default,{indent:u,lang:Object(r.a)({},t[0],t[1]),onInput:l},e)}))})})}},85:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return a}));var r=n(16),s=n(1),c=n(59),i=n.n(c);n(178);function a(){var t=Object(s.useState)(""),e=Object(r.a)(t,2),n=e[0],c=e[1];return Object(s.useEffect)((function(){return n&&i.a.toast({completeCallback:function(){return c("")},displayLength:2e3,html:n}),function(){return i.a.Toast.dismissAll()}}),[n]),c}}}]);
//# sourceMappingURL=27.974e30b0.chunk.js.map