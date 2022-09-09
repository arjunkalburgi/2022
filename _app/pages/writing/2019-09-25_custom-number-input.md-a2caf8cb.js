import{S as An,i as Sn,s as Tn,e as p,t,j as h,c as l,a as c,g as e,d as s,l as v,b as fn,L as $n,f as u,E as a,I as dn}from"../../chunks/vendor-89e59966.js";function jn(On){let f,L,S,y,M,T,_,Pn=`<code class="language-javascript"><span class="token comment">// First, remove any '$' or decimals.</span>
<span class="token keyword">let</span> val <span class="token operator">=</span> input<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">'$'</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">'.'</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> vallen <span class="token operator">=</span> val<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

<span class="token comment">// Ensure it is a number</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">parseFloat</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token comment">// Add a 0 for edge case to ensure: "$0.04"</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>vallen <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    val <span class="token operator">=</span> <span class="token string">'0'</span> <span class="token operator">+</span> val<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>

  <span class="token comment">// Add the decimal to the correct place</span>
  <span class="token keyword">let</span> output <span class="token operator">=</span> val<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> vallen <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">'.'</span> <span class="token operator">+</span> val<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span>vallen <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">,</span> vallen<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Clean up float and add back '$'</span>
  output <span class="token operator">=</span> <span class="token string">'$'</span> <span class="token operator">+</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span>output<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,$,d,G,x,H,R,j,r,J,I,K,Q,C,U,V,F,X,Y,q,i,Z,D,nn,sn,O,an,tn,P,en,on,g,pn,ln,A,cn,un,N,E,rn,W,w,mn,B,b,kn;return{c(){f=p("p"),L=t("When you type into a currency field, the field should adapt and reflect your text input. The experience is much cleaner if you\u2019re only ever typing numbers."),S=h(),y=p("p"),M=t("Thus this:"),T=h(),_=p("pre"),$=h(),d=p("p"),G=t("Now that I\u2019m writing this, it seems like the line for the fourth comment is redundant. Why am I adding a decimal and then cleaning up the float value? Shouldn\u2019t "),x=p("code"),H=t("parseFloat(output).toFixed(2)"),R=t(" do all the right work?"),j=h(),r=p("p"),J=t("But that step is required to ensure the differences between "),I=p("code"),K=t("'0.04'"),Q=t(" and "),C=p("code"),U=t("0.40"),V=t(" and "),F=p("code"),X=t("4.00"),Y=t(" are all taken care of. :smile:"),q=h(),i=p("p"),Z=t("It\u2019s actually the final line where the redundancy comes. I use "),D=p("code"),nn=t("parseFloat"),sn=t(" for the case of "),O=p("code"),an=t("00.040"),tn=t(" where there maybe extra zeros present. And "),P=p("code"),en=t("toFixed(2)"),on=t(" is for the case when "),g=p("code"),pn=t("6.00"),ln=t(" simplifies to "),A=p("code"),cn=t("6"),un=t("."),N=h(),E=p("p"),rn=t("And it all works:"),W=h(),w=p("img"),B=h(),b=p("p"),kn=t("If there\u2019s a more efficient way to do this please let me know :D"),this.h()},l(n){f=l(n,"P",{});var o=c(f);L=e(o,"When you type into a currency field, the field should adapt and reflect your text input. The experience is much cleaner if you\u2019re only ever typing numbers."),o.forEach(s),S=v(n),y=l(n,"P",{});var hn=c(y);M=e(hn,"Thus this:"),hn.forEach(s),T=v(n),_=l(n,"PRE",{class:!0});var gn=c(_);gn.forEach(s),$=v(n),d=l(n,"P",{});var z=c(d);G=e(z,"Now that I\u2019m writing this, it seems like the line for the fourth comment is redundant. Why am I adding a decimal and then cleaning up the float value? Shouldn\u2019t "),x=l(z,"CODE",{});var vn=c(x);H=e(vn,"parseFloat(output).toFixed(2)"),vn.forEach(s),R=e(z," do all the right work?"),z.forEach(s),j=v(n),r=l(n,"P",{});var m=c(r);J=e(m,"But that step is required to ensure the differences between "),I=l(m,"CODE",{});var _n=c(I);K=e(_n,"'0.04'"),_n.forEach(s),Q=e(m," and "),C=l(m,"CODE",{});var wn=c(C);U=e(wn,"0.40"),wn.forEach(s),V=e(m," and "),F=l(m,"CODE",{});var yn=c(F);X=e(yn,"4.00"),yn.forEach(s),Y=e(m," are all taken care of. :smile:"),m.forEach(s),q=v(n),i=l(n,"P",{});var k=c(i);Z=e(k,"It\u2019s actually the final line where the redundancy comes. I use "),D=l(k,"CODE",{});var En=c(D);nn=e(En,"parseFloat"),En.forEach(s),sn=e(k," for the case of "),O=l(k,"CODE",{});var bn=c(O);an=e(bn,"00.040"),bn.forEach(s),tn=e(k," where there maybe extra zeros present. And "),P=l(k,"CODE",{});var xn=c(P);en=e(xn,"toFixed(2)"),xn.forEach(s),on=e(k," is for the case when "),g=l(k,"CODE",{});var In=c(g);pn=e(In,"6.00"),In.forEach(s),ln=e(k," simplifies to "),A=l(k,"CODE",{});var Cn=c(A);cn=e(Cn,"6"),Cn.forEach(s),un=e(k,"."),k.forEach(s),N=v(n),E=l(n,"P",{});var Fn=c(E);rn=e(Fn,"And it all works:"),Fn.forEach(s),W=v(n),w=l(n,"IMG",{src:!0,alt:!0}),B=v(n),b=l(n,"P",{});var Dn=c(b);kn=e(Dn,"If there\u2019s a more efficient way to do this please let me know :D"),Dn.forEach(s),this.h()},h(){fn(_,"class","language-javascript"),$n(w.src,mn="/post-images/2019-09-25_custom-number-input/numberinput.gif")||fn(w,"src",mn),fn(w,"alt","Number input gif showing how it works.")},m(n,o){u(n,f,o),a(f,L),u(n,S,o),u(n,y,o),a(y,M),u(n,T,o),u(n,_,o),_.innerHTML=Pn,u(n,$,o),u(n,d,o),a(d,G),a(d,x),a(x,H),a(d,R),u(n,j,o),u(n,r,o),a(r,J),a(r,I),a(I,K),a(r,Q),a(r,C),a(C,U),a(r,V),a(r,F),a(F,X),a(r,Y),u(n,q,o),u(n,i,o),a(i,Z),a(i,D),a(D,nn),a(i,sn),a(i,O),a(O,an),a(i,tn),a(i,P),a(P,en),a(i,on),a(i,g),a(g,pn),a(i,ln),a(i,A),a(A,cn),a(i,un),u(n,N,o),u(n,E,o),a(E,rn),u(n,W,o),u(n,w,o),u(n,B,o),u(n,b,o),a(b,kn)},p:dn,i:dn,o:dn,d(n){n&&s(f),n&&s(S),n&&s(y),n&&s(T),n&&s(_),n&&s($),n&&s(d),n&&s(j),n&&s(r),n&&s(q),n&&s(i),n&&s(N),n&&s(E),n&&s(W),n&&s(w),n&&s(B),n&&s(b)}}}const Nn={title:"Custom Input Behaviour for Numbers",description:"After accomplishing this twice now on two different occasions, I want to note it down for future reference. I think this is pretty core functionality for number inputs.",date:"2019-09-25",published:!0,oldslugthing:"/custom-input-behaviour-for-numbers",cover:"/post-images/2019-09-25_custom-number-input/numberinput.gif"};class Wn extends An{constructor(f){super();Sn(this,f,null,jn,Tn,{})}}export{Wn as default,Nn as metadata};