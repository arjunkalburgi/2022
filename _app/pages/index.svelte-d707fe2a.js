import{S as x,i as z,s as F,e as E,R as K,j as D,t as O,c as b,a as w,T as W,d as o,l as U,g as S,b as i,E as P,f as B,M as r,G as Q,h as L,H as Y,J as te,U as se,V as le,v as re,W as ae,w as oe,X as ne,x as ie,p as ce,n as ue,A as fe,I as ve}from"../chunks/vendor-66fc1351.js";function _e(c){let s,t,l,f,_,d,h,v,y=Math.floor(c[1]+1)+"",I,j,k,g=Math.floor(c[1])+"",T,R,e,a,C,G,H;return{c(){s=E("div"),t=E("button"),l=K("svg"),f=K("path"),_=D(),d=E("div"),h=E("div"),v=E("strong"),I=O(y),j=D(),k=E("strong"),T=O(g),R=D(),e=E("button"),a=K("svg"),C=K("path"),this.h()},l(M){s=b(M,"DIV",{class:!0});var p=w(s);t=b(p,"BUTTON",{"aria-label":!0,class:!0});var m=w(t);l=W(m,"svg",{"aria-hidden":!0,viewBox:!0,class:!0});var u=w(l);f=W(u,"path",{d:!0,class:!0}),w(f).forEach(o),u.forEach(o),m.forEach(o),_=U(p),d=b(p,"DIV",{class:!0});var N=w(d);h=b(N,"DIV",{class:!0,style:!0});var n=w(h);v=b(n,"STRONG",{style:!0,"aria-hidden":!0,class:!0});var $=w(v);I=S($,y),$.forEach(o),j=U(n),k=b(n,"STRONG",{class:!0});var A=w(k);T=S(A,g),A.forEach(o),n.forEach(o),N.forEach(o),R=U(p),e=b(p,"BUTTON",{"aria-label":!0,class:!0});var V=w(e);a=W(V,"svg",{"aria-hidden":!0,viewBox:!0,class:!0});var q=w(a);C=W(q,"path",{d:!0,class:!0}),w(C).forEach(o),q.forEach(o),V.forEach(o),p.forEach(o),this.h()},h(){i(f,"d","M0,0.5 L1,0.5"),i(f,"class","svelte-139m1ow"),i(l,"aria-hidden","true"),i(l,"viewBox","0 0 1 1"),i(l,"class","svelte-139m1ow"),i(t,"aria-label","Decrease the counter by one"),i(t,"class","svelte-139m1ow"),P(v,"top","-100%"),i(v,"aria-hidden","true"),i(v,"class","svelte-139m1ow"),i(k,"class","svelte-139m1ow"),i(h,"class","counter-digits svelte-139m1ow"),P(h,"transform","translate(0, "+100*c[2]+"%)"),i(d,"class","counter-viewport svelte-139m1ow"),i(C,"d","M0,0.5 L1,0.5 M0.5,0 L0.5,1"),i(C,"class","svelte-139m1ow"),i(a,"aria-hidden","true"),i(a,"viewBox","0 0 1 1"),i(a,"class","svelte-139m1ow"),i(e,"aria-label","Increase the counter by one"),i(e,"class","svelte-139m1ow"),i(s,"class","counter svelte-139m1ow")},m(M,p){B(M,s,p),r(s,t),r(t,l),r(l,f),r(s,_),r(s,d),r(d,h),r(h,v),r(v,I),r(h,j),r(h,k),r(k,T),r(s,R),r(s,e),r(e,a),r(a,C),G||(H=[Q(t,"click",c[4]),Q(e,"click",c[5])],G=!0)},p(M,[p]){p&2&&y!==(y=Math.floor(M[1]+1)+"")&&L(I,y),p&2&&g!==(g=Math.floor(M[1])+"")&&L(T,g),p&4&&P(h,"transform","translate(0, "+100*M[2]+"%)")},i:Y,o:Y,d(M){M&&o(s),G=!1,te(H)}}}function he(c,s){return(c%s+s)%s}function de(c,s,t){let l,f,_=0;const d=se();le(c,d,y=>t(1,f=y));const h=()=>t(0,_-=1),v=()=>t(0,_+=1);return c.$$.update=()=>{c.$$.dirty&1&&d.set(_),c.$$.dirty&2&&t(2,l=he(f,1))},[_,f,l,d,h,v]}class pe extends x{constructor(s){super();z(this,s,de,_e,F,{})}}function Z(c,s,t){const l=c.slice();return l[1]=s[t].slug,l[2]=s[t].title,l[3]=s[t].author,l[4]=s[t].description,l[5]=s[t].date,l}function ee(c){let s=c[2]+"",t,l,f=c[3]+"",_,d,h=c[4]+"",v,y,I=c[5]+"",j,k,g,T,R;return{c(){t=O(s),l=O(", "),_=O(f),d=O(", "),v=O(h),y=O(", "),j=O(I),k=D(),g=E("a"),T=O("GO"),this.h()},l(e){t=S(e,s),l=S(e,", "),_=S(e,f),d=S(e,", "),v=S(e,h),y=S(e,", "),j=S(e,I),k=U(e),g=b(e,"A",{href:!0});var a=w(g);T=S(a,"GO"),a.forEach(o),this.h()},h(){i(g,"href",R="/writing/"+c[1])},m(e,a){B(e,t,a),B(e,l,a),B(e,_,a),B(e,d,a),B(e,v,a),B(e,y,a),B(e,j,a),B(e,k,a),B(e,g,a),r(g,T)},p(e,a){a&1&&s!==(s=e[2]+"")&&L(t,s),a&1&&f!==(f=e[3]+"")&&L(_,f),a&1&&h!==(h=e[4]+"")&&L(v,h),a&1&&I!==(I=e[5]+"")&&L(j,I),a&1&&R!==(R="/writing/"+e[1])&&i(g,"href",R)},d(e){e&&o(t),e&&o(l),e&&o(_),e&&o(d),e&&o(v),e&&o(y),e&&o(j),e&&o(k),e&&o(g)}}}function me(c){let s,t,l,f,_,d,h,v,y,I,j,k,g,T,R,e,a,C,G,H,M;G=new pe({});let p=c[0],m=[];for(let u=0;u<p.length;u+=1)m[u]=ee(Z(c,p,u));return{c(){s=D(),t=E("section"),l=E("h1"),f=E("div"),_=E("picture"),d=E("source"),h=D(),v=E("img"),I=O(`

		to your new`),j=E("br"),k=O("SvelteKit app"),g=D(),T=E("h2"),R=O("try editing "),e=E("strong"),a=O("src/routes/index.svelte"),C=D(),re(G.$$.fragment),H=D();for(let u=0;u<m.length;u+=1)m[u].c();this.h()},l(u){ae('[data-svelte="svelte-1anpopb"]',document.head).forEach(o),s=U(u),t=b(u,"SECTION",{class:!0});var n=w(t);l=b(n,"H1",{class:!0});var $=w(l);f=b($,"DIV",{class:!0});var A=w(f);_=b(A,"PICTURE",{});var V=w(_);d=b(V,"SOURCE",{srcset:!0,type:!0}),h=U(V),v=b(V,"IMG",{src:!0,alt:!0,class:!0}),V.forEach(o),A.forEach(o),I=S($,`

		to your new`),j=b($,"BR",{}),k=S($,"SvelteKit app"),$.forEach(o),g=U(n),T=b(n,"H2",{});var q=w(T);R=S(q,"try editing "),e=b(q,"STRONG",{});var X=w(e);a=S(X,"src/routes/index.svelte"),X.forEach(o),q.forEach(o),C=U(n),oe(G.$$.fragment,n),H=U(n);for(let J=0;J<m.length;J+=1)m[J].l(n);n.forEach(o),this.h()},h(){document.title="Home",i(d,"srcset","svelte-welcome.webp"),i(d,"type","image/webp"),ne(v.src,y="svelte-welcome.png")||i(v,"src",y),i(v,"alt","Welcome"),i(v,"class","svelte-mjk9ig"),i(f,"class","welcome svelte-mjk9ig"),i(l,"class","svelte-mjk9ig"),i(t,"class","svelte-mjk9ig")},m(u,N){B(u,s,N),B(u,t,N),r(t,l),r(l,f),r(f,_),r(_,d),r(_,h),r(_,v),r(l,I),r(l,j),r(l,k),r(t,g),r(t,T),r(T,R),r(T,e),r(e,a),r(t,C),ie(G,t,null),r(t,H);for(let n=0;n<m.length;n+=1)m[n].m(t,null);M=!0},p(u,[N]){if(N&1){p=u[0];let n;for(n=0;n<p.length;n+=1){const $=Z(u,p,n);m[n]?m[n].p($,N):(m[n]=ee($),m[n].c(),m[n].m(t,null))}for(;n<m.length;n+=1)m[n].d(1);m.length=p.length}},i(u){M||(ce(G.$$.fragment,u),M=!0)},o(u){ue(G.$$.fragment,u),M=!1},d(u){u&&o(s),u&&o(t),fe(G),ve(m,u)}}}const Ee=!0;async function be({fetch:c}){return{props:{posts:await c("/writing.json").then(t=>t.json())}}}function ge(c,s,t){let{posts:l}=s;return c.$$set=f=>{"posts"in f&&t(0,l=f.posts)},[l]}class ye extends x{constructor(s){super();z(this,s,ge,me,F,{posts:0})}}export{ye as default,be as load,Ee as prerender};
