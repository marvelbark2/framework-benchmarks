(()=>{var Ge=Object.defineProperty;var l=(e,t)=>Ge(e,"name",{value:t,configurable:!0});var Z,s,me,Xe,M,ce,ve,ee,Ze,W={},ye=[],Ke=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ne=Array.isArray;function L(e,t){for(var n in t)e[n]=t[n];return e}l(L,"h");function ge(e){var t=e.parentNode;t&&t.removeChild(e)}l(ge,"p");function b(e,t,n){var a,i,o,u={};for(o in t)o=="key"?a=t[o]:o=="ref"?i=t[o]:u[o]=t[o];if(arguments.length>2&&(u.children=arguments.length>3?Z.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)u[o]===void 0&&(u[o]=e.defaultProps[o]);return J(e,u,a,i,null)}l(b,"y");function J(e,t,n,a,i){var o={type:e,props:t,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i??++me};return i==null&&s.vnode!=null&&s.vnode(o),o}l(J,"d");function H(e){return e.children}l(H,"k");function O(e,t){this.props=e,this.context=t}l(O,"b");function B(e,t){if(t==null)return e.__?B(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__d||n.__e;return typeof e.type=="function"?B(e):null}l(B,"g");function be(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return be(e)}}l(be,"m");function pe(e){(!e.__d&&(e.__d=!0)&&M.push(e)&&!G.__r++||ce!==s.debounceRendering)&&((ce=s.debounceRendering)||ve)(G)}l(pe,"w");function G(){var e,t,n,a,i,o,u,m,f;for(M.sort(ee);e=M.shift();)e.__d&&(t=M.length,a=void 0,i=void 0,o=void 0,m=(u=(n=e).__v).__e,(f=n.__P)&&(a=[],i=[],(o=L({},u)).__v=u.__v+1,oe(f,u,o,n.__n,f.ownerSVGElement!==void 0,u.__h!=null?[m]:null,a,m??B(u),u.__h,i),Ee(a,u,i),u.__e!=m&&be(u)),M.length>t&&M.sort(ee));G.__r=0}l(G,"x");function we(e,t,n,a,i,o,u,m,f,E,y){var r,x,g,d,_,h,c,p,k,v=0,w=a&&a.__k||ye,C=w.length,T=C,U=t.length;for(n.__k=[],r=0;r<U;r++)(d=n.__k[r]=(d=t[r])==null||typeof d=="boolean"||typeof d=="function"?null:typeof d=="string"||typeof d=="number"||typeof d=="bigint"?J(null,d,null,null,d):ne(d)?J(H,{children:d},null,null,null):d.__b>0?J(d.type,d.props,d.key,d.ref?d.ref:null,d.__v):d)!=null?(d.__=n,d.__b=n.__b+1,(p=Qe(d,w,c=r+v,T))===-1?g=W:(g=w[p]||W,w[p]=void 0,T--),oe(e,d,g,i,o,u,m,f,E,y),_=d.__e,(x=d.ref)&&g.ref!=x&&(g.ref&&re(g.ref,null,d),y.push(x,d.__c||_,d)),_!=null&&(h==null&&(h=_),(k=g===W||g.__v===null)?p==-1&&v--:p!==c&&(p===c+1?v++:p>c?T>U-c?v+=p-c:v--:v=p<c&&p==c-1?p-c:0),c=r+v,typeof d.type!="function"||p===c&&g.__k!==d.__k?typeof d.type=="function"||p===c&&!k?d.__d!==void 0?(f=d.__d,d.__d=void 0):f=_.nextSibling:f=xe(e,_,f):f=ke(d,f,e),typeof n.type=="function"&&(n.__d=f))):(g=w[r])&&g.key==null&&g.__e&&(g.__e==f&&(g.__=a,f=B(g)),te(g,g,!1),w[r]=null);for(n.__e=h,r=C;r--;)w[r]!=null&&(typeof n.type=="function"&&w[r].__e!=null&&w[r].__e==n.__d&&(n.__d=w[r].__e.nextSibling),te(w[r],w[r]))}l(we,"P");function ke(e,t,n){for(var a,i=e.__k,o=0;i&&o<i.length;o++)(a=i[o])&&(a.__=e,t=typeof a.type=="function"?ke(a,t,n):xe(n,a.__e,t));return t}l(ke,"$");function xe(e,t,n){return n==null||n.parentNode!==e?e.insertBefore(t,null):t==n&&t.parentNode!=null||e.insertBefore(t,n),t.nextSibling}l(xe,"S");function Qe(e,t,n,a){var i=e.key,o=e.type,u=n-1,m=n+1,f=t[n];if(f===null||f&&i==f.key&&o===f.type)return n;if(a>(f!=null?1:0))for(;u>=0||m<t.length;){if(u>=0){if((f=t[u])&&i==f.key&&o===f.type)return u;u--}if(m<t.length){if((f=t[m])&&i==f.key&&o===f.type)return m;m++}}return-1}l(Qe,"A");function et(e,t,n,a,i){var o;for(o in n)o==="children"||o==="key"||o in t||X(e,o,null,n[o],a);for(o in t)i&&typeof t[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===t[o]||X(e,o,t[o],n[o],a)}l(et,"D");function fe(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Ke.test(t)?n:n+"px"}l(fe,"H");function X(e,t,n,a,i){var o;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof a=="string"&&(e.style.cssText=a=""),a)for(t in a)n&&t in n||fe(e.style,t,"");if(n)for(t in n)a&&n[t]===a[t]||fe(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/(PointerCapture)$|Capture$/,"$1")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?a?n.u=a.u:(n.u=Date.now(),e.addEventListener(t,o?he:de,o)):e.removeEventListener(t,o?he:de,o);else if(t!=="dangerouslySetInnerHTML"){if(i)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="rowSpan"&&t!=="colSpan"&&t!=="role"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,n))}}l(X,"I");function de(e){var t=this.l[e.type+!1];if(e.t){if(e.t<=t.u)return}else e.t=Date.now();return t(s.event?s.event(e):e)}l(de,"T");function he(e){return this.l[e.type+!0](s.event?s.event(e):e)}l(he,"j");function oe(e,t,n,a,i,o,u,m,f,E){var y,r,x,g,d,_,h,c,p,k,v,w,C,T,U,P=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(f=n.__h,m=t.__e=n.__e,t.__h=null,o=[m]),(y=s.__b)&&y(t);e:if(typeof P=="function")try{if(c=t.props,p=(y=P.contextType)&&a[y.__c],k=y?p?p.props.value:y.__:a,n.__c?h=(r=t.__c=n.__c).__=r.__E:("prototype"in P&&P.prototype.render?t.__c=r=new P(c,k):(t.__c=r=new O(c,k),r.constructor=P,r.render=nt),p&&p.sub(r),r.props=c,r.state||(r.state={}),r.context=k,r.__n=a,x=r.__d=!0,r.__h=[],r._sb=[]),r.__s==null&&(r.__s=r.state),P.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=L({},r.__s)),L(r.__s,P.getDerivedStateFromProps(c,r.__s))),g=r.props,d=r.state,r.__v=t,x)P.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(P.getDerivedStateFromProps==null&&c!==g&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(c,k),!r.__e&&(r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(c,r.__s,k)===!1||t.__v===n.__v)){for(t.__v!==n.__v&&(r.props=c,r.state=r.__s,r.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(I){I&&(I.__=t)}),v=0;v<r._sb.length;v++)r.__h.push(r._sb[v]);r._sb=[],r.__h.length&&u.push(r);break e}r.componentWillUpdate!=null&&r.componentWillUpdate(c,r.__s,k),r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(g,d,_)})}if(r.context=k,r.props=c,r.__P=e,r.__e=!1,w=s.__r,C=0,"prototype"in P&&P.prototype.render){for(r.state=r.__s,r.__d=!1,w&&w(t),y=r.render(r.props,r.state,r.context),T=0;T<r._sb.length;T++)r.__h.push(r._sb[T]);r._sb=[]}else do r.__d=!1,w&&w(t),y=r.render(r.props,r.state,r.context),r.state=r.__s;while(r.__d&&++C<25);r.state=r.__s,r.getChildContext!=null&&(a=L(L({},a),r.getChildContext())),x||r.getSnapshotBeforeUpdate==null||(_=r.getSnapshotBeforeUpdate(g,d)),we(e,ne(U=y!=null&&y.type===H&&y.key==null?y.props.children:y)?U:[U],t,n,a,i,o,u,m,f,E),r.base=t.__e,t.__h=null,r.__h.length&&u.push(r),h&&(r.__E=r.__=null)}catch(I){t.__v=null,(f||o!=null)&&(t.__e=m,t.__h=!!f,o[o.indexOf(m)]=null),s.__e(I,t,n)}else o==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=tt(n.__e,t,n,a,i,o,u,f,E);(y=s.diffed)&&y(t)}l(oe,"z");function Ee(e,t,n){for(var a=0;a<n.length;a++)re(n[a],n[++a],n[++a]);s.__c&&s.__c(t,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(o){o.call(i)})}catch(o){s.__e(o,i.__v)}})}l(Ee,"L");function tt(e,t,n,a,i,o,u,m,f){var E,y,r,x=n.props,g=t.props,d=t.type,_=0;if(d==="svg"&&(i=!0),o!=null){for(;_<o.length;_++)if((E=o[_])&&"setAttribute"in E==!!d&&(d?E.localName===d:E.nodeType===3)){e=E,o[_]=null;break}}if(e==null){if(d===null)return document.createTextNode(g);e=i?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,g.is&&g),o=null,m=!1}if(d===null)x===g||m&&e.data===g||(e.data=g);else{if(o=o&&Z.call(e.childNodes),y=(x=n.props||W).dangerouslySetInnerHTML,r=g.dangerouslySetInnerHTML,!m){if(o!=null)for(x={},_=0;_<e.attributes.length;_++)x[e.attributes[_].name]=e.attributes[_].value;(r||y)&&(r&&(y&&r.__html==y.__html||r.__html===e.innerHTML)||(e.innerHTML=r&&r.__html||""))}if(et(e,g,x,i,m),r)t.__k=[];else if(we(e,ne(_=t.props.children)?_:[_],t,n,a,i&&d!=="foreignObject",o,u,o?o[0]:n.__k&&B(n,0),m,f),o!=null)for(_=o.length;_--;)o[_]!=null&&ge(o[_]);m||("value"in g&&(_=g.value)!==void 0&&(_!==e.value||d==="progress"&&!_||d==="option"&&_!==x.value)&&X(e,"value",_,x.value,!1),"checked"in g&&(_=g.checked)!==void 0&&_!==e.checked&&X(e,"checked",_,x.checked,!1))}return e}l(tt,"M");function re(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(a){s.__e(a,n)}}l(re,"N");function te(e,t,n){var a,i;if(s.unmount&&s.unmount(e),(a=e.ref)&&(a.current&&a.current!==e.__e||re(a,null,t)),(a=e.__c)!=null){if(a.componentWillUnmount)try{a.componentWillUnmount()}catch(o){s.__e(o,t)}a.base=a.__P=null,e.__c=void 0}if(a=e.__k)for(i=0;i<a.length;i++)a[i]&&te(a[i],t,n||typeof e.type!="function");n||e.__e==null||ge(e.__e),e.__=e.__e=e.__d=void 0}l(te,"O");function nt(e,t,n){return this.constructor(e,n)}l(nt,"q");function ot(e,t,n){var a,i,o,u;s.__&&s.__(e,t),i=(a=typeof n=="function")?null:n&&n.__k||t.__k,o=[],u=[],oe(t,e=(!a&&n||t).__k=b(H,null,[e]),i||W,W,t.ownerSVGElement!==void 0,!a&&n?[n]:i?null:t.firstChild?Z.call(t.childNodes):null,o,!a&&n?n:i?i.__e:t.firstChild,a,u),Ee(o,e,u)}l(ot,"B");function V(e,t){ot(e,t,V)}l(V,"E");Z=ye.slice,s={__e:function(e,t,n,a){for(var i,o,u;t=t.__;)if((i=t.__c)&&!i.__)try{if((o=i.constructor)&&o.getDerivedStateFromError!=null&&(i.setState(o.getDerivedStateFromError(e)),u=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,a||{}),u=i.__d),u)return i.__E=i}catch(m){e=m}throw e}},me=0,Xe=l(function(e){return e!=null&&e.constructor===void 0},"t"),O.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=L({},this.state),typeof e=="function"&&(e=e(L({},n),this.props)),e&&L(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),pe(this))},O.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),pe(this))},O.prototype.render=H,M=[],ve=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ee=l(function(e,t){return e.__v.__b-t.__v.__b},"f"),G.__r=0,Ze=0;typeof window<"u"&&window.__PREACT_DEVTOOLS__&&window.__PREACT_DEVTOOLS__.attachPreact("10.18.1",s,{Fragment:H,Component:O});var Ne={};function j(e){return e.type===H?"Fragment":typeof e.type=="function"?e.type.displayName||e.type.name:typeof e.type=="string"?e.type:"#text"}l(j,"a");var $=[],R=[];function Ce(){return $.length>0?$[$.length-1]:null}l(Ce,"l");var Pe=!1;function ae(e){return typeof e.type=="function"&&e.type!=H}l(ae,"u");function S(e){for(var t=[e],n=e;n.__o!=null;)t.push(n.__o),n=n.__o;return t.reduce(function(a,i){a+="  in "+j(i);var o=i.__source;return o?a+=" (at "+o.fileName+":"+o.lineNumber+")":Pe||(Pe=!0,console.warn("Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons.")),a+`
`},"")}l(S,"f");var rt=typeof WeakMap=="function";function Te(e){var t=[];return e.__k&&e.__k.forEach(function(n){n&&typeof n.type=="function"?t.push.apply(t,Te(n)):n&&typeof n.type=="string"&&t.push(n.type)}),t}l(Te,"d");function He(e){return e?typeof e.type=="function"?e.__===null?e.__e!==null&&e.__e.parentNode!==null?e.__e.parentNode.localName:"":He(e.__):e.type:""}l(He,"h");var at=O.prototype.setState;function Se(e){return e==="table"||e==="tfoot"||e==="tbody"||e==="thead"||e==="td"||e==="tr"||e==="th"}l(Se,"y");O.prototype.setState=function(e,t){return this.__v==null&&this.state==null&&console.warn(`Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set "this.state = {}" directly.

`+S(Ce())),at.call(this,e,t)};var _t=/^(address|article|aside|blockquote|details|div|dl|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hgroup|hr|main|menu|nav|ol|p|pre|search|section|table|ul)$/,it=O.prototype.forceUpdate;function A(e){var t=e.props,n=j(e),a="";for(var i in t)if(t.hasOwnProperty(i)&&i!=="children"){var o=t[i];typeof o=="function"&&(o="function "+(o.displayName||o.name)+"() {}"),o=Object(o)!==o||o.toString?o+"":Object.prototype.toString.call(o),a+=" "+i+"="+JSON.stringify(o)}var u=t.children;return"<"+n+a+(u&&u.length?">..</"+n+">":" />")}l(A,"w");O.prototype.forceUpdate=function(e){return this.__v==null?console.warn(`Calling "this.forceUpdate" inside the constructor of a component is a no-op and might be a bug in your application.

`+S(Ce())):this.__P==null&&console.warn(`Can't call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.

`+S(this.__v)),it.call(this,e)},function(){(function(){var _=s.__b,h=s.diffed,c=s.__,p=s.vnode,k=s.__r;s.diffed=function(v){ae(v)&&R.pop(),$.pop(),h&&h(v)},s.__b=function(v){ae(v)&&$.push(v),_&&_(v)},s.__=function(v,w){R=[],c&&c(v,w)},s.vnode=function(v){v.__o=R.length>0?R[R.length-1]:null,p&&p(v)},s.__r=function(v){ae(v)&&R.push(v),k&&k(v)}})();var e=!1,t=s.__b,n=s.diffed,a=s.vnode,i=s.__r,o=s.__e,u=s.__,m=s.__h,f=s.__c,E=rt?{useEffect:new WeakMap,useLayoutEffect:new WeakMap,lazyPropTypes:new WeakMap}:null,y=[],r=[];s.__e=function(_,h,c,p){if(h&&h.__c&&typeof _.then=="function"){var k=_;_=new Error("Missing Suspense. The throwing component was: "+j(h));for(var v=h;v;v=v.__)if(v.__c&&v.__c.__c){_=k;break}if(_ instanceof Error)throw _}try{(p=p||{}).componentStack=S(h),o(_,h,c,p),typeof _.then!="function"&&setTimeout(function(){throw _})}catch(w){throw w}},s.__=function(_,h){if(!h)throw new Error(`Undefined parent passed to render(), this is the second argument.
Check if the element is available in the DOM/has the correct id.`);var c;switch(h.nodeType){case 1:case 11:case 9:c=!0;break;default:c=!1}if(!c){var p=j(_);throw new Error("Expected a valid HTML node as a second argument to render.	Received "+h+" instead: render(<"+p+" />, "+h+");")}u&&u(_,h)},s.__b=function(_){var h=_.type;if((typeof h=="string"&&Se(h)||h==="p")&&r.push(_),e=!0,h===void 0)throw new Error(`Undefined component passed to createElement()

You likely forgot to export your component or might have mixed up default and named imports`+A(_)+`

`+S(_));if(h!=null&&typeof h=="object")throw h.__k!==void 0&&h.__e!==void 0?new Error("Invalid type passed to createElement(): "+h+`

Did you accidentally pass a JSX literal as JSX twice?

  let My`+j(_)+" = "+A(h)+`;
  let vnode = <My`+j(_)+` />;

This usually happens when you export a JSX literal and not the component.

`+S(_)):new Error("Invalid type passed to createElement(): "+(Array.isArray(h)?"array":h));if(_.ref!==void 0&&typeof _.ref!="function"&&typeof _.ref!="object"&&!("$$typeof"in _))throw new Error(`Component's "ref" property should be a function, or an object created by createRef(), but got [`+typeof _.ref+`] instead
`+A(_)+`

`+S(_));if(typeof _.type=="string"){for(var c in _.props)if(c[0]==="o"&&c[1]==="n"&&typeof _.props[c]!="function"&&_.props[c]!=null)throw new Error(`Component's "`+c+'" property should be a function, but got ['+typeof _.props[c]+`] instead
`+A(_)+`

`+S(_))}if(typeof _.type=="function"&&_.type.propTypes){if(_.type.displayName==="Lazy"&&E&&!E.lazyPropTypes.has(_.type)){var p="PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ";try{var k=_.type();E.lazyPropTypes.set(_.type,!0),console.warn(p+"Component wrapped in lazy() is "+j(k))}catch{console.warn(p+"We will log the wrapped component's name once it is loaded.")}}var v=_.props;_.type.__f&&delete(v=function(w,C){for(var T in C)w[T]=C[T];return w}({},v)).ref,function(w,C,T,U,P){Object.keys(w).forEach(function(I){var F;try{F=w[I](C,I,U,"prop",null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(Je){F=Je}F&&!(F.message in Ne)&&(Ne[F.message]=!0,console.error("Failed prop type: "+F.message+(P&&`
`+P()||"")))})}(_.type.propTypes,v,0,j(_),function(){return S(_)})}t&&t(_)},s.__r=function(_){i&&i(_),e=!0},s.__h=function(_,h,c){if(!_||!e)throw new Error("Hook can only be invoked from render methods.");m&&m(_,h,c)};var x=l(function(_,h){return{get:function(){var c="get"+_+h;y&&y.indexOf(c)<0&&(y.push(c),console.warn("getting vnode."+_+" is deprecated, "+h))},set:function(){var c="set"+_+h;y&&y.indexOf(c)<0&&(y.push(c),console.warn("setting vnode."+_+" is not allowed, "+h))}}},"T"),g={nodeName:x("nodeName","use vnode.type"),attributes:x("attributes","use vnode.props"),children:x("children","use vnode.props.children")},d=Object.create({},g);s.vnode=function(_){var h=_.props;if(_.type!==null&&h!=null&&("__source"in h||"__self"in h)){var c=_.props={};for(var p in h){var k=h[p];p==="__source"?_.__source=k:p==="__self"?_.__self=k:c[p]=k}}_.__proto__=d,a&&a(_)},s.diffed=function(_){if(_.__k&&_.__k.forEach(function(I){if(typeof I=="object"&&I&&I.type===void 0){var F=Object.keys(I).join(",");throw new Error("Objects are not valid as a child. Encountered an object with the keys {"+F+`}.

`+S(_))}}),e=!1,n&&n(_),_.__k!=null)for(var h=[],c=0;c<_.__k.length;c++){var p=_.__k[c];if(p&&p.key!=null){var k=p.key;if(h.indexOf(k)!==-1){console.error('Following component has two or more children with the same key attribute: "'+k+`". This may cause glitches and misbehavior in rendering process. Component: 

`+A(_)+`

`+S(_));break}h.push(k)}}if(_.__c!=null&&_.__c.__H!=null){var v=_.__c.__H.__;if(v)for(var w=0;w<v.length;w+=1){var C=v[w];if(C.__H){for(var T=0;T<C.__H.length;T++)if((P=C.__H[T])!=P){var U=j(_);throw new Error("Invalid argument passed to hook. Hooks should not be called with NaN in the dependency array. Hook index "+w+" in component "+U+" was called with NaN.")}}}}var P},s.__c=function(_,h){for(var c=0;c<r.length;c++){var p=r[c],k=p.type,v=He(p.__);if(k==="table"&&Se(v))console.error("Improper nesting of table. Your <table> should not have a table-node parent."+A(p)+`

`+S(p));else if(k!=="thead"&&k!=="tfoot"&&k!=="tbody"||v==="table"){if(k==="tr"&&v!=="thead"&&v!=="tfoot"&&v!=="tbody"&&v!=="table")console.error("Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot/table> parent."+A(p)+`

`+S(p));else if(k==="td"&&v!=="tr")console.error("Improper nesting of table. Your <td> should have a <tr> parent."+A(p)+`

`+S(p));else if(k==="th"&&v!=="tr")console.error("Improper nesting of table. Your <th> should have a <tr>."+A(p)+`

`+S(p));else if(k==="p"){var w=Te(p).filter(function(C){return _t.test(C)});w.length&&console.error("Improper nesting of paragraph. Your <p> should not have "+w.join(", ")+"as child-elements."+A(p)+`

`+S(p))}}else console.error("Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent."+A(p)+`

`+S(p))}r=[],f&&f(_,h)}}();function D(e){return`http://localhost:${e}`}l(D,"getUrl");var De=[{name:"angular",url:D(4200)},{name:"astro",url:D(6001)},{name:"lit",url:D(6010)},{name:"marko",url:D(6002)},{name:"next",url:D(6003)},{name:"nuxt2",url:D(6004)},{name:"nuxt3",url:D(6005)},{name:"qwik",url:D(6006)},{name:"solid",url:D(6008)},{name:"svelte",url:D(6009)},{name:"fresh",url:D(8e3)},{name:"gatsby",url:D(8001)},{name:"hydrogen",url:D(6011)},{name:"react",url:D(6012)},{name:"vue3",url:D(6013)}],Ie=[{name:"Hello World",url:"/"},{name:"Simple Todo",url:"/todo"},{name:"Dashboard",url:"/dashboard"}];var lt=`
  :root {
    /* Space */
    --s1: 5px;
    --s2: calc(var(--s1) * 2);
    --s3: calc(var(--s1) * 4);
    --gray-1: #eee;
    --gray-2: #bbb;
    --gray-3: #999;
    --gray-4: #666;
    --gray-5: #333;
    --border-gray: 1px solid var(--gray-2);
    --shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
    --shadow-2: 0 1px 10px rgba(0, 0, 0, 0.1);
    --round: 4px;
    --primary: rgb(26, 115, 232);
    --mobile: 640px;
    --font-medium: 400;
  }

  ul, ol {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    font-family: Avenir, Helvetica, sans-serif;
  }

  a {
    text-decoration: none;
  }
`,Oe=`<style>${lt}</style>`;function Ae(e){var t,n;function a(o){return{color:e.framework===o.name?"var(--primary)":"var(--gray-3)"}}l(a,"getStyleForFrameworkLink");function i(o){return{color:o.url===e.path?"var(--primary)":"var(--gray-3)"}}return l(i,"getStyleForExampleLink"),b(H,null,b("div",null,b("div",{dangerouslySetInnerHTML:{__html:Oe}}),b("div",{className:"div-42186008"},b("div",{className:"div-42186008-2"},(t=De)==null?void 0:t.map((o,u)=>b("a",{className:"a-42186008",key:u,href:o.url+(e.path||"/"),style:a(o)},o.text||o.name))),b("div",{className:"div-42186008-3"},(n=Ie)==null?void 0:n.map((o,u)=>b("a",{className:"a-42186008-2",key:u,href:o.url,style:i(o)},o.name))))),b("style",null,`.div-42186008 { 
background-color: var(--gray-1);
border-bottom: var(--border-gray);
display: flex;
padding: var(--s1);
margin-bottom: var(--s2); }@media screen and (max-width: 640px) { .div-42186008 { 
flex-direction: column; } }.div-42186008-2 { 
display: flex;
flex-wrap: wrap;
padding: var(--s1);
text-transform: capitalize; }@media screen and (max-width: 640px) { .div-42186008-2 { 
border-bottom: var(--border-gray);
justify-content: center; } }.a-42186008 { 
padding: var(--s1);
font-weight: var(--font-medium); }.a-42186008:hover { 
color: var(--gray-4); }.div-42186008-3 { 
display: flex;
flex-wrap: wrap;
text-transform: capitalize;
padding: var(--s1);
margin-left: auto;
justify-content: flex-end; }@media screen and (max-width: 640px) { .div-42186008-3 { 
margin-right: auto;
justify-content: center; } }.div-42186008-3:hover { 
color: var(--gray-4); }.a-42186008-2 { 
padding: var(--s1);
font-weight: var(--font-medium); }`))}l(Ae,"AppHeader");var ie,N,_e,Ue,le=0,Re=[],K=[],je=s.__b,Fe=s.__r,Le=s.diffed,Me=s.__c,We=s.unmount;function st(e,t){s.__h&&s.__h(N,e,le||t),le=0;var n=N.__H||(N.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:K}),n.__[e]}l(st,"d");function ue(e){return le=1,ut(ze,e)}l(ue,"h");function ut(e,t,n){var a=st(ie++,2);if(a.t=e,!a.__c&&(a.__=[n?n(t):ze(void 0,t),function(m){var f=a.__N?a.__N[0]:a.__[0],E=a.t(f,m);f!==E&&(a.__N=[E,a.__[1]],a.__c.setState({}))}],a.__c=N,!N.u)){var i=l(function(m,f,E){if(!a.__c.__H)return!0;var y=a.__c.__H.__.filter(function(x){return x.__c});if(y.every(function(x){return!x.__N}))return!o||o.call(this,m,f,E);var r=!1;return y.forEach(function(x){if(x.__N){var g=x.__[0];x.__=x.__N,x.__N=void 0,g!==x.__[0]&&(r=!0)}}),!(!r&&a.__c.props===m)&&(!o||o.call(this,m,f,E))},"f");N.u=!0;var o=N.shouldComponentUpdate,u=N.componentWillUpdate;N.componentWillUpdate=function(m,f,E){if(this.__e){var y=o;o=void 0,i(m,f,E),o=y}u&&u.call(this,m,f,E)},N.shouldComponentUpdate=i}return a.__N||a.__}l(ut,"s");function ct(){for(var e;e=Re.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Q),e.__H.__h.forEach(se),e.__H.__h=[]}catch(t){e.__H.__h=[],s.__e(t,e.__v)}}l(ct,"b");s.__b=function(e){N=null,je&&je(e)},s.__r=function(e){Fe&&Fe(e),ie=0;var t=(N=e.__c).__H;t&&(_e===N?(t.__h=[],N.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=K,n.__N=n.i=void 0})):(t.__h.forEach(Q),t.__h.forEach(se),t.__h=[],ie=0)),_e=N},s.diffed=function(e){Le&&Le(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Re.push(t)!==1&&Ue===s.requestAnimationFrame||((Ue=s.requestAnimationFrame)||pt)(ct)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==K&&(n.__=n.__V),n.i=void 0,n.__V=K})),_e=N=null},s.__c=function(e,t){t.some(function(n){try{n.__h.forEach(Q),n.__h=n.__h.filter(function(a){return!a.__||se(a)})}catch(a){t.some(function(i){i.__h&&(i.__h=[])}),t=[],s.__e(a,n.__v)}}),Me&&Me(e,t)},s.unmount=function(e){We&&We(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(a){try{Q(a)}catch(i){t=i}}),n.__H=void 0,t&&s.__e(t,n.__v))};var Ve=typeof requestAnimationFrame=="function";function pt(e){var t,n=l(function(){clearTimeout(a),Ve&&cancelAnimationFrame(t),setTimeout(e)},"r"),a=setTimeout(n,100);Ve&&(t=requestAnimationFrame(n))}l(pt,"j");function Q(e){var t=N,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),N=t}l(Q,"k");function se(e){var t=N;e.__c=e.__(),N=t}l(se,"w");function ze(e,t){return typeof t=="function"?t(e):t}l(ze,"B");function Be(e){return b(H,null,b("li",{className:"li-4b66fa34","data-index":e.index,style:{textDecoration:e.item.completed?"line-through":"none"}},b("input",{type:"checkbox",className:"input-4b66fa34",checked:e.item.completed,onInput:t=>{e.item.completed=t.target.checked}}),b("input",{className:"input-4b66fa34-2",value:e.item.text,onInput:t=>{e.item.text=t.target.value}})),b("style",null,`.li-4b66fa34 { 
padding: 10px;
border-bottom: var(--border-gray); }.input-4b66fa34 { 
border-color: var(--gray-4); }.input-4b66fa34-2 { 
all: unset; }`))}l(Be,"TodoItem");var ft=Object.defineProperty,dt=Object.defineProperties,ht=Object.getOwnPropertyDescriptors,$e=Object.getOwnPropertySymbols,mt=Object.prototype.hasOwnProperty,vt=Object.prototype.propertyIsEnumerable,qe=l((e,t,n)=>t in e?ft(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,"__defNormalProp"),yt=l((e,t)=>{for(var n in t||(t={}))mt.call(t,n)&&qe(e,n,t[n]);if($e)for(var n of $e(t))vt.call(t,n)&&qe(e,n,t[n]);return e},"__spreadValues"),gt=l((e,t)=>dt(e,ht(t)),"__spreadProps");function Ye(e){let[t,n]=ue(()=>[{text:"hello",completed:!1},{text:"world",completed:!1}]),[a,i]=ue(()=>"");function o(y){i(y.target.value)}l(o,"setItemName");function u(){n([...t,{text:a,completed:!1}]),i("")}l(u,"addItem");function m(){n([])}l(m,"clear");function f(){n(t.filter(y=>!y.completed))}l(f,"clearDone");function E(){n(t.map(y=>gt(yt({},y),{completed:!0})))}return l(E,"markAllDone"),b(H,null,b("div",{className:"div-167433d1"},b("div",{className:"div-167433d1-2"},b("form",{onSubmit:y=>{y.preventDefault(),u()}},b("input",{placeholder:"Add new item...",className:"input-167433d1",value:a,onInput:y=>o(y)}),b("button",{className:"button-167433d1"},"Add list item")),b("ul",{className:"ul-167433d1"},t?.map((y,r)=>b(Be,{key:r,item:y,index:r}))),t.length?b("div",{className:"div-167433d1-3"},b("button",{className:"button-167433d1-2",onClick:y=>m()},"Clear All"),b("button",{className:"button-167433d1-3",onClick:y=>f()},"Clear Done"),b("button",{className:"button-167433d1-4",onClick:y=>E()},"Mark all as done")):null)),b("style",null,`.div-167433d1 { 
padding: 10px;
display: flex;
flex-direction: column; }.div-167433d1-2 { 
margin: 0 auto;
width: 100%;
max-width: 800px; }.input-167433d1 { 
all: unset;
box-shadow: var(--shadow);
border-radius: var(--round);
width: 100%;
padding: var(--s2);
margin: var(--s1) 0; }.button-167433d1 { 
all: unset;
text-align: center;
background: var(--primary);
border-radius: var(--round);
width: 100%;
color: white;
font-weight: bold;
padding: var(--s1) var(--s2);
margin: var(--s2) 0; }.ul-167433d1 { 
box-shadow: var(--shadow);
border-radius: var(--round); }.div-167433d1-3 { 
display: flex; }.button-167433d1-2 { 
all: unset;
color: white;
background-color: var(--primary);
margin: var(--s1);
padding: var(--s2);
border-radius: var(--round); }.button-167433d1-3 { 
all: unset;
color: white;
background-color: var(--primary);
margin: var(--s1);
padding: var(--s2);
border-radius: var(--round); }.button-167433d1-4 { 
all: unset;
color: white;
background-color: var(--primary);
margin: var(--s1);
padding: var(--s2);
border-radius: var(--round); }`))}l(Ye,"ToDoApp");var bt=0;function q(e,t,n,a,i,o){var u,m,f={};for(m in t)m=="ref"?u=t[m]:f[m]=t[m];var E={type:e,props:f,key:n,ref:u,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--bt,__source:i,__self:o};if(typeof e=="function"&&(u=e.defaultProps))for(m in u)f[m]===void 0&&(f[m]=u[m]);return s.vnode&&s.vnode(E),E}l(q,"o");function Y(){return q("div",{children:[q(Ae,{framework:"ryo",path:"/todo"}),q(Ye,{})]})}l(Y,"Home");var z=void 0;document.getElementById("todo").innerHTML="";if(window.getData){let e=JSON.stringify(window.getData()),t=new window.framework.DESERIALIZE(e),n=b(Y,{data:t.fromJSON()}),a=b("span",{id:"todo"},n);if(z){let i=b(z,{id:"todo",Parent:z,Child:a},a);V(i,document.getElementById("root"))}else V(n,document.getElementById("todo"))}else if(z){let e=b(Y),t=b(z,{id:"todo",Parent:z,Child:e},e);V(t,document.getElementById("root"))}else{let e=b(Y);V(e,document.getElementById("todo"))}window.fetchParams=()=>{let e=window.location.pathname,t=new URLSearchParams(window.location.search),n={};for(let[a,i]of t.entries())n[a]=i;return n};})();
