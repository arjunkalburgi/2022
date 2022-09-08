import{S as sn,i as tn,s as nn,e as r,t as e,j as c,c as l,a as i,g as p,d as s,l as u,b as k,E as on,f as o,F as t,C as ot}from"../../chunks/index-40201def.js";function en(Lt){let h,as,ya,L,ss,ha,j,Kt=`<code class="language-javascript"><span class="token keyword">var</span> <span class="token literal-property property">progressBar</span><span class="token operator">:</span> BehaviorSubject<span class="token operator">&lt;</span>Boolean<span class="token operator">></span> <span class="token operator">=</span> BehaviorSubject<span class="token punctuation">.</span><span class="token function">createDefault</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>  
fun <span class="token function">setProgressBar</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span> Boolean</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>  
    progressBar<span class="token punctuation">.</span><span class="token function">onNext</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>  
<span class="token punctuation">&#125;</span></code>`,wa,K,ts,ba,A,Rt=`<code class="language-javascript">Injector<span class="token punctuation">.</span>progressBar<span class="token punctuation">.</span><span class="token function">_subscribeBy_</span><span class="token punctuation">(</span>  
        onNext <span class="token operator">=</span> <span class="token punctuation">&#123;</span>  
            <span class="token keyword">if</span> <span class="token punctuation">(</span>it<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>  
                <span class="token keyword">this</span><span class="token punctuation">.</span>mainProgress<span class="token punctuation">.</span>_visibility_ <span class="token operator">=</span> View<span class="token punctuation">.</span>_VISIBLE_ <span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>  
                <span class="token keyword">this</span><span class="token punctuation">.</span>mainProgress<span class="token punctuation">.</span>_visibility_ <span class="token operator">=</span> View<span class="token punctuation">.</span>_GONE_ <span class="token punctuation">&#125;</span>  
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>onError <span class="token operator">=</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">)</span>  
        <span class="token punctuation">.</span><span class="token function">_addTo_</span><span class="token punctuation">(</span>compositeDisposable<span class="token punctuation">)</span></code>`,Ea,d,ns,sa,os,es,ta,ps,rs,ga,R,ls,Ia,w,is,T,cs,us,Pa,q,N,et,ja,b,ks,na,fs,ds,Aa,E,ms,oa,vs,_s,Ta,C,qt=`<code class="language-javascript"><span class="token operator">&lt;</span>animated<span class="token operator">-</span>vector   
    <span class="token literal-property property">android</span><span class="token operator">:</span>drawable<span class="token operator">=</span><span class="token string">"@drawable/your_vector_file"</span><span class="token operator">></span>  
  
    <span class="token operator">&lt;</span>target  
        <span class="token literal-property property">android</span><span class="token operator">:</span>name<span class="token operator">=</span><span class="token string">"group1"</span>  
        <span class="token literal-property property">android</span><span class="token operator">:</span>animation<span class="token operator">=</span><span class="token string">"@anim/your_first_animation_file"</span> <span class="token operator">/</span><span class="token operator">></span>  
  
    <span class="token operator">&lt;</span>target  
        <span class="token literal-property property">android</span><span class="token operator">:</span>name<span class="token operator">=</span><span class="token string">"group2"</span>  
        <span class="token literal-property property">android</span><span class="token operator">:</span>animation<span class="token operator">=</span><span class="token string">"@anim/your_second_animation_file"</span> <span class="token operator">/</span><span class="token operator">></span>  
<span class="token operator">&lt;</span><span class="token operator">/</span>animated<span class="token operator">-</span>vector<span class="token operator">></span></code>`,Ca,m,ys,ea,hs,ws,pa,bs,Es,Ba,B,Nt=`<code class="language-javascript"><span class="token operator">&lt;</span>vector android<span class="token operator">:</span>name<span class="token operator">=</span><span class="token string">"vector"</span>  
    <span class="token literal-property property">android</span><span class="token operator">:</span>viewportWidth<span class="token operator">=</span><span class="token string">"1024"</span>  
    <span class="token literal-property property">android</span><span class="token operator">:</span>viewportHeight<span class="token operator">=</span><span class="token string">"1024"</span><span class="token operator">></span>  
    <span class="token operator">&lt;</span>group <span class="token operator">...</span> <span class="token operator">/</span><span class="token operator">></span>  
    <span class="token operator">&lt;</span>group <span class="token operator">...</span> <span class="token operator">/</span><span class="token operator">></span>  
<span class="token operator">&lt;</span><span class="token operator">/</span>vector<span class="token operator">></span></code>`,Oa,v,gs,ra,Is,Ps,la,js,As,Da,O,Qt=`<code class="language-javascript"><span class="token operator">&lt;</span>set<span class="token operator">></span>  
    <span class="token operator">&lt;</span>objectAnimator <span class="token operator">...</span> <span class="token operator">/</span><span class="token operator">></span>  
    <span class="token operator">&lt;</span>objectAnimator <span class="token operator">...</span> <span class="token operator">/</span><span class="token operator">></span>  
    <span class="token operator">&lt;</span>objectAnimator <span class="token operator">...</span> <span class="token operator">/</span><span class="token operator">></span>  
    <span class="token operator">&lt;</span>objectAnimator <span class="token operator">...</span> <span class="token operator">/</span><span class="token operator">></span>  
<span class="token operator">&lt;</span><span class="token operator">/</span>set<span class="token operator">></span></code>`,Sa,Q,Ts,Ha,F,Cs,Ma,y,Bs,ia,Os,Ds,ca,Ss,xa,D,Ft=`<code class="language-javascript"><span class="token operator">&lt;</span>ImageView  
    <span class="token literal-property property">android</span><span class="token operator">:</span>contentDescription<span class="token operator">=</span><span class="token string">"@string/loading"</span>  
    <span class="token literal-property property">android</span><span class="token operator">:</span>id<span class="token operator">=</span><span class="token string">"@+id/progress_bar"</span>  
    <span class="token literal-property property">android</span><span class="token operator">:</span>layout_width<span class="token operator">=</span><span class="token string">"200dp"</span>  
    <span class="token literal-property property">android</span><span class="token operator">:</span>layout_height<span class="token operator">=</span><span class="token string">"200dp"</span>  
    <span class="token literal-property property">android</span><span class="token operator">:</span>layout_gravity<span class="token operator">=</span><span class="token string">"center"</span> <span class="token operator">/</span><span class="token operator">></span></code>`,Va,g,Hs,ua,Ms,xs,La,S,Gt=`<code class="language-javascript">val avd <span class="token operator">=</span> AnimatedVectorDrawableCompat<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>_applicationContext_<span class="token punctuation">,</span>            
                                      <span class="token constant">R</span><span class="token punctuation">.</span>drawable<span class="token punctuation">.</span>_your_vector_file_<span class="token punctuation">)</span>  
findViewById<span class="token operator">&lt;</span>ImageView<span class="token operator">></span><span class="token punctuation">(</span><span class="token constant">R</span><span class="token punctuation">.</span>id<span class="token punctuation">.</span>_progress_bar_<span class="token punctuation">)</span><span class="token punctuation">.</span>_apply_ <span class="token punctuation">&#123;</span> <span class="token function">setImageDrawable</span><span class="token punctuation">(</span>avd<span class="token punctuation">)</span>  
<span class="token punctuation">&#125;</span>  
avd<span class="token operator">?.</span><span class="token function">registerAnimationCallback</span><span class="token punctuation">(</span>obj<span class="token operator">:</span>Animatable2Compat<span class="token punctuation">.</span><span class="token function">AnimationCallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>  
    override fun <span class="token function">onAnimationEnd</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">drawable</span><span class="token operator">:</span> Drawable<span class="token operator">?</span></span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>  
        avd<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  
    <span class="token punctuation">&#125;</span>  
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span></code>`,Ka,f,Vs,ka,Ls,Ks,fa,Rs,qs,da,Ns,Qs,Ra,H,Wt=`<code class="language-javascript">Injector<span class="token punctuation">.</span>progressBar<span class="token punctuation">.</span><span class="token function">_subscribeBy_</span><span class="token punctuation">(</span>  
        onNext <span class="token operator">=</span> <span class="token punctuation">&#123;</span>  
            <span class="token keyword">if</span> <span class="token punctuation">(</span>it<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>  
                <span class="token keyword">this</span><span class="token punctuation">.</span>mainProgress<span class="token punctuation">.</span>_visibility_ <span class="token operator">=</span> View<span class="token punctuation">.</span>_VISIBLE_ avd<span class="token operator">?</span>_<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>_ <span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>  
                <span class="token keyword">this</span><span class="token punctuation">.</span>mainProgress<span class="token punctuation">.</span>_visibility_ <span class="token operator">=</span> View<span class="token punctuation">.</span>_GONE_ avd<span class="token operator">?</span>_<span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>_ <span class="token punctuation">&#125;</span>  
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>onError <span class="token operator">=</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">)</span>  
        <span class="token punctuation">.</span><span class="token function">_addTo_</span><span class="token punctuation">(</span>compositeDisposable<span class="token punctuation">)</span></code>`,qa,I,Fs,M,Gs,Ws,Na,G,zs,Qa,W,Us,Fa,z,Js,Ga,U,ma,Xs,Wa,J,va,Ys,za,X,Zs,Ua,_,$s,x,at,st,V,tt,nt;return{c(){h=r("h4"),as=e("First, the\xA0Setup"),ya=c(),L=r("p"),ss=e("First I implemented this BehaviorSubject in my Dependency Injection:"),ha=c(),j=r("pre"),wa=c(),K=r("p"),ts=e("And subscribed to it from the MainActivity:"),ba=c(),A=r("pre"),Ea=c(),d=r("p"),ns=e("These together allow me to toggle the ProgressBar view (that was set up in activity_main) simply by calling "),sa=r("code"),os=e("Injector.setProgressBar(true)"),es=e(" and "),ta=r("code"),ps=e("Injector.setProgressBar(false)"),rs=e("."),ga=c(),R=r("h4"),ls=e("Second, the Animation"),Ia=c(),w=r("p"),is=e("Here\u2019s the fun part. I used "),T=r("a"),cs=e("Shape Shifter"),us=e(" to make the animation, this is what I made:"),Pa=c(),q=r("p"),N=r("img"),ja=c(),b=r("p"),ks=e("Shape Shifter allows you to export the animation as an "),na=r("code"),fs=e("animated-vector"),ds=e("\xA0, made just for Android."),Aa=c(),E=r("p"),ms=e("I found that breaking that "),oa=r("code"),vs=e("animated-vector"),_s=e(" into four separate files worked best. The first is the main file, make sure your ProgressBar uses this."),Ta=c(),C=r("pre"),Ca=c(),m=r("p"),ys=e("The vector file, taken from the "),ea=r("code"),hs=e("<vector>"),ws=e(" section of the "),pa=r("code"),bs=e("animated-vector"),Es=e("\xA0:"),Ba=c(),B=r("pre"),Oa=c(),v=r("p"),gs=e("And the two animation files taken from the "),ra=r("code"),Is=e("<target>"),Ps=e(" sections and placed under "),la=r("code"),js=e("res/anim/"),As=e("\xA0. They\u2019ll look like this:"),Da=c(),O=r("pre"),Sa=c(),Q=r("h4"),Ts=e("Third, Making it\xA0Work"),Ha=c(),F=r("p"),Cs=e("This was all great, but it didn\u2019t exactly work. The animation wouldn\u2019t repeat itself after it completed. Took a while but finally got it working by doing the following:"),Ma=c(),y=r("p"),Bs=e("Change "),ia=r("code"),Os=e("ProgressBar"),Ds=e(" to "),ca=r("code"),Ss=e("ImageView"),xa=c(),D=r("pre"),Va=c(),g=r("p"),Hs=e("Initialize the animation including "),ua=r("code"),Ms=e("registerAnimationCallback"),xs=e(" to force the looping of the animation."),La=c(),S=r("pre"),Ka=c(),f=r("p"),Vs=e("To top it off, I added "),ka=r("code"),Ls=e("start()"),Ks=e(" and "),fa=r("code"),Rs=e("stop()"),qs=e(" to my "),da=r("code"),Ns=e("_subscribeBy_"),Qs=e(" method just to be nice:"),Ra=c(),H=r("pre"),qa=c(),I=r("p"),Fs=e("This last step took me a while to figure out but I finally got it thanks to "),M=r("a"),Gs=e("this article"),Ws=e(" from the Android Developers blog."),Na=c(),G=r("p"),zs=e("Overall I loved the chance to work on some animation, I think it\u2019s just going to become a bigger thing in 2019 and more of a priority for me to learn!"),Qa=c(),W=r("h4"),Us=e("Krugo Travel"),Fa=c(),z=r("p"),Js=e("Quick shoutout to the company I\u2019m working for, Krugo. I\u2019m working on getting the Android app up and running hence why I was doing this little animation in Android!"),Ga=c(),U=r("blockquote"),ma=r("p"),Xs=e("Have you ever been frustrated trying to plan a trip with a group of people? Maybe a bachelor party, family vacation or trip with the girls? If so, you\u2019re not alone."),Wa=c(),J=r("blockquote"),va=r("p"),Ys=e("And we\u2019ve made it our mission to help."),za=c(),X=r("p"),Zs=e("Krugo helps groups of friends collaboratively plan trips by finding events, buying tickets and getting a place to stay. Can\u2019t wait to take my own Krugo soon \u{1F61C}"),Ua=c(),_=r("p"),$s=e("Check \u2019em out on "),x=r("a"),at=e("Medium"),st=e(" or get the "),V=r("a"),tt=e("app for iOS"),nt=e(". Android coming soon!"),this.h()},l(a){h=l(a,"H4",{});var n=i(h);as=p(n,"First, the\xA0Setup"),n.forEach(s),ya=u(a),L=l(a,"P",{});var pt=i(L);ss=p(pt,"First I implemented this BehaviorSubject in my Dependency Injection:"),pt.forEach(s),ha=u(a),j=l(a,"PRE",{class:!0});var zt=i(j);zt.forEach(s),wa=u(a),K=l(a,"P",{});var rt=i(K);ts=p(rt,"And subscribed to it from the MainActivity:"),rt.forEach(s),ba=u(a),A=l(a,"PRE",{class:!0});var Ut=i(A);Ut.forEach(s),Ea=u(a),d=l(a,"P",{});var Y=i(d);ns=p(Y,"These together allow me to toggle the ProgressBar view (that was set up in activity_main) simply by calling "),sa=l(Y,"CODE",{});var lt=i(sa);os=p(lt,"Injector.setProgressBar(true)"),lt.forEach(s),es=p(Y," and "),ta=l(Y,"CODE",{});var it=i(ta);ps=p(it,"Injector.setProgressBar(false)"),it.forEach(s),rs=p(Y,"."),Y.forEach(s),ga=u(a),R=l(a,"H4",{});var ct=i(R);ls=p(ct,"Second, the Animation"),ct.forEach(s),Ia=u(a),w=l(a,"P",{});var Ja=i(w);is=p(Ja,"Here\u2019s the fun part. I used "),T=l(Ja,"A",{href:!0,rel:!0});var ut=i(T);cs=p(ut,"Shape Shifter"),ut.forEach(s),us=p(Ja," to make the animation, this is what I made:"),Ja.forEach(s),Pa=u(a),q=l(a,"P",{});var kt=i(q);N=l(kt,"IMG",{src:!0,alt:!0}),kt.forEach(s),ja=u(a),b=l(a,"P",{});var Xa=i(b);ks=p(Xa,"Shape Shifter allows you to export the animation as an "),na=l(Xa,"CODE",{});var ft=i(na);fs=p(ft,"animated-vector"),ft.forEach(s),ds=p(Xa,"\xA0, made just for Android."),Xa.forEach(s),Aa=u(a),E=l(a,"P",{});var Ya=i(E);ms=p(Ya,"I found that breaking that "),oa=l(Ya,"CODE",{});var dt=i(oa);vs=p(dt,"animated-vector"),dt.forEach(s),_s=p(Ya," into four separate files worked best. The first is the main file, make sure your ProgressBar uses this."),Ya.forEach(s),Ta=u(a),C=l(a,"PRE",{class:!0});var Jt=i(C);Jt.forEach(s),Ca=u(a),m=l(a,"P",{});var Z=i(m);ys=p(Z,"The vector file, taken from the "),ea=l(Z,"CODE",{});var mt=i(ea);hs=p(mt,"<vector>"),mt.forEach(s),ws=p(Z," section of the "),pa=l(Z,"CODE",{});var vt=i(pa);bs=p(vt,"animated-vector"),vt.forEach(s),Es=p(Z,"\xA0:"),Z.forEach(s),Ba=u(a),B=l(a,"PRE",{class:!0});var Xt=i(B);Xt.forEach(s),Oa=u(a),v=l(a,"P",{});var $=i(v);gs=p($,"And the two animation files taken from the "),ra=l($,"CODE",{});var _t=i(ra);Is=p(_t,"<target>"),_t.forEach(s),Ps=p($," sections and placed under "),la=l($,"CODE",{});var yt=i(la);js=p(yt,"res/anim/"),yt.forEach(s),As=p($,"\xA0. They\u2019ll look like this:"),$.forEach(s),Da=u(a),O=l(a,"PRE",{class:!0});var Yt=i(O);Yt.forEach(s),Sa=u(a),Q=l(a,"H4",{});var ht=i(Q);Ts=p(ht,"Third, Making it\xA0Work"),ht.forEach(s),Ha=u(a),F=l(a,"P",{});var wt=i(F);Cs=p(wt,"This was all great, but it didn\u2019t exactly work. The animation wouldn\u2019t repeat itself after it completed. Took a while but finally got it working by doing the following:"),wt.forEach(s),Ma=u(a),y=l(a,"P",{});var _a=i(y);Bs=p(_a,"Change "),ia=l(_a,"CODE",{});var bt=i(ia);Os=p(bt,"ProgressBar"),bt.forEach(s),Ds=p(_a," to "),ca=l(_a,"CODE",{});var Et=i(ca);Ss=p(Et,"ImageView"),Et.forEach(s),_a.forEach(s),xa=u(a),D=l(a,"PRE",{class:!0});var Zt=i(D);Zt.forEach(s),Va=u(a),g=l(a,"P",{});var Za=i(g);Hs=p(Za,"Initialize the animation including "),ua=l(Za,"CODE",{});var gt=i(ua);Ms=p(gt,"registerAnimationCallback"),gt.forEach(s),xs=p(Za," to force the looping of the animation."),Za.forEach(s),La=u(a),S=l(a,"PRE",{class:!0});var $t=i(S);$t.forEach(s),Ka=u(a),f=l(a,"P",{});var P=i(f);Vs=p(P,"To top it off, I added "),ka=l(P,"CODE",{});var It=i(ka);Ls=p(It,"start()"),It.forEach(s),Ks=p(P," and "),fa=l(P,"CODE",{});var Pt=i(fa);Rs=p(Pt,"stop()"),Pt.forEach(s),qs=p(P," to my "),da=l(P,"CODE",{});var jt=i(da);Ns=p(jt,"_subscribeBy_"),jt.forEach(s),Qs=p(P," method just to be nice:"),P.forEach(s),Ra=u(a),H=l(a,"PRE",{class:!0});var an=i(H);an.forEach(s),qa=u(a),I=l(a,"P",{});var $a=i(I);Fs=p($a,"This last step took me a while to figure out but I finally got it thanks to "),M=l($a,"A",{href:!0,rel:!0});var At=i(M);Gs=p(At,"this article"),At.forEach(s),Ws=p($a," from the Android Developers blog."),$a.forEach(s),Na=u(a),G=l(a,"P",{});var Tt=i(G);zs=p(Tt,"Overall I loved the chance to work on some animation, I think it\u2019s just going to become a bigger thing in 2019 and more of a priority for me to learn!"),Tt.forEach(s),Qa=u(a),W=l(a,"H4",{});var Ct=i(W);Us=p(Ct,"Krugo Travel"),Ct.forEach(s),Fa=u(a),z=l(a,"P",{});var Bt=i(z);Js=p(Bt,"Quick shoutout to the company I\u2019m working for, Krugo. I\u2019m working on getting the Android app up and running hence why I was doing this little animation in Android!"),Bt.forEach(s),Ga=u(a),U=l(a,"BLOCKQUOTE",{});var Ot=i(U);ma=l(Ot,"P",{});var Dt=i(ma);Xs=p(Dt,"Have you ever been frustrated trying to plan a trip with a group of people? Maybe a bachelor party, family vacation or trip with the girls? If so, you\u2019re not alone."),Dt.forEach(s),Ot.forEach(s),Wa=u(a),J=l(a,"BLOCKQUOTE",{});var St=i(J);va=l(St,"P",{});var Ht=i(va);Ys=p(Ht,"And we\u2019ve made it our mission to help."),Ht.forEach(s),St.forEach(s),za=u(a),X=l(a,"P",{});var Mt=i(X);Zs=p(Mt,"Krugo helps groups of friends collaboratively plan trips by finding events, buying tickets and getting a place to stay. Can\u2019t wait to take my own Krugo soon \u{1F61C}"),Mt.forEach(s),Ua=u(a),_=l(a,"P",{});var aa=i(_);$s=p(aa,"Check \u2019em out on "),x=l(aa,"A",{href:!0,rel:!0});var xt=i(x);at=p(xt,"Medium"),xt.forEach(s),st=p(aa," or get the "),V=l(aa,"A",{href:!0,rel:!0});var Vt=i(V);tt=p(Vt,"app for iOS"),Vt.forEach(s),nt=p(aa,". Android coming soon!"),aa.forEach(s),this.h()},h(){k(j,"class","language-javascript"),k(A,"class","language-javascript"),k(T,"href","https://shapeshifter.design/"),k(T,"rel","nofollow"),on(N.src,et="https://cdn-images-1.medium.com/max/800/1*TOT7NQcg-4VcfbAynbk7vA.gif")||k(N,"src",et),k(N,"alt","Arjun before 2020 didn't know how important alt's were. Sorry no alt text!"),k(C,"class","language-javascript"),k(B,"class","language-javascript"),k(O,"class","language-javascript"),k(D,"class","language-javascript"),k(S,"class","language-javascript"),k(H,"class","language-javascript"),k(M,"href","https://medium.com/androiddevelopers/re-animation-7869722af206"),k(M,"rel","nofollow"),k(x,"href","https://medium.com/@krugo"),k(x,"rel","nofollow"),k(V,"href","https://krugotravel.com/"),k(V,"rel","nofollow")},m(a,n){o(a,h,n),t(h,as),o(a,ya,n),o(a,L,n),t(L,ss),o(a,ha,n),o(a,j,n),j.innerHTML=Kt,o(a,wa,n),o(a,K,n),t(K,ts),o(a,ba,n),o(a,A,n),A.innerHTML=Rt,o(a,Ea,n),o(a,d,n),t(d,ns),t(d,sa),t(sa,os),t(d,es),t(d,ta),t(ta,ps),t(d,rs),o(a,ga,n),o(a,R,n),t(R,ls),o(a,Ia,n),o(a,w,n),t(w,is),t(w,T),t(T,cs),t(w,us),o(a,Pa,n),o(a,q,n),t(q,N),o(a,ja,n),o(a,b,n),t(b,ks),t(b,na),t(na,fs),t(b,ds),o(a,Aa,n),o(a,E,n),t(E,ms),t(E,oa),t(oa,vs),t(E,_s),o(a,Ta,n),o(a,C,n),C.innerHTML=qt,o(a,Ca,n),o(a,m,n),t(m,ys),t(m,ea),t(ea,hs),t(m,ws),t(m,pa),t(pa,bs),t(m,Es),o(a,Ba,n),o(a,B,n),B.innerHTML=Nt,o(a,Oa,n),o(a,v,n),t(v,gs),t(v,ra),t(ra,Is),t(v,Ps),t(v,la),t(la,js),t(v,As),o(a,Da,n),o(a,O,n),O.innerHTML=Qt,o(a,Sa,n),o(a,Q,n),t(Q,Ts),o(a,Ha,n),o(a,F,n),t(F,Cs),o(a,Ma,n),o(a,y,n),t(y,Bs),t(y,ia),t(ia,Os),t(y,Ds),t(y,ca),t(ca,Ss),o(a,xa,n),o(a,D,n),D.innerHTML=Ft,o(a,Va,n),o(a,g,n),t(g,Hs),t(g,ua),t(ua,Ms),t(g,xs),o(a,La,n),o(a,S,n),S.innerHTML=Gt,o(a,Ka,n),o(a,f,n),t(f,Vs),t(f,ka),t(ka,Ls),t(f,Ks),t(f,fa),t(fa,Rs),t(f,qs),t(f,da),t(da,Ns),t(f,Qs),o(a,Ra,n),o(a,H,n),H.innerHTML=Wt,o(a,qa,n),o(a,I,n),t(I,Fs),t(I,M),t(M,Gs),t(I,Ws),o(a,Na,n),o(a,G,n),t(G,zs),o(a,Qa,n),o(a,W,n),t(W,Us),o(a,Fa,n),o(a,z,n),t(z,Js),o(a,Ga,n),o(a,U,n),t(U,ma),t(ma,Xs),o(a,Wa,n),o(a,J,n),t(J,va),t(va,Ys),o(a,za,n),o(a,X,n),t(X,Zs),o(a,Ua,n),o(a,_,n),t(_,$s),t(_,x),t(x,at),t(_,st),t(_,V),t(V,tt),t(_,nt)},p:ot,i:ot,o:ot,d(a){a&&s(h),a&&s(ya),a&&s(L),a&&s(ha),a&&s(j),a&&s(wa),a&&s(K),a&&s(ba),a&&s(A),a&&s(Ea),a&&s(d),a&&s(ga),a&&s(R),a&&s(Ia),a&&s(w),a&&s(Pa),a&&s(q),a&&s(ja),a&&s(b),a&&s(Aa),a&&s(E),a&&s(Ta),a&&s(C),a&&s(Ca),a&&s(m),a&&s(Ba),a&&s(B),a&&s(Oa),a&&s(v),a&&s(Da),a&&s(O),a&&s(Sa),a&&s(Q),a&&s(Ha),a&&s(F),a&&s(Ma),a&&s(y),a&&s(xa),a&&s(D),a&&s(Va),a&&s(g),a&&s(La),a&&s(S),a&&s(Ka),a&&s(f),a&&s(Ra),a&&s(H),a&&s(qa),a&&s(I),a&&s(Na),a&&s(G),a&&s(Qa),a&&s(W),a&&s(Fa),a&&s(z),a&&s(Ga),a&&s(U),a&&s(Wa),a&&s(J),a&&s(za),a&&s(X),a&&s(Ua),a&&s(_)}}}const rn={title:"Creating a Custom Loading Spinner for Android \u{1F916}",description:"Recently at Krugo, I was asking to implement a custom loading animation. I don\u2019t usually write about work things, but this one was different",date:"2019-01-15",categories:[],keywords:[],published:!0,oldslugthing:"/creating-a-custom-loading-spinner-for-android",cover:"https://cdn-images-1.medium.com/max/800/1*TOT7NQcg-4VcfbAynbk7vA.gif"};class ln extends sn{constructor(h){super(),tn(this,h,null,en,nn,{})}}export{ln as default,rn as metadata};
