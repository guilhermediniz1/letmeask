var N={exports:{}},X={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var jp=Object.getOwnPropertySymbols,WE=Object.prototype.hasOwnProperty,BE=Object.prototype.propertyIsEnumerable;function jE(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function $E(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(e).map(function(s){return e[s]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(s){i[s]=s}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var D_=$E()?Object.assign:function(t,e){for(var n,r=jE(t),i,s=1;s<arguments.length;s++){n=Object(arguments[s]);for(var o in n)WE.call(n,o)&&(r[o]=n[o]);if(jp){i=jp(n);for(var a=0;a<i.length;a++)BE.call(n,i[a])&&(r[i[a]]=n[i[a]])}}return r};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Th=D_,Xi=60103,L_=60106;X.Fragment=60107;X.StrictMode=60108;X.Profiler=60114;var M_=60109,F_=60110,U_=60112;X.Suspense=60113;var W_=60115,B_=60116;if(typeof Symbol=="function"&&Symbol.for){var Bt=Symbol.for;Xi=Bt("react.element"),L_=Bt("react.portal"),X.Fragment=Bt("react.fragment"),X.StrictMode=Bt("react.strict_mode"),X.Profiler=Bt("react.profiler"),M_=Bt("react.provider"),F_=Bt("react.context"),U_=Bt("react.forward_ref"),X.Suspense=Bt("react.suspense"),W_=Bt("react.memo"),B_=Bt("react.lazy")}var $p=typeof Symbol=="function"&&Symbol.iterator;function zE(t){return t===null||typeof t!="object"?null:(t=$p&&t[$p]||t["@@iterator"],typeof t=="function"?t:null)}function jo(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var j_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$_={};function Zi(t,e,n){this.props=t,this.context=e,this.refs=$_,this.updater=n||j_}Zi.prototype.isReactComponent={};Zi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error(jo(85));this.updater.enqueueSetState(this,t,e,"setState")};Zi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function z_(){}z_.prototype=Zi.prototype;function kh(t,e,n){this.props=t,this.context=e,this.refs=$_,this.updater=n||j_}var Rh=kh.prototype=new z_;Rh.constructor=kh;Th(Rh,Zi.prototype);Rh.isPureReactComponent=!0;var Ph={current:null},V_=Object.prototype.hasOwnProperty,H_={key:!0,ref:!0,__self:!0,__source:!0};function G_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)V_.call(e,r)&&!H_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Xi,type:t,key:s,ref:o,props:i,_owner:Ph.current}}function VE(t,e){return{$$typeof:Xi,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Nh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Xi}function HE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var zp=/\/+/g;function uc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?HE(""+t.key):e.toString(36)}function xa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Xi:case L_:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+uc(o,0):r,Array.isArray(i)?(n="",t!=null&&(n=t.replace(zp,"$&/")+"/"),xa(i,e,n,"",function(u){return u})):i!=null&&(Nh(i)&&(i=VE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(zp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Array.isArray(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+uc(s,a);o+=xa(s,e,n,l,i)}else if(l=zE(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+uc(s,a++),o+=xa(s,e,n,l,i);else if(s==="object")throw e=""+t,Error(jo(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e));return o}function ga(t,e,n){if(t==null)return t;var r=[],i=0;return xa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function GE(t){if(t._status===-1){var e=t._result;e=e(),t._status=0,t._result=e,e.then(function(n){t._status===0&&(n=n.default,t._status=1,t._result=n)},function(n){t._status===0&&(t._status=2,t._result=n)})}if(t._status===1)return t._result;throw t._result}var q_={current:null};function xn(){var t=q_.current;if(t===null)throw Error(jo(321));return t}var qE={ReactCurrentDispatcher:q_,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:Ph,IsSomeRendererActing:{current:!1},assign:Th};X.Children={map:ga,forEach:function(t,e,n){ga(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ga(t,function(){e++}),e},toArray:function(t){return ga(t,function(e){return e})||[]},only:function(t){if(!Nh(t))throw Error(jo(143));return t}};X.Component=Zi;X.PureComponent=kh;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qE;X.cloneElement=function(t,e,n){if(t==null)throw Error(jo(267,t));var r=Th({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ph.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)V_.call(e,l)&&!H_.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Xi,type:t.type,key:i,ref:s,props:r,_owner:o}};X.createContext=function(t,e){return e===void 0&&(e=null),t={$$typeof:F_,_calculateChangedBits:e,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider={$$typeof:M_,_context:t},t.Consumer=t};X.createElement=G_;X.createFactory=function(t){var e=G_.bind(null,t);return e.type=t,e};X.createRef=function(){return{current:null}};X.forwardRef=function(t){return{$$typeof:U_,render:t}};X.isValidElement=Nh;X.lazy=function(t){return{$$typeof:B_,_payload:{_status:-1,_result:t},_init:GE}};X.memo=function(t,e){return{$$typeof:W_,type:t,compare:e===void 0?null:e}};X.useCallback=function(t,e){return xn().useCallback(t,e)};X.useContext=function(t,e){return xn().useContext(t,e)};X.useDebugValue=function(){};X.useEffect=function(t,e){return xn().useEffect(t,e)};X.useImperativeHandle=function(t,e,n){return xn().useImperativeHandle(t,e,n)};X.useLayoutEffect=function(t,e){return xn().useLayoutEffect(t,e)};X.useMemo=function(t,e){return xn().useMemo(t,e)};X.useReducer=function(t,e,n){return xn().useReducer(t,e,n)};X.useRef=function(t){return xn().useRef(t)};X.useState=function(t){return xn().useState(t)};X.version="17.0.2";N.exports=X;var $o=N.exports,Ah={exports:{}},Mt={},K_={exports:{}},Y_={};/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){var e,n,r,i;if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}if(typeof window=="undefined"||typeof MessageChannel!="function"){var l=null,u=null,c=function(){if(l!==null)try{var L=t.unstable_now();l(!0,L),l=null}catch(R){throw setTimeout(c,0),R}};e=function(L){l!==null?setTimeout(e,0,L):(l=L,setTimeout(c,0))},n=function(L,R){u=setTimeout(L,R)},r=function(){clearTimeout(u)},t.unstable_shouldYield=function(){return!1},i=t.unstable_forceFrameRate=function(){}}else{var d=window.setTimeout,h=window.clearTimeout;if(typeof console!="undefined"){var g=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof g!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var y=!1,w=null,m=-1,f=5,p=0;t.unstable_shouldYield=function(){return t.unstable_now()>=p},i=function(){},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):f=0<L?Math.floor(1e3/L):5};var _=new MessageChannel,v=_.port2;_.port1.onmessage=function(){if(w!==null){var L=t.unstable_now();p=L+f;try{w(!0,L)?v.postMessage(null):(y=!1,w=null)}catch(R){throw v.postMessage(null),R}}else y=!1},e=function(L){w=L,y||(y=!0,v.postMessage(null))},n=function(L,R){m=d(function(){L(t.unstable_now())},R)},r=function(){h(m),m=-1}}function I(L,R){var S=L.length;L.push(R);e:for(;;){var x=S-1>>>1,F=L[x];if(F!==void 0&&0<P(F,R))L[x]=R,L[S]=F,S=x;else break e}}function T(L){return L=L[0],L===void 0?null:L}function k(L){var R=L[0];if(R!==void 0){var S=L.pop();if(S!==R){L[0]=S;e:for(var x=0,F=L.length;x<F;){var E=2*(x+1)-1,Q=L[E],D=E+1,se=L[D];if(Q!==void 0&&0>P(Q,S))se!==void 0&&0>P(se,Q)?(L[x]=se,L[D]=S,x=D):(L[x]=Q,L[E]=S,x=E);else if(se!==void 0&&0>P(se,S))L[x]=se,L[D]=S,x=D;else break e}}return R}return null}function P(L,R){var S=L.sortIndex-R.sortIndex;return S!==0?S:L.id-R.id}var C=[],M=[],q=1,j=null,H=3,le=!1,te=!1,ye=!1;function we(L){for(var R=T(M);R!==null;){if(R.callback===null)k(M);else if(R.startTime<=L)k(M),R.sortIndex=R.expirationTime,I(C,R);else break;R=T(M)}}function Ie(L){if(ye=!1,we(L),!te)if(T(C)!==null)te=!0,e(Ut);else{var R=T(M);R!==null&&n(Ie,R.startTime-L)}}function Ut(L,R){te=!1,ye&&(ye=!1,r()),le=!0;var S=H;try{for(we(R),j=T(C);j!==null&&(!(j.expirationTime>R)||L&&!t.unstable_shouldYield());){var x=j.callback;if(typeof x=="function"){j.callback=null,H=j.priorityLevel;var F=x(j.expirationTime<=R);R=t.unstable_now(),typeof F=="function"?j.callback=F:j===T(C)&&k(C),we(R)}else k(C);j=T(C)}if(j!==null)var E=!0;else{var Q=T(M);Q!==null&&n(Ie,Q.startTime-R),E=!1}return E}finally{j=null,H=S,le=!1}}var Tt=i;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){te||le||(te=!0,e(Ut))},t.unstable_getCurrentPriorityLevel=function(){return H},t.unstable_getFirstCallbackNode=function(){return T(C)},t.unstable_next=function(L){switch(H){case 1:case 2:case 3:var R=3;break;default:R=H}var S=H;H=R;try{return L()}finally{H=S}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=Tt,t.unstable_runWithPriority=function(L,R){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var S=H;H=L;try{return R()}finally{H=S}},t.unstable_scheduleCallback=function(L,R,S){var x=t.unstable_now();switch(typeof S=="object"&&S!==null?(S=S.delay,S=typeof S=="number"&&0<S?x+S:x):S=x,L){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=S+F,L={id:q++,callback:R,priorityLevel:L,startTime:S,expirationTime:F,sortIndex:-1},S>x?(L.sortIndex=S,I(M,L),T(C)===null&&L===T(M)&&(ye?r():ye=!0,n(Ie,S-x))):(L.sortIndex=F,I(C,L),te||le||(te=!0,e(Ut))),L},t.unstable_wrapCallback=function(L){var R=H;return function(){var S=H;H=R;try{return L.apply(this,arguments)}finally{H=S}}}})(Y_);K_.exports=Y_;/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ql=N.exports,ve=D_,Fe=K_.exports;function O(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!ql)throw Error(O(227));var Q_=new Set,lo={};function Jr(t,e){Bi(t,e),Bi(t+"Capture",e)}function Bi(t,e){for(lo[t]=e,t=0;t<e.length;t++)Q_.add(e[t])}var Nn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),KE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vp=Object.prototype.hasOwnProperty,Hp={},Gp={};function YE(t){return Vp.call(Gp,t)?!0:Vp.call(Hp,t)?!1:KE.test(t)?Gp[t]=!0:(Hp[t]=!0,!1)}function QE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function JE(t,e,n,r){if(e===null||typeof e=="undefined"||QE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ot(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ye[t]=new ot(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ye[e]=new ot(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ye[t]=new ot(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ye[t]=new ot(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ye[t]=new ot(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ye[t]=new ot(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ye[t]=new ot(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ye[t]=new ot(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ye[t]=new ot(t,5,!1,t.toLowerCase(),null,!1,!1)});var bh=/[\-:]([a-z])/g;function Oh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(bh,Oh);Ye[e]=new ot(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(bh,Oh);Ye[e]=new ot(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(bh,Oh);Ye[e]=new ot(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ye[t]=new ot(t,1,!1,t.toLowerCase(),null,!1,!1)});Ye.xlinkHref=new ot("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ye[t]=new ot(t,1,!1,t.toLowerCase(),null,!0,!0)});function xh(t,e,n,r){var i=Ye.hasOwnProperty(e)?Ye[e]:null,s=i!==null?i.type===0:r?!1:!(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N");s||(JE(e,n,i,r)&&(n=null),r||i===null?YE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Xr=ql.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fs=60103,Sr=60106,Bn=60107,Dh=60108,zs=60114,Lh=60109,Mh=60110,Kl=60112,Vs=60113,Ja=60120,Yl=60115,Fh=60116,Uh=60121,Wh=60128,J_=60129,Bh=60130,Xc=60131;if(typeof Symbol=="function"&&Symbol.for){var Oe=Symbol.for;Fs=Oe("react.element"),Sr=Oe("react.portal"),Bn=Oe("react.fragment"),Dh=Oe("react.strict_mode"),zs=Oe("react.profiler"),Lh=Oe("react.provider"),Mh=Oe("react.context"),Kl=Oe("react.forward_ref"),Vs=Oe("react.suspense"),Ja=Oe("react.suspense_list"),Yl=Oe("react.memo"),Fh=Oe("react.lazy"),Uh=Oe("react.block"),Oe("react.scope"),Wh=Oe("react.opaque.id"),J_=Oe("react.debug_trace_mode"),Bh=Oe("react.offscreen"),Xc=Oe("react.legacy_hidden")}var qp=typeof Symbol=="function"&&Symbol.iterator;function _s(t){return t===null||typeof t!="object"?null:(t=qp&&t[qp]||t["@@iterator"],typeof t=="function"?t:null)}var cc;function Us(t){if(cc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);cc=e&&e[1]||""}return`
`+cc+t}var dc=!1;function _a(t,e){if(!t||dc)return"";dc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(l){var r=l}Reflect.construct(t,[],e)}else{try{e.call()}catch(l){r=l}t.call(e.prototype)}else{try{throw Error()}catch(l){r=l}t()}}catch(l){if(l&&r&&typeof l.stack=="string"){for(var i=l.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a])return`
`+i[o].replace(" at new "," at ");while(1<=o&&0<=a);break}}}finally{dc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Us(t):""}function XE(t){switch(t.tag){case 5:return Us(t.type);case 16:return Us("Lazy");case 13:return Us("Suspense");case 19:return Us("SuspenseList");case 0:case 2:case 15:return t=_a(t.type,!1),t;case 11:return t=_a(t.type.render,!1),t;case 22:return t=_a(t.type._render,!1),t;case 1:return t=_a(t.type,!0),t;default:return""}}function Si(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Bn:return"Fragment";case Sr:return"Portal";case zs:return"Profiler";case Dh:return"StrictMode";case Vs:return"Suspense";case Ja:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Mh:return(t.displayName||"Context")+".Consumer";case Lh:return(t._context.displayName||"Context")+".Provider";case Kl:var e=t.render;return e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case Yl:return Si(t.type);case Uh:return Si(t._render);case Fh:e=t._payload,t=t._init;try{return Si(t(e))}catch{}}return null}function or(t){switch(typeof t){case"boolean":case"number":case"object":case"string":case"undefined":return t;default:return""}}function X_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ZE(t){var e=X_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function va(t){t._valueTracker||(t._valueTracker=ZE(t))}function Z_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=X_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Xa(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function Zc(t,e){var n=e.checked;return ve({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Kp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=or(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ev(t,e){e=e.checked,e!=null&&xh(t,"checked",e,!1)}function ed(t,e){ev(t,e);var n=or(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?td(t,e.type,n):e.hasOwnProperty("defaultValue")&&td(t,e.type,or(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Yp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function td(t,e,n){(e!=="number"||Xa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}function eI(t){var e="";return ql.Children.forEach(t,function(n){n!=null&&(e+=n)}),e}function nd(t,e){return t=ve({children:void 0},e),(e=eI(e.children))&&(t.children=e),t}function Ti(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+or(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function rd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(O(91));return ve({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Qp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(O(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(O(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:or(n)}}function tv(t,e){var n=or(e.value),r=or(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Jp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}var id={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function nv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function sd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?nv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ya,rv=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!==id.svg||"innerHTML"in t)t.innerHTML=e;else{for(ya=ya||document.createElement("div"),ya.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ya.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function uo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Hs={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tI=["Webkit","ms","Moz","O"];Object.keys(Hs).forEach(function(t){tI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Hs[e]=Hs[t]})});function iv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Hs.hasOwnProperty(t)&&Hs[t]?(""+e).trim():e+"px"}function sv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=iv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var nI=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function od(t,e){if(e){if(nI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(O(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(O(60));if(!(typeof e.dangerouslySetInnerHTML=="object"&&"__html"in e.dangerouslySetInnerHTML))throw Error(O(61))}if(e.style!=null&&typeof e.style!="object")throw Error(O(62))}}function ad(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function jh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ld=null,ki=null,Ri=null;function Xp(t){if(t=Vo(t)){if(typeof ld!="function")throw Error(O(280));var e=t.stateNode;e&&(e=tu(e),ld(t.stateNode,t.type,e))}}function ov(t){ki?Ri?Ri.push(t):Ri=[t]:ki=t}function av(){if(ki){var t=ki,e=Ri;if(Ri=ki=null,Xp(t),e)for(t=0;t<e.length;t++)Xp(e[t])}}function $h(t,e){return t(e)}function lv(t,e,n,r,i){return t(e,n,r,i)}function zh(){}var uv=$h,Tr=!1,hc=!1;function Vh(){(ki!==null||Ri!==null)&&(zh(),av())}function rI(t,e,n){if(hc)return t(e,n);hc=!0;try{return uv(t,e,n)}finally{hc=!1,Vh()}}function co(t,e){var n=t.stateNode;if(n===null)return null;var r=tu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(O(231,e,typeof n));return n}var ud=!1;if(Nn)try{var vs={};Object.defineProperty(vs,"passive",{get:function(){ud=!0}}),window.addEventListener("test",vs,vs),window.removeEventListener("test",vs,vs)}catch{ud=!1}function iI(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Gs=!1,Za=null,el=!1,cd=null,sI={onError:function(t){Gs=!0,Za=t}};function oI(t,e,n,r,i,s,o,a,l){Gs=!1,Za=null,iI.apply(sI,arguments)}function aI(t,e,n,r,i,s,o,a,l){if(oI.apply(this,arguments),Gs){if(Gs){var u=Za;Gs=!1,Za=null}else throw Error(O(198));el||(el=!0,cd=u)}}function Zr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&1026)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function cv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Zp(t){if(Zr(t)!==t)throw Error(O(188))}function lI(t){var e=t.alternate;if(!e){if(e=Zr(t),e===null)throw Error(O(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Zp(i),t;if(s===r)return Zp(i),e;s=s.sibling}throw Error(O(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(O(189))}}if(n.alternate!==r)throw Error(O(190))}if(n.tag!==3)throw Error(O(188));return n.stateNode.current===n?t:e}function dv(t){if(t=lI(t),!t)return null;for(var e=t;;){if(e.tag===5||e.tag===6)return e;if(e.child)e.child.return=e,e=e.child;else{if(e===t)break;for(;!e.sibling;){if(!e.return||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}}return null}function em(t,e){for(var n=t.alternate;e!==null;){if(e===t||e===n)return!0;e=e.return}return!1}var hv,Hh,fv,pv,dd=!1,nn=[],qn=null,Kn=null,Yn=null,ho=new Map,fo=new Map,ys=[],tm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hd(t,e,n,r,i){return{blockedOn:t,domEventName:e,eventSystemFlags:n|16,nativeEvent:i,targetContainers:[r]}}function nm(t,e){switch(t){case"focusin":case"focusout":qn=null;break;case"dragenter":case"dragleave":Kn=null;break;case"mouseover":case"mouseout":Yn=null;break;case"pointerover":case"pointerout":ho.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":fo.delete(e.pointerId)}}function ws(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t=hd(e,n,r,i,s),e!==null&&(e=Vo(e),e!==null&&Hh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function uI(t,e,n,r,i){switch(e){case"focusin":return qn=ws(qn,t,e,n,r,i),!0;case"dragenter":return Kn=ws(Kn,t,e,n,r,i),!0;case"mouseover":return Yn=ws(Yn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ho.set(s,ws(ho.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,fo.set(s,ws(fo.get(s)||null,t,e,n,r,i)),!0}return!1}function cI(t){var e=kr(t.target);if(e!==null){var n=Zr(e);if(n!==null){if(e=n.tag,e===13){if(e=cv(n),e!==null){t.blockedOn=e,pv(t.lanePriority,function(){Fe.unstable_runWithPriority(t.priority,function(){fv(n)})});return}}else if(e===3&&n.stateNode.hydrate){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Da(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Yh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n!==null)return e=Vo(n),e!==null&&Hh(e),t.blockedOn=n,!1;e.shift()}return!0}function rm(t,e,n){Da(t)&&n.delete(e)}function dI(){for(dd=!1;0<nn.length;){var t=nn[0];if(t.blockedOn!==null){t=Vo(t.blockedOn),t!==null&&hv(t);break}for(var e=t.targetContainers;0<e.length;){var n=Yh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n!==null){t.blockedOn=n;break}e.shift()}t.blockedOn===null&&nn.shift()}qn!==null&&Da(qn)&&(qn=null),Kn!==null&&Da(Kn)&&(Kn=null),Yn!==null&&Da(Yn)&&(Yn=null),ho.forEach(rm),fo.forEach(rm)}function Es(t,e){t.blockedOn===e&&(t.blockedOn=null,dd||(dd=!0,Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority,dI)))}function mv(t){function e(i){return Es(i,t)}if(0<nn.length){Es(nn[0],t);for(var n=1;n<nn.length;n++){var r=nn[n];r.blockedOn===t&&(r.blockedOn=null)}}for(qn!==null&&Es(qn,t),Kn!==null&&Es(Kn,t),Yn!==null&&Es(Yn,t),ho.forEach(e),fo.forEach(e),n=0;n<ys.length;n++)r=ys[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ys.length&&(n=ys[0],n.blockedOn===null);)cI(n),n.blockedOn===null&&ys.shift()}function wa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var mi={animationend:wa("Animation","AnimationEnd"),animationiteration:wa("Animation","AnimationIteration"),animationstart:wa("Animation","AnimationStart"),transitionend:wa("Transition","TransitionEnd")},fc={},gv={};Nn&&(gv=document.createElement("div").style,"AnimationEvent"in window||(delete mi.animationend.animation,delete mi.animationiteration.animation,delete mi.animationstart.animation),"TransitionEvent"in window||delete mi.transitionend.transition);function Ql(t){if(fc[t])return fc[t];if(!mi[t])return t;var e=mi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in gv)return fc[t]=e[n];return t}var _v=Ql("animationend"),vv=Ql("animationiteration"),yv=Ql("animationstart"),wv=Ql("transitionend"),Ev=new Map,Gh=new Map,hI=["abort","abort",_v,"animationEnd",vv,"animationIteration",yv,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",wv,"transitionEnd","waiting","waiting"];function qh(t,e){for(var n=0;n<t.length;n+=2){var r=t[n],i=t[n+1];i="on"+(i[0].toUpperCase()+i.slice(1)),Gh.set(r,e),Ev.set(r,i),Jr(i,[r])}}var fI=Fe.unstable_now;fI();var de=8;function fi(t){if((1&t)!==0)return de=15,1;if((2&t)!==0)return de=14,2;if((4&t)!==0)return de=13,4;var e=24&t;return e!==0?(de=12,e):(t&32)!==0?(de=11,32):(e=192&t,e!==0?(de=10,e):(t&256)!==0?(de=9,256):(e=3584&t,e!==0?(de=8,e):(t&4096)!==0?(de=7,4096):(e=4186112&t,e!==0?(de=6,e):(e=62914560&t,e!==0?(de=5,e):t&67108864?(de=4,67108864):(t&134217728)!==0?(de=3,134217728):(e=805306368&t,e!==0?(de=2,e):(1073741824&t)!==0?(de=1,1073741824):(de=8,t))))))}function pI(t){switch(t){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function mI(t){switch(t){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(O(358,t))}}function po(t,e){var n=t.pendingLanes;if(n===0)return de=0;var r=0,i=0,s=t.expiredLanes,o=t.suspendedLanes,a=t.pingedLanes;if(s!==0)r=s,i=de=15;else if(s=n&134217727,s!==0){var l=s&~o;l!==0?(r=fi(l),i=de):(a&=s,a!==0&&(r=fi(a),i=de))}else s=n&~o,s!==0?(r=fi(s),i=de):a!==0&&(r=fi(a),i=de);if(r===0)return 0;if(r=31-ar(r),r=n&((0>r?0:1<<r)<<1)-1,e!==0&&e!==r&&(e&o)===0){if(fi(e),i<=de)return e;de=i}if(e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-ar(e),i=1<<n,r|=t[n],e&=~i;return r}function Iv(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function tl(t,e){switch(t){case 15:return 1;case 14:return 2;case 12:return t=pi(24&~e),t===0?tl(10,e):t;case 10:return t=pi(192&~e),t===0?tl(8,e):t;case 8:return t=pi(3584&~e),t===0&&(t=pi(4186112&~e),t===0&&(t=512)),t;case 2:return e=pi(805306368&~e),e===0&&(e=268435456),e}throw Error(O(358,t))}function pi(t){return t&-t}function pc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Jl(t,e,n){t.pendingLanes|=e;var r=e-1;t.suspendedLanes&=r,t.pingedLanes&=r,t=t.eventTimes,e=31-ar(e),t[e]=n}var ar=Math.clz32?Math.clz32:vI,gI=Math.log,_I=Math.LN2;function vI(t){return t===0?32:31-(gI(t)/_I|0)|0}var yI=Fe.unstable_UserBlockingPriority,wI=Fe.unstable_runWithPriority,La=!0;function EI(t,e,n,r){Tr||zh();var i=Kh,s=Tr;Tr=!0;try{lv(i,t,e,n,r)}finally{(Tr=s)||Vh()}}function II(t,e,n,r){wI(yI,Kh.bind(null,t,e,n,r))}function Kh(t,e,n,r){if(La){var i;if((i=(e&4)===0)&&0<nn.length&&-1<tm.indexOf(t))t=hd(null,t,e,n,r),nn.push(t);else{var s=Yh(t,e,n,r);if(s===null)i&&nm(t,r);else{if(i){if(-1<tm.indexOf(t)){t=hd(s,t,e,n,r),nn.push(t);return}if(uI(s,t,e,n,r))return;nm(t,r)}Lv(t,e,r,null,n)}}}}function Yh(t,e,n,r){var i=jh(r);if(i=kr(i),i!==null){var s=Zr(i);if(s===null)i=null;else{var o=s.tag;if(o===13){if(i=cv(s),i!==null)return i;i=null}else if(o===3){if(s.stateNode.hydrate)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null)}}return Lv(t,e,r,i,n),null}var jn=null,Qh=null,Ma=null;function Cv(){if(Ma)return Ma;var t,e=Qh,n=e.length,r,i="value"in jn?jn.value:jn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ma=i.slice(t,1<r?1-r:void 0)}function Fa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ea(){return!0}function im(){return!1}function Ct(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ea:im,this.isPropagationStopped=im,this}return ve(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ea)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ea)},persist:function(){},isPersistent:Ea}),e}var es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jh=Ct(es),zo=ve({},es,{view:0,detail:0}),CI=Ct(zo),mc,gc,Is,Xl=ve({},zo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Is&&(Is&&t.type==="mousemove"?(mc=t.screenX-Is.screenX,gc=t.screenY-Is.screenY):gc=mc=0,Is=t),mc)},movementY:function(t){return"movementY"in t?t.movementY:gc}}),sm=Ct(Xl),SI=ve({},Xl,{dataTransfer:0}),TI=Ct(SI),kI=ve({},zo,{relatedTarget:0}),_c=Ct(kI),RI=ve({},es,{animationName:0,elapsedTime:0,pseudoElement:0}),PI=Ct(RI),NI=ve({},es,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),AI=Ct(NI),bI=ve({},es,{data:0}),om=Ct(bI),OI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},DI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function LI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=DI[t])?!!e[t]:!1}function Xh(){return LI}var MI=ve({},zo,{key:function(t){if(t.key){var e=OI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Fa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?xI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xh,charCode:function(t){return t.type==="keypress"?Fa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Fa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),FI=Ct(MI),UI=ve({},Xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),am=Ct(UI),WI=ve({},zo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xh}),BI=Ct(WI),jI=ve({},es,{propertyName:0,elapsedTime:0,pseudoElement:0}),$I=Ct(jI),zI=ve({},Xl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),VI=Ct(zI),HI=[9,13,27,32],Zh=Nn&&"CompositionEvent"in window,qs=null;Nn&&"documentMode"in document&&(qs=document.documentMode);var GI=Nn&&"TextEvent"in window&&!qs,Sv=Nn&&(!Zh||qs&&8<qs&&11>=qs),lm=String.fromCharCode(32),um=!1;function Tv(t,e){switch(t){case"keyup":return HI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var gi=!1;function qI(t,e){switch(t){case"compositionend":return kv(e);case"keypress":return e.which!==32?null:(um=!0,lm);case"textInput":return t=e.data,t===lm&&um?null:t;default:return null}}function KI(t,e){if(gi)return t==="compositionend"||!Zh&&Tv(t,e)?(t=Cv(),Ma=Qh=jn=null,gi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Sv&&e.locale!=="ko"?null:e.data;default:return null}}var YI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!YI[t.type]:e==="textarea"}function Rv(t,e,n,r){ov(r),e=nl(e,"onChange"),0<e.length&&(n=new Jh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ks=null,mo=null;function QI(t){Ov(t,0)}function Zl(t){var e=vi(t);if(Z_(e))return t}function JI(t,e){if(t==="change")return e}var Pv=!1;if(Nn){var vc;if(Nn){var yc="oninput"in document;if(!yc){var dm=document.createElement("div");dm.setAttribute("oninput","return;"),yc=typeof dm.oninput=="function"}vc=yc}else vc=!1;Pv=vc&&(!document.documentMode||9<document.documentMode)}function hm(){Ks&&(Ks.detachEvent("onpropertychange",Nv),mo=Ks=null)}function Nv(t){if(t.propertyName==="value"&&Zl(mo)){var e=[];if(Rv(e,mo,t,jh(t)),t=QI,Tr)t(e);else{Tr=!0;try{$h(t,e)}finally{Tr=!1,Vh()}}}}function XI(t,e,n){t==="focusin"?(hm(),Ks=e,mo=n,Ks.attachEvent("onpropertychange",Nv)):t==="focusout"&&hm()}function ZI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Zl(mo)}function eC(t,e){if(t==="click")return Zl(e)}function tC(t,e){if(t==="input"||t==="change")return Zl(e)}function nC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var kt=typeof Object.is=="function"?Object.is:nC,rC=Object.prototype.hasOwnProperty;function go(t,e){if(kt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!rC.call(e,n[r])||!kt(t[n[r]],e[n[r]]))return!1;return!0}function fm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function pm(t,e){var n=fm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fm(n)}}function Av(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Av(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function mm(){for(var t=window,e=Xa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Xa(t.document)}return e}function fd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var iC=Nn&&"documentMode"in document&&11>=document.documentMode,_i=null,pd=null,Ys=null,md=!1;function gm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;md||_i==null||_i!==Xa(r)||(r=_i,"selectionStart"in r&&fd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ys&&go(Ys,r)||(Ys=r,r=nl(pd,"onSelect"),0<r.length&&(e=new Jh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=_i)))}qh("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);qh("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);qh(hI,2);for(var _m="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),wc=0;wc<_m.length;wc++)Gh.set(_m[wc],0);Bi("onMouseEnter",["mouseout","mouseover"]);Bi("onMouseLeave",["mouseout","mouseover"]);Bi("onPointerEnter",["pointerout","pointerover"]);Bi("onPointerLeave",["pointerout","pointerover"]);Jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ws="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ws));function vm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,aI(r,e,void 0,t),t.currentTarget=null}function Ov(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;vm(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;vm(i,a,u),s=l}}}if(el)throw t=cd,el=!1,cd=null,t}function pe(t,e){var n=Fv(e),r=t+"__bubble";n.has(r)||(Dv(e,t,2,!1),n.add(r))}var ym="_reactListening"+Math.random().toString(36).slice(2);function xv(t){t[ym]||(t[ym]=!0,Q_.forEach(function(e){bv.has(e)||wm(e,!1,t,null),wm(e,!0,t,null)}))}function wm(t,e,n,r){var i=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,s=n;if(t==="selectionchange"&&n.nodeType!==9&&(s=n.ownerDocument),r!==null&&!e&&bv.has(t)){if(t!=="scroll")return;i|=2,s=r}var o=Fv(s),a=t+"__"+(e?"capture":"bubble");o.has(a)||(e&&(i|=4),Dv(s,t,i,e),o.add(a))}function Dv(t,e,n,r){var i=Gh.get(e);switch(i===void 0?2:i){case 0:i=EI;break;case 1:i=II;break;default:i=Kh}n=i.bind(null,e,n,t),i=void 0,!ud||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Lv(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=kr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}rI(function(){var u=s,c=jh(n),d=[];e:{var h=Ev.get(t);if(h!==void 0){var g=Jh,y=t;switch(t){case"keypress":if(Fa(n)===0)break e;case"keydown":case"keyup":g=FI;break;case"focusin":y="focus",g=_c;break;case"focusout":y="blur",g=_c;break;case"beforeblur":case"afterblur":g=_c;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=sm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=TI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=BI;break;case _v:case vv:case yv:g=PI;break;case wv:g=$I;break;case"scroll":g=CI;break;case"wheel":g=VI;break;case"copy":case"cut":case"paste":g=AI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=am}var w=(e&4)!==0,m=!w&&t==="scroll",f=w?h!==null?h+"Capture":null:h;w=[];for(var p=u,_;p!==null;){_=p;var v=_.stateNode;if(_.tag===5&&v!==null&&(_=v,f!==null&&(v=co(p,f),v!=null&&w.push(_o(p,v,_)))),m)break;p=p.return}0<w.length&&(h=new g(h,y,null,n,c),d.push({event:h,listeners:w}))}}if((e&7)===0){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&(e&16)===0&&(y=n.relatedTarget||n.fromElement)&&(kr(y)||y[ts]))break e;if((g||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?kr(y):null,y!==null&&(m=Zr(y),y!==m||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(w=sm,v="onMouseLeave",f="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(w=am,v="onPointerLeave",f="onPointerEnter",p="pointer"),m=g==null?h:vi(g),_=y==null?h:vi(y),h=new w(v,p+"leave",g,n,c),h.target=m,h.relatedTarget=_,v=null,kr(c)===u&&(w=new w(f,p+"enter",y,n,c),w.target=_,w.relatedTarget=m,v=w),m=v,g&&y)t:{for(w=g,f=y,p=0,_=w;_;_=ci(_))p++;for(_=0,v=f;v;v=ci(v))_++;for(;0<p-_;)w=ci(w),p--;for(;0<_-p;)f=ci(f),_--;for(;p--;){if(w===f||f!==null&&w===f.alternate)break t;w=ci(w),f=ci(f)}w=null}else w=null;g!==null&&Em(d,h,g,w,!1),y!==null&&m!==null&&Em(d,m,y,w,!0)}}e:{if(h=u?vi(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var I=JI;else if(cm(h))if(Pv)I=tC;else{I=ZI;var T=XI}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(I=eC);if(I&&(I=I(t,u))){Rv(d,I,n,c);break e}T&&T(t,h,u),t==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&td(h,"number",h.value)}switch(T=u?vi(u):window,t){case"focusin":(cm(T)||T.contentEditable==="true")&&(_i=T,pd=u,Ys=null);break;case"focusout":Ys=pd=_i=null;break;case"mousedown":md=!0;break;case"contextmenu":case"mouseup":case"dragend":md=!1,gm(d,n,c);break;case"selectionchange":if(iC)break;case"keydown":case"keyup":gm(d,n,c)}var k;if(Zh)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else gi?Tv(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Sv&&n.locale!=="ko"&&(gi||P!=="onCompositionStart"?P==="onCompositionEnd"&&gi&&(k=Cv()):(jn=c,Qh="value"in jn?jn.value:jn.textContent,gi=!0)),T=nl(u,P),0<T.length&&(P=new om(P,t,null,n,c),d.push({event:P,listeners:T}),k?P.data=k:(k=kv(n),k!==null&&(P.data=k)))),(k=GI?qI(t,n):KI(t,n))&&(u=nl(u,"onBeforeInput"),0<u.length&&(c=new om("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=k))}Ov(d,e)})}function _o(t,e,n){return{instance:t,listener:e,currentTarget:n}}function nl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=co(t,n),s!=null&&r.unshift(_o(t,s,i)),s=co(t,e),s!=null&&r.push(_o(t,s,i))),t=t.return}return r}function ci(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Em(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=co(n,s),l!=null&&o.unshift(_o(n,l,a))):i||(l=co(n,s),l!=null&&o.push(_o(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}function rl(){}var Ec=null,Ic=null;function Mv(t,e){switch(t){case"button":case"input":case"select":case"textarea":return!!e.autoFocus}return!1}function gd(t,e){return t==="textarea"||t==="option"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Im=typeof setTimeout=="function"?setTimeout:void 0,sC=typeof clearTimeout=="function"?clearTimeout:void 0;function ef(t){t.nodeType===1?t.textContent="":t.nodeType===9&&(t=t.body,t!=null&&(t.textContent=""))}function Pi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break}return t}function Cm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Cc=0;function oC(t){return{$$typeof:Wh,toString:t,valueOf:t}}var eu=Math.random().toString(36).slice(2),$n="__reactFiber$"+eu,il="__reactProps$"+eu,ts="__reactContainer$"+eu,Sm="__reactEvents$"+eu;function kr(t){var e=t[$n];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ts]||n[$n]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Cm(t);t!==null;){if(n=t[$n])return n;t=Cm(t)}return e}t=n,n=t.parentNode}return null}function Vo(t){return t=t[$n]||t[ts],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function vi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(O(33))}function tu(t){return t[il]||null}function Fv(t){var e=t[Sm];return e===void 0&&(e=t[Sm]=new Set),e}var _d=[],yi=-1;function _r(t){return{current:t}}function me(t){0>yi||(t.current=_d[yi],_d[yi]=null,yi--)}function Se(t,e){yi++,_d[yi]=t.current,t.current=e}var lr={},nt=_r(lr),ft=_r(!1),Fr=lr;function ji(t,e){var n=t.type.contextTypes;if(!n)return lr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function pt(t){return t=t.childContextTypes,t!=null}function sl(){me(ft),me(nt)}function Tm(t,e,n){if(nt.current!==lr)throw Error(O(168));Se(nt,e),Se(ft,n)}function Uv(t,e,n){var r=t.stateNode;if(t=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(O(108,Si(e)||"Unknown",i));return ve({},n,r)}function Ua(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||lr,Fr=nt.current,Se(nt,t),Se(ft,ft.current),!0}function km(t,e,n){var r=t.stateNode;if(!r)throw Error(O(169));n?(t=Uv(t,e,Fr),r.__reactInternalMemoizedMergedChildContext=t,me(ft),me(nt),Se(nt,t)):me(ft),Se(ft,n)}var tf=null,Or=null,aC=Fe.unstable_runWithPriority,nf=Fe.unstable_scheduleCallback,vd=Fe.unstable_cancelCallback,lC=Fe.unstable_shouldYield,Rm=Fe.unstable_requestPaint,yd=Fe.unstable_now,uC=Fe.unstable_getCurrentPriorityLevel,nu=Fe.unstable_ImmediatePriority,Wv=Fe.unstable_UserBlockingPriority,Bv=Fe.unstable_NormalPriority,jv=Fe.unstable_LowPriority,$v=Fe.unstable_IdlePriority,Sc={},cC=Rm!==void 0?Rm:function(){},yn=null,Wa=null,Tc=!1,Pm=yd(),Ze=1e4>Pm?yd:function(){return yd()-Pm};function $i(){switch(uC()){case nu:return 99;case Wv:return 98;case Bv:return 97;case jv:return 96;case $v:return 95;default:throw Error(O(332))}}function zv(t){switch(t){case 99:return nu;case 98:return Wv;case 97:return Bv;case 96:return jv;case 95:return $v;default:throw Error(O(332))}}function Ur(t,e){return t=zv(t),aC(t,e)}function vo(t,e,n){return t=zv(t),nf(t,e,n)}function _n(){if(Wa!==null){var t=Wa;Wa=null,vd(t)}Vv()}function Vv(){if(!Tc&&yn!==null){Tc=!0;var t=0;try{var e=yn;Ur(99,function(){for(;t<e.length;t++){var n=e[t];do n=n(!0);while(n!==null)}}),yn=null}catch(n){throw yn!==null&&(yn=yn.slice(t+1)),nf(nu,_n),n}finally{Tc=!1}}}var dC=Xr.ReactCurrentBatchConfig;function $t(t,e){if(t&&t.defaultProps){e=ve({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var ol=_r(null),al=null,wi=null,ll=null;function rf(){ll=wi=al=null}function sf(t){var e=ol.current;me(ol),t.type._context._currentValue=e}function Hv(t,e){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)===e){if(n===null||(n.childLanes&e)===e)break;n.childLanes|=e}else t.childLanes|=e,n!==null&&(n.childLanes|=e);t=t.return}}function Ni(t,e){al=t,ll=wi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(Vt=!0),t.firstContext=null)}function Ot(t,e){if(ll!==t&&e!==!1&&e!==0)if((typeof e!="number"||e===1073741823)&&(ll=t,e=1073741823),e={context:t,observedBits:e,next:null},wi===null){if(al===null)throw Error(O(308));wi=e,al.dependencies={lanes:0,firstContext:e,responders:null}}else wi=wi.next=e;return t._currentValue}var Wn=!1;function of(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function Gv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Qn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Jn(t,e){if(t=t.updateQueue,t!==null){t=t.shared;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}}function Nm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function yo(t,e,n,r){var i=t.updateQueue;Wn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;if(c!==null){c=c.updateQueue;var d=c.lastBaseUpdate;d!==o&&(d===null?c.firstBaseUpdate=u:d.next=u,c.lastBaseUpdate=l)}}if(s!==null){d=i.baseState,o=0,c=u=l=null;do{a=s.lane;var h=s.eventTime;if((r&a)===a){c!==null&&(c=c.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=t,y=s;switch(a=e,h=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){d=g.call(h,d,a);break e}d=g;break e;case 3:g.flags=g.flags&-4097|64;case 0:if(g=y.payload,a=typeof g=="function"?g.call(h,d,a):g,a==null)break e;d=ve({},d,a);break e;case 2:Wn=!0}}s.callback!==null&&(t.flags|=32,a=i.effects,a===null?i.effects=[s]:a.push(s))}else h={eventTime:h,lane:a,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=h,l=d):c=c.next=h,o|=a;if(s=s.next,s===null){if(a=i.shared.pending,a===null)break;s=a.next,a.next=null,i.lastBaseUpdate=a,i.shared.pending=null}}while(1);c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,Go|=o,t.lanes=o,t.memoizedState=d}}function Am(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(O(191,i));i.call(r)}}}var qv=new ql.Component().refs;function ul(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ve({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ru={isMounted:function(t){return(t=t._reactInternals)?Zr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Et(),i=Xn(t),s=Qn(r,i);s.payload=e,n!=null&&(s.callback=n),Jn(t,s),Zn(t,i,r)},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Et(),i=Xn(t),s=Qn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),Jn(t,s),Zn(t,i,r)},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Et(),r=Xn(t),i=Qn(n,r);i.tag=2,e!=null&&(i.callback=e),Jn(t,i),Zn(t,r,n)}};function bm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!go(n,r)||!go(i,s):!0}function Kv(t,e,n){var r=!1,i=lr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ot(s):(i=pt(e)?Fr:nt.current,r=e.contextTypes,s=(r=r!=null)?ji(t,i):lr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ru,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Om(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ru.enqueueReplaceState(e,e.state,null)}function wd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=qv,of(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ot(s):(s=pt(e)?Fr:nt.current,i.context=ji(t,s)),yo(t,n,i,r),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ul(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ru.enqueueReplaceState(i,i.state,null),yo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4)}var Ia=Array.isArray;function Cs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(O(309));var r=n.stateNode}if(!r)throw Error(O(147,t));var i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(s){var o=r.refs;o===qv&&(o=r.refs={}),s===null?delete o[i]:o[i]=s},e._stringRef=i,e)}if(typeof t!="string")throw Error(O(284));if(!n._owner)throw Error(O(290,t))}return t}function Ca(t,e){if(t.type!=="textarea")throw Error(O(31,Object.prototype.toString.call(e)==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":e))}function Yv(t){function e(m,f){if(t){var p=m.lastEffect;p!==null?(p.nextEffect=f,m.lastEffect=f):m.firstEffect=m.lastEffect=f,f.nextEffect=null,f.flags=8}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=cr(m,f),m.index=0,m.sibling=null,m}function s(m,f,p){return m.index=p,t?(p=m.alternate,p!==null?(p=p.index,p<f?(m.flags=2,f):p):(m.flags=2,f)):f}function o(m){return t&&m.alternate===null&&(m.flags=2),m}function a(m,f,p,_){return f===null||f.tag!==6?(f=Ac(p,m.mode,_),f.return=m,f):(f=i(f,p),f.return=m,f)}function l(m,f,p,_){return f!==null&&f.elementType===p.type?(_=i(f,p.props),_.ref=Cs(m,f,p),_.return=m,_):(_=za(p.type,p.key,p.props,null,m.mode,_),_.ref=Cs(m,f,p),_.return=m,_)}function u(m,f,p,_){return f===null||f.tag!==4||f.stateNode.containerInfo!==p.containerInfo||f.stateNode.implementation!==p.implementation?(f=bc(p,m.mode,_),f.return=m,f):(f=i(f,p.children||[]),f.return=m,f)}function c(m,f,p,_,v){return f===null||f.tag!==7?(f=xi(p,m.mode,_,v),f.return=m,f):(f=i(f,p),f.return=m,f)}function d(m,f,p){if(typeof f=="string"||typeof f=="number")return f=Ac(""+f,m.mode,p),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Fs:return p=za(f.type,f.key,f.props,null,m.mode,p),p.ref=Cs(m,null,f),p.return=m,p;case Sr:return f=bc(f,m.mode,p),f.return=m,f}if(Ia(f)||_s(f))return f=xi(f,m.mode,p,null),f.return=m,f;Ca(m,f)}return null}function h(m,f,p,_){var v=f!==null?f.key:null;if(typeof p=="string"||typeof p=="number")return v!==null?null:a(m,f,""+p,_);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Fs:return p.key===v?p.type===Bn?c(m,f,p.props.children,_,v):l(m,f,p,_):null;case Sr:return p.key===v?u(m,f,p,_):null}if(Ia(p)||_s(p))return v!==null?null:c(m,f,p,_,null);Ca(m,p)}return null}function g(m,f,p,_,v){if(typeof _=="string"||typeof _=="number")return m=m.get(p)||null,a(f,m,""+_,v);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Fs:return m=m.get(_.key===null?p:_.key)||null,_.type===Bn?c(f,m,_.props.children,v,_.key):l(f,m,_,v);case Sr:return m=m.get(_.key===null?p:_.key)||null,u(f,m,_,v)}if(Ia(_)||_s(_))return m=m.get(p)||null,c(f,m,_,v,null);Ca(f,_)}return null}function y(m,f,p,_){for(var v=null,I=null,T=f,k=f=0,P=null;T!==null&&k<p.length;k++){T.index>k?(P=T,T=null):P=T.sibling;var C=h(m,T,p[k],_);if(C===null){T===null&&(T=P);break}t&&T&&C.alternate===null&&e(m,T),f=s(C,f,k),I===null?v=C:I.sibling=C,I=C,T=P}if(k===p.length)return n(m,T),v;if(T===null){for(;k<p.length;k++)T=d(m,p[k],_),T!==null&&(f=s(T,f,k),I===null?v=T:I.sibling=T,I=T);return v}for(T=r(m,T);k<p.length;k++)P=g(T,m,k,p[k],_),P!==null&&(t&&P.alternate!==null&&T.delete(P.key===null?k:P.key),f=s(P,f,k),I===null?v=P:I.sibling=P,I=P);return t&&T.forEach(function(M){return e(m,M)}),v}function w(m,f,p,_){var v=_s(p);if(typeof v!="function")throw Error(O(150));if(p=v.call(p),p==null)throw Error(O(151));for(var I=v=null,T=f,k=f=0,P=null,C=p.next();T!==null&&!C.done;k++,C=p.next()){T.index>k?(P=T,T=null):P=T.sibling;var M=h(m,T,C.value,_);if(M===null){T===null&&(T=P);break}t&&T&&M.alternate===null&&e(m,T),f=s(M,f,k),I===null?v=M:I.sibling=M,I=M,T=P}if(C.done)return n(m,T),v;if(T===null){for(;!C.done;k++,C=p.next())C=d(m,C.value,_),C!==null&&(f=s(C,f,k),I===null?v=C:I.sibling=C,I=C);return v}for(T=r(m,T);!C.done;k++,C=p.next())C=g(T,m,k,C.value,_),C!==null&&(t&&C.alternate!==null&&T.delete(C.key===null?k:C.key),f=s(C,f,k),I===null?v=C:I.sibling=C,I=C);return t&&T.forEach(function(q){return e(m,q)}),v}return function(m,f,p,_){var v=typeof p=="object"&&p!==null&&p.type===Bn&&p.key===null;v&&(p=p.props.children);var I=typeof p=="object"&&p!==null;if(I)switch(p.$$typeof){case Fs:e:{for(I=p.key,v=f;v!==null;){if(v.key===I){switch(v.tag){case 7:if(p.type===Bn){n(m,v.sibling),f=i(v,p.props.children),f.return=m,m=f;break e}break;default:if(v.elementType===p.type){n(m,v.sibling),f=i(v,p.props),f.ref=Cs(m,v,p),f.return=m,m=f;break e}}n(m,v);break}else e(m,v);v=v.sibling}p.type===Bn?(f=xi(p.props.children,m.mode,_,p.key),f.return=m,m=f):(_=za(p.type,p.key,p.props,null,m.mode,_),_.ref=Cs(m,f,p),_.return=m,m=_)}return o(m);case Sr:e:{for(v=p.key;f!==null;){if(f.key===v)if(f.tag===4&&f.stateNode.containerInfo===p.containerInfo&&f.stateNode.implementation===p.implementation){n(m,f.sibling),f=i(f,p.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=bc(p,m.mode,_),f.return=m,m=f}return o(m)}if(typeof p=="string"||typeof p=="number")return p=""+p,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,p),f.return=m,m=f):(n(m,f),f=Ac(p,m.mode,_),f.return=m,m=f),o(m);if(Ia(p))return y(m,f,p,_);if(_s(p))return w(m,f,p,_);if(I&&Ca(m,p),typeof p=="undefined"&&!v)switch(m.tag){case 1:case 22:case 0:case 11:case 15:throw Error(O(152,Si(m.type)||"Component"))}return n(m,f)}}var cl=Yv(!0),Qv=Yv(!1),Ho={},ln=_r(Ho),wo=_r(Ho),Eo=_r(Ho);function Rr(t){if(t===Ho)throw Error(O(174));return t}function Ed(t,e){switch(Se(Eo,e),Se(wo,t),Se(ln,Ho),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:sd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=sd(e,t)}me(ln),Se(ln,e)}function zi(){me(ln),me(wo),me(Eo)}function xm(t){Rr(Eo.current);var e=Rr(ln.current),n=sd(e,t.type);e!==n&&(Se(wo,t),Se(ln,n))}function af(t){wo.current===t&&(me(ln),me(wo))}var Ce=_r(0);function dl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&64)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var En=null,zn=null,un=!1;function Jv(t,e){var n=Rt(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=e,n.return=t,n.flags=8,t.lastEffect!==null?(t.lastEffect.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n}function Dm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,!0):!1;case 13:return!1;default:return!1}}function Id(t){if(un){var e=zn;if(e){var n=e;if(!Dm(t,e)){if(e=Pi(n.nextSibling),!e||!Dm(t,e)){t.flags=t.flags&-1025|2,un=!1,En=t;return}Jv(En,n)}En=t,zn=Pi(e.firstChild)}else t.flags=t.flags&-1025|2,un=!1,En=t}}function Lm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;En=t}function Sa(t){if(t!==En)return!1;if(!un)return Lm(t),un=!0,!1;var e=t.type;if(t.tag!==5||e!=="head"&&e!=="body"&&!gd(e,t.memoizedProps))for(e=zn;e;)Jv(t,e),e=Pi(e.nextSibling);if(Lm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(O(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){zn=Pi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}zn=null}}else zn=En?Pi(t.stateNode.nextSibling):null;return!0}function kc(){zn=En=null,un=!1}var Ai=[];function lf(){for(var t=0;t<Ai.length;t++)Ai[t]._workInProgressVersionPrimary=null;Ai.length=0}var Qs=Xr.ReactCurrentDispatcher,At=Xr.ReactCurrentBatchConfig,Io=0,ke=null,Xe=null,Ge=null,hl=!1,Js=!1;function lt(){throw Error(O(321))}function uf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!kt(t[n],e[n]))return!1;return!0}function cf(t,e,n,r,i,s){if(Io=s,ke=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Qs.current=t===null||t.memoizedState===null?fC:pC,t=n(r,i),Js){s=0;do{if(Js=!1,!(25>s))throw Error(O(301));s+=1,Ge=Xe=null,e.updateQueue=null,Qs.current=mC,t=n(r,i)}while(Js)}if(Qs.current=gl,e=Xe!==null&&Xe.next!==null,Io=0,Ge=Xe=ke=null,hl=!1,e)throw Error(O(300));return t}function Pr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?ke.memoizedState=Ge=t:Ge=Ge.next=t,Ge}function ei(){if(Xe===null){var t=ke.alternate;t=t!==null?t.memoizedState:null}else t=Xe.next;var e=Ge===null?ke.memoizedState:Ge.next;if(e!==null)Ge=e,Xe=t;else{if(t===null)throw Error(O(310));Xe=t,t={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},Ge===null?ke.memoizedState=Ge=t:Ge=Ge.next=t}return Ge}function rn(t,e){return typeof e=="function"?e(t):e}function Ss(t){var e=ei(),n=e.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=t;var r=Xe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){i=i.next,r=r.baseState;var a=o=s=null,l=i;do{var u=l.lane;if((Io&u)===u)a!==null&&(a=a.next={lane:0,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null}),r=l.eagerReducer===t?l.eagerState:t(r,l.action);else{var c={lane:u,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null};a===null?(o=a=c,s=r):a=a.next=c,ke.lanes|=u,Go|=u}l=l.next}while(l!==null&&l!==i);a===null?s=r:a.next=o,kt(r,e.memoizedState)||(Vt=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=a,n.lastRenderedState=r}return[e.memoizedState,n.dispatch]}function Ts(t){var e=ei(),n=e.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);kt(s,e.memoizedState)||(Vt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Mm(t,e,n){var r=e._getVersion;r=r(e._source);var i=e._workInProgressVersionPrimary;if(i!==null?t=i===r:(t=t.mutableReadLanes,(t=(Io&t)===t)&&(e._workInProgressVersionPrimary=r,Ai.push(e))),t)return n(e._source);throw Ai.push(e),Error(O(350))}function Xv(t,e,n,r){var i=it;if(i===null)throw Error(O(349));var s=e._getVersion,o=s(e._source),a=Qs.current,l=a.useState(function(){return Mm(i,e,n)}),u=l[1],c=l[0];l=Ge;var d=t.memoizedState,h=d.refs,g=h.getSnapshot,y=d.source;d=d.subscribe;var w=ke;return t.memoizedState={refs:h,source:e,subscribe:r},a.useEffect(function(){h.getSnapshot=n,h.setSnapshot=u;var m=s(e._source);if(!kt(o,m)){m=n(e._source),kt(c,m)||(u(m),m=Xn(w),i.mutableReadLanes|=m&i.pendingLanes),m=i.mutableReadLanes,i.entangledLanes|=m;for(var f=i.entanglements,p=m;0<p;){var _=31-ar(p),v=1<<_;f[_]|=m,p&=~v}}},[n,e,r]),a.useEffect(function(){return r(e._source,function(){var m=h.getSnapshot,f=h.setSnapshot;try{f(m(e._source));var p=Xn(w);i.mutableReadLanes|=p&i.pendingLanes}catch(_){f(function(){throw _})}})},[e,r]),kt(g,n)&&kt(y,e)&&kt(d,r)||(t={pending:null,dispatch:null,lastRenderedReducer:rn,lastRenderedState:c},t.dispatch=u=ff.bind(null,ke,t),l.queue=t,l.baseQueue=null,c=Mm(i,e,n),l.memoizedState=l.baseState=c),c}function Zv(t,e,n){var r=ei();return Xv(r,t,e,n)}function ks(t){var e=Pr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t=e.queue={pending:null,dispatch:null,lastRenderedReducer:rn,lastRenderedState:t},t=t.dispatch=ff.bind(null,ke,t),[e.memoizedState,t]}function fl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ke.updateQueue,e===null?(e={lastEffect:null},ke.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Fm(t){var e=Pr();return t={current:t},e.memoizedState=t}function pl(){return ei().memoizedState}function Cd(t,e,n,r){var i=Pr();ke.flags|=t,i.memoizedState=fl(1|e,n,void 0,r===void 0?null:r)}function df(t,e,n,r){var i=ei();r=r===void 0?null:r;var s=void 0;if(Xe!==null){var o=Xe.memoizedState;if(s=o.destroy,r!==null&&uf(r,o.deps)){fl(e,n,s,r);return}}ke.flags|=t,i.memoizedState=fl(1|e,n,s,r)}function Um(t,e){return Cd(516,4,t,e)}function ml(t,e){return df(516,4,t,e)}function ey(t,e){return df(4,2,t,e)}function ty(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ny(t,e,n){return n=n!=null?n.concat([t]):null,df(4,2,ty.bind(null,e,t),n)}function hf(){}function ry(t,e){var n=ei();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&uf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function iy(t,e){var n=ei();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&uf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function hC(t,e){var n=$i();Ur(98>n?98:n,function(){t(!0)}),Ur(97<n?97:n,function(){var r=At.transition;At.transition=1;try{t(!1),e()}finally{At.transition=r}})}function ff(t,e,n){var r=Et(),i=Xn(t),s={lane:i,action:n,eagerReducer:null,eagerState:null,next:null},o=e.pending;if(o===null?s.next=s:(s.next=o.next,o.next=s),e.pending=s,o=t.alternate,t===ke||o!==null&&o===ke)Js=hl=!0;else{if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var a=e.lastRenderedState,l=o(a,n);if(s.eagerReducer=o,s.eagerState=l,kt(l,a))return}catch{}finally{}Zn(t,i,r)}}var gl={readContext:Ot,useCallback:lt,useContext:lt,useEffect:lt,useImperativeHandle:lt,useLayoutEffect:lt,useMemo:lt,useReducer:lt,useRef:lt,useState:lt,useDebugValue:lt,useDeferredValue:lt,useTransition:lt,useMutableSource:lt,useOpaqueIdentifier:lt,unstable_isNewReconciler:!1},fC={readContext:Ot,useCallback:function(t,e){return Pr().memoizedState=[t,e===void 0?null:e],t},useContext:Ot,useEffect:Um,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Cd(4,2,ty.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Cd(4,2,t,e)},useMemo:function(t,e){var n=Pr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Pr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t=r.queue={pending:null,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},t=t.dispatch=ff.bind(null,ke,t),[r.memoizedState,t]},useRef:Fm,useState:ks,useDebugValue:hf,useDeferredValue:function(t){var e=ks(t),n=e[0],r=e[1];return Um(function(){var i=At.transition;At.transition=1;try{r(t)}finally{At.transition=i}},[t]),n},useTransition:function(){var t=ks(!1),e=t[0];return t=hC.bind(null,t[1]),Fm(t),[t,e]},useMutableSource:function(t,e,n){var r=Pr();return r.memoizedState={refs:{getSnapshot:e,setSnapshot:null},source:t,subscribe:n},Xv(r,t,e,n)},useOpaqueIdentifier:function(){if(un){var t=!1,e=oC(function(){throw t||(t=!0,n("r:"+(Cc++).toString(36))),Error(O(355))}),n=ks(e)[1];return(ke.mode&2)===0&&(ke.flags|=516,fl(5,function(){n("r:"+(Cc++).toString(36))},void 0,null)),e}return e="r:"+(Cc++).toString(36),ks(e),e},unstable_isNewReconciler:!1},pC={readContext:Ot,useCallback:ry,useContext:Ot,useEffect:ml,useImperativeHandle:ny,useLayoutEffect:ey,useMemo:iy,useReducer:Ss,useRef:pl,useState:function(){return Ss(rn)},useDebugValue:hf,useDeferredValue:function(t){var e=Ss(rn),n=e[0],r=e[1];return ml(function(){var i=At.transition;At.transition=1;try{r(t)}finally{At.transition=i}},[t]),n},useTransition:function(){var t=Ss(rn)[0];return[pl().current,t]},useMutableSource:Zv,useOpaqueIdentifier:function(){return Ss(rn)[0]},unstable_isNewReconciler:!1},mC={readContext:Ot,useCallback:ry,useContext:Ot,useEffect:ml,useImperativeHandle:ny,useLayoutEffect:ey,useMemo:iy,useReducer:Ts,useRef:pl,useState:function(){return Ts(rn)},useDebugValue:hf,useDeferredValue:function(t){var e=Ts(rn),n=e[0],r=e[1];return ml(function(){var i=At.transition;At.transition=1;try{r(t)}finally{At.transition=i}},[t]),n},useTransition:function(){var t=Ts(rn)[0];return[pl().current,t]},useMutableSource:Zv,useOpaqueIdentifier:function(){return Ts(rn)[0]},unstable_isNewReconciler:!1},gC=Xr.ReactCurrentOwner,Vt=!1;function ut(t,e,n,r){e.child=t===null?Qv(e,null,n,r):cl(e,t.child,n,r)}function Wm(t,e,n,r,i){n=n.render;var s=e.ref;return Ni(e,i),r=cf(t,e,n,r,s,i),t!==null&&!Vt?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~i,In(t,e,i)):(e.flags|=1,ut(t,e,r,i),e.child)}function Bm(t,e,n,r,i,s){if(t===null){var o=n.type;return typeof o=="function"&&!yf(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,sy(t,e,o,r,i,s)):(t=za(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}return o=t.child,(i&s)===0&&(i=o.memoizedProps,n=n.compare,n=n!==null?n:go,n(i,r)&&t.ref===e.ref)?In(t,e,s):(e.flags|=1,t=cr(o,r),t.ref=e.ref,t.return=e,e.child=t)}function sy(t,e,n,r,i,s){if(t!==null&&go(t.memoizedProps,r)&&t.ref===e.ref)if(Vt=!1,(s&i)!==0)(t.flags&16384)!==0&&(Vt=!0);else return e.lanes=t.lanes,In(t,e,s);return Sd(t,e,n,r,s)}function Rc(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden"||r.mode==="unstable-defer-without-hiding")if((e.mode&4)===0)e.memoizedState={baseLanes:0},ka(e,n);else if((n&1073741824)!==0)e.memoizedState={baseLanes:0},ka(e,s!==null?s.baseLanes:n);else return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t},ka(e,t),null;else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ka(e,r);return ut(t,e,i,n),e.child}function oy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=128)}function Sd(t,e,n,r,i){var s=pt(n)?Fr:nt.current;return s=ji(e,s),Ni(e,i),n=cf(t,e,n,r,s,i),t!==null&&!Vt?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~i,In(t,e,i)):(e.flags|=1,ut(t,e,n,i),e.child)}function jm(t,e,n,r,i){if(pt(n)){var s=!0;Ua(e)}else s=!1;if(Ni(e,i),e.stateNode===null)t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),Kv(e,n,r),wd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ot(u):(u=pt(n)?Fr:nt.current,u=ji(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Om(e,o,r,u),Wn=!1;var h=e.memoizedState;o.state=h,yo(e,r,o,i),l=e.memoizedState,a!==r||h!==l||ft.current||Wn?(typeof c=="function"&&(ul(e,n,c,r),l=e.memoizedState),(a=Wn||bm(e,n,a,r,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4)):(typeof o.componentDidMount=="function"&&(e.flags|=4),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4),r=!1)}else{o=e.stateNode,Gv(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:$t(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ot(l):(l=pt(n)?Fr:nt.current,l=ji(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Om(e,o,r,l),Wn=!1,h=e.memoizedState,o.state=h,yo(e,r,o,i);var y=e.memoizedState;a!==d||h!==y||ft.current||Wn?(typeof g=="function"&&(ul(e,n,g,r),y=e.memoizedState),(u=Wn||bm(e,n,u,r,h,y,l))?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=256)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=256),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=256),r=!1)}return Td(t,e,n,r,s,i)}function Td(t,e,n,r,i,s){oy(t,e);var o=(e.flags&64)!==0;if(!r&&!o)return i&&km(e,n,!1),In(t,e,s);r=e.stateNode,gC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=cl(e,t.child,null,s),e.child=cl(e,null,a,s)):ut(t,e,a,s),e.memoizedState=r.state,i&&km(e,n,!0),e.child}function $m(t){var e=t.stateNode;e.pendingContext?Tm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Tm(t,e.context,!1),Ed(t,e.containerInfo)}var Ta={dehydrated:null,retryLane:0};function zm(t,e,n){var r=e.pendingProps,i=Ce.current,s=!1,o;return(o=(e.flags&64)!==0)||(o=t!==null&&t.memoizedState===null?!1:(i&2)!==0),o?(s=!0,e.flags&=-65):t!==null&&t.memoizedState===null||r.fallback===void 0||r.unstable_avoidThisFallback===!0||(i|=1),Se(Ce,i&1),t===null?(r.fallback!==void 0&&Id(e),t=r.children,i=r.fallback,s?(t=Vm(e,t,i,n),e.child.memoizedState={baseLanes:n},e.memoizedState=Ta,t):typeof r.unstable_expectedLoadTime=="number"?(t=Vm(e,t,i,n),e.child.memoizedState={baseLanes:n},e.memoizedState=Ta,e.lanes=33554432,t):(n=wf({mode:"visible",children:t},e.mode,n,null),n.return=e,e.child=n)):t.memoizedState!==null?s?(r=Gm(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},s.childLanes=t.childLanes&~n,e.memoizedState=Ta,r):(n=Hm(t,e,r.children,n),e.memoizedState=null,n):s?(r=Gm(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},s.childLanes=t.childLanes&~n,e.memoizedState=Ta,r):(n=Hm(t,e,r.children,n),e.memoizedState=null,n)}function Vm(t,e,n,r){var i=t.mode,s=t.child;return e={mode:"hidden",children:e},(i&2)===0&&s!==null?(s.childLanes=0,s.pendingProps=e):s=wf(e,i,0,null),n=xi(n,i,r,null),s.return=t,n.return=t,s.sibling=n,t.child=s,n}function Hm(t,e,n,r){var i=t.child;return t=i.sibling,n=cr(i,{mode:"visible",children:n}),(e.mode&2)===0&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(t.nextEffect=null,t.flags=8,e.firstEffect=e.lastEffect=t),e.child=n}function Gm(t,e,n,r,i){var s=e.mode,o=t.child;t=o.sibling;var a={mode:"hidden",children:n};return(s&2)===0&&e.child!==o?(n=e.child,n.childLanes=0,n.pendingProps=a,o=n.lastEffect,o!==null?(e.firstEffect=n.firstEffect,e.lastEffect=o,o.nextEffect=null):e.firstEffect=e.lastEffect=null):n=cr(o,a),t!==null?r=cr(t,r):(r=xi(r,s,i,null),r.flags|=2),r.return=e,n.return=e,n.sibling=r,e.child=n,r}function qm(t,e){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),Hv(t.return,e)}function Pc(t,e,n,r,i,s){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,lastEffect:s}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.lastEffect=s)}function Km(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ut(t,e,r.children,n),r=Ce.current,(r&2)!==0)r=r&1|2,e.flags|=64;else{if(t!==null&&(t.flags&64)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&qm(t,n);else if(t.tag===19)qm(t,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Se(Ce,r),(e.mode&2)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&dl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Pc(e,!1,i,n,s,e.lastEffect);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&dl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Pc(e,!0,n,null,s,e.lastEffect);break;case"together":Pc(e,!1,null,null,void 0,e.lastEffect);break;default:e.memoizedState=null}return e.child}function In(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Go|=e.lanes,(n&e.childLanes)!==0){if(t!==null&&e.child!==t.child)throw Error(O(153));if(e.child!==null){for(t=e.child,n=cr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=cr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}return null}var ay,kd,ly,uy;ay=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};kd=function(){};ly=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Rr(ln.current);var s=null;switch(n){case"input":i=Zc(t,i),r=Zc(t,r),s=[];break;case"option":i=nd(t,i),r=nd(t,r),s=[];break;case"select":i=ve({},i,{value:void 0}),r=ve({},r,{value:void 0}),s=[];break;case"textarea":i=rd(t,i),r=rd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=rl)}od(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(lo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(lo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&pe("scroll",t),s||a===l||(s=[])):typeof l=="object"&&l!==null&&l.$$typeof===Wh?l.toString():(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};uy=function(t,e,n,r){n!==r&&(e.flags|=4)};function Rs(t,e){if(!un)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function _C(t,e,n){var r=e.pendingProps;switch(e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return pt(e.type)&&sl(),null;case 3:return zi(),me(ft),me(nt),lf(),r=e.stateNode,r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Sa(e)?e.flags|=4:r.hydrate||(e.flags|=256)),kd(e),null;case 5:af(e);var i=Rr(Eo.current);if(n=e.type,t!==null&&e.stateNode!=null)ly(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=128);else{if(!r){if(e.stateNode===null)throw Error(O(166));return null}if(t=Rr(ln.current),Sa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[$n]=e,r[il]=s,n){case"dialog":pe("cancel",r),pe("close",r);break;case"iframe":case"object":case"embed":pe("load",r);break;case"video":case"audio":for(t=0;t<Ws.length;t++)pe(Ws[t],r);break;case"source":pe("error",r);break;case"img":case"image":case"link":pe("error",r),pe("load",r);break;case"details":pe("toggle",r);break;case"input":Kp(r,s),pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},pe("invalid",r);break;case"textarea":Qp(r,s),pe("invalid",r)}od(n,s),t=null;for(var o in s)s.hasOwnProperty(o)&&(i=s[o],o==="children"?typeof i=="string"?r.textContent!==i&&(t=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(t=["children",""+i]):lo.hasOwnProperty(o)&&i!=null&&o==="onScroll"&&pe("scroll",r));switch(n){case"input":va(r),Yp(r,s,!0);break;case"textarea":va(r),Jp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=rl)}r=t,e.updateQueue=r,r!==null&&(e.flags|=4)}else{switch(o=i.nodeType===9?i:i.ownerDocument,t===id.html&&(t=nv(n)),t===id.html?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[$n]=e,t[il]=r,ay(t,e,!1,!1),e.stateNode=t,o=ad(n,r),n){case"dialog":pe("cancel",t),pe("close",t),i=r;break;case"iframe":case"object":case"embed":pe("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ws.length;i++)pe(Ws[i],t);i=r;break;case"source":pe("error",t),i=r;break;case"img":case"image":case"link":pe("error",t),pe("load",t),i=r;break;case"details":pe("toggle",t),i=r;break;case"input":Kp(t,r),i=Zc(t,r),pe("invalid",t);break;case"option":i=nd(t,r);break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ve({},r,{value:void 0}),pe("invalid",t);break;case"textarea":Qp(t,r),i=rd(t,r),pe("invalid",t);break;default:i=r}od(n,i);var a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?sv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&rv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&uo(t,l):typeof l=="number"&&uo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(lo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&pe("scroll",t):l!=null&&xh(t,s,l,o))}switch(n){case"input":va(t),Yp(t,r,!1);break;case"textarea":va(t),Jp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+or(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ti(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ti(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=rl)}Mv(n,r)&&(e.flags|=4)}e.ref!==null&&(e.flags|=128)}return null;case 6:if(t&&e.stateNode!=null)uy(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(O(166));n=Rr(Eo.current),Rr(ln.current),Sa(e)?(r=e.stateNode,n=e.memoizedProps,r[$n]=e,r.nodeValue!==n&&(e.flags|=4)):(r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$n]=e,e.stateNode=r)}return null;case 13:return me(Ce),r=e.memoizedState,(e.flags&64)!==0?(e.lanes=n,e):(r=r!==null,n=!1,t===null?e.memoizedProps.fallback!==void 0&&Sa(e):n=t.memoizedState!==null,r&&!n&&(e.mode&2)!==0&&(t===null&&e.memoizedProps.unstable_avoidThisFallback!==!0||(Ce.current&1)!==0?qe===0&&(qe=3):((qe===0||qe===3)&&(qe=4),it===null||(Go&134217727)===0&&(rs&134217727)===0||bi(it,tt))),(r||n)&&(e.flags|=4),null);case 4:return zi(),kd(e),t===null&&xv(e.stateNode.containerInfo),null;case 10:return sf(e),null;case 17:return pt(e.type)&&sl(),null;case 19:if(me(Ce),r=e.memoizedState,r===null)return null;if(s=(e.flags&64)!==0,o=r.rendering,o===null)if(s)Rs(r,!1);else{if(qe!==0||t!==null&&(t.flags&64)!==0)for(t=e.child;t!==null;){if(o=dl(t),o!==null){for(e.flags|=64,Rs(r,!1),s=o.updateQueue,s!==null&&(e.updateQueue=s,e.flags|=4),r.lastEffect===null&&(e.firstEffect=null),e.lastEffect=r.lastEffect,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=2,s.nextEffect=null,s.firstEffect=null,s.lastEffect=null,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Se(Ce,Ce.current&1|2),e.child}t=t.sibling}r.tail!==null&&Ze()>Od&&(e.flags|=64,s=!0,Rs(r,!1),e.lanes=33554432)}else{if(!s)if(t=dl(o),t!==null){if(e.flags|=64,s=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Rs(r,!0),r.tail===null&&r.tailMode==="hidden"&&!o.alternate&&!un)return e=e.lastEffect=r.lastEffect,e!==null&&(e.nextEffect=null),null}else 2*Ze()-r.renderingStartTime>Od&&n!==1073741824&&(e.flags|=64,s=!0,Rs(r,!1),e.lanes=33554432);r.isBackwards?(o.sibling=e.child,e.child=o):(n=r.last,n!==null?n.sibling=o:e.child=o,r.last=o)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=e.lastEffect,r.renderingStartTime=Ze(),n.sibling=null,e=Ce.current,Se(Ce,s?e&1|2:e&1),n):null;case 23:case 24:return vf(),t!==null&&t.memoizedState!==null!=(e.memoizedState!==null)&&r.mode!=="unstable-defer-without-hiding"&&(e.flags|=4),null}throw Error(O(156,e.tag))}function vC(t){switch(t.tag){case 1:pt(t.type)&&sl();var e=t.flags;return e&4096?(t.flags=e&-4097|64,t):null;case 3:if(zi(),me(ft),me(nt),lf(),e=t.flags,(e&64)!==0)throw Error(O(285));return t.flags=e&-4097|64,t;case 5:return af(t),null;case 13:return me(Ce),e=t.flags,e&4096?(t.flags=e&-4097|64,t):null;case 19:return me(Ce),null;case 4:return zi(),null;case 10:return sf(t),null;case 23:case 24:return vf(),null;default:return null}}function pf(t,e){try{var n="",r=e;do n+=XE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i}}function Rd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var yC=typeof WeakMap=="function"?WeakMap:Map;function cy(t,e,n){n=Qn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){vl||(vl=!0,xd=r),Rd(t,e)},n}function dy(t,e,n){n=Qn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return Rd(t,e),r(i)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){typeof r!="function"&&(sn===null?sn=new Set([this]):sn.add(this),Rd(t,e));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}var wC=typeof WeakSet=="function"?WeakSet:Set;function Ym(t){var e=t.ref;if(e!==null)if(typeof e=="function")try{e(null)}catch(n){er(t,n)}else e.current=null}function EC(t,e){switch(e.tag){case 0:case 11:case 15:case 22:return;case 1:if(e.flags&256&&t!==null){var n=t.memoizedProps,r=t.memoizedState;t=e.stateNode,e=t.getSnapshotBeforeUpdate(e.elementType===e.type?n:$t(e.type,n),r),t.__reactInternalSnapshotBeforeUpdate=e}return;case 3:e.flags&256&&ef(e.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(O(163))}function IC(t,e,n){switch(n.tag){case 0:case 11:case 15:case 22:if(e=n.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{if((t.tag&3)===3){var r=t.create;t.destroy=r()}t=t.next}while(t!==e)}if(e=n.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{var i=t;r=i.next,i=i.tag,(i&4)!==0&&(i&1)!==0&&(wy(n,t),AC(n,t)),t=r}while(t!==e)}return;case 1:t=n.stateNode,n.flags&4&&(e===null?t.componentDidMount():(r=n.elementType===n.type?e.memoizedProps:$t(n.type,e.memoizedProps),t.componentDidUpdate(r,e.memoizedState,t.__reactInternalSnapshotBeforeUpdate))),e=n.updateQueue,e!==null&&Am(n,e,t);return;case 3:if(e=n.updateQueue,e!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Am(n,e,t)}return;case 5:t=n.stateNode,e===null&&n.flags&4&&Mv(n.type,n.memoizedProps)&&t.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&mv(n))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(O(163))}function Qm(t,e){for(var n=t;;){if(n.tag===5){var r=n.stateNode;if(e)r=r.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{r=n.stateNode;var i=n.memoizedProps.style;i=i!=null&&i.hasOwnProperty("display")?i.display:null,r.style.display=iv("display",i)}}else if(n.tag===6)n.stateNode.nodeValue=e?"":n.memoizedProps;else if((n.tag!==23&&n.tag!==24||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function Jm(t,e){if(Or&&typeof Or.onCommitFiberUnmount=="function")try{Or.onCommitFiberUnmount(tf,e)}catch{}switch(e.tag){case 0:case 11:case 14:case 15:case 22:if(t=e.updateQueue,t!==null&&(t=t.lastEffect,t!==null)){var n=t=t.next;do{var r=n,i=r.destroy;if(r=r.tag,i!==void 0)if((r&4)!==0)wy(e,n);else{r=e;try{i()}catch(s){er(r,s)}}n=n.next}while(n!==t)}break;case 1:if(Ym(e),t=e.stateNode,typeof t.componentWillUnmount=="function")try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(s){er(e,s)}break;case 5:Ym(e);break;case 4:hy(t,e)}}function Xm(t){t.alternate=null,t.child=null,t.dependencies=null,t.firstEffect=null,t.lastEffect=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.return=null,t.updateQueue=null}function Zm(t){return t.tag===5||t.tag===3||t.tag===4}function eg(t){e:{for(var e=t.return;e!==null;){if(Zm(e))break e;e=e.return}throw Error(O(160))}var n=e;switch(e=n.stateNode,n.tag){case 5:var r=!1;break;case 3:e=e.containerInfo,r=!0;break;case 4:e=e.containerInfo,r=!0;break;default:throw Error(O(161))}n.flags&16&&(uo(e,""),n.flags&=-17);e:t:for(n=t;;){for(;n.sibling===null;){if(n.return===null||Zm(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2)){n=n.stateNode;break e}}r?Pd(t,n,e):Nd(t,n,e)}function Pd(t,e,n){var r=t.tag,i=r===5||r===6;if(i)t=i?t.stateNode:t.stateNode.instance,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=rl));else if(r!==4&&(t=t.child,t!==null))for(Pd(t,e,n),t=t.sibling;t!==null;)Pd(t,e,n),t=t.sibling}function Nd(t,e,n){var r=t.tag,i=r===5||r===6;if(i)t=i?t.stateNode:t.stateNode.instance,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Nd(t,e,n),t=t.sibling;t!==null;)Nd(t,e,n),t=t.sibling}function hy(t,e){for(var n=e,r=!1,i,s;;){if(!r){r=n.return;e:for(;;){if(r===null)throw Error(O(160));switch(i=r.stateNode,r.tag){case 5:s=!1;break e;case 3:i=i.containerInfo,s=!0;break e;case 4:i=i.containerInfo,s=!0;break e}r=r.return}r=!0}if(n.tag===5||n.tag===6){e:for(var o=t,a=n,l=a;;)if(Jm(o,l),l.child!==null&&l.tag!==4)l.child.return=l,l=l.child;else{if(l===a)break e;for(;l.sibling===null;){if(l.return===null||l.return===a)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}s?(o=i,a=n.stateNode,o.nodeType===8?o.parentNode.removeChild(a):o.removeChild(a)):i.removeChild(n.stateNode)}else if(n.tag===4){if(n.child!==null){i=n.stateNode.containerInfo,s=!0,n.child.return=n,n=n.child;continue}}else if(Jm(t,n),n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return,n.tag===4&&(r=!1)}n.sibling.return=n.return,n=n.sibling}}function Nc(t,e){switch(e.tag){case 0:case 11:case 14:case 15:case 22:var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do(r.tag&3)===3&&(t=r.destroy,r.destroy=void 0,t!==void 0&&t()),r=r.next;while(r!==n)}return;case 1:return;case 5:if(n=e.stateNode,n!=null){r=e.memoizedProps;var i=t!==null?t.memoizedProps:r;t=e.type;var s=e.updateQueue;if(e.updateQueue=null,s!==null){for(n[il]=r,t==="input"&&r.type==="radio"&&r.name!=null&&ev(n,r),ad(t,i),e=ad(t,r),i=0;i<s.length;i+=2){var o=s[i],a=s[i+1];o==="style"?sv(n,a):o==="dangerouslySetInnerHTML"?rv(n,a):o==="children"?uo(n,a):xh(n,o,a,e)}switch(t){case"input":ed(n,r);break;case"textarea":tv(n,r);break;case"select":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,s=r.value,s!=null?Ti(n,!!r.multiple,s,!1):t!==!!r.multiple&&(r.defaultValue!=null?Ti(n,!!r.multiple,r.defaultValue,!0):Ti(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(e.stateNode===null)throw Error(O(162));e.stateNode.nodeValue=e.memoizedProps;return;case 3:n=e.stateNode,n.hydrate&&(n.hydrate=!1,mv(n.containerInfo));return;case 12:return;case 13:e.memoizedState!==null&&(_f=Ze(),Qm(e.child,!0)),tg(e);return;case 19:tg(e);return;case 17:return;case 23:case 24:Qm(e,e.memoizedState!==null);return}throw Error(O(163))}function tg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new wC),e.forEach(function(r){var i=xC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function CC(t,e){return t!==null&&(t=t.memoizedState,t===null||t.dehydrated!==null)?(e=e.memoizedState,e!==null&&e.dehydrated===null):!1}var SC=Math.ceil,_l=Xr.ReactCurrentDispatcher,mf=Xr.ReactCurrentOwner,z=0,it=null,Ae=null,tt=0,Wr=0,Ad=_r(0),qe=0,iu=null,ns=0,Go=0,rs=0,gf=0,bd=null,_f=0,Od=1/0;function is(){Od=Ze()+500}var U=null,vl=!1,xd=null,sn=null,ur=!1,Xs=null,Bs=90,Dd=[],Ld=[],kn=null,Zs=0,Md=null,Ba=-1,wn=0,ja=0,eo=null,$a=!1;function Et(){return(z&48)!==0?Ze():Ba!==-1?Ba:Ba=Ze()}function Xn(t){if(t=t.mode,(t&2)===0)return 1;if((t&4)===0)return $i()===99?1:2;if(wn===0&&(wn=ns),dC.transition!==0){ja!==0&&(ja=bd!==null?bd.pendingLanes:0),t=wn;var e=4186112&~ja;return e&=-e,e===0&&(t=4186112&~t,e=t&-t,e===0&&(e=8192)),e}return t=$i(),(z&4)!==0&&t===98?t=tl(12,wn):(t=pI(t),t=tl(t,wn)),t}function Zn(t,e,n){if(50<Zs)throw Zs=0,Md=null,Error(O(185));if(t=su(t,e),t===null)return null;Jl(t,e,n),t===it&&(rs|=e,qe===4&&bi(t,tt));var r=$i();e===1?(z&8)!==0&&(z&48)===0?Fd(t):(xt(t,n),z===0&&(is(),_n())):((z&4)===0||r!==98&&r!==99||(kn===null?kn=new Set([t]):kn.add(t)),xt(t,n)),bd=t}function su(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}function xt(t,e){for(var n=t.callbackNode,r=t.suspendedLanes,i=t.pingedLanes,s=t.expirationTimes,o=t.pendingLanes;0<o;){var a=31-ar(o),l=1<<a,u=s[a];if(u===-1){if((l&r)===0||(l&i)!==0){u=e,fi(l);var c=de;s[a]=10<=c?u+250:6<=c?u+5e3:-1}}else u<=e&&(t.expiredLanes|=l);o&=~l}if(r=po(t,t===it?tt:0),e=de,r===0)n!==null&&(n!==Sc&&vd(n),t.callbackNode=null,t.callbackPriority=0);else{if(n!==null){if(t.callbackPriority===e)return;n!==Sc&&vd(n)}e===15?(n=Fd.bind(null,t),yn===null?(yn=[n],Wa=nf(nu,Vv)):yn.push(n),n=Sc):e===14?n=vo(99,Fd.bind(null,t)):(n=mI(e),n=vo(n,fy.bind(null,t))),t.callbackPriority=e,t.callbackNode=n}}function fy(t){if(Ba=-1,ja=wn=0,(z&48)!==0)throw Error(O(327));var e=t.callbackNode;if(vr()&&t.callbackNode!==e)return null;var n=po(t,t===it?tt:0);if(n===0)return null;var r=n,i=z;z|=16;var s=_y();(it!==t||tt!==r)&&(is(),Oi(t,r));do try{RC();break}catch(a){gy(t,a)}while(1);if(rf(),_l.current=s,z=i,Ae!==null?r=0:(it=null,tt=0,r=qe),(ns&rs)!==0)Oi(t,0);else if(r!==0){if(r===2&&(z|=64,t.hydrate&&(t.hydrate=!1,ef(t.containerInfo)),n=Iv(t),n!==0&&(r=js(t,n))),r===1)throw e=iu,Oi(t,0),bi(t,n),xt(t,Ze()),e;switch(t.finishedWork=t.current.alternate,t.finishedLanes=n,r){case 0:case 1:throw Error(O(345));case 2:Er(t);break;case 3:if(bi(t,n),(n&62914560)===n&&(r=_f+500-Ze(),10<r)){if(po(t,0)!==0)break;if(i=t.suspendedLanes,(i&n)!==n){Et(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Im(Er.bind(null,t),r);break}Er(t);break;case 4:if(bi(t,n),(n&4186112)===n)break;for(r=t.eventTimes,i=-1;0<n;){var o=31-ar(n);s=1<<o,o=r[o],o>i&&(i=o),n&=~s}if(n=i,n=Ze()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*SC(n/1960))-n,10<n){t.timeoutHandle=Im(Er.bind(null,t),n);break}Er(t);break;case 5:Er(t);break;default:throw Error(O(329))}}return xt(t,Ze()),t.callbackNode===e?fy.bind(null,t):null}function bi(t,e){for(e&=~gf,e&=~rs,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ar(e),r=1<<n;t[n]=-1,e&=~r}}function Fd(t){if((z&48)!==0)throw Error(O(327));if(vr(),t===it&&(t.expiredLanes&tt)!==0){var e=tt,n=js(t,e);(ns&rs)!==0&&(e=po(t,e),n=js(t,e))}else e=po(t,0),n=js(t,e);if(t.tag!==0&&n===2&&(z|=64,t.hydrate&&(t.hydrate=!1,ef(t.containerInfo)),e=Iv(t),e!==0&&(n=js(t,e))),n===1)throw n=iu,Oi(t,0),bi(t,e),xt(t,Ze()),n;return t.finishedWork=t.current.alternate,t.finishedLanes=e,Er(t),xt(t,Ze()),null}function TC(){if(kn!==null){var t=kn;kn=null,t.forEach(function(e){e.expiredLanes|=24&e.pendingLanes,xt(e,Ze())})}_n()}function py(t,e){var n=z;z|=1;try{return t(e)}finally{z=n,z===0&&(is(),_n())}}function my(t,e){var n=z;z&=-2,z|=8;try{return t(e)}finally{z=n,z===0&&(is(),_n())}}function ka(t,e){Se(Ad,Wr),Wr|=e,ns|=e}function vf(){Wr=Ad.current,me(Ad)}function Oi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,sC(n)),Ae!==null)for(n=Ae.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&sl();break;case 3:zi(),me(ft),me(nt),lf();break;case 5:af(r);break;case 4:zi();break;case 13:me(Ce);break;case 19:me(Ce);break;case 10:sf(r);break;case 23:case 24:vf()}n=n.return}it=t,Ae=cr(t.current,null),tt=Wr=ns=e,qe=0,iu=null,gf=rs=Go=0}function gy(t,e){do{var n=Ae;try{if(rf(),Qs.current=gl,hl){for(var r=ke.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}hl=!1}if(Io=0,Ge=Xe=ke=null,Js=!1,mf.current=null,n===null||n.return===null){qe=1,iu=e,Ae=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=tt,a.flags|=2048,a.firstEffect=a.lastEffect=null,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l;if((a.mode&2)===0){var c=a.alternate;c?(a.updateQueue=c.updateQueue,a.memoizedState=c.memoizedState,a.lanes=c.lanes):(a.updateQueue=null,a.memoizedState=null)}var d=(Ce.current&1)!==0,h=o;do{var g;if(g=h.tag===13){var y=h.memoizedState;if(y!==null)g=y.dehydrated!==null;else{var w=h.memoizedProps;g=w.fallback===void 0?!1:w.unstable_avoidThisFallback!==!0?!0:!d}}if(g){var m=h.updateQueue;if(m===null){var f=new Set;f.add(u),h.updateQueue=f}else m.add(u);if((h.mode&2)===0){if(h.flags|=64,a.flags|=16384,a.flags&=-2981,a.tag===1)if(a.alternate===null)a.tag=17;else{var p=Qn(-1,1);p.tag=2,Jn(a,p)}a.lanes|=1;break e}l=void 0,a=e;var _=s.pingCache;if(_===null?(_=s.pingCache=new yC,l=new Set,_.set(u,l)):(l=_.get(u),l===void 0&&(l=new Set,_.set(u,l))),!l.has(a)){l.add(a);var v=OC.bind(null,s,u,a);u.then(v,v)}h.flags|=4096,h.lanes=e;break e}h=h.return}while(h!==null);l=Error((Si(a.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}qe!==5&&(qe=2),l=pf(l,a),h=o;do{switch(h.tag){case 3:s=l,h.flags|=4096,e&=-e,h.lanes|=e;var I=cy(h,s,e);Nm(h,I);break e;case 1:s=l;var T=h.type,k=h.stateNode;if((h.flags&64)===0&&(typeof T.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(sn===null||!sn.has(k)))){h.flags|=4096,e&=-e,h.lanes|=e;var P=dy(h,s,e);Nm(h,P);break e}}h=h.return}while(h!==null)}yy(n)}catch(C){e=C,Ae===n&&n!==null&&(Ae=n=n.return);continue}break}while(1)}function _y(){var t=_l.current;return _l.current=gl,t===null?gl:t}function js(t,e){var n=z;z|=16;var r=_y();it===t&&tt===e||Oi(t,e);do try{kC();break}catch(i){gy(t,i)}while(1);if(rf(),z=n,_l.current=r,Ae!==null)throw Error(O(261));return it=null,tt=0,qe}function kC(){for(;Ae!==null;)vy(Ae)}function RC(){for(;Ae!==null&&!lC();)vy(Ae)}function vy(t){var e=Ey(t.alternate,t,Wr);t.memoizedProps=t.pendingProps,e===null?yy(t):Ae=e,mf.current=null}function yy(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&2048)===0){if(n=_C(n,e,Wr),n!==null){Ae=n;return}if(n=e,n.tag!==24&&n.tag!==23||n.memoizedState===null||(Wr&1073741824)!==0||(n.mode&4)===0){for(var r=0,i=n.child;i!==null;)r|=i.lanes|i.childLanes,i=i.sibling;n.childLanes=r}t!==null&&(t.flags&2048)===0&&(t.firstEffect===null&&(t.firstEffect=e.firstEffect),e.lastEffect!==null&&(t.lastEffect!==null&&(t.lastEffect.nextEffect=e.firstEffect),t.lastEffect=e.lastEffect),1<e.flags&&(t.lastEffect!==null?t.lastEffect.nextEffect=e:t.firstEffect=e,t.lastEffect=e))}else{if(n=vC(e),n!==null){n.flags&=2047,Ae=n;return}t!==null&&(t.firstEffect=t.lastEffect=null,t.flags|=2048)}if(e=e.sibling,e!==null){Ae=e;return}Ae=e=t}while(e!==null);qe===0&&(qe=5)}function Er(t){var e=$i();return Ur(99,PC.bind(null,t,e)),null}function PC(t,e){do vr();while(Xs!==null);if((z&48)!==0)throw Error(O(327));var n=t.finishedWork;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(O(177));t.callbackNode=null;var r=n.lanes|n.childLanes,i=r,s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;for(var o=t.eventTimes,a=t.expirationTimes;0<s;){var l=31-ar(s),u=1<<l;i[l]=0,o[l]=-1,a[l]=-1,s&=~u}if(kn!==null&&(r&24)===0&&kn.has(t)&&kn.delete(t),t===it&&(Ae=it=null,tt=0),1<n.flags?n.lastEffect!==null?(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n:r=n.firstEffect,r!==null){if(i=z,z|=32,mf.current=null,Ec=La,o=mm(),fd(o)){if("selectionStart"in o)a={start:o.selectionStart,end:o.selectionEnd};else e:if(a=(a=o.ownerDocument)&&a.defaultView||window,(u=a.getSelection&&a.getSelection())&&u.rangeCount!==0){a=u.anchorNode,s=u.anchorOffset,l=u.focusNode,u=u.focusOffset;try{a.nodeType,l.nodeType}catch{a=null;break e}var c=0,d=-1,h=-1,g=0,y=0,w=o,m=null;t:for(;;){for(var f;w!==a||s!==0&&w.nodeType!==3||(d=c+s),w!==l||u!==0&&w.nodeType!==3||(h=c+u),w.nodeType===3&&(c+=w.nodeValue.length),(f=w.firstChild)!==null;)m=w,w=f;for(;;){if(w===o)break t;if(m===a&&++g===s&&(d=c),m===l&&++y===u&&(h=c),(f=w.nextSibling)!==null)break;w=m,m=w.parentNode}w=f}a=d===-1||h===-1?null:{start:d,end:h}}else a=null;a=a||{start:0,end:0}}else a=null;Ic={focusedElem:o,selectionRange:a},La=!1,eo=null,$a=!1,U=r;do try{NC()}catch(C){if(U===null)throw Error(O(330));er(U,C),U=U.nextEffect}while(U!==null);eo=null,U=r;do try{for(o=t;U!==null;){var p=U.flags;if(p&16&&uo(U.stateNode,""),p&128){var _=U.alternate;if(_!==null){var v=_.ref;v!==null&&(typeof v=="function"?v(null):v.current=null)}}switch(p&1038){case 2:eg(U),U.flags&=-3;break;case 6:eg(U),U.flags&=-3,Nc(U.alternate,U);break;case 1024:U.flags&=-1025;break;case 1028:U.flags&=-1025,Nc(U.alternate,U);break;case 4:Nc(U.alternate,U);break;case 8:a=U,hy(o,a);var I=a.alternate;Xm(a),I!==null&&Xm(I)}U=U.nextEffect}}catch(C){if(U===null)throw Error(O(330));er(U,C),U=U.nextEffect}while(U!==null);if(v=Ic,_=mm(),p=v.focusedElem,o=v.selectionRange,_!==p&&p&&p.ownerDocument&&Av(p.ownerDocument.documentElement,p)){for(o!==null&&fd(p)&&(_=o.start,v=o.end,v===void 0&&(v=_),"selectionStart"in p?(p.selectionStart=_,p.selectionEnd=Math.min(v,p.value.length)):(v=(_=p.ownerDocument||document)&&_.defaultView||window,v.getSelection&&(v=v.getSelection(),a=p.textContent.length,I=Math.min(o.start,a),o=o.end===void 0?I:Math.min(o.end,a),!v.extend&&I>o&&(a=o,o=I,I=a),a=pm(p,I),s=pm(p,o),a&&s&&(v.rangeCount!==1||v.anchorNode!==a.node||v.anchorOffset!==a.offset||v.focusNode!==s.node||v.focusOffset!==s.offset)&&(_=_.createRange(),_.setStart(a.node,a.offset),v.removeAllRanges(),I>o?(v.addRange(_),v.extend(s.node,s.offset)):(_.setEnd(s.node,s.offset),v.addRange(_)))))),_=[],v=p;v=v.parentNode;)v.nodeType===1&&_.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof p.focus=="function"&&p.focus(),p=0;p<_.length;p++)v=_[p],v.element.scrollLeft=v.left,v.element.scrollTop=v.top}La=!!Ec,Ic=Ec=null,t.current=n,U=r;do try{for(p=t;U!==null;){var T=U.flags;if(T&36&&IC(p,U.alternate,U),T&128){_=void 0;var k=U.ref;if(k!==null){var P=U.stateNode;switch(U.tag){case 5:_=P;break;default:_=P}typeof k=="function"?k(_):k.current=_}}U=U.nextEffect}}catch(C){if(U===null)throw Error(O(330));er(U,C),U=U.nextEffect}while(U!==null);U=null,cC(),z=i}else t.current=n;if(ur)ur=!1,Xs=t,Bs=e;else for(U=r;U!==null;)e=U.nextEffect,U.nextEffect=null,U.flags&8&&(T=U,T.sibling=null,T.stateNode=null),U=e;if(r=t.pendingLanes,r===0&&(sn=null),r===1?t===Md?Zs++:(Zs=0,Md=t):Zs=0,n=n.stateNode,Or&&typeof Or.onCommitFiberRoot=="function")try{Or.onCommitFiberRoot(tf,n,void 0,(n.current.flags&64)===64)}catch{}if(xt(t,Ze()),vl)throw vl=!1,t=xd,xd=null,t;return(z&8)!==0||_n(),null}function NC(){for(;U!==null;){var t=U.alternate;$a||eo===null||((U.flags&8)!==0?em(U,eo)&&($a=!0):U.tag===13&&CC(t,U)&&em(U,eo)&&($a=!0));var e=U.flags;(e&256)!==0&&EC(t,U),(e&512)===0||ur||(ur=!0,vo(97,function(){return vr(),null})),U=U.nextEffect}}function vr(){if(Bs!==90){var t=97<Bs?97:Bs;return Bs=90,Ur(t,bC)}return!1}function AC(t,e){Dd.push(e,t),ur||(ur=!0,vo(97,function(){return vr(),null}))}function wy(t,e){Ld.push(e,t),ur||(ur=!0,vo(97,function(){return vr(),null}))}function bC(){if(Xs===null)return!1;var t=Xs;if(Xs=null,(z&48)!==0)throw Error(O(331));var e=z;z|=32;var n=Ld;Ld=[];for(var r=0;r<n.length;r+=2){var i=n[r],s=n[r+1],o=i.destroy;if(i.destroy=void 0,typeof o=="function")try{o()}catch(l){if(s===null)throw Error(O(330));er(s,l)}}for(n=Dd,Dd=[],r=0;r<n.length;r+=2){i=n[r],s=n[r+1];try{var a=i.create;i.destroy=a()}catch(l){if(s===null)throw Error(O(330));er(s,l)}}for(a=t.current.firstEffect;a!==null;)t=a.nextEffect,a.nextEffect=null,a.flags&8&&(a.sibling=null,a.stateNode=null),a=t;return z=e,_n(),!0}function ng(t,e,n){e=pf(n,e),e=cy(t,e,1),Jn(t,e),e=Et(),t=su(t,1),t!==null&&(Jl(t,1,e),xt(t,e))}function er(t,e){if(t.tag===3)ng(t,t,e);else for(var n=t.return;n!==null;){if(n.tag===3){ng(n,t,e);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(sn===null||!sn.has(r))){t=pf(e,t);var i=dy(n,t,1);if(Jn(n,i),i=Et(),n=su(n,1),n!==null)Jl(n,1,i),xt(n,i);else if(typeof r.componentDidCatch=="function"&&(sn===null||!sn.has(r)))try{r.componentDidCatch(e,t)}catch{}break}}n=n.return}}function OC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Et(),t.pingedLanes|=t.suspendedLanes&n,it===t&&(tt&n)===n&&(qe===4||qe===3&&(tt&62914560)===tt&&500>Ze()-_f?Oi(t,0):gf|=n),xt(t,e)}function xC(t,e){var n=t.stateNode;n!==null&&n.delete(e),e=0,e===0&&(e=t.mode,(e&2)===0?e=1:(e&4)===0?e=$i()===99?1:2:(wn===0&&(wn=ns),e=pi(62914560&~wn),e===0&&(e=4194304))),n=Et(),t=su(t,e),t!==null&&(Jl(t,e,n),xt(t,n))}var Ey;Ey=function(t,e,n){var r=e.lanes;if(t!==null)if(t.memoizedProps!==e.pendingProps||ft.current)Vt=!0;else if((n&r)!==0)Vt=(t.flags&16384)!==0;else{switch(Vt=!1,e.tag){case 3:$m(e),kc();break;case 5:xm(e);break;case 1:pt(e.type)&&Ua(e);break;case 4:Ed(e,e.stateNode.containerInfo);break;case 10:r=e.memoizedProps.value;var i=e.type._context;Se(ol,i._currentValue),i._currentValue=r;break;case 13:if(e.memoizedState!==null)return(n&e.child.childLanes)!==0?zm(t,e,n):(Se(Ce,Ce.current&1),e=In(t,e,n),e!==null?e.sibling:null);Se(Ce,Ce.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&64)!==0){if(r)return Km(t,e,n);e.flags|=64}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Se(Ce,Ce.current),r)break;return null;case 23:case 24:return e.lanes=0,Rc(t,e,n)}return In(t,e,n)}else Vt=!1;switch(e.lanes=0,e.tag){case 2:if(r=e.type,t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,i=ji(e,nt.current),Ni(e,n),i=cf(null,e,r,t,i,n),e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0){if(e.tag=1,e.memoizedState=null,e.updateQueue=null,pt(r)){var s=!0;Ua(e)}else s=!1;e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,of(e);var o=r.getDerivedStateFromProps;typeof o=="function"&&ul(e,r,o,t),i.updater=ru,e.stateNode=i,i._reactInternals=e,wd(e,r,t,n),e=Td(null,e,r,!0,s,n)}else e.tag=0,ut(null,e,i,n),e=e.child;return e;case 16:i=e.elementType;e:{switch(t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,s=i._init,i=s(i._payload),e.type=i,s=e.tag=LC(i),t=$t(i,t),s){case 0:e=Sd(null,e,i,t,n);break e;case 1:e=jm(null,e,i,t,n);break e;case 11:e=Wm(null,e,i,t,n);break e;case 14:e=Bm(null,e,i,$t(i.type,t),r,n);break e}throw Error(O(306,i,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:$t(r,i),Sd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:$t(r,i),jm(t,e,r,i,n);case 3:if($m(e),r=e.updateQueue,t===null||r===null)throw Error(O(282));if(r=e.pendingProps,i=e.memoizedState,i=i!==null?i.element:null,Gv(t,e),yo(e,r,null,n),r=e.memoizedState.element,r===i)kc(),e=In(t,e,n);else{if(i=e.stateNode,(s=i.hydrate)&&(zn=Pi(e.stateNode.containerInfo.firstChild),En=e,s=un=!0),s){if(t=i.mutableSourceEagerHydrationData,t!=null)for(i=0;i<t.length;i+=2)s=t[i],s._workInProgressVersionPrimary=t[i+1],Ai.push(s);for(n=Qv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|1024,n=n.sibling}else ut(t,e,r,n),kc();e=e.child}return e;case 5:return xm(e),t===null&&Id(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,gd(r,i)?o=null:s!==null&&gd(r,s)&&(e.flags|=16),oy(t,e),ut(t,e,o,n),e.child;case 6:return t===null&&Id(e),null;case 13:return zm(t,e,n);case 4:return Ed(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=cl(e,null,r,n):ut(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:$t(r,i),Wm(t,e,r,i,n);case 7:return ut(t,e,e.pendingProps,n),e.child;case 8:return ut(t,e,e.pendingProps.children,n),e.child;case 12:return ut(t,e,e.pendingProps.children,n),e.child;case 10:e:{r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value;var a=e.type._context;if(Se(ol,a._currentValue),a._currentValue=s,o!==null)if(a=o.value,s=kt(a,s)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(a,s):1073741823)|0,s===0){if(o.children===i.children&&!ft.current){e=In(t,e,n);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var u=l.firstContext;u!==null;){if(u.context===r&&(u.observedBits&s)!==0){a.tag===1&&(u=Qn(-1,n&-n),u.tag=2,Jn(a,u)),a.lanes|=n,u=a.alternate,u!==null&&(u.lanes|=n),Hv(a.return,n),l.lanes|=n;break}u=u.next}}else o=a.tag===10&&a.type===e.type?null:a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}ut(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,s=e.pendingProps,r=s.children,Ni(e,n),i=Ot(i,s.unstable_observedBits),r=r(i),e.flags|=1,ut(t,e,r,n),e.child;case 14:return i=e.type,s=$t(i,e.pendingProps),s=$t(i.type,s),Bm(t,e,i,s,r,n);case 15:return sy(t,e,e.type,e.pendingProps,r,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:$t(r,i),t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),e.tag=1,pt(r)?(t=!0,Ua(e)):t=!1,Ni(e,n),Kv(e,r,i),wd(e,r,i,n),Td(null,e,r,!0,t,n);case 19:return Km(t,e,n);case 23:return Rc(t,e,n);case 24:return Rc(t,e,n)}throw Error(O(156,e.tag))};function DC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function Rt(t,e,n,r){return new DC(t,e,n,r)}function yf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function LC(t){if(typeof t=="function")return yf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Kl)return 11;if(t===Yl)return 14}return 2}function cr(t,e){var n=t.alternate;return n===null?(n=Rt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function za(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")yf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Bn:return xi(n.children,i,s,e);case J_:o=8,i|=16;break;case Dh:o=8,i|=1;break;case zs:return t=Rt(12,n,e,i|8),t.elementType=zs,t.type=zs,t.lanes=s,t;case Vs:return t=Rt(13,n,e,i),t.type=Vs,t.elementType=Vs,t.lanes=s,t;case Ja:return t=Rt(19,n,e,i),t.elementType=Ja,t.lanes=s,t;case Bh:return wf(n,i,s,e);case Xc:return t=Rt(24,n,e,i),t.elementType=Xc,t.lanes=s,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Lh:o=10;break e;case Mh:o=9;break e;case Kl:o=11;break e;case Yl:o=14;break e;case Fh:o=16,r=null;break e;case Uh:o=22;break e}throw Error(O(130,t==null?t:typeof t,""))}return e=Rt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function xi(t,e,n,r){return t=Rt(7,t,r,e),t.lanes=n,t}function wf(t,e,n,r){return t=Rt(23,t,r,e),t.elementType=Bh,t.lanes=n,t}function Ac(t,e,n){return t=Rt(6,t,null,e),t.lanes=n,t}function bc(t,e,n){return e=Rt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function MC(t,e,n){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=pc(0),this.expirationTimes=pc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pc(0),this.mutableSourceEagerHydrationData=null}function FC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Sr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function yl(t,e,n,r){var i=e.current,s=Et(),o=Xn(i);e:if(n){n=n._reactInternals;t:{if(Zr(n)!==n||n.tag!==1)throw Error(O(170));var a=n;do{switch(a.tag){case 3:a=a.stateNode.context;break t;case 1:if(pt(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break t}}a=a.return}while(a!==null);throw Error(O(171))}if(n.tag===1){var l=n.type;if(pt(l)){n=Uv(n,l,a);break e}}n=a}else n=lr;return e.context===null?e.context=n:e.pendingContext=n,e=Qn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),Jn(i,e),Zn(i,o,s),o}function Oc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function rg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ef(t,e){rg(t,e),(t=t.alternate)&&rg(t,e)}function UC(){return null}function If(t,e,n){var r=n!=null&&n.hydrationOptions!=null&&n.hydrationOptions.mutableSources||null;if(n=new MC(t,e,n!=null&&n.hydrate===!0),e=Rt(3,null,null,e===2?7:e===1?3:0),n.current=e,e.stateNode=n,of(e),t[ts]=n.current,xv(t.nodeType===8?t.parentNode:t),r)for(t=0;t<r.length;t++){e=r[t];var i=e._getVersion;i=i(e._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[e,i]:n.mutableSourceEagerHydrationData.push(e,i)}this._internalRoot=n}If.prototype.render=function(t){yl(t,this._internalRoot,null,null)};If.prototype.unmount=function(){var t=this._internalRoot,e=t.containerInfo;yl(null,t,null,function(){e[ts]=null})};function qo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function WC(t,e){if(e||(e=t?t.nodeType===9?t.documentElement:t.firstChild:null,e=!(!e||e.nodeType!==1||!e.hasAttribute("data-reactroot"))),!e)for(var n;n=t.lastChild;)t.removeChild(n);return new If(t,0,e?{hydrate:!0}:void 0)}function ou(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s._internalRoot;if(typeof i=="function"){var a=i;i=function(){var u=Oc(o);a.call(u)}}yl(e,o,t,i)}else{if(s=n._reactRootContainer=WC(n,r),o=s._internalRoot,typeof i=="function"){var l=i;i=function(){var u=Oc(o);l.call(u)}}my(function(){yl(e,o,t,i)})}return Oc(o)}hv=function(t){if(t.tag===13){var e=Et();Zn(t,4,e),Ef(t,4)}};Hh=function(t){if(t.tag===13){var e=Et();Zn(t,67108864,e),Ef(t,67108864)}};fv=function(t){if(t.tag===13){var e=Et(),n=Xn(t);Zn(t,n,e),Ef(t,n)}};pv=function(t,e){return e()};ld=function(t,e,n){switch(e){case"input":if(ed(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=tu(r);if(!i)throw Error(O(90));Z_(r),ed(r,i)}}}break;case"textarea":tv(t,n);break;case"select":e=n.value,e!=null&&Ti(t,!!n.multiple,e,!1)}};$h=py;lv=function(t,e,n,r,i){var s=z;z|=4;try{return Ur(98,t.bind(null,e,n,r,i))}finally{z=s,z===0&&(is(),_n())}};zh=function(){(z&49)===0&&(TC(),vr())};uv=function(t,e){var n=z;z|=2;try{return t(e)}finally{z=n,z===0&&(is(),_n())}};function Iy(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qo(e))throw Error(O(200));return FC(t,e,null,n)}var BC={Events:[Vo,vi,tu,ov,av,vr,{current:!1}]},Ps={findFiberByHostInstance:kr,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},jC={bundleType:Ps.bundleType,version:Ps.version,rendererPackageName:Ps.rendererPackageName,rendererConfig:Ps.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=dv(t),t===null?null:t.stateNode},findFiberByHostInstance:Ps.findFiberByHostInstance||UC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Ra=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ra.isDisabled&&Ra.supportsFiber)try{tf=Ra.inject(jC),Or=Ra}catch{}}Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=BC;Mt.createPortal=Iy;Mt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(O(188)):Error(O(268,Object.keys(t)));return t=dv(e),t=t===null?null:t.stateNode,t};Mt.flushSync=function(t,e){var n=z;if((n&48)!==0)return t(e);z|=1;try{if(t)return Ur(99,t.bind(null,e))}finally{z=n,_n()}};Mt.hydrate=function(t,e,n){if(!qo(e))throw Error(O(200));return ou(null,t,e,!0,n)};Mt.render=function(t,e,n){if(!qo(e))throw Error(O(200));return ou(null,t,e,!1,n)};Mt.unmountComponentAtNode=function(t){if(!qo(t))throw Error(O(40));return t._reactRootContainer?(my(function(){ou(null,null,t,!1,function(){t._reactRootContainer=null,t[ts]=null})}),!0):!1};Mt.unstable_batchedUpdates=py;Mt.unstable_createPortal=function(t,e){return Iy(t,e,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};Mt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!qo(n))throw Error(O(200));if(t==null||t._reactInternals===void 0)throw Error(O(38));return ou(t,e,n,!1,r)};Mt.version="17.0.2";function Cy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cy)}catch(t){console.error(t)}}Cy(),Ah.exports=Mt;var Kx=Ah.exports;function wl(){return wl=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},wl.apply(this,arguments)}var Nr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Nr||(Nr={}));var ig=function(t){return t},sg="beforeunload",$C="popstate";function zC(t){t===void 0&&(t={});var e=t,n=e.window,r=n===void 0?document.defaultView:n,i=r.history;function s(){var k=r.location,P=k.pathname,C=k.search,M=k.hash,q=i.state||{};return[q.idx,ig({pathname:P,search:C,hash:M,state:q.usr||null,key:q.key||"default"})]}var o=null;function a(){if(o)g.call(o),o=null;else{var k=Nr.Pop,P=s(),C=P[0],M=P[1];if(g.length){if(C!=null){var q=c-C;q&&(o={action:k,location:M,retry:function(){I(q*-1)}},I(q))}}else p(k)}}r.addEventListener($C,a);var l=Nr.Pop,u=s(),c=u[0],d=u[1],h=ag(),g=ag();c==null&&(c=0,i.replaceState(wl({},i.state,{idx:c}),""));function y(k){return typeof k=="string"?k:Ud(k)}function w(k,P){return P===void 0&&(P=null),ig(wl({pathname:d.pathname,hash:"",search:""},typeof k=="string"?ti(k):k,{state:P,key:VC()}))}function m(k,P){return[{usr:k.state,key:k.key,idx:P},y(k)]}function f(k,P,C){return!g.length||(g.call({action:k,location:P,retry:C}),!1)}function p(k){l=k;var P=s();c=P[0],d=P[1],h.call({action:l,location:d})}function _(k,P){var C=Nr.Push,M=w(k,P);function q(){_(k,P)}if(f(C,M,q)){var j=m(M,c+1),H=j[0],le=j[1];try{i.pushState(H,"",le)}catch{r.location.assign(le)}p(C)}}function v(k,P){var C=Nr.Replace,M=w(k,P);function q(){v(k,P)}if(f(C,M,q)){var j=m(M,c),H=j[0],le=j[1];i.replaceState(H,"",le),p(C)}}function I(k){i.go(k)}var T={get action(){return l},get location(){return d},createHref:y,push:_,replace:v,go:I,back:function(){I(-1)},forward:function(){I(1)},listen:function(P){return h.push(P)},block:function(P){var C=g.push(P);return g.length===1&&r.addEventListener(sg,og),function(){C(),g.length||r.removeEventListener(sg,og)}}};return T}function og(t){t.preventDefault(),t.returnValue=""}function ag(){var t=[];return{get length(){return t.length},push:function(n){return t.push(n),function(){t=t.filter(function(r){return r!==n})}},call:function(n){t.forEach(function(r){return r&&r(n)})}}}function VC(){return Math.random().toString(36).substr(2,8)}function Ud(t){var e=t.pathname,n=e===void 0?"/":e,r=t.search,i=r===void 0?"":r,s=t.hash,o=s===void 0?"":s;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function ti(t){var e={};if(t){var n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));var r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}/**
 * React Router v6.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hn(t,e){if(!t)throw new Error(e)}const Cf=N.exports.createContext(null),Sf=N.exports.createContext(null),Ko=N.exports.createContext({outlet:null,matches:[]});function HC(t){hn(!1)}function GC(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Nr.Pop,navigator:s,static:o=!1}=t;Yo()&&hn(!1);let a=Py(e),l=N.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=ti(r));let{pathname:u="/",search:c="",hash:d="",state:h=null,key:g="default"}=r,y=N.exports.useMemo(()=>{let w=Ry(u,a);return w==null?null:{pathname:w,search:c,hash:d,state:h,key:g}},[a,u,c,d,h,g]);return y==null?null:N.exports.createElement(Cf.Provider,{value:l},N.exports.createElement(Sf.Provider,{children:n,value:{location:y,navigationType:i}}))}function Yx(t){let{children:e,location:n}=t;return YC(Wd(e),n)}function qC(t){Yo()||hn(!1);let{basename:e,navigator:n}=N.exports.useContext(Cf),{hash:r,pathname:i,search:s}=Sy(t),o=i;if(e!=="/"){let a=fS(t),l=a!=null&&a.endsWith("/");o=i==="/"?e+(l?"/":""):tr([e,i])}return n.createHref({pathname:o,search:s,hash:r})}function Yo(){return N.exports.useContext(Sf)!=null}function au(){return Yo()||hn(!1),N.exports.useContext(Sf).location}function KC(){Yo()||hn(!1);let{basename:t,navigator:e}=N.exports.useContext(Cf),{matches:n}=N.exports.useContext(Ko),{pathname:r}=au(),i=JSON.stringify(n.map(a=>a.pathnameBase)),s=N.exports.useRef(!1);return N.exports.useEffect(()=>{s.current=!0}),N.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=ky(a,JSON.parse(i),r);t!=="/"&&(u.pathname=tr([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state)},[t,e,i,r])}function Qx(){let{matches:t}=N.exports.useContext(Ko),e=t[t.length-1];return e?e.params:{}}function Sy(t){let{matches:e}=N.exports.useContext(Ko),{pathname:n}=au(),r=JSON.stringify(e.map(i=>i.pathnameBase));return N.exports.useMemo(()=>ky(t,JSON.parse(r),n),[t,r,n])}function YC(t,e){Yo()||hn(!1);let{matches:n}=N.exports.useContext(Ko),r=n[n.length-1],i=r?r.params:{};r&&r.pathname;let s=r?r.pathnameBase:"/";r&&r.route;let o=au(),a;if(e){var l;let h=typeof e=="string"?ti(e):e;s==="/"||((l=h.pathname)==null?void 0:l.startsWith(s))||hn(!1),a=h}else a=o;let u=a.pathname||"/",c=s==="/"?u:u.slice(s.length)||"/",d=QC(t,{pathname:c});return aS(d&&d.map(h=>Object.assign({},h,{params:Object.assign({},i,h.params),pathname:tr([s,h.pathname]),pathnameBase:h.pathnameBase==="/"?s:tr([s,h.pathnameBase])})),n)}function Wd(t){let e=[];return N.exports.Children.forEach(t,n=>{if(!N.exports.isValidElement(n))return;if(n.type===N.exports.Fragment){e.push.apply(e,Wd(n.props.children));return}n.type!==HC&&hn(!1);let r={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(r.children=Wd(n.props.children)),e.push(r)}),e}function QC(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?ti(e):e,i=Ry(r.pathname||"/",n);if(i==null)return null;let s=Ty(t);JC(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=oS(s[a],i);return o}function Ty(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(o.relativePath.startsWith(r)||hn(!1),o.relativePath=o.relativePath.slice(r.length));let a=tr([r,o.relativePath]),l=n.concat(o);i.children&&i.children.length>0&&(i.index===!0&&hn(!1),Ty(i.children,e,l,a)),!(i.path==null&&!i.index)&&e.push({path:a,score:iS(a,i.index),routesMeta:l})}),e}function JC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:sS(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const XC=/^:\w+$/,ZC=3,eS=2,tS=1,nS=10,rS=-2,lg=t=>t==="*";function iS(t,e){let n=t.split("/"),r=n.length;return n.some(lg)&&(r+=rS),e&&(r+=eS),n.filter(i=>!lg(i)).reduce((i,s)=>i+(XC.test(s)?ZC:s===""?tS:nS),r)}function sS(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function oS(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=lS({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:tr([i,c.pathname]),pathnameBase:Py(tr([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=tr([i,c.pathnameBase]))}return s}function aS(t,e){return e===void 0&&(e=[]),t==null?null:t.reduceRight((n,r,i)=>N.exports.createElement(Ko.Provider,{children:r.route.element!==void 0?r.route.element:n,value:{outlet:n,matches:e.concat(t.slice(0,i+1))}}),null)}function lS(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=uS(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let h=a[d]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=cS(a[d]||""),u},{}),pathname:s,pathnameBase:o,pattern:t}}function uS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(r.push(a),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(i,e?void 0:"i"),r]}function cS(t,e){try{return decodeURIComponent(t)}catch{return t}}function dS(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ti(t):t;return{pathname:n?n.startsWith("/")?n:hS(n,e):e,search:pS(r),hash:mS(i)}}function hS(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ky(t,e,n){let r=typeof t=="string"?ti(t):t,i=t===""||r.pathname===""?"/":r.pathname,s;if(i==null)s=n;else{let a=e.length-1;if(i.startsWith("..")){let l=i.split("/");for(;l[0]==="..";)l.shift(),a-=1;r.pathname=l.join("/")}s=a>=0?e[a]:"/"}let o=dS(r,s);return i&&i!=="/"&&i.endsWith("/")&&!o.pathname.endsWith("/")&&(o.pathname+="/"),o}function fS(t){return t===""||t.pathname===""?"/":typeof t=="string"?ti(t).pathname:t.pathname}function Ry(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=t.charAt(e.length);return n&&n!=="/"?null:t.slice(e.length)||"/"}const tr=t=>t.join("/").replace(/\/\/+/g,"/"),Py=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),pS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,mS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;/**
 * React Router DOM v6.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bd(){return Bd=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Bd.apply(this,arguments)}function gS(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const _S=["onClick","reloadDocument","replace","state","target","to"];function Jx(t){let{basename:e,children:n,window:r}=t,i=N.exports.useRef();i.current==null&&(i.current=zC({window:r}));let s=i.current,[o,a]=N.exports.useState({action:s.action,location:s.location});return N.exports.useLayoutEffect(()=>s.listen(a),[s]),N.exports.createElement(GC,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}function vS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}const Xx=N.exports.forwardRef(function(e,n){let{onClick:r,reloadDocument:i,replace:s=!1,state:o,target:a,to:l}=e,u=gS(e,_S),c=qC(l),d=yS(l,{replace:s,state:o,target:a});function h(g){r&&r(g),!g.defaultPrevented&&!i&&d(g)}return N.exports.createElement("a",Bd({},u,{href:c,onClick:h,ref:n,target:a}))});function yS(t,e){let{target:n,replace:r,state:i}=e===void 0?{}:e,s=KC(),o=au(),a=Sy(t);return N.exports.useCallback(l=>{if(l.button===0&&(!n||n==="_self")&&!vS(l)){l.preventDefault();let u=!!r||Ud(o)===Ud(a);s(t,{replace:u,state:i})}},[o,s,a,r,i,n,t])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ny={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=function(t,e){if(!t)throw ss(e)},ss=function(t){return new Error("Firebase Database ("+Ny.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},wS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Tf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(h=64)),r.push(n[c],n[d],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ay(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):wS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw Error();const h=s<<2|a>>4;if(r.push(h),u!==64){const g=a<<4&240|u>>2;if(r.push(g),d!==64){const y=u<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},lu=function(t){const e=Ay(t);return Tf.encodeByteArray(e,!0)},ug=function(t){return lu(t).replace(/\./g,"")},jd=function(t){try{return Tf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ES(t){return Co(void 0,t)}function Co(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!IS(n)||(t[n]=Co(t[n],e[n]));return t}function IS(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ug(JSON.stringify(n)),ug(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kf(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function by(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function SS(){return typeof self=="object"&&self.self===self}function Oy(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function uu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xy(){const t=Re();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Dy(){return Ny.NODE_ADMIN===!0}function El(){return typeof indexedDB=="object"}function TS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS="FirebaseError";class bt extends Error{constructor(e,n,r){super(n);this.code=e,this.customData=r,this.name=kS,Object.setPrototypeOf(this,bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ni.prototype.create)}}class ni{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?RS(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new bt(i,a,r)}}function RS(t,e){return t.replace(PS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const PS=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(t){return JSON.parse(t)}function Ne(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=So(jd(s[0])||""),n=So(jd(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},NS=function(t){const e=Ly(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},AS=function(t){const e=Ly(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Br(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Il(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Cl(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function $d(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(cg(s)&&cg(o)){if(!$d(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function cg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ei(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function $s(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):d<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const h=(i<<5|i>>>27)+u+l+c+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function My(t,e){const n=new OS(t,e);return n.subscribe.bind(n)}class OS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");xS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=xc),i.error===void 0&&(i.error=xc),i.complete===void 0&&(i.complete=xc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function xc(){}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B=function(t,e,n,r){let i;if(r<e?i="at least "+e:r>n&&(i=n===0?"none":"no more than "+n),i){const s=t+" failed: Was called with "+r+(r===1?" argument.":" arguments.")+" Expects "+i+".";throw new Error(s)}};function mt(t,e){return`${t} failed: ${e} argument `}function De(t,e,n,r){if(!(r&&!n)&&typeof n!="function")throw new Error(mt(t,e)+"must be a valid function.")}function dg(t,e,n,r){if(!(r&&!n)&&(typeof n!="object"||n===null))throw new Error(mt(t,e)+"must be a valid context object.")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,b(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},cu=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t){return t&&t._delegate?t._delegate:t}class Yt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new dt;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(MS(e))try{this.getOrInitializeService({instanceIdentifier:Ir})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ir){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ir){return this.instances.has(e)}getOptions(e=Ir){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:LS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ir){return this.component?this.component.multipleInstances?e:Ir:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function LS(t){return t===Ir?void 0:t}function MS(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Fy(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf=[];var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const Wy={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},FS=ue.INFO,US={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},WS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=US[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qo{constructor(e){this.name=e,this._logLevel=FS,this._logHandler=WS,this._userLogHandler=null,Rf.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Wy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}function BS(t){Rf.forEach(e=>{e.setLogLevel(t)})}function jS(t,e){for(const n of Rf){let r=null;e&&e.level&&(r=Wy[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r!=null?r:i.logLevel)&&t({level:ue[s].toLowerCase(),message:a,args:o,type:i.name})}}}function $S(t){return Array.prototype.slice.call(t)}function By(t){return new Promise(function(e,n){t.onsuccess=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function Pf(t,e,n){var r,i=new Promise(function(s,o){r=t[e].apply(t,n),By(r).then(s,o)});return i.request=r,i}function zS(t,e,n){var r=Pf(t,e,n);return r.then(function(i){if(!!i)return new To(i,r.request)})}function os(t,e,n){n.forEach(function(r){Object.defineProperty(t.prototype,r,{get:function(){return this[e][r]},set:function(i){this[e][r]=i}})})}function Nf(t,e,n,r){r.forEach(function(i){i in n.prototype&&(t.prototype[i]=function(){return Pf(this[e],i,arguments)})})}function du(t,e,n,r){r.forEach(function(i){i in n.prototype&&(t.prototype[i]=function(){return this[e][i].apply(this[e],arguments)})})}function jy(t,e,n,r){r.forEach(function(i){i in n.prototype&&(t.prototype[i]=function(){return zS(this[e],i,arguments)})})}function ii(t){this._index=t}os(ii,"_index",["name","keyPath","multiEntry","unique"]);Nf(ii,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]);jy(ii,"_index",IDBIndex,["openCursor","openKeyCursor"]);function To(t,e){this._cursor=t,this._request=e}os(To,"_cursor",["direction","key","primaryKey","value"]);Nf(To,"_cursor",IDBCursor,["update","delete"]);["advance","continue","continuePrimaryKey"].forEach(function(t){t in IDBCursor.prototype&&(To.prototype[t]=function(){var e=this,n=arguments;return Promise.resolve().then(function(){return e._cursor[t].apply(e._cursor,n),By(e._request).then(function(r){if(!!r)return new To(r,e._request)})})})});function vn(t){this._store=t}vn.prototype.createIndex=function(){return new ii(this._store.createIndex.apply(this._store,arguments))};vn.prototype.index=function(){return new ii(this._store.index.apply(this._store,arguments))};os(vn,"_store",["name","keyPath","indexNames","autoIncrement"]);Nf(vn,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]);jy(vn,"_store",IDBObjectStore,["openCursor","openKeyCursor"]);du(vn,"_store",IDBObjectStore,["deleteIndex"]);function Jo(t){this._tx=t,this.complete=new Promise(function(e,n){t.oncomplete=function(){e()},t.onerror=function(){n(t.error)},t.onabort=function(){n(t.error)}})}Jo.prototype.objectStore=function(){return new vn(this._tx.objectStore.apply(this._tx,arguments))};os(Jo,"_tx",["objectStoreNames","mode"]);du(Jo,"_tx",IDBTransaction,["abort"]);function hu(t,e,n){this._db=t,this.oldVersion=e,this.transaction=new Jo(n)}hu.prototype.createObjectStore=function(){return new vn(this._db.createObjectStore.apply(this._db,arguments))};os(hu,"_db",["name","version","objectStoreNames"]);du(hu,"_db",IDBDatabase,["deleteObjectStore","close"]);function fu(t){this._db=t}fu.prototype.transaction=function(){return new Jo(this._db.transaction.apply(this._db,arguments))};os(fu,"_db",["name","version","objectStoreNames"]);du(fu,"_db",IDBDatabase,["close"]);["openCursor","openKeyCursor"].forEach(function(t){[vn,ii].forEach(function(e){t in e.prototype&&(e.prototype[t.replace("open","iterate")]=function(){var n=$S(arguments),r=n[n.length-1],i=this._store||this._index,s=i[t].apply(i,n.slice(0,-1));s.onsuccess=function(){r(s.result)}})})});[ii,vn].forEach(function(t){t.prototype.getAll||(t.prototype.getAll=function(e,n){var r=this,i=[];return new Promise(function(s){r.iterateCursor(e,function(o){if(!o){s(i);return}if(i.push(o.value),n!==void 0&&i.length==n){s(i);return}o.continue()})})})});function VS(t,e,n){var r=Pf(indexedDB,"open",[t,e]),i=r.request;return i&&(i.onupgradeneeded=function(s){n&&n(new hu(i.result,s.oldVersion,i.transaction))}),r.then(function(s){return new fu(s)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(GS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function GS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const zd="@firebase/app",hg="0.7.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Af=new Qo("@firebase/app"),qS="@firebase/app-compat",KS="@firebase/analytics-compat",YS="@firebase/analytics",QS="@firebase/app-check-compat",JS="@firebase/app-check",XS="@firebase/auth",ZS="@firebase/auth-compat",eT="@firebase/database",tT="@firebase/database-compat",nT="@firebase/functions",rT="@firebase/functions-compat",iT="@firebase/installations",sT="@firebase/installations-compat",oT="@firebase/messaging",aT="@firebase/messaging-compat",lT="@firebase/performance",uT="@firebase/performance-compat",cT="@firebase/remote-config",dT="@firebase/remote-config-compat",hT="@firebase/storage",fT="@firebase/storage-compat",pT="@firebase/firestore",mT="@firebase/firestore-compat",gT="firebase",_T="9.6.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr="[DEFAULT]",vT={[zd]:"fire-core",[qS]:"fire-core-compat",[YS]:"fire-analytics",[KS]:"fire-analytics-compat",[JS]:"fire-app-check",[QS]:"fire-app-check-compat",[XS]:"fire-auth",[ZS]:"fire-auth-compat",[eT]:"fire-rtdb",[tT]:"fire-rtdb-compat",[nT]:"fire-fn",[rT]:"fire-fn-compat",[iT]:"fire-iid",[sT]:"fire-iid-compat",[oT]:"fire-fcm",[aT]:"fire-fcm-compat",[lT]:"fire-perf",[uT]:"fire-perf-compat",[cT]:"fire-rc",[dT]:"fire-rc-compat",[hT]:"fire-gcs",[fT]:"fire-gcs-compat",[pT]:"fire-fst",[mT]:"fire-fst-compat","fire-js":"fire-js",[gT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=new Map,ko=new Map;function Sl(t,e){try{t.container.addComponent(e)}catch(n){Af.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $y(t,e){t.container.addOrOverwriteComponent(e)}function hr(t){const e=t.name;if(ko.has(e))return Af.debug(`There were multiple attempts to register component ${e}.`),!1;ko.set(e,t);for(const n of dr.values())Sl(n,t);return!0}function zy(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function yT(t,e,n=jr){zy(t,e).clearInstance(n)}function wT(){ko.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ET={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},An=new ni("app","Firebase",ET);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Yt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw An.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si=_T;function Vy(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:jr,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw An.create("bad-app-name",{appName:String(r)});const i=dr.get(r);if(i){if($d(t,i.options)&&$d(n,i.config))return i;throw An.create("duplicate-app",{appName:r})}const s=new Uy(r);for(const a of ko.values())s.addComponent(a);const o=new IT(t,n,s);return dr.set(r,o),o}function CT(t=jr){const e=dr.get(t);if(!e)throw An.create("no-app",{appName:t});return e}function ST(){return Array.from(dr.values())}async function Hy(t){const e=t.name;dr.has(e)&&(dr.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function cn(t,e,n){var r;let i=(r=vT[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Af.warn(a.join(" "));return}hr(new Yt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Gy(t,e){if(t!==null&&typeof t!="function")throw An.create("invalid-log-argument");jS(t,e)}function qy(t){BS(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT="firebase-heartbeat-database",kT=1,$r="firebase-heartbeat-store";let Dc=null;function bf(){return Dc||(Dc=VS(TT,kT,t=>{switch(t.oldVersion){case 0:t.createObjectStore($r)}}).catch(t=>{throw An.create("storage-open",{originalErrorMessage:t.message})})),Dc}async function RT(t){try{return(await bf()).transaction($r).objectStore($r).get(Of(t))}catch(e){throw An.create("storage-get",{originalErrorMessage:e.message})}}async function Lc(t,e){try{const r=(await bf()).transaction($r,"readwrite");return await r.objectStore($r).put(e,Of(t)),r.complete}catch(n){throw An.create("storage-set",{originalErrorMessage:n.message})}}async function PT(t){try{const n=(await bf()).transaction($r,"readwrite");return await n.objectStore($r).delete(Of(t)),n.complete}catch(e){throw An.create("storage-delete",{originalErrorMessage:e.message})}}function Of(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT=1024,AT=30*24*60*60*1e3;class bT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new DT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=OT();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!this._heartbeatsCache.some(i=>i.date===r))return this._heartbeatsCache.push({date:r,userAgent:n}),this._heartbeatsCache=this._heartbeatsCache.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=AT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null)return"";const{heartbeatsToSend:e,unsentEntries:n}=xT(this._heartbeatsCache),r=lu(JSON.stringify({version:2,heartbeats:e}));return n.length>0?(this._heartbeatsCache=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache=null,this._storage.deleteAll()),r}}function OT(){return new Date().toISOString().substring(0,10)}function xT(t,e=NT){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.userAgent===i.userAgent);if(s){if(s.dates.push(i.date),fg(n)>e){s.dates.pop();break}}else if(n.push({userAgent:i.userAgent,dates:[i.date]}),fg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class DT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return El()?TS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await RT(this.app);return(n==null?void 0:n.heartbeats)||[]}else return[]}async overwrite(e){if(await this._canUseIndexedDBPromise)return Lc(this.app,{heartbeats:e})}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Lc(this.app,{heartbeats:[...r,...e]})}else return}async delete(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Lc(this.app,{heartbeats:r.filter(i=>!e.includes(i))})}else return}async deleteAll(){if(await this._canUseIndexedDBPromise)return PT(this.app)}}function fg(t){return lu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LT(t){hr(new Yt("platform-logger",e=>new HS(e),"PRIVATE")),hr(new Yt("heartbeat",e=>new bT(e),"PRIVATE")),cn(zd,hg,t),cn(zd,hg,"esm2017"),cn("fire-js","")}LT("");var MT=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:si,_DEFAULT_ENTRY_NAME:jr,_addComponent:Sl,_addOrOverwriteComponent:$y,_apps:dr,_clearComponents:wT,_components:ko,_getProvider:zy,_registerComponent:hr,_removeServiceInstance:yT,deleteApp:Hy,getApp:CT,getApps:ST,initializeApp:Vy,onLog:Gy,registerVersion:cn,setLogLevel:qy,FirebaseError:bt},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(e,n){this._delegate=e,this.firebase=n,Sl(e,new Yt("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Hy(this._delegate)))}_getService(e,n=jr){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=jr){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Sl(this._delegate,e)}_addOrOverwriteComponent(e){$y(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},pg=new ni("app-compat","Firebase",UT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WT(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:cn,setLogLevel:qy,onLog:Gy,apps:null,SDK_VERSION:si,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:MT}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||jr,!It(e,u))throw pg.create("no-app",{appName:u});return e[u]}i.App=t;function s(u,c={}){const d=Vy(u,c);if(It(e,d.name))return e[d.name];const h=new t(d,n);return e[d.name]=h,h}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const c=u.name,d=c.replace("-compat","");if(hr(u)&&u.type==="PUBLIC"){const h=(g=i())=>{if(typeof g[d]!="function")throw pg.create("invalid-app-argument",{appName:c});return g[d]()};u.serviceProps!==void 0&&Co(h,u.serviceProps),n[d]=h,t.prototype[d]=function(...g){return this._getService.bind(this,c).apply(this,u.multipleInstances?g:[])}}return u.type==="PUBLIC"?n[d]:null}function l(u,c){return c==="serverAuth"?null:c}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ky(){const t=WT(FT);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:Ky,extendNamespace:e,createSubscribe:My,ErrorFactory:ni,deepExtend:Co});function e(n){Co(t,n)}return t}const BT=Ky();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg=new Qo("@firebase/app-compat"),jT="@firebase/app-compat",$T="0.1.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zT(t){cn(jT,$T,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(SS()&&self.firebase!==void 0){mg.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&mg.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Xo=BT;zT();var VT="firebase",HT="9.6.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xo.registerVersion(VT,HT,"app-compat");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function xf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const Ns={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},di={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GT(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function Yy(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qT=GT,KT=Yy,Qy=new ni("auth","Firebase",Yy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg=new Qo("@firebase/auth");function Va(t,...e){gg.logLevel<=ue.ERROR&&gg.error(`Auth (${si}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(t,...e){throw Df(t,...e)}function Ke(t,...e){return Df(t,...e)}function Jy(t,e,n){const r=Object.assign(Object.assign({},KT()),{[e]:n});return new ni("auth","Firebase",r).create(e,{appName:t.name})}function as(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Qe(t,"argument-error"),Jy(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Df(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Qy.create(t,...e)}function A(t,e,...n){if(!t)throw Df(e,...n)}function on(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Va(e),new Error(e)}function Qt(t,e){t||on(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g=new Map;function yt(t){Qt(t instanceof Function,"Expected a class definition");let e=_g.get(t);return e?(Qt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,_g.set(t,e),e)}function YT(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(yt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Lf(){return vg()==="http:"||vg()==="https:"}function vg(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QT(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Lf()||Oy()||"connection"in navigator)?navigator.onLine:!0}function JT(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Qt(n>e,"Short delay should be less than long delay!"),this.isMobile=kf()||uu()}get(){return QT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mf(t,e){Qt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;on("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;on("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;on("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZT=new Zo(3e4,6e4);function be(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Be(t,e,n,r,i={}){return Zy(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ri(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Xy.fetch()(e0(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Zy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},XT),e);try{const i=new e1(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ha(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ha(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ha(t,"email-already-in-use",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Jy(t,c,u);Qe(t,c)}}catch(i){if(i instanceof bt)throw i;Qe(t,"network-request-failed")}}async function Dn(t,e,n,r,i={}){const s=await Be(t,e,n,r,i);return"mfaPendingCredential"in s&&Qe(t,"multi-factor-auth-required",{_serverResponse:s}),s}function e0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Mf(t.config,i):`${t.config.apiScheme}://${i}`}class e1{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ke(this.auth,"network-request-failed")),ZT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ha(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ke(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t1(t,e){return Be(t,"POST","/v1/accounts:delete",e)}async function n1(t,e){return Be(t,"POST","/v1/accounts:update",e)}async function r1(t,e){return Be(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function i1(t,e=!1){const n=$(t),r=await n.getIdToken(e),i=pu(r);A(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:to(Mc(i.auth_time)),issuedAtTime:to(Mc(i.iat)),expirationTime:to(Mc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Mc(t){return Number(t)*1e3}function pu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Va("JWT malformed, contained fewer than 3 sections"),null;try{const i=jd(n);return i?JSON.parse(i):(Va("Failed to decode base64 JWT payload"),null)}catch(i){return Va("Caught error parsing JWT payload as JSON",i),null}}function s1(t){const e=pu(t);return A(e,"internal-error"),A(typeof e.exp!="undefined","internal-error"),A(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof bt&&o1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function o1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=to(this.lastLoginAt),this.creationTime=to(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Po(t){var e;const n=t.auth,r=await t.getIdToken(),i=await bn(t,r1(n,{idToken:r}));A(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?c1(s.providerUserInfo):[],a=u1(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new t0(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function l1(t){const e=$(t);await Po(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function u1(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function c1(t){return t.map(e=>{var{providerId:n}=e,r=xf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d1(t,e){const n=await Zy(t,{},async()=>{const r=ri({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=e0(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Xy.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){A(e.idToken,"internal-error"),A(typeof e.idToken!="undefined","internal-error"),A(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):s1(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return A(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await d1(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new No;return r&&(A(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(A(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(A(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new No,this.toJSON())}_performRefresh(){return on("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(t,e){A(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class xr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=xf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new a1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new t0(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await bn(this,this.stsTokenManager.getToken(this.auth,e));return A(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return i1(this,e)}reload(){return l1(this)}_assign(e){this!==e&&(A(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new xr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Po(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await bn(this,t1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,m=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,f=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:_,emailVerified:v,isAnonymous:I,providerData:T,stsTokenManager:k}=n;A(_&&k,e,"internal-error");const P=No.fromJSON(this.name,k);A(typeof _=="string",e,"internal-error"),Un(d,e.name),Un(h,e.name),A(typeof v=="boolean",e,"internal-error"),A(typeof I=="boolean",e,"internal-error"),Un(g,e.name),Un(y,e.name),Un(w,e.name),Un(m,e.name),Un(f,e.name),Un(p,e.name);const C=new xr({uid:_,auth:e,email:h,emailVerified:v,displayName:d,isAnonymous:I,photoURL:y,phoneNumber:g,tenantId:w,stsTokenManager:P,createdAt:f,lastLoginAt:p});return T&&Array.isArray(T)&&(C.providerData=T.map(M=>Object.assign({},M))),m&&(C._redirectEventId=m),C}static async _fromIdTokenResponse(e,n,r=!1){const i=new No;i.updateFromServerResponse(n);const s=new xr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Po(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}n0.type="NONE";const Vi=n0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(t,e,n){return`firebase:${t}:${e}:${n}`}class Di{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Dr(this.userKey,i.apiKey,s),this.fullPersistenceKey=Dr("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?xr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Di(yt(Vi),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||yt(Vi);const o=Dr(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=xr._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Di(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Di(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(s0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(r0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(o0(e))return"Blackberry";if(a0(e))return"Webos";if(Ff(e))return"Safari";if((e.includes("chrome/")||i0(e))&&!e.includes("edge/"))return"Chrome";if(ea(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function r0(t=Re()){return/firefox\//i.test(t)}function Ff(t=Re()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function i0(t=Re()){return/crios\//i.test(t)}function s0(t=Re()){return/iemobile/i.test(t)}function ea(t=Re()){return/android/i.test(t)}function o0(t=Re()){return/blackberry/i.test(t)}function a0(t=Re()){return/webos/i.test(t)}function ls(t=Re()){return/iphone|ipad|ipod/i.test(t)}function h1(t=Re()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function f1(t=Re()){var e;return ls(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function p1(){return xy()&&document.documentMode===10}function l0(t=Re()){return ls(t)||ea(t)||a0(t)||o0(t)||/windows phone/i.test(t)||s0(t)}function m1(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u0(t,e=[]){let n;switch(t){case"Browser":n=yg(Re());break;case"Worker":n=`${yg(Re())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${si}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wg(this),this.idTokenSubscription=new wg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qy,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Di.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Po(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=JT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?$(e):null;return n&&A(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&A(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(yt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ni("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yt(e)||this._popupRedirectResolver;A(n,this,"argument-error"),this.redirectPersistenceManager=await Di.create(this,[yt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return A(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=u0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function Ue(t){return $(t)}class wg{constructor(e){this.auth=e,this.observer=null,this.addObserver=My(n=>this.observer=n)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function _1(t,e,n){const r=Ue(t);A(r._canInitEmulator,r,"emulator-config-failed"),A(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=c0(e),{host:o,port:a}=v1(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||y1()}function c0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function v1(t){const e=c0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Eg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Eg(o)}}}function Eg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function y1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return on("not implemented")}_getIdTokenResponse(e){return on("not implemented")}_linkToIdToken(e,n){return on("not implemented")}_getReauthenticationResolver(e){return on("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d0(t,e){return Be(t,"POST","/v1/accounts:resetPassword",be(t,e))}async function h0(t,e){return Be(t,"POST","/v1/accounts:update",e)}async function w1(t,e){return Be(t,"POST","/v1/accounts:update",be(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E1(t,e){return Dn(t,"POST","/v1/accounts:signInWithPassword",be(t,e))}async function mu(t,e){return Be(t,"POST","/v1/accounts:sendOobCode",be(t,e))}async function I1(t,e){return mu(t,e)}async function C1(t,e){return mu(t,e)}async function S1(t,e){return mu(t,e)}async function T1(t,e){return mu(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k1(t,e){return Dn(t,"POST","/v1/accounts:signInWithEmailLink",be(t,e))}async function R1(t,e){return Dn(t,"POST","/v1/accounts:signInWithEmailLink",be(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao extends us{constructor(e,n,r,i=null){super("password",r);this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ao(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ao(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return E1(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return k1(e,{email:this._email,oobCode:this._password});default:Qe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return h0(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return R1(e,{idToken:n,email:this._email,oobCode:this._password});default:Qe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rn(t,e){return Dn(t,"POST","/v1/accounts:signInWithIdp",be(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P1="http://localhost";class fn extends us{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new fn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Qe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=xf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new fn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Rn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Rn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Rn(e,n)}buildRequest(){const e={requestUri:P1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ri(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N1(t,e){return Be(t,"POST","/v1/accounts:sendVerificationCode",be(t,e))}async function A1(t,e){return Dn(t,"POST","/v1/accounts:signInWithPhoneNumber",be(t,e))}async function b1(t,e){const n=await Dn(t,"POST","/v1/accounts:signInWithPhoneNumber",be(t,e));if(n.temporaryProof)throw Ha(t,"account-exists-with-different-credential",n);return n}const O1={USER_NOT_FOUND:"user-not-found"};async function x1(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Dn(t,"POST","/v1/accounts:signInWithPhoneNumber",be(t,n),O1)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr extends us{constructor(e){super("phone","phone");this.params=e}static _fromVerification(e,n){return new Lr({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Lr({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return A1(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return b1(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return x1(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Lr({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D1(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function L1(t){const e=Ei($s(t)).link,n=e?Ei($s(e)).deep_link_id:null,r=Ei($s(t)).deep_link_id;return(r?Ei($s(r)).link:null)||r||n||e||t}class gu{constructor(e){var n,r,i,s,o,a;const l=Ei($s(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=D1((i=l.mode)!==null&&i!==void 0?i:null);A(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=L1(e);try{return new gu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(){this.providerId=yr.PROVIDER_ID}static credential(e,n){return Ao._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=gu.parseLink(n);return A(r,"argument-error"),Ao._fromEmailAndCode(e,r.code,r.tenantId)}}yr.PROVIDER_ID="password";yr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";yr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs extends Ln{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Li extends cs{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return A("providerId"in n&&"signInMethod"in n,"argument-error"),fn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return A(e.idToken||e.accessToken,"argument-error"),fn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Li.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Li.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new Li(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends cs{constructor(){super("facebook.com")}static credential(e){return fn._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xt.credential(e.oauthAccessToken)}catch{return null}}}Xt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends cs{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return fn._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Zt.credential(n,r)}catch{return null}}}Zt.GOOGLE_SIGN_IN_METHOD="google.com";Zt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends cs{constructor(){super("github.com")}static credential(e){return fn._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return en.credential(e.oauthAccessToken)}catch{return null}}}en.GITHUB_SIGN_IN_METHOD="github.com";en.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M1="http://localhost";class Hi extends us{constructor(e,n){super(e,e);this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Rn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Rn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Rn(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new Hi(r,s)}static _create(e,n){return new Hi(e,n)}buildRequest(){return{requestUri:M1,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F1="saml.";class Tl extends Ln{constructor(e){A(e.startsWith(F1),"argument-error");super(e)}static credentialFromResult(e){return Tl.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Tl.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=Hi.fromJSON(e);return A(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return Hi._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends cs{constructor(){super("twitter.com")}static credential(e,n){return fn._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return tn.credential(n,r)}catch{return null}}}tn.TWITTER_SIGN_IN_METHOD="twitter.com";tn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f0(t,e){return Dn(t,"POST","/v1/accounts:signUp",be(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await xr._fromIdTokenResponse(e,r,i),o=Ig(r);return new Dt({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Ig(r);return new Dt({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Ig(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U1(t){var e;const n=Ue(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Dt({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await f0(n,{returnSecureToken:!0}),i=await Dt._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl extends bt{constructor(e,n,r,i){var s;super(n.code,n.message);this.operationType=r,this.user=i,Object.setPrototypeOf(this,kl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new kl(e,n,r,i)}}function p0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?kl._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m0(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W1(t,e){const n=$(t);await _u(!0,n,e);const{providerUserInfo:r}=await n1(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=m0(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Uf(t,e,n=!1){const r=await bn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Dt._forOperation(t,"link",r)}async function _u(t,e,n){await Po(e);const r=m0(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";A(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g0(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await bn(t,p0(r,i,e,t),n);A(s.idToken,r,"internal-error");const o=pu(s.idToken);A(o,r,"internal-error");const{sub:a}=o;return A(t.uid===a,r,"user-mismatch"),Dt._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Qe(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _0(t,e,n=!1){const r="signIn",i=await p0(t,r,e),s=await Dt._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function vu(t,e){return _0(Ue(t),e)}async function v0(t,e){const n=$(t);return await _u(!1,n,e.providerId),Uf(n,e)}async function y0(t,e){return g0($(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B1(t,e){return Dn(t,"POST","/v1/accounts:signInWithCustomToken",be(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j1(t,e){const n=Ue(t),r=await B1(n,{token:e,returnSecureToken:!0}),i=await Dt._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Wf._fromServerResponse(e,n):Qe(e,"internal-error")}}class Wf extends yu{constructor(e){super("phone",e);this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Wf(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(t,e,n){var r;A(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),A(typeof n.dynamicLinkDomain=="undefined"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(A(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(A(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $1(t,e,n){const r=$(t),i={requestType:"PASSWORD_RESET",email:e};n&&wu(r,i,n),await C1(r,i)}async function z1(t,e,n){await d0($(t),{oobCode:e,newPassword:n})}async function V1(t,e){await w1($(t),{oobCode:e})}async function w0(t,e){const n=$(t),r=await d0(n,{oobCode:e}),i=r.requestType;switch(A(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":A(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":A(r.mfaInfo,n,"internal-error");default:A(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=yu._fromServerResponse(Ue(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function H1(t,e){const{data:n}=await w0($(t),e);return n.email}async function G1(t,e,n){const r=Ue(t),i=await f0(r,{returnSecureToken:!0,email:e,password:n}),s=await Dt._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function q1(t,e,n){return vu($(t),yr.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K1(t,e,n){const r=$(t),i={requestType:"EMAIL_SIGNIN",email:e};A(n.handleCodeInApp,r,"argument-error"),n&&wu(r,i,n),await S1(r,i)}function Y1(t,e){const n=gu.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function Q1(t,e,n){const r=$(t),i=yr.credentialWithLink(e,n||Ro());return A(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),vu(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J1(t,e){return Be(t,"POST","/v1/accounts:createAuthUri",be(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X1(t,e){const n=Lf()?Ro():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await J1($(t),r);return i||[]}async function Z1(t,e){const n=$(t),r=await t.getIdToken(),i={requestType:"VERIFY_EMAIL",idToken:r};e&&wu(n.auth,i,e);const{email:s}=await I1(n.auth,i);s!==t.email&&await t.reload()}async function ek(t,e,n){const r=$(t),i=await t.getIdToken(),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:i,newEmail:e};n&&wu(r.auth,s,n);const{email:o}=await T1(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tk(t,e){return Be(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nk(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=$(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await bn(r,tk(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function rk(t,e){return E0($(t),e,null)}function ik(t,e){return E0($(t),null,e)}async function E0(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await bn(t,h0(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sk(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t==null?void 0:t.idToken)){const o=(n=(e=pu(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Mi(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new ok(s,i);case"github.com":return new ak(s,i);case"google.com":return new lk(s,i);case"twitter.com":return new uk(s,i,t.screenName||null);case"custom":case"anonymous":return new Mi(s,null);default:return new Mi(s,r,i)}}class Mi{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class I0 extends Mi{constructor(e,n,r,i){super(e,n,r);this.username=i}}class ok extends Mi{constructor(e,n){super(e,"facebook.com",n)}}class ak extends I0{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class lk extends Mi{constructor(e,n){super(e,"google.com",n)}}class uk extends I0{constructor(e,n,r){super(e,"twitter.com",n,r)}}function ck(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:sk(n)}class Ar{constructor(e,n){this.type=e,this.credential=n}static _fromIdtoken(e){return new Ar("enroll",e)}static _fromMfaPendingCredential(e){return new Ar("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return Ar._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Ar._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=Ue(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>yu._fromServerResponse(r,a));A(i.mfaPendingCredential,r,"internal-error");const o=Ar._fromMfaPendingCredential(i.mfaPendingCredential);return new Bf(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const c=await Dt._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(c.user),c;case"reauthenticate":return A(n.user,r,"internal-error"),Dt._forOperation(n.user,n.operationType,u);default:Qe(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function dk(t,e){var n;const r=$(t),i=e;return A(e.customData.operationType,r,"argument-error"),A((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Bf._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hk(t,e){return Be(t,"POST","/v2/accounts/mfaEnrollment:start",be(t,e))}function fk(t,e){return Be(t,"POST","/v2/accounts/mfaEnrollment:finalize",be(t,e))}function pk(t,e){return Be(t,"POST","/v2/accounts/mfaEnrollment:withdraw",be(t,e))}class jf{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>yu._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new jf(e)}async getSession(){return Ar._fromIdtoken(await this.user.getIdToken())}async enroll(e,n){const r=e,i=await this.getSession(),s=await bn(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken(),i=await bn(this.user,pk(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i);try{await this.user.reload()}catch(s){if(s.code!=="auth/user-token-expired")throw s}}}const Fc=new WeakMap;function mk(t){const e=$(t);return Fc.has(e)||Fc.set(e,jf._fromUser(e)),Fc.get(e)}const Rl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Rl,"1"),this.storage.removeItem(Rl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gk(){const t=Re();return Ff(t)||ls(t)}const _k=1e3,vk=10;class S0 extends C0{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=gk()&&m1(),this.fallbackToPolling=l0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);p1()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,vk):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},_k)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}S0.type="LOCAL";const $f=S0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0 extends C0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}T0.type="SESSION";const zr=T0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yk(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Eu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await yk(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Eu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=ta("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(){return window}function Ek(t){Pe().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zf(){return typeof Pe().WorkerGlobalScope!="undefined"&&typeof Pe().importScripts=="function"}async function Ik(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ck(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Sk(){return zf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0="firebaseLocalStorageDb",Tk=1,Pl="firebaseLocalStorage",R0="fbase_key";class na{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Iu(t,e){return t.transaction([Pl],e?"readwrite":"readonly").objectStore(Pl)}function kk(){const t=indexedDB.deleteDatabase(k0);return new na(t).toPromise()}function Vd(){const t=indexedDB.open(k0,Tk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Pl,{keyPath:R0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Pl)?e(r):(r.close(),await kk(),e(await Vd()))})})}async function Cg(t,e,n){const r=Iu(t,!0).put({[R0]:e,value:n});return new na(r).toPromise()}async function Rk(t,e){const n=Iu(t,!1).get(e),r=await new na(n).toPromise();return r===void 0?null:r.value}function Sg(t,e){const n=Iu(t,!0).delete(e);return new na(n).toPromise()}const Pk=800,Nk=3;class P0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Nk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Eu._getInstance(Sk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ik(),!this.activeServiceWorker)return;this.sender=new wk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ck()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vd();return await Cg(e,Rl,"1"),await Sg(e,Rl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Cg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Rk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Sg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Iu(i,!1).getAll();return new na(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Pk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}P0.type="LOCAL";const bo=P0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ak(t,e){return Be(t,"POST","/v2/accounts/mfaSignIn:start",be(t,e))}function bk(t,e){return Be(t,"POST","/v2/accounts/mfaSignIn:finalize",be(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ok(t){return(await Be(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function N0(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ke("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",xk().appendChild(r)})}function A0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dk=500,Lk=6e4,Pa=1e12;class Mk{constructor(e){this.auth=e,this.counter=Pa,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new Fk(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||Pa;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||Pa;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||Pa;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class Fk{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;A(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=Uk(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},Lk)},Dk))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Uk(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc=A0("rcb"),Wk=new Zo(3e4,6e4),Bk="https://www.google.com/recaptcha/api.js?";class jk{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Pe().grecaptcha}load(e,n=""){return A($k(n),e,"argument-error"),this.shouldResolveImmediately(n)?Promise.resolve(Pe().grecaptcha):new Promise((r,i)=>{const s=Pe().setTimeout(()=>{i(Ke(e,"network-request-failed"))},Wk.get());Pe()[Uc]=()=>{Pe().clearTimeout(s),delete Pe()[Uc];const a=Pe().grecaptcha;if(!a){i(Ke(e,"internal-error"));return}const l=a.render;a.render=(u,c)=>{const d=l(u,c);return this.counter++,d},this.hostLanguage=n,r(a)};const o=`${Bk}?${ri({onload:Uc,render:"explicit",hl:n})}`;N0(o).catch(()=>{clearTimeout(s),i(Ke(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!Pe().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function $k(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class zk{async load(e){return new Mk(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0="recaptcha",Vk={theme:"light",type:"image"};class Hk{constructor(e,n=Object.assign({},Vk),r){this.parameters=n,this.type=b0,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Ue(r),this.isInvisible=this.parameters.size==="invisible",A(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;A(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new zk:new jk,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{!o||(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){A(!this.parameters.sitekey,this.auth,"argument-error"),A(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),A(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Pe()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){A(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){A(Lf()&&!zf(),this.auth,"internal-error"),await Gk(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Ok(this.auth);A(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return A(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Gk(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Lr._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function qk(t,e,n){const r=Ue(t),i=await Cu(r,e,$(n));return new Vf(i,s=>vu(r,s))}async function Kk(t,e,n){const r=$(t);await _u(!1,r,"phone");const i=await Cu(r.auth,e,$(n));return new Vf(i,s=>v0(r,s))}async function Yk(t,e,n){const r=$(t),i=await Cu(r.auth,e,$(n));return new Vf(i,s=>y0(r,s))}async function Cu(t,e,n){var r;const i=await n.verify();try{A(typeof i=="string",t,"argument-error"),A(n.type===b0,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return A(o.type==="enroll",t,"internal-error"),(await hk(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{A(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return A(a,t,"missing-multi-factor-info"),(await Ak(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await N1(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function Qk(t,e){await Uf($(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.providerId=Gt.PROVIDER_ID,this.auth=Ue(e)}verifyPhoneNumber(e,n){return Cu(this.auth,e,$(n))}static credential(e,n){return Lr._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Gt.credentialFromTaggedObject(n)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Lr._fromTokenResponse(n,r):null}}Gt.PROVIDER_ID="phone";Gt.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(t,e){return e?yt(e):(A(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf extends us{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return Rn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Rn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Rn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Jk(t){return _0(t.auth,new Hf(t),t.bypassAuthState)}function Xk(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),g0(n,new Hf(t),t.bypassAuthState)}async function Zk(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),Uf(n,new Hf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Jk;case"linkViaPopup":case"linkViaRedirect":return Zk;case"reauthViaPopup":case"reauthViaRedirect":return Xk;default:Qe(this.auth,"internal-error")}}resolve(e){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eR=new Zo(2e3,1e4);async function tR(t,e,n){const r=Ue(t);as(t,e,Ln);const i=oi(r,n);return new Cn(r,"signInViaPopup",e,i).executeNotNull()}async function nR(t,e,n){const r=$(t);as(r.auth,e,Ln);const i=oi(r.auth,n);return new Cn(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function rR(t,e,n){const r=$(t);as(r.auth,e,Ln);const i=oi(r.auth,n);return new Cn(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Cn extends O0{constructor(e,n,r,i,s){super(e,n,i,s);this.provider=r,this.authWindow=null,this.pollId=null,Cn.currentPopupAction&&Cn.currentPopupAction.cancel(),Cn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return A(e,this.auth,"internal-error"),e}async onExecution(){Qt(this.filter.length===1,"Popup operations only handle one event");const e=ta();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ke(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ke(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Cn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ke(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,eR.get())};e()}}Cn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iR="pendingRedirect",Ga=new Map;class sR extends O0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let e=Ga.get(this.auth._key());if(!e){try{const r=await oR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ga.set(this.auth._key(),e)}return this.bypassAuthState||Ga.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function oR(t,e){const n=D0(e),r=x0(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function Gf(t,e){return x0(t)._set(D0(e),"true")}function aR(){Ga.clear()}function x0(t){return yt(t._redirectPersistence)}function D0(t){return Dr(iR,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lR(t,e,n){return uR(t,e,n)}async function uR(t,e,n){const r=Ue(t);as(t,e,Ln);const i=oi(r,n);return await Gf(i,r),i._openRedirect(r,e,"signInViaRedirect")}function cR(t,e,n){return dR(t,e,n)}async function dR(t,e,n){const r=$(t);as(r.auth,e,Ln);const i=oi(r.auth,n);await Gf(i,r.auth);const s=await L0(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function hR(t,e,n){return fR(t,e,n)}async function fR(t,e,n){const r=$(t);as(r.auth,e,Ln);const i=oi(r.auth,n);await _u(!1,r,e.providerId),await Gf(i,r.auth);const s=await L0(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function pR(t,e){return await Ue(t)._initializationPromise,Su(t,e,!1)}async function Su(t,e,n=!1){const r=Ue(t),i=oi(r,e),o=await new sR(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function L0(t){const e=ta(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR=10*60*1e3;class M0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!gR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!F0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ke(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=mR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Tg(e))}saveEventToCache(e){this.cachedEventUids.add(Tg(e)),this.lastProcessedEventTime=Date.now()}}function Tg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function F0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function gR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return F0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U0(t,e={}){return Be(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vR=/^https?/;async function yR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await U0(t);for(const n of e)try{if(wR(n))return}catch{}Qe(t,"unauthorized-domain")}function wR(t){const e=Ro(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!vR.test(n))return!1;if(_R.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER=new Zo(3e4,6e4);function kg(){const t=Pe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function IR(t){return new Promise((e,n)=>{var r,i,s;function o(){kg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{kg(),n(Ke(t,"network-request-failed"))},timeout:ER.get()})}if(!((i=(r=Pe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Pe().gapi)===null||s===void 0)&&s.load)o();else{const a=A0("iframefcb");return Pe()[a]=()=>{gapi.load?o():n(Ke(t,"network-request-failed"))},N0(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw qa=null,e})}let qa=null;function CR(t){return qa=qa||IR(t),qa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SR=new Zo(5e3,15e3),TR="__/auth/iframe",kR="emulator/auth/iframe",RR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},PR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function NR(t){const e=t.config;A(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Mf(e,kR):`https://${t.config.authDomain}/${TR}`,r={apiKey:e.apiKey,appName:t.name,v:si},i=PR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ri(r).slice(1)}`}async function AR(t){const e=await CR(t),n=Pe().gapi;return A(n,t,"internal-error"),e.open({where:document.body,url:NR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:RR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ke(t,"network-request-failed"),a=Pe().setTimeout(()=>{s(o)},SR.get());function l(){Pe().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},OR=500,xR=600,DR="_blank",LR="http://localhost";class Rg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function MR(t,e,n,r=OR,i=xR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},bR),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Re().toLowerCase();n&&(a=i0(u)?DR:n),r0(u)&&(e=e||LR,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[g,y])=>`${h}${g}=${y},`,"");if(f1(u)&&a!=="_self")return FR(e||"",a),new Rg(null);const d=window.open(e||"",a,c);A(d,t,"popup-blocked");try{d.focus()}catch{}return new Rg(d)}function FR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UR="__/auth/handler",WR="emulator/auth/handler";function Hd(t,e,n,r,i,s){A(t.config.authDomain,t,"auth-domain-config-required"),A(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:si,eventId:i};if(e instanceof Ln){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Il(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof cs){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${BR(t)}?${ri(a).slice(1)}`}function BR({config:t}){return t.emulator?Mf(t,WR):`https://${t.authDomain}/${UR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc="webStorageSupport";class jR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zr,this._completeRedirectFn=Su}async _openPopup(e,n,r,i){var s;Qt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Hd(e,n,r,Ro(),i);return MR(e,o,ta())}async _openRedirect(e,n,r,i){return await this._originValidation(e),Ek(Hd(e,n,r,Ro(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Qt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await AR(e),r=new M0(e);return n.register("authEvent",i=>(A(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Wc,{type:Wc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Wc];o!==void 0&&n(!!o),Qe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=yR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return l0()||Ff()||ls()}}const $R=jR;class zR{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return on("unexpected MultiFactorSessionType")}}}class qf extends zR{constructor(e){super("phone");this.credential=e}static _fromCredential(e){return new qf(e)}_finalizeEnroll(e,n,r){return fk(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return bk(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class W0{constructor(){}static assertion(e){return qf._fromCredential(e)}}W0.FACTOR_ID="phone";var Pg="@firebase/auth",Ng="0.19.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function GR(t){hr(new Yt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:s}=r.options;return(o=>{A(i&&!i.includes(":"),"invalid-api-key",{appName:o.name}),A(!(s!=null&&s.includes(":")),"argument-error",{appName:o.name});const a={apiKey:i,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:u0(t)},l=new g1(o,a);return YT(l,n),l})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),hr(new Yt("auth-internal",e=>{const n=Ue(e.getProvider("auth").getImmediate());return(r=>new VR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),cn(Pg,Ng,HR(t)),cn(Pg,Ng,"esm2017")}GR("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vr(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qR=2e3;async function KR(t,e,n){var r;const{BuildInfo:i}=Vr();Qt(e.sessionId,"AuthEvent did not contain a session ID");const s=await ZR(e.sessionId),o={};return ls()?o.ibi=i.packageName:ea()?o.apn=i.packageName:Qe(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Hd(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function YR(t){const{BuildInfo:e}=Vr(),n={};ls()?n.iosBundleId=e.packageName:ea()?n.androidPackageName=e.packageName:Qe(t,"operation-not-supported-in-this-environment"),await U0(t,n)}function QR(t){const{cordova:e}=Vr();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,h1()?"_blank":"_system","location=yes"),n(i)})})}async function JR(t,e,n){const{cordova:r}=Vr();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var d;s();const h=(d=r.plugins.browsertab)===null||d===void 0?void 0:d.close;typeof h=="function"&&h(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(Ke(t,"redirect-cancelled-by-user"))},qR))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(l),document.addEventListener("resume",u,!1),ea()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function XR(t){var e,n,r,i,s,o,a,l,u,c;const d=Vr();A(typeof((e=d==null?void 0:d.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),A(typeof((n=d==null?void 0:d.BuildInfo)===null||n===void 0?void 0:n.packageName)!="undefined",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),A(typeof((s=(i=(r=d==null?void 0:d.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),A(typeof((l=(a=(o=d==null?void 0:d.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),A(typeof((c=(u=d==null?void 0:d.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function ZR(t){const e=eP(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function eP(t){if(Qt(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder!="undefined")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tP=20;class nP extends M0{constructor(){super(...arguments);this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function rP(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:oP(),postBody:null,tenantId:t.tenantId,error:Ke(t,"no-auth-event")}}function iP(t,e){return Gd()._set(qd(t),e)}async function Ag(t){const e=await Gd()._get(qd(t));return e&&await Gd()._remove(qd(t)),e}function sP(t,e){var n,r;const i=lP(e);if(i.includes("/__/auth/callback")){const s=Ka(i),o=s.firebaseError?aP(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?Ke(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function oP(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<tP;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Gd(){return yt($f)}function qd(t){return Dr("authEvent",t.config.apiKey,t.name)}function aP(t){try{return JSON.parse(t)}catch{return null}}function lP(t){const e=Ka(t),n=e.link?decodeURIComponent(e.link):void 0,r=Ka(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Ka(i).link||i||r||n||t}function Ka(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return Ei(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uP=500;class cP{constructor(){this._redirectPersistence=zr,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Su}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new nP(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Qe(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){XR(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),aR(),await this._originValidation(e);const o=rP(e,r,i);await iP(e,o);const a=await KR(e,o,n),l=await QR(a);return JR(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=YR(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Vr(),o=setTimeout(async()=>{await Ag(e),n.onEvent(bg())},uP),a=async c=>{clearTimeout(o);const d=await Ag(e);let h=null;d&&(c==null?void 0:c.url)&&(h=sP(d,c.url)),n.onEvent(h||bg())};typeof r!="undefined"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,u=`${s.packageName.toLowerCase()}://`;Vr().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(u)&&a({url:c}),typeof l=="function")try{l(c)}catch(d){console.error(d)}}}}const dP=cP;function bg(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Ke("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hP(t,e){Ue(t)._logFramework(e)}var fP="@firebase/auth-compat",pP="0.2.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mP=1e3;function Nl(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function gP(){return Nl()==="http:"||Nl()==="https:"}function B0(t=Re()){return!!((Nl()==="file:"||Nl()==="ionic:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function _P(){return uu()||by()}function vP(){return xy()&&(document==null?void 0:document.documentMode)===11}function yP(t=Re()){return/Edge\/\d+/.test(t)}function wP(t=Re()){return vP()||yP(t)}function j0(){try{const t=self.localStorage,e=ta();if(t)return t.setItem(e,"1"),t.removeItem(e),wP()?El():!0}catch{return Kf()&&El()}return!1}function Kf(){return typeof global!="undefined"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Bc(){return(gP()||Oy()||B0())&&!_P()&&j0()&&!Kf()}function $0(){return B0()&&typeof document!="undefined"}async function EP(){return $0()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},mP);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function IP(){return typeof window!="undefined"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t={LOCAL:"local",NONE:"none",SESSION:"session"},As=A,z0="persistence";function CP(t,e){if(As(Object.values(_t).includes(e),t,"invalid-persistence-type"),uu()){As(e!==_t.SESSION,t,"unsupported-persistence-type");return}if(by()){As(e===_t.NONE,t,"unsupported-persistence-type");return}if(Kf()){As(e===_t.NONE||e===_t.LOCAL&&El(),t,"unsupported-persistence-type");return}As(e===_t.NONE||j0(),t,"unsupported-persistence-type")}async function Kd(t){await t._initializationPromise;const e=V0(),n=Dr(z0,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function SP(t,e){const n=V0();if(!n)return[];const r=Dr(z0,t,e);switch(n.getItem(r)){case _t.NONE:return[Vi];case _t.LOCAL:return[bo,zr];case _t.SESSION:return[zr];default:return[]}}function V0(){var t;try{return((t=IP())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TP=A;class Vn{constructor(){this.browserResolver=yt($R),this.cordovaResolver=yt(dP),this.underlyingResolver=null,this._redirectPersistence=zr,this._completeRedirectFn=Su}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return $0()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return TP(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await EP();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H0(t){return t.unwrap()}function kP(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RP(t){return G0(t)}function PP(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if(e.code==="auth/multi-factor-auth-required"){const i=e;i.resolver=new NP(t,dk(t,e))}else if(r){const i=G0(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function G0(t){const{_tokenResponse:e}=t instanceof bt?t.customData:t;if(!e)return null;if(!(t instanceof bt)&&"temporaryProof"in e&&"phoneNumber"in e)return Gt.credentialFromResult(t);const n=e.providerId;if(!n||n===Ns.PASSWORD)return null;let r;switch(n){case Ns.GOOGLE:r=Zt;break;case Ns.FACEBOOK:r=Xt;break;case Ns.GITHUB:r=en;break;case Ns.TWITTER:r=tn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?Hi._create(n,a):fn._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new Li(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof bt?r.credentialFromError(t):r.credentialFromResult(t)}function ct(t,e){return e.catch(n=>{throw n instanceof bt&&PP(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:RP(n),additionalUserInfo:ck(n),user:Sn.getOrCreate(i)}})}async function Yd(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>ct(t,n.confirm(r))}}class NP{constructor(e,n){this.resolver=n,this.auth=kP(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return ct(H0(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this._delegate=e,this.multiFactor=mk(e)}static getOrCreate(e){return Sn.USER_MAP.has(e)||Sn.USER_MAP.set(e,new Sn(e)),Sn.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return ct(this.auth,v0(this._delegate,e))}async linkWithPhoneNumber(e,n){return Yd(this.auth,Kk(this._delegate,e,n))}async linkWithPopup(e){return ct(this.auth,rR(this._delegate,e,Vn))}async linkWithRedirect(e){return await Kd(Ue(this.auth)),hR(this._delegate,e,Vn)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return ct(this.auth,y0(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Yd(this.auth,Yk(this._delegate,e,n))}reauthenticateWithPopup(e){return ct(this.auth,nR(this._delegate,e,Vn))}async reauthenticateWithRedirect(e){return await Kd(Ue(this.auth)),cR(this._delegate,e,Vn)}sendEmailVerification(e){return Z1(this._delegate,e)}async unlink(e){return await W1(this._delegate,e),this}updateEmail(e){return rk(this._delegate,e)}updatePassword(e){return ik(this._delegate,e)}updatePhoneNumber(e){return Qk(this._delegate,e)}updateProfile(e){return nk(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return ek(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Sn.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs=A;class Qd{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;bs(r,"invalid-api-key",{appName:e.name}),bs(r,"invalid-api-key",{appName:e.name});const i=typeof window!="undefined"?Vn:void 0;this._delegate=n.initialize({options:{persistence:AP(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(qT),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Sn.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){_1(this._delegate,e,n)}applyActionCode(e){return V1(this._delegate,e)}checkActionCode(e){return w0(this._delegate,e)}confirmPasswordReset(e,n){return z1(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return ct(this._delegate,G1(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return X1(this._delegate,e)}isSignInWithEmailLink(e){return Y1(this._delegate,e)}async getRedirectResult(){bs(Bc(),this._delegate,"operation-not-supported-in-this-environment");const e=await pR(this._delegate,Vn);return e?ct(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){hP(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=Og(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=Og(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return K1(this._delegate,e,n)}sendPasswordResetEmail(e,n){return $1(this._delegate,e,n||void 0)}async setPersistence(e){CP(this._delegate,e);let n;switch(e){case _t.SESSION:n=zr;break;case _t.LOCAL:n=await yt(bo)._isAvailable()?bo:$f;break;case _t.NONE:n=Vi;break;default:return Qe("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return ct(this._delegate,U1(this._delegate))}signInWithCredential(e){return ct(this._delegate,vu(this._delegate,e))}signInWithCustomToken(e){return ct(this._delegate,j1(this._delegate,e))}signInWithEmailAndPassword(e,n){return ct(this._delegate,q1(this._delegate,e,n))}signInWithEmailLink(e,n){return ct(this._delegate,Q1(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Yd(this._delegate,qk(this._delegate,e,n))}async signInWithPopup(e){return bs(Bc(),this._delegate,"operation-not-supported-in-this-environment"),ct(this._delegate,tR(this._delegate,e,Vn))}async signInWithRedirect(e){return bs(Bc(),this._delegate,"operation-not-supported-in-this-environment"),await Kd(this._delegate),lR(this._delegate,e,Vn)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return H1(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Qd.Persistence=_t;function Og(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&Sn.getOrCreate(o)),error:e,complete:n}}function AP(t,e){const n=SP(t,e);if(typeof self!="undefined"&&!n.includes(bo)&&n.push(bo),typeof window!="undefined")for(const r of[$f,zr])n.includes(r)||n.push(r);return n.includes(Vi)||n.push(Vi),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(){this.providerId="phone",this._delegate=new Gt(H0(Xo.auth()))}static credential(e,n){return Gt.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}Yf.PHONE_SIGN_IN_METHOD=Gt.PHONE_SIGN_IN_METHOD;Yf.PROVIDER_ID=Gt.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bP=A;class OP{constructor(e,n,r=Xo.app()){var i;bP((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new Hk(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xP="auth-compat";function DP(t){t.INTERNAL.registerComponent(new Yt(xP,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Qd(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:di.EMAIL_SIGNIN,PASSWORD_RESET:di.PASSWORD_RESET,RECOVER_EMAIL:di.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:di.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:di.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:di.VERIFY_EMAIL}},EmailAuthProvider:yr,FacebookAuthProvider:Xt,GithubAuthProvider:en,GoogleAuthProvider:Zt,OAuthProvider:Li,SAMLAuthProvider:Tl,PhoneAuthProvider:Yf,PhoneMultiFactorGenerator:W0,RecaptchaVerifier:OP,TwitterAuthProvider:tn,Auth:Qd,AuthCredential:us,Error:bt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(fP,pP)}DP(Xo);const xg="@firebase/database",Dg="0.12.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let q0="";function K0(t){q0=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LP{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ne(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:So(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MP{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return It(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y0=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new LP(e)}}catch{}return new MP},br=Y0("localStorage"),Jd=Y0("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi=new Qo("@firebase/database"),Q0=function(){let t=1;return function(){return t++}}(),J0=function(t){const e=DS(t),n=new bS;n.update(e);const r=n.digest();return Tf.encodeByteArray(r)},ra=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ra.apply(null,r):typeof r=="object"?e+=Ne(r):e+=r,e+=" "}return e};let Mr=null,Lg=!0;const X0=function(t,e){b(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Fi.logLevel=ue.VERBOSE,Mr=Fi.log.bind(Fi),e&&Jd.set("logging_enabled",!0)):typeof t=="function"?Mr=t:(Mr=null,Jd.remove("logging_enabled"))},Me=function(...t){if(Lg===!0&&(Lg=!1,Mr===null&&Jd.get("logging_enabled")===!0&&X0(!0)),Mr){const e=ra.apply(null,t);Mr(e)}},ia=function(t){return function(...e){Me(t,...e)}},Xd=function(...t){const e="FIREBASE INTERNAL ERROR: "+ra(...t);Fi.error(e)},pn=function(...t){const e=`FIREBASE FATAL ERROR: ${ra(...t)}`;throw Fi.error(e),new Error(e)},st=function(...t){const e="FIREBASE WARNING: "+ra(...t);Fi.warn(e)},FP=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&st("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Tu=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},UP=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},On="[MIN_NAME]",mn="[MAX_NAME]",ai=function(t,e){if(t===e)return 0;if(t===On||e===mn)return-1;if(e===On||t===mn)return 1;{const n=Al(t),r=Al(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},WP=function(t,e){return t===e?0:t<e?-1:1},Os=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ne(e))},Qf=function(t){if(typeof t!="object"||t===null)return Ne(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Ne(e[r]),n+=":",n+=Qf(t[e[r]]);return n+="}",n},Z0=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function We(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const ew=function(t){b(!Tu(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(c.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},BP=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},jP=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function $P(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const zP=new RegExp("^-?(0*)\\d{1,10}$"),tw=-2147483648,Jf=2147483647,Al=function(t){if(zP.test(t)){const e=Number(t);if(e>=tw&&e<=Jf)return e}return null},ds=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw st("Exception was thrown by user callback.",n),e},Math.floor(0))}},VP=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},no=function(t,e){const n=setTimeout(t,e);return typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HP{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){st(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GP{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Me("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',st(e)}}class Ui{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ui.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf="5",nw="v",rw="s",iw="r",sw="f",ow=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,aw="ls",qP="p",Zd="ac",lw="websocket",uw="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(e,n,r,i,s=!1,o="",a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=br.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&br.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function KP(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function dw(t,e,n){b(typeof e=="string","typeof type must == string"),b(typeof n=="object","typeof params must == object");let r;if(e===lw)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===uw)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);KP(t)&&(n.ns=t.namespace);const i=[];return We(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YP{constructor(){this.counters_={}}incrementCounter(e,n=1){It(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return ES(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc={},$c={};function Zf(t){const e=t.toString();return jc[e]||(jc[e]=new YP),jc[e]}function QP(t,e){const n=t.toString();return $c[n]||($c[n]=e()),$c[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JP{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ds(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg="start",XP="close",ZP="pLPCommand",eN="pRTLPCB",hw="id",fw="pw",pw="ser",tN="cb",nN="seg",rN="ts",iN="d",sN="dframe",mw=1870,gw=30,oN=mw-gw,aN=25e3,lN=3e4;class Ii{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ia(e),this.stats_=Zf(n),this.urlFn=l=>(this.appCheckToken&&(l[Zd]=this.appCheckToken),dw(n,uw,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new JP(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(lN)),UP(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ep((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Mg)this.id=a,this.password=l;else if(o===XP)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Mg]="t",r[pw]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[tN]=this.scriptTagHolder.uniqueCallbackIdentifier),r[nw]=Xf,this.transportSessionId&&(r[rw]=this.transportSessionId),this.lastSessionId&&(r[aw]=this.lastSessionId),this.applicationId&&(r[qP]=this.applicationId),this.appCheckToken&&(r[Zd]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&ow.test(location.hostname)&&(r[iw]=sw);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ii.forceAllow_=!0}static forceDisallow(){Ii.forceDisallow_=!0}static isAvailable(){return Ii.forceAllow_?!0:!Ii.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!BP()&&!jP()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ne(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=lu(n),i=Z0(r,oN);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[sN]="t",r[hw]=e,r[fw]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ne(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ep{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Q0(),window[ZP+this.uniqueCallbackIdentifier]=e,window[eN+this.uniqueCallbackIdentifier]=n,this.myIFrame=ep.createIFrame_();let s="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;s='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Me("frame writing exception"),a.stack&&Me(a.stack),Me(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Me("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[hw]=this.myID,e[fw]=this.myPW,e[pw]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+gw+r.length<=mw;){const o=this.pendingSegs.shift();r=r+"&"+nN+i+"="+o.seg+"&"+rN+i+"="+o.ts+"&"+iN+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(aN)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Me("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uN=16384,cN=45e3;let bl=null;typeof MozWebSocket!="undefined"?bl=MozWebSocket:typeof WebSocket!="undefined"&&(bl=WebSocket);class zt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ia(this.connId),this.stats_=Zf(n),this.connURL=zt.connectionURL_(n,o,a,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i){const s={};return s[nw]=Xf,typeof location!="undefined"&&location.hostname&&ow.test(location.hostname)&&(s[iw]=sw),n&&(s[rw]=n),r&&(s[aw]=r),i&&(s[Zd]=i),dw(e,lw,s)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,br.set("previous_websocket_failure",!0);try{if(!Dy()){const r={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new bl(this.connURL,[],r)}}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){zt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&bl!==null&&!zt.forceDisallow_}static previouslyFailed(){return br.isInMemoryStorage||br.get("previous_websocket_failure")===!0}markConnectionHealthy(){br.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=So(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(b(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Ne(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Z0(n,uN);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(cN))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}zt.responsesRequiredToBeHealthy=2;zt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ii,zt]}initTransports_(e){const n=zt&&zt.isAvailable();let r=n&&!zt.previouslyFailed();if(e.webSocketOnly&&(n||st("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[zt];else{const i=this.transports_=[];for(const s of tp.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dN=6e4,hN=5e3,fN=10*1024,pN=100*1024,zc="t",Fg="d",mN="s",Ug="r",gN="e",Wg="o",Bg="a",jg="n",$g="p",_N="h";class vN{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ia("c:"+this.id+":"),this.transportManager_=new tp(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=no(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>pN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>fN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(zc in e){const n=e[zc];n===Bg?this.upgradeIfSecondaryHealthy_():n===Ug?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Wg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Os("t",e),r=Os("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:$g,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Bg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:jg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Os("t",e),r=Os("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Os(zc,e);if(Fg in e){const r=e[Fg];if(n===_N)this.onHandshake_(r);else if(n===jg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===mN?this.onConnectionShutdown_(r):n===Ug?this.onReset_(r):n===gN?Xd("Server Error: "+r):n===Wg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Xd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Xf!==r&&st("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),no(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(dN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):no(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(hN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:$g,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(br.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(e){this.allowedEvents_=e,this.listeners_={},b(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){b(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol extends vw{constructor(){super(["online"]);this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!kf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ol}getInitialEvent(e){return b(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg=32,Vg=768;class ie{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ee(){return new ie("")}function K(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function fr(t){return t.pieces_.length-t.pieceNum_}function ce(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ie(t.pieces_,e)}function np(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function yN(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Oo(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function yw(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ie(e,0)}function ge(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ie)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ie(n,0)}function Y(t){return t.pieceNum_>=t.pieces_.length}function rt(t,e){const n=K(t),r=K(e);if(n===null)return e;if(n===r)return rt(ce(t),ce(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function wN(t,e){const n=Oo(t,0),r=Oo(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=ai(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function rp(t,e){if(fr(t)!==fr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Pt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(fr(t)>fr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class EN{constructor(e,n){this.errorPrefix_=n,this.parts_=Oo(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=cu(this.parts_[r]);ww(this)}}function IN(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=cu(e),ww(t)}function CN(t){const e=t.parts_.pop();t.byteLength_-=cu(e),t.parts_.length>0&&(t.byteLength_-=1)}function ww(t){if(t.byteLength_>Vg)throw new Error(t.errorPrefix_+"has a key path longer than "+Vg+" bytes ("+t.byteLength_+").");if(t.parts_.length>zg)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+zg+") or object contains a cycle "+Cr(t))}function Cr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip extends vw{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new ip}getInitialEvent(e){return b(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs=1e3,SN=60*5*1e3,TN=3*1e3,Hg=30*1e3,kN=1.3,RN=3e4,PN="server_kill",Gg=3;class Pn extends _w{constructor(e,n,r,i,s,o,a,l){super();if(this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Pn.nextPersistentConnectionId_++,this.log_=ia("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=xs,this.maxReconnectDelay_=SN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Dy())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ip.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ol.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Ne(s)),b(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new dt,r={p:e._path.toString(),q:e._queryObject},i={action:"g",request:r,onComplete:o=>{const a=o.d;o.s==="ok"?(this.onDataUpdate_(r.p,a,!1,null),n.resolve(a)):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const o=this.outstandingGets_[s];o===void 0||i!==o||(delete this.outstandingGets_[s],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+s+" timed out on connection"),n.reject(new Error("Client is offline.")))},TN),this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),b(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;Pn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&It(e,"w")){const r=Br(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();st(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||AS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Hg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=NS(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ne(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Xd("Unrecognized action received from server: "+Ne(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){b(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=xs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=xs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>RN&&(this.reconnectDelay_=xs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*kN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Pn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(d){b(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?Me("getToken() completed but was canceled"):(Me("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new vN(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{st(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(PN)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&st(d),l())}}}interrupt(e){Me("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Me("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Il(this.interruptReasons_)&&(this.reconnectDelay_=xs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Qf(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ie(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Me("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Gg&&(this.reconnectDelay_=Hg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Me("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Gg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+q0.replace(/\./g,"-")]=1,kf()?e["framework.cordova"]=1:uu()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ol.getInstance().currentlyOnline();return Il(this.interruptReasons_)&&e}}Pn.nextPersistentConnectionId_=0;Pn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new J(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new J(On,e),i=new J(On,n);return this.compare(r,i)!==0}minPost(){return J.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Na;class Ew extends ku{static get __EMPTY_NODE(){return Na}static set __EMPTY_NODE(e){Na=e}compare(e,n){return ai(e.name,n.name)}isDefinedOn(e){throw ss("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return J.MIN}maxPost(){return new J(mn,Na)}makePost(e,n){return b(typeof e=="string","KeyIndex indexValue must always be a string."),new J(e,Na)}toString(){return".key"}}const dn=new Ew;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Le{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Le.RED,this.left=i!=null?i:ht.EMPTY_NODE,this.right=s!=null?s:ht.EMPTY_NODE}copy(e,n,r,i,s){return new Le(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ht.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return ht.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Le.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Le.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Le.RED=!0;Le.BLACK=!1;class NN{copy(e,n,r,i,s){return this}insert(e,n,r){return new Le(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ht{constructor(e,n=ht.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ht(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Le.BLACK,null,null))}remove(e){return new ht(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Le.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Aa(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Aa(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Aa(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Aa(this.root_,null,this.comparator_,!0,e)}}ht.EMPTY_NODE=new NN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AN(t,e){return ai(t.name,e.name)}function sp(t,e){return ai(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eh;function bN(t){eh=t}const Iw=function(t){return typeof t=="number"?"number:"+ew(t):"string:"+t},Cw=function(t){if(t.isLeafNode()){const e=t.val();b(typeof e=="string"||typeof e=="number"||typeof e=="object"&&It(e,".sv"),"Priority must be a string or number.")}else b(t===eh||t.isEmpty(),"priority of unexpected type.");b(t===eh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qg;class xe{constructor(e,n=xe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,b(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Cw(this.priorityNode_)}static set __childrenNodeConstructor(e){qg=e}static get __childrenNodeConstructor(){return qg}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new xe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:xe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Y(e)?this:K(e)===".priority"?this.priorityNode_:xe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:xe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=K(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(b(r!==".priority"||fr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,xe.__childrenNodeConstructor.EMPTY_NODE.updateChild(ce(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Iw(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=ew(this.value_):e+=this.value_,this.lazyHash_=J0(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===xe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof xe.__childrenNodeConstructor?-1:(b(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=xe.VALUE_TYPE_ORDER.indexOf(n),s=xe.VALUE_TYPE_ORDER.indexOf(r);return b(i>=0,"Unknown leaf type: "+n),b(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}xe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sw,Tw;function ON(t){Sw=t}function xN(t){Tw=t}class DN extends ku{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?ai(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return J.MIN}maxPost(){return new J(mn,new xe("[PRIORITY-POST]",Tw))}makePost(e,n){const r=Sw(e);return new J(n,new xe("[PRIORITY-POST]",r))}toString(){return".priority"}}const fe=new DN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LN=Math.log(2);class MN{constructor(e){const n=s=>parseInt(Math.log(s)/LN,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const xl=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let d,h;if(c===0)return null;if(c===1)return d=t[l],h=n?n(d):d,new Le(h,d.node,Le.BLACK,null,null);{const g=parseInt(c/2,10)+l,y=i(l,g),w=i(g+1,u);return d=t[g],h=n?n(d):d,new Le(h,d.node,Le.BLACK,y,w)}},s=function(l){let u=null,c=null,d=t.length;const h=function(y,w){const m=d-y,f=d;d-=y;const p=i(m+1,f),_=t[m],v=n?n(_):_;g(new Le(v,_.node,w,null,p))},g=function(y){u?(u.left=y,u=y):(c=y,u=y)};for(let y=0;y<l.count;++y){const w=l.nextBitIsOne(),m=Math.pow(2,l.count-(y+1));w?h(m,Le.BLACK):(h(m,Le.BLACK),h(m,Le.RED))}return c},o=new MN(t.length),a=s(o);return new ht(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vc;const hi={};class Tn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return b(hi&&fe,"ChildrenNode.ts has not been loaded"),Vc=Vc||new Tn({".priority":hi},{".priority":fe}),Vc}get(e){const n=Br(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ht?n:null}hasIndex(e){return It(this.indexSet_,e.toString())}addIndex(e,n){b(e!==dn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(J.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=xl(r,e.getCompare()):a=hi;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new Tn(c,u)}addToIndexes(e,n){const r=Cl(this.indexes_,(i,s)=>{const o=Br(this.indexSet_,s);if(b(o,"Missing index implementation for "+s),i===hi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(J.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),xl(a,o.getCompare())}else return hi;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new J(e.name,a))),l.insert(e,e.node)}});return new Tn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Cl(this.indexes_,i=>{if(i===hi)return i;{const s=n.get(e.name);return s?i.remove(new J(e.name,s)):i}});return new Tn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ds;class W{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Cw(this.priorityNode_),this.children_.isEmpty()&&b(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ds||(Ds=new W(new ht(sp),null,Tn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ds}updatePriority(e){return this.children_.isEmpty()?this:new W(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ds:n}}getChild(e){const n=K(e);return n===null?this:this.getImmediateChild(n).getChild(ce(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(b(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new J(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ds:this.priorityNode_;return new W(i,o,s)}}updateChild(e,n){const r=K(e);if(r===null)return n;{b(K(e)!==".priority"||fr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ce(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(fe,(o,a)=>{n[o]=a.val(e),r++,s&&W.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Iw(this.getPriority().val())+":"),this.forEachChild(fe,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":J0(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new J(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new J(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new J(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,J.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,J.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===sa?-1:0}withIndex(e){if(e===dn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new W(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===dn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(fe),i=n.getIterator(fe);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===dn?null:this.indexMap_.get(e.toString())}}W.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class FN extends W{constructor(){super(new ht(sp),W.EMPTY_NODE,Tn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return W.EMPTY_NODE}isEmpty(){return!1}}const sa=new FN;Object.defineProperties(J,{MIN:{value:new J(On,W.EMPTY_NODE)},MAX:{value:new J(mn,sa)}});Ew.__EMPTY_NODE=W.EMPTY_NODE;xe.__childrenNodeConstructor=W;bN(sa);xN(sa);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UN=!0;function Ee(t,e=null){if(t===null)return W.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),b(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new xe(n,Ee(e))}if(!(t instanceof Array)&&UN){const n=[];let r=!1;if(We(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ee(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new J(o,l)))}}),n.length===0)return W.EMPTY_NODE;const s=xl(n,AN,o=>o.name,sp);if(r){const o=xl(n,fe.getCompare());return new W(s,Ee(e),new Tn({".priority":o},{".priority":fe}))}else return new W(s,Ee(e),Tn.Default)}else{let n=W.EMPTY_NODE;return We(t,(r,i)=>{if(It(t,r)&&r.substring(0,1)!=="."){const s=Ee(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Ee(e))}}ON(Ee);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op extends ku{constructor(e){super();this.indexPath_=e,b(!Y(e)&&K(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?ai(e.name,n.name):s}makePost(e,n){const r=Ee(e),i=W.EMPTY_NODE.updateChild(this.indexPath_,r);return new J(n,i)}maxPost(){const e=W.EMPTY_NODE.updateChild(this.indexPath_,sa);return new J(mn,e)}toString(){return Oo(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN extends ku{compare(e,n){const r=e.node.compareTo(n.node);return r===0?ai(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return J.MIN}maxPost(){return J.MAX}makePost(e,n){const r=Ee(e);return new J(n,r)}toString(){return".value"}}const ap=new WN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",th="-",kw="z",Rw=786,BN=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Gi.charAt(n%64),n=Math.floor(n/64);b(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Gi.charAt(e[i]);return b(o.length===20,"nextPushId: Length should be 20."),o}}(),Kg=function(t){if(t===""+Jf)return th;const e=Al(t);if(e!=null)return""+(e+1);const n=new Array(t.length);for(let o=0;o<n.length;o++)n[o]=t.charAt(o);if(n.length<Rw)return n.push(th),n.join("");let r=n.length-1;for(;r>=0&&n[r]===kw;)r--;if(r===-1)return mn;const i=n[r],s=Gi.charAt(Gi.indexOf(i)+1);return n[r]=s,n.slice(0,r+1).join("")},Yg=function(t){if(t===""+tw)return On;const e=Al(t);if(e!=null)return""+(e-1);const n=new Array(t.length);for(let r=0;r<n.length;r++)n[r]=t.charAt(r);return n[n.length-1]===th?n.length===1?""+Jf:(delete n[n.length-1],n.join("")):(n[n.length-1]=Gi.charAt(Gi.indexOf(n[n.length-1])-1),n.join("")+kw.repeat(Rw-n.length))};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pw(t){return{type:"value",snapshotNode:t}}function qi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function xo(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Do(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function jN(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){b(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(xo(n,a)):b(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(qi(n,r)):o.trackChildChange(Do(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(fe,(i,s)=>{n.hasChild(i)||r.trackChildChange(xo(i,s))}),n.isLeafNode()||n.forEachChild(fe,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Do(i,s,o))}else r.trackChildChange(qi(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?W.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e){this.indexedFilter_=new lp(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Lo.getStartPost_(e),this.endPost_=Lo.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,r,i,s,o){return this.matches(new J(n,r))||(r=W.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=W.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(W.EMPTY_NODE);const s=this;return n.forEachChild(fe,(o,a)=>{s.matches(new J(o,a))||(i=i.updateImmediateChild(o,W.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{constructor(e){this.rangedFilter_=new Lo(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new J(n,r))||(r=W.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=W.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=W.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)i=i.updateImmediateChild(a.name,a.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(W.EMPTY_NODE);let s,o,a,l;if(this.reverse_){l=i.getReverseIterator(this.index_),s=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const d=this.index_.getCompare();a=(h,g)=>d(g,h)}else l=i.getIterator(this.index_),s=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let u=0,c=!1;for(;l.hasNext();){const d=l.getNext();!c&&a(s,d)<=0&&(c=!0),c&&u<this.limit_&&a(d,o)<=0?u++:i=i.updateImmediateChild(d.name,W.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,g)=>d(g,h)}else o=this.index_.getCompare();const a=e;b(a.numChildren()===this.limit_,"");const l=new J(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const g=h==null?1:o(h,l);if(c&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(Do(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(xo(n,d));const w=a.updateImmediateChild(n,W.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(qi(h.name,h.node)),w.updateImmediateChild(h.name,h.node)):w}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(xo(u.name,u.node)),s.trackChildChange(qi(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,W.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=fe}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return b(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return b(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:On}hasEnd(){return this.endSet_}getIndexEndValue(){return b(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return b(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:mn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return b(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===fe}copy(){const e=new Ru;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function zN(t){return t.loadsAllData()?new lp(t.getIndex()):t.hasLimit()?new $N(t):new Lo(t)}function VN(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="l",n}function HN(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function nh(t,e,n){const r=t.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function GN(t,e,n){let r;if(t.index_===dn)typeof e=="string"&&(e=Kg(e)),r=nh(t,e,n);else{let i;n==null?i=mn:i=Kg(n),r=nh(t,e,i)}return r.startAfterSet_=!0,r}function rh(t,e,n){const r=t.copy();return r.endSet_=!0,e===void 0&&(e=null),r.indexEndValue_=e,n!==void 0?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function qN(t,e,n){let r,i;return t.index_===dn?(typeof e=="string"&&(e=Yg(e)),i=rh(t,e,n)):(n==null?r=On:r=Yg(n),i=rh(t,e,r)),i.endBeforeSet_=!0,i}function Pu(t,e){const n=t.copy();return n.index_=e,n}function Qg(t){const e={};if(t.isDefault())return e;let n;return t.index_===fe?n="$priority":t.index_===ap?n="$value":t.index_===dn?n="$key":(b(t.index_ instanceof op,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ne(n),t.startSet_&&(e.startAt=Ne(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+Ne(t.indexStartName_))),t.endSet_&&(e.endAt=Ne(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+Ne(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Jg(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==fe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl extends _w{constructor(e,n,r,i){super();this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=ia("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(b(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Dl.getListenId_(e,r),a={};this.listens_[o]=a;const l=Qg(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),Br(this.listens_,o)===a){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=Dl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Qg(e._queryParams),r=e._path.toString(),i=new dt;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ri(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=So(a.responseText)}catch{st("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&st("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KN{constructor(){this.rootNode_=W.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(){return{value:null,children:new Map}}function hs(t,e,n){if(Y(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=K(e);t.children.has(r)||t.children.set(r,Ll());const i=t.children.get(r);e=ce(e),hs(i,e,n)}}function ih(t,e){if(Y(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(fe,(r,i)=>{hs(t,new ie(r),i)}),ih(t,e)}}else if(t.children.size>0){const n=K(e);return e=ce(e),t.children.has(n)&&ih(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function sh(t,e,n){t.value!==null?n(e,t.value):YN(t,(r,i)=>{const s=new ie(e.toString()+"/"+r);sh(i,s,n)})}function YN(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&We(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg=10*1e3,JN=30*1e3,XN=5*60*1e3;class ZN{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new QN(e);const r=Xg+(JN-Xg)*Math.random();no(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;We(e,(i,s)=>{s>0&&It(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),no(this.reportStats_.bind(this),Math.floor(Math.random()*2*XN))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ht;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ht||(Ht={}));function up(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function cp(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function dp(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Ht.ACK_USER_WRITE,this.source=up()}operationForChild(e){if(Y(this.path)){if(this.affectedTree.value!=null)return b(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ie(e));return new Ml(ee(),n,this.revert)}}else return b(K(this.path)===e,"operationForChild called for unrelated child."),new Ml(ce(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,n){this.source=e,this.path=n,this.type=Ht.LISTEN_COMPLETE}operationForChild(e){return Y(this.path)?new Mo(this.source,ee()):new Mo(this.source,ce(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Ht.OVERWRITE}operationForChild(e){return Y(this.path)?new Hr(this.source,ee(),this.snap.getImmediateChild(e)):new Hr(this.source,ce(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Ht.MERGE}operationForChild(e){if(Y(this.path)){const n=this.children.subtree(new ie(e));return n.isEmpty()?null:n.value?new Hr(this.source,ee(),n.value):new Ki(this.source,ee(),n)}else return b(K(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ki(this.source,ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Y(e))return this.isFullyInitialized()&&!this.filtered_;const n=K(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function tA(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(jN(o.childName,o.snapshotNode))}),Ls(t,i,"child_removed",e,r,n),Ls(t,i,"child_added",e,r,n),Ls(t,i,"child_moved",s,r,n),Ls(t,i,"child_changed",e,r,n),Ls(t,i,"value",e,r,n),i}function Ls(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>rA(t,a,l)),o.forEach(a=>{const l=nA(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function nA(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function rA(t,e,n){if(e.childName==null||n.childName==null)throw ss("Should only compare child_ events.");const r=new J(e.childName,e.snapshotNode),i=new J(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(t,e){return{eventCache:t,serverCache:e}}function ro(t,e,n,r){return Nu(new pr(e,n,r),t.serverCache)}function Nw(t,e,n,r){return Nu(t.eventCache,new pr(e,n,r))}function Fl(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Gr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hc;const iA=()=>(Hc||(Hc=new ht(WP)),Hc);class he{constructor(e,n=iA()){this.value=e,this.children=n}static fromObject(e){let n=new he(null);return We(e,(r,i)=>{n=n.set(new ie(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ee(),value:this.value};if(Y(e))return null;{const r=K(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ce(e),n);return s!=null?{path:ge(new ie(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Y(e))return this;{const n=K(e),r=this.children.get(n);return r!==null?r.subtree(ce(e)):new he(null)}}set(e,n){if(Y(e))return new he(n,this.children);{const r=K(e),s=(this.children.get(r)||new he(null)).set(ce(e),n),o=this.children.insert(r,s);return new he(this.value,o)}}remove(e){if(Y(e))return this.children.isEmpty()?new he(null):new he(null,this.children);{const n=K(e),r=this.children.get(n);if(r){const i=r.remove(ce(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new he(null):new he(this.value,s)}else return this}}get(e){if(Y(e))return this.value;{const n=K(e),r=this.children.get(n);return r?r.get(ce(e)):null}}setTree(e,n){if(Y(e))return n;{const r=K(e),s=(this.children.get(r)||new he(null)).setTree(ce(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new he(this.value,o)}}fold(e){return this.fold_(ee(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ge(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ee(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(Y(e))return null;{const s=K(e),o=this.children.get(s);return o?o.findOnPath_(ce(e),ge(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ee(),n)}foreachOnPath_(e,n,r){if(Y(e))return this;{this.value&&r(n,this.value);const i=K(e),s=this.children.get(i);return s?s.foreachOnPath_(ce(e),ge(n,i),r):new he(null)}}foreach(e){this.foreach_(ee(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ge(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.writeTree_=e}static empty(){return new qt(new he(null))}}function io(t,e,n){if(Y(e))return new qt(new he(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=rt(i,e);return s=s.updateChild(o,n),new qt(t.writeTree_.set(i,s))}else{const i=new he(n),s=t.writeTree_.setTree(e,i);return new qt(s)}}}function oh(t,e,n){let r=t;return We(n,(i,s)=>{r=io(r,ge(e,i),s)}),r}function Zg(t,e){if(Y(e))return qt.empty();{const n=t.writeTree_.setTree(e,new he(null));return new qt(n)}}function ah(t,e){return li(t,e)!=null}function li(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(rt(n.path,e)):null}function e_(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(fe,(r,i)=>{e.push(new J(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new J(r,i.value))}),e}function nr(t,e){if(Y(e))return t;{const n=li(t,e);return n!=null?new qt(new he(n)):new qt(t.writeTree_.subtree(e))}}function lh(t){return t.writeTree_.isEmpty()}function Yi(t,e){return Aw(ee(),t.writeTree_,e)}function Aw(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(b(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Aw(ge(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ge(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(t,e){return Dw(e,t)}function sA(t,e,n,r,i){b(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=io(t.visibleWrites,e,n)),t.lastWriteId=r}function oA(t,e,n,r){b(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=oh(t.visibleWrites,e,n),t.lastWriteId=r}function aA(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function lA(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);b(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&uA(a,r.path)?i=!1:Pt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return cA(t),!0;if(r.snap)t.visibleWrites=Zg(t.visibleWrites,r.path);else{const a=r.children;We(a,l=>{t.visibleWrites=Zg(t.visibleWrites,ge(r.path,l))})}return!0}else return!1}function uA(t,e){if(t.snap)return Pt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Pt(ge(t.path,n),e))return!0;return!1}function cA(t){t.visibleWrites=bw(t.allWrites,dA,ee()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function dA(t){return t.visible}function bw(t,e,n){let r=qt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Pt(n,o)?(a=rt(n,o),r=io(r,a,s.snap)):Pt(o,n)&&(a=rt(o,n),r=io(r,ee(),s.snap.getChild(a)));else if(s.children){if(Pt(n,o))a=rt(n,o),r=oh(r,a,s.children);else if(Pt(o,n))if(a=rt(o,n),Y(a))r=oh(r,ee(),s.children);else{const l=Br(s.children,K(a));if(l){const u=l.getChild(ce(a));r=io(r,ee(),u)}}}else throw ss("WriteRecord should have .snap or .children")}}return r}function Ow(t,e,n,r,i){if(!r&&!i){const s=li(t.visibleWrites,e);if(s!=null)return s;{const o=nr(t.visibleWrites,e);if(lh(o))return n;if(n==null&&!ah(o,ee()))return null;{const a=n||W.EMPTY_NODE;return Yi(o,a)}}}else{const s=nr(t.visibleWrites,e);if(!i&&lh(s))return n;if(!i&&n==null&&!ah(s,ee()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Pt(u.path,e)||Pt(e,u.path))},a=bw(t.allWrites,o,e),l=n||W.EMPTY_NODE;return Yi(a,l)}}}function hA(t,e,n){let r=W.EMPTY_NODE;const i=li(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(fe,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=nr(t.visibleWrites,e);return n.forEachChild(fe,(o,a)=>{const l=Yi(nr(s,new ie(o)),a);r=r.updateImmediateChild(o,l)}),e_(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=nr(t.visibleWrites,e);return e_(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function fA(t,e,n,r,i){b(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ge(e,n);if(ah(t.visibleWrites,s))return null;{const o=nr(t.visibleWrites,s);return lh(o)?i.getChild(n):Yi(o,i.getChild(n))}}function pA(t,e,n,r){const i=ge(e,n),s=li(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=nr(t.visibleWrites,i);return Yi(o,r.getNode().getImmediateChild(n))}else return null}function mA(t,e){return li(t.visibleWrites,e)}function gA(t,e,n,r,i,s,o){let a;const l=nr(t.visibleWrites,e),u=li(l,ee());if(u!=null)a=u;else if(n!=null)a=Yi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],d=o.getCompare(),h=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let g=h.getNext();for(;g&&c.length<i;)d(g,r)!==0&&c.push(g),g=h.getNext();return c}else return[]}function _A(){return{visibleWrites:qt.empty(),allWrites:[],lastWriteId:-1}}function Ul(t,e,n,r){return Ow(t.writeTree,t.treePath,e,n,r)}function hp(t,e){return hA(t.writeTree,t.treePath,e)}function t_(t,e,n,r){return fA(t.writeTree,t.treePath,e,n,r)}function Wl(t,e){return mA(t.writeTree,ge(t.treePath,e))}function vA(t,e,n,r,i,s){return gA(t.writeTree,t.treePath,e,n,r,i,s)}function fp(t,e,n){return pA(t.writeTree,t.treePath,e,n)}function xw(t,e){return Dw(ge(t.treePath,e),t.writeTree)}function Dw(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;b(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),b(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Do(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,xo(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,qi(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Do(r,e.snapshotNode,i.oldSnap));else throw ss("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Lw=new wA;class pp{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new pr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return fp(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Gr(this.viewCache_),s=vA(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EA(t){return{filter:t}}function IA(t,e){b(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),b(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function CA(t,e,n,r,i){const s=new yA;let o,a;if(n.type===Ht.OVERWRITE){const u=n;u.source.fromUser?o=uh(t,e,u.path,u.snap,r,i,s):(b(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!Y(u.path),o=Bl(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===Ht.MERGE){const u=n;u.source.fromUser?o=TA(t,e,u.path,u.children,r,i,s):(b(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=ch(t,e,u.path,u.children,r,i,a,s))}else if(n.type===Ht.ACK_USER_WRITE){const u=n;u.revert?o=PA(t,e,u.path,r,i,s):o=kA(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===Ht.LISTEN_COMPLETE)o=RA(t,e,n.path,r,s);else throw ss("Unknown operation type: "+n.type);const l=s.getChanges();return SA(e,o,l),{viewCache:o,changes:l}}function SA(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Fl(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Pw(Fl(e)))}}function Mw(t,e,n,r,i,s){const o=e.eventCache;if(Wl(r,n)!=null)return e;{let a,l;if(Y(n))if(b(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Gr(e),c=u instanceof W?u:W.EMPTY_NODE,d=hp(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=Ul(r,Gr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=K(n);if(u===".priority"){b(fr(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const d=t_(r,n,c,l);d!=null?a=t.filter.updatePriority(c,d):a=o.getNode()}else{const c=ce(n);let d;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const h=t_(r,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(u).updateChild(c,h):d=o.getNode().getImmediateChild(u)}else d=fp(r,u,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),u,d,c,i,s):a=o.getNode()}}return ro(e,a,o.isFullyInitialized()||Y(n),t.filter.filtersNodes())}}function Bl(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(Y(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),g,null)}else{const g=K(n);if(!l.isCompleteForPath(n)&&fr(n)>1)return e;const y=ce(n),m=l.getNode().getImmediateChild(g).updateChild(y,r);g===".priority"?u=c.updatePriority(l.getNode(),m):u=c.updateChild(l.getNode(),g,m,y,Lw,null)}const d=Nw(e,u,l.isFullyInitialized()||Y(n),c.filtersNodes()),h=new pp(i,d,s);return Mw(t,d,n,i,h,a)}function uh(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new pp(i,e,s);if(Y(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=ro(e,u,!0,t.filter.filtersNodes());else{const d=K(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=ro(e,u,a.isFullyInitialized(),a.isFiltered());else{const h=ce(n),g=a.getNode().getImmediateChild(d);let y;if(Y(h))y=r;else{const w=c.getCompleteChild(d);w!=null?np(h)===".priority"&&w.getChild(yw(h)).isEmpty()?y=w:y=w.updateChild(h,r):y=W.EMPTY_NODE}if(g.equals(y))l=e;else{const w=t.filter.updateChild(a.getNode(),d,y,h,c,o);l=ro(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function n_(t,e){return t.eventCache.isCompleteForChild(e)}function TA(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=ge(n,l);n_(e,K(c))&&(a=uh(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=ge(n,l);n_(e,K(c))||(a=uh(t,a,c,u,i,s,o))}),a}function r_(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function ch(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;Y(n)?u=r:u=new he(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,h)=>{if(c.hasChild(d)){const g=e.serverCache.getNode().getImmediateChild(d),y=r_(t,g,h);l=Bl(t,l,new ie(d),y,i,s,o,a)}}),u.children.inorderTraversal((d,h)=>{const g=!e.serverCache.isCompleteForChild(d)&&h.value===void 0;if(!c.hasChild(d)&&!g){const y=e.serverCache.getNode().getImmediateChild(d),w=r_(t,y,h);l=Bl(t,l,new ie(d),w,i,s,o,a)}}),l}function kA(t,e,n,r,i,s,o){if(Wl(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(Y(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Bl(t,e,n,l.getNode().getChild(n),i,s,a,o);if(Y(n)){let u=new he(null);return l.getNode().forEachChild(dn,(c,d)=>{u=u.set(new ie(c),d)}),ch(t,e,n,u,i,s,a,o)}else return e}else{let u=new he(null);return r.foreach((c,d)=>{const h=ge(n,c);l.isCompleteForPath(h)&&(u=u.set(c,l.getNode().getChild(h)))}),ch(t,e,n,u,i,s,a,o)}}function RA(t,e,n,r,i){const s=e.serverCache,o=Nw(e,s.getNode(),s.isFullyInitialized()||Y(n),s.isFiltered());return Mw(t,o,n,r,Lw,i)}function PA(t,e,n,r,i,s){let o;if(Wl(r,n)!=null)return e;{const a=new pp(r,e,i),l=e.eventCache.getNode();let u;if(Y(n)||K(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Ul(r,Gr(e));else{const d=e.serverCache.getNode();b(d instanceof W,"serverChildren would be complete if leaf node"),c=hp(r,d)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=K(n);let d=fp(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=l.getImmediateChild(c)),d!=null?u=t.filter.updateChild(l,c,d,ce(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,W.EMPTY_NODE,ce(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ul(r,Gr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Wl(r,ee())!=null,ro(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new lp(r.getIndex()),s=zN(r);this.processor_=EA(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(W.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(W.EMPTY_NODE,a.getNode(),null),c=new pr(l,o.isFullyInitialized(),i.filtersNodes()),d=new pr(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Nu(d,c),this.eventGenerator_=new eA(this.query_)}get query(){return this.query_}}function AA(t){return t.viewCache_.serverCache.getNode()}function bA(t){return Fl(t.viewCache_)}function OA(t,e){const n=Gr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Y(e)&&!n.getImmediateChild(K(e)).isEmpty())?n.getChild(e):null}function i_(t){return t.eventRegistrations_.length===0}function xA(t,e){t.eventRegistrations_.push(e)}function s_(t,e,n){const r=[];if(n){b(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function o_(t,e,n,r){e.type===Ht.MERGE&&e.source.queryId!==null&&(b(Gr(t.viewCache_),"We should always have a full cache before handling merges"),b(Fl(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=CA(t.processor_,i,e,n,r);return IA(t.processor_,s.viewCache),b(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Fw(t,s.changes,s.viewCache.eventCache.getNode(),null)}function DA(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(fe,(s,o)=>{r.push(qi(s,o))}),n.isFullyInitialized()&&r.push(Pw(n.getNode())),Fw(t,r,n.getNode(),e)}function Fw(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return tA(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jl;class Uw{constructor(){this.views=new Map}}function LA(t){b(!jl,"__referenceConstructor has already been defined"),jl=t}function MA(){return b(jl,"Reference.ts has not been loaded"),jl}function FA(t){return t.views.size===0}function mp(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return b(s!=null,"SyncTree gave us an op for an invalid query."),o_(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(o_(o,e,n,r));return s}}function Ww(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Ul(n,i?r:null),l=!1;a?l=!0:r instanceof W?(a=hp(n,r),l=!1):(a=W.EMPTY_NODE,l=!1);const u=Nu(new pr(a,l,!1),new pr(r,i,!1));return new NA(e,u)}return o}function UA(t,e,n,r,i,s){const o=Ww(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),xA(o,n),DA(o,n)}function WA(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=mr(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(s_(u,n,r)),i_(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(s_(l,n,r)),i_(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!mr(t)&&s.push(new(MA())(e._repo,e._path)),{removed:s,events:o}}function Bw(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function rr(t,e){let n=null;for(const r of t.views.values())n=n||OA(r,e);return n}function jw(t,e){if(e._queryParams.loadsAllData())return bu(t);{const r=e._queryIdentifier;return t.views.get(r)}}function $w(t,e){return jw(t,e)!=null}function mr(t){return bu(t)!=null}function bu(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $l;function BA(t){b(!$l,"__referenceConstructor has already been defined"),$l=t}function jA(){return b($l,"Reference.ts has not been loaded"),$l}let $A=1;class a_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new he(null),this.pendingWriteTree_=_A(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function gp(t,e,n,r,i){return sA(t.pendingWriteTree_,e,n,r,i),i?fs(t,new Hr(up(),e,n)):[]}function zA(t,e,n,r){oA(t.pendingWriteTree_,e,n,r);const i=he.fromObject(n);return fs(t,new Ki(up(),e,i))}function Hn(t,e,n=!1){const r=aA(t.pendingWriteTree_,e);if(lA(t.pendingWriteTree_,e)){let s=new he(null);return r.snap!=null?s=s.set(ee(),!0):We(r.children,o=>{s=s.set(new ie(o),!0)}),fs(t,new Ml(r.path,s,n))}else return[]}function oa(t,e,n){return fs(t,new Hr(cp(),e,n))}function VA(t,e,n){const r=he.fromObject(n);return fs(t,new Ki(cp(),e,r))}function HA(t,e){return fs(t,new Mo(cp(),e))}function GA(t,e,n){const r=_p(t,n);if(r){const i=vp(r),s=i.path,o=i.queryId,a=rt(s,e),l=new Mo(dp(o),a);return yp(t,s,l)}else return[]}function dh(t,e,n,r){const i=e._path,s=t.syncPointTree_.get(i);let o=[];if(s&&(e._queryIdentifier==="default"||$w(s,e))){const a=WA(s,e,n,r);FA(s)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const l=a.removed;o=a.events;const u=l.findIndex(d=>d._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(i,(d,h)=>mr(h));if(u&&!c){const d=t.syncPointTree_.subtree(i);if(!d.isEmpty()){const h=QA(d);for(let g=0;g<h.length;++g){const y=h[g],w=y.query,m=Hw(t,y);t.listenProvider_.startListening(so(w),zl(t,w),m.hashFn,m.onComplete)}}}!c&&l.length>0&&!r&&(u?t.listenProvider_.stopListening(so(e),null):l.forEach(d=>{const h=t.queryToTagMap.get(xu(d));t.listenProvider_.stopListening(so(d),h)})),JA(t,l)}return o}function qA(t,e,n,r){const i=_p(t,r);if(i!=null){const s=vp(i),o=s.path,a=s.queryId,l=rt(o,e),u=new Hr(dp(a),l,n);return yp(t,o,u)}else return[]}function KA(t,e,n,r){const i=_p(t,r);if(i){const s=vp(i),o=s.path,a=s.queryId,l=rt(o,e),u=he.fromObject(n),c=new Ki(dp(a),l,u);return yp(t,o,c)}else return[]}function l_(t,e,n){const r=e._path;let i=null,s=!1;t.syncPointTree_.foreachOnPath(r,(d,h)=>{const g=rt(d,r);i=i||rr(h,g),s=s||mr(h)});let o=t.syncPointTree_.get(r);o?(s=s||mr(o),i=i||rr(o,ee())):(o=new Uw,t.syncPointTree_=t.syncPointTree_.set(r,o));let a;i!=null?a=!0:(a=!1,i=W.EMPTY_NODE,t.syncPointTree_.subtree(r).foreachChild((h,g)=>{const y=rr(g,ee());y&&(i=i.updateImmediateChild(h,y))}));const l=$w(o,e);if(!l&&!e._queryParams.loadsAllData()){const d=xu(e);b(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const h=XA();t.queryToTagMap.set(d,h),t.tagToQueryMap.set(h,d)}const u=Au(t.pendingWriteTree_,r);let c=UA(o,e,n,u,i,a);if(!l&&!s){const d=jw(o,e);c=c.concat(ZA(t,e,d))}return c}function Ou(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=rt(o,e),u=rr(a,l);if(u)return u});return Ow(i,e,s,n,!0)}function YA(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,c)=>{const d=rt(u,n);r=r||rr(c,d)});let i=t.syncPointTree_.get(n);i?r=r||rr(i,ee()):(i=new Uw,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new pr(r,!0,!1):null,a=Au(t.pendingWriteTree_,e._path),l=Ww(i,e,a,s?o.getNode():W.EMPTY_NODE,s);return bA(l)}function fs(t,e){return zw(e,t.syncPointTree_,null,Au(t.pendingWriteTree_,ee()))}function zw(t,e,n,r){if(Y(t.path))return Vw(t,e,n,r);{const i=e.get(ee());n==null&&i!=null&&(n=rr(i,ee()));let s=[];const o=K(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=xw(r,o);s=s.concat(zw(a,l,u,c))}return i&&(s=s.concat(mp(i,t,r,n))),s}}function Vw(t,e,n,r){const i=e.get(ee());n==null&&i!=null&&(n=rr(i,ee()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=xw(r,o),c=t.operationForChild(o);c&&(s=s.concat(Vw(c,a,l,u)))}),i&&(s=s.concat(mp(i,t,r,n))),s}function Hw(t,e){const n=e.query,r=zl(t,n);return{hashFn:()=>(AA(e)||W.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?GA(t,n._path,r):HA(t,n._path);{const s=$P(i,n);return dh(t,n,null,s)}}}}function zl(t,e){const n=xu(e);return t.queryToTagMap.get(n)}function xu(t){return t._path.toString()+"$"+t._queryIdentifier}function _p(t,e){return t.tagToQueryMap.get(e)}function vp(t){const e=t.indexOf("$");return b(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ie(t.substr(0,e))}}function yp(t,e,n){const r=t.syncPointTree_.get(e);b(r,"Missing sync point for query tag that we're tracking");const i=Au(t.pendingWriteTree_,e);return mp(r,n,i,null)}function QA(t){return t.fold((e,n,r)=>{if(n&&mr(n))return[bu(n)];{let i=[];return n&&(i=Bw(n)),We(r,(s,o)=>{i=i.concat(o)}),i}})}function so(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(jA())(t._repo,t._path):t}function JA(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=xu(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function XA(){return $A++}function ZA(t,e,n){const r=e._path,i=zl(t,e),s=Hw(t,n),o=t.listenProvider_.startListening(so(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)b(!mr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,d)=>{if(!Y(u)&&c&&mr(c))return[bu(c).query];{let h=[];return c&&(h=h.concat(Bw(c).map(g=>g.query))),We(d,(g,y)=>{h=h.concat(y)}),h}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(so(c),zl(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new wp(n)}node(){return this.node_}}class Ep{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ge(this.path_,e);return new Ep(this.syncTree_,n)}node(){return Ou(this.syncTree_,this.path_)}}const eb=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},u_=function(t,e,n){if(!t||typeof t!="object")return t;if(b(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return tb(t[".sv"],e,n);if(typeof t[".sv"]=="object")return nb(t[".sv"],e);b(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},tb=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:b(!1,"Unexpected server value: "+t)}},nb=function(t,e,n){t.hasOwnProperty("increment")||b(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&b(!1,"Unexpected increment value: "+r);const i=e.node();if(b(i!==null&&typeof i!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Gw=function(t,e,n,r){return Cp(e,new Ep(n,t),r)},Ip=function(t,e,n){return Cp(t,new wp(e),n)};function Cp(t,e,n){const r=t.getPriority().val(),i=u_(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=u_(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new xe(a,Ee(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new xe(i))),o.forEachChild(fe,(a,l)=>{const u=Cp(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Du(t,e){let n=e instanceof ie?e:new ie(e),r=t,i=K(n);for(;i!==null;){const s=Br(r.node.children,i)||{children:{},childCount:0};r=new Sp(i,r,s),n=ce(n),i=K(n)}return r}function ui(t){return t.node.value}function Tp(t,e){t.node.value=e,hh(t)}function qw(t){return t.node.childCount>0}function rb(t){return ui(t)===void 0&&!qw(t)}function Lu(t,e){We(t.node.children,(n,r)=>{e(new Sp(n,t,r))})}function Kw(t,e,n,r){n&&!r&&e(t),Lu(t,i=>{Kw(i,e,!0,r)}),n&&r&&e(t)}function ib(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function aa(t){return new ie(t.parent===null?t.name:aa(t.parent)+"/"+t.name)}function hh(t){t.parent!==null&&sb(t.parent,t.name,t)}function sb(t,e,n){const r=rb(n),i=It(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,hh(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,hh(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob=/[\[\].#$\/\u0000-\u001F\u007F]/,ab=/[\[\].#$\u0000-\u001F\u007F]/,Gc=10*1024*1024,Mu=function(t){return typeof t=="string"&&t.length!==0&&!ob.test(t)},Yw=function(t){return typeof t=="string"&&t.length!==0&&!ab.test(t)},lb=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Yw(t)},Fo=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Tu(t)||t&&typeof t=="object"&&It(t,".sv")},gn=function(t,e,n,r){r&&e===void 0||la(mt(t,"value"),e,n)},la=function(t,e,n){const r=n instanceof ie?new EN(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Cr(r));if(typeof e=="function")throw new Error(t+"contains a function "+Cr(r)+" with contents = "+e.toString());if(Tu(e))throw new Error(t+"contains "+e.toString()+" "+Cr(r));if(typeof e=="string"&&e.length>Gc/3&&cu(e)>Gc)throw new Error(t+"contains a string greater than "+Gc+" utf8 bytes "+Cr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(We(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Mu(o)))throw new Error(t+" contains an invalid key ("+o+") "+Cr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);IN(r,o),la(t,a,r),CN(r)}),i&&s)throw new Error(t+' contains ".value" child '+Cr(r)+" in addition to actual children.")}},ub=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Oo(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Mu(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(wN);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&Pt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},Qw=function(t,e,n,r){if(r&&e===void 0)return;const i=mt(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];We(e,(o,a)=>{const l=new ie(o);if(la(i,a,ge(n,l)),np(l)===".priority"&&!Fo(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),ub(i,s)},kp=function(t,e,n){if(!(n&&e===void 0)){if(Tu(e))throw new Error(mt(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Fo(e))throw new Error(mt(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},ua=function(t,e,n,r){if(!(r&&n===void 0)&&!Mu(n))throw new Error(mt(t,e)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},Uo=function(t,e,n,r){if(!(r&&n===void 0)&&!Yw(n))throw new Error(mt(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},cb=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Uo(t,e,n,r)},Nt=function(t,e){if(K(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Jw=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Mu(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!lb(n))throw new Error(mt(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Fu(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!rp(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Rp(t,e,n){Fu(t,n),Xw(t,r=>rp(r,e))}function Lt(t,e,n){Fu(t,n),Xw(t,r=>Pt(r,e)||Pt(e,r))}function Xw(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(hb(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function hb(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Mr&&Me("event: "+n.toString()),ds(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw="repo_interrupt",fb=25;class pb{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new db,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ll(),this.transactionQueueTree_=new Sp,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function mb(t,e,n){if(t.stats_=Zf(t.repoInfo_),t.forceRestClient_||VP())t.server_=new Dl(t.repoInfo_,(r,i,s,o)=>{c_(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>d_(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ne(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Pn(t.repoInfo_,e,(r,i,s,o)=>{c_(t,r,i,s,o)},r=>{d_(t,r)},r=>{gb(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=QP(t.repoInfo_,()=>new ZN(t.stats_,t.server_)),t.infoData_=new KN,t.infoSyncTree_=new a_({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=oa(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Pp(t,"connected",!1),t.serverSyncTree_=new a_({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);Lt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function eE(t){const n=t.infoData_.getNode(new ie(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ca(t){return eb({timestamp:eE(t)})}function c_(t,e,n,r,i){t.dataUpdateCount++;const s=new ie(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Cl(n,u=>Ee(u));o=KA(t.serverSyncTree_,s,l,i)}else{const l=Ee(n);o=qA(t.serverSyncTree_,s,l,i)}else if(r){const l=Cl(n,u=>Ee(u));o=VA(t.serverSyncTree_,s,l)}else{const l=Ee(n);o=oa(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Qi(t,s)),Lt(t.eventQueue_,a,o)}function d_(t,e){Pp(t,"connected",e),e===!1&&yb(t)}function gb(t,e){We(e,(n,r)=>{Pp(t,n,r)})}function Pp(t,e,n){const r=new ie("/.info/"+e),i=Ee(n);t.infoData_.updateSnapshot(r,i);const s=oa(t.infoSyncTree_,r,i);Lt(t.eventQueue_,r,s)}function Uu(t){return t.nextWriteId_++}function _b(t,e){const n=YA(t.serverSyncTree_,e);return n!=null?Promise.resolve(n):t.server_.get(e).then(r=>{const i=Ee(r).withIndex(e._queryParams.getIndex()),s=oa(t.serverSyncTree_,e._path,i);return Rp(t.eventQueue_,e._path,s),Promise.resolve(i)},r=>(ps(t,"get for query "+Ne(e)+" failed: "+r),Promise.reject(new Error(r))))}function Np(t,e,n,r,i){ps(t,"set",{path:e.toString(),value:n,priority:r});const s=ca(t),o=Ee(n,r),a=Ou(t.serverSyncTree_,e),l=Ip(o,a,s),u=Uu(t),c=gp(t.serverSyncTree_,e,l,u,!0);Fu(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(h,g)=>{const y=h==="ok";y||st("set at "+e+" failed: "+h);const w=Hn(t.serverSyncTree_,u,!y);Lt(t.eventQueue_,e,w),gr(t,i,h,g)});const d=bp(t,e);Qi(t,d),Lt(t.eventQueue_,d,[])}function vb(t,e,n,r){ps(t,"update",{path:e.toString(),value:n});let i=!0;const s=ca(t),o={};if(We(n,(a,l)=>{i=!1,o[a]=Gw(ge(e,a),Ee(l),t.serverSyncTree_,s)}),i)Me("update() called with empty data.  Don't do anything."),gr(t,r,"ok",void 0);else{const a=Uu(t),l=zA(t.serverSyncTree_,e,o,a);Fu(t.eventQueue_,l),t.server_.merge(e.toString(),n,(u,c)=>{const d=u==="ok";d||st("update at "+e+" failed: "+u);const h=Hn(t.serverSyncTree_,a,!d),g=h.length>0?Qi(t,e):e;Lt(t.eventQueue_,g,h),gr(t,r,u,c)}),We(n,u=>{const c=bp(t,ge(e,u));Qi(t,c)}),Lt(t.eventQueue_,e,[])}}function yb(t){ps(t,"onDisconnectEvents");const e=ca(t),n=Ll();sh(t.onDisconnect_,ee(),(i,s)=>{const o=Gw(i,s,t.serverSyncTree_,e);hs(n,i,o)});let r=[];sh(n,ee(),(i,s)=>{r=r.concat(oa(t.serverSyncTree_,i,s));const o=bp(t,i);Qi(t,o)}),t.onDisconnect_=Ll(),Lt(t.eventQueue_,ee(),r)}function wb(t,e,n){t.server_.onDisconnectCancel(e.toString(),(r,i)=>{r==="ok"&&ih(t.onDisconnect_,e),gr(t,n,r,i)})}function h_(t,e,n,r){const i=Ee(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(s,o)=>{s==="ok"&&hs(t.onDisconnect_,e,i),gr(t,r,s,o)})}function Eb(t,e,n,r,i){const s=Ee(n,r);t.server_.onDisconnectPut(e.toString(),s.val(!0),(o,a)=>{o==="ok"&&hs(t.onDisconnect_,e,s),gr(t,i,o,a)})}function Ib(t,e,n,r){if(Il(n)){Me("onDisconnect().update() called with empty data.  Don't do anything."),gr(t,r,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,s)=>{i==="ok"&&We(n,(o,a)=>{const l=Ee(a);hs(t.onDisconnect_,ge(e,o),l)}),gr(t,r,i,s)})}function Cb(t,e,n){let r;K(e._path)===".info"?r=l_(t.infoSyncTree_,e,n):r=l_(t.serverSyncTree_,e,n),Rp(t.eventQueue_,e._path,r)}function fh(t,e,n){let r;K(e._path)===".info"?r=dh(t.infoSyncTree_,e,n):r=dh(t.serverSyncTree_,e,n),Rp(t.eventQueue_,e._path,r)}function tE(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Zw)}function Sb(t){t.persistentConnection_&&t.persistentConnection_.resume(Zw)}function ps(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Me(n,...e)}function gr(t,e,n,r){e&&ds(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Tb(t,e,n,r,i,s){ps(t,"transaction on "+e);const o={path:e,update:n,onComplete:r,status:null,order:Q0(),applyLocally:s,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=Ap(t,e,void 0);o.currentInputSnapshot=a;const l=o.update(a.val());if(l===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{la("transaction failed: Data returned ",l,o.path),o.status=0;const u=Du(t.transactionQueueTree_,e),c=ui(u)||[];c.push(o),Tp(u,c);let d;typeof l=="object"&&l!==null&&It(l,".priority")?(d=Br(l,".priority"),b(Fo(d),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):d=(Ou(t.serverSyncTree_,e)||W.EMPTY_NODE).getPriority().val();const h=ca(t),g=Ee(l,d),y=Ip(g,a,h);o.currentOutputSnapshotRaw=g,o.currentOutputSnapshotResolved=y,o.currentWriteId=Uu(t);const w=gp(t.serverSyncTree_,e,y,o.currentWriteId,o.applyLocally);Lt(t.eventQueue_,e,w),Wu(t,t.transactionQueueTree_)}}function Ap(t,e,n){return Ou(t.serverSyncTree_,e,n)||W.EMPTY_NODE}function Wu(t,e=t.transactionQueueTree_){if(e||Bu(t,e),ui(e)){const n=rE(t,e);b(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&kb(t,aa(e),n)}else qw(e)&&Lu(e,n=>{Wu(t,n)})}function kb(t,e,n){const r=n.map(u=>u.currentWriteId),i=Ap(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];b(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=rt(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{ps(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,c=c.concat(Hn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Bu(t,Du(t.transactionQueueTree_,e)),Wu(t,t.transactionQueueTree_),Lt(t.eventQueue_,e,c);for(let h=0;h<d.length;h++)ds(d[h])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{st("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}Qi(t,e)}},o)}function Qi(t,e){const n=nE(t,e),r=aa(n),i=rE(t,n);return Rb(t,i,r),r}function Rb(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=rt(n,l.path);let c=!1,d;if(b(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,d=l.abortReason,i=i.concat(Hn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=fb)c=!0,d="maxretry",i=i.concat(Hn(t.serverSyncTree_,l.currentWriteId,!0));else{const h=Ap(t,l.path,o);l.currentInputSnapshot=h;const g=e[a].update(h.val());if(g!==void 0){la("transaction failed: Data returned ",g,l.path);let y=Ee(g);typeof g=="object"&&g!=null&&It(g,".priority")||(y=y.updatePriority(h.getPriority()));const m=l.currentWriteId,f=ca(t),p=Ip(y,h,f);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=p,l.currentWriteId=Uu(t),o.splice(o.indexOf(m),1),i=i.concat(gp(t.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),i=i.concat(Hn(t.serverSyncTree_,m,!0))}else c=!0,d="nodata",i=i.concat(Hn(t.serverSyncTree_,l.currentWriteId,!0))}Lt(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}Bu(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)ds(r[a]);Wu(t,t.transactionQueueTree_)}function nE(t,e){let n,r=t.transactionQueueTree_;for(n=K(e);n!==null&&ui(r)===void 0;)r=Du(r,n),e=ce(e),n=K(e);return r}function rE(t,e){const n=[];return iE(t,e,n),n.sort((r,i)=>r.order-i.order),n}function iE(t,e,n){const r=ui(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Lu(e,i=>{iE(t,i,n)})}function Bu(t,e){const n=ui(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Tp(e,n.length>0?n:void 0)}Lu(e,r=>{Bu(t,r)})}function bp(t,e){const n=aa(nE(t,e)),r=Du(t.transactionQueueTree_,e);return ib(r,i=>{qc(t,i)}),qc(t,r),Kw(r,i=>{qc(t,i)}),n}function qc(t,e){const n=ui(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(b(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(b(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Hn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Tp(e,void 0):n.length=s+1,Lt(t.eventQueue_,aa(e),i);for(let o=0;o<r.length;o++)ds(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pb(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Nb(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):st(`Invalid query segment '${n}' in query '${t}'`)}return e}const ph=function(t,e){const n=Ab(t),r=n.namespace;n.domain==="firebase.com"&&pn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&pn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||FP();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new cw(n.host,n.secure,r,e,i,"",r!==n.subdomain),path:new ie(n.pathString)}},Ab=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=Pb(t.substring(c,d)));const h=Nb(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const y=e.indexOf(".");r=e.substring(0,y).toLowerCase(),n=e.substring(y+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ne(this.snapshot.exportVal())}}class oE{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return b(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new dt;return wb(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Nt("OnDisconnect.remove",this._path);const e=new dt;return h_(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Nt("OnDisconnect.set",this._path),gn("OnDisconnect.set",e,this._path,!1);const n=new dt;return h_(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){Nt("OnDisconnect.setWithPriority",this._path),gn("OnDisconnect.setWithPriority",e,this._path,!1),kp("OnDisconnect.setWithPriority",n,!1);const r=new dt;return Eb(this._repo,this._path,e,n,r.wrapCallback(()=>{})),r.promise}update(e){Nt("OnDisconnect.update",this._path),Qw("OnDisconnect.update",e,this._path,!1);const n=new dt;return Ib(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return Y(this._path)?null:np(this._path)}get ref(){return new Ft(this._repo,this._path)}get _queryIdentifier(){const e=Jg(this._queryParams),n=Qf(e);return n==="{}"?"default":n}get _queryObject(){return Jg(this._queryParams)}isEqual(e){if(e=$(e),!(e instanceof gt))return!1;const n=this._repo===e._repo,r=rp(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+yN(this._path)}}function ju(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function wr(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===dn){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==On)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==mn)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===fe){if(e!=null&&!Fo(e)||n!=null&&!Fo(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(b(t.getIndex()instanceof op||t.getIndex()===ap,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function $u(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Ft extends gt{constructor(e,n){super(e,n,new Ru,!1)}get parent(){const e=yw(this._path);return e===null?null:new Ft(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class qr{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ie(e),r=Kr(this.ref,e);return new qr(this._node.getChild(n),r,fe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new qr(i,Kr(this.ref,r),fe)))}hasChild(e){const n=new ie(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function lE(t,e){return t=$(t),t._checkNotDeleted("ref"),e!==void 0?Kr(t._root,e):t._root}function f_(t,e){t=$(t),t._checkNotDeleted("refFromURL");const n=ph(e,t._repo.repoInfo_.nodeAdmin);Jw("refFromURL",n);const r=n.repoInfo;return!t._repo.repoInfo_.isCustomHost()&&r.host!==t._repo.repoInfo_.host&&pn("refFromURL: Host name does not match the current database: (found "+r.host+" but expected "+t._repo.repoInfo_.host+")"),lE(t,n.path.toString())}function Kr(t,e){return t=$(t),K(t._path)===null?cb("child","path",e,!1):Uo("child","path",e,!1),new Ft(t._repo,ge(t._path,e))}function Ob(t,e){t=$(t),Nt("push",t._path),gn("push",e,t._path,!0);const n=eE(t._repo),r=BN(n),i=Kr(t,r),s=Kr(t,r);let o;return e!=null?o=Op(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function xb(t){return Nt("remove",t._path),Op(t,null)}function Op(t,e){t=$(t),Nt("set",t._path),gn("set",e,t._path,!1);const n=new dt;return Np(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Db(t,e){t=$(t),Nt("setPriority",t._path),kp("setPriority",e,!1);const n=new dt;return Np(t._repo,ge(t._path,".priority"),e,null,n.wrapCallback(()=>{})),n.promise}function Lb(t,e,n){if(Nt("setWithPriority",t._path),gn("setWithPriority",e,t._path,!1),kp("setWithPriority",n,!1),t.key===".length"||t.key===".keys")throw"setWithPriority failed: "+t.key+" is a read-only object.";const r=new dt;return Np(t._repo,t._path,e,n,r.wrapCallback(()=>{})),r.promise}function Mb(t,e){Qw("update",e,t._path,!1);const n=new dt;return vb(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Fb(t){return t=$(t),_b(t._repo,t).then(e=>new qr(e,new Ft(t._repo,t._path),t._queryParams.getIndex()))}class zu{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new sE("value",this,new qr(e.snapshotNode,new Ft(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new oE(this,e,n):null}matches(e){return e instanceof zu?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Vu{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new oE(this,e,n):null}createEvent(e,n){b(e.childName!=null,"Child events should have a childName.");const r=Kr(new Ft(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new sE(e.type,this,new qr(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Vu?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function da(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(c,d)=>{fh(t._repo,t,a),l(c,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new aE(n,s||void 0),a=e==="value"?new zu(o):new Vu(e,o);return Cb(t._repo,t,a),()=>fh(t._repo,t,a)}function mh(t,e,n,r){return da(t,"value",e,n,r)}function p_(t,e,n,r){return da(t,"child_added",e,n,r)}function m_(t,e,n,r){return da(t,"child_changed",e,n,r)}function g_(t,e,n,r){return da(t,"child_moved",e,n,r)}function __(t,e,n,r){return da(t,"child_removed",e,n,r)}function v_(t,e,n){let r=null;const i=n?new aE(n):null;e==="value"?r=new zu(i):e&&(r=new Vu(e,i)),fh(t._repo,t,r)}class Jt{}class uE extends Jt{constructor(e,n){super();this._value=e,this._key=n}_apply(e){gn("endAt",this._value,e._path,!0);const n=rh(e._queryParams,this._value,this._key);if($u(n),wr(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new gt(e._repo,e._path,n,e._orderByCalled)}}function Ub(t,e){return ua("endAt","key",e,!0),new uE(t,e)}class Wb extends Jt{constructor(e,n){super();this._value=e,this._key=n}_apply(e){gn("endBefore",this._value,e._path,!1);const n=qN(e._queryParams,this._value,this._key);if($u(n),wr(n),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new gt(e._repo,e._path,n,e._orderByCalled)}}function Bb(t,e){return ua("endBefore","key",e,!0),new Wb(t,e)}class cE extends Jt{constructor(e,n){super();this._value=e,this._key=n}_apply(e){gn("startAt",this._value,e._path,!0);const n=nh(e._queryParams,this._value,this._key);if($u(n),wr(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new gt(e._repo,e._path,n,e._orderByCalled)}}function jb(t=null,e){return ua("startAt","key",e,!0),new cE(t,e)}class $b extends Jt{constructor(e,n){super();this._value=e,this._key=n}_apply(e){gn("startAfter",this._value,e._path,!1);const n=GN(e._queryParams,this._value,this._key);if($u(n),wr(n),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new gt(e._repo,e._path,n,e._orderByCalled)}}function zb(t,e){return ua("startAfter","key",e,!0),new $b(t,e)}class Vb extends Jt{constructor(e){super();this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new gt(e._repo,e._path,VN(e._queryParams,this._limit),e._orderByCalled)}}function Hb(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new Vb(t)}class Gb extends Jt{constructor(e){super();this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new gt(e._repo,e._path,HN(e._queryParams,this._limit),e._orderByCalled)}}function qb(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new Gb(t)}class Kb extends Jt{constructor(e){super();this._path=e}_apply(e){ju(e,"orderByChild");const n=new ie(this._path);if(Y(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new op(n),i=Pu(e._queryParams,r);return wr(i),new gt(e._repo,e._path,i,!0)}}function Yb(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return Uo("orderByChild","path",t,!1),new Kb(t)}class Qb extends Jt{_apply(e){ju(e,"orderByKey");const n=Pu(e._queryParams,dn);return wr(n),new gt(e._repo,e._path,n,!0)}}function Jb(){return new Qb}class Xb extends Jt{_apply(e){ju(e,"orderByPriority");const n=Pu(e._queryParams,fe);return wr(n),new gt(e._repo,e._path,n,!0)}}function Zb(){return new Xb}class eO extends Jt{_apply(e){ju(e,"orderByValue");const n=Pu(e._queryParams,ap);return wr(n),new gt(e._repo,e._path,n,!0)}}function tO(){return new eO}class nO extends Jt{constructor(e,n){super();this._value=e,this._key=n}_apply(e){if(gn("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new uE(this._value,this._key)._apply(new cE(this._value,this._key)._apply(e))}}function rO(t,e){return ua("equalTo","key",e,!0),new nO(t,e)}function jt(t,...e){let n=$(t);for(const r of e)n=r._apply(n);return n}LA(Ft);BA(Ft);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iO="FIREBASE_DATABASE_EMULATOR_HOST",gh={};let sO=!1;function oO(t,e,n,r){t.repoInfo_=new cw(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),r&&(t.authTokenProvider_=r)}function dE(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||pn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Me("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=ph(s,i),a=o.repoInfo,l,u;typeof process!="undefined"&&(u=process.env[iO]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=ph(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new Ui(Ui.OWNER):new GP(t.name,t.options,e);Jw("Invalid Firebase Database URL",o),Y(o.path)||pn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=lO(a,t,c,new HP(t.name,n));return new uO(d,t)}function aO(t,e){const n=gh[e];(!n||n[t.key]!==t)&&pn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),tE(t),delete n[t.key]}function lO(t,e,n,r){let i=gh[e.name];i||(i={},gh[e.name]=i);let s=i[t.toURLString()];return s&&pn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new pb(t,sO,n,r),i[t.toURLString()]=s,s}class uO{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(mb(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ft(this._repo,ee())),this._rootInternal}_delete(){return this._rootInternal!==null&&(aO(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&pn("Cannot call "+e+" on a deleted database.")}}function cO(t,e,n,r={}){t=$(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&pn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&pn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Ui(Ui.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:CS(r.mockUserToken,t.app.options.projectId);s=new Ui(o)}oO(i,e,n,s)}function dO(t){t=$(t),t._checkNotDeleted("goOffline"),tE(t._repo)}function hO(t){t=$(t),t._checkNotDeleted("goOnline"),Sb(t._repo)}function fO(t,e){X0(t,e)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pO(t){K0(si),hr(new Yt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return dE(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),cn(xg,Dg,t),cn(xg,Dg,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mO={".sv":"timestamp"};function gO(){return mO}function _O(t){return{".sv":{increment:t}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function yO(t,e,n){var r;if(t=$(t),Nt("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";const i=(r=n==null?void 0:n.applyLocally)!==null&&r!==void 0?r:!0,s=new dt,o=(l,u,c)=>{let d=null;l?s.reject(l):(d=new qr(c,new Ft(t._repo,t._path),fe),s.resolve(new vO(u,d)))},a=mh(t,()=>{});return Tb(t._repo,t._path,e,o,a,i),s.promise}Pn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Pn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};pO();const wO="@firebase/database-compat",EO="0.1.5";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IO=new Qo("@firebase/database-compat"),hE=function(t){const e="FIREBASE WARNING: "+t;IO.warn(e)};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CO=function(t,e,n,r){if(!(r&&n===void 0)&&typeof n!="boolean")throw new Error(mt(t,e)+"must be a boolean.")},SO=function(t,e,n){if(!(n&&e===void 0))switch(e){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(mt(t,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TO{constructor(e){this._delegate=e}cancel(e){B("OnDisconnect.cancel",0,1,arguments.length),De("OnDisconnect.cancel","onComplete",e,!0);const n=this._delegate.cancel();return e&&n.then(()=>e(null),r=>e(r)),n}remove(e){B("OnDisconnect.remove",0,1,arguments.length),De("OnDisconnect.remove","onComplete",e,!0);const n=this._delegate.remove();return e&&n.then(()=>e(null),r=>e(r)),n}set(e,n){B("OnDisconnect.set",1,2,arguments.length),De("OnDisconnect.set","onComplete",n,!0);const r=this._delegate.set(e);return n&&r.then(()=>n(null),i=>n(i)),r}setWithPriority(e,n,r){B("OnDisconnect.setWithPriority",2,3,arguments.length),De("OnDisconnect.setWithPriority","onComplete",r,!0);const i=this._delegate.setWithPriority(e,n);return r&&i.then(()=>r(null),s=>r(s)),i}update(e,n){if(B("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){const i={};for(let s=0;s<e.length;++s)i[""+s]=e[s];e=i,hE("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}De("OnDisconnect.update","onComplete",n,!0);const r=this._delegate.update(e);return n&&r.then(()=>n(null),i=>n(i)),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kO{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return B("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,n){this._database=e,this._delegate=n}val(){return B("DataSnapshot.val",0,0,arguments.length),this._delegate.val()}exportVal(){return B("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()}toJSON(){return B("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()}exists(){return B("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()}child(e){return B("DataSnapshot.child",0,1,arguments.length),e=String(e),Uo("DataSnapshot.child","path",e,!1),new ir(this._database,this._delegate.child(e))}hasChild(e){return B("DataSnapshot.hasChild",1,1,arguments.length),Uo("DataSnapshot.hasChild","path",e,!1),this._delegate.hasChild(e)}getPriority(){return B("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority}forEach(e){return B("DataSnapshot.forEach",1,1,arguments.length),De("DataSnapshot.forEach","action",e,!1),this._delegate.forEach(n=>e(new ir(this._database,n)))}hasChildren(){return B("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()}get key(){return this._delegate.key}numChildren(){return B("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size}getRef(){return B("DataSnapshot.ref",0,0,arguments.length),new vt(this._database,this._delegate.ref)}get ref(){return this.getRef()}}class He{constructor(e,n){this.database=e,this._delegate=n}on(e,n,r,i){var s;B("Query.on",2,4,arguments.length),De("Query.on","callback",n,!1);const o=He.getCancelAndContextArgs_("Query.on",r,i),a=(u,c)=>{n.call(o.context,new ir(this.database,u),c)};a.userCallback=n,a.context=o.context;const l=(s=o.cancel)===null||s===void 0?void 0:s.bind(o.context);switch(e){case"value":return mh(this._delegate,a,l),n;case"child_added":return p_(this._delegate,a,l),n;case"child_removed":return __(this._delegate,a,l),n;case"child_changed":return m_(this._delegate,a,l),n;case"child_moved":return g_(this._delegate,a,l),n;default:throw new Error(mt("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}off(e,n,r){if(B("Query.off",0,3,arguments.length),SO("Query.off",e,!0),De("Query.off","callback",n,!0),dg("Query.off","context",r,!0),n){const i=()=>{};i.userCallback=n,i.context=r,v_(this._delegate,e,i)}else v_(this._delegate,e)}get(){return Fb(this._delegate).then(e=>new ir(this.database,e))}once(e,n,r,i){B("Query.once",1,4,arguments.length),De("Query.once","callback",n,!0);const s=He.getCancelAndContextArgs_("Query.once",r,i),o=new dt,a=(u,c)=>{const d=new ir(this.database,u);n&&n.call(s.context,d,c),o.resolve(d)};a.userCallback=n,a.context=s.context;const l=u=>{s.cancel&&s.cancel.call(s.context,u),o.reject(u)};switch(e){case"value":mh(this._delegate,a,l,{onlyOnce:!0});break;case"child_added":p_(this._delegate,a,l,{onlyOnce:!0});break;case"child_removed":__(this._delegate,a,l,{onlyOnce:!0});break;case"child_changed":m_(this._delegate,a,l,{onlyOnce:!0});break;case"child_moved":g_(this._delegate,a,l,{onlyOnce:!0});break;default:throw new Error(mt("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return o.promise}limitToFirst(e){return B("Query.limitToFirst",1,1,arguments.length),new He(this.database,jt(this._delegate,Hb(e)))}limitToLast(e){return B("Query.limitToLast",1,1,arguments.length),new He(this.database,jt(this._delegate,qb(e)))}orderByChild(e){return B("Query.orderByChild",1,1,arguments.length),new He(this.database,jt(this._delegate,Yb(e)))}orderByKey(){return B("Query.orderByKey",0,0,arguments.length),new He(this.database,jt(this._delegate,Jb()))}orderByPriority(){return B("Query.orderByPriority",0,0,arguments.length),new He(this.database,jt(this._delegate,Zb()))}orderByValue(){return B("Query.orderByValue",0,0,arguments.length),new He(this.database,jt(this._delegate,tO()))}startAt(e=null,n){return B("Query.startAt",0,2,arguments.length),new He(this.database,jt(this._delegate,jb(e,n)))}startAfter(e=null,n){return B("Query.startAfter",0,2,arguments.length),new He(this.database,jt(this._delegate,zb(e,n)))}endAt(e=null,n){return B("Query.endAt",0,2,arguments.length),new He(this.database,jt(this._delegate,Ub(e,n)))}endBefore(e=null,n){return B("Query.endBefore",0,2,arguments.length),new He(this.database,jt(this._delegate,Bb(e,n)))}equalTo(e,n){return B("Query.equalTo",1,2,arguments.length),new He(this.database,jt(this._delegate,rO(e,n)))}toString(){return B("Query.toString",0,0,arguments.length),this._delegate.toString()}toJSON(){return B("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()}isEqual(e){if(B("Query.isEqual",1,1,arguments.length),!(e instanceof He)){const n="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(n)}return this._delegate.isEqual(e._delegate)}static getCancelAndContextArgs_(e,n,r){const i={cancel:void 0,context:void 0};if(n&&r)i.cancel=n,De(e,"cancel",i.cancel,!0),i.context=r,dg(e,"context",i.context,!0);else if(n)if(typeof n=="object"&&n!==null)i.context=n;else if(typeof n=="function")i.cancel=n;else throw new Error(mt(e,"cancelOrContext")+" must either be a cancel callback or a context object.");return i}get ref(){return new vt(this.database,new Ft(this._delegate._repo,this._delegate._path))}}class vt extends He{constructor(e,n){super(e,new gt(n._repo,n._path,new Ru,!1));this.database=e,this._delegate=n}getKey(){return B("Reference.key",0,0,arguments.length),this._delegate.key}child(e){return B("Reference.child",1,1,arguments.length),typeof e=="number"&&(e=String(e)),new vt(this.database,Kr(this._delegate,e))}getParent(){B("Reference.parent",0,0,arguments.length);const e=this._delegate.parent;return e?new vt(this.database,e):null}getRoot(){return B("Reference.root",0,0,arguments.length),new vt(this.database,this._delegate.root)}set(e,n){B("Reference.set",1,2,arguments.length),De("Reference.set","onComplete",n,!0);const r=Op(this._delegate,e);return n&&r.then(()=>n(null),i=>n(i)),r}update(e,n){if(B("Reference.update",1,2,arguments.length),Array.isArray(e)){const i={};for(let s=0;s<e.length;++s)i[""+s]=e[s];e=i,hE("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Nt("Reference.update",this._delegate._path),De("Reference.update","onComplete",n,!0);const r=Mb(this._delegate,e);return n&&r.then(()=>n(null),i=>n(i)),r}setWithPriority(e,n,r){B("Reference.setWithPriority",2,3,arguments.length),De("Reference.setWithPriority","onComplete",r,!0);const i=Lb(this._delegate,e,n);return r&&i.then(()=>r(null),s=>r(s)),i}remove(e){B("Reference.remove",0,1,arguments.length),De("Reference.remove","onComplete",e,!0);const n=xb(this._delegate);return e&&n.then(()=>e(null),r=>e(r)),n}transaction(e,n,r){B("Reference.transaction",1,3,arguments.length),De("Reference.transaction","transactionUpdate",e,!1),De("Reference.transaction","onComplete",n,!0),CO("Reference.transaction","applyLocally",r,!0);const i=yO(this._delegate,e,{applyLocally:r}).then(s=>new kO(s.committed,new ir(this.database,s.snapshot)));return n&&i.then(s=>n(null,s.committed,s.snapshot),s=>n(s,!1,null)),i}setPriority(e,n){B("Reference.setPriority",1,2,arguments.length),De("Reference.setPriority","onComplete",n,!0);const r=Db(this._delegate,e);return n&&r.then(()=>n(null),i=>n(i)),r}push(e,n){B("Reference.push",0,2,arguments.length),De("Reference.push","onComplete",n,!0);const r=Ob(this._delegate,e),i=r.then(o=>new vt(this.database,o));n&&i.then(()=>n(null),o=>n(o));const s=new vt(this.database,r);return s.then=i.then.bind(i),s.catch=i.catch.bind(i,void 0),s}onDisconnect(){return Nt("Reference.onDisconnect",this._delegate._path),new TO(new bb(this._delegate._repo,this._delegate._path))}get key(){return this.getKey()}get parent(){return this.getParent()}get root(){return this.getRoot()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,n){this._delegate=e,this.app=n,this.INTERNAL={delete:()=>this._delegate._delete()}}useEmulator(e,n,r={}){cO(this._delegate,e,n,r)}ref(e){if(B("database.ref",0,1,arguments.length),e instanceof vt){const n=f_(this._delegate,e.toString());return new vt(this,n)}else{const n=lE(this._delegate,e);return new vt(this,n)}}refFromURL(e){B("database.refFromURL",1,1,arguments.length);const r=f_(this._delegate,e);return new vt(this,r)}goOffline(){return B("database.goOffline",0,0,arguments.length),dO(this._delegate)}goOnline(){return B("database.goOnline",0,0,arguments.length),hO(this._delegate)}}Wo.ServerValue={TIMESTAMP:gO(),increment:t=>_O(t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RO({app:t,url:e,version:n,customAuthImpl:r,namespace:i,nodeAdmin:s=!1}){K0(n);const o=new Fy("auth-internal",new Uy("database-standalone"));return o.setComponent(new Yt("auth-internal",()=>r,"PRIVATE")),{instance:new Wo(dE(t,o,void 0,e,s),t),namespace:i}}var PO=Object.freeze({__proto__:null,initStandalone:RO});/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NO=Wo.ServerValue;function AO(t){t.INTERNAL.registerComponent(new Yt("database-compat",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app-compat").getImmediate(),i=e.getProvider("database").getImmediate({identifier:n});return new Wo(i,r)},"PUBLIC").setServiceProps({Reference:vt,Query:He,Database:Wo,DataSnapshot:ir,enableLogging:fO,INTERNAL:PO,ServerValue:NO}).setMultipleInstances(!0)),t.registerVersion(wO,EO)}AO(Xo);var Hu={exports:{}},ha={};/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bO=N.exports,fE=60103;ha.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var y_=Symbol.for;fE=y_("react.element"),ha.Fragment=y_("react.fragment")}var OO=bO.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xO=Object.prototype.hasOwnProperty,DO={key:!0,ref:!0,__self:!0,__source:!0};function pE(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)xO.call(e,r)&&!DO.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:fE,type:t,key:s,ref:o,props:i,_owner:OO.current}}ha.jsx=pE;ha.jsxs=pE;Hu.exports=ha;const LO=Hu.exports.jsx,Zx=Hu.exports.jsxs,MO=Hu.exports.Fragment;var Gu={exports:{}},ae={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var je=typeof Symbol=="function"&&Symbol.for,xp=je?Symbol.for("react.element"):60103,Dp=je?Symbol.for("react.portal"):60106,qu=je?Symbol.for("react.fragment"):60107,Ku=je?Symbol.for("react.strict_mode"):60108,Yu=je?Symbol.for("react.profiler"):60114,Qu=je?Symbol.for("react.provider"):60109,Ju=je?Symbol.for("react.context"):60110,Lp=je?Symbol.for("react.async_mode"):60111,Xu=je?Symbol.for("react.concurrent_mode"):60111,Zu=je?Symbol.for("react.forward_ref"):60112,ec=je?Symbol.for("react.suspense"):60113,FO=je?Symbol.for("react.suspense_list"):60120,tc=je?Symbol.for("react.memo"):60115,nc=je?Symbol.for("react.lazy"):60116,UO=je?Symbol.for("react.block"):60121,WO=je?Symbol.for("react.fundamental"):60117,BO=je?Symbol.for("react.responder"):60118,jO=je?Symbol.for("react.scope"):60119;function St(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case xp:switch(t=t.type,t){case Lp:case Xu:case qu:case Yu:case Ku:case ec:return t;default:switch(t=t&&t.$$typeof,t){case Ju:case Zu:case nc:case tc:case Qu:return t;default:return e}}case Dp:return e}}}function mE(t){return St(t)===Xu}ae.AsyncMode=Lp;ae.ConcurrentMode=Xu;ae.ContextConsumer=Ju;ae.ContextProvider=Qu;ae.Element=xp;ae.ForwardRef=Zu;ae.Fragment=qu;ae.Lazy=nc;ae.Memo=tc;ae.Portal=Dp;ae.Profiler=Yu;ae.StrictMode=Ku;ae.Suspense=ec;ae.isAsyncMode=function(t){return mE(t)||St(t)===Lp};ae.isConcurrentMode=mE;ae.isContextConsumer=function(t){return St(t)===Ju};ae.isContextProvider=function(t){return St(t)===Qu};ae.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===xp};ae.isForwardRef=function(t){return St(t)===Zu};ae.isFragment=function(t){return St(t)===qu};ae.isLazy=function(t){return St(t)===nc};ae.isMemo=function(t){return St(t)===tc};ae.isPortal=function(t){return St(t)===Dp};ae.isProfiler=function(t){return St(t)===Yu};ae.isStrictMode=function(t){return St(t)===Ku};ae.isSuspense=function(t){return St(t)===ec};ae.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===qu||t===Xu||t===Yu||t===Ku||t===ec||t===FO||typeof t=="object"&&t!==null&&(t.$$typeof===nc||t.$$typeof===tc||t.$$typeof===Qu||t.$$typeof===Ju||t.$$typeof===Zu||t.$$typeof===WO||t.$$typeof===BO||t.$$typeof===jO||t.$$typeof===UO)};ae.typeOf=St;Gu.exports=ae;function $O(t){function e(R,S,x,F,E){for(var Q=0,D=0,se=0,ne=0,oe,G,$e=0,at=0,Z,Je=Z=oe=0,re=0,ze=0,ms=0,Ve=0,ma=x.length,gs=ma-1,Wt,V="",Te="",ac="",lc="",Fn;re<ma;){if(G=x.charCodeAt(re),re===gs&&D+ne+se+Q!==0&&(D!==0&&(G=D===47?10:47),ne=se=Q=0,ma++,gs++),D+ne+se+Q===0){if(re===gs&&(0<ze&&(V=V.replace(h,"")),0<V.trim().length)){switch(G){case 32:case 9:case 59:case 13:case 10:break;default:V+=x.charAt(re)}G=59}switch(G){case 123:for(V=V.trim(),oe=V.charCodeAt(0),Z=1,Ve=++re;re<ma;){switch(G=x.charCodeAt(re)){case 123:Z++;break;case 125:Z--;break;case 47:switch(G=x.charCodeAt(re+1)){case 42:case 47:e:{for(Je=re+1;Je<gs;++Je)switch(x.charCodeAt(Je)){case 47:if(G===42&&x.charCodeAt(Je-1)===42&&re+2!==Je){re=Je+1;break e}break;case 10:if(G===47){re=Je+1;break e}}re=Je}}break;case 91:G++;case 40:G++;case 34:case 39:for(;re++<gs&&x.charCodeAt(re)!==G;);}if(Z===0)break;re++}switch(Z=x.substring(Ve,re),oe===0&&(oe=(V=V.replace(d,"").trim()).charCodeAt(0)),oe){case 64:switch(0<ze&&(V=V.replace(h,"")),G=V.charCodeAt(1),G){case 100:case 109:case 115:case 45:ze=S;break;default:ze=ye}if(Z=e(S,ze,Z,G,E+1),Ve=Z.length,0<Ie&&(ze=n(ye,V,ms),Fn=a(3,Z,ze,S,H,j,Ve,G,E,F),V=ze.join(""),Fn!==void 0&&(Ve=(Z=Fn.trim()).length)===0&&(G=0,Z="")),0<Ve)switch(G){case 115:V=V.replace(T,o);case 100:case 109:case 45:Z=V+"{"+Z+"}";break;case 107:V=V.replace(p,"$1 $2"),Z=V+"{"+Z+"}",Z=te===1||te===2&&s("@"+Z,3)?"@-webkit-"+Z+"@"+Z:"@"+Z;break;default:Z=V+Z,F===112&&(Z=(Te+=Z,""))}else Z="";break;default:Z=e(S,n(S,V,ms),Z,F,E+1)}ac+=Z,Z=ms=ze=Je=oe=0,V="",G=x.charCodeAt(++re);break;case 125:case 59:if(V=(0<ze?V.replace(h,""):V).trim(),1<(Ve=V.length))switch(Je===0&&(oe=V.charCodeAt(0),oe===45||96<oe&&123>oe)&&(Ve=(V=V.replace(" ",":")).length),0<Ie&&(Fn=a(1,V,S,R,H,j,Te.length,F,E,F))!==void 0&&(Ve=(V=Fn.trim()).length)===0&&(V="\0\0"),oe=V.charCodeAt(0),G=V.charCodeAt(1),oe){case 0:break;case 64:if(G===105||G===99){lc+=V+x.charAt(re);break}default:V.charCodeAt(Ve-1)!==58&&(Te+=i(V,oe,G,V.charCodeAt(2)))}ms=ze=Je=oe=0,V="",G=x.charCodeAt(++re)}}switch(G){case 13:case 10:D===47?D=0:1+oe===0&&F!==107&&0<V.length&&(ze=1,V+="\0"),0<Ie*Tt&&a(0,V,S,R,H,j,Te.length,F,E,F),j=1,H++;break;case 59:case 125:if(D+ne+se+Q===0){j++;break}default:switch(j++,Wt=x.charAt(re),G){case 9:case 32:if(ne+Q+D===0)switch($e){case 44:case 58:case 9:case 32:Wt="";break;default:G!==32&&(Wt=" ")}break;case 0:Wt="\\0";break;case 12:Wt="\\f";break;case 11:Wt="\\v";break;case 38:ne+D+Q===0&&(ze=ms=1,Wt="\f"+Wt);break;case 108:if(ne+D+Q+le===0&&0<Je)switch(re-Je){case 2:$e===112&&x.charCodeAt(re-3)===58&&(le=$e);case 8:at===111&&(le=at)}break;case 58:ne+D+Q===0&&(Je=re);break;case 44:D+se+ne+Q===0&&(ze=1,Wt+="\r");break;case 34:case 39:D===0&&(ne=ne===G?0:ne===0?G:ne);break;case 91:ne+D+se===0&&Q++;break;case 93:ne+D+se===0&&Q--;break;case 41:ne+D+Q===0&&se--;break;case 40:if(ne+D+Q===0){if(oe===0)switch(2*$e+3*at){case 533:break;default:oe=1}se++}break;case 64:D+se+ne+Q+Je+Z===0&&(Z=1);break;case 42:case 47:if(!(0<ne+Q+se))switch(D){case 0:switch(2*G+3*x.charCodeAt(re+1)){case 235:D=47;break;case 220:Ve=re,D=42}break;case 42:G===47&&$e===42&&Ve+2!==re&&(x.charCodeAt(Ve+2)===33&&(Te+=x.substring(Ve,re+1)),Wt="",D=0)}}D===0&&(V+=Wt)}at=$e,$e=G,re++}if(Ve=Te.length,0<Ve){if(ze=S,0<Ie&&(Fn=a(2,Te,ze,R,H,j,Ve,F,E,F),Fn!==void 0&&(Te=Fn).length===0))return lc+Te+ac;if(Te=ze.join(",")+"{"+Te+"}",te*le!==0){switch(te!==2||s(Te,2)||(le=0),le){case 111:Te=Te.replace(v,":-moz-$1")+Te;break;case 112:Te=Te.replace(_,"::-webkit-input-$1")+Te.replace(_,"::-moz-$1")+Te.replace(_,":-ms-input-$1")+Te}le=0}}return lc+Te+ac}function n(R,S,x){var F=S.trim().split(m);S=F;var E=F.length,Q=R.length;switch(Q){case 0:case 1:var D=0;for(R=Q===0?"":R[0]+" ";D<E;++D)S[D]=r(R,S[D],x).trim();break;default:var se=D=0;for(S=[];D<E;++D)for(var ne=0;ne<Q;++ne)S[se++]=r(R[ne]+" ",F[D],x).trim()}return S}function r(R,S,x){var F=S.charCodeAt(0);switch(33>F&&(F=(S=S.trim()).charCodeAt(0)),F){case 38:return S.replace(f,"$1"+R.trim());case 58:return R.trim()+S.replace(f,"$1"+R.trim());default:if(0<1*x&&0<S.indexOf("\f"))return S.replace(f,(R.charCodeAt(0)===58?"":"$1")+R.trim())}return R+S}function i(R,S,x,F){var E=R+";",Q=2*S+3*x+4*F;if(Q===944){R=E.indexOf(":",9)+1;var D=E.substring(R,E.length-1).trim();return D=E.substring(0,R).trim()+D+";",te===1||te===2&&s(D,1)?"-webkit-"+D+D:D}if(te===0||te===2&&!s(E,1))return E;switch(Q){case 1015:return E.charCodeAt(10)===97?"-webkit-"+E+E:E;case 951:return E.charCodeAt(3)===116?"-webkit-"+E+E:E;case 963:return E.charCodeAt(5)===110?"-webkit-"+E+E:E;case 1009:if(E.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+E+E;case 978:return"-webkit-"+E+"-moz-"+E+E;case 1019:case 983:return"-webkit-"+E+"-moz-"+E+"-ms-"+E+E;case 883:if(E.charCodeAt(8)===45)return"-webkit-"+E+E;if(0<E.indexOf("image-set(",11))return E.replace(q,"$1-webkit-$2")+E;break;case 932:if(E.charCodeAt(4)===45)switch(E.charCodeAt(5)){case 103:return"-webkit-box-"+E.replace("-grow","")+"-webkit-"+E+"-ms-"+E.replace("grow","positive")+E;case 115:return"-webkit-"+E+"-ms-"+E.replace("shrink","negative")+E;case 98:return"-webkit-"+E+"-ms-"+E.replace("basis","preferred-size")+E}return"-webkit-"+E+"-ms-"+E+E;case 964:return"-webkit-"+E+"-ms-flex-"+E+E;case 1023:if(E.charCodeAt(8)!==99)break;return D=E.substring(E.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+D+"-webkit-"+E+"-ms-flex-pack"+D+E;case 1005:return y.test(E)?E.replace(g,":-webkit-")+E.replace(g,":-moz-")+E:E;case 1e3:switch(D=E.substring(13).trim(),S=D.indexOf("-")+1,D.charCodeAt(0)+D.charCodeAt(S)){case 226:D=E.replace(I,"tb");break;case 232:D=E.replace(I,"tb-rl");break;case 220:D=E.replace(I,"lr");break;default:return E}return"-webkit-"+E+"-ms-"+D+E;case 1017:if(E.indexOf("sticky",9)===-1)break;case 975:switch(S=(E=R).length-10,D=(E.charCodeAt(S)===33?E.substring(0,S):E).substring(R.indexOf(":",7)+1).trim(),Q=D.charCodeAt(0)+(D.charCodeAt(7)|0)){case 203:if(111>D.charCodeAt(8))break;case 115:E=E.replace(D,"-webkit-"+D)+";"+E;break;case 207:case 102:E=E.replace(D,"-webkit-"+(102<Q?"inline-":"")+"box")+";"+E.replace(D,"-webkit-"+D)+";"+E.replace(D,"-ms-"+D+"box")+";"+E}return E+";";case 938:if(E.charCodeAt(5)===45)switch(E.charCodeAt(6)){case 105:return D=E.replace("-items",""),"-webkit-"+E+"-webkit-box-"+D+"-ms-flex-"+D+E;case 115:return"-webkit-"+E+"-ms-flex-item-"+E.replace(P,"")+E;default:return"-webkit-"+E+"-ms-flex-line-pack"+E.replace("align-content","").replace(P,"")+E}break;case 973:case 989:if(E.charCodeAt(3)!==45||E.charCodeAt(4)===122)break;case 931:case 953:if(M.test(R)===!0)return(D=R.substring(R.indexOf(":")+1)).charCodeAt(0)===115?i(R.replace("stretch","fill-available"),S,x,F).replace(":fill-available",":stretch"):E.replace(D,"-webkit-"+D)+E.replace(D,"-moz-"+D.replace("fill-",""))+E;break;case 962:if(E="-webkit-"+E+(E.charCodeAt(5)===102?"-ms-"+E:"")+E,x+F===211&&E.charCodeAt(13)===105&&0<E.indexOf("transform",10))return E.substring(0,E.indexOf(";",27)+1).replace(w,"$1-webkit-$2")+E}return E}function s(R,S){var x=R.indexOf(S===1?":":"{"),F=R.substring(0,S!==3?x:10);return x=R.substring(x+1,R.length-1),Ut(S!==2?F:F.replace(C,"$1"),x,S)}function o(R,S){var x=i(S,S.charCodeAt(0),S.charCodeAt(1),S.charCodeAt(2));return x!==S+";"?x.replace(k," or ($1)").substring(4):"("+S+")"}function a(R,S,x,F,E,Q,D,se,ne,oe){for(var G=0,$e=S,at;G<Ie;++G)switch(at=we[G].call(c,R,$e,x,F,E,Q,D,se,ne,oe)){case void 0:case!1:case!0:case null:break;default:$e=at}if($e!==S)return $e}function l(R){switch(R){case void 0:case null:Ie=we.length=0;break;default:if(typeof R=="function")we[Ie++]=R;else if(typeof R=="object")for(var S=0,x=R.length;S<x;++S)l(R[S]);else Tt=!!R|0}return l}function u(R){return R=R.prefix,R!==void 0&&(Ut=null,R?typeof R!="function"?te=1:(te=2,Ut=R):te=0),u}function c(R,S){var x=R;if(33>x.charCodeAt(0)&&(x=x.trim()),L=x,x=[L],0<Ie){var F=a(-1,S,x,x,H,j,0,0,0,0);F!==void 0&&typeof F=="string"&&(S=F)}var E=e(ye,x,S,0,0);return 0<Ie&&(F=a(-2,E,x,x,H,j,E.length,0,0,0),F!==void 0&&(E=F)),L="",le=0,j=H=1,E}var d=/^\0+/g,h=/[\0\r\f]/g,g=/: */g,y=/zoo|gra/,w=/([,: ])(transform)/g,m=/,\r+?/g,f=/([\t\r\n ])*\f?&/g,p=/@(k\w+)\s*(\S*)\s*/,_=/::(place)/g,v=/:(read-only)/g,I=/[svh]\w+-[tblr]{2}/,T=/\(\s*(.*)\s*\)/g,k=/([\s\S]*?);/g,P=/-self|flex-/g,C=/[^]*?(:[rp][el]a[\w-]+)[^]*/,M=/stretch|:\s*\w+\-(?:conte|avail)/,q=/([^-])(image-set\()/,j=1,H=1,le=0,te=1,ye=[],we=[],Ie=0,Ut=null,Tt=0,L="";return c.use=l,c.set=u,t!==void 0&&u(t),c}var zO={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function VO(t){var e={};return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var HO=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,w_=VO(function(t){return HO.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),Mp=Gu.exports,GO={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},qO={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},KO={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},gE={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Fp={};Fp[Mp.ForwardRef]=KO;Fp[Mp.Memo]=gE;function E_(t){return Mp.isMemo(t)?gE:Fp[t.$$typeof]||GO}var YO=Object.defineProperty,QO=Object.getOwnPropertyNames,I_=Object.getOwnPropertySymbols,JO=Object.getOwnPropertyDescriptor,XO=Object.getPrototypeOf,C_=Object.prototype;function _E(t,e,n){if(typeof e!="string"){if(C_){var r=XO(e);r&&r!==C_&&_E(t,r,n)}var i=QO(e);I_&&(i=i.concat(I_(e)));for(var s=E_(t),o=E_(e),a=0;a<i.length;++a){var l=i[a];if(!qO[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=JO(e,l);try{YO(t,l,u)}catch{}}}}return t}var ZO=_E;function an(){return(an=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var S_=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},_h=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!Gu.exports.typeOf(t)},Vl=Object.freeze([]),sr=Object.freeze({});function Bo(t){return typeof t=="function"}function T_(t){return t.displayName||t.name||"Component"}function Up(t){return t&&typeof t.styledComponentId=="string"}var Ji=typeof process!="undefined"&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Wp=typeof window!="undefined"&&"HTMLElement"in window,ex=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1),tx={};function fa(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var nx=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&fa(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),Ya=new Map,Hl=new Map,oo=1,ba=function(t){if(Ya.has(t))return Ya.get(t);for(;Hl.has(oo);)oo++;var e=oo++;return Ya.set(t,e),Hl.set(e,t),e},rx=function(t){return Hl.get(t)},ix=function(t,e){e>=oo&&(oo=e+1),Ya.set(t,e),Hl.set(e,t)},sx="style["+Ji+'][data-styled-version="5.3.3"]',ox=new RegExp("^"+Ji+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),ax=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},lx=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(ox);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(ix(u,l),ax(t,u,a[3]),t.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},ux=function(){return typeof window!="undefined"&&window.__webpack_nonce__!==void 0?window.__webpack_nonce__:null},vE=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(Ji))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Ji,"active"),r.setAttribute("data-styled-version","5.3.3");var o=ux();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},cx=function(){function t(n){var r=this.element=vE(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===i)return l}fa(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),dx=function(){function t(n){var r=this.element=vE(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),hx=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),k_=Wp,fx={isServer:!Wp,useCSSOMInjection:!ex},Gl=function(){function t(n,r,i){n===void 0&&(n=sr),r===void 0&&(r={}),this.options=an({},fx,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Wp&&k_&&(k_=!1,function(s){for(var o=document.querySelectorAll(sx),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(Ji)!=="active"&&(lx(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}t.registerId=function(n){return ba(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(an({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new hx(o):s?new cx(o):new dx(o),new nx(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(ba(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(ba(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(ba(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=rx(o);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(o);if(l&&u&&l.size){var c=Ji+".g"+o+'[id="'+a+'"]',d="";l!==void 0&&l.forEach(function(h){h.length>0&&(d+=h+",")}),s+=""+u+c+'{content:"'+d+`"}/*!sc*/
`}}}return s}(this)},t}(),px=/(a)(d)/gi,R_=function(t){return String.fromCharCode(t+(t>25?39:97))};function vh(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=R_(e%52)+n;return(R_(e%52)+n).replace(px,"$1-$2")}var Ci=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},yE=function(t){return Ci(5381,t)};function wE(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Bo(n)&&!Up(n))return!1}return!0}var mx=yE("5.3.3"),gx=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&wE(e),this.componentId=n,this.baseHash=Ci(mx,n),this.baseStyle=r,Gl.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=Yr(this.rules,e,n,r).join(""),a=vh(Ci(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var l=r(o,"."+a,void 0,i);n.insertRules(i,a,l)}s.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=Ci(this.baseHash,r.hash),d="",h=0;h<u;h++){var g=this.rules[h];if(typeof g=="string")d+=g;else if(g){var y=Yr(g,e,n,r),w=Array.isArray(y)?y.join(""):y;c=Ci(c,w+h),d+=w}}if(d){var m=vh(c>>>0);if(!n.hasNameForId(i,m)){var f=r(d,"."+m,void 0,i);n.insertRules(i,m,f)}s.push(m)}}return s.join(" ")},t}(),_x=/^\s*\/\/.*$/gm,vx=[":","[",".","#"];function yx(t){var e,n,r,i,s=t===void 0?sr:t,o=s.options,a=o===void 0?sr:o,l=s.plugins,u=l===void 0?Vl:l,c=new $O(a),d=[],h=function(w){function m(f){if(f)try{w(f+"}")}catch{}}return function(f,p,_,v,I,T,k,P,C,M){switch(f){case 1:if(C===0&&p.charCodeAt(0)===64)return w(p+";"),"";break;case 2:if(P===0)return p+"/*|*/";break;case 3:switch(P){case 102:case 112:return w(_[0]+p),"";default:return p+(M===0?"/*|*/":"")}case-2:p.split("/*|*/}").forEach(m)}}}(function(w){d.push(w)}),g=function(w,m,f){return m===0&&vx.indexOf(f[n.length])!==-1||f.match(i)?w:"."+e};function y(w,m,f,p){p===void 0&&(p="&");var _=w.replace(_x,""),v=m&&f?f+" "+m+" { "+_+" }":_;return e=p,n=m,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(f||!m?"":m,v)}return c.use([].concat(u,[function(w,m,f){w===2&&f.length&&f[0].lastIndexOf(n)>0&&(f[0]=f[0].replace(r,g))},h,function(w){if(w===-2){var m=d;return d=[],m}}])),y.hash=u.length?u.reduce(function(w,m){return m.name||fa(15),Ci(w,m.name)},5381).toString():"",y}var EE=$o.createContext();EE.Consumer;var IE=$o.createContext(),wx=(IE.Consumer,new Gl),yh=yx();function CE(){return N.exports.useContext(EE)||wx}function SE(){return N.exports.useContext(IE)||yh}var Ex=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=yh);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return fa(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=yh),this.name+e.hash},t}(),Ix=/([A-Z])/,Cx=/([A-Z])/g,Sx=/^ms-/,Tx=function(t){return"-"+t.toLowerCase()};function P_(t){return Ix.test(t)?t.replace(Cx,Tx).replace(Sx,"-ms-"):t}var N_=function(t){return t==null||t===!1||t===""};function Yr(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=Yr(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(N_(t))return"";if(Up(t))return"."+t.styledComponentId;if(Bo(t)){if(typeof(u=t)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return t;var l=t(e);return Yr(l,e,n,r)}var u;return t instanceof Ex?n?(t.inject(n,r),t.getName(r)):t:_h(t)?function c(d,h){var g,y,w=[];for(var m in d)d.hasOwnProperty(m)&&!N_(d[m])&&(Array.isArray(d[m])&&d[m].isCss||Bo(d[m])?w.push(P_(m)+":",d[m],";"):_h(d[m])?w.push.apply(w,c(d[m],m)):w.push(P_(m)+": "+(g=m,(y=d[m])==null||typeof y=="boolean"||y===""?"":typeof y!="number"||y===0||g in zO?String(y).trim():y+"px")+";"));return h?[h+" {"].concat(w,["}"]):w}(t):t.toString()}var A_=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function TE(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return Bo(t)||_h(t)?A_(Yr(S_(Vl,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:A_(Yr(S_(t,n)))}var kE=function(t,e,n){return n===void 0&&(n=sr),t.theme!==n.theme&&t.theme||e||n.theme},kx=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Rx=/(^-|-$)/g;function Kc(t){return t.replace(kx,"-").replace(Rx,"")}var RE=function(t){return vh(yE(t)>>>0)};function Oa(t){return typeof t=="string"&&!0}var wh=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},Px=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function Nx(t,e,n){var r=t[n];wh(e)&&wh(r)?PE(r,e):t[n]=e}function PE(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(wh(o))for(var a in o)Px(a)&&Nx(t,o[a],a)}return t}var Bp=$o.createContext();Bp.Consumer;var Yc={};function NE(t,e,n){var r=Up(t),i=!Oa(t),s=e.attrs,o=s===void 0?Vl:s,a=e.componentId,l=a===void 0?function(p,_){var v=typeof p!="string"?"sc":Kc(p);Yc[v]=(Yc[v]||0)+1;var I=v+"-"+RE("5.3.3"+v+Yc[v]);return _?_+"-"+I:I}(e.displayName,e.parentComponentId):a,u=e.displayName,c=u===void 0?function(p){return Oa(p)?"styled."+p:"Styled("+T_(p)+")"}(t):u,d=e.displayName&&e.componentId?Kc(e.displayName)+"-"+e.componentId:e.componentId||l,h=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,g=e.shouldForwardProp;r&&t.shouldForwardProp&&(g=e.shouldForwardProp?function(p,_,v){return t.shouldForwardProp(p,_,v)&&e.shouldForwardProp(p,_,v)}:t.shouldForwardProp);var y,w=new gx(n,d,r?t.componentStyle:void 0),m=w.isStatic&&o.length===0,f=function(p,_){return function(v,I,T,k){var P=v.attrs,C=v.componentStyle,M=v.defaultProps,q=v.foldedComponentIds,j=v.shouldForwardProp,H=v.styledComponentId,le=v.target,te=function(F,E,Q){F===void 0&&(F=sr);var D=an({},E,{theme:F}),se={};return Q.forEach(function(ne){var oe,G,$e,at=ne;for(oe in Bo(at)&&(at=at(D)),at)D[oe]=se[oe]=oe==="className"?(G=se[oe],$e=at[oe],G&&$e?G+" "+$e:G||$e):at[oe]}),[D,se]}(kE(I,N.exports.useContext(Bp),M)||sr,I,P),ye=te[0],we=te[1],Ie=function(F,E,Q,D){var se=CE(),ne=SE(),oe=E?F.generateAndInjectStyles(sr,se,ne):F.generateAndInjectStyles(Q,se,ne);return oe}(C,k,ye),Ut=T,Tt=we.$as||I.$as||we.as||I.as||le,L=Oa(Tt),R=we!==I?an({},I,{},we):I,S={};for(var x in R)x[0]!=="$"&&x!=="as"&&(x==="forwardedAs"?S.as=R[x]:(j?j(x,w_,Tt):!L||w_(x))&&(S[x]=R[x]));return I.style&&we.style!==I.style&&(S.style=an({},I.style,{},we.style)),S.className=Array.prototype.concat(q,H,Ie!==H?Ie:null,I.className,we.className).filter(Boolean).join(" "),S.ref=Ut,N.exports.createElement(Tt,S)}(y,p,_,m)};return f.displayName=c,(y=$o.forwardRef(f)).attrs=h,y.componentStyle=w,y.displayName=c,y.shouldForwardProp=g,y.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):Vl,y.styledComponentId=d,y.target=r?t.target:t,y.withComponent=function(p){var _=e.componentId,v=function(T,k){if(T==null)return{};var P,C,M={},q=Object.keys(T);for(C=0;C<q.length;C++)P=q[C],k.indexOf(P)>=0||(M[P]=T[P]);return M}(e,["componentId"]),I=_&&_+"-"+(Oa(p)?p:Kc(T_(p)));return NE(p,an({},v,{attrs:h,componentId:I}),n)},Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=r?PE({},t.defaultProps,p):p}}),y.toString=function(){return"."+y.styledComponentId},i&&ZO(y,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),y}var Eh=function(t){return function e(n,r,i){if(i===void 0&&(i=sr),!Gu.exports.isValidElementType(r))return fa(1,String(r));var s=function(){return n(r,i,TE.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,an({},i,{},o))},s.attrs=function(o){return e(n,r,an({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(NE,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){Eh[t]=Eh(t)});var Ax=function(){function t(n,r){this.rules=n,this.componentId=r,this.isStatic=wE(n),Gl.registerId(this.componentId+1)}var e=t.prototype;return e.createStyles=function(n,r,i,s){var o=s(Yr(this.rules,r,i,s).join(""),""),a=this.componentId+n;i.insertRules(a,a,o)},e.removeStyles=function(n,r){r.clearRules(this.componentId+n)},e.renderStyles=function(n,r,i,s){n>2&&Gl.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,s)},t}();function eD(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=TE.apply(void 0,[t].concat(n)),s="sc-global-"+RE(JSON.stringify(i)),o=new Ax(i,s);function a(u){var c=CE(),d=SE(),h=N.exports.useContext(Bp),g=N.exports.useRef(c.allocateGSInstance(s)).current;return c.server&&l(g,u,c,h,d),N.exports.useLayoutEffect(function(){if(!c.server)return l(g,u,c,h,d),function(){return o.removeStyles(g,c)}},[g,u,c,h,d]),null}function l(u,c,d,h,g){if(o.isStatic)o.renderStyles(u,tx,d,g);else{var y=an({},c,{theme:kE(c,h,a.defaultProps)});o.renderStyles(u,y,d,g)}}return $o.memo(a)}var tD=Eh;function AE(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=AE(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function Gn(){for(var t=0,e,n,r="";t<arguments.length;)(e=arguments[t++])&&(n=AE(e))&&(r&&(r+=" "),r+=n);return r}function wt(){return wt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},wt.apply(this,arguments)}function bE(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function rc(t){return typeof t=="number"&&!isNaN(t)}function Ms(t){return typeof t=="boolean"}function Qr(t){return typeof t=="string"}function et(t){return typeof t=="function"}function Qa(t){return Qr(t)||et(t)?t:null}function Qc(t){return t===0||t}function bx(t,e){return t===!1||rc(t)&&t>0?t:e}var OE=!!(typeof window!="undefined"&&window.document&&window.document.createElement);function Jc(t){return N.exports.isValidElement(t)||Qr(t)||et(t)||rc(t)}var xE={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Mn={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"};function Ox(t,e,n){n===void 0&&(n=300);var r=t.scrollHeight,i=t.style;requestAnimationFrame(function(){i.minHeight="initial",i.height=r+"px",i.transition="all "+n+"ms",requestAnimationFrame(function(){i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function xx(t){var e=t.enter,n=t.exit,r=t.appendPosition,i=r===void 0?!1:r,s=t.collapse,o=s===void 0?!0:s,a=t.collapseDuration,l=a===void 0?300:a;return function(c){var d=c.children,h=c.position,g=c.preventExitTransition,y=c.done,w=c.nodeRef,m=c.isIn,f=i?e+"--"+h:e,p=i?n+"--"+h:n,_=N.exports.useRef(),v=N.exports.useRef(0);N.exports.useLayoutEffect(function(){I()},[]),N.exports.useEffect(function(){m||(g?P():k())},[m]);function I(){var C=w.current;_.current=C.className,C.className+=" "+f,C.addEventListener("animationend",T),C.addEventListener("animationcancel",T)}function T(C){if(C.target===w.current){var M=w.current;M.dispatchEvent(new Event("d")),M.removeEventListener("animationend",T),M.removeEventListener("animationcancel",T),v.current===0&&(M.className=_.current)}}function k(){v.current=1;var C=w.current;C.className+=" "+p,C.addEventListener("animationend",P)}function P(){var C=w.current;C.removeEventListener("animationend",P),o?Ox(C,y,l):y()}return LO(MO,{children:d})}}var Kt={list:new Map,emitQueue:new Map,on:function(e,n){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(n),this},off:function(e,n){if(n){var r=this.list.get(e).filter(function(i){return i!==n});return this.list.set(e,r),this}return this.list.delete(e),this},cancelEmit:function(e){var n=this.emitQueue.get(e);return n&&(n.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){for(var n=this,r=arguments.length,i=new Array(r>1?r-1:0),s=1;s<r;s++)i[s-1]=arguments[s];this.list.has(e)&&this.list.get(e).forEach(function(o){var a=setTimeout(function(){o.apply(void 0,i)},0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(a)})}},Dx=["delay","staleId"];function Lx(t){var e=N.exports.useReducer(function(f){return f+1},0),n=e[1],r=N.exports.useState([]),i=r[0],s=r[1],o=N.exports.useRef(null),a=N.exports.useRef(new Map).current,l=function(p){return i.indexOf(p)!==-1},u=N.exports.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:l,getToast:function(p){return a.get(p)}}).current;N.exports.useEffect(function(){return u.containerId=t.containerId,Kt.cancelEmit(3).on(0,y).on(1,function(f){return o.current&&d(f)}).on(5,c).emit(2,u),function(){return Kt.emit(3,u)}},[]),N.exports.useEffect(function(){u.isToastActive=l,u.displayedToast=i.length,Kt.emit(4,i.length,t.containerId)},[i]),N.exports.useEffect(function(){u.props=t});function c(f){var p=f.containerId,_=u.props.limit;_&&(!p||u.containerId===p)&&(u.count-=u.queue.length,u.queue=[])}function d(f){s(function(p){return Qc(f)?p.filter(function(_){return _!==f}):[]})}function h(){var f=u.queue.shift(),p=f.toastContent,_=f.toastProps,v=f.staleId;w(p,_,v)}function g(f){return!o.current||u.props.enableMultiContainer&&f.containerId!==u.props.containerId||a.has(f.toastId)&&f.updateId==null}function y(f,p){var _=p.delay,v=p.staleId,I=bE(p,Dx);if(!(!Jc(f)||g(I))){var T=I.toastId,k=I.updateId,P=I.data,C=u.props,M=function(){return d(T)},q=k==null;q&&u.count++;var j={toastId:T,updateId:k,isLoading:I.isLoading,theme:I.theme||C.theme,icon:I.icon!=null?I.icon:C.icon,isIn:!1,key:I.key||u.toastKey++,type:I.type,closeToast:M,closeButton:I.closeButton,rtl:C.rtl,position:I.position||C.position,transition:I.transition||C.transition,className:Qa(I.className||C.toastClassName),bodyClassName:Qa(I.bodyClassName||C.bodyClassName),style:I.style||C.toastStyle,bodyStyle:I.bodyStyle||C.bodyStyle,onClick:I.onClick||C.onClick,pauseOnHover:Ms(I.pauseOnHover)?I.pauseOnHover:C.pauseOnHover,pauseOnFocusLoss:Ms(I.pauseOnFocusLoss)?I.pauseOnFocusLoss:C.pauseOnFocusLoss,draggable:Ms(I.draggable)?I.draggable:C.draggable,draggablePercent:I.draggablePercent||C.draggablePercent,draggableDirection:I.draggableDirection||C.draggableDirection,closeOnClick:Ms(I.closeOnClick)?I.closeOnClick:C.closeOnClick,progressClassName:Qa(I.progressClassName||C.progressClassName),progressStyle:I.progressStyle||C.progressStyle,autoClose:I.isLoading?!1:bx(I.autoClose,C.autoClose),hideProgressBar:Ms(I.hideProgressBar)?I.hideProgressBar:C.hideProgressBar,progress:I.progress,role:I.role||C.role,deleteToast:function(){a.delete(T);var te=u.queue.length;if(u.count=Qc(T)?u.count-1:u.count-u.displayedToast,u.count<0&&(u.count=0),te>0){var ye=Qc(T)?1:u.props.limit;if(te===1||ye===1)u.displayedToast++,h();else{var we=ye>te?te:ye;u.displayedToast=we;for(var Ie=0;Ie<we;Ie++)h()}}else n()}};et(I.onOpen)&&(j.onOpen=I.onOpen),et(I.onClose)&&(j.onClose=I.onClose),j.closeButton=C.closeButton,I.closeButton===!1||Jc(I.closeButton)?j.closeButton=I.closeButton:I.closeButton===!0&&(j.closeButton=Jc(C.closeButton)?C.closeButton:!0);var H=f;N.exports.isValidElement(f)&&!Qr(f.type)?H=N.exports.cloneElement(f,{closeToast:M,toastProps:j,data:P}):et(f)&&(H=f({closeToast:M,toastProps:j,data:P})),C.limit&&C.limit>0&&u.count>C.limit&&q?u.queue.push({toastContent:H,toastProps:j,staleId:v}):rc(_)&&_>0?setTimeout(function(){w(H,j,v)},_):w(H,j,v)}}function w(f,p,_){var v=p.toastId;_&&a.delete(_),a.set(v,{content:f,props:p}),s(function(I){return[].concat(I,[v]).filter(function(T){return T!==_})})}function m(f){var p=new Map,_=Array.from(a.values());return t.newestOnTop&&_.reverse(),_.forEach(function(v){var I=v.props.position;p.has(I)||p.set(I,[]),p.get(I).push(v)}),Array.from(p,function(v){return f(v[0],v[1])})}return{getToastToRender:m,containerRef:o,isToastActive:l}}function b_(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function O_(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function Mx(t){var e=N.exports.useState(!1),n=e[0],r=e[1],i=N.exports.useState(!1),s=i[0],o=i[1],a=N.exports.useRef(null),l=N.exports.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,u=N.exports.useRef(t),c=t.autoClose,d=t.pauseOnHover,h=t.closeToast,g=t.onClick,y=t.closeOnClick;N.exports.useEffect(function(){u.current=t}),N.exports.useEffect(function(){return a.current&&a.current.addEventListener("d",f,{once:!0}),et(t.onOpen)&&t.onOpen(N.exports.isValidElement(t.children)&&t.children.props),function(){var M=u.current;et(M.onClose)&&M.onClose(N.exports.isValidElement(M.children)&&M.children.props)}},[]),N.exports.useEffect(function(){return t.pauseOnFocusLoss&&_(),function(){t.pauseOnFocusLoss&&v()}},[t.pauseOnFocusLoss]);function w(M){if(t.draggable){I();var q=a.current;l.canCloseOnClick=!0,l.canDrag=!0,l.boundingRect=q.getBoundingClientRect(),q.style.transition="",l.x=b_(M.nativeEvent),l.y=O_(M.nativeEvent),t.draggableDirection==="x"?(l.start=l.x,l.removalDistance=q.offsetWidth*(t.draggablePercent/100)):(l.start=l.y,l.removalDistance=q.offsetHeight*(t.draggablePercent===80?t.draggablePercent*1.5:t.draggablePercent/100))}}function m(){if(l.boundingRect){var M=l.boundingRect,q=M.top,j=M.bottom,H=M.left,le=M.right;t.pauseOnHover&&l.x>=H&&l.x<=le&&l.y>=q&&l.y<=j?p():f()}}function f(){r(!0)}function p(){r(!1)}function _(){document.hasFocus()||p(),window.addEventListener("focus",f),window.addEventListener("blur",p)}function v(){window.removeEventListener("focus",f),window.removeEventListener("blur",p)}function I(){l.didMove=!1,document.addEventListener("mousemove",k),document.addEventListener("mouseup",P),document.addEventListener("touchmove",k),document.addEventListener("touchend",P)}function T(){document.removeEventListener("mousemove",k),document.removeEventListener("mouseup",P),document.removeEventListener("touchmove",k),document.removeEventListener("touchend",P)}function k(M){var q=a.current;l.canDrag&&q&&(l.didMove=!0,n&&p(),l.x=b_(M),l.y=O_(M),t.draggableDirection==="x"?l.delta=l.x-l.start:l.delta=l.y-l.start,l.start!==l.x&&(l.canCloseOnClick=!1),q.style.transform="translate"+t.draggableDirection+"("+l.delta+"px)",q.style.opacity=""+(1-Math.abs(l.delta/l.removalDistance)))}function P(){T();var M=a.current;if(l.canDrag&&l.didMove&&M){if(l.canDrag=!1,Math.abs(l.delta)>l.removalDistance){o(!0),t.closeToast();return}M.style.transition="transform 0.2s, opacity 0.2s",M.style.transform="translate"+t.draggableDirection+"(0)",M.style.opacity="1"}}var C={onMouseDown:w,onTouchStart:w,onMouseUp:m,onTouchEnd:m};return c&&d&&(C.onMouseEnter=p,C.onMouseLeave=f),y&&(C.onClick=function(M){g&&g(M),l.canCloseOnClick&&h()}),{playToast:f,pauseToast:p,isRunning:n,preventExitTransition:s,toastRef:a,eventHandlers:C}}function DE(t){var e=t.closeToast,n=t.theme,r=t.ariaLabel,i=r===void 0?"close":r;return N.exports.createElement("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(o){o.stopPropagation(),e(o)},"aria-label":i},N.exports.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},N.exports.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function LE(t){var e,n,r=t.delay,i=t.isRunning,s=t.closeToast,o=t.type,a=t.hide,l=t.className,u=t.style,c=t.controlledProgress,d=t.progress,h=t.rtl,g=t.isIn,y=t.theme,w=wt({},u,{animationDuration:r+"ms",animationPlayState:i?"running":"paused",opacity:a?0:1});c&&(w.transform="scaleX("+d+")");var m=Gn("Toastify__progress-bar",c?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--"+y,"Toastify__progress-bar--"+o,(e={},e["Toastify__progress-bar--rtl"]=h,e)),f=et(l)?l({rtl:h,type:o,defaultClassName:m}):Gn(m,l),p=(n={},n[c&&d>=1?"onTransitionEnd":"onAnimationEnd"]=c&&d<1?null:function(){g&&s()},n);return N.exports.createElement("div",Object.assign({role:"progressbar","aria-hidden":a?"true":"false","aria-label":"notification timer",className:f,style:w},p))}LE.defaultProps={type:Mn.DEFAULT,hide:!1};var Fx=["theme","type"],ic=function(e){var n=e.theme,r=e.type,i=bE(e,Fx);return N.exports.createElement("svg",Object.assign({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:n==="colored"?"currentColor":"var(--toastify-icon-color-"+r+")"},i))};function Ux(t){return N.exports.createElement(ic,Object.assign({},t),N.exports.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function Wx(t){return N.exports.createElement(ic,Object.assign({},t),N.exports.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function Bx(t){return N.exports.createElement(ic,Object.assign({},t),N.exports.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function jx(t){return N.exports.createElement(ic,Object.assign({},t),N.exports.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function $x(){return N.exports.createElement("div",{className:"Toastify__spinner"})}var x_={info:Wx,warning:Ux,success:Bx,error:jx,spinner:$x},zx=function(e){var n,r,i=Mx(e),s=i.isRunning,o=i.preventExitTransition,a=i.toastRef,l=i.eventHandlers,u=e.closeButton,c=e.children,d=e.autoClose,h=e.onClick,g=e.type,y=e.hideProgressBar,w=e.closeToast,m=e.transition,f=e.position,p=e.className,_=e.style,v=e.bodyClassName,I=e.bodyStyle,T=e.progressClassName,k=e.progressStyle,P=e.updateId,C=e.role,M=e.progress,q=e.rtl,j=e.toastId,H=e.deleteToast,le=e.isIn,te=e.isLoading,ye=e.icon,we=e.theme,Ie=Gn("Toastify__toast","Toastify__toast-theme--"+we,"Toastify__toast--"+g,(n={},n["Toastify__toast--rtl"]=q,n)),Ut=et(p)?p({rtl:q,position:f,type:g,defaultClassName:Ie}):Gn(Ie,p),Tt=!!M,L=x_[g],R={theme:we,type:g},S=L&&L(R);ye===!1?S=void 0:et(ye)?S=ye(R):N.exports.isValidElement(ye)?S=N.exports.cloneElement(ye,R):Qr(ye)?S=ye:te&&(S=x_.spinner());function x(F){if(!!F){var E={closeToast:w,type:g,theme:we};if(et(F))return F(E);if(N.exports.isValidElement(F))return N.exports.cloneElement(F,E)}}return N.exports.createElement(m,{isIn:le,done:H,position:f,preventExitTransition:o,nodeRef:a},N.exports.createElement("div",Object.assign({id:j,onClick:h,className:Ut},l,{style:_,ref:a}),N.exports.createElement("div",Object.assign({},le&&{role:C},{className:et(v)?v({type:g}):Gn("Toastify__toast-body",v),style:I}),S&&N.exports.createElement("div",{className:Gn("Toastify__toast-icon",(r={},r["Toastify--animate-icon Toastify__zoom-enter"]=!te,r))},S),N.exports.createElement("div",null,c)),x(u),(d||Tt)&&N.exports.createElement(LE,Object.assign({},P&&!Tt?{key:"pb-"+P}:{},{rtl:q,theme:we,delay:d,isRunning:s,isIn:le,closeToast:w,hide:y,type:g,style:k,className:T,controlledProgress:Tt,progress:M}))))},Vx=xx({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),ME=function(e){var n=Lx(e),r=n.getToastToRender,i=n.containerRef,s=n.isToastActive,o=e.className,a=e.style,l=e.rtl,u=e.containerId;function c(d){var h,g=Gn("Toastify__toast-container","Toastify__toast-container--"+d,(h={},h["Toastify__toast-container--rtl"]=l,h));return et(o)?o({position:d,rtl:l,defaultClassName:g}):Gn(g,Qa(o))}return N.exports.createElement("div",{ref:i,className:"Toastify",id:u},r(function(d,h){var g=h.length?wt({},a):wt({},a,{pointerEvents:"none"});return N.exports.createElement("div",{className:c(d),style:g,key:"container-"+d},h.map(function(y){var w=y.content,m=y.props;return N.exports.createElement(zx,Object.assign({},m,{isIn:s(m.toastId),key:"toast-"+m.key,closeButton:m.closeButton===!0?DE:m.closeButton}),w)}))}))};ME.defaultProps={position:xE.TOP_RIGHT,transition:Vx,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:DE,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var Wi=new Map,Ih,ao,FE,Ch=[],Sh=!1;function Hx(t,e){var n=e.containerId,r=Wi.get(n||Ih);return r?r.getToast(t):null}function UE(){return Math.random().toString(36).substring(2,9)}function Gx(t){return t&&(Qr(t.toastId)||rc(t.toastId))?t.toastId:UE()}function pa(t,e){return Wi.size>0?Kt.emit(0,t,e):(Ch.push({content:t,options:e}),Sh&&OE&&(Sh=!1,ao=document.createElement("div"),document.body.appendChild(ao),Ah.exports.render(N.exports.createElement(ME,Object.assign({},FE)),ao))),e.toastId}function sc(t,e){return wt({},e,{type:e&&e.type||t,toastId:Gx(e)})}function oc(t){return function(e,n){return pa(e,sc(t,n))}}function _e(t,e){return pa(t,sc(Mn.DEFAULT,e))}_e.loading=function(t,e){return pa(t,sc(Mn.DEFAULT,wt({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},e)))};function qx(t,e,n){var r=e.pending,i=e.error,s=e.success,o;r&&(o=Qr(r)?_e.loading(r,n):_e.loading(r.render,wt({},n,r)));var a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=function(d,h,g){if(h==null){_e.dismiss(o);return}var y=wt({type:d},a,n,{data:g}),w=Qr(h)?{render:h}:h;return o?_e.update(o,wt({},y,w)):_e(w.render,wt({},y,w)),g},u=et(t)?t():t;return u.then(function(c){return l("success",s,c)}).catch(function(c){return l("error",i,c)}),u}_e.promise=qx;_e.success=oc(Mn.SUCCESS);_e.info=oc(Mn.INFO);_e.error=oc(Mn.ERROR);_e.warning=oc(Mn.WARNING);_e.warn=_e.warning;_e.dark=function(t,e){return pa(t,sc(Mn.DEFAULT,wt({theme:"dark"},e)))};_e.dismiss=function(t){return Kt.emit(1,t)};_e.clearWaitingQueue=function(t){return t===void 0&&(t={}),Kt.emit(5,t)};_e.isActive=function(t){var e=!1;return Wi.forEach(function(n){n.isToastActive&&n.isToastActive(t)&&(e=!0)}),e};_e.update=function(t,e){e===void 0&&(e={}),setTimeout(function(){var n=Hx(t,e);if(n){var r=n.props,i=n.content,s=wt({},r,e,{toastId:e.toastId||t,updateId:UE()});s.toastId!==t&&(s.staleId=t);var o=s.render||i;delete s.render,pa(o,s)}},0)};_e.done=function(t){_e.update(t,{progress:1})};_e.onChange=function(t){return et(t)&&Kt.on(4,t),function(){et(t)&&Kt.off(4,t)}};_e.configure=function(t){t===void 0&&(t={}),Sh=!0,FE=t};_e.POSITION=xE;_e.TYPE=Mn;Kt.on(2,function(t){Ih=t.containerId||t,Wi.set(Ih,t),Ch.forEach(function(e){Kt.emit(0,e.content,e.options)}),Ch=[]}).on(3,function(t){Wi.delete(t.containerId||t),Wi.size===0&&Kt.off(0).off(1).off(5),OE&&ao&&document.body.removeChild(ao)});export{Jx as B,MO as F,Xx as L,Yx as R,ME as T,eD as W,Zx as a,Qx as b,HC as c,Kx as d,$o as e,Xo as f,LO as j,N as r,tD as s,_e as t,KC as u};
