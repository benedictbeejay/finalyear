(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[455],{10705:function(n,e,o){"use strict";var t,r,i,s=o(30168),c=(o(72791),o(59135)),l=o(16444),a=o(80184),d=l.ZP.footer(t||(t=(0,s.Z)(["\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #0b3861;\n  padding: 2px;\n  font-size: 35px;\n  color: #ffffff;\n\n  @media only screen and (max-width: 768px) {\n    font-size: 25px;\n    flex-direction: column;\n    justify-content: center;\n  }\n"]))),f=l.ZP.div(r||(r=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  margin: 0 auto;\n\n  @media only screen and (max-width: 768px) {\n    margin-top: 10px;\n  }\n"]))),u=l.ZP.a(i||(i=(0,s.Z)(["\n  color: #ffffff;\n  margin-right: 20px;\n\n  &:hover {\n    color: #cccccc;\n  }\n\n  @media only screen and (max-width: 768px) {\n    margin-right: 15px;\n    font-size: 35px;\n  }\n"])));e.Z=function(){return(0,a.jsx)(d,{children:(0,a.jsxs)(f,{children:[(0,a.jsx)(u,{href:"/Home",children:(0,a.jsx)(c.xng,{})}),(0,a.jsx)(u,{href:"/community",children:(0,a.jsx)(c.I$,{})}),(0,a.jsx)(u,{href:"/MarkerMap",children:(0,a.jsx)(c.X2f,{})}),(0,a.jsx)(u,{href:"/Donation",children:(0,a.jsx)(c.s0p,{})}),(0,a.jsx)(u,{href:"/emer",children:(0,a.jsx)(c.I7T,{})}),(0,a.jsx)(u,{href:"/weath",children:(0,a.jsx)(c.H_w,{})}),(0,a.jsx)(u,{href:"/Notify",children:(0,a.jsx)(c.Jd7,{})})]})})}},95111:function(n,e,o){"use strict";o.r(e),o.d(e,{default:function(){return p}});var t=o(74165),r=o(15861),i=o(29439),s=o(72791),c=(o(54148),o(23983)),l=o(30097),a=o.n(l),d={thumb:[0,1,2,3,4],indexFinger:[0,5,6,7,8],middleFinger:[0,9,10,11,12],ringFinger:[0,13,14,15,16],pinky:[0,17,18,19,20]},f={0:{color:"yellow",size:15},1:{color:"gold",size:6},2:{color:"green",size:10},3:{color:"gold",size:6},4:{color:"gold",size:6},5:{color:"purple",size:10},6:{color:"gold",size:6},7:{color:"gold",size:6},8:{color:"gold",size:6},9:{color:"blue",size:10},10:{color:"gold",size:6},11:{color:"gold",size:6},12:{color:"gold",size:6},13:{color:"red",size:10},14:{color:"gold",size:6},15:{color:"gold",size:6},16:{color:"gold",size:6},17:{color:"orange",size:10},18:{color:"gold",size:6},19:{color:"gold",size:6},20:{color:"gold",size:6}},u=function(n,e){n.length>0&&n.forEach((function(n){for(var o=n.landmarks,t=0;t<Object.keys(d).length;t++)for(var r=Object.keys(d)[t],i=0;i<d[r].length-1;i++){var s=d[r][i],c=d[r][i+1];e.beginPath(),e.moveTo(o[s][0],o[s][1]),e.lineTo(o[c][0],o[c][1]),e.strokeStyle="plum",e.lineWidth=4,e.stroke()}for(var l=0;l<o.length;l++){var a=o[l][0],u=o[l][1];e.beginPath(),e.arc(a,u,f[l].size,0,3*Math.PI),e.fillStyle=f[l].color,e.fill()}}))},h=o(98773),x=o(10705),g=o(80184);var p=function(){var n=(0,s.useState)("user"),e=(0,i.Z)(n,2),o=e[0],l=e[1],d=(0,s.useRef)(null),f=(0,s.useRef)(null),p=function(){var n=(0,r.Z)((0,t.Z)().mark((function n(){var e;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.z();case 2:e=n.sent,console.log("Handpose model loaded."),setInterval((function(){m(e)}),100);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),m=function(){var n=(0,r.Z)((0,t.Z)().mark((function n(e){var o,r,i,s,c;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("undefined"===typeof d.current||null===d.current||4!==d.current.video.readyState){n.next=14;break}return o=d.current.video,r=d.current.video.videoWidth,i=d.current.video.videoHeight,d.current.video.width=r,d.current.video.height=i,f.current.width=r,f.current.height=i,n.next=10,e.estimateHands(o);case 10:s=n.sent,console.log(s),c=f.current.getContext("2d"),u(s,c);case 14:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,s.useEffect)((function(){p()}),[]),(0,g.jsxs)("div",{className:"App",children:[(0,g.jsx)(h.Z,{}),(0,g.jsx)("h1",{style:{color:"#1a2a6c"},children:"Hands-free detection for hands in need"}),(0,g.jsxs)("div",{className:"video-container",children:[(0,g.jsx)(a(),{audio:!1,ref:d,style:{position:"absolute",left:0,right:0,textAlign:"center",zindex:9,width:"100%",height:"auto",maxWidth:"640px",maxHeight:"480px"},videoConstraints:{facingMode:o}}),(0,g.jsx)("canvas",{ref:f,style:{position:"absolute",left:0,right:0,textAlign:"center",zindex:9,width:"100%",height:"auto",maxWidth:"640px",maxHeight:"480px"}}),(0,g.jsx)("button",{onClick:function(){l((function(n){return"user"===n?"environment":"user"}))},style:{position:"absolute",bottom:100,left:"50%",transform:"translateX(-50%)",zIndex:10},children:"Flip Camera"})]}),(0,g.jsx)(x.Z,{})]})}},98773:function(n,e,o){"use strict";var t,r=o(30168),i=(o(72791),o(16444)),s=o(57689),c=o(59135),l=o(80184);e.Z=function(){var n=i.ZP.nav(t||(t=(0,r.Z)(["\n    width: 100%;\n    height: 55px;\n    background-color: #0b3861;\n    color: #ffffff;\n    padding: 0 20px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    .logo {\n      font-weight: bold;\n      font-size: 1.2rem;\n      padding: 10px;\n    }\n\n    .user-info {\n      display: flex;\n      align-items: center;\n    }\n\n    .user-icon {\n      font-size: 1.5rem;\n      cursor: pointer;\n      color: white;\n      margin-right: 10px;\n    }\n\n    .user-greeting {\n      font-size: 1.2rem;\n      font-weight: bold;\n      color: white;\n      text-transform: capitalize;\n    }\n\n    .logout-icon {\n      font-size: 1.5rem;\n      cursor: pointer;\n      color: white;\n      margin-left: 10px;\n    }\n  "]))),e=(0,s.s0)();return(0,l.jsxs)(n,{children:[(0,l.jsxs)("span",{className:"user-greeting",children:["Hi, ",localStorage.getItem("name")]}),(0,l.jsx)("div",{className:"user-info",children:(0,l.jsx)("span",{className:"logout-icon",onClick:function(){localStorage.clear(),e("/")},children:(0,l.jsx)(c.fHX,{})})})]})}},75410:function(){},48628:function(){},31601:function(){},67792:function(){},34977:function(){},75042:function(){}}]);
//# sourceMappingURL=455.8dfb6272.chunk.js.map