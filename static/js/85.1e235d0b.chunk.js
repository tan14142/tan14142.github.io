(this.webpackJsonppages=this.webpackJsonppages||[]).push([[85,87,121],{161:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return R}));var r=n(16),i=n(60),a=n(5),o=n(1),c=n.n(o),s=n(3),d=n.n(s);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var h=function(e){var t,n;function r(){var t;return(t=e.call(this)||this).handleExpired=t.handleExpired.bind(u(t)),t.handleErrored=t.handleErrored.bind(u(t)),t.handleChange=t.handleChange.bind(u(t)),t.handleRecaptchaRef=t.handleRecaptchaRef.bind(u(t)),t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=r.prototype;return i.getValue=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this.props.grecaptcha.getResponse(this._widgetId):null},i.getWidgetId=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this._widgetId:null},i.execute=function(){var e=this.props.grecaptcha;if(e&&void 0!==this._widgetId)return e.execute(this._widgetId);this._executeRequested=!0},i.executeAsync=function(){var e=this;return new Promise((function(t,n){e.executionResolve=t,e.executionReject=n,e.execute()}))},i.reset=function(){this.props.grecaptcha&&void 0!==this._widgetId&&this.props.grecaptcha.reset(this._widgetId)},i.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},i.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},i.handleChange=function(e){this.props.onChange&&this.props.onChange(e),this.executionResolve&&(this.executionResolve(e),delete this.executionReject,delete this.executionResolve)},i.explicitRender=function(){if(this.props.grecaptcha&&this.props.grecaptcha.render&&void 0===this._widgetId){var e=document.createElement("div");this._widgetId=this.props.grecaptcha.render(e,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge}),this.captcha.appendChild(e)}this._executeRequested&&this.props.grecaptcha&&void 0!==this._widgetId&&(this._executeRequested=!1,this.execute())},i.componentDidMount=function(){this.explicitRender()},i.componentDidUpdate=function(){this.explicitRender()},i.componentWillUnmount=function(){void 0!==this._widgetId&&(this.delayOfCaptchaIframeRemoving(),this.reset())},i.delayOfCaptchaIframeRemoving=function(){var e=document.createElement("div");for(document.body.appendChild(e),e.style.display="none";this.captcha.firstChild;)e.appendChild(this.captcha.firstChild);setTimeout((function(){document.body.removeChild(e)}),5e3)},i.handleRecaptchaRef=function(e){this.captcha=e},i.render=function(){var e=this.props,t=(e.sitekey,e.onChange,e.theme,e.type,e.tabindex,e.onExpired,e.onErrored,e.size,e.stoken,e.grecaptcha,e.badge,e.hl,function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl"]));return c.a.createElement("div",p({},t,{ref:this.handleRecaptchaRef}))},r}(c.a.Component);h.displayName="ReCAPTCHA",h.propTypes={sitekey:d.a.string.isRequired,onChange:d.a.func,grecaptcha:d.a.object,theme:d.a.oneOf(["dark","light"]),type:d.a.oneOf(["image","audio"]),tabindex:d.a.number,onExpired:d.a.func,onErrored:d.a.func,size:d.a.oneOf(["compact","normal","invisible"]),stoken:d.a.string,hl:d.a.string,badge:d.a.oneOf(["bottomright","bottomleft","inline"])},h.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};var l=n(63),f=n.n(l);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var m={},v=0;var g="onloadcallback";var j,y,x=(j=function(){return"https://"+(("undefined"!==typeof window&&window.recaptchaOptions||{}).useRecaptchaNet?"recaptcha.net":"www.google.com")+"/recaptcha/api.js?onload="+g+"&render=explicit"},y=(y={callbackName:g,globalName:"grecaptcha"})||{},function(e){var t=e.displayName||e.name||"Component",n=function(t){var n,r;function i(e,n){var r;return(r=t.call(this,e,n)||this).state={},r.__scriptURL="",r}r=t,(n=i).prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r;var a=i.prototype;return a.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+v++),this.__scriptLoaderID},a.setupScriptURL=function(){return this.__scriptURL="function"===typeof j?j():j,this.__scriptURL},a.asyncScriptLoaderHandleLoad=function(e){var t=this;this.setState(e,(function(){return t.props.asyncScriptOnLoad&&t.props.asyncScriptOnLoad(t.state)}))},a.asyncScriptLoaderTriggerOnScriptLoaded=function(){var e=m[this.__scriptURL];if(!e||!e.loaded)throw new Error("Script is not loaded.");for(var t in e.observers)e.observers[t](e);delete window[y.callbackName]},a.componentDidMount=function(){var e=this,t=this.setupScriptURL(),n=this.asyncScriptLoaderGetScriptLoaderID(),r=y,i=r.globalName,a=r.callbackName,o=r.scriptId;if(i&&"undefined"!==typeof window[i]&&(m[t]={loaded:!0,observers:{}}),m[t]){var c=m[t];return c&&(c.loaded||c.errored)?void this.asyncScriptLoaderHandleLoad(c):void(c.observers[n]=function(t){return e.asyncScriptLoaderHandleLoad(t)})}var s={};s[n]=function(t){return e.asyncScriptLoaderHandleLoad(t)},m[t]={loaded:!1,observers:s};var d=document.createElement("script");for(var p in d.src=t,d.async=!0,y.attributes)d.setAttribute(p,y.attributes[p]);o&&(d.id=o);var u=function(e){if(m[t]){var n=m[t].observers;for(var r in n)e(n[r])&&delete n[r]}};a&&"undefined"!==typeof window&&(window[a]=function(){return e.asyncScriptLoaderTriggerOnScriptLoaded()}),d.onload=function(){var e=m[t];e&&(e.loaded=!0,u((function(t){return!a&&(t(e),!0)})))},d.onerror=function(){var e=m[t];e&&(e.errored=!0,u((function(t){return t(e),!0})))},document.body.appendChild(d)},a.componentWillUnmount=function(){var e=this.__scriptURL;if(!0===y.removeOnUnmount)for(var t=document.getElementsByTagName("script"),n=0;n<t.length;n+=1)t[n].src.indexOf(e)>-1&&t[n].parentNode&&t[n].parentNode.removeChild(t[n]);var r=m[e];r&&(delete r.observers[this.asyncScriptLoaderGetScriptLoaderID()],!0===y.removeOnUnmount&&delete m[e])},a.render=function(){var t=y.globalName,n=this.props,r=(n.asyncScriptOnLoad,n.forwardedRef),i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(n,["asyncScriptOnLoad","forwardedRef"]);return t&&"undefined"!==typeof window&&(i[t]="undefined"!==typeof window[t]?window[t]:void 0),i.ref=r,Object(o.createElement)(e,i)},i}(o.Component),r=Object(o.forwardRef)((function(e,t){return Object(o.createElement)(n,b({},e,{forwardedRef:t}))}));return r.displayName="AsyncScriptLoader("+t+")",r.propTypes={asyncScriptOnLoad:d.a.func},f()(r,e)})(h),O=n(85),w=n(0);function R(){function e(e){var t=e.target;p((function(e){return Object(a.a)(Object(a.a)({},e),{},Object(i.a)({},t.id,t.value))}))}var t=Object(o.useMemo)((function(){return{name:"",from:"",subject:"",text:""}}),[]),n=Object(O.default)(),c=Object(o.useState)(t),s=Object(r.a)(c,2),d=s[0],p=s[1],u=Object(o.useState)(!1),h=Object(r.a)(u,2),l=h[0],f=h[1],b=Object(o.useState)(!1),m=Object(r.a)(b,2),v=m[0],g=m[1];return Object(o.useEffect)((function(){var e=[116,97,110,49,52,49,52,50,64,103,109,97,105,108,46,99,111,109].map((function(e){return String.fromCharCode(e)})).join("");v&&(window.location.href="mailto:".concat(e,"&subject=").concat(d.subject,"&body=").concat(d.name,"%0D%0A%0D%0A").concat(d.text),p(t),g(!1))}),[d,t,n,v]),Object(w.jsxs)(w.Fragment,{children:[l&&Object(w.jsx)("div",{className:"center-content",children:Object(w.jsx)(x,{onChange:function(e){e&&g(!0),f(!1)},sitekey:"6Ldhp9oZAAAAAF6q9eMy5GW8oykM_jWnObEkMF8E"})}),Object(w.jsxs)("section",{className:l?"hide":"accent-bottom center-content panel",children:[Object(w.jsx)("h2",{children:"Email Me"}),Object(w.jsxs)("form",{onSubmit:function(e){e.preventDefault(),f(!0)},style:{marginTop:"2rem"},children:[Object(w.jsxs)("div",{className:"input-field",children:[Object(w.jsx)("input",{id:"name",onChange:e,required:!0,value:d.name,type:"text"}),Object(w.jsx)("label",{htmlFor:"name",children:"Your Name"})]}),Object(w.jsxs)("div",{className:"input-field",children:[Object(w.jsx)("input",{id:"from",onChange:e,required:!0,value:d.from,type:"email"}),Object(w.jsx)("label",{htmlFor:"from",children:"Your Email"})]}),Object(w.jsxs)("div",{className:"input-field",children:[Object(w.jsx)("input",{id:"subject",onChange:e,required:!0,value:d.subject,type:"text"}),Object(w.jsx)("label",{htmlFor:"subject",children:"Subject"})]}),Object(w.jsxs)("div",{className:"input-field",children:[Object(w.jsx)("label",{htmlFor:"text",children:"Text"}),Object(w.jsx)("textarea",{id:"text",className:"materialize-textarea",onChange:e,required:!0,value:d.text})]}),Object(w.jsx)("div",{className:"input-field",children:Object(w.jsxs)("button",{className:"btn waves-effect waves-light",type:"submit",name:"action",children:["Submit",Object(w.jsx)("i",{className:"material-icons right",children:"send"})]})})]})]})]})}},178:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var r=n(16),i=n(1),a=n(59),o=n.n(a);n(178);function c(){var e=Object(i.useState)(""),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(i.useEffect)((function(){return n&&o.a.toast({completeCallback:function(){return a("")},displayLength:2e3,html:n}),function(){return o.a.Toast.dismissAll()}}),[n]),a}}}]);