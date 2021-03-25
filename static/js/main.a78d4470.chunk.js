(this.webpackJsonpmixnmatch=this.webpackJsonpmixnmatch||[]).push([[0],{22:function(n,t,e){},26:function(n,t,e){"use strict";e.r(t);var i,a,c,o,r,s,d,l,p,h,f,u,b,j,x,m,O,g,v,w,y=e(0),k=e.n(y),S=e(13),z=e.n(S),N=(e(22),e(5)),C=e(11),M=e(4),I=e(2),E=e(3),F=e(14),J=(e.p,e.p+"static/media/coffee-maker.90619be0.mp3"),L=e.p+"static/media/match-2.07d6e3c1.png",H=e(1),T=E.a.div(i||(i=Object(I.a)(["\n  display: flex;\n  flex-wrap: wrap;\n\n  flex-direction: column;\n  @media (min-width: 768px) {\n    flex-direction: row;\n    width: 790px;\n  }\n"]))),A=E.a.div(a||(a=Object(I.a)(["\n  display: flex;\n  width: 100%;\n  position: relative;\n  transform: rotate(2deg);\n\n  &: nth-child(even) {\n    transform: rotate(8deg);\n  }\n\n  &: nth-child(3n) {\n    transform: rotate(-3deg);\n  }\n  &: nth-child(6n) {\n    transform: rotate(5deg);\n  }\n  &:hover {\n    transform: rotate(0);\n    > div.delete {\n      visibility: visible;\n    }\n  }\n  @media (min-width: 768px) {\n    width: auto;\n  }\n"]))),P=E.a.div(c||(c=Object(I.a)(['\n  box-shadow: 8px 8px 5px rgba(0, 0, 0, 0.3);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 14px;\n  margin: 10px;\n  font-family: "Handlee", cursive;\n  font-size: 24px;\n  width: 100%;\n  height: 30px;\n  background: #bcaaa4;\n  @media (min-width: 768px) {\n    width: 100px;\n    height: 100px;\n  }\n']))),B=Object(E.a)(P)(o||(o=Object(I.a)(["\n  cursor: pointer;\n  font-size: 48px;\n  width: auto;\n  &:hover {\n    font-size: 76px;\n    transform: font-size 3s ease-in;\n  }\n  @media (min-width: 768px) {\n    width: 100px;\n    height: 100px;\n  }\n"]))),D=E.a.div(r||(r=Object(I.a)(["\n  position: absolute;\n  visibility: hidden;\n  cursor: pointer;\n  top: 15px;\n  right: 15px;\n"]))),R=E.a.img(s||(s=Object(I.a)(["\n  display: flex;\n  margin-left: auto;\n  cursor: pointer;\n  width: 220px;\n  z-index: 2;\n  &:hover {\n    transform: rotate(10deg);\n  }\n  @media (min-width: 768px) {\n    margin-top: -40px;\n    margin-right: -100px;\n    width: 300px;\n  }\n"]))),U=function(n){var t=n.removeName,e=n.names,i=n.setShowMatch,a=n.addName,c=Object(F.a)(J),o=Object(M.a)(c,1)[0];return Object(H.jsxs)(T,{children:[e.map((function(n,e){return Object(H.jsxs)(A,{children:[Object(H.jsx)(P,{children:n},e),Object(H.jsx)(D,{className:"delete",onClick:function(){return t(n)},children:"\u24e7"})]})})),Object(H.jsx)(B,{onClick:function(){return a(prompt("Add name:"))},children:"+"}),e.length>1&&Object(H.jsx)(R,{title:"click me",alt:"mix & match",src:L,onClick:function(){setTimeout(o(),2e3),i(!0)}})]})},_=e.p+"static/media/coffee-1.e4fe01e5.png",q=e.p+"static/media/coffee-2.c40a04a6.png",G=e.p+"static/media/machine-2.9af41e91.png",K=E.a.div(d||(d=Object(I.a)(["\n  display: flex;\n  justify-content: center;\n  position: relative;\n"]))),Q=E.a.div(l||(l=Object(I.a)(["\n  color: #d7ccc8;\n  font-weight: bold;\n  position: absolute;\n  top: 10%;\n  left: 20%;\n  font-size: 20px;\n  width: 60%;\n  @media (min-width: 768px) {\n    top: 13%;\n    left: 30%;\n    font-size: 24px;\n    width: 60%;\n  }\n"]))),V=E.a.div(p||(p=Object(I.a)(["\n  color: #d7ccc8;\n  font-size: 60px;\n  font-weight: bold;\n  position: absolute;\n  top: 37%;\n  left: 45%;\n  @media (min-width: 768px) {\n    top: 39%;\n    left: 48%;\n    font-size: 72px;\n  }\n"]))),W=function(n){var t=n.renderIfFinished,e=Object(y.useState)(5),i=Object(M.a)(e,2),a=i[0],c=i[1];return Object(y.useEffect)((function(){a>0&&setTimeout((function(){return c(a-1)}),1e3)}),[a]),0===a?t():Object(H.jsxs)(K,{children:[Object(H.jsx)("img",{src:G,width:"600"}),Object(H.jsxs)(Q,{children:["One moment please, ",Object(H.jsx)("br",{}),"coffee partner is being selected..."]}),Object(H.jsx)(V,{id:"countdown",children:a})]})},X=[_,q],Y=E.a.div(h||(h=Object(I.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  @media (min-width: 768px) {\n    margin-top: 50px;\n  }\n"]))),Z=E.a.div(f||(f=Object(I.a)(["\n  position: relative;\n  width: 200px;\n"]))),$=E.a.div(u||(u=Object(I.a)(["\n  position: absolute;\n  font-size: 26px;\n  font-weight: bold;\n  left: ",";\n  right: ",";\n  top: ",';\n  font-family: "Handlee", cursive;\n  text-shadow: 2px 2px 4px #aaa;\n\n  &: nth-child(even) {\n    transform: rotate(8deg);\n  }\n\n  &: nth-child(3n) {\n    transform: rotate(-6deg);\n  }\n  &: nth-child(6n) {\n    transform: rotate(10deg);\n  }\n'])),(function(n){return n.left&&"22%"}),(function(n){return n.right&&"22%"}),(function(n){var t=n.top;return t||"50%"})),nn=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,e=[];return Object(N.a)(Array(n.length/2)).forEach((function(){var t=[];Object(N.a)(Array(2)).forEach((function(){var e=n[[Math.floor(Math.random()*n.length)]];n.splice(n.indexOf(e),1),t.push(e)})),e.push(t)})),t&&e[e.length-1].push(t),e},tn=function(n){var t=n.names,e=Object(y.useState)([]),i=Object(M.a)(e,2),a=i[0],c=i[1];return Object(y.useEffect)((function(){c(function(n){if(0===n.length%2)return nn(n);var t=n[[Math.floor(Math.random()*n.length)]];return n.splice(n.indexOf(t),1),nn(n,t)}(t))}),[]),Object(H.jsx)(W,{renderIfFinished:function(){return Object(H.jsx)(Y,{children:a.map((function(n){return Object(H.jsxs)(Z,{children:[Object(H.jsx)("img",{src:X[[Math.floor(Math.random()*X.length)]],width:"200"}),Object(H.jsx)($,{right:!0,children:n[0]}),Object(H.jsx)($,{left:!0,top:"60%",children:n[1]}),n[2]&&Object(H.jsx)($,{left:!0,top:"30%",children:n[2]})]})}))})}})},en=E.a.div(b||(b=Object(I.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  position: relative;\n  margin-bottom: 20px;\n"]))),an=E.a.div(j||(j=Object(I.a)(['\n  cursor: pointer;\n  box-shadow: 8px 8px 5px rgba(0, 0, 0, 0.3);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 14px;\n  margin: 10px;\n  font-family: "Handlee", cursive;\n  font-size: 24px;\n  width: 100px;\n  height: 40px;\n']))),cn=Object(E.a)(an)(x||(x=Object(I.a)(["\n  background-color: #795548;\n  &:hover {\n    background-color: #bcaaa4;\n    transition: background-color 0.5s ease-in-out;\n  }\n  ",";\n"])),(function(n){return n.active&&"background: #bcaaa4"})),on=Object(E.a)(an)(m||(m=Object(I.a)(["\n  cursor: ",";\n  background-color: #795548;\n  opacity: ",";\n  &:hover {\n    ","\n  }\n"])),(function(n){return n.available?"pointer":"not-allowed"}),(function(n){return n.available?1:.6}),(function(n){return n.available&&"\n        background-color: #bcaaa4;\n        transition: background-color 0.5s ease-in-out;\n      "})),rn=function(n){var t=n.setNames,e=Object(y.useState)(""),i=Object(M.a)(e,2),a=i[0],c=i[1],o=JSON.parse(window.localStorage.getItem("predefinedLists")),r=Object.keys(o);return Object(H.jsxs)(en,{children:[r.map((function(n){return Object(H.jsx)(cn,{active:n===a,onClick:function(){return t(o[e=n]),void c(e);var e},children:n})})),Object(H.jsx)(on,{available:""!==a,onClick:function(){return t([]),void c("")},children:"reset"})]})},sn=e.p+"static/media/coffee_maker-24px.c435b56e.svg",dn=E.a.div(O||(O=Object(I.a)(["\n  width: 100%;\n  @media (min-width: 768px) {\n    width: 960px;\n    margin: 0 auto;\n  }\n"]))),ln=E.a.div(g||(g=Object(I.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin: 20px 0;\n"]))),pn=E.a.h2(v||(v=Object(I.a)(['\n  cursor: pointer;\n  position: relative;\n  font-family: "Handlee", cursive;\n  font-size: 34px;\n  margin: 0;\n  width: 200px;\n']))),hn=E.a.span(w||(w=Object(I.a)(["\n  &:hover {\n    text-decoration: underline;\n  }\n  line-height: 1;\n  position: absolute;\n  bottom: 15px;\n  right: 0;\n"])));var fn=function(){var n=Object(y.useState)([]),t=Object(M.a)(n,2),e=t[0],i=t[1],a=Object(y.useState)(!1),c=Object(M.a)(a,2),o=c[0],r=c[1],s=Object(y.useState)(!1),d=Object(M.a)(s,2),l=d[0],p=d[1];return Object(y.useEffect)((function(){var n=new URLSearchParams(window.location.search),t=[],e=window.localStorage.getItem("predefinedLists");if(n.get("list")&&(t=n.get("list").split(","),n.get("name"))){var a={};a[n.get("name")]=t,window.localStorage.setItem("predefinedLists",JSON.stringify(Object(C.a)(Object(C.a)({},JSON.parse(e)),a)))}e&&Object.keys(JSON.parse(e)).length>0?p(!0):i(t)}),[]),Object(H.jsxs)(dn,{children:[Object(H.jsx)(ln,{children:Object(H.jsxs)(pn,{onClick:function(){return window.location.href=window.location.href.includes("localhost")?"http://localhost:3000/":"https://wing-cheung.github.io/mixNmatch/"},children:[Object(H.jsx)("img",{src:sn,width:"50",alt:"coffee machine logo"}),Object(H.jsx)(hn,{children:"mix & match"})]})}),l&&!o&&Object(H.jsx)(rn,{setNames:i}),o?Object(H.jsx)(tn,{names:e}):Object(H.jsx)(U,{removeName:function(n){i(e.filter((function(t){return t!==n})))},names:e,setShowMatch:r,addName:function(n){if(n)if(n.includes(",")){var t=n.split(",");i(Object(N.a)(e.concat(t)))}else i([].concat(Object(N.a)(e),[n]))}})]})},un=function(n){n&&n instanceof Function&&e.e(4).then(e.bind(null,29)).then((function(t){var e=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;e(n),i(n),a(n),c(n),o(n)}))};z.a.render(Object(H.jsx)(k.a.StrictMode,{children:Object(H.jsx)(fn,{})}),document.getElementById("root")),un()}},[[26,1,2]]]);
//# sourceMappingURL=main.a78d4470.chunk.js.map