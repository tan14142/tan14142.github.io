(this.webpackJsonppages=this.webpackJsonppages||[]).push([[4,44,55,64,65,73,86,87],{122:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return i}));var n=a(87),r=a(0);function i(e){var t=e.setProgress;return Object(r.jsx)(n.default,{sentences:[{en:"shopkeeper",hi:["dukandar"]},{en:"customer",hi:["kharidar"]},{en:"Hello! How can I help you?",hi:["namaste mein aap ki kya madat kar sakta hoon"]},{en:"Hello! I am looking for shoes for my daughter.",hi:["namaste mein apni beti ke liye jute khoj raha hoon"]},{en:"What price range are you looking for?",hi:["aap kitne daam ke jute khoj rahe ho"]},{en:"Maybe between 40 and 60 dollar.",hi:["karib chaarlees aur saat dollarr ke beech"]},{en:"Follow me! Here they are!",hi:["mere saath aaiye ye rahe"]},{en:"How much are these?",hi:["iska daam kitna hai"]},{en:"They cost 55 dollar.",hi:["iska daam pachpan dollarr hai"]},{en:"Can I have them for 40 dollar?",hi:["kya mein isse chaarlees dollarr me le jaa sakta hoon"]},{en:"That is OK.",hi:["theek hai"]},{en:"Thank you, I will buy them",hi:["dhanyavaad mein kharid loonga"]},{en:"Thank you, come again",hi:["dhanyavaad phir aaiyega"]}],setProgress:t})}},173:function(e,t,a){},175:function(e,t,a){},195:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(51);var r=a(61);function i(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},81:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return s}));var n=a(16),r=a(1),i=a(59),c=a.n(i);a(173);function s(){var e=Object(r.useState)(""),t=Object(n.a)(e,2),a=t[0],i=t[1];return Object(r.useEffect)((function(){return a&&c.a.toast({completeCallback:function(){return i("")},displayLength:2e3,html:a}),function(){return c.a.Toast.dismissAll()}}),[a]),i}},83:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return r}));var n=a(0);function r(e){var t=e.handleBack,a=e.handleRestart,r=e.handleTraining,i=e.handleSubmit;return Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("button",{className:"btn col l2 m3 s4 waves-effect waves-light",onClick:t,children:[Object(n.jsx)("i",{className:"material-icons left",children:"chevron_left"}),"Back"]}),Object(n.jsx)("button",{className:"btn col s1 offset-l3 offset-m2 offset-s1 waves-effect waves-light",onClick:a,children:Object(n.jsx)("i",{className:"material-icons",children:"replay"})}),Object(n.jsx)("button",{className:"btn col s1 waves-effect waves-light",onClick:r,style:{left:".25rem",position:"relative"},children:Object(n.jsx)("i",{className:"material-icons",children:"fitness_center"})}),Object(n.jsxs)("button",{className:"btn col l2 m3 s4 offset-l3 offset-m2 offset-s1 waves-effect waves-light",onClick:i,children:["Submit",Object(n.jsx)("i",{className:"material-icons right",children:"chevron_right"})]})]})}},84:function(e,t,a){"use strict";function n(e){for(var t,a,n=e.length,r=e.slice();0!==n;)t=Math.floor(Math.random()*n),a=r[n-=1],r[n]=r[t],r[t]=a;return r}a.r(t),a.d(t,"default",(function(){return n}))},86:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return r}));var n=a(0);function r(e){var t=e.dictionary,a=e.handleClick;return Object(n.jsx)("div",{style:{margin:".5rem 0"},children:Object.keys(t).sort((function(e,t){return e.toLowerCase().localeCompare(t.toLowerCase())})).map((function(e,t){return Object(n.jsx)("a",{className:"chip",href:"!#",onClick:function(t){t.preventDefault(),a(e)},children:e},t)}))})}},87:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return h}));var n=a(195),r=a(16),i=a(1),c=a(83),s=a(86),o=a(81),l=a(84),u=(a(175),a(0));function h(e){var t=e.randomize,a=void 0===t?void 0:t,h=e.sentences,f=e.setProgress,d=Object(i.useState)(Object(n.a)(h)),b=Object(r.a)(d,2),m=b[0],j=b[1],k=Object(i.useState)(""),O=Object(r.a)(k,2),v=O[0],y=O[1],p=function(e){var t={};return e.map((function(e){return e.hi.map((function(e){return e.split(" ").map((function(e){return t[e]=null}))}))})),t},g=Object(i.useState)(p(h)),w=Object(r.a)(g,2),x=w[0],N=w[1],C=Object(o.default)(),S=function(){y(""),j(Object(n.a)(h)),a&&N(p(Object(n.a)(h))),f(0)};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("section",{className:"accent-bottom panel",children:[Object(u.jsx)("h4",{className:"center",style:{background:"#ee6e73"},children:m[0].en}),Object(u.jsx)("h4",{className:"center",id:"StoryAnswer",children:v}),Object(u.jsx)(s.default,{dictionary:x,handleClick:function(e){y(v+" "+e)}})]}),Object(u.jsx)(c.default,{handleBack:function(){y(v.substr(0,v.lastIndexOf(" ")))},handleRestart:S,handleTraining:function(){S();var e=a?a():Object(n.a)(h);j(Object(l.default)(e)),N(p(e))},handleSubmit:function(){m[0].hi.includes(v.trim())?(C("sahee!"),y(""),m.length>1?(m.shift(),f(1-m.length/h.length)):(m[0].en="Well done!",f(1))):C("galat!")}})]})}}}]);
//# sourceMappingURL=4.beb1d826.chunk.js.map