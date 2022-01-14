import{S as vi,i as yi,s as gi,e as o,t as n,k as u,c as a,a as h,h as l,d as t,m as p,U as je,b as d,g as s,N as r,I as Ut}from"../../chunks/vendor-cd81a23d.js";function ki(bi){let w,De,ae,x,Fe,ne,S,Oe,le,U,H,Ht,he,M,Qe,ue,W,Le,pe,B,Ne,de,G,Je,ce,I,ze,fe,R,j,Mt,me,D,Ke,we,F,Ve,be,O,Xe,ve,Q,Ye,ye,L,Ze,ge,N,J,Wt,ke,z,$e,qe,K,et,_e,V,tt,Te,X,it,Ee,Y,Z,Bt,Ce,$,st,Ae,ee,rt,Pe,b,ot,y,at,nt,xe,te,lt,Se,v,ht,g,ut,pt,Ue,ie,dt,He,se,ct,Me,f,ft,k,mt,wt,q,bt,vt,We,c,yt,_,gt,kt,T,qt,_t,E,Tt,Et,C,Ct,Be,A,At,P,Pt,Ge,re,xt;return{c(){w=o("h3"),De=n("Introduction"),ae=u(),x=o("p"),Fe=n("Cloudy Car is an Uber-like application that enables users to become drivers and riders. Cloudy Car was built for my Software Development class as a group project. The professor outlined User Stories for us to turn into a functionality spec. The following post will provide a detailed walkthrough and critique of some of the design choices made."),ne=u(),S=o("h3"),Oe=n("Walkthrough Part 1: Opening the\xA0app"),le=u(),U=o("p"),H=o("img"),he=u(),M=o("p"),Qe=n("Upon first opening the app, users will be introduced to a signup screen where they will be asked to create a username as well as submit their phone number and email. The user is requested to provide both a phone number and email as a way for drivers/riders to easily contact each other later on in the application. Minimal information is asked for from the user as this in less intrusive to the user and also builds more trust. Arguably, email is not required in this step and can be made \u201Coptional\u201D or even removed entirely."),ue=u(),W=o("p"),Le=n("The button labeled \u201CLET\u2019S GO\u201D will revert the user to the next step. The phrase \u201Clet\u2019s go\u201D is preferred over phrases such as \u201Csubmit\u201D or \u201Csign up\u201D as it entails a more enthusiastic tone and increases clarity for the user in making the decision to sign up. Perhaps a better option could be \u201CStart Your Cloudy Car Experience\u201D; while this clearly states what the user is doing, it is a very long phrase for a simple screen."),pe=u(),B=o("p"),Ne=n("Once this process has been completed, the signup screen will not be shown again since one phone does not require multiple accounts. This design for minimal user interaction makes the app more appealing and easier to use."),de=u(),G=o("p"),Je=n("Once signed up, the user is then guided to the home screen where they are given the option to enter either the driver or the rider side of the application. This screen has only two buttons to signifying a significant action. Both buttons have themed pictures and text copy to make both options more clear to the user. These minimal and clear options help the user make the right decision based on their situation. An improvement to this page could be made by telling the user that this action can be reversed in the future, without this the user may feel more pressured when making their choice."),ce=u(),I=o("h3"),ze=n("Walkthrough Part 2: Beginning the\xA0Request"),fe=u(),R=o("p"),j=o("img"),me=u(),D=o("p"),Ke=n("After picking which side of the application a user would like to utilize, they are refreshed to new screens based off of their choice."),we=u(),F=o("p"),Ve=n("The rider portion of the application showers users four main tabs: requests pending Driver acceptance, requests accepted by a Driver, accepted requests that the Rider confirmed, and a floating action button to create a new request."),be=u(),O=o("p"),Xe=n("By clicking on the floating action button, the user is redirected to a map where they can set pickup destination and a drop off destination. This screen also holds a description box where users can input special messages such as a pickup time. This screen also suggests the user with an estimated price that they can use as a base point in submitting their price point. The option for riders to submit the amount they are willing to pay for a ride does not make sense entirely; however, this spec was a requirement set by the professor. Having this option also allows drivers to price discriminate as riders will enter the maximum they are willing to pay, and drivers can pick the highest paying rider to drive around. If users do not fill out this box, upon clicking the submit button, the recommended price will be auto-filled. This screen again shows minimal design, only featuring UI elements required for a user to make decisions. This screen could be improved by some text copy explaining different options such as taping the map to select a drop-off destination point and that dragging the blue stat point changes the pickup destination. This lack of direction can make users feel stuck or confused as they do not know what to do or have difficulty in submitting destination points."),ve=u(),Q=o("p"),Ye=n("After submitting this information, users are shown a summary of their request and are given an option to edit different elements. This screen could also include more direction as to the various options users have to adjust their pickup and drop-off plan. After submitting the request a second time, the new request will be listed under \u201Cpending requests\u201D."),ye=u(),L=o("h3"),Ze=n("Walkthrough Part 3: Accepting the\xA0Request"),ge=u(),N=o("p"),J=o("img"),ke=u(),z=o("p"),$e=n("After users create a request from the riders side of the application, the driver side of the application comes into play. The driver\u2019s side of the application is set up in a similar manner to the riders side. Users on this side are a list of request forms that they have accepted in the past as well as pending request they can accept at any time they choose. This screen also has search buttons for drivers to look up more pending requests using different filters to eliminate request options."),qe=u(),K=o("p"),et=n("For identification reasons, before a user can enter the driver side, they must first describe their car\xA0. If a user tries to get into the driver-side from the hamburger menu in the rider-side, the app brings the user back to the home screen and displays a message to clear any confusion as to the user\u2019s actions."),_e=u(),V=o("p"),tt=n("After selecting a request, users are then redirected to a request details screen where they can review and accept the request. A link to the rider\u2019s profile details is also present on this display. Accepting the request will add the request to the \u201Caccepted requests\u201D list in the driver-side main screen."),Te=u(),X=o("h3"),it=n("Walkthrough Part 4: Confirming the\xA0Request"),Ee=u(),Y=o("p"),Z=o("img"),Ce=u(),$=o("p"),st=n("For riders, accepted requests will now show up under the \u201CAccepted\u201D subheading on the main rider-side screen. Riders can navigate through the details page by clicking the request; this will show pickup and destination locations and the list of drivers who accepted the request. This gives riders an opportunity to view the different drivers\u2019 profiles, to provide them with a larger sense of security. Once the riders confirm a driver, the driver is notified, and the request will be shown under the \u201CConfirmed\u201D subheading."),Ae=u(),ee=o("h3"),rt=n("Walkthrough Part 5: Miscellaneous"),Pe=u(),b=o("p"),ot=n("Hidden gestures such as tapping the map to set destination point or swipe to delete functionality on requests can be handled in many ways, some of which are outlined in an article by Nick Babich and can be read about "),y=o("a"),at=n("here"),nt=n("."),xe=u(),te=o("p"),lt=n("There was much debate over the hamburger menu is kept in a consistent place for users to view their profile. Quick links are also strategically placed on both the rider and driver sides of the application to increase usability. A fix for this function would be adding a setting option in this menu."),Se=u(),v=o("p"),ht=n("The colour scheme was chosen in accordance with the logo and different shades of grey to make the app easy to see and consistent throughout. Colour can be a good way to call for users attention, "),g=o("a"),ut=n("mockups"),pt=n(" for the app can be seen on figma."),Ue=u(),ie=o("h3"),dt=n("Conclusion"),He=u(),se=o("p"),ct=n("This app was designed with the given User Stories as requirements. This allowed the design of the app to be our own\u200A\u2014\u200Athus allowing me to use design tactics learned from reading Medium articles."),Me=u(),f=o("p"),ft=n("Aside: App mockups were made with "),k=o("a"),mt=n("Figma"),wt=n(", the online version of Sketch, and can be viewed "),q=o("a"),bt=n("here"),vt=n(". Note that the mockups differ slightly from the actual screenshots."),We=u(),c=o("p"),yt=n("Co-creators of app: "),_=o("a"),gt=n("George Antonious"),kt=n(", "),T=o("a"),qt=n("Ryan Huard"),_t=n(", "),E=o("a"),Tt=n("Harley Vanselow"),Et=n(", "),C=o("a"),Ct=n("Steve Boddez"),Be=u(),A=o("p"),At=n("Github: "),P=o("a"),Pt=n("https://github.com/CMPUT301F16T12/CloudyCar"),Ge=u(),re=o("p"),xt=n("Editor: Sonia Kalburgi"),this.h()},l(e){w=a(e,"H3",{});var i=h(w);De=l(i,"Introduction"),i.forEach(t),ae=p(e),x=a(e,"P",{});var Gt=h(x);Fe=l(Gt,"Cloudy Car is an Uber-like application that enables users to become drivers and riders. Cloudy Car was built for my Software Development class as a group project. The professor outlined User Stories for us to turn into a functionality spec. The following post will provide a detailed walkthrough and critique of some of the design choices made."),Gt.forEach(t),ne=p(e),S=a(e,"H3",{});var It=h(S);Oe=l(It,"Walkthrough Part 1: Opening the\xA0app"),It.forEach(t),le=p(e),U=a(e,"P",{});var Rt=h(U);H=a(Rt,"IMG",{src:!0,alt:!0}),Rt.forEach(t),he=p(e),M=a(e,"P",{});var jt=h(M);Qe=l(jt,"Upon first opening the app, users will be introduced to a signup screen where they will be asked to create a username as well as submit their phone number and email. The user is requested to provide both a phone number and email as a way for drivers/riders to easily contact each other later on in the application. Minimal information is asked for from the user as this in less intrusive to the user and also builds more trust. Arguably, email is not required in this step and can be made \u201Coptional\u201D or even removed entirely."),jt.forEach(t),ue=p(e),W=a(e,"P",{});var Dt=h(W);Le=l(Dt,"The button labeled \u201CLET\u2019S GO\u201D will revert the user to the next step. The phrase \u201Clet\u2019s go\u201D is preferred over phrases such as \u201Csubmit\u201D or \u201Csign up\u201D as it entails a more enthusiastic tone and increases clarity for the user in making the decision to sign up. Perhaps a better option could be \u201CStart Your Cloudy Car Experience\u201D; while this clearly states what the user is doing, it is a very long phrase for a simple screen."),Dt.forEach(t),pe=p(e),B=a(e,"P",{});var Ft=h(B);Ne=l(Ft,"Once this process has been completed, the signup screen will not be shown again since one phone does not require multiple accounts. This design for minimal user interaction makes the app more appealing and easier to use."),Ft.forEach(t),de=p(e),G=a(e,"P",{});var Ot=h(G);Je=l(Ot,"Once signed up, the user is then guided to the home screen where they are given the option to enter either the driver or the rider side of the application. This screen has only two buttons to signifying a significant action. Both buttons have themed pictures and text copy to make both options more clear to the user. These minimal and clear options help the user make the right decision based on their situation. An improvement to this page could be made by telling the user that this action can be reversed in the future, without this the user may feel more pressured when making their choice."),Ot.forEach(t),ce=p(e),I=a(e,"H3",{});var Qt=h(I);ze=l(Qt,"Walkthrough Part 2: Beginning the\xA0Request"),Qt.forEach(t),fe=p(e),R=a(e,"P",{});var Lt=h(R);j=a(Lt,"IMG",{src:!0,alt:!0}),Lt.forEach(t),me=p(e),D=a(e,"P",{});var Nt=h(D);Ke=l(Nt,"After picking which side of the application a user would like to utilize, they are refreshed to new screens based off of their choice."),Nt.forEach(t),we=p(e),F=a(e,"P",{});var Jt=h(F);Ve=l(Jt,"The rider portion of the application showers users four main tabs: requests pending Driver acceptance, requests accepted by a Driver, accepted requests that the Rider confirmed, and a floating action button to create a new request."),Jt.forEach(t),be=p(e),O=a(e,"P",{});var zt=h(O);Xe=l(zt,"By clicking on the floating action button, the user is redirected to a map where they can set pickup destination and a drop off destination. This screen also holds a description box where users can input special messages such as a pickup time. This screen also suggests the user with an estimated price that they can use as a base point in submitting their price point. The option for riders to submit the amount they are willing to pay for a ride does not make sense entirely; however, this spec was a requirement set by the professor. Having this option also allows drivers to price discriminate as riders will enter the maximum they are willing to pay, and drivers can pick the highest paying rider to drive around. If users do not fill out this box, upon clicking the submit button, the recommended price will be auto-filled. This screen again shows minimal design, only featuring UI elements required for a user to make decisions. This screen could be improved by some text copy explaining different options such as taping the map to select a drop-off destination point and that dragging the blue stat point changes the pickup destination. This lack of direction can make users feel stuck or confused as they do not know what to do or have difficulty in submitting destination points."),zt.forEach(t),ve=p(e),Q=a(e,"P",{});var Kt=h(Q);Ye=l(Kt,"After submitting this information, users are shown a summary of their request and are given an option to edit different elements. This screen could also include more direction as to the various options users have to adjust their pickup and drop-off plan. After submitting the request a second time, the new request will be listed under \u201Cpending requests\u201D."),Kt.forEach(t),ye=p(e),L=a(e,"H3",{});var Vt=h(L);Ze=l(Vt,"Walkthrough Part 3: Accepting the\xA0Request"),Vt.forEach(t),ge=p(e),N=a(e,"P",{});var Xt=h(N);J=a(Xt,"IMG",{src:!0,alt:!0}),Xt.forEach(t),ke=p(e),z=a(e,"P",{});var Yt=h(z);$e=l(Yt,"After users create a request from the riders side of the application, the driver side of the application comes into play. The driver\u2019s side of the application is set up in a similar manner to the riders side. Users on this side are a list of request forms that they have accepted in the past as well as pending request they can accept at any time they choose. This screen also has search buttons for drivers to look up more pending requests using different filters to eliminate request options."),Yt.forEach(t),qe=p(e),K=a(e,"P",{});var Zt=h(K);et=l(Zt,"For identification reasons, before a user can enter the driver side, they must first describe their car\xA0. If a user tries to get into the driver-side from the hamburger menu in the rider-side, the app brings the user back to the home screen and displays a message to clear any confusion as to the user\u2019s actions."),Zt.forEach(t),_e=p(e),V=a(e,"P",{});var $t=h(V);tt=l($t,"After selecting a request, users are then redirected to a request details screen where they can review and accept the request. A link to the rider\u2019s profile details is also present on this display. Accepting the request will add the request to the \u201Caccepted requests\u201D list in the driver-side main screen."),$t.forEach(t),Te=p(e),X=a(e,"H3",{});var ei=h(X);it=l(ei,"Walkthrough Part 4: Confirming the\xA0Request"),ei.forEach(t),Ee=p(e),Y=a(e,"P",{});var ti=h(Y);Z=a(ti,"IMG",{src:!0,alt:!0}),ti.forEach(t),Ce=p(e),$=a(e,"P",{});var ii=h($);st=l(ii,"For riders, accepted requests will now show up under the \u201CAccepted\u201D subheading on the main rider-side screen. Riders can navigate through the details page by clicking the request; this will show pickup and destination locations and the list of drivers who accepted the request. This gives riders an opportunity to view the different drivers\u2019 profiles, to provide them with a larger sense of security. Once the riders confirm a driver, the driver is notified, and the request will be shown under the \u201CConfirmed\u201D subheading."),ii.forEach(t),Ae=p(e),ee=a(e,"H3",{});var si=h(ee);rt=l(si,"Walkthrough Part 5: Miscellaneous"),si.forEach(t),Pe=p(e),b=a(e,"P",{});var Ie=h(b);ot=l(Ie,"Hidden gestures such as tapping the map to set destination point or swipe to delete functionality on requests can be handled in many ways, some of which are outlined in an article by Nick Babich and can be read about "),y=a(Ie,"A",{href:!0,rel:!0});var ri=h(y);at=l(ri,"here"),ri.forEach(t),nt=l(Ie,"."),Ie.forEach(t),xe=p(e),te=a(e,"P",{});var oi=h(te);lt=l(oi,"There was much debate over the hamburger menu is kept in a consistent place for users to view their profile. Quick links are also strategically placed on both the rider and driver sides of the application to increase usability. A fix for this function would be adding a setting option in this menu."),oi.forEach(t),Se=p(e),v=a(e,"P",{});var Re=h(v);ht=l(Re,"The colour scheme was chosen in accordance with the logo and different shades of grey to make the app easy to see and consistent throughout. Colour can be a good way to call for users attention, "),g=a(Re,"A",{href:!0,rel:!0});var ai=h(g);ut=l(ai,"mockups"),ai.forEach(t),pt=l(Re," for the app can be seen on figma."),Re.forEach(t),Ue=p(e),ie=a(e,"H3",{});var ni=h(ie);dt=l(ni,"Conclusion"),ni.forEach(t),He=p(e),se=a(e,"P",{});var li=h(se);ct=l(li,"This app was designed with the given User Stories as requirements. This allowed the design of the app to be our own\u200A\u2014\u200Athus allowing me to use design tactics learned from reading Medium articles."),li.forEach(t),Me=p(e),f=a(e,"P",{});var oe=h(f);ft=l(oe,"Aside: App mockups were made with "),k=a(oe,"A",{href:!0,rel:!0});var hi=h(k);mt=l(hi,"Figma"),hi.forEach(t),wt=l(oe,", the online version of Sketch, and can be viewed "),q=a(oe,"A",{href:!0,rel:!0});var ui=h(q);bt=l(ui,"here"),ui.forEach(t),vt=l(oe,". Note that the mockups differ slightly from the actual screenshots."),oe.forEach(t),We=p(e),c=a(e,"P",{});var m=h(c);yt=l(m,"Co-creators of app: "),_=a(m,"A",{href:!0,rel:!0});var pi=h(_);gt=l(pi,"George Antonious"),pi.forEach(t),kt=l(m,", "),T=a(m,"A",{href:!0,rel:!0});var di=h(T);qt=l(di,"Ryan Huard"),di.forEach(t),_t=l(m,", "),E=a(m,"A",{href:!0,rel:!0});var ci=h(E);Tt=l(ci,"Harley Vanselow"),ci.forEach(t),Et=l(m,", "),C=a(m,"A",{href:!0,rel:!0});var fi=h(C);Ct=l(fi,"Steve Boddez"),fi.forEach(t),m.forEach(t),Be=p(e),A=a(e,"P",{});var St=h(A);At=l(St,"Github: "),P=a(St,"A",{href:!0,rel:!0});var mi=h(P);Pt=l(mi,"https://github.com/CMPUT301F16T12/CloudyCar"),mi.forEach(t),St.forEach(t),Ge=p(e),re=a(e,"P",{});var wi=h(re);xt=l(wi,"Editor: Sonia Kalburgi"),wi.forEach(t),this.h()},h(){je(H.src,Ht="https://cdn-images-1.medium.com/max/600/1*LHrasX7joKQuMZarSWQnLg.png")||d(H,"src",Ht),d(H,"alt","Cloudy Car signin and home page"),je(j.src,Mt="https://cdn-images-1.medium.com/max/600/1*d1xWFbYTpc29sTQzfQ8xAg.png")||d(j,"src",Mt),d(j,"alt","App's request pages"),je(J.src,Wt="https://cdn-images-1.medium.com/max/600/1*pI30aDBG34yHufTGJRXbWg.png")||d(J,"src",Wt),d(J,"alt","App's driver pages"),je(Z.src,Bt="https://cdn-images-1.medium.com/max/600/1*JW4x3SMi8rWek6PfjPKcrw.png")||d(Z,"src",Bt),d(Z,"alt","App's confirming pages"),d(y,"href","https://uxplanet.org/how-to-communicate-hidden-gestures-in-mobile-app-e55397f4006b#.3mh7g8bka"),d(y,"rel","nofollow"),d(g,"href","https://www.figma.com/file/CMWDB91uJl7BNB8G1JTUaw6r/Cloudy-Car"),d(g,"rel","nofollow"),d(k,"href","https://medium.com/@mengto/figma-vs-sketch-c01e5e74eddd#.v7j33vcdl"),d(k,"rel","nofollow"),d(q,"href","https://www.figma.com/file/CMWDB91uJl7BNB8G1JTUaw6r/Cloudy-Car"),d(q,"rel","nofollow"),d(_,"href","https://github.com/gantonious"),d(_,"rel","nofollow"),d(T,"href","https://github.com/Loonman"),d(T,"rel","nofollow"),d(E,"href","https://github.com/HarleyVanselow"),d(E,"rel","nofollow"),d(C,"href","https://github.com/snackthyme"),d(C,"rel","nofollow"),d(P,"href","https://github.com/CMPUT301F16T12/CloudyCar"),d(P,"rel","nofollow")},m(e,i){s(e,w,i),r(w,De),s(e,ae,i),s(e,x,i),r(x,Fe),s(e,ne,i),s(e,S,i),r(S,Oe),s(e,le,i),s(e,U,i),r(U,H),s(e,he,i),s(e,M,i),r(M,Qe),s(e,ue,i),s(e,W,i),r(W,Le),s(e,pe,i),s(e,B,i),r(B,Ne),s(e,de,i),s(e,G,i),r(G,Je),s(e,ce,i),s(e,I,i),r(I,ze),s(e,fe,i),s(e,R,i),r(R,j),s(e,me,i),s(e,D,i),r(D,Ke),s(e,we,i),s(e,F,i),r(F,Ve),s(e,be,i),s(e,O,i),r(O,Xe),s(e,ve,i),s(e,Q,i),r(Q,Ye),s(e,ye,i),s(e,L,i),r(L,Ze),s(e,ge,i),s(e,N,i),r(N,J),s(e,ke,i),s(e,z,i),r(z,$e),s(e,qe,i),s(e,K,i),r(K,et),s(e,_e,i),s(e,V,i),r(V,tt),s(e,Te,i),s(e,X,i),r(X,it),s(e,Ee,i),s(e,Y,i),r(Y,Z),s(e,Ce,i),s(e,$,i),r($,st),s(e,Ae,i),s(e,ee,i),r(ee,rt),s(e,Pe,i),s(e,b,i),r(b,ot),r(b,y),r(y,at),r(b,nt),s(e,xe,i),s(e,te,i),r(te,lt),s(e,Se,i),s(e,v,i),r(v,ht),r(v,g),r(g,ut),r(v,pt),s(e,Ue,i),s(e,ie,i),r(ie,dt),s(e,He,i),s(e,se,i),r(se,ct),s(e,Me,i),s(e,f,i),r(f,ft),r(f,k),r(k,mt),r(f,wt),r(f,q),r(q,bt),r(f,vt),s(e,We,i),s(e,c,i),r(c,yt),r(c,_),r(_,gt),r(c,kt),r(c,T),r(T,qt),r(c,_t),r(c,E),r(E,Tt),r(c,Et),r(c,C),r(C,Ct),s(e,Be,i),s(e,A,i),r(A,At),r(A,P),r(P,Pt),s(e,Ge,i),s(e,re,i),r(re,xt)},p:Ut,i:Ut,o:Ut,d(e){e&&t(w),e&&t(ae),e&&t(x),e&&t(ne),e&&t(S),e&&t(le),e&&t(U),e&&t(he),e&&t(M),e&&t(ue),e&&t(W),e&&t(pe),e&&t(B),e&&t(de),e&&t(G),e&&t(ce),e&&t(I),e&&t(fe),e&&t(R),e&&t(me),e&&t(D),e&&t(we),e&&t(F),e&&t(be),e&&t(O),e&&t(ve),e&&t(Q),e&&t(ye),e&&t(L),e&&t(ge),e&&t(N),e&&t(ke),e&&t(z),e&&t(qe),e&&t(K),e&&t(_e),e&&t(V),e&&t(Te),e&&t(X),e&&t(Ee),e&&t(Y),e&&t(Ce),e&&t($),e&&t(Ae),e&&t(ee),e&&t(Pe),e&&t(b),e&&t(xe),e&&t(te),e&&t(Se),e&&t(v),e&&t(Ue),e&&t(ie),e&&t(He),e&&t(se),e&&t(Me),e&&t(f),e&&t(We),e&&t(c),e&&t(Be),e&&t(A),e&&t(Ge),e&&t(re)}}}const _i={title:"Cloudy Car",description:"Cloudy Car is an Uber-like application that enables users to become drivers and riders. Cloudy Car was built for my Software Development class as a group project. The professor outlined User Stories for us to turn into a functionality spec. The following post will provide a detailed walkthrough and critique of some of the design choices made.",date:"2017-01-02",categories:[],keywords:[],published:!0,oldslugthing:"/cloudy-car-db1f84bb1306",cover:"https://cdn-images-1.medium.com/max/600/1*LHrasX7joKQuMZarSWQnLg.png"};class Ti extends vi{constructor(w){super();yi(this,w,null,ki,gi,{})}}export{Ti as default,_i as metadata};
