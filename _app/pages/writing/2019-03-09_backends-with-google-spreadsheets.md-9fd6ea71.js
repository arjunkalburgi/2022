import{S as fa,i as ua,s as da,e as n,t as i,j as h,c as l,a as r,g as p,d as t,l as c,b as f,E as jt,f as o,F as s,C as Tt}from"../../chunks/index-24e0f420.js";function ma(ra){let u,De,w,Je,Re,ne,v,Ue,_,Ve,We,le,L,x,At,ie,k,qe,S,Ne,Qe,pe,y,ze,I,$e,Be,re,H,G,Lt,he,M,Fe,ce,C,Ke,fe,O,Ze,ue,D,J,xt,de,E,Xe,P,Ye,me,R,ge,ve,U,et,ke,V,g,j,ee,tt,ye,W,at,be,q,st,we,N,ot,_e,T,ha=`<code class="language-javascript"><span class="token keyword">var</span> template<span class="token punctuation">;</span>
<span class="token function">$</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ready</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  $<span class="token punctuation">.</span><span class="token function">getJSON</span><span class="token punctuation">(</span><span class="token string">'https://api.sheety.co/c1471c68-f293-46d9-ab4c-ca5e24e6e24e'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    template <span class="token operator">=</span> Handlebars<span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'#item-template'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'#list-places'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token function">template</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`,Se,d,nt,te,lt,it,ae,pt,rt,Ie,Q,ht,Ee,z,ct,Pe,$,ft,je,B,ut,Te,m,dt,se,mt,vt,oe,kt,yt,Ae,F,bt,Le,K,wt,xe,Z,_t,He,b,St,A,It,Et;return{c(){u=n("p"),De=i("As most developers I\u2019ve gone on a journey of how I can make websites faster and easier. I\u2019ve experimented with WordPress, "),w=n("a"),Je=i("HTML5UP"),Re=i(", Github Pages, and now I\u2019ve got a new tool."),ne=h(),v=n("p"),Ue=i("Say hello to "),_=n("a"),Ve=i("Sheety"),We=i(", the shitty database API (as far as databases go) that\u2019s also the best at being fast and easy."),le=h(),L=n("p"),x=n("img"),ie=h(),k=n("p"),qe=i("Sheety was made by "),S=n("a"),Ne=i("Phillip Caudell"),Qe=i(" \u201Cbecause he hates making backends\u201D and honestly it\u2019s the greatest thing ever for front end developers like me."),pe=h(),y=n("p"),ze=i("Let\u2019s look at an example. I\u2019ve rebuilt my old project, "),I=n("a"),$e=i("TheRadList"),Be=i(", to use Sheety so that my friends can easily edit the restaurant content on the website."),re=h(),H=n("p"),G=n("img"),he=h(),M=n("p"),Fe=i("TheRadList with data from\xA0Sheety"),ce=h(),C=n("h2"),Ke=i("The Spreadsheet"),fe=h(),O=n("p"),Ze=i("I\u2019ve moved all the data from a JSON var in the JS of TheRadList (yes, that\u2019s how far I went to avoid using a backend) to this Google Spreadsheet:"),ue=h(),D=n("p"),J=n("img"),de=h(),E=n("p"),Xe=i("My friends have edit access to this spreadsheet and I made them a custom link to make it easier to find: "),P=n("a"),Ye=i("https://theradlist.com/data"),me=h(),R=n("h2"),ge=i("The API"),ve=h(),U=n("p"),et=i("Putting the Google Docs Publish Link into Sheety\u2019s API tool results in the following API link for me to use!"),ke=h(),V=n("blockquote"),g=n("p"),j=n("a"),ee=n("em"),tt=i("https://api.sheety.co/c1471c68-f293-46d9-ab4c-ca5e24e6e24e"),ye=h(),W=n("p"),at=i("With all the data as objects in a list, it\u2019s easy for me to read via JavaScript."),be=h(),q=n("h2"),st=i("The Javascript"),we=h(),N=n("p"),ot=i("I copied the example on the Sheety website to load the data from the API."),_e=h(),T=n("pre"),Se=h(),d=n("p"),nt=i("It uses Handlebars to load the data into the specific "),te=n("code"),lt=i("#item-template"),it=i(" I made and then into the "),ae=n("code"),pt=i("div"),rt=i(" I need."),Ie=h(),Q=n("h2"),ht=i("Other Things"),Ee=h(),z=n("h4"),ct=i("The Filters"),Pe=h(),$=n("p"),ft=i("Unfortunately Sheety doesn\u2019t have any endpoint logic, so I can\u2019t retrieve specific objects or filter using the API. So instead I save the data into a variable and do simple list filter operations. Unfortunately none of the filter data is present at the moment so they all return an empty list."),je=h(),B=n("h4"),ut=i("Nested Objects"),Te=h(),m=n("p"),dt=i("I did another project with Sheety where I needed to my data to have some nested objects and/or lists within the object. Sheety\u2019s CSV style is obviously not suited for this. My solution was to create more Google Spreadsheets for the inner-data and use a "),se=n("code"),mt=i("primary_id"),vt=i(" to link all the data together. Then combine objects in JS "),oe=n("code"),kt=i("onLoad"),yt=i(". Who ever thought Database class would come in handy?"),Ae=h(),F=n("h4"),bt=i("Updating Data"),Le=h(),K=n("p"),wt=i("After the Spreadsheet is updated, Google/Sheety take some time for the changes to be reflected. Sometimes it\u2019s instant but sometimes it takes a couple minutes. I don\u2019t recommend using it for chat apps \u{1F602}"),xe=h(),Z=n("h2"),_t=i("The Results"),He=h(),b=n("p"),St=i("Visit "),A=n("a"),It=i("TheRadList"),Et=i(" today to see Sheety in action! Well it\u2019s not that exciting, you won\u2019t even see it, but it\u2019s lazy and that\u2019s what counts."),this.h()},l(e){u=l(e,"P",{});var a=r(u);De=p(a,"As most developers I\u2019ve gone on a journey of how I can make websites faster and easier. I\u2019ve experimented with WordPress, "),w=l(a,"A",{href:!0,rel:!0});var Ht=r(w);Je=p(Ht,"HTML5UP"),Ht.forEach(t),Re=p(a,", Github Pages, and now I\u2019ve got a new tool."),a.forEach(t),ne=c(e),v=l(e,"P",{});var Ge=r(v);Ue=p(Ge,"Say hello to "),_=l(Ge,"A",{href:!0,rel:!0});var Gt=r(_);Ve=p(Gt,"Sheety"),Gt.forEach(t),We=p(Ge,", the shitty database API (as far as databases go) that\u2019s also the best at being fast and easy."),Ge.forEach(t),le=c(e),L=l(e,"P",{});var Mt=r(L);x=l(Mt,"IMG",{src:!0,alt:!0}),Mt.forEach(t),ie=c(e),k=l(e,"P",{});var Me=r(k);qe=p(Me,"Sheety was made by "),S=l(Me,"A",{href:!0,rel:!0});var Ct=r(S);Ne=p(Ct,"Phillip Caudell"),Ct.forEach(t),Qe=p(Me," \u201Cbecause he hates making backends\u201D and honestly it\u2019s the greatest thing ever for front end developers like me."),Me.forEach(t),pe=c(e),y=l(e,"P",{});var Ce=r(y);ze=p(Ce,"Let\u2019s look at an example. I\u2019ve rebuilt my old project, "),I=l(Ce,"A",{href:!0,rel:!0});var Ot=r(I);$e=p(Ot,"TheRadList"),Ot.forEach(t),Be=p(Ce,", to use Sheety so that my friends can easily edit the restaurant content on the website."),Ce.forEach(t),re=c(e),H=l(e,"P",{});var Dt=r(H);G=l(Dt,"IMG",{src:!0,alt:!0}),Dt.forEach(t),he=c(e),M=l(e,"P",{});var Jt=r(M);Fe=p(Jt,"TheRadList with data from\xA0Sheety"),Jt.forEach(t),ce=c(e),C=l(e,"H2",{});var Rt=r(C);Ke=p(Rt,"The Spreadsheet"),Rt.forEach(t),fe=c(e),O=l(e,"P",{});var Ut=r(O);Ze=p(Ut,"I\u2019ve moved all the data from a JSON var in the JS of TheRadList (yes, that\u2019s how far I went to avoid using a backend) to this Google Spreadsheet:"),Ut.forEach(t),ue=c(e),D=l(e,"P",{});var Vt=r(D);J=l(Vt,"IMG",{src:!0,alt:!0}),Vt.forEach(t),de=c(e),E=l(e,"P",{});var Pt=r(E);Xe=p(Pt,"My friends have edit access to this spreadsheet and I made them a custom link to make it easier to find: "),P=l(Pt,"A",{href:!0,rel:!0});var Wt=r(P);Ye=p(Wt,"https://theradlist.com/data"),Wt.forEach(t),Pt.forEach(t),me=c(e),R=l(e,"H2",{});var qt=r(R);ge=p(qt,"The API"),qt.forEach(t),ve=c(e),U=l(e,"P",{});var Nt=r(U);et=p(Nt,"Putting the Google Docs Publish Link into Sheety\u2019s API tool results in the following API link for me to use!"),Nt.forEach(t),ke=c(e),V=l(e,"BLOCKQUOTE",{});var Qt=r(V);g=l(Qt,"P",{});var zt=r(g);j=l(zt,"A",{href:!0,rel:!0});var $t=r(j);ee=l($t,"EM",{});var Bt=r(ee);tt=p(Bt,"https://api.sheety.co/c1471c68-f293-46d9-ab4c-ca5e24e6e24e"),Bt.forEach(t),$t.forEach(t),zt.forEach(t),Qt.forEach(t),ye=c(e),W=l(e,"P",{});var Ft=r(W);at=p(Ft,"With all the data as objects in a list, it\u2019s easy for me to read via JavaScript."),Ft.forEach(t),be=c(e),q=l(e,"H2",{});var Kt=r(q);st=p(Kt,"The Javascript"),Kt.forEach(t),we=c(e),N=l(e,"P",{});var Zt=r(N);ot=p(Zt,"I copied the example on the Sheety website to load the data from the API."),Zt.forEach(t),_e=c(e),T=l(e,"PRE",{class:!0});var ca=r(T);ca.forEach(t),Se=c(e),d=l(e,"P",{});var X=r(d);nt=p(X,"It uses Handlebars to load the data into the specific "),te=l(X,"CODE",{});var Xt=r(te);lt=p(Xt,"#item-template"),Xt.forEach(t),it=p(X," I made and then into the "),ae=l(X,"CODE",{});var Yt=r(ae);pt=p(Yt,"div"),Yt.forEach(t),rt=p(X," I need."),X.forEach(t),Ie=c(e),Q=l(e,"H2",{});var gt=r(Q);ht=p(gt,"Other Things"),gt.forEach(t),Ee=c(e),z=l(e,"H4",{});var ea=r(z);ct=p(ea,"The Filters"),ea.forEach(t),Pe=c(e),$=l(e,"P",{});var ta=r($);ft=p(ta,"Unfortunately Sheety doesn\u2019t have any endpoint logic, so I can\u2019t retrieve specific objects or filter using the API. So instead I save the data into a variable and do simple list filter operations. Unfortunately none of the filter data is present at the moment so they all return an empty list."),ta.forEach(t),je=c(e),B=l(e,"H4",{});var aa=r(B);ut=p(aa,"Nested Objects"),aa.forEach(t),Te=c(e),m=l(e,"P",{});var Y=r(m);dt=p(Y,"I did another project with Sheety where I needed to my data to have some nested objects and/or lists within the object. Sheety\u2019s CSV style is obviously not suited for this. My solution was to create more Google Spreadsheets for the inner-data and use a "),se=l(Y,"CODE",{});var sa=r(se);mt=p(sa,"primary_id"),sa.forEach(t),vt=p(Y," to link all the data together. Then combine objects in JS "),oe=l(Y,"CODE",{});var oa=r(oe);kt=p(oa,"onLoad"),oa.forEach(t),yt=p(Y,". Who ever thought Database class would come in handy?"),Y.forEach(t),Ae=c(e),F=l(e,"H4",{});var na=r(F);bt=p(na,"Updating Data"),na.forEach(t),Le=c(e),K=l(e,"P",{});var la=r(K);wt=p(la,"After the Spreadsheet is updated, Google/Sheety take some time for the changes to be reflected. Sometimes it\u2019s instant but sometimes it takes a couple minutes. I don\u2019t recommend using it for chat apps \u{1F602}"),la.forEach(t),xe=c(e),Z=l(e,"H2",{});var ia=r(Z);_t=p(ia,"The Results"),ia.forEach(t),He=c(e),b=l(e,"P",{});var Oe=r(b);St=p(Oe,"Visit "),A=l(Oe,"A",{href:!0,rel:!0});var pa=r(A);It=p(pa,"TheRadList"),pa.forEach(t),Et=p(Oe," today to see Sheety in action! Well it\u2019s not that exciting, you won\u2019t even see it, but it\u2019s lazy and that\u2019s what counts."),Oe.forEach(t),this.h()},h(){f(w,"href","https://html5up.net"),f(w,"rel","nofollow"),f(_,"href","https://sheety.co/"),f(_,"rel","nofollow"),jt(x.src,At="https://cdn-images-1.medium.com/max/800/1*ppV1HxVjysDSUgBcaL3HbQ.png")||f(x,"src",At),f(x,"alt","Arjun before 2020 didn't know how important alt's were. Sorry no alt text!"),f(S,"href","http://twitter.com/@phillipcaudell"),f(S,"rel","nofollow"),f(I,"href","https://medium.com/arjunkalburgi/theradlist-a-new-side-product-e07bf0d3fdd8"),f(I,"rel","nofollow"),jt(G.src,Lt="https://cdn-images-1.medium.com/max/800/1*A8M_qmhSM5Lf3TZTr4LZjA.jpeg")||f(G,"src",Lt),f(G,"alt","TheRadList with data from\xA0Sheety"),jt(J.src,xt="https://cdn-images-1.medium.com/max/800/1*VkNJX7cwCfKx3h7QCqwwGQ.png")||f(J,"src",xt),f(J,"alt","Arjun before 2020 didn't know how important alt's were. Sorry no alt text!"),f(P,"href","https://theradlist.com/data"),f(P,"rel","nofollow"),f(j,"href","https://api.sheety.co/c1471c68-f293-46d9-ab4c-ca5e24e6e24e"),f(j,"rel","nofollow"),f(T,"class","language-javascript"),f(A,"href","https://medium.com/arjunkalburgi/theradlist-a-new-side-product-e07bf0d3fdd8"),f(A,"rel","nofollow")},m(e,a){o(e,u,a),s(u,De),s(u,w),s(w,Je),s(u,Re),o(e,ne,a),o(e,v,a),s(v,Ue),s(v,_),s(_,Ve),s(v,We),o(e,le,a),o(e,L,a),s(L,x),o(e,ie,a),o(e,k,a),s(k,qe),s(k,S),s(S,Ne),s(k,Qe),o(e,pe,a),o(e,y,a),s(y,ze),s(y,I),s(I,$e),s(y,Be),o(e,re,a),o(e,H,a),s(H,G),o(e,he,a),o(e,M,a),s(M,Fe),o(e,ce,a),o(e,C,a),s(C,Ke),o(e,fe,a),o(e,O,a),s(O,Ze),o(e,ue,a),o(e,D,a),s(D,J),o(e,de,a),o(e,E,a),s(E,Xe),s(E,P),s(P,Ye),o(e,me,a),o(e,R,a),s(R,ge),o(e,ve,a),o(e,U,a),s(U,et),o(e,ke,a),o(e,V,a),s(V,g),s(g,j),s(j,ee),s(ee,tt),o(e,ye,a),o(e,W,a),s(W,at),o(e,be,a),o(e,q,a),s(q,st),o(e,we,a),o(e,N,a),s(N,ot),o(e,_e,a),o(e,T,a),T.innerHTML=ha,o(e,Se,a),o(e,d,a),s(d,nt),s(d,te),s(te,lt),s(d,it),s(d,ae),s(ae,pt),s(d,rt),o(e,Ie,a),o(e,Q,a),s(Q,ht),o(e,Ee,a),o(e,z,a),s(z,ct),o(e,Pe,a),o(e,$,a),s($,ft),o(e,je,a),o(e,B,a),s(B,ut),o(e,Te,a),o(e,m,a),s(m,dt),s(m,se),s(se,mt),s(m,vt),s(m,oe),s(oe,kt),s(m,yt),o(e,Ae,a),o(e,F,a),s(F,bt),o(e,Le,a),o(e,K,a),s(K,wt),o(e,xe,a),o(e,Z,a),s(Z,_t),o(e,He,a),o(e,b,a),s(b,St),s(b,A),s(A,It),s(b,Et)},p:Tt,i:Tt,o:Tt,d(e){e&&t(u),e&&t(ne),e&&t(v),e&&t(le),e&&t(L),e&&t(ie),e&&t(k),e&&t(pe),e&&t(y),e&&t(re),e&&t(H),e&&t(he),e&&t(M),e&&t(ce),e&&t(C),e&&t(fe),e&&t(O),e&&t(ue),e&&t(D),e&&t(de),e&&t(E),e&&t(me),e&&t(R),e&&t(ve),e&&t(U),e&&t(ke),e&&t(V),e&&t(ye),e&&t(W),e&&t(be),e&&t(q),e&&t(we),e&&t(N),e&&t(_e),e&&t(T),e&&t(Se),e&&t(d),e&&t(Ie),e&&t(Q),e&&t(Ee),e&&t(z),e&&t(Pe),e&&t($),e&&t(je),e&&t(B),e&&t(Te),e&&t(m),e&&t(Ae),e&&t(F),e&&t(Le),e&&t(K),e&&t(xe),e&&t(Z),e&&t(He),e&&t(b)}}}const ka={title:"I\u2019m more lazy than you\u200A\u2014\u200Abackends with Google Spreadsheets",description:"As most developers I\u2019ve gone on a journey of how I can make websites faster and easier. I\u2019ve experimented with WordPress, HTML5UP, Github\u2026",date:"2019-03-09",categories:[],keywords:[],published:!0,oldslugthing:"/im-more-lazy-than-you-backends-with-google-spreadsheets-3eeac8d135c1",cover:"https://cdn-images-1.medium.com/max/800/1*ppV1HxVjysDSUgBcaL3HbQ.png"};class ya extends fa{constructor(u){super(),ua(this,u,null,ma,da,{})}}export{ya as default,ka as metadata};
