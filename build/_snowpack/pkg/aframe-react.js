import{c as Te}from"./common/_commonjsHelpers-913f9c4a.js";import{k as b,l as d,y as m,_ as C,P as y,B as k,D as je,E as Fe,F as H,d as z}from"./common/preact.module-0b077bcf.js";import{y as w,h as A,p as D,V as q,s as Y,_ as Z,A as G,F as J,T as K,q as Q,x as X,P as Ie}from"./common/hooks.module-ab395af0.js";function ee(e,t){for(var n in t)e[n]=t[n];return e}function L(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return!0;return!1}function T(e,t){return e===t&&(e!==0||1/e==1/t)||e!=e&&t!=t}function U(e){this.props=e}function te(e,t){function n(u){var c=this.props.ref,l=c==u.ref;return!l&&c&&(c.call?c(null):c.current=null),t?!t(this.props,u)||!l:L(this.props,u)}function r(u){return this.shouldComponentUpdate=n,m(e,u)}return r.displayName="Memo("+(e.displayName||e.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(U.prototype=new b).isPureReactComponent=!0,U.prototype.shouldComponentUpdate=function(e,t){return L(this.props,e)||L(this.state,t)};var ne=d.__b;d.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),ne&&ne(e)};var Me=typeof Symbol!="undefined"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function re(e){function t(n){var r=ee({},n);return delete r.ref,e(r,n.ref||null)}return t.$$typeof=Me,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var oe=function(e,t){return e==null?null:y(y(e).map(t))},ie={map:oe,forEach:oe,count:function(e){return e?y(e).length:0},only:function(e){var t=y(e);if(t.length!==1)throw"Children.only";return t[0]},toArray:y},Ve=d.__e;d.__e=function(e,t,n,r){if(e.then){for(var u,c=t;c=c.__;)if((u=c.__c)&&u.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),u.__c(e,t)}Ve(e,t,n,r)};var ue=d.unmount;function ae(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),e.__c.__H=null),(e=ee({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(r){return ae(r,t,n)})),e}function ce(e,t,n){return e&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(r){return ce(r,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.insertBefore(e.__e,e.__d),e.__c.__e=!0,e.__c.__P=n)),e}function R(){this.__u=0,this.t=null,this.__b=null}function fe(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function le(e){var t,n,r;function u(c){if(t||(t=e()).then(function(l){n=l.default||l},function(l){r=l}),r)throw r;if(!n)throw t;return m(n,c)}return u.displayName="Lazy",u.__f=!0,u}function S(){this.u=null,this.o=null}d.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),ue&&ue(e)},(R.prototype=new b).__c=function(e,t){var n=t.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var u=fe(r.__v),c=!1,l=function(){c||(c=!0,n.__R=null,u?u(s):s())};n.__R=l;var s=function(){if(!--r.__u){if(r.state.__a){var O=r.state.__a;r.__v.__k[0]=ce(O,O.__c.__P,O.__c.__O)}var g;for(r.setState({__a:r.__b=null});g=r.t.pop();)g.forceUpdate()}},v=t.__h===!0;r.__u++||v||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(l,l)},R.prototype.componentWillUnmount=function(){this.t=[]},R.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=ae(this.__b,n,r.__O=r.__P)}this.__b=null}var u=t.__a&&m(C,null,e.fallback);return u&&(u.__h=null),[m(C,null,t.__a?null:e.children),u]};var _e=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};function We(e){return this.getChildContext=function(){return e.context},e.children}function Be(e){var t=this,n=e.i;t.componentWillUnmount=function(){k(null,t.l),t.l=null,t.i=null},t.i&&t.i!==n&&t.componentWillUnmount(),e.__v?(t.l||(t.i=n,t.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(r){this.childNodes.push(r),t.i.appendChild(r)},insertBefore:function(r,u){this.childNodes.push(r),t.i.appendChild(r)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),t.i.removeChild(r)}}),k(m(We,{context:t.context},e.__v),t.l)):t.l&&t.componentWillUnmount()}function se(e,t){var n=m(Be,{__v:e,i:t});return n.containerInfo=t,n}(S.prototype=new b).__a=function(e){var t=this,n=fe(t.__v),r=t.o.get(e);return r[0]++,function(u){var c=function(){t.props.revealOrder?(r.push(u),_e(t,e,r)):u()};n?n(c):c()}},S.prototype.render=function(e){this.u=null,this.o=new Map;var t=y(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},S.prototype.componentDidUpdate=S.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){_e(e,n,t)})};var pe=typeof Symbol!="undefined"&&Symbol.for&&Symbol.for("react.element")||60103,He=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,ze=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,qe=/[A-Z0-9]/g,Ye=typeof document!="undefined",Ze=function(e){return(typeof Symbol!="undefined"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};function de(e,t,n){return t.__k==null&&(t.textContent=""),k(e,t),typeof n=="function"&&n(),e?e.__c:null}function ve(e,t,n){return je(e,t),typeof n=="function"&&n(),e?e.__c:null}b.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(b.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var me=d.event;function Ge(){}function Je(){return this.cancelBubble}function Ke(){return this.defaultPrevented}d.event=function(e){return me&&(e=me(e)),e.persist=Ge,e.isPropagationStopped=Je,e.isDefaultPrevented=Ke,e.nativeEvent=e};var j,Qe={enumerable:!1,configurable:!0,get:function(){return this.class}},he=d.vnode;d.vnode=function(e){typeof e.type=="string"&&function(t){var n=t.props,r=t.type,u={};for(var c in n){var l=n[c];if(!(c==="value"&&"defaultValue"in n&&l==null||Ye&&c==="children"&&r==="noscript"||c==="class"||c==="className")){var s=c.toLowerCase();c==="defaultValue"&&"value"in n&&n.value==null?c="value":c==="download"&&l===!0?l="":s==="ondoubleclick"?c="ondblclick":s!=="onchange"||r!=="input"&&r!=="textarea"||Ze(n.type)?s==="onfocus"?c="onfocusin":s==="onblur"?c="onfocusout":ze.test(c)?c=s:r.indexOf("-")===-1&&He.test(c)?c=c.replace(qe,"-$&").toLowerCase():l===null&&(l=void 0):s=c="oninput",s==="oninput"&&u[c=s]&&(c="oninputCapture"),u[c]=l}}r=="select"&&u.multiple&&Array.isArray(u.value)&&(u.value=y(n.children).forEach(function(v){v.props.selected=u.value.indexOf(v.props.value)!=-1})),r=="select"&&u.defaultValue!=null&&(u.value=y(n.children).forEach(function(v){v.props.selected=u.multiple?u.defaultValue.indexOf(v.props.value)!=-1:u.defaultValue==v.props.value})),n.class&&!n.className?(u.class=n.class,Object.defineProperty(u,"className",Qe)):(n.className&&!n.class||n.class&&n.className)&&(u.class=u.className=n.className),t.props=u}(e),e.$$typeof=pe,he&&he(e)};var ye=d.__r;d.__r=function(e){ye&&ye(e),j=e.__c};var be=d.diffed;d.diffed=function(e){be&&be(e);var t=e.props,n=e.__e;n!=null&&e.type==="textarea"&&"value"in t&&t.value!==n.value&&(n.value=t.value==null?"":t.value),j=null};var Ee={ReactCurrentDispatcher:{current:{readContext:function(e){return j.__n[e.__c].props.value}}}},Xe="17.0.2";function Se(e){return m.bind(null,e)}function F(e){return!!e&&e.$$typeof===pe}function Oe(e){return F(e)?Fe.apply(null,arguments):e}function ge(e){return!!e.__k&&(k(null,e),!0)}function Ne(e){return e&&(e.base||e.nodeType===1&&e)||null}var Ce=function(e,t){return e(t)},Re=function(e,t){return e(t)},Pe=C;function I(e){e()}function ke(e){return e}function we(){return[!1,I]}var Ue=w;function xe(e,t){var n=t(),r=A({h:{__:n,v:t}}),u=r[0].h,c=r[1];return w(function(){u.__=n,u.v=t,T(u.__,t())||c({h:u})},[e,n,t]),D(function(){return T(u.__,u.v())||c({h:u}),e(function(){T(u.__,u.v())||c({h:u})})},[e]),n}var et={useState:A,useId:q,useReducer:Y,useEffect:D,useLayoutEffect:w,useInsertionEffect:Ue,useTransition:we,useDeferredValue:ke,useSyncExternalStore:xe,startTransition:I,useRef:Z,useImperativeHandle:G,useMemo:J,useCallback:K,useContext:Q,useDebugValue:X,version:"17.0.2",Children:ie,render:de,hydrate:ve,unmountComponentAtNode:ge,createPortal:se,createElement:m,createContext:H,createFactory:Se,cloneElement:Oe,createRef:z,Fragment:C,isValidElement:F,findDOMNode:Ne,Component:b,PureComponent:U,memo:te,forwardRef:re,flushSync:Re,unstable_batchedUpdates:Ce,StrictMode:Pe,Suspense:R,SuspenseList:S,lazy:le,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Ee},tt=Object.freeze({__proto__:null,Children:ie,PureComponent:U,StrictMode:Pe,Suspense:R,SuspenseList:S,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Ee,cloneElement:Oe,createFactory:Se,createPortal:se,default:et,findDOMNode:Ne,flushSync:Re,forwardRef:re,hydrate:ve,isValidElement:F,lazy:le,memo:te,render:de,startTransition:I,unmountComponentAtNode:ge,unstable_batchedUpdates:Ce,useDeferredValue:ke,useInsertionEffect:Ue,useSyncExternalStore:xe,useTransition:we,version:Xe,Component:b,Fragment:C,createContext:H,createElement:m,createRef:z,useCallback:K,useContext:Q,useDebugValue:X,useEffect:D,useErrorBoundary:Ie,useId:q,useImperativeHandle:G,useLayoutEffect:w,useMemo:J,useReducer:Y,useRef:Z,useState:A}),$e=Te(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Scene=t.Entity=t.options=void 0;var n=Object.assign||function(f){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(f[i]=a[i])}return f},r=function(){function f(o,a){for(var i=0;i<a.length;i++){var _=a[i];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(o,_.key,_)}}return function(o,a,i){return a&&f(o.prototype,a),i&&f(o,i),o}}(),u=c(tt);function c(f){return f&&f.__esModule?f:{default:f}}function l(f,o){if(!(f instanceof o))throw new TypeError("Cannot call a class as a function")}function s(f,o){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o&&(typeof o=="object"||typeof o=="function")?o:f}function v(f,o){if(typeof o!="function"&&o!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof o);f.prototype=Object.create(o&&o.prototype,{constructor:{value:f,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(f,o):f.__proto__=o)}var O=["children","events","primitive"],g=function(o){return O.indexOf(o)===-1},M={runSetAttributeOnUpdates:!0};t.options=M;function Ae(f,o,a){if(a==="className")f.setAttribute("class",o.className);else{if(o[a]&&o[a].constructor===Function)return;f.setAttribute(a,o[a])}}function V(f,o,a){var i;if(!(!a||o===a)){for(i in a)!g(i)||Ae(f,a,i);if(o)for(i in o)!g(i)||a[i]===void 0&&f.removeAttribute(i)}}var De=t.Entity=function(f){v(o,f);function o(){var a,i,_,p;l(this,o);for(var h=arguments.length,B=Array(h),P=0;P<h;P++)B[P]=arguments[P];return p=(i=(_=s(this,(a=o.__proto__||Object.getPrototypeOf(o)).call.apply(a,[this].concat(B))),_),_.initEntity=function(N){var E=_.props,$;if(!!N){if(_.el=N,E.events)for($ in E.events)W(N,$,E.events[$]);V(N,null,E),E._ref&&E._ref(N)}},i),s(_,p)}return r(o,[{key:"componentDidUpdate",value:function(i,_){var p=this.el,h=this.props;Le(p,i.events,h.events),M.runSetAttributeOnUpdates&&V(p,i,h)}},{key:"componentWillUnmount",value:function(){var i=this.el,_=this.props,p;if(_.events)for(p in _.events)x(i,p,_.events[p])}},{key:"render",value:function(){var i=this.props,_=this.isScene?"a-scene":i.primitive||"a-entity",p,h={};for(p in i)(["className","id","mixin"].indexOf(p)!==-1||p.indexOf("data-")===0)&&(h[p]=i[p]);return u.default.createElement(_,n({ref:this.initEntity},h),i.children)}}]),o}(u.default.Component),ot=t.Scene=function(f){v(o,f);function o(a){l(this,o);var i=s(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,a));return i.isScene=!0,i}return o}(De);function Le(f,o,a){var i;if(!(!o||!a||o===a)){for(i in a)o[i]!==a[i]&&(o[i]&&x(f,i,o[i]),W(f,i,a[i]));for(i in o)a[i]||x(f,i,o[i])}}function W(f,o,a){var i;if(!!a)for(a.constructor===Function&&(a=[a]),i=0;i<a.length;i++)f.addEventListener(o,a[i])}function x(f,o,a){var i;if(!!a)for(a.constructor===Function&&(a=[a]),i=0;i<a.length;i++)f.removeEventListener(o,a[i])}}),nt=$e.Entity,rt=$e.Scene;export{nt as Entity,rt as Scene};