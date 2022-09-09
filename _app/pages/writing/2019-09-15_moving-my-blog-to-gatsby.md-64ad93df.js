import{S as Ve,i as We,s as ze,e as i,t as l,j as u,c as r,a as p,g as n,d as e,l as f,b as m,E as Ue,f as o,F as s,C as ke}from"../../chunks/index-40201def.js";function Ke(Fe){let k,Gt,Y,S,Pt,Z,y,Tt,E,Ct,xt,tt,I,Xe='<code class="language-bash">medium-2-md convertLocal medium-export/posts <span class="token parameter variable">-df</span></code>',et,w,Mt,N,St,jt,st,j,$t,at,b,At,G,Ht,qt,ot,$,ye,lt,A,Dt,nt,P,Le=`<code class="language-bash">
<span class="token comment"># make the new directory</span>
$ <span class="token keyword">for</span> <span class="token for-or-select variable">f</span> <span class="token keyword">in</span> *.md <span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token punctuation">..</span>/blog/<span class="token variable">$f</span> <span class="token punctuation">;</span> <span class="token function">cp</span> <span class="token variable">$f</span> <span class="token punctuation">..</span>/blog/<span class="token variable">$f</span>/index.md <span class="token punctuation">;</span> <span class="token keyword">done</span>

<span class="token comment"># remove the date from the beginning of the directory name</span>
$ <span class="token keyword">for</span> <span class="token for-or-select variable">d</span> <span class="token keyword">in</span> *.md <span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token function">mv</span> <span class="token variable">$d</span> <span class="token variable">$&#123;d<span class="token operator">#</span>*_&#125;</span> <span class="token punctuation">;</span> <span class="token keyword">done</span>

<span class="token comment"># remove the '.md' from the end of the directory name</span>
$ <span class="token keyword">for</span> <span class="token for-or-select variable">d</span> <span class="token keyword">in</span> *.md <span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token function">mv</span> <span class="token variable">$d</span> <span class="token variable">$&#123;d<span class="token operator">%</span>-*.md&#125;</span> <span class="token punctuation">;</span> <span class="token keyword">done</span>

<span class="token comment"># lower case all characters&#96;</span>
$ <span class="token keyword">for</span> <span class="token for-or-select variable">d</span> <span class="token keyword">in</span> * <span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token function">mv</span> <span class="token variable">$d</span> <span class="token variable">$&#123;d<span class="token operator">,,</span>&#125;</span> <span class="token punctuation">;</span> <span class="token keyword">done</span></code>`,it,h,Ot,V,Rt,Bt,W,Ut,Ft,rt,T,Xt,z,Lt,pt,v,Jt,C,Nt,Vt,ut,H,Wt,ft,c,zt,x,Kt,Qt,K,Yt,Zt,Q,te,ee,mt,q,se,ct,D,ae,ht,d,oe,O,le,ne,R,ie,re,dt,B,pe,kt,U,we,yt,F,ue,wt,X,fe,bt,g,me,M,ce,he;return{c(){k=i("p"),Gt=l("This shouldn\u2019t be too bad of a process, I just need to convert my Medium posts to markdown, set up a Gatsby blog, host on Github and do some styling."),Y=u(),S=i("h3"),Pt=l("Convert to Markdown"),Z=u(),y=i("p"),Tt=l("Taking the help of "),E=i("a"),Ct=l("this blog post"),xt=l(", I used medium-2-md to export and convert all my Medium posts to markdown."),tt=u(),I=i("pre"),et=u(),w=i("p"),Mt=l("This gave me a large list of markdown files that looked like "),N=i("code"),St=l("2017-04-09_Security-Review--UX-of-Canadian-banking-applications-53aa77dd2cf4.md"),jt=l("."),st=u(),j=i("h3"),$t=l("Set Up Gatsby Blog"),at=u(),b=i("p"),At=l("Gatsby\u2019s got a "),G=i("a"),Ht=l("blog-starter"),qt=l(" repo, which was quick to clone and get up and running."),ot=u(),$=i("img"),lt=u(),A=i("p"),Dt=l("Then using some bash scripts to format my markdown posts to the file structure Gatsby expects."),nt=u(),P=i("pre"),it=u(),h=i("p"),Ot=l("Going from "),V=i("code"),Rt=l("2017-04-09_Security-Review--UX-of-Canadian-banking-applications-53aa77dd2cf4.md"),Bt=l(", to "),W=i("code"),Ut=l("security-review--ux-of-canadian-banking-applications"),Ft=l("."),rt=u(),T=i("p"),Xt=l("This helps because now the url for my posts will look like: "),z=i("code"),Lt=l("www.arjunkalburgi.com/writing/security-review--ux-of-canadian-banking-applications"),pt=u(),v=i("p"),Jt=l("Now my blog is ready to go \u{1F603}. Thank you to my bff "),C=i("a"),Nt=l("Andrew Fontaine"),Vt=l(" for helping me out with this part."),ut=u(),H=i("h3"),Wt=l("Host on Github Pages"),ft=u(),c=i("p"),zt=l("Thanks to Gatsby\u2019s "),x=i("a"),Kt=l("gh-pages hosting tutorial"),Qt=l(" I was able to get this done pretty easily. Just needed to make a repo in github, set the "),K=i("code"),Yt=l("origin"),Zt=l(" in my local repo, follow the tutorial and then run "),Q=i("code"),te=l("npm run deploy"),ee=l(" . And I\u2019m up!"),mt=u(),q=i("p"),se=l("Without CI, every time I push to Github I\u2019ll need to run this command. This is okay for now but I\u2019ll probably look to change this later."),ct=u(),D=i("h3"),ae=l("Styling"),ht=u(),d=i("p"),oe=l("Honestly I could spend all day doing this, but for now I just want something quick. I\u2019ll use a lot of the CSS I already have from my "),O=i("a"),le=l("website"),ne=l(". But for the blog posts, for now I\u2019ll just copy what Varun\u2019s got on "),R=i("a"),ie=l("his site"),re=l(", it\u2019s gorgeous."),dt=u(),B=i("p"),pe=l("Despite the simplicity of this task, it was actually quite time consuming to style the blog. Based on my commit history, it was the markdown posts that took forever to style. For some reason, Gatsby does not have this built into their default style for their starter package I used, making me wish I knew to use a theme\u2019d starter from the beginning (there\u2019s no way to change your theme afterwards.)"),kt=u(),U=i("img"),yt=u(),F=i("h3"),ue=l("Results"),wt=u(),X=i("p"),fe=l("Pretty happy with the public facing results, but on the internal there\u2019s a couple things I lose."),bt=u(),g=i("p"),me=l("One is that I don\u2019t have the nice editor Medium provides. I installed "),M=i("a"),ce=l("Typora"),he=l(" to fix this (using it right now). It lets me paste images into the markdown files and helps me out with presenting my images as well."),this.h()},l(t){k=r(t,"P",{});var a=p(k);Gt=n(a,"This shouldn\u2019t be too bad of a process, I just need to convert my Medium posts to markdown, set up a Gatsby blog, host on Github and do some styling."),a.forEach(e),Y=f(t),S=r(t,"H3",{});var be=p(S);Pt=n(be,"Convert to Markdown"),be.forEach(e),Z=f(t),y=r(t,"P",{});var vt=p(y);Tt=n(vt,"Taking the help of "),E=r(vt,"A",{href:!0,rel:!0});var ve=p(E);Ct=n(ve,"this blog post"),ve.forEach(e),xt=n(vt,", I used medium-2-md to export and convert all my Medium posts to markdown."),vt.forEach(e),tt=f(t),I=r(t,"PRE",{class:!0});var Je=p(I);Je.forEach(e),et=f(t),w=r(t,"P",{});var gt=p(w);Mt=n(gt,"This gave me a large list of markdown files that looked like "),N=r(gt,"CODE",{});var ge=p(N);St=n(ge,"2017-04-09_Security-Review--UX-of-Canadian-banking-applications-53aa77dd2cf4.md"),ge.forEach(e),jt=n(gt,"."),gt.forEach(e),st=f(t),j=r(t,"H3",{});var _e=p(j);$t=n(_e,"Set Up Gatsby Blog"),_e.forEach(e),at=f(t),b=r(t,"P",{});var _t=p(b);At=n(_t,"Gatsby\u2019s got a "),G=r(_t,"A",{href:!0,rel:!0});var Ee=p(G);Ht=n(Ee,"blog-starter"),Ee.forEach(e),qt=n(_t," repo, which was quick to clone and get up and running."),_t.forEach(e),ot=f(t),$=r(t,"IMG",{src:!0}),lt=f(t),A=r(t,"P",{});var Ie=p(A);Dt=n(Ie,"Then using some bash scripts to format my markdown posts to the file structure Gatsby expects."),Ie.forEach(e),nt=f(t),P=r(t,"PRE",{class:!0});var Ne=p(P);Ne.forEach(e),it=f(t),h=r(t,"P",{});var L=p(h);Ot=n(L,"Going from "),V=r(L,"CODE",{});var Ge=p(V);Rt=n(Ge,"2017-04-09_Security-Review--UX-of-Canadian-banking-applications-53aa77dd2cf4.md"),Ge.forEach(e),Bt=n(L,", to "),W=r(L,"CODE",{});var Pe=p(W);Ut=n(Pe,"security-review--ux-of-canadian-banking-applications"),Pe.forEach(e),Ft=n(L,"."),L.forEach(e),rt=f(t),T=r(t,"P",{});var de=p(T);Xt=n(de,"This helps because now the url for my posts will look like: "),z=r(de,"CODE",{});var Te=p(z);Lt=n(Te,"www.arjunkalburgi.com/writing/security-review--ux-of-canadian-banking-applications"),Te.forEach(e),de.forEach(e),pt=f(t),v=r(t,"P",{});var Et=p(v);Jt=n(Et,"Now my blog is ready to go \u{1F603}. Thank you to my bff "),C=r(Et,"A",{href:!0,rel:!0});var Ce=p(C);Nt=n(Ce,"Andrew Fontaine"),Ce.forEach(e),Vt=n(Et," for helping me out with this part."),Et.forEach(e),ut=f(t),H=r(t,"H3",{});var xe=p(H);Wt=n(xe,"Host on Github Pages"),xe.forEach(e),ft=f(t),c=r(t,"P",{});var _=p(c);zt=n(_,"Thanks to Gatsby\u2019s "),x=r(_,"A",{href:!0,rel:!0});var Me=p(x);Kt=n(Me,"gh-pages hosting tutorial"),Me.forEach(e),Qt=n(_," I was able to get this done pretty easily. Just needed to make a repo in github, set the "),K=r(_,"CODE",{});var Se=p(K);Yt=n(Se,"origin"),Se.forEach(e),Zt=n(_," in my local repo, follow the tutorial and then run "),Q=r(_,"CODE",{});var je=p(Q);te=n(je,"npm run deploy"),je.forEach(e),ee=n(_," . And I\u2019m up!"),_.forEach(e),mt=f(t),q=r(t,"P",{});var $e=p(q);se=n($e,"Without CI, every time I push to Github I\u2019ll need to run this command. This is okay for now but I\u2019ll probably look to change this later."),$e.forEach(e),ct=f(t),D=r(t,"H3",{});var Ae=p(D);ae=n(Ae,"Styling"),Ae.forEach(e),ht=f(t),d=r(t,"P",{});var J=p(d);oe=n(J,"Honestly I could spend all day doing this, but for now I just want something quick. I\u2019ll use a lot of the CSS I already have from my "),O=r(J,"A",{href:!0});var He=p(O);le=n(He,"website"),He.forEach(e),ne=n(J,". But for the blog posts, for now I\u2019ll just copy what Varun\u2019s got on "),R=r(J,"A",{href:!0});var qe=p(R);ie=n(qe,"his site"),qe.forEach(e),re=n(J,", it\u2019s gorgeous."),J.forEach(e),dt=f(t),B=r(t,"P",{});var De=p(B);pe=n(De,"Despite the simplicity of this task, it was actually quite time consuming to style the blog. Based on my commit history, it was the markdown posts that took forever to style. For some reason, Gatsby does not have this built into their default style for their starter package I used, making me wish I knew to use a theme\u2019d starter from the beginning (there\u2019s no way to change your theme afterwards.)"),De.forEach(e),kt=f(t),U=r(t,"IMG",{src:!0}),yt=f(t),F=r(t,"H3",{});var Oe=p(F);ue=n(Oe,"Results"),Oe.forEach(e),wt=f(t),X=r(t,"P",{});var Re=p(X);fe=n(Re,"Pretty happy with the public facing results, but on the internal there\u2019s a couple things I lose."),Re.forEach(e),bt=f(t),g=r(t,"P",{});var It=p(g);me=n(It,"One is that I don\u2019t have the nice editor Medium provides. I installed "),M=r(It,"A",{href:!0,rel:!0});var Be=p(M);ce=n(Be,"Typora"),Be.forEach(e),he=n(It," to fix this (using it right now). It lets me paste images into the markdown files and helps me out with presenting my images as well."),It.forEach(e),this.h()},h(){m(E,"href","https://www.gautamdhameja.com/medium-to-markdown-converter/"),m(E,"rel","nofollow"),m(I,"class","language-bash"),m(G,"href","https://github.com/gatsbyjs/gatsby-starter-blog"),m(G,"rel","nofollow"),Ue($.src,ye="/post-imaages/2019-09-15_moving-my-blog-to-gatsby/initdeploy.png")||m($,"src",ye),m(P,"class","language-bash"),m(C,"href","https://twitter.com/afontaine_ca"),m(C,"rel","nofollow"),m(x,"href","https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/"),m(x,"rel","nofollow"),m(O,"href","www.arjunkalburgi.com"),m(R,"href","varun.ca/writing"),Ue(U.src,we="/post-imaages/2019-09-15_moving-my-blog-to-gatsby/result.png")||m(U,"src",we),m(M,"href","https://typora.io/"),m(M,"rel","nofollow")},m(t,a){o(t,k,a),s(k,Gt),o(t,Y,a),o(t,S,a),s(S,Pt),o(t,Z,a),o(t,y,a),s(y,Tt),s(y,E),s(E,Ct),s(y,xt),o(t,tt,a),o(t,I,a),I.innerHTML=Xe,o(t,et,a),o(t,w,a),s(w,Mt),s(w,N),s(N,St),s(w,jt),o(t,st,a),o(t,j,a),s(j,$t),o(t,at,a),o(t,b,a),s(b,At),s(b,G),s(G,Ht),s(b,qt),o(t,ot,a),o(t,$,a),o(t,lt,a),o(t,A,a),s(A,Dt),o(t,nt,a),o(t,P,a),P.innerHTML=Le,o(t,it,a),o(t,h,a),s(h,Ot),s(h,V),s(V,Rt),s(h,Bt),s(h,W),s(W,Ut),s(h,Ft),o(t,rt,a),o(t,T,a),s(T,Xt),s(T,z),s(z,Lt),o(t,pt,a),o(t,v,a),s(v,Jt),s(v,C),s(C,Nt),s(v,Vt),o(t,ut,a),o(t,H,a),s(H,Wt),o(t,ft,a),o(t,c,a),s(c,zt),s(c,x),s(x,Kt),s(c,Qt),s(c,K),s(K,Yt),s(c,Zt),s(c,Q),s(Q,te),s(c,ee),o(t,mt,a),o(t,q,a),s(q,se),o(t,ct,a),o(t,D,a),s(D,ae),o(t,ht,a),o(t,d,a),s(d,oe),s(d,O),s(O,le),s(d,ne),s(d,R),s(R,ie),s(d,re),o(t,dt,a),o(t,B,a),s(B,pe),o(t,kt,a),o(t,U,a),o(t,yt,a),o(t,F,a),s(F,ue),o(t,wt,a),o(t,X,a),s(X,fe),o(t,bt,a),o(t,g,a),s(g,me),s(g,M),s(M,ce),s(g,he)},p:ke,i:ke,o:ke,d(t){t&&e(k),t&&e(Y),t&&e(S),t&&e(Z),t&&e(y),t&&e(tt),t&&e(I),t&&e(et),t&&e(w),t&&e(st),t&&e(j),t&&e(at),t&&e(b),t&&e(ot),t&&e($),t&&e(lt),t&&e(A),t&&e(nt),t&&e(P),t&&e(it),t&&e(h),t&&e(rt),t&&e(T),t&&e(pt),t&&e(v),t&&e(ut),t&&e(H),t&&e(ft),t&&e(c),t&&e(mt),t&&e(q),t&&e(ct),t&&e(D),t&&e(ht),t&&e(d),t&&e(dt),t&&e(B),t&&e(kt),t&&e(U),t&&e(yt),t&&e(F),t&&e(wt),t&&e(X),t&&e(bt),t&&e(g)}}}const Ye={title:"Moving my blog to Gatsby",description:"After seeing a shift in the industry from Medium, it's time I  leave as well and host my blog on my own site.",date:"2019-09-15",categories:[],keywords:[],published:!0,oldslugthing:"/2019-09-15_moving-my-blog-to-gatsby"};class Ze extends Ve{constructor(k){super(),We(this,k,null,Ke,ze,{})}}export{Ze as default,Ye as metadata};