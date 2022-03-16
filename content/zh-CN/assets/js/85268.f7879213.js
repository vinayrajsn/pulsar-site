/*! For license information please see 85268.f7879213.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[85268],{52924:function(e,t,n){n.d(t,{Z:function(){return b}});var o=n(87462),r=n(63366),u=n(67294),l=n(86010),i=n(5922),c=n(27192),a=n(28979);function s(e){return(0,a.Z)("TabPanelUnstyled",e)}(0,n(76087).Z)("TabPanelUnstyled",["root","hidden"]);var d=n(12474);var f=e=>{const{value:t}=e,n=(0,d._i)();if(null===n)throw new Error("No TabContext provided");const o=t!==n.value,r=(0,d.uU)(n,t),u=(0,d.pQ)(n,t);return{hidden:o,getRootProps:()=>({"aria-labelledby":u,hidden:o,id:r})}},p=n(85893);const v=["children","className","value","components","componentsProps","component"];var b=u.forwardRef((function(e,t){var n,u;const{children:a,className:d,components:b={},componentsProps:m={},component:Z}=e,y=(0,r.Z)(e,v),{hidden:h,getRootProps:g}=f(e),w=(0,o.Z)({},e,{hidden:h}),P=(e=>{const{hidden:t}=e,n={root:["root",t&&"hidden"]};return(0,c.Z)(n,s,{})})(w),C=null!=(n=null!=Z?Z:b.Root)?n:"div",R=(0,i.Z)(C,(0,o.Z)({},y,m.root),w);return(0,p.jsx)(C,(0,o.Z)({},g(),{ref:t,role:"tabpanel"},R,{className:(0,l.Z)(P.root,null==(u=m.root)?void 0:u.className,d),children:!h&&a}))}))},59622:function(e,t,n){n.d(t,{Z:function(){return g}});var o=n(87462),r=n(63366),u=n(67294),l=n(86010),i=n(30067),c=n(27192),a=n(5922),s=n(28979);function d(e){return(0,s.Z)("TabUnstyled",e)}(0,n(76087).Z)("TabUnstyled",["root","selected","disabled"]);var f=n(12474),p=n(99962),v=n(7960),b=n(30437);const m=["getRootProps"];var Z=e=>{const{value:t,onChange:n,onClick:l,onFocus:c}=e,a=function(e){var t;const{component:n,components:r={},disabled:l=!1,href:c,ref:a,tabIndex:s=0,to:d,type:f}=e,m=u.useRef(),[Z,y]=u.useState(!1),{isFocusVisibleRef:h,onFocus:g,onBlur:w,ref:P}=(0,p.Z)(),[C,R]=u.useState(!1);l&&C&&R(!1),u.useEffect((()=>{h.current=C}),[C,h]);const x=e=>t=>{var n;C&&t.preventDefault(),null==(n=e.onMouseLeave)||n.call(e,t)},E=e=>t=>{var n;w(t),!1===h.current&&R(!1),null==(n=e.onBlur)||n.call(e,t)},k=e=>t=>{var n,o;m.current||(m.current=t.currentTarget),g(t),!0===h.current&&(R(!0),null==(o=e.onFocusVisible)||o.call(e,t)),null==(n=e.onFocus)||n.call(e,t)},T=null!=(t=null!=n?n:r.Root)?t:"button",$=()=>{const e=m.current;return"button"!==T&&!("A"===(null==e?void 0:e.tagName)&&null!=e&&e.href)},F=e=>t=>{var n;t.target!==t.currentTarget||l||y(!0),null==(n=e.onMouseDown)||n.call(e,t)},S=e=>t=>{var n;t.target===t.currentTarget&&y(!1),null==(n=e.onMouseUp)||n.call(e,t)},_=e=>t=>{var n,o;t.target===t.currentTarget&&$()&&" "===t.key&&t.preventDefault(),t.target!==t.currentTarget||" "!==t.key||l||y(!0),null==(n=e.onKeyDown)||n.call(e,t),t.target===t.currentTarget&&$()&&"Enter"===t.key&&!l&&(t.preventDefault(),null==(o=e.onClick)||o.call(e,t))},N=e=>t=>{var n,o;t.target===t.currentTarget&&y(!1),null==(n=e.onKeyUp)||n.call(e,t),t.target===t.currentTarget&&$()&&" "===t.key&&!t.defaultPrevented&&(null==(o=e.onClick)||o.call(e,t))},M=(0,i.Z)(P,m),U=(0,i.Z)(a,M),[D,V]=u.useState(""),L=e=>{var t;V(null!=(t=null==e?void 0:e.tagName)?t:""),(0,v.Z)(U,e)},A={};return"BUTTON"===D?(A.type=null!=f?f:"button",A.disabled=l):""!==D&&(c||d||(A.role="button"),l&&(A["aria-disabled"]=l)),{getRootProps:t=>{const n=(0,b.Z)(e),r=(0,o.Z)({},n,t),u={onBlur:E(r),onFocus:k(r),onKeyDown:_(r),onKeyUp:N(r),onMouseDown:F(r),onMouseLeave:x(r),onMouseUp:S(r)},i=(0,o.Z)({},r,u);return delete i.onFocusVisible,(0,o.Z)({tabIndex:l?-1:s,type:f,ref:L},A,i)},focusVisible:C,setFocusVisible:R,disabled:l,active:Z}}(e),{getRootProps:s}=a,d=(0,r.Z)(a,m),Z=(0,f._i)();if(null===Z)throw new Error("No TabContext provided");const y=null!=t?t:0,h=Z.value===y,g=Z.selectionFollowsFocus,w={role:"tab","aria-controls":(0,f.uU)(Z,y),id:(0,f.pQ)(Z,y),"aria-selected":h,disabled:d.disabled},P=e=>{g&&!h&&(n&&n(e,y),Z.onSelected(e,y)),c&&c(e)},C=e=>{h||(n&&n(e,y),Z.onSelected(e,y)),l&&l(e)};return(0,o.Z)({getRootProps:e=>{const t=s((0,o.Z)({onClick:C,onFocus:P},e));return(0,o.Z)({},t,w)}},d,{selected:h})},y=n(85893);const h=["action","children","value","className","disabled","onChange","onClick","onFocus","component","components","componentsProps"];var g=u.forwardRef((function(e,t){var n,s;const{action:f,children:p,className:v,disabled:b=!1,component:m,components:g={},componentsProps:w={}}=e,P=(0,r.Z)(e,h),C=u.useRef(),R=(0,i.Z)(C,t),{active:x,focusVisible:E,setFocusVisible:k,selected:T,getRootProps:$}=Z((0,o.Z)({},e,{ref:R}));u.useImperativeHandle(f,(()=>({focusVisible:()=>{k(!0),C.current.focus()}})),[k]);const F=(0,o.Z)({},e,{active:x,focusVisible:E,disabled:b,selected:T}),S=(e=>{const{selected:t,disabled:n}=e,o={root:["root",t&&"selected",n&&"disabled"]};return(0,c.Z)(o,d,{})})(F),_=null!=(n=null!=m?m:g.Root)?n:"button",N=(0,a.Z)(_,(0,o.Z)({},P,w.root),F);return(0,y.jsx)(_,(0,o.Z)({},$(),N,{className:(0,l.Z)(S.root,null==(s=w.root)?void 0:s.className,v),ref:t,children:p}))}))},37934:function(e,t,n){n.d(t,{Z:function(){return w}});var o=n(87462),r=n(63366),u=n(67294),l=n(86010),i=n(27192),c=n(5922),a=n(28979);function s(e){return(0,a.Z)("TabsListUnstyled",e)}(0,n(76087).Z)("TabsListUnstyled",["root","horizontal","vertical"]);var d=n(30067),f=n(57094),p=(n(59864),n(12474)),v=n(30437);const b=(e,t)=>e?e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:e.firstChild:null,m=(e,t)=>e?e===t?e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:e.lastChild:null,Z=(e,t,n)=>{let o=!1,r=n(e,t);for(;e&&r;){if(r===e.firstChild){if(o)return;o=!0}const t=r.disabled||"true"===r.getAttribute("aria-disabled");if(r.hasAttribute("tabindex")&&!t)return void r.focus();r=n(e,r)}};var y=e=>{const{"aria-label":t,"aria-labelledby":n,children:r,ref:l}=e,i=u.createRef(),c=(0,d.Z)(i,l),a=(0,p._i)();if(null===a)throw new Error("No TabContext provided");const{value:s,orientation:y="horizontal",direction:h="ltr"}=a,g="rtl"===h,w=e=>t=>{var n;(e=>{const t=i.current,n=(0,f.Z)(t).activeElement;if("tab"!==(null==n?void 0:n.getAttribute("role")))return;let o="horizontal"===y?"ArrowLeft":"ArrowUp",r="horizontal"===y?"ArrowRight":"ArrowDown";switch("horizontal"===y&&g&&(o="ArrowRight",r="ArrowLeft"),e.key){case o:e.preventDefault(),Z(t,n,m);break;case r:e.preventDefault(),Z(t,n,b);break;case"Home":e.preventDefault(),Z(t,null,b);break;case"End":e.preventDefault(),Z(t,null,m)}})(t),null==(n=e.onKeyDown)||n.call(e,t)},P=u.useCallback((()=>{const e=new Map;let t=0;return u.Children.map(r,(n=>{if(!u.isValidElement(n))return null;const r=void 0===n.props.value?t:n.props.value;return e.set(r,t),t+=1,u.cloneElement(n,(0,o.Z)({value:r},1===t&&!1===s&&!n.props.tabIndex||s===r?{tabIndex:0}:{tabIndex:-1}))}))}),[r,s]);return{isRtl:g,orientation:y,value:s,processChildren:P,getRootProps:r=>{const u=(0,v.Z)(e),l=(0,o.Z)({},u,r),i={onKeyDown:w(l)},a=(0,o.Z)({},l,i);return(0,o.Z)({"aria-label":t,"aria-labelledby":n,"aria-orientation":"vertical"===y?"vertical":null,role:"tablist",ref:c},a)}}},h=n(85893);const g=["className","children","component","components","componentsProps"];var w=u.forwardRef(((e,t)=>{var n,u;const{className:a,component:d,components:f={},componentsProps:p={}}=e,v=(0,r.Z)(e,g),{isRtl:b,orientation:m,getRootProps:Z,processChildren:w}=y((0,o.Z)({},e,{ref:t})),P=(0,o.Z)({},e,{isRtl:b,orientation:m}),C=(e=>{const{orientation:t}=e,n={root:["root",t]};return(0,i.Z)(n,s,{})})(P),R=null!=(n=null!=d?d:f.Root)?n:"div",x=(0,c.Z)(R,(0,o.Z)({},v,p.root),P),E=w();return(0,h.jsx)(R,(0,o.Z)({},Z(),x,{className:(0,l.Z)(a,null==(u=p.root)?void 0:u.className,C.root),children:E}))}))},12474:function(e,t,n){n.d(t,{_i:function(){return u},pQ:function(){return i},uU:function(){return l}});var o=n(67294);const r=o.createContext(null);function u(){return o.useContext(r)}function l(e,t){const{idPrefix:n}=e;return null===n?null:`${e.idPrefix}-P-${t}`}function i(e,t){const{idPrefix:n}=e;return null===n?null:`${e.idPrefix}-T-${t}`}t.ZP=r},73584:function(e,t,n){n.d(t,{Z:function(){return Z}});var o=n(87462),r=n(63366),u=n(67294),l=n(86010),i=n(5922),c=n(27192),a=n(28979);function s(e){return(0,a.Z)("TabsUnstyled",e)}(0,n(76087).Z)("TabsUnstyled",["root","horizontal","vertical"]);var d=n(8925),f=n(57579);var p=e=>{const{value:t,defaultValue:n,onChange:o,orientation:r,direction:l,selectionFollowsFocus:i}=e,[c,a]=(0,d.Z)({controlled:t,default:n,name:"Tabs",state:"value"}),s=(0,f.Z)(),p=u.useCallback(((e,t)=>{a(t),o&&o(e,t)}),[o,a]);return{getRootProps:()=>({}),tabsContextValue:u.useMemo((()=>({idPrefix:s,value:c,onSelected:p,orientation:r,direction:l,selectionFollowsFocus:i})),[s,c,p,r,l,i])}},v=n(12474),b=n(85893);const m=["children","className","value","defaultValue","orientation","direction","component","components","componentsProps","onChange","selectionFollowsFocus"];var Z=u.forwardRef(((e,t)=>{var n,u;const{children:a,className:d,orientation:f="horizontal",direction:Z="ltr",component:y,components:h={},componentsProps:g={}}=e,w=(0,r.Z)(e,m),{tabsContextValue:P,getRootProps:C}=p(e),R=(0,o.Z)({},e,{orientation:f,direction:Z}),x=(e=>{const{orientation:t}=e,n={root:["root",t]};return(0,c.Z)(n,s,{})})(R),E=null!=(n=null!=y?y:h.Root)?n:"div",k=(0,i.Z)(E,(0,o.Z)({},w,g.root),R);return(0,b.jsx)(E,(0,o.Z)({},C(),k,{ref:t,className:(0,l.Z)(x.root,null==(u=g.root)?void 0:u.className,d),children:(0,b.jsx)(v.ZP.Provider,{value:P,children:a})}))}))},27192:function(e,t,n){function o(e,t,n){const o={};return Object.keys(e).forEach((r=>{o[r]=e[r].reduce(((e,o)=>(o&&(n&&n[o]&&e.push(n[o]),e.push(t(o))),e)),[]).join(" ")})),o}n.d(t,{Z:function(){return o}})},49981:function(e,t){const n=e=>e,o=(()=>{let e=n;return{configure(t){e=t},generate:t=>e(t),reset(){e=n}}})();t.Z=o},28979:function(e,t,n){n.d(t,{Z:function(){return u}});var o=n(49981);const r={active:"Mui-active",checked:"Mui-checked",completed:"Mui-completed",disabled:"Mui-disabled",error:"Mui-error",expanded:"Mui-expanded",focused:"Mui-focused",focusVisible:"Mui-focusVisible",required:"Mui-required",selected:"Mui-selected"};function u(e,t){return r[t]||`${o.Z.generate(e)}-${t}`}},76087:function(e,t,n){n.d(t,{Z:function(){return r}});var o=n(28979);function r(e,t){const n={};return t.forEach((t=>{n[t]=(0,o.Z)(e,t)})),n}},5922:function(e,t,n){n.d(t,{Z:function(){return u}});var o=n(87462);var r=function(e){return"string"==typeof e};function u(e,t={},n){return r(e)?t:(0,o.Z)({},t,{ownerState:(0,o.Z)({},t.ownerState,n)})}},30437:function(e,t,n){function o(e,t=[]){if(void 0===e)return{};const n={};return Object.keys(e).filter((n=>n.match(/^on[A-Z]/)&&"function"==typeof e[n]&&!t.includes(n))).forEach((t=>{n[t]=e[t]})),n}n.d(t,{Z:function(){return o}})},57094:function(e,t,n){function o(e){return e&&e.ownerDocument||document}n.d(t,{Z:function(){return o}})},7960:function(e,t,n){function o(e,t){"function"==typeof e?e(t):e&&(e.current=t)}n.d(t,{Z:function(){return o}})},8925:function(e,t,n){n.d(t,{Z:function(){return r}});var o=n(67294);function r({controlled:e,default:t,name:n,state:r="value"}){const{current:u}=o.useRef(void 0!==e),[l,i]=o.useState(t);return[u?e:l,o.useCallback((e=>{u||i(e)}),[])]}},30067:function(e,t,n){n.d(t,{Z:function(){return u}});var o=n(67294),r=n(7960);function u(e,t){return o.useMemo((()=>null==e&&null==t?null:n=>{(0,r.Z)(e,n),(0,r.Z)(t,n)}),[e,t])}},57579:function(e,t,n){n.d(t,{Z:function(){return u}});var o=n(67294);let r=0;function u(e){const[t,n]=o.useState(e),u=e||t;return o.useEffect((()=>{null==t&&(r+=1,n(`mui-${r}`))}),[t]),u}},99962:function(e,t,n){n.d(t,{Z:function(){return f}});var o=n(67294);let r,u=!0,l=!1;const i={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function c(e){e.metaKey||e.altKey||e.ctrlKey||(u=!0)}function a(){u=!1}function s(){"hidden"===this.visibilityState&&l&&(u=!0)}function d(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch(n){}return u||function(e){const{type:t,tagName:n}=e;return!("INPUT"!==n||!i[t]||e.readOnly)||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}(t)}function f(){const e=o.useCallback((e=>{var t;null!=e&&((t=e.ownerDocument).addEventListener("keydown",c,!0),t.addEventListener("mousedown",a,!0),t.addEventListener("pointerdown",a,!0),t.addEventListener("touchstart",a,!0),t.addEventListener("visibilitychange",s,!0))}),[]),t=o.useRef(!1);return{isFocusVisibleRef:t,onFocus:function(e){return!!d(e)&&(t.current=!0,!0)},onBlur:function(){return!!t.current&&(l=!0,window.clearTimeout(r),r=window.setTimeout((()=>{l=!1}),100),t.current=!1,!0)},ref:e}}},69921:function(e,t){var n=60103,o=60106,r=60107,u=60108,l=60114,i=60109,c=60110,a=60112,s=60113,d=60120,f=60115,p=60116,v=60121,b=60122,m=60117,Z=60129,y=60131;if("function"==typeof Symbol&&Symbol.for){var h=Symbol.for;n=h("react.element"),o=h("react.portal"),r=h("react.fragment"),u=h("react.strict_mode"),l=h("react.profiler"),i=h("react.provider"),c=h("react.context"),a=h("react.forward_ref"),s=h("react.suspense"),d=h("react.suspense_list"),f=h("react.memo"),p=h("react.lazy"),v=h("react.block"),b=h("react.server.block"),m=h("react.fundamental"),Z=h("react.debug_trace_mode"),y=h("react.legacy_hidden")}function g(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case r:case l:case u:case s:case d:return e;default:switch(e=e&&e.$$typeof){case c:case a:case p:case f:case i:return e;default:return t}}case o:return t}}}var w=i,P=n,C=a,R=r,x=p,E=f,k=o,T=l,$=u,F=s;t.ContextConsumer=c,t.ContextProvider=w,t.Element=P,t.ForwardRef=C,t.Fragment=R,t.Lazy=x,t.Memo=E,t.Portal=k,t.Profiler=T,t.StrictMode=$,t.Suspense=F,t.isAsyncMode=function(){return!1},t.isConcurrentMode=function(){return!1},t.isContextConsumer=function(e){return g(e)===c},t.isContextProvider=function(e){return g(e)===i},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return g(e)===a},t.isFragment=function(e){return g(e)===r},t.isLazy=function(e){return g(e)===p},t.isMemo=function(e){return g(e)===f},t.isPortal=function(e){return g(e)===o},t.isProfiler=function(e){return g(e)===l},t.isStrictMode=function(e){return g(e)===u},t.isSuspense=function(e){return g(e)===s},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===r||e===l||e===Z||e===u||e===s||e===d||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===f||e.$$typeof===i||e.$$typeof===c||e.$$typeof===a||e.$$typeof===m||e.$$typeof===v||e[0]===b)},t.typeOf=g},59864:function(e,t,n){e.exports=n(69921)},75251:function(e,t,n){n(27418);var o=n(67294),r=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var u=Symbol.for;r=u("react.element"),t.Fragment=u("react.fragment")}var l=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var o,u={},a=null,s=null;for(o in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(s=t.ref),t)i.call(t,o)&&!c.hasOwnProperty(o)&&(u[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===u[o]&&(u[o]=t[o]);return{$$typeof:r,type:e,key:a,ref:s,props:u,_owner:l.current}}t.jsx=a,t.jsxs=a},85893:function(e,t,n){e.exports=n(75251)}}]);