import{S as io,i as ao,s as lo,e as a,t as u,j as n,c as l,a as r,g as h,d as t,l as p,L as we,b as f,f as o,E as i,I as ss}from"../../chunks/vendor-89e59966.js";function ro(oo){let w,ht,_e,T,nt,Ie,S,pt,Ee,x,j,os,ge,P,ft,Te,q,z,is,Se,H,mt,xe,A,dt,je,M,wt,Pe,C,ct,qe,O,yt,ze,D,B,as,He,G,vt,Ae,R,bt,Me,U,F,ls,Ce,L,kt,Oe,V,_t,De,W,K,rs,Be,N,ce,y,It,Ge,Q,Et,Re,X,gt,Ue,Z,Tt,Fe,J,St,Le,c,xt,v,jt,Pt,Ve,Y,qt,We,d,zt,b,Ht,At,ye,Mt,Ke,$,ve,k,Ct,Ne,ee,Ot,Qe,te,Dt,Xe,se,oe,us,Ze,ie,Bt,Je,ae,Gt,Ye,le,Rt,$e,re,Ut,et,ue,Ft,tt,he,Lt,st,ne,Vt,ot,pe,Wt,it,fe,be,Kt,at,me,Nt,lt,_,I,Qt,Xt,rt,m,Zt,E,Jt,Yt,g,$t,es;return{c(){w=a("h3"),ht=u("Objective:"),_e=n(),T=a("p"),nt=u("While taking a UI Design course at RED Academy in Toronto, I stayed with my grandma for 4 months. She was pretty busy over that time with an assortment of events and activities that required planning and prep work, all of which stressed her out beyond belief."),Ie=n(),S=a("p"),pt=u("I realized that I took my own stress management skills, built up over 5 years of my engineering degree, for granted. Some people just can\u2019t help getting stressed under the pressure of a todo list, my grandma was proof."),Ee=n(),x=a("p"),j=a("img"),ge=n(),P=a("p"),ft=u("I reasoned that part of her stress came from not keeping a proper physical list, but also from being unable to recognize what tasks required more time and energy relative to others. This would lead her to become overwhelmed by the workload she had in front of her. If she could understand that she is only capable of 100%, whether that be 100% of the time in a day or 100% of her energy, she would have a much better time focusing on what matters as opposed to stressing out."),Te=n(),q=a("p"),z=a("img"),Se=n(),H=a("h4"),mt=u("The objective of \u201CStressful Tasks\u201D"),xe=n(),A=a("p"),dt=u("\u201CStressful tasks\u201D is a simple tool where users can list and rate their tasks when they feel overwhelmed. The tool helps them understand what to prioritize and calm them down."),je=n(),M=a("h3"),wt=u("Designing Stressful Tasks:"),Pe=n(),C=a("h4"),ct=u("Design Inception"),qe=n(),O=a("p"),yt=u("In order to achieve the calming effect of the app, I wanted to go with a calming design language."),ze=n(),D=a("p"),B=a("img"),He=n(),G=a("h4"),vt=u("Style Guide:"),Ae=n(),R=a("p"),bt=u("This design language uses pastel colours and features white space, both help to bring a tranquil experience. The doughnut chart is the center of the app\u2019s design language, a unique visual that easily communicates task priorities to the user."),Me=n(),U=a("p"),F=a("img"),Ce=n(),L=a("h4"),kt=u("Interface:"),Oe=n(),V=a("p"),_t=u("Thanks to the strong pull of the doughnut chart, the design of the app can be very simple and stripped down. In only one screen, I feature the list of tasks and the doughnut chart. This should be sufficient to achieve the desired objective."),De=n(),W=a("p"),K=a("img"),Be=n(),N=a("blockquote"),ce=a("p"),y=a("a"),It=u("View the design file (created with Figma) here"),Ge=n(),Q=a("h3"),Et=u("Coding the\xA0Design"),Re=n(),X=a("h4"),gt=u("Ionic Framework"),Ue=n(),Z=a("p"),Tt=u("After my previous React Native project and being restricted stylistically by React Native\u2019s StyleSheet, I wanted to use Ionic Framework. I typically use Ionic for smaller scale apps because of how fast it is to develop them. I love Ionic Framework as a good way to quickly do your side projects."),Fe=n(),J=a("h4"),St=u("BEM"),Le=n(),c=a("p"),xt=u("Another positive of Ionic Framework is that it uses basic HTML and CSS, allowing me to try BEM, the CSS classification methodology. ("),v=a("a"),jt=u("I write about BEM and my experience with it here."),Pt=u(")"),Ve=n(),Y=a("h4"),qt=u("chart.js"),We=n(),d=a("p"),zt=u("I specifically wanted the doughnut chart to be animated. I want to start animating more of my apps because I realize how powerful animations can be. I used "),b=a("a"),Ht=u("chart.js"),At=u(" because it comes pre-built with animations. The updated function is as follows: "),ye=a("code"),Mt=u("this.doughnutChart.update();"),Ke=n(),$=a("blockquote"),ve=a("p"),k=a("a"),Ct=u("View all the code on Github"),Ne=n(),ee=a("h3"),Ot=u("The Results"),Qe=n(),te=a("p"),Dt=u("Once I finished the app I immediately began showing it to friends and using it myself. The little experiment sparked much discussion, both on its visual and behavioural design."),Xe=n(),se=a("p"),oe=a("img"),Ze=n(),ie=a("h4"),Bt=u("Visual Representation"),Je=n(),ae=a("p"),Gt=u("The discussion around how Stressful Tasks visualizes priority of the tasks garnered the most attention. This is because most apps do not have a visualization component, thus Stressful Tasks got a lot of praise for it."),Ye=n(),le=a("p"),Rt=u("There was however a lot of feedback and confusion of what the doughnut chart was supposed to represent. In the design phase, I intentionally left it up to the user to designate value to the tasks. Unfortunately this didn\u2019t fly for a lot of people."),$e=n(),re=a("p"),Ut=u("Potential solutions discussed would all end up making the app more complicated. One solution was to change the chart to be a 2-axis, priority vs. difficulty plot, where users can plot their tasks by rating them and so can easily see where their stress is most required. This would be an interesting and extremely useful method, but there is no way someone would use such a complicated app when they feel so overwhelmed and stressed out."),et=n(),ue=a("h4"),Ft=u("Behavioural Design"),tt=n(),he=a("p"),Lt=u("Turns out the app was pretty difficult to use as is. Both the UI and UX design choices made the app brutal to use. In an overwhelmed and stressed out state, the app is just too slow to use."),st=n(),ne=a("p"),Vt=u("I think one big oversight of my design was not properly prioritizing the behavioural design of the app. When you feel overwhelmed the most important thing to do is to dump out your tasks and visualize them, but this behaviour is not supported thanks to the small button sizes and the slow input for adding new tasks."),ot=n(),pe=a("p"),Wt=u("I think the best improvement would be to introduce a bottom fixed chat style text input for adding tasks (like many messaging apps) and integrate the functionality for modifying task priorities with the doughnut chart in an interactive way. These two things would essentially eliminate the buttons of the app in an attempt to \u201Cget out of the way\u201D of the user."),it=n(),fe=a("blockquote"),be=a("p"),Kt=u("The app has a lot more visual design issues than mentioned here, I encourage you to try it out on both mobile and desktop and try to discover them!"),at=n(),me=a("h3"),Nt=u("Try it\xA0out"),lt=n(),_=a("p"),I=a("a"),Qt=u("Go to this link!"),Xt=u(" The app is on the web, so you can try it on your desktop or on your phone."),rt=n(),m=a("p"),Zt=u("Tell me how it is via "),E=a("a"),Jt=u("Twitter"),Yt=u(" or "),g=a("a"),$t=u("Instagram"),es=u("!"),this.h()},l(e){w=l(e,"H3",{});var s=r(w);ht=h(s,"Objective:"),s.forEach(t),_e=p(e),T=l(e,"P",{});var hs=r(T);nt=h(hs,"While taking a UI Design course at RED Academy in Toronto, I stayed with my grandma for 4 months. She was pretty busy over that time with an assortment of events and activities that required planning and prep work, all of which stressed her out beyond belief."),hs.forEach(t),Ie=p(e),S=l(e,"P",{});var ns=r(S);pt=h(ns,"I realized that I took my own stress management skills, built up over 5 years of my engineering degree, for granted. Some people just can\u2019t help getting stressed under the pressure of a todo list, my grandma was proof."),ns.forEach(t),Ee=p(e),x=l(e,"P",{});var ps=r(x);j=l(ps,"IMG",{src:!0,alt:!0}),ps.forEach(t),ge=p(e),P=l(e,"P",{});var fs=r(P);ft=h(fs,"I reasoned that part of her stress came from not keeping a proper physical list, but also from being unable to recognize what tasks required more time and energy relative to others. This would lead her to become overwhelmed by the workload she had in front of her. If she could understand that she is only capable of 100%, whether that be 100% of the time in a day or 100% of her energy, she would have a much better time focusing on what matters as opposed to stressing out."),fs.forEach(t),Te=p(e),q=l(e,"P",{});var ms=r(q);z=l(ms,"IMG",{src:!0,alt:!0}),ms.forEach(t),Se=p(e),H=l(e,"H4",{});var ds=r(H);mt=h(ds,"The objective of \u201CStressful Tasks\u201D"),ds.forEach(t),xe=p(e),A=l(e,"P",{});var ws=r(A);dt=h(ws,"\u201CStressful tasks\u201D is a simple tool where users can list and rate their tasks when they feel overwhelmed. The tool helps them understand what to prioritize and calm them down."),ws.forEach(t),je=p(e),M=l(e,"H3",{});var cs=r(M);wt=h(cs,"Designing Stressful Tasks:"),cs.forEach(t),Pe=p(e),C=l(e,"H4",{});var ys=r(C);ct=h(ys,"Design Inception"),ys.forEach(t),qe=p(e),O=l(e,"P",{});var vs=r(O);yt=h(vs,"In order to achieve the calming effect of the app, I wanted to go with a calming design language."),vs.forEach(t),ze=p(e),D=l(e,"P",{});var bs=r(D);B=l(bs,"IMG",{src:!0,alt:!0}),bs.forEach(t),He=p(e),G=l(e,"H4",{});var ks=r(G);vt=h(ks,"Style Guide:"),ks.forEach(t),Ae=p(e),R=l(e,"P",{});var _s=r(R);bt=h(_s,"This design language uses pastel colours and features white space, both help to bring a tranquil experience. The doughnut chart is the center of the app\u2019s design language, a unique visual that easily communicates task priorities to the user."),_s.forEach(t),Me=p(e),U=l(e,"P",{});var Is=r(U);F=l(Is,"IMG",{src:!0,alt:!0}),Is.forEach(t),Ce=p(e),L=l(e,"H4",{});var Es=r(L);kt=h(Es,"Interface:"),Es.forEach(t),Oe=p(e),V=l(e,"P",{});var gs=r(V);_t=h(gs,"Thanks to the strong pull of the doughnut chart, the design of the app can be very simple and stripped down. In only one screen, I feature the list of tasks and the doughnut chart. This should be sufficient to achieve the desired objective."),gs.forEach(t),De=p(e),W=l(e,"P",{});var Ts=r(W);K=l(Ts,"IMG",{src:!0,alt:!0}),Ts.forEach(t),Be=p(e),N=l(e,"BLOCKQUOTE",{});var Ss=r(N);ce=l(Ss,"P",{});var xs=r(ce);y=l(xs,"A",{href:!0,rel:!0});var js=r(y);It=h(js,"View the design file (created with Figma) here"),js.forEach(t),xs.forEach(t),Ss.forEach(t),Ge=p(e),Q=l(e,"H3",{});var Ps=r(Q);Et=h(Ps,"Coding the\xA0Design"),Ps.forEach(t),Re=p(e),X=l(e,"H4",{});var qs=r(X);gt=h(qs,"Ionic Framework"),qs.forEach(t),Ue=p(e),Z=l(e,"P",{});var zs=r(Z);Tt=h(zs,"After my previous React Native project and being restricted stylistically by React Native\u2019s StyleSheet, I wanted to use Ionic Framework. I typically use Ionic for smaller scale apps because of how fast it is to develop them. I love Ionic Framework as a good way to quickly do your side projects."),zs.forEach(t),Fe=p(e),J=l(e,"H4",{});var Hs=r(J);St=h(Hs,"BEM"),Hs.forEach(t),Le=p(e),c=l(e,"P",{});var ut=r(c);xt=h(ut,"Another positive of Ionic Framework is that it uses basic HTML and CSS, allowing me to try BEM, the CSS classification methodology. ("),v=l(ut,"A",{href:!0,rel:!0});var As=r(v);jt=h(As,"I write about BEM and my experience with it here."),As.forEach(t),Pt=h(ut,")"),ut.forEach(t),Ve=p(e),Y=l(e,"H4",{});var Ms=r(Y);qt=h(Ms,"chart.js"),Ms.forEach(t),We=p(e),d=l(e,"P",{});var ke=r(d);zt=h(ke,"I specifically wanted the doughnut chart to be animated. I want to start animating more of my apps because I realize how powerful animations can be. I used "),b=l(ke,"A",{href:!0,rel:!0});var Cs=r(b);Ht=h(Cs,"chart.js"),Cs.forEach(t),At=h(ke," because it comes pre-built with animations. The updated function is as follows: "),ye=l(ke,"CODE",{});var Os=r(ye);Mt=h(Os,"this.doughnutChart.update();"),Os.forEach(t),ke.forEach(t),Ke=p(e),$=l(e,"BLOCKQUOTE",{});var Ds=r($);ve=l(Ds,"P",{});var Bs=r(ve);k=l(Bs,"A",{href:!0,rel:!0});var Gs=r(k);Ct=h(Gs,"View all the code on Github"),Gs.forEach(t),Bs.forEach(t),Ds.forEach(t),Ne=p(e),ee=l(e,"H3",{});var Rs=r(ee);Ot=h(Rs,"The Results"),Rs.forEach(t),Qe=p(e),te=l(e,"P",{});var Us=r(te);Dt=h(Us,"Once I finished the app I immediately began showing it to friends and using it myself. The little experiment sparked much discussion, both on its visual and behavioural design."),Us.forEach(t),Xe=p(e),se=l(e,"P",{});var Fs=r(se);oe=l(Fs,"IMG",{src:!0,alt:!0}),Fs.forEach(t),Ze=p(e),ie=l(e,"H4",{});var Ls=r(ie);Bt=h(Ls,"Visual Representation"),Ls.forEach(t),Je=p(e),ae=l(e,"P",{});var Vs=r(ae);Gt=h(Vs,"The discussion around how Stressful Tasks visualizes priority of the tasks garnered the most attention. This is because most apps do not have a visualization component, thus Stressful Tasks got a lot of praise for it."),Vs.forEach(t),Ye=p(e),le=l(e,"P",{});var Ws=r(le);Rt=h(Ws,"There was however a lot of feedback and confusion of what the doughnut chart was supposed to represent. In the design phase, I intentionally left it up to the user to designate value to the tasks. Unfortunately this didn\u2019t fly for a lot of people."),Ws.forEach(t),$e=p(e),re=l(e,"P",{});var Ks=r(re);Ut=h(Ks,"Potential solutions discussed would all end up making the app more complicated. One solution was to change the chart to be a 2-axis, priority vs. difficulty plot, where users can plot their tasks by rating them and so can easily see where their stress is most required. This would be an interesting and extremely useful method, but there is no way someone would use such a complicated app when they feel so overwhelmed and stressed out."),Ks.forEach(t),et=p(e),ue=l(e,"H4",{});var Ns=r(ue);Ft=h(Ns,"Behavioural Design"),Ns.forEach(t),tt=p(e),he=l(e,"P",{});var Qs=r(he);Lt=h(Qs,"Turns out the app was pretty difficult to use as is. Both the UI and UX design choices made the app brutal to use. In an overwhelmed and stressed out state, the app is just too slow to use."),Qs.forEach(t),st=p(e),ne=l(e,"P",{});var Xs=r(ne);Vt=h(Xs,"I think one big oversight of my design was not properly prioritizing the behavioural design of the app. When you feel overwhelmed the most important thing to do is to dump out your tasks and visualize them, but this behaviour is not supported thanks to the small button sizes and the slow input for adding new tasks."),Xs.forEach(t),ot=p(e),pe=l(e,"P",{});var Zs=r(pe);Wt=h(Zs,"I think the best improvement would be to introduce a bottom fixed chat style text input for adding tasks (like many messaging apps) and integrate the functionality for modifying task priorities with the doughnut chart in an interactive way. These two things would essentially eliminate the buttons of the app in an attempt to \u201Cget out of the way\u201D of the user."),Zs.forEach(t),it=p(e),fe=l(e,"BLOCKQUOTE",{});var Js=r(fe);be=l(Js,"P",{});var Ys=r(be);Kt=h(Ys,"The app has a lot more visual design issues than mentioned here, I encourage you to try it out on both mobile and desktop and try to discover them!"),Ys.forEach(t),Js.forEach(t),at=p(e),me=l(e,"H3",{});var $s=r(me);Nt=h($s,"Try it\xA0out"),$s.forEach(t),lt=p(e),_=l(e,"P",{});var ts=r(_);I=l(ts,"A",{href:!0,rel:!0});var eo=r(I);Qt=h(eo,"Go to this link!"),eo.forEach(t),Xt=h(ts," The app is on the web, so you can try it on your desktop or on your phone."),ts.forEach(t),rt=p(e),m=l(e,"P",{});var de=r(m);Zt=h(de,"Tell me how it is via "),E=l(de,"A",{href:!0,rel:!0});var to=r(E);Jt=h(to,"Twitter"),to.forEach(t),Yt=h(de," or "),g=l(de,"A",{href:!0,rel:!0});var so=r(g);$t=h(so,"Instagram"),so.forEach(t),es=h(de,"!"),de.forEach(t),this.h()},h(){we(j.src,os="https://cdn-images-1.medium.com/max/800/1*TR8YgL7Xt5zFyM034CKZzg.jpeg")||f(j,"src",os),f(j,"alt","Arjun before 2020 didn't know how important alt's were. Sorry no alt text!"),we(z.src,is="https://cdn-images-1.medium.com/max/800/1*g-6EkJmhC-H2WJVeC9OrUg.jpeg")||f(z,"src",is),f(z,"alt","Arjun before 2020 didn't know how important alt's were. Sorry no alt text!"),we(B.src,as="https://cdn-images-1.medium.com/max/800/1*ewdZXWq7tHNQynz-hulCew.jpeg")||f(B,"src",as),f(B,"alt","Arjun before 2020 didn't know how important alt's were. Sorry no alt text!"),we(F.src,ls="https://cdn-images-1.medium.com/max/800/1*HLPtwpGkTAvblxrnTKSqSg.jpeg")||f(F,"src",ls),f(F,"alt","Arjun before 2020 didn't know how important alt's were. Sorry no alt text!"),we(K.src,rs="https://cdn-images-1.medium.com/max/800/1*W9_dwvpHAeVHacgohhUOvQ.jpeg")||f(K,"src",rs),f(K,"alt","Arjun before 2020 didn't know how important alt's were. Sorry no alt text!"),f(y,"href","https://www.figma.com/file/rEbSMEIx2kXpe6w0MZYqpH/Stressful-Tasks"),f(y,"rel","nofollow"),f(v,"href","https://medium.com/arjunkalburgi/using-the-bem-methodology-for-my-css-classifications-a35172f90a04"),f(v,"rel","nofollow"),f(b,"href","https://www.chartjs.org/"),f(b,"rel","nofollow"),f(k,"href","https://github.com/askalburgi/Stressful-Tasks"),f(k,"rel","nofollow"),we(oe.src,us="https://cdn-images-1.medium.com/max/800/1*82moRFoyndgveERyMS_9Dg.jpeg")||f(oe,"src",us),f(oe,"alt","Arjun before 2020 didn't know how important alt's were. Sorry no alt text!"),f(I,"href","http://askalburgi.github.io/Stressful-Tasks"),f(I,"rel","nofollow"),f(E,"href","http://twitter.com/askalburgi"),f(E,"rel","nofollow"),f(g,"href","http://instagram.com/askalburgi"),f(g,"rel","nofollow")},m(e,s){o(e,w,s),i(w,ht),o(e,_e,s),o(e,T,s),i(T,nt),o(e,Ie,s),o(e,S,s),i(S,pt),o(e,Ee,s),o(e,x,s),i(x,j),o(e,ge,s),o(e,P,s),i(P,ft),o(e,Te,s),o(e,q,s),i(q,z),o(e,Se,s),o(e,H,s),i(H,mt),o(e,xe,s),o(e,A,s),i(A,dt),o(e,je,s),o(e,M,s),i(M,wt),o(e,Pe,s),o(e,C,s),i(C,ct),o(e,qe,s),o(e,O,s),i(O,yt),o(e,ze,s),o(e,D,s),i(D,B),o(e,He,s),o(e,G,s),i(G,vt),o(e,Ae,s),o(e,R,s),i(R,bt),o(e,Me,s),o(e,U,s),i(U,F),o(e,Ce,s),o(e,L,s),i(L,kt),o(e,Oe,s),o(e,V,s),i(V,_t),o(e,De,s),o(e,W,s),i(W,K),o(e,Be,s),o(e,N,s),i(N,ce),i(ce,y),i(y,It),o(e,Ge,s),o(e,Q,s),i(Q,Et),o(e,Re,s),o(e,X,s),i(X,gt),o(e,Ue,s),o(e,Z,s),i(Z,Tt),o(e,Fe,s),o(e,J,s),i(J,St),o(e,Le,s),o(e,c,s),i(c,xt),i(c,v),i(v,jt),i(c,Pt),o(e,Ve,s),o(e,Y,s),i(Y,qt),o(e,We,s),o(e,d,s),i(d,zt),i(d,b),i(b,Ht),i(d,At),i(d,ye),i(ye,Mt),o(e,Ke,s),o(e,$,s),i($,ve),i(ve,k),i(k,Ct),o(e,Ne,s),o(e,ee,s),i(ee,Ot),o(e,Qe,s),o(e,te,s),i(te,Dt),o(e,Xe,s),o(e,se,s),i(se,oe),o(e,Ze,s),o(e,ie,s),i(ie,Bt),o(e,Je,s),o(e,ae,s),i(ae,Gt),o(e,Ye,s),o(e,le,s),i(le,Rt),o(e,$e,s),o(e,re,s),i(re,Ut),o(e,et,s),o(e,ue,s),i(ue,Ft),o(e,tt,s),o(e,he,s),i(he,Lt),o(e,st,s),o(e,ne,s),i(ne,Vt),o(e,ot,s),o(e,pe,s),i(pe,Wt),o(e,it,s),o(e,fe,s),i(fe,be),i(be,Kt),o(e,at,s),o(e,me,s),i(me,Nt),o(e,lt,s),o(e,_,s),i(_,I),i(I,Qt),i(_,Xt),o(e,rt,s),o(e,m,s),i(m,Zt),i(m,E),i(E,Jt),i(m,Yt),i(m,g),i(g,$t),i(m,es)},p:ss,i:ss,o:ss,d(e){e&&t(w),e&&t(_e),e&&t(T),e&&t(Ie),e&&t(S),e&&t(Ee),e&&t(x),e&&t(ge),e&&t(P),e&&t(Te),e&&t(q),e&&t(Se),e&&t(H),e&&t(xe),e&&t(A),e&&t(je),e&&t(M),e&&t(Pe),e&&t(C),e&&t(qe),e&&t(O),e&&t(ze),e&&t(D),e&&t(He),e&&t(G),e&&t(Ae),e&&t(R),e&&t(Me),e&&t(U),e&&t(Ce),e&&t(L),e&&t(Oe),e&&t(V),e&&t(De),e&&t(W),e&&t(Be),e&&t(N),e&&t(Ge),e&&t(Q),e&&t(Re),e&&t(X),e&&t(Ue),e&&t(Z),e&&t(Fe),e&&t(J),e&&t(Le),e&&t(c),e&&t(Ve),e&&t(Y),e&&t(We),e&&t(d),e&&t(Ke),e&&t($),e&&t(Ne),e&&t(ee),e&&t(Qe),e&&t(te),e&&t(Xe),e&&t(se),e&&t(Ze),e&&t(ie),e&&t(Je),e&&t(ae),e&&t(Ye),e&&t(le),e&&t($e),e&&t(re),e&&t(et),e&&t(ue),e&&t(tt),e&&t(he),e&&t(st),e&&t(ne),e&&t(ot),e&&t(pe),e&&t(it),e&&t(fe),e&&t(at),e&&t(me),e&&t(lt),e&&t(_),e&&t(rt),e&&t(m)}}}const ho={title:"Stressful Tasks, a behavioural design experiment",description:"Stress overwhelms people, but why? Prioritizing tasks and activities requires one simple trick, understanding that you can only give 100%.",date:"2019-01-13",categories:[],keywords:[],published:!0,oldslugthing:"/stressful-tasks-a-behavioural-design-experiment"};class no extends io{constructor(w){super();ao(this,w,null,ro,lo,{})}}export{no as default,ho as metadata};
