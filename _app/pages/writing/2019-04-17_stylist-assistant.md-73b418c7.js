import{S as tl,i as il,s as sl,e as l,t as n,j as u,c as a,a as r,g as f,d as t,l as h,X as m,b as p,f as s,M as o,H as As}from"../../chunks/vendor-66fc1351.js";function ol(el){let b,ri,$e,C,ni,et,U,fi,tt,H,M,js,it,W,ui,st,c,hi,E,pi,mi,g,ci,di,ot,N,wi,lt,L,yi,at,B,bi,rt,O,Ke,I,vi,nt,R,G,Ss,ft,V,ki,ut,K,_i,ht,v,Ei,P,gi,Ii,pt,k,Pi,A,Ai,ji,mt,Q,z,Ts,ct,J,Si,dt,Z,Ti,wt,X,xi,yt,_,Fi,j,Di,qi,bt,Y,Ci,vt,$,Ui,kt,ee,Qe,S,Hi,_t,te,Mi,Et,ie,Wi,gt,se,Ni,It,oe,Li,Pt,le,ae,xs,At,re,Bi,jt,ne,Oi,St,fe,Ri,Tt,T,ue,Fs,Gi,xt,he,Vi,Ft,pe,ze,x,Ki,Dt,me,Qi,qt,ce,zi,Ct,de,Ji,Ut,we,Zi,Ht,d,ye,Ds,Xi,be,qs,Yi,ve,Cs,Mt,ke,Je,$i,Wt,_e,es,Nt,Ee,Ze,ts,Lt,ge,is,Bt,Ie,ss,Ot,Pe,os,Rt,Ae,ls,Gt,je,as,Vt,w,Se,Us,rs,Te,Hs,ns,xe,Ms,Kt,Fe,Xe,fs,Qt,De,us,zt,qe,hs,Jt,Ce,ps,Zt,Ue,ms,Xt,He,Ye,F,cs,Yt,Me,ds,$t,We,ws,ei,Ne,ys,ti,Le,bs,ii,Be,vs,si,y,ks,D,_s,Es,q,gs,Is;return{c(){b=l("h3"),ri=n("Introduction"),$e=u(),C=l("p"),ni=n("The Stylist Assistant is a companion for stylists and their clients. In the industry today, personal stylists work with their clients closely, often on a daily basis, helping them achieve the client\u2019s desired personal style goal. This makes being a personal stylist a full-time job, and hiring a personal stylist very expensive. Hence,\xA0very\xA0few\xA0people\xA0have\xA0a\xA0personal\xA0stylist."),et=u(),U=l("p"),fi=n("By reducing the stylist\u2019s time commitment we can reduce the time and cost barriers for clients, thus increasing the demand in the industry."),tt=u(),H=l("p"),M=l("img"),it=u(),W=l("h5"),ui=n("Collaborators"),st=u(),c=l("p"),hi=n("Capstone projects at the University of Alberta\u2019s Faculty of Engineering are usually in groups of 3\u20135. I worked on this project with "),E=l("a"),pi=n("Rui Wu"),mi=n(" and "),g=l("a"),ci=n("Vitor Mendonca"),di=n("."),ot=u(),N=l("h5"),wi=n("Objective"),lt=u(),L=l("p"),yi=n("The Stylist Assistant seeks to help stylists with their clients daily style using image detection\xA0to\xA0recognize\xA0clothing\xA0items, data science to match outfits and a mobile app\xA0to\xA0interface\xA0between\xA0the\xA0two\xA0parties."),at=u(),B=l("p"),bi=n("The project\u2019s potential to disrupt and grow the industry to a large degree makes it a potentially revolutionary technology."),rt=u(),O=l("blockquote"),Ke=l("p"),I=l("a"),vi=n("View presentation slides for Stylist Assistant here."),nt=u(),R=l("p"),G=l("img"),ft=u(),V=l("h3"),ki=n("Image Detection"),ut=u(),K=l("h5"),_i=n("DeepFashion Dataset"),ht=u(),v=l("p"),Ei=n("We found the "),P=l("a"),gi=n("DeepFashion Project"),Ii=n(" in our research for existing solutions. It also studies the relationship between AI and fashion and so we used the project to help kickstart our solution."),pt=u(),k=l("p"),Pi=n("DeepFashion was great for kickstarting us, but also for the "),A=l("a"),Ai=n("dataset"),ji=n(" it provides. It had tagged data for all kinds of clothing features as shown below."),mt=u(),Q=l("p"),z=l("img"),ct=u(),J=l("p"),Si=n("Unfortunately, the tags for texture, fabric, shape, part and style were completely inaccurate and we could not use them in our solution. We made do with just category and continued with the project as a proof of concept."),dt=u(),Z=l("h5"),Ti=n("Neural Net"),wt=u(),X=l("p"),xi=n("We built our own neural net for the image tagging. Using the TensorFlow library as a solution that worked and satisfied the course requirements."),yt=u(),_=l("p"),Fi=n("Our Neural Net was directly based off of "),j=l("a"),Di=n("Simonyan & Zisserman\u2019s entry to the ImageNet Competition 2014"),qi=n("\u200A\u2014\u200Aalso the basis for DeepFashion."),bt=u(),Y=l("h5"),Ci=n("Alternatives Considered for Processing"),vt=u(),$=l("p"),Ui=n("We wanted to explore creating a custom classifier with the IBM Watson API, but decided this route would not satisfy the workload and learning requirements for the course. In our quick test, using DeepFashion and the custom classifier worked well as the Watson API is assisted by its existing knowledge base."),kt=u(),ee=l("blockquote"),Qe=l("p"),S=l("a"),Hi=n("See the code for the Neural Net"),_t=u(),te=l("h3"),Mi=n("Data Science"),Et=u(),ie=l("p"),Wi=n("The objective of the data science portion of the project is to combine outfits from the client\u2019s wardrobe and to measure commonality between the stylist\u2019s recommendation and the list of possible client\u2019s outfits."),gt=u(),se=l("h5"),Ni=n("Using DeepFashion Categories"),It=u(),oe=l("p"),Li=n("Through the list of all the possible clothing item categories in the DeepFashion dataset, we built 3 category trees in order to deduce similarity among items: Tops, Bottoms and Full-Body."),Pt=u(),le=l("p"),ae=l("img"),At=u(),re=l("p"),Bi=n("Items in different trees have 0% similarity, items in different sections of the graph are 25% similar, items within the same section are 50% similar and items of the same category have 100% similarity."),jt=u(),ne=l("h5"),Oi=n("Similarity Matrix"),St=u(),fe=l("p"),Ri=n("The clothing piece similarity allowed us to then make outfit similarity measurements which could then be used to find the best matching outfit from the stylist\u2019s recommended outfit."),Tt=u(),T=l("p"),ue=l("img"),Gi=n(`
The stylist\u2019s recommended is on the right and the client\u2019s wardrobe on the\xA0left.`),xt=u(),he=l("p"),Vi=n("Using outfit similarity we can retrieve the most similar outfit from the client\u2019s wardrobe, resulting in an outfit (or outfits) for the client that satisfy the stylist\u2019s recommendation."),Ft=u(),pe=l("blockquote"),ze=l("p"),x=l("a"),Ki=n("See the code for the Recommendation API"),Dt=u(),me=l("h3"),Qi=n("Mobile App"),qt=u(),ce=l("p"),zi=n("The Stylist Assistant mobile app is used by both stylists and clients, meaning a user can be both a stylist and a client using the same app (provided they have different email addresses). This design decision was made to help keep the project\u2019s scope relatively narrow. Companies like Uber originally kept both types of users, rider and driver, on the same app, but then grew into two apps as both sides of the service expanded."),Ct=u(),de=l("h5"),Ji=n("UX Design"),Ut=u(),we=l("p"),Zi=n("Design patterns (visual layouts of the app views) were given less detailed thought, although some minor patterns which were more intuitive were implemented, such as tabs in the client side rather than a side menu. This follows the general design rule that discards the idea of keeping main features hidden in a side-menu navigation. The stylist side does feature a side-menu, but it is a much more acceptable design pattern for switching between clients. Similarly, the display of side-by-side cards was chosen over other list options for showing the wardrobe and recommended outfits of the client."),Ht=u(),d=l("p"),ye=l("img"),Xi=u(),be=l("img"),Yi=u(),ve=l("img"),Mt=u(),ke=l("blockquote"),Je=l("p"),$i=n("Left to Right: Home screen, Client\u2019s recommended outfits, Stylist\u2019s client\xA0details"),Wt=u(),_e=l("h5"),es=n("UI Design"),Nt=u(),Ee=l("p"),Ze=l("em"),ts=n("Note this project was done before taking the UI design course at RED Academy."),Lt=u(),ge=l("p"),is=n("The visual aspects of the application, including the colours and fonts, were chosen to support emotional responses of reliability and elegance. The font, Eloquent Pro, and the colour black give an impression of sophistication. In colour theory, the use of navy is known to build feelings of trust and reliability."),Bt=u(),Ie=l("p"),ss=n("These visual cues are present in the application in subtle ways, such as the tab-bar colour of the recommendations being navy to suggest that the recommendations are trustworthy. The rest of the application is a simple black and white to create a tone of elegance."),Ot=u(),Pe=l("h5"),os=n("Frontend"),Rt=u(),Ae=l("p"),ls=n("We chose Ionic Framework for our app because it\u2019s fast and reliable with simple UI tools that we could easily modify. After initializing views and navigation with default templating, everything was then redesigned to reflect our app mockups."),Gt=u(),je=l("p"),as=n("We worked incrementally like this for the rest of the app as well, first adding functionality, then styling it and fixing bugs."),Vt=u(),w=l("p"),Se=l("img"),rs=u(),Te=l("img"),ns=u(),xe=l("img"),Kt=u(),Fe=l("blockquote"),Xe=l("p"),fs=n("Left to Right: Home screen, Client\u2019s recommended outfits, Stylist\u2019s client\xA0details"),Qt=u(),De=l("h5"),us=n("Backend"),zt=u(),qe=l("p"),hs=n("Since Angular was being used in the frontend, we chose to use Firebase as our database in the backend. Firebase has a number of useful features and works great with Angular as both are Google-backed."),Jt=u(),Ce=l("p"),ps=n("We used Firebase login to handle accounts and sign-in and to quickly show data within the app."),Zt=u(),Ue=l("p"),ms=n("Firebase was great but there was a lot of compatibility issues because somehow we ended up with Angular v1 in our Ionic app working with a much higher version of Firebase."),Xt=u(),He=l("blockquote"),Ye=l("p"),F=l("a"),cs=n("See the code for the mobile app"),Yt=u(),Me=l("h3"),ds=n("Results"),$t=u(),We=l("p"),ws=n("We were ultimately unsuccessful in obtaining sufficient accuracy in our classification. I think if the DeepFashion dataset was what it promised to be, we would have had something really valuable on our hands. Neural nets really need consistent data to yield good results."),ei=u(),Ne=l("p"),ys=n("The project as it stands relies on stylists to help the app build fashionable outfits tailored to the client\u2019s fashion goals. We believe that it would be possible for our system to work without the stylist\u2019s input if there was a sufficiently large and accurate database. DeepFashion was just not that database."),ti=u(),Le=l("h5"),bs=n("Key Learning\xA0Lesson"),ii=u(),Be=l("p"),vs=n("Data is a great tool that can be leveraged to do great things, but clean and accurate data is really hard to come by and without it those great things aren\u2019t."),si=u(),y=l("p"),ks=n("Tell me what you think about the project via "),D=l("a"),_s=n("Twitter"),Es=n(" or "),q=l("a"),gs=n("LinkedIn"),Is=n("!"),this.h()},l(e){b=a(e,"H3",{});var i=r(b);ri=f(i,"Introduction"),i.forEach(t),$e=h(e),C=a(e,"P",{});var Ws=r(C);ni=f(Ws,"The Stylist Assistant is a companion for stylists and their clients. In the industry today, personal stylists work with their clients closely, often on a daily basis, helping them achieve the client\u2019s desired personal style goal. This makes being a personal stylist a full-time job, and hiring a personal stylist very expensive. Hence,\xA0very\xA0few\xA0people\xA0have\xA0a\xA0personal\xA0stylist."),Ws.forEach(t),et=h(e),U=a(e,"P",{});var Ns=r(U);fi=f(Ns,"By reducing the stylist\u2019s time commitment we can reduce the time and cost barriers for clients, thus increasing the demand in the industry."),Ns.forEach(t),tt=h(e),H=a(e,"P",{});var Ls=r(H);M=a(Ls,"IMG",{src:!0,alt:!0}),Ls.forEach(t),it=h(e),W=a(e,"H5",{});var Bs=r(W);ui=f(Bs,"Collaborators"),Bs.forEach(t),st=h(e),c=a(e,"P",{});var Oe=r(c);hi=f(Oe,"Capstone projects at the University of Alberta\u2019s Faculty of Engineering are usually in groups of 3\u20135. I worked on this project with "),E=a(Oe,"A",{href:!0,rel:!0});var Os=r(E);pi=f(Os,"Rui Wu"),Os.forEach(t),mi=f(Oe," and "),g=a(Oe,"A",{href:!0,rel:!0});var Rs=r(g);ci=f(Rs,"Vitor Mendonca"),Rs.forEach(t),di=f(Oe,"."),Oe.forEach(t),ot=h(e),N=a(e,"H5",{});var Gs=r(N);wi=f(Gs,"Objective"),Gs.forEach(t),lt=h(e),L=a(e,"P",{});var Vs=r(L);yi=f(Vs,"The Stylist Assistant seeks to help stylists with their clients daily style using image detection\xA0to\xA0recognize\xA0clothing\xA0items, data science to match outfits and a mobile app\xA0to\xA0interface\xA0between\xA0the\xA0two\xA0parties."),Vs.forEach(t),at=h(e),B=a(e,"P",{});var Ks=r(B);bi=f(Ks,"The project\u2019s potential to disrupt and grow the industry to a large degree makes it a potentially revolutionary technology."),Ks.forEach(t),rt=h(e),O=a(e,"BLOCKQUOTE",{});var Qs=r(O);Ke=a(Qs,"P",{});var zs=r(Ke);I=a(zs,"A",{href:!0,rel:!0});var Js=r(I);vi=f(Js,"View presentation slides for Stylist Assistant here."),Js.forEach(t),zs.forEach(t),Qs.forEach(t),nt=h(e),R=a(e,"P",{});var Zs=r(R);G=a(Zs,"IMG",{src:!0,alt:!0}),Zs.forEach(t),ft=h(e),V=a(e,"H3",{});var Xs=r(V);ki=f(Xs,"Image Detection"),Xs.forEach(t),ut=h(e),K=a(e,"H5",{});var Ys=r(K);_i=f(Ys,"DeepFashion Dataset"),Ys.forEach(t),ht=h(e),v=a(e,"P",{});var oi=r(v);Ei=f(oi,"We found the "),P=a(oi,"A",{href:!0,rel:!0});var $s=r(P);gi=f($s,"DeepFashion Project"),$s.forEach(t),Ii=f(oi," in our research for existing solutions. It also studies the relationship between AI and fashion and so we used the project to help kickstart our solution."),oi.forEach(t),pt=h(e),k=a(e,"P",{});var li=r(k);Pi=f(li,"DeepFashion was great for kickstarting us, but also for the "),A=a(li,"A",{href:!0,rel:!0});var eo=r(A);Ai=f(eo,"dataset"),eo.forEach(t),ji=f(li," it provides. It had tagged data for all kinds of clothing features as shown below."),li.forEach(t),mt=h(e),Q=a(e,"P",{});var to=r(Q);z=a(to,"IMG",{src:!0,alt:!0}),to.forEach(t),ct=h(e),J=a(e,"P",{});var io=r(J);Si=f(io,"Unfortunately, the tags for texture, fabric, shape, part and style were completely inaccurate and we could not use them in our solution. We made do with just category and continued with the project as a proof of concept."),io.forEach(t),dt=h(e),Z=a(e,"H5",{});var so=r(Z);Ti=f(so,"Neural Net"),so.forEach(t),wt=h(e),X=a(e,"P",{});var oo=r(X);xi=f(oo,"We built our own neural net for the image tagging. Using the TensorFlow library as a solution that worked and satisfied the course requirements."),oo.forEach(t),yt=h(e),_=a(e,"P",{});var ai=r(_);Fi=f(ai,"Our Neural Net was directly based off of "),j=a(ai,"A",{href:!0,rel:!0});var lo=r(j);Di=f(lo,"Simonyan & Zisserman\u2019s entry to the ImageNet Competition 2014"),lo.forEach(t),qi=f(ai,"\u200A\u2014\u200Aalso the basis for DeepFashion."),ai.forEach(t),bt=h(e),Y=a(e,"H5",{});var ao=r(Y);Ci=f(ao,"Alternatives Considered for Processing"),ao.forEach(t),vt=h(e),$=a(e,"P",{});var ro=r($);Ui=f(ro,"We wanted to explore creating a custom classifier with the IBM Watson API, but decided this route would not satisfy the workload and learning requirements for the course. In our quick test, using DeepFashion and the custom classifier worked well as the Watson API is assisted by its existing knowledge base."),ro.forEach(t),kt=h(e),ee=a(e,"BLOCKQUOTE",{});var no=r(ee);Qe=a(no,"P",{});var fo=r(Qe);S=a(fo,"A",{href:!0,rel:!0});var uo=r(S);Hi=f(uo,"See the code for the Neural Net"),uo.forEach(t),fo.forEach(t),no.forEach(t),_t=h(e),te=a(e,"H3",{});var ho=r(te);Mi=f(ho,"Data Science"),ho.forEach(t),Et=h(e),ie=a(e,"P",{});var po=r(ie);Wi=f(po,"The objective of the data science portion of the project is to combine outfits from the client\u2019s wardrobe and to measure commonality between the stylist\u2019s recommendation and the list of possible client\u2019s outfits."),po.forEach(t),gt=h(e),se=a(e,"H5",{});var mo=r(se);Ni=f(mo,"Using DeepFashion Categories"),mo.forEach(t),It=h(e),oe=a(e,"P",{});var co=r(oe);Li=f(co,"Through the list of all the possible clothing item categories in the DeepFashion dataset, we built 3 category trees in order to deduce similarity among items: Tops, Bottoms and Full-Body."),co.forEach(t),Pt=h(e),le=a(e,"P",{});var wo=r(le);ae=a(wo,"IMG",{src:!0,alt:!0}),wo.forEach(t),At=h(e),re=a(e,"P",{});var yo=r(re);Bi=f(yo,"Items in different trees have 0% similarity, items in different sections of the graph are 25% similar, items within the same section are 50% similar and items of the same category have 100% similarity."),yo.forEach(t),jt=h(e),ne=a(e,"H5",{});var bo=r(ne);Oi=f(bo,"Similarity Matrix"),bo.forEach(t),St=h(e),fe=a(e,"P",{});var vo=r(fe);Ri=f(vo,"The clothing piece similarity allowed us to then make outfit similarity measurements which could then be used to find the best matching outfit from the stylist\u2019s recommended outfit."),vo.forEach(t),Tt=h(e),T=a(e,"P",{});var Ps=r(T);ue=a(Ps,"IMG",{src:!0,alt:!0}),Gi=f(Ps,`
The stylist\u2019s recommended is on the right and the client\u2019s wardrobe on the\xA0left.`),Ps.forEach(t),xt=h(e),he=a(e,"P",{});var ko=r(he);Vi=f(ko,"Using outfit similarity we can retrieve the most similar outfit from the client\u2019s wardrobe, resulting in an outfit (or outfits) for the client that satisfy the stylist\u2019s recommendation."),ko.forEach(t),Ft=h(e),pe=a(e,"BLOCKQUOTE",{});var _o=r(pe);ze=a(_o,"P",{});var Eo=r(ze);x=a(Eo,"A",{href:!0,rel:!0});var go=r(x);Ki=f(go,"See the code for the Recommendation API"),go.forEach(t),Eo.forEach(t),_o.forEach(t),Dt=h(e),me=a(e,"H3",{});var Io=r(me);Qi=f(Io,"Mobile App"),Io.forEach(t),qt=h(e),ce=a(e,"P",{});var Po=r(ce);zi=f(Po,"The Stylist Assistant mobile app is used by both stylists and clients, meaning a user can be both a stylist and a client using the same app (provided they have different email addresses). This design decision was made to help keep the project\u2019s scope relatively narrow. Companies like Uber originally kept both types of users, rider and driver, on the same app, but then grew into two apps as both sides of the service expanded."),Po.forEach(t),Ct=h(e),de=a(e,"H5",{});var Ao=r(de);Ji=f(Ao,"UX Design"),Ao.forEach(t),Ut=h(e),we=a(e,"P",{});var jo=r(we);Zi=f(jo,"Design patterns (visual layouts of the app views) were given less detailed thought, although some minor patterns which were more intuitive were implemented, such as tabs in the client side rather than a side menu. This follows the general design rule that discards the idea of keeping main features hidden in a side-menu navigation. The stylist side does feature a side-menu, but it is a much more acceptable design pattern for switching between clients. Similarly, the display of side-by-side cards was chosen over other list options for showing the wardrobe and recommended outfits of the client."),jo.forEach(t),Ht=h(e),d=a(e,"P",{});var Re=r(d);ye=a(Re,"IMG",{src:!0,alt:!0}),Xi=h(Re),be=a(Re,"IMG",{src:!0,alt:!0}),Yi=h(Re),ve=a(Re,"IMG",{src:!0,alt:!0}),Re.forEach(t),Mt=h(e),ke=a(e,"BLOCKQUOTE",{});var So=r(ke);Je=a(So,"P",{});var To=r(Je);$i=f(To,"Left to Right: Home screen, Client\u2019s recommended outfits, Stylist\u2019s client\xA0details"),To.forEach(t),So.forEach(t),Wt=h(e),_e=a(e,"H5",{});var xo=r(_e);es=f(xo,"UI Design"),xo.forEach(t),Nt=h(e),Ee=a(e,"P",{});var Fo=r(Ee);Ze=a(Fo,"EM",{});var Do=r(Ze);ts=f(Do,"Note this project was done before taking the UI design course at RED Academy."),Do.forEach(t),Fo.forEach(t),Lt=h(e),ge=a(e,"P",{});var qo=r(ge);is=f(qo,"The visual aspects of the application, including the colours and fonts, were chosen to support emotional responses of reliability and elegance. The font, Eloquent Pro, and the colour black give an impression of sophistication. In colour theory, the use of navy is known to build feelings of trust and reliability."),qo.forEach(t),Bt=h(e),Ie=a(e,"P",{});var Co=r(Ie);ss=f(Co,"These visual cues are present in the application in subtle ways, such as the tab-bar colour of the recommendations being navy to suggest that the recommendations are trustworthy. The rest of the application is a simple black and white to create a tone of elegance."),Co.forEach(t),Ot=h(e),Pe=a(e,"H5",{});var Uo=r(Pe);os=f(Uo,"Frontend"),Uo.forEach(t),Rt=h(e),Ae=a(e,"P",{});var Ho=r(Ae);ls=f(Ho,"We chose Ionic Framework for our app because it\u2019s fast and reliable with simple UI tools that we could easily modify. After initializing views and navigation with default templating, everything was then redesigned to reflect our app mockups."),Ho.forEach(t),Gt=h(e),je=a(e,"P",{});var Mo=r(je);as=f(Mo,"We worked incrementally like this for the rest of the app as well, first adding functionality, then styling it and fixing bugs."),Mo.forEach(t),Vt=h(e),w=a(e,"P",{});var Ge=r(w);Se=a(Ge,"IMG",{src:!0,alt:!0}),rs=h(Ge),Te=a(Ge,"IMG",{src:!0,alt:!0}),ns=h(Ge),xe=a(Ge,"IMG",{src:!0,alt:!0}),Ge.forEach(t),Kt=h(e),Fe=a(e,"BLOCKQUOTE",{});var Wo=r(Fe);Xe=a(Wo,"P",{});var No=r(Xe);fs=f(No,"Left to Right: Home screen, Client\u2019s recommended outfits, Stylist\u2019s client\xA0details"),No.forEach(t),Wo.forEach(t),Qt=h(e),De=a(e,"H5",{});var Lo=r(De);us=f(Lo,"Backend"),Lo.forEach(t),zt=h(e),qe=a(e,"P",{});var Bo=r(qe);hs=f(Bo,"Since Angular was being used in the frontend, we chose to use Firebase as our database in the backend. Firebase has a number of useful features and works great with Angular as both are Google-backed."),Bo.forEach(t),Jt=h(e),Ce=a(e,"P",{});var Oo=r(Ce);ps=f(Oo,"We used Firebase login to handle accounts and sign-in and to quickly show data within the app."),Oo.forEach(t),Zt=h(e),Ue=a(e,"P",{});var Ro=r(Ue);ms=f(Ro,"Firebase was great but there was a lot of compatibility issues because somehow we ended up with Angular v1 in our Ionic app working with a much higher version of Firebase."),Ro.forEach(t),Xt=h(e),He=a(e,"BLOCKQUOTE",{});var Go=r(He);Ye=a(Go,"P",{});var Vo=r(Ye);F=a(Vo,"A",{href:!0,rel:!0});var Ko=r(F);cs=f(Ko,"See the code for the mobile app"),Ko.forEach(t),Vo.forEach(t),Go.forEach(t),Yt=h(e),Me=a(e,"H3",{});var Qo=r(Me);ds=f(Qo,"Results"),Qo.forEach(t),$t=h(e),We=a(e,"P",{});var zo=r(We);ws=f(zo,"We were ultimately unsuccessful in obtaining sufficient accuracy in our classification. I think if the DeepFashion dataset was what it promised to be, we would have had something really valuable on our hands. Neural nets really need consistent data to yield good results."),zo.forEach(t),ei=h(e),Ne=a(e,"P",{});var Jo=r(Ne);ys=f(Jo,"The project as it stands relies on stylists to help the app build fashionable outfits tailored to the client\u2019s fashion goals. We believe that it would be possible for our system to work without the stylist\u2019s input if there was a sufficiently large and accurate database. DeepFashion was just not that database."),Jo.forEach(t),ti=h(e),Le=a(e,"H5",{});var Zo=r(Le);bs=f(Zo,"Key Learning\xA0Lesson"),Zo.forEach(t),ii=h(e),Be=a(e,"P",{});var Xo=r(Be);vs=f(Xo,"Data is a great tool that can be leveraged to do great things, but clean and accurate data is really hard to come by and without it those great things aren\u2019t."),Xo.forEach(t),si=h(e),y=a(e,"P",{});var Ve=r(y);ks=f(Ve,"Tell me what you think about the project via "),D=a(Ve,"A",{href:!0,rel:!0});var Yo=r(D);_s=f(Yo,"Twitter"),Yo.forEach(t),Es=f(Ve," or "),q=a(Ve,"A",{href:!0,rel:!0});var $o=r(q);gs=f($o,"LinkedIn"),$o.forEach(t),Is=f(Ve,"!"),Ve.forEach(t),this.h()},h(){m(M.src,js="https://cdn-images-1.medium.com/max/800/1*H2VpCIxNt9mqV1Jff74W1Q.jpeg")||p(M,"src",js),p(M,"alt","Arjun before 2020 didn't know how important alt's were. Sorry no alt text!"),p(E,"href","https://www.linkedin.com/in/rui-wu-3812a2164/"),p(E,"rel","nofollow"),p(g,"href","https://www.linkedin.com/in/v%C3%ADtor-mendon%C3%A7a-221151b0/"),p(g,"rel","nofollow"),p(I,"href","https://docs.google.com/presentation/d/1U4SbZmzaiIkmf1hJq27UpBQrJmhd1VahhA49iJoCT1k/edit?usp=sharing"),p(I,"rel","nofollow"),m(G.src,Ss="https://cdn-images-1.medium.com/max/800/1*wbElysDqE7oqwJZlm47dvQ.png")||p(G,"src",Ss),p(G,"alt","Arjun before 2020 didn't know how important alt's were. Sorry no alt text!"),p(P,"href","https://liuziwei7.github.io/projects/DeepFashion.html"),p(P,"rel","nofollow"),p(A,"href","http://mmlab.ie.cuhk.edu.hk/projects/DeepFashion.html"),p(A,"rel","nofollow"),m(z.src,Ts="https://cdn-images-1.medium.com/max/800/0*DkyuFZrKj4CgmLzl.jpg")||p(z,"src",Ts),p(z,"alt","Arjun before 2020 didn't know how important alt's were. Sorry no alt text!"),p(j,"href","http://www.image-net.org/challenges/LSVRC/2014/"),p(j,"rel","nofollow"),p(S,"href","https://github.com/askalburgi/stylist-assistant/tree/master/Project%20Source/neural-network"),p(S,"rel","nofollow"),m(ae.src,xs="https://cdn-images-1.medium.com/max/800/1*xV3tu3251zPOZSr0_q0jzg.png")||p(ae,"src",xs),p(ae,"alt","Arjun before 2020 didn't know how important alt's were. Sorry no alt text!"),m(ue.src,Fs="https://cdn-images-1.medium.com/max/800/1*SISeI0rwJZYMaDVVocYF3g.png")||p(ue,"src",Fs),p(ue,"alt","The stylist\u2019s recommended is on the right and the client\u2019s wardrobe on the\xA0left."),p(x,"href","https://github.com/askalburgi/stylist-assistant/tree/master/Project%20Source/recommender"),p(x,"rel","nofollow"),m(ye.src,Ds="https://cdn-images-1.medium.com/max/400/0*djuOs4oNY9MJRgBT")||p(ye,"src",Ds),p(ye,"alt","Arjun before 2020 didn't know how important alt's were. Sorry no alt text!"),m(be.src,qs="https://cdn-images-1.medium.com/max/400/0*mly3daHo0l2Lb1jX")||p(be,"src",qs),p(be,"alt","Arjun before 2020 didn't know how important alt's were. Sorry no alt text!"),m(ve.src,Cs="https://cdn-images-1.medium.com/max/400/0*NHoqSqItIBWuqQbh")||p(ve,"src",Cs),p(ve,"alt","Arjun before 2020 didn't know how important alt's were. Sorry no alt text!"),m(Se.src,Us="https://cdn-images-1.medium.com/max/400/0*LlK-kfS_7MU-mu_X")||p(Se,"src",Us),p(Se,"alt","Arjun before 2020 didn't know how important alt's were. Sorry no alt text!"),m(Te.src,Hs="https://cdn-images-1.medium.com/max/400/0*91yXBox7Oj-F21AI")||p(Te,"src",Hs),p(Te,"alt","Arjun before 2020 didn't know how important alt's were. Sorry no alt text!"),m(xe.src,Ms="https://cdn-images-1.medium.com/max/400/0*OG0DA3QKeXMPxC3N")||p(xe,"src",Ms),p(xe,"alt","Left to Right: Home screen, Client\u2019s recommended outfits, Stylist\u2019s client\xA0details"),p(F,"href","https://github.com/askalburgi/stylist-assistant/tree/master/Project%20Source"),p(F,"rel","nofollow"),p(D,"href","http://twitter.com/askalburgi"),p(D,"rel","nofollow"),p(q,"href","https://www.linkedin.com/in/arjun-kalburgi-82b25058/"),p(q,"rel","nofollow")},m(e,i){s(e,b,i),o(b,ri),s(e,$e,i),s(e,C,i),o(C,ni),s(e,et,i),s(e,U,i),o(U,fi),s(e,tt,i),s(e,H,i),o(H,M),s(e,it,i),s(e,W,i),o(W,ui),s(e,st,i),s(e,c,i),o(c,hi),o(c,E),o(E,pi),o(c,mi),o(c,g),o(g,ci),o(c,di),s(e,ot,i),s(e,N,i),o(N,wi),s(e,lt,i),s(e,L,i),o(L,yi),s(e,at,i),s(e,B,i),o(B,bi),s(e,rt,i),s(e,O,i),o(O,Ke),o(Ke,I),o(I,vi),s(e,nt,i),s(e,R,i),o(R,G),s(e,ft,i),s(e,V,i),o(V,ki),s(e,ut,i),s(e,K,i),o(K,_i),s(e,ht,i),s(e,v,i),o(v,Ei),o(v,P),o(P,gi),o(v,Ii),s(e,pt,i),s(e,k,i),o(k,Pi),o(k,A),o(A,Ai),o(k,ji),s(e,mt,i),s(e,Q,i),o(Q,z),s(e,ct,i),s(e,J,i),o(J,Si),s(e,dt,i),s(e,Z,i),o(Z,Ti),s(e,wt,i),s(e,X,i),o(X,xi),s(e,yt,i),s(e,_,i),o(_,Fi),o(_,j),o(j,Di),o(_,qi),s(e,bt,i),s(e,Y,i),o(Y,Ci),s(e,vt,i),s(e,$,i),o($,Ui),s(e,kt,i),s(e,ee,i),o(ee,Qe),o(Qe,S),o(S,Hi),s(e,_t,i),s(e,te,i),o(te,Mi),s(e,Et,i),s(e,ie,i),o(ie,Wi),s(e,gt,i),s(e,se,i),o(se,Ni),s(e,It,i),s(e,oe,i),o(oe,Li),s(e,Pt,i),s(e,le,i),o(le,ae),s(e,At,i),s(e,re,i),o(re,Bi),s(e,jt,i),s(e,ne,i),o(ne,Oi),s(e,St,i),s(e,fe,i),o(fe,Ri),s(e,Tt,i),s(e,T,i),o(T,ue),o(T,Gi),s(e,xt,i),s(e,he,i),o(he,Vi),s(e,Ft,i),s(e,pe,i),o(pe,ze),o(ze,x),o(x,Ki),s(e,Dt,i),s(e,me,i),o(me,Qi),s(e,qt,i),s(e,ce,i),o(ce,zi),s(e,Ct,i),s(e,de,i),o(de,Ji),s(e,Ut,i),s(e,we,i),o(we,Zi),s(e,Ht,i),s(e,d,i),o(d,ye),o(d,Xi),o(d,be),o(d,Yi),o(d,ve),s(e,Mt,i),s(e,ke,i),o(ke,Je),o(Je,$i),s(e,Wt,i),s(e,_e,i),o(_e,es),s(e,Nt,i),s(e,Ee,i),o(Ee,Ze),o(Ze,ts),s(e,Lt,i),s(e,ge,i),o(ge,is),s(e,Bt,i),s(e,Ie,i),o(Ie,ss),s(e,Ot,i),s(e,Pe,i),o(Pe,os),s(e,Rt,i),s(e,Ae,i),o(Ae,ls),s(e,Gt,i),s(e,je,i),o(je,as),s(e,Vt,i),s(e,w,i),o(w,Se),o(w,rs),o(w,Te),o(w,ns),o(w,xe),s(e,Kt,i),s(e,Fe,i),o(Fe,Xe),o(Xe,fs),s(e,Qt,i),s(e,De,i),o(De,us),s(e,zt,i),s(e,qe,i),o(qe,hs),s(e,Jt,i),s(e,Ce,i),o(Ce,ps),s(e,Zt,i),s(e,Ue,i),o(Ue,ms),s(e,Xt,i),s(e,He,i),o(He,Ye),o(Ye,F),o(F,cs),s(e,Yt,i),s(e,Me,i),o(Me,ds),s(e,$t,i),s(e,We,i),o(We,ws),s(e,ei,i),s(e,Ne,i),o(Ne,ys),s(e,ti,i),s(e,Le,i),o(Le,bs),s(e,ii,i),s(e,Be,i),o(Be,vs),s(e,si,i),s(e,y,i),o(y,ks),o(y,D),o(D,_s),o(y,Es),o(y,q),o(q,gs),o(y,Is)},p:As,i:As,o:As,d(e){e&&t(b),e&&t($e),e&&t(C),e&&t(et),e&&t(U),e&&t(tt),e&&t(H),e&&t(it),e&&t(W),e&&t(st),e&&t(c),e&&t(ot),e&&t(N),e&&t(lt),e&&t(L),e&&t(at),e&&t(B),e&&t(rt),e&&t(O),e&&t(nt),e&&t(R),e&&t(ft),e&&t(V),e&&t(ut),e&&t(K),e&&t(ht),e&&t(v),e&&t(pt),e&&t(k),e&&t(mt),e&&t(Q),e&&t(ct),e&&t(J),e&&t(dt),e&&t(Z),e&&t(wt),e&&t(X),e&&t(yt),e&&t(_),e&&t(bt),e&&t(Y),e&&t(vt),e&&t($),e&&t(kt),e&&t(ee),e&&t(_t),e&&t(te),e&&t(Et),e&&t(ie),e&&t(gt),e&&t(se),e&&t(It),e&&t(oe),e&&t(Pt),e&&t(le),e&&t(At),e&&t(re),e&&t(jt),e&&t(ne),e&&t(St),e&&t(fe),e&&t(Tt),e&&t(T),e&&t(xt),e&&t(he),e&&t(Ft),e&&t(pe),e&&t(Dt),e&&t(me),e&&t(qt),e&&t(ce),e&&t(Ct),e&&t(de),e&&t(Ut),e&&t(we),e&&t(Ht),e&&t(d),e&&t(Mt),e&&t(ke),e&&t(Wt),e&&t(_e),e&&t(Nt),e&&t(Ee),e&&t(Lt),e&&t(ge),e&&t(Bt),e&&t(Ie),e&&t(Ot),e&&t(Pe),e&&t(Rt),e&&t(Ae),e&&t(Gt),e&&t(je),e&&t(Vt),e&&t(w),e&&t(Kt),e&&t(Fe),e&&t(Qt),e&&t(De),e&&t(zt),e&&t(qe),e&&t(Jt),e&&t(Ce),e&&t(Zt),e&&t(Ue),e&&t(Xt),e&&t(He),e&&t(Yt),e&&t(Me),e&&t($t),e&&t(We),e&&t(ei),e&&t(Ne),e&&t(ti),e&&t(Le),e&&t(ii),e&&t(Be),e&&t(si),e&&t(y)}}}const al={title:"Stylist Assistant, updating stylists to do more",description:"My final year capstone project helps personal stylists recommend daily outfits for their clients and shows  potential for market disruption.",date:"2019-04-17",categories:[],keywords:[],published:!0,oldslugthing:"/2019-04-17_stylist-assistant-updating-stylists-to-do-more",cover:"https://cdn-images-1.medium.com/max/800/1*SISeI0rwJZYMaDVVocYF3g.png"};class rl extends tl{constructor(b){super();il(this,b,null,ol,sl,{})}}export{rl as default,al as metadata};
