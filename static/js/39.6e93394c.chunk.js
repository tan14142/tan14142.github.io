(this.webpackJsonpwww=this.webpackJsonpwww||[]).push([[39,45,47],{133:function(t,e,n){"use strict";n.r(e);var r=n(187),o=n.n(r),a=n(67),i=n(7),c=n(188),u=n(196);e.default=function(){var t=Object(c.a)(o.a.mark((function t(e){var n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=u.c,t.next=3,e.text();case 3:return t.t1=t.sent,n=(0,t.t0)(t.t1),r=new Array(1960).fill(null),n.forEach((function(t,e){for(var n=Object.entries(t),o=n.pop()[1],c=n.pop()[1],u=0,s=n;u<s.length;u++){var l=Object(i.a)(s[u],2),f=l[0],h=l[1];0===e&&(r[+f]=[]),e%2===0&&r[+f].push(Object(a.a)({},c,{})),r[+f][r[+f].length-1][c][o]=h}})),t.abrupt("return",r);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},152:function(t,e,n){"use strict";n.r(e);var r=n(32),o=n(7),a=n(0),i=n.n(a),c=n(196),u=(n(192),n(90)),s=n(133);e.default=function(){var t=Object(u.default)("/Projects/WorldPopulation.csv",s.default),e=t.data,n=t.ready,r=Object(a.useState)(1960),c=Object(o.a)(r,2),p=c[0],d=c[1],v=Object(a.useState)(),y=Object(o.a)(v,2),b=y[0],m=y[1];return h((function(){p<e.length-1?d(p+1):b.setActive(!1)}),m),n?i.a.createElement("section",{className:"accent-bottom panel center"},i.a.createElement("h2",null,"World Population by Region"),i.a.createElement("h4",null,"and global urbanization since 1960"),i.a.createElement("p",null,"Rural | Urban"),i.a.createElement(l,{dataSlice:e[p],wMax:f(e[e.length-1][e[p].length-1])}),i.a.createElement("form",{action:"#",style:{marginBottom:"1rem"}},i.a.createElement("p",{className:"range-field"},i.a.createElement("input",{id:"range",max:e.length-1,min:1960,onChange:function(t){b.setActive(!1),d(+t.target.value)},value:p,type:"range"})),i.a.createElement("label",{htmlFor:"range",style:{position:"relative",top:"-20px"}},p),i.a.createElement("br",null),i.a.createElement("button",{className:!b.active&&p<e.length-1?"btn waves-effect":"hide",onClick:function(t){t.preventDefault(),b.interval(100)}},"run"),i.a.createElement("button",{className:p<e.length-1&&b.active?"btn waves-effect":"hide",onClick:function(t){t.preventDefault(),b.setActive(!1)}},"pause"),i.a.createElement("button",{className:p===e.length-1?"btn waves-effect":"hide",onClick:function(t){t.preventDefault(),d(1960)}},"reset"))):null};var l=function(t){var e=t.dataSlice,n=t.wMax,r=Object(a.useRef)();return Object(a.useEffect)((function(){var t=r.current.clientWidth,e=Object(c.r)().domain([0,n/3]).range([-.5,t]),o=Object(c.a)(e).tickFormat((function(t){return t/1e6+"M"})).ticks(5),a=Object(c.t)(r.current);return a.transition().duration(500).styles({height:"200px",opacity:1}),a.select(".xAxis").call(o).styles({transform:"translateY(".concat(198,"px)")}),a.selectAll(".xAxis > .domain, .xAxis > .tick:last-child").remove(),a.selectAll(".tick > line").styles({fill:"red",opacity:1/3,transform:"translateY(-".concat(190,"px) scale(1, ").concat(200/6-.5,")")}),function(){return a.interrupt()}}),[n]),Object(a.useEffect)((function(){var t=r.current.clientWidth,o=e.slice(0,e.length-1),a=e[e.length-1],i=Object(c.r)().domain([0,n/3]).range([0,t]),u=Object(c.q)().padding(1/3).domain(new Array(o.length).fill(null).map((function(t,e){return e}))).range([0,200]),s=Object(c.r)().domain([0,n]).range([200,u.bandwidth()/2]),l=Object(c.t)(r.current);return["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494"].map((function(t,e){return o[e][Object.keys(o[e])[0]].color=t})),o.sort((function(t,e){return f(e)-f(t)})),l.selectAll(".region").data(o,(function(t){return Object.keys(t)[0]})).join("rect").attrs({class:"region",fill:function(t){return Object.values(t)[0].color},stroke:"black",height:u.bandwidth(),x:0}).transition().duration(100).attrs({width:function(t){return i(f(t))},y:function(t,e){return u(e)}}),l.selectAll(".regionRural").data(o,(function(t){return Object.keys(t)[0]})).join("rect").attrs({class:"regionRural",fill:"none",stroke:"black","stroke-opacity":.25,height:u.bandwidth()}).transition().duration(100).attrs({width:.1,x:function(t,e){return i(f(t))*Object.values(t)[0].Rural/100},y:function(t,e){return u(e)}}),l.selectAll(".world").data([a]).join("rect").attrs({class:"world",width:3*u.bandwidth(),x:t-4*u.bandwidth()}).transition().duration(100).attrs({height:function(t){return 200-s(f(t))},y:function(t){return s(f(t))}}),l.selectAll(".label").data(o,(function(t){return Object.keys(t)[0]})).join("text").text((function(t){return Object.keys(t)[0]})).attrs({class:"label","font-size":8,x:0,y:function(t,e){return u(e)-2}}),l.selectAll(".total").data(o,(function(t){return Object.keys(t)[0]})).join("text").text((function(t){return parseInt(f(t)/1e6)+"M"})).attrs({class:"total","font-size":8,x:4,y:function(t,e){return u(e)+2*u.bandwidth()/3}}),l.selectAll(".worldLabel").data([a]).join("text").text("Total").attrs({class:"worldLabel","font-size":8,x:t-3*u.bandwidth()}).transition().duration(100).attrs({y:function(t){return s(f(t))-2}}),l.selectAll(".worldTotal").data([a]).join("text").text((function(t){return parseInt(f(t)/1e6)+"M"})).attrs({class:"worldTotal",fill:"white","font-size":8,x:t-3.15*u.bandwidth()}).transition().duration(100).attrs({y:function(t){return s(f(t))+3*u.bandwidth()/5}}),function(){return l.interrupt()}}),[e,n]),i.a.createElement("svg",{ref:r,style:{borderBottom:"2px solid black",height:0,marginTop:20,opacity:0,overflow:"visible"}},i.a.createElement("g",{className:"xAxis"}))},f=function(t){return+Object.values(t)[0].Total},h=function(t,e){var n=Object(a.useRef)(),o=Object(a.useRef)(),i=Object(a.useRef)(),c=function(){clearInterval(i.current),clearTimeout(i.current)},u=function(){return n.current()};Object(a.useEffect)((function(){n.current=t,o.current=e}),[t,e]),Object(a.useEffect)((function(){var t={active:!1,setActive:function(e){t.active&&!e&&c(),o.current((function(n){return Object(r.a)(Object(r.a)({},n),{},{active:t.active=e})}))},interval:function(e){i.current=setInterval(u,e),t.setActive(!0)},timeout:function(e){i.current=setTimeout(u,e),t.setActive(!0)}};return o.current(t),c}),[])}},187:function(t,e,n){t.exports=n(189)},188:function(t,e,n){"use strict";function r(t,e,n,r,o,a,i){try{var c=t[a](i),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var i=t.apply(e,n);function c(t){r(i,o,a,c,u,"next",t)}function u(t){r(i,o,a,c,u,"throw",t)}c(void 0)}))}}n.d(e,"a",(function(){return o}))},189:function(t,e,n){var r=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,r="function"===typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(t,e,n,r){var o=e&&e.prototype instanceof l?e:l,a=Object.create(o.prototype),i=new j(r||[]);return a._invoke=function(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return E()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=g(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(t,e,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(t,n,i),a}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}t.wrap=c;var s={};function l(){}function f(){}function h(){}var p={};p[o]=function(){return this};var d=Object.getPrototypeOf,v=d&&d(d(O([])));v&&v!==e&&n.call(v,o)&&(p=v);var y=h.prototype=l.prototype=Object.create(p);function b(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function m(t,e){var r;this._invoke=function(o,a){function i(){return new e((function(r,i){!function r(o,a,i,c){var s=u(t[o],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,c)}))}c(s.arg)}(o,a,r,i)}))}return r=r?r.then(i,i):i()}}function g(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,g(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=u(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function O(t){if(t){var e=t[o];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:E}}function E(){return{value:void 0,done:!0}}return f.prototype=y.constructor=h,h.constructor=f,h[i]=f.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,i in t||(t[i]="GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},b(m.prototype),m.prototype[a]=function(){return this},t.AsyncIterator=m,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new m(c(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(y),y[i]="Generator",y[o]=function(){return this},y.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;x(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:O(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}(t.exports);try{regeneratorRuntime=r}catch(o){Function("r","regeneratorRuntime = r")(r)}},192:function(t,e,n){"use strict";var r=n(241),o=n(191),a=n(263);function i(t,e){return t.each((function(){var t=e.apply(this,arguments),n=Object(a.a)(this);for(var r in t)n.attr(r,t[r])}))}function c(t,e){for(var n in e)t.attr(n,e[n]);return t}function u(t,e,n){return t.each((function(){var t=e.apply(this,arguments),r=Object(a.a)(this);for(var o in t)r.style(o,t[o],n)}))}function s(t,e,n){for(var r in e)t.style(r,e[r],n);return t}function l(t,e){return t.each((function(){var t=e.apply(this,arguments),n=Object(a.a)(this);for(var r in t)n.property(r,t[r])}))}function f(t,e){for(var n in e)t.property(n,e[n]);return t}function h(t,e){return t.each((function(){var n=e.apply(this,arguments),r=Object(a.a)(this).transition(t);for(var o in n)r.attr(o,n[o])}))}function p(t,e){for(var n in e)t.attr(n,e[n]);return t}function d(t,e,n){return t.each((function(){var r=e.apply(this,arguments),o=Object(a.a)(this).transition(t);for(var i in r)o.style(i,r[i],n)}))}function v(t,e,n){for(var r in e)t.style(r,e[r],n);return t}r.b.prototype.attrs=function(t){return("function"===typeof t?i:c)(this,t)},r.b.prototype.styles=function(t,e){return("function"===typeof t?u:s)(this,t,null==e?"":e)},r.b.prototype.properties=function(t){return("function"===typeof t?l:f)(this,t)},o.b.prototype.attrs=function(t){return("function"===typeof t?h:p)(this,t)},o.b.prototype.styles=function(t,e){return("function"===typeof t?d:v)(this,t,null==e?"":e)}},90:function(t,e,n){"use strict";n.r(e);var r=n(187),o=n.n(r),a=n(188),i=n(7),c=n(0),u=n(38);e.default=function(t,e){var n=Object(c.useState)({data:"",ready:!1}),r=Object(i.a)(n,2),s=r[0],l=r[1],f=Object(u.default)();return Object(c.useEffect)((function(){var n=!0;return Object(a.a)(o.a.mark((function r(){var a,i;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch(t);case 3:if(a=r.sent,r.t0=n,!r.t0){r.next=9;break}return r.next=8,e?e(a):a.text();case 8:r.t0=r.sent;case 9:i=r.t0,n&&l({data:i,ready:!0}),r.next=16;break;case 13:r.prev=13,r.t1=r.catch(0),n&&f("AbortError"===r.t1.name?"Fetch was aborted":r.t1.name);case 16:case 17:case"end":return r.stop()}}),r,null,[[0,13]])})))(),function(){n=!1}}),[f,t,e]),s}}}]);
//# sourceMappingURL=39.6e93394c.chunk.js.map