import{S as $,i as y,s as z,L as A,e as C,t as m,j as H,c as L,a as M,g as c,d as n,l as O,f as r,M as Q,h as S,O as B,P as D,Q as F,p as G,n as I}from"../../chunks/vendor-66fc1351.js";function J(a){let s,i=a[0].title+"",_,p,u,f=a[0].description+"",b,E,d=a[0].author+"",v,P,h=a[0].date+"",j,w,o;const k=a[2].default,l=A(k,a,a[1],null);return{c(){s=C("h1"),_=m(i),p=H(),u=C("p"),b=m(f),E=m(`

author=`),v=m(d),P=m(`
date=`),j=m(h),w=H(),l&&l.c()},l(t){s=L(t,"H1",{});var e=M(s);_=c(e,i),e.forEach(n),p=O(t),u=L(t,"P",{});var q=M(u);b=c(q,f),q.forEach(n),E=c(t,`

author=`),v=c(t,d),P=c(t,`
date=`),j=c(t,h),w=O(t),l&&l.l(t)},m(t,e){r(t,s,e),Q(s,_),r(t,p,e),r(t,u,e),Q(u,b),r(t,E,e),r(t,v,e),r(t,P,e),r(t,j,e),r(t,w,e),l&&l.m(t,e),o=!0},p(t,[e]){(!o||e&1)&&i!==(i=t[0].title+"")&&S(_,i),(!o||e&1)&&f!==(f=t[0].description+"")&&S(b,f),(!o||e&1)&&d!==(d=t[0].author+"")&&S(v,d),(!o||e&1)&&h!==(h=t[0].date+"")&&S(j,h),l&&l.p&&(!o||e&2)&&B(l,k,t,t[1],o?F(k,t[1],e,null):D(t[1]),null)},i(t){o||(G(l,t),o=!0)},o(t){I(l,t),o=!1},d(t){t&&n(s),t&&n(p),t&&n(u),t&&n(E),t&&n(v),t&&n(P),t&&n(j),t&&n(w),l&&l.d(t)}}}async function R({url:a,fetch:s}){const i=await s(`${a.pathname}.json`).then(_=>_.json());return!i||!i.published?{status:404,error:new Error("Post could not be found")}:{props:{post:i}}}function K(a,s,i){let{$$slots:_={},$$scope:p}=s,{post:u}=s;return a.$$set=f=>{"post"in f&&i(0,u=f.post),"$$scope"in f&&i(1,p=f.$$scope)},[u,p,_]}class T extends ${constructor(s){super();y(this,s,K,J,z,{post:0})}}export{T as default,R as load};
