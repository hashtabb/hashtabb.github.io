(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function v(){}const ot=t=>t;function st(t){return t()}function J(){return Object.create(null)}function E(t){t.forEach(st)}function z(t){return typeof t=="function"}function gt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let S;function yt(t,e){return S||(S=document.createElement("a")),S.href=e,t===S.href}function $t(t){return Object.keys(t).length===0}const lt=typeof window<"u";let ct=lt?()=>window.performance.now():()=>Date.now(),X=lt?t=>requestAnimationFrame(t):v;const O=new Set;function ut(t){O.forEach(e=>{e.c(t)||(O.delete(e),e.f())}),O.size!==0&&X(ut)}function ft(t){let e;return O.size===0&&X(ut),{promise:new Promise(n=>{O.add(e={c:t,f:n})}),abort(){O.delete(e)}}}const bt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;"WeakMap"in bt;function H(t,e){t.appendChild(e)}function at(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function wt(t){const e=P("style");return vt(at(t),e),e.sheet}function vt(t,e){return H(t.head||t,e),e.sheet}function D(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode&&t.parentNode.removeChild(t)}function P(t){return document.createElement(t)}function Et(t){return document.createTextNode(t)}function Q(){return Et(" ")}function kt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function w(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function xt(t){return Array.from(t.childNodes)}function Ot(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,i,e),o}const I=new Map;let R=0;function Nt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ct(t,e){const n={stylesheet:wt(e),rules:{}};return I.set(t,n),n}function K(t,e,n,i,o,l,s,r=0){const u=16.666/i;let c=`{
`;for(let _=0;_<=1;_+=u){const y=e+(n-e)*l(_);c+=_*100+`%{${s(y,1-y)}}
`}const d=c+`100% {${s(n,1-n)}}
}`,a=`__svelte_${Nt(d)}_${r}`,p=at(t),{stylesheet:f,rules:h}=I.get(p)||Ct(p,t);h[a]||(h[a]=!0,f.insertRule(`@keyframes ${a} ${d}`,f.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${a} ${i}ms linear ${o}ms 1 both`,R+=1,a}function dt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),o=n.length-i.length;o&&(t.style.animation=i.join(", "),R-=o,R||At())}function At(){X(()=>{R||(I.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&b(e)}),I.clear())})}let G;function L(t){G=t}const x=[],V=[];let N=[];const Y=[],Lt=Promise.resolve();let U=!1;function qt(){U||(U=!0,Lt.then(ht))}function C(t){N.push(t)}const W=new Set;let k=0;function ht(){if(k!==0)return;const t=G;do{try{for(;k<x.length;){const e=x[k];k++,L(e),Pt(e.$$)}}catch(e){throw x.length=0,k=0,e}for(L(null),x.length=0,k=0;V.length;)V.pop()();for(let e=0;e<N.length;e+=1){const n=N[e];W.has(n)||(W.add(n),n())}N.length=0}while(x.length);for(;Y.length;)Y.pop()();U=!1,W.clear(),L(t)}function Pt(t){if(t.fragment!==null){t.update(),E(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}function Mt(t){const e=[],n=[];N.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),N=e}let A;function pt(){return A||(A=Promise.resolve(),A.then(()=>{A=null})),A}function q(t,e,n){t.dispatchEvent(Ot(`${e?"intro":"outro"}${n}`))}const j=new Set;let g;function Z(){g={r:0,c:[],p:g}}function tt(){g.r||E(g.c),g=g.p}function $(t,e){t&&t.i&&(j.delete(t),t.i(e))}function T(t,e,n,i){if(t&&t.o){if(j.has(t))return;j.add(t),g.c.push(()=>{j.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const mt={duration:0};function St(t,e,n){const i={direction:"out"};let o=e(t,n,i),l=!0,s;const r=g;r.r+=1;function u(){const{delay:c=0,duration:d=300,easing:a=ot,tick:p=v,css:f}=o||mt;f&&(s=K(t,1,0,d,c,a,f));const h=ct()+c,m=h+d;C(()=>q(t,!1,"start")),ft(_=>{if(l){if(_>=m)return p(0,1),q(t,!1,"end"),--r.r||E(r.c),!1;if(_>=h){const y=a((_-h)/d);p(1-y,y)}}return l})}return z(o)?pt().then(()=>{o=o(i),u()}):u(),{end(c){c&&o.tick&&o.tick(1,0),l&&(s&&dt(t,s),l=!1)}}}function et(t,e,n,i){const o={direction:"both"};let l=e(t,n,o),s=i?0:1,r=null,u=null,c=null;function d(){c&&dt(t,c)}function a(f,h){const m=f.b-s;return h*=Math.abs(m),{a:s,b:f.b,d:m,duration:h,start:f.start,end:f.start+h,group:f.group}}function p(f){const{delay:h=0,duration:m=300,easing:_=ot,tick:y=v,css:B}=l||mt,F={start:ct()+h,b:f};f||(F.group=g,g.r+=1),r||u?u=F:(B&&(d(),c=K(t,s,f,m,h,_,B)),f&&y(0,1),r=a(F,m),C(()=>q(t,f,"start")),ft(M=>{if(u&&M>u.start&&(r=a(u,m),u=null,q(t,r.b,"start"),B&&(d(),c=K(t,s,r.b,r.duration,0,_,l.css))),r){if(M>=r.end)y(s=r.b,1-s),q(t,r.b,"end"),u||(r.b?d():--r.group.r||E(r.group.c)),r=null;else if(M>=r.start){const _t=M-r.start;s=r.a+r.d*_(_t/r.duration),y(s,1-s)}}return!!(r||u)}))}return{run(f){z(l)?pt().then(()=>{l=l(o),p(f)}):p(f)},end(){d(),r=u=null}}}const Tt=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...Tt];function jt(t,e,n,i){const{fragment:o,after_update:l}=t.$$;o&&o.m(e,n),i||C(()=>{const s=t.$$.on_mount.map(st).filter(z);t.$$.on_destroy?t.$$.on_destroy.push(...s):E(s),t.$$.on_mount=[]}),l.forEach(C)}function Dt(t,e){const n=t.$$;n.fragment!==null&&(Mt(n.after_update),E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function It(t,e){t.$$.dirty[0]===-1&&(x.push(t),qt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Rt(t,e,n,i,o,l,s,r=[-1]){const u=G;L(t);const c=t.$$={fragment:null,ctx:[],props:l,update:v,not_equal:o,bound:J(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:J(),dirty:r,skip_bound:!1,root:e.target||u.$$.root};s&&s(c.root);let d=!1;if(c.ctx=n?n(t,e.props||{},(a,p,...f)=>{const h=f.length?f[0]:p;return c.ctx&&o(c.ctx[a],c.ctx[a]=h)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](h),d&&It(t,a)),p}):[],c.update(),d=!0,E(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){const a=xt(e.target);c.fragment&&c.fragment.l(a),a.forEach(b)}else c.fragment&&c.fragment.c();e.intro&&$(t.$$.fragment),jt(t,e.target,e.anchor,e.customElement),ht()}L(u)}class zt{$destroy(){Dt(this,1),this.$destroy=v}$on(e,n){if(!z(n))return v;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const o=i.indexOf(n);o!==-1&&i.splice(o,1)}}$set(e){this.$$set&&!$t(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Bt(t){return t*t*((1.70158+1)*t-1.70158)}function nt(t){const e=.36363636363636365,n=8/11,i=9/10,o=4356/361,l=35442/1805,s=16061/1805,r=t*t;return t<e?7.5625*r:t<n?9.075*r-9.9*t+3.4:t<i?o*r-l*t+s:10.8*t*t-20.52*t+10.72}function Ft(t){return t<.5?.5*(1-nt(1-t*2)):.5*nt(t*2-1)+.5}const Wt="/assets/hashtag-7a0fa552.svg";function rt(t){let e,n,i,o,l,s;return{c(){e=P("img"),yt(e.src,n=Wt)||w(e,"src",n),w(e,"class","logo svelte-pthq87"),w(e,"alt","hashtag Logo")},m(r,u){D(r,e,u),o=!0,l||(s=kt(e,"click",t[1]),l=!0)},p:v,i(r){o||(i&&i.end(1),o=!0)},o(r){i=St(e,t[3],{delay:0,duration:2500}),o=!1},d(r){r&&b(e),r&&i&&i.end(),l=!1,s()}}}function it(t){let e,n,i;return{c(){e=P("h2"),e.textContent="#hashtabb",w(e,"class","svelte-pthq87")},m(o,l){D(o,e,l),i=!0},i(o){i||(C(()=>{i&&(n||(n=et(e,t[2],{speed:.3,delay:3e3},!0)),n.run(1))}),i=!0)},o(o){n||(n=et(e,t[2],{speed:.3,delay:3e3},!1)),n.run(0),i=!1},d(o){o&&b(e),o&&n&&n.end()}}}function Ht(t){let e,n,i,o,l,s=t[0]&&rt(t),r=!t[0]&&it(t);return{c(){e=P("link"),n=Q(),i=P("main"),s&&s.c(),o=Q(),r&&r.c(),document.title="Hashtabb",w(e,"rel","icon"),w(e,"href",Kt),w(e,"type","image/svg")},m(u,c){H(document.head,e),D(u,n,c),D(u,i,c),s&&s.m(i,null),H(i,o),r&&r.m(i,null),l=!0},p(u,[c]){u[0]?s?(s.p(u,c),c&1&&$(s,1)):(s=rt(u),s.c(),$(s,1),s.m(i,o)):s&&(Z(),T(s,1,1,()=>{s=null}),tt()),u[0]?r&&(Z(),T(r,1,1,()=>{r=null}),tt()):r?c&1&&$(r,1):(r=it(u),r.c(),$(r,1),r.m(i,null))},i(u){l||($(s),$(r),l=!0)},o(u){T(s),T(r),l=!1},d(u){b(e),u&&b(n),u&&b(i),s&&s.d(),r&&r.d()}}}let Kt="./assets/hashtag.svg";function Ut(t,e,n){let i=!0;function o(){n(0,i=!1)}function l(r,{speed:u=1,delay:c=0,easing:d=Ft}){if(!(r.childNodes.length===1&&r.childNodes[0].nodeType===Node.TEXT_NODE))throw new Error("This transition only works on elements with a single text node child");const p=r.textContent;return{duration:p.length/(u*.01),delay:c,easing:d,tick:h=>{const m=Math.trunc(p.length*h);r.textContent=p.slice(0,m)}}}function s(r,{delay:u=0,duration:c=2e3,easing:d=Bt}){const a=getComputedStyle(r);return+a.opacity,a.transform==="none"||a.transform,{delay:u,duration:c,easing:d,css:(p,f)=>`transform: translate(0px, ${f*-600}px);`}}return[i,o,l,s]}class Xt extends zt{constructor(e){super(),Rt(this,e,Ut,Ht,gt,{})}}new Xt({target:document.getElementById("app")});
