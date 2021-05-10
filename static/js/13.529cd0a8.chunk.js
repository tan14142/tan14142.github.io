(this.webpackJsonppages=this.webpackJsonppages||[]).push([[13,47,55,62,83,86],{129:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return c}));var r=t(80),i=t(0);function c(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("section",{className:"accent-bottom panel",children:[Object(i.jsx)("h2",{children:"Number letter counts"}),Object(i.jsx)("h4",{children:"Problem 17"}),Object(i.jsx)("p",{children:"If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total."}),Object(i.jsx)("p",{children:"If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?"}),Object(i.jsx)("p",{children:'NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.'})]}),Object(i.jsx)(r.default,{title:"JavaScript",children:"\n        () => {\n          const\n          dict = [\n            ,\n            'one',\n            'two',\n            'three',\n            'four',\n            'five',\n            'six',\n            'seven',\n            'eight',\n            'nine',\n            'ten',\n            'eleven',\n            'twelve',\n            'thirteen',\n            'fourteen',\n            'fifteen',\n            'sixteen',\n            'seventeen',\n            'eighteen',\n            'nineteen',\n            'twenty',,,,,,,,,,\n            'thirty',,,,,,,,,,\n            'forty',,,,,,,,,,\n            'fifty',,,,,,,,,,\n            'sixty',,,,,,,,,,\n            'seventy',,,,,,,,,,\n            'eighty',,,,,,,,,,\n            'ninety'\n          ];\n          \n          let\n          temp,\n          res = '';\n          \n          for (let i = 20; i < 100; i++) {\n            if (dict[i]) {\n              temp = dict[i];\n            }\n            else {\n              dict[i] = temp + dict[i % 10]; \n            }\n          }\n\n          for (let i = 1; i <= 1000; i++) {\n            if (i === 1000) {\n              res += 'onethousand'\n              break;\n            }\n            if (i > 99) {\n              res += dict[Math.floor(i / 100)] + 'hundred';\n              \n              if (i % 100) {\n                res += 'and';\n              }\n              else {\n                continue;\n              }\n            }\n            res += dict[i % 100];\n          }\n          return res.length;\n        }\n    "})]})}},173:function(n,e,t){},174:function(n,e,t){},80:function(n,e,t){"use strict";t.r(e);var r=t(1),i=t.n(r),c=t(82),o=t(81),s=(t(174),t(0)),u=i.a.memo((function(n){var e=n.children,t=n.onInput,i=void 0===t?function(){}:t,u=n.title,a=Object(c.default)(e),l=Object(o.default)();return Object(r.useEffect)((function(){return i(a)}),[i,a]),Object(s.jsxs)("div",{className:"panel language-markup",children:[Object(s.jsx)("h3",{children:u}),Object(s.jsx)("button",{className:"reset",onClick:function(n){var e=n.currentTarget.parentNode.querySelector("code").textContent;navigator.clipboard.writeText(e).then((function(){return l("copied to clipboard")})).catch((function(){return l("copy to clipboard failed")}))},children:"Copy to Clipboard"}),Object(s.jsx)("pre",{children:Object(s.jsx)("code",{contentEditable:!0,spellCheck:"false",suppressContentEditableWarning:!0,onInput:function(n){var e=n.target;i(e.textContent)},children:a})})]})}));e.default=u},81:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return s}));var r=t(16),i=t(1),c=t(59),o=t.n(c);t(173);function s(){var n=Object(i.useState)(""),e=Object(r.a)(n,2),t=e[0],c=e[1];return Object(i.useEffect)((function(){return t&&o.a.toast({completeCallback:function(){return c("")},displayLength:2e3,html:t}),function(){return o.a.Toast.dismissAll()}}),[t]),c}},82:function(n,e,t){"use strict";function r(n){var e=n.split(/\r|\n/);e.pop(),e.shift();var t=e[0].match(/^\s+/g)||[];return(t?e.map((function(n){return n.replace(t[0],"")})):e).join("\r\n")}t.r(e),t.d(e,"default",(function(){return r}))}}]);
//# sourceMappingURL=13.529cd0a8.chunk.js.map