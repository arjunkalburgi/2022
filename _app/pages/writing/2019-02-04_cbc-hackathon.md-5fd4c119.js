import{S as Xa,i as Ja,s as $a,e as i,t as p,j as u,c as l,a as r,g as f,d as t,l as n,E as c,b as h,f as o,F as s,C as $t}from"../../chunks/index-40201def.js";function eo(Za){let w,lt,Ee,B,H,ea,xe,S,rt,Ce,L,U,ta,Ie,q,pt,ke,M,z,aa,Pe,g,ft,Ae,O,G,oa,Re,F,ut,je,N,D,sa,Te,V,nt,Be,Q,W,ia,He,K,ce,E,ht,Se,Y,dt,Le,Z,mt,Ue,X,ct,qe,v,wt,x,vt,bt,Me,d,_t,C,yt,Et,I,xt,Ct,ze,J,It,ge,b,kt,we,Pt,At,Oe,$,Rt,Ge,ee,jt,Fe,te,Tt,Ne,ae,Bt,De,oe,Ht,Ve,_,St,ve,Lt,Ut,Qe,y,qt,be,Mt,zt,We,se,_e,k,gt,Ke,ie,Ot,Ye,le,Gt,Ze,P,re,la,Ft,Xe,pe,ye,A,Nt,Je,m,Dt,R,Vt,Qt,j,Wt,Kt,$e,fe,ue,ra,et,ne,Yt,tt,T,Zt,he,pa;return{c(){w=i("p"),lt=p("This weekend I teamed up with my friends Abid and Meg to participate in CBC Radio-Canada\u2019s hackathon all about personalization."),Ee=u(),B=i("p"),H=i("img"),xe=u(),S=i("p"),rt=p("Our team chose to personalize the content imagery that viewers can see across CBC\u2019s website."),Ce=u(),L=i("p"),U=i("img"),Ie=u(),q=i("p"),pt=p("We created user\u2019s personas using the articles they read previously to determine their interests:"),ke=u(),M=i("p"),z=i("img"),Pe=u(),g=i("p"),ft=p("And created metadata for the CBC content using Google\u2019s NLP API to find topics from the content\u2019s description:"),Ae=u(),O=i("p"),G=i("img"),Re=u(),F=i("p"),ut=p("To decide what to show the viewer, we match the two sets of keywords together and use it for our image lookup."),je=u(),N=i("p"),D=i("img"),Te=u(),V=i("p"),nt=p("And thus, we have two different UI\u2019s for the different users."),Be=u(),Q=i("p"),W=i("img"),He=u(),K=i("blockquote"),ce=i("p"),E=i("a"),ht=p("View the presentation slides"),Se=u(),Y=i("h3"),dt=p("Developing Engaging\xA0Images"),Le=u(),Z=i("p"),mt=p("I worked on the front end (and a little bit of design) for the project."),Ue=u(),X=i("h4"),ct=p("Hackathon Starter"),qe=u(),v=i("p"),wt=p("There\u2019s a github repository called the "),x=i("a"),vt=p("Hackathon Starter"),bt=p(" that we used to quick start the application. It\u2019s just a simple boilerplate Node.js app designed to be as versatile as possible."),Me=u(),d=i("p"),_t=p("I cleaned out most of the app and built my own view using "),C=i("a"),yt=p("HTML5UP"),Et=p("\u2019s "),I=i("a"),xt=p("Forty"),Ct=p(" template that would become the view of our app."),ze=u(),J=i("h4"),It=p("Implementing the\xA0API"),ge=u(),b=i("p"),kt=p("Next I used "),we=i("code"),Pt=p("axios"),At=p(" to call the API my group-mates prepared for the front-end and created a new router for the application to take in a userId from the URL."),Oe=u(),$=i("p"),Rt=p("Inputting the userId from the URL just made sense for this project since CBC Radio Canada doesn\u2019t actually have accounts, so user data is actually stored through browser cache. Using a router was better than creating a \u201Clog in\u201D page since the real CBC Radio Canada wouldn\u2019t have a log in anyway."),Ge=u(),ee=i("h4"),jt=p("Fixing the\xA0Design"),Fe=u(),te=i("p"),Tt=p("HTML5UP\u2019s Forty is a great template, but it didn\u2019t follow Radio Canada\u2019s mandatory accessibility guidelines. I put a bit of my CSS and design skills to work fixing these issues."),Ne=u(),ae=i("p"),Bt=p("First I fixed the text size, good accessibility should have text size above 12px."),De=u(),oe=i("p"),Ht=p("Then I fixed the colour contrast of the white text on the image content tiles by changing the colours to values that have acceptable contrast."),Ve=u(),_=i("p"),St=p("I also made sure that text was not "),ve=i("code"),Lt=p("uppercase"),Ut=p("\xA0. Uppercase text is harder to read and screen readers will read this text as shouting. A poor experience."),Qe=u(),y=i("p"),qt=p("Lastly I added an animation to only show descriptions on hover, this was so that you could better see the images in the background. Accessibility guidelines state that all hidden text should still be readable by screen readers, so I found a way to create the animation without using "),be=i("code"),Mt=p("display: none"),zt=p("."),We=u(),se=i("blockquote"),_e=i("p"),k=i("a"),gt=p("View all code on Github"),Ke=u(),ie=i("h3"),Ot=p("Results"),Ye=u(),le=i("p"),Gt=p("In the end we did what we wanted, creating an entirely new experience for Radio Canada viewers with personalized content. We\u2019re really proud of our work, this was a great project."),Ze=u(),P=i("p"),re=i("img"),Ft=p(`
(Note text here is uppercase because it is an old\xA0version)`),Xe=u(),pe=i("blockquote"),ye=i("p"),A=i("a"),Nt=p("See us present live!"),Je=u(),m=i("p"),Dt=p("Tell me how it is via "),R=i("a"),Vt=p("Twitter"),Qt=p(" or "),j=i("a"),Wt=p("Instagram"),Kt=p("!"),$e=u(),fe=i("p"),ue=i("img"),et=u(),ne=i("h5"),Yt=p("Bonus,"),tt=u(),T=i("p"),Zt=p(`such a bad screen-grab from the President of CBC Radio Canada\xA0\u{1F602}
`),he=i("img"),this.h()},l(e){w=l(e,"P",{});var a=r(w);lt=f(a,"This weekend I teamed up with my friends Abid and Meg to participate in CBC Radio-Canada\u2019s hackathon all about personalization."),a.forEach(t),Ee=n(e),B=l(e,"P",{});var fa=r(B);H=l(fa,"IMG",{src:!0,alt:!0}),fa.forEach(t),xe=n(e),S=l(e,"P",{});var ua=r(S);rt=f(ua,"Our team chose to personalize the content imagery that viewers can see across CBC\u2019s website."),ua.forEach(t),Ce=n(e),L=l(e,"P",{});var na=r(L);U=l(na,"IMG",{src:!0,alt:!0}),na.forEach(t),Ie=n(e),q=l(e,"P",{});var ha=r(q);pt=f(ha,"We created user\u2019s personas using the articles they read previously to determine their interests:"),ha.forEach(t),ke=n(e),M=l(e,"P",{});var da=r(M);z=l(da,"IMG",{src:!0,alt:!0}),da.forEach(t),Pe=n(e),g=l(e,"P",{});var ma=r(g);ft=f(ma,"And created metadata for the CBC content using Google\u2019s NLP API to find topics from the content\u2019s description:"),ma.forEach(t),Ae=n(e),O=l(e,"P",{});var ca=r(O);G=l(ca,"IMG",{src:!0,alt:!0}),ca.forEach(t),Re=n(e),F=l(e,"P",{});var wa=r(F);ut=f(wa,"To decide what to show the viewer, we match the two sets of keywords together and use it for our image lookup."),wa.forEach(t),je=n(e),N=l(e,"P",{});var va=r(N);D=l(va,"IMG",{src:!0,alt:!0}),va.forEach(t),Te=n(e),V=l(e,"P",{});var ba=r(V);nt=f(ba,"And thus, we have two different UI\u2019s for the different users."),ba.forEach(t),Be=n(e),Q=l(e,"P",{});var _a=r(Q);W=l(_a,"IMG",{src:!0,alt:!0}),_a.forEach(t),He=n(e),K=l(e,"BLOCKQUOTE",{});var ya=r(K);ce=l(ya,"P",{});var Ea=r(ce);E=l(Ea,"A",{href:!0,rel:!0});var xa=r(E);ht=f(xa,"View the presentation slides"),xa.forEach(t),Ea.forEach(t),ya.forEach(t),Se=n(e),Y=l(e,"H3",{});var Ca=r(Y);dt=f(Ca,"Developing Engaging\xA0Images"),Ca.forEach(t),Le=n(e),Z=l(e,"P",{});var Ia=r(Z);mt=f(Ia,"I worked on the front end (and a little bit of design) for the project."),Ia.forEach(t),Ue=n(e),X=l(e,"H4",{});var ka=r(X);ct=f(ka,"Hackathon Starter"),ka.forEach(t),qe=n(e),v=l(e,"P",{});var at=r(v);wt=f(at,"There\u2019s a github repository called the "),x=l(at,"A",{href:!0,rel:!0});var Pa=r(x);vt=f(Pa,"Hackathon Starter"),Pa.forEach(t),bt=f(at," that we used to quick start the application. It\u2019s just a simple boilerplate Node.js app designed to be as versatile as possible."),at.forEach(t),Me=n(e),d=l(e,"P",{});var de=r(d);_t=f(de,"I cleaned out most of the app and built my own view using "),C=l(de,"A",{href:!0,rel:!0});var Aa=r(C);yt=f(Aa,"HTML5UP"),Aa.forEach(t),Et=f(de,"\u2019s "),I=l(de,"A",{href:!0,rel:!0});var Ra=r(I);xt=f(Ra,"Forty"),Ra.forEach(t),Ct=f(de," template that would become the view of our app."),de.forEach(t),ze=n(e),J=l(e,"H4",{});var ja=r(J);It=f(ja,"Implementing the\xA0API"),ja.forEach(t),ge=n(e),b=l(e,"P",{});var ot=r(b);kt=f(ot,"Next I used "),we=l(ot,"CODE",{});var Ta=r(we);Pt=f(Ta,"axios"),Ta.forEach(t),At=f(ot," to call the API my group-mates prepared for the front-end and created a new router for the application to take in a userId from the URL."),ot.forEach(t),Oe=n(e),$=l(e,"P",{});var Ba=r($);Rt=f(Ba,"Inputting the userId from the URL just made sense for this project since CBC Radio Canada doesn\u2019t actually have accounts, so user data is actually stored through browser cache. Using a router was better than creating a \u201Clog in\u201D page since the real CBC Radio Canada wouldn\u2019t have a log in anyway."),Ba.forEach(t),Ge=n(e),ee=l(e,"H4",{});var Ha=r(ee);jt=f(Ha,"Fixing the\xA0Design"),Ha.forEach(t),Fe=n(e),te=l(e,"P",{});var Sa=r(te);Tt=f(Sa,"HTML5UP\u2019s Forty is a great template, but it didn\u2019t follow Radio Canada\u2019s mandatory accessibility guidelines. I put a bit of my CSS and design skills to work fixing these issues."),Sa.forEach(t),Ne=n(e),ae=l(e,"P",{});var La=r(ae);Bt=f(La,"First I fixed the text size, good accessibility should have text size above 12px."),La.forEach(t),De=n(e),oe=l(e,"P",{});var Ua=r(oe);Ht=f(Ua,"Then I fixed the colour contrast of the white text on the image content tiles by changing the colours to values that have acceptable contrast."),Ua.forEach(t),Ve=n(e),_=l(e,"P",{});var st=r(_);St=f(st,"I also made sure that text was not "),ve=l(st,"CODE",{});var qa=r(ve);Lt=f(qa,"uppercase"),qa.forEach(t),Ut=f(st,"\xA0. Uppercase text is harder to read and screen readers will read this text as shouting. A poor experience."),st.forEach(t),Qe=n(e),y=l(e,"P",{});var it=r(y);qt=f(it,"Lastly I added an animation to only show descriptions on hover, this was so that you could better see the images in the background. Accessibility guidelines state that all hidden text should still be readable by screen readers, so I found a way to create the animation without using "),be=l(it,"CODE",{});var Ma=r(be);Mt=f(Ma,"display: none"),Ma.forEach(t),zt=f(it,"."),it.forEach(t),We=n(e),se=l(e,"BLOCKQUOTE",{});var za=r(se);_e=l(za,"P",{});var ga=r(_e);k=l(ga,"A",{href:!0,rel:!0});var Oa=r(k);gt=f(Oa,"View all code on Github"),Oa.forEach(t),ga.forEach(t),za.forEach(t),Ke=n(e),ie=l(e,"H3",{});var Ga=r(ie);Ot=f(Ga,"Results"),Ga.forEach(t),Ye=n(e),le=l(e,"P",{});var Fa=r(le);Gt=f(Fa,"In the end we did what we wanted, creating an entirely new experience for Radio Canada viewers with personalized content. We\u2019re really proud of our work, this was a great project."),Fa.forEach(t),Ze=n(e),P=l(e,"P",{});var Xt=r(P);re=l(Xt,"IMG",{src:!0,alt:!0}),Ft=f(Xt,`
(Note text here is uppercase because it is an old\xA0version)`),Xt.forEach(t),Xe=n(e),pe=l(e,"BLOCKQUOTE",{});var Na=r(pe);ye=l(Na,"P",{});var Da=r(ye);A=l(Da,"A",{href:!0,rel:!0});var Va=r(A);Nt=f(Va,"See us present live!"),Va.forEach(t),Da.forEach(t),Na.forEach(t),Je=n(e),m=l(e,"P",{});var me=r(m);Dt=f(me,"Tell me how it is via "),R=l(me,"A",{href:!0,rel:!0});var Qa=r(R);Vt=f(Qa,"Twitter"),Qa.forEach(t),Qt=f(me," or "),j=l(me,"A",{href:!0,rel:!0});var Wa=r(j);Wt=f(Wa,"Instagram"),Wa.forEach(t),Kt=f(me,"!"),me.forEach(t),$e=n(e),fe=l(e,"P",{});var Ka=r(fe);ue=l(Ka,"IMG",{src:!0,alt:!0}),Ka.forEach(t),et=n(e),ne=l(e,"H5",{});var Ya=r(ne);Yt=f(Ya,"Bonus,"),Ya.forEach(t),tt=n(e),T=l(e,"P",{});var Jt=r(T);Zt=f(Jt,`such a bad screen-grab from the President of CBC Radio Canada\xA0\u{1F602}
`),he=l(Jt,"IMG",{src:!0,alt:!0}),Jt.forEach(t),this.h()},h(){c(H.src,ea="https://cdn-images-1.medium.com/max/800/0*vEvTmyn1_kOqvS7y")||h(H,"src",ea),h(H,"alt","Arjun before 2020 didn't know how important alt's were. Sorry no alt text!"),c(U.src,ta="https://cdn-images-1.medium.com/max/800/0*955m2ZY2NLo1di7W")||h(U,"src",ta),h(U,"alt","Arjun before 2020 didn't know how important alt's were. Sorry no alt text!"),c(z.src,aa="https://cdn-images-1.medium.com/max/800/1*6x929TDzB58FoyegYZAucQ.png")||h(z,"src",aa),h(z,"alt","Arjun before 2020 didn't know how important alt's were. Sorry no alt text!"),c(G.src,oa="https://cdn-images-1.medium.com/max/800/1*Hq1EeGwy1U8H3sm45IHElA.png")||h(G,"src",oa),h(G,"alt","Arjun before 2020 didn't know how important alt's were. Sorry no alt text!"),c(D.src,sa="https://cdn-images-1.medium.com/max/800/1*6sHiE4cDtbYQhVfvbOsJFQ.png")||h(D,"src",sa),h(D,"alt","Arjun before 2020 didn't know how important alt's were. Sorry no alt text!"),c(W.src,ia="https://cdn-images-1.medium.com/max/800/1*jsEg1rsb6MxWoWLO-nYHEA.png")||h(W,"src",ia),h(W,"alt","Arjun before 2020 didn't know how important alt's were. Sorry no alt text!"),h(E,"href","https://t.co/DxBXC6NC99"),h(E,"rel","nofollow"),h(x,"href","https://github.com/sahat/hackathon-starter"),h(x,"rel","nofollow"),h(C,"href","http://html5up.net"),h(C,"rel","nofollow"),h(I,"href","https://html5up.net/forty"),h(I,"rel","nofollow"),h(k,"href","https://github.com/CBCRCHackathon2018/engaging-imagery-website"),h(k,"rel","nofollow"),c(re.src,la="https://cdn-images-1.medium.com/max/800/1*tov7eVsRZTlR6R8tfdVydA.jpeg")||h(re,"src",la),h(re,"alt","(Note text here is uppercase because it is an old\xA0version)"),h(A,"href","https://youtu.be/qi4oy5cjqtw?t=5003"),h(A,"rel","nofollow"),h(R,"href","http://twitter.com/askalburgi"),h(R,"rel","nofollow"),h(j,"href","http://instagram.com/askalburgi"),h(j,"rel","nofollow"),c(ue.src,ra="https://cdn-images-1.medium.com/max/800/1*RLTVE0wgjEfhsrXK8cZ4hw.png")||h(ue,"src",ra),h(ue,"alt","Arjun before 2020 didn't know how important alt's were. Sorry no alt text!"),c(he.src,pa="https://cdn-images-1.medium.com/max/800/1*v4EpnYvimzZ21z4OFQoPKg.png")||h(he,"src",pa),h(he,"alt","such a bad screen-grab from the President of CBC Radio Canada\xA0\u{1F602}")},m(e,a){o(e,w,a),s(w,lt),o(e,Ee,a),o(e,B,a),s(B,H),o(e,xe,a),o(e,S,a),s(S,rt),o(e,Ce,a),o(e,L,a),s(L,U),o(e,Ie,a),o(e,q,a),s(q,pt),o(e,ke,a),o(e,M,a),s(M,z),o(e,Pe,a),o(e,g,a),s(g,ft),o(e,Ae,a),o(e,O,a),s(O,G),o(e,Re,a),o(e,F,a),s(F,ut),o(e,je,a),o(e,N,a),s(N,D),o(e,Te,a),o(e,V,a),s(V,nt),o(e,Be,a),o(e,Q,a),s(Q,W),o(e,He,a),o(e,K,a),s(K,ce),s(ce,E),s(E,ht),o(e,Se,a),o(e,Y,a),s(Y,dt),o(e,Le,a),o(e,Z,a),s(Z,mt),o(e,Ue,a),o(e,X,a),s(X,ct),o(e,qe,a),o(e,v,a),s(v,wt),s(v,x),s(x,vt),s(v,bt),o(e,Me,a),o(e,d,a),s(d,_t),s(d,C),s(C,yt),s(d,Et),s(d,I),s(I,xt),s(d,Ct),o(e,ze,a),o(e,J,a),s(J,It),o(e,ge,a),o(e,b,a),s(b,kt),s(b,we),s(we,Pt),s(b,At),o(e,Oe,a),o(e,$,a),s($,Rt),o(e,Ge,a),o(e,ee,a),s(ee,jt),o(e,Fe,a),o(e,te,a),s(te,Tt),o(e,Ne,a),o(e,ae,a),s(ae,Bt),o(e,De,a),o(e,oe,a),s(oe,Ht),o(e,Ve,a),o(e,_,a),s(_,St),s(_,ve),s(ve,Lt),s(_,Ut),o(e,Qe,a),o(e,y,a),s(y,qt),s(y,be),s(be,Mt),s(y,zt),o(e,We,a),o(e,se,a),s(se,_e),s(_e,k),s(k,gt),o(e,Ke,a),o(e,ie,a),s(ie,Ot),o(e,Ye,a),o(e,le,a),s(le,Gt),o(e,Ze,a),o(e,P,a),s(P,re),s(P,Ft),o(e,Xe,a),o(e,pe,a),s(pe,ye),s(ye,A),s(A,Nt),o(e,Je,a),o(e,m,a),s(m,Dt),s(m,R),s(R,Vt),s(m,Qt),s(m,j),s(j,Wt),s(m,Kt),o(e,$e,a),o(e,fe,a),s(fe,ue),o(e,et,a),o(e,ne,a),s(ne,Yt),o(e,tt,a),o(e,T,a),s(T,Zt),s(T,he)},p:$t,i:$t,o:$t,d(e){e&&t(w),e&&t(Ee),e&&t(B),e&&t(xe),e&&t(S),e&&t(Ce),e&&t(L),e&&t(Ie),e&&t(q),e&&t(ke),e&&t(M),e&&t(Pe),e&&t(g),e&&t(Ae),e&&t(O),e&&t(Re),e&&t(F),e&&t(je),e&&t(N),e&&t(Te),e&&t(V),e&&t(Be),e&&t(Q),e&&t(He),e&&t(K),e&&t(Se),e&&t(Y),e&&t(Le),e&&t(Z),e&&t(Ue),e&&t(X),e&&t(qe),e&&t(v),e&&t(Me),e&&t(d),e&&t(ze),e&&t(J),e&&t(ge),e&&t(b),e&&t(Oe),e&&t($),e&&t(Ge),e&&t(ee),e&&t(Fe),e&&t(te),e&&t(Ne),e&&t(ae),e&&t(De),e&&t(oe),e&&t(Ve),e&&t(_),e&&t(Qe),e&&t(y),e&&t(We),e&&t(se),e&&t(Ke),e&&t(ie),e&&t(Ye),e&&t(le),e&&t(Ze),e&&t(P),e&&t(Xe),e&&t(pe),e&&t(Je),e&&t(m),e&&t($e),e&&t(fe),e&&t(et),e&&t(ne),e&&t(tt),e&&t(T)}}}const ao={title:"Personalizing Images at the CBC Hackathon",description:"This weekend I teamed up with my friends Abid and Meg to participate in CBC Radio-Canada\u2019s hackathon all about personalization.",date:"2019-02-04",categories:[],keywords:[],published:!0,oldslugthing:"/personalizing-images-at-the-cbc-hackathon-31618c16a87f"};class oo extends Xa{constructor(w){super(),Ja(this,w,null,eo,$a,{})}}export{oo as default,ao as metadata};
