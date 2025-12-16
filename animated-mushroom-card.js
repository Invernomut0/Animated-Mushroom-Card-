function e(e,t,n,a){var r,o=arguments.length,i=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o<3?r(i):o>3?r(t,n,i):r(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i}"function"==typeof SuppressedError&&SuppressedError;const t=globalThis,n=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),r=new WeakMap;let o=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(n&&void 0===e){const n=void 0!==t&&1===t.length;n&&(e=r.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&r.set(t,e))}return e}toString(){return this.cssText}};const i=(e,...t)=>{const n=1===e.length?e[0]:t.reduce((t,n,a)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[a+1],e[0]);return new o(n,e,a)},s=n?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return(e=>new o("string"==typeof e?e:e+"",void 0,a))(t)})(e):e,{is:l,defineProperty:c,getOwnPropertyDescriptor:m,getOwnPropertyNames:p,getOwnPropertySymbols:d,getPrototypeOf:h}=Object,g=globalThis,u=g.trustedTypes,f=u?u.emptyScript:"",b=g.reactiveElementPolyfillSupport,x=(e,t)=>e,v={toAttribute(e,t){switch(t){case Boolean:e=e?f:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=null!==e;break;case Number:n=null===e?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch(e){n=null}}return n}},y=(e,t)=>!l(e,t),w={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;let _=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=w){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),a=this.getPropertyDescriptor(e,n,t);void 0!==a&&c(this.prototype,e,a)}}static getPropertyDescriptor(e,t,n){const{get:a,set:r}=m(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:a,set(t){const o=a?.call(this);r?.call(this,t),this.requestUpdate(e,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??w}static _$Ei(){if(this.hasOwnProperty(x("elementProperties")))return;const e=h(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(x("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x("properties"))){const e=this.properties,t=[...p(e),...d(e)];for(const n of t)this.createProperty(n,e[n])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const n=this._$Eu(e,t);void 0!==n&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const e of n)t.unshift(s(e))}else void 0!==e&&t.push(s(e));return t}static _$Eu(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,a)=>{if(n)e.adoptedStyleSheets=a.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const n of a){const a=document.createElement("style"),r=t.litNonce;void 0!==r&&a.setAttribute("nonce",r),a.textContent=n.cssText,e.appendChild(a)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){const n=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,n);if(void 0!==a&&!0===n.reflect){const r=(void 0!==n.converter?.toAttribute?n.converter:v).toAttribute(t,n.type);this._$Em=e,null==r?this.removeAttribute(a):this.setAttribute(a,r),this._$Em=null}}_$AK(e,t){const n=this.constructor,a=n._$Eh.get(e);if(void 0!==a&&this._$Em!==a){const e=n.getPropertyOptions(a),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:v;this._$Em=a;const o=r.fromAttribute(t,e.type);this[a]=o??this._$Ej?.get(a)??o,this._$Em=null}}requestUpdate(e,t,n){if(void 0!==e){const a=this.constructor,r=this[e];if(n??=a.getPropertyOptions(e),!((n.hasChanged??y)(r,t)||n.useDefault&&n.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:a,wrapped:r},o){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??t??this[e]),!0!==r||void 0!==o)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===a&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,n]of e){const{wrapped:e}=n,a=this[t];!0!==e||this._$AL.has(t)||void 0===a||this.C(t,void 0,n,a)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[x("elementProperties")]=new Map,_[x("finalized")]=new Map,b?.({ReactiveElement:_}),(g.reactiveElementVersions??=[]).push("2.1.1");const $=globalThis,A=$.trustedTypes,k=A?A.createPolicy("lit-html",{createHTML:e=>e}):void 0,S="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,E="?"+C,P=`<${E}>`,O=document,M=()=>O.createComment(""),N=e=>null===e||"object"!=typeof e&&"function"!=typeof e,U=Array.isArray,T="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,D=/>/g,z=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,Y=/"/g,I=/^(?:script|style|textarea|title)$/i,L=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),B=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),q=new WeakMap,F=O.createTreeWalker(O,129);function W(e,t){if(!U(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(t):t}const X=(e,t)=>{const n=e.length-1,a=[];let r,o=2===t?"<svg>":3===t?"<math>":"",i=H;for(let t=0;t<n;t++){const n=e[t];let s,l,c=-1,m=0;for(;m<n.length&&(i.lastIndex=m,l=i.exec(n),null!==l);)m=i.lastIndex,i===H?"!--"===l[1]?i=R:void 0!==l[1]?i=D:void 0!==l[2]?(I.test(l[2])&&(r=RegExp("</"+l[2],"g")),i=z):void 0!==l[3]&&(i=z):i===z?">"===l[0]?(i=r??H,c=-1):void 0===l[1]?c=-2:(c=i.lastIndex-l[2].length,s=l[1],i=void 0===l[3]?z:'"'===l[3]?Y:j):i===Y||i===j?i=z:i===R||i===D?i=H:(i=z,r=void 0);const p=i===z&&e[t+1].startsWith("/>")?" ":"";o+=i===H?n+P:c>=0?(a.push(s),n.slice(0,c)+S+n.slice(c)+C+p):n+C+(-2===c?t:p)}return[W(e,o+(e[n]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),a]};class G{constructor({strings:e,_$litType$:t},n){let a;this.parts=[];let r=0,o=0;const i=e.length-1,s=this.parts,[l,c]=X(e,t);if(this.el=G.createElement(l,n),F.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(a=F.nextNode())&&s.length<i;){if(1===a.nodeType){if(a.hasAttributes())for(const e of a.getAttributeNames())if(e.endsWith(S)){const t=c[o++],n=a.getAttribute(e).split(C),i=/([.?@])?(.*)/.exec(t);s.push({type:1,index:r,name:i[2],strings:n,ctor:"."===i[1]?ee:"?"===i[1]?te:"@"===i[1]?ne:Q}),a.removeAttribute(e)}else e.startsWith(C)&&(s.push({type:6,index:r}),a.removeAttribute(e));if(I.test(a.tagName)){const e=a.textContent.split(C),t=e.length-1;if(t>0){a.textContent=A?A.emptyScript:"";for(let n=0;n<t;n++)a.append(e[n],M()),F.nextNode(),s.push({type:2,index:++r});a.append(e[t],M())}}}else if(8===a.nodeType)if(a.data===E)s.push({type:2,index:r});else{let e=-1;for(;-1!==(e=a.data.indexOf(C,e+1));)s.push({type:7,index:r}),e+=C.length-1}r++}}static createElement(e,t){const n=O.createElement("template");return n.innerHTML=e,n}}function Z(e,t,n=e,a){if(t===B)return t;let r=void 0!==a?n._$Co?.[a]:n._$Cl;const o=N(t)?void 0:t._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(e),r._$AT(e,n,a)),void 0!==a?(n._$Co??=[])[a]=r:n._$Cl=r),void 0!==r&&(t=Z(e,r._$AS(e,t.values),r,a)),t}class J{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,a=(e?.creationScope??O).importNode(t,!0);F.currentNode=a;let r=F.nextNode(),o=0,i=0,s=n[0];for(;void 0!==s;){if(o===s.index){let t;2===s.type?t=new K(r,r.nextSibling,this,e):1===s.type?t=new s.ctor(r,s.name,s.strings,this,e):6===s.type&&(t=new ae(r,this,e)),this._$AV.push(t),s=n[++i]}o!==s?.index&&(r=F.nextNode(),o++)}return F.currentNode=O,a}p(e){let t=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class K{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,a){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Z(this,e,t),N(e)?e===V||null==e||""===e?(this._$AH!==V&&this._$AR(),this._$AH=V):e!==this._$AH&&e!==B&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>U(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==V&&N(this._$AH)?this._$AA.nextSibling.data=e:this.T(O.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:n}=e,a="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=G.createElement(W(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===a)this._$AH.p(t);else{const e=new J(a,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=q.get(e.strings);return void 0===t&&q.set(e.strings,t=new G(e)),t}k(e){U(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,a=0;for(const r of e)a===t.length?t.push(n=new K(this.O(M()),this.O(M()),this,this.options)):n=t[a],n._$AI(r),a++;a<t.length&&(this._$AR(n&&n._$AB.nextSibling,a),t.length=a)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,a,r){this.type=1,this._$AH=V,this._$AN=void 0,this.element=e,this.name=t,this._$AM=a,this.options=r,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=V}_$AI(e,t=this,n,a){const r=this.strings;let o=!1;if(void 0===r)e=Z(this,e,t,0),o=!N(e)||e!==this._$AH&&e!==B,o&&(this._$AH=e);else{const a=e;let i,s;for(e=r[0],i=0;i<r.length-1;i++)s=Z(this,a[n+i],t,i),s===B&&(s=this._$AH[i]),o||=!N(s)||s!==this._$AH[i],s===V?e=V:e!==V&&(e+=(s??"")+r[i+1]),this._$AH[i]=s}o&&!a&&this.j(e)}j(e){e===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}let ee=class extends Q{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===V?void 0:e}};class te extends Q{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==V)}}let ne=class extends Q{constructor(e,t,n,a,r){super(e,t,n,a,r),this.type=5}_$AI(e,t=this){if((e=Z(this,e,t,0)??V)===B)return;const n=this._$AH,a=e===V&&n!==V||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==V&&(n===V||a);a&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}};class ae{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Z(this,e)}}const re=$.litHtmlPolyfillSupport;re?.(G,K),($.litHtmlVersions??=[]).push("3.3.1");const oe=globalThis;let ie=class extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,n)=>{const a=n?.renderBefore??t;let r=a._$litPart$;if(void 0===r){const e=n?.renderBefore??null;a._$litPart$=r=new K(t.insertBefore(M(),e),e,void 0,n??{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}};ie._$litElement$=!0,ie.finalized=!0,oe.litElementHydrateSupport?.({LitElement:ie});const se=oe.litElementPolyfillSupport;se?.({LitElement:ie}),(oe.litElementVersions??=[]).push("4.2.1");const le=e=>(t,n)=>{void 0!==n?n.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},ce={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:y},me=(e=ce,t,n)=>{const{kind:a,metadata:r}=n;let o=globalThis.litPropertyMetadata.get(r);if(void 0===o&&globalThis.litPropertyMetadata.set(r,o=new Map),"setter"===a&&((e=Object.create(e)).wrapped=!0),o.set(n.name,e),"accessor"===a){const{name:a}=n;return{set(n){const r=t.get.call(this);t.set.call(this,n),this.requestUpdate(a,r,e)},init(t){return void 0!==t&&this.C(a,void 0,e,t),t}}}if("setter"===a){const{name:a}=n;return function(n){const r=this[a];t.call(this,n),this.requestUpdate(a,r,e)}}throw Error("Unsupported decorator location: "+a)};function pe(e){return(t,n)=>"object"==typeof n?me(e,t,n):((e,t,n)=>{const a=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),a?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function de(e){return pe({...e,state:!0,attribute:!1})}const he=1,ge=e=>(...t)=>({_$litDirective$:e,values:t});let ue=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};const fe=ge(class extends ue{constructor(e){if(super(e),e.type!==he||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e)));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const n=e.element.classList;for(const e of this.st)e in t||(n.remove(e),this.st.delete(e));for(const e in t){const a=!!t[e];a===this.st.has(e)||this.nt?.has(e)||(a?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return B}}),be="important",xe=" !"+be,ve=ge(class extends ue{constructor(e){if(super(e),e.type!==he||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{const a=e[n];return null==a?t:t+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${a};`},"")}update(e,[t]){const{style:n}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(const e of this.ft)null==t[e]&&(this.ft.delete(e),e.includes("-")?n.removeProperty(e):n[e]=null);for(const e in t){const a=t[e];if(null!=a){this.ft.add(e);const t="string"==typeof a&&a.endsWith(xe);e.includes("-")||t?n.setProperty(e,t?a.slice(0,-11):a,t?be:""):n[e]=a}}return B}});var ye,we,_e=function(e,t){return $e(t).format(e)},$e=function(e){return new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric"})};!function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(ye||(ye={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(we||(we={}));var Ae=function(e){if(e.time_format===we.language||e.time_format===we.system){var t=e.time_format===we.language?e.language:void 0,n=(new Date).toLocaleString(t);return n.includes("AM")||n.includes("PM")}return e.time_format===we.am_pm},ke=function(e){return new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric",hour:Ae(e)?"numeric":"2-digit",minute:"2-digit",hour12:Ae(e)})},Se=function(e){return new Intl.DateTimeFormat(e.language,{hour:"numeric",minute:"2-digit",hour12:Ae(e)})};function Ce(){return(Ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Ee(e){return e.substr(0,e.indexOf("."))}var Pe=function(e,t,n){var a=t?function(e){switch(e.number_format){case ye.comma_decimal:return["en-US","en"];case ye.decimal_comma:return["de","es","it"];case ye.space_comma:return["fr","sv","cs"];case ye.system:return;default:return e.language}}(t):void 0;if(Number.isNaN=Number.isNaN||function e(t){return"number"==typeof t&&e(t)},(null==t?void 0:t.number_format)!==ye.none&&!Number.isNaN(Number(e))&&Intl)try{return new Intl.NumberFormat(a,Oe(e,n)).format(Number(e))}catch(t){return console.error(t),new Intl.NumberFormat(void 0,Oe(e,n)).format(Number(e))}return"string"==typeof e?e:function(e,t){return void 0===t&&(t=2),Math.round(e*Math.pow(10,t))/Math.pow(10,t)}(e,null==n?void 0:n.maximumFractionDigits).toString()+("currency"===(null==n?void 0:n.style)?" "+n.currency:"")},Oe=function(e,t){var n=Ce({maximumFractionDigits:2},t);if("string"!=typeof e)return n;if(!t||!t.minimumFractionDigits&&!t.maximumFractionDigits){var a=e.indexOf(".")>-1?e.split(".")[1].length:0;n.minimumFractionDigits=a,n.maximumFractionDigits=a}return n},Me=function(e,t,n,a){var r=t.state;if("unknown"===r||"unavailable"===r)return e("state.default."+r);if(function(e){return!!e.attributes.unit_of_measurement||!!e.attributes.state_class}(t)){if("monetary"===t.attributes.device_class)try{return Pe(r,n,{style:"currency",currency:t.attributes.unit_of_measurement})}catch(e){}return Pe(r,n)+(t.attributes.unit_of_measurement?" "+t.attributes.unit_of_measurement:"")}var o,i=function(e){return Ee(e.entity_id)}(t);return"input_datetime"===i?t.attributes.has_date&&t.attributes.has_time?function(e,t){return ke(t).format(e)}(o=new Date(t.attributes.year,t.attributes.month-1,t.attributes.day,t.attributes.hour,t.attributes.minute),n):t.attributes.has_date?(o=new Date(t.attributes.year,t.attributes.month-1,t.attributes.day),_e(o,n)):t.attributes.has_time?((o=new Date).setHours(t.attributes.hour,t.attributes.minute),function(e,t){return Se(t).format(e)}(o,n)):t.state:"humidifier"===i&&"on"===r&&t.attributes.humidity?t.attributes.humidity+" %":"counter"===i||"number"===i||"input_number"===i?Pe(r,n):t.attributes.device_class&&e("component."+i+".state."+t.attributes.device_class+"."+r)||e("component."+i+".state._."+r)||r},Ne=["closed","locked","off"],Ue=function(e,t,n,a){a=a||{},n=null==n?{}:n;var r=new Event(t,{bubbles:void 0===a.bubbles||a.bubbles,cancelable:Boolean(a.cancelable),composed:void 0===a.composed||a.composed});return r.detail=n,e.dispatchEvent(r),r},Te={alert:"mdi:alert",automation:"mdi:playlist-play",calendar:"mdi:calendar",camera:"mdi:video",climate:"mdi:thermostat",configurator:"mdi:settings",conversation:"mdi:text-to-speech",device_tracker:"mdi:account",fan:"mdi:fan",group:"mdi:google-circles-communities",history_graph:"mdi:chart-line",homeassistant:"mdi:home-assistant",homekit:"mdi:home-automation",image_processing:"mdi:image-filter-frames",input_boolean:"mdi:drawing",input_datetime:"mdi:calendar-clock",input_number:"mdi:ray-vertex",input_select:"mdi:format-list-bulleted",input_text:"mdi:textbox",light:"mdi:lightbulb",mailbox:"mdi:mailbox",notify:"mdi:comment-alert",person:"mdi:account",plant:"mdi:flower",proximity:"mdi:apple-safari",remote:"mdi:remote",scene:"mdi:google-pages",script:"mdi:file-document",sensor:"mdi:eye",simple_alarm:"mdi:bell",sun:"mdi:white-balance-sunny",switch:"mdi:flash",timer:"mdi:timer",updater:"mdi:cloud-upload",vacuum:"mdi:robot-vacuum",water_heater:"mdi:thermometer",weblink:"mdi:open-in-new"};function He(e,t){if(e in Te)return Te[e];switch(e){case"alarm_control_panel":switch(t){case"armed_home":return"mdi:bell-plus";case"armed_night":return"mdi:bell-sleep";case"disarmed":return"mdi:bell-outline";case"triggered":return"mdi:bell-ring";default:return"mdi:bell"}case"binary_sensor":return t&&"off"===t?"mdi:radiobox-blank":"mdi:checkbox-marked-circle";case"cover":return"closed"===t?"mdi:window-closed":"mdi:window-open";case"lock":return t&&"unlocked"===t?"mdi:lock-open":"mdi:lock";case"media_player":return t&&"off"!==t&&"idle"!==t?"mdi:cast-connected":"mdi:cast";case"zwave":switch(t){case"dead":return"mdi:emoticon-dead";case"sleeping":return"mdi:sleep";case"initializing":return"mdi:timer-sand";default:return"mdi:z-wave"}default:return console.warn("Unable to find icon for domain "+e+" ("+t+")"),"mdi:bookmark"}}var Re=function(e){Ue(window,"haptic",e)},De=function(e,t){return function(e,t,n){void 0===n&&(n=!0);var a,r=Ee(t),o="group"===r?"homeassistant":r;switch(r){case"lock":a=n?"unlock":"lock";break;case"cover":a=n?"open_cover":"close_cover";break;default:a=n?"turn_on":"turn_off"}return e.callService(o,a,{entity_id:t})}(e,t,Ne.includes(e.states[t].state))},ze=function(e,t,n,a){if(a||(a={action:"more-info"}),!a.confirmation||a.confirmation.exemptions&&a.confirmation.exemptions.some(function(e){return e.user===t.user.id})||(Re("warning"),confirm(a.confirmation.text||"Are you sure you want to "+a.action+"?")))switch(a.action){case"more-info":(n.entity||n.camera_image)&&Ue(e,"hass-more-info",{entityId:n.entity?n.entity:n.camera_image});break;case"navigate":a.navigation_path&&function(e,t,n){void 0===n&&(n=!1),n?history.replaceState(null,"",t):history.pushState(null,"",t),Ue(window,"location-changed",{replace:n})}(0,a.navigation_path);break;case"url":a.url_path&&window.open(a.url_path);break;case"toggle":n.entity&&(De(t,n.entity),Re("success"));break;case"call-service":if(!a.service)return void Re("failure");var r=a.service.split(".",2);t.callService(r[0],r[1],a.service_data,a.target),Re("success");break;case"fire-dom-event":Ue(e,"ll-custom",a)}};function je(e){return void 0!==e&&"none"!==e.action}var Ye={humidity:"mdi:water-percent",illuminance:"mdi:brightness-5",temperature:"mdi:thermometer",pressure:"mdi:gauge",power:"mdi:flash",signal_strength:"mdi:wifi"},Ie={binary_sensor:function(e,t){var n="off"===e;switch(null==t?void 0:t.attributes.device_class){case"battery":return n?"mdi:battery":"mdi:battery-outline";case"battery_charging":return n?"mdi:battery":"mdi:battery-charging";case"cold":return n?"mdi:thermometer":"mdi:snowflake";case"connectivity":return n?"mdi:server-network-off":"mdi:server-network";case"door":return n?"mdi:door-closed":"mdi:door-open";case"garage_door":return n?"mdi:garage":"mdi:garage-open";case"power":case"plug":return n?"mdi:power-plug-off":"mdi:power-plug";case"gas":case"problem":case"safety":case"tamper":return n?"mdi:check-circle":"mdi:alert-circle";case"smoke":return n?"mdi:check-circle":"mdi:smoke";case"heat":return n?"mdi:thermometer":"mdi:fire";case"light":return n?"mdi:brightness-5":"mdi:brightness-7";case"lock":return n?"mdi:lock":"mdi:lock-open";case"moisture":return n?"mdi:water-off":"mdi:water";case"motion":return n?"mdi:walk":"mdi:run";case"occupancy":case"presence":return n?"mdi:home-outline":"mdi:home";case"opening":return n?"mdi:square":"mdi:square-outline";case"running":return n?"mdi:stop":"mdi:play";case"sound":return n?"mdi:music-note-off":"mdi:music-note";case"update":return n?"mdi:package":"mdi:package-up";case"vibration":return n?"mdi:crop-portrait":"mdi:vibrate";case"window":return n?"mdi:window-closed":"mdi:window-open";default:return n?"mdi:radiobox-blank":"mdi:checkbox-marked-circle"}},cover:function(e){var t="closed"!==e.state;switch(e.attributes.device_class){case"garage":return t?"mdi:garage-open":"mdi:garage";case"door":return t?"mdi:door-open":"mdi:door-closed";case"shutter":return t?"mdi:window-shutter-open":"mdi:window-shutter";case"blind":return t?"mdi:blinds-open":"mdi:blinds";case"window":return t?"mdi:window-open":"mdi:window-closed";default:return He("cover",e.state)}},sensor:function(e){var t=e.attributes.device_class;if(t&&t in Ye)return Ye[t];if("battery"===t){var n=Number(e.state);if(isNaN(n))return"mdi:battery-unknown";var a=10*Math.round(n/10);return a>=100?"mdi:battery":a<=0?"mdi:battery-alert":"hass:battery-"+a}var r=e.attributes.unit_of_measurement;return"°C"===r||"°F"===r?"mdi:thermometer":He("sensor")},input_datetime:function(e){return e.attributes.has_date?e.attributes.has_time?He("input_datetime"):"mdi:calendar":"mdi:clock"}};const Le={animation:"breathe",icon_color:"state",show_state:!0,show_name:!0,layout:"horizontal",fill_container:!1,primary_info:"name",secondary_info:"state",icon_type:"icon",tap_action:{action:"toggle"},hold_action:{action:"more-info"}},Be=["general","climate","lights","security","appliances","sensors","media","network"],Ve={none:{name:"none",label:"None",category:"general",keyframes:"",shapeAnimation:"none"},breathe:{name:"breathe",label:"Breathe",category:"general",keyframes:"\n      @keyframes breathe {\n        0%   { transform: scale(1); opacity: 0.8; }\n        50%  { transform: scale(1.08); opacity: 1; }\n        100% { transform: scale(1); opacity: 0.8; }\n      }\n    ",shapeAnimation:"breathe 2s ease-in-out infinite"},pulse:{name:"pulse",label:"Pulse",category:"general",keyframes:"\n      @keyframes pulse {\n        0%   { transform: scale(1); }\n        50%  { transform: scale(1.1); }\n        100% { transform: scale(1); }\n      }\n    ",shapeAnimation:"pulse 1.5s ease-in-out infinite"},shake:{name:"shake",label:"Shake",category:"general",keyframes:"\n      @keyframes shake {\n        0%, 100% { transform: translateX(0); }\n        10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }\n        20%, 40%, 60%, 80% { transform: translateX(2px); }\n      }\n    ",shapeAnimation:"shake 0.5s ease-in-out infinite"},bounce:{name:"bounce",label:"Bounce",category:"general",keyframes:"\n      @keyframes bounce {\n        0%, 100% { transform: translateY(0); }\n        50% { transform: translateY(-8px); }\n      }\n    ",shapeAnimation:"bounce 1s ease-in-out infinite"},spin:{name:"spin",label:"Spin",category:"general",keyframes:"\n      @keyframes spin {\n        0% { transform: rotate(0deg); }\n        100% { transform: rotate(360deg); }\n      }\n    ",shapeAnimation:"spin 2s linear infinite"},"ring-breathe":{name:"ring-breathe",label:"Ring Breathe",category:"general",keyframes:"\n      @keyframes ring-breathe {\n        0%   { box-shadow: 0 0 0 0 rgba(var(--rgb-icon-color), 0.9); }\n        70%  { box-shadow: 0 0 0 14px rgba(var(--rgb-icon-color), 0.0); }\n        100% { box-shadow: 0 0 0 0 rgba(var(--rgb-icon-color), 0.0); }\n      }\n    ",shapeAnimation:"ring-breathe 1.8s ease-out infinite"},glow:{name:"glow",label:"Glow",category:"general",keyframes:"\n      @keyframes glow {\n        0% {\n          box-shadow: 0 0 10px 3px rgba(var(--rgb-icon-color), 0.6),\n                      0 0 20px 8px rgba(var(--rgb-icon-color), 0.3);\n        }\n        50% {\n          box-shadow: 0 0 18px 6px rgba(var(--rgb-icon-color), 0.9),\n                      0 0 32px 12px rgba(var(--rgb-icon-color), 0.4);\n        }\n        100% {\n          box-shadow: 0 0 10px 3px rgba(var(--rgb-icon-color), 0.6),\n                      0 0 20px 8px rgba(var(--rgb-icon-color), 0.3);\n        }\n      }\n    ",shapeAnimation:"glow 2s ease-in-out infinite"},"plug-on":{name:"plug-on",label:"Plug On",category:"appliances",keyframes:"\n      @keyframes plug-on {\n        0%   { transform: scale(1); }\n        25%  { transform: scale(1.05) translateY(-1px); }\n        50%  { transform: scale(1.08) translateY(-2px); }\n        75%  { transform: scale(1.04) translateY(-1px); }\n        100% { transform: scale(1); }\n      }\n      @keyframes plug-glow {\n        0% {\n          box-shadow: 0 0 10px 3px rgba(var(--rgb-icon-color), 0.6),\n                      0 0 20px 8px rgba(var(--rgb-icon-color), 0.3);\n        }\n        50% {\n          box-shadow: 0 0 18px 6px rgba(var(--rgb-icon-color), 0.9),\n                      0 0 32px 12px rgba(var(--rgb-icon-color), 0.4);\n        }\n        100% {\n          box-shadow: 0 0 10px 3px rgba(var(--rgb-icon-color), 0.6),\n                      0 0 20px 8px rgba(var(--rgb-icon-color), 0.3);\n        }\n      }\n      @keyframes plug-arcs {\n        0% {\n          box-shadow: -10px -6px 0 -4px rgba(var(--rgb-icon-color), 0.0),\n                       12px 4px 0 -4px rgba(var(--rgb-icon-color), 0.0);\n        }\n        25% {\n          box-shadow: -10px -6px 0 -4px rgba(var(--rgb-icon-color), 0.7),\n                       12px 4px 0 -4px rgba(var(--rgb-icon-color), 0.4);\n        }\n        50% {\n          box-shadow: -6px 2px 0 -4px rgba(var(--rgb-icon-color), 0.3),\n                      10px -8px 0 -4px rgba(var(--rgb-icon-color), 0.6);\n        }\n        75% {\n          box-shadow: -8px -4px 0 -4px rgba(var(--rgb-icon-color), 0.5),\n                       8px 6px 0 -4px rgba(var(--rgb-icon-color), 0.4);\n        }\n        100% {\n          box-shadow: -10px -6px 0 -4px rgba(var(--rgb-icon-color), 0.0),\n                       12px 4px 0 -4px rgba(var(--rgb-icon-color), 0.0);\n        }\n      }\n    ",shapeAnimation:"plug-on 3s ease-in-out infinite",beforeAnimation:"plug-glow 3s ease-in-out infinite",afterAnimation:"plug-arcs 3s linear infinite"},"fan-spin":{name:"fan-spin",label:"Fan Spin",category:"climate",keyframes:"\n      @keyframes fan-spin {\n        0% { transform: rotate(0deg) scale(1); filter: drop-shadow(0 0 3px rgba(var(--rgb-icon-color), 0.9)); }\n        25% { transform: rotate(90deg) scale(1.02); }\n        50% { transform: rotate(180deg) scale(1.05); }\n        75% { transform: rotate(270deg) scale(1.02); }\n        100% { transform: rotate(360deg) scale(1); filter: drop-shadow(0 0 5px rgba(var(--rgb-icon-color), 1)); }\n      }\n      @keyframes fan-warp {\n        0% {\n          box-shadow: 0 0 0 0 rgba(var(--rgb-icon-color), 0.7),\n                      0 0 0 0 rgba(var(--rgb-icon-color), 0.25);\n        }\n        40% {\n          box-shadow: 0 0 0 8px rgba(var(--rgb-icon-color), 0.4),\n                      0 0 24px 6px rgba(var(--rgb-icon-color), 0.25);\n        }\n        100% {\n          box-shadow: 0 0 0 18px rgba(var(--rgb-icon-color), 0.0),\n                      0 0 40px 12px rgba(var(--rgb-icon-color), 0.0);\n        }\n      }\n    ",shapeAnimation:"fan-spin 1s linear infinite",beforeAnimation:"fan-warp 1.4s ease-in-out infinite"},"fan-idle":{name:"fan-idle",label:"Fan Idle",category:"climate",keyframes:"\n      @keyframes fan-idle {\n        0%   { transform: rotate(-6deg); }\n        50%  { transform: rotate(6deg); }\n        100% { transform: rotate(-6deg); }\n      }\n    ",shapeAnimation:"fan-idle 2.4s ease-in-out infinite"},"lock-secure":{name:"lock-secure",label:"Lock Secure",category:"security",keyframes:"\n      @keyframes lock-secure {\n        0%   { transform: rotate(0deg) scale(1); }\n        15%  { transform: rotate(-12deg) scale(1.02); }\n        30%  { transform: rotate(2deg) scale(1.03); }\n        40%  { transform: rotate(0deg) scale(1); }\n        100% { transform: rotate(0deg) scale(1); }\n      }\n      @keyframes lock-glow {\n        0% {\n          box-shadow: 0 0 25px 8px rgba(var(--rgb-icon-color), 1),\n                      0 0 55px 18px rgba(var(--rgb-icon-color), 0.7),\n                      0 0 95px 35px rgba(var(--rgb-icon-color), 0.45);\n        }\n        50% {\n          box-shadow: 0 0 35px 12px rgba(var(--rgb-icon-color), 1),\n                      0 0 70px 25px rgba(var(--rgb-icon-color), 0.8),\n                      0 0 120px 45px rgba(var(--rgb-icon-color), 0.5);\n        }\n        100% {\n          box-shadow: 0 0 25px 8px rgba(var(--rgb-icon-color), 1),\n                      0 0 55px 18px rgba(var(--rgb-icon-color), 0.7),\n                      0 0 95px 35px rgba(var(--rgb-icon-color), 0.45);\n        }\n      }\n    ",shapeAnimation:"lock-secure 2s ease-in-out infinite",beforeAnimation:"lock-glow 2.2s ease-in-out infinite"},"lock-open":{name:"lock-open",label:"Lock Open",category:"security",keyframes:"\n      @keyframes lock-open {\n        0%   { transform: rotate(10deg); }\n        50%  { transform: rotate(18deg); }\n        100% { transform: rotate(10deg); }\n      }\n    ",shapeAnimation:"lock-open 1.5s ease-in-out infinite"},doorbell:{name:"doorbell",label:"Doorbell Ring",category:"security",keyframes:"\n      @keyframes doorbell-ring {\n        0% {\n          transform: scale(1.05);\n          box-shadow: 0 0 0 0 rgba(var(--rgb-icon-color), 1),\n                      0 0 0 0 rgba(var(--rgb-icon-color), 0.8),\n                      0 0 0 0 rgba(var(--rgb-icon-color), 0.4);\n        }\n        30% {\n          transform: scale(0.95);\n          box-shadow: 0 0 0 8px rgba(var(--rgb-icon-color), 0.6),\n                      0 0 0 16px rgba(var(--rgb-icon-color), 0.3),\n                      0 0 0 24px rgba(var(--rgb-icon-color), 0.1);\n        }\n        100% {\n          transform: scale(1.05);\n          box-shadow: 0 0 0 0 rgba(var(--rgb-icon-color), 0),\n                      0 0 0 0 rgba(var(--rgb-icon-color), 0),\n                      0 0 0 0 rgba(var(--rgb-icon-color), 0);\n        }\n      }\n    ",shapeAnimation:"doorbell-ring 0.9s ease-out infinite"},flame:{name:"flame",label:"Flame",category:"climate",keyframes:"\n      @keyframes flame-core {\n        0%   { transform: translateY(0) scale(1); filter: brightness(1.1) hue-rotate(0deg); }\n        12%  { transform: translateY(-2px) scale(1.05); filter: brightness(1.4) hue-rotate(-10deg); }\n        25%  { transform: translateY(1px) scale(0.98); filter: brightness(0.9) hue-rotate(8deg); }\n        40%  { transform: translateY(-3px) scale(1.07); filter: brightness(1.5) hue-rotate(-18deg); }\n        55%  { transform: translateY(0) scale(1.02); filter: brightness(1.2) hue-rotate(10deg); }\n        70%  { transform: translateY(-1px) scale(1.04); filter: brightness(1.35) hue-rotate(-6deg); }\n        85%  { transform: translateY(2px) scale(0.97); filter: brightness(0.95) hue-rotate(6deg); }\n        100% { transform: translateY(0) scale(1); filter: brightness(1.1) hue-rotate(0deg); }\n      }\n      @keyframes flame-layers {\n        0% {\n          box-shadow: 0 0 14px 8px rgba(var(--rgb-icon-color), 0.8),\n                      0 -10px 28px 4px rgba(255, 200, 0, 0.6);\n        }\n        50% {\n          box-shadow: 0 0 18px 12px rgba(var(--rgb-icon-color), 1),\n                      0 -14px 35px 8px rgba(255, 220, 0, 0.8);\n        }\n        100% {\n          box-shadow: 0 0 14px 8px rgba(var(--rgb-icon-color), 0.8),\n                      0 -10px 28px 4px rgba(255, 200, 0, 0.6);\n        }\n      }\n      @keyframes ember-pulse {\n        0% {\n          box-shadow: 0 0 30px 10px rgba(var(--rgb-icon-color), 0.25),\n                      0 0 60px 20px rgba(255, 120, 0, 0.15);\n        }\n        50% {\n          box-shadow: 0 0 50px 18px rgba(var(--rgb-icon-color), 0.5),\n                      0 0 90px 35px rgba(255, 150, 0, 0.25);\n        }\n        100% {\n          box-shadow: 0 0 30px 10px rgba(var(--rgb-icon-color), 0.25),\n                      0 0 60px 20px rgba(255, 120, 0, 0.15);\n        }\n      }\n    ",shapeAnimation:"flame-core 1.4s ease-in-out infinite",beforeAnimation:"flame-layers 1.8s ease-in-out infinite",afterAnimation:"ember-pulse 2.4s ease-in-out infinite"},washer:{name:"washer",label:"Washer Spin",category:"appliances",keyframes:"\n      @keyframes wash-cycle {\n        0%   { transform: translateY(0) rotate(-8deg) scale(1); box-shadow: 0 0 0 0 rgba(var(--rgb-icon-color), 0.5); }\n        20%  { transform: translateY(-3px) rotate(8deg) scale(1.02); box-shadow: 0 0 8px 4px rgba(var(--rgb-icon-color), 0.3); }\n        40%  { transform: translateY(2px) rotate(-6deg) scale(1.01); }\n        60%  { transform: translateY(-2px) rotate(6deg) scale(1.02); }\n        80%  { transform: translateY(1px) rotate(-4deg) scale(1.01); }\n        100% { transform: translateY(0) rotate(-8deg) scale(1); box-shadow: 0 0 0 0 rgba(var(--rgb-icon-color), 0.2); }\n      }\n      @keyframes washer-chaos {\n        0% { transform: rotate(0deg) scale(1); }\n        15%  { transform: rotate(18deg) translate(1px, -1px) scale(1.02); }\n        30%  { transform: rotate(60deg) translate(-2px, 2px) scale(0.98); }\n        45%  { transform: rotate(120deg) translate(3px, -2px) scale(1.03); }\n        60%  { transform: rotate(190deg) translate(-1px, 3px) scale(0.97); }\n        75%  { transform: rotate(260deg) translate(1px, -3px) scale(1.04); }\n        90%  { transform: rotate(330deg) translate(-2px, 1px) scale(1.01); }\n        100% { transform: rotate(360deg) translate(0, 0) scale(1); }\n      }\n    ",shapeAnimation:"wash-cycle 1s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite"},robot:{name:"robot",label:"Robot Vacuum",category:"appliances",keyframes:"\n      @keyframes robo-path {\n        0%   { transform: translate(0, 0) scale(1); }\n        10%  { transform: translate(6px, -2px) rotate(8deg) scale(0.98); }\n        20%  { transform: translate(10px, 4px) rotate(-6deg) scale(1); }\n        30%  { transform: translate(4px, 8px) rotate(-14deg) scale(1.02); }\n        40%  { transform: translate(-6px, 10px) rotate(4deg) scale(0.98); }\n        50%  { transform: translate(-10px, 2px) rotate(16deg) scale(1.03); }\n        60%  { transform: translate(-6px, -6px) rotate(-8deg) scale(1); }\n        70%  { transform: translate(2px, -10px) rotate(10deg) scale(0.97); }\n        80%  { transform: translate(8px, -6px) rotate(-6deg) scale(1.02); }\n        90%  { transform: translate(4px, -2px) rotate(4deg) scale(1.01); }\n        100% { transform: translate(0, 0) rotate(0deg) scale(1); }\n      }\n      @keyframes robo-dock {\n        0%   { transform: translateY(0); }\n        50%  { transform: translateY(-2px); }\n        100% { transform: translateY(0); }\n      }\n    ",shapeAnimation:"robo-path 3.4s linear infinite"},tv:{name:"tv",label:"TV RGB",category:"media",keyframes:"\n      @keyframes tv-rgb {\n        0%   { filter: hue-rotate(0deg); box-shadow: 0 0 15px 5px rgba(var(--rgb-icon-color), 0.6); }\n        33%  { filter: hue-rotate(120deg); box-shadow: 0 0 20px 8px rgba(var(--rgb-icon-color), 0.8); }\n        66%  { filter: hue-rotate(240deg); box-shadow: 0 0 15px 5px rgba(var(--rgb-icon-color), 0.6); }\n        100% { filter: hue-rotate(360deg); box-shadow: 0 0 15px 5px rgba(var(--rgb-icon-color), 0.6); }\n      }\n    ",shapeAnimation:"tv-rgb 1.4s linear infinite"},speaker:{name:"speaker",label:"Speaker Pulse",category:"media",keyframes:"\n      @keyframes speaker-main {\n        0%   { transform: scale(1); }\n        50%  { transform: scale(1.06); }\n        100% { transform: scale(1); }\n      }\n      @keyframes speaker-bars {\n        0% {\n          box-shadow: -10px 6px 0 -5px rgba(var(--rgb-icon-color), 0.4),\n                      0 2px 0 -5px rgba(var(--rgb-icon-color), 0.6),\n                      10px 6px 0 -5px rgba(var(--rgb-icon-color), 0.4);\n        }\n        50% {\n          box-shadow: -10px 0 0 -5px rgba(var(--rgb-icon-color), 0.8),\n                      0 -4px 0 -5px rgba(var(--rgb-icon-color), 1),\n                      10px 0 0 -5px rgba(var(--rgb-icon-color), 0.8);\n        }\n        100% {\n          box-shadow: -10px 6px 0 -5px rgba(var(--rgb-icon-color), 0.4),\n                      0 2px 0 -5px rgba(var(--rgb-icon-color), 0.6),\n                      10px 6px 0 -5px rgba(var(--rgb-icon-color), 0.4);\n        }\n      }\n      @keyframes bass-pulse {\n        0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(var(--rgb-icon-color), 0.8); }\n        10% { transform: scale(1.08); box-shadow: 0 0 10px 4px rgba(var(--rgb-icon-color), 0.8); }\n        25% { transform: scale(1.03); box-shadow: 0 0 6px 2px rgba(var(--rgb-icon-color), 0.5); }\n        50% { transform: scale(1.06); box-shadow: 0 0 12px 5px rgba(var(--rgb-icon-color), 0.6); }\n        100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(var(--rgb-icon-color), 0.0); }\n      }\n    ",shapeAnimation:"speaker-main 0.8s ease-in-out infinite",beforeAnimation:"speaker-bars 0.8s ease-in-out infinite"},wifi:{name:"wifi",label:"WiFi Waves",category:"network",keyframes:"\n      @keyframes wifi-waves {\n        0% {\n          box-shadow: 0 0 0 0 rgba(var(--rgb-icon-color), 0.9),\n                      0 0 0 0 rgba(var(--rgb-icon-color), 0.5),\n                      0 0 0 0 rgba(var(--rgb-icon-color), 0.2);\n        }\n        30% {\n          box-shadow: 0 0 0 4px rgba(var(--rgb-icon-color), 0.6),\n                      0 0 0 10px rgba(var(--rgb-icon-color), 0.35),\n                      0 0 0 0 rgba(var(--rgb-icon-color), 0.2);\n        }\n        60% {\n          box-shadow: 0 0 0 8px rgba(var(--rgb-icon-color), 0.3),\n                      0 0 0 16px rgba(var(--rgb-icon-color), 0.15),\n                      0 0 0 24px rgba(var(--rgb-icon-color), 0.05);\n        }\n        100% {\n          box-shadow: 0 0 0 12px rgba(var(--rgb-icon-color), 0),\n                      0 0 0 20px rgba(var(--rgb-icon-color), 0),\n                      0 0 0 28px rgba(var(--rgb-icon-color), 0);\n        }\n      }\n    ",shapeAnimation:"wifi-waves 1.7s ease-out infinite"},motion:{name:"motion",label:"Motion Sensor",category:"sensors",keyframes:"\n      @keyframes motion-active {\n        0%   { transform: scale(1); }\n        50%  { transform: scale(1.06); }\n        100% { transform: scale(1); }\n      }\n      @keyframes motion-cone {\n        0% { box-shadow: 0 -20px 14px -16px rgba(var(--rgb-icon-color), 0.0); }\n        25% { box-shadow: 8px -16px 14px -16px rgba(var(--rgb-icon-color), 0.5); }\n        50% { box-shadow: 0 -20px 14px -12px rgba(var(--rgb-icon-color), 0.8); }\n        75% { box-shadow: -8px -16px 14px -16px rgba(var(--rgb-icon-color), 0.5); }\n        100% { box-shadow: 0 -20px 14px -16px rgba(var(--rgb-icon-color), 0.0); }\n      }\n      @keyframes motion-pulse {\n        0% {\n          box-shadow: 0 0 0 0 rgba(var(--rgb-icon-color), 0.9),\n                      0 0 0 0 rgba(var(--rgb-icon-color), 0.5);\n        }\n        50% {\n          box-shadow: 0 0 0 8px rgba(var(--rgb-icon-color), 0.4),\n                      0 0 0 16px rgba(var(--rgb-icon-color), 0.2);\n        }\n        100% {\n          box-shadow: 0 0 0 16px rgba(var(--rgb-icon-color), 0),\n                      0 0 0 24px rgba(var(--rgb-icon-color), 0);\n        }\n      }\n    ",shapeAnimation:"motion-active 1.3s linear infinite",beforeAnimation:"motion-cone 1.6s linear infinite",afterAnimation:"motion-pulse 1.3s ease-out infinite"},lamp:{name:"lamp",label:"Lamp Glow",category:"lights",keyframes:"\n      @keyframes lamp-glow {\n        0% { filter: brightness(1); box-shadow: 0 0 6px 2px rgba(var(--rgb-icon-color), 0.6); }\n        20% { filter: brightness(1.25); box-shadow: 0 0 14px 6px rgba(var(--rgb-icon-color), 0.9); }\n        30% { filter: brightness(0.9); box-shadow: 0 0 3px 1px rgba(var(--rgb-icon-color), 0.4); }\n        50% { filter: brightness(1.3); box-shadow: 0 0 16px 8px rgba(var(--rgb-icon-color), 1); }\n        80% { filter: brightness(1.05); box-shadow: 0 0 8px 3px rgba(var(--rgb-icon-color), 0.7); }\n        100% { filter: brightness(1); box-shadow: 0 0 6px 2px rgba(var(--rgb-icon-color), 0.6); }\n      }\n    ",shapeAnimation:"lamp-glow 1.4s ease-in-out infinite"},printer:{name:"printer",label:"3D Printer",category:"appliances",keyframes:"\n      @keyframes printer-sequence {\n        0%   { transform: translate(-5px, 4px) scale(0.96); }\n        15%  { transform: translate(5px, 4px) scale(0.96); }\n        16%  { transform: translate(5px, 2px) scale(0.98); }\n        30%  { transform: translate(-5px, 2px) scale(0.98); }\n        31%  { transform: translate(-5px, 0px) scale(1); }\n        45%  { transform: translate(5px, 0px) scale(1); }\n        46%  { transform: translate(5px, -2px) scale(1.02); }\n        60%  { transform: translate(-5px, -2px) scale(1.02); }\n        75%  { transform: translate(0, -4px) scale(1.04); }\n        100% { transform: translate(0, 0) scale(1); }\n      }\n    ",shapeAnimation:"printer-sequence 2.3s linear infinite"},irrigation:{name:"irrigation",label:"Irrigation",category:"appliances",keyframes:"\n      @keyframes irrig-ultra {\n        0%   { transform: translateY(0) scale(1); }\n        25%  { transform: translateY(-2px) scale(1.02); }\n        50%  { transform: translateY(-4px) scale(1.03); }\n        75%  { transform: translateY(-2px) scale(1.02); }\n        100% { transform: translateY(0) scale(1); }\n      }\n      @keyframes irrig-heads {\n        0% {\n          box-shadow: -10px 10px 0 0 rgba(var(--rgb-icon-color), 0),\n                      0 10px 0 0 rgba(var(--rgb-icon-color), 0),\n                      10px 10px 0 0 rgba(var(--rgb-icon-color), 0);\n        }\n        50% {\n          box-shadow: -10px 20px 0 0 rgba(var(--rgb-icon-color), 0.6),\n                      0 25px 0 0 rgba(var(--rgb-icon-color), 0.8),\n                      10px 20px 0 0 rgba(var(--rgb-icon-color), 0.6);\n        }\n        100% {\n          box-shadow: -10px 30px 0 0 rgba(var(--rgb-icon-color), 0),\n                      0 35px 0 0 rgba(var(--rgb-icon-color), 0),\n                      10px 30px 0 0 rgba(var(--rgb-icon-color), 0);\n        }\n      }\n    ",shapeAnimation:"irrig-ultra 1.5s ease-in-out infinite",beforeAnimation:"irrig-heads 1.6s ease-out infinite"},projector:{name:"projector",label:"Projector",category:"media",keyframes:"\n      @keyframes proj-ultra {\n        0%   { transform: translateX(0) scale(1); }\n        25%  { transform: translateX(1px) scale(1.02); }\n        50%  { transform: translateX(0) scale(1.03); }\n        75%  { transform: translateX(-1px) scale(1.02); }\n        100% { transform: translateX(0) scale(1); }\n      }\n      @keyframes proj-beam {\n        0% { opacity: 0.7; filter: blur(1px); transform: scaleX(1) scaleY(1); }\n        50% { opacity: 1; filter: blur(0.5px); transform: scaleX(1.15) scaleY(1.05); }\n        100% { opacity: 0.7; filter: blur(1px); transform: scaleX(1) scaleY(1); }\n      }\n    ",shapeAnimation:"proj-ultra 1.5s ease-in-out infinite",beforeAnimation:"proj-beam 1.7s ease-in-out infinite"},controller:{name:"controller",label:"Controller",category:"media",keyframes:"\n      @keyframes controller-rumble {\n        0% { transform: translate(0, 0) rotate(0deg); }\n        25% { transform: translate(-2px, 1px) rotate(-3deg); }\n        50% { transform: translate(2px, -1px) rotate(3deg); }\n        75% { transform: translate(-1px, 2px) rotate(-1deg); }\n        100% { transform: translate(0, 0) rotate(0deg); }\n      }\n      @keyframes controller-glow {\n        0% {\n          box-shadow: 0 0 30px 10px rgba(var(--rgb-icon-color), 1),\n                      0 0 70px 22px rgba(var(--rgb-icon-color), 0.7),\n                      0 0 120px 42px rgba(var(--rgb-icon-color), 0.5);\n        }\n        50% {\n          box-shadow: 0 0 40px 15px rgba(var(--rgb-icon-color), 1),\n                      0 0 90px 30px rgba(var(--rgb-icon-color), 0.8),\n                      0 0 150px 55px rgba(var(--rgb-icon-color), 0.6);\n        }\n        100% {\n          box-shadow: 0 0 30px 10px rgba(var(--rgb-icon-color), 1),\n                      0 0 70px 22px rgba(var(--rgb-icon-color), 0.7),\n                      0 0 120px 42px rgba(var(--rgb-icon-color), 0.5);\n        }\n      }\n    ",shapeAnimation:"controller-rumble 0.3s ease-in-out infinite",beforeAnimation:"controller-glow 2s ease-in-out infinite"},"temp-cold":{name:"temp-cold",label:"Temperature Cold",category:"sensors",keyframes:"\n      @keyframes temp-cold-breathe {\n        0%   { transform: scale(0.96); }\n        50%  { transform: scale(1.03); }\n        100% { transform: scale(0.96); }\n      }\n      @keyframes temp-cold-glow {\n        0% { box-shadow: 0 0 20px 0 rgba(80,180,255, 0.6), 0 0 34px 6px rgba(80,180,255, 0.55); }\n        50% { box-shadow: 0 0 30px 4px rgba(80,180,255, 0.95), 0 0 50px 10px rgba(80,180,255, 0.85); }\n        100% { box-shadow: 0 0 20px 0 rgba(80,180,255, 0.6), 0 0 34px 6px rgba(80,180,255, 0.55); }\n      }\n    ",shapeAnimation:"temp-cold-breathe 3.8s ease-in-out infinite",beforeAnimation:"temp-cold-glow 3.4s ease-in-out infinite"},"temp-warm":{name:"temp-warm",label:"Temperature Warm",category:"sensors",keyframes:"\n      @keyframes temp-warm-pulse {\n        0%   { transform: scale(1); }\n        50%  { transform: scale(1.07); }\n        100% { transform: scale(1); }\n      }\n      @keyframes temp-warm-glow {\n        0% { box-shadow: 0 0 22px 0 rgba(255,140,40, 0.65), 0 0 36px 6px rgba(255,140,40, 0.7); }\n        50% { box-shadow: 0 0 34px 6px rgba(255,140,40, 1), 0 0 58px 14px rgba(255,140,40, 0.9); }\n        100% { box-shadow: 0 0 22px 0 rgba(255,140,40, 0.65), 0 0 36px 6px rgba(255,140,40, 0.7); }\n      }\n    ",shapeAnimation:"temp-warm-pulse 2.4s ease-in-out infinite",beforeAnimation:"temp-warm-glow 2.2s ease-in-out infinite"},"temp-hot":{name:"temp-hot",label:"Temperature Hot",category:"sensors",keyframes:"\n      @keyframes temp-hot-shimmer {\n        0%   { transform: scale(1); filter: blur(0); }\n        50%  { transform: scale(1.08); filter: blur(0.6px); }\n        100% { transform: scale(1); filter: blur(0); }\n      }\n      @keyframes temp-hot-glow {\n        0% { box-shadow: 0 0 24px 0 rgba(255,40,40, 0.7), 0 0 40px 8px rgba(255,40,40, 0.75); }\n        50% { box-shadow: 0 0 38px 8px rgba(255,40,40, 1), 0 0 68px 18px rgba(255,40,40, 0.95); }\n        100% { box-shadow: 0 0 24px 0 rgba(255,40,40, 0.7), 0 0 40px 8px rgba(255,40,40, 0.75); }\n      }\n    ",shapeAnimation:"temp-hot-shimmer 2s ease-in-out infinite",beforeAnimation:"temp-hot-glow 1.8s ease-in-out infinite"},"air-good":{name:"air-good",label:"Air Quality Good",category:"sensors",keyframes:"\n      @keyframes aq-good-breathe {\n        0%   { transform: scale(0.98); }\n        50%  { transform: scale(1.04); }\n        100% { transform: scale(0.98); }\n      }\n      @keyframes aq-good-glow {\n        0% { box-shadow: 0 0 18px 0 rgba(40,200,120, 0.55), 0 0 30px 4px rgba(40,200,120, 0.6); }\n        50% { box-shadow: 0 0 24px 4px rgba(40,200,120, 0.9), 0 0 40px 10px rgba(40,200,120, 0.85); }\n        100% { box-shadow: 0 0 18px 0 rgba(40,200,120, 0.55), 0 0 30px 4px rgba(40,200,120, 0.6); }\n      }\n    ",shapeAnimation:"aq-good-breathe 3.2s ease-in-out infinite",beforeAnimation:"aq-good-glow 2.9s ease-in-out infinite"},"air-poor":{name:"air-poor",label:"Air Quality Poor",category:"sensors",keyframes:"\n      @keyframes aq-poor-pulse {\n        0%   { transform: scale(0.99); }\n        50%  { transform: scale(1.06); }\n        100% { transform: scale(0.99); }\n      }\n      @keyframes aq-poor-glow {\n        0% { box-shadow: 0 0 22px 0 rgba(255,170,60, 0.65), 0 0 34px 4px rgba(255,170,60, 0.75); }\n        50% { box-shadow: 0 0 30px 4px rgba(255,170,60, 1), 0 0 50px 12px rgba(255,170,60, 0.9); }\n        100% { box-shadow: 0 0 22px 0 rgba(255,170,60, 0.65), 0 0 34px 4px rgba(255,170,60, 0.75); }\n      }\n    ",shapeAnimation:"aq-poor-pulse 2.8s ease-in-out infinite",beforeAnimation:"aq-poor-glow 2.5s ease-in-out infinite"},"door-open":{name:"door-open",label:"Door Open",category:"security",keyframes:"\n      @keyframes door-soft-open {\n        0%   { transform: rotate(0deg); }\n        40%  { transform: rotate(-9deg); }\n        70%  { transform: rotate(-6deg); }\n        100% { transform: rotate(0deg); }\n      }\n      @keyframes door-soft-glow {\n        0% {\n          box-shadow: 0 0 20px 0 rgba(244, 67, 54, 0.7),\n                      0 0 40px 6px rgba(244, 67, 54, 0.6),\n                      0 0 80px 14px rgba(244, 67, 54, 0.4);\n        }\n        50% {\n          box-shadow: 0 0 30px 4px rgba(244, 67, 54, 0.9),\n                      0 0 60px 12px rgba(244, 67, 54, 0.75),\n                      0 0 100px 20px rgba(244, 67, 54, 0.5);\n        }\n        100% {\n          box-shadow: 0 0 20px 0 rgba(244, 67, 54, 0.7),\n                      0 0 40px 6px rgba(244, 67, 54, 0.6),\n                      0 0 80px 14px rgba(244, 67, 54, 0.4);\n        }\n      }\n    ",shapeAnimation:"door-soft-open 1.7s ease-in-out infinite",beforeAnimation:"door-soft-glow 2.5s ease-in-out infinite"},siren:{name:"siren",label:"Siren Alert",category:"security",keyframes:"\n      @keyframes siren-alert {\n        0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.8); }\n        10% { transform: scale(1.1) rotate(-5deg); box-shadow: 0 0 20px 8px rgba(255, 0, 0, 0.8); }\n        20% { transform: scale(1) rotate(5deg); box-shadow: 0 0 0 0 rgba(255, 0, 0, 0); }\n        30% { transform: scale(1.1) rotate(-5deg); box-shadow: 0 0 20px 8px rgba(255, 0, 0, 0.8); }\n        40% { transform: scale(1) rotate(0deg); box-shadow: 0 0 0 0 rgba(255, 0, 0, 0); }\n        100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 0, 0, 0); }\n      }\n    ",shapeAnimation:"siren-alert 1s ease-in-out infinite"},disposal:{name:"disposal",label:"Garbage Disposal",category:"appliances",keyframes:"\n      @keyframes disposal-shake {\n        0%, 100% { transform: translate(0, 0) rotate(0deg); }\n        10% { transform: translate(-2px, 1px) rotate(-2deg); }\n        20% { transform: translate(2px, -1px) rotate(2deg); }\n        30% { transform: translate(-1px, 2px) rotate(-1deg); }\n        40% { transform: translate(1px, -2px) rotate(1deg); }\n        50% { transform: translate(-2px, -1px) rotate(-2deg); }\n        60% { transform: translate(2px, 1px) rotate(2deg); }\n        70% { transform: translate(-1px, -2px) rotate(-1deg); }\n        80% { transform: translate(1px, 2px) rotate(1deg); }\n        90% { transform: translate(-2px, 0px) rotate(0deg); }\n      }\n      @keyframes disposal-pulse {\n        0% { box-shadow: inset 0 0 0 0 rgba(var(--rgb-icon-color), 0.4); }\n        50% { box-shadow: inset 0 0 10px 4px rgba(var(--rgb-icon-color), 0.6); }\n        100% { box-shadow: inset 0 0 0 0 rgba(var(--rgb-icon-color), 0.4); }\n      }\n    ",shapeAnimation:"disposal-shake 0.3s ease-in-out infinite",afterAnimation:"disposal-pulse 1.5s ease-in-out infinite"},pump:{name:"pump",label:"Water Pump",category:"appliances",keyframes:"\n      @keyframes pump-spin {\n        0% { transform: rotate(0deg); }\n        100% { transform: rotate(360deg); }\n      }\n      @keyframes pump-shake {\n        0% { transform: translate(0.5px, 0.5px); }\n        100% { transform: translate(-0.5px, -0.5px); }\n      }\n      @keyframes pump-ripple {\n        0% { transform: scale(1); opacity: 0.8; border-width: 2px; }\n        100% { transform: scale(2.5); opacity: 0; border-width: 0px; }\n      }\n    ",shapeAnimation:"pump-shake 0.1s ease-in-out infinite alternate",afterAnimation:"pump-ripple 1.5s ease-out infinite"},purifier:{name:"purifier",label:"Air Purifier",category:"climate",keyframes:"\n      @keyframes air-ripple {\n        0% { transform: scale(1); opacity: 0.8; box-shadow: 0 0 0 0 rgba(var(--rgb-icon-color), 0.4); }\n        100% { transform: scale(2.5); opacity: 0; box-shadow: 0 0 20px 20px rgba(var(--rgb-icon-color), 0); }\n      }\n      @keyframes motor-breath {\n        0%   { transform: scale(1); }\n        50%  { transform: scale(0.95); opacity: 0.9; }\n        100% { transform: scale(1); }\n      }\n    ",shapeAnimation:"motor-breath 3s ease-in-out infinite",beforeAnimation:"air-ripple 2s infinite ease-out"},server:{name:"server",label:"Server Activity",category:"network",keyframes:"\n      @keyframes hdd-blink {\n        0%   { opacity: 0; }\n        25%  { opacity: 1; }\n        50%  { opacity: 0; }\n        75%  { opacity: 1; }\n        90%  { opacity: 0; }\n        100% { opacity: 1; }\n      }\n      @keyframes network-pulse {\n        0% { transform: scale(1); opacity: 0.3; }\n        50% { transform: scale(1.03); opacity: 0.6; }\n        100% { transform: scale(1); opacity: 0.3; }\n      }\n    ",shapeAnimation:"network-pulse 1.5s ease-in-out infinite",beforeAnimation:"hdd-blink 0.5s steps(2, start) infinite"},ac:{name:"ac",label:"AC Unit",category:"climate",keyframes:"\n      @keyframes ac-flow {\n        0% { transform: translateY(0); }\n        50% { transform: translateY(-3px); }\n        100% { transform: translateY(0); }\n      }\n      @keyframes ac-cold {\n        0% { box-shadow: 0 10px 15px -5px rgba(100, 200, 255, 0.6); }\n        50% { box-shadow: 0 15px 25px -5px rgba(100, 200, 255, 0.9); }\n        100% { box-shadow: 0 10px 15px -5px rgba(100, 200, 255, 0.6); }\n      }\n    ",shapeAnimation:"ac-flow 2s ease-in-out infinite",afterAnimation:"ac-cold 2s ease-in-out infinite"}},qe={red:{name:"red",label:"Red",rgb:"244, 67, 54"},pink:{name:"pink",label:"Pink",rgb:"233, 30, 99"},purple:{name:"purple",label:"Purple",rgb:"156, 39, 176"},"deep-purple":{name:"deep-purple",label:"Deep Purple",rgb:"103, 58, 183"},indigo:{name:"indigo",label:"Indigo",rgb:"63, 81, 181"},blue:{name:"blue",label:"Blue",rgb:"33, 150, 243"},"light-blue":{name:"light-blue",label:"Light Blue",rgb:"3, 169, 244"},cyan:{name:"cyan",label:"Cyan",rgb:"0, 188, 212"},teal:{name:"teal",label:"Teal",rgb:"0, 150, 136"},green:{name:"green",label:"Green",rgb:"76, 175, 80"},"light-green":{name:"light-green",label:"Light Green",rgb:"139, 195, 74"},lime:{name:"lime",label:"Lime",rgb:"205, 220, 57"},yellow:{name:"yellow",label:"Yellow",rgb:"255, 235, 59"},amber:{name:"amber",label:"Amber",rgb:"255, 193, 7"},orange:{name:"orange",label:"Orange",rgb:"255, 152, 0"},"deep-orange":{name:"deep-orange",label:"Deep Orange",rgb:"255, 87, 34"},brown:{name:"brown",label:"Brown",rgb:"121, 85, 72"},grey:{name:"grey",label:"Grey",rgb:"158, 158, 158"},"blue-grey":{name:"blue-grey",label:"Blue Grey",rgb:"96, 125, 139"},white:{name:"white",label:"White",rgb:"255, 255, 255"},disabled:{name:"disabled",label:"Disabled",rgb:"189, 189, 189"},state:{name:"state",label:"State Color",rgb:"var(--rgb-state-entity)"}};console.info("%c ANIMATED-MUSHROOM-CARD %c v1.0.0 ","color: white; background: #7c4dff; font-weight: bold;","color: #7c4dff; background: white; font-weight: bold;"),window.customCards=window.customCards||[],window.customCards.push({type:"animated-mushroom-card",name:"Animated Mushroom Card",description:"A Mushroom-style animated entity card with customizable animations and colors",preview:!0,documentationURL:"https://github.com/invernomut0/animated-mushroom-card"});let Fe=class extends ie{static async getConfigElement(){return await Promise.resolve().then(function(){return Xe}),document.createElement("animated-mushroom-card-editor")}static getStubConfig(e){const t=Object.keys(e.states),n=t.find(e=>"light"===Ee(e))||t[0];return{type:"custom:animated-mushroom-card",entity:n,animation:"breathe",icon_color:"amber"}}setConfig(e){if(!e.entity)throw new Error("You must define an entity");this._config={...Le,...e}}getCardSize(){return 1}shouldUpdate(e){if(e.has("_config"))return!0;if(e.has("hass")&&this._config){const t=e.get("hass");if(t){const e=this._config.entity;return t.states[e]!==this.hass.states[e]}}return!0}_handleAction(e){this.hass&&this._config&&e.detail.action&&function(e,t,n,a){var r;"double_tap"===a&&n.double_tap_action?r=n.double_tap_action:"hold"===a&&n.hold_action?r=n.hold_action:"tap"===a&&n.tap_action&&(r=n.tap_action),ze(e,t,n,r)}(this,this.hass,this._config,e.detail.action)}_getColorRgb(){const e=this._config.icon_color||"state";if("state"===e){const e=this.hass.states[this._config.entity];if(e){const t=Ee(this._config.entity),n=e.state;if("on"===n||"home"===n||"playing"===n)return qe.amber.rgb;if("off"===n||"not_home"===n||"paused"===n||"idle"===n)return qe.grey.rgb;if("unavailable"===n||"unknown"===n)return qe.disabled.rgb;if("light"===t&&e.attributes.rgb_color){const t=e.attributes.rgb_color;return`${t[0]}, ${t[1]}, ${t[2]}`}}return qe.amber.rgb}return e.startsWith("#")?function(e){const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?`${parseInt(t[1],16)}, ${parseInt(t[2],16)}, ${parseInt(t[3],16)}`:qe.grey.rgb}(e):function(e){const t=qe[e];return t?t.rgb:e.match(/^\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}$/)?e:qe.grey.rgb}(e)}_shouldAnimate(){const e=this.hass.states[this._config.entity];if(!e)return!1;const t=this._config.animate_on_state;if(!t){const t=e.state;return["on","playing","home","open","unlocked","active"].includes(t)}return e.state===t}_getAnimation(){const e=this._config.animation||"breathe";return Ve[e]||Ve.breathe}render(){if(!this._config||!this.hass)return V;const e=this.hass.states[this._config.entity];if(!e)return L`
        <ha-card>
          <div class="warning">Entity not found: ${this._config.entity}</div>
        </ha-card>
      `;const t=this._config.name||e.attributes.friendly_name||this._config.entity,n=this._config.icon||function(e){if(!e)return"mdi:bookmark";if(e.attributes.icon)return e.attributes.icon;var t=Ee(e.entity_id);return t in Ie?Ie[t](e):He(t,e.state)}(e),a=Me(this.hass.localize,e,this.hass.locale),r=this._shouldAnimate(),o=this._getAnimation(),i=this._getColorRgb(),s=this._config.layout||"horizontal",l=!1!==this._config.show_name,c=!1!==this._config.show_state,m={"fill-container":!0===this._config.fill_container},p={"icon-container":!0,animating:r&&"none"!==o.name},d={shape:!0,active:r},h={"--rgb-icon-color":i};return r&&"none"!==o.name&&(h["--shape-animation"]=o.shapeAnimation,o.beforeAnimation&&(h["--before-animation"]=o.beforeAnimation),o.afterAnimation&&(h["--after-animation"]=o.afterAnimation)),L`
      <ha-card class=${fe(m)}>
        <style>
          ${o.keyframes}
        </style>
        <div class="card-content ${s}">
          <div 
            class=${fe(p)}
            style=${ve(h)}
            @action=${this._handleAction}
            .actionHandler=${this._actionHandler()}
          >
            <div class=${fe(d)}>
              <ha-icon .icon=${n}></ha-icon>
            </div>
          </div>
          <div class="info">
            ${l?L`<span class="name">${t}</span>`:V}
            ${c?L`<span class="state">${a}</span>`:V}
          </div>
        </div>
      </ha-card>
    `}_actionHandler(){return{hasHold:je(this._config.hold_action),hasDoubleClick:je(this._config.double_tap_action)}}static get styles(){return i`
      :host {
        --icon-size: 42px;
        --shape-size: 42px;
        --shape-border-radius: 50%;
        --card-padding: 12px;
      }

      ha-card {
        height: 100%;
        box-sizing: border-box;
        padding: var(--card-padding);
        display: flex;
        flex-direction: column;
        justify-content: center;
        cursor: pointer;
        outline: none;
        transition: transform 180ms ease-in-out, box-shadow 180ms ease-in-out;
      }

      ha-card:hover {
        transform: scale(1.02);
      }

      ha-card.fill-container {
        height: 100%;
      }

      .card-content {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .card-content.horizontal {
        flex-direction: row;
      }

      .card-content.vertical {
        flex-direction: column;
        text-align: center;
      }

      .icon-container {
        position: relative;
        flex-shrink: 0;
      }

      .shape {
        position: relative;
        width: var(--shape-size);
        height: var(--shape-size);
        border-radius: var(--shape-border-radius);
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(var(--rgb-icon-color), 0.2);
        transition: background-color 280ms ease-in-out;
        transform-origin: center center;
      }

      .shape.active {
        background-color: rgba(var(--rgb-icon-color), 0.25);
      }

      .animating .shape {
        animation: var(--shape-animation, none);
      }

      .shape::before,
      .shape::after {
        content: '';
        position: absolute;
        inset: -4px;
        border-radius: inherit;
        pointer-events: none;
      }

      .animating .shape::before {
        animation: var(--before-animation, none);
      }

      .animating .shape::after {
        animation: var(--after-animation, none);
      }

      .shape ha-icon {
        --mdc-icon-size: 24px;
        color: rgb(var(--rgb-icon-color));
        transition: color 280ms ease-in-out;
      }

      .info {
        display: flex;
        flex-direction: column;
        min-width: 0;
        flex: 1;
      }

      .card-content.vertical .info {
        align-items: center;
      }

      .name {
        font-size: 14px;
        font-weight: 500;
        line-height: 1.2;
        color: var(--primary-text-color);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .state {
        font-size: 12px;
        font-weight: 400;
        line-height: 1.2;
        color: var(--secondary-text-color);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-top: 2px;
      }

      .warning {
        padding: 16px;
        color: var(--error-color);
        text-align: center;
      }
    `}};e([pe({attribute:!1})],Fe.prototype,"hass",void 0),e([de()],Fe.prototype,"_config",void 0),Fe=e([le("animated-mushroom-card")],Fe);let We=class extends ie{setConfig(e){this._config=e}_valueChanged(e){if(!this._config||!this.hass)return;const t=e.target,n=t.configValue;if(!n)return;let a;if(a=void 0!==t.checked?t.checked:e.detail?.value??t.value,""===a){const e={...this._config};delete e[n],this._config=e}else this._config={...this._config,[n]:a};Ue(this,"config-changed",{config:this._config})}_getAnimationsByCategory(){const e=new Map;for(const t of Be){const n=Object.values(Ve).filter(e=>e.category===t).map(e=>({value:e.name,label:e.label}));n.length>0&&e.set(t,n)}return e}_getColorOptions(){return Object.values(qe).map(e=>({value:e.name,label:e.label}))}_getCategoryLabel(e){return{general:"🔄 General",climate:"🌡️ Climate",lights:"💡 Lights",security:"🔒 Security",appliances:"🔌 Appliances",sensors:"📡 Sensors",media:"🎬 Media",network:"🌐 Network"}[e]||e}render(){if(!this.hass||!this._config)return V;const e=this._getAnimationsByCategory(),t=this._getColorOptions();return L`
      <div class="card-config">
        <!-- Entity Selector -->
        <div class="config-row entity-row">
          <ha-selector
            .hass=${this.hass}
            .selector=${{entity:{}}}
            .value=${this._config.entity||""}
            .label=${"Entity (Required)"}
            .required=${!0}
            @value-changed=${e=>{const t=e.detail?.value;void 0!==t&&(this._config={...this._config,entity:t},Ue(this,"config-changed",{config:this._config}))}}
          ></ha-selector>
        </div>

        <!-- Name -->
        <div class="config-row">
          <ha-textfield
            .label=${"Name (Optional)"}
            .value=${this._config.name||""}
            .configValue=${"name"}
            @input=${this._valueChanged}
          ></ha-textfield>
        </div>

        <!-- Icon -->
        <div class="config-row">
          <ha-icon-picker
            .hass=${this.hass}
            .value=${this._config.icon||""}
            .label=${"Icon (Optional)"}
            @value-changed=${e=>{const t=e.detail?.value;this._config={...this._config,icon:t||void 0},Ue(this,"config-changed",{config:this._config})}}
          ></ha-icon-picker>
        </div>

        <!-- Animation Dropdown with Categories -->
        <div class="config-row">
          <label class="section-label">Animation</label>
          <ha-select
            .value=${this._config.animation||"breathe"}
            .configValue=${"animation"}
            @selected=${this._valueChanged}
            @closed=${e=>e.stopPropagation()}
            fixedMenuPosition
            naturalMenuWidth
          >
            ${Array.from(e.entries()).map(([e,t])=>L`
              <mwc-list-item disabled class="category-header">
                ${this._getCategoryLabel(e)}
              </mwc-list-item>
              ${t.map(e=>L`
                <mwc-list-item .value=${e.value}>
                  ${e.label}
                </mwc-list-item>
              `)}
            `)}
          </ha-select>
        </div>

        <!-- Color Dropdown -->
        <div class="config-row">
          <label class="section-label">Icon Color</label>
          <ha-select
            .value=${this._config.icon_color||"state"}
            .configValue=${"icon_color"}
            @selected=${this._valueChanged}
            @closed=${e=>e.stopPropagation()}
            fixedMenuPosition
            naturalMenuWidth
          >
            ${t.map(e=>L`
              <mwc-list-item .value=${e.value}>
                <span class="color-option">
                  <span 
                    class="color-preview" 
                    style="background-color: rgb(${qe[e.value]?.rgb||"158, 158, 158"})"
                  ></span>
                  ${e.label}
                </span>
              </mwc-list-item>
            `)}
          </ha-select>
        </div>

        <!-- Custom Hex Color -->
        <div class="config-row">
          <ha-textfield
            .label=${"Custom Color (Hex, e.g. #FF5722)"}
            .value=${this._config.icon_color?.startsWith("#")?this._config.icon_color:""}
            .configValue=${"icon_color"}
            @input=${this._valueChanged}
            placeholder="#FF5722"
          ></ha-textfield>
        </div>

        <!-- Animate On State -->
        <div class="config-row">
          <label class="section-label">Animate on State</label>
          <ha-select
            .value=${this._config.animate_on_state||""}
            .configValue=${"animate_on_state"}
            @selected=${this._valueChanged}
            @closed=${e=>e.stopPropagation()}
            fixedMenuPosition
            naturalMenuWidth
          >
            <mwc-list-item value="">Auto-detect (on, playing, home, open)</mwc-list-item>
            <mwc-list-item disabled class="category-header">Common States</mwc-list-item>
            <mwc-list-item value="on">On</mwc-list-item>
            <mwc-list-item value="off">Off</mwc-list-item>
            <mwc-list-item value="playing">Playing</mwc-list-item>
            <mwc-list-item value="paused">Paused</mwc-list-item>
            <mwc-list-item value="idle">Idle</mwc-list-item>
            <mwc-list-item disabled class="category-header">Presence</mwc-list-item>
            <mwc-list-item value="home">Home</mwc-list-item>
            <mwc-list-item value="not_home">Away</mwc-list-item>
            <mwc-list-item disabled class="category-header">Binary Sensors</mwc-list-item>
            <mwc-list-item value="open">Open</mwc-list-item>
            <mwc-list-item value="closed">Closed</mwc-list-item>
            <mwc-list-item value="locked">Locked</mwc-list-item>
            <mwc-list-item value="unlocked">Unlocked</mwc-list-item>
            <mwc-list-item value="detected">Detected</mwc-list-item>
            <mwc-list-item disabled class="category-header">Climate</mwc-list-item>
            <mwc-list-item value="heating">Heating</mwc-list-item>
            <mwc-list-item value="cooling">Cooling</mwc-list-item>
            <mwc-list-item value="heat_cool">Heat/Cool</mwc-list-item>
            <mwc-list-item disabled class="category-header">Vacuum</mwc-list-item>
            <mwc-list-item value="cleaning">Cleaning</mwc-list-item>
            <mwc-list-item value="docked">Docked</mwc-list-item>
            <mwc-list-item value="returning">Returning</mwc-list-item>
            <mwc-list-item disabled class="category-header">Media</mwc-list-item>
            <mwc-list-item value="standby">Standby</mwc-list-item>
            <mwc-list-item value="buffering">Buffering</mwc-list-item>
          </ha-select>
        </div>

        <!-- Layout -->
        <div class="config-row">
          <label class="section-label">Layout</label>
          <ha-select
            .value=${this._config.layout||"horizontal"}
            .configValue=${"layout"}
            @selected=${this._valueChanged}
            @closed=${e=>e.stopPropagation()}
            fixedMenuPosition
          >
            <mwc-list-item value="horizontal">Horizontal</mwc-list-item>
            <mwc-list-item value="vertical">Vertical</mwc-list-item>
          </ha-select>
        </div>

        <!-- Toggles -->
        <div class="config-row switches">
          <ha-formfield label="Show Name">
            <ha-switch
              .checked=${!1!==this._config.show_name}
              .configValue=${"show_name"}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield label="Show State">
            <ha-switch
              .checked=${!1!==this._config.show_state}
              .configValue=${"show_state"}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield label="Fill Container">
            <ha-switch
              .checked=${!0===this._config.fill_container}
              .configValue=${"fill_container"}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>
        </div>

        <!-- Actions Section -->
        <div class="config-section">
          <label class="section-title">Actions</label>
          
          <div class="config-row">
            <label class="section-label">Tap Action</label>
            <ha-select
              .value=${this._config.tap_action?.action||"toggle"}
              .configValue=${"tap_action"}
              @selected=${e=>{this._config={...this._config,tap_action:{action:e.target.value}},Ue(this,"config-changed",{config:this._config})}}
              @closed=${e=>e.stopPropagation()}
              fixedMenuPosition
            >
              <mwc-list-item value="toggle">Toggle</mwc-list-item>
              <mwc-list-item value="more-info">More Info</mwc-list-item>
              <mwc-list-item value="call-service">Call Service</mwc-list-item>
              <mwc-list-item value="navigate">Navigate</mwc-list-item>
              <mwc-list-item value="url">URL</mwc-list-item>
              <mwc-list-item value="none">None</mwc-list-item>
            </ha-select>
          </div>

          <div class="config-row">
            <label class="section-label">Hold Action</label>
            <ha-select
              .value=${this._config.hold_action?.action||"more-info"}
              .configValue=${"hold_action"}
              @selected=${e=>{this._config={...this._config,hold_action:{action:e.target.value}},Ue(this,"config-changed",{config:this._config})}}
              @closed=${e=>e.stopPropagation()}
              fixedMenuPosition
            >
              <mwc-list-item value="toggle">Toggle</mwc-list-item>
              <mwc-list-item value="more-info">More Info</mwc-list-item>
              <mwc-list-item value="call-service">Call Service</mwc-list-item>
              <mwc-list-item value="navigate">Navigate</mwc-list-item>
              <mwc-list-item value="url">URL</mwc-list-item>
              <mwc-list-item value="none">None</mwc-list-item>
            </ha-select>
          </div>
        </div>
      </div>
    `}static get styles(){return i`
      .card-config {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 16px;
      }

      .config-row {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      .config-section {
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding-top: 16px;
        border-top: 1px solid var(--divider-color);
      }

      .section-title {
        font-weight: 500;
        font-size: 14px;
        color: var(--primary-text-color);
        margin-bottom: 8px;
      }

      .section-label {
        font-size: 12px;
        font-weight: 500;
        color: var(--secondary-text-color);
        margin-bottom: 4px;
      }

      ha-entity-picker,
      ha-textfield,
      ha-icon-picker,
      ha-select,
      ha-selector {
        width: 100%;
      }

      .entity-row ha-selector {
        display: block;
      }

      ha-select {
        --mdc-menu-max-height: 300px;
      }

      .switches {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
      }

      ha-formfield {
        margin-right: 16px;
      }

      .category-header {
        font-weight: 600;
        font-size: 12px;
        color: var(--primary-color);
        text-transform: uppercase;
        pointer-events: none;
        opacity: 0.8;
        margin-top: 8px;
      }

      .color-option {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .color-preview {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 1px solid var(--divider-color);
        flex-shrink: 0;
      }

      mwc-list-item {
        --mdc-list-side-padding: 16px;
      }
    `}};e([pe({attribute:!1})],We.prototype,"hass",void 0),e([de()],We.prototype,"_config",void 0),We=e([le("animated-mushroom-card-editor")],We);var Xe=Object.freeze({__proto__:null,get AnimatedMushroomCardEditor(){return We}});export{Fe as AnimatedMushroomCard};
