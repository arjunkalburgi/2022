function k(){}const Q=t=>t;function lt(t,e){for(const n in e)t[n]=e[n];return t}function W(t){return t()}function G(){return Object.create(null)}function x(t){t.forEach(W)}function L(t){return typeof t=="function"}function Mt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let N;function Dt(t,e){return N||(N=document.createElement("a")),N.href=e,t===N.href}function st(t){return Object.keys(t).length===0}function Ot(t,e,n,i){if(t){const r=U(t,e,n,i);return t[0](r)}}function U(t,e,n,i){return t[1]&&i?lt(n.ctx.slice(),t[1](i(e))):n.ctx}function Rt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],c=Math.max(e.dirty.length,r.length);for(let l=0;l<c;l+=1)u[l]=e.dirty[l]|r[l];return u}return e.dirty|r}return e.dirty}function Tt(t,e,n,i,r,u){if(r){const c=U(e,n,i,u);t.p(c,r)}}function zt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const V=typeof window!="undefined";let X=V?()=>window.performance.now():()=>Date.now(),P=V?t=>requestAnimationFrame(t):k;const g=new Set;function Y(t){g.forEach(e=>{e.c(t)||(g.delete(e),e.f())}),g.size!==0&&P(Y)}function Z(t){let e;return g.size===0&&P(Y),{promise:new Promise(n=>{g.add(e={c:t,f:n})}),abort(){g.delete(e)}}}let O=!1;function ut(){O=!0}function at(){O=!1}function ft(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function _t(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let s=0;s<e.length;s++){const f=e[s];f.claim_order!==void 0&&o.push(f)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const s=e[o].claim_order,f=(r>0&&e[n[r]].claim_order<=s?r+1:ft(1,r,_=>e[n[_]].claim_order,s))-1;i[o]=n[f]+1;const a=f+1;n[a]=o,r=Math.max(a,r)}const u=[],c=[];let l=e.length-1;for(let o=n[r]+1;o!=0;o=i[o-1]){for(u.push(e[o-1]);l>=o;l--)c.push(e[l]);l--}for(;l>=0;l--)c.push(e[l]);u.reverse(),c.sort((o,s)=>o.claim_order-s.claim_order);for(let o=0,s=0;o<c.length;o++){for(;s<u.length&&c[o].claim_order>=u[s].claim_order;)s++;const f=s<u.length?u[s]:null;t.insertBefore(c[o],f)}}function dt(t,e){t.appendChild(e)}function ht(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function mt(t,e){return dt(t.head||t,e),e.sheet}function pt(t,e){if(O){for(_t(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Bt(t,e,n){O&&!n?pt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function tt(t){t.parentNode.removeChild(t)}function Lt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function et(t){return document.createElement(t)}function F(t){return document.createTextNode(t)}function Pt(){return F(" ")}function Ft(){return F("")}function Ht(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function It(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Gt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function yt(t){return Array.from(t.childNodes)}function gt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function nt(t,e,n,i,r=!1){gt(t);const u=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const l=t[c];if(e(l)){const o=n(l);return o===void 0?t.splice(c,1):t[c]=o,r||(t.claim_info.last_index=c),l}}for(let c=t.claim_info.last_index-1;c>=0;c--){const l=t[c];if(e(l)){const o=n(l);return o===void 0?t.splice(c,1):t[c]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,l}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function xt(t,e,n,i){return nt(t,r=>r.nodeName===e,r=>{const u=[];for(let c=0;c<r.attributes.length;c++){const l=r.attributes[c];n[l.name]||u.push(l.name)}u.forEach(c=>r.removeAttribute(c))},()=>i(e))}function Jt(t,e,n){return xt(t,e,n,et)}function $t(t,e){return nt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>F(e),!0)}function Kt(t){return $t(t," ")}function Qt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Wt(t,e){t.value=e==null?"":e}function bt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function Ut(t,e=document.body){return Array.from(e.querySelectorAll(t))}const q=new Map;let M=0;function wt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function vt(t){const e={style_element:et("style"),rules:{}};return q.set(t,e),e}function it(t,e,n,i,r,u,c,l=0){const o=16.666/i;let s=`{
`;for(let d=0;d<=1;d+=o){const A=e+(n-e)*u(d);s+=d*100+`%{${c(A,1-A)}}
`}const f=s+`100% {${c(n,1-n)}}
}`,a=`__svelte_${wt(f)}_${l}`,_=ht(t),{style_element:h,rules:m}=q.get(_)||vt(_);if(!m[a]){const d=mt(_,h);m[a]=!0,d.insertRule(`@keyframes ${a} ${f}`,d.cssRules.length)}const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${a} ${i}ms linear ${r}ms 1 both`,M+=1,a}function z(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),M-=r,M||Et())}function Et(){P(()=>{M||(q.forEach(t=>{const{style_element:e}=t;tt(e)}),q.clear())})}let v;function w(t){v=t}function H(){if(!v)throw new Error("Function called outside component initialization");return v}function Vt(t){H().$$.on_mount.push(t)}function Xt(t){H().$$.after_update.push(t)}function Yt(t,e){return H().$$.context.set(t,e),e}const b=[],J=[],C=[],K=[],kt=Promise.resolve();let B=!1;function At(){B||(B=!0,kt.then(rt))}function E(t){C.push(t)}const T=new Set;let j=0;function rt(){const t=v;do{for(;j<b.length;){const e=b[j];j++,w(e),Nt(e.$$)}for(w(null),b.length=0,j=0;J.length;)J.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];T.has(n)||(T.add(n),n())}C.length=0}while(b.length);for(;K.length;)K.pop()();B=!1,T.clear(),w(t)}function Nt(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}let $;function ot(){return $||($=Promise.resolve(),$.then(()=>{$=null})),$}function D(t,e,n){t.dispatchEvent(bt(`${e?"intro":"outro"}${n}`))}const S=new Set;let y;function Zt(){y={r:0,c:[],p:y}}function te(){y.r||x(y.c),y=y.p}function jt(t,e){t&&t.i&&(S.delete(t),t.i(e))}function ee(t,e,n,i){if(t&&t.o){if(S.has(t))return;S.add(t),y.c.push(()=>{S.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const ct={duration:0};function ne(t,e,n){let i=e(t,n),r=!1,u,c,l=0;function o(){u&&z(t,u)}function s(){const{delay:a=0,duration:_=300,easing:h=Q,tick:m=k,css:p}=i||ct;p&&(u=it(t,0,1,_,a,h,p,l++)),m(0,1);const d=X()+a,A=d+_;c&&c.abort(),r=!0,E(()=>D(t,!0,"start")),c=Z(R=>{if(r){if(R>=A)return m(1,0),D(t,!0,"end"),o(),r=!1;if(R>=d){const I=h((R-d)/_);m(I,1-I)}}return r})}let f=!1;return{start(){f||(f=!0,z(t),L(i)?(i=i(),ot().then(s)):s())},invalidate(){f=!1},end(){r&&(o(),r=!1)}}}function ie(t,e,n){let i=e(t,n),r=!0,u;const c=y;c.r+=1;function l(){const{delay:o=0,duration:s=300,easing:f=Q,tick:a=k,css:_}=i||ct;_&&(u=it(t,1,0,s,o,f,_));const h=X()+o,m=h+s;E(()=>D(t,!1,"start")),Z(p=>{if(r){if(p>=m)return a(0,1),D(t,!1,"end"),--c.r||x(c.c),!1;if(p>=h){const d=f((p-h)/s);a(1-d,d)}}return r})}return L(i)?ot().then(()=>{i=i(),l()}):l(),{end(o){o&&i.tick&&i.tick(1,0),r&&(u&&z(t,u),r=!1)}}}function re(t,e){const n={},i={},r={$$scope:1};let u=t.length;for(;u--;){const c=t[u],l=e[u];if(l){for(const o in c)o in l||(i[o]=1);for(const o in l)r[o]||(n[o]=l[o],r[o]=1);t[u]=l}else for(const o in c)r[o]=1}for(const c in i)c in n||(n[c]=void 0);return n}function oe(t){return typeof t=="object"&&t!==null?t:{}}function ce(t){t&&t.c()}function le(t,e){t&&t.l(e)}function Ct(t,e,n,i){const{fragment:r,on_mount:u,on_destroy:c,after_update:l}=t.$$;r&&r.m(e,n),i||E(()=>{const o=u.map(W).filter(L);c?c.push(...o):x(o),t.$$.on_mount=[]}),l.forEach(E)}function St(t,e){const n=t.$$;n.fragment!==null&&(x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function qt(t,e){t.$$.dirty[0]===-1&&(b.push(t),At(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function se(t,e,n,i,r,u,c,l=[-1]){const o=v;w(t);const s=t.$$={fragment:null,ctx:null,props:u,update:k,not_equal:r,bound:G(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:G(),dirty:l,skip_bound:!1,root:e.target||o.$$.root};c&&c(s.root);let f=!1;if(s.ctx=n?n(t,e.props||{},(a,_,...h)=>{const m=h.length?h[0]:_;return s.ctx&&r(s.ctx[a],s.ctx[a]=m)&&(!s.skip_bound&&s.bound[a]&&s.bound[a](m),f&&qt(t,a)),_}):[],s.update(),f=!0,x(s.before_update),s.fragment=i?i(s.ctx):!1,e.target){if(e.hydrate){ut();const a=yt(e.target);s.fragment&&s.fragment.l(a),a.forEach(tt)}else s.fragment&&s.fragment.c();e.intro&&jt(t.$$.fragment),Ct(t,e.target,e.anchor,e.customElement),at(),rt()}w(o)}class ue{$destroy(){St(this,1),this.$destroy=k}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!st(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{St as A,lt as B,k as C,Ot as D,Dt as E,pt as F,Tt as G,zt as H,Rt as I,Q as J,E as K,ne as L,Wt as M,Ht as N,It as O,ie as P,x as Q,Ut as R,ue as S,Lt as T,yt as a,Gt as b,Jt as c,tt as d,et as e,Bt as f,$t as g,Qt as h,se as i,Pt as j,Ft as k,Kt as l,Zt as m,ee as n,te as o,jt as p,Yt as q,Xt as r,Mt as s,F as t,Vt as u,ce as v,le as w,Ct as x,re as y,oe as z};
