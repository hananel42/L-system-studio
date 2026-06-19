(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function SS(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var vd={exports:{}},Xo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $g;function bS(){if($g)return Xo;$g=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Xo.Fragment=e,Xo.jsx=i,Xo.jsxs=i,Xo}var ex;function MS(){return ex||(ex=1,vd.exports=bS()),vd.exports}var A=MS(),yd={exports:{}},xt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tx;function ES(){if(tx)return xt;tx=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),x=Symbol.iterator;function M(T){return T===null||typeof T!="object"?null:(T=x&&T[x]||T["@@iterator"],typeof T=="function"?T:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,b={};function y(T,S,V){this.props=T,this.context=S,this.refs=b,this.updater=V||E}y.prototype.isReactComponent={},y.prototype.setState=function(T,S){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,S,"setState")},y.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function F(){}F.prototype=y.prototype;function G(T,S,V){this.props=T,this.context=S,this.refs=b,this.updater=V||E}var z=G.prototype=new F;z.constructor=G,U(z,y.prototype),z.isPureReactComponent=!0;var K=Array.isArray;function B(){}var j={H:null,A:null,T:null,S:null},N=Object.prototype.hasOwnProperty;function k(T,S,V){var Y=V.ref;return{$$typeof:r,type:T,key:S,ref:Y!==void 0?Y:null,props:V}}function J(T,S){return k(T.type,S,T.props)}function Z(T){return typeof T=="object"&&T!==null&&T.$$typeof===r}function te(T){var S={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(V){return S[V]})}var _e=/\/+/g;function ae(T,S){return typeof T=="object"&&T!==null&&T.key!=null?te(""+T.key):S.toString(36)}function q(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(B,B):(T.status="pending",T.then(function(S){T.status==="pending"&&(T.status="fulfilled",T.value=S)},function(S){T.status==="pending"&&(T.status="rejected",T.reason=S)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function H(T,S,V,Y,W){var X=typeof T;(X==="undefined"||X==="boolean")&&(T=null);var re=!1;if(T===null)re=!0;else switch(X){case"bigint":case"string":case"number":re=!0;break;case"object":switch(T.$$typeof){case r:case e:re=!0;break;case g:return re=T._init,H(re(T._payload),S,V,Y,W)}}if(re)return W=W(T),re=Y===""?"."+ae(T,0):Y,K(W)?(V="",re!=null&&(V=re.replace(_e,"$&/")+"/"),H(W,S,V,"",function(Se){return Se})):W!=null&&(Z(W)&&(W=J(W,V+(W.key==null||T&&T.key===W.key?"":(""+W.key).replace(_e,"$&/")+"/")+re)),S.push(W)),1;re=0;var ue=Y===""?".":Y+":";if(K(T))for(var we=0;we<T.length;we++)Y=T[we],X=ue+ae(Y,we),re+=H(Y,S,V,X,W);else if(we=M(T),typeof we=="function")for(T=we.call(T),we=0;!(Y=T.next()).done;)Y=Y.value,X=ue+ae(Y,we++),re+=H(Y,S,V,X,W);else if(X==="object"){if(typeof T.then=="function")return H(q(T),S,V,Y,W);throw S=String(T),Error("Objects are not valid as a React child (found: "+(S==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":S)+"). If you meant to render a collection of children, use an array instead.")}return re}function D(T,S,V){if(T==null)return T;var Y=[],W=0;return H(T,Y,"","",function(X){return S.call(V,X,W++)}),Y}function w(T){if(T._status===-1){var S=T._result;S=S(),S.then(function(V){(T._status===0||T._status===-1)&&(T._status=1,T._result=V)},function(V){(T._status===0||T._status===-1)&&(T._status=2,T._result=V)}),T._status===-1&&(T._status=0,T._result=S)}if(T._status===1)return T._result.default;throw T._result}var R=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var S=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(S))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)},O={map:D,forEach:function(T,S,V){D(T,function(){S.apply(this,arguments)},V)},count:function(T){var S=0;return D(T,function(){S++}),S},toArray:function(T){return D(T,function(S){return S})||[]},only:function(T){if(!Z(T))throw Error("React.Children.only expected to receive a single React element child.");return T}};return xt.Activity=_,xt.Children=O,xt.Component=y,xt.Fragment=i,xt.Profiler=l,xt.PureComponent=G,xt.StrictMode=s,xt.Suspense=m,xt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=j,xt.__COMPILER_RUNTIME={__proto__:null,c:function(T){return j.H.useMemoCache(T)}},xt.cache=function(T){return function(){return T.apply(null,arguments)}},xt.cacheSignal=function(){return null},xt.cloneElement=function(T,S,V){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var Y=U({},T.props),W=T.key;if(S!=null)for(X in S.key!==void 0&&(W=""+S.key),S)!N.call(S,X)||X==="key"||X==="__self"||X==="__source"||X==="ref"&&S.ref===void 0||(Y[X]=S[X]);var X=arguments.length-2;if(X===1)Y.children=V;else if(1<X){for(var re=Array(X),ue=0;ue<X;ue++)re[ue]=arguments[ue+2];Y.children=re}return k(T.type,W,Y)},xt.createContext=function(T){return T={$$typeof:f,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:c,_context:T},T},xt.createElement=function(T,S,V){var Y,W={},X=null;if(S!=null)for(Y in S.key!==void 0&&(X=""+S.key),S)N.call(S,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&(W[Y]=S[Y]);var re=arguments.length-2;if(re===1)W.children=V;else if(1<re){for(var ue=Array(re),we=0;we<re;we++)ue[we]=arguments[we+2];W.children=ue}if(T&&T.defaultProps)for(Y in re=T.defaultProps,re)W[Y]===void 0&&(W[Y]=re[Y]);return k(T,X,W)},xt.createRef=function(){return{current:null}},xt.forwardRef=function(T){return{$$typeof:p,render:T}},xt.isValidElement=Z,xt.lazy=function(T){return{$$typeof:g,_payload:{_status:-1,_result:T},_init:w}},xt.memo=function(T,S){return{$$typeof:h,type:T,compare:S===void 0?null:S}},xt.startTransition=function(T){var S=j.T,V={};j.T=V;try{var Y=T(),W=j.S;W!==null&&W(V,Y),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"&&Y.then(B,R)}catch(X){R(X)}finally{S!==null&&V.types!==null&&(S.types=V.types),j.T=S}},xt.unstable_useCacheRefresh=function(){return j.H.useCacheRefresh()},xt.use=function(T){return j.H.use(T)},xt.useActionState=function(T,S,V){return j.H.useActionState(T,S,V)},xt.useCallback=function(T,S){return j.H.useCallback(T,S)},xt.useContext=function(T){return j.H.useContext(T)},xt.useDebugValue=function(){},xt.useDeferredValue=function(T,S){return j.H.useDeferredValue(T,S)},xt.useEffect=function(T,S){return j.H.useEffect(T,S)},xt.useEffectEvent=function(T){return j.H.useEffectEvent(T)},xt.useId=function(){return j.H.useId()},xt.useImperativeHandle=function(T,S,V){return j.H.useImperativeHandle(T,S,V)},xt.useInsertionEffect=function(T,S){return j.H.useInsertionEffect(T,S)},xt.useLayoutEffect=function(T,S){return j.H.useLayoutEffect(T,S)},xt.useMemo=function(T,S){return j.H.useMemo(T,S)},xt.useOptimistic=function(T,S){return j.H.useOptimistic(T,S)},xt.useReducer=function(T,S,V){return j.H.useReducer(T,S,V)},xt.useRef=function(T){return j.H.useRef(T)},xt.useState=function(T){return j.H.useState(T)},xt.useSyncExternalStore=function(T,S,V){return j.H.useSyncExternalStore(T,S,V)},xt.useTransition=function(){return j.H.useTransition()},xt.version="19.2.7",xt}var nx;function $h(){return nx||(nx=1,yd.exports=ES()),yd.exports}var Qe=$h(),Sd={exports:{}},qo={},bd={exports:{}},Md={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ix;function TS(){return ix||(ix=1,(function(r){function e(H,D){var w=H.length;H.push(D);e:for(;0<w;){var R=w-1>>>1,O=H[R];if(0<l(O,D))H[R]=D,H[w]=O,w=R;else break e}}function i(H){return H.length===0?null:H[0]}function s(H){if(H.length===0)return null;var D=H[0],w=H.pop();if(w!==D){H[0]=w;e:for(var R=0,O=H.length,T=O>>>1;R<T;){var S=2*(R+1)-1,V=H[S],Y=S+1,W=H[Y];if(0>l(V,w))Y<O&&0>l(W,V)?(H[R]=W,H[Y]=w,R=Y):(H[R]=V,H[S]=w,R=S);else if(Y<O&&0>l(W,w))H[R]=W,H[Y]=w,R=Y;else break e}}return D}function l(H,D){var w=H.sortIndex-D.sortIndex;return w!==0?w:H.id-D.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,p=f.now();r.unstable_now=function(){return f.now()-p}}var m=[],h=[],g=1,_=null,x=3,M=!1,E=!1,U=!1,b=!1,y=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;function z(H){for(var D=i(h);D!==null;){if(D.callback===null)s(h);else if(D.startTime<=H)s(h),D.sortIndex=D.expirationTime,e(m,D);else break;D=i(h)}}function K(H){if(U=!1,z(H),!E)if(i(m)!==null)E=!0,B||(B=!0,te());else{var D=i(h);D!==null&&q(K,D.startTime-H)}}var B=!1,j=-1,N=5,k=-1;function J(){return b?!0:!(r.unstable_now()-k<N)}function Z(){if(b=!1,B){var H=r.unstable_now();k=H;var D=!0;try{e:{E=!1,U&&(U=!1,F(j),j=-1),M=!0;var w=x;try{t:{for(z(H),_=i(m);_!==null&&!(_.expirationTime>H&&J());){var R=_.callback;if(typeof R=="function"){_.callback=null,x=_.priorityLevel;var O=R(_.expirationTime<=H);if(H=r.unstable_now(),typeof O=="function"){_.callback=O,z(H),D=!0;break t}_===i(m)&&s(m),z(H)}else s(m);_=i(m)}if(_!==null)D=!0;else{var T=i(h);T!==null&&q(K,T.startTime-H),D=!1}}break e}finally{_=null,x=w,M=!1}D=void 0}}finally{D?te():B=!1}}}var te;if(typeof G=="function")te=function(){G(Z)};else if(typeof MessageChannel<"u"){var _e=new MessageChannel,ae=_e.port2;_e.port1.onmessage=Z,te=function(){ae.postMessage(null)}}else te=function(){y(Z,0)};function q(H,D){j=y(function(){H(r.unstable_now())},D)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(H){H.callback=null},r.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<H?Math.floor(1e3/H):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(H){switch(x){case 1:case 2:case 3:var D=3;break;default:D=x}var w=x;x=D;try{return H()}finally{x=w}},r.unstable_requestPaint=function(){b=!0},r.unstable_runWithPriority=function(H,D){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var w=x;x=H;try{return D()}finally{x=w}},r.unstable_scheduleCallback=function(H,D,w){var R=r.unstable_now();switch(typeof w=="object"&&w!==null?(w=w.delay,w=typeof w=="number"&&0<w?R+w:R):w=R,H){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=w+O,H={id:g++,callback:D,priorityLevel:H,startTime:w,expirationTime:O,sortIndex:-1},w>R?(H.sortIndex=w,e(h,H),i(m)===null&&H===i(h)&&(U?(F(j),j=-1):U=!0,q(K,w-R))):(H.sortIndex=O,e(m,H),E||M||(E=!0,B||(B=!0,te()))),H},r.unstable_shouldYield=J,r.unstable_wrapCallback=function(H){var D=x;return function(){var w=x;x=D;try{return H.apply(this,arguments)}finally{x=w}}}})(Md)),Md}var ax;function AS(){return ax||(ax=1,bd.exports=TS()),bd.exports}var Ed={exports:{}},jn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sx;function RS(){if(sx)return jn;sx=1;var r=$h();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)h+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:h,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return jn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,jn.createPortal=function(m,h){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(m,h,null,g)},jn.flushSync=function(m){var h=f.T,g=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=h,s.p=g,s.d.f()}},jn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(m,h))},jn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},jn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var g=h.as,_=p(g,h.crossOrigin),x=typeof h.integrity=="string"?h.integrity:void 0,M=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;g==="style"?s.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:M}):g==="script"&&s.d.X(m,{crossOrigin:_,integrity:x,fetchPriority:M,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},jn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var g=p(h.as,h.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(m)},jn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var g=h.as,_=p(g,h.crossOrigin);s.d.L(m,g,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},jn.preloadModule=function(m,h){if(typeof m=="string")if(h){var g=p(h.as,h.crossOrigin);s.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(m)},jn.requestFormReset=function(m){s.d.r(m)},jn.unstable_batchedUpdates=function(m,h){return m(h)},jn.useFormState=function(m,h,g){return f.H.useFormState(m,h,g)},jn.useFormStatus=function(){return f.H.useHostTransitionStatus()},jn.version="19.2.7",jn}var rx;function CS(){if(rx)return Ed.exports;rx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Ed.exports=RS(),Ed.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ox;function wS(){if(ox)return qo;ox=1;var r=AS(),e=$h(),i=CS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function h(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),t;if(d===o)return m(u),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var v=!1,P=u.child;P;){if(P===a){v=!0,a=u,o=d;break}if(P===o){v=!0,o=u,a=d;break}P=P.sibling}if(!v){for(P=d.child;P;){if(P===a){v=!0,a=d,o=u;break}if(P===o){v=!0,o=d,a=u;break}P=P.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),G=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),k=Symbol.for("react.activity"),J=Symbol.for("react.memo_cache_sentinel"),Z=Symbol.iterator;function te(t){return t===null||typeof t!="object"?null:(t=Z&&t[Z]||t["@@iterator"],typeof t=="function"?t:null)}var _e=Symbol.for("react.client.reference");function ae(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===_e?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case U:return"Fragment";case y:return"Profiler";case b:return"StrictMode";case K:return"Suspense";case B:return"SuspenseList";case k:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case G:return t.displayName||"Context";case F:return(t._context.displayName||"Context")+".Consumer";case z:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case j:return n=t.displayName||null,n!==null?n:ae(t.type)||"Memo";case N:n=t._payload,t=t._init;try{return ae(t(n))}catch{}}return null}var q=Array.isArray,H=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,w={pending:!1,data:null,method:null,action:null},R=[],O=-1;function T(t){return{current:t}}function S(t){0>O||(t.current=R[O],R[O]=null,O--)}function V(t,n){O++,R[O]=t.current,t.current=n}var Y=T(null),W=T(null),X=T(null),re=T(null);function ue(t,n){switch(V(X,n),V(W,t),V(Y,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?bg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=bg(n),t=Mg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}S(Y),V(Y,t)}function we(){S(Y),S(W),S(X)}function Se(t){t.memoizedState!==null&&V(re,t);var n=Y.current,a=Mg(n,t.type);n!==a&&(V(W,t),V(Y,a))}function be(t){W.current===t&&(S(Y),S(W)),re.current===t&&(S(re),Vo._currentValue=w)}var Ze,We;function ze(t){if(Ze===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ze=n&&n[1]||"",We=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ze+t+We}var Je=!1;function tt(t,n){if(!t||Je)return"";Je=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var De=function(){throw Error()};if(Object.defineProperty(De.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(De,[])}catch(ve){var xe=ve}Reflect.construct(t,[],De)}else{try{De.call()}catch(ve){xe=ve}t.call(De.prototype)}}else{try{throw Error()}catch(ve){xe=ve}(De=t())&&typeof De.catch=="function"&&De.catch(function(){})}}catch(ve){if(ve&&xe&&typeof ve.stack=="string")return[ve.stack,xe.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),v=d[0],P=d[1];if(v&&P){var Q=v.split(`
`),de=P.split(`
`);for(u=o=0;o<Q.length&&!Q[o].includes("DetermineComponentFrameRoot");)o++;for(;u<de.length&&!de[u].includes("DetermineComponentFrameRoot");)u++;if(o===Q.length||u===de.length)for(o=Q.length-1,u=de.length-1;1<=o&&0<=u&&Q[o]!==de[u];)u--;for(;1<=o&&0<=u;o--,u--)if(Q[o]!==de[u]){if(o!==1||u!==1)do if(o--,u--,0>u||Q[o]!==de[u]){var Te=`
`+Q[o].replace(" at new "," at ");return t.displayName&&Te.includes("<anonymous>")&&(Te=Te.replace("<anonymous>",t.displayName)),Te}while(1<=o&&0<=u);break}}}finally{Je=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ze(a):""}function gt(t,n){switch(t.tag){case 26:case 27:case 5:return ze(t.type);case 16:return ze("Lazy");case 13:return t.child!==n&&n!==null?ze("Suspense Fallback"):ze("Suspense");case 19:return ze("SuspenseList");case 0:case 15:return tt(t.type,!1);case 11:return tt(t.type.render,!1);case 1:return tt(t.type,!0);case 31:return ze("Activity");default:return""}}function pt(t){try{var n="",a=null;do n+=gt(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ct=Object.prototype.hasOwnProperty,$=r.unstable_scheduleCallback,Et=r.unstable_cancelCallback,ot=r.unstable_shouldYield,mt=r.unstable_requestPaint,Le=r.unstable_now,Ft=r.unstable_getCurrentPriorityLevel,I=r.unstable_ImmediatePriority,C=r.unstable_UserBlockingPriority,ie=r.unstable_NormalPriority,Ee=r.unstable_LowPriority,Ue=r.unstable_IdlePriority,Ie=r.log,Ge=r.unstable_setDisableYieldValue,ye=null,Me=null;function Ve(t){if(typeof Ie=="function"&&Ge(t),Me&&typeof Me.setStrictMode=="function")try{Me.setStrictMode(ye,t)}catch{}}var ke=Math.clz32?Math.clz32:ut,He=Math.log,Be=Math.LN2;function ut(t){return t>>>=0,t===0?32:31-(He(t)/Be|0)|0}var ft=256,vt=262144,ee=4194304;function Fe(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function le(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var P=o&134217727;return P!==0?(o=P&~d,o!==0?u=Fe(o):(v&=P,v!==0?u=Fe(v):a||(a=P&~t,a!==0&&(u=Fe(a))))):(P=o&~d,P!==0?u=Fe(P):v!==0?u=Fe(v):a||(a=o&~t,a!==0&&(u=Fe(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Ae(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Oe(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function me(){var t=ee;return ee<<=1,(ee&62914560)===0&&(ee=4194304),t}function Pe(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ne(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function je(t,n,a,o,u,d){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var P=t.entanglements,Q=t.expirationTimes,de=t.hiddenUpdates;for(a=v&~a;0<a;){var Te=31-ke(a),De=1<<Te;P[Te]=0,Q[Te]=-1;var xe=de[Te];if(xe!==null)for(de[Te]=null,Te=0;Te<xe.length;Te++){var ve=xe[Te];ve!==null&&(ve.lane&=-536870913)}a&=~De}o!==0&&at(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(v&~n))}function at(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-ke(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function yt(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-ke(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function It(t,n){var a=n&-n;return a=(a&42)!==0?1:Cn(a),(a&(t.suspendedLanes|n))!==0?0:a}function Cn(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function qt(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function yn(){var t=D.p;return t!==0?t:(t=window.event,t===void 0?32:Xg(t.type))}function Fa(t,n){var a=D.p;try{return D.p=t,n()}finally{D.p=a}}var Vn=Math.random().toString(36).slice(2),gn="__reactFiber$"+Vn,Fn="__reactProps$"+Vn,ra="__reactContainer$"+Vn,Ia="__reactEvents$"+Vn,ul="__reactListeners$"+Vn,er="__reactHandles$"+Vn,no="__reactResources$"+Vn,za="__reactMarker$"+Vn;function io(t){delete t[gn],delete t[Fn],delete t[Ia],delete t[ul],delete t[er]}function Ba(t){var n=t[gn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[ra]||a[gn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Ng(t);t!==null;){if(a=t[gn])return a;t=Ng(t)}return n}t=a,a=t.parentNode}return null}function Ha(t){if(t=t[gn]||t[ra]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Es(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Ga(t){var n=t[no];return n||(n=t[no]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Sn(t){t[za]=!0}var fl=new Set,L={};function se(t,n){ge(t,n),ge(t+"Capture",n)}function ge(t,n){for(L[t]=n,t=0;t<n.length;t++)fl.add(n[t])}var he=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),pe={},qe={};function $e(t){return Ct.call(qe,t)?!0:Ct.call(pe,t)?!1:he.test(t)?qe[t]=!0:(pe[t]=!0,!1)}function Xe(t,n,a){if($e(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function nt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function et(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function lt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function St(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function rt(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,d.call(this,v)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Gt(t){if(!t._valueTracker){var n=St(t)?"checked":"value";t._valueTracker=rt(t,n,""+t[n])}}function fn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=St(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function rn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Yt=/[\n"\\]/g;function Zt(t){return t.replace(Yt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ke(t,n,a,o,u,d,v,P){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),n!=null?v==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+lt(n)):t.value!==""+lt(n)&&(t.value=""+lt(n)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),n!=null?wt(t,v,lt(n)):a!=null?wt(t,v,lt(a)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),P!=null&&typeof P!="function"&&typeof P!="symbol"&&typeof P!="boolean"?t.name=""+lt(P):t.removeAttribute("name")}function kn(t,n,a,o,u,d,v,P){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Gt(t);return}a=a!=null?""+lt(a):"",n=n!=null?""+lt(n):a,P||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=P?t.checked:!!o,t.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v),Gt(t)}function wt(t,n,a){n==="number"&&rn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function wn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+lt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function ci(t,n,a){if(n!=null&&(n=""+lt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+lt(a):""}function Fi(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(q(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=lt(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Gt(t)}function ui(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Kt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function dn(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Kt.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ii(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&dn(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&dn(t,d,n[d])}function Xt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Va=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ts(t){return Va.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function oa(){}var mu=null;function gu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var tr=null,nr=null;function Sp(t){var n=Ha(t);if(n&&(t=n.stateNode)){var a=t[Fn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Ke(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Zt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[Fn]||null;if(!u)throw Error(s(90));Ke(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&fn(o)}break e;case"textarea":ci(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&wn(t,!!a.multiple,n,!1)}}}var xu=!1;function bp(t,n,a){if(xu)return t(n,a);xu=!0;try{var o=t(n);return o}finally{if(xu=!1,(tr!==null||nr!==null)&&(Jl(),tr&&(n=tr,t=nr,nr=tr=null,Sp(n),t)))for(n=0;n<t.length;n++)Sp(t[n])}}function ao(t,n){var a=t.stateNode;if(a===null)return null;var o=a[Fn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var la=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_u=!1;if(la)try{var so={};Object.defineProperty(so,"passive",{get:function(){_u=!0}}),window.addEventListener("test",so,so),window.removeEventListener("test",so,so)}catch{_u=!1}var ka=null,vu=null,dl=null;function Mp(){if(dl)return dl;var t,n=vu,a=n.length,o,u="value"in ka?ka.value:ka.textContent,d=u.length;for(t=0;t<a&&n[t]===u[t];t++);var v=a-t;for(o=1;o<=v&&n[a-o]===u[d-o];o++);return dl=u.slice(t,1<o?1-o:void 0)}function hl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function pl(){return!0}function Ep(){return!1}function ei(t){function n(a,o,u,d,v){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var P in t)t.hasOwnProperty(P)&&(a=t[P],this[P]=a?a(d):d[P]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?pl:Ep,this.isPropagationStopped=Ep,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=pl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=pl)},persist:function(){},isPersistent:pl}),n}var As={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ml=ei(As),ro=_({},As,{view:0,detail:0}),vv=ei(ro),yu,Su,oo,gl=_({},ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==oo&&(oo&&t.type==="mousemove"?(yu=t.screenX-oo.screenX,Su=t.screenY-oo.screenY):Su=yu=0,oo=t),yu)},movementY:function(t){return"movementY"in t?t.movementY:Su}}),Tp=ei(gl),yv=_({},gl,{dataTransfer:0}),Sv=ei(yv),bv=_({},ro,{relatedTarget:0}),bu=ei(bv),Mv=_({},As,{animationName:0,elapsedTime:0,pseudoElement:0}),Ev=ei(Mv),Tv=_({},As,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Av=ei(Tv),Rv=_({},As,{data:0}),Ap=ei(Rv),Cv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Nv[t])?!!n[t]:!1}function Mu(){return Dv}var Uv=_({},ro,{key:function(t){if(t.key){var n=Cv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=hl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?wv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mu,charCode:function(t){return t.type==="keypress"?hl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?hl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Lv=ei(Uv),Ov=_({},gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rp=ei(Ov),Pv=_({},ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mu}),Fv=ei(Pv),Iv=_({},As,{propertyName:0,elapsedTime:0,pseudoElement:0}),zv=ei(Iv),Bv=_({},gl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Hv=ei(Bv),Gv=_({},As,{newState:0,oldState:0}),Vv=ei(Gv),kv=[9,13,27,32],Eu=la&&"CompositionEvent"in window,lo=null;la&&"documentMode"in document&&(lo=document.documentMode);var jv=la&&"TextEvent"in window&&!lo,Cp=la&&(!Eu||lo&&8<lo&&11>=lo),wp=" ",Np=!1;function Dp(t,n){switch(t){case"keyup":return kv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Up(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ir=!1;function Wv(t,n){switch(t){case"compositionend":return Up(n);case"keypress":return n.which!==32?null:(Np=!0,wp);case"textInput":return t=n.data,t===wp&&Np?null:t;default:return null}}function Xv(t,n){if(ir)return t==="compositionend"||!Eu&&Dp(t,n)?(t=Mp(),dl=vu=ka=null,ir=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Cp&&n.locale!=="ko"?null:n.data;default:return null}}var qv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!qv[t.type]:n==="textarea"}function Op(t,n,a,o){tr?nr?nr.push(o):nr=[o]:tr=o,n=sc(n,"onChange"),0<n.length&&(a=new ml("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var co=null,uo=null;function Yv(t){gg(t,0)}function xl(t){var n=Es(t);if(fn(n))return t}function Pp(t,n){if(t==="change")return n}var Fp=!1;if(la){var Tu;if(la){var Au="oninput"in document;if(!Au){var Ip=document.createElement("div");Ip.setAttribute("oninput","return;"),Au=typeof Ip.oninput=="function"}Tu=Au}else Tu=!1;Fp=Tu&&(!document.documentMode||9<document.documentMode)}function zp(){co&&(co.detachEvent("onpropertychange",Bp),uo=co=null)}function Bp(t){if(t.propertyName==="value"&&xl(uo)){var n=[];Op(n,uo,t,gu(t)),bp(Yv,n)}}function Zv(t,n,a){t==="focusin"?(zp(),co=n,uo=a,co.attachEvent("onpropertychange",Bp)):t==="focusout"&&zp()}function Kv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xl(uo)}function Qv(t,n){if(t==="click")return xl(n)}function Jv(t,n){if(t==="input"||t==="change")return xl(n)}function $v(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var fi=typeof Object.is=="function"?Object.is:$v;function fo(t,n){if(fi(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Ct.call(n,u)||!fi(t[u],n[u]))return!1}return!0}function Hp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Gp(t,n){var a=Hp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Hp(a)}}function Vp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Vp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function kp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=rn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=rn(t.document)}return n}function Ru(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var ey=la&&"documentMode"in document&&11>=document.documentMode,ar=null,Cu=null,ho=null,wu=!1;function jp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;wu||ar==null||ar!==rn(o)||(o=ar,"selectionStart"in o&&Ru(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ho&&fo(ho,o)||(ho=o,o=sc(Cu,"onSelect"),0<o.length&&(n=new ml("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=ar)))}function Rs(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var sr={animationend:Rs("Animation","AnimationEnd"),animationiteration:Rs("Animation","AnimationIteration"),animationstart:Rs("Animation","AnimationStart"),transitionrun:Rs("Transition","TransitionRun"),transitionstart:Rs("Transition","TransitionStart"),transitioncancel:Rs("Transition","TransitionCancel"),transitionend:Rs("Transition","TransitionEnd")},Nu={},Wp={};la&&(Wp=document.createElement("div").style,"AnimationEvent"in window||(delete sr.animationend.animation,delete sr.animationiteration.animation,delete sr.animationstart.animation),"TransitionEvent"in window||delete sr.transitionend.transition);function Cs(t){if(Nu[t])return Nu[t];if(!sr[t])return t;var n=sr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Wp)return Nu[t]=n[a];return t}var Xp=Cs("animationend"),qp=Cs("animationiteration"),Yp=Cs("animationstart"),ty=Cs("transitionrun"),ny=Cs("transitionstart"),iy=Cs("transitioncancel"),Zp=Cs("transitionend"),Kp=new Map,Du="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Du.push("scrollEnd");function zi(t,n){Kp.set(t,n),se(n,[t])}var _l=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},bi=[],rr=0,Uu=0;function vl(){for(var t=rr,n=Uu=rr=0;n<t;){var a=bi[n];bi[n++]=null;var o=bi[n];bi[n++]=null;var u=bi[n];bi[n++]=null;var d=bi[n];if(bi[n++]=null,o!==null&&u!==null){var v=o.pending;v===null?u.next=u:(u.next=v.next,v.next=u),o.pending=u}d!==0&&Qp(a,u,d)}}function yl(t,n,a,o){bi[rr++]=t,bi[rr++]=n,bi[rr++]=a,bi[rr++]=o,Uu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Lu(t,n,a,o){return yl(t,n,a,o),Sl(t)}function ws(t,n){return yl(t,null,null,n),Sl(t)}function Qp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-ke(a),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function Sl(t){if(50<Po)throw Po=0,kf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var or={};function ay(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(t,n,a,o){return new ay(t,n,a,o)}function Ou(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ca(t,n){var a=t.alternate;return a===null?(a=di(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Jp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function bl(t,n,a,o,u,d){var v=0;if(o=t,typeof t=="function")Ou(t)&&(v=1);else if(typeof t=="string")v=cS(t,a,Y.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case k:return t=di(31,a,n,u),t.elementType=k,t.lanes=d,t;case U:return Ns(a.children,u,d,n);case b:v=8,u|=24;break;case y:return t=di(12,a,n,u|2),t.elementType=y,t.lanes=d,t;case K:return t=di(13,a,n,u),t.elementType=K,t.lanes=d,t;case B:return t=di(19,a,n,u),t.elementType=B,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case G:v=10;break e;case F:v=9;break e;case z:v=11;break e;case j:v=14;break e;case N:v=16,o=null;break e}v=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=di(v,a,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function Ns(t,n,a,o){return t=di(7,t,o,n),t.lanes=a,t}function Pu(t,n,a){return t=di(6,t,null,n),t.lanes=a,t}function $p(t){var n=di(18,null,null,0);return n.stateNode=t,n}function Fu(t,n,a){return n=di(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var em=new WeakMap;function Mi(t,n){if(typeof t=="object"&&t!==null){var a=em.get(t);return a!==void 0?a:(n={value:t,source:n,stack:pt(n)},em.set(t,n),n)}return{value:t,source:n,stack:pt(n)}}var lr=[],cr=0,Ml=null,po=0,Ei=[],Ti=0,ja=null,qi=1,Yi="";function ua(t,n){lr[cr++]=po,lr[cr++]=Ml,Ml=t,po=n}function tm(t,n,a){Ei[Ti++]=qi,Ei[Ti++]=Yi,Ei[Ti++]=ja,ja=t;var o=qi;t=Yi;var u=32-ke(o)-1;o&=~(1<<u),a+=1;var d=32-ke(n)+u;if(30<d){var v=u-u%5;d=(o&(1<<v)-1).toString(32),o>>=v,u-=v,qi=1<<32-ke(n)+u|a<<u|o,Yi=d+t}else qi=1<<d|a<<u|o,Yi=t}function Iu(t){t.return!==null&&(ua(t,1),tm(t,1,0))}function zu(t){for(;t===Ml;)Ml=lr[--cr],lr[cr]=null,po=lr[--cr],lr[cr]=null;for(;t===ja;)ja=Ei[--Ti],Ei[Ti]=null,Yi=Ei[--Ti],Ei[Ti]=null,qi=Ei[--Ti],Ei[Ti]=null}function nm(t,n){Ei[Ti++]=qi,Ei[Ti++]=Yi,Ei[Ti++]=ja,qi=n.id,Yi=n.overflow,ja=t}var In=null,cn=null,zt=!1,Wa=null,Ai=!1,Bu=Error(s(519));function Xa(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw mo(Mi(n,t)),Bu}function im(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[gn]=t,n[Fn]=o,a){case"dialog":Dt("cancel",n),Dt("close",n);break;case"iframe":case"object":case"embed":Dt("load",n);break;case"video":case"audio":for(a=0;a<Io.length;a++)Dt(Io[a],n);break;case"source":Dt("error",n);break;case"img":case"image":case"link":Dt("error",n),Dt("load",n);break;case"details":Dt("toggle",n);break;case"input":Dt("invalid",n),kn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Dt("invalid",n);break;case"textarea":Dt("invalid",n),Fi(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||yg(n.textContent,a)?(o.popover!=null&&(Dt("beforetoggle",n),Dt("toggle",n)),o.onScroll!=null&&Dt("scroll",n),o.onScrollEnd!=null&&Dt("scrollend",n),o.onClick!=null&&(n.onclick=oa),n=!0):n=!1,n||Xa(t,!0)}function am(t){for(In=t.return;In;)switch(In.tag){case 5:case 31:case 13:Ai=!1;return;case 27:case 3:Ai=!0;return;default:In=In.return}}function ur(t){if(t!==In)return!1;if(!zt)return am(t),zt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||ad(t.type,t.memoizedProps)),a=!a),a&&cn&&Xa(t),am(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));cn=wg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));cn=wg(t)}else n===27?(n=cn,rs(t.type)?(t=cd,cd=null,cn=t):cn=n):cn=In?Ci(t.stateNode.nextSibling):null;return!0}function Ds(){cn=In=null,zt=!1}function Hu(){var t=Wa;return t!==null&&(ai===null?ai=t:ai.push.apply(ai,t),Wa=null),t}function mo(t){Wa===null?Wa=[t]:Wa.push(t)}var Gu=T(null),Us=null,fa=null;function qa(t,n,a){V(Gu,n._currentValue),n._currentValue=a}function da(t){t._currentValue=Gu.current,S(Gu)}function Vu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function ku(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var v=u.child;d=d.firstContext;e:for(;d!==null;){var P=d;d=u;for(var Q=0;Q<n.length;Q++)if(P.context===n[Q]){d.lanes|=a,P=d.alternate,P!==null&&(P.lanes|=a),Vu(d.return,a,t),o||(v=null);break e}d=P.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),Vu(v,a,t),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===t){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function fr(t,n,a,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var P=u.type;fi(u.pendingProps.value,v.value)||(t!==null?t.push(P):t=[P])}}else if(u===re.current){if(v=u.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Vo):t=[Vo])}u=u.return}t!==null&&ku(n,t,a,o),n.flags|=262144}function El(t){for(t=t.firstContext;t!==null;){if(!fi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ls(t){Us=t,fa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function zn(t){return sm(Us,t)}function Tl(t,n){return Us===null&&Ls(t),sm(t,n)}function sm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},fa===null){if(t===null)throw Error(s(308));fa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else fa=fa.next=n;return a}var sy=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},ry=r.unstable_scheduleCallback,oy=r.unstable_NormalPriority,bn={$$typeof:G,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ju(){return{controller:new sy,data:new Map,refCount:0}}function go(t){t.refCount--,t.refCount===0&&ry(oy,function(){t.controller.abort()})}var xo=null,Wu=0,dr=0,hr=null;function ly(t,n){if(xo===null){var a=xo=[];Wu=0,dr=Zf(),hr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Wu++,n.then(rm,rm),n}function rm(){if(--Wu===0&&xo!==null){hr!==null&&(hr.status="fulfilled");var t=xo;xo=null,dr=0,hr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function cy(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var om=H.S;H.S=function(t,n){j0=Le(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ly(t,n),om!==null&&om(t,n)};var Os=T(null);function Xu(){var t=Os.current;return t!==null?t:on.pooledCache}function Al(t,n){n===null?V(Os,Os.current):V(Os,n.pool)}function lm(){var t=Xu();return t===null?null:{parent:bn._currentValue,pool:t}}var pr=Error(s(460)),qu=Error(s(474)),Rl=Error(s(542)),Cl={then:function(){}};function cm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function um(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(oa,oa),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,dm(t),t;default:if(typeof n.status=="string")n.then(oa,oa);else{if(t=on,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,dm(t),t}throw Fs=n,pr}}function Ps(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Fs=a,pr):a}}var Fs=null;function fm(){if(Fs===null)throw Error(s(459));var t=Fs;return Fs=null,t}function dm(t){if(t===pr||t===Rl)throw Error(s(483))}var mr=null,_o=0;function wl(t){var n=_o;return _o+=1,mr===null&&(mr=[]),um(mr,t,n)}function vo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Nl(t,n){throw n.$$typeof===x?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function hm(t){function n(oe,ne){if(t){var fe=oe.deletions;fe===null?(oe.deletions=[ne],oe.flags|=16):fe.push(ne)}}function a(oe,ne){if(!t)return null;for(;ne!==null;)n(oe,ne),ne=ne.sibling;return null}function o(oe){for(var ne=new Map;oe!==null;)oe.key!==null?ne.set(oe.key,oe):ne.set(oe.index,oe),oe=oe.sibling;return ne}function u(oe,ne){return oe=ca(oe,ne),oe.index=0,oe.sibling=null,oe}function d(oe,ne,fe){return oe.index=fe,t?(fe=oe.alternate,fe!==null?(fe=fe.index,fe<ne?(oe.flags|=67108866,ne):fe):(oe.flags|=67108866,ne)):(oe.flags|=1048576,ne)}function v(oe){return t&&oe.alternate===null&&(oe.flags|=67108866),oe}function P(oe,ne,fe,Ce){return ne===null||ne.tag!==6?(ne=Pu(fe,oe.mode,Ce),ne.return=oe,ne):(ne=u(ne,fe),ne.return=oe,ne)}function Q(oe,ne,fe,Ce){var ct=fe.type;return ct===U?Te(oe,ne,fe.props.children,Ce,fe.key):ne!==null&&(ne.elementType===ct||typeof ct=="object"&&ct!==null&&ct.$$typeof===N&&Ps(ct)===ne.type)?(ne=u(ne,fe.props),vo(ne,fe),ne.return=oe,ne):(ne=bl(fe.type,fe.key,fe.props,null,oe.mode,Ce),vo(ne,fe),ne.return=oe,ne)}function de(oe,ne,fe,Ce){return ne===null||ne.tag!==4||ne.stateNode.containerInfo!==fe.containerInfo||ne.stateNode.implementation!==fe.implementation?(ne=Fu(fe,oe.mode,Ce),ne.return=oe,ne):(ne=u(ne,fe.children||[]),ne.return=oe,ne)}function Te(oe,ne,fe,Ce,ct){return ne===null||ne.tag!==7?(ne=Ns(fe,oe.mode,Ce,ct),ne.return=oe,ne):(ne=u(ne,fe),ne.return=oe,ne)}function De(oe,ne,fe){if(typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint")return ne=Pu(""+ne,oe.mode,fe),ne.return=oe,ne;if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case M:return fe=bl(ne.type,ne.key,ne.props,null,oe.mode,fe),vo(fe,ne),fe.return=oe,fe;case E:return ne=Fu(ne,oe.mode,fe),ne.return=oe,ne;case N:return ne=Ps(ne),De(oe,ne,fe)}if(q(ne)||te(ne))return ne=Ns(ne,oe.mode,fe,null),ne.return=oe,ne;if(typeof ne.then=="function")return De(oe,wl(ne),fe);if(ne.$$typeof===G)return De(oe,Tl(oe,ne),fe);Nl(oe,ne)}return null}function xe(oe,ne,fe,Ce){var ct=ne!==null?ne.key:null;if(typeof fe=="string"&&fe!==""||typeof fe=="number"||typeof fe=="bigint")return ct!==null?null:P(oe,ne,""+fe,Ce);if(typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case M:return fe.key===ct?Q(oe,ne,fe,Ce):null;case E:return fe.key===ct?de(oe,ne,fe,Ce):null;case N:return fe=Ps(fe),xe(oe,ne,fe,Ce)}if(q(fe)||te(fe))return ct!==null?null:Te(oe,ne,fe,Ce,null);if(typeof fe.then=="function")return xe(oe,ne,wl(fe),Ce);if(fe.$$typeof===G)return xe(oe,ne,Tl(oe,fe),Ce);Nl(oe,fe)}return null}function ve(oe,ne,fe,Ce,ct){if(typeof Ce=="string"&&Ce!==""||typeof Ce=="number"||typeof Ce=="bigint")return oe=oe.get(fe)||null,P(ne,oe,""+Ce,ct);if(typeof Ce=="object"&&Ce!==null){switch(Ce.$$typeof){case M:return oe=oe.get(Ce.key===null?fe:Ce.key)||null,Q(ne,oe,Ce,ct);case E:return oe=oe.get(Ce.key===null?fe:Ce.key)||null,de(ne,oe,Ce,ct);case N:return Ce=Ps(Ce),ve(oe,ne,fe,Ce,ct)}if(q(Ce)||te(Ce))return oe=oe.get(fe)||null,Te(ne,oe,Ce,ct,null);if(typeof Ce.then=="function")return ve(oe,ne,fe,wl(Ce),ct);if(Ce.$$typeof===G)return ve(oe,ne,fe,Tl(ne,Ce),ct);Nl(ne,Ce)}return null}function it(oe,ne,fe,Ce){for(var ct=null,Vt=null,st=ne,Mt=ne=0,Pt=null;st!==null&&Mt<fe.length;Mt++){st.index>Mt?(Pt=st,st=null):Pt=st.sibling;var kt=xe(oe,st,fe[Mt],Ce);if(kt===null){st===null&&(st=Pt);break}t&&st&&kt.alternate===null&&n(oe,st),ne=d(kt,ne,Mt),Vt===null?ct=kt:Vt.sibling=kt,Vt=kt,st=Pt}if(Mt===fe.length)return a(oe,st),zt&&ua(oe,Mt),ct;if(st===null){for(;Mt<fe.length;Mt++)st=De(oe,fe[Mt],Ce),st!==null&&(ne=d(st,ne,Mt),Vt===null?ct=st:Vt.sibling=st,Vt=st);return zt&&ua(oe,Mt),ct}for(st=o(st);Mt<fe.length;Mt++)Pt=ve(st,oe,Mt,fe[Mt],Ce),Pt!==null&&(t&&Pt.alternate!==null&&st.delete(Pt.key===null?Mt:Pt.key),ne=d(Pt,ne,Mt),Vt===null?ct=Pt:Vt.sibling=Pt,Vt=Pt);return t&&st.forEach(function(fs){return n(oe,fs)}),zt&&ua(oe,Mt),ct}function dt(oe,ne,fe,Ce){if(fe==null)throw Error(s(151));for(var ct=null,Vt=null,st=ne,Mt=ne=0,Pt=null,kt=fe.next();st!==null&&!kt.done;Mt++,kt=fe.next()){st.index>Mt?(Pt=st,st=null):Pt=st.sibling;var fs=xe(oe,st,kt.value,Ce);if(fs===null){st===null&&(st=Pt);break}t&&st&&fs.alternate===null&&n(oe,st),ne=d(fs,ne,Mt),Vt===null?ct=fs:Vt.sibling=fs,Vt=fs,st=Pt}if(kt.done)return a(oe,st),zt&&ua(oe,Mt),ct;if(st===null){for(;!kt.done;Mt++,kt=fe.next())kt=De(oe,kt.value,Ce),kt!==null&&(ne=d(kt,ne,Mt),Vt===null?ct=kt:Vt.sibling=kt,Vt=kt);return zt&&ua(oe,Mt),ct}for(st=o(st);!kt.done;Mt++,kt=fe.next())kt=ve(st,oe,Mt,kt.value,Ce),kt!==null&&(t&&kt.alternate!==null&&st.delete(kt.key===null?Mt:kt.key),ne=d(kt,ne,Mt),Vt===null?ct=kt:Vt.sibling=kt,Vt=kt);return t&&st.forEach(function(yS){return n(oe,yS)}),zt&&ua(oe,Mt),ct}function an(oe,ne,fe,Ce){if(typeof fe=="object"&&fe!==null&&fe.type===U&&fe.key===null&&(fe=fe.props.children),typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case M:e:{for(var ct=fe.key;ne!==null;){if(ne.key===ct){if(ct=fe.type,ct===U){if(ne.tag===7){a(oe,ne.sibling),Ce=u(ne,fe.props.children),Ce.return=oe,oe=Ce;break e}}else if(ne.elementType===ct||typeof ct=="object"&&ct!==null&&ct.$$typeof===N&&Ps(ct)===ne.type){a(oe,ne.sibling),Ce=u(ne,fe.props),vo(Ce,fe),Ce.return=oe,oe=Ce;break e}a(oe,ne);break}else n(oe,ne);ne=ne.sibling}fe.type===U?(Ce=Ns(fe.props.children,oe.mode,Ce,fe.key),Ce.return=oe,oe=Ce):(Ce=bl(fe.type,fe.key,fe.props,null,oe.mode,Ce),vo(Ce,fe),Ce.return=oe,oe=Ce)}return v(oe);case E:e:{for(ct=fe.key;ne!==null;){if(ne.key===ct)if(ne.tag===4&&ne.stateNode.containerInfo===fe.containerInfo&&ne.stateNode.implementation===fe.implementation){a(oe,ne.sibling),Ce=u(ne,fe.children||[]),Ce.return=oe,oe=Ce;break e}else{a(oe,ne);break}else n(oe,ne);ne=ne.sibling}Ce=Fu(fe,oe.mode,Ce),Ce.return=oe,oe=Ce}return v(oe);case N:return fe=Ps(fe),an(oe,ne,fe,Ce)}if(q(fe))return it(oe,ne,fe,Ce);if(te(fe)){if(ct=te(fe),typeof ct!="function")throw Error(s(150));return fe=ct.call(fe),dt(oe,ne,fe,Ce)}if(typeof fe.then=="function")return an(oe,ne,wl(fe),Ce);if(fe.$$typeof===G)return an(oe,ne,Tl(oe,fe),Ce);Nl(oe,fe)}return typeof fe=="string"&&fe!==""||typeof fe=="number"||typeof fe=="bigint"?(fe=""+fe,ne!==null&&ne.tag===6?(a(oe,ne.sibling),Ce=u(ne,fe),Ce.return=oe,oe=Ce):(a(oe,ne),Ce=Pu(fe,oe.mode,Ce),Ce.return=oe,oe=Ce),v(oe)):a(oe,ne)}return function(oe,ne,fe,Ce){try{_o=0;var ct=an(oe,ne,fe,Ce);return mr=null,ct}catch(st){if(st===pr||st===Rl)throw st;var Vt=di(29,st,null,oe.mode);return Vt.lanes=Ce,Vt.return=oe,Vt}finally{}}}var Is=hm(!0),pm=hm(!1),Ya=!1;function Yu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Za(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ka(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Wt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Sl(t),Qp(t,null,a),n}return yl(t,o,n,a),Sl(t)}function yo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,yt(t,a)}}function Ku(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Qu=!1;function So(){if(Qu){var t=hr;if(t!==null)throw t}}function bo(t,n,a,o){Qu=!1;var u=t.updateQueue;Ya=!1;var d=u.firstBaseUpdate,v=u.lastBaseUpdate,P=u.shared.pending;if(P!==null){u.shared.pending=null;var Q=P,de=Q.next;Q.next=null,v===null?d=de:v.next=de,v=Q;var Te=t.alternate;Te!==null&&(Te=Te.updateQueue,P=Te.lastBaseUpdate,P!==v&&(P===null?Te.firstBaseUpdate=de:P.next=de,Te.lastBaseUpdate=Q))}if(d!==null){var De=u.baseState;v=0,Te=de=Q=null,P=d;do{var xe=P.lane&-536870913,ve=xe!==P.lane;if(ve?(Ot&xe)===xe:(o&xe)===xe){xe!==0&&xe===dr&&(Qu=!0),Te!==null&&(Te=Te.next={lane:0,tag:P.tag,payload:P.payload,callback:null,next:null});e:{var it=t,dt=P;xe=n;var an=a;switch(dt.tag){case 1:if(it=dt.payload,typeof it=="function"){De=it.call(an,De,xe);break e}De=it;break e;case 3:it.flags=it.flags&-65537|128;case 0:if(it=dt.payload,xe=typeof it=="function"?it.call(an,De,xe):it,xe==null)break e;De=_({},De,xe);break e;case 2:Ya=!0}}xe=P.callback,xe!==null&&(t.flags|=64,ve&&(t.flags|=8192),ve=u.callbacks,ve===null?u.callbacks=[xe]:ve.push(xe))}else ve={lane:xe,tag:P.tag,payload:P.payload,callback:P.callback,next:null},Te===null?(de=Te=ve,Q=De):Te=Te.next=ve,v|=xe;if(P=P.next,P===null){if(P=u.shared.pending,P===null)break;ve=P,P=ve.next,ve.next=null,u.lastBaseUpdate=ve,u.shared.pending=null}}while(!0);Te===null&&(Q=De),u.baseState=Q,u.firstBaseUpdate=de,u.lastBaseUpdate=Te,d===null&&(u.shared.lanes=0),ts|=v,t.lanes=v,t.memoizedState=De}}function mm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function gm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)mm(a[t],n)}var gr=T(null),Dl=T(0);function xm(t,n){t=Sa,V(Dl,t),V(gr,n),Sa=t|n.baseLanes}function Ju(){V(Dl,Sa),V(gr,gr.current)}function $u(){Sa=Dl.current,S(gr),S(Dl)}var hi=T(null),Ri=null;function Qa(t){var n=t.alternate;V(xn,xn.current&1),V(hi,t),Ri===null&&(n===null||gr.current!==null||n.memoizedState!==null)&&(Ri=t)}function ef(t){V(xn,xn.current),V(hi,t),Ri===null&&(Ri=t)}function _m(t){t.tag===22?(V(xn,xn.current),V(hi,t),Ri===null&&(Ri=t)):Ja()}function Ja(){V(xn,xn.current),V(hi,hi.current)}function pi(t){S(hi),Ri===t&&(Ri=null),S(xn)}var xn=T(0);function Ul(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||od(a)||ld(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ha=0,bt=null,tn=null,Mn=null,Ll=!1,xr=!1,zs=!1,Ol=0,Mo=0,_r=null,uy=0;function pn(){throw Error(s(321))}function tf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!fi(t[a],n[a]))return!1;return!0}function nf(t,n,a,o,u,d){return ha=d,bt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,H.H=t===null||t.memoizedState===null?t0:_f,zs=!1,d=a(o,u),zs=!1,xr&&(d=ym(n,a,o,u)),vm(t),d}function vm(t){H.H=Ao;var n=tn!==null&&tn.next!==null;if(ha=0,Mn=tn=bt=null,Ll=!1,Mo=0,_r=null,n)throw Error(s(300));t===null||En||(t=t.dependencies,t!==null&&El(t)&&(En=!0))}function ym(t,n,a,o){bt=t;var u=0;do{if(xr&&(_r=null),Mo=0,xr=!1,25<=u)throw Error(s(301));if(u+=1,Mn=tn=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}H.H=n0,d=n(a,o)}while(xr);return d}function fy(){var t=H.H,n=t.useState()[0];return n=typeof n.then=="function"?Eo(n):n,t=t.useState()[0],(tn!==null?tn.memoizedState:null)!==t&&(bt.flags|=1024),n}function af(){var t=Ol!==0;return Ol=0,t}function sf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function rf(t){if(Ll){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Ll=!1}ha=0,Mn=tn=bt=null,xr=!1,Mo=Ol=0,_r=null}function Kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mn===null?bt.memoizedState=Mn=t:Mn=Mn.next=t,Mn}function _n(){if(tn===null){var t=bt.alternate;t=t!==null?t.memoizedState:null}else t=tn.next;var n=Mn===null?bt.memoizedState:Mn.next;if(n!==null)Mn=n,tn=t;else{if(t===null)throw bt.alternate===null?Error(s(467)):Error(s(310));tn=t,t={memoizedState:tn.memoizedState,baseState:tn.baseState,baseQueue:tn.baseQueue,queue:tn.queue,next:null},Mn===null?bt.memoizedState=Mn=t:Mn=Mn.next=t}return Mn}function Pl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Eo(t){var n=Mo;return Mo+=1,_r===null&&(_r=[]),t=um(_r,t,n),n=bt,(Mn===null?n.memoizedState:Mn.next)===null&&(n=n.alternate,H.H=n===null||n.memoizedState===null?t0:_f),t}function Fl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Eo(t);if(t.$$typeof===G)return zn(t)}throw Error(s(438,String(t)))}function of(t){var n=null,a=bt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=bt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Pl(),bt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=J;return n.index++,a}function pa(t,n){return typeof n=="function"?n(t):n}function Il(t){var n=_n();return lf(n,tn,t)}function lf(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var v=u.next;u.next=d.next,d.next=v}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var P=v=null,Q=null,de=n,Te=!1;do{var De=de.lane&-536870913;if(De!==de.lane?(Ot&De)===De:(ha&De)===De){var xe=de.revertLane;if(xe===0)Q!==null&&(Q=Q.next={lane:0,revertLane:0,gesture:null,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null}),De===dr&&(Te=!0);else if((ha&xe)===xe){de=de.next,xe===dr&&(Te=!0);continue}else De={lane:0,revertLane:de.revertLane,gesture:null,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null},Q===null?(P=Q=De,v=d):Q=Q.next=De,bt.lanes|=xe,ts|=xe;De=de.action,zs&&a(d,De),d=de.hasEagerState?de.eagerState:a(d,De)}else xe={lane:De,revertLane:de.revertLane,gesture:de.gesture,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null},Q===null?(P=Q=xe,v=d):Q=Q.next=xe,bt.lanes|=De,ts|=De;de=de.next}while(de!==null&&de!==n);if(Q===null?v=d:Q.next=P,!fi(d,t.memoizedState)&&(En=!0,Te&&(a=hr,a!==null)))throw a;t.memoizedState=d,t.baseState=v,t.baseQueue=Q,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function cf(t){var n=_n(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do d=t(d,v.action),v=v.next;while(v!==u);fi(d,n.memoizedState)||(En=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function Sm(t,n,a){var o=bt,u=_n(),d=zt;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!fi((tn||u).memoizedState,a);if(v&&(u.memoizedState=a,En=!0),u=u.queue,df(Em.bind(null,o,u,t),[t]),u.getSnapshot!==n||v||Mn!==null&&Mn.memoizedState.tag&1){if(o.flags|=2048,vr(9,{destroy:void 0},Mm.bind(null,o,u,a,n),null),on===null)throw Error(s(349));d||(ha&127)!==0||bm(o,n,a)}return a}function bm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=bt.updateQueue,n===null?(n=Pl(),bt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Mm(t,n,a,o){n.value=a,n.getSnapshot=o,Tm(n)&&Am(t)}function Em(t,n,a){return a(function(){Tm(n)&&Am(t)})}function Tm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!fi(t,a)}catch{return!0}}function Am(t){var n=ws(t,2);n!==null&&si(n,t,2)}function uf(t){var n=Kn();if(typeof t=="function"){var a=t;if(t=a(),zs){Ve(!0);try{a()}finally{Ve(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:t},n}function Rm(t,n,a,o){return t.baseState=a,lf(t,tn,typeof o=="function"?o:pa)}function dy(t,n,a,o,u){if(Hl(t))throw Error(s(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};H.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Cm(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Cm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=H.T,v={};H.T=v;try{var P=a(u,o),Q=H.S;Q!==null&&Q(v,P),wm(t,n,P)}catch(de){ff(t,n,de)}finally{d!==null&&v.types!==null&&(d.types=v.types),H.T=d}}else try{d=a(u,o),wm(t,n,d)}catch(de){ff(t,n,de)}}function wm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Nm(t,n,o)},function(o){return ff(t,n,o)}):Nm(t,n,a)}function Nm(t,n,a){n.status="fulfilled",n.value=a,Dm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Cm(t,a)))}function ff(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Dm(n),n=n.next;while(n!==o)}t.action=null}function Dm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Um(t,n){return n}function Lm(t,n){if(zt){var a=on.formState;if(a!==null){e:{var o=bt;if(zt){if(cn){t:{for(var u=cn,d=Ai;u.nodeType!==8;){if(!d){u=null;break t}if(u=Ci(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){cn=Ci(u.nextSibling),o=u.data==="F!";break e}}Xa(o)}o=!1}o&&(n=a[0])}}return a=Kn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Um,lastRenderedState:n},a.queue=o,a=Jm.bind(null,bt,o),o.dispatch=a,o=uf(!1),d=xf.bind(null,bt,!1,o.queue),o=Kn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=dy.bind(null,bt,u,d,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Om(t){var n=_n();return Pm(n,tn,t)}function Pm(t,n,a){if(n=lf(t,n,Um)[0],t=Il(pa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Eo(n)}catch(v){throw v===pr?Rl:v}else o=n;n=_n();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(bt.flags|=2048,vr(9,{destroy:void 0},hy.bind(null,u,a),null)),[o,d,t]}function hy(t,n){t.action=n}function Fm(t){var n=_n(),a=tn;if(a!==null)return Pm(n,a,t);_n(),n=n.memoizedState,a=_n();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function vr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=bt.updateQueue,n===null&&(n=Pl(),bt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Im(){return _n().memoizedState}function zl(t,n,a,o){var u=Kn();bt.flags|=t,u.memoizedState=vr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Bl(t,n,a,o){var u=_n();o=o===void 0?null:o;var d=u.memoizedState.inst;tn!==null&&o!==null&&tf(o,tn.memoizedState.deps)?u.memoizedState=vr(n,d,a,o):(bt.flags|=t,u.memoizedState=vr(1|n,d,a,o))}function zm(t,n){zl(8390656,8,t,n)}function df(t,n){Bl(2048,8,t,n)}function py(t){bt.flags|=4;var n=bt.updateQueue;if(n===null)n=Pl(),bt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Bm(t){var n=_n().memoizedState;return py({ref:n,nextImpl:t}),function(){if((Wt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Hm(t,n){return Bl(4,2,t,n)}function Gm(t,n){return Bl(4,4,t,n)}function Vm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function km(t,n,a){a=a!=null?a.concat([t]):null,Bl(4,4,Vm.bind(null,n,t),a)}function hf(){}function jm(t,n){var a=_n();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&tf(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Wm(t,n){var a=_n();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&tf(n,o[1]))return o[0];if(o=t(),zs){Ve(!0);try{t()}finally{Ve(!1)}}return a.memoizedState=[o,n],o}function pf(t,n,a){return a===void 0||(ha&1073741824)!==0&&(Ot&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=X0(),bt.lanes|=t,ts|=t,a)}function Xm(t,n,a,o){return fi(a,n)?a:gr.current!==null?(t=pf(t,a,o),fi(t,n)||(En=!0),t):(ha&42)===0||(ha&1073741824)!==0&&(Ot&261930)===0?(En=!0,t.memoizedState=a):(t=X0(),bt.lanes|=t,ts|=t,n)}function qm(t,n,a,o,u){var d=D.p;D.p=d!==0&&8>d?d:8;var v=H.T,P={};H.T=P,xf(t,!1,n,a);try{var Q=u(),de=H.S;if(de!==null&&de(P,Q),Q!==null&&typeof Q=="object"&&typeof Q.then=="function"){var Te=cy(Q,o);To(t,n,Te,xi(t))}else To(t,n,o,xi(t))}catch(De){To(t,n,{then:function(){},status:"rejected",reason:De},xi())}finally{D.p=d,v!==null&&P.types!==null&&(v.types=P.types),H.T=v}}function my(){}function mf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=Ym(t).queue;qm(t,u,n,w,a===null?my:function(){return Zm(t),a(o)})}function Ym(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:w,baseState:w,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:w},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Zm(t){var n=Ym(t);n.next===null&&(n=t.alternate.memoizedState),To(t,n.next.queue,{},xi())}function gf(){return zn(Vo)}function Km(){return _n().memoizedState}function Qm(){return _n().memoizedState}function gy(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=xi();t=Za(a);var o=Ka(n,t,a);o!==null&&(si(o,n,a),yo(o,n,a)),n={cache:ju()},t.payload=n;return}n=n.return}}function xy(t,n,a){var o=xi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Hl(t)?$m(n,a):(a=Lu(t,n,a,o),a!==null&&(si(a,t,o),e0(a,n,o)))}function Jm(t,n,a){var o=xi();To(t,n,a,o)}function To(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Hl(t))$m(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var v=n.lastRenderedState,P=d(v,a);if(u.hasEagerState=!0,u.eagerState=P,fi(P,v))return yl(t,n,u,0),on===null&&vl(),!1}catch{}finally{}if(a=Lu(t,n,u,o),a!==null)return si(a,t,o),e0(a,n,o),!0}return!1}function xf(t,n,a,o){if(o={lane:2,revertLane:Zf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Hl(t)){if(n)throw Error(s(479))}else n=Lu(t,a,o,2),n!==null&&si(n,t,2)}function Hl(t){var n=t.alternate;return t===bt||n!==null&&n===bt}function $m(t,n){xr=Ll=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function e0(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,yt(t,a)}}var Ao={readContext:zn,use:Fl,useCallback:pn,useContext:pn,useEffect:pn,useImperativeHandle:pn,useLayoutEffect:pn,useInsertionEffect:pn,useMemo:pn,useReducer:pn,useRef:pn,useState:pn,useDebugValue:pn,useDeferredValue:pn,useTransition:pn,useSyncExternalStore:pn,useId:pn,useHostTransitionStatus:pn,useFormState:pn,useActionState:pn,useOptimistic:pn,useMemoCache:pn,useCacheRefresh:pn};Ao.useEffectEvent=pn;var t0={readContext:zn,use:Fl,useCallback:function(t,n){return Kn().memoizedState=[t,n===void 0?null:n],t},useContext:zn,useEffect:zm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,zl(4194308,4,Vm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return zl(4194308,4,t,n)},useInsertionEffect:function(t,n){zl(4,2,t,n)},useMemo:function(t,n){var a=Kn();n=n===void 0?null:n;var o=t();if(zs){Ve(!0);try{t()}finally{Ve(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Kn();if(a!==void 0){var u=a(n);if(zs){Ve(!0);try{a(n)}finally{Ve(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=xy.bind(null,bt,t),[o.memoizedState,t]},useRef:function(t){var n=Kn();return t={current:t},n.memoizedState=t},useState:function(t){t=uf(t);var n=t.queue,a=Jm.bind(null,bt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:hf,useDeferredValue:function(t,n){var a=Kn();return pf(a,t,n)},useTransition:function(){var t=uf(!1);return t=qm.bind(null,bt,t.queue,!0,!1),Kn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=bt,u=Kn();if(zt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),on===null)throw Error(s(349));(Ot&127)!==0||bm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,zm(Em.bind(null,o,d,t),[t]),o.flags|=2048,vr(9,{destroy:void 0},Mm.bind(null,o,d,a,n),null),a},useId:function(){var t=Kn(),n=on.identifierPrefix;if(zt){var a=Yi,o=qi;a=(o&~(1<<32-ke(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ol++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=uy++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:gf,useFormState:Lm,useActionState:Lm,useOptimistic:function(t){var n=Kn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=xf.bind(null,bt,!0,a),a.dispatch=n,[t,n]},useMemoCache:of,useCacheRefresh:function(){return Kn().memoizedState=gy.bind(null,bt)},useEffectEvent:function(t){var n=Kn(),a={impl:t};return n.memoizedState=a,function(){if((Wt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},_f={readContext:zn,use:Fl,useCallback:jm,useContext:zn,useEffect:df,useImperativeHandle:km,useInsertionEffect:Hm,useLayoutEffect:Gm,useMemo:Wm,useReducer:Il,useRef:Im,useState:function(){return Il(pa)},useDebugValue:hf,useDeferredValue:function(t,n){var a=_n();return Xm(a,tn.memoizedState,t,n)},useTransition:function(){var t=Il(pa)[0],n=_n().memoizedState;return[typeof t=="boolean"?t:Eo(t),n]},useSyncExternalStore:Sm,useId:Km,useHostTransitionStatus:gf,useFormState:Om,useActionState:Om,useOptimistic:function(t,n){var a=_n();return Rm(a,tn,t,n)},useMemoCache:of,useCacheRefresh:Qm};_f.useEffectEvent=Bm;var n0={readContext:zn,use:Fl,useCallback:jm,useContext:zn,useEffect:df,useImperativeHandle:km,useInsertionEffect:Hm,useLayoutEffect:Gm,useMemo:Wm,useReducer:cf,useRef:Im,useState:function(){return cf(pa)},useDebugValue:hf,useDeferredValue:function(t,n){var a=_n();return tn===null?pf(a,t,n):Xm(a,tn.memoizedState,t,n)},useTransition:function(){var t=cf(pa)[0],n=_n().memoizedState;return[typeof t=="boolean"?t:Eo(t),n]},useSyncExternalStore:Sm,useId:Km,useHostTransitionStatus:gf,useFormState:Fm,useActionState:Fm,useOptimistic:function(t,n){var a=_n();return tn!==null?Rm(a,tn,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:of,useCacheRefresh:Qm};n0.useEffectEvent=Bm;function vf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var yf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=xi(),u=Za(o);u.payload=n,a!=null&&(u.callback=a),n=Ka(t,u,o),n!==null&&(si(n,t,o),yo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=xi(),u=Za(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ka(t,u,o),n!==null&&(si(n,t,o),yo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=xi(),o=Za(a);o.tag=2,n!=null&&(o.callback=n),n=Ka(t,o,a),n!==null&&(si(n,t,a),yo(n,t,a))}};function i0(t,n,a,o,u,d,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,v):n.prototype&&n.prototype.isPureReactComponent?!fo(a,o)||!fo(u,d):!0}function a0(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&yf.enqueueReplaceState(n,n.state,null)}function Bs(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function s0(t){_l(t)}function r0(t){console.error(t)}function o0(t){_l(t)}function Gl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function l0(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Sf(t,n,a){return a=Za(a),a.tag=3,a.payload={element:null},a.callback=function(){Gl(t,n)},a}function c0(t){return t=Za(t),t.tag=3,t}function u0(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){l0(n,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){l0(n,a,o),typeof u!="function"&&(ns===null?ns=new Set([this]):ns.add(this));var P=o.stack;this.componentDidCatch(o.value,{componentStack:P!==null?P:""})})}function _y(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&fr(n,a,u,!0),a=hi.current,a!==null){switch(a.tag){case 31:case 13:return Ri===null?$l():a.alternate===null&&mn===0&&(mn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Cl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Xf(t,o,u)),!1;case 22:return a.flags|=65536,o===Cl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Xf(t,o,u)),!1}throw Error(s(435,a.tag))}return Xf(t,o,u),$l(),!1}if(zt)return n=hi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Bu&&(t=Error(s(422),{cause:o}),mo(Mi(t,a)))):(o!==Bu&&(n=Error(s(423),{cause:o}),mo(Mi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=Mi(o,a),u=Sf(t.stateNode,o,u),Ku(t,u),mn!==4&&(mn=2)),!1;var d=Error(s(520),{cause:o});if(d=Mi(d,a),Oo===null?Oo=[d]:Oo.push(d),mn!==4&&(mn=2),n===null)return!0;o=Mi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Sf(a.stateNode,o,t),Ku(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ns===null||!ns.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=c0(u),u0(u,t,a,o),Ku(a,u),!1}a=a.return}while(a!==null);return!1}var bf=Error(s(461)),En=!1;function Bn(t,n,a,o){n.child=t===null?pm(n,null,a,o):Is(n,t.child,a,o)}function f0(t,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var v={};for(var P in o)P!=="ref"&&(v[P]=o[P])}else v=o;return Ls(n),o=nf(t,n,a,v,d,u),P=af(),t!==null&&!En?(sf(t,n,u),ma(t,n,u)):(zt&&P&&Iu(n),n.flags|=1,Bn(t,n,o,u),n.child)}function d0(t,n,a,o,u){if(t===null){var d=a.type;return typeof d=="function"&&!Ou(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,h0(t,n,d,o,u)):(t=bl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!Nf(t,u)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:fo,a(v,o)&&t.ref===n.ref)return ma(t,n,u)}return n.flags|=1,t=ca(d,o),t.ref=n.ref,t.return=n,n.child=t}function h0(t,n,a,o,u){if(t!==null){var d=t.memoizedProps;if(fo(d,o)&&t.ref===n.ref)if(En=!1,n.pendingProps=o=d,Nf(t,u))(t.flags&131072)!==0&&(En=!0);else return n.lanes=t.lanes,ma(t,n,u)}return Mf(t,n,a,o,u)}function p0(t,n,a,o){var u=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return m0(t,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Al(n,d!==null?d.cachePool:null),d!==null?xm(n,d):Ju(),_m(n);else return o=n.lanes=536870912,m0(t,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(Al(n,d.cachePool),xm(n,d),Ja(),n.memoizedState=null):(t!==null&&Al(n,null),Ju(),Ja());return Bn(t,n,u,a),n.child}function Ro(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function m0(t,n,a,o,u){var d=Xu();return d=d===null?null:{parent:bn._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},t!==null&&Al(n,null),Ju(),_m(n),t!==null&&fr(t,n,o,!0),n.childLanes=u,null}function Vl(t,n){return n=jl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function g0(t,n,a){return Is(n,t.child,null,a),t=Vl(n,n.pendingProps),t.flags|=2,pi(n),n.memoizedState=null,t}function vy(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(zt){if(o.mode==="hidden")return t=Vl(n,o),n.lanes=536870912,Ro(null,t);if(ef(n),(t=cn)?(t=Cg(t,Ai),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ja!==null?{id:qi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},a=$p(t),a.return=n,n.child=a,In=n,cn=null)):t=null,t===null)throw Xa(n);return n.lanes=536870912,null}return Vl(n,o)}var d=t.memoizedState;if(d!==null){var v=d.dehydrated;if(ef(n),u)if(n.flags&256)n.flags&=-257,n=g0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(En||fr(t,n,a,!1),u=(a&t.childLanes)!==0,En||u){if(o=on,o!==null&&(v=It(o,a),v!==0&&v!==d.retryLane))throw d.retryLane=v,ws(t,v),si(o,t,v),bf;$l(),n=g0(t,n,a)}else t=d.treeContext,cn=Ci(v.nextSibling),In=n,zt=!0,Wa=null,Ai=!1,t!==null&&nm(n,t),n=Vl(n,o),n.flags|=4096;return n}return t=ca(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function kl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Mf(t,n,a,o,u){return Ls(n),a=nf(t,n,a,o,void 0,u),o=af(),t!==null&&!En?(sf(t,n,u),ma(t,n,u)):(zt&&o&&Iu(n),n.flags|=1,Bn(t,n,a,u),n.child)}function x0(t,n,a,o,u,d){return Ls(n),n.updateQueue=null,a=ym(n,o,a,u),vm(t),o=af(),t!==null&&!En?(sf(t,n,d),ma(t,n,d)):(zt&&o&&Iu(n),n.flags|=1,Bn(t,n,a,d),n.child)}function _0(t,n,a,o,u){if(Ls(n),n.stateNode===null){var d=or,v=a.contextType;typeof v=="object"&&v!==null&&(d=zn(v)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=yf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Yu(n),v=a.contextType,d.context=typeof v=="object"&&v!==null?zn(v):or,d.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(vf(n,a,v,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&yf.enqueueReplaceState(d,d.state,null),bo(n,o,d,u),So(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var P=n.memoizedProps,Q=Bs(a,P);d.props=Q;var de=d.context,Te=a.contextType;v=or,typeof Te=="object"&&Te!==null&&(v=zn(Te));var De=a.getDerivedStateFromProps;Te=typeof De=="function"||typeof d.getSnapshotBeforeUpdate=="function",P=n.pendingProps!==P,Te||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(P||de!==v)&&a0(n,d,o,v),Ya=!1;var xe=n.memoizedState;d.state=xe,bo(n,o,d,u),So(),de=n.memoizedState,P||xe!==de||Ya?(typeof De=="function"&&(vf(n,a,De,o),de=n.memoizedState),(Q=Ya||i0(n,a,Q,o,xe,de,v))?(Te||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=de),d.props=o,d.state=de,d.context=v,o=Q):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Zu(t,n),v=n.memoizedProps,Te=Bs(a,v),d.props=Te,De=n.pendingProps,xe=d.context,de=a.contextType,Q=or,typeof de=="object"&&de!==null&&(Q=zn(de)),P=a.getDerivedStateFromProps,(de=typeof P=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==De||xe!==Q)&&a0(n,d,o,Q),Ya=!1,xe=n.memoizedState,d.state=xe,bo(n,o,d,u),So();var ve=n.memoizedState;v!==De||xe!==ve||Ya||t!==null&&t.dependencies!==null&&El(t.dependencies)?(typeof P=="function"&&(vf(n,a,P,o),ve=n.memoizedState),(Te=Ya||i0(n,a,Te,o,xe,ve,Q)||t!==null&&t.dependencies!==null&&El(t.dependencies))?(de||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ve,Q),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ve,Q)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===t.memoizedProps&&xe===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&xe===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ve),d.props=o,d.state=ve,d.context=Q,o=Te):(typeof d.componentDidUpdate!="function"||v===t.memoizedProps&&xe===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&xe===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,kl(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=Is(n,t.child,null,u),n.child=Is(n,null,a,u)):Bn(t,n,a,u),n.memoizedState=d.state,t=n.child):t=ma(t,n,u),t}function v0(t,n,a,o){return Ds(),n.flags|=256,Bn(t,n,a,o),n.child}var Ef={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Tf(t){return{baseLanes:t,cachePool:lm()}}function Af(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=gi),t}function y0(t,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,v;if((v=d)||(v=t!==null&&t.memoizedState===null?!1:(xn.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,t===null){if(zt){if(u?Qa(n):Ja(),(t=cn)?(t=Cg(t,Ai),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ja!==null?{id:qi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},a=$p(t),a.return=n,n.child=a,In=n,cn=null)):t=null,t===null)throw Xa(n);return ld(t)?n.lanes=32:n.lanes=536870912,null}var P=o.children;return o=o.fallback,u?(Ja(),u=n.mode,P=jl({mode:"hidden",children:P},u),o=Ns(o,u,a,null),P.return=n,o.return=n,P.sibling=o,n.child=P,o=n.child,o.memoizedState=Tf(a),o.childLanes=Af(t,v,a),n.memoizedState=Ef,Ro(null,o)):(Qa(n),Rf(n,P))}var Q=t.memoizedState;if(Q!==null&&(P=Q.dehydrated,P!==null)){if(d)n.flags&256?(Qa(n),n.flags&=-257,n=Cf(t,n,a)):n.memoizedState!==null?(Ja(),n.child=t.child,n.flags|=128,n=null):(Ja(),P=o.fallback,u=n.mode,o=jl({mode:"visible",children:o.children},u),P=Ns(P,u,a,null),P.flags|=2,o.return=n,P.return=n,o.sibling=P,n.child=o,Is(n,t.child,null,a),o=n.child,o.memoizedState=Tf(a),o.childLanes=Af(t,v,a),n.memoizedState=Ef,n=Ro(null,o));else if(Qa(n),ld(P)){if(v=P.nextSibling&&P.nextSibling.dataset,v)var de=v.dgst;v=de,o=Error(s(419)),o.stack="",o.digest=v,mo({value:o,source:null,stack:null}),n=Cf(t,n,a)}else if(En||fr(t,n,a,!1),v=(a&t.childLanes)!==0,En||v){if(v=on,v!==null&&(o=It(v,a),o!==0&&o!==Q.retryLane))throw Q.retryLane=o,ws(t,o),si(v,t,o),bf;od(P)||$l(),n=Cf(t,n,a)}else od(P)?(n.flags|=192,n.child=t.child,n=null):(t=Q.treeContext,cn=Ci(P.nextSibling),In=n,zt=!0,Wa=null,Ai=!1,t!==null&&nm(n,t),n=Rf(n,o.children),n.flags|=4096);return n}return u?(Ja(),P=o.fallback,u=n.mode,Q=t.child,de=Q.sibling,o=ca(Q,{mode:"hidden",children:o.children}),o.subtreeFlags=Q.subtreeFlags&65011712,de!==null?P=ca(de,P):(P=Ns(P,u,a,null),P.flags|=2),P.return=n,o.return=n,o.sibling=P,n.child=o,Ro(null,o),o=n.child,P=t.child.memoizedState,P===null?P=Tf(a):(u=P.cachePool,u!==null?(Q=bn._currentValue,u=u.parent!==Q?{parent:Q,pool:Q}:u):u=lm(),P={baseLanes:P.baseLanes|a,cachePool:u}),o.memoizedState=P,o.childLanes=Af(t,v,a),n.memoizedState=Ef,Ro(t.child,o)):(Qa(n),a=t.child,t=a.sibling,a=ca(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(v=n.deletions,v===null?(n.deletions=[t],n.flags|=16):v.push(t)),n.child=a,n.memoizedState=null,a)}function Rf(t,n){return n=jl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function jl(t,n){return t=di(22,t,null,n),t.lanes=0,t}function Cf(t,n,a){return Is(n,t.child,null,a),t=Rf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function S0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Vu(t.return,n,a)}function wf(t,n,a,o,u,d){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=o,v.tail=a,v.tailMode=u,v.treeForkCount=d)}function b0(t,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var v=xn.current,P=(v&2)!==0;if(P?(v=v&1|2,n.flags|=128):v&=1,V(xn,v),Bn(t,n,o,a),o=zt?po:0,!P&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&S0(t,a,n);else if(t.tag===19)S0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Ul(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),wf(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Ul(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}wf(n,!0,a,null,d,o);break;case"together":wf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ma(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ts|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(fr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=ca(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ca(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Nf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&El(t)))}function yy(t,n,a){switch(n.tag){case 3:ue(n,n.stateNode.containerInfo),qa(n,bn,t.memoizedState.cache),Ds();break;case 27:case 5:Se(n);break;case 4:ue(n,n.stateNode.containerInfo);break;case 10:qa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,ef(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Qa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?y0(t,n,a):(Qa(n),t=ma(t,n,a),t!==null?t.sibling:null);Qa(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(fr(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return b0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),V(xn,xn.current),o)break;return null;case 22:return n.lanes=0,p0(t,n,a,n.pendingProps);case 24:qa(n,bn,t.memoizedState.cache)}return ma(t,n,a)}function M0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)En=!0;else{if(!Nf(t,a)&&(n.flags&128)===0)return En=!1,yy(t,n,a);En=(t.flags&131072)!==0}else En=!1,zt&&(n.flags&1048576)!==0&&tm(n,po,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Ps(n.elementType),n.type=t,typeof t=="function")Ou(t)?(o=Bs(t,o),n.tag=1,n=_0(null,n,t,o,a)):(n.tag=0,n=Mf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===z){n.tag=11,n=f0(null,n,t,o,a);break e}else if(u===j){n.tag=14,n=d0(null,n,t,o,a);break e}}throw n=ae(t)||t,Error(s(306,n,""))}}return n;case 0:return Mf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Bs(o,n.pendingProps),_0(t,n,o,u,a);case 3:e:{if(ue(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Zu(t,n),bo(n,o,null,a);var v=n.memoizedState;if(o=v.cache,qa(n,bn,o),o!==d.cache&&ku(n,[bn],a,!0),So(),o=v.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=v0(t,n,o,a);break e}else if(o!==u){u=Mi(Error(s(424)),n),mo(u),n=v0(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(cn=Ci(t.firstChild),In=n,zt=!0,Wa=null,Ai=!0,a=pm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ds(),o===u){n=ma(t,n,a);break e}Bn(t,n,o,a)}n=n.child}return n;case 26:return kl(t,n),t===null?(a=Og(n.type,null,n.pendingProps,null))?n.memoizedState=a:zt||(a=n.type,t=n.pendingProps,o=rc(X.current).createElement(a),o[gn]=n,o[Fn]=t,Hn(o,a,t),Sn(o),n.stateNode=o):n.memoizedState=Og(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Se(n),t===null&&zt&&(o=n.stateNode=Dg(n.type,n.pendingProps,X.current),In=n,Ai=!0,u=cn,rs(n.type)?(cd=u,cn=Ci(o.firstChild)):cn=u),Bn(t,n,n.pendingProps.children,a),kl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&zt&&((u=o=cn)&&(o=Ky(o,n.type,n.pendingProps,Ai),o!==null?(n.stateNode=o,In=n,cn=Ci(o.firstChild),Ai=!1,u=!0):u=!1),u||Xa(n)),Se(n),u=n.type,d=n.pendingProps,v=t!==null?t.memoizedProps:null,o=d.children,ad(u,d)?o=null:v!==null&&ad(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=nf(t,n,fy,null,null,a),Vo._currentValue=u),kl(t,n),Bn(t,n,o,a),n.child;case 6:return t===null&&zt&&((t=a=cn)&&(a=Qy(a,n.pendingProps,Ai),a!==null?(n.stateNode=a,In=n,cn=null,t=!0):t=!1),t||Xa(n)),null;case 13:return y0(t,n,a);case 4:return ue(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Is(n,null,o,a):Bn(t,n,o,a),n.child;case 11:return f0(t,n,n.type,n.pendingProps,a);case 7:return Bn(t,n,n.pendingProps,a),n.child;case 8:return Bn(t,n,n.pendingProps.children,a),n.child;case 12:return Bn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,qa(n,n.type,o.value),Bn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Ls(n),u=zn(u),o=o(u),n.flags|=1,Bn(t,n,o,a),n.child;case 14:return d0(t,n,n.type,n.pendingProps,a);case 15:return h0(t,n,n.type,n.pendingProps,a);case 19:return b0(t,n,a);case 31:return vy(t,n,a);case 22:return p0(t,n,a,n.pendingProps);case 24:return Ls(n),o=zn(bn),t===null?(u=Xu(),u===null&&(u=on,d=ju(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},Yu(n),qa(n,bn,u)):((t.lanes&a)!==0&&(Zu(t,n),bo(n,null,null,a),So()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),qa(n,bn,o)):(o=d.cache,qa(n,bn,o),o!==u.cache&&ku(n,[bn],a,!0))),Bn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ga(t){t.flags|=4}function Df(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(K0())t.flags|=8192;else throw Fs=Cl,qu}else t.flags&=-16777217}function E0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Bg(n))if(K0())t.flags|=8192;else throw Fs=Cl,qu}function Wl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?me():536870912,t.lanes|=n,Mr|=n)}function Co(t,n){if(!zt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function un(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Sy(t,n,a){var o=n.pendingProps;switch(zu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return un(n),null;case 1:return un(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),da(bn),we(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ur(n)?ga(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Hu())),un(n),null;case 26:var u=n.type,d=n.memoizedState;return t===null?(ga(n),d!==null?(un(n),E0(n,d)):(un(n),Df(n,u,null,o,a))):d?d!==t.memoizedState?(ga(n),un(n),E0(n,d)):(un(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&ga(n),un(n),Df(n,u,t,o,a)),null;case 27:if(be(n),a=X.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ga(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return un(n),null}t=Y.current,ur(n)?im(n):(t=Dg(u,o,a),n.stateNode=t,ga(n))}return un(n),null;case 5:if(be(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ga(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return un(n),null}if(d=Y.current,ur(n))im(n);else{var v=rc(X.current);switch(d){case 1:d=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=v.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?v.createElement("select",{is:o.is}):v.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?v.createElement(u,{is:o.is}):v.createElement(u)}}d[gn]=n,d[Fn]=o;e:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)d.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break e;for(;v.sibling===null;){if(v.return===null||v.return===n)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=d;e:switch(Hn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ga(n)}}return un(n),Df(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ga(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=X.current,ur(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=In,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[gn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||yg(t.nodeValue,a)),t||Xa(n,!0)}else t=rc(t).createTextNode(o),t[gn]=n,n.stateNode=t}return un(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=ur(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[gn]=n}else Ds(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;un(n),t=!1}else a=Hu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(pi(n),n):(pi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return un(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=ur(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[gn]=n}else Ds(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;un(n),u=!1}else u=Hu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(pi(n),n):(pi(n),null)}return pi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Wl(n,n.updateQueue),un(n),null);case 4:return we(),t===null&&$f(n.stateNode.containerInfo),un(n),null;case 10:return da(n.type),un(n),null;case 19:if(S(xn),o=n.memoizedState,o===null)return un(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)Co(o,!1);else{if(mn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Ul(t),d!==null){for(n.flags|=128,Co(o,!1),t=d.updateQueue,n.updateQueue=t,Wl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Jp(a,t),a=a.sibling;return V(xn,xn.current&1|2),zt&&ua(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&Le()>Kl&&(n.flags|=128,u=!0,Co(o,!1),n.lanes=4194304)}else{if(!u)if(t=Ul(d),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Wl(n,t),Co(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!zt)return un(n),null}else 2*Le()-o.renderingStartTime>Kl&&a!==536870912&&(n.flags|=128,u=!0,Co(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Le(),t.sibling=null,a=xn.current,V(xn,u?a&1|2:a&1),zt&&ua(n,o.treeForkCount),t):(un(n),null);case 22:case 23:return pi(n),$u(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(un(n),n.subtreeFlags&6&&(n.flags|=8192)):un(n),a=n.updateQueue,a!==null&&Wl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&S(Os),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),da(bn),un(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function by(t,n){switch(zu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return da(bn),we(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return be(n),null;case 31:if(n.memoizedState!==null){if(pi(n),n.alternate===null)throw Error(s(340));Ds()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(pi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ds()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return S(xn),null;case 4:return we(),null;case 10:return da(n.type),null;case 22:case 23:return pi(n),$u(),t!==null&&S(Os),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return da(bn),null;case 25:return null;default:return null}}function T0(t,n){switch(zu(n),n.tag){case 3:da(bn),we();break;case 26:case 27:case 5:be(n);break;case 4:we();break;case 31:n.memoizedState!==null&&pi(n);break;case 13:pi(n);break;case 19:S(xn);break;case 10:da(n.type);break;case 22:case 23:pi(n),$u(),t!==null&&S(Os);break;case 24:da(bn)}}function wo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var d=a.create,v=a.inst;o=d(),v.destroy=o}a=a.next}while(a!==u)}}catch(P){Jt(n,n.return,P)}}function $a(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var v=o.inst,P=v.destroy;if(P!==void 0){v.destroy=void 0,u=n;var Q=a,de=P;try{de()}catch(Te){Jt(u,Q,Te)}}}o=o.next}while(o!==d)}}catch(Te){Jt(n,n.return,Te)}}function A0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{gm(n,a)}catch(o){Jt(t,t.return,o)}}}function R0(t,n,a){a.props=Bs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Jt(t,n,o)}}function No(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Jt(t,n,u)}}function Zi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Jt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Jt(t,n,u)}else a.current=null}function C0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Jt(t,t.return,u)}}function Uf(t,n,a){try{var o=t.stateNode;jy(o,t.type,a,n),o[Fn]=n}catch(u){Jt(t,t.return,u)}}function w0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&rs(t.type)||t.tag===4}function Lf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||w0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&rs(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Of(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=oa));else if(o!==4&&(o===27&&rs(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Of(t,n,a),t=t.sibling;t!==null;)Of(t,n,a),t=t.sibling}function Xl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&rs(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Xl(t,n,a),t=t.sibling;t!==null;)Xl(t,n,a),t=t.sibling}function N0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Hn(n,o,a),n[gn]=t,n[Fn]=a}catch(d){Jt(t,t.return,d)}}var xa=!1,Tn=!1,Pf=!1,D0=typeof WeakSet=="function"?WeakSet:Set,On=null;function My(t,n){if(t=t.containerInfo,nd=hc,t=kp(t),Ru(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var v=0,P=-1,Q=-1,de=0,Te=0,De=t,xe=null;t:for(;;){for(var ve;De!==a||u!==0&&De.nodeType!==3||(P=v+u),De!==d||o!==0&&De.nodeType!==3||(Q=v+o),De.nodeType===3&&(v+=De.nodeValue.length),(ve=De.firstChild)!==null;)xe=De,De=ve;for(;;){if(De===t)break t;if(xe===a&&++de===u&&(P=v),xe===d&&++Te===o&&(Q=v),(ve=De.nextSibling)!==null)break;De=xe,xe=De.parentNode}De=ve}a=P===-1||Q===-1?null:{start:P,end:Q}}else a=null}a=a||{start:0,end:0}}else a=null;for(id={focusedElem:t,selectionRange:a},hc=!1,On=n;On!==null;)if(n=On,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,On=t;else for(;On!==null;){switch(n=On,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var it=Bs(a.type,u);t=o.getSnapshotBeforeUpdate(it,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(dt){Jt(a,a.return,dt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)rd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":rd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,On=t;break}On=n.return}}function U0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:va(t,a),o&4&&wo(5,a);break;case 1:if(va(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(v){Jt(a,a.return,v)}else{var u=Bs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(v){Jt(a,a.return,v)}}o&64&&A0(a),o&512&&No(a,a.return);break;case 3:if(va(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{gm(t,n)}catch(v){Jt(a,a.return,v)}}break;case 27:n===null&&o&4&&N0(a);case 26:case 5:va(t,a),n===null&&o&4&&C0(a),o&512&&No(a,a.return);break;case 12:va(t,a);break;case 31:va(t,a),o&4&&P0(t,a);break;case 13:va(t,a),o&4&&F0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Uy.bind(null,a),Jy(t,a))));break;case 22:if(o=a.memoizedState!==null||xa,!o){n=n!==null&&n.memoizedState!==null||Tn,u=xa;var d=Tn;xa=o,(Tn=n)&&!d?ya(t,a,(a.subtreeFlags&8772)!==0):va(t,a),xa=u,Tn=d}break;case 30:break;default:va(t,a)}}function L0(t){var n=t.alternate;n!==null&&(t.alternate=null,L0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&io(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var hn=null,ti=!1;function _a(t,n,a){for(a=a.child;a!==null;)O0(t,n,a),a=a.sibling}function O0(t,n,a){if(Me&&typeof Me.onCommitFiberUnmount=="function")try{Me.onCommitFiberUnmount(ye,a)}catch{}switch(a.tag){case 26:Tn||Zi(a,n),_a(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Tn||Zi(a,n);var o=hn,u=ti;rs(a.type)&&(hn=a.stateNode,ti=!1),_a(t,n,a),Bo(a.stateNode),hn=o,ti=u;break;case 5:Tn||Zi(a,n);case 6:if(o=hn,u=ti,hn=null,_a(t,n,a),hn=o,ti=u,hn!==null)if(ti)try{(hn.nodeType===9?hn.body:hn.nodeName==="HTML"?hn.ownerDocument.body:hn).removeChild(a.stateNode)}catch(d){Jt(a,n,d)}else try{hn.removeChild(a.stateNode)}catch(d){Jt(a,n,d)}break;case 18:hn!==null&&(ti?(t=hn,Ag(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Dr(t)):Ag(hn,a.stateNode));break;case 4:o=hn,u=ti,hn=a.stateNode.containerInfo,ti=!0,_a(t,n,a),hn=o,ti=u;break;case 0:case 11:case 14:case 15:$a(2,a,n),Tn||$a(4,a,n),_a(t,n,a);break;case 1:Tn||(Zi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&R0(a,n,o)),_a(t,n,a);break;case 21:_a(t,n,a);break;case 22:Tn=(o=Tn)||a.memoizedState!==null,_a(t,n,a),Tn=o;break;default:_a(t,n,a)}}function P0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Dr(t)}catch(a){Jt(n,n.return,a)}}}function F0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Dr(t)}catch(a){Jt(n,n.return,a)}}function Ey(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new D0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new D0),n;default:throw Error(s(435,t.tag))}}function ql(t,n){var a=Ey(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Ly.bind(null,t,o);o.then(u,u)}})}function ni(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=t,v=n,P=v;e:for(;P!==null;){switch(P.tag){case 27:if(rs(P.type)){hn=P.stateNode,ti=!1;break e}break;case 5:hn=P.stateNode,ti=!1;break e;case 3:case 4:hn=P.stateNode.containerInfo,ti=!0;break e}P=P.return}if(hn===null)throw Error(s(160));O0(d,v,u),hn=null,ti=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)I0(n,t),n=n.sibling}var Bi=null;function I0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ni(n,t),ii(t),o&4&&($a(3,t,t.return),wo(3,t),$a(5,t,t.return));break;case 1:ni(n,t),ii(t),o&512&&(Tn||a===null||Zi(a,a.return)),o&64&&xa&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Bi;if(ni(n,t),ii(t),o&512&&(Tn||a===null||Zi(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[za]||d[gn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Hn(d,o,a),d[gn]=t,Sn(d),o=d;break e;case"link":var v=Ig("link","href",u).get(o+(a.href||""));if(v){for(var P=0;P<v.length;P++)if(d=v[P],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(P,1);break t}}d=u.createElement(o),Hn(d,o,a),u.head.appendChild(d);break;case"meta":if(v=Ig("meta","content",u).get(o+(a.content||""))){for(P=0;P<v.length;P++)if(d=v[P],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(P,1);break t}}d=u.createElement(o),Hn(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[gn]=t,Sn(d),o=d}t.stateNode=o}else zg(u,t.type,t.stateNode);else t.stateNode=Fg(u,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?zg(u,t.type,t.stateNode):Fg(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Uf(t,t.memoizedProps,a.memoizedProps)}break;case 27:ni(n,t),ii(t),o&512&&(Tn||a===null||Zi(a,a.return)),a!==null&&o&4&&Uf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(ni(n,t),ii(t),o&512&&(Tn||a===null||Zi(a,a.return)),t.flags&32){u=t.stateNode;try{ui(u,"")}catch(it){Jt(t,t.return,it)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Uf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Pf=!0);break;case 6:if(ni(n,t),ii(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(it){Jt(t,t.return,it)}}break;case 3:if(cc=null,u=Bi,Bi=oc(n.containerInfo),ni(n,t),Bi=u,ii(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Dr(n.containerInfo)}catch(it){Jt(t,t.return,it)}Pf&&(Pf=!1,z0(t));break;case 4:o=Bi,Bi=oc(t.stateNode.containerInfo),ni(n,t),ii(t),Bi=o;break;case 12:ni(n,t),ii(t);break;case 31:ni(n,t),ii(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,ql(t,o)));break;case 13:ni(n,t),ii(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Zl=Le()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,ql(t,o)));break;case 22:u=t.memoizedState!==null;var Q=a!==null&&a.memoizedState!==null,de=xa,Te=Tn;if(xa=de||u,Tn=Te||Q,ni(n,t),Tn=Te,xa=de,ii(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||Q||xa||Tn||Hs(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){Q=a=n;try{if(d=Q.stateNode,u)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{P=Q.stateNode;var De=Q.memoizedProps.style,xe=De!=null&&De.hasOwnProperty("display")?De.display:null;P.style.display=xe==null||typeof xe=="boolean"?"":(""+xe).trim()}}catch(it){Jt(Q,Q.return,it)}}}else if(n.tag===6){if(a===null){Q=n;try{Q.stateNode.nodeValue=u?"":Q.memoizedProps}catch(it){Jt(Q,Q.return,it)}}}else if(n.tag===18){if(a===null){Q=n;try{var ve=Q.stateNode;u?Rg(ve,!0):Rg(Q.stateNode,!1)}catch(it){Jt(Q,Q.return,it)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,ql(t,a))));break;case 19:ni(n,t),ii(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,ql(t,o)));break;case 30:break;case 21:break;default:ni(n,t),ii(t)}}function ii(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(w0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=Lf(t);Xl(t,d,u);break;case 5:var v=a.stateNode;a.flags&32&&(ui(v,""),a.flags&=-33);var P=Lf(t);Xl(t,P,v);break;case 3:case 4:var Q=a.stateNode.containerInfo,de=Lf(t);Of(t,de,Q);break;default:throw Error(s(161))}}catch(Te){Jt(t,t.return,Te)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function z0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;z0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function va(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)U0(t,n.alternate,n),n=n.sibling}function Hs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:$a(4,n,n.return),Hs(n);break;case 1:Zi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&R0(n,n.return,a),Hs(n);break;case 27:Bo(n.stateNode);case 26:case 5:Zi(n,n.return),Hs(n);break;case 22:n.memoizedState===null&&Hs(n);break;case 30:Hs(n);break;default:Hs(n)}t=t.sibling}}function ya(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,v=d.flags;switch(d.tag){case 0:case 11:case 15:ya(u,d,a),wo(4,d);break;case 1:if(ya(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(de){Jt(o,o.return,de)}if(o=d,u=o.updateQueue,u!==null){var P=o.stateNode;try{var Q=u.shared.hiddenCallbacks;if(Q!==null)for(u.shared.hiddenCallbacks=null,u=0;u<Q.length;u++)mm(Q[u],P)}catch(de){Jt(o,o.return,de)}}a&&v&64&&A0(d),No(d,d.return);break;case 27:N0(d);case 26:case 5:ya(u,d,a),a&&o===null&&v&4&&C0(d),No(d,d.return);break;case 12:ya(u,d,a);break;case 31:ya(u,d,a),a&&v&4&&P0(u,d);break;case 13:ya(u,d,a),a&&v&4&&F0(u,d);break;case 22:d.memoizedState===null&&ya(u,d,a),No(d,d.return);break;case 30:break;default:ya(u,d,a)}n=n.sibling}}function Ff(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&go(a))}function If(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&go(t))}function Hi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)B0(t,n,a,o),n=n.sibling}function B0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Hi(t,n,a,o),u&2048&&wo(9,n);break;case 1:Hi(t,n,a,o);break;case 3:Hi(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&go(t)));break;case 12:if(u&2048){Hi(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,v=d.id,P=d.onPostCommit;typeof P=="function"&&P(v,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(Q){Jt(n,n.return,Q)}}else Hi(t,n,a,o);break;case 31:Hi(t,n,a,o);break;case 13:Hi(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,v=n.alternate,n.memoizedState!==null?d._visibility&2?Hi(t,n,a,o):Do(t,n):d._visibility&2?Hi(t,n,a,o):(d._visibility|=2,yr(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Ff(v,n);break;case 24:Hi(t,n,a,o),u&2048&&If(n.alternate,n);break;default:Hi(t,n,a,o)}}function yr(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,v=n,P=a,Q=o,de=v.flags;switch(v.tag){case 0:case 11:case 15:yr(d,v,P,Q,u),wo(8,v);break;case 23:break;case 22:var Te=v.stateNode;v.memoizedState!==null?Te._visibility&2?yr(d,v,P,Q,u):Do(d,v):(Te._visibility|=2,yr(d,v,P,Q,u)),u&&de&2048&&Ff(v.alternate,v);break;case 24:yr(d,v,P,Q,u),u&&de&2048&&If(v.alternate,v);break;default:yr(d,v,P,Q,u)}n=n.sibling}}function Do(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Do(a,o),u&2048&&Ff(o.alternate,o);break;case 24:Do(a,o),u&2048&&If(o.alternate,o);break;default:Do(a,o)}n=n.sibling}}var Uo=8192;function Sr(t,n,a){if(t.subtreeFlags&Uo)for(t=t.child;t!==null;)H0(t,n,a),t=t.sibling}function H0(t,n,a){switch(t.tag){case 26:Sr(t,n,a),t.flags&Uo&&t.memoizedState!==null&&uS(a,Bi,t.memoizedState,t.memoizedProps);break;case 5:Sr(t,n,a);break;case 3:case 4:var o=Bi;Bi=oc(t.stateNode.containerInfo),Sr(t,n,a),Bi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Uo,Uo=16777216,Sr(t,n,a),Uo=o):Sr(t,n,a));break;default:Sr(t,n,a)}}function G0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Lo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];On=o,k0(o,t)}G0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)V0(t),t=t.sibling}function V0(t){switch(t.tag){case 0:case 11:case 15:Lo(t),t.flags&2048&&$a(9,t,t.return);break;case 3:Lo(t);break;case 12:Lo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Yl(t)):Lo(t);break;default:Lo(t)}}function Yl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];On=o,k0(o,t)}G0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:$a(8,n,n.return),Yl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Yl(n));break;default:Yl(n)}t=t.sibling}}function k0(t,n){for(;On!==null;){var a=On;switch(a.tag){case 0:case 11:case 15:$a(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:go(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,On=o;else e:for(a=t;On!==null;){o=On;var u=o.sibling,d=o.return;if(L0(o),o===a){On=null;break e}if(u!==null){u.return=d,On=u;break e}On=d}}}var Ty={getCacheForType:function(t){var n=zn(bn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return zn(bn).controller.signal}},Ay=typeof WeakMap=="function"?WeakMap:Map,Wt=0,on=null,Nt=null,Ot=0,Qt=0,mi=null,es=!1,br=!1,zf=!1,Sa=0,mn=0,ts=0,Gs=0,Bf=0,gi=0,Mr=0,Oo=null,ai=null,Hf=!1,Zl=0,j0=0,Kl=1/0,Ql=null,ns=null,Nn=0,is=null,Er=null,ba=0,Gf=0,Vf=null,W0=null,Po=0,kf=null;function xi(){return(Wt&2)!==0&&Ot!==0?Ot&-Ot:H.T!==null?Zf():yn()}function X0(){if(gi===0)if((Ot&536870912)===0||zt){var t=vt;vt<<=1,(vt&3932160)===0&&(vt=262144),gi=t}else gi=536870912;return t=hi.current,t!==null&&(t.flags|=32),gi}function si(t,n,a){(t===on&&(Qt===2||Qt===9)||t.cancelPendingCommit!==null)&&(Tr(t,0),as(t,Ot,gi,!1)),Ne(t,a),((Wt&2)===0||t!==on)&&(t===on&&((Wt&2)===0&&(Gs|=a),mn===4&&as(t,Ot,gi,!1)),Ki(t))}function q0(t,n,a){if((Wt&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ae(t,n),u=o?wy(t,n):Wf(t,n,!0),d=o;do{if(u===0){br&&!o&&as(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!Ry(a)){u=Wf(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var P=t;u=Oo;var Q=P.current.memoizedState.isDehydrated;if(Q&&(Tr(P,v).flags|=256),v=Wf(P,v,!1),v!==2){if(zf&&!Q){P.errorRecoveryDisabledLanes|=d,Gs|=d,u=4;break e}d=ai,ai=u,d!==null&&(ai===null?ai=d:ai.push.apply(ai,d))}u=v}if(d=!1,u!==2)continue}}if(u===1){Tr(t,0),as(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:as(o,n,gi,!es);break e;case 2:ai=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Zl+300-Le(),10<u)){if(as(o,n,gi,!es),le(o,0,!0)!==0)break e;ba=n,o.timeoutHandle=Eg(Y0.bind(null,o,a,ai,Ql,Hf,n,gi,Gs,Mr,es,d,"Throttled",-0,0),u);break e}Y0(o,a,ai,Ql,Hf,n,gi,Gs,Mr,es,d,null,-0,0)}}break}while(!0);Ki(t)}function Y0(t,n,a,o,u,d,v,P,Q,de,Te,De,xe,ve){if(t.timeoutHandle=-1,De=n.subtreeFlags,De&8192||(De&16785408)===16785408){De={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:oa},H0(n,d,De);var it=(d&62914560)===d?Zl-Le():(d&4194048)===d?j0-Le():0;if(it=fS(De,it),it!==null){ba=d,t.cancelPendingCommit=it(ng.bind(null,t,n,d,a,o,u,v,P,Q,Te,De,null,xe,ve)),as(t,d,v,!de);return}}ng(t,n,d,a,o,u,v,P,Q)}function Ry(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!fi(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function as(t,n,a,o){n&=~Bf,n&=~Gs,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-ke(u),v=1<<d;o[d]=-1,u&=~v}a!==0&&at(t,a,n)}function Jl(){return(Wt&6)===0?(Fo(0),!1):!0}function jf(){if(Nt!==null){if(Qt===0)var t=Nt.return;else t=Nt,fa=Us=null,rf(t),mr=null,_o=0,t=Nt;for(;t!==null;)T0(t.alternate,t),t=t.return;Nt=null}}function Tr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,qy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ba=0,jf(),on=t,Nt=a=ca(t.current,null),Ot=n,Qt=0,mi=null,es=!1,br=Ae(t,n),zf=!1,Mr=gi=Bf=Gs=ts=mn=0,ai=Oo=null,Hf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-ke(o),d=1<<u;n|=t[u],o&=~d}return Sa=n,vl(),a}function Z0(t,n){bt=null,H.H=Ao,n===pr||n===Rl?(n=fm(),Qt=3):n===qu?(n=fm(),Qt=4):Qt=n===bf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,mi=n,Nt===null&&(mn=1,Gl(t,Mi(n,t.current)))}function K0(){var t=hi.current;return t===null?!0:(Ot&4194048)===Ot?Ri===null:(Ot&62914560)===Ot||(Ot&536870912)!==0?t===Ri:!1}function Q0(){var t=H.H;return H.H=Ao,t===null?Ao:t}function J0(){var t=H.A;return H.A=Ty,t}function $l(){mn=4,es||(Ot&4194048)!==Ot&&hi.current!==null||(br=!0),(ts&134217727)===0&&(Gs&134217727)===0||on===null||as(on,Ot,gi,!1)}function Wf(t,n,a){var o=Wt;Wt|=2;var u=Q0(),d=J0();(on!==t||Ot!==n)&&(Ql=null,Tr(t,n)),n=!1;var v=mn;e:do try{if(Qt!==0&&Nt!==null){var P=Nt,Q=mi;switch(Qt){case 8:jf(),v=6;break e;case 3:case 2:case 9:case 6:hi.current===null&&(n=!0);var de=Qt;if(Qt=0,mi=null,Ar(t,P,Q,de),a&&br){v=0;break e}break;default:de=Qt,Qt=0,mi=null,Ar(t,P,Q,de)}}Cy(),v=mn;break}catch(Te){Z0(t,Te)}while(!0);return n&&t.shellSuspendCounter++,fa=Us=null,Wt=o,H.H=u,H.A=d,Nt===null&&(on=null,Ot=0,vl()),v}function Cy(){for(;Nt!==null;)$0(Nt)}function wy(t,n){var a=Wt;Wt|=2;var o=Q0(),u=J0();on!==t||Ot!==n?(Ql=null,Kl=Le()+500,Tr(t,n)):br=Ae(t,n);e:do try{if(Qt!==0&&Nt!==null){n=Nt;var d=mi;t:switch(Qt){case 1:Qt=0,mi=null,Ar(t,n,d,1);break;case 2:case 9:if(cm(d)){Qt=0,mi=null,eg(n);break}n=function(){Qt!==2&&Qt!==9||on!==t||(Qt=7),Ki(t)},d.then(n,n);break e;case 3:Qt=7;break e;case 4:Qt=5;break e;case 7:cm(d)?(Qt=0,mi=null,eg(n)):(Qt=0,mi=null,Ar(t,n,d,7));break;case 5:var v=null;switch(Nt.tag){case 26:v=Nt.memoizedState;case 5:case 27:var P=Nt;if(v?Bg(v):P.stateNode.complete){Qt=0,mi=null;var Q=P.sibling;if(Q!==null)Nt=Q;else{var de=P.return;de!==null?(Nt=de,ec(de)):Nt=null}break t}}Qt=0,mi=null,Ar(t,n,d,5);break;case 6:Qt=0,mi=null,Ar(t,n,d,6);break;case 8:jf(),mn=6;break e;default:throw Error(s(462))}}Ny();break}catch(Te){Z0(t,Te)}while(!0);return fa=Us=null,H.H=o,H.A=u,Wt=a,Nt!==null?0:(on=null,Ot=0,vl(),mn)}function Ny(){for(;Nt!==null&&!ot();)$0(Nt)}function $0(t){var n=M0(t.alternate,t,Sa);t.memoizedProps=t.pendingProps,n===null?ec(t):Nt=n}function eg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=x0(a,n,n.pendingProps,n.type,void 0,Ot);break;case 11:n=x0(a,n,n.pendingProps,n.type.render,n.ref,Ot);break;case 5:rf(n);default:T0(a,n),n=Nt=Jp(n,Sa),n=M0(a,n,Sa)}t.memoizedProps=t.pendingProps,n===null?ec(t):Nt=n}function Ar(t,n,a,o){fa=Us=null,rf(n),mr=null,_o=0;var u=n.return;try{if(_y(t,u,n,a,Ot)){mn=1,Gl(t,Mi(a,t.current)),Nt=null;return}}catch(d){if(u!==null)throw Nt=u,d;mn=1,Gl(t,Mi(a,t.current)),Nt=null;return}n.flags&32768?(zt||o===1?t=!0:br||(Ot&536870912)!==0?t=!1:(es=t=!0,(o===2||o===9||o===3||o===6)&&(o=hi.current,o!==null&&o.tag===13&&(o.flags|=16384))),tg(n,t)):ec(n)}function ec(t){var n=t;do{if((n.flags&32768)!==0){tg(n,es);return}t=n.return;var a=Sy(n.alternate,n,Sa);if(a!==null){Nt=a;return}if(n=n.sibling,n!==null){Nt=n;return}Nt=n=t}while(n!==null);mn===0&&(mn=5)}function tg(t,n){do{var a=by(t.alternate,t);if(a!==null){a.flags&=32767,Nt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Nt=t;return}Nt=t=a}while(t!==null);mn=6,Nt=null}function ng(t,n,a,o,u,d,v,P,Q){t.cancelPendingCommit=null;do tc();while(Nn!==0);if((Wt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=Uu,je(t,a,d,v,P,Q),t===on&&(Nt=on=null,Ot=0),Er=n,is=t,ba=a,Gf=d,Vf=u,W0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Oy(ie,function(){return og(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=H.T,H.T=null,u=D.p,D.p=2,v=Wt,Wt|=4;try{My(t,n,a)}finally{Wt=v,D.p=u,H.T=o}}Nn=1,ig(),ag(),sg()}}function ig(){if(Nn===1){Nn=0;var t=is,n=Er,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=H.T,H.T=null;var o=D.p;D.p=2;var u=Wt;Wt|=4;try{I0(n,t);var d=id,v=kp(t.containerInfo),P=d.focusedElem,Q=d.selectionRange;if(v!==P&&P&&P.ownerDocument&&Vp(P.ownerDocument.documentElement,P)){if(Q!==null&&Ru(P)){var de=Q.start,Te=Q.end;if(Te===void 0&&(Te=de),"selectionStart"in P)P.selectionStart=de,P.selectionEnd=Math.min(Te,P.value.length);else{var De=P.ownerDocument||document,xe=De&&De.defaultView||window;if(xe.getSelection){var ve=xe.getSelection(),it=P.textContent.length,dt=Math.min(Q.start,it),an=Q.end===void 0?dt:Math.min(Q.end,it);!ve.extend&&dt>an&&(v=an,an=dt,dt=v);var oe=Gp(P,dt),ne=Gp(P,an);if(oe&&ne&&(ve.rangeCount!==1||ve.anchorNode!==oe.node||ve.anchorOffset!==oe.offset||ve.focusNode!==ne.node||ve.focusOffset!==ne.offset)){var fe=De.createRange();fe.setStart(oe.node,oe.offset),ve.removeAllRanges(),dt>an?(ve.addRange(fe),ve.extend(ne.node,ne.offset)):(fe.setEnd(ne.node,ne.offset),ve.addRange(fe))}}}}for(De=[],ve=P;ve=ve.parentNode;)ve.nodeType===1&&De.push({element:ve,left:ve.scrollLeft,top:ve.scrollTop});for(typeof P.focus=="function"&&P.focus(),P=0;P<De.length;P++){var Ce=De[P];Ce.element.scrollLeft=Ce.left,Ce.element.scrollTop=Ce.top}}hc=!!nd,id=nd=null}finally{Wt=u,D.p=o,H.T=a}}t.current=n,Nn=2}}function ag(){if(Nn===2){Nn=0;var t=is,n=Er,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=H.T,H.T=null;var o=D.p;D.p=2;var u=Wt;Wt|=4;try{U0(t,n.alternate,n)}finally{Wt=u,D.p=o,H.T=a}}Nn=3}}function sg(){if(Nn===4||Nn===3){Nn=0,mt();var t=is,n=Er,a=ba,o=W0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Nn=5:(Nn=0,Er=is=null,rg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(ns=null),qt(a),n=n.stateNode,Me&&typeof Me.onCommitFiberRoot=="function")try{Me.onCommitFiberRoot(ye,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=H.T,u=D.p,D.p=2,H.T=null;try{for(var d=t.onRecoverableError,v=0;v<o.length;v++){var P=o[v];d(P.value,{componentStack:P.stack})}}finally{H.T=n,D.p=u}}(ba&3)!==0&&tc(),Ki(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===kf?Po++:(Po=0,kf=t):Po=0,Fo(0)}}function rg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,go(n)))}function tc(){return ig(),ag(),sg(),og()}function og(){if(Nn!==5)return!1;var t=is,n=Gf;Gf=0;var a=qt(ba),o=H.T,u=D.p;try{D.p=32>a?32:a,H.T=null,a=Vf,Vf=null;var d=is,v=ba;if(Nn=0,Er=is=null,ba=0,(Wt&6)!==0)throw Error(s(331));var P=Wt;if(Wt|=4,V0(d.current),B0(d,d.current,v,a),Wt=P,Fo(0,!1),Me&&typeof Me.onPostCommitFiberRoot=="function")try{Me.onPostCommitFiberRoot(ye,d)}catch{}return!0}finally{D.p=u,H.T=o,rg(t,n)}}function lg(t,n,a){n=Mi(a,n),n=Sf(t.stateNode,n,2),t=Ka(t,n,2),t!==null&&(Ne(t,2),Ki(t))}function Jt(t,n,a){if(t.tag===3)lg(t,t,a);else for(;n!==null;){if(n.tag===3){lg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ns===null||!ns.has(o))){t=Mi(a,t),a=c0(2),o=Ka(n,a,2),o!==null&&(u0(a,o,n,t),Ne(o,2),Ki(o));break}}n=n.return}}function Xf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new Ay;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(zf=!0,u.add(a),t=Dy.bind(null,t,n,a),n.then(t,t))}function Dy(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,on===t&&(Ot&a)===a&&(mn===4||mn===3&&(Ot&62914560)===Ot&&300>Le()-Zl?(Wt&2)===0&&Tr(t,0):Bf|=a,Mr===Ot&&(Mr=0)),Ki(t)}function cg(t,n){n===0&&(n=me()),t=ws(t,n),t!==null&&(Ne(t,n),Ki(t))}function Uy(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),cg(t,a)}function Ly(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),cg(t,a)}function Oy(t,n){return $(t,n)}var nc=null,Rr=null,qf=!1,ic=!1,Yf=!1,ss=0;function Ki(t){t!==Rr&&t.next===null&&(Rr===null?nc=Rr=t:Rr=Rr.next=t),ic=!0,qf||(qf=!0,Fy())}function Fo(t,n){if(!Yf&&ic){Yf=!0;do for(var a=!1,o=nc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var v=o.suspendedLanes,P=o.pingedLanes;d=(1<<31-ke(42|t)+1)-1,d&=u&~(v&~P),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,hg(o,d))}else d=Ot,d=le(o,o===on?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Ae(o,d)||(a=!0,hg(o,d));o=o.next}while(a);Yf=!1}}function Py(){ug()}function ug(){ic=qf=!1;var t=0;ss!==0&&Xy()&&(t=ss);for(var n=Le(),a=null,o=nc;o!==null;){var u=o.next,d=fg(o,n);d===0?(o.next=null,a===null?nc=u:a.next=u,u===null&&(Rr=a)):(a=o,(t!==0||(d&3)!==0)&&(ic=!0)),o=u}Nn!==0&&Nn!==5||Fo(t),ss!==0&&(ss=0)}function fg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var v=31-ke(d),P=1<<v,Q=u[v];Q===-1?((P&a)===0||(P&o)!==0)&&(u[v]=Oe(P,n)):Q<=n&&(t.expiredLanes|=P),d&=~P}if(n=on,a=Ot,a=le(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Qt===2||Qt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Et(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ae(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Et(o),qt(a)){case 2:case 8:a=C;break;case 32:a=ie;break;case 268435456:a=Ue;break;default:a=ie}return o=dg.bind(null,t),a=$(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Et(o),t.callbackPriority=2,t.callbackNode=null,2}function dg(t,n){if(Nn!==0&&Nn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(tc()&&t.callbackNode!==a)return null;var o=Ot;return o=le(t,t===on?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(q0(t,o,n),fg(t,Le()),t.callbackNode!=null&&t.callbackNode===a?dg.bind(null,t):null)}function hg(t,n){if(tc())return null;q0(t,n,!0)}function Fy(){Yy(function(){(Wt&6)!==0?$(I,Py):ug()})}function Zf(){if(ss===0){var t=dr;t===0&&(t=ft,ft<<=1,(ft&261888)===0&&(ft=256)),ss=t}return ss}function pg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ts(""+t)}function mg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Iy(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=pg((u[Fn]||null).action),v=o.submitter;v&&(n=(n=v[Fn]||null)?pg(n.formAction):v.getAttribute("formAction"),n!==null&&(d=n,v=null));var P=new ml("action","action",null,o,u);t.push({event:P,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ss!==0){var Q=v?mg(u,v):new FormData(u);mf(a,{pending:!0,data:Q,method:u.method,action:d},null,Q)}}else typeof d=="function"&&(P.preventDefault(),Q=v?mg(u,v):new FormData(u),mf(a,{pending:!0,data:Q,method:u.method,action:d},d,Q))},currentTarget:u}]})}}for(var Kf=0;Kf<Du.length;Kf++){var Qf=Du[Kf],zy=Qf.toLowerCase(),By=Qf[0].toUpperCase()+Qf.slice(1);zi(zy,"on"+By)}zi(Xp,"onAnimationEnd"),zi(qp,"onAnimationIteration"),zi(Yp,"onAnimationStart"),zi("dblclick","onDoubleClick"),zi("focusin","onFocus"),zi("focusout","onBlur"),zi(ty,"onTransitionRun"),zi(ny,"onTransitionStart"),zi(iy,"onTransitionCancel"),zi(Zp,"onTransitionEnd"),ge("onMouseEnter",["mouseout","mouseover"]),ge("onMouseLeave",["mouseout","mouseover"]),ge("onPointerEnter",["pointerout","pointerover"]),ge("onPointerLeave",["pointerout","pointerover"]),se("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),se("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),se("onBeforeInput",["compositionend","keypress","textInput","paste"]),se("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),se("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),se("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Io));function gg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var v=o.length-1;0<=v;v--){var P=o[v],Q=P.instance,de=P.currentTarget;if(P=P.listener,Q!==d&&u.isPropagationStopped())break e;d=P,u.currentTarget=de;try{d(u)}catch(Te){_l(Te)}u.currentTarget=null,d=Q}else for(v=0;v<o.length;v++){if(P=o[v],Q=P.instance,de=P.currentTarget,P=P.listener,Q!==d&&u.isPropagationStopped())break e;d=P,u.currentTarget=de;try{d(u)}catch(Te){_l(Te)}u.currentTarget=null,d=Q}}}}function Dt(t,n){var a=n[Ia];a===void 0&&(a=n[Ia]=new Set);var o=t+"__bubble";a.has(o)||(xg(n,t,2,!1),a.add(o))}function Jf(t,n,a){var o=0;n&&(o|=4),xg(a,t,o,n)}var ac="_reactListening"+Math.random().toString(36).slice(2);function $f(t){if(!t[ac]){t[ac]=!0,fl.forEach(function(a){a!=="selectionchange"&&(Hy.has(a)||Jf(a,!1,t),Jf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[ac]||(n[ac]=!0,Jf("selectionchange",!1,n))}}function xg(t,n,a,o){switch(Xg(n)){case 2:var u=pS;break;case 8:u=mS;break;default:u=pd}a=u.bind(null,n,a,t),u=void 0,!_u||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function ed(t,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var P=o.stateNode.containerInfo;if(P===u)break;if(v===4)for(v=o.return;v!==null;){var Q=v.tag;if((Q===3||Q===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;P!==null;){if(v=Ba(P),v===null)return;if(Q=v.tag,Q===5||Q===6||Q===26||Q===27){o=d=v;continue e}P=P.parentNode}}o=o.return}bp(function(){var de=d,Te=gu(a),De=[];e:{var xe=Kp.get(t);if(xe!==void 0){var ve=ml,it=t;switch(t){case"keypress":if(hl(a)===0)break e;case"keydown":case"keyup":ve=Lv;break;case"focusin":it="focus",ve=bu;break;case"focusout":it="blur",ve=bu;break;case"beforeblur":case"afterblur":ve=bu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ve=Tp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ve=Sv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ve=Fv;break;case Xp:case qp:case Yp:ve=Ev;break;case Zp:ve=zv;break;case"scroll":case"scrollend":ve=vv;break;case"wheel":ve=Hv;break;case"copy":case"cut":case"paste":ve=Av;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ve=Rp;break;case"toggle":case"beforetoggle":ve=Vv}var dt=(n&4)!==0,an=!dt&&(t==="scroll"||t==="scrollend"),oe=dt?xe!==null?xe+"Capture":null:xe;dt=[];for(var ne=de,fe;ne!==null;){var Ce=ne;if(fe=Ce.stateNode,Ce=Ce.tag,Ce!==5&&Ce!==26&&Ce!==27||fe===null||oe===null||(Ce=ao(ne,oe),Ce!=null&&dt.push(zo(ne,Ce,fe))),an)break;ne=ne.return}0<dt.length&&(xe=new ve(xe,it,null,a,Te),De.push({event:xe,listeners:dt}))}}if((n&7)===0){e:{if(xe=t==="mouseover"||t==="pointerover",ve=t==="mouseout"||t==="pointerout",xe&&a!==mu&&(it=a.relatedTarget||a.fromElement)&&(Ba(it)||it[ra]))break e;if((ve||xe)&&(xe=Te.window===Te?Te:(xe=Te.ownerDocument)?xe.defaultView||xe.parentWindow:window,ve?(it=a.relatedTarget||a.toElement,ve=de,it=it?Ba(it):null,it!==null&&(an=c(it),dt=it.tag,it!==an||dt!==5&&dt!==27&&dt!==6)&&(it=null)):(ve=null,it=de),ve!==it)){if(dt=Tp,Ce="onMouseLeave",oe="onMouseEnter",ne="mouse",(t==="pointerout"||t==="pointerover")&&(dt=Rp,Ce="onPointerLeave",oe="onPointerEnter",ne="pointer"),an=ve==null?xe:Es(ve),fe=it==null?xe:Es(it),xe=new dt(Ce,ne+"leave",ve,a,Te),xe.target=an,xe.relatedTarget=fe,Ce=null,Ba(Te)===de&&(dt=new dt(oe,ne+"enter",it,a,Te),dt.target=fe,dt.relatedTarget=an,Ce=dt),an=Ce,ve&&it)t:{for(dt=Gy,oe=ve,ne=it,fe=0,Ce=oe;Ce;Ce=dt(Ce))fe++;Ce=0;for(var ct=ne;ct;ct=dt(ct))Ce++;for(;0<fe-Ce;)oe=dt(oe),fe--;for(;0<Ce-fe;)ne=dt(ne),Ce--;for(;fe--;){if(oe===ne||ne!==null&&oe===ne.alternate){dt=oe;break t}oe=dt(oe),ne=dt(ne)}dt=null}else dt=null;ve!==null&&_g(De,xe,ve,dt,!1),it!==null&&an!==null&&_g(De,an,it,dt,!0)}}e:{if(xe=de?Es(de):window,ve=xe.nodeName&&xe.nodeName.toLowerCase(),ve==="select"||ve==="input"&&xe.type==="file")var Vt=Pp;else if(Lp(xe))if(Fp)Vt=Jv;else{Vt=Kv;var st=Zv}else ve=xe.nodeName,!ve||ve.toLowerCase()!=="input"||xe.type!=="checkbox"&&xe.type!=="radio"?de&&Xt(de.elementType)&&(Vt=Pp):Vt=Qv;if(Vt&&(Vt=Vt(t,de))){Op(De,Vt,a,Te);break e}st&&st(t,xe,de),t==="focusout"&&de&&xe.type==="number"&&de.memoizedProps.value!=null&&wt(xe,"number",xe.value)}switch(st=de?Es(de):window,t){case"focusin":(Lp(st)||st.contentEditable==="true")&&(ar=st,Cu=de,ho=null);break;case"focusout":ho=Cu=ar=null;break;case"mousedown":wu=!0;break;case"contextmenu":case"mouseup":case"dragend":wu=!1,jp(De,a,Te);break;case"selectionchange":if(ey)break;case"keydown":case"keyup":jp(De,a,Te)}var Mt;if(Eu)e:{switch(t){case"compositionstart":var Pt="onCompositionStart";break e;case"compositionend":Pt="onCompositionEnd";break e;case"compositionupdate":Pt="onCompositionUpdate";break e}Pt=void 0}else ir?Dp(t,a)&&(Pt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Pt="onCompositionStart");Pt&&(Cp&&a.locale!=="ko"&&(ir||Pt!=="onCompositionStart"?Pt==="onCompositionEnd"&&ir&&(Mt=Mp()):(ka=Te,vu="value"in ka?ka.value:ka.textContent,ir=!0)),st=sc(de,Pt),0<st.length&&(Pt=new Ap(Pt,t,null,a,Te),De.push({event:Pt,listeners:st}),Mt?Pt.data=Mt:(Mt=Up(a),Mt!==null&&(Pt.data=Mt)))),(Mt=jv?Wv(t,a):Xv(t,a))&&(Pt=sc(de,"onBeforeInput"),0<Pt.length&&(st=new Ap("onBeforeInput","beforeinput",null,a,Te),De.push({event:st,listeners:Pt}),st.data=Mt)),Iy(De,t,de,a,Te)}gg(De,n)})}function zo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function sc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=ao(t,a),u!=null&&o.unshift(zo(t,u,d)),u=ao(t,n),u!=null&&o.push(zo(t,u,d))),t.tag===3)return o;t=t.return}return[]}function Gy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function _g(t,n,a,o,u){for(var d=n._reactName,v=[];a!==null&&a!==o;){var P=a,Q=P.alternate,de=P.stateNode;if(P=P.tag,Q!==null&&Q===o)break;P!==5&&P!==26&&P!==27||de===null||(Q=de,u?(de=ao(a,d),de!=null&&v.unshift(zo(a,de,Q))):u||(de=ao(a,d),de!=null&&v.push(zo(a,de,Q)))),a=a.return}v.length!==0&&t.push({event:n,listeners:v})}var Vy=/\r\n?/g,ky=/\u0000|\uFFFD/g;function vg(t){return(typeof t=="string"?t:""+t).replace(Vy,`
`).replace(ky,"")}function yg(t,n){return n=vg(n),vg(t)===n}function nn(t,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ui(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ui(t,""+o);break;case"className":nt(t,"class",o);break;case"tabIndex":nt(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":nt(t,a,o);break;case"style":Ii(t,o,d);break;case"data":if(n!=="object"){nt(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Ts(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&nn(t,n,"name",u.name,u,null),nn(t,n,"formEncType",u.formEncType,u,null),nn(t,n,"formMethod",u.formMethod,u,null),nn(t,n,"formTarget",u.formTarget,u,null)):(nn(t,n,"encType",u.encType,u,null),nn(t,n,"method",u.method,u,null),nn(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Ts(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=oa);break;case"onScroll":o!=null&&Dt("scroll",t);break;case"onScrollEnd":o!=null&&Dt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=Ts(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":Dt("beforetoggle",t),Dt("toggle",t),Xe(t,"popover",o);break;case"xlinkActuate":et(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":et(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":et(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":et(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":et(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":et(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":et(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":et(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":et(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Xe(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Xi.get(a)||a,Xe(t,a,o))}}function td(t,n,a,o,u,d){switch(a){case"style":Ii(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?ui(t,o):(typeof o=="number"||typeof o=="bigint")&&ui(t,""+o);break;case"onScroll":o!=null&&Dt("scroll",t);break;case"onScrollEnd":o!=null&&Dt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=oa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!L.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=t[Fn]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Xe(t,a,o)}}}function Hn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Dt("error",t),Dt("load",t);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:nn(t,n,d,v,a,null)}}u&&nn(t,n,"srcSet",a.srcSet,a,null),o&&nn(t,n,"src",a.src,a,null);return;case"input":Dt("invalid",t);var P=d=v=u=null,Q=null,de=null;for(o in a)if(a.hasOwnProperty(o)){var Te=a[o];if(Te!=null)switch(o){case"name":u=Te;break;case"type":v=Te;break;case"checked":Q=Te;break;case"defaultChecked":de=Te;break;case"value":d=Te;break;case"defaultValue":P=Te;break;case"children":case"dangerouslySetInnerHTML":if(Te!=null)throw Error(s(137,n));break;default:nn(t,n,o,Te,a,null)}}kn(t,d,P,Q,de,v,u,!1);return;case"select":Dt("invalid",t),o=v=d=null;for(u in a)if(a.hasOwnProperty(u)&&(P=a[u],P!=null))switch(u){case"value":d=P;break;case"defaultValue":v=P;break;case"multiple":o=P;default:nn(t,n,u,P,a,null)}n=d,a=v,t.multiple=!!o,n!=null?wn(t,!!o,n,!1):a!=null&&wn(t,!!o,a,!0);return;case"textarea":Dt("invalid",t),d=u=o=null;for(v in a)if(a.hasOwnProperty(v)&&(P=a[v],P!=null))switch(v){case"value":o=P;break;case"defaultValue":u=P;break;case"children":d=P;break;case"dangerouslySetInnerHTML":if(P!=null)throw Error(s(91));break;default:nn(t,n,v,P,a,null)}Fi(t,o,u,d);return;case"option":for(Q in a)if(a.hasOwnProperty(Q)&&(o=a[Q],o!=null))switch(Q){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:nn(t,n,Q,o,a,null)}return;case"dialog":Dt("beforetoggle",t),Dt("toggle",t),Dt("cancel",t),Dt("close",t);break;case"iframe":case"object":Dt("load",t);break;case"video":case"audio":for(o=0;o<Io.length;o++)Dt(Io[o],t);break;case"image":Dt("error",t),Dt("load",t);break;case"details":Dt("toggle",t);break;case"embed":case"source":case"link":Dt("error",t),Dt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(de in a)if(a.hasOwnProperty(de)&&(o=a[de],o!=null))switch(de){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:nn(t,n,de,o,a,null)}return;default:if(Xt(n)){for(Te in a)a.hasOwnProperty(Te)&&(o=a[Te],o!==void 0&&td(t,n,Te,o,a,void 0));return}}for(P in a)a.hasOwnProperty(P)&&(o=a[P],o!=null&&nn(t,n,P,o,a,null))}function jy(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,v=null,P=null,Q=null,de=null,Te=null;for(ve in a){var De=a[ve];if(a.hasOwnProperty(ve)&&De!=null)switch(ve){case"checked":break;case"value":break;case"defaultValue":Q=De;default:o.hasOwnProperty(ve)||nn(t,n,ve,null,o,De)}}for(var xe in o){var ve=o[xe];if(De=a[xe],o.hasOwnProperty(xe)&&(ve!=null||De!=null))switch(xe){case"type":d=ve;break;case"name":u=ve;break;case"checked":de=ve;break;case"defaultChecked":Te=ve;break;case"value":v=ve;break;case"defaultValue":P=ve;break;case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(s(137,n));break;default:ve!==De&&nn(t,n,xe,ve,o,De)}}Ke(t,v,P,Q,de,Te,d,u);return;case"select":ve=v=P=xe=null;for(d in a)if(Q=a[d],a.hasOwnProperty(d)&&Q!=null)switch(d){case"value":break;case"multiple":ve=Q;default:o.hasOwnProperty(d)||nn(t,n,d,null,o,Q)}for(u in o)if(d=o[u],Q=a[u],o.hasOwnProperty(u)&&(d!=null||Q!=null))switch(u){case"value":xe=d;break;case"defaultValue":P=d;break;case"multiple":v=d;default:d!==Q&&nn(t,n,u,d,o,Q)}n=P,a=v,o=ve,xe!=null?wn(t,!!a,xe,!1):!!o!=!!a&&(n!=null?wn(t,!!a,n,!0):wn(t,!!a,a?[]:"",!1));return;case"textarea":ve=xe=null;for(P in a)if(u=a[P],a.hasOwnProperty(P)&&u!=null&&!o.hasOwnProperty(P))switch(P){case"value":break;case"children":break;default:nn(t,n,P,null,o,u)}for(v in o)if(u=o[v],d=a[v],o.hasOwnProperty(v)&&(u!=null||d!=null))switch(v){case"value":xe=u;break;case"defaultValue":ve=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&nn(t,n,v,u,o,d)}ci(t,xe,ve);return;case"option":for(var it in a)if(xe=a[it],a.hasOwnProperty(it)&&xe!=null&&!o.hasOwnProperty(it))switch(it){case"selected":t.selected=!1;break;default:nn(t,n,it,null,o,xe)}for(Q in o)if(xe=o[Q],ve=a[Q],o.hasOwnProperty(Q)&&xe!==ve&&(xe!=null||ve!=null))switch(Q){case"selected":t.selected=xe&&typeof xe!="function"&&typeof xe!="symbol";break;default:nn(t,n,Q,xe,o,ve)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var dt in a)xe=a[dt],a.hasOwnProperty(dt)&&xe!=null&&!o.hasOwnProperty(dt)&&nn(t,n,dt,null,o,xe);for(de in o)if(xe=o[de],ve=a[de],o.hasOwnProperty(de)&&xe!==ve&&(xe!=null||ve!=null))switch(de){case"children":case"dangerouslySetInnerHTML":if(xe!=null)throw Error(s(137,n));break;default:nn(t,n,de,xe,o,ve)}return;default:if(Xt(n)){for(var an in a)xe=a[an],a.hasOwnProperty(an)&&xe!==void 0&&!o.hasOwnProperty(an)&&td(t,n,an,void 0,o,xe);for(Te in o)xe=o[Te],ve=a[Te],!o.hasOwnProperty(Te)||xe===ve||xe===void 0&&ve===void 0||td(t,n,Te,xe,o,ve);return}}for(var oe in a)xe=a[oe],a.hasOwnProperty(oe)&&xe!=null&&!o.hasOwnProperty(oe)&&nn(t,n,oe,null,o,xe);for(De in o)xe=o[De],ve=a[De],!o.hasOwnProperty(De)||xe===ve||xe==null&&ve==null||nn(t,n,De,xe,o,ve)}function Sg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Wy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,v=u.initiatorType,P=u.duration;if(d&&P&&Sg(v)){for(v=0,P=u.responseEnd,o+=1;o<a.length;o++){var Q=a[o],de=Q.startTime;if(de>P)break;var Te=Q.transferSize,De=Q.initiatorType;Te&&Sg(De)&&(Q=Q.responseEnd,v+=Te*(Q<P?1:(P-de)/(Q-de)))}if(--o,n+=8*(d+v)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var nd=null,id=null;function rc(t){return t.nodeType===9?t:t.ownerDocument}function bg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Mg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function ad(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var sd=null;function Xy(){var t=window.event;return t&&t.type==="popstate"?t===sd?!1:(sd=t,!0):(sd=null,!1)}var Eg=typeof setTimeout=="function"?setTimeout:void 0,qy=typeof clearTimeout=="function"?clearTimeout:void 0,Tg=typeof Promise=="function"?Promise:void 0,Yy=typeof queueMicrotask=="function"?queueMicrotask:typeof Tg<"u"?function(t){return Tg.resolve(null).then(t).catch(Zy)}:Eg;function Zy(t){setTimeout(function(){throw t})}function rs(t){return t==="head"}function Ag(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),Dr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Bo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Bo(a);for(var d=a.firstChild;d;){var v=d.nextSibling,P=d.nodeName;d[za]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=v}}else a==="body"&&Bo(t.ownerDocument.body);a=u}while(a);Dr(n)}function Rg(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function rd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":rd(a),io(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Ky(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[za])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Ci(t.nextSibling),t===null)break}return null}function Qy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ci(t.nextSibling),t===null))return null;return t}function Cg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ci(t.nextSibling),t===null))return null;return t}function od(t){return t.data==="$?"||t.data==="$~"}function ld(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Jy(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Ci(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var cd=null;function wg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ci(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Ng(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Dg(t,n,a){switch(n=rc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Bo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);io(t)}var wi=new Map,Ug=new Set;function oc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ma=D.d;D.d={f:$y,r:eS,D:tS,C:nS,L:iS,m:aS,X:rS,S:sS,M:oS};function $y(){var t=Ma.f(),n=Jl();return t||n}function eS(t){var n=Ha(t);n!==null&&n.tag===5&&n.type==="form"?Zm(n):Ma.r(t)}var Cr=typeof document>"u"?null:document;function Lg(t,n,a){var o=Cr;if(o&&typeof n=="string"&&n){var u=Zt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Ug.has(u)||(Ug.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Hn(n,"link",t),Sn(n),o.head.appendChild(n)))}}function tS(t){Ma.D(t),Lg("dns-prefetch",t,null)}function nS(t,n){Ma.C(t,n),Lg("preconnect",t,n)}function iS(t,n,a){Ma.L(t,n,a);var o=Cr;if(o&&t&&n){var u='link[rel="preload"][as="'+Zt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Zt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Zt(a.imageSizes)+'"]')):u+='[href="'+Zt(t)+'"]';var d=u;switch(n){case"style":d=wr(t);break;case"script":d=Nr(t)}wi.has(d)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),wi.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Ho(d))||n==="script"&&o.querySelector(Go(d))||(n=o.createElement("link"),Hn(n,"link",t),Sn(n),o.head.appendChild(n)))}}function aS(t,n){Ma.m(t,n);var a=Cr;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Zt(o)+'"][href="'+Zt(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Nr(t)}if(!wi.has(d)&&(t=_({rel:"modulepreload",href:t},n),wi.set(d,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Go(d)))return}o=a.createElement("link"),Hn(o,"link",t),Sn(o),a.head.appendChild(o)}}}function sS(t,n,a){Ma.S(t,n,a);var o=Cr;if(o&&t){var u=Ga(o).hoistableStyles,d=wr(t);n=n||"default";var v=u.get(d);if(!v){var P={loading:0,preload:null};if(v=o.querySelector(Ho(d)))P.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=wi.get(d))&&ud(t,a);var Q=v=o.createElement("link");Sn(Q),Hn(Q,"link",t),Q._p=new Promise(function(de,Te){Q.onload=de,Q.onerror=Te}),Q.addEventListener("load",function(){P.loading|=1}),Q.addEventListener("error",function(){P.loading|=2}),P.loading|=4,lc(v,n,o)}v={type:"stylesheet",instance:v,count:1,state:P},u.set(d,v)}}}function rS(t,n){Ma.X(t,n);var a=Cr;if(a&&t){var o=Ga(a).hoistableScripts,u=Nr(t),d=o.get(u);d||(d=a.querySelector(Go(u)),d||(t=_({src:t,async:!0},n),(n=wi.get(u))&&fd(t,n),d=a.createElement("script"),Sn(d),Hn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function oS(t,n){Ma.M(t,n);var a=Cr;if(a&&t){var o=Ga(a).hoistableScripts,u=Nr(t),d=o.get(u);d||(d=a.querySelector(Go(u)),d||(t=_({src:t,async:!0,type:"module"},n),(n=wi.get(u))&&fd(t,n),d=a.createElement("script"),Sn(d),Hn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Og(t,n,a,o){var u=(u=X.current)?oc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=wr(a.href),a=Ga(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=wr(a.href);var d=Ga(u).hoistableStyles,v=d.get(t);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,v),(d=u.querySelector(Ho(t)))&&!d._p&&(v.instance=d,v.state.loading=5),wi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},wi.set(t,a),d||lS(u,t,a,v.state))),n&&o===null)throw Error(s(528,""));return v}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Nr(a),a=Ga(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function wr(t){return'href="'+Zt(t)+'"'}function Ho(t){return'link[rel="stylesheet"]['+t+"]"}function Pg(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function lS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Hn(n,"link",a),Sn(n),t.head.appendChild(n))}function Nr(t){return'[src="'+Zt(t)+'"]'}function Go(t){return"script[async]"+t}function Fg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Zt(a.href)+'"]');if(o)return n.instance=o,Sn(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),Sn(o),Hn(o,"style",u),lc(o,a.precedence,t),n.instance=o;case"stylesheet":u=wr(a.href);var d=t.querySelector(Ho(u));if(d)return n.state.loading|=4,n.instance=d,Sn(d),d;o=Pg(a),(u=wi.get(u))&&ud(o,u),d=(t.ownerDocument||t).createElement("link"),Sn(d);var v=d;return v._p=new Promise(function(P,Q){v.onload=P,v.onerror=Q}),Hn(d,"link",o),n.state.loading|=4,lc(d,a.precedence,t),n.instance=d;case"script":return d=Nr(a.src),(u=t.querySelector(Go(d)))?(n.instance=u,Sn(u),u):(o=a,(u=wi.get(d))&&(o=_({},a),fd(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),Sn(u),Hn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,lc(o,a.precedence,t));return n.instance}function lc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,v=0;v<o.length;v++){var P=o[v];if(P.dataset.precedence===n)d=P;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function ud(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function fd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var cc=null;function Ig(t,n,a){if(cc===null){var o=new Map,u=cc=new Map;u.set(a,o)}else u=cc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[za]||d[gn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(n)||"";v=t+v;var P=o.get(v);P?P.push(d):o.set(v,[d])}}return o}function zg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function cS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Bg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function uS(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=wr(o.href),d=n.querySelector(Ho(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=uc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=d,Sn(d);return}d=n.ownerDocument||n,o=Pg(o),(u=wi.get(u))&&ud(o,u),d=d.createElement("link"),Sn(d);var v=d;v._p=new Promise(function(P,Q){v.onload=P,v.onerror=Q}),Hn(d,"link",o),a.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=uc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var dd=0;function fS(t,n){return t.stylesheets&&t.count===0&&dc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&dc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&dd===0&&(dd=62500*Wy());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&dc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>dd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function uc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)dc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var fc=null;function dc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,fc=new Map,n.forEach(dS,t),fc=null,uc.call(t))}function dS(t,n){if(!(n.state.loading&4)){var a=fc.get(t);if(a)var o=a.get(null);else{a=new Map,fc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var v=u[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}u=n.instance,v=u.getAttribute("data-precedence"),d=a.get(v)||o,d===o&&a.set(null,u),a.set(v,u),this.count++,o=uc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Vo={$$typeof:G,Provider:null,Consumer:null,_currentValue:w,_currentValue2:w,_threadCount:0};function hS(t,n,a,o,u,d,v,P,Q){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Pe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pe(0),this.hiddenUpdates=Pe(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=Q,this.incompleteTransitions=new Map}function Hg(t,n,a,o,u,d,v,P,Q,de,Te,De){return t=new hS(t,n,a,v,Q,de,Te,De,P),n=1,d===!0&&(n|=24),d=di(3,null,null,n),t.current=d,d.stateNode=t,n=ju(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Yu(d),t}function Gg(t){return t?(t=or,t):or}function Vg(t,n,a,o,u,d){u=Gg(u),o.context===null?o.context=u:o.pendingContext=u,o=Za(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Ka(t,o,n),a!==null&&(si(a,t,n),yo(a,t,n))}function kg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function hd(t,n){kg(t,n),(t=t.alternate)&&kg(t,n)}function jg(t){if(t.tag===13||t.tag===31){var n=ws(t,67108864);n!==null&&si(n,t,67108864),hd(t,67108864)}}function Wg(t){if(t.tag===13||t.tag===31){var n=xi();n=Cn(n);var a=ws(t,n);a!==null&&si(a,t,n),hd(t,n)}}var hc=!0;function pS(t,n,a,o){var u=H.T;H.T=null;var d=D.p;try{D.p=2,pd(t,n,a,o)}finally{D.p=d,H.T=u}}function mS(t,n,a,o){var u=H.T;H.T=null;var d=D.p;try{D.p=8,pd(t,n,a,o)}finally{D.p=d,H.T=u}}function pd(t,n,a,o){if(hc){var u=md(o);if(u===null)ed(t,n,o,pc,a),qg(t,o);else if(xS(u,t,n,a,o))o.stopPropagation();else if(qg(t,o),n&4&&-1<gS.indexOf(t)){for(;u!==null;){var d=Ha(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=Fe(d.pendingLanes);if(v!==0){var P=d;for(P.pendingLanes|=2,P.entangledLanes|=2;v;){var Q=1<<31-ke(v);P.entanglements[1]|=Q,v&=~Q}Ki(d),(Wt&6)===0&&(Kl=Le()+500,Fo(0))}}break;case 31:case 13:P=ws(d,2),P!==null&&si(P,d,2),Jl(),hd(d,2)}if(d=md(o),d===null&&ed(t,n,o,pc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else ed(t,n,o,null,a)}}function md(t){return t=gu(t),gd(t)}var pc=null;function gd(t){if(pc=null,t=Ba(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return pc=t,null}function Xg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ft()){case I:return 2;case C:return 8;case ie:case Ee:return 32;case Ue:return 268435456;default:return 32}default:return 32}}var xd=!1,os=null,ls=null,cs=null,ko=new Map,jo=new Map,us=[],gS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function qg(t,n){switch(t){case"focusin":case"focusout":os=null;break;case"dragenter":case"dragleave":ls=null;break;case"mouseover":case"mouseout":cs=null;break;case"pointerover":case"pointerout":ko.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":jo.delete(n.pointerId)}}function Wo(t,n,a,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=Ha(n),n!==null&&jg(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function xS(t,n,a,o,u){switch(n){case"focusin":return os=Wo(os,t,n,a,o,u),!0;case"dragenter":return ls=Wo(ls,t,n,a,o,u),!0;case"mouseover":return cs=Wo(cs,t,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return ko.set(d,Wo(ko.get(d)||null,t,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,jo.set(d,Wo(jo.get(d)||null,t,n,a,o,u)),!0}return!1}function Yg(t){var n=Ba(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,Fa(t.priority,function(){Wg(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,Fa(t.priority,function(){Wg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function mc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=md(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);mu=o,a.target.dispatchEvent(o),mu=null}else return n=Ha(a),n!==null&&jg(n),t.blockedOn=a,!1;n.shift()}return!0}function Zg(t,n,a){mc(t)&&a.delete(n)}function _S(){xd=!1,os!==null&&mc(os)&&(os=null),ls!==null&&mc(ls)&&(ls=null),cs!==null&&mc(cs)&&(cs=null),ko.forEach(Zg),jo.forEach(Zg)}function gc(t,n){t.blockedOn===n&&(t.blockedOn=null,xd||(xd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,_S)))}var xc=null;function Kg(t){xc!==t&&(xc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){xc===t&&(xc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(gd(o||a)===null)continue;break}var d=Ha(a);d!==null&&(t.splice(n,3),n-=3,mf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Dr(t){function n(Q){return gc(Q,t)}os!==null&&gc(os,t),ls!==null&&gc(ls,t),cs!==null&&gc(cs,t),ko.forEach(n),jo.forEach(n);for(var a=0;a<us.length;a++){var o=us[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<us.length&&(a=us[0],a.blockedOn===null);)Yg(a),a.blockedOn===null&&us.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],v=u[Fn]||null;if(typeof d=="function")v||Kg(a);else if(v){var P=null;if(d&&d.hasAttribute("formAction")){if(u=d,v=d[Fn]||null)P=v.formAction;else if(gd(u)!==null)continue}else P=v.action;typeof P=="function"?a[o+1]=P:(a.splice(o,3),o-=3),Kg(a)}}}function Qg(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function _d(t){this._internalRoot=t}_c.prototype.render=_d.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=xi();Vg(a,o,t,n,null,null)},_c.prototype.unmount=_d.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Vg(t.current,2,null,t,null,null),Jl(),n[ra]=null}};function _c(t){this._internalRoot=t}_c.prototype.unstable_scheduleHydration=function(t){if(t){var n=yn();t={blockedOn:null,target:t,priority:n};for(var a=0;a<us.length&&n!==0&&n<us[a].priority;a++);us.splice(a,0,t),a===0&&Yg(t)}};var Jg=e.version;if(Jg!=="19.2.7")throw Error(s(527,Jg,"19.2.7"));D.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=h(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var vS={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vc.isDisabled&&vc.supportsFiber)try{ye=vc.inject(vS),Me=vc}catch{}}return qo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=s0,d=r0,v=o0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=Hg(t,1,!1,null,null,a,o,null,u,d,v,Qg),t[ra]=n.current,$f(t),new _d(n)},qo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",d=s0,v=r0,P=o0,Q=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(P=a.onRecoverableError),a.formState!==void 0&&(Q=a.formState)),n=Hg(t,1,!0,n,a??null,o,u,Q,d,v,P,Qg),n.context=Gg(null),a=n.current,o=xi(),o=Cn(o),u=Za(o),u.callback=null,Ka(a,u,o),a=o,n.current.lanes=a,Ne(n,a),Ki(n),t[ra]=n.current,$f(t),new _c(n)},qo.version="19.2.7",qo}var lx;function NS(){if(lx)return Sd.exports;lx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Sd.exports=wS(),Sd.exports}var DS=NS();/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Ys(r,e){let i=r.trim();if(!i)return 0;const s=Object.entries(e).sort((l,c)=>c[0].length-l[0].length);for(const[l,c]of s){const f=new RegExp(`\\b${l}\\b`,"g");i=i.replace(f,c.toString())}i=i.replace(/\bPI\b/gi,Math.PI.toString()),i=i.replace(/\bE\b/gi,Math.E.toString());try{return US(i)}catch(l){return console.error(`Failed to parse expression: "${r}" (substituted: "${i}")`,l),0}}function US(r){const e=r.replace(/\s+/g,"");let i=0;function s(){let f=l();for(;i<e.length;){const p=e[i];if(p==="+"||p==="-"){i++;const m=l();p==="+"?f+=m:f-=m}else break}return f}function l(){let f=c();for(;i<e.length;){const p=e[i];if(p==="*"||p==="/"){i++;const m=c();if(p==="*")f*=m;else{if(m===0)throw new Error("Division by zero");f/=m}}else break}return f}function c(){if(i>=e.length)return 0;if(e[i]==="("){i++;const h=s();return e[i]===")"&&i++,h}let f=1;e[i]==="-"?(f=-1,i++):e[i]==="+"&&i++;let p=i;for(;i<e.length&&(e[i]>="0"&&e[i]<="9"||e[i]===".");)i++;if(p===i)return 0;const m=e.substring(p,i);return parseFloat(m)*f}return s()}let cx="",Td=null;function y_(r,e,i,s=25e4){const l=Math.max(0,Math.min(i,25)),c=`${r}_${JSON.stringify(e)}_${l}_${s}`;if(Td&&c===cx)return Td;let f=r,p=!1;const m={};for(const g of e)g.inputSymbol&&(m[g.inputSymbol]=g.successor);for(let g=0;g<l;g++){let _=0;for(let x=0;x<f.length;x++){const M=f[x],E=m[M];_+=E!==void 0?E.length:1}if(_>s){const x=[];let M=0;for(let E=0;E<f.length;E++){const U=f[E],b=m[U];if(b!==void 0?(x.push(b),M+=b.length):(x.push(U),M+=1),M>=s){p=!0;break}}f=x.join("").substring(0,s),p=!0;break}else{const x=[];for(let M=0;M<f.length;M++){const E=f[M],U=m[E];U!==void 0?x.push(U):x.push(E)}f=x.join("")}}const h={expandedString:f,isCapped:p,totalLength:f.length};return cx=c,Td=h,h}function LS(r,e){if(!r)return;const i=r.trim();if(!i)return;if(i.startsWith("#"))return i;let s=i;const l=i.match(/^(?:rgba?|rgb)?\s*\((.*)\)\s*$/i);if(l)s=l[1];else if(i.includes(","))s=i;else return;const c=s.split(",");if(c.length>=3){const f=Math.max(0,Math.min(255,Math.round(Ys(c[0],e)))),p=Math.max(0,Math.min(255,Math.round(Ys(c[1],e)))),m=Math.max(0,Math.min(255,Math.round(Ys(c[2],e))));let h=1;return c.length>=4&&(h=Math.max(0,Math.min(1,Ys(c[3],e)))),`rgba(${f}, ${p}, ${m}, ${h})`}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */var Re=(r=>(r.FORWARD="FORWARD",r.FORWARD_NO_PEN="FORWARD_NO_PEN",r.TURN_LEFT="TURN_LEFT",r.TURN_RIGHT="TURN_RIGHT",r.PUSH_STATE="PUSH_STATE",r.POP_STATE="POP_STATE",r.PITCH_UP="PITCH_UP",r.PITCH_DOWN="PITCH_DOWN",r.ROLL_LEFT="ROLL_LEFT",r.ROLL_RIGHT="ROLL_RIGHT",r.YAW_LEFT="YAW_LEFT",r.YAW_RIGHT="YAW_RIGHT",r.TURN_ROUND="TURN_ROUND",r.NONE="NONE",r))(Re||{});/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ep="184",Yr={ROTATE:0,DOLLY:1,PAN:2},qr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},OS=0,ux=1,PS=2,Xc=1,FS=2,nl=3,Ss=0,li=1,wa=2,Da=0,Zr=1,fx=2,dx=3,hx=4,IS=5,Xs=100,zS=101,BS=102,HS=103,GS=104,VS=200,kS=201,jS=202,WS=203,lh=204,ch=205,XS=206,qS=207,YS=208,ZS=209,KS=210,QS=211,JS=212,$S=213,eb=214,uh=0,fh=1,dh=2,Qr=3,hh=4,ph=5,mh=6,gh=7,S_=0,tb=1,nb=2,na=0,b_=1,M_=2,E_=3,T_=4,A_=5,R_=6,C_=7,w_=300,Qs=301,Jr=302,Ad=303,Rd=304,uu=306,xh=1e3,Na=1001,_h=1002,Gn=1003,ib=1004,yc=1005,Zn=1006,Cd=1007,Zs=1008,Li=1009,N_=1010,D_=1011,al=1012,tp=1013,aa=1014,ea=1015,La=1016,np=1017,ip=1018,sl=1020,U_=35902,L_=35899,O_=1021,P_=1022,Wi=1023,Oa=1026,Ks=1027,F_=1028,ap=1029,Js=1030,sp=1031,rp=1033,qc=33776,Yc=33777,Zc=33778,Kc=33779,vh=35840,yh=35841,Sh=35842,bh=35843,Mh=36196,Eh=37492,Th=37496,Ah=37488,Rh=37489,eu=37490,Ch=37491,wh=37808,Nh=37809,Dh=37810,Uh=37811,Lh=37812,Oh=37813,Ph=37814,Fh=37815,Ih=37816,zh=37817,Bh=37818,Hh=37819,Gh=37820,Vh=37821,kh=36492,jh=36494,Wh=36495,Xh=36283,qh=36284,tu=36285,Yh=36286,ab=3200,px=0,sb=1,vs="",Di="srgb",nu="srgb-linear",iu="linear",$t="srgb",Ur=7680,mx=519,rb=512,ob=513,lb=514,op=515,cb=516,ub=517,lp=518,fb=519,gx=35044,xx="300 es",ta=2e3,au=2001;function db(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function su(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function hb(){const r=su("canvas");return r.style.display="block",r}const _x={};function vx(...r){const e="THREE."+r.shift();console.log(e,...r)}function I_(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ht(...r){r=I_(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...r)}}function Ht(...r){r=I_(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...r)}}function Zh(...r){const e=r.join(" ");e in _x||(_x[e]=!0,ht(...r))}function pb(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const mb={[uh]:fh,[dh]:mh,[hh]:gh,[Qr]:ph,[fh]:uh,[mh]:dh,[gh]:hh,[ph]:Qr};class Ms{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qc=Math.PI/180,Kh=180/Math.PI;function rl(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Wn[r&255]+Wn[r>>8&255]+Wn[r>>16&255]+Wn[r>>24&255]+"-"+Wn[e&255]+Wn[e>>8&255]+"-"+Wn[e>>16&15|64]+Wn[e>>24&255]+"-"+Wn[i&63|128]+Wn[i>>8&255]+"-"+Wn[i>>16&255]+Wn[i>>24&255]+Wn[s&255]+Wn[s>>8&255]+Wn[s>>16&255]+Wn[s>>24&255]).toLowerCase()}function Ut(r,e,i){return Math.max(e,Math.min(i,r))}function gb(r,e){return(r%e+e)%e}function wd(r,e,i){return(1-i)*r+i*e}function Yo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ri(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const xb={DEG2RAD:Qc},gp=class gp{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ut(this.x,e.x,i.x),this.y=Ut(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ut(this.x,e,i),this.y=Ut(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ut(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ut(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*s-f*l+e.x,this.y=c*l+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};gp.prototype.isVector2=!0;let Rt=gp;class bs{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,f,p){let m=s[l+0],h=s[l+1],g=s[l+2],_=s[l+3],x=c[f+0],M=c[f+1],E=c[f+2],U=c[f+3];if(_!==U||m!==x||h!==M||g!==E){let b=m*x+h*M+g*E+_*U;b<0&&(x=-x,M=-M,E=-E,U=-U,b=-b);let y=1-p;if(b<.9995){const F=Math.acos(b),G=Math.sin(F);y=Math.sin(y*F)/G,p=Math.sin(p*F)/G,m=m*y+x*p,h=h*y+M*p,g=g*y+E*p,_=_*y+U*p}else{m=m*y+x*p,h=h*y+M*p,g=g*y+E*p,_=_*y+U*p;const F=1/Math.sqrt(m*m+h*h+g*g+_*_);m*=F,h*=F,g*=F,_*=F}}e[i]=m,e[i+1]=h,e[i+2]=g,e[i+3]=_}static multiplyQuaternionsFlat(e,i,s,l,c,f){const p=s[l],m=s[l+1],h=s[l+2],g=s[l+3],_=c[f],x=c[f+1],M=c[f+2],E=c[f+3];return e[i]=p*E+g*_+m*M-h*x,e[i+1]=m*E+g*x+h*_-p*M,e[i+2]=h*E+g*M+p*x-m*_,e[i+3]=g*E-p*_-m*x-h*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,f=e._order,p=Math.cos,m=Math.sin,h=p(s/2),g=p(l/2),_=p(c/2),x=m(s/2),M=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=x*g*_+h*M*E,this._y=h*M*_-x*g*E,this._z=h*g*E+x*M*_,this._w=h*g*_-x*M*E;break;case"YXZ":this._x=x*g*_+h*M*E,this._y=h*M*_-x*g*E,this._z=h*g*E-x*M*_,this._w=h*g*_+x*M*E;break;case"ZXY":this._x=x*g*_-h*M*E,this._y=h*M*_+x*g*E,this._z=h*g*E+x*M*_,this._w=h*g*_-x*M*E;break;case"ZYX":this._x=x*g*_-h*M*E,this._y=h*M*_+x*g*E,this._z=h*g*E-x*M*_,this._w=h*g*_+x*M*E;break;case"YZX":this._x=x*g*_+h*M*E,this._y=h*M*_+x*g*E,this._z=h*g*E-x*M*_,this._w=h*g*_-x*M*E;break;case"XZY":this._x=x*g*_-h*M*E,this._y=h*M*_-x*g*E,this._z=h*g*E+x*M*_,this._w=h*g*_+x*M*E;break;default:ht("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],f=i[1],p=i[5],m=i[9],h=i[2],g=i[6],_=i[10],x=s+p+_;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-m)*M,this._y=(c-h)*M,this._z=(f-l)*M}else if(s>p&&s>_){const M=2*Math.sqrt(1+s-p-_);this._w=(g-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+h)/M}else if(p>_){const M=2*Math.sqrt(1+p-s-_);this._w=(c-h)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+_-s-p);this._w=(f-l)/M,this._x=(c+h)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,f=e._w,p=i._x,m=i._y,h=i._z,g=i._w;return this._x=s*g+f*p+l*h-c*m,this._y=l*g+f*m+c*p-s*h,this._z=c*g+f*h+s*m-l*p,this._w=f*g-s*p-l*m-c*h,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,f=e._w,p=this.dot(e);p<0&&(s=-s,l=-l,c=-c,f=-f,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),g=Math.sin(h);m=Math.sin(m*h)/g,i=Math.sin(i*h)/g,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const xp=class xp{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(yx.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(yx.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,f=e.y,p=e.z,m=e.w,h=2*(f*l-p*s),g=2*(p*i-c*l),_=2*(c*s-f*i);return this.x=i+m*h+f*_-p*g,this.y=s+m*g+p*h-c*_,this.z=l+m*_+c*g-f*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ut(this.x,e.x,i.x),this.y=Ut(this.y,e.y,i.y),this.z=Ut(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ut(this.x,e,i),this.y=Ut(this.y,e,i),this.z=Ut(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ut(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,f=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*f-s*m,this.z=s*p-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Nd.copy(this).projectOnVector(e),this.sub(Nd)}reflect(e){return this.sub(Nd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ut(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};xp.prototype.isVector3=!0;let ce=xp;const Nd=new ce,yx=new bs,_p=class _p{constructor(e,i,s,l,c,f,p,m,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,p,m,h)}set(e,i,s,l,c,f,p,m,h){const g=this.elements;return g[0]=e,g[1]=l,g[2]=p,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=f,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],p=s[3],m=s[6],h=s[1],g=s[4],_=s[7],x=s[2],M=s[5],E=s[8],U=l[0],b=l[3],y=l[6],F=l[1],G=l[4],z=l[7],K=l[2],B=l[5],j=l[8];return c[0]=f*U+p*F+m*K,c[3]=f*b+p*G+m*B,c[6]=f*y+p*z+m*j,c[1]=h*U+g*F+_*K,c[4]=h*b+g*G+_*B,c[7]=h*y+g*z+_*j,c[2]=x*U+M*F+E*K,c[5]=x*b+M*G+E*B,c[8]=x*y+M*z+E*j,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],g=e[8];return i*f*g-i*p*h-s*c*g+s*p*m+l*c*h-l*f*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],g=e[8],_=g*f-p*h,x=p*m-g*c,M=h*c-f*m,E=i*_+s*x+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const U=1/E;return e[0]=_*U,e[1]=(l*h-g*s)*U,e[2]=(p*s-l*f)*U,e[3]=x*U,e[4]=(g*i-l*m)*U,e[5]=(l*c-p*i)*U,e[6]=M*U,e[7]=(s*m-h*i)*U,e[8]=(f*i-s*c)*U,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,f,p){const m=Math.cos(c),h=Math.sin(c);return this.set(s*m,s*h,-s*(m*f+h*p)+f+e,-l*h,l*m,-l*(-h*f+m*p)+p+i,0,0,1),this}scale(e,i){return this.premultiply(Dd.makeScale(e,i)),this}rotate(e){return this.premultiply(Dd.makeRotation(-e)),this}translate(e,i){return this.premultiply(Dd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};_p.prototype.isMatrix3=!0;let _t=_p;const Dd=new _t,Sx=new _t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bx=new _t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _b(){const r={enabled:!0,workingColorSpace:nu,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===$t&&(l.r=Ua(l.r),l.g=Ua(l.g),l.b=Ua(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===$t&&(l.r=Kr(l.r),l.g=Kr(l.g),l.b=Kr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===vs?iu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Zh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Zh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[nu]:{primaries:e,whitePoint:s,transfer:iu,toXYZ:Sx,fromXYZ:bx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Di},outputColorSpaceConfig:{drawingBufferColorSpace:Di}},[Di]:{primaries:e,whitePoint:s,transfer:$t,toXYZ:Sx,fromXYZ:bx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Di}}}),r}const Bt=_b();function Ua(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Kr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Lr;class vb{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Lr===void 0&&(Lr=su("canvas")),Lr.width=e.width,Lr.height=e.height;const l=Lr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Lr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=su("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Ua(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ua(i[s]/255)*255):i[s]=Ua(i[s]);return{data:i,width:e.width,height:e.height}}else return ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yb=0;class cp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yb++}),this.uuid=rl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,p=l.length;f<p;f++)l[f].isDataTexture?c.push(Ud(l[f].image)):c.push(Ud(l[f]))}else c=Ud(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Ud(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?vb.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ht("Texture: Unable to serialize Texture."),{})}let Sb=0;const Ld=new ce;class Jn extends Ms{constructor(e=Jn.DEFAULT_IMAGE,i=Jn.DEFAULT_MAPPING,s=Na,l=Na,c=Zn,f=Zs,p=Wi,m=Li,h=Jn.DEFAULT_ANISOTROPY,g=vs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sb++}),this.uuid=rl(),this.name="",this.source=new cp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ld).x}get height(){return this.source.getSize(Ld).y}get depth(){return this.source.getSize(Ld).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){ht(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ht(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==w_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xh:e.x=e.x-Math.floor(e.x);break;case Na:e.x=e.x<0?0:1;break;case _h:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xh:e.y=e.y-Math.floor(e.y);break;case Na:e.y=e.y<0?0:1;break;case _h:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jn.DEFAULT_IMAGE=null;Jn.DEFAULT_MAPPING=w_;Jn.DEFAULT_ANISOTROPY=1;const vp=class vp{constructor(e=0,i=0,s=0,l=1){this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,h=m[0],g=m[4],_=m[8],x=m[1],M=m[5],E=m[9],U=m[2],b=m[6],y=m[10];if(Math.abs(g-x)<.01&&Math.abs(_-U)<.01&&Math.abs(E-b)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+U)<.1&&Math.abs(E+b)<.1&&Math.abs(h+M+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const G=(h+1)/2,z=(M+1)/2,K=(y+1)/2,B=(g+x)/4,j=(_+U)/4,N=(E+b)/4;return G>z&&G>K?G<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(G),l=B/s,c=j/s):z>K?z<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(z),s=B/l,c=N/l):K<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(K),s=j/c,l=N/c),this.set(s,l,c,i),this}let F=Math.sqrt((b-E)*(b-E)+(_-U)*(_-U)+(x-g)*(x-g));return Math.abs(F)<.001&&(F=1),this.x=(b-E)/F,this.y=(_-U)/F,this.z=(x-g)/F,this.w=Math.acos((h+M+y-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ut(this.x,e.x,i.x),this.y=Ut(this.y,e.y,i.y),this.z=Ut(this.z,e.z,i.z),this.w=Ut(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ut(this.x,e,i),this.y=Ut(this.y,e,i),this.z=Ut(this.z,e,i),this.w=Ut(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ut(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};vp.prototype.isVector4=!0;let vn=vp;class bb extends Ms{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new vn(0,0,e,i),this.scissorTest=!1,this.viewport=new vn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new Jn(l),f=s.count;for(let p=0;p<f;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:Zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new cp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ia extends bb{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class z_ extends Jn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=Na,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Mb extends Jn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=Na,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const cu=class cu{constructor(e,i,s,l,c,f,p,m,h,g,_,x,M,E,U,b){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,p,m,h,g,_,x,M,E,U,b)}set(e,i,s,l,c,f,p,m,h,g,_,x,M,E,U,b){const y=this.elements;return y[0]=e,y[4]=i,y[8]=s,y[12]=l,y[1]=c,y[5]=f,y[9]=p,y[13]=m,y[2]=h,y[6]=g,y[10]=_,y[14]=x,y[3]=M,y[7]=E,y[11]=U,y[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cu().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Or.setFromMatrixColumn(e,0).length(),c=1/Or.setFromMatrixColumn(e,1).length(),f=1/Or.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,f=Math.cos(s),p=Math.sin(s),m=Math.cos(l),h=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const x=f*g,M=f*_,E=p*g,U=p*_;i[0]=m*g,i[4]=-m*_,i[8]=h,i[1]=M+E*h,i[5]=x-U*h,i[9]=-p*m,i[2]=U-x*h,i[6]=E+M*h,i[10]=f*m}else if(e.order==="YXZ"){const x=m*g,M=m*_,E=h*g,U=h*_;i[0]=x+U*p,i[4]=E*p-M,i[8]=f*h,i[1]=f*_,i[5]=f*g,i[9]=-p,i[2]=M*p-E,i[6]=U+x*p,i[10]=f*m}else if(e.order==="ZXY"){const x=m*g,M=m*_,E=h*g,U=h*_;i[0]=x-U*p,i[4]=-f*_,i[8]=E+M*p,i[1]=M+E*p,i[5]=f*g,i[9]=U-x*p,i[2]=-f*h,i[6]=p,i[10]=f*m}else if(e.order==="ZYX"){const x=f*g,M=f*_,E=p*g,U=p*_;i[0]=m*g,i[4]=E*h-M,i[8]=x*h+U,i[1]=m*_,i[5]=U*h+x,i[9]=M*h-E,i[2]=-h,i[6]=p*m,i[10]=f*m}else if(e.order==="YZX"){const x=f*m,M=f*h,E=p*m,U=p*h;i[0]=m*g,i[4]=U-x*_,i[8]=E*_+M,i[1]=_,i[5]=f*g,i[9]=-p*g,i[2]=-h*g,i[6]=M*_+E,i[10]=x-U*_}else if(e.order==="XZY"){const x=f*m,M=f*h,E=p*m,U=p*h;i[0]=m*g,i[4]=-_,i[8]=h*g,i[1]=x*_+U,i[5]=f*g,i[9]=M*_-E,i[2]=E*_-M,i[6]=p*g,i[10]=U*_+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Eb,e,Tb)}lookAt(e,i,s){const l=this.elements;return _i.subVectors(e,i),_i.lengthSq()===0&&(_i.z=1),_i.normalize(),ds.crossVectors(s,_i),ds.lengthSq()===0&&(Math.abs(s.z)===1?_i.x+=1e-4:_i.z+=1e-4,_i.normalize(),ds.crossVectors(s,_i)),ds.normalize(),Sc.crossVectors(_i,ds),l[0]=ds.x,l[4]=Sc.x,l[8]=_i.x,l[1]=ds.y,l[5]=Sc.y,l[9]=_i.y,l[2]=ds.z,l[6]=Sc.z,l[10]=_i.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],p=s[4],m=s[8],h=s[12],g=s[1],_=s[5],x=s[9],M=s[13],E=s[2],U=s[6],b=s[10],y=s[14],F=s[3],G=s[7],z=s[11],K=s[15],B=l[0],j=l[4],N=l[8],k=l[12],J=l[1],Z=l[5],te=l[9],_e=l[13],ae=l[2],q=l[6],H=l[10],D=l[14],w=l[3],R=l[7],O=l[11],T=l[15];return c[0]=f*B+p*J+m*ae+h*w,c[4]=f*j+p*Z+m*q+h*R,c[8]=f*N+p*te+m*H+h*O,c[12]=f*k+p*_e+m*D+h*T,c[1]=g*B+_*J+x*ae+M*w,c[5]=g*j+_*Z+x*q+M*R,c[9]=g*N+_*te+x*H+M*O,c[13]=g*k+_*_e+x*D+M*T,c[2]=E*B+U*J+b*ae+y*w,c[6]=E*j+U*Z+b*q+y*R,c[10]=E*N+U*te+b*H+y*O,c[14]=E*k+U*_e+b*D+y*T,c[3]=F*B+G*J+z*ae+K*w,c[7]=F*j+G*Z+z*q+K*R,c[11]=F*N+G*te+z*H+K*O,c[15]=F*k+G*_e+z*D+K*T,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],f=e[1],p=e[5],m=e[9],h=e[13],g=e[2],_=e[6],x=e[10],M=e[14],E=e[3],U=e[7],b=e[11],y=e[15],F=m*M-h*x,G=p*M-h*_,z=p*x-m*_,K=f*M-h*g,B=f*x-m*g,j=f*_-p*g;return i*(U*F-b*G+y*z)-s*(E*F-b*K+y*B)+l*(E*G-U*K+y*j)-c*(E*z-U*B+b*j)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],h=e[7],g=e[8],_=e[9],x=e[10],M=e[11],E=e[12],U=e[13],b=e[14],y=e[15],F=i*p-s*f,G=i*m-l*f,z=i*h-c*f,K=s*m-l*p,B=s*h-c*p,j=l*h-c*m,N=g*U-_*E,k=g*b-x*E,J=g*y-M*E,Z=_*b-x*U,te=_*y-M*U,_e=x*y-M*b,ae=F*_e-G*te+z*Z+K*J-B*k+j*N;if(ae===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/ae;return e[0]=(p*_e-m*te+h*Z)*q,e[1]=(l*te-s*_e-c*Z)*q,e[2]=(U*j-b*B+y*K)*q,e[3]=(x*B-_*j-M*K)*q,e[4]=(m*J-f*_e-h*k)*q,e[5]=(i*_e-l*J+c*k)*q,e[6]=(b*z-E*j-y*G)*q,e[7]=(g*j-x*z+M*G)*q,e[8]=(f*te-p*J+h*N)*q,e[9]=(s*J-i*te-c*N)*q,e[10]=(E*B-U*z+y*F)*q,e[11]=(_*z-g*B-M*F)*q,e[12]=(p*k-f*Z-m*N)*q,e[13]=(i*Z-s*k+l*N)*q,e[14]=(U*G-E*K-b*F)*q,e[15]=(g*K-_*G+x*F)*q,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=e.x,p=e.y,m=e.z,h=c*f,g=c*p;return this.set(h*f+s,h*p-l*m,h*m+l*p,0,h*p+l*m,g*p+s,g*m-l*f,0,h*m-l*p,g*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,f){return this.set(1,s,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,f=i._y,p=i._z,m=i._w,h=c+c,g=f+f,_=p+p,x=c*h,M=c*g,E=c*_,U=f*g,b=f*_,y=p*_,F=m*h,G=m*g,z=m*_,K=s.x,B=s.y,j=s.z;return l[0]=(1-(U+y))*K,l[1]=(M+z)*K,l[2]=(E-G)*K,l[3]=0,l[4]=(M-z)*B,l[5]=(1-(x+y))*B,l[6]=(b+F)*B,l[7]=0,l[8]=(E+G)*j,l[9]=(b-F)*j,l[10]=(1-(x+U))*j,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let f=Or.set(l[0],l[1],l[2]).length();const p=Or.set(l[4],l[5],l[6]).length(),m=Or.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Gi.copy(this);const h=1/f,g=1/p,_=1/m;return Gi.elements[0]*=h,Gi.elements[1]*=h,Gi.elements[2]*=h,Gi.elements[4]*=g,Gi.elements[5]*=g,Gi.elements[6]*=g,Gi.elements[8]*=_,Gi.elements[9]*=_,Gi.elements[10]*=_,i.setFromRotationMatrix(Gi),s.x=f,s.y=p,s.z=m,this}makePerspective(e,i,s,l,c,f,p=ta,m=!1){const h=this.elements,g=2*c/(i-e),_=2*c/(s-l),x=(i+e)/(i-e),M=(s+l)/(s-l);let E,U;if(m)E=c/(f-c),U=f*c/(f-c);else if(p===ta)E=-(f+c)/(f-c),U=-2*f*c/(f-c);else if(p===au)E=-f/(f-c),U=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=g,h[4]=0,h[8]=x,h[12]=0,h[1]=0,h[5]=_,h[9]=M,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=U,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,s,l,c,f,p=ta,m=!1){const h=this.elements,g=2/(i-e),_=2/(s-l),x=-(i+e)/(i-e),M=-(s+l)/(s-l);let E,U;if(m)E=1/(f-c),U=f/(f-c);else if(p===ta)E=-2/(f-c),U=-(f+c)/(f-c);else if(p===au)E=-1/(f-c),U=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=g,h[4]=0,h[8]=0,h[12]=x,h[1]=0,h[5]=_,h[9]=0,h[13]=M,h[2]=0,h[6]=0,h[10]=E,h[14]=U,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};cu.prototype.isMatrix4=!0;let Rn=cu;const Or=new ce,Gi=new Rn,Eb=new ce(0,0,0),Tb=new ce(1,1,1),ds=new ce,Sc=new ce,_i=new ce,Mx=new Rn,Ex=new bs;class $s{constructor(e=0,i=0,s=0,l=$s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],f=l[4],p=l[8],m=l[1],h=l[5],g=l[9],_=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Ut(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(p,M),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-f,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ut(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,h));break;case"YZX":this._z=Math.asin(Ut(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(p,M));break;case"XZY":this._z=Math.asin(-Ut(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-g,M),this._y=0);break;default:ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return Mx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mx,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Ex.setFromEuler(this),this.setFromQuaternion(Ex,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$s.DEFAULT_ORDER="XYZ";let B_=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ab=0;const Tx=new ce,Pr=new bs,Ea=new Rn,bc=new ce,Zo=new ce,Rb=new ce,Cb=new bs,Ax=new ce(1,0,0),Rx=new ce(0,1,0),Cx=new ce(0,0,1),wx={type:"added"},wb={type:"removed"},Fr={type:"childadded",child:null},Od={type:"childremoved",child:null};class $n extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ab++}),this.uuid=rl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$n.DEFAULT_UP.clone();const e=new ce,i=new $s,s=new bs,l=new ce(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Rn},normalMatrix:{value:new _t}}),this.matrix=new Rn,this.matrixWorld=new Rn,this.matrixAutoUpdate=$n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new B_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Pr.setFromAxisAngle(e,i),this.quaternion.multiply(Pr),this}rotateOnWorldAxis(e,i){return Pr.setFromAxisAngle(e,i),this.quaternion.premultiply(Pr),this}rotateX(e){return this.rotateOnAxis(Ax,e)}rotateY(e){return this.rotateOnAxis(Rx,e)}rotateZ(e){return this.rotateOnAxis(Cx,e)}translateOnAxis(e,i){return Tx.copy(e).applyQuaternion(this.quaternion),this.position.add(Tx.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Ax,e)}translateY(e){return this.translateOnAxis(Rx,e)}translateZ(e){return this.translateOnAxis(Cx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ea.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?bc.copy(e):bc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ea.lookAt(Zo,bc,this.up):Ea.lookAt(bc,Zo,this.up),this.quaternion.setFromRotationMatrix(Ea),l&&(Ea.extractRotation(l.matrixWorld),Pr.setFromRotationMatrix(Ea),this.quaternion.premultiply(Pr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ht("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wx),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null):Ht("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(wb),Od.child=e,this.dispatchEvent(Od),Od.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ea.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ea.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ea),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wx),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,e,Rb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,Cb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,g=m.length;h<g;h++){const _=m[h];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=f(e.geometries),m=f(e.materials),h=f(e.textures),g=f(e.images),_=f(e.shapes),x=f(e.skeletons),M=f(e.animations),E=f(e.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),h.length>0&&(s.textures=h),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),x.length>0&&(s.skeletons=x),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(p){const m=[];for(const h in p){const g=p[h];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}$n.DEFAULT_UP=new ce(0,1,0);$n.DEFAULT_MATRIX_AUTO_UPDATE=!0;$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Mc extends $n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Nb={type:"move"};class Pd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ce,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ce),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ce,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ce,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,f=null;const p=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){f=!0;for(const U of e.hand.values()){const b=i.getJointPose(U,s),y=this._getHandJoint(h,U);b!==null&&(y.matrix.fromArray(b.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=b.radius),y.visible=b!==null}const g=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],x=g.position.distanceTo(_.position),M=.02,E=.005;h.inputState.pinching&&x>M+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&x<=M-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(Nb)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Mc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const H_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hs={h:0,s:0,l:0},Ec={h:0,s:0,l:0};function Fd(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class Lt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Bt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Bt.workingColorSpace){return this.r=e,this.g=i,this.b=s,Bt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Bt.workingColorSpace){if(e=gb(e,1),i=Ut(i,0,1),s=Ut(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Fd(f,c,e+1/3),this.g=Fd(f,c,e),this.b=Fd(f,c,e-1/3)}return Bt.colorSpaceToWorking(this,l),this}setStyle(e,i=Di){function s(c){c!==void 0&&parseFloat(c)<1&&ht("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],p=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ht("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);ht("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Di){const s=H_[e.toLowerCase()];return s!==void 0?this.setHex(s,i):ht("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ua(e.r),this.g=Ua(e.g),this.b=Ua(e.b),this}copyLinearToSRGB(e){return this.r=Kr(e.r),this.g=Kr(e.g),this.b=Kr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Di){return Bt.workingToColorSpace(Xn.copy(this),e),Math.round(Ut(Xn.r*255,0,255))*65536+Math.round(Ut(Xn.g*255,0,255))*256+Math.round(Ut(Xn.b*255,0,255))}getHexString(e=Di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Bt.workingColorSpace){Bt.workingToColorSpace(Xn.copy(this),i);const s=Xn.r,l=Xn.g,c=Xn.b,f=Math.max(s,l,c),p=Math.min(s,l,c);let m,h;const g=(p+f)/2;if(p===f)m=0,h=0;else{const _=f-p;switch(h=g<=.5?_/(f+p):_/(2-f-p),f){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return e.h=m,e.s=h,e.l=g,e}getRGB(e,i=Bt.workingColorSpace){return Bt.workingToColorSpace(Xn.copy(this),i),e.r=Xn.r,e.g=Xn.g,e.b=Xn.b,e}getStyle(e=Di){Bt.workingToColorSpace(Xn.copy(this),e);const i=Xn.r,s=Xn.g,l=Xn.b;return e!==Di?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(hs),this.setHSL(hs.h+e,hs.s+i,hs.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(hs),e.getHSL(Ec);const s=wd(hs.h,Ec.h,i),l=wd(hs.s,Ec.s,i),c=wd(hs.l,Ec.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xn=new Lt;Lt.NAMES=H_;class Db extends $n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $s,this.environmentIntensity=1,this.environmentRotation=new $s,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Vi=new ce,Ta=new ce,Id=new ce,Aa=new ce,Ir=new ce,zr=new ce,Nx=new ce,zd=new ce,Bd=new ce,Hd=new ce,Gd=new vn,Vd=new vn,kd=new vn;class ji{constructor(e=new ce,i=new ce,s=new ce){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Vi.subVectors(e,i),l.cross(Vi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Vi.subVectors(l,i),Ta.subVectors(s,i),Id.subVectors(e,i);const f=Vi.dot(Vi),p=Vi.dot(Ta),m=Vi.dot(Id),h=Ta.dot(Ta),g=Ta.dot(Id),_=f*h-p*p;if(_===0)return c.set(0,0,0),null;const x=1/_,M=(h*m-p*g)*x,E=(f*g-p*m)*x;return c.set(1-M-E,E,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Aa)===null?!1:Aa.x>=0&&Aa.y>=0&&Aa.x+Aa.y<=1}static getInterpolation(e,i,s,l,c,f,p,m){return this.getBarycoord(e,i,s,l,Aa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Aa.x),m.addScaledVector(f,Aa.y),m.addScaledVector(p,Aa.z),m)}static getInterpolatedAttribute(e,i,s,l,c,f){return Gd.setScalar(0),Vd.setScalar(0),kd.setScalar(0),Gd.fromBufferAttribute(e,i),Vd.fromBufferAttribute(e,s),kd.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Gd,c.x),f.addScaledVector(Vd,c.y),f.addScaledVector(kd,c.z),f}static isFrontFacing(e,i,s,l){return Vi.subVectors(s,i),Ta.subVectors(e,i),Vi.cross(Ta).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vi.subVectors(this.c,this.b),Ta.subVectors(this.a,this.b),Vi.cross(Ta).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ji.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return ji.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return ji.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return ji.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ji.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let f,p;Ir.subVectors(l,s),zr.subVectors(c,s),zd.subVectors(e,s);const m=Ir.dot(zd),h=zr.dot(zd);if(m<=0&&h<=0)return i.copy(s);Bd.subVectors(e,l);const g=Ir.dot(Bd),_=zr.dot(Bd);if(g>=0&&_<=g)return i.copy(l);const x=m*_-g*h;if(x<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(s).addScaledVector(Ir,f);Hd.subVectors(e,c);const M=Ir.dot(Hd),E=zr.dot(Hd);if(E>=0&&M<=E)return i.copy(c);const U=M*h-m*E;if(U<=0&&h>=0&&E<=0)return p=h/(h-E),i.copy(s).addScaledVector(zr,p);const b=g*E-M*_;if(b<=0&&_-g>=0&&M-E>=0)return Nx.subVectors(c,l),p=(_-g)/(_-g+(M-E)),i.copy(l).addScaledVector(Nx,p);const y=1/(b+U+x);return f=U*y,p=x*y,i.copy(s).addScaledVector(Ir,f).addScaledVector(zr,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ol{constructor(e=new ce(1/0,1/0,1/0),i=new ce(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(ki.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(ki.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=ki.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,p=c.count;f<p;f++)e.isMesh===!0?e.getVertexPosition(f,ki):ki.fromBufferAttribute(c,f),ki.applyMatrix4(e.matrixWorld),this.expandByPoint(ki);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Tc.copy(s.boundingBox)),Tc.applyMatrix4(e.matrixWorld),this.union(Tc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ki),ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ko),Ac.subVectors(this.max,Ko),Br.subVectors(e.a,Ko),Hr.subVectors(e.b,Ko),Gr.subVectors(e.c,Ko),ps.subVectors(Hr,Br),ms.subVectors(Gr,Hr),Vs.subVectors(Br,Gr);let i=[0,-ps.z,ps.y,0,-ms.z,ms.y,0,-Vs.z,Vs.y,ps.z,0,-ps.x,ms.z,0,-ms.x,Vs.z,0,-Vs.x,-ps.y,ps.x,0,-ms.y,ms.x,0,-Vs.y,Vs.x,0];return!jd(i,Br,Hr,Gr,Ac)||(i=[1,0,0,0,1,0,0,0,1],!jd(i,Br,Hr,Gr,Ac))?!1:(Rc.crossVectors(ps,ms),i=[Rc.x,Rc.y,Rc.z],jd(i,Br,Hr,Gr,Ac))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ra[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ra[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ra[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ra[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ra[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ra[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ra[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ra[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ra),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ra=[new ce,new ce,new ce,new ce,new ce,new ce,new ce,new ce],ki=new ce,Tc=new ol,Br=new ce,Hr=new ce,Gr=new ce,ps=new ce,ms=new ce,Vs=new ce,Ko=new ce,Ac=new ce,Rc=new ce,ks=new ce;function jd(r,e,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){ks.fromArray(r,c);const p=l.x*Math.abs(ks.x)+l.y*Math.abs(ks.y)+l.z*Math.abs(ks.z),m=e.dot(ks),h=i.dot(ks),g=s.dot(ks);if(Math.max(-Math.max(m,h,g),Math.min(m,h,g))>p)return!1}return!0}const An=new ce,Cc=new Rt;let Ub=0;class Oi extends Ms{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ub++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=gx,this.updateRanges=[],this.gpuType=ea,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Cc.fromBufferAttribute(this,i),Cc.applyMatrix3(e),this.setXY(i,Cc.x,Cc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)An.fromBufferAttribute(this,i),An.applyMatrix3(e),this.setXYZ(i,An.x,An.y,An.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)An.fromBufferAttribute(this,i),An.applyMatrix4(e),this.setXYZ(i,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)An.fromBufferAttribute(this,i),An.applyNormalMatrix(e),this.setXYZ(i,An.x,An.y,An.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)An.fromBufferAttribute(this,i),An.transformDirection(e),this.setXYZ(i,An.x,An.y,An.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Yo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=ri(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Yo(i,this.array)),i}setX(e,i){return this.normalized&&(i=ri(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Yo(i,this.array)),i}setY(e,i){return this.normalized&&(i=ri(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Yo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=ri(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Yo(i,this.array)),i}setW(e,i){return this.normalized&&(i=ri(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=ri(i,this.array),s=ri(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=ri(i,this.array),s=ri(s,this.array),l=ri(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=ri(i,this.array),s=ri(s,this.array),l=ri(l,this.array),c=ri(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gx&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class G_ extends Oi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class V_ extends Oi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Si extends Oi{constructor(e,i,s){super(new Float32Array(e),i,s)}}const Lb=new ol,Qo=new ce,Wd=new ce;class fu{constructor(e=new ce,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):Lb.setFromPoints(e).getCenter(s);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qo.subVectors(e,this.center);const i=Qo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Qo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qo.copy(e.center).add(Wd)),this.expandByPoint(Qo.copy(e.center).sub(Wd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Ob=0;const Ni=new Rn,Xd=new $n,Vr=new ce,vi=new ol,Jo=new ol,Pn=new ce;class Pi extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ob++}),this.uuid=rl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(db(e)?V_:G_)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new _t().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ni.makeRotationFromQuaternion(e),this.applyMatrix4(Ni),this}rotateX(e){return Ni.makeRotationX(e),this.applyMatrix4(Ni),this}rotateY(e){return Ni.makeRotationY(e),this.applyMatrix4(Ni),this}rotateZ(e){return Ni.makeRotationZ(e),this.applyMatrix4(Ni),this}translate(e,i,s){return Ni.makeTranslation(e,i,s),this.applyMatrix4(Ni),this}scale(e,i,s){return Ni.makeScale(e,i,s),this.applyMatrix4(Ni),this}lookAt(e){return Xd.lookAt(e),Xd.updateMatrix(),this.applyMatrix4(Xd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vr).negate(),this.translate(Vr.x,Vr.y,Vr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Si(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ol);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ce(-1/0,-1/0,-1/0),new ce(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];vi.setFromBufferAttribute(c),this.morphTargetsRelative?(Pn.addVectors(this.boundingBox.min,vi.min),this.boundingBox.expandByPoint(Pn),Pn.addVectors(this.boundingBox.max,vi.max),this.boundingBox.expandByPoint(Pn)):(this.boundingBox.expandByPoint(vi.min),this.boundingBox.expandByPoint(vi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fu);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ce,1/0);return}if(e){const s=this.boundingSphere.center;if(vi.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const p=i[c];Jo.setFromBufferAttribute(p),this.morphTargetsRelative?(Pn.addVectors(vi.min,Jo.min),vi.expandByPoint(Pn),Pn.addVectors(vi.max,Jo.max),vi.expandByPoint(Pn)):(vi.expandByPoint(Jo.min),vi.expandByPoint(Jo.max))}vi.getCenter(s);let l=0;for(let c=0,f=e.count;c<f;c++)Pn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(Pn));if(i)for(let c=0,f=i.length;c<f;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,g=p.count;h<g;h++)Pn.fromBufferAttribute(p,h),m&&(Vr.fromBufferAttribute(e,h),Pn.add(Vr)),l=Math.max(l,s.distanceToSquared(Pn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oi(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),p=[],m=[];for(let N=0;N<s.count;N++)p[N]=new ce,m[N]=new ce;const h=new ce,g=new ce,_=new ce,x=new Rt,M=new Rt,E=new Rt,U=new ce,b=new ce;function y(N,k,J){h.fromBufferAttribute(s,N),g.fromBufferAttribute(s,k),_.fromBufferAttribute(s,J),x.fromBufferAttribute(c,N),M.fromBufferAttribute(c,k),E.fromBufferAttribute(c,J),g.sub(h),_.sub(h),M.sub(x),E.sub(x);const Z=1/(M.x*E.y-E.x*M.y);isFinite(Z)&&(U.copy(g).multiplyScalar(E.y).addScaledVector(_,-M.y).multiplyScalar(Z),b.copy(_).multiplyScalar(M.x).addScaledVector(g,-E.x).multiplyScalar(Z),p[N].add(U),p[k].add(U),p[J].add(U),m[N].add(b),m[k].add(b),m[J].add(b))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let N=0,k=F.length;N<k;++N){const J=F[N],Z=J.start,te=J.count;for(let _e=Z,ae=Z+te;_e<ae;_e+=3)y(e.getX(_e+0),e.getX(_e+1),e.getX(_e+2))}const G=new ce,z=new ce,K=new ce,B=new ce;function j(N){K.fromBufferAttribute(l,N),B.copy(K);const k=p[N];G.copy(k),G.sub(K.multiplyScalar(K.dot(k))).normalize(),z.crossVectors(B,k);const Z=z.dot(m[N])<0?-1:1;f.setXYZW(N,G.x,G.y,G.z,Z)}for(let N=0,k=F.length;N<k;++N){const J=F[N],Z=J.start,te=J.count;for(let _e=Z,ae=Z+te;_e<ae;_e+=3)j(e.getX(_e+0)),j(e.getX(_e+1)),j(e.getX(_e+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Oi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,M=s.count;x<M;x++)s.setXYZ(x,0,0,0);const l=new ce,c=new ce,f=new ce,p=new ce,m=new ce,h=new ce,g=new ce,_=new ce;if(e)for(let x=0,M=e.count;x<M;x+=3){const E=e.getX(x+0),U=e.getX(x+1),b=e.getX(x+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,U),f.fromBufferAttribute(i,b),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),p.fromBufferAttribute(s,E),m.fromBufferAttribute(s,U),h.fromBufferAttribute(s,b),p.add(g),m.add(g),h.add(g),s.setXYZ(E,p.x,p.y,p.z),s.setXYZ(U,m.x,m.y,m.z),s.setXYZ(b,h.x,h.y,h.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Pn.fromBufferAttribute(e,i),Pn.normalize(),e.setXYZ(i,Pn.x,Pn.y,Pn.z)}toNonIndexed(){function e(p,m){const h=p.array,g=p.itemSize,_=p.normalized,x=new h.constructor(m.length*g);let M=0,E=0;for(let U=0,b=m.length;U<b;U++){p.isInterleavedBufferAttribute?M=m[U]*p.data.stride+p.offset:M=m[U]*g;for(let y=0;y<g;y++)x[E++]=h[M++]}return new Oi(x,g,_)}if(this.index===null)return ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Pi,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=e(m,s);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let g=0,_=h.length;g<_;g++){const x=h[g],M=e(x,s);m.push(M)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let p=0,m=f.length;p<m;p++){const h=f[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const h=s[m];e.data.attributes[m]=h.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],g=[];for(let _=0,x=h.length;_<x;_++){const M=h[_];g.push(M.toJSON(e.data))}g.length>0&&(l[m]=g,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const h in l){const g=l[h];this.setAttribute(h,g.clone(i))}const c=e.morphAttributes;for(const h in c){const g=[],_=c[h];for(let x=0,M=_.length;x<M;x++)g.push(_[x].clone(i));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let h=0,g=f.length;h<g;h++){const _=f[h];this.addGroup(_.start,_.count,_.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Pb=0;class ll extends Ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pb++}),this.uuid=rl(),this.name="",this.type="Material",this.blending=Zr,this.side=Ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lh,this.blendDst=ch,this.blendEquation=Xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=Qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ur,this.stencilZFail=Ur,this.stencilZPass=Ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){ht(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ht(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Zr&&(s.blending=this.blending),this.side!==Ss&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==lh&&(s.blendSrc=this.blendSrc),this.blendDst!==ch&&(s.blendDst=this.blendDst),this.blendEquation!==Xs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Qr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mx&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ur&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ur&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ur&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const p in c){const m=c[p];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ca=new ce,qd=new ce,wc=new ce,gs=new ce,Yd=new ce,Nc=new ce,Zd=new ce;class up{constructor(e=new ce,i=new ce(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ca)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ca.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ca.copy(this.origin).addScaledVector(this.direction,i),Ca.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){qd.copy(e).add(i).multiplyScalar(.5),wc.copy(i).sub(e).normalize(),gs.copy(this.origin).sub(qd);const c=e.distanceTo(i)*.5,f=-this.direction.dot(wc),p=gs.dot(this.direction),m=-gs.dot(wc),h=gs.lengthSq(),g=Math.abs(1-f*f);let _,x,M,E;if(g>0)if(_=f*m-p,x=f*p-m,E=c*g,_>=0)if(x>=-E)if(x<=E){const U=1/g;_*=U,x*=U,M=_*(_+f*x+2*p)+x*(f*_+x+2*m)+h}else x=c,_=Math.max(0,-(f*x+p)),M=-_*_+x*(x+2*m)+h;else x=-c,_=Math.max(0,-(f*x+p)),M=-_*_+x*(x+2*m)+h;else x<=-E?(_=Math.max(0,-(-f*c+p)),x=_>0?-c:Math.min(Math.max(-c,-m),c),M=-_*_+x*(x+2*m)+h):x<=E?(_=0,x=Math.min(Math.max(-c,-m),c),M=x*(x+2*m)+h):(_=Math.max(0,-(f*c+p)),x=_>0?c:Math.min(Math.max(-c,-m),c),M=-_*_+x*(x+2*m)+h);else x=f>0?-c:c,_=Math.max(0,-(f*x+p)),M=-_*_+x*(x+2*m)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(qd).addScaledVector(wc,x),M}intersectSphere(e,i){Ca.subVectors(e.center,this.origin);const s=Ca.dot(this.direction),l=Ca.dot(Ca)-s*s,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),p=s-f,m=s+f;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,f,p,m;const h=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return h>=0?(s=(e.min.x-x.x)*h,l=(e.max.x-x.x)*h):(s=(e.max.x-x.x)*h,l=(e.min.x-x.x)*h),g>=0?(c=(e.min.y-x.y)*g,f=(e.max.y-x.y)*g):(c=(e.max.y-x.y)*g,f=(e.min.y-x.y)*g),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),_>=0?(p=(e.min.z-x.z)*_,m=(e.max.z-x.z)*_):(p=(e.max.z-x.z)*_,m=(e.min.z-x.z)*_),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,Ca)!==null}intersectTriangle(e,i,s,l,c){Yd.subVectors(i,e),Nc.subVectors(s,e),Zd.crossVectors(Yd,Nc);let f=this.direction.dot(Zd),p;if(f>0){if(l)return null;p=1}else if(f<0)p=-1,f=-f;else return null;gs.subVectors(this.origin,e);const m=p*this.direction.dot(Nc.crossVectors(gs,Nc));if(m<0)return null;const h=p*this.direction.dot(Yd.cross(gs));if(h<0||m+h>f)return null;const g=-p*gs.dot(Zd);return g<0?null:this.at(g/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class k_ extends ll{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $s,this.combine=S_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dx=new Rn,js=new up,Dc=new fu,Ux=new ce,Uc=new ce,Lc=new ce,Oc=new ce,Kd=new ce,Pc=new ce,Lx=new ce,Fc=new ce;class Pa extends $n{constructor(e=new Pi,i=new k_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){Pc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const g=p[m],_=c[m];g!==0&&(Kd.fromBufferAttribute(_,e),f?Pc.addScaledVector(Kd,g):Pc.addScaledVector(Kd.sub(i),g))}i.add(Pc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Dc.copy(s.boundingSphere),Dc.applyMatrix4(c),js.copy(e.ray).recast(e.near),!(Dc.containsPoint(js.origin)===!1&&(js.intersectSphere(Dc,Ux)===null||js.origin.distanceToSquared(Ux)>(e.far-e.near)**2))&&(Dx.copy(c).invert(),js.copy(e.ray).applyMatrix4(Dx),!(s.boundingBox!==null&&js.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,js)))}_computeIntersections(e,i,s){let l;const c=this.geometry,f=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,x=c.groups,M=c.drawRange;if(p!==null)if(Array.isArray(f))for(let E=0,U=x.length;E<U;E++){const b=x[E],y=f[b.materialIndex],F=Math.max(b.start,M.start),G=Math.min(p.count,Math.min(b.start+b.count,M.start+M.count));for(let z=F,K=G;z<K;z+=3){const B=p.getX(z),j=p.getX(z+1),N=p.getX(z+2);l=Ic(this,y,e,s,h,g,_,B,j,N),l&&(l.faceIndex=Math.floor(z/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),U=Math.min(p.count,M.start+M.count);for(let b=E,y=U;b<y;b+=3){const F=p.getX(b),G=p.getX(b+1),z=p.getX(b+2);l=Ic(this,f,e,s,h,g,_,F,G,z),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,U=x.length;E<U;E++){const b=x[E],y=f[b.materialIndex],F=Math.max(b.start,M.start),G=Math.min(m.count,Math.min(b.start+b.count,M.start+M.count));for(let z=F,K=G;z<K;z+=3){const B=z,j=z+1,N=z+2;l=Ic(this,y,e,s,h,g,_,B,j,N),l&&(l.faceIndex=Math.floor(z/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),U=Math.min(m.count,M.start+M.count);for(let b=E,y=U;b<y;b+=3){const F=b,G=b+1,z=b+2;l=Ic(this,f,e,s,h,g,_,F,G,z),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}}}function Fb(r,e,i,s,l,c,f,p){let m;if(e.side===li?m=s.intersectTriangle(f,c,l,!0,p):m=s.intersectTriangle(l,c,f,e.side===Ss,p),m===null)return null;Fc.copy(p),Fc.applyMatrix4(r.matrixWorld);const h=i.ray.origin.distanceTo(Fc);return h<i.near||h>i.far?null:{distance:h,point:Fc.clone(),object:r}}function Ic(r,e,i,s,l,c,f,p,m,h){r.getVertexPosition(p,Uc),r.getVertexPosition(m,Lc),r.getVertexPosition(h,Oc);const g=Fb(r,e,i,s,Uc,Lc,Oc,Lx);if(g){const _=new ce;ji.getBarycoord(Lx,Uc,Lc,Oc,_),l&&(g.uv=ji.getInterpolatedAttribute(l,p,m,h,_,new Rt)),c&&(g.uv1=ji.getInterpolatedAttribute(c,p,m,h,_,new Rt)),f&&(g.normal=ji.getInterpolatedAttribute(f,p,m,h,_,new ce),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:p,b:m,c:h,normal:new ce,materialIndex:0};ji.getNormal(Uc,Lc,Oc,x.normal),g.face=x,g.barycoord=_}return g}class Ib extends Jn{constructor(e=null,i=1,s=1,l,c,f,p,m,h=Gn,g=Gn,_,x){super(null,f,p,m,h,g,l,c,_,x),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qd=new ce,zb=new ce,Bb=new _t;class _s{constructor(e=new ce(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Qd.subVectors(s,i).cross(zb.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const l=e.delta(Qd),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/c;return s===!0&&(f<0||f>1)?null:i.copy(e.start).addScaledVector(l,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||Bb.getNormalMatrix(e),l=this.coplanarPoint(Qd).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ws=new fu,Hb=new Rt(.5,.5),zc=new ce;class j_{constructor(e=new _s,i=new _s,s=new _s,l=new _s,c=new _s,f=new _s){this.planes=[e,i,s,l,c,f]}set(e,i,s,l,c,f){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(f),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=ta,s=!1){const l=this.planes,c=e.elements,f=c[0],p=c[1],m=c[2],h=c[3],g=c[4],_=c[5],x=c[6],M=c[7],E=c[8],U=c[9],b=c[10],y=c[11],F=c[12],G=c[13],z=c[14],K=c[15];if(l[0].setComponents(h-f,M-g,y-E,K-F).normalize(),l[1].setComponents(h+f,M+g,y+E,K+F).normalize(),l[2].setComponents(h+p,M+_,y+U,K+G).normalize(),l[3].setComponents(h-p,M-_,y-U,K-G).normalize(),s)l[4].setComponents(m,x,b,z).normalize(),l[5].setComponents(h-m,M-x,y-b,K-z).normalize();else if(l[4].setComponents(h-m,M-x,y-b,K-z).normalize(),i===ta)l[5].setComponents(h+m,M+x,y+b,K+z).normalize();else if(i===au)l[5].setComponents(m,x,b,z).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ws.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ws)}intersectsSprite(e){Ws.center.set(0,0,0);const i=Hb.distanceTo(e.center);return Ws.radius=.7071067811865476+i,Ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ws)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(zc.x=l.normal.x>0?e.max.x:e.min.x,zc.y=l.normal.y>0?e.max.y:e.min.y,zc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(zc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fp extends ll{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ru=new ce,ou=new ce,Ox=new Rn,$o=new up,Bc=new fu,Jd=new ce,Px=new ce;class Gb extends $n{constructor(e=new Pi,i=new fp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)ru.fromBufferAttribute(i,l-1),ou.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=ru.distanceTo(ou);e.setAttribute("lineDistance",new Si(s,1))}else ht("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Bc.copy(s.boundingSphere),Bc.applyMatrix4(l),Bc.radius+=c,e.ray.intersectsSphere(Bc)===!1)return;Ox.copy(l).invert(),$o.copy(e.ray).applyMatrix4(Ox);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=this.isLineSegments?2:1,g=s.index,x=s.attributes.position;if(g!==null){const M=Math.max(0,f.start),E=Math.min(g.count,f.start+f.count);for(let U=M,b=E-1;U<b;U+=h){const y=g.getX(U),F=g.getX(U+1),G=Hc(this,e,$o,m,y,F,U);G&&i.push(G)}if(this.isLineLoop){const U=g.getX(E-1),b=g.getX(M),y=Hc(this,e,$o,m,U,b,E-1);y&&i.push(y)}}else{const M=Math.max(0,f.start),E=Math.min(x.count,f.start+f.count);for(let U=M,b=E-1;U<b;U+=h){const y=Hc(this,e,$o,m,U,U+1,U);y&&i.push(y)}if(this.isLineLoop){const U=Hc(this,e,$o,m,E-1,M,E-1);U&&i.push(U)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function Hc(r,e,i,s,l,c,f){const p=r.geometry.attributes.position;if(ru.fromBufferAttribute(p,l),ou.fromBufferAttribute(p,c),i.distanceSqToSegment(ru,ou,Jd,Px)>s)return;Jd.applyMatrix4(r.matrixWorld);const h=e.ray.origin.distanceTo(Jd);if(!(h<e.near||h>e.far))return{distance:h,point:Px.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}const Fx=new ce,Ix=new ce;class W_ extends Gb{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)Fx.fromBufferAttribute(i,l),Ix.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+Fx.distanceTo(Ix);e.setAttribute("lineDistance",new Si(s,1))}else ht("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class X_ extends Jn{constructor(e=[],i=Qs,s,l,c,f,p,m,h,g){super(e,i,s,l,c,f,p,m,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $r extends Jn{constructor(e,i,s=aa,l,c,f,p=Gn,m=Gn,h,g=Oa,_=1){if(g!==Oa&&g!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:_};super(x,l,c,f,p,m,g,s,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new cp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Vb extends $r{constructor(e,i=aa,s=Qs,l,c,f=Gn,p=Gn,m,h=Oa){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,i,s,l,c,f,p,m,h),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class q_ extends Jn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class cl extends Pi{constructor(e=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const p=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],h=[],g=[],_=[];let x=0,M=0;E("z","y","x",-1,-1,s,i,e,f,c,0),E("z","y","x",1,-1,s,i,-e,f,c,1),E("x","z","y",1,1,e,s,i,l,f,2),E("x","z","y",1,-1,e,s,-i,l,f,3),E("x","y","z",1,-1,e,i,s,l,c,4),E("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Si(h,3)),this.setAttribute("normal",new Si(g,3)),this.setAttribute("uv",new Si(_,2));function E(U,b,y,F,G,z,K,B,j,N,k){const J=z/j,Z=K/N,te=z/2,_e=K/2,ae=B/2,q=j+1,H=N+1;let D=0,w=0;const R=new ce;for(let O=0;O<H;O++){const T=O*Z-_e;for(let S=0;S<q;S++){const V=S*J-te;R[U]=V*F,R[b]=T*G,R[y]=ae,h.push(R.x,R.y,R.z),R[U]=0,R[b]=0,R[y]=B>0?1:-1,g.push(R.x,R.y,R.z),_.push(S/j),_.push(1-O/N),D+=1}}for(let O=0;O<N;O++)for(let T=0;T<j;T++){const S=x+T+q*O,V=x+T+q*(O+1),Y=x+(T+1)+q*(O+1),W=x+(T+1)+q*O;m.push(S,V,W),m.push(V,Y,W),w+=6}p.addGroup(M,w,k),M+=w,x+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class du extends Pi{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,f=i/2,p=Math.floor(s),m=Math.floor(l),h=p+1,g=m+1,_=e/p,x=i/m,M=[],E=[],U=[],b=[];for(let y=0;y<g;y++){const F=y*x-f;for(let G=0;G<h;G++){const z=G*_-c;E.push(z,-F,0),U.push(0,0,1),b.push(G/p),b.push(1-y/m)}}for(let y=0;y<m;y++)for(let F=0;F<p;F++){const G=F+h*y,z=F+h*(y+1),K=F+1+h*(y+1),B=F+1+h*y;M.push(G,z,B),M.push(z,K,B)}this.setIndex(M),this.setAttribute("position",new Si(E,3)),this.setAttribute("normal",new Si(U,3)),this.setAttribute("uv",new Si(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new du(e.width,e.height,e.widthSegments,e.heightSegments)}}function eo(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];if(zx(l))l.isRenderTargetTexture?(ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone();else if(Array.isArray(l))if(zx(l[0])){const c=[];for(let f=0,p=l.length;f<p;f++)c[f]=l[f].clone();e[i][s]=c}else e[i][s]=l.slice();else e[i][s]=l}}return e}function Qn(r){const e={};for(let i=0;i<r.length;i++){const s=eo(r[i]);for(const l in s)e[l]=s[l]}return e}function zx(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function kb(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function Y_(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Bt.workingColorSpace}const jb={clone:eo,merge:Qn};var Wb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sa extends ll{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wb,this.fragmentShader=Xb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=eo(e.uniforms),this.uniformsGroups=kb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class qb extends sa{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Yb extends ll{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ab,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Zb extends ll{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Kb extends $n{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Gc=new ce,Vc=new bs,Qi=new ce;class Z_ extends $n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rn,this.projectionMatrix=new Rn,this.projectionMatrixInverse=new Rn,this.coordinateSystem=ta,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Gc,Vc,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gc,Vc,Qi.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(Gc,Vc,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gc,Vc,Qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const xs=new ce,Bx=new Rt,Hx=new Rt;class Ui extends Z_{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Kh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Kh*2*Math.atan(Math.tan(Qc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){xs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xs.x,xs.y).multiplyScalar(-e/xs.z),xs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(xs.x,xs.y).multiplyScalar(-e/xs.z)}getViewSize(e,i){return this.getViewBounds(e,Bx,Hx),i.subVectors(Hx,Bx)}setViewOffset(e,i,s,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Qc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,h=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/h,l*=f.width/m,s*=f.height/h}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class K_ extends Z_{constructor(e=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,f=s+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,f=c+h*this.view.width,p-=g*this.view.offsetY,m=p-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Qb extends Kb{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const kr=-90,jr=1;class Jb extends $n{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ui(kr,jr,e,i);l.layers=this.layers,this.add(l);const c=new Ui(kr,jr,e,i);c.layers=this.layers,this.add(c);const f=new Ui(kr,jr,e,i);f.layers=this.layers,this.add(f);const p=new Ui(kr,jr,e,i);p.layers=this.layers,this.add(p);const m=new Ui(kr,jr,e,i);m.layers=this.layers,this.add(m);const h=new Ui(kr,jr,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,p,m]=i;for(const h of i)this.remove(h);if(e===ta)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===au)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,p,m,h,g]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const U=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let b=!1;e.isWebGLRenderer===!0?b=e.state.buffers.depth.getReversed():b=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(s,2,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,3,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),s.texture.generateMipmaps=U,e.setRenderTarget(s,5,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(i,g),e.setRenderTarget(_,x,M),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class $b extends Ui{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Gx{constructor(e=1,i=0,s=0){this.radius=e,this.phi=i,this.theta=s}set(e,i,s){return this.radius=e,this.phi=i,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ut(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,s){return this.radius=Math.sqrt(e*e+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(Ut(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const yp=class yp{constructor(e,i,s,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=s,c[3]=l,this}};yp.prototype.isMatrix2=!0;let Vx=yp;class eM extends W_{constructor(e=10,i=10,s=4473924,l=8947848){s=new Lt(s),l=new Lt(l);const c=i/2,f=e/i,p=e/2,m=[],h=[];for(let x=0,M=0,E=-p;x<=i;x++,E+=f){m.push(-p,0,E,p,0,E),m.push(E,0,-p,E,0,p);const U=x===c?s:l;U.toArray(h,M),M+=3,U.toArray(h,M),M+=3,U.toArray(h,M),M+=3,U.toArray(h,M),M+=3}const g=new Pi;g.setAttribute("position",new Si(m,3)),g.setAttribute("color",new Si(h,3));const _=new fp({vertexColors:!0,toneMapped:!1});super(g,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class tM extends Ms{constructor(e,i=null){super(),this.object=e,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){ht("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function kx(r,e,i,s){const l=nM(s);switch(i){case O_:return r*e;case F_:return r*e/l.components*l.byteLength;case ap:return r*e/l.components*l.byteLength;case Js:return r*e*2/l.components*l.byteLength;case sp:return r*e*2/l.components*l.byteLength;case P_:return r*e*3/l.components*l.byteLength;case Wi:return r*e*4/l.components*l.byteLength;case rp:return r*e*4/l.components*l.byteLength;case qc:case Yc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Zc:case Kc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case yh:case bh:return Math.max(r,16)*Math.max(e,8)/4;case vh:case Sh:return Math.max(r,8)*Math.max(e,8)/2;case Mh:case Eh:case Ah:case Rh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Th:case eu:case Ch:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case wh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Nh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Dh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Uh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Lh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Oh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Fh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Ih:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case zh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Bh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Hh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Gh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Vh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case kh:case jh:case Wh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Xh:case qh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case tu:case Yh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function nM(r){switch(r){case Li:case N_:return{byteLength:1,components:1};case al:case D_:case La:return{byteLength:2,components:1};case np:case ip:return{byteLength:2,components:4};case aa:case tp:case ea:return{byteLength:4,components:1};case U_:case L_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ep}}));typeof window<"u"&&(window.__THREE__?ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ep);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Q_(){let r=null,e=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function iM(r){const e=new WeakMap;function i(p,m){const h=p.array,g=p.usage,_=h.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,h,g),p.onUploadCallback();let M;if(h instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)M=r.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=r.SHORT;else if(h instanceof Uint32Array)M=r.UNSIGNED_INT;else if(h instanceof Int32Array)M=r.INT;else if(h instanceof Int8Array)M=r.BYTE;else if(h instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:x,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:_}}function s(p,m,h){const g=m.array,_=m.updateRanges;if(r.bindBuffer(h,p),_.length===0)r.bufferSubData(h,0,g);else{_.sort((M,E)=>M.start-E.start);let x=0;for(let M=1;M<_.length;M++){const E=_[x],U=_[M];U.start<=E.start+E.count+1?E.count=Math.max(E.count,U.start+U.count-E.start):(++x,_[x]=U)}_.length=x+1;for(let M=0,E=_.length;M<E;M++){const U=_[M];r.bufferSubData(h,U.start*g.BYTES_PER_ELEMENT,g,U.start,U.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(r.deleteBuffer(m.buffer),e.delete(p))}function f(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const g=e.get(p);(!g||g.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=e.get(p);if(h===void 0)e.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:f}}var aM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sM=`#ifdef USE_ALPHAHASH
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
#endif`,rM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,oM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uM=`#ifdef USE_AOMAP
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
#endif`,fM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dM=`#ifdef USE_BATCHING
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
#endif`,hM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xM=`#ifdef USE_IRIDESCENCE
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
#endif`,_M=`#ifdef USE_BUMPMAP
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
#endif`,vM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,SM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,MM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,EM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,TM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,AM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,RM=`#define PI 3.141592653589793
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
} // validated`,CM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wM=`vec3 transformedNormal = objectNormal;
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
#endif`,NM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,DM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,UM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,LM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,OM="gl_FragColor = linearToOutputTexel( gl_FragColor );",PM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,FM=`#ifdef USE_ENVMAP
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
#endif`,IM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,zM=`#ifdef USE_ENVMAP
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
#endif`,BM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,HM=`#ifdef USE_ENVMAP
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
#endif`,GM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,VM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,WM=`#ifdef USE_GRADIENTMAP
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
}`,XM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,YM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ZM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,KM=`#ifdef USE_ENVMAP
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
#endif`,QM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,JM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$M=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,e1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,t1=`PhysicalMaterial material;
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
#endif`,n1=`uniform sampler2D dfgLUT;
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
}`,i1=`
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
#endif`,a1=`#if defined( RE_IndirectDiffuse )
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
#endif`,s1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,r1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,o1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,l1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,f1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,d1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,h1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,p1=`#if defined( USE_POINTS_UV )
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
#endif`,m1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,g1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,x1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,v1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y1=`#ifdef USE_MORPHTARGETS
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
#endif`,S1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,M1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,E1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,R1=`#ifdef USE_NORMALMAP
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
#endif`,C1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,w1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,N1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,D1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,U1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,L1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,O1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,P1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,F1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,I1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,z1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,B1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,H1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,G1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,V1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,k1=`float getShadowMask() {
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
}`,j1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,W1=`#ifdef USE_SKINNING
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
#endif`,X1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,q1=`#ifdef USE_SKINNING
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
#endif`,Y1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Z1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,K1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Q1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,J1=`#ifdef USE_TRANSMISSION
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
#endif`,$1=`#ifdef USE_TRANSMISSION
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
#endif`,eE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const aE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sE=`uniform sampler2D t2D;
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
}`,rE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uE=`#include <common>
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
}`,fE=`#if DEPTH_PACKING == 3200
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
}`,dE=`#define DISTANCE
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
}`,hE=`#define DISTANCE
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
}`,pE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gE=`uniform float scale;
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
}`,xE=`uniform vec3 diffuse;
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
}`,_E=`#include <common>
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
}`,vE=`uniform vec3 diffuse;
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
}`,yE=`#define LAMBERT
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
}`,SE=`#define LAMBERT
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
}`,bE=`#define MATCAP
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
}`,ME=`#define MATCAP
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
}`,EE=`#define NORMAL
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
}`,TE=`#define NORMAL
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
}`,AE=`#define PHONG
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
}`,RE=`#define PHONG
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
}`,CE=`#define STANDARD
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
}`,wE=`#define STANDARD
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
}`,NE=`#define TOON
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
}`,DE=`#define TOON
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
}`,UE=`uniform float size;
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
}`,LE=`uniform vec3 diffuse;
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
}`,OE=`#include <common>
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
}`,PE=`uniform vec3 color;
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
}`,FE=`uniform float rotation;
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
}`,IE=`uniform vec3 diffuse;
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
}`,Tt={alphahash_fragment:aM,alphahash_pars_fragment:sM,alphamap_fragment:rM,alphamap_pars_fragment:oM,alphatest_fragment:lM,alphatest_pars_fragment:cM,aomap_fragment:uM,aomap_pars_fragment:fM,batching_pars_vertex:dM,batching_vertex:hM,begin_vertex:pM,beginnormal_vertex:mM,bsdfs:gM,iridescence_fragment:xM,bumpmap_pars_fragment:_M,clipping_planes_fragment:vM,clipping_planes_pars_fragment:yM,clipping_planes_pars_vertex:SM,clipping_planes_vertex:bM,color_fragment:MM,color_pars_fragment:EM,color_pars_vertex:TM,color_vertex:AM,common:RM,cube_uv_reflection_fragment:CM,defaultnormal_vertex:wM,displacementmap_pars_vertex:NM,displacementmap_vertex:DM,emissivemap_fragment:UM,emissivemap_pars_fragment:LM,colorspace_fragment:OM,colorspace_pars_fragment:PM,envmap_fragment:FM,envmap_common_pars_fragment:IM,envmap_pars_fragment:zM,envmap_pars_vertex:BM,envmap_physical_pars_fragment:KM,envmap_vertex:HM,fog_vertex:GM,fog_pars_vertex:VM,fog_fragment:kM,fog_pars_fragment:jM,gradientmap_pars_fragment:WM,lightmap_pars_fragment:XM,lights_lambert_fragment:qM,lights_lambert_pars_fragment:YM,lights_pars_begin:ZM,lights_toon_fragment:QM,lights_toon_pars_fragment:JM,lights_phong_fragment:$M,lights_phong_pars_fragment:e1,lights_physical_fragment:t1,lights_physical_pars_fragment:n1,lights_fragment_begin:i1,lights_fragment_maps:a1,lights_fragment_end:s1,lightprobes_pars_fragment:r1,logdepthbuf_fragment:o1,logdepthbuf_pars_fragment:l1,logdepthbuf_pars_vertex:c1,logdepthbuf_vertex:u1,map_fragment:f1,map_pars_fragment:d1,map_particle_fragment:h1,map_particle_pars_fragment:p1,metalnessmap_fragment:m1,metalnessmap_pars_fragment:g1,morphinstance_vertex:x1,morphcolor_vertex:_1,morphnormal_vertex:v1,morphtarget_pars_vertex:y1,morphtarget_vertex:S1,normal_fragment_begin:b1,normal_fragment_maps:M1,normal_pars_fragment:E1,normal_pars_vertex:T1,normal_vertex:A1,normalmap_pars_fragment:R1,clearcoat_normal_fragment_begin:C1,clearcoat_normal_fragment_maps:w1,clearcoat_pars_fragment:N1,iridescence_pars_fragment:D1,opaque_fragment:U1,packing:L1,premultiplied_alpha_fragment:O1,project_vertex:P1,dithering_fragment:F1,dithering_pars_fragment:I1,roughnessmap_fragment:z1,roughnessmap_pars_fragment:B1,shadowmap_pars_fragment:H1,shadowmap_pars_vertex:G1,shadowmap_vertex:V1,shadowmask_pars_fragment:k1,skinbase_vertex:j1,skinning_pars_vertex:W1,skinning_vertex:X1,skinnormal_vertex:q1,specularmap_fragment:Y1,specularmap_pars_fragment:Z1,tonemapping_fragment:K1,tonemapping_pars_fragment:Q1,transmission_fragment:J1,transmission_pars_fragment:$1,uv_pars_fragment:eE,uv_pars_vertex:tE,uv_vertex:nE,worldpos_vertex:iE,background_vert:aE,background_frag:sE,backgroundCube_vert:rE,backgroundCube_frag:oE,cube_vert:lE,cube_frag:cE,depth_vert:uE,depth_frag:fE,distance_vert:dE,distance_frag:hE,equirect_vert:pE,equirect_frag:mE,linedashed_vert:gE,linedashed_frag:xE,meshbasic_vert:_E,meshbasic_frag:vE,meshlambert_vert:yE,meshlambert_frag:SE,meshmatcap_vert:bE,meshmatcap_frag:ME,meshnormal_vert:EE,meshnormal_frag:TE,meshphong_vert:AE,meshphong_frag:RE,meshphysical_vert:CE,meshphysical_frag:wE,meshtoon_vert:NE,meshtoon_frag:DE,points_vert:UE,points_frag:LE,shadow_vert:OE,shadow_frag:PE,sprite_vert:FE,sprite_frag:IE},Ye={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _t}},envmap:{envMap:{value:null},envMapRotation:{value:new _t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _t},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ce},probesMax:{value:new ce},probesResolution:{value:new ce}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}}},$i={basic:{uniforms:Qn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:Qn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new Lt(0)},envMapIntensity:{value:1}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:Qn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:Qn([Ye.common,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.roughnessmap,Ye.metalnessmap,Ye.fog,Ye.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:Qn([Ye.common,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.gradientmap,Ye.fog,Ye.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:Qn([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:Qn([Ye.points,Ye.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:Qn([Ye.common,Ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:Qn([Ye.common,Ye.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:Qn([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:Qn([Ye.sprite,Ye.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _t}},vertexShader:Tt.backgroundCube_vert,fragmentShader:Tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distance:{uniforms:Qn([Ye.common,Ye.displacementmap,{referencePosition:{value:new ce},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distance_vert,fragmentShader:Tt.distance_frag},shadow:{uniforms:Qn([Ye.lights,Ye.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};$i.physical={uniforms:Qn([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _t},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _t},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _t},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _t},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _t},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _t}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};const kc={r:0,b:0,g:0},zE=new Rn,J_=new _t;J_.set(-1,0,0,0,1,0,0,0,1);function BE(r,e,i,s,l,c){const f=new Lt(0);let p=l===!0?0:1,m,h,g=null,_=0,x=null;function M(F){let G=F.isScene===!0?F.background:null;if(G&&G.isTexture){const z=F.backgroundBlurriness>0;G=e.get(G,z)}return G}function E(F){let G=!1;const z=M(F);z===null?b(f,p):z&&z.isColor&&(b(z,1),G=!0);const K=r.xr.getEnvironmentBlendMode();K==="additive"?i.buffers.color.setClear(0,0,0,1,c):K==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||G)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function U(F,G){const z=M(G);z&&(z.isCubeTexture||z.mapping===uu)?(h===void 0&&(h=new Pa(new cl(1,1,1),new sa({name:"BackgroundCubeMaterial",uniforms:eo($i.backgroundCube.uniforms),vertexShader:$i.backgroundCube.vertexShader,fragmentShader:$i.backgroundCube.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(K,B,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=z,h.material.uniforms.backgroundBlurriness.value=G.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=G.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(zE.makeRotationFromEuler(G.backgroundRotation)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(J_),h.material.toneMapped=Bt.getTransfer(z.colorSpace)!==$t,(g!==z||_!==z.version||x!==r.toneMapping)&&(h.material.needsUpdate=!0,g=z,_=z.version,x=r.toneMapping),h.layers.enableAll(),F.unshift(h,h.geometry,h.material,0,0,null)):z&&z.isTexture&&(m===void 0&&(m=new Pa(new du(2,2),new sa({name:"BackgroundMaterial",uniforms:eo($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:Ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=z,m.material.uniforms.backgroundIntensity.value=G.backgroundIntensity,m.material.toneMapped=Bt.getTransfer(z.colorSpace)!==$t,z.matrixAutoUpdate===!0&&z.updateMatrix(),m.material.uniforms.uvTransform.value.copy(z.matrix),(g!==z||_!==z.version||x!==r.toneMapping)&&(m.material.needsUpdate=!0,g=z,_=z.version,x=r.toneMapping),m.layers.enableAll(),F.unshift(m,m.geometry,m.material,0,0,null))}function b(F,G){F.getRGB(kc,Y_(r)),i.buffers.color.setClear(kc.r,kc.g,kc.b,G,c)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(F,G=1){f.set(F),p=G,b(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(F){p=F,b(f,p)},render:E,addToRenderList:U,dispose:y}}function HE(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,f=!1;function p(Z,te,_e,ae,q){let H=!1;const D=_(Z,ae,_e,te);c!==D&&(c=D,h(c.object)),H=M(Z,ae,_e,q),H&&E(Z,ae,_e,q),q!==null&&e.update(q,r.ELEMENT_ARRAY_BUFFER),(H||f)&&(f=!1,z(Z,te,_e,ae),q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function m(){return r.createVertexArray()}function h(Z){return r.bindVertexArray(Z)}function g(Z){return r.deleteVertexArray(Z)}function _(Z,te,_e,ae){const q=ae.wireframe===!0;let H=s[te.id];H===void 0&&(H={},s[te.id]=H);const D=Z.isInstancedMesh===!0?Z.id:0;let w=H[D];w===void 0&&(w={},H[D]=w);let R=w[_e.id];R===void 0&&(R={},w[_e.id]=R);let O=R[q];return O===void 0&&(O=x(m()),R[q]=O),O}function x(Z){const te=[],_e=[],ae=[];for(let q=0;q<i;q++)te[q]=0,_e[q]=0,ae[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:te,enabledAttributes:_e,attributeDivisors:ae,object:Z,attributes:{},index:null}}function M(Z,te,_e,ae){const q=c.attributes,H=te.attributes;let D=0;const w=_e.getAttributes();for(const R in w)if(w[R].location>=0){const T=q[R];let S=H[R];if(S===void 0&&(R==="instanceMatrix"&&Z.instanceMatrix&&(S=Z.instanceMatrix),R==="instanceColor"&&Z.instanceColor&&(S=Z.instanceColor)),T===void 0||T.attribute!==S||S&&T.data!==S.data)return!0;D++}return c.attributesNum!==D||c.index!==ae}function E(Z,te,_e,ae){const q={},H=te.attributes;let D=0;const w=_e.getAttributes();for(const R in w)if(w[R].location>=0){let T=H[R];T===void 0&&(R==="instanceMatrix"&&Z.instanceMatrix&&(T=Z.instanceMatrix),R==="instanceColor"&&Z.instanceColor&&(T=Z.instanceColor));const S={};S.attribute=T,T&&T.data&&(S.data=T.data),q[R]=S,D++}c.attributes=q,c.attributesNum=D,c.index=ae}function U(){const Z=c.newAttributes;for(let te=0,_e=Z.length;te<_e;te++)Z[te]=0}function b(Z){y(Z,0)}function y(Z,te){const _e=c.newAttributes,ae=c.enabledAttributes,q=c.attributeDivisors;_e[Z]=1,ae[Z]===0&&(r.enableVertexAttribArray(Z),ae[Z]=1),q[Z]!==te&&(r.vertexAttribDivisor(Z,te),q[Z]=te)}function F(){const Z=c.newAttributes,te=c.enabledAttributes;for(let _e=0,ae=te.length;_e<ae;_e++)te[_e]!==Z[_e]&&(r.disableVertexAttribArray(_e),te[_e]=0)}function G(Z,te,_e,ae,q,H,D){D===!0?r.vertexAttribIPointer(Z,te,_e,q,H):r.vertexAttribPointer(Z,te,_e,ae,q,H)}function z(Z,te,_e,ae){U();const q=ae.attributes,H=_e.getAttributes(),D=te.defaultAttributeValues;for(const w in H){const R=H[w];if(R.location>=0){let O=q[w];if(O===void 0&&(w==="instanceMatrix"&&Z.instanceMatrix&&(O=Z.instanceMatrix),w==="instanceColor"&&Z.instanceColor&&(O=Z.instanceColor)),O!==void 0){const T=O.normalized,S=O.itemSize,V=e.get(O);if(V===void 0)continue;const Y=V.buffer,W=V.type,X=V.bytesPerElement,re=W===r.INT||W===r.UNSIGNED_INT||O.gpuType===tp;if(O.isInterleavedBufferAttribute){const ue=O.data,we=ue.stride,Se=O.offset;if(ue.isInstancedInterleavedBuffer){for(let be=0;be<R.locationSize;be++)y(R.location+be,ue.meshPerAttribute);Z.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let be=0;be<R.locationSize;be++)b(R.location+be);r.bindBuffer(r.ARRAY_BUFFER,Y);for(let be=0;be<R.locationSize;be++)G(R.location+be,S/R.locationSize,W,T,we*X,(Se+S/R.locationSize*be)*X,re)}else{if(O.isInstancedBufferAttribute){for(let ue=0;ue<R.locationSize;ue++)y(R.location+ue,O.meshPerAttribute);Z.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let ue=0;ue<R.locationSize;ue++)b(R.location+ue);r.bindBuffer(r.ARRAY_BUFFER,Y);for(let ue=0;ue<R.locationSize;ue++)G(R.location+ue,S/R.locationSize,W,T,S*X,S/R.locationSize*ue*X,re)}}else if(D!==void 0){const T=D[w];if(T!==void 0)switch(T.length){case 2:r.vertexAttrib2fv(R.location,T);break;case 3:r.vertexAttrib3fv(R.location,T);break;case 4:r.vertexAttrib4fv(R.location,T);break;default:r.vertexAttrib1fv(R.location,T)}}}}F()}function K(){k();for(const Z in s){const te=s[Z];for(const _e in te){const ae=te[_e];for(const q in ae){const H=ae[q];for(const D in H)g(H[D].object),delete H[D];delete ae[q]}}delete s[Z]}}function B(Z){if(s[Z.id]===void 0)return;const te=s[Z.id];for(const _e in te){const ae=te[_e];for(const q in ae){const H=ae[q];for(const D in H)g(H[D].object),delete H[D];delete ae[q]}}delete s[Z.id]}function j(Z){for(const te in s){const _e=s[te];for(const ae in _e){const q=_e[ae];if(q[Z.id]===void 0)continue;const H=q[Z.id];for(const D in H)g(H[D].object),delete H[D];delete q[Z.id]}}}function N(Z){for(const te in s){const _e=s[te],ae=Z.isInstancedMesh===!0?Z.id:0,q=_e[ae];if(q!==void 0){for(const H in q){const D=q[H];for(const w in D)g(D[w].object),delete D[w];delete q[H]}delete _e[ae],Object.keys(_e).length===0&&delete s[te]}}}function k(){J(),f=!0,c!==l&&(c=l,h(c.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:k,resetDefaultState:J,dispose:K,releaseStatesOfGeometry:B,releaseStatesOfObject:N,releaseStatesOfProgram:j,initAttributes:U,enableAttribute:b,disableUnusedAttributes:F}}function GE(r,e,i){let s;function l(m){s=m}function c(m,h){r.drawArrays(s,m,h),i.update(h,s,1)}function f(m,h,g){g!==0&&(r.drawArraysInstanced(s,m,h,g),i.update(h,s,g))}function p(m,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,h,0,g);let x=0;for(let M=0;M<g;M++)x+=h[M];i.update(x,s,1)}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=p}function VE(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const j=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(j.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(j){return!(j!==Wi&&s.convert(j)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(j){const N=j===La&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(j!==Li&&s.convert(j)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&j!==ea&&!N)}function m(j){if(j==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";j="mediump"}return j==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const g=m(h);g!==h&&(ht("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const _=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&x===!1&&ht("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),U=r.getParameter(r.MAX_TEXTURE_SIZE),b=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),F=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),G=r.getParameter(r.MAX_VARYING_VECTORS),z=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),K=r.getParameter(r.MAX_SAMPLES),B=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:E,maxTextureSize:U,maxCubemapSize:b,maxAttributes:y,maxVertexUniforms:F,maxVaryings:G,maxFragmentUniforms:z,maxSamples:K,samples:B}}function kE(r){const e=this;let i=null,s=0,l=!1,c=!1;const f=new _s,p=new _t,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const M=_.length!==0||x||s!==0||l;return l=x,s=_.length,M},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){i=g(_,x,0)},this.setState=function(_,x,M){const E=_.clippingPlanes,U=_.clipIntersection,b=_.clipShadows,y=r.get(_);if(!l||E===null||E.length===0||c&&!b)c?g(null):h();else{const F=c?0:s,G=F*4;let z=y.clippingState||null;m.value=z,z=g(E,x,G,M);for(let K=0;K!==G;++K)z[K]=i[K];y.clippingState=z,this.numIntersection=U?this.numPlanes:0,this.numPlanes+=F}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(_,x,M,E){const U=_!==null?_.length:0;let b=null;if(U!==0){if(b=m.value,E!==!0||b===null){const y=M+U*4,F=x.matrixWorldInverse;p.getNormalMatrix(F),(b===null||b.length<y)&&(b=new Float32Array(y));for(let G=0,z=M;G!==U;++G,z+=4)f.copy(_[G]).applyMatrix4(F,p),f.normal.toArray(b,z),b[z+3]=f.constant}m.value=b,m.needsUpdate=!0}return e.numPlanes=U,e.numIntersection=0,b}}const ys=4,jx=[.125,.215,.35,.446,.526,.582],qs=20,jE=256,el=new K_,Wx=new Lt;let $d=null,eh=0,th=0,nh=!1;const WE=new ce;class Xx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:f=256,position:p=WE}=c;$d=this._renderer.getRenderTarget(),eh=this._renderer.getActiveCubeFace(),th=this._renderer.getActiveMipmapLevel(),nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget($d,eh,th),this._renderer.xr.enabled=nh,e.scissorTest=!1,Wr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Qs||e.mapping===Jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$d=this._renderer.getRenderTarget(),eh=this._renderer.getActiveCubeFace(),th=this._renderer.getActiveMipmapLevel(),nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:La,format:Wi,colorSpace:nu,depthBuffer:!1},l=qx(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qx(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=XE(c)),this._blurMaterial=YE(c,e,i),this._ggxMaterial=qE(c,e,i)}return l}_compileMaterial(e){const i=new Pa(new Pi,e);this._renderer.compile(i,el)}_sceneToCubeUV(e,i,s,l,c){const m=new Ui(90,1,i,s),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,M=_.toneMapping;_.getClearColor(Wx),_.toneMapping=na,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pa(new cl,new k_({name:"PMREM.Background",side:li,depthWrite:!1,depthTest:!1})));const U=this._backgroundBox,b=U.material;let y=!1;const F=e.background;F?F.isColor&&(b.color.copy(F),e.background=null,y=!0):(b.color.copy(Wx),y=!0);for(let G=0;G<6;G++){const z=G%3;z===0?(m.up.set(0,h[G],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[G],c.y,c.z)):z===1?(m.up.set(0,0,h[G]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[G],c.z)):(m.up.set(0,h[G],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[G]));const K=this._cubeSize;Wr(l,z*K,G>2?K:0,K,K),_.setRenderTarget(l),y&&_.render(U,m),_.render(e,m)}_.toneMapping=M,_.autoClear=x,e.background=F}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Qs||e.mapping===Jr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yx());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;Wr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,el)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,p=this._lodMeshes[s];p.material=f;const m=f.uniforms,h=s/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),_=Math.sqrt(h*h-g*g),x=0+h*1.25,M=_*x,{_lodMax:E}=this,U=this._sizeLods[s],b=3*U*(s>E-ys?s-E+ys:0),y=4*(this._cubeSize-U);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=E-i,Wr(c,b,y,3*U,2*U),l.setRenderTarget(c),l.render(p,el),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,Wr(e,b,y,3*U,2*U),l.setRenderTarget(e),l.render(p,el)}_blur(e,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,s,l,"latitudinal",c),this._halfBlur(f,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,f,p){const m=this._renderer,h=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Ht("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[l];_.material=h;const x=h.uniforms,M=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*qs-1),U=c/E,b=isFinite(c)?1+Math.floor(g*U):qs;b>qs&&ht(`sigmaRadians, ${c}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${qs}`);const y=[];let F=0;for(let j=0;j<qs;++j){const N=j/U,k=Math.exp(-N*N/2);y.push(k),j===0?F+=k:j<b&&(F+=2*k)}for(let j=0;j<y.length;j++)y[j]=y[j]/F;x.envMap.value=e.texture,x.samples.value=b,x.weights.value=y,x.latitudinal.value=f==="latitudinal",p&&(x.poleAxis.value=p);const{_lodMax:G}=this;x.dTheta.value=E,x.mipInt.value=G-s;const z=this._sizeLods[l],K=3*z*(l>G-ys?l-G+ys:0),B=4*(this._cubeSize-z);Wr(i,K,B,3*z,2*z),m.setRenderTarget(i),m.render(_,el)}}function XE(r){const e=[],i=[],s=[];let l=r;const c=r-ys+1+jx.length;for(let f=0;f<c;f++){const p=Math.pow(2,l);e.push(p);let m=1/p;f>r-ys?m=jx[f-r+ys-1]:f===0&&(m=0),i.push(m);const h=1/(p-2),g=-h,_=1+h,x=[g,g,_,g,_,_,g,g,_,_,g,_],M=6,E=6,U=3,b=2,y=1,F=new Float32Array(U*E*M),G=new Float32Array(b*E*M),z=new Float32Array(y*E*M);for(let B=0;B<M;B++){const j=B%3*2/3-1,N=B>2?0:-1,k=[j,N,0,j+2/3,N,0,j+2/3,N+1,0,j,N,0,j+2/3,N+1,0,j,N+1,0];F.set(k,U*E*B),G.set(x,b*E*B);const J=[B,B,B,B,B,B];z.set(J,y*E*B)}const K=new Pi;K.setAttribute("position",new Oi(F,U)),K.setAttribute("uv",new Oi(G,b)),K.setAttribute("faceIndex",new Oi(z,y)),s.push(new Pa(K,null)),l>ys&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function qx(r,e,i){const s=new ia(r,e,i);return s.texture.mapping=uu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Wr(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function qE(r,e,i){return new sa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:jE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hu(),fragmentShader:`

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
		`,blending:Da,depthTest:!1,depthWrite:!1})}function YE(r,e,i){const s=new Float32Array(qs),l=new ce(0,1,0);return new sa({name:"SphericalGaussianBlur",defines:{n:qs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:hu(),fragmentShader:`

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
		`,blending:Da,depthTest:!1,depthWrite:!1})}function Yx(){return new sa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hu(),fragmentShader:`

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
		`,blending:Da,depthTest:!1,depthWrite:!1})}function Zx(){return new sa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Da,depthTest:!1,depthWrite:!1})}function hu(){return`

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
	`}class $_ extends ia{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new X_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new cl(5,5,5),c=new sa({name:"CubemapFromEquirect",uniforms:eo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:li,blending:Da});c.uniforms.tEquirect.value=i;const f=new Pa(l,c),p=i.minFilter;return i.minFilter===Zs&&(i.minFilter=Zn),new Jb(1,10,this).update(e,f),i.minFilter=p,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,s,l);e.setRenderTarget(c)}}function ZE(r){let e=new WeakMap,i=new WeakMap,s=null;function l(x,M=!1){return x==null?null:M?f(x):c(x)}function c(x){if(x&&x.isTexture){const M=x.mapping;if(M===Ad||M===Rd)if(e.has(x)){const E=e.get(x).texture;return p(E,x.mapping)}else{const E=x.image;if(E&&E.height>0){const U=new $_(E.height);return U.fromEquirectangularTexture(r,x),e.set(x,U),x.addEventListener("dispose",h),p(U.texture,x.mapping)}else return null}}return x}function f(x){if(x&&x.isTexture){const M=x.mapping,E=M===Ad||M===Rd,U=M===Qs||M===Jr;if(E||U){let b=i.get(x);const y=b!==void 0?b.texture.pmremVersion:0;if(x.isRenderTargetTexture&&x.pmremVersion!==y)return s===null&&(s=new Xx(r)),b=E?s.fromEquirectangular(x,b):s.fromCubemap(x,b),b.texture.pmremVersion=x.pmremVersion,i.set(x,b),b.texture;if(b!==void 0)return b.texture;{const F=x.image;return E&&F&&F.height>0||U&&F&&m(F)?(s===null&&(s=new Xx(r)),b=E?s.fromEquirectangular(x):s.fromCubemap(x),b.texture.pmremVersion=x.pmremVersion,i.set(x,b),x.addEventListener("dispose",g),b.texture):null}}}return x}function p(x,M){return M===Ad?x.mapping=Qs:M===Rd&&(x.mapping=Jr),x}function m(x){let M=0;const E=6;for(let U=0;U<E;U++)x[U]!==void 0&&M++;return M===E}function h(x){const M=x.target;M.removeEventListener("dispose",h);const E=e.get(M);E!==void 0&&(e.delete(M),E.dispose())}function g(x){const M=x.target;M.removeEventListener("dispose",g);const E=i.get(M);E!==void 0&&(i.delete(M),E.dispose())}function _(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:_}}function KE(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Zh("WebGLRenderer: "+s+" extension not supported."),l}}}function QE(r,e,i,s){const l={},c=new WeakMap;function f(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);x.removeEventListener("dispose",f),delete l[x.id];const M=c.get(x);M&&(e.remove(M),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function p(_,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function m(_){const x=_.attributes;for(const M in x)e.update(x[M],r.ARRAY_BUFFER)}function h(_){const x=[],M=_.index,E=_.attributes.position;let U=0;if(E===void 0)return;if(M!==null){const F=M.array;U=M.version;for(let G=0,z=F.length;G<z;G+=3){const K=F[G+0],B=F[G+1],j=F[G+2];x.push(K,B,B,j,j,K)}}else{const F=E.array;U=E.version;for(let G=0,z=F.length/3-1;G<z;G+=3){const K=G+0,B=G+1,j=G+2;x.push(K,B,B,j,j,K)}}const b=new(E.count>=65535?V_:G_)(x,1);b.version=U;const y=c.get(_);y&&e.remove(y),c.set(_,b)}function g(_){const x=c.get(_);if(x){const M=_.index;M!==null&&x.version<M.version&&h(_)}else h(_);return c.get(_)}return{get:p,update:m,getWireframeAttribute:g}}function JE(r,e,i){let s;function l(_){s=_}let c,f;function p(_){c=_.type,f=_.bytesPerElement}function m(_,x){r.drawElements(s,x,c,_*f),i.update(x,s,1)}function h(_,x,M){M!==0&&(r.drawElementsInstanced(s,x,c,_*f,M),i.update(x,s,M))}function g(_,x,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,x,0,c,_,0,M);let U=0;for(let b=0;b<M;b++)U+=x[b];i.update(U,s,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=g}function $E(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,p){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:Ht("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function eT(r,e,i){const s=new WeakMap,l=new vn;function c(f,p,m){const h=f.morphTargetInfluences,g=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,_=g!==void 0?g.length:0;let x=s.get(p);if(x===void 0||x.count!==_){let J=function(){N.dispose(),s.delete(p),p.removeEventListener("dispose",J)};var M=J;x!==void 0&&x.texture.dispose();const E=p.morphAttributes.position!==void 0,U=p.morphAttributes.normal!==void 0,b=p.morphAttributes.color!==void 0,y=p.morphAttributes.position||[],F=p.morphAttributes.normal||[],G=p.morphAttributes.color||[];let z=0;E===!0&&(z=1),U===!0&&(z=2),b===!0&&(z=3);let K=p.attributes.position.count*z,B=1;K>e.maxTextureSize&&(B=Math.ceil(K/e.maxTextureSize),K=e.maxTextureSize);const j=new Float32Array(K*B*4*_),N=new z_(j,K,B,_);N.type=ea,N.needsUpdate=!0;const k=z*4;for(let Z=0;Z<_;Z++){const te=y[Z],_e=F[Z],ae=G[Z],q=K*B*4*Z;for(let H=0;H<te.count;H++){const D=H*k;E===!0&&(l.fromBufferAttribute(te,H),j[q+D+0]=l.x,j[q+D+1]=l.y,j[q+D+2]=l.z,j[q+D+3]=0),U===!0&&(l.fromBufferAttribute(_e,H),j[q+D+4]=l.x,j[q+D+5]=l.y,j[q+D+6]=l.z,j[q+D+7]=0),b===!0&&(l.fromBufferAttribute(ae,H),j[q+D+8]=l.x,j[q+D+9]=l.y,j[q+D+10]=l.z,j[q+D+11]=ae.itemSize===4?l.w:1)}}x={count:_,texture:N,size:new Rt(K,B)},s.set(p,x),p.addEventListener("dispose",J)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let E=0;for(let b=0;b<h.length;b++)E+=h[b];const U=p.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",U),m.getUniforms().setValue(r,"morphTargetInfluences",h)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function tT(r,e,i,s,l){let c=new WeakMap;function f(h){const g=l.render.frame,_=h.geometry,x=e.get(h,_);if(c.get(x)!==g&&(e.update(x),c.set(x,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==g&&(i.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,r.ARRAY_BUFFER),c.set(h,g))),h.isSkinnedMesh){const M=h.skeleton;c.get(M)!==g&&(M.update(),c.set(M,g))}return x}function p(){c=new WeakMap}function m(h){const g=h.target;g.removeEventListener("dispose",m),s.releaseStatesOfObject(g),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:f,dispose:p}}const nT={[b_]:"LINEAR_TONE_MAPPING",[M_]:"REINHARD_TONE_MAPPING",[E_]:"CINEON_TONE_MAPPING",[T_]:"ACES_FILMIC_TONE_MAPPING",[R_]:"AGX_TONE_MAPPING",[C_]:"NEUTRAL_TONE_MAPPING",[A_]:"CUSTOM_TONE_MAPPING"};function iT(r,e,i,s,l){const c=new ia(e,i,{type:r,depthBuffer:s,stencilBuffer:l,depthTexture:s?new $r(e,i):void 0}),f=new ia(e,i,{type:La,depthBuffer:!1,stencilBuffer:!1}),p=new Pi;p.setAttribute("position",new Si([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Si([0,2,0,0,2,0],2));const m=new qb({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Pa(p,m),g=new K_(-1,1,1,-1,0,1);let _=null,x=null,M=!1,E,U=null,b=[],y=!1;this.setSize=function(F,G){c.setSize(F,G),f.setSize(F,G);for(let z=0;z<b.length;z++){const K=b[z];K.setSize&&K.setSize(F,G)}},this.setEffects=function(F){b=F,y=b.length>0&&b[0].isRenderPass===!0;const G=c.width,z=c.height;for(let K=0;K<b.length;K++){const B=b[K];B.setSize&&B.setSize(G,z)}},this.begin=function(F,G){if(M||F.toneMapping===na&&b.length===0)return!1;if(U=G,G!==null){const z=G.width,K=G.height;(c.width!==z||c.height!==K)&&this.setSize(z,K)}return y===!1&&F.setRenderTarget(c),E=F.toneMapping,F.toneMapping=na,!0},this.hasRenderPass=function(){return y},this.end=function(F,G){F.toneMapping=E,M=!0;let z=c,K=f;for(let B=0;B<b.length;B++){const j=b[B];if(j.enabled!==!1&&(j.render(F,K,z,G),j.needsSwap!==!1)){const N=z;z=K,K=N}}if(_!==F.outputColorSpace||x!==F.toneMapping){_=F.outputColorSpace,x=F.toneMapping,m.defines={},Bt.getTransfer(_)===$t&&(m.defines.SRGB_TRANSFER="");const B=nT[x];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=z.texture,F.setRenderTarget(U),F.render(h,g),U=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),f.dispose(),p.dispose(),m.dispose()}}const ev=new Jn,Qh=new $r(1,1),tv=new z_,nv=new Mb,iv=new X_,Kx=[],Qx=[],Jx=new Float32Array(16),$x=new Float32Array(9),e_=new Float32Array(4);function to(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=Kx[l];if(c===void 0&&(c=new Float32Array(l),Kx[l]=c),e!==0){s.toArray(c,0);for(let f=1,p=0;f!==e;++f)p+=i,r[f].toArray(c,p)}return c}function Un(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function Ln(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function pu(r,e){let i=Qx[e];i===void 0&&(i=new Int32Array(e),Qx[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function aT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function sT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Un(i,e))return;r.uniform2fv(this.addr,e),Ln(i,e)}}function rT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Un(i,e))return;r.uniform3fv(this.addr,e),Ln(i,e)}}function oT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Un(i,e))return;r.uniform4fv(this.addr,e),Ln(i,e)}}function lT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Un(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ln(i,e)}else{if(Un(i,s))return;e_.set(s),r.uniformMatrix2fv(this.addr,!1,e_),Ln(i,s)}}function cT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Un(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ln(i,e)}else{if(Un(i,s))return;$x.set(s),r.uniformMatrix3fv(this.addr,!1,$x),Ln(i,s)}}function uT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Un(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ln(i,e)}else{if(Un(i,s))return;Jx.set(s),r.uniformMatrix4fv(this.addr,!1,Jx),Ln(i,s)}}function fT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function dT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Un(i,e))return;r.uniform2iv(this.addr,e),Ln(i,e)}}function hT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Un(i,e))return;r.uniform3iv(this.addr,e),Ln(i,e)}}function pT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Un(i,e))return;r.uniform4iv(this.addr,e),Ln(i,e)}}function mT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function gT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Un(i,e))return;r.uniform2uiv(this.addr,e),Ln(i,e)}}function xT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Un(i,e))return;r.uniform3uiv(this.addr,e),Ln(i,e)}}function _T(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Un(i,e))return;r.uniform4uiv(this.addr,e),Ln(i,e)}}function vT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Qh.compareFunction=i.isReversedDepthBuffer()?lp:op,c=Qh):c=ev,i.setTexture2D(e||c,l)}function yT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||nv,l)}function ST(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||iv,l)}function bT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||tv,l)}function MT(r){switch(r){case 5126:return aT;case 35664:return sT;case 35665:return rT;case 35666:return oT;case 35674:return lT;case 35675:return cT;case 35676:return uT;case 5124:case 35670:return fT;case 35667:case 35671:return dT;case 35668:case 35672:return hT;case 35669:case 35673:return pT;case 5125:return mT;case 36294:return gT;case 36295:return xT;case 36296:return _T;case 35678:case 36198:case 36298:case 36306:case 35682:return vT;case 35679:case 36299:case 36307:return yT;case 35680:case 36300:case 36308:case 36293:return ST;case 36289:case 36303:case 36311:case 36292:return bT}}function ET(r,e){r.uniform1fv(this.addr,e)}function TT(r,e){const i=to(e,this.size,2);r.uniform2fv(this.addr,i)}function AT(r,e){const i=to(e,this.size,3);r.uniform3fv(this.addr,i)}function RT(r,e){const i=to(e,this.size,4);r.uniform4fv(this.addr,i)}function CT(r,e){const i=to(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function wT(r,e){const i=to(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function NT(r,e){const i=to(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function DT(r,e){r.uniform1iv(this.addr,e)}function UT(r,e){r.uniform2iv(this.addr,e)}function LT(r,e){r.uniform3iv(this.addr,e)}function OT(r,e){r.uniform4iv(this.addr,e)}function PT(r,e){r.uniform1uiv(this.addr,e)}function FT(r,e){r.uniform2uiv(this.addr,e)}function IT(r,e){r.uniform3uiv(this.addr,e)}function zT(r,e){r.uniform4uiv(this.addr,e)}function BT(r,e,i){const s=this.cache,l=e.length,c=pu(i,l);Un(s,c)||(r.uniform1iv(this.addr,c),Ln(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=Qh:f=ev;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||f,c[p])}function HT(r,e,i){const s=this.cache,l=e.length,c=pu(i,l);Un(s,c)||(r.uniform1iv(this.addr,c),Ln(s,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||nv,c[f])}function GT(r,e,i){const s=this.cache,l=e.length,c=pu(i,l);Un(s,c)||(r.uniform1iv(this.addr,c),Ln(s,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||iv,c[f])}function VT(r,e,i){const s=this.cache,l=e.length,c=pu(i,l);Un(s,c)||(r.uniform1iv(this.addr,c),Ln(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||tv,c[f])}function kT(r){switch(r){case 5126:return ET;case 35664:return TT;case 35665:return AT;case 35666:return RT;case 35674:return CT;case 35675:return wT;case 35676:return NT;case 5124:case 35670:return DT;case 35667:case 35671:return UT;case 35668:case 35672:return LT;case 35669:case 35673:return OT;case 5125:return PT;case 36294:return FT;case 36295:return IT;case 36296:return zT;case 35678:case 36198:case 36298:case 36306:case 35682:return BT;case 35679:case 36299:case 36307:return HT;case 35680:case 36300:case 36308:case 36293:return GT;case 36289:case 36303:case 36311:case 36292:return VT}}class jT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=MT(i.type)}}class WT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=kT(i.type)}}class XT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const p=l[c];p.setValue(e,i[p.id],s)}}}const ih=/(\w+)(\])?(\[|\.)?/g;function t_(r,e){r.seq.push(e),r.map[e.id]=e}function qT(r,e,i){const s=r.name,l=s.length;for(ih.lastIndex=0;;){const c=ih.exec(s),f=ih.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&f+2===l){t_(i,h===void 0?new jT(p,r,e):new WT(p,r,e));break}else{let _=i.map[p];_===void 0&&(_=new XT(p),t_(i,_)),i=_}}}class Jc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const p=e.getActiveUniform(i,f),m=e.getUniformLocation(i,p.name);qT(p,m,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,f=i.length;c!==f;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&s.push(f)}return s}}function n_(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const YT=37297;let ZT=0;function KT(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const p=f+1;s.push(`${p===e?">":" "} ${p}: ${i[f]}`)}return s.join(`
`)}const i_=new _t;function QT(r){Bt._getMatrix(i_,Bt.workingColorSpace,r);const e=`mat3( ${i_.elements.map(i=>i.toFixed(4))} )`;switch(Bt.getTransfer(r)){case iu:return[e,"LinearTransferOETF"];case $t:return[e,"sRGBTransferOETF"];default:return ht("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function a_(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const p=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+KT(r.getShaderSource(e),p)}else return c}function JT(r,e){const i=QT(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const $T={[b_]:"Linear",[M_]:"Reinhard",[E_]:"Cineon",[T_]:"ACESFilmic",[R_]:"AgX",[C_]:"Neutral",[A_]:"Custom"};function eA(r,e){const i=$T[e];return i===void 0?(ht("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const jc=new ce;function tA(){Bt.getLuminanceCoefficients(jc);const r=jc.x.toFixed(4),e=jc.y.toFixed(4),i=jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(il).join(`
`)}function iA(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function aA(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),f=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[f]={type:c.type,location:r.getAttribLocation(e,f),locationSize:p}}return i}function il(r){return r!==""}function s_(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function r_(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jh(r){return r.replace(sA,oA)}const rA=new Map;function oA(r,e){let i=Tt[e];if(i===void 0){const s=rA.get(e);if(s!==void 0)i=Tt[s],ht('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Jh(i)}const lA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function o_(r){return r.replace(lA,cA)}function cA(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function l_(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const uA={[Xc]:"SHADOWMAP_TYPE_PCF",[nl]:"SHADOWMAP_TYPE_VSM"};function fA(r){return uA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const dA={[Qs]:"ENVMAP_TYPE_CUBE",[Jr]:"ENVMAP_TYPE_CUBE",[uu]:"ENVMAP_TYPE_CUBE_UV"};function hA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":dA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const pA={[Jr]:"ENVMAP_MODE_REFRACTION"};function mA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":pA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const gA={[S_]:"ENVMAP_BLENDING_MULTIPLY",[tb]:"ENVMAP_BLENDING_MIX",[nb]:"ENVMAP_BLENDING_ADD"};function xA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":gA[r.combine]||"ENVMAP_BLENDING_NONE"}function _A(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function vA(r,e,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,p=i.fragmentShader;const m=fA(i),h=hA(i),g=mA(i),_=xA(i),x=_A(i),M=nA(i),E=iA(c),U=l.createProgram();let b,y,F=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(il).join(`
`),b.length>0&&(b+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(il).join(`
`),y.length>0&&(y+=`
`)):(b=[l_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(il).join(`
`),y=[l_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==na?"#define TONE_MAPPING":"",i.toneMapping!==na?Tt.tonemapping_pars_fragment:"",i.toneMapping!==na?eA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Tt.colorspace_pars_fragment,JT("linearToOutputTexel",i.outputColorSpace),tA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(il).join(`
`)),f=Jh(f),f=s_(f,i),f=r_(f,i),p=Jh(p),p=s_(p,i),p=r_(p,i),f=o_(f),p=o_(p),i.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,b=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,y=["#define varying in",i.glslVersion===xx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===xx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const G=F+b+f,z=F+y+p,K=n_(l,l.VERTEX_SHADER,G),B=n_(l,l.FRAGMENT_SHADER,z);l.attachShader(U,K),l.attachShader(U,B),i.index0AttributeName!==void 0?l.bindAttribLocation(U,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(U,0,"position"),l.linkProgram(U);function j(Z){if(r.debug.checkShaderErrors){const te=l.getProgramInfoLog(U)||"",_e=l.getShaderInfoLog(K)||"",ae=l.getShaderInfoLog(B)||"",q=te.trim(),H=_e.trim(),D=ae.trim();let w=!0,R=!0;if(l.getProgramParameter(U,l.LINK_STATUS)===!1)if(w=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,U,K,B);else{const O=a_(l,K,"vertex"),T=a_(l,B,"fragment");Ht("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(U,l.VALIDATE_STATUS)+`

Material Name: `+Z.name+`
Material Type: `+Z.type+`

Program Info Log: `+q+`
`+O+`
`+T)}else q!==""?ht("WebGLProgram: Program Info Log:",q):(H===""||D==="")&&(R=!1);R&&(Z.diagnostics={runnable:w,programLog:q,vertexShader:{log:H,prefix:b},fragmentShader:{log:D,prefix:y}})}l.deleteShader(K),l.deleteShader(B),N=new Jc(l,U),k=aA(l,U)}let N;this.getUniforms=function(){return N===void 0&&j(this),N};let k;this.getAttributes=function(){return k===void 0&&j(this),k};let J=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return J===!1&&(J=l.getProgramParameter(U,YT)),J},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(U),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=ZT++,this.cacheKey=e,this.usedTimes=1,this.program=U,this.vertexShader=K,this.fragmentShader=B,this}let yA=0;class SA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new bA(e),i.set(e,s)),s}}class bA{constructor(e){this.id=yA++,this.code=e,this.usedTimes=0}}function MA(r){return r===Js||r===eu||r===tu}function EA(r,e,i,s,l,c){const f=new B_,p=new SA,m=new Set,h=[],g=new Map,_=s.logarithmicDepthBuffer;let x=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(N){return m.add(N),N===0?"uv":`uv${N}`}function U(N,k,J,Z,te,_e){const ae=Z.fog,q=te.geometry,H=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?Z.environment:null,D=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap,w=e.get(N.envMap||H,D),R=w&&w.mapping===uu?w.image.height:null,O=M[N.type];N.precision!==null&&(x=s.getMaxPrecision(N.precision),x!==N.precision&&ht("WebGLProgram.getParameters:",N.precision,"not supported, using",x,"instead."));const T=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,S=T!==void 0?T.length:0;let V=0;q.morphAttributes.position!==void 0&&(V=1),q.morphAttributes.normal!==void 0&&(V=2),q.morphAttributes.color!==void 0&&(V=3);let Y,W,X,re;if(O){const Ne=$i[O];Y=Ne.vertexShader,W=Ne.fragmentShader}else Y=N.vertexShader,W=N.fragmentShader,p.update(N),X=p.getVertexShaderID(N),re=p.getFragmentShaderID(N);const ue=r.getRenderTarget(),we=r.state.buffers.depth.getReversed(),Se=te.isInstancedMesh===!0,be=te.isBatchedMesh===!0,Ze=!!N.map,We=!!N.matcap,ze=!!w,Je=!!N.aoMap,tt=!!N.lightMap,gt=!!N.bumpMap,pt=!!N.normalMap,Ct=!!N.displacementMap,$=!!N.emissiveMap,Et=!!N.metalnessMap,ot=!!N.roughnessMap,mt=N.anisotropy>0,Le=N.clearcoat>0,Ft=N.dispersion>0,I=N.iridescence>0,C=N.sheen>0,ie=N.transmission>0,Ee=mt&&!!N.anisotropyMap,Ue=Le&&!!N.clearcoatMap,Ie=Le&&!!N.clearcoatNormalMap,Ge=Le&&!!N.clearcoatRoughnessMap,ye=I&&!!N.iridescenceMap,Me=I&&!!N.iridescenceThicknessMap,Ve=C&&!!N.sheenColorMap,ke=C&&!!N.sheenRoughnessMap,He=!!N.specularMap,Be=!!N.specularColorMap,ut=!!N.specularIntensityMap,ft=ie&&!!N.transmissionMap,vt=ie&&!!N.thicknessMap,ee=!!N.gradientMap,Fe=!!N.alphaMap,le=N.alphaTest>0,Ae=!!N.alphaHash,Oe=!!N.extensions;let me=na;N.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(me=r.toneMapping);const Pe={shaderID:O,shaderType:N.type,shaderName:N.name,vertexShader:Y,fragmentShader:W,defines:N.defines,customVertexShaderID:X,customFragmentShaderID:re,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:x,batching:be,batchingColor:be&&te._colorsTexture!==null,instancing:Se,instancingColor:Se&&te.instanceColor!==null,instancingMorph:Se&&te.morphTexture!==null,outputColorSpace:ue===null?r.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Bt.workingColorSpace,alphaToCoverage:!!N.alphaToCoverage,map:Ze,matcap:We,envMap:ze,envMapMode:ze&&w.mapping,envMapCubeUVHeight:R,aoMap:Je,lightMap:tt,bumpMap:gt,normalMap:pt,displacementMap:Ct,emissiveMap:$,normalMapObjectSpace:pt&&N.normalMapType===sb,normalMapTangentSpace:pt&&N.normalMapType===px,packedNormalMap:pt&&N.normalMapType===px&&MA(N.normalMap.format),metalnessMap:Et,roughnessMap:ot,anisotropy:mt,anisotropyMap:Ee,clearcoat:Le,clearcoatMap:Ue,clearcoatNormalMap:Ie,clearcoatRoughnessMap:Ge,dispersion:Ft,iridescence:I,iridescenceMap:ye,iridescenceThicknessMap:Me,sheen:C,sheenColorMap:Ve,sheenRoughnessMap:ke,specularMap:He,specularColorMap:Be,specularIntensityMap:ut,transmission:ie,transmissionMap:ft,thicknessMap:vt,gradientMap:ee,opaque:N.transparent===!1&&N.blending===Zr&&N.alphaToCoverage===!1,alphaMap:Fe,alphaTest:le,alphaHash:Ae,combine:N.combine,mapUv:Ze&&E(N.map.channel),aoMapUv:Je&&E(N.aoMap.channel),lightMapUv:tt&&E(N.lightMap.channel),bumpMapUv:gt&&E(N.bumpMap.channel),normalMapUv:pt&&E(N.normalMap.channel),displacementMapUv:Ct&&E(N.displacementMap.channel),emissiveMapUv:$&&E(N.emissiveMap.channel),metalnessMapUv:Et&&E(N.metalnessMap.channel),roughnessMapUv:ot&&E(N.roughnessMap.channel),anisotropyMapUv:Ee&&E(N.anisotropyMap.channel),clearcoatMapUv:Ue&&E(N.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&E(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ge&&E(N.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&E(N.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&E(N.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&E(N.sheenColorMap.channel),sheenRoughnessMapUv:ke&&E(N.sheenRoughnessMap.channel),specularMapUv:He&&E(N.specularMap.channel),specularColorMapUv:Be&&E(N.specularColorMap.channel),specularIntensityMapUv:ut&&E(N.specularIntensityMap.channel),transmissionMapUv:ft&&E(N.transmissionMap.channel),thicknessMapUv:vt&&E(N.thicknessMap.channel),alphaMapUv:Fe&&E(N.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(pt||mt),vertexNormals:!!q.attributes.normal,vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!q.attributes.uv&&(Ze||Fe),fog:!!ae,useFog:N.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:N.wireframe===!1&&(N.flatShading===!0||q.attributes.normal===void 0&&pt===!1&&(N.isMeshLambertMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isMeshPhysicalMaterial)),sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:we,skinning:te.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:S,morphTextureStride:V,numDirLights:k.directional.length,numPointLights:k.point.length,numSpotLights:k.spot.length,numSpotLightMaps:k.spotLightMap.length,numRectAreaLights:k.rectArea.length,numHemiLights:k.hemi.length,numDirLightShadows:k.directionalShadowMap.length,numPointLightShadows:k.pointShadowMap.length,numSpotLightShadows:k.spotShadowMap.length,numSpotLightShadowsWithMaps:k.numSpotLightShadowsWithMaps,numLightProbes:k.numLightProbes,numLightProbeGrids:_e.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:N.dithering,shadowMapEnabled:r.shadowMap.enabled&&J.length>0,shadowMapType:r.shadowMap.type,toneMapping:me,decodeVideoTexture:Ze&&N.map.isVideoTexture===!0&&Bt.getTransfer(N.map.colorSpace)===$t,decodeVideoTextureEmissive:$&&N.emissiveMap.isVideoTexture===!0&&Bt.getTransfer(N.emissiveMap.colorSpace)===$t,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===wa,flipSided:N.side===li,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:Oe&&N.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&N.extensions.multiDraw===!0||be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return Pe.vertexUv1s=m.has(1),Pe.vertexUv2s=m.has(2),Pe.vertexUv3s=m.has(3),m.clear(),Pe}function b(N){const k=[];if(N.shaderID?k.push(N.shaderID):(k.push(N.customVertexShaderID),k.push(N.customFragmentShaderID)),N.defines!==void 0)for(const J in N.defines)k.push(J),k.push(N.defines[J]);return N.isRawShaderMaterial===!1&&(y(k,N),F(k,N),k.push(r.outputColorSpace)),k.push(N.customProgramCacheKey),k.join()}function y(N,k){N.push(k.precision),N.push(k.outputColorSpace),N.push(k.envMapMode),N.push(k.envMapCubeUVHeight),N.push(k.mapUv),N.push(k.alphaMapUv),N.push(k.lightMapUv),N.push(k.aoMapUv),N.push(k.bumpMapUv),N.push(k.normalMapUv),N.push(k.displacementMapUv),N.push(k.emissiveMapUv),N.push(k.metalnessMapUv),N.push(k.roughnessMapUv),N.push(k.anisotropyMapUv),N.push(k.clearcoatMapUv),N.push(k.clearcoatNormalMapUv),N.push(k.clearcoatRoughnessMapUv),N.push(k.iridescenceMapUv),N.push(k.iridescenceThicknessMapUv),N.push(k.sheenColorMapUv),N.push(k.sheenRoughnessMapUv),N.push(k.specularMapUv),N.push(k.specularColorMapUv),N.push(k.specularIntensityMapUv),N.push(k.transmissionMapUv),N.push(k.thicknessMapUv),N.push(k.combine),N.push(k.fogExp2),N.push(k.sizeAttenuation),N.push(k.morphTargetsCount),N.push(k.morphAttributeCount),N.push(k.numDirLights),N.push(k.numPointLights),N.push(k.numSpotLights),N.push(k.numSpotLightMaps),N.push(k.numHemiLights),N.push(k.numRectAreaLights),N.push(k.numDirLightShadows),N.push(k.numPointLightShadows),N.push(k.numSpotLightShadows),N.push(k.numSpotLightShadowsWithMaps),N.push(k.numLightProbes),N.push(k.shadowMapType),N.push(k.toneMapping),N.push(k.numClippingPlanes),N.push(k.numClipIntersection),N.push(k.depthPacking)}function F(N,k){f.disableAll(),k.instancing&&f.enable(0),k.instancingColor&&f.enable(1),k.instancingMorph&&f.enable(2),k.matcap&&f.enable(3),k.envMap&&f.enable(4),k.normalMapObjectSpace&&f.enable(5),k.normalMapTangentSpace&&f.enable(6),k.clearcoat&&f.enable(7),k.iridescence&&f.enable(8),k.alphaTest&&f.enable(9),k.vertexColors&&f.enable(10),k.vertexAlphas&&f.enable(11),k.vertexUv1s&&f.enable(12),k.vertexUv2s&&f.enable(13),k.vertexUv3s&&f.enable(14),k.vertexTangents&&f.enable(15),k.anisotropy&&f.enable(16),k.alphaHash&&f.enable(17),k.batching&&f.enable(18),k.dispersion&&f.enable(19),k.batchingColor&&f.enable(20),k.gradientMap&&f.enable(21),k.packedNormalMap&&f.enable(22),k.vertexNormals&&f.enable(23),N.push(f.mask),f.disableAll(),k.fog&&f.enable(0),k.useFog&&f.enable(1),k.flatShading&&f.enable(2),k.logarithmicDepthBuffer&&f.enable(3),k.reversedDepthBuffer&&f.enable(4),k.skinning&&f.enable(5),k.morphTargets&&f.enable(6),k.morphNormals&&f.enable(7),k.morphColors&&f.enable(8),k.premultipliedAlpha&&f.enable(9),k.shadowMapEnabled&&f.enable(10),k.doubleSided&&f.enable(11),k.flipSided&&f.enable(12),k.useDepthPacking&&f.enable(13),k.dithering&&f.enable(14),k.transmission&&f.enable(15),k.sheen&&f.enable(16),k.opaque&&f.enable(17),k.pointsUvs&&f.enable(18),k.decodeVideoTexture&&f.enable(19),k.decodeVideoTextureEmissive&&f.enable(20),k.alphaToCoverage&&f.enable(21),k.numLightProbeGrids>0&&f.enable(22),N.push(f.mask)}function G(N){const k=M[N.type];let J;if(k){const Z=$i[k];J=jb.clone(Z.uniforms)}else J=N.uniforms;return J}function z(N,k){let J=g.get(k);return J!==void 0?++J.usedTimes:(J=new vA(r,k,N,l),h.push(J),g.set(k,J)),J}function K(N){if(--N.usedTimes===0){const k=h.indexOf(N);h[k]=h[h.length-1],h.pop(),g.delete(N.cacheKey),N.destroy()}}function B(N){p.remove(N)}function j(){p.dispose()}return{getParameters:U,getProgramCacheKey:b,getUniforms:G,acquireProgram:z,releaseProgram:K,releaseShaderCache:B,programs:h,dispose:j}}function TA(){let r=new WeakMap;function e(f){return r.has(f)}function i(f){let p=r.get(f);return p===void 0&&(p={},r.set(f,p)),p}function s(f){r.delete(f)}function l(f,p,m){r.get(f)[p]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function AA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function c_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function u_(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function f(x){let M=0;return x.isInstancedMesh&&(M+=2),x.isSkinnedMesh&&(M+=1),M}function p(x,M,E,U,b,y){let F=r[e];return F===void 0?(F={id:x.id,object:x,geometry:M,material:E,materialVariant:f(x),groupOrder:U,renderOrder:x.renderOrder,z:b,group:y},r[e]=F):(F.id=x.id,F.object=x,F.geometry=M,F.material=E,F.materialVariant=f(x),F.groupOrder=U,F.renderOrder=x.renderOrder,F.z=b,F.group=y),e++,F}function m(x,M,E,U,b,y){const F=p(x,M,E,U,b,y);E.transmission>0?s.push(F):E.transparent===!0?l.push(F):i.push(F)}function h(x,M,E,U,b,y){const F=p(x,M,E,U,b,y);E.transmission>0?s.unshift(F):E.transparent===!0?l.unshift(F):i.unshift(F)}function g(x,M){i.length>1&&i.sort(x||AA),s.length>1&&s.sort(M||c_),l.length>1&&l.sort(M||c_)}function _(){for(let x=e,M=r.length;x<M;x++){const E=r[x];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:h,finish:_,sort:g}}function RA(){let r=new WeakMap;function e(s,l){const c=r.get(s);let f;return c===void 0?(f=new u_,r.set(s,[f])):l>=c.length?(f=new u_,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:e,dispose:i}}function CA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ce,color:new Lt};break;case"SpotLight":i={position:new ce,direction:new ce,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ce,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ce,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":i={color:new Lt,position:new ce,halfWidth:new ce,halfHeight:new ce};break}return r[e.id]=i,i}}}function wA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let NA=0;function DA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function UA(r){const e=new CA,i=wA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new ce);const l=new ce,c=new Rn,f=new Rn;function p(h){let g=0,_=0,x=0;for(let k=0;k<9;k++)s.probe[k].set(0,0,0);let M=0,E=0,U=0,b=0,y=0,F=0,G=0,z=0,K=0,B=0,j=0;h.sort(DA);for(let k=0,J=h.length;k<J;k++){const Z=h[k],te=Z.color,_e=Z.intensity,ae=Z.distance;let q=null;if(Z.shadow&&Z.shadow.map&&(Z.shadow.map.texture.format===Js?q=Z.shadow.map.texture:q=Z.shadow.map.depthTexture||Z.shadow.map.texture),Z.isAmbientLight)g+=te.r*_e,_+=te.g*_e,x+=te.b*_e;else if(Z.isLightProbe){for(let H=0;H<9;H++)s.probe[H].addScaledVector(Z.sh.coefficients[H],_e);j++}else if(Z.isDirectionalLight){const H=e.get(Z);if(H.color.copy(Z.color).multiplyScalar(Z.intensity),Z.castShadow){const D=Z.shadow,w=i.get(Z);w.shadowIntensity=D.intensity,w.shadowBias=D.bias,w.shadowNormalBias=D.normalBias,w.shadowRadius=D.radius,w.shadowMapSize=D.mapSize,s.directionalShadow[M]=w,s.directionalShadowMap[M]=q,s.directionalShadowMatrix[M]=Z.shadow.matrix,F++}s.directional[M]=H,M++}else if(Z.isSpotLight){const H=e.get(Z);H.position.setFromMatrixPosition(Z.matrixWorld),H.color.copy(te).multiplyScalar(_e),H.distance=ae,H.coneCos=Math.cos(Z.angle),H.penumbraCos=Math.cos(Z.angle*(1-Z.penumbra)),H.decay=Z.decay,s.spot[U]=H;const D=Z.shadow;if(Z.map&&(s.spotLightMap[K]=Z.map,K++,D.updateMatrices(Z),Z.castShadow&&B++),s.spotLightMatrix[U]=D.matrix,Z.castShadow){const w=i.get(Z);w.shadowIntensity=D.intensity,w.shadowBias=D.bias,w.shadowNormalBias=D.normalBias,w.shadowRadius=D.radius,w.shadowMapSize=D.mapSize,s.spotShadow[U]=w,s.spotShadowMap[U]=q,z++}U++}else if(Z.isRectAreaLight){const H=e.get(Z);H.color.copy(te).multiplyScalar(_e),H.halfWidth.set(Z.width*.5,0,0),H.halfHeight.set(0,Z.height*.5,0),s.rectArea[b]=H,b++}else if(Z.isPointLight){const H=e.get(Z);if(H.color.copy(Z.color).multiplyScalar(Z.intensity),H.distance=Z.distance,H.decay=Z.decay,Z.castShadow){const D=Z.shadow,w=i.get(Z);w.shadowIntensity=D.intensity,w.shadowBias=D.bias,w.shadowNormalBias=D.normalBias,w.shadowRadius=D.radius,w.shadowMapSize=D.mapSize,w.shadowCameraNear=D.camera.near,w.shadowCameraFar=D.camera.far,s.pointShadow[E]=w,s.pointShadowMap[E]=q,s.pointShadowMatrix[E]=Z.shadow.matrix,G++}s.point[E]=H,E++}else if(Z.isHemisphereLight){const H=e.get(Z);H.skyColor.copy(Z.color).multiplyScalar(_e),H.groundColor.copy(Z.groundColor).multiplyScalar(_e),s.hemi[y]=H,y++}}b>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ye.LTC_FLOAT_1,s.rectAreaLTC2=Ye.LTC_FLOAT_2):(s.rectAreaLTC1=Ye.LTC_HALF_1,s.rectAreaLTC2=Ye.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=x;const N=s.hash;(N.directionalLength!==M||N.pointLength!==E||N.spotLength!==U||N.rectAreaLength!==b||N.hemiLength!==y||N.numDirectionalShadows!==F||N.numPointShadows!==G||N.numSpotShadows!==z||N.numSpotMaps!==K||N.numLightProbes!==j)&&(s.directional.length=M,s.spot.length=U,s.rectArea.length=b,s.point.length=E,s.hemi.length=y,s.directionalShadow.length=F,s.directionalShadowMap.length=F,s.pointShadow.length=G,s.pointShadowMap.length=G,s.spotShadow.length=z,s.spotShadowMap.length=z,s.directionalShadowMatrix.length=F,s.pointShadowMatrix.length=G,s.spotLightMatrix.length=z+K-B,s.spotLightMap.length=K,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=j,N.directionalLength=M,N.pointLength=E,N.spotLength=U,N.rectAreaLength=b,N.hemiLength=y,N.numDirectionalShadows=F,N.numPointShadows=G,N.numSpotShadows=z,N.numSpotMaps=K,N.numLightProbes=j,s.version=NA++)}function m(h,g){let _=0,x=0,M=0,E=0,U=0;const b=g.matrixWorldInverse;for(let y=0,F=h.length;y<F;y++){const G=h[y];if(G.isDirectionalLight){const z=s.directional[_];z.direction.setFromMatrixPosition(G.matrixWorld),l.setFromMatrixPosition(G.target.matrixWorld),z.direction.sub(l),z.direction.transformDirection(b),_++}else if(G.isSpotLight){const z=s.spot[M];z.position.setFromMatrixPosition(G.matrixWorld),z.position.applyMatrix4(b),z.direction.setFromMatrixPosition(G.matrixWorld),l.setFromMatrixPosition(G.target.matrixWorld),z.direction.sub(l),z.direction.transformDirection(b),M++}else if(G.isRectAreaLight){const z=s.rectArea[E];z.position.setFromMatrixPosition(G.matrixWorld),z.position.applyMatrix4(b),f.identity(),c.copy(G.matrixWorld),c.premultiply(b),f.extractRotation(c),z.halfWidth.set(G.width*.5,0,0),z.halfHeight.set(0,G.height*.5,0),z.halfWidth.applyMatrix4(f),z.halfHeight.applyMatrix4(f),E++}else if(G.isPointLight){const z=s.point[x];z.position.setFromMatrixPosition(G.matrixWorld),z.position.applyMatrix4(b),x++}else if(G.isHemisphereLight){const z=s.hemi[U];z.direction.setFromMatrixPosition(G.matrixWorld),z.direction.transformDirection(b),U++}}}return{setup:p,setupView:m,state:s}}function f_(r){const e=new UA(r),i=[],s=[],l=[];function c(x){_.camera=x,i.length=0,s.length=0,l.length=0}function f(x){i.push(x)}function p(x){s.push(x)}function m(x){l.push(x)}function h(){e.setup(i)}function g(x){e.setupView(i,x)}const _={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:h,setupLightsView:g,pushLight:f,pushShadow:p,pushLightProbeGrid:m}}function LA(r){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let p;return f===void 0?(p=new f_(r),e.set(l,[p])):c>=f.length?(p=new f_(r),f.push(p)):p=f[c],p}function s(){e=new WeakMap}return{get:i,dispose:s}}const OA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,PA=`uniform sampler2D shadow_pass;
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
}`,FA=[new ce(1,0,0),new ce(-1,0,0),new ce(0,1,0),new ce(0,-1,0),new ce(0,0,1),new ce(0,0,-1)],IA=[new ce(0,-1,0),new ce(0,-1,0),new ce(0,0,1),new ce(0,0,-1),new ce(0,-1,0),new ce(0,-1,0)],d_=new Rn,tl=new ce,ah=new ce;function zA(r,e,i){let s=new j_;const l=new Rt,c=new Rt,f=new vn,p=new Yb,m=new Zb,h={},g=i.maxTextureSize,_={[Ss]:li,[li]:Ss,[wa]:wa},x=new sa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:OA,fragmentShader:PA}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const E=new Pi;E.setAttribute("position",new Oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const U=new Pa(E,x),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xc;let y=this.type;this.render=function(B,j,N){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||B.length===0)return;this.type===FS&&(ht("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Xc);const k=r.getRenderTarget(),J=r.getActiveCubeFace(),Z=r.getActiveMipmapLevel(),te=r.state;te.setBlending(Da),te.buffers.depth.getReversed()===!0?te.buffers.color.setClear(0,0,0,0):te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const _e=y!==this.type;_e&&j.traverse(function(ae){ae.material&&(Array.isArray(ae.material)?ae.material.forEach(q=>q.needsUpdate=!0):ae.material.needsUpdate=!0)});for(let ae=0,q=B.length;ae<q;ae++){const H=B[ae],D=H.shadow;if(D===void 0){ht("WebGLShadowMap:",H,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;l.copy(D.mapSize);const w=D.getFrameExtents();l.multiply(w),c.copy(D.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/w.x),l.x=c.x*w.x,D.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/w.y),l.y=c.y*w.y,D.mapSize.y=c.y));const R=r.state.buffers.depth.getReversed();if(D.camera._reversedDepth=R,D.map===null||_e===!0){if(D.map!==null&&(D.map.depthTexture!==null&&(D.map.depthTexture.dispose(),D.map.depthTexture=null),D.map.dispose()),this.type===nl){if(H.isPointLight){ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}D.map=new ia(l.x,l.y,{format:Js,type:La,minFilter:Zn,magFilter:Zn,generateMipmaps:!1}),D.map.texture.name=H.name+".shadowMap",D.map.depthTexture=new $r(l.x,l.y,ea),D.map.depthTexture.name=H.name+".shadowMapDepth",D.map.depthTexture.format=Oa,D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=Gn,D.map.depthTexture.magFilter=Gn}else H.isPointLight?(D.map=new $_(l.x),D.map.depthTexture=new Vb(l.x,aa)):(D.map=new ia(l.x,l.y),D.map.depthTexture=new $r(l.x,l.y,aa)),D.map.depthTexture.name=H.name+".shadowMap",D.map.depthTexture.format=Oa,this.type===Xc?(D.map.depthTexture.compareFunction=R?lp:op,D.map.depthTexture.minFilter=Zn,D.map.depthTexture.magFilter=Zn):(D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=Gn,D.map.depthTexture.magFilter=Gn);D.camera.updateProjectionMatrix()}const O=D.map.isWebGLCubeRenderTarget?6:1;for(let T=0;T<O;T++){if(D.map.isWebGLCubeRenderTarget)r.setRenderTarget(D.map,T),r.clear();else{T===0&&(r.setRenderTarget(D.map),r.clear());const S=D.getViewport(T);f.set(c.x*S.x,c.y*S.y,c.x*S.z,c.y*S.w),te.viewport(f)}if(H.isPointLight){const S=D.camera,V=D.matrix,Y=H.distance||S.far;Y!==S.far&&(S.far=Y,S.updateProjectionMatrix()),tl.setFromMatrixPosition(H.matrixWorld),S.position.copy(tl),ah.copy(S.position),ah.add(FA[T]),S.up.copy(IA[T]),S.lookAt(ah),S.updateMatrixWorld(),V.makeTranslation(-tl.x,-tl.y,-tl.z),d_.multiplyMatrices(S.projectionMatrix,S.matrixWorldInverse),D._frustum.setFromProjectionMatrix(d_,S.coordinateSystem,S.reversedDepth)}else D.updateMatrices(H);s=D.getFrustum(),z(j,N,D.camera,H,this.type)}D.isPointLightShadow!==!0&&this.type===nl&&F(D,N),D.needsUpdate=!1}y=this.type,b.needsUpdate=!1,r.setRenderTarget(k,J,Z)};function F(B,j){const N=e.update(U);x.defines.VSM_SAMPLES!==B.blurSamples&&(x.defines.VSM_SAMPLES=B.blurSamples,M.defines.VSM_SAMPLES=B.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new ia(l.x,l.y,{format:Js,type:La})),x.uniforms.shadow_pass.value=B.map.depthTexture,x.uniforms.resolution.value=B.mapSize,x.uniforms.radius.value=B.radius,r.setRenderTarget(B.mapPass),r.clear(),r.renderBufferDirect(j,null,N,x,U,null),M.uniforms.shadow_pass.value=B.mapPass.texture,M.uniforms.resolution.value=B.mapSize,M.uniforms.radius.value=B.radius,r.setRenderTarget(B.map),r.clear(),r.renderBufferDirect(j,null,N,M,U,null)}function G(B,j,N,k){let J=null;const Z=N.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(Z!==void 0)J=Z;else if(J=N.isPointLight===!0?m:p,r.localClippingEnabled&&j.clipShadows===!0&&Array.isArray(j.clippingPlanes)&&j.clippingPlanes.length!==0||j.displacementMap&&j.displacementScale!==0||j.alphaMap&&j.alphaTest>0||j.map&&j.alphaTest>0||j.alphaToCoverage===!0){const te=J.uuid,_e=j.uuid;let ae=h[te];ae===void 0&&(ae={},h[te]=ae);let q=ae[_e];q===void 0&&(q=J.clone(),ae[_e]=q,j.addEventListener("dispose",K)),J=q}if(J.visible=j.visible,J.wireframe=j.wireframe,k===nl?J.side=j.shadowSide!==null?j.shadowSide:j.side:J.side=j.shadowSide!==null?j.shadowSide:_[j.side],J.alphaMap=j.alphaMap,J.alphaTest=j.alphaToCoverage===!0?.5:j.alphaTest,J.map=j.map,J.clipShadows=j.clipShadows,J.clippingPlanes=j.clippingPlanes,J.clipIntersection=j.clipIntersection,J.displacementMap=j.displacementMap,J.displacementScale=j.displacementScale,J.displacementBias=j.displacementBias,J.wireframeLinewidth=j.wireframeLinewidth,J.linewidth=j.linewidth,N.isPointLight===!0&&J.isMeshDistanceMaterial===!0){const te=r.properties.get(J);te.light=N}return J}function z(B,j,N,k,J){if(B.visible===!1)return;if(B.layers.test(j.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&J===nl)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,B.matrixWorld);const _e=e.update(B),ae=B.material;if(Array.isArray(ae)){const q=_e.groups;for(let H=0,D=q.length;H<D;H++){const w=q[H],R=ae[w.materialIndex];if(R&&R.visible){const O=G(B,R,k,J);B.onBeforeShadow(r,B,j,N,_e,O,w),r.renderBufferDirect(N,null,_e,O,B,w),B.onAfterShadow(r,B,j,N,_e,O,w)}}}else if(ae.visible){const q=G(B,ae,k,J);B.onBeforeShadow(r,B,j,N,_e,q,null),r.renderBufferDirect(N,null,_e,q,B,null),B.onAfterShadow(r,B,j,N,_e,q,null)}}const te=B.children;for(let _e=0,ae=te.length;_e<ae;_e++)z(te[_e],j,N,k,J)}function K(B){B.target.removeEventListener("dispose",K);for(const N in h){const k=h[N],J=B.target.uuid;J in k&&(k[J].dispose(),delete k[J])}}}function BA(r,e){function i(){let ee=!1;const Fe=new vn;let le=null;const Ae=new vn(0,0,0,0);return{setMask:function(Oe){le!==Oe&&!ee&&(r.colorMask(Oe,Oe,Oe,Oe),le=Oe)},setLocked:function(Oe){ee=Oe},setClear:function(Oe,me,Pe,Ne,je){je===!0&&(Oe*=Ne,me*=Ne,Pe*=Ne),Fe.set(Oe,me,Pe,Ne),Ae.equals(Fe)===!1&&(r.clearColor(Oe,me,Pe,Ne),Ae.copy(Fe))},reset:function(){ee=!1,le=null,Ae.set(-1,0,0,0)}}}function s(){let ee=!1,Fe=!1,le=null,Ae=null,Oe=null;return{setReversed:function(me){if(Fe!==me){const Pe=e.get("EXT_clip_control");me?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),Fe=me;const Ne=Oe;Oe=null,this.setClear(Ne)}},getReversed:function(){return Fe},setTest:function(me){me?ue(r.DEPTH_TEST):we(r.DEPTH_TEST)},setMask:function(me){le!==me&&!ee&&(r.depthMask(me),le=me)},setFunc:function(me){if(Fe&&(me=mb[me]),Ae!==me){switch(me){case uh:r.depthFunc(r.NEVER);break;case fh:r.depthFunc(r.ALWAYS);break;case dh:r.depthFunc(r.LESS);break;case Qr:r.depthFunc(r.LEQUAL);break;case hh:r.depthFunc(r.EQUAL);break;case ph:r.depthFunc(r.GEQUAL);break;case mh:r.depthFunc(r.GREATER);break;case gh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ae=me}},setLocked:function(me){ee=me},setClear:function(me){Oe!==me&&(Oe=me,Fe&&(me=1-me),r.clearDepth(me))},reset:function(){ee=!1,le=null,Ae=null,Oe=null,Fe=!1}}}function l(){let ee=!1,Fe=null,le=null,Ae=null,Oe=null,me=null,Pe=null,Ne=null,je=null;return{setTest:function(at){ee||(at?ue(r.STENCIL_TEST):we(r.STENCIL_TEST))},setMask:function(at){Fe!==at&&!ee&&(r.stencilMask(at),Fe=at)},setFunc:function(at,yt,It){(le!==at||Ae!==yt||Oe!==It)&&(r.stencilFunc(at,yt,It),le=at,Ae=yt,Oe=It)},setOp:function(at,yt,It){(me!==at||Pe!==yt||Ne!==It)&&(r.stencilOp(at,yt,It),me=at,Pe=yt,Ne=It)},setLocked:function(at){ee=at},setClear:function(at){je!==at&&(r.clearStencil(at),je=at)},reset:function(){ee=!1,Fe=null,le=null,Ae=null,Oe=null,me=null,Pe=null,Ne=null,je=null}}}const c=new i,f=new s,p=new l,m=new WeakMap,h=new WeakMap;let g={},_={},x={},M=new WeakMap,E=[],U=null,b=!1,y=null,F=null,G=null,z=null,K=null,B=null,j=null,N=new Lt(0,0,0),k=0,J=!1,Z=null,te=null,_e=null,ae=null,q=null;const H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,w=0;const R=r.getParameter(r.VERSION);R.indexOf("WebGL")!==-1?(w=parseFloat(/^WebGL (\d)/.exec(R)[1]),D=w>=1):R.indexOf("OpenGL ES")!==-1&&(w=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),D=w>=2);let O=null,T={};const S=r.getParameter(r.SCISSOR_BOX),V=r.getParameter(r.VIEWPORT),Y=new vn().fromArray(S),W=new vn().fromArray(V);function X(ee,Fe,le,Ae){const Oe=new Uint8Array(4),me=r.createTexture();r.bindTexture(ee,me),r.texParameteri(ee,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(ee,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Pe=0;Pe<le;Pe++)ee===r.TEXTURE_3D||ee===r.TEXTURE_2D_ARRAY?r.texImage3D(Fe,0,r.RGBA,1,1,Ae,0,r.RGBA,r.UNSIGNED_BYTE,Oe):r.texImage2D(Fe+Pe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Oe);return me}const re={};re[r.TEXTURE_2D]=X(r.TEXTURE_2D,r.TEXTURE_2D,1),re[r.TEXTURE_CUBE_MAP]=X(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[r.TEXTURE_2D_ARRAY]=X(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),re[r.TEXTURE_3D]=X(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),p.setClear(0),ue(r.DEPTH_TEST),f.setFunc(Qr),gt(!1),pt(ux),ue(r.CULL_FACE),Je(Da);function ue(ee){g[ee]!==!0&&(r.enable(ee),g[ee]=!0)}function we(ee){g[ee]!==!1&&(r.disable(ee),g[ee]=!1)}function Se(ee,Fe){return x[ee]!==Fe?(r.bindFramebuffer(ee,Fe),x[ee]=Fe,ee===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=Fe),ee===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=Fe),!0):!1}function be(ee,Fe){let le=E,Ae=!1;if(ee){le=M.get(Fe),le===void 0&&(le=[],M.set(Fe,le));const Oe=ee.textures;if(le.length!==Oe.length||le[0]!==r.COLOR_ATTACHMENT0){for(let me=0,Pe=Oe.length;me<Pe;me++)le[me]=r.COLOR_ATTACHMENT0+me;le.length=Oe.length,Ae=!0}}else le[0]!==r.BACK&&(le[0]=r.BACK,Ae=!0);Ae&&r.drawBuffers(le)}function Ze(ee){return U!==ee?(r.useProgram(ee),U=ee,!0):!1}const We={[Xs]:r.FUNC_ADD,[zS]:r.FUNC_SUBTRACT,[BS]:r.FUNC_REVERSE_SUBTRACT};We[HS]=r.MIN,We[GS]=r.MAX;const ze={[VS]:r.ZERO,[kS]:r.ONE,[jS]:r.SRC_COLOR,[lh]:r.SRC_ALPHA,[KS]:r.SRC_ALPHA_SATURATE,[YS]:r.DST_COLOR,[XS]:r.DST_ALPHA,[WS]:r.ONE_MINUS_SRC_COLOR,[ch]:r.ONE_MINUS_SRC_ALPHA,[ZS]:r.ONE_MINUS_DST_COLOR,[qS]:r.ONE_MINUS_DST_ALPHA,[QS]:r.CONSTANT_COLOR,[JS]:r.ONE_MINUS_CONSTANT_COLOR,[$S]:r.CONSTANT_ALPHA,[eb]:r.ONE_MINUS_CONSTANT_ALPHA};function Je(ee,Fe,le,Ae,Oe,me,Pe,Ne,je,at){if(ee===Da){b===!0&&(we(r.BLEND),b=!1);return}if(b===!1&&(ue(r.BLEND),b=!0),ee!==IS){if(ee!==y||at!==J){if((F!==Xs||K!==Xs)&&(r.blendEquation(r.FUNC_ADD),F=Xs,K=Xs),at)switch(ee){case Zr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case fx:r.blendFunc(r.ONE,r.ONE);break;case dx:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case hx:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ht("WebGLState: Invalid blending: ",ee);break}else switch(ee){case Zr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case fx:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case dx:Ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hx:Ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ht("WebGLState: Invalid blending: ",ee);break}G=null,z=null,B=null,j=null,N.set(0,0,0),k=0,y=ee,J=at}return}Oe=Oe||Fe,me=me||le,Pe=Pe||Ae,(Fe!==F||Oe!==K)&&(r.blendEquationSeparate(We[Fe],We[Oe]),F=Fe,K=Oe),(le!==G||Ae!==z||me!==B||Pe!==j)&&(r.blendFuncSeparate(ze[le],ze[Ae],ze[me],ze[Pe]),G=le,z=Ae,B=me,j=Pe),(Ne.equals(N)===!1||je!==k)&&(r.blendColor(Ne.r,Ne.g,Ne.b,je),N.copy(Ne),k=je),y=ee,J=!1}function tt(ee,Fe){ee.side===wa?we(r.CULL_FACE):ue(r.CULL_FACE);let le=ee.side===li;Fe&&(le=!le),gt(le),ee.blending===Zr&&ee.transparent===!1?Je(Da):Je(ee.blending,ee.blendEquation,ee.blendSrc,ee.blendDst,ee.blendEquationAlpha,ee.blendSrcAlpha,ee.blendDstAlpha,ee.blendColor,ee.blendAlpha,ee.premultipliedAlpha),f.setFunc(ee.depthFunc),f.setTest(ee.depthTest),f.setMask(ee.depthWrite),c.setMask(ee.colorWrite);const Ae=ee.stencilWrite;p.setTest(Ae),Ae&&(p.setMask(ee.stencilWriteMask),p.setFunc(ee.stencilFunc,ee.stencilRef,ee.stencilFuncMask),p.setOp(ee.stencilFail,ee.stencilZFail,ee.stencilZPass)),$(ee.polygonOffset,ee.polygonOffsetFactor,ee.polygonOffsetUnits),ee.alphaToCoverage===!0?ue(r.SAMPLE_ALPHA_TO_COVERAGE):we(r.SAMPLE_ALPHA_TO_COVERAGE)}function gt(ee){Z!==ee&&(ee?r.frontFace(r.CW):r.frontFace(r.CCW),Z=ee)}function pt(ee){ee!==OS?(ue(r.CULL_FACE),ee!==te&&(ee===ux?r.cullFace(r.BACK):ee===PS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):we(r.CULL_FACE),te=ee}function Ct(ee){ee!==_e&&(D&&r.lineWidth(ee),_e=ee)}function $(ee,Fe,le){ee?(ue(r.POLYGON_OFFSET_FILL),(ae!==Fe||q!==le)&&(ae=Fe,q=le,f.getReversed()&&(Fe=-Fe),r.polygonOffset(Fe,le))):we(r.POLYGON_OFFSET_FILL)}function Et(ee){ee?ue(r.SCISSOR_TEST):we(r.SCISSOR_TEST)}function ot(ee){ee===void 0&&(ee=r.TEXTURE0+H-1),O!==ee&&(r.activeTexture(ee),O=ee)}function mt(ee,Fe,le){le===void 0&&(O===null?le=r.TEXTURE0+H-1:le=O);let Ae=T[le];Ae===void 0&&(Ae={type:void 0,texture:void 0},T[le]=Ae),(Ae.type!==ee||Ae.texture!==Fe)&&(O!==le&&(r.activeTexture(le),O=le),r.bindTexture(ee,Fe||re[ee]),Ae.type=ee,Ae.texture=Fe)}function Le(){const ee=T[O];ee!==void 0&&ee.type!==void 0&&(r.bindTexture(ee.type,null),ee.type=void 0,ee.texture=void 0)}function Ft(){try{r.compressedTexImage2D(...arguments)}catch(ee){Ht("WebGLState:",ee)}}function I(){try{r.compressedTexImage3D(...arguments)}catch(ee){Ht("WebGLState:",ee)}}function C(){try{r.texSubImage2D(...arguments)}catch(ee){Ht("WebGLState:",ee)}}function ie(){try{r.texSubImage3D(...arguments)}catch(ee){Ht("WebGLState:",ee)}}function Ee(){try{r.compressedTexSubImage2D(...arguments)}catch(ee){Ht("WebGLState:",ee)}}function Ue(){try{r.compressedTexSubImage3D(...arguments)}catch(ee){Ht("WebGLState:",ee)}}function Ie(){try{r.texStorage2D(...arguments)}catch(ee){Ht("WebGLState:",ee)}}function Ge(){try{r.texStorage3D(...arguments)}catch(ee){Ht("WebGLState:",ee)}}function ye(){try{r.texImage2D(...arguments)}catch(ee){Ht("WebGLState:",ee)}}function Me(){try{r.texImage3D(...arguments)}catch(ee){Ht("WebGLState:",ee)}}function Ve(ee){return _[ee]!==void 0?_[ee]:r.getParameter(ee)}function ke(ee,Fe){_[ee]!==Fe&&(r.pixelStorei(ee,Fe),_[ee]=Fe)}function He(ee){Y.equals(ee)===!1&&(r.scissor(ee.x,ee.y,ee.z,ee.w),Y.copy(ee))}function Be(ee){W.equals(ee)===!1&&(r.viewport(ee.x,ee.y,ee.z,ee.w),W.copy(ee))}function ut(ee,Fe){let le=h.get(Fe);le===void 0&&(le=new WeakMap,h.set(Fe,le));let Ae=le.get(ee);Ae===void 0&&(Ae=r.getUniformBlockIndex(Fe,ee.name),le.set(ee,Ae))}function ft(ee,Fe){const Ae=h.get(Fe).get(ee);m.get(Fe)!==Ae&&(r.uniformBlockBinding(Fe,Ae,ee.__bindingPointIndex),m.set(Fe,Ae))}function vt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),g={},_={},O=null,T={},x={},M=new WeakMap,E=[],U=null,b=!1,y=null,F=null,G=null,z=null,K=null,B=null,j=null,N=new Lt(0,0,0),k=0,J=!1,Z=null,te=null,_e=null,ae=null,q=null,Y.set(0,0,r.canvas.width,r.canvas.height),W.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),p.reset()}return{buffers:{color:c,depth:f,stencil:p},enable:ue,disable:we,bindFramebuffer:Se,drawBuffers:be,useProgram:Ze,setBlending:Je,setMaterial:tt,setFlipSided:gt,setCullFace:pt,setLineWidth:Ct,setPolygonOffset:$,setScissorTest:Et,activeTexture:ot,bindTexture:mt,unbindTexture:Le,compressedTexImage2D:Ft,compressedTexImage3D:I,texImage2D:ye,texImage3D:Me,pixelStorei:ke,getParameter:Ve,updateUBOMapping:ut,uniformBlockBinding:ft,texStorage2D:Ie,texStorage3D:Ge,texSubImage2D:C,texSubImage3D:ie,compressedTexSubImage2D:Ee,compressedTexSubImage3D:Ue,scissor:He,viewport:Be,reset:vt}}function HA(r,e,i,s,l,c,f){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Rt,g=new WeakMap,_=new Set;let x;const M=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function U(I,C){return E?new OffscreenCanvas(I,C):su("canvas")}function b(I,C,ie){let Ee=1;const Ue=Ft(I);if((Ue.width>ie||Ue.height>ie)&&(Ee=ie/Math.max(Ue.width,Ue.height)),Ee<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const Ie=Math.floor(Ee*Ue.width),Ge=Math.floor(Ee*Ue.height);x===void 0&&(x=U(Ie,Ge));const ye=C?U(Ie,Ge):x;return ye.width=Ie,ye.height=Ge,ye.getContext("2d").drawImage(I,0,0,Ie,Ge),ht("WebGLRenderer: Texture has been resized from ("+Ue.width+"x"+Ue.height+") to ("+Ie+"x"+Ge+")."),ye}else return"data"in I&&ht("WebGLRenderer: Image in DataTexture is too big ("+Ue.width+"x"+Ue.height+")."),I;return I}function y(I){return I.generateMipmaps}function F(I){r.generateMipmap(I)}function G(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function z(I,C,ie,Ee,Ue,Ie=!1){if(I!==null){if(r[I]!==void 0)return r[I];ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Ge;Ee&&(Ge=e.get("EXT_texture_norm16"),Ge||ht("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ye=C;if(C===r.RED&&(ie===r.FLOAT&&(ye=r.R32F),ie===r.HALF_FLOAT&&(ye=r.R16F),ie===r.UNSIGNED_BYTE&&(ye=r.R8),ie===r.UNSIGNED_SHORT&&Ge&&(ye=Ge.R16_EXT),ie===r.SHORT&&Ge&&(ye=Ge.R16_SNORM_EXT)),C===r.RED_INTEGER&&(ie===r.UNSIGNED_BYTE&&(ye=r.R8UI),ie===r.UNSIGNED_SHORT&&(ye=r.R16UI),ie===r.UNSIGNED_INT&&(ye=r.R32UI),ie===r.BYTE&&(ye=r.R8I),ie===r.SHORT&&(ye=r.R16I),ie===r.INT&&(ye=r.R32I)),C===r.RG&&(ie===r.FLOAT&&(ye=r.RG32F),ie===r.HALF_FLOAT&&(ye=r.RG16F),ie===r.UNSIGNED_BYTE&&(ye=r.RG8),ie===r.UNSIGNED_SHORT&&Ge&&(ye=Ge.RG16_EXT),ie===r.SHORT&&Ge&&(ye=Ge.RG16_SNORM_EXT)),C===r.RG_INTEGER&&(ie===r.UNSIGNED_BYTE&&(ye=r.RG8UI),ie===r.UNSIGNED_SHORT&&(ye=r.RG16UI),ie===r.UNSIGNED_INT&&(ye=r.RG32UI),ie===r.BYTE&&(ye=r.RG8I),ie===r.SHORT&&(ye=r.RG16I),ie===r.INT&&(ye=r.RG32I)),C===r.RGB_INTEGER&&(ie===r.UNSIGNED_BYTE&&(ye=r.RGB8UI),ie===r.UNSIGNED_SHORT&&(ye=r.RGB16UI),ie===r.UNSIGNED_INT&&(ye=r.RGB32UI),ie===r.BYTE&&(ye=r.RGB8I),ie===r.SHORT&&(ye=r.RGB16I),ie===r.INT&&(ye=r.RGB32I)),C===r.RGBA_INTEGER&&(ie===r.UNSIGNED_BYTE&&(ye=r.RGBA8UI),ie===r.UNSIGNED_SHORT&&(ye=r.RGBA16UI),ie===r.UNSIGNED_INT&&(ye=r.RGBA32UI),ie===r.BYTE&&(ye=r.RGBA8I),ie===r.SHORT&&(ye=r.RGBA16I),ie===r.INT&&(ye=r.RGBA32I)),C===r.RGB&&(ie===r.UNSIGNED_SHORT&&Ge&&(ye=Ge.RGB16_EXT),ie===r.SHORT&&Ge&&(ye=Ge.RGB16_SNORM_EXT),ie===r.UNSIGNED_INT_5_9_9_9_REV&&(ye=r.RGB9_E5),ie===r.UNSIGNED_INT_10F_11F_11F_REV&&(ye=r.R11F_G11F_B10F)),C===r.RGBA){const Me=Ie?iu:Bt.getTransfer(Ue);ie===r.FLOAT&&(ye=r.RGBA32F),ie===r.HALF_FLOAT&&(ye=r.RGBA16F),ie===r.UNSIGNED_BYTE&&(ye=Me===$t?r.SRGB8_ALPHA8:r.RGBA8),ie===r.UNSIGNED_SHORT&&Ge&&(ye=Ge.RGBA16_EXT),ie===r.SHORT&&Ge&&(ye=Ge.RGBA16_SNORM_EXT),ie===r.UNSIGNED_SHORT_4_4_4_4&&(ye=r.RGBA4),ie===r.UNSIGNED_SHORT_5_5_5_1&&(ye=r.RGB5_A1)}return(ye===r.R16F||ye===r.R32F||ye===r.RG16F||ye===r.RG32F||ye===r.RGBA16F||ye===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ye}function K(I,C){let ie;return I?C===null||C===aa||C===sl?ie=r.DEPTH24_STENCIL8:C===ea?ie=r.DEPTH32F_STENCIL8:C===al&&(ie=r.DEPTH24_STENCIL8,ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===aa||C===sl?ie=r.DEPTH_COMPONENT24:C===ea?ie=r.DEPTH_COMPONENT32F:C===al&&(ie=r.DEPTH_COMPONENT16),ie}function B(I,C){return y(I)===!0||I.isFramebufferTexture&&I.minFilter!==Gn&&I.minFilter!==Zn?Math.log2(Math.max(C.width,C.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?C.mipmaps.length:1}function j(I){const C=I.target;C.removeEventListener("dispose",j),k(C),C.isVideoTexture&&g.delete(C),C.isHTMLTexture&&_.delete(C)}function N(I){const C=I.target;C.removeEventListener("dispose",N),Z(C)}function k(I){const C=s.get(I);if(C.__webglInit===void 0)return;const ie=I.source,Ee=M.get(ie);if(Ee){const Ue=Ee[C.__cacheKey];Ue.usedTimes--,Ue.usedTimes===0&&J(I),Object.keys(Ee).length===0&&M.delete(ie)}s.remove(I)}function J(I){const C=s.get(I);r.deleteTexture(C.__webglTexture);const ie=I.source,Ee=M.get(ie);delete Ee[C.__cacheKey],f.memory.textures--}function Z(I){const C=s.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),s.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Ee=0;Ee<6;Ee++){if(Array.isArray(C.__webglFramebuffer[Ee]))for(let Ue=0;Ue<C.__webglFramebuffer[Ee].length;Ue++)r.deleteFramebuffer(C.__webglFramebuffer[Ee][Ue]);else r.deleteFramebuffer(C.__webglFramebuffer[Ee]);C.__webglDepthbuffer&&r.deleteRenderbuffer(C.__webglDepthbuffer[Ee])}else{if(Array.isArray(C.__webglFramebuffer))for(let Ee=0;Ee<C.__webglFramebuffer.length;Ee++)r.deleteFramebuffer(C.__webglFramebuffer[Ee]);else r.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&r.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&r.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let Ee=0;Ee<C.__webglColorRenderbuffer.length;Ee++)C.__webglColorRenderbuffer[Ee]&&r.deleteRenderbuffer(C.__webglColorRenderbuffer[Ee]);C.__webglDepthRenderbuffer&&r.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const ie=I.textures;for(let Ee=0,Ue=ie.length;Ee<Ue;Ee++){const Ie=s.get(ie[Ee]);Ie.__webglTexture&&(r.deleteTexture(Ie.__webglTexture),f.memory.textures--),s.remove(ie[Ee])}s.remove(I)}let te=0;function _e(){te=0}function ae(){return te}function q(I){te=I}function H(){const I=te;return I>=l.maxTextures&&ht("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+l.maxTextures),te+=1,I}function D(I){const C=[];return C.push(I.wrapS),C.push(I.wrapT),C.push(I.wrapR||0),C.push(I.magFilter),C.push(I.minFilter),C.push(I.anisotropy),C.push(I.internalFormat),C.push(I.format),C.push(I.type),C.push(I.generateMipmaps),C.push(I.premultiplyAlpha),C.push(I.flipY),C.push(I.unpackAlignment),C.push(I.colorSpace),C.join()}function w(I,C){const ie=s.get(I);if(I.isVideoTexture&&mt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&ie.__version!==I.version){const Ee=I.image;if(Ee===null)ht("WebGLRenderer: Texture marked for update but no image data found.");else if(Ee.complete===!1)ht("WebGLRenderer: Texture marked for update but image is incomplete");else{we(ie,I,C);return}}else I.isExternalTexture&&(ie.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,ie.__webglTexture,r.TEXTURE0+C)}function R(I,C){const ie=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&ie.__version!==I.version){we(ie,I,C);return}else I.isExternalTexture&&(ie.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,ie.__webglTexture,r.TEXTURE0+C)}function O(I,C){const ie=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&ie.__version!==I.version){we(ie,I,C);return}i.bindTexture(r.TEXTURE_3D,ie.__webglTexture,r.TEXTURE0+C)}function T(I,C){const ie=s.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&ie.__version!==I.version){Se(ie,I,C);return}i.bindTexture(r.TEXTURE_CUBE_MAP,ie.__webglTexture,r.TEXTURE0+C)}const S={[xh]:r.REPEAT,[Na]:r.CLAMP_TO_EDGE,[_h]:r.MIRRORED_REPEAT},V={[Gn]:r.NEAREST,[ib]:r.NEAREST_MIPMAP_NEAREST,[yc]:r.NEAREST_MIPMAP_LINEAR,[Zn]:r.LINEAR,[Cd]:r.LINEAR_MIPMAP_NEAREST,[Zs]:r.LINEAR_MIPMAP_LINEAR},Y={[rb]:r.NEVER,[fb]:r.ALWAYS,[ob]:r.LESS,[op]:r.LEQUAL,[lb]:r.EQUAL,[lp]:r.GEQUAL,[cb]:r.GREATER,[ub]:r.NOTEQUAL};function W(I,C){if(C.type===ea&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===Zn||C.magFilter===Cd||C.magFilter===yc||C.magFilter===Zs||C.minFilter===Zn||C.minFilter===Cd||C.minFilter===yc||C.minFilter===Zs)&&ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,S[C.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,S[C.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,S[C.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,V[C.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,V[C.minFilter]),C.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,Y[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Gn||C.minFilter!==yc&&C.minFilter!==Zs||C.type===ea&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||s.get(C).__currentAnisotropy){const ie=e.get("EXT_texture_filter_anisotropic");r.texParameterf(I,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,l.getMaxAnisotropy())),s.get(C).__currentAnisotropy=C.anisotropy}}}function X(I,C){let ie=!1;I.__webglInit===void 0&&(I.__webglInit=!0,C.addEventListener("dispose",j));const Ee=C.source;let Ue=M.get(Ee);Ue===void 0&&(Ue={},M.set(Ee,Ue));const Ie=D(C);if(Ie!==I.__cacheKey){Ue[Ie]===void 0&&(Ue[Ie]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,ie=!0),Ue[Ie].usedTimes++;const Ge=Ue[I.__cacheKey];Ge!==void 0&&(Ue[I.__cacheKey].usedTimes--,Ge.usedTimes===0&&J(C)),I.__cacheKey=Ie,I.__webglTexture=Ue[Ie].texture}return ie}function re(I,C,ie){return Math.floor(Math.floor(I/ie)/C)}function ue(I,C,ie,Ee){const Ie=I.updateRanges;if(Ie.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,C.width,C.height,ie,Ee,C.data);else{Ie.sort((ke,He)=>ke.start-He.start);let Ge=0;for(let ke=1;ke<Ie.length;ke++){const He=Ie[Ge],Be=Ie[ke],ut=He.start+He.count,ft=re(Be.start,C.width,4),vt=re(He.start,C.width,4);Be.start<=ut+1&&ft===vt&&re(Be.start+Be.count-1,C.width,4)===ft?He.count=Math.max(He.count,Be.start+Be.count-He.start):(++Ge,Ie[Ge]=Be)}Ie.length=Ge+1;const ye=i.getParameter(r.UNPACK_ROW_LENGTH),Me=i.getParameter(r.UNPACK_SKIP_PIXELS),Ve=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,C.width);for(let ke=0,He=Ie.length;ke<He;ke++){const Be=Ie[ke],ut=Math.floor(Be.start/4),ft=Math.ceil(Be.count/4),vt=ut%C.width,ee=Math.floor(ut/C.width),Fe=ft,le=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,vt),i.pixelStorei(r.UNPACK_SKIP_ROWS,ee),i.texSubImage2D(r.TEXTURE_2D,0,vt,ee,Fe,le,ie,Ee,C.data)}I.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,ye),i.pixelStorei(r.UNPACK_SKIP_PIXELS,Me),i.pixelStorei(r.UNPACK_SKIP_ROWS,Ve)}}function we(I,C,ie){let Ee=r.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(Ee=r.TEXTURE_2D_ARRAY),C.isData3DTexture&&(Ee=r.TEXTURE_3D);const Ue=X(I,C),Ie=C.source;i.bindTexture(Ee,I.__webglTexture,r.TEXTURE0+ie);const Ge=s.get(Ie);if(Ie.version!==Ge.__version||Ue===!0){if(i.activeTexture(r.TEXTURE0+ie),(typeof ImageBitmap<"u"&&C.image instanceof ImageBitmap)===!1){const le=Bt.getPrimaries(Bt.workingColorSpace),Ae=C.colorSpace===vs?null:Bt.getPrimaries(C.colorSpace),Oe=C.colorSpace===vs||le===Ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe)}i.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment);let Me=b(C.image,!1,l.maxTextureSize);Me=Le(C,Me);const Ve=c.convert(C.format,C.colorSpace),ke=c.convert(C.type);let He=z(C.internalFormat,Ve,ke,C.normalized,C.colorSpace,C.isVideoTexture);W(Ee,C);let Be;const ut=C.mipmaps,ft=C.isVideoTexture!==!0,vt=Ge.__version===void 0||Ue===!0,ee=Ie.dataReady,Fe=B(C,Me);if(C.isDepthTexture)He=K(C.format===Ks,C.type),vt&&(ft?i.texStorage2D(r.TEXTURE_2D,1,He,Me.width,Me.height):i.texImage2D(r.TEXTURE_2D,0,He,Me.width,Me.height,0,Ve,ke,null));else if(C.isDataTexture)if(ut.length>0){ft&&vt&&i.texStorage2D(r.TEXTURE_2D,Fe,He,ut[0].width,ut[0].height);for(let le=0,Ae=ut.length;le<Ae;le++)Be=ut[le],ft?ee&&i.texSubImage2D(r.TEXTURE_2D,le,0,0,Be.width,Be.height,Ve,ke,Be.data):i.texImage2D(r.TEXTURE_2D,le,He,Be.width,Be.height,0,Ve,ke,Be.data);C.generateMipmaps=!1}else ft?(vt&&i.texStorage2D(r.TEXTURE_2D,Fe,He,Me.width,Me.height),ee&&ue(C,Me,Ve,ke)):i.texImage2D(r.TEXTURE_2D,0,He,Me.width,Me.height,0,Ve,ke,Me.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){ft&&vt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Fe,He,ut[0].width,ut[0].height,Me.depth);for(let le=0,Ae=ut.length;le<Ae;le++)if(Be=ut[le],C.format!==Wi)if(Ve!==null)if(ft){if(ee)if(C.layerUpdates.size>0){const Oe=kx(Be.width,Be.height,C.format,C.type);for(const me of C.layerUpdates){const Pe=Be.data.subarray(me*Oe/Be.data.BYTES_PER_ELEMENT,(me+1)*Oe/Be.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,le,0,0,me,Be.width,Be.height,1,Ve,Pe)}C.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,le,0,0,0,Be.width,Be.height,Me.depth,Ve,Be.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,le,He,Be.width,Be.height,Me.depth,0,Be.data,0,0);else ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ft?ee&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,le,0,0,0,Be.width,Be.height,Me.depth,Ve,ke,Be.data):i.texImage3D(r.TEXTURE_2D_ARRAY,le,He,Be.width,Be.height,Me.depth,0,Ve,ke,Be.data)}else{ft&&vt&&i.texStorage2D(r.TEXTURE_2D,Fe,He,ut[0].width,ut[0].height);for(let le=0,Ae=ut.length;le<Ae;le++)Be=ut[le],C.format!==Wi?Ve!==null?ft?ee&&i.compressedTexSubImage2D(r.TEXTURE_2D,le,0,0,Be.width,Be.height,Ve,Be.data):i.compressedTexImage2D(r.TEXTURE_2D,le,He,Be.width,Be.height,0,Be.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?ee&&i.texSubImage2D(r.TEXTURE_2D,le,0,0,Be.width,Be.height,Ve,ke,Be.data):i.texImage2D(r.TEXTURE_2D,le,He,Be.width,Be.height,0,Ve,ke,Be.data)}else if(C.isDataArrayTexture)if(ft){if(vt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Fe,He,Me.width,Me.height,Me.depth),ee)if(C.layerUpdates.size>0){const le=kx(Me.width,Me.height,C.format,C.type);for(const Ae of C.layerUpdates){const Oe=Me.data.subarray(Ae*le/Me.data.BYTES_PER_ELEMENT,(Ae+1)*le/Me.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ae,Me.width,Me.height,1,Ve,ke,Oe)}C.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Ve,ke,Me.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,He,Me.width,Me.height,Me.depth,0,Ve,ke,Me.data);else if(C.isData3DTexture)ft?(vt&&i.texStorage3D(r.TEXTURE_3D,Fe,He,Me.width,Me.height,Me.depth),ee&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Ve,ke,Me.data)):i.texImage3D(r.TEXTURE_3D,0,He,Me.width,Me.height,Me.depth,0,Ve,ke,Me.data);else if(C.isFramebufferTexture){if(vt)if(ft)i.texStorage2D(r.TEXTURE_2D,Fe,He,Me.width,Me.height);else{let le=Me.width,Ae=Me.height;for(let Oe=0;Oe<Fe;Oe++)i.texImage2D(r.TEXTURE_2D,Oe,He,le,Ae,0,Ve,ke,null),le>>=1,Ae>>=1}}else if(C.isHTMLTexture){if("texElementImage2D"in r){const le=r.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),Me.parentNode!==le){le.appendChild(Me),_.add(C),le.onpaint=Ne=>{const je=Ne.changedElements;for(const at of _)je.includes(at.image)&&(at.needsUpdate=!0)},le.requestPaint();return}const Ae=0,Oe=r.RGBA,me=r.RGBA,Pe=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,Ae,Oe,me,Pe,Me),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(ut.length>0){if(ft&&vt){const le=Ft(ut[0]);i.texStorage2D(r.TEXTURE_2D,Fe,He,le.width,le.height)}for(let le=0,Ae=ut.length;le<Ae;le++)Be=ut[le],ft?ee&&i.texSubImage2D(r.TEXTURE_2D,le,0,0,Ve,ke,Be):i.texImage2D(r.TEXTURE_2D,le,He,Ve,ke,Be);C.generateMipmaps=!1}else if(ft){if(vt){const le=Ft(Me);i.texStorage2D(r.TEXTURE_2D,Fe,He,le.width,le.height)}ee&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ve,ke,Me)}else i.texImage2D(r.TEXTURE_2D,0,He,Ve,ke,Me);y(C)&&F(Ee),Ge.__version=Ie.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function Se(I,C,ie){if(C.image.length!==6)return;const Ee=X(I,C),Ue=C.source;i.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+ie);const Ie=s.get(Ue);if(Ue.version!==Ie.__version||Ee===!0){i.activeTexture(r.TEXTURE0+ie);const Ge=Bt.getPrimaries(Bt.workingColorSpace),ye=C.colorSpace===vs?null:Bt.getPrimaries(C.colorSpace),Me=C.colorSpace===vs||Ge===ye?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Ve=C.isCompressedTexture||C.image[0].isCompressedTexture,ke=C.image[0]&&C.image[0].isDataTexture,He=[];for(let me=0;me<6;me++)!Ve&&!ke?He[me]=b(C.image[me],!0,l.maxCubemapSize):He[me]=ke?C.image[me].image:C.image[me],He[me]=Le(C,He[me]);const Be=He[0],ut=c.convert(C.format,C.colorSpace),ft=c.convert(C.type),vt=z(C.internalFormat,ut,ft,C.normalized,C.colorSpace),ee=C.isVideoTexture!==!0,Fe=Ie.__version===void 0||Ee===!0,le=Ue.dataReady;let Ae=B(C,Be);W(r.TEXTURE_CUBE_MAP,C);let Oe;if(Ve){ee&&Fe&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ae,vt,Be.width,Be.height);for(let me=0;me<6;me++){Oe=He[me].mipmaps;for(let Pe=0;Pe<Oe.length;Pe++){const Ne=Oe[Pe];C.format!==Wi?ut!==null?ee?le&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Pe,0,0,Ne.width,Ne.height,ut,Ne.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Pe,vt,Ne.width,Ne.height,0,Ne.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ee?le&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Pe,0,0,Ne.width,Ne.height,ut,ft,Ne.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Pe,vt,Ne.width,Ne.height,0,ut,ft,Ne.data)}}}else{if(Oe=C.mipmaps,ee&&Fe){Oe.length>0&&Ae++;const me=Ft(He[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ae,vt,me.width,me.height)}for(let me=0;me<6;me++)if(ke){ee?le&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,He[me].width,He[me].height,ut,ft,He[me].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,vt,He[me].width,He[me].height,0,ut,ft,He[me].data);for(let Pe=0;Pe<Oe.length;Pe++){const je=Oe[Pe].image[me].image;ee?le&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Pe+1,0,0,je.width,je.height,ut,ft,je.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Pe+1,vt,je.width,je.height,0,ut,ft,je.data)}}else{ee?le&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,ut,ft,He[me]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,vt,ut,ft,He[me]);for(let Pe=0;Pe<Oe.length;Pe++){const Ne=Oe[Pe];ee?le&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Pe+1,0,0,ut,ft,Ne.image[me]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Pe+1,vt,ut,ft,Ne.image[me])}}}y(C)&&F(r.TEXTURE_CUBE_MAP),Ie.__version=Ue.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function be(I,C,ie,Ee,Ue,Ie){const Ge=c.convert(ie.format,ie.colorSpace),ye=c.convert(ie.type),Me=z(ie.internalFormat,Ge,ye,ie.normalized,ie.colorSpace),Ve=s.get(C),ke=s.get(ie);if(ke.__renderTarget=C,!Ve.__hasExternalTextures){const He=Math.max(1,C.width>>Ie),Be=Math.max(1,C.height>>Ie);Ue===r.TEXTURE_3D||Ue===r.TEXTURE_2D_ARRAY?i.texImage3D(Ue,Ie,Me,He,Be,C.depth,0,Ge,ye,null):i.texImage2D(Ue,Ie,Me,He,Be,0,Ge,ye,null)}i.bindFramebuffer(r.FRAMEBUFFER,I),ot(C)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ee,Ue,ke.__webglTexture,0,Et(C)):(Ue===r.TEXTURE_2D||Ue>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Ue<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Ee,Ue,ke.__webglTexture,Ie),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ze(I,C,ie){if(r.bindRenderbuffer(r.RENDERBUFFER,I),C.depthBuffer){const Ee=C.depthTexture,Ue=Ee&&Ee.isDepthTexture?Ee.type:null,Ie=K(C.stencilBuffer,Ue),Ge=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ot(C)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Et(C),Ie,C.width,C.height):ie?r.renderbufferStorageMultisample(r.RENDERBUFFER,Et(C),Ie,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,Ie,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ge,r.RENDERBUFFER,I)}else{const Ee=C.textures;for(let Ue=0;Ue<Ee.length;Ue++){const Ie=Ee[Ue],Ge=c.convert(Ie.format,Ie.colorSpace),ye=c.convert(Ie.type),Me=z(Ie.internalFormat,Ge,ye,Ie.normalized,Ie.colorSpace);ot(C)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Et(C),Me,C.width,C.height):ie?r.renderbufferStorageMultisample(r.RENDERBUFFER,Et(C),Me,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,Me,C.width,C.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function We(I,C,ie){const Ee=C.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,I),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Ue=s.get(C.depthTexture);if(Ue.__renderTarget=C,(!Ue.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),Ee){if(Ue.__webglInit===void 0&&(Ue.__webglInit=!0,C.depthTexture.addEventListener("dispose",j)),Ue.__webglTexture===void 0){Ue.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,Ue.__webglTexture),W(r.TEXTURE_CUBE_MAP,C.depthTexture);const Ve=c.convert(C.depthTexture.format),ke=c.convert(C.depthTexture.type);let He;C.depthTexture.format===Oa?He=r.DEPTH_COMPONENT24:C.depthTexture.format===Ks&&(He=r.DEPTH24_STENCIL8);for(let Be=0;Be<6;Be++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,He,C.width,C.height,0,Ve,ke,null)}}else w(C.depthTexture,0);const Ie=Ue.__webglTexture,Ge=Et(C),ye=Ee?r.TEXTURE_CUBE_MAP_POSITIVE_X+ie:r.TEXTURE_2D,Me=C.depthTexture.format===Ks?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(C.depthTexture.format===Oa)ot(C)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Me,ye,Ie,0,Ge):r.framebufferTexture2D(r.FRAMEBUFFER,Me,ye,Ie,0);else if(C.depthTexture.format===Ks)ot(C)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Me,ye,Ie,0,Ge):r.framebufferTexture2D(r.FRAMEBUFFER,Me,ye,Ie,0);else throw new Error("Unknown depthTexture format")}function ze(I){const C=s.get(I),ie=I.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==I.depthTexture){const Ee=I.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),Ee){const Ue=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,Ee.removeEventListener("dispose",Ue)};Ee.addEventListener("dispose",Ue),C.__depthDisposeCallback=Ue}C.__boundDepthTexture=Ee}if(I.depthTexture&&!C.__autoAllocateDepthBuffer)if(ie)for(let Ee=0;Ee<6;Ee++)We(C.__webglFramebuffer[Ee],I,Ee);else{const Ee=I.texture.mipmaps;Ee&&Ee.length>0?We(C.__webglFramebuffer[0],I,0):We(C.__webglFramebuffer,I,0)}else if(ie){C.__webglDepthbuffer=[];for(let Ee=0;Ee<6;Ee++)if(i.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer[Ee]),C.__webglDepthbuffer[Ee]===void 0)C.__webglDepthbuffer[Ee]=r.createRenderbuffer(),Ze(C.__webglDepthbuffer[Ee],I,!1);else{const Ue=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ie=C.__webglDepthbuffer[Ee];r.bindRenderbuffer(r.RENDERBUFFER,Ie),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ue,r.RENDERBUFFER,Ie)}}else{const Ee=I.texture.mipmaps;if(Ee&&Ee.length>0?i.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=r.createRenderbuffer(),Ze(C.__webglDepthbuffer,I,!1);else{const Ue=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ie=C.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Ie),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ue,r.RENDERBUFFER,Ie)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Je(I,C,ie){const Ee=s.get(I);C!==void 0&&be(Ee.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ie!==void 0&&ze(I)}function tt(I){const C=I.texture,ie=s.get(I),Ee=s.get(C);I.addEventListener("dispose",N);const Ue=I.textures,Ie=I.isWebGLCubeRenderTarget===!0,Ge=Ue.length>1;if(Ge||(Ee.__webglTexture===void 0&&(Ee.__webglTexture=r.createTexture()),Ee.__version=C.version,f.memory.textures++),Ie){ie.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(C.mipmaps&&C.mipmaps.length>0){ie.__webglFramebuffer[ye]=[];for(let Me=0;Me<C.mipmaps.length;Me++)ie.__webglFramebuffer[ye][Me]=r.createFramebuffer()}else ie.__webglFramebuffer[ye]=r.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){ie.__webglFramebuffer=[];for(let ye=0;ye<C.mipmaps.length;ye++)ie.__webglFramebuffer[ye]=r.createFramebuffer()}else ie.__webglFramebuffer=r.createFramebuffer();if(Ge)for(let ye=0,Me=Ue.length;ye<Me;ye++){const Ve=s.get(Ue[ye]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=r.createTexture(),f.memory.textures++)}if(I.samples>0&&ot(I)===!1){ie.__webglMultisampledFramebuffer=r.createFramebuffer(),ie.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let ye=0;ye<Ue.length;ye++){const Me=Ue[ye];ie.__webglColorRenderbuffer[ye]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ie.__webglColorRenderbuffer[ye]);const Ve=c.convert(Me.format,Me.colorSpace),ke=c.convert(Me.type),He=z(Me.internalFormat,Ve,ke,Me.normalized,Me.colorSpace,I.isXRRenderTarget===!0),Be=Et(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,Be,He,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.RENDERBUFFER,ie.__webglColorRenderbuffer[ye])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(ie.__webglDepthRenderbuffer=r.createRenderbuffer(),Ze(ie.__webglDepthRenderbuffer,I,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Ie){i.bindTexture(r.TEXTURE_CUBE_MAP,Ee.__webglTexture),W(r.TEXTURE_CUBE_MAP,C);for(let ye=0;ye<6;ye++)if(C.mipmaps&&C.mipmaps.length>0)for(let Me=0;Me<C.mipmaps.length;Me++)be(ie.__webglFramebuffer[ye][Me],I,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Me);else be(ie.__webglFramebuffer[ye],I,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);y(C)&&F(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ge){for(let ye=0,Me=Ue.length;ye<Me;ye++){const Ve=Ue[ye],ke=s.get(Ve);let He=r.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(He=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(He,ke.__webglTexture),W(He,Ve),be(ie.__webglFramebuffer,I,Ve,r.COLOR_ATTACHMENT0+ye,He,0),y(Ve)&&F(He)}i.unbindTexture()}else{let ye=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ye=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(ye,Ee.__webglTexture),W(ye,C),C.mipmaps&&C.mipmaps.length>0)for(let Me=0;Me<C.mipmaps.length;Me++)be(ie.__webglFramebuffer[Me],I,C,r.COLOR_ATTACHMENT0,ye,Me);else be(ie.__webglFramebuffer,I,C,r.COLOR_ATTACHMENT0,ye,0);y(C)&&F(ye),i.unbindTexture()}I.depthBuffer&&ze(I)}function gt(I){const C=I.textures;for(let ie=0,Ee=C.length;ie<Ee;ie++){const Ue=C[ie];if(y(Ue)){const Ie=G(I),Ge=s.get(Ue).__webglTexture;i.bindTexture(Ie,Ge),F(Ie),i.unbindTexture()}}}const pt=[],Ct=[];function $(I){if(I.samples>0){if(ot(I)===!1){const C=I.textures,ie=I.width,Ee=I.height;let Ue=r.COLOR_BUFFER_BIT;const Ie=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ge=s.get(I),ye=C.length>1;if(ye)for(let Ve=0;Ve<C.length;Ve++)i.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ve,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ve,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer);const Me=I.texture.mipmaps;Me&&Me.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let Ve=0;Ve<C.length;Ve++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Ue|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Ue|=r.STENCIL_BUFFER_BIT)),ye){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ge.__webglColorRenderbuffer[Ve]);const ke=s.get(C[Ve]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ke,0)}r.blitFramebuffer(0,0,ie,Ee,0,0,ie,Ee,Ue,r.NEAREST),m===!0&&(pt.length=0,Ct.length=0,pt.push(r.COLOR_ATTACHMENT0+Ve),I.depthBuffer&&I.resolveDepthBuffer===!1&&(pt.push(Ie),Ct.push(Ie),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ct)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,pt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ye)for(let Ve=0;Ve<C.length;Ve++){i.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ve,r.RENDERBUFFER,Ge.__webglColorRenderbuffer[Ve]);const ke=s.get(C[Ve]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ve,r.TEXTURE_2D,ke,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&m){const C=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[C])}}}function Et(I){return Math.min(l.maxSamples,I.samples)}function ot(I){const C=s.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function mt(I){const C=f.render.frame;g.get(I)!==C&&(g.set(I,C),I.update())}function Le(I,C){const ie=I.colorSpace,Ee=I.format,Ue=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||ie!==nu&&ie!==vs&&(Bt.getTransfer(ie)===$t?(Ee!==Wi||Ue!==Li)&&ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ht("WebGLTextures: Unsupported texture color space:",ie)),C}function Ft(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(h.width=I.naturalWidth||I.width,h.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(h.width=I.displayWidth,h.height=I.displayHeight):(h.width=I.width,h.height=I.height),h}this.allocateTextureUnit=H,this.resetTextureUnits=_e,this.getTextureUnits=ae,this.setTextureUnits=q,this.setTexture2D=w,this.setTexture2DArray=R,this.setTexture3D=O,this.setTextureCube=T,this.rebindTextures=Je,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=be,this.useMultisampledRTT=ot,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function GA(r,e){function i(s,l=vs){let c;const f=Bt.getTransfer(l);if(s===Li)return r.UNSIGNED_BYTE;if(s===np)return r.UNSIGNED_SHORT_4_4_4_4;if(s===ip)return r.UNSIGNED_SHORT_5_5_5_1;if(s===U_)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===L_)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===N_)return r.BYTE;if(s===D_)return r.SHORT;if(s===al)return r.UNSIGNED_SHORT;if(s===tp)return r.INT;if(s===aa)return r.UNSIGNED_INT;if(s===ea)return r.FLOAT;if(s===La)return r.HALF_FLOAT;if(s===O_)return r.ALPHA;if(s===P_)return r.RGB;if(s===Wi)return r.RGBA;if(s===Oa)return r.DEPTH_COMPONENT;if(s===Ks)return r.DEPTH_STENCIL;if(s===F_)return r.RED;if(s===ap)return r.RED_INTEGER;if(s===Js)return r.RG;if(s===sp)return r.RG_INTEGER;if(s===rp)return r.RGBA_INTEGER;if(s===qc||s===Yc||s===Zc||s===Kc)if(f===$t)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===qc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Yc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===qc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Yc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Zc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Kc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===vh||s===yh||s===Sh||s===bh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===vh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===yh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Sh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===bh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Mh||s===Eh||s===Th||s===Ah||s===Rh||s===eu||s===Ch)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Mh||s===Eh)return f===$t?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Th)return f===$t?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Ah)return c.COMPRESSED_R11_EAC;if(s===Rh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===eu)return c.COMPRESSED_RG11_EAC;if(s===Ch)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===wh||s===Nh||s===Dh||s===Uh||s===Lh||s===Oh||s===Ph||s===Fh||s===Ih||s===zh||s===Bh||s===Hh||s===Gh||s===Vh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===wh)return f===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Nh)return f===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Dh)return f===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Uh)return f===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Lh)return f===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Oh)return f===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ph)return f===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Fh)return f===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ih)return f===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===zh)return f===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Bh)return f===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Hh)return f===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Gh)return f===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Vh)return f===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===kh||s===jh||s===Wh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===kh)return f===$t?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===jh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Wh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Xh||s===qh||s===tu||s===Yh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Xh)return c.COMPRESSED_RED_RGTC1_EXT;if(s===qh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===tu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Yh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===sl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const VA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kA=`
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

}`;class jA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new q_(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new sa({vertexShader:VA,fragmentShader:kA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Pa(new du(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class WA extends Ms{constructor(e,i){super();const s=this;let l=null,c=1,f=null,p="local-floor",m=1,h=null,g=null,_=null,x=null,M=null,E=null;const U=typeof XRWebGLBinding<"u",b=new jA,y={},F=i.getContextAttributes();let G=null,z=null;const K=[],B=[],j=new Rt;let N=null;const k=new Ui;k.viewport=new vn;const J=new Ui;J.viewport=new vn;const Z=[k,J],te=new $b;let _e=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let re=K[X];return re===void 0&&(re=new Pd,K[X]=re),re.getTargetRaySpace()},this.getControllerGrip=function(X){let re=K[X];return re===void 0&&(re=new Pd,K[X]=re),re.getGripSpace()},this.getHand=function(X){let re=K[X];return re===void 0&&(re=new Pd,K[X]=re),re.getHandSpace()};function q(X){const re=B.indexOf(X.inputSource);if(re===-1)return;const ue=K[re];ue!==void 0&&(ue.update(X.inputSource,X.frame,h||f),ue.dispatchEvent({type:X.type,data:X.inputSource}))}function H(){l.removeEventListener("select",q),l.removeEventListener("selectstart",q),l.removeEventListener("selectend",q),l.removeEventListener("squeeze",q),l.removeEventListener("squeezestart",q),l.removeEventListener("squeezeend",q),l.removeEventListener("end",H),l.removeEventListener("inputsourceschange",D);for(let X=0;X<K.length;X++){const re=B[X];re!==null&&(B[X]=null,K[X].disconnect(re))}_e=null,ae=null,b.reset();for(const X in y)delete y[X];e.setRenderTarget(G),M=null,x=null,_=null,l=null,z=null,W.stop(),s.isPresenting=!1,e.setPixelRatio(N),e.setSize(j.width,j.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){c=X,s.isPresenting===!0&&ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){p=X,s.isPresenting===!0&&ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||f},this.setReferenceSpace=function(X){h=X},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return _===null&&U&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(X){if(l=X,l!==null){if(G=e.getRenderTarget(),l.addEventListener("select",q),l.addEventListener("selectstart",q),l.addEventListener("selectend",q),l.addEventListener("squeeze",q),l.addEventListener("squeezestart",q),l.addEventListener("squeezeend",q),l.addEventListener("end",H),l.addEventListener("inputsourceschange",D),F.xrCompatible!==!0&&await i.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(j),U&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,we=null,Se=null;F.depth&&(Se=F.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ue=F.stencil?Ks:Oa,we=F.stencil?sl:aa);const be={colorFormat:i.RGBA8,depthFormat:Se,scaleFactor:c};_=this.getBinding(),x=_.createProjectionLayer(be),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),z=new ia(x.textureWidth,x.textureHeight,{format:Wi,type:Li,depthTexture:new $r(x.textureWidth,x.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:F.stencil,colorSpace:e.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const ue={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,ue),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),z=new ia(M.framebufferWidth,M.framebufferHeight,{format:Wi,type:Li,colorSpace:e.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(m),h=null,f=await l.requestReferenceSpace(p),W.setContext(l),W.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function D(X){for(let re=0;re<X.removed.length;re++){const ue=X.removed[re],we=B.indexOf(ue);we>=0&&(B[we]=null,K[we].disconnect(ue))}for(let re=0;re<X.added.length;re++){const ue=X.added[re];let we=B.indexOf(ue);if(we===-1){for(let be=0;be<K.length;be++)if(be>=B.length){B.push(ue),we=be;break}else if(B[be]===null){B[be]=ue,we=be;break}if(we===-1)break}const Se=K[we];Se&&Se.connect(ue)}}const w=new ce,R=new ce;function O(X,re,ue){w.setFromMatrixPosition(re.matrixWorld),R.setFromMatrixPosition(ue.matrixWorld);const we=w.distanceTo(R),Se=re.projectionMatrix.elements,be=ue.projectionMatrix.elements,Ze=Se[14]/(Se[10]-1),We=Se[14]/(Se[10]+1),ze=(Se[9]+1)/Se[5],Je=(Se[9]-1)/Se[5],tt=(Se[8]-1)/Se[0],gt=(be[8]+1)/be[0],pt=Ze*tt,Ct=Ze*gt,$=we/(-tt+gt),Et=$*-tt;if(re.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Et),X.translateZ($),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Se[10]===-1)X.projectionMatrix.copy(re.projectionMatrix),X.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const ot=Ze+$,mt=We+$,Le=pt-Et,Ft=Ct+(we-Et),I=ze*We/mt*ot,C=Je*We/mt*ot;X.projectionMatrix.makePerspective(Le,Ft,I,C,ot,mt),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function T(X,re){re===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(re.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(l===null)return;let re=X.near,ue=X.far;b.texture!==null&&(b.depthNear>0&&(re=b.depthNear),b.depthFar>0&&(ue=b.depthFar)),te.near=J.near=k.near=re,te.far=J.far=k.far=ue,(_e!==te.near||ae!==te.far)&&(l.updateRenderState({depthNear:te.near,depthFar:te.far}),_e=te.near,ae=te.far),te.layers.mask=X.layers.mask|6,k.layers.mask=te.layers.mask&-5,J.layers.mask=te.layers.mask&-3;const we=X.parent,Se=te.cameras;T(te,we);for(let be=0;be<Se.length;be++)T(Se[be],we);Se.length===2?O(te,k,J):te.projectionMatrix.copy(k.projectionMatrix),S(X,te,we)};function S(X,re,ue){ue===null?X.matrix.copy(re.matrixWorld):(X.matrix.copy(ue.matrixWorld),X.matrix.invert(),X.matrix.multiply(re.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(re.projectionMatrix),X.projectionMatrixInverse.copy(re.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Kh*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return te},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(X){m=X,x!==null&&(x.fixedFoveation=X),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=X)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(te)},this.getCameraTexture=function(X){return y[X]};let V=null;function Y(X,re){if(g=re.getViewerPose(h||f),E=re,g!==null){const ue=g.views;M!==null&&(e.setRenderTargetFramebuffer(z,M.framebuffer),e.setRenderTarget(z));let we=!1;ue.length!==te.cameras.length&&(te.cameras.length=0,we=!0);for(let We=0;We<ue.length;We++){const ze=ue[We];let Je=null;if(M!==null)Je=M.getViewport(ze);else{const gt=_.getViewSubImage(x,ze);Je=gt.viewport,We===0&&(e.setRenderTargetTextures(z,gt.colorTexture,gt.depthStencilTexture),e.setRenderTarget(z))}let tt=Z[We];tt===void 0&&(tt=new Ui,tt.layers.enable(We),tt.viewport=new vn,Z[We]=tt),tt.matrix.fromArray(ze.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(ze.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(Je.x,Je.y,Je.width,Je.height),We===0&&(te.matrix.copy(tt.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale)),we===!0&&te.cameras.push(tt)}const Se=l.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&U){_=s.getBinding();const We=_.getDepthInformation(ue[0]);We&&We.isValid&&We.texture&&b.init(We,l.renderState)}if(Se&&Se.includes("camera-access")&&U){e.state.unbindTexture(),_=s.getBinding();for(let We=0;We<ue.length;We++){const ze=ue[We].camera;if(ze){let Je=y[ze];Je||(Je=new q_,y[ze]=Je);const tt=_.getCameraImage(ze);Je.sourceTexture=tt}}}}for(let ue=0;ue<K.length;ue++){const we=B[ue],Se=K[ue];we!==null&&Se!==void 0&&Se.update(we,re,h||f)}V&&V(X,re),re.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:re}),E=null}const W=new Q_;W.setAnimationLoop(Y),this.setAnimationLoop=function(X){V=X},this.dispose=function(){}}}const XA=new Rn,av=new _t;av.set(-1,0,0,0,1,0,0,0,1);function qA(r,e){function i(b,y){b.matrixAutoUpdate===!0&&b.updateMatrix(),y.value.copy(b.matrix)}function s(b,y){y.color.getRGB(b.fogColor.value,Y_(r)),y.isFog?(b.fogNear.value=y.near,b.fogFar.value=y.far):y.isFogExp2&&(b.fogDensity.value=y.density)}function l(b,y,F,G,z){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?c(b,y):y.isMeshLambertMaterial?(c(b,y),y.envMap&&(b.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(b,y),_(b,y)):y.isMeshPhongMaterial?(c(b,y),g(b,y),y.envMap&&(b.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(b,y),x(b,y),y.isMeshPhysicalMaterial&&M(b,y,z)):y.isMeshMatcapMaterial?(c(b,y),E(b,y)):y.isMeshDepthMaterial?c(b,y):y.isMeshDistanceMaterial?(c(b,y),U(b,y)):y.isMeshNormalMaterial?c(b,y):y.isLineBasicMaterial?(f(b,y),y.isLineDashedMaterial&&p(b,y)):y.isPointsMaterial?m(b,y,F,G):y.isSpriteMaterial?h(b,y):y.isShadowMaterial?(b.color.value.copy(y.color),b.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(b,y){b.opacity.value=y.opacity,y.color&&b.diffuse.value.copy(y.color),y.emissive&&b.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(b.map.value=y.map,i(y.map,b.mapTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,i(y.alphaMap,b.alphaMapTransform)),y.bumpMap&&(b.bumpMap.value=y.bumpMap,i(y.bumpMap,b.bumpMapTransform),b.bumpScale.value=y.bumpScale,y.side===li&&(b.bumpScale.value*=-1)),y.normalMap&&(b.normalMap.value=y.normalMap,i(y.normalMap,b.normalMapTransform),b.normalScale.value.copy(y.normalScale),y.side===li&&b.normalScale.value.negate()),y.displacementMap&&(b.displacementMap.value=y.displacementMap,i(y.displacementMap,b.displacementMapTransform),b.displacementScale.value=y.displacementScale,b.displacementBias.value=y.displacementBias),y.emissiveMap&&(b.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,b.emissiveMapTransform)),y.specularMap&&(b.specularMap.value=y.specularMap,i(y.specularMap,b.specularMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest);const F=e.get(y),G=F.envMap,z=F.envMapRotation;G&&(b.envMap.value=G,b.envMapRotation.value.setFromMatrix4(XA.makeRotationFromEuler(z)).transpose(),G.isCubeTexture&&G.isRenderTargetTexture===!1&&b.envMapRotation.value.premultiply(av),b.reflectivity.value=y.reflectivity,b.ior.value=y.ior,b.refractionRatio.value=y.refractionRatio),y.lightMap&&(b.lightMap.value=y.lightMap,b.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,b.lightMapTransform)),y.aoMap&&(b.aoMap.value=y.aoMap,b.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,b.aoMapTransform))}function f(b,y){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,y.map&&(b.map.value=y.map,i(y.map,b.mapTransform))}function p(b,y){b.dashSize.value=y.dashSize,b.totalSize.value=y.dashSize+y.gapSize,b.scale.value=y.scale}function m(b,y,F,G){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,b.size.value=y.size*F,b.scale.value=G*.5,y.map&&(b.map.value=y.map,i(y.map,b.uvTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,i(y.alphaMap,b.alphaMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest)}function h(b,y){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,b.rotation.value=y.rotation,y.map&&(b.map.value=y.map,i(y.map,b.mapTransform)),y.alphaMap&&(b.alphaMap.value=y.alphaMap,i(y.alphaMap,b.alphaMapTransform)),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest)}function g(b,y){b.specular.value.copy(y.specular),b.shininess.value=Math.max(y.shininess,1e-4)}function _(b,y){y.gradientMap&&(b.gradientMap.value=y.gradientMap)}function x(b,y){b.metalness.value=y.metalness,y.metalnessMap&&(b.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,b.metalnessMapTransform)),b.roughness.value=y.roughness,y.roughnessMap&&(b.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,b.roughnessMapTransform)),y.envMap&&(b.envMapIntensity.value=y.envMapIntensity)}function M(b,y,F){b.ior.value=y.ior,y.sheen>0&&(b.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),b.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(b.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,b.sheenColorMapTransform)),y.sheenRoughnessMap&&(b.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,b.sheenRoughnessMapTransform))),y.clearcoat>0&&(b.clearcoat.value=y.clearcoat,b.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(b.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,b.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(b.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===li&&b.clearcoatNormalScale.value.negate())),y.dispersion>0&&(b.dispersion.value=y.dispersion),y.iridescence>0&&(b.iridescence.value=y.iridescence,b.iridescenceIOR.value=y.iridescenceIOR,b.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(b.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,b.iridescenceMapTransform)),y.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),y.transmission>0&&(b.transmission.value=y.transmission,b.transmissionSamplerMap.value=F.texture,b.transmissionSamplerSize.value.set(F.width,F.height),y.transmissionMap&&(b.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,b.transmissionMapTransform)),b.thickness.value=y.thickness,y.thicknessMap&&(b.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=y.attenuationDistance,b.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(b.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(b.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=y.specularIntensity,b.specularColor.value.copy(y.specularColor),y.specularColorMap&&(b.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,b.specularColorMapTransform)),y.specularIntensityMap&&(b.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,b.specularIntensityMapTransform))}function E(b,y){y.matcap&&(b.matcap.value=y.matcap)}function U(b,y){const F=e.get(y).light;b.referencePosition.value.setFromMatrixPosition(F.matrixWorld),b.nearDistance.value=F.shadow.camera.near,b.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function YA(r,e,i,s){let l={},c={},f=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(F,G){const z=G.program;s.uniformBlockBinding(F,z)}function h(F,G){let z=l[F.id];z===void 0&&(E(F),z=g(F),l[F.id]=z,F.addEventListener("dispose",b));const K=G.program;s.updateUBOMapping(F,K);const B=e.render.frame;c[F.id]!==B&&(x(F),c[F.id]=B)}function g(F){const G=_();F.__bindingPointIndex=G;const z=r.createBuffer(),K=F.__size,B=F.usage;return r.bindBuffer(r.UNIFORM_BUFFER,z),r.bufferData(r.UNIFORM_BUFFER,K,B),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,G,z),z}function _(){for(let F=0;F<p;F++)if(f.indexOf(F)===-1)return f.push(F),F;return Ht("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(F){const G=l[F.id],z=F.uniforms,K=F.__cache;r.bindBuffer(r.UNIFORM_BUFFER,G);for(let B=0,j=z.length;B<j;B++){const N=Array.isArray(z[B])?z[B]:[z[B]];for(let k=0,J=N.length;k<J;k++){const Z=N[k];if(M(Z,B,k,K)===!0){const te=Z.__offset,_e=Array.isArray(Z.value)?Z.value:[Z.value];let ae=0;for(let q=0;q<_e.length;q++){const H=_e[q],D=U(H);typeof H=="number"||typeof H=="boolean"?(Z.__data[0]=H,r.bufferSubData(r.UNIFORM_BUFFER,te+ae,Z.__data)):H.isMatrix3?(Z.__data[0]=H.elements[0],Z.__data[1]=H.elements[1],Z.__data[2]=H.elements[2],Z.__data[3]=0,Z.__data[4]=H.elements[3],Z.__data[5]=H.elements[4],Z.__data[6]=H.elements[5],Z.__data[7]=0,Z.__data[8]=H.elements[6],Z.__data[9]=H.elements[7],Z.__data[10]=H.elements[8],Z.__data[11]=0):ArrayBuffer.isView(H)?Z.__data.set(new H.constructor(H.buffer,H.byteOffset,Z.__data.length)):(H.toArray(Z.__data,ae),ae+=D.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,te,Z.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(F,G,z,K){const B=F.value,j=G+"_"+z;if(K[j]===void 0)return typeof B=="number"||typeof B=="boolean"?K[j]=B:ArrayBuffer.isView(B)?K[j]=B.slice():K[j]=B.clone(),!0;{const N=K[j];if(typeof B=="number"||typeof B=="boolean"){if(N!==B)return K[j]=B,!0}else{if(ArrayBuffer.isView(B))return!0;if(N.equals(B)===!1)return N.copy(B),!0}}return!1}function E(F){const G=F.uniforms;let z=0;const K=16;for(let j=0,N=G.length;j<N;j++){const k=Array.isArray(G[j])?G[j]:[G[j]];for(let J=0,Z=k.length;J<Z;J++){const te=k[J],_e=Array.isArray(te.value)?te.value:[te.value];for(let ae=0,q=_e.length;ae<q;ae++){const H=_e[ae],D=U(H),w=z%K,R=w%D.boundary,O=w+R;z+=R,O!==0&&K-O<D.storage&&(z+=K-O),te.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=z,z+=D.storage}}}const B=z%K;return B>0&&(z+=K-B),F.__size=z,F.__cache={},this}function U(F){const G={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(G.boundary=4,G.storage=4):F.isVector2?(G.boundary=8,G.storage=8):F.isVector3||F.isColor?(G.boundary=16,G.storage=12):F.isVector4?(G.boundary=16,G.storage=16):F.isMatrix3?(G.boundary=48,G.storage=48):F.isMatrix4?(G.boundary=64,G.storage=64):F.isTexture?ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(F)?(G.boundary=16,G.storage=F.byteLength):ht("WebGLRenderer: Unsupported uniform value type.",F),G}function b(F){const G=F.target;G.removeEventListener("dispose",b);const z=f.indexOf(G.__bindingPointIndex);f.splice(z,1),r.deleteBuffer(l[G.id]),delete l[G.id],delete c[G.id]}function y(){for(const F in l)r.deleteBuffer(l[F]);f=[],l={},c={}}return{bind:m,update:h,dispose:y}}const ZA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ji=null;function KA(){return Ji===null&&(Ji=new Ib(ZA,16,16,Js,La),Ji.name="DFG_LUT",Ji.minFilter=Zn,Ji.magFilter=Zn,Ji.wrapS=Na,Ji.wrapT=Na,Ji.generateMipmaps=!1,Ji.needsUpdate=!0),Ji}class QA{constructor(e={}){const{canvas:i=hb(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1,outputBufferType:M=Li}=e;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=f;const U=M,b=new Set([rp,sp,ap]),y=new Set([Li,aa,al,sl,np,ip]),F=new Uint32Array(4),G=new Int32Array(4),z=new ce;let K=null,B=null;const j=[],N=[];let k=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=na,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const J=this;let Z=!1,te=null;this._outputColorSpace=Di;let _e=0,ae=0,q=null,H=-1,D=null;const w=new vn,R=new vn;let O=null;const T=new Lt(0);let S=0,V=i.width,Y=i.height,W=1,X=null,re=null;const ue=new vn(0,0,V,Y),we=new vn(0,0,V,Y);let Se=!1;const be=new j_;let Ze=!1,We=!1;const ze=new Rn,Je=new ce,tt=new vn,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function Ct(){return q===null?W:1}let $=s;function Et(L,se){return i.getContext(L,se)}try{const L={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${ep}`),i.addEventListener("webglcontextlost",me,!1),i.addEventListener("webglcontextrestored",Pe,!1),i.addEventListener("webglcontextcreationerror",Ne,!1),$===null){const se="webgl2";if($=Et(se,L),$===null)throw Et(se)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw Ht("WebGLRenderer: "+L.message),L}let ot,mt,Le,Ft,I,C,ie,Ee,Ue,Ie,Ge,ye,Me,Ve,ke,He,Be,ut,ft,vt,ee,Fe,le;function Ae(){ot=new KE($),ot.init(),ee=new GA($,ot),mt=new VE($,ot,e,ee),Le=new BA($,ot),mt.reversedDepthBuffer&&x&&Le.buffers.depth.setReversed(!0),Ft=new $E($),I=new TA,C=new HA($,ot,Le,I,mt,ee,Ft),ie=new ZE(J),Ee=new iM($),Fe=new HE($,Ee),Ue=new QE($,Ee,Ft,Fe),Ie=new tT($,Ue,Ee,Fe,Ft),ut=new eT($,mt,C),ke=new kE(I),Ge=new EA(J,ie,ot,mt,Fe,ke),ye=new qA(J,I),Me=new RA,Ve=new LA(ot),Be=new BE(J,ie,Le,Ie,E,m),He=new zA(J,Ie,mt),le=new YA($,Ft,mt,Le),ft=new GE($,ot,Ft),vt=new JE($,ot,Ft),Ft.programs=Ge.programs,J.capabilities=mt,J.extensions=ot,J.properties=I,J.renderLists=Me,J.shadowMap=He,J.state=Le,J.info=Ft}Ae(),U!==Li&&(k=new iT(U,i.width,i.height,l,c));const Oe=new WA(J,$);this.xr=Oe,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const L=ot.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=ot.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(L){L!==void 0&&(W=L,this.setSize(V,Y,!1))},this.getSize=function(L){return L.set(V,Y)},this.setSize=function(L,se,ge=!0){if(Oe.isPresenting){ht("WebGLRenderer: Can't change size while VR device is presenting.");return}V=L,Y=se,i.width=Math.floor(L*W),i.height=Math.floor(se*W),ge===!0&&(i.style.width=L+"px",i.style.height=se+"px"),k!==null&&k.setSize(i.width,i.height),this.setViewport(0,0,L,se)},this.getDrawingBufferSize=function(L){return L.set(V*W,Y*W).floor()},this.setDrawingBufferSize=function(L,se,ge){V=L,Y=se,W=ge,i.width=Math.floor(L*ge),i.height=Math.floor(se*ge),this.setViewport(0,0,L,se)},this.setEffects=function(L){if(U===Li){Ht("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let se=0;se<L.length;se++)if(L[se].isOutputPass===!0){ht("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(w)},this.getViewport=function(L){return L.copy(ue)},this.setViewport=function(L,se,ge,he){L.isVector4?ue.set(L.x,L.y,L.z,L.w):ue.set(L,se,ge,he),Le.viewport(w.copy(ue).multiplyScalar(W).round())},this.getScissor=function(L){return L.copy(we)},this.setScissor=function(L,se,ge,he){L.isVector4?we.set(L.x,L.y,L.z,L.w):we.set(L,se,ge,he),Le.scissor(R.copy(we).multiplyScalar(W).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(L){Le.setScissorTest(Se=L)},this.setOpaqueSort=function(L){X=L},this.setTransparentSort=function(L){re=L},this.getClearColor=function(L){return L.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(L=!0,se=!0,ge=!0){let he=0;if(L){let pe=!1;if(q!==null){const qe=q.texture.format;pe=b.has(qe)}if(pe){const qe=q.texture.type,$e=y.has(qe),Xe=Be.getClearColor(),nt=Be.getClearAlpha(),et=Xe.r,lt=Xe.g,St=Xe.b;$e?(F[0]=et,F[1]=lt,F[2]=St,F[3]=nt,$.clearBufferuiv($.COLOR,0,F)):(G[0]=et,G[1]=lt,G[2]=St,G[3]=nt,$.clearBufferiv($.COLOR,0,G))}else he|=$.COLOR_BUFFER_BIT}se&&(he|=$.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ge&&(he|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),he!==0&&$.clear(he)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),te=L},this.dispose=function(){i.removeEventListener("webglcontextlost",me,!1),i.removeEventListener("webglcontextrestored",Pe,!1),i.removeEventListener("webglcontextcreationerror",Ne,!1),Be.dispose(),Me.dispose(),Ve.dispose(),I.dispose(),ie.dispose(),Ie.dispose(),Fe.dispose(),le.dispose(),Ge.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",yn),Oe.removeEventListener("sessionend",Fa),Vn.stop()};function me(L){L.preventDefault(),vx("WebGLRenderer: Context Lost."),Z=!0}function Pe(){vx("WebGLRenderer: Context Restored."),Z=!1;const L=Ft.autoReset,se=He.enabled,ge=He.autoUpdate,he=He.needsUpdate,pe=He.type;Ae(),Ft.autoReset=L,He.enabled=se,He.autoUpdate=ge,He.needsUpdate=he,He.type=pe}function Ne(L){Ht("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function je(L){const se=L.target;se.removeEventListener("dispose",je),at(se)}function at(L){yt(L),I.remove(L)}function yt(L){const se=I.get(L).programs;se!==void 0&&(se.forEach(function(ge){Ge.releaseProgram(ge)}),L.isShaderMaterial&&Ge.releaseShaderCache(L))}this.renderBufferDirect=function(L,se,ge,he,pe,qe){se===null&&(se=gt);const $e=pe.isMesh&&pe.matrixWorld.determinant()<0,Xe=Ba(L,se,ge,he,pe);Le.setMaterial(he,$e);let nt=ge.index,et=1;if(he.wireframe===!0){if(nt=Ue.getWireframeAttribute(ge),nt===void 0)return;et=2}const lt=ge.drawRange,St=ge.attributes.position;let rt=lt.start*et,Gt=(lt.start+lt.count)*et;qe!==null&&(rt=Math.max(rt,qe.start*et),Gt=Math.min(Gt,(qe.start+qe.count)*et)),nt!==null?(rt=Math.max(rt,0),Gt=Math.min(Gt,nt.count)):St!=null&&(rt=Math.max(rt,0),Gt=Math.min(Gt,St.count));const fn=Gt-rt;if(fn<0||fn===1/0)return;Fe.setup(pe,he,Xe,ge,nt);let rn,Yt=ft;if(nt!==null&&(rn=Ee.get(nt),Yt=vt,Yt.setIndex(rn)),pe.isMesh)he.wireframe===!0?(Le.setLineWidth(he.wireframeLinewidth*Ct()),Yt.setMode($.LINES)):Yt.setMode($.TRIANGLES);else if(pe.isLine){let Zt=he.linewidth;Zt===void 0&&(Zt=1),Le.setLineWidth(Zt*Ct()),pe.isLineSegments?Yt.setMode($.LINES):pe.isLineLoop?Yt.setMode($.LINE_LOOP):Yt.setMode($.LINE_STRIP)}else pe.isPoints?Yt.setMode($.POINTS):pe.isSprite&&Yt.setMode($.TRIANGLES);if(pe.isBatchedMesh)if(ot.get("WEBGL_multi_draw"))Yt.renderMultiDraw(pe._multiDrawStarts,pe._multiDrawCounts,pe._multiDrawCount);else{const Zt=pe._multiDrawStarts,Ke=pe._multiDrawCounts,kn=pe._multiDrawCount,wt=nt?Ee.get(nt).bytesPerElement:1,wn=I.get(he).currentProgram.getUniforms();for(let ci=0;ci<kn;ci++)wn.setValue($,"_gl_DrawID",ci),Yt.render(Zt[ci]/wt,Ke[ci])}else if(pe.isInstancedMesh)Yt.renderInstances(rt,fn,pe.count);else if(ge.isInstancedBufferGeometry){const Zt=ge._maxInstanceCount!==void 0?ge._maxInstanceCount:1/0,Ke=Math.min(ge.instanceCount,Zt);Yt.renderInstances(rt,fn,Ke)}else Yt.render(rt,fn)};function It(L,se,ge){L.transparent===!0&&L.side===wa&&L.forceSinglePass===!1?(L.side=li,L.needsUpdate=!0,er(L,se,ge),L.side=Ss,L.needsUpdate=!0,er(L,se,ge),L.side=wa):er(L,se,ge)}this.compile=function(L,se,ge=null){ge===null&&(ge=L),B=Ve.get(ge),B.init(se),N.push(B),ge.traverseVisible(function(pe){pe.isLight&&pe.layers.test(se.layers)&&(B.pushLight(pe),pe.castShadow&&B.pushShadow(pe))}),L!==ge&&L.traverseVisible(function(pe){pe.isLight&&pe.layers.test(se.layers)&&(B.pushLight(pe),pe.castShadow&&B.pushShadow(pe))}),B.setupLights();const he=new Set;return L.traverse(function(pe){if(!(pe.isMesh||pe.isPoints||pe.isLine||pe.isSprite))return;const qe=pe.material;if(qe)if(Array.isArray(qe))for(let $e=0;$e<qe.length;$e++){const Xe=qe[$e];It(Xe,ge,pe),he.add(Xe)}else It(qe,ge,pe),he.add(qe)}),B=N.pop(),he},this.compileAsync=function(L,se,ge=null){const he=this.compile(L,se,ge);return new Promise(pe=>{function qe(){if(he.forEach(function($e){I.get($e).currentProgram.isReady()&&he.delete($e)}),he.size===0){pe(L);return}setTimeout(qe,10)}ot.get("KHR_parallel_shader_compile")!==null?qe():setTimeout(qe,10)})};let Cn=null;function qt(L){Cn&&Cn(L)}function yn(){Vn.stop()}function Fa(){Vn.start()}const Vn=new Q_;Vn.setAnimationLoop(qt),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(L){Cn=L,Oe.setAnimationLoop(L),L===null?Vn.stop():Vn.start()},Oe.addEventListener("sessionstart",yn),Oe.addEventListener("sessionend",Fa),this.render=function(L,se){if(se!==void 0&&se.isCamera!==!0){Ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Z===!0)return;te!==null&&te.renderStart(L,se);const ge=Oe.enabled===!0&&Oe.isPresenting===!0,he=k!==null&&(q===null||ge)&&k.begin(J,q);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),se.parent===null&&se.matrixWorldAutoUpdate===!0&&se.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(k===null||k.isCompositing()===!1)&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(se),se=Oe.getCamera()),L.isScene===!0&&L.onBeforeRender(J,L,se,q),B=Ve.get(L,N.length),B.init(se),B.state.textureUnits=C.getTextureUnits(),N.push(B),ze.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),be.setFromProjectionMatrix(ze,ta,se.reversedDepth),We=this.localClippingEnabled,Ze=ke.init(this.clippingPlanes,We),K=Me.get(L,j.length),K.init(),j.push(K),Oe.enabled===!0&&Oe.isPresenting===!0){const $e=J.xr.getDepthSensingMesh();$e!==null&&gn($e,se,-1/0,J.sortObjects)}gn(L,se,0,J.sortObjects),K.finish(),J.sortObjects===!0&&K.sort(X,re),pt=Oe.enabled===!1||Oe.isPresenting===!1||Oe.hasDepthSensing()===!1,pt&&Be.addToRenderList(K,L),this.info.render.frame++,Ze===!0&&ke.beginShadows();const pe=B.state.shadowsArray;if(He.render(pe,L,se),Ze===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),(he&&k.hasRenderPass())===!1){const $e=K.opaque,Xe=K.transmissive;if(B.setupLights(),se.isArrayCamera){const nt=se.cameras;if(Xe.length>0)for(let et=0,lt=nt.length;et<lt;et++){const St=nt[et];ra($e,Xe,L,St)}pt&&Be.render(L);for(let et=0,lt=nt.length;et<lt;et++){const St=nt[et];Fn(K,L,St,St.viewport)}}else Xe.length>0&&ra($e,Xe,L,se),pt&&Be.render(L),Fn(K,L,se)}q!==null&&ae===0&&(C.updateMultisampleRenderTarget(q),C.updateRenderTargetMipmap(q)),he&&k.end(J),L.isScene===!0&&L.onAfterRender(J,L,se),Fe.resetDefaultState(),H=-1,D=null,N.pop(),N.length>0?(B=N[N.length-1],C.setTextureUnits(B.state.textureUnits),Ze===!0&&ke.setGlobalState(J.clippingPlanes,B.state.camera)):B=null,j.pop(),j.length>0?K=j[j.length-1]:K=null,te!==null&&te.renderEnd()};function gn(L,se,ge,he){if(L.visible===!1)return;if(L.layers.test(se.layers)){if(L.isGroup)ge=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(se);else if(L.isLightProbeGrid)B.pushLightProbeGrid(L);else if(L.isLight)B.pushLight(L),L.castShadow&&B.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||be.intersectsSprite(L)){he&&tt.setFromMatrixPosition(L.matrixWorld).applyMatrix4(ze);const $e=Ie.update(L),Xe=L.material;Xe.visible&&K.push(L,$e,Xe,ge,tt.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||be.intersectsObject(L))){const $e=Ie.update(L),Xe=L.material;if(he&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),tt.copy(L.boundingSphere.center)):($e.boundingSphere===null&&$e.computeBoundingSphere(),tt.copy($e.boundingSphere.center)),tt.applyMatrix4(L.matrixWorld).applyMatrix4(ze)),Array.isArray(Xe)){const nt=$e.groups;for(let et=0,lt=nt.length;et<lt;et++){const St=nt[et],rt=Xe[St.materialIndex];rt&&rt.visible&&K.push(L,$e,rt,ge,tt.z,St)}}else Xe.visible&&K.push(L,$e,Xe,ge,tt.z,null)}}const qe=L.children;for(let $e=0,Xe=qe.length;$e<Xe;$e++)gn(qe[$e],se,ge,he)}function Fn(L,se,ge,he){const{opaque:pe,transmissive:qe,transparent:$e}=L;B.setupLightsView(ge),Ze===!0&&ke.setGlobalState(J.clippingPlanes,ge),he&&Le.viewport(w.copy(he)),pe.length>0&&Ia(pe,se,ge),qe.length>0&&Ia(qe,se,ge),$e.length>0&&Ia($e,se,ge),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function ra(L,se,ge,he){if((ge.isScene===!0?ge.overrideMaterial:null)!==null)return;if(B.state.transmissionRenderTarget[he.id]===void 0){const rt=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");B.state.transmissionRenderTarget[he.id]=new ia(1,1,{generateMipmaps:!0,type:rt?La:Li,minFilter:Zs,samples:Math.max(4,mt.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Bt.workingColorSpace})}const qe=B.state.transmissionRenderTarget[he.id],$e=he.viewport||w;qe.setSize($e.z*J.transmissionResolutionScale,$e.w*J.transmissionResolutionScale);const Xe=J.getRenderTarget(),nt=J.getActiveCubeFace(),et=J.getActiveMipmapLevel();J.setRenderTarget(qe),J.getClearColor(T),S=J.getClearAlpha(),S<1&&J.setClearColor(16777215,.5),J.clear(),pt&&Be.render(ge);const lt=J.toneMapping;J.toneMapping=na;const St=he.viewport;if(he.viewport!==void 0&&(he.viewport=void 0),B.setupLightsView(he),Ze===!0&&ke.setGlobalState(J.clippingPlanes,he),Ia(L,ge,he),C.updateMultisampleRenderTarget(qe),C.updateRenderTargetMipmap(qe),ot.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let Gt=0,fn=se.length;Gt<fn;Gt++){const rn=se[Gt],{object:Yt,geometry:Zt,material:Ke,group:kn}=rn;if(Ke.side===wa&&Yt.layers.test(he.layers)){const wt=Ke.side;Ke.side=li,Ke.needsUpdate=!0,ul(Yt,ge,he,Zt,Ke,kn),Ke.side=wt,Ke.needsUpdate=!0,rt=!0}}rt===!0&&(C.updateMultisampleRenderTarget(qe),C.updateRenderTargetMipmap(qe))}J.setRenderTarget(Xe,nt,et),J.setClearColor(T,S),St!==void 0&&(he.viewport=St),J.toneMapping=lt}function Ia(L,se,ge){const he=se.isScene===!0?se.overrideMaterial:null;for(let pe=0,qe=L.length;pe<qe;pe++){const $e=L[pe],{object:Xe,geometry:nt,group:et}=$e;let lt=$e.material;lt.allowOverride===!0&&he!==null&&(lt=he),Xe.layers.test(ge.layers)&&ul(Xe,se,ge,nt,lt,et)}}function ul(L,se,ge,he,pe,qe){L.onBeforeRender(J,se,ge,he,pe,qe),L.modelViewMatrix.multiplyMatrices(ge.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),pe.onBeforeRender(J,se,ge,he,L,qe),pe.transparent===!0&&pe.side===wa&&pe.forceSinglePass===!1?(pe.side=li,pe.needsUpdate=!0,J.renderBufferDirect(ge,se,he,pe,L,qe),pe.side=Ss,pe.needsUpdate=!0,J.renderBufferDirect(ge,se,he,pe,L,qe),pe.side=wa):J.renderBufferDirect(ge,se,he,pe,L,qe),L.onAfterRender(J,se,ge,he,pe,qe)}function er(L,se,ge){se.isScene!==!0&&(se=gt);const he=I.get(L),pe=B.state.lights,qe=B.state.shadowsArray,$e=pe.state.version,Xe=Ge.getParameters(L,pe.state,qe,se,ge,B.state.lightProbeGridArray),nt=Ge.getProgramCacheKey(Xe);let et=he.programs;he.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?se.environment:null,he.fog=se.fog;const lt=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;he.envMap=ie.get(L.envMap||he.environment,lt),he.envMapRotation=he.environment!==null&&L.envMap===null?se.environmentRotation:L.envMapRotation,et===void 0&&(L.addEventListener("dispose",je),et=new Map,he.programs=et);let St=et.get(nt);if(St!==void 0){if(he.currentProgram===St&&he.lightsStateVersion===$e)return za(L,Xe),St}else Xe.uniforms=Ge.getUniforms(L),te!==null&&L.isNodeMaterial&&te.build(L,ge,Xe),L.onBeforeCompile(Xe,J),St=Ge.acquireProgram(Xe,nt),et.set(nt,St),he.uniforms=Xe.uniforms;const rt=he.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(rt.clippingPlanes=ke.uniform),za(L,Xe),he.needsLights=Es(L),he.lightsStateVersion=$e,he.needsLights&&(rt.ambientLightColor.value=pe.state.ambient,rt.lightProbe.value=pe.state.probe,rt.directionalLights.value=pe.state.directional,rt.directionalLightShadows.value=pe.state.directionalShadow,rt.spotLights.value=pe.state.spot,rt.spotLightShadows.value=pe.state.spotShadow,rt.rectAreaLights.value=pe.state.rectArea,rt.ltc_1.value=pe.state.rectAreaLTC1,rt.ltc_2.value=pe.state.rectAreaLTC2,rt.pointLights.value=pe.state.point,rt.pointLightShadows.value=pe.state.pointShadow,rt.hemisphereLights.value=pe.state.hemi,rt.directionalShadowMatrix.value=pe.state.directionalShadowMatrix,rt.spotLightMatrix.value=pe.state.spotLightMatrix,rt.spotLightMap.value=pe.state.spotLightMap,rt.pointShadowMatrix.value=pe.state.pointShadowMatrix),he.lightProbeGrid=B.state.lightProbeGridArray.length>0,he.currentProgram=St,he.uniformsList=null,St}function no(L){if(L.uniformsList===null){const se=L.currentProgram.getUniforms();L.uniformsList=Jc.seqWithValue(se.seq,L.uniforms)}return L.uniformsList}function za(L,se){const ge=I.get(L);ge.outputColorSpace=se.outputColorSpace,ge.batching=se.batching,ge.batchingColor=se.batchingColor,ge.instancing=se.instancing,ge.instancingColor=se.instancingColor,ge.instancingMorph=se.instancingMorph,ge.skinning=se.skinning,ge.morphTargets=se.morphTargets,ge.morphNormals=se.morphNormals,ge.morphColors=se.morphColors,ge.morphTargetsCount=se.morphTargetsCount,ge.numClippingPlanes=se.numClippingPlanes,ge.numIntersection=se.numClipIntersection,ge.vertexAlphas=se.vertexAlphas,ge.vertexTangents=se.vertexTangents,ge.toneMapping=se.toneMapping}function io(L,se){if(L.length===0)return null;if(L.length===1)return L[0].texture!==null?L[0]:null;z.setFromMatrixPosition(se.matrixWorld);for(let ge=0,he=L.length;ge<he;ge++){const pe=L[ge];if(pe.texture!==null&&pe.boundingBox.containsPoint(z))return pe}return null}function Ba(L,se,ge,he,pe){se.isScene!==!0&&(se=gt),C.resetTextureUnits();const qe=se.fog,$e=he.isMeshStandardMaterial||he.isMeshLambertMaterial||he.isMeshPhongMaterial?se.environment:null,Xe=q===null?J.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Bt.workingColorSpace,nt=he.isMeshStandardMaterial||he.isMeshLambertMaterial&&!he.envMap||he.isMeshPhongMaterial&&!he.envMap,et=ie.get(he.envMap||$e,nt),lt=he.vertexColors===!0&&!!ge.attributes.color&&ge.attributes.color.itemSize===4,St=!!ge.attributes.tangent&&(!!he.normalMap||he.anisotropy>0),rt=!!ge.morphAttributes.position,Gt=!!ge.morphAttributes.normal,fn=!!ge.morphAttributes.color;let rn=na;he.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(rn=J.toneMapping);const Yt=ge.morphAttributes.position||ge.morphAttributes.normal||ge.morphAttributes.color,Zt=Yt!==void 0?Yt.length:0,Ke=I.get(he),kn=B.state.lights;if(Ze===!0&&(We===!0||L!==D)){const Xt=L===D&&he.id===H;ke.setState(he,L,Xt)}let wt=!1;he.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==kn.state.version||Ke.outputColorSpace!==Xe||pe.isBatchedMesh&&Ke.batching===!1||!pe.isBatchedMesh&&Ke.batching===!0||pe.isBatchedMesh&&Ke.batchingColor===!0&&pe.colorTexture===null||pe.isBatchedMesh&&Ke.batchingColor===!1&&pe.colorTexture!==null||pe.isInstancedMesh&&Ke.instancing===!1||!pe.isInstancedMesh&&Ke.instancing===!0||pe.isSkinnedMesh&&Ke.skinning===!1||!pe.isSkinnedMesh&&Ke.skinning===!0||pe.isInstancedMesh&&Ke.instancingColor===!0&&pe.instanceColor===null||pe.isInstancedMesh&&Ke.instancingColor===!1&&pe.instanceColor!==null||pe.isInstancedMesh&&Ke.instancingMorph===!0&&pe.morphTexture===null||pe.isInstancedMesh&&Ke.instancingMorph===!1&&pe.morphTexture!==null||Ke.envMap!==et||he.fog===!0&&Ke.fog!==qe||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==ke.numPlanes||Ke.numIntersection!==ke.numIntersection)||Ke.vertexAlphas!==lt||Ke.vertexTangents!==St||Ke.morphTargets!==rt||Ke.morphNormals!==Gt||Ke.morphColors!==fn||Ke.toneMapping!==rn||Ke.morphTargetsCount!==Zt||!!Ke.lightProbeGrid!=B.state.lightProbeGridArray.length>0)&&(wt=!0):(wt=!0,Ke.__version=he.version);let wn=Ke.currentProgram;wt===!0&&(wn=er(he,se,pe),te&&he.isNodeMaterial&&te.onUpdateProgram(he,wn,Ke));let ci=!1,Fi=!1,ui=!1;const Kt=wn.getUniforms(),dn=Ke.uniforms;if(Le.useProgram(wn.program)&&(ci=!0,Fi=!0,ui=!0),he.id!==H&&(H=he.id,Fi=!0),Ke.needsLights){const Xt=io(B.state.lightProbeGridArray,pe);Ke.lightProbeGrid!==Xt&&(Ke.lightProbeGrid=Xt,Fi=!0)}if(ci||D!==L){Le.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),Kt.setValue($,"projectionMatrix",L.projectionMatrix),Kt.setValue($,"viewMatrix",L.matrixWorldInverse);const Xi=Kt.map.cameraPosition;Xi!==void 0&&Xi.setValue($,Je.setFromMatrixPosition(L.matrixWorld)),mt.logarithmicDepthBuffer&&Kt.setValue($,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(he.isMeshPhongMaterial||he.isMeshToonMaterial||he.isMeshLambertMaterial||he.isMeshBasicMaterial||he.isMeshStandardMaterial||he.isShaderMaterial)&&Kt.setValue($,"isOrthographic",L.isOrthographicCamera===!0),D!==L&&(D=L,Fi=!0,ui=!0)}if(Ke.needsLights&&(kn.state.directionalShadowMap.length>0&&Kt.setValue($,"directionalShadowMap",kn.state.directionalShadowMap,C),kn.state.spotShadowMap.length>0&&Kt.setValue($,"spotShadowMap",kn.state.spotShadowMap,C),kn.state.pointShadowMap.length>0&&Kt.setValue($,"pointShadowMap",kn.state.pointShadowMap,C)),pe.isSkinnedMesh){Kt.setOptional($,pe,"bindMatrix"),Kt.setOptional($,pe,"bindMatrixInverse");const Xt=pe.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),Kt.setValue($,"boneTexture",Xt.boneTexture,C))}pe.isBatchedMesh&&(Kt.setOptional($,pe,"batchingTexture"),Kt.setValue($,"batchingTexture",pe._matricesTexture,C),Kt.setOptional($,pe,"batchingIdTexture"),Kt.setValue($,"batchingIdTexture",pe._indirectTexture,C),Kt.setOptional($,pe,"batchingColorTexture"),pe._colorsTexture!==null&&Kt.setValue($,"batchingColorTexture",pe._colorsTexture,C));const Ii=ge.morphAttributes;if((Ii.position!==void 0||Ii.normal!==void 0||Ii.color!==void 0)&&ut.update(pe,ge,wn),(Fi||Ke.receiveShadow!==pe.receiveShadow)&&(Ke.receiveShadow=pe.receiveShadow,Kt.setValue($,"receiveShadow",pe.receiveShadow)),(he.isMeshStandardMaterial||he.isMeshLambertMaterial||he.isMeshPhongMaterial)&&he.envMap===null&&se.environment!==null&&(dn.envMapIntensity.value=se.environmentIntensity),dn.dfgLUT!==void 0&&(dn.dfgLUT.value=KA()),Fi){if(Kt.setValue($,"toneMappingExposure",J.toneMappingExposure),Ke.needsLights&&Ha(dn,ui),qe&&he.fog===!0&&ye.refreshFogUniforms(dn,qe),ye.refreshMaterialUniforms(dn,he,W,Y,B.state.transmissionRenderTarget[L.id]),Ke.needsLights&&Ke.lightProbeGrid){const Xt=Ke.lightProbeGrid;dn.probesSH.value=Xt.texture,dn.probesMin.value.copy(Xt.boundingBox.min),dn.probesMax.value.copy(Xt.boundingBox.max),dn.probesResolution.value.copy(Xt.resolution)}Jc.upload($,no(Ke),dn,C)}if(he.isShaderMaterial&&he.uniformsNeedUpdate===!0&&(Jc.upload($,no(Ke),dn,C),he.uniformsNeedUpdate=!1),he.isSpriteMaterial&&Kt.setValue($,"center",pe.center),Kt.setValue($,"modelViewMatrix",pe.modelViewMatrix),Kt.setValue($,"normalMatrix",pe.normalMatrix),Kt.setValue($,"modelMatrix",pe.matrixWorld),he.uniformsGroups!==void 0){const Xt=he.uniformsGroups;for(let Xi=0,Va=Xt.length;Xi<Va;Xi++){const Ts=Xt[Xi];le.update(Ts,wn),le.bind(Ts,wn)}}return wn}function Ha(L,se){L.ambientLightColor.needsUpdate=se,L.lightProbe.needsUpdate=se,L.directionalLights.needsUpdate=se,L.directionalLightShadows.needsUpdate=se,L.pointLights.needsUpdate=se,L.pointLightShadows.needsUpdate=se,L.spotLights.needsUpdate=se,L.spotLightShadows.needsUpdate=se,L.rectAreaLights.needsUpdate=se,L.hemisphereLights.needsUpdate=se}function Es(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return _e},this.getActiveMipmapLevel=function(){return ae},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(L,se,ge){const he=I.get(L);he.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,he.__autoAllocateDepthBuffer===!1&&(he.__useRenderToTexture=!1),I.get(L.texture).__webglTexture=se,I.get(L.depthTexture).__webglTexture=he.__autoAllocateDepthBuffer?void 0:ge,he.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,se){const ge=I.get(L);ge.__webglFramebuffer=se,ge.__useDefaultFramebuffer=se===void 0};const Ga=$.createFramebuffer();this.setRenderTarget=function(L,se=0,ge=0){q=L,_e=se,ae=ge;let he=null,pe=!1,qe=!1;if(L){const Xe=I.get(L);if(Xe.__useDefaultFramebuffer!==void 0){Le.bindFramebuffer($.FRAMEBUFFER,Xe.__webglFramebuffer),w.copy(L.viewport),R.copy(L.scissor),O=L.scissorTest,Le.viewport(w),Le.scissor(R),Le.setScissorTest(O),H=-1;return}else if(Xe.__webglFramebuffer===void 0)C.setupRenderTarget(L);else if(Xe.__hasExternalTextures)C.rebindTextures(L,I.get(L.texture).__webglTexture,I.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const lt=L.depthTexture;if(Xe.__boundDepthTexture!==lt){if(lt!==null&&I.has(lt)&&(L.width!==lt.image.width||L.height!==lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(L)}}const nt=L.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(qe=!0);const et=I.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(et[se])?he=et[se][ge]:he=et[se],pe=!0):L.samples>0&&C.useMultisampledRTT(L)===!1?he=I.get(L).__webglMultisampledFramebuffer:Array.isArray(et)?he=et[ge]:he=et,w.copy(L.viewport),R.copy(L.scissor),O=L.scissorTest}else w.copy(ue).multiplyScalar(W).floor(),R.copy(we).multiplyScalar(W).floor(),O=Se;if(ge!==0&&(he=Ga),Le.bindFramebuffer($.FRAMEBUFFER,he)&&Le.drawBuffers(L,he),Le.viewport(w),Le.scissor(R),Le.setScissorTest(O),pe){const Xe=I.get(L.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+se,Xe.__webglTexture,ge)}else if(qe){const Xe=se;for(let nt=0;nt<L.textures.length;nt++){const et=I.get(L.textures[nt]);$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+nt,et.__webglTexture,ge,Xe)}}else if(L!==null&&ge!==0){const Xe=I.get(L.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Xe.__webglTexture,ge)}H=-1},this.readRenderTargetPixels=function(L,se,ge,he,pe,qe,$e,Xe=0){if(!(L&&L.isWebGLRenderTarget)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let nt=I.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&$e!==void 0&&(nt=nt[$e]),nt){Le.bindFramebuffer($.FRAMEBUFFER,nt);try{const et=L.textures[Xe],lt=et.format,St=et.type;if(L.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Xe),!mt.textureFormatReadable(lt)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!mt.textureTypeReadable(St)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}se>=0&&se<=L.width-he&&ge>=0&&ge<=L.height-pe&&$.readPixels(se,ge,he,pe,ee.convert(lt),ee.convert(St),qe)}finally{const et=q!==null?I.get(q).__webglFramebuffer:null;Le.bindFramebuffer($.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(L,se,ge,he,pe,qe,$e,Xe=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let nt=I.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&$e!==void 0&&(nt=nt[$e]),nt)if(se>=0&&se<=L.width-he&&ge>=0&&ge<=L.height-pe){Le.bindFramebuffer($.FRAMEBUFFER,nt);const et=L.textures[Xe],lt=et.format,St=et.type;if(L.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Xe),!mt.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!mt.textureTypeReadable(St))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const rt=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,rt),$.bufferData($.PIXEL_PACK_BUFFER,qe.byteLength,$.STREAM_READ),$.readPixels(se,ge,he,pe,ee.convert(lt),ee.convert(St),0);const Gt=q!==null?I.get(q).__webglFramebuffer:null;Le.bindFramebuffer($.FRAMEBUFFER,Gt);const fn=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await pb($,fn,4),$.bindBuffer($.PIXEL_PACK_BUFFER,rt),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,qe),$.deleteBuffer(rt),$.deleteSync(fn),qe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,se=null,ge=0){const he=Math.pow(2,-ge),pe=Math.floor(L.image.width*he),qe=Math.floor(L.image.height*he),$e=se!==null?se.x:0,Xe=se!==null?se.y:0;C.setTexture2D(L,0),$.copyTexSubImage2D($.TEXTURE_2D,ge,0,0,$e,Xe,pe,qe),Le.unbindTexture()};const Sn=$.createFramebuffer(),fl=$.createFramebuffer();this.copyTextureToTexture=function(L,se,ge=null,he=null,pe=0,qe=0){let $e,Xe,nt,et,lt,St,rt,Gt,fn;const rn=L.isCompressedTexture?L.mipmaps[qe]:L.image;if(ge!==null)$e=ge.max.x-ge.min.x,Xe=ge.max.y-ge.min.y,nt=ge.isBox3?ge.max.z-ge.min.z:1,et=ge.min.x,lt=ge.min.y,St=ge.isBox3?ge.min.z:0;else{const dn=Math.pow(2,-pe);$e=Math.floor(rn.width*dn),Xe=Math.floor(rn.height*dn),L.isDataArrayTexture?nt=rn.depth:L.isData3DTexture?nt=Math.floor(rn.depth*dn):nt=1,et=0,lt=0,St=0}he!==null?(rt=he.x,Gt=he.y,fn=he.z):(rt=0,Gt=0,fn=0);const Yt=ee.convert(se.format),Zt=ee.convert(se.type);let Ke;se.isData3DTexture?(C.setTexture3D(se,0),Ke=$.TEXTURE_3D):se.isDataArrayTexture||se.isCompressedArrayTexture?(C.setTexture2DArray(se,0),Ke=$.TEXTURE_2D_ARRAY):(C.setTexture2D(se,0),Ke=$.TEXTURE_2D),Le.activeTexture($.TEXTURE0),Le.pixelStorei($.UNPACK_FLIP_Y_WEBGL,se.flipY),Le.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),Le.pixelStorei($.UNPACK_ALIGNMENT,se.unpackAlignment);const kn=Le.getParameter($.UNPACK_ROW_LENGTH),wt=Le.getParameter($.UNPACK_IMAGE_HEIGHT),wn=Le.getParameter($.UNPACK_SKIP_PIXELS),ci=Le.getParameter($.UNPACK_SKIP_ROWS),Fi=Le.getParameter($.UNPACK_SKIP_IMAGES);Le.pixelStorei($.UNPACK_ROW_LENGTH,rn.width),Le.pixelStorei($.UNPACK_IMAGE_HEIGHT,rn.height),Le.pixelStorei($.UNPACK_SKIP_PIXELS,et),Le.pixelStorei($.UNPACK_SKIP_ROWS,lt),Le.pixelStorei($.UNPACK_SKIP_IMAGES,St);const ui=L.isDataArrayTexture||L.isData3DTexture,Kt=se.isDataArrayTexture||se.isData3DTexture;if(L.isDepthTexture){const dn=I.get(L),Ii=I.get(se),Xt=I.get(dn.__renderTarget),Xi=I.get(Ii.__renderTarget);Le.bindFramebuffer($.READ_FRAMEBUFFER,Xt.__webglFramebuffer),Le.bindFramebuffer($.DRAW_FRAMEBUFFER,Xi.__webglFramebuffer);for(let Va=0;Va<nt;Va++)ui&&($.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,I.get(L).__webglTexture,pe,St+Va),$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,I.get(se).__webglTexture,qe,fn+Va)),$.blitFramebuffer(et,lt,$e,Xe,rt,Gt,$e,Xe,$.DEPTH_BUFFER_BIT,$.NEAREST);Le.bindFramebuffer($.READ_FRAMEBUFFER,null),Le.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else if(pe!==0||L.isRenderTargetTexture||I.has(L)){const dn=I.get(L),Ii=I.get(se);Le.bindFramebuffer($.READ_FRAMEBUFFER,Sn),Le.bindFramebuffer($.DRAW_FRAMEBUFFER,fl);for(let Xt=0;Xt<nt;Xt++)ui?$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,dn.__webglTexture,pe,St+Xt):$.framebufferTexture2D($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,dn.__webglTexture,pe),Kt?$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Ii.__webglTexture,qe,fn+Xt):$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Ii.__webglTexture,qe),pe!==0?$.blitFramebuffer(et,lt,$e,Xe,rt,Gt,$e,Xe,$.COLOR_BUFFER_BIT,$.NEAREST):Kt?$.copyTexSubImage3D(Ke,qe,rt,Gt,fn+Xt,et,lt,$e,Xe):$.copyTexSubImage2D(Ke,qe,rt,Gt,et,lt,$e,Xe);Le.bindFramebuffer($.READ_FRAMEBUFFER,null),Le.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else Kt?L.isDataTexture||L.isData3DTexture?$.texSubImage3D(Ke,qe,rt,Gt,fn,$e,Xe,nt,Yt,Zt,rn.data):se.isCompressedArrayTexture?$.compressedTexSubImage3D(Ke,qe,rt,Gt,fn,$e,Xe,nt,Yt,rn.data):$.texSubImage3D(Ke,qe,rt,Gt,fn,$e,Xe,nt,Yt,Zt,rn):L.isDataTexture?$.texSubImage2D($.TEXTURE_2D,qe,rt,Gt,$e,Xe,Yt,Zt,rn.data):L.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,qe,rt,Gt,rn.width,rn.height,Yt,rn.data):$.texSubImage2D($.TEXTURE_2D,qe,rt,Gt,$e,Xe,Yt,Zt,rn);Le.pixelStorei($.UNPACK_ROW_LENGTH,kn),Le.pixelStorei($.UNPACK_IMAGE_HEIGHT,wt),Le.pixelStorei($.UNPACK_SKIP_PIXELS,wn),Le.pixelStorei($.UNPACK_SKIP_ROWS,ci),Le.pixelStorei($.UNPACK_SKIP_IMAGES,Fi),qe===0&&se.generateMipmaps&&$.generateMipmap(Ke),Le.unbindTexture()},this.initRenderTarget=function(L){I.get(L).__webglFramebuffer===void 0&&C.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?C.setTextureCube(L,0):L.isData3DTexture?C.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?C.setTexture2DArray(L,0):C.setTexture2D(L,0),Le.unbindTexture()},this.resetState=function(){_e=0,ae=0,q=null,Le.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ta}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Bt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Bt._getUnpackColorSpace()}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const $c=13,Xr=1e5,ln=new Float32Array(Xr*$c),At=new Lt,qn=new Lt,Yn=new Lt;function h_(r,e,i,s,l,c,f,p,m){if(m){At.set(m),r[e]=At.r,r[e+1]=At.g,r[e+2]=At.b;return}switch(i){case"solid":At.set(l),r[e]=At.r,r[e+1]=At.g,r[e+2]=At.b;break;case"rainbow":At.setHSL(s,.9,.55),r[e]=At.r,r[e+1]=At.g,r[e+2]=At.b;break;case"forest":{if(s<.2)r[e]=.4,r[e+1]=.25,r[e+2]=.13;else if(s<.7){const h=(s-.2)/.5;qn.set("#0f766e"),Yn.set("#10b981"),At.copy(qn).lerp(Yn,h),r[e]=At.r,r[e+1]=At.g,r[e+2]=At.b}else{const h=(s-.7)/.3;qn.set("#10b981"),Yn.set("#f59e0b"),At.copy(qn).lerp(Yn,h),r[e]=At.r,r[e+1]=At.g,r[e+2]=At.b}break}case"sunset":{if(s<.5){const h=s/.5;qn.set("#ec4899"),Yn.set("#f97316"),At.copy(qn).lerp(Yn,h)}else{const h=(s-.5)/.5;qn.set("#f97316"),Yn.set("#eab308"),At.copy(qn).lerp(Yn,h)}r[e]=At.r,r[e+1]=At.g,r[e+2]=At.b;break}case"depth":{const h=p-f||1,g=Math.max(0,Math.min(1,(c-f)/h));if(g<.5){const _=g/.5;qn.set("#4f46e5"),Yn.set("#06b6d4"),At.copy(qn).lerp(Yn,_)}else{const _=(g-.5)/.5;qn.set("#06b6d4"),Yn.set("#d946ef"),At.copy(qn).lerp(Yn,_)}r[e]=At.r,r[e+1]=At.g,r[e+2]=At.b;break}case"neon":{if(s<.3){const h=s/.3;qn.set("#00f5ff"),Yn.set("#9d00ff"),At.copy(qn).lerp(Yn,h)}else{const h=(s-.3)/.7;qn.set("#9d00ff"),Yn.set("#ff007f"),At.copy(qn).lerp(Yn,h)}r[e]=At.r,r[e+1]=At.g,r[e+2]=At.b;break}default:At.set(l),r[e]=At.r,r[e+1]=At.g,r[e+2]=At.b}}function jt(r,e,i,s,l,c,f,p){const m=Math.cos(f),h=Math.sin(f),g=l*i-c*e,_=c*r-s*i,x=s*e-l*r,M=(s*r+l*e+c*i)*(1-m);p.x=r*m+g*h+s*M,p.y=e*m+_*h+l*M,p.z=i*m+x*h+c*M;const E=Math.sqrt(p.x*p.x+p.y*p.y+p.z*p.z);E>1e-5&&(p.x/=E,p.y/=E,p.z/=E)}function sv(r,e,i,s,l){let c=0,f=!1,p=0,m=0;const h={};for(const S of e)S.symbol&&(h[S.symbol]=S);let g=0;const _=new Float32Array(Xr),x=new Float32Array(Xr),M=new Float32Array(Xr),E=new Float32Array(Xr);let U=0,b=0,y=0,F=0,G=1,z=0,K=0,B=0,j=0,N=0,k=0,J=0;function Z(S,V,Y){S<K&&(K=S),S>B&&(B=S),V<j&&(j=V),V>N&&(N=V),Y<k&&(k=Y),Y>J&&(J=Y)}const te={},_e={step:s,angle:l,...i};for(const S of e)S.symbol&&(S.valueExpression?te[S.symbol]=Ys(S.valueExpression,_e):S.actionType===Re.FORWARD||S.actionType===Re.FORWARD_NO_PEN?te[S.symbol]=s:te[S.symbol]=l);const ae={x:0,y:0,z:0};let q=0,H=0,D=1,w=1,R=0,O=0;const T=r.length;for(let S=0;S<T;S++){const V=r[S],Y=h[V];if(!Y)continue;const W=te[V]??0,X=W*Math.PI/180;switch(Y.actionType){case Re.FORWARD:{U+=F*W,b+=G*W,y+=z*W,Z(U,b,y),m+=W,m>p&&(p=m),c++;break}case Re.FORWARD_NO_PEN:{U+=F*W,b+=G*W,y+=z*W,Z(U,b,y),m+=W,m>p&&(p=m);break}case Re.TURN_LEFT:{jt(F,G,z,q,H,D,X,ae),F=ae.x,G=ae.y,z=ae.z,jt(w,R,O,q,H,D,X,ae),w=ae.x,R=ae.y,O=ae.z;break}case Re.TURN_RIGHT:{jt(F,G,z,q,H,D,-X,ae),F=ae.x,G=ae.y,z=ae.z,jt(w,R,O,q,H,D,-X,ae),w=ae.x,R=ae.y,O=ae.z;break}case Re.PUSH_STATE:{g<Xr&&(_[g]=U,x[g]=b,M[g]=y,E[g]=m,g++);break}case Re.POP_STATE:{g>0&&(g--,U=_[g],b=x[g],y=M[g],m=E[g]);break}case Re.PITCH_UP:case Re.PITCH_DOWN:case Re.ROLL_LEFT:case Re.ROLL_RIGHT:case Re.YAW_LEFT:case Re.YAW_RIGHT:case Re.TURN_ROUND:{f=!0,Y.actionType===Re.PITCH_UP?(jt(F,G,z,w,R,O,X,ae),F=ae.x,G=ae.y,z=ae.z,jt(q,H,D,w,R,O,X,ae),q=ae.x,H=ae.y,D=ae.z):Y.actionType===Re.PITCH_DOWN?(jt(F,G,z,w,R,O,-X,ae),F=ae.x,G=ae.y,z=ae.z,jt(q,H,D,w,R,O,-X,ae),q=ae.x,H=ae.y,D=ae.z):Y.actionType===Re.ROLL_LEFT?(jt(w,R,O,F,G,z,X,ae),w=ae.x,R=ae.y,O=ae.z,jt(q,H,D,F,G,z,X,ae),q=ae.x,H=ae.y,D=ae.z):Y.actionType===Re.ROLL_RIGHT?(jt(w,R,O,F,G,z,-X,ae),w=ae.x,R=ae.y,O=ae.z,jt(q,H,D,F,G,z,-X,ae),q=ae.x,H=ae.y,D=ae.z):Y.actionType===Re.YAW_LEFT?(jt(F,G,z,q,H,D,X,ae),F=ae.x,G=ae.y,z=ae.z,jt(w,R,O,q,H,D,X,ae),w=ae.x,R=ae.y,O=ae.z):Y.actionType===Re.YAW_RIGHT?(jt(F,G,z,q,H,D,-X,ae),F=ae.x,G=ae.y,z=ae.z,jt(w,R,O,q,H,D,-X,ae),w=ae.x,R=ae.y,O=ae.z):Y.actionType===Re.TURN_ROUND&&(F=-F,G=-G,z=-z,w=-w,R=-R,O=-O);break}}}return{segmentCount:c,is3D:f,boundingBox:{min:{x:K,y:j,z:k},max:{x:B,y:N,z:J}},maxPathDist:p}}function sh(r,e,i,s,l,c,f,p,m,h,g,_,x){const M={},E={},U={},b={step:s,angle:l,...i};for(const R of e)R.symbol&&(M[R.symbol]=R,R.valueExpression?E[R.symbol]=Ys(R.valueExpression,b):R.actionType===Re.FORWARD||R.actionType===Re.FORWARD_NO_PEN?E[R.symbol]=s:E[R.symbol]=l,R.colorExpression&&(U[R.symbol]=LS(R.colorExpression,b)));let y=0,F=0,G=0,z=0,K=1,B=0,j=0,N=0,k=1,J=1,Z=0,te=0,_e=0,ae=0,q=0;const H=p/100*(x||1),D={x:0,y:0,z:0},w=r.length;for(let R=0;R<w;R++){const O=r[R],T=M[O];if(!T)continue;const S=E[O]??0,V=U[O],Y=S*Math.PI/180;switch(T.actionType){case Re.FORWARD:{const W=y+z*S,X=F+K*S,re=G+B*S,ue=_e,we=_e+S,Se=ae*6;if(m==="tree")if(H<=ue)h[Se]=y,h[Se+1]=F,h[Se+2]=G,h[Se+3]=y,h[Se+4]=F,h[Se+5]=G;else if(H>=we)h[Se]=y,h[Se+1]=F,h[Se+2]=G,h[Se+3]=W,h[Se+4]=X,h[Se+5]=re;else{const Ze=(H-ue)/S;h[Se]=y,h[Se+1]=F,h[Se+2]=G,h[Se+3]=y+(W-y)*Ze,h[Se+4]=F+(X-F)*Ze,h[Se+5]=G+(re-G)*Ze}else h[Se]=y,h[Se+1]=F,h[Se+2]=G,h[Se+3]=W,h[Se+4]=X,h[Se+5]=re;const be=R/w;h_(g,Se,c,be,f,F,_.min.y,_.max.y,V),h_(g,Se+3,c,be,f,X,_.min.y,_.max.y,V),y=W,F=X,G=re,_e=we,ae++;break}case Re.FORWARD_NO_PEN:{y+=z*S,F+=K*S,G+=B*S,_e+=S;break}case Re.TURN_LEFT:{jt(z,K,B,j,N,k,Y,D),z=D.x,K=D.y,B=D.z,jt(J,Z,te,j,N,k,Y,D),J=D.x,Z=D.y,te=D.z;break}case Re.TURN_RIGHT:{jt(z,K,B,j,N,k,-Y,D),z=D.x,K=D.y,B=D.z,jt(J,Z,te,j,N,k,-Y,D),J=D.x,Z=D.y,te=D.z;break}case Re.PUSH_STATE:{const W=q*$c;W+$c<ln.length&&(ln[W]=y,ln[W+1]=F,ln[W+2]=G,ln[W+3]=z,ln[W+4]=K,ln[W+5]=B,ln[W+6]=j,ln[W+7]=N,ln[W+8]=k,ln[W+9]=J,ln[W+10]=Z,ln[W+11]=te,ln[W+12]=_e,q++);break}case Re.POP_STATE:{if(q>0){q--;const W=q*$c;y=ln[W],F=ln[W+1],G=ln[W+2],z=ln[W+3],K=ln[W+4],B=ln[W+5],j=ln[W+6],N=ln[W+7],k=ln[W+8],J=ln[W+9],Z=ln[W+10],te=ln[W+11],_e=ln[W+12]}break}case Re.PITCH_UP:{jt(z,K,B,J,Z,te,Y,D),z=D.x,K=D.y,B=D.z,jt(j,N,k,J,Z,te,Y,D),j=D.x,N=D.y,k=D.z;break}case Re.PITCH_DOWN:{jt(z,K,B,J,Z,te,-Y,D),z=D.x,K=D.y,B=D.z,jt(j,N,k,J,Z,te,-Y,D),j=D.x,N=D.y,k=D.z;break}case Re.ROLL_LEFT:{jt(J,Z,te,z,K,B,Y,D),J=D.x,Z=D.y,te=D.z,jt(j,N,k,z,K,B,Y,D),j=D.x,N=D.y,k=D.z;break}case Re.ROLL_RIGHT:{jt(J,Z,te,z,K,B,-Y,D),J=D.x,Z=D.y,te=D.z,jt(j,N,k,z,K,B,-Y,D),j=D.x,N=D.y,k=D.z;break}case Re.YAW_LEFT:{jt(z,K,B,j,N,k,Y,D),z=D.x,K=D.y,B=D.z,jt(J,Z,te,j,N,k,Y,D),J=D.x,Z=D.y,te=D.z;break}case Re.YAW_RIGHT:{jt(z,K,B,j,N,k,-Y,D),z=D.x,K=D.y,B=D.z,jt(J,Z,te,j,N,k,-Y,D),J=D.x,Z=D.y,te=D.z;break}case Re.TURN_ROUND:{z=-z,K=-K,B=-B,J=-J,Z=-Z,te=-te;break}}}return ae}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const yi=[{id:"sierpinski_arrow",name:"Sierpinski Arrowhead",axiom:"YF",iterations:6,rules:[{id:"sa1",inputSymbol:"X",successor:"YF+XF+Y"},{id:"sa2",inputSymbol:"Y",successor:"XF-YF-X"}],variables:[{id:"sav1",name:"angle",value:60,min:30,max:120,step:.5,animate:!1,animationSpeed:12,animationType:"ping-pong",animationDirection:1},{id:"sav2",name:"step",value:5,min:1,max:15,step:.1,animate:!1,animationSpeed:2,animationType:"ping-pong",animationDirection:1}],symbolActions:[{symbol:"F",actionType:Re.FORWARD,valueExpression:"step"},{symbol:"X",actionType:Re.NONE,valueExpression:""},{symbol:"Y",actionType:Re.NONE,valueExpression:""},{symbol:"+",actionType:Re.TURN_LEFT,valueExpression:"angle"},{symbol:"-",actionType:Re.TURN_RIGHT,valueExpression:"angle"}],renderSettings:{stepSize:5,angle:60,strokeWidth:1.5,strokeColor:"#3b82f6",backgroundColor:"#090d16",colorPalette:"rainbow",is3D:!1,showAxes:!1,growPercent:100}},{id:"dragon",name:"Dragon Curve",axiom:"FX",iterations:10,rules:[{id:"dr1",inputSymbol:"X",successor:"X+YF+"},{id:"dr2",inputSymbol:"Y",successor:"-FX-Y"}],variables:[{id:"dv1",name:"angle",value:90,min:45,max:135,step:.5,animate:!1,animationSpeed:5,animationType:"ping-pong",animationDirection:1},{id:"dv2",name:"step",value:8,min:2,max:25,step:.2,animate:!1,animationSpeed:4,animationType:"ping-pong",animationDirection:1}],symbolActions:[{symbol:"F",actionType:Re.FORWARD,valueExpression:"step"},{symbol:"+",actionType:Re.TURN_LEFT,valueExpression:"angle"},{symbol:"-",actionType:Re.TURN_RIGHT,valueExpression:"angle"},{symbol:"X",actionType:Re.NONE,valueExpression:""},{symbol:"Y",actionType:Re.NONE,valueExpression:""}],renderSettings:{stepSize:8,angle:90,strokeWidth:2.2,strokeColor:"#c084fc",backgroundColor:"#090d16",colorPalette:"sunset",is3D:!1,showAxes:!1,growPercent:100}},{id:"hilbert",name:"Hilbert Grid-Curve",axiom:"X",iterations:5,rules:[{id:"h1",inputSymbol:"X",successor:"-YF+XF+FY-X"},{id:"h2",inputSymbol:"Y",successor:"+XF-YF-FX+Y"}],variables:[{id:"hv1",name:"angle",value:90,min:45,max:135,step:.5,animate:!1,animationSpeed:10,animationType:"ping-pong",animationDirection:1},{id:"hv2",name:"step",value:6,min:1,max:20,step:.1,animate:!1,animationSpeed:3,animationType:"ping-pong",animationDirection:1}],symbolActions:[{symbol:"F",actionType:Re.FORWARD,valueExpression:"step"},{symbol:"X",actionType:Re.NONE,valueExpression:""},{symbol:"Y",actionType:Re.NONE,valueExpression:""},{symbol:"+",actionType:Re.TURN_LEFT,valueExpression:"angle"},{symbol:"-",actionType:Re.TURN_RIGHT,valueExpression:"angle"}],renderSettings:{stepSize:6,angle:90,strokeWidth:1.8,strokeColor:"#22d3ee",backgroundColor:"#090d16",colorPalette:"neon",is3D:!1,showAxes:!1,growPercent:100}},{id:"tree3d_clean",name:"Symmetric 3D Fractal Tree",axiom:"A",iterations:5,rules:[{id:"tc1",inputSymbol:"A",successor:"F[&+FA][&-FA]/A"},{id:"tc2",inputSymbol:"F",successor:"FF"}],variables:[{id:"tcv1",name:"angle",value:28,min:15,max:45,step:.5,animate:!1,animationSpeed:10,animationType:"ping-pong",animationDirection:1},{id:"tcv2",name:"step",value:4,min:1,max:10,step:.1,animate:!1,animationSpeed:2,animationType:"ping-pong",animationDirection:1}],symbolActions:[{symbol:"F",actionType:Re.FORWARD,valueExpression:"step"},{symbol:"+",actionType:Re.TURN_LEFT,valueExpression:"angle"},{symbol:"-",actionType:Re.TURN_RIGHT,valueExpression:"angle"},{symbol:"&",actionType:Re.PITCH_UP,valueExpression:"angle"},{symbol:"^",actionType:Re.PITCH_DOWN,valueExpression:"angle"},{symbol:"/",actionType:Re.ROLL_RIGHT,valueExpression:"angle"},{symbol:"\\",actionType:Re.ROLL_LEFT,valueExpression:"angle"},{symbol:"[",actionType:Re.PUSH_STATE,valueExpression:""},{symbol:"]",actionType:Re.POP_STATE,valueExpression:""},{symbol:"A",actionType:Re.NONE,valueExpression:""}],renderSettings:{stepSize:4,angle:28,strokeWidth:2,strokeColor:"#f59e0b",backgroundColor:"#090d16",colorPalette:"depth",is3D:!0,showAxes:!1,growPercent:100}},{id:"levy_c",name:"Levy C-Curve",axiom:"F",iterations:9,rules:[{id:"lc1",inputSymbol:"F",successor:"+F--F+"}],variables:[{id:"lcv1",name:"angle",value:45,min:20,max:90,step:.5,animate:!1,animationSpeed:8,animationType:"ping-pong",animationDirection:1},{id:"lcv2",name:"step",value:6,min:1,max:20,step:.1,animate:!1,animationSpeed:3,animationType:"ping-pong",animationDirection:1}],symbolActions:[{symbol:"F",actionType:Re.FORWARD,valueExpression:"step"},{symbol:"+",actionType:Re.TURN_LEFT,valueExpression:"angle"},{symbol:"-",actionType:Re.TURN_RIGHT,valueExpression:"angle"}],renderSettings:{stepSize:6,angle:45,strokeWidth:1.5,strokeColor:"#ec4899",backgroundColor:"#090d16",colorPalette:"neon",is3D:!1,showAxes:!1,growPercent:100}},{id:"koch_snowflake",name:"Koch Snowflake",axiom:"F--F--F",iterations:4,rules:[{id:"ks1",inputSymbol:"F",successor:"F+F--F+F"}],variables:[],symbolActions:[{symbol:"F",actionType:Re.FORWARD,valueExpression:"6"},{symbol:"+",actionType:Re.TURN_LEFT,valueExpression:"60"},{symbol:"-",actionType:Re.TURN_RIGHT,valueExpression:"60"}],renderSettings:{stepSize:6,angle:60,strokeWidth:1.6,strokeColor:"#38bdf8",backgroundColor:"#090d16",colorPalette:"rainbow",is3D:!1,showAxes:!1,growPercent:100}},{id:"fractal_plant",name:"Fractal Plant",axiom:"X",iterations:5,rules:[{id:"fp1",inputSymbol:"X",successor:"F+[[X]-X]-F[-FX]+X"},{id:"fp2",inputSymbol:"F",successor:"FF"}],variables:[],symbolActions:[{symbol:"F",actionType:Re.FORWARD,valueExpression:"4"},{symbol:"X",actionType:Re.NONE,valueExpression:""},{symbol:"+",actionType:Re.TURN_LEFT,valueExpression:"25"},{symbol:"-",actionType:Re.TURN_RIGHT,valueExpression:"25"},{symbol:"[",actionType:Re.PUSH_STATE,valueExpression:""},{symbol:"]",actionType:Re.POP_STATE,valueExpression:""}],renderSettings:{stepSize:4,angle:25,strokeWidth:1.4,strokeColor:"#10b981",backgroundColor:"#090d16",colorPalette:"forest",is3D:!1,showAxes:!1,growPercent:100}},{id:"bush",name:"Cloud Bush",axiom:"F",iterations:4,rules:[{id:"bu1",inputSymbol:"F",successor:"FF+[+F-F-F]-[-F+F+F]"}],variables:[],symbolActions:[{symbol:"F",actionType:Re.FORWARD,valueExpression:"5"},{symbol:"+",actionType:Re.TURN_LEFT,valueExpression:"25"},{symbol:"-",actionType:Re.TURN_RIGHT,valueExpression:"25"},{symbol:"&",actionType:Re.PITCH_UP,valueExpression:"25"},{symbol:"^",actionType:Re.PITCH_DOWN,valueExpression:"25"},{symbol:"/",actionType:Re.ROLL_RIGHT,valueExpression:"25"},{symbol:"\\",actionType:Re.ROLL_LEFT,valueExpression:"25"},{symbol:"[",actionType:Re.PUSH_STATE,valueExpression:""},{symbol:"]",actionType:Re.POP_STATE,valueExpression:""}],renderSettings:{stepSize:5,angle:25,strokeWidth:1.8,strokeColor:"#ea580c",backgroundColor:"#090d16",colorPalette:"sunset",is3D:!1,showAxes:!1,growPercent:100}}];/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JA=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),$A=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,s)=>s?s.toUpperCase():i.toLowerCase()),p_=r=>{const e=$A(r);return e.charAt(0).toUpperCase()+e.slice(1)},rv=(...r)=>r.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim(),e2=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var t2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=Qe.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:f,...p},m)=>Qe.createElement("svg",{ref:m,...t2,width:e,height:e,stroke:r,strokeWidth:s?Number(i)*24/Number(e):i,className:rv("lucide",l),...!c&&!e2(p)&&{"aria-hidden":"true"},...p},[...f.map(([h,g])=>Qe.createElement(h,g)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const en=(r,e)=>{const i=Qe.forwardRef(({className:s,...l},c)=>Qe.createElement(n2,{ref:c,iconNode:e,className:rv(`lucide-${JA(p_(r))}`,`lucide-${r}`,s),...l}));return i.displayName=p_(r),i};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],dp=en("activity",i2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],ov=en("box",a2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],r2=en("check",s2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],lv=en("circle-question-mark",o2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],c2=en("code",l2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],cv=en("compass",u2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],d2=en("copy",f2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],uv=en("cpu",h2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],lu=en("download",p2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m2=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],g2=en("eye",m2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=[["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}]],_2=en("file-code",x2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"10",cy:"12",r:"2",key:"737tya"}],["path",{d:"m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22",key:"wt3hpn"}]],y2=en("file-image",v2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]],b2=en("film",S2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M2=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],fv=en("flame",M2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E2=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],T2=en("grid-3x3",E2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2=[["path",{d:"m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9",key:"1hayfq"}],["path",{d:"m18 15 4-4",key:"16gjal"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",key:"15ts47"}]],dv=en("hammer",A2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R2=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],hv=en("layers",R2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C2=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],w2=en("maximize-2",C2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N2=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],D2=en("monitor",N2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U2=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],L2=en("palette",U2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O2=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],pv=en("pause",O2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P2=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],mv=en("play",P2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],hp=en("plus",F2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I2=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],z2=en("settings",I2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],gv=en("share-2",B2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],G2=en("sliders-vertical",H2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V2=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],xv=en("sparkles",V2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2=[["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],pp=en("trash",k2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j2=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],W2=en("upload",j2),X2=({activePresetId:r,onSelectPreset:e,definition:i})=>{const s=r==="custom",l=i.lastLoadedPresetId||yi[0].id,c=yi.find(p=>p.id===(s?l:r))||yi[0],f=p=>{const m=yi.find(h=>h.id===p.target.value);m&&e(m)};return A.jsxs("div",{className:"space-y-3",children:[A.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[A.jsx(cv,{className:"w-5 h-5 text-emerald-400",id:"icon-compass"}),A.jsx("h3",{className:"font-semibold text-slate-200",children:"Fractal Presets"})]}),A.jsx("p",{className:"text-xs text-slate-400 leading-relaxed text-left",children:"Select a fractal template as a starting point, then freely customize rules, variables, and symbol actions."}),A.jsxs("div",{className:"space-y-2",children:[A.jsx("div",{className:"relative",children:A.jsxs("select",{value:r,onChange:f,className:"w-full bg-slate-900 border border-slate-800 text-slate-100 text-xs p-2.5 rounded-xl focus:outline-none focus:border-emerald-500 cursor-pointer text-ellipsis overflow-hidden",children:[s&&A.jsx("option",{value:"custom",className:"bg-slate-950 text-indigo-300 font-semibold font-sans",children:"🛠️ Customized System"}),yi.map(p=>{const m=p.renderSettings.is3D?" (3D)":" (2D)";return A.jsxs("option",{value:p.id,className:"bg-slate-950 text-slate-200",children:[p.name," ",m]},p.id)})]})}),s?A.jsxs("div",{className:"bg-slate-900/40 border border-indigo-500/20 p-3 rounded-xl flex flex-col gap-2 shadow-inner",children:[A.jsxs("div",{className:"flex items-center justify-between gap-1.5 min-w-0",children:[A.jsx("span",{className:"text-xs font-semibold text-slate-200 truncate",children:"Modified System"}),A.jsx("span",{className:"text-[10px] bg-amber-500/20 text-amber-300 font-bold px-1.5 py-0.5 rounded",children:"Local edits active"})]}),A.jsx("p",{className:"text-[10px] text-slate-400 leading-relaxed text-left",children:"You customized the original configuration of this fractal. You can restore the preset's initial values at any time:"}),A.jsxs("button",{type:"button",onClick:()=>{const p=yi.find(m=>m.id===l)||yi[0];e(p)},className:"w-full py-1.5 px-3 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30 hover:border-emerald-500/50 rounded-xl text-[10px] text-center transition-all cursor-pointer focus:outline-none",children:["🔄 Restore Original Example (",(c==null?void 0:c.name)||"Original",")"]})]}):c&&A.jsxs("div",{className:"bg-slate-900/30 border border-slate-800/80 p-3 rounded-xl flex items-center justify-between gap-2.5",children:[A.jsxs("div",{className:"space-y-1 min-w-0 flex-1",children:[A.jsxs("div",{className:"flex items-center gap-1.5 min-w-0",children:[A.jsx("span",{className:"text-xs font-semibold text-slate-200 truncate",children:c.name}),c.renderSettings.is3D?A.jsx(ov,{className:"w-3.5 h-3.5 text-indigo-400 shrink-0",title:"3D L-System"}):A.jsx(hv,{className:"w-3.5 h-3.5 text-teal-400 shrink-0",title:"2D L-System"})]}),A.jsx("div",{className:"text-[10px] text-slate-400 flex flex-wrap gap-x-2 gap-y-0.5",children:A.jsxs("span",{children:["Axiom: ",A.jsx("strong",{className:"font-mono text-slate-350",children:c.axiom})]})})]}),A.jsxs("div",{className:"text-right shrink-0",children:[A.jsx("span",{className:"text-[10px] text-slate-500 block",children:"Default Iters"}),A.jsx("span",{className:"text-xs font-bold text-slate-350 font-mono",children:c.iterations})]})]})]})]})},q2=({axiom:r,onChangeAxiom:e,iterations:i,onChangeIterations:s,rules:l,onChangeRules:c,availableVariables:f,isCapped:p=!1})=>{const m=()=>{const E=`rule_${Date.now()}`;c([...l,{id:E,inputSymbol:"X",successor:"F+X"}])},h=(E,U)=>{const b=U.trim().slice(0,1);c(l.map(y=>y.id===E?{...y,inputSymbol:b}:y))},g=(E,U)=>{const b=U.replace(/\s+/g,"");c(l.map(y=>y.id===E?{...y,successor:b}:y))},_=E=>{c(l.filter(U=>U.id!==E))},x=typeof i=="number"?i:parseFloat(i),M=!isNaN(x);return A.jsxs("div",{className:"space-y-4",children:[A.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[A.jsx(z2,{className:"w-5 h-5 text-emerald-400",id:"icon-rules-settings"}),A.jsx("h3",{className:"font-semibold text-slate-200",children:"Axiom & Rules"})]}),A.jsxs("div",{className:"space-y-1",children:[A.jsx("label",{className:"text-xs font-medium text-slate-300 block",children:"Starting Axiom (seed)"}),A.jsx("input",{type:"text",value:r,onChange:E=>e(E.target.value.replace(/\s+/g,"")),placeholder:"e.g. F--F--F",id:"axiom-input",className:"w-full bg-slate-900 border border-slate-800 text-slate-100 font-mono text-sm px-3 py-2 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"}),A.jsx("p",{className:"text-[10px] text-slate-400",children:"The initial sequence of state symbols representing the foundation string."})]}),A.jsxs("div",{className:"space-y-2 pt-1",children:[A.jsxs("div",{className:"flex items-center justify-between",children:[A.jsx("label",{className:"text-xs font-medium text-slate-300",children:"Recursion Iterations"}),A.jsxs("div",{className:"flex items-center gap-1.5",children:[A.jsx("span",{className:"text-[10px] text-slate-400",children:"value expression:"}),A.jsx("input",{type:"text",value:i,onChange:E=>{const U=E.target.value,b=Number(U);s(!isNaN(b)&&U.trim()!==""?b:U)},placeholder:"e.g. 5 or n",className:"bg-slate-950 border border-slate-800 text-emerald-400 font-mono text-xs text-center px-2 py-1 rounded-lg w-28 focus:outline-none focus:border-emerald-500"})]})]}),M&&A.jsx("div",{className:"flex gap-4 items-center",children:A.jsx("input",{type:"range",min:"1",max:"12",value:x,onChange:E=>s(parseInt(E.target.value,10)),className:"w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500",id:"iterations-range-slider"})}),p&&A.jsxs("div",{className:"flex items-center gap-1.5 p-2 bg-amber-500/10 border border-amber-500/20 rounded-lg text-[10px] text-amber-400",children:[A.jsx(xv,{className:"w-3.5 h-3.5 shrink-0 animate-bounce"}),A.jsx("span",{className:"text-left flex-1",children:"Output truncated due to the current performance limit! Configure a larger or infinite limit in the Performance settings to disable truncation."})]})]}),A.jsxs("div",{className:"space-y-2 pt-2 border-t border-slate-800/80",children:[A.jsxs("div",{className:"flex items-center justify-between",children:[A.jsx("label",{className:"text-xs font-semibold text-slate-300",children:"Substitution Rules"}),A.jsxs("button",{onClick:m,type:"button",className:"flex items-center gap-1 text-[10px] font-medium text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer",id:"add-rule-btn",children:[A.jsx(hp,{className:"w-3.5 h-3.5"}),"Add Rule"]})]}),l.length===0?A.jsx("p",{className:"text-xs text-slate-400 italic py-2 text-center bg-slate-900/40 rounded-xl border border-dashed border-slate-800",children:"No rules added. Characters remain constant."}):A.jsx("div",{className:"space-y-2.5 max-h-[220px] overflow-y-auto pr-1",children:l.map(E=>A.jsxs("div",{className:"flex items-center gap-2 p-2.5 bg-slate-900/60 rounded-xl border border-slate-800/50",children:[A.jsxs("div",{className:"w-12 shrink-0 space-y-0.5",children:[A.jsx("span",{className:"text-[9px] text-slate-400 block font-medium",children:"When"}),A.jsx("input",{type:"text",value:E.inputSymbol,onChange:U=>h(E.id,U.target.value),placeholder:"F",className:"w-full text-center bg-slate-950 border border-slate-800 text-emerald-400 font-mono font-bold text-sm py-1 rounded-lg focus:border-emerald-500 focus:outline-none",maxLength:1})]}),A.jsx("div",{className:"text-slate-500 text-xs font-bold shrink-0",children:"→"}),A.jsxs("div",{className:"flex-1 space-y-0.5",children:[A.jsx("span",{className:"text-[9px] text-slate-400 block font-medium",children:"Replace with (Successor)"}),A.jsx("input",{type:"text",value:E.successor,onChange:U=>g(E.id,U.target.value),placeholder:"F+F-F",className:"w-full bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs px-2 py-1.5 rounded-lg focus:border-emerald-500 focus:outline-none"})]}),A.jsx("button",{type:"button",onClick:()=>_(E.id),title:"Remove Rule",className:"p-1.5 text-slate-500 hover:text-rose-400 hover:bg-rose-500/5 rounded-lg transition-all mt-3.5",children:A.jsx(pp,{className:"w-3.5 h-3.5"})})]},E.id))})]})]})},Y2=({symbolActions:r,onChangeSymbolActions:e,availableVariables:i})=>{const[s,l]=Qe.useState(""),[c,f]=Qe.useState(Re.FORWARD),[p,m]=Qe.useState(""),h=()=>{const E=s.trim().toUpperCase().slice(0,1);if(!E)return;if(r.some(y=>y.symbol===E)){alert(`Symbol "${E}" is already mapped to an action. Customize it directly in the list.`);return}const U=c===Re.FORWARD||c===Re.FORWARD_NO_PEN?"step":c===Re.PUSH_STATE||c===Re.POP_STATE||c===Re.NONE?"":"angle",b={symbol:E,actionType:c,valueExpression:p.trim()||U};e([...r,b]),l(""),m("")},g=(E,U)=>{e(r.map(b=>{if(b.symbol===E){let y=b.valueExpression;return(!y||y==="step"||y==="angle")&&(y=U===Re.FORWARD||U===Re.FORWARD_NO_PEN?"step":U===Re.PUSH_STATE||U===Re.POP_STATE||U===Re.NONE?"":"angle"),{...b,actionType:U,valueExpression:y}}return b}))},_=(E,U)=>{e(r.map(b=>b.symbol===E?{...b,valueExpression:U}:b))},x=(E,U)=>{e(r.map(b=>b.symbol===E?{...b,colorExpression:U}:b))},M=E=>{e(r.filter(U=>U.symbol!==E))};return A.jsxs("div",{className:"space-y-4",children:[A.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[A.jsx(dv,{className:"w-5 h-5 text-emerald-400",id:"icon-mapper"}),A.jsx("h3",{className:"font-semibold text-slate-200",children:"Symbol Actions Assignment"})]}),A.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:["Customize the turtle behavioral role of each letter symbol. You can use math variables like"," ",A.jsx("span",{className:"font-mono text-emerald-300",children:"step"})," or"," ",A.jsx("span",{className:"font-mono text-emerald-300",children:"angle"})," in expressions."]}),A.jsxs("div",{className:"bg-slate-900/40 border border-slate-800 p-3 rounded-xl space-y-2",children:[A.jsx("span",{className:"text-xs font-semibold text-slate-300",children:"Map Custom Action Character"}),A.jsxs("div",{className:"flex flex-wrap gap-2 items-end",children:[A.jsxs("div",{className:"w-16",children:[A.jsx("label",{className:"text-[10px] text-slate-400 block mb-0.5",children:"Symbol"}),A.jsx("input",{type:"text",value:s,onChange:E=>l(E.target.value),placeholder:"e.g. G",className:"w-full text-center bg-slate-950 border border-slate-800 text-slate-100 font-mono font-bold text-sm py-1.5 rounded-lg focus:border-emerald-500 focus:outline-none",maxLength:1})]}),A.jsxs("div",{className:"flex-1 min-w-[120px]",children:[A.jsx("label",{className:"text-[10px] text-slate-400 block mb-0.5",children:"Assign Role"}),A.jsxs("select",{value:c,onChange:E=>f(E.target.value),className:"w-full bg-slate-900 border border-slate-800 text-slate-200 text-xs p-1.5 rounded-lg focus:border-emerald-500 focus:outline-none cursor-pointer",children:[A.jsx("option",{value:Re.FORWARD,children:"Draw Forward (with pen)"}),A.jsx("option",{value:Re.FORWARD_NO_PEN,children:"Move Forward (no pen)"}),A.jsx("option",{value:Re.TURN_LEFT,children:"Yaw Left (Turn Left)"}),A.jsx("option",{value:Re.TURN_RIGHT,children:"Yaw Right (Turn Right)"}),A.jsx("option",{value:Re.PUSH_STATE,children:"Push State ["}),A.jsx("option",{value:Re.POP_STATE,children:"Pop State ]"}),A.jsx("option",{value:Re.PITCH_UP,children:"Pitch Up (&)"}),A.jsx("option",{value:Re.PITCH_DOWN,children:"Pitch Down (^)"}),A.jsx("option",{value:Re.ROLL_LEFT,children:"Roll Left (\\)"}),A.jsx("option",{value:Re.ROLL_RIGHT,children:"Roll Z Right (/)"}),A.jsx("option",{value:Re.TURN_ROUND,children:"Turn Round (180°)"}),A.jsx("option",{value:Re.NONE,children:"Ignore Symbol (No-op)"})]})]}),A.jsxs("div",{className:"w-24",children:[A.jsx("label",{className:"text-[10px] text-slate-400 block mb-0.5",children:"Value Expr"}),A.jsx("input",{type:"text",value:p,onChange:E=>m(E.target.value),placeholder:"step",className:"w-full bg-slate-950 border border-slate-800 text-slate-100 font-mono text-xs p-1.5 rounded-lg focus:border-emerald-500 focus:outline-none"})]}),A.jsx("button",{type:"button",onClick:h,disabled:!s.trim(),className:"p-1.5 bg-emerald-500 hover:bg-emerald-600 disabled:bg-slate-800 disabled:text-slate-600 text-slate-950 rounded-lg font-medium transition-all cursor-pointer h-9 w-9 flex items-center justify-center shrink-0",children:A.jsx(hp,{className:"w-4 h-4"})})]})]}),A.jsx("div",{className:"space-y-2 max-h-[300px] overflow-y-auto pr-1",children:r.map(E=>{const U=E.actionType===Re.PUSH_STATE||E.actionType===Re.POP_STATE,b=E.actionType===Re.NONE;return A.jsxs("div",{className:"flex items-center gap-2 p-2 bg-slate-900/60 rounded-xl border border-slate-800/60 justify-between",children:[A.jsxs("div",{className:"flex items-center gap-3",children:[A.jsx("span",{className:"w-8 h-8 rounded-lg bg-slate-950 flex items-center justify-center border border-slate-800 font-mono font-bold text-emerald-400",children:E.symbol}),A.jsxs("div",{className:"space-y-1",children:[A.jsxs("select",{value:E.actionType,onChange:y=>g(E.symbol,y.target.value),className:"bg-transparent text-slate-200 text-xs font-semibold py-0.5 focus:outline-none cursor-pointer border-b border-dashed border-slate-700 hover:border-slate-500",children:[A.jsx("option",{className:"bg-slate-950",value:Re.FORWARD,children:"Draw Forward (Pen)"}),A.jsx("option",{className:"bg-slate-950",value:Re.FORWARD_NO_PEN,children:"Move Forward (No Pen)"}),A.jsx("option",{className:"bg-slate-950",value:Re.TURN_LEFT,children:"Yaw Left (+Z)"}),A.jsx("option",{className:"bg-slate-950",value:Re.TURN_RIGHT,children:"Yaw Right (-Z)"}),A.jsx("option",{className:"bg-slate-950",value:Re.PUSH_STATE,children:"Push State ["}),A.jsx("option",{className:"bg-slate-950",value:Re.POP_STATE,children:"Pop State ]"}),A.jsx("option",{className:"bg-slate-950",value:Re.PITCH_UP,children:"Pitch Up (&)"}),A.jsx("option",{className:"bg-slate-950",value:Re.PITCH_DOWN,children:"Pitch Down (^)"}),A.jsx("option",{className:"bg-slate-950",value:Re.ROLL_LEFT,children:"Roll Left (\\)"}),A.jsx("option",{className:"bg-slate-950",value:Re.ROLL_RIGHT,children:"Roll Right (/)"}),A.jsx("option",{className:"bg-slate-950",value:Re.TURN_ROUND,children:"Turn Round (180°)"}),A.jsx("option",{className:"bg-slate-950",value:Re.NONE,children:"Ignore Symbol"})]}),!U&&!b&&A.jsxs("div",{className:"space-y-1",children:[A.jsxs("div",{className:"flex items-center gap-1.5",children:[A.jsx("span",{className:"text-[9px] text-slate-400",children:"value expression:"}),A.jsx("input",{type:"text",value:E.valueExpression,onChange:y=>_(E.symbol,y.target.value),placeholder:"step",className:"bg-slate-950 border border-slate-800 text-slate-100 px-1 py-0.5 rounded font-mono text-[10px] w-24 focus:outline-none focus:border-emerald-500"})]}),E.actionType===Re.FORWARD&&A.jsxs("div",{className:"flex items-center gap-1.5",children:[A.jsx("span",{className:"text-[9px] text-slate-400 font-medium",children:"color expression:"}),A.jsx("input",{type:"color",value:E.colorExpression&&/^#[0-9a-f]{6}$/i.test(E.colorExpression)?E.colorExpression:"#10b981",onChange:y=>x(E.symbol,y.target.value),className:"w-4 h-4 rounded border border-slate-700 bg-transparent p-0 cursor-pointer shrink-0"}),A.jsx("input",{type:"text",value:E.colorExpression||"",onChange:y=>x(E.symbol,y.target.value),placeholder:"e.g. #ff0055 or r,g,b",className:"bg-slate-950 border border-slate-800 text-slate-100 px-1 py-0.5 rounded font-mono text-[10px] w-32 focus:outline-none focus:border-emerald-500"})]})]})]})]}),A.jsx("button",{type:"button",onClick:()=>M(E.symbol),title:"Remove state binding",className:"p-1.5 text-slate-500 hover:text-rose-400 hover:bg-rose-500/5 rounded-lg transition-all",children:A.jsx(pp,{className:"w-3.5 h-3.5"})})]},E.symbol)})})]})},Z2=({variables:r,onChangeVariables:e})=>{const[i,s]=Qe.useState(""),[l,c]=Qe.useState(10),f=()=>{const g=i.trim().replace(/\s+/g,"");if(!g)return;if(g.toUpperCase()==="PI"||g.toUpperCase()==="E"){alert("Cannot name a variable after mathematical constants PI or E.");return}if(r.some(x=>x.name===g)){alert(`Variable "${g}" already exists.`);return}const _={id:`var_${Date.now()}`,name:g,value:l,min:1,max:Math.max(100,l*2),step:1,animate:!1,animationSpeed:5,animationType:"ping-pong",animationDirection:1};e([...r,_]),s("")},p=(g,_,x)=>{e(r.map(M=>M.id===g?{...M,[_]:x}:M))},m=g=>{e(r.filter(_=>_.id!==g))},h=g=>{const _=r.find(x=>x.id===g);_&&p(g,"animate",!_.animate)};return A.jsxs("div",{className:"space-y-4",children:[A.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[A.jsx(dp,{className:"w-5 h-5 text-emerald-400",id:"icon-vars"}),A.jsx("h3",{className:"font-semibold text-slate-200",children:"System Variables & Morphing"})]}),A.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:["Declare custom variables and use them in rules/actions. Activate the ",A.jsx("strong",{children:"Play"})," controls below to morph parameters dynamically!"]}),A.jsxs("div",{className:"bg-slate-900/40 border border-slate-800 p-3 rounded-xl space-y-2",children:[A.jsx("span",{className:"text-xs font-semibold text-slate-300",children:"New Variable Slider"}),A.jsxs("div",{className:"flex gap-2 items-end",children:[A.jsxs("div",{className:"flex-1",children:[A.jsx("label",{className:"text-[10px] text-slate-400 block mb-0.5",children:"Name"}),A.jsx("input",{type:"text",value:i,onChange:g=>s(g.target.value),placeholder:"e.g. theta",className:"w-full bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs px-2 py-1.5 rounded-lg focus:border-emerald-500 focus:outline-none"})]}),A.jsxs("div",{className:"w-24",children:[A.jsx("label",{className:"text-[10px] text-slate-400 block mb-0.5",children:"Init Value"}),A.jsx("input",{type:"number",value:l,onChange:g=>c(parseFloat(g.target.value)||0),className:"w-full bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs px-2 py-1.5 rounded-lg focus:border-emerald-500 focus:outline-none"})]}),A.jsxs("button",{type:"button",onClick:f,disabled:!i.trim(),className:"p-2 bg-emerald-500 hover:bg-emerald-600 disabled:bg-slate-800 disabled:text-slate-600 text-slate-950 font-semibold rounded-lg text-xs flex items-center gap-1 cursor-pointer h-[34px] shrink-0 transition-colors",children:[A.jsx(hp,{className:"w-4 h-4"}),"Add"]})]})]}),r.length===0?A.jsx("p",{className:"text-xs text-slate-400 italic py-2 text-center bg-slate-900/40 rounded-xl border border-dashed border-slate-800",children:"No custom variables active."}):A.jsx("div",{className:"space-y-4 max-h-[350px] overflow-y-auto pr-1",children:r.map(g=>A.jsxs("div",{className:"p-3 bg-slate-900/60 rounded-xl border border-slate-800/80 space-y-2.5",children:[A.jsxs("div",{className:"flex items-center justify-between",children:[A.jsxs("div",{className:"flex items-center gap-2",children:[A.jsx("span",{className:"font-mono font-bold text-xs text-emerald-400",children:g.name}),A.jsxs("span",{className:"text-[10px] text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded-md font-mono",children:["val: ",g.value.toFixed(1)]})]}),A.jsxs("div",{className:"flex items-center gap-1.5",children:[A.jsx("button",{onClick:()=>h(g.id),type:"button",title:g.animate?"Stop Animation":"Play Morphing Animation",className:`p-1 rounded-md transition-all ${g.animate?"bg-amber-500/10 text-amber-400 border border-amber-500/20":"bg-slate-800 text-slate-400 hover:text-slate-200"}`,children:g.animate?A.jsx(pv,{className:"w-3 h-3"}):A.jsx(mv,{className:"w-3 h-3"})}),A.jsx("button",{type:"button",onClick:()=>m(g.id),title:"Delete Var",className:"p-1 text-slate-500 hover:text-rose-400 hover:bg-rose-500/5 rounded-md transition-all",children:A.jsx(pp,{className:"w-3 h-3"})})]})]}),A.jsxs("div",{className:"space-y-1",children:[A.jsx("input",{type:"range",min:g.min,max:g.max,step:g.step,value:g.value,onChange:_=>p(g.id,"value",parseFloat(_.target.value)),disabled:g.animate,className:"w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500 disabled:opacity-50"}),A.jsxs("div",{className:"grid grid-cols-3 gap-1.5 text-[9px] text-slate-400 pt-1 font-mono",children:[A.jsxs("div",{children:[A.jsx("span",{className:"block text-slate-500",children:"Min:"}),A.jsx("input",{type:"number",value:g.min,onChange:_=>p(g.id,"min",parseFloat(_.target.value)||0),className:"bg-slate-950 border border-slate-800/80 rounded w-full px-1 text-[9px]"})]}),A.jsxs("div",{children:[A.jsx("span",{className:"block text-slate-500",children:"Step:"}),A.jsx("input",{type:"number",value:g.step,onChange:_=>p(g.id,"step",parseFloat(_.target.value)||.1),className:"bg-slate-950 border border-slate-800/80 rounded w-full px-1 text-[9px]"})]}),A.jsxs("div",{children:[A.jsx("span",{className:"block text-slate-500",children:"Max:"}),A.jsx("input",{type:"number",value:g.max,onChange:_=>p(g.id,"max",parseFloat(_.target.value)||100),className:"bg-slate-950 border border-slate-800/80 rounded w-full px-1 text-[9px]"})]})]})]}),g.animate&&A.jsxs("div",{className:"grid grid-cols-2 gap-2 p-2 bg-slate-950/60 rounded-lg border border-slate-800/40 text-[10px] mt-1.5 text-slate-300",children:[A.jsxs("div",{className:"space-y-1",children:[A.jsx("span",{className:"text-[9px] text-slate-500 block",children:"Morph Speed"}),A.jsx("input",{type:"number",value:g.animationSpeed,onChange:_=>p(g.id,"animationSpeed",parseFloat(_.target.value)||0),className:"bg-slate-900 border border-slate-800 px-1 py-0.5 rounded w-full font-mono text-[9px]"})]}),A.jsxs("div",{className:"space-y-1",children:[A.jsx("span",{className:"text-[9px] text-slate-500 block",children:"Cycle Style"}),A.jsxs("select",{value:g.animationType,onChange:_=>p(g.id,"animationType",_.target.value),className:"bg-slate-900 border border-slate-800 px-1 py-0.5 rounded w-full text-[9px] cursor-pointer",children:[A.jsx("option",{value:"ping-pong",children:"Ping-Pong ⇋"}),A.jsx("option",{value:"loop",children:"Loop ↻"}),A.jsx("option",{value:"one-way",children:"One-Way →"})]})]})]})]},g.id))})]})},K2=({growPercent:r,onChangeGrowPercent:e,isGrowing:i,onToggleGrowing:s,animationStyle:l="sequential",onChangeAnimationStyle:c})=>A.jsxs("div",{className:"space-y-4",children:[A.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[A.jsx(fv,{className:"w-5 h-5 text-emerald-400",id:"icon-anims"}),A.jsx("h3",{className:"font-semibold text-slate-200",children:"Aesthetic Animations"})]}),A.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:["Control how your L-System grows or develops over time. Combine with ",A.jsx("strong",{children:"Variables Morphing"})," for breathtaking organic visual effects!"]}),A.jsxs("div",{className:"p-3 bg-slate-900/60 rounded-xl border border-slate-800/80 space-y-2.5",children:[A.jsxs("div",{className:"flex items-center justify-between",children:[A.jsxs("div",{className:"flex items-center gap-1.5",children:[A.jsx(xv,{className:"w-3.5 h-3.5 text-teal-400"}),A.jsx("span",{className:"text-xs font-semibold text-slate-300",children:"Organic Growth Simulation"})]}),A.jsxs("button",{onClick:s,type:"button",className:`px-2 py-1 rounded-md text-[10px] font-bold transition-all flex items-center gap-1 cursor-pointer ${i?"bg-teal-500/10 text-teal-300 border border-teal-500/20 animate-pulse":"bg-slate-800 text-slate-400 hover:text-slate-200"}`,id:"play-growth-anim-btn",children:[i?A.jsx(pv,{className:"w-3"}):A.jsx(mv,{className:"w-3"}),i?"Pause Growth":"Play Growth"]})]}),c&&A.jsxs("div",{className:"flex items-center justify-between text-xs pt-1 border-t border-slate-800/40",children:[A.jsx("span",{className:"text-slate-400",children:"Growth Flow Mode:"}),A.jsxs("select",{value:l,onChange:f=>c(f.target.value),className:"bg-slate-950 border border-slate-800 text-teal-400 font-mono text-[10px] p-1 rounded focus:outline-none focus:border-emerald-500 cursor-pointer",children:[A.jsx("option",{value:"sequential",children:"Line-by-Line (Sequential)"}),A.jsx("option",{value:"tree",children:"Parallel Split (Tree growth)"})]})]}),A.jsxs("div",{className:"space-y-1",children:[A.jsx("input",{type:"range",min:"1",max:"100",value:r,onChange:f=>e(parseInt(f.target.value,10)),className:"w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-500"}),A.jsxs("div",{className:"flex justify-between text-[9px] text-slate-500 font-mono",children:[A.jsx("span",{children:"Seed Base"}),A.jsxs("span",{className:"text-teal-400 font-bold",children:[r,"% Grown"]}),A.jsx("span",{children:"Fully Unfolded"})]})]})]})]}),Q2=({onExportPng:r,onExportSvg:e,onExportGif:i})=>{const[s,l]=Qe.useState("png"),[c,f]=Qe.useState("fullhd"),[p,m]=Qe.useState(2e3),[h,g]=Qe.useState(2e3),[_,x]=Qe.useState(15),[M,E]=Qe.useState(100),[U,b]=Qe.useState(400),[y,F]=Qe.useState(400),[G,z]=Qe.useState(0),[K,B]=Qe.useState(100),[j,N]=Qe.useState(!1),[k,J]=Qe.useState(0),[Z,te]=Qe.useState(""),_e=()=>{switch(c){case"fullhd":return{width:1920,height:1080};case"4k":return{width:3840,height:2160};case"square":return{width:1200,height:1200};case"custom":default:return{width:p,height:h}}},ae=async()=>{if(s==="png"){const q=_e(),H=r(q);if(!H){alert("Failed to render PNG screenshot. Ensure the renderer is ready.");return}const D=document.createElement("a");D.href=H,D.download=`lsystem_${q.width}x${q.height}.png`,document.body.appendChild(D),D.click(),document.body.removeChild(D)}else if(s==="svg"){const q=e();if(!q){alert("Failed to compile SVG content.");return}const H=new Blob([q],{type:"image/svg+xml;charset=utf-8"}),D=URL.createObjectURL(H),w=document.createElement("a");w.href=D,w.download="lsystem_vector.svg",document.body.appendChild(w),w.click(),document.body.removeChild(w),URL.revokeObjectURL(D)}else if(s==="gif"&&i)try{N(!0),J(5),te("Initializing GIF animation...");const q=await i({frames:_,delay:M,startPercent:G,endPercent:K,width:U,height:y,onProgress:D=>{J(D),D<50?te(`Capturing animation frames: ${Math.round(D*2)}%...`):D<100?te(`Assembling and encoding your GIF... ${D}%`):te("Completed! File is ready for download.")}}),H=document.createElement("a");H.href=q,H.download="lsystem_animation.gif",document.body.appendChild(H),H.click(),document.body.removeChild(H),J(100),te("GIF downloaded successfully!")}catch(q){alert(`Error generating GIF: ${q.message||q}`)}finally{setTimeout(()=>{N(!1),J(0)},1500)}};return A.jsxs("div",{className:"space-y-4",children:[A.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[A.jsx(lu,{className:"w-5 h-5 text-emerald-400",id:"icon-export"}),A.jsx("h3",{className:"font-semibold text-slate-200",children:"Export Exporter"})]}),A.jsx("p",{className:"text-xs text-slate-400 leading-relaxed text-left",children:"Save your masterpiece in seconds! Choose between a high-resolution PNG image, a vector SVG file, or an animated GIF of the growing fractal."}),A.jsxs("div",{className:"grid grid-cols-3 gap-1 p-1 bg-slate-950 border border-slate-800 rounded-xl",children:[A.jsxs("button",{type:"button",onClick:()=>l("png"),className:`flex flex-col sm:flex-row items-center justify-center gap-1.5 py-2 px-1 rounded-lg text-[11px] font-medium cursor-pointer transition-all ${s==="png"?"bg-slate-800 text-slate-100 shadow-sm":"text-slate-400 hover:text-slate-200"}`,children:[A.jsx(y2,{className:"w-3.5 h-3.5 shrink-0"}),"PNG"]}),A.jsxs("button",{type:"button",onClick:()=>l("svg"),className:`flex flex-col sm:flex-row items-center justify-center gap-1.5 py-2 px-1 rounded-lg text-[11px] font-medium cursor-pointer transition-all ${s==="svg"?"bg-slate-800 text-slate-100 shadow-sm":"text-slate-400 hover:text-slate-200"}`,children:[A.jsx(_2,{className:"w-3.5 h-3.5 shrink-0"}),"SVG"]}),A.jsxs("button",{type:"button",onClick:()=>l("gif"),className:`flex flex-col sm:flex-row items-center justify-center gap-1.5 py-2 px-1 rounded-lg text-[11px] font-medium cursor-pointer transition-all ${s==="gif"?"bg-slate-800 text-slate-100 shadow-sm":"text-slate-400 hover:text-slate-200"}`,children:[A.jsx(b2,{className:"w-3.5 h-3.5 shrink-0 text-emerald-400"}),"Animated GIF"]})]}),s==="png"&&A.jsxs("div",{className:"space-y-3 bg-slate-900/40 p-3 rounded-xl border border-slate-800",children:[A.jsx("span",{className:"text-xs font-semibold text-slate-300 block text-left",children:"Image Resolution (PNG)"}),A.jsx("div",{className:"grid grid-cols-2 gap-2 text-left",children:[{id:"fullhd",label:"Full HD (1080p)",desc:"1920 × 1080"},{id:"4k",label:"Ultra HD (4K)",desc:"3840 × 2160"},{id:"square",label:"Square Studio",desc:"1200 × 1200"},{id:"custom",label:"Custom Pixels",desc:"Custom size"}].map(q=>A.jsxs("button",{type:"button",onClick:()=>f(q.id),className:`p-2 rounded-lg border text-left cursor-pointer transition-all ${c===q.id?"bg-emerald-500/10 border-emerald-500 text-emerald-200":"bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700"}`,children:[A.jsx("div",{className:"text-[10px] font-bold block",children:q.label}),A.jsx("div",{className:"text-[9px] text-slate-400 font-mono mt-0.5",children:q.desc})]},q.id))}),c==="custom"&&A.jsxs("div",{className:"grid grid-cols-2 gap-2 pt-2 border-t border-slate-800",children:[A.jsxs("div",{className:"space-y-0.5 text-left",children:[A.jsx("span",{className:"text-[9px] text-slate-400 font-mono",children:"Width (px)"}),A.jsx("input",{type:"number",value:p,onChange:q=>m(Math.max(100,parseInt(q.target.value,10)||500)),className:"w-full bg-slate-950 border border-slate-800 text-slate-200 font-mono text-center text-xs p-1.5 rounded-lg focus:outline-none"})]}),A.jsxs("div",{className:"space-y-0.5 text-left",children:[A.jsx("span",{className:"text-[9px] text-slate-400 font-mono",children:"Height (px)"}),A.jsx("input",{type:"number",value:h,onChange:q=>g(Math.max(100,parseInt(q.target.value,10)||500)),className:"w-full bg-slate-950 border border-slate-800 text-slate-200 font-mono text-center text-xs p-1.5 rounded-lg focus:outline-none"})]})]})]}),s==="svg"&&A.jsxs("div",{className:"p-3 bg-emerald-500/5 border border-emerald-500/10 rounded-xl space-y-1 text-left",children:[A.jsxs("span",{className:"text-xs font-semibold text-emerald-400 flex items-center gap-1 justify-start",children:[A.jsx(D2,{className:"w-3.5 h-3.5"})," Infinite Vector File"]}),A.jsx("p",{className:"text-[10px] text-slate-400 leading-relaxed",children:"SVG vector graphics are scale-independent because they use math coordinate lines instead of pixels. You can scale them to any magnitude without ever losing quality! Ideal for large-scale prints or editor importing."})]}),s==="gif"&&A.jsxs("div",{className:"space-y-3 bg-slate-900/40 p-3 rounded-xl border border-slate-800",children:[A.jsx("span",{className:"text-xs font-semibold text-slate-300 block text-left",children:"Animated GIF Settings"}),A.jsxs("div",{className:"space-y-2 text-left",children:[A.jsxs("div",{children:[A.jsx("span",{className:"text-[10px] text-slate-400 block mb-1",children:"Output resolution (high resolutions require more rendering computation):"}),A.jsx("div",{className:"grid grid-cols-2 gap-1.5 text-center mb-2",children:[{label:"Fast (300px)",w:300,h:300},{label:"Standard (400px)",w:400,h:400},{label:"High HD (600px)",w:600,h:600},{label:"Max Quality (800px)",w:800,h:800}].map(q=>A.jsxs("button",{type:"button",onClick:()=>{b(q.w),F(q.h)},className:`py-1 rounded font-mono text-[9px] font-bold border transition-all cursor-pointer ${U===q.w?"bg-emerald-500/20 text-emerald-200 border-emerald-500/50":"bg-slate-950 text-slate-400 border-slate-800"}`,children:[q.label," - ",q.w,"x",q.h]},q.label))}),A.jsxs("div",{className:"grid grid-cols-2 gap-2 pt-1",children:[A.jsxs("div",{className:"space-y-0.5 text-left",children:[A.jsx("span",{className:"text-[9px] text-slate-500",children:"GIF Width (px)"}),A.jsx("input",{type:"number",value:U,onChange:q=>b(Math.max(100,Math.min(2e3,parseInt(q.target.value,10)||400))),className:"w-full bg-slate-950 border border-slate-800 text-slate-200 font-mono text-center text-xs p-1 rounded focus:outline-none"})]}),A.jsxs("div",{className:"space-y-0.5 text-left",children:[A.jsx("span",{className:"text-[9px] text-slate-500",children:"GIF Height (px)"}),A.jsx("input",{type:"number",value:y,onChange:q=>F(Math.max(100,Math.min(2e3,parseInt(q.target.value,10)||400))),className:"w-full bg-slate-950 border border-slate-800 text-slate-200 font-mono text-center text-xs p-1 rounded focus:outline-none"})]})]})]}),A.jsxs("div",{className:"pt-1.5 border-t border-slate-800/60",children:[A.jsxs("div",{className:"flex justify-between text-[10px] text-slate-400 font-mono mb-1",children:[A.jsx("span",{children:"Animation frames:"}),A.jsxs("span",{className:"text-emerald-400 font-bold",children:[_," frames"]})]}),A.jsx("input",{type:"range",min:"5",max:"30",step:"1",value:_,onChange:q=>x(parseInt(q.target.value,10)),className:"w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"})]}),A.jsxs("div",{className:"pt-1.5 border-t border-slate-800/60",children:[A.jsxs("div",{className:"flex justify-between text-[10px] text-slate-400 font-mono mb-1",children:[A.jsx("span",{children:"Frame delay:"}),A.jsxs("span",{className:"text-emerald-400 font-bold",children:[M,"ms"]})]}),A.jsx("input",{type:"range",min:"40",max:"400",step:"10",value:M,onChange:q=>E(parseInt(q.target.value,10)),className:"w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"})]}),A.jsxs("div",{className:"pt-1.5 border-t border-slate-800/60 grid grid-cols-2 gap-2 text-left",children:[A.jsxs("div",{children:[A.jsx("span",{className:"text-[9px] text-slate-500 block",children:"End Stage (%):"}),A.jsx("input",{type:"number",min:"5",max:"100",value:K,onChange:q=>B(Math.min(100,Math.max(G+5,parseInt(q.target.value)||100))),className:"w-full bg-slate-950 border border-slate-800 text-slate-200 text-center font-mono text-[10px] py-1 rounded focus:outline-none"})]}),A.jsxs("div",{children:[A.jsx("span",{className:"text-[9px] text-slate-500 block",children:"Start Stage (%):"}),A.jsx("input",{type:"number",min:"0",max:"95",value:G,onChange:q=>z(Math.max(0,Math.min(K-5,parseInt(q.target.value)||0))),className:"w-full bg-slate-950 border border-slate-800 text-slate-200 text-center font-mono text-[10px] py-1 rounded focus:outline-none"})]})]})]})]}),A.jsxs("button",{onClick:ae,disabled:j,type:"button",className:"w-full py-2.5 px-4 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-slate-950 rounded-xl font-bold text-sm shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all hover:translate-y-[-1px] active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed",id:"export-trigger-btn",children:[j?A.jsx(dp,{className:"w-4 h-4 animate-spin text-slate-950"}):A.jsx(lu,{className:"w-4 h-4"}),j?"Exporting Animation...":`Generate & Download ${s.toUpperCase()}`]}),j&&A.jsxs("div",{className:"p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-2 text-left",children:[A.jsxs("div",{className:"flex justify-between text-[10px] font-mono text-slate-400",children:[A.jsx("span",{children:"GIF Processing Status"}),A.jsxs("span",{children:[k,"%"]})]}),A.jsx("div",{className:"w-full h-1.5 bg-slate-950 rounded-full overflow-hidden",children:A.jsx("div",{className:"h-full bg-emerald-500 transition-all duration-300",style:{width:`${k}%`}})}),A.jsx("div",{className:"text-[10px] text-slate-300 font-medium",children:Z})]})]})};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function J2(r){try{const e={n:r.name,a:r.axiom,i:r.iterations,r:r.rules.map(l=>({k:l.inputSymbol,s:l.successor})),v:r.variables.map(l=>({n:l.name,v:l.value,mi:l.min,ma:l.max,s:l.step,an:l.animate,sp:l.animationSpeed,at:l.animationType})),sa:r.symbolActions.map(l=>({s:l.symbol,at:l.actionType,ex:l.valueExpression,cx:l.colorExpression})),rs:{sz:r.renderSettings.stepSize,a:r.renderSettings.angle,sw:r.renderSettings.strokeWidth,sc:r.renderSettings.strokeColor,bc:r.renderSettings.backgroundColor,cp:r.renderSettings.colorPalette,i3:r.renderSettings.is3D,sa:r.renderSettings.showAxes}},i=JSON.stringify(e);return btoa(encodeURIComponent(i))}catch(e){return console.error("Failed to compress state for URL sharing",e),""}}function m_(r){if(!r)return null;try{const e=decodeURIComponent(atob(r)),i=JSON.parse(e),s=(i.r||[]).map((m,h)=>({id:`r_${h}`,inputSymbol:m.k||"",successor:m.s||""})),l=(i.v||[]).map((m,h)=>({id:`v_${h}`,name:m.n||"",value:typeof m.v=="number"?m.v:0,min:typeof m.mi=="number"?m.mi:0,max:typeof m.ma=="number"?m.ma:100,step:typeof m.s=="number"?m.s:1,animate:!!m.an,animationSpeed:typeof m.sp=="number"?m.sp:5,animationType:m.at||"ping-pong",animationDirection:1})),c=(i.sa||[]).map(m=>({symbol:m.s||"",actionType:m.at||Re.NONE,valueExpression:m.ex||"",colorExpression:m.cx||""})),f=i.rs||{},p={stepSize:typeof f.sz=="number"?f.sz:5,angle:typeof f.a=="number"?f.a:25,strokeWidth:typeof f.sw=="number"?f.sw:2,strokeColor:f.sc||"#10b981",backgroundColor:f.bc||"#090d16",colorPalette:f.cp||"solid",is3D:!!f.i3,showAxes:!!f.sa,growPercent:100};return{name:i.n||"Shared L-System",axiom:i.a||"",iterations:typeof i.i=="number"?i.i:3,rules:s,variables:l,symbolActions:c,renderSettings:p}}catch(e){return console.error("Failed to decompress state from URL hash",e),null}}const $2=({currentLSystem:r,onLoadSystem:e})=>{const[i,s]=Qe.useState(!1),l=Qe.useRef(null),c=()=>{const g=J2(r);return g?`${window.location.origin}${window.location.pathname}#share=${g}`:""},f=()=>{const g=c();g&&navigator.clipboard.writeText(g).then(()=>{s(!0),setTimeout(()=>s(!1),2500)}).catch(_=>{console.error("Failed to copy URL",_)})},p=()=>{try{const g=JSON.stringify(r,null,2),_="data:application/json;charset=utf-8,"+encodeURIComponent(g),x=`${r.name.toLowerCase().replace(/\s+/g,"_")}_config.json`,M=document.createElement("a");M.setAttribute("href",_),M.setAttribute("download",x),document.body.appendChild(M),M.click(),document.body.removeChild(M)}catch(g){console.error("Failed to export JSON file.",g)}},m=g=>{var M;const _=(M=g.target.files)==null?void 0:M[0];if(!_)return;const x=new FileReader;x.onload=E=>{var U;try{const b=JSON.parse((U=E.target)==null?void 0:U.result);if(typeof b.axiom=="string"&&Array.isArray(b.rules)){const y={...b,id:b.id||`loaded_${Date.now()}`,name:b.name||"Imported Custom L-System"};e(y),alert(`Successfully loaded: "${y.name}"`)}else alert("Invalid L-System configuration file structure. Missing axiom or rules list.")}catch{alert("Failed to parse JSON configuration file. Check syntax.")}},x.readAsText(_),l.current&&(l.current.value="")},h=()=>{var g;(g=l.current)==null||g.click()};return A.jsxs("div",{className:"space-y-4",children:[A.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[A.jsx(gv,{className:"w-5 h-5 text-emerald-400",id:"icon-share"}),A.jsx("h3",{className:"font-semibold text-slate-200",children:"Share & Save"})]}),A.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Synchronize your custom parameters. Send direct links or export standard workspace files."}),A.jsxs("div",{className:"space-y-2 bg-slate-900/40 p-3 rounded-xl border border-slate-800",children:[A.jsx("span",{className:"text-xs font-semibold text-slate-300",children:"Share Direct Link"}),A.jsxs("div",{className:"flex gap-2",children:[A.jsx("input",{type:"text",readOnly:!0,value:c(),className:"flex-1 bg-slate-950 border border-slate-800 text-slate-400 text-[10px] px-3 py-2 rounded-lg truncate select-all outline-none font-mono"}),A.jsx("button",{onClick:f,type:"button",className:`px-3 py-2 rounded-lg font-medium text-xs flex items-center gap-1 cursor-pointer transition-all shrink-0 ${i?"bg-emerald-500 text-slate-950":"bg-slate-800 hover:bg-slate-700 text-slate-100"}`,id:"copy-link-btn",children:i?A.jsxs(A.Fragment,{children:[A.jsx(r2,{className:"w-3.5 h-3.5"}),"Copied!"]}):A.jsxs(A.Fragment,{children:[A.jsx(d2,{className:"w-3.5 h-3.5"}),"Copy Link"]})})]}),A.jsx("p",{className:"text-[10px] text-slate-500",children:"This URL contains your complete layout configuration encoded in Base64. Anyone with this link will load your visual."})]}),A.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[A.jsxs("button",{onClick:p,type:"button",className:"flex flex-col items-center justify-center p-3.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-xl transition-all text-slate-200 hover:text-white cursor-pointer group",id:"export-json-btn",children:[A.jsx("div",{className:"p-2 bg-purple-500/10 text-purple-400 rounded-xl group-hover:bg-purple-500/20 transition-all mb-2",children:A.jsx(lu,{className:"w-5 h-5"})}),A.jsx("span",{className:"text-xs font-semibold",children:"Save .json file"}),A.jsx("span",{className:"text-[10px] text-slate-500 mt-1 font-mono",children:"Download Config"})]}),A.jsxs("button",{onClick:h,type:"button",className:"flex flex-col items-center justify-center p-3.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-xl transition-all text-slate-200 hover:text-white cursor-pointer group",id:"import-json-btn",children:[A.jsx("div",{className:"p-2 bg-indigo-500/10 text-indigo-400 rounded-xl group-hover:bg-indigo-500/20 transition-all mb-2",children:A.jsx(W2,{className:"w-5 h-5"})}),A.jsx("span",{className:"text-xs font-semibold font-sans",children:"Load .json file"}),A.jsx("span",{className:"text-[10px] text-slate-500 mt-1 font-mono",children:"Upload Config"})]}),A.jsx("input",{ref:l,type:"file",accept:".json,application/json",onChange:m,className:"hidden",id:"hidden-file-json-input"})]})]})},g_={type:"change"},mp={type:"start"},_v={type:"end"},Wc=new up,x_=new _s,eR=Math.cos(70*xb.DEG2RAD),Dn=new ce,oi=2*Math.PI,sn={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},rh=1e-6;class tR extends tM{constructor(e,i=null){super(e,i),this.state=sn.NONE,this.target=new ce,this.cursor=new ce,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Yr.ROTATE,MIDDLE:Yr.DOLLY,RIGHT:Yr.PAN},this.touches={ONE:qr.ROTATE,TWO:qr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new ce,this._lastQuaternion=new bs,this._lastTargetPosition=new ce,this._quat=new bs().setFromUnitVectors(e.up,new ce(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Gx,this._sphericalDelta=new Gx,this._scale=1,this._panOffset=new ce,this._rotateStart=new Rt,this._rotateEnd=new Rt,this._rotateDelta=new Rt,this._panStart=new Rt,this._panEnd=new Rt,this._panDelta=new Rt,this._dollyStart=new Rt,this._dollyEnd=new Rt,this._dollyDelta=new Rt,this._dollyDirection=new ce,this._mouse=new Rt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=iR.bind(this),this._onPointerDown=nR.bind(this),this._onPointerUp=aR.bind(this),this._onContextMenu=fR.bind(this),this._onMouseWheel=oR.bind(this),this._onKeyDown=lR.bind(this),this._onTouchStart=cR.bind(this),this._onTouchMove=uR.bind(this),this._onMouseDown=sR.bind(this),this._onMouseMove=rR.bind(this),this._interceptControlDown=dR.bind(this),this._interceptControlUp=hR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(g_),this.update(),this.state=sn.NONE}pan(e,i){this._pan(e,i),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const i=this.object.position;Dn.copy(i).sub(this.target),Dn.applyQuaternion(this._quat),this._spherical.setFromVector3(Dn),this.autoRotate&&this.state===sn.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=oi:s>Math.PI&&(s-=oi),l<-Math.PI?l+=oi:l>Math.PI&&(l-=oi),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(Dn.setFromSpherical(this._spherical),Dn.applyQuaternion(this._quatInverse),i.copy(this.target).add(Dn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const p=Dn.length();f=this._clampDistance(p*this._scale);const m=p-f;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const p=new ce(this._mouse.x,this._mouse.y,0);p.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const h=new ce(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(p),this.object.updateMatrixWorld(),f=Dn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(Wc.origin.copy(this.object.position),Wc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Wc.direction))<eR?this.object.lookAt(this.target):(x_.setFromNormalAndCoplanarPoint(this.object.up,this.target),Wc.intersectPlane(x_,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>rh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>rh||this._lastTargetPosition.distanceToSquared(this.target)>rh?(this.dispatchEvent(g_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?oi/60*this.autoRotateSpeed*e:oi/60/60*this.autoRotateSpeed}_getZoomScale(e){const i=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,i){Dn.setFromMatrixColumn(i,0),Dn.multiplyScalar(-e),this._panOffset.add(Dn)}_panUp(e,i){this.screenSpacePanning===!0?Dn.setFromMatrixColumn(i,1):(Dn.setFromMatrixColumn(i,0),Dn.crossVectors(this.object.up,Dn)),Dn.multiplyScalar(e),this._panOffset.add(Dn)}_pan(e,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;Dn.copy(l).sub(this.target);let c=Dn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=e-s.left,c=i-s.top,f=s.width,p=s.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/p)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(oi*this._rotateDelta.x/i.clientHeight),this._rotateUp(oi*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let i=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(oi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-oi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(oi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-oi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const s=this._getSecondPointerPosition(e),l=.5*(e.pageX+s.x),c=.5*(e.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(oi*this._rotateDelta.x/i.clientHeight),this._rotateUp(oi*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(e.pageX+i.x)*.5,p=(e.pageY+i.y)*.5;this._updateZoomParameters(f,p)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(e){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId)return!0;return!1}_trackPointer(e){let i=this._pointerPositions[e.pointerId];i===void 0&&(i=new Rt,this._pointerPositions[e.pointerId]=i),i.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const i=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(e){const i=e.deltaMode,s={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function nR(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function iR(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function aR(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(_v),this.state=sn.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],i=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:i.x,pageY:i.y});break}}function sR(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Yr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=sn.DOLLY;break;case Yr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=sn.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=sn.ROTATE}break;case Yr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=sn.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=sn.PAN}break;default:this.state=sn.NONE}this.state!==sn.NONE&&this.dispatchEvent(mp)}function rR(r){switch(this.state){case sn.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case sn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case sn.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function oR(r){this.enabled===!1||this.enableZoom===!1||this.state!==sn.NONE||(r.preventDefault(),this.dispatchEvent(mp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(_v))}function lR(r){this.enabled!==!1&&this._handleKeyDown(r)}function cR(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case qr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=sn.TOUCH_ROTATE;break;case qr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=sn.TOUCH_PAN;break;default:this.state=sn.NONE}break;case 2:switch(this.touches.TWO){case qr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=sn.TOUCH_DOLLY_PAN;break;case qr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=sn.TOUCH_DOLLY_ROTATE;break;default:this.state=sn.NONE}break;default:this.state=sn.NONE}this.state!==sn.NONE&&this.dispatchEvent(mp)}function uR(r){switch(this._trackPointer(r),this.state){case sn.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case sn.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case sn.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case sn.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=sn.NONE}}function fR(r){this.enabled!==!1&&r.preventDefault()}function dR(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function hR(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var oh={exports:{}},__;function pR(){return __||(__=1,(function(r,e){(function(i,s,l,c){var f={URL:i.URL||i.webkitURL||i.mozURL||i.msURL,getUserMedia:(function(){var w=l.getUserMedia||l.webkitGetUserMedia||l.mozGetUserMedia||l.msGetUserMedia;return w&&w.bind(l)})(),requestAnimFrame:i.requestAnimationFrame||i.webkitRequestAnimationFrame||i.mozRequestAnimationFrame||i.oRequestAnimationFrame||i.msRequestAnimationFrame,requestTimeout:function(R,O){if(R=R||f.noop,O=O||0,!f.requestAnimFrame)return setTimeout(R,O);var T=new Date().getTime(),S=new Object,V=f.requestAnimFrame,Y=function W(){var X=new Date().getTime(),re=X-T;re>=O?R.call():S.value=V(W)};return S.value=V(Y),S},Blob:i.Blob||i.BlobBuilder||i.WebKitBlobBuilder||i.MozBlobBuilder||i.MSBlobBuilder,btoa:(function(){var w=i.btoa||function(R){for(var O="",T=0,S=R.length,V="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",Y=void 0,W=void 0,X=void 0,re=void 0,ue=void 0,we=void 0,Se=void 0;T<S;)Y=R.charCodeAt(T++),W=R.charCodeAt(T++),X=R.charCodeAt(T++),re=Y>>2,ue=(Y&3)<<4|W>>4,we=(W&15)<<2|X>>6,Se=X&63,isNaN(W)?we=Se=64:isNaN(X)&&(Se=64),O=O+V.charAt(re)+V.charAt(ue)+V.charAt(we)+V.charAt(Se);return O};return w?w.bind(i):f.noop})(),isObject:function(R){return R&&Object.prototype.toString.call(R)==="[object Object]"},isEmptyObject:function(R){return f.isObject(R)&&!Object.keys(R).length},isArray:function(R){return R&&Array.isArray(R)},isFunction:function(R){return R&&typeof R=="function"},isElement:function(R){return R&&R.nodeType===1},isString:function(R){return typeof R=="string"||Object.prototype.toString.call(R)==="[object String]"},isSupported:{canvas:function(){var R=s.createElement("canvas");return R&&R.getContext&&R.getContext("2d")},webworkers:function(){return i.Worker},blob:function(){return f.Blob},Uint8Array:function(){return i.Uint8Array},Uint32Array:function(){return i.Uint32Array},videoCodecs:(function(){var w=s.createElement("video"),R={mp4:!1,h264:!1,ogv:!1,ogg:!1,webm:!1};try{w&&w.canPlayType&&(R.mp4=w.canPlayType('video/mp4; codecs="mp4v.20.8"')!=="",R.h264=(w.canPlayType('video/mp4; codecs="avc1.42E01E"')||w.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"'))!=="",R.ogv=w.canPlayType('video/ogg; codecs="theora"')!=="",R.ogg=w.canPlayType('video/ogg; codecs="theora"')!=="",R.webm=w.canPlayType('video/webm; codecs="vp8, vorbis"')!==-1)}catch{}return R})()},noop:function(){},each:function(R,O){var T=void 0,S=void 0;if(f.isArray(R))for(T=-1,S=R.length;++T<S&&O(T,R[T])!==!1;);else if(f.isObject(R)){for(T in R)if(R.hasOwnProperty(T)&&O(T,R[T])===!1)break}},mergeOptions:function(R,O){if(!(!f.isObject(R)||!f.isObject(O)||!Object.keys)){var T={};return f.each(R,function(S,V){T[S]=R[S]}),f.each(O,function(S,V){var Y=O[S];f.isObject(Y)&&R[S]?T[S]=f.mergeOptions(R[S],Y):T[S]=Y}),T}},setCSSAttr:function(R,O,T){f.isElement(R)&&(f.isString(O)&&f.isString(T)?R.style[O]=T:f.isObject(O)&&f.each(O,function(S,V){R.style[S]=V}))},removeElement:function(R){f.isElement(R)&&R.parentNode&&R.parentNode.removeChild(R)},createWebWorker:function(R){if(!f.isString(R))return{};try{var O=new f.Blob([R],{type:"text/javascript"}),T=f.URL.createObjectURL(O),S=new Worker(T);return{objectUrl:T,worker:S}}catch(V){return""+V}},getExtension:function(R){return R.substr(R.lastIndexOf(".")+1,R.length)},getFontSize:function(){var R=arguments.length>0&&arguments[0]!==c?arguments[0]:{};if(!s.body||R.resizeFont===!1)return R.fontSize;var O=R.text,T=R.gifWidth,S=parseInt(R.fontSize,10),V=parseInt(R.minFontSize,10),Y=s.createElement("div"),W=s.createElement("span");for(Y.setAttribute("width",T),Y.appendChild(W),W.innerHTML=O,W.style.fontSize=S+"px",W.style.textIndent="-9999px",W.style.visibility="hidden",s.body.appendChild(W);W.offsetWidth>T&&S>=V;)W.style.fontSize=--S+"px";return s.body.removeChild(W),S+"px"},webWorkerError:!1},p=Object.freeze({default:f}),m={validate:function(R){R=f.isObject(R)?R:{};var O={};return f.each(m.validators,function(T,S){var V=S.errorCode;if(!R[V]&&!S.condition)return O=S,O.error=!0,!1}),delete O.condition,O},isValid:function(R){var O=m.validate(R),T=O.error!==!0;return T},validators:[{condition:f.isFunction(f.getUserMedia),errorCode:"getUserMedia",errorMsg:"The getUserMedia API is not supported in your browser"},{condition:f.isSupported.canvas(),errorCode:"canvas",errorMsg:"Canvas elements are not supported in your browser"},{condition:f.isSupported.webworkers(),errorCode:"webworkers",errorMsg:"The Web Workers API is not supported in your browser"},{condition:f.isFunction(f.URL),errorCode:"window.URL",errorMsg:"The window.URL API is not supported in your browser"},{condition:f.isSupported.blob(),errorCode:"window.Blob",errorMsg:"The window.Blob File API is not supported in your browser"},{condition:f.isSupported.Uint8Array(),errorCode:"window.Uint8Array",errorMsg:"The window.Uint8Array function constructor is not supported in your browser"},{condition:f.isSupported.Uint32Array(),errorCode:"window.Uint32Array",errorMsg:"The window.Uint32Array function constructor is not supported in your browser"}],messages:{videoCodecs:{errorCode:"videocodec",errorMsg:"The video codec you are trying to use is not supported in your browser"}}},h=Object.freeze({default:m}),g=function(){},_={sampleInterval:10,numWorkers:2,filter:"",gifWidth:200,gifHeight:200,interval:.1,numFrames:10,frameDuration:1,keepCameraOn:!1,images:[],video:null,webcamVideoElement:null,cameraStream:null,text:"",fontWeight:"normal",fontSize:"16px",minFontSize:"10px",resizeFont:!1,fontFamily:"sans-serif",fontColor:"#ffffff",textAlign:"center",textBaseline:"bottom",textXCoordinate:null,textYCoordinate:null,progressCallback:g,completeCallback:g,saveRenderingContexts:!1,savedRenderingContexts:[],crossOrigin:"Anonymous"},x=Object.freeze({default:_});function M(){return m.isValid()}function E(){return m.isValid()}function U(){var w={getUserMedia:!0};return m.isValid(w)}function b(w){var R=!1;if(f.isArray(w)&&w.length){if(f.each(w,function(O,T){f.isSupported.videoCodecs[T]&&(R=!0)}),!R)return!1}else if(f.isString(w)&&w.length&&!f.isSupported.videoCodecs[w])return!1;return m.isValid({getUserMedia:!0})}function y(){var w=256,R=499,O=491,T=487,S=503,V=3*S,Y=w-1,W=4,X=100,re=16,ue=1<<re,we=10,Se=10,be=ue>>Se,Ze=ue<<we-Se,We=w>>3,ze=6,Je=1<<ze,tt=We*Je,gt=30,pt=10,Ct=1<<pt,$,Et=8,ot=1<<Et,mt=pt+Et,Le=1<<mt,Ft,I,C,ie,Ee=[],Ue=[],Ie=[],Ge=[];function ye(le,Ae,Oe){var me,Pe;for(Ft=le,I=Ae,C=Oe,ie=new Array(w),me=0;me<w;me++)ie[me]=new Array(4),Pe=ie[me],Pe[0]=Pe[1]=Pe[2]=(me<<W+8)/w|0,Ie[me]=ue/w|0,Ue[me]=0}function Me(){for(var le=[],Ae=new Array(w),Oe=0;Oe<w;Oe++)Ae[ie[Oe][3]]=Oe;for(var me=0,Pe=0;Pe<w;Pe++){var Ne=Ae[Pe];le[me++]=ie[Ne][0],le[me++]=ie[Ne][1],le[me++]=ie[Ne][2]}return le}function Ve(){var le,Ae,Oe,me,Pe,Ne,je,at;for(je=0,at=0,le=0;le<w;le++){for(Pe=ie[le],Oe=le,me=Pe[1],Ae=le+1;Ae<w;Ae++)Ne=ie[Ae],Ne[1]<me&&(Oe=Ae,me=Ne[1]);if(Ne=ie[Oe],le!=Oe&&(Ae=Ne[0],Ne[0]=Pe[0],Pe[0]=Ae,Ae=Ne[1],Ne[1]=Pe[1],Pe[1]=Ae,Ae=Ne[2],Ne[2]=Pe[2],Pe[2]=Ae,Ae=Ne[3],Ne[3]=Pe[3],Pe[3]=Ae),me!=je){for(Ee[je]=at+le>>1,Ae=je+1;Ae<me;Ae++)Ee[Ae]=le;je=me,at=le}}for(Ee[je]=at+Y>>1,Ae=je+1;Ae<256;Ae++)Ee[Ae]=Y}function ke(){var le,Ae,Oe,me,Pe,Ne,je,at,yt,It,Cn,qt,yn,Fa;for(I<V&&(C=1),$=30+(C-1)/3,qt=Ft,yn=0,Fa=I,Cn=I/(3*C),It=Cn/X|0,at=Ct,Ne=tt,je=Ne>>ze,je<=1&&(je=0),le=0;le<je;le++)Ge[le]=at*((je*je-le*le)*ot/(je*je));for(I<V?yt=3:I%R!==0?yt=3*R:I%O!==0?yt=3*O:I%T!==0?yt=3*T:yt=3*S,le=0;le<Cn;)if(Oe=(qt[yn+0]&255)<<W,me=(qt[yn+1]&255)<<W,Pe=(qt[yn+2]&255)<<W,Ae=ee(Oe,me,Pe),vt(at,Ae,Oe,me,Pe),je!==0&&ft(je,Ae,Oe,me,Pe),yn+=yt,yn>=Fa&&(yn-=I),le++,It===0&&(It=1),le%It===0)for(at-=at/$,Ne-=Ne/gt,je=Ne>>ze,je<=1&&(je=0),Ae=0;Ae<je;Ae++)Ge[Ae]=at*((je*je-Ae*Ae)*ot/(je*je))}function He(le,Ae,Oe){var me,Pe,Ne,je,at,yt,It;for(at=1e3,It=-1,me=Ee[Ae],Pe=me-1;me<w||Pe>=0;)me<w&&(yt=ie[me],Ne=yt[1]-Ae,Ne>=at?me=w:(me++,Ne<0&&(Ne=-Ne),je=yt[0]-le,je<0&&(je=-je),Ne+=je,Ne<at&&(je=yt[2]-Oe,je<0&&(je=-je),Ne+=je,Ne<at&&(at=Ne,It=yt[3])))),Pe>=0&&(yt=ie[Pe],Ne=Ae-yt[1],Ne>=at?Pe=-1:(Pe--,Ne<0&&(Ne=-Ne),je=yt[0]-le,je<0&&(je=-je),Ne+=je,Ne<at&&(je=yt[2]-Oe,je<0&&(je=-je),Ne+=je,Ne<at&&(at=Ne,It=yt[3]))));return It}function Be(){return ke(),ut(),Ve(),Me()}function ut(){var le;for(le=0;le<w;le++)ie[le][0]>>=W,ie[le][1]>>=W,ie[le][2]>>=W,ie[le][3]=le}function ft(le,Ae,Oe,me,Pe){var Ne,je,at,yt,It,Cn,qt;for(at=Ae-le,at<-1&&(at=-1),yt=Ae+le,yt>w&&(yt=w),Ne=Ae+1,je=Ae-1,Cn=1;Ne<yt||je>at;){if(It=Ge[Cn++],Ne<yt){qt=ie[Ne++];try{qt[0]-=It*(qt[0]-Oe)/Le|0,qt[1]-=It*(qt[1]-me)/Le|0,qt[2]-=It*(qt[2]-Pe)/Le|0}catch{}}if(je>at){qt=ie[je--];try{qt[0]-=It*(qt[0]-Oe)/Le|0,qt[1]-=It*(qt[1]-me)/Le|0,qt[2]-=It*(qt[2]-Pe)/Le|0}catch{}}}}function vt(le,Ae,Oe,me,Pe){var Ne=ie[Ae],je=le/Ct;Ne[0]-=je*(Ne[0]-Oe)|0,Ne[1]-=je*(Ne[1]-me)|0,Ne[2]-=je*(Ne[2]-Pe)|0}function ee(le,Ae,Oe){var me,Pe,Ne,je,at,yt,It,Cn,qt,yn;for(Cn=2147483647,qt=Cn,yt=-1,It=yt,me=0;me<w;me++)yn=ie[me],Pe=yn[0]-le,Pe<0&&(Pe=-Pe),Ne=yn[1]-Ae,Ne<0&&(Ne=-Ne),Pe+=Ne,Ne=yn[2]-Oe,Ne<0&&(Ne=-Ne),Pe+=Ne,Pe<Cn&&(Cn=Pe,yt=me),je=Pe-(Ue[me]>>re-W),je<qt&&(qt=je,It=me),at=Ie[me]>>Se,Ie[me]-=at,Ue[me]+=at<<we;return Ie[yt]+=be,Ue[yt]-=Ze,It}ye.apply(this,arguments);var Fe={};return Fe.map=He,Fe.process=Be,Fe}function F(){var w=this;try{w.onmessage=function(O){var T=O.data||{},S;T.gifshot&&(S=R.run(T),postMessage(S))}}catch{}var R={dataToRGB:function(T,S,V){for(var Y=S*V*4,W=0,X=[];W<Y;)X.push(T[W++]),X.push(T[W++]),X.push(T[W++]),W++;return X},componentizedPaletteToArray:function(T){T=T||[];for(var S=[],V=0;V<T.length;V+=3){var Y=T[V],W=T[V+1],X=T[V+2];S.push(Y<<16|W<<8|X)}return S},processFrameWithQuantizer:function(T,S,V,Y){for(var W=this.dataToRGB(T,S,V),X=new y(W,W.length,Y),re=X.process(),ue=new Uint32Array(this.componentizedPaletteToArray(re)),we=S*V,Se=new Uint8Array(we),be=0,Ze=0;Ze<we;Ze++){var We=W[be++],ze=W[be++],Je=W[be++];Se[Ze]=X.map(We,ze,Je)}return{pixels:Se,palette:ue}},run:function(T){T=T||{};var S=T,V=S.height;S.palette;var Y=S.sampleInterval,W=S.width,X=T.data;return this.processFrameWithQuantizer(X,W,V,Y)}};return R}function G(w,R,O,T){var S=0;T=T===c?{}:T;var V=T.loop===c?null:T.loop,Y=T.palette===c?null:T.palette;if(R<=0||O<=0||R>65535||O>65535)throw"Width/Height invalid.";function W(Se){var be=Se.length;if(be<2||be>256||be&be-1)throw"Invalid code/color length, must be power of 2 and 2 .. 256.";return be}w[S++]=71,w[S++]=73,w[S++]=70,w[S++]=56,w[S++]=57,w[S++]=97;var X=0,re=0;if(w[S++]=R&255,w[S++]=R>>8&255,w[S++]=O&255,w[S++]=O>>8&255,w[S++]=(Y!==null?128:0)|X,w[S++]=re,w[S++]=0,V!==null){if(V<0||V>65535)throw"Loop count invalid.";w[S++]=33,w[S++]=255,w[S++]=11,w[S++]=78,w[S++]=69,w[S++]=84,w[S++]=83,w[S++]=67,w[S++]=65,w[S++]=80,w[S++]=69,w[S++]=50,w[S++]=46,w[S++]=48,w[S++]=3,w[S++]=1,w[S++]=V&255,w[S++]=V>>8&255,w[S++]=0}var ue=!1;this.addFrame=function(Se,be,Ze,We,ze,Je){if(ue===!0&&(--S,ue=!1),Je=Je===c?{}:Je,Se<0||be<0||Se>65535||be>65535)throw"x/y invalid.";if(Ze<=0||We<=0||Ze>65535||We>65535)throw"Width/Height invalid.";if(ze.length<Ze*We)throw"Not enough pixels for the frame size.";var tt=!0,gt=Je.palette;if((gt===c||gt===null)&&(tt=!1,gt=Y),gt===c||gt===null)throw"Must supply either a local or global palette.";for(var pt=W(gt),Ct=0;pt>>=1;)++Ct;pt=1<<Ct;var $=Je.delay===c?0:Je.delay,Et=Je.disposal===c?0:Je.disposal;if(Et<0||Et>3)throw"Disposal out of range.";var ot=!1,mt=0;if(Je.transparent!==c&&Je.transparent!==null&&(ot=!0,mt=Je.transparent,mt<0||mt>=pt))throw"Transparent color index.";if((Et!==0||ot||$!==0)&&(w[S++]=33,w[S++]=249,w[S++]=4,w[S++]=Et<<2|(ot===!0?1:0),w[S++]=$&255,w[S++]=$>>8&255,w[S++]=mt,w[S++]=0),w[S++]=44,w[S++]=Se&255,w[S++]=Se>>8&255,w[S++]=be&255,w[S++]=be>>8&255,w[S++]=Ze&255,w[S++]=Ze>>8&255,w[S++]=We&255,w[S++]=We>>8&255,w[S++]=tt===!0?128|Ct-1:0,tt===!0)for(var Le=0,Ft=gt.length;Le<Ft;++Le){var I=gt[Le];w[S++]=I>>16&255,w[S++]=I>>8&255,w[S++]=I&255}S=we(w,S,Ct<2?2:Ct,ze)},this.end=function(){return ue===!1&&(w[S++]=59,ue=!0),S};function we(Se,be,Ze,We){Se[be++]=Ze;var ze=be++,Je=1<<Ze,tt=Je-1,gt=Je+1,pt=gt+1,Ct=Ze+1,$=0,Et=0;function ot(Ie){for(;$>=Ie;)Se[be++]=Et&255,Et>>=8,$-=8,be===ze+256&&(Se[ze]=255,ze=be++)}function mt(Ie){Et|=Ie<<$,$+=Ct,ot(8)}var Le=We[0]&tt,Ft={};mt(Je);for(var I=1,C=We.length;I<C;++I){var ie=We[I]&tt,Ee=Le<<8|ie,Ue=Ft[Ee];if(Ue===c){for(Et|=Le<<$,$+=Ct;$>=8;)Se[be++]=Et&255,Et>>=8,$-=8,be===ze+256&&(Se[ze]=255,ze=be++);pt===4096?(mt(Je),pt=gt+1,Ct=Ze+1,Ft={}):(pt>=1<<Ct&&++Ct,Ft[Ee]=pt++),Le=ie}else Le=Ue}return mt(Le),mt(gt),ot(1),ze+1===be?Se[ze]=0:(Se[ze]=be-ze-1,Se[be++]=0),be}}var z=function(){},K=function(R){this.canvas=null,this.ctx=null,this.repeat=0,this.frames=[],this.numRenderedFrames=0,this.onRenderCompleteCallback=z,this.onRenderProgressCallback=z,this.workers=[],this.availableWorkers=[],this.generatingGIF=!1,this.options=R,this.initializeWebWorkers(R)};K.prototype={workerMethods:F(),initializeWebWorkers:function(R){var O=this,T=y.toString()+"("+F.toString()+"());",S=void 0,V=void 0,Y=void 0,W=void 0,X=-1,re="";for(W=R.numWorkers;++X<W;)S=f.createWebWorker(T),f.isObject(S)?(V=S.objectUrl,Y=S.worker,O.workers.push({worker:Y,objectUrl:V}),O.availableWorkers.push(Y)):(re=S,f.webWorkerError=!!S);this.workerError=re,this.canvas=s.createElement("canvas"),this.canvas.width=R.gifWidth,this.canvas.height=R.gifHeight,this.ctx=this.canvas.getContext("2d"),this.frames=[]},getWorker:function(){return this.availableWorkers.pop()},freeWorker:function(R){this.availableWorkers.push(R)},byteMap:(function(){for(var w=[],R=0;R<256;R++)w[R]=String.fromCharCode(R);return w})(),bufferToString:function(R){for(var O=R.length,T="",S=-1;++S<O;)T+=this.byteMap[R[S]];return T},onFrameFinished:function(R){var O=this,T=O.frames,S=O.options,V=!!(S.images||[]).length,Y=T.every(function(W){return!W.beingProcessed&&W.done});O.numRenderedFrames++,V&&R(O.numRenderedFrames/T.length),O.onRenderProgressCallback(O.numRenderedFrames*.75/T.length),Y?O.generatingGIF||O.generateGIF(T,O.onRenderCompleteCallback):f.requestTimeout(function(){O.processNextFrame()},1)},processFrame:function(R){var O=this;this.options;var T=this.options,S=T.progressCallback,V=T.sampleInterval,Y=this.frames,W=void 0,X=void 0,re=function(){var we=arguments.length>0&&arguments[0]!==c?arguments[0]:{},Se=we.data;delete W.data,W.pixels=Array.prototype.slice.call(Se.pixels),W.palette=Array.prototype.slice.call(Se.palette),W.done=!0,W.beingProcessed=!1,O.freeWorker(X),O.onFrameFinished(S)};if(W=Y[R],W.beingProcessed||W.done){this.onFrameFinished();return}W.sampleInterval=V,W.beingProcessed=!0,W.gifshot=!0,X=this.getWorker(),X?(X.onmessage=re,X.postMessage(W)):re({data:O.workerMethods.run(W)})},startRendering:function(R){this.onRenderCompleteCallback=R;for(var O=0;O<this.options.numWorkers&&O<this.frames.length;O++)this.processFrame(O)},processNextFrame:function(){for(var R=-1,O=0;O<this.frames.length;O++){var T=this.frames[O];if(!T.done&&!T.beingProcessed){R=O;break}}R>=0&&this.processFrame(R)},generateGIF:function(R,O){var T=[],S={loop:this.repeat},V=this.options,Y=V.interval,W=V.frameDuration,X=V.images,re=!!X.length,ue=V.gifHeight,we=V.gifWidth,Se=new G(T,we,ue,S),be=this.onRenderProgressCallback,Ze=re?Y*100:0,We=void 0,ze=void 0;this.generatingGIF=!0,f.each(R,function(Je,tt){var gt=tt.palette;be(.75+.25*tt.position*1/R.length);for(var pt=0;pt<W;pt++)Se.addFrame(0,0,we,ue,tt.pixels,{palette:gt,delay:Ze})}),Se.end(),be(1),this.frames=[],this.generatingGIF=!1,f.isFunction(O)&&(We=this.bufferToString(T),ze="data:image/gif;base64,"+f.btoa(We),O(ze))},setRepeat:function(R){this.repeat=R},addFrame:function(R,O){O=f.isObject(O)?O:{};var T=this,S=T.ctx,V=T.options,Y=V.gifWidth,W=V.gifHeight,X=f.getFontSize(O),re=O,ue=re.filter,we=re.fontColor,Se=re.fontFamily,be=re.fontWeight;re.gifHeight,re.gifWidth;var Ze=re.text,We=re.textAlign,ze=re.textBaseline,Je=O.textXCoordinate?O.textXCoordinate:We==="left"?1:We==="right"?Y:Y/2,tt=O.textYCoordinate?O.textYCoordinate:ze==="top"?1:ze==="center"?W/2:W,gt=be+" "+X+" "+Se,pt=void 0;try{S.filter=ue,S.drawImage(R,0,0,Y,W),Ze&&(S.font=gt,S.fillStyle=we,S.textAlign=We,S.textBaseline=ze,S.fillText(Ze,Je,tt)),pt=S.getImageData(0,0,Y,W),T.addFrameImageData(pt)}catch(Ct){return""+Ct}},addFrameImageData:function(){var R=arguments.length>0&&arguments[0]!==c?arguments[0]:{},O=this.frames,T=R.data;this.frames.push({data:T,width:R.width,height:R.height,palette:null,dithering:null,done:!1,beingProcessed:!1,position:O.length})},onRenderProgress:function(R){this.onRenderProgressCallback=R},isRendering:function(){return this.generatingGIF},getBase64GIF:function(R){var O=this,T=function(V){O.destroyWorkers(),f.requestTimeout(function(){R(V)},0)};O.startRendering(T)},destroyWorkers:function(){if(!this.workerError){var R=this.workers;f.each(R,function(O,T){var S=T.worker,V=T.objectUrl;S.terminate(),f.URL.revokeObjectURL(V)})}}};function B(w,R){w.getBase64GIF(function(O){R({error:!1,errorCode:"",errorMsg:"",image:O})})}function j(){var w=arguments.length>0&&arguments[0]!==c?arguments[0]:{},R=w.callback,O=w.images,T=w.options,S=w.imagesLength,V={getUserMedia:!0,"window.URL":!0},Y=m.validate(V),W=[],X=0,re=void 0,ue=void 0;if(Y.error)return R(Y);ue=new K(T),f.each(O,function(Se,be){var Ze=be;be.src&&(Ze=Ze.src),f.isElement(Ze)?(T.crossOrigin&&(Ze.crossOrigin=T.crossOrigin),W[Se]=Ze,X+=1,X===S&&we()):f.isString(Ze)&&(re=new Image,T.crossOrigin&&(re.crossOrigin=T.crossOrigin),(function(We){be.text&&(We.text=be.text),We.onerror=function(ze){var Je=void 0;if(--S,S===0)return Je={},Je.error="None of the requested images was capable of being retrieved",R(Je)},We.onload=function(ze){be.text?W[Se]={img:We,text:We.text}:W[Se]=We,X+=1,X===S&&we(),f.removeElement(We)},We.src=Ze})(re),f.setCSSAttr(re,{position:"fixed",opacity:"0"}),s.body.appendChild(re))});function we(){f.each(W,function(Se,be){be&&(be.text?ue.addFrame(be.img,T,be.text):ue.addFrame(be,T))}),B(ue,R)}}var N=function(){},k={getGIF:function(){var R=arguments.length>0&&arguments[0]!==c?arguments[0]:{},O=arguments[1];O=f.isFunction(O)?O:N;var T=s.createElement("canvas"),S=void 0,V=R.images,Y=!!V.length,W=R.cameraStream,X=R.crop,re=R.filter,ue=R.fontColor,we=R.fontFamily,Se=R.fontWeight,be=R.keepCameraOn;R.numWorkers;var Ze=R.progressCallback,We=R.saveRenderingContexts,ze=R.savedRenderingContexts,Je=R.text,tt=R.textAlign,gt=R.textBaseline,pt=R.videoElement,Ct=R.videoHeight,$=R.videoWidth,Et=R.webcamVideoElement,ot=Number(R.gifWidth),mt=Number(R.gifHeight),Le=Number(R.interval);Number(R.sampleInterval);var Ft=Y?0:Le*1e3,I=[],C=ze.length?ze.length:R.numFrames,ie=C,Ee=new K(R),Ue=f.getFontSize(R),Ie=R.textXCoordinate?R.textXCoordinate:tt==="left"?1:tt==="right"?ot:ot/2,Ge=R.textYCoordinate?R.textYCoordinate:gt==="top"?1:gt==="center"?mt/2:mt,ye=Se+" "+Ue+" "+we,Me=X?Math.floor(X.scaledWidth/2):0,Ve=X?$-X.scaledWidth:0,ke=X?Math.floor(X.scaledHeight/2):0,He=X?Ct-X.scaledHeight:0,Be=function ut(){var ft=ie-1;ze.length?(S.putImageData(ze[C-ie],0,0),ee()):vt();function vt(){try{Ve>$&&(Ve=$),He>Ct&&(He=Ct),Me<0&&(Me=0),ke<0&&(ke=0),S.filter=re,S.drawImage(pt,Me,ke,Ve,He,0,0,ot,mt),ee()}catch(Fe){if(Fe.name==="NS_ERROR_NOT_AVAILABLE")f.requestTimeout(vt,100);else throw Fe}}function ee(){var Fe=void 0;We&&I.push(S.getImageData(0,0,ot,mt)),Je&&(S.font=ye,S.fillStyle=ue,S.textAlign=tt,S.textBaseline=gt,S.fillText(Je,Ie,Ge)),Fe=S.getImageData(0,0,ot,mt),Ee.addFrameImageData(Fe),ie=ft,Ze((C-ie)/C),ft>0&&f.requestTimeout(ut,Ft),ie||Ee.getBase64GIF(function(le){O({error:!1,errorCode:"",errorMsg:"",image:le,cameraStream:W,videoElement:pt,webcamVideoElement:Et,savedRenderingContexts:I,keepCameraOn:be})})}};C=C!==c?C:10,Le=Le!==c?Le:.1,T.width=ot,T.height=mt,S=T.getContext("2d"),(function ut(){if(!ze.length&&pt.currentTime===0){f.requestTimeout(ut,100);return}Be()})()},getCropDimensions:function(){var R=arguments.length>0&&arguments[0]!==c?arguments[0]:{},O=R.videoWidth,T=R.videoHeight,S=R.gifWidth,V=R.gifHeight,Y={width:0,height:0,scaledWidth:0,scaledHeight:0};return O>T?(Y.width=Math.round(O*(V/T))-S,Y.scaledWidth=Math.round(Y.width*(T/V))):(Y.height=Math.round(T*(S/O))-V,Y.scaledHeight=Math.round(Y.height*(O/S))),Y}},J={loadedData:!1,defaultVideoDimensions:{width:640,height:480},findVideoSize:function w(R){w.attempts=w.attempts||0;var O=R.cameraStream,T=R.completedCallback,S=R.videoElement;S&&(S.videoWidth>0&&S.videoHeight>0?(S.removeEventListener("loadeddata",J.findVideoSize),T({videoElement:S,cameraStream:O,videoWidth:S.videoWidth,videoHeight:S.videoHeight})):w.attempts<10?(w.attempts+=1,f.requestTimeout(function(){J.findVideoSize(R)},400)):T({videoElement:S,cameraStream:O,videoWidth:J.defaultVideoDimensions.width,videoHeight:J.defaultVideoDimensions.height}))},onStreamingTimeout:function(R){f.isFunction(R)&&R({error:!0,errorCode:"getUserMedia",errorMsg:"There was an issue with the getUserMedia API - Timed out while trying to start streaming",image:null,cameraStream:{}})},stream:function(R){var O=f.isArray(R.existingVideo)?R.existingVideo[0]:R.existingVideo,T=R.cameraStream,S=R.completedCallback,V=R.streamedCallback,Y=R.videoElement;if(f.isFunction(V)&&V(),O){if(f.isString(O))Y.src=O,Y.innerHTML='<source src="'+O+'" type="video/'+f.getExtension(O)+'" />';else if(O instanceof Blob){try{Y.src=f.URL.createObjectURL(O)}catch{}Y.innerHTML='<source src="'+O+'" type="'+O.type+'" />'}}else if(Y.mozSrcObject)Y.mozSrcObject=T;else if(f.URL)try{Y.srcObject=T,Y.src=f.URL.createObjectURL(T)}catch{Y.srcObject=T}Y.play(),f.requestTimeout(function W(){W.count=W.count||0,J.loadedData===!0?(J.findVideoSize({videoElement:Y,cameraStream:T,completedCallback:S}),J.loadedData=!1):(W.count+=1,W.count>10?J.findVideoSize({videoElement:Y,cameraStream:T,completedCallback:S}):W())},0)},startStreaming:function(R){var O=f.isFunction(R.error)?R.error:f.noop,T=f.isFunction(R.streamed)?R.streamed:f.noop,S=f.isFunction(R.completed)?R.completed:f.noop,V=R.crossOrigin,Y=R.existingVideo,W=R.lastCameraStream,X=R.options,re=R.webcamVideoElement,ue=f.isElement(Y)?Y:re||s.createElement("video");V&&(ue.crossOrigin=X.crossOrigin),ue.autoplay=!0,ue.loop=!0,ue.muted=!0,ue.addEventListener("loadeddata",function(we){J.loadedData=!0,X.offset&&(ue.currentTime=X.offset)}),Y?J.stream({videoElement:ue,existingVideo:Y,completedCallback:S}):W?J.stream({videoElement:ue,cameraStream:W,streamedCallback:T,completedCallback:S}):f.getUserMedia({video:!0},function(we){J.stream({videoElement:ue,cameraStream:we,streamedCallback:T,completedCallback:S})},O)},startVideoStreaming:function(R){var O=arguments.length>1&&arguments[1]!==c?arguments[1]:{},T=O.timeout!==c?O.timeout:0,S=O.callback,V=O.webcamVideoElement,Y=void 0;T>0&&(Y=f.requestTimeout(function(){J.onStreamingTimeout(S)},1e4)),J.startStreaming({error:function(){S({error:!0,errorCode:"getUserMedia",errorMsg:"There was an issue with the getUserMedia API - the user probably denied permission",image:null,cameraStream:{}})},streamed:function(){clearTimeout(Y)},completed:function(){var X=arguments.length>0&&arguments[0]!==c?arguments[0]:{},re=X.cameraStream,ue=X.videoElement,we=X.videoHeight,Se=X.videoWidth;R({cameraStream:re,videoElement:ue,videoHeight:we,videoWidth:Se})},lastCameraStream:O.lastCameraStream,webcamVideoElement:V,crossOrigin:O.crossOrigin,options:O})},stopVideoStreaming:function(R){R=f.isObject(R)?R:{};var O=R,T=O.keepCameraOn,S=O.videoElement,V=O.webcamVideoElement,Y=R.cameraStream||{},W=Y.getTracks?Y.getTracks()||[]:[],X=!!W.length,re=W[0];!T&&X&&f.isFunction(re.stop)&&re.stop(),f.isElement(S)&&!V&&(S.pause(),f.isFunction(f.URL.revokeObjectURL)&&!f.webWorkerError&&S.src&&f.URL.revokeObjectURL(S.src),f.removeElement(S))}};function Z(w){w=f.isObject(w)?w:{},J.stopVideoStreaming(w)}function te(w,R){var O=w.options||{},T=O.images,S=O.video,V=Number(O.gifWidth),Y=Number(O.gifHeight);Number(O.numFrames);var W=w.cameraStream,X=w.videoElement,re=w.videoWidth,ue=w.videoHeight,we=k.getCropDimensions({videoWidth:re,videoHeight:ue,gifHeight:Y,gifWidth:V}),Se=R;O.crop=we,O.videoElement=X,O.videoWidth=re,O.videoHeight=ue,O.cameraStream=W,f.isElement(X)&&(X.width=V+we.width,X.height=Y+we.height,O.webcamVideoElement||(f.setCSSAttr(X,{position:"fixed",opacity:"0"}),s.body.appendChild(X)),X.play(),k.getGIF(O,function(be){(!T||!T.length)&&(!S||!S.length)&&Z(be),Se(be)}))}function _e(){var w=arguments.length>0&&arguments[0]!==c?arguments[0]:{},R=w.callback,O=w.existingVideo,T=w.options,S={getUserMedia:!0,"window.URL":!0},V=m.validate(S),Y=void 0,W=void 0;if(V.error)return R(V);if(f.isElement(O)&&O.src){if(W=O.src,Y=f.getExtension(W),!f.isSupported.videoCodecs[Y])return R(m.messages.videoCodecs)}else f.isArray(O)&&f.each(O,function(X,re){if(re instanceof Blob?Y=re.type.substr(re.type.lastIndexOf("/")+1,re.length):Y=re.substr(re.lastIndexOf(".")+1,re.length),f.isSupported.videoCodecs[Y])return O=re,!1});J.startStreaming({completed:function(re){re.options=T||{},te(re,R)},existingVideo:O,crossOrigin:T.crossOrigin,options:T})}function ae(){var w=arguments.length>0&&arguments[0]!==c?arguments[0]:{},R=w.callback,O=w.lastCameraStream,T=w.options,S=w.webcamVideoElement;if(!E())return R(m.validate());if(T.savedRenderingContexts.length){k.getGIF(T,function(V){R(V)});return}J.startVideoStreaming(function(){var V=arguments.length>0&&arguments[0]!==c?arguments[0]:{};V.options=T||{},te(V,R)},{lastCameraStream:O,callback:R,webcamVideoElement:S,crossOrigin:T.crossOrigin})}function q(w,R){if(R=f.isFunction(w)?w:R,w=f.isObject(w)?w:{},!!f.isFunction(R)){var O=f.mergeOptions(_,w)||{},T=w.cameraStream,S=O.images,V=S?S.length:0,Y=O.video,W=O.webcamVideoElement;O=f.mergeOptions(O,{gifWidth:Math.floor(O.gifWidth),gifHeight:Math.floor(O.gifHeight)}),V?j({images:S,imagesLength:V,callback:R,options:O}):Y?_e({existingVideo:Y,callback:R,options:O}):ae({lastCameraStream:T,callback:R,webcamVideoElement:W,options:O})}}function H(w,R){if(R=f.isFunction(w)?w:R,w=f.isObject(w)?w:{},!!f.isFunction(R)){var O=f.mergeOptions(_,w),T=f.mergeOptions(O,{interval:.1,numFrames:1,gifWidth:Math.floor(O.gifWidth),gifHeight:Math.floor(O.gifHeight)});q(T,R)}}var D={utils:p,error:h,defaultOptions:x,createGIF:q,takeSnapShot:H,stopVideoStreaming:Z,isSupported:M,isWebCamGIFSupported:E,isExistingVideoGIFSupported:b,isExistingImagesGIFSupported:U,VERSION:"0.4.5"};r.exports=D})(typeof window<"u"?window:{},typeof document<"u"?document:{createElement:function(){}},typeof window<"u"?window.navigator:{})})(oh)),oh.exports}var mR=pR();const gR=SS(mR),xR=({expandedString:r,symbolActions:e,variables:i,defaultStepSize:s,defaultAngleDegrees:l,is3D:c,boundingBox:f,maxPathDist:p,colorPalette:m,strokeColor:h,backgroundColor:g,strokeWidth:_,showAxes:x,growPercent:M,animationStyle:E="sequential",segmentCount:U,onCenteringTriggerRef:b,onExportPngTriggerRef:y,onExportSvgTriggerRef:F,onExportGifTriggerRef:G})=>{const z=Qe.useRef(null),K=Qe.useRef(null),B=Qe.useRef(null),j=Qe.useRef(null),N=Qe.useRef(null),k=Qe.useRef(null),J=Qe.useRef(null),Z=Qe.useRef(null),te=Qe.useRef(null),[_e,ae]=Qe.useState({width:0,height:0});Qe.useEffect(()=>{if(!z.current)return;const D=new ResizeObserver(w=>{for(const R of w){const{width:O,height:T}=R.contentRect;ae({width:O,height:T})}});return D.observe(z.current),()=>D.disconnect()},[]),Qe.useEffect(()=>{if(!z.current)return;const D=z.current.clientWidth||500,w=z.current.clientHeight||500,R=new Db;R.background=new Lt(g),B.current=R;const O=new Ui(50,D/w,.1,1e8);O.position.set(0,0,100),j.current=O;const T=new QA({antialias:!0,preserveDrawingBuffer:!0});T.setSize(D,w),T.setPixelRatio(Math.min(window.devicePixelRatio,2)),z.current.innerHTML="",z.current.appendChild(T.domElement),K.current=T;const S=new tR(O,T.domElement);S.enableDamping=!0,S.dampingFactor=.08,S.maxDistance=1e8,S.minDistance=.01,N.current=S;const V=new Qb(16777215,.95);R.add(V);const Y=new eM(500,100,"#334155","#1e293b");Y.position.y=-20,J.current=Y,x&&R.add(Y);let W;const X=()=>{W=requestAnimationFrame(X),N.current&&N.current.update(),K.current&&B.current&&j.current&&K.current.render(B.current,j.current)};return X(),()=>{cancelAnimationFrame(W),K.current&&K.current.dispose(),N.current&&N.current.dispose()}},[]),Qe.useEffect(()=>{B.current&&(B.current.background=new Lt(g))},[g]),Qe.useEffect(()=>{!K.current||!j.current||_e.width===0||(j.current.aspect=_e.width/_e.height,j.current.updateProjectionMatrix(),K.current.setSize(_e.width,_e.height))},[_e]),Qe.useEffect(()=>{B.current&&J.current&&(x?B.current.add(J.current):B.current.remove(J.current))},[x]);const q=()=>{if(!j.current||!N.current)return;let D=0,w=0,R=0,O=10,T=10,S=10,V=5;if(k.current){const W=k.current.geometry;W.computeBoundingBox();const X=W.boundingBox;if(X){const re=new ce;X.getCenter(re);const ue=new ce;X.getSize(ue),D=re.x,w=re.y,R=re.z,O=ue.x,T=ue.y,S=ue.z,V=ue.length()*.5||5}}else D=(f.min.x+f.max.x)/2,w=(f.min.y+f.max.y)/2,R=(f.min.z+f.max.z)/2,O=f.max.x-f.min.x,T=f.max.y-f.min.y,S=f.max.z-f.min.z,V=Math.sqrt(O*O+T*T+S*S)*.5||5;N.current.target.set(D,w,R);const Y=j.current.fov*Math.PI/180;if(c){let W=V/Math.sin(Y/2);W=Math.max(W,15)*1.15,j.current.position.set(D+W*.55,w+W*.45,R+W*.7),N.current.enableRotate=!0}else{let W=Math.max(O,T)/(2*Math.tan(Y/2));W=Math.max(W,15)*1.15,j.current.position.set(D,w,W),j.current.lookAt(D,w,0),N.current.enableRotate=!1}N.current.update()};Qe.useEffect(()=>{b.current=q},[f,c]),Qe.useEffect(()=>{if(U>0){const D=setTimeout(()=>{q()},60);return()=>clearTimeout(D)}},[r,c]),Qe.useEffect(()=>{var w;if(!B.current||U===0){k.current&&((w=B.current)==null||w.remove(k.current));return}let D=!0;if(k.current){const O=k.current.geometry.getAttribute("position");O&&O.count===U*2&&(D=!1)}if(D){k.current&&(B.current.remove(k.current),k.current.geometry.dispose(),k.current.material.dispose(),k.current=null);const R=new Float32Array(U*6),O=new Float32Array(U*6);Z.current=R,te.current=O;const T=new Pi;T.setAttribute("position",new Oi(R,3)),T.setAttribute("color",new Oi(O,3));const S=new fp({vertexColors:!0,transparent:!0,opacity:.95,linewidth:_}),V=new W_(T,S);B.current.add(V),k.current=V}H()},[r,U,m,h,_,e]);const H=()=>{const D=k.current;if(!D||U===0)return;const w=Z.current,R=te.current;if(!w||!R)return;const O=sh(r,e,i,s,l,m,h,M,E,w,R,f,p),T=D.geometry,S=T.getAttribute("position"),V=T.getAttribute("color");if(S.needsUpdate=!0,V.needsUpdate=!0,E==="sequential"){const Y=Math.floor(O*(M/100));T.setDrawRange(0,Y*2)}else T.setDrawRange(0,O*2)};return Qe.useEffect(()=>{H()},[i,M,E,s,l,e]),Qe.useEffect(()=>{y.current=D=>{const w=K.current,R=B.current,O=j.current;if(!w||!R||!O)return"";const T=O.aspect,S=w.domElement.width/window.devicePixelRatio,V=w.domElement.height/window.devicePixelRatio;O.aspect=D.width/D.height,O.updateProjectionMatrix(),w.setSize(D.width,D.height),w.render(R,O);const Y=w.domElement.toDataURL("image/png");return O.aspect=T,O.updateProjectionMatrix(),w.setSize(S,V),w.render(R,O),Y}},[r,U,M,m,h,i,s,l,E,e]),Qe.useEffect(()=>{G.current=async D=>{const w=K.current,R=B.current,O=j.current,T=k.current;if(!w||!R||!O||!T||U===0)throw new Error("The 3D engine is not ready. Please wait.");const S=O.aspect,V=w.domElement.width/window.devicePixelRatio,Y=w.domElement.height/window.devicePixelRatio;O.aspect=D.width/D.height,O.updateProjectionMatrix(),w.setSize(D.width,D.height);const W=Z.current,X=te.current;if(!W||!X)throw new Error("The calculation engine is not ready.");const re=T.geometry,ue=re.getAttribute("position"),we=re.getAttribute("color"),Se=D.frames,be=[];for(let Ze=0;Ze<Se;Ze++){D.onProgress(Math.min(45,Math.round(Ze/Se*50)));const We=D.startPercent+(D.endPercent-D.startPercent)*(Ze/Math.max(1,Se-1)),ze=sh(r,e,i,s,l,m,h,We,E,W,X,f,p);if(ue.needsUpdate=!0,we.needsUpdate=!0,E==="sequential"){const tt=Math.floor(ze*(We/100));re.setDrawRange(0,tt*2)}else re.setDrawRange(0,ze*2);w.render(R,O);const Je=w.domElement.toDataURL("image/png");be.push(Je),await new Promise(tt=>setTimeout(tt,15))}return O.aspect=S,O.updateProjectionMatrix(),w.setSize(V,Y),H(),w.render(R,O),D.onProgress(50),new Promise((Ze,We)=>{gR.createGIF({images:be,gifWidth:D.width,gifHeight:D.height,interval:D.delay/1e3,numWorkers:2,sampleInterval:8},ze=>{ze.error?We(new Error(ze.errorMsg||"GIF serialization failed.")):Ze(ze.image)})})}},[r,e,i,s,l,m,h,E,f,p]),Qe.useEffect(()=>{F.current=()=>{const D=j.current;if(!D)return"";const w=1e3,R=D.aspect||1,O=Math.round(w/R);let T="";const S=new Float32Array(U*6),V=new Float32Array(U*6),Y=sh(r,e,i,s,l,m,h,100,"sequential",S,V,f,p),W=new ce,X=new ce;for(let re=0;re<Y;re++){const ue=re*6;if(W.set(S[ue],S[ue+1],S[ue+2]),X.set(S[ue+3],S[ue+4],S[ue+5]),W.distanceToSquared(X)<1e-5)continue;W.project(D),X.project(D);const we=((W.x*.5+.5)*w).toFixed(1),Se=((1-(W.y*.5+.5))*O).toFixed(1),be=((X.x*.5+.5)*w).toFixed(1),Ze=((1-(X.y*.5+.5))*O).toFixed(1),We=Math.round(V[ue]*255),ze=Math.round(V[ue+1]*255),Je=Math.round(V[ue+2]*255),tt=`#${((1<<24)+(We<<16)+(ze<<8)+Je).toString(16).slice(1)}`;T+=`<line x1="${we}" y1="${Se}" x2="${be}" y2="${Ze}" stroke="${tt}" stroke-width="${(_*.4).toFixed(3)}" stroke-linecap="round" />
`}return`<?xml version="1.0" encoding="utf-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${O}" width="${w}" height="${O}">
  <rect width="100%" height="100%" fill="${g}" />
  <g>
${T}  </g>
</svg>`}},[r,U,m,h,_,g,f,i,s,l,e]),A.jsxs("div",{className:"relative w-full h-full select-none outline-none",children:[A.jsx("div",{ref:z,className:"w-full h-full rounded-2xl overflow-hidden shadow-2xl",id:"lsystem-canvas",style:{touchAction:"none"}}),U===0&&A.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-slate-950/70 backdrop-blur-md rounded-2xl",children:A.jsxs("div",{className:"text-center p-6 text-slate-400",children:[A.jsx("p",{className:"text-lg font-medium mb-1 text-slate-200",children:"No Segments To Render"}),A.jsx("p",{className:"text-sm",children:"Verify your rules and variable definitions."})]})})]})},_R=({expandedString:r,segmentCount:e,symbolActions:i,variables:s,defaultStepSize:l,defaultAngleDegrees:c,is3D:f,onToggle3D:p,boundingBox:m,maxPathDist:h,colorPalette:g,strokeColor:_,backgroundColor:x,strokeWidth:M,showAxes:E,onToggleAxes:U,growPercent:b,animationStyle:y="sequential",isCalculating:F=!1,isCapped:G,totalLength:z,evaluationTimeMs:K,onCenteringTriggerRef:B,onExportPngTriggerRef:j,onExportSvgTriggerRef:N,onExportGifTriggerRef:k})=>{const J=()=>{B.current&&B.current()};return A.jsxs("div",{className:"relative w-full h-full flex flex-col bg-slate-950 rounded-2xl border border-slate-800/80 overflow-hidden",id:"canvas-view-container",children:[A.jsxs("div",{className:"absolute top-4 left-4 right-4 z-10 flex flex-wrap gap-2 items-center justify-between pointer-events-none",children:[A.jsx("div",{className:"flex gap-2 pointer-events-auto",children:A.jsxs("div",{className:"px-3 py-1.5 bg-slate-900/85 backdrop-blur-md rounded-xl border border-slate-800 text-[10px] text-slate-300 flex items-center gap-2 font-mono shadow-lg shadow-slate-950/20",id:"badge-status-container",children:[A.jsx(dp,{className:`w-3.5 h-3.5 ${F?"text-purple-400 animate-spin":"text-emerald-400"}`}),F?A.jsx("span",{className:"text-purple-300 font-semibold animate-pulse",children:"Calculating..."}):A.jsxs(A.Fragment,{children:[A.jsxs("span",{children:["Lines: ",A.jsx("strong",{className:"text-emerald-400",children:e.toLocaleString()})]}),A.jsx("span",{className:"text-slate-600",children:"|"}),A.jsxs("span",{children:["Calc: ",A.jsxs("strong",{className:"text-slate-200",children:[K.toFixed(0),"ms"]})]})]}),G&&!F&&A.jsxs(A.Fragment,{children:[A.jsx("span",{className:"text-slate-600",children:"|"}),A.jsx("span",{className:"text-amber-400 font-bold px-1.5 py-0.5 bg-amber-500/10 border border-amber-500/20 rounded-md",children:"CAPPED"})]})]})}),A.jsxs("div",{className:"flex gap-1.5 pointer-events-auto",children:[A.jsx("button",{onClick:J,type:"button",title:"Auto-Center & Fit Camera View",className:"p-2.5 bg-slate-900/85 hover:bg-slate-800/90 backdrop-blur-md text-slate-200 border border-slate-800 hover:border-slate-700 rounded-xl transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer",id:"center-view-overlay-btn",children:A.jsx(w2,{className:"w-4 h-4"})}),A.jsx("button",{onClick:()=>p(!f),type:"button",title:f?"Switch to Flat 2D Mode":"Switch to Immersive 3D Orbit Mode",className:`p-2.5 backdrop-blur-md border rounded-xl transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-1.5 text-xs font-semibold ${f?"bg-indigo-500/20 text-indigo-300 border-indigo-500/40":"bg-slate-900/85 border-slate-800 text-slate-300 hover:bg-slate-800/90"}`,id:"toggle-3d-overlay-btn",children:f?A.jsxs(A.Fragment,{children:[A.jsx(ov,{className:"w-4 h-4 shrink-0"}),A.jsx("span",{className:"hidden sm:inline",children:"3D Active"})]}):A.jsxs(A.Fragment,{children:[A.jsx(hv,{className:"w-4 h-4 shrink-0"}),A.jsx("span",{className:"hidden sm:inline",children:"Flat 2D"})]})}),A.jsx("button",{onClick:()=>U(!E),type:"button",title:E?"Hide coordinate system axes":"Show coordinate system axes (RGB)",className:`p-2.5 backdrop-blur-md border rounded-xl transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer ${E?"bg-slate-900/90 text-emerald-400 border-emerald-500/40":"bg-slate-900/85 border-slate-800 text-slate-300 hover:bg-slate-800/90"}`,children:A.jsx(T2,{className:"w-4 h-4"})})]})]}),A.jsxs("div",{className:"flex-1 min-h-[400px] relative",children:[F&&A.jsx("div",{className:"absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-emerald-500 to-purple-400 animate-pulse z-20",style:{backgroundImage:"linear-gradient(90deg, #a855f7 0%, #10b981 50%, #a855f7 100%)"}}),A.jsx(xR,{expandedString:r,symbolActions:i,variables:s,defaultStepSize:l,defaultAngleDegrees:c,is3D:f,boundingBox:m,maxPathDist:h,colorPalette:g,strokeColor:_,backgroundColor:x,strokeWidth:M,showAxes:E,growPercent:b,animationStyle:y,segmentCount:e,onCenteringTriggerRef:B,onExportPngTriggerRef:j,onExportSvgTriggerRef:N,onExportGifTriggerRef:k})]}),A.jsx("div",{className:"absolute bottom-4 left-4 right-4 pointer-events-none z-10",children:A.jsxs("div",{className:"mx-auto max-w-xs px-3 py-2 bg-slate-900/85 backdrop-blur-md rounded-xl border border-slate-800 text-[10px] text-slate-400 text-center flex items-center justify-center gap-2 font-medium shadow-lg pointer-events-auto",children:[A.jsx(lv,{className:"w-3.5 h-3.5 text-slate-500 shrink-0"}),A.jsx("span",{children:f?"Drag to Rotate • Right-click (or Ctrl) + drag to Pan • Scroll to Zoom":"Drag to Pan • Scroll to Zoom (Rotation locked in 2D)"})]})})]})},vR=({strokeColor:r,onChangeStrokeColor:e,backgroundColor:i,onChangeBackgroundColor:s,colorPalette:l,onChangeColorPalette:c})=>A.jsxs("div",{className:"space-y-4",children:[A.jsxs("div",{className:"space-y-1.5 text-left",children:[A.jsx("label",{className:"text-xs font-semibold text-slate-300 block uppercase tracking-wider text-[10px]",children:"Color Art Palette"}),A.jsxs("select",{value:l,onChange:f=>c(f.target.value),className:"w-full bg-slate-900 border border-slate-800 text-slate-205 text-xs p-2.5 rounded-xl focus:outline-none focus:border-emerald-500 cursor-pointer transition-colors duration-200",children:[A.jsx("option",{value:"solid",children:"Single Solid Color"}),A.jsx("option",{value:"rainbow",children:"Dynamic Rainbow 🌈"}),A.jsx("option",{value:"forest",children:"Organic Forest 🌿"}),A.jsx("option",{value:"sunset",children:"Solar Sunset 🌅"}),A.jsx("option",{value:"depth",children:"3D Height Gradient ⇳"}),A.jsx("option",{value:"neon",children:"Radioactive Neon ⚡"})]})]}),l==="solid"&&A.jsxs("div",{className:"space-y-1.5 text-left animate-fade-in",children:[A.jsx("label",{className:"text-xs font-semibold text-slate-300 block uppercase tracking-wider text-[10px]",children:"Line Color"}),A.jsxs("div",{className:"flex gap-2",children:[A.jsx("input",{type:"color",value:r,onChange:f=>e(f.target.value),className:"w-11 h-9 rounded-xl border border-slate-700 bg-transparent p-0 cursor-pointer overflow-hidden shrink-0"}),A.jsx("input",{type:"text",value:r,onChange:f=>e(f.target.value),className:"flex-1 bg-slate-900 border border-slate-800 text-slate-200 font-mono text-xs px-3 py-2 rounded-xl focus:outline-none focus:border-emerald-500"})]})]}),A.jsxs("div",{className:"space-y-1.5 text-left",children:[A.jsx("label",{className:"text-xs font-semibold text-slate-300 block uppercase tracking-wider text-[10px]",children:"Background Canvas"}),A.jsxs("div",{className:"flex gap-2",children:[A.jsx("input",{type:"color",value:i,onChange:f=>s(f.target.value),className:"w-11 h-9 rounded-xl border border-slate-700 bg-transparent p-0 cursor-pointer overflow-hidden shrink-0"}),A.jsx("input",{type:"text",value:i,onChange:f=>s(f.target.value),className:"flex-1 bg-slate-900 border border-slate-800 text-slate-200 font-mono text-xs px-3 py-2 rounded-xl focus:outline-none focus:border-emerald-500"})]})]})]}),yR=({childrenMap:r,styleProps:e})=>{const[i,s]=Qe.useState("rules"),l=[{id:"rules",label:"Axiom & Rules",desc:"Specify production rules & alphabet grammar",icon:A.jsx(c2,{className:"w-5 h-5"}),colorClass:"group-hover:text-amber-400 text-slate-400"},{id:"presets",label:"Fractal Templates",desc:"Select classic complex fractals and space curves",icon:A.jsx(cv,{className:"w-5 h-5"}),colorClass:"group-hover:text-cyan-400 text-slate-400"},{id:"variables",label:"Variables & Morphing",desc:"Tune numerical variables and real-time animation coefficients",icon:A.jsx(G2,{className:"w-5 h-5"}),colorClass:"group-hover:text-emerald-400 text-slate-400"},{id:"actions",label:"Symbol Actions Mapping",desc:"Customize the behavior role and instructions for each symbol",icon:A.jsx(dv,{className:"w-5 h-5"}),colorClass:"group-hover:text-indigo-400 text-slate-400"},{id:"style",label:"Styling & Palettes",desc:"Customize colors, thickness, and dark environmental canvas themes",icon:A.jsx(L2,{className:"w-5 h-5"}),colorClass:"group-hover:text-pink-400 text-slate-400"},{id:"performance",label:"Performance Limits",desc:"Configure generation restrictions to fit your rendering engine constraints",icon:A.jsx(uv,{className:"w-5 h-5"}),colorClass:"group-hover:text-blue-400 text-slate-400"},{id:"animations",label:"Aesthetic Animations",desc:"Set procedural growth loops, drawing speeds, and custom playbacks",icon:A.jsx(g2,{className:"w-5 h-5"}),colorClass:"group-hover:text-orange-400 text-slate-400"},{id:"share",label:"Share, Load & Save",desc:"Generate custom sharing links or back up your definition configs",icon:A.jsx(gv,{className:"w-5 h-5"}),colorClass:"group-hover:text-teal-400 text-slate-400"},{id:"export",label:"Artwork Exporter",desc:"Prepare vector graphics or raster renders of fully completed structures",icon:A.jsx(lu,{className:"w-5 h-5"}),colorClass:"group-hover:text-rose-400 text-slate-400"}],c=l.find(p=>p.id===i)||l[0],f=()=>{switch(i){case"presets":return r.presets;case"rules":return r.rules;case"variables":return r.variables;case"actions":return r.actions;case"style":return A.jsx(vR,{...e});case"performance":return r.performance;case"animations":return r.animations;case"share":return r.share;case"export":return r.export;default:return r.rules}};return A.jsxs("div",{className:"w-full h-full flex bg-[#0c111d] border border-slate-900 rounded-2xl overflow-hidden shadow-2xl relative",children:[A.jsxs("div",{className:"w-16 shrink-0 bg-slate-950/95 border-r border-slate-900/60 flex flex-col justify-between items-center py-4 h-full relative z-10 select-none",children:[A.jsx("div",{className:"flex flex-col gap-2.5 items-center w-full",children:l.map(p=>{const m=p.id===i;return A.jsxs("div",{className:"relative group flex items-center justify-center w-full",children:[A.jsxs("button",{type:"button",onClick:()=>s(p.id),title:"",className:`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200 cursor-pointer relative ${m?"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-md shadow-emerald-500/5 font-semibold":"text-slate-500 hover:text-slate-350 hover:bg-slate-900/50"}`,children:[m&&A.jsx("span",{className:"absolute left-0 top-1/4 bottom-1/4 w-[2.5px] rounded-r bg-emerald-400"}),p.icon]}),A.jsx("div",{className:"absolute left-[66px] top-1/2 -translate-y-1/2 ml-1 px-3 py-1.5 bg-slate-950 border border-slate-800 text-slate-100 text-[11px] font-semibold rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-2xl whitespace-nowrap z-[999] pointer-events-none tracking-wide",children:p.label})]},p.id)})}),A.jsxs("div",{className:"relative group flex items-center justify-center w-full",children:[A.jsx("div",{className:"p-2 text-slate-600 hover:text-slate-400 transition-colors cursor-pointer",children:A.jsx(lv,{className:"w-4 h-4"})}),A.jsxs("div",{className:"absolute left-[66px] bottom-0 mb-1 px-3 py-2 bg-slate-950 border border-slate-800 text-slate-100 text-[9px] leading-relaxed rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-2xl w-48 z-[999] pointer-events-none text-left",children:[A.jsx("span",{className:"font-bold text-slate-300 block mb-0.5",children:"L-System Studio Helper"}),"Select modular parameter tabs vertically. Zero redundant layout scrolls!"]})]})]}),A.jsxs("div",{className:"flex-grow flex flex-col h-full min-w-0 bg-[#070b13]/60 relative",children:[A.jsxs("div",{className:"p-4 bg-slate-950/80 border-b border-slate-900/60 shrink-0 text-left",children:[A.jsx("h3",{className:"font-bold text-xs text-slate-100 uppercase tracking-widest text-emerald-400 block mb-0.5",children:c.label}),A.jsx("p",{className:"text-[11px] text-slate-400 leading-relaxed max-w-full truncate",children:c.desc})]}),A.jsx("div",{className:"flex-1 overflow-y-auto p-4 space-y-4",children:A.jsx("div",{className:"animate-fade-in duration-300",children:f()})})]})]})};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function SR(r){return new Promise(e=>{setTimeout(()=>{try{const i=performance.now(),s=y_(r.axiom,r.rules,r.iterations,r.maxOutputLimit),l=sv(s.expandedString,r.symbolActions,r.varMap,r.stepSize,r.angle),c=performance.now()-i;e({success:!0,expandedString:s.expandedString,isCapped:s.isCapped,totalLength:s.totalLength,segmentCount:l.segmentCount,is3D:l.is3D,boundingBox:l.boundingBox,maxPathDist:l.maxPathDist,evalTimeMs:c})}catch(i){e({success:!1,expandedString:"",isCapped:!1,totalLength:0,segmentCount:0,is3D:!1,boundingBox:{min:{x:0,y:0,z:0},max:{x:0,y:0,z:0}},maxPathDist:0,evalTimeMs:0,error:i.message||String(i)})}},0)})}const v_="lsystem_explorer_active_space";function bR(){const[r,e]=Qe.useState(()=>{const S=window.location.hash;if(S.startsWith("#share=")){const Y=S.substring(7),W=m_(Y);if(W)return{...yi[0],...W,presetId:W.presetId||yi[0].id,lastLoadedPresetId:W.presetId||yi[0].id,id:`shared_${Date.now()}`}}try{const Y=localStorage.getItem(v_);if(Y){const W=JSON.parse(Y);return{...W,presetId:W.presetId||yi[0].id,lastLoadedPresetId:W.lastLoadedPresetId||W.presetId||yi[0].id}}}catch{}const V=yi[0];return{...V,presetId:V.id,lastLoadedPresetId:V.id}}),[i,s]=Qe.useState(r.renderSettings.growPercent||100),[l,c]=Qe.useState(!1),[f,p]=Qe.useState("sequential"),m=Qe.useRef(r);Qe.useEffect(()=>{m.current=r},[r]);const[h,g]=Qe.useState(0),[_,x]=Qe.useState(()=>{try{const S=localStorage.getItem("lsystem_max_output_limit");return S==="Infinity"?1/0:S?Number(S):1e6}catch{return 1e6}});Qe.useEffect(()=>{localStorage.setItem("lsystem_max_output_limit",_.toString())},[_]);const[M,E]=Qe.useState(r.renderSettings.showAxes||!1),U=Qe.useRef(null),b=Qe.useRef(null),y=Qe.useRef(null),F=Qe.useRef;Qe.useEffect(()=>{try{localStorage.setItem(v_,JSON.stringify(r))}catch{}},[r]),Qe.useEffect(()=>{const S=()=>{const V=window.location.hash;if(V.startsWith("#share=")){const Y=m_(V.substring(7));Y&&e(W=>({...W,...Y,presetId:Y.presetId||W.presetId,id:`shared_${Date.now()}`}))}};return window.addEventListener("hashchange",S),()=>window.removeEventListener("hashchange",S)},[]);const G=r.variables.some(S=>S.animate);Qe.useEffect(()=>{if(!(l||m.current.variables.some(X=>X.animate)))return;let V=performance.now(),Y;const W=X=>{const re=Math.min((X-V)/1e3,.1);V=X,l&&s(we=>{const Se=we+re*18;return Se>=100?0:Se}),m.current.variables.some(we=>we.animate)&&e(we=>{const Se=we.variables.map(be=>{if(!be.animate)return be;const Ze=be.animationSpeed||5,We=be.animationDirection||1;let ze=be.value+We*Ze*re,Je=We;return be.animationType==="ping-pong"?ze>=be.max?(ze=be.max,Je=-1):ze<=be.min&&(ze=be.min,Je=1):be.animationType==="loop"?ze>=be.max?ze=be.min:ze<=be.min&&(ze=be.max):be.animationType==="one-way"&&ze>=be.max&&(ze=be.max,be.animate=!1),{...be,value:ze,animationDirection:Je}});return{...we,variables:Se}}),Y=requestAnimationFrame(W)};return Y=requestAnimationFrame(W),()=>cancelAnimationFrame(Y)},[l,G]);const z=Qe.useMemo(()=>{const S={};for(const V of r.variables)S[V.name]=V.value;return S},[r.variables]),K=Qe.useMemo(()=>{if(typeof r.iterations=="number")return r.iterations;const S=Ys(r.iterations,z);return isNaN(S)?1:Math.max(0,Math.floor(S))},[r.iterations,z]),[B,j]=Qe.useState(()=>{const S={};for(const W of r.variables)S[W.name]=W.value;const V=y_(r.axiom,r.rules,3,5e4),Y=sv(V.expandedString,r.symbolActions,S,r.renderSettings.stepSize,r.renderSettings.angle);return{expandedString:V.expandedString,isCapped:V.isCapped,totalLength:V.totalLength,segmentCount:Y.segmentCount,is3D:Y.is3D,boundingBox:Y.boundingBox,maxPathDist:Y.maxPathDist}}),[N,k]=Qe.useState(!1);Qe.useEffect(()=>{let S=!0;return k(!0),SR({axiom:r.axiom,rules:r.rules,iterations:K,maxOutputLimit:_,symbolActions:r.symbolActions,varMap:z,stepSize:r.renderSettings.stepSize,angle:r.renderSettings.angle}).then(V=>{S&&(k(!1),V.success&&(j({expandedString:V.expandedString,isCapped:V.isCapped,totalLength:V.totalLength,segmentCount:V.segmentCount,is3D:V.is3D,boundingBox:V.boundingBox,maxPathDist:V.maxPathDist}),g(V.evalTimeMs)))}),()=>{S=!1}},[r.axiom,r.rules,K,_,r.symbolActions,z,r.renderSettings.stepSize,r.renderSettings.angle]);const J=S=>{c(!1),s(100),e({...S,presetId:S.id,lastLoadedPresetId:S.id,id:`preset_${Date.now()}`})},Z=S=>{e(V=>{const Y=V.presetId&&V.presetId!=="custom"?V.presetId:V.lastLoadedPresetId;return{...V,axiom:S,presetId:"custom",lastLoadedPresetId:Y}})},te=S=>{e(V=>{const Y=V.presetId&&V.presetId!=="custom"?V.presetId:V.lastLoadedPresetId;return{...V,iterations:S,presetId:"custom",lastLoadedPresetId:Y}})},_e=S=>{e(V=>{const Y=V.presetId&&V.presetId!=="custom"?V.presetId:V.lastLoadedPresetId;return{...V,rules:S,presetId:"custom",lastLoadedPresetId:Y}})},ae=S=>{e(V=>{const Y=V.presetId&&V.presetId!=="custom"?V.presetId:V.lastLoadedPresetId;return{...V,symbolActions:S,presetId:"custom",lastLoadedPresetId:Y}})},q=S=>{e(V=>({...V,variables:S}))},H=(S,V)=>{e(Y=>({...Y,renderSettings:{...Y.renderSettings,[S]:V}}))},D=S=>b.current?b.current(S):"",w=()=>y.current?y.current():"",R=async S=>{if(F.current)return await F.current(S);throw new Error("Render engine is not ready for GIF export.")},O=r.presetId||r.id,T={presets:A.jsx("div",{className:"bg-slate-900/30 p-2 rounded-xl",children:A.jsx(X2,{activePresetId:O,onSelectPreset:J,definition:r})}),rules:A.jsx(q2,{axiom:r.axiom,onChangeAxiom:Z,iterations:r.iterations,onChangeIterations:te,rules:r.rules,onChangeRules:_e,availableVariables:r.variables.map(S=>S.name),isCapped:B.isCapped}),actions:A.jsx(Y2,{symbolActions:r.symbolActions,onChangeSymbolActions:ae,availableVariables:r.variables.map(S=>S.name)}),variables:A.jsx(Z2,{variables:r.variables,onChangeVariables:q}),animations:A.jsx(K2,{growPercent:i,onChangeGrowPercent:s,isGrowing:l,onToggleGrowing:()=>c(!l),animationStyle:f,onChangeAnimationStyle:p}),share:A.jsx($2,{currentLSystem:r,onLoadSystem:J}),performance:A.jsxs("div",{className:"space-y-4",children:[A.jsx("p",{className:"text-[11px] text-slate-400 leading-relaxed text-left",children:"Configure the maximum string length for optimal performance. High-complexity fractals are evaluated on the main thread using optimized zero-allocation geometry loops!"}),A.jsxs("div",{className:"space-y-2 text-left",children:[A.jsxs("label",{className:"text-xs font-semibold text-slate-350 flex items-center gap-1.5",children:[A.jsx(uv,{className:"w-3.5 h-3.5 text-purple-400"}),A.jsx("span",{children:"Maximum Output Limit:"})]}),A.jsx("div",{className:"grid grid-cols-2 gap-1.5",children:[{label:"Fast (50K)",value:5e4},{label:"Standard (250K)",value:25e4},{label:"High (1M)",value:1e6},{label:"Max (10M)",value:1e7}].map(S=>A.jsx("button",{type:"button",onClick:()=>x(S.value),className:`py-1.5 px-2 rounded-xl text-center text-xs font-medium border transition-all cursor-pointer ${_===S.value?"bg-purple-500/10 text-purple-300 border-purple-500/50 shadow-md shadow-purple-500/5":"bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-900/100"}`,children:S.label},S.value))}),A.jsx("button",{type:"button",onClick:()=>x(1/0),className:`w-full py-2.5 px-3 mt-1.5 rounded-xl text-center text-xs font-bold border transition-all cursor-pointer ${_===1/0?"bg-gradient-to-r from-emerald-500/20 to-purple-500/20 text-emerald-300 border-emerald-500/40 shadow-lg shadow-emerald-500/5":"bg-slate-950 text-slate-400 border-slate-800 hover:bg-slate-900"}`,children:"🔥 No Limit (Infinity)"})]}),A.jsxs("div",{className:"p-3 bg-slate-900/40 border border-slate-800/80 rounded-xl space-y-1.5 text-left",children:[A.jsx("span",{className:"text-[10px] text-slate-400 block font-semibold uppercase tracking-wider",children:"Engine Status (Direct evaluation)"}),A.jsxs("div",{className:"flex justify-between text-xs text-slate-350 font-mono",children:[A.jsx("span",{children:"String Output Length:"}),A.jsxs("span",{className:B.isCapped?"text-amber-400 font-bold":"text-emerald-400",children:[B.totalLength.toLocaleString()," ",B.isCapped?"(Capped)":""]})]}),A.jsxs("div",{className:"flex justify-between text-xs text-slate-350 font-mono",children:[A.jsx("span",{children:"L-System Eval Time:"}),A.jsxs("span",{className:"text-slate-200",children:[h.toFixed(1),"ms"]})]})]})]}),export:A.jsx(Q2,{onExportPng:D,onExportSvg:w,onExportGif:R})};return A.jsxs("div",{className:"w-screen min-h-screen bg-[#070b13] text-slate-100 flex flex-col font-sans select-none antialiased overflow-x-hidden md:overflow-y-hidden md:h-screen transition-colors duration-500",children:[A.jsxs("header",{className:"h-16 px-6 bg-[#070b13]/80 backdrop-blur-md border-b border-slate-900/60 flex items-center justify-between shrink-0",children:[A.jsxs("div",{className:"flex items-center gap-3",children:[A.jsx("div",{className:"p-2 bg-purple-500/10 text-purple-400 rounded-xl border border-purple-500/20",children:A.jsx(fv,{className:"w-5 h-5 animate-pulse",id:"header-brand-icon"})}),A.jsxs("div",{children:[A.jsx("h1",{className:"text-base font-bold tracking-tight text-white leading-none",children:"L-System Studio"}),A.jsx("span",{className:"text-[10px] text-slate-500 font-mono mt-0.5 block",children:"v1.4 • High Performance Engine"})]})]}),A.jsx("div",{className:"hidden md:flex items-center gap-4 text-xs text-slate-400",children:A.jsxs("div",{className:"flex items-center gap-1.5 bg-slate-900/40 px-3 py-1.5 rounded-lg border border-slate-800/60",children:[A.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse"}),A.jsx("span",{className:"text-[10px] font-mono",children:"Real-time Direct Engine Active"})]})})]}),A.jsxs("main",{className:"flex-grow flex flex-col md:flex-row p-4 md:p-5 gap-4 overflow-hidden h-[calc(100vh-64px)] w-full",children:[A.jsx("aside",{className:"w-full md:w-[450px] lg:w-[480px] shrink-0 h-full flex flex-col overflow-hidden",children:A.jsx(yR,{childrenMap:T,styleProps:{strokeColor:r.renderSettings.strokeColor,onChangeStrokeColor:S=>H("strokeColor",S),backgroundColor:r.renderSettings.backgroundColor,onChangeBackgroundColor:S=>H("backgroundColor",S),strokeWidth:r.renderSettings.strokeWidth,onChangeStrokeWidth:S=>H("strokeWidth",S),colorPalette:r.renderSettings.colorPalette,onChangeColorPalette:S=>H("colorPalette",S)}})}),A.jsx("section",{className:"flex-grow h-full min-h-[500px] md:h-full relative overflow-hidden",children:A.jsx(_R,{expandedString:B.expandedString,segmentCount:B.segmentCount,symbolActions:r.symbolActions,variables:z,defaultStepSize:r.renderSettings.stepSize,defaultAngleDegrees:r.renderSettings.angle,is3D:B.is3D,onToggle3D:S=>H("is3D",S),boundingBox:B.boundingBox,maxPathDist:B.maxPathDist,colorPalette:r.renderSettings.colorPalette,strokeColor:r.renderSettings.strokeColor,backgroundColor:r.renderSettings.backgroundColor,strokeWidth:r.renderSettings.strokeWidth,showAxes:M,onToggleAxes:E,growPercent:i,animationStyle:f,isCapped:B.isCapped,totalLength:B.totalLength,evaluationTimeMs:h,isCalculating:N,onCenteringTriggerRef:U,onExportPngTriggerRef:b,onExportSvgTriggerRef:y,onExportGifTriggerRef:F})})]})]})}DS.createRoot(document.getElementById("root")).render(A.jsx(Qe.StrictMode,{children:A.jsx(bR,{})}));
