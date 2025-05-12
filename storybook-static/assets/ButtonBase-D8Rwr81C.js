var Bt=Object.defineProperty;var St=(t,e,n)=>e in t?Bt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Y=(t,e,n)=>St(t,typeof e!="symbol"?e+"":e,n);import{r as u,R as X}from"./index-DRjF_FHU.js";import{_ as Dt,c as x,a as ct,s as tt,g as jt,b as Lt}from"./createSimplePaletteValueFilter-B_XaPUuX.js";import{j as N}from"./jsx-runtime-DiklIkkE.js";import{a as pt,k as et}from"./DefaultPropsProvider-C6ugeVop.js";import{u as st}from"./useForkRef-Bgr6uVxV.js";import{u as vt}from"./useEnhancedEffect-CvtZChyo.js";function G(t){const e=u.useRef(t);return vt(()=>{e.current=t}),u.useRef((...n)=>(0,e.current)(...n)).current}const at={};function ft(t,e){const n=u.useRef(at);return n.current===at&&(n.current=t(e)),n}const Nt=[];function kt(t){u.useEffect(t,Nt)}class nt{constructor(){Y(this,"currentId",null);Y(this,"clear",()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)});Y(this,"disposeEffect",()=>this.clear)}static create(){return new nt}start(e,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},e)}}function Ot(){const t=ft(nt.create).current;return kt(t.disposeEffect),t}function ut(t){try{return t.matches(":focus-visible")}catch{}return!1}function $t(t,e){if(t==null)return{};var n={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(e.indexOf(i)!==-1)continue;n[i]=t[i]}return n}function J(t,e){return J=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},J(t,e)}function Ft(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,J(t,e)}const lt=X.createContext(null);function Ut(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ot(t,e){var n=function(r){return e&&u.isValidElement(r)?e(r):r},i=Object.create(null);return t&&u.Children.map(t,function(o){return o}).forEach(function(o){i[o.key]=n(o)}),i}function zt(t,e){t=t||{},e=e||{};function n(d){return d in e?e[d]:t[d]}var i=Object.create(null),o=[];for(var r in t)r in e?o.length&&(i[r]=o,o=[]):o.push(r);var s,p={};for(var l in e){if(i[l])for(s=0;s<i[l].length;s++){var f=i[l][s];p[i[l][s]]=n(f)}p[l]=n(l)}for(s=0;s<o.length;s++)p[o[s]]=n(o[s]);return p}function v(t,e,n){return n[e]!=null?n[e]:t.props[e]}function _t(t,e){return ot(t.children,function(n){return u.cloneElement(n,{onExited:e.bind(null,n),in:!0,appear:v(n,"appear",t),enter:v(n,"enter",t),exit:v(n,"exit",t)})})}function At(t,e,n){var i=ot(t.children),o=zt(e,i);return Object.keys(o).forEach(function(r){var s=o[r];if(u.isValidElement(s)){var p=r in e,l=r in i,f=e[r],d=u.isValidElement(f)&&!f.props.in;l&&(!p||d)?o[r]=u.cloneElement(s,{onExited:n.bind(null,s),in:!0,exit:v(s,"exit",t),enter:v(s,"enter",t)}):!l&&p&&!d?o[r]=u.cloneElement(s,{in:!1}):l&&p&&u.isValidElement(f)&&(o[r]=u.cloneElement(s,{onExited:n.bind(null,s),in:f.props.in,exit:v(s,"exit",t),enter:v(s,"enter",t)}))}}),o}var Yt=Object.values||function(t){return Object.keys(t).map(function(e){return t[e]})},Xt={component:"div",childFactory:function(e){return e}},rt=function(t){Ft(e,t);function e(i,o){var r;r=t.call(this,i,o)||this;var s=r.handleExited.bind(Ut(r));return r.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},r}var n=e.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(o,r){var s=r.children,p=r.handleExited,l=r.firstRender;return{children:l?_t(o,p):At(o,s,p),firstRender:!1}},n.handleExited=function(o,r){var s=ot(this.props.children);o.key in s||(o.props.onExited&&o.props.onExited(r),this.mounted&&this.setState(function(p){var l=Dt({},p.children);return delete l[o.key],{children:l}}))},n.render=function(){var o=this.props,r=o.component,s=o.childFactory,p=$t(o,["component","childFactory"]),l=this.state.contextValue,f=Yt(this.state.children).map(s);return delete p.appear,delete p.enter,delete p.exit,r===null?X.createElement(lt.Provider,{value:l},f):X.createElement(lt.Provider,{value:l},X.createElement(r,p,f))},e}(X.Component);rt.propTypes={};rt.defaultProps=Xt;class q{constructor(){Y(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new q}static use(){const e=ft(q.create).current,[n,i]=u.useState(!1);return e.shouldMount=n,e.setShouldMount=i,u.useEffect(e.mountEffect,[n]),e}mount(){return this.mounted||(this.mounted=Wt(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.start(...e)})}stop(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.stop(...e)})}pulsate(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.pulsate(...e)})}}function Kt(){return q.use()}function Wt(){let t,e;const n=new Promise((i,o)=>{t=i,e=o});return n.resolve=t,n.reject=e,n}function Ht(t){const{className:e,classes:n,pulsate:i=!1,rippleX:o,rippleY:r,rippleSize:s,in:p,onExited:l,timeout:f}=t,[d,h]=u.useState(!1),M=x(e,n.ripple,n.rippleVisible,i&&n.ripplePulsate),V={width:s,height:s,top:-(s/2)+r,left:-(s/2)+o},b=x(n.child,d&&n.childLeaving,i&&n.childPulsate);return!p&&!d&&h(!0),u.useEffect(()=>{if(!p&&l!=null){const S=setTimeout(l,f);return()=>{clearTimeout(S)}}},[l,p,f]),N.jsx("span",{className:M,style:V,children:N.jsx("span",{className:b})})}const g=ct("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),Q=550,Gt=80,qt=et`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,Zt=et`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,Jt=et`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,Qt=tt("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),te=tt(Ht,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${g.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${qt};
    animation-duration: ${Q}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  &.${g.ripplePulsate} {
    animation-duration: ${({theme:t})=>t.transitions.duration.shorter}ms;
  }

  & .${g.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${g.childLeaving} {
    opacity: 0;
    animation-name: ${Zt};
    animation-duration: ${Q}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  & .${g.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Jt};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,ee=u.forwardRef(function(e,n){const i=pt({props:e,name:"MuiTouchRipple"}),{center:o=!1,classes:r={},className:s,...p}=i,[l,f]=u.useState([]),d=u.useRef(0),h=u.useRef(null);u.useEffect(()=>{h.current&&(h.current(),h.current=null)},[l]);const M=u.useRef(!1),V=Ot(),b=u.useRef(null),S=u.useRef(null),C=u.useCallback(c=>{const{pulsate:y,rippleX:R,rippleY:$,rippleSize:D,cb:F}=c;f(E=>[...E,N.jsx(te,{classes:{ripple:x(r.ripple,g.ripple),rippleVisible:x(r.rippleVisible,g.rippleVisible),ripplePulsate:x(r.ripplePulsate,g.ripplePulsate),child:x(r.child,g.child),childLeaving:x(r.childLeaving,g.childLeaving),childPulsate:x(r.childPulsate,g.childPulsate)},timeout:Q,pulsate:y,rippleX:R,rippleY:$,rippleSize:D},d.current)]),d.current+=1,h.current=F},[r]),k=u.useCallback((c={},y={},R=()=>{})=>{const{pulsate:$=!1,center:D=o||y.pulsate,fakeElement:F=!1}=y;if((c==null?void 0:c.type)==="mousedown"&&M.current){M.current=!1;return}(c==null?void 0:c.type)==="touchstart"&&(M.current=!0);const E=F?null:S.current,I=E?E.getBoundingClientRect():{width:0,height:0,left:0,top:0};let w,T,B;if(D||c===void 0||c.clientX===0&&c.clientY===0||!c.clientX&&!c.touches)w=Math.round(I.width/2),T=Math.round(I.height/2);else{const{clientX:U,clientY:j}=c.touches&&c.touches.length>0?c.touches[0]:c;w=Math.round(U-I.left),T=Math.round(j-I.top)}if(D)B=Math.sqrt((2*I.width**2+I.height**2)/3),B%2===0&&(B+=1);else{const U=Math.max(Math.abs((E?E.clientWidth:0)-w),w)*2+2,j=Math.max(Math.abs((E?E.clientHeight:0)-T),T)*2+2;B=Math.sqrt(U**2+j**2)}c!=null&&c.touches?b.current===null&&(b.current=()=>{C({pulsate:$,rippleX:w,rippleY:T,rippleSize:B,cb:R})},V.start(Gt,()=>{b.current&&(b.current(),b.current=null)})):C({pulsate:$,rippleX:w,rippleY:T,rippleSize:B,cb:R})},[o,C,V]),K=u.useCallback(()=>{k({},{pulsate:!0})},[k]),O=u.useCallback((c,y)=>{if(V.clear(),(c==null?void 0:c.type)==="touchend"&&b.current){b.current(),b.current=null,V.start(0,()=>{O(c,y)});return}b.current=null,f(R=>R.length>0?R.slice(1):R),h.current=y},[V]);return u.useImperativeHandle(n,()=>({pulsate:K,start:k,stop:O}),[K,k,O]),N.jsx(Qt,{className:x(g.root,r.root,s),ref:S,...p,children:N.jsx(rt,{component:null,exit:!0,children:l})})});function ne(t){return jt("MuiButtonBase",t)}const oe=ct("MuiButtonBase",["root","disabled","focusVisible"]),re=t=>{const{disabled:e,focusVisible:n,focusVisibleClassName:i,classes:o}=t,s=Lt({root:["root",e&&"disabled",n&&"focusVisible"]},ne,o);return n&&i&&(s.root+=` ${i}`),s},ie=tt("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(t,e)=>e.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${oe.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),de=u.forwardRef(function(e,n){const i=pt({props:e,name:"MuiButtonBase"}),{action:o,centerRipple:r=!1,children:s,className:p,component:l="button",disabled:f=!1,disableRipple:d=!1,disableTouchRipple:h=!1,focusRipple:M=!1,focusVisibleClassName:V,LinkComponent:b="a",onBlur:S,onClick:C,onContextMenu:k,onDragLeave:K,onFocus:O,onFocusVisible:c,onKeyDown:y,onKeyUp:R,onMouseDown:$,onMouseLeave:D,onMouseUp:F,onTouchEnd:E,onTouchMove:I,onTouchStart:w,tabIndex:T=0,TouchRippleProps:B,touchRippleRef:U,type:j,...z}=i,_=u.useRef(null),m=Kt(),dt=st(m.ref,U),[L,W]=u.useState(!1);f&&L&&W(!1),u.useImperativeHandle(o,()=>({focusVisible:()=>{W(!0),_.current.focus()}}),[]);const ht=m.shouldMount&&!d&&!f;u.useEffect(()=>{L&&M&&!d&&m.pulsate()},[d,M,L,m]);const mt=P(m,"start",$,h),bt=P(m,"stop",k,h),gt=P(m,"stop",K,h),Mt=P(m,"stop",F,h),Rt=P(m,"stop",a=>{L&&a.preventDefault(),D&&D(a)},h),yt=P(m,"start",w,h),Et=P(m,"stop",E,h),xt=P(m,"stop",I,h),Ct=P(m,"stop",a=>{ut(a.target)||W(!1),S&&S(a)},!1),Tt=G(a=>{_.current||(_.current=a.currentTarget),ut(a.target)&&(W(!0),c&&c(a)),O&&O(a)}),Z=()=>{const a=_.current;return l&&l!=="button"&&!(a.tagName==="A"&&a.href)},Pt=G(a=>{M&&!a.repeat&&L&&a.key===" "&&m.stop(a,()=>{m.start(a)}),a.target===a.currentTarget&&Z()&&a.key===" "&&a.preventDefault(),y&&y(a),a.target===a.currentTarget&&Z()&&a.key==="Enter"&&!f&&(a.preventDefault(),C&&C(a))}),Vt=G(a=>{M&&a.key===" "&&L&&!a.defaultPrevented&&m.stop(a,()=>{m.pulsate(a)}),R&&R(a),C&&a.target===a.currentTarget&&Z()&&a.key===" "&&!a.defaultPrevented&&C(a)});let H=l;H==="button"&&(z.href||z.to)&&(H=b);const A={};H==="button"?(A.type=j===void 0?"button":j,A.disabled=f):(!z.href&&!z.to&&(A.role="button"),f&&(A["aria-disabled"]=f));const It=st(n,_),it={...i,centerRipple:r,component:l,disabled:f,disableRipple:d,disableTouchRipple:h,focusRipple:M,tabIndex:T,focusVisible:L},wt=re(it);return N.jsxs(ie,{as:H,className:x(wt.root,p),ownerState:it,onBlur:Ct,onClick:C,onContextMenu:bt,onFocus:Tt,onKeyDown:Pt,onKeyUp:Vt,onMouseDown:mt,onMouseLeave:Rt,onMouseUp:Mt,onDragLeave:gt,onTouchEnd:Et,onTouchMove:xt,onTouchStart:yt,ref:It,tabIndex:f?-1:T,type:j,...A,...z,children:[s,ht?N.jsx(ee,{ref:dt,center:r,...B}):null]})});function P(t,e,n,i=!1){return G(o=>(n&&n(o),i||t[e](o),!0))}export{de as B,lt as T,Ft as _,$t as a,G as b,nt as c,ut as i,Ot as u};
