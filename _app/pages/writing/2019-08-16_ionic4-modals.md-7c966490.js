import{S as qa,i as za,s as Ba,e as l,t as e,j as c,c as i,a as r,g as p,d as a,l as u,b as k,f as o,F as n,C as ca}from"../../chunks/index-40201def.js";function Ka(Da){let f,Cs,_,Ps,gs,Y,x,Is,Z,T,xs,$,y,Ts,W,Rs,js,ss,R,Hs,as,j,Os,ts,v,Ds,q,As,Ss,ns,H,Fs,os,w,Ls,z,Ns,Us,es,E,Aa=`<code class="language-javascript"><span class="token keyword">const</span> <span class="token literal-property property">routes</span><span class="token operator">:</span> Routes <span class="token operator">=</span> <span class="token punctuation">[</span>
     <span class="token punctuation">&#123;</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token literal-property property">redirectTo</span><span class="token operator">:</span> <span class="token string">'home'</span><span class="token punctuation">,</span> <span class="token literal-property property">pathMatch</span><span class="token operator">:</span> <span class="token string">'full'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
     <span class="token operator">...</span>
     <span class="token punctuation">&#123;</span>\u0335 \u0335p\u0335a\u0335t\u0335h\u0335<span class="token operator">:</span>\u0335 \u0335<span class="token string">'\u0335m\u0335o\u0335d\u0335a\u0335l\u0335'</span>\u0335<span class="token punctuation">,</span>\u0335 \u0335
       l\u0335o\u0335a\u0335d\u0335<span class="token constant">C</span><span class="token literal-property property">\u0335h\u0335i\u0335l\u0335d\u0335r\u0335e\u0335n\u0335</span><span class="token operator">:</span>\u0335 \u0335<span class="token string">'\u0335.\u0335/\u0335m\u0335o\u0335d\u0335a\u0335l\u0335/\u0335m\u0335o\u0335d\u0335a\u0335l\u0335.\u0335m\u0335o\u0335d\u0335u\u0335l\u0335e\u0335#\u0335M\u0335o\u0335d\u0335a\u0335l\u0335P\u0335a\u0335g\u0335e\u0335M\u0335o\u0335d\u0335u\u0335l\u0335e\u0335'</span>\u0335 \u0335<span class="token punctuation">&#125;</span>\u0335
<span class="token punctuation">]</span><span class="token punctuation">;</span></code>`,ps,O,Gs,ls,D,Js,is,M,Sa=`<code class="language-javascript">@<span class="token function">NgModule</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
     <span class="token literal-property property">declarations</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token operator">**</span>ModalPage<span class="token operator">**</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
     <span class="token literal-property property">imports</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token operator">...</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
     <span class="token literal-property property">entryComponents</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token operator">**</span>ModalPage<span class="token operator">**</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
     <span class="token literal-property property">exports</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token operator">**</span>ModalPage <span class="token punctuation">]</span>
<span class="token operator">**</span><span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">ModalPageModule</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span></code>`,rs,h,Vs,B,Ws,qs,K,zs,Bs,cs,A,Ks,us,S,Qs,ks,b,Fa=`<code class="language-javascript">@<span class="token function">NgModule</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
     <span class="token literal-property property">declarations</span><span class="token operator">:</span> <span class="token punctuation">[</span> HomePage<span class="token punctuation">,</span> <span class="token operator">**</span>ModalPage<span class="token operator">**</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
     <span class="token literal-property property">imports</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token operator">...</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
     <span class="token literal-property property">entryComponents</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token operator">**</span>ModalPage<span class="token operator">**</span> <span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">HomePageModule</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span></code>`,fs,d,Xs,Q,Ys,Zs,X,$s,sa,hs,F,aa,ds,L,ta,ms,C,La=`<code class="language-javascript"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> ModalController <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@ionic/angular'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token operator">**</span>HomePage<span class="token operator">**</span> <span class="token punctuation">&#123;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token keyword">private</span> <span class="token literal-property property">modalCtrl</span><span class="token operator">:</span> ModalController</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span> <span class="token punctuation">&#125;</span>

  <span class="token keyword">async</span> <span class="token function">openModal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">const</span> loadAmount <span class="token operator">=</span> <span class="token keyword">await</span> _this_<span class="token punctuation">.</span>modalCtrl<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
      <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token operator">**</span>ModalPage<span class="token operator">**</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> loadAmount<span class="token punctuation">.</span><span class="token function">present</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>

<span class="token punctuation">&#125;</span></code>`,ys,N,na,vs,P,Na=`<code class="language-javascript"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> ModalController <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@ionic/angular'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token operator">**</span>ModalPage<span class="token operator">**</span> <span class="token punctuation">&#123;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token keyword">private</span> <span class="token literal-property property">modalCtrl</span><span class="token operator">:</span> ModalController</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span> <span class="token punctuation">&#125;</span>

  <span class="token keyword">async</span> <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">await</span> _this_<span class="token punctuation">.</span>modalCtrl<span class="token punctuation">.</span><span class="token function">dismiss</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>

<span class="token punctuation">&#125;</span></code>`,ws,U,oa,_s,m,ea,g,pa,la,I,ia,ra;return{c(){f=l("p"),Cs=e("This should be easy, but the documentation for it is a little lacking. I\u2019ve "),_=l("a"),Ps=e("asked"),gs=e(" them to update it but just in case they don\u2019t I\u2019m writing this for your sanity."),Y=c(),x=l("h3"),Is=e("Issue"),Z=c(),T=l("p"),xs=e("Originally my issue was that the modal was activating too early, before the button-press to activate the modal. When I would navigate to the page that the modal should be accessed on, it would show the modal as a full page instead of the page I\u2019ve navigated to."),$=c(),y=l("p"),Ts=e("This solution will also help solve the "),W=l("code"),Rs=e('ERROR ERROR: "Uncaught (in promise): overlay does not exist"'),js=e(" when trying to dismiss the modal. Another issue that I saw people having when trying to find a solution."),ss=c(),R=l("h3"),Hs=e("Solution"),as=c(),j=l("h4"),Os=e("Creating a Modal\xA0Page"),ts=c(),v=l("p"),Ds=e("Very basic, just run "),q=l("code"),As=e("ionic g page modal"),Ss=e(" using Ionic CLI just like you would for any other new page."),ns=c(),H=l("h4"),Fs=e("Fixing the\xA0Routing"),os=c(),w=l("p"),Ls=e("Since modal pages aren\u2019t part of your app navigation, you must remove the automatic entry for this page from your "),z=l("code"),Ns=e("app-routing-module.ts"),Us=e(" file."),es=c(),E=l("pre"),ps=c(),O=l("h4"),Gs=e("Fix the Modal\u2019s\xA0Module"),ls=c(),D=l("p"),Js=e("This part is neccessary to solve the issue."),is=c(),M=l("pre"),rs=c(),h=l("p"),Vs=e("The documentation does not show to include the page in "),B=l("code"),Ws=e("entryComponents"),qs=e(" or "),K=l("code"),zs=e("exports"),Bs=e("."),cs=c(),A=l("h4"),Ks=e("Declare the Modal for\xA0Use"),us=c(),S=l("p"),Qs=e("Now that the modal\u2019s module is ready, import it into the page you want to use it in."),ks=c(),b=l("pre"),fs=c(),d=l("p"),Xs=e("The documentation does not show either of these! This is a big part of how the issue happens. Including the "),Q=l("code"),Ys=e("ModalPage"),Zs=e(" in "),X=l("code"),$s=e("imports"),sa=e(" is what creates the problem (and is what I thought to do)."),hs=c(),F=l("h4"),aa=e("Create the\xA0Modal"),ds=c(),L=l("p"),ta=e("The following is exactly how the documentation explains, I\u2019m just including it here for completion\u2019s sake."),ms=c(),C=l("pre"),ys=c(),N=l("h4"),na=e("Dismiss the\xA0Modal"),vs=c(),P=l("pre"),ws=c(),U=l("h3"),oa=e("Conclusion"),_s=c(),m=l("p"),ea=e("Just like that, everything should be working perfectly. I was so relieved when I implemented these steps. Thank you to "),g=l("a"),pa=e("Christian Francia"),la=e(" for providing this solution in a "),I=l("a"),ia=e("Github issue"),ra=e(", hopefully this blog post will have a little better SEO and will be easier to find \u{1F603}"),this.h()},l(s){f=i(s,"P",{});var t=r(f);Cs=p(t,"This should be easy, but the documentation for it is a little lacking. I\u2019ve "),_=i(t,"A",{href:!0,rel:!0});var ua=r(_);Ps=p(ua,"asked"),ua.forEach(a),gs=p(t," them to update it but just in case they don\u2019t I\u2019m writing this for your sanity."),t.forEach(a),Y=u(s),x=i(s,"H3",{});var ka=r(x);Is=p(ka,"Issue"),ka.forEach(a),Z=u(s),T=i(s,"P",{});var fa=r(T);xs=p(fa,"Originally my issue was that the modal was activating too early, before the button-press to activate the modal. When I would navigate to the page that the modal should be accessed on, it would show the modal as a full page instead of the page I\u2019ve navigated to."),fa.forEach(a),$=u(s),y=i(s,"P",{});var Es=r(y);Ts=p(Es,"This solution will also help solve the "),W=i(Es,"CODE",{});var ha=r(W);Rs=p(ha,'ERROR ERROR: "Uncaught (in promise): overlay does not exist"'),ha.forEach(a),js=p(Es," when trying to dismiss the modal. Another issue that I saw people having when trying to find a solution."),Es.forEach(a),ss=u(s),R=i(s,"H3",{});var da=r(R);Hs=p(da,"Solution"),da.forEach(a),as=u(s),j=i(s,"H4",{});var ma=r(j);Os=p(ma,"Creating a Modal\xA0Page"),ma.forEach(a),ts=u(s),v=i(s,"P",{});var Ms=r(v);Ds=p(Ms,"Very basic, just run "),q=i(Ms,"CODE",{});var ya=r(q);As=p(ya,"ionic g page modal"),ya.forEach(a),Ss=p(Ms," using Ionic CLI just like you would for any other new page."),Ms.forEach(a),ns=u(s),H=i(s,"H4",{});var va=r(H);Fs=p(va,"Fixing the\xA0Routing"),va.forEach(a),os=u(s),w=i(s,"P",{});var bs=r(w);Ls=p(bs,"Since modal pages aren\u2019t part of your app navigation, you must remove the automatic entry for this page from your "),z=i(bs,"CODE",{});var wa=r(z);Ns=p(wa,"app-routing-module.ts"),wa.forEach(a),Us=p(bs," file."),bs.forEach(a),es=u(s),E=i(s,"PRE",{class:!0});var Ua=r(E);Ua.forEach(a),ps=u(s),O=i(s,"H4",{});var _a=r(O);Gs=p(_a,"Fix the Modal\u2019s\xA0Module"),_a.forEach(a),ls=u(s),D=i(s,"P",{});var Ea=r(D);Js=p(Ea,"This part is neccessary to solve the issue."),Ea.forEach(a),is=u(s),M=i(s,"PRE",{class:!0});var Ga=r(M);Ga.forEach(a),rs=u(s),h=i(s,"P",{});var G=r(h);Vs=p(G,"The documentation does not show to include the page in "),B=i(G,"CODE",{});var Ma=r(B);Ws=p(Ma,"entryComponents"),Ma.forEach(a),qs=p(G," or "),K=i(G,"CODE",{});var ba=r(K);zs=p(ba,"exports"),ba.forEach(a),Bs=p(G,"."),G.forEach(a),cs=u(s),A=i(s,"H4",{});var Ca=r(A);Ks=p(Ca,"Declare the Modal for\xA0Use"),Ca.forEach(a),us=u(s),S=i(s,"P",{});var Pa=r(S);Qs=p(Pa,"Now that the modal\u2019s module is ready, import it into the page you want to use it in."),Pa.forEach(a),ks=u(s),b=i(s,"PRE",{class:!0});var Ja=r(b);Ja.forEach(a),fs=u(s),d=i(s,"P",{});var J=r(d);Xs=p(J,"The documentation does not show either of these! This is a big part of how the issue happens. Including the "),Q=i(J,"CODE",{});var ga=r(Q);Ys=p(ga,"ModalPage"),ga.forEach(a),Zs=p(J," in "),X=i(J,"CODE",{});var Ia=r(X);$s=p(Ia,"imports"),Ia.forEach(a),sa=p(J," is what creates the problem (and is what I thought to do)."),J.forEach(a),hs=u(s),F=i(s,"H4",{});var xa=r(F);aa=p(xa,"Create the\xA0Modal"),xa.forEach(a),ds=u(s),L=i(s,"P",{});var Ta=r(L);ta=p(Ta,"The following is exactly how the documentation explains, I\u2019m just including it here for completion\u2019s sake."),Ta.forEach(a),ms=u(s),C=i(s,"PRE",{class:!0});var Va=r(C);Va.forEach(a),ys=u(s),N=i(s,"H4",{});var Ra=r(N);na=p(Ra,"Dismiss the\xA0Modal"),Ra.forEach(a),vs=u(s),P=i(s,"PRE",{class:!0});var Wa=r(P);Wa.forEach(a),ws=u(s),U=i(s,"H3",{});var ja=r(U);oa=p(ja,"Conclusion"),ja.forEach(a),_s=u(s),m=i(s,"P",{});var V=r(m);ea=p(V,"Just like that, everything should be working perfectly. I was so relieved when I implemented these steps. Thank you to "),g=i(V,"A",{href:!0,rel:!0});var Ha=r(g);pa=p(Ha,"Christian Francia"),Ha.forEach(a),la=p(V," for providing this solution in a "),I=i(V,"A",{href:!0,rel:!0});var Oa=r(I);ia=p(Oa,"Github issue"),Oa.forEach(a),ra=p(V,", hopefully this blog post will have a little better SEO and will be easier to find \u{1F603}"),V.forEach(a),this.h()},h(){k(_,"href","https://github.com/ionic-team/ionic/pull/17944#issuecomment-522067671"),k(_,"rel","nofollow"),k(E,"class","language-javascript"),k(M,"class","language-javascript"),k(b,"class","language-javascript"),k(C,"class","language-javascript"),k(P,"class","language-javascript"),k(g,"href","https://medium.com/u/706b6e4cb229"),k(g,"rel","nofollow"),k(I,"href","https://github.com/ionic-team/ionic/issues/17939#issuecomment-479550015"),k(I,"rel","nofollow")},m(s,t){o(s,f,t),n(f,Cs),n(f,_),n(_,Ps),n(f,gs),o(s,Y,t),o(s,x,t),n(x,Is),o(s,Z,t),o(s,T,t),n(T,xs),o(s,$,t),o(s,y,t),n(y,Ts),n(y,W),n(W,Rs),n(y,js),o(s,ss,t),o(s,R,t),n(R,Hs),o(s,as,t),o(s,j,t),n(j,Os),o(s,ts,t),o(s,v,t),n(v,Ds),n(v,q),n(q,As),n(v,Ss),o(s,ns,t),o(s,H,t),n(H,Fs),o(s,os,t),o(s,w,t),n(w,Ls),n(w,z),n(z,Ns),n(w,Us),o(s,es,t),o(s,E,t),E.innerHTML=Aa,o(s,ps,t),o(s,O,t),n(O,Gs),o(s,ls,t),o(s,D,t),n(D,Js),o(s,is,t),o(s,M,t),M.innerHTML=Sa,o(s,rs,t),o(s,h,t),n(h,Vs),n(h,B),n(B,Ws),n(h,qs),n(h,K),n(K,zs),n(h,Bs),o(s,cs,t),o(s,A,t),n(A,Ks),o(s,us,t),o(s,S,t),n(S,Qs),o(s,ks,t),o(s,b,t),b.innerHTML=Fa,o(s,fs,t),o(s,d,t),n(d,Xs),n(d,Q),n(Q,Ys),n(d,Zs),n(d,X),n(X,$s),n(d,sa),o(s,hs,t),o(s,F,t),n(F,aa),o(s,ds,t),o(s,L,t),n(L,ta),o(s,ms,t),o(s,C,t),C.innerHTML=La,o(s,ys,t),o(s,N,t),n(N,na),o(s,vs,t),o(s,P,t),P.innerHTML=Na,o(s,ws,t),o(s,U,t),n(U,oa),o(s,_s,t),o(s,m,t),n(m,ea),n(m,g),n(g,pa),n(m,la),n(m,I),n(I,ia),n(m,ra)},p:ca,i:ca,o:ca,d(s){s&&a(f),s&&a(Y),s&&a(x),s&&a(Z),s&&a(T),s&&a($),s&&a(y),s&&a(ss),s&&a(R),s&&a(as),s&&a(j),s&&a(ts),s&&a(v),s&&a(ns),s&&a(H),s&&a(os),s&&a(w),s&&a(es),s&&a(E),s&&a(ps),s&&a(O),s&&a(ls),s&&a(D),s&&a(is),s&&a(M),s&&a(rs),s&&a(h),s&&a(cs),s&&a(A),s&&a(us),s&&a(S),s&&a(ks),s&&a(b),s&&a(fs),s&&a(d),s&&a(hs),s&&a(F),s&&a(ds),s&&a(L),s&&a(ms),s&&a(C),s&&a(ys),s&&a(N),s&&a(vs),s&&a(P),s&&a(ws),s&&a(U),s&&a(_s),s&&a(m)}}}const Xa={title:"How to use Modals in Ionic v4",description:"After taking much too long to figure this out myself, I\u2019m writing a blog post about it to help the next dev.",date:"2019-08-16"};class Ya extends qa{constructor(f){super(),za(this,f,null,Ka,Ba,{})}}export{Ya as default,Xa as metadata};