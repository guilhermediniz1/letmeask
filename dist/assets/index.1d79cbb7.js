var U=Object.defineProperty;var v=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var j=(t,n,o)=>n in t?U(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,M=(t,n)=>{for(var o in n||(n={}))S.call(n,o)&&j(t,o,n[o]);if(v)for(var o of v(n))L.call(n,o)&&j(t,o,n[o]);return t};var N=(t,n)=>{var o={};for(var r in t)S.call(t,r)&&n.indexOf(r)<0&&(o[r]=t[r]);if(t!=null&&v)for(var r of v(t))n.indexOf(r)<0&&L.call(t,r)&&(o[r]=t[r]);return o};import{f as k,r as u,j as e,s as l,u as $,a as i,T as A,t as x,L as V,F as C,b as F,W as q,B as K,R as J,c as y,d as X,e as Y}from"./vendor.efb267ad.js";const Z=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerpolicy&&(s.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?s.credentials="include":a.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(a){if(a.ep)return;a.ep=!0;const s=o(a);fetch(a.href,s)}};Z();const _={apiKey:"AIzaSyDGcQk9rdClfflqWoXcmmFaON0i7KCWqhc",authDomain:"letmeask-b70d0.firebaseapp.com",databaseURL:"https://letmeask-b70d0-default-rtdb.firebaseio.com",projectId:"letmeask-b70d0",storageBucket:"letmeask-b70d0.appspot.com",messagingSenderId:"812026287728",appId:'"1:812026287728:web:1374fbd9ce3e6ce4d006b5"'};k.initializeApp(_);const H=k.auth(),g=k.database(),P=u.exports.createContext({});function ee(t){const[n,o]=u.exports.useState();u.exports.useEffect(()=>{const a=H.onAuthStateChanged(s=>{if(s){const{displayName:c,photoURL:d,uid:f}=s;if(!c||!d)throw new Error("Missing information from Google Account.");o({id:f,name:c,avatar:d})}});return()=>{a()}},[]);async function r(){const a=new k.auth.GoogleAuthProvider,s=await H.signInWithPopup(a);if(s.user){const{displayName:c,photoURL:d,uid:f}=s.user;if(!c||!d)throw new Error("Missing information from Google Account.");o({id:f,name:c,avatar:d})}}return e(P.Provider,{value:{user:n,signInWithGoogle:r},children:t.children})}function w(){return u.exports.useContext(P)}var O="/assets/illustration.21d391aa.svg",R="/assets/logo.f474bede.svg",te="/assets/google-icon.a667ddf7.svg";const ne=l.button`
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: #835afd;
  color: #fff;
  padding: 0 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;

  transition: filter 0.2s;

  img {
    margin-right: 8px;
  }

  &.outlined {
    background: #fff;
    border: 1px solid #835afd;
    color: #835afd;
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;function b(o){var r=o,{isOutlined:t=!1}=r,n=N(r,["isOutlined"]);return e(ne,M({className:`button ${t?"outlined":""}`},n))}const ie=l.div`
  @media (max-width: 768px) {
    flex-direction: column;
  }
  display: flex;
  align-items: stretch;
  height: 100vh;

  .create-room {
    margin-top: 64px;
    height: 50px;
    border-radius: 8px;
    font-weight: 500;
    background: #ea4335;
    color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    border: 0;

    transition: filter 0.2s;

    img {
      margin-right: 8px;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
`,oe=l.aside`
@media (max-width: 768px){
  padding: 120px 32px;
}

  flex: 3;

  background: #835afd;
  color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 120px 80px;
  img {
    max-width: 320px;
  }

  strong {
    font: 700 36px "Poppins", sans-serif;
    line-height: 42px;
    margin-top: 16px;
  }

  p {
    font-size: 24px;
    line-height: 32px;
    margin-top: 16px;
    color: #f8f8f8;
  }
`,re=l.main`
  flex: 2;

  padding: 0 32px;

  display: flex;
  align-items: center;
  justify-content: center;
`,ae=l.div`
  @media (max-width: 768px){
    margin: 64px 0;
  }

  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  align-items: stretch;
  text-align: center;

  > img {
    align-self: center;
  }

  h2 {
    font-size: 24px;
    margin: 64px 0 24px;
    font-family: "Poppins", sans-serif;
  }
  p {
    font-size: 14px;
    color: #737388;
    margin-top: 16px;
  }
  a {
    color: #e559f9;
  }
`,se=l.div`
  font-size: 14px;
  color: #a8a8b3;
  margin: 32px 0;
  display: flex;
  align-items: center;

  &::before {
    content: "";
    flex: 1;
    height: 1px;
    background: #a8a8b3;
    margin-right: 16px;
  }
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: #a8a8b3;
    margin-left: 16px;
  }
`,de=l.form`
  input {
    height: 50px;
    border-radius: 8px;
    padding: 0 16px;
    background: #fff;
    border: 1px solid #a8a8b3;
  }
  button {
    margin-top: 16px;
  }
  button,
  input {
    width: 100%;
  }
`;function le(){const t=$(),[n,o]=u.exports.useState(""),{user:r,signInWithGoogle:a}=w();async function s(){r||await a(),t("/rooms/new")}async function c(d){if(d.preventDefault(),n.trim()=="")return;const f=await g.ref(`rooms/${n}`).get();if(!f.exists()){x("Sala n\xE3o existente. Digite um c\xF3digo v\xE1lido!");return}if(f.val().endedAt){x("Esta sala j\xE1 foi encerrada.");return}t(`/rooms/${n}`)}return i(ie,{children:[i(oe,{children:[e("img",{src:O,alt:"Ilustra\xE7\xE3o perguntas e respostas"}),e("strong",{children:"Crie salas de Q&A ao-vivo"}),e("p",{children:"Tire as d\xFAvidas de sua audi\xEAncia em tempo real!"})]}),e(re,{children:i(ae,{children:[e("img",{src:R,alt:"Letmeask"}),i("button",{onClick:s,className:"create-room",children:[e("img",{src:te,alt:"Logo Google"}),"Crie sua sala com o Google"]}),e(se,{className:"separator",children:"ou entre em uma sala"}),i(de,{onSubmit:c,children:[e("input",{type:"text",placeholder:"Digite aqui o c\xF3digo da sala",onChange:d=>o(d.target.value)}),e(b,{type:"submit",children:"Entrar na sala"})]})]})}),e(A,{})]})}const ce=l.div`
  @media (max-width: 768px) {
    flex-direction: column;
  }
  display: flex;
  align-items: stretch;
  height: 100vh;

  .create-room {
    margin-top: 64px;
    height: 50px;
    border-radius: 8px;
    font-weight: 500;
    background: #ea4335;
    color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    border: 0;

    transition: filter 0.2s;

    img {
      margin-right: 8px;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
`,pe=l.aside`
@media (max-width: 400px){
  padding: 120px 32px;
}

  flex: 3;

  background: #835afd;
  color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 120px 80px;
  img {
    max-width: 320px;
  }

  strong {
    font: 700 36px "Poppins", sans-serif;
    line-height: 42px;
    margin-top: 16px;
  }

  p {
    font-size: 24px;
    line-height: 32px;
    margin-top: 16px;
    color: #f8f8f8;
  }
`,fe=l.main`
  flex: 2;

  padding: 0 32px;

  display: flex;
  align-items: center;
  justify-content: center;
`,ue=l.div`
  @media (max-width: 768px){
    margin: 64px 0;
  }

  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  align-items: stretch;
  text-align: center;

  > img {
    align-self: center;
  }

  h2 {
    font-size: 24px;
    margin: 64px 0 24px;
    font-family: "Poppins", sans-serif;
  }
  p {
    font-size: 14px;
    color: #737388;
    margin-top: 16px;
  }
  a {
    color: #e559f9;
  }
`,ge=l.form`
  input {
    height: 50px;
    border-radius: 8px;
    padding: 0 16px;
    background: #fff;
    border: 1px solid #a8a8b3;
  }
  button {
    margin-top: 16px;
  }
  button,
  input {
    width: 100%;
  }
`;function me(){const{user:t}=w(),n=$(),[o,r]=u.exports.useState("");async function a(s){if(s.preventDefault(),o.trim()==""){x("Insira um nome v\xE1lido!");return}const d=await g.ref("rooms").push({title:o,authorId:t==null?void 0:t.id});n(`/admin/rooms/${d.key}`),x("Sala criada com sucesso!")}return i(ce,{id:"page-auth",children:[i(pe,{children:[e("img",{src:O,alt:"Ilustra\xE7\xE3o perguntas e respostas"}),e("strong",{children:"Crie salas de Q&A ao-vivo"}),i("p",{children:["Tire as d\xFAvidas de seus ",e("i",{children:"viewers"})," em tempo real!"]})]}),e(fe,{children:i(ue,{className:"main-content",children:[e("img",{src:R,alt:"Letmeask"}),e("h2",{children:"Criar uma nova sala"}),i(ge,{onSubmit:a,children:[e("input",{type:"text",placeholder:"Nome da sala",onChange:s=>r(s.target.value),value:o}),e(b,{type:"submit",children:"Criar Sala"})]}),i("p",{children:["Quer entrar em uma sala existente? ",e(V,{to:"/",children:"Clique aqui"})]})]})}),e(A,{})]})}function D(t){const{user:n}=w(),[o,r]=u.exports.useState([]),[a,s]=u.exports.useState("");return u.exports.useEffect(()=>{const c=g.ref(`rooms/${t}`);return c.on("value",d=>{const f=d.val(),p=f.questions,m=Object.entries(p).map(([B,h])=>{var z,E,I;return{id:B,content:h.content,author:h.author,isHighlighted:h.isHighlighted,isAnswered:h.isAnswered,likeCount:Object.values((z=h.likes)!=null?z:{}).length,likeId:(I=Object.entries((E=h.likes)!=null?E:{}).find(([We,W])=>W.authorId==(n==null?void 0:n.id)))==null?void 0:I[0]}});s(f.title),r(m)}),()=>{c.off("value")}},[t,n==null?void 0:n.id]),{questions:o,title:a}}const he=l.div`
  background: #fefefe;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 24px;

  & + .question {
    margin-top: 8px;
  }

  &.highlighted {
    background: #f4f0ff;
    border: 1px solid #835afd;

    footer .user-info span {
      color: #29292e;
    }
  }

  &.answered {
    background: #dbdcdd;
  }

  p {
    color: #29292e;
  }
`,xe=l.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;

  > div {
    display: flex;
    gap: 16px;
  }

  button {
    border: 0;
    background: transparent;
    cursor: pointer;
    transition: filter 0.2s;

    &.like-button {
      display: flex;
      align-items: flex-end;
      color: #737380;
      gap: 8px;

      &.liked {
        color: #835afd;
        svg path {
          stroke: #835afd;
        }
      }
    }

    &:hover {
      filter: brightness(0.8);
    }
  }
`,be=l.div`
  display: flex;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  > span {
    margin-left: 8px;
    color: #737380;
    font-size: 14px;
  } 
`;function T({content:t,author:n,isHighlighted:o,isAnswered:r,children:a}){return i(he,{className:`question ${o&&!r?"highlighted":""} ${r?"answered":""}`,children:[e("p",{children:t}),i(xe,{children:[i(be,{children:[e("img",{src:n.avatar,alt:n.name}),e("span",{children:n.name})]}),e("div",{children:a})]})]})}var we="/assets/copy.a1c593eb.svg";const ve=l.button`
  height: 40px;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  border: 1px solid #835afd;
  cursor: pointer;

  display: flex;

  div {
    background: #835afd;
    padding: 0 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  span {
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 16px 0 12px;
    width: 240px;
    font-size: 14px;
    font-weight: 500;
  }

  @media (max-width: 768px){

  }
`;function Q(t){function n(){navigator.clipboard.writeText(t.code)}return i(ve,{className:"room-code",onClick:n,children:[e("div",{children:e("img",{src:we,alt:"Copy room code"})}),i("span",{children:["Sala ",t.code]})]})}var ye="/assets/menu.c0b6c2e9.svg";const ke=l.div`
  position: relative;

  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > img {
    max-height: 45px;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 16px;

    button {
      height: 40px;
    }
  }
  [alt="Menu"] {
    display: none;
  }

  @media (max-width: 768px) {
    > div {
      display: none;
    }
    [alt="Menu"] {
      display: inherit;
      cursor: pointer;
    }
  }
`,Ce=l.header`
  padding: 24px;
  border-bottom: 1px solid #e2e2e2;
  z-index: 2;
`,$e=l.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 8px;
  padding: 16px;
  z-index: 1;

  background: #fefefe;

  transition: all .2s ease-in;

  > span {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &.hidden{
    display: none;
  }
`;function G({isAdmin:t,code:n}){const[o,r]=u.exports.useState(!1),a=$();async function s(){g.ref(`rooms/${n}`).update({endedAt:new Date}),a("/"),x("Sala encerrada!")}return i(C,{children:[e(Ce,{children:i(ke,{children:[e("img",{src:R,alt:"Letmeask"}),i("div",{children:[e(Q,{code:n}),t?e(b,{isOutlined:!0,onClick:s,children:"Encerrar sala"}):e(C,{})]}),e("img",{src:ye,alt:"Menu",onClick:()=>r(c=>c=!c)})]})}),o&&i($e,{children:[e(Q,{code:n}),e(b,{isOutlined:!0,onClick:s,children:"Encerrar sala"})]})]})}const Ae=l.div``,Re=l.div`
  max-width: 800px;
  margin: 0 auto;
`,ze=l.div`

@media (max-width: 768px){
  margin-left: 16px; 
}
  margin: 32px 0 24px;
  display: flex;
  align-items: center;

  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 24px;
    color: #29292e;
  }

  span {
    margin-left: 16px;
    background: #e559f9;
    border-radius: 9999px;
    padding: 8px 16px;
    color: #fff;
    font-weight: 500;
    font-size: 14px;
  }
`,Ee=l.form`
  textarea {
    width: 100%;
    border: 0;
    padding: 16px;
    border-radius: 8px;
    background: #fefefe;
    box-shadow: 0 2px 12px rgba($color: #000000, $alpha: 0.04);
    resize: vertical;
    min-height: 130px;
  }

  @media (max-width: 768px){
    margin: 0 16px;
  }
`,Ie=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;

  span {
    font-size: 14px;
    font-weight: 500;
    color: #737380;

    button {
      background: transparent;
      border: 0;
      color: #835af0;
      text-decoration: underline;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
    }
  }
`,je=l.div`
  display: flex;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  > span {
    margin-left: 8px;
    color: #29292e;
    font-weight: 500;
    font-size: 14px;
  }
`,Se=l.div`
  margin-top: 32px;
  @media (max-width: 768px) {
    margin: 32px 16px;
  }
`;function Le(){const{user:t}=w(),n=F(),o=n.id,[r,a]=u.exports.useState(""),{title:s,questions:c}=D(o);async function d(p){if(p.preventDefault(),r.trim()=="")return;if(!t)throw new Error("You must be logged in.");const m={content:r,author:{name:t.name,avatar:t.avatar},isHighlighted:!1,isAnswered:!1};await g.ref(`/rooms/${o}/questions`).push(m),a("")}async function f(p,m){m?await g.ref(`rooms/${o}/questions/${p}/likes/${m}`).remove():await g.ref(`rooms/${o}/questions/${p}/likes`).push({authorId:t==null?void 0:t.id})}return i(Ae,{children:[e(G,{code:n.id}),i(Re,{children:[i(ze,{children:[i("h1",{children:["Sala ",s]}),c.length>0&&i("span",{children:[c.length," pergunta(s)"]})]}),i(Ee,{onSubmit:d,children:[e("textarea",{placeholder:"O que voc\xEA deseja perguntar?",onChange:p=>a(p.target.value),value:r}),i(Ie,{className:"form-footer",children:[t?i(je,{className:"user-info",children:[e("img",{src:t.avatar,alt:t.name}),e("span",{children:t.name})]}):i("span",{children:["Para enviar uma pergunta, ",e("button",{children:"fa\xE7a seu login."})]}),e(b,{type:"submit",disabled:!t,children:"Enviar pergunta"})]})]}),e(Se,{children:c.map(p=>e(T,{content:p.content,author:p.author,isHighlighted:p.isHighlighted,isAnswered:p.isAnswered,children:!p.isAnswered&&i("button",{className:`like-button ${p.likeId?"liked":""}`,type:"button","aria-label":"Marcar como gostei",onClick:()=>f(p.id,p.likeId),children:[p.likeCount>0&&e("span",{children:p.likeCount}),e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z",stroke:"#737380",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})},p.id))})]}),e(A,{})]})}const Me=l.div``,Ne=l.main`
  max-width: 800px;
  margin: 0 auto;

  form {
    textarea {
      width: 100%;
      border: 0;
      padding: 16px;
      border-radius: 8px;
      background: #fefefe;
      box-shadow: 0 2px 12px rgba($color: #000000, $alpha: 0.04);
      resize: vertical;
      min-height: 130px;
    }
    .form-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 16px;

      .user-info {
        display: flex;
        align-items: center;

        img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }

        > span {
          margin-left: 8px;
          color: #29292e;
          font-weight: 500;
          font-size: 14px;
        }
      }

      span {
        font-size: 14px;
        font-weight: 500;
        color: #737380;

        button {
          background: transparent;
          border: 0;
          color: #835af0;
          text-decoration: underline;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`,He=l.div`
  margin: 32px 0 24px;
  display: flex;
  align-items: center;

  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 24px;
    color: #29292e;
  }

  span {
    margin-left: 16px;
    background: #e559f9;
    border-radius: 9999px;
    padding: 8px 16px;
    color: #fff;
    font-weight: 500;
    font-size: 14px;
  }
`,Qe=l.div`
  margin-top: 32px;
`,Fe=l.div`
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fefefe;
  padding: 24px;
  font-size: 24px;
  font-weight: bold;
  color: #38383d;
`;var Pe="/assets/delete.920b3ea8.svg",Oe="/assets/check.4e3a289e.svg",De="/assets/answer.2966b3d1.svg";function Te(){w();const t=F(),n=t.id,{title:o,questions:r}=D(n);async function a(d){window.confirm("Tem certeza que deseja excluir essa pergunta?")&&await g.ref(`rooms/${n}/questions/${d}`).remove()}async function s(d){await g.ref(`rooms/${n}/questions/${d}`).update({isAnswered:!0})}async function c(d){await g.ref(`rooms/${n}/questions/${d}`).update({isHighlighted:!0})}return i(Me,{children:[e(G,{isAdmin:!0,code:t.id}),i(Ne,{children:[i(He,{children:[i("h1",{children:["Sala ",o]}),i("span",{children:[r.length," pergunta(s)"]})]}),i(Qe,{children:[r.map(d=>i(T,{content:d.content,author:d.author,isHighlighted:d.isHighlighted,isAnswered:d.isAnswered,children:[!d.isAnswered&&i(C,{children:[e("button",{type:"button",onClick:()=>s(d.id),children:e("img",{src:Oe,alt:"Marcar pergunta como respondida"})}),e("button",{type:"button",onClick:()=>c(d.id),children:e("img",{src:De,alt:"Dar destaque \xE0 pergunta"})})]}),e("button",{type:"button",onClick:()=>a(d.id),children:e("img",{src:Pe,alt:"Remover pergunta"})})]},d.id)),r.length<1&&e(Fe,{children:"Ainda n\xE3o h\xE1 perguntas nesta sala."})]})]})]})}var Ge=q`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background: #f8f8f8;
    color: #29292e;
}

body, input, button, textarea {
    font: 400 16px 'Roboto', sans-serif;
}
`;function Be(){return i(K,{children:[e(ee,{children:i(J,{children:[e(y,{path:"/",exact:!0,element:e(le,{})}),e(y,{path:"/rooms/new",element:e(me,{})}),e(y,{path:"/rooms/:id",element:e(Le,{})}),e(y,{path:"/admin/rooms/:id",element:e(Te,{})})]})}),e(Ge,{})]})}X.render(e(Y.StrictMode,{children:e(Be,{})}),document.getElementById("root"));
