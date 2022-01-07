import{S as lo,i as po,s as ho,e as r,j as h,t as n,c as l,a as p,d as t,l as u,g as s,X as uo,b as f,f as o,M as a,H as li}from"../../chunks/vendor-66fc1351.js";function fo(ro){let w,ge,pi,Ne,x,ve,kt,At,We,G,m,_t,Pt,Ct,It,qt,hi=(kalburgi,cdmmansepp+""),zt,Lt,He,D,j,we,Nt,Wt,Se,K,Ht,Oe,B,St,Me,y,Ot,k,Mt,Rt,Re,J,Ut,Ue,Q,Gt,Ge,c,Dt,A,jt,Kt,_,Bt,Jt,P,Qt,Xt,De,X,Ft,je,F,Yt,Ke,Y,Vt,Be,V,Zt,Je,Z,$t,Qe,$,ea,Xe,C,ye,ta,aa,Fe,ee,ia,Ye,te,oa,Ve,ae,na,Ze,ie,sa,$e,oe,ra,et,I,be,la,pa,tt,b,ha,q,ua,da,at,z,Ee,fa,ca,it,ne,ma,ot,se,ga,nt,L,Te,va,wa,st,N,xe,ya,ba,rt,W,ke,Ea,Ta,lt,re,xa,pt,le,ka,ht,pe,Aa,ut,he,_a,dt,ue,Pa,ft,de,Ae,Ca,ct,fe,Ia,mt,ce,qa,gt,me,_e,za,vt,d,H,La,Pe,Na,Wa,Ha,S,Sa,Ce,Oa,Ma,Ra,O,Ua,Ie,Ga,Da,ja,M,Ka,qe,Ba,Ja,Qa,g,Xa,ze,Fa,Ya,Le,Va,Za,R,$a;return{c(){w=r("p"),ge=r("img"),Ne=h(),x=r("p"),ve=r("strong"),kt=n("Abstract."),At=n(" Asking a peer to explain a concept is a simple example of learner-initiated conversation and an effective learning technique, but it is difficult to automate for many different users and topics. Research on conversational agents generally keeps to conversations of a more specific domain. In this paper, a learner-initiated conversational agent is introduced; it can converse with many users (one at a time) and is capable of discussing many topics. This poster presents this agent\u2019s development with a specific focus on using conversational practices to help support informal learning experiences. The agent uses Wikipedia as a first step in the development of a flexible and mobile conversation-based learning experience."),We=h(),G=r("blockquote"),m=r("p"),_t=n("Arjun Kalburgi and Carrie Demmans Epp"),Pt=r("br"),Ct=n(`
University of Alberta, Edmonton AB T6G 2R3, Canada`),It=r("br"),qt=h(),zt=n(hi),Lt=n("@ualberta.ca"),He=h(),D=r("blockquote"),j=r("p"),we=r("strong"),Nt=n("Keywords:"),Wt=n(" E-learning, Conversational Agent, Wikipedia, Self-directed learning, Mobile learning, Informal learning."),Se=h(),K=r("h4"),Ht=n("1. Introduction and Motivation"),Oe=h(),B=r("p"),St=n("Asking a peer to explain a concept is a simple example of a learner-initiated conversation that occurs naturally. This type of learning relies on a peer to have sufficient knowledge of the topic, which is not always the case. Automating the conversation means understanding the user\u2019s goal and the user\u2019s requested topic, for any user and any topic. The ultimate goal of this project is to create an automated educational experience that is useful and context-dependent, just like that of conversing with a peer."),Me=h(),y=r("p"),Ot=n("Existing agents create and research experiences modelled after conversing with a tutor (Nye and Graesser and Hu, 2014). These agents are designed to help users with specific knowledge areas and under specific circumstances, but utilize concepts of dialog, interaction and natural language understanding (NLU) ("),k=r("a"),Mt=n("Katz and Albacete, 2013"),Rt=n(") that are applicable to any agent."),Re=h(),J=r("p"),Ut=n("The project builds a prototype e-learning agent that attempts to explore the requirements of the desired experience. The prototype is built as a command line interface (CLI) and focuses specifically on the context and dialogue of the conversational experience. Content is supplied to the agent from Wikipedia so that a large number of topics can be covered."),Ue=h(),Q=r("h4"),Gt=n("2. Existing Conversational E-Learning Agents"),Ge=h(),c=r("p"),Dt=n("Conversational agents are still far from achieving human-like dialogue ("),A=r("a"),jt=n("Thomason and Litman"),Kt=n(", 2013) despite researchers actively pursuing this goal. Dialog has been used to simulate the highly interactive nature of human tutoring ("),_=r("a"),Bt=n("Katz and Albacete, 2013"),Jt=n("), in specific domains where the conversational agent or tutoring system control most of the learning experience. However, it has been shown that there is no one size fits all language model to be used for such tutoring ("),P=r("a"),Qt=n("Katz and Jordan and Albacete, 2016"),Xt=n("). Conversational agents that help students learn by holding a conversation in natural language (Nye and Graesser and Hu, 2014) have been explored but conversations that are student-initiated have not. Existing agents ask students to explain topics, this project has the agent explaining topics from Wikipedia so the user can ask further questions."),De=h(),X=r("h4"),Ft=n("3. E-learning Dialog Development"),je=h(),F=r("p"),Yt=n("A conversational prototype was built from an iterative, design-based research perspective. The prototype features three parts: prompting, briefly summarizing, and conversing with the user."),Ke=h(),Y=r("h4"),Vt=n("3.1. Building Context using Wikipedia"),Be=h(),V=r("p"),Zt=n("The system needs to understand the goals of the user to have an appropriate conversation. These goals are the user\u2019s context."),Je=h(),Z=r("p"),$t=n("Wikipedia offered an approach to building this context with its large MediaWiki topology and consistently structured entries. Narrowing and filtering of information to satisfy the learner\u2019s goals can be done by traversing the topology and scanning through the entries."),Qe=h(),$=r("p"),ea=n("Both depth-first (i.e., choosing a Wikipedia page and exploring its content) and breadth-first (i.e., viewing the Wikipedia page in the topology, as it connects to other pages) explorations of the Wikipedia knowledge base were considered. To decide between these approaches, we conducted exploratory user evaluations."),Xe=h(),C=r("p"),ye=r("strong"),ta=n("Initial Testing."),aa=n(" The prompt, \u201Cwhat would you like to learn\u201D, was used to start a discussion and observe the type of knowledge the discussion centered around. Centering around a specific topic signified depth-first interest, and centering around relations between topics signified breadth-first interest. A few college students were briefly asked the prompting question at a hackathon. The discussions displayed depth-first interest, thus the project continued using depth-first conversation."),Fe=h(),ee=r("h4"),ia=n("3.2. Creating the Agent with the Wikipedia API"),Ye=h(),te=r("p"),oa=n("Wikipedia API libraries were used to retrieve the information and metadata from a Wikipedia page for the agent to use. A search query helped identify a Wikipedia topic for the learner and a nested list implementation of a page\u2019s sections and subsections was useful in leading the conversation to more specific information."),Ve=h(),ae=r("p"),na=n("Although conversations at this stage were possible, the text retrieved from the sections is too large and lacked conversational flow. To improve the conversation, the text needed to be summarized."),Ze=h(),ie=r("h4"),sa=n("3.3. Creating Natural Conversation with the PyTeaser\xA0API"),$e=h(),oe=r("p"),ra=n("Interviews were conducted to better understand how the agent should create summaries and handle questions the learner may have afterwards. These 10 interviews were modelled after the existing prototype and were performed on college students."),et=h(),I=r("p"),be=r("strong"),la=n("Extractive query focused summaries."),pa=n(" Interviewers would summarize large text blocks using the visual and vocal feedback they received to ensure the conversation remained relevant to the interviewee. This model is called a query-focused summary."),tt=h(),b=r("p"),ha=n("The PyTeaser API was used to provide this type of summary in the prototype. The query was set to the subtopic title itself. This helped to create smaller, focused responses by the agent. However, like many other extractive summarization algorithms ("),q=r("a"),ua=n("Ceylan and Mihalcea and Ozertem and Lloret and Palomar, 2010"),da=n("), PyTeaser\u2019s results were often too long for them to be appropriate responses."),at=h(),z=r("p"),Ee=r("strong"),fa=n("Post-summary follow-up questions."),ca=n(" During the interviews, follow-up questions were asked to help learners accomplish their learning goal."),it=h(),ne=r("p"),ma=n("This follow-up questioning was added to the agent after the summarization stage. Once the learner replies with his/her question, the agent responds by re-summarizing the topic, using keywords from the question as the query. Unfortunately the summarization again relied on PyTeaser, possibly bringing more confusion than help."),ot=h(),se=r("h4"),ga=n("3.4. Improving Conversation"),nt=h(),L=r("p"),Te=r("strong"),va=n("Using Concepts from Summarization."),wa=n(" The agent can use NLU techniques to find keywords and concepts to help build a summary, similar to what the interviewer would do. The agent uses the IBM Watson NLU API (Watson) to retrieve concepts from the user\u2019s response to help provide more data to the query focused summarizer."),st=h(),N=r("p"),xe=r("strong"),ya=n("Nested Subtopic Summarization."),ba=n(" Interviewers would include subsection headers when summarizing subtopics that had their own subsections. This helped interviewers build more context as to where the conversation should go. To replicate this within the agent, an additional summarization function was made using the same technique from Watson."),rt=h(),W=r("p"),ke=r("strong"),Ea=n("Open-Ended Questioning Upon Exit."),Ta=n(" If interviewers felt that they had failed to deliver the information the participating learner was seeking, they would simply ask if that was the case. This sparked another conversational flow for the interviewer to try to accomplish the learner\u2019s goal."),lt=h(),re=r("p"),xa=n("As this usually happened after the learner motioned for the interview to end, the agent asks similar questions at the end of the experience."),pt=h(),le=r("h4"),ka=n("4. Next\xA0Steps"),ht=h(),pe=r("p"),Aa=n("There were many possible paths the prototype could take to further explore the potential for learner-initiated conversational agents."),ut=h(),he=r("p"),_a=n("The two APIs, PyTeaser and Watson, did not solve the original problem in most cases. Output could still be too long and lack conversational flow. Although the use of PyTeaser and Watson was serviceable for this stage of the prototype, both need to use context better to support real learning conversations."),dt=h(),ue=r("p"),Pa=n("Additionally, the project would benefit from being able to distinguish between conversations that meet or failed to meet the user\u2019s learning goal. This type of metric would provide data that can be analyzed to improve the agent."),ft=h(),de=r("h4"),Ae=r("strong"),Ca=n("5. Conclusion"),ct=h(),fe=r("p"),Ia=n("The prototype agent built shows the potential for learner-initiated conversations that are relevant and knowledgeable. Interviews helped establish the dialog and content of these conversations while NLU techniques helped were used to enable agent-learner conversation."),mt=h(),ce=r("p"),qa=n("This exploration has the potential to be expanded on. The agent built is currently only able to discuss topics at a high level, but developing context-dependent summarization and more finely-tuned dialog would continue the exploration into deeper educational discussion."),gt=h(),me=r("h4"),_e=r("strong"),za=n("References"),vt=h(),d=r("ol"),H=r("li"),La=n("Hakan Ceylan, Rada Mihalcea, Umut Ozertem, Elena Lloret, and Manuel Palomar. 2010. Quantifying the limits and success of extractive summarization systems across domains. In "),Pe=r("em"),Na=n("Human Language Technologies: The 2010 Annual Conference of the North American Chapter of the Association for Computational Linguistics"),Wa=n(", pages 903\u2013911, Los Angeles, California."),Ha=h(),S=r("li"),Sa=n("Katz, S., & Albacete, P. L. (2013). A tutoring system that simulates the highly interactive nature of human tutoring. "),Ce=r("em"),Oa=n("Journal of Educational Psychology"),Ma=n(", pages 105(4), 1126\u20131141."),Ra=h(),O=r("li"),Ua=n("J. Thomason and D. Litman, \u201CDifferences in User Responses to a Wizard-of-Oz versus Automated System,\u201D "),Ie=r("em"),Ga=n("Proc. North American Chapter Assoc. Computational Linguistics: Human Language Technologies"),Da=n(" (NAACL-HLT 13), 2013, pages. 796\u2013801."),ja=h(),M=r("li"),Ka=n("S. Katz, P. Jordan & P. Albacete. Exploring How to Adaptively Apply Tutorial Dialogue Tactics. "),qe=r("em"),Ba=n("In Proceedings of the 16th IEEE International Conference on Advanced Learning Technologies."),Ja=n(" (ICALT2016), 2016."),Qa=h(),g=r("li"),Xa=n("Nye, B. D., Graesser, A. C., & Hu, X. (2014). AutoTutor and Family: A Review of 17 Years of Natural Language Tutoring. "),ze=r("em"),Fa=n("International Journal of Artificial Intelligence in Education"),Ya=n(", "),Le=r("em"),Va=n("24"),Za=n("(4), 427\u2013469. "),R=r("a"),$a=n("http://doi.org/10.1007/s40593-014-0029-5"),this.h()},l(e){w=l(e,"P",{});var i=p(w);ge=l(i,"IMG",{src:!0}),i.forEach(t),Ne=u(e),x=l(e,"P",{});var ei=p(x);ve=l(ei,"STRONG",{});var ui=p(ve);kt=s(ui,"Abstract."),ui.forEach(t),At=s(ei," Asking a peer to explain a concept is a simple example of learner-initiated conversation and an effective learning technique, but it is difficult to automate for many different users and topics. Research on conversational agents generally keeps to conversations of a more specific domain. In this paper, a learner-initiated conversational agent is introduced; it can converse with many users (one at a time) and is capable of discussing many topics. This poster presents this agent\u2019s development with a specific focus on using conversational practices to help support informal learning experiences. The agent uses Wikipedia as a first step in the development of a flexible and mobile conversation-based learning experience."),ei.forEach(t),We=u(e),G=l(e,"BLOCKQUOTE",{});var di=p(G);m=l(di,"P",{});var E=p(m);_t=s(E,"Arjun Kalburgi and Carrie Demmans Epp"),Pt=l(E,"BR",{}),Ct=s(E,`
University of Alberta, Edmonton AB T6G 2R3, Canada`),It=l(E,"BR",{}),qt=u(E),zt=s(E,hi),Lt=s(E,"@ualberta.ca"),E.forEach(t),di.forEach(t),He=u(e),D=l(e,"BLOCKQUOTE",{});var fi=p(D);j=l(fi,"P",{});var ti=p(j);we=l(ti,"STRONG",{});var ci=p(we);Nt=s(ci,"Keywords:"),ci.forEach(t),Wt=s(ti," E-learning, Conversational Agent, Wikipedia, Self-directed learning, Mobile learning, Informal learning."),ti.forEach(t),fi.forEach(t),Se=u(e),K=l(e,"H4",{});var mi=p(K);Ht=s(mi,"1. Introduction and Motivation"),mi.forEach(t),Oe=u(e),B=l(e,"P",{});var gi=p(B);St=s(gi,"Asking a peer to explain a concept is a simple example of a learner-initiated conversation that occurs naturally. This type of learning relies on a peer to have sufficient knowledge of the topic, which is not always the case. Automating the conversation means understanding the user\u2019s goal and the user\u2019s requested topic, for any user and any topic. The ultimate goal of this project is to create an automated educational experience that is useful and context-dependent, just like that of conversing with a peer."),gi.forEach(t),Me=u(e),y=l(e,"P",{});var wt=p(y);Ot=s(wt,"Existing agents create and research experiences modelled after conversing with a tutor (Nye and Graesser and Hu, 2014). These agents are designed to help users with specific knowledge areas and under specific circumstances, but utilize concepts of dialog, interaction and natural language understanding (NLU) ("),k=l(wt,"A",{href:!0,rel:!0});var vi=p(k);Mt=s(vi,"Katz and Albacete, 2013"),vi.forEach(t),Rt=s(wt,") that are applicable to any agent."),wt.forEach(t),Re=u(e),J=l(e,"P",{});var wi=p(J);Ut=s(wi,"The project builds a prototype e-learning agent that attempts to explore the requirements of the desired experience. The prototype is built as a command line interface (CLI) and focuses specifically on the context and dialogue of the conversational experience. Content is supplied to the agent from Wikipedia so that a large number of topics can be covered."),wi.forEach(t),Ue=u(e),Q=l(e,"H4",{});var yi=p(Q);Gt=s(yi,"2. Existing Conversational E-Learning Agents"),yi.forEach(t),Ge=u(e),c=l(e,"P",{});var T=p(c);Dt=s(T,"Conversational agents are still far from achieving human-like dialogue ("),A=l(T,"A",{href:!0,rel:!0});var bi=p(A);jt=s(bi,"Thomason and Litman"),bi.forEach(t),Kt=s(T,", 2013) despite researchers actively pursuing this goal. Dialog has been used to simulate the highly interactive nature of human tutoring ("),_=l(T,"A",{href:!0,rel:!0});var Ei=p(_);Bt=s(Ei,"Katz and Albacete, 2013"),Ei.forEach(t),Jt=s(T,"), in specific domains where the conversational agent or tutoring system control most of the learning experience. However, it has been shown that there is no one size fits all language model to be used for such tutoring ("),P=l(T,"A",{href:!0,rel:!0});var Ti=p(P);Qt=s(Ti,"Katz and Jordan and Albacete, 2016"),Ti.forEach(t),Xt=s(T,"). Conversational agents that help students learn by holding a conversation in natural language (Nye and Graesser and Hu, 2014) have been explored but conversations that are student-initiated have not. Existing agents ask students to explain topics, this project has the agent explaining topics from Wikipedia so the user can ask further questions."),T.forEach(t),De=u(e),X=l(e,"H4",{});var xi=p(X);Ft=s(xi,"3. E-learning Dialog Development"),xi.forEach(t),je=u(e),F=l(e,"P",{});var ki=p(F);Yt=s(ki,"A conversational prototype was built from an iterative, design-based research perspective. The prototype features three parts: prompting, briefly summarizing, and conversing with the user."),ki.forEach(t),Ke=u(e),Y=l(e,"H4",{});var Ai=p(Y);Vt=s(Ai,"3.1. Building Context using Wikipedia"),Ai.forEach(t),Be=u(e),V=l(e,"P",{});var _i=p(V);Zt=s(_i,"The system needs to understand the goals of the user to have an appropriate conversation. These goals are the user\u2019s context."),_i.forEach(t),Je=u(e),Z=l(e,"P",{});var Pi=p(Z);$t=s(Pi,"Wikipedia offered an approach to building this context with its large MediaWiki topology and consistently structured entries. Narrowing and filtering of information to satisfy the learner\u2019s goals can be done by traversing the topology and scanning through the entries."),Pi.forEach(t),Qe=u(e),$=l(e,"P",{});var Ci=p($);ea=s(Ci,"Both depth-first (i.e., choosing a Wikipedia page and exploring its content) and breadth-first (i.e., viewing the Wikipedia page in the topology, as it connects to other pages) explorations of the Wikipedia knowledge base were considered. To decide between these approaches, we conducted exploratory user evaluations."),Ci.forEach(t),Xe=u(e),C=l(e,"P",{});var ai=p(C);ye=l(ai,"STRONG",{});var Ii=p(ye);ta=s(Ii,"Initial Testing."),Ii.forEach(t),aa=s(ai," The prompt, \u201Cwhat would you like to learn\u201D, was used to start a discussion and observe the type of knowledge the discussion centered around. Centering around a specific topic signified depth-first interest, and centering around relations between topics signified breadth-first interest. A few college students were briefly asked the prompting question at a hackathon. The discussions displayed depth-first interest, thus the project continued using depth-first conversation."),ai.forEach(t),Fe=u(e),ee=l(e,"H4",{});var qi=p(ee);ia=s(qi,"3.2. Creating the Agent with the Wikipedia API"),qi.forEach(t),Ye=u(e),te=l(e,"P",{});var zi=p(te);oa=s(zi,"Wikipedia API libraries were used to retrieve the information and metadata from a Wikipedia page for the agent to use. A search query helped identify a Wikipedia topic for the learner and a nested list implementation of a page\u2019s sections and subsections was useful in leading the conversation to more specific information."),zi.forEach(t),Ve=u(e),ae=l(e,"P",{});var Li=p(ae);na=s(Li,"Although conversations at this stage were possible, the text retrieved from the sections is too large and lacked conversational flow. To improve the conversation, the text needed to be summarized."),Li.forEach(t),Ze=u(e),ie=l(e,"H4",{});var Ni=p(ie);sa=s(Ni,"3.3. Creating Natural Conversation with the PyTeaser\xA0API"),Ni.forEach(t),$e=u(e),oe=l(e,"P",{});var Wi=p(oe);ra=s(Wi,"Interviews were conducted to better understand how the agent should create summaries and handle questions the learner may have afterwards. These 10 interviews were modelled after the existing prototype and were performed on college students."),Wi.forEach(t),et=u(e),I=l(e,"P",{});var ii=p(I);be=l(ii,"STRONG",{});var Hi=p(be);la=s(Hi,"Extractive query focused summaries."),Hi.forEach(t),pa=s(ii," Interviewers would summarize large text blocks using the visual and vocal feedback they received to ensure the conversation remained relevant to the interviewee. This model is called a query-focused summary."),ii.forEach(t),tt=u(e),b=l(e,"P",{});var yt=p(b);ha=s(yt,"The PyTeaser API was used to provide this type of summary in the prototype. The query was set to the subtopic title itself. This helped to create smaller, focused responses by the agent. However, like many other extractive summarization algorithms ("),q=l(yt,"A",{href:!0,rel:!0});var Si=p(q);ua=s(Si,"Ceylan and Mihalcea and Ozertem and Lloret and Palomar, 2010"),Si.forEach(t),da=s(yt,"), PyTeaser\u2019s results were often too long for them to be appropriate responses."),yt.forEach(t),at=u(e),z=l(e,"P",{});var oi=p(z);Ee=l(oi,"STRONG",{});var Oi=p(Ee);fa=s(Oi,"Post-summary follow-up questions."),Oi.forEach(t),ca=s(oi," During the interviews, follow-up questions were asked to help learners accomplish their learning goal."),oi.forEach(t),it=u(e),ne=l(e,"P",{});var Mi=p(ne);ma=s(Mi,"This follow-up questioning was added to the agent after the summarization stage. Once the learner replies with his/her question, the agent responds by re-summarizing the topic, using keywords from the question as the query. Unfortunately the summarization again relied on PyTeaser, possibly bringing more confusion than help."),Mi.forEach(t),ot=u(e),se=l(e,"H4",{});var Ri=p(se);ga=s(Ri,"3.4. Improving Conversation"),Ri.forEach(t),nt=u(e),L=l(e,"P",{});var ni=p(L);Te=l(ni,"STRONG",{});var Ui=p(Te);va=s(Ui,"Using Concepts from Summarization."),Ui.forEach(t),wa=s(ni," The agent can use NLU techniques to find keywords and concepts to help build a summary, similar to what the interviewer would do. The agent uses the IBM Watson NLU API (Watson) to retrieve concepts from the user\u2019s response to help provide more data to the query focused summarizer."),ni.forEach(t),st=u(e),N=l(e,"P",{});var si=p(N);xe=l(si,"STRONG",{});var Gi=p(xe);ya=s(Gi,"Nested Subtopic Summarization."),Gi.forEach(t),ba=s(si," Interviewers would include subsection headers when summarizing subtopics that had their own subsections. This helped interviewers build more context as to where the conversation should go. To replicate this within the agent, an additional summarization function was made using the same technique from Watson."),si.forEach(t),rt=u(e),W=l(e,"P",{});var ri=p(W);ke=l(ri,"STRONG",{});var Di=p(ke);Ea=s(Di,"Open-Ended Questioning Upon Exit."),Di.forEach(t),Ta=s(ri," If interviewers felt that they had failed to deliver the information the participating learner was seeking, they would simply ask if that was the case. This sparked another conversational flow for the interviewer to try to accomplish the learner\u2019s goal."),ri.forEach(t),lt=u(e),re=l(e,"P",{});var ji=p(re);xa=s(ji,"As this usually happened after the learner motioned for the interview to end, the agent asks similar questions at the end of the experience."),ji.forEach(t),pt=u(e),le=l(e,"H4",{});var Ki=p(le);ka=s(Ki,"4. Next\xA0Steps"),Ki.forEach(t),ht=u(e),pe=l(e,"P",{});var Bi=p(pe);Aa=s(Bi,"There were many possible paths the prototype could take to further explore the potential for learner-initiated conversational agents."),Bi.forEach(t),ut=u(e),he=l(e,"P",{});var Ji=p(he);_a=s(Ji,"The two APIs, PyTeaser and Watson, did not solve the original problem in most cases. Output could still be too long and lack conversational flow. Although the use of PyTeaser and Watson was serviceable for this stage of the prototype, both need to use context better to support real learning conversations."),Ji.forEach(t),dt=u(e),ue=l(e,"P",{});var Qi=p(ue);Pa=s(Qi,"Additionally, the project would benefit from being able to distinguish between conversations that meet or failed to meet the user\u2019s learning goal. This type of metric would provide data that can be analyzed to improve the agent."),Qi.forEach(t),ft=u(e),de=l(e,"H4",{});var Xi=p(de);Ae=l(Xi,"STRONG",{});var Fi=p(Ae);Ca=s(Fi,"5. Conclusion"),Fi.forEach(t),Xi.forEach(t),ct=u(e),fe=l(e,"P",{});var Yi=p(fe);Ia=s(Yi,"The prototype agent built shows the potential for learner-initiated conversations that are relevant and knowledgeable. Interviews helped establish the dialog and content of these conversations while NLU techniques helped were used to enable agent-learner conversation."),Yi.forEach(t),mt=u(e),ce=l(e,"P",{});var Vi=p(ce);qa=s(Vi,"This exploration has the potential to be expanded on. The agent built is currently only able to discuss topics at a high level, but developing context-dependent summarization and more finely-tuned dialog would continue the exploration into deeper educational discussion."),Vi.forEach(t),gt=u(e),me=l(e,"H4",{});var Zi=p(me);_e=l(Zi,"STRONG",{});var $i=p(_e);za=s($i,"References"),$i.forEach(t),Zi.forEach(t),vt=u(e),d=l(e,"OL",{});var v=p(d);H=l(v,"LI",{});var bt=p(H);La=s(bt,"Hakan Ceylan, Rada Mihalcea, Umut Ozertem, Elena Lloret, and Manuel Palomar. 2010. Quantifying the limits and success of extractive summarization systems across domains. In "),Pe=l(bt,"EM",{});var eo=p(Pe);Na=s(eo,"Human Language Technologies: The 2010 Annual Conference of the North American Chapter of the Association for Computational Linguistics"),eo.forEach(t),Wa=s(bt,", pages 903\u2013911, Los Angeles, California."),bt.forEach(t),Ha=u(v),S=l(v,"LI",{});var Et=p(S);Sa=s(Et,"Katz, S., & Albacete, P. L. (2013). A tutoring system that simulates the highly interactive nature of human tutoring. "),Ce=l(Et,"EM",{});var to=p(Ce);Oa=s(to,"Journal of Educational Psychology"),to.forEach(t),Ma=s(Et,", pages 105(4), 1126\u20131141."),Et.forEach(t),Ra=u(v),O=l(v,"LI",{});var Tt=p(O);Ua=s(Tt,"J. Thomason and D. Litman, \u201CDifferences in User Responses to a Wizard-of-Oz versus Automated System,\u201D "),Ie=l(Tt,"EM",{});var ao=p(Ie);Ga=s(ao,"Proc. North American Chapter Assoc. Computational Linguistics: Human Language Technologies"),ao.forEach(t),Da=s(Tt," (NAACL-HLT 13), 2013, pages. 796\u2013801."),Tt.forEach(t),ja=u(v),M=l(v,"LI",{});var xt=p(M);Ka=s(xt,"S. Katz, P. Jordan & P. Albacete. Exploring How to Adaptively Apply Tutorial Dialogue Tactics. "),qe=l(xt,"EM",{});var io=p(qe);Ba=s(io,"In Proceedings of the 16th IEEE International Conference on Advanced Learning Technologies."),io.forEach(t),Ja=s(xt," (ICALT2016), 2016."),xt.forEach(t),Qa=u(v),g=l(v,"LI",{});var U=p(g);Xa=s(U,"Nye, B. D., Graesser, A. C., & Hu, X. (2014). AutoTutor and Family: A Review of 17 Years of Natural Language Tutoring. "),ze=l(U,"EM",{});var oo=p(ze);Fa=s(oo,"International Journal of Artificial Intelligence in Education"),oo.forEach(t),Ya=s(U,", "),Le=l(U,"EM",{});var no=p(Le);Va=s(no,"24"),no.forEach(t),Za=s(U,"(4), 427\u2013469. "),R=l(U,"A",{href:!0,rel:!0});var so=p(R);$a=s(so,"http://doi.org/10.1007/s40593-014-0029-5"),so.forEach(t),U.forEach(t),v.forEach(t),this.h()},h(){uo(ge.src,pi="https://cdn-images-1.medium.com/max/800/0*P4re_2qMolHcE0up.png")||f(ge,"src",pi),f(k,"href","http://psycnet.apa.org/record/2013-31546-001"),f(k,"rel","nofollow"),f(A,"href","http://aclweb.org/anthology/N/N13/N13-1098.pdf"),f(A,"rel","nofollow"),f(_,"href","http://psycnet.apa.org/record/2013-31546-001"),f(_,"rel","nofollow"),f(P,"href","https://ieeexplore.ieee.org/document/7756915/"),f(P,"rel","nofollow"),f(q,"href","http://wing.comp.nus.edu.sg/~antho/N/N10/N10-1133.pdf"),f(q,"rel","nofollow"),f(R,"href","http://doi.org/10.1007/s40593-014-0029-5"),f(R,"rel","nofollow")},m(e,i){o(e,w,i),a(w,ge),o(e,Ne,i),o(e,x,i),a(x,ve),a(ve,kt),a(x,At),o(e,We,i),o(e,G,i),a(G,m),a(m,_t),a(m,Pt),a(m,Ct),a(m,It),a(m,qt),a(m,zt),a(m,Lt),o(e,He,i),o(e,D,i),a(D,j),a(j,we),a(we,Nt),a(j,Wt),o(e,Se,i),o(e,K,i),a(K,Ht),o(e,Oe,i),o(e,B,i),a(B,St),o(e,Me,i),o(e,y,i),a(y,Ot),a(y,k),a(k,Mt),a(y,Rt),o(e,Re,i),o(e,J,i),a(J,Ut),o(e,Ue,i),o(e,Q,i),a(Q,Gt),o(e,Ge,i),o(e,c,i),a(c,Dt),a(c,A),a(A,jt),a(c,Kt),a(c,_),a(_,Bt),a(c,Jt),a(c,P),a(P,Qt),a(c,Xt),o(e,De,i),o(e,X,i),a(X,Ft),o(e,je,i),o(e,F,i),a(F,Yt),o(e,Ke,i),o(e,Y,i),a(Y,Vt),o(e,Be,i),o(e,V,i),a(V,Zt),o(e,Je,i),o(e,Z,i),a(Z,$t),o(e,Qe,i),o(e,$,i),a($,ea),o(e,Xe,i),o(e,C,i),a(C,ye),a(ye,ta),a(C,aa),o(e,Fe,i),o(e,ee,i),a(ee,ia),o(e,Ye,i),o(e,te,i),a(te,oa),o(e,Ve,i),o(e,ae,i),a(ae,na),o(e,Ze,i),o(e,ie,i),a(ie,sa),o(e,$e,i),o(e,oe,i),a(oe,ra),o(e,et,i),o(e,I,i),a(I,be),a(be,la),a(I,pa),o(e,tt,i),o(e,b,i),a(b,ha),a(b,q),a(q,ua),a(b,da),o(e,at,i),o(e,z,i),a(z,Ee),a(Ee,fa),a(z,ca),o(e,it,i),o(e,ne,i),a(ne,ma),o(e,ot,i),o(e,se,i),a(se,ga),o(e,nt,i),o(e,L,i),a(L,Te),a(Te,va),a(L,wa),o(e,st,i),o(e,N,i),a(N,xe),a(xe,ya),a(N,ba),o(e,rt,i),o(e,W,i),a(W,ke),a(ke,Ea),a(W,Ta),o(e,lt,i),o(e,re,i),a(re,xa),o(e,pt,i),o(e,le,i),a(le,ka),o(e,ht,i),o(e,pe,i),a(pe,Aa),o(e,ut,i),o(e,he,i),a(he,_a),o(e,dt,i),o(e,ue,i),a(ue,Pa),o(e,ft,i),o(e,de,i),a(de,Ae),a(Ae,Ca),o(e,ct,i),o(e,fe,i),a(fe,Ia),o(e,mt,i),o(e,ce,i),a(ce,qa),o(e,gt,i),o(e,me,i),a(me,_e),a(_e,za),o(e,vt,i),o(e,d,i),a(d,H),a(H,La),a(H,Pe),a(Pe,Na),a(H,Wa),a(d,Ha),a(d,S),a(S,Sa),a(S,Ce),a(Ce,Oa),a(S,Ma),a(d,Ra),a(d,O),a(O,Ua),a(O,Ie),a(Ie,Ga),a(O,Da),a(d,ja),a(d,M),a(M,Ka),a(M,qe),a(qe,Ba),a(M,Ja),a(d,Qa),a(d,g),a(g,Xa),a(g,ze),a(ze,Fa),a(g,Ya),a(g,Le),a(Le,Va),a(g,Za),a(g,R),a(R,$a)},p:li,i:li,o:li,d(e){e&&t(w),e&&t(Ne),e&&t(x),e&&t(We),e&&t(G),e&&t(He),e&&t(D),e&&t(Se),e&&t(K),e&&t(Oe),e&&t(B),e&&t(Me),e&&t(y),e&&t(Re),e&&t(J),e&&t(Ue),e&&t(Q),e&&t(Ge),e&&t(c),e&&t(De),e&&t(X),e&&t(je),e&&t(F),e&&t(Ke),e&&t(Y),e&&t(Be),e&&t(V),e&&t(Je),e&&t(Z),e&&t(Qe),e&&t($),e&&t(Xe),e&&t(C),e&&t(Fe),e&&t(ee),e&&t(Ye),e&&t(te),e&&t(Ve),e&&t(ae),e&&t(Ze),e&&t(ie),e&&t($e),e&&t(oe),e&&t(et),e&&t(I),e&&t(tt),e&&t(b),e&&t(at),e&&t(z),e&&t(it),e&&t(ne),e&&t(ot),e&&t(se),e&&t(nt),e&&t(L),e&&t(st),e&&t(N),e&&t(rt),e&&t(W),e&&t(lt),e&&t(re),e&&t(pt),e&&t(le),e&&t(ht),e&&t(pe),e&&t(ut),e&&t(he),e&&t(dt),e&&t(ue),e&&t(ft),e&&t(de),e&&t(ct),e&&t(fe),e&&t(mt),e&&t(ce),e&&t(gt),e&&t(me),e&&t(vt),e&&t(d)}}}const mo={title:"Conversations with Wikipedia (Research Paper)",description:"My research paper exploring the experience of conversational education.",date:"2018-05-28",categories:[],keywords:[],published:!0,oldslugthing:"/conversations-with-wikipedia-research-paper",cover:"https://cdn-images-1.medium.com/max/800/0*P4re_2qMolHcE0up.png"};class go extends lo{constructor(w){super();po(this,w,null,fo,ho,{})}}export{go as default,mo as metadata};
