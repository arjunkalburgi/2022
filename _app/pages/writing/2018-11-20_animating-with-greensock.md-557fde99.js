import{S as Xe,i as Ye,s as $e,e as i,t as n,j as c,c as p,a as r,g as l,d as t,l as u,b as d,E as Pe,f as o,F as a,C as Ae}from"../../chunks/index-24e0f420.js";function et(Ke){let f,ee,j,te,ae,y,se,oe,H,k,ne,Z,b,S,xe,N,G,le,J,w,ie,C,pe,re,L,v,he,O,ce,ue,W,_,Qe=`<code class="language-javascript">tl<span class="token punctuation">.</span><span class="token function">to</span><span class="token punctuation">(</span>dotA<span class="token punctuation">,</span>   
      <span class="token number">0.8</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>  
      <span class="token literal-property property">attr</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>  
        <span class="token literal-property property">d</span><span class="token operator">:</span> <span class="token string">"M59.0596 ... 959Z"</span>  
      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>   
      <span class="token literal-property property">ease</span><span class="token operator">:</span> Power1<span class="token punctuation">.</span>easeInOut<span class="token punctuation">,</span>  
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span></code>`,z,h,fe,D,me,de,q,we,ve,M,ye,_e,F,ke,be,R,E,Se,B,I,Ge,K,P,A,ge,Q,x,Ee,U,g,T,Te,X,V,Ie;return{c(){f=i("p"),ee=n("Previously, I used SVG\u2019s "),j=i("code"),te=n("animate"),ae=n(" tag to animate a new Slackify logo I was working on. Here I did the same thing but with the "),y=i("a"),se=n("GreenSock Animation Platform (GSAP, GreenSock)"),oe=n("."),H=c(),k=i("p"),ne=n("Although I could have done the animation entirely in CSS, the purpose of this experiment was to see how I could animate using the multiple SVG\u2019s I had created previously."),Z=c(),b=i("p"),S=i("img"),N=c(),G=i("p"),le=n("This is the same screenshot of my Figma design asset from before. There are 4 paths here that I want to animate to each other with an easing between them."),J=c(),w=i("p"),ie=n("With SVG\u2019s "),C=i("code"),pe=n("animate"),re=n(" the preferred effect was not achieved, though mostly the basic motion was."),L=c(),v=i("p"),he=n("At first I had a lot of trouble trying to adapt my SVG\u2019s because GSAP isn\u2019t perfectly meant to be used to manipulate the "),O=i("code"),ce=n("d"),ue=n(" path of SVG elements. However, I eventually figured out how to do it after a bunch of Google searches."),W=c(),_=i("pre"),z=c(),h=i("p"),fe=n("The trick just happened to be to wrap the "),D=i("code"),me=n("d"),de=n(" modification in the "),q=i("code"),we=n("attr"),ve=n(" block. This successfully applied the "),M=i("code"),ye=n("dotA"),_e=n(" path element in the SVG with the new "),F=i("code"),ke=n("d"),be=n(" path."),R=c(),E=i("p"),Se=n("I went on to apply this same animation to the other 4 path elements."),B=c(),I=i("p"),Ge=n("The final result:"),K=c(),P=i("p"),A=i("img"),Q=c(),x=i("p"),Ee=n("I have a theory as to why there is that strange sharpness of the dots during the animation, but that\u2019s for another blog!"),U=c(),g=i("p"),T=i("img"),X=c(),V=i("p"),Ie=n("Thank you! Please let me know if you have any suggestions!"),this.h()},l(e){f=p(e,"P",{});var s=r(f);ee=l(s,"Previously, I used SVG\u2019s "),j=p(s,"CODE",{});var Ve=r(j);te=l(Ve,"animate"),Ve.forEach(t),ae=l(s," tag to animate a new Slackify logo I was working on. Here I did the same thing but with the "),y=p(s,"A",{href:!0,rel:!0});var je=r(y);se=l(je,"GreenSock Animation Platform (GSAP, GreenSock)"),je.forEach(t),oe=l(s,"."),s.forEach(t),H=u(e),k=p(e,"P",{});var Ce=r(k);ne=l(Ce,"Although I could have done the animation entirely in CSS, the purpose of this experiment was to see how I could animate using the multiple SVG\u2019s I had created previously."),Ce.forEach(t),Z=u(e),b=p(e,"P",{});var Oe=r(b);S=p(Oe,"IMG",{src:!0,alt:!0}),Oe.forEach(t),N=u(e),G=p(e,"P",{});var De=r(G);le=l(De,"This is the same screenshot of my Figma design asset from before. There are 4 paths here that I want to animate to each other with an easing between them."),De.forEach(t),J=u(e),w=p(e,"P",{});var Y=r(w);ie=l(Y,"With SVG\u2019s "),C=p(Y,"CODE",{});var qe=r(C);pe=l(qe,"animate"),qe.forEach(t),re=l(Y," the preferred effect was not achieved, though mostly the basic motion was."),Y.forEach(t),L=u(e),v=p(e,"P",{});var $=r(v);he=l($,"At first I had a lot of trouble trying to adapt my SVG\u2019s because GSAP isn\u2019t perfectly meant to be used to manipulate the "),O=p($,"CODE",{});var Me=r(O);ce=l(Me,"d"),Me.forEach(t),ue=l($," path of SVG elements. However, I eventually figured out how to do it after a bunch of Google searches."),$.forEach(t),W=u(e),_=p(e,"PRE",{class:!0});var Ue=r(_);Ue.forEach(t),z=u(e),h=p(e,"P",{});var m=r(h);fe=l(m,"The trick just happened to be to wrap the "),D=p(m,"CODE",{});var Fe=r(D);me=l(Fe,"d"),Fe.forEach(t),de=l(m," modification in the "),q=p(m,"CODE",{});var He=r(q);we=l(He,"attr"),He.forEach(t),ve=l(m," block. This successfully applied the "),M=p(m,"CODE",{});var Ze=r(M);ye=l(Ze,"dotA"),Ze.forEach(t),_e=l(m," path element in the SVG with the new "),F=p(m,"CODE",{});var Ne=r(F);ke=l(Ne,"d"),Ne.forEach(t),be=l(m," path."),m.forEach(t),R=u(e),E=p(e,"P",{});var Je=r(E);Se=l(Je,"I went on to apply this same animation to the other 4 path elements."),Je.forEach(t),B=u(e),I=p(e,"P",{});var Le=r(I);Ge=l(Le,"The final result:"),Le.forEach(t),K=u(e),P=p(e,"P",{});var We=r(P);A=p(We,"IMG",{src:!0,alt:!0}),We.forEach(t),Q=u(e),x=p(e,"P",{});var ze=r(x);Ee=l(ze,"I have a theory as to why there is that strange sharpness of the dots during the animation, but that\u2019s for another blog!"),ze.forEach(t),U=u(e),g=p(e,"P",{});var Re=r(g);T=p(Re,"IMG",{src:!0,alt:!0}),Re.forEach(t),X=u(e),V=p(e,"P",{});var Be=r(V);Ie=l(Be,"Thank you! Please let me know if you have any suggestions!"),Be.forEach(t),this.h()},h(){d(y,"href","https://greensock.com/"),d(y,"rel","nofollow"),Pe(S.src,xe="https://cdn-images-1.medium.com/max/800/1*AtJwk7_cpzGFJI6nZkMsjg.png")||d(S,"src",xe),d(S,"alt","Arjun before 2020 didn't know how important alt's were. Sorry no alt text!"),d(_,"class","language-javascript"),Pe(A.src,ge="https://cdn-images-1.medium.com/max/800/1*GOG3jx9dVNpwbrq4TjvZAA.gif")||d(A,"src",ge),d(A,"alt","Arjun before 2020 didn't know how important alt's were. Sorry no alt text!"),Pe(T.src,Te="https://cdn-images-1.medium.com/max/800/1*cuvajqmhcC8_croNpCLZFg.png")||d(T,"src",Te),d(T,"alt","Arjun before 2020 didn't know how important alt's were. Sorry no alt text!")},m(e,s){o(e,f,s),a(f,ee),a(f,j),a(j,te),a(f,ae),a(f,y),a(y,se),a(f,oe),o(e,H,s),o(e,k,s),a(k,ne),o(e,Z,s),o(e,b,s),a(b,S),o(e,N,s),o(e,G,s),a(G,le),o(e,J,s),o(e,w,s),a(w,ie),a(w,C),a(C,pe),a(w,re),o(e,L,s),o(e,v,s),a(v,he),a(v,O),a(O,ce),a(v,ue),o(e,W,s),o(e,_,s),_.innerHTML=Qe,o(e,z,s),o(e,h,s),a(h,fe),a(h,D),a(D,me),a(h,de),a(h,q),a(q,we),a(h,ve),a(h,M),a(M,ye),a(h,_e),a(h,F),a(F,ke),a(h,be),o(e,R,s),o(e,E,s),a(E,Se),o(e,B,s),o(e,I,s),a(I,Ge),o(e,K,s),o(e,P,s),a(P,A),o(e,Q,s),o(e,x,s),a(x,Ee),o(e,U,s),o(e,g,s),a(g,T),o(e,X,s),o(e,V,s),a(V,Ie)},p:Ae,i:Ae,o:Ae,d(e){e&&t(f),e&&t(H),e&&t(k),e&&t(Z),e&&t(b),e&&t(N),e&&t(G),e&&t(J),e&&t(w),e&&t(L),e&&t(v),e&&t(W),e&&t(_),e&&t(z),e&&t(h),e&&t(R),e&&t(E),e&&t(B),e&&t(I),e&&t(K),e&&t(P),e&&t(Q),e&&t(x),e&&t(U),e&&t(g),e&&t(X),e&&t(V)}}}const at={title:"Animating SVG with GreenSock \u{1F9E6}",description:"The next chapter in my quest to learn more about animating SVG on the web.",date:"2018-11-20",categories:[],keywords:[],published:!0,cover:"https://cdn-images-1.medium.com/max/800/1*GOG3jx9dVNpwbrq4TjvZAA.gif"};class st extends Xe{constructor(f){super(),Ye(this,f,null,et,$e,{})}}export{st as default,at as metadata};
