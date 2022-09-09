import{S as Ve,i as We,s as ze,e as i,t as l,j as u,c as r,a as p,g as n,d as e,l as f,b as m,L as Ue,f as a,E as s,I as ke}from"../../chunks/vendor-89e59966.js";function Ke(Fe){let k,Gt,Y,M,Pt,Z,y,Tt,E,xt,Ct,tt,I,Le='<code class="language-bash">medium-2-md convertLocal medium-export/posts -df</code>',et,w,jt,N,Mt,St,st,S,$t,ot,b,At,G,Ht,qt,at,$,ye,lt,A,Dt,nt,P,Xe=`<code class="language-bash">
<span class="token comment"># make the new directory</span>
$ <span class="token keyword">for</span> <span class="token for-or-select variable">f</span> <span class="token keyword">in</span> *.md <span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token function">mkdir</span> -p <span class="token punctuation">..</span>/blog/<span class="token variable">$f</span> <span class="token punctuation">;</span> <span class="token function">cp</span> <span class="token variable">$f</span> <span class="token punctuation">..</span>/blog/<span class="token variable">$f</span>/index.md <span class="token punctuation">;</span> <span class="token keyword">done</span>

<span class="token comment"># remove the date from the beginning of the directory name</span>
$ <span class="token keyword">for</span> <span class="token for-or-select variable">d</span> <span class="token keyword">in</span> *.md <span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token function">mv</span> <span class="token variable">$d</span> <span class="token variable">$&#123;d<span class="token operator">#</span>*_&#125;</span> <span class="token punctuation">;</span> <span class="token keyword">done</span>

<span class="token comment"># remove the '.md' from the end of the directory name</span>
$ <span class="token keyword">for</span> <span class="token for-or-select variable">d</span> <span class="token keyword">in</span> *.md <span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token function">mv</span> <span class="token variable">$d</span> <span class="token variable">$&#123;d<span class="token operator">%</span>-*.md&#125;</span> <span class="token punctuation">;</span> <span class="token keyword">done</span>

<span class="token comment"># lower case all characters&#96;</span>
$ <span class="token keyword">for</span> <span class="token for-or-select variable">d</span> <span class="token keyword">in</span> * <span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token function">mv</span> <span class="token variable">$d</span> <span class="token variable">$&#123;d<span class="token operator">,,</span>&#125;</span> <span class="token punctuation">;</span> <span class="token keyword">done</span></code>`,it,h,Ot,V,Rt,Bt,W,Ut,Ft,rt,T,Lt,z,Xt,pt,v,Jt,x,Nt,Vt,ut,H,Wt,ft,c,zt,C,Kt,Qt,K,Yt,Zt,Q,te,ee,mt,q,se,ct,D,oe,ht,d,ae,O,le,ne,R,ie,re,dt,B,pe,kt,U,we,yt,F,ue,wt,L,fe,bt,g,me,j,ce,he;return{c(){k=i("p"),Gt=l("This shouldn\u2019t be too bad of a process, I just need to convert my Medium posts to markdown, set up a Gatsby blog, host on Github and do some styling."),Y=u(),M=i("h3"),Pt=l("Convert to Markdown"),Z=u(),y=i("p"),Tt=l("Taking the help of "),E=i("a"),xt=l("this blog post"),Ct=l(", I used medium-2-md to export and convert all my Medium posts to markdown."),tt=u(),I=i("pre"),et=u(),w=i("p"),jt=l("This gave me a large list of markdown files that looked like "),N=i("code"),Mt=l("2017-04-09_Security-Review--UX-of-Canadian-banking-applications-53aa77dd2cf4.md"),St=l("."),st=u(),S=i("h3"),$t=l("Set Up Gatsby Blog"),ot=u(),b=i("p"),At=l("Gatsby\u2019s got a "),G=i("a"),Ht=l("blog-starter"),qt=l(" repo, which was quick to clone and get up and running."),at=u(),$=i("img"),lt=u(),A=i("p"),Dt=l("Then using some bash scripts to format my markdown posts to the file structure Gatsby expects."),nt=u(),P=i("pre"),it=u(),h=i("p"),Ot=l("Going from "),V=i("code"),Rt=l("2017-04-09_Security-Review--UX-of-Canadian-banking-applications-53aa77dd2cf4.md"),Bt=l(", to "),W=i("code"),Ut=l("security-review--ux-of-canadian-banking-applications"),Ft=l("."),rt=u(),T=i("p"),Lt=l("This helps because now the url for my posts will look like: "),z=i("code"),Xt=l("www.arjunkalburgi.com/writing/security-review--ux-of-canadian-banking-applications"),pt=u(),v=i("p"),Jt=l("Now my blog is ready to go \u{1F603}. Thank you to my bff "),x=i("a"),Nt=l("Andrew Fontaine"),Vt=l(" for helping me out with this part."),ut=u(),H=i("h3"),Wt=l("Host on Github Pages"),ft=u(),c=i("p"),zt=l("Thanks to Gatsby\u2019s "),C=i("a"),Kt=l("gh-pages hosting tutorial"),Qt=l(" I was able to get this done pretty easily. Just needed to make a repo in github, set the "),K=i("code"),Yt=l("origin"),Zt=l(" in my local repo, follow the tutorial and then run "),Q=i("code"),te=l("npm run deploy"),ee=l(" . And I\u2019m up!"),mt=u(),q=i("p"),se=l("Without CI, every time I push to Github I\u2019ll need to run this command. This is okay for now but I\u2019ll probably look to change this later."),ct=u(),D=i("h3"),oe=l("Styling"),ht=u(),d=i("p"),ae=l("Honestly I could spend all day doing this, but for now I just want something quick. I\u2019ll use a lot of the CSS I already have from my "),O=i("a"),le=l("website"),ne=l(". But for the blog posts, for now I\u2019ll just copy what Varun\u2019s got on "),R=i("a"),ie=l("his site"),re=l(", it\u2019s gorgeous."),dt=u(),B=i("p"),pe=l("Despite the simplicity of this task, it was actually quite time consuming to style the blog. Based on my commit history, it was the markdown posts that took forever to style. For some reason, Gatsby does not have this built into their default style for their starter package I used, making me wish I knew to use a theme\u2019d starter from the beginning (there\u2019s no way to change your theme afterwards.)"),kt=u(),U=i("img"),yt=u(),F=i("h3"),ue=l("Results"),wt=u(),L=i("p"),fe=l("Pretty happy with the public facing results, but on the internal there\u2019s a couple things I lose."),bt=u(),g=i("p"),me=l("One is that I don\u2019t have the nice editor Medium provides. I installed "),j=i("a"),ce=l("Typora"),he=l(" to fix this (using it right now). It lets me paste images into the markdown files and helps me out with presenting my images as well."),this.h()},l(t){k=r(t,"P",{});var o=p(k);Gt=n(o,"This shouldn\u2019t be too bad of a process, I just need to convert my Medium posts to markdown, set up a Gatsby blog, host on Github and do some styling."),o.forEach(e),Y=f(t),M=r(t,"H3",{});var be=p(M);Pt=n(be,"Convert to Markdown"),be.forEach(e),Z=f(t),y=r(t,"P",{});var vt=p(y);Tt=n(vt,"Taking the help of "),E=r(vt,"A",{href:!0,rel:!0});var ve=p(E);xt=n(ve,"this blog post"),ve.forEach(e),Ct=n(vt,", I used medium-2-md to export and convert all my Medium posts to markdown."),vt.forEach(e),tt=f(t),I=r(t,"PRE",{class:!0});var Je=p(I);Je.forEach(e),et=f(t),w=r(t,"P",{});var gt=p(w);jt=n(gt,"This gave me a large list of markdown files that looked like "),N=r(gt,"CODE",{});var ge=p(N);Mt=n(ge,"2017-04-09_Security-Review--UX-of-Canadian-banking-applications-53aa77dd2cf4.md"),ge.forEach(e),St=n(gt,"."),gt.forEach(e),st=f(t),S=r(t,"H3",{});var _e=p(S);$t=n(_e,"Set Up Gatsby Blog"),_e.forEach(e),ot=f(t),b=r(t,"P",{});var _t=p(b);At=n(_t,"Gatsby\u2019s got a "),G=r(_t,"A",{href:!0,rel:!0});var Ee=p(G);Ht=n(Ee,"blog-starter"),Ee.forEach(e),qt=n(_t," repo, which was quick to clone and get up and running."),_t.forEach(e),at=f(t),$=r(t,"IMG",{src:!0}),lt=f(t),A=r(t,"P",{});var Ie=p(A);Dt=n(Ie,"Then using some bash scripts to format my markdown posts to the file structure Gatsby expects."),Ie.forEach(e),nt=f(t),P=r(t,"PRE",{class:!0});var Ne=p(P);Ne.forEach(e),it=f(t),h=r(t,"P",{});var X=p(h);Ot=n(X,"Going from "),V=r(X,"CODE",{});var Ge=p(V);Rt=n(Ge,"2017-04-09_Security-Review--UX-of-Canadian-banking-applications-53aa77dd2cf4.md"),Ge.forEach(e),Bt=n(X,", to "),W=r(X,"CODE",{});var Pe=p(W);Ut=n(Pe,"security-review--ux-of-canadian-banking-applications"),Pe.forEach(e),Ft=n(X,"."),X.forEach(e),rt=f(t),T=r(t,"P",{});var de=p(T);Lt=n(de,"This helps because now the url for my posts will look like: "),z=r(de,"CODE",{});var Te=p(z);Xt=n(Te,"www.arjunkalburgi.com/writing/security-review--ux-of-canadian-banking-applications"),Te.forEach(e),de.forEach(e),pt=f(t),v=r(t,"P",{});var Et=p(v);Jt=n(Et,"Now my blog is ready to go \u{1F603}. Thank you to my bff "),x=r(Et,"A",{href:!0,rel:!0});var xe=p(x);Nt=n(xe,"Andrew Fontaine"),xe.forEach(e),Vt=n(Et," for helping me out with this part."),Et.forEach(e),ut=f(t),H=r(t,"H3",{});var Ce=p(H);Wt=n(Ce,"Host on Github Pages"),Ce.forEach(e),ft=f(t),c=r(t,"P",{});var _=p(c);zt=n(_,"Thanks to Gatsby\u2019s "),C=r(_,"A",{href:!0,rel:!0});var je=p(C);Kt=n(je,"gh-pages hosting tutorial"),je.forEach(e),Qt=n(_," I was able to get this done pretty easily. Just needed to make a repo in github, set the "),K=r(_,"CODE",{});var Me=p(K);Yt=n(Me,"origin"),Me.forEach(e),Zt=n(_," in my local repo, follow the tutorial and then run "),Q=r(_,"CODE",{});var Se=p(Q);te=n(Se,"npm run deploy"),Se.forEach(e),ee=n(_," . And I\u2019m up!"),_.forEach(e),mt=f(t),q=r(t,"P",{});var $e=p(q);se=n($e,"Without CI, every time I push to Github I\u2019ll need to run this command. This is okay for now but I\u2019ll probably look to change this later."),$e.forEach(e),ct=f(t),D=r(t,"H3",{});var Ae=p(D);oe=n(Ae,"Styling"),Ae.forEach(e),ht=f(t),d=r(t,"P",{});var J=p(d);ae=n(J,"Honestly I could spend all day doing this, but for now I just want something quick. I\u2019ll use a lot of the CSS I already have from my "),O=r(J,"A",{href:!0});var He=p(O);le=n(He,"website"),He.forEach(e),ne=n(J,". But for the blog posts, for now I\u2019ll just copy what Varun\u2019s got on "),R=r(J,"A",{href:!0});var qe=p(R);ie=n(qe,"his site"),qe.forEach(e),re=n(J,", it\u2019s gorgeous."),J.forEach(e),dt=f(t),B=r(t,"P",{});var De=p(B);pe=n(De,"Despite the simplicity of this task, it was actually quite time consuming to style the blog. Based on my commit history, it was the markdown posts that took forever to style. For some reason, Gatsby does not have this built into their default style for their starter package I used, making me wish I knew to use a theme\u2019d starter from the beginning (there\u2019s no way to change your theme afterwards.)"),De.forEach(e),kt=f(t),U=r(t,"IMG",{src:!0}),yt=f(t),F=r(t,"H3",{});var Oe=p(F);ue=n(Oe,"Results"),Oe.forEach(e),wt=f(t),L=r(t,"P",{});var Re=p(L);fe=n(Re,"Pretty happy with the public facing results, but on the internal there\u2019s a couple things I lose."),Re.forEach(e),bt=f(t),g=r(t,"P",{});var It=p(g);me=n(It,"One is that I don\u2019t have the nice editor Medium provides. I installed "),j=r(It,"A",{href:!0,rel:!0});var Be=p(j);ce=n(Be,"Typora"),Be.forEach(e),he=n(It," to fix this (using it right now). It lets me paste images into the markdown files and helps me out with presenting my images as well."),It.forEach(e),this.h()},h(){m(E,"href","https://www.gautamdhameja.com/medium-to-markdown-converter/"),m(E,"rel","nofollow"),m(I,"class","language-bash"),m(G,"href","https://github.com/gatsbyjs/gatsby-starter-blog"),m(G,"rel","nofollow"),Ue($.src,ye="/post-imaages/2019-09-15_moving-my-blog-to-gatsby/initdeploy.png")||m($,"src",ye),m(P,"class","language-bash"),m(x,"href","https://twitter.com/afontaine_ca"),m(x,"rel","nofollow"),m(C,"href","https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/"),m(C,"rel","nofollow"),m(O,"href","www.arjunkalburgi.com"),m(R,"href","varun.ca/writing"),Ue(U.src,we="/post-imaages/2019-09-15_moving-my-blog-to-gatsby/result.png")||m(U,"src",we),m(j,"href","https://typora.io/"),m(j,"rel","nofollow")},m(t,o){a(t,k,o),s(k,Gt),a(t,Y,o),a(t,M,o),s(M,Pt),a(t,Z,o),a(t,y,o),s(y,Tt),s(y,E),s(E,xt),s(y,Ct),a(t,tt,o),a(t,I,o),I.innerHTML=Le,a(t,et,o),a(t,w,o),s(w,jt),s(w,N),s(N,Mt),s(w,St),a(t,st,o),a(t,S,o),s(S,$t),a(t,ot,o),a(t,b,o),s(b,At),s(b,G),s(G,Ht),s(b,qt),a(t,at,o),a(t,$,o),a(t,lt,o),a(t,A,o),s(A,Dt),a(t,nt,o),a(t,P,o),P.innerHTML=Xe,a(t,it,o),a(t,h,o),s(h,Ot),s(h,V),s(V,Rt),s(h,Bt),s(h,W),s(W,Ut),s(h,Ft),a(t,rt,o),a(t,T,o),s(T,Lt),s(T,z),s(z,Xt),a(t,pt,o),a(t,v,o),s(v,Jt),s(v,x),s(x,Nt),s(v,Vt),a(t,ut,o),a(t,H,o),s(H,Wt),a(t,ft,o),a(t,c,o),s(c,zt),s(c,C),s(C,Kt),s(c,Qt),s(c,K),s(K,Yt),s(c,Zt),s(c,Q),s(Q,te),s(c,ee),a(t,mt,o),a(t,q,o),s(q,se),a(t,ct,o),a(t,D,o),s(D,oe),a(t,ht,o),a(t,d,o),s(d,ae),s(d,O),s(O,le),s(d,ne),s(d,R),s(R,ie),s(d,re),a(t,dt,o),a(t,B,o),s(B,pe),a(t,kt,o),a(t,U,o),a(t,yt,o),a(t,F,o),s(F,ue),a(t,wt,o),a(t,L,o),s(L,fe),a(t,bt,o),a(t,g,o),s(g,me),s(g,j),s(j,ce),s(g,he)},p:ke,i:ke,o:ke,d(t){t&&e(k),t&&e(Y),t&&e(M),t&&e(Z),t&&e(y),t&&e(tt),t&&e(I),t&&e(et),t&&e(w),t&&e(st),t&&e(S),t&&e(ot),t&&e(b),t&&e(at),t&&e($),t&&e(lt),t&&e(A),t&&e(nt),t&&e(P),t&&e(it),t&&e(h),t&&e(rt),t&&e(T),t&&e(pt),t&&e(v),t&&e(ut),t&&e(H),t&&e(ft),t&&e(c),t&&e(mt),t&&e(q),t&&e(ct),t&&e(D),t&&e(ht),t&&e(d),t&&e(dt),t&&e(B),t&&e(kt),t&&e(U),t&&e(yt),t&&e(F),t&&e(wt),t&&e(L),t&&e(bt),t&&e(g)}}}const Ye={title:"Moving my blog to Gatsby",description:"After seeing a shift in the industry from Medium, it's time I  leave as well and host my blog on my own site.",date:"2019-09-15",categories:[],keywords:[],published:!0,oldslugthing:"/2019-09-15_moving-my-blog-to-gatsby"};class Ze extends Ve{constructor(k){super();We(this,k,null,Ke,ze,{})}}export{Ze as default,Ye as metadata};