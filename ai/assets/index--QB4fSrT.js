(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Rb(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Md={exports:{}},qo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ax;function Cb(){if(ax)return qo;ax=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return qo.Fragment=e,qo.jsx=i,qo.jsxs=i,qo}var sx;function wb(){return sx||(sx=1,Md.exports=Cb()),Md.exports}var v=wb(),Ed={exports:{}},vt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rx;function Nb(){if(rx)return vt;rx=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),x=Symbol.iterator;function M(T){return T===null||typeof T!="object"?null:(T=x&&T[x]||T["@@iterator"],typeof T=="function"?T:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,S={};function y(T,C,K){this.props=T,this.context=C,this.refs=S,this.updater=K||E}y.prototype.isReactComponent={},y.prototype.setState=function(T,C){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,C,"setState")},y.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function I(){}I.prototype=y.prototype;function G(T,C,K){this.props=T,this.context=C,this.refs=S,this.updater=K||E}var B=G.prototype=new I;B.constructor=G,U(B,y.prototype),B.isPureReactComponent=!0;var Z=Array.isArray;function H(){}var k={H:null,A:null,T:null,S:null},N=Object.prototype.hasOwnProperty;function V(T,C,K){var Q=K.ref;return{$$typeof:r,type:T,key:C,ref:Q!==void 0?Q:null,props:K}}function j(T,C){return V(T.type,C,T.props)}function W(T){return typeof T=="object"&&T!==null&&T.$$typeof===r}function $(T){var C={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(K){return C[K]})}var fe=/\/+/g;function te(T,C){return typeof T=="object"&&T!==null&&T.key!=null?$(""+T.key):C.toString(36)}function X(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(H,H):(T.status="pending",T.then(function(C){T.status==="pending"&&(T.status="fulfilled",T.value=C)},function(C){T.status==="pending"&&(T.status="rejected",T.reason=C)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function O(T,C,K,Q,Y){var q=typeof T;(q==="undefined"||q==="boolean")&&(T=null);var re=!1;if(T===null)re=!0;else switch(q){case"bigint":case"string":case"number":re=!0;break;case"object":switch(T.$$typeof){case r:case e:re=!0;break;case g:return re=T._init,O(re(T._payload),C,K,Q,Y)}}if(re)return Y=Y(T),re=Q===""?"."+te(T,0):Q,Z(Y)?(K="",re!=null&&(K=re.replace(fe,"$&/")+"/"),O(Y,C,K,"",function(Ae){return Ae})):Y!=null&&(W(Y)&&(Y=j(Y,K+(Y.key==null||T&&T.key===Y.key?"":(""+Y.key).replace(fe,"$&/")+"/")+re)),C.push(Y)),1;re=0;var ue=Q===""?".":Q+":";if(Z(T))for(var De=0;De<T.length;De++)Q=T[De],q=ue+te(Q,De),re+=O(Q,C,K,q,Y);else if(De=M(T),typeof De=="function")for(T=De.call(T),De=0;!(Q=T.next()).done;)Q=Q.value,q=ue+te(Q,De++),re+=O(Q,C,K,q,Y);else if(q==="object"){if(typeof T.then=="function")return O(X(T),C,K,Q,Y);throw C=String(T),Error("Objects are not valid as a React child (found: "+(C==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":C)+"). If you meant to render a collection of children, use an array instead.")}return re}function D(T,C,K){if(T==null)return T;var Q=[],Y=0;return O(T,Q,"","",function(q){return C.call(K,q,Y++)}),Q}function w(T){if(T._status===-1){var C=T._result;C=C(),C.then(function(K){(T._status===0||T._status===-1)&&(T._status=1,T._result=K)},function(K){(T._status===0||T._status===-1)&&(T._status=2,T._result=K)}),T._status===-1&&(T._status=0,T._result=C)}if(T._status===1)return T._result.default;throw T._result}var A=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var C=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(C))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)},L={map:D,forEach:function(T,C,K){D(T,function(){C.apply(this,arguments)},K)},count:function(T){var C=0;return D(T,function(){C++}),C},toArray:function(T){return D(T,function(C){return C})||[]},only:function(T){if(!W(T))throw Error("React.Children.only expected to receive a single React element child.");return T}};return vt.Activity=_,vt.Children=L,vt.Component=y,vt.Fragment=i,vt.Profiler=l,vt.PureComponent=G,vt.StrictMode=s,vt.Suspense=m,vt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,vt.__COMPILER_RUNTIME={__proto__:null,c:function(T){return k.H.useMemoCache(T)}},vt.cache=function(T){return function(){return T.apply(null,arguments)}},vt.cacheSignal=function(){return null},vt.cloneElement=function(T,C,K){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var Q=U({},T.props),Y=T.key;if(C!=null)for(q in C.key!==void 0&&(Y=""+C.key),C)!N.call(C,q)||q==="key"||q==="__self"||q==="__source"||q==="ref"&&C.ref===void 0||(Q[q]=C[q]);var q=arguments.length-2;if(q===1)Q.children=K;else if(1<q){for(var re=Array(q),ue=0;ue<q;ue++)re[ue]=arguments[ue+2];Q.children=re}return V(T.type,Y,Q)},vt.createContext=function(T){return T={$$typeof:f,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:c,_context:T},T},vt.createElement=function(T,C,K){var Q,Y={},q=null;if(C!=null)for(Q in C.key!==void 0&&(q=""+C.key),C)N.call(C,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(Y[Q]=C[Q]);var re=arguments.length-2;if(re===1)Y.children=K;else if(1<re){for(var ue=Array(re),De=0;De<re;De++)ue[De]=arguments[De+2];Y.children=ue}if(T&&T.defaultProps)for(Q in re=T.defaultProps,re)Y[Q]===void 0&&(Y[Q]=re[Q]);return V(T,q,Y)},vt.createRef=function(){return{current:null}},vt.forwardRef=function(T){return{$$typeof:p,render:T}},vt.isValidElement=W,vt.lazy=function(T){return{$$typeof:g,_payload:{_status:-1,_result:T},_init:w}},vt.memo=function(T,C){return{$$typeof:h,type:T,compare:C===void 0?null:C}},vt.startTransition=function(T){var C=k.T,K={};k.T=K;try{var Q=T(),Y=k.S;Y!==null&&Y(K,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(H,A)}catch(q){A(q)}finally{C!==null&&K.types!==null&&(C.types=K.types),k.T=C}},vt.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},vt.use=function(T){return k.H.use(T)},vt.useActionState=function(T,C,K){return k.H.useActionState(T,C,K)},vt.useCallback=function(T,C){return k.H.useCallback(T,C)},vt.useContext=function(T){return k.H.useContext(T)},vt.useDebugValue=function(){},vt.useDeferredValue=function(T,C){return k.H.useDeferredValue(T,C)},vt.useEffect=function(T,C){return k.H.useEffect(T,C)},vt.useEffectEvent=function(T){return k.H.useEffectEvent(T)},vt.useId=function(){return k.H.useId()},vt.useImperativeHandle=function(T,C,K){return k.H.useImperativeHandle(T,C,K)},vt.useInsertionEffect=function(T,C){return k.H.useInsertionEffect(T,C)},vt.useLayoutEffect=function(T,C){return k.H.useLayoutEffect(T,C)},vt.useMemo=function(T,C){return k.H.useMemo(T,C)},vt.useOptimistic=function(T,C){return k.H.useOptimistic(T,C)},vt.useReducer=function(T,C,K){return k.H.useReducer(T,C,K)},vt.useRef=function(T){return k.H.useRef(T)},vt.useState=function(T){return k.H.useState(T)},vt.useSyncExternalStore=function(T,C,K){return k.H.useSyncExternalStore(T,C,K)},vt.useTransition=function(){return k.H.useTransition()},vt.version="19.2.7",vt}var ox;function ip(){return ox||(ox=1,Ed.exports=Nb()),Ed.exports}var We=ip(),Td={exports:{}},Yo={},Ad={exports:{}},Rd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lx;function Db(){return lx||(lx=1,(function(r){function e(O,D){var w=O.length;O.push(D);e:for(;0<w;){var A=w-1>>>1,L=O[A];if(0<l(L,D))O[A]=D,O[w]=L,w=A;else break e}}function i(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var D=O[0],w=O.pop();if(w!==D){O[0]=w;e:for(var A=0,L=O.length,T=L>>>1;A<T;){var C=2*(A+1)-1,K=O[C],Q=C+1,Y=O[Q];if(0>l(K,w))Q<L&&0>l(Y,K)?(O[A]=Y,O[Q]=w,A=Q):(O[A]=K,O[C]=w,A=C);else if(Q<L&&0>l(Y,w))O[A]=Y,O[Q]=w,A=Q;else break e}}return D}function l(O,D){var w=O.sortIndex-D.sortIndex;return w!==0?w:O.id-D.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,p=f.now();r.unstable_now=function(){return f.now()-p}}var m=[],h=[],g=1,_=null,x=3,M=!1,E=!1,U=!1,S=!1,y=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;function B(O){for(var D=i(h);D!==null;){if(D.callback===null)s(h);else if(D.startTime<=O)s(h),D.sortIndex=D.expirationTime,e(m,D);else break;D=i(h)}}function Z(O){if(U=!1,B(O),!E)if(i(m)!==null)E=!0,H||(H=!0,$());else{var D=i(h);D!==null&&X(Z,D.startTime-O)}}var H=!1,k=-1,N=5,V=-1;function j(){return S?!0:!(r.unstable_now()-V<N)}function W(){if(S=!1,H){var O=r.unstable_now();V=O;var D=!0;try{e:{E=!1,U&&(U=!1,I(k),k=-1),M=!0;var w=x;try{t:{for(B(O),_=i(m);_!==null&&!(_.expirationTime>O&&j());){var A=_.callback;if(typeof A=="function"){_.callback=null,x=_.priorityLevel;var L=A(_.expirationTime<=O);if(O=r.unstable_now(),typeof L=="function"){_.callback=L,B(O),D=!0;break t}_===i(m)&&s(m),B(O)}else s(m);_=i(m)}if(_!==null)D=!0;else{var T=i(h);T!==null&&X(Z,T.startTime-O),D=!1}}break e}finally{_=null,x=w,M=!1}D=void 0}}finally{D?$():H=!1}}}var $;if(typeof G=="function")$=function(){G(W)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,te=fe.port2;fe.port1.onmessage=W,$=function(){te.postMessage(null)}}else $=function(){y(W,0)};function X(O,D){k=y(function(){O(r.unstable_now())},D)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(O){O.callback=null},r.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<O?Math.floor(1e3/O):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(O){switch(x){case 1:case 2:case 3:var D=3;break;default:D=x}var w=x;x=D;try{return O()}finally{x=w}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(O,D){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var w=x;x=O;try{return D()}finally{x=w}},r.unstable_scheduleCallback=function(O,D,w){var A=r.unstable_now();switch(typeof w=="object"&&w!==null?(w=w.delay,w=typeof w=="number"&&0<w?A+w:A):w=A,O){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=w+L,O={id:g++,callback:D,priorityLevel:O,startTime:w,expirationTime:L,sortIndex:-1},w>A?(O.sortIndex=w,e(h,O),i(m)===null&&O===i(h)&&(U?(I(k),k=-1):U=!0,X(Z,w-A))):(O.sortIndex=L,e(m,O),E||M||(E=!0,H||(H=!0,$()))),O},r.unstable_shouldYield=j,r.unstable_wrapCallback=function(O){var D=x;return function(){var w=x;x=D;try{return O.apply(this,arguments)}finally{x=w}}}})(Rd)),Rd}var cx;function Ub(){return cx||(cx=1,Ad.exports=Db()),Ad.exports}var Cd={exports:{}},jn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ux;function Lb(){if(ux)return jn;ux=1;var r=ip();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)h+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:h,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return jn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,jn.createPortal=function(m,h){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(m,h,null,g)},jn.flushSync=function(m){var h=f.T,g=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=h,s.p=g,s.d.f()}},jn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(m,h))},jn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},jn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var g=h.as,_=p(g,h.crossOrigin),x=typeof h.integrity=="string"?h.integrity:void 0,M=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;g==="style"?s.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:M}):g==="script"&&s.d.X(m,{crossOrigin:_,integrity:x,fetchPriority:M,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},jn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var g=p(h.as,h.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(m)},jn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var g=h.as,_=p(g,h.crossOrigin);s.d.L(m,g,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},jn.preloadModule=function(m,h){if(typeof m=="string")if(h){var g=p(h.as,h.crossOrigin);s.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(m)},jn.requestFormReset=function(m){s.d.r(m)},jn.unstable_batchedUpdates=function(m,h){return m(h)},jn.useFormState=function(m,h,g){return f.H.useFormState(m,h,g)},jn.useFormStatus=function(){return f.H.useHostTransitionStatus()},jn.version="19.2.7",jn}var fx;function Ob(){if(fx)return Cd.exports;fx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Cd.exports=Lb(),Cd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dx;function Pb(){if(dx)return Yo;dx=1;var r=Ub(),e=ip(),i=Ob();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function h(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),t;if(d===o)return m(u),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var b=!1,F=u.child;F;){if(F===a){b=!0,a=u,o=d;break}if(F===o){b=!0,o=u,a=d;break}F=F.sibling}if(!b){for(F=d.child;F;){if(F===a){b=!0,a=d,o=u;break}if(F===o){b=!0,o=d,a=u;break}F=F.sibling}if(!b)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),G=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),V=Symbol.for("react.activity"),j=Symbol.for("react.memo_cache_sentinel"),W=Symbol.iterator;function $(t){return t===null||typeof t!="object"?null:(t=W&&t[W]||t["@@iterator"],typeof t=="function"?t:null)}var fe=Symbol.for("react.client.reference");function te(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===fe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case U:return"Fragment";case y:return"Profiler";case S:return"StrictMode";case Z:return"Suspense";case H:return"SuspenseList";case V:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case G:return t.displayName||"Context";case I:return(t._context.displayName||"Context")+".Consumer";case B:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case k:return n=t.displayName||null,n!==null?n:te(t.type)||"Memo";case N:n=t._payload,t=t._init;try{return te(t(n))}catch{}}return null}var X=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,w={pending:!1,data:null,method:null,action:null},A=[],L=-1;function T(t){return{current:t}}function C(t){0>L||(t.current=A[L],A[L]=null,L--)}function K(t,n){L++,A[L]=t.current,t.current=n}var Q=T(null),Y=T(null),q=T(null),re=T(null);function ue(t,n){switch(K(q,n),K(Y,t),K(Q,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Rg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Rg(n),t=Cg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}C(Q),K(Q,t)}function De(){C(Q),C(Y),C(q)}function Ae(t){t.memoizedState!==null&&K(re,t);var n=Q.current,a=Cg(n,t.type);n!==a&&(K(Y,t),K(Q,a))}function Ue(t){Y.current===t&&(C(Q),C(Y)),re.current===t&&(C(re),ko._currentValue=w)}var $e,Ze;function Ye(t){if($e===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);$e=n&&n[1]||"",Ze=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$e+t+Ze}var _e=!1;function ye(t,n){if(!t||_e)return"";_e=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Oe=function(){throw Error()};if(Object.defineProperty(Oe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Oe,[])}catch(be){var ve=be}Reflect.construct(t,[],Oe)}else{try{Oe.call()}catch(be){ve=be}t.call(Oe.prototype)}}else{try{throw Error()}catch(be){ve=be}(Oe=t())&&typeof Oe.catch=="function"&&Oe.catch(function(){})}}catch(be){if(be&&ve&&typeof be.stack=="string")return[be.stack,ve.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),b=d[0],F=d[1];if(b&&F){var J=b.split(`
`),he=F.split(`
`);for(u=o=0;o<J.length&&!J[o].includes("DetermineComponentFrameRoot");)o++;for(;u<he.length&&!he[u].includes("DetermineComponentFrameRoot");)u++;if(o===J.length||u===he.length)for(o=J.length-1,u=he.length-1;1<=o&&0<=u&&J[o]!==he[u];)u--;for(;1<=o&&0<=u;o--,u--)if(J[o]!==he[u]){if(o!==1||u!==1)do if(o--,u--,0>u||J[o]!==he[u]){var Ce=`
`+J[o].replace(" at new "," at ");return t.displayName&&Ce.includes("<anonymous>")&&(Ce=Ce.replace("<anonymous>",t.displayName)),Ce}while(1<=o&&0<=u);break}}}finally{_e=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ye(a):""}function qe(t,n){switch(t.tag){case 26:case 27:case 5:return Ye(t.type);case 16:return Ye("Lazy");case 13:return t.child!==n&&n!==null?Ye("Suspense Fallback"):Ye("Suspense");case 19:return Ye("SuspenseList");case 0:case 15:return ye(t.type,!1);case 11:return ye(t.type.render,!1);case 1:return ye(t.type,!0);case 31:return Ye("Activity");default:return""}}function et(t){try{var n="",a=null;do n+=qe(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var xt=Object.prototype.hasOwnProperty,ee=r.unstable_scheduleCallback,Et=r.unstable_cancelCallback,ot=r.unstable_shouldYield,dt=r.unstable_requestPaint,Te=r.unstable_now,Nt=r.unstable_getCurrentPriorityLevel,z=r.unstable_ImmediatePriority,R=r.unstable_UserBlockingPriority,ie=r.unstable_NormalPriority,Re=r.unstable_LowPriority,Pe=r.unstable_IdlePriority,Be=r.log,Ve=r.unstable_setDisableYieldValue,Se=null,Me=null;function ke(t){if(typeof Be=="function"&&Ve(t),Me&&typeof Me.setStrictMode=="function")try{Me.setStrictMode(Se,t)}catch{}}var je=Math.clz32?Math.clz32:ht,Ge=Math.log,He=Math.LN2;function ht(t){return t>>>=0,t===0?32:31-(Ge(t)/He|0)|0}var pt=256,yt=262144,ne=4194304;function ze(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function le(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,b=t.pingedLanes;t=t.warmLanes;var F=o&134217727;return F!==0?(o=F&~d,o!==0?u=ze(o):(b&=F,b!==0?u=ze(b):a||(a=F&~t,a!==0&&(u=ze(a))))):(F=o&~d,F!==0?u=ze(F):b!==0?u=ze(b):a||(a=o&~t,a!==0&&(u=ze(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function we(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Fe(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ge(){var t=ne;return ne<<=1,(ne&62914560)===0&&(ne=4194304),t}function Ie(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Le(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Xe(t,n,a,o,u,d){var b=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var F=t.entanglements,J=t.expirationTimes,he=t.hiddenUpdates;for(a=b&~a;0<a;){var Ce=31-je(a),Oe=1<<Ce;F[Ce]=0,J[Ce]=-1;var ve=he[Ce];if(ve!==null)for(he[Ce]=null,Ce=0;Ce<ve.length;Ce++){var be=ve[Ce];be!==null&&(be.lane&=-536870913)}a&=~Oe}o!==0&&rt(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(b&~n))}function rt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-je(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function bt(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-je(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function zt(t,n){var a=n&-n;return a=(a&42)!==0?1:Cn(a),(a&(t.suspendedLanes|n))!==0?0:a}function Cn(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Yt(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function yn(){var t=D.p;return t!==0?t:(t=window.event,t===void 0?32:Qg(t.type))}function Ia(t,n){var a=D.p;try{return D.p=t,n()}finally{D.p=a}}var Vn=Math.random().toString(36).slice(2),gn="__reactFiber$"+Vn,Fn="__reactProps$"+Vn,ra="__reactContainer$"+Vn,za="__reactEvents$"+Vn,pl="__reactListeners$"+Vn,tr="__reactHandles$"+Vn,io="__reactResources$"+Vn,Ba="__reactMarker$"+Vn;function ao(t){delete t[gn],delete t[Fn],delete t[za],delete t[pl],delete t[tr]}function Ha(t){var n=t[gn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[ra]||a[gn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Pg(t);t!==null;){if(a=t[gn])return a;t=Pg(t)}return n}t=a,a=t.parentNode}return null}function Ga(t){if(t=t[gn]||t[ra]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Ts(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Va(t){var n=t[io];return n||(n=t[io]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function bn(t){t[Ba]=!0}var ml=new Set,P={};function se(t,n){xe(t,n),xe(t+"Capture",n)}function xe(t,n){for(P[t]=n,t=0;t<n.length;t++)ml.add(n[t])}var pe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),me={},Qe={};function nt(t){return xt.call(Qe,t)?!0:xt.call(me,t)?!1:pe.test(t)?Qe[t]=!0:(me[t]=!0,!1)}function Ke(t,n,a){if(nt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function at(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function it(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function ut(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function St(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ct(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(b){a=""+b,d.call(this,b)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(b){a=""+b},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Vt(t){if(!t._valueTracker){var n=St(t)?"checked":"value";t._valueTracker=ct(t,n,""+t[n])}}function fn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=St(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function rn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Zt=/[\n"\\]/g;function Kt(t){return t.replace(Zt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function tt(t,n,a,o,u,d,b,F){t.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.type=b:t.removeAttribute("type"),n!=null?b==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ut(n)):t.value!==""+ut(n)&&(t.value=""+ut(n)):b!=="submit"&&b!=="reset"||t.removeAttribute("value"),n!=null?Dt(t,b,ut(n)):a!=null?Dt(t,b,ut(a)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),F!=null&&typeof F!="function"&&typeof F!="symbol"&&typeof F!="boolean"?t.name=""+ut(F):t.removeAttribute("name")}function kn(t,n,a,o,u,d,b,F){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Vt(t);return}a=a!=null?""+ut(a):"",n=n!=null?""+ut(n):a,F||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=F?t.checked:!!o,t.defaultChecked=!!o,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(t.name=b),Vt(t)}function Dt(t,n,a){n==="number"&&rn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function wn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+ut(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function ci(t,n,a){if(n!=null&&(n=""+ut(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ut(a):""}function Fi(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(X(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ut(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Vt(t)}function ui(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Qt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function dn(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Qt.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ii(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&dn(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&dn(t,d,n[d])}function qt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ka=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function As(t){return ka.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function oa(){}var _u=null;function yu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var nr=null,ir=null;function Ap(t){var n=Ga(t);if(n&&(t=n.stateNode)){var a=t[Fn]||null;e:switch(t=n.stateNode,n.type){case"input":if(tt(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Kt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[Fn]||null;if(!u)throw Error(s(90));tt(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&fn(o)}break e;case"textarea":ci(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&wn(t,!!a.multiple,n,!1)}}}var bu=!1;function Rp(t,n,a){if(bu)return t(n,a);bu=!0;try{var o=t(n);return o}finally{if(bu=!1,(nr!==null||ir!==null)&&(nc(),nr&&(n=nr,t=ir,ir=nr=null,Ap(n),t)))for(n=0;n<t.length;n++)Ap(t[n])}}function so(t,n){var a=t.stateNode;if(a===null)return null;var o=a[Fn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var la=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Su=!1;if(la)try{var ro={};Object.defineProperty(ro,"passive",{get:function(){Su=!0}}),window.addEventListener("test",ro,ro),window.removeEventListener("test",ro,ro)}catch{Su=!1}var ja=null,Mu=null,gl=null;function Cp(){if(gl)return gl;var t,n=Mu,a=n.length,o,u="value"in ja?ja.value:ja.textContent,d=u.length;for(t=0;t<a&&n[t]===u[t];t++);var b=a-t;for(o=1;o<=b&&n[a-o]===u[d-o];o++);return gl=u.slice(t,1<o?1-o:void 0)}function xl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function vl(){return!0}function wp(){return!1}function ei(t){function n(a,o,u,d,b){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=b,this.currentTarget=null;for(var F in t)t.hasOwnProperty(F)&&(a=t[F],this[F]=a?a(d):d[F]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?vl:wp,this.isPropagationStopped=wp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),n}var Rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_l=ei(Rs),oo=_({},Rs,{view:0,detail:0}),T_=ei(oo),Eu,Tu,lo,yl=_({},oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ru,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==lo&&(lo&&t.type==="mousemove"?(Eu=t.screenX-lo.screenX,Tu=t.screenY-lo.screenY):Tu=Eu=0,lo=t),Eu)},movementY:function(t){return"movementY"in t?t.movementY:Tu}}),Np=ei(yl),A_=_({},yl,{dataTransfer:0}),R_=ei(A_),C_=_({},oo,{relatedTarget:0}),Au=ei(C_),w_=_({},Rs,{animationName:0,elapsedTime:0,pseudoElement:0}),N_=ei(w_),D_=_({},Rs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),U_=ei(D_),L_=_({},Rs,{data:0}),Dp=ei(L_),O_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},P_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},F_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function I_(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=F_[t])?!!n[t]:!1}function Ru(){return I_}var z_=_({},oo,{key:function(t){if(t.key){var n=O_[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=xl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?P_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ru,charCode:function(t){return t.type==="keypress"?xl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),B_=ei(z_),H_=_({},yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Up=ei(H_),G_=_({},oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ru}),V_=ei(G_),k_=_({},Rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),j_=ei(k_),W_=_({},yl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),X_=ei(W_),q_=_({},Rs,{newState:0,oldState:0}),Y_=ei(q_),Z_=[9,13,27,32],Cu=la&&"CompositionEvent"in window,co=null;la&&"documentMode"in document&&(co=document.documentMode);var K_=la&&"TextEvent"in window&&!co,Lp=la&&(!Cu||co&&8<co&&11>=co),Op=" ",Pp=!1;function Fp(t,n){switch(t){case"keyup":return Z_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ip(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ar=!1;function Q_(t,n){switch(t){case"compositionend":return Ip(n);case"keypress":return n.which!==32?null:(Pp=!0,Op);case"textInput":return t=n.data,t===Op&&Pp?null:t;default:return null}}function J_(t,n){if(ar)return t==="compositionend"||!Cu&&Fp(t,n)?(t=Cp(),gl=Mu=ja=null,ar=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Lp&&n.locale!=="ko"?null:n.data;default:return null}}var $_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!$_[t.type]:n==="textarea"}function Bp(t,n,a,o){nr?ir?ir.push(o):ir=[o]:nr=o,n=cc(n,"onChange"),0<n.length&&(a=new _l("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var uo=null,fo=null;function ey(t){bg(t,0)}function bl(t){var n=Ts(t);if(fn(n))return t}function Hp(t,n){if(t==="change")return n}var Gp=!1;if(la){var wu;if(la){var Nu="oninput"in document;if(!Nu){var Vp=document.createElement("div");Vp.setAttribute("oninput","return;"),Nu=typeof Vp.oninput=="function"}wu=Nu}else wu=!1;Gp=wu&&(!document.documentMode||9<document.documentMode)}function kp(){uo&&(uo.detachEvent("onpropertychange",jp),fo=uo=null)}function jp(t){if(t.propertyName==="value"&&bl(fo)){var n=[];Bp(n,fo,t,yu(t)),Rp(ey,n)}}function ty(t,n,a){t==="focusin"?(kp(),uo=n,fo=a,uo.attachEvent("onpropertychange",jp)):t==="focusout"&&kp()}function ny(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return bl(fo)}function iy(t,n){if(t==="click")return bl(n)}function ay(t,n){if(t==="input"||t==="change")return bl(n)}function sy(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var fi=typeof Object.is=="function"?Object.is:sy;function ho(t,n){if(fi(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!xt.call(n,u)||!fi(t[u],n[u]))return!1}return!0}function Wp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Xp(t,n){var a=Wp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Wp(a)}}function qp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?qp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Yp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=rn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=rn(t.document)}return n}function Du(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var ry=la&&"documentMode"in document&&11>=document.documentMode,sr=null,Uu=null,po=null,Lu=!1;function Zp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Lu||sr==null||sr!==rn(o)||(o=sr,"selectionStart"in o&&Du(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),po&&ho(po,o)||(po=o,o=cc(Uu,"onSelect"),0<o.length&&(n=new _l("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=sr)))}function Cs(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var rr={animationend:Cs("Animation","AnimationEnd"),animationiteration:Cs("Animation","AnimationIteration"),animationstart:Cs("Animation","AnimationStart"),transitionrun:Cs("Transition","TransitionRun"),transitionstart:Cs("Transition","TransitionStart"),transitioncancel:Cs("Transition","TransitionCancel"),transitionend:Cs("Transition","TransitionEnd")},Ou={},Kp={};la&&(Kp=document.createElement("div").style,"AnimationEvent"in window||(delete rr.animationend.animation,delete rr.animationiteration.animation,delete rr.animationstart.animation),"TransitionEvent"in window||delete rr.transitionend.transition);function ws(t){if(Ou[t])return Ou[t];if(!rr[t])return t;var n=rr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Kp)return Ou[t]=n[a];return t}var Qp=ws("animationend"),Jp=ws("animationiteration"),$p=ws("animationstart"),oy=ws("transitionrun"),ly=ws("transitionstart"),cy=ws("transitioncancel"),em=ws("transitionend"),tm=new Map,Pu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Pu.push("scrollEnd");function zi(t,n){tm.set(t,n),se(n,[t])}var Sl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Si=[],or=0,Fu=0;function Ml(){for(var t=or,n=Fu=or=0;n<t;){var a=Si[n];Si[n++]=null;var o=Si[n];Si[n++]=null;var u=Si[n];Si[n++]=null;var d=Si[n];if(Si[n++]=null,o!==null&&u!==null){var b=o.pending;b===null?u.next=u:(u.next=b.next,b.next=u),o.pending=u}d!==0&&nm(a,u,d)}}function El(t,n,a,o){Si[or++]=t,Si[or++]=n,Si[or++]=a,Si[or++]=o,Fu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Iu(t,n,a,o){return El(t,n,a,o),Tl(t)}function Ns(t,n){return El(t,null,null,n),Tl(t)}function nm(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-je(a),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function Tl(t){if(50<Fo)throw Fo=0,qf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var lr={};function uy(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(t,n,a,o){return new uy(t,n,a,o)}function zu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ca(t,n){var a=t.alternate;return a===null?(a=di(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function im(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Al(t,n,a,o,u,d){var b=0;if(o=t,typeof t=="function")zu(t)&&(b=1);else if(typeof t=="string")b=mb(t,a,Q.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case V:return t=di(31,a,n,u),t.elementType=V,t.lanes=d,t;case U:return Ds(a.children,u,d,n);case S:b=8,u|=24;break;case y:return t=di(12,a,n,u|2),t.elementType=y,t.lanes=d,t;case Z:return t=di(13,a,n,u),t.elementType=Z,t.lanes=d,t;case H:return t=di(19,a,n,u),t.elementType=H,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case G:b=10;break e;case I:b=9;break e;case B:b=11;break e;case k:b=14;break e;case N:b=16,o=null;break e}b=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=di(b,a,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function Ds(t,n,a,o){return t=di(7,t,o,n),t.lanes=a,t}function Bu(t,n,a){return t=di(6,t,null,n),t.lanes=a,t}function am(t){var n=di(18,null,null,0);return n.stateNode=t,n}function Hu(t,n,a){return n=di(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var sm=new WeakMap;function Mi(t,n){if(typeof t=="object"&&t!==null){var a=sm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:et(n)},sm.set(t,n),n)}return{value:t,source:n,stack:et(n)}}var cr=[],ur=0,Rl=null,mo=0,Ei=[],Ti=0,Wa=null,qi=1,Yi="";function ua(t,n){cr[ur++]=mo,cr[ur++]=Rl,Rl=t,mo=n}function rm(t,n,a){Ei[Ti++]=qi,Ei[Ti++]=Yi,Ei[Ti++]=Wa,Wa=t;var o=qi;t=Yi;var u=32-je(o)-1;o&=~(1<<u),a+=1;var d=32-je(n)+u;if(30<d){var b=u-u%5;d=(o&(1<<b)-1).toString(32),o>>=b,u-=b,qi=1<<32-je(n)+u|a<<u|o,Yi=d+t}else qi=1<<d|a<<u|o,Yi=t}function Gu(t){t.return!==null&&(ua(t,1),rm(t,1,0))}function Vu(t){for(;t===Rl;)Rl=cr[--ur],cr[ur]=null,mo=cr[--ur],cr[ur]=null;for(;t===Wa;)Wa=Ei[--Ti],Ei[Ti]=null,Yi=Ei[--Ti],Ei[Ti]=null,qi=Ei[--Ti],Ei[Ti]=null}function om(t,n){Ei[Ti++]=qi,Ei[Ti++]=Yi,Ei[Ti++]=Wa,qi=n.id,Yi=n.overflow,Wa=t}var In=null,cn=null,Bt=!1,Xa=null,Ai=!1,ku=Error(s(519));function qa(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw go(Mi(n,t)),ku}function lm(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[gn]=t,n[Fn]=o,a){case"dialog":Lt("cancel",n),Lt("close",n);break;case"iframe":case"object":case"embed":Lt("load",n);break;case"video":case"audio":for(a=0;a<zo.length;a++)Lt(zo[a],n);break;case"source":Lt("error",n);break;case"img":case"image":case"link":Lt("error",n),Lt("load",n);break;case"details":Lt("toggle",n);break;case"input":Lt("invalid",n),kn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Lt("invalid",n);break;case"textarea":Lt("invalid",n),Fi(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Tg(n.textContent,a)?(o.popover!=null&&(Lt("beforetoggle",n),Lt("toggle",n)),o.onScroll!=null&&Lt("scroll",n),o.onScrollEnd!=null&&Lt("scrollend",n),o.onClick!=null&&(n.onclick=oa),n=!0):n=!1,n||qa(t,!0)}function cm(t){for(In=t.return;In;)switch(In.tag){case 5:case 31:case 13:Ai=!1;return;case 27:case 3:Ai=!0;return;default:In=In.return}}function fr(t){if(t!==In)return!1;if(!Bt)return cm(t),Bt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||ld(t.type,t.memoizedProps)),a=!a),a&&cn&&qa(t),cm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));cn=Og(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));cn=Og(t)}else n===27?(n=cn,os(t.type)?(t=hd,hd=null,cn=t):cn=n):cn=In?Ci(t.stateNode.nextSibling):null;return!0}function Us(){cn=In=null,Bt=!1}function ju(){var t=Xa;return t!==null&&(ai===null?ai=t:ai.push.apply(ai,t),Xa=null),t}function go(t){Xa===null?Xa=[t]:Xa.push(t)}var Wu=T(null),Ls=null,fa=null;function Ya(t,n,a){K(Wu,n._currentValue),n._currentValue=a}function da(t){t._currentValue=Wu.current,C(Wu)}function Xu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function qu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var b=u.child;d=d.firstContext;e:for(;d!==null;){var F=d;d=u;for(var J=0;J<n.length;J++)if(F.context===n[J]){d.lanes|=a,F=d.alternate,F!==null&&(F.lanes|=a),Xu(d.return,a,t),o||(b=null);break e}d=F.next}}else if(u.tag===18){if(b=u.return,b===null)throw Error(s(341));b.lanes|=a,d=b.alternate,d!==null&&(d.lanes|=a),Xu(b,a,t),b=null}else b=u.child;if(b!==null)b.return=u;else for(b=u;b!==null;){if(b===t){b=null;break}if(u=b.sibling,u!==null){u.return=b.return,b=u;break}b=b.return}u=b}}function dr(t,n,a,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var b=u.alternate;if(b===null)throw Error(s(387));if(b=b.memoizedProps,b!==null){var F=u.type;fi(u.pendingProps.value,b.value)||(t!==null?t.push(F):t=[F])}}else if(u===re.current){if(b=u.alternate,b===null)throw Error(s(387));b.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(ko):t=[ko])}u=u.return}t!==null&&qu(n,t,a,o),n.flags|=262144}function Cl(t){for(t=t.firstContext;t!==null;){if(!fi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Os(t){Ls=t,fa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function zn(t){return um(Ls,t)}function wl(t,n){return Ls===null&&Os(t),um(t,n)}function um(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},fa===null){if(t===null)throw Error(s(308));fa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else fa=fa.next=n;return a}var fy=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},dy=r.unstable_scheduleCallback,hy=r.unstable_NormalPriority,Sn={$$typeof:G,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yu(){return{controller:new fy,data:new Map,refCount:0}}function xo(t){t.refCount--,t.refCount===0&&dy(hy,function(){t.controller.abort()})}var vo=null,Zu=0,hr=0,pr=null;function py(t,n){if(vo===null){var a=vo=[];Zu=0,hr=$f(),pr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Zu++,n.then(fm,fm),n}function fm(){if(--Zu===0&&vo!==null){pr!==null&&(pr.status="fulfilled");var t=vo;vo=null,hr=0,pr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function my(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var dm=O.S;O.S=function(t,n){Z0=Te(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&py(t,n),dm!==null&&dm(t,n)};var Ps=T(null);function Ku(){var t=Ps.current;return t!==null?t:on.pooledCache}function Nl(t,n){n===null?K(Ps,Ps.current):K(Ps,n.pool)}function hm(){var t=Ku();return t===null?null:{parent:Sn._currentValue,pool:t}}var mr=Error(s(460)),Qu=Error(s(474)),Dl=Error(s(542)),Ul={then:function(){}};function pm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function mm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(oa,oa),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,xm(t),t;default:if(typeof n.status=="string")n.then(oa,oa);else{if(t=on,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,xm(t),t}throw Is=n,mr}}function Fs(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Is=a,mr):a}}var Is=null;function gm(){if(Is===null)throw Error(s(459));var t=Is;return Is=null,t}function xm(t){if(t===mr||t===Dl)throw Error(s(483))}var gr=null,_o=0;function Ll(t){var n=_o;return _o+=1,gr===null&&(gr=[]),mm(gr,t,n)}function yo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ol(t,n){throw n.$$typeof===x?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function vm(t){function n(oe,ae){if(t){var de=oe.deletions;de===null?(oe.deletions=[ae],oe.flags|=16):de.push(ae)}}function a(oe,ae){if(!t)return null;for(;ae!==null;)n(oe,ae),ae=ae.sibling;return null}function o(oe){for(var ae=new Map;oe!==null;)oe.key!==null?ae.set(oe.key,oe):ae.set(oe.index,oe),oe=oe.sibling;return ae}function u(oe,ae){return oe=ca(oe,ae),oe.index=0,oe.sibling=null,oe}function d(oe,ae,de){return oe.index=de,t?(de=oe.alternate,de!==null?(de=de.index,de<ae?(oe.flags|=67108866,ae):de):(oe.flags|=67108866,ae)):(oe.flags|=1048576,ae)}function b(oe){return t&&oe.alternate===null&&(oe.flags|=67108866),oe}function F(oe,ae,de,Ne){return ae===null||ae.tag!==6?(ae=Bu(de,oe.mode,Ne),ae.return=oe,ae):(ae=u(ae,de),ae.return=oe,ae)}function J(oe,ae,de,Ne){var ft=de.type;return ft===U?Ce(oe,ae,de.props.children,Ne,de.key):ae!==null&&(ae.elementType===ft||typeof ft=="object"&&ft!==null&&ft.$$typeof===N&&Fs(ft)===ae.type)?(ae=u(ae,de.props),yo(ae,de),ae.return=oe,ae):(ae=Al(de.type,de.key,de.props,null,oe.mode,Ne),yo(ae,de),ae.return=oe,ae)}function he(oe,ae,de,Ne){return ae===null||ae.tag!==4||ae.stateNode.containerInfo!==de.containerInfo||ae.stateNode.implementation!==de.implementation?(ae=Hu(de,oe.mode,Ne),ae.return=oe,ae):(ae=u(ae,de.children||[]),ae.return=oe,ae)}function Ce(oe,ae,de,Ne,ft){return ae===null||ae.tag!==7?(ae=Ds(de,oe.mode,Ne,ft),ae.return=oe,ae):(ae=u(ae,de),ae.return=oe,ae)}function Oe(oe,ae,de){if(typeof ae=="string"&&ae!==""||typeof ae=="number"||typeof ae=="bigint")return ae=Bu(""+ae,oe.mode,de),ae.return=oe,ae;if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case M:return de=Al(ae.type,ae.key,ae.props,null,oe.mode,de),yo(de,ae),de.return=oe,de;case E:return ae=Hu(ae,oe.mode,de),ae.return=oe,ae;case N:return ae=Fs(ae),Oe(oe,ae,de)}if(X(ae)||$(ae))return ae=Ds(ae,oe.mode,de,null),ae.return=oe,ae;if(typeof ae.then=="function")return Oe(oe,Ll(ae),de);if(ae.$$typeof===G)return Oe(oe,wl(oe,ae),de);Ol(oe,ae)}return null}function ve(oe,ae,de,Ne){var ft=ae!==null?ae.key:null;if(typeof de=="string"&&de!==""||typeof de=="number"||typeof de=="bigint")return ft!==null?null:F(oe,ae,""+de,Ne);if(typeof de=="object"&&de!==null){switch(de.$$typeof){case M:return de.key===ft?J(oe,ae,de,Ne):null;case E:return de.key===ft?he(oe,ae,de,Ne):null;case N:return de=Fs(de),ve(oe,ae,de,Ne)}if(X(de)||$(de))return ft!==null?null:Ce(oe,ae,de,Ne,null);if(typeof de.then=="function")return ve(oe,ae,Ll(de),Ne);if(de.$$typeof===G)return ve(oe,ae,wl(oe,de),Ne);Ol(oe,de)}return null}function be(oe,ae,de,Ne,ft){if(typeof Ne=="string"&&Ne!==""||typeof Ne=="number"||typeof Ne=="bigint")return oe=oe.get(de)||null,F(ae,oe,""+Ne,ft);if(typeof Ne=="object"&&Ne!==null){switch(Ne.$$typeof){case M:return oe=oe.get(Ne.key===null?de:Ne.key)||null,J(ae,oe,Ne,ft);case E:return oe=oe.get(Ne.key===null?de:Ne.key)||null,he(ae,oe,Ne,ft);case N:return Ne=Fs(Ne),be(oe,ae,de,Ne,ft)}if(X(Ne)||$(Ne))return oe=oe.get(de)||null,Ce(ae,oe,Ne,ft,null);if(typeof Ne.then=="function")return be(oe,ae,de,Ll(Ne),ft);if(Ne.$$typeof===G)return be(oe,ae,de,wl(ae,Ne),ft);Ol(ae,Ne)}return null}function st(oe,ae,de,Ne){for(var ft=null,kt=null,lt=ae,Tt=ae=0,It=null;lt!==null&&Tt<de.length;Tt++){lt.index>Tt?(It=lt,lt=null):It=lt.sibling;var jt=ve(oe,lt,de[Tt],Ne);if(jt===null){lt===null&&(lt=It);break}t&&lt&&jt.alternate===null&&n(oe,lt),ae=d(jt,ae,Tt),kt===null?ft=jt:kt.sibling=jt,kt=jt,lt=It}if(Tt===de.length)return a(oe,lt),Bt&&ua(oe,Tt),ft;if(lt===null){for(;Tt<de.length;Tt++)lt=Oe(oe,de[Tt],Ne),lt!==null&&(ae=d(lt,ae,Tt),kt===null?ft=lt:kt.sibling=lt,kt=lt);return Bt&&ua(oe,Tt),ft}for(lt=o(lt);Tt<de.length;Tt++)It=be(lt,oe,Tt,de[Tt],Ne),It!==null&&(t&&It.alternate!==null&&lt.delete(It.key===null?Tt:It.key),ae=d(It,ae,Tt),kt===null?ft=It:kt.sibling=It,kt=It);return t&&lt.forEach(function(ds){return n(oe,ds)}),Bt&&ua(oe,Tt),ft}function mt(oe,ae,de,Ne){if(de==null)throw Error(s(151));for(var ft=null,kt=null,lt=ae,Tt=ae=0,It=null,jt=de.next();lt!==null&&!jt.done;Tt++,jt=de.next()){lt.index>Tt?(It=lt,lt=null):It=lt.sibling;var ds=ve(oe,lt,jt.value,Ne);if(ds===null){lt===null&&(lt=It);break}t&&lt&&ds.alternate===null&&n(oe,lt),ae=d(ds,ae,Tt),kt===null?ft=ds:kt.sibling=ds,kt=ds,lt=It}if(jt.done)return a(oe,lt),Bt&&ua(oe,Tt),ft;if(lt===null){for(;!jt.done;Tt++,jt=de.next())jt=Oe(oe,jt.value,Ne),jt!==null&&(ae=d(jt,ae,Tt),kt===null?ft=jt:kt.sibling=jt,kt=jt);return Bt&&ua(oe,Tt),ft}for(lt=o(lt);!jt.done;Tt++,jt=de.next())jt=be(lt,oe,Tt,jt.value,Ne),jt!==null&&(t&&jt.alternate!==null&&lt.delete(jt.key===null?Tt:jt.key),ae=d(jt,ae,Tt),kt===null?ft=jt:kt.sibling=jt,kt=jt);return t&&lt.forEach(function(Ab){return n(oe,Ab)}),Bt&&ua(oe,Tt),ft}function an(oe,ae,de,Ne){if(typeof de=="object"&&de!==null&&de.type===U&&de.key===null&&(de=de.props.children),typeof de=="object"&&de!==null){switch(de.$$typeof){case M:e:{for(var ft=de.key;ae!==null;){if(ae.key===ft){if(ft=de.type,ft===U){if(ae.tag===7){a(oe,ae.sibling),Ne=u(ae,de.props.children),Ne.return=oe,oe=Ne;break e}}else if(ae.elementType===ft||typeof ft=="object"&&ft!==null&&ft.$$typeof===N&&Fs(ft)===ae.type){a(oe,ae.sibling),Ne=u(ae,de.props),yo(Ne,de),Ne.return=oe,oe=Ne;break e}a(oe,ae);break}else n(oe,ae);ae=ae.sibling}de.type===U?(Ne=Ds(de.props.children,oe.mode,Ne,de.key),Ne.return=oe,oe=Ne):(Ne=Al(de.type,de.key,de.props,null,oe.mode,Ne),yo(Ne,de),Ne.return=oe,oe=Ne)}return b(oe);case E:e:{for(ft=de.key;ae!==null;){if(ae.key===ft)if(ae.tag===4&&ae.stateNode.containerInfo===de.containerInfo&&ae.stateNode.implementation===de.implementation){a(oe,ae.sibling),Ne=u(ae,de.children||[]),Ne.return=oe,oe=Ne;break e}else{a(oe,ae);break}else n(oe,ae);ae=ae.sibling}Ne=Hu(de,oe.mode,Ne),Ne.return=oe,oe=Ne}return b(oe);case N:return de=Fs(de),an(oe,ae,de,Ne)}if(X(de))return st(oe,ae,de,Ne);if($(de)){if(ft=$(de),typeof ft!="function")throw Error(s(150));return de=ft.call(de),mt(oe,ae,de,Ne)}if(typeof de.then=="function")return an(oe,ae,Ll(de),Ne);if(de.$$typeof===G)return an(oe,ae,wl(oe,de),Ne);Ol(oe,de)}return typeof de=="string"&&de!==""||typeof de=="number"||typeof de=="bigint"?(de=""+de,ae!==null&&ae.tag===6?(a(oe,ae.sibling),Ne=u(ae,de),Ne.return=oe,oe=Ne):(a(oe,ae),Ne=Bu(de,oe.mode,Ne),Ne.return=oe,oe=Ne),b(oe)):a(oe,ae)}return function(oe,ae,de,Ne){try{_o=0;var ft=an(oe,ae,de,Ne);return gr=null,ft}catch(lt){if(lt===mr||lt===Dl)throw lt;var kt=di(29,lt,null,oe.mode);return kt.lanes=Ne,kt.return=oe,kt}finally{}}}var zs=vm(!0),_m=vm(!1),Za=!1;function Ju(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $u(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ka(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Qa(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Xt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Tl(t),nm(t,null,a),n}return El(t,o,n,a),Tl(t)}function bo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,bt(t,a)}}function ef(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var b={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=b:d=d.next=b,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var tf=!1;function So(){if(tf){var t=pr;if(t!==null)throw t}}function Mo(t,n,a,o){tf=!1;var u=t.updateQueue;Za=!1;var d=u.firstBaseUpdate,b=u.lastBaseUpdate,F=u.shared.pending;if(F!==null){u.shared.pending=null;var J=F,he=J.next;J.next=null,b===null?d=he:b.next=he,b=J;var Ce=t.alternate;Ce!==null&&(Ce=Ce.updateQueue,F=Ce.lastBaseUpdate,F!==b&&(F===null?Ce.firstBaseUpdate=he:F.next=he,Ce.lastBaseUpdate=J))}if(d!==null){var Oe=u.baseState;b=0,Ce=he=J=null,F=d;do{var ve=F.lane&-536870913,be=ve!==F.lane;if(be?(Ft&ve)===ve:(o&ve)===ve){ve!==0&&ve===hr&&(tf=!0),Ce!==null&&(Ce=Ce.next={lane:0,tag:F.tag,payload:F.payload,callback:null,next:null});e:{var st=t,mt=F;ve=n;var an=a;switch(mt.tag){case 1:if(st=mt.payload,typeof st=="function"){Oe=st.call(an,Oe,ve);break e}Oe=st;break e;case 3:st.flags=st.flags&-65537|128;case 0:if(st=mt.payload,ve=typeof st=="function"?st.call(an,Oe,ve):st,ve==null)break e;Oe=_({},Oe,ve);break e;case 2:Za=!0}}ve=F.callback,ve!==null&&(t.flags|=64,be&&(t.flags|=8192),be=u.callbacks,be===null?u.callbacks=[ve]:be.push(ve))}else be={lane:ve,tag:F.tag,payload:F.payload,callback:F.callback,next:null},Ce===null?(he=Ce=be,J=Oe):Ce=Ce.next=be,b|=ve;if(F=F.next,F===null){if(F=u.shared.pending,F===null)break;be=F,F=be.next,be.next=null,u.lastBaseUpdate=be,u.shared.pending=null}}while(!0);Ce===null&&(J=Oe),u.baseState=J,u.firstBaseUpdate=he,u.lastBaseUpdate=Ce,d===null&&(u.shared.lanes=0),ns|=b,t.lanes=b,t.memoizedState=Oe}}function ym(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function bm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)ym(a[t],n)}var xr=T(null),Pl=T(0);function Sm(t,n){t=ba,K(Pl,t),K(xr,n),ba=t|n.baseLanes}function nf(){K(Pl,ba),K(xr,xr.current)}function af(){ba=Pl.current,C(xr),C(Pl)}var hi=T(null),Ri=null;function Ja(t){var n=t.alternate;K(xn,xn.current&1),K(hi,t),Ri===null&&(n===null||xr.current!==null||n.memoizedState!==null)&&(Ri=t)}function sf(t){K(xn,xn.current),K(hi,t),Ri===null&&(Ri=t)}function Mm(t){t.tag===22?(K(xn,xn.current),K(hi,t),Ri===null&&(Ri=t)):$a()}function $a(){K(xn,xn.current),K(hi,hi.current)}function pi(t){C(hi),Ri===t&&(Ri=null),C(xn)}var xn=T(0);function Fl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||fd(a)||dd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ha=0,Mt=null,tn=null,Mn=null,Il=!1,vr=!1,Bs=!1,zl=0,Eo=0,_r=null,gy=0;function pn(){throw Error(s(321))}function rf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!fi(t[a],n[a]))return!1;return!0}function of(t,n,a,o,u,d){return ha=d,Mt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=t===null||t.memoizedState===null?r0:Sf,Bs=!1,d=a(o,u),Bs=!1,vr&&(d=Tm(n,a,o,u)),Em(t),d}function Em(t){O.H=Ro;var n=tn!==null&&tn.next!==null;if(ha=0,Mn=tn=Mt=null,Il=!1,Eo=0,_r=null,n)throw Error(s(300));t===null||En||(t=t.dependencies,t!==null&&Cl(t)&&(En=!0))}function Tm(t,n,a,o){Mt=t;var u=0;do{if(vr&&(_r=null),Eo=0,vr=!1,25<=u)throw Error(s(301));if(u+=1,Mn=tn=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}O.H=o0,d=n(a,o)}while(vr);return d}function xy(){var t=O.H,n=t.useState()[0];return n=typeof n.then=="function"?To(n):n,t=t.useState()[0],(tn!==null?tn.memoizedState:null)!==t&&(Mt.flags|=1024),n}function lf(){var t=zl!==0;return zl=0,t}function cf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function uf(t){if(Il){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Il=!1}ha=0,Mn=tn=Mt=null,vr=!1,Eo=zl=0,_r=null}function Kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mn===null?Mt.memoizedState=Mn=t:Mn=Mn.next=t,Mn}function vn(){if(tn===null){var t=Mt.alternate;t=t!==null?t.memoizedState:null}else t=tn.next;var n=Mn===null?Mt.memoizedState:Mn.next;if(n!==null)Mn=n,tn=t;else{if(t===null)throw Mt.alternate===null?Error(s(467)):Error(s(310));tn=t,t={memoizedState:tn.memoizedState,baseState:tn.baseState,baseQueue:tn.baseQueue,queue:tn.queue,next:null},Mn===null?Mt.memoizedState=Mn=t:Mn=Mn.next=t}return Mn}function Bl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function To(t){var n=Eo;return Eo+=1,_r===null&&(_r=[]),t=mm(_r,t,n),n=Mt,(Mn===null?n.memoizedState:Mn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?r0:Sf),t}function Hl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return To(t);if(t.$$typeof===G)return zn(t)}throw Error(s(438,String(t)))}function ff(t){var n=null,a=Mt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=Mt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Bl(),Mt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=j;return n.index++,a}function pa(t,n){return typeof n=="function"?n(t):n}function Gl(t){var n=vn();return df(n,tn,t)}function df(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var b=u.next;u.next=d.next,d.next=b}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var F=b=null,J=null,he=n,Ce=!1;do{var Oe=he.lane&-536870913;if(Oe!==he.lane?(Ft&Oe)===Oe:(ha&Oe)===Oe){var ve=he.revertLane;if(ve===0)J!==null&&(J=J.next={lane:0,revertLane:0,gesture:null,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null}),Oe===hr&&(Ce=!0);else if((ha&ve)===ve){he=he.next,ve===hr&&(Ce=!0);continue}else Oe={lane:0,revertLane:he.revertLane,gesture:null,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null},J===null?(F=J=Oe,b=d):J=J.next=Oe,Mt.lanes|=ve,ns|=ve;Oe=he.action,Bs&&a(d,Oe),d=he.hasEagerState?he.eagerState:a(d,Oe)}else ve={lane:Oe,revertLane:he.revertLane,gesture:he.gesture,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null},J===null?(F=J=ve,b=d):J=J.next=ve,Mt.lanes|=Oe,ns|=Oe;he=he.next}while(he!==null&&he!==n);if(J===null?b=d:J.next=F,!fi(d,t.memoizedState)&&(En=!0,Ce&&(a=pr,a!==null)))throw a;t.memoizedState=d,t.baseState=b,t.baseQueue=J,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function hf(t){var n=vn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var b=u=u.next;do d=t(d,b.action),b=b.next;while(b!==u);fi(d,n.memoizedState)||(En=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function Am(t,n,a){var o=Mt,u=vn(),d=Bt;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var b=!fi((tn||u).memoizedState,a);if(b&&(u.memoizedState=a,En=!0),u=u.queue,gf(wm.bind(null,o,u,t),[t]),u.getSnapshot!==n||b||Mn!==null&&Mn.memoizedState.tag&1){if(o.flags|=2048,yr(9,{destroy:void 0},Cm.bind(null,o,u,a,n),null),on===null)throw Error(s(349));d||(ha&127)!==0||Rm(o,n,a)}return a}function Rm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=Mt.updateQueue,n===null?(n=Bl(),Mt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Cm(t,n,a,o){n.value=a,n.getSnapshot=o,Nm(n)&&Dm(t)}function wm(t,n,a){return a(function(){Nm(n)&&Dm(t)})}function Nm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!fi(t,a)}catch{return!0}}function Dm(t){var n=Ns(t,2);n!==null&&si(n,t,2)}function pf(t){var n=Kn();if(typeof t=="function"){var a=t;if(t=a(),Bs){ke(!0);try{a()}finally{ke(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:t},n}function Um(t,n,a,o){return t.baseState=a,df(t,tn,typeof o=="function"?o:pa)}function vy(t,n,a,o,u){if(jl(t))throw Error(s(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){d.listeners.push(b)}};O.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Lm(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Lm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=O.T,b={};O.T=b;try{var F=a(u,o),J=O.S;J!==null&&J(b,F),Om(t,n,F)}catch(he){mf(t,n,he)}finally{d!==null&&b.types!==null&&(d.types=b.types),O.T=d}}else try{d=a(u,o),Om(t,n,d)}catch(he){mf(t,n,he)}}function Om(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Pm(t,n,o)},function(o){return mf(t,n,o)}):Pm(t,n,a)}function Pm(t,n,a){n.status="fulfilled",n.value=a,Fm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Lm(t,a)))}function mf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Fm(n),n=n.next;while(n!==o)}t.action=null}function Fm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Im(t,n){return n}function zm(t,n){if(Bt){var a=on.formState;if(a!==null){e:{var o=Mt;if(Bt){if(cn){t:{for(var u=cn,d=Ai;u.nodeType!==8;){if(!d){u=null;break t}if(u=Ci(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){cn=Ci(u.nextSibling),o=u.data==="F!";break e}}qa(o)}o=!1}o&&(n=a[0])}}return a=Kn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Im,lastRenderedState:n},a.queue=o,a=i0.bind(null,Mt,o),o.dispatch=a,o=pf(!1),d=bf.bind(null,Mt,!1,o.queue),o=Kn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=vy.bind(null,Mt,u,d,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Bm(t){var n=vn();return Hm(n,tn,t)}function Hm(t,n,a){if(n=df(t,n,Im)[0],t=Gl(pa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=To(n)}catch(b){throw b===mr?Dl:b}else o=n;n=vn();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(Mt.flags|=2048,yr(9,{destroy:void 0},_y.bind(null,u,a),null)),[o,d,t]}function _y(t,n){t.action=n}function Gm(t){var n=vn(),a=tn;if(a!==null)return Hm(n,a,t);vn(),n=n.memoizedState,a=vn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function yr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=Mt.updateQueue,n===null&&(n=Bl(),Mt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Vm(){return vn().memoizedState}function Vl(t,n,a,o){var u=Kn();Mt.flags|=t,u.memoizedState=yr(1|n,{destroy:void 0},a,o===void 0?null:o)}function kl(t,n,a,o){var u=vn();o=o===void 0?null:o;var d=u.memoizedState.inst;tn!==null&&o!==null&&rf(o,tn.memoizedState.deps)?u.memoizedState=yr(n,d,a,o):(Mt.flags|=t,u.memoizedState=yr(1|n,d,a,o))}function km(t,n){Vl(8390656,8,t,n)}function gf(t,n){kl(2048,8,t,n)}function yy(t){Mt.flags|=4;var n=Mt.updateQueue;if(n===null)n=Bl(),Mt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function jm(t){var n=vn().memoizedState;return yy({ref:n,nextImpl:t}),function(){if((Xt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Wm(t,n){return kl(4,2,t,n)}function Xm(t,n){return kl(4,4,t,n)}function qm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Ym(t,n,a){a=a!=null?a.concat([t]):null,kl(4,4,qm.bind(null,n,t),a)}function xf(){}function Zm(t,n){var a=vn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&rf(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Km(t,n){var a=vn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&rf(n,o[1]))return o[0];if(o=t(),Bs){ke(!0);try{t()}finally{ke(!1)}}return a.memoizedState=[o,n],o}function vf(t,n,a){return a===void 0||(ha&1073741824)!==0&&(Ft&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Q0(),Mt.lanes|=t,ns|=t,a)}function Qm(t,n,a,o){return fi(a,n)?a:xr.current!==null?(t=vf(t,a,o),fi(t,n)||(En=!0),t):(ha&42)===0||(ha&1073741824)!==0&&(Ft&261930)===0?(En=!0,t.memoizedState=a):(t=Q0(),Mt.lanes|=t,ns|=t,n)}function Jm(t,n,a,o,u){var d=D.p;D.p=d!==0&&8>d?d:8;var b=O.T,F={};O.T=F,bf(t,!1,n,a);try{var J=u(),he=O.S;if(he!==null&&he(F,J),J!==null&&typeof J=="object"&&typeof J.then=="function"){var Ce=my(J,o);Ao(t,n,Ce,xi(t))}else Ao(t,n,o,xi(t))}catch(Oe){Ao(t,n,{then:function(){},status:"rejected",reason:Oe},xi())}finally{D.p=d,b!==null&&F.types!==null&&(b.types=F.types),O.T=b}}function by(){}function _f(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=$m(t).queue;Jm(t,u,n,w,a===null?by:function(){return e0(t),a(o)})}function $m(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:w,baseState:w,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:w},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function e0(t){var n=$m(t);n.next===null&&(n=t.alternate.memoizedState),Ao(t,n.next.queue,{},xi())}function yf(){return zn(ko)}function t0(){return vn().memoizedState}function n0(){return vn().memoizedState}function Sy(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=xi();t=Ka(a);var o=Qa(n,t,a);o!==null&&(si(o,n,a),bo(o,n,a)),n={cache:Yu()},t.payload=n;return}n=n.return}}function My(t,n,a){var o=xi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},jl(t)?a0(n,a):(a=Iu(t,n,a,o),a!==null&&(si(a,t,o),s0(a,n,o)))}function i0(t,n,a){var o=xi();Ao(t,n,a,o)}function Ao(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(jl(t))a0(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var b=n.lastRenderedState,F=d(b,a);if(u.hasEagerState=!0,u.eagerState=F,fi(F,b))return El(t,n,u,0),on===null&&Ml(),!1}catch{}finally{}if(a=Iu(t,n,u,o),a!==null)return si(a,t,o),s0(a,n,o),!0}return!1}function bf(t,n,a,o){if(o={lane:2,revertLane:$f(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},jl(t)){if(n)throw Error(s(479))}else n=Iu(t,a,o,2),n!==null&&si(n,t,2)}function jl(t){var n=t.alternate;return t===Mt||n!==null&&n===Mt}function a0(t,n){vr=Il=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function s0(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,bt(t,a)}}var Ro={readContext:zn,use:Hl,useCallback:pn,useContext:pn,useEffect:pn,useImperativeHandle:pn,useLayoutEffect:pn,useInsertionEffect:pn,useMemo:pn,useReducer:pn,useRef:pn,useState:pn,useDebugValue:pn,useDeferredValue:pn,useTransition:pn,useSyncExternalStore:pn,useId:pn,useHostTransitionStatus:pn,useFormState:pn,useActionState:pn,useOptimistic:pn,useMemoCache:pn,useCacheRefresh:pn};Ro.useEffectEvent=pn;var r0={readContext:zn,use:Hl,useCallback:function(t,n){return Kn().memoizedState=[t,n===void 0?null:n],t},useContext:zn,useEffect:km,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Vl(4194308,4,qm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Vl(4194308,4,t,n)},useInsertionEffect:function(t,n){Vl(4,2,t,n)},useMemo:function(t,n){var a=Kn();n=n===void 0?null:n;var o=t();if(Bs){ke(!0);try{t()}finally{ke(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Kn();if(a!==void 0){var u=a(n);if(Bs){ke(!0);try{a(n)}finally{ke(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=My.bind(null,Mt,t),[o.memoizedState,t]},useRef:function(t){var n=Kn();return t={current:t},n.memoizedState=t},useState:function(t){t=pf(t);var n=t.queue,a=i0.bind(null,Mt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:xf,useDeferredValue:function(t,n){var a=Kn();return vf(a,t,n)},useTransition:function(){var t=pf(!1);return t=Jm.bind(null,Mt,t.queue,!0,!1),Kn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=Mt,u=Kn();if(Bt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),on===null)throw Error(s(349));(Ft&127)!==0||Rm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,km(wm.bind(null,o,d,t),[t]),o.flags|=2048,yr(9,{destroy:void 0},Cm.bind(null,o,d,a,n),null),a},useId:function(){var t=Kn(),n=on.identifierPrefix;if(Bt){var a=Yi,o=qi;a=(o&~(1<<32-je(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=zl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=gy++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:yf,useFormState:zm,useActionState:zm,useOptimistic:function(t){var n=Kn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=bf.bind(null,Mt,!0,a),a.dispatch=n,[t,n]},useMemoCache:ff,useCacheRefresh:function(){return Kn().memoizedState=Sy.bind(null,Mt)},useEffectEvent:function(t){var n=Kn(),a={impl:t};return n.memoizedState=a,function(){if((Xt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Sf={readContext:zn,use:Hl,useCallback:Zm,useContext:zn,useEffect:gf,useImperativeHandle:Ym,useInsertionEffect:Wm,useLayoutEffect:Xm,useMemo:Km,useReducer:Gl,useRef:Vm,useState:function(){return Gl(pa)},useDebugValue:xf,useDeferredValue:function(t,n){var a=vn();return Qm(a,tn.memoizedState,t,n)},useTransition:function(){var t=Gl(pa)[0],n=vn().memoizedState;return[typeof t=="boolean"?t:To(t),n]},useSyncExternalStore:Am,useId:t0,useHostTransitionStatus:yf,useFormState:Bm,useActionState:Bm,useOptimistic:function(t,n){var a=vn();return Um(a,tn,t,n)},useMemoCache:ff,useCacheRefresh:n0};Sf.useEffectEvent=jm;var o0={readContext:zn,use:Hl,useCallback:Zm,useContext:zn,useEffect:gf,useImperativeHandle:Ym,useInsertionEffect:Wm,useLayoutEffect:Xm,useMemo:Km,useReducer:hf,useRef:Vm,useState:function(){return hf(pa)},useDebugValue:xf,useDeferredValue:function(t,n){var a=vn();return tn===null?vf(a,t,n):Qm(a,tn.memoizedState,t,n)},useTransition:function(){var t=hf(pa)[0],n=vn().memoizedState;return[typeof t=="boolean"?t:To(t),n]},useSyncExternalStore:Am,useId:t0,useHostTransitionStatus:yf,useFormState:Gm,useActionState:Gm,useOptimistic:function(t,n){var a=vn();return tn!==null?Um(a,tn,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:ff,useCacheRefresh:n0};o0.useEffectEvent=jm;function Mf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Ef={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=xi(),u=Ka(o);u.payload=n,a!=null&&(u.callback=a),n=Qa(t,u,o),n!==null&&(si(n,t,o),bo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=xi(),u=Ka(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Qa(t,u,o),n!==null&&(si(n,t,o),bo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=xi(),o=Ka(a);o.tag=2,n!=null&&(o.callback=n),n=Qa(t,o,a),n!==null&&(si(n,t,a),bo(n,t,a))}};function l0(t,n,a,o,u,d,b){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,b):n.prototype&&n.prototype.isPureReactComponent?!ho(a,o)||!ho(u,d):!0}function c0(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Ef.enqueueReplaceState(n,n.state,null)}function Hs(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function u0(t){Sl(t)}function f0(t){console.error(t)}function d0(t){Sl(t)}function Wl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function h0(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Tf(t,n,a){return a=Ka(a),a.tag=3,a.payload={element:null},a.callback=function(){Wl(t,n)},a}function p0(t){return t=Ka(t),t.tag=3,t}function m0(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){h0(n,a,o)}}var b=a.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(t.callback=function(){h0(n,a,o),typeof u!="function"&&(is===null?is=new Set([this]):is.add(this));var F=o.stack;this.componentDidCatch(o.value,{componentStack:F!==null?F:""})})}function Ey(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&dr(n,a,u,!0),a=hi.current,a!==null){switch(a.tag){case 31:case 13:return Ri===null?ic():a.alternate===null&&mn===0&&(mn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Ul?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Kf(t,o,u)),!1;case 22:return a.flags|=65536,o===Ul?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Kf(t,o,u)),!1}throw Error(s(435,a.tag))}return Kf(t,o,u),ic(),!1}if(Bt)return n=hi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==ku&&(t=Error(s(422),{cause:o}),go(Mi(t,a)))):(o!==ku&&(n=Error(s(423),{cause:o}),go(Mi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=Mi(o,a),u=Tf(t.stateNode,o,u),ef(t,u),mn!==4&&(mn=2)),!1;var d=Error(s(520),{cause:o});if(d=Mi(d,a),Po===null?Po=[d]:Po.push(d),mn!==4&&(mn=2),n===null)return!0;o=Mi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Tf(a.stateNode,o,t),ef(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(is===null||!is.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=p0(u),m0(u,t,a,o),ef(a,u),!1}a=a.return}while(a!==null);return!1}var Af=Error(s(461)),En=!1;function Bn(t,n,a,o){n.child=t===null?_m(n,null,a,o):zs(n,t.child,a,o)}function g0(t,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var b={};for(var F in o)F!=="ref"&&(b[F]=o[F])}else b=o;return Os(n),o=of(t,n,a,b,d,u),F=lf(),t!==null&&!En?(cf(t,n,u),ma(t,n,u)):(Bt&&F&&Gu(n),n.flags|=1,Bn(t,n,o,u),n.child)}function x0(t,n,a,o,u){if(t===null){var d=a.type;return typeof d=="function"&&!zu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,v0(t,n,d,o,u)):(t=Al(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!Of(t,u)){var b=d.memoizedProps;if(a=a.compare,a=a!==null?a:ho,a(b,o)&&t.ref===n.ref)return ma(t,n,u)}return n.flags|=1,t=ca(d,o),t.ref=n.ref,t.return=n,n.child=t}function v0(t,n,a,o,u){if(t!==null){var d=t.memoizedProps;if(ho(d,o)&&t.ref===n.ref)if(En=!1,n.pendingProps=o=d,Of(t,u))(t.flags&131072)!==0&&(En=!0);else return n.lanes=t.lanes,ma(t,n,u)}return Rf(t,n,a,o,u)}function _0(t,n,a,o){var u=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return y0(t,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Nl(n,d!==null?d.cachePool:null),d!==null?Sm(n,d):nf(),Mm(n);else return o=n.lanes=536870912,y0(t,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(Nl(n,d.cachePool),Sm(n,d),$a(),n.memoizedState=null):(t!==null&&Nl(n,null),nf(),$a());return Bn(t,n,u,a),n.child}function Co(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function y0(t,n,a,o,u){var d=Ku();return d=d===null?null:{parent:Sn._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},t!==null&&Nl(n,null),nf(),Mm(n),t!==null&&dr(t,n,o,!0),n.childLanes=u,null}function Xl(t,n){return n=Yl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function b0(t,n,a){return zs(n,t.child,null,a),t=Xl(n,n.pendingProps),t.flags|=2,pi(n),n.memoizedState=null,t}function Ty(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Bt){if(o.mode==="hidden")return t=Xl(n,o),n.lanes=536870912,Co(null,t);if(sf(n),(t=cn)?(t=Lg(t,Ai),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Wa!==null?{id:qi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},a=am(t),a.return=n,n.child=a,In=n,cn=null)):t=null,t===null)throw qa(n);return n.lanes=536870912,null}return Xl(n,o)}var d=t.memoizedState;if(d!==null){var b=d.dehydrated;if(sf(n),u)if(n.flags&256)n.flags&=-257,n=b0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(En||dr(t,n,a,!1),u=(a&t.childLanes)!==0,En||u){if(o=on,o!==null&&(b=zt(o,a),b!==0&&b!==d.retryLane))throw d.retryLane=b,Ns(t,b),si(o,t,b),Af;ic(),n=b0(t,n,a)}else t=d.treeContext,cn=Ci(b.nextSibling),In=n,Bt=!0,Xa=null,Ai=!1,t!==null&&om(n,t),n=Xl(n,o),n.flags|=4096;return n}return t=ca(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function ql(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Rf(t,n,a,o,u){return Os(n),a=of(t,n,a,o,void 0,u),o=lf(),t!==null&&!En?(cf(t,n,u),ma(t,n,u)):(Bt&&o&&Gu(n),n.flags|=1,Bn(t,n,a,u),n.child)}function S0(t,n,a,o,u,d){return Os(n),n.updateQueue=null,a=Tm(n,o,a,u),Em(t),o=lf(),t!==null&&!En?(cf(t,n,d),ma(t,n,d)):(Bt&&o&&Gu(n),n.flags|=1,Bn(t,n,a,d),n.child)}function M0(t,n,a,o,u){if(Os(n),n.stateNode===null){var d=lr,b=a.contextType;typeof b=="object"&&b!==null&&(d=zn(b)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Ef,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Ju(n),b=a.contextType,d.context=typeof b=="object"&&b!==null?zn(b):lr,d.state=n.memoizedState,b=a.getDerivedStateFromProps,typeof b=="function"&&(Mf(n,a,b,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(b=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),b!==d.state&&Ef.enqueueReplaceState(d,d.state,null),Mo(n,o,d,u),So(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var F=n.memoizedProps,J=Hs(a,F);d.props=J;var he=d.context,Ce=a.contextType;b=lr,typeof Ce=="object"&&Ce!==null&&(b=zn(Ce));var Oe=a.getDerivedStateFromProps;Ce=typeof Oe=="function"||typeof d.getSnapshotBeforeUpdate=="function",F=n.pendingProps!==F,Ce||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(F||he!==b)&&c0(n,d,o,b),Za=!1;var ve=n.memoizedState;d.state=ve,Mo(n,o,d,u),So(),he=n.memoizedState,F||ve!==he||Za?(typeof Oe=="function"&&(Mf(n,a,Oe,o),he=n.memoizedState),(J=Za||l0(n,a,J,o,ve,he,b))?(Ce||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=he),d.props=o,d.state=he,d.context=b,o=J):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,$u(t,n),b=n.memoizedProps,Ce=Hs(a,b),d.props=Ce,Oe=n.pendingProps,ve=d.context,he=a.contextType,J=lr,typeof he=="object"&&he!==null&&(J=zn(he)),F=a.getDerivedStateFromProps,(he=typeof F=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(b!==Oe||ve!==J)&&c0(n,d,o,J),Za=!1,ve=n.memoizedState,d.state=ve,Mo(n,o,d,u),So();var be=n.memoizedState;b!==Oe||ve!==be||Za||t!==null&&t.dependencies!==null&&Cl(t.dependencies)?(typeof F=="function"&&(Mf(n,a,F,o),be=n.memoizedState),(Ce=Za||l0(n,a,Ce,o,ve,be,J)||t!==null&&t.dependencies!==null&&Cl(t.dependencies))?(he||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,be,J),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,be,J)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||b===t.memoizedProps&&ve===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&ve===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=be),d.props=o,d.state=be,d.context=J,o=Ce):(typeof d.componentDidUpdate!="function"||b===t.memoizedProps&&ve===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&ve===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,ql(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=zs(n,t.child,null,u),n.child=zs(n,null,a,u)):Bn(t,n,a,u),n.memoizedState=d.state,t=n.child):t=ma(t,n,u),t}function E0(t,n,a,o){return Us(),n.flags|=256,Bn(t,n,a,o),n.child}var Cf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wf(t){return{baseLanes:t,cachePool:hm()}}function Nf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=gi),t}function T0(t,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,b;if((b=d)||(b=t!==null&&t.memoizedState===null?!1:(xn.current&2)!==0),b&&(u=!0,n.flags&=-129),b=(n.flags&32)!==0,n.flags&=-33,t===null){if(Bt){if(u?Ja(n):$a(),(t=cn)?(t=Lg(t,Ai),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Wa!==null?{id:qi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},a=am(t),a.return=n,n.child=a,In=n,cn=null)):t=null,t===null)throw qa(n);return dd(t)?n.lanes=32:n.lanes=536870912,null}var F=o.children;return o=o.fallback,u?($a(),u=n.mode,F=Yl({mode:"hidden",children:F},u),o=Ds(o,u,a,null),F.return=n,o.return=n,F.sibling=o,n.child=F,o=n.child,o.memoizedState=wf(a),o.childLanes=Nf(t,b,a),n.memoizedState=Cf,Co(null,o)):(Ja(n),Df(n,F))}var J=t.memoizedState;if(J!==null&&(F=J.dehydrated,F!==null)){if(d)n.flags&256?(Ja(n),n.flags&=-257,n=Uf(t,n,a)):n.memoizedState!==null?($a(),n.child=t.child,n.flags|=128,n=null):($a(),F=o.fallback,u=n.mode,o=Yl({mode:"visible",children:o.children},u),F=Ds(F,u,a,null),F.flags|=2,o.return=n,F.return=n,o.sibling=F,n.child=o,zs(n,t.child,null,a),o=n.child,o.memoizedState=wf(a),o.childLanes=Nf(t,b,a),n.memoizedState=Cf,n=Co(null,o));else if(Ja(n),dd(F)){if(b=F.nextSibling&&F.nextSibling.dataset,b)var he=b.dgst;b=he,o=Error(s(419)),o.stack="",o.digest=b,go({value:o,source:null,stack:null}),n=Uf(t,n,a)}else if(En||dr(t,n,a,!1),b=(a&t.childLanes)!==0,En||b){if(b=on,b!==null&&(o=zt(b,a),o!==0&&o!==J.retryLane))throw J.retryLane=o,Ns(t,o),si(b,t,o),Af;fd(F)||ic(),n=Uf(t,n,a)}else fd(F)?(n.flags|=192,n.child=t.child,n=null):(t=J.treeContext,cn=Ci(F.nextSibling),In=n,Bt=!0,Xa=null,Ai=!1,t!==null&&om(n,t),n=Df(n,o.children),n.flags|=4096);return n}return u?($a(),F=o.fallback,u=n.mode,J=t.child,he=J.sibling,o=ca(J,{mode:"hidden",children:o.children}),o.subtreeFlags=J.subtreeFlags&65011712,he!==null?F=ca(he,F):(F=Ds(F,u,a,null),F.flags|=2),F.return=n,o.return=n,o.sibling=F,n.child=o,Co(null,o),o=n.child,F=t.child.memoizedState,F===null?F=wf(a):(u=F.cachePool,u!==null?(J=Sn._currentValue,u=u.parent!==J?{parent:J,pool:J}:u):u=hm(),F={baseLanes:F.baseLanes|a,cachePool:u}),o.memoizedState=F,o.childLanes=Nf(t,b,a),n.memoizedState=Cf,Co(t.child,o)):(Ja(n),a=t.child,t=a.sibling,a=ca(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(b=n.deletions,b===null?(n.deletions=[t],n.flags|=16):b.push(t)),n.child=a,n.memoizedState=null,a)}function Df(t,n){return n=Yl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Yl(t,n){return t=di(22,t,null,n),t.lanes=0,t}function Uf(t,n,a){return zs(n,t.child,null,a),t=Df(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function A0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Xu(t.return,n,a)}function Lf(t,n,a,o,u,d){var b=t.memoizedState;b===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(b.isBackwards=n,b.rendering=null,b.renderingStartTime=0,b.last=o,b.tail=a,b.tailMode=u,b.treeForkCount=d)}function R0(t,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var b=xn.current,F=(b&2)!==0;if(F?(b=b&1|2,n.flags|=128):b&=1,K(xn,b),Bn(t,n,o,a),o=Bt?mo:0,!F&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&A0(t,a,n);else if(t.tag===19)A0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Fl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Lf(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Fl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Lf(n,!0,a,null,d,o);break;case"together":Lf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ma(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ns|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(dr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=ca(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ca(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Of(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Cl(t)))}function Ay(t,n,a){switch(n.tag){case 3:ue(n,n.stateNode.containerInfo),Ya(n,Sn,t.memoizedState.cache),Us();break;case 27:case 5:Ae(n);break;case 4:ue(n,n.stateNode.containerInfo);break;case 10:Ya(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,sf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ja(n),n.flags|=128,null):(a&n.child.childLanes)!==0?T0(t,n,a):(Ja(n),t=ma(t,n,a),t!==null?t.sibling:null);Ja(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(dr(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return R0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),K(xn,xn.current),o)break;return null;case 22:return n.lanes=0,_0(t,n,a,n.pendingProps);case 24:Ya(n,Sn,t.memoizedState.cache)}return ma(t,n,a)}function C0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)En=!0;else{if(!Of(t,a)&&(n.flags&128)===0)return En=!1,Ay(t,n,a);En=(t.flags&131072)!==0}else En=!1,Bt&&(n.flags&1048576)!==0&&rm(n,mo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Fs(n.elementType),n.type=t,typeof t=="function")zu(t)?(o=Hs(t,o),n.tag=1,n=M0(null,n,t,o,a)):(n.tag=0,n=Rf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===B){n.tag=11,n=g0(null,n,t,o,a);break e}else if(u===k){n.tag=14,n=x0(null,n,t,o,a);break e}}throw n=te(t)||t,Error(s(306,n,""))}}return n;case 0:return Rf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Hs(o,n.pendingProps),M0(t,n,o,u,a);case 3:e:{if(ue(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,$u(t,n),Mo(n,o,null,a);var b=n.memoizedState;if(o=b.cache,Ya(n,Sn,o),o!==d.cache&&qu(n,[Sn],a,!0),So(),o=b.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:b.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=E0(t,n,o,a);break e}else if(o!==u){u=Mi(Error(s(424)),n),go(u),n=E0(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(cn=Ci(t.firstChild),In=n,Bt=!0,Xa=null,Ai=!0,a=_m(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Us(),o===u){n=ma(t,n,a);break e}Bn(t,n,o,a)}n=n.child}return n;case 26:return ql(t,n),t===null?(a=Bg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Bt||(a=n.type,t=n.pendingProps,o=uc(q.current).createElement(a),o[gn]=n,o[Fn]=t,Hn(o,a,t),bn(o),n.stateNode=o):n.memoizedState=Bg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ae(n),t===null&&Bt&&(o=n.stateNode=Fg(n.type,n.pendingProps,q.current),In=n,Ai=!0,u=cn,os(n.type)?(hd=u,cn=Ci(o.firstChild)):cn=u),Bn(t,n,n.pendingProps.children,a),ql(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Bt&&((u=o=cn)&&(o=nb(o,n.type,n.pendingProps,Ai),o!==null?(n.stateNode=o,In=n,cn=Ci(o.firstChild),Ai=!1,u=!0):u=!1),u||qa(n)),Ae(n),u=n.type,d=n.pendingProps,b=t!==null?t.memoizedProps:null,o=d.children,ld(u,d)?o=null:b!==null&&ld(u,b)&&(n.flags|=32),n.memoizedState!==null&&(u=of(t,n,xy,null,null,a),ko._currentValue=u),ql(t,n),Bn(t,n,o,a),n.child;case 6:return t===null&&Bt&&((t=a=cn)&&(a=ib(a,n.pendingProps,Ai),a!==null?(n.stateNode=a,In=n,cn=null,t=!0):t=!1),t||qa(n)),null;case 13:return T0(t,n,a);case 4:return ue(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=zs(n,null,o,a):Bn(t,n,o,a),n.child;case 11:return g0(t,n,n.type,n.pendingProps,a);case 7:return Bn(t,n,n.pendingProps,a),n.child;case 8:return Bn(t,n,n.pendingProps.children,a),n.child;case 12:return Bn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ya(n,n.type,o.value),Bn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Os(n),u=zn(u),o=o(u),n.flags|=1,Bn(t,n,o,a),n.child;case 14:return x0(t,n,n.type,n.pendingProps,a);case 15:return v0(t,n,n.type,n.pendingProps,a);case 19:return R0(t,n,a);case 31:return Ty(t,n,a);case 22:return _0(t,n,a,n.pendingProps);case 24:return Os(n),o=zn(Sn),t===null?(u=Ku(),u===null&&(u=on,d=Yu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},Ju(n),Ya(n,Sn,u)):((t.lanes&a)!==0&&($u(t,n),Mo(n,null,null,a),So()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ya(n,Sn,o)):(o=d.cache,Ya(n,Sn,o),o!==u.cache&&qu(n,[Sn],a,!0))),Bn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ga(t){t.flags|=4}function Pf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(tg())t.flags|=8192;else throw Is=Ul,Qu}else t.flags&=-16777217}function w0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!jg(n))if(tg())t.flags|=8192;else throw Is=Ul,Qu}function Zl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?ge():536870912,t.lanes|=n,Er|=n)}function wo(t,n){if(!Bt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function un(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Ry(t,n,a){var o=n.pendingProps;switch(Vu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return un(n),null;case 1:return un(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),da(Sn),De(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(fr(n)?ga(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ju())),un(n),null;case 26:var u=n.type,d=n.memoizedState;return t===null?(ga(n),d!==null?(un(n),w0(n,d)):(un(n),Pf(n,u,null,o,a))):d?d!==t.memoizedState?(ga(n),un(n),w0(n,d)):(un(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&ga(n),un(n),Pf(n,u,t,o,a)),null;case 27:if(Ue(n),a=q.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ga(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return un(n),null}t=Q.current,fr(n)?lm(n):(t=Fg(u,o,a),n.stateNode=t,ga(n))}return un(n),null;case 5:if(Ue(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ga(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return un(n),null}if(d=Q.current,fr(n))lm(n);else{var b=uc(q.current);switch(d){case 1:d=b.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=b.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=b.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=b.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=b.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?b.createElement("select",{is:o.is}):b.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?b.createElement(u,{is:o.is}):b.createElement(u)}}d[gn]=n,d[Fn]=o;e:for(b=n.child;b!==null;){if(b.tag===5||b.tag===6)d.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===n)break e;for(;b.sibling===null;){if(b.return===null||b.return===n)break e;b=b.return}b.sibling.return=b.return,b=b.sibling}n.stateNode=d;e:switch(Hn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ga(n)}}return un(n),Pf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ga(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=q.current,fr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=In,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[gn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Tg(t.nodeValue,a)),t||qa(n,!0)}else t=uc(t).createTextNode(o),t[gn]=n,n.stateNode=t}return un(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=fr(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[gn]=n}else Us(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;un(n),t=!1}else a=ju(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(pi(n),n):(pi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return un(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=fr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[gn]=n}else Us(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;un(n),u=!1}else u=ju(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(pi(n),n):(pi(n),null)}return pi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Zl(n,n.updateQueue),un(n),null);case 4:return De(),t===null&&id(n.stateNode.containerInfo),un(n),null;case 10:return da(n.type),un(n),null;case 19:if(C(xn),o=n.memoizedState,o===null)return un(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)wo(o,!1);else{if(mn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Fl(t),d!==null){for(n.flags|=128,wo(o,!1),t=d.updateQueue,n.updateQueue=t,Zl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)im(a,t),a=a.sibling;return K(xn,xn.current&1|2),Bt&&ua(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&Te()>ec&&(n.flags|=128,u=!0,wo(o,!1),n.lanes=4194304)}else{if(!u)if(t=Fl(d),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Zl(n,t),wo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Bt)return un(n),null}else 2*Te()-o.renderingStartTime>ec&&a!==536870912&&(n.flags|=128,u=!0,wo(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Te(),t.sibling=null,a=xn.current,K(xn,u?a&1|2:a&1),Bt&&ua(n,o.treeForkCount),t):(un(n),null);case 22:case 23:return pi(n),af(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(un(n),n.subtreeFlags&6&&(n.flags|=8192)):un(n),a=n.updateQueue,a!==null&&Zl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&C(Ps),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),da(Sn),un(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Cy(t,n){switch(Vu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return da(Sn),De(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ue(n),null;case 31:if(n.memoizedState!==null){if(pi(n),n.alternate===null)throw Error(s(340));Us()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(pi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Us()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return C(xn),null;case 4:return De(),null;case 10:return da(n.type),null;case 22:case 23:return pi(n),af(),t!==null&&C(Ps),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return da(Sn),null;case 25:return null;default:return null}}function N0(t,n){switch(Vu(n),n.tag){case 3:da(Sn),De();break;case 26:case 27:case 5:Ue(n);break;case 4:De();break;case 31:n.memoizedState!==null&&pi(n);break;case 13:pi(n);break;case 19:C(xn);break;case 10:da(n.type);break;case 22:case 23:pi(n),af(),t!==null&&C(Ps);break;case 24:da(Sn)}}function No(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var d=a.create,b=a.inst;o=d(),b.destroy=o}a=a.next}while(a!==u)}}catch(F){$t(n,n.return,F)}}function es(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var b=o.inst,F=b.destroy;if(F!==void 0){b.destroy=void 0,u=n;var J=a,he=F;try{he()}catch(Ce){$t(u,J,Ce)}}}o=o.next}while(o!==d)}}catch(Ce){$t(n,n.return,Ce)}}function D0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{bm(n,a)}catch(o){$t(t,t.return,o)}}}function U0(t,n,a){a.props=Hs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){$t(t,n,o)}}function Do(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){$t(t,n,u)}}function Zi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){$t(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){$t(t,n,u)}else a.current=null}function L0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){$t(t,t.return,u)}}function Ff(t,n,a){try{var o=t.stateNode;Ky(o,t.type,a,n),o[Fn]=n}catch(u){$t(t,t.return,u)}}function O0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&os(t.type)||t.tag===4}function If(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||O0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&os(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=oa));else if(o!==4&&(o===27&&os(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(zf(t,n,a),t=t.sibling;t!==null;)zf(t,n,a),t=t.sibling}function Kl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&os(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Kl(t,n,a),t=t.sibling;t!==null;)Kl(t,n,a),t=t.sibling}function P0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Hn(n,o,a),n[gn]=t,n[Fn]=a}catch(d){$t(t,t.return,d)}}var xa=!1,Tn=!1,Bf=!1,F0=typeof WeakSet=="function"?WeakSet:Set,On=null;function wy(t,n){if(t=t.containerInfo,rd=xc,t=Yp(t),Du(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var b=0,F=-1,J=-1,he=0,Ce=0,Oe=t,ve=null;t:for(;;){for(var be;Oe!==a||u!==0&&Oe.nodeType!==3||(F=b+u),Oe!==d||o!==0&&Oe.nodeType!==3||(J=b+o),Oe.nodeType===3&&(b+=Oe.nodeValue.length),(be=Oe.firstChild)!==null;)ve=Oe,Oe=be;for(;;){if(Oe===t)break t;if(ve===a&&++he===u&&(F=b),ve===d&&++Ce===o&&(J=b),(be=Oe.nextSibling)!==null)break;Oe=ve,ve=Oe.parentNode}Oe=be}a=F===-1||J===-1?null:{start:F,end:J}}else a=null}a=a||{start:0,end:0}}else a=null;for(od={focusedElem:t,selectionRange:a},xc=!1,On=n;On!==null;)if(n=On,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,On=t;else for(;On!==null;){switch(n=On,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var st=Hs(a.type,u);t=o.getSnapshotBeforeUpdate(st,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(mt){$t(a,a.return,mt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)ud(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ud(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,On=t;break}On=n.return}}function I0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:_a(t,a),o&4&&No(5,a);break;case 1:if(_a(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(b){$t(a,a.return,b)}else{var u=Hs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(b){$t(a,a.return,b)}}o&64&&D0(a),o&512&&Do(a,a.return);break;case 3:if(_a(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{bm(t,n)}catch(b){$t(a,a.return,b)}}break;case 27:n===null&&o&4&&P0(a);case 26:case 5:_a(t,a),n===null&&o&4&&L0(a),o&512&&Do(a,a.return);break;case 12:_a(t,a);break;case 31:_a(t,a),o&4&&H0(t,a);break;case 13:_a(t,a),o&4&&G0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=zy.bind(null,a),ab(t,a))));break;case 22:if(o=a.memoizedState!==null||xa,!o){n=n!==null&&n.memoizedState!==null||Tn,u=xa;var d=Tn;xa=o,(Tn=n)&&!d?ya(t,a,(a.subtreeFlags&8772)!==0):_a(t,a),xa=u,Tn=d}break;case 30:break;default:_a(t,a)}}function z0(t){var n=t.alternate;n!==null&&(t.alternate=null,z0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ao(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var hn=null,ti=!1;function va(t,n,a){for(a=a.child;a!==null;)B0(t,n,a),a=a.sibling}function B0(t,n,a){if(Me&&typeof Me.onCommitFiberUnmount=="function")try{Me.onCommitFiberUnmount(Se,a)}catch{}switch(a.tag){case 26:Tn||Zi(a,n),va(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Tn||Zi(a,n);var o=hn,u=ti;os(a.type)&&(hn=a.stateNode,ti=!1),va(t,n,a),Ho(a.stateNode),hn=o,ti=u;break;case 5:Tn||Zi(a,n);case 6:if(o=hn,u=ti,hn=null,va(t,n,a),hn=o,ti=u,hn!==null)if(ti)try{(hn.nodeType===9?hn.body:hn.nodeName==="HTML"?hn.ownerDocument.body:hn).removeChild(a.stateNode)}catch(d){$t(a,n,d)}else try{hn.removeChild(a.stateNode)}catch(d){$t(a,n,d)}break;case 18:hn!==null&&(ti?(t=hn,Dg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Ur(t)):Dg(hn,a.stateNode));break;case 4:o=hn,u=ti,hn=a.stateNode.containerInfo,ti=!0,va(t,n,a),hn=o,ti=u;break;case 0:case 11:case 14:case 15:es(2,a,n),Tn||es(4,a,n),va(t,n,a);break;case 1:Tn||(Zi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&U0(a,n,o)),va(t,n,a);break;case 21:va(t,n,a);break;case 22:Tn=(o=Tn)||a.memoizedState!==null,va(t,n,a),Tn=o;break;default:va(t,n,a)}}function H0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ur(t)}catch(a){$t(n,n.return,a)}}}function G0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ur(t)}catch(a){$t(n,n.return,a)}}function Ny(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new F0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new F0),n;default:throw Error(s(435,t.tag))}}function Ql(t,n){var a=Ny(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=By.bind(null,t,o);o.then(u,u)}})}function ni(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=t,b=n,F=b;e:for(;F!==null;){switch(F.tag){case 27:if(os(F.type)){hn=F.stateNode,ti=!1;break e}break;case 5:hn=F.stateNode,ti=!1;break e;case 3:case 4:hn=F.stateNode.containerInfo,ti=!0;break e}F=F.return}if(hn===null)throw Error(s(160));B0(d,b,u),hn=null,ti=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)V0(n,t),n=n.sibling}var Bi=null;function V0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ni(n,t),ii(t),o&4&&(es(3,t,t.return),No(3,t),es(5,t,t.return));break;case 1:ni(n,t),ii(t),o&512&&(Tn||a===null||Zi(a,a.return)),o&64&&xa&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Bi;if(ni(n,t),ii(t),o&512&&(Tn||a===null||Zi(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Ba]||d[gn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Hn(d,o,a),d[gn]=t,bn(d),o=d;break e;case"link":var b=Vg("link","href",u).get(o+(a.href||""));if(b){for(var F=0;F<b.length;F++)if(d=b[F],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){b.splice(F,1);break t}}d=u.createElement(o),Hn(d,o,a),u.head.appendChild(d);break;case"meta":if(b=Vg("meta","content",u).get(o+(a.content||""))){for(F=0;F<b.length;F++)if(d=b[F],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){b.splice(F,1);break t}}d=u.createElement(o),Hn(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[gn]=t,bn(d),o=d}t.stateNode=o}else kg(u,t.type,t.stateNode);else t.stateNode=Gg(u,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?kg(u,t.type,t.stateNode):Gg(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Ff(t,t.memoizedProps,a.memoizedProps)}break;case 27:ni(n,t),ii(t),o&512&&(Tn||a===null||Zi(a,a.return)),a!==null&&o&4&&Ff(t,t.memoizedProps,a.memoizedProps);break;case 5:if(ni(n,t),ii(t),o&512&&(Tn||a===null||Zi(a,a.return)),t.flags&32){u=t.stateNode;try{ui(u,"")}catch(st){$t(t,t.return,st)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Ff(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Bf=!0);break;case 6:if(ni(n,t),ii(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(st){$t(t,t.return,st)}}break;case 3:if(hc=null,u=Bi,Bi=fc(n.containerInfo),ni(n,t),Bi=u,ii(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Ur(n.containerInfo)}catch(st){$t(t,t.return,st)}Bf&&(Bf=!1,k0(t));break;case 4:o=Bi,Bi=fc(t.stateNode.containerInfo),ni(n,t),ii(t),Bi=o;break;case 12:ni(n,t),ii(t);break;case 31:ni(n,t),ii(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ql(t,o)));break;case 13:ni(n,t),ii(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&($l=Te()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ql(t,o)));break;case 22:u=t.memoizedState!==null;var J=a!==null&&a.memoizedState!==null,he=xa,Ce=Tn;if(xa=he||u,Tn=Ce||J,ni(n,t),Tn=Ce,xa=he,ii(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||J||xa||Tn||Gs(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){J=a=n;try{if(d=J.stateNode,u)b=d.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{F=J.stateNode;var Oe=J.memoizedProps.style,ve=Oe!=null&&Oe.hasOwnProperty("display")?Oe.display:null;F.style.display=ve==null||typeof ve=="boolean"?"":(""+ve).trim()}}catch(st){$t(J,J.return,st)}}}else if(n.tag===6){if(a===null){J=n;try{J.stateNode.nodeValue=u?"":J.memoizedProps}catch(st){$t(J,J.return,st)}}}else if(n.tag===18){if(a===null){J=n;try{var be=J.stateNode;u?Ug(be,!0):Ug(J.stateNode,!1)}catch(st){$t(J,J.return,st)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Ql(t,a))));break;case 19:ni(n,t),ii(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ql(t,o)));break;case 30:break;case 21:break;default:ni(n,t),ii(t)}}function ii(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(O0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=If(t);Kl(t,d,u);break;case 5:var b=a.stateNode;a.flags&32&&(ui(b,""),a.flags&=-33);var F=If(t);Kl(t,F,b);break;case 3:case 4:var J=a.stateNode.containerInfo,he=If(t);zf(t,he,J);break;default:throw Error(s(161))}}catch(Ce){$t(t,t.return,Ce)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function k0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;k0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function _a(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)I0(t,n.alternate,n),n=n.sibling}function Gs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:es(4,n,n.return),Gs(n);break;case 1:Zi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&U0(n,n.return,a),Gs(n);break;case 27:Ho(n.stateNode);case 26:case 5:Zi(n,n.return),Gs(n);break;case 22:n.memoizedState===null&&Gs(n);break;case 30:Gs(n);break;default:Gs(n)}t=t.sibling}}function ya(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,b=d.flags;switch(d.tag){case 0:case 11:case 15:ya(u,d,a),No(4,d);break;case 1:if(ya(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(he){$t(o,o.return,he)}if(o=d,u=o.updateQueue,u!==null){var F=o.stateNode;try{var J=u.shared.hiddenCallbacks;if(J!==null)for(u.shared.hiddenCallbacks=null,u=0;u<J.length;u++)ym(J[u],F)}catch(he){$t(o,o.return,he)}}a&&b&64&&D0(d),Do(d,d.return);break;case 27:P0(d);case 26:case 5:ya(u,d,a),a&&o===null&&b&4&&L0(d),Do(d,d.return);break;case 12:ya(u,d,a);break;case 31:ya(u,d,a),a&&b&4&&H0(u,d);break;case 13:ya(u,d,a),a&&b&4&&G0(u,d);break;case 22:d.memoizedState===null&&ya(u,d,a),Do(d,d.return);break;case 30:break;default:ya(u,d,a)}n=n.sibling}}function Hf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&xo(a))}function Gf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&xo(t))}function Hi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)j0(t,n,a,o),n=n.sibling}function j0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Hi(t,n,a,o),u&2048&&No(9,n);break;case 1:Hi(t,n,a,o);break;case 3:Hi(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&xo(t)));break;case 12:if(u&2048){Hi(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,b=d.id,F=d.onPostCommit;typeof F=="function"&&F(b,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(J){$t(n,n.return,J)}}else Hi(t,n,a,o);break;case 31:Hi(t,n,a,o);break;case 13:Hi(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,b=n.alternate,n.memoizedState!==null?d._visibility&2?Hi(t,n,a,o):Uo(t,n):d._visibility&2?Hi(t,n,a,o):(d._visibility|=2,br(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Hf(b,n);break;case 24:Hi(t,n,a,o),u&2048&&Gf(n.alternate,n);break;default:Hi(t,n,a,o)}}function br(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,b=n,F=a,J=o,he=b.flags;switch(b.tag){case 0:case 11:case 15:br(d,b,F,J,u),No(8,b);break;case 23:break;case 22:var Ce=b.stateNode;b.memoizedState!==null?Ce._visibility&2?br(d,b,F,J,u):Uo(d,b):(Ce._visibility|=2,br(d,b,F,J,u)),u&&he&2048&&Hf(b.alternate,b);break;case 24:br(d,b,F,J,u),u&&he&2048&&Gf(b.alternate,b);break;default:br(d,b,F,J,u)}n=n.sibling}}function Uo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Uo(a,o),u&2048&&Hf(o.alternate,o);break;case 24:Uo(a,o),u&2048&&Gf(o.alternate,o);break;default:Uo(a,o)}n=n.sibling}}var Lo=8192;function Sr(t,n,a){if(t.subtreeFlags&Lo)for(t=t.child;t!==null;)W0(t,n,a),t=t.sibling}function W0(t,n,a){switch(t.tag){case 26:Sr(t,n,a),t.flags&Lo&&t.memoizedState!==null&&gb(a,Bi,t.memoizedState,t.memoizedProps);break;case 5:Sr(t,n,a);break;case 3:case 4:var o=Bi;Bi=fc(t.stateNode.containerInfo),Sr(t,n,a),Bi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Lo,Lo=16777216,Sr(t,n,a),Lo=o):Sr(t,n,a));break;default:Sr(t,n,a)}}function X0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Oo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];On=o,Y0(o,t)}X0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)q0(t),t=t.sibling}function q0(t){switch(t.tag){case 0:case 11:case 15:Oo(t),t.flags&2048&&es(9,t,t.return);break;case 3:Oo(t);break;case 12:Oo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Jl(t)):Oo(t);break;default:Oo(t)}}function Jl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];On=o,Y0(o,t)}X0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:es(8,n,n.return),Jl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Jl(n));break;default:Jl(n)}t=t.sibling}}function Y0(t,n){for(;On!==null;){var a=On;switch(a.tag){case 0:case 11:case 15:es(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:xo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,On=o;else e:for(a=t;On!==null;){o=On;var u=o.sibling,d=o.return;if(z0(o),o===a){On=null;break e}if(u!==null){u.return=d,On=u;break e}On=d}}}var Dy={getCacheForType:function(t){var n=zn(Sn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return zn(Sn).controller.signal}},Uy=typeof WeakMap=="function"?WeakMap:Map,Xt=0,on=null,Ut=null,Ft=0,Jt=0,mi=null,ts=!1,Mr=!1,Vf=!1,ba=0,mn=0,ns=0,Vs=0,kf=0,gi=0,Er=0,Po=null,ai=null,jf=!1,$l=0,Z0=0,ec=1/0,tc=null,is=null,Nn=0,as=null,Tr=null,Sa=0,Wf=0,Xf=null,K0=null,Fo=0,qf=null;function xi(){return(Xt&2)!==0&&Ft!==0?Ft&-Ft:O.T!==null?$f():yn()}function Q0(){if(gi===0)if((Ft&536870912)===0||Bt){var t=yt;yt<<=1,(yt&3932160)===0&&(yt=262144),gi=t}else gi=536870912;return t=hi.current,t!==null&&(t.flags|=32),gi}function si(t,n,a){(t===on&&(Jt===2||Jt===9)||t.cancelPendingCommit!==null)&&(Ar(t,0),ss(t,Ft,gi,!1)),Le(t,a),((Xt&2)===0||t!==on)&&(t===on&&((Xt&2)===0&&(Vs|=a),mn===4&&ss(t,Ft,gi,!1)),Ki(t))}function J0(t,n,a){if((Xt&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||we(t,n),u=o?Py(t,n):Zf(t,n,!0),d=o;do{if(u===0){Mr&&!o&&ss(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!Ly(a)){u=Zf(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var b=0;else b=t.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){n=b;e:{var F=t;u=Po;var J=F.current.memoizedState.isDehydrated;if(J&&(Ar(F,b).flags|=256),b=Zf(F,b,!1),b!==2){if(Vf&&!J){F.errorRecoveryDisabledLanes|=d,Vs|=d,u=4;break e}d=ai,ai=u,d!==null&&(ai===null?ai=d:ai.push.apply(ai,d))}u=b}if(d=!1,u!==2)continue}}if(u===1){Ar(t,0),ss(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ss(o,n,gi,!ts);break e;case 2:ai=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=$l+300-Te(),10<u)){if(ss(o,n,gi,!ts),le(o,0,!0)!==0)break e;Sa=n,o.timeoutHandle=wg($0.bind(null,o,a,ai,tc,jf,n,gi,Vs,Er,ts,d,"Throttled",-0,0),u);break e}$0(o,a,ai,tc,jf,n,gi,Vs,Er,ts,d,null,-0,0)}}break}while(!0);Ki(t)}function $0(t,n,a,o,u,d,b,F,J,he,Ce,Oe,ve,be){if(t.timeoutHandle=-1,Oe=n.subtreeFlags,Oe&8192||(Oe&16785408)===16785408){Oe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:oa},W0(n,d,Oe);var st=(d&62914560)===d?$l-Te():(d&4194048)===d?Z0-Te():0;if(st=xb(Oe,st),st!==null){Sa=d,t.cancelPendingCommit=st(og.bind(null,t,n,d,a,o,u,b,F,J,Ce,Oe,null,ve,be)),ss(t,d,b,!he);return}}og(t,n,d,a,o,u,b,F,J)}function Ly(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!fi(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ss(t,n,a,o){n&=~kf,n&=~Vs,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-je(u),b=1<<d;o[d]=-1,u&=~b}a!==0&&rt(t,a,n)}function nc(){return(Xt&6)===0?(Io(0),!1):!0}function Yf(){if(Ut!==null){if(Jt===0)var t=Ut.return;else t=Ut,fa=Ls=null,uf(t),gr=null,_o=0,t=Ut;for(;t!==null;)N0(t.alternate,t),t=t.return;Ut=null}}function Ar(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,$y(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Sa=0,Yf(),on=t,Ut=a=ca(t.current,null),Ft=n,Jt=0,mi=null,ts=!1,Mr=we(t,n),Vf=!1,Er=gi=kf=Vs=ns=mn=0,ai=Po=null,jf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-je(o),d=1<<u;n|=t[u],o&=~d}return ba=n,Ml(),a}function eg(t,n){Mt=null,O.H=Ro,n===mr||n===Dl?(n=gm(),Jt=3):n===Qu?(n=gm(),Jt=4):Jt=n===Af?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,mi=n,Ut===null&&(mn=1,Wl(t,Mi(n,t.current)))}function tg(){var t=hi.current;return t===null?!0:(Ft&4194048)===Ft?Ri===null:(Ft&62914560)===Ft||(Ft&536870912)!==0?t===Ri:!1}function ng(){var t=O.H;return O.H=Ro,t===null?Ro:t}function ig(){var t=O.A;return O.A=Dy,t}function ic(){mn=4,ts||(Ft&4194048)!==Ft&&hi.current!==null||(Mr=!0),(ns&134217727)===0&&(Vs&134217727)===0||on===null||ss(on,Ft,gi,!1)}function Zf(t,n,a){var o=Xt;Xt|=2;var u=ng(),d=ig();(on!==t||Ft!==n)&&(tc=null,Ar(t,n)),n=!1;var b=mn;e:do try{if(Jt!==0&&Ut!==null){var F=Ut,J=mi;switch(Jt){case 8:Yf(),b=6;break e;case 3:case 2:case 9:case 6:hi.current===null&&(n=!0);var he=Jt;if(Jt=0,mi=null,Rr(t,F,J,he),a&&Mr){b=0;break e}break;default:he=Jt,Jt=0,mi=null,Rr(t,F,J,he)}}Oy(),b=mn;break}catch(Ce){eg(t,Ce)}while(!0);return n&&t.shellSuspendCounter++,fa=Ls=null,Xt=o,O.H=u,O.A=d,Ut===null&&(on=null,Ft=0,Ml()),b}function Oy(){for(;Ut!==null;)ag(Ut)}function Py(t,n){var a=Xt;Xt|=2;var o=ng(),u=ig();on!==t||Ft!==n?(tc=null,ec=Te()+500,Ar(t,n)):Mr=we(t,n);e:do try{if(Jt!==0&&Ut!==null){n=Ut;var d=mi;t:switch(Jt){case 1:Jt=0,mi=null,Rr(t,n,d,1);break;case 2:case 9:if(pm(d)){Jt=0,mi=null,sg(n);break}n=function(){Jt!==2&&Jt!==9||on!==t||(Jt=7),Ki(t)},d.then(n,n);break e;case 3:Jt=7;break e;case 4:Jt=5;break e;case 7:pm(d)?(Jt=0,mi=null,sg(n)):(Jt=0,mi=null,Rr(t,n,d,7));break;case 5:var b=null;switch(Ut.tag){case 26:b=Ut.memoizedState;case 5:case 27:var F=Ut;if(b?jg(b):F.stateNode.complete){Jt=0,mi=null;var J=F.sibling;if(J!==null)Ut=J;else{var he=F.return;he!==null?(Ut=he,ac(he)):Ut=null}break t}}Jt=0,mi=null,Rr(t,n,d,5);break;case 6:Jt=0,mi=null,Rr(t,n,d,6);break;case 8:Yf(),mn=6;break e;default:throw Error(s(462))}}Fy();break}catch(Ce){eg(t,Ce)}while(!0);return fa=Ls=null,O.H=o,O.A=u,Xt=a,Ut!==null?0:(on=null,Ft=0,Ml(),mn)}function Fy(){for(;Ut!==null&&!ot();)ag(Ut)}function ag(t){var n=C0(t.alternate,t,ba);t.memoizedProps=t.pendingProps,n===null?ac(t):Ut=n}function sg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=S0(a,n,n.pendingProps,n.type,void 0,Ft);break;case 11:n=S0(a,n,n.pendingProps,n.type.render,n.ref,Ft);break;case 5:uf(n);default:N0(a,n),n=Ut=im(n,ba),n=C0(a,n,ba)}t.memoizedProps=t.pendingProps,n===null?ac(t):Ut=n}function Rr(t,n,a,o){fa=Ls=null,uf(n),gr=null,_o=0;var u=n.return;try{if(Ey(t,u,n,a,Ft)){mn=1,Wl(t,Mi(a,t.current)),Ut=null;return}}catch(d){if(u!==null)throw Ut=u,d;mn=1,Wl(t,Mi(a,t.current)),Ut=null;return}n.flags&32768?(Bt||o===1?t=!0:Mr||(Ft&536870912)!==0?t=!1:(ts=t=!0,(o===2||o===9||o===3||o===6)&&(o=hi.current,o!==null&&o.tag===13&&(o.flags|=16384))),rg(n,t)):ac(n)}function ac(t){var n=t;do{if((n.flags&32768)!==0){rg(n,ts);return}t=n.return;var a=Ry(n.alternate,n,ba);if(a!==null){Ut=a;return}if(n=n.sibling,n!==null){Ut=n;return}Ut=n=t}while(n!==null);mn===0&&(mn=5)}function rg(t,n){do{var a=Cy(t.alternate,t);if(a!==null){a.flags&=32767,Ut=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Ut=t;return}Ut=t=a}while(t!==null);mn=6,Ut=null}function og(t,n,a,o,u,d,b,F,J){t.cancelPendingCommit=null;do sc();while(Nn!==0);if((Xt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=Fu,Xe(t,a,d,b,F,J),t===on&&(Ut=on=null,Ft=0),Tr=n,as=t,Sa=a,Wf=d,Xf=u,K0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Hy(ie,function(){return dg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,u=D.p,D.p=2,b=Xt,Xt|=4;try{wy(t,n,a)}finally{Xt=b,D.p=u,O.T=o}}Nn=1,lg(),cg(),ug()}}function lg(){if(Nn===1){Nn=0;var t=as,n=Tr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var o=D.p;D.p=2;var u=Xt;Xt|=4;try{V0(n,t);var d=od,b=Yp(t.containerInfo),F=d.focusedElem,J=d.selectionRange;if(b!==F&&F&&F.ownerDocument&&qp(F.ownerDocument.documentElement,F)){if(J!==null&&Du(F)){var he=J.start,Ce=J.end;if(Ce===void 0&&(Ce=he),"selectionStart"in F)F.selectionStart=he,F.selectionEnd=Math.min(Ce,F.value.length);else{var Oe=F.ownerDocument||document,ve=Oe&&Oe.defaultView||window;if(ve.getSelection){var be=ve.getSelection(),st=F.textContent.length,mt=Math.min(J.start,st),an=J.end===void 0?mt:Math.min(J.end,st);!be.extend&&mt>an&&(b=an,an=mt,mt=b);var oe=Xp(F,mt),ae=Xp(F,an);if(oe&&ae&&(be.rangeCount!==1||be.anchorNode!==oe.node||be.anchorOffset!==oe.offset||be.focusNode!==ae.node||be.focusOffset!==ae.offset)){var de=Oe.createRange();de.setStart(oe.node,oe.offset),be.removeAllRanges(),mt>an?(be.addRange(de),be.extend(ae.node,ae.offset)):(de.setEnd(ae.node,ae.offset),be.addRange(de))}}}}for(Oe=[],be=F;be=be.parentNode;)be.nodeType===1&&Oe.push({element:be,left:be.scrollLeft,top:be.scrollTop});for(typeof F.focus=="function"&&F.focus(),F=0;F<Oe.length;F++){var Ne=Oe[F];Ne.element.scrollLeft=Ne.left,Ne.element.scrollTop=Ne.top}}xc=!!rd,od=rd=null}finally{Xt=u,D.p=o,O.T=a}}t.current=n,Nn=2}}function cg(){if(Nn===2){Nn=0;var t=as,n=Tr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var o=D.p;D.p=2;var u=Xt;Xt|=4;try{I0(t,n.alternate,n)}finally{Xt=u,D.p=o,O.T=a}}Nn=3}}function ug(){if(Nn===4||Nn===3){Nn=0,dt();var t=as,n=Tr,a=Sa,o=K0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Nn=5:(Nn=0,Tr=as=null,fg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(is=null),Yt(a),n=n.stateNode,Me&&typeof Me.onCommitFiberRoot=="function")try{Me.onCommitFiberRoot(Se,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=O.T,u=D.p,D.p=2,O.T=null;try{for(var d=t.onRecoverableError,b=0;b<o.length;b++){var F=o[b];d(F.value,{componentStack:F.stack})}}finally{O.T=n,D.p=u}}(Sa&3)!==0&&sc(),Ki(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===qf?Fo++:(Fo=0,qf=t):Fo=0,Io(0)}}function fg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,xo(n)))}function sc(){return lg(),cg(),ug(),dg()}function dg(){if(Nn!==5)return!1;var t=as,n=Wf;Wf=0;var a=Yt(Sa),o=O.T,u=D.p;try{D.p=32>a?32:a,O.T=null,a=Xf,Xf=null;var d=as,b=Sa;if(Nn=0,Tr=as=null,Sa=0,(Xt&6)!==0)throw Error(s(331));var F=Xt;if(Xt|=4,q0(d.current),j0(d,d.current,b,a),Xt=F,Io(0,!1),Me&&typeof Me.onPostCommitFiberRoot=="function")try{Me.onPostCommitFiberRoot(Se,d)}catch{}return!0}finally{D.p=u,O.T=o,fg(t,n)}}function hg(t,n,a){n=Mi(a,n),n=Tf(t.stateNode,n,2),t=Qa(t,n,2),t!==null&&(Le(t,2),Ki(t))}function $t(t,n,a){if(t.tag===3)hg(t,t,a);else for(;n!==null;){if(n.tag===3){hg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(is===null||!is.has(o))){t=Mi(a,t),a=p0(2),o=Qa(n,a,2),o!==null&&(m0(a,o,n,t),Le(o,2),Ki(o));break}}n=n.return}}function Kf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new Uy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Vf=!0,u.add(a),t=Iy.bind(null,t,n,a),n.then(t,t))}function Iy(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,on===t&&(Ft&a)===a&&(mn===4||mn===3&&(Ft&62914560)===Ft&&300>Te()-$l?(Xt&2)===0&&Ar(t,0):kf|=a,Er===Ft&&(Er=0)),Ki(t)}function pg(t,n){n===0&&(n=ge()),t=Ns(t,n),t!==null&&(Le(t,n),Ki(t))}function zy(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),pg(t,a)}function By(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),pg(t,a)}function Hy(t,n){return ee(t,n)}var rc=null,Cr=null,Qf=!1,oc=!1,Jf=!1,rs=0;function Ki(t){t!==Cr&&t.next===null&&(Cr===null?rc=Cr=t:Cr=Cr.next=t),oc=!0,Qf||(Qf=!0,Vy())}function Io(t,n){if(!Jf&&oc){Jf=!0;do for(var a=!1,o=rc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var b=o.suspendedLanes,F=o.pingedLanes;d=(1<<31-je(42|t)+1)-1,d&=u&~(b&~F),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,vg(o,d))}else d=Ft,d=le(o,o===on?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||we(o,d)||(a=!0,vg(o,d));o=o.next}while(a);Jf=!1}}function Gy(){mg()}function mg(){oc=Qf=!1;var t=0;rs!==0&&Jy()&&(t=rs);for(var n=Te(),a=null,o=rc;o!==null;){var u=o.next,d=gg(o,n);d===0?(o.next=null,a===null?rc=u:a.next=u,u===null&&(Cr=a)):(a=o,(t!==0||(d&3)!==0)&&(oc=!0)),o=u}Nn!==0&&Nn!==5||Io(t),rs!==0&&(rs=0)}function gg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var b=31-je(d),F=1<<b,J=u[b];J===-1?((F&a)===0||(F&o)!==0)&&(u[b]=Fe(F,n)):J<=n&&(t.expiredLanes|=F),d&=~F}if(n=on,a=Ft,a=le(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Jt===2||Jt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Et(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||we(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Et(o),Yt(a)){case 2:case 8:a=R;break;case 32:a=ie;break;case 268435456:a=Pe;break;default:a=ie}return o=xg.bind(null,t),a=ee(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Et(o),t.callbackPriority=2,t.callbackNode=null,2}function xg(t,n){if(Nn!==0&&Nn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(sc()&&t.callbackNode!==a)return null;var o=Ft;return o=le(t,t===on?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(J0(t,o,n),gg(t,Te()),t.callbackNode!=null&&t.callbackNode===a?xg.bind(null,t):null)}function vg(t,n){if(sc())return null;J0(t,n,!0)}function Vy(){eb(function(){(Xt&6)!==0?ee(z,Gy):mg()})}function $f(){if(rs===0){var t=hr;t===0&&(t=pt,pt<<=1,(pt&261888)===0&&(pt=256)),rs=t}return rs}function _g(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:As(""+t)}function yg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function ky(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=_g((u[Fn]||null).action),b=o.submitter;b&&(n=(n=b[Fn]||null)?_g(n.formAction):b.getAttribute("formAction"),n!==null&&(d=n,b=null));var F=new _l("action","action",null,o,u);t.push({event:F,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(rs!==0){var J=b?yg(u,b):new FormData(u);_f(a,{pending:!0,data:J,method:u.method,action:d},null,J)}}else typeof d=="function"&&(F.preventDefault(),J=b?yg(u,b):new FormData(u),_f(a,{pending:!0,data:J,method:u.method,action:d},d,J))},currentTarget:u}]})}}for(var ed=0;ed<Pu.length;ed++){var td=Pu[ed],jy=td.toLowerCase(),Wy=td[0].toUpperCase()+td.slice(1);zi(jy,"on"+Wy)}zi(Qp,"onAnimationEnd"),zi(Jp,"onAnimationIteration"),zi($p,"onAnimationStart"),zi("dblclick","onDoubleClick"),zi("focusin","onFocus"),zi("focusout","onBlur"),zi(oy,"onTransitionRun"),zi(ly,"onTransitionStart"),zi(cy,"onTransitionCancel"),zi(em,"onTransitionEnd"),xe("onMouseEnter",["mouseout","mouseover"]),xe("onMouseLeave",["mouseout","mouseover"]),xe("onPointerEnter",["pointerout","pointerover"]),xe("onPointerLeave",["pointerout","pointerover"]),se("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),se("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),se("onBeforeInput",["compositionend","keypress","textInput","paste"]),se("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),se("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),se("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zo));function bg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var b=o.length-1;0<=b;b--){var F=o[b],J=F.instance,he=F.currentTarget;if(F=F.listener,J!==d&&u.isPropagationStopped())break e;d=F,u.currentTarget=he;try{d(u)}catch(Ce){Sl(Ce)}u.currentTarget=null,d=J}else for(b=0;b<o.length;b++){if(F=o[b],J=F.instance,he=F.currentTarget,F=F.listener,J!==d&&u.isPropagationStopped())break e;d=F,u.currentTarget=he;try{d(u)}catch(Ce){Sl(Ce)}u.currentTarget=null,d=J}}}}function Lt(t,n){var a=n[za];a===void 0&&(a=n[za]=new Set);var o=t+"__bubble";a.has(o)||(Sg(n,t,2,!1),a.add(o))}function nd(t,n,a){var o=0;n&&(o|=4),Sg(a,t,o,n)}var lc="_reactListening"+Math.random().toString(36).slice(2);function id(t){if(!t[lc]){t[lc]=!0,ml.forEach(function(a){a!=="selectionchange"&&(Xy.has(a)||nd(a,!1,t),nd(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[lc]||(n[lc]=!0,nd("selectionchange",!1,n))}}function Sg(t,n,a,o){switch(Qg(n)){case 2:var u=yb;break;case 8:u=bb;break;default:u=vd}a=u.bind(null,n,a,t),u=void 0,!Su||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function ad(t,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var b=o.tag;if(b===3||b===4){var F=o.stateNode.containerInfo;if(F===u)break;if(b===4)for(b=o.return;b!==null;){var J=b.tag;if((J===3||J===4)&&b.stateNode.containerInfo===u)return;b=b.return}for(;F!==null;){if(b=Ha(F),b===null)return;if(J=b.tag,J===5||J===6||J===26||J===27){o=d=b;continue e}F=F.parentNode}}o=o.return}Rp(function(){var he=d,Ce=yu(a),Oe=[];e:{var ve=tm.get(t);if(ve!==void 0){var be=_l,st=t;switch(t){case"keypress":if(xl(a)===0)break e;case"keydown":case"keyup":be=B_;break;case"focusin":st="focus",be=Au;break;case"focusout":st="blur",be=Au;break;case"beforeblur":case"afterblur":be=Au;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":be=Np;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":be=R_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":be=V_;break;case Qp:case Jp:case $p:be=N_;break;case em:be=j_;break;case"scroll":case"scrollend":be=T_;break;case"wheel":be=X_;break;case"copy":case"cut":case"paste":be=U_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":be=Up;break;case"toggle":case"beforetoggle":be=Y_}var mt=(n&4)!==0,an=!mt&&(t==="scroll"||t==="scrollend"),oe=mt?ve!==null?ve+"Capture":null:ve;mt=[];for(var ae=he,de;ae!==null;){var Ne=ae;if(de=Ne.stateNode,Ne=Ne.tag,Ne!==5&&Ne!==26&&Ne!==27||de===null||oe===null||(Ne=so(ae,oe),Ne!=null&&mt.push(Bo(ae,Ne,de))),an)break;ae=ae.return}0<mt.length&&(ve=new be(ve,st,null,a,Ce),Oe.push({event:ve,listeners:mt}))}}if((n&7)===0){e:{if(ve=t==="mouseover"||t==="pointerover",be=t==="mouseout"||t==="pointerout",ve&&a!==_u&&(st=a.relatedTarget||a.fromElement)&&(Ha(st)||st[ra]))break e;if((be||ve)&&(ve=Ce.window===Ce?Ce:(ve=Ce.ownerDocument)?ve.defaultView||ve.parentWindow:window,be?(st=a.relatedTarget||a.toElement,be=he,st=st?Ha(st):null,st!==null&&(an=c(st),mt=st.tag,st!==an||mt!==5&&mt!==27&&mt!==6)&&(st=null)):(be=null,st=he),be!==st)){if(mt=Np,Ne="onMouseLeave",oe="onMouseEnter",ae="mouse",(t==="pointerout"||t==="pointerover")&&(mt=Up,Ne="onPointerLeave",oe="onPointerEnter",ae="pointer"),an=be==null?ve:Ts(be),de=st==null?ve:Ts(st),ve=new mt(Ne,ae+"leave",be,a,Ce),ve.target=an,ve.relatedTarget=de,Ne=null,Ha(Ce)===he&&(mt=new mt(oe,ae+"enter",st,a,Ce),mt.target=de,mt.relatedTarget=an,Ne=mt),an=Ne,be&&st)t:{for(mt=qy,oe=be,ae=st,de=0,Ne=oe;Ne;Ne=mt(Ne))de++;Ne=0;for(var ft=ae;ft;ft=mt(ft))Ne++;for(;0<de-Ne;)oe=mt(oe),de--;for(;0<Ne-de;)ae=mt(ae),Ne--;for(;de--;){if(oe===ae||ae!==null&&oe===ae.alternate){mt=oe;break t}oe=mt(oe),ae=mt(ae)}mt=null}else mt=null;be!==null&&Mg(Oe,ve,be,mt,!1),st!==null&&an!==null&&Mg(Oe,an,st,mt,!0)}}e:{if(ve=he?Ts(he):window,be=ve.nodeName&&ve.nodeName.toLowerCase(),be==="select"||be==="input"&&ve.type==="file")var kt=Hp;else if(zp(ve))if(Gp)kt=ay;else{kt=ny;var lt=ty}else be=ve.nodeName,!be||be.toLowerCase()!=="input"||ve.type!=="checkbox"&&ve.type!=="radio"?he&&qt(he.elementType)&&(kt=Hp):kt=iy;if(kt&&(kt=kt(t,he))){Bp(Oe,kt,a,Ce);break e}lt&&lt(t,ve,he),t==="focusout"&&he&&ve.type==="number"&&he.memoizedProps.value!=null&&Dt(ve,"number",ve.value)}switch(lt=he?Ts(he):window,t){case"focusin":(zp(lt)||lt.contentEditable==="true")&&(sr=lt,Uu=he,po=null);break;case"focusout":po=Uu=sr=null;break;case"mousedown":Lu=!0;break;case"contextmenu":case"mouseup":case"dragend":Lu=!1,Zp(Oe,a,Ce);break;case"selectionchange":if(ry)break;case"keydown":case"keyup":Zp(Oe,a,Ce)}var Tt;if(Cu)e:{switch(t){case"compositionstart":var It="onCompositionStart";break e;case"compositionend":It="onCompositionEnd";break e;case"compositionupdate":It="onCompositionUpdate";break e}It=void 0}else ar?Fp(t,a)&&(It="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(It="onCompositionStart");It&&(Lp&&a.locale!=="ko"&&(ar||It!=="onCompositionStart"?It==="onCompositionEnd"&&ar&&(Tt=Cp()):(ja=Ce,Mu="value"in ja?ja.value:ja.textContent,ar=!0)),lt=cc(he,It),0<lt.length&&(It=new Dp(It,t,null,a,Ce),Oe.push({event:It,listeners:lt}),Tt?It.data=Tt:(Tt=Ip(a),Tt!==null&&(It.data=Tt)))),(Tt=K_?Q_(t,a):J_(t,a))&&(It=cc(he,"onBeforeInput"),0<It.length&&(lt=new Dp("onBeforeInput","beforeinput",null,a,Ce),Oe.push({event:lt,listeners:It}),lt.data=Tt)),ky(Oe,t,he,a,Ce)}bg(Oe,n)})}function Bo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function cc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=so(t,a),u!=null&&o.unshift(Bo(t,u,d)),u=so(t,n),u!=null&&o.push(Bo(t,u,d))),t.tag===3)return o;t=t.return}return[]}function qy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Mg(t,n,a,o,u){for(var d=n._reactName,b=[];a!==null&&a!==o;){var F=a,J=F.alternate,he=F.stateNode;if(F=F.tag,J!==null&&J===o)break;F!==5&&F!==26&&F!==27||he===null||(J=he,u?(he=so(a,d),he!=null&&b.unshift(Bo(a,he,J))):u||(he=so(a,d),he!=null&&b.push(Bo(a,he,J)))),a=a.return}b.length!==0&&t.push({event:n,listeners:b})}var Yy=/\r\n?/g,Zy=/\u0000|\uFFFD/g;function Eg(t){return(typeof t=="string"?t:""+t).replace(Yy,`
`).replace(Zy,"")}function Tg(t,n){return n=Eg(n),Eg(t)===n}function nn(t,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ui(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ui(t,""+o);break;case"className":at(t,"class",o);break;case"tabIndex":at(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":at(t,a,o);break;case"style":Ii(t,o,d);break;case"data":if(n!=="object"){at(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=As(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&nn(t,n,"name",u.name,u,null),nn(t,n,"formEncType",u.formEncType,u,null),nn(t,n,"formMethod",u.formMethod,u,null),nn(t,n,"formTarget",u.formTarget,u,null)):(nn(t,n,"encType",u.encType,u,null),nn(t,n,"method",u.method,u,null),nn(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=As(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=oa);break;case"onScroll":o!=null&&Lt("scroll",t);break;case"onScrollEnd":o!=null&&Lt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=As(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":Lt("beforetoggle",t),Lt("toggle",t),Ke(t,"popover",o);break;case"xlinkActuate":it(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":it(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":it(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":it(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":it(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":it(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":it(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":it(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":it(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ke(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Xi.get(a)||a,Ke(t,a,o))}}function sd(t,n,a,o,u,d){switch(a){case"style":Ii(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?ui(t,o):(typeof o=="number"||typeof o=="bigint")&&ui(t,""+o);break;case"onScroll":o!=null&&Lt("scroll",t);break;case"onScrollEnd":o!=null&&Lt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=oa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!P.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=t[Fn]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Ke(t,a,o)}}}function Hn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Lt("error",t),Lt("load",t);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var b=a[d];if(b!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:nn(t,n,d,b,a,null)}}u&&nn(t,n,"srcSet",a.srcSet,a,null),o&&nn(t,n,"src",a.src,a,null);return;case"input":Lt("invalid",t);var F=d=b=u=null,J=null,he=null;for(o in a)if(a.hasOwnProperty(o)){var Ce=a[o];if(Ce!=null)switch(o){case"name":u=Ce;break;case"type":b=Ce;break;case"checked":J=Ce;break;case"defaultChecked":he=Ce;break;case"value":d=Ce;break;case"defaultValue":F=Ce;break;case"children":case"dangerouslySetInnerHTML":if(Ce!=null)throw Error(s(137,n));break;default:nn(t,n,o,Ce,a,null)}}kn(t,d,F,J,he,b,u,!1);return;case"select":Lt("invalid",t),o=b=d=null;for(u in a)if(a.hasOwnProperty(u)&&(F=a[u],F!=null))switch(u){case"value":d=F;break;case"defaultValue":b=F;break;case"multiple":o=F;default:nn(t,n,u,F,a,null)}n=d,a=b,t.multiple=!!o,n!=null?wn(t,!!o,n,!1):a!=null&&wn(t,!!o,a,!0);return;case"textarea":Lt("invalid",t),d=u=o=null;for(b in a)if(a.hasOwnProperty(b)&&(F=a[b],F!=null))switch(b){case"value":o=F;break;case"defaultValue":u=F;break;case"children":d=F;break;case"dangerouslySetInnerHTML":if(F!=null)throw Error(s(91));break;default:nn(t,n,b,F,a,null)}Fi(t,o,u,d);return;case"option":for(J in a)if(a.hasOwnProperty(J)&&(o=a[J],o!=null))switch(J){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:nn(t,n,J,o,a,null)}return;case"dialog":Lt("beforetoggle",t),Lt("toggle",t),Lt("cancel",t),Lt("close",t);break;case"iframe":case"object":Lt("load",t);break;case"video":case"audio":for(o=0;o<zo.length;o++)Lt(zo[o],t);break;case"image":Lt("error",t),Lt("load",t);break;case"details":Lt("toggle",t);break;case"embed":case"source":case"link":Lt("error",t),Lt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(he in a)if(a.hasOwnProperty(he)&&(o=a[he],o!=null))switch(he){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:nn(t,n,he,o,a,null)}return;default:if(qt(n)){for(Ce in a)a.hasOwnProperty(Ce)&&(o=a[Ce],o!==void 0&&sd(t,n,Ce,o,a,void 0));return}}for(F in a)a.hasOwnProperty(F)&&(o=a[F],o!=null&&nn(t,n,F,o,a,null))}function Ky(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,b=null,F=null,J=null,he=null,Ce=null;for(be in a){var Oe=a[be];if(a.hasOwnProperty(be)&&Oe!=null)switch(be){case"checked":break;case"value":break;case"defaultValue":J=Oe;default:o.hasOwnProperty(be)||nn(t,n,be,null,o,Oe)}}for(var ve in o){var be=o[ve];if(Oe=a[ve],o.hasOwnProperty(ve)&&(be!=null||Oe!=null))switch(ve){case"type":d=be;break;case"name":u=be;break;case"checked":he=be;break;case"defaultChecked":Ce=be;break;case"value":b=be;break;case"defaultValue":F=be;break;case"children":case"dangerouslySetInnerHTML":if(be!=null)throw Error(s(137,n));break;default:be!==Oe&&nn(t,n,ve,be,o,Oe)}}tt(t,b,F,J,he,Ce,d,u);return;case"select":be=b=F=ve=null;for(d in a)if(J=a[d],a.hasOwnProperty(d)&&J!=null)switch(d){case"value":break;case"multiple":be=J;default:o.hasOwnProperty(d)||nn(t,n,d,null,o,J)}for(u in o)if(d=o[u],J=a[u],o.hasOwnProperty(u)&&(d!=null||J!=null))switch(u){case"value":ve=d;break;case"defaultValue":F=d;break;case"multiple":b=d;default:d!==J&&nn(t,n,u,d,o,J)}n=F,a=b,o=be,ve!=null?wn(t,!!a,ve,!1):!!o!=!!a&&(n!=null?wn(t,!!a,n,!0):wn(t,!!a,a?[]:"",!1));return;case"textarea":be=ve=null;for(F in a)if(u=a[F],a.hasOwnProperty(F)&&u!=null&&!o.hasOwnProperty(F))switch(F){case"value":break;case"children":break;default:nn(t,n,F,null,o,u)}for(b in o)if(u=o[b],d=a[b],o.hasOwnProperty(b)&&(u!=null||d!=null))switch(b){case"value":ve=u;break;case"defaultValue":be=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&nn(t,n,b,u,o,d)}ci(t,ve,be);return;case"option":for(var st in a)if(ve=a[st],a.hasOwnProperty(st)&&ve!=null&&!o.hasOwnProperty(st))switch(st){case"selected":t.selected=!1;break;default:nn(t,n,st,null,o,ve)}for(J in o)if(ve=o[J],be=a[J],o.hasOwnProperty(J)&&ve!==be&&(ve!=null||be!=null))switch(J){case"selected":t.selected=ve&&typeof ve!="function"&&typeof ve!="symbol";break;default:nn(t,n,J,ve,o,be)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var mt in a)ve=a[mt],a.hasOwnProperty(mt)&&ve!=null&&!o.hasOwnProperty(mt)&&nn(t,n,mt,null,o,ve);for(he in o)if(ve=o[he],be=a[he],o.hasOwnProperty(he)&&ve!==be&&(ve!=null||be!=null))switch(he){case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(s(137,n));break;default:nn(t,n,he,ve,o,be)}return;default:if(qt(n)){for(var an in a)ve=a[an],a.hasOwnProperty(an)&&ve!==void 0&&!o.hasOwnProperty(an)&&sd(t,n,an,void 0,o,ve);for(Ce in o)ve=o[Ce],be=a[Ce],!o.hasOwnProperty(Ce)||ve===be||ve===void 0&&be===void 0||sd(t,n,Ce,ve,o,be);return}}for(var oe in a)ve=a[oe],a.hasOwnProperty(oe)&&ve!=null&&!o.hasOwnProperty(oe)&&nn(t,n,oe,null,o,ve);for(Oe in o)ve=o[Oe],be=a[Oe],!o.hasOwnProperty(Oe)||ve===be||ve==null&&be==null||nn(t,n,Oe,ve,o,be)}function Ag(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Qy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,b=u.initiatorType,F=u.duration;if(d&&F&&Ag(b)){for(b=0,F=u.responseEnd,o+=1;o<a.length;o++){var J=a[o],he=J.startTime;if(he>F)break;var Ce=J.transferSize,Oe=J.initiatorType;Ce&&Ag(Oe)&&(J=J.responseEnd,b+=Ce*(J<F?1:(F-he)/(J-he)))}if(--o,n+=8*(d+b)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var rd=null,od=null;function uc(t){return t.nodeType===9?t:t.ownerDocument}function Rg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Cg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function ld(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var cd=null;function Jy(){var t=window.event;return t&&t.type==="popstate"?t===cd?!1:(cd=t,!0):(cd=null,!1)}var wg=typeof setTimeout=="function"?setTimeout:void 0,$y=typeof clearTimeout=="function"?clearTimeout:void 0,Ng=typeof Promise=="function"?Promise:void 0,eb=typeof queueMicrotask=="function"?queueMicrotask:typeof Ng<"u"?function(t){return Ng.resolve(null).then(t).catch(tb)}:wg;function tb(t){setTimeout(function(){throw t})}function os(t){return t==="head"}function Dg(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),Ur(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Ho(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Ho(a);for(var d=a.firstChild;d;){var b=d.nextSibling,F=d.nodeName;d[Ba]||F==="SCRIPT"||F==="STYLE"||F==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=b}}else a==="body"&&Ho(t.ownerDocument.body);a=u}while(a);Ur(n)}function Ug(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function ud(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ud(a),ao(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function nb(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ba])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Ci(t.nextSibling),t===null)break}return null}function ib(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ci(t.nextSibling),t===null))return null;return t}function Lg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ci(t.nextSibling),t===null))return null;return t}function fd(t){return t.data==="$?"||t.data==="$~"}function dd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function ab(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Ci(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var hd=null;function Og(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ci(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Pg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Fg(t,n,a){switch(n=uc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Ho(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ao(t)}var wi=new Map,Ig=new Set;function fc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ma=D.d;D.d={f:sb,r:rb,D:ob,C:lb,L:cb,m:ub,X:db,S:fb,M:hb};function sb(){var t=Ma.f(),n=nc();return t||n}function rb(t){var n=Ga(t);n!==null&&n.tag===5&&n.type==="form"?e0(n):Ma.r(t)}var wr=typeof document>"u"?null:document;function zg(t,n,a){var o=wr;if(o&&typeof n=="string"&&n){var u=Kt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Ig.has(u)||(Ig.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Hn(n,"link",t),bn(n),o.head.appendChild(n)))}}function ob(t){Ma.D(t),zg("dns-prefetch",t,null)}function lb(t,n){Ma.C(t,n),zg("preconnect",t,n)}function cb(t,n,a){Ma.L(t,n,a);var o=wr;if(o&&t&&n){var u='link[rel="preload"][as="'+Kt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Kt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Kt(a.imageSizes)+'"]')):u+='[href="'+Kt(t)+'"]';var d=u;switch(n){case"style":d=Nr(t);break;case"script":d=Dr(t)}wi.has(d)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),wi.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Go(d))||n==="script"&&o.querySelector(Vo(d))||(n=o.createElement("link"),Hn(n,"link",t),bn(n),o.head.appendChild(n)))}}function ub(t,n){Ma.m(t,n);var a=wr;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Kt(o)+'"][href="'+Kt(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Dr(t)}if(!wi.has(d)&&(t=_({rel:"modulepreload",href:t},n),wi.set(d,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Vo(d)))return}o=a.createElement("link"),Hn(o,"link",t),bn(o),a.head.appendChild(o)}}}function fb(t,n,a){Ma.S(t,n,a);var o=wr;if(o&&t){var u=Va(o).hoistableStyles,d=Nr(t);n=n||"default";var b=u.get(d);if(!b){var F={loading:0,preload:null};if(b=o.querySelector(Go(d)))F.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=wi.get(d))&&pd(t,a);var J=b=o.createElement("link");bn(J),Hn(J,"link",t),J._p=new Promise(function(he,Ce){J.onload=he,J.onerror=Ce}),J.addEventListener("load",function(){F.loading|=1}),J.addEventListener("error",function(){F.loading|=2}),F.loading|=4,dc(b,n,o)}b={type:"stylesheet",instance:b,count:1,state:F},u.set(d,b)}}}function db(t,n){Ma.X(t,n);var a=wr;if(a&&t){var o=Va(a).hoistableScripts,u=Dr(t),d=o.get(u);d||(d=a.querySelector(Vo(u)),d||(t=_({src:t,async:!0},n),(n=wi.get(u))&&md(t,n),d=a.createElement("script"),bn(d),Hn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function hb(t,n){Ma.M(t,n);var a=wr;if(a&&t){var o=Va(a).hoistableScripts,u=Dr(t),d=o.get(u);d||(d=a.querySelector(Vo(u)),d||(t=_({src:t,async:!0,type:"module"},n),(n=wi.get(u))&&md(t,n),d=a.createElement("script"),bn(d),Hn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Bg(t,n,a,o){var u=(u=q.current)?fc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Nr(a.href),a=Va(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Nr(a.href);var d=Va(u).hoistableStyles,b=d.get(t);if(b||(u=u.ownerDocument||u,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,b),(d=u.querySelector(Go(t)))&&!d._p&&(b.instance=d,b.state.loading=5),wi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},wi.set(t,a),d||pb(u,t,a,b.state))),n&&o===null)throw Error(s(528,""));return b}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Dr(a),a=Va(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Nr(t){return'href="'+Kt(t)+'"'}function Go(t){return'link[rel="stylesheet"]['+t+"]"}function Hg(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function pb(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Hn(n,"link",a),bn(n),t.head.appendChild(n))}function Dr(t){return'[src="'+Kt(t)+'"]'}function Vo(t){return"script[async]"+t}function Gg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Kt(a.href)+'"]');if(o)return n.instance=o,bn(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),bn(o),Hn(o,"style",u),dc(o,a.precedence,t),n.instance=o;case"stylesheet":u=Nr(a.href);var d=t.querySelector(Go(u));if(d)return n.state.loading|=4,n.instance=d,bn(d),d;o=Hg(a),(u=wi.get(u))&&pd(o,u),d=(t.ownerDocument||t).createElement("link"),bn(d);var b=d;return b._p=new Promise(function(F,J){b.onload=F,b.onerror=J}),Hn(d,"link",o),n.state.loading|=4,dc(d,a.precedence,t),n.instance=d;case"script":return d=Dr(a.src),(u=t.querySelector(Vo(d)))?(n.instance=u,bn(u),u):(o=a,(u=wi.get(d))&&(o=_({},a),md(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),bn(u),Hn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,dc(o,a.precedence,t));return n.instance}function dc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,b=0;b<o.length;b++){var F=o[b];if(F.dataset.precedence===n)d=F;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function pd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function md(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var hc=null;function Vg(t,n,a){if(hc===null){var o=new Map,u=hc=new Map;u.set(a,o)}else u=hc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[Ba]||d[gn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var b=d.getAttribute(n)||"";b=t+b;var F=o.get(b);F?F.push(d):o.set(b,[d])}}return o}function kg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function mb(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function jg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function gb(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Nr(o.href),d=n.querySelector(Go(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=pc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=d,bn(d);return}d=n.ownerDocument||n,o=Hg(o),(u=wi.get(u))&&pd(o,u),d=d.createElement("link"),bn(d);var b=d;b._p=new Promise(function(F,J){b.onload=F,b.onerror=J}),Hn(d,"link",o),a.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=pc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var gd=0;function xb(t,n){return t.stylesheets&&t.count===0&&gc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&gc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&gd===0&&(gd=62500*Qy());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&gc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>gd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function pc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)gc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var mc=null;function gc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,mc=new Map,n.forEach(vb,t),mc=null,pc.call(t))}function vb(t,n){if(!(n.state.loading&4)){var a=mc.get(t);if(a)var o=a.get(null);else{a=new Map,mc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var b=u[d];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(a.set(b.dataset.precedence,b),o=b)}o&&a.set(null,o)}u=n.instance,b=u.getAttribute("data-precedence"),d=a.get(b)||o,d===o&&a.set(null,u),a.set(b,u),this.count++,o=pc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var ko={$$typeof:G,Provider:null,Consumer:null,_currentValue:w,_currentValue2:w,_threadCount:0};function _b(t,n,a,o,u,d,b,F,J){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ie(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ie(0),this.hiddenUpdates=Ie(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=J,this.incompleteTransitions=new Map}function Wg(t,n,a,o,u,d,b,F,J,he,Ce,Oe){return t=new _b(t,n,a,b,J,he,Ce,Oe,F),n=1,d===!0&&(n|=24),d=di(3,null,null,n),t.current=d,d.stateNode=t,n=Yu(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Ju(d),t}function Xg(t){return t?(t=lr,t):lr}function qg(t,n,a,o,u,d){u=Xg(u),o.context===null?o.context=u:o.pendingContext=u,o=Ka(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Qa(t,o,n),a!==null&&(si(a,t,n),bo(a,t,n))}function Yg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function xd(t,n){Yg(t,n),(t=t.alternate)&&Yg(t,n)}function Zg(t){if(t.tag===13||t.tag===31){var n=Ns(t,67108864);n!==null&&si(n,t,67108864),xd(t,67108864)}}function Kg(t){if(t.tag===13||t.tag===31){var n=xi();n=Cn(n);var a=Ns(t,n);a!==null&&si(a,t,n),xd(t,n)}}var xc=!0;function yb(t,n,a,o){var u=O.T;O.T=null;var d=D.p;try{D.p=2,vd(t,n,a,o)}finally{D.p=d,O.T=u}}function bb(t,n,a,o){var u=O.T;O.T=null;var d=D.p;try{D.p=8,vd(t,n,a,o)}finally{D.p=d,O.T=u}}function vd(t,n,a,o){if(xc){var u=_d(o);if(u===null)ad(t,n,o,vc,a),Jg(t,o);else if(Mb(u,t,n,a,o))o.stopPropagation();else if(Jg(t,o),n&4&&-1<Sb.indexOf(t)){for(;u!==null;){var d=Ga(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var b=ze(d.pendingLanes);if(b!==0){var F=d;for(F.pendingLanes|=2,F.entangledLanes|=2;b;){var J=1<<31-je(b);F.entanglements[1]|=J,b&=~J}Ki(d),(Xt&6)===0&&(ec=Te()+500,Io(0))}}break;case 31:case 13:F=Ns(d,2),F!==null&&si(F,d,2),nc(),xd(d,2)}if(d=_d(o),d===null&&ad(t,n,o,vc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else ad(t,n,o,null,a)}}function _d(t){return t=yu(t),yd(t)}var vc=null;function yd(t){if(vc=null,t=Ha(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return vc=t,null}function Qg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Nt()){case z:return 2;case R:return 8;case ie:case Re:return 32;case Pe:return 268435456;default:return 32}default:return 32}}var bd=!1,ls=null,cs=null,us=null,jo=new Map,Wo=new Map,fs=[],Sb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Jg(t,n){switch(t){case"focusin":case"focusout":ls=null;break;case"dragenter":case"dragleave":cs=null;break;case"mouseover":case"mouseout":us=null;break;case"pointerover":case"pointerout":jo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wo.delete(n.pointerId)}}function Xo(t,n,a,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=Ga(n),n!==null&&Zg(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function Mb(t,n,a,o,u){switch(n){case"focusin":return ls=Xo(ls,t,n,a,o,u),!0;case"dragenter":return cs=Xo(cs,t,n,a,o,u),!0;case"mouseover":return us=Xo(us,t,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return jo.set(d,Xo(jo.get(d)||null,t,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Wo.set(d,Xo(Wo.get(d)||null,t,n,a,o,u)),!0}return!1}function $g(t){var n=Ha(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,Ia(t.priority,function(){Kg(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,Ia(t.priority,function(){Kg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _c(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=_d(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);_u=o,a.target.dispatchEvent(o),_u=null}else return n=Ga(a),n!==null&&Zg(n),t.blockedOn=a,!1;n.shift()}return!0}function ex(t,n,a){_c(t)&&a.delete(n)}function Eb(){bd=!1,ls!==null&&_c(ls)&&(ls=null),cs!==null&&_c(cs)&&(cs=null),us!==null&&_c(us)&&(us=null),jo.forEach(ex),Wo.forEach(ex)}function yc(t,n){t.blockedOn===n&&(t.blockedOn=null,bd||(bd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Eb)))}var bc=null;function tx(t){bc!==t&&(bc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){bc===t&&(bc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(yd(o||a)===null)continue;break}var d=Ga(a);d!==null&&(t.splice(n,3),n-=3,_f(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Ur(t){function n(J){return yc(J,t)}ls!==null&&yc(ls,t),cs!==null&&yc(cs,t),us!==null&&yc(us,t),jo.forEach(n),Wo.forEach(n);for(var a=0;a<fs.length;a++){var o=fs[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<fs.length&&(a=fs[0],a.blockedOn===null);)$g(a),a.blockedOn===null&&fs.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],b=u[Fn]||null;if(typeof d=="function")b||tx(a);else if(b){var F=null;if(d&&d.hasAttribute("formAction")){if(u=d,b=d[Fn]||null)F=b.formAction;else if(yd(u)!==null)continue}else F=b.action;typeof F=="function"?a[o+1]=F:(a.splice(o,3),o-=3),tx(a)}}}function nx(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(b){return u=b})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Sd(t){this._internalRoot=t}Sc.prototype.render=Sd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=xi();qg(a,o,t,n,null,null)},Sc.prototype.unmount=Sd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;qg(t.current,2,null,t,null,null),nc(),n[ra]=null}};function Sc(t){this._internalRoot=t}Sc.prototype.unstable_scheduleHydration=function(t){if(t){var n=yn();t={blockedOn:null,target:t,priority:n};for(var a=0;a<fs.length&&n!==0&&n<fs[a].priority;a++);fs.splice(a,0,t),a===0&&$g(t)}};var ix=e.version;if(ix!=="19.2.7")throw Error(s(527,ix,"19.2.7"));D.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=h(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var Tb={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mc.isDisabled&&Mc.supportsFiber)try{Se=Mc.inject(Tb),Me=Mc}catch{}}return Yo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=u0,d=f0,b=d0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError)),n=Wg(t,1,!1,null,null,a,o,null,u,d,b,nx),t[ra]=n.current,id(t),new Sd(n)},Yo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",d=u0,b=f0,F=d0,J=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(b=a.onCaughtError),a.onRecoverableError!==void 0&&(F=a.onRecoverableError),a.formState!==void 0&&(J=a.formState)),n=Wg(t,1,!0,n,a??null,o,u,J,d,b,F,nx),n.context=Xg(null),a=n.current,o=xi(),o=Cn(o),u=Ka(o),u.callback=null,Qa(a,u,o),a=o,n.current.lanes=a,Le(n,a),Ki(n),t[ra]=n.current,id(t),new Sc(n)},Yo.version="19.2.7",Yo}var hx;function Fb(){if(hx)return Td.exports;hx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Td.exports=Pb(),Td.exports}var Ib=Fb();/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Zs(r,e){let i=r.trim();if(!i)return 0;const s=Object.entries(e).sort((l,c)=>c[0].length-l[0].length);for(const[l,c]of s){const f=new RegExp(`\\b${l}\\b`,"g");i=i.replace(f,c.toString())}i=i.replace(/\bPI\b/gi,Math.PI.toString()),i=i.replace(/\bE\b/gi,Math.E.toString());try{return zb(i)}catch(l){return console.error(`Failed to parse expression: "${r}" (substituted: "${i}")`,l),0}}function zb(r){const e=r.replace(/\s+/g,"");let i=0;function s(){let f=l();for(;i<e.length;){const p=e[i];if(p==="+"||p==="-"){i++;const m=l();p==="+"?f+=m:f-=m}else break}return f}function l(){let f=c();for(;i<e.length;){const p=e[i];if(p==="*"||p==="/"){i++;const m=c();if(p==="*")f*=m;else{if(m===0)throw new Error("Division by zero");f/=m}}else break}return f}function c(){if(i>=e.length)return 0;if(e[i]==="("){i++;const h=s();return e[i]===")"&&i++,h}let f=1;e[i]==="-"?(f=-1,i++):e[i]==="+"&&i++;let p=i;for(;i<e.length&&(e[i]>="0"&&e[i]<="9"||e[i]===".");)i++;if(p===i)return 0;const m=e.substring(p,i);return parseFloat(m)*f}return s()}let px="",wd=null;function Av(r,e,i,s=25e4){const l=Math.max(0,Math.min(i,25)),c=`${r}_${JSON.stringify(e)}_${l}_${s}`;if(wd&&c===px)return wd;let f=r,p=!1;const m={};for(const g of e)g.inputSymbol&&(m[g.inputSymbol]=g.successor);for(let g=0;g<l;g++){let _=0;for(let x=0;x<f.length;x++){const M=f[x],E=m[M];_+=E!==void 0?E.length:1}if(_>s){const x=[];let M=0;for(let E=0;E<f.length;E++){const U=f[E],S=m[U];if(S!==void 0?(x.push(S),M+=S.length):(x.push(U),M+=1),M>=s){p=!0;break}}f=x.join("").substring(0,s),p=!0;break}else{const x=[];for(let M=0;M<f.length;M++){const E=f[M],U=m[E];U!==void 0?x.push(U):x.push(E)}f=x.join("")}}const h={expandedString:f,isCapped:p,totalLength:f.length};return px=c,wd=h,h}function Bb(r,e){if(!r)return;const i=r.trim();if(!i)return;if(i.startsWith("#"))return i;let s=i;const l=i.match(/^(?:rgba?|rgb)?\s*\((.*)\)\s*$/i);if(l)s=l[1];else if(i.includes(","))s=i;else return;const c=s.split(",");if(c.length>=3){const f=Math.max(0,Math.min(255,Math.round(Zs(c[0],e)))),p=Math.max(0,Math.min(255,Math.round(Zs(c[1],e)))),m=Math.max(0,Math.min(255,Math.round(Zs(c[2],e))));let h=1;return c.length>=4&&(h=Math.max(0,Math.min(1,Zs(c[3],e)))),`rgba(${f}, ${p}, ${m}, ${h})`}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */var Ee=(r=>(r.FORWARD="FORWARD",r.FORWARD_NO_PEN="FORWARD_NO_PEN",r.TURN_LEFT="TURN_LEFT",r.TURN_RIGHT="TURN_RIGHT",r.PUSH_STATE="PUSH_STATE",r.POP_STATE="POP_STATE",r.PITCH_UP="PITCH_UP",r.PITCH_DOWN="PITCH_DOWN",r.ROLL_LEFT="ROLL_LEFT",r.ROLL_RIGHT="ROLL_RIGHT",r.YAW_LEFT="YAW_LEFT",r.YAW_RIGHT="YAW_RIGHT",r.TURN_ROUND="TURN_ROUND",r.NONE="NONE",r))(Ee||{});/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ap="184",Zr={ROTATE:0,DOLLY:1,PAN:2},Yr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Hb=0,mx=1,Gb=2,Kc=1,Vb=2,al=3,Ss=0,li=1,wa=2,Ua=0,Kr=1,gx=2,xx=3,vx=4,kb=5,qs=100,jb=101,Wb=102,Xb=103,qb=104,Yb=200,Zb=201,Kb=202,Qb=203,dh=204,hh=205,Jb=206,$b=207,eS=208,tS=209,nS=210,iS=211,aS=212,sS=213,rS=214,ph=0,mh=1,gh=2,Jr=3,xh=4,vh=5,_h=6,yh=7,Rv=0,oS=1,lS=2,na=0,Cv=1,wv=2,Nv=3,Dv=4,Uv=5,Lv=6,Ov=7,Pv=300,Js=301,$r=302,Nd=303,Dd=304,hu=306,bh=1e3,Da=1001,Sh=1002,Gn=1003,cS=1004,Ec=1005,Zn=1006,Ud=1007,Ks=1008,Li=1009,Fv=1010,Iv=1011,rl=1012,sp=1013,aa=1014,ea=1015,Oa=1016,rp=1017,op=1018,ol=1020,zv=35902,Bv=35899,Hv=1021,Gv=1022,Wi=1023,Pa=1026,Qs=1027,Vv=1028,lp=1029,$s=1030,cp=1031,up=1033,Qc=33776,Jc=33777,$c=33778,eu=33779,Mh=35840,Eh=35841,Th=35842,Ah=35843,Rh=36196,Ch=37492,wh=37496,Nh=37488,Dh=37489,au=37490,Uh=37491,Lh=37808,Oh=37809,Ph=37810,Fh=37811,Ih=37812,zh=37813,Bh=37814,Hh=37815,Gh=37816,Vh=37817,kh=37818,jh=37819,Wh=37820,Xh=37821,qh=36492,Yh=36494,Zh=36495,Kh=36283,Qh=36284,su=36285,Jh=36286,uS=3200,_x=0,fS=1,ys="",Di="srgb",ru="srgb-linear",ou="linear",en="srgb",Lr=7680,yx=519,dS=512,hS=513,pS=514,fp=515,mS=516,gS=517,dp=518,xS=519,bx=35044,Sx="300 es",ta=2e3,lu=2001;function vS(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function cu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function _S(){const r=cu("canvas");return r.style.display="block",r}const Mx={};function Ex(...r){const e="THREE."+r.shift();console.log(e,...r)}function kv(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function gt(...r){r=kv(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...r)}}function Gt(...r){r=kv(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...r)}}function $h(...r){const e=r.join(" ");e in Mx||(Mx[e]=!0,gt(...r))}function yS(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const bS={[ph]:mh,[gh]:_h,[xh]:yh,[Jr]:vh,[mh]:ph,[_h]:gh,[yh]:xh,[vh]:Jr};class Es{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tu=Math.PI/180,ep=180/Math.PI;function cl(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Wn[r&255]+Wn[r>>8&255]+Wn[r>>16&255]+Wn[r>>24&255]+"-"+Wn[e&255]+Wn[e>>8&255]+"-"+Wn[e>>16&15|64]+Wn[e>>24&255]+"-"+Wn[i&63|128]+Wn[i>>8&255]+"-"+Wn[i>>16&255]+Wn[i>>24&255]+Wn[s&255]+Wn[s>>8&255]+Wn[s>>16&255]+Wn[s>>24&255]).toLowerCase()}function Ot(r,e,i){return Math.max(e,Math.min(i,r))}function SS(r,e){return(r%e+e)%e}function Ld(r,e,i){return(1-i)*r+i*e}function Zo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ri(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const MS={DEG2RAD:tu},bp=class bp{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ot(this.x,e.x,i.x),this.y=Ot(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ot(this.x,e,i),this.y=Ot(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ot(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ot(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*s-f*l+e.x,this.y=c*l+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};bp.prototype.isVector2=!0;let Ct=bp;class Ms{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,f,p){let m=s[l+0],h=s[l+1],g=s[l+2],_=s[l+3],x=c[f+0],M=c[f+1],E=c[f+2],U=c[f+3];if(_!==U||m!==x||h!==M||g!==E){let S=m*x+h*M+g*E+_*U;S<0&&(x=-x,M=-M,E=-E,U=-U,S=-S);let y=1-p;if(S<.9995){const I=Math.acos(S),G=Math.sin(I);y=Math.sin(y*I)/G,p=Math.sin(p*I)/G,m=m*y+x*p,h=h*y+M*p,g=g*y+E*p,_=_*y+U*p}else{m=m*y+x*p,h=h*y+M*p,g=g*y+E*p,_=_*y+U*p;const I=1/Math.sqrt(m*m+h*h+g*g+_*_);m*=I,h*=I,g*=I,_*=I}}e[i]=m,e[i+1]=h,e[i+2]=g,e[i+3]=_}static multiplyQuaternionsFlat(e,i,s,l,c,f){const p=s[l],m=s[l+1],h=s[l+2],g=s[l+3],_=c[f],x=c[f+1],M=c[f+2],E=c[f+3];return e[i]=p*E+g*_+m*M-h*x,e[i+1]=m*E+g*x+h*_-p*M,e[i+2]=h*E+g*M+p*x-m*_,e[i+3]=g*E-p*_-m*x-h*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,f=e._order,p=Math.cos,m=Math.sin,h=p(s/2),g=p(l/2),_=p(c/2),x=m(s/2),M=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=x*g*_+h*M*E,this._y=h*M*_-x*g*E,this._z=h*g*E+x*M*_,this._w=h*g*_-x*M*E;break;case"YXZ":this._x=x*g*_+h*M*E,this._y=h*M*_-x*g*E,this._z=h*g*E-x*M*_,this._w=h*g*_+x*M*E;break;case"ZXY":this._x=x*g*_-h*M*E,this._y=h*M*_+x*g*E,this._z=h*g*E+x*M*_,this._w=h*g*_-x*M*E;break;case"ZYX":this._x=x*g*_-h*M*E,this._y=h*M*_+x*g*E,this._z=h*g*E-x*M*_,this._w=h*g*_+x*M*E;break;case"YZX":this._x=x*g*_+h*M*E,this._y=h*M*_+x*g*E,this._z=h*g*E-x*M*_,this._w=h*g*_-x*M*E;break;case"XZY":this._x=x*g*_-h*M*E,this._y=h*M*_-x*g*E,this._z=h*g*E+x*M*_,this._w=h*g*_+x*M*E;break;default:gt("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],f=i[1],p=i[5],m=i[9],h=i[2],g=i[6],_=i[10],x=s+p+_;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-m)*M,this._y=(c-h)*M,this._z=(f-l)*M}else if(s>p&&s>_){const M=2*Math.sqrt(1+s-p-_);this._w=(g-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+h)/M}else if(p>_){const M=2*Math.sqrt(1+p-s-_);this._w=(c-h)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+_-s-p);this._w=(f-l)/M,this._x=(c+h)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ot(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,f=e._w,p=i._x,m=i._y,h=i._z,g=i._w;return this._x=s*g+f*p+l*h-c*m,this._y=l*g+f*m+c*p-s*h,this._z=c*g+f*h+s*m-l*p,this._w=f*g-s*p-l*m-c*h,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,f=e._w,p=this.dot(e);p<0&&(s=-s,l=-l,c=-c,f=-f,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),g=Math.sin(h);m=Math.sin(m*h)/g,i=Math.sin(i*h)/g,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Sp=class Sp{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Tx.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Tx.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,f=e.y,p=e.z,m=e.w,h=2*(f*l-p*s),g=2*(p*i-c*l),_=2*(c*s-f*i);return this.x=i+m*h+f*_-p*g,this.y=s+m*g+p*h-c*_,this.z=l+m*_+c*g-f*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ot(this.x,e.x,i.x),this.y=Ot(this.y,e.y,i.y),this.z=Ot(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ot(this.x,e,i),this.y=Ot(this.y,e,i),this.z=Ot(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ot(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,f=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*f-s*m,this.z=s*p-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Od.copy(this).projectOnVector(e),this.sub(Od)}reflect(e){return this.sub(Od.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ot(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Sp.prototype.isVector3=!0;let ce=Sp;const Od=new ce,Tx=new Ms,Mp=class Mp{constructor(e,i,s,l,c,f,p,m,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,p,m,h)}set(e,i,s,l,c,f,p,m,h){const g=this.elements;return g[0]=e,g[1]=l,g[2]=p,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=f,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],p=s[3],m=s[6],h=s[1],g=s[4],_=s[7],x=s[2],M=s[5],E=s[8],U=l[0],S=l[3],y=l[6],I=l[1],G=l[4],B=l[7],Z=l[2],H=l[5],k=l[8];return c[0]=f*U+p*I+m*Z,c[3]=f*S+p*G+m*H,c[6]=f*y+p*B+m*k,c[1]=h*U+g*I+_*Z,c[4]=h*S+g*G+_*H,c[7]=h*y+g*B+_*k,c[2]=x*U+M*I+E*Z,c[5]=x*S+M*G+E*H,c[8]=x*y+M*B+E*k,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],g=e[8];return i*f*g-i*p*h-s*c*g+s*p*m+l*c*h-l*f*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],g=e[8],_=g*f-p*h,x=p*m-g*c,M=h*c-f*m,E=i*_+s*x+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const U=1/E;return e[0]=_*U,e[1]=(l*h-g*s)*U,e[2]=(p*s-l*f)*U,e[3]=x*U,e[4]=(g*i-l*m)*U,e[5]=(l*c-p*i)*U,e[6]=M*U,e[7]=(s*m-h*i)*U,e[8]=(f*i-s*c)*U,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,f,p){const m=Math.cos(c),h=Math.sin(c);return this.set(s*m,s*h,-s*(m*f+h*p)+f+e,-l*h,l*m,-l*(-h*f+m*p)+p+i,0,0,1),this}scale(e,i){return this.premultiply(Pd.makeScale(e,i)),this}rotate(e){return this.premultiply(Pd.makeRotation(-e)),this}translate(e,i){return this.premultiply(Pd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Mp.prototype.isMatrix3=!0;let _t=Mp;const Pd=new _t,Ax=new _t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rx=new _t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ES(){const r={enabled:!0,workingColorSpace:ru,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===en&&(l.r=La(l.r),l.g=La(l.g),l.b=La(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===en&&(l.r=Qr(l.r),l.g=Qr(l.g),l.b=Qr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ys?ou:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return $h("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return $h("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[ru]:{primaries:e,whitePoint:s,transfer:ou,toXYZ:Ax,fromXYZ:Rx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Di},outputColorSpaceConfig:{drawingBufferColorSpace:Di}},[Di]:{primaries:e,whitePoint:s,transfer:en,toXYZ:Ax,fromXYZ:Rx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Di}}}),r}const Ht=ES();function La(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Qr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Or;class TS{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Or===void 0&&(Or=cu("canvas")),Or.width=e.width,Or.height=e.height;const l=Or.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Or}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=cu("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=La(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(La(i[s]/255)*255):i[s]=La(i[s]);return{data:i,width:e.width,height:e.height}}else return gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let AS=0;class hp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:AS++}),this.uuid=cl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,p=l.length;f<p;f++)l[f].isDataTexture?c.push(Fd(l[f].image)):c.push(Fd(l[f]))}else c=Fd(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Fd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?TS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(gt("Texture: Unable to serialize Texture."),{})}let RS=0;const Id=new ce;class Jn extends Es{constructor(e=Jn.DEFAULT_IMAGE,i=Jn.DEFAULT_MAPPING,s=Da,l=Da,c=Zn,f=Ks,p=Wi,m=Li,h=Jn.DEFAULT_ANISOTROPY,g=ys){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:RS++}),this.uuid=cl(),this.name="",this.source=new hp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Id).x}get height(){return this.source.getSize(Id).y}get depth(){return this.source.getSize(Id).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){gt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){gt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bh:e.x=e.x-Math.floor(e.x);break;case Da:e.x=e.x<0?0:1;break;case Sh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bh:e.y=e.y-Math.floor(e.y);break;case Da:e.y=e.y<0?0:1;break;case Sh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jn.DEFAULT_IMAGE=null;Jn.DEFAULT_MAPPING=Pv;Jn.DEFAULT_ANISOTROPY=1;const Ep=class Ep{constructor(e=0,i=0,s=0,l=1){this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,h=m[0],g=m[4],_=m[8],x=m[1],M=m[5],E=m[9],U=m[2],S=m[6],y=m[10];if(Math.abs(g-x)<.01&&Math.abs(_-U)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+U)<.1&&Math.abs(E+S)<.1&&Math.abs(h+M+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const G=(h+1)/2,B=(M+1)/2,Z=(y+1)/2,H=(g+x)/4,k=(_+U)/4,N=(E+S)/4;return G>B&&G>Z?G<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(G),l=H/s,c=k/s):B>Z?B<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(B),s=H/l,c=N/l):Z<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(Z),s=k/c,l=N/c),this.set(s,l,c,i),this}let I=Math.sqrt((S-E)*(S-E)+(_-U)*(_-U)+(x-g)*(x-g));return Math.abs(I)<.001&&(I=1),this.x=(S-E)/I,this.y=(_-U)/I,this.z=(x-g)/I,this.w=Math.acos((h+M+y-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ot(this.x,e.x,i.x),this.y=Ot(this.y,e.y,i.y),this.z=Ot(this.z,e.z,i.z),this.w=Ot(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ot(this.x,e,i),this.y=Ot(this.y,e,i),this.z=Ot(this.z,e,i),this.w=Ot(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ot(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ep.prototype.isVector4=!0;let _n=Ep;class CS extends Es{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new _n(0,0,e,i),this.scissorTest=!1,this.viewport=new _n(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new Jn(l),f=s.count;for(let p=0;p<f;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:Zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new hp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ia extends CS{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class jv extends Jn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=Da,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class wS extends Jn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=Da,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const du=class du{constructor(e,i,s,l,c,f,p,m,h,g,_,x,M,E,U,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,p,m,h,g,_,x,M,E,U,S)}set(e,i,s,l,c,f,p,m,h,g,_,x,M,E,U,S){const y=this.elements;return y[0]=e,y[4]=i,y[8]=s,y[12]=l,y[1]=c,y[5]=f,y[9]=p,y[13]=m,y[2]=h,y[6]=g,y[10]=_,y[14]=x,y[3]=M,y[7]=E,y[11]=U,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new du().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Pr.setFromMatrixColumn(e,0).length(),c=1/Pr.setFromMatrixColumn(e,1).length(),f=1/Pr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,f=Math.cos(s),p=Math.sin(s),m=Math.cos(l),h=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const x=f*g,M=f*_,E=p*g,U=p*_;i[0]=m*g,i[4]=-m*_,i[8]=h,i[1]=M+E*h,i[5]=x-U*h,i[9]=-p*m,i[2]=U-x*h,i[6]=E+M*h,i[10]=f*m}else if(e.order==="YXZ"){const x=m*g,M=m*_,E=h*g,U=h*_;i[0]=x+U*p,i[4]=E*p-M,i[8]=f*h,i[1]=f*_,i[5]=f*g,i[9]=-p,i[2]=M*p-E,i[6]=U+x*p,i[10]=f*m}else if(e.order==="ZXY"){const x=m*g,M=m*_,E=h*g,U=h*_;i[0]=x-U*p,i[4]=-f*_,i[8]=E+M*p,i[1]=M+E*p,i[5]=f*g,i[9]=U-x*p,i[2]=-f*h,i[6]=p,i[10]=f*m}else if(e.order==="ZYX"){const x=f*g,M=f*_,E=p*g,U=p*_;i[0]=m*g,i[4]=E*h-M,i[8]=x*h+U,i[1]=m*_,i[5]=U*h+x,i[9]=M*h-E,i[2]=-h,i[6]=p*m,i[10]=f*m}else if(e.order==="YZX"){const x=f*m,M=f*h,E=p*m,U=p*h;i[0]=m*g,i[4]=U-x*_,i[8]=E*_+M,i[1]=_,i[5]=f*g,i[9]=-p*g,i[2]=-h*g,i[6]=M*_+E,i[10]=x-U*_}else if(e.order==="XZY"){const x=f*m,M=f*h,E=p*m,U=p*h;i[0]=m*g,i[4]=-_,i[8]=h*g,i[1]=x*_+U,i[5]=f*g,i[9]=M*_-E,i[2]=E*_-M,i[6]=p*g,i[10]=U*_+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(NS,e,DS)}lookAt(e,i,s){const l=this.elements;return vi.subVectors(e,i),vi.lengthSq()===0&&(vi.z=1),vi.normalize(),hs.crossVectors(s,vi),hs.lengthSq()===0&&(Math.abs(s.z)===1?vi.x+=1e-4:vi.z+=1e-4,vi.normalize(),hs.crossVectors(s,vi)),hs.normalize(),Tc.crossVectors(vi,hs),l[0]=hs.x,l[4]=Tc.x,l[8]=vi.x,l[1]=hs.y,l[5]=Tc.y,l[9]=vi.y,l[2]=hs.z,l[6]=Tc.z,l[10]=vi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],p=s[4],m=s[8],h=s[12],g=s[1],_=s[5],x=s[9],M=s[13],E=s[2],U=s[6],S=s[10],y=s[14],I=s[3],G=s[7],B=s[11],Z=s[15],H=l[0],k=l[4],N=l[8],V=l[12],j=l[1],W=l[5],$=l[9],fe=l[13],te=l[2],X=l[6],O=l[10],D=l[14],w=l[3],A=l[7],L=l[11],T=l[15];return c[0]=f*H+p*j+m*te+h*w,c[4]=f*k+p*W+m*X+h*A,c[8]=f*N+p*$+m*O+h*L,c[12]=f*V+p*fe+m*D+h*T,c[1]=g*H+_*j+x*te+M*w,c[5]=g*k+_*W+x*X+M*A,c[9]=g*N+_*$+x*O+M*L,c[13]=g*V+_*fe+x*D+M*T,c[2]=E*H+U*j+S*te+y*w,c[6]=E*k+U*W+S*X+y*A,c[10]=E*N+U*$+S*O+y*L,c[14]=E*V+U*fe+S*D+y*T,c[3]=I*H+G*j+B*te+Z*w,c[7]=I*k+G*W+B*X+Z*A,c[11]=I*N+G*$+B*O+Z*L,c[15]=I*V+G*fe+B*D+Z*T,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],f=e[1],p=e[5],m=e[9],h=e[13],g=e[2],_=e[6],x=e[10],M=e[14],E=e[3],U=e[7],S=e[11],y=e[15],I=m*M-h*x,G=p*M-h*_,B=p*x-m*_,Z=f*M-h*g,H=f*x-m*g,k=f*_-p*g;return i*(U*I-S*G+y*B)-s*(E*I-S*Z+y*H)+l*(E*G-U*Z+y*k)-c*(E*B-U*H+S*k)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],g=e[8],_=e[9],x=e[10],M=e[11],E=e[12],U=e[13],S=e[14],y=e[15],I=i*p-s*f,G=i*m-l*f,B=i*h-c*f,Z=s*m-l*p,H=s*h-c*p,k=l*h-c*m,N=g*U-_*E,V=g*S-x*E,j=g*y-M*E,W=_*S-x*U,$=_*y-M*U,fe=x*y-M*S,te=I*fe-G*$+B*W+Z*j-H*V+k*N;if(te===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/te;return e[0]=(p*fe-m*$+h*W)*X,e[1]=(l*$-s*fe-c*W)*X,e[2]=(U*k-S*H+y*Z)*X,e[3]=(x*H-_*k-M*Z)*X,e[4]=(m*j-f*fe-h*V)*X,e[5]=(i*fe-l*j+c*V)*X,e[6]=(S*B-E*k-y*G)*X,e[7]=(g*k-x*B+M*G)*X,e[8]=(f*$-p*j+h*N)*X,e[9]=(s*j-i*$-c*N)*X,e[10]=(E*H-U*B+y*I)*X,e[11]=(_*B-g*H-M*I)*X,e[12]=(p*V-f*W-m*N)*X,e[13]=(i*W-s*V+l*N)*X,e[14]=(U*G-E*Z-S*I)*X,e[15]=(g*Z-_*G+x*I)*X,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=e.x,p=e.y,m=e.z,h=c*f,g=c*p;return this.set(h*f+s,h*p-l*m,h*m+l*p,0,h*p+l*m,g*p+s,g*m-l*f,0,h*m-l*p,g*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,f){return this.set(1,s,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,f=i._y,p=i._z,m=i._w,h=c+c,g=f+f,_=p+p,x=c*h,M=c*g,E=c*_,U=f*g,S=f*_,y=p*_,I=m*h,G=m*g,B=m*_,Z=s.x,H=s.y,k=s.z;return l[0]=(1-(U+y))*Z,l[1]=(M+B)*Z,l[2]=(E-G)*Z,l[3]=0,l[4]=(M-B)*H,l[5]=(1-(x+y))*H,l[6]=(S+I)*H,l[7]=0,l[8]=(E+G)*k,l[9]=(S-I)*k,l[10]=(1-(x+U))*k,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let f=Pr.set(l[0],l[1],l[2]).length();const p=Pr.set(l[4],l[5],l[6]).length(),m=Pr.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Gi.copy(this);const h=1/f,g=1/p,_=1/m;return Gi.elements[0]*=h,Gi.elements[1]*=h,Gi.elements[2]*=h,Gi.elements[4]*=g,Gi.elements[5]*=g,Gi.elements[6]*=g,Gi.elements[8]*=_,Gi.elements[9]*=_,Gi.elements[10]*=_,i.setFromRotationMatrix(Gi),s.x=f,s.y=p,s.z=m,this}makePerspective(e,i,s,l,c,f,p=ta,m=!1){const h=this.elements,g=2*c/(i-e),_=2*c/(s-l),x=(i+e)/(i-e),M=(s+l)/(s-l);let E,U;if(m)E=c/(f-c),U=f*c/(f-c);else if(p===ta)E=-(f+c)/(f-c),U=-2*f*c/(f-c);else if(p===lu)E=-f/(f-c),U=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=g,h[4]=0,h[8]=x,h[12]=0,h[1]=0,h[5]=_,h[9]=M,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=U,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,s,l,c,f,p=ta,m=!1){const h=this.elements,g=2/(i-e),_=2/(s-l),x=-(i+e)/(i-e),M=-(s+l)/(s-l);let E,U;if(m)E=1/(f-c),U=f/(f-c);else if(p===ta)E=-2/(f-c),U=-(f+c)/(f-c);else if(p===lu)E=-1/(f-c),U=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=g,h[4]=0,h[8]=0,h[12]=x,h[1]=0,h[5]=_,h[9]=0,h[13]=M,h[2]=0,h[6]=0,h[10]=E,h[14]=U,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};du.prototype.isMatrix4=!0;let Rn=du;const Pr=new ce,Gi=new Rn,NS=new ce(0,0,0),DS=new ce(1,1,1),hs=new ce,Tc=new ce,vi=new ce,Cx=new Rn,wx=new Ms;class er{constructor(e=0,i=0,s=0,l=er.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],f=l[4],p=l[8],m=l[1],h=l[5],g=l[9],_=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Ot(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(p,M),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-f,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ot(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,h));break;case"YZX":this._z=Math.asin(Ot(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(p,M));break;case"XZY":this._z=Math.asin(-Ot(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-g,M),this._y=0);break;default:gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return Cx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cx,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return wx.setFromEuler(this),this.setFromQuaternion(wx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}er.DEFAULT_ORDER="XYZ";let Wv=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},US=0;const Nx=new ce,Fr=new Ms,Ea=new Rn,Ac=new ce,Ko=new ce,LS=new ce,OS=new Ms,Dx=new ce(1,0,0),Ux=new ce(0,1,0),Lx=new ce(0,0,1),Ox={type:"added"},PS={type:"removed"},Ir={type:"childadded",child:null},zd={type:"childremoved",child:null};class $n extends Es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:US++}),this.uuid=cl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$n.DEFAULT_UP.clone();const e=new ce,i=new er,s=new Ms,l=new ce(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Rn},normalMatrix:{value:new _t}}),this.matrix=new Rn,this.matrixWorld=new Rn,this.matrixAutoUpdate=$n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Fr.setFromAxisAngle(e,i),this.quaternion.multiply(Fr),this}rotateOnWorldAxis(e,i){return Fr.setFromAxisAngle(e,i),this.quaternion.premultiply(Fr),this}rotateX(e){return this.rotateOnAxis(Dx,e)}rotateY(e){return this.rotateOnAxis(Ux,e)}rotateZ(e){return this.rotateOnAxis(Lx,e)}translateOnAxis(e,i){return Nx.copy(e).applyQuaternion(this.quaternion),this.position.add(Nx.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Dx,e)}translateY(e){return this.translateOnAxis(Ux,e)}translateZ(e){return this.translateOnAxis(Lx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ea.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Ac.copy(e):Ac.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ea.lookAt(Ko,Ac,this.up):Ea.lookAt(Ac,Ko,this.up),this.quaternion.setFromRotationMatrix(Ea),l&&(Ea.extractRotation(l.matrixWorld),Fr.setFromRotationMatrix(Ea),this.quaternion.premultiply(Fr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Gt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ox),Ir.child=e,this.dispatchEvent(Ir),Ir.child=null):Gt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(PS),zd.child=e,this.dispatchEvent(zd),zd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ea.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ea.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ea),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ox),Ir.child=e,this.dispatchEvent(Ir),Ir.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,e,LS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,OS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,g=m.length;h<g;h++){const _=m[h];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=f(e.geometries),m=f(e.materials),h=f(e.textures),g=f(e.images),_=f(e.shapes),x=f(e.skeletons),M=f(e.animations),E=f(e.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),h.length>0&&(s.textures=h),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),x.length>0&&(s.skeletons=x),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(p){const m=[];for(const h in p){const g=p[h];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}$n.DEFAULT_UP=new ce(0,1,0);$n.DEFAULT_MATRIX_AUTO_UPDATE=!0;$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Rc extends $n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const FS={type:"move"};class Bd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ce,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ce),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ce,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ce,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,f=null;const p=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){f=!0;for(const U of e.hand.values()){const S=i.getJointPose(U,s),y=this._getHandJoint(h,U);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const g=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],x=g.position.distanceTo(_.position),M=.02,E=.005;h.inputState.pinching&&x>M+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&x<=M-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(FS)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Rc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const Xv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ps={h:0,s:0,l:0},Cc={h:0,s:0,l:0};function Hd(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class Pt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ht.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Ht.workingColorSpace){return this.r=e,this.g=i,this.b=s,Ht.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Ht.workingColorSpace){if(e=SS(e,1),i=Ot(i,0,1),s=Ot(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Hd(f,c,e+1/3),this.g=Hd(f,c,e),this.b=Hd(f,c,e-1/3)}return Ht.colorSpaceToWorking(this,l),this}setStyle(e,i=Di){function s(c){c!==void 0&&parseFloat(c)<1&&gt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],p=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:gt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);gt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Di){const s=Xv[e.toLowerCase()];return s!==void 0?this.setHex(s,i):gt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=La(e.r),this.g=La(e.g),this.b=La(e.b),this}copyLinearToSRGB(e){return this.r=Qr(e.r),this.g=Qr(e.g),this.b=Qr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Di){return Ht.workingToColorSpace(Xn.copy(this),e),Math.round(Ot(Xn.r*255,0,255))*65536+Math.round(Ot(Xn.g*255,0,255))*256+Math.round(Ot(Xn.b*255,0,255))}getHexString(e=Di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ht.workingColorSpace){Ht.workingToColorSpace(Xn.copy(this),i);const s=Xn.r,l=Xn.g,c=Xn.b,f=Math.max(s,l,c),p=Math.min(s,l,c);let m,h;const g=(p+f)/2;if(p===f)m=0,h=0;else{const _=f-p;switch(h=g<=.5?_/(f+p):_/(2-f-p),f){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return e.h=m,e.s=h,e.l=g,e}getRGB(e,i=Ht.workingColorSpace){return Ht.workingToColorSpace(Xn.copy(this),i),e.r=Xn.r,e.g=Xn.g,e.b=Xn.b,e}getStyle(e=Di){Ht.workingToColorSpace(Xn.copy(this),e);const i=Xn.r,s=Xn.g,l=Xn.b;return e!==Di?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(ps),this.setHSL(ps.h+e,ps.s+i,ps.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(ps),e.getHSL(Cc);const s=Ld(ps.h,Cc.h,i),l=Ld(ps.s,Cc.s,i),c=Ld(ps.l,Cc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xn=new Pt;Pt.NAMES=Xv;class IS extends $n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new er,this.environmentIntensity=1,this.environmentRotation=new er,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Vi=new ce,Ta=new ce,Gd=new ce,Aa=new ce,zr=new ce,Br=new ce,Px=new ce,Vd=new ce,kd=new ce,jd=new ce,Wd=new _n,Xd=new _n,qd=new _n;class ji{constructor(e=new ce,i=new ce,s=new ce){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Vi.subVectors(e,i),l.cross(Vi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Vi.subVectors(l,i),Ta.subVectors(s,i),Gd.subVectors(e,i);const f=Vi.dot(Vi),p=Vi.dot(Ta),m=Vi.dot(Gd),h=Ta.dot(Ta),g=Ta.dot(Gd),_=f*h-p*p;if(_===0)return c.set(0,0,0),null;const x=1/_,M=(h*m-p*g)*x,E=(f*g-p*m)*x;return c.set(1-M-E,E,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Aa)===null?!1:Aa.x>=0&&Aa.y>=0&&Aa.x+Aa.y<=1}static getInterpolation(e,i,s,l,c,f,p,m){return this.getBarycoord(e,i,s,l,Aa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Aa.x),m.addScaledVector(f,Aa.y),m.addScaledVector(p,Aa.z),m)}static getInterpolatedAttribute(e,i,s,l,c,f){return Wd.setScalar(0),Xd.setScalar(0),qd.setScalar(0),Wd.fromBufferAttribute(e,i),Xd.fromBufferAttribute(e,s),qd.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Wd,c.x),f.addScaledVector(Xd,c.y),f.addScaledVector(qd,c.z),f}static isFrontFacing(e,i,s,l){return Vi.subVectors(s,i),Ta.subVectors(e,i),Vi.cross(Ta).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vi.subVectors(this.c,this.b),Ta.subVectors(this.a,this.b),Vi.cross(Ta).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ji.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return ji.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return ji.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return ji.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ji.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let f,p;zr.subVectors(l,s),Br.subVectors(c,s),Vd.subVectors(e,s);const m=zr.dot(Vd),h=Br.dot(Vd);if(m<=0&&h<=0)return i.copy(s);kd.subVectors(e,l);const g=zr.dot(kd),_=Br.dot(kd);if(g>=0&&_<=g)return i.copy(l);const x=m*_-g*h;if(x<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(s).addScaledVector(zr,f);jd.subVectors(e,c);const M=zr.dot(jd),E=Br.dot(jd);if(E>=0&&M<=E)return i.copy(c);const U=M*h-m*E;if(U<=0&&h>=0&&E<=0)return p=h/(h-E),i.copy(s).addScaledVector(Br,p);const S=g*E-M*_;if(S<=0&&_-g>=0&&M-E>=0)return Px.subVectors(c,l),p=(_-g)/(_-g+(M-E)),i.copy(l).addScaledVector(Px,p);const y=1/(S+U+x);return f=U*y,p=x*y,i.copy(s).addScaledVector(zr,f).addScaledVector(Br,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ul{constructor(e=new ce(1/0,1/0,1/0),i=new ce(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(ki.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(ki.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=ki.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,p=c.count;f<p;f++)e.isMesh===!0?e.getVertexPosition(f,ki):ki.fromBufferAttribute(c,f),ki.applyMatrix4(e.matrixWorld),this.expandByPoint(ki);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),wc.copy(s.boundingBox)),wc.applyMatrix4(e.matrixWorld),this.union(wc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ki),ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qo),Nc.subVectors(this.max,Qo),Hr.subVectors(e.a,Qo),Gr.subVectors(e.b,Qo),Vr.subVectors(e.c,Qo),ms.subVectors(Gr,Hr),gs.subVectors(Vr,Gr),ks.subVectors(Hr,Vr);let i=[0,-ms.z,ms.y,0,-gs.z,gs.y,0,-ks.z,ks.y,ms.z,0,-ms.x,gs.z,0,-gs.x,ks.z,0,-ks.x,-ms.y,ms.x,0,-gs.y,gs.x,0,-ks.y,ks.x,0];return!Yd(i,Hr,Gr,Vr,Nc)||(i=[1,0,0,0,1,0,0,0,1],!Yd(i,Hr,Gr,Vr,Nc))?!1:(Dc.crossVectors(ms,gs),i=[Dc.x,Dc.y,Dc.z],Yd(i,Hr,Gr,Vr,Nc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ra[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ra[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ra[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ra[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ra[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ra[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ra[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ra[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ra),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ra=[new ce,new ce,new ce,new ce,new ce,new ce,new ce,new ce],ki=new ce,wc=new ul,Hr=new ce,Gr=new ce,Vr=new ce,ms=new ce,gs=new ce,ks=new ce,Qo=new ce,Nc=new ce,Dc=new ce,js=new ce;function Yd(r,e,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){js.fromArray(r,c);const p=l.x*Math.abs(js.x)+l.y*Math.abs(js.y)+l.z*Math.abs(js.z),m=e.dot(js),h=i.dot(js),g=s.dot(js);if(Math.max(-Math.max(m,h,g),Math.min(m,h,g))>p)return!1}return!0}const An=new ce,Uc=new Ct;let zS=0;class Oi extends Es{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zS++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=bx,this.updateRanges=[],this.gpuType=ea,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Uc.fromBufferAttribute(this,i),Uc.applyMatrix3(e),this.setXY(i,Uc.x,Uc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)An.fromBufferAttribute(this,i),An.applyMatrix3(e),this.setXYZ(i,An.x,An.y,An.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)An.fromBufferAttribute(this,i),An.applyMatrix4(e),this.setXYZ(i,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)An.fromBufferAttribute(this,i),An.applyNormalMatrix(e),this.setXYZ(i,An.x,An.y,An.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)An.fromBufferAttribute(this,i),An.transformDirection(e),this.setXYZ(i,An.x,An.y,An.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Zo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=ri(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Zo(i,this.array)),i}setX(e,i){return this.normalized&&(i=ri(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Zo(i,this.array)),i}setY(e,i){return this.normalized&&(i=ri(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Zo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=ri(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Zo(i,this.array)),i}setW(e,i){return this.normalized&&(i=ri(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=ri(i,this.array),s=ri(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=ri(i,this.array),s=ri(s,this.array),l=ri(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=ri(i,this.array),s=ri(s,this.array),l=ri(l,this.array),c=ri(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bx&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class qv extends Oi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class Yv extends Oi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class bi extends Oi{constructor(e,i,s){super(new Float32Array(e),i,s)}}const BS=new ul,Jo=new ce,Zd=new ce;class pu{constructor(e=new ce,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):BS.setFromPoints(e).getCenter(s);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jo.subVectors(e,this.center);const i=Jo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Jo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jo.copy(e.center).add(Zd)),this.expandByPoint(Jo.copy(e.center).sub(Zd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let HS=0;const Ni=new Rn,Kd=new $n,kr=new ce,_i=new ul,$o=new ul,Pn=new ce;class Pi extends Es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:HS++}),this.uuid=cl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vS(e)?Yv:qv)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new _t().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ni.makeRotationFromQuaternion(e),this.applyMatrix4(Ni),this}rotateX(e){return Ni.makeRotationX(e),this.applyMatrix4(Ni),this}rotateY(e){return Ni.makeRotationY(e),this.applyMatrix4(Ni),this}rotateZ(e){return Ni.makeRotationZ(e),this.applyMatrix4(Ni),this}translate(e,i,s){return Ni.makeTranslation(e,i,s),this.applyMatrix4(Ni),this}scale(e,i,s){return Ni.makeScale(e,i,s),this.applyMatrix4(Ni),this}lookAt(e){return Kd.lookAt(e),Kd.updateMatrix(),this.applyMatrix4(Kd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new bi(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ul);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ce(-1/0,-1/0,-1/0),new ce(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];_i.setFromBufferAttribute(c),this.morphTargetsRelative?(Pn.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(Pn),Pn.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(Pn)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pu);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ce,1/0);return}if(e){const s=this.boundingSphere.center;if(_i.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const p=i[c];$o.setFromBufferAttribute(p),this.morphTargetsRelative?(Pn.addVectors(_i.min,$o.min),_i.expandByPoint(Pn),Pn.addVectors(_i.max,$o.max),_i.expandByPoint(Pn)):(_i.expandByPoint($o.min),_i.expandByPoint($o.max))}_i.getCenter(s);let l=0;for(let c=0,f=e.count;c<f;c++)Pn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(Pn));if(i)for(let c=0,f=i.length;c<f;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,g=p.count;h<g;h++)Pn.fromBufferAttribute(p,h),m&&(kr.fromBufferAttribute(e,h),Pn.add(kr)),l=Math.max(l,s.distanceToSquared(Pn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oi(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),p=[],m=[];for(let N=0;N<s.count;N++)p[N]=new ce,m[N]=new ce;const h=new ce,g=new ce,_=new ce,x=new Ct,M=new Ct,E=new Ct,U=new ce,S=new ce;function y(N,V,j){h.fromBufferAttribute(s,N),g.fromBufferAttribute(s,V),_.fromBufferAttribute(s,j),x.fromBufferAttribute(c,N),M.fromBufferAttribute(c,V),E.fromBufferAttribute(c,j),g.sub(h),_.sub(h),M.sub(x),E.sub(x);const W=1/(M.x*E.y-E.x*M.y);isFinite(W)&&(U.copy(g).multiplyScalar(E.y).addScaledVector(_,-M.y).multiplyScalar(W),S.copy(_).multiplyScalar(M.x).addScaledVector(g,-E.x).multiplyScalar(W),p[N].add(U),p[V].add(U),p[j].add(U),m[N].add(S),m[V].add(S),m[j].add(S))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let N=0,V=I.length;N<V;++N){const j=I[N],W=j.start,$=j.count;for(let fe=W,te=W+$;fe<te;fe+=3)y(e.getX(fe+0),e.getX(fe+1),e.getX(fe+2))}const G=new ce,B=new ce,Z=new ce,H=new ce;function k(N){Z.fromBufferAttribute(l,N),H.copy(Z);const V=p[N];G.copy(V),G.sub(Z.multiplyScalar(Z.dot(V))).normalize(),B.crossVectors(H,V);const W=B.dot(m[N])<0?-1:1;f.setXYZW(N,G.x,G.y,G.z,W)}for(let N=0,V=I.length;N<V;++N){const j=I[N],W=j.start,$=j.count;for(let fe=W,te=W+$;fe<te;fe+=3)k(e.getX(fe+0)),k(e.getX(fe+1)),k(e.getX(fe+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Oi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,M=s.count;x<M;x++)s.setXYZ(x,0,0,0);const l=new ce,c=new ce,f=new ce,p=new ce,m=new ce,h=new ce,g=new ce,_=new ce;if(e)for(let x=0,M=e.count;x<M;x+=3){const E=e.getX(x+0),U=e.getX(x+1),S=e.getX(x+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,U),f.fromBufferAttribute(i,S),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),p.fromBufferAttribute(s,E),m.fromBufferAttribute(s,U),h.fromBufferAttribute(s,S),p.add(g),m.add(g),h.add(g),s.setXYZ(E,p.x,p.y,p.z),s.setXYZ(U,m.x,m.y,m.z),s.setXYZ(S,h.x,h.y,h.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Pn.fromBufferAttribute(e,i),Pn.normalize(),e.setXYZ(i,Pn.x,Pn.y,Pn.z)}toNonIndexed(){function e(p,m){const h=p.array,g=p.itemSize,_=p.normalized,x=new h.constructor(m.length*g);let M=0,E=0;for(let U=0,S=m.length;U<S;U++){p.isInterleavedBufferAttribute?M=m[U]*p.data.stride+p.offset:M=m[U]*g;for(let y=0;y<g;y++)x[E++]=h[M++]}return new Oi(x,g,_)}if(this.index===null)return gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Pi,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=e(m,s);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let g=0,_=h.length;g<_;g++){const x=h[g],M=e(x,s);m.push(M)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let p=0,m=f.length;p<m;p++){const h=f[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const h=s[m];e.data.attributes[m]=h.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],g=[];for(let _=0,x=h.length;_<x;_++){const M=h[_];g.push(M.toJSON(e.data))}g.length>0&&(l[m]=g,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const h in l){const g=l[h];this.setAttribute(h,g.clone(i))}const c=e.morphAttributes;for(const h in c){const g=[],_=c[h];for(let x=0,M=_.length;x<M;x++)g.push(_[x].clone(i));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let h=0,g=f.length;h<g;h++){const _=f[h];this.addGroup(_.start,_.count,_.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let GS=0;class fl extends Es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:GS++}),this.uuid=cl(),this.name="",this.type="Material",this.blending=Kr,this.side=Ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dh,this.blendDst=hh,this.blendEquation=qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=Jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lr,this.stencilZFail=Lr,this.stencilZPass=Lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){gt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){gt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Kr&&(s.blending=this.blending),this.side!==Ss&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==dh&&(s.blendSrc=this.blendSrc),this.blendDst!==hh&&(s.blendDst=this.blendDst),this.blendEquation!==qs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Jr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yx&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Lr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Lr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Lr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const p in c){const m=c[p];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ca=new ce,Qd=new ce,Lc=new ce,xs=new ce,Jd=new ce,Oc=new ce,$d=new ce;class pp{constructor(e=new ce,i=new ce(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ca)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ca.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ca.copy(this.origin).addScaledVector(this.direction,i),Ca.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Qd.copy(e).add(i).multiplyScalar(.5),Lc.copy(i).sub(e).normalize(),xs.copy(this.origin).sub(Qd);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Lc),p=xs.dot(this.direction),m=-xs.dot(Lc),h=xs.lengthSq(),g=Math.abs(1-f*f);let _,x,M,E;if(g>0)if(_=f*m-p,x=f*p-m,E=c*g,_>=0)if(x>=-E)if(x<=E){const U=1/g;_*=U,x*=U,M=_*(_+f*x+2*p)+x*(f*_+x+2*m)+h}else x=c,_=Math.max(0,-(f*x+p)),M=-_*_+x*(x+2*m)+h;else x=-c,_=Math.max(0,-(f*x+p)),M=-_*_+x*(x+2*m)+h;else x<=-E?(_=Math.max(0,-(-f*c+p)),x=_>0?-c:Math.min(Math.max(-c,-m),c),M=-_*_+x*(x+2*m)+h):x<=E?(_=0,x=Math.min(Math.max(-c,-m),c),M=x*(x+2*m)+h):(_=Math.max(0,-(f*c+p)),x=_>0?c:Math.min(Math.max(-c,-m),c),M=-_*_+x*(x+2*m)+h);else x=f>0?-c:c,_=Math.max(0,-(f*x+p)),M=-_*_+x*(x+2*m)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Qd).addScaledVector(Lc,x),M}intersectSphere(e,i){Ca.subVectors(e.center,this.origin);const s=Ca.dot(this.direction),l=Ca.dot(Ca)-s*s,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),p=s-f,m=s+f;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,f,p,m;const h=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return h>=0?(s=(e.min.x-x.x)*h,l=(e.max.x-x.x)*h):(s=(e.max.x-x.x)*h,l=(e.min.x-x.x)*h),g>=0?(c=(e.min.y-x.y)*g,f=(e.max.y-x.y)*g):(c=(e.max.y-x.y)*g,f=(e.min.y-x.y)*g),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),_>=0?(p=(e.min.z-x.z)*_,m=(e.max.z-x.z)*_):(p=(e.max.z-x.z)*_,m=(e.min.z-x.z)*_),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,Ca)!==null}intersectTriangle(e,i,s,l,c){Jd.subVectors(i,e),Oc.subVectors(s,e),$d.crossVectors(Jd,Oc);let f=this.direction.dot($d),p;if(f>0){if(l)return null;p=1}else if(f<0)p=-1,f=-f;else return null;xs.subVectors(this.origin,e);const m=p*this.direction.dot(Oc.crossVectors(xs,Oc));if(m<0)return null;const h=p*this.direction.dot(Jd.cross(xs));if(h<0||m+h>f)return null;const g=-p*xs.dot($d);return g<0?null:this.at(g/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zv extends fl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new er,this.combine=Rv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Fx=new Rn,Ws=new pp,Pc=new pu,Ix=new ce,Fc=new ce,Ic=new ce,zc=new ce,eh=new ce,Bc=new ce,zx=new ce,Hc=new ce;class Fa extends $n{constructor(e=new Pi,i=new Zv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){Bc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const g=p[m],_=c[m];g!==0&&(eh.fromBufferAttribute(_,e),f?Bc.addScaledVector(eh,g):Bc.addScaledVector(eh.sub(i),g))}i.add(Bc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Pc.copy(s.boundingSphere),Pc.applyMatrix4(c),Ws.copy(e.ray).recast(e.near),!(Pc.containsPoint(Ws.origin)===!1&&(Ws.intersectSphere(Pc,Ix)===null||Ws.origin.distanceToSquared(Ix)>(e.far-e.near)**2))&&(Fx.copy(c).invert(),Ws.copy(e.ray).applyMatrix4(Fx),!(s.boundingBox!==null&&Ws.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Ws)))}_computeIntersections(e,i,s){let l;const c=this.geometry,f=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,x=c.groups,M=c.drawRange;if(p!==null)if(Array.isArray(f))for(let E=0,U=x.length;E<U;E++){const S=x[E],y=f[S.materialIndex],I=Math.max(S.start,M.start),G=Math.min(p.count,Math.min(S.start+S.count,M.start+M.count));for(let B=I,Z=G;B<Z;B+=3){const H=p.getX(B),k=p.getX(B+1),N=p.getX(B+2);l=Gc(this,y,e,s,h,g,_,H,k,N),l&&(l.faceIndex=Math.floor(B/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),U=Math.min(p.count,M.start+M.count);for(let S=E,y=U;S<y;S+=3){const I=p.getX(S),G=p.getX(S+1),B=p.getX(S+2);l=Gc(this,f,e,s,h,g,_,I,G,B),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,U=x.length;E<U;E++){const S=x[E],y=f[S.materialIndex],I=Math.max(S.start,M.start),G=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let B=I,Z=G;B<Z;B+=3){const H=B,k=B+1,N=B+2;l=Gc(this,y,e,s,h,g,_,H,k,N),l&&(l.faceIndex=Math.floor(B/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),U=Math.min(m.count,M.start+M.count);for(let S=E,y=U;S<y;S+=3){const I=S,G=S+1,B=S+2;l=Gc(this,f,e,s,h,g,_,I,G,B),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function VS(r,e,i,s,l,c,f,p){let m;if(e.side===li?m=s.intersectTriangle(f,c,l,!0,p):m=s.intersectTriangle(l,c,f,e.side===Ss,p),m===null)return null;Hc.copy(p),Hc.applyMatrix4(r.matrixWorld);const h=i.ray.origin.distanceTo(Hc);return h<i.near||h>i.far?null:{distance:h,point:Hc.clone(),object:r}}function Gc(r,e,i,s,l,c,f,p,m,h){r.getVertexPosition(p,Fc),r.getVertexPosition(m,Ic),r.getVertexPosition(h,zc);const g=VS(r,e,i,s,Fc,Ic,zc,zx);if(g){const _=new ce;ji.getBarycoord(zx,Fc,Ic,zc,_),l&&(g.uv=ji.getInterpolatedAttribute(l,p,m,h,_,new Ct)),c&&(g.uv1=ji.getInterpolatedAttribute(c,p,m,h,_,new Ct)),f&&(g.normal=ji.getInterpolatedAttribute(f,p,m,h,_,new ce),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:p,b:m,c:h,normal:new ce,materialIndex:0};ji.getNormal(Fc,Ic,zc,x.normal),g.face=x,g.barycoord=_}return g}class kS extends Jn{constructor(e=null,i=1,s=1,l,c,f,p,m,h=Gn,g=Gn,_,x){super(null,f,p,m,h,g,l,c,_,x),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const th=new ce,jS=new ce,WS=new _t;class _s{constructor(e=new ce(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=th.subVectors(s,i).cross(jS.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const l=e.delta(th),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/c;return s===!0&&(f<0||f>1)?null:i.copy(e.start).addScaledVector(l,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||WS.getNormalMatrix(e),l=this.coplanarPoint(th).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xs=new pu,XS=new Ct(.5,.5),Vc=new ce;class Kv{constructor(e=new _s,i=new _s,s=new _s,l=new _s,c=new _s,f=new _s){this.planes=[e,i,s,l,c,f]}set(e,i,s,l,c,f){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(f),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=ta,s=!1){const l=this.planes,c=e.elements,f=c[0],p=c[1],m=c[2],h=c[3],g=c[4],_=c[5],x=c[6],M=c[7],E=c[8],U=c[9],S=c[10],y=c[11],I=c[12],G=c[13],B=c[14],Z=c[15];if(l[0].setComponents(h-f,M-g,y-E,Z-I).normalize(),l[1].setComponents(h+f,M+g,y+E,Z+I).normalize(),l[2].setComponents(h+p,M+_,y+U,Z+G).normalize(),l[3].setComponents(h-p,M-_,y-U,Z-G).normalize(),s)l[4].setComponents(m,x,S,B).normalize(),l[5].setComponents(h-m,M-x,y-S,Z-B).normalize();else if(l[4].setComponents(h-m,M-x,y-S,Z-B).normalize(),i===ta)l[5].setComponents(h+m,M+x,y+S,Z+B).normalize();else if(i===lu)l[5].setComponents(m,x,S,B).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Xs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xs)}intersectsSprite(e){Xs.center.set(0,0,0);const i=XS.distanceTo(e.center);return Xs.radius=.7071067811865476+i,Xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xs)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Vc.x=l.normal.x>0?e.max.x:e.min.x,Vc.y=l.normal.y>0?e.max.y:e.min.y,Vc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Vc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class mp extends fl{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const uu=new ce,fu=new ce,Bx=new Rn,el=new pp,kc=new pu,nh=new ce,Hx=new ce;class qS extends $n{constructor(e=new Pi,i=new mp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)uu.fromBufferAttribute(i,l-1),fu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=uu.distanceTo(fu);e.setAttribute("lineDistance",new bi(s,1))}else gt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),kc.copy(s.boundingSphere),kc.applyMatrix4(l),kc.radius+=c,e.ray.intersectsSphere(kc)===!1)return;Bx.copy(l).invert(),el.copy(e.ray).applyMatrix4(Bx);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=this.isLineSegments?2:1,g=s.index,x=s.attributes.position;if(g!==null){const M=Math.max(0,f.start),E=Math.min(g.count,f.start+f.count);for(let U=M,S=E-1;U<S;U+=h){const y=g.getX(U),I=g.getX(U+1),G=jc(this,e,el,m,y,I,U);G&&i.push(G)}if(this.isLineLoop){const U=g.getX(E-1),S=g.getX(M),y=jc(this,e,el,m,U,S,E-1);y&&i.push(y)}}else{const M=Math.max(0,f.start),E=Math.min(x.count,f.start+f.count);for(let U=M,S=E-1;U<S;U+=h){const y=jc(this,e,el,m,U,U+1,U);y&&i.push(y)}if(this.isLineLoop){const U=jc(this,e,el,m,E-1,M,E-1);U&&i.push(U)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function jc(r,e,i,s,l,c,f){const p=r.geometry.attributes.position;if(uu.fromBufferAttribute(p,l),fu.fromBufferAttribute(p,c),i.distanceSqToSegment(uu,fu,nh,Hx)>s)return;nh.applyMatrix4(r.matrixWorld);const h=e.ray.origin.distanceTo(nh);if(!(h<e.near||h>e.far))return{distance:h,point:Hx.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}const Gx=new ce,Vx=new ce;class Qv extends qS{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)Gx.fromBufferAttribute(i,l),Vx.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+Gx.distanceTo(Vx);e.setAttribute("lineDistance",new bi(s,1))}else gt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Jv extends Jn{constructor(e=[],i=Js,s,l,c,f,p,m,h,g){super(e,i,s,l,c,f,p,m,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class eo extends Jn{constructor(e,i,s=aa,l,c,f,p=Gn,m=Gn,h,g=Pa,_=1){if(g!==Pa&&g!==Qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:_};super(x,l,c,f,p,m,g,s,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class YS extends eo{constructor(e,i=aa,s=Js,l,c,f=Gn,p=Gn,m,h=Pa){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,i,s,l,c,f,p,m,h),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class $v extends Jn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class dl extends Pi{constructor(e=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const p=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],h=[],g=[],_=[];let x=0,M=0;E("z","y","x",-1,-1,s,i,e,f,c,0),E("z","y","x",1,-1,s,i,-e,f,c,1),E("x","z","y",1,1,e,s,i,l,f,2),E("x","z","y",1,-1,e,s,-i,l,f,3),E("x","y","z",1,-1,e,i,s,l,c,4),E("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new bi(h,3)),this.setAttribute("normal",new bi(g,3)),this.setAttribute("uv",new bi(_,2));function E(U,S,y,I,G,B,Z,H,k,N,V){const j=B/k,W=Z/N,$=B/2,fe=Z/2,te=H/2,X=k+1,O=N+1;let D=0,w=0;const A=new ce;for(let L=0;L<O;L++){const T=L*W-fe;for(let C=0;C<X;C++){const K=C*j-$;A[U]=K*I,A[S]=T*G,A[y]=te,h.push(A.x,A.y,A.z),A[U]=0,A[S]=0,A[y]=H>0?1:-1,g.push(A.x,A.y,A.z),_.push(C/k),_.push(1-L/N),D+=1}}for(let L=0;L<N;L++)for(let T=0;T<k;T++){const C=x+T+X*L,K=x+T+X*(L+1),Q=x+(T+1)+X*(L+1),Y=x+(T+1)+X*L;m.push(C,K,Y),m.push(K,Q,Y),w+=6}p.addGroup(M,w,V),M+=w,x+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class mu extends Pi{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,f=i/2,p=Math.floor(s),m=Math.floor(l),h=p+1,g=m+1,_=e/p,x=i/m,M=[],E=[],U=[],S=[];for(let y=0;y<g;y++){const I=y*x-f;for(let G=0;G<h;G++){const B=G*_-c;E.push(B,-I,0),U.push(0,0,1),S.push(G/p),S.push(1-y/m)}}for(let y=0;y<m;y++)for(let I=0;I<p;I++){const G=I+h*y,B=I+h*(y+1),Z=I+1+h*(y+1),H=I+1+h*y;M.push(G,B,H),M.push(B,Z,H)}this.setIndex(M),this.setAttribute("position",new bi(E,3)),this.setAttribute("normal",new bi(U,3)),this.setAttribute("uv",new bi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mu(e.width,e.height,e.widthSegments,e.heightSegments)}}function to(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];if(kx(l))l.isRenderTargetTexture?(gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone();else if(Array.isArray(l))if(kx(l[0])){const c=[];for(let f=0,p=l.length;f<p;f++)c[f]=l[f].clone();e[i][s]=c}else e[i][s]=l.slice();else e[i][s]=l}}return e}function Qn(r){const e={};for(let i=0;i<r.length;i++){const s=to(r[i]);for(const l in s)e[l]=s[l]}return e}function kx(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function ZS(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function e_(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ht.workingColorSpace}const KS={clone:to,merge:Qn};var QS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,JS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sa extends fl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=QS,this.fragmentShader=JS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=to(e.uniforms),this.uniformsGroups=ZS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class $S extends sa{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class e1 extends fl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class t1 extends fl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class n1 extends $n{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Wc=new ce,Xc=new Ms,Qi=new ce;class t_ extends $n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rn,this.projectionMatrix=new Rn,this.projectionMatrixInverse=new Rn,this.coordinateSystem=ta,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Wc,Xc,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wc,Xc,Qi.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(Wc,Xc,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wc,Xc,Qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const vs=new ce,jx=new Ct,Wx=new Ct;class Ui extends t_{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=ep*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ep*2*Math.atan(Math.tan(tu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){vs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vs.x,vs.y).multiplyScalar(-e/vs.z),vs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(vs.x,vs.y).multiplyScalar(-e/vs.z)}getViewSize(e,i){return this.getViewBounds(e,jx,Wx),i.subVectors(Wx,jx)}setViewOffset(e,i,s,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(tu*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,h=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/h,l*=f.width/m,s*=f.height/h}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class n_ extends t_{constructor(e=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,f=s+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,f=c+h*this.view.width,p-=g*this.view.offsetY,m=p-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class i1 extends n1{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const jr=-90,Wr=1;class a1 extends $n{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ui(jr,Wr,e,i);l.layers=this.layers,this.add(l);const c=new Ui(jr,Wr,e,i);c.layers=this.layers,this.add(c);const f=new Ui(jr,Wr,e,i);f.layers=this.layers,this.add(f);const p=new Ui(jr,Wr,e,i);p.layers=this.layers,this.add(p);const m=new Ui(jr,Wr,e,i);m.layers=this.layers,this.add(m);const h=new Ui(jr,Wr,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,p,m]=i;for(const h of i)this.remove(h);if(e===ta)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===lu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,p,m,h,g]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const U=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(s,2,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,3,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),s.texture.generateMipmaps=U,e.setRenderTarget(s,5,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,g),e.setRenderTarget(_,x,M),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class s1 extends Ui{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Xx{constructor(e=1,i=0,s=0){this.radius=e,this.phi=i,this.theta=s}set(e,i,s){return this.radius=e,this.phi=i,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ot(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,s){return this.radius=Math.sqrt(e*e+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(Ot(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Tp=class Tp{constructor(e,i,s,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=s,c[3]=l,this}};Tp.prototype.isMatrix2=!0;let qx=Tp;class r1 extends Qv{constructor(e=10,i=10,s=4473924,l=8947848){s=new Pt(s),l=new Pt(l);const c=i/2,f=e/i,p=e/2,m=[],h=[];for(let x=0,M=0,E=-p;x<=i;x++,E+=f){m.push(-p,0,E,p,0,E),m.push(E,0,-p,E,0,p);const U=x===c?s:l;U.toArray(h,M),M+=3,U.toArray(h,M),M+=3,U.toArray(h,M),M+=3,U.toArray(h,M),M+=3}const g=new Pi;g.setAttribute("position",new bi(m,3)),g.setAttribute("color",new bi(h,3));const _=new mp({vertexColors:!0,toneMapped:!1});super(g,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class o1 extends Es{constructor(e,i=null){super(),this.object=e,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){gt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Yx(r,e,i,s){const l=l1(s);switch(i){case Hv:return r*e;case Vv:return r*e/l.components*l.byteLength;case lp:return r*e/l.components*l.byteLength;case $s:return r*e*2/l.components*l.byteLength;case cp:return r*e*2/l.components*l.byteLength;case Gv:return r*e*3/l.components*l.byteLength;case Wi:return r*e*4/l.components*l.byteLength;case up:return r*e*4/l.components*l.byteLength;case Qc:case Jc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case $c:case eu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Eh:case Ah:return Math.max(r,16)*Math.max(e,8)/4;case Mh:case Th:return Math.max(r,8)*Math.max(e,8)/2;case Rh:case Ch:case Nh:case Dh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case wh:case au:case Uh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Lh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Oh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Ph:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Fh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Ih:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case zh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Hh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Gh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Vh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case kh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case jh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Wh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Xh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case qh:case Yh:case Zh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Kh:case Qh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case su:case Jh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function l1(r){switch(r){case Li:case Fv:return{byteLength:1,components:1};case rl:case Iv:case Oa:return{byteLength:2,components:1};case rp:case op:return{byteLength:2,components:4};case aa:case sp:case ea:return{byteLength:4,components:1};case zv:case Bv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ap}}));typeof window<"u"&&(window.__THREE__?gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ap);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function i_(){let r=null,e=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function c1(r){const e=new WeakMap;function i(p,m){const h=p.array,g=p.usage,_=h.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,h,g),p.onUploadCallback();let M;if(h instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)M=r.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=r.SHORT;else if(h instanceof Uint32Array)M=r.UNSIGNED_INT;else if(h instanceof Int32Array)M=r.INT;else if(h instanceof Int8Array)M=r.BYTE;else if(h instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:x,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:_}}function s(p,m,h){const g=m.array,_=m.updateRanges;if(r.bindBuffer(h,p),_.length===0)r.bufferSubData(h,0,g);else{_.sort((M,E)=>M.start-E.start);let x=0;for(let M=1;M<_.length;M++){const E=_[x],U=_[M];U.start<=E.start+E.count+1?E.count=Math.max(E.count,U.start+U.count-E.start):(++x,_[x]=U)}_.length=x+1;for(let M=0,E=_.length;M<E;M++){const U=_[M];r.bufferSubData(h,U.start*g.BYTES_PER_ELEMENT,g,U.start,U.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(r.deleteBuffer(m.buffer),e.delete(p))}function f(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const g=e.get(p);(!g||g.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=e.get(p);if(h===void 0)e.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:f}}var u1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,f1=`#ifdef USE_ALPHAHASH
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
#endif`,d1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,h1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,p1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,m1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,g1=`#ifdef USE_AOMAP
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
#endif`,x1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,v1=`#ifdef USE_BATCHING
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
#endif`,_1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,y1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,b1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,S1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,M1=`#ifdef USE_IRIDESCENCE
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
#endif`,E1=`#ifdef USE_BUMPMAP
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
#endif`,T1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,A1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,R1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,C1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,w1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,N1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,D1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,U1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,L1=`#define PI 3.141592653589793
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
} // validated`,O1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,P1=`vec3 transformedNormal = objectNormal;
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
#endif`,F1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,I1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,z1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,B1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,H1="gl_FragColor = linearToOutputTexel( gl_FragColor );",G1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,V1=`#ifdef USE_ENVMAP
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
#endif`,k1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,j1=`#ifdef USE_ENVMAP
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
#endif`,W1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,X1=`#ifdef USE_ENVMAP
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
#endif`,q1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Y1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Z1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,K1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Q1=`#ifdef USE_GRADIENTMAP
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
}`,J1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,nM=`#ifdef USE_ENVMAP
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
#endif`,iM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oM=`PhysicalMaterial material;
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
#endif`,lM=`uniform sampler2D dfgLUT;
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
}`,cM=`
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
#endif`,uM=`#if defined( RE_IndirectDiffuse )
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
#endif`,fM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dM=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,hM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_M=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yM=`#if defined( USE_POINTS_UV )
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
#endif`,bM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,SM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,MM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,EM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,TM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AM=`#ifdef USE_MORPHTARGETS
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
#endif`,RM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,NM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,LM=`#ifdef USE_NORMALMAP
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
#endif`,OM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,PM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,FM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,IM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,BM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,HM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,GM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,WM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,XM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,YM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ZM=`float getShadowMask() {
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
}`,KM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QM=`#ifdef USE_SKINNING
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
#endif`,JM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$M=`#ifdef USE_SKINNING
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
#endif`,eE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,aE=`#ifdef USE_TRANSMISSION
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
#endif`,sE=`#ifdef USE_TRANSMISSION
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
#endif`,rE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fE=`uniform sampler2D t2D;
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
}`,dE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gE=`#include <common>
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
}`,xE=`#if DEPTH_PACKING == 3200
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
}`,vE=`#define DISTANCE
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
}`,_E=`#define DISTANCE
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
}`,yE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SE=`uniform float scale;
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
}`,ME=`uniform vec3 diffuse;
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
}`,EE=`#include <common>
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
}`,TE=`uniform vec3 diffuse;
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
}`,AE=`#define LAMBERT
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
}`,RE=`#define LAMBERT
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
}`,CE=`#define MATCAP
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
}`,wE=`#define MATCAP
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
}`,NE=`#define NORMAL
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
}`,DE=`#define NORMAL
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
}`,UE=`#define PHONG
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
}`,LE=`#define PHONG
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
}`,OE=`#define STANDARD
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
}`,PE=`#define STANDARD
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
}`,FE=`#define TOON
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
}`,IE=`#define TOON
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
}`,zE=`uniform float size;
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
}`,BE=`uniform vec3 diffuse;
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
}`,HE=`#include <common>
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
}`,GE=`uniform vec3 color;
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
}`,VE=`uniform float rotation;
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
}`,kE=`uniform vec3 diffuse;
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
}`,At={alphahash_fragment:u1,alphahash_pars_fragment:f1,alphamap_fragment:d1,alphamap_pars_fragment:h1,alphatest_fragment:p1,alphatest_pars_fragment:m1,aomap_fragment:g1,aomap_pars_fragment:x1,batching_pars_vertex:v1,batching_vertex:_1,begin_vertex:y1,beginnormal_vertex:b1,bsdfs:S1,iridescence_fragment:M1,bumpmap_pars_fragment:E1,clipping_planes_fragment:T1,clipping_planes_pars_fragment:A1,clipping_planes_pars_vertex:R1,clipping_planes_vertex:C1,color_fragment:w1,color_pars_fragment:N1,color_pars_vertex:D1,color_vertex:U1,common:L1,cube_uv_reflection_fragment:O1,defaultnormal_vertex:P1,displacementmap_pars_vertex:F1,displacementmap_vertex:I1,emissivemap_fragment:z1,emissivemap_pars_fragment:B1,colorspace_fragment:H1,colorspace_pars_fragment:G1,envmap_fragment:V1,envmap_common_pars_fragment:k1,envmap_pars_fragment:j1,envmap_pars_vertex:W1,envmap_physical_pars_fragment:nM,envmap_vertex:X1,fog_vertex:q1,fog_pars_vertex:Y1,fog_fragment:Z1,fog_pars_fragment:K1,gradientmap_pars_fragment:Q1,lightmap_pars_fragment:J1,lights_lambert_fragment:$1,lights_lambert_pars_fragment:eM,lights_pars_begin:tM,lights_toon_fragment:iM,lights_toon_pars_fragment:aM,lights_phong_fragment:sM,lights_phong_pars_fragment:rM,lights_physical_fragment:oM,lights_physical_pars_fragment:lM,lights_fragment_begin:cM,lights_fragment_maps:uM,lights_fragment_end:fM,lightprobes_pars_fragment:dM,logdepthbuf_fragment:hM,logdepthbuf_pars_fragment:pM,logdepthbuf_pars_vertex:mM,logdepthbuf_vertex:gM,map_fragment:xM,map_pars_fragment:vM,map_particle_fragment:_M,map_particle_pars_fragment:yM,metalnessmap_fragment:bM,metalnessmap_pars_fragment:SM,morphinstance_vertex:MM,morphcolor_vertex:EM,morphnormal_vertex:TM,morphtarget_pars_vertex:AM,morphtarget_vertex:RM,normal_fragment_begin:CM,normal_fragment_maps:wM,normal_pars_fragment:NM,normal_pars_vertex:DM,normal_vertex:UM,normalmap_pars_fragment:LM,clearcoat_normal_fragment_begin:OM,clearcoat_normal_fragment_maps:PM,clearcoat_pars_fragment:FM,iridescence_pars_fragment:IM,opaque_fragment:zM,packing:BM,premultiplied_alpha_fragment:HM,project_vertex:GM,dithering_fragment:VM,dithering_pars_fragment:kM,roughnessmap_fragment:jM,roughnessmap_pars_fragment:WM,shadowmap_pars_fragment:XM,shadowmap_pars_vertex:qM,shadowmap_vertex:YM,shadowmask_pars_fragment:ZM,skinbase_vertex:KM,skinning_pars_vertex:QM,skinning_vertex:JM,skinnormal_vertex:$M,specularmap_fragment:eE,specularmap_pars_fragment:tE,tonemapping_fragment:nE,tonemapping_pars_fragment:iE,transmission_fragment:aE,transmission_pars_fragment:sE,uv_pars_fragment:rE,uv_pars_vertex:oE,uv_vertex:lE,worldpos_vertex:cE,background_vert:uE,background_frag:fE,backgroundCube_vert:dE,backgroundCube_frag:hE,cube_vert:pE,cube_frag:mE,depth_vert:gE,depth_frag:xE,distance_vert:vE,distance_frag:_E,equirect_vert:yE,equirect_frag:bE,linedashed_vert:SE,linedashed_frag:ME,meshbasic_vert:EE,meshbasic_frag:TE,meshlambert_vert:AE,meshlambert_frag:RE,meshmatcap_vert:CE,meshmatcap_frag:wE,meshnormal_vert:NE,meshnormal_frag:DE,meshphong_vert:UE,meshphong_frag:LE,meshphysical_vert:OE,meshphysical_frag:PE,meshtoon_vert:FE,meshtoon_frag:IE,points_vert:zE,points_frag:BE,shadow_vert:HE,shadow_frag:GE,sprite_vert:VE,sprite_frag:kE},Je={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _t}},envmap:{envMap:{value:null},envMapRotation:{value:new _t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _t},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ce},probesMax:{value:new ce},probesResolution:{value:new ce}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}}},$i={basic:{uniforms:Qn([Je.common,Je.specularmap,Je.envmap,Je.aomap,Je.lightmap,Je.fog]),vertexShader:At.meshbasic_vert,fragmentShader:At.meshbasic_frag},lambert:{uniforms:Qn([Je.common,Je.specularmap,Je.envmap,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.fog,Je.lights,{emissive:{value:new Pt(0)},envMapIntensity:{value:1}}]),vertexShader:At.meshlambert_vert,fragmentShader:At.meshlambert_frag},phong:{uniforms:Qn([Je.common,Je.specularmap,Je.envmap,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.fog,Je.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:At.meshphong_vert,fragmentShader:At.meshphong_frag},standard:{uniforms:Qn([Je.common,Je.envmap,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.roughnessmap,Je.metalnessmap,Je.fog,Je.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag},toon:{uniforms:Qn([Je.common,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.gradientmap,Je.fog,Je.lights,{emissive:{value:new Pt(0)}}]),vertexShader:At.meshtoon_vert,fragmentShader:At.meshtoon_frag},matcap:{uniforms:Qn([Je.common,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.fog,{matcap:{value:null}}]),vertexShader:At.meshmatcap_vert,fragmentShader:At.meshmatcap_frag},points:{uniforms:Qn([Je.points,Je.fog]),vertexShader:At.points_vert,fragmentShader:At.points_frag},dashed:{uniforms:Qn([Je.common,Je.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:At.linedashed_vert,fragmentShader:At.linedashed_frag},depth:{uniforms:Qn([Je.common,Je.displacementmap]),vertexShader:At.depth_vert,fragmentShader:At.depth_frag},normal:{uniforms:Qn([Je.common,Je.bumpmap,Je.normalmap,Je.displacementmap,{opacity:{value:1}}]),vertexShader:At.meshnormal_vert,fragmentShader:At.meshnormal_frag},sprite:{uniforms:Qn([Je.sprite,Je.fog]),vertexShader:At.sprite_vert,fragmentShader:At.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:At.background_vert,fragmentShader:At.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _t}},vertexShader:At.backgroundCube_vert,fragmentShader:At.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:At.cube_vert,fragmentShader:At.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:At.equirect_vert,fragmentShader:At.equirect_frag},distance:{uniforms:Qn([Je.common,Je.displacementmap,{referencePosition:{value:new ce},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:At.distance_vert,fragmentShader:At.distance_frag},shadow:{uniforms:Qn([Je.lights,Je.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:At.shadow_vert,fragmentShader:At.shadow_frag}};$i.physical={uniforms:Qn([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _t},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _t},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _t},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _t},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _t},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _t}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag};const qc={r:0,b:0,g:0},jE=new Rn,a_=new _t;a_.set(-1,0,0,0,1,0,0,0,1);function WE(r,e,i,s,l,c){const f=new Pt(0);let p=l===!0?0:1,m,h,g=null,_=0,x=null;function M(I){let G=I.isScene===!0?I.background:null;if(G&&G.isTexture){const B=I.backgroundBlurriness>0;G=e.get(G,B)}return G}function E(I){let G=!1;const B=M(I);B===null?S(f,p):B&&B.isColor&&(S(B,1),G=!0);const Z=r.xr.getEnvironmentBlendMode();Z==="additive"?i.buffers.color.setClear(0,0,0,1,c):Z==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||G)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function U(I,G){const B=M(G);B&&(B.isCubeTexture||B.mapping===hu)?(h===void 0&&(h=new Fa(new dl(1,1,1),new sa({name:"BackgroundCubeMaterial",uniforms:to($i.backgroundCube.uniforms),vertexShader:$i.backgroundCube.vertexShader,fragmentShader:$i.backgroundCube.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(Z,H,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=B,h.material.uniforms.backgroundBlurriness.value=G.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=G.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(jE.makeRotationFromEuler(G.backgroundRotation)).transpose(),B.isCubeTexture&&B.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(a_),h.material.toneMapped=Ht.getTransfer(B.colorSpace)!==en,(g!==B||_!==B.version||x!==r.toneMapping)&&(h.material.needsUpdate=!0,g=B,_=B.version,x=r.toneMapping),h.layers.enableAll(),I.unshift(h,h.geometry,h.material,0,0,null)):B&&B.isTexture&&(m===void 0&&(m=new Fa(new mu(2,2),new sa({name:"BackgroundMaterial",uniforms:to($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:Ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=B,m.material.uniforms.backgroundIntensity.value=G.backgroundIntensity,m.material.toneMapped=Ht.getTransfer(B.colorSpace)!==en,B.matrixAutoUpdate===!0&&B.updateMatrix(),m.material.uniforms.uvTransform.value.copy(B.matrix),(g!==B||_!==B.version||x!==r.toneMapping)&&(m.material.needsUpdate=!0,g=B,_=B.version,x=r.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null))}function S(I,G){I.getRGB(qc,e_(r)),i.buffers.color.setClear(qc.r,qc.g,qc.b,G,c)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(I,G=1){f.set(I),p=G,S(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(I){p=I,S(f,p)},render:E,addToRenderList:U,dispose:y}}function XE(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,f=!1;function p(W,$,fe,te,X){let O=!1;const D=_(W,te,fe,$);c!==D&&(c=D,h(c.object)),O=M(W,te,fe,X),O&&E(W,te,fe,X),X!==null&&e.update(X,r.ELEMENT_ARRAY_BUFFER),(O||f)&&(f=!1,B(W,$,fe,te),X!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function m(){return r.createVertexArray()}function h(W){return r.bindVertexArray(W)}function g(W){return r.deleteVertexArray(W)}function _(W,$,fe,te){const X=te.wireframe===!0;let O=s[$.id];O===void 0&&(O={},s[$.id]=O);const D=W.isInstancedMesh===!0?W.id:0;let w=O[D];w===void 0&&(w={},O[D]=w);let A=w[fe.id];A===void 0&&(A={},w[fe.id]=A);let L=A[X];return L===void 0&&(L=x(m()),A[X]=L),L}function x(W){const $=[],fe=[],te=[];for(let X=0;X<i;X++)$[X]=0,fe[X]=0,te[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:fe,attributeDivisors:te,object:W,attributes:{},index:null}}function M(W,$,fe,te){const X=c.attributes,O=$.attributes;let D=0;const w=fe.getAttributes();for(const A in w)if(w[A].location>=0){const T=X[A];let C=O[A];if(C===void 0&&(A==="instanceMatrix"&&W.instanceMatrix&&(C=W.instanceMatrix),A==="instanceColor"&&W.instanceColor&&(C=W.instanceColor)),T===void 0||T.attribute!==C||C&&T.data!==C.data)return!0;D++}return c.attributesNum!==D||c.index!==te}function E(W,$,fe,te){const X={},O=$.attributes;let D=0;const w=fe.getAttributes();for(const A in w)if(w[A].location>=0){let T=O[A];T===void 0&&(A==="instanceMatrix"&&W.instanceMatrix&&(T=W.instanceMatrix),A==="instanceColor"&&W.instanceColor&&(T=W.instanceColor));const C={};C.attribute=T,T&&T.data&&(C.data=T.data),X[A]=C,D++}c.attributes=X,c.attributesNum=D,c.index=te}function U(){const W=c.newAttributes;for(let $=0,fe=W.length;$<fe;$++)W[$]=0}function S(W){y(W,0)}function y(W,$){const fe=c.newAttributes,te=c.enabledAttributes,X=c.attributeDivisors;fe[W]=1,te[W]===0&&(r.enableVertexAttribArray(W),te[W]=1),X[W]!==$&&(r.vertexAttribDivisor(W,$),X[W]=$)}function I(){const W=c.newAttributes,$=c.enabledAttributes;for(let fe=0,te=$.length;fe<te;fe++)$[fe]!==W[fe]&&(r.disableVertexAttribArray(fe),$[fe]=0)}function G(W,$,fe,te,X,O,D){D===!0?r.vertexAttribIPointer(W,$,fe,X,O):r.vertexAttribPointer(W,$,fe,te,X,O)}function B(W,$,fe,te){U();const X=te.attributes,O=fe.getAttributes(),D=$.defaultAttributeValues;for(const w in O){const A=O[w];if(A.location>=0){let L=X[w];if(L===void 0&&(w==="instanceMatrix"&&W.instanceMatrix&&(L=W.instanceMatrix),w==="instanceColor"&&W.instanceColor&&(L=W.instanceColor)),L!==void 0){const T=L.normalized,C=L.itemSize,K=e.get(L);if(K===void 0)continue;const Q=K.buffer,Y=K.type,q=K.bytesPerElement,re=Y===r.INT||Y===r.UNSIGNED_INT||L.gpuType===sp;if(L.isInterleavedBufferAttribute){const ue=L.data,De=ue.stride,Ae=L.offset;if(ue.isInstancedInterleavedBuffer){for(let Ue=0;Ue<A.locationSize;Ue++)y(A.location+Ue,ue.meshPerAttribute);W.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Ue=0;Ue<A.locationSize;Ue++)S(A.location+Ue);r.bindBuffer(r.ARRAY_BUFFER,Q);for(let Ue=0;Ue<A.locationSize;Ue++)G(A.location+Ue,C/A.locationSize,Y,T,De*q,(Ae+C/A.locationSize*Ue)*q,re)}else{if(L.isInstancedBufferAttribute){for(let ue=0;ue<A.locationSize;ue++)y(A.location+ue,L.meshPerAttribute);W.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let ue=0;ue<A.locationSize;ue++)S(A.location+ue);r.bindBuffer(r.ARRAY_BUFFER,Q);for(let ue=0;ue<A.locationSize;ue++)G(A.location+ue,C/A.locationSize,Y,T,C*q,C/A.locationSize*ue*q,re)}}else if(D!==void 0){const T=D[w];if(T!==void 0)switch(T.length){case 2:r.vertexAttrib2fv(A.location,T);break;case 3:r.vertexAttrib3fv(A.location,T);break;case 4:r.vertexAttrib4fv(A.location,T);break;default:r.vertexAttrib1fv(A.location,T)}}}}I()}function Z(){V();for(const W in s){const $=s[W];for(const fe in $){const te=$[fe];for(const X in te){const O=te[X];for(const D in O)g(O[D].object),delete O[D];delete te[X]}}delete s[W]}}function H(W){if(s[W.id]===void 0)return;const $=s[W.id];for(const fe in $){const te=$[fe];for(const X in te){const O=te[X];for(const D in O)g(O[D].object),delete O[D];delete te[X]}}delete s[W.id]}function k(W){for(const $ in s){const fe=s[$];for(const te in fe){const X=fe[te];if(X[W.id]===void 0)continue;const O=X[W.id];for(const D in O)g(O[D].object),delete O[D];delete X[W.id]}}}function N(W){for(const $ in s){const fe=s[$],te=W.isInstancedMesh===!0?W.id:0,X=fe[te];if(X!==void 0){for(const O in X){const D=X[O];for(const w in D)g(D[w].object),delete D[w];delete X[O]}delete fe[te],Object.keys(fe).length===0&&delete s[$]}}}function V(){j(),f=!0,c!==l&&(c=l,h(c.object))}function j(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:V,resetDefaultState:j,dispose:Z,releaseStatesOfGeometry:H,releaseStatesOfObject:N,releaseStatesOfProgram:k,initAttributes:U,enableAttribute:S,disableUnusedAttributes:I}}function qE(r,e,i){let s;function l(m){s=m}function c(m,h){r.drawArrays(s,m,h),i.update(h,s,1)}function f(m,h,g){g!==0&&(r.drawArraysInstanced(s,m,h,g),i.update(h,s,g))}function p(m,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,h,0,g);let x=0;for(let M=0;M<g;M++)x+=h[M];i.update(x,s,1)}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=p}function YE(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(k){return!(k!==Wi&&s.convert(k)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(k){const N=k===Oa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==Li&&s.convert(k)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==ea&&!N)}function m(k){if(k==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const g=m(h);g!==h&&(gt("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const _=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&x===!1&&gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),U=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),I=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),G=r.getParameter(r.MAX_VARYING_VECTORS),B=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),Z=r.getParameter(r.MAX_SAMPLES),H=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:E,maxTextureSize:U,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:I,maxVaryings:G,maxFragmentUniforms:B,maxSamples:Z,samples:H}}function ZE(r){const e=this;let i=null,s=0,l=!1,c=!1;const f=new _s,p=new _t,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const M=_.length!==0||x||s!==0||l;return l=x,s=_.length,M},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){i=g(_,x,0)},this.setState=function(_,x,M){const E=_.clippingPlanes,U=_.clipIntersection,S=_.clipShadows,y=r.get(_);if(!l||E===null||E.length===0||c&&!S)c?g(null):h();else{const I=c?0:s,G=I*4;let B=y.clippingState||null;m.value=B,B=g(E,x,G,M);for(let Z=0;Z!==G;++Z)B[Z]=i[Z];y.clippingState=B,this.numIntersection=U?this.numPlanes:0,this.numPlanes+=I}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(_,x,M,E){const U=_!==null?_.length:0;let S=null;if(U!==0){if(S=m.value,E!==!0||S===null){const y=M+U*4,I=x.matrixWorldInverse;p.getNormalMatrix(I),(S===null||S.length<y)&&(S=new Float32Array(y));for(let G=0,B=M;G!==U;++G,B+=4)f.copy(_[G]).applyMatrix4(I,p),f.normal.toArray(S,B),S[B+3]=f.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=U,e.numIntersection=0,S}}const bs=4,Zx=[.125,.215,.35,.446,.526,.582],Ys=20,KE=256,tl=new n_,Kx=new Pt;let ih=null,ah=0,sh=0,rh=!1;const QE=new ce;class Qx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:f=256,position:p=QE}=c;ih=this._renderer.getRenderTarget(),ah=this._renderer.getActiveCubeFace(),sh=this._renderer.getActiveMipmapLevel(),rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ev(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$x(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ih,ah,sh),this._renderer.xr.enabled=rh,e.scissorTest=!1,Xr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Js||e.mapping===$r?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ih=this._renderer.getRenderTarget(),ah=this._renderer.getActiveCubeFace(),sh=this._renderer.getActiveMipmapLevel(),rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:Oa,format:Wi,colorSpace:ru,depthBuffer:!1},l=Jx(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jx(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=JE(c)),this._blurMaterial=eT(c,e,i),this._ggxMaterial=$E(c,e,i)}return l}_compileMaterial(e){const i=new Fa(new Pi,e);this._renderer.compile(i,tl)}_sceneToCubeUV(e,i,s,l,c){const m=new Ui(90,1,i,s),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,M=_.toneMapping;_.getClearColor(Kx),_.toneMapping=na,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fa(new dl,new Zv({name:"PMREM.Background",side:li,depthWrite:!1,depthTest:!1})));const U=this._backgroundBox,S=U.material;let y=!1;const I=e.background;I?I.isColor&&(S.color.copy(I),e.background=null,y=!0):(S.color.copy(Kx),y=!0);for(let G=0;G<6;G++){const B=G%3;B===0?(m.up.set(0,h[G],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[G],c.y,c.z)):B===1?(m.up.set(0,0,h[G]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[G],c.z)):(m.up.set(0,h[G],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[G]));const Z=this._cubeSize;Xr(l,B*Z,G>2?Z:0,Z,Z),_.setRenderTarget(l),y&&_.render(U,m),_.render(e,m)}_.toneMapping=M,_.autoClear=x,e.background=I}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Js||e.mapping===$r;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=ev()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$x());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;Xr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,tl)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,p=this._lodMeshes[s];p.material=f;const m=f.uniforms,h=s/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),_=Math.sqrt(h*h-g*g),x=0+h*1.25,M=_*x,{_lodMax:E}=this,U=this._sizeLods[s],S=3*U*(s>E-bs?s-E+bs:0),y=4*(this._cubeSize-U);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=E-i,Xr(c,S,y,3*U,2*U),l.setRenderTarget(c),l.render(p,tl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,Xr(e,S,y,3*U,2*U),l.setRenderTarget(e),l.render(p,tl)}_blur(e,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,s,l,"latitudinal",c),this._halfBlur(f,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,f,p){const m=this._renderer,h=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Gt("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[l];_.material=h;const x=h.uniforms,M=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Ys-1),U=c/E,S=isFinite(c)?1+Math.floor(g*U):Ys;S>Ys&&gt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ys}`);const y=[];let I=0;for(let k=0;k<Ys;++k){const N=k/U,V=Math.exp(-N*N/2);y.push(V),k===0?I+=V:k<S&&(I+=2*V)}for(let k=0;k<y.length;k++)y[k]=y[k]/I;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=y,x.latitudinal.value=f==="latitudinal",p&&(x.poleAxis.value=p);const{_lodMax:G}=this;x.dTheta.value=E,x.mipInt.value=G-s;const B=this._sizeLods[l],Z=3*B*(l>G-bs?l-G+bs:0),H=4*(this._cubeSize-B);Xr(i,Z,H,3*B,2*B),m.setRenderTarget(i),m.render(_,tl)}}function JE(r){const e=[],i=[],s=[];let l=r;const c=r-bs+1+Zx.length;for(let f=0;f<c;f++){const p=Math.pow(2,l);e.push(p);let m=1/p;f>r-bs?m=Zx[f-r+bs-1]:f===0&&(m=0),i.push(m);const h=1/(p-2),g=-h,_=1+h,x=[g,g,_,g,_,_,g,g,_,_,g,_],M=6,E=6,U=3,S=2,y=1,I=new Float32Array(U*E*M),G=new Float32Array(S*E*M),B=new Float32Array(y*E*M);for(let H=0;H<M;H++){const k=H%3*2/3-1,N=H>2?0:-1,V=[k,N,0,k+2/3,N,0,k+2/3,N+1,0,k,N,0,k+2/3,N+1,0,k,N+1,0];I.set(V,U*E*H),G.set(x,S*E*H);const j=[H,H,H,H,H,H];B.set(j,y*E*H)}const Z=new Pi;Z.setAttribute("position",new Oi(I,U)),Z.setAttribute("uv",new Oi(G,S)),Z.setAttribute("faceIndex",new Oi(B,y)),s.push(new Fa(Z,null)),l>bs&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function Jx(r,e,i){const s=new ia(r,e,i);return s.texture.mapping=hu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Xr(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function $E(r,e,i){return new sa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:KE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gu(),fragmentShader:`

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
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function eT(r,e,i){const s=new Float32Array(Ys),l=new ce(0,1,0);return new sa({name:"SphericalGaussianBlur",defines:{n:Ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:gu(),fragmentShader:`

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
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function $x(){return new sa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gu(),fragmentShader:`

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
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function ev(){return new sa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function gu(){return`

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
	`}class s_ extends ia{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Jv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new dl(5,5,5),c=new sa({name:"CubemapFromEquirect",uniforms:to(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:li,blending:Ua});c.uniforms.tEquirect.value=i;const f=new Fa(l,c),p=i.minFilter;return i.minFilter===Ks&&(i.minFilter=Zn),new a1(1,10,this).update(e,f),i.minFilter=p,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,s,l);e.setRenderTarget(c)}}function tT(r){let e=new WeakMap,i=new WeakMap,s=null;function l(x,M=!1){return x==null?null:M?f(x):c(x)}function c(x){if(x&&x.isTexture){const M=x.mapping;if(M===Nd||M===Dd)if(e.has(x)){const E=e.get(x).texture;return p(E,x.mapping)}else{const E=x.image;if(E&&E.height>0){const U=new s_(E.height);return U.fromEquirectangularTexture(r,x),e.set(x,U),x.addEventListener("dispose",h),p(U.texture,x.mapping)}else return null}}return x}function f(x){if(x&&x.isTexture){const M=x.mapping,E=M===Nd||M===Dd,U=M===Js||M===$r;if(E||U){let S=i.get(x);const y=S!==void 0?S.texture.pmremVersion:0;if(x.isRenderTargetTexture&&x.pmremVersion!==y)return s===null&&(s=new Qx(r)),S=E?s.fromEquirectangular(x,S):s.fromCubemap(x,S),S.texture.pmremVersion=x.pmremVersion,i.set(x,S),S.texture;if(S!==void 0)return S.texture;{const I=x.image;return E&&I&&I.height>0||U&&I&&m(I)?(s===null&&(s=new Qx(r)),S=E?s.fromEquirectangular(x):s.fromCubemap(x),S.texture.pmremVersion=x.pmremVersion,i.set(x,S),x.addEventListener("dispose",g),S.texture):null}}}return x}function p(x,M){return M===Nd?x.mapping=Js:M===Dd&&(x.mapping=$r),x}function m(x){let M=0;const E=6;for(let U=0;U<E;U++)x[U]!==void 0&&M++;return M===E}function h(x){const M=x.target;M.removeEventListener("dispose",h);const E=e.get(M);E!==void 0&&(e.delete(M),E.dispose())}function g(x){const M=x.target;M.removeEventListener("dispose",g);const E=i.get(M);E!==void 0&&(i.delete(M),E.dispose())}function _(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:_}}function nT(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&$h("WebGLRenderer: "+s+" extension not supported."),l}}}function iT(r,e,i,s){const l={},c=new WeakMap;function f(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);x.removeEventListener("dispose",f),delete l[x.id];const M=c.get(x);M&&(e.remove(M),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function p(_,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function m(_){const x=_.attributes;for(const M in x)e.update(x[M],r.ARRAY_BUFFER)}function h(_){const x=[],M=_.index,E=_.attributes.position;let U=0;if(E===void 0)return;if(M!==null){const I=M.array;U=M.version;for(let G=0,B=I.length;G<B;G+=3){const Z=I[G+0],H=I[G+1],k=I[G+2];x.push(Z,H,H,k,k,Z)}}else{const I=E.array;U=E.version;for(let G=0,B=I.length/3-1;G<B;G+=3){const Z=G+0,H=G+1,k=G+2;x.push(Z,H,H,k,k,Z)}}const S=new(E.count>=65535?Yv:qv)(x,1);S.version=U;const y=c.get(_);y&&e.remove(y),c.set(_,S)}function g(_){const x=c.get(_);if(x){const M=_.index;M!==null&&x.version<M.version&&h(_)}else h(_);return c.get(_)}return{get:p,update:m,getWireframeAttribute:g}}function aT(r,e,i){let s;function l(_){s=_}let c,f;function p(_){c=_.type,f=_.bytesPerElement}function m(_,x){r.drawElements(s,x,c,_*f),i.update(x,s,1)}function h(_,x,M){M!==0&&(r.drawElementsInstanced(s,x,c,_*f,M),i.update(x,s,M))}function g(_,x,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,x,0,c,_,0,M);let U=0;for(let S=0;S<M;S++)U+=x[S];i.update(U,s,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=g}function sT(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,p){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:Gt("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function rT(r,e,i){const s=new WeakMap,l=new _n;function c(f,p,m){const h=f.morphTargetInfluences,g=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,_=g!==void 0?g.length:0;let x=s.get(p);if(x===void 0||x.count!==_){let j=function(){N.dispose(),s.delete(p),p.removeEventListener("dispose",j)};var M=j;x!==void 0&&x.texture.dispose();const E=p.morphAttributes.position!==void 0,U=p.morphAttributes.normal!==void 0,S=p.morphAttributes.color!==void 0,y=p.morphAttributes.position||[],I=p.morphAttributes.normal||[],G=p.morphAttributes.color||[];let B=0;E===!0&&(B=1),U===!0&&(B=2),S===!0&&(B=3);let Z=p.attributes.position.count*B,H=1;Z>e.maxTextureSize&&(H=Math.ceil(Z/e.maxTextureSize),Z=e.maxTextureSize);const k=new Float32Array(Z*H*4*_),N=new jv(k,Z,H,_);N.type=ea,N.needsUpdate=!0;const V=B*4;for(let W=0;W<_;W++){const $=y[W],fe=I[W],te=G[W],X=Z*H*4*W;for(let O=0;O<$.count;O++){const D=O*V;E===!0&&(l.fromBufferAttribute($,O),k[X+D+0]=l.x,k[X+D+1]=l.y,k[X+D+2]=l.z,k[X+D+3]=0),U===!0&&(l.fromBufferAttribute(fe,O),k[X+D+4]=l.x,k[X+D+5]=l.y,k[X+D+6]=l.z,k[X+D+7]=0),S===!0&&(l.fromBufferAttribute(te,O),k[X+D+8]=l.x,k[X+D+9]=l.y,k[X+D+10]=l.z,k[X+D+11]=te.itemSize===4?l.w:1)}}x={count:_,texture:N,size:new Ct(Z,H)},s.set(p,x),p.addEventListener("dispose",j)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let E=0;for(let S=0;S<h.length;S++)E+=h[S];const U=p.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",U),m.getUniforms().setValue(r,"morphTargetInfluences",h)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function oT(r,e,i,s,l){let c=new WeakMap;function f(h){const g=l.render.frame,_=h.geometry,x=e.get(h,_);if(c.get(x)!==g&&(e.update(x),c.set(x,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==g&&(i.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,r.ARRAY_BUFFER),c.set(h,g))),h.isSkinnedMesh){const M=h.skeleton;c.get(M)!==g&&(M.update(),c.set(M,g))}return x}function p(){c=new WeakMap}function m(h){const g=h.target;g.removeEventListener("dispose",m),s.releaseStatesOfObject(g),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:f,dispose:p}}const lT={[Cv]:"LINEAR_TONE_MAPPING",[wv]:"REINHARD_TONE_MAPPING",[Nv]:"CINEON_TONE_MAPPING",[Dv]:"ACES_FILMIC_TONE_MAPPING",[Lv]:"AGX_TONE_MAPPING",[Ov]:"NEUTRAL_TONE_MAPPING",[Uv]:"CUSTOM_TONE_MAPPING"};function cT(r,e,i,s,l){const c=new ia(e,i,{type:r,depthBuffer:s,stencilBuffer:l,depthTexture:s?new eo(e,i):void 0}),f=new ia(e,i,{type:Oa,depthBuffer:!1,stencilBuffer:!1}),p=new Pi;p.setAttribute("position",new bi([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new bi([0,2,0,0,2,0],2));const m=new $S({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Fa(p,m),g=new n_(-1,1,1,-1,0,1);let _=null,x=null,M=!1,E,U=null,S=[],y=!1;this.setSize=function(I,G){c.setSize(I,G),f.setSize(I,G);for(let B=0;B<S.length;B++){const Z=S[B];Z.setSize&&Z.setSize(I,G)}},this.setEffects=function(I){S=I,y=S.length>0&&S[0].isRenderPass===!0;const G=c.width,B=c.height;for(let Z=0;Z<S.length;Z++){const H=S[Z];H.setSize&&H.setSize(G,B)}},this.begin=function(I,G){if(M||I.toneMapping===na&&S.length===0)return!1;if(U=G,G!==null){const B=G.width,Z=G.height;(c.width!==B||c.height!==Z)&&this.setSize(B,Z)}return y===!1&&I.setRenderTarget(c),E=I.toneMapping,I.toneMapping=na,!0},this.hasRenderPass=function(){return y},this.end=function(I,G){I.toneMapping=E,M=!0;let B=c,Z=f;for(let H=0;H<S.length;H++){const k=S[H];if(k.enabled!==!1&&(k.render(I,Z,B,G),k.needsSwap!==!1)){const N=B;B=Z,Z=N}}if(_!==I.outputColorSpace||x!==I.toneMapping){_=I.outputColorSpace,x=I.toneMapping,m.defines={},Ht.getTransfer(_)===en&&(m.defines.SRGB_TRANSFER="");const H=lT[x];H&&(m.defines[H]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=B.texture,I.setRenderTarget(U),I.render(h,g),U=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),f.dispose(),p.dispose(),m.dispose()}}const r_=new Jn,tp=new eo(1,1),o_=new jv,l_=new wS,c_=new Jv,tv=[],nv=[],iv=new Float32Array(16),av=new Float32Array(9),sv=new Float32Array(4);function no(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=tv[l];if(c===void 0&&(c=new Float32Array(l),tv[l]=c),e!==0){s.toArray(c,0);for(let f=1,p=0;f!==e;++f)p+=i,r[f].toArray(c,p)}return c}function Un(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function Ln(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function xu(r,e){let i=nv[e];i===void 0&&(i=new Int32Array(e),nv[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function uT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function fT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Un(i,e))return;r.uniform2fv(this.addr,e),Ln(i,e)}}function dT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Un(i,e))return;r.uniform3fv(this.addr,e),Ln(i,e)}}function hT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Un(i,e))return;r.uniform4fv(this.addr,e),Ln(i,e)}}function pT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Un(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ln(i,e)}else{if(Un(i,s))return;sv.set(s),r.uniformMatrix2fv(this.addr,!1,sv),Ln(i,s)}}function mT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Un(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ln(i,e)}else{if(Un(i,s))return;av.set(s),r.uniformMatrix3fv(this.addr,!1,av),Ln(i,s)}}function gT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Un(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ln(i,e)}else{if(Un(i,s))return;iv.set(s),r.uniformMatrix4fv(this.addr,!1,iv),Ln(i,s)}}function xT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function vT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Un(i,e))return;r.uniform2iv(this.addr,e),Ln(i,e)}}function _T(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Un(i,e))return;r.uniform3iv(this.addr,e),Ln(i,e)}}function yT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Un(i,e))return;r.uniform4iv(this.addr,e),Ln(i,e)}}function bT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function ST(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Un(i,e))return;r.uniform2uiv(this.addr,e),Ln(i,e)}}function MT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Un(i,e))return;r.uniform3uiv(this.addr,e),Ln(i,e)}}function ET(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Un(i,e))return;r.uniform4uiv(this.addr,e),Ln(i,e)}}function TT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(tp.compareFunction=i.isReversedDepthBuffer()?dp:fp,c=tp):c=r_,i.setTexture2D(e||c,l)}function AT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||l_,l)}function RT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||c_,l)}function CT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||o_,l)}function wT(r){switch(r){case 5126:return uT;case 35664:return fT;case 35665:return dT;case 35666:return hT;case 35674:return pT;case 35675:return mT;case 35676:return gT;case 5124:case 35670:return xT;case 35667:case 35671:return vT;case 35668:case 35672:return _T;case 35669:case 35673:return yT;case 5125:return bT;case 36294:return ST;case 36295:return MT;case 36296:return ET;case 35678:case 36198:case 36298:case 36306:case 35682:return TT;case 35679:case 36299:case 36307:return AT;case 35680:case 36300:case 36308:case 36293:return RT;case 36289:case 36303:case 36311:case 36292:return CT}}function NT(r,e){r.uniform1fv(this.addr,e)}function DT(r,e){const i=no(e,this.size,2);r.uniform2fv(this.addr,i)}function UT(r,e){const i=no(e,this.size,3);r.uniform3fv(this.addr,i)}function LT(r,e){const i=no(e,this.size,4);r.uniform4fv(this.addr,i)}function OT(r,e){const i=no(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function PT(r,e){const i=no(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function FT(r,e){const i=no(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function IT(r,e){r.uniform1iv(this.addr,e)}function zT(r,e){r.uniform2iv(this.addr,e)}function BT(r,e){r.uniform3iv(this.addr,e)}function HT(r,e){r.uniform4iv(this.addr,e)}function GT(r,e){r.uniform1uiv(this.addr,e)}function VT(r,e){r.uniform2uiv(this.addr,e)}function kT(r,e){r.uniform3uiv(this.addr,e)}function jT(r,e){r.uniform4uiv(this.addr,e)}function WT(r,e,i){const s=this.cache,l=e.length,c=xu(i,l);Un(s,c)||(r.uniform1iv(this.addr,c),Ln(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=tp:f=r_;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||f,c[p])}function XT(r,e,i){const s=this.cache,l=e.length,c=xu(i,l);Un(s,c)||(r.uniform1iv(this.addr,c),Ln(s,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||l_,c[f])}function qT(r,e,i){const s=this.cache,l=e.length,c=xu(i,l);Un(s,c)||(r.uniform1iv(this.addr,c),Ln(s,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||c_,c[f])}function YT(r,e,i){const s=this.cache,l=e.length,c=xu(i,l);Un(s,c)||(r.uniform1iv(this.addr,c),Ln(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||o_,c[f])}function ZT(r){switch(r){case 5126:return NT;case 35664:return DT;case 35665:return UT;case 35666:return LT;case 35674:return OT;case 35675:return PT;case 35676:return FT;case 5124:case 35670:return IT;case 35667:case 35671:return zT;case 35668:case 35672:return BT;case 35669:case 35673:return HT;case 5125:return GT;case 36294:return VT;case 36295:return kT;case 36296:return jT;case 35678:case 36198:case 36298:case 36306:case 35682:return WT;case 35679:case 36299:case 36307:return XT;case 35680:case 36300:case 36308:case 36293:return qT;case 36289:case 36303:case 36311:case 36292:return YT}}class KT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=wT(i.type)}}class QT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=ZT(i.type)}}class JT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const p=l[c];p.setValue(e,i[p.id],s)}}}const oh=/(\w+)(\])?(\[|\.)?/g;function rv(r,e){r.seq.push(e),r.map[e.id]=e}function $T(r,e,i){const s=r.name,l=s.length;for(oh.lastIndex=0;;){const c=oh.exec(s),f=oh.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&f+2===l){rv(i,h===void 0?new KT(p,r,e):new QT(p,r,e));break}else{let _=i.map[p];_===void 0&&(_=new JT(p),rv(i,_)),i=_}}}class nu{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const p=e.getActiveUniform(i,f),m=e.getUniformLocation(i,p.name);$T(p,m,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,f=i.length;c!==f;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&s.push(f)}return s}}function ov(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const eA=37297;let tA=0;function nA(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const p=f+1;s.push(`${p===e?">":" "} ${p}: ${i[f]}`)}return s.join(`
`)}const lv=new _t;function iA(r){Ht._getMatrix(lv,Ht.workingColorSpace,r);const e=`mat3( ${lv.elements.map(i=>i.toFixed(4))} )`;switch(Ht.getTransfer(r)){case ou:return[e,"LinearTransferOETF"];case en:return[e,"sRGBTransferOETF"];default:return gt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function cv(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const p=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+nA(r.getShaderSource(e),p)}else return c}function aA(r,e){const i=iA(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const sA={[Cv]:"Linear",[wv]:"Reinhard",[Nv]:"Cineon",[Dv]:"ACESFilmic",[Lv]:"AgX",[Ov]:"Neutral",[Uv]:"Custom"};function rA(r,e){const i=sA[e];return i===void 0?(gt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Yc=new ce;function oA(){Ht.getLuminanceCoefficients(Yc);const r=Yc.x.toFixed(4),e=Yc.y.toFixed(4),i=Yc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sl).join(`
`)}function cA(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function uA(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),f=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[f]={type:c.type,location:r.getAttribLocation(e,f),locationSize:p}}return i}function sl(r){return r!==""}function uv(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fA=/^[ \t]*#include +<([\w\d./]+)>/gm;function np(r){return r.replace(fA,hA)}const dA=new Map;function hA(r,e){let i=At[e];if(i===void 0){const s=dA.get(e);if(s!==void 0)i=At[s],gt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return np(i)}const pA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dv(r){return r.replace(pA,mA)}function mA(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function hv(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const gA={[Kc]:"SHADOWMAP_TYPE_PCF",[al]:"SHADOWMAP_TYPE_VSM"};function xA(r){return gA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const vA={[Js]:"ENVMAP_TYPE_CUBE",[$r]:"ENVMAP_TYPE_CUBE",[hu]:"ENVMAP_TYPE_CUBE_UV"};function _A(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":vA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const yA={[$r]:"ENVMAP_MODE_REFRACTION"};function bA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":yA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const SA={[Rv]:"ENVMAP_BLENDING_MULTIPLY",[oS]:"ENVMAP_BLENDING_MIX",[lS]:"ENVMAP_BLENDING_ADD"};function MA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":SA[r.combine]||"ENVMAP_BLENDING_NONE"}function EA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function TA(r,e,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,p=i.fragmentShader;const m=xA(i),h=_A(i),g=bA(i),_=MA(i),x=EA(i),M=lA(i),E=cA(c),U=l.createProgram();let S,y,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(sl).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(sl).join(`
`),y.length>0&&(y+=`
`)):(S=[hv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sl).join(`
`),y=[hv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==na?"#define TONE_MAPPING":"",i.toneMapping!==na?At.tonemapping_pars_fragment:"",i.toneMapping!==na?rA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",At.colorspace_pars_fragment,aA("linearToOutputTexel",i.outputColorSpace),oA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(sl).join(`
`)),f=np(f),f=uv(f,i),f=fv(f,i),p=np(p),p=uv(p,i),p=fv(p,i),f=dv(f),p=dv(p),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",i.glslVersion===Sx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Sx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const G=I+S+f,B=I+y+p,Z=ov(l,l.VERTEX_SHADER,G),H=ov(l,l.FRAGMENT_SHADER,B);l.attachShader(U,Z),l.attachShader(U,H),i.index0AttributeName!==void 0?l.bindAttribLocation(U,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(U,0,"position"),l.linkProgram(U);function k(W){if(r.debug.checkShaderErrors){const $=l.getProgramInfoLog(U)||"",fe=l.getShaderInfoLog(Z)||"",te=l.getShaderInfoLog(H)||"",X=$.trim(),O=fe.trim(),D=te.trim();let w=!0,A=!0;if(l.getProgramParameter(U,l.LINK_STATUS)===!1)if(w=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,U,Z,H);else{const L=cv(l,Z,"vertex"),T=cv(l,H,"fragment");Gt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(U,l.VALIDATE_STATUS)+`

Material Name: `+W.name+`
Material Type: `+W.type+`

Program Info Log: `+X+`
`+L+`
`+T)}else X!==""?gt("WebGLProgram: Program Info Log:",X):(O===""||D==="")&&(A=!1);A&&(W.diagnostics={runnable:w,programLog:X,vertexShader:{log:O,prefix:S},fragmentShader:{log:D,prefix:y}})}l.deleteShader(Z),l.deleteShader(H),N=new nu(l,U),V=uA(l,U)}let N;this.getUniforms=function(){return N===void 0&&k(this),N};let V;this.getAttributes=function(){return V===void 0&&k(this),V};let j=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return j===!1&&(j=l.getProgramParameter(U,eA)),j},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(U),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=tA++,this.cacheKey=e,this.usedTimes=1,this.program=U,this.vertexShader=Z,this.fragmentShader=H,this}let AA=0;class RA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new CA(e),i.set(e,s)),s}}class CA{constructor(e){this.id=AA++,this.code=e,this.usedTimes=0}}function wA(r){return r===$s||r===au||r===su}function NA(r,e,i,s,l,c){const f=new Wv,p=new RA,m=new Set,h=[],g=new Map,_=s.logarithmicDepthBuffer;let x=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(N){return m.add(N),N===0?"uv":`uv${N}`}function U(N,V,j,W,$,fe){const te=W.fog,X=$.geometry,O=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?W.environment:null,D=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap,w=e.get(N.envMap||O,D),A=w&&w.mapping===hu?w.image.height:null,L=M[N.type];N.precision!==null&&(x=s.getMaxPrecision(N.precision),x!==N.precision&&gt("WebGLProgram.getParameters:",N.precision,"not supported, using",x,"instead."));const T=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,C=T!==void 0?T.length:0;let K=0;X.morphAttributes.position!==void 0&&(K=1),X.morphAttributes.normal!==void 0&&(K=2),X.morphAttributes.color!==void 0&&(K=3);let Q,Y,q,re;if(L){const Le=$i[L];Q=Le.vertexShader,Y=Le.fragmentShader}else Q=N.vertexShader,Y=N.fragmentShader,p.update(N),q=p.getVertexShaderID(N),re=p.getFragmentShaderID(N);const ue=r.getRenderTarget(),De=r.state.buffers.depth.getReversed(),Ae=$.isInstancedMesh===!0,Ue=$.isBatchedMesh===!0,$e=!!N.map,Ze=!!N.matcap,Ye=!!w,_e=!!N.aoMap,ye=!!N.lightMap,qe=!!N.bumpMap,et=!!N.normalMap,xt=!!N.displacementMap,ee=!!N.emissiveMap,Et=!!N.metalnessMap,ot=!!N.roughnessMap,dt=N.anisotropy>0,Te=N.clearcoat>0,Nt=N.dispersion>0,z=N.iridescence>0,R=N.sheen>0,ie=N.transmission>0,Re=dt&&!!N.anisotropyMap,Pe=Te&&!!N.clearcoatMap,Be=Te&&!!N.clearcoatNormalMap,Ve=Te&&!!N.clearcoatRoughnessMap,Se=z&&!!N.iridescenceMap,Me=z&&!!N.iridescenceThicknessMap,ke=R&&!!N.sheenColorMap,je=R&&!!N.sheenRoughnessMap,Ge=!!N.specularMap,He=!!N.specularColorMap,ht=!!N.specularIntensityMap,pt=ie&&!!N.transmissionMap,yt=ie&&!!N.thicknessMap,ne=!!N.gradientMap,ze=!!N.alphaMap,le=N.alphaTest>0,we=!!N.alphaHash,Fe=!!N.extensions;let ge=na;N.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(ge=r.toneMapping);const Ie={shaderID:L,shaderType:N.type,shaderName:N.name,vertexShader:Q,fragmentShader:Y,defines:N.defines,customVertexShaderID:q,customFragmentShaderID:re,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:x,batching:Ue,batchingColor:Ue&&$._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&$.instanceColor!==null,instancingMorph:Ae&&$.morphTexture!==null,outputColorSpace:ue===null?r.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Ht.workingColorSpace,alphaToCoverage:!!N.alphaToCoverage,map:$e,matcap:Ze,envMap:Ye,envMapMode:Ye&&w.mapping,envMapCubeUVHeight:A,aoMap:_e,lightMap:ye,bumpMap:qe,normalMap:et,displacementMap:xt,emissiveMap:ee,normalMapObjectSpace:et&&N.normalMapType===fS,normalMapTangentSpace:et&&N.normalMapType===_x,packedNormalMap:et&&N.normalMapType===_x&&wA(N.normalMap.format),metalnessMap:Et,roughnessMap:ot,anisotropy:dt,anisotropyMap:Re,clearcoat:Te,clearcoatMap:Pe,clearcoatNormalMap:Be,clearcoatRoughnessMap:Ve,dispersion:Nt,iridescence:z,iridescenceMap:Se,iridescenceThicknessMap:Me,sheen:R,sheenColorMap:ke,sheenRoughnessMap:je,specularMap:Ge,specularColorMap:He,specularIntensityMap:ht,transmission:ie,transmissionMap:pt,thicknessMap:yt,gradientMap:ne,opaque:N.transparent===!1&&N.blending===Kr&&N.alphaToCoverage===!1,alphaMap:ze,alphaTest:le,alphaHash:we,combine:N.combine,mapUv:$e&&E(N.map.channel),aoMapUv:_e&&E(N.aoMap.channel),lightMapUv:ye&&E(N.lightMap.channel),bumpMapUv:qe&&E(N.bumpMap.channel),normalMapUv:et&&E(N.normalMap.channel),displacementMapUv:xt&&E(N.displacementMap.channel),emissiveMapUv:ee&&E(N.emissiveMap.channel),metalnessMapUv:Et&&E(N.metalnessMap.channel),roughnessMapUv:ot&&E(N.roughnessMap.channel),anisotropyMapUv:Re&&E(N.anisotropyMap.channel),clearcoatMapUv:Pe&&E(N.clearcoatMap.channel),clearcoatNormalMapUv:Be&&E(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&E(N.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&E(N.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&E(N.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&E(N.sheenColorMap.channel),sheenRoughnessMapUv:je&&E(N.sheenRoughnessMap.channel),specularMapUv:Ge&&E(N.specularMap.channel),specularColorMapUv:He&&E(N.specularColorMap.channel),specularIntensityMapUv:ht&&E(N.specularIntensityMap.channel),transmissionMapUv:pt&&E(N.transmissionMap.channel),thicknessMapUv:yt&&E(N.thicknessMap.channel),alphaMapUv:ze&&E(N.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(et||dt),vertexNormals:!!X.attributes.normal,vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!X.attributes.uv&&($e||ze),fog:!!te,useFog:N.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:N.wireframe===!1&&(N.flatShading===!0||X.attributes.normal===void 0&&et===!1&&(N.isMeshLambertMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isMeshPhysicalMaterial)),sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:De,skinning:$.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:C,morphTextureStride:K,numDirLights:V.directional.length,numPointLights:V.point.length,numSpotLights:V.spot.length,numSpotLightMaps:V.spotLightMap.length,numRectAreaLights:V.rectArea.length,numHemiLights:V.hemi.length,numDirLightShadows:V.directionalShadowMap.length,numPointLightShadows:V.pointShadowMap.length,numSpotLightShadows:V.spotShadowMap.length,numSpotLightShadowsWithMaps:V.numSpotLightShadowsWithMaps,numLightProbes:V.numLightProbes,numLightProbeGrids:fe.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:N.dithering,shadowMapEnabled:r.shadowMap.enabled&&j.length>0,shadowMapType:r.shadowMap.type,toneMapping:ge,decodeVideoTexture:$e&&N.map.isVideoTexture===!0&&Ht.getTransfer(N.map.colorSpace)===en,decodeVideoTextureEmissive:ee&&N.emissiveMap.isVideoTexture===!0&&Ht.getTransfer(N.emissiveMap.colorSpace)===en,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===wa,flipSided:N.side===li,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:Fe&&N.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&N.extensions.multiDraw===!0||Ue)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return Ie.vertexUv1s=m.has(1),Ie.vertexUv2s=m.has(2),Ie.vertexUv3s=m.has(3),m.clear(),Ie}function S(N){const V=[];if(N.shaderID?V.push(N.shaderID):(V.push(N.customVertexShaderID),V.push(N.customFragmentShaderID)),N.defines!==void 0)for(const j in N.defines)V.push(j),V.push(N.defines[j]);return N.isRawShaderMaterial===!1&&(y(V,N),I(V,N),V.push(r.outputColorSpace)),V.push(N.customProgramCacheKey),V.join()}function y(N,V){N.push(V.precision),N.push(V.outputColorSpace),N.push(V.envMapMode),N.push(V.envMapCubeUVHeight),N.push(V.mapUv),N.push(V.alphaMapUv),N.push(V.lightMapUv),N.push(V.aoMapUv),N.push(V.bumpMapUv),N.push(V.normalMapUv),N.push(V.displacementMapUv),N.push(V.emissiveMapUv),N.push(V.metalnessMapUv),N.push(V.roughnessMapUv),N.push(V.anisotropyMapUv),N.push(V.clearcoatMapUv),N.push(V.clearcoatNormalMapUv),N.push(V.clearcoatRoughnessMapUv),N.push(V.iridescenceMapUv),N.push(V.iridescenceThicknessMapUv),N.push(V.sheenColorMapUv),N.push(V.sheenRoughnessMapUv),N.push(V.specularMapUv),N.push(V.specularColorMapUv),N.push(V.specularIntensityMapUv),N.push(V.transmissionMapUv),N.push(V.thicknessMapUv),N.push(V.combine),N.push(V.fogExp2),N.push(V.sizeAttenuation),N.push(V.morphTargetsCount),N.push(V.morphAttributeCount),N.push(V.numDirLights),N.push(V.numPointLights),N.push(V.numSpotLights),N.push(V.numSpotLightMaps),N.push(V.numHemiLights),N.push(V.numRectAreaLights),N.push(V.numDirLightShadows),N.push(V.numPointLightShadows),N.push(V.numSpotLightShadows),N.push(V.numSpotLightShadowsWithMaps),N.push(V.numLightProbes),N.push(V.shadowMapType),N.push(V.toneMapping),N.push(V.numClippingPlanes),N.push(V.numClipIntersection),N.push(V.depthPacking)}function I(N,V){f.disableAll(),V.instancing&&f.enable(0),V.instancingColor&&f.enable(1),V.instancingMorph&&f.enable(2),V.matcap&&f.enable(3),V.envMap&&f.enable(4),V.normalMapObjectSpace&&f.enable(5),V.normalMapTangentSpace&&f.enable(6),V.clearcoat&&f.enable(7),V.iridescence&&f.enable(8),V.alphaTest&&f.enable(9),V.vertexColors&&f.enable(10),V.vertexAlphas&&f.enable(11),V.vertexUv1s&&f.enable(12),V.vertexUv2s&&f.enable(13),V.vertexUv3s&&f.enable(14),V.vertexTangents&&f.enable(15),V.anisotropy&&f.enable(16),V.alphaHash&&f.enable(17),V.batching&&f.enable(18),V.dispersion&&f.enable(19),V.batchingColor&&f.enable(20),V.gradientMap&&f.enable(21),V.packedNormalMap&&f.enable(22),V.vertexNormals&&f.enable(23),N.push(f.mask),f.disableAll(),V.fog&&f.enable(0),V.useFog&&f.enable(1),V.flatShading&&f.enable(2),V.logarithmicDepthBuffer&&f.enable(3),V.reversedDepthBuffer&&f.enable(4),V.skinning&&f.enable(5),V.morphTargets&&f.enable(6),V.morphNormals&&f.enable(7),V.morphColors&&f.enable(8),V.premultipliedAlpha&&f.enable(9),V.shadowMapEnabled&&f.enable(10),V.doubleSided&&f.enable(11),V.flipSided&&f.enable(12),V.useDepthPacking&&f.enable(13),V.dithering&&f.enable(14),V.transmission&&f.enable(15),V.sheen&&f.enable(16),V.opaque&&f.enable(17),V.pointsUvs&&f.enable(18),V.decodeVideoTexture&&f.enable(19),V.decodeVideoTextureEmissive&&f.enable(20),V.alphaToCoverage&&f.enable(21),V.numLightProbeGrids>0&&f.enable(22),N.push(f.mask)}function G(N){const V=M[N.type];let j;if(V){const W=$i[V];j=KS.clone(W.uniforms)}else j=N.uniforms;return j}function B(N,V){let j=g.get(V);return j!==void 0?++j.usedTimes:(j=new TA(r,V,N,l),h.push(j),g.set(V,j)),j}function Z(N){if(--N.usedTimes===0){const V=h.indexOf(N);h[V]=h[h.length-1],h.pop(),g.delete(N.cacheKey),N.destroy()}}function H(N){p.remove(N)}function k(){p.dispose()}return{getParameters:U,getProgramCacheKey:S,getUniforms:G,acquireProgram:B,releaseProgram:Z,releaseShaderCache:H,programs:h,dispose:k}}function DA(){let r=new WeakMap;function e(f){return r.has(f)}function i(f){let p=r.get(f);return p===void 0&&(p={},r.set(f,p)),p}function s(f){r.delete(f)}function l(f,p,m){r.get(f)[p]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function UA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function pv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function mv(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function f(x){let M=0;return x.isInstancedMesh&&(M+=2),x.isSkinnedMesh&&(M+=1),M}function p(x,M,E,U,S,y){let I=r[e];return I===void 0?(I={id:x.id,object:x,geometry:M,material:E,materialVariant:f(x),groupOrder:U,renderOrder:x.renderOrder,z:S,group:y},r[e]=I):(I.id=x.id,I.object=x,I.geometry=M,I.material=E,I.materialVariant=f(x),I.groupOrder=U,I.renderOrder=x.renderOrder,I.z=S,I.group=y),e++,I}function m(x,M,E,U,S,y){const I=p(x,M,E,U,S,y);E.transmission>0?s.push(I):E.transparent===!0?l.push(I):i.push(I)}function h(x,M,E,U,S,y){const I=p(x,M,E,U,S,y);E.transmission>0?s.unshift(I):E.transparent===!0?l.unshift(I):i.unshift(I)}function g(x,M){i.length>1&&i.sort(x||UA),s.length>1&&s.sort(M||pv),l.length>1&&l.sort(M||pv)}function _(){for(let x=e,M=r.length;x<M;x++){const E=r[x];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:h,finish:_,sort:g}}function LA(){let r=new WeakMap;function e(s,l){const c=r.get(s);let f;return c===void 0?(f=new mv,r.set(s,[f])):l>=c.length?(f=new mv,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:e,dispose:i}}function OA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ce,color:new Pt};break;case"SpotLight":i={position:new ce,direction:new ce,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ce,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ce,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":i={color:new Pt,position:new ce,halfWidth:new ce,halfHeight:new ce};break}return r[e.id]=i,i}}}function PA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let FA=0;function IA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function zA(r){const e=new OA,i=PA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new ce);const l=new ce,c=new Rn,f=new Rn;function p(h){let g=0,_=0,x=0;for(let V=0;V<9;V++)s.probe[V].set(0,0,0);let M=0,E=0,U=0,S=0,y=0,I=0,G=0,B=0,Z=0,H=0,k=0;h.sort(IA);for(let V=0,j=h.length;V<j;V++){const W=h[V],$=W.color,fe=W.intensity,te=W.distance;let X=null;if(W.shadow&&W.shadow.map&&(W.shadow.map.texture.format===$s?X=W.shadow.map.texture:X=W.shadow.map.depthTexture||W.shadow.map.texture),W.isAmbientLight)g+=$.r*fe,_+=$.g*fe,x+=$.b*fe;else if(W.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(W.sh.coefficients[O],fe);k++}else if(W.isDirectionalLight){const O=e.get(W);if(O.color.copy(W.color).multiplyScalar(W.intensity),W.castShadow){const D=W.shadow,w=i.get(W);w.shadowIntensity=D.intensity,w.shadowBias=D.bias,w.shadowNormalBias=D.normalBias,w.shadowRadius=D.radius,w.shadowMapSize=D.mapSize,s.directionalShadow[M]=w,s.directionalShadowMap[M]=X,s.directionalShadowMatrix[M]=W.shadow.matrix,I++}s.directional[M]=O,M++}else if(W.isSpotLight){const O=e.get(W);O.position.setFromMatrixPosition(W.matrixWorld),O.color.copy($).multiplyScalar(fe),O.distance=te,O.coneCos=Math.cos(W.angle),O.penumbraCos=Math.cos(W.angle*(1-W.penumbra)),O.decay=W.decay,s.spot[U]=O;const D=W.shadow;if(W.map&&(s.spotLightMap[Z]=W.map,Z++,D.updateMatrices(W),W.castShadow&&H++),s.spotLightMatrix[U]=D.matrix,W.castShadow){const w=i.get(W);w.shadowIntensity=D.intensity,w.shadowBias=D.bias,w.shadowNormalBias=D.normalBias,w.shadowRadius=D.radius,w.shadowMapSize=D.mapSize,s.spotShadow[U]=w,s.spotShadowMap[U]=X,B++}U++}else if(W.isRectAreaLight){const O=e.get(W);O.color.copy($).multiplyScalar(fe),O.halfWidth.set(W.width*.5,0,0),O.halfHeight.set(0,W.height*.5,0),s.rectArea[S]=O,S++}else if(W.isPointLight){const O=e.get(W);if(O.color.copy(W.color).multiplyScalar(W.intensity),O.distance=W.distance,O.decay=W.decay,W.castShadow){const D=W.shadow,w=i.get(W);w.shadowIntensity=D.intensity,w.shadowBias=D.bias,w.shadowNormalBias=D.normalBias,w.shadowRadius=D.radius,w.shadowMapSize=D.mapSize,w.shadowCameraNear=D.camera.near,w.shadowCameraFar=D.camera.far,s.pointShadow[E]=w,s.pointShadowMap[E]=X,s.pointShadowMatrix[E]=W.shadow.matrix,G++}s.point[E]=O,E++}else if(W.isHemisphereLight){const O=e.get(W);O.skyColor.copy(W.color).multiplyScalar(fe),O.groundColor.copy(W.groundColor).multiplyScalar(fe),s.hemi[y]=O,y++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Je.LTC_FLOAT_1,s.rectAreaLTC2=Je.LTC_FLOAT_2):(s.rectAreaLTC1=Je.LTC_HALF_1,s.rectAreaLTC2=Je.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=x;const N=s.hash;(N.directionalLength!==M||N.pointLength!==E||N.spotLength!==U||N.rectAreaLength!==S||N.hemiLength!==y||N.numDirectionalShadows!==I||N.numPointShadows!==G||N.numSpotShadows!==B||N.numSpotMaps!==Z||N.numLightProbes!==k)&&(s.directional.length=M,s.spot.length=U,s.rectArea.length=S,s.point.length=E,s.hemi.length=y,s.directionalShadow.length=I,s.directionalShadowMap.length=I,s.pointShadow.length=G,s.pointShadowMap.length=G,s.spotShadow.length=B,s.spotShadowMap.length=B,s.directionalShadowMatrix.length=I,s.pointShadowMatrix.length=G,s.spotLightMatrix.length=B+Z-H,s.spotLightMap.length=Z,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=k,N.directionalLength=M,N.pointLength=E,N.spotLength=U,N.rectAreaLength=S,N.hemiLength=y,N.numDirectionalShadows=I,N.numPointShadows=G,N.numSpotShadows=B,N.numSpotMaps=Z,N.numLightProbes=k,s.version=FA++)}function m(h,g){let _=0,x=0,M=0,E=0,U=0;const S=g.matrixWorldInverse;for(let y=0,I=h.length;y<I;y++){const G=h[y];if(G.isDirectionalLight){const B=s.directional[_];B.direction.setFromMatrixPosition(G.matrixWorld),l.setFromMatrixPosition(G.target.matrixWorld),B.direction.sub(l),B.direction.transformDirection(S),_++}else if(G.isSpotLight){const B=s.spot[M];B.position.setFromMatrixPosition(G.matrixWorld),B.position.applyMatrix4(S),B.direction.setFromMatrixPosition(G.matrixWorld),l.setFromMatrixPosition(G.target.matrixWorld),B.direction.sub(l),B.direction.transformDirection(S),M++}else if(G.isRectAreaLight){const B=s.rectArea[E];B.position.setFromMatrixPosition(G.matrixWorld),B.position.applyMatrix4(S),f.identity(),c.copy(G.matrixWorld),c.premultiply(S),f.extractRotation(c),B.halfWidth.set(G.width*.5,0,0),B.halfHeight.set(0,G.height*.5,0),B.halfWidth.applyMatrix4(f),B.halfHeight.applyMatrix4(f),E++}else if(G.isPointLight){const B=s.point[x];B.position.setFromMatrixPosition(G.matrixWorld),B.position.applyMatrix4(S),x++}else if(G.isHemisphereLight){const B=s.hemi[U];B.direction.setFromMatrixPosition(G.matrixWorld),B.direction.transformDirection(S),U++}}}return{setup:p,setupView:m,state:s}}function gv(r){const e=new zA(r),i=[],s=[],l=[];function c(x){_.camera=x,i.length=0,s.length=0,l.length=0}function f(x){i.push(x)}function p(x){s.push(x)}function m(x){l.push(x)}function h(){e.setup(i)}function g(x){e.setupView(i,x)}const _={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:h,setupLightsView:g,pushLight:f,pushShadow:p,pushLightProbeGrid:m}}function BA(r){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let p;return f===void 0?(p=new gv(r),e.set(l,[p])):c>=f.length?(p=new gv(r),f.push(p)):p=f[c],p}function s(){e=new WeakMap}return{get:i,dispose:s}}const HA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GA=`uniform sampler2D shadow_pass;
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
}`,VA=[new ce(1,0,0),new ce(-1,0,0),new ce(0,1,0),new ce(0,-1,0),new ce(0,0,1),new ce(0,0,-1)],kA=[new ce(0,-1,0),new ce(0,-1,0),new ce(0,0,1),new ce(0,0,-1),new ce(0,-1,0),new ce(0,-1,0)],xv=new Rn,nl=new ce,lh=new ce;function jA(r,e,i){let s=new Kv;const l=new Ct,c=new Ct,f=new _n,p=new e1,m=new t1,h={},g=i.maxTextureSize,_={[Ss]:li,[li]:Ss,[wa]:wa},x=new sa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:HA,fragmentShader:GA}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const E=new Pi;E.setAttribute("position",new Oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const U=new Fa(E,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kc;let y=this.type;this.render=function(H,k,N){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||H.length===0)return;this.type===Vb&&(gt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Kc);const V=r.getRenderTarget(),j=r.getActiveCubeFace(),W=r.getActiveMipmapLevel(),$=r.state;$.setBlending(Ua),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const fe=y!==this.type;fe&&k.traverse(function(te){te.material&&(Array.isArray(te.material)?te.material.forEach(X=>X.needsUpdate=!0):te.material.needsUpdate=!0)});for(let te=0,X=H.length;te<X;te++){const O=H[te],D=O.shadow;if(D===void 0){gt("WebGLShadowMap:",O,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;l.copy(D.mapSize);const w=D.getFrameExtents();l.multiply(w),c.copy(D.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/w.x),l.x=c.x*w.x,D.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/w.y),l.y=c.y*w.y,D.mapSize.y=c.y));const A=r.state.buffers.depth.getReversed();if(D.camera._reversedDepth=A,D.map===null||fe===!0){if(D.map!==null&&(D.map.depthTexture!==null&&(D.map.depthTexture.dispose(),D.map.depthTexture=null),D.map.dispose()),this.type===al){if(O.isPointLight){gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}D.map=new ia(l.x,l.y,{format:$s,type:Oa,minFilter:Zn,magFilter:Zn,generateMipmaps:!1}),D.map.texture.name=O.name+".shadowMap",D.map.depthTexture=new eo(l.x,l.y,ea),D.map.depthTexture.name=O.name+".shadowMapDepth",D.map.depthTexture.format=Pa,D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=Gn,D.map.depthTexture.magFilter=Gn}else O.isPointLight?(D.map=new s_(l.x),D.map.depthTexture=new YS(l.x,aa)):(D.map=new ia(l.x,l.y),D.map.depthTexture=new eo(l.x,l.y,aa)),D.map.depthTexture.name=O.name+".shadowMap",D.map.depthTexture.format=Pa,this.type===Kc?(D.map.depthTexture.compareFunction=A?dp:fp,D.map.depthTexture.minFilter=Zn,D.map.depthTexture.magFilter=Zn):(D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=Gn,D.map.depthTexture.magFilter=Gn);D.camera.updateProjectionMatrix()}const L=D.map.isWebGLCubeRenderTarget?6:1;for(let T=0;T<L;T++){if(D.map.isWebGLCubeRenderTarget)r.setRenderTarget(D.map,T),r.clear();else{T===0&&(r.setRenderTarget(D.map),r.clear());const C=D.getViewport(T);f.set(c.x*C.x,c.y*C.y,c.x*C.z,c.y*C.w),$.viewport(f)}if(O.isPointLight){const C=D.camera,K=D.matrix,Q=O.distance||C.far;Q!==C.far&&(C.far=Q,C.updateProjectionMatrix()),nl.setFromMatrixPosition(O.matrixWorld),C.position.copy(nl),lh.copy(C.position),lh.add(VA[T]),C.up.copy(kA[T]),C.lookAt(lh),C.updateMatrixWorld(),K.makeTranslation(-nl.x,-nl.y,-nl.z),xv.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),D._frustum.setFromProjectionMatrix(xv,C.coordinateSystem,C.reversedDepth)}else D.updateMatrices(O);s=D.getFrustum(),B(k,N,D.camera,O,this.type)}D.isPointLightShadow!==!0&&this.type===al&&I(D,N),D.needsUpdate=!1}y=this.type,S.needsUpdate=!1,r.setRenderTarget(V,j,W)};function I(H,k){const N=e.update(U);x.defines.VSM_SAMPLES!==H.blurSamples&&(x.defines.VSM_SAMPLES=H.blurSamples,M.defines.VSM_SAMPLES=H.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new ia(l.x,l.y,{format:$s,type:Oa})),x.uniforms.shadow_pass.value=H.map.depthTexture,x.uniforms.resolution.value=H.mapSize,x.uniforms.radius.value=H.radius,r.setRenderTarget(H.mapPass),r.clear(),r.renderBufferDirect(k,null,N,x,U,null),M.uniforms.shadow_pass.value=H.mapPass.texture,M.uniforms.resolution.value=H.mapSize,M.uniforms.radius.value=H.radius,r.setRenderTarget(H.map),r.clear(),r.renderBufferDirect(k,null,N,M,U,null)}function G(H,k,N,V){let j=null;const W=N.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(W!==void 0)j=W;else if(j=N.isPointLight===!0?m:p,r.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const $=j.uuid,fe=k.uuid;let te=h[$];te===void 0&&(te={},h[$]=te);let X=te[fe];X===void 0&&(X=j.clone(),te[fe]=X,k.addEventListener("dispose",Z)),j=X}if(j.visible=k.visible,j.wireframe=k.wireframe,V===al?j.side=k.shadowSide!==null?k.shadowSide:k.side:j.side=k.shadowSide!==null?k.shadowSide:_[k.side],j.alphaMap=k.alphaMap,j.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,j.map=k.map,j.clipShadows=k.clipShadows,j.clippingPlanes=k.clippingPlanes,j.clipIntersection=k.clipIntersection,j.displacementMap=k.displacementMap,j.displacementScale=k.displacementScale,j.displacementBias=k.displacementBias,j.wireframeLinewidth=k.wireframeLinewidth,j.linewidth=k.linewidth,N.isPointLight===!0&&j.isMeshDistanceMaterial===!0){const $=r.properties.get(j);$.light=N}return j}function B(H,k,N,V,j){if(H.visible===!1)return;if(H.layers.test(k.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&j===al)&&(!H.frustumCulled||s.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,H.matrixWorld);const fe=e.update(H),te=H.material;if(Array.isArray(te)){const X=fe.groups;for(let O=0,D=X.length;O<D;O++){const w=X[O],A=te[w.materialIndex];if(A&&A.visible){const L=G(H,A,V,j);H.onBeforeShadow(r,H,k,N,fe,L,w),r.renderBufferDirect(N,null,fe,L,H,w),H.onAfterShadow(r,H,k,N,fe,L,w)}}}else if(te.visible){const X=G(H,te,V,j);H.onBeforeShadow(r,H,k,N,fe,X,null),r.renderBufferDirect(N,null,fe,X,H,null),H.onAfterShadow(r,H,k,N,fe,X,null)}}const $=H.children;for(let fe=0,te=$.length;fe<te;fe++)B($[fe],k,N,V,j)}function Z(H){H.target.removeEventListener("dispose",Z);for(const N in h){const V=h[N],j=H.target.uuid;j in V&&(V[j].dispose(),delete V[j])}}}function WA(r,e){function i(){let ne=!1;const ze=new _n;let le=null;const we=new _n(0,0,0,0);return{setMask:function(Fe){le!==Fe&&!ne&&(r.colorMask(Fe,Fe,Fe,Fe),le=Fe)},setLocked:function(Fe){ne=Fe},setClear:function(Fe,ge,Ie,Le,Xe){Xe===!0&&(Fe*=Le,ge*=Le,Ie*=Le),ze.set(Fe,ge,Ie,Le),we.equals(ze)===!1&&(r.clearColor(Fe,ge,Ie,Le),we.copy(ze))},reset:function(){ne=!1,le=null,we.set(-1,0,0,0)}}}function s(){let ne=!1,ze=!1,le=null,we=null,Fe=null;return{setReversed:function(ge){if(ze!==ge){const Ie=e.get("EXT_clip_control");ge?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),ze=ge;const Le=Fe;Fe=null,this.setClear(Le)}},getReversed:function(){return ze},setTest:function(ge){ge?ue(r.DEPTH_TEST):De(r.DEPTH_TEST)},setMask:function(ge){le!==ge&&!ne&&(r.depthMask(ge),le=ge)},setFunc:function(ge){if(ze&&(ge=bS[ge]),we!==ge){switch(ge){case ph:r.depthFunc(r.NEVER);break;case mh:r.depthFunc(r.ALWAYS);break;case gh:r.depthFunc(r.LESS);break;case Jr:r.depthFunc(r.LEQUAL);break;case xh:r.depthFunc(r.EQUAL);break;case vh:r.depthFunc(r.GEQUAL);break;case _h:r.depthFunc(r.GREATER);break;case yh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}we=ge}},setLocked:function(ge){ne=ge},setClear:function(ge){Fe!==ge&&(Fe=ge,ze&&(ge=1-ge),r.clearDepth(ge))},reset:function(){ne=!1,le=null,we=null,Fe=null,ze=!1}}}function l(){let ne=!1,ze=null,le=null,we=null,Fe=null,ge=null,Ie=null,Le=null,Xe=null;return{setTest:function(rt){ne||(rt?ue(r.STENCIL_TEST):De(r.STENCIL_TEST))},setMask:function(rt){ze!==rt&&!ne&&(r.stencilMask(rt),ze=rt)},setFunc:function(rt,bt,zt){(le!==rt||we!==bt||Fe!==zt)&&(r.stencilFunc(rt,bt,zt),le=rt,we=bt,Fe=zt)},setOp:function(rt,bt,zt){(ge!==rt||Ie!==bt||Le!==zt)&&(r.stencilOp(rt,bt,zt),ge=rt,Ie=bt,Le=zt)},setLocked:function(rt){ne=rt},setClear:function(rt){Xe!==rt&&(r.clearStencil(rt),Xe=rt)},reset:function(){ne=!1,ze=null,le=null,we=null,Fe=null,ge=null,Ie=null,Le=null,Xe=null}}}const c=new i,f=new s,p=new l,m=new WeakMap,h=new WeakMap;let g={},_={},x={},M=new WeakMap,E=[],U=null,S=!1,y=null,I=null,G=null,B=null,Z=null,H=null,k=null,N=new Pt(0,0,0),V=0,j=!1,W=null,$=null,fe=null,te=null,X=null;const O=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,w=0;const A=r.getParameter(r.VERSION);A.indexOf("WebGL")!==-1?(w=parseFloat(/^WebGL (\d)/.exec(A)[1]),D=w>=1):A.indexOf("OpenGL ES")!==-1&&(w=parseFloat(/^OpenGL ES (\d)/.exec(A)[1]),D=w>=2);let L=null,T={};const C=r.getParameter(r.SCISSOR_BOX),K=r.getParameter(r.VIEWPORT),Q=new _n().fromArray(C),Y=new _n().fromArray(K);function q(ne,ze,le,we){const Fe=new Uint8Array(4),ge=r.createTexture();r.bindTexture(ne,ge),r.texParameteri(ne,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(ne,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ie=0;Ie<le;Ie++)ne===r.TEXTURE_3D||ne===r.TEXTURE_2D_ARRAY?r.texImage3D(ze,0,r.RGBA,1,1,we,0,r.RGBA,r.UNSIGNED_BYTE,Fe):r.texImage2D(ze+Ie,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Fe);return ge}const re={};re[r.TEXTURE_2D]=q(r.TEXTURE_2D,r.TEXTURE_2D,1),re[r.TEXTURE_CUBE_MAP]=q(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[r.TEXTURE_2D_ARRAY]=q(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),re[r.TEXTURE_3D]=q(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),p.setClear(0),ue(r.DEPTH_TEST),f.setFunc(Jr),qe(!1),et(mx),ue(r.CULL_FACE),_e(Ua);function ue(ne){g[ne]!==!0&&(r.enable(ne),g[ne]=!0)}function De(ne){g[ne]!==!1&&(r.disable(ne),g[ne]=!1)}function Ae(ne,ze){return x[ne]!==ze?(r.bindFramebuffer(ne,ze),x[ne]=ze,ne===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=ze),ne===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=ze),!0):!1}function Ue(ne,ze){let le=E,we=!1;if(ne){le=M.get(ze),le===void 0&&(le=[],M.set(ze,le));const Fe=ne.textures;if(le.length!==Fe.length||le[0]!==r.COLOR_ATTACHMENT0){for(let ge=0,Ie=Fe.length;ge<Ie;ge++)le[ge]=r.COLOR_ATTACHMENT0+ge;le.length=Fe.length,we=!0}}else le[0]!==r.BACK&&(le[0]=r.BACK,we=!0);we&&r.drawBuffers(le)}function $e(ne){return U!==ne?(r.useProgram(ne),U=ne,!0):!1}const Ze={[qs]:r.FUNC_ADD,[jb]:r.FUNC_SUBTRACT,[Wb]:r.FUNC_REVERSE_SUBTRACT};Ze[Xb]=r.MIN,Ze[qb]=r.MAX;const Ye={[Yb]:r.ZERO,[Zb]:r.ONE,[Kb]:r.SRC_COLOR,[dh]:r.SRC_ALPHA,[nS]:r.SRC_ALPHA_SATURATE,[eS]:r.DST_COLOR,[Jb]:r.DST_ALPHA,[Qb]:r.ONE_MINUS_SRC_COLOR,[hh]:r.ONE_MINUS_SRC_ALPHA,[tS]:r.ONE_MINUS_DST_COLOR,[$b]:r.ONE_MINUS_DST_ALPHA,[iS]:r.CONSTANT_COLOR,[aS]:r.ONE_MINUS_CONSTANT_COLOR,[sS]:r.CONSTANT_ALPHA,[rS]:r.ONE_MINUS_CONSTANT_ALPHA};function _e(ne,ze,le,we,Fe,ge,Ie,Le,Xe,rt){if(ne===Ua){S===!0&&(De(r.BLEND),S=!1);return}if(S===!1&&(ue(r.BLEND),S=!0),ne!==kb){if(ne!==y||rt!==j){if((I!==qs||Z!==qs)&&(r.blendEquation(r.FUNC_ADD),I=qs,Z=qs),rt)switch(ne){case Kr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case gx:r.blendFunc(r.ONE,r.ONE);break;case xx:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case vx:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Gt("WebGLState: Invalid blending: ",ne);break}else switch(ne){case Kr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case gx:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case xx:Gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vx:Gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Gt("WebGLState: Invalid blending: ",ne);break}G=null,B=null,H=null,k=null,N.set(0,0,0),V=0,y=ne,j=rt}return}Fe=Fe||ze,ge=ge||le,Ie=Ie||we,(ze!==I||Fe!==Z)&&(r.blendEquationSeparate(Ze[ze],Ze[Fe]),I=ze,Z=Fe),(le!==G||we!==B||ge!==H||Ie!==k)&&(r.blendFuncSeparate(Ye[le],Ye[we],Ye[ge],Ye[Ie]),G=le,B=we,H=ge,k=Ie),(Le.equals(N)===!1||Xe!==V)&&(r.blendColor(Le.r,Le.g,Le.b,Xe),N.copy(Le),V=Xe),y=ne,j=!1}function ye(ne,ze){ne.side===wa?De(r.CULL_FACE):ue(r.CULL_FACE);let le=ne.side===li;ze&&(le=!le),qe(le),ne.blending===Kr&&ne.transparent===!1?_e(Ua):_e(ne.blending,ne.blendEquation,ne.blendSrc,ne.blendDst,ne.blendEquationAlpha,ne.blendSrcAlpha,ne.blendDstAlpha,ne.blendColor,ne.blendAlpha,ne.premultipliedAlpha),f.setFunc(ne.depthFunc),f.setTest(ne.depthTest),f.setMask(ne.depthWrite),c.setMask(ne.colorWrite);const we=ne.stencilWrite;p.setTest(we),we&&(p.setMask(ne.stencilWriteMask),p.setFunc(ne.stencilFunc,ne.stencilRef,ne.stencilFuncMask),p.setOp(ne.stencilFail,ne.stencilZFail,ne.stencilZPass)),ee(ne.polygonOffset,ne.polygonOffsetFactor,ne.polygonOffsetUnits),ne.alphaToCoverage===!0?ue(r.SAMPLE_ALPHA_TO_COVERAGE):De(r.SAMPLE_ALPHA_TO_COVERAGE)}function qe(ne){W!==ne&&(ne?r.frontFace(r.CW):r.frontFace(r.CCW),W=ne)}function et(ne){ne!==Hb?(ue(r.CULL_FACE),ne!==$&&(ne===mx?r.cullFace(r.BACK):ne===Gb?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):De(r.CULL_FACE),$=ne}function xt(ne){ne!==fe&&(D&&r.lineWidth(ne),fe=ne)}function ee(ne,ze,le){ne?(ue(r.POLYGON_OFFSET_FILL),(te!==ze||X!==le)&&(te=ze,X=le,f.getReversed()&&(ze=-ze),r.polygonOffset(ze,le))):De(r.POLYGON_OFFSET_FILL)}function Et(ne){ne?ue(r.SCISSOR_TEST):De(r.SCISSOR_TEST)}function ot(ne){ne===void 0&&(ne=r.TEXTURE0+O-1),L!==ne&&(r.activeTexture(ne),L=ne)}function dt(ne,ze,le){le===void 0&&(L===null?le=r.TEXTURE0+O-1:le=L);let we=T[le];we===void 0&&(we={type:void 0,texture:void 0},T[le]=we),(we.type!==ne||we.texture!==ze)&&(L!==le&&(r.activeTexture(le),L=le),r.bindTexture(ne,ze||re[ne]),we.type=ne,we.texture=ze)}function Te(){const ne=T[L];ne!==void 0&&ne.type!==void 0&&(r.bindTexture(ne.type,null),ne.type=void 0,ne.texture=void 0)}function Nt(){try{r.compressedTexImage2D(...arguments)}catch(ne){Gt("WebGLState:",ne)}}function z(){try{r.compressedTexImage3D(...arguments)}catch(ne){Gt("WebGLState:",ne)}}function R(){try{r.texSubImage2D(...arguments)}catch(ne){Gt("WebGLState:",ne)}}function ie(){try{r.texSubImage3D(...arguments)}catch(ne){Gt("WebGLState:",ne)}}function Re(){try{r.compressedTexSubImage2D(...arguments)}catch(ne){Gt("WebGLState:",ne)}}function Pe(){try{r.compressedTexSubImage3D(...arguments)}catch(ne){Gt("WebGLState:",ne)}}function Be(){try{r.texStorage2D(...arguments)}catch(ne){Gt("WebGLState:",ne)}}function Ve(){try{r.texStorage3D(...arguments)}catch(ne){Gt("WebGLState:",ne)}}function Se(){try{r.texImage2D(...arguments)}catch(ne){Gt("WebGLState:",ne)}}function Me(){try{r.texImage3D(...arguments)}catch(ne){Gt("WebGLState:",ne)}}function ke(ne){return _[ne]!==void 0?_[ne]:r.getParameter(ne)}function je(ne,ze){_[ne]!==ze&&(r.pixelStorei(ne,ze),_[ne]=ze)}function Ge(ne){Q.equals(ne)===!1&&(r.scissor(ne.x,ne.y,ne.z,ne.w),Q.copy(ne))}function He(ne){Y.equals(ne)===!1&&(r.viewport(ne.x,ne.y,ne.z,ne.w),Y.copy(ne))}function ht(ne,ze){let le=h.get(ze);le===void 0&&(le=new WeakMap,h.set(ze,le));let we=le.get(ne);we===void 0&&(we=r.getUniformBlockIndex(ze,ne.name),le.set(ne,we))}function pt(ne,ze){const we=h.get(ze).get(ne);m.get(ze)!==we&&(r.uniformBlockBinding(ze,we,ne.__bindingPointIndex),m.set(ze,we))}function yt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),g={},_={},L=null,T={},x={},M=new WeakMap,E=[],U=null,S=!1,y=null,I=null,G=null,B=null,Z=null,H=null,k=null,N=new Pt(0,0,0),V=0,j=!1,W=null,$=null,fe=null,te=null,X=null,Q.set(0,0,r.canvas.width,r.canvas.height),Y.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),p.reset()}return{buffers:{color:c,depth:f,stencil:p},enable:ue,disable:De,bindFramebuffer:Ae,drawBuffers:Ue,useProgram:$e,setBlending:_e,setMaterial:ye,setFlipSided:qe,setCullFace:et,setLineWidth:xt,setPolygonOffset:ee,setScissorTest:Et,activeTexture:ot,bindTexture:dt,unbindTexture:Te,compressedTexImage2D:Nt,compressedTexImage3D:z,texImage2D:Se,texImage3D:Me,pixelStorei:je,getParameter:ke,updateUBOMapping:ht,uniformBlockBinding:pt,texStorage2D:Be,texStorage3D:Ve,texSubImage2D:R,texSubImage3D:ie,compressedTexSubImage2D:Re,compressedTexSubImage3D:Pe,scissor:Ge,viewport:He,reset:yt}}function XA(r,e,i,s,l,c,f){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ct,g=new WeakMap,_=new Set;let x;const M=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function U(z,R){return E?new OffscreenCanvas(z,R):cu("canvas")}function S(z,R,ie){let Re=1;const Pe=Nt(z);if((Pe.width>ie||Pe.height>ie)&&(Re=ie/Math.max(Pe.width,Pe.height)),Re<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const Be=Math.floor(Re*Pe.width),Ve=Math.floor(Re*Pe.height);x===void 0&&(x=U(Be,Ve));const Se=R?U(Be,Ve):x;return Se.width=Be,Se.height=Ve,Se.getContext("2d").drawImage(z,0,0,Be,Ve),gt("WebGLRenderer: Texture has been resized from ("+Pe.width+"x"+Pe.height+") to ("+Be+"x"+Ve+")."),Se}else return"data"in z&&gt("WebGLRenderer: Image in DataTexture is too big ("+Pe.width+"x"+Pe.height+")."),z;return z}function y(z){return z.generateMipmaps}function I(z){r.generateMipmap(z)}function G(z){return z.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?r.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function B(z,R,ie,Re,Pe,Be=!1){if(z!==null){if(r[z]!==void 0)return r[z];gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let Ve;Re&&(Ve=e.get("EXT_texture_norm16"),Ve||gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Se=R;if(R===r.RED&&(ie===r.FLOAT&&(Se=r.R32F),ie===r.HALF_FLOAT&&(Se=r.R16F),ie===r.UNSIGNED_BYTE&&(Se=r.R8),ie===r.UNSIGNED_SHORT&&Ve&&(Se=Ve.R16_EXT),ie===r.SHORT&&Ve&&(Se=Ve.R16_SNORM_EXT)),R===r.RED_INTEGER&&(ie===r.UNSIGNED_BYTE&&(Se=r.R8UI),ie===r.UNSIGNED_SHORT&&(Se=r.R16UI),ie===r.UNSIGNED_INT&&(Se=r.R32UI),ie===r.BYTE&&(Se=r.R8I),ie===r.SHORT&&(Se=r.R16I),ie===r.INT&&(Se=r.R32I)),R===r.RG&&(ie===r.FLOAT&&(Se=r.RG32F),ie===r.HALF_FLOAT&&(Se=r.RG16F),ie===r.UNSIGNED_BYTE&&(Se=r.RG8),ie===r.UNSIGNED_SHORT&&Ve&&(Se=Ve.RG16_EXT),ie===r.SHORT&&Ve&&(Se=Ve.RG16_SNORM_EXT)),R===r.RG_INTEGER&&(ie===r.UNSIGNED_BYTE&&(Se=r.RG8UI),ie===r.UNSIGNED_SHORT&&(Se=r.RG16UI),ie===r.UNSIGNED_INT&&(Se=r.RG32UI),ie===r.BYTE&&(Se=r.RG8I),ie===r.SHORT&&(Se=r.RG16I),ie===r.INT&&(Se=r.RG32I)),R===r.RGB_INTEGER&&(ie===r.UNSIGNED_BYTE&&(Se=r.RGB8UI),ie===r.UNSIGNED_SHORT&&(Se=r.RGB16UI),ie===r.UNSIGNED_INT&&(Se=r.RGB32UI),ie===r.BYTE&&(Se=r.RGB8I),ie===r.SHORT&&(Se=r.RGB16I),ie===r.INT&&(Se=r.RGB32I)),R===r.RGBA_INTEGER&&(ie===r.UNSIGNED_BYTE&&(Se=r.RGBA8UI),ie===r.UNSIGNED_SHORT&&(Se=r.RGBA16UI),ie===r.UNSIGNED_INT&&(Se=r.RGBA32UI),ie===r.BYTE&&(Se=r.RGBA8I),ie===r.SHORT&&(Se=r.RGBA16I),ie===r.INT&&(Se=r.RGBA32I)),R===r.RGB&&(ie===r.UNSIGNED_SHORT&&Ve&&(Se=Ve.RGB16_EXT),ie===r.SHORT&&Ve&&(Se=Ve.RGB16_SNORM_EXT),ie===r.UNSIGNED_INT_5_9_9_9_REV&&(Se=r.RGB9_E5),ie===r.UNSIGNED_INT_10F_11F_11F_REV&&(Se=r.R11F_G11F_B10F)),R===r.RGBA){const Me=Be?ou:Ht.getTransfer(Pe);ie===r.FLOAT&&(Se=r.RGBA32F),ie===r.HALF_FLOAT&&(Se=r.RGBA16F),ie===r.UNSIGNED_BYTE&&(Se=Me===en?r.SRGB8_ALPHA8:r.RGBA8),ie===r.UNSIGNED_SHORT&&Ve&&(Se=Ve.RGBA16_EXT),ie===r.SHORT&&Ve&&(Se=Ve.RGBA16_SNORM_EXT),ie===r.UNSIGNED_SHORT_4_4_4_4&&(Se=r.RGBA4),ie===r.UNSIGNED_SHORT_5_5_5_1&&(Se=r.RGB5_A1)}return(Se===r.R16F||Se===r.R32F||Se===r.RG16F||Se===r.RG32F||Se===r.RGBA16F||Se===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Se}function Z(z,R){let ie;return z?R===null||R===aa||R===ol?ie=r.DEPTH24_STENCIL8:R===ea?ie=r.DEPTH32F_STENCIL8:R===rl&&(ie=r.DEPTH24_STENCIL8,gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===aa||R===ol?ie=r.DEPTH_COMPONENT24:R===ea?ie=r.DEPTH_COMPONENT32F:R===rl&&(ie=r.DEPTH_COMPONENT16),ie}function H(z,R){return y(z)===!0||z.isFramebufferTexture&&z.minFilter!==Gn&&z.minFilter!==Zn?Math.log2(Math.max(R.width,R.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?R.mipmaps.length:1}function k(z){const R=z.target;R.removeEventListener("dispose",k),V(R),R.isVideoTexture&&g.delete(R),R.isHTMLTexture&&_.delete(R)}function N(z){const R=z.target;R.removeEventListener("dispose",N),W(R)}function V(z){const R=s.get(z);if(R.__webglInit===void 0)return;const ie=z.source,Re=M.get(ie);if(Re){const Pe=Re[R.__cacheKey];Pe.usedTimes--,Pe.usedTimes===0&&j(z),Object.keys(Re).length===0&&M.delete(ie)}s.remove(z)}function j(z){const R=s.get(z);r.deleteTexture(R.__webglTexture);const ie=z.source,Re=M.get(ie);delete Re[R.__cacheKey],f.memory.textures--}function W(z){const R=s.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),s.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let Re=0;Re<6;Re++){if(Array.isArray(R.__webglFramebuffer[Re]))for(let Pe=0;Pe<R.__webglFramebuffer[Re].length;Pe++)r.deleteFramebuffer(R.__webglFramebuffer[Re][Pe]);else r.deleteFramebuffer(R.__webglFramebuffer[Re]);R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer[Re])}else{if(Array.isArray(R.__webglFramebuffer))for(let Re=0;Re<R.__webglFramebuffer.length;Re++)r.deleteFramebuffer(R.__webglFramebuffer[Re]);else r.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&r.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let Re=0;Re<R.__webglColorRenderbuffer.length;Re++)R.__webglColorRenderbuffer[Re]&&r.deleteRenderbuffer(R.__webglColorRenderbuffer[Re]);R.__webglDepthRenderbuffer&&r.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const ie=z.textures;for(let Re=0,Pe=ie.length;Re<Pe;Re++){const Be=s.get(ie[Re]);Be.__webglTexture&&(r.deleteTexture(Be.__webglTexture),f.memory.textures--),s.remove(ie[Re])}s.remove(z)}let $=0;function fe(){$=0}function te(){return $}function X(z){$=z}function O(){const z=$;return z>=l.maxTextures&&gt("WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+l.maxTextures),$+=1,z}function D(z){const R=[];return R.push(z.wrapS),R.push(z.wrapT),R.push(z.wrapR||0),R.push(z.magFilter),R.push(z.minFilter),R.push(z.anisotropy),R.push(z.internalFormat),R.push(z.format),R.push(z.type),R.push(z.generateMipmaps),R.push(z.premultiplyAlpha),R.push(z.flipY),R.push(z.unpackAlignment),R.push(z.colorSpace),R.join()}function w(z,R){const ie=s.get(z);if(z.isVideoTexture&&dt(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&ie.__version!==z.version){const Re=z.image;if(Re===null)gt("WebGLRenderer: Texture marked for update but no image data found.");else if(Re.complete===!1)gt("WebGLRenderer: Texture marked for update but image is incomplete");else{De(ie,z,R);return}}else z.isExternalTexture&&(ie.__webglTexture=z.sourceTexture?z.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,ie.__webglTexture,r.TEXTURE0+R)}function A(z,R){const ie=s.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&ie.__version!==z.version){De(ie,z,R);return}else z.isExternalTexture&&(ie.__webglTexture=z.sourceTexture?z.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,ie.__webglTexture,r.TEXTURE0+R)}function L(z,R){const ie=s.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&ie.__version!==z.version){De(ie,z,R);return}i.bindTexture(r.TEXTURE_3D,ie.__webglTexture,r.TEXTURE0+R)}function T(z,R){const ie=s.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&ie.__version!==z.version){Ae(ie,z,R);return}i.bindTexture(r.TEXTURE_CUBE_MAP,ie.__webglTexture,r.TEXTURE0+R)}const C={[bh]:r.REPEAT,[Da]:r.CLAMP_TO_EDGE,[Sh]:r.MIRRORED_REPEAT},K={[Gn]:r.NEAREST,[cS]:r.NEAREST_MIPMAP_NEAREST,[Ec]:r.NEAREST_MIPMAP_LINEAR,[Zn]:r.LINEAR,[Ud]:r.LINEAR_MIPMAP_NEAREST,[Ks]:r.LINEAR_MIPMAP_LINEAR},Q={[dS]:r.NEVER,[xS]:r.ALWAYS,[hS]:r.LESS,[fp]:r.LEQUAL,[pS]:r.EQUAL,[dp]:r.GEQUAL,[mS]:r.GREATER,[gS]:r.NOTEQUAL};function Y(z,R){if(R.type===ea&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===Zn||R.magFilter===Ud||R.magFilter===Ec||R.magFilter===Ks||R.minFilter===Zn||R.minFilter===Ud||R.minFilter===Ec||R.minFilter===Ks)&&gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(z,r.TEXTURE_WRAP_S,C[R.wrapS]),r.texParameteri(z,r.TEXTURE_WRAP_T,C[R.wrapT]),(z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY)&&r.texParameteri(z,r.TEXTURE_WRAP_R,C[R.wrapR]),r.texParameteri(z,r.TEXTURE_MAG_FILTER,K[R.magFilter]),r.texParameteri(z,r.TEXTURE_MIN_FILTER,K[R.minFilter]),R.compareFunction&&(r.texParameteri(z,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(z,r.TEXTURE_COMPARE_FUNC,Q[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Gn||R.minFilter!==Ec&&R.minFilter!==Ks||R.type===ea&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||s.get(R).__currentAnisotropy){const ie=e.get("EXT_texture_filter_anisotropic");r.texParameterf(z,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,l.getMaxAnisotropy())),s.get(R).__currentAnisotropy=R.anisotropy}}}function q(z,R){let ie=!1;z.__webglInit===void 0&&(z.__webglInit=!0,R.addEventListener("dispose",k));const Re=R.source;let Pe=M.get(Re);Pe===void 0&&(Pe={},M.set(Re,Pe));const Be=D(R);if(Be!==z.__cacheKey){Pe[Be]===void 0&&(Pe[Be]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,ie=!0),Pe[Be].usedTimes++;const Ve=Pe[z.__cacheKey];Ve!==void 0&&(Pe[z.__cacheKey].usedTimes--,Ve.usedTimes===0&&j(R)),z.__cacheKey=Be,z.__webglTexture=Pe[Be].texture}return ie}function re(z,R,ie){return Math.floor(Math.floor(z/ie)/R)}function ue(z,R,ie,Re){const Be=z.updateRanges;if(Be.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,R.width,R.height,ie,Re,R.data);else{Be.sort((je,Ge)=>je.start-Ge.start);let Ve=0;for(let je=1;je<Be.length;je++){const Ge=Be[Ve],He=Be[je],ht=Ge.start+Ge.count,pt=re(He.start,R.width,4),yt=re(Ge.start,R.width,4);He.start<=ht+1&&pt===yt&&re(He.start+He.count-1,R.width,4)===pt?Ge.count=Math.max(Ge.count,He.start+He.count-Ge.start):(++Ve,Be[Ve]=He)}Be.length=Ve+1;const Se=i.getParameter(r.UNPACK_ROW_LENGTH),Me=i.getParameter(r.UNPACK_SKIP_PIXELS),ke=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,R.width);for(let je=0,Ge=Be.length;je<Ge;je++){const He=Be[je],ht=Math.floor(He.start/4),pt=Math.ceil(He.count/4),yt=ht%R.width,ne=Math.floor(ht/R.width),ze=pt,le=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,yt),i.pixelStorei(r.UNPACK_SKIP_ROWS,ne),i.texSubImage2D(r.TEXTURE_2D,0,yt,ne,ze,le,ie,Re,R.data)}z.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,Se),i.pixelStorei(r.UNPACK_SKIP_PIXELS,Me),i.pixelStorei(r.UNPACK_SKIP_ROWS,ke)}}function De(z,R,ie){let Re=r.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(Re=r.TEXTURE_2D_ARRAY),R.isData3DTexture&&(Re=r.TEXTURE_3D);const Pe=q(z,R),Be=R.source;i.bindTexture(Re,z.__webglTexture,r.TEXTURE0+ie);const Ve=s.get(Be);if(Be.version!==Ve.__version||Pe===!0){if(i.activeTexture(r.TEXTURE0+ie),(typeof ImageBitmap<"u"&&R.image instanceof ImageBitmap)===!1){const le=Ht.getPrimaries(Ht.workingColorSpace),we=R.colorSpace===ys?null:Ht.getPrimaries(R.colorSpace),Fe=R.colorSpace===ys||le===we?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe)}i.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment);let Me=S(R.image,!1,l.maxTextureSize);Me=Te(R,Me);const ke=c.convert(R.format,R.colorSpace),je=c.convert(R.type);let Ge=B(R.internalFormat,ke,je,R.normalized,R.colorSpace,R.isVideoTexture);Y(Re,R);let He;const ht=R.mipmaps,pt=R.isVideoTexture!==!0,yt=Ve.__version===void 0||Pe===!0,ne=Be.dataReady,ze=H(R,Me);if(R.isDepthTexture)Ge=Z(R.format===Qs,R.type),yt&&(pt?i.texStorage2D(r.TEXTURE_2D,1,Ge,Me.width,Me.height):i.texImage2D(r.TEXTURE_2D,0,Ge,Me.width,Me.height,0,ke,je,null));else if(R.isDataTexture)if(ht.length>0){pt&&yt&&i.texStorage2D(r.TEXTURE_2D,ze,Ge,ht[0].width,ht[0].height);for(let le=0,we=ht.length;le<we;le++)He=ht[le],pt?ne&&i.texSubImage2D(r.TEXTURE_2D,le,0,0,He.width,He.height,ke,je,He.data):i.texImage2D(r.TEXTURE_2D,le,Ge,He.width,He.height,0,ke,je,He.data);R.generateMipmaps=!1}else pt?(yt&&i.texStorage2D(r.TEXTURE_2D,ze,Ge,Me.width,Me.height),ne&&ue(R,Me,ke,je)):i.texImage2D(r.TEXTURE_2D,0,Ge,Me.width,Me.height,0,ke,je,Me.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){pt&&yt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,ze,Ge,ht[0].width,ht[0].height,Me.depth);for(let le=0,we=ht.length;le<we;le++)if(He=ht[le],R.format!==Wi)if(ke!==null)if(pt){if(ne)if(R.layerUpdates.size>0){const Fe=Yx(He.width,He.height,R.format,R.type);for(const ge of R.layerUpdates){const Ie=He.data.subarray(ge*Fe/He.data.BYTES_PER_ELEMENT,(ge+1)*Fe/He.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,le,0,0,ge,He.width,He.height,1,ke,Ie)}R.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,le,0,0,0,He.width,He.height,Me.depth,ke,He.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,le,Ge,He.width,He.height,Me.depth,0,He.data,0,0);else gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pt?ne&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,le,0,0,0,He.width,He.height,Me.depth,ke,je,He.data):i.texImage3D(r.TEXTURE_2D_ARRAY,le,Ge,He.width,He.height,Me.depth,0,ke,je,He.data)}else{pt&&yt&&i.texStorage2D(r.TEXTURE_2D,ze,Ge,ht[0].width,ht[0].height);for(let le=0,we=ht.length;le<we;le++)He=ht[le],R.format!==Wi?ke!==null?pt?ne&&i.compressedTexSubImage2D(r.TEXTURE_2D,le,0,0,He.width,He.height,ke,He.data):i.compressedTexImage2D(r.TEXTURE_2D,le,Ge,He.width,He.height,0,He.data):gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pt?ne&&i.texSubImage2D(r.TEXTURE_2D,le,0,0,He.width,He.height,ke,je,He.data):i.texImage2D(r.TEXTURE_2D,le,Ge,He.width,He.height,0,ke,je,He.data)}else if(R.isDataArrayTexture)if(pt){if(yt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,ze,Ge,Me.width,Me.height,Me.depth),ne)if(R.layerUpdates.size>0){const le=Yx(Me.width,Me.height,R.format,R.type);for(const we of R.layerUpdates){const Fe=Me.data.subarray(we*le/Me.data.BYTES_PER_ELEMENT,(we+1)*le/Me.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,we,Me.width,Me.height,1,ke,je,Fe)}R.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,ke,je,Me.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Ge,Me.width,Me.height,Me.depth,0,ke,je,Me.data);else if(R.isData3DTexture)pt?(yt&&i.texStorage3D(r.TEXTURE_3D,ze,Ge,Me.width,Me.height,Me.depth),ne&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,ke,je,Me.data)):i.texImage3D(r.TEXTURE_3D,0,Ge,Me.width,Me.height,Me.depth,0,ke,je,Me.data);else if(R.isFramebufferTexture){if(yt)if(pt)i.texStorage2D(r.TEXTURE_2D,ze,Ge,Me.width,Me.height);else{let le=Me.width,we=Me.height;for(let Fe=0;Fe<ze;Fe++)i.texImage2D(r.TEXTURE_2D,Fe,Ge,le,we,0,ke,je,null),le>>=1,we>>=1}}else if(R.isHTMLTexture){if("texElementImage2D"in r){const le=r.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),Me.parentNode!==le){le.appendChild(Me),_.add(R),le.onpaint=Le=>{const Xe=Le.changedElements;for(const rt of _)Xe.includes(rt.image)&&(rt.needsUpdate=!0)},le.requestPaint();return}const we=0,Fe=r.RGBA,ge=r.RGBA,Ie=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,we,Fe,ge,Ie,Me),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(ht.length>0){if(pt&&yt){const le=Nt(ht[0]);i.texStorage2D(r.TEXTURE_2D,ze,Ge,le.width,le.height)}for(let le=0,we=ht.length;le<we;le++)He=ht[le],pt?ne&&i.texSubImage2D(r.TEXTURE_2D,le,0,0,ke,je,He):i.texImage2D(r.TEXTURE_2D,le,Ge,ke,je,He);R.generateMipmaps=!1}else if(pt){if(yt){const le=Nt(Me);i.texStorage2D(r.TEXTURE_2D,ze,Ge,le.width,le.height)}ne&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,ke,je,Me)}else i.texImage2D(r.TEXTURE_2D,0,Ge,ke,je,Me);y(R)&&I(Re),Ve.__version=Be.version,R.onUpdate&&R.onUpdate(R)}z.__version=R.version}function Ae(z,R,ie){if(R.image.length!==6)return;const Re=q(z,R),Pe=R.source;i.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+ie);const Be=s.get(Pe);if(Pe.version!==Be.__version||Re===!0){i.activeTexture(r.TEXTURE0+ie);const Ve=Ht.getPrimaries(Ht.workingColorSpace),Se=R.colorSpace===ys?null:Ht.getPrimaries(R.colorSpace),Me=R.colorSpace===ys||Ve===Se?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const ke=R.isCompressedTexture||R.image[0].isCompressedTexture,je=R.image[0]&&R.image[0].isDataTexture,Ge=[];for(let ge=0;ge<6;ge++)!ke&&!je?Ge[ge]=S(R.image[ge],!0,l.maxCubemapSize):Ge[ge]=je?R.image[ge].image:R.image[ge],Ge[ge]=Te(R,Ge[ge]);const He=Ge[0],ht=c.convert(R.format,R.colorSpace),pt=c.convert(R.type),yt=B(R.internalFormat,ht,pt,R.normalized,R.colorSpace),ne=R.isVideoTexture!==!0,ze=Be.__version===void 0||Re===!0,le=Pe.dataReady;let we=H(R,He);Y(r.TEXTURE_CUBE_MAP,R);let Fe;if(ke){ne&&ze&&i.texStorage2D(r.TEXTURE_CUBE_MAP,we,yt,He.width,He.height);for(let ge=0;ge<6;ge++){Fe=Ge[ge].mipmaps;for(let Ie=0;Ie<Fe.length;Ie++){const Le=Fe[Ie];R.format!==Wi?ht!==null?ne?le&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie,0,0,Le.width,Le.height,ht,Le.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie,yt,Le.width,Le.height,0,Le.data):gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ne?le&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie,0,0,Le.width,Le.height,ht,pt,Le.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie,yt,Le.width,Le.height,0,ht,pt,Le.data)}}}else{if(Fe=R.mipmaps,ne&&ze){Fe.length>0&&we++;const ge=Nt(Ge[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,we,yt,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(je){ne?le&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ge[ge].width,Ge[ge].height,ht,pt,Ge[ge].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,yt,Ge[ge].width,Ge[ge].height,0,ht,pt,Ge[ge].data);for(let Ie=0;Ie<Fe.length;Ie++){const Xe=Fe[Ie].image[ge].image;ne?le&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie+1,0,0,Xe.width,Xe.height,ht,pt,Xe.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie+1,yt,Xe.width,Xe.height,0,ht,pt,Xe.data)}}else{ne?le&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,ht,pt,Ge[ge]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,yt,ht,pt,Ge[ge]);for(let Ie=0;Ie<Fe.length;Ie++){const Le=Fe[Ie];ne?le&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie+1,0,0,ht,pt,Le.image[ge]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie+1,yt,ht,pt,Le.image[ge])}}}y(R)&&I(r.TEXTURE_CUBE_MAP),Be.__version=Pe.version,R.onUpdate&&R.onUpdate(R)}z.__version=R.version}function Ue(z,R,ie,Re,Pe,Be){const Ve=c.convert(ie.format,ie.colorSpace),Se=c.convert(ie.type),Me=B(ie.internalFormat,Ve,Se,ie.normalized,ie.colorSpace),ke=s.get(R),je=s.get(ie);if(je.__renderTarget=R,!ke.__hasExternalTextures){const Ge=Math.max(1,R.width>>Be),He=Math.max(1,R.height>>Be);Pe===r.TEXTURE_3D||Pe===r.TEXTURE_2D_ARRAY?i.texImage3D(Pe,Be,Me,Ge,He,R.depth,0,Ve,Se,null):i.texImage2D(Pe,Be,Me,Ge,He,0,Ve,Se,null)}i.bindFramebuffer(r.FRAMEBUFFER,z),ot(R)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Re,Pe,je.__webglTexture,0,Et(R)):(Pe===r.TEXTURE_2D||Pe>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Pe<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Re,Pe,je.__webglTexture,Be),i.bindFramebuffer(r.FRAMEBUFFER,null)}function $e(z,R,ie){if(r.bindRenderbuffer(r.RENDERBUFFER,z),R.depthBuffer){const Re=R.depthTexture,Pe=Re&&Re.isDepthTexture?Re.type:null,Be=Z(R.stencilBuffer,Pe),Ve=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ot(R)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Et(R),Be,R.width,R.height):ie?r.renderbufferStorageMultisample(r.RENDERBUFFER,Et(R),Be,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,Be,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ve,r.RENDERBUFFER,z)}else{const Re=R.textures;for(let Pe=0;Pe<Re.length;Pe++){const Be=Re[Pe],Ve=c.convert(Be.format,Be.colorSpace),Se=c.convert(Be.type),Me=B(Be.internalFormat,Ve,Se,Be.normalized,Be.colorSpace);ot(R)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Et(R),Me,R.width,R.height):ie?r.renderbufferStorageMultisample(r.RENDERBUFFER,Et(R),Me,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,Me,R.width,R.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ze(z,R,ie){const Re=R.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,z),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Pe=s.get(R.depthTexture);if(Pe.__renderTarget=R,(!Pe.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),Re){if(Pe.__webglInit===void 0&&(Pe.__webglInit=!0,R.depthTexture.addEventListener("dispose",k)),Pe.__webglTexture===void 0){Pe.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,Pe.__webglTexture),Y(r.TEXTURE_CUBE_MAP,R.depthTexture);const ke=c.convert(R.depthTexture.format),je=c.convert(R.depthTexture.type);let Ge;R.depthTexture.format===Pa?Ge=r.DEPTH_COMPONENT24:R.depthTexture.format===Qs&&(Ge=r.DEPTH24_STENCIL8);for(let He=0;He<6;He++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,Ge,R.width,R.height,0,ke,je,null)}}else w(R.depthTexture,0);const Be=Pe.__webglTexture,Ve=Et(R),Se=Re?r.TEXTURE_CUBE_MAP_POSITIVE_X+ie:r.TEXTURE_2D,Me=R.depthTexture.format===Qs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(R.depthTexture.format===Pa)ot(R)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Me,Se,Be,0,Ve):r.framebufferTexture2D(r.FRAMEBUFFER,Me,Se,Be,0);else if(R.depthTexture.format===Qs)ot(R)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Me,Se,Be,0,Ve):r.framebufferTexture2D(r.FRAMEBUFFER,Me,Se,Be,0);else throw new Error("Unknown depthTexture format")}function Ye(z){const R=s.get(z),ie=z.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==z.depthTexture){const Re=z.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),Re){const Pe=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,Re.removeEventListener("dispose",Pe)};Re.addEventListener("dispose",Pe),R.__depthDisposeCallback=Pe}R.__boundDepthTexture=Re}if(z.depthTexture&&!R.__autoAllocateDepthBuffer)if(ie)for(let Re=0;Re<6;Re++)Ze(R.__webglFramebuffer[Re],z,Re);else{const Re=z.texture.mipmaps;Re&&Re.length>0?Ze(R.__webglFramebuffer[0],z,0):Ze(R.__webglFramebuffer,z,0)}else if(ie){R.__webglDepthbuffer=[];for(let Re=0;Re<6;Re++)if(i.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer[Re]),R.__webglDepthbuffer[Re]===void 0)R.__webglDepthbuffer[Re]=r.createRenderbuffer(),$e(R.__webglDepthbuffer[Re],z,!1);else{const Pe=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Be=R.__webglDepthbuffer[Re];r.bindRenderbuffer(r.RENDERBUFFER,Be),r.framebufferRenderbuffer(r.FRAMEBUFFER,Pe,r.RENDERBUFFER,Be)}}else{const Re=z.texture.mipmaps;if(Re&&Re.length>0?i.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=r.createRenderbuffer(),$e(R.__webglDepthbuffer,z,!1);else{const Pe=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Be=R.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Be),r.framebufferRenderbuffer(r.FRAMEBUFFER,Pe,r.RENDERBUFFER,Be)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function _e(z,R,ie){const Re=s.get(z);R!==void 0&&Ue(Re.__webglFramebuffer,z,z.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ie!==void 0&&Ye(z)}function ye(z){const R=z.texture,ie=s.get(z),Re=s.get(R);z.addEventListener("dispose",N);const Pe=z.textures,Be=z.isWebGLCubeRenderTarget===!0,Ve=Pe.length>1;if(Ve||(Re.__webglTexture===void 0&&(Re.__webglTexture=r.createTexture()),Re.__version=R.version,f.memory.textures++),Be){ie.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(R.mipmaps&&R.mipmaps.length>0){ie.__webglFramebuffer[Se]=[];for(let Me=0;Me<R.mipmaps.length;Me++)ie.__webglFramebuffer[Se][Me]=r.createFramebuffer()}else ie.__webglFramebuffer[Se]=r.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){ie.__webglFramebuffer=[];for(let Se=0;Se<R.mipmaps.length;Se++)ie.__webglFramebuffer[Se]=r.createFramebuffer()}else ie.__webglFramebuffer=r.createFramebuffer();if(Ve)for(let Se=0,Me=Pe.length;Se<Me;Se++){const ke=s.get(Pe[Se]);ke.__webglTexture===void 0&&(ke.__webglTexture=r.createTexture(),f.memory.textures++)}if(z.samples>0&&ot(z)===!1){ie.__webglMultisampledFramebuffer=r.createFramebuffer(),ie.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let Se=0;Se<Pe.length;Se++){const Me=Pe[Se];ie.__webglColorRenderbuffer[Se]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ie.__webglColorRenderbuffer[Se]);const ke=c.convert(Me.format,Me.colorSpace),je=c.convert(Me.type),Ge=B(Me.internalFormat,ke,je,Me.normalized,Me.colorSpace,z.isXRRenderTarget===!0),He=Et(z);r.renderbufferStorageMultisample(r.RENDERBUFFER,He,Ge,z.width,z.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.RENDERBUFFER,ie.__webglColorRenderbuffer[Se])}r.bindRenderbuffer(r.RENDERBUFFER,null),z.depthBuffer&&(ie.__webglDepthRenderbuffer=r.createRenderbuffer(),$e(ie.__webglDepthRenderbuffer,z,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Be){i.bindTexture(r.TEXTURE_CUBE_MAP,Re.__webglTexture),Y(r.TEXTURE_CUBE_MAP,R);for(let Se=0;Se<6;Se++)if(R.mipmaps&&R.mipmaps.length>0)for(let Me=0;Me<R.mipmaps.length;Me++)Ue(ie.__webglFramebuffer[Se][Me],z,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Me);else Ue(ie.__webglFramebuffer[Se],z,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);y(R)&&I(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ve){for(let Se=0,Me=Pe.length;Se<Me;Se++){const ke=Pe[Se],je=s.get(ke);let Ge=r.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Ge=z.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ge,je.__webglTexture),Y(Ge,ke),Ue(ie.__webglFramebuffer,z,ke,r.COLOR_ATTACHMENT0+Se,Ge,0),y(ke)&&I(Ge)}i.unbindTexture()}else{let Se=r.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Se=z.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Se,Re.__webglTexture),Y(Se,R),R.mipmaps&&R.mipmaps.length>0)for(let Me=0;Me<R.mipmaps.length;Me++)Ue(ie.__webglFramebuffer[Me],z,R,r.COLOR_ATTACHMENT0,Se,Me);else Ue(ie.__webglFramebuffer,z,R,r.COLOR_ATTACHMENT0,Se,0);y(R)&&I(Se),i.unbindTexture()}z.depthBuffer&&Ye(z)}function qe(z){const R=z.textures;for(let ie=0,Re=R.length;ie<Re;ie++){const Pe=R[ie];if(y(Pe)){const Be=G(z),Ve=s.get(Pe).__webglTexture;i.bindTexture(Be,Ve),I(Be),i.unbindTexture()}}}const et=[],xt=[];function ee(z){if(z.samples>0){if(ot(z)===!1){const R=z.textures,ie=z.width,Re=z.height;let Pe=r.COLOR_BUFFER_BIT;const Be=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ve=s.get(z),Se=R.length>1;if(Se)for(let ke=0;ke<R.length;ke++)i.bindFramebuffer(r.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Ve.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer);const Me=z.texture.mipmaps;Me&&Me.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let ke=0;ke<R.length;ke++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(Pe|=r.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(Pe|=r.STENCIL_BUFFER_BIT)),Se){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ve.__webglColorRenderbuffer[ke]);const je=s.get(R[ke]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,je,0)}r.blitFramebuffer(0,0,ie,Re,0,0,ie,Re,Pe,r.NEAREST),m===!0&&(et.length=0,xt.length=0,et.push(r.COLOR_ATTACHMENT0+ke),z.depthBuffer&&z.resolveDepthBuffer===!1&&(et.push(Be),xt.push(Be),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,xt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,et))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Se)for(let ke=0;ke<R.length;ke++){i.bindFramebuffer(r.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.RENDERBUFFER,Ve.__webglColorRenderbuffer[ke]);const je=s.get(R[ke]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Ve.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.TEXTURE_2D,je,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&m){const R=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[R])}}}function Et(z){return Math.min(l.maxSamples,z.samples)}function ot(z){const R=s.get(z);return z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function dt(z){const R=f.render.frame;g.get(z)!==R&&(g.set(z,R),z.update())}function Te(z,R){const ie=z.colorSpace,Re=z.format,Pe=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||ie!==ru&&ie!==ys&&(Ht.getTransfer(ie)===en?(Re!==Wi||Pe!==Li)&&gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Gt("WebGLTextures: Unsupported texture color space:",ie)),R}function Nt(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(h.width=z.naturalWidth||z.width,h.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(h.width=z.displayWidth,h.height=z.displayHeight):(h.width=z.width,h.height=z.height),h}this.allocateTextureUnit=O,this.resetTextureUnits=fe,this.getTextureUnits=te,this.setTextureUnits=X,this.setTexture2D=w,this.setTexture2DArray=A,this.setTexture3D=L,this.setTextureCube=T,this.rebindTextures=_e,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=ot,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function qA(r,e){function i(s,l=ys){let c;const f=Ht.getTransfer(l);if(s===Li)return r.UNSIGNED_BYTE;if(s===rp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===op)return r.UNSIGNED_SHORT_5_5_5_1;if(s===zv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Bv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Fv)return r.BYTE;if(s===Iv)return r.SHORT;if(s===rl)return r.UNSIGNED_SHORT;if(s===sp)return r.INT;if(s===aa)return r.UNSIGNED_INT;if(s===ea)return r.FLOAT;if(s===Oa)return r.HALF_FLOAT;if(s===Hv)return r.ALPHA;if(s===Gv)return r.RGB;if(s===Wi)return r.RGBA;if(s===Pa)return r.DEPTH_COMPONENT;if(s===Qs)return r.DEPTH_STENCIL;if(s===Vv)return r.RED;if(s===lp)return r.RED_INTEGER;if(s===$s)return r.RG;if(s===cp)return r.RG_INTEGER;if(s===up)return r.RGBA_INTEGER;if(s===Qc||s===Jc||s===$c||s===eu)if(f===en)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Qc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===$c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Qc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Jc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===$c)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===eu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Mh||s===Eh||s===Th||s===Ah)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Mh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Eh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Th)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ah)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Rh||s===Ch||s===wh||s===Nh||s===Dh||s===au||s===Uh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Rh||s===Ch)return f===en?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===wh)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Nh)return c.COMPRESSED_R11_EAC;if(s===Dh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===au)return c.COMPRESSED_RG11_EAC;if(s===Uh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Lh||s===Oh||s===Ph||s===Fh||s===Ih||s===zh||s===Bh||s===Hh||s===Gh||s===Vh||s===kh||s===jh||s===Wh||s===Xh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Lh)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Oh)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ph)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Fh)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ih)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===zh)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Bh)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Hh)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Gh)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Vh)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===kh)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===jh)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Wh)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Xh)return f===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===qh||s===Yh||s===Zh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===qh)return f===en?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Yh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Zh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Kh||s===Qh||s===su||s===Jh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Kh)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Qh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===su)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Jh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ol?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const YA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ZA=`
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

}`;class KA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new $v(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new sa({vertexShader:YA,fragmentShader:ZA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Fa(new mu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class QA extends Es{constructor(e,i){super();const s=this;let l=null,c=1,f=null,p="local-floor",m=1,h=null,g=null,_=null,x=null,M=null,E=null;const U=typeof XRWebGLBinding<"u",S=new KA,y={},I=i.getContextAttributes();let G=null,B=null;const Z=[],H=[],k=new Ct;let N=null;const V=new Ui;V.viewport=new _n;const j=new Ui;j.viewport=new _n;const W=[V,j],$=new s1;let fe=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let re=Z[q];return re===void 0&&(re=new Bd,Z[q]=re),re.getTargetRaySpace()},this.getControllerGrip=function(q){let re=Z[q];return re===void 0&&(re=new Bd,Z[q]=re),re.getGripSpace()},this.getHand=function(q){let re=Z[q];return re===void 0&&(re=new Bd,Z[q]=re),re.getHandSpace()};function X(q){const re=H.indexOf(q.inputSource);if(re===-1)return;const ue=Z[re];ue!==void 0&&(ue.update(q.inputSource,q.frame,h||f),ue.dispatchEvent({type:q.type,data:q.inputSource}))}function O(){l.removeEventListener("select",X),l.removeEventListener("selectstart",X),l.removeEventListener("selectend",X),l.removeEventListener("squeeze",X),l.removeEventListener("squeezestart",X),l.removeEventListener("squeezeend",X),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",D);for(let q=0;q<Z.length;q++){const re=H[q];re!==null&&(H[q]=null,Z[q].disconnect(re))}fe=null,te=null,S.reset();for(const q in y)delete y[q];e.setRenderTarget(G),M=null,x=null,_=null,l=null,B=null,Y.stop(),s.isPresenting=!1,e.setPixelRatio(N),e.setSize(k.width,k.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){c=q,s.isPresenting===!0&&gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){p=q,s.isPresenting===!0&&gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||f},this.setReferenceSpace=function(q){h=q},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return _===null&&U&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(q){if(l=q,l!==null){if(G=e.getRenderTarget(),l.addEventListener("select",X),l.addEventListener("selectstart",X),l.addEventListener("selectend",X),l.addEventListener("squeeze",X),l.addEventListener("squeezestart",X),l.addEventListener("squeezeend",X),l.addEventListener("end",O),l.addEventListener("inputsourceschange",D),I.xrCompatible!==!0&&await i.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(k),U&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,De=null,Ae=null;I.depth&&(Ae=I.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ue=I.stencil?Qs:Pa,De=I.stencil?ol:aa);const Ue={colorFormat:i.RGBA8,depthFormat:Ae,scaleFactor:c};_=this.getBinding(),x=_.createProjectionLayer(Ue),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),B=new ia(x.textureWidth,x.textureHeight,{format:Wi,type:Li,depthTexture:new eo(x.textureWidth,x.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:I.stencil,colorSpace:e.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const ue={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,ue),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),B=new ia(M.framebufferWidth,M.framebufferHeight,{format:Wi,type:Li,colorSpace:e.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}B.isXRRenderTarget=!0,this.setFoveation(m),h=null,f=await l.requestReferenceSpace(p),Y.setContext(l),Y.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function D(q){for(let re=0;re<q.removed.length;re++){const ue=q.removed[re],De=H.indexOf(ue);De>=0&&(H[De]=null,Z[De].disconnect(ue))}for(let re=0;re<q.added.length;re++){const ue=q.added[re];let De=H.indexOf(ue);if(De===-1){for(let Ue=0;Ue<Z.length;Ue++)if(Ue>=H.length){H.push(ue),De=Ue;break}else if(H[Ue]===null){H[Ue]=ue,De=Ue;break}if(De===-1)break}const Ae=Z[De];Ae&&Ae.connect(ue)}}const w=new ce,A=new ce;function L(q,re,ue){w.setFromMatrixPosition(re.matrixWorld),A.setFromMatrixPosition(ue.matrixWorld);const De=w.distanceTo(A),Ae=re.projectionMatrix.elements,Ue=ue.projectionMatrix.elements,$e=Ae[14]/(Ae[10]-1),Ze=Ae[14]/(Ae[10]+1),Ye=(Ae[9]+1)/Ae[5],_e=(Ae[9]-1)/Ae[5],ye=(Ae[8]-1)/Ae[0],qe=(Ue[8]+1)/Ue[0],et=$e*ye,xt=$e*qe,ee=De/(-ye+qe),Et=ee*-ye;if(re.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Et),q.translateZ(ee),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ae[10]===-1)q.projectionMatrix.copy(re.projectionMatrix),q.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const ot=$e+ee,dt=Ze+ee,Te=et-Et,Nt=xt+(De-Et),z=Ye*Ze/dt*ot,R=_e*Ze/dt*ot;q.projectionMatrix.makePerspective(Te,Nt,z,R,ot,dt),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function T(q,re){re===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(re.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(l===null)return;let re=q.near,ue=q.far;S.texture!==null&&(S.depthNear>0&&(re=S.depthNear),S.depthFar>0&&(ue=S.depthFar)),$.near=j.near=V.near=re,$.far=j.far=V.far=ue,(fe!==$.near||te!==$.far)&&(l.updateRenderState({depthNear:$.near,depthFar:$.far}),fe=$.near,te=$.far),$.layers.mask=q.layers.mask|6,V.layers.mask=$.layers.mask&-5,j.layers.mask=$.layers.mask&-3;const De=q.parent,Ae=$.cameras;T($,De);for(let Ue=0;Ue<Ae.length;Ue++)T(Ae[Ue],De);Ae.length===2?L($,V,j):$.projectionMatrix.copy(V.projectionMatrix),C(q,$,De)};function C(q,re,ue){ue===null?q.matrix.copy(re.matrixWorld):(q.matrix.copy(ue.matrixWorld),q.matrix.invert(),q.matrix.multiply(re.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(re.projectionMatrix),q.projectionMatrixInverse.copy(re.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ep*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(q){m=q,x!==null&&(x.fixedFoveation=q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=q)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh($)},this.getCameraTexture=function(q){return y[q]};let K=null;function Q(q,re){if(g=re.getViewerPose(h||f),E=re,g!==null){const ue=g.views;M!==null&&(e.setRenderTargetFramebuffer(B,M.framebuffer),e.setRenderTarget(B));let De=!1;ue.length!==$.cameras.length&&($.cameras.length=0,De=!0);for(let Ze=0;Ze<ue.length;Ze++){const Ye=ue[Ze];let _e=null;if(M!==null)_e=M.getViewport(Ye);else{const qe=_.getViewSubImage(x,Ye);_e=qe.viewport,Ze===0&&(e.setRenderTargetTextures(B,qe.colorTexture,qe.depthStencilTexture),e.setRenderTarget(B))}let ye=W[Ze];ye===void 0&&(ye=new Ui,ye.layers.enable(Ze),ye.viewport=new _n,W[Ze]=ye),ye.matrix.fromArray(Ye.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(Ye.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(_e.x,_e.y,_e.width,_e.height),Ze===0&&($.matrix.copy(ye.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),De===!0&&$.cameras.push(ye)}const Ae=l.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&U){_=s.getBinding();const Ze=_.getDepthInformation(ue[0]);Ze&&Ze.isValid&&Ze.texture&&S.init(Ze,l.renderState)}if(Ae&&Ae.includes("camera-access")&&U){e.state.unbindTexture(),_=s.getBinding();for(let Ze=0;Ze<ue.length;Ze++){const Ye=ue[Ze].camera;if(Ye){let _e=y[Ye];_e||(_e=new $v,y[Ye]=_e);const ye=_.getCameraImage(Ye);_e.sourceTexture=ye}}}}for(let ue=0;ue<Z.length;ue++){const De=H[ue],Ae=Z[ue];De!==null&&Ae!==void 0&&Ae.update(De,re,h||f)}K&&K(q,re),re.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:re}),E=null}const Y=new i_;Y.setAnimationLoop(Q),this.setAnimationLoop=function(q){K=q},this.dispose=function(){}}}const JA=new Rn,u_=new _t;u_.set(-1,0,0,0,1,0,0,0,1);function $A(r,e){function i(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function s(S,y){y.color.getRGB(S.fogColor.value,e_(r)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function l(S,y,I,G,B){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?c(S,y):y.isMeshLambertMaterial?(c(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(S,y),_(S,y)):y.isMeshPhongMaterial?(c(S,y),g(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(S,y),x(S,y),y.isMeshPhysicalMaterial&&M(S,y,B)):y.isMeshMatcapMaterial?(c(S,y),E(S,y)):y.isMeshDepthMaterial?c(S,y):y.isMeshDistanceMaterial?(c(S,y),U(S,y)):y.isMeshNormalMaterial?c(S,y):y.isLineBasicMaterial?(f(S,y),y.isLineDashedMaterial&&p(S,y)):y.isPointsMaterial?m(S,y,I,G):y.isSpriteMaterial?h(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,i(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,i(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,i(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===li&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,i(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===li&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,i(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,i(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const I=e.get(y),G=I.envMap,B=I.envMapRotation;G&&(S.envMap.value=G,S.envMapRotation.value.setFromMatrix4(JA.makeRotationFromEuler(B)).transpose(),G.isCubeTexture&&G.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(u_),S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,S.aoMapTransform))}function f(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,i(y.map,S.mapTransform))}function p(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function m(S,y,I,G){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*I,S.scale.value=G*.5,y.map&&(S.map.value=y.map,i(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,i(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function h(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,i(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,i(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function g(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function _(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function x(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function M(S,y,I){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===li&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=I.texture,S.transmissionSamplerSize.value.set(I.width,I.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,y){y.matcap&&(S.matcap.value=y.matcap)}function U(S,y){const I=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(I.matrixWorld),S.nearDistance.value=I.shadow.camera.near,S.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function e2(r,e,i,s){let l={},c={},f=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(I,G){const B=G.program;s.uniformBlockBinding(I,B)}function h(I,G){let B=l[I.id];B===void 0&&(E(I),B=g(I),l[I.id]=B,I.addEventListener("dispose",S));const Z=G.program;s.updateUBOMapping(I,Z);const H=e.render.frame;c[I.id]!==H&&(x(I),c[I.id]=H)}function g(I){const G=_();I.__bindingPointIndex=G;const B=r.createBuffer(),Z=I.__size,H=I.usage;return r.bindBuffer(r.UNIFORM_BUFFER,B),r.bufferData(r.UNIFORM_BUFFER,Z,H),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,G,B),B}function _(){for(let I=0;I<p;I++)if(f.indexOf(I)===-1)return f.push(I),I;return Gt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(I){const G=l[I.id],B=I.uniforms,Z=I.__cache;r.bindBuffer(r.UNIFORM_BUFFER,G);for(let H=0,k=B.length;H<k;H++){const N=Array.isArray(B[H])?B[H]:[B[H]];for(let V=0,j=N.length;V<j;V++){const W=N[V];if(M(W,H,V,Z)===!0){const $=W.__offset,fe=Array.isArray(W.value)?W.value:[W.value];let te=0;for(let X=0;X<fe.length;X++){const O=fe[X],D=U(O);typeof O=="number"||typeof O=="boolean"?(W.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,$+te,W.__data)):O.isMatrix3?(W.__data[0]=O.elements[0],W.__data[1]=O.elements[1],W.__data[2]=O.elements[2],W.__data[3]=0,W.__data[4]=O.elements[3],W.__data[5]=O.elements[4],W.__data[6]=O.elements[5],W.__data[7]=0,W.__data[8]=O.elements[6],W.__data[9]=O.elements[7],W.__data[10]=O.elements[8],W.__data[11]=0):ArrayBuffer.isView(O)?W.__data.set(new O.constructor(O.buffer,O.byteOffset,W.__data.length)):(O.toArray(W.__data,te),te+=D.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,$,W.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(I,G,B,Z){const H=I.value,k=G+"_"+B;if(Z[k]===void 0)return typeof H=="number"||typeof H=="boolean"?Z[k]=H:ArrayBuffer.isView(H)?Z[k]=H.slice():Z[k]=H.clone(),!0;{const N=Z[k];if(typeof H=="number"||typeof H=="boolean"){if(N!==H)return Z[k]=H,!0}else{if(ArrayBuffer.isView(H))return!0;if(N.equals(H)===!1)return N.copy(H),!0}}return!1}function E(I){const G=I.uniforms;let B=0;const Z=16;for(let k=0,N=G.length;k<N;k++){const V=Array.isArray(G[k])?G[k]:[G[k]];for(let j=0,W=V.length;j<W;j++){const $=V[j],fe=Array.isArray($.value)?$.value:[$.value];for(let te=0,X=fe.length;te<X;te++){const O=fe[te],D=U(O),w=B%Z,A=w%D.boundary,L=w+A;B+=A,L!==0&&Z-L<D.storage&&(B+=Z-L),$.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=B,B+=D.storage}}}const H=B%Z;return H>0&&(B+=Z-H),I.__size=B,I.__cache={},this}function U(I){const G={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(G.boundary=4,G.storage=4):I.isVector2?(G.boundary=8,G.storage=8):I.isVector3||I.isColor?(G.boundary=16,G.storage=12):I.isVector4?(G.boundary=16,G.storage=16):I.isMatrix3?(G.boundary=48,G.storage=48):I.isMatrix4?(G.boundary=64,G.storage=64):I.isTexture?gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(I)?(G.boundary=16,G.storage=I.byteLength):gt("WebGLRenderer: Unsupported uniform value type.",I),G}function S(I){const G=I.target;G.removeEventListener("dispose",S);const B=f.indexOf(G.__bindingPointIndex);f.splice(B,1),r.deleteBuffer(l[G.id]),delete l[G.id],delete c[G.id]}function y(){for(const I in l)r.deleteBuffer(l[I]);f=[],l={},c={}}return{bind:m,update:h,dispose:y}}const t2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ji=null;function n2(){return Ji===null&&(Ji=new kS(t2,16,16,$s,Oa),Ji.name="DFG_LUT",Ji.minFilter=Zn,Ji.magFilter=Zn,Ji.wrapS=Da,Ji.wrapT=Da,Ji.generateMipmaps=!1,Ji.needsUpdate=!0),Ji}class i2{constructor(e={}){const{canvas:i=_S(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1,outputBufferType:M=Li}=e;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=f;const U=M,S=new Set([up,cp,lp]),y=new Set([Li,aa,rl,ol,rp,op]),I=new Uint32Array(4),G=new Int32Array(4),B=new ce;let Z=null,H=null;const k=[],N=[];let V=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=na,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const j=this;let W=!1,$=null;this._outputColorSpace=Di;let fe=0,te=0,X=null,O=-1,D=null;const w=new _n,A=new _n;let L=null;const T=new Pt(0);let C=0,K=i.width,Q=i.height,Y=1,q=null,re=null;const ue=new _n(0,0,K,Q),De=new _n(0,0,K,Q);let Ae=!1;const Ue=new Kv;let $e=!1,Ze=!1;const Ye=new Rn,_e=new ce,ye=new _n,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let et=!1;function xt(){return X===null?Y:1}let ee=s;function Et(P,se){return i.getContext(P,se)}try{const P={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${ap}`),i.addEventListener("webglcontextlost",ge,!1),i.addEventListener("webglcontextrestored",Ie,!1),i.addEventListener("webglcontextcreationerror",Le,!1),ee===null){const se="webgl2";if(ee=Et(se,P),ee===null)throw Et(se)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw Gt("WebGLRenderer: "+P.message),P}let ot,dt,Te,Nt,z,R,ie,Re,Pe,Be,Ve,Se,Me,ke,je,Ge,He,ht,pt,yt,ne,ze,le;function we(){ot=new nT(ee),ot.init(),ne=new qA(ee,ot),dt=new YE(ee,ot,e,ne),Te=new WA(ee,ot),dt.reversedDepthBuffer&&x&&Te.buffers.depth.setReversed(!0),Nt=new sT(ee),z=new DA,R=new XA(ee,ot,Te,z,dt,ne,Nt),ie=new tT(j),Re=new c1(ee),ze=new XE(ee,Re),Pe=new iT(ee,Re,Nt,ze),Be=new oT(ee,Pe,Re,ze,Nt),ht=new rT(ee,dt,R),je=new ZE(z),Ve=new NA(j,ie,ot,dt,ze,je),Se=new $A(j,z),Me=new LA,ke=new BA(ot),He=new WE(j,ie,Te,Be,E,m),Ge=new jA(j,Be,dt),le=new e2(ee,Nt,dt,Te),pt=new qE(ee,ot,Nt),yt=new aT(ee,ot,Nt),Nt.programs=Ve.programs,j.capabilities=dt,j.extensions=ot,j.properties=z,j.renderLists=Me,j.shadowMap=Ge,j.state=Te,j.info=Nt}we(),U!==Li&&(V=new cT(U,i.width,i.height,l,c));const Fe=new QA(j,ee);this.xr=Fe,this.getContext=function(){return ee},this.getContextAttributes=function(){return ee.getContextAttributes()},this.forceContextLoss=function(){const P=ot.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=ot.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(P){P!==void 0&&(Y=P,this.setSize(K,Q,!1))},this.getSize=function(P){return P.set(K,Q)},this.setSize=function(P,se,xe=!0){if(Fe.isPresenting){gt("WebGLRenderer: Can't change size while VR device is presenting.");return}K=P,Q=se,i.width=Math.floor(P*Y),i.height=Math.floor(se*Y),xe===!0&&(i.style.width=P+"px",i.style.height=se+"px"),V!==null&&V.setSize(i.width,i.height),this.setViewport(0,0,P,se)},this.getDrawingBufferSize=function(P){return P.set(K*Y,Q*Y).floor()},this.setDrawingBufferSize=function(P,se,xe){K=P,Q=se,Y=xe,i.width=Math.floor(P*xe),i.height=Math.floor(se*xe),this.setViewport(0,0,P,se)},this.setEffects=function(P){if(U===Li){Gt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let se=0;se<P.length;se++)if(P[se].isOutputPass===!0){gt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}V.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(w)},this.getViewport=function(P){return P.copy(ue)},this.setViewport=function(P,se,xe,pe){P.isVector4?ue.set(P.x,P.y,P.z,P.w):ue.set(P,se,xe,pe),Te.viewport(w.copy(ue).multiplyScalar(Y).round())},this.getScissor=function(P){return P.copy(De)},this.setScissor=function(P,se,xe,pe){P.isVector4?De.set(P.x,P.y,P.z,P.w):De.set(P,se,xe,pe),Te.scissor(A.copy(De).multiplyScalar(Y).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(P){Te.setScissorTest(Ae=P)},this.setOpaqueSort=function(P){q=P},this.setTransparentSort=function(P){re=P},this.getClearColor=function(P){return P.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(P=!0,se=!0,xe=!0){let pe=0;if(P){let me=!1;if(X!==null){const Qe=X.texture.format;me=S.has(Qe)}if(me){const Qe=X.texture.type,nt=y.has(Qe),Ke=He.getClearColor(),at=He.getClearAlpha(),it=Ke.r,ut=Ke.g,St=Ke.b;nt?(I[0]=it,I[1]=ut,I[2]=St,I[3]=at,ee.clearBufferuiv(ee.COLOR,0,I)):(G[0]=it,G[1]=ut,G[2]=St,G[3]=at,ee.clearBufferiv(ee.COLOR,0,G))}else pe|=ee.COLOR_BUFFER_BIT}se&&(pe|=ee.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),xe&&(pe|=ee.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),pe!==0&&ee.clear(pe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),$=P},this.dispose=function(){i.removeEventListener("webglcontextlost",ge,!1),i.removeEventListener("webglcontextrestored",Ie,!1),i.removeEventListener("webglcontextcreationerror",Le,!1),He.dispose(),Me.dispose(),ke.dispose(),z.dispose(),ie.dispose(),Be.dispose(),ze.dispose(),le.dispose(),Ve.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",yn),Fe.removeEventListener("sessionend",Ia),Vn.stop()};function ge(P){P.preventDefault(),Ex("WebGLRenderer: Context Lost."),W=!0}function Ie(){Ex("WebGLRenderer: Context Restored."),W=!1;const P=Nt.autoReset,se=Ge.enabled,xe=Ge.autoUpdate,pe=Ge.needsUpdate,me=Ge.type;we(),Nt.autoReset=P,Ge.enabled=se,Ge.autoUpdate=xe,Ge.needsUpdate=pe,Ge.type=me}function Le(P){Gt("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Xe(P){const se=P.target;se.removeEventListener("dispose",Xe),rt(se)}function rt(P){bt(P),z.remove(P)}function bt(P){const se=z.get(P).programs;se!==void 0&&(se.forEach(function(xe){Ve.releaseProgram(xe)}),P.isShaderMaterial&&Ve.releaseShaderCache(P))}this.renderBufferDirect=function(P,se,xe,pe,me,Qe){se===null&&(se=qe);const nt=me.isMesh&&me.matrixWorld.determinant()<0,Ke=Ha(P,se,xe,pe,me);Te.setMaterial(pe,nt);let at=xe.index,it=1;if(pe.wireframe===!0){if(at=Pe.getWireframeAttribute(xe),at===void 0)return;it=2}const ut=xe.drawRange,St=xe.attributes.position;let ct=ut.start*it,Vt=(ut.start+ut.count)*it;Qe!==null&&(ct=Math.max(ct,Qe.start*it),Vt=Math.min(Vt,(Qe.start+Qe.count)*it)),at!==null?(ct=Math.max(ct,0),Vt=Math.min(Vt,at.count)):St!=null&&(ct=Math.max(ct,0),Vt=Math.min(Vt,St.count));const fn=Vt-ct;if(fn<0||fn===1/0)return;ze.setup(me,pe,Ke,xe,at);let rn,Zt=pt;if(at!==null&&(rn=Re.get(at),Zt=yt,Zt.setIndex(rn)),me.isMesh)pe.wireframe===!0?(Te.setLineWidth(pe.wireframeLinewidth*xt()),Zt.setMode(ee.LINES)):Zt.setMode(ee.TRIANGLES);else if(me.isLine){let Kt=pe.linewidth;Kt===void 0&&(Kt=1),Te.setLineWidth(Kt*xt()),me.isLineSegments?Zt.setMode(ee.LINES):me.isLineLoop?Zt.setMode(ee.LINE_LOOP):Zt.setMode(ee.LINE_STRIP)}else me.isPoints?Zt.setMode(ee.POINTS):me.isSprite&&Zt.setMode(ee.TRIANGLES);if(me.isBatchedMesh)if(ot.get("WEBGL_multi_draw"))Zt.renderMultiDraw(me._multiDrawStarts,me._multiDrawCounts,me._multiDrawCount);else{const Kt=me._multiDrawStarts,tt=me._multiDrawCounts,kn=me._multiDrawCount,Dt=at?Re.get(at).bytesPerElement:1,wn=z.get(pe).currentProgram.getUniforms();for(let ci=0;ci<kn;ci++)wn.setValue(ee,"_gl_DrawID",ci),Zt.render(Kt[ci]/Dt,tt[ci])}else if(me.isInstancedMesh)Zt.renderInstances(ct,fn,me.count);else if(xe.isInstancedBufferGeometry){const Kt=xe._maxInstanceCount!==void 0?xe._maxInstanceCount:1/0,tt=Math.min(xe.instanceCount,Kt);Zt.renderInstances(ct,fn,tt)}else Zt.render(ct,fn)};function zt(P,se,xe){P.transparent===!0&&P.side===wa&&P.forceSinglePass===!1?(P.side=li,P.needsUpdate=!0,tr(P,se,xe),P.side=Ss,P.needsUpdate=!0,tr(P,se,xe),P.side=wa):tr(P,se,xe)}this.compile=function(P,se,xe=null){xe===null&&(xe=P),H=ke.get(xe),H.init(se),N.push(H),xe.traverseVisible(function(me){me.isLight&&me.layers.test(se.layers)&&(H.pushLight(me),me.castShadow&&H.pushShadow(me))}),P!==xe&&P.traverseVisible(function(me){me.isLight&&me.layers.test(se.layers)&&(H.pushLight(me),me.castShadow&&H.pushShadow(me))}),H.setupLights();const pe=new Set;return P.traverse(function(me){if(!(me.isMesh||me.isPoints||me.isLine||me.isSprite))return;const Qe=me.material;if(Qe)if(Array.isArray(Qe))for(let nt=0;nt<Qe.length;nt++){const Ke=Qe[nt];zt(Ke,xe,me),pe.add(Ke)}else zt(Qe,xe,me),pe.add(Qe)}),H=N.pop(),pe},this.compileAsync=function(P,se,xe=null){const pe=this.compile(P,se,xe);return new Promise(me=>{function Qe(){if(pe.forEach(function(nt){z.get(nt).currentProgram.isReady()&&pe.delete(nt)}),pe.size===0){me(P);return}setTimeout(Qe,10)}ot.get("KHR_parallel_shader_compile")!==null?Qe():setTimeout(Qe,10)})};let Cn=null;function Yt(P){Cn&&Cn(P)}function yn(){Vn.stop()}function Ia(){Vn.start()}const Vn=new i_;Vn.setAnimationLoop(Yt),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(P){Cn=P,Fe.setAnimationLoop(P),P===null?Vn.stop():Vn.start()},Fe.addEventListener("sessionstart",yn),Fe.addEventListener("sessionend",Ia),this.render=function(P,se){if(se!==void 0&&se.isCamera!==!0){Gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;$!==null&&$.renderStart(P,se);const xe=Fe.enabled===!0&&Fe.isPresenting===!0,pe=V!==null&&(X===null||xe)&&V.begin(j,X);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),se.parent===null&&se.matrixWorldAutoUpdate===!0&&se.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(V===null||V.isCompositing()===!1)&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(se),se=Fe.getCamera()),P.isScene===!0&&P.onBeforeRender(j,P,se,X),H=ke.get(P,N.length),H.init(se),H.state.textureUnits=R.getTextureUnits(),N.push(H),Ye.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),Ue.setFromProjectionMatrix(Ye,ta,se.reversedDepth),Ze=this.localClippingEnabled,$e=je.init(this.clippingPlanes,Ze),Z=Me.get(P,k.length),Z.init(),k.push(Z),Fe.enabled===!0&&Fe.isPresenting===!0){const nt=j.xr.getDepthSensingMesh();nt!==null&&gn(nt,se,-1/0,j.sortObjects)}gn(P,se,0,j.sortObjects),Z.finish(),j.sortObjects===!0&&Z.sort(q,re),et=Fe.enabled===!1||Fe.isPresenting===!1||Fe.hasDepthSensing()===!1,et&&He.addToRenderList(Z,P),this.info.render.frame++,$e===!0&&je.beginShadows();const me=H.state.shadowsArray;if(Ge.render(me,P,se),$e===!0&&je.endShadows(),this.info.autoReset===!0&&this.info.reset(),(pe&&V.hasRenderPass())===!1){const nt=Z.opaque,Ke=Z.transmissive;if(H.setupLights(),se.isArrayCamera){const at=se.cameras;if(Ke.length>0)for(let it=0,ut=at.length;it<ut;it++){const St=at[it];ra(nt,Ke,P,St)}et&&He.render(P);for(let it=0,ut=at.length;it<ut;it++){const St=at[it];Fn(Z,P,St,St.viewport)}}else Ke.length>0&&ra(nt,Ke,P,se),et&&He.render(P),Fn(Z,P,se)}X!==null&&te===0&&(R.updateMultisampleRenderTarget(X),R.updateRenderTargetMipmap(X)),pe&&V.end(j),P.isScene===!0&&P.onAfterRender(j,P,se),ze.resetDefaultState(),O=-1,D=null,N.pop(),N.length>0?(H=N[N.length-1],R.setTextureUnits(H.state.textureUnits),$e===!0&&je.setGlobalState(j.clippingPlanes,H.state.camera)):H=null,k.pop(),k.length>0?Z=k[k.length-1]:Z=null,$!==null&&$.renderEnd()};function gn(P,se,xe,pe){if(P.visible===!1)return;if(P.layers.test(se.layers)){if(P.isGroup)xe=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(se);else if(P.isLightProbeGrid)H.pushLightProbeGrid(P);else if(P.isLight)H.pushLight(P),P.castShadow&&H.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Ue.intersectsSprite(P)){pe&&ye.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Ye);const nt=Be.update(P),Ke=P.material;Ke.visible&&Z.push(P,nt,Ke,xe,ye.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Ue.intersectsObject(P))){const nt=Be.update(P),Ke=P.material;if(pe&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),ye.copy(P.boundingSphere.center)):(nt.boundingSphere===null&&nt.computeBoundingSphere(),ye.copy(nt.boundingSphere.center)),ye.applyMatrix4(P.matrixWorld).applyMatrix4(Ye)),Array.isArray(Ke)){const at=nt.groups;for(let it=0,ut=at.length;it<ut;it++){const St=at[it],ct=Ke[St.materialIndex];ct&&ct.visible&&Z.push(P,nt,ct,xe,ye.z,St)}}else Ke.visible&&Z.push(P,nt,Ke,xe,ye.z,null)}}const Qe=P.children;for(let nt=0,Ke=Qe.length;nt<Ke;nt++)gn(Qe[nt],se,xe,pe)}function Fn(P,se,xe,pe){const{opaque:me,transmissive:Qe,transparent:nt}=P;H.setupLightsView(xe),$e===!0&&je.setGlobalState(j.clippingPlanes,xe),pe&&Te.viewport(w.copy(pe)),me.length>0&&za(me,se,xe),Qe.length>0&&za(Qe,se,xe),nt.length>0&&za(nt,se,xe),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function ra(P,se,xe,pe){if((xe.isScene===!0?xe.overrideMaterial:null)!==null)return;if(H.state.transmissionRenderTarget[pe.id]===void 0){const ct=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");H.state.transmissionRenderTarget[pe.id]=new ia(1,1,{generateMipmaps:!0,type:ct?Oa:Li,minFilter:Ks,samples:Math.max(4,dt.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ht.workingColorSpace})}const Qe=H.state.transmissionRenderTarget[pe.id],nt=pe.viewport||w;Qe.setSize(nt.z*j.transmissionResolutionScale,nt.w*j.transmissionResolutionScale);const Ke=j.getRenderTarget(),at=j.getActiveCubeFace(),it=j.getActiveMipmapLevel();j.setRenderTarget(Qe),j.getClearColor(T),C=j.getClearAlpha(),C<1&&j.setClearColor(16777215,.5),j.clear(),et&&He.render(xe);const ut=j.toneMapping;j.toneMapping=na;const St=pe.viewport;if(pe.viewport!==void 0&&(pe.viewport=void 0),H.setupLightsView(pe),$e===!0&&je.setGlobalState(j.clippingPlanes,pe),za(P,xe,pe),R.updateMultisampleRenderTarget(Qe),R.updateRenderTargetMipmap(Qe),ot.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let Vt=0,fn=se.length;Vt<fn;Vt++){const rn=se[Vt],{object:Zt,geometry:Kt,material:tt,group:kn}=rn;if(tt.side===wa&&Zt.layers.test(pe.layers)){const Dt=tt.side;tt.side=li,tt.needsUpdate=!0,pl(Zt,xe,pe,Kt,tt,kn),tt.side=Dt,tt.needsUpdate=!0,ct=!0}}ct===!0&&(R.updateMultisampleRenderTarget(Qe),R.updateRenderTargetMipmap(Qe))}j.setRenderTarget(Ke,at,it),j.setClearColor(T,C),St!==void 0&&(pe.viewport=St),j.toneMapping=ut}function za(P,se,xe){const pe=se.isScene===!0?se.overrideMaterial:null;for(let me=0,Qe=P.length;me<Qe;me++){const nt=P[me],{object:Ke,geometry:at,group:it}=nt;let ut=nt.material;ut.allowOverride===!0&&pe!==null&&(ut=pe),Ke.layers.test(xe.layers)&&pl(Ke,se,xe,at,ut,it)}}function pl(P,se,xe,pe,me,Qe){P.onBeforeRender(j,se,xe,pe,me,Qe),P.modelViewMatrix.multiplyMatrices(xe.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),me.onBeforeRender(j,se,xe,pe,P,Qe),me.transparent===!0&&me.side===wa&&me.forceSinglePass===!1?(me.side=li,me.needsUpdate=!0,j.renderBufferDirect(xe,se,pe,me,P,Qe),me.side=Ss,me.needsUpdate=!0,j.renderBufferDirect(xe,se,pe,me,P,Qe),me.side=wa):j.renderBufferDirect(xe,se,pe,me,P,Qe),P.onAfterRender(j,se,xe,pe,me,Qe)}function tr(P,se,xe){se.isScene!==!0&&(se=qe);const pe=z.get(P),me=H.state.lights,Qe=H.state.shadowsArray,nt=me.state.version,Ke=Ve.getParameters(P,me.state,Qe,se,xe,H.state.lightProbeGridArray),at=Ve.getProgramCacheKey(Ke);let it=pe.programs;pe.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?se.environment:null,pe.fog=se.fog;const ut=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;pe.envMap=ie.get(P.envMap||pe.environment,ut),pe.envMapRotation=pe.environment!==null&&P.envMap===null?se.environmentRotation:P.envMapRotation,it===void 0&&(P.addEventListener("dispose",Xe),it=new Map,pe.programs=it);let St=it.get(at);if(St!==void 0){if(pe.currentProgram===St&&pe.lightsStateVersion===nt)return Ba(P,Ke),St}else Ke.uniforms=Ve.getUniforms(P),$!==null&&P.isNodeMaterial&&$.build(P,xe,Ke),P.onBeforeCompile(Ke,j),St=Ve.acquireProgram(Ke,at),it.set(at,St),pe.uniforms=Ke.uniforms;const ct=pe.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(ct.clippingPlanes=je.uniform),Ba(P,Ke),pe.needsLights=Ts(P),pe.lightsStateVersion=nt,pe.needsLights&&(ct.ambientLightColor.value=me.state.ambient,ct.lightProbe.value=me.state.probe,ct.directionalLights.value=me.state.directional,ct.directionalLightShadows.value=me.state.directionalShadow,ct.spotLights.value=me.state.spot,ct.spotLightShadows.value=me.state.spotShadow,ct.rectAreaLights.value=me.state.rectArea,ct.ltc_1.value=me.state.rectAreaLTC1,ct.ltc_2.value=me.state.rectAreaLTC2,ct.pointLights.value=me.state.point,ct.pointLightShadows.value=me.state.pointShadow,ct.hemisphereLights.value=me.state.hemi,ct.directionalShadowMatrix.value=me.state.directionalShadowMatrix,ct.spotLightMatrix.value=me.state.spotLightMatrix,ct.spotLightMap.value=me.state.spotLightMap,ct.pointShadowMatrix.value=me.state.pointShadowMatrix),pe.lightProbeGrid=H.state.lightProbeGridArray.length>0,pe.currentProgram=St,pe.uniformsList=null,St}function io(P){if(P.uniformsList===null){const se=P.currentProgram.getUniforms();P.uniformsList=nu.seqWithValue(se.seq,P.uniforms)}return P.uniformsList}function Ba(P,se){const xe=z.get(P);xe.outputColorSpace=se.outputColorSpace,xe.batching=se.batching,xe.batchingColor=se.batchingColor,xe.instancing=se.instancing,xe.instancingColor=se.instancingColor,xe.instancingMorph=se.instancingMorph,xe.skinning=se.skinning,xe.morphTargets=se.morphTargets,xe.morphNormals=se.morphNormals,xe.morphColors=se.morphColors,xe.morphTargetsCount=se.morphTargetsCount,xe.numClippingPlanes=se.numClippingPlanes,xe.numIntersection=se.numClipIntersection,xe.vertexAlphas=se.vertexAlphas,xe.vertexTangents=se.vertexTangents,xe.toneMapping=se.toneMapping}function ao(P,se){if(P.length===0)return null;if(P.length===1)return P[0].texture!==null?P[0]:null;B.setFromMatrixPosition(se.matrixWorld);for(let xe=0,pe=P.length;xe<pe;xe++){const me=P[xe];if(me.texture!==null&&me.boundingBox.containsPoint(B))return me}return null}function Ha(P,se,xe,pe,me){se.isScene!==!0&&(se=qe),R.resetTextureUnits();const Qe=se.fog,nt=pe.isMeshStandardMaterial||pe.isMeshLambertMaterial||pe.isMeshPhongMaterial?se.environment:null,Ke=X===null?j.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Ht.workingColorSpace,at=pe.isMeshStandardMaterial||pe.isMeshLambertMaterial&&!pe.envMap||pe.isMeshPhongMaterial&&!pe.envMap,it=ie.get(pe.envMap||nt,at),ut=pe.vertexColors===!0&&!!xe.attributes.color&&xe.attributes.color.itemSize===4,St=!!xe.attributes.tangent&&(!!pe.normalMap||pe.anisotropy>0),ct=!!xe.morphAttributes.position,Vt=!!xe.morphAttributes.normal,fn=!!xe.morphAttributes.color;let rn=na;pe.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(rn=j.toneMapping);const Zt=xe.morphAttributes.position||xe.morphAttributes.normal||xe.morphAttributes.color,Kt=Zt!==void 0?Zt.length:0,tt=z.get(pe),kn=H.state.lights;if($e===!0&&(Ze===!0||P!==D)){const qt=P===D&&pe.id===O;je.setState(pe,P,qt)}let Dt=!1;pe.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==kn.state.version||tt.outputColorSpace!==Ke||me.isBatchedMesh&&tt.batching===!1||!me.isBatchedMesh&&tt.batching===!0||me.isBatchedMesh&&tt.batchingColor===!0&&me.colorTexture===null||me.isBatchedMesh&&tt.batchingColor===!1&&me.colorTexture!==null||me.isInstancedMesh&&tt.instancing===!1||!me.isInstancedMesh&&tt.instancing===!0||me.isSkinnedMesh&&tt.skinning===!1||!me.isSkinnedMesh&&tt.skinning===!0||me.isInstancedMesh&&tt.instancingColor===!0&&me.instanceColor===null||me.isInstancedMesh&&tt.instancingColor===!1&&me.instanceColor!==null||me.isInstancedMesh&&tt.instancingMorph===!0&&me.morphTexture===null||me.isInstancedMesh&&tt.instancingMorph===!1&&me.morphTexture!==null||tt.envMap!==it||pe.fog===!0&&tt.fog!==Qe||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==je.numPlanes||tt.numIntersection!==je.numIntersection)||tt.vertexAlphas!==ut||tt.vertexTangents!==St||tt.morphTargets!==ct||tt.morphNormals!==Vt||tt.morphColors!==fn||tt.toneMapping!==rn||tt.morphTargetsCount!==Kt||!!tt.lightProbeGrid!=H.state.lightProbeGridArray.length>0)&&(Dt=!0):(Dt=!0,tt.__version=pe.version);let wn=tt.currentProgram;Dt===!0&&(wn=tr(pe,se,me),$&&pe.isNodeMaterial&&$.onUpdateProgram(pe,wn,tt));let ci=!1,Fi=!1,ui=!1;const Qt=wn.getUniforms(),dn=tt.uniforms;if(Te.useProgram(wn.program)&&(ci=!0,Fi=!0,ui=!0),pe.id!==O&&(O=pe.id,Fi=!0),tt.needsLights){const qt=ao(H.state.lightProbeGridArray,me);tt.lightProbeGrid!==qt&&(tt.lightProbeGrid=qt,Fi=!0)}if(ci||D!==P){Te.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Qt.setValue(ee,"projectionMatrix",P.projectionMatrix),Qt.setValue(ee,"viewMatrix",P.matrixWorldInverse);const Xi=Qt.map.cameraPosition;Xi!==void 0&&Xi.setValue(ee,_e.setFromMatrixPosition(P.matrixWorld)),dt.logarithmicDepthBuffer&&Qt.setValue(ee,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(pe.isMeshPhongMaterial||pe.isMeshToonMaterial||pe.isMeshLambertMaterial||pe.isMeshBasicMaterial||pe.isMeshStandardMaterial||pe.isShaderMaterial)&&Qt.setValue(ee,"isOrthographic",P.isOrthographicCamera===!0),D!==P&&(D=P,Fi=!0,ui=!0)}if(tt.needsLights&&(kn.state.directionalShadowMap.length>0&&Qt.setValue(ee,"directionalShadowMap",kn.state.directionalShadowMap,R),kn.state.spotShadowMap.length>0&&Qt.setValue(ee,"spotShadowMap",kn.state.spotShadowMap,R),kn.state.pointShadowMap.length>0&&Qt.setValue(ee,"pointShadowMap",kn.state.pointShadowMap,R)),me.isSkinnedMesh){Qt.setOptional(ee,me,"bindMatrix"),Qt.setOptional(ee,me,"bindMatrixInverse");const qt=me.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),Qt.setValue(ee,"boneTexture",qt.boneTexture,R))}me.isBatchedMesh&&(Qt.setOptional(ee,me,"batchingTexture"),Qt.setValue(ee,"batchingTexture",me._matricesTexture,R),Qt.setOptional(ee,me,"batchingIdTexture"),Qt.setValue(ee,"batchingIdTexture",me._indirectTexture,R),Qt.setOptional(ee,me,"batchingColorTexture"),me._colorsTexture!==null&&Qt.setValue(ee,"batchingColorTexture",me._colorsTexture,R));const Ii=xe.morphAttributes;if((Ii.position!==void 0||Ii.normal!==void 0||Ii.color!==void 0)&&ht.update(me,xe,wn),(Fi||tt.receiveShadow!==me.receiveShadow)&&(tt.receiveShadow=me.receiveShadow,Qt.setValue(ee,"receiveShadow",me.receiveShadow)),(pe.isMeshStandardMaterial||pe.isMeshLambertMaterial||pe.isMeshPhongMaterial)&&pe.envMap===null&&se.environment!==null&&(dn.envMapIntensity.value=se.environmentIntensity),dn.dfgLUT!==void 0&&(dn.dfgLUT.value=n2()),Fi){if(Qt.setValue(ee,"toneMappingExposure",j.toneMappingExposure),tt.needsLights&&Ga(dn,ui),Qe&&pe.fog===!0&&Se.refreshFogUniforms(dn,Qe),Se.refreshMaterialUniforms(dn,pe,Y,Q,H.state.transmissionRenderTarget[P.id]),tt.needsLights&&tt.lightProbeGrid){const qt=tt.lightProbeGrid;dn.probesSH.value=qt.texture,dn.probesMin.value.copy(qt.boundingBox.min),dn.probesMax.value.copy(qt.boundingBox.max),dn.probesResolution.value.copy(qt.resolution)}nu.upload(ee,io(tt),dn,R)}if(pe.isShaderMaterial&&pe.uniformsNeedUpdate===!0&&(nu.upload(ee,io(tt),dn,R),pe.uniformsNeedUpdate=!1),pe.isSpriteMaterial&&Qt.setValue(ee,"center",me.center),Qt.setValue(ee,"modelViewMatrix",me.modelViewMatrix),Qt.setValue(ee,"normalMatrix",me.normalMatrix),Qt.setValue(ee,"modelMatrix",me.matrixWorld),pe.uniformsGroups!==void 0){const qt=pe.uniformsGroups;for(let Xi=0,ka=qt.length;Xi<ka;Xi++){const As=qt[Xi];le.update(As,wn),le.bind(As,wn)}}return wn}function Ga(P,se){P.ambientLightColor.needsUpdate=se,P.lightProbe.needsUpdate=se,P.directionalLights.needsUpdate=se,P.directionalLightShadows.needsUpdate=se,P.pointLights.needsUpdate=se,P.pointLightShadows.needsUpdate=se,P.spotLights.needsUpdate=se,P.spotLightShadows.needsUpdate=se,P.rectAreaLights.needsUpdate=se,P.hemisphereLights.needsUpdate=se}function Ts(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return fe},this.getActiveMipmapLevel=function(){return te},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(P,se,xe){const pe=z.get(P);pe.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,pe.__autoAllocateDepthBuffer===!1&&(pe.__useRenderToTexture=!1),z.get(P.texture).__webglTexture=se,z.get(P.depthTexture).__webglTexture=pe.__autoAllocateDepthBuffer?void 0:xe,pe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,se){const xe=z.get(P);xe.__webglFramebuffer=se,xe.__useDefaultFramebuffer=se===void 0};const Va=ee.createFramebuffer();this.setRenderTarget=function(P,se=0,xe=0){X=P,fe=se,te=xe;let pe=null,me=!1,Qe=!1;if(P){const Ke=z.get(P);if(Ke.__useDefaultFramebuffer!==void 0){Te.bindFramebuffer(ee.FRAMEBUFFER,Ke.__webglFramebuffer),w.copy(P.viewport),A.copy(P.scissor),L=P.scissorTest,Te.viewport(w),Te.scissor(A),Te.setScissorTest(L),O=-1;return}else if(Ke.__webglFramebuffer===void 0)R.setupRenderTarget(P);else if(Ke.__hasExternalTextures)R.rebindTextures(P,z.get(P.texture).__webglTexture,z.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const ut=P.depthTexture;if(Ke.__boundDepthTexture!==ut){if(ut!==null&&z.has(ut)&&(P.width!==ut.image.width||P.height!==ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(P)}}const at=P.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(Qe=!0);const it=z.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(it[se])?pe=it[se][xe]:pe=it[se],me=!0):P.samples>0&&R.useMultisampledRTT(P)===!1?pe=z.get(P).__webglMultisampledFramebuffer:Array.isArray(it)?pe=it[xe]:pe=it,w.copy(P.viewport),A.copy(P.scissor),L=P.scissorTest}else w.copy(ue).multiplyScalar(Y).floor(),A.copy(De).multiplyScalar(Y).floor(),L=Ae;if(xe!==0&&(pe=Va),Te.bindFramebuffer(ee.FRAMEBUFFER,pe)&&Te.drawBuffers(P,pe),Te.viewport(w),Te.scissor(A),Te.setScissorTest(L),me){const Ke=z.get(P.texture);ee.framebufferTexture2D(ee.FRAMEBUFFER,ee.COLOR_ATTACHMENT0,ee.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ke.__webglTexture,xe)}else if(Qe){const Ke=se;for(let at=0;at<P.textures.length;at++){const it=z.get(P.textures[at]);ee.framebufferTextureLayer(ee.FRAMEBUFFER,ee.COLOR_ATTACHMENT0+at,it.__webglTexture,xe,Ke)}}else if(P!==null&&xe!==0){const Ke=z.get(P.texture);ee.framebufferTexture2D(ee.FRAMEBUFFER,ee.COLOR_ATTACHMENT0,ee.TEXTURE_2D,Ke.__webglTexture,xe)}O=-1},this.readRenderTargetPixels=function(P,se,xe,pe,me,Qe,nt,Ke=0){if(!(P&&P.isWebGLRenderTarget)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let at=z.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&nt!==void 0&&(at=at[nt]),at){Te.bindFramebuffer(ee.FRAMEBUFFER,at);try{const it=P.textures[Ke],ut=it.format,St=it.type;if(P.textures.length>1&&ee.readBuffer(ee.COLOR_ATTACHMENT0+Ke),!dt.textureFormatReadable(ut)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(St)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}se>=0&&se<=P.width-pe&&xe>=0&&xe<=P.height-me&&ee.readPixels(se,xe,pe,me,ne.convert(ut),ne.convert(St),Qe)}finally{const it=X!==null?z.get(X).__webglFramebuffer:null;Te.bindFramebuffer(ee.FRAMEBUFFER,it)}}},this.readRenderTargetPixelsAsync=async function(P,se,xe,pe,me,Qe,nt,Ke=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let at=z.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&nt!==void 0&&(at=at[nt]),at)if(se>=0&&se<=P.width-pe&&xe>=0&&xe<=P.height-me){Te.bindFramebuffer(ee.FRAMEBUFFER,at);const it=P.textures[Ke],ut=it.format,St=it.type;if(P.textures.length>1&&ee.readBuffer(ee.COLOR_ATTACHMENT0+Ke),!dt.textureFormatReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(St))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=ee.createBuffer();ee.bindBuffer(ee.PIXEL_PACK_BUFFER,ct),ee.bufferData(ee.PIXEL_PACK_BUFFER,Qe.byteLength,ee.STREAM_READ),ee.readPixels(se,xe,pe,me,ne.convert(ut),ne.convert(St),0);const Vt=X!==null?z.get(X).__webglFramebuffer:null;Te.bindFramebuffer(ee.FRAMEBUFFER,Vt);const fn=ee.fenceSync(ee.SYNC_GPU_COMMANDS_COMPLETE,0);return ee.flush(),await yS(ee,fn,4),ee.bindBuffer(ee.PIXEL_PACK_BUFFER,ct),ee.getBufferSubData(ee.PIXEL_PACK_BUFFER,0,Qe),ee.deleteBuffer(ct),ee.deleteSync(fn),Qe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,se=null,xe=0){const pe=Math.pow(2,-xe),me=Math.floor(P.image.width*pe),Qe=Math.floor(P.image.height*pe),nt=se!==null?se.x:0,Ke=se!==null?se.y:0;R.setTexture2D(P,0),ee.copyTexSubImage2D(ee.TEXTURE_2D,xe,0,0,nt,Ke,me,Qe),Te.unbindTexture()};const bn=ee.createFramebuffer(),ml=ee.createFramebuffer();this.copyTextureToTexture=function(P,se,xe=null,pe=null,me=0,Qe=0){let nt,Ke,at,it,ut,St,ct,Vt,fn;const rn=P.isCompressedTexture?P.mipmaps[Qe]:P.image;if(xe!==null)nt=xe.max.x-xe.min.x,Ke=xe.max.y-xe.min.y,at=xe.isBox3?xe.max.z-xe.min.z:1,it=xe.min.x,ut=xe.min.y,St=xe.isBox3?xe.min.z:0;else{const dn=Math.pow(2,-me);nt=Math.floor(rn.width*dn),Ke=Math.floor(rn.height*dn),P.isDataArrayTexture?at=rn.depth:P.isData3DTexture?at=Math.floor(rn.depth*dn):at=1,it=0,ut=0,St=0}pe!==null?(ct=pe.x,Vt=pe.y,fn=pe.z):(ct=0,Vt=0,fn=0);const Zt=ne.convert(se.format),Kt=ne.convert(se.type);let tt;se.isData3DTexture?(R.setTexture3D(se,0),tt=ee.TEXTURE_3D):se.isDataArrayTexture||se.isCompressedArrayTexture?(R.setTexture2DArray(se,0),tt=ee.TEXTURE_2D_ARRAY):(R.setTexture2D(se,0),tt=ee.TEXTURE_2D),Te.activeTexture(ee.TEXTURE0),Te.pixelStorei(ee.UNPACK_FLIP_Y_WEBGL,se.flipY),Te.pixelStorei(ee.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),Te.pixelStorei(ee.UNPACK_ALIGNMENT,se.unpackAlignment);const kn=Te.getParameter(ee.UNPACK_ROW_LENGTH),Dt=Te.getParameter(ee.UNPACK_IMAGE_HEIGHT),wn=Te.getParameter(ee.UNPACK_SKIP_PIXELS),ci=Te.getParameter(ee.UNPACK_SKIP_ROWS),Fi=Te.getParameter(ee.UNPACK_SKIP_IMAGES);Te.pixelStorei(ee.UNPACK_ROW_LENGTH,rn.width),Te.pixelStorei(ee.UNPACK_IMAGE_HEIGHT,rn.height),Te.pixelStorei(ee.UNPACK_SKIP_PIXELS,it),Te.pixelStorei(ee.UNPACK_SKIP_ROWS,ut),Te.pixelStorei(ee.UNPACK_SKIP_IMAGES,St);const ui=P.isDataArrayTexture||P.isData3DTexture,Qt=se.isDataArrayTexture||se.isData3DTexture;if(P.isDepthTexture){const dn=z.get(P),Ii=z.get(se),qt=z.get(dn.__renderTarget),Xi=z.get(Ii.__renderTarget);Te.bindFramebuffer(ee.READ_FRAMEBUFFER,qt.__webglFramebuffer),Te.bindFramebuffer(ee.DRAW_FRAMEBUFFER,Xi.__webglFramebuffer);for(let ka=0;ka<at;ka++)ui&&(ee.framebufferTextureLayer(ee.READ_FRAMEBUFFER,ee.COLOR_ATTACHMENT0,z.get(P).__webglTexture,me,St+ka),ee.framebufferTextureLayer(ee.DRAW_FRAMEBUFFER,ee.COLOR_ATTACHMENT0,z.get(se).__webglTexture,Qe,fn+ka)),ee.blitFramebuffer(it,ut,nt,Ke,ct,Vt,nt,Ke,ee.DEPTH_BUFFER_BIT,ee.NEAREST);Te.bindFramebuffer(ee.READ_FRAMEBUFFER,null),Te.bindFramebuffer(ee.DRAW_FRAMEBUFFER,null)}else if(me!==0||P.isRenderTargetTexture||z.has(P)){const dn=z.get(P),Ii=z.get(se);Te.bindFramebuffer(ee.READ_FRAMEBUFFER,bn),Te.bindFramebuffer(ee.DRAW_FRAMEBUFFER,ml);for(let qt=0;qt<at;qt++)ui?ee.framebufferTextureLayer(ee.READ_FRAMEBUFFER,ee.COLOR_ATTACHMENT0,dn.__webglTexture,me,St+qt):ee.framebufferTexture2D(ee.READ_FRAMEBUFFER,ee.COLOR_ATTACHMENT0,ee.TEXTURE_2D,dn.__webglTexture,me),Qt?ee.framebufferTextureLayer(ee.DRAW_FRAMEBUFFER,ee.COLOR_ATTACHMENT0,Ii.__webglTexture,Qe,fn+qt):ee.framebufferTexture2D(ee.DRAW_FRAMEBUFFER,ee.COLOR_ATTACHMENT0,ee.TEXTURE_2D,Ii.__webglTexture,Qe),me!==0?ee.blitFramebuffer(it,ut,nt,Ke,ct,Vt,nt,Ke,ee.COLOR_BUFFER_BIT,ee.NEAREST):Qt?ee.copyTexSubImage3D(tt,Qe,ct,Vt,fn+qt,it,ut,nt,Ke):ee.copyTexSubImage2D(tt,Qe,ct,Vt,it,ut,nt,Ke);Te.bindFramebuffer(ee.READ_FRAMEBUFFER,null),Te.bindFramebuffer(ee.DRAW_FRAMEBUFFER,null)}else Qt?P.isDataTexture||P.isData3DTexture?ee.texSubImage3D(tt,Qe,ct,Vt,fn,nt,Ke,at,Zt,Kt,rn.data):se.isCompressedArrayTexture?ee.compressedTexSubImage3D(tt,Qe,ct,Vt,fn,nt,Ke,at,Zt,rn.data):ee.texSubImage3D(tt,Qe,ct,Vt,fn,nt,Ke,at,Zt,Kt,rn):P.isDataTexture?ee.texSubImage2D(ee.TEXTURE_2D,Qe,ct,Vt,nt,Ke,Zt,Kt,rn.data):P.isCompressedTexture?ee.compressedTexSubImage2D(ee.TEXTURE_2D,Qe,ct,Vt,rn.width,rn.height,Zt,rn.data):ee.texSubImage2D(ee.TEXTURE_2D,Qe,ct,Vt,nt,Ke,Zt,Kt,rn);Te.pixelStorei(ee.UNPACK_ROW_LENGTH,kn),Te.pixelStorei(ee.UNPACK_IMAGE_HEIGHT,Dt),Te.pixelStorei(ee.UNPACK_SKIP_PIXELS,wn),Te.pixelStorei(ee.UNPACK_SKIP_ROWS,ci),Te.pixelStorei(ee.UNPACK_SKIP_IMAGES,Fi),Qe===0&&se.generateMipmaps&&ee.generateMipmap(tt),Te.unbindTexture()},this.initRenderTarget=function(P){z.get(P).__webglFramebuffer===void 0&&R.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?R.setTextureCube(P,0):P.isData3DTexture?R.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?R.setTexture2DArray(P,0):R.setTexture2D(P,0),Te.unbindTexture()},this.resetState=function(){fe=0,te=0,X=null,Te.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ta}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ht._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ht._getUnpackColorSpace()}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const iu=13,qr=1e5,ln=new Float32Array(qr*iu),Rt=new Pt,qn=new Pt,Yn=new Pt;function vv(r,e,i,s,l,c,f,p,m){if(m){Rt.set(m),r[e]=Rt.r,r[e+1]=Rt.g,r[e+2]=Rt.b;return}switch(i){case"solid":Rt.set(l),r[e]=Rt.r,r[e+1]=Rt.g,r[e+2]=Rt.b;break;case"rainbow":Rt.setHSL(s,.9,.55),r[e]=Rt.r,r[e+1]=Rt.g,r[e+2]=Rt.b;break;case"forest":{if(s<.2)r[e]=.4,r[e+1]=.25,r[e+2]=.13;else if(s<.7){const h=(s-.2)/.5;qn.set("#0f766e"),Yn.set("#10b981"),Rt.copy(qn).lerp(Yn,h),r[e]=Rt.r,r[e+1]=Rt.g,r[e+2]=Rt.b}else{const h=(s-.7)/.3;qn.set("#10b981"),Yn.set("#f59e0b"),Rt.copy(qn).lerp(Yn,h),r[e]=Rt.r,r[e+1]=Rt.g,r[e+2]=Rt.b}break}case"sunset":{if(s<.5){const h=s/.5;qn.set("#ec4899"),Yn.set("#f97316"),Rt.copy(qn).lerp(Yn,h)}else{const h=(s-.5)/.5;qn.set("#f97316"),Yn.set("#eab308"),Rt.copy(qn).lerp(Yn,h)}r[e]=Rt.r,r[e+1]=Rt.g,r[e+2]=Rt.b;break}case"depth":{const h=p-f||1,g=Math.max(0,Math.min(1,(c-f)/h));if(g<.5){const _=g/.5;qn.set("#4f46e5"),Yn.set("#06b6d4"),Rt.copy(qn).lerp(Yn,_)}else{const _=(g-.5)/.5;qn.set("#06b6d4"),Yn.set("#d946ef"),Rt.copy(qn).lerp(Yn,_)}r[e]=Rt.r,r[e+1]=Rt.g,r[e+2]=Rt.b;break}case"neon":{if(s<.3){const h=s/.3;qn.set("#00f5ff"),Yn.set("#9d00ff"),Rt.copy(qn).lerp(Yn,h)}else{const h=(s-.3)/.7;qn.set("#9d00ff"),Yn.set("#ff007f"),Rt.copy(qn).lerp(Yn,h)}r[e]=Rt.r,r[e+1]=Rt.g,r[e+2]=Rt.b;break}default:Rt.set(l),r[e]=Rt.r,r[e+1]=Rt.g,r[e+2]=Rt.b}}function Wt(r,e,i,s,l,c,f,p){const m=Math.cos(f),h=Math.sin(f),g=l*i-c*e,_=c*r-s*i,x=s*e-l*r,M=(s*r+l*e+c*i)*(1-m);p.x=r*m+g*h+s*M,p.y=e*m+_*h+l*M,p.z=i*m+x*h+c*M;const E=Math.sqrt(p.x*p.x+p.y*p.y+p.z*p.z);E>1e-5&&(p.x/=E,p.y/=E,p.z/=E)}function f_(r,e,i,s,l){let c=0,f=!1,p=0,m=0;const h={};for(const C of e)C.symbol&&(h[C.symbol]=C);let g=0;const _=new Float32Array(qr),x=new Float32Array(qr),M=new Float32Array(qr),E=new Float32Array(qr);let U=0,S=0,y=0,I=0,G=1,B=0,Z=0,H=0,k=0,N=0,V=0,j=0;function W(C,K,Q){C<Z&&(Z=C),C>H&&(H=C),K<k&&(k=K),K>N&&(N=K),Q<V&&(V=Q),Q>j&&(j=Q)}const $={},fe={step:s,angle:l,...i};for(const C of e)C.symbol&&(C.valueExpression?$[C.symbol]=Zs(C.valueExpression,fe):C.actionType===Ee.FORWARD||C.actionType===Ee.FORWARD_NO_PEN?$[C.symbol]=s:$[C.symbol]=l);const te={x:0,y:0,z:0};let X=0,O=0,D=1,w=1,A=0,L=0;const T=r.length;for(let C=0;C<T;C++){const K=r[C],Q=h[K];if(!Q)continue;const Y=$[K]??0,q=Y*Math.PI/180;switch(Q.actionType){case Ee.FORWARD:{U+=I*Y,S+=G*Y,y+=B*Y,W(U,S,y),m+=Y,m>p&&(p=m),c++;break}case Ee.FORWARD_NO_PEN:{U+=I*Y,S+=G*Y,y+=B*Y,W(U,S,y),m+=Y,m>p&&(p=m);break}case Ee.TURN_LEFT:{Wt(I,G,B,X,O,D,q,te),I=te.x,G=te.y,B=te.z,Wt(w,A,L,X,O,D,q,te),w=te.x,A=te.y,L=te.z;break}case Ee.TURN_RIGHT:{Wt(I,G,B,X,O,D,-q,te),I=te.x,G=te.y,B=te.z,Wt(w,A,L,X,O,D,-q,te),w=te.x,A=te.y,L=te.z;break}case Ee.PUSH_STATE:{g<qr&&(_[g]=U,x[g]=S,M[g]=y,E[g]=m,g++);break}case Ee.POP_STATE:{g>0&&(g--,U=_[g],S=x[g],y=M[g],m=E[g]);break}case Ee.PITCH_UP:case Ee.PITCH_DOWN:case Ee.ROLL_LEFT:case Ee.ROLL_RIGHT:case Ee.YAW_LEFT:case Ee.YAW_RIGHT:case Ee.TURN_ROUND:{f=!0,Q.actionType===Ee.PITCH_UP?(Wt(I,G,B,w,A,L,q,te),I=te.x,G=te.y,B=te.z,Wt(X,O,D,w,A,L,q,te),X=te.x,O=te.y,D=te.z):Q.actionType===Ee.PITCH_DOWN?(Wt(I,G,B,w,A,L,-q,te),I=te.x,G=te.y,B=te.z,Wt(X,O,D,w,A,L,-q,te),X=te.x,O=te.y,D=te.z):Q.actionType===Ee.ROLL_LEFT?(Wt(w,A,L,I,G,B,q,te),w=te.x,A=te.y,L=te.z,Wt(X,O,D,I,G,B,q,te),X=te.x,O=te.y,D=te.z):Q.actionType===Ee.ROLL_RIGHT?(Wt(w,A,L,I,G,B,-q,te),w=te.x,A=te.y,L=te.z,Wt(X,O,D,I,G,B,-q,te),X=te.x,O=te.y,D=te.z):Q.actionType===Ee.YAW_LEFT?(Wt(I,G,B,X,O,D,q,te),I=te.x,G=te.y,B=te.z,Wt(w,A,L,X,O,D,q,te),w=te.x,A=te.y,L=te.z):Q.actionType===Ee.YAW_RIGHT?(Wt(I,G,B,X,O,D,-q,te),I=te.x,G=te.y,B=te.z,Wt(w,A,L,X,O,D,-q,te),w=te.x,A=te.y,L=te.z):Q.actionType===Ee.TURN_ROUND&&(I=-I,G=-G,B=-B,w=-w,A=-A,L=-L);break}}}return{segmentCount:c,is3D:f,boundingBox:{min:{x:Z,y:k,z:V},max:{x:H,y:N,z:j}},maxPathDist:p}}function ch(r,e,i,s,l,c,f,p,m,h,g,_,x){const M={},E={},U={},S={step:s,angle:l,...i};for(const A of e)A.symbol&&(M[A.symbol]=A,A.valueExpression?E[A.symbol]=Zs(A.valueExpression,S):A.actionType===Ee.FORWARD||A.actionType===Ee.FORWARD_NO_PEN?E[A.symbol]=s:E[A.symbol]=l,A.colorExpression&&(U[A.symbol]=Bb(A.colorExpression,S)));let y=0,I=0,G=0,B=0,Z=1,H=0,k=0,N=0,V=1,j=1,W=0,$=0,fe=0,te=0,X=0;const O=p/100*(x||1),D={x:0,y:0,z:0},w=r.length;for(let A=0;A<w;A++){const L=r[A],T=M[L];if(!T)continue;const C=E[L]??0,K=U[L],Q=C*Math.PI/180;switch(T.actionType){case Ee.FORWARD:{const Y=y+B*C,q=I+Z*C,re=G+H*C,ue=fe,De=fe+C,Ae=te*6;if(m==="tree")if(O<=ue)h[Ae]=y,h[Ae+1]=I,h[Ae+2]=G,h[Ae+3]=y,h[Ae+4]=I,h[Ae+5]=G;else if(O>=De)h[Ae]=y,h[Ae+1]=I,h[Ae+2]=G,h[Ae+3]=Y,h[Ae+4]=q,h[Ae+5]=re;else{const $e=(O-ue)/C;h[Ae]=y,h[Ae+1]=I,h[Ae+2]=G,h[Ae+3]=y+(Y-y)*$e,h[Ae+4]=I+(q-I)*$e,h[Ae+5]=G+(re-G)*$e}else h[Ae]=y,h[Ae+1]=I,h[Ae+2]=G,h[Ae+3]=Y,h[Ae+4]=q,h[Ae+5]=re;const Ue=A/w;vv(g,Ae,c,Ue,f,I,_.min.y,_.max.y,K),vv(g,Ae+3,c,Ue,f,q,_.min.y,_.max.y,K),y=Y,I=q,G=re,fe=De,te++;break}case Ee.FORWARD_NO_PEN:{y+=B*C,I+=Z*C,G+=H*C,fe+=C;break}case Ee.TURN_LEFT:{Wt(B,Z,H,k,N,V,Q,D),B=D.x,Z=D.y,H=D.z,Wt(j,W,$,k,N,V,Q,D),j=D.x,W=D.y,$=D.z;break}case Ee.TURN_RIGHT:{Wt(B,Z,H,k,N,V,-Q,D),B=D.x,Z=D.y,H=D.z,Wt(j,W,$,k,N,V,-Q,D),j=D.x,W=D.y,$=D.z;break}case Ee.PUSH_STATE:{const Y=X*iu;Y+iu<ln.length&&(ln[Y]=y,ln[Y+1]=I,ln[Y+2]=G,ln[Y+3]=B,ln[Y+4]=Z,ln[Y+5]=H,ln[Y+6]=k,ln[Y+7]=N,ln[Y+8]=V,ln[Y+9]=j,ln[Y+10]=W,ln[Y+11]=$,ln[Y+12]=fe,X++);break}case Ee.POP_STATE:{if(X>0){X--;const Y=X*iu;y=ln[Y],I=ln[Y+1],G=ln[Y+2],B=ln[Y+3],Z=ln[Y+4],H=ln[Y+5],k=ln[Y+6],N=ln[Y+7],V=ln[Y+8],j=ln[Y+9],W=ln[Y+10],$=ln[Y+11],fe=ln[Y+12]}break}case Ee.PITCH_UP:{Wt(B,Z,H,j,W,$,Q,D),B=D.x,Z=D.y,H=D.z,Wt(k,N,V,j,W,$,Q,D),k=D.x,N=D.y,V=D.z;break}case Ee.PITCH_DOWN:{Wt(B,Z,H,j,W,$,-Q,D),B=D.x,Z=D.y,H=D.z,Wt(k,N,V,j,W,$,-Q,D),k=D.x,N=D.y,V=D.z;break}case Ee.ROLL_LEFT:{Wt(j,W,$,B,Z,H,Q,D),j=D.x,W=D.y,$=D.z,Wt(k,N,V,B,Z,H,Q,D),k=D.x,N=D.y,V=D.z;break}case Ee.ROLL_RIGHT:{Wt(j,W,$,B,Z,H,-Q,D),j=D.x,W=D.y,$=D.z,Wt(k,N,V,B,Z,H,-Q,D),k=D.x,N=D.y,V=D.z;break}case Ee.YAW_LEFT:{Wt(B,Z,H,k,N,V,Q,D),B=D.x,Z=D.y,H=D.z,Wt(j,W,$,k,N,V,Q,D),j=D.x,W=D.y,$=D.z;break}case Ee.YAW_RIGHT:{Wt(B,Z,H,k,N,V,-Q,D),B=D.x,Z=D.y,H=D.z,Wt(j,W,$,k,N,V,-Q,D),j=D.x,W=D.y,$=D.z;break}case Ee.TURN_ROUND:{B=-B,Z=-Z,H=-H,j=-j,W=-W,$=-$;break}}}return te}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const yi=[{id:"sierpinski_arrow",name:"Sierpinski Arrowhead",axiom:"YF",iterations:6,rules:[{id:"sa1",inputSymbol:"X",successor:"YF+XF+Y"},{id:"sa2",inputSymbol:"Y",successor:"XF-YF-X"}],variables:[{id:"sav1",name:"angle",value:60,min:30,max:120,step:.5,animate:!1,animationSpeed:12,animationType:"ping-pong",animationDirection:1},{id:"sav2",name:"step",value:5,min:1,max:15,step:.1,animate:!1,animationSpeed:2,animationType:"ping-pong",animationDirection:1}],symbolActions:[{symbol:"F",actionType:Ee.FORWARD,valueExpression:"step"},{symbol:"X",actionType:Ee.NONE,valueExpression:""},{symbol:"Y",actionType:Ee.NONE,valueExpression:""},{symbol:"+",actionType:Ee.TURN_LEFT,valueExpression:"angle"},{symbol:"-",actionType:Ee.TURN_RIGHT,valueExpression:"angle"}],renderSettings:{stepSize:5,angle:60,strokeWidth:1.5,strokeColor:"#3b82f6",backgroundColor:"#090d16",colorPalette:"rainbow",is3D:!1,showAxes:!1,growPercent:100}},{id:"dragon",name:"Dragon Curve",axiom:"FX",iterations:10,rules:[{id:"dr1",inputSymbol:"X",successor:"X+YF+"},{id:"dr2",inputSymbol:"Y",successor:"-FX-Y"}],variables:[{id:"dv1",name:"angle",value:90,min:45,max:135,step:.5,animate:!1,animationSpeed:5,animationType:"ping-pong",animationDirection:1},{id:"dv2",name:"step",value:8,min:2,max:25,step:.2,animate:!1,animationSpeed:4,animationType:"ping-pong",animationDirection:1}],symbolActions:[{symbol:"F",actionType:Ee.FORWARD,valueExpression:"step"},{symbol:"+",actionType:Ee.TURN_LEFT,valueExpression:"angle"},{symbol:"-",actionType:Ee.TURN_RIGHT,valueExpression:"angle"},{symbol:"X",actionType:Ee.NONE,valueExpression:""},{symbol:"Y",actionType:Ee.NONE,valueExpression:""}],renderSettings:{stepSize:8,angle:90,strokeWidth:2.2,strokeColor:"#c084fc",backgroundColor:"#090d16",colorPalette:"sunset",is3D:!1,showAxes:!1,growPercent:100}},{id:"hilbert",name:"Hilbert Grid-Curve",axiom:"X",iterations:5,rules:[{id:"h1",inputSymbol:"X",successor:"-YF+XF+FY-X"},{id:"h2",inputSymbol:"Y",successor:"+XF-YF-FX+Y"}],variables:[{id:"hv1",name:"angle",value:90,min:45,max:135,step:.5,animate:!1,animationSpeed:10,animationType:"ping-pong",animationDirection:1},{id:"hv2",name:"step",value:6,min:1,max:20,step:.1,animate:!1,animationSpeed:3,animationType:"ping-pong",animationDirection:1}],symbolActions:[{symbol:"F",actionType:Ee.FORWARD,valueExpression:"step"},{symbol:"X",actionType:Ee.NONE,valueExpression:""},{symbol:"Y",actionType:Ee.NONE,valueExpression:""},{symbol:"+",actionType:Ee.TURN_LEFT,valueExpression:"angle"},{symbol:"-",actionType:Ee.TURN_RIGHT,valueExpression:"angle"}],renderSettings:{stepSize:6,angle:90,strokeWidth:1.8,strokeColor:"#22d3ee",backgroundColor:"#090d16",colorPalette:"neon",is3D:!1,showAxes:!1,growPercent:100}},{id:"tree3d_clean",name:"Symmetric 3D Fractal Tree",axiom:"A",iterations:5,rules:[{id:"tc1",inputSymbol:"A",successor:"F[&+FA][&-FA]/A"},{id:"tc2",inputSymbol:"F",successor:"FF"}],variables:[{id:"tcv1",name:"angle",value:28,min:15,max:45,step:.5,animate:!1,animationSpeed:10,animationType:"ping-pong",animationDirection:1},{id:"tcv2",name:"step",value:4,min:1,max:10,step:.1,animate:!1,animationSpeed:2,animationType:"ping-pong",animationDirection:1}],symbolActions:[{symbol:"F",actionType:Ee.FORWARD,valueExpression:"step"},{symbol:"+",actionType:Ee.TURN_LEFT,valueExpression:"angle"},{symbol:"-",actionType:Ee.TURN_RIGHT,valueExpression:"angle"},{symbol:"&",actionType:Ee.PITCH_UP,valueExpression:"angle"},{symbol:"^",actionType:Ee.PITCH_DOWN,valueExpression:"angle"},{symbol:"/",actionType:Ee.ROLL_RIGHT,valueExpression:"angle"},{symbol:"\\",actionType:Ee.ROLL_LEFT,valueExpression:"angle"},{symbol:"[",actionType:Ee.PUSH_STATE,valueExpression:""},{symbol:"]",actionType:Ee.POP_STATE,valueExpression:""},{symbol:"A",actionType:Ee.NONE,valueExpression:""}],renderSettings:{stepSize:4,angle:28,strokeWidth:2,strokeColor:"#f59e0b",backgroundColor:"#090d16",colorPalette:"depth",is3D:!0,showAxes:!1,growPercent:100}},{id:"levy_c",name:"Levy C-Curve",axiom:"F",iterations:9,rules:[{id:"lc1",inputSymbol:"F",successor:"+F--F+"}],variables:[{id:"lcv1",name:"angle",value:45,min:20,max:90,step:.5,animate:!1,animationSpeed:8,animationType:"ping-pong",animationDirection:1},{id:"lcv2",name:"step",value:6,min:1,max:20,step:.1,animate:!1,animationSpeed:3,animationType:"ping-pong",animationDirection:1}],symbolActions:[{symbol:"F",actionType:Ee.FORWARD,valueExpression:"step"},{symbol:"+",actionType:Ee.TURN_LEFT,valueExpression:"angle"},{symbol:"-",actionType:Ee.TURN_RIGHT,valueExpression:"angle"}],renderSettings:{stepSize:6,angle:45,strokeWidth:1.5,strokeColor:"#ec4899",backgroundColor:"#090d16",colorPalette:"neon",is3D:!1,showAxes:!1,growPercent:100}},{id:"koch_snowflake",name:"Koch Snowflake",axiom:"F--F--F",iterations:4,rules:[{id:"ks1",inputSymbol:"F",successor:"F+F--F+F"}],variables:[],symbolActions:[{symbol:"F",actionType:Ee.FORWARD,valueExpression:"6"},{symbol:"+",actionType:Ee.TURN_LEFT,valueExpression:"60"},{symbol:"-",actionType:Ee.TURN_RIGHT,valueExpression:"60"}],renderSettings:{stepSize:6,angle:60,strokeWidth:1.6,strokeColor:"#38bdf8",backgroundColor:"#090d16",colorPalette:"rainbow",is3D:!1,showAxes:!1,growPercent:100}},{id:"fractal_plant",name:"Fractal Plant",axiom:"X",iterations:5,rules:[{id:"fp1",inputSymbol:"X",successor:"F+[[X]-X]-F[-FX]+X"},{id:"fp2",inputSymbol:"F",successor:"FF"}],variables:[],symbolActions:[{symbol:"F",actionType:Ee.FORWARD,valueExpression:"4"},{symbol:"X",actionType:Ee.NONE,valueExpression:""},{symbol:"+",actionType:Ee.TURN_LEFT,valueExpression:"25"},{symbol:"-",actionType:Ee.TURN_RIGHT,valueExpression:"25"},{symbol:"[",actionType:Ee.PUSH_STATE,valueExpression:""},{symbol:"]",actionType:Ee.POP_STATE,valueExpression:""}],renderSettings:{stepSize:4,angle:25,strokeWidth:1.4,strokeColor:"#10b981",backgroundColor:"#090d16",colorPalette:"forest",is3D:!1,showAxes:!1,growPercent:100}},{id:"bush",name:"Cloud Bush",axiom:"F",iterations:4,rules:[{id:"bu1",inputSymbol:"F",successor:"FF+[+F-F-F]-[-F+F+F]"}],variables:[],symbolActions:[{symbol:"F",actionType:Ee.FORWARD,valueExpression:"5"},{symbol:"+",actionType:Ee.TURN_LEFT,valueExpression:"25"},{symbol:"-",actionType:Ee.TURN_RIGHT,valueExpression:"25"},{symbol:"&",actionType:Ee.PITCH_UP,valueExpression:"25"},{symbol:"^",actionType:Ee.PITCH_DOWN,valueExpression:"25"},{symbol:"/",actionType:Ee.ROLL_RIGHT,valueExpression:"25"},{symbol:"\\",actionType:Ee.ROLL_LEFT,valueExpression:"25"},{symbol:"[",actionType:Ee.PUSH_STATE,valueExpression:""},{symbol:"]",actionType:Ee.POP_STATE,valueExpression:""}],renderSettings:{stepSize:5,angle:25,strokeWidth:1.8,strokeColor:"#ea580c",backgroundColor:"#090d16",colorPalette:"sunset",is3D:!1,showAxes:!1,growPercent:100}}];/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),s2=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,s)=>s?s.toUpperCase():i.toLowerCase()),_v=r=>{const e=s2(r);return e.charAt(0).toUpperCase()+e.slice(1)},d_=(...r)=>r.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim(),r2=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var o2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=We.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:f,...p},m)=>We.createElement("svg",{ref:m,...o2,width:e,height:e,stroke:r,strokeWidth:s?Number(i)*24/Number(e):i,className:d_("lucide",l),...!c&&!r2(p)&&{"aria-hidden":"true"},...p},[...f.map(([h,g])=>We.createElement(h,g)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=(r,e)=>{const i=We.forwardRef(({className:s,...l},c)=>We.createElement(l2,{ref:c,iconNode:e,className:d_(`lucide-${a2(_v(r))}`,`lucide-${r}`,s),...l}));return i.displayName=_v(r),i};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],gp=wt("activity",c2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z",key:"169p4p"}],["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}]],f2=wt("bookmark-check",u2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],xp=wt("box",d2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],h_=wt("check",h2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],m2=wt("circle-check",p2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],p_=wt("circle-question-mark",g2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],v2=wt("clock",x2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],y2=wt("code",_2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b2=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],m_=wt("compass",b2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],M2=wt("copy",S2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E2=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],g_=wt("cpu",E2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T2=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],ll=wt("download",T2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],R2=wt("eye",A2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C2=[["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}]],w2=wt("file-code",C2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N2=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"10",cy:"12",r:"2",key:"737tya"}],["path",{d:"m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22",key:"wt3hpn"}]],D2=wt("file-image",N2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U2=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]],L2=wt("film",U2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O2=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],x_=wt("flame",O2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P2=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],v_=wt("folder-open",P2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],I2=wt("grid-3x3",F2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=[["path",{d:"m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9",key:"1hayfq"}],["path",{d:"m18 15 4-4",key:"16gjal"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",key:"15ts47"}]],__=wt("hammer",z2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],vp=wt("layers",B2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],G2=wt("maximize-2",H2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V2=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],k2=wt("monitor",V2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j2=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],W2=wt("palette",j2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],y_=wt("pause",X2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],Y2=wt("pen-line",q2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],b_=wt("play",Z2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K2=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],vu=wt("plus",K2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],J2=wt("save",Q2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],eR=wt("search",$2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tR=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],nR=wt("settings",tR);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iR=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],S_=wt("share-2",iR);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aR=[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],sR=wt("sliders-vertical",aR);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rR=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],hl=wt("sparkles",rR);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oR=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],lR=wt("trash-2",oR);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cR=[["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],_p=wt("trash",cR);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uR=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],yv=wt("triangle-alert",uR);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fR=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],M_=wt("upload",fR);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dR=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],hR=wt("x",dR),pR=({activePresetId:r,onSelectPreset:e,definition:i})=>{const s=r==="custom",l=i.lastLoadedPresetId||yi[0].id,c=yi.find(p=>p.id===(s?l:r))||yi[0],f=p=>{const m=yi.find(h=>h.id===p.target.value);m&&e(m)};return v.jsxs("div",{className:"space-y-3",children:[v.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[v.jsx(m_,{className:"w-5 h-5 text-emerald-400",id:"icon-compass"}),v.jsx("h3",{className:"font-semibold text-slate-200",children:"Fractal Presets"})]}),v.jsx("p",{className:"text-xs text-slate-400 leading-relaxed text-left",children:"Select a fractal template as a starting point, then freely customize rules, variables, and symbol actions."}),v.jsxs("div",{className:"space-y-2",children:[v.jsx("div",{className:"relative",children:v.jsxs("select",{value:r,onChange:f,className:"w-full bg-slate-900 border border-slate-800 text-slate-100 text-xs p-2.5 rounded-xl focus:outline-none focus:border-emerald-500 cursor-pointer text-ellipsis overflow-hidden",children:[s&&v.jsx("option",{value:"custom",className:"bg-slate-950 text-indigo-300 font-semibold font-sans",children:"🛠️ Customized System"}),yi.map(p=>{const m=p.renderSettings.is3D?" (3D)":" (2D)";return v.jsxs("option",{value:p.id,className:"bg-slate-950 text-slate-200",children:[p.name," ",m]},p.id)})]})}),s?v.jsxs("div",{className:"bg-slate-900/40 border border-indigo-500/20 p-3 rounded-xl flex flex-col gap-2 shadow-inner",children:[v.jsxs("div",{className:"flex items-center justify-between gap-1.5 min-w-0",children:[v.jsx("span",{className:"text-xs font-semibold text-slate-200 truncate",children:"Modified System"}),v.jsx("span",{className:"text-[10px] bg-amber-500/20 text-amber-300 font-bold px-1.5 py-0.5 rounded",children:"Local edits active"})]}),v.jsx("p",{className:"text-[10px] text-slate-400 leading-relaxed text-left",children:"You customized the original configuration of this fractal. You can restore the preset's initial values at any time:"}),v.jsxs("button",{type:"button",onClick:()=>{const p=yi.find(m=>m.id===l)||yi[0];e(p)},className:"w-full py-1.5 px-3 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30 hover:border-emerald-500/50 rounded-xl text-[10px] text-center transition-all cursor-pointer focus:outline-none",children:["🔄 Restore Original Example (",(c==null?void 0:c.name)||"Original",")"]})]}):c&&v.jsxs("div",{className:"bg-slate-900/30 border border-slate-800/80 p-3 rounded-xl flex items-center justify-between gap-2.5",children:[v.jsxs("div",{className:"space-y-1 min-w-0 flex-1",children:[v.jsxs("div",{className:"flex items-center gap-1.5 min-w-0",children:[v.jsx("span",{className:"text-xs font-semibold text-slate-200 truncate",children:c.name}),c.renderSettings.is3D?v.jsx(xp,{className:"w-3.5 h-3.5 text-indigo-400 shrink-0",title:"3D L-System"}):v.jsx(vp,{className:"w-3.5 h-3.5 text-teal-400 shrink-0",title:"2D L-System"})]}),v.jsx("div",{className:"text-[10px] text-slate-400 flex flex-wrap gap-x-2 gap-y-0.5",children:v.jsxs("span",{children:["Axiom: ",v.jsx("strong",{className:"font-mono text-slate-350",children:c.axiom})]})})]}),v.jsxs("div",{className:"text-right shrink-0",children:[v.jsx("span",{className:"text-[10px] text-slate-500 block",children:"Default Iters"}),v.jsx("span",{className:"text-xs font-bold text-slate-350 font-mono",children:c.iterations})]})]})]})]})},mR=({axiom:r,onChangeAxiom:e,iterations:i,onChangeIterations:s,rules:l,onChangeRules:c,availableVariables:f,isCapped:p=!1})=>{const m=()=>{const E=`rule_${Date.now()}`;c([...l,{id:E,inputSymbol:"X",successor:"F+X"}])},h=(E,U)=>{const S=U.trim().slice(0,1);c(l.map(y=>y.id===E?{...y,inputSymbol:S}:y))},g=(E,U)=>{const S=U.replace(/\s+/g,"");c(l.map(y=>y.id===E?{...y,successor:S}:y))},_=E=>{c(l.filter(U=>U.id!==E))},x=typeof i=="number"?i:parseFloat(i),M=!isNaN(x);return v.jsxs("div",{className:"space-y-4",children:[v.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[v.jsx(nR,{className:"w-5 h-5 text-emerald-400",id:"icon-rules-settings"}),v.jsx("h3",{className:"font-semibold text-slate-200",children:"Axiom & Rules"})]}),v.jsxs("div",{className:"space-y-1",children:[v.jsx("label",{className:"text-xs font-medium text-slate-300 block",children:"Starting Axiom (seed)"}),v.jsx("input",{type:"text",value:r,onChange:E=>e(E.target.value.replace(/\s+/g,"")),placeholder:"e.g. F--F--F",id:"axiom-input",className:"w-full bg-slate-900 border border-slate-800 text-slate-100 font-mono text-sm px-3 py-2 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"}),v.jsx("p",{className:"text-[10px] text-slate-400",children:"The initial sequence of state symbols representing the foundation string."})]}),v.jsxs("div",{className:"space-y-2 pt-1",children:[v.jsxs("div",{className:"flex items-center justify-between",children:[v.jsx("label",{className:"text-xs font-medium text-slate-300",children:"Recursion Iterations"}),v.jsxs("div",{className:"flex items-center gap-1.5",children:[v.jsx("span",{className:"text-[10px] text-slate-400",children:"value expression:"}),v.jsx("input",{type:"text",value:i,onChange:E=>{const U=E.target.value,S=Number(U);s(!isNaN(S)&&U.trim()!==""?S:U)},placeholder:"e.g. 5 or n",className:"bg-slate-950 border border-slate-800 text-emerald-400 font-mono text-xs text-center px-2 py-1 rounded-lg w-28 focus:outline-none focus:border-emerald-500"})]})]}),M&&v.jsx("div",{className:"flex gap-4 items-center",children:v.jsx("input",{type:"range",min:"1",max:"12",value:x,onChange:E=>s(parseInt(E.target.value,10)),className:"w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500",id:"iterations-range-slider"})}),p&&v.jsxs("div",{className:"flex items-center gap-1.5 p-2 bg-amber-500/10 border border-amber-500/20 rounded-lg text-[10px] text-amber-400",children:[v.jsx(hl,{className:"w-3.5 h-3.5 shrink-0 animate-bounce"}),v.jsx("span",{className:"text-left flex-1",children:"Output truncated due to the current performance limit! Configure a larger or infinite limit in the Performance settings to disable truncation."})]})]}),v.jsxs("div",{className:"space-y-2 pt-2 border-t border-slate-800/80",children:[v.jsxs("div",{className:"flex items-center justify-between",children:[v.jsx("label",{className:"text-xs font-semibold text-slate-300",children:"Substitution Rules"}),v.jsxs("button",{onClick:m,type:"button",className:"flex items-center gap-1 text-[10px] font-medium text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer",id:"add-rule-btn",children:[v.jsx(vu,{className:"w-3.5 h-3.5"}),"Add Rule"]})]}),l.length===0?v.jsx("p",{className:"text-xs text-slate-400 italic py-2 text-center bg-slate-900/40 rounded-xl border border-dashed border-slate-800",children:"No rules added. Characters remain constant."}):v.jsx("div",{className:"space-y-2.5 max-h-[220px] overflow-y-auto pr-1",children:l.map(E=>v.jsxs("div",{className:"flex items-center gap-2 p-2.5 bg-slate-900/60 rounded-xl border border-slate-800/50",children:[v.jsxs("div",{className:"w-12 shrink-0 space-y-0.5",children:[v.jsx("span",{className:"text-[9px] text-slate-400 block font-medium",children:"When"}),v.jsx("input",{type:"text",value:E.inputSymbol,onChange:U=>h(E.id,U.target.value),placeholder:"F",className:"w-full text-center bg-slate-950 border border-slate-800 text-emerald-400 font-mono font-bold text-sm py-1 rounded-lg focus:border-emerald-500 focus:outline-none",maxLength:1})]}),v.jsx("div",{className:"text-slate-500 text-xs font-bold shrink-0",children:"→"}),v.jsxs("div",{className:"flex-1 space-y-0.5",children:[v.jsx("span",{className:"text-[9px] text-slate-400 block font-medium",children:"Replace with (Successor)"}),v.jsx("input",{type:"text",value:E.successor,onChange:U=>g(E.id,U.target.value),placeholder:"F+F-F",className:"w-full bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs px-2 py-1.5 rounded-lg focus:border-emerald-500 focus:outline-none"})]}),v.jsx("button",{type:"button",onClick:()=>_(E.id),title:"Remove Rule",className:"p-1.5 text-slate-500 hover:text-rose-400 hover:bg-rose-500/5 rounded-lg transition-all mt-3.5",children:v.jsx(_p,{className:"w-3.5 h-3.5"})})]},E.id))})]})]})},gR=({symbolActions:r,onChangeSymbolActions:e,availableVariables:i})=>{const[s,l]=We.useState(""),[c,f]=We.useState(Ee.FORWARD),[p,m]=We.useState(""),h=()=>{const E=s.trim().toUpperCase().slice(0,1);if(!E)return;if(r.some(y=>y.symbol===E)){alert(`Symbol "${E}" is already mapped to an action. Customize it directly in the list.`);return}const U=c===Ee.FORWARD||c===Ee.FORWARD_NO_PEN?"step":c===Ee.PUSH_STATE||c===Ee.POP_STATE||c===Ee.NONE?"":"angle",S={symbol:E,actionType:c,valueExpression:p.trim()||U};e([...r,S]),l(""),m("")},g=(E,U)=>{e(r.map(S=>{if(S.symbol===E){let y=S.valueExpression;return(!y||y==="step"||y==="angle")&&(y=U===Ee.FORWARD||U===Ee.FORWARD_NO_PEN?"step":U===Ee.PUSH_STATE||U===Ee.POP_STATE||U===Ee.NONE?"":"angle"),{...S,actionType:U,valueExpression:y}}return S}))},_=(E,U)=>{e(r.map(S=>S.symbol===E?{...S,valueExpression:U}:S))},x=(E,U)=>{e(r.map(S=>S.symbol===E?{...S,colorExpression:U}:S))},M=E=>{e(r.filter(U=>U.symbol!==E))};return v.jsxs("div",{className:"space-y-4",children:[v.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[v.jsx(__,{className:"w-5 h-5 text-emerald-400",id:"icon-mapper"}),v.jsx("h3",{className:"font-semibold text-slate-200",children:"Symbol Actions Assignment"})]}),v.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:["Customize the turtle behavioral role of each letter symbol. You can use math variables like"," ",v.jsx("span",{className:"font-mono text-emerald-300",children:"step"})," or"," ",v.jsx("span",{className:"font-mono text-emerald-300",children:"angle"})," in expressions."]}),v.jsxs("div",{className:"bg-slate-900/40 border border-slate-800 p-3 rounded-xl space-y-2",children:[v.jsx("span",{className:"text-xs font-semibold text-slate-300",children:"Map Custom Action Character"}),v.jsxs("div",{className:"flex flex-wrap gap-2 items-end",children:[v.jsxs("div",{className:"w-16",children:[v.jsx("label",{className:"text-[10px] text-slate-400 block mb-0.5",children:"Symbol"}),v.jsx("input",{type:"text",value:s,onChange:E=>l(E.target.value),placeholder:"e.g. G",className:"w-full text-center bg-slate-950 border border-slate-800 text-slate-100 font-mono font-bold text-sm py-1.5 rounded-lg focus:border-emerald-500 focus:outline-none",maxLength:1})]}),v.jsxs("div",{className:"flex-1 min-w-[120px]",children:[v.jsx("label",{className:"text-[10px] text-slate-400 block mb-0.5",children:"Assign Role"}),v.jsxs("select",{value:c,onChange:E=>f(E.target.value),className:"w-full bg-slate-900 border border-slate-800 text-slate-200 text-xs p-1.5 rounded-lg focus:border-emerald-500 focus:outline-none cursor-pointer",children:[v.jsx("option",{value:Ee.FORWARD,children:"Draw Forward (with pen)"}),v.jsx("option",{value:Ee.FORWARD_NO_PEN,children:"Move Forward (no pen)"}),v.jsx("option",{value:Ee.TURN_LEFT,children:"Yaw Left (Turn Left)"}),v.jsx("option",{value:Ee.TURN_RIGHT,children:"Yaw Right (Turn Right)"}),v.jsx("option",{value:Ee.PUSH_STATE,children:"Push State ["}),v.jsx("option",{value:Ee.POP_STATE,children:"Pop State ]"}),v.jsx("option",{value:Ee.PITCH_UP,children:"Pitch Up (&)"}),v.jsx("option",{value:Ee.PITCH_DOWN,children:"Pitch Down (^)"}),v.jsx("option",{value:Ee.ROLL_LEFT,children:"Roll Left (\\)"}),v.jsx("option",{value:Ee.ROLL_RIGHT,children:"Roll Z Right (/)"}),v.jsx("option",{value:Ee.TURN_ROUND,children:"Turn Round (180°)"}),v.jsx("option",{value:Ee.NONE,children:"Ignore Symbol (No-op)"})]})]}),v.jsxs("div",{className:"w-24",children:[v.jsx("label",{className:"text-[10px] text-slate-400 block mb-0.5",children:"Value Expr"}),v.jsx("input",{type:"text",value:p,onChange:E=>m(E.target.value),placeholder:"step",className:"w-full bg-slate-950 border border-slate-800 text-slate-100 font-mono text-xs p-1.5 rounded-lg focus:border-emerald-500 focus:outline-none"})]}),v.jsx("button",{type:"button",onClick:h,disabled:!s.trim(),className:"p-1.5 bg-emerald-500 hover:bg-emerald-600 disabled:bg-slate-800 disabled:text-slate-600 text-slate-950 rounded-lg font-medium transition-all cursor-pointer h-9 w-9 flex items-center justify-center shrink-0",children:v.jsx(vu,{className:"w-4 h-4"})})]})]}),v.jsx("div",{className:"space-y-2 max-h-[300px] overflow-y-auto pr-1",children:r.map(E=>{const U=E.actionType===Ee.PUSH_STATE||E.actionType===Ee.POP_STATE,S=E.actionType===Ee.NONE;return v.jsxs("div",{className:"flex items-center gap-2 p-2 bg-slate-900/60 rounded-xl border border-slate-800/60 justify-between",children:[v.jsxs("div",{className:"flex items-center gap-3",children:[v.jsx("span",{className:"w-8 h-8 rounded-lg bg-slate-950 flex items-center justify-center border border-slate-800 font-mono font-bold text-emerald-400",children:E.symbol}),v.jsxs("div",{className:"space-y-1",children:[v.jsxs("select",{value:E.actionType,onChange:y=>g(E.symbol,y.target.value),className:"bg-transparent text-slate-200 text-xs font-semibold py-0.5 focus:outline-none cursor-pointer border-b border-dashed border-slate-700 hover:border-slate-500",children:[v.jsx("option",{className:"bg-slate-950",value:Ee.FORWARD,children:"Draw Forward (Pen)"}),v.jsx("option",{className:"bg-slate-950",value:Ee.FORWARD_NO_PEN,children:"Move Forward (No Pen)"}),v.jsx("option",{className:"bg-slate-950",value:Ee.TURN_LEFT,children:"Yaw Left (+Z)"}),v.jsx("option",{className:"bg-slate-950",value:Ee.TURN_RIGHT,children:"Yaw Right (-Z)"}),v.jsx("option",{className:"bg-slate-950",value:Ee.PUSH_STATE,children:"Push State ["}),v.jsx("option",{className:"bg-slate-950",value:Ee.POP_STATE,children:"Pop State ]"}),v.jsx("option",{className:"bg-slate-950",value:Ee.PITCH_UP,children:"Pitch Up (&)"}),v.jsx("option",{className:"bg-slate-950",value:Ee.PITCH_DOWN,children:"Pitch Down (^)"}),v.jsx("option",{className:"bg-slate-950",value:Ee.ROLL_LEFT,children:"Roll Left (\\)"}),v.jsx("option",{className:"bg-slate-950",value:Ee.ROLL_RIGHT,children:"Roll Right (/)"}),v.jsx("option",{className:"bg-slate-950",value:Ee.TURN_ROUND,children:"Turn Round (180°)"}),v.jsx("option",{className:"bg-slate-950",value:Ee.NONE,children:"Ignore Symbol"})]}),!U&&!S&&v.jsxs("div",{className:"space-y-1",children:[v.jsxs("div",{className:"flex items-center gap-1.5",children:[v.jsx("span",{className:"text-[9px] text-slate-400",children:"value expression:"}),v.jsx("input",{type:"text",value:E.valueExpression,onChange:y=>_(E.symbol,y.target.value),placeholder:"step",className:"bg-slate-950 border border-slate-800 text-slate-100 px-1 py-0.5 rounded font-mono text-[10px] w-24 focus:outline-none focus:border-emerald-500"})]}),E.actionType===Ee.FORWARD&&v.jsxs("div",{className:"flex items-center gap-1.5",children:[v.jsx("span",{className:"text-[9px] text-slate-400 font-medium",children:"color expression:"}),v.jsx("input",{type:"color",value:E.colorExpression&&/^#[0-9a-f]{6}$/i.test(E.colorExpression)?E.colorExpression:"#10b981",onChange:y=>x(E.symbol,y.target.value),className:"w-4 h-4 rounded border border-slate-700 bg-transparent p-0 cursor-pointer shrink-0"}),v.jsx("input",{type:"text",value:E.colorExpression||"",onChange:y=>x(E.symbol,y.target.value),placeholder:"e.g. #ff0055 or r,g,b",className:"bg-slate-950 border border-slate-800 text-slate-100 px-1 py-0.5 rounded font-mono text-[10px] w-32 focus:outline-none focus:border-emerald-500"})]})]})]})]}),v.jsx("button",{type:"button",onClick:()=>M(E.symbol),title:"Remove state binding",className:"p-1.5 text-slate-500 hover:text-rose-400 hover:bg-rose-500/5 rounded-lg transition-all",children:v.jsx(_p,{className:"w-3.5 h-3.5"})})]},E.symbol)})})]})},xR=({variables:r,onChangeVariables:e})=>{const[i,s]=We.useState(""),[l,c]=We.useState(10),f=()=>{const g=i.trim().replace(/\s+/g,"");if(!g)return;if(g.toUpperCase()==="PI"||g.toUpperCase()==="E"){alert("Cannot name a variable after mathematical constants PI or E.");return}if(r.some(x=>x.name===g)){alert(`Variable "${g}" already exists.`);return}const _={id:`var_${Date.now()}`,name:g,value:l,min:1,max:Math.max(100,l*2),step:1,animate:!1,animationSpeed:5,animationType:"ping-pong",animationDirection:1};e([...r,_]),s("")},p=(g,_,x)=>{e(r.map(M=>M.id===g?{...M,[_]:x}:M))},m=g=>{e(r.filter(_=>_.id!==g))},h=g=>{const _=r.find(x=>x.id===g);_&&p(g,"animate",!_.animate)};return v.jsxs("div",{className:"space-y-4",children:[v.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[v.jsx(gp,{className:"w-5 h-5 text-emerald-400",id:"icon-vars"}),v.jsx("h3",{className:"font-semibold text-slate-200",children:"System Variables & Morphing"})]}),v.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:["Declare custom variables and use them in rules/actions. Activate the ",v.jsx("strong",{children:"Play"})," controls below to morph parameters dynamically!"]}),v.jsxs("div",{className:"bg-slate-900/40 border border-slate-800 p-3 rounded-xl space-y-2",children:[v.jsx("span",{className:"text-xs font-semibold text-slate-300",children:"New Variable Slider"}),v.jsxs("div",{className:"flex gap-2 items-end",children:[v.jsxs("div",{className:"flex-1",children:[v.jsx("label",{className:"text-[10px] text-slate-400 block mb-0.5",children:"Name"}),v.jsx("input",{type:"text",value:i,onChange:g=>s(g.target.value),placeholder:"e.g. theta",className:"w-full bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs px-2 py-1.5 rounded-lg focus:border-emerald-500 focus:outline-none"})]}),v.jsxs("div",{className:"w-24",children:[v.jsx("label",{className:"text-[10px] text-slate-400 block mb-0.5",children:"Init Value"}),v.jsx("input",{type:"number",value:l,onChange:g=>c(parseFloat(g.target.value)||0),className:"w-full bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs px-2 py-1.5 rounded-lg focus:border-emerald-500 focus:outline-none"})]}),v.jsxs("button",{type:"button",onClick:f,disabled:!i.trim(),className:"p-2 bg-emerald-500 hover:bg-emerald-600 disabled:bg-slate-800 disabled:text-slate-600 text-slate-950 font-semibold rounded-lg text-xs flex items-center gap-1 cursor-pointer h-[34px] shrink-0 transition-colors",children:[v.jsx(vu,{className:"w-4 h-4"}),"Add"]})]})]}),r.length===0?v.jsx("p",{className:"text-xs text-slate-400 italic py-2 text-center bg-slate-900/40 rounded-xl border border-dashed border-slate-800",children:"No custom variables active."}):v.jsx("div",{className:"space-y-4 max-h-[350px] overflow-y-auto pr-1",children:r.map(g=>v.jsxs("div",{className:"p-3 bg-slate-900/60 rounded-xl border border-slate-800/80 space-y-2.5",children:[v.jsxs("div",{className:"flex items-center justify-between",children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx("span",{className:"font-mono font-bold text-xs text-emerald-400",children:g.name}),v.jsxs("span",{className:"text-[10px] text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded-md font-mono",children:["val: ",g.value.toFixed(1)]})]}),v.jsxs("div",{className:"flex items-center gap-1.5",children:[v.jsx("button",{onClick:()=>h(g.id),type:"button",title:g.animate?"Stop Animation":"Play Morphing Animation",className:`p-1 rounded-md transition-all ${g.animate?"bg-amber-500/10 text-amber-400 border border-amber-500/20":"bg-slate-800 text-slate-400 hover:text-slate-200"}`,children:g.animate?v.jsx(y_,{className:"w-3 h-3"}):v.jsx(b_,{className:"w-3 h-3"})}),v.jsx("button",{type:"button",onClick:()=>m(g.id),title:"Delete Var",className:"p-1 text-slate-500 hover:text-rose-400 hover:bg-rose-500/5 rounded-md transition-all",children:v.jsx(_p,{className:"w-3 h-3"})})]})]}),v.jsxs("div",{className:"space-y-1",children:[v.jsx("input",{type:"range",min:g.min,max:g.max,step:g.step,value:g.value,onChange:_=>p(g.id,"value",parseFloat(_.target.value)),disabled:g.animate,className:"w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500 disabled:opacity-50"}),v.jsxs("div",{className:"grid grid-cols-3 gap-1.5 text-[9px] text-slate-400 pt-1 font-mono",children:[v.jsxs("div",{children:[v.jsx("span",{className:"block text-slate-500",children:"Min:"}),v.jsx("input",{type:"number",value:g.min,onChange:_=>p(g.id,"min",parseFloat(_.target.value)||0),className:"bg-slate-950 border border-slate-800/80 rounded w-full px-1 text-[9px]"})]}),v.jsxs("div",{children:[v.jsx("span",{className:"block text-slate-500",children:"Step:"}),v.jsx("input",{type:"number",value:g.step,onChange:_=>p(g.id,"step",parseFloat(_.target.value)||.1),className:"bg-slate-950 border border-slate-800/80 rounded w-full px-1 text-[9px]"})]}),v.jsxs("div",{children:[v.jsx("span",{className:"block text-slate-500",children:"Max:"}),v.jsx("input",{type:"number",value:g.max,onChange:_=>p(g.id,"max",parseFloat(_.target.value)||100),className:"bg-slate-950 border border-slate-800/80 rounded w-full px-1 text-[9px]"})]})]})]}),g.animate&&v.jsxs("div",{className:"grid grid-cols-2 gap-2 p-2 bg-slate-950/60 rounded-lg border border-slate-800/40 text-[10px] mt-1.5 text-slate-300",children:[v.jsxs("div",{className:"space-y-1",children:[v.jsx("span",{className:"text-[9px] text-slate-500 block",children:"Morph Speed"}),v.jsx("input",{type:"number",value:g.animationSpeed,onChange:_=>p(g.id,"animationSpeed",parseFloat(_.target.value)||0),className:"bg-slate-900 border border-slate-800 px-1 py-0.5 rounded w-full font-mono text-[9px]"})]}),v.jsxs("div",{className:"space-y-1",children:[v.jsx("span",{className:"text-[9px] text-slate-500 block",children:"Cycle Style"}),v.jsxs("select",{value:g.animationType,onChange:_=>p(g.id,"animationType",_.target.value),className:"bg-slate-900 border border-slate-800 px-1 py-0.5 rounded w-full text-[9px] cursor-pointer",children:[v.jsx("option",{value:"ping-pong",children:"Ping-Pong ⇋"}),v.jsx("option",{value:"loop",children:"Loop ↻"}),v.jsx("option",{value:"one-way",children:"One-Way →"})]})]})]})]},g.id))})]})},vR=({growPercent:r,onChangeGrowPercent:e,isGrowing:i,onToggleGrowing:s,animationStyle:l="sequential",onChangeAnimationStyle:c})=>v.jsxs("div",{className:"space-y-4",children:[v.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[v.jsx(x_,{className:"w-5 h-5 text-emerald-400",id:"icon-anims"}),v.jsx("h3",{className:"font-semibold text-slate-200",children:"Aesthetic Animations"})]}),v.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:["Control how your L-System grows or develops over time. Combine with ",v.jsx("strong",{children:"Variables Morphing"})," for breathtaking organic visual effects!"]}),v.jsxs("div",{className:"p-3 bg-slate-900/60 rounded-xl border border-slate-800/80 space-y-2.5",children:[v.jsxs("div",{className:"flex items-center justify-between",children:[v.jsxs("div",{className:"flex items-center gap-1.5",children:[v.jsx(hl,{className:"w-3.5 h-3.5 text-teal-400"}),v.jsx("span",{className:"text-xs font-semibold text-slate-300",children:"Organic Growth Simulation"})]}),v.jsxs("button",{onClick:s,type:"button",className:`px-2 py-1 rounded-md text-[10px] font-bold transition-all flex items-center gap-1 cursor-pointer ${i?"bg-teal-500/10 text-teal-300 border border-teal-500/20 animate-pulse":"bg-slate-800 text-slate-400 hover:text-slate-200"}`,id:"play-growth-anim-btn",children:[i?v.jsx(y_,{className:"w-3"}):v.jsx(b_,{className:"w-3"}),i?"Pause Growth":"Play Growth"]})]}),c&&v.jsxs("div",{className:"flex items-center justify-between text-xs pt-1 border-t border-slate-800/40",children:[v.jsx("span",{className:"text-slate-400",children:"Growth Flow Mode:"}),v.jsxs("select",{value:l,onChange:f=>c(f.target.value),className:"bg-slate-950 border border-slate-800 text-teal-400 font-mono text-[10px] p-1 rounded focus:outline-none focus:border-emerald-500 cursor-pointer",children:[v.jsx("option",{value:"sequential",children:"Line-by-Line (Sequential)"}),v.jsx("option",{value:"tree",children:"Parallel Split (Tree growth)"})]})]}),v.jsxs("div",{className:"space-y-1",children:[v.jsx("input",{type:"range",min:"1",max:"100",value:r,onChange:f=>e(parseInt(f.target.value,10)),className:"w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-500"}),v.jsxs("div",{className:"flex justify-between text-[9px] text-slate-500 font-mono",children:[v.jsx("span",{children:"Seed Base"}),v.jsxs("span",{className:"text-teal-400 font-bold",children:[r,"% Grown"]}),v.jsx("span",{children:"Fully Unfolded"})]})]})]})]}),_R=({onExportPng:r,onExportSvg:e,onExportGif:i})=>{const[s,l]=We.useState("png"),[c,f]=We.useState("fullhd"),[p,m]=We.useState(2e3),[h,g]=We.useState(2e3),[_,x]=We.useState(15),[M,E]=We.useState(100),[U,S]=We.useState(400),[y,I]=We.useState(400),[G,B]=We.useState(0),[Z,H]=We.useState(100),[k,N]=We.useState(!1),[V,j]=We.useState(0),[W,$]=We.useState(""),fe=()=>{switch(c){case"fullhd":return{width:1920,height:1080};case"4k":return{width:3840,height:2160};case"square":return{width:1200,height:1200};case"custom":default:return{width:p,height:h}}},te=async()=>{if(s==="png"){const X=fe(),O=r(X);if(!O){alert("Failed to render PNG screenshot. Ensure the renderer is ready.");return}const D=document.createElement("a");D.href=O,D.download=`lsystem_${X.width}x${X.height}.png`,document.body.appendChild(D),D.click(),document.body.removeChild(D)}else if(s==="svg"){const X=e();if(!X){alert("Failed to compile SVG content.");return}const O=new Blob([X],{type:"image/svg+xml;charset=utf-8"}),D=URL.createObjectURL(O),w=document.createElement("a");w.href=D,w.download="lsystem_vector.svg",document.body.appendChild(w),w.click(),document.body.removeChild(w),URL.revokeObjectURL(D)}else if(s==="gif"&&i)try{N(!0),j(5),$("Initializing GIF animation...");const X=await i({frames:_,delay:M,startPercent:G,endPercent:Z,width:U,height:y,onProgress:D=>{j(D),D<50?$(`Capturing animation frames: ${Math.round(D*2)}%...`):D<100?$(`Assembling and encoding your GIF... ${D}%`):$("Completed! File is ready for download.")}}),O=document.createElement("a");O.href=X,O.download="lsystem_animation.gif",document.body.appendChild(O),O.click(),document.body.removeChild(O),j(100),$("GIF downloaded successfully!")}catch(X){alert(`Error generating GIF: ${X.message||X}`)}finally{setTimeout(()=>{N(!1),j(0)},1500)}};return v.jsxs("div",{className:"space-y-4",children:[v.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[v.jsx(ll,{className:"w-5 h-5 text-emerald-400",id:"icon-export"}),v.jsx("h3",{className:"font-semibold text-slate-200",children:"Export Exporter"})]}),v.jsx("p",{className:"text-xs text-slate-400 leading-relaxed text-left",children:"Save your masterpiece in seconds! Choose between a high-resolution PNG image, a vector SVG file, or an animated GIF of the growing fractal."}),v.jsxs("div",{className:"grid grid-cols-3 gap-1 p-1 bg-slate-950 border border-slate-800 rounded-xl",children:[v.jsxs("button",{type:"button",onClick:()=>l("png"),className:`flex flex-col sm:flex-row items-center justify-center gap-1.5 py-2 px-1 rounded-lg text-[11px] font-medium cursor-pointer transition-all ${s==="png"?"bg-slate-800 text-slate-100 shadow-sm":"text-slate-400 hover:text-slate-200"}`,children:[v.jsx(D2,{className:"w-3.5 h-3.5 shrink-0"}),"PNG"]}),v.jsxs("button",{type:"button",onClick:()=>l("svg"),className:`flex flex-col sm:flex-row items-center justify-center gap-1.5 py-2 px-1 rounded-lg text-[11px] font-medium cursor-pointer transition-all ${s==="svg"?"bg-slate-800 text-slate-100 shadow-sm":"text-slate-400 hover:text-slate-200"}`,children:[v.jsx(w2,{className:"w-3.5 h-3.5 shrink-0"}),"SVG"]}),v.jsxs("button",{type:"button",onClick:()=>l("gif"),className:`flex flex-col sm:flex-row items-center justify-center gap-1.5 py-2 px-1 rounded-lg text-[11px] font-medium cursor-pointer transition-all ${s==="gif"?"bg-slate-800 text-slate-100 shadow-sm":"text-slate-400 hover:text-slate-200"}`,children:[v.jsx(L2,{className:"w-3.5 h-3.5 shrink-0 text-emerald-400"}),"Animated GIF"]})]}),s==="png"&&v.jsxs("div",{className:"space-y-3 bg-slate-900/40 p-3 rounded-xl border border-slate-800",children:[v.jsx("span",{className:"text-xs font-semibold text-slate-300 block text-left",children:"Image Resolution (PNG)"}),v.jsx("div",{className:"grid grid-cols-2 gap-2 text-left",children:[{id:"fullhd",label:"Full HD (1080p)",desc:"1920 × 1080"},{id:"4k",label:"Ultra HD (4K)",desc:"3840 × 2160"},{id:"square",label:"Square Studio",desc:"1200 × 1200"},{id:"custom",label:"Custom Pixels",desc:"Custom size"}].map(X=>v.jsxs("button",{type:"button",onClick:()=>f(X.id),className:`p-2 rounded-lg border text-left cursor-pointer transition-all ${c===X.id?"bg-emerald-500/10 border-emerald-500 text-emerald-200":"bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700"}`,children:[v.jsx("div",{className:"text-[10px] font-bold block",children:X.label}),v.jsx("div",{className:"text-[9px] text-slate-400 font-mono mt-0.5",children:X.desc})]},X.id))}),c==="custom"&&v.jsxs("div",{className:"grid grid-cols-2 gap-2 pt-2 border-t border-slate-800",children:[v.jsxs("div",{className:"space-y-0.5 text-left",children:[v.jsx("span",{className:"text-[9px] text-slate-400 font-mono",children:"Width (px)"}),v.jsx("input",{type:"number",value:p,onChange:X=>m(Math.max(100,parseInt(X.target.value,10)||500)),className:"w-full bg-slate-950 border border-slate-800 text-slate-200 font-mono text-center text-xs p-1.5 rounded-lg focus:outline-none"})]}),v.jsxs("div",{className:"space-y-0.5 text-left",children:[v.jsx("span",{className:"text-[9px] text-slate-400 font-mono",children:"Height (px)"}),v.jsx("input",{type:"number",value:h,onChange:X=>g(Math.max(100,parseInt(X.target.value,10)||500)),className:"w-full bg-slate-950 border border-slate-800 text-slate-200 font-mono text-center text-xs p-1.5 rounded-lg focus:outline-none"})]})]})]}),s==="svg"&&v.jsxs("div",{className:"p-3 bg-emerald-500/5 border border-emerald-500/10 rounded-xl space-y-1 text-left",children:[v.jsxs("span",{className:"text-xs font-semibold text-emerald-400 flex items-center gap-1 justify-start",children:[v.jsx(k2,{className:"w-3.5 h-3.5"})," Infinite Vector File"]}),v.jsx("p",{className:"text-[10px] text-slate-400 leading-relaxed",children:"SVG vector graphics are scale-independent because they use math coordinate lines instead of pixels. You can scale them to any magnitude without ever losing quality! Ideal for large-scale prints or editor importing."})]}),s==="gif"&&v.jsxs("div",{className:"space-y-3 bg-slate-900/40 p-3 rounded-xl border border-slate-800",children:[v.jsx("span",{className:"text-xs font-semibold text-slate-300 block text-left",children:"Animated GIF Settings"}),v.jsxs("div",{className:"space-y-2 text-left",children:[v.jsxs("div",{children:[v.jsx("span",{className:"text-[10px] text-slate-400 block mb-1",children:"Output resolution (high resolutions require more rendering computation):"}),v.jsx("div",{className:"grid grid-cols-2 gap-1.5 text-center mb-2",children:[{label:"Fast (300px)",w:300,h:300},{label:"Standard (400px)",w:400,h:400},{label:"High HD (600px)",w:600,h:600},{label:"Max Quality (800px)",w:800,h:800}].map(X=>v.jsxs("button",{type:"button",onClick:()=>{S(X.w),I(X.h)},className:`py-1 rounded font-mono text-[9px] font-bold border transition-all cursor-pointer ${U===X.w?"bg-emerald-500/20 text-emerald-200 border-emerald-500/50":"bg-slate-950 text-slate-400 border-slate-800"}`,children:[X.label," - ",X.w,"x",X.h]},X.label))}),v.jsxs("div",{className:"grid grid-cols-2 gap-2 pt-1",children:[v.jsxs("div",{className:"space-y-0.5 text-left",children:[v.jsx("span",{className:"text-[9px] text-slate-500",children:"GIF Width (px)"}),v.jsx("input",{type:"number",value:U,onChange:X=>S(Math.max(100,Math.min(2e3,parseInt(X.target.value,10)||400))),className:"w-full bg-slate-950 border border-slate-800 text-slate-200 font-mono text-center text-xs p-1 rounded focus:outline-none"})]}),v.jsxs("div",{className:"space-y-0.5 text-left",children:[v.jsx("span",{className:"text-[9px] text-slate-500",children:"GIF Height (px)"}),v.jsx("input",{type:"number",value:y,onChange:X=>I(Math.max(100,Math.min(2e3,parseInt(X.target.value,10)||400))),className:"w-full bg-slate-950 border border-slate-800 text-slate-200 font-mono text-center text-xs p-1 rounded focus:outline-none"})]})]})]}),v.jsxs("div",{className:"pt-1.5 border-t border-slate-800/60",children:[v.jsxs("div",{className:"flex justify-between text-[10px] text-slate-400 font-mono mb-1",children:[v.jsx("span",{children:"Animation frames:"}),v.jsxs("span",{className:"text-emerald-400 font-bold",children:[_," frames"]})]}),v.jsx("input",{type:"range",min:"5",max:"30",step:"1",value:_,onChange:X=>x(parseInt(X.target.value,10)),className:"w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"})]}),v.jsxs("div",{className:"pt-1.5 border-t border-slate-800/60",children:[v.jsxs("div",{className:"flex justify-between text-[10px] text-slate-400 font-mono mb-1",children:[v.jsx("span",{children:"Frame delay:"}),v.jsxs("span",{className:"text-emerald-400 font-bold",children:[M,"ms"]})]}),v.jsx("input",{type:"range",min:"40",max:"400",step:"10",value:M,onChange:X=>E(parseInt(X.target.value,10)),className:"w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"})]}),v.jsxs("div",{className:"pt-1.5 border-t border-slate-800/60 grid grid-cols-2 gap-2 text-left",children:[v.jsxs("div",{children:[v.jsx("span",{className:"text-[9px] text-slate-500 block",children:"End Stage (%):"}),v.jsx("input",{type:"number",min:"5",max:"100",value:Z,onChange:X=>H(Math.min(100,Math.max(G+5,parseInt(X.target.value)||100))),className:"w-full bg-slate-950 border border-slate-800 text-slate-200 text-center font-mono text-[10px] py-1 rounded focus:outline-none"})]}),v.jsxs("div",{children:[v.jsx("span",{className:"text-[9px] text-slate-500 block",children:"Start Stage (%):"}),v.jsx("input",{type:"number",min:"0",max:"95",value:G,onChange:X=>B(Math.max(0,Math.min(Z-5,parseInt(X.target.value)||0))),className:"w-full bg-slate-950 border border-slate-800 text-slate-200 text-center font-mono text-[10px] py-1 rounded focus:outline-none"})]})]})]})]}),v.jsxs("button",{onClick:te,disabled:k,type:"button",className:"w-full py-2.5 px-4 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-slate-950 rounded-xl font-bold text-sm shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all hover:translate-y-[-1px] active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed",id:"export-trigger-btn",children:[k?v.jsx(gp,{className:"w-4 h-4 animate-spin text-slate-950"}):v.jsx(ll,{className:"w-4 h-4"}),k?"Exporting Animation...":`Generate & Download ${s.toUpperCase()}`]}),k&&v.jsxs("div",{className:"p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-2 text-left",children:[v.jsxs("div",{className:"flex justify-between text-[10px] font-mono text-slate-400",children:[v.jsx("span",{children:"GIF Processing Status"}),v.jsxs("span",{children:[V,"%"]})]}),v.jsx("div",{className:"w-full h-1.5 bg-slate-950 rounded-full overflow-hidden",children:v.jsx("div",{className:"h-full bg-emerald-500 transition-all duration-300",style:{width:`${V}%`}})}),v.jsx("div",{className:"text-[10px] text-slate-300 font-medium",children:W})]})]})};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function yR(r){try{const e={n:r.name,a:r.axiom,i:r.iterations},i=r.rules.filter(h=>h.inputSymbol&&h.successor).map(h=>({k:h.inputSymbol,s:h.successor}));i.length>0&&(e.r=i);const s=r.variables.map(h=>{const g={n:h.name,v:h.value};return h.min!==0&&(g.mi=h.min),h.max!==100&&(g.ma=h.max),h.step!==1&&(g.s=h.step),h.animate&&(g.an=1,h.animationSpeed!==5&&(g.sp=h.animationSpeed),h.animationType!=="ping-pong"&&(g.at=h.animationType)),g});s.length>0&&(e.v=s);const l=r.symbolActions.filter(h=>h.symbol&&h.actionType!==Ee.NONE).map(h=>{const g={s:h.symbol,at:h.actionType};return h.valueExpression&&(g.ex=h.valueExpression),h.colorExpression&&(g.cx=h.colorExpression),g});l.length>0&&(e.sa=l);const c={},f=r.renderSettings;f.stepSize!==5&&(c.sz=f.stepSize),f.angle!==25&&(c.a=f.angle),f.strokeWidth!==2&&(c.sw=f.strokeWidth),f.strokeColor&&f.strokeColor.toLowerCase()!=="#10b981"&&(c.sc=f.strokeColor),f.backgroundColor&&f.backgroundColor.toLowerCase()!=="#090d16"&&(c.bc=f.backgroundColor),f.colorPalette&&f.colorPalette!=="solid"&&(c.cp=f.colorPalette),f.is3D&&(c.i3=1),f.showAxes&&(c.sa=1),Object.keys(c).length>0&&(e.rs=c);const p=JSON.stringify(e);return btoa(encodeURIComponent(p))}catch(e){return console.error("Failed to compress state for URL sharing",e),""}}function bv(r){if(!r)return null;try{const e=decodeURIComponent(atob(r)),i=JSON.parse(e),s=(i.r||[]).map((m,h)=>({id:`r_${h}`,inputSymbol:m.k||"",successor:m.s||""})),l=(i.v||[]).map((m,h)=>({id:`v_${h}`,name:m.n||"",value:typeof m.v=="number"?m.v:0,min:typeof m.mi=="number"?m.mi:0,max:typeof m.ma=="number"?m.ma:100,step:typeof m.s=="number"?m.s:1,animate:!!m.an,animationSpeed:typeof m.sp=="number"?m.sp:5,animationType:m.at||"ping-pong",animationDirection:1})),c=(i.sa||[]).map(m=>({symbol:m.s||"",actionType:m.at||Ee.NONE,valueExpression:m.ex||"",colorExpression:m.cx||""})),f=i.rs||{},p={stepSize:typeof f.sz=="number"?f.sz:5,angle:typeof f.a=="number"?f.a:25,strokeWidth:typeof f.sw=="number"?f.sw:2,strokeColor:f.sc||"#10b981",backgroundColor:f.bc||"#090d16",colorPalette:f.cp||"solid",is3D:!!f.i3,showAxes:!!f.sa,growPercent:100};return{name:i.n||"Shared L-System",axiom:i.a||"",iterations:typeof i.i=="number"?i.i:3,rules:s,variables:l,symbolActions:c,renderSettings:p}}catch(e){return console.error("Failed to decompress state from URL hash",e),null}}const bR=({currentLSystem:r,onLoadSystem:e})=>{const[i,s]=We.useState(!1),l=We.useRef(null),c=()=>{const g=yR(r);return g?`${window.location.origin}${window.location.pathname}#share=${g}`:""},f=()=>{const g=c();g&&navigator.clipboard.writeText(g).then(()=>{s(!0),setTimeout(()=>s(!1),2500)}).catch(_=>{console.error("Failed to copy URL",_)})},p=()=>{try{const g=JSON.stringify(r,null,2),_="data:application/json;charset=utf-8,"+encodeURIComponent(g),x=`${r.name.toLowerCase().replace(/\s+/g,"_")}_config.json`,M=document.createElement("a");M.setAttribute("href",_),M.setAttribute("download",x),document.body.appendChild(M),M.click(),document.body.removeChild(M)}catch(g){console.error("Failed to export JSON file.",g)}},m=g=>{var M;const _=(M=g.target.files)==null?void 0:M[0];if(!_)return;const x=new FileReader;x.onload=E=>{var U;try{const S=JSON.parse((U=E.target)==null?void 0:U.result);if(typeof S.axiom=="string"&&Array.isArray(S.rules)){const y={...S,id:S.id||`loaded_${Date.now()}`,name:S.name||"Imported Custom L-System"};e(y),alert(`Successfully loaded: "${y.name}"`)}else alert("Invalid L-System configuration file structure. Missing axiom or rules list.")}catch{alert("Failed to parse JSON configuration file. Check syntax.")}},x.readAsText(_),l.current&&(l.current.value="")},h=()=>{var g;(g=l.current)==null||g.click()};return v.jsxs("div",{className:"space-y-4",children:[v.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[v.jsx(S_,{className:"w-5 h-5 text-emerald-400",id:"icon-share"}),v.jsx("h3",{className:"font-semibold text-slate-200",children:"Share & Save"})]}),v.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Synchronize your custom parameters. Send direct links or export standard workspace files."}),v.jsxs("div",{className:"space-y-2 bg-slate-900/40 p-3 rounded-xl border border-slate-800",children:[v.jsx("span",{className:"text-xs font-semibold text-slate-300",children:"Share Direct Link"}),v.jsxs("div",{className:"flex gap-2",children:[v.jsx("input",{type:"text",readOnly:!0,value:c(),className:"flex-1 bg-slate-950 border border-slate-800 text-slate-400 text-[10px] px-3 py-2 rounded-lg truncate select-all outline-none font-mono"}),v.jsx("button",{onClick:f,type:"button",className:`px-3 py-2 rounded-lg font-medium text-xs flex items-center gap-1 cursor-pointer transition-all shrink-0 ${i?"bg-emerald-500 text-slate-950":"bg-slate-800 hover:bg-slate-700 text-slate-100"}`,id:"copy-link-btn",children:i?v.jsxs(v.Fragment,{children:[v.jsx(h_,{className:"w-3.5 h-3.5"}),"Copied!"]}):v.jsxs(v.Fragment,{children:[v.jsx(M2,{className:"w-3.5 h-3.5"}),"Copy Link"]})})]}),v.jsx("p",{className:"text-[10px] text-slate-500",children:"This URL contains your complete layout configuration encoded in Base64. Anyone with this link will load your visual."})]}),v.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[v.jsxs("button",{onClick:p,type:"button",className:"flex flex-col items-center justify-center p-3.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-xl transition-all text-slate-200 hover:text-white cursor-pointer group",id:"export-json-btn",children:[v.jsx("div",{className:"p-2 bg-purple-500/10 text-purple-400 rounded-xl group-hover:bg-purple-500/20 transition-all mb-2",children:v.jsx(ll,{className:"w-5 h-5"})}),v.jsx("span",{className:"text-xs font-semibold",children:"Save .json file"}),v.jsx("span",{className:"text-[10px] text-slate-500 mt-1 font-mono",children:"Download Config"})]}),v.jsxs("button",{onClick:h,type:"button",className:"flex flex-col items-center justify-center p-3.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-xl transition-all text-slate-200 hover:text-white cursor-pointer group",id:"import-json-btn",children:[v.jsx("div",{className:"p-2 bg-indigo-500/10 text-indigo-400 rounded-xl group-hover:bg-indigo-500/20 transition-all mb-2",children:v.jsx(M_,{className:"w-5 h-5"})}),v.jsx("span",{className:"text-xs font-semibold font-sans",children:"Load .json file"}),v.jsx("span",{className:"text-[10px] text-slate-500 mt-1 font-mono",children:"Upload Config"})]}),v.jsx("input",{ref:l,type:"file",accept:".json,application/json",onChange:m,className:"hidden",id:"hidden-file-json-input"})]})]})},Sv={type:"change"},yp={type:"start"},E_={type:"end"},Zc=new pp,Mv=new _s,SR=Math.cos(70*MS.DEG2RAD),Dn=new ce,oi=2*Math.PI,sn={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},uh=1e-6;class MR extends o1{constructor(e,i=null){super(e,i),this.state=sn.NONE,this.target=new ce,this.cursor=new ce,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zr.ROTATE,MIDDLE:Zr.DOLLY,RIGHT:Zr.PAN},this.touches={ONE:Yr.ROTATE,TWO:Yr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new ce,this._lastQuaternion=new Ms,this._lastTargetPosition=new ce,this._quat=new Ms().setFromUnitVectors(e.up,new ce(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Xx,this._sphericalDelta=new Xx,this._scale=1,this._panOffset=new ce,this._rotateStart=new Ct,this._rotateEnd=new Ct,this._rotateDelta=new Ct,this._panStart=new Ct,this._panEnd=new Ct,this._panDelta=new Ct,this._dollyStart=new Ct,this._dollyEnd=new Ct,this._dollyDelta=new Ct,this._dollyDirection=new ce,this._mouse=new Ct,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=TR.bind(this),this._onPointerDown=ER.bind(this),this._onPointerUp=AR.bind(this),this._onContextMenu=LR.bind(this),this._onMouseWheel=wR.bind(this),this._onKeyDown=NR.bind(this),this._onTouchStart=DR.bind(this),this._onTouchMove=UR.bind(this),this._onMouseDown=RR.bind(this),this._onMouseMove=CR.bind(this),this._interceptControlDown=OR.bind(this),this._interceptControlUp=PR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Sv),this.update(),this.state=sn.NONE}pan(e,i){this._pan(e,i),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const i=this.object.position;Dn.copy(i).sub(this.target),Dn.applyQuaternion(this._quat),this._spherical.setFromVector3(Dn),this.autoRotate&&this.state===sn.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=oi:s>Math.PI&&(s-=oi),l<-Math.PI?l+=oi:l>Math.PI&&(l-=oi),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(Dn.setFromSpherical(this._spherical),Dn.applyQuaternion(this._quatInverse),i.copy(this.target).add(Dn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const p=Dn.length();f=this._clampDistance(p*this._scale);const m=p-f;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const p=new ce(this._mouse.x,this._mouse.y,0);p.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const h=new ce(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(p),this.object.updateMatrixWorld(),f=Dn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(Zc.origin.copy(this.object.position),Zc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Zc.direction))<SR?this.object.lookAt(this.target):(Mv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Zc.intersectPlane(Mv,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>uh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>uh||this._lastTargetPosition.distanceToSquared(this.target)>uh?(this.dispatchEvent(Sv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?oi/60*this.autoRotateSpeed*e:oi/60/60*this.autoRotateSpeed}_getZoomScale(e){const i=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,i){Dn.setFromMatrixColumn(i,0),Dn.multiplyScalar(-e),this._panOffset.add(Dn)}_panUp(e,i){this.screenSpacePanning===!0?Dn.setFromMatrixColumn(i,1):(Dn.setFromMatrixColumn(i,0),Dn.crossVectors(this.object.up,Dn)),Dn.multiplyScalar(e),this._panOffset.add(Dn)}_pan(e,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;Dn.copy(l).sub(this.target);let c=Dn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=e-s.left,c=i-s.top,f=s.width,p=s.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/p)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(oi*this._rotateDelta.x/i.clientHeight),this._rotateUp(oi*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let i=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(oi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-oi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(oi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-oi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const s=this._getSecondPointerPosition(e),l=.5*(e.pageX+s.x),c=.5*(e.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(oi*this._rotateDelta.x/i.clientHeight),this._rotateUp(oi*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(e.pageX+i.x)*.5,p=(e.pageY+i.y)*.5;this._updateZoomParameters(f,p)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(e){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId)return!0;return!1}_trackPointer(e){let i=this._pointerPositions[e.pointerId];i===void 0&&(i=new Ct,this._pointerPositions[e.pointerId]=i),i.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const i=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(e){const i=e.deltaMode,s={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function ER(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function TR(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function AR(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(E_),this.state=sn.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],i=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:i.x,pageY:i.y});break}}function RR(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Zr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=sn.DOLLY;break;case Zr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=sn.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=sn.ROTATE}break;case Zr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=sn.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=sn.PAN}break;default:this.state=sn.NONE}this.state!==sn.NONE&&this.dispatchEvent(yp)}function CR(r){switch(this.state){case sn.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case sn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case sn.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function wR(r){this.enabled===!1||this.enableZoom===!1||this.state!==sn.NONE||(r.preventDefault(),this.dispatchEvent(yp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(E_))}function NR(r){this.enabled!==!1&&this._handleKeyDown(r)}function DR(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Yr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=sn.TOUCH_ROTATE;break;case Yr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=sn.TOUCH_PAN;break;default:this.state=sn.NONE}break;case 2:switch(this.touches.TWO){case Yr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=sn.TOUCH_DOLLY_PAN;break;case Yr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=sn.TOUCH_DOLLY_ROTATE;break;default:this.state=sn.NONE}break;default:this.state=sn.NONE}this.state!==sn.NONE&&this.dispatchEvent(yp)}function UR(r){switch(this._trackPointer(r),this.state){case sn.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case sn.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case sn.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case sn.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=sn.NONE}}function LR(r){this.enabled!==!1&&r.preventDefault()}function OR(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function PR(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var fh={exports:{}},Ev;function FR(){return Ev||(Ev=1,(function(r,e){(function(i,s,l,c){var f={URL:i.URL||i.webkitURL||i.mozURL||i.msURL,getUserMedia:(function(){var w=l.getUserMedia||l.webkitGetUserMedia||l.mozGetUserMedia||l.msGetUserMedia;return w&&w.bind(l)})(),requestAnimFrame:i.requestAnimationFrame||i.webkitRequestAnimationFrame||i.mozRequestAnimationFrame||i.oRequestAnimationFrame||i.msRequestAnimationFrame,requestTimeout:function(A,L){if(A=A||f.noop,L=L||0,!f.requestAnimFrame)return setTimeout(A,L);var T=new Date().getTime(),C=new Object,K=f.requestAnimFrame,Q=function Y(){var q=new Date().getTime(),re=q-T;re>=L?A.call():C.value=K(Y)};return C.value=K(Q),C},Blob:i.Blob||i.BlobBuilder||i.WebKitBlobBuilder||i.MozBlobBuilder||i.MSBlobBuilder,btoa:(function(){var w=i.btoa||function(A){for(var L="",T=0,C=A.length,K="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",Q=void 0,Y=void 0,q=void 0,re=void 0,ue=void 0,De=void 0,Ae=void 0;T<C;)Q=A.charCodeAt(T++),Y=A.charCodeAt(T++),q=A.charCodeAt(T++),re=Q>>2,ue=(Q&3)<<4|Y>>4,De=(Y&15)<<2|q>>6,Ae=q&63,isNaN(Y)?De=Ae=64:isNaN(q)&&(Ae=64),L=L+K.charAt(re)+K.charAt(ue)+K.charAt(De)+K.charAt(Ae);return L};return w?w.bind(i):f.noop})(),isObject:function(A){return A&&Object.prototype.toString.call(A)==="[object Object]"},isEmptyObject:function(A){return f.isObject(A)&&!Object.keys(A).length},isArray:function(A){return A&&Array.isArray(A)},isFunction:function(A){return A&&typeof A=="function"},isElement:function(A){return A&&A.nodeType===1},isString:function(A){return typeof A=="string"||Object.prototype.toString.call(A)==="[object String]"},isSupported:{canvas:function(){var A=s.createElement("canvas");return A&&A.getContext&&A.getContext("2d")},webworkers:function(){return i.Worker},blob:function(){return f.Blob},Uint8Array:function(){return i.Uint8Array},Uint32Array:function(){return i.Uint32Array},videoCodecs:(function(){var w=s.createElement("video"),A={mp4:!1,h264:!1,ogv:!1,ogg:!1,webm:!1};try{w&&w.canPlayType&&(A.mp4=w.canPlayType('video/mp4; codecs="mp4v.20.8"')!=="",A.h264=(w.canPlayType('video/mp4; codecs="avc1.42E01E"')||w.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"'))!=="",A.ogv=w.canPlayType('video/ogg; codecs="theora"')!=="",A.ogg=w.canPlayType('video/ogg; codecs="theora"')!=="",A.webm=w.canPlayType('video/webm; codecs="vp8, vorbis"')!==-1)}catch{}return A})()},noop:function(){},each:function(A,L){var T=void 0,C=void 0;if(f.isArray(A))for(T=-1,C=A.length;++T<C&&L(T,A[T])!==!1;);else if(f.isObject(A)){for(T in A)if(A.hasOwnProperty(T)&&L(T,A[T])===!1)break}},mergeOptions:function(A,L){if(!(!f.isObject(A)||!f.isObject(L)||!Object.keys)){var T={};return f.each(A,function(C,K){T[C]=A[C]}),f.each(L,function(C,K){var Q=L[C];f.isObject(Q)&&A[C]?T[C]=f.mergeOptions(A[C],Q):T[C]=Q}),T}},setCSSAttr:function(A,L,T){f.isElement(A)&&(f.isString(L)&&f.isString(T)?A.style[L]=T:f.isObject(L)&&f.each(L,function(C,K){A.style[C]=K}))},removeElement:function(A){f.isElement(A)&&A.parentNode&&A.parentNode.removeChild(A)},createWebWorker:function(A){if(!f.isString(A))return{};try{var L=new f.Blob([A],{type:"text/javascript"}),T=f.URL.createObjectURL(L),C=new Worker(T);return{objectUrl:T,worker:C}}catch(K){return""+K}},getExtension:function(A){return A.substr(A.lastIndexOf(".")+1,A.length)},getFontSize:function(){var A=arguments.length>0&&arguments[0]!==c?arguments[0]:{};if(!s.body||A.resizeFont===!1)return A.fontSize;var L=A.text,T=A.gifWidth,C=parseInt(A.fontSize,10),K=parseInt(A.minFontSize,10),Q=s.createElement("div"),Y=s.createElement("span");for(Q.setAttribute("width",T),Q.appendChild(Y),Y.innerHTML=L,Y.style.fontSize=C+"px",Y.style.textIndent="-9999px",Y.style.visibility="hidden",s.body.appendChild(Y);Y.offsetWidth>T&&C>=K;)Y.style.fontSize=--C+"px";return s.body.removeChild(Y),C+"px"},webWorkerError:!1},p=Object.freeze({default:f}),m={validate:function(A){A=f.isObject(A)?A:{};var L={};return f.each(m.validators,function(T,C){var K=C.errorCode;if(!A[K]&&!C.condition)return L=C,L.error=!0,!1}),delete L.condition,L},isValid:function(A){var L=m.validate(A),T=L.error!==!0;return T},validators:[{condition:f.isFunction(f.getUserMedia),errorCode:"getUserMedia",errorMsg:"The getUserMedia API is not supported in your browser"},{condition:f.isSupported.canvas(),errorCode:"canvas",errorMsg:"Canvas elements are not supported in your browser"},{condition:f.isSupported.webworkers(),errorCode:"webworkers",errorMsg:"The Web Workers API is not supported in your browser"},{condition:f.isFunction(f.URL),errorCode:"window.URL",errorMsg:"The window.URL API is not supported in your browser"},{condition:f.isSupported.blob(),errorCode:"window.Blob",errorMsg:"The window.Blob File API is not supported in your browser"},{condition:f.isSupported.Uint8Array(),errorCode:"window.Uint8Array",errorMsg:"The window.Uint8Array function constructor is not supported in your browser"},{condition:f.isSupported.Uint32Array(),errorCode:"window.Uint32Array",errorMsg:"The window.Uint32Array function constructor is not supported in your browser"}],messages:{videoCodecs:{errorCode:"videocodec",errorMsg:"The video codec you are trying to use is not supported in your browser"}}},h=Object.freeze({default:m}),g=function(){},_={sampleInterval:10,numWorkers:2,filter:"",gifWidth:200,gifHeight:200,interval:.1,numFrames:10,frameDuration:1,keepCameraOn:!1,images:[],video:null,webcamVideoElement:null,cameraStream:null,text:"",fontWeight:"normal",fontSize:"16px",minFontSize:"10px",resizeFont:!1,fontFamily:"sans-serif",fontColor:"#ffffff",textAlign:"center",textBaseline:"bottom",textXCoordinate:null,textYCoordinate:null,progressCallback:g,completeCallback:g,saveRenderingContexts:!1,savedRenderingContexts:[],crossOrigin:"Anonymous"},x=Object.freeze({default:_});function M(){return m.isValid()}function E(){return m.isValid()}function U(){var w={getUserMedia:!0};return m.isValid(w)}function S(w){var A=!1;if(f.isArray(w)&&w.length){if(f.each(w,function(L,T){f.isSupported.videoCodecs[T]&&(A=!0)}),!A)return!1}else if(f.isString(w)&&w.length&&!f.isSupported.videoCodecs[w])return!1;return m.isValid({getUserMedia:!0})}function y(){var w=256,A=499,L=491,T=487,C=503,K=3*C,Q=w-1,Y=4,q=100,re=16,ue=1<<re,De=10,Ae=10,Ue=ue>>Ae,$e=ue<<De-Ae,Ze=w>>3,Ye=6,_e=1<<Ye,ye=Ze*_e,qe=30,et=10,xt=1<<et,ee,Et=8,ot=1<<Et,dt=et+Et,Te=1<<dt,Nt,z,R,ie,Re=[],Pe=[],Be=[],Ve=[];function Se(le,we,Fe){var ge,Ie;for(Nt=le,z=we,R=Fe,ie=new Array(w),ge=0;ge<w;ge++)ie[ge]=new Array(4),Ie=ie[ge],Ie[0]=Ie[1]=Ie[2]=(ge<<Y+8)/w|0,Be[ge]=ue/w|0,Pe[ge]=0}function Me(){for(var le=[],we=new Array(w),Fe=0;Fe<w;Fe++)we[ie[Fe][3]]=Fe;for(var ge=0,Ie=0;Ie<w;Ie++){var Le=we[Ie];le[ge++]=ie[Le][0],le[ge++]=ie[Le][1],le[ge++]=ie[Le][2]}return le}function ke(){var le,we,Fe,ge,Ie,Le,Xe,rt;for(Xe=0,rt=0,le=0;le<w;le++){for(Ie=ie[le],Fe=le,ge=Ie[1],we=le+1;we<w;we++)Le=ie[we],Le[1]<ge&&(Fe=we,ge=Le[1]);if(Le=ie[Fe],le!=Fe&&(we=Le[0],Le[0]=Ie[0],Ie[0]=we,we=Le[1],Le[1]=Ie[1],Ie[1]=we,we=Le[2],Le[2]=Ie[2],Ie[2]=we,we=Le[3],Le[3]=Ie[3],Ie[3]=we),ge!=Xe){for(Re[Xe]=rt+le>>1,we=Xe+1;we<ge;we++)Re[we]=le;Xe=ge,rt=le}}for(Re[Xe]=rt+Q>>1,we=Xe+1;we<256;we++)Re[we]=Q}function je(){var le,we,Fe,ge,Ie,Le,Xe,rt,bt,zt,Cn,Yt,yn,Ia;for(z<K&&(R=1),ee=30+(R-1)/3,Yt=Nt,yn=0,Ia=z,Cn=z/(3*R),zt=Cn/q|0,rt=xt,Le=ye,Xe=Le>>Ye,Xe<=1&&(Xe=0),le=0;le<Xe;le++)Ve[le]=rt*((Xe*Xe-le*le)*ot/(Xe*Xe));for(z<K?bt=3:z%A!==0?bt=3*A:z%L!==0?bt=3*L:z%T!==0?bt=3*T:bt=3*C,le=0;le<Cn;)if(Fe=(Yt[yn+0]&255)<<Y,ge=(Yt[yn+1]&255)<<Y,Ie=(Yt[yn+2]&255)<<Y,we=ne(Fe,ge,Ie),yt(rt,we,Fe,ge,Ie),Xe!==0&&pt(Xe,we,Fe,ge,Ie),yn+=bt,yn>=Ia&&(yn-=z),le++,zt===0&&(zt=1),le%zt===0)for(rt-=rt/ee,Le-=Le/qe,Xe=Le>>Ye,Xe<=1&&(Xe=0),we=0;we<Xe;we++)Ve[we]=rt*((Xe*Xe-we*we)*ot/(Xe*Xe))}function Ge(le,we,Fe){var ge,Ie,Le,Xe,rt,bt,zt;for(rt=1e3,zt=-1,ge=Re[we],Ie=ge-1;ge<w||Ie>=0;)ge<w&&(bt=ie[ge],Le=bt[1]-we,Le>=rt?ge=w:(ge++,Le<0&&(Le=-Le),Xe=bt[0]-le,Xe<0&&(Xe=-Xe),Le+=Xe,Le<rt&&(Xe=bt[2]-Fe,Xe<0&&(Xe=-Xe),Le+=Xe,Le<rt&&(rt=Le,zt=bt[3])))),Ie>=0&&(bt=ie[Ie],Le=we-bt[1],Le>=rt?Ie=-1:(Ie--,Le<0&&(Le=-Le),Xe=bt[0]-le,Xe<0&&(Xe=-Xe),Le+=Xe,Le<rt&&(Xe=bt[2]-Fe,Xe<0&&(Xe=-Xe),Le+=Xe,Le<rt&&(rt=Le,zt=bt[3]))));return zt}function He(){return je(),ht(),ke(),Me()}function ht(){var le;for(le=0;le<w;le++)ie[le][0]>>=Y,ie[le][1]>>=Y,ie[le][2]>>=Y,ie[le][3]=le}function pt(le,we,Fe,ge,Ie){var Le,Xe,rt,bt,zt,Cn,Yt;for(rt=we-le,rt<-1&&(rt=-1),bt=we+le,bt>w&&(bt=w),Le=we+1,Xe=we-1,Cn=1;Le<bt||Xe>rt;){if(zt=Ve[Cn++],Le<bt){Yt=ie[Le++];try{Yt[0]-=zt*(Yt[0]-Fe)/Te|0,Yt[1]-=zt*(Yt[1]-ge)/Te|0,Yt[2]-=zt*(Yt[2]-Ie)/Te|0}catch{}}if(Xe>rt){Yt=ie[Xe--];try{Yt[0]-=zt*(Yt[0]-Fe)/Te|0,Yt[1]-=zt*(Yt[1]-ge)/Te|0,Yt[2]-=zt*(Yt[2]-Ie)/Te|0}catch{}}}}function yt(le,we,Fe,ge,Ie){var Le=ie[we],Xe=le/xt;Le[0]-=Xe*(Le[0]-Fe)|0,Le[1]-=Xe*(Le[1]-ge)|0,Le[2]-=Xe*(Le[2]-Ie)|0}function ne(le,we,Fe){var ge,Ie,Le,Xe,rt,bt,zt,Cn,Yt,yn;for(Cn=2147483647,Yt=Cn,bt=-1,zt=bt,ge=0;ge<w;ge++)yn=ie[ge],Ie=yn[0]-le,Ie<0&&(Ie=-Ie),Le=yn[1]-we,Le<0&&(Le=-Le),Ie+=Le,Le=yn[2]-Fe,Le<0&&(Le=-Le),Ie+=Le,Ie<Cn&&(Cn=Ie,bt=ge),Xe=Ie-(Pe[ge]>>re-Y),Xe<Yt&&(Yt=Xe,zt=ge),rt=Be[ge]>>Ae,Be[ge]-=rt,Pe[ge]+=rt<<De;return Be[bt]+=Ue,Pe[bt]-=$e,zt}Se.apply(this,arguments);var ze={};return ze.map=Ge,ze.process=He,ze}function I(){var w=this;try{w.onmessage=function(L){var T=L.data||{},C;T.gifshot&&(C=A.run(T),postMessage(C))}}catch{}var A={dataToRGB:function(T,C,K){for(var Q=C*K*4,Y=0,q=[];Y<Q;)q.push(T[Y++]),q.push(T[Y++]),q.push(T[Y++]),Y++;return q},componentizedPaletteToArray:function(T){T=T||[];for(var C=[],K=0;K<T.length;K+=3){var Q=T[K],Y=T[K+1],q=T[K+2];C.push(Q<<16|Y<<8|q)}return C},processFrameWithQuantizer:function(T,C,K,Q){for(var Y=this.dataToRGB(T,C,K),q=new y(Y,Y.length,Q),re=q.process(),ue=new Uint32Array(this.componentizedPaletteToArray(re)),De=C*K,Ae=new Uint8Array(De),Ue=0,$e=0;$e<De;$e++){var Ze=Y[Ue++],Ye=Y[Ue++],_e=Y[Ue++];Ae[$e]=q.map(Ze,Ye,_e)}return{pixels:Ae,palette:ue}},run:function(T){T=T||{};var C=T,K=C.height;C.palette;var Q=C.sampleInterval,Y=C.width,q=T.data;return this.processFrameWithQuantizer(q,Y,K,Q)}};return A}function G(w,A,L,T){var C=0;T=T===c?{}:T;var K=T.loop===c?null:T.loop,Q=T.palette===c?null:T.palette;if(A<=0||L<=0||A>65535||L>65535)throw"Width/Height invalid.";function Y(Ae){var Ue=Ae.length;if(Ue<2||Ue>256||Ue&Ue-1)throw"Invalid code/color length, must be power of 2 and 2 .. 256.";return Ue}w[C++]=71,w[C++]=73,w[C++]=70,w[C++]=56,w[C++]=57,w[C++]=97;var q=0,re=0;if(w[C++]=A&255,w[C++]=A>>8&255,w[C++]=L&255,w[C++]=L>>8&255,w[C++]=(Q!==null?128:0)|q,w[C++]=re,w[C++]=0,K!==null){if(K<0||K>65535)throw"Loop count invalid.";w[C++]=33,w[C++]=255,w[C++]=11,w[C++]=78,w[C++]=69,w[C++]=84,w[C++]=83,w[C++]=67,w[C++]=65,w[C++]=80,w[C++]=69,w[C++]=50,w[C++]=46,w[C++]=48,w[C++]=3,w[C++]=1,w[C++]=K&255,w[C++]=K>>8&255,w[C++]=0}var ue=!1;this.addFrame=function(Ae,Ue,$e,Ze,Ye,_e){if(ue===!0&&(--C,ue=!1),_e=_e===c?{}:_e,Ae<0||Ue<0||Ae>65535||Ue>65535)throw"x/y invalid.";if($e<=0||Ze<=0||$e>65535||Ze>65535)throw"Width/Height invalid.";if(Ye.length<$e*Ze)throw"Not enough pixels for the frame size.";var ye=!0,qe=_e.palette;if((qe===c||qe===null)&&(ye=!1,qe=Q),qe===c||qe===null)throw"Must supply either a local or global palette.";for(var et=Y(qe),xt=0;et>>=1;)++xt;et=1<<xt;var ee=_e.delay===c?0:_e.delay,Et=_e.disposal===c?0:_e.disposal;if(Et<0||Et>3)throw"Disposal out of range.";var ot=!1,dt=0;if(_e.transparent!==c&&_e.transparent!==null&&(ot=!0,dt=_e.transparent,dt<0||dt>=et))throw"Transparent color index.";if((Et!==0||ot||ee!==0)&&(w[C++]=33,w[C++]=249,w[C++]=4,w[C++]=Et<<2|(ot===!0?1:0),w[C++]=ee&255,w[C++]=ee>>8&255,w[C++]=dt,w[C++]=0),w[C++]=44,w[C++]=Ae&255,w[C++]=Ae>>8&255,w[C++]=Ue&255,w[C++]=Ue>>8&255,w[C++]=$e&255,w[C++]=$e>>8&255,w[C++]=Ze&255,w[C++]=Ze>>8&255,w[C++]=ye===!0?128|xt-1:0,ye===!0)for(var Te=0,Nt=qe.length;Te<Nt;++Te){var z=qe[Te];w[C++]=z>>16&255,w[C++]=z>>8&255,w[C++]=z&255}C=De(w,C,xt<2?2:xt,Ye)},this.end=function(){return ue===!1&&(w[C++]=59,ue=!0),C};function De(Ae,Ue,$e,Ze){Ae[Ue++]=$e;var Ye=Ue++,_e=1<<$e,ye=_e-1,qe=_e+1,et=qe+1,xt=$e+1,ee=0,Et=0;function ot(Be){for(;ee>=Be;)Ae[Ue++]=Et&255,Et>>=8,ee-=8,Ue===Ye+256&&(Ae[Ye]=255,Ye=Ue++)}function dt(Be){Et|=Be<<ee,ee+=xt,ot(8)}var Te=Ze[0]&ye,Nt={};dt(_e);for(var z=1,R=Ze.length;z<R;++z){var ie=Ze[z]&ye,Re=Te<<8|ie,Pe=Nt[Re];if(Pe===c){for(Et|=Te<<ee,ee+=xt;ee>=8;)Ae[Ue++]=Et&255,Et>>=8,ee-=8,Ue===Ye+256&&(Ae[Ye]=255,Ye=Ue++);et===4096?(dt(_e),et=qe+1,xt=$e+1,Nt={}):(et>=1<<xt&&++xt,Nt[Re]=et++),Te=ie}else Te=Pe}return dt(Te),dt(qe),ot(1),Ye+1===Ue?Ae[Ye]=0:(Ae[Ye]=Ue-Ye-1,Ae[Ue++]=0),Ue}}var B=function(){},Z=function(A){this.canvas=null,this.ctx=null,this.repeat=0,this.frames=[],this.numRenderedFrames=0,this.onRenderCompleteCallback=B,this.onRenderProgressCallback=B,this.workers=[],this.availableWorkers=[],this.generatingGIF=!1,this.options=A,this.initializeWebWorkers(A)};Z.prototype={workerMethods:I(),initializeWebWorkers:function(A){var L=this,T=y.toString()+"("+I.toString()+"());",C=void 0,K=void 0,Q=void 0,Y=void 0,q=-1,re="";for(Y=A.numWorkers;++q<Y;)C=f.createWebWorker(T),f.isObject(C)?(K=C.objectUrl,Q=C.worker,L.workers.push({worker:Q,objectUrl:K}),L.availableWorkers.push(Q)):(re=C,f.webWorkerError=!!C);this.workerError=re,this.canvas=s.createElement("canvas"),this.canvas.width=A.gifWidth,this.canvas.height=A.gifHeight,this.ctx=this.canvas.getContext("2d"),this.frames=[]},getWorker:function(){return this.availableWorkers.pop()},freeWorker:function(A){this.availableWorkers.push(A)},byteMap:(function(){for(var w=[],A=0;A<256;A++)w[A]=String.fromCharCode(A);return w})(),bufferToString:function(A){for(var L=A.length,T="",C=-1;++C<L;)T+=this.byteMap[A[C]];return T},onFrameFinished:function(A){var L=this,T=L.frames,C=L.options,K=!!(C.images||[]).length,Q=T.every(function(Y){return!Y.beingProcessed&&Y.done});L.numRenderedFrames++,K&&A(L.numRenderedFrames/T.length),L.onRenderProgressCallback(L.numRenderedFrames*.75/T.length),Q?L.generatingGIF||L.generateGIF(T,L.onRenderCompleteCallback):f.requestTimeout(function(){L.processNextFrame()},1)},processFrame:function(A){var L=this;this.options;var T=this.options,C=T.progressCallback,K=T.sampleInterval,Q=this.frames,Y=void 0,q=void 0,re=function(){var De=arguments.length>0&&arguments[0]!==c?arguments[0]:{},Ae=De.data;delete Y.data,Y.pixels=Array.prototype.slice.call(Ae.pixels),Y.palette=Array.prototype.slice.call(Ae.palette),Y.done=!0,Y.beingProcessed=!1,L.freeWorker(q),L.onFrameFinished(C)};if(Y=Q[A],Y.beingProcessed||Y.done){this.onFrameFinished();return}Y.sampleInterval=K,Y.beingProcessed=!0,Y.gifshot=!0,q=this.getWorker(),q?(q.onmessage=re,q.postMessage(Y)):re({data:L.workerMethods.run(Y)})},startRendering:function(A){this.onRenderCompleteCallback=A;for(var L=0;L<this.options.numWorkers&&L<this.frames.length;L++)this.processFrame(L)},processNextFrame:function(){for(var A=-1,L=0;L<this.frames.length;L++){var T=this.frames[L];if(!T.done&&!T.beingProcessed){A=L;break}}A>=0&&this.processFrame(A)},generateGIF:function(A,L){var T=[],C={loop:this.repeat},K=this.options,Q=K.interval,Y=K.frameDuration,q=K.images,re=!!q.length,ue=K.gifHeight,De=K.gifWidth,Ae=new G(T,De,ue,C),Ue=this.onRenderProgressCallback,$e=re?Q*100:0,Ze=void 0,Ye=void 0;this.generatingGIF=!0,f.each(A,function(_e,ye){var qe=ye.palette;Ue(.75+.25*ye.position*1/A.length);for(var et=0;et<Y;et++)Ae.addFrame(0,0,De,ue,ye.pixels,{palette:qe,delay:$e})}),Ae.end(),Ue(1),this.frames=[],this.generatingGIF=!1,f.isFunction(L)&&(Ze=this.bufferToString(T),Ye="data:image/gif;base64,"+f.btoa(Ze),L(Ye))},setRepeat:function(A){this.repeat=A},addFrame:function(A,L){L=f.isObject(L)?L:{};var T=this,C=T.ctx,K=T.options,Q=K.gifWidth,Y=K.gifHeight,q=f.getFontSize(L),re=L,ue=re.filter,De=re.fontColor,Ae=re.fontFamily,Ue=re.fontWeight;re.gifHeight,re.gifWidth;var $e=re.text,Ze=re.textAlign,Ye=re.textBaseline,_e=L.textXCoordinate?L.textXCoordinate:Ze==="left"?1:Ze==="right"?Q:Q/2,ye=L.textYCoordinate?L.textYCoordinate:Ye==="top"?1:Ye==="center"?Y/2:Y,qe=Ue+" "+q+" "+Ae,et=void 0;try{C.filter=ue,C.drawImage(A,0,0,Q,Y),$e&&(C.font=qe,C.fillStyle=De,C.textAlign=Ze,C.textBaseline=Ye,C.fillText($e,_e,ye)),et=C.getImageData(0,0,Q,Y),T.addFrameImageData(et)}catch(xt){return""+xt}},addFrameImageData:function(){var A=arguments.length>0&&arguments[0]!==c?arguments[0]:{},L=this.frames,T=A.data;this.frames.push({data:T,width:A.width,height:A.height,palette:null,dithering:null,done:!1,beingProcessed:!1,position:L.length})},onRenderProgress:function(A){this.onRenderProgressCallback=A},isRendering:function(){return this.generatingGIF},getBase64GIF:function(A){var L=this,T=function(K){L.destroyWorkers(),f.requestTimeout(function(){A(K)},0)};L.startRendering(T)},destroyWorkers:function(){if(!this.workerError){var A=this.workers;f.each(A,function(L,T){var C=T.worker,K=T.objectUrl;C.terminate(),f.URL.revokeObjectURL(K)})}}};function H(w,A){w.getBase64GIF(function(L){A({error:!1,errorCode:"",errorMsg:"",image:L})})}function k(){var w=arguments.length>0&&arguments[0]!==c?arguments[0]:{},A=w.callback,L=w.images,T=w.options,C=w.imagesLength,K={getUserMedia:!0,"window.URL":!0},Q=m.validate(K),Y=[],q=0,re=void 0,ue=void 0;if(Q.error)return A(Q);ue=new Z(T),f.each(L,function(Ae,Ue){var $e=Ue;Ue.src&&($e=$e.src),f.isElement($e)?(T.crossOrigin&&($e.crossOrigin=T.crossOrigin),Y[Ae]=$e,q+=1,q===C&&De()):f.isString($e)&&(re=new Image,T.crossOrigin&&(re.crossOrigin=T.crossOrigin),(function(Ze){Ue.text&&(Ze.text=Ue.text),Ze.onerror=function(Ye){var _e=void 0;if(--C,C===0)return _e={},_e.error="None of the requested images was capable of being retrieved",A(_e)},Ze.onload=function(Ye){Ue.text?Y[Ae]={img:Ze,text:Ze.text}:Y[Ae]=Ze,q+=1,q===C&&De(),f.removeElement(Ze)},Ze.src=$e})(re),f.setCSSAttr(re,{position:"fixed",opacity:"0"}),s.body.appendChild(re))});function De(){f.each(Y,function(Ae,Ue){Ue&&(Ue.text?ue.addFrame(Ue.img,T,Ue.text):ue.addFrame(Ue,T))}),H(ue,A)}}var N=function(){},V={getGIF:function(){var A=arguments.length>0&&arguments[0]!==c?arguments[0]:{},L=arguments[1];L=f.isFunction(L)?L:N;var T=s.createElement("canvas"),C=void 0,K=A.images,Q=!!K.length,Y=A.cameraStream,q=A.crop,re=A.filter,ue=A.fontColor,De=A.fontFamily,Ae=A.fontWeight,Ue=A.keepCameraOn;A.numWorkers;var $e=A.progressCallback,Ze=A.saveRenderingContexts,Ye=A.savedRenderingContexts,_e=A.text,ye=A.textAlign,qe=A.textBaseline,et=A.videoElement,xt=A.videoHeight,ee=A.videoWidth,Et=A.webcamVideoElement,ot=Number(A.gifWidth),dt=Number(A.gifHeight),Te=Number(A.interval);Number(A.sampleInterval);var Nt=Q?0:Te*1e3,z=[],R=Ye.length?Ye.length:A.numFrames,ie=R,Re=new Z(A),Pe=f.getFontSize(A),Be=A.textXCoordinate?A.textXCoordinate:ye==="left"?1:ye==="right"?ot:ot/2,Ve=A.textYCoordinate?A.textYCoordinate:qe==="top"?1:qe==="center"?dt/2:dt,Se=Ae+" "+Pe+" "+De,Me=q?Math.floor(q.scaledWidth/2):0,ke=q?ee-q.scaledWidth:0,je=q?Math.floor(q.scaledHeight/2):0,Ge=q?xt-q.scaledHeight:0,He=function ht(){var pt=ie-1;Ye.length?(C.putImageData(Ye[R-ie],0,0),ne()):yt();function yt(){try{ke>ee&&(ke=ee),Ge>xt&&(Ge=xt),Me<0&&(Me=0),je<0&&(je=0),C.filter=re,C.drawImage(et,Me,je,ke,Ge,0,0,ot,dt),ne()}catch(ze){if(ze.name==="NS_ERROR_NOT_AVAILABLE")f.requestTimeout(yt,100);else throw ze}}function ne(){var ze=void 0;Ze&&z.push(C.getImageData(0,0,ot,dt)),_e&&(C.font=Se,C.fillStyle=ue,C.textAlign=ye,C.textBaseline=qe,C.fillText(_e,Be,Ve)),ze=C.getImageData(0,0,ot,dt),Re.addFrameImageData(ze),ie=pt,$e((R-ie)/R),pt>0&&f.requestTimeout(ht,Nt),ie||Re.getBase64GIF(function(le){L({error:!1,errorCode:"",errorMsg:"",image:le,cameraStream:Y,videoElement:et,webcamVideoElement:Et,savedRenderingContexts:z,keepCameraOn:Ue})})}};R=R!==c?R:10,Te=Te!==c?Te:.1,T.width=ot,T.height=dt,C=T.getContext("2d"),(function ht(){if(!Ye.length&&et.currentTime===0){f.requestTimeout(ht,100);return}He()})()},getCropDimensions:function(){var A=arguments.length>0&&arguments[0]!==c?arguments[0]:{},L=A.videoWidth,T=A.videoHeight,C=A.gifWidth,K=A.gifHeight,Q={width:0,height:0,scaledWidth:0,scaledHeight:0};return L>T?(Q.width=Math.round(L*(K/T))-C,Q.scaledWidth=Math.round(Q.width*(T/K))):(Q.height=Math.round(T*(C/L))-K,Q.scaledHeight=Math.round(Q.height*(L/C))),Q}},j={loadedData:!1,defaultVideoDimensions:{width:640,height:480},findVideoSize:function w(A){w.attempts=w.attempts||0;var L=A.cameraStream,T=A.completedCallback,C=A.videoElement;C&&(C.videoWidth>0&&C.videoHeight>0?(C.removeEventListener("loadeddata",j.findVideoSize),T({videoElement:C,cameraStream:L,videoWidth:C.videoWidth,videoHeight:C.videoHeight})):w.attempts<10?(w.attempts+=1,f.requestTimeout(function(){j.findVideoSize(A)},400)):T({videoElement:C,cameraStream:L,videoWidth:j.defaultVideoDimensions.width,videoHeight:j.defaultVideoDimensions.height}))},onStreamingTimeout:function(A){f.isFunction(A)&&A({error:!0,errorCode:"getUserMedia",errorMsg:"There was an issue with the getUserMedia API - Timed out while trying to start streaming",image:null,cameraStream:{}})},stream:function(A){var L=f.isArray(A.existingVideo)?A.existingVideo[0]:A.existingVideo,T=A.cameraStream,C=A.completedCallback,K=A.streamedCallback,Q=A.videoElement;if(f.isFunction(K)&&K(),L){if(f.isString(L))Q.src=L,Q.innerHTML='<source src="'+L+'" type="video/'+f.getExtension(L)+'" />';else if(L instanceof Blob){try{Q.src=f.URL.createObjectURL(L)}catch{}Q.innerHTML='<source src="'+L+'" type="'+L.type+'" />'}}else if(Q.mozSrcObject)Q.mozSrcObject=T;else if(f.URL)try{Q.srcObject=T,Q.src=f.URL.createObjectURL(T)}catch{Q.srcObject=T}Q.play(),f.requestTimeout(function Y(){Y.count=Y.count||0,j.loadedData===!0?(j.findVideoSize({videoElement:Q,cameraStream:T,completedCallback:C}),j.loadedData=!1):(Y.count+=1,Y.count>10?j.findVideoSize({videoElement:Q,cameraStream:T,completedCallback:C}):Y())},0)},startStreaming:function(A){var L=f.isFunction(A.error)?A.error:f.noop,T=f.isFunction(A.streamed)?A.streamed:f.noop,C=f.isFunction(A.completed)?A.completed:f.noop,K=A.crossOrigin,Q=A.existingVideo,Y=A.lastCameraStream,q=A.options,re=A.webcamVideoElement,ue=f.isElement(Q)?Q:re||s.createElement("video");K&&(ue.crossOrigin=q.crossOrigin),ue.autoplay=!0,ue.loop=!0,ue.muted=!0,ue.addEventListener("loadeddata",function(De){j.loadedData=!0,q.offset&&(ue.currentTime=q.offset)}),Q?j.stream({videoElement:ue,existingVideo:Q,completedCallback:C}):Y?j.stream({videoElement:ue,cameraStream:Y,streamedCallback:T,completedCallback:C}):f.getUserMedia({video:!0},function(De){j.stream({videoElement:ue,cameraStream:De,streamedCallback:T,completedCallback:C})},L)},startVideoStreaming:function(A){var L=arguments.length>1&&arguments[1]!==c?arguments[1]:{},T=L.timeout!==c?L.timeout:0,C=L.callback,K=L.webcamVideoElement,Q=void 0;T>0&&(Q=f.requestTimeout(function(){j.onStreamingTimeout(C)},1e4)),j.startStreaming({error:function(){C({error:!0,errorCode:"getUserMedia",errorMsg:"There was an issue with the getUserMedia API - the user probably denied permission",image:null,cameraStream:{}})},streamed:function(){clearTimeout(Q)},completed:function(){var q=arguments.length>0&&arguments[0]!==c?arguments[0]:{},re=q.cameraStream,ue=q.videoElement,De=q.videoHeight,Ae=q.videoWidth;A({cameraStream:re,videoElement:ue,videoHeight:De,videoWidth:Ae})},lastCameraStream:L.lastCameraStream,webcamVideoElement:K,crossOrigin:L.crossOrigin,options:L})},stopVideoStreaming:function(A){A=f.isObject(A)?A:{};var L=A,T=L.keepCameraOn,C=L.videoElement,K=L.webcamVideoElement,Q=A.cameraStream||{},Y=Q.getTracks?Q.getTracks()||[]:[],q=!!Y.length,re=Y[0];!T&&q&&f.isFunction(re.stop)&&re.stop(),f.isElement(C)&&!K&&(C.pause(),f.isFunction(f.URL.revokeObjectURL)&&!f.webWorkerError&&C.src&&f.URL.revokeObjectURL(C.src),f.removeElement(C))}};function W(w){w=f.isObject(w)?w:{},j.stopVideoStreaming(w)}function $(w,A){var L=w.options||{},T=L.images,C=L.video,K=Number(L.gifWidth),Q=Number(L.gifHeight);Number(L.numFrames);var Y=w.cameraStream,q=w.videoElement,re=w.videoWidth,ue=w.videoHeight,De=V.getCropDimensions({videoWidth:re,videoHeight:ue,gifHeight:Q,gifWidth:K}),Ae=A;L.crop=De,L.videoElement=q,L.videoWidth=re,L.videoHeight=ue,L.cameraStream=Y,f.isElement(q)&&(q.width=K+De.width,q.height=Q+De.height,L.webcamVideoElement||(f.setCSSAttr(q,{position:"fixed",opacity:"0"}),s.body.appendChild(q)),q.play(),V.getGIF(L,function(Ue){(!T||!T.length)&&(!C||!C.length)&&W(Ue),Ae(Ue)}))}function fe(){var w=arguments.length>0&&arguments[0]!==c?arguments[0]:{},A=w.callback,L=w.existingVideo,T=w.options,C={getUserMedia:!0,"window.URL":!0},K=m.validate(C),Q=void 0,Y=void 0;if(K.error)return A(K);if(f.isElement(L)&&L.src){if(Y=L.src,Q=f.getExtension(Y),!f.isSupported.videoCodecs[Q])return A(m.messages.videoCodecs)}else f.isArray(L)&&f.each(L,function(q,re){if(re instanceof Blob?Q=re.type.substr(re.type.lastIndexOf("/")+1,re.length):Q=re.substr(re.lastIndexOf(".")+1,re.length),f.isSupported.videoCodecs[Q])return L=re,!1});j.startStreaming({completed:function(re){re.options=T||{},$(re,A)},existingVideo:L,crossOrigin:T.crossOrigin,options:T})}function te(){var w=arguments.length>0&&arguments[0]!==c?arguments[0]:{},A=w.callback,L=w.lastCameraStream,T=w.options,C=w.webcamVideoElement;if(!E())return A(m.validate());if(T.savedRenderingContexts.length){V.getGIF(T,function(K){A(K)});return}j.startVideoStreaming(function(){var K=arguments.length>0&&arguments[0]!==c?arguments[0]:{};K.options=T||{},$(K,A)},{lastCameraStream:L,callback:A,webcamVideoElement:C,crossOrigin:T.crossOrigin})}function X(w,A){if(A=f.isFunction(w)?w:A,w=f.isObject(w)?w:{},!!f.isFunction(A)){var L=f.mergeOptions(_,w)||{},T=w.cameraStream,C=L.images,K=C?C.length:0,Q=L.video,Y=L.webcamVideoElement;L=f.mergeOptions(L,{gifWidth:Math.floor(L.gifWidth),gifHeight:Math.floor(L.gifHeight)}),K?k({images:C,imagesLength:K,callback:A,options:L}):Q?fe({existingVideo:Q,callback:A,options:L}):te({lastCameraStream:T,callback:A,webcamVideoElement:Y,options:L})}}function O(w,A){if(A=f.isFunction(w)?w:A,w=f.isObject(w)?w:{},!!f.isFunction(A)){var L=f.mergeOptions(_,w),T=f.mergeOptions(L,{interval:.1,numFrames:1,gifWidth:Math.floor(L.gifWidth),gifHeight:Math.floor(L.gifHeight)});X(T,A)}}var D={utils:p,error:h,defaultOptions:x,createGIF:X,takeSnapShot:O,stopVideoStreaming:W,isSupported:M,isWebCamGIFSupported:E,isExistingVideoGIFSupported:S,isExistingImagesGIFSupported:U,VERSION:"0.4.5"};r.exports=D})(typeof window<"u"?window:{},typeof document<"u"?document:{createElement:function(){}},typeof window<"u"?window.navigator:{})})(fh)),fh.exports}var IR=FR();const zR=Rb(IR),BR=({expandedString:r,symbolActions:e,variables:i,defaultStepSize:s,defaultAngleDegrees:l,is3D:c,boundingBox:f,maxPathDist:p,colorPalette:m,strokeColor:h,backgroundColor:g,strokeWidth:_,showAxes:x,growPercent:M,animationStyle:E="sequential",segmentCount:U,onCenteringTriggerRef:S,onExportPngTriggerRef:y,onExportSvgTriggerRef:I,onExportGifTriggerRef:G})=>{const B=We.useRef(null),Z=We.useRef(null),H=We.useRef(null),k=We.useRef(null),N=We.useRef(null),V=We.useRef(null),j=We.useRef(null),W=We.useRef(null),$=We.useRef(null),[fe,te]=We.useState({width:0,height:0});We.useEffect(()=>{if(!B.current)return;const D=new ResizeObserver(w=>{for(const A of w){const{width:L,height:T}=A.contentRect;te({width:L,height:T})}});return D.observe(B.current),()=>D.disconnect()},[]),We.useEffect(()=>{if(!B.current)return;const D=B.current.clientWidth||500,w=B.current.clientHeight||500,A=new IS;A.background=new Pt(g),H.current=A;const L=new Ui(50,D/w,.1,1e8);L.position.set(0,0,100),k.current=L;const T=new i2({antialias:!0,preserveDrawingBuffer:!0});T.setSize(D,w),T.setPixelRatio(Math.min(window.devicePixelRatio,2)),B.current.innerHTML="",B.current.appendChild(T.domElement),Z.current=T;const C=new MR(L,T.domElement);C.enableDamping=!0,C.dampingFactor=.08,C.maxDistance=1e8,C.minDistance=.01,N.current=C;const K=new i1(16777215,.95);A.add(K);const Q=new r1(500,100,"#334155","#1e293b");Q.position.y=-20,j.current=Q,x&&A.add(Q);let Y;const q=()=>{Y=requestAnimationFrame(q),N.current&&N.current.update(),Z.current&&H.current&&k.current&&Z.current.render(H.current,k.current)};return q(),()=>{cancelAnimationFrame(Y),Z.current&&Z.current.dispose(),N.current&&N.current.dispose()}},[]),We.useEffect(()=>{H.current&&(H.current.background=new Pt(g))},[g]),We.useEffect(()=>{!Z.current||!k.current||fe.width===0||(k.current.aspect=fe.width/fe.height,k.current.updateProjectionMatrix(),Z.current.setSize(fe.width,fe.height))},[fe]),We.useEffect(()=>{H.current&&j.current&&(x?H.current.add(j.current):H.current.remove(j.current))},[x]);const X=()=>{if(!k.current||!N.current)return;let D=0,w=0,A=0,L=10,T=10,C=10,K=5;if(V.current){const Y=V.current.geometry;Y.computeBoundingBox();const q=Y.boundingBox;if(q){const re=new ce;q.getCenter(re);const ue=new ce;q.getSize(ue),D=re.x,w=re.y,A=re.z,L=ue.x,T=ue.y,C=ue.z,K=ue.length()*.5||5}}else D=(f.min.x+f.max.x)/2,w=(f.min.y+f.max.y)/2,A=(f.min.z+f.max.z)/2,L=f.max.x-f.min.x,T=f.max.y-f.min.y,C=f.max.z-f.min.z,K=Math.sqrt(L*L+T*T+C*C)*.5||5;N.current.target.set(D,w,A);const Q=k.current.fov*Math.PI/180;if(c){let Y=K/Math.sin(Q/2);Y=Math.max(Y,15)*1.15,k.current.position.set(D+Y*.55,w+Y*.45,A+Y*.7),N.current.enableRotate=!0}else{let Y=Math.max(L,T)/(2*Math.tan(Q/2));Y=Math.max(Y,15)*1.15,k.current.position.set(D,w,Y),k.current.lookAt(D,w,0),N.current.enableRotate=!1}N.current.update()};We.useEffect(()=>{S.current=X},[f,c]),We.useEffect(()=>{if(U>0){const D=setTimeout(()=>{X()},60);return()=>clearTimeout(D)}},[r,c]),We.useEffect(()=>{var w;if(!H.current||U===0){V.current&&((w=H.current)==null||w.remove(V.current));return}let D=!0;if(V.current){const L=V.current.geometry.getAttribute("position");L&&L.count===U*2&&(D=!1)}if(D){V.current&&(H.current.remove(V.current),V.current.geometry.dispose(),V.current.material.dispose(),V.current=null);const A=new Float32Array(U*6),L=new Float32Array(U*6);W.current=A,$.current=L;const T=new Pi;T.setAttribute("position",new Oi(A,3)),T.setAttribute("color",new Oi(L,3));const C=new mp({vertexColors:!0,transparent:!0,opacity:.95,linewidth:_}),K=new Qv(T,C);H.current.add(K),V.current=K}O()},[r,U,m,h,_,e]);const O=()=>{const D=V.current;if(!D||U===0)return;const w=W.current,A=$.current;if(!w||!A)return;const L=ch(r,e,i,s,l,m,h,M,E,w,A,f,p),T=D.geometry,C=T.getAttribute("position"),K=T.getAttribute("color");if(C.needsUpdate=!0,K.needsUpdate=!0,E==="sequential"){const Q=Math.floor(L*(M/100));T.setDrawRange(0,Q*2)}else T.setDrawRange(0,L*2)};return We.useEffect(()=>{O()},[i,M,E,s,l,e]),We.useEffect(()=>{y.current=D=>{const w=Z.current,A=H.current,L=k.current;if(!w||!A||!L)return"";const T=L.aspect,C=w.domElement.width/window.devicePixelRatio,K=w.domElement.height/window.devicePixelRatio;L.aspect=D.width/D.height,L.updateProjectionMatrix(),w.setSize(D.width,D.height),w.render(A,L);const Q=w.domElement.toDataURL("image/png");return L.aspect=T,L.updateProjectionMatrix(),w.setSize(C,K),w.render(A,L),Q}},[r,U,M,m,h,i,s,l,E,e]),We.useEffect(()=>{G.current=async D=>{const w=Z.current,A=H.current,L=k.current,T=V.current;if(!w||!A||!L||!T||U===0)throw new Error("The 3D engine is not ready. Please wait.");const C=L.aspect,K=w.domElement.width/window.devicePixelRatio,Q=w.domElement.height/window.devicePixelRatio;L.aspect=D.width/D.height,L.updateProjectionMatrix(),w.setSize(D.width,D.height);const Y=W.current,q=$.current;if(!Y||!q)throw new Error("The calculation engine is not ready.");const re=T.geometry,ue=re.getAttribute("position"),De=re.getAttribute("color"),Ae=D.frames,Ue=[];for(let $e=0;$e<Ae;$e++){D.onProgress(Math.min(45,Math.round($e/Ae*50)));const Ze=D.startPercent+(D.endPercent-D.startPercent)*($e/Math.max(1,Ae-1)),Ye=ch(r,e,i,s,l,m,h,Ze,E,Y,q,f,p);if(ue.needsUpdate=!0,De.needsUpdate=!0,E==="sequential"){const ye=Math.floor(Ye*(Ze/100));re.setDrawRange(0,ye*2)}else re.setDrawRange(0,Ye*2);w.render(A,L);const _e=w.domElement.toDataURL("image/png");Ue.push(_e),await new Promise(ye=>setTimeout(ye,15))}return L.aspect=C,L.updateProjectionMatrix(),w.setSize(K,Q),O(),w.render(A,L),D.onProgress(50),new Promise(($e,Ze)=>{zR.createGIF({images:Ue,gifWidth:D.width,gifHeight:D.height,interval:D.delay/1e3,numWorkers:2,sampleInterval:8},Ye=>{Ye.error?Ze(new Error(Ye.errorMsg||"GIF serialization failed.")):$e(Ye.image)})})}},[r,e,i,s,l,m,h,E,f,p]),We.useEffect(()=>{I.current=()=>{const D=k.current;if(!D)return"";const w=1e3,A=D.aspect||1,L=Math.round(w/A);let T="";const C=new Float32Array(U*6),K=new Float32Array(U*6),Q=ch(r,e,i,s,l,m,h,100,"sequential",C,K,f,p),Y=new ce,q=new ce;for(let re=0;re<Q;re++){const ue=re*6;if(Y.set(C[ue],C[ue+1],C[ue+2]),q.set(C[ue+3],C[ue+4],C[ue+5]),Y.distanceToSquared(q)<1e-5)continue;Y.project(D),q.project(D);const De=((Y.x*.5+.5)*w).toFixed(1),Ae=((1-(Y.y*.5+.5))*L).toFixed(1),Ue=((q.x*.5+.5)*w).toFixed(1),$e=((1-(q.y*.5+.5))*L).toFixed(1),Ze=Math.round(K[ue]*255),Ye=Math.round(K[ue+1]*255),_e=Math.round(K[ue+2]*255),ye=`#${((1<<24)+(Ze<<16)+(Ye<<8)+_e).toString(16).slice(1)}`;T+=`<line x1="${De}" y1="${Ae}" x2="${Ue}" y2="${$e}" stroke="${ye}" stroke-width="${(_*.4).toFixed(3)}" stroke-linecap="round" />
`}return`<?xml version="1.0" encoding="utf-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${L}" width="${w}" height="${L}">
  <rect width="100%" height="100%" fill="${g}" />
  <g>
${T}  </g>
</svg>`}},[r,U,m,h,_,g,f,i,s,l,e]),v.jsxs("div",{className:"relative w-full h-full select-none outline-none",children:[v.jsx("div",{ref:B,className:"w-full h-full rounded-2xl overflow-hidden shadow-2xl",id:"lsystem-canvas",style:{touchAction:"none"}}),U===0&&v.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-slate-950/70 backdrop-blur-md rounded-2xl",children:v.jsxs("div",{className:"text-center p-6 text-slate-400",children:[v.jsx("p",{className:"text-lg font-medium mb-1 text-slate-200",children:"No Segments To Render"}),v.jsx("p",{className:"text-sm",children:"Verify your rules and variable definitions."})]})})]})},HR=({expandedString:r,segmentCount:e,symbolActions:i,variables:s,defaultStepSize:l,defaultAngleDegrees:c,is3D:f,onToggle3D:p,boundingBox:m,maxPathDist:h,colorPalette:g,strokeColor:_,backgroundColor:x,strokeWidth:M,showAxes:E,onToggleAxes:U,growPercent:S,animationStyle:y="sequential",isCalculating:I=!1,isCapped:G,totalLength:B,evaluationTimeMs:Z,name:H,onChangeName:k,isViewingShared:N,onPromoteFromShared:V,onSaveToGallery:j,onOpenGallery:W,savedCount:$,onCenteringTriggerRef:fe,onExportPngTriggerRef:te,onExportSvgTriggerRef:X,onExportGifTriggerRef:O})=>{const D=()=>{fe.current&&fe.current()};return v.jsxs("div",{className:"relative w-full h-full flex flex-col bg-slate-950 rounded-2xl border border-slate-800/80 overflow-hidden",id:"canvas-view-container",children:[N&&v.jsxs("div",{className:"bg-gradient-to-r from-amber-500/10 via-amber-500/15 to-amber-500/10 border-b border-amber-500/20 px-4 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-2.5 shrink-0 text-left relative z-20",children:[v.jsxs("div",{className:"flex items-center gap-2.5 text-[11px] text-amber-300",children:[v.jsx(hl,{className:"w-3.5 h-3.5 text-amber-400 shrink-0 animate-pulse"}),v.jsxs("span",{children:["Preview Mode: Viewing shared masterpiece ",v.jsxs("strong",{children:['"',H,'"']}),". This will not overwrite your local session unless you choose to save it."]})]}),v.jsxs("div",{className:"flex items-center gap-2 shrink-0 select-none",children:[v.jsx("button",{type:"button",onClick:j,className:"px-3 py-1 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold rounded-lg transition-all cursor-pointer",children:"Save Layout"}),v.jsx("button",{type:"button",onClick:V,className:"px-3 py-1 bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/30 text-[10px] font-bold rounded-lg transition-all cursor-pointer",children:"Edit & Customize"})]})]}),v.jsxs("div",{className:"flex-1 min-h-[400px] relative",children:[I&&v.jsx("div",{className:"absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-emerald-500 to-purple-400 animate-pulse z-20",style:{backgroundImage:"linear-gradient(90deg, #a855f7 0%, #10b981 50%, #a855f7 100%)"}}),v.jsxs("div",{className:"absolute top-4 left-4 right-4 z-10 flex flex-wrap gap-2 items-center justify-between pointer-events-none select-none",children:[v.jsx("div",{className:"flex gap-2 pointer-events-auto",children:v.jsxs("div",{className:"px-3 py-1.5 bg-slate-900/85 backdrop-blur-md rounded-xl border border-slate-800 text-[10px] text-slate-300 flex items-center gap-2 font-mono shadow-lg shadow-slate-950/20",id:"badge-status-container",children:[v.jsx(gp,{className:`w-3.5 h-3.5 ${I?"text-purple-400 animate-spin":"text-emerald-400"}`}),I?v.jsx("span",{className:"text-purple-300 font-semibold animate-pulse",children:"Calculating..."}):v.jsxs(v.Fragment,{children:[v.jsxs("span",{children:["Lines: ",v.jsx("strong",{className:"text-emerald-400",children:e.toLocaleString()})]}),v.jsx("span",{className:"text-slate-600",children:"|"}),v.jsxs("span",{children:["Calc: ",v.jsxs("strong",{className:"text-slate-200",children:[Z.toFixed(0),"ms"]})]})]}),G&&!I&&v.jsxs(v.Fragment,{children:[v.jsx("span",{className:"text-slate-600",children:"|"}),v.jsx("span",{className:"text-amber-400 font-bold px-1.5 py-0.5 bg-amber-500/10 border border-amber-500/20 rounded-md",children:"CAPPED"})]})]})}),v.jsxs("div",{className:"flex gap-1.5 pointer-events-auto",children:[v.jsx("button",{onClick:D,type:"button",title:"Auto-Center & Fit Camera View",className:"p-2.5 bg-slate-900/85 hover:bg-slate-800/90 backdrop-blur-md text-slate-200 border border-slate-800 hover:border-slate-700 rounded-xl transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer",id:"center-view-overlay-btn",children:v.jsx(G2,{className:"w-4 h-4"})}),v.jsx("button",{onClick:()=>p(!f),type:"button",title:f?"Switch to Flat 2D Mode":"Switch to Immersive 3D Orbit Mode",className:`p-2.5 backdrop-blur-md border rounded-xl transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-1.5 text-xs font-semibold ${f?"bg-indigo-500/20 text-indigo-300 border-indigo-500/40":"bg-slate-900/85 border-slate-800 text-slate-300 hover:bg-slate-800/90"}`,id:"toggle-3d-overlay-btn",children:f?v.jsxs(v.Fragment,{children:[v.jsx(xp,{className:"w-4 h-4 shrink-0"}),v.jsx("span",{className:"hidden sm:inline",children:"3D Active"})]}):v.jsxs(v.Fragment,{children:[v.jsx(vp,{className:"w-4 h-4 shrink-0"}),v.jsx("span",{className:"hidden sm:inline",children:"Flat 2D"})]})}),v.jsx("button",{onClick:()=>U(!E),type:"button",title:E?"Hide coordinate system axes":"Show coordinate system axes (RGB)",className:`p-2.5 backdrop-blur-md border rounded-xl transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer ${E?"bg-slate-900/90 text-emerald-400 border-emerald-500/40":"bg-slate-900/85 border-slate-800 text-slate-300 hover:bg-slate-800/90"}`,children:v.jsx(I2,{className:"w-4 h-4"})})]})]}),v.jsx(BR,{expandedString:r,symbolActions:i,variables:s,defaultStepSize:l,defaultAngleDegrees:c,is3D:f,boundingBox:m,maxPathDist:h,colorPalette:g,strokeColor:_,backgroundColor:x,strokeWidth:M,showAxes:E,growPercent:S,animationStyle:y,segmentCount:e,onCenteringTriggerRef:fe,onExportPngTriggerRef:te,onExportSvgTriggerRef:X,onExportGifTriggerRef:O})]}),v.jsx("div",{className:"absolute bottom-4 left-4 right-4 pointer-events-none z-10 select-none",children:v.jsxs("div",{className:"mx-auto max-w-xs px-3 py-2 bg-slate-900/85 backdrop-blur-md rounded-xl border border-slate-800 text-[10px] text-slate-400 text-center flex items-center justify-center gap-2 font-medium shadow-lg pointer-events-auto",children:[v.jsx(p_,{className:"w-3.5 h-3.5 text-slate-500 shrink-0"}),v.jsx("span",{children:f?"Drag to Rotate • Right-click (or Ctrl) + drag to Pan • Scroll to Zoom":"Drag to Pan • Scroll to Zoom (Rotation locked in 2D)"})]})})]})},GR=({strokeColor:r,onChangeStrokeColor:e,backgroundColor:i,onChangeBackgroundColor:s,colorPalette:l,onChangeColorPalette:c})=>v.jsxs("div",{className:"space-y-4",children:[v.jsxs("div",{className:"space-y-1.5 text-left",children:[v.jsx("label",{className:"text-xs font-semibold text-slate-300 block uppercase tracking-wider text-[10px]",children:"Color Art Palette"}),v.jsxs("select",{value:l,onChange:f=>c(f.target.value),className:"w-full bg-slate-900 border border-slate-800 text-slate-205 text-xs p-2.5 rounded-xl focus:outline-none focus:border-emerald-500 cursor-pointer transition-colors duration-200",children:[v.jsx("option",{value:"solid",children:"Single Solid Color"}),v.jsx("option",{value:"rainbow",children:"Dynamic Rainbow 🌈"}),v.jsx("option",{value:"forest",children:"Organic Forest 🌿"}),v.jsx("option",{value:"sunset",children:"Solar Sunset 🌅"}),v.jsx("option",{value:"depth",children:"3D Height Gradient ⇳"}),v.jsx("option",{value:"neon",children:"Radioactive Neon ⚡"})]})]}),l==="solid"&&v.jsxs("div",{className:"space-y-1.5 text-left animate-fade-in",children:[v.jsx("label",{className:"text-xs font-semibold text-slate-300 block uppercase tracking-wider text-[10px]",children:"Line Color"}),v.jsxs("div",{className:"flex gap-2",children:[v.jsx("input",{type:"color",value:r,onChange:f=>e(f.target.value),className:"w-11 h-9 rounded-xl border border-slate-700 bg-transparent p-0 cursor-pointer overflow-hidden shrink-0"}),v.jsx("input",{type:"text",value:r,onChange:f=>e(f.target.value),className:"flex-1 bg-slate-900 border border-slate-800 text-slate-200 font-mono text-xs px-3 py-2 rounded-xl focus:outline-none focus:border-emerald-500"})]})]}),v.jsxs("div",{className:"space-y-1.5 text-left",children:[v.jsx("label",{className:"text-xs font-semibold text-slate-300 block uppercase tracking-wider text-[10px]",children:"Background Canvas"}),v.jsxs("div",{className:"flex gap-2",children:[v.jsx("input",{type:"color",value:i,onChange:f=>s(f.target.value),className:"w-11 h-9 rounded-xl border border-slate-700 bg-transparent p-0 cursor-pointer overflow-hidden shrink-0"}),v.jsx("input",{type:"text",value:i,onChange:f=>s(f.target.value),className:"flex-1 bg-slate-900 border border-slate-800 text-slate-200 font-mono text-xs px-3 py-2 rounded-xl focus:outline-none focus:border-emerald-500"})]})]})]}),VR=({childrenMap:r,styleProps:e})=>{const[i,s]=We.useState("rules"),l=[{id:"rules",label:"Axiom & Rules",desc:"Specify production rules & alphabet grammar",icon:v.jsx(y2,{className:"w-5 h-5"}),colorClass:"group-hover:text-amber-400 text-slate-400"},{id:"presets",label:"Fractal Templates",desc:"Select classic complex fractals and space curves",icon:v.jsx(m_,{className:"w-5 h-5"}),colorClass:"group-hover:text-cyan-400 text-slate-400"},{id:"variables",label:"Variables & Morphing",desc:"Tune numerical variables and real-time animation coefficients",icon:v.jsx(sR,{className:"w-5 h-5"}),colorClass:"group-hover:text-emerald-400 text-slate-400"},{id:"actions",label:"Symbol Actions Mapping",desc:"Customize the behavior role and instructions for each symbol",icon:v.jsx(__,{className:"w-5 h-5"}),colorClass:"group-hover:text-indigo-400 text-slate-400"},{id:"style",label:"Styling & Palettes",desc:"Customize colors, thickness, and dark environmental canvas themes",icon:v.jsx(W2,{className:"w-5 h-5"}),colorClass:"group-hover:text-pink-400 text-slate-400"},{id:"performance",label:"Performance Limits",desc:"Configure generation restrictions to fit your rendering engine constraints",icon:v.jsx(g_,{className:"w-5 h-5"}),colorClass:"group-hover:text-blue-400 text-slate-400"},{id:"animations",label:"Aesthetic Animations",desc:"Set procedural growth loops, drawing speeds, and custom playbacks",icon:v.jsx(R2,{className:"w-5 h-5"}),colorClass:"group-hover:text-orange-400 text-slate-400"},{id:"share",label:"Share, Load & Save",desc:"Generate custom sharing links or back up your definition configs",icon:v.jsx(S_,{className:"w-5 h-5"}),colorClass:"group-hover:text-teal-400 text-slate-400"},{id:"export",label:"Artwork Exporter",desc:"Prepare vector graphics or raster renders of fully completed structures",icon:v.jsx(ll,{className:"w-5 h-5"}),colorClass:"group-hover:text-rose-400 text-slate-400"}],c=l.find(p=>p.id===i)||l[0],f=()=>{switch(i){case"presets":return r.presets;case"rules":return r.rules;case"variables":return r.variables;case"actions":return r.actions;case"style":return v.jsx(GR,{...e});case"performance":return r.performance;case"animations":return r.animations;case"share":return r.share;case"export":return r.export;default:return r.rules}};return v.jsxs("div",{className:"w-full h-full flex bg-[#0c111d] border border-slate-900 rounded-2xl overflow-hidden shadow-2xl relative",children:[v.jsxs("div",{className:"w-16 shrink-0 bg-slate-950/95 border-r border-slate-900/60 flex flex-col justify-between items-center py-4 h-full relative z-10 select-none",children:[v.jsx("div",{className:"flex flex-col gap-2.5 items-center w-full",children:l.map(p=>{const m=p.id===i;return v.jsxs("div",{className:"relative group flex items-center justify-center w-full",children:[v.jsxs("button",{type:"button",onClick:()=>s(p.id),title:"",className:`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200 cursor-pointer relative ${m?"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-md shadow-emerald-500/5 font-semibold":"text-slate-500 hover:text-slate-350 hover:bg-slate-900/50"}`,children:[m&&v.jsx("span",{className:"absolute left-0 top-1/4 bottom-1/4 w-[2.5px] rounded-r bg-emerald-400"}),p.icon]}),v.jsx("div",{className:"absolute left-[66px] top-1/2 -translate-y-1/2 ml-1 px-3 py-1.5 bg-slate-950 border border-slate-800 text-slate-100 text-[11px] font-semibold rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-2xl whitespace-nowrap z-[999] pointer-events-none tracking-wide",children:p.label})]},p.id)})}),v.jsxs("div",{className:"relative group flex items-center justify-center w-full",children:[v.jsx("div",{className:"p-2 text-slate-600 hover:text-slate-400 transition-colors cursor-pointer",children:v.jsx(p_,{className:"w-4 h-4"})}),v.jsxs("div",{className:"absolute left-[66px] bottom-0 mb-1 px-3 py-2 bg-slate-950 border border-slate-800 text-slate-100 text-[9px] leading-relaxed rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-2xl w-48 z-[999] pointer-events-none text-left",children:[v.jsx("span",{className:"font-bold text-slate-300 block mb-0.5",children:"L-System Studio Helper"}),"Select modular parameter tabs vertically. Zero redundant layout scrolls!"]})]})]}),v.jsxs("div",{className:"flex-grow flex flex-col h-full min-w-0 bg-[#070b13]/60 relative",children:[v.jsxs("div",{className:"p-4 bg-slate-950/80 border-b border-slate-900/60 shrink-0 text-left",children:[v.jsx("h3",{className:"font-bold text-xs text-slate-100 uppercase tracking-widest text-emerald-400 block mb-0.5",children:c.label}),v.jsx("p",{className:"text-[11px] text-slate-400 leading-relaxed max-w-full truncate",children:c.desc})]}),v.jsx("div",{className:"flex-1 overflow-y-auto p-4 space-y-4",children:v.jsx("div",{className:"animate-fade-in duration-300",children:f()})})]})]})};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function kR(r){return new Promise(e=>{setTimeout(()=>{try{const i=performance.now(),s=Av(r.axiom,r.rules,r.iterations,r.maxOutputLimit),l=f_(s.expandedString,r.symbolActions,r.varMap,r.stepSize,r.angle),c=performance.now()-i;e({success:!0,expandedString:s.expandedString,isCapped:s.isCapped,totalLength:s.totalLength,segmentCount:l.segmentCount,is3D:l.is3D,boundingBox:l.boundingBox,maxPathDist:l.maxPathDist,evalTimeMs:c})}catch(i){e({success:!1,expandedString:"",isCapped:!1,totalLength:0,segmentCount:0,is3D:!1,boundingBox:{min:{x:0,y:0,z:0},max:{x:0,y:0,z:0}},maxPathDist:0,evalTimeMs:0,error:i.message||String(i)})}},0)})}const jR=({axiom:r,rules:e,symbolActions:i,defaultAngleDegrees:s,strokeColor:l="#10b981",className:c="w-full h-full"})=>{const f=We.useMemo(()=>{const p={};for(const O of e)O.inputSymbol&&(p[O._inputSymbol||O.inputSymbol]=O.successor);let m=r;const h=3,g=1e3;for(let O=0;O<h;O++){let D="";for(let w=0;w<m.length;w++){const A=m[w],L=p[A];if(D+=L!==void 0?L:A,D.length>g){D=D.substring(0,g);break}}if(m=D,m.length>=g)break}const _={};for(const O of i)O.symbol&&(_[O.symbol]=O.actionType);const x=[],M=[];let E=0,U=0,S=-90;const y=10;let I=0,G=0,B=0,Z=0;const H=(O,D)=>{O<I&&(I=O),O>G&&(G=O),D<B&&(B=D),D>Z&&(Z=D)};H(E,U);for(let O=0;O<m.length;O++){const D=m[O],w=_[D];if(w)switch(w){case Ee.FORWARD:{const A=S*Math.PI/180,L=E+Math.cos(A)*y,T=U+Math.sin(A)*y;x.push({x1:E,y1:U,x2:L,y2:T}),E=L,U=T,H(E,U);break}case Ee.FORWARD_NO_PEN:{const A=S*Math.PI/180;E+=Math.cos(A)*y,U+=Math.sin(A)*y,H(E,U);break}case Ee.TURN_LEFT:case Ee.YAW_LEFT:{S-=s;break}case Ee.TURN_RIGHT:case Ee.YAW_RIGHT:{S+=s;break}case Ee.PUSH_STATE:{M.push({x:E,y:U,angle:S});break}case Ee.POP_STATE:{const A=M.pop();A&&(E=A.x,U=A.y,S=A.angle);break}case Ee.TURN_ROUND:{S+=180;break}}}if(x.length===0)return{viewBox:"-15 -15 30 30",paths:[v.jsx("circle",{cx:"0",cy:"0",r:"10",stroke:l,strokeWidth:"1.5",fill:"none",opacity:"0.6"},"c")]};const k=G-I,N=Z-B,V=k>0?k*.12:5,j=N>0?N*.12:5,W=I-V,$=B-j,fe=k+V*2,te=N+j*2,X=x.map(O=>`M ${O.x1.toFixed(1)} ${O.y1.toFixed(1)} L ${O.x2.toFixed(1)} ${O.y2.toFixed(1)}`).join(" ");return{viewBox:`${W} ${$} ${fe} ${te}`,paths:[v.jsx("path",{d:X,stroke:l,strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",fill:"none"},"p")]}},[r,e,i,s,l]);return v.jsx("svg",{viewBox:f.viewBox,className:c,xmlns:"http://www.w3.org/2000/svg",children:f.paths})};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const il="lsystem_explorer_saved_masterpieces",Na={getAll(){try{const r=localStorage.getItem(il);return r?JSON.parse(r):[]}catch(r){return console.error("Failed to read masterpieces from LocalStorage",r),[]}},save(r){var p;const e=this.getAll(),i={...r},s=((p=i.name)==null?void 0:p.trim())||`My Fractal #${e.length+1}`;i.name=s;let l=i.id,c=!1,f;if(l&&l.startsWith("masterpiece_")){const m=e.findIndex(h=>h.id===l);m!==-1&&(c=!0,f={...e[m],name:s,savedAt:new Date().toISOString(),definition:i},e[m]=f)}return c||(l=`masterpiece_${Date.now()}`,i.id=l,f={id:l,name:s,savedAt:new Date().toISOString(),definition:i},e.unshift(f)),localStorage.setItem(il,JSON.stringify(e)),{savedItem:f,allList:e,isUpdate:c}},delete(r){const i=this.getAll().filter(s=>s.id!==r);return localStorage.setItem(il,JSON.stringify(i)),i},rename(r,e){const s=this.getAll().map(l=>l.id===r?{...l,name:e.trim(),definition:{...l.definition,name:e.trim()}}:l);return localStorage.setItem(il,JSON.stringify(s)),s},importBackup(r){if(!Array.isArray(r))throw new Error("Backup file must contain a JSON list.");if(!r.every(l=>l.id&&l.name&&l.definition))throw new Error("Detected invalid or corrupted backup structure.");const i=this.getAll(),s=[...r];return i.forEach(l=>{s.some(c=>c.id===l.id)||s.push(l)}),localStorage.setItem(il,JSON.stringify(s)),s}},WR=({isOpen:r,onClose:e,currentDefinition:i,onLoadCreation:s})=>{const[l,c]=We.useState([]),[f,p]=We.useState(""),[m,h]=We.useState(null),[g,_]=We.useState(""),[x,M]=We.useState(null),[E,U]=We.useState(null),S=We.useRef(null);We.useEffect(()=>{r&&(c(Na.getAll()),U(null))},[r]);const y=()=>{const{savedItem:j,allList:W}=Na.save(i);c(W),M(j.id),setTimeout(()=>M(null),2500)},I=(j,W)=>{W.stopPropagation(),U(j)},G=(j,W)=>{W.stopPropagation();const $=Na.delete(j);c($),U(null)},B=j=>{j.stopPropagation(),U(null)},Z=(j,W)=>{W.stopPropagation(),h(j.id),_(j.name)},H=(j,W)=>{if(W.stopPropagation(),!g.trim())return;const $=Na.rename(j,g);c($),h(null)},k=()=>{try{if(l.length===0){alert("You don't have any saved masterpiece layouts to export yet!");return}const j="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(l,null,2)),W=document.createElement("a");W.setAttribute("href",j),W.setAttribute("download",`lsystem_masterpieces_backup_${new Date().toISOString().split("T")[0]}.json`),document.body.appendChild(W),W.click(),W.remove()}catch(j){console.error("Failed to export template masterpieces backup",j)}},N=j=>{const W=new FileReader;j.target.files&&j.target.files[0]&&(W.readAsText(j.target.files[0],"UTF-8"),W.onload=$=>{var fe;try{const te=JSON.parse((fe=$.target)==null?void 0:fe.result),X=Na.importBackup(te);c(X),alert(`Successfully imported ${te.length} masterpiece configurations!`)}catch(te){alert(te.message||"Failed to parse file. Make sure it is a valid JSON backup.")}})},V=l.filter(j=>j.name.toLowerCase().includes(f.toLowerCase()));return r?v.jsxs("div",{className:"fixed inset-0 z-[9999] flex items-center justify-center p-4",children:[v.jsx("div",{className:"absolute inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity duration-300",onClick:e}),v.jsxs("div",{className:"relative bg-[#090e18] border border-slate-800 rounded-2xl w-full max-w-4xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200",role:"dialog","aria-modal":"true",children:[v.jsxs("div",{className:"flex items-center justify-between p-5 bg-slate-1000/80 border-b border-slate-900 shrink-0 text-left",children:[v.jsxs("div",{className:"flex items-center gap-3",children:[v.jsx("div",{className:"p-2.5 bg-indigo-500/10 text-indigo-400 rounded-xl border border-indigo-500/20",children:v.jsx(v_,{className:"w-5 h-5"})}),v.jsxs("div",{children:[v.jsx("h2",{className:"text-base font-bold text-white tracking-wide font-sans",children:"My Saved Masterpieces"}),v.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Display and manage your custom-saved procedurally-generated artwork. Fully offline storage on this browser."})]})]}),v.jsx("button",{type:"button",onClick:e,className:"p-1.5 rounded-xl border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-900 transition-all cursor-pointer",children:v.jsx(hR,{className:"w-5 h-5"})})]}),v.jsxs("div",{className:"px-5 py-3.5 bg-amber-500/5 border-b border-amber-500/20 text-left flex flex-col lg:flex-row lg:items-center gap-3.5 shrink-0",children:[v.jsxs("div",{className:"flex items-start gap-3 flex-1",children:[v.jsx(yv,{className:"w-5 h-5 text-amber-400 shrink-0 mt-0.5"}),v.jsxs("div",{className:"flex-1",children:[v.jsxs("p",{className:"text-[11px] text-amber-200 font-medium leading-relaxed",children:[v.jsx("strong",{children:"Local Storage Warning:"})," These creations are saved strictly in your browser's local partition storage. Clearing your browser cache, browsing history, or temporary site data will permanently delete them."]}),v.jsx("p",{className:"text-[10px] text-slate-400 mt-0.5 font-medium",children:"To keep your artwork permanently safe, we highly recommend exporting your entire library of layouts to a local JSON backup file."})]})]}),v.jsxs("div",{className:"flex items-center gap-2 shrink-0 select-none mt-2 lg:mt-0 justify-end",children:[v.jsxs("button",{type:"button",onClick:k,title:"Download entire library as a local backup .json",className:"px-3 py-1.5 bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-300 font-bold text-[10px] rounded-lg transition-all flex items-center gap-1.5 cursor-pointer shrink-0",children:[v.jsx(ll,{className:"w-3 h-3"}),v.jsx("span",{children:"Export Library (JSON)"})]}),v.jsxs("button",{type:"button",onClick:()=>{var j;return(j=S.current)==null?void 0:j.click()},title:"Import local .json masterpieces library backup file",className:"px-3 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 font-bold text-[10px] rounded-lg transition-all flex items-center gap-1.5 cursor-pointer shrink-0",children:[v.jsx(M_,{className:"w-3 h-3 text-indigo-400"}),v.jsx("span",{children:"Import Library"})]}),v.jsx("input",{type:"file",ref:S,onChange:N,accept:".json",className:"hidden"})]})]}),v.jsxs("div",{className:"p-4 bg-[#0a0f1b] border-b border-slate-900 flex flex-col sm:flex-row gap-3 items-center shrink-0",children:[v.jsxs("div",{className:"relative w-full sm:flex-1",children:[v.jsx(eR,{className:"absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500"}),v.jsx("input",{type:"text",placeholder:"Search masterpieces by name...",value:f,onChange:j=>p(j.target.value),className:"w-full bg-slate-950 border border-slate-850 focus:border-indigo-500 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-200 placeholder-slate-500 outline-none transition-all"})]}),v.jsxs("button",{type:"button",onClick:y,className:"w-full sm:w-auto px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-indigo-600/10 shrink-0",children:[v.jsx(vu,{className:"w-4 h-4"}),v.jsx("span",{children:"Save Current Fractal"})]})]}),v.jsx("div",{className:"flex-1 overflow-y-auto p-6 bg-[#070b13]/40 min-h-0",children:V.length===0?v.jsxs("div",{className:"flex flex-col items-center justify-center py-16 text-center space-y-4",children:[v.jsx("div",{className:"bg-slate-900/60 p-5 rounded-full border border-slate-800 text-slate-500",children:v.jsx(hl,{className:"w-8 h-8"})}),v.jsxs("div",{children:[v.jsx("p",{className:"text-slate-300 font-semibold text-sm",children:f?"No matching saved masterpieces found.":"No creations saved yet."}),v.jsx("p",{className:"text-[11px] text-slate-500 leading-relaxed max-w-sm mt-1",children:f?"Verify the spelling or search query to find your custom procedural fractal.":"Establish your custom configuration, give it an elegant title, and click the Save button above to save it locally."})]}),!f&&v.jsx("button",{type:"button",onClick:y,className:"px-4 py-2 bg-slate-900 text-slate-200 border border-slate-800 hover:border-indigo-500/40 text-xs font-semibold rounded-xl transition-all cursor-pointer",children:"Save Current configuration as first masterpiece"})]}):v.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:V.map(j=>{const W=j.definition.renderSettings.is3D,$=m===j.id,fe=x===j.id,te=E===j.id,X=new Date(j.savedAt).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"});return v.jsxs("div",{onClick:()=>{!$&&!te&&(s(j.definition),e())},className:`group relative bg-slate-950/80 border hover:bg-slate-950/100 rounded-2xl p-3.5 flex flex-col text-left transition-all duration-200 cursor-pointer overflow-hidden ${fe?"border-indigo-550 shadow-xl shadow-indigo-500/5 ring-1 ring-indigo-500/50":"border-slate-900/80 hover:border-slate-800/80 shadow-md hover:shadow-xl hover:translate-y-[-2px]"}`,children:[v.jsxs("div",{className:"h-32 mb-3 bg-slate-900/60 rounded-xl border border-slate-900/40 relative overflow-hidden flex items-center justify-center",children:[v.jsx(jR,{axiom:j.definition.axiom,rules:j.definition.rules,symbolActions:j.definition.symbolActions,defaultAngleDegrees:j.definition.renderSettings.angle,strokeColor:j.definition.renderSettings.strokeColor||"#10b981",className:"w-24 h-24 text-emerald-400 group-hover:scale-105 transition-transform duration-300"}),v.jsxs("span",{className:"absolute bottom-2.5 right-2.5 bg-slate-950/90 text-slate-300 border border-slate-800 text-[9px] px-1.5 py-0.5 rounded font-mono font-medium tracking-wider flex items-center gap-1 shrink-0",children:[W?v.jsx(xp,{className:"w-2.5 h-2.5 text-indigo-400"}):v.jsx(vp,{className:"w-2.5 h-2.5 text-emerald-400"}),W?"3D":"2D"]})]}),v.jsxs("div",{className:"flex-1 flex flex-col justify-between space-y-2",children:[v.jsxs("div",{className:"space-y-1",children:[$?v.jsxs("div",{className:"flex gap-1.5 items-center w-full",onClick:O=>O.stopPropagation(),children:[v.jsx("input",{type:"text",value:g,onChange:O=>_(O.target.value),className:"bg-slate-900 border border-indigo-500 rounded px-2 py-0.5 text-xs text-white outline-none flex-1 font-sans",autoFocus:!0}),v.jsx("button",{type:"button",onClick:O=>H(j.id,O),className:"p-1 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-500/30 rounded cursor-pointer",children:v.jsx(h_,{className:"w-3.5 h-3.5"})})]}):v.jsxs("div",{className:"flex items-center justify-between gap-1.5",children:[v.jsx("h3",{className:"font-bold text-xs text-slate-150 leading-snug group-hover:text-indigo-300 truncate transition-colors",children:j.name}),v.jsx("button",{type:"button",onClick:O=>Z(j,O),title:"Rename creation",className:"p-1 text-slate-500 hover:text-slate-300 opacity-0 group-hover:opacity-100 transition-all cursor-pointer",children:v.jsx(Y2,{className:"w-3.5 h-3.5"})})]}),v.jsxs("div",{className:"flex items-center gap-1.5 text-[10px] text-slate-500 font-mono",children:[v.jsx(v2,{className:"w-3 h-3 shrink-0"}),v.jsx("span",{children:X})]})]}),v.jsxs("div",{className:"bg-slate-900/30 p-2 rounded-lg border border-slate-900/50 flex justify-between items-center text-[10px] text-slate-400 font-mono",children:[v.jsxs("span",{children:["Axiom: ",v.jsx("strong",{className:"text-slate-350 truncate max-w-[50px] inline-block align-bottom",children:j.definition.axiom})]}),v.jsxs("span",{children:["Iter: ",v.jsx("strong",{className:"text-slate-350",children:j.definition.iterations})]})]})]}),!te&&v.jsx("button",{type:"button",onClick:O=>I(j.id,O),title:"Delete saved masterpiece",className:"absolute top-2.5 left-2.5 p-1.5 bg-slate-950/80 hover:bg-red-500 border border-slate-800 hover:border-red-600 text-slate-400 hover:text-white rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-150 cursor-pointer hover:shadow-lg shadow-red-500/10 shrink-0",children:v.jsx(lR,{className:"w-3.5 h-3.5"})}),te&&v.jsxs("div",{className:"absolute inset-0 bg-[#160c11] border border-red-550/40 rounded-2xl p-4 flex flex-col justify-between z-30 animate-in fade-in zoom-in-95 duration-150 text-left",onClick:O=>O.stopPropagation(),children:[v.jsxs("div",{className:"space-y-1",children:[v.jsxs("h3",{className:"text-red-400 font-bold text-xs flex items-center gap-1.5 font-sans",children:[v.jsx(yv,{className:"w-4 h-4 text-red-400 shrink-0"}),v.jsx("span",{children:"Delete Masterpiece?"})]}),v.jsxs("p",{className:"text-[10px] text-slate-400 leading-snug font-sans",children:['Permanently delete "',j.name,'"? This action cannot be undone.']})]}),v.jsxs("div",{className:"flex items-center gap-2 mt-2",children:[v.jsx("button",{type:"button",onClick:O=>G(j.id,O),className:"flex-1 py-1.5 px-2 bg-red-600 hover:bg-red-500 border border-red-650 text-white font-bold text-[10px] rounded-lg transition-all cursor-pointer text-center",children:"Delete"}),v.jsx("button",{type:"button",onClick:B,className:"flex-1 py-1.5 px-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 font-bold text-[10px] rounded-lg transition-all cursor-pointer text-center",children:"Cancel"})]})]})]},j.id)})})}),v.jsxs("div",{className:"p-4 bg-slate-950/80 border-t border-slate-900 shrink-0 text-right flex items-center justify-between",children:[v.jsxs("span",{className:"text-[10px] text-slate-500 flex items-center gap-1.5",children:[v.jsx(f2,{className:"w-3.5 h-3.5 text-indigo-400 shrink-0"}),v.jsx("span",{children:"Masterpieces are stored fully persistent inside local partition files."})]}),v.jsx("button",{type:"button",onClick:e,className:"px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-850 hover:border-slate-800 text-slate-300 hover:text-white text-xs font-semibold rounded-xl transition-all cursor-pointer",children:"Close Dialog"})]})]})]}):null},Tv="lsystem_explorer_active_space";function XR(){const[r,e]=We.useState(()=>{const _e=window.location.hash;if(_e.startsWith("#share=")){const qe=_e.substring(7),et=bv(qe);if(et)return{...yi[0],...et,presetId:et.presetId||yi[0].id,lastLoadedPresetId:et.presetId||yi[0].id,id:`shared_${Date.now()}`}}try{const qe=localStorage.getItem(Tv);if(qe){const et=JSON.parse(qe);return{...et,presetId:et.presetId||yi[0].id,lastLoadedPresetId:et.lastLoadedPresetId||et.presetId||yi[0].id}}}catch{}const ye=yi[0];return{...ye,presetId:ye.id,lastLoadedPresetId:ye.id}}),[i,s]=We.useState(r.renderSettings.growPercent||100),[l,c]=We.useState(!1),[f,p]=We.useState("sequential"),m=We.useRef(r);We.useEffect(()=>{m.current=r},[r]);const[h,g]=We.useState(0),[_,x]=We.useState(()=>{try{const _e=localStorage.getItem("lsystem_max_output_limit");return _e==="Infinity"?1/0:_e?Number(_e):1e6}catch{return 1e6}});We.useEffect(()=>{localStorage.setItem("lsystem_max_output_limit",_.toString())},[_]);const[M,E]=We.useState(r.renderSettings.showAxes||!1),U=We.useRef(null),S=We.useRef(null),y=We.useRef(null),I=We.useRef,[G,B]=We.useState(()=>window.location.hash.startsWith("#share=")),[Z,H]=We.useState(!1),[k,N]=We.useState(()=>Na.getAll().length),[V,j]=We.useState(null);We.useEffect(()=>{const _e=ye=>{(ye.ctrlKey||ye.metaKey)&&ye.key==="s"&&(ye.preventDefault(),K())};return window.addEventListener("keydown",_e),()=>{window.removeEventListener("keydown",_e)}},[]);const W=()=>{N(Na.getAll().length)};We.useEffect(()=>{Z||W()},[Z]);const $=()=>{B(_e=>{if(_e)try{window.history.replaceState(null,"",window.location.pathname)}catch{window.location.hash=""}return!1})};We.useEffect(()=>{if(!G)try{localStorage.setItem(Tv,JSON.stringify(r))}catch{}},[r,G]),We.useEffect(()=>{const _e=()=>{const ye=window.location.hash;if(ye.startsWith("#share=")){const qe=bv(ye.substring(7));qe&&(B(!0),e(et=>({...et,...qe,presetId:qe.presetId||et.presetId,id:`shared_${Date.now()}`})))}};return window.addEventListener("hashchange",_e),()=>window.removeEventListener("hashchange",_e)},[]);const fe=r.variables.some(_e=>_e.animate);We.useEffect(()=>{if(!(l||m.current.variables.some(xt=>xt.animate)))return;let ye=performance.now(),qe;const et=xt=>{const ee=Math.min((xt-ye)/1e3,.1);ye=xt,l&&s(ot=>{const dt=ot+ee*18;return dt>=100?0:dt}),m.current.variables.some(ot=>ot.animate)&&e(ot=>{const dt=ot.variables.map(Te=>{if(!Te.animate)return Te;const Nt=Te.animationSpeed||5,z=Te.animationDirection||1;let R=Te.value+z*Nt*ee,ie=z;return Te.animationType==="ping-pong"?R>=Te.max?(R=Te.max,ie=-1):R<=Te.min&&(R=Te.min,ie=1):Te.animationType==="loop"?R>=Te.max?R=Te.min:R<=Te.min&&(R=Te.max):Te.animationType==="one-way"&&R>=Te.max&&(R=Te.max,Te.animate=!1),{...Te,value:R,animationDirection:ie}});return{...ot,variables:dt}}),qe=requestAnimationFrame(et)};return qe=requestAnimationFrame(et),()=>cancelAnimationFrame(qe)},[l,fe]);const te=We.useMemo(()=>{const _e={};for(const ye of r.variables)_e[ye.name]=ye.value;return _e},[r.variables]),X=We.useMemo(()=>{if(typeof r.iterations=="number")return r.iterations;const _e=Zs(r.iterations,te);return isNaN(_e)?1:Math.max(0,Math.floor(_e))},[r.iterations,te]),[O,D]=We.useState(()=>{const _e={};for(const et of r.variables)_e[et.name]=et.value;const ye=Av(r.axiom,r.rules,3,5e4),qe=f_(ye.expandedString,r.symbolActions,_e,r.renderSettings.stepSize,r.renderSettings.angle);return{expandedString:ye.expandedString,isCapped:ye.isCapped,totalLength:ye.totalLength,segmentCount:qe.segmentCount,is3D:qe.is3D,boundingBox:qe.boundingBox,maxPathDist:qe.maxPathDist}}),[w,A]=We.useState(!1);We.useEffect(()=>{let _e=!0;return A(!0),kR({axiom:r.axiom,rules:r.rules,iterations:X,maxOutputLimit:_,symbolActions:r.symbolActions,varMap:te,stepSize:r.renderSettings.stepSize,angle:r.renderSettings.angle}).then(ye=>{_e&&(A(!1),ye.success&&(D({expandedString:ye.expandedString,isCapped:ye.isCapped,totalLength:ye.totalLength,segmentCount:ye.segmentCount,is3D:ye.is3D,boundingBox:ye.boundingBox,maxPathDist:ye.maxPathDist}),g(ye.evalTimeMs)))}),()=>{_e=!1}},[r.axiom,r.rules,X,_,r.symbolActions,te,r.renderSettings.stepSize,r.renderSettings.angle]);const L=_e=>{c(!1),s(100),$(),e({..._e,presetId:_e.id,lastLoadedPresetId:_e.id,id:`preset_${Date.now()}`})},T=_e=>{c(!1),s(100),$(),e(_e)},C=_e=>{$(),e(ye=>{const qe=ye.presetId&&ye.presetId!=="custom"?ye.presetId:ye.lastLoadedPresetId;return{...ye,name:_e,presetId:"custom",lastLoadedPresetId:qe}})},K=()=>{try{const _e={...m.current},{savedItem:ye,isUpdate:qe}=Na.save(_e);e(ye.definition);const et=Na.getAll();N(et.length);const xt=qe?`Updated masterpiece sequence: "${ye.name}"!`:`Saved new masterpiece layout: "${ye.name}"!`;j(xt),setTimeout(()=>{j(ee=>ee===xt?null:ee)},3e3)}catch(_e){console.error("Failed to save masterpiece explicitly",_e),j("Error: Failed to save masterpiece layout."),setTimeout(()=>j(null),3e3)}},Q=_e=>{$(),e(ye=>{const qe=ye.presetId&&ye.presetId!=="custom"?ye.presetId:ye.lastLoadedPresetId;return{...ye,axiom:_e,presetId:"custom",lastLoadedPresetId:qe}})},Y=_e=>{$(),e(ye=>{const qe=ye.presetId&&ye.presetId!=="custom"?ye.presetId:ye.lastLoadedPresetId;return{...ye,iterations:_e,presetId:"custom",lastLoadedPresetId:qe}})},q=_e=>{$(),e(ye=>{const qe=ye.presetId&&ye.presetId!=="custom"?ye.presetId:ye.lastLoadedPresetId;return{...ye,rules:_e,presetId:"custom",lastLoadedPresetId:qe}})},re=_e=>{$(),e(ye=>{const qe=ye.presetId&&ye.presetId!=="custom"?ye.presetId:ye.lastLoadedPresetId;return{...ye,symbolActions:_e,presetId:"custom",lastLoadedPresetId:qe}})},ue=_e=>{$(),e(ye=>{const qe=ye.presetId&&ye.presetId!=="custom"?ye.presetId:ye.lastLoadedPresetId;return{...ye,variables:_e,presetId:"custom",lastLoadedPresetId:qe}})},De=(_e,ye)=>{$(),e(qe=>{const et=qe.presetId&&qe.presetId!=="custom"?qe.presetId:qe.lastLoadedPresetId;return{...qe,presetId:"custom",lastLoadedPresetId:et,renderSettings:{...qe.renderSettings,[_e]:ye}}})},Ae=_e=>S.current?S.current(_e):"",Ue=()=>y.current?y.current():"",$e=async _e=>{if(I.current)return await I.current(_e);throw new Error("Render engine is not ready for GIF export.")},Ze=r.presetId||r.id,Ye={presets:v.jsx("div",{className:"bg-slate-900/30 p-2 rounded-xl",children:v.jsx(pR,{activePresetId:Ze,onSelectPreset:L,definition:r})}),rules:v.jsx(mR,{axiom:r.axiom,onChangeAxiom:Q,iterations:r.iterations,onChangeIterations:Y,rules:r.rules,onChangeRules:q,availableVariables:r.variables.map(_e=>_e.name),isCapped:O.isCapped}),actions:v.jsx(gR,{symbolActions:r.symbolActions,onChangeSymbolActions:re,availableVariables:r.variables.map(_e=>_e.name)}),variables:v.jsx(xR,{variables:r.variables,onChangeVariables:ue}),animations:v.jsx(vR,{growPercent:i,onChangeGrowPercent:s,isGrowing:l,onToggleGrowing:()=>c(!l),animationStyle:f,onChangeAnimationStyle:p}),share:v.jsx(bR,{currentLSystem:r,onLoadSystem:L}),performance:v.jsxs("div",{className:"space-y-4",children:[v.jsx("p",{className:"text-[11px] text-slate-400 leading-relaxed text-left",children:"Configure the maximum string length for optimal performance. High-complexity fractals are evaluated on the main thread using optimized zero-allocation geometry loops!"}),v.jsxs("div",{className:"space-y-2 text-left",children:[v.jsxs("label",{className:"text-xs font-semibold text-slate-350 flex items-center gap-1.5",children:[v.jsx(g_,{className:"w-3.5 h-3.5 text-purple-400"}),v.jsx("span",{children:"Maximum Output Limit:"})]}),v.jsx("div",{className:"grid grid-cols-2 gap-1.5",children:[{label:"Fast (50K)",value:5e4},{label:"Standard (250K)",value:25e4},{label:"High (1M)",value:1e6},{label:"Max (10M)",value:1e7}].map(_e=>v.jsx("button",{type:"button",onClick:()=>x(_e.value),className:`py-1.5 px-2 rounded-xl text-center text-xs font-medium border transition-all cursor-pointer ${_===_e.value?"bg-purple-500/10 text-purple-300 border-purple-500/50 shadow-md shadow-purple-500/5":"bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-900/100"}`,children:_e.label},_e.value))}),v.jsx("button",{type:"button",onClick:()=>x(1/0),className:`w-full py-2.5 px-3 mt-1.5 rounded-xl text-center text-xs font-bold border transition-all cursor-pointer ${_===1/0?"bg-gradient-to-r from-emerald-500/20 to-purple-500/20 text-emerald-300 border-emerald-500/40 shadow-lg shadow-emerald-500/5":"bg-slate-950 text-slate-400 border-slate-800 hover:bg-slate-900"}`,children:"🔥 No Limit (Infinity)"})]}),v.jsxs("div",{className:"p-3 bg-slate-900/40 border border-slate-800/80 rounded-xl space-y-1.5 text-left",children:[v.jsx("span",{className:"text-[10px] text-slate-400 block font-semibold uppercase tracking-wider",children:"Engine Status (Direct evaluation)"}),v.jsxs("div",{className:"flex justify-between text-xs text-slate-350 font-mono",children:[v.jsx("span",{children:"String Output Length:"}),v.jsxs("span",{className:O.isCapped?"text-amber-400 font-bold":"text-emerald-400",children:[O.totalLength.toLocaleString()," ",O.isCapped?"(Capped)":""]})]}),v.jsxs("div",{className:"flex justify-between text-xs text-slate-350 font-mono",children:[v.jsx("span",{children:"L-System Eval Time:"}),v.jsxs("span",{className:"text-slate-200",children:[h.toFixed(1),"ms"]})]})]})]}),export:v.jsx(_R,{onExportPng:Ae,onExportSvg:Ue,onExportGif:$e})};return v.jsxs("div",{className:"w-screen min-h-screen bg-[#070b13] text-slate-100 flex flex-col font-sans select-none antialiased overflow-x-hidden md:overflow-y-hidden md:h-screen transition-colors duration-500",children:[v.jsxs("header",{className:"h-16 px-6 bg-[#070b13]/80 backdrop-blur-md border-b border-slate-900/60 flex items-center justify-between gap-4 shrink-0 relative z-30",children:[v.jsxs("div",{className:"flex items-center gap-3 shrink-0",children:[v.jsx("div",{className:"p-2 bg-purple-500/10 text-purple-400 rounded-xl border border-purple-500/20",children:v.jsx(x_,{className:"w-5 h-5 animate-pulse",id:"header-brand-icon"})}),v.jsxs("div",{children:[v.jsx("h1",{className:"text-base font-bold tracking-tight text-white leading-none",children:"L-System Studio"}),v.jsx("span",{className:"text-[10px] text-slate-500 font-mono mt-0.5 block",children:"v1.4 • High Performance Engine"})]})]}),v.jsxs("div",{className:"flex items-center gap-3 shrink-0",children:[v.jsxs("div",{className:"flex items-center gap-2 bg-slate-900/50 px-3 py-1.5 rounded-xl border border-slate-800/80 w-36 sm:w-56 font-sans",children:[v.jsx(hl,{className:"w-3.5 h-3.5 text-emerald-400 shrink-0"}),v.jsx("input",{type:"text",value:r.name,onChange:_e=>C(_e.target.value),placeholder:"Name your masterpiece...",title:"Rename active masterpiece",className:"bg-transparent border-none text-xs font-bold text-slate-100 outline-none w-full font-sans cursor-text p-0 focus:ring-0 placeholder-slate-500 leading-none"})]}),v.jsxs("button",{type:"button",onClick:K,title:"Save current procedural layout to local templates library (Ctrl+S)",className:"px-3 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer shadow-lg shadow-emerald-500/5 hover:scale-[1.02] active:scale-[0.98] shrink-0",children:[v.jsx(J2,{className:"w-3.5 h-3.5"}),v.jsx("span",{className:"hidden sm:inline",children:"Save"})]}),v.jsxs("button",{type:"button",onClick:()=>H(!0),title:"Open locally saved procedural art drafts panel",className:"px-3 py-1.5 bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer shrink-0",children:[v.jsx(v_,{className:"w-3.5 h-3.5 text-indigo-400 font-bold"}),v.jsxs("span",{children:["Creations (",k,")"]})]})]})]}),V&&v.jsxs("div",{className:"fixed top-20 right-6 z-[9999] bg-slate-950/95 border border-emerald-500/40 text-emerald-300 shadow-2xl rounded-xl px-4 py-3 flex items-center gap-3 animate-in slide-in-from-right-5 duration-200 backdrop-blur-md",children:[v.jsx(m2,{className:"w-4 h-4 text-emerald-400 shrink-0 animate-bounce"}),v.jsx("span",{className:"text-xs font-medium font-sans",children:V})]}),v.jsxs("main",{className:"flex-grow flex flex-col md:flex-row p-4 md:p-5 gap-4 overflow-hidden h-[calc(100vh-64px)] w-full",children:[v.jsx("aside",{className:"w-full md:w-[450px] lg:w-[480px] shrink-0 h-full flex flex-col overflow-hidden",children:v.jsx(VR,{childrenMap:Ye,styleProps:{strokeColor:r.renderSettings.strokeColor,onChangeStrokeColor:_e=>De("strokeColor",_e),backgroundColor:r.renderSettings.backgroundColor,onChangeBackgroundColor:_e=>De("backgroundColor",_e),strokeWidth:r.renderSettings.strokeWidth,onChangeStrokeWidth:_e=>De("strokeWidth",_e),colorPalette:r.renderSettings.colorPalette,onChangeColorPalette:_e=>De("colorPalette",_e)}})}),v.jsx("section",{className:"flex-grow h-full min-h-[500px] md:h-full relative overflow-hidden",children:v.jsx(HR,{expandedString:O.expandedString,segmentCount:O.segmentCount,symbolActions:r.symbolActions,variables:te,defaultStepSize:r.renderSettings.stepSize,defaultAngleDegrees:r.renderSettings.angle,is3D:O.is3D,onToggle3D:_e=>De("is3D",_e),boundingBox:O.boundingBox,maxPathDist:O.maxPathDist,colorPalette:r.renderSettings.colorPalette,strokeColor:r.renderSettings.strokeColor,backgroundColor:r.renderSettings.backgroundColor,strokeWidth:r.renderSettings.strokeWidth,showAxes:M,onToggleAxes:E,growPercent:i,animationStyle:f,isCapped:O.isCapped,totalLength:O.totalLength,evaluationTimeMs:h,isCalculating:w,name:r.name,onChangeName:C,isViewingShared:G,onPromoteFromShared:$,onSaveToGallery:K,onOpenGallery:()=>H(!0),savedCount:k,onCenteringTriggerRef:U,onExportPngTriggerRef:S,onExportSvgTriggerRef:y,onExportGifTriggerRef:I})})]}),v.jsx(WR,{isOpen:Z,onClose:()=>H(!1),currentDefinition:r,onLoadCreation:T})]})}Ib.createRoot(document.getElementById("root")).render(v.jsx(We.StrictMode,{children:v.jsx(XR,{})}));
