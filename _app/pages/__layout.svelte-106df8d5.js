import{S as K,i as O,s as j,D as B,e as b,c as E,a as A,d as _,b as k,f as w,j as I,l as D,E as N,F,G as q,H as C,I as P,J as Z,K as $,L as x,v as ee,t as V,w as te,g as M,x as le,M as z,N as se,O as ne,P as ie,Q as ae,p as J,n as L,A as re}from"../chunks/vendor-66fc1351.js";const{window:T}=$;function Q(i,t,s){const a=i.slice();return a[9]=t[s],a}function R(i,t,s){const a=i.slice();return a[9]=t[s],a}function W(i,t,s){const a=i.slice();return a[9]=t[s],a}function U(i){let t;return{c(){t=b("span"),this.h()},l(s){t=E(s,"SPAN",{class:!0}),A(t).forEach(_),this.h()},h(){k(t,"class","svelte-3p0iu1")},m(s,a){w(s,t,a)},d(s){s&&_(t)}}}function X(i){let t;return{c(){t=b("span"),this.h()},l(s){t=E(s,"SPAN",{class:!0}),A(t).forEach(_),this.h()},h(){k(t,"class","svelte-3p0iu1")},m(s,a){w(s,t,a)},d(s){s&&_(t)}}}function Y(i){let t;return{c(){t=b("span"),this.h()},l(s){t=E(s,"SPAN",{class:!0}),A(t).forEach(_),this.h()},h(){k(t,"class","svelte-3p0iu1")},m(s,a){w(s,t,a)},d(s){s&&_(t)}}}function oe(i){let t,s,a,u,o,v,d;B(i[7]);let m=Array(i[4]||200),c=[];for(let e=0;e<m.length;e+=1)c[e]=U(W(i,m,e));let y=Array(i[4]||200),f=[];for(let e=0;e<y.length;e+=1)f[e]=X(R(i,y,e));let g=Array(i[5]*i[4]||200),h=[];for(let e=0;e<g.length;e+=1)h[e]=Y(Q(i,g,e));return{c(){t=b("div");for(let e=0;e<c.length;e+=1)c[e].c();s=I(),a=b("div");for(let e=0;e<f.length;e+=1)f[e].c();u=I(),o=b("div");for(let e=0;e<h.length;e+=1)h[e].c();this.h()},l(e){t=E(e,"DIV",{class:!0});var r=A(t);for(let p=0;p<c.length;p+=1)c[p].l(r);r.forEach(_),s=D(e),a=E(e,"DIV",{class:!0});var n=A(a);for(let p=0;p<f.length;p+=1)f[p].l(n);n.forEach(_),u=D(e),o=E(e,"DIV",{class:!0,style:!0});var l=A(o);for(let p=0;p<h.length;p+=1)h[p].l(l);l.forEach(_),this.h()},h(){k(t,"class","top svelte-3p0iu1"),k(a,"class","left svelte-3p0iu1"),k(o,"class","grid svelte-3p0iu1"),N(o,"height",i[1]+"px"),N(o,"padding-left",i[2]%i[0]/2+"px"),F(o,"scrolling",i[3])},m(e,r){w(e,t,r);for(let n=0;n<c.length;n+=1)c[n].m(t,null);w(e,s,r),w(e,a,r);for(let n=0;n<f.length;n+=1)f[n].m(a,null);w(e,u,r),w(e,o,r);for(let n=0;n<h.length;n+=1)h[n].m(o,null);v||(d=[q(T,"scroll",i[6]),q(T,"resize",i[7])],v=!0)},p(e,[r]){if(r&16){const n=m.length;m=Array(e[4]||200);let l;for(l=n;l<m.length;l+=1)W(e,m,l),c[l]||(c[l]=U(),c[l].c(),c[l].m(t,null));for(l=m.length;l<n;l+=1)c[l].d(1);c.length=m.length}if(r&16){const n=y.length;y=Array(e[4]||200);let l;for(l=n;l<y.length;l+=1)R(e,y,l),f[l]||(f[l]=X(),f[l].c(),f[l].m(a,null));for(l=y.length;l<n;l+=1)f[l].d(1);f.length=y.length}if(r&48){const n=g.length;g=Array(e[5]*e[4]||200);let l;for(l=n;l<g.length;l+=1)Q(e,g,l),h[l]||(h[l]=Y(),h[l].c(),h[l].m(o,null));for(l=g.length;l<n;l+=1)h[l].d(1);h.length=g.length}r&2&&N(o,"height",e[1]+"px"),r&5&&N(o,"padding-left",e[2]%e[0]/2+"px"),r&8&&F(o,"scrolling",e[3])},i:C,o:C,d(e){e&&_(t),P(c,e),e&&_(s),e&&_(a),P(f,e),e&&_(u),e&&_(o),P(h,e),v=!1,Z(d)}}}function ce(i,t,s){let a,u,{gridspace:o=50}=t,{height:v}=t,d;var m,c;function y(g){s(3,m=!0),window.clearTimeout(c),c=setTimeout(function(){s(3,m=!1)},66)}function f(){s(2,d=T.innerWidth)}return i.$$set=g=>{"gridspace"in g&&s(0,o=g.gridspace),"height"in g&&s(1,v=g.height)},i.$$.update=()=>{i.$$.dirty&5&&s(5,a=Math.floor(d/o)),i.$$.dirty&3&&s(4,u=Math.floor(v/o))},[o,v,d,m,u,a,y,f]}class he extends K{constructor(t){super();O(this,t,ce,oe,j,{gridspace:0,height:1})}}function fe(i){let t,s,a,u,o,v,d,m,c,y,f,g,h;s=new he({props:{height:i[0]}});const e=i[2].default,r=x(e,i,i[1],null);return{c(){t=b("div"),ee(s.$$.fragment),a=I(),u=b("main"),r&&r.c(),o=I(),v=b("footer"),d=b("p"),m=V("visit "),c=b("a"),y=V("kit.svelte.dev"),f=V(" to learn SvelteKit"),this.h()},l(n){t=E(n,"DIV",{class:!0});var l=A(t);te(s.$$.fragment,l),a=D(l),u=E(l,"MAIN",{class:!0});var p=A(u);r&&r.l(p),p.forEach(_),o=D(l),v=E(l,"FOOTER",{class:!0});var G=A(v);d=E(G,"P",{});var S=A(d);m=M(S,"visit "),c=E(S,"A",{href:!0,class:!0});var H=A(c);y=M(H,"kit.svelte.dev"),H.forEach(_),f=M(S," to learn SvelteKit"),S.forEach(_),G.forEach(_),l.forEach(_),this.h()},h(){k(u,"class","svelte-15pm9zs"),k(c,"href","https://kit.svelte.dev"),k(c,"class","svelte-15pm9zs"),k(v,"class","svelte-15pm9zs"),k(t,"class","container"),B(()=>i[3].call(t))},m(n,l){w(n,t,l),le(s,t,null),z(t,a),z(t,u),r&&r.m(u,null),z(t,o),z(t,v),z(v,d),z(d,m),z(d,c),z(c,y),z(d,f),g=se(t,i[3].bind(t)),h=!0},p(n,[l]){const p={};l&1&&(p.height=n[0]),s.$set(p),r&&r.p&&(!h||l&2)&&ne(r,e,n,n[1],h?ae(e,n[1],l,null):ie(n[1]),null)},i(n){h||(J(s.$$.fragment,n),J(r,n),h=!0)},o(n){L(s.$$.fragment,n),L(r,n),h=!1},d(n){n&&_(t),re(s),r&&r.d(n),g()}}}function _e(i,t,s){let{$$slots:a={},$$scope:u}=t;var o;function v(){o=this.clientHeight,s(0,o)}return i.$$set=d=>{"$$scope"in d&&s(1,u=d.$$scope)},[o,u,a,v]}class de extends K{constructor(t){super();O(this,t,_e,fe,j,{})}}export{de as default};
