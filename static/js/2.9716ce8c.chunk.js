(this.webpackJsonppages=this.webpackJsonppages||[]).push([[2,78,87,98,99,103,108,121,122],{136:function(a,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return c}));var n=t(91),s=t(93),r=t(0);function c(a){var e=a.setProgress,t=[{en:"today",hi:["aaj"]},{en:"tomorrow / yesterday",hi:["kal"]},{en:"time",hi:["baje"]},{en:"o'clock",hi:["pure"]},{en:"quarter past",hi:["sawa"]},{en:"half past",hi:["sadhe"]},{en:"quarter to",hi:["paune"]},{en:"in the morning",hi:["subha ke"]},{en:"in the afternoon",hi:["shaam ke"]},{en:"at night",hi:["raat ko"]}];return Object(r.jsx)(n.default,{randomize:function(){var a=function(a){return Math.round(Math.random()*a)},e=function(a,e){return a?12===e||e<4?"raat ko":"subha ke":12===e||e<8?"shaam ke":"raat ko"},n=function(a){switch(a){case 0:return"pure";case 15:return"sawa";case 30:return"sadhe";case 45:return"paune"}},r=function(a,e){return 45===e?s.default[12===a?1:a+1]+" bajne wale hai":s.default[a]+" baje hai"};return Array(t.length).fill(void 0).map((function(){var t=!!a(1),s=a(11)+1,c=15*a(3);return{en:s+":"+(0===c?"00":c)+" "+(t?"am":"pm"),hi:[e(t,s)+" "+n(c)+" "+r(s,c)]}}))},sentences:t,setProgress:e})}},178:function(a,e,t){},179:function(a,e,t){},199:function(a,e,t){"use strict";t.d(e,"a",(function(){return r}));var n=t(51);var s=t(61);function r(a){return function(a){if(Array.isArray(a))return Object(n.a)(a)}(a)||function(a){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(a))return Array.from(a)}(a)||Object(s.a)(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},85:function(a,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return i}));var n=t(16),s=t(1),r=t(59),c=t.n(r);t(178);function i(){var a=Object(s.useState)(""),e=Object(n.a)(a,2),t=e[0],r=e[1];return Object(s.useEffect)((function(){return t&&c.a.toast({completeCallback:function(){return r("")},displayLength:2e3,html:t}),function(){return c.a.Toast.dismissAll()}}),[t]),r}},86:function(a,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return s}));var n=t(0);function s(a){var e=a.handleBack,t=a.handleRestart,s=a.handleTraining,r=a.handleSubmit;return Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("button",{className:"btn col l2 m3 s4 waves-effect waves-light",onClick:e,children:[Object(n.jsx)("i",{className:"material-icons left",children:"chevron_left"}),"Back"]}),Object(n.jsx)("button",{className:"btn col s1 offset-l3 offset-m2 offset-s1 waves-effect waves-light",onClick:t,children:Object(n.jsx)("i",{className:"material-icons",children:"replay"})}),Object(n.jsx)("button",{className:"btn col s1 waves-effect waves-light",onClick:s,style:{left:".25rem",position:"relative"},children:Object(n.jsx)("i",{className:"material-icons",children:"fitness_center"})}),Object(n.jsxs)("button",{className:"btn col l2 m3 s4 offset-l3 offset-m2 offset-s1 waves-effect waves-light",onClick:r,children:["Submit",Object(n.jsx)("i",{className:"material-icons right",children:"chevron_right"})]})]})}},87:function(a,e,t){"use strict";function n(a){for(var e,t,n=a.length,s=a.slice();0!==n;)e=Math.floor(Math.random()*n),t=s[n-=1],s[n]=s[e],s[e]=t;return s}t.r(e),t.d(e,"default",(function(){return n}))},89:function(a,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return s}));var n=t(0);function s(a){var e=a.dictionary,t=a.handleClick;return Object(n.jsx)("div",{style:{margin:".5rem 0"},children:Object.keys(e).sort((function(a,e){return a.toLowerCase().localeCompare(e.toLowerCase())})).map((function(a,e){return Object(n.jsx)("a",{className:"chip",href:"!#",onClick:function(e){e.preventDefault(),t(a)},children:a},e)}))})}},91:function(a,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return h}));var n=t(199),s=t(16),r=t(1),c=t(86),i=t(89),u=t(85),o=t(87),l=(t(179),t(0));function h(a){var e=a.randomize,t=void 0===e?void 0:e,h=a.sentences,f=a.setProgress,b=Object(r.useState)(Object(n.a)(h)),d=Object(s.a)(b,2),j=d[0],m=d[1],p=Object(r.useState)(""),y=Object(s.a)(p,2),w=y[0],O=y[1],k=function(a){var e={};return a.map((function(a){return a.hi.map((function(a){return a.split(" ").map((function(a){return e[a]=null}))}))})),e},v=Object(r.useState)(k(h)),g=Object(s.a)(v,2),x=g[0],N=g[1],C=Object(u.default)(),S=function(){O(""),m(Object(n.a)(h)),t&&N(k(Object(n.a)(h))),f(0)};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("section",{className:"accent-bottom panel",children:[Object(l.jsx)("h4",{className:"center",style:{background:"#ee6e73"},children:j[0].en}),Object(l.jsx)("h4",{className:"center",id:"StoryAnswer",children:w}),Object(l.jsx)(i.default,{dictionary:x,handleClick:function(a){O(w+" "+a)}})]}),Object(l.jsx)(c.default,{handleBack:function(){O(w.substr(0,w.lastIndexOf(" ")))},handleRestart:S,handleTraining:function(){S();var a=t?t():Object(n.a)(h);m(Object(o.default)(a)),N(k(a))},handleSubmit:function(){j[0].hi.includes(w.trim())?(C("sahee!"),O(""),j.length>1?(j.shift(),f(1-j.length/h.length)):(j[0].en="Well done!",f(1))):C("galat!")}})]})}},93:function(a,e,t){"use strict";t.r(e);e.default=["shoony","ek","do","teen","chaar","panch","che","saat","art","no","das","giara","bara","tera","chauda","pandra","sola","satara","ahtara","unnees","bees","iktees","batees","taees","chaubees","pachees","chabees","saatees","aathaees","untees","tees","ektees","baktees","taetees","chautees","pachantees","chatees","saataees","aathaitees","notalees","chaarlees","ikatalees","bayalees","tayantalees","chawalees","payantalees","chiyaalees","sayantalees","artalees","unachaas","pachaas","ikyawaan","bawaan","tirwaan","chawaan","pachpan","chappan","sattawaan","uttawaan","unsaat","saat","ikasaat","basaat","tirsaat","chaunsaat","paynsaat","chiyansaat","sursaat","ursaat","unahattar","sattar","ikattar","bakattar","tikattar","chahattar","pachahattar","chihattar","saathattar","athahattar","unaasee","assi","ikyassi","bayassi","tirassi","chaurassi","pachassi","chiyassi","saatassi","athaassi","nawaassi","nabbe","ikyanway","baanway","tiranway","chauranway","pachanway","chiyanway","sattanway","uttanway","ninyanway","sau"]}}]);