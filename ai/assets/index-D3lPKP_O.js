(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function MS(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ed={exports:{}},Zo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ox;function ES(){if(ox)return Zo;ox=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Zo.Fragment=e,Zo.jsx=i,Zo.jsxs=i,Zo}var lx;function TS(){return lx||(lx=1,Ed.exports=ES()),Ed.exports}var A=TS(),Td={exports:{}},xt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cx;function AS(){if(cx)return xt;cx=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),x=Symbol.iterator;function E(b){return b===null||typeof b!="object"?null:(b=x&&b[x]||b["@@iterator"],typeof b=="function"?b:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,S={};function v(b,M,H){this.props=b,this.context=M,this.refs=S,this.updater=H||T}v.prototype.isReactComponent={},v.prototype.setState=function(b,M){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,M,"setState")},v.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function P(){}P.prototype=v.prototype;function V(b,M,H){this.props=b,this.context=M,this.refs=S,this.updater=H||T}var B=V.prototype=new P;B.constructor=V,U(B,v.prototype),B.isPureReactComponent=!0;var Z=Array.isArray;function G(){}var j={H:null,A:null,T:null,S:null},D=Object.prototype.hasOwnProperty;function k(b,M,H){var W=H.ref;return{$$typeof:r,type:b,key:M,ref:W!==void 0?W:null,props:H}}function J(b,M){return k(b.type,M,b.props)}function Y(b){return typeof b=="object"&&b!==null&&b.$$typeof===r}function ae(b){var M={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(H){return M[H]})}var ee=/\/+/g;function xe(b,M){return typeof b=="object"&&b!==null&&b.key!=null?ae(""+b.key):M.toString(36)}function X(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(G,G):(b.status="pending",b.then(function(M){b.status==="pending"&&(b.status="fulfilled",b.value=M)},function(M){b.status==="pending"&&(b.status="rejected",b.reason=M)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function N(b,M,H,W,K){var q=typeof b;(q==="undefined"||q==="boolean")&&(b=null);var se=!1;if(b===null)se=!0;else switch(q){case"bigint":case"string":case"number":se=!0;break;case"object":switch(b.$$typeof){case r:case e:se=!0;break;case g:return se=b._init,N(se(b._payload),M,H,W,K)}}if(se)return K=K(b),se=W===""?"."+xe(b,0):W,Z(K)?(H="",se!=null&&(H=se.replace(ee,"$&/")+"/"),N(K,M,H,"",function(Oe){return Oe})):K!=null&&(Y(K)&&(K=J(K,H+(K.key==null||b&&b.key===K.key?"":(""+K.key).replace(ee,"$&/")+"/")+se)),M.push(K)),1;se=0;var _e=W===""?".":W+":";if(Z(b))for(var ve=0;ve<b.length;ve++)W=b[ve],q=_e+xe(W,ve),se+=N(W,M,H,q,K);else if(ve=E(b),typeof ve=="function")for(b=ve.call(b),ve=0;!(W=b.next()).done;)W=W.value,q=_e+xe(W,ve++),se+=N(W,M,H,q,K);else if(q==="object"){if(typeof b.then=="function")return N(X(b),M,H,W,K);throw M=String(b),Error("Objects are not valid as a React child (found: "+(M==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":M)+"). If you meant to render a collection of children, use an array instead.")}return se}function I(b,M,H){if(b==null)return b;var W=[],K=0;return N(b,W,"","",function(q){return M.call(H,q,K++)}),W}function R(b){if(b._status===-1){var M=b._result;M=M(),M.then(function(H){(b._status===0||b._status===-1)&&(b._status=1,b._result=H)},function(H){(b._status===0||b._status===-1)&&(b._status=2,b._result=H)}),b._status===-1&&(b._status=0,b._result=M)}if(b._status===1)return b._result.default;throw b._result}var w=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var M=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(M))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)},F={map:I,forEach:function(b,M,H){I(b,function(){M.apply(this,arguments)},H)},count:function(b){var M=0;return I(b,function(){M++}),M},toArray:function(b){return I(b,function(M){return M})||[]},only:function(b){if(!Y(b))throw Error("React.Children.only expected to receive a single React element child.");return b}};return xt.Activity=_,xt.Children=F,xt.Component=v,xt.Fragment=i,xt.Profiler=l,xt.PureComponent=V,xt.StrictMode=s,xt.Suspense=m,xt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=j,xt.__COMPILER_RUNTIME={__proto__:null,c:function(b){return j.H.useMemoCache(b)}},xt.cache=function(b){return function(){return b.apply(null,arguments)}},xt.cacheSignal=function(){return null},xt.cloneElement=function(b,M,H){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var W=U({},b.props),K=b.key;if(M!=null)for(q in M.key!==void 0&&(K=""+M.key),M)!D.call(M,q)||q==="key"||q==="__self"||q==="__source"||q==="ref"&&M.ref===void 0||(W[q]=M[q]);var q=arguments.length-2;if(q===1)W.children=H;else if(1<q){for(var se=Array(q),_e=0;_e<q;_e++)se[_e]=arguments[_e+2];W.children=se}return k(b.type,K,W)},xt.createContext=function(b){return b={$$typeof:f,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:c,_context:b},b},xt.createElement=function(b,M,H){var W,K={},q=null;if(M!=null)for(W in M.key!==void 0&&(q=""+M.key),M)D.call(M,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(K[W]=M[W]);var se=arguments.length-2;if(se===1)K.children=H;else if(1<se){for(var _e=Array(se),ve=0;ve<se;ve++)_e[ve]=arguments[ve+2];K.children=_e}if(b&&b.defaultProps)for(W in se=b.defaultProps,se)K[W]===void 0&&(K[W]=se[W]);return k(b,q,K)},xt.createRef=function(){return{current:null}},xt.forwardRef=function(b){return{$$typeof:p,render:b}},xt.isValidElement=Y,xt.lazy=function(b){return{$$typeof:g,_payload:{_status:-1,_result:b},_init:R}},xt.memo=function(b,M){return{$$typeof:h,type:b,compare:M===void 0?null:M}},xt.startTransition=function(b){var M=j.T,H={};j.T=H;try{var W=b(),K=j.S;K!==null&&K(H,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(G,w)}catch(q){w(q)}finally{M!==null&&H.types!==null&&(M.types=H.types),j.T=M}},xt.unstable_useCacheRefresh=function(){return j.H.useCacheRefresh()},xt.use=function(b){return j.H.use(b)},xt.useActionState=function(b,M,H){return j.H.useActionState(b,M,H)},xt.useCallback=function(b,M){return j.H.useCallback(b,M)},xt.useContext=function(b){return j.H.useContext(b)},xt.useDebugValue=function(){},xt.useDeferredValue=function(b,M){return j.H.useDeferredValue(b,M)},xt.useEffect=function(b,M){return j.H.useEffect(b,M)},xt.useEffectEvent=function(b){return j.H.useEffectEvent(b)},xt.useId=function(){return j.H.useId()},xt.useImperativeHandle=function(b,M,H){return j.H.useImperativeHandle(b,M,H)},xt.useInsertionEffect=function(b,M){return j.H.useInsertionEffect(b,M)},xt.useLayoutEffect=function(b,M){return j.H.useLayoutEffect(b,M)},xt.useMemo=function(b,M){return j.H.useMemo(b,M)},xt.useOptimistic=function(b,M){return j.H.useOptimistic(b,M)},xt.useReducer=function(b,M,H){return j.H.useReducer(b,M,H)},xt.useRef=function(b){return j.H.useRef(b)},xt.useState=function(b){return j.H.useState(b)},xt.useSyncExternalStore=function(b,M,H){return j.H.useSyncExternalStore(b,M,H)},xt.useTransition=function(){return j.H.useTransition()},xt.version="19.2.7",xt}var ux;function op(){return ux||(ux=1,Td.exports=AS()),Td.exports}var Ke=op(),Ad={exports:{}},Ko={},Rd={exports:{}},Cd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fx;function RS(){return fx||(fx=1,(function(r){function e(N,I){var R=N.length;N.push(I);e:for(;0<R;){var w=R-1>>>1,F=N[w];if(0<l(F,I))N[w]=I,N[R]=F,R=w;else break e}}function i(N){return N.length===0?null:N[0]}function s(N){if(N.length===0)return null;var I=N[0],R=N.pop();if(R!==I){N[0]=R;e:for(var w=0,F=N.length,b=F>>>1;w<b;){var M=2*(w+1)-1,H=N[M],W=M+1,K=N[W];if(0>l(H,R))W<F&&0>l(K,H)?(N[w]=K,N[W]=R,w=W):(N[w]=H,N[M]=R,w=M);else if(W<F&&0>l(K,R))N[w]=K,N[W]=R,w=W;else break e}}return I}function l(N,I){var R=N.sortIndex-I.sortIndex;return R!==0?R:N.id-I.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,p=f.now();r.unstable_now=function(){return f.now()-p}}var m=[],h=[],g=1,_=null,x=3,E=!1,T=!1,U=!1,S=!1,v=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate<"u"?setImmediate:null;function B(N){for(var I=i(h);I!==null;){if(I.callback===null)s(h);else if(I.startTime<=N)s(h),I.sortIndex=I.expirationTime,e(m,I);else break;I=i(h)}}function Z(N){if(U=!1,B(N),!T)if(i(m)!==null)T=!0,G||(G=!0,ae());else{var I=i(h);I!==null&&X(Z,I.startTime-N)}}var G=!1,j=-1,D=5,k=-1;function J(){return S?!0:!(r.unstable_now()-k<D)}function Y(){if(S=!1,G){var N=r.unstable_now();k=N;var I=!0;try{e:{T=!1,U&&(U=!1,P(j),j=-1),E=!0;var R=x;try{t:{for(B(N),_=i(m);_!==null&&!(_.expirationTime>N&&J());){var w=_.callback;if(typeof w=="function"){_.callback=null,x=_.priorityLevel;var F=w(_.expirationTime<=N);if(N=r.unstable_now(),typeof F=="function"){_.callback=F,B(N),I=!0;break t}_===i(m)&&s(m),B(N)}else s(m);_=i(m)}if(_!==null)I=!0;else{var b=i(h);b!==null&&X(Z,b.startTime-N),I=!1}}break e}finally{_=null,x=R,E=!1}I=void 0}}finally{I?ae():G=!1}}}var ae;if(typeof V=="function")ae=function(){V(Y)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,xe=ee.port2;ee.port1.onmessage=Y,ae=function(){xe.postMessage(null)}}else ae=function(){v(Y,0)};function X(N,I){j=v(function(){N(r.unstable_now())},I)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(N){N.callback=null},r.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<N?Math.floor(1e3/N):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(N){switch(x){case 1:case 2:case 3:var I=3;break;default:I=x}var R=x;x=I;try{return N()}finally{x=R}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(N,I){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var R=x;x=N;try{return I()}finally{x=R}},r.unstable_scheduleCallback=function(N,I,R){var w=r.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?w+R:w):R=w,N){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=R+F,N={id:g++,callback:I,priorityLevel:N,startTime:R,expirationTime:F,sortIndex:-1},R>w?(N.sortIndex=R,e(h,N),i(m)===null&&N===i(h)&&(U?(P(j),j=-1):U=!0,X(Z,R-w))):(N.sortIndex=F,e(m,N),T||E||(T=!0,G||(G=!0,ae()))),N},r.unstable_shouldYield=J,r.unstable_wrapCallback=function(N){var I=x;return function(){var R=x;x=I;try{return N.apply(this,arguments)}finally{x=R}}}})(Cd)),Cd}var dx;function CS(){return dx||(dx=1,Rd.exports=RS()),Rd.exports}var wd={exports:{}},jn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hx;function wS(){if(hx)return jn;hx=1;var r=op();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)h+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:h,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return jn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,jn.createPortal=function(m,h){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(m,h,null,g)},jn.flushSync=function(m){var h=f.T,g=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=h,s.p=g,s.d.f()}},jn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(m,h))},jn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},jn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var g=h.as,_=p(g,h.crossOrigin),x=typeof h.integrity=="string"?h.integrity:void 0,E=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;g==="style"?s.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:E}):g==="script"&&s.d.X(m,{crossOrigin:_,integrity:x,fetchPriority:E,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},jn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var g=p(h.as,h.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(m)},jn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var g=h.as,_=p(g,h.crossOrigin);s.d.L(m,g,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},jn.preloadModule=function(m,h){if(typeof m=="string")if(h){var g=p(h.as,h.crossOrigin);s.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(m)},jn.requestFormReset=function(m){s.d.r(m)},jn.unstable_batchedUpdates=function(m,h){return m(h)},jn.useFormState=function(m,h,g){return f.H.useFormState(m,h,g)},jn.useFormStatus=function(){return f.H.useHostTransitionStatus()},jn.version="19.2.7",jn}var px;function DS(){if(px)return wd.exports;px=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),wd.exports=wS(),wd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mx;function NS(){if(mx)return Ko;mx=1;var r=CS(),e=op(),i=DS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function h(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),t;if(d===o)return m(u),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var y=!1,O=u.child;O;){if(O===a){y=!0,a=u,o=d;break}if(O===o){y=!0,o=u,a=d;break}O=O.sibling}if(!y){for(O=d.child;O;){if(O===a){y=!0,a=d,o=u;break}if(O===o){y=!0,o=d,a=u;break}O=O.sibling}if(!y)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),V=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),k=Symbol.for("react.activity"),J=Symbol.for("react.memo_cache_sentinel"),Y=Symbol.iterator;function ae(t){return t===null||typeof t!="object"?null:(t=Y&&t[Y]||t["@@iterator"],typeof t=="function"?t:null)}var ee=Symbol.for("react.client.reference");function xe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ee?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case U:return"Fragment";case v:return"Profiler";case S:return"StrictMode";case Z:return"Suspense";case G:return"SuspenseList";case k:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case V:return t.displayName||"Context";case P:return(t._context.displayName||"Context")+".Consumer";case B:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case j:return n=t.displayName||null,n!==null?n:xe(t.type)||"Memo";case D:n=t._payload,t=t._init;try{return xe(t(n))}catch{}}return null}var X=Array.isArray,N=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R={pending:!1,data:null,method:null,action:null},w=[],F=-1;function b(t){return{current:t}}function M(t){0>F||(t.current=w[F],w[F]=null,F--)}function H(t,n){F++,w[F]=t.current,t.current=n}var W=b(null),K=b(null),q=b(null),se=b(null);function _e(t,n){switch(H(q,n),H(K,t),H(W,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Dg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Dg(n),t=Ng(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}M(W),H(W,t)}function ve(){M(W),M(K),M(q)}function Oe(t){t.memoizedState!==null&&H(se,t);var n=W.current,a=Ng(n,t.type);n!==a&&(H(K,t),H(W,a))}function be(t){K.current===t&&(M(W),M(K)),se.current===t&&(M(se),Wo._currentValue=R)}var Qe,We;function Ie(t){if(Qe===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Qe=n&&n[1]||"",We=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qe+t+We}var Je=!1;function tt(t,n){if(!t||Je)return"";Je=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var De=function(){throw Error()};if(Object.defineProperty(De.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(De,[])}catch(ye){var ge=ye}Reflect.construct(t,[],De)}else{try{De.call()}catch(ye){ge=ye}t.call(De.prototype)}}else{try{throw Error()}catch(ye){ge=ye}(De=t())&&typeof De.catch=="function"&&De.catch(function(){})}}catch(ye){if(ye&&ge&&typeof ye.stack=="string")return[ye.stack,ge.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),y=d[0],O=d[1];if(y&&O){var Q=y.split(`
`),fe=O.split(`
`);for(u=o=0;o<Q.length&&!Q[o].includes("DetermineComponentFrameRoot");)o++;for(;u<fe.length&&!fe[u].includes("DetermineComponentFrameRoot");)u++;if(o===Q.length||u===fe.length)for(o=Q.length-1,u=fe.length-1;1<=o&&0<=u&&Q[o]!==fe[u];)u--;for(;1<=o&&0<=u;o--,u--)if(Q[o]!==fe[u]){if(o!==1||u!==1)do if(o--,u--,0>u||Q[o]!==fe[u]){var Te=`
`+Q[o].replace(" at new "," at ");return t.displayName&&Te.includes("<anonymous>")&&(Te=Te.replace("<anonymous>",t.displayName)),Te}while(1<=o&&0<=u);break}}}finally{Je=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ie(a):""}function gt(t,n){switch(t.tag){case 26:case 27:case 5:return Ie(t.type);case 16:return Ie("Lazy");case 13:return t.child!==n&&n!==null?Ie("Suspense Fallback"):Ie("Suspense");case 19:return Ie("SuspenseList");case 0:case 15:return tt(t.type,!1);case 11:return tt(t.type.render,!1);case 1:return tt(t.type,!0);case 31:return Ie("Activity");default:return""}}function pt(t){try{var n="",a=null;do n+=gt(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ct=Object.prototype.hasOwnProperty,$=r.unstable_scheduleCallback,Et=r.unstable_cancelCallback,ot=r.unstable_shouldYield,mt=r.unstable_requestPaint,Ue=r.unstable_now,Ft=r.unstable_getCurrentPriorityLevel,z=r.unstable_ImmediatePriority,C=r.unstable_UserBlockingPriority,ie=r.unstable_NormalPriority,Ee=r.unstable_LowPriority,Ne=r.unstable_IdlePriority,ze=r.log,Ge=r.unstable_setDisableYieldValue,Se=null,Me=null;function Ve(t){if(typeof ze=="function"&&Ge(t),Me&&typeof Me.setStrictMode=="function")try{Me.setStrictMode(Se,t)}catch{}}var ke=Math.clz32?Math.clz32:ut,He=Math.log,Be=Math.LN2;function ut(t){return t>>>=0,t===0?32:31-(He(t)/Be|0)|0}var ft=256,vt=262144,te=4194304;function Fe(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function le(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var O=o&134217727;return O!==0?(o=O&~d,o!==0?u=Fe(o):(y&=O,y!==0?u=Fe(y):a||(a=O&~t,a!==0&&(u=Fe(a))))):(O=o&~d,O!==0?u=Fe(O):y!==0?u=Fe(y):a||(a=o&~t,a!==0&&(u=Fe(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Ae(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Le(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pe(){var t=te;return te<<=1,(te&62914560)===0&&(te=4194304),t}function Pe(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function we(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function je(t,n,a,o,u,d){var y=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var O=t.entanglements,Q=t.expirationTimes,fe=t.hiddenUpdates;for(a=y&~a;0<a;){var Te=31-ke(a),De=1<<Te;O[Te]=0,Q[Te]=-1;var ge=fe[Te];if(ge!==null)for(fe[Te]=null,Te=0;Te<ge.length;Te++){var ye=ge[Te];ye!==null&&(ye.lane&=-536870913)}a&=~De}o!==0&&at(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(y&~n))}function at(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-ke(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function yt(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-ke(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function zt(t,n){var a=n&-n;return a=(a&42)!==0?1:Cn(a),(a&(t.suspendedLanes|n))!==0?0:a}function Cn(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function qt(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function yn(){var t=I.p;return t!==0?t:(t=window.event,t===void 0?32:ex(t.type))}function za(t,n){var a=I.p;try{return I.p=t,n()}finally{I.p=a}}var Vn=Math.random().toString(36).slice(2),gn="__reactFiber$"+Vn,Fn="__reactProps$"+Vn,ra="__reactContainer$"+Vn,Ia="__reactEvents$"+Vn,ml="__reactListeners$"+Vn,tr="__reactHandles$"+Vn,so="__reactResources$"+Vn,Ba="__reactMarker$"+Vn;function ro(t){delete t[gn],delete t[Fn],delete t[Ia],delete t[ml],delete t[tr]}function Ha(t){var n=t[gn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[ra]||a[gn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Ig(t);t!==null;){if(a=t[gn])return a;t=Ig(t)}return n}t=a,a=t.parentNode}return null}function Ga(t){if(t=t[gn]||t[ra]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Ts(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Va(t){var n=t[so];return n||(n=t[so]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Sn(t){t[Ba]=!0}var gl=new Set,L={};function re(t,n){me(t,n),me(t+"Capture",n)}function me(t,n){for(L[t]=n,t=0;t<n.length;t++)gl.add(n[t])}var de=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),he={},Ye={};function $e(t){return Ct.call(Ye,t)?!0:Ct.call(he,t)?!1:de.test(t)?Ye[t]=!0:(he[t]=!0,!1)}function Xe(t,n,a){if($e(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function nt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function et(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function lt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function St(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function rt(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,d.call(this,y)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Gt(t){if(!t._valueTracker){var n=St(t)?"checked":"value";t._valueTracker=rt(t,n,""+t[n])}}function fn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=St(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function rn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Zt=/[\n"\\]/g;function Kt(t){return t.replace(Zt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ze(t,n,a,o,u,d,y,O){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),n!=null?y==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+lt(n)):t.value!==""+lt(n)&&(t.value=""+lt(n)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),n!=null?wt(t,y,lt(n)):a!=null?wt(t,y,lt(a)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),O!=null&&typeof O!="function"&&typeof O!="symbol"&&typeof O!="boolean"?t.name=""+lt(O):t.removeAttribute("name")}function kn(t,n,a,o,u,d,y,O){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Gt(t);return}a=a!=null?""+lt(a):"",n=n!=null?""+lt(n):a,O||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=O?t.checked:!!o,t.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),Gt(t)}function wt(t,n,a){n==="number"&&rn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function wn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+lt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function ci(t,n,a){if(n!=null&&(n=""+lt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+lt(a):""}function Fi(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(X(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=lt(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Gt(t)}function ui(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Qt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function dn(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Qt.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function zi(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&dn(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&dn(t,d,n[d])}function Xt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ka=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function As(t){return ka.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function oa(){}var yu=null;function Su(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var nr=null,ir=null;function wp(t){var n=Ga(t);if(n&&(t=n.stateNode)){var a=t[Fn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Ze(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Kt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[Fn]||null;if(!u)throw Error(s(90));Ze(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&fn(o)}break e;case"textarea":ci(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&wn(t,!!a.multiple,n,!1)}}}var bu=!1;function Dp(t,n,a){if(bu)return t(n,a);bu=!0;try{var o=t(n);return o}finally{if(bu=!1,(nr!==null||ir!==null)&&(ic(),nr&&(n=nr,t=ir,ir=nr=null,wp(n),t)))for(n=0;n<t.length;n++)wp(t[n])}}function oo(t,n){var a=t.stateNode;if(a===null)return null;var o=a[Fn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var la=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mu=!1;if(la)try{var lo={};Object.defineProperty(lo,"passive",{get:function(){Mu=!0}}),window.addEventListener("test",lo,lo),window.removeEventListener("test",lo,lo)}catch{Mu=!1}var ja=null,Eu=null,xl=null;function Np(){if(xl)return xl;var t,n=Eu,a=n.length,o,u="value"in ja?ja.value:ja.textContent,d=u.length;for(t=0;t<a&&n[t]===u[t];t++);var y=a-t;for(o=1;o<=y&&n[a-o]===u[d-o];o++);return xl=u.slice(t,1<o?1-o:void 0)}function _l(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function vl(){return!0}function Up(){return!1}function ei(t){function n(a,o,u,d,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=y,this.currentTarget=null;for(var O in t)t.hasOwnProperty(O)&&(a=t[O],this[O]=a?a(d):d[O]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?vl:Up,this.isPropagationStopped=Up,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),n}var Rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yl=ei(Rs),co=_({},Rs,{view:0,detail:0}),Sv=ei(co),Tu,Au,uo,Sl=_({},co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==uo&&(uo&&t.type==="mousemove"?(Tu=t.screenX-uo.screenX,Au=t.screenY-uo.screenY):Au=Tu=0,uo=t),Tu)},movementY:function(t){return"movementY"in t?t.movementY:Au}}),Lp=ei(Sl),bv=_({},Sl,{dataTransfer:0}),Mv=ei(bv),Ev=_({},co,{relatedTarget:0}),Ru=ei(Ev),Tv=_({},Rs,{animationName:0,elapsedTime:0,pseudoElement:0}),Av=ei(Tv),Rv=_({},Rs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Cv=ei(Rv),wv=_({},Rs,{data:0}),Op=ei(wv),Dv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Uv[t])?!!n[t]:!1}function Cu(){return Lv}var Ov=_({},co,{key:function(t){if(t.key){var n=Dv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=_l(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Nv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cu,charCode:function(t){return t.type==="keypress"?_l(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_l(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Pv=ei(Ov),Fv=_({},Sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pp=ei(Fv),zv=_({},co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cu}),Iv=ei(zv),Bv=_({},Rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hv=ei(Bv),Gv=_({},Sl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Vv=ei(Gv),kv=_({},Rs,{newState:0,oldState:0}),jv=ei(kv),Wv=[9,13,27,32],wu=la&&"CompositionEvent"in window,fo=null;la&&"documentMode"in document&&(fo=document.documentMode);var Xv=la&&"TextEvent"in window&&!fo,Fp=la&&(!wu||fo&&8<fo&&11>=fo),zp=" ",Ip=!1;function Bp(t,n){switch(t){case"keyup":return Wv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ar=!1;function Yv(t,n){switch(t){case"compositionend":return Hp(n);case"keypress":return n.which!==32?null:(Ip=!0,zp);case"textInput":return t=n.data,t===zp&&Ip?null:t;default:return null}}function qv(t,n){if(ar)return t==="compositionend"||!wu&&Bp(t,n)?(t=Np(),xl=Eu=ja=null,ar=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Fp&&n.locale!=="ko"?null:n.data;default:return null}}var Zv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Zv[t.type]:n==="textarea"}function Vp(t,n,a,o){nr?ir?ir.push(o):ir=[o]:nr=o,n=uc(n,"onChange"),0<n.length&&(a=new yl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var ho=null,po=null;function Kv(t){Eg(t,0)}function bl(t){var n=Ts(t);if(fn(n))return t}function kp(t,n){if(t==="change")return n}var jp=!1;if(la){var Du;if(la){var Nu="oninput"in document;if(!Nu){var Wp=document.createElement("div");Wp.setAttribute("oninput","return;"),Nu=typeof Wp.oninput=="function"}Du=Nu}else Du=!1;jp=Du&&(!document.documentMode||9<document.documentMode)}function Xp(){ho&&(ho.detachEvent("onpropertychange",Yp),po=ho=null)}function Yp(t){if(t.propertyName==="value"&&bl(po)){var n=[];Vp(n,po,t,Su(t)),Dp(Kv,n)}}function Qv(t,n,a){t==="focusin"?(Xp(),ho=n,po=a,ho.attachEvent("onpropertychange",Yp)):t==="focusout"&&Xp()}function Jv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return bl(po)}function $v(t,n){if(t==="click")return bl(n)}function ey(t,n){if(t==="input"||t==="change")return bl(n)}function ty(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var fi=typeof Object.is=="function"?Object.is:ty;function mo(t,n){if(fi(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Ct.call(n,u)||!fi(t[u],n[u]))return!1}return!0}function qp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zp(t,n){var a=qp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=qp(a)}}function Kp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Kp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Qp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=rn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=rn(t.document)}return n}function Uu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var ny=la&&"documentMode"in document&&11>=document.documentMode,sr=null,Lu=null,go=null,Ou=!1;function Jp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ou||sr==null||sr!==rn(o)||(o=sr,"selectionStart"in o&&Uu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),go&&mo(go,o)||(go=o,o=uc(Lu,"onSelect"),0<o.length&&(n=new yl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=sr)))}function Cs(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var rr={animationend:Cs("Animation","AnimationEnd"),animationiteration:Cs("Animation","AnimationIteration"),animationstart:Cs("Animation","AnimationStart"),transitionrun:Cs("Transition","TransitionRun"),transitionstart:Cs("Transition","TransitionStart"),transitioncancel:Cs("Transition","TransitionCancel"),transitionend:Cs("Transition","TransitionEnd")},Pu={},$p={};la&&($p=document.createElement("div").style,"AnimationEvent"in window||(delete rr.animationend.animation,delete rr.animationiteration.animation,delete rr.animationstart.animation),"TransitionEvent"in window||delete rr.transitionend.transition);function ws(t){if(Pu[t])return Pu[t];if(!rr[t])return t;var n=rr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in $p)return Pu[t]=n[a];return t}var em=ws("animationend"),tm=ws("animationiteration"),nm=ws("animationstart"),iy=ws("transitionrun"),ay=ws("transitionstart"),sy=ws("transitioncancel"),im=ws("transitionend"),am=new Map,Fu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Fu.push("scrollEnd");function Ii(t,n){am.set(t,n),re(n,[t])}var Ml=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},bi=[],or=0,zu=0;function El(){for(var t=or,n=zu=or=0;n<t;){var a=bi[n];bi[n++]=null;var o=bi[n];bi[n++]=null;var u=bi[n];bi[n++]=null;var d=bi[n];if(bi[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}d!==0&&sm(a,u,d)}}function Tl(t,n,a,o){bi[or++]=t,bi[or++]=n,bi[or++]=a,bi[or++]=o,zu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Iu(t,n,a,o){return Tl(t,n,a,o),Al(t)}function Ds(t,n){return Tl(t,null,null,n),Al(t)}function sm(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-ke(a),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function Al(t){if(50<Io)throw Io=0,qf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var lr={};function ry(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(t,n,a,o){return new ry(t,n,a,o)}function Bu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ca(t,n){var a=t.alternate;return a===null?(a=di(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function rm(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Rl(t,n,a,o,u,d){var y=0;if(o=t,typeof t=="function")Bu(t)&&(y=1);else if(typeof t=="string")y=fS(t,a,W.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case k:return t=di(31,a,n,u),t.elementType=k,t.lanes=d,t;case U:return Ns(a.children,u,d,n);case S:y=8,u|=24;break;case v:return t=di(12,a,n,u|2),t.elementType=v,t.lanes=d,t;case Z:return t=di(13,a,n,u),t.elementType=Z,t.lanes=d,t;case G:return t=di(19,a,n,u),t.elementType=G,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case V:y=10;break e;case P:y=9;break e;case B:y=11;break e;case j:y=14;break e;case D:y=16,o=null;break e}y=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=di(y,a,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function Ns(t,n,a,o){return t=di(7,t,o,n),t.lanes=a,t}function Hu(t,n,a){return t=di(6,t,null,n),t.lanes=a,t}function om(t){var n=di(18,null,null,0);return n.stateNode=t,n}function Gu(t,n,a){return n=di(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var lm=new WeakMap;function Mi(t,n){if(typeof t=="object"&&t!==null){var a=lm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:pt(n)},lm.set(t,n),n)}return{value:t,source:n,stack:pt(n)}}var cr=[],ur=0,Cl=null,xo=0,Ei=[],Ti=0,Wa=null,Yi=1,qi="";function ua(t,n){cr[ur++]=xo,cr[ur++]=Cl,Cl=t,xo=n}function cm(t,n,a){Ei[Ti++]=Yi,Ei[Ti++]=qi,Ei[Ti++]=Wa,Wa=t;var o=Yi;t=qi;var u=32-ke(o)-1;o&=~(1<<u),a+=1;var d=32-ke(n)+u;if(30<d){var y=u-u%5;d=(o&(1<<y)-1).toString(32),o>>=y,u-=y,Yi=1<<32-ke(n)+u|a<<u|o,qi=d+t}else Yi=1<<d|a<<u|o,qi=t}function Vu(t){t.return!==null&&(ua(t,1),cm(t,1,0))}function ku(t){for(;t===Cl;)Cl=cr[--ur],cr[ur]=null,xo=cr[--ur],cr[ur]=null;for(;t===Wa;)Wa=Ei[--Ti],Ei[Ti]=null,qi=Ei[--Ti],Ei[Ti]=null,Yi=Ei[--Ti],Ei[Ti]=null}function um(t,n){Ei[Ti++]=Yi,Ei[Ti++]=qi,Ei[Ti++]=Wa,Yi=n.id,qi=n.overflow,Wa=t}var zn=null,cn=null,It=!1,Xa=null,Ai=!1,ju=Error(s(519));function Ya(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw _o(Mi(n,t)),ju}function fm(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[gn]=t,n[Fn]=o,a){case"dialog":Nt("cancel",n),Nt("close",n);break;case"iframe":case"object":case"embed":Nt("load",n);break;case"video":case"audio":for(a=0;a<Ho.length;a++)Nt(Ho[a],n);break;case"source":Nt("error",n);break;case"img":case"image":case"link":Nt("error",n),Nt("load",n);break;case"details":Nt("toggle",n);break;case"input":Nt("invalid",n),kn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Nt("invalid",n);break;case"textarea":Nt("invalid",n),Fi(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Cg(n.textContent,a)?(o.popover!=null&&(Nt("beforetoggle",n),Nt("toggle",n)),o.onScroll!=null&&Nt("scroll",n),o.onScrollEnd!=null&&Nt("scrollend",n),o.onClick!=null&&(n.onclick=oa),n=!0):n=!1,n||Ya(t,!0)}function dm(t){for(zn=t.return;zn;)switch(zn.tag){case 5:case 31:case 13:Ai=!1;return;case 27:case 3:Ai=!0;return;default:zn=zn.return}}function fr(t){if(t!==zn)return!1;if(!It)return dm(t),It=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||cd(t.type,t.memoizedProps)),a=!a),a&&cn&&Ya(t),dm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));cn=zg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));cn=zg(t)}else n===27?(n=cn,os(t.type)?(t=pd,pd=null,cn=t):cn=n):cn=zn?Ci(t.stateNode.nextSibling):null;return!0}function Us(){cn=zn=null,It=!1}function Wu(){var t=Xa;return t!==null&&(ai===null?ai=t:ai.push.apply(ai,t),Xa=null),t}function _o(t){Xa===null?Xa=[t]:Xa.push(t)}var Xu=b(null),Ls=null,fa=null;function qa(t,n,a){H(Xu,n._currentValue),n._currentValue=a}function da(t){t._currentValue=Xu.current,M(Xu)}function Yu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function qu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var y=u.child;d=d.firstContext;e:for(;d!==null;){var O=d;d=u;for(var Q=0;Q<n.length;Q++)if(O.context===n[Q]){d.lanes|=a,O=d.alternate,O!==null&&(O.lanes|=a),Yu(d.return,a,t),o||(y=null);break e}d=O.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(s(341));y.lanes|=a,d=y.alternate,d!==null&&(d.lanes|=a),Yu(y,a,t),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===t){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function dr(t,n,a,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var O=u.type;fi(u.pendingProps.value,y.value)||(t!==null?t.push(O):t=[O])}}else if(u===se.current){if(y=u.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Wo):t=[Wo])}u=u.return}t!==null&&qu(n,t,a,o),n.flags|=262144}function wl(t){for(t=t.firstContext;t!==null;){if(!fi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Os(t){Ls=t,fa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function In(t){return hm(Ls,t)}function Dl(t,n){return Ls===null&&Os(t),hm(t,n)}function hm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},fa===null){if(t===null)throw Error(s(308));fa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else fa=fa.next=n;return a}var oy=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},ly=r.unstable_scheduleCallback,cy=r.unstable_NormalPriority,bn={$$typeof:V,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Zu(){return{controller:new oy,data:new Map,refCount:0}}function vo(t){t.refCount--,t.refCount===0&&ly(cy,function(){t.controller.abort()})}var yo=null,Ku=0,hr=0,pr=null;function uy(t,n){if(yo===null){var a=yo=[];Ku=0,hr=ed(),pr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Ku++,n.then(pm,pm),n}function pm(){if(--Ku===0&&yo!==null){pr!==null&&(pr.status="fulfilled");var t=yo;yo=null,hr=0,pr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function fy(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var mm=N.S;N.S=function(t,n){J0=Ue(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&uy(t,n),mm!==null&&mm(t,n)};var Ps=b(null);function Qu(){var t=Ps.current;return t!==null?t:on.pooledCache}function Nl(t,n){n===null?H(Ps,Ps.current):H(Ps,n.pool)}function gm(){var t=Qu();return t===null?null:{parent:bn._currentValue,pool:t}}var mr=Error(s(460)),Ju=Error(s(474)),Ul=Error(s(542)),Ll={then:function(){}};function xm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function _m(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(oa,oa),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,ym(t),t;default:if(typeof n.status=="string")n.then(oa,oa);else{if(t=on,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,ym(t),t}throw zs=n,mr}}function Fs(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(zs=a,mr):a}}var zs=null;function vm(){if(zs===null)throw Error(s(459));var t=zs;return zs=null,t}function ym(t){if(t===mr||t===Ul)throw Error(s(483))}var gr=null,So=0;function Ol(t){var n=So;return So+=1,gr===null&&(gr=[]),_m(gr,t,n)}function bo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Pl(t,n){throw n.$$typeof===x?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Sm(t){function n(oe,ne){if(t){var ue=oe.deletions;ue===null?(oe.deletions=[ne],oe.flags|=16):ue.push(ne)}}function a(oe,ne){if(!t)return null;for(;ne!==null;)n(oe,ne),ne=ne.sibling;return null}function o(oe){for(var ne=new Map;oe!==null;)oe.key!==null?ne.set(oe.key,oe):ne.set(oe.index,oe),oe=oe.sibling;return ne}function u(oe,ne){return oe=ca(oe,ne),oe.index=0,oe.sibling=null,oe}function d(oe,ne,ue){return oe.index=ue,t?(ue=oe.alternate,ue!==null?(ue=ue.index,ue<ne?(oe.flags|=67108866,ne):ue):(oe.flags|=67108866,ne)):(oe.flags|=1048576,ne)}function y(oe){return t&&oe.alternate===null&&(oe.flags|=67108866),oe}function O(oe,ne,ue,Ce){return ne===null||ne.tag!==6?(ne=Hu(ue,oe.mode,Ce),ne.return=oe,ne):(ne=u(ne,ue),ne.return=oe,ne)}function Q(oe,ne,ue,Ce){var ct=ue.type;return ct===U?Te(oe,ne,ue.props.children,Ce,ue.key):ne!==null&&(ne.elementType===ct||typeof ct=="object"&&ct!==null&&ct.$$typeof===D&&Fs(ct)===ne.type)?(ne=u(ne,ue.props),bo(ne,ue),ne.return=oe,ne):(ne=Rl(ue.type,ue.key,ue.props,null,oe.mode,Ce),bo(ne,ue),ne.return=oe,ne)}function fe(oe,ne,ue,Ce){return ne===null||ne.tag!==4||ne.stateNode.containerInfo!==ue.containerInfo||ne.stateNode.implementation!==ue.implementation?(ne=Gu(ue,oe.mode,Ce),ne.return=oe,ne):(ne=u(ne,ue.children||[]),ne.return=oe,ne)}function Te(oe,ne,ue,Ce,ct){return ne===null||ne.tag!==7?(ne=Ns(ue,oe.mode,Ce,ct),ne.return=oe,ne):(ne=u(ne,ue),ne.return=oe,ne)}function De(oe,ne,ue){if(typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint")return ne=Hu(""+ne,oe.mode,ue),ne.return=oe,ne;if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case E:return ue=Rl(ne.type,ne.key,ne.props,null,oe.mode,ue),bo(ue,ne),ue.return=oe,ue;case T:return ne=Gu(ne,oe.mode,ue),ne.return=oe,ne;case D:return ne=Fs(ne),De(oe,ne,ue)}if(X(ne)||ae(ne))return ne=Ns(ne,oe.mode,ue,null),ne.return=oe,ne;if(typeof ne.then=="function")return De(oe,Ol(ne),ue);if(ne.$$typeof===V)return De(oe,Dl(oe,ne),ue);Pl(oe,ne)}return null}function ge(oe,ne,ue,Ce){var ct=ne!==null?ne.key:null;if(typeof ue=="string"&&ue!==""||typeof ue=="number"||typeof ue=="bigint")return ct!==null?null:O(oe,ne,""+ue,Ce);if(typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case E:return ue.key===ct?Q(oe,ne,ue,Ce):null;case T:return ue.key===ct?fe(oe,ne,ue,Ce):null;case D:return ue=Fs(ue),ge(oe,ne,ue,Ce)}if(X(ue)||ae(ue))return ct!==null?null:Te(oe,ne,ue,Ce,null);if(typeof ue.then=="function")return ge(oe,ne,Ol(ue),Ce);if(ue.$$typeof===V)return ge(oe,ne,Dl(oe,ue),Ce);Pl(oe,ue)}return null}function ye(oe,ne,ue,Ce,ct){if(typeof Ce=="string"&&Ce!==""||typeof Ce=="number"||typeof Ce=="bigint")return oe=oe.get(ue)||null,O(ne,oe,""+Ce,ct);if(typeof Ce=="object"&&Ce!==null){switch(Ce.$$typeof){case E:return oe=oe.get(Ce.key===null?ue:Ce.key)||null,Q(ne,oe,Ce,ct);case T:return oe=oe.get(Ce.key===null?ue:Ce.key)||null,fe(ne,oe,Ce,ct);case D:return Ce=Fs(Ce),ye(oe,ne,ue,Ce,ct)}if(X(Ce)||ae(Ce))return oe=oe.get(ue)||null,Te(ne,oe,Ce,ct,null);if(typeof Ce.then=="function")return ye(oe,ne,ue,Ol(Ce),ct);if(Ce.$$typeof===V)return ye(oe,ne,ue,Dl(ne,Ce),ct);Pl(ne,Ce)}return null}function it(oe,ne,ue,Ce){for(var ct=null,Vt=null,st=ne,Mt=ne=0,Pt=null;st!==null&&Mt<ue.length;Mt++){st.index>Mt?(Pt=st,st=null):Pt=st.sibling;var kt=ge(oe,st,ue[Mt],Ce);if(kt===null){st===null&&(st=Pt);break}t&&st&&kt.alternate===null&&n(oe,st),ne=d(kt,ne,Mt),Vt===null?ct=kt:Vt.sibling=kt,Vt=kt,st=Pt}if(Mt===ue.length)return a(oe,st),It&&ua(oe,Mt),ct;if(st===null){for(;Mt<ue.length;Mt++)st=De(oe,ue[Mt],Ce),st!==null&&(ne=d(st,ne,Mt),Vt===null?ct=st:Vt.sibling=st,Vt=st);return It&&ua(oe,Mt),ct}for(st=o(st);Mt<ue.length;Mt++)Pt=ye(st,oe,Mt,ue[Mt],Ce),Pt!==null&&(t&&Pt.alternate!==null&&st.delete(Pt.key===null?Mt:Pt.key),ne=d(Pt,ne,Mt),Vt===null?ct=Pt:Vt.sibling=Pt,Vt=Pt);return t&&st.forEach(function(ds){return n(oe,ds)}),It&&ua(oe,Mt),ct}function dt(oe,ne,ue,Ce){if(ue==null)throw Error(s(151));for(var ct=null,Vt=null,st=ne,Mt=ne=0,Pt=null,kt=ue.next();st!==null&&!kt.done;Mt++,kt=ue.next()){st.index>Mt?(Pt=st,st=null):Pt=st.sibling;var ds=ge(oe,st,kt.value,Ce);if(ds===null){st===null&&(st=Pt);break}t&&st&&ds.alternate===null&&n(oe,st),ne=d(ds,ne,Mt),Vt===null?ct=ds:Vt.sibling=ds,Vt=ds,st=Pt}if(kt.done)return a(oe,st),It&&ua(oe,Mt),ct;if(st===null){for(;!kt.done;Mt++,kt=ue.next())kt=De(oe,kt.value,Ce),kt!==null&&(ne=d(kt,ne,Mt),Vt===null?ct=kt:Vt.sibling=kt,Vt=kt);return It&&ua(oe,Mt),ct}for(st=o(st);!kt.done;Mt++,kt=ue.next())kt=ye(st,oe,Mt,kt.value,Ce),kt!==null&&(t&&kt.alternate!==null&&st.delete(kt.key===null?Mt:kt.key),ne=d(kt,ne,Mt),Vt===null?ct=kt:Vt.sibling=kt,Vt=kt);return t&&st.forEach(function(bS){return n(oe,bS)}),It&&ua(oe,Mt),ct}function an(oe,ne,ue,Ce){if(typeof ue=="object"&&ue!==null&&ue.type===U&&ue.key===null&&(ue=ue.props.children),typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case E:e:{for(var ct=ue.key;ne!==null;){if(ne.key===ct){if(ct=ue.type,ct===U){if(ne.tag===7){a(oe,ne.sibling),Ce=u(ne,ue.props.children),Ce.return=oe,oe=Ce;break e}}else if(ne.elementType===ct||typeof ct=="object"&&ct!==null&&ct.$$typeof===D&&Fs(ct)===ne.type){a(oe,ne.sibling),Ce=u(ne,ue.props),bo(Ce,ue),Ce.return=oe,oe=Ce;break e}a(oe,ne);break}else n(oe,ne);ne=ne.sibling}ue.type===U?(Ce=Ns(ue.props.children,oe.mode,Ce,ue.key),Ce.return=oe,oe=Ce):(Ce=Rl(ue.type,ue.key,ue.props,null,oe.mode,Ce),bo(Ce,ue),Ce.return=oe,oe=Ce)}return y(oe);case T:e:{for(ct=ue.key;ne!==null;){if(ne.key===ct)if(ne.tag===4&&ne.stateNode.containerInfo===ue.containerInfo&&ne.stateNode.implementation===ue.implementation){a(oe,ne.sibling),Ce=u(ne,ue.children||[]),Ce.return=oe,oe=Ce;break e}else{a(oe,ne);break}else n(oe,ne);ne=ne.sibling}Ce=Gu(ue,oe.mode,Ce),Ce.return=oe,oe=Ce}return y(oe);case D:return ue=Fs(ue),an(oe,ne,ue,Ce)}if(X(ue))return it(oe,ne,ue,Ce);if(ae(ue)){if(ct=ae(ue),typeof ct!="function")throw Error(s(150));return ue=ct.call(ue),dt(oe,ne,ue,Ce)}if(typeof ue.then=="function")return an(oe,ne,Ol(ue),Ce);if(ue.$$typeof===V)return an(oe,ne,Dl(oe,ue),Ce);Pl(oe,ue)}return typeof ue=="string"&&ue!==""||typeof ue=="number"||typeof ue=="bigint"?(ue=""+ue,ne!==null&&ne.tag===6?(a(oe,ne.sibling),Ce=u(ne,ue),Ce.return=oe,oe=Ce):(a(oe,ne),Ce=Hu(ue,oe.mode,Ce),Ce.return=oe,oe=Ce),y(oe)):a(oe,ne)}return function(oe,ne,ue,Ce){try{So=0;var ct=an(oe,ne,ue,Ce);return gr=null,ct}catch(st){if(st===mr||st===Ul)throw st;var Vt=di(29,st,null,oe.mode);return Vt.lanes=Ce,Vt.return=oe,Vt}finally{}}}var Is=Sm(!0),bm=Sm(!1),Za=!1;function $u(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ef(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ka(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Qa(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Wt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Al(t),sm(t,null,a),n}return Tl(t,o,n,a),Al(t)}function Mo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,yt(t,a)}}function tf(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=y:d=d.next=y,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var nf=!1;function Eo(){if(nf){var t=pr;if(t!==null)throw t}}function To(t,n,a,o){nf=!1;var u=t.updateQueue;Za=!1;var d=u.firstBaseUpdate,y=u.lastBaseUpdate,O=u.shared.pending;if(O!==null){u.shared.pending=null;var Q=O,fe=Q.next;Q.next=null,y===null?d=fe:y.next=fe,y=Q;var Te=t.alternate;Te!==null&&(Te=Te.updateQueue,O=Te.lastBaseUpdate,O!==y&&(O===null?Te.firstBaseUpdate=fe:O.next=fe,Te.lastBaseUpdate=Q))}if(d!==null){var De=u.baseState;y=0,Te=fe=Q=null,O=d;do{var ge=O.lane&-536870913,ye=ge!==O.lane;if(ye?(Ot&ge)===ge:(o&ge)===ge){ge!==0&&ge===hr&&(nf=!0),Te!==null&&(Te=Te.next={lane:0,tag:O.tag,payload:O.payload,callback:null,next:null});e:{var it=t,dt=O;ge=n;var an=a;switch(dt.tag){case 1:if(it=dt.payload,typeof it=="function"){De=it.call(an,De,ge);break e}De=it;break e;case 3:it.flags=it.flags&-65537|128;case 0:if(it=dt.payload,ge=typeof it=="function"?it.call(an,De,ge):it,ge==null)break e;De=_({},De,ge);break e;case 2:Za=!0}}ge=O.callback,ge!==null&&(t.flags|=64,ye&&(t.flags|=8192),ye=u.callbacks,ye===null?u.callbacks=[ge]:ye.push(ge))}else ye={lane:ge,tag:O.tag,payload:O.payload,callback:O.callback,next:null},Te===null?(fe=Te=ye,Q=De):Te=Te.next=ye,y|=ge;if(O=O.next,O===null){if(O=u.shared.pending,O===null)break;ye=O,O=ye.next,ye.next=null,u.lastBaseUpdate=ye,u.shared.pending=null}}while(!0);Te===null&&(Q=De),u.baseState=Q,u.firstBaseUpdate=fe,u.lastBaseUpdate=Te,d===null&&(u.shared.lanes=0),ns|=y,t.lanes=y,t.memoizedState=De}}function Mm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Em(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Mm(a[t],n)}var xr=b(null),Fl=b(0);function Tm(t,n){t=Sa,H(Fl,t),H(xr,n),Sa=t|n.baseLanes}function af(){H(Fl,Sa),H(xr,xr.current)}function sf(){Sa=Fl.current,M(xr),M(Fl)}var hi=b(null),Ri=null;function Ja(t){var n=t.alternate;H(xn,xn.current&1),H(hi,t),Ri===null&&(n===null||xr.current!==null||n.memoizedState!==null)&&(Ri=t)}function rf(t){H(xn,xn.current),H(hi,t),Ri===null&&(Ri=t)}function Am(t){t.tag===22?(H(xn,xn.current),H(hi,t),Ri===null&&(Ri=t)):$a()}function $a(){H(xn,xn.current),H(hi,hi.current)}function pi(t){M(hi),Ri===t&&(Ri=null),M(xn)}var xn=b(0);function zl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||dd(a)||hd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ha=0,bt=null,tn=null,Mn=null,Il=!1,_r=!1,Bs=!1,Bl=0,Ao=0,vr=null,dy=0;function pn(){throw Error(s(321))}function of(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!fi(t[a],n[a]))return!1;return!0}function lf(t,n,a,o,u,d){return ha=d,bt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=t===null||t.memoizedState===null?c0:Mf,Bs=!1,d=a(o,u),Bs=!1,_r&&(d=Cm(n,a,o,u)),Rm(t),d}function Rm(t){N.H=wo;var n=tn!==null&&tn.next!==null;if(ha=0,Mn=tn=bt=null,Il=!1,Ao=0,vr=null,n)throw Error(s(300));t===null||En||(t=t.dependencies,t!==null&&wl(t)&&(En=!0))}function Cm(t,n,a,o){bt=t;var u=0;do{if(_r&&(vr=null),Ao=0,_r=!1,25<=u)throw Error(s(301));if(u+=1,Mn=tn=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}N.H=u0,d=n(a,o)}while(_r);return d}function hy(){var t=N.H,n=t.useState()[0];return n=typeof n.then=="function"?Ro(n):n,t=t.useState()[0],(tn!==null?tn.memoizedState:null)!==t&&(bt.flags|=1024),n}function cf(){var t=Bl!==0;return Bl=0,t}function uf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function ff(t){if(Il){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Il=!1}ha=0,Mn=tn=bt=null,_r=!1,Ao=Bl=0,vr=null}function Kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mn===null?bt.memoizedState=Mn=t:Mn=Mn.next=t,Mn}function _n(){if(tn===null){var t=bt.alternate;t=t!==null?t.memoizedState:null}else t=tn.next;var n=Mn===null?bt.memoizedState:Mn.next;if(n!==null)Mn=n,tn=t;else{if(t===null)throw bt.alternate===null?Error(s(467)):Error(s(310));tn=t,t={memoizedState:tn.memoizedState,baseState:tn.baseState,baseQueue:tn.baseQueue,queue:tn.queue,next:null},Mn===null?bt.memoizedState=Mn=t:Mn=Mn.next=t}return Mn}function Hl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ro(t){var n=Ao;return Ao+=1,vr===null&&(vr=[]),t=_m(vr,t,n),n=bt,(Mn===null?n.memoizedState:Mn.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?c0:Mf),t}function Gl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ro(t);if(t.$$typeof===V)return In(t)}throw Error(s(438,String(t)))}function df(t){var n=null,a=bt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=bt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Hl(),bt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=J;return n.index++,a}function pa(t,n){return typeof n=="function"?n(t):n}function Vl(t){var n=_n();return hf(n,tn,t)}function hf(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var y=u.next;u.next=d.next,d.next=y}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var O=y=null,Q=null,fe=n,Te=!1;do{var De=fe.lane&-536870913;if(De!==fe.lane?(Ot&De)===De:(ha&De)===De){var ge=fe.revertLane;if(ge===0)Q!==null&&(Q=Q.next={lane:0,revertLane:0,gesture:null,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null}),De===hr&&(Te=!0);else if((ha&ge)===ge){fe=fe.next,ge===hr&&(Te=!0);continue}else De={lane:0,revertLane:fe.revertLane,gesture:null,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null},Q===null?(O=Q=De,y=d):Q=Q.next=De,bt.lanes|=ge,ns|=ge;De=fe.action,Bs&&a(d,De),d=fe.hasEagerState?fe.eagerState:a(d,De)}else ge={lane:De,revertLane:fe.revertLane,gesture:fe.gesture,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null},Q===null?(O=Q=ge,y=d):Q=Q.next=ge,bt.lanes|=De,ns|=De;fe=fe.next}while(fe!==null&&fe!==n);if(Q===null?y=d:Q.next=O,!fi(d,t.memoizedState)&&(En=!0,Te&&(a=pr,a!==null)))throw a;t.memoizedState=d,t.baseState=y,t.baseQueue=Q,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function pf(t){var n=_n(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do d=t(d,y.action),y=y.next;while(y!==u);fi(d,n.memoizedState)||(En=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function wm(t,n,a){var o=bt,u=_n(),d=It;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var y=!fi((tn||u).memoizedState,a);if(y&&(u.memoizedState=a,En=!0),u=u.queue,xf(Um.bind(null,o,u,t),[t]),u.getSnapshot!==n||y||Mn!==null&&Mn.memoizedState.tag&1){if(o.flags|=2048,yr(9,{destroy:void 0},Nm.bind(null,o,u,a,n),null),on===null)throw Error(s(349));d||(ha&127)!==0||Dm(o,n,a)}return a}function Dm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=bt.updateQueue,n===null?(n=Hl(),bt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Nm(t,n,a,o){n.value=a,n.getSnapshot=o,Lm(n)&&Om(t)}function Um(t,n,a){return a(function(){Lm(n)&&Om(t)})}function Lm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!fi(t,a)}catch{return!0}}function Om(t){var n=Ds(t,2);n!==null&&si(n,t,2)}function mf(t){var n=Kn();if(typeof t=="function"){var a=t;if(t=a(),Bs){Ve(!0);try{a()}finally{Ve(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:t},n}function Pm(t,n,a,o){return t.baseState=a,hf(t,tn,typeof o=="function"?o:pa)}function py(t,n,a,o,u){if(Wl(t))throw Error(s(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){d.listeners.push(y)}};N.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Fm(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Fm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=N.T,y={};N.T=y;try{var O=a(u,o),Q=N.S;Q!==null&&Q(y,O),zm(t,n,O)}catch(fe){gf(t,n,fe)}finally{d!==null&&y.types!==null&&(d.types=y.types),N.T=d}}else try{d=a(u,o),zm(t,n,d)}catch(fe){gf(t,n,fe)}}function zm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Im(t,n,o)},function(o){return gf(t,n,o)}):Im(t,n,a)}function Im(t,n,a){n.status="fulfilled",n.value=a,Bm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Fm(t,a)))}function gf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Bm(n),n=n.next;while(n!==o)}t.action=null}function Bm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Hm(t,n){return n}function Gm(t,n){if(It){var a=on.formState;if(a!==null){e:{var o=bt;if(It){if(cn){t:{for(var u=cn,d=Ai;u.nodeType!==8;){if(!d){u=null;break t}if(u=Ci(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){cn=Ci(u.nextSibling),o=u.data==="F!";break e}}Ya(o)}o=!1}o&&(n=a[0])}}return a=Kn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hm,lastRenderedState:n},a.queue=o,a=r0.bind(null,bt,o),o.dispatch=a,o=mf(!1),d=bf.bind(null,bt,!1,o.queue),o=Kn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=py.bind(null,bt,u,d,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Vm(t){var n=_n();return km(n,tn,t)}function km(t,n,a){if(n=hf(t,n,Hm)[0],t=Vl(pa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Ro(n)}catch(y){throw y===mr?Ul:y}else o=n;n=_n();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(bt.flags|=2048,yr(9,{destroy:void 0},my.bind(null,u,a),null)),[o,d,t]}function my(t,n){t.action=n}function jm(t){var n=_n(),a=tn;if(a!==null)return km(n,a,t);_n(),n=n.memoizedState,a=_n();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function yr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=bt.updateQueue,n===null&&(n=Hl(),bt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Wm(){return _n().memoizedState}function kl(t,n,a,o){var u=Kn();bt.flags|=t,u.memoizedState=yr(1|n,{destroy:void 0},a,o===void 0?null:o)}function jl(t,n,a,o){var u=_n();o=o===void 0?null:o;var d=u.memoizedState.inst;tn!==null&&o!==null&&of(o,tn.memoizedState.deps)?u.memoizedState=yr(n,d,a,o):(bt.flags|=t,u.memoizedState=yr(1|n,d,a,o))}function Xm(t,n){kl(8390656,8,t,n)}function xf(t,n){jl(2048,8,t,n)}function gy(t){bt.flags|=4;var n=bt.updateQueue;if(n===null)n=Hl(),bt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Ym(t){var n=_n().memoizedState;return gy({ref:n,nextImpl:t}),function(){if((Wt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function qm(t,n){return jl(4,2,t,n)}function Zm(t,n){return jl(4,4,t,n)}function Km(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Qm(t,n,a){a=a!=null?a.concat([t]):null,jl(4,4,Km.bind(null,n,t),a)}function _f(){}function Jm(t,n){var a=_n();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&of(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function $m(t,n){var a=_n();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&of(n,o[1]))return o[0];if(o=t(),Bs){Ve(!0);try{t()}finally{Ve(!1)}}return a.memoizedState=[o,n],o}function vf(t,n,a){return a===void 0||(ha&1073741824)!==0&&(Ot&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=eg(),bt.lanes|=t,ns|=t,a)}function e0(t,n,a,o){return fi(a,n)?a:xr.current!==null?(t=vf(t,a,o),fi(t,n)||(En=!0),t):(ha&42)===0||(ha&1073741824)!==0&&(Ot&261930)===0?(En=!0,t.memoizedState=a):(t=eg(),bt.lanes|=t,ns|=t,n)}function t0(t,n,a,o,u){var d=I.p;I.p=d!==0&&8>d?d:8;var y=N.T,O={};N.T=O,bf(t,!1,n,a);try{var Q=u(),fe=N.S;if(fe!==null&&fe(O,Q),Q!==null&&typeof Q=="object"&&typeof Q.then=="function"){var Te=fy(Q,o);Co(t,n,Te,xi(t))}else Co(t,n,o,xi(t))}catch(De){Co(t,n,{then:function(){},status:"rejected",reason:De},xi())}finally{I.p=d,y!==null&&O.types!==null&&(y.types=O.types),N.T=y}}function xy(){}function yf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=n0(t).queue;t0(t,u,n,R,a===null?xy:function(){return i0(t),a(o)})}function n0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:R,baseState:R,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:R},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function i0(t){var n=n0(t);n.next===null&&(n=t.alternate.memoizedState),Co(t,n.next.queue,{},xi())}function Sf(){return In(Wo)}function a0(){return _n().memoizedState}function s0(){return _n().memoizedState}function _y(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=xi();t=Ka(a);var o=Qa(n,t,a);o!==null&&(si(o,n,a),Mo(o,n,a)),n={cache:Zu()},t.payload=n;return}n=n.return}}function vy(t,n,a){var o=xi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Wl(t)?o0(n,a):(a=Iu(t,n,a,o),a!==null&&(si(a,t,o),l0(a,n,o)))}function r0(t,n,a){var o=xi();Co(t,n,a,o)}function Co(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Wl(t))o0(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var y=n.lastRenderedState,O=d(y,a);if(u.hasEagerState=!0,u.eagerState=O,fi(O,y))return Tl(t,n,u,0),on===null&&El(),!1}catch{}finally{}if(a=Iu(t,n,u,o),a!==null)return si(a,t,o),l0(a,n,o),!0}return!1}function bf(t,n,a,o){if(o={lane:2,revertLane:ed(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Wl(t)){if(n)throw Error(s(479))}else n=Iu(t,a,o,2),n!==null&&si(n,t,2)}function Wl(t){var n=t.alternate;return t===bt||n!==null&&n===bt}function o0(t,n){_r=Il=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function l0(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,yt(t,a)}}var wo={readContext:In,use:Gl,useCallback:pn,useContext:pn,useEffect:pn,useImperativeHandle:pn,useLayoutEffect:pn,useInsertionEffect:pn,useMemo:pn,useReducer:pn,useRef:pn,useState:pn,useDebugValue:pn,useDeferredValue:pn,useTransition:pn,useSyncExternalStore:pn,useId:pn,useHostTransitionStatus:pn,useFormState:pn,useActionState:pn,useOptimistic:pn,useMemoCache:pn,useCacheRefresh:pn};wo.useEffectEvent=pn;var c0={readContext:In,use:Gl,useCallback:function(t,n){return Kn().memoizedState=[t,n===void 0?null:n],t},useContext:In,useEffect:Xm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,kl(4194308,4,Km.bind(null,n,t),a)},useLayoutEffect:function(t,n){return kl(4194308,4,t,n)},useInsertionEffect:function(t,n){kl(4,2,t,n)},useMemo:function(t,n){var a=Kn();n=n===void 0?null:n;var o=t();if(Bs){Ve(!0);try{t()}finally{Ve(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Kn();if(a!==void 0){var u=a(n);if(Bs){Ve(!0);try{a(n)}finally{Ve(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=vy.bind(null,bt,t),[o.memoizedState,t]},useRef:function(t){var n=Kn();return t={current:t},n.memoizedState=t},useState:function(t){t=mf(t);var n=t.queue,a=r0.bind(null,bt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:_f,useDeferredValue:function(t,n){var a=Kn();return vf(a,t,n)},useTransition:function(){var t=mf(!1);return t=t0.bind(null,bt,t.queue,!0,!1),Kn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=bt,u=Kn();if(It){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),on===null)throw Error(s(349));(Ot&127)!==0||Dm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,Xm(Um.bind(null,o,d,t),[t]),o.flags|=2048,yr(9,{destroy:void 0},Nm.bind(null,o,d,a,n),null),a},useId:function(){var t=Kn(),n=on.identifierPrefix;if(It){var a=qi,o=Yi;a=(o&~(1<<32-ke(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Bl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=dy++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Sf,useFormState:Gm,useActionState:Gm,useOptimistic:function(t){var n=Kn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=bf.bind(null,bt,!0,a),a.dispatch=n,[t,n]},useMemoCache:df,useCacheRefresh:function(){return Kn().memoizedState=_y.bind(null,bt)},useEffectEvent:function(t){var n=Kn(),a={impl:t};return n.memoizedState=a,function(){if((Wt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Mf={readContext:In,use:Gl,useCallback:Jm,useContext:In,useEffect:xf,useImperativeHandle:Qm,useInsertionEffect:qm,useLayoutEffect:Zm,useMemo:$m,useReducer:Vl,useRef:Wm,useState:function(){return Vl(pa)},useDebugValue:_f,useDeferredValue:function(t,n){var a=_n();return e0(a,tn.memoizedState,t,n)},useTransition:function(){var t=Vl(pa)[0],n=_n().memoizedState;return[typeof t=="boolean"?t:Ro(t),n]},useSyncExternalStore:wm,useId:a0,useHostTransitionStatus:Sf,useFormState:Vm,useActionState:Vm,useOptimistic:function(t,n){var a=_n();return Pm(a,tn,t,n)},useMemoCache:df,useCacheRefresh:s0};Mf.useEffectEvent=Ym;var u0={readContext:In,use:Gl,useCallback:Jm,useContext:In,useEffect:xf,useImperativeHandle:Qm,useInsertionEffect:qm,useLayoutEffect:Zm,useMemo:$m,useReducer:pf,useRef:Wm,useState:function(){return pf(pa)},useDebugValue:_f,useDeferredValue:function(t,n){var a=_n();return tn===null?vf(a,t,n):e0(a,tn.memoizedState,t,n)},useTransition:function(){var t=pf(pa)[0],n=_n().memoizedState;return[typeof t=="boolean"?t:Ro(t),n]},useSyncExternalStore:wm,useId:a0,useHostTransitionStatus:Sf,useFormState:jm,useActionState:jm,useOptimistic:function(t,n){var a=_n();return tn!==null?Pm(a,tn,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:df,useCacheRefresh:s0};u0.useEffectEvent=Ym;function Ef(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Tf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=xi(),u=Ka(o);u.payload=n,a!=null&&(u.callback=a),n=Qa(t,u,o),n!==null&&(si(n,t,o),Mo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=xi(),u=Ka(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Qa(t,u,o),n!==null&&(si(n,t,o),Mo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=xi(),o=Ka(a);o.tag=2,n!=null&&(o.callback=n),n=Qa(t,o,a),n!==null&&(si(n,t,a),Mo(n,t,a))}};function f0(t,n,a,o,u,d,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,y):n.prototype&&n.prototype.isPureReactComponent?!mo(a,o)||!mo(u,d):!0}function d0(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Tf.enqueueReplaceState(n,n.state,null)}function Hs(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function h0(t){Ml(t)}function p0(t){console.error(t)}function m0(t){Ml(t)}function Xl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function g0(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Af(t,n,a){return a=Ka(a),a.tag=3,a.payload={element:null},a.callback=function(){Xl(t,n)},a}function x0(t){return t=Ka(t),t.tag=3,t}function _0(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){g0(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){g0(n,a,o),typeof u!="function"&&(is===null?is=new Set([this]):is.add(this));var O=o.stack;this.componentDidCatch(o.value,{componentStack:O!==null?O:""})})}function yy(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&dr(n,a,u,!0),a=hi.current,a!==null){switch(a.tag){case 31:case 13:return Ri===null?ac():a.alternate===null&&mn===0&&(mn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Ll?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Qf(t,o,u)),!1;case 22:return a.flags|=65536,o===Ll?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Qf(t,o,u)),!1}throw Error(s(435,a.tag))}return Qf(t,o,u),ac(),!1}if(It)return n=hi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==ju&&(t=Error(s(422),{cause:o}),_o(Mi(t,a)))):(o!==ju&&(n=Error(s(423),{cause:o}),_o(Mi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=Mi(o,a),u=Af(t.stateNode,o,u),tf(t,u),mn!==4&&(mn=2)),!1;var d=Error(s(520),{cause:o});if(d=Mi(d,a),zo===null?zo=[d]:zo.push(d),mn!==4&&(mn=2),n===null)return!0;o=Mi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Af(a.stateNode,o,t),tf(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(is===null||!is.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=x0(u),_0(u,t,a,o),tf(a,u),!1}a=a.return}while(a!==null);return!1}var Rf=Error(s(461)),En=!1;function Bn(t,n,a,o){n.child=t===null?bm(n,null,a,o):Is(n,t.child,a,o)}function v0(t,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var y={};for(var O in o)O!=="ref"&&(y[O]=o[O])}else y=o;return Os(n),o=lf(t,n,a,y,d,u),O=cf(),t!==null&&!En?(uf(t,n,u),ma(t,n,u)):(It&&O&&Vu(n),n.flags|=1,Bn(t,n,o,u),n.child)}function y0(t,n,a,o,u){if(t===null){var d=a.type;return typeof d=="function"&&!Bu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,S0(t,n,d,o,u)):(t=Rl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!Pf(t,u)){var y=d.memoizedProps;if(a=a.compare,a=a!==null?a:mo,a(y,o)&&t.ref===n.ref)return ma(t,n,u)}return n.flags|=1,t=ca(d,o),t.ref=n.ref,t.return=n,n.child=t}function S0(t,n,a,o,u){if(t!==null){var d=t.memoizedProps;if(mo(d,o)&&t.ref===n.ref)if(En=!1,n.pendingProps=o=d,Pf(t,u))(t.flags&131072)!==0&&(En=!0);else return n.lanes=t.lanes,ma(t,n,u)}return Cf(t,n,a,o,u)}function b0(t,n,a,o){var u=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return M0(t,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Nl(n,d!==null?d.cachePool:null),d!==null?Tm(n,d):af(),Am(n);else return o=n.lanes=536870912,M0(t,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(Nl(n,d.cachePool),Tm(n,d),$a(),n.memoizedState=null):(t!==null&&Nl(n,null),af(),$a());return Bn(t,n,u,a),n.child}function Do(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function M0(t,n,a,o,u){var d=Qu();return d=d===null?null:{parent:bn._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},t!==null&&Nl(n,null),af(),Am(n),t!==null&&dr(t,n,o,!0),n.childLanes=u,null}function Yl(t,n){return n=Zl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function E0(t,n,a){return Is(n,t.child,null,a),t=Yl(n,n.pendingProps),t.flags|=2,pi(n),n.memoizedState=null,t}function Sy(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(It){if(o.mode==="hidden")return t=Yl(n,o),n.lanes=536870912,Do(null,t);if(rf(n),(t=cn)?(t=Fg(t,Ai),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Wa!==null?{id:Yi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},a=om(t),a.return=n,n.child=a,zn=n,cn=null)):t=null,t===null)throw Ya(n);return n.lanes=536870912,null}return Yl(n,o)}var d=t.memoizedState;if(d!==null){var y=d.dehydrated;if(rf(n),u)if(n.flags&256)n.flags&=-257,n=E0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(En||dr(t,n,a,!1),u=(a&t.childLanes)!==0,En||u){if(o=on,o!==null&&(y=zt(o,a),y!==0&&y!==d.retryLane))throw d.retryLane=y,Ds(t,y),si(o,t,y),Rf;ac(),n=E0(t,n,a)}else t=d.treeContext,cn=Ci(y.nextSibling),zn=n,It=!0,Xa=null,Ai=!1,t!==null&&um(n,t),n=Yl(n,o),n.flags|=4096;return n}return t=ca(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function ql(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Cf(t,n,a,o,u){return Os(n),a=lf(t,n,a,o,void 0,u),o=cf(),t!==null&&!En?(uf(t,n,u),ma(t,n,u)):(It&&o&&Vu(n),n.flags|=1,Bn(t,n,a,u),n.child)}function T0(t,n,a,o,u,d){return Os(n),n.updateQueue=null,a=Cm(n,o,a,u),Rm(t),o=cf(),t!==null&&!En?(uf(t,n,d),ma(t,n,d)):(It&&o&&Vu(n),n.flags|=1,Bn(t,n,a,d),n.child)}function A0(t,n,a,o,u){if(Os(n),n.stateNode===null){var d=lr,y=a.contextType;typeof y=="object"&&y!==null&&(d=In(y)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Tf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},$u(n),y=a.contextType,d.context=typeof y=="object"&&y!==null?In(y):lr,d.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(Ef(n,a,y,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(y=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),y!==d.state&&Tf.enqueueReplaceState(d,d.state,null),To(n,o,d,u),Eo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var O=n.memoizedProps,Q=Hs(a,O);d.props=Q;var fe=d.context,Te=a.contextType;y=lr,typeof Te=="object"&&Te!==null&&(y=In(Te));var De=a.getDerivedStateFromProps;Te=typeof De=="function"||typeof d.getSnapshotBeforeUpdate=="function",O=n.pendingProps!==O,Te||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(O||fe!==y)&&d0(n,d,o,y),Za=!1;var ge=n.memoizedState;d.state=ge,To(n,o,d,u),Eo(),fe=n.memoizedState,O||ge!==fe||Za?(typeof De=="function"&&(Ef(n,a,De,o),fe=n.memoizedState),(Q=Za||f0(n,a,Q,o,ge,fe,y))?(Te||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=fe),d.props=o,d.state=fe,d.context=y,o=Q):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,ef(t,n),y=n.memoizedProps,Te=Hs(a,y),d.props=Te,De=n.pendingProps,ge=d.context,fe=a.contextType,Q=lr,typeof fe=="object"&&fe!==null&&(Q=In(fe)),O=a.getDerivedStateFromProps,(fe=typeof O=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(y!==De||ge!==Q)&&d0(n,d,o,Q),Za=!1,ge=n.memoizedState,d.state=ge,To(n,o,d,u),Eo();var ye=n.memoizedState;y!==De||ge!==ye||Za||t!==null&&t.dependencies!==null&&wl(t.dependencies)?(typeof O=="function"&&(Ef(n,a,O,o),ye=n.memoizedState),(Te=Za||f0(n,a,Te,o,ge,ye,Q)||t!==null&&t.dependencies!==null&&wl(t.dependencies))?(fe||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ye,Q),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ye,Q)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||y===t.memoizedProps&&ge===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&ge===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ye),d.props=o,d.state=ye,d.context=Q,o=Te):(typeof d.componentDidUpdate!="function"||y===t.memoizedProps&&ge===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&ge===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,ql(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=Is(n,t.child,null,u),n.child=Is(n,null,a,u)):Bn(t,n,a,u),n.memoizedState=d.state,t=n.child):t=ma(t,n,u),t}function R0(t,n,a,o){return Us(),n.flags|=256,Bn(t,n,a,o),n.child}var wf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Df(t){return{baseLanes:t,cachePool:gm()}}function Nf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=gi),t}function C0(t,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,y;if((y=d)||(y=t!==null&&t.memoizedState===null?!1:(xn.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,t===null){if(It){if(u?Ja(n):$a(),(t=cn)?(t=Fg(t,Ai),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Wa!==null?{id:Yi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},a=om(t),a.return=n,n.child=a,zn=n,cn=null)):t=null,t===null)throw Ya(n);return hd(t)?n.lanes=32:n.lanes=536870912,null}var O=o.children;return o=o.fallback,u?($a(),u=n.mode,O=Zl({mode:"hidden",children:O},u),o=Ns(o,u,a,null),O.return=n,o.return=n,O.sibling=o,n.child=O,o=n.child,o.memoizedState=Df(a),o.childLanes=Nf(t,y,a),n.memoizedState=wf,Do(null,o)):(Ja(n),Uf(n,O))}var Q=t.memoizedState;if(Q!==null&&(O=Q.dehydrated,O!==null)){if(d)n.flags&256?(Ja(n),n.flags&=-257,n=Lf(t,n,a)):n.memoizedState!==null?($a(),n.child=t.child,n.flags|=128,n=null):($a(),O=o.fallback,u=n.mode,o=Zl({mode:"visible",children:o.children},u),O=Ns(O,u,a,null),O.flags|=2,o.return=n,O.return=n,o.sibling=O,n.child=o,Is(n,t.child,null,a),o=n.child,o.memoizedState=Df(a),o.childLanes=Nf(t,y,a),n.memoizedState=wf,n=Do(null,o));else if(Ja(n),hd(O)){if(y=O.nextSibling&&O.nextSibling.dataset,y)var fe=y.dgst;y=fe,o=Error(s(419)),o.stack="",o.digest=y,_o({value:o,source:null,stack:null}),n=Lf(t,n,a)}else if(En||dr(t,n,a,!1),y=(a&t.childLanes)!==0,En||y){if(y=on,y!==null&&(o=zt(y,a),o!==0&&o!==Q.retryLane))throw Q.retryLane=o,Ds(t,o),si(y,t,o),Rf;dd(O)||ac(),n=Lf(t,n,a)}else dd(O)?(n.flags|=192,n.child=t.child,n=null):(t=Q.treeContext,cn=Ci(O.nextSibling),zn=n,It=!0,Xa=null,Ai=!1,t!==null&&um(n,t),n=Uf(n,o.children),n.flags|=4096);return n}return u?($a(),O=o.fallback,u=n.mode,Q=t.child,fe=Q.sibling,o=ca(Q,{mode:"hidden",children:o.children}),o.subtreeFlags=Q.subtreeFlags&65011712,fe!==null?O=ca(fe,O):(O=Ns(O,u,a,null),O.flags|=2),O.return=n,o.return=n,o.sibling=O,n.child=o,Do(null,o),o=n.child,O=t.child.memoizedState,O===null?O=Df(a):(u=O.cachePool,u!==null?(Q=bn._currentValue,u=u.parent!==Q?{parent:Q,pool:Q}:u):u=gm(),O={baseLanes:O.baseLanes|a,cachePool:u}),o.memoizedState=O,o.childLanes=Nf(t,y,a),n.memoizedState=wf,Do(t.child,o)):(Ja(n),a=t.child,t=a.sibling,a=ca(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(y=n.deletions,y===null?(n.deletions=[t],n.flags|=16):y.push(t)),n.child=a,n.memoizedState=null,a)}function Uf(t,n){return n=Zl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Zl(t,n){return t=di(22,t,null,n),t.lanes=0,t}function Lf(t,n,a){return Is(n,t.child,null,a),t=Uf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function w0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Yu(t.return,n,a)}function Of(t,n,a,o,u,d){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=u,y.treeForkCount=d)}function D0(t,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var y=xn.current,O=(y&2)!==0;if(O?(y=y&1|2,n.flags|=128):y&=1,H(xn,y),Bn(t,n,o,a),o=It?xo:0,!O&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&w0(t,a,n);else if(t.tag===19)w0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&zl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Of(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&zl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Of(n,!0,a,null,d,o);break;case"together":Of(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ma(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ns|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(dr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=ca(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ca(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Pf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&wl(t)))}function by(t,n,a){switch(n.tag){case 3:_e(n,n.stateNode.containerInfo),qa(n,bn,t.memoizedState.cache),Us();break;case 27:case 5:Oe(n);break;case 4:_e(n,n.stateNode.containerInfo);break;case 10:qa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,rf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ja(n),n.flags|=128,null):(a&n.child.childLanes)!==0?C0(t,n,a):(Ja(n),t=ma(t,n,a),t!==null?t.sibling:null);Ja(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(dr(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return D0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),H(xn,xn.current),o)break;return null;case 22:return n.lanes=0,b0(t,n,a,n.pendingProps);case 24:qa(n,bn,t.memoizedState.cache)}return ma(t,n,a)}function N0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)En=!0;else{if(!Pf(t,a)&&(n.flags&128)===0)return En=!1,by(t,n,a);En=(t.flags&131072)!==0}else En=!1,It&&(n.flags&1048576)!==0&&cm(n,xo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Fs(n.elementType),n.type=t,typeof t=="function")Bu(t)?(o=Hs(t,o),n.tag=1,n=A0(null,n,t,o,a)):(n.tag=0,n=Cf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===B){n.tag=11,n=v0(null,n,t,o,a);break e}else if(u===j){n.tag=14,n=y0(null,n,t,o,a);break e}}throw n=xe(t)||t,Error(s(306,n,""))}}return n;case 0:return Cf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Hs(o,n.pendingProps),A0(t,n,o,u,a);case 3:e:{if(_e(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,ef(t,n),To(n,o,null,a);var y=n.memoizedState;if(o=y.cache,qa(n,bn,o),o!==d.cache&&qu(n,[bn],a,!0),Eo(),o=y.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=R0(t,n,o,a);break e}else if(o!==u){u=Mi(Error(s(424)),n),_o(u),n=R0(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(cn=Ci(t.firstChild),zn=n,It=!0,Xa=null,Ai=!0,a=bm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Us(),o===u){n=ma(t,n,a);break e}Bn(t,n,o,a)}n=n.child}return n;case 26:return ql(t,n),t===null?(a=Vg(n.type,null,n.pendingProps,null))?n.memoizedState=a:It||(a=n.type,t=n.pendingProps,o=fc(q.current).createElement(a),o[gn]=n,o[Fn]=t,Hn(o,a,t),Sn(o),n.stateNode=o):n.memoizedState=Vg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Oe(n),t===null&&It&&(o=n.stateNode=Bg(n.type,n.pendingProps,q.current),zn=n,Ai=!0,u=cn,os(n.type)?(pd=u,cn=Ci(o.firstChild)):cn=u),Bn(t,n,n.pendingProps.children,a),ql(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&It&&((u=o=cn)&&(o=Jy(o,n.type,n.pendingProps,Ai),o!==null?(n.stateNode=o,zn=n,cn=Ci(o.firstChild),Ai=!1,u=!0):u=!1),u||Ya(n)),Oe(n),u=n.type,d=n.pendingProps,y=t!==null?t.memoizedProps:null,o=d.children,cd(u,d)?o=null:y!==null&&cd(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=lf(t,n,hy,null,null,a),Wo._currentValue=u),ql(t,n),Bn(t,n,o,a),n.child;case 6:return t===null&&It&&((t=a=cn)&&(a=$y(a,n.pendingProps,Ai),a!==null?(n.stateNode=a,zn=n,cn=null,t=!0):t=!1),t||Ya(n)),null;case 13:return C0(t,n,a);case 4:return _e(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Is(n,null,o,a):Bn(t,n,o,a),n.child;case 11:return v0(t,n,n.type,n.pendingProps,a);case 7:return Bn(t,n,n.pendingProps,a),n.child;case 8:return Bn(t,n,n.pendingProps.children,a),n.child;case 12:return Bn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,qa(n,n.type,o.value),Bn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Os(n),u=In(u),o=o(u),n.flags|=1,Bn(t,n,o,a),n.child;case 14:return y0(t,n,n.type,n.pendingProps,a);case 15:return S0(t,n,n.type,n.pendingProps,a);case 19:return D0(t,n,a);case 31:return Sy(t,n,a);case 22:return b0(t,n,a,n.pendingProps);case 24:return Os(n),o=In(bn),t===null?(u=Qu(),u===null&&(u=on,d=Zu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},$u(n),qa(n,bn,u)):((t.lanes&a)!==0&&(ef(t,n),To(n,null,null,a),Eo()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),qa(n,bn,o)):(o=d.cache,qa(n,bn,o),o!==u.cache&&qu(n,[bn],a,!0))),Bn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ga(t){t.flags|=4}function Ff(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(ag())t.flags|=8192;else throw zs=Ll,Ju}else t.flags&=-16777217}function U0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Yg(n))if(ag())t.flags|=8192;else throw zs=Ll,Ju}function Kl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?pe():536870912,t.lanes|=n,Er|=n)}function No(t,n){if(!It)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function un(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function My(t,n,a){var o=n.pendingProps;switch(ku(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return un(n),null;case 1:return un(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),da(bn),ve(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(fr(n)?ga(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Wu())),un(n),null;case 26:var u=n.type,d=n.memoizedState;return t===null?(ga(n),d!==null?(un(n),U0(n,d)):(un(n),Ff(n,u,null,o,a))):d?d!==t.memoizedState?(ga(n),un(n),U0(n,d)):(un(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&ga(n),un(n),Ff(n,u,t,o,a)),null;case 27:if(be(n),a=q.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ga(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return un(n),null}t=W.current,fr(n)?fm(n):(t=Bg(u,o,a),n.stateNode=t,ga(n))}return un(n),null;case 5:if(be(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ga(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return un(n),null}if(d=W.current,fr(n))fm(n);else{var y=fc(q.current);switch(d){case 1:d=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=y.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}d[gn]=n,d[Fn]=o;e:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)d.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break e;for(;y.sibling===null;){if(y.return===null||y.return===n)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=d;e:switch(Hn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ga(n)}}return un(n),Ff(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ga(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=q.current,fr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=zn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[gn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Cg(t.nodeValue,a)),t||Ya(n,!0)}else t=fc(t).createTextNode(o),t[gn]=n,n.stateNode=t}return un(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=fr(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[gn]=n}else Us(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;un(n),t=!1}else a=Wu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(pi(n),n):(pi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return un(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=fr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[gn]=n}else Us(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;un(n),u=!1}else u=Wu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(pi(n),n):(pi(n),null)}return pi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Kl(n,n.updateQueue),un(n),null);case 4:return ve(),t===null&&ad(n.stateNode.containerInfo),un(n),null;case 10:return da(n.type),un(n),null;case 19:if(M(xn),o=n.memoizedState,o===null)return un(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)No(o,!1);else{if(mn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=zl(t),d!==null){for(n.flags|=128,No(o,!1),t=d.updateQueue,n.updateQueue=t,Kl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)rm(a,t),a=a.sibling;return H(xn,xn.current&1|2),It&&ua(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&Ue()>tc&&(n.flags|=128,u=!0,No(o,!1),n.lanes=4194304)}else{if(!u)if(t=zl(d),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Kl(n,t),No(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!It)return un(n),null}else 2*Ue()-o.renderingStartTime>tc&&a!==536870912&&(n.flags|=128,u=!0,No(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ue(),t.sibling=null,a=xn.current,H(xn,u?a&1|2:a&1),It&&ua(n,o.treeForkCount),t):(un(n),null);case 22:case 23:return pi(n),sf(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(un(n),n.subtreeFlags&6&&(n.flags|=8192)):un(n),a=n.updateQueue,a!==null&&Kl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&M(Ps),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),da(bn),un(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Ey(t,n){switch(ku(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return da(bn),ve(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return be(n),null;case 31:if(n.memoizedState!==null){if(pi(n),n.alternate===null)throw Error(s(340));Us()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(pi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Us()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return M(xn),null;case 4:return ve(),null;case 10:return da(n.type),null;case 22:case 23:return pi(n),sf(),t!==null&&M(Ps),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return da(bn),null;case 25:return null;default:return null}}function L0(t,n){switch(ku(n),n.tag){case 3:da(bn),ve();break;case 26:case 27:case 5:be(n);break;case 4:ve();break;case 31:n.memoizedState!==null&&pi(n);break;case 13:pi(n);break;case 19:M(xn);break;case 10:da(n.type);break;case 22:case 23:pi(n),sf(),t!==null&&M(Ps);break;case 24:da(bn)}}function Uo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var d=a.create,y=a.inst;o=d(),y.destroy=o}a=a.next}while(a!==u)}}catch(O){$t(n,n.return,O)}}function es(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var y=o.inst,O=y.destroy;if(O!==void 0){y.destroy=void 0,u=n;var Q=a,fe=O;try{fe()}catch(Te){$t(u,Q,Te)}}}o=o.next}while(o!==d)}}catch(Te){$t(n,n.return,Te)}}function O0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Em(n,a)}catch(o){$t(t,t.return,o)}}}function P0(t,n,a){a.props=Hs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){$t(t,n,o)}}function Lo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){$t(t,n,u)}}function Zi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){$t(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){$t(t,n,u)}else a.current=null}function F0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){$t(t,t.return,u)}}function zf(t,n,a){try{var o=t.stateNode;Xy(o,t.type,a,n),o[Fn]=n}catch(u){$t(t,t.return,u)}}function z0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&os(t.type)||t.tag===4}function If(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||z0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&os(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=oa));else if(o!==4&&(o===27&&os(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Bf(t,n,a),t=t.sibling;t!==null;)Bf(t,n,a),t=t.sibling}function Ql(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&os(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Ql(t,n,a),t=t.sibling;t!==null;)Ql(t,n,a),t=t.sibling}function I0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Hn(n,o,a),n[gn]=t,n[Fn]=a}catch(d){$t(t,t.return,d)}}var xa=!1,Tn=!1,Hf=!1,B0=typeof WeakSet=="function"?WeakSet:Set,On=null;function Ty(t,n){if(t=t.containerInfo,od=_c,t=Qp(t),Uu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var y=0,O=-1,Q=-1,fe=0,Te=0,De=t,ge=null;t:for(;;){for(var ye;De!==a||u!==0&&De.nodeType!==3||(O=y+u),De!==d||o!==0&&De.nodeType!==3||(Q=y+o),De.nodeType===3&&(y+=De.nodeValue.length),(ye=De.firstChild)!==null;)ge=De,De=ye;for(;;){if(De===t)break t;if(ge===a&&++fe===u&&(O=y),ge===d&&++Te===o&&(Q=y),(ye=De.nextSibling)!==null)break;De=ge,ge=De.parentNode}De=ye}a=O===-1||Q===-1?null:{start:O,end:Q}}else a=null}a=a||{start:0,end:0}}else a=null;for(ld={focusedElem:t,selectionRange:a},_c=!1,On=n;On!==null;)if(n=On,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,On=t;else for(;On!==null;){switch(n=On,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var it=Hs(a.type,u);t=o.getSnapshotBeforeUpdate(it,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(dt){$t(a,a.return,dt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)fd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":fd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,On=t;break}On=n.return}}function H0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:va(t,a),o&4&&Uo(5,a);break;case 1:if(va(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(y){$t(a,a.return,y)}else{var u=Hs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(y){$t(a,a.return,y)}}o&64&&O0(a),o&512&&Lo(a,a.return);break;case 3:if(va(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Em(t,n)}catch(y){$t(a,a.return,y)}}break;case 27:n===null&&o&4&&I0(a);case 26:case 5:va(t,a),n===null&&o&4&&F0(a),o&512&&Lo(a,a.return);break;case 12:va(t,a);break;case 31:va(t,a),o&4&&k0(t,a);break;case 13:va(t,a),o&4&&j0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Oy.bind(null,a),eS(t,a))));break;case 22:if(o=a.memoizedState!==null||xa,!o){n=n!==null&&n.memoizedState!==null||Tn,u=xa;var d=Tn;xa=o,(Tn=n)&&!d?ya(t,a,(a.subtreeFlags&8772)!==0):va(t,a),xa=u,Tn=d}break;case 30:break;default:va(t,a)}}function G0(t){var n=t.alternate;n!==null&&(t.alternate=null,G0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ro(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var hn=null,ti=!1;function _a(t,n,a){for(a=a.child;a!==null;)V0(t,n,a),a=a.sibling}function V0(t,n,a){if(Me&&typeof Me.onCommitFiberUnmount=="function")try{Me.onCommitFiberUnmount(Se,a)}catch{}switch(a.tag){case 26:Tn||Zi(a,n),_a(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Tn||Zi(a,n);var o=hn,u=ti;os(a.type)&&(hn=a.stateNode,ti=!1),_a(t,n,a),Vo(a.stateNode),hn=o,ti=u;break;case 5:Tn||Zi(a,n);case 6:if(o=hn,u=ti,hn=null,_a(t,n,a),hn=o,ti=u,hn!==null)if(ti)try{(hn.nodeType===9?hn.body:hn.nodeName==="HTML"?hn.ownerDocument.body:hn).removeChild(a.stateNode)}catch(d){$t(a,n,d)}else try{hn.removeChild(a.stateNode)}catch(d){$t(a,n,d)}break;case 18:hn!==null&&(ti?(t=hn,Og(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Ur(t)):Og(hn,a.stateNode));break;case 4:o=hn,u=ti,hn=a.stateNode.containerInfo,ti=!0,_a(t,n,a),hn=o,ti=u;break;case 0:case 11:case 14:case 15:es(2,a,n),Tn||es(4,a,n),_a(t,n,a);break;case 1:Tn||(Zi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&P0(a,n,o)),_a(t,n,a);break;case 21:_a(t,n,a);break;case 22:Tn=(o=Tn)||a.memoizedState!==null,_a(t,n,a),Tn=o;break;default:_a(t,n,a)}}function k0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ur(t)}catch(a){$t(n,n.return,a)}}}function j0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ur(t)}catch(a){$t(n,n.return,a)}}function Ay(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new B0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new B0),n;default:throw Error(s(435,t.tag))}}function Jl(t,n){var a=Ay(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Py.bind(null,t,o);o.then(u,u)}})}function ni(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=t,y=n,O=y;e:for(;O!==null;){switch(O.tag){case 27:if(os(O.type)){hn=O.stateNode,ti=!1;break e}break;case 5:hn=O.stateNode,ti=!1;break e;case 3:case 4:hn=O.stateNode.containerInfo,ti=!0;break e}O=O.return}if(hn===null)throw Error(s(160));V0(d,y,u),hn=null,ti=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)W0(n,t),n=n.sibling}var Bi=null;function W0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ni(n,t),ii(t),o&4&&(es(3,t,t.return),Uo(3,t),es(5,t,t.return));break;case 1:ni(n,t),ii(t),o&512&&(Tn||a===null||Zi(a,a.return)),o&64&&xa&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Bi;if(ni(n,t),ii(t),o&512&&(Tn||a===null||Zi(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Ba]||d[gn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Hn(d,o,a),d[gn]=t,Sn(d),o=d;break e;case"link":var y=Wg("link","href",u).get(o+(a.href||""));if(y){for(var O=0;O<y.length;O++)if(d=y[O],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(O,1);break t}}d=u.createElement(o),Hn(d,o,a),u.head.appendChild(d);break;case"meta":if(y=Wg("meta","content",u).get(o+(a.content||""))){for(O=0;O<y.length;O++)if(d=y[O],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(O,1);break t}}d=u.createElement(o),Hn(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[gn]=t,Sn(d),o=d}t.stateNode=o}else Xg(u,t.type,t.stateNode);else t.stateNode=jg(u,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?Xg(u,t.type,t.stateNode):jg(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&zf(t,t.memoizedProps,a.memoizedProps)}break;case 27:ni(n,t),ii(t),o&512&&(Tn||a===null||Zi(a,a.return)),a!==null&&o&4&&zf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(ni(n,t),ii(t),o&512&&(Tn||a===null||Zi(a,a.return)),t.flags&32){u=t.stateNode;try{ui(u,"")}catch(it){$t(t,t.return,it)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,zf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Hf=!0);break;case 6:if(ni(n,t),ii(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(it){$t(t,t.return,it)}}break;case 3:if(pc=null,u=Bi,Bi=dc(n.containerInfo),ni(n,t),Bi=u,ii(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Ur(n.containerInfo)}catch(it){$t(t,t.return,it)}Hf&&(Hf=!1,X0(t));break;case 4:o=Bi,Bi=dc(t.stateNode.containerInfo),ni(n,t),ii(t),Bi=o;break;case 12:ni(n,t),ii(t);break;case 31:ni(n,t),ii(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Jl(t,o)));break;case 13:ni(n,t),ii(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ec=Ue()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Jl(t,o)));break;case 22:u=t.memoizedState!==null;var Q=a!==null&&a.memoizedState!==null,fe=xa,Te=Tn;if(xa=fe||u,Tn=Te||Q,ni(n,t),Tn=Te,xa=fe,ii(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||Q||xa||Tn||Gs(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){Q=a=n;try{if(d=Q.stateNode,u)y=d.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{O=Q.stateNode;var De=Q.memoizedProps.style,ge=De!=null&&De.hasOwnProperty("display")?De.display:null;O.style.display=ge==null||typeof ge=="boolean"?"":(""+ge).trim()}}catch(it){$t(Q,Q.return,it)}}}else if(n.tag===6){if(a===null){Q=n;try{Q.stateNode.nodeValue=u?"":Q.memoizedProps}catch(it){$t(Q,Q.return,it)}}}else if(n.tag===18){if(a===null){Q=n;try{var ye=Q.stateNode;u?Pg(ye,!0):Pg(Q.stateNode,!1)}catch(it){$t(Q,Q.return,it)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Jl(t,a))));break;case 19:ni(n,t),ii(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Jl(t,o)));break;case 30:break;case 21:break;default:ni(n,t),ii(t)}}function ii(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(z0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=If(t);Ql(t,d,u);break;case 5:var y=a.stateNode;a.flags&32&&(ui(y,""),a.flags&=-33);var O=If(t);Ql(t,O,y);break;case 3:case 4:var Q=a.stateNode.containerInfo,fe=If(t);Bf(t,fe,Q);break;default:throw Error(s(161))}}catch(Te){$t(t,t.return,Te)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function X0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;X0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function va(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)H0(t,n.alternate,n),n=n.sibling}function Gs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:es(4,n,n.return),Gs(n);break;case 1:Zi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&P0(n,n.return,a),Gs(n);break;case 27:Vo(n.stateNode);case 26:case 5:Zi(n,n.return),Gs(n);break;case 22:n.memoizedState===null&&Gs(n);break;case 30:Gs(n);break;default:Gs(n)}t=t.sibling}}function ya(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,y=d.flags;switch(d.tag){case 0:case 11:case 15:ya(u,d,a),Uo(4,d);break;case 1:if(ya(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(fe){$t(o,o.return,fe)}if(o=d,u=o.updateQueue,u!==null){var O=o.stateNode;try{var Q=u.shared.hiddenCallbacks;if(Q!==null)for(u.shared.hiddenCallbacks=null,u=0;u<Q.length;u++)Mm(Q[u],O)}catch(fe){$t(o,o.return,fe)}}a&&y&64&&O0(d),Lo(d,d.return);break;case 27:I0(d);case 26:case 5:ya(u,d,a),a&&o===null&&y&4&&F0(d),Lo(d,d.return);break;case 12:ya(u,d,a);break;case 31:ya(u,d,a),a&&y&4&&k0(u,d);break;case 13:ya(u,d,a),a&&y&4&&j0(u,d);break;case 22:d.memoizedState===null&&ya(u,d,a),Lo(d,d.return);break;case 30:break;default:ya(u,d,a)}n=n.sibling}}function Gf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&vo(a))}function Vf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&vo(t))}function Hi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Y0(t,n,a,o),n=n.sibling}function Y0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Hi(t,n,a,o),u&2048&&Uo(9,n);break;case 1:Hi(t,n,a,o);break;case 3:Hi(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&vo(t)));break;case 12:if(u&2048){Hi(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,y=d.id,O=d.onPostCommit;typeof O=="function"&&O(y,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(Q){$t(n,n.return,Q)}}else Hi(t,n,a,o);break;case 31:Hi(t,n,a,o);break;case 13:Hi(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,y=n.alternate,n.memoizedState!==null?d._visibility&2?Hi(t,n,a,o):Oo(t,n):d._visibility&2?Hi(t,n,a,o):(d._visibility|=2,Sr(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Gf(y,n);break;case 24:Hi(t,n,a,o),u&2048&&Vf(n.alternate,n);break;default:Hi(t,n,a,o)}}function Sr(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,y=n,O=a,Q=o,fe=y.flags;switch(y.tag){case 0:case 11:case 15:Sr(d,y,O,Q,u),Uo(8,y);break;case 23:break;case 22:var Te=y.stateNode;y.memoizedState!==null?Te._visibility&2?Sr(d,y,O,Q,u):Oo(d,y):(Te._visibility|=2,Sr(d,y,O,Q,u)),u&&fe&2048&&Gf(y.alternate,y);break;case 24:Sr(d,y,O,Q,u),u&&fe&2048&&Vf(y.alternate,y);break;default:Sr(d,y,O,Q,u)}n=n.sibling}}function Oo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Oo(a,o),u&2048&&Gf(o.alternate,o);break;case 24:Oo(a,o),u&2048&&Vf(o.alternate,o);break;default:Oo(a,o)}n=n.sibling}}var Po=8192;function br(t,n,a){if(t.subtreeFlags&Po)for(t=t.child;t!==null;)q0(t,n,a),t=t.sibling}function q0(t,n,a){switch(t.tag){case 26:br(t,n,a),t.flags&Po&&t.memoizedState!==null&&dS(a,Bi,t.memoizedState,t.memoizedProps);break;case 5:br(t,n,a);break;case 3:case 4:var o=Bi;Bi=dc(t.stateNode.containerInfo),br(t,n,a),Bi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Po,Po=16777216,br(t,n,a),Po=o):br(t,n,a));break;default:br(t,n,a)}}function Z0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Fo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];On=o,Q0(o,t)}Z0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)K0(t),t=t.sibling}function K0(t){switch(t.tag){case 0:case 11:case 15:Fo(t),t.flags&2048&&es(9,t,t.return);break;case 3:Fo(t);break;case 12:Fo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,$l(t)):Fo(t);break;default:Fo(t)}}function $l(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];On=o,Q0(o,t)}Z0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:es(8,n,n.return),$l(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,$l(n));break;default:$l(n)}t=t.sibling}}function Q0(t,n){for(;On!==null;){var a=On;switch(a.tag){case 0:case 11:case 15:es(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:vo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,On=o;else e:for(a=t;On!==null;){o=On;var u=o.sibling,d=o.return;if(G0(o),o===a){On=null;break e}if(u!==null){u.return=d,On=u;break e}On=d}}}var Ry={getCacheForType:function(t){var n=In(bn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return In(bn).controller.signal}},Cy=typeof WeakMap=="function"?WeakMap:Map,Wt=0,on=null,Dt=null,Ot=0,Jt=0,mi=null,ts=!1,Mr=!1,kf=!1,Sa=0,mn=0,ns=0,Vs=0,jf=0,gi=0,Er=0,zo=null,ai=null,Wf=!1,ec=0,J0=0,tc=1/0,nc=null,is=null,Dn=0,as=null,Tr=null,ba=0,Xf=0,Yf=null,$0=null,Io=0,qf=null;function xi(){return(Wt&2)!==0&&Ot!==0?Ot&-Ot:N.T!==null?ed():yn()}function eg(){if(gi===0)if((Ot&536870912)===0||It){var t=vt;vt<<=1,(vt&3932160)===0&&(vt=262144),gi=t}else gi=536870912;return t=hi.current,t!==null&&(t.flags|=32),gi}function si(t,n,a){(t===on&&(Jt===2||Jt===9)||t.cancelPendingCommit!==null)&&(Ar(t,0),ss(t,Ot,gi,!1)),we(t,a),((Wt&2)===0||t!==on)&&(t===on&&((Wt&2)===0&&(Vs|=a),mn===4&&ss(t,Ot,gi,!1)),Ki(t))}function tg(t,n,a){if((Wt&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ae(t,n),u=o?Ny(t,n):Kf(t,n,!0),d=o;do{if(u===0){Mr&&!o&&ss(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!wy(a)){u=Kf(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;e:{var O=t;u=zo;var Q=O.current.memoizedState.isDehydrated;if(Q&&(Ar(O,y).flags|=256),y=Kf(O,y,!1),y!==2){if(kf&&!Q){O.errorRecoveryDisabledLanes|=d,Vs|=d,u=4;break e}d=ai,ai=u,d!==null&&(ai===null?ai=d:ai.push.apply(ai,d))}u=y}if(d=!1,u!==2)continue}}if(u===1){Ar(t,0),ss(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ss(o,n,gi,!ts);break e;case 2:ai=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=ec+300-Ue(),10<u)){if(ss(o,n,gi,!ts),le(o,0,!0)!==0)break e;ba=n,o.timeoutHandle=Ug(ng.bind(null,o,a,ai,nc,Wf,n,gi,Vs,Er,ts,d,"Throttled",-0,0),u);break e}ng(o,a,ai,nc,Wf,n,gi,Vs,Er,ts,d,null,-0,0)}}break}while(!0);Ki(t)}function ng(t,n,a,o,u,d,y,O,Q,fe,Te,De,ge,ye){if(t.timeoutHandle=-1,De=n.subtreeFlags,De&8192||(De&16785408)===16785408){De={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:oa},q0(n,d,De);var it=(d&62914560)===d?ec-Ue():(d&4194048)===d?J0-Ue():0;if(it=hS(De,it),it!==null){ba=d,t.cancelPendingCommit=it(ug.bind(null,t,n,d,a,o,u,y,O,Q,Te,De,null,ge,ye)),ss(t,d,y,!fe);return}}ug(t,n,d,a,o,u,y,O,Q)}function wy(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!fi(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ss(t,n,a,o){n&=~jf,n&=~Vs,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-ke(u),y=1<<d;o[d]=-1,u&=~y}a!==0&&at(t,a,n)}function ic(){return(Wt&6)===0?(Bo(0),!1):!0}function Zf(){if(Dt!==null){if(Jt===0)var t=Dt.return;else t=Dt,fa=Ls=null,ff(t),gr=null,So=0,t=Dt;for(;t!==null;)L0(t.alternate,t),t=t.return;Dt=null}}function Ar(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Zy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ba=0,Zf(),on=t,Dt=a=ca(t.current,null),Ot=n,Jt=0,mi=null,ts=!1,Mr=Ae(t,n),kf=!1,Er=gi=jf=Vs=ns=mn=0,ai=zo=null,Wf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-ke(o),d=1<<u;n|=t[u],o&=~d}return Sa=n,El(),a}function ig(t,n){bt=null,N.H=wo,n===mr||n===Ul?(n=vm(),Jt=3):n===Ju?(n=vm(),Jt=4):Jt=n===Rf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,mi=n,Dt===null&&(mn=1,Xl(t,Mi(n,t.current)))}function ag(){var t=hi.current;return t===null?!0:(Ot&4194048)===Ot?Ri===null:(Ot&62914560)===Ot||(Ot&536870912)!==0?t===Ri:!1}function sg(){var t=N.H;return N.H=wo,t===null?wo:t}function rg(){var t=N.A;return N.A=Ry,t}function ac(){mn=4,ts||(Ot&4194048)!==Ot&&hi.current!==null||(Mr=!0),(ns&134217727)===0&&(Vs&134217727)===0||on===null||ss(on,Ot,gi,!1)}function Kf(t,n,a){var o=Wt;Wt|=2;var u=sg(),d=rg();(on!==t||Ot!==n)&&(nc=null,Ar(t,n)),n=!1;var y=mn;e:do try{if(Jt!==0&&Dt!==null){var O=Dt,Q=mi;switch(Jt){case 8:Zf(),y=6;break e;case 3:case 2:case 9:case 6:hi.current===null&&(n=!0);var fe=Jt;if(Jt=0,mi=null,Rr(t,O,Q,fe),a&&Mr){y=0;break e}break;default:fe=Jt,Jt=0,mi=null,Rr(t,O,Q,fe)}}Dy(),y=mn;break}catch(Te){ig(t,Te)}while(!0);return n&&t.shellSuspendCounter++,fa=Ls=null,Wt=o,N.H=u,N.A=d,Dt===null&&(on=null,Ot=0,El()),y}function Dy(){for(;Dt!==null;)og(Dt)}function Ny(t,n){var a=Wt;Wt|=2;var o=sg(),u=rg();on!==t||Ot!==n?(nc=null,tc=Ue()+500,Ar(t,n)):Mr=Ae(t,n);e:do try{if(Jt!==0&&Dt!==null){n=Dt;var d=mi;t:switch(Jt){case 1:Jt=0,mi=null,Rr(t,n,d,1);break;case 2:case 9:if(xm(d)){Jt=0,mi=null,lg(n);break}n=function(){Jt!==2&&Jt!==9||on!==t||(Jt=7),Ki(t)},d.then(n,n);break e;case 3:Jt=7;break e;case 4:Jt=5;break e;case 7:xm(d)?(Jt=0,mi=null,lg(n)):(Jt=0,mi=null,Rr(t,n,d,7));break;case 5:var y=null;switch(Dt.tag){case 26:y=Dt.memoizedState;case 5:case 27:var O=Dt;if(y?Yg(y):O.stateNode.complete){Jt=0,mi=null;var Q=O.sibling;if(Q!==null)Dt=Q;else{var fe=O.return;fe!==null?(Dt=fe,sc(fe)):Dt=null}break t}}Jt=0,mi=null,Rr(t,n,d,5);break;case 6:Jt=0,mi=null,Rr(t,n,d,6);break;case 8:Zf(),mn=6;break e;default:throw Error(s(462))}}Uy();break}catch(Te){ig(t,Te)}while(!0);return fa=Ls=null,N.H=o,N.A=u,Wt=a,Dt!==null?0:(on=null,Ot=0,El(),mn)}function Uy(){for(;Dt!==null&&!ot();)og(Dt)}function og(t){var n=N0(t.alternate,t,Sa);t.memoizedProps=t.pendingProps,n===null?sc(t):Dt=n}function lg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=T0(a,n,n.pendingProps,n.type,void 0,Ot);break;case 11:n=T0(a,n,n.pendingProps,n.type.render,n.ref,Ot);break;case 5:ff(n);default:L0(a,n),n=Dt=rm(n,Sa),n=N0(a,n,Sa)}t.memoizedProps=t.pendingProps,n===null?sc(t):Dt=n}function Rr(t,n,a,o){fa=Ls=null,ff(n),gr=null,So=0;var u=n.return;try{if(yy(t,u,n,a,Ot)){mn=1,Xl(t,Mi(a,t.current)),Dt=null;return}}catch(d){if(u!==null)throw Dt=u,d;mn=1,Xl(t,Mi(a,t.current)),Dt=null;return}n.flags&32768?(It||o===1?t=!0:Mr||(Ot&536870912)!==0?t=!1:(ts=t=!0,(o===2||o===9||o===3||o===6)&&(o=hi.current,o!==null&&o.tag===13&&(o.flags|=16384))),cg(n,t)):sc(n)}function sc(t){var n=t;do{if((n.flags&32768)!==0){cg(n,ts);return}t=n.return;var a=My(n.alternate,n,Sa);if(a!==null){Dt=a;return}if(n=n.sibling,n!==null){Dt=n;return}Dt=n=t}while(n!==null);mn===0&&(mn=5)}function cg(t,n){do{var a=Ey(t.alternate,t);if(a!==null){a.flags&=32767,Dt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Dt=t;return}Dt=t=a}while(t!==null);mn=6,Dt=null}function ug(t,n,a,o,u,d,y,O,Q){t.cancelPendingCommit=null;do rc();while(Dn!==0);if((Wt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=zu,je(t,a,d,y,O,Q),t===on&&(Dt=on=null,Ot=0),Tr=n,as=t,ba=a,Xf=d,Yf=u,$0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Fy(ie,function(){return mg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=N.T,N.T=null,u=I.p,I.p=2,y=Wt,Wt|=4;try{Ty(t,n,a)}finally{Wt=y,I.p=u,N.T=o}}Dn=1,fg(),dg(),hg()}}function fg(){if(Dn===1){Dn=0;var t=as,n=Tr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var o=I.p;I.p=2;var u=Wt;Wt|=4;try{W0(n,t);var d=ld,y=Qp(t.containerInfo),O=d.focusedElem,Q=d.selectionRange;if(y!==O&&O&&O.ownerDocument&&Kp(O.ownerDocument.documentElement,O)){if(Q!==null&&Uu(O)){var fe=Q.start,Te=Q.end;if(Te===void 0&&(Te=fe),"selectionStart"in O)O.selectionStart=fe,O.selectionEnd=Math.min(Te,O.value.length);else{var De=O.ownerDocument||document,ge=De&&De.defaultView||window;if(ge.getSelection){var ye=ge.getSelection(),it=O.textContent.length,dt=Math.min(Q.start,it),an=Q.end===void 0?dt:Math.min(Q.end,it);!ye.extend&&dt>an&&(y=an,an=dt,dt=y);var oe=Zp(O,dt),ne=Zp(O,an);if(oe&&ne&&(ye.rangeCount!==1||ye.anchorNode!==oe.node||ye.anchorOffset!==oe.offset||ye.focusNode!==ne.node||ye.focusOffset!==ne.offset)){var ue=De.createRange();ue.setStart(oe.node,oe.offset),ye.removeAllRanges(),dt>an?(ye.addRange(ue),ye.extend(ne.node,ne.offset)):(ue.setEnd(ne.node,ne.offset),ye.addRange(ue))}}}}for(De=[],ye=O;ye=ye.parentNode;)ye.nodeType===1&&De.push({element:ye,left:ye.scrollLeft,top:ye.scrollTop});for(typeof O.focus=="function"&&O.focus(),O=0;O<De.length;O++){var Ce=De[O];Ce.element.scrollLeft=Ce.left,Ce.element.scrollTop=Ce.top}}_c=!!od,ld=od=null}finally{Wt=u,I.p=o,N.T=a}}t.current=n,Dn=2}}function dg(){if(Dn===2){Dn=0;var t=as,n=Tr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var o=I.p;I.p=2;var u=Wt;Wt|=4;try{H0(t,n.alternate,n)}finally{Wt=u,I.p=o,N.T=a}}Dn=3}}function hg(){if(Dn===4||Dn===3){Dn=0,mt();var t=as,n=Tr,a=ba,o=$0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Dn=5:(Dn=0,Tr=as=null,pg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(is=null),qt(a),n=n.stateNode,Me&&typeof Me.onCommitFiberRoot=="function")try{Me.onCommitFiberRoot(Se,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=N.T,u=I.p,I.p=2,N.T=null;try{for(var d=t.onRecoverableError,y=0;y<o.length;y++){var O=o[y];d(O.value,{componentStack:O.stack})}}finally{N.T=n,I.p=u}}(ba&3)!==0&&rc(),Ki(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===qf?Io++:(Io=0,qf=t):Io=0,Bo(0)}}function pg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,vo(n)))}function rc(){return fg(),dg(),hg(),mg()}function mg(){if(Dn!==5)return!1;var t=as,n=Xf;Xf=0;var a=qt(ba),o=N.T,u=I.p;try{I.p=32>a?32:a,N.T=null,a=Yf,Yf=null;var d=as,y=ba;if(Dn=0,Tr=as=null,ba=0,(Wt&6)!==0)throw Error(s(331));var O=Wt;if(Wt|=4,K0(d.current),Y0(d,d.current,y,a),Wt=O,Bo(0,!1),Me&&typeof Me.onPostCommitFiberRoot=="function")try{Me.onPostCommitFiberRoot(Se,d)}catch{}return!0}finally{I.p=u,N.T=o,pg(t,n)}}function gg(t,n,a){n=Mi(a,n),n=Af(t.stateNode,n,2),t=Qa(t,n,2),t!==null&&(we(t,2),Ki(t))}function $t(t,n,a){if(t.tag===3)gg(t,t,a);else for(;n!==null;){if(n.tag===3){gg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(is===null||!is.has(o))){t=Mi(a,t),a=x0(2),o=Qa(n,a,2),o!==null&&(_0(a,o,n,t),we(o,2),Ki(o));break}}n=n.return}}function Qf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new Cy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(kf=!0,u.add(a),t=Ly.bind(null,t,n,a),n.then(t,t))}function Ly(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,on===t&&(Ot&a)===a&&(mn===4||mn===3&&(Ot&62914560)===Ot&&300>Ue()-ec?(Wt&2)===0&&Ar(t,0):jf|=a,Er===Ot&&(Er=0)),Ki(t)}function xg(t,n){n===0&&(n=pe()),t=Ds(t,n),t!==null&&(we(t,n),Ki(t))}function Oy(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),xg(t,a)}function Py(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),xg(t,a)}function Fy(t,n){return $(t,n)}var oc=null,Cr=null,Jf=!1,lc=!1,$f=!1,rs=0;function Ki(t){t!==Cr&&t.next===null&&(Cr===null?oc=Cr=t:Cr=Cr.next=t),lc=!0,Jf||(Jf=!0,Iy())}function Bo(t,n){if(!$f&&lc){$f=!0;do for(var a=!1,o=oc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var y=o.suspendedLanes,O=o.pingedLanes;d=(1<<31-ke(42|t)+1)-1,d&=u&~(y&~O),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,Sg(o,d))}else d=Ot,d=le(o,o===on?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Ae(o,d)||(a=!0,Sg(o,d));o=o.next}while(a);$f=!1}}function zy(){_g()}function _g(){lc=Jf=!1;var t=0;rs!==0&&qy()&&(t=rs);for(var n=Ue(),a=null,o=oc;o!==null;){var u=o.next,d=vg(o,n);d===0?(o.next=null,a===null?oc=u:a.next=u,u===null&&(Cr=a)):(a=o,(t!==0||(d&3)!==0)&&(lc=!0)),o=u}Dn!==0&&Dn!==5||Bo(t),rs!==0&&(rs=0)}function vg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var y=31-ke(d),O=1<<y,Q=u[y];Q===-1?((O&a)===0||(O&o)!==0)&&(u[y]=Le(O,n)):Q<=n&&(t.expiredLanes|=O),d&=~O}if(n=on,a=Ot,a=le(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Jt===2||Jt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Et(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ae(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Et(o),qt(a)){case 2:case 8:a=C;break;case 32:a=ie;break;case 268435456:a=Ne;break;default:a=ie}return o=yg.bind(null,t),a=$(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Et(o),t.callbackPriority=2,t.callbackNode=null,2}function yg(t,n){if(Dn!==0&&Dn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(rc()&&t.callbackNode!==a)return null;var o=Ot;return o=le(t,t===on?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(tg(t,o,n),vg(t,Ue()),t.callbackNode!=null&&t.callbackNode===a?yg.bind(null,t):null)}function Sg(t,n){if(rc())return null;tg(t,n,!0)}function Iy(){Ky(function(){(Wt&6)!==0?$(z,zy):_g()})}function ed(){if(rs===0){var t=hr;t===0&&(t=ft,ft<<=1,(ft&261888)===0&&(ft=256)),rs=t}return rs}function bg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:As(""+t)}function Mg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function By(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=bg((u[Fn]||null).action),y=o.submitter;y&&(n=(n=y[Fn]||null)?bg(n.formAction):y.getAttribute("formAction"),n!==null&&(d=n,y=null));var O=new yl("action","action",null,o,u);t.push({event:O,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(rs!==0){var Q=y?Mg(u,y):new FormData(u);yf(a,{pending:!0,data:Q,method:u.method,action:d},null,Q)}}else typeof d=="function"&&(O.preventDefault(),Q=y?Mg(u,y):new FormData(u),yf(a,{pending:!0,data:Q,method:u.method,action:d},d,Q))},currentTarget:u}]})}}for(var td=0;td<Fu.length;td++){var nd=Fu[td],Hy=nd.toLowerCase(),Gy=nd[0].toUpperCase()+nd.slice(1);Ii(Hy,"on"+Gy)}Ii(em,"onAnimationEnd"),Ii(tm,"onAnimationIteration"),Ii(nm,"onAnimationStart"),Ii("dblclick","onDoubleClick"),Ii("focusin","onFocus"),Ii("focusout","onBlur"),Ii(iy,"onTransitionRun"),Ii(ay,"onTransitionStart"),Ii(sy,"onTransitionCancel"),Ii(im,"onTransitionEnd"),me("onMouseEnter",["mouseout","mouseover"]),me("onMouseLeave",["mouseout","mouseover"]),me("onPointerEnter",["pointerout","pointerover"]),me("onPointerLeave",["pointerout","pointerover"]),re("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),re("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),re("onBeforeInput",["compositionend","keypress","textInput","paste"]),re("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),re("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),re("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ho));function Eg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var y=o.length-1;0<=y;y--){var O=o[y],Q=O.instance,fe=O.currentTarget;if(O=O.listener,Q!==d&&u.isPropagationStopped())break e;d=O,u.currentTarget=fe;try{d(u)}catch(Te){Ml(Te)}u.currentTarget=null,d=Q}else for(y=0;y<o.length;y++){if(O=o[y],Q=O.instance,fe=O.currentTarget,O=O.listener,Q!==d&&u.isPropagationStopped())break e;d=O,u.currentTarget=fe;try{d(u)}catch(Te){Ml(Te)}u.currentTarget=null,d=Q}}}}function Nt(t,n){var a=n[Ia];a===void 0&&(a=n[Ia]=new Set);var o=t+"__bubble";a.has(o)||(Tg(n,t,2,!1),a.add(o))}function id(t,n,a){var o=0;n&&(o|=4),Tg(a,t,o,n)}var cc="_reactListening"+Math.random().toString(36).slice(2);function ad(t){if(!t[cc]){t[cc]=!0,gl.forEach(function(a){a!=="selectionchange"&&(Vy.has(a)||id(a,!1,t),id(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[cc]||(n[cc]=!0,id("selectionchange",!1,n))}}function Tg(t,n,a,o){switch(ex(n)){case 2:var u=gS;break;case 8:u=xS;break;default:u=vd}a=u.bind(null,n,a,t),u=void 0,!Mu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function sd(t,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var O=o.stateNode.containerInfo;if(O===u)break;if(y===4)for(y=o.return;y!==null;){var Q=y.tag;if((Q===3||Q===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;O!==null;){if(y=Ha(O),y===null)return;if(Q=y.tag,Q===5||Q===6||Q===26||Q===27){o=d=y;continue e}O=O.parentNode}}o=o.return}Dp(function(){var fe=d,Te=Su(a),De=[];e:{var ge=am.get(t);if(ge!==void 0){var ye=yl,it=t;switch(t){case"keypress":if(_l(a)===0)break e;case"keydown":case"keyup":ye=Pv;break;case"focusin":it="focus",ye=Ru;break;case"focusout":it="blur",ye=Ru;break;case"beforeblur":case"afterblur":ye=Ru;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ye=Lp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ye=Mv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ye=Iv;break;case em:case tm:case nm:ye=Av;break;case im:ye=Hv;break;case"scroll":case"scrollend":ye=Sv;break;case"wheel":ye=Vv;break;case"copy":case"cut":case"paste":ye=Cv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ye=Pp;break;case"toggle":case"beforetoggle":ye=jv}var dt=(n&4)!==0,an=!dt&&(t==="scroll"||t==="scrollend"),oe=dt?ge!==null?ge+"Capture":null:ge;dt=[];for(var ne=fe,ue;ne!==null;){var Ce=ne;if(ue=Ce.stateNode,Ce=Ce.tag,Ce!==5&&Ce!==26&&Ce!==27||ue===null||oe===null||(Ce=oo(ne,oe),Ce!=null&&dt.push(Go(ne,Ce,ue))),an)break;ne=ne.return}0<dt.length&&(ge=new ye(ge,it,null,a,Te),De.push({event:ge,listeners:dt}))}}if((n&7)===0){e:{if(ge=t==="mouseover"||t==="pointerover",ye=t==="mouseout"||t==="pointerout",ge&&a!==yu&&(it=a.relatedTarget||a.fromElement)&&(Ha(it)||it[ra]))break e;if((ye||ge)&&(ge=Te.window===Te?Te:(ge=Te.ownerDocument)?ge.defaultView||ge.parentWindow:window,ye?(it=a.relatedTarget||a.toElement,ye=fe,it=it?Ha(it):null,it!==null&&(an=c(it),dt=it.tag,it!==an||dt!==5&&dt!==27&&dt!==6)&&(it=null)):(ye=null,it=fe),ye!==it)){if(dt=Lp,Ce="onMouseLeave",oe="onMouseEnter",ne="mouse",(t==="pointerout"||t==="pointerover")&&(dt=Pp,Ce="onPointerLeave",oe="onPointerEnter",ne="pointer"),an=ye==null?ge:Ts(ye),ue=it==null?ge:Ts(it),ge=new dt(Ce,ne+"leave",ye,a,Te),ge.target=an,ge.relatedTarget=ue,Ce=null,Ha(Te)===fe&&(dt=new dt(oe,ne+"enter",it,a,Te),dt.target=ue,dt.relatedTarget=an,Ce=dt),an=Ce,ye&&it)t:{for(dt=ky,oe=ye,ne=it,ue=0,Ce=oe;Ce;Ce=dt(Ce))ue++;Ce=0;for(var ct=ne;ct;ct=dt(ct))Ce++;for(;0<ue-Ce;)oe=dt(oe),ue--;for(;0<Ce-ue;)ne=dt(ne),Ce--;for(;ue--;){if(oe===ne||ne!==null&&oe===ne.alternate){dt=oe;break t}oe=dt(oe),ne=dt(ne)}dt=null}else dt=null;ye!==null&&Ag(De,ge,ye,dt,!1),it!==null&&an!==null&&Ag(De,an,it,dt,!0)}}e:{if(ge=fe?Ts(fe):window,ye=ge.nodeName&&ge.nodeName.toLowerCase(),ye==="select"||ye==="input"&&ge.type==="file")var Vt=kp;else if(Gp(ge))if(jp)Vt=ey;else{Vt=Jv;var st=Qv}else ye=ge.nodeName,!ye||ye.toLowerCase()!=="input"||ge.type!=="checkbox"&&ge.type!=="radio"?fe&&Xt(fe.elementType)&&(Vt=kp):Vt=$v;if(Vt&&(Vt=Vt(t,fe))){Vp(De,Vt,a,Te);break e}st&&st(t,ge,fe),t==="focusout"&&fe&&ge.type==="number"&&fe.memoizedProps.value!=null&&wt(ge,"number",ge.value)}switch(st=fe?Ts(fe):window,t){case"focusin":(Gp(st)||st.contentEditable==="true")&&(sr=st,Lu=fe,go=null);break;case"focusout":go=Lu=sr=null;break;case"mousedown":Ou=!0;break;case"contextmenu":case"mouseup":case"dragend":Ou=!1,Jp(De,a,Te);break;case"selectionchange":if(ny)break;case"keydown":case"keyup":Jp(De,a,Te)}var Mt;if(wu)e:{switch(t){case"compositionstart":var Pt="onCompositionStart";break e;case"compositionend":Pt="onCompositionEnd";break e;case"compositionupdate":Pt="onCompositionUpdate";break e}Pt=void 0}else ar?Bp(t,a)&&(Pt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Pt="onCompositionStart");Pt&&(Fp&&a.locale!=="ko"&&(ar||Pt!=="onCompositionStart"?Pt==="onCompositionEnd"&&ar&&(Mt=Np()):(ja=Te,Eu="value"in ja?ja.value:ja.textContent,ar=!0)),st=uc(fe,Pt),0<st.length&&(Pt=new Op(Pt,t,null,a,Te),De.push({event:Pt,listeners:st}),Mt?Pt.data=Mt:(Mt=Hp(a),Mt!==null&&(Pt.data=Mt)))),(Mt=Xv?Yv(t,a):qv(t,a))&&(Pt=uc(fe,"onBeforeInput"),0<Pt.length&&(st=new Op("onBeforeInput","beforeinput",null,a,Te),De.push({event:st,listeners:Pt}),st.data=Mt)),By(De,t,fe,a,Te)}Eg(De,n)})}function Go(t,n,a){return{instance:t,listener:n,currentTarget:a}}function uc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=oo(t,a),u!=null&&o.unshift(Go(t,u,d)),u=oo(t,n),u!=null&&o.push(Go(t,u,d))),t.tag===3)return o;t=t.return}return[]}function ky(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Ag(t,n,a,o,u){for(var d=n._reactName,y=[];a!==null&&a!==o;){var O=a,Q=O.alternate,fe=O.stateNode;if(O=O.tag,Q!==null&&Q===o)break;O!==5&&O!==26&&O!==27||fe===null||(Q=fe,u?(fe=oo(a,d),fe!=null&&y.unshift(Go(a,fe,Q))):u||(fe=oo(a,d),fe!=null&&y.push(Go(a,fe,Q)))),a=a.return}y.length!==0&&t.push({event:n,listeners:y})}var jy=/\r\n?/g,Wy=/\u0000|\uFFFD/g;function Rg(t){return(typeof t=="string"?t:""+t).replace(jy,`
`).replace(Wy,"")}function Cg(t,n){return n=Rg(n),Rg(t)===n}function nn(t,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ui(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ui(t,""+o);break;case"className":nt(t,"class",o);break;case"tabIndex":nt(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":nt(t,a,o);break;case"style":zi(t,o,d);break;case"data":if(n!=="object"){nt(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=As(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&nn(t,n,"name",u.name,u,null),nn(t,n,"formEncType",u.formEncType,u,null),nn(t,n,"formMethod",u.formMethod,u,null),nn(t,n,"formTarget",u.formTarget,u,null)):(nn(t,n,"encType",u.encType,u,null),nn(t,n,"method",u.method,u,null),nn(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=As(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=oa);break;case"onScroll":o!=null&&Nt("scroll",t);break;case"onScrollEnd":o!=null&&Nt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=As(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":Nt("beforetoggle",t),Nt("toggle",t),Xe(t,"popover",o);break;case"xlinkActuate":et(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":et(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":et(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":et(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":et(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":et(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":et(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":et(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":et(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Xe(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Xi.get(a)||a,Xe(t,a,o))}}function rd(t,n,a,o,u,d){switch(a){case"style":zi(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?ui(t,o):(typeof o=="number"||typeof o=="bigint")&&ui(t,""+o);break;case"onScroll":o!=null&&Nt("scroll",t);break;case"onScrollEnd":o!=null&&Nt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=oa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!L.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=t[Fn]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Xe(t,a,o)}}}function Hn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Nt("error",t),Nt("load",t);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var y=a[d];if(y!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:nn(t,n,d,y,a,null)}}u&&nn(t,n,"srcSet",a.srcSet,a,null),o&&nn(t,n,"src",a.src,a,null);return;case"input":Nt("invalid",t);var O=d=y=u=null,Q=null,fe=null;for(o in a)if(a.hasOwnProperty(o)){var Te=a[o];if(Te!=null)switch(o){case"name":u=Te;break;case"type":y=Te;break;case"checked":Q=Te;break;case"defaultChecked":fe=Te;break;case"value":d=Te;break;case"defaultValue":O=Te;break;case"children":case"dangerouslySetInnerHTML":if(Te!=null)throw Error(s(137,n));break;default:nn(t,n,o,Te,a,null)}}kn(t,d,O,Q,fe,y,u,!1);return;case"select":Nt("invalid",t),o=y=d=null;for(u in a)if(a.hasOwnProperty(u)&&(O=a[u],O!=null))switch(u){case"value":d=O;break;case"defaultValue":y=O;break;case"multiple":o=O;default:nn(t,n,u,O,a,null)}n=d,a=y,t.multiple=!!o,n!=null?wn(t,!!o,n,!1):a!=null&&wn(t,!!o,a,!0);return;case"textarea":Nt("invalid",t),d=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(O=a[y],O!=null))switch(y){case"value":o=O;break;case"defaultValue":u=O;break;case"children":d=O;break;case"dangerouslySetInnerHTML":if(O!=null)throw Error(s(91));break;default:nn(t,n,y,O,a,null)}Fi(t,o,u,d);return;case"option":for(Q in a)if(a.hasOwnProperty(Q)&&(o=a[Q],o!=null))switch(Q){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:nn(t,n,Q,o,a,null)}return;case"dialog":Nt("beforetoggle",t),Nt("toggle",t),Nt("cancel",t),Nt("close",t);break;case"iframe":case"object":Nt("load",t);break;case"video":case"audio":for(o=0;o<Ho.length;o++)Nt(Ho[o],t);break;case"image":Nt("error",t),Nt("load",t);break;case"details":Nt("toggle",t);break;case"embed":case"source":case"link":Nt("error",t),Nt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(fe in a)if(a.hasOwnProperty(fe)&&(o=a[fe],o!=null))switch(fe){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:nn(t,n,fe,o,a,null)}return;default:if(Xt(n)){for(Te in a)a.hasOwnProperty(Te)&&(o=a[Te],o!==void 0&&rd(t,n,Te,o,a,void 0));return}}for(O in a)a.hasOwnProperty(O)&&(o=a[O],o!=null&&nn(t,n,O,o,a,null))}function Xy(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,y=null,O=null,Q=null,fe=null,Te=null;for(ye in a){var De=a[ye];if(a.hasOwnProperty(ye)&&De!=null)switch(ye){case"checked":break;case"value":break;case"defaultValue":Q=De;default:o.hasOwnProperty(ye)||nn(t,n,ye,null,o,De)}}for(var ge in o){var ye=o[ge];if(De=a[ge],o.hasOwnProperty(ge)&&(ye!=null||De!=null))switch(ge){case"type":d=ye;break;case"name":u=ye;break;case"checked":fe=ye;break;case"defaultChecked":Te=ye;break;case"value":y=ye;break;case"defaultValue":O=ye;break;case"children":case"dangerouslySetInnerHTML":if(ye!=null)throw Error(s(137,n));break;default:ye!==De&&nn(t,n,ge,ye,o,De)}}Ze(t,y,O,Q,fe,Te,d,u);return;case"select":ye=y=O=ge=null;for(d in a)if(Q=a[d],a.hasOwnProperty(d)&&Q!=null)switch(d){case"value":break;case"multiple":ye=Q;default:o.hasOwnProperty(d)||nn(t,n,d,null,o,Q)}for(u in o)if(d=o[u],Q=a[u],o.hasOwnProperty(u)&&(d!=null||Q!=null))switch(u){case"value":ge=d;break;case"defaultValue":O=d;break;case"multiple":y=d;default:d!==Q&&nn(t,n,u,d,o,Q)}n=O,a=y,o=ye,ge!=null?wn(t,!!a,ge,!1):!!o!=!!a&&(n!=null?wn(t,!!a,n,!0):wn(t,!!a,a?[]:"",!1));return;case"textarea":ye=ge=null;for(O in a)if(u=a[O],a.hasOwnProperty(O)&&u!=null&&!o.hasOwnProperty(O))switch(O){case"value":break;case"children":break;default:nn(t,n,O,null,o,u)}for(y in o)if(u=o[y],d=a[y],o.hasOwnProperty(y)&&(u!=null||d!=null))switch(y){case"value":ge=u;break;case"defaultValue":ye=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&nn(t,n,y,u,o,d)}ci(t,ge,ye);return;case"option":for(var it in a)if(ge=a[it],a.hasOwnProperty(it)&&ge!=null&&!o.hasOwnProperty(it))switch(it){case"selected":t.selected=!1;break;default:nn(t,n,it,null,o,ge)}for(Q in o)if(ge=o[Q],ye=a[Q],o.hasOwnProperty(Q)&&ge!==ye&&(ge!=null||ye!=null))switch(Q){case"selected":t.selected=ge&&typeof ge!="function"&&typeof ge!="symbol";break;default:nn(t,n,Q,ge,o,ye)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var dt in a)ge=a[dt],a.hasOwnProperty(dt)&&ge!=null&&!o.hasOwnProperty(dt)&&nn(t,n,dt,null,o,ge);for(fe in o)if(ge=o[fe],ye=a[fe],o.hasOwnProperty(fe)&&ge!==ye&&(ge!=null||ye!=null))switch(fe){case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(s(137,n));break;default:nn(t,n,fe,ge,o,ye)}return;default:if(Xt(n)){for(var an in a)ge=a[an],a.hasOwnProperty(an)&&ge!==void 0&&!o.hasOwnProperty(an)&&rd(t,n,an,void 0,o,ge);for(Te in o)ge=o[Te],ye=a[Te],!o.hasOwnProperty(Te)||ge===ye||ge===void 0&&ye===void 0||rd(t,n,Te,ge,o,ye);return}}for(var oe in a)ge=a[oe],a.hasOwnProperty(oe)&&ge!=null&&!o.hasOwnProperty(oe)&&nn(t,n,oe,null,o,ge);for(De in o)ge=o[De],ye=a[De],!o.hasOwnProperty(De)||ge===ye||ge==null&&ye==null||nn(t,n,De,ge,o,ye)}function wg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Yy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,y=u.initiatorType,O=u.duration;if(d&&O&&wg(y)){for(y=0,O=u.responseEnd,o+=1;o<a.length;o++){var Q=a[o],fe=Q.startTime;if(fe>O)break;var Te=Q.transferSize,De=Q.initiatorType;Te&&wg(De)&&(Q=Q.responseEnd,y+=Te*(Q<O?1:(O-fe)/(Q-fe)))}if(--o,n+=8*(d+y)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var od=null,ld=null;function fc(t){return t.nodeType===9?t:t.ownerDocument}function Dg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ng(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function cd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ud=null;function qy(){var t=window.event;return t&&t.type==="popstate"?t===ud?!1:(ud=t,!0):(ud=null,!1)}var Ug=typeof setTimeout=="function"?setTimeout:void 0,Zy=typeof clearTimeout=="function"?clearTimeout:void 0,Lg=typeof Promise=="function"?Promise:void 0,Ky=typeof queueMicrotask=="function"?queueMicrotask:typeof Lg<"u"?function(t){return Lg.resolve(null).then(t).catch(Qy)}:Ug;function Qy(t){setTimeout(function(){throw t})}function os(t){return t==="head"}function Og(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),Ur(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Vo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Vo(a);for(var d=a.firstChild;d;){var y=d.nextSibling,O=d.nodeName;d[Ba]||O==="SCRIPT"||O==="STYLE"||O==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=y}}else a==="body"&&Vo(t.ownerDocument.body);a=u}while(a);Ur(n)}function Pg(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function fd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":fd(a),ro(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Jy(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ba])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Ci(t.nextSibling),t===null)break}return null}function $y(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ci(t.nextSibling),t===null))return null;return t}function Fg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ci(t.nextSibling),t===null))return null;return t}function dd(t){return t.data==="$?"||t.data==="$~"}function hd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function eS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Ci(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var pd=null;function zg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ci(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Ig(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Bg(t,n,a){switch(n=fc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Vo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ro(t)}var wi=new Map,Hg=new Set;function dc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ma=I.d;I.d={f:tS,r:nS,D:iS,C:aS,L:sS,m:rS,X:lS,S:oS,M:cS};function tS(){var t=Ma.f(),n=ic();return t||n}function nS(t){var n=Ga(t);n!==null&&n.tag===5&&n.type==="form"?i0(n):Ma.r(t)}var wr=typeof document>"u"?null:document;function Gg(t,n,a){var o=wr;if(o&&typeof n=="string"&&n){var u=Kt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Hg.has(u)||(Hg.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Hn(n,"link",t),Sn(n),o.head.appendChild(n)))}}function iS(t){Ma.D(t),Gg("dns-prefetch",t,null)}function aS(t,n){Ma.C(t,n),Gg("preconnect",t,n)}function sS(t,n,a){Ma.L(t,n,a);var o=wr;if(o&&t&&n){var u='link[rel="preload"][as="'+Kt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Kt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Kt(a.imageSizes)+'"]')):u+='[href="'+Kt(t)+'"]';var d=u;switch(n){case"style":d=Dr(t);break;case"script":d=Nr(t)}wi.has(d)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),wi.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(ko(d))||n==="script"&&o.querySelector(jo(d))||(n=o.createElement("link"),Hn(n,"link",t),Sn(n),o.head.appendChild(n)))}}function rS(t,n){Ma.m(t,n);var a=wr;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Kt(o)+'"][href="'+Kt(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Nr(t)}if(!wi.has(d)&&(t=_({rel:"modulepreload",href:t},n),wi.set(d,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(jo(d)))return}o=a.createElement("link"),Hn(o,"link",t),Sn(o),a.head.appendChild(o)}}}function oS(t,n,a){Ma.S(t,n,a);var o=wr;if(o&&t){var u=Va(o).hoistableStyles,d=Dr(t);n=n||"default";var y=u.get(d);if(!y){var O={loading:0,preload:null};if(y=o.querySelector(ko(d)))O.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=wi.get(d))&&md(t,a);var Q=y=o.createElement("link");Sn(Q),Hn(Q,"link",t),Q._p=new Promise(function(fe,Te){Q.onload=fe,Q.onerror=Te}),Q.addEventListener("load",function(){O.loading|=1}),Q.addEventListener("error",function(){O.loading|=2}),O.loading|=4,hc(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:O},u.set(d,y)}}}function lS(t,n){Ma.X(t,n);var a=wr;if(a&&t){var o=Va(a).hoistableScripts,u=Nr(t),d=o.get(u);d||(d=a.querySelector(jo(u)),d||(t=_({src:t,async:!0},n),(n=wi.get(u))&&gd(t,n),d=a.createElement("script"),Sn(d),Hn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function cS(t,n){Ma.M(t,n);var a=wr;if(a&&t){var o=Va(a).hoistableScripts,u=Nr(t),d=o.get(u);d||(d=a.querySelector(jo(u)),d||(t=_({src:t,async:!0,type:"module"},n),(n=wi.get(u))&&gd(t,n),d=a.createElement("script"),Sn(d),Hn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Vg(t,n,a,o){var u=(u=q.current)?dc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Dr(a.href),a=Va(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Dr(a.href);var d=Va(u).hoistableStyles,y=d.get(t);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,y),(d=u.querySelector(ko(t)))&&!d._p&&(y.instance=d,y.state.loading=5),wi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},wi.set(t,a),d||uS(u,t,a,y.state))),n&&o===null)throw Error(s(528,""));return y}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Nr(a),a=Va(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Dr(t){return'href="'+Kt(t)+'"'}function ko(t){return'link[rel="stylesheet"]['+t+"]"}function kg(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function uS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Hn(n,"link",a),Sn(n),t.head.appendChild(n))}function Nr(t){return'[src="'+Kt(t)+'"]'}function jo(t){return"script[async]"+t}function jg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Kt(a.href)+'"]');if(o)return n.instance=o,Sn(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),Sn(o),Hn(o,"style",u),hc(o,a.precedence,t),n.instance=o;case"stylesheet":u=Dr(a.href);var d=t.querySelector(ko(u));if(d)return n.state.loading|=4,n.instance=d,Sn(d),d;o=kg(a),(u=wi.get(u))&&md(o,u),d=(t.ownerDocument||t).createElement("link"),Sn(d);var y=d;return y._p=new Promise(function(O,Q){y.onload=O,y.onerror=Q}),Hn(d,"link",o),n.state.loading|=4,hc(d,a.precedence,t),n.instance=d;case"script":return d=Nr(a.src),(u=t.querySelector(jo(d)))?(n.instance=u,Sn(u),u):(o=a,(u=wi.get(d))&&(o=_({},a),gd(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),Sn(u),Hn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,hc(o,a.precedence,t));return n.instance}function hc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,y=0;y<o.length;y++){var O=o[y];if(O.dataset.precedence===n)d=O;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function md(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function gd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var pc=null;function Wg(t,n,a){if(pc===null){var o=new Map,u=pc=new Map;u.set(a,o)}else u=pc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[Ba]||d[gn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var y=d.getAttribute(n)||"";y=t+y;var O=o.get(y);O?O.push(d):o.set(y,[d])}}return o}function Xg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function fS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Yg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function dS(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Dr(o.href),d=n.querySelector(ko(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=mc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=d,Sn(d);return}d=n.ownerDocument||n,o=kg(o),(u=wi.get(u))&&md(o,u),d=d.createElement("link"),Sn(d);var y=d;y._p=new Promise(function(O,Q){y.onload=O,y.onerror=Q}),Hn(d,"link",o),a.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=mc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var xd=0;function hS(t,n){return t.stylesheets&&t.count===0&&xc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&xc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&xd===0&&(xd=62500*Yy());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&xc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>xd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function mc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)xc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var gc=null;function xc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,gc=new Map,n.forEach(pS,t),gc=null,mc.call(t))}function pS(t,n){if(!(n.state.loading&4)){var a=gc.get(t);if(a)var o=a.get(null);else{a=new Map,gc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var y=u[d];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),d=a.get(y)||o,d===o&&a.set(null,u),a.set(y,u),this.count++,o=mc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Wo={$$typeof:V,Provider:null,Consumer:null,_currentValue:R,_currentValue2:R,_threadCount:0};function mS(t,n,a,o,u,d,y,O,Q){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Pe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pe(0),this.hiddenUpdates=Pe(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=Q,this.incompleteTransitions=new Map}function qg(t,n,a,o,u,d,y,O,Q,fe,Te,De){return t=new mS(t,n,a,y,Q,fe,Te,De,O),n=1,d===!0&&(n|=24),d=di(3,null,null,n),t.current=d,d.stateNode=t,n=Zu(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},$u(d),t}function Zg(t){return t?(t=lr,t):lr}function Kg(t,n,a,o,u,d){u=Zg(u),o.context===null?o.context=u:o.pendingContext=u,o=Ka(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Qa(t,o,n),a!==null&&(si(a,t,n),Mo(a,t,n))}function Qg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function _d(t,n){Qg(t,n),(t=t.alternate)&&Qg(t,n)}function Jg(t){if(t.tag===13||t.tag===31){var n=Ds(t,67108864);n!==null&&si(n,t,67108864),_d(t,67108864)}}function $g(t){if(t.tag===13||t.tag===31){var n=xi();n=Cn(n);var a=Ds(t,n);a!==null&&si(a,t,n),_d(t,n)}}var _c=!0;function gS(t,n,a,o){var u=N.T;N.T=null;var d=I.p;try{I.p=2,vd(t,n,a,o)}finally{I.p=d,N.T=u}}function xS(t,n,a,o){var u=N.T;N.T=null;var d=I.p;try{I.p=8,vd(t,n,a,o)}finally{I.p=d,N.T=u}}function vd(t,n,a,o){if(_c){var u=yd(o);if(u===null)sd(t,n,o,vc,a),tx(t,o);else if(vS(u,t,n,a,o))o.stopPropagation();else if(tx(t,o),n&4&&-1<_S.indexOf(t)){for(;u!==null;){var d=Ga(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var y=Fe(d.pendingLanes);if(y!==0){var O=d;for(O.pendingLanes|=2,O.entangledLanes|=2;y;){var Q=1<<31-ke(y);O.entanglements[1]|=Q,y&=~Q}Ki(d),(Wt&6)===0&&(tc=Ue()+500,Bo(0))}}break;case 31:case 13:O=Ds(d,2),O!==null&&si(O,d,2),ic(),_d(d,2)}if(d=yd(o),d===null&&sd(t,n,o,vc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else sd(t,n,o,null,a)}}function yd(t){return t=Su(t),Sd(t)}var vc=null;function Sd(t){if(vc=null,t=Ha(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return vc=t,null}function ex(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ft()){case z:return 2;case C:return 8;case ie:case Ee:return 32;case Ne:return 268435456;default:return 32}default:return 32}}var bd=!1,ls=null,cs=null,us=null,Xo=new Map,Yo=new Map,fs=[],_S="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function tx(t,n){switch(t){case"focusin":case"focusout":ls=null;break;case"dragenter":case"dragleave":cs=null;break;case"mouseover":case"mouseout":us=null;break;case"pointerover":case"pointerout":Xo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yo.delete(n.pointerId)}}function qo(t,n,a,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=Ga(n),n!==null&&Jg(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function vS(t,n,a,o,u){switch(n){case"focusin":return ls=qo(ls,t,n,a,o,u),!0;case"dragenter":return cs=qo(cs,t,n,a,o,u),!0;case"mouseover":return us=qo(us,t,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Xo.set(d,qo(Xo.get(d)||null,t,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Yo.set(d,qo(Yo.get(d)||null,t,n,a,o,u)),!0}return!1}function nx(t){var n=Ha(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,za(t.priority,function(){$g(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,za(t.priority,function(){$g(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function yc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=yd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);yu=o,a.target.dispatchEvent(o),yu=null}else return n=Ga(a),n!==null&&Jg(n),t.blockedOn=a,!1;n.shift()}return!0}function ix(t,n,a){yc(t)&&a.delete(n)}function yS(){bd=!1,ls!==null&&yc(ls)&&(ls=null),cs!==null&&yc(cs)&&(cs=null),us!==null&&yc(us)&&(us=null),Xo.forEach(ix),Yo.forEach(ix)}function Sc(t,n){t.blockedOn===n&&(t.blockedOn=null,bd||(bd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,yS)))}var bc=null;function ax(t){bc!==t&&(bc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){bc===t&&(bc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(Sd(o||a)===null)continue;break}var d=Ga(a);d!==null&&(t.splice(n,3),n-=3,yf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Ur(t){function n(Q){return Sc(Q,t)}ls!==null&&Sc(ls,t),cs!==null&&Sc(cs,t),us!==null&&Sc(us,t),Xo.forEach(n),Yo.forEach(n);for(var a=0;a<fs.length;a++){var o=fs[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<fs.length&&(a=fs[0],a.blockedOn===null);)nx(a),a.blockedOn===null&&fs.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],y=u[Fn]||null;if(typeof d=="function")y||ax(a);else if(y){var O=null;if(d&&d.hasAttribute("formAction")){if(u=d,y=d[Fn]||null)O=y.formAction;else if(Sd(u)!==null)continue}else O=y.action;typeof O=="function"?a[o+1]=O:(a.splice(o,3),o-=3),ax(a)}}}function sx(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Md(t){this._internalRoot=t}Mc.prototype.render=Md.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=xi();Kg(a,o,t,n,null,null)},Mc.prototype.unmount=Md.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Kg(t.current,2,null,t,null,null),ic(),n[ra]=null}};function Mc(t){this._internalRoot=t}Mc.prototype.unstable_scheduleHydration=function(t){if(t){var n=yn();t={blockedOn:null,target:t,priority:n};for(var a=0;a<fs.length&&n!==0&&n<fs[a].priority;a++);fs.splice(a,0,t),a===0&&nx(t)}};var rx=e.version;if(rx!=="19.2.7")throw Error(s(527,rx,"19.2.7"));I.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=h(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var SS={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ec.isDisabled&&Ec.supportsFiber)try{Se=Ec.inject(SS),Me=Ec}catch{}}return Ko.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=h0,d=p0,y=m0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=qg(t,1,!1,null,null,a,o,null,u,d,y,sx),t[ra]=n.current,ad(t),new Md(n)},Ko.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",d=h0,y=p0,O=m0,Q=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(O=a.onRecoverableError),a.formState!==void 0&&(Q=a.formState)),n=qg(t,1,!0,n,a??null,o,u,Q,d,y,O,sx),n.context=Zg(null),a=n.current,o=xi(),o=Cn(o),u=Ka(o),u.callback=null,Qa(a,u,o),a=o,n.current.lanes=a,we(n,a),Ki(n),t[ra]=n.current,ad(t),new Mc(n)},Ko.version="19.2.7",Ko}var gx;function US(){if(gx)return Ad.exports;gx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Ad.exports=NS(),Ad.exports}var LS=US();/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Zs(r,e){let i=r.trim();if(!i)return 0;const s=Object.entries(e).sort((l,c)=>c[0].length-l[0].length);for(const[l,c]of s){const f=new RegExp(`\\b${l}\\b`,"g");i=i.replace(f,c.toString())}i=i.replace(/\bPI\b/gi,Math.PI.toString()),i=i.replace(/\bE\b/gi,Math.E.toString());try{return OS(i)}catch(l){return console.error(`Failed to parse expression: "${r}" (substituted: "${i}")`,l),0}}function OS(r){const e=r.replace(/\s+/g,"");let i=0;function s(){let f=l();for(;i<e.length;){const p=e[i];if(p==="+"||p==="-"){i++;const m=l();p==="+"?f+=m:f-=m}else break}return f}function l(){let f=c();for(;i<e.length;){const p=e[i];if(p==="*"||p==="/"){i++;const m=c();if(p==="*")f*=m;else{if(m===0)throw new Error("Division by zero");f/=m}}else break}return f}function c(){if(i>=e.length)return 0;if(e[i]==="("){i++;const h=s();return e[i]===")"&&i++,h}let f=1;e[i]==="-"?(f=-1,i++):e[i]==="+"&&i++;let p=i;for(;i<e.length&&(e[i]>="0"&&e[i]<="9"||e[i]===".");)i++;if(p===i)return 0;const m=e.substring(p,i);return parseFloat(m)*f}return s()}let xx="",Dd=null;function sl(r,e,i,s=25e4){const l=`${r}_${JSON.stringify(e)}_${i}_${s}`;if(Dd&&l===xx)return Dd;let c=r,f=!1;const p={};for(const h of e)h.inputSymbol&&(p[h.inputSymbol]=h.successor);for(let h=0;h<i;h++){let g="",_=0;for(let x=0;x<c.length;x++){const E=c[x],T=p[E];_+=T!==void 0?T.length:1}if(_>s){for(let x=0;x<c.length;x++){const E=c[x],T=p[E];if(T!==void 0?g+=T:g+=E,g.length>=s){g=g.substring(0,s),f=!0;break}}c=g,f=!0;break}else{for(let x=0;x<c.length;x++){const E=c[x],T=p[E];T!==void 0?g+=T:g+=E}c=g}}const m={expandedString:c,isCapped:f,totalLength:c.length};return xx=l,Dd=m,m}function PS(r,e){if(!r)return;const i=r.trim();if(!i)return;if(i.startsWith("#"))return i;let s=i;const l=i.match(/^(?:rgba?|rgb)?\s*\((.*)\)\s*$/i);if(l)s=l[1];else if(i.includes(","))s=i;else return;const c=s.split(",");if(c.length>=3){const f=Math.max(0,Math.min(255,Math.round(Zs(c[0],e)))),p=Math.max(0,Math.min(255,Math.round(Zs(c[1],e)))),m=Math.max(0,Math.min(255,Math.round(Zs(c[2],e))));let h=1;return c.length>=4&&(h=Math.max(0,Math.min(1,Zs(c[3],e)))),`rgba(${f}, ${p}, ${m}, ${h})`}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */var Re=(r=>(r.FORWARD="FORWARD",r.FORWARD_NO_PEN="FORWARD_NO_PEN",r.TURN_LEFT="TURN_LEFT",r.TURN_RIGHT="TURN_RIGHT",r.PUSH_STATE="PUSH_STATE",r.POP_STATE="POP_STATE",r.PITCH_UP="PITCH_UP",r.PITCH_DOWN="PITCH_DOWN",r.ROLL_LEFT="ROLL_LEFT",r.ROLL_RIGHT="ROLL_RIGHT",r.YAW_LEFT="YAW_LEFT",r.YAW_RIGHT="YAW_RIGHT",r.TURN_ROUND="TURN_ROUND",r.NONE="NONE",r))(Re||{});/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lp="184",Qr={ROTATE:0,DOLLY:1,PAN:2},Kr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},FS=0,_x=1,zS=2,Jc=1,IS=2,rl=3,bs=0,li=1,Da=2,Ua=0,Jr=1,vx=2,yx=3,Sx=4,BS=5,Ys=100,HS=101,GS=102,VS=103,kS=104,jS=200,WS=201,XS=202,YS=203,mh=204,gh=205,qS=206,ZS=207,KS=208,QS=209,JS=210,$S=211,eb=212,tb=213,nb=214,xh=0,_h=1,vh=2,eo=3,yh=4,Sh=5,bh=6,Mh=7,C_=0,ib=1,ab=2,na=0,w_=1,D_=2,N_=3,U_=4,L_=5,O_=6,P_=7,F_=300,Js=301,to=302,Nd=303,Ud=304,mu=306,Eh=1e3,Na=1001,Th=1002,Gn=1003,sb=1004,Tc=1005,Zn=1006,Ld=1007,Ks=1008,Li=1009,z_=1010,I_=1011,cl=1012,cp=1013,aa=1014,ea=1015,Oa=1016,up=1017,fp=1018,ul=1020,B_=35902,H_=35899,G_=1021,V_=1022,Wi=1023,Pa=1026,Qs=1027,k_=1028,dp=1029,$s=1030,hp=1031,pp=1033,$c=33776,eu=33777,tu=33778,nu=33779,Ah=35840,Rh=35841,Ch=35842,wh=35843,Dh=36196,Nh=37492,Uh=37496,Lh=37488,Oh=37489,ru=37490,Ph=37491,Fh=37808,zh=37809,Ih=37810,Bh=37811,Hh=37812,Gh=37813,Vh=37814,kh=37815,jh=37816,Wh=37817,Xh=37818,Yh=37819,qh=37820,Zh=37821,Kh=36492,Qh=36494,Jh=36495,$h=36283,ep=36284,ou=36285,tp=36286,rb=3200,bx=0,ob=1,ys="",Ni="srgb",lu="srgb-linear",cu="linear",en="srgb",Lr=7680,Mx=519,lb=512,cb=513,ub=514,mp=515,fb=516,db=517,gp=518,hb=519,Ex=35044,Tx="300 es",ta=2e3,uu=2001;function pb(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function fu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function mb(){const r=fu("canvas");return r.style.display="block",r}const Ax={};function Rx(...r){const e="THREE."+r.shift();console.log(e,...r)}function j_(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ht(...r){r=j_(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...r)}}function Ht(...r){r=j_(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...r)}}function np(...r){const e=r.join(" ");e in Ax||(Ax[e]=!0,ht(...r))}function gb(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const xb={[xh]:_h,[vh]:bh,[yh]:Mh,[eo]:Sh,[_h]:xh,[bh]:vh,[Mh]:yh,[Sh]:eo};class Es{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],iu=Math.PI/180,ip=180/Math.PI;function fl(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Wn[r&255]+Wn[r>>8&255]+Wn[r>>16&255]+Wn[r>>24&255]+"-"+Wn[e&255]+Wn[e>>8&255]+"-"+Wn[e>>16&15|64]+Wn[e>>24&255]+"-"+Wn[i&63|128]+Wn[i>>8&255]+"-"+Wn[i>>16&255]+Wn[i>>24&255]+Wn[s&255]+Wn[s>>8&255]+Wn[s>>16&255]+Wn[s>>24&255]).toLowerCase()}function Ut(r,e,i){return Math.max(e,Math.min(i,r))}function _b(r,e){return(r%e+e)%e}function Od(r,e,i){return(1-i)*r+i*e}function Qo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ri(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const vb={DEG2RAD:iu},Ep=class Ep{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ut(this.x,e.x,i.x),this.y=Ut(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ut(this.x,e,i),this.y=Ut(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ut(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ut(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*s-f*l+e.x,this.y=c*l+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ep.prototype.isVector2=!0;let Rt=Ep;class Ms{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,f,p){let m=s[l+0],h=s[l+1],g=s[l+2],_=s[l+3],x=c[f+0],E=c[f+1],T=c[f+2],U=c[f+3];if(_!==U||m!==x||h!==E||g!==T){let S=m*x+h*E+g*T+_*U;S<0&&(x=-x,E=-E,T=-T,U=-U,S=-S);let v=1-p;if(S<.9995){const P=Math.acos(S),V=Math.sin(P);v=Math.sin(v*P)/V,p=Math.sin(p*P)/V,m=m*v+x*p,h=h*v+E*p,g=g*v+T*p,_=_*v+U*p}else{m=m*v+x*p,h=h*v+E*p,g=g*v+T*p,_=_*v+U*p;const P=1/Math.sqrt(m*m+h*h+g*g+_*_);m*=P,h*=P,g*=P,_*=P}}e[i]=m,e[i+1]=h,e[i+2]=g,e[i+3]=_}static multiplyQuaternionsFlat(e,i,s,l,c,f){const p=s[l],m=s[l+1],h=s[l+2],g=s[l+3],_=c[f],x=c[f+1],E=c[f+2],T=c[f+3];return e[i]=p*T+g*_+m*E-h*x,e[i+1]=m*T+g*x+h*_-p*E,e[i+2]=h*T+g*E+p*x-m*_,e[i+3]=g*T-p*_-m*x-h*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,f=e._order,p=Math.cos,m=Math.sin,h=p(s/2),g=p(l/2),_=p(c/2),x=m(s/2),E=m(l/2),T=m(c/2);switch(f){case"XYZ":this._x=x*g*_+h*E*T,this._y=h*E*_-x*g*T,this._z=h*g*T+x*E*_,this._w=h*g*_-x*E*T;break;case"YXZ":this._x=x*g*_+h*E*T,this._y=h*E*_-x*g*T,this._z=h*g*T-x*E*_,this._w=h*g*_+x*E*T;break;case"ZXY":this._x=x*g*_-h*E*T,this._y=h*E*_+x*g*T,this._z=h*g*T+x*E*_,this._w=h*g*_-x*E*T;break;case"ZYX":this._x=x*g*_-h*E*T,this._y=h*E*_+x*g*T,this._z=h*g*T-x*E*_,this._w=h*g*_+x*E*T;break;case"YZX":this._x=x*g*_+h*E*T,this._y=h*E*_+x*g*T,this._z=h*g*T-x*E*_,this._w=h*g*_-x*E*T;break;case"XZY":this._x=x*g*_-h*E*T,this._y=h*E*_-x*g*T,this._z=h*g*T+x*E*_,this._w=h*g*_+x*E*T;break;default:ht("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],f=i[1],p=i[5],m=i[9],h=i[2],g=i[6],_=i[10],x=s+p+_;if(x>0){const E=.5/Math.sqrt(x+1);this._w=.25/E,this._x=(g-m)*E,this._y=(c-h)*E,this._z=(f-l)*E}else if(s>p&&s>_){const E=2*Math.sqrt(1+s-p-_);this._w=(g-m)/E,this._x=.25*E,this._y=(l+f)/E,this._z=(c+h)/E}else if(p>_){const E=2*Math.sqrt(1+p-s-_);this._w=(c-h)/E,this._x=(l+f)/E,this._y=.25*E,this._z=(m+g)/E}else{const E=2*Math.sqrt(1+_-s-p);this._w=(f-l)/E,this._x=(c+h)/E,this._y=(m+g)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,f=e._w,p=i._x,m=i._y,h=i._z,g=i._w;return this._x=s*g+f*p+l*h-c*m,this._y=l*g+f*m+c*p-s*h,this._z=c*g+f*h+s*m-l*p,this._w=f*g-s*p-l*m-c*h,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,f=e._w,p=this.dot(e);p<0&&(s=-s,l=-l,c=-c,f=-f,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),g=Math.sin(h);m=Math.sin(m*h)/g,i=Math.sin(i*h)/g,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Tp=class Tp{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Cx.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Cx.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,f=e.y,p=e.z,m=e.w,h=2*(f*l-p*s),g=2*(p*i-c*l),_=2*(c*s-f*i);return this.x=i+m*h+f*_-p*g,this.y=s+m*g+p*h-c*_,this.z=l+m*_+c*g-f*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ut(this.x,e.x,i.x),this.y=Ut(this.y,e.y,i.y),this.z=Ut(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ut(this.x,e,i),this.y=Ut(this.y,e,i),this.z=Ut(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ut(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,f=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*f-s*m,this.z=s*p-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Pd.copy(this).projectOnVector(e),this.sub(Pd)}reflect(e){return this.sub(Pd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ut(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Tp.prototype.isVector3=!0;let ce=Tp;const Pd=new ce,Cx=new Ms,Ap=class Ap{constructor(e,i,s,l,c,f,p,m,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,p,m,h)}set(e,i,s,l,c,f,p,m,h){const g=this.elements;return g[0]=e,g[1]=l,g[2]=p,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=f,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],p=s[3],m=s[6],h=s[1],g=s[4],_=s[7],x=s[2],E=s[5],T=s[8],U=l[0],S=l[3],v=l[6],P=l[1],V=l[4],B=l[7],Z=l[2],G=l[5],j=l[8];return c[0]=f*U+p*P+m*Z,c[3]=f*S+p*V+m*G,c[6]=f*v+p*B+m*j,c[1]=h*U+g*P+_*Z,c[4]=h*S+g*V+_*G,c[7]=h*v+g*B+_*j,c[2]=x*U+E*P+T*Z,c[5]=x*S+E*V+T*G,c[8]=x*v+E*B+T*j,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],g=e[8];return i*f*g-i*p*h-s*c*g+s*p*m+l*c*h-l*f*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],g=e[8],_=g*f-p*h,x=p*m-g*c,E=h*c-f*m,T=i*_+s*x+l*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const U=1/T;return e[0]=_*U,e[1]=(l*h-g*s)*U,e[2]=(p*s-l*f)*U,e[3]=x*U,e[4]=(g*i-l*m)*U,e[5]=(l*c-p*i)*U,e[6]=E*U,e[7]=(s*m-h*i)*U,e[8]=(f*i-s*c)*U,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,f,p){const m=Math.cos(c),h=Math.sin(c);return this.set(s*m,s*h,-s*(m*f+h*p)+f+e,-l*h,l*m,-l*(-h*f+m*p)+p+i,0,0,1),this}scale(e,i){return this.premultiply(Fd.makeScale(e,i)),this}rotate(e){return this.premultiply(Fd.makeRotation(-e)),this}translate(e,i){return this.premultiply(Fd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ap.prototype.isMatrix3=!0;let _t=Ap;const Fd=new _t,wx=new _t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dx=new _t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yb(){const r={enabled:!0,workingColorSpace:lu,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===en&&(l.r=La(l.r),l.g=La(l.g),l.b=La(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===en&&(l.r=$r(l.r),l.g=$r(l.g),l.b=$r(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ys?cu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return np("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return np("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[lu]:{primaries:e,whitePoint:s,transfer:cu,toXYZ:wx,fromXYZ:Dx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ni},outputColorSpaceConfig:{drawingBufferColorSpace:Ni}},[Ni]:{primaries:e,whitePoint:s,transfer:en,toXYZ:wx,fromXYZ:Dx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ni}}}),r}const Bt=yb();function La(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function $r(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Or;class Sb{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Or===void 0&&(Or=fu("canvas")),Or.width=e.width,Or.height=e.height;const l=Or.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Or}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=fu("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=La(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(La(i[s]/255)*255):i[s]=La(i[s]);return{data:i,width:e.width,height:e.height}}else return ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bb=0;class xp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bb++}),this.uuid=fl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,p=l.length;f<p;f++)l[f].isDataTexture?c.push(zd(l[f].image)):c.push(zd(l[f]))}else c=zd(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function zd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Sb.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ht("Texture: Unable to serialize Texture."),{})}let Mb=0;const Id=new ce;class Jn extends Es{constructor(e=Jn.DEFAULT_IMAGE,i=Jn.DEFAULT_MAPPING,s=Na,l=Na,c=Zn,f=Ks,p=Wi,m=Li,h=Jn.DEFAULT_ANISOTROPY,g=ys){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mb++}),this.uuid=fl(),this.name="",this.source=new xp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Id).x}get height(){return this.source.getSize(Id).y}get depth(){return this.source.getSize(Id).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){ht(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ht(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==F_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Eh:e.x=e.x-Math.floor(e.x);break;case Na:e.x=e.x<0?0:1;break;case Th:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Eh:e.y=e.y-Math.floor(e.y);break;case Na:e.y=e.y<0?0:1;break;case Th:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jn.DEFAULT_IMAGE=null;Jn.DEFAULT_MAPPING=F_;Jn.DEFAULT_ANISOTROPY=1;const Rp=class Rp{constructor(e=0,i=0,s=0,l=1){this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,h=m[0],g=m[4],_=m[8],x=m[1],E=m[5],T=m[9],U=m[2],S=m[6],v=m[10];if(Math.abs(g-x)<.01&&Math.abs(_-U)<.01&&Math.abs(T-S)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+U)<.1&&Math.abs(T+S)<.1&&Math.abs(h+E+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const V=(h+1)/2,B=(E+1)/2,Z=(v+1)/2,G=(g+x)/4,j=(_+U)/4,D=(T+S)/4;return V>B&&V>Z?V<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(V),l=G/s,c=j/s):B>Z?B<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(B),s=G/l,c=D/l):Z<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(Z),s=j/c,l=D/c),this.set(s,l,c,i),this}let P=Math.sqrt((S-T)*(S-T)+(_-U)*(_-U)+(x-g)*(x-g));return Math.abs(P)<.001&&(P=1),this.x=(S-T)/P,this.y=(_-U)/P,this.z=(x-g)/P,this.w=Math.acos((h+E+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ut(this.x,e.x,i.x),this.y=Ut(this.y,e.y,i.y),this.z=Ut(this.z,e.z,i.z),this.w=Ut(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ut(this.x,e,i),this.y=Ut(this.y,e,i),this.z=Ut(this.z,e,i),this.w=Ut(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ut(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Rp.prototype.isVector4=!0;let vn=Rp;class Eb extends Es{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new vn(0,0,e,i),this.scissorTest=!1,this.viewport=new vn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new Jn(l),f=s.count;for(let p=0;p<f;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:Zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new xp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ia extends Eb{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class W_ extends Jn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=Na,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Tb extends Jn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=Na,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pu=class pu{constructor(e,i,s,l,c,f,p,m,h,g,_,x,E,T,U,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,p,m,h,g,_,x,E,T,U,S)}set(e,i,s,l,c,f,p,m,h,g,_,x,E,T,U,S){const v=this.elements;return v[0]=e,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=f,v[9]=p,v[13]=m,v[2]=h,v[6]=g,v[10]=_,v[14]=x,v[3]=E,v[7]=T,v[11]=U,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pu().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Pr.setFromMatrixColumn(e,0).length(),c=1/Pr.setFromMatrixColumn(e,1).length(),f=1/Pr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,f=Math.cos(s),p=Math.sin(s),m=Math.cos(l),h=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const x=f*g,E=f*_,T=p*g,U=p*_;i[0]=m*g,i[4]=-m*_,i[8]=h,i[1]=E+T*h,i[5]=x-U*h,i[9]=-p*m,i[2]=U-x*h,i[6]=T+E*h,i[10]=f*m}else if(e.order==="YXZ"){const x=m*g,E=m*_,T=h*g,U=h*_;i[0]=x+U*p,i[4]=T*p-E,i[8]=f*h,i[1]=f*_,i[5]=f*g,i[9]=-p,i[2]=E*p-T,i[6]=U+x*p,i[10]=f*m}else if(e.order==="ZXY"){const x=m*g,E=m*_,T=h*g,U=h*_;i[0]=x-U*p,i[4]=-f*_,i[8]=T+E*p,i[1]=E+T*p,i[5]=f*g,i[9]=U-x*p,i[2]=-f*h,i[6]=p,i[10]=f*m}else if(e.order==="ZYX"){const x=f*g,E=f*_,T=p*g,U=p*_;i[0]=m*g,i[4]=T*h-E,i[8]=x*h+U,i[1]=m*_,i[5]=U*h+x,i[9]=E*h-T,i[2]=-h,i[6]=p*m,i[10]=f*m}else if(e.order==="YZX"){const x=f*m,E=f*h,T=p*m,U=p*h;i[0]=m*g,i[4]=U-x*_,i[8]=T*_+E,i[1]=_,i[5]=f*g,i[9]=-p*g,i[2]=-h*g,i[6]=E*_+T,i[10]=x-U*_}else if(e.order==="XZY"){const x=f*m,E=f*h,T=p*m,U=p*h;i[0]=m*g,i[4]=-_,i[8]=h*g,i[1]=x*_+U,i[5]=f*g,i[9]=E*_-T,i[2]=T*_-E,i[6]=p*g,i[10]=U*_+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ab,e,Rb)}lookAt(e,i,s){const l=this.elements;return _i.subVectors(e,i),_i.lengthSq()===0&&(_i.z=1),_i.normalize(),hs.crossVectors(s,_i),hs.lengthSq()===0&&(Math.abs(s.z)===1?_i.x+=1e-4:_i.z+=1e-4,_i.normalize(),hs.crossVectors(s,_i)),hs.normalize(),Ac.crossVectors(_i,hs),l[0]=hs.x,l[4]=Ac.x,l[8]=_i.x,l[1]=hs.y,l[5]=Ac.y,l[9]=_i.y,l[2]=hs.z,l[6]=Ac.z,l[10]=_i.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],p=s[4],m=s[8],h=s[12],g=s[1],_=s[5],x=s[9],E=s[13],T=s[2],U=s[6],S=s[10],v=s[14],P=s[3],V=s[7],B=s[11],Z=s[15],G=l[0],j=l[4],D=l[8],k=l[12],J=l[1],Y=l[5],ae=l[9],ee=l[13],xe=l[2],X=l[6],N=l[10],I=l[14],R=l[3],w=l[7],F=l[11],b=l[15];return c[0]=f*G+p*J+m*xe+h*R,c[4]=f*j+p*Y+m*X+h*w,c[8]=f*D+p*ae+m*N+h*F,c[12]=f*k+p*ee+m*I+h*b,c[1]=g*G+_*J+x*xe+E*R,c[5]=g*j+_*Y+x*X+E*w,c[9]=g*D+_*ae+x*N+E*F,c[13]=g*k+_*ee+x*I+E*b,c[2]=T*G+U*J+S*xe+v*R,c[6]=T*j+U*Y+S*X+v*w,c[10]=T*D+U*ae+S*N+v*F,c[14]=T*k+U*ee+S*I+v*b,c[3]=P*G+V*J+B*xe+Z*R,c[7]=P*j+V*Y+B*X+Z*w,c[11]=P*D+V*ae+B*N+Z*F,c[15]=P*k+V*ee+B*I+Z*b,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],f=e[1],p=e[5],m=e[9],h=e[13],g=e[2],_=e[6],x=e[10],E=e[14],T=e[3],U=e[7],S=e[11],v=e[15],P=m*E-h*x,V=p*E-h*_,B=p*x-m*_,Z=f*E-h*g,G=f*x-m*g,j=f*_-p*g;return i*(U*P-S*V+v*B)-s*(T*P-S*Z+v*G)+l*(T*V-U*Z+v*j)-c*(T*B-U*G+S*j)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],g=e[8],_=e[9],x=e[10],E=e[11],T=e[12],U=e[13],S=e[14],v=e[15],P=i*p-s*f,V=i*m-l*f,B=i*h-c*f,Z=s*m-l*p,G=s*h-c*p,j=l*h-c*m,D=g*U-_*T,k=g*S-x*T,J=g*v-E*T,Y=_*S-x*U,ae=_*v-E*U,ee=x*v-E*S,xe=P*ee-V*ae+B*Y+Z*J-G*k+j*D;if(xe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/xe;return e[0]=(p*ee-m*ae+h*Y)*X,e[1]=(l*ae-s*ee-c*Y)*X,e[2]=(U*j-S*G+v*Z)*X,e[3]=(x*G-_*j-E*Z)*X,e[4]=(m*J-f*ee-h*k)*X,e[5]=(i*ee-l*J+c*k)*X,e[6]=(S*B-T*j-v*V)*X,e[7]=(g*j-x*B+E*V)*X,e[8]=(f*ae-p*J+h*D)*X,e[9]=(s*J-i*ae-c*D)*X,e[10]=(T*G-U*B+v*P)*X,e[11]=(_*B-g*G-E*P)*X,e[12]=(p*k-f*Y-m*D)*X,e[13]=(i*Y-s*k+l*D)*X,e[14]=(U*V-T*Z-S*P)*X,e[15]=(g*Z-_*V+x*P)*X,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=e.x,p=e.y,m=e.z,h=c*f,g=c*p;return this.set(h*f+s,h*p-l*m,h*m+l*p,0,h*p+l*m,g*p+s,g*m-l*f,0,h*m-l*p,g*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,f){return this.set(1,s,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,f=i._y,p=i._z,m=i._w,h=c+c,g=f+f,_=p+p,x=c*h,E=c*g,T=c*_,U=f*g,S=f*_,v=p*_,P=m*h,V=m*g,B=m*_,Z=s.x,G=s.y,j=s.z;return l[0]=(1-(U+v))*Z,l[1]=(E+B)*Z,l[2]=(T-V)*Z,l[3]=0,l[4]=(E-B)*G,l[5]=(1-(x+v))*G,l[6]=(S+P)*G,l[7]=0,l[8]=(T+V)*j,l[9]=(S-P)*j,l[10]=(1-(x+U))*j,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let f=Pr.set(l[0],l[1],l[2]).length();const p=Pr.set(l[4],l[5],l[6]).length(),m=Pr.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Gi.copy(this);const h=1/f,g=1/p,_=1/m;return Gi.elements[0]*=h,Gi.elements[1]*=h,Gi.elements[2]*=h,Gi.elements[4]*=g,Gi.elements[5]*=g,Gi.elements[6]*=g,Gi.elements[8]*=_,Gi.elements[9]*=_,Gi.elements[10]*=_,i.setFromRotationMatrix(Gi),s.x=f,s.y=p,s.z=m,this}makePerspective(e,i,s,l,c,f,p=ta,m=!1){const h=this.elements,g=2*c/(i-e),_=2*c/(s-l),x=(i+e)/(i-e),E=(s+l)/(s-l);let T,U;if(m)T=c/(f-c),U=f*c/(f-c);else if(p===ta)T=-(f+c)/(f-c),U=-2*f*c/(f-c);else if(p===uu)T=-f/(f-c),U=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=g,h[4]=0,h[8]=x,h[12]=0,h[1]=0,h[5]=_,h[9]=E,h[13]=0,h[2]=0,h[6]=0,h[10]=T,h[14]=U,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,s,l,c,f,p=ta,m=!1){const h=this.elements,g=2/(i-e),_=2/(s-l),x=-(i+e)/(i-e),E=-(s+l)/(s-l);let T,U;if(m)T=1/(f-c),U=f/(f-c);else if(p===ta)T=-2/(f-c),U=-(f+c)/(f-c);else if(p===uu)T=-1/(f-c),U=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=g,h[4]=0,h[8]=0,h[12]=x,h[1]=0,h[5]=_,h[9]=0,h[13]=E,h[2]=0,h[6]=0,h[10]=T,h[14]=U,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};pu.prototype.isMatrix4=!0;let Rn=pu;const Pr=new ce,Gi=new Rn,Ab=new ce(0,0,0),Rb=new ce(1,1,1),hs=new ce,Ac=new ce,_i=new ce,Nx=new Rn,Ux=new Ms;class er{constructor(e=0,i=0,s=0,l=er.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],f=l[4],p=l[8],m=l[1],h=l[5],g=l[9],_=l[2],x=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Ut(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,E),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(p,E),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,E),this._z=Math.atan2(-f,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ut(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,E),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,h));break;case"YZX":this._z=Math.asin(Ut(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(p,E));break;case"XZY":this._z=Math.asin(-Ut(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-g,E),this._y=0);break;default:ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return Nx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nx,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Ux.setFromEuler(this),this.setFromQuaternion(Ux,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}er.DEFAULT_ORDER="XYZ";let X_=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Cb=0;const Lx=new ce,Fr=new Ms,Ea=new Rn,Rc=new ce,Jo=new ce,wb=new ce,Db=new Ms,Ox=new ce(1,0,0),Px=new ce(0,1,0),Fx=new ce(0,0,1),zx={type:"added"},Nb={type:"removed"},zr={type:"childadded",child:null},Bd={type:"childremoved",child:null};class $n extends Es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cb++}),this.uuid=fl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$n.DEFAULT_UP.clone();const e=new ce,i=new er,s=new Ms,l=new ce(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Rn},normalMatrix:{value:new _t}}),this.matrix=new Rn,this.matrixWorld=new Rn,this.matrixAutoUpdate=$n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new X_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Fr.setFromAxisAngle(e,i),this.quaternion.multiply(Fr),this}rotateOnWorldAxis(e,i){return Fr.setFromAxisAngle(e,i),this.quaternion.premultiply(Fr),this}rotateX(e){return this.rotateOnAxis(Ox,e)}rotateY(e){return this.rotateOnAxis(Px,e)}rotateZ(e){return this.rotateOnAxis(Fx,e)}translateOnAxis(e,i){return Lx.copy(e).applyQuaternion(this.quaternion),this.position.add(Lx.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Ox,e)}translateY(e){return this.translateOnAxis(Px,e)}translateZ(e){return this.translateOnAxis(Fx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ea.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Rc.copy(e):Rc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ea.lookAt(Jo,Rc,this.up):Ea.lookAt(Rc,Jo,this.up),this.quaternion.setFromRotationMatrix(Ea),l&&(Ea.extractRotation(l.matrixWorld),Fr.setFromRotationMatrix(Ea),this.quaternion.premultiply(Fr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ht("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zx),zr.child=e,this.dispatchEvent(zr),zr.child=null):Ht("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Nb),Bd.child=e,this.dispatchEvent(Bd),Bd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ea.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ea.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ea),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zx),zr.child=e,this.dispatchEvent(zr),zr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,e,wb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,Db,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,g=m.length;h<g;h++){const _=m[h];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=f(e.geometries),m=f(e.materials),h=f(e.textures),g=f(e.images),_=f(e.shapes),x=f(e.skeletons),E=f(e.animations),T=f(e.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),h.length>0&&(s.textures=h),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),x.length>0&&(s.skeletons=x),E.length>0&&(s.animations=E),T.length>0&&(s.nodes=T)}return s.object=l,s;function f(p){const m=[];for(const h in p){const g=p[h];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}$n.DEFAULT_UP=new ce(0,1,0);$n.DEFAULT_MATRIX_AUTO_UPDATE=!0;$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Cc extends $n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ub={type:"move"};class Hd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ce,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ce),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ce,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ce,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,f=null;const p=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){f=!0;for(const U of e.hand.values()){const S=i.getJointPose(U,s),v=this._getHandJoint(h,U);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const g=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],x=g.position.distanceTo(_.position),E=.02,T=.005;h.inputState.pinching&&x>E+T?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&x<=E-T&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(Ub)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Cc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const Y_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ps={h:0,s:0,l:0},wc={h:0,s:0,l:0};function Gd(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class Lt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Bt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Bt.workingColorSpace){return this.r=e,this.g=i,this.b=s,Bt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Bt.workingColorSpace){if(e=_b(e,1),i=Ut(i,0,1),s=Ut(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Gd(f,c,e+1/3),this.g=Gd(f,c,e),this.b=Gd(f,c,e-1/3)}return Bt.colorSpaceToWorking(this,l),this}setStyle(e,i=Ni){function s(c){c!==void 0&&parseFloat(c)<1&&ht("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],p=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ht("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);ht("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Ni){const s=Y_[e.toLowerCase()];return s!==void 0?this.setHex(s,i):ht("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=La(e.r),this.g=La(e.g),this.b=La(e.b),this}copyLinearToSRGB(e){return this.r=$r(e.r),this.g=$r(e.g),this.b=$r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ni){return Bt.workingToColorSpace(Xn.copy(this),e),Math.round(Ut(Xn.r*255,0,255))*65536+Math.round(Ut(Xn.g*255,0,255))*256+Math.round(Ut(Xn.b*255,0,255))}getHexString(e=Ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Bt.workingColorSpace){Bt.workingToColorSpace(Xn.copy(this),i);const s=Xn.r,l=Xn.g,c=Xn.b,f=Math.max(s,l,c),p=Math.min(s,l,c);let m,h;const g=(p+f)/2;if(p===f)m=0,h=0;else{const _=f-p;switch(h=g<=.5?_/(f+p):_/(2-f-p),f){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return e.h=m,e.s=h,e.l=g,e}getRGB(e,i=Bt.workingColorSpace){return Bt.workingToColorSpace(Xn.copy(this),i),e.r=Xn.r,e.g=Xn.g,e.b=Xn.b,e}getStyle(e=Ni){Bt.workingToColorSpace(Xn.copy(this),e);const i=Xn.r,s=Xn.g,l=Xn.b;return e!==Ni?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(ps),this.setHSL(ps.h+e,ps.s+i,ps.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(ps),e.getHSL(wc);const s=Od(ps.h,wc.h,i),l=Od(ps.s,wc.s,i),c=Od(ps.l,wc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xn=new Lt;Lt.NAMES=Y_;class Lb extends $n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new er,this.environmentIntensity=1,this.environmentRotation=new er,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Vi=new ce,Ta=new ce,Vd=new ce,Aa=new ce,Ir=new ce,Br=new ce,Ix=new ce,kd=new ce,jd=new ce,Wd=new ce,Xd=new vn,Yd=new vn,qd=new vn;class ji{constructor(e=new ce,i=new ce,s=new ce){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Vi.subVectors(e,i),l.cross(Vi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Vi.subVectors(l,i),Ta.subVectors(s,i),Vd.subVectors(e,i);const f=Vi.dot(Vi),p=Vi.dot(Ta),m=Vi.dot(Vd),h=Ta.dot(Ta),g=Ta.dot(Vd),_=f*h-p*p;if(_===0)return c.set(0,0,0),null;const x=1/_,E=(h*m-p*g)*x,T=(f*g-p*m)*x;return c.set(1-E-T,T,E)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Aa)===null?!1:Aa.x>=0&&Aa.y>=0&&Aa.x+Aa.y<=1}static getInterpolation(e,i,s,l,c,f,p,m){return this.getBarycoord(e,i,s,l,Aa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Aa.x),m.addScaledVector(f,Aa.y),m.addScaledVector(p,Aa.z),m)}static getInterpolatedAttribute(e,i,s,l,c,f){return Xd.setScalar(0),Yd.setScalar(0),qd.setScalar(0),Xd.fromBufferAttribute(e,i),Yd.fromBufferAttribute(e,s),qd.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Xd,c.x),f.addScaledVector(Yd,c.y),f.addScaledVector(qd,c.z),f}static isFrontFacing(e,i,s,l){return Vi.subVectors(s,i),Ta.subVectors(e,i),Vi.cross(Ta).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vi.subVectors(this.c,this.b),Ta.subVectors(this.a,this.b),Vi.cross(Ta).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ji.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return ji.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return ji.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return ji.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ji.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let f,p;Ir.subVectors(l,s),Br.subVectors(c,s),kd.subVectors(e,s);const m=Ir.dot(kd),h=Br.dot(kd);if(m<=0&&h<=0)return i.copy(s);jd.subVectors(e,l);const g=Ir.dot(jd),_=Br.dot(jd);if(g>=0&&_<=g)return i.copy(l);const x=m*_-g*h;if(x<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(s).addScaledVector(Ir,f);Wd.subVectors(e,c);const E=Ir.dot(Wd),T=Br.dot(Wd);if(T>=0&&E<=T)return i.copy(c);const U=E*h-m*T;if(U<=0&&h>=0&&T<=0)return p=h/(h-T),i.copy(s).addScaledVector(Br,p);const S=g*T-E*_;if(S<=0&&_-g>=0&&E-T>=0)return Ix.subVectors(c,l),p=(_-g)/(_-g+(E-T)),i.copy(l).addScaledVector(Ix,p);const v=1/(S+U+x);return f=U*v,p=x*v,i.copy(s).addScaledVector(Ir,f).addScaledVector(Br,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class dl{constructor(e=new ce(1/0,1/0,1/0),i=new ce(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(ki.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(ki.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=ki.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,p=c.count;f<p;f++)e.isMesh===!0?e.getVertexPosition(f,ki):ki.fromBufferAttribute(c,f),ki.applyMatrix4(e.matrixWorld),this.expandByPoint(ki);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Dc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Dc.copy(s.boundingBox)),Dc.applyMatrix4(e.matrixWorld),this.union(Dc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ki),ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($o),Nc.subVectors(this.max,$o),Hr.subVectors(e.a,$o),Gr.subVectors(e.b,$o),Vr.subVectors(e.c,$o),ms.subVectors(Gr,Hr),gs.subVectors(Vr,Gr),ks.subVectors(Hr,Vr);let i=[0,-ms.z,ms.y,0,-gs.z,gs.y,0,-ks.z,ks.y,ms.z,0,-ms.x,gs.z,0,-gs.x,ks.z,0,-ks.x,-ms.y,ms.x,0,-gs.y,gs.x,0,-ks.y,ks.x,0];return!Zd(i,Hr,Gr,Vr,Nc)||(i=[1,0,0,0,1,0,0,0,1],!Zd(i,Hr,Gr,Vr,Nc))?!1:(Uc.crossVectors(ms,gs),i=[Uc.x,Uc.y,Uc.z],Zd(i,Hr,Gr,Vr,Nc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ra[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ra[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ra[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ra[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ra[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ra[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ra[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ra[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ra),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ra=[new ce,new ce,new ce,new ce,new ce,new ce,new ce,new ce],ki=new ce,Dc=new dl,Hr=new ce,Gr=new ce,Vr=new ce,ms=new ce,gs=new ce,ks=new ce,$o=new ce,Nc=new ce,Uc=new ce,js=new ce;function Zd(r,e,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){js.fromArray(r,c);const p=l.x*Math.abs(js.x)+l.y*Math.abs(js.y)+l.z*Math.abs(js.z),m=e.dot(js),h=i.dot(js),g=s.dot(js);if(Math.max(-Math.max(m,h,g),Math.min(m,h,g))>p)return!1}return!0}const An=new ce,Lc=new Rt;let Ob=0;class Oi extends Es{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ob++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=Ex,this.updateRanges=[],this.gpuType=ea,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Lc.fromBufferAttribute(this,i),Lc.applyMatrix3(e),this.setXY(i,Lc.x,Lc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)An.fromBufferAttribute(this,i),An.applyMatrix3(e),this.setXYZ(i,An.x,An.y,An.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)An.fromBufferAttribute(this,i),An.applyMatrix4(e),this.setXYZ(i,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)An.fromBufferAttribute(this,i),An.applyNormalMatrix(e),this.setXYZ(i,An.x,An.y,An.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)An.fromBufferAttribute(this,i),An.transformDirection(e),this.setXYZ(i,An.x,An.y,An.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Qo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=ri(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Qo(i,this.array)),i}setX(e,i){return this.normalized&&(i=ri(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Qo(i,this.array)),i}setY(e,i){return this.normalized&&(i=ri(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Qo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=ri(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Qo(i,this.array)),i}setW(e,i){return this.normalized&&(i=ri(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=ri(i,this.array),s=ri(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=ri(i,this.array),s=ri(s,this.array),l=ri(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=ri(i,this.array),s=ri(s,this.array),l=ri(l,this.array),c=ri(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ex&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class q_ extends Oi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class Z_ extends Oi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Si extends Oi{constructor(e,i,s){super(new Float32Array(e),i,s)}}const Pb=new dl,el=new ce,Kd=new ce;class gu{constructor(e=new ce,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):Pb.setFromPoints(e).getCenter(s);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;el.subVectors(e,this.center);const i=el.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(el,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(el.copy(e.center).add(Kd)),this.expandByPoint(el.copy(e.center).sub(Kd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Fb=0;const Di=new Rn,Qd=new $n,kr=new ce,vi=new dl,tl=new dl,Pn=new ce;class Pi extends Es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fb++}),this.uuid=fl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pb(e)?Z_:q_)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new _t().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Di.makeRotationFromQuaternion(e),this.applyMatrix4(Di),this}rotateX(e){return Di.makeRotationX(e),this.applyMatrix4(Di),this}rotateY(e){return Di.makeRotationY(e),this.applyMatrix4(Di),this}rotateZ(e){return Di.makeRotationZ(e),this.applyMatrix4(Di),this}translate(e,i,s){return Di.makeTranslation(e,i,s),this.applyMatrix4(Di),this}scale(e,i,s){return Di.makeScale(e,i,s),this.applyMatrix4(Di),this}lookAt(e){return Qd.lookAt(e),Qd.updateMatrix(),this.applyMatrix4(Qd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Si(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ce(-1/0,-1/0,-1/0),new ce(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];vi.setFromBufferAttribute(c),this.morphTargetsRelative?(Pn.addVectors(this.boundingBox.min,vi.min),this.boundingBox.expandByPoint(Pn),Pn.addVectors(this.boundingBox.max,vi.max),this.boundingBox.expandByPoint(Pn)):(this.boundingBox.expandByPoint(vi.min),this.boundingBox.expandByPoint(vi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gu);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ce,1/0);return}if(e){const s=this.boundingSphere.center;if(vi.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const p=i[c];tl.setFromBufferAttribute(p),this.morphTargetsRelative?(Pn.addVectors(vi.min,tl.min),vi.expandByPoint(Pn),Pn.addVectors(vi.max,tl.max),vi.expandByPoint(Pn)):(vi.expandByPoint(tl.min),vi.expandByPoint(tl.max))}vi.getCenter(s);let l=0;for(let c=0,f=e.count;c<f;c++)Pn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(Pn));if(i)for(let c=0,f=i.length;c<f;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,g=p.count;h<g;h++)Pn.fromBufferAttribute(p,h),m&&(kr.fromBufferAttribute(e,h),Pn.add(kr)),l=Math.max(l,s.distanceToSquared(Pn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oi(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),p=[],m=[];for(let D=0;D<s.count;D++)p[D]=new ce,m[D]=new ce;const h=new ce,g=new ce,_=new ce,x=new Rt,E=new Rt,T=new Rt,U=new ce,S=new ce;function v(D,k,J){h.fromBufferAttribute(s,D),g.fromBufferAttribute(s,k),_.fromBufferAttribute(s,J),x.fromBufferAttribute(c,D),E.fromBufferAttribute(c,k),T.fromBufferAttribute(c,J),g.sub(h),_.sub(h),E.sub(x),T.sub(x);const Y=1/(E.x*T.y-T.x*E.y);isFinite(Y)&&(U.copy(g).multiplyScalar(T.y).addScaledVector(_,-E.y).multiplyScalar(Y),S.copy(_).multiplyScalar(E.x).addScaledVector(g,-T.x).multiplyScalar(Y),p[D].add(U),p[k].add(U),p[J].add(U),m[D].add(S),m[k].add(S),m[J].add(S))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let D=0,k=P.length;D<k;++D){const J=P[D],Y=J.start,ae=J.count;for(let ee=Y,xe=Y+ae;ee<xe;ee+=3)v(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const V=new ce,B=new ce,Z=new ce,G=new ce;function j(D){Z.fromBufferAttribute(l,D),G.copy(Z);const k=p[D];V.copy(k),V.sub(Z.multiplyScalar(Z.dot(k))).normalize(),B.crossVectors(G,k);const Y=B.dot(m[D])<0?-1:1;f.setXYZW(D,V.x,V.y,V.z,Y)}for(let D=0,k=P.length;D<k;++D){const J=P[D],Y=J.start,ae=J.count;for(let ee=Y,xe=Y+ae;ee<xe;ee+=3)j(e.getX(ee+0)),j(e.getX(ee+1)),j(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Oi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,E=s.count;x<E;x++)s.setXYZ(x,0,0,0);const l=new ce,c=new ce,f=new ce,p=new ce,m=new ce,h=new ce,g=new ce,_=new ce;if(e)for(let x=0,E=e.count;x<E;x+=3){const T=e.getX(x+0),U=e.getX(x+1),S=e.getX(x+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,U),f.fromBufferAttribute(i,S),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),p.fromBufferAttribute(s,T),m.fromBufferAttribute(s,U),h.fromBufferAttribute(s,S),p.add(g),m.add(g),h.add(g),s.setXYZ(T,p.x,p.y,p.z),s.setXYZ(U,m.x,m.y,m.z),s.setXYZ(S,h.x,h.y,h.z)}else for(let x=0,E=i.count;x<E;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Pn.fromBufferAttribute(e,i),Pn.normalize(),e.setXYZ(i,Pn.x,Pn.y,Pn.z)}toNonIndexed(){function e(p,m){const h=p.array,g=p.itemSize,_=p.normalized,x=new h.constructor(m.length*g);let E=0,T=0;for(let U=0,S=m.length;U<S;U++){p.isInterleavedBufferAttribute?E=m[U]*p.data.stride+p.offset:E=m[U]*g;for(let v=0;v<g;v++)x[T++]=h[E++]}return new Oi(x,g,_)}if(this.index===null)return ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Pi,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=e(m,s);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let g=0,_=h.length;g<_;g++){const x=h[g],E=e(x,s);m.push(E)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let p=0,m=f.length;p<m;p++){const h=f[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const h=s[m];e.data.attributes[m]=h.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],g=[];for(let _=0,x=h.length;_<x;_++){const E=h[_];g.push(E.toJSON(e.data))}g.length>0&&(l[m]=g,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const h in l){const g=l[h];this.setAttribute(h,g.clone(i))}const c=e.morphAttributes;for(const h in c){const g=[],_=c[h];for(let x=0,E=_.length;x<E;x++)g.push(_[x].clone(i));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let h=0,g=f.length;h<g;h++){const _=f[h];this.addGroup(_.start,_.count,_.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let zb=0;class hl extends Es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zb++}),this.uuid=fl(),this.name="",this.type="Material",this.blending=Jr,this.side=bs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mh,this.blendDst=gh,this.blendEquation=Ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lr,this.stencilZFail=Lr,this.stencilZPass=Lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){ht(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ht(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Jr&&(s.blending=this.blending),this.side!==bs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==mh&&(s.blendSrc=this.blendSrc),this.blendDst!==gh&&(s.blendDst=this.blendDst),this.blendEquation!==Ys&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==eo&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mx&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Lr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Lr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Lr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const p in c){const m=c[p];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ca=new ce,Jd=new ce,Oc=new ce,xs=new ce,$d=new ce,Pc=new ce,eh=new ce;class _p{constructor(e=new ce,i=new ce(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ca)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ca.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ca.copy(this.origin).addScaledVector(this.direction,i),Ca.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Jd.copy(e).add(i).multiplyScalar(.5),Oc.copy(i).sub(e).normalize(),xs.copy(this.origin).sub(Jd);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Oc),p=xs.dot(this.direction),m=-xs.dot(Oc),h=xs.lengthSq(),g=Math.abs(1-f*f);let _,x,E,T;if(g>0)if(_=f*m-p,x=f*p-m,T=c*g,_>=0)if(x>=-T)if(x<=T){const U=1/g;_*=U,x*=U,E=_*(_+f*x+2*p)+x*(f*_+x+2*m)+h}else x=c,_=Math.max(0,-(f*x+p)),E=-_*_+x*(x+2*m)+h;else x=-c,_=Math.max(0,-(f*x+p)),E=-_*_+x*(x+2*m)+h;else x<=-T?(_=Math.max(0,-(-f*c+p)),x=_>0?-c:Math.min(Math.max(-c,-m),c),E=-_*_+x*(x+2*m)+h):x<=T?(_=0,x=Math.min(Math.max(-c,-m),c),E=x*(x+2*m)+h):(_=Math.max(0,-(f*c+p)),x=_>0?c:Math.min(Math.max(-c,-m),c),E=-_*_+x*(x+2*m)+h);else x=f>0?-c:c,_=Math.max(0,-(f*x+p)),E=-_*_+x*(x+2*m)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Jd).addScaledVector(Oc,x),E}intersectSphere(e,i){Ca.subVectors(e.center,this.origin);const s=Ca.dot(this.direction),l=Ca.dot(Ca)-s*s,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),p=s-f,m=s+f;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,f,p,m;const h=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return h>=0?(s=(e.min.x-x.x)*h,l=(e.max.x-x.x)*h):(s=(e.max.x-x.x)*h,l=(e.min.x-x.x)*h),g>=0?(c=(e.min.y-x.y)*g,f=(e.max.y-x.y)*g):(c=(e.max.y-x.y)*g,f=(e.min.y-x.y)*g),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),_>=0?(p=(e.min.z-x.z)*_,m=(e.max.z-x.z)*_):(p=(e.max.z-x.z)*_,m=(e.min.z-x.z)*_),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,Ca)!==null}intersectTriangle(e,i,s,l,c){$d.subVectors(i,e),Pc.subVectors(s,e),eh.crossVectors($d,Pc);let f=this.direction.dot(eh),p;if(f>0){if(l)return null;p=1}else if(f<0)p=-1,f=-f;else return null;xs.subVectors(this.origin,e);const m=p*this.direction.dot(Pc.crossVectors(xs,Pc));if(m<0)return null;const h=p*this.direction.dot($d.cross(xs));if(h<0||m+h>f)return null;const g=-p*xs.dot(eh);return g<0?null:this.at(g/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class K_ extends hl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new er,this.combine=C_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bx=new Rn,Ws=new _p,Fc=new gu,Hx=new ce,zc=new ce,Ic=new ce,Bc=new ce,th=new ce,Hc=new ce,Gx=new ce,Gc=new ce;class Fa extends $n{constructor(e=new Pi,i=new K_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){Hc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const g=p[m],_=c[m];g!==0&&(th.fromBufferAttribute(_,e),f?Hc.addScaledVector(th,g):Hc.addScaledVector(th.sub(i),g))}i.add(Hc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Fc.copy(s.boundingSphere),Fc.applyMatrix4(c),Ws.copy(e.ray).recast(e.near),!(Fc.containsPoint(Ws.origin)===!1&&(Ws.intersectSphere(Fc,Hx)===null||Ws.origin.distanceToSquared(Hx)>(e.far-e.near)**2))&&(Bx.copy(c).invert(),Ws.copy(e.ray).applyMatrix4(Bx),!(s.boundingBox!==null&&Ws.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Ws)))}_computeIntersections(e,i,s){let l;const c=this.geometry,f=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,x=c.groups,E=c.drawRange;if(p!==null)if(Array.isArray(f))for(let T=0,U=x.length;T<U;T++){const S=x[T],v=f[S.materialIndex],P=Math.max(S.start,E.start),V=Math.min(p.count,Math.min(S.start+S.count,E.start+E.count));for(let B=P,Z=V;B<Z;B+=3){const G=p.getX(B),j=p.getX(B+1),D=p.getX(B+2);l=Vc(this,v,e,s,h,g,_,G,j,D),l&&(l.faceIndex=Math.floor(B/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),U=Math.min(p.count,E.start+E.count);for(let S=T,v=U;S<v;S+=3){const P=p.getX(S),V=p.getX(S+1),B=p.getX(S+2);l=Vc(this,f,e,s,h,g,_,P,V,B),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let T=0,U=x.length;T<U;T++){const S=x[T],v=f[S.materialIndex],P=Math.max(S.start,E.start),V=Math.min(m.count,Math.min(S.start+S.count,E.start+E.count));for(let B=P,Z=V;B<Z;B+=3){const G=B,j=B+1,D=B+2;l=Vc(this,v,e,s,h,g,_,G,j,D),l&&(l.faceIndex=Math.floor(B/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),U=Math.min(m.count,E.start+E.count);for(let S=T,v=U;S<v;S+=3){const P=S,V=S+1,B=S+2;l=Vc(this,f,e,s,h,g,_,P,V,B),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function Ib(r,e,i,s,l,c,f,p){let m;if(e.side===li?m=s.intersectTriangle(f,c,l,!0,p):m=s.intersectTriangle(l,c,f,e.side===bs,p),m===null)return null;Gc.copy(p),Gc.applyMatrix4(r.matrixWorld);const h=i.ray.origin.distanceTo(Gc);return h<i.near||h>i.far?null:{distance:h,point:Gc.clone(),object:r}}function Vc(r,e,i,s,l,c,f,p,m,h){r.getVertexPosition(p,zc),r.getVertexPosition(m,Ic),r.getVertexPosition(h,Bc);const g=Ib(r,e,i,s,zc,Ic,Bc,Gx);if(g){const _=new ce;ji.getBarycoord(Gx,zc,Ic,Bc,_),l&&(g.uv=ji.getInterpolatedAttribute(l,p,m,h,_,new Rt)),c&&(g.uv1=ji.getInterpolatedAttribute(c,p,m,h,_,new Rt)),f&&(g.normal=ji.getInterpolatedAttribute(f,p,m,h,_,new ce),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:p,b:m,c:h,normal:new ce,materialIndex:0};ji.getNormal(zc,Ic,Bc,x.normal),g.face=x,g.barycoord=_}return g}class Bb extends Jn{constructor(e=null,i=1,s=1,l,c,f,p,m,h=Gn,g=Gn,_,x){super(null,f,p,m,h,g,l,c,_,x),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const nh=new ce,Hb=new ce,Gb=new _t;class vs{constructor(e=new ce(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=nh.subVectors(s,i).cross(Hb.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const l=e.delta(nh),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/c;return s===!0&&(f<0||f>1)?null:i.copy(e.start).addScaledVector(l,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||Gb.getNormalMatrix(e),l=this.coplanarPoint(nh).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xs=new gu,Vb=new Rt(.5,.5),kc=new ce;class Q_{constructor(e=new vs,i=new vs,s=new vs,l=new vs,c=new vs,f=new vs){this.planes=[e,i,s,l,c,f]}set(e,i,s,l,c,f){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(f),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=ta,s=!1){const l=this.planes,c=e.elements,f=c[0],p=c[1],m=c[2],h=c[3],g=c[4],_=c[5],x=c[6],E=c[7],T=c[8],U=c[9],S=c[10],v=c[11],P=c[12],V=c[13],B=c[14],Z=c[15];if(l[0].setComponents(h-f,E-g,v-T,Z-P).normalize(),l[1].setComponents(h+f,E+g,v+T,Z+P).normalize(),l[2].setComponents(h+p,E+_,v+U,Z+V).normalize(),l[3].setComponents(h-p,E-_,v-U,Z-V).normalize(),s)l[4].setComponents(m,x,S,B).normalize(),l[5].setComponents(h-m,E-x,v-S,Z-B).normalize();else if(l[4].setComponents(h-m,E-x,v-S,Z-B).normalize(),i===ta)l[5].setComponents(h+m,E+x,v+S,Z+B).normalize();else if(i===uu)l[5].setComponents(m,x,S,B).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Xs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xs)}intersectsSprite(e){Xs.center.set(0,0,0);const i=Vb.distanceTo(e.center);return Xs.radius=.7071067811865476+i,Xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xs)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(kc.x=l.normal.x>0?e.max.x:e.min.x,kc.y=l.normal.y>0?e.max.y:e.min.y,kc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(kc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vp extends hl{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const du=new ce,hu=new ce,Vx=new Rn,nl=new _p,jc=new gu,ih=new ce,kx=new ce;class kb extends $n{constructor(e=new Pi,i=new vp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)du.fromBufferAttribute(i,l-1),hu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=du.distanceTo(hu);e.setAttribute("lineDistance",new Si(s,1))}else ht("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),jc.copy(s.boundingSphere),jc.applyMatrix4(l),jc.radius+=c,e.ray.intersectsSphere(jc)===!1)return;Vx.copy(l).invert(),nl.copy(e.ray).applyMatrix4(Vx);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=this.isLineSegments?2:1,g=s.index,x=s.attributes.position;if(g!==null){const E=Math.max(0,f.start),T=Math.min(g.count,f.start+f.count);for(let U=E,S=T-1;U<S;U+=h){const v=g.getX(U),P=g.getX(U+1),V=Wc(this,e,nl,m,v,P,U);V&&i.push(V)}if(this.isLineLoop){const U=g.getX(T-1),S=g.getX(E),v=Wc(this,e,nl,m,U,S,T-1);v&&i.push(v)}}else{const E=Math.max(0,f.start),T=Math.min(x.count,f.start+f.count);for(let U=E,S=T-1;U<S;U+=h){const v=Wc(this,e,nl,m,U,U+1,U);v&&i.push(v)}if(this.isLineLoop){const U=Wc(this,e,nl,m,T-1,E,T-1);U&&i.push(U)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function Wc(r,e,i,s,l,c,f){const p=r.geometry.attributes.position;if(du.fromBufferAttribute(p,l),hu.fromBufferAttribute(p,c),i.distanceSqToSegment(du,hu,ih,kx)>s)return;ih.applyMatrix4(r.matrixWorld);const h=e.ray.origin.distanceTo(ih);if(!(h<e.near||h>e.far))return{distance:h,point:kx.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}const jx=new ce,Wx=new ce;class J_ extends kb{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)jx.fromBufferAttribute(i,l),Wx.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+jx.distanceTo(Wx);e.setAttribute("lineDistance",new Si(s,1))}else ht("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $_ extends Jn{constructor(e=[],i=Js,s,l,c,f,p,m,h,g){super(e,i,s,l,c,f,p,m,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class no extends Jn{constructor(e,i,s=aa,l,c,f,p=Gn,m=Gn,h,g=Pa,_=1){if(g!==Pa&&g!==Qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:_};super(x,l,c,f,p,m,g,s,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new xp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class jb extends no{constructor(e,i=aa,s=Js,l,c,f=Gn,p=Gn,m,h=Pa){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,i,s,l,c,f,p,m,h),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ev extends Jn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class pl extends Pi{constructor(e=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const p=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],h=[],g=[],_=[];let x=0,E=0;T("z","y","x",-1,-1,s,i,e,f,c,0),T("z","y","x",1,-1,s,i,-e,f,c,1),T("x","z","y",1,1,e,s,i,l,f,2),T("x","z","y",1,-1,e,s,-i,l,f,3),T("x","y","z",1,-1,e,i,s,l,c,4),T("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Si(h,3)),this.setAttribute("normal",new Si(g,3)),this.setAttribute("uv",new Si(_,2));function T(U,S,v,P,V,B,Z,G,j,D,k){const J=B/j,Y=Z/D,ae=B/2,ee=Z/2,xe=G/2,X=j+1,N=D+1;let I=0,R=0;const w=new ce;for(let F=0;F<N;F++){const b=F*Y-ee;for(let M=0;M<X;M++){const H=M*J-ae;w[U]=H*P,w[S]=b*V,w[v]=xe,h.push(w.x,w.y,w.z),w[U]=0,w[S]=0,w[v]=G>0?1:-1,g.push(w.x,w.y,w.z),_.push(M/j),_.push(1-F/D),I+=1}}for(let F=0;F<D;F++)for(let b=0;b<j;b++){const M=x+b+X*F,H=x+b+X*(F+1),W=x+(b+1)+X*(F+1),K=x+(b+1)+X*F;m.push(M,H,K),m.push(H,W,K),R+=6}p.addGroup(E,R,k),E+=R,x+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class xu extends Pi{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,f=i/2,p=Math.floor(s),m=Math.floor(l),h=p+1,g=m+1,_=e/p,x=i/m,E=[],T=[],U=[],S=[];for(let v=0;v<g;v++){const P=v*x-f;for(let V=0;V<h;V++){const B=V*_-c;T.push(B,-P,0),U.push(0,0,1),S.push(V/p),S.push(1-v/m)}}for(let v=0;v<m;v++)for(let P=0;P<p;P++){const V=P+h*v,B=P+h*(v+1),Z=P+1+h*(v+1),G=P+1+h*v;E.push(V,B,G),E.push(B,Z,G)}this.setIndex(E),this.setAttribute("position",new Si(T,3)),this.setAttribute("normal",new Si(U,3)),this.setAttribute("uv",new Si(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xu(e.width,e.height,e.widthSegments,e.heightSegments)}}function io(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];if(Xx(l))l.isRenderTargetTexture?(ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone();else if(Array.isArray(l))if(Xx(l[0])){const c=[];for(let f=0,p=l.length;f<p;f++)c[f]=l[f].clone();e[i][s]=c}else e[i][s]=l.slice();else e[i][s]=l}}return e}function Qn(r){const e={};for(let i=0;i<r.length;i++){const s=io(r[i]);for(const l in s)e[l]=s[l]}return e}function Xx(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Wb(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function tv(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Bt.workingColorSpace}const Xb={clone:io,merge:Qn};var Yb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sa extends hl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yb,this.fragmentShader=qb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=io(e.uniforms),this.uniformsGroups=Wb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Zb extends sa{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Kb extends hl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Qb extends hl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Jb extends $n{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Xc=new ce,Yc=new Ms,Qi=new ce;class nv extends $n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rn,this.projectionMatrix=new Rn,this.projectionMatrixInverse=new Rn,this.coordinateSystem=ta,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Xc,Yc,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xc,Yc,Qi.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(Xc,Yc,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xc,Yc,Qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const _s=new ce,Yx=new Rt,qx=new Rt;class Ui extends nv{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=ip*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(iu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ip*2*Math.atan(Math.tan(iu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){_s.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_s.x,_s.y).multiplyScalar(-e/_s.z),_s.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(_s.x,_s.y).multiplyScalar(-e/_s.z)}getViewSize(e,i){return this.getViewBounds(e,Yx,qx),i.subVectors(qx,Yx)}setViewOffset(e,i,s,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(iu*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,h=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/h,l*=f.width/m,s*=f.height/h}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class iv extends nv{constructor(e=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,f=s+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,f=c+h*this.view.width,p-=g*this.view.offsetY,m=p-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class $b extends Jb{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const jr=-90,Wr=1;class eM extends $n{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ui(jr,Wr,e,i);l.layers=this.layers,this.add(l);const c=new Ui(jr,Wr,e,i);c.layers=this.layers,this.add(c);const f=new Ui(jr,Wr,e,i);f.layers=this.layers,this.add(f);const p=new Ui(jr,Wr,e,i);p.layers=this.layers,this.add(p);const m=new Ui(jr,Wr,e,i);m.layers=this.layers,this.add(m);const h=new Ui(jr,Wr,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,p,m]=i;for(const h of i)this.remove(h);if(e===ta)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===uu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,p,m,h,g]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const U=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(s,2,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,3,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),s.texture.generateMipmaps=U,e.setRenderTarget(s,5,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,g),e.setRenderTarget(_,x,E),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class tM extends Ui{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Zx{constructor(e=1,i=0,s=0){this.radius=e,this.phi=i,this.theta=s}set(e,i,s){return this.radius=e,this.phi=i,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ut(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,s){return this.radius=Math.sqrt(e*e+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(Ut(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Cp=class Cp{constructor(e,i,s,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=s,c[3]=l,this}};Cp.prototype.isMatrix2=!0;let Kx=Cp;class nM extends J_{constructor(e=10,i=10,s=4473924,l=8947848){s=new Lt(s),l=new Lt(l);const c=i/2,f=e/i,p=e/2,m=[],h=[];for(let x=0,E=0,T=-p;x<=i;x++,T+=f){m.push(-p,0,T,p,0,T),m.push(T,0,-p,T,0,p);const U=x===c?s:l;U.toArray(h,E),E+=3,U.toArray(h,E),E+=3,U.toArray(h,E),E+=3,U.toArray(h,E),E+=3}const g=new Pi;g.setAttribute("position",new Si(m,3)),g.setAttribute("color",new Si(h,3));const _=new vp({vertexColors:!0,toneMapped:!1});super(g,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class iM extends Es{constructor(e,i=null){super(),this.object=e,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){ht("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Qx(r,e,i,s){const l=aM(s);switch(i){case G_:return r*e;case k_:return r*e/l.components*l.byteLength;case dp:return r*e/l.components*l.byteLength;case $s:return r*e*2/l.components*l.byteLength;case hp:return r*e*2/l.components*l.byteLength;case V_:return r*e*3/l.components*l.byteLength;case Wi:return r*e*4/l.components*l.byteLength;case pp:return r*e*4/l.components*l.byteLength;case $c:case eu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case tu:case nu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Rh:case wh:return Math.max(r,16)*Math.max(e,8)/4;case Ah:case Ch:return Math.max(r,8)*Math.max(e,8)/2;case Dh:case Nh:case Lh:case Oh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Uh:case ru:case Ph:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Fh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case zh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Ih:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Gh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Vh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case kh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case jh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Wh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Xh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Yh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case qh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Zh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Kh:case Qh:case Jh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case $h:case ep:return Math.ceil(r/4)*Math.ceil(e/4)*8;case ou:case tp:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function aM(r){switch(r){case Li:case z_:return{byteLength:1,components:1};case cl:case I_:case Oa:return{byteLength:2,components:1};case up:case fp:return{byteLength:2,components:4};case aa:case cp:case ea:return{byteLength:4,components:1};case B_:case H_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lp}}));typeof window<"u"&&(window.__THREE__?ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function av(){let r=null,e=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function sM(r){const e=new WeakMap;function i(p,m){const h=p.array,g=p.usage,_=h.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,h,g),p.onUploadCallback();let E;if(h instanceof Float32Array)E=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)E=r.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?E=r.HALF_FLOAT:E=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)E=r.SHORT;else if(h instanceof Uint32Array)E=r.UNSIGNED_INT;else if(h instanceof Int32Array)E=r.INT;else if(h instanceof Int8Array)E=r.BYTE;else if(h instanceof Uint8Array)E=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)E=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:x,type:E,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:_}}function s(p,m,h){const g=m.array,_=m.updateRanges;if(r.bindBuffer(h,p),_.length===0)r.bufferSubData(h,0,g);else{_.sort((E,T)=>E.start-T.start);let x=0;for(let E=1;E<_.length;E++){const T=_[x],U=_[E];U.start<=T.start+T.count+1?T.count=Math.max(T.count,U.start+U.count-T.start):(++x,_[x]=U)}_.length=x+1;for(let E=0,T=_.length;E<T;E++){const U=_[E];r.bufferSubData(h,U.start*g.BYTES_PER_ELEMENT,g,U.start,U.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(r.deleteBuffer(m.buffer),e.delete(p))}function f(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const g=e.get(p);(!g||g.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=e.get(p);if(h===void 0)e.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:f}}var rM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,oM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,mM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_M=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,SM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,bM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,MM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,EM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,TM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,AM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,RM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,CM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,wM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,DM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,NM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,UM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,LM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,OM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,PM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,FM="gl_FragColor = linearToOutputTexel( gl_FragColor );",zM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,IM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,BM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,HM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,GM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,VM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,WM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,XM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,YM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ZM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,KM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,QM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,JM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$M=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,aE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,oE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lE=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,cE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_E=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,SE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ME=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,EE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,TE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,AE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,DE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,NE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,UE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,LE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,OE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,PE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,FE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,IE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,BE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,HE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,GE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,VE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,kE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,WE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,XE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,YE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ZE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,KE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,QE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,JE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$E=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,e1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,t1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,n1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,i1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,a1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,s1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const r1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,o1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,h1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,p1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,m1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,g1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,x1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,v1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,y1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,S1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,T1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,R1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,C1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,w1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,N1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,P1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,F1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,I1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,B1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Tt={alphahash_fragment:rM,alphahash_pars_fragment:oM,alphamap_fragment:lM,alphamap_pars_fragment:cM,alphatest_fragment:uM,alphatest_pars_fragment:fM,aomap_fragment:dM,aomap_pars_fragment:hM,batching_pars_vertex:pM,batching_vertex:mM,begin_vertex:gM,beginnormal_vertex:xM,bsdfs:_M,iridescence_fragment:vM,bumpmap_pars_fragment:yM,clipping_planes_fragment:SM,clipping_planes_pars_fragment:bM,clipping_planes_pars_vertex:MM,clipping_planes_vertex:EM,color_fragment:TM,color_pars_fragment:AM,color_pars_vertex:RM,color_vertex:CM,common:wM,cube_uv_reflection_fragment:DM,defaultnormal_vertex:NM,displacementmap_pars_vertex:UM,displacementmap_vertex:LM,emissivemap_fragment:OM,emissivemap_pars_fragment:PM,colorspace_fragment:FM,colorspace_pars_fragment:zM,envmap_fragment:IM,envmap_common_pars_fragment:BM,envmap_pars_fragment:HM,envmap_pars_vertex:GM,envmap_physical_pars_fragment:JM,envmap_vertex:VM,fog_vertex:kM,fog_pars_vertex:jM,fog_fragment:WM,fog_pars_fragment:XM,gradientmap_pars_fragment:YM,lightmap_pars_fragment:qM,lights_lambert_fragment:ZM,lights_lambert_pars_fragment:KM,lights_pars_begin:QM,lights_toon_fragment:$M,lights_toon_pars_fragment:eE,lights_phong_fragment:tE,lights_phong_pars_fragment:nE,lights_physical_fragment:iE,lights_physical_pars_fragment:aE,lights_fragment_begin:sE,lights_fragment_maps:rE,lights_fragment_end:oE,lightprobes_pars_fragment:lE,logdepthbuf_fragment:cE,logdepthbuf_pars_fragment:uE,logdepthbuf_pars_vertex:fE,logdepthbuf_vertex:dE,map_fragment:hE,map_pars_fragment:pE,map_particle_fragment:mE,map_particle_pars_fragment:gE,metalnessmap_fragment:xE,metalnessmap_pars_fragment:_E,morphinstance_vertex:vE,morphcolor_vertex:yE,morphnormal_vertex:SE,morphtarget_pars_vertex:bE,morphtarget_vertex:ME,normal_fragment_begin:EE,normal_fragment_maps:TE,normal_pars_fragment:AE,normal_pars_vertex:RE,normal_vertex:CE,normalmap_pars_fragment:wE,clearcoat_normal_fragment_begin:DE,clearcoat_normal_fragment_maps:NE,clearcoat_pars_fragment:UE,iridescence_pars_fragment:LE,opaque_fragment:OE,packing:PE,premultiplied_alpha_fragment:FE,project_vertex:zE,dithering_fragment:IE,dithering_pars_fragment:BE,roughnessmap_fragment:HE,roughnessmap_pars_fragment:GE,shadowmap_pars_fragment:VE,shadowmap_pars_vertex:kE,shadowmap_vertex:jE,shadowmask_pars_fragment:WE,skinbase_vertex:XE,skinning_pars_vertex:YE,skinning_vertex:qE,skinnormal_vertex:ZE,specularmap_fragment:KE,specularmap_pars_fragment:QE,tonemapping_fragment:JE,tonemapping_pars_fragment:$E,transmission_fragment:e1,transmission_pars_fragment:t1,uv_pars_fragment:n1,uv_pars_vertex:i1,uv_vertex:a1,worldpos_vertex:s1,background_vert:r1,background_frag:o1,backgroundCube_vert:l1,backgroundCube_frag:c1,cube_vert:u1,cube_frag:f1,depth_vert:d1,depth_frag:h1,distance_vert:p1,distance_frag:m1,equirect_vert:g1,equirect_frag:x1,linedashed_vert:_1,linedashed_frag:v1,meshbasic_vert:y1,meshbasic_frag:S1,meshlambert_vert:b1,meshlambert_frag:M1,meshmatcap_vert:E1,meshmatcap_frag:T1,meshnormal_vert:A1,meshnormal_frag:R1,meshphong_vert:C1,meshphong_frag:w1,meshphysical_vert:D1,meshphysical_frag:N1,meshtoon_vert:U1,meshtoon_frag:L1,points_vert:O1,points_frag:P1,shadow_vert:F1,shadow_frag:z1,sprite_vert:I1,sprite_frag:B1},qe={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _t}},envmap:{envMap:{value:null},envMapRotation:{value:new _t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _t},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ce},probesMax:{value:new ce},probesResolution:{value:new ce}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}}},$i={basic:{uniforms:Qn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:Qn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new Lt(0)},envMapIntensity:{value:1}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:Qn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:Qn([qe.common,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.roughnessmap,qe.metalnessmap,qe.fog,qe.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:Qn([qe.common,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.gradientmap,qe.fog,qe.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:Qn([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:Qn([qe.points,qe.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:Qn([qe.common,qe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:Qn([qe.common,qe.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:Qn([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:Qn([qe.sprite,qe.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _t}},vertexShader:Tt.backgroundCube_vert,fragmentShader:Tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distance:{uniforms:Qn([qe.common,qe.displacementmap,{referencePosition:{value:new ce},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distance_vert,fragmentShader:Tt.distance_frag},shadow:{uniforms:Qn([qe.lights,qe.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};$i.physical={uniforms:Qn([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _t},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _t},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _t},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _t},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _t},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _t}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};const qc={r:0,b:0,g:0},H1=new Rn,sv=new _t;sv.set(-1,0,0,0,1,0,0,0,1);function G1(r,e,i,s,l,c){const f=new Lt(0);let p=l===!0?0:1,m,h,g=null,_=0,x=null;function E(P){let V=P.isScene===!0?P.background:null;if(V&&V.isTexture){const B=P.backgroundBlurriness>0;V=e.get(V,B)}return V}function T(P){let V=!1;const B=E(P);B===null?S(f,p):B&&B.isColor&&(S(B,1),V=!0);const Z=r.xr.getEnvironmentBlendMode();Z==="additive"?i.buffers.color.setClear(0,0,0,1,c):Z==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||V)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function U(P,V){const B=E(V);B&&(B.isCubeTexture||B.mapping===mu)?(h===void 0&&(h=new Fa(new pl(1,1,1),new sa({name:"BackgroundCubeMaterial",uniforms:io($i.backgroundCube.uniforms),vertexShader:$i.backgroundCube.vertexShader,fragmentShader:$i.backgroundCube.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(Z,G,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=B,h.material.uniforms.backgroundBlurriness.value=V.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=V.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(H1.makeRotationFromEuler(V.backgroundRotation)).transpose(),B.isCubeTexture&&B.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(sv),h.material.toneMapped=Bt.getTransfer(B.colorSpace)!==en,(g!==B||_!==B.version||x!==r.toneMapping)&&(h.material.needsUpdate=!0,g=B,_=B.version,x=r.toneMapping),h.layers.enableAll(),P.unshift(h,h.geometry,h.material,0,0,null)):B&&B.isTexture&&(m===void 0&&(m=new Fa(new xu(2,2),new sa({name:"BackgroundMaterial",uniforms:io($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:bs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=B,m.material.uniforms.backgroundIntensity.value=V.backgroundIntensity,m.material.toneMapped=Bt.getTransfer(B.colorSpace)!==en,B.matrixAutoUpdate===!0&&B.updateMatrix(),m.material.uniforms.uvTransform.value.copy(B.matrix),(g!==B||_!==B.version||x!==r.toneMapping)&&(m.material.needsUpdate=!0,g=B,_=B.version,x=r.toneMapping),m.layers.enableAll(),P.unshift(m,m.geometry,m.material,0,0,null))}function S(P,V){P.getRGB(qc,tv(r)),i.buffers.color.setClear(qc.r,qc.g,qc.b,V,c)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(P,V=1){f.set(P),p=V,S(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(P){p=P,S(f,p)},render:T,addToRenderList:U,dispose:v}}function V1(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,f=!1;function p(Y,ae,ee,xe,X){let N=!1;const I=_(Y,xe,ee,ae);c!==I&&(c=I,h(c.object)),N=E(Y,xe,ee,X),N&&T(Y,xe,ee,X),X!==null&&e.update(X,r.ELEMENT_ARRAY_BUFFER),(N||f)&&(f=!1,B(Y,ae,ee,xe),X!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function m(){return r.createVertexArray()}function h(Y){return r.bindVertexArray(Y)}function g(Y){return r.deleteVertexArray(Y)}function _(Y,ae,ee,xe){const X=xe.wireframe===!0;let N=s[ae.id];N===void 0&&(N={},s[ae.id]=N);const I=Y.isInstancedMesh===!0?Y.id:0;let R=N[I];R===void 0&&(R={},N[I]=R);let w=R[ee.id];w===void 0&&(w={},R[ee.id]=w);let F=w[X];return F===void 0&&(F=x(m()),w[X]=F),F}function x(Y){const ae=[],ee=[],xe=[];for(let X=0;X<i;X++)ae[X]=0,ee[X]=0,xe[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ae,enabledAttributes:ee,attributeDivisors:xe,object:Y,attributes:{},index:null}}function E(Y,ae,ee,xe){const X=c.attributes,N=ae.attributes;let I=0;const R=ee.getAttributes();for(const w in R)if(R[w].location>=0){const b=X[w];let M=N[w];if(M===void 0&&(w==="instanceMatrix"&&Y.instanceMatrix&&(M=Y.instanceMatrix),w==="instanceColor"&&Y.instanceColor&&(M=Y.instanceColor)),b===void 0||b.attribute!==M||M&&b.data!==M.data)return!0;I++}return c.attributesNum!==I||c.index!==xe}function T(Y,ae,ee,xe){const X={},N=ae.attributes;let I=0;const R=ee.getAttributes();for(const w in R)if(R[w].location>=0){let b=N[w];b===void 0&&(w==="instanceMatrix"&&Y.instanceMatrix&&(b=Y.instanceMatrix),w==="instanceColor"&&Y.instanceColor&&(b=Y.instanceColor));const M={};M.attribute=b,b&&b.data&&(M.data=b.data),X[w]=M,I++}c.attributes=X,c.attributesNum=I,c.index=xe}function U(){const Y=c.newAttributes;for(let ae=0,ee=Y.length;ae<ee;ae++)Y[ae]=0}function S(Y){v(Y,0)}function v(Y,ae){const ee=c.newAttributes,xe=c.enabledAttributes,X=c.attributeDivisors;ee[Y]=1,xe[Y]===0&&(r.enableVertexAttribArray(Y),xe[Y]=1),X[Y]!==ae&&(r.vertexAttribDivisor(Y,ae),X[Y]=ae)}function P(){const Y=c.newAttributes,ae=c.enabledAttributes;for(let ee=0,xe=ae.length;ee<xe;ee++)ae[ee]!==Y[ee]&&(r.disableVertexAttribArray(ee),ae[ee]=0)}function V(Y,ae,ee,xe,X,N,I){I===!0?r.vertexAttribIPointer(Y,ae,ee,X,N):r.vertexAttribPointer(Y,ae,ee,xe,X,N)}function B(Y,ae,ee,xe){U();const X=xe.attributes,N=ee.getAttributes(),I=ae.defaultAttributeValues;for(const R in N){const w=N[R];if(w.location>=0){let F=X[R];if(F===void 0&&(R==="instanceMatrix"&&Y.instanceMatrix&&(F=Y.instanceMatrix),R==="instanceColor"&&Y.instanceColor&&(F=Y.instanceColor)),F!==void 0){const b=F.normalized,M=F.itemSize,H=e.get(F);if(H===void 0)continue;const W=H.buffer,K=H.type,q=H.bytesPerElement,se=K===r.INT||K===r.UNSIGNED_INT||F.gpuType===cp;if(F.isInterleavedBufferAttribute){const _e=F.data,ve=_e.stride,Oe=F.offset;if(_e.isInstancedInterleavedBuffer){for(let be=0;be<w.locationSize;be++)v(w.location+be,_e.meshPerAttribute);Y.isInstancedMesh!==!0&&xe._maxInstanceCount===void 0&&(xe._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let be=0;be<w.locationSize;be++)S(w.location+be);r.bindBuffer(r.ARRAY_BUFFER,W);for(let be=0;be<w.locationSize;be++)V(w.location+be,M/w.locationSize,K,b,ve*q,(Oe+M/w.locationSize*be)*q,se)}else{if(F.isInstancedBufferAttribute){for(let _e=0;_e<w.locationSize;_e++)v(w.location+_e,F.meshPerAttribute);Y.isInstancedMesh!==!0&&xe._maxInstanceCount===void 0&&(xe._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let _e=0;_e<w.locationSize;_e++)S(w.location+_e);r.bindBuffer(r.ARRAY_BUFFER,W);for(let _e=0;_e<w.locationSize;_e++)V(w.location+_e,M/w.locationSize,K,b,M*q,M/w.locationSize*_e*q,se)}}else if(I!==void 0){const b=I[R];if(b!==void 0)switch(b.length){case 2:r.vertexAttrib2fv(w.location,b);break;case 3:r.vertexAttrib3fv(w.location,b);break;case 4:r.vertexAttrib4fv(w.location,b);break;default:r.vertexAttrib1fv(w.location,b)}}}}P()}function Z(){k();for(const Y in s){const ae=s[Y];for(const ee in ae){const xe=ae[ee];for(const X in xe){const N=xe[X];for(const I in N)g(N[I].object),delete N[I];delete xe[X]}}delete s[Y]}}function G(Y){if(s[Y.id]===void 0)return;const ae=s[Y.id];for(const ee in ae){const xe=ae[ee];for(const X in xe){const N=xe[X];for(const I in N)g(N[I].object),delete N[I];delete xe[X]}}delete s[Y.id]}function j(Y){for(const ae in s){const ee=s[ae];for(const xe in ee){const X=ee[xe];if(X[Y.id]===void 0)continue;const N=X[Y.id];for(const I in N)g(N[I].object),delete N[I];delete X[Y.id]}}}function D(Y){for(const ae in s){const ee=s[ae],xe=Y.isInstancedMesh===!0?Y.id:0,X=ee[xe];if(X!==void 0){for(const N in X){const I=X[N];for(const R in I)g(I[R].object),delete I[R];delete X[N]}delete ee[xe],Object.keys(ee).length===0&&delete s[ae]}}}function k(){J(),f=!0,c!==l&&(c=l,h(c.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:k,resetDefaultState:J,dispose:Z,releaseStatesOfGeometry:G,releaseStatesOfObject:D,releaseStatesOfProgram:j,initAttributes:U,enableAttribute:S,disableUnusedAttributes:P}}function k1(r,e,i){let s;function l(m){s=m}function c(m,h){r.drawArrays(s,m,h),i.update(h,s,1)}function f(m,h,g){g!==0&&(r.drawArraysInstanced(s,m,h,g),i.update(h,s,g))}function p(m,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,h,0,g);let x=0;for(let E=0;E<g;E++)x+=h[E];i.update(x,s,1)}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=p}function j1(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const j=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(j.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(j){return!(j!==Wi&&s.convert(j)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(j){const D=j===Oa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(j!==Li&&s.convert(j)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&j!==ea&&!D)}function m(j){if(j==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";j="mediump"}return j==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const g=m(h);g!==h&&(ht("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const _=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&x===!1&&ht("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const E=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),U=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),P=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),V=r.getParameter(r.MAX_VARYING_VECTORS),B=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),Z=r.getParameter(r.MAX_SAMPLES),G=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:E,maxVertexTextures:T,maxTextureSize:U,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:P,maxVaryings:V,maxFragmentUniforms:B,maxSamples:Z,samples:G}}function W1(r){const e=this;let i=null,s=0,l=!1,c=!1;const f=new vs,p=new _t,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const E=_.length!==0||x||s!==0||l;return l=x,s=_.length,E},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){i=g(_,x,0)},this.setState=function(_,x,E){const T=_.clippingPlanes,U=_.clipIntersection,S=_.clipShadows,v=r.get(_);if(!l||T===null||T.length===0||c&&!S)c?g(null):h();else{const P=c?0:s,V=P*4;let B=v.clippingState||null;m.value=B,B=g(T,x,V,E);for(let Z=0;Z!==V;++Z)B[Z]=i[Z];v.clippingState=B,this.numIntersection=U?this.numPlanes:0,this.numPlanes+=P}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(_,x,E,T){const U=_!==null?_.length:0;let S=null;if(U!==0){if(S=m.value,T!==!0||S===null){const v=E+U*4,P=x.matrixWorldInverse;p.getNormalMatrix(P),(S===null||S.length<v)&&(S=new Float32Array(v));for(let V=0,B=E;V!==U;++V,B+=4)f.copy(_[V]).applyMatrix4(P,p),f.normal.toArray(S,B),S[B+3]=f.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=U,e.numIntersection=0,S}}const Ss=4,Jx=[.125,.215,.35,.446,.526,.582],qs=20,X1=256,il=new iv,$x=new Lt;let ah=null,sh=0,rh=0,oh=!1;const Y1=new ce;class e_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:f=256,position:p=Y1}=c;ah=this._renderer.getRenderTarget(),sh=this._renderer.getActiveCubeFace(),rh=this._renderer.getActiveMipmapLevel(),oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=i_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=n_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ah,sh,rh),this._renderer.xr.enabled=oh,e.scissorTest=!1,Xr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Js||e.mapping===to?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ah=this._renderer.getRenderTarget(),sh=this._renderer.getActiveCubeFace(),rh=this._renderer.getActiveMipmapLevel(),oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:Oa,format:Wi,colorSpace:lu,depthBuffer:!1},l=t_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=t_(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=q1(c)),this._blurMaterial=K1(c,e,i),this._ggxMaterial=Z1(c,e,i)}return l}_compileMaterial(e){const i=new Fa(new Pi,e);this._renderer.compile(i,il)}_sceneToCubeUV(e,i,s,l,c){const m=new Ui(90,1,i,s),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,E=_.toneMapping;_.getClearColor($x),_.toneMapping=na,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fa(new pl,new K_({name:"PMREM.Background",side:li,depthWrite:!1,depthTest:!1})));const U=this._backgroundBox,S=U.material;let v=!1;const P=e.background;P?P.isColor&&(S.color.copy(P),e.background=null,v=!0):(S.color.copy($x),v=!0);for(let V=0;V<6;V++){const B=V%3;B===0?(m.up.set(0,h[V],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[V],c.y,c.z)):B===1?(m.up.set(0,0,h[V]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[V],c.z)):(m.up.set(0,h[V],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[V]));const Z=this._cubeSize;Xr(l,B*Z,V>2?Z:0,Z,Z),_.setRenderTarget(l),v&&_.render(U,m),_.render(e,m)}_.toneMapping=E,_.autoClear=x,e.background=P}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Js||e.mapping===to;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=i_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=n_());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;Xr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,il)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,p=this._lodMeshes[s];p.material=f;const m=f.uniforms,h=s/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),_=Math.sqrt(h*h-g*g),x=0+h*1.25,E=_*x,{_lodMax:T}=this,U=this._sizeLods[s],S=3*U*(s>T-Ss?s-T+Ss:0),v=4*(this._cubeSize-U);m.envMap.value=e.texture,m.roughness.value=E,m.mipInt.value=T-i,Xr(c,S,v,3*U,2*U),l.setRenderTarget(c),l.render(p,il),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-s,Xr(e,S,v,3*U,2*U),l.setRenderTarget(e),l.render(p,il)}_blur(e,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,s,l,"latitudinal",c),this._halfBlur(f,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,f,p){const m=this._renderer,h=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Ht("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[l];_.material=h;const x=h.uniforms,E=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*qs-1),U=c/T,S=isFinite(c)?1+Math.floor(g*U):qs;S>qs&&ht(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${qs}`);const v=[];let P=0;for(let j=0;j<qs;++j){const D=j/U,k=Math.exp(-D*D/2);v.push(k),j===0?P+=k:j<S&&(P+=2*k)}for(let j=0;j<v.length;j++)v[j]=v[j]/P;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=v,x.latitudinal.value=f==="latitudinal",p&&(x.poleAxis.value=p);const{_lodMax:V}=this;x.dTheta.value=T,x.mipInt.value=V-s;const B=this._sizeLods[l],Z=3*B*(l>V-Ss?l-V+Ss:0),G=4*(this._cubeSize-B);Xr(i,Z,G,3*B,2*B),m.setRenderTarget(i),m.render(_,il)}}function q1(r){const e=[],i=[],s=[];let l=r;const c=r-Ss+1+Jx.length;for(let f=0;f<c;f++){const p=Math.pow(2,l);e.push(p);let m=1/p;f>r-Ss?m=Jx[f-r+Ss-1]:f===0&&(m=0),i.push(m);const h=1/(p-2),g=-h,_=1+h,x=[g,g,_,g,_,_,g,g,_,_,g,_],E=6,T=6,U=3,S=2,v=1,P=new Float32Array(U*T*E),V=new Float32Array(S*T*E),B=new Float32Array(v*T*E);for(let G=0;G<E;G++){const j=G%3*2/3-1,D=G>2?0:-1,k=[j,D,0,j+2/3,D,0,j+2/3,D+1,0,j,D,0,j+2/3,D+1,0,j,D+1,0];P.set(k,U*T*G),V.set(x,S*T*G);const J=[G,G,G,G,G,G];B.set(J,v*T*G)}const Z=new Pi;Z.setAttribute("position",new Oi(P,U)),Z.setAttribute("uv",new Oi(V,S)),Z.setAttribute("faceIndex",new Oi(B,v)),s.push(new Fa(Z,null)),l>Ss&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function t_(r,e,i){const s=new ia(r,e,i);return s.texture.mapping=mu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Xr(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function Z1(r,e,i){return new sa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:X1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:_u(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function K1(r,e,i){const s=new Float32Array(qs),l=new ce(0,1,0);return new sa({name:"SphericalGaussianBlur",defines:{n:qs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:_u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function n_(){return new sa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function i_(){return new sa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function _u(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class rv extends ia{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new $_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new pl(5,5,5),c=new sa({name:"CubemapFromEquirect",uniforms:io(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:li,blending:Ua});c.uniforms.tEquirect.value=i;const f=new Fa(l,c),p=i.minFilter;return i.minFilter===Ks&&(i.minFilter=Zn),new eM(1,10,this).update(e,f),i.minFilter=p,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,s,l);e.setRenderTarget(c)}}function Q1(r){let e=new WeakMap,i=new WeakMap,s=null;function l(x,E=!1){return x==null?null:E?f(x):c(x)}function c(x){if(x&&x.isTexture){const E=x.mapping;if(E===Nd||E===Ud)if(e.has(x)){const T=e.get(x).texture;return p(T,x.mapping)}else{const T=x.image;if(T&&T.height>0){const U=new rv(T.height);return U.fromEquirectangularTexture(r,x),e.set(x,U),x.addEventListener("dispose",h),p(U.texture,x.mapping)}else return null}}return x}function f(x){if(x&&x.isTexture){const E=x.mapping,T=E===Nd||E===Ud,U=E===Js||E===to;if(T||U){let S=i.get(x);const v=S!==void 0?S.texture.pmremVersion:0;if(x.isRenderTargetTexture&&x.pmremVersion!==v)return s===null&&(s=new e_(r)),S=T?s.fromEquirectangular(x,S):s.fromCubemap(x,S),S.texture.pmremVersion=x.pmremVersion,i.set(x,S),S.texture;if(S!==void 0)return S.texture;{const P=x.image;return T&&P&&P.height>0||U&&P&&m(P)?(s===null&&(s=new e_(r)),S=T?s.fromEquirectangular(x):s.fromCubemap(x),S.texture.pmremVersion=x.pmremVersion,i.set(x,S),x.addEventListener("dispose",g),S.texture):null}}}return x}function p(x,E){return E===Nd?x.mapping=Js:E===Ud&&(x.mapping=to),x}function m(x){let E=0;const T=6;for(let U=0;U<T;U++)x[U]!==void 0&&E++;return E===T}function h(x){const E=x.target;E.removeEventListener("dispose",h);const T=e.get(E);T!==void 0&&(e.delete(E),T.dispose())}function g(x){const E=x.target;E.removeEventListener("dispose",g);const T=i.get(E);T!==void 0&&(i.delete(E),T.dispose())}function _(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:_}}function J1(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&np("WebGLRenderer: "+s+" extension not supported."),l}}}function $1(r,e,i,s){const l={},c=new WeakMap;function f(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);x.removeEventListener("dispose",f),delete l[x.id];const E=c.get(x);E&&(e.remove(E),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function p(_,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function m(_){const x=_.attributes;for(const E in x)e.update(x[E],r.ARRAY_BUFFER)}function h(_){const x=[],E=_.index,T=_.attributes.position;let U=0;if(T===void 0)return;if(E!==null){const P=E.array;U=E.version;for(let V=0,B=P.length;V<B;V+=3){const Z=P[V+0],G=P[V+1],j=P[V+2];x.push(Z,G,G,j,j,Z)}}else{const P=T.array;U=T.version;for(let V=0,B=P.length/3-1;V<B;V+=3){const Z=V+0,G=V+1,j=V+2;x.push(Z,G,G,j,j,Z)}}const S=new(T.count>=65535?Z_:q_)(x,1);S.version=U;const v=c.get(_);v&&e.remove(v),c.set(_,S)}function g(_){const x=c.get(_);if(x){const E=_.index;E!==null&&x.version<E.version&&h(_)}else h(_);return c.get(_)}return{get:p,update:m,getWireframeAttribute:g}}function eT(r,e,i){let s;function l(_){s=_}let c,f;function p(_){c=_.type,f=_.bytesPerElement}function m(_,x){r.drawElements(s,x,c,_*f),i.update(x,s,1)}function h(_,x,E){E!==0&&(r.drawElementsInstanced(s,x,c,_*f,E),i.update(x,s,E))}function g(_,x,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,x,0,c,_,0,E);let U=0;for(let S=0;S<E;S++)U+=x[S];i.update(U,s,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=g}function tT(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,p){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:Ht("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function nT(r,e,i){const s=new WeakMap,l=new vn;function c(f,p,m){const h=f.morphTargetInfluences,g=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,_=g!==void 0?g.length:0;let x=s.get(p);if(x===void 0||x.count!==_){let J=function(){D.dispose(),s.delete(p),p.removeEventListener("dispose",J)};var E=J;x!==void 0&&x.texture.dispose();const T=p.morphAttributes.position!==void 0,U=p.morphAttributes.normal!==void 0,S=p.morphAttributes.color!==void 0,v=p.morphAttributes.position||[],P=p.morphAttributes.normal||[],V=p.morphAttributes.color||[];let B=0;T===!0&&(B=1),U===!0&&(B=2),S===!0&&(B=3);let Z=p.attributes.position.count*B,G=1;Z>e.maxTextureSize&&(G=Math.ceil(Z/e.maxTextureSize),Z=e.maxTextureSize);const j=new Float32Array(Z*G*4*_),D=new W_(j,Z,G,_);D.type=ea,D.needsUpdate=!0;const k=B*4;for(let Y=0;Y<_;Y++){const ae=v[Y],ee=P[Y],xe=V[Y],X=Z*G*4*Y;for(let N=0;N<ae.count;N++){const I=N*k;T===!0&&(l.fromBufferAttribute(ae,N),j[X+I+0]=l.x,j[X+I+1]=l.y,j[X+I+2]=l.z,j[X+I+3]=0),U===!0&&(l.fromBufferAttribute(ee,N),j[X+I+4]=l.x,j[X+I+5]=l.y,j[X+I+6]=l.z,j[X+I+7]=0),S===!0&&(l.fromBufferAttribute(xe,N),j[X+I+8]=l.x,j[X+I+9]=l.y,j[X+I+10]=l.z,j[X+I+11]=xe.itemSize===4?l.w:1)}}x={count:_,texture:D,size:new Rt(Z,G)},s.set(p,x),p.addEventListener("dispose",J)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let T=0;for(let S=0;S<h.length;S++)T+=h[S];const U=p.morphTargetsRelative?1:1-T;m.getUniforms().setValue(r,"morphTargetBaseInfluence",U),m.getUniforms().setValue(r,"morphTargetInfluences",h)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function iT(r,e,i,s,l){let c=new WeakMap;function f(h){const g=l.render.frame,_=h.geometry,x=e.get(h,_);if(c.get(x)!==g&&(e.update(x),c.set(x,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==g&&(i.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,r.ARRAY_BUFFER),c.set(h,g))),h.isSkinnedMesh){const E=h.skeleton;c.get(E)!==g&&(E.update(),c.set(E,g))}return x}function p(){c=new WeakMap}function m(h){const g=h.target;g.removeEventListener("dispose",m),s.releaseStatesOfObject(g),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:f,dispose:p}}const aT={[w_]:"LINEAR_TONE_MAPPING",[D_]:"REINHARD_TONE_MAPPING",[N_]:"CINEON_TONE_MAPPING",[U_]:"ACES_FILMIC_TONE_MAPPING",[O_]:"AGX_TONE_MAPPING",[P_]:"NEUTRAL_TONE_MAPPING",[L_]:"CUSTOM_TONE_MAPPING"};function sT(r,e,i,s,l){const c=new ia(e,i,{type:r,depthBuffer:s,stencilBuffer:l,depthTexture:s?new no(e,i):void 0}),f=new ia(e,i,{type:Oa,depthBuffer:!1,stencilBuffer:!1}),p=new Pi;p.setAttribute("position",new Si([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Si([0,2,0,0,2,0],2));const m=new Zb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Fa(p,m),g=new iv(-1,1,1,-1,0,1);let _=null,x=null,E=!1,T,U=null,S=[],v=!1;this.setSize=function(P,V){c.setSize(P,V),f.setSize(P,V);for(let B=0;B<S.length;B++){const Z=S[B];Z.setSize&&Z.setSize(P,V)}},this.setEffects=function(P){S=P,v=S.length>0&&S[0].isRenderPass===!0;const V=c.width,B=c.height;for(let Z=0;Z<S.length;Z++){const G=S[Z];G.setSize&&G.setSize(V,B)}},this.begin=function(P,V){if(E||P.toneMapping===na&&S.length===0)return!1;if(U=V,V!==null){const B=V.width,Z=V.height;(c.width!==B||c.height!==Z)&&this.setSize(B,Z)}return v===!1&&P.setRenderTarget(c),T=P.toneMapping,P.toneMapping=na,!0},this.hasRenderPass=function(){return v},this.end=function(P,V){P.toneMapping=T,E=!0;let B=c,Z=f;for(let G=0;G<S.length;G++){const j=S[G];if(j.enabled!==!1&&(j.render(P,Z,B,V),j.needsSwap!==!1)){const D=B;B=Z,Z=D}}if(_!==P.outputColorSpace||x!==P.toneMapping){_=P.outputColorSpace,x=P.toneMapping,m.defines={},Bt.getTransfer(_)===en&&(m.defines.SRGB_TRANSFER="");const G=aT[x];G&&(m.defines[G]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=B.texture,P.setRenderTarget(U),P.render(h,g),U=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),f.dispose(),p.dispose(),m.dispose()}}const ov=new Jn,ap=new no(1,1),lv=new W_,cv=new Tb,uv=new $_,a_=[],s_=[],r_=new Float32Array(16),o_=new Float32Array(9),l_=new Float32Array(4);function ao(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=a_[l];if(c===void 0&&(c=new Float32Array(l),a_[l]=c),e!==0){s.toArray(c,0);for(let f=1,p=0;f!==e;++f)p+=i,r[f].toArray(c,p)}return c}function Un(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function Ln(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function vu(r,e){let i=s_[e];i===void 0&&(i=new Int32Array(e),s_[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function rT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function oT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Un(i,e))return;r.uniform2fv(this.addr,e),Ln(i,e)}}function lT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Un(i,e))return;r.uniform3fv(this.addr,e),Ln(i,e)}}function cT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Un(i,e))return;r.uniform4fv(this.addr,e),Ln(i,e)}}function uT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Un(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ln(i,e)}else{if(Un(i,s))return;l_.set(s),r.uniformMatrix2fv(this.addr,!1,l_),Ln(i,s)}}function fT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Un(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ln(i,e)}else{if(Un(i,s))return;o_.set(s),r.uniformMatrix3fv(this.addr,!1,o_),Ln(i,s)}}function dT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Un(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ln(i,e)}else{if(Un(i,s))return;r_.set(s),r.uniformMatrix4fv(this.addr,!1,r_),Ln(i,s)}}function hT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function pT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Un(i,e))return;r.uniform2iv(this.addr,e),Ln(i,e)}}function mT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Un(i,e))return;r.uniform3iv(this.addr,e),Ln(i,e)}}function gT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Un(i,e))return;r.uniform4iv(this.addr,e),Ln(i,e)}}function xT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function _T(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Un(i,e))return;r.uniform2uiv(this.addr,e),Ln(i,e)}}function vT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Un(i,e))return;r.uniform3uiv(this.addr,e),Ln(i,e)}}function yT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Un(i,e))return;r.uniform4uiv(this.addr,e),Ln(i,e)}}function ST(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(ap.compareFunction=i.isReversedDepthBuffer()?gp:mp,c=ap):c=ov,i.setTexture2D(e||c,l)}function bT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||cv,l)}function MT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||uv,l)}function ET(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||lv,l)}function TT(r){switch(r){case 5126:return rT;case 35664:return oT;case 35665:return lT;case 35666:return cT;case 35674:return uT;case 35675:return fT;case 35676:return dT;case 5124:case 35670:return hT;case 35667:case 35671:return pT;case 35668:case 35672:return mT;case 35669:case 35673:return gT;case 5125:return xT;case 36294:return _T;case 36295:return vT;case 36296:return yT;case 35678:case 36198:case 36298:case 36306:case 35682:return ST;case 35679:case 36299:case 36307:return bT;case 35680:case 36300:case 36308:case 36293:return MT;case 36289:case 36303:case 36311:case 36292:return ET}}function AT(r,e){r.uniform1fv(this.addr,e)}function RT(r,e){const i=ao(e,this.size,2);r.uniform2fv(this.addr,i)}function CT(r,e){const i=ao(e,this.size,3);r.uniform3fv(this.addr,i)}function wT(r,e){const i=ao(e,this.size,4);r.uniform4fv(this.addr,i)}function DT(r,e){const i=ao(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function NT(r,e){const i=ao(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function UT(r,e){const i=ao(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function LT(r,e){r.uniform1iv(this.addr,e)}function OT(r,e){r.uniform2iv(this.addr,e)}function PT(r,e){r.uniform3iv(this.addr,e)}function FT(r,e){r.uniform4iv(this.addr,e)}function zT(r,e){r.uniform1uiv(this.addr,e)}function IT(r,e){r.uniform2uiv(this.addr,e)}function BT(r,e){r.uniform3uiv(this.addr,e)}function HT(r,e){r.uniform4uiv(this.addr,e)}function GT(r,e,i){const s=this.cache,l=e.length,c=vu(i,l);Un(s,c)||(r.uniform1iv(this.addr,c),Ln(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=ap:f=ov;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||f,c[p])}function VT(r,e,i){const s=this.cache,l=e.length,c=vu(i,l);Un(s,c)||(r.uniform1iv(this.addr,c),Ln(s,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||cv,c[f])}function kT(r,e,i){const s=this.cache,l=e.length,c=vu(i,l);Un(s,c)||(r.uniform1iv(this.addr,c),Ln(s,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||uv,c[f])}function jT(r,e,i){const s=this.cache,l=e.length,c=vu(i,l);Un(s,c)||(r.uniform1iv(this.addr,c),Ln(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||lv,c[f])}function WT(r){switch(r){case 5126:return AT;case 35664:return RT;case 35665:return CT;case 35666:return wT;case 35674:return DT;case 35675:return NT;case 35676:return UT;case 5124:case 35670:return LT;case 35667:case 35671:return OT;case 35668:case 35672:return PT;case 35669:case 35673:return FT;case 5125:return zT;case 36294:return IT;case 36295:return BT;case 36296:return HT;case 35678:case 36198:case 36298:case 36306:case 35682:return GT;case 35679:case 36299:case 36307:return VT;case 35680:case 36300:case 36308:case 36293:return kT;case 36289:case 36303:case 36311:case 36292:return jT}}class XT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=TT(i.type)}}class YT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=WT(i.type)}}class qT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const p=l[c];p.setValue(e,i[p.id],s)}}}const lh=/(\w+)(\])?(\[|\.)?/g;function c_(r,e){r.seq.push(e),r.map[e.id]=e}function ZT(r,e,i){const s=r.name,l=s.length;for(lh.lastIndex=0;;){const c=lh.exec(s),f=lh.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&f+2===l){c_(i,h===void 0?new XT(p,r,e):new YT(p,r,e));break}else{let _=i.map[p];_===void 0&&(_=new qT(p),c_(i,_)),i=_}}}class au{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const p=e.getActiveUniform(i,f),m=e.getUniformLocation(i,p.name);ZT(p,m,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,f=i.length;c!==f;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&s.push(f)}return s}}function u_(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const KT=37297;let QT=0;function JT(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const p=f+1;s.push(`${p===e?">":" "} ${p}: ${i[f]}`)}return s.join(`
`)}const f_=new _t;function $T(r){Bt._getMatrix(f_,Bt.workingColorSpace,r);const e=`mat3( ${f_.elements.map(i=>i.toFixed(4))} )`;switch(Bt.getTransfer(r)){case cu:return[e,"LinearTransferOETF"];case en:return[e,"sRGBTransferOETF"];default:return ht("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function d_(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const p=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+JT(r.getShaderSource(e),p)}else return c}function eA(r,e){const i=$T(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const tA={[w_]:"Linear",[D_]:"Reinhard",[N_]:"Cineon",[U_]:"ACESFilmic",[O_]:"AgX",[P_]:"Neutral",[L_]:"Custom"};function nA(r,e){const i=tA[e];return i===void 0?(ht("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Zc=new ce;function iA(){Bt.getLuminanceCoefficients(Zc);const r=Zc.x.toFixed(4),e=Zc.y.toFixed(4),i=Zc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ol).join(`
`)}function sA(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function rA(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),f=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[f]={type:c.type,location:r.getAttribLocation(e,f),locationSize:p}}return i}function ol(r){return r!==""}function h_(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function p_(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const oA=/^[ \t]*#include +<([\w\d./]+)>/gm;function sp(r){return r.replace(oA,cA)}const lA=new Map;function cA(r,e){let i=Tt[e];if(i===void 0){const s=lA.get(e);if(s!==void 0)i=Tt[s],ht('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return sp(i)}const uA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function m_(r){return r.replace(uA,fA)}function fA(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function g_(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const dA={[Jc]:"SHADOWMAP_TYPE_PCF",[rl]:"SHADOWMAP_TYPE_VSM"};function hA(r){return dA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const pA={[Js]:"ENVMAP_TYPE_CUBE",[to]:"ENVMAP_TYPE_CUBE",[mu]:"ENVMAP_TYPE_CUBE_UV"};function mA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":pA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const gA={[to]:"ENVMAP_MODE_REFRACTION"};function xA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":gA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const _A={[C_]:"ENVMAP_BLENDING_MULTIPLY",[ib]:"ENVMAP_BLENDING_MIX",[ab]:"ENVMAP_BLENDING_ADD"};function vA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":_A[r.combine]||"ENVMAP_BLENDING_NONE"}function yA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function SA(r,e,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,p=i.fragmentShader;const m=hA(i),h=mA(i),g=xA(i),_=vA(i),x=yA(i),E=aA(i),T=sA(c),U=l.createProgram();let S,v,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(ol).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(ol).join(`
`),v.length>0&&(v+=`
`)):(S=[g_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ol).join(`
`),v=[g_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==na?"#define TONE_MAPPING":"",i.toneMapping!==na?Tt.tonemapping_pars_fragment:"",i.toneMapping!==na?nA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Tt.colorspace_pars_fragment,eA("linearToOutputTexel",i.outputColorSpace),iA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ol).join(`
`)),f=sp(f),f=h_(f,i),f=p_(f,i),p=sp(p),p=h_(p,i),p=p_(p,i),f=m_(f),p=m_(p),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,S=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",i.glslVersion===Tx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Tx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const V=P+S+f,B=P+v+p,Z=u_(l,l.VERTEX_SHADER,V),G=u_(l,l.FRAGMENT_SHADER,B);l.attachShader(U,Z),l.attachShader(U,G),i.index0AttributeName!==void 0?l.bindAttribLocation(U,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(U,0,"position"),l.linkProgram(U);function j(Y){if(r.debug.checkShaderErrors){const ae=l.getProgramInfoLog(U)||"",ee=l.getShaderInfoLog(Z)||"",xe=l.getShaderInfoLog(G)||"",X=ae.trim(),N=ee.trim(),I=xe.trim();let R=!0,w=!0;if(l.getProgramParameter(U,l.LINK_STATUS)===!1)if(R=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,U,Z,G);else{const F=d_(l,Z,"vertex"),b=d_(l,G,"fragment");Ht("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(U,l.VALIDATE_STATUS)+`

Material Name: `+Y.name+`
Material Type: `+Y.type+`

Program Info Log: `+X+`
`+F+`
`+b)}else X!==""?ht("WebGLProgram: Program Info Log:",X):(N===""||I==="")&&(w=!1);w&&(Y.diagnostics={runnable:R,programLog:X,vertexShader:{log:N,prefix:S},fragmentShader:{log:I,prefix:v}})}l.deleteShader(Z),l.deleteShader(G),D=new au(l,U),k=rA(l,U)}let D;this.getUniforms=function(){return D===void 0&&j(this),D};let k;this.getAttributes=function(){return k===void 0&&j(this),k};let J=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return J===!1&&(J=l.getProgramParameter(U,KT)),J},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(U),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=QT++,this.cacheKey=e,this.usedTimes=1,this.program=U,this.vertexShader=Z,this.fragmentShader=G,this}let bA=0;class MA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new EA(e),i.set(e,s)),s}}class EA{constructor(e){this.id=bA++,this.code=e,this.usedTimes=0}}function TA(r){return r===$s||r===ru||r===ou}function AA(r,e,i,s,l,c){const f=new X_,p=new MA,m=new Set,h=[],g=new Map,_=s.logarithmicDepthBuffer;let x=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(D){return m.add(D),D===0?"uv":`uv${D}`}function U(D,k,J,Y,ae,ee){const xe=Y.fog,X=ae.geometry,N=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?Y.environment:null,I=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap,R=e.get(D.envMap||N,I),w=R&&R.mapping===mu?R.image.height:null,F=E[D.type];D.precision!==null&&(x=s.getMaxPrecision(D.precision),x!==D.precision&&ht("WebGLProgram.getParameters:",D.precision,"not supported, using",x,"instead."));const b=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,M=b!==void 0?b.length:0;let H=0;X.morphAttributes.position!==void 0&&(H=1),X.morphAttributes.normal!==void 0&&(H=2),X.morphAttributes.color!==void 0&&(H=3);let W,K,q,se;if(F){const we=$i[F];W=we.vertexShader,K=we.fragmentShader}else W=D.vertexShader,K=D.fragmentShader,p.update(D),q=p.getVertexShaderID(D),se=p.getFragmentShaderID(D);const _e=r.getRenderTarget(),ve=r.state.buffers.depth.getReversed(),Oe=ae.isInstancedMesh===!0,be=ae.isBatchedMesh===!0,Qe=!!D.map,We=!!D.matcap,Ie=!!R,Je=!!D.aoMap,tt=!!D.lightMap,gt=!!D.bumpMap,pt=!!D.normalMap,Ct=!!D.displacementMap,$=!!D.emissiveMap,Et=!!D.metalnessMap,ot=!!D.roughnessMap,mt=D.anisotropy>0,Ue=D.clearcoat>0,Ft=D.dispersion>0,z=D.iridescence>0,C=D.sheen>0,ie=D.transmission>0,Ee=mt&&!!D.anisotropyMap,Ne=Ue&&!!D.clearcoatMap,ze=Ue&&!!D.clearcoatNormalMap,Ge=Ue&&!!D.clearcoatRoughnessMap,Se=z&&!!D.iridescenceMap,Me=z&&!!D.iridescenceThicknessMap,Ve=C&&!!D.sheenColorMap,ke=C&&!!D.sheenRoughnessMap,He=!!D.specularMap,Be=!!D.specularColorMap,ut=!!D.specularIntensityMap,ft=ie&&!!D.transmissionMap,vt=ie&&!!D.thicknessMap,te=!!D.gradientMap,Fe=!!D.alphaMap,le=D.alphaTest>0,Ae=!!D.alphaHash,Le=!!D.extensions;let pe=na;D.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(pe=r.toneMapping);const Pe={shaderID:F,shaderType:D.type,shaderName:D.name,vertexShader:W,fragmentShader:K,defines:D.defines,customVertexShaderID:q,customFragmentShaderID:se,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:x,batching:be,batchingColor:be&&ae._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&ae.instanceColor!==null,instancingMorph:Oe&&ae.morphTexture!==null,outputColorSpace:_e===null?r.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Bt.workingColorSpace,alphaToCoverage:!!D.alphaToCoverage,map:Qe,matcap:We,envMap:Ie,envMapMode:Ie&&R.mapping,envMapCubeUVHeight:w,aoMap:Je,lightMap:tt,bumpMap:gt,normalMap:pt,displacementMap:Ct,emissiveMap:$,normalMapObjectSpace:pt&&D.normalMapType===ob,normalMapTangentSpace:pt&&D.normalMapType===bx,packedNormalMap:pt&&D.normalMapType===bx&&TA(D.normalMap.format),metalnessMap:Et,roughnessMap:ot,anisotropy:mt,anisotropyMap:Ee,clearcoat:Ue,clearcoatMap:Ne,clearcoatNormalMap:ze,clearcoatRoughnessMap:Ge,dispersion:Ft,iridescence:z,iridescenceMap:Se,iridescenceThicknessMap:Me,sheen:C,sheenColorMap:Ve,sheenRoughnessMap:ke,specularMap:He,specularColorMap:Be,specularIntensityMap:ut,transmission:ie,transmissionMap:ft,thicknessMap:vt,gradientMap:te,opaque:D.transparent===!1&&D.blending===Jr&&D.alphaToCoverage===!1,alphaMap:Fe,alphaTest:le,alphaHash:Ae,combine:D.combine,mapUv:Qe&&T(D.map.channel),aoMapUv:Je&&T(D.aoMap.channel),lightMapUv:tt&&T(D.lightMap.channel),bumpMapUv:gt&&T(D.bumpMap.channel),normalMapUv:pt&&T(D.normalMap.channel),displacementMapUv:Ct&&T(D.displacementMap.channel),emissiveMapUv:$&&T(D.emissiveMap.channel),metalnessMapUv:Et&&T(D.metalnessMap.channel),roughnessMapUv:ot&&T(D.roughnessMap.channel),anisotropyMapUv:Ee&&T(D.anisotropyMap.channel),clearcoatMapUv:Ne&&T(D.clearcoatMap.channel),clearcoatNormalMapUv:ze&&T(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ge&&T(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&T(D.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&T(D.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&T(D.sheenColorMap.channel),sheenRoughnessMapUv:ke&&T(D.sheenRoughnessMap.channel),specularMapUv:He&&T(D.specularMap.channel),specularColorMapUv:Be&&T(D.specularColorMap.channel),specularIntensityMapUv:ut&&T(D.specularIntensityMap.channel),transmissionMapUv:ft&&T(D.transmissionMap.channel),thicknessMapUv:vt&&T(D.thicknessMap.channel),alphaMapUv:Fe&&T(D.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(pt||mt),vertexNormals:!!X.attributes.normal,vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:ae.isPoints===!0&&!!X.attributes.uv&&(Qe||Fe),fog:!!xe,useFog:D.fog===!0,fogExp2:!!xe&&xe.isFogExp2,flatShading:D.wireframe===!1&&(D.flatShading===!0||X.attributes.normal===void 0&&pt===!1&&(D.isMeshLambertMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isMeshPhysicalMaterial)),sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:ve,skinning:ae.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:M,morphTextureStride:H,numDirLights:k.directional.length,numPointLights:k.point.length,numSpotLights:k.spot.length,numSpotLightMaps:k.spotLightMap.length,numRectAreaLights:k.rectArea.length,numHemiLights:k.hemi.length,numDirLightShadows:k.directionalShadowMap.length,numPointLightShadows:k.pointShadowMap.length,numSpotLightShadows:k.spotShadowMap.length,numSpotLightShadowsWithMaps:k.numSpotLightShadowsWithMaps,numLightProbes:k.numLightProbes,numLightProbeGrids:ee.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:D.dithering,shadowMapEnabled:r.shadowMap.enabled&&J.length>0,shadowMapType:r.shadowMap.type,toneMapping:pe,decodeVideoTexture:Qe&&D.map.isVideoTexture===!0&&Bt.getTransfer(D.map.colorSpace)===en,decodeVideoTextureEmissive:$&&D.emissiveMap.isVideoTexture===!0&&Bt.getTransfer(D.emissiveMap.colorSpace)===en,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Da,flipSided:D.side===li,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Le&&D.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&D.extensions.multiDraw===!0||be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Pe.vertexUv1s=m.has(1),Pe.vertexUv2s=m.has(2),Pe.vertexUv3s=m.has(3),m.clear(),Pe}function S(D){const k=[];if(D.shaderID?k.push(D.shaderID):(k.push(D.customVertexShaderID),k.push(D.customFragmentShaderID)),D.defines!==void 0)for(const J in D.defines)k.push(J),k.push(D.defines[J]);return D.isRawShaderMaterial===!1&&(v(k,D),P(k,D),k.push(r.outputColorSpace)),k.push(D.customProgramCacheKey),k.join()}function v(D,k){D.push(k.precision),D.push(k.outputColorSpace),D.push(k.envMapMode),D.push(k.envMapCubeUVHeight),D.push(k.mapUv),D.push(k.alphaMapUv),D.push(k.lightMapUv),D.push(k.aoMapUv),D.push(k.bumpMapUv),D.push(k.normalMapUv),D.push(k.displacementMapUv),D.push(k.emissiveMapUv),D.push(k.metalnessMapUv),D.push(k.roughnessMapUv),D.push(k.anisotropyMapUv),D.push(k.clearcoatMapUv),D.push(k.clearcoatNormalMapUv),D.push(k.clearcoatRoughnessMapUv),D.push(k.iridescenceMapUv),D.push(k.iridescenceThicknessMapUv),D.push(k.sheenColorMapUv),D.push(k.sheenRoughnessMapUv),D.push(k.specularMapUv),D.push(k.specularColorMapUv),D.push(k.specularIntensityMapUv),D.push(k.transmissionMapUv),D.push(k.thicknessMapUv),D.push(k.combine),D.push(k.fogExp2),D.push(k.sizeAttenuation),D.push(k.morphTargetsCount),D.push(k.morphAttributeCount),D.push(k.numDirLights),D.push(k.numPointLights),D.push(k.numSpotLights),D.push(k.numSpotLightMaps),D.push(k.numHemiLights),D.push(k.numRectAreaLights),D.push(k.numDirLightShadows),D.push(k.numPointLightShadows),D.push(k.numSpotLightShadows),D.push(k.numSpotLightShadowsWithMaps),D.push(k.numLightProbes),D.push(k.shadowMapType),D.push(k.toneMapping),D.push(k.numClippingPlanes),D.push(k.numClipIntersection),D.push(k.depthPacking)}function P(D,k){f.disableAll(),k.instancing&&f.enable(0),k.instancingColor&&f.enable(1),k.instancingMorph&&f.enable(2),k.matcap&&f.enable(3),k.envMap&&f.enable(4),k.normalMapObjectSpace&&f.enable(5),k.normalMapTangentSpace&&f.enable(6),k.clearcoat&&f.enable(7),k.iridescence&&f.enable(8),k.alphaTest&&f.enable(9),k.vertexColors&&f.enable(10),k.vertexAlphas&&f.enable(11),k.vertexUv1s&&f.enable(12),k.vertexUv2s&&f.enable(13),k.vertexUv3s&&f.enable(14),k.vertexTangents&&f.enable(15),k.anisotropy&&f.enable(16),k.alphaHash&&f.enable(17),k.batching&&f.enable(18),k.dispersion&&f.enable(19),k.batchingColor&&f.enable(20),k.gradientMap&&f.enable(21),k.packedNormalMap&&f.enable(22),k.vertexNormals&&f.enable(23),D.push(f.mask),f.disableAll(),k.fog&&f.enable(0),k.useFog&&f.enable(1),k.flatShading&&f.enable(2),k.logarithmicDepthBuffer&&f.enable(3),k.reversedDepthBuffer&&f.enable(4),k.skinning&&f.enable(5),k.morphTargets&&f.enable(6),k.morphNormals&&f.enable(7),k.morphColors&&f.enable(8),k.premultipliedAlpha&&f.enable(9),k.shadowMapEnabled&&f.enable(10),k.doubleSided&&f.enable(11),k.flipSided&&f.enable(12),k.useDepthPacking&&f.enable(13),k.dithering&&f.enable(14),k.transmission&&f.enable(15),k.sheen&&f.enable(16),k.opaque&&f.enable(17),k.pointsUvs&&f.enable(18),k.decodeVideoTexture&&f.enable(19),k.decodeVideoTextureEmissive&&f.enable(20),k.alphaToCoverage&&f.enable(21),k.numLightProbeGrids>0&&f.enable(22),D.push(f.mask)}function V(D){const k=E[D.type];let J;if(k){const Y=$i[k];J=Xb.clone(Y.uniforms)}else J=D.uniforms;return J}function B(D,k){let J=g.get(k);return J!==void 0?++J.usedTimes:(J=new SA(r,k,D,l),h.push(J),g.set(k,J)),J}function Z(D){if(--D.usedTimes===0){const k=h.indexOf(D);h[k]=h[h.length-1],h.pop(),g.delete(D.cacheKey),D.destroy()}}function G(D){p.remove(D)}function j(){p.dispose()}return{getParameters:U,getProgramCacheKey:S,getUniforms:V,acquireProgram:B,releaseProgram:Z,releaseShaderCache:G,programs:h,dispose:j}}function RA(){let r=new WeakMap;function e(f){return r.has(f)}function i(f){let p=r.get(f);return p===void 0&&(p={},r.set(f,p)),p}function s(f){r.delete(f)}function l(f,p,m){r.get(f)[p]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function CA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function x_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function __(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function f(x){let E=0;return x.isInstancedMesh&&(E+=2),x.isSkinnedMesh&&(E+=1),E}function p(x,E,T,U,S,v){let P=r[e];return P===void 0?(P={id:x.id,object:x,geometry:E,material:T,materialVariant:f(x),groupOrder:U,renderOrder:x.renderOrder,z:S,group:v},r[e]=P):(P.id=x.id,P.object=x,P.geometry=E,P.material=T,P.materialVariant=f(x),P.groupOrder=U,P.renderOrder=x.renderOrder,P.z=S,P.group=v),e++,P}function m(x,E,T,U,S,v){const P=p(x,E,T,U,S,v);T.transmission>0?s.push(P):T.transparent===!0?l.push(P):i.push(P)}function h(x,E,T,U,S,v){const P=p(x,E,T,U,S,v);T.transmission>0?s.unshift(P):T.transparent===!0?l.unshift(P):i.unshift(P)}function g(x,E){i.length>1&&i.sort(x||CA),s.length>1&&s.sort(E||x_),l.length>1&&l.sort(E||x_)}function _(){for(let x=e,E=r.length;x<E;x++){const T=r[x];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:h,finish:_,sort:g}}function wA(){let r=new WeakMap;function e(s,l){const c=r.get(s);let f;return c===void 0?(f=new __,r.set(s,[f])):l>=c.length?(f=new __,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:e,dispose:i}}function DA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ce,color:new Lt};break;case"SpotLight":i={position:new ce,direction:new ce,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ce,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ce,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":i={color:new Lt,position:new ce,halfWidth:new ce,halfHeight:new ce};break}return r[e.id]=i,i}}}function NA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let UA=0;function LA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function OA(r){const e=new DA,i=NA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new ce);const l=new ce,c=new Rn,f=new Rn;function p(h){let g=0,_=0,x=0;for(let k=0;k<9;k++)s.probe[k].set(0,0,0);let E=0,T=0,U=0,S=0,v=0,P=0,V=0,B=0,Z=0,G=0,j=0;h.sort(LA);for(let k=0,J=h.length;k<J;k++){const Y=h[k],ae=Y.color,ee=Y.intensity,xe=Y.distance;let X=null;if(Y.shadow&&Y.shadow.map&&(Y.shadow.map.texture.format===$s?X=Y.shadow.map.texture:X=Y.shadow.map.depthTexture||Y.shadow.map.texture),Y.isAmbientLight)g+=ae.r*ee,_+=ae.g*ee,x+=ae.b*ee;else if(Y.isLightProbe){for(let N=0;N<9;N++)s.probe[N].addScaledVector(Y.sh.coefficients[N],ee);j++}else if(Y.isDirectionalLight){const N=e.get(Y);if(N.color.copy(Y.color).multiplyScalar(Y.intensity),Y.castShadow){const I=Y.shadow,R=i.get(Y);R.shadowIntensity=I.intensity,R.shadowBias=I.bias,R.shadowNormalBias=I.normalBias,R.shadowRadius=I.radius,R.shadowMapSize=I.mapSize,s.directionalShadow[E]=R,s.directionalShadowMap[E]=X,s.directionalShadowMatrix[E]=Y.shadow.matrix,P++}s.directional[E]=N,E++}else if(Y.isSpotLight){const N=e.get(Y);N.position.setFromMatrixPosition(Y.matrixWorld),N.color.copy(ae).multiplyScalar(ee),N.distance=xe,N.coneCos=Math.cos(Y.angle),N.penumbraCos=Math.cos(Y.angle*(1-Y.penumbra)),N.decay=Y.decay,s.spot[U]=N;const I=Y.shadow;if(Y.map&&(s.spotLightMap[Z]=Y.map,Z++,I.updateMatrices(Y),Y.castShadow&&G++),s.spotLightMatrix[U]=I.matrix,Y.castShadow){const R=i.get(Y);R.shadowIntensity=I.intensity,R.shadowBias=I.bias,R.shadowNormalBias=I.normalBias,R.shadowRadius=I.radius,R.shadowMapSize=I.mapSize,s.spotShadow[U]=R,s.spotShadowMap[U]=X,B++}U++}else if(Y.isRectAreaLight){const N=e.get(Y);N.color.copy(ae).multiplyScalar(ee),N.halfWidth.set(Y.width*.5,0,0),N.halfHeight.set(0,Y.height*.5,0),s.rectArea[S]=N,S++}else if(Y.isPointLight){const N=e.get(Y);if(N.color.copy(Y.color).multiplyScalar(Y.intensity),N.distance=Y.distance,N.decay=Y.decay,Y.castShadow){const I=Y.shadow,R=i.get(Y);R.shadowIntensity=I.intensity,R.shadowBias=I.bias,R.shadowNormalBias=I.normalBias,R.shadowRadius=I.radius,R.shadowMapSize=I.mapSize,R.shadowCameraNear=I.camera.near,R.shadowCameraFar=I.camera.far,s.pointShadow[T]=R,s.pointShadowMap[T]=X,s.pointShadowMatrix[T]=Y.shadow.matrix,V++}s.point[T]=N,T++}else if(Y.isHemisphereLight){const N=e.get(Y);N.skyColor.copy(Y.color).multiplyScalar(ee),N.groundColor.copy(Y.groundColor).multiplyScalar(ee),s.hemi[v]=N,v++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=qe.LTC_FLOAT_1,s.rectAreaLTC2=qe.LTC_FLOAT_2):(s.rectAreaLTC1=qe.LTC_HALF_1,s.rectAreaLTC2=qe.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=x;const D=s.hash;(D.directionalLength!==E||D.pointLength!==T||D.spotLength!==U||D.rectAreaLength!==S||D.hemiLength!==v||D.numDirectionalShadows!==P||D.numPointShadows!==V||D.numSpotShadows!==B||D.numSpotMaps!==Z||D.numLightProbes!==j)&&(s.directional.length=E,s.spot.length=U,s.rectArea.length=S,s.point.length=T,s.hemi.length=v,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=V,s.pointShadowMap.length=V,s.spotShadow.length=B,s.spotShadowMap.length=B,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=V,s.spotLightMatrix.length=B+Z-G,s.spotLightMap.length=Z,s.numSpotLightShadowsWithMaps=G,s.numLightProbes=j,D.directionalLength=E,D.pointLength=T,D.spotLength=U,D.rectAreaLength=S,D.hemiLength=v,D.numDirectionalShadows=P,D.numPointShadows=V,D.numSpotShadows=B,D.numSpotMaps=Z,D.numLightProbes=j,s.version=UA++)}function m(h,g){let _=0,x=0,E=0,T=0,U=0;const S=g.matrixWorldInverse;for(let v=0,P=h.length;v<P;v++){const V=h[v];if(V.isDirectionalLight){const B=s.directional[_];B.direction.setFromMatrixPosition(V.matrixWorld),l.setFromMatrixPosition(V.target.matrixWorld),B.direction.sub(l),B.direction.transformDirection(S),_++}else if(V.isSpotLight){const B=s.spot[E];B.position.setFromMatrixPosition(V.matrixWorld),B.position.applyMatrix4(S),B.direction.setFromMatrixPosition(V.matrixWorld),l.setFromMatrixPosition(V.target.matrixWorld),B.direction.sub(l),B.direction.transformDirection(S),E++}else if(V.isRectAreaLight){const B=s.rectArea[T];B.position.setFromMatrixPosition(V.matrixWorld),B.position.applyMatrix4(S),f.identity(),c.copy(V.matrixWorld),c.premultiply(S),f.extractRotation(c),B.halfWidth.set(V.width*.5,0,0),B.halfHeight.set(0,V.height*.5,0),B.halfWidth.applyMatrix4(f),B.halfHeight.applyMatrix4(f),T++}else if(V.isPointLight){const B=s.point[x];B.position.setFromMatrixPosition(V.matrixWorld),B.position.applyMatrix4(S),x++}else if(V.isHemisphereLight){const B=s.hemi[U];B.direction.setFromMatrixPosition(V.matrixWorld),B.direction.transformDirection(S),U++}}}return{setup:p,setupView:m,state:s}}function v_(r){const e=new OA(r),i=[],s=[],l=[];function c(x){_.camera=x,i.length=0,s.length=0,l.length=0}function f(x){i.push(x)}function p(x){s.push(x)}function m(x){l.push(x)}function h(){e.setup(i)}function g(x){e.setupView(i,x)}const _={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:h,setupLightsView:g,pushLight:f,pushShadow:p,pushLightProbeGrid:m}}function PA(r){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let p;return f===void 0?(p=new v_(r),e.set(l,[p])):c>=f.length?(p=new v_(r),f.push(p)):p=f[c],p}function s(){e=new WeakMap}return{get:i,dispose:s}}const FA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,IA=[new ce(1,0,0),new ce(-1,0,0),new ce(0,1,0),new ce(0,-1,0),new ce(0,0,1),new ce(0,0,-1)],BA=[new ce(0,-1,0),new ce(0,-1,0),new ce(0,0,1),new ce(0,0,-1),new ce(0,-1,0),new ce(0,-1,0)],y_=new Rn,al=new ce,ch=new ce;function HA(r,e,i){let s=new Q_;const l=new Rt,c=new Rt,f=new vn,p=new Kb,m=new Qb,h={},g=i.maxTextureSize,_={[bs]:li,[li]:bs,[Da]:Da},x=new sa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:FA,fragmentShader:zA}),E=x.clone();E.defines.HORIZONTAL_PASS=1;const T=new Pi;T.setAttribute("position",new Oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const U=new Fa(T,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jc;let v=this.type;this.render=function(G,j,D){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||G.length===0)return;this.type===IS&&(ht("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Jc);const k=r.getRenderTarget(),J=r.getActiveCubeFace(),Y=r.getActiveMipmapLevel(),ae=r.state;ae.setBlending(Ua),ae.buffers.depth.getReversed()===!0?ae.buffers.color.setClear(0,0,0,0):ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const ee=v!==this.type;ee&&j.traverse(function(xe){xe.material&&(Array.isArray(xe.material)?xe.material.forEach(X=>X.needsUpdate=!0):xe.material.needsUpdate=!0)});for(let xe=0,X=G.length;xe<X;xe++){const N=G[xe],I=N.shadow;if(I===void 0){ht("WebGLShadowMap:",N,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;l.copy(I.mapSize);const R=I.getFrameExtents();l.multiply(R),c.copy(I.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/R.x),l.x=c.x*R.x,I.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/R.y),l.y=c.y*R.y,I.mapSize.y=c.y));const w=r.state.buffers.depth.getReversed();if(I.camera._reversedDepth=w,I.map===null||ee===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===rl){if(N.isPointLight){ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new ia(l.x,l.y,{format:$s,type:Oa,minFilter:Zn,magFilter:Zn,generateMipmaps:!1}),I.map.texture.name=N.name+".shadowMap",I.map.depthTexture=new no(l.x,l.y,ea),I.map.depthTexture.name=N.name+".shadowMapDepth",I.map.depthTexture.format=Pa,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Gn,I.map.depthTexture.magFilter=Gn}else N.isPointLight?(I.map=new rv(l.x),I.map.depthTexture=new jb(l.x,aa)):(I.map=new ia(l.x,l.y),I.map.depthTexture=new no(l.x,l.y,aa)),I.map.depthTexture.name=N.name+".shadowMap",I.map.depthTexture.format=Pa,this.type===Jc?(I.map.depthTexture.compareFunction=w?gp:mp,I.map.depthTexture.minFilter=Zn,I.map.depthTexture.magFilter=Zn):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Gn,I.map.depthTexture.magFilter=Gn);I.camera.updateProjectionMatrix()}const F=I.map.isWebGLCubeRenderTarget?6:1;for(let b=0;b<F;b++){if(I.map.isWebGLCubeRenderTarget)r.setRenderTarget(I.map,b),r.clear();else{b===0&&(r.setRenderTarget(I.map),r.clear());const M=I.getViewport(b);f.set(c.x*M.x,c.y*M.y,c.x*M.z,c.y*M.w),ae.viewport(f)}if(N.isPointLight){const M=I.camera,H=I.matrix,W=N.distance||M.far;W!==M.far&&(M.far=W,M.updateProjectionMatrix()),al.setFromMatrixPosition(N.matrixWorld),M.position.copy(al),ch.copy(M.position),ch.add(IA[b]),M.up.copy(BA[b]),M.lookAt(ch),M.updateMatrixWorld(),H.makeTranslation(-al.x,-al.y,-al.z),y_.multiplyMatrices(M.projectionMatrix,M.matrixWorldInverse),I._frustum.setFromProjectionMatrix(y_,M.coordinateSystem,M.reversedDepth)}else I.updateMatrices(N);s=I.getFrustum(),B(j,D,I.camera,N,this.type)}I.isPointLightShadow!==!0&&this.type===rl&&P(I,D),I.needsUpdate=!1}v=this.type,S.needsUpdate=!1,r.setRenderTarget(k,J,Y)};function P(G,j){const D=e.update(U);x.defines.VSM_SAMPLES!==G.blurSamples&&(x.defines.VSM_SAMPLES=G.blurSamples,E.defines.VSM_SAMPLES=G.blurSamples,x.needsUpdate=!0,E.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new ia(l.x,l.y,{format:$s,type:Oa})),x.uniforms.shadow_pass.value=G.map.depthTexture,x.uniforms.resolution.value=G.mapSize,x.uniforms.radius.value=G.radius,r.setRenderTarget(G.mapPass),r.clear(),r.renderBufferDirect(j,null,D,x,U,null),E.uniforms.shadow_pass.value=G.mapPass.texture,E.uniforms.resolution.value=G.mapSize,E.uniforms.radius.value=G.radius,r.setRenderTarget(G.map),r.clear(),r.renderBufferDirect(j,null,D,E,U,null)}function V(G,j,D,k){let J=null;const Y=D.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(Y!==void 0)J=Y;else if(J=D.isPointLight===!0?m:p,r.localClippingEnabled&&j.clipShadows===!0&&Array.isArray(j.clippingPlanes)&&j.clippingPlanes.length!==0||j.displacementMap&&j.displacementScale!==0||j.alphaMap&&j.alphaTest>0||j.map&&j.alphaTest>0||j.alphaToCoverage===!0){const ae=J.uuid,ee=j.uuid;let xe=h[ae];xe===void 0&&(xe={},h[ae]=xe);let X=xe[ee];X===void 0&&(X=J.clone(),xe[ee]=X,j.addEventListener("dispose",Z)),J=X}if(J.visible=j.visible,J.wireframe=j.wireframe,k===rl?J.side=j.shadowSide!==null?j.shadowSide:j.side:J.side=j.shadowSide!==null?j.shadowSide:_[j.side],J.alphaMap=j.alphaMap,J.alphaTest=j.alphaToCoverage===!0?.5:j.alphaTest,J.map=j.map,J.clipShadows=j.clipShadows,J.clippingPlanes=j.clippingPlanes,J.clipIntersection=j.clipIntersection,J.displacementMap=j.displacementMap,J.displacementScale=j.displacementScale,J.displacementBias=j.displacementBias,J.wireframeLinewidth=j.wireframeLinewidth,J.linewidth=j.linewidth,D.isPointLight===!0&&J.isMeshDistanceMaterial===!0){const ae=r.properties.get(J);ae.light=D}return J}function B(G,j,D,k,J){if(G.visible===!1)return;if(G.layers.test(j.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&J===rl)&&(!G.frustumCulled||s.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,G.matrixWorld);const ee=e.update(G),xe=G.material;if(Array.isArray(xe)){const X=ee.groups;for(let N=0,I=X.length;N<I;N++){const R=X[N],w=xe[R.materialIndex];if(w&&w.visible){const F=V(G,w,k,J);G.onBeforeShadow(r,G,j,D,ee,F,R),r.renderBufferDirect(D,null,ee,F,G,R),G.onAfterShadow(r,G,j,D,ee,F,R)}}}else if(xe.visible){const X=V(G,xe,k,J);G.onBeforeShadow(r,G,j,D,ee,X,null),r.renderBufferDirect(D,null,ee,X,G,null),G.onAfterShadow(r,G,j,D,ee,X,null)}}const ae=G.children;for(let ee=0,xe=ae.length;ee<xe;ee++)B(ae[ee],j,D,k,J)}function Z(G){G.target.removeEventListener("dispose",Z);for(const D in h){const k=h[D],J=G.target.uuid;J in k&&(k[J].dispose(),delete k[J])}}}function GA(r,e){function i(){let te=!1;const Fe=new vn;let le=null;const Ae=new vn(0,0,0,0);return{setMask:function(Le){le!==Le&&!te&&(r.colorMask(Le,Le,Le,Le),le=Le)},setLocked:function(Le){te=Le},setClear:function(Le,pe,Pe,we,je){je===!0&&(Le*=we,pe*=we,Pe*=we),Fe.set(Le,pe,Pe,we),Ae.equals(Fe)===!1&&(r.clearColor(Le,pe,Pe,we),Ae.copy(Fe))},reset:function(){te=!1,le=null,Ae.set(-1,0,0,0)}}}function s(){let te=!1,Fe=!1,le=null,Ae=null,Le=null;return{setReversed:function(pe){if(Fe!==pe){const Pe=e.get("EXT_clip_control");pe?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),Fe=pe;const we=Le;Le=null,this.setClear(we)}},getReversed:function(){return Fe},setTest:function(pe){pe?_e(r.DEPTH_TEST):ve(r.DEPTH_TEST)},setMask:function(pe){le!==pe&&!te&&(r.depthMask(pe),le=pe)},setFunc:function(pe){if(Fe&&(pe=xb[pe]),Ae!==pe){switch(pe){case xh:r.depthFunc(r.NEVER);break;case _h:r.depthFunc(r.ALWAYS);break;case vh:r.depthFunc(r.LESS);break;case eo:r.depthFunc(r.LEQUAL);break;case yh:r.depthFunc(r.EQUAL);break;case Sh:r.depthFunc(r.GEQUAL);break;case bh:r.depthFunc(r.GREATER);break;case Mh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ae=pe}},setLocked:function(pe){te=pe},setClear:function(pe){Le!==pe&&(Le=pe,Fe&&(pe=1-pe),r.clearDepth(pe))},reset:function(){te=!1,le=null,Ae=null,Le=null,Fe=!1}}}function l(){let te=!1,Fe=null,le=null,Ae=null,Le=null,pe=null,Pe=null,we=null,je=null;return{setTest:function(at){te||(at?_e(r.STENCIL_TEST):ve(r.STENCIL_TEST))},setMask:function(at){Fe!==at&&!te&&(r.stencilMask(at),Fe=at)},setFunc:function(at,yt,zt){(le!==at||Ae!==yt||Le!==zt)&&(r.stencilFunc(at,yt,zt),le=at,Ae=yt,Le=zt)},setOp:function(at,yt,zt){(pe!==at||Pe!==yt||we!==zt)&&(r.stencilOp(at,yt,zt),pe=at,Pe=yt,we=zt)},setLocked:function(at){te=at},setClear:function(at){je!==at&&(r.clearStencil(at),je=at)},reset:function(){te=!1,Fe=null,le=null,Ae=null,Le=null,pe=null,Pe=null,we=null,je=null}}}const c=new i,f=new s,p=new l,m=new WeakMap,h=new WeakMap;let g={},_={},x={},E=new WeakMap,T=[],U=null,S=!1,v=null,P=null,V=null,B=null,Z=null,G=null,j=null,D=new Lt(0,0,0),k=0,J=!1,Y=null,ae=null,ee=null,xe=null,X=null;const N=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,R=0;const w=r.getParameter(r.VERSION);w.indexOf("WebGL")!==-1?(R=parseFloat(/^WebGL (\d)/.exec(w)[1]),I=R>=1):w.indexOf("OpenGL ES")!==-1&&(R=parseFloat(/^OpenGL ES (\d)/.exec(w)[1]),I=R>=2);let F=null,b={};const M=r.getParameter(r.SCISSOR_BOX),H=r.getParameter(r.VIEWPORT),W=new vn().fromArray(M),K=new vn().fromArray(H);function q(te,Fe,le,Ae){const Le=new Uint8Array(4),pe=r.createTexture();r.bindTexture(te,pe),r.texParameteri(te,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(te,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Pe=0;Pe<le;Pe++)te===r.TEXTURE_3D||te===r.TEXTURE_2D_ARRAY?r.texImage3D(Fe,0,r.RGBA,1,1,Ae,0,r.RGBA,r.UNSIGNED_BYTE,Le):r.texImage2D(Fe+Pe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Le);return pe}const se={};se[r.TEXTURE_2D]=q(r.TEXTURE_2D,r.TEXTURE_2D,1),se[r.TEXTURE_CUBE_MAP]=q(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[r.TEXTURE_2D_ARRAY]=q(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),se[r.TEXTURE_3D]=q(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),p.setClear(0),_e(r.DEPTH_TEST),f.setFunc(eo),gt(!1),pt(_x),_e(r.CULL_FACE),Je(Ua);function _e(te){g[te]!==!0&&(r.enable(te),g[te]=!0)}function ve(te){g[te]!==!1&&(r.disable(te),g[te]=!1)}function Oe(te,Fe){return x[te]!==Fe?(r.bindFramebuffer(te,Fe),x[te]=Fe,te===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=Fe),te===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=Fe),!0):!1}function be(te,Fe){let le=T,Ae=!1;if(te){le=E.get(Fe),le===void 0&&(le=[],E.set(Fe,le));const Le=te.textures;if(le.length!==Le.length||le[0]!==r.COLOR_ATTACHMENT0){for(let pe=0,Pe=Le.length;pe<Pe;pe++)le[pe]=r.COLOR_ATTACHMENT0+pe;le.length=Le.length,Ae=!0}}else le[0]!==r.BACK&&(le[0]=r.BACK,Ae=!0);Ae&&r.drawBuffers(le)}function Qe(te){return U!==te?(r.useProgram(te),U=te,!0):!1}const We={[Ys]:r.FUNC_ADD,[HS]:r.FUNC_SUBTRACT,[GS]:r.FUNC_REVERSE_SUBTRACT};We[VS]=r.MIN,We[kS]=r.MAX;const Ie={[jS]:r.ZERO,[WS]:r.ONE,[XS]:r.SRC_COLOR,[mh]:r.SRC_ALPHA,[JS]:r.SRC_ALPHA_SATURATE,[KS]:r.DST_COLOR,[qS]:r.DST_ALPHA,[YS]:r.ONE_MINUS_SRC_COLOR,[gh]:r.ONE_MINUS_SRC_ALPHA,[QS]:r.ONE_MINUS_DST_COLOR,[ZS]:r.ONE_MINUS_DST_ALPHA,[$S]:r.CONSTANT_COLOR,[eb]:r.ONE_MINUS_CONSTANT_COLOR,[tb]:r.CONSTANT_ALPHA,[nb]:r.ONE_MINUS_CONSTANT_ALPHA};function Je(te,Fe,le,Ae,Le,pe,Pe,we,je,at){if(te===Ua){S===!0&&(ve(r.BLEND),S=!1);return}if(S===!1&&(_e(r.BLEND),S=!0),te!==BS){if(te!==v||at!==J){if((P!==Ys||Z!==Ys)&&(r.blendEquation(r.FUNC_ADD),P=Ys,Z=Ys),at)switch(te){case Jr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case vx:r.blendFunc(r.ONE,r.ONE);break;case yx:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Sx:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ht("WebGLState: Invalid blending: ",te);break}else switch(te){case Jr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case vx:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case yx:Ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sx:Ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ht("WebGLState: Invalid blending: ",te);break}V=null,B=null,G=null,j=null,D.set(0,0,0),k=0,v=te,J=at}return}Le=Le||Fe,pe=pe||le,Pe=Pe||Ae,(Fe!==P||Le!==Z)&&(r.blendEquationSeparate(We[Fe],We[Le]),P=Fe,Z=Le),(le!==V||Ae!==B||pe!==G||Pe!==j)&&(r.blendFuncSeparate(Ie[le],Ie[Ae],Ie[pe],Ie[Pe]),V=le,B=Ae,G=pe,j=Pe),(we.equals(D)===!1||je!==k)&&(r.blendColor(we.r,we.g,we.b,je),D.copy(we),k=je),v=te,J=!1}function tt(te,Fe){te.side===Da?ve(r.CULL_FACE):_e(r.CULL_FACE);let le=te.side===li;Fe&&(le=!le),gt(le),te.blending===Jr&&te.transparent===!1?Je(Ua):Je(te.blending,te.blendEquation,te.blendSrc,te.blendDst,te.blendEquationAlpha,te.blendSrcAlpha,te.blendDstAlpha,te.blendColor,te.blendAlpha,te.premultipliedAlpha),f.setFunc(te.depthFunc),f.setTest(te.depthTest),f.setMask(te.depthWrite),c.setMask(te.colorWrite);const Ae=te.stencilWrite;p.setTest(Ae),Ae&&(p.setMask(te.stencilWriteMask),p.setFunc(te.stencilFunc,te.stencilRef,te.stencilFuncMask),p.setOp(te.stencilFail,te.stencilZFail,te.stencilZPass)),$(te.polygonOffset,te.polygonOffsetFactor,te.polygonOffsetUnits),te.alphaToCoverage===!0?_e(r.SAMPLE_ALPHA_TO_COVERAGE):ve(r.SAMPLE_ALPHA_TO_COVERAGE)}function gt(te){Y!==te&&(te?r.frontFace(r.CW):r.frontFace(r.CCW),Y=te)}function pt(te){te!==FS?(_e(r.CULL_FACE),te!==ae&&(te===_x?r.cullFace(r.BACK):te===zS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ve(r.CULL_FACE),ae=te}function Ct(te){te!==ee&&(I&&r.lineWidth(te),ee=te)}function $(te,Fe,le){te?(_e(r.POLYGON_OFFSET_FILL),(xe!==Fe||X!==le)&&(xe=Fe,X=le,f.getReversed()&&(Fe=-Fe),r.polygonOffset(Fe,le))):ve(r.POLYGON_OFFSET_FILL)}function Et(te){te?_e(r.SCISSOR_TEST):ve(r.SCISSOR_TEST)}function ot(te){te===void 0&&(te=r.TEXTURE0+N-1),F!==te&&(r.activeTexture(te),F=te)}function mt(te,Fe,le){le===void 0&&(F===null?le=r.TEXTURE0+N-1:le=F);let Ae=b[le];Ae===void 0&&(Ae={type:void 0,texture:void 0},b[le]=Ae),(Ae.type!==te||Ae.texture!==Fe)&&(F!==le&&(r.activeTexture(le),F=le),r.bindTexture(te,Fe||se[te]),Ae.type=te,Ae.texture=Fe)}function Ue(){const te=b[F];te!==void 0&&te.type!==void 0&&(r.bindTexture(te.type,null),te.type=void 0,te.texture=void 0)}function Ft(){try{r.compressedTexImage2D(...arguments)}catch(te){Ht("WebGLState:",te)}}function z(){try{r.compressedTexImage3D(...arguments)}catch(te){Ht("WebGLState:",te)}}function C(){try{r.texSubImage2D(...arguments)}catch(te){Ht("WebGLState:",te)}}function ie(){try{r.texSubImage3D(...arguments)}catch(te){Ht("WebGLState:",te)}}function Ee(){try{r.compressedTexSubImage2D(...arguments)}catch(te){Ht("WebGLState:",te)}}function Ne(){try{r.compressedTexSubImage3D(...arguments)}catch(te){Ht("WebGLState:",te)}}function ze(){try{r.texStorage2D(...arguments)}catch(te){Ht("WebGLState:",te)}}function Ge(){try{r.texStorage3D(...arguments)}catch(te){Ht("WebGLState:",te)}}function Se(){try{r.texImage2D(...arguments)}catch(te){Ht("WebGLState:",te)}}function Me(){try{r.texImage3D(...arguments)}catch(te){Ht("WebGLState:",te)}}function Ve(te){return _[te]!==void 0?_[te]:r.getParameter(te)}function ke(te,Fe){_[te]!==Fe&&(r.pixelStorei(te,Fe),_[te]=Fe)}function He(te){W.equals(te)===!1&&(r.scissor(te.x,te.y,te.z,te.w),W.copy(te))}function Be(te){K.equals(te)===!1&&(r.viewport(te.x,te.y,te.z,te.w),K.copy(te))}function ut(te,Fe){let le=h.get(Fe);le===void 0&&(le=new WeakMap,h.set(Fe,le));let Ae=le.get(te);Ae===void 0&&(Ae=r.getUniformBlockIndex(Fe,te.name),le.set(te,Ae))}function ft(te,Fe){const Ae=h.get(Fe).get(te);m.get(Fe)!==Ae&&(r.uniformBlockBinding(Fe,Ae,te.__bindingPointIndex),m.set(Fe,Ae))}function vt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),g={},_={},F=null,b={},x={},E=new WeakMap,T=[],U=null,S=!1,v=null,P=null,V=null,B=null,Z=null,G=null,j=null,D=new Lt(0,0,0),k=0,J=!1,Y=null,ae=null,ee=null,xe=null,X=null,W.set(0,0,r.canvas.width,r.canvas.height),K.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),p.reset()}return{buffers:{color:c,depth:f,stencil:p},enable:_e,disable:ve,bindFramebuffer:Oe,drawBuffers:be,useProgram:Qe,setBlending:Je,setMaterial:tt,setFlipSided:gt,setCullFace:pt,setLineWidth:Ct,setPolygonOffset:$,setScissorTest:Et,activeTexture:ot,bindTexture:mt,unbindTexture:Ue,compressedTexImage2D:Ft,compressedTexImage3D:z,texImage2D:Se,texImage3D:Me,pixelStorei:ke,getParameter:Ve,updateUBOMapping:ut,uniformBlockBinding:ft,texStorage2D:ze,texStorage3D:Ge,texSubImage2D:C,texSubImage3D:ie,compressedTexSubImage2D:Ee,compressedTexSubImage3D:Ne,scissor:He,viewport:Be,reset:vt}}function VA(r,e,i,s,l,c,f){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Rt,g=new WeakMap,_=new Set;let x;const E=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function U(z,C){return T?new OffscreenCanvas(z,C):fu("canvas")}function S(z,C,ie){let Ee=1;const Ne=Ft(z);if((Ne.width>ie||Ne.height>ie)&&(Ee=ie/Math.max(Ne.width,Ne.height)),Ee<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const ze=Math.floor(Ee*Ne.width),Ge=Math.floor(Ee*Ne.height);x===void 0&&(x=U(ze,Ge));const Se=C?U(ze,Ge):x;return Se.width=ze,Se.height=Ge,Se.getContext("2d").drawImage(z,0,0,ze,Ge),ht("WebGLRenderer: Texture has been resized from ("+Ne.width+"x"+Ne.height+") to ("+ze+"x"+Ge+")."),Se}else return"data"in z&&ht("WebGLRenderer: Image in DataTexture is too big ("+Ne.width+"x"+Ne.height+")."),z;return z}function v(z){return z.generateMipmaps}function P(z){r.generateMipmap(z)}function V(z){return z.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?r.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function B(z,C,ie,Ee,Ne,ze=!1){if(z!==null){if(r[z]!==void 0)return r[z];ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let Ge;Ee&&(Ge=e.get("EXT_texture_norm16"),Ge||ht("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Se=C;if(C===r.RED&&(ie===r.FLOAT&&(Se=r.R32F),ie===r.HALF_FLOAT&&(Se=r.R16F),ie===r.UNSIGNED_BYTE&&(Se=r.R8),ie===r.UNSIGNED_SHORT&&Ge&&(Se=Ge.R16_EXT),ie===r.SHORT&&Ge&&(Se=Ge.R16_SNORM_EXT)),C===r.RED_INTEGER&&(ie===r.UNSIGNED_BYTE&&(Se=r.R8UI),ie===r.UNSIGNED_SHORT&&(Se=r.R16UI),ie===r.UNSIGNED_INT&&(Se=r.R32UI),ie===r.BYTE&&(Se=r.R8I),ie===r.SHORT&&(Se=r.R16I),ie===r.INT&&(Se=r.R32I)),C===r.RG&&(ie===r.FLOAT&&(Se=r.RG32F),ie===r.HALF_FLOAT&&(Se=r.RG16F),ie===r.UNSIGNED_BYTE&&(Se=r.RG8),ie===r.UNSIGNED_SHORT&&Ge&&(Se=Ge.RG16_EXT),ie===r.SHORT&&Ge&&(Se=Ge.RG16_SNORM_EXT)),C===r.RG_INTEGER&&(ie===r.UNSIGNED_BYTE&&(Se=r.RG8UI),ie===r.UNSIGNED_SHORT&&(Se=r.RG16UI),ie===r.UNSIGNED_INT&&(Se=r.RG32UI),ie===r.BYTE&&(Se=r.RG8I),ie===r.SHORT&&(Se=r.RG16I),ie===r.INT&&(Se=r.RG32I)),C===r.RGB_INTEGER&&(ie===r.UNSIGNED_BYTE&&(Se=r.RGB8UI),ie===r.UNSIGNED_SHORT&&(Se=r.RGB16UI),ie===r.UNSIGNED_INT&&(Se=r.RGB32UI),ie===r.BYTE&&(Se=r.RGB8I),ie===r.SHORT&&(Se=r.RGB16I),ie===r.INT&&(Se=r.RGB32I)),C===r.RGBA_INTEGER&&(ie===r.UNSIGNED_BYTE&&(Se=r.RGBA8UI),ie===r.UNSIGNED_SHORT&&(Se=r.RGBA16UI),ie===r.UNSIGNED_INT&&(Se=r.RGBA32UI),ie===r.BYTE&&(Se=r.RGBA8I),ie===r.SHORT&&(Se=r.RGBA16I),ie===r.INT&&(Se=r.RGBA32I)),C===r.RGB&&(ie===r.UNSIGNED_SHORT&&Ge&&(Se=Ge.RGB16_EXT),ie===r.SHORT&&Ge&&(Se=Ge.RGB16_SNORM_EXT),ie===r.UNSIGNED_INT_5_9_9_9_REV&&(Se=r.RGB9_E5),ie===r.UNSIGNED_INT_10F_11F_11F_REV&&(Se=r.R11F_G11F_B10F)),C===r.RGBA){const Me=ze?cu:Bt.getTransfer(Ne);ie===r.FLOAT&&(Se=r.RGBA32F),ie===r.HALF_FLOAT&&(Se=r.RGBA16F),ie===r.UNSIGNED_BYTE&&(Se=Me===en?r.SRGB8_ALPHA8:r.RGBA8),ie===r.UNSIGNED_SHORT&&Ge&&(Se=Ge.RGBA16_EXT),ie===r.SHORT&&Ge&&(Se=Ge.RGBA16_SNORM_EXT),ie===r.UNSIGNED_SHORT_4_4_4_4&&(Se=r.RGBA4),ie===r.UNSIGNED_SHORT_5_5_5_1&&(Se=r.RGB5_A1)}return(Se===r.R16F||Se===r.R32F||Se===r.RG16F||Se===r.RG32F||Se===r.RGBA16F||Se===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Se}function Z(z,C){let ie;return z?C===null||C===aa||C===ul?ie=r.DEPTH24_STENCIL8:C===ea?ie=r.DEPTH32F_STENCIL8:C===cl&&(ie=r.DEPTH24_STENCIL8,ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===aa||C===ul?ie=r.DEPTH_COMPONENT24:C===ea?ie=r.DEPTH_COMPONENT32F:C===cl&&(ie=r.DEPTH_COMPONENT16),ie}function G(z,C){return v(z)===!0||z.isFramebufferTexture&&z.minFilter!==Gn&&z.minFilter!==Zn?Math.log2(Math.max(C.width,C.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?C.mipmaps.length:1}function j(z){const C=z.target;C.removeEventListener("dispose",j),k(C),C.isVideoTexture&&g.delete(C),C.isHTMLTexture&&_.delete(C)}function D(z){const C=z.target;C.removeEventListener("dispose",D),Y(C)}function k(z){const C=s.get(z);if(C.__webglInit===void 0)return;const ie=z.source,Ee=E.get(ie);if(Ee){const Ne=Ee[C.__cacheKey];Ne.usedTimes--,Ne.usedTimes===0&&J(z),Object.keys(Ee).length===0&&E.delete(ie)}s.remove(z)}function J(z){const C=s.get(z);r.deleteTexture(C.__webglTexture);const ie=z.source,Ee=E.get(ie);delete Ee[C.__cacheKey],f.memory.textures--}function Y(z){const C=s.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),s.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let Ee=0;Ee<6;Ee++){if(Array.isArray(C.__webglFramebuffer[Ee]))for(let Ne=0;Ne<C.__webglFramebuffer[Ee].length;Ne++)r.deleteFramebuffer(C.__webglFramebuffer[Ee][Ne]);else r.deleteFramebuffer(C.__webglFramebuffer[Ee]);C.__webglDepthbuffer&&r.deleteRenderbuffer(C.__webglDepthbuffer[Ee])}else{if(Array.isArray(C.__webglFramebuffer))for(let Ee=0;Ee<C.__webglFramebuffer.length;Ee++)r.deleteFramebuffer(C.__webglFramebuffer[Ee]);else r.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&r.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&r.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let Ee=0;Ee<C.__webglColorRenderbuffer.length;Ee++)C.__webglColorRenderbuffer[Ee]&&r.deleteRenderbuffer(C.__webglColorRenderbuffer[Ee]);C.__webglDepthRenderbuffer&&r.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const ie=z.textures;for(let Ee=0,Ne=ie.length;Ee<Ne;Ee++){const ze=s.get(ie[Ee]);ze.__webglTexture&&(r.deleteTexture(ze.__webglTexture),f.memory.textures--),s.remove(ie[Ee])}s.remove(z)}let ae=0;function ee(){ae=0}function xe(){return ae}function X(z){ae=z}function N(){const z=ae;return z>=l.maxTextures&&ht("WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+l.maxTextures),ae+=1,z}function I(z){const C=[];return C.push(z.wrapS),C.push(z.wrapT),C.push(z.wrapR||0),C.push(z.magFilter),C.push(z.minFilter),C.push(z.anisotropy),C.push(z.internalFormat),C.push(z.format),C.push(z.type),C.push(z.generateMipmaps),C.push(z.premultiplyAlpha),C.push(z.flipY),C.push(z.unpackAlignment),C.push(z.colorSpace),C.join()}function R(z,C){const ie=s.get(z);if(z.isVideoTexture&&mt(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&ie.__version!==z.version){const Ee=z.image;if(Ee===null)ht("WebGLRenderer: Texture marked for update but no image data found.");else if(Ee.complete===!1)ht("WebGLRenderer: Texture marked for update but image is incomplete");else{ve(ie,z,C);return}}else z.isExternalTexture&&(ie.__webglTexture=z.sourceTexture?z.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,ie.__webglTexture,r.TEXTURE0+C)}function w(z,C){const ie=s.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&ie.__version!==z.version){ve(ie,z,C);return}else z.isExternalTexture&&(ie.__webglTexture=z.sourceTexture?z.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,ie.__webglTexture,r.TEXTURE0+C)}function F(z,C){const ie=s.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&ie.__version!==z.version){ve(ie,z,C);return}i.bindTexture(r.TEXTURE_3D,ie.__webglTexture,r.TEXTURE0+C)}function b(z,C){const ie=s.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&ie.__version!==z.version){Oe(ie,z,C);return}i.bindTexture(r.TEXTURE_CUBE_MAP,ie.__webglTexture,r.TEXTURE0+C)}const M={[Eh]:r.REPEAT,[Na]:r.CLAMP_TO_EDGE,[Th]:r.MIRRORED_REPEAT},H={[Gn]:r.NEAREST,[sb]:r.NEAREST_MIPMAP_NEAREST,[Tc]:r.NEAREST_MIPMAP_LINEAR,[Zn]:r.LINEAR,[Ld]:r.LINEAR_MIPMAP_NEAREST,[Ks]:r.LINEAR_MIPMAP_LINEAR},W={[lb]:r.NEVER,[hb]:r.ALWAYS,[cb]:r.LESS,[mp]:r.LEQUAL,[ub]:r.EQUAL,[gp]:r.GEQUAL,[fb]:r.GREATER,[db]:r.NOTEQUAL};function K(z,C){if(C.type===ea&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===Zn||C.magFilter===Ld||C.magFilter===Tc||C.magFilter===Ks||C.minFilter===Zn||C.minFilter===Ld||C.minFilter===Tc||C.minFilter===Ks)&&ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(z,r.TEXTURE_WRAP_S,M[C.wrapS]),r.texParameteri(z,r.TEXTURE_WRAP_T,M[C.wrapT]),(z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY)&&r.texParameteri(z,r.TEXTURE_WRAP_R,M[C.wrapR]),r.texParameteri(z,r.TEXTURE_MAG_FILTER,H[C.magFilter]),r.texParameteri(z,r.TEXTURE_MIN_FILTER,H[C.minFilter]),C.compareFunction&&(r.texParameteri(z,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(z,r.TEXTURE_COMPARE_FUNC,W[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Gn||C.minFilter!==Tc&&C.minFilter!==Ks||C.type===ea&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||s.get(C).__currentAnisotropy){const ie=e.get("EXT_texture_filter_anisotropic");r.texParameterf(z,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,l.getMaxAnisotropy())),s.get(C).__currentAnisotropy=C.anisotropy}}}function q(z,C){let ie=!1;z.__webglInit===void 0&&(z.__webglInit=!0,C.addEventListener("dispose",j));const Ee=C.source;let Ne=E.get(Ee);Ne===void 0&&(Ne={},E.set(Ee,Ne));const ze=I(C);if(ze!==z.__cacheKey){Ne[ze]===void 0&&(Ne[ze]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,ie=!0),Ne[ze].usedTimes++;const Ge=Ne[z.__cacheKey];Ge!==void 0&&(Ne[z.__cacheKey].usedTimes--,Ge.usedTimes===0&&J(C)),z.__cacheKey=ze,z.__webglTexture=Ne[ze].texture}return ie}function se(z,C,ie){return Math.floor(Math.floor(z/ie)/C)}function _e(z,C,ie,Ee){const ze=z.updateRanges;if(ze.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,C.width,C.height,ie,Ee,C.data);else{ze.sort((ke,He)=>ke.start-He.start);let Ge=0;for(let ke=1;ke<ze.length;ke++){const He=ze[Ge],Be=ze[ke],ut=He.start+He.count,ft=se(Be.start,C.width,4),vt=se(He.start,C.width,4);Be.start<=ut+1&&ft===vt&&se(Be.start+Be.count-1,C.width,4)===ft?He.count=Math.max(He.count,Be.start+Be.count-He.start):(++Ge,ze[Ge]=Be)}ze.length=Ge+1;const Se=i.getParameter(r.UNPACK_ROW_LENGTH),Me=i.getParameter(r.UNPACK_SKIP_PIXELS),Ve=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,C.width);for(let ke=0,He=ze.length;ke<He;ke++){const Be=ze[ke],ut=Math.floor(Be.start/4),ft=Math.ceil(Be.count/4),vt=ut%C.width,te=Math.floor(ut/C.width),Fe=ft,le=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,vt),i.pixelStorei(r.UNPACK_SKIP_ROWS,te),i.texSubImage2D(r.TEXTURE_2D,0,vt,te,Fe,le,ie,Ee,C.data)}z.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,Se),i.pixelStorei(r.UNPACK_SKIP_PIXELS,Me),i.pixelStorei(r.UNPACK_SKIP_ROWS,Ve)}}function ve(z,C,ie){let Ee=r.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(Ee=r.TEXTURE_2D_ARRAY),C.isData3DTexture&&(Ee=r.TEXTURE_3D);const Ne=q(z,C),ze=C.source;i.bindTexture(Ee,z.__webglTexture,r.TEXTURE0+ie);const Ge=s.get(ze);if(ze.version!==Ge.__version||Ne===!0){if(i.activeTexture(r.TEXTURE0+ie),(typeof ImageBitmap<"u"&&C.image instanceof ImageBitmap)===!1){const le=Bt.getPrimaries(Bt.workingColorSpace),Ae=C.colorSpace===ys?null:Bt.getPrimaries(C.colorSpace),Le=C.colorSpace===ys||le===Ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le)}i.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment);let Me=S(C.image,!1,l.maxTextureSize);Me=Ue(C,Me);const Ve=c.convert(C.format,C.colorSpace),ke=c.convert(C.type);let He=B(C.internalFormat,Ve,ke,C.normalized,C.colorSpace,C.isVideoTexture);K(Ee,C);let Be;const ut=C.mipmaps,ft=C.isVideoTexture!==!0,vt=Ge.__version===void 0||Ne===!0,te=ze.dataReady,Fe=G(C,Me);if(C.isDepthTexture)He=Z(C.format===Qs,C.type),vt&&(ft?i.texStorage2D(r.TEXTURE_2D,1,He,Me.width,Me.height):i.texImage2D(r.TEXTURE_2D,0,He,Me.width,Me.height,0,Ve,ke,null));else if(C.isDataTexture)if(ut.length>0){ft&&vt&&i.texStorage2D(r.TEXTURE_2D,Fe,He,ut[0].width,ut[0].height);for(let le=0,Ae=ut.length;le<Ae;le++)Be=ut[le],ft?te&&i.texSubImage2D(r.TEXTURE_2D,le,0,0,Be.width,Be.height,Ve,ke,Be.data):i.texImage2D(r.TEXTURE_2D,le,He,Be.width,Be.height,0,Ve,ke,Be.data);C.generateMipmaps=!1}else ft?(vt&&i.texStorage2D(r.TEXTURE_2D,Fe,He,Me.width,Me.height),te&&_e(C,Me,Ve,ke)):i.texImage2D(r.TEXTURE_2D,0,He,Me.width,Me.height,0,Ve,ke,Me.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){ft&&vt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Fe,He,ut[0].width,ut[0].height,Me.depth);for(let le=0,Ae=ut.length;le<Ae;le++)if(Be=ut[le],C.format!==Wi)if(Ve!==null)if(ft){if(te)if(C.layerUpdates.size>0){const Le=Qx(Be.width,Be.height,C.format,C.type);for(const pe of C.layerUpdates){const Pe=Be.data.subarray(pe*Le/Be.data.BYTES_PER_ELEMENT,(pe+1)*Le/Be.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,le,0,0,pe,Be.width,Be.height,1,Ve,Pe)}C.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,le,0,0,0,Be.width,Be.height,Me.depth,Ve,Be.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,le,He,Be.width,Be.height,Me.depth,0,Be.data,0,0);else ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ft?te&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,le,0,0,0,Be.width,Be.height,Me.depth,Ve,ke,Be.data):i.texImage3D(r.TEXTURE_2D_ARRAY,le,He,Be.width,Be.height,Me.depth,0,Ve,ke,Be.data)}else{ft&&vt&&i.texStorage2D(r.TEXTURE_2D,Fe,He,ut[0].width,ut[0].height);for(let le=0,Ae=ut.length;le<Ae;le++)Be=ut[le],C.format!==Wi?Ve!==null?ft?te&&i.compressedTexSubImage2D(r.TEXTURE_2D,le,0,0,Be.width,Be.height,Ve,Be.data):i.compressedTexImage2D(r.TEXTURE_2D,le,He,Be.width,Be.height,0,Be.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?te&&i.texSubImage2D(r.TEXTURE_2D,le,0,0,Be.width,Be.height,Ve,ke,Be.data):i.texImage2D(r.TEXTURE_2D,le,He,Be.width,Be.height,0,Ve,ke,Be.data)}else if(C.isDataArrayTexture)if(ft){if(vt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Fe,He,Me.width,Me.height,Me.depth),te)if(C.layerUpdates.size>0){const le=Qx(Me.width,Me.height,C.format,C.type);for(const Ae of C.layerUpdates){const Le=Me.data.subarray(Ae*le/Me.data.BYTES_PER_ELEMENT,(Ae+1)*le/Me.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ae,Me.width,Me.height,1,Ve,ke,Le)}C.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Ve,ke,Me.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,He,Me.width,Me.height,Me.depth,0,Ve,ke,Me.data);else if(C.isData3DTexture)ft?(vt&&i.texStorage3D(r.TEXTURE_3D,Fe,He,Me.width,Me.height,Me.depth),te&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Ve,ke,Me.data)):i.texImage3D(r.TEXTURE_3D,0,He,Me.width,Me.height,Me.depth,0,Ve,ke,Me.data);else if(C.isFramebufferTexture){if(vt)if(ft)i.texStorage2D(r.TEXTURE_2D,Fe,He,Me.width,Me.height);else{let le=Me.width,Ae=Me.height;for(let Le=0;Le<Fe;Le++)i.texImage2D(r.TEXTURE_2D,Le,He,le,Ae,0,Ve,ke,null),le>>=1,Ae>>=1}}else if(C.isHTMLTexture){if("texElementImage2D"in r){const le=r.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),Me.parentNode!==le){le.appendChild(Me),_.add(C),le.onpaint=we=>{const je=we.changedElements;for(const at of _)je.includes(at.image)&&(at.needsUpdate=!0)},le.requestPaint();return}const Ae=0,Le=r.RGBA,pe=r.RGBA,Pe=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,Ae,Le,pe,Pe,Me),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(ut.length>0){if(ft&&vt){const le=Ft(ut[0]);i.texStorage2D(r.TEXTURE_2D,Fe,He,le.width,le.height)}for(let le=0,Ae=ut.length;le<Ae;le++)Be=ut[le],ft?te&&i.texSubImage2D(r.TEXTURE_2D,le,0,0,Ve,ke,Be):i.texImage2D(r.TEXTURE_2D,le,He,Ve,ke,Be);C.generateMipmaps=!1}else if(ft){if(vt){const le=Ft(Me);i.texStorage2D(r.TEXTURE_2D,Fe,He,le.width,le.height)}te&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ve,ke,Me)}else i.texImage2D(r.TEXTURE_2D,0,He,Ve,ke,Me);v(C)&&P(Ee),Ge.__version=ze.version,C.onUpdate&&C.onUpdate(C)}z.__version=C.version}function Oe(z,C,ie){if(C.image.length!==6)return;const Ee=q(z,C),Ne=C.source;i.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+ie);const ze=s.get(Ne);if(Ne.version!==ze.__version||Ee===!0){i.activeTexture(r.TEXTURE0+ie);const Ge=Bt.getPrimaries(Bt.workingColorSpace),Se=C.colorSpace===ys?null:Bt.getPrimaries(C.colorSpace),Me=C.colorSpace===ys||Ge===Se?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Ve=C.isCompressedTexture||C.image[0].isCompressedTexture,ke=C.image[0]&&C.image[0].isDataTexture,He=[];for(let pe=0;pe<6;pe++)!Ve&&!ke?He[pe]=S(C.image[pe],!0,l.maxCubemapSize):He[pe]=ke?C.image[pe].image:C.image[pe],He[pe]=Ue(C,He[pe]);const Be=He[0],ut=c.convert(C.format,C.colorSpace),ft=c.convert(C.type),vt=B(C.internalFormat,ut,ft,C.normalized,C.colorSpace),te=C.isVideoTexture!==!0,Fe=ze.__version===void 0||Ee===!0,le=Ne.dataReady;let Ae=G(C,Be);K(r.TEXTURE_CUBE_MAP,C);let Le;if(Ve){te&&Fe&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ae,vt,Be.width,Be.height);for(let pe=0;pe<6;pe++){Le=He[pe].mipmaps;for(let Pe=0;Pe<Le.length;Pe++){const we=Le[Pe];C.format!==Wi?ut!==null?te?le&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe,0,0,we.width,we.height,ut,we.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe,vt,we.width,we.height,0,we.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):te?le&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe,0,0,we.width,we.height,ut,ft,we.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe,vt,we.width,we.height,0,ut,ft,we.data)}}}else{if(Le=C.mipmaps,te&&Fe){Le.length>0&&Ae++;const pe=Ft(He[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ae,vt,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(ke){te?le&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,He[pe].width,He[pe].height,ut,ft,He[pe].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,vt,He[pe].width,He[pe].height,0,ut,ft,He[pe].data);for(let Pe=0;Pe<Le.length;Pe++){const je=Le[Pe].image[pe].image;te?le&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe+1,0,0,je.width,je.height,ut,ft,je.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe+1,vt,je.width,je.height,0,ut,ft,je.data)}}else{te?le&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ut,ft,He[pe]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,vt,ut,ft,He[pe]);for(let Pe=0;Pe<Le.length;Pe++){const we=Le[Pe];te?le&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe+1,0,0,ut,ft,we.image[pe]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Pe+1,vt,ut,ft,we.image[pe])}}}v(C)&&P(r.TEXTURE_CUBE_MAP),ze.__version=Ne.version,C.onUpdate&&C.onUpdate(C)}z.__version=C.version}function be(z,C,ie,Ee,Ne,ze){const Ge=c.convert(ie.format,ie.colorSpace),Se=c.convert(ie.type),Me=B(ie.internalFormat,Ge,Se,ie.normalized,ie.colorSpace),Ve=s.get(C),ke=s.get(ie);if(ke.__renderTarget=C,!Ve.__hasExternalTextures){const He=Math.max(1,C.width>>ze),Be=Math.max(1,C.height>>ze);Ne===r.TEXTURE_3D||Ne===r.TEXTURE_2D_ARRAY?i.texImage3D(Ne,ze,Me,He,Be,C.depth,0,Ge,Se,null):i.texImage2D(Ne,ze,Me,He,Be,0,Ge,Se,null)}i.bindFramebuffer(r.FRAMEBUFFER,z),ot(C)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ee,Ne,ke.__webglTexture,0,Et(C)):(Ne===r.TEXTURE_2D||Ne>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Ne<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Ee,Ne,ke.__webglTexture,ze),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Qe(z,C,ie){if(r.bindRenderbuffer(r.RENDERBUFFER,z),C.depthBuffer){const Ee=C.depthTexture,Ne=Ee&&Ee.isDepthTexture?Ee.type:null,ze=Z(C.stencilBuffer,Ne),Ge=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ot(C)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Et(C),ze,C.width,C.height):ie?r.renderbufferStorageMultisample(r.RENDERBUFFER,Et(C),ze,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,ze,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ge,r.RENDERBUFFER,z)}else{const Ee=C.textures;for(let Ne=0;Ne<Ee.length;Ne++){const ze=Ee[Ne],Ge=c.convert(ze.format,ze.colorSpace),Se=c.convert(ze.type),Me=B(ze.internalFormat,Ge,Se,ze.normalized,ze.colorSpace);ot(C)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Et(C),Me,C.width,C.height):ie?r.renderbufferStorageMultisample(r.RENDERBUFFER,Et(C),Me,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,Me,C.width,C.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function We(z,C,ie){const Ee=C.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,z),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Ne=s.get(C.depthTexture);if(Ne.__renderTarget=C,(!Ne.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),Ee){if(Ne.__webglInit===void 0&&(Ne.__webglInit=!0,C.depthTexture.addEventListener("dispose",j)),Ne.__webglTexture===void 0){Ne.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,Ne.__webglTexture),K(r.TEXTURE_CUBE_MAP,C.depthTexture);const Ve=c.convert(C.depthTexture.format),ke=c.convert(C.depthTexture.type);let He;C.depthTexture.format===Pa?He=r.DEPTH_COMPONENT24:C.depthTexture.format===Qs&&(He=r.DEPTH24_STENCIL8);for(let Be=0;Be<6;Be++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,He,C.width,C.height,0,Ve,ke,null)}}else R(C.depthTexture,0);const ze=Ne.__webglTexture,Ge=Et(C),Se=Ee?r.TEXTURE_CUBE_MAP_POSITIVE_X+ie:r.TEXTURE_2D,Me=C.depthTexture.format===Qs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(C.depthTexture.format===Pa)ot(C)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Me,Se,ze,0,Ge):r.framebufferTexture2D(r.FRAMEBUFFER,Me,Se,ze,0);else if(C.depthTexture.format===Qs)ot(C)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Me,Se,ze,0,Ge):r.framebufferTexture2D(r.FRAMEBUFFER,Me,Se,ze,0);else throw new Error("Unknown depthTexture format")}function Ie(z){const C=s.get(z),ie=z.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==z.depthTexture){const Ee=z.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),Ee){const Ne=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,Ee.removeEventListener("dispose",Ne)};Ee.addEventListener("dispose",Ne),C.__depthDisposeCallback=Ne}C.__boundDepthTexture=Ee}if(z.depthTexture&&!C.__autoAllocateDepthBuffer)if(ie)for(let Ee=0;Ee<6;Ee++)We(C.__webglFramebuffer[Ee],z,Ee);else{const Ee=z.texture.mipmaps;Ee&&Ee.length>0?We(C.__webglFramebuffer[0],z,0):We(C.__webglFramebuffer,z,0)}else if(ie){C.__webglDepthbuffer=[];for(let Ee=0;Ee<6;Ee++)if(i.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer[Ee]),C.__webglDepthbuffer[Ee]===void 0)C.__webglDepthbuffer[Ee]=r.createRenderbuffer(),Qe(C.__webglDepthbuffer[Ee],z,!1);else{const Ne=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ze=C.__webglDepthbuffer[Ee];r.bindRenderbuffer(r.RENDERBUFFER,ze),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ne,r.RENDERBUFFER,ze)}}else{const Ee=z.texture.mipmaps;if(Ee&&Ee.length>0?i.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=r.createRenderbuffer(),Qe(C.__webglDepthbuffer,z,!1);else{const Ne=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ze=C.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ze),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ne,r.RENDERBUFFER,ze)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Je(z,C,ie){const Ee=s.get(z);C!==void 0&&be(Ee.__webglFramebuffer,z,z.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ie!==void 0&&Ie(z)}function tt(z){const C=z.texture,ie=s.get(z),Ee=s.get(C);z.addEventListener("dispose",D);const Ne=z.textures,ze=z.isWebGLCubeRenderTarget===!0,Ge=Ne.length>1;if(Ge||(Ee.__webglTexture===void 0&&(Ee.__webglTexture=r.createTexture()),Ee.__version=C.version,f.memory.textures++),ze){ie.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(C.mipmaps&&C.mipmaps.length>0){ie.__webglFramebuffer[Se]=[];for(let Me=0;Me<C.mipmaps.length;Me++)ie.__webglFramebuffer[Se][Me]=r.createFramebuffer()}else ie.__webglFramebuffer[Se]=r.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){ie.__webglFramebuffer=[];for(let Se=0;Se<C.mipmaps.length;Se++)ie.__webglFramebuffer[Se]=r.createFramebuffer()}else ie.__webglFramebuffer=r.createFramebuffer();if(Ge)for(let Se=0,Me=Ne.length;Se<Me;Se++){const Ve=s.get(Ne[Se]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=r.createTexture(),f.memory.textures++)}if(z.samples>0&&ot(z)===!1){ie.__webglMultisampledFramebuffer=r.createFramebuffer(),ie.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let Se=0;Se<Ne.length;Se++){const Me=Ne[Se];ie.__webglColorRenderbuffer[Se]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ie.__webglColorRenderbuffer[Se]);const Ve=c.convert(Me.format,Me.colorSpace),ke=c.convert(Me.type),He=B(Me.internalFormat,Ve,ke,Me.normalized,Me.colorSpace,z.isXRRenderTarget===!0),Be=Et(z);r.renderbufferStorageMultisample(r.RENDERBUFFER,Be,He,z.width,z.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.RENDERBUFFER,ie.__webglColorRenderbuffer[Se])}r.bindRenderbuffer(r.RENDERBUFFER,null),z.depthBuffer&&(ie.__webglDepthRenderbuffer=r.createRenderbuffer(),Qe(ie.__webglDepthRenderbuffer,z,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ze){i.bindTexture(r.TEXTURE_CUBE_MAP,Ee.__webglTexture),K(r.TEXTURE_CUBE_MAP,C);for(let Se=0;Se<6;Se++)if(C.mipmaps&&C.mipmaps.length>0)for(let Me=0;Me<C.mipmaps.length;Me++)be(ie.__webglFramebuffer[Se][Me],z,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Me);else be(ie.__webglFramebuffer[Se],z,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);v(C)&&P(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ge){for(let Se=0,Me=Ne.length;Se<Me;Se++){const Ve=Ne[Se],ke=s.get(Ve);let He=r.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(He=z.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(He,ke.__webglTexture),K(He,Ve),be(ie.__webglFramebuffer,z,Ve,r.COLOR_ATTACHMENT0+Se,He,0),v(Ve)&&P(He)}i.unbindTexture()}else{let Se=r.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Se=z.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Se,Ee.__webglTexture),K(Se,C),C.mipmaps&&C.mipmaps.length>0)for(let Me=0;Me<C.mipmaps.length;Me++)be(ie.__webglFramebuffer[Me],z,C,r.COLOR_ATTACHMENT0,Se,Me);else be(ie.__webglFramebuffer,z,C,r.COLOR_ATTACHMENT0,Se,0);v(C)&&P(Se),i.unbindTexture()}z.depthBuffer&&Ie(z)}function gt(z){const C=z.textures;for(let ie=0,Ee=C.length;ie<Ee;ie++){const Ne=C[ie];if(v(Ne)){const ze=V(z),Ge=s.get(Ne).__webglTexture;i.bindTexture(ze,Ge),P(ze),i.unbindTexture()}}}const pt=[],Ct=[];function $(z){if(z.samples>0){if(ot(z)===!1){const C=z.textures,ie=z.width,Ee=z.height;let Ne=r.COLOR_BUFFER_BIT;const ze=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ge=s.get(z),Se=C.length>1;if(Se)for(let Ve=0;Ve<C.length;Ve++)i.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ve,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ve,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer);const Me=z.texture.mipmaps;Me&&Me.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let Ve=0;Ve<C.length;Ve++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(Ne|=r.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(Ne|=r.STENCIL_BUFFER_BIT)),Se){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ge.__webglColorRenderbuffer[Ve]);const ke=s.get(C[Ve]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ke,0)}r.blitFramebuffer(0,0,ie,Ee,0,0,ie,Ee,Ne,r.NEAREST),m===!0&&(pt.length=0,Ct.length=0,pt.push(r.COLOR_ATTACHMENT0+Ve),z.depthBuffer&&z.resolveDepthBuffer===!1&&(pt.push(ze),Ct.push(ze),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ct)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,pt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Se)for(let Ve=0;Ve<C.length;Ve++){i.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ve,r.RENDERBUFFER,Ge.__webglColorRenderbuffer[Ve]);const ke=s.get(C[Ve]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ve,r.TEXTURE_2D,ke,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&m){const C=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[C])}}}function Et(z){return Math.min(l.maxSamples,z.samples)}function ot(z){const C=s.get(z);return z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function mt(z){const C=f.render.frame;g.get(z)!==C&&(g.set(z,C),z.update())}function Ue(z,C){const ie=z.colorSpace,Ee=z.format,Ne=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||ie!==lu&&ie!==ys&&(Bt.getTransfer(ie)===en?(Ee!==Wi||Ne!==Li)&&ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ht("WebGLTextures: Unsupported texture color space:",ie)),C}function Ft(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(h.width=z.naturalWidth||z.width,h.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(h.width=z.displayWidth,h.height=z.displayHeight):(h.width=z.width,h.height=z.height),h}this.allocateTextureUnit=N,this.resetTextureUnits=ee,this.getTextureUnits=xe,this.setTextureUnits=X,this.setTexture2D=R,this.setTexture2DArray=w,this.setTexture3D=F,this.setTextureCube=b,this.rebindTextures=Je,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=be,this.useMultisampledRTT=ot,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function kA(r,e){function i(s,l=ys){let c;const f=Bt.getTransfer(l);if(s===Li)return r.UNSIGNED_BYTE;if(s===up)return r.UNSIGNED_SHORT_4_4_4_4;if(s===fp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===B_)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===H_)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===z_)return r.BYTE;if(s===I_)return r.SHORT;if(s===cl)return r.UNSIGNED_SHORT;if(s===cp)return r.INT;if(s===aa)return r.UNSIGNED_INT;if(s===ea)return r.FLOAT;if(s===Oa)return r.HALF_FLOAT;if(s===G_)return r.ALPHA;if(s===V_)return r.RGB;if(s===Wi)return r.RGBA;if(s===Pa)return r.DEPTH_COMPONENT;if(s===Qs)return r.DEPTH_STENCIL;if(s===k_)return r.RED;if(s===dp)return r.RED_INTEGER;if(s===$s)return r.RG;if(s===hp)return r.RG_INTEGER;if(s===pp)return r.RGBA_INTEGER;if(s===$c||s===eu||s===tu||s===nu)if(f===en)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===$c)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===nu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===$c)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===eu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===tu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===nu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ah||s===Rh||s===Ch||s===wh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Ah)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Rh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ch)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===wh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Dh||s===Nh||s===Uh||s===Lh||s===Oh||s===ru||s===Ph)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Dh||s===Nh)return f===en?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Uh)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Lh)return c.COMPRESSED_R11_EAC;if(s===Oh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===ru)return c.COMPRESSED_RG11_EAC;if(s===Ph)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Fh||s===zh||s===Ih||s===Bh||s===Hh||s===Gh||s===Vh||s===kh||s===jh||s===Wh||s===Xh||s===Yh||s===qh||s===Zh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Fh)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===zh)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ih)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Bh)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Hh)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Gh)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Vh)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===kh)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===jh)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Wh)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Xh)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Yh)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===qh)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Zh)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Kh||s===Qh||s===Jh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Kh)return f===en?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Qh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Jh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===$h||s===ep||s===ou||s===tp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===$h)return c.COMPRESSED_RED_RGTC1_EXT;if(s===ep)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ou)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===tp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ul?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const jA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class XA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new ev(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new sa({vertexShader:jA,fragmentShader:WA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Fa(new xu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class YA extends Es{constructor(e,i){super();const s=this;let l=null,c=1,f=null,p="local-floor",m=1,h=null,g=null,_=null,x=null,E=null,T=null;const U=typeof XRWebGLBinding<"u",S=new XA,v={},P=i.getContextAttributes();let V=null,B=null;const Z=[],G=[],j=new Rt;let D=null;const k=new Ui;k.viewport=new vn;const J=new Ui;J.viewport=new vn;const Y=[k,J],ae=new tM;let ee=null,xe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let se=Z[q];return se===void 0&&(se=new Hd,Z[q]=se),se.getTargetRaySpace()},this.getControllerGrip=function(q){let se=Z[q];return se===void 0&&(se=new Hd,Z[q]=se),se.getGripSpace()},this.getHand=function(q){let se=Z[q];return se===void 0&&(se=new Hd,Z[q]=se),se.getHandSpace()};function X(q){const se=G.indexOf(q.inputSource);if(se===-1)return;const _e=Z[se];_e!==void 0&&(_e.update(q.inputSource,q.frame,h||f),_e.dispatchEvent({type:q.type,data:q.inputSource}))}function N(){l.removeEventListener("select",X),l.removeEventListener("selectstart",X),l.removeEventListener("selectend",X),l.removeEventListener("squeeze",X),l.removeEventListener("squeezestart",X),l.removeEventListener("squeezeend",X),l.removeEventListener("end",N),l.removeEventListener("inputsourceschange",I);for(let q=0;q<Z.length;q++){const se=G[q];se!==null&&(G[q]=null,Z[q].disconnect(se))}ee=null,xe=null,S.reset();for(const q in v)delete v[q];e.setRenderTarget(V),E=null,x=null,_=null,l=null,B=null,K.stop(),s.isPresenting=!1,e.setPixelRatio(D),e.setSize(j.width,j.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){c=q,s.isPresenting===!0&&ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){p=q,s.isPresenting===!0&&ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||f},this.setReferenceSpace=function(q){h=q},this.getBaseLayer=function(){return x!==null?x:E},this.getBinding=function(){return _===null&&U&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(q){if(l=q,l!==null){if(V=e.getRenderTarget(),l.addEventListener("select",X),l.addEventListener("selectstart",X),l.addEventListener("selectend",X),l.addEventListener("squeeze",X),l.addEventListener("squeezestart",X),l.addEventListener("squeezeend",X),l.addEventListener("end",N),l.addEventListener("inputsourceschange",I),P.xrCompatible!==!0&&await i.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(j),U&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,ve=null,Oe=null;P.depth&&(Oe=P.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,_e=P.stencil?Qs:Pa,ve=P.stencil?ul:aa);const be={colorFormat:i.RGBA8,depthFormat:Oe,scaleFactor:c};_=this.getBinding(),x=_.createProjectionLayer(be),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),B=new ia(x.textureWidth,x.textureHeight,{format:Wi,type:Li,depthTexture:new no(x.textureWidth,x.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const _e={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,i,_e),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),B=new ia(E.framebufferWidth,E.framebufferHeight,{format:Wi,type:Li,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}B.isXRRenderTarget=!0,this.setFoveation(m),h=null,f=await l.requestReferenceSpace(p),K.setContext(l),K.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function I(q){for(let se=0;se<q.removed.length;se++){const _e=q.removed[se],ve=G.indexOf(_e);ve>=0&&(G[ve]=null,Z[ve].disconnect(_e))}for(let se=0;se<q.added.length;se++){const _e=q.added[se];let ve=G.indexOf(_e);if(ve===-1){for(let be=0;be<Z.length;be++)if(be>=G.length){G.push(_e),ve=be;break}else if(G[be]===null){G[be]=_e,ve=be;break}if(ve===-1)break}const Oe=Z[ve];Oe&&Oe.connect(_e)}}const R=new ce,w=new ce;function F(q,se,_e){R.setFromMatrixPosition(se.matrixWorld),w.setFromMatrixPosition(_e.matrixWorld);const ve=R.distanceTo(w),Oe=se.projectionMatrix.elements,be=_e.projectionMatrix.elements,Qe=Oe[14]/(Oe[10]-1),We=Oe[14]/(Oe[10]+1),Ie=(Oe[9]+1)/Oe[5],Je=(Oe[9]-1)/Oe[5],tt=(Oe[8]-1)/Oe[0],gt=(be[8]+1)/be[0],pt=Qe*tt,Ct=Qe*gt,$=ve/(-tt+gt),Et=$*-tt;if(se.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Et),q.translateZ($),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Oe[10]===-1)q.projectionMatrix.copy(se.projectionMatrix),q.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const ot=Qe+$,mt=We+$,Ue=pt-Et,Ft=Ct+(ve-Et),z=Ie*We/mt*ot,C=Je*We/mt*ot;q.projectionMatrix.makePerspective(Ue,Ft,z,C,ot,mt),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function b(q,se){se===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(se.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(l===null)return;let se=q.near,_e=q.far;S.texture!==null&&(S.depthNear>0&&(se=S.depthNear),S.depthFar>0&&(_e=S.depthFar)),ae.near=J.near=k.near=se,ae.far=J.far=k.far=_e,(ee!==ae.near||xe!==ae.far)&&(l.updateRenderState({depthNear:ae.near,depthFar:ae.far}),ee=ae.near,xe=ae.far),ae.layers.mask=q.layers.mask|6,k.layers.mask=ae.layers.mask&-5,J.layers.mask=ae.layers.mask&-3;const ve=q.parent,Oe=ae.cameras;b(ae,ve);for(let be=0;be<Oe.length;be++)b(Oe[be],ve);Oe.length===2?F(ae,k,J):ae.projectionMatrix.copy(k.projectionMatrix),M(q,ae,ve)};function M(q,se,_e){_e===null?q.matrix.copy(se.matrixWorld):(q.matrix.copy(_e.matrixWorld),q.matrix.invert(),q.matrix.multiply(se.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(se.projectionMatrix),q.projectionMatrixInverse.copy(se.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ip*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return ae},this.getFoveation=function(){if(!(x===null&&E===null))return m},this.setFoveation=function(q){m=q,x!==null&&(x.fixedFoveation=q),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=q)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(ae)},this.getCameraTexture=function(q){return v[q]};let H=null;function W(q,se){if(g=se.getViewerPose(h||f),T=se,g!==null){const _e=g.views;E!==null&&(e.setRenderTargetFramebuffer(B,E.framebuffer),e.setRenderTarget(B));let ve=!1;_e.length!==ae.cameras.length&&(ae.cameras.length=0,ve=!0);for(let We=0;We<_e.length;We++){const Ie=_e[We];let Je=null;if(E!==null)Je=E.getViewport(Ie);else{const gt=_.getViewSubImage(x,Ie);Je=gt.viewport,We===0&&(e.setRenderTargetTextures(B,gt.colorTexture,gt.depthStencilTexture),e.setRenderTarget(B))}let tt=Y[We];tt===void 0&&(tt=new Ui,tt.layers.enable(We),tt.viewport=new vn,Y[We]=tt),tt.matrix.fromArray(Ie.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(Ie.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(Je.x,Je.y,Je.width,Je.height),We===0&&(ae.matrix.copy(tt.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale)),ve===!0&&ae.cameras.push(tt)}const Oe=l.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&U){_=s.getBinding();const We=_.getDepthInformation(_e[0]);We&&We.isValid&&We.texture&&S.init(We,l.renderState)}if(Oe&&Oe.includes("camera-access")&&U){e.state.unbindTexture(),_=s.getBinding();for(let We=0;We<_e.length;We++){const Ie=_e[We].camera;if(Ie){let Je=v[Ie];Je||(Je=new ev,v[Ie]=Je);const tt=_.getCameraImage(Ie);Je.sourceTexture=tt}}}}for(let _e=0;_e<Z.length;_e++){const ve=G[_e],Oe=Z[_e];ve!==null&&Oe!==void 0&&Oe.update(ve,se,h||f)}H&&H(q,se),se.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:se}),T=null}const K=new av;K.setAnimationLoop(W),this.setAnimationLoop=function(q){H=q},this.dispose=function(){}}}const qA=new Rn,fv=new _t;fv.set(-1,0,0,0,1,0,0,0,1);function ZA(r,e){function i(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function s(S,v){v.color.getRGB(S.fogColor.value,tv(r)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function l(S,v,P,V,B){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?c(S,v):v.isMeshLambertMaterial?(c(S,v),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(c(S,v),_(S,v)):v.isMeshPhongMaterial?(c(S,v),g(S,v),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(c(S,v),x(S,v),v.isMeshPhysicalMaterial&&E(S,v,B)):v.isMeshMatcapMaterial?(c(S,v),T(S,v)):v.isMeshDepthMaterial?c(S,v):v.isMeshDistanceMaterial?(c(S,v),U(S,v)):v.isMeshNormalMaterial?c(S,v):v.isLineBasicMaterial?(f(S,v),v.isLineDashedMaterial&&p(S,v)):v.isPointsMaterial?m(S,v,P,V):v.isSpriteMaterial?h(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,i(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===li&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,i(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===li&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,i(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,i(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const P=e.get(v),V=P.envMap,B=P.envMapRotation;V&&(S.envMap.value=V,S.envMapRotation.value.setFromMatrix4(qA.makeRotationFromEuler(B)).transpose(),V.isCubeTexture&&V.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(fv),S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,S.aoMapTransform))}function f(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform))}function p(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function m(S,v,P,V){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*P,S.scale.value=V*.5,v.map&&(S.map.value=v.map,i(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function h(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function g(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function _(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function x(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function E(S,v,P){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===li&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=P.texture,S.transmissionSamplerSize.value.set(P.width,P.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,v){v.matcap&&(S.matcap.value=v.matcap)}function U(S,v){const P=e.get(v).light;S.referencePosition.value.setFromMatrixPosition(P.matrixWorld),S.nearDistance.value=P.shadow.camera.near,S.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function KA(r,e,i,s){let l={},c={},f=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,V){const B=V.program;s.uniformBlockBinding(P,B)}function h(P,V){let B=l[P.id];B===void 0&&(T(P),B=g(P),l[P.id]=B,P.addEventListener("dispose",S));const Z=V.program;s.updateUBOMapping(P,Z);const G=e.render.frame;c[P.id]!==G&&(x(P),c[P.id]=G)}function g(P){const V=_();P.__bindingPointIndex=V;const B=r.createBuffer(),Z=P.__size,G=P.usage;return r.bindBuffer(r.UNIFORM_BUFFER,B),r.bufferData(r.UNIFORM_BUFFER,Z,G),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,V,B),B}function _(){for(let P=0;P<p;P++)if(f.indexOf(P)===-1)return f.push(P),P;return Ht("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(P){const V=l[P.id],B=P.uniforms,Z=P.__cache;r.bindBuffer(r.UNIFORM_BUFFER,V);for(let G=0,j=B.length;G<j;G++){const D=Array.isArray(B[G])?B[G]:[B[G]];for(let k=0,J=D.length;k<J;k++){const Y=D[k];if(E(Y,G,k,Z)===!0){const ae=Y.__offset,ee=Array.isArray(Y.value)?Y.value:[Y.value];let xe=0;for(let X=0;X<ee.length;X++){const N=ee[X],I=U(N);typeof N=="number"||typeof N=="boolean"?(Y.__data[0]=N,r.bufferSubData(r.UNIFORM_BUFFER,ae+xe,Y.__data)):N.isMatrix3?(Y.__data[0]=N.elements[0],Y.__data[1]=N.elements[1],Y.__data[2]=N.elements[2],Y.__data[3]=0,Y.__data[4]=N.elements[3],Y.__data[5]=N.elements[4],Y.__data[6]=N.elements[5],Y.__data[7]=0,Y.__data[8]=N.elements[6],Y.__data[9]=N.elements[7],Y.__data[10]=N.elements[8],Y.__data[11]=0):ArrayBuffer.isView(N)?Y.__data.set(new N.constructor(N.buffer,N.byteOffset,Y.__data.length)):(N.toArray(Y.__data,xe),xe+=I.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ae,Y.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function E(P,V,B,Z){const G=P.value,j=V+"_"+B;if(Z[j]===void 0)return typeof G=="number"||typeof G=="boolean"?Z[j]=G:ArrayBuffer.isView(G)?Z[j]=G.slice():Z[j]=G.clone(),!0;{const D=Z[j];if(typeof G=="number"||typeof G=="boolean"){if(D!==G)return Z[j]=G,!0}else{if(ArrayBuffer.isView(G))return!0;if(D.equals(G)===!1)return D.copy(G),!0}}return!1}function T(P){const V=P.uniforms;let B=0;const Z=16;for(let j=0,D=V.length;j<D;j++){const k=Array.isArray(V[j])?V[j]:[V[j]];for(let J=0,Y=k.length;J<Y;J++){const ae=k[J],ee=Array.isArray(ae.value)?ae.value:[ae.value];for(let xe=0,X=ee.length;xe<X;xe++){const N=ee[xe],I=U(N),R=B%Z,w=R%I.boundary,F=R+w;B+=w,F!==0&&Z-F<I.storage&&(B+=Z-F),ae.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=B,B+=I.storage}}}const G=B%Z;return G>0&&(B+=Z-G),P.__size=B,P.__cache={},this}function U(P){const V={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(V.boundary=4,V.storage=4):P.isVector2?(V.boundary=8,V.storage=8):P.isVector3||P.isColor?(V.boundary=16,V.storage=12):P.isVector4?(V.boundary=16,V.storage=16):P.isMatrix3?(V.boundary=48,V.storage=48):P.isMatrix4?(V.boundary=64,V.storage=64):P.isTexture?ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(P)?(V.boundary=16,V.storage=P.byteLength):ht("WebGLRenderer: Unsupported uniform value type.",P),V}function S(P){const V=P.target;V.removeEventListener("dispose",S);const B=f.indexOf(V.__bindingPointIndex);f.splice(B,1),r.deleteBuffer(l[V.id]),delete l[V.id],delete c[V.id]}function v(){for(const P in l)r.deleteBuffer(l[P]);f=[],l={},c={}}return{bind:m,update:h,dispose:v}}const QA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ji=null;function JA(){return Ji===null&&(Ji=new Bb(QA,16,16,$s,Oa),Ji.name="DFG_LUT",Ji.minFilter=Zn,Ji.magFilter=Zn,Ji.wrapS=Na,Ji.wrapT=Na,Ji.generateMipmaps=!1,Ji.needsUpdate=!0),Ji}class $A{constructor(e={}){const{canvas:i=mb(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1,outputBufferType:E=Li}=e;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=f;const U=E,S=new Set([pp,hp,dp]),v=new Set([Li,aa,cl,ul,up,fp]),P=new Uint32Array(4),V=new Int32Array(4),B=new ce;let Z=null,G=null;const j=[],D=[];let k=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=na,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const J=this;let Y=!1,ae=null;this._outputColorSpace=Ni;let ee=0,xe=0,X=null,N=-1,I=null;const R=new vn,w=new vn;let F=null;const b=new Lt(0);let M=0,H=i.width,W=i.height,K=1,q=null,se=null;const _e=new vn(0,0,H,W),ve=new vn(0,0,H,W);let Oe=!1;const be=new Q_;let Qe=!1,We=!1;const Ie=new Rn,Je=new ce,tt=new vn,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function Ct(){return X===null?K:1}let $=s;function Et(L,re){return i.getContext(L,re)}try{const L={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${lp}`),i.addEventListener("webglcontextlost",pe,!1),i.addEventListener("webglcontextrestored",Pe,!1),i.addEventListener("webglcontextcreationerror",we,!1),$===null){const re="webgl2";if($=Et(re,L),$===null)throw Et(re)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw Ht("WebGLRenderer: "+L.message),L}let ot,mt,Ue,Ft,z,C,ie,Ee,Ne,ze,Ge,Se,Me,Ve,ke,He,Be,ut,ft,vt,te,Fe,le;function Ae(){ot=new J1($),ot.init(),te=new kA($,ot),mt=new j1($,ot,e,te),Ue=new GA($,ot),mt.reversedDepthBuffer&&x&&Ue.buffers.depth.setReversed(!0),Ft=new tT($),z=new RA,C=new VA($,ot,Ue,z,mt,te,Ft),ie=new Q1(J),Ee=new sM($),Fe=new V1($,Ee),Ne=new $1($,Ee,Ft,Fe),ze=new iT($,Ne,Ee,Fe,Ft),ut=new nT($,mt,C),ke=new W1(z),Ge=new AA(J,ie,ot,mt,Fe,ke),Se=new ZA(J,z),Me=new wA,Ve=new PA(ot),Be=new G1(J,ie,Ue,ze,T,m),He=new HA(J,ze,mt),le=new KA($,Ft,mt,Ue),ft=new k1($,ot,Ft),vt=new eT($,ot,Ft),Ft.programs=Ge.programs,J.capabilities=mt,J.extensions=ot,J.properties=z,J.renderLists=Me,J.shadowMap=He,J.state=Ue,J.info=Ft}Ae(),U!==Li&&(k=new sT(U,i.width,i.height,l,c));const Le=new YA(J,$);this.xr=Le,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const L=ot.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=ot.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(L){L!==void 0&&(K=L,this.setSize(H,W,!1))},this.getSize=function(L){return L.set(H,W)},this.setSize=function(L,re,me=!0){if(Le.isPresenting){ht("WebGLRenderer: Can't change size while VR device is presenting.");return}H=L,W=re,i.width=Math.floor(L*K),i.height=Math.floor(re*K),me===!0&&(i.style.width=L+"px",i.style.height=re+"px"),k!==null&&k.setSize(i.width,i.height),this.setViewport(0,0,L,re)},this.getDrawingBufferSize=function(L){return L.set(H*K,W*K).floor()},this.setDrawingBufferSize=function(L,re,me){H=L,W=re,K=me,i.width=Math.floor(L*me),i.height=Math.floor(re*me),this.setViewport(0,0,L,re)},this.setEffects=function(L){if(U===Li){Ht("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let re=0;re<L.length;re++)if(L[re].isOutputPass===!0){ht("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(R)},this.getViewport=function(L){return L.copy(_e)},this.setViewport=function(L,re,me,de){L.isVector4?_e.set(L.x,L.y,L.z,L.w):_e.set(L,re,me,de),Ue.viewport(R.copy(_e).multiplyScalar(K).round())},this.getScissor=function(L){return L.copy(ve)},this.setScissor=function(L,re,me,de){L.isVector4?ve.set(L.x,L.y,L.z,L.w):ve.set(L,re,me,de),Ue.scissor(w.copy(ve).multiplyScalar(K).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(L){Ue.setScissorTest(Oe=L)},this.setOpaqueSort=function(L){q=L},this.setTransparentSort=function(L){se=L},this.getClearColor=function(L){return L.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(L=!0,re=!0,me=!0){let de=0;if(L){let he=!1;if(X!==null){const Ye=X.texture.format;he=S.has(Ye)}if(he){const Ye=X.texture.type,$e=v.has(Ye),Xe=Be.getClearColor(),nt=Be.getClearAlpha(),et=Xe.r,lt=Xe.g,St=Xe.b;$e?(P[0]=et,P[1]=lt,P[2]=St,P[3]=nt,$.clearBufferuiv($.COLOR,0,P)):(V[0]=et,V[1]=lt,V[2]=St,V[3]=nt,$.clearBufferiv($.COLOR,0,V))}else de|=$.COLOR_BUFFER_BIT}re&&(de|=$.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),me&&(de|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),de!==0&&$.clear(de)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),ae=L},this.dispose=function(){i.removeEventListener("webglcontextlost",pe,!1),i.removeEventListener("webglcontextrestored",Pe,!1),i.removeEventListener("webglcontextcreationerror",we,!1),Be.dispose(),Me.dispose(),Ve.dispose(),z.dispose(),ie.dispose(),ze.dispose(),Fe.dispose(),le.dispose(),Ge.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",yn),Le.removeEventListener("sessionend",za),Vn.stop()};function pe(L){L.preventDefault(),Rx("WebGLRenderer: Context Lost."),Y=!0}function Pe(){Rx("WebGLRenderer: Context Restored."),Y=!1;const L=Ft.autoReset,re=He.enabled,me=He.autoUpdate,de=He.needsUpdate,he=He.type;Ae(),Ft.autoReset=L,He.enabled=re,He.autoUpdate=me,He.needsUpdate=de,He.type=he}function we(L){Ht("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function je(L){const re=L.target;re.removeEventListener("dispose",je),at(re)}function at(L){yt(L),z.remove(L)}function yt(L){const re=z.get(L).programs;re!==void 0&&(re.forEach(function(me){Ge.releaseProgram(me)}),L.isShaderMaterial&&Ge.releaseShaderCache(L))}this.renderBufferDirect=function(L,re,me,de,he,Ye){re===null&&(re=gt);const $e=he.isMesh&&he.matrixWorld.determinant()<0,Xe=Ha(L,re,me,de,he);Ue.setMaterial(de,$e);let nt=me.index,et=1;if(de.wireframe===!0){if(nt=Ne.getWireframeAttribute(me),nt===void 0)return;et=2}const lt=me.drawRange,St=me.attributes.position;let rt=lt.start*et,Gt=(lt.start+lt.count)*et;Ye!==null&&(rt=Math.max(rt,Ye.start*et),Gt=Math.min(Gt,(Ye.start+Ye.count)*et)),nt!==null?(rt=Math.max(rt,0),Gt=Math.min(Gt,nt.count)):St!=null&&(rt=Math.max(rt,0),Gt=Math.min(Gt,St.count));const fn=Gt-rt;if(fn<0||fn===1/0)return;Fe.setup(he,de,Xe,me,nt);let rn,Zt=ft;if(nt!==null&&(rn=Ee.get(nt),Zt=vt,Zt.setIndex(rn)),he.isMesh)de.wireframe===!0?(Ue.setLineWidth(de.wireframeLinewidth*Ct()),Zt.setMode($.LINES)):Zt.setMode($.TRIANGLES);else if(he.isLine){let Kt=de.linewidth;Kt===void 0&&(Kt=1),Ue.setLineWidth(Kt*Ct()),he.isLineSegments?Zt.setMode($.LINES):he.isLineLoop?Zt.setMode($.LINE_LOOP):Zt.setMode($.LINE_STRIP)}else he.isPoints?Zt.setMode($.POINTS):he.isSprite&&Zt.setMode($.TRIANGLES);if(he.isBatchedMesh)if(ot.get("WEBGL_multi_draw"))Zt.renderMultiDraw(he._multiDrawStarts,he._multiDrawCounts,he._multiDrawCount);else{const Kt=he._multiDrawStarts,Ze=he._multiDrawCounts,kn=he._multiDrawCount,wt=nt?Ee.get(nt).bytesPerElement:1,wn=z.get(de).currentProgram.getUniforms();for(let ci=0;ci<kn;ci++)wn.setValue($,"_gl_DrawID",ci),Zt.render(Kt[ci]/wt,Ze[ci])}else if(he.isInstancedMesh)Zt.renderInstances(rt,fn,he.count);else if(me.isInstancedBufferGeometry){const Kt=me._maxInstanceCount!==void 0?me._maxInstanceCount:1/0,Ze=Math.min(me.instanceCount,Kt);Zt.renderInstances(rt,fn,Ze)}else Zt.render(rt,fn)};function zt(L,re,me){L.transparent===!0&&L.side===Da&&L.forceSinglePass===!1?(L.side=li,L.needsUpdate=!0,tr(L,re,me),L.side=bs,L.needsUpdate=!0,tr(L,re,me),L.side=Da):tr(L,re,me)}this.compile=function(L,re,me=null){me===null&&(me=L),G=Ve.get(me),G.init(re),D.push(G),me.traverseVisible(function(he){he.isLight&&he.layers.test(re.layers)&&(G.pushLight(he),he.castShadow&&G.pushShadow(he))}),L!==me&&L.traverseVisible(function(he){he.isLight&&he.layers.test(re.layers)&&(G.pushLight(he),he.castShadow&&G.pushShadow(he))}),G.setupLights();const de=new Set;return L.traverse(function(he){if(!(he.isMesh||he.isPoints||he.isLine||he.isSprite))return;const Ye=he.material;if(Ye)if(Array.isArray(Ye))for(let $e=0;$e<Ye.length;$e++){const Xe=Ye[$e];zt(Xe,me,he),de.add(Xe)}else zt(Ye,me,he),de.add(Ye)}),G=D.pop(),de},this.compileAsync=function(L,re,me=null){const de=this.compile(L,re,me);return new Promise(he=>{function Ye(){if(de.forEach(function($e){z.get($e).currentProgram.isReady()&&de.delete($e)}),de.size===0){he(L);return}setTimeout(Ye,10)}ot.get("KHR_parallel_shader_compile")!==null?Ye():setTimeout(Ye,10)})};let Cn=null;function qt(L){Cn&&Cn(L)}function yn(){Vn.stop()}function za(){Vn.start()}const Vn=new av;Vn.setAnimationLoop(qt),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(L){Cn=L,Le.setAnimationLoop(L),L===null?Vn.stop():Vn.start()},Le.addEventListener("sessionstart",yn),Le.addEventListener("sessionend",za),this.render=function(L,re){if(re!==void 0&&re.isCamera!==!0){Ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;ae!==null&&ae.renderStart(L,re);const me=Le.enabled===!0&&Le.isPresenting===!0,de=k!==null&&(X===null||me)&&k.begin(J,X);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),re.parent===null&&re.matrixWorldAutoUpdate===!0&&re.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(k===null||k.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(re),re=Le.getCamera()),L.isScene===!0&&L.onBeforeRender(J,L,re,X),G=Ve.get(L,D.length),G.init(re),G.state.textureUnits=C.getTextureUnits(),D.push(G),Ie.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),be.setFromProjectionMatrix(Ie,ta,re.reversedDepth),We=this.localClippingEnabled,Qe=ke.init(this.clippingPlanes,We),Z=Me.get(L,j.length),Z.init(),j.push(Z),Le.enabled===!0&&Le.isPresenting===!0){const $e=J.xr.getDepthSensingMesh();$e!==null&&gn($e,re,-1/0,J.sortObjects)}gn(L,re,0,J.sortObjects),Z.finish(),J.sortObjects===!0&&Z.sort(q,se),pt=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,pt&&Be.addToRenderList(Z,L),this.info.render.frame++,Qe===!0&&ke.beginShadows();const he=G.state.shadowsArray;if(He.render(he,L,re),Qe===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),(de&&k.hasRenderPass())===!1){const $e=Z.opaque,Xe=Z.transmissive;if(G.setupLights(),re.isArrayCamera){const nt=re.cameras;if(Xe.length>0)for(let et=0,lt=nt.length;et<lt;et++){const St=nt[et];ra($e,Xe,L,St)}pt&&Be.render(L);for(let et=0,lt=nt.length;et<lt;et++){const St=nt[et];Fn(Z,L,St,St.viewport)}}else Xe.length>0&&ra($e,Xe,L,re),pt&&Be.render(L),Fn(Z,L,re)}X!==null&&xe===0&&(C.updateMultisampleRenderTarget(X),C.updateRenderTargetMipmap(X)),de&&k.end(J),L.isScene===!0&&L.onAfterRender(J,L,re),Fe.resetDefaultState(),N=-1,I=null,D.pop(),D.length>0?(G=D[D.length-1],C.setTextureUnits(G.state.textureUnits),Qe===!0&&ke.setGlobalState(J.clippingPlanes,G.state.camera)):G=null,j.pop(),j.length>0?Z=j[j.length-1]:Z=null,ae!==null&&ae.renderEnd()};function gn(L,re,me,de){if(L.visible===!1)return;if(L.layers.test(re.layers)){if(L.isGroup)me=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(re);else if(L.isLightProbeGrid)G.pushLightProbeGrid(L);else if(L.isLight)G.pushLight(L),L.castShadow&&G.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||be.intersectsSprite(L)){de&&tt.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Ie);const $e=ze.update(L),Xe=L.material;Xe.visible&&Z.push(L,$e,Xe,me,tt.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||be.intersectsObject(L))){const $e=ze.update(L),Xe=L.material;if(de&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),tt.copy(L.boundingSphere.center)):($e.boundingSphere===null&&$e.computeBoundingSphere(),tt.copy($e.boundingSphere.center)),tt.applyMatrix4(L.matrixWorld).applyMatrix4(Ie)),Array.isArray(Xe)){const nt=$e.groups;for(let et=0,lt=nt.length;et<lt;et++){const St=nt[et],rt=Xe[St.materialIndex];rt&&rt.visible&&Z.push(L,$e,rt,me,tt.z,St)}}else Xe.visible&&Z.push(L,$e,Xe,me,tt.z,null)}}const Ye=L.children;for(let $e=0,Xe=Ye.length;$e<Xe;$e++)gn(Ye[$e],re,me,de)}function Fn(L,re,me,de){const{opaque:he,transmissive:Ye,transparent:$e}=L;G.setupLightsView(me),Qe===!0&&ke.setGlobalState(J.clippingPlanes,me),de&&Ue.viewport(R.copy(de)),he.length>0&&Ia(he,re,me),Ye.length>0&&Ia(Ye,re,me),$e.length>0&&Ia($e,re,me),Ue.buffers.depth.setTest(!0),Ue.buffers.depth.setMask(!0),Ue.buffers.color.setMask(!0),Ue.setPolygonOffset(!1)}function ra(L,re,me,de){if((me.isScene===!0?me.overrideMaterial:null)!==null)return;if(G.state.transmissionRenderTarget[de.id]===void 0){const rt=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");G.state.transmissionRenderTarget[de.id]=new ia(1,1,{generateMipmaps:!0,type:rt?Oa:Li,minFilter:Ks,samples:Math.max(4,mt.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Bt.workingColorSpace})}const Ye=G.state.transmissionRenderTarget[de.id],$e=de.viewport||R;Ye.setSize($e.z*J.transmissionResolutionScale,$e.w*J.transmissionResolutionScale);const Xe=J.getRenderTarget(),nt=J.getActiveCubeFace(),et=J.getActiveMipmapLevel();J.setRenderTarget(Ye),J.getClearColor(b),M=J.getClearAlpha(),M<1&&J.setClearColor(16777215,.5),J.clear(),pt&&Be.render(me);const lt=J.toneMapping;J.toneMapping=na;const St=de.viewport;if(de.viewport!==void 0&&(de.viewport=void 0),G.setupLightsView(de),Qe===!0&&ke.setGlobalState(J.clippingPlanes,de),Ia(L,me,de),C.updateMultisampleRenderTarget(Ye),C.updateRenderTargetMipmap(Ye),ot.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let Gt=0,fn=re.length;Gt<fn;Gt++){const rn=re[Gt],{object:Zt,geometry:Kt,material:Ze,group:kn}=rn;if(Ze.side===Da&&Zt.layers.test(de.layers)){const wt=Ze.side;Ze.side=li,Ze.needsUpdate=!0,ml(Zt,me,de,Kt,Ze,kn),Ze.side=wt,Ze.needsUpdate=!0,rt=!0}}rt===!0&&(C.updateMultisampleRenderTarget(Ye),C.updateRenderTargetMipmap(Ye))}J.setRenderTarget(Xe,nt,et),J.setClearColor(b,M),St!==void 0&&(de.viewport=St),J.toneMapping=lt}function Ia(L,re,me){const de=re.isScene===!0?re.overrideMaterial:null;for(let he=0,Ye=L.length;he<Ye;he++){const $e=L[he],{object:Xe,geometry:nt,group:et}=$e;let lt=$e.material;lt.allowOverride===!0&&de!==null&&(lt=de),Xe.layers.test(me.layers)&&ml(Xe,re,me,nt,lt,et)}}function ml(L,re,me,de,he,Ye){L.onBeforeRender(J,re,me,de,he,Ye),L.modelViewMatrix.multiplyMatrices(me.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),he.onBeforeRender(J,re,me,de,L,Ye),he.transparent===!0&&he.side===Da&&he.forceSinglePass===!1?(he.side=li,he.needsUpdate=!0,J.renderBufferDirect(me,re,de,he,L,Ye),he.side=bs,he.needsUpdate=!0,J.renderBufferDirect(me,re,de,he,L,Ye),he.side=Da):J.renderBufferDirect(me,re,de,he,L,Ye),L.onAfterRender(J,re,me,de,he,Ye)}function tr(L,re,me){re.isScene!==!0&&(re=gt);const de=z.get(L),he=G.state.lights,Ye=G.state.shadowsArray,$e=he.state.version,Xe=Ge.getParameters(L,he.state,Ye,re,me,G.state.lightProbeGridArray),nt=Ge.getProgramCacheKey(Xe);let et=de.programs;de.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?re.environment:null,de.fog=re.fog;const lt=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;de.envMap=ie.get(L.envMap||de.environment,lt),de.envMapRotation=de.environment!==null&&L.envMap===null?re.environmentRotation:L.envMapRotation,et===void 0&&(L.addEventListener("dispose",je),et=new Map,de.programs=et);let St=et.get(nt);if(St!==void 0){if(de.currentProgram===St&&de.lightsStateVersion===$e)return Ba(L,Xe),St}else Xe.uniforms=Ge.getUniforms(L),ae!==null&&L.isNodeMaterial&&ae.build(L,me,Xe),L.onBeforeCompile(Xe,J),St=Ge.acquireProgram(Xe,nt),et.set(nt,St),de.uniforms=Xe.uniforms;const rt=de.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(rt.clippingPlanes=ke.uniform),Ba(L,Xe),de.needsLights=Ts(L),de.lightsStateVersion=$e,de.needsLights&&(rt.ambientLightColor.value=he.state.ambient,rt.lightProbe.value=he.state.probe,rt.directionalLights.value=he.state.directional,rt.directionalLightShadows.value=he.state.directionalShadow,rt.spotLights.value=he.state.spot,rt.spotLightShadows.value=he.state.spotShadow,rt.rectAreaLights.value=he.state.rectArea,rt.ltc_1.value=he.state.rectAreaLTC1,rt.ltc_2.value=he.state.rectAreaLTC2,rt.pointLights.value=he.state.point,rt.pointLightShadows.value=he.state.pointShadow,rt.hemisphereLights.value=he.state.hemi,rt.directionalShadowMatrix.value=he.state.directionalShadowMatrix,rt.spotLightMatrix.value=he.state.spotLightMatrix,rt.spotLightMap.value=he.state.spotLightMap,rt.pointShadowMatrix.value=he.state.pointShadowMatrix),de.lightProbeGrid=G.state.lightProbeGridArray.length>0,de.currentProgram=St,de.uniformsList=null,St}function so(L){if(L.uniformsList===null){const re=L.currentProgram.getUniforms();L.uniformsList=au.seqWithValue(re.seq,L.uniforms)}return L.uniformsList}function Ba(L,re){const me=z.get(L);me.outputColorSpace=re.outputColorSpace,me.batching=re.batching,me.batchingColor=re.batchingColor,me.instancing=re.instancing,me.instancingColor=re.instancingColor,me.instancingMorph=re.instancingMorph,me.skinning=re.skinning,me.morphTargets=re.morphTargets,me.morphNormals=re.morphNormals,me.morphColors=re.morphColors,me.morphTargetsCount=re.morphTargetsCount,me.numClippingPlanes=re.numClippingPlanes,me.numIntersection=re.numClipIntersection,me.vertexAlphas=re.vertexAlphas,me.vertexTangents=re.vertexTangents,me.toneMapping=re.toneMapping}function ro(L,re){if(L.length===0)return null;if(L.length===1)return L[0].texture!==null?L[0]:null;B.setFromMatrixPosition(re.matrixWorld);for(let me=0,de=L.length;me<de;me++){const he=L[me];if(he.texture!==null&&he.boundingBox.containsPoint(B))return he}return null}function Ha(L,re,me,de,he){re.isScene!==!0&&(re=gt),C.resetTextureUnits();const Ye=re.fog,$e=de.isMeshStandardMaterial||de.isMeshLambertMaterial||de.isMeshPhongMaterial?re.environment:null,Xe=X===null?J.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Bt.workingColorSpace,nt=de.isMeshStandardMaterial||de.isMeshLambertMaterial&&!de.envMap||de.isMeshPhongMaterial&&!de.envMap,et=ie.get(de.envMap||$e,nt),lt=de.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,St=!!me.attributes.tangent&&(!!de.normalMap||de.anisotropy>0),rt=!!me.morphAttributes.position,Gt=!!me.morphAttributes.normal,fn=!!me.morphAttributes.color;let rn=na;de.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(rn=J.toneMapping);const Zt=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,Kt=Zt!==void 0?Zt.length:0,Ze=z.get(de),kn=G.state.lights;if(Qe===!0&&(We===!0||L!==I)){const Xt=L===I&&de.id===N;ke.setState(de,L,Xt)}let wt=!1;de.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==kn.state.version||Ze.outputColorSpace!==Xe||he.isBatchedMesh&&Ze.batching===!1||!he.isBatchedMesh&&Ze.batching===!0||he.isBatchedMesh&&Ze.batchingColor===!0&&he.colorTexture===null||he.isBatchedMesh&&Ze.batchingColor===!1&&he.colorTexture!==null||he.isInstancedMesh&&Ze.instancing===!1||!he.isInstancedMesh&&Ze.instancing===!0||he.isSkinnedMesh&&Ze.skinning===!1||!he.isSkinnedMesh&&Ze.skinning===!0||he.isInstancedMesh&&Ze.instancingColor===!0&&he.instanceColor===null||he.isInstancedMesh&&Ze.instancingColor===!1&&he.instanceColor!==null||he.isInstancedMesh&&Ze.instancingMorph===!0&&he.morphTexture===null||he.isInstancedMesh&&Ze.instancingMorph===!1&&he.morphTexture!==null||Ze.envMap!==et||de.fog===!0&&Ze.fog!==Ye||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==ke.numPlanes||Ze.numIntersection!==ke.numIntersection)||Ze.vertexAlphas!==lt||Ze.vertexTangents!==St||Ze.morphTargets!==rt||Ze.morphNormals!==Gt||Ze.morphColors!==fn||Ze.toneMapping!==rn||Ze.morphTargetsCount!==Kt||!!Ze.lightProbeGrid!=G.state.lightProbeGridArray.length>0)&&(wt=!0):(wt=!0,Ze.__version=de.version);let wn=Ze.currentProgram;wt===!0&&(wn=tr(de,re,he),ae&&de.isNodeMaterial&&ae.onUpdateProgram(de,wn,Ze));let ci=!1,Fi=!1,ui=!1;const Qt=wn.getUniforms(),dn=Ze.uniforms;if(Ue.useProgram(wn.program)&&(ci=!0,Fi=!0,ui=!0),de.id!==N&&(N=de.id,Fi=!0),Ze.needsLights){const Xt=ro(G.state.lightProbeGridArray,he);Ze.lightProbeGrid!==Xt&&(Ze.lightProbeGrid=Xt,Fi=!0)}if(ci||I!==L){Ue.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),Qt.setValue($,"projectionMatrix",L.projectionMatrix),Qt.setValue($,"viewMatrix",L.matrixWorldInverse);const Xi=Qt.map.cameraPosition;Xi!==void 0&&Xi.setValue($,Je.setFromMatrixPosition(L.matrixWorld)),mt.logarithmicDepthBuffer&&Qt.setValue($,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(de.isMeshPhongMaterial||de.isMeshToonMaterial||de.isMeshLambertMaterial||de.isMeshBasicMaterial||de.isMeshStandardMaterial||de.isShaderMaterial)&&Qt.setValue($,"isOrthographic",L.isOrthographicCamera===!0),I!==L&&(I=L,Fi=!0,ui=!0)}if(Ze.needsLights&&(kn.state.directionalShadowMap.length>0&&Qt.setValue($,"directionalShadowMap",kn.state.directionalShadowMap,C),kn.state.spotShadowMap.length>0&&Qt.setValue($,"spotShadowMap",kn.state.spotShadowMap,C),kn.state.pointShadowMap.length>0&&Qt.setValue($,"pointShadowMap",kn.state.pointShadowMap,C)),he.isSkinnedMesh){Qt.setOptional($,he,"bindMatrix"),Qt.setOptional($,he,"bindMatrixInverse");const Xt=he.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),Qt.setValue($,"boneTexture",Xt.boneTexture,C))}he.isBatchedMesh&&(Qt.setOptional($,he,"batchingTexture"),Qt.setValue($,"batchingTexture",he._matricesTexture,C),Qt.setOptional($,he,"batchingIdTexture"),Qt.setValue($,"batchingIdTexture",he._indirectTexture,C),Qt.setOptional($,he,"batchingColorTexture"),he._colorsTexture!==null&&Qt.setValue($,"batchingColorTexture",he._colorsTexture,C));const zi=me.morphAttributes;if((zi.position!==void 0||zi.normal!==void 0||zi.color!==void 0)&&ut.update(he,me,wn),(Fi||Ze.receiveShadow!==he.receiveShadow)&&(Ze.receiveShadow=he.receiveShadow,Qt.setValue($,"receiveShadow",he.receiveShadow)),(de.isMeshStandardMaterial||de.isMeshLambertMaterial||de.isMeshPhongMaterial)&&de.envMap===null&&re.environment!==null&&(dn.envMapIntensity.value=re.environmentIntensity),dn.dfgLUT!==void 0&&(dn.dfgLUT.value=JA()),Fi){if(Qt.setValue($,"toneMappingExposure",J.toneMappingExposure),Ze.needsLights&&Ga(dn,ui),Ye&&de.fog===!0&&Se.refreshFogUniforms(dn,Ye),Se.refreshMaterialUniforms(dn,de,K,W,G.state.transmissionRenderTarget[L.id]),Ze.needsLights&&Ze.lightProbeGrid){const Xt=Ze.lightProbeGrid;dn.probesSH.value=Xt.texture,dn.probesMin.value.copy(Xt.boundingBox.min),dn.probesMax.value.copy(Xt.boundingBox.max),dn.probesResolution.value.copy(Xt.resolution)}au.upload($,so(Ze),dn,C)}if(de.isShaderMaterial&&de.uniformsNeedUpdate===!0&&(au.upload($,so(Ze),dn,C),de.uniformsNeedUpdate=!1),de.isSpriteMaterial&&Qt.setValue($,"center",he.center),Qt.setValue($,"modelViewMatrix",he.modelViewMatrix),Qt.setValue($,"normalMatrix",he.normalMatrix),Qt.setValue($,"modelMatrix",he.matrixWorld),de.uniformsGroups!==void 0){const Xt=de.uniformsGroups;for(let Xi=0,ka=Xt.length;Xi<ka;Xi++){const As=Xt[Xi];le.update(As,wn),le.bind(As,wn)}}return wn}function Ga(L,re){L.ambientLightColor.needsUpdate=re,L.lightProbe.needsUpdate=re,L.directionalLights.needsUpdate=re,L.directionalLightShadows.needsUpdate=re,L.pointLights.needsUpdate=re,L.pointLightShadows.needsUpdate=re,L.spotLights.needsUpdate=re,L.spotLightShadows.needsUpdate=re,L.rectAreaLights.needsUpdate=re,L.hemisphereLights.needsUpdate=re}function Ts(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return ee},this.getActiveMipmapLevel=function(){return xe},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(L,re,me){const de=z.get(L);de.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,de.__autoAllocateDepthBuffer===!1&&(de.__useRenderToTexture=!1),z.get(L.texture).__webglTexture=re,z.get(L.depthTexture).__webglTexture=de.__autoAllocateDepthBuffer?void 0:me,de.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,re){const me=z.get(L);me.__webglFramebuffer=re,me.__useDefaultFramebuffer=re===void 0};const Va=$.createFramebuffer();this.setRenderTarget=function(L,re=0,me=0){X=L,ee=re,xe=me;let de=null,he=!1,Ye=!1;if(L){const Xe=z.get(L);if(Xe.__useDefaultFramebuffer!==void 0){Ue.bindFramebuffer($.FRAMEBUFFER,Xe.__webglFramebuffer),R.copy(L.viewport),w.copy(L.scissor),F=L.scissorTest,Ue.viewport(R),Ue.scissor(w),Ue.setScissorTest(F),N=-1;return}else if(Xe.__webglFramebuffer===void 0)C.setupRenderTarget(L);else if(Xe.__hasExternalTextures)C.rebindTextures(L,z.get(L.texture).__webglTexture,z.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const lt=L.depthTexture;if(Xe.__boundDepthTexture!==lt){if(lt!==null&&z.has(lt)&&(L.width!==lt.image.width||L.height!==lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(L)}}const nt=L.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Ye=!0);const et=z.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(et[re])?de=et[re][me]:de=et[re],he=!0):L.samples>0&&C.useMultisampledRTT(L)===!1?de=z.get(L).__webglMultisampledFramebuffer:Array.isArray(et)?de=et[me]:de=et,R.copy(L.viewport),w.copy(L.scissor),F=L.scissorTest}else R.copy(_e).multiplyScalar(K).floor(),w.copy(ve).multiplyScalar(K).floor(),F=Oe;if(me!==0&&(de=Va),Ue.bindFramebuffer($.FRAMEBUFFER,de)&&Ue.drawBuffers(L,de),Ue.viewport(R),Ue.scissor(w),Ue.setScissorTest(F),he){const Xe=z.get(L.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+re,Xe.__webglTexture,me)}else if(Ye){const Xe=re;for(let nt=0;nt<L.textures.length;nt++){const et=z.get(L.textures[nt]);$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+nt,et.__webglTexture,me,Xe)}}else if(L!==null&&me!==0){const Xe=z.get(L.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Xe.__webglTexture,me)}N=-1},this.readRenderTargetPixels=function(L,re,me,de,he,Ye,$e,Xe=0){if(!(L&&L.isWebGLRenderTarget)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let nt=z.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&$e!==void 0&&(nt=nt[$e]),nt){Ue.bindFramebuffer($.FRAMEBUFFER,nt);try{const et=L.textures[Xe],lt=et.format,St=et.type;if(L.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Xe),!mt.textureFormatReadable(lt)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!mt.textureTypeReadable(St)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}re>=0&&re<=L.width-de&&me>=0&&me<=L.height-he&&$.readPixels(re,me,de,he,te.convert(lt),te.convert(St),Ye)}finally{const et=X!==null?z.get(X).__webglFramebuffer:null;Ue.bindFramebuffer($.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(L,re,me,de,he,Ye,$e,Xe=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let nt=z.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&$e!==void 0&&(nt=nt[$e]),nt)if(re>=0&&re<=L.width-de&&me>=0&&me<=L.height-he){Ue.bindFramebuffer($.FRAMEBUFFER,nt);const et=L.textures[Xe],lt=et.format,St=et.type;if(L.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Xe),!mt.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!mt.textureTypeReadable(St))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const rt=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,rt),$.bufferData($.PIXEL_PACK_BUFFER,Ye.byteLength,$.STREAM_READ),$.readPixels(re,me,de,he,te.convert(lt),te.convert(St),0);const Gt=X!==null?z.get(X).__webglFramebuffer:null;Ue.bindFramebuffer($.FRAMEBUFFER,Gt);const fn=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await gb($,fn,4),$.bindBuffer($.PIXEL_PACK_BUFFER,rt),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,Ye),$.deleteBuffer(rt),$.deleteSync(fn),Ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,re=null,me=0){const de=Math.pow(2,-me),he=Math.floor(L.image.width*de),Ye=Math.floor(L.image.height*de),$e=re!==null?re.x:0,Xe=re!==null?re.y:0;C.setTexture2D(L,0),$.copyTexSubImage2D($.TEXTURE_2D,me,0,0,$e,Xe,he,Ye),Ue.unbindTexture()};const Sn=$.createFramebuffer(),gl=$.createFramebuffer();this.copyTextureToTexture=function(L,re,me=null,de=null,he=0,Ye=0){let $e,Xe,nt,et,lt,St,rt,Gt,fn;const rn=L.isCompressedTexture?L.mipmaps[Ye]:L.image;if(me!==null)$e=me.max.x-me.min.x,Xe=me.max.y-me.min.y,nt=me.isBox3?me.max.z-me.min.z:1,et=me.min.x,lt=me.min.y,St=me.isBox3?me.min.z:0;else{const dn=Math.pow(2,-he);$e=Math.floor(rn.width*dn),Xe=Math.floor(rn.height*dn),L.isDataArrayTexture?nt=rn.depth:L.isData3DTexture?nt=Math.floor(rn.depth*dn):nt=1,et=0,lt=0,St=0}de!==null?(rt=de.x,Gt=de.y,fn=de.z):(rt=0,Gt=0,fn=0);const Zt=te.convert(re.format),Kt=te.convert(re.type);let Ze;re.isData3DTexture?(C.setTexture3D(re,0),Ze=$.TEXTURE_3D):re.isDataArrayTexture||re.isCompressedArrayTexture?(C.setTexture2DArray(re,0),Ze=$.TEXTURE_2D_ARRAY):(C.setTexture2D(re,0),Ze=$.TEXTURE_2D),Ue.activeTexture($.TEXTURE0),Ue.pixelStorei($.UNPACK_FLIP_Y_WEBGL,re.flipY),Ue.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),Ue.pixelStorei($.UNPACK_ALIGNMENT,re.unpackAlignment);const kn=Ue.getParameter($.UNPACK_ROW_LENGTH),wt=Ue.getParameter($.UNPACK_IMAGE_HEIGHT),wn=Ue.getParameter($.UNPACK_SKIP_PIXELS),ci=Ue.getParameter($.UNPACK_SKIP_ROWS),Fi=Ue.getParameter($.UNPACK_SKIP_IMAGES);Ue.pixelStorei($.UNPACK_ROW_LENGTH,rn.width),Ue.pixelStorei($.UNPACK_IMAGE_HEIGHT,rn.height),Ue.pixelStorei($.UNPACK_SKIP_PIXELS,et),Ue.pixelStorei($.UNPACK_SKIP_ROWS,lt),Ue.pixelStorei($.UNPACK_SKIP_IMAGES,St);const ui=L.isDataArrayTexture||L.isData3DTexture,Qt=re.isDataArrayTexture||re.isData3DTexture;if(L.isDepthTexture){const dn=z.get(L),zi=z.get(re),Xt=z.get(dn.__renderTarget),Xi=z.get(zi.__renderTarget);Ue.bindFramebuffer($.READ_FRAMEBUFFER,Xt.__webglFramebuffer),Ue.bindFramebuffer($.DRAW_FRAMEBUFFER,Xi.__webglFramebuffer);for(let ka=0;ka<nt;ka++)ui&&($.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,z.get(L).__webglTexture,he,St+ka),$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,z.get(re).__webglTexture,Ye,fn+ka)),$.blitFramebuffer(et,lt,$e,Xe,rt,Gt,$e,Xe,$.DEPTH_BUFFER_BIT,$.NEAREST);Ue.bindFramebuffer($.READ_FRAMEBUFFER,null),Ue.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else if(he!==0||L.isRenderTargetTexture||z.has(L)){const dn=z.get(L),zi=z.get(re);Ue.bindFramebuffer($.READ_FRAMEBUFFER,Sn),Ue.bindFramebuffer($.DRAW_FRAMEBUFFER,gl);for(let Xt=0;Xt<nt;Xt++)ui?$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,dn.__webglTexture,he,St+Xt):$.framebufferTexture2D($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,dn.__webglTexture,he),Qt?$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,zi.__webglTexture,Ye,fn+Xt):$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,zi.__webglTexture,Ye),he!==0?$.blitFramebuffer(et,lt,$e,Xe,rt,Gt,$e,Xe,$.COLOR_BUFFER_BIT,$.NEAREST):Qt?$.copyTexSubImage3D(Ze,Ye,rt,Gt,fn+Xt,et,lt,$e,Xe):$.copyTexSubImage2D(Ze,Ye,rt,Gt,et,lt,$e,Xe);Ue.bindFramebuffer($.READ_FRAMEBUFFER,null),Ue.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else Qt?L.isDataTexture||L.isData3DTexture?$.texSubImage3D(Ze,Ye,rt,Gt,fn,$e,Xe,nt,Zt,Kt,rn.data):re.isCompressedArrayTexture?$.compressedTexSubImage3D(Ze,Ye,rt,Gt,fn,$e,Xe,nt,Zt,rn.data):$.texSubImage3D(Ze,Ye,rt,Gt,fn,$e,Xe,nt,Zt,Kt,rn):L.isDataTexture?$.texSubImage2D($.TEXTURE_2D,Ye,rt,Gt,$e,Xe,Zt,Kt,rn.data):L.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,Ye,rt,Gt,rn.width,rn.height,Zt,rn.data):$.texSubImage2D($.TEXTURE_2D,Ye,rt,Gt,$e,Xe,Zt,Kt,rn);Ue.pixelStorei($.UNPACK_ROW_LENGTH,kn),Ue.pixelStorei($.UNPACK_IMAGE_HEIGHT,wt),Ue.pixelStorei($.UNPACK_SKIP_PIXELS,wn),Ue.pixelStorei($.UNPACK_SKIP_ROWS,ci),Ue.pixelStorei($.UNPACK_SKIP_IMAGES,Fi),Ye===0&&re.generateMipmaps&&$.generateMipmap(Ze),Ue.unbindTexture()},this.initRenderTarget=function(L){z.get(L).__webglFramebuffer===void 0&&C.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?C.setTextureCube(L,0):L.isData3DTexture?C.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?C.setTexture2DArray(L,0):C.setTexture2D(L,0),Ue.unbindTexture()},this.resetState=function(){ee=0,xe=0,X=null,Ue.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ta}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Bt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Bt._getUnpackColorSpace()}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const su=13,Zr=1e5,ln=new Float32Array(Zr*su),At=new Lt,Yn=new Lt,qn=new Lt;function S_(r,e,i,s,l,c,f,p,m){if(m){At.set(m),r[e]=At.r,r[e+1]=At.g,r[e+2]=At.b;return}switch(i){case"solid":At.set(l),r[e]=At.r,r[e+1]=At.g,r[e+2]=At.b;break;case"rainbow":At.setHSL(s,.9,.55),r[e]=At.r,r[e+1]=At.g,r[e+2]=At.b;break;case"forest":{if(s<.2)r[e]=.4,r[e+1]=.25,r[e+2]=.13;else if(s<.7){const h=(s-.2)/.5;Yn.set("#0f766e"),qn.set("#10b981"),At.copy(Yn).lerp(qn,h),r[e]=At.r,r[e+1]=At.g,r[e+2]=At.b}else{const h=(s-.7)/.3;Yn.set("#10b981"),qn.set("#f59e0b"),At.copy(Yn).lerp(qn,h),r[e]=At.r,r[e+1]=At.g,r[e+2]=At.b}break}case"sunset":{if(s<.5){const h=s/.5;Yn.set("#ec4899"),qn.set("#f97316"),At.copy(Yn).lerp(qn,h)}else{const h=(s-.5)/.5;Yn.set("#f97316"),qn.set("#eab308"),At.copy(Yn).lerp(qn,h)}r[e]=At.r,r[e+1]=At.g,r[e+2]=At.b;break}case"depth":{const h=p-f||1,g=Math.max(0,Math.min(1,(c-f)/h));if(g<.5){const _=g/.5;Yn.set("#4f46e5"),qn.set("#06b6d4"),At.copy(Yn).lerp(qn,_)}else{const _=(g-.5)/.5;Yn.set("#06b6d4"),qn.set("#d946ef"),At.copy(Yn).lerp(qn,_)}r[e]=At.r,r[e+1]=At.g,r[e+2]=At.b;break}case"neon":{if(s<.3){const h=s/.3;Yn.set("#00f5ff"),qn.set("#9d00ff"),At.copy(Yn).lerp(qn,h)}else{const h=(s-.3)/.7;Yn.set("#9d00ff"),qn.set("#ff007f"),At.copy(Yn).lerp(qn,h)}r[e]=At.r,r[e+1]=At.g,r[e+2]=At.b;break}default:At.set(l),r[e]=At.r,r[e+1]=At.g,r[e+2]=At.b}}function jt(r,e,i,s,l,c,f,p){const m=Math.cos(f),h=Math.sin(f),g=l*i-c*e,_=c*r-s*i,x=s*e-l*r,E=(s*r+l*e+c*i)*(1-m);p.x=r*m+g*h+s*E,p.y=e*m+_*h+l*E,p.z=i*m+x*h+c*E;const T=Math.sqrt(p.x*p.x+p.y*p.y+p.z*p.z);T>1e-5&&(p.x/=T,p.y/=T,p.z/=T)}function ll(r,e,i,s,l){let c=0,f=!1,p=0,m=0;const h={};for(const b of e)b.symbol&&(h[b.symbol]=b);let g=0;const _=new Float32Array(Zr),x=new Float32Array(Zr),E=new Float32Array(Zr),T=new Float32Array(Zr);let U=0,S=0,v=0,P=0,V=1,B=0,Z=0,G=0,j=0,D=0,k=0,J=0;function Y(b,M,H){b<Z&&(Z=b),b>G&&(G=b),M<j&&(j=M),M>D&&(D=M),H<k&&(k=H),H>J&&(J=H)}const ae={};for(const b of e)b.symbol&&(b.valueExpression?ae[b.symbol]=Zs(b.valueExpression,i):b.actionType===Re.FORWARD||b.actionType===Re.FORWARD_NO_PEN?ae[b.symbol]=s:ae[b.symbol]=l);const ee={x:0,y:0,z:0};let xe=0,X=0,N=1,I=1,R=0,w=0;const F=r.length;for(let b=0;b<F;b++){const M=r[b],H=h[M];if(!H)continue;const W=ae[M]??0,K=W*Math.PI/180;switch(H.actionType){case Re.FORWARD:{U+=P*W,S+=V*W,v+=B*W,Y(U,S,v),m+=W,m>p&&(p=m),c++;break}case Re.FORWARD_NO_PEN:{U+=P*W,S+=V*W,v+=B*W,Y(U,S,v),m+=W,m>p&&(p=m);break}case Re.TURN_LEFT:{jt(P,V,B,xe,X,N,K,ee),P=ee.x,V=ee.y,B=ee.z,jt(I,R,w,xe,X,N,K,ee),I=ee.x,R=ee.y,w=ee.z;break}case Re.TURN_RIGHT:{jt(P,V,B,xe,X,N,-K,ee),P=ee.x,V=ee.y,B=ee.z,jt(I,R,w,xe,X,N,-K,ee),I=ee.x,R=ee.y,w=ee.z;break}case Re.PUSH_STATE:{g<Zr&&(_[g]=U,x[g]=S,E[g]=v,T[g]=m,g++);break}case Re.POP_STATE:{g>0&&(g--,U=_[g],S=x[g],v=E[g],m=T[g]);break}case Re.PITCH_UP:case Re.PITCH_DOWN:case Re.ROLL_LEFT:case Re.ROLL_RIGHT:case Re.YAW_LEFT:case Re.YAW_RIGHT:case Re.TURN_ROUND:{f=!0,H.actionType===Re.PITCH_UP?(jt(P,V,B,I,R,w,K,ee),P=ee.x,V=ee.y,B=ee.z,jt(xe,X,N,I,R,w,K,ee),xe=ee.x,X=ee.y,N=ee.z):H.actionType===Re.PITCH_DOWN?(jt(P,V,B,I,R,w,-K,ee),P=ee.x,V=ee.y,B=ee.z,jt(xe,X,N,I,R,w,-K,ee),xe=ee.x,X=ee.y,N=ee.z):H.actionType===Re.ROLL_LEFT?(jt(I,R,w,P,V,B,K,ee),I=ee.x,R=ee.y,w=ee.z,jt(xe,X,N,P,V,B,K,ee),xe=ee.x,X=ee.y,N=ee.z):H.actionType===Re.ROLL_RIGHT?(jt(I,R,w,P,V,B,-K,ee),I=ee.x,R=ee.y,w=ee.z,jt(xe,X,N,P,V,B,-K,ee),xe=ee.x,X=ee.y,N=ee.z):H.actionType===Re.YAW_LEFT?(jt(P,V,B,xe,X,N,K,ee),P=ee.x,V=ee.y,B=ee.z,jt(I,R,w,xe,X,N,K,ee),I=ee.x,R=ee.y,w=ee.z):H.actionType===Re.YAW_RIGHT?(jt(P,V,B,xe,X,N,-K,ee),P=ee.x,V=ee.y,B=ee.z,jt(I,R,w,xe,X,N,-K,ee),I=ee.x,R=ee.y,w=ee.z):H.actionType===Re.TURN_ROUND&&(P=-P,V=-V,B=-B,I=-I,R=-R,w=-w);break}}}return{segmentCount:c,is3D:f,boundingBox:{min:{x:Z,y:j,z:k},max:{x:G,y:D,z:J}},maxPathDist:p}}function uh(r,e,i,s,l,c,f,p,m,h,g,_,x){const E={},T={},U={};for(const R of e)R.symbol&&(E[R.symbol]=R,R.valueExpression?T[R.symbol]=Zs(R.valueExpression,i):R.actionType===Re.FORWARD||R.actionType===Re.FORWARD_NO_PEN?T[R.symbol]=s:T[R.symbol]=l,R.colorExpression&&(U[R.symbol]=PS(R.colorExpression,i)));let S=0,v=0,P=0,V=0,B=1,Z=0,G=0,j=0,D=1,k=1,J=0,Y=0,ae=0,ee=0,xe=0;const X=p/100*(x||1),N={x:0,y:0,z:0},I=r.length;for(let R=0;R<I;R++){const w=r[R],F=E[w];if(!F)continue;const b=T[w]??0,M=U[w],H=b*Math.PI/180;switch(F.actionType){case Re.FORWARD:{const W=S+V*b,K=v+B*b,q=P+Z*b,se=ae,_e=ae+b,ve=ee*6;if(m==="tree")if(X<=se)h[ve]=S,h[ve+1]=v,h[ve+2]=P,h[ve+3]=S,h[ve+4]=v,h[ve+5]=P;else if(X>=_e)h[ve]=S,h[ve+1]=v,h[ve+2]=P,h[ve+3]=W,h[ve+4]=K,h[ve+5]=q;else{const be=(X-se)/b;h[ve]=S,h[ve+1]=v,h[ve+2]=P,h[ve+3]=S+(W-S)*be,h[ve+4]=v+(K-v)*be,h[ve+5]=P+(q-P)*be}else h[ve]=S,h[ve+1]=v,h[ve+2]=P,h[ve+3]=W,h[ve+4]=K,h[ve+5]=q;const Oe=R/I;S_(g,ve,c,Oe,f,v,_.min.y,_.max.y,M),S_(g,ve+3,c,Oe,f,K,_.min.y,_.max.y,M),S=W,v=K,P=q,ae=_e,ee++;break}case Re.FORWARD_NO_PEN:{S+=V*b,v+=B*b,P+=Z*b,ae+=b;break}case Re.TURN_LEFT:{jt(V,B,Z,G,j,D,H,N),V=N.x,B=N.y,Z=N.z,jt(k,J,Y,G,j,D,H,N),k=N.x,J=N.y,Y=N.z;break}case Re.TURN_RIGHT:{jt(V,B,Z,G,j,D,-H,N),V=N.x,B=N.y,Z=N.z,jt(k,J,Y,G,j,D,-H,N),k=N.x,J=N.y,Y=N.z;break}case Re.PUSH_STATE:{const W=xe*su;W+su<ln.length&&(ln[W]=S,ln[W+1]=v,ln[W+2]=P,ln[W+3]=V,ln[W+4]=B,ln[W+5]=Z,ln[W+6]=G,ln[W+7]=j,ln[W+8]=D,ln[W+9]=k,ln[W+10]=J,ln[W+11]=Y,ln[W+12]=ae,xe++);break}case Re.POP_STATE:{if(xe>0){xe--;const W=xe*su;S=ln[W],v=ln[W+1],P=ln[W+2],V=ln[W+3],B=ln[W+4],Z=ln[W+5],G=ln[W+6],j=ln[W+7],D=ln[W+8],k=ln[W+9],J=ln[W+10],Y=ln[W+11],ae=ln[W+12]}break}case Re.PITCH_UP:{jt(V,B,Z,k,J,Y,H,N),V=N.x,B=N.y,Z=N.z,jt(G,j,D,k,J,Y,H,N),G=N.x,j=N.y,D=N.z;break}case Re.PITCH_DOWN:{jt(V,B,Z,k,J,Y,-H,N),V=N.x,B=N.y,Z=N.z,jt(G,j,D,k,J,Y,-H,N),G=N.x,j=N.y,D=N.z;break}case Re.ROLL_LEFT:{jt(k,J,Y,V,B,Z,H,N),k=N.x,J=N.y,Y=N.z,jt(G,j,D,V,B,Z,H,N),G=N.x,j=N.y,D=N.z;break}case Re.ROLL_RIGHT:{jt(k,J,Y,V,B,Z,-H,N),k=N.x,J=N.y,Y=N.z,jt(G,j,D,V,B,Z,-H,N),G=N.x,j=N.y,D=N.z;break}case Re.YAW_LEFT:{jt(V,B,Z,G,j,D,H,N),V=N.x,B=N.y,Z=N.z,jt(k,J,Y,G,j,D,H,N),k=N.x,J=N.y,Y=N.z;break}case Re.YAW_RIGHT:{jt(V,B,Z,G,j,D,-H,N),V=N.x,B=N.y,Z=N.z,jt(k,J,Y,G,j,D,-H,N),k=N.x,J=N.y,Y=N.z;break}case Re.TURN_ROUND:{V=-V,B=-B,Z=-Z,k=-k,J=-J,Y=-Y;break}}}return ee}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const yi=[{id:"sierpinski_arrow",name:"Sierpinski Arrowhead (2D)",axiom:"YF",iterations:6,rules:[{id:"sa1",inputSymbol:"X",successor:"YF+XF+Y"},{id:"sa2",inputSymbol:"Y",successor:"XF-YF-X"}],variables:[{id:"sav1",name:"angle",value:60,min:30,max:120,step:.5,animate:!1,animationSpeed:12,animationType:"ping-pong",animationDirection:1},{id:"sav2",name:"step",value:5,min:1,max:15,step:.1,animate:!1,animationSpeed:2,animationType:"ping-pong",animationDirection:1}],symbolActions:[{symbol:"F",actionType:Re.FORWARD,valueExpression:"step"},{symbol:"X",actionType:Re.NONE,valueExpression:""},{symbol:"Y",actionType:Re.NONE,valueExpression:""},{symbol:"+",actionType:Re.TURN_LEFT,valueExpression:"angle"},{symbol:"-",actionType:Re.TURN_RIGHT,valueExpression:"angle"}],renderSettings:{stepSize:5,angle:60,strokeWidth:1.5,strokeColor:"#3b82f6",backgroundColor:"#090d16",colorPalette:"rainbow",is3D:!1,showAxes:!1,growPercent:100}},{id:"dragon",name:"Dragon Curve (2D)",axiom:"FX",iterations:10,rules:[{id:"dr1",inputSymbol:"X",successor:"X+YF+"},{id:"dr2",inputSymbol:"Y",successor:"-FX-Y"}],variables:[{id:"dv1",name:"angle",value:90,min:45,max:135,step:.5,animate:!1,animationSpeed:5,animationType:"ping-pong",animationDirection:1},{id:"dv2",name:"step",value:8,min:2,max:25,step:.2,animate:!1,animationSpeed:4,animationType:"ping-pong",animationDirection:1}],symbolActions:[{symbol:"F",actionType:Re.FORWARD,valueExpression:"step"},{symbol:"+",actionType:Re.TURN_LEFT,valueExpression:"angle"},{symbol:"-",actionType:Re.TURN_RIGHT,valueExpression:"angle"},{symbol:"X",actionType:Re.NONE,valueExpression:""},{symbol:"Y",actionType:Re.NONE,valueExpression:""}],renderSettings:{stepSize:8,angle:90,strokeWidth:2.2,strokeColor:"#c084fc",backgroundColor:"#090d16",colorPalette:"sunset",is3D:!1,showAxes:!1,growPercent:100}},{id:"hilbert",name:"Hilbert Grid-Curve (2D)",axiom:"X",iterations:5,rules:[{id:"h1",inputSymbol:"X",successor:"-YF+XF+FY-X"},{id:"h2",inputSymbol:"Y",successor:"+XF-YF-FX+Y"}],variables:[{id:"hv1",name:"angle",value:90,min:45,max:135,step:.5,animate:!1,animationSpeed:10,animationType:"ping-pong",animationDirection:1},{id:"hv2",name:"step",value:6,min:1,max:20,step:.1,animate:!1,animationSpeed:3,animationType:"ping-pong",animationDirection:1}],symbolActions:[{symbol:"F",actionType:Re.FORWARD,valueExpression:"step"},{symbol:"X",actionType:Re.NONE,valueExpression:""},{symbol:"Y",actionType:Re.NONE,valueExpression:""},{symbol:"+",actionType:Re.TURN_LEFT,valueExpression:"angle"},{symbol:"-",actionType:Re.TURN_RIGHT,valueExpression:"angle"}],renderSettings:{stepSize:6,angle:90,strokeWidth:1.8,strokeColor:"#22d3ee",backgroundColor:"#090d16",colorPalette:"neon",is3D:!1,showAxes:!1,growPercent:100}},{id:"tree3d_clean",name:"Symmetric 3D Fractal Tree",axiom:"A",iterations:5,rules:[{id:"tc1",inputSymbol:"A",successor:"F[&+FA][&-FA]/A"},{id:"tc2",inputSymbol:"F",successor:"FF"}],variables:[{id:"tcv1",name:"angle",value:28,min:15,max:45,step:.5,animate:!1,animationSpeed:10,animationType:"ping-pong",animationDirection:1},{id:"tcv2",name:"step",value:4,min:1,max:10,step:.1,animate:!1,animationSpeed:2,animationType:"ping-pong",animationDirection:1}],symbolActions:[{symbol:"F",actionType:Re.FORWARD,valueExpression:"step"},{symbol:"+",actionType:Re.TURN_LEFT,valueExpression:"angle"},{symbol:"-",actionType:Re.TURN_RIGHT,valueExpression:"angle"},{symbol:"&",actionType:Re.PITCH_UP,valueExpression:"angle"},{symbol:"^",actionType:Re.PITCH_DOWN,valueExpression:"angle"},{symbol:"/",actionType:Re.ROLL_RIGHT,valueExpression:"angle"},{symbol:"\\",actionType:Re.ROLL_LEFT,valueExpression:"angle"},{symbol:"[",actionType:Re.PUSH_STATE,valueExpression:""},{symbol:"]",actionType:Re.POP_STATE,valueExpression:""},{symbol:"A",actionType:Re.NONE,valueExpression:""}],renderSettings:{stepSize:4,angle:28,strokeWidth:2,strokeColor:"#f59e0b",backgroundColor:"#090d16",colorPalette:"depth",is3D:!0,showAxes:!1,growPercent:100}},{id:"levy_c",name:"Levy C-Curve (2D)",axiom:"F",iterations:9,rules:[{id:"lc1",inputSymbol:"F",successor:"+F--F+"}],variables:[{id:"lcv1",name:"angle",value:45,min:20,max:90,step:.5,animate:!1,animationSpeed:8,animationType:"ping-pong",animationDirection:1},{id:"lcv2",name:"step",value:6,min:1,max:20,step:.1,animate:!1,animationSpeed:3,animationType:"ping-pong",animationDirection:1}],symbolActions:[{symbol:"F",actionType:Re.FORWARD,valueExpression:"step"},{symbol:"+",actionType:Re.TURN_LEFT,valueExpression:"angle"},{symbol:"-",actionType:Re.TURN_RIGHT,valueExpression:"angle"}],renderSettings:{stepSize:6,angle:45,strokeWidth:1.5,strokeColor:"#ec4899",backgroundColor:"#090d16",colorPalette:"neon",is3D:!1,showAxes:!1,growPercent:100}},{id:"koch_snowflake",name:"Koch Snowflake (2D)",axiom:"F--F--F",iterations:4,rules:[{id:"ks1",inputSymbol:"F",successor:"F+F--F+F"}],variables:[],symbolActions:[{symbol:"F",actionType:Re.FORWARD,valueExpression:"6"},{symbol:"+",actionType:Re.TURN_LEFT,valueExpression:"60"},{symbol:"-",actionType:Re.TURN_RIGHT,valueExpression:"60"}],renderSettings:{stepSize:6,angle:60,strokeWidth:1.6,strokeColor:"#38bdf8",backgroundColor:"#090d16",colorPalette:"rainbow",is3D:!1,showAxes:!1,growPercent:100}},{id:"fractal_plant",name:"Fractal Plant (2D)",axiom:"X",iterations:5,rules:[{id:"fp1",inputSymbol:"X",successor:"F+[[X]-X]-F[-FX]+X"},{id:"fp2",inputSymbol:"F",successor:"FF"}],variables:[],symbolActions:[{symbol:"F",actionType:Re.FORWARD,valueExpression:"4"},{symbol:"X",actionType:Re.NONE,valueExpression:""},{symbol:"+",actionType:Re.TURN_LEFT,valueExpression:"25"},{symbol:"-",actionType:Re.TURN_RIGHT,valueExpression:"25"},{symbol:"[",actionType:Re.PUSH_STATE,valueExpression:""},{symbol:"]",actionType:Re.POP_STATE,valueExpression:""}],renderSettings:{stepSize:4,angle:25,strokeWidth:1.4,strokeColor:"#10b981",backgroundColor:"#090d16",colorPalette:"forest",is3D:!1,showAxes:!1,growPercent:100}},{id:"3d_bush",name:"3D Cloud Bush (3D)",axiom:"F",iterations:4,rules:[{id:"bu1",inputSymbol:"F",successor:"FF+[+F-F-F]-[-F+F+F]"}],variables:[],symbolActions:[{symbol:"F",actionType:Re.FORWARD,valueExpression:"5"},{symbol:"+",actionType:Re.TURN_LEFT,valueExpression:"25"},{symbol:"-",actionType:Re.TURN_RIGHT,valueExpression:"25"},{symbol:"&",actionType:Re.PITCH_UP,valueExpression:"25"},{symbol:"^",actionType:Re.PITCH_DOWN,valueExpression:"25"},{symbol:"/",actionType:Re.ROLL_RIGHT,valueExpression:"25"},{symbol:"\\",actionType:Re.ROLL_LEFT,valueExpression:"25"},{symbol:"[",actionType:Re.PUSH_STATE,valueExpression:""},{symbol:"]",actionType:Re.POP_STATE,valueExpression:""}],renderSettings:{stepSize:5,angle:25,strokeWidth:1.8,strokeColor:"#ea580c",backgroundColor:"#090d16",colorPalette:"sunset",is3D:!0,showAxes:!1,growPercent:100}}];/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),t2=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,s)=>s?s.toUpperCase():i.toLowerCase()),b_=r=>{const e=t2(r);return e.charAt(0).toUpperCase()+e.slice(1)},dv=(...r)=>r.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim(),n2=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var i2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=Ke.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:f,...p},m)=>Ke.createElement("svg",{ref:m,...i2,width:e,height:e,stroke:r,strokeWidth:s?Number(i)*24/Number(e):i,className:dv("lucide",l),...!c&&!n2(p)&&{"aria-hidden":"true"},...p},[...f.map(([h,g])=>Ke.createElement(h,g)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yt=(r,e)=>{const i=Ke.forwardRef(({className:s,...l},c)=>Ke.createElement(a2,{ref:c,iconNode:e,className:dv(`lucide-${e2(b_(r))}`,`lucide-${r}`,s),...l}));return i.displayName=b_(r),i};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],yp=Yt("activity",s2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],hv=Yt("box",r2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],l2=Yt("check",o2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],u2=Yt("chevron-down",c2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],d2=Yt("chevron-up",f2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],pv=Yt("circle-question-mark",h2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],m2=Yt("compass",p2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],x2=Yt("copy",g2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],v2=Yt("cpu",_2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],rp=Yt("download",y2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],b2=Yt("eye",S2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M2=[["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}]],E2=Yt("file-code",M2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T2=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"10",cy:"12",r:"2",key:"737tya"}],["path",{d:"m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22",key:"wt3hpn"}]],A2=Yt("file-image",T2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R2=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]],C2=Yt("film",R2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w2=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],mv=Yt("flame",w2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D2=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],N2=Yt("grid-3x3",D2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U2=[["path",{d:"m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9",key:"1hayfq"}],["path",{d:"m18 15 4-4",key:"16gjal"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",key:"15ts47"}]],L2=Yt("hammer",U2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O2=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],gv=Yt("layers",O2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P2=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],F2=Yt("maximize-2",P2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],I2=Yt("monitor",z2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],Yr=Yt("palette",B2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],xv=Yt("pause",H2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G2=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],_v=Yt("play",G2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V2=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Sp=Yt("plus",V2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],j2=Yt("settings",k2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W2=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],X2=Yt("share-2",W2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],fh=Yt("sliders-vertical",Y2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],vv=Yt("sparkles",q2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=[["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],bp=Yt("trash",Z2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K2=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],Q2=Yt("upload",K2),J2=({activePresetId:r,onSelectPreset:e,definition:i})=>{const s=r==="custom",l=i.lastLoadedPresetId||yi[0].id,c=yi.find(p=>p.id===(s?l:r))||yi[0],f=p=>{const m=yi.find(h=>h.id===p.target.value);m&&e(m)};return A.jsxs("div",{className:"space-y-3",children:[A.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[A.jsx(m2,{className:"w-5 h-5 text-emerald-400",id:"icon-compass"}),A.jsx("h3",{className:"font-semibold text-slate-200",children:"Fractal Presets"})]}),A.jsx("p",{className:"text-xs text-slate-400 leading-relaxed text-left",children:"Select a fractal template as a starting point, then freely customize rules, variables, and symbol actions."}),A.jsxs("div",{className:"space-y-2",children:[A.jsx("div",{className:"relative",children:A.jsxs("select",{value:r,onChange:f,className:"w-full bg-slate-900 border border-slate-800 text-slate-100 text-xs p-2.5 rounded-xl focus:outline-none focus:border-emerald-500 cursor-pointer text-ellipsis overflow-hidden",children:[s&&A.jsx("option",{value:"custom",className:"bg-slate-950 text-indigo-300 font-semibold font-sans",children:"🛠️ Customized System"}),yi.map(p=>{const m=p.renderSettings.is3D?" (3D)":" (2D)";return A.jsxs("option",{value:p.id,className:"bg-slate-950 text-slate-200",children:[p.name," ",m]},p.id)})]})}),s?A.jsxs("div",{className:"bg-slate-900/40 border border-indigo-500/20 p-3 rounded-xl flex flex-col gap-2 shadow-inner",children:[A.jsxs("div",{className:"flex items-center justify-between gap-1.5 min-w-0",children:[A.jsx("span",{className:"text-xs font-semibold text-slate-200 truncate",children:"Modified System"}),A.jsx("span",{className:"text-[10px] bg-amber-500/20 text-amber-300 font-bold px-1.5 py-0.5 rounded",children:"Local edits active"})]}),A.jsx("p",{className:"text-[10px] text-slate-400 leading-relaxed text-left",children:"You customized the original configuration of this fractal. You can restore the preset's initial values at any time:"}),A.jsxs("button",{type:"button",onClick:()=>{const p=yi.find(m=>m.id===l)||yi[0];e(p)},className:"w-full py-1.5 px-3 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30 hover:border-emerald-500/50 rounded-xl text-[10px] text-center transition-all cursor-pointer focus:outline-none",children:["🔄 Restore Original Example (",(c==null?void 0:c.name)||"Original",")"]})]}):c&&A.jsxs("div",{className:"bg-slate-900/30 border border-slate-800/80 p-3 rounded-xl flex items-center justify-between gap-2.5",children:[A.jsxs("div",{className:"space-y-1 min-w-0 flex-1",children:[A.jsxs("div",{className:"flex items-center gap-1.5 min-w-0",children:[A.jsx("span",{className:"text-xs font-semibold text-slate-200 truncate",children:c.name}),c.renderSettings.is3D?A.jsx(hv,{className:"w-3.5 h-3.5 text-indigo-400 shrink-0",title:"3D L-System"}):A.jsx(gv,{className:"w-3.5 h-3.5 text-teal-400 shrink-0",title:"2D L-System"})]}),A.jsx("div",{className:"text-[10px] text-slate-400 flex flex-wrap gap-x-2 gap-y-0.5",children:A.jsxs("span",{children:["Axiom: ",A.jsx("strong",{className:"font-mono text-slate-350",children:c.axiom})]})})]}),A.jsxs("div",{className:"text-right shrink-0",children:[A.jsx("span",{className:"text-[10px] text-slate-500 block",children:"Default Iters"}),A.jsx("span",{className:"text-xs font-bold text-slate-350 font-mono",children:c.iterations})]})]})]})]})},$2=({axiom:r,onChangeAxiom:e,iterations:i,onChangeIterations:s,rules:l,onChangeRules:c,availableVariables:f,isCapped:p=!1})=>{const m=()=>{const T=`rule_${Date.now()}`;c([...l,{id:T,inputSymbol:"X",successor:"F+X"}])},h=(T,U)=>{const S=U.trim().slice(0,1);c(l.map(v=>v.id===T?{...v,inputSymbol:S}:v))},g=(T,U)=>{const S=U.replace(/\s+/g,"");c(l.map(v=>v.id===T?{...v,successor:S}:v))},_=T=>{c(l.filter(U=>U.id!==T))},x=typeof i=="number"?i:parseFloat(i),E=!isNaN(x);return A.jsxs("div",{className:"space-y-4",children:[A.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[A.jsx(j2,{className:"w-5 h-5 text-emerald-400",id:"icon-rules-settings"}),A.jsx("h3",{className:"font-semibold text-slate-200",children:"Axiom & Rules"})]}),A.jsxs("div",{className:"space-y-1",children:[A.jsx("label",{className:"text-xs font-medium text-slate-300 block",children:"Starting Axiom (seed)"}),A.jsx("input",{type:"text",value:r,onChange:T=>e(T.target.value.replace(/\s+/g,"")),placeholder:"e.g. F--F--F",id:"axiom-input",className:"w-full bg-slate-900 border border-slate-800 text-slate-100 font-mono text-sm px-3 py-2 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"}),A.jsx("p",{className:"text-[10px] text-slate-400",children:"The initial sequence of state symbols representing the foundation string."})]}),A.jsxs("div",{className:"space-y-2 pt-1",children:[A.jsxs("div",{className:"flex items-center justify-between",children:[A.jsx("label",{className:"text-xs font-medium text-slate-300",children:"Recursion Iterations"}),A.jsxs("div",{className:"flex items-center gap-1.5",children:[A.jsx("span",{className:"text-[10px] text-slate-400",children:"value expression:"}),A.jsx("input",{type:"text",value:i,onChange:T=>{const U=T.target.value,S=Number(U);s(!isNaN(S)&&U.trim()!==""?S:U)},placeholder:"e.g. 5 or n",className:"bg-slate-950 border border-slate-800 text-emerald-400 font-mono text-xs text-center px-2 py-1 rounded-lg w-28 focus:outline-none focus:border-emerald-500"})]})]}),E&&A.jsx("div",{className:"flex gap-4 items-center",children:A.jsx("input",{type:"range",min:"1",max:"12",value:x,onChange:T=>s(parseInt(T.target.value,10)),className:"w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500",id:"iterations-range-slider"})}),p&&A.jsxs("div",{className:"flex items-center gap-1.5 p-2 bg-amber-500/10 border border-amber-500/20 rounded-lg text-[10px] text-amber-400",children:[A.jsx(vv,{className:"w-3.5 h-3.5 shrink-0 animate-bounce"}),A.jsx("span",{className:"text-left flex-1",children:"Output truncated due to the current performance limit! Configure a larger or infinite limit in the Performance settings to disable truncation."})]})]}),A.jsxs("div",{className:"space-y-2 pt-2 border-t border-slate-800/80",children:[A.jsxs("div",{className:"flex items-center justify-between",children:[A.jsx("label",{className:"text-xs font-semibold text-slate-300",children:"Substitution Rules"}),A.jsxs("button",{onClick:m,type:"button",className:"flex items-center gap-1 text-[10px] font-medium text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer",id:"add-rule-btn",children:[A.jsx(Sp,{className:"w-3.5 h-3.5"}),"Add Rule"]})]}),l.length===0?A.jsx("p",{className:"text-xs text-slate-400 italic py-2 text-center bg-slate-900/40 rounded-xl border border-dashed border-slate-800",children:"No rules added. Characters remain constant."}):A.jsx("div",{className:"space-y-2.5 max-h-[220px] overflow-y-auto pr-1",children:l.map(T=>A.jsxs("div",{className:"flex items-center gap-2 p-2.5 bg-slate-900/60 rounded-xl border border-slate-800/50",children:[A.jsxs("div",{className:"w-12 shrink-0 space-y-0.5",children:[A.jsx("span",{className:"text-[9px] text-slate-400 block font-medium",children:"When"}),A.jsx("input",{type:"text",value:T.inputSymbol,onChange:U=>h(T.id,U.target.value),placeholder:"F",className:"w-full text-center bg-slate-950 border border-slate-800 text-emerald-400 font-mono font-bold text-sm py-1 rounded-lg focus:border-emerald-500 focus:outline-none",maxLength:1})]}),A.jsx("div",{className:"text-slate-500 text-xs font-bold shrink-0",children:"→"}),A.jsxs("div",{className:"flex-1 space-y-0.5",children:[A.jsx("span",{className:"text-[9px] text-slate-400 block font-medium",children:"Replace with (Successor)"}),A.jsx("input",{type:"text",value:T.successor,onChange:U=>g(T.id,U.target.value),placeholder:"F+F-F",className:"w-full bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs px-2 py-1.5 rounded-lg focus:border-emerald-500 focus:outline-none"})]}),A.jsx("button",{type:"button",onClick:()=>_(T.id),title:"Remove Rule",className:"p-1.5 text-slate-500 hover:text-rose-400 hover:bg-rose-500/5 rounded-lg transition-all mt-3.5",children:A.jsx(bp,{className:"w-3.5 h-3.5"})})]},T.id))})]})]})},eR=({symbolActions:r,onChangeSymbolActions:e,availableVariables:i})=>{const[s,l]=Ke.useState(""),[c,f]=Ke.useState(Re.FORWARD),[p,m]=Ke.useState(""),h=()=>{const T=s.trim().toUpperCase().slice(0,1);if(!T)return;if(r.some(v=>v.symbol===T)){alert(`Symbol "${T}" is already mapped to an action. Customize it directly in the list.`);return}const U=c===Re.FORWARD||c===Re.FORWARD_NO_PEN?"step":c===Re.PUSH_STATE||c===Re.POP_STATE||c===Re.NONE?"":"angle",S={symbol:T,actionType:c,valueExpression:p.trim()||U};e([...r,S]),l(""),m("")},g=(T,U)=>{e(r.map(S=>{if(S.symbol===T){let v=S.valueExpression;return(!v||v==="step"||v==="angle")&&(v=U===Re.FORWARD||U===Re.FORWARD_NO_PEN?"step":U===Re.PUSH_STATE||U===Re.POP_STATE||U===Re.NONE?"":"angle"),{...S,actionType:U,valueExpression:v}}return S}))},_=(T,U)=>{e(r.map(S=>S.symbol===T?{...S,valueExpression:U}:S))},x=(T,U)=>{e(r.map(S=>S.symbol===T?{...S,colorExpression:U}:S))},E=T=>{e(r.filter(U=>U.symbol!==T))};return A.jsxs("div",{className:"space-y-4",children:[A.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[A.jsx(L2,{className:"w-5 h-5 text-emerald-400",id:"icon-mapper"}),A.jsx("h3",{className:"font-semibold text-slate-200",children:"Symbol Actions Assignment"})]}),A.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:["Customize the turtle behavioral role of each letter symbol. You can use math variables like"," ",A.jsx("span",{className:"font-mono text-emerald-300",children:"step"})," or"," ",A.jsx("span",{className:"font-mono text-emerald-300",children:"angle"})," in expressions."]}),A.jsxs("div",{className:"bg-slate-900/40 border border-slate-800 p-3 rounded-xl space-y-2",children:[A.jsx("span",{className:"text-xs font-semibold text-slate-300",children:"Map Custom Action Character"}),A.jsxs("div",{className:"flex flex-wrap gap-2 items-end",children:[A.jsxs("div",{className:"w-16",children:[A.jsx("label",{className:"text-[10px] text-slate-400 block mb-0.5",children:"Symbol"}),A.jsx("input",{type:"text",value:s,onChange:T=>l(T.target.value),placeholder:"e.g. G",className:"w-full text-center bg-slate-950 border border-slate-800 text-slate-100 font-mono font-bold text-sm py-1.5 rounded-lg focus:border-emerald-500 focus:outline-none",maxLength:1})]}),A.jsxs("div",{className:"flex-1 min-w-[120px]",children:[A.jsx("label",{className:"text-[10px] text-slate-400 block mb-0.5",children:"Assign Role"}),A.jsxs("select",{value:c,onChange:T=>f(T.target.value),className:"w-full bg-slate-900 border border-slate-800 text-slate-200 text-xs p-1.5 rounded-lg focus:border-emerald-500 focus:outline-none cursor-pointer",children:[A.jsx("option",{value:Re.FORWARD,children:"Draw Forward (with pen)"}),A.jsx("option",{value:Re.FORWARD_NO_PEN,children:"Move Forward (no pen)"}),A.jsx("option",{value:Re.TURN_LEFT,children:"Yaw Left (Turn Left)"}),A.jsx("option",{value:Re.TURN_RIGHT,children:"Yaw Right (Turn Right)"}),A.jsx("option",{value:Re.PUSH_STATE,children:"Push State ["}),A.jsx("option",{value:Re.POP_STATE,children:"Pop State ]"}),A.jsx("option",{value:Re.PITCH_UP,children:"Pitch Up (&)"}),A.jsx("option",{value:Re.PITCH_DOWN,children:"Pitch Down (^)"}),A.jsx("option",{value:Re.ROLL_LEFT,children:"Roll Left (\\)"}),A.jsx("option",{value:Re.ROLL_RIGHT,children:"Roll Z Right (/)"}),A.jsx("option",{value:Re.TURN_ROUND,children:"Turn Round (180°)"}),A.jsx("option",{value:Re.NONE,children:"Ignore Symbol (No-op)"})]})]}),A.jsxs("div",{className:"w-24",children:[A.jsx("label",{className:"text-[10px] text-slate-400 block mb-0.5",children:"Value Expr"}),A.jsx("input",{type:"text",value:p,onChange:T=>m(T.target.value),placeholder:"step",className:"w-full bg-slate-950 border border-slate-800 text-slate-100 font-mono text-xs p-1.5 rounded-lg focus:border-emerald-500 focus:outline-none"})]}),A.jsx("button",{type:"button",onClick:h,disabled:!s.trim(),className:"p-1.5 bg-emerald-500 hover:bg-emerald-600 disabled:bg-slate-800 disabled:text-slate-600 text-slate-950 rounded-lg font-medium transition-all cursor-pointer h-9 w-9 flex items-center justify-center shrink-0",children:A.jsx(Sp,{className:"w-4 h-4"})})]})]}),A.jsx("div",{className:"space-y-2 max-h-[300px] overflow-y-auto pr-1",children:r.map(T=>{const U=T.actionType===Re.PUSH_STATE||T.actionType===Re.POP_STATE,S=T.actionType===Re.NONE;return A.jsxs("div",{className:"flex items-center gap-2 p-2 bg-slate-900/60 rounded-xl border border-slate-800/60 justify-between",children:[A.jsxs("div",{className:"flex items-center gap-3",children:[A.jsx("span",{className:"w-8 h-8 rounded-lg bg-slate-950 flex items-center justify-center border border-slate-800 font-mono font-bold text-emerald-400",children:T.symbol}),A.jsxs("div",{className:"space-y-1",children:[A.jsxs("select",{value:T.actionType,onChange:v=>g(T.symbol,v.target.value),className:"bg-transparent text-slate-200 text-xs font-semibold py-0.5 focus:outline-none cursor-pointer border-b border-dashed border-slate-700 hover:border-slate-500",children:[A.jsx("option",{className:"bg-slate-950",value:Re.FORWARD,children:"Draw Forward (Pen)"}),A.jsx("option",{className:"bg-slate-950",value:Re.FORWARD_NO_PEN,children:"Move Forward (No Pen)"}),A.jsx("option",{className:"bg-slate-950",value:Re.TURN_LEFT,children:"Yaw Left (+Z)"}),A.jsx("option",{className:"bg-slate-950",value:Re.TURN_RIGHT,children:"Yaw Right (-Z)"}),A.jsx("option",{className:"bg-slate-950",value:Re.PUSH_STATE,children:"Push State ["}),A.jsx("option",{className:"bg-slate-950",value:Re.POP_STATE,children:"Pop State ]"}),A.jsx("option",{className:"bg-slate-950",value:Re.PITCH_UP,children:"Pitch Up (&)"}),A.jsx("option",{className:"bg-slate-950",value:Re.PITCH_DOWN,children:"Pitch Down (^)"}),A.jsx("option",{className:"bg-slate-950",value:Re.ROLL_LEFT,children:"Roll Left (\\)"}),A.jsx("option",{className:"bg-slate-950",value:Re.ROLL_RIGHT,children:"Roll Right (/)"}),A.jsx("option",{className:"bg-slate-950",value:Re.TURN_ROUND,children:"Turn Round (180°)"}),A.jsx("option",{className:"bg-slate-950",value:Re.NONE,children:"Ignore Symbol"})]}),!U&&!S&&A.jsxs("div",{className:"space-y-1",children:[A.jsxs("div",{className:"flex items-center gap-1.5",children:[A.jsx("span",{className:"text-[9px] text-slate-400",children:"value expression:"}),A.jsx("input",{type:"text",value:T.valueExpression,onChange:v=>_(T.symbol,v.target.value),placeholder:"step",className:"bg-slate-950 border border-slate-800 text-slate-100 px-1 py-0.5 rounded font-mono text-[10px] w-24 focus:outline-none focus:border-emerald-500"})]}),T.actionType===Re.FORWARD&&A.jsxs("div",{className:"flex items-center gap-1.5",children:[A.jsx("span",{className:"text-[9px] text-slate-400 font-medium",children:"color expression:"}),A.jsx("input",{type:"color",value:T.colorExpression&&/^#[0-9a-f]{6}$/i.test(T.colorExpression)?T.colorExpression:"#10b981",onChange:v=>x(T.symbol,v.target.value),className:"w-4 h-4 rounded border border-slate-700 bg-transparent p-0 cursor-pointer shrink-0"}),A.jsx("input",{type:"text",value:T.colorExpression||"",onChange:v=>x(T.symbol,v.target.value),placeholder:"e.g. #ff0055 or r,g,b",className:"bg-slate-950 border border-slate-800 text-slate-100 px-1 py-0.5 rounded font-mono text-[10px] w-32 focus:outline-none focus:border-emerald-500"})]})]})]})]}),A.jsx("button",{type:"button",onClick:()=>E(T.symbol),title:"Remove state binding",className:"p-1.5 text-slate-500 hover:text-rose-400 hover:bg-rose-500/5 rounded-lg transition-all",children:A.jsx(bp,{className:"w-3.5 h-3.5"})})]},T.symbol)})})]})},tR=({variables:r,onChangeVariables:e})=>{const[i,s]=Ke.useState(""),[l,c]=Ke.useState(10),f=()=>{const g=i.trim().replace(/\s+/g,"");if(!g)return;if(g.toUpperCase()==="PI"||g.toUpperCase()==="E"){alert("Cannot name a variable after mathematical constants PI or E.");return}if(r.some(x=>x.name===g)){alert(`Variable "${g}" already exists.`);return}const _={id:`var_${Date.now()}`,name:g,value:l,min:1,max:Math.max(100,l*2),step:1,animate:!1,animationSpeed:5,animationType:"ping-pong",animationDirection:1};e([...r,_]),s("")},p=(g,_,x)=>{e(r.map(E=>E.id===g?{...E,[_]:x}:E))},m=g=>{e(r.filter(_=>_.id!==g))},h=g=>{const _=r.find(x=>x.id===g);_&&p(g,"animate",!_.animate)};return A.jsxs("div",{className:"space-y-4",children:[A.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[A.jsx(yp,{className:"w-5 h-5 text-emerald-400",id:"icon-vars"}),A.jsx("h3",{className:"font-semibold text-slate-200",children:"System Variables & Morphing"})]}),A.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:["Declare custom variables and use them in rules/actions. Activate the ",A.jsx("strong",{children:"Play"})," controls below to morph parameters dynamically!"]}),A.jsxs("div",{className:"bg-slate-900/40 border border-slate-800 p-3 rounded-xl space-y-2",children:[A.jsx("span",{className:"text-xs font-semibold text-slate-300",children:"New Variable Slider"}),A.jsxs("div",{className:"flex gap-2 items-end",children:[A.jsxs("div",{className:"flex-1",children:[A.jsx("label",{className:"text-[10px] text-slate-400 block mb-0.5",children:"Name"}),A.jsx("input",{type:"text",value:i,onChange:g=>s(g.target.value),placeholder:"e.g. theta",className:"w-full bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs px-2 py-1.5 rounded-lg focus:border-emerald-500 focus:outline-none"})]}),A.jsxs("div",{className:"w-24",children:[A.jsx("label",{className:"text-[10px] text-slate-400 block mb-0.5",children:"Init Value"}),A.jsx("input",{type:"number",value:l,onChange:g=>c(parseFloat(g.target.value)||0),className:"w-full bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs px-2 py-1.5 rounded-lg focus:border-emerald-500 focus:outline-none"})]}),A.jsxs("button",{type:"button",onClick:f,disabled:!i.trim(),className:"p-2 bg-emerald-500 hover:bg-emerald-600 disabled:bg-slate-800 disabled:text-slate-600 text-slate-950 font-semibold rounded-lg text-xs flex items-center gap-1 cursor-pointer h-[34px] shrink-0 transition-colors",children:[A.jsx(Sp,{className:"w-4 h-4"}),"Add"]})]})]}),r.length===0?A.jsx("p",{className:"text-xs text-slate-400 italic py-2 text-center bg-slate-900/40 rounded-xl border border-dashed border-slate-800",children:"No custom variables active."}):A.jsx("div",{className:"space-y-4 max-h-[350px] overflow-y-auto pr-1",children:r.map(g=>A.jsxs("div",{className:"p-3 bg-slate-900/60 rounded-xl border border-slate-800/80 space-y-2.5",children:[A.jsxs("div",{className:"flex items-center justify-between",children:[A.jsxs("div",{className:"flex items-center gap-2",children:[A.jsx("span",{className:"font-mono font-bold text-xs text-emerald-400",children:g.name}),A.jsxs("span",{className:"text-[10px] text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded-md font-mono",children:["val: ",g.value.toFixed(1)]})]}),A.jsxs("div",{className:"flex items-center gap-1.5",children:[A.jsx("button",{onClick:()=>h(g.id),type:"button",title:g.animate?"Stop Animation":"Play Morphing Animation",className:`p-1 rounded-md transition-all ${g.animate?"bg-amber-500/10 text-amber-400 border border-amber-500/20":"bg-slate-800 text-slate-400 hover:text-slate-200"}`,children:g.animate?A.jsx(xv,{className:"w-3 h-3"}):A.jsx(_v,{className:"w-3 h-3"})}),A.jsx("button",{type:"button",onClick:()=>m(g.id),title:"Delete Var",className:"p-1 text-slate-500 hover:text-rose-400 hover:bg-rose-500/5 rounded-md transition-all",children:A.jsx(bp,{className:"w-3 h-3"})})]})]}),A.jsxs("div",{className:"space-y-1",children:[A.jsx("input",{type:"range",min:g.min,max:g.max,step:g.step,value:g.value,onChange:_=>p(g.id,"value",parseFloat(_.target.value)),disabled:g.animate,className:"w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500 disabled:opacity-50"}),A.jsxs("div",{className:"grid grid-cols-3 gap-1.5 text-[9px] text-slate-400 pt-1 font-mono",children:[A.jsxs("div",{children:[A.jsx("span",{className:"block text-slate-500",children:"Min:"}),A.jsx("input",{type:"number",value:g.min,onChange:_=>p(g.id,"min",parseFloat(_.target.value)||0),className:"bg-slate-950 border border-slate-800/80 rounded w-full px-1 text-[9px]"})]}),A.jsxs("div",{children:[A.jsx("span",{className:"block text-slate-500",children:"Step:"}),A.jsx("input",{type:"number",value:g.step,onChange:_=>p(g.id,"step",parseFloat(_.target.value)||.1),className:"bg-slate-950 border border-slate-800/80 rounded w-full px-1 text-[9px]"})]}),A.jsxs("div",{children:[A.jsx("span",{className:"block text-slate-500",children:"Max:"}),A.jsx("input",{type:"number",value:g.max,onChange:_=>p(g.id,"max",parseFloat(_.target.value)||100),className:"bg-slate-950 border border-slate-800/80 rounded w-full px-1 text-[9px]"})]})]})]}),g.animate&&A.jsxs("div",{className:"grid grid-cols-2 gap-2 p-2 bg-slate-950/60 rounded-lg border border-slate-800/40 text-[10px] mt-1.5 text-slate-300",children:[A.jsxs("div",{className:"space-y-1",children:[A.jsx("span",{className:"text-[9px] text-slate-500 block",children:"Morph Speed"}),A.jsx("input",{type:"number",value:g.animationSpeed,onChange:_=>p(g.id,"animationSpeed",parseFloat(_.target.value)||0),className:"bg-slate-900 border border-slate-800 px-1 py-0.5 rounded w-full font-mono text-[9px]"})]}),A.jsxs("div",{className:"space-y-1",children:[A.jsx("span",{className:"text-[9px] text-slate-500 block",children:"Cycle Style"}),A.jsxs("select",{value:g.animationType,onChange:_=>p(g.id,"animationType",_.target.value),className:"bg-slate-900 border border-slate-800 px-1 py-0.5 rounded w-full text-[9px] cursor-pointer",children:[A.jsx("option",{value:"ping-pong",children:"Ping-Pong ⇋"}),A.jsx("option",{value:"loop",children:"Loop ↻"}),A.jsx("option",{value:"one-way",children:"One-Way →"})]})]})]})]},g.id))})]})},nR=({growPercent:r,onChangeGrowPercent:e,isGrowing:i,onToggleGrowing:s,animationStyle:l="sequential",onChangeAnimationStyle:c})=>A.jsxs("div",{className:"space-y-4",children:[A.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[A.jsx(mv,{className:"w-5 h-5 text-emerald-400",id:"icon-anims"}),A.jsx("h3",{className:"font-semibold text-slate-200",children:"Aesthetic Animations"})]}),A.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:["Control how your L-System grows or develops over time. Combine with ",A.jsx("strong",{children:"Variables Morphing"})," for breathtaking organic visual effects!"]}),A.jsxs("div",{className:"p-3 bg-slate-900/60 rounded-xl border border-slate-800/80 space-y-2.5",children:[A.jsxs("div",{className:"flex items-center justify-between",children:[A.jsxs("div",{className:"flex items-center gap-1.5",children:[A.jsx(vv,{className:"w-3.5 h-3.5 text-teal-400"}),A.jsx("span",{className:"text-xs font-semibold text-slate-300",children:"Organic Growth Simulation"})]}),A.jsxs("button",{onClick:s,type:"button",className:`px-2 py-1 rounded-md text-[10px] font-bold transition-all flex items-center gap-1 cursor-pointer ${i?"bg-teal-500/10 text-teal-300 border border-teal-500/20 animate-pulse":"bg-slate-800 text-slate-400 hover:text-slate-200"}`,id:"play-growth-anim-btn",children:[i?A.jsx(xv,{className:"w-3"}):A.jsx(_v,{className:"w-3"}),i?"Pause Growth":"Play Growth"]})]}),c&&A.jsxs("div",{className:"flex items-center justify-between text-xs pt-1 border-t border-slate-800/40",children:[A.jsx("span",{className:"text-slate-400",children:"Growth Flow Mode:"}),A.jsxs("select",{value:l,onChange:f=>c(f.target.value),className:"bg-slate-950 border border-slate-800 text-teal-400 font-mono text-[10px] p-1 rounded focus:outline-none focus:border-emerald-500 cursor-pointer",children:[A.jsx("option",{value:"sequential",children:"Line-by-Line (Sequential)"}),A.jsx("option",{value:"tree",children:"Parallel Split (Tree growth)"})]})]}),A.jsxs("div",{className:"space-y-1",children:[A.jsx("input",{type:"range",min:"1",max:"100",value:r,onChange:f=>e(parseInt(f.target.value,10)),className:"w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-500"}),A.jsxs("div",{className:"flex justify-between text-[9px] text-slate-500 font-mono",children:[A.jsx("span",{children:"Seed Base"}),A.jsxs("span",{className:"text-teal-400 font-bold",children:[r,"% Grown"]}),A.jsx("span",{children:"Fully Unfolded"})]})]})]})]}),iR=({onExportPng:r,onExportSvg:e,onExportGif:i})=>{const[s,l]=Ke.useState("png"),[c,f]=Ke.useState("fullhd"),[p,m]=Ke.useState(2e3),[h,g]=Ke.useState(2e3),[_,x]=Ke.useState(15),[E,T]=Ke.useState(100),[U,S]=Ke.useState(400),[v,P]=Ke.useState(400),[V,B]=Ke.useState(0),[Z,G]=Ke.useState(100),[j,D]=Ke.useState(!1),[k,J]=Ke.useState(0),[Y,ae]=Ke.useState(""),ee=()=>{switch(c){case"fullhd":return{width:1920,height:1080};case"4k":return{width:3840,height:2160};case"square":return{width:1200,height:1200};case"custom":default:return{width:p,height:h}}},xe=async()=>{if(s==="png"){const X=ee(),N=r(X);if(!N){alert("Failed to render PNG screenshot. Ensure the renderer is ready.");return}const I=document.createElement("a");I.href=N,I.download=`lsystem_${X.width}x${X.height}.png`,document.body.appendChild(I),I.click(),document.body.removeChild(I)}else if(s==="svg"){const X=e();if(!X){alert("Failed to compile SVG content.");return}const N=new Blob([X],{type:"image/svg+xml;charset=utf-8"}),I=URL.createObjectURL(N),R=document.createElement("a");R.href=I,R.download="lsystem_vector.svg",document.body.appendChild(R),R.click(),document.body.removeChild(R),URL.revokeObjectURL(I)}else if(s==="gif"&&i)try{D(!0),J(5),ae("Initializing GIF animation...");const X=await i({frames:_,delay:E,startPercent:V,endPercent:Z,width:U,height:v,onProgress:I=>{J(I),I<50?ae(`Capturing animation frames: ${Math.round(I*2)}%...`):I<100?ae(`Assembling and encoding your GIF... ${I}%`):ae("Completed! File is ready for download.")}}),N=document.createElement("a");N.href=X,N.download="lsystem_animation.gif",document.body.appendChild(N),N.click(),document.body.removeChild(N),J(100),ae("GIF downloaded successfully!")}catch(X){alert(`Error generating GIF: ${X.message||X}`)}finally{setTimeout(()=>{D(!1),J(0)},1500)}};return A.jsxs("div",{className:"space-y-4",children:[A.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[A.jsx(rp,{className:"w-5 h-5 text-emerald-400",id:"icon-export"}),A.jsx("h3",{className:"font-semibold text-slate-200",children:"Export Exporter"})]}),A.jsx("p",{className:"text-xs text-slate-400 leading-relaxed text-left",children:"Save your masterpiece in seconds! Choose between a high-resolution PNG image, a vector SVG file, or an animated GIF of the growing fractal."}),A.jsxs("div",{className:"grid grid-cols-3 gap-1 p-1 bg-slate-950 border border-slate-800 rounded-xl",children:[A.jsxs("button",{type:"button",onClick:()=>l("png"),className:`flex flex-col sm:flex-row items-center justify-center gap-1.5 py-2 px-1 rounded-lg text-[11px] font-medium cursor-pointer transition-all ${s==="png"?"bg-slate-800 text-slate-100 shadow-sm":"text-slate-400 hover:text-slate-200"}`,children:[A.jsx(A2,{className:"w-3.5 h-3.5 shrink-0"}),"PNG"]}),A.jsxs("button",{type:"button",onClick:()=>l("svg"),className:`flex flex-col sm:flex-row items-center justify-center gap-1.5 py-2 px-1 rounded-lg text-[11px] font-medium cursor-pointer transition-all ${s==="svg"?"bg-slate-800 text-slate-100 shadow-sm":"text-slate-400 hover:text-slate-200"}`,children:[A.jsx(E2,{className:"w-3.5 h-3.5 shrink-0"}),"SVG"]}),A.jsxs("button",{type:"button",onClick:()=>l("gif"),className:`flex flex-col sm:flex-row items-center justify-center gap-1.5 py-2 px-1 rounded-lg text-[11px] font-medium cursor-pointer transition-all ${s==="gif"?"bg-slate-800 text-slate-100 shadow-sm":"text-slate-400 hover:text-slate-200"}`,children:[A.jsx(C2,{className:"w-3.5 h-3.5 shrink-0 text-emerald-400"}),"Animated GIF"]})]}),s==="png"&&A.jsxs("div",{className:"space-y-3 bg-slate-900/40 p-3 rounded-xl border border-slate-800",children:[A.jsx("span",{className:"text-xs font-semibold text-slate-300 block text-left",children:"Image Resolution (PNG)"}),A.jsx("div",{className:"grid grid-cols-2 gap-2 text-left",children:[{id:"fullhd",label:"Full HD (1080p)",desc:"1920 × 1080"},{id:"4k",label:"Ultra HD (4K)",desc:"3840 × 2160"},{id:"square",label:"Square Studio",desc:"1200 × 1200"},{id:"custom",label:"Custom Pixels",desc:"Custom size"}].map(X=>A.jsxs("button",{type:"button",onClick:()=>f(X.id),className:`p-2 rounded-lg border text-left cursor-pointer transition-all ${c===X.id?"bg-emerald-500/10 border-emerald-500 text-emerald-200":"bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700"}`,children:[A.jsx("div",{className:"text-[10px] font-bold block",children:X.label}),A.jsx("div",{className:"text-[9px] text-slate-400 font-mono mt-0.5",children:X.desc})]},X.id))}),c==="custom"&&A.jsxs("div",{className:"grid grid-cols-2 gap-2 pt-2 border-t border-slate-800",children:[A.jsxs("div",{className:"space-y-0.5 text-left",children:[A.jsx("span",{className:"text-[9px] text-slate-400 font-mono",children:"Width (px)"}),A.jsx("input",{type:"number",value:p,onChange:X=>m(Math.max(100,parseInt(X.target.value,10)||500)),className:"w-full bg-slate-950 border border-slate-800 text-slate-200 font-mono text-center text-xs p-1.5 rounded-lg focus:outline-none"})]}),A.jsxs("div",{className:"space-y-0.5 text-left",children:[A.jsx("span",{className:"text-[9px] text-slate-400 font-mono",children:"Height (px)"}),A.jsx("input",{type:"number",value:h,onChange:X=>g(Math.max(100,parseInt(X.target.value,10)||500)),className:"w-full bg-slate-950 border border-slate-800 text-slate-200 font-mono text-center text-xs p-1.5 rounded-lg focus:outline-none"})]})]})]}),s==="svg"&&A.jsxs("div",{className:"p-3 bg-emerald-500/5 border border-emerald-500/10 rounded-xl space-y-1 text-left",children:[A.jsxs("span",{className:"text-xs font-semibold text-emerald-400 flex items-center gap-1 justify-start",children:[A.jsx(I2,{className:"w-3.5 h-3.5"})," Infinite Vector File"]}),A.jsx("p",{className:"text-[10px] text-slate-400 leading-relaxed",children:"SVG vector graphics are scale-independent because they use math coordinate lines instead of pixels. You can scale them to any magnitude without ever losing quality! Ideal for large-scale prints or editor importing."})]}),s==="gif"&&A.jsxs("div",{className:"space-y-3 bg-slate-900/40 p-3 rounded-xl border border-slate-800",children:[A.jsx("span",{className:"text-xs font-semibold text-slate-300 block text-left",children:"Animated GIF Settings"}),A.jsxs("div",{className:"space-y-2 text-left",children:[A.jsxs("div",{children:[A.jsx("span",{className:"text-[10px] text-slate-400 block mb-1",children:"Output resolution (high resolutions require more rendering computation):"}),A.jsx("div",{className:"grid grid-cols-2 gap-1.5 text-center mb-2",children:[{label:"Fast (300px)",w:300,h:300},{label:"Standard (400px)",w:400,h:400},{label:"High HD (600px)",w:600,h:600},{label:"Max Quality (800px)",w:800,h:800}].map(X=>A.jsxs("button",{type:"button",onClick:()=>{S(X.w),P(X.h)},className:`py-1 rounded font-mono text-[9px] font-bold border transition-all cursor-pointer ${U===X.w?"bg-emerald-500/20 text-emerald-200 border-emerald-500/50":"bg-slate-950 text-slate-400 border-slate-800"}`,children:[X.label," - ",X.w,"x",X.h]},X.label))}),A.jsxs("div",{className:"grid grid-cols-2 gap-2 pt-1",children:[A.jsxs("div",{className:"space-y-0.5 text-left",children:[A.jsx("span",{className:"text-[9px] text-slate-500",children:"GIF Width (px)"}),A.jsx("input",{type:"number",value:U,onChange:X=>S(Math.max(100,Math.min(2e3,parseInt(X.target.value,10)||400))),className:"w-full bg-slate-950 border border-slate-800 text-slate-200 font-mono text-center text-xs p-1 rounded focus:outline-none"})]}),A.jsxs("div",{className:"space-y-0.5 text-left",children:[A.jsx("span",{className:"text-[9px] text-slate-500",children:"GIF Height (px)"}),A.jsx("input",{type:"number",value:v,onChange:X=>P(Math.max(100,Math.min(2e3,parseInt(X.target.value,10)||400))),className:"w-full bg-slate-950 border border-slate-800 text-slate-200 font-mono text-center text-xs p-1 rounded focus:outline-none"})]})]})]}),A.jsxs("div",{className:"pt-1.5 border-t border-slate-800/60",children:[A.jsxs("div",{className:"flex justify-between text-[10px] text-slate-400 font-mono mb-1",children:[A.jsx("span",{children:"Animation frames:"}),A.jsxs("span",{className:"text-emerald-400 font-bold",children:[_," frames"]})]}),A.jsx("input",{type:"range",min:"5",max:"30",step:"1",value:_,onChange:X=>x(parseInt(X.target.value,10)),className:"w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"})]}),A.jsxs("div",{className:"pt-1.5 border-t border-slate-800/60",children:[A.jsxs("div",{className:"flex justify-between text-[10px] text-slate-400 font-mono mb-1",children:[A.jsx("span",{children:"Frame delay:"}),A.jsxs("span",{className:"text-emerald-400 font-bold",children:[E,"ms"]})]}),A.jsx("input",{type:"range",min:"40",max:"400",step:"10",value:E,onChange:X=>T(parseInt(X.target.value,10)),className:"w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"})]}),A.jsxs("div",{className:"pt-1.5 border-t border-slate-800/60 grid grid-cols-2 gap-2 text-left",children:[A.jsxs("div",{children:[A.jsx("span",{className:"text-[9px] text-slate-500 block",children:"End Stage (%):"}),A.jsx("input",{type:"number",min:"5",max:"100",value:Z,onChange:X=>G(Math.min(100,Math.max(V+5,parseInt(X.target.value)||100))),className:"w-full bg-slate-950 border border-slate-800 text-slate-200 text-center font-mono text-[10px] py-1 rounded focus:outline-none"})]}),A.jsxs("div",{children:[A.jsx("span",{className:"text-[9px] text-slate-500 block",children:"Start Stage (%):"}),A.jsx("input",{type:"number",min:"0",max:"95",value:V,onChange:X=>B(Math.max(0,Math.min(Z-5,parseInt(X.target.value)||0))),className:"w-full bg-slate-950 border border-slate-800 text-slate-200 text-center font-mono text-[10px] py-1 rounded focus:outline-none"})]})]})]})]}),A.jsxs("button",{onClick:xe,disabled:j,type:"button",className:"w-full py-2.5 px-4 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-slate-950 rounded-xl font-bold text-sm shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all hover:translate-y-[-1px] active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed",id:"export-trigger-btn",children:[j?A.jsx(yp,{className:"w-4 h-4 animate-spin text-slate-950"}):A.jsx(rp,{className:"w-4 h-4"}),j?"Exporting Animation...":`Generate & Download ${s.toUpperCase()}`]}),j&&A.jsxs("div",{className:"p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-2 text-left",children:[A.jsxs("div",{className:"flex justify-between text-[10px] font-mono text-slate-400",children:[A.jsx("span",{children:"GIF Processing Status"}),A.jsxs("span",{children:[k,"%"]})]}),A.jsx("div",{className:"w-full h-1.5 bg-slate-950 rounded-full overflow-hidden",children:A.jsx("div",{className:"h-full bg-emerald-500 transition-all duration-300",style:{width:`${k}%`}})}),A.jsx("div",{className:"text-[10px] text-slate-300 font-medium",children:Y})]})]})};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function aR(r){try{const e={n:r.name,a:r.axiom,i:r.iterations,r:r.rules.map(l=>({k:l.inputSymbol,s:l.successor})),v:r.variables.map(l=>({n:l.name,v:l.value,mi:l.min,ma:l.max,s:l.step,an:l.animate,sp:l.animationSpeed,at:l.animationType})),sa:r.symbolActions.map(l=>({s:l.symbol,at:l.actionType,ex:l.valueExpression})),rs:{sz:r.renderSettings.stepSize,a:r.renderSettings.angle,sw:r.renderSettings.strokeWidth,sc:r.renderSettings.strokeColor,bc:r.renderSettings.backgroundColor,cp:r.renderSettings.colorPalette,i3:r.renderSettings.is3D,sa:r.renderSettings.showAxes}},i=JSON.stringify(e);return btoa(encodeURIComponent(i))}catch(e){return console.error("Failed to compress state for URL sharing",e),""}}function M_(r){if(!r)return null;try{const e=decodeURIComponent(atob(r)),i=JSON.parse(e),s=(i.r||[]).map((m,h)=>({id:`r_${h}`,inputSymbol:m.k||"",successor:m.s||""})),l=(i.v||[]).map((m,h)=>({id:`v_${h}`,name:m.n||"",value:typeof m.v=="number"?m.v:0,min:typeof m.mi=="number"?m.mi:0,max:typeof m.ma=="number"?m.ma:100,step:typeof m.s=="number"?m.s:1,animate:!!m.an,animationSpeed:typeof m.sp=="number"?m.sp:5,animationType:m.at||"ping-pong",animationDirection:1})),c=(i.sa||[]).map(m=>({symbol:m.s||"",actionType:m.at||Re.NONE,valueExpression:m.ex||""})),f=i.rs||{},p={stepSize:typeof f.sz=="number"?f.sz:5,angle:typeof f.a=="number"?f.a:25,strokeWidth:typeof f.sw=="number"?f.sw:2,strokeColor:f.sc||"#10b981",backgroundColor:f.bc||"#090d16",colorPalette:f.cp||"solid",is3D:!!f.i3,showAxes:!!f.sa,growPercent:100};return{name:i.n||"Shared L-System",axiom:i.a||"",iterations:typeof i.i=="number"?i.i:3,rules:s,variables:l,symbolActions:c,renderSettings:p}}catch(e){return console.error("Failed to decompress state from URL hash",e),null}}const sR=({currentLSystem:r,onLoadSystem:e})=>{const[i,s]=Ke.useState(!1),l=Ke.useRef(null),c=()=>{const g=aR(r);return g?`${window.location.origin}${window.location.pathname}#share=${g}`:""},f=()=>{const g=c();g&&navigator.clipboard.writeText(g).then(()=>{s(!0),setTimeout(()=>s(!1),2500)}).catch(_=>{console.error("Failed to copy URL",_)})},p=()=>{try{const g=JSON.stringify(r,null,2),_="data:application/json;charset=utf-8,"+encodeURIComponent(g),x=`${r.name.toLowerCase().replace(/\s+/g,"_")}_config.json`,E=document.createElement("a");E.setAttribute("href",_),E.setAttribute("download",x),document.body.appendChild(E),E.click(),document.body.removeChild(E)}catch(g){console.error("Failed to export JSON file.",g)}},m=g=>{var E;const _=(E=g.target.files)==null?void 0:E[0];if(!_)return;const x=new FileReader;x.onload=T=>{var U;try{const S=JSON.parse((U=T.target)==null?void 0:U.result);if(typeof S.axiom=="string"&&Array.isArray(S.rules)){const v={...S,id:S.id||`loaded_${Date.now()}`,name:S.name||"Imported Custom L-System"};e(v),alert(`Successfully loaded: "${v.name}"`)}else alert("Invalid L-System configuration file structure. Missing axiom or rules list.")}catch{alert("Failed to parse JSON configuration file. Check syntax.")}},x.readAsText(_),l.current&&(l.current.value="")},h=()=>{var g;(g=l.current)==null||g.click()};return A.jsxs("div",{className:"space-y-4",children:[A.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[A.jsx(X2,{className:"w-5 h-5 text-emerald-400",id:"icon-share"}),A.jsx("h3",{className:"font-semibold text-slate-200",children:"Share & Save"})]}),A.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Synchronize your custom parameters. Send direct links or export standard workspace files."}),A.jsxs("div",{className:"space-y-2 bg-slate-900/40 p-3 rounded-xl border border-slate-800",children:[A.jsx("span",{className:"text-xs font-semibold text-slate-300",children:"Share Direct Link"}),A.jsxs("div",{className:"flex gap-2",children:[A.jsx("input",{type:"text",readOnly:!0,value:c(),className:"flex-1 bg-slate-950 border border-slate-800 text-slate-400 text-[10px] px-3 py-2 rounded-lg truncate select-all outline-none font-mono"}),A.jsx("button",{onClick:f,type:"button",className:`px-3 py-2 rounded-lg font-medium text-xs flex items-center gap-1 cursor-pointer transition-all shrink-0 ${i?"bg-emerald-500 text-slate-950":"bg-slate-800 hover:bg-slate-700 text-slate-100"}`,id:"copy-link-btn",children:i?A.jsxs(A.Fragment,{children:[A.jsx(l2,{className:"w-3.5 h-3.5"}),"Copied!"]}):A.jsxs(A.Fragment,{children:[A.jsx(x2,{className:"w-3.5 h-3.5"}),"Copy Link"]})})]}),A.jsx("p",{className:"text-[10px] text-slate-500",children:"This URL contains your complete layout configuration encoded in Base64. Anyone with this link will load your visual."})]}),A.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[A.jsxs("button",{onClick:p,type:"button",className:"flex flex-col items-center justify-center p-3.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-xl transition-all text-slate-200 hover:text-white cursor-pointer group",id:"export-json-btn",children:[A.jsx("div",{className:"p-2 bg-purple-500/10 text-purple-400 rounded-xl group-hover:bg-purple-500/20 transition-all mb-2",children:A.jsx(rp,{className:"w-5 h-5"})}),A.jsx("span",{className:"text-xs font-semibold",children:"Save .json file"}),A.jsx("span",{className:"text-[10px] text-slate-500 mt-1 font-mono",children:"Download Config"})]}),A.jsxs("button",{onClick:h,type:"button",className:"flex flex-col items-center justify-center p-3.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-xl transition-all text-slate-200 hover:text-white cursor-pointer group",id:"import-json-btn",children:[A.jsx("div",{className:"p-2 bg-indigo-500/10 text-indigo-400 rounded-xl group-hover:bg-indigo-500/20 transition-all mb-2",children:A.jsx(Q2,{className:"w-5 h-5"})}),A.jsx("span",{className:"text-xs font-semibold font-sans",children:"Load .json file"}),A.jsx("span",{className:"text-[10px] text-slate-500 mt-1 font-mono",children:"Upload Config"})]}),A.jsx("input",{ref:l,type:"file",accept:".json,application/json",onChange:m,className:"hidden",id:"hidden-file-json-input"})]})]})},E_={type:"change"},Mp={type:"start"},yv={type:"end"},Kc=new _p,T_=new vs,rR=Math.cos(70*vb.DEG2RAD),Nn=new ce,oi=2*Math.PI,sn={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},dh=1e-6;class oR extends iM{constructor(e,i=null){super(e,i),this.state=sn.NONE,this.target=new ce,this.cursor=new ce,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Qr.ROTATE,MIDDLE:Qr.DOLLY,RIGHT:Qr.PAN},this.touches={ONE:Kr.ROTATE,TWO:Kr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new ce,this._lastQuaternion=new Ms,this._lastTargetPosition=new ce,this._quat=new Ms().setFromUnitVectors(e.up,new ce(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Zx,this._sphericalDelta=new Zx,this._scale=1,this._panOffset=new ce,this._rotateStart=new Rt,this._rotateEnd=new Rt,this._rotateDelta=new Rt,this._panStart=new Rt,this._panEnd=new Rt,this._panDelta=new Rt,this._dollyStart=new Rt,this._dollyEnd=new Rt,this._dollyDelta=new Rt,this._dollyDirection=new ce,this._mouse=new Rt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=cR.bind(this),this._onPointerDown=lR.bind(this),this._onPointerUp=uR.bind(this),this._onContextMenu=xR.bind(this),this._onMouseWheel=hR.bind(this),this._onKeyDown=pR.bind(this),this._onTouchStart=mR.bind(this),this._onTouchMove=gR.bind(this),this._onMouseDown=fR.bind(this),this._onMouseMove=dR.bind(this),this._interceptControlDown=_R.bind(this),this._interceptControlUp=vR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(E_),this.update(),this.state=sn.NONE}pan(e,i){this._pan(e,i),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const i=this.object.position;Nn.copy(i).sub(this.target),Nn.applyQuaternion(this._quat),this._spherical.setFromVector3(Nn),this.autoRotate&&this.state===sn.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=oi:s>Math.PI&&(s-=oi),l<-Math.PI?l+=oi:l>Math.PI&&(l-=oi),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(Nn.setFromSpherical(this._spherical),Nn.applyQuaternion(this._quatInverse),i.copy(this.target).add(Nn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const p=Nn.length();f=this._clampDistance(p*this._scale);const m=p-f;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const p=new ce(this._mouse.x,this._mouse.y,0);p.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const h=new ce(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(p),this.object.updateMatrixWorld(),f=Nn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(Kc.origin.copy(this.object.position),Kc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Kc.direction))<rR?this.object.lookAt(this.target):(T_.setFromNormalAndCoplanarPoint(this.object.up,this.target),Kc.intersectPlane(T_,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>dh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>dh||this._lastTargetPosition.distanceToSquared(this.target)>dh?(this.dispatchEvent(E_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?oi/60*this.autoRotateSpeed*e:oi/60/60*this.autoRotateSpeed}_getZoomScale(e){const i=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,i){Nn.setFromMatrixColumn(i,0),Nn.multiplyScalar(-e),this._panOffset.add(Nn)}_panUp(e,i){this.screenSpacePanning===!0?Nn.setFromMatrixColumn(i,1):(Nn.setFromMatrixColumn(i,0),Nn.crossVectors(this.object.up,Nn)),Nn.multiplyScalar(e),this._panOffset.add(Nn)}_pan(e,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;Nn.copy(l).sub(this.target);let c=Nn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=e-s.left,c=i-s.top,f=s.width,p=s.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/p)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(oi*this._rotateDelta.x/i.clientHeight),this._rotateUp(oi*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let i=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(oi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-oi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(oi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-oi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const s=this._getSecondPointerPosition(e),l=.5*(e.pageX+s.x),c=.5*(e.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(oi*this._rotateDelta.x/i.clientHeight),this._rotateUp(oi*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(e.pageX+i.x)*.5,p=(e.pageY+i.y)*.5;this._updateZoomParameters(f,p)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(e){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId)return!0;return!1}_trackPointer(e){let i=this._pointerPositions[e.pointerId];i===void 0&&(i=new Rt,this._pointerPositions[e.pointerId]=i),i.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const i=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(e){const i=e.deltaMode,s={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function lR(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function cR(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function uR(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(yv),this.state=sn.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],i=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:i.x,pageY:i.y});break}}function fR(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Qr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=sn.DOLLY;break;case Qr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=sn.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=sn.ROTATE}break;case Qr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=sn.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=sn.PAN}break;default:this.state=sn.NONE}this.state!==sn.NONE&&this.dispatchEvent(Mp)}function dR(r){switch(this.state){case sn.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case sn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case sn.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function hR(r){this.enabled===!1||this.enableZoom===!1||this.state!==sn.NONE||(r.preventDefault(),this.dispatchEvent(Mp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(yv))}function pR(r){this.enabled!==!1&&this._handleKeyDown(r)}function mR(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Kr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=sn.TOUCH_ROTATE;break;case Kr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=sn.TOUCH_PAN;break;default:this.state=sn.NONE}break;case 2:switch(this.touches.TWO){case Kr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=sn.TOUCH_DOLLY_PAN;break;case Kr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=sn.TOUCH_DOLLY_ROTATE;break;default:this.state=sn.NONE}break;default:this.state=sn.NONE}this.state!==sn.NONE&&this.dispatchEvent(Mp)}function gR(r){switch(this._trackPointer(r),this.state){case sn.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case sn.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case sn.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case sn.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=sn.NONE}}function xR(r){this.enabled!==!1&&r.preventDefault()}function _R(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function vR(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var hh={exports:{}},A_;function yR(){return A_||(A_=1,(function(r,e){(function(i,s,l,c){var f={URL:i.URL||i.webkitURL||i.mozURL||i.msURL,getUserMedia:(function(){var R=l.getUserMedia||l.webkitGetUserMedia||l.mozGetUserMedia||l.msGetUserMedia;return R&&R.bind(l)})(),requestAnimFrame:i.requestAnimationFrame||i.webkitRequestAnimationFrame||i.mozRequestAnimationFrame||i.oRequestAnimationFrame||i.msRequestAnimationFrame,requestTimeout:function(w,F){if(w=w||f.noop,F=F||0,!f.requestAnimFrame)return setTimeout(w,F);var b=new Date().getTime(),M=new Object,H=f.requestAnimFrame,W=function K(){var q=new Date().getTime(),se=q-b;se>=F?w.call():M.value=H(K)};return M.value=H(W),M},Blob:i.Blob||i.BlobBuilder||i.WebKitBlobBuilder||i.MozBlobBuilder||i.MSBlobBuilder,btoa:(function(){var R=i.btoa||function(w){for(var F="",b=0,M=w.length,H="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",W=void 0,K=void 0,q=void 0,se=void 0,_e=void 0,ve=void 0,Oe=void 0;b<M;)W=w.charCodeAt(b++),K=w.charCodeAt(b++),q=w.charCodeAt(b++),se=W>>2,_e=(W&3)<<4|K>>4,ve=(K&15)<<2|q>>6,Oe=q&63,isNaN(K)?ve=Oe=64:isNaN(q)&&(Oe=64),F=F+H.charAt(se)+H.charAt(_e)+H.charAt(ve)+H.charAt(Oe);return F};return R?R.bind(i):f.noop})(),isObject:function(w){return w&&Object.prototype.toString.call(w)==="[object Object]"},isEmptyObject:function(w){return f.isObject(w)&&!Object.keys(w).length},isArray:function(w){return w&&Array.isArray(w)},isFunction:function(w){return w&&typeof w=="function"},isElement:function(w){return w&&w.nodeType===1},isString:function(w){return typeof w=="string"||Object.prototype.toString.call(w)==="[object String]"},isSupported:{canvas:function(){var w=s.createElement("canvas");return w&&w.getContext&&w.getContext("2d")},webworkers:function(){return i.Worker},blob:function(){return f.Blob},Uint8Array:function(){return i.Uint8Array},Uint32Array:function(){return i.Uint32Array},videoCodecs:(function(){var R=s.createElement("video"),w={mp4:!1,h264:!1,ogv:!1,ogg:!1,webm:!1};try{R&&R.canPlayType&&(w.mp4=R.canPlayType('video/mp4; codecs="mp4v.20.8"')!=="",w.h264=(R.canPlayType('video/mp4; codecs="avc1.42E01E"')||R.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"'))!=="",w.ogv=R.canPlayType('video/ogg; codecs="theora"')!=="",w.ogg=R.canPlayType('video/ogg; codecs="theora"')!=="",w.webm=R.canPlayType('video/webm; codecs="vp8, vorbis"')!==-1)}catch{}return w})()},noop:function(){},each:function(w,F){var b=void 0,M=void 0;if(f.isArray(w))for(b=-1,M=w.length;++b<M&&F(b,w[b])!==!1;);else if(f.isObject(w)){for(b in w)if(w.hasOwnProperty(b)&&F(b,w[b])===!1)break}},mergeOptions:function(w,F){if(!(!f.isObject(w)||!f.isObject(F)||!Object.keys)){var b={};return f.each(w,function(M,H){b[M]=w[M]}),f.each(F,function(M,H){var W=F[M];f.isObject(W)&&w[M]?b[M]=f.mergeOptions(w[M],W):b[M]=W}),b}},setCSSAttr:function(w,F,b){f.isElement(w)&&(f.isString(F)&&f.isString(b)?w.style[F]=b:f.isObject(F)&&f.each(F,function(M,H){w.style[M]=H}))},removeElement:function(w){f.isElement(w)&&w.parentNode&&w.parentNode.removeChild(w)},createWebWorker:function(w){if(!f.isString(w))return{};try{var F=new f.Blob([w],{type:"text/javascript"}),b=f.URL.createObjectURL(F),M=new Worker(b);return{objectUrl:b,worker:M}}catch(H){return""+H}},getExtension:function(w){return w.substr(w.lastIndexOf(".")+1,w.length)},getFontSize:function(){var w=arguments.length>0&&arguments[0]!==c?arguments[0]:{};if(!s.body||w.resizeFont===!1)return w.fontSize;var F=w.text,b=w.gifWidth,M=parseInt(w.fontSize,10),H=parseInt(w.minFontSize,10),W=s.createElement("div"),K=s.createElement("span");for(W.setAttribute("width",b),W.appendChild(K),K.innerHTML=F,K.style.fontSize=M+"px",K.style.textIndent="-9999px",K.style.visibility="hidden",s.body.appendChild(K);K.offsetWidth>b&&M>=H;)K.style.fontSize=--M+"px";return s.body.removeChild(K),M+"px"},webWorkerError:!1},p=Object.freeze({default:f}),m={validate:function(w){w=f.isObject(w)?w:{};var F={};return f.each(m.validators,function(b,M){var H=M.errorCode;if(!w[H]&&!M.condition)return F=M,F.error=!0,!1}),delete F.condition,F},isValid:function(w){var F=m.validate(w),b=F.error!==!0;return b},validators:[{condition:f.isFunction(f.getUserMedia),errorCode:"getUserMedia",errorMsg:"The getUserMedia API is not supported in your browser"},{condition:f.isSupported.canvas(),errorCode:"canvas",errorMsg:"Canvas elements are not supported in your browser"},{condition:f.isSupported.webworkers(),errorCode:"webworkers",errorMsg:"The Web Workers API is not supported in your browser"},{condition:f.isFunction(f.URL),errorCode:"window.URL",errorMsg:"The window.URL API is not supported in your browser"},{condition:f.isSupported.blob(),errorCode:"window.Blob",errorMsg:"The window.Blob File API is not supported in your browser"},{condition:f.isSupported.Uint8Array(),errorCode:"window.Uint8Array",errorMsg:"The window.Uint8Array function constructor is not supported in your browser"},{condition:f.isSupported.Uint32Array(),errorCode:"window.Uint32Array",errorMsg:"The window.Uint32Array function constructor is not supported in your browser"}],messages:{videoCodecs:{errorCode:"videocodec",errorMsg:"The video codec you are trying to use is not supported in your browser"}}},h=Object.freeze({default:m}),g=function(){},_={sampleInterval:10,numWorkers:2,filter:"",gifWidth:200,gifHeight:200,interval:.1,numFrames:10,frameDuration:1,keepCameraOn:!1,images:[],video:null,webcamVideoElement:null,cameraStream:null,text:"",fontWeight:"normal",fontSize:"16px",minFontSize:"10px",resizeFont:!1,fontFamily:"sans-serif",fontColor:"#ffffff",textAlign:"center",textBaseline:"bottom",textXCoordinate:null,textYCoordinate:null,progressCallback:g,completeCallback:g,saveRenderingContexts:!1,savedRenderingContexts:[],crossOrigin:"Anonymous"},x=Object.freeze({default:_});function E(){return m.isValid()}function T(){return m.isValid()}function U(){var R={getUserMedia:!0};return m.isValid(R)}function S(R){var w=!1;if(f.isArray(R)&&R.length){if(f.each(R,function(F,b){f.isSupported.videoCodecs[b]&&(w=!0)}),!w)return!1}else if(f.isString(R)&&R.length&&!f.isSupported.videoCodecs[R])return!1;return m.isValid({getUserMedia:!0})}function v(){var R=256,w=499,F=491,b=487,M=503,H=3*M,W=R-1,K=4,q=100,se=16,_e=1<<se,ve=10,Oe=10,be=_e>>Oe,Qe=_e<<ve-Oe,We=R>>3,Ie=6,Je=1<<Ie,tt=We*Je,gt=30,pt=10,Ct=1<<pt,$,Et=8,ot=1<<Et,mt=pt+Et,Ue=1<<mt,Ft,z,C,ie,Ee=[],Ne=[],ze=[],Ge=[];function Se(le,Ae,Le){var pe,Pe;for(Ft=le,z=Ae,C=Le,ie=new Array(R),pe=0;pe<R;pe++)ie[pe]=new Array(4),Pe=ie[pe],Pe[0]=Pe[1]=Pe[2]=(pe<<K+8)/R|0,ze[pe]=_e/R|0,Ne[pe]=0}function Me(){for(var le=[],Ae=new Array(R),Le=0;Le<R;Le++)Ae[ie[Le][3]]=Le;for(var pe=0,Pe=0;Pe<R;Pe++){var we=Ae[Pe];le[pe++]=ie[we][0],le[pe++]=ie[we][1],le[pe++]=ie[we][2]}return le}function Ve(){var le,Ae,Le,pe,Pe,we,je,at;for(je=0,at=0,le=0;le<R;le++){for(Pe=ie[le],Le=le,pe=Pe[1],Ae=le+1;Ae<R;Ae++)we=ie[Ae],we[1]<pe&&(Le=Ae,pe=we[1]);if(we=ie[Le],le!=Le&&(Ae=we[0],we[0]=Pe[0],Pe[0]=Ae,Ae=we[1],we[1]=Pe[1],Pe[1]=Ae,Ae=we[2],we[2]=Pe[2],Pe[2]=Ae,Ae=we[3],we[3]=Pe[3],Pe[3]=Ae),pe!=je){for(Ee[je]=at+le>>1,Ae=je+1;Ae<pe;Ae++)Ee[Ae]=le;je=pe,at=le}}for(Ee[je]=at+W>>1,Ae=je+1;Ae<256;Ae++)Ee[Ae]=W}function ke(){var le,Ae,Le,pe,Pe,we,je,at,yt,zt,Cn,qt,yn,za;for(z<H&&(C=1),$=30+(C-1)/3,qt=Ft,yn=0,za=z,Cn=z/(3*C),zt=Cn/q|0,at=Ct,we=tt,je=we>>Ie,je<=1&&(je=0),le=0;le<je;le++)Ge[le]=at*((je*je-le*le)*ot/(je*je));for(z<H?yt=3:z%w!==0?yt=3*w:z%F!==0?yt=3*F:z%b!==0?yt=3*b:yt=3*M,le=0;le<Cn;)if(Le=(qt[yn+0]&255)<<K,pe=(qt[yn+1]&255)<<K,Pe=(qt[yn+2]&255)<<K,Ae=te(Le,pe,Pe),vt(at,Ae,Le,pe,Pe),je!==0&&ft(je,Ae,Le,pe,Pe),yn+=yt,yn>=za&&(yn-=z),le++,zt===0&&(zt=1),le%zt===0)for(at-=at/$,we-=we/gt,je=we>>Ie,je<=1&&(je=0),Ae=0;Ae<je;Ae++)Ge[Ae]=at*((je*je-Ae*Ae)*ot/(je*je))}function He(le,Ae,Le){var pe,Pe,we,je,at,yt,zt;for(at=1e3,zt=-1,pe=Ee[Ae],Pe=pe-1;pe<R||Pe>=0;)pe<R&&(yt=ie[pe],we=yt[1]-Ae,we>=at?pe=R:(pe++,we<0&&(we=-we),je=yt[0]-le,je<0&&(je=-je),we+=je,we<at&&(je=yt[2]-Le,je<0&&(je=-je),we+=je,we<at&&(at=we,zt=yt[3])))),Pe>=0&&(yt=ie[Pe],we=Ae-yt[1],we>=at?Pe=-1:(Pe--,we<0&&(we=-we),je=yt[0]-le,je<0&&(je=-je),we+=je,we<at&&(je=yt[2]-Le,je<0&&(je=-je),we+=je,we<at&&(at=we,zt=yt[3]))));return zt}function Be(){return ke(),ut(),Ve(),Me()}function ut(){var le;for(le=0;le<R;le++)ie[le][0]>>=K,ie[le][1]>>=K,ie[le][2]>>=K,ie[le][3]=le}function ft(le,Ae,Le,pe,Pe){var we,je,at,yt,zt,Cn,qt;for(at=Ae-le,at<-1&&(at=-1),yt=Ae+le,yt>R&&(yt=R),we=Ae+1,je=Ae-1,Cn=1;we<yt||je>at;){if(zt=Ge[Cn++],we<yt){qt=ie[we++];try{qt[0]-=zt*(qt[0]-Le)/Ue|0,qt[1]-=zt*(qt[1]-pe)/Ue|0,qt[2]-=zt*(qt[2]-Pe)/Ue|0}catch{}}if(je>at){qt=ie[je--];try{qt[0]-=zt*(qt[0]-Le)/Ue|0,qt[1]-=zt*(qt[1]-pe)/Ue|0,qt[2]-=zt*(qt[2]-Pe)/Ue|0}catch{}}}}function vt(le,Ae,Le,pe,Pe){var we=ie[Ae],je=le/Ct;we[0]-=je*(we[0]-Le)|0,we[1]-=je*(we[1]-pe)|0,we[2]-=je*(we[2]-Pe)|0}function te(le,Ae,Le){var pe,Pe,we,je,at,yt,zt,Cn,qt,yn;for(Cn=2147483647,qt=Cn,yt=-1,zt=yt,pe=0;pe<R;pe++)yn=ie[pe],Pe=yn[0]-le,Pe<0&&(Pe=-Pe),we=yn[1]-Ae,we<0&&(we=-we),Pe+=we,we=yn[2]-Le,we<0&&(we=-we),Pe+=we,Pe<Cn&&(Cn=Pe,yt=pe),je=Pe-(Ne[pe]>>se-K),je<qt&&(qt=je,zt=pe),at=ze[pe]>>Oe,ze[pe]-=at,Ne[pe]+=at<<ve;return ze[yt]+=be,Ne[yt]-=Qe,zt}Se.apply(this,arguments);var Fe={};return Fe.map=He,Fe.process=Be,Fe}function P(){var R=this;try{R.onmessage=function(F){var b=F.data||{},M;b.gifshot&&(M=w.run(b),postMessage(M))}}catch{}var w={dataToRGB:function(b,M,H){for(var W=M*H*4,K=0,q=[];K<W;)q.push(b[K++]),q.push(b[K++]),q.push(b[K++]),K++;return q},componentizedPaletteToArray:function(b){b=b||[];for(var M=[],H=0;H<b.length;H+=3){var W=b[H],K=b[H+1],q=b[H+2];M.push(W<<16|K<<8|q)}return M},processFrameWithQuantizer:function(b,M,H,W){for(var K=this.dataToRGB(b,M,H),q=new v(K,K.length,W),se=q.process(),_e=new Uint32Array(this.componentizedPaletteToArray(se)),ve=M*H,Oe=new Uint8Array(ve),be=0,Qe=0;Qe<ve;Qe++){var We=K[be++],Ie=K[be++],Je=K[be++];Oe[Qe]=q.map(We,Ie,Je)}return{pixels:Oe,palette:_e}},run:function(b){b=b||{};var M=b,H=M.height;M.palette;var W=M.sampleInterval,K=M.width,q=b.data;return this.processFrameWithQuantizer(q,K,H,W)}};return w}function V(R,w,F,b){var M=0;b=b===c?{}:b;var H=b.loop===c?null:b.loop,W=b.palette===c?null:b.palette;if(w<=0||F<=0||w>65535||F>65535)throw"Width/Height invalid.";function K(Oe){var be=Oe.length;if(be<2||be>256||be&be-1)throw"Invalid code/color length, must be power of 2 and 2 .. 256.";return be}R[M++]=71,R[M++]=73,R[M++]=70,R[M++]=56,R[M++]=57,R[M++]=97;var q=0,se=0;if(R[M++]=w&255,R[M++]=w>>8&255,R[M++]=F&255,R[M++]=F>>8&255,R[M++]=(W!==null?128:0)|q,R[M++]=se,R[M++]=0,H!==null){if(H<0||H>65535)throw"Loop count invalid.";R[M++]=33,R[M++]=255,R[M++]=11,R[M++]=78,R[M++]=69,R[M++]=84,R[M++]=83,R[M++]=67,R[M++]=65,R[M++]=80,R[M++]=69,R[M++]=50,R[M++]=46,R[M++]=48,R[M++]=3,R[M++]=1,R[M++]=H&255,R[M++]=H>>8&255,R[M++]=0}var _e=!1;this.addFrame=function(Oe,be,Qe,We,Ie,Je){if(_e===!0&&(--M,_e=!1),Je=Je===c?{}:Je,Oe<0||be<0||Oe>65535||be>65535)throw"x/y invalid.";if(Qe<=0||We<=0||Qe>65535||We>65535)throw"Width/Height invalid.";if(Ie.length<Qe*We)throw"Not enough pixels for the frame size.";var tt=!0,gt=Je.palette;if((gt===c||gt===null)&&(tt=!1,gt=W),gt===c||gt===null)throw"Must supply either a local or global palette.";for(var pt=K(gt),Ct=0;pt>>=1;)++Ct;pt=1<<Ct;var $=Je.delay===c?0:Je.delay,Et=Je.disposal===c?0:Je.disposal;if(Et<0||Et>3)throw"Disposal out of range.";var ot=!1,mt=0;if(Je.transparent!==c&&Je.transparent!==null&&(ot=!0,mt=Je.transparent,mt<0||mt>=pt))throw"Transparent color index.";if((Et!==0||ot||$!==0)&&(R[M++]=33,R[M++]=249,R[M++]=4,R[M++]=Et<<2|(ot===!0?1:0),R[M++]=$&255,R[M++]=$>>8&255,R[M++]=mt,R[M++]=0),R[M++]=44,R[M++]=Oe&255,R[M++]=Oe>>8&255,R[M++]=be&255,R[M++]=be>>8&255,R[M++]=Qe&255,R[M++]=Qe>>8&255,R[M++]=We&255,R[M++]=We>>8&255,R[M++]=tt===!0?128|Ct-1:0,tt===!0)for(var Ue=0,Ft=gt.length;Ue<Ft;++Ue){var z=gt[Ue];R[M++]=z>>16&255,R[M++]=z>>8&255,R[M++]=z&255}M=ve(R,M,Ct<2?2:Ct,Ie)},this.end=function(){return _e===!1&&(R[M++]=59,_e=!0),M};function ve(Oe,be,Qe,We){Oe[be++]=Qe;var Ie=be++,Je=1<<Qe,tt=Je-1,gt=Je+1,pt=gt+1,Ct=Qe+1,$=0,Et=0;function ot(ze){for(;$>=ze;)Oe[be++]=Et&255,Et>>=8,$-=8,be===Ie+256&&(Oe[Ie]=255,Ie=be++)}function mt(ze){Et|=ze<<$,$+=Ct,ot(8)}var Ue=We[0]&tt,Ft={};mt(Je);for(var z=1,C=We.length;z<C;++z){var ie=We[z]&tt,Ee=Ue<<8|ie,Ne=Ft[Ee];if(Ne===c){for(Et|=Ue<<$,$+=Ct;$>=8;)Oe[be++]=Et&255,Et>>=8,$-=8,be===Ie+256&&(Oe[Ie]=255,Ie=be++);pt===4096?(mt(Je),pt=gt+1,Ct=Qe+1,Ft={}):(pt>=1<<Ct&&++Ct,Ft[Ee]=pt++),Ue=ie}else Ue=Ne}return mt(Ue),mt(gt),ot(1),Ie+1===be?Oe[Ie]=0:(Oe[Ie]=be-Ie-1,Oe[be++]=0),be}}var B=function(){},Z=function(w){this.canvas=null,this.ctx=null,this.repeat=0,this.frames=[],this.numRenderedFrames=0,this.onRenderCompleteCallback=B,this.onRenderProgressCallback=B,this.workers=[],this.availableWorkers=[],this.generatingGIF=!1,this.options=w,this.initializeWebWorkers(w)};Z.prototype={workerMethods:P(),initializeWebWorkers:function(w){var F=this,b=v.toString()+"("+P.toString()+"());",M=void 0,H=void 0,W=void 0,K=void 0,q=-1,se="";for(K=w.numWorkers;++q<K;)M=f.createWebWorker(b),f.isObject(M)?(H=M.objectUrl,W=M.worker,F.workers.push({worker:W,objectUrl:H}),F.availableWorkers.push(W)):(se=M,f.webWorkerError=!!M);this.workerError=se,this.canvas=s.createElement("canvas"),this.canvas.width=w.gifWidth,this.canvas.height=w.gifHeight,this.ctx=this.canvas.getContext("2d"),this.frames=[]},getWorker:function(){return this.availableWorkers.pop()},freeWorker:function(w){this.availableWorkers.push(w)},byteMap:(function(){for(var R=[],w=0;w<256;w++)R[w]=String.fromCharCode(w);return R})(),bufferToString:function(w){for(var F=w.length,b="",M=-1;++M<F;)b+=this.byteMap[w[M]];return b},onFrameFinished:function(w){var F=this,b=F.frames,M=F.options,H=!!(M.images||[]).length,W=b.every(function(K){return!K.beingProcessed&&K.done});F.numRenderedFrames++,H&&w(F.numRenderedFrames/b.length),F.onRenderProgressCallback(F.numRenderedFrames*.75/b.length),W?F.generatingGIF||F.generateGIF(b,F.onRenderCompleteCallback):f.requestTimeout(function(){F.processNextFrame()},1)},processFrame:function(w){var F=this;this.options;var b=this.options,M=b.progressCallback,H=b.sampleInterval,W=this.frames,K=void 0,q=void 0,se=function(){var ve=arguments.length>0&&arguments[0]!==c?arguments[0]:{},Oe=ve.data;delete K.data,K.pixels=Array.prototype.slice.call(Oe.pixels),K.palette=Array.prototype.slice.call(Oe.palette),K.done=!0,K.beingProcessed=!1,F.freeWorker(q),F.onFrameFinished(M)};if(K=W[w],K.beingProcessed||K.done){this.onFrameFinished();return}K.sampleInterval=H,K.beingProcessed=!0,K.gifshot=!0,q=this.getWorker(),q?(q.onmessage=se,q.postMessage(K)):se({data:F.workerMethods.run(K)})},startRendering:function(w){this.onRenderCompleteCallback=w;for(var F=0;F<this.options.numWorkers&&F<this.frames.length;F++)this.processFrame(F)},processNextFrame:function(){for(var w=-1,F=0;F<this.frames.length;F++){var b=this.frames[F];if(!b.done&&!b.beingProcessed){w=F;break}}w>=0&&this.processFrame(w)},generateGIF:function(w,F){var b=[],M={loop:this.repeat},H=this.options,W=H.interval,K=H.frameDuration,q=H.images,se=!!q.length,_e=H.gifHeight,ve=H.gifWidth,Oe=new V(b,ve,_e,M),be=this.onRenderProgressCallback,Qe=se?W*100:0,We=void 0,Ie=void 0;this.generatingGIF=!0,f.each(w,function(Je,tt){var gt=tt.palette;be(.75+.25*tt.position*1/w.length);for(var pt=0;pt<K;pt++)Oe.addFrame(0,0,ve,_e,tt.pixels,{palette:gt,delay:Qe})}),Oe.end(),be(1),this.frames=[],this.generatingGIF=!1,f.isFunction(F)&&(We=this.bufferToString(b),Ie="data:image/gif;base64,"+f.btoa(We),F(Ie))},setRepeat:function(w){this.repeat=w},addFrame:function(w,F){F=f.isObject(F)?F:{};var b=this,M=b.ctx,H=b.options,W=H.gifWidth,K=H.gifHeight,q=f.getFontSize(F),se=F,_e=se.filter,ve=se.fontColor,Oe=se.fontFamily,be=se.fontWeight;se.gifHeight,se.gifWidth;var Qe=se.text,We=se.textAlign,Ie=se.textBaseline,Je=F.textXCoordinate?F.textXCoordinate:We==="left"?1:We==="right"?W:W/2,tt=F.textYCoordinate?F.textYCoordinate:Ie==="top"?1:Ie==="center"?K/2:K,gt=be+" "+q+" "+Oe,pt=void 0;try{M.filter=_e,M.drawImage(w,0,0,W,K),Qe&&(M.font=gt,M.fillStyle=ve,M.textAlign=We,M.textBaseline=Ie,M.fillText(Qe,Je,tt)),pt=M.getImageData(0,0,W,K),b.addFrameImageData(pt)}catch(Ct){return""+Ct}},addFrameImageData:function(){var w=arguments.length>0&&arguments[0]!==c?arguments[0]:{},F=this.frames,b=w.data;this.frames.push({data:b,width:w.width,height:w.height,palette:null,dithering:null,done:!1,beingProcessed:!1,position:F.length})},onRenderProgress:function(w){this.onRenderProgressCallback=w},isRendering:function(){return this.generatingGIF},getBase64GIF:function(w){var F=this,b=function(H){F.destroyWorkers(),f.requestTimeout(function(){w(H)},0)};F.startRendering(b)},destroyWorkers:function(){if(!this.workerError){var w=this.workers;f.each(w,function(F,b){var M=b.worker,H=b.objectUrl;M.terminate(),f.URL.revokeObjectURL(H)})}}};function G(R,w){R.getBase64GIF(function(F){w({error:!1,errorCode:"",errorMsg:"",image:F})})}function j(){var R=arguments.length>0&&arguments[0]!==c?arguments[0]:{},w=R.callback,F=R.images,b=R.options,M=R.imagesLength,H={getUserMedia:!0,"window.URL":!0},W=m.validate(H),K=[],q=0,se=void 0,_e=void 0;if(W.error)return w(W);_e=new Z(b),f.each(F,function(Oe,be){var Qe=be;be.src&&(Qe=Qe.src),f.isElement(Qe)?(b.crossOrigin&&(Qe.crossOrigin=b.crossOrigin),K[Oe]=Qe,q+=1,q===M&&ve()):f.isString(Qe)&&(se=new Image,b.crossOrigin&&(se.crossOrigin=b.crossOrigin),(function(We){be.text&&(We.text=be.text),We.onerror=function(Ie){var Je=void 0;if(--M,M===0)return Je={},Je.error="None of the requested images was capable of being retrieved",w(Je)},We.onload=function(Ie){be.text?K[Oe]={img:We,text:We.text}:K[Oe]=We,q+=1,q===M&&ve(),f.removeElement(We)},We.src=Qe})(se),f.setCSSAttr(se,{position:"fixed",opacity:"0"}),s.body.appendChild(se))});function ve(){f.each(K,function(Oe,be){be&&(be.text?_e.addFrame(be.img,b,be.text):_e.addFrame(be,b))}),G(_e,w)}}var D=function(){},k={getGIF:function(){var w=arguments.length>0&&arguments[0]!==c?arguments[0]:{},F=arguments[1];F=f.isFunction(F)?F:D;var b=s.createElement("canvas"),M=void 0,H=w.images,W=!!H.length,K=w.cameraStream,q=w.crop,se=w.filter,_e=w.fontColor,ve=w.fontFamily,Oe=w.fontWeight,be=w.keepCameraOn;w.numWorkers;var Qe=w.progressCallback,We=w.saveRenderingContexts,Ie=w.savedRenderingContexts,Je=w.text,tt=w.textAlign,gt=w.textBaseline,pt=w.videoElement,Ct=w.videoHeight,$=w.videoWidth,Et=w.webcamVideoElement,ot=Number(w.gifWidth),mt=Number(w.gifHeight),Ue=Number(w.interval);Number(w.sampleInterval);var Ft=W?0:Ue*1e3,z=[],C=Ie.length?Ie.length:w.numFrames,ie=C,Ee=new Z(w),Ne=f.getFontSize(w),ze=w.textXCoordinate?w.textXCoordinate:tt==="left"?1:tt==="right"?ot:ot/2,Ge=w.textYCoordinate?w.textYCoordinate:gt==="top"?1:gt==="center"?mt/2:mt,Se=Oe+" "+Ne+" "+ve,Me=q?Math.floor(q.scaledWidth/2):0,Ve=q?$-q.scaledWidth:0,ke=q?Math.floor(q.scaledHeight/2):0,He=q?Ct-q.scaledHeight:0,Be=function ut(){var ft=ie-1;Ie.length?(M.putImageData(Ie[C-ie],0,0),te()):vt();function vt(){try{Ve>$&&(Ve=$),He>Ct&&(He=Ct),Me<0&&(Me=0),ke<0&&(ke=0),M.filter=se,M.drawImage(pt,Me,ke,Ve,He,0,0,ot,mt),te()}catch(Fe){if(Fe.name==="NS_ERROR_NOT_AVAILABLE")f.requestTimeout(vt,100);else throw Fe}}function te(){var Fe=void 0;We&&z.push(M.getImageData(0,0,ot,mt)),Je&&(M.font=Se,M.fillStyle=_e,M.textAlign=tt,M.textBaseline=gt,M.fillText(Je,ze,Ge)),Fe=M.getImageData(0,0,ot,mt),Ee.addFrameImageData(Fe),ie=ft,Qe((C-ie)/C),ft>0&&f.requestTimeout(ut,Ft),ie||Ee.getBase64GIF(function(le){F({error:!1,errorCode:"",errorMsg:"",image:le,cameraStream:K,videoElement:pt,webcamVideoElement:Et,savedRenderingContexts:z,keepCameraOn:be})})}};C=C!==c?C:10,Ue=Ue!==c?Ue:.1,b.width=ot,b.height=mt,M=b.getContext("2d"),(function ut(){if(!Ie.length&&pt.currentTime===0){f.requestTimeout(ut,100);return}Be()})()},getCropDimensions:function(){var w=arguments.length>0&&arguments[0]!==c?arguments[0]:{},F=w.videoWidth,b=w.videoHeight,M=w.gifWidth,H=w.gifHeight,W={width:0,height:0,scaledWidth:0,scaledHeight:0};return F>b?(W.width=Math.round(F*(H/b))-M,W.scaledWidth=Math.round(W.width*(b/H))):(W.height=Math.round(b*(M/F))-H,W.scaledHeight=Math.round(W.height*(F/M))),W}},J={loadedData:!1,defaultVideoDimensions:{width:640,height:480},findVideoSize:function R(w){R.attempts=R.attempts||0;var F=w.cameraStream,b=w.completedCallback,M=w.videoElement;M&&(M.videoWidth>0&&M.videoHeight>0?(M.removeEventListener("loadeddata",J.findVideoSize),b({videoElement:M,cameraStream:F,videoWidth:M.videoWidth,videoHeight:M.videoHeight})):R.attempts<10?(R.attempts+=1,f.requestTimeout(function(){J.findVideoSize(w)},400)):b({videoElement:M,cameraStream:F,videoWidth:J.defaultVideoDimensions.width,videoHeight:J.defaultVideoDimensions.height}))},onStreamingTimeout:function(w){f.isFunction(w)&&w({error:!0,errorCode:"getUserMedia",errorMsg:"There was an issue with the getUserMedia API - Timed out while trying to start streaming",image:null,cameraStream:{}})},stream:function(w){var F=f.isArray(w.existingVideo)?w.existingVideo[0]:w.existingVideo,b=w.cameraStream,M=w.completedCallback,H=w.streamedCallback,W=w.videoElement;if(f.isFunction(H)&&H(),F){if(f.isString(F))W.src=F,W.innerHTML='<source src="'+F+'" type="video/'+f.getExtension(F)+'" />';else if(F instanceof Blob){try{W.src=f.URL.createObjectURL(F)}catch{}W.innerHTML='<source src="'+F+'" type="'+F.type+'" />'}}else if(W.mozSrcObject)W.mozSrcObject=b;else if(f.URL)try{W.srcObject=b,W.src=f.URL.createObjectURL(b)}catch{W.srcObject=b}W.play(),f.requestTimeout(function K(){K.count=K.count||0,J.loadedData===!0?(J.findVideoSize({videoElement:W,cameraStream:b,completedCallback:M}),J.loadedData=!1):(K.count+=1,K.count>10?J.findVideoSize({videoElement:W,cameraStream:b,completedCallback:M}):K())},0)},startStreaming:function(w){var F=f.isFunction(w.error)?w.error:f.noop,b=f.isFunction(w.streamed)?w.streamed:f.noop,M=f.isFunction(w.completed)?w.completed:f.noop,H=w.crossOrigin,W=w.existingVideo,K=w.lastCameraStream,q=w.options,se=w.webcamVideoElement,_e=f.isElement(W)?W:se||s.createElement("video");H&&(_e.crossOrigin=q.crossOrigin),_e.autoplay=!0,_e.loop=!0,_e.muted=!0,_e.addEventListener("loadeddata",function(ve){J.loadedData=!0,q.offset&&(_e.currentTime=q.offset)}),W?J.stream({videoElement:_e,existingVideo:W,completedCallback:M}):K?J.stream({videoElement:_e,cameraStream:K,streamedCallback:b,completedCallback:M}):f.getUserMedia({video:!0},function(ve){J.stream({videoElement:_e,cameraStream:ve,streamedCallback:b,completedCallback:M})},F)},startVideoStreaming:function(w){var F=arguments.length>1&&arguments[1]!==c?arguments[1]:{},b=F.timeout!==c?F.timeout:0,M=F.callback,H=F.webcamVideoElement,W=void 0;b>0&&(W=f.requestTimeout(function(){J.onStreamingTimeout(M)},1e4)),J.startStreaming({error:function(){M({error:!0,errorCode:"getUserMedia",errorMsg:"There was an issue with the getUserMedia API - the user probably denied permission",image:null,cameraStream:{}})},streamed:function(){clearTimeout(W)},completed:function(){var q=arguments.length>0&&arguments[0]!==c?arguments[0]:{},se=q.cameraStream,_e=q.videoElement,ve=q.videoHeight,Oe=q.videoWidth;w({cameraStream:se,videoElement:_e,videoHeight:ve,videoWidth:Oe})},lastCameraStream:F.lastCameraStream,webcamVideoElement:H,crossOrigin:F.crossOrigin,options:F})},stopVideoStreaming:function(w){w=f.isObject(w)?w:{};var F=w,b=F.keepCameraOn,M=F.videoElement,H=F.webcamVideoElement,W=w.cameraStream||{},K=W.getTracks?W.getTracks()||[]:[],q=!!K.length,se=K[0];!b&&q&&f.isFunction(se.stop)&&se.stop(),f.isElement(M)&&!H&&(M.pause(),f.isFunction(f.URL.revokeObjectURL)&&!f.webWorkerError&&M.src&&f.URL.revokeObjectURL(M.src),f.removeElement(M))}};function Y(R){R=f.isObject(R)?R:{},J.stopVideoStreaming(R)}function ae(R,w){var F=R.options||{},b=F.images,M=F.video,H=Number(F.gifWidth),W=Number(F.gifHeight);Number(F.numFrames);var K=R.cameraStream,q=R.videoElement,se=R.videoWidth,_e=R.videoHeight,ve=k.getCropDimensions({videoWidth:se,videoHeight:_e,gifHeight:W,gifWidth:H}),Oe=w;F.crop=ve,F.videoElement=q,F.videoWidth=se,F.videoHeight=_e,F.cameraStream=K,f.isElement(q)&&(q.width=H+ve.width,q.height=W+ve.height,F.webcamVideoElement||(f.setCSSAttr(q,{position:"fixed",opacity:"0"}),s.body.appendChild(q)),q.play(),k.getGIF(F,function(be){(!b||!b.length)&&(!M||!M.length)&&Y(be),Oe(be)}))}function ee(){var R=arguments.length>0&&arguments[0]!==c?arguments[0]:{},w=R.callback,F=R.existingVideo,b=R.options,M={getUserMedia:!0,"window.URL":!0},H=m.validate(M),W=void 0,K=void 0;if(H.error)return w(H);if(f.isElement(F)&&F.src){if(K=F.src,W=f.getExtension(K),!f.isSupported.videoCodecs[W])return w(m.messages.videoCodecs)}else f.isArray(F)&&f.each(F,function(q,se){if(se instanceof Blob?W=se.type.substr(se.type.lastIndexOf("/")+1,se.length):W=se.substr(se.lastIndexOf(".")+1,se.length),f.isSupported.videoCodecs[W])return F=se,!1});J.startStreaming({completed:function(se){se.options=b||{},ae(se,w)},existingVideo:F,crossOrigin:b.crossOrigin,options:b})}function xe(){var R=arguments.length>0&&arguments[0]!==c?arguments[0]:{},w=R.callback,F=R.lastCameraStream,b=R.options,M=R.webcamVideoElement;if(!T())return w(m.validate());if(b.savedRenderingContexts.length){k.getGIF(b,function(H){w(H)});return}J.startVideoStreaming(function(){var H=arguments.length>0&&arguments[0]!==c?arguments[0]:{};H.options=b||{},ae(H,w)},{lastCameraStream:F,callback:w,webcamVideoElement:M,crossOrigin:b.crossOrigin})}function X(R,w){if(w=f.isFunction(R)?R:w,R=f.isObject(R)?R:{},!!f.isFunction(w)){var F=f.mergeOptions(_,R)||{},b=R.cameraStream,M=F.images,H=M?M.length:0,W=F.video,K=F.webcamVideoElement;F=f.mergeOptions(F,{gifWidth:Math.floor(F.gifWidth),gifHeight:Math.floor(F.gifHeight)}),H?j({images:M,imagesLength:H,callback:w,options:F}):W?ee({existingVideo:W,callback:w,options:F}):xe({lastCameraStream:b,callback:w,webcamVideoElement:K,options:F})}}function N(R,w){if(w=f.isFunction(R)?R:w,R=f.isObject(R)?R:{},!!f.isFunction(w)){var F=f.mergeOptions(_,R),b=f.mergeOptions(F,{interval:.1,numFrames:1,gifWidth:Math.floor(F.gifWidth),gifHeight:Math.floor(F.gifHeight)});X(b,w)}}var I={utils:p,error:h,defaultOptions:x,createGIF:X,takeSnapShot:N,stopVideoStreaming:Y,isSupported:E,isWebCamGIFSupported:T,isExistingVideoGIFSupported:S,isExistingImagesGIFSupported:U,VERSION:"0.4.5"};r.exports=I})(typeof window<"u"?window:{},typeof document<"u"?document:{createElement:function(){}},typeof window<"u"?window.navigator:{})})(hh)),hh.exports}var SR=yR();const bR=MS(SR),MR=({expandedString:r,symbolActions:e,variables:i,defaultStepSize:s,defaultAngleDegrees:l,is3D:c,boundingBox:f,maxPathDist:p,colorPalette:m,strokeColor:h,backgroundColor:g,strokeWidth:_,showAxes:x,growPercent:E,animationStyle:T="sequential",segmentCount:U,onCenteringTriggerRef:S,onExportPngTriggerRef:v,onExportSvgTriggerRef:P,onExportGifTriggerRef:V})=>{const B=Ke.useRef(null),Z=Ke.useRef(null),G=Ke.useRef(null),j=Ke.useRef(null),D=Ke.useRef(null),k=Ke.useRef(null),J=Ke.useRef(null),Y=Ke.useRef(null),ae=Ke.useRef(null),[ee,xe]=Ke.useState({width:0,height:0});Ke.useEffect(()=>{if(!B.current)return;const I=new ResizeObserver(R=>{for(const w of R){const{width:F,height:b}=w.contentRect;xe({width:F,height:b})}});return I.observe(B.current),()=>I.disconnect()},[]),Ke.useEffect(()=>{if(!B.current)return;const I=B.current.clientWidth||500,R=B.current.clientHeight||500,w=new Lb;w.background=new Lt(g),G.current=w;const F=new Ui(50,I/R,.1,1e8);F.position.set(0,0,100),j.current=F;const b=new $A({antialias:!0,preserveDrawingBuffer:!0});b.setSize(I,R),b.setPixelRatio(Math.min(window.devicePixelRatio,2)),B.current.innerHTML="",B.current.appendChild(b.domElement),Z.current=b;const M=new oR(F,b.domElement);M.enableDamping=!0,M.dampingFactor=.08,M.maxDistance=1e8,M.minDistance=.01,D.current=M;const H=new $b(16777215,.95);w.add(H);const W=new nM(500,100,"#334155","#1e293b");W.position.y=-20,J.current=W,x&&w.add(W);let K;const q=()=>{K=requestAnimationFrame(q),D.current&&D.current.update(),Z.current&&G.current&&j.current&&Z.current.render(G.current,j.current)};return q(),()=>{cancelAnimationFrame(K),Z.current&&Z.current.dispose(),D.current&&D.current.dispose()}},[]),Ke.useEffect(()=>{G.current&&(G.current.background=new Lt(g))},[g]),Ke.useEffect(()=>{!Z.current||!j.current||ee.width===0||(j.current.aspect=ee.width/ee.height,j.current.updateProjectionMatrix(),Z.current.setSize(ee.width,ee.height))},[ee]),Ke.useEffect(()=>{G.current&&J.current&&(x?G.current.add(J.current):G.current.remove(J.current))},[x]);const X=()=>{if(!j.current||!D.current)return;const I=f.min,R=f.max,w=(I.x+R.x)/2,F=(I.y+R.y)/2,b=(I.z+R.z)/2,M=R.x-I.x,H=R.y-I.y,W=R.z-I.z,K=Math.max(M,H,W)||10;D.current.target.set(w,F,b);const q=j.current.fov*Math.PI/180;if(c){let se=K/(2*Math.tan(q/2));se=Math.max(se,15)*1.3,j.current.position.set(w+se*.75,F+se*.65,b+se*.85),D.current.enableRotate=!0}else{let se=Math.max(M,H)/(2*Math.tan(q/2));se=Math.max(se,15)*1.15,j.current.position.set(w,F,se),j.current.lookAt(w,F,0),D.current.enableRotate=!1}D.current.update()};Ke.useEffect(()=>{S.current=X},[f,c]),Ke.useEffect(()=>{if(U>0){const I=setTimeout(()=>{X()},60);return()=>clearTimeout(I)}},[r,c]),Ke.useEffect(()=>{var R;if(!G.current||U===0){k.current&&((R=G.current)==null||R.remove(k.current));return}let I=!0;if(k.current){const F=k.current.geometry.getAttribute("position");F&&F.count===U*2&&(I=!1)}if(I){k.current&&(G.current.remove(k.current),k.current.geometry.dispose(),k.current.material.dispose(),k.current=null);const w=new Float32Array(U*6),F=new Float32Array(U*6);Y.current=w,ae.current=F;const b=new Pi;b.setAttribute("position",new Oi(w,3)),b.setAttribute("color",new Oi(F,3));const M=new vp({vertexColors:!0,transparent:!0,opacity:.95,linewidth:_}),H=new J_(b,M);G.current.add(H),k.current=H}N()},[r,U,m,h,_]);const N=()=>{const I=k.current;if(!I||U===0)return;const R=Y.current,w=ae.current;if(!R||!w)return;const F=uh(r,e,i,s,l,m,h,E,T,R,w,f,p),b=I.geometry,M=b.getAttribute("position"),H=b.getAttribute("color");if(M.needsUpdate=!0,H.needsUpdate=!0,T==="sequential"){const W=Math.floor(F*(E/100));b.setDrawRange(0,W*2)}else b.setDrawRange(0,F*2)};return Ke.useEffect(()=>{N()},[i,E,T,s,l]),Ke.useEffect(()=>{v.current=I=>{const R=Z.current,w=G.current,F=j.current;if(!R||!w||!F)return"";const b=F.aspect,M=R.domElement.width/window.devicePixelRatio,H=R.domElement.height/window.devicePixelRatio;F.aspect=I.width/I.height,F.updateProjectionMatrix(),R.setSize(I.width,I.height),R.render(w,F);const W=R.domElement.toDataURL("image/png");return F.aspect=b,F.updateProjectionMatrix(),R.setSize(M,H),R.render(w,F),W}},[r,U,E,m,h,i,s,l,T]),Ke.useEffect(()=>{V.current=async I=>{const R=Z.current,w=G.current,F=j.current,b=k.current;if(!R||!w||!F||!b||U===0)throw new Error("The 3D engine is not ready. Please wait.");const M=F.aspect,H=R.domElement.width/window.devicePixelRatio,W=R.domElement.height/window.devicePixelRatio;F.aspect=I.width/I.height,F.updateProjectionMatrix(),R.setSize(I.width,I.height);const K=Y.current,q=ae.current;if(!K||!q)throw new Error("The calculation engine is not ready.");const se=b.geometry,_e=se.getAttribute("position"),ve=se.getAttribute("color"),Oe=I.frames,be=[];for(let Qe=0;Qe<Oe;Qe++){I.onProgress(Math.min(45,Math.round(Qe/Oe*50)));const We=I.startPercent+(I.endPercent-I.startPercent)*(Qe/Math.max(1,Oe-1)),Ie=uh(r,e,i,s,l,m,h,We,T,K,q,f,p);if(_e.needsUpdate=!0,ve.needsUpdate=!0,T==="sequential"){const tt=Math.floor(Ie*(We/100));se.setDrawRange(0,tt*2)}else se.setDrawRange(0,Ie*2);R.render(w,F);const Je=R.domElement.toDataURL("image/png");be.push(Je),await new Promise(tt=>setTimeout(tt,15))}return F.aspect=M,F.updateProjectionMatrix(),R.setSize(H,W),N(),R.render(w,F),I.onProgress(50),new Promise((Qe,We)=>{bR.createGIF({images:be,gifWidth:I.width,gifHeight:I.height,interval:I.delay/1e3,numWorkers:2,sampleInterval:8},Ie=>{Ie.error?We(new Error(Ie.errorMsg||"GIF serialization failed.")):Qe(Ie.image)})})}},[r,e,i,s,l,m,h,T,f,p]),Ke.useEffect(()=>{P.current=()=>{const I=j.current;if(!I)return"";const R=1e3,w=I.aspect||1,F=Math.round(R/w);let b="";const M=Y.current,H=ae.current;if(!M||!H)return"";const W=uh(r,e,i,s,l,m,h,E,T,M,H,f,p),K=T==="sequential"?Math.floor(W*(E/100)):W,q=new ce,se=new ce;for(let _e=0;_e<K;_e++){const ve=_e*6;if(q.set(M[ve],M[ve+1],M[ve+2]),se.set(M[ve+3],M[ve+4],M[ve+5]),q.distanceToSquared(se)<1e-5)continue;q.project(I),se.project(I);const Oe=((q.x*.5+.5)*R).toFixed(1),be=((1-(q.y*.5+.5))*F).toFixed(1),Qe=((se.x*.5+.5)*R).toFixed(1),We=((1-(se.y*.5+.5))*F).toFixed(1),Ie=Math.round(H[ve]*255),Je=Math.round(H[ve+1]*255),tt=Math.round(H[ve+2]*255),gt=`#${((1<<24)+(Ie<<16)+(Je<<8)+tt).toString(16).slice(1)}`;b+=`<line x1="${Oe}" y1="${be}" x2="${Qe}" y2="${We}" stroke="${gt}" stroke-width="${_}" stroke-linecap="round" />
`}return`<?xml version="1.0" encoding="utf-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${R} ${F}" width="${R}" height="${F}">
  <rect width="100%" height="100%" fill="${g}" />
  <g>
${b}  </g>
</svg>`}},[r,U,E,m,h,_,g,f,i,s,l,T]),A.jsxs("div",{className:"relative w-full h-full select-none outline-none",children:[A.jsx("div",{ref:B,className:"w-full h-full rounded-2xl overflow-hidden shadow-2xl",id:"lsystem-canvas",style:{touchAction:"none"}}),U===0&&A.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-slate-950/70 backdrop-blur-md rounded-2xl",children:A.jsxs("div",{className:"text-center p-6 text-slate-400",children:[A.jsx("p",{className:"text-lg font-medium mb-1 text-slate-200",children:"No Segments To Render"}),A.jsx("p",{className:"text-sm",children:"Verify your rules and variable definitions."})]})})]})},ER=({expandedString:r,segmentCount:e,symbolActions:i,variables:s,defaultStepSize:l,defaultAngleDegrees:c,is3D:f,onToggle3D:p,boundingBox:m,maxPathDist:h,colorPalette:g,strokeColor:_,backgroundColor:x,strokeWidth:E,showAxes:T,onToggleAxes:U,growPercent:S,animationStyle:v="sequential",isCalculating:P=!1,isCapped:V,totalLength:B,evaluationTimeMs:Z,onCenteringTriggerRef:G,onExportPngTriggerRef:j,onExportSvgTriggerRef:D,onExportGifTriggerRef:k})=>{const J=()=>{G.current&&G.current()};return A.jsxs("div",{className:"relative w-full h-full flex flex-col bg-slate-950 rounded-2xl border border-slate-800/80 overflow-hidden",id:"canvas-view-container",children:[A.jsxs("div",{className:"absolute top-4 left-4 right-4 z-10 flex flex-wrap gap-2 items-center justify-between pointer-events-none",children:[A.jsx("div",{className:"flex gap-2 pointer-events-auto",children:A.jsxs("div",{className:"px-3 py-1.5 bg-slate-900/85 backdrop-blur-md rounded-xl border border-slate-800 text-[10px] text-slate-300 flex items-center gap-2 font-mono shadow-lg shadow-slate-950/20",id:"badge-status-container",children:[A.jsx(yp,{className:`w-3.5 h-3.5 ${P?"text-purple-400 animate-spin":"text-emerald-400"}`}),P?A.jsx("span",{className:"text-purple-300 font-semibold animate-pulse",children:"Calculating..."}):A.jsxs(A.Fragment,{children:[A.jsxs("span",{children:["Lines: ",A.jsx("strong",{className:"text-emerald-400",children:e.toLocaleString()})]}),A.jsx("span",{className:"text-slate-600",children:"|"}),A.jsxs("span",{children:["Calc: ",A.jsxs("strong",{className:"text-slate-200",children:[Z.toFixed(0),"ms"]})]})]}),V&&!P&&A.jsxs(A.Fragment,{children:[A.jsx("span",{className:"text-slate-600",children:"|"}),A.jsx("span",{className:"text-amber-400 font-bold px-1.5 py-0.5 bg-amber-500/10 border border-amber-500/20 rounded-md",children:"CAPPED"})]})]})}),A.jsxs("div",{className:"flex gap-1.5 pointer-events-auto",children:[A.jsx("button",{onClick:J,type:"button",title:"Auto-Center & Fit Camera View",className:"p-2.5 bg-slate-900/85 hover:bg-slate-800/90 backdrop-blur-md text-slate-200 border border-slate-800 hover:border-slate-700 rounded-xl transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer",id:"center-view-overlay-btn",children:A.jsx(F2,{className:"w-4 h-4"})}),A.jsx("button",{onClick:()=>p(!f),type:"button",title:f?"Switch to Flat 2D Mode":"Switch to Immersive 3D Orbit Mode",className:`p-2.5 backdrop-blur-md border rounded-xl transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-1.5 text-xs font-semibold ${f?"bg-indigo-500/20 text-indigo-300 border-indigo-500/40":"bg-slate-900/85 border-slate-800 text-slate-300 hover:bg-slate-800/90"}`,id:"toggle-3d-overlay-btn",children:f?A.jsxs(A.Fragment,{children:[A.jsx(hv,{className:"w-4 h-4 shrink-0"}),A.jsx("span",{className:"hidden sm:inline",children:"3D Active"})]}):A.jsxs(A.Fragment,{children:[A.jsx(gv,{className:"w-4 h-4 shrink-0"}),A.jsx("span",{className:"hidden sm:inline",children:"Flat 2D"})]})}),A.jsx("button",{onClick:()=>U(!T),type:"button",title:T?"Hide coordinate system axes":"Show coordinate system axes (RGB)",className:`p-2.5 backdrop-blur-md border rounded-xl transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer ${T?"bg-slate-900/90 text-emerald-400 border-emerald-500/40":"bg-slate-900/85 border-slate-800 text-slate-300 hover:bg-slate-800/90"}`,children:A.jsx(N2,{className:"w-4 h-4"})})]})]}),A.jsxs("div",{className:"flex-1 min-h-[400px] relative",children:[P&&A.jsx("div",{className:"absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-emerald-500 to-purple-400 animate-pulse z-20",style:{backgroundImage:"linear-gradient(90deg, #a855f7 0%, #10b981 50%, #a855f7 100%)"}}),A.jsx(MR,{expandedString:r,symbolActions:i,variables:s,defaultStepSize:l,defaultAngleDegrees:c,is3D:f,boundingBox:m,maxPathDist:h,colorPalette:g,strokeColor:_,backgroundColor:x,strokeWidth:E,showAxes:T,growPercent:S,animationStyle:v,segmentCount:e,onCenteringTriggerRef:G,onExportPngTriggerRef:j,onExportSvgTriggerRef:D,onExportGifTriggerRef:k})]}),A.jsx("div",{className:"absolute bottom-4 left-4 right-4 pointer-events-none z-10",children:A.jsxs("div",{className:"mx-auto max-w-xs px-3 py-2 bg-slate-900/85 backdrop-blur-md rounded-xl border border-slate-800 text-[10px] text-slate-400 text-center flex items-center justify-center gap-2 font-medium shadow-lg pointer-events-auto",children:[A.jsx(pv,{className:"w-3.5 h-3.5 text-slate-500 shrink-0"}),A.jsx("span",{children:f?"Drag to Rotate • Right-click (or Ctrl) + drag to Pan • Scroll to Zoom":"Drag to Pan • Scroll to Zoom (Rotation locked in 2D)"})]})})]})},wa=({title:r,icon:e,isOpen:i,onToggle:s,children:l})=>A.jsxs("div",{className:"border-b border-slate-800/80 last:border-0",children:[A.jsxs("button",{onClick:s,type:"button",className:"w-full px-4 py-3.5 flex items-center justify-between text-slate-300 hover:text-white hover:bg-slate-900/40 transition-all text-left font-semibold text-sm cursor-pointer select-none",children:[A.jsxs("div",{className:"flex items-center gap-2.5",children:[e,A.jsx("span",{children:r})]}),i?A.jsx(d2,{className:"w-4 h-4 text-slate-500"}):A.jsx(u2,{className:"w-4 h-4 text-slate-500"})]}),i&&A.jsx("div",{className:"px-4 pb-4 pt-1 bg-slate-950/20 text-slate-300 animate-slide-down",children:l})]}),TR=({strokeColor:r,onChangeStrokeColor:e,backgroundColor:i,onChangeBackgroundColor:s,colorPalette:l,onChangeColorPalette:c})=>A.jsxs("div",{className:"space-y-3.5",children:[A.jsxs("div",{className:"space-y-1",children:[A.jsx("label",{className:"text-xs font-medium text-slate-300 block",children:"Color Art Palette"}),A.jsxs("select",{value:l,onChange:f=>c(f.target.value),className:"w-full bg-slate-900 border border-slate-800 text-slate-200 text-xs p-2 rounded-xl focus:outline-none focus:border-emerald-500 cursor-pointer",children:[A.jsx("option",{value:"solid",children:"Single Solid Color"}),A.jsx("option",{value:"rainbow",children:"Dynamic Rainbow 🌈"}),A.jsx("option",{value:"forest",children:"Organic Forest 🌿"}),A.jsx("option",{value:"sunset",children:"Solar Sunset 🌅"}),A.jsx("option",{value:"depth",children:"3D Height Gradient ⇳"}),A.jsx("option",{value:"neon",children:"Radioactive Neon ⚡"})]})]}),l==="solid"&&A.jsxs("div",{className:"space-y-1",children:[A.jsx("label",{className:"text-xs font-medium text-slate-300 block",children:"Line Color"}),A.jsxs("div",{className:"flex gap-2",children:[A.jsx("input",{type:"color",value:r,onChange:f=>e(f.target.value),className:"w-10 h-8 rounded-lg border border-slate-700 bg-transparent p-0 cursor-pointer overflow-hidden shrink-0"}),A.jsx("input",{type:"text",value:r,onChange:f=>e(f.target.value),className:"flex-1 bg-slate-900 border border-slate-800 text-slate-200 font-mono text-xs px-2.5 py-1.5 rounded-lg focus:outline-none focus:border-emerald-500"})]})]}),A.jsxs("div",{className:"space-y-1",children:[A.jsx("label",{className:"text-xs font-medium text-slate-300 block",children:"Background Canvas"}),A.jsxs("div",{className:"flex gap-2",children:[A.jsx("input",{type:"color",value:i,onChange:f=>s(f.target.value),className:"w-10 h-8 rounded-lg border border-slate-700 bg-transparent p-0 cursor-pointer overflow-hidden shrink-0"}),A.jsx("input",{type:"text",value:i,onChange:f=>s(f.target.value),className:"flex-1 bg-slate-900 border border-slate-800 text-slate-200 font-mono text-xs px-2.5 py-1.5 rounded-lg focus:outline-none focus:border-emerald-500"})]})]})]}),AR=({childrenMap:r,styleProps:e})=>{const[i,s]=Ke.useState({presets:!1,rules:!0,actions:!1,variables:!1,style:!1,animations:!1,performance:!1,share:!1,export:!1}),l=c=>{s(f=>({...f,[c]:!f[c]}))};return A.jsxs("div",{className:"w-full h-full flex flex-col bg-slate-950/80 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl divide-y divide-slate-800",children:[A.jsxs("div",{className:"p-4 bg-slate-950 flex items-center gap-2",children:[A.jsx(Yr,{className:"w-5 h-5 text-emerald-400"}),A.jsx("h2",{className:"font-bold text-slate-100 tracking-tight text-base font-sans leading-none",children:"Design Parameters"})]}),A.jsxs("div",{className:"flex-grow overflow-y-auto",style:{maxHeight:"calc(100vh - 120px)"},children:[A.jsx(wa,{title:"Fractal Templates",icon:A.jsx(fh,{className:"w-4 h-4 text-emerald-400"}),isOpen:i.presets,onToggle:()=>l("presets"),children:r.presets}),A.jsx(wa,{title:"Variables & Morphing",icon:A.jsx(fh,{className:"w-4 h-4 text-teal-400"}),isOpen:i.variables,onToggle:()=>l("variables"),children:r.variables}),A.jsx(wa,{title:"Axiom & Rules",icon:A.jsx(Yr,{className:"w-4 h-4 text-indigo-400"}),isOpen:i.rules,onToggle:()=>l("rules"),children:r.rules}),A.jsx(wa,{title:"Symbol Actions Mapping",icon:A.jsx(Yr,{className:"w-4 h-4 text-violet-400"}),isOpen:i.actions,onToggle:()=>l("actions"),children:r.actions}),A.jsx(wa,{title:"Styling & Palettes",icon:A.jsx(Yr,{className:"w-4 h-4 text-cyan-400"}),isOpen:i.style,onToggle:()=>l("style"),children:A.jsx(TR,{...e})}),A.jsx(wa,{title:"Performance & Safety Limits",icon:A.jsx(fh,{className:"w-4 h-4 text-emerald-400"}),isOpen:i.performance,onToggle:()=>l("performance"),children:r.performance}),A.jsx(wa,{title:"Aesthetic Animations",icon:A.jsx(b2,{className:"w-4 h-4 text-pink-400"}),isOpen:i.animations,onToggle:()=>l("animations"),children:r.animations}),A.jsx(wa,{title:"Share, Load & Save",icon:A.jsx(Yr,{className:"w-4 h-4 text-sky-400"}),isOpen:i.share,onToggle:()=>l("share"),children:r.share}),A.jsx(wa,{title:"Artwork Exporter",icon:A.jsx(Yr,{className:"w-4 h-4 text-rose-400"}),isOpen:i.export,onToggle:()=>l("export"),children:r.export})]}),A.jsxs("div",{className:"p-3 bg-slate-950 font-sans text-[10px] text-slate-500 leading-relaxed text-center flex items-center justify-center gap-1.5 shrink-0 border-t border-slate-900",children:[A.jsx(pv,{className:"w-3.5 h-3.5"}),A.jsx("span",{children:"Fully client-side render engine. No remote server queries."})]})]})};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const RR=`
  // Port basic arithmetic evaluator (similar to expand/evaluate in main thread)
  function evaluateArithmetic(expr) {
    const sanitized = expr.replace(/\\s+/g, "");
    let index = 0;

    function parseExpression() {
      let value = parseTerm();
      while (index < sanitized.length) {
        const op = sanitized[index];
        if (op === "+" || op === "-") {
          index++;
          const nextTerm = parseTerm();
          if (op === "+") value += nextTerm;
          else value -= nextTerm;
        } else {
          break;
        }
      }
      return value;
    }

    function parseTerm() {
      let value = parseFactor();
      while (index < sanitized.length) {
        const op = sanitized[index];
        if (op === "*" || op === "/") {
          index++;
          const nextFactor = parseFactor();
          if (op === "*") {
            value *= nextFactor;
          } else {
            if (nextFactor === 0) throw new Error("Division by zero");
            value /= nextFactor;
          }
        } else {
          break;
        }
      }
      return value;
    }

    function parseFactor() {
      if (index >= sanitized.length) return 0;
      
      if (sanitized[index] === "(") {
        index++;
        const value = parseExpression();
        if (sanitized[index] === ")") {
          index++;
        }
        return value;
      }

      let sign = 1;
      if (sanitized[index] === "-") {
        sign = -1;
        index++;
      } else if (sanitized[index] === "+") {
        index++;
      }

      let start = index;
      while (
        index < sanitized.length &&
        ((sanitized[index] >= "0" && sanitized[index] <= "9") || sanitized[index] === ".")
      ) {
        index++;
      }

      if (start === index) {
        return 0;
      }

      const numStr = sanitized.substring(start, index);
      return parseFloat(numStr) * sign;
    }

    return parseExpression();
  }

  function evaluateExpression(expr, variables) {
    let cleaned = expr.trim();
    if (!cleaned) return 0;

    const sortedVariables = Object.entries(variables).sort((a, b) => b[0].length - a[0].length);
    for (const [name, val] of sortedVariables) {
      const regex = new RegExp("\\\\b" + name + "\\\\b", "g");
      cleaned = cleaned.replace(regex, val.toString());
    }

    cleaned = cleaned.replace(/\\\\bPI\\\\b/gi, Math.PI.toString());
    cleaned = cleaned.replace(/\\\\bE\\\\b/gi, Math.E.toString());

    try {
      return evaluateArithmetic(cleaned);
    } catch (e) {
      return 0;
    }
  }

  function expandLSystem(axiom, rules, iterations, maxRulesOutputLength) {
    let currentString = axiom;
    let isCapped = false;

    const ruleMapping = {};
    for (const r of rules) {
      if (r.inputSymbol) {
        ruleMapping[r.inputSymbol] = r.successor;
      }
    }

    // Support Infinity or huge values
    const capLimit = maxRulesOutputLength || Infinity;

    for (let iter = 0; iter < iterations; iter++) {
      let nextString = "";
      let estimatedLength = 0;
      
      // Fast size check
      for (let i = 0; i < currentString.length; i++) {
        const char = currentString[i];
        const replacement = ruleMapping[char];
        estimatedLength += replacement !== undefined ? replacement.length : 1;
      }

      if (estimatedLength > capLimit) {
        for (let i = 0; i < currentString.length; i++) {
          const char = currentString[i];
          const replacement = ruleMapping[char];
          if (replacement !== undefined) {
            nextString += replacement;
          } else {
            nextString += char;
          }

          if (nextString.length >= capLimit) {
            nextString = nextString.substring(0, capLimit);
            isCapped = true;
            break;
          }
        }
        currentString = nextString;
        isCapped = true;
        break;
      } else {
        for (let i = 0; i < currentString.length; i++) {
          const char = currentString[i];
          const replacement = ruleMapping[char];
          if (replacement !== undefined) {
            nextString += replacement;
          } else {
            nextString += char;
          }
        }
        currentString = nextString;
      }
    }

    return {
      expandedString: currentString,
      isCapped,
      totalLength: currentString.length
    };
  }

  function rotateAroundAxis(vx, vy, vz, kx, ky, kz, theta, out) {
    const cosT = Math.cos(theta);
    const sinT = Math.sin(theta);

    const cx = ky * vz - kz * vy;
    const cy = kz * vx - kx * vz;
    const cz = kx * vy - ky * vx;

    const dBy1MinusCosT = (kx * vx + ky * vy + kz * vz) * (1 - cosT);

    out.x = vx * cosT + cx * sinT + kx * dBy1MinusCosT;
    out.y = vy * cosT + cy * sinT + ky * dBy1MinusCosT;
    out.z = vz * cosT + cz * sinT + kz * dBy1MinusCosT;

    const d = Math.sqrt(out.x * out.x + out.y * out.y + out.z * out.z);
    if (d > 0.00001) {
      out.x /= d;
      out.y /= d;
      out.z /= d;
    }
  }

  function getLSystemStats(expandedString, symbolActions, variables, defaultStepSize, defaultAngleDegrees) {
    let segmentCount = 0;
    let is3D = false;
    let maxPathDist = 0;
    let distFromRoot = 0;

    const actionRegistry = {};
    for (const sa of symbolActions) {
      if (sa.symbol) {
        actionRegistry[sa.symbol] = sa;
      }
    }

    const MAX_STACK_DEPTH = 100000;
    let stackPtr = 0;
    const localStackX = new Float32Array(MAX_STACK_DEPTH);
    const localStackY = new Float32Array(MAX_STACK_DEPTH);
    const localStackZ = new Float32Array(MAX_STACK_DEPTH);
    const localStackDist = new Float32Array(MAX_STACK_DEPTH);

    let px = 0, py = 0, pz = 0;
    let dx = 0, dy = 1, dz = 0;

    let minX = 0, maxX = 0;
    let minY = 0, maxY = 0;
    let minZ = 0, maxZ = 0;

    function updateBounds(x, y, z) {
      if (x < minX) minX = x; if (x > maxX) maxX = x;
      if (y < minY) minY = y; if (y > maxY) maxY = y;
      if (z < minZ) minZ = z; if (z > maxZ) maxZ = z;
    }

    const symbolValueRegistry = {};
    for (const sa of symbolActions) {
      if (sa.symbol) {
        if (sa.valueExpression) {
          symbolValueRegistry[sa.symbol] = evaluateExpression(sa.valueExpression, variables);
        } else {
          if (sa.actionType === "FORWARD" || sa.actionType === "FORWARD_NO_PEN") {
            symbolValueRegistry[sa.symbol] = defaultStepSize;
          } else {
            symbolValueRegistry[sa.symbol] = defaultAngleDegrees;
          }
        }
      }
    }

    const rotOut = { x: 0, y: 0, z: 0 };
    let ux = 0, uy = 0, uz = 1;
    let lx = 1, ly = 0, lz = 0;

    const len = expandedString.length;
    for (let i = 0; i < len; i++) {
      const symbol = expandedString[i];
      const action = actionRegistry[symbol];
      if (!action) continue;

      const actionVal = symbolValueRegistry[symbol] ?? 0;
      const angleRad = (actionVal * Math.PI) / 180.0;

      switch (action.actionType) {
        case "FORWARD": {
          px += dx * actionVal;
          py += dy * actionVal;
          pz += dz * actionVal;
          updateBounds(px, py, pz);
          distFromRoot += actionVal;
          if (distFromRoot > maxPathDist) maxPathDist = distFromRoot;
          segmentCount++;
          break;
        }
        case "FORWARD_NO_PEN": {
          px += dx * actionVal;
          py += dy * actionVal;
          pz += dz * actionVal;
          updateBounds(px, py, pz);
          distFromRoot += actionVal;
          if (distFromRoot > maxPathDist) maxPathDist = distFromRoot;
          break;
        }
        case "TURN_LEFT": {
          rotateAroundAxis(dx, dy, dz, ux, uy, uz, angleRad, rotOut); dx = rotOut.x; dy = rotOut.y; dz = rotOut.z;
          rotateAroundAxis(lx, ly, lz, ux, uy, uz, angleRad, rotOut); lx = rotOut.x; ly = rotOut.y; lz = rotOut.z;
          break;
        }
        case "TURN_RIGHT": {
          rotateAroundAxis(dx, dy, dz, ux, uy, uz, -angleRad, rotOut); dx = rotOut.x; dy = rotOut.y; dz = rotOut.z;
          rotateAroundAxis(lx, ly, lz, ux, uy, uz, -angleRad, rotOut); lx = rotOut.x; ly = rotOut.y; lz = rotOut.z;
          break;
        }
        case "PUSH_STATE": {
          if (stackPtr < MAX_STACK_DEPTH) {
            localStackX[stackPtr] = px;
            localStackY[stackPtr] = py;
            localStackZ[stackPtr] = pz;
            localStackDist[stackPtr] = distFromRoot;
            stackPtr++;
          }
          break;
        }
        case "POP_STATE": {
          if (stackPtr > 0) {
            stackPtr--;
            px = localStackX[stackPtr];
            py = localStackY[stackPtr];
            pz = localStackZ[stackPtr];
            distFromRoot = localStackDist[stackPtr];
          }
          break;
        }
        case "PITCH_UP":
        case "PITCH_DOWN":
        case "ROLL_LEFT":
        case "ROLL_RIGHT":
        case "YAW_LEFT":
        case "YAW_RIGHT":
        case "TURN_ROUND": {
          is3D = true;
          if (action.actionType === "PITCH_UP") {
            rotateAroundAxis(dx, dy, dz, lx, ly, lz, angleRad, rotOut); dx = rotOut.x; dy = rotOut.y; dz = rotOut.z;
            rotateAroundAxis(ux, uy, uz, lx, ly, lz, angleRad, rotOut); ux = rotOut.x; uy = rotOut.y; uz = rotOut.z;
          } else if (action.actionType === "PITCH_DOWN") {
            rotateAroundAxis(dx, dy, dz, lx, ly, lz, -angleRad, rotOut); dx = rotOut.x; dy = rotOut.y; dz = rotOut.z;
            rotateAroundAxis(ux, uy, uz, lx, ly, lz, -angleRad, rotOut); ux = rotOut.x; uy = rotOut.y; uz = rotOut.z;
          } else if (action.actionType === "ROLL_LEFT") {
            rotateAroundAxis(lx, ly, lz, dx, dy, dz, angleRad, rotOut); lx = rotOut.x; ly = rotOut.y; lz = rotOut.z;
            rotateAroundAxis(ux, uy, uz, dx, dy, dz, angleRad, rotOut); ux = rotOut.x; uy = rotOut.y; uz = rotOut.z;
          } else if (action.actionType === "ROLL_RIGHT") {
            rotateAroundAxis(lx, ly, lz, dx, dy, dz, -angleRad, rotOut); lx = rotOut.x; ly = rotOut.y; lz = rotOut.z;
            rotateAroundAxis(ux, uy, uz, dx, dy, dz, -angleRad, rotOut); ux = rotOut.x; uy = rotOut.y; uz = rotOut.z;
          } else if (action.actionType === "YAW_LEFT") {
            rotateAroundAxis(dx, dy, dz, ux, uy, uz, angleRad, rotOut); dx = rotOut.x; dy = rotOut.y; dz = rotOut.z;
            rotateAroundAxis(lx, ly, lz, ux, uy, uz, angleRad, rotOut); lx = rotOut.x; ly = rotOut.y; lz = rotOut.z;
          } else if (action.actionType === "YAW_RIGHT") {
            rotateAroundAxis(dx, dy, dz, ux, uy, uz, -angleRad, rotOut); dx = rotOut.x; dy = rotOut.y; dz = rotOut.z;
            rotateAroundAxis(lx, ly, lz, ux, uy, uz, -angleRad, rotOut); lx = rotOut.x; ly = rotOut.y; lz = rotOut.z;
          } else if (action.actionType === "TURN_ROUND") {
            dx = -dx; dy = -dy; dz = -dz;
            lx = -lx; ly = -ly; lz = -lz;
          }
          break;
        }
      }
    }

    return {
      segmentCount,
      is3D,
      boundingBox: { min: { x: minX, y: minY, z: minZ }, max: { x: maxX, y: maxY, z: maxZ } },
      maxPathDist
    };
  }

  self.onmessage = function(e) {
    const { requestId, axiom, rules, iterations, maxOutputLimit, symbolActions, varMap, stepSize, angle } = e.data;
    try {
      const startTime = performance.now();
      const expansion = expandLSystem(axiom, rules, iterations, maxOutputLimit);
      const stats = getLSystemStats(expansion.expandedString, symbolActions, varMap, stepSize, angle);
      const evalTimeMs = performance.now() - startTime;

      self.postMessage({
        requestId,
        success: true,
        expandedString: expansion.expandedString,
        isCapped: expansion.isCapped,
        totalLength: expansion.totalLength,
        segmentCount: stats.segmentCount,
        is3D: stats.is3D,
        boundingBox: stats.boundingBox,
        maxPathDist: stats.maxPathDist,
        evalTimeMs
      });
    } catch (err) {
      self.postMessage({
        requestId,
        success: false,
        error: err.message || String(err)
      });
    }
  };
`;let ph=null,CR=0,qr=null,Qc=!1;function wR(){if(!ph){const r=new Blob([RR],{type:"application/javascript"}),e=URL.createObjectURL(r);ph=new Worker(e)}return ph}function DR(r){return new Promise(e=>{if(Qc){setTimeout(()=>{try{const i=performance.now(),s=sl(r.axiom,r.rules,r.iterations,r.maxOutputLimit),l=ll(s.expandedString,r.symbolActions,r.varMap,r.stepSize,r.angle),c=performance.now()-i;e({success:!0,expandedString:s.expandedString,isCapped:s.isCapped,totalLength:s.totalLength,segmentCount:l.segmentCount,is3D:l.is3D,boundingBox:l.boundingBox,maxPathDist:l.maxPathDist,evalTimeMs:c})}catch(i){e({success:!1,expandedString:"",isCapped:!1,totalLength:0,segmentCount:0,is3D:!1,boundingBox:{min:{x:0,y:0,z:0},max:{x:0,y:0,z:0}},maxPathDist:0,evalTimeMs:0,error:i.message||String(i)})}},0);return}try{const i=wR(),s=++CR;qr&&qr({success:!1,expandedString:"",isCapped:!1,totalLength:0,segmentCount:0,is3D:!1,boundingBox:{min:{x:0,y:0,z:0},max:{x:0,y:0,z:0}},maxPathDist:0,evalTimeMs:0,error:"ABORTED"}),qr=e;let l=setTimeout(()=>{console.warn("Background web worker response timed out (possibly blocked by iframe sandbox). Switching resiliently to main thread."),Qc=!0,qr=null;try{const c=performance.now(),f=sl(r.axiom,r.rules,r.iterations,r.maxOutputLimit),p=ll(f.expandedString,r.symbolActions,r.varMap,r.stepSize,r.angle),m=performance.now()-c;e({success:!0,expandedString:f.expandedString,isCapped:f.isCapped,totalLength:f.totalLength,segmentCount:p.segmentCount,is3D:p.is3D,boundingBox:p.boundingBox,maxPathDist:p.maxPathDist,evalTimeMs:m})}catch(c){e({success:!1,expandedString:"",isCapped:!1,totalLength:0,segmentCount:0,is3D:!1,boundingBox:{min:{x:0,y:0,z:0},max:{x:0,y:0,z:0}},maxPathDist:0,evalTimeMs:0,error:c.message||String(c)})}},150);i.onmessage=c=>{const f=c.data;f.requestId===s&&(clearTimeout(l),qr=null,e(f))},i.onerror=c=>{console.error("Web worker error met, falling back to main thread:",c),clearTimeout(l),Qc=!0,qr=null;try{const f=performance.now(),p=sl(r.axiom,r.rules,r.iterations,r.maxOutputLimit),m=ll(p.expandedString,r.symbolActions,r.varMap,r.stepSize,r.angle),h=performance.now()-f;e({success:!0,expandedString:p.expandedString,isCapped:p.isCapped,totalLength:p.totalLength,segmentCount:m.segmentCount,is3D:m.is3D,boundingBox:m.boundingBox,maxPathDist:m.maxPathDist,evalTimeMs:h})}catch(f){e({success:!1,expandedString:"",isCapped:!1,totalLength:0,segmentCount:0,is3D:!1,boundingBox:{min:{x:0,y:0,z:0},max:{x:0,y:0,z:0}},maxPathDist:0,evalTimeMs:0,error:f.message||String(f)})}},i.postMessage({requestId:s,...r})}catch(i){console.warn("Background web worker blocked or failed to initialize, switching to resilient main thread execution:",i),Qc=!0;try{const s=performance.now(),l=sl(r.axiom,r.rules,r.iterations,r.maxOutputLimit),c=ll(l.expandedString,r.symbolActions,r.varMap,r.stepSize,r.angle),f=performance.now()-s;e({success:!0,expandedString:l.expandedString,isCapped:l.isCapped,totalLength:l.totalLength,segmentCount:c.segmentCount,is3D:c.is3D,boundingBox:c.boundingBox,maxPathDist:c.maxPathDist,evalTimeMs:f})}catch(s){e({success:!1,expandedString:"",isCapped:!1,totalLength:0,segmentCount:0,is3D:!1,boundingBox:{min:{x:0,y:0,z:0},max:{x:0,y:0,z:0}},maxPathDist:0,evalTimeMs:0,error:s.message||String(s)})}}})}const R_="lsystem_explorer_active_space";function NR(){const[r,e]=Ke.useState(()=>{const M=window.location.hash;if(M.startsWith("#share=")){const W=M.substring(7),K=M_(W);if(K)return{...yi[0],...K,presetId:K.presetId||yi[0].id,lastLoadedPresetId:K.presetId||yi[0].id,id:`shared_${Date.now()}`}}try{const W=localStorage.getItem(R_);if(W){const K=JSON.parse(W);return{...K,presetId:K.presetId||yi[0].id,lastLoadedPresetId:K.lastLoadedPresetId||K.presetId||yi[0].id}}}catch{}const H=yi[0];return{...H,presetId:H.id,lastLoadedPresetId:H.id}}),[i,s]=Ke.useState(r.renderSettings.growPercent||100),[l,c]=Ke.useState(!1),[f,p]=Ke.useState("sequential"),m=Ke.useRef(r);Ke.useEffect(()=>{m.current=r},[r]);const[h,g]=Ke.useState(0),[_,x]=Ke.useState(()=>{try{const M=localStorage.getItem("lsystem_max_output_limit");return M==="Infinity"?1/0:M?Number(M):25e4}catch{return 25e4}});Ke.useEffect(()=>{localStorage.setItem("lsystem_max_output_limit",_.toString())},[_]);const[E,T]=Ke.useState(r.renderSettings.showAxes||!1),U=Ke.useRef(null),S=Ke.useRef(null),v=Ke.useRef(null),P=Ke.useRef;Ke.useEffect(()=>{try{localStorage.setItem(R_,JSON.stringify(r))}catch{}},[r]),Ke.useEffect(()=>{const M=()=>{const H=window.location.hash;if(H.startsWith("#share=")){const W=M_(H.substring(7));W&&e(K=>({...K,...W,presetId:W.presetId||K.presetId,id:`shared_${Date.now()}`}))}};return window.addEventListener("hashchange",M),()=>window.removeEventListener("hashchange",M)},[]);const V=r.variables.some(M=>M.animate);Ke.useEffect(()=>{if(!(l||m.current.variables.some(q=>q.animate)))return;let H=performance.now(),W;const K=q=>{const se=Math.min((q-H)/1e3,.1);H=q,l&&s(ve=>{const Oe=ve+se*18;return Oe>=100?0:Oe}),m.current.variables.some(ve=>ve.animate)&&e(ve=>{const Oe=ve.variables.map(be=>{if(!be.animate)return be;const Qe=be.animationSpeed||5,We=be.animationDirection||1;let Ie=be.value+We*Qe*se,Je=We;return be.animationType==="ping-pong"?Ie>=be.max?(Ie=be.max,Je=-1):Ie<=be.min&&(Ie=be.min,Je=1):be.animationType==="loop"?Ie>=be.max?Ie=be.min:Ie<=be.min&&(Ie=be.max):be.animationType==="one-way"&&Ie>=be.max&&(Ie=be.max,be.animate=!1),{...be,value:Ie,animationDirection:Je}});return{...ve,variables:Oe}}),W=requestAnimationFrame(K)};return W=requestAnimationFrame(K),()=>cancelAnimationFrame(W)},[l,V]);const B=Ke.useMemo(()=>{const M={};for(const H of r.variables)M[H.name]=H.value;return M},[r.variables]),Z=Ke.useMemo(()=>{if(typeof r.iterations=="number")return r.iterations;const M=Zs(r.iterations,B);return isNaN(M)?1:Math.max(0,Math.floor(M))},[r.iterations,B]),[G,j]=Ke.useState(()=>{const M={};for(const K of r.variables)M[K.name]=K.value;const H=sl(r.axiom,r.rules,3,5e4),W=ll(H.expandedString,r.symbolActions,M,r.renderSettings.stepSize,r.renderSettings.angle);return{expandedString:H.expandedString,isCapped:H.isCapped,totalLength:H.totalLength,segmentCount:W.segmentCount,is3D:W.is3D,boundingBox:W.boundingBox,maxPathDist:W.maxPathDist}}),[D,k]=Ke.useState(!1);Ke.useEffect(()=>{let M=!0;return k(!0),DR({axiom:r.axiom,rules:r.rules,iterations:Z,maxOutputLimit:_,symbolActions:r.symbolActions,varMap:B,stepSize:r.renderSettings.stepSize,angle:r.renderSettings.angle}).then(H=>{M&&(k(!1),H.success&&(j({expandedString:H.expandedString,isCapped:H.isCapped,totalLength:H.totalLength,segmentCount:H.segmentCount,is3D:H.is3D,boundingBox:H.boundingBox,maxPathDist:H.maxPathDist}),g(H.evalTimeMs)))}),()=>{M=!1}},[r.axiom,r.rules,Z,_,r.symbolActions,B,r.renderSettings.stepSize,r.renderSettings.angle]);const J=M=>{c(!1),s(100),e({...M,presetId:M.id,lastLoadedPresetId:M.id,id:`preset_${Date.now()}`})},Y=M=>{e(H=>{const W=H.presetId&&H.presetId!=="custom"?H.presetId:H.lastLoadedPresetId;return{...H,axiom:M,presetId:"custom",lastLoadedPresetId:W}})},ae=M=>{e(H=>{const W=H.presetId&&H.presetId!=="custom"?H.presetId:H.lastLoadedPresetId;return{...H,iterations:M,presetId:"custom",lastLoadedPresetId:W}})},ee=M=>{e(H=>{const W=H.presetId&&H.presetId!=="custom"?H.presetId:H.lastLoadedPresetId;return{...H,rules:M,presetId:"custom",lastLoadedPresetId:W}})},xe=M=>{e(H=>{const W=H.presetId&&H.presetId!=="custom"?H.presetId:H.lastLoadedPresetId;return{...H,symbolActions:M,presetId:"custom",lastLoadedPresetId:W}})},X=M=>{e(H=>({...H,variables:M}))},N=(M,H)=>{e(W=>({...W,renderSettings:{...W.renderSettings,[M]:H}}))},I=M=>S.current?S.current(M):"",R=()=>v.current?v.current():"",w=async M=>{if(P.current)return await P.current(M);throw new Error("Render engine is not ready for GIF export.")},F=r.presetId||r.id,b={presets:A.jsx("div",{className:"bg-slate-900/30 p-2 rounded-xl",children:A.jsx(J2,{activePresetId:F,onSelectPreset:J,definition:r})}),rules:A.jsx($2,{axiom:r.axiom,onChangeAxiom:Y,iterations:r.iterations,onChangeIterations:ae,rules:r.rules,onChangeRules:ee,availableVariables:r.variables.map(M=>M.name),isCapped:G.isCapped}),actions:A.jsx(eR,{symbolActions:r.symbolActions,onChangeSymbolActions:xe,availableVariables:r.variables.map(M=>M.name)}),variables:A.jsx(tR,{variables:r.variables,onChangeVariables:X}),animations:A.jsx(nR,{growPercent:i,onChangeGrowPercent:s,isGrowing:l,onToggleGrowing:()=>c(!l),animationStyle:f,onChangeAnimationStyle:p}),share:A.jsx(sR,{currentLSystem:r,onLoadSystem:J}),performance:A.jsxs("div",{className:"space-y-4",children:[A.jsx("p",{className:"text-[11px] text-slate-400 leading-relaxed text-left",children:"Configure the maximum string length for optimal performance. High-complexity fractals are offloaded to a background Web Worker so the app remains flawlessly responsive and smooth!"}),A.jsxs("div",{className:"space-y-2 text-left",children:[A.jsxs("label",{className:"text-xs font-semibold text-slate-350 flex items-center gap-1.5",children:[A.jsx(v2,{className:"w-3.5 h-3.5 text-purple-400"}),A.jsx("span",{children:"Maximum Output Limit:"})]}),A.jsx("div",{className:"grid grid-cols-2 gap-1.5",children:[{label:"Fast (50K)",value:5e4},{label:"Standard (250K)",value:25e4},{label:"High (1M)",value:1e6},{label:"Max (10M)",value:1e7}].map(M=>A.jsx("button",{type:"button",onClick:()=>x(M.value),className:`py-1.5 px-2 rounded-xl text-center text-xs font-medium border transition-all cursor-pointer ${_===M.value?"bg-purple-500/10 text-purple-300 border-purple-500/50 shadow-md shadow-purple-500/5":"bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-900/100"}`,children:M.label},M.value))}),A.jsx("button",{type:"button",onClick:()=>x(1/0),className:`w-full py-2.5 px-3 mt-1.5 rounded-xl text-center text-xs font-bold border transition-all cursor-pointer ${_===1/0?"bg-gradient-to-r from-emerald-500/20 to-purple-500/20 text-emerald-300 border-emerald-500/40 shadow-lg shadow-emerald-500/5":"bg-slate-950 text-slate-400 border-slate-800 hover:bg-slate-900"}`,children:"🔥 No Limit (Infinity)"})]}),A.jsxs("div",{className:"p-3 bg-slate-900/40 border border-slate-800/80 rounded-xl space-y-1.5 text-left",children:[A.jsx("span",{className:"text-[10px] text-slate-400 block font-semibold uppercase tracking-wider",children:"Engine Status (Web Worker)"}),A.jsxs("div",{className:"flex justify-between text-xs text-slate-350 font-mono",children:[A.jsx("span",{children:"String Output Length:"}),A.jsxs("span",{className:G.isCapped?"text-amber-400 font-bold":"text-emerald-400",children:[G.totalLength.toLocaleString()," ",G.isCapped?"(Capped)":""]})]}),A.jsxs("div",{className:"flex justify-between text-xs text-slate-350 font-mono",children:[A.jsx("span",{children:"L-System Eval Time:"}),A.jsxs("span",{className:"text-slate-200",children:[h.toFixed(1),"ms"]})]})]})]}),export:A.jsx(iR,{onExportPng:I,onExportSvg:R,onExportGif:w})};return A.jsxs("div",{className:"w-screen min-h-screen bg-[#070b13] text-slate-100 flex flex-col font-sans select-none antialiased overflow-x-hidden md:overflow-y-hidden md:h-screen transition-colors duration-500",children:[A.jsxs("header",{className:"h-16 px-6 bg-[#070b13]/80 backdrop-blur-md border-b border-slate-900/60 flex items-center justify-between shrink-0",children:[A.jsxs("div",{className:"flex items-center gap-3",children:[A.jsx("div",{className:"p-2 bg-purple-500/10 text-purple-400 rounded-xl border border-purple-500/20",children:A.jsx(mv,{className:"w-5 h-5 animate-pulse",id:"header-brand-icon"})}),A.jsxs("div",{children:[A.jsx("h1",{className:"text-base font-bold tracking-tight text-white leading-none",children:"L-System Studio"}),A.jsx("span",{className:"text-[10px] text-slate-500 font-mono mt-0.5 block",children:"v1.3 • Web Worker Threaded Engine"})]})]}),A.jsx("div",{className:"hidden md:flex items-center gap-4 text-xs text-slate-400",children:A.jsxs("div",{className:"flex items-center gap-1.5 bg-slate-900/40 px-3 py-1.5 rounded-lg border border-slate-800/60",children:[A.jsx("span",{className:"w-2 h-2 rounded-full bg-indigo-500 animate-pulse"}),A.jsx("span",{className:"text-[10px] font-mono",children:"Worker Processing Enabled"})]})})]}),A.jsxs("main",{className:"flex-grow flex flex-col md:flex-row p-4 md:p-5 gap-4 overflow-hidden h-[calc(100vh-64px)] w-full",children:[A.jsx("aside",{className:"w-full md:w-[410px] lg:w-[430px] shrink-0 h-full flex flex-col overflow-hidden",children:A.jsx(AR,{childrenMap:b,styleProps:{strokeColor:r.renderSettings.strokeColor,onChangeStrokeColor:M=>N("strokeColor",M),backgroundColor:r.renderSettings.backgroundColor,onChangeBackgroundColor:M=>N("backgroundColor",M),strokeWidth:r.renderSettings.strokeWidth,onChangeStrokeWidth:M=>N("strokeWidth",M),colorPalette:r.renderSettings.colorPalette,onChangeColorPalette:M=>N("colorPalette",M)}})}),A.jsx("section",{className:"flex-grow h-full min-h-[500px] md:h-full relative overflow-hidden",children:A.jsx(ER,{expandedString:G.expandedString,segmentCount:G.segmentCount,symbolActions:r.symbolActions,variables:B,defaultStepSize:r.renderSettings.stepSize,defaultAngleDegrees:r.renderSettings.angle,is3D:G.is3D,onToggle3D:M=>N("is3D",M),boundingBox:G.boundingBox,maxPathDist:G.maxPathDist,colorPalette:r.renderSettings.colorPalette,strokeColor:r.renderSettings.strokeColor,backgroundColor:r.renderSettings.backgroundColor,strokeWidth:r.renderSettings.strokeWidth,showAxes:E,onToggleAxes:T,growPercent:i,animationStyle:f,isCapped:G.isCapped,totalLength:G.totalLength,evaluationTimeMs:h,isCalculating:D,onCenteringTriggerRef:U,onExportPngTriggerRef:S,onExportSvgTriggerRef:v,onExportGifTriggerRef:P})})]})]})}LS.createRoot(document.getElementById("root")).render(A.jsx(Ke.StrictMode,{children:A.jsx(NR,{})}));
