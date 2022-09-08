import{S as Ue,i as Ye,s as $e,e as i,t as n,j as c,c as p,a as r,g as l,d as t,l as u,b as d,X as Pe,f as o,M as a,H as Ae}from"../../chunks/vendor-66fc1351.js";function et(Be){let f,ee,j,te,ae,_,se,oe,Z,y,ne,F,b,S,xe,N,G,le,J,w,ie,C,pe,re,L,v,he,O,ce,ue,W,k,Ke=`<code class="language-javascript">tl<span class="token punctuation">.</span><span class="token function">to</span><span class="token punctuation">(</span>dotA<span class="token punctuation">,</span>   
      <span class="token number">0.8</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>  
      attr<span class="token operator">:</span> <span class="token punctuation">&#123;</span>  
        d<span class="token operator">:</span> <span class="token string">"M59.0596 ... 959Z"</span>  
      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>   
      ease<span class="token operator">:</span> Power1<span class="token punctuation">.</span>easeInOut<span class="token punctuation">,</span>  
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span></code>`,z,h,fe,D,me,de,M,we,ve,q,_e,ke,H,ye,be,R,E,Se,X,I,Ge,B,P,A,ge,K,x,Ee,Q,g,T,Te,U,V,Ie;return{c(){f=i("p"),ee=n("Previously, I used SVG\u2019s "),j=i("code"),te=n("animate"),ae=n(" tag to animate a new Slackify logo I was working on. Here I did the same thing but with the "),_=i("a"),se=n("GreenSock Animation Platform (GSAP, GreenSock)"),oe=n("."),Z=c(),y=i("p"),ne=n("Although I could have done the animation entirely in CSS, the purpose of this experiment was to see how I could animate using the multiple SVG\u2019s I had created previously."),F=c(),b=i("p"),S=i("img"),N=c(),G=i("p"),le=n("This is the same screenshot of my Figma design asset from before. There are 4 paths here that I want to animate to each other with an easing between them."),J=c(),w=i("p"),ie=n("With SVG\u2019s "),C=i("code"),pe=n("animate"),re=n(" the preferred effect was not achieved, though mostly the basic motion was."),L=c(),v=i("p"),he=n("At first I had a lot of trouble trying to adapt my SVG\u2019s because GSAP isn\u2019t perfectly meant to be used to manipulate the "),O=i("code"),ce=n("d"),ue=n(" path of SVG elements. However, I eventually figured out how to do it after a bunch of Google searches."),W=c(),k=i("pre"),z=c(),h=i("p"),fe=n("The trick just happened to be to wrap the "),D=i("code"),me=n("d"),de=n(" modification in the "),M=i("code"),we=n("attr"),ve=n(" block. This successfully applied the "),q=i("code"),_e=n("dotA"),ke=n(" path element in the SVG with the new "),H=i("code"),ye=n("d"),be=n(" path."),R=c(),E=i("p"),Se=n("I went on to apply this same animation to the other 4 path elements."),X=c(),I=i("p"),Ge=n("The final result:"),B=c(),P=i("p"),A=i("img"),K=c(),x=i("p"),Ee=n("I have a theory as to why there is that strange sharpness of the dots during the animation, but that\u2019s for another blog!"),Q=c(),g=i("p"),T=i("img"),U=c(),V=i("p"),Ie=n("Thank you! Please let me know if you have any suggestions!"),this.h()},l(e){f=p(e,"P",{});var s=r(f);ee=l(s,"Previously, I used SVG\u2019s "),j=p(s,"CODE",{});var Ve=r(j);te=l(Ve,"animate"),Ve.forEach(t),ae=l(s," tag to animate a new Slackify logo I was working on. Here I did the same thing but with the "),_=p(s,"A",{href:!0,rel:!0});var je=r(_);se=l(je,"GreenSock Animation Platform (GSAP, GreenSock)"),je.forEach(t),oe=l(s,"."),s.forEach(t),Z=u(e),y=p(e,"P",{});var Ce=r(y);ne=l(Ce,"Although I could have done the animation entirely in CSS, the purpose of this experiment was to see how I could animate using the multiple SVG\u2019s I had created previously."),Ce.forEach(t),F=u(e),b=p(e,"P",{});var Oe=r(b);S=p(Oe,"IMG",{src:!0,alt:!0}),Oe.forEach(t),N=u(e),G=p(e,"P",{});var De=r(G);le=l(De,"This is the same screenshot of my Figma design asset from before. There are 4 paths here that I want to animate to each other with an easing between them."),De.forEach(t),J=u(e),w=p(e,"P",{});var Y=r(w);ie=l(Y,"With SVG\u2019s "),C=p(Y,"CODE",{});var Me=r(C);pe=l(Me,"animate"),Me.forEach(t),re=l(Y," the preferred effect was not achieved, though mostly the basic motion was."),Y.forEach(t),L=u(e),v=p(e,"P",{});var $=r(v);he=l($,"At first I had a lot of trouble trying to adapt my SVG\u2019s because GSAP isn\u2019t perfectly meant to be used to manipulate the "),O=p($,"CODE",{});var qe=r(O);ce=l(qe,"d"),qe.forEach(t),ue=l($," path of SVG elements. However, I eventually figured out how to do it after a bunch of Google searches."),$.forEach(t),W=u(e),k=p(e,"PRE",{class:!0});var Qe=r(k);Qe.forEach(t),z=u(e),h=p(e,"P",{});var m=r(h);fe=l(m,"The trick just happened to be to wrap the "),D=p(m,"CODE",{});var He=r(D);me=l(He,"d"),He.forEach(t),de=l(m," modification in the "),M=p(m,"CODE",{});var Ze=r(M);we=l(Ze,"attr"),Ze.forEach(t),ve=l(m," block. This successfully applied the "),q=p(m,"CODE",{});var Fe=r(q);_e=l(Fe,"dotA"),Fe.forEach(t),ke=l(m," path element in the SVG with the new "),H=p(m,"CODE",{});var Ne=r(H);ye=l(Ne,"d"),Ne.forEach(t),be=l(m," path."),m.forEach(t),R=u(e),E=p(e,"P",{});var Je=r(E);Se=l(Je,"I went on to apply this same animation to the other 4 path elements."),Je.forEach(t),X=u(e),I=p(e,"P",{});var Le=r(I);Ge=l(Le,"The final result:"),Le.forEach(t),B=u(e),P=p(e,"P",{});var We=r(P);A=p(We,"IMG",{src:!0,alt:!0}),We.forEach(t),K=u(e),x=p(e,"P",{});var ze=r(x);Ee=l(ze,"I have a theory as to why there is that strange sharpness of the dots during the animation, but that\u2019s for another blog!"),ze.forEach(t),Q=u(e),g=p(e,"P",{});var Re=r(g);T=p(Re,"IMG",{src:!0,alt:!0}),Re.forEach(t),U=u(e),V=p(e,"P",{});var Xe=r(V);Ie=l(Xe,"Thank you! Please let me know if you have any suggestions!"),Xe.forEach(t),this.h()},h(){d(_,"href","https://greensock.com/"),d(_,"rel","nofollow"),Pe(S.src,xe="https://cdn-images-1.medium.com/max/800/1*AtJwk7_cpzGFJI6nZkMsjg.png")||d(S,"src",xe),d(S,"alt","Arjun before 2020 didn't know how important alt's were. Sorry no alt text!"),d(k,"class","language-javascript"),Pe(A.src,ge="https://cdn-images-1.medium.com/max/800/1*GOG3jx9dVNpwbrq4TjvZAA.gif")||d(A,"src",ge),d(A,"alt","Arjun before 2020 didn't know how important alt's were. Sorry no alt text!"),Pe(T.src,Te="https://cdn-images-1.medium.com/max/800/1*cuvajqmhcC8_croNpCLZFg.png")||d(T,"src",Te),d(T,"alt","Arjun before 2020 didn't know how important alt's were. Sorry no alt text!")},m(e,s){o(e,f,s),a(f,ee),a(f,j),a(j,te),a(f,ae),a(f,_),a(_,se),a(f,oe),o(e,Z,s),o(e,y,s),a(y,ne),o(e,F,s),o(e,b,s),a(b,S),o(e,N,s),o(e,G,s),a(G,le),o(e,J,s),o(e,w,s),a(w,ie),a(w,C),a(C,pe),a(w,re),o(e,L,s),o(e,v,s),a(v,he),a(v,O),a(O,ce),a(v,ue),o(e,W,s),o(e,k,s),k.innerHTML=Ke,o(e,z,s),o(e,h,s),a(h,fe),a(h,D),a(D,me),a(h,de),a(h,M),a(M,we),a(h,ve),a(h,q),a(q,_e),a(h,ke),a(h,H),a(H,ye),a(h,be),o(e,R,s),o(e,E,s),a(E,Se),o(e,X,s),o(e,I,s),a(I,Ge),o(e,B,s),o(e,P,s),a(P,A),o(e,K,s),o(e,x,s),a(x,Ee),o(e,Q,s),o(e,g,s),a(g,T),o(e,U,s),o(e,V,s),a(V,Ie)},p:Ae,i:Ae,o:Ae,d(e){e&&t(f),e&&t(Z),e&&t(y),e&&t(F),e&&t(b),e&&t(N),e&&t(G),e&&t(J),e&&t(w),e&&t(L),e&&t(v),e&&t(W),e&&t(k),e&&t(z),e&&t(h),e&&t(R),e&&t(E),e&&t(X),e&&t(I),e&&t(B),e&&t(P),e&&t(K),e&&t(x),e&&t(Q),e&&t(g),e&&t(U),e&&t(V)}}}const at={title:"Animating SVG with GreenSock \u{1F9E6}",description:"The next chapter in my quest to learn more about animating SVG on the web.",date:"2018-11-20",categories:[],keywords:[],published:!0,cover:"https://cdn-images-1.medium.com/max/800/1*GOG3jx9dVNpwbrq4TjvZAA.gif"};class st extends Ue{constructor(f){super();Ye(this,f,null,et,$e,{})}}export{st as default,at as metadata};