/*! For license information please see 706.5e2f59ef.chunk.js.LICENSE.txt */
(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[706],{62126:function(e,n,t){"use strict";t.d(n,{A:function(){return i},I:function(){return s}});var a=t(44702),r=t(17459),o=(0,a.ZF)({apiKey:"AIzaSyDH65ifTLEF3gS8XSLzeS0O3pVvqz44SuM",authDomain:"gdsc-ef90b.firebaseapp.com",projectId:"gdsc-ef90b",storageBucket:"gdsc-ef90b.appspot.com",messagingSenderId:"712125334137",appId:"1:712125334137:web:cb910e12a1d15028614aa8",measurementId:"G-KYGXPJSL9B"}),s=(0,r.v0)(o),i=new r.hJ},57819:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Z}});var a,r,o,s,i,c=t(30168),l=t(29439),u=t(72791),f=t(57689),d=t(16157),p=t(47022),m=t(89743),v=t(2677),b=t(62126),g=t(17459),x=t.p+"static/media/logo1.e021253981f376f96984.jpg",h=t(16444),y=t(80184),Z=function(){var e=(0,u.useState)(""),n=(0,l.Z)(e,2),t=(n[0],n[1]),Z=(0,f.s0)();(0,u.useEffect)((function(){t(localStorage.getItem("email"))}),[]);var N=h.ZP.img(a||(a=(0,c.Z)(["\n    margin-bottom: 4rem;\n    animation: "," 5s ease-in-out infinite;\n  "])),(0,h.F4)(r||(r=(0,c.Z)(["\n      0% {\n        transform: translateY(0);\n      }\n      50% {\n        transform: translateY(-1rem);\n      }\n      100% {\n        transform: translateY(0);\n      }\n    "])))),j=h.ZP.h1(o||(o=(0,c.Z)(["\n    color: white;\n    margin-bottom: 2rem;\n  "]))),P=h.ZP.p(s||(s=(0,c.Z)(["\n    color: white;\n    margin-bottom: 5rem;\n  "]))),w=(0,h.ZP)(d.Z)(i||(i=(0,c.Z)(["\n    background-color: #1E90FF;\n    border-color: #1E90FF;\n    &:hover, &:focus, &:active {\n      background-color: #104E8B;\n      border-color: #104E8B;\n    }\n  "])));return(0,y.jsx)(p.Z,{fluid:!0,className:"bg-dark-blue",children:(0,y.jsx)(m.Z,{className:"justify-content-center align-items-center min-vh-100",children:(0,y.jsxs)(v.Z,{md:8,lg:6,xl:4,className:"py-5 text-center",children:[(0,y.jsx)(N,{src:x,alt:"Resilient-response"}),(0,y.jsx)(j,{className:"display-4 fw-bold",children:"Resilient-response"}),(0,y.jsx)(P,{className:"lead",children:"Welcome to the Resilient-response app, where you can stay connected and informed during times of crisis."}),(0,y.jsx)(w,{variant:"primary",className:"mx-auto btn-grey",onClick:function(){(0,g.rh)(b.I,b.A).then((function(e){t(e.user.email),localStorage.setItem("email",e.user.email),localStorage.setItem("name",e.user.displayName),console.log(e),Z("/Home")})).catch((function(e){console.log(e)}))},children:"SignIn with Google"})]})})})}},81694:function(e,n){var t;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var o=typeof t;if("string"===o||"number"===o)e.push(t);else if(Array.isArray(t)){if(t.length){var s=r.apply(null,t);s&&e.push(s)}}else if("object"===o){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var i in t)a.call(t,i)&&t[i]&&e.push(i)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(t=function(){return r}.apply(n,[]))||(e.exports=t)}()},16157:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var a=t(1413),r=t(29439),o=t(44925),s=t(81694),i=t.n(s),c=t(72791),l=t(80184),u=["as","disabled"];function f(e){var n=e.tagName,t=e.disabled,a=e.href,r=e.target,o=e.rel,s=e.role,i=e.onClick,c=e.tabIndex,l=void 0===c?0:c,u=e.type;n||(n=null!=a||null!=r||null!=o?"a":"button");var f={tagName:n};if("button"===n)return[{type:u||"button",disabled:t},f];var d=function(e){(t||"a"===n&&function(e){return!e||"#"===e.trim()}(a))&&e.preventDefault(),t?e.stopPropagation():null==i||i(e)};return"a"===n&&(a||(a="#"),t&&(a=void 0)),[{role:null!=s?s:"button",disabled:void 0,tabIndex:t?void 0:l,href:a,target:"a"===n?r:void 0,"aria-disabled":t||void 0,rel:"a"===n?o:void 0,onClick:d,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),d(e))}},f]}var d=c.forwardRef((function(e,n){var t=e.as,a=e.disabled,o=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,u),s=f(Object.assign({tagName:t,disabled:a},o)),i=(0,r.Z)(s,2),c=i[0],d=i[1].tagName;return(0,l.jsx)(d,Object.assign({},o,c,{ref:n}))}));d.displayName="Button";var p=t(10162),m=["as","bsPrefix","variant","size","active","className"],v=c.forwardRef((function(e,n){var t=e.as,s=e.bsPrefix,c=e.variant,u=e.size,d=e.active,v=e.className,b=(0,o.Z)(e,m),g=(0,p.vE)(s,"btn"),x=f((0,a.Z)({tagName:t},b)),h=(0,r.Z)(x,2),y=h[0],Z=h[1].tagName;return(0,l.jsx)(Z,(0,a.Z)((0,a.Z)((0,a.Z)({},y),b),{},{ref:n,className:i()(v,g,d&&"active",c&&"".concat(g,"-").concat(c),u&&"".concat(g,"-").concat(u),b.href&&b.disabled&&"disabled")}))}));v.displayName="Button",v.defaultProps={variant:"primary",active:!1,disabled:!1};var b=v},2677:function(e,n,t){"use strict";var a=t(29439),r=t(1413),o=t(44925),s=t(81694),i=t.n(s),c=t(72791),l=t(10162),u=t(80184),f=["as","bsPrefix","className"],d=["className"];var p=c.forwardRef((function(e,n){var t=function(e){var n=e.as,t=e.bsPrefix,a=e.className,s=(0,o.Z)(e,f);t=(0,l.vE)(t,"col");var c=(0,l.pi)(),u=(0,l.zG)(),d=[],p=[];return c.forEach((function(e){var n,a,r,o=s[e];delete s[e],"object"===typeof o&&null!=o?(n=o.span,a=o.offset,r=o.order):n=o;var i=e!==u?"-".concat(e):"";n&&d.push(!0===n?"".concat(t).concat(i):"".concat(t).concat(i,"-").concat(n)),null!=r&&p.push("order".concat(i,"-").concat(r)),null!=a&&p.push("offset".concat(i,"-").concat(a))})),[(0,r.Z)((0,r.Z)({},s),{},{className:i().apply(void 0,[a].concat(d,p))}),{as:n,bsPrefix:t,spans:d}]}(e),s=(0,a.Z)(t,2),c=s[0],p=c.className,m=(0,o.Z)(c,d),v=s[1],b=v.as,g=void 0===b?"div":b,x=v.bsPrefix,h=v.spans;return(0,u.jsx)(g,(0,r.Z)((0,r.Z)({},m),{},{ref:n,className:i()(p,!h.length&&x)}))}));p.displayName="Col",n.Z=p},47022:function(e,n,t){"use strict";var a=t(1413),r=t(44925),o=t(81694),s=t.n(o),i=t(72791),c=t(10162),l=t(80184),u=["bsPrefix","fluid","as","className"],f=i.forwardRef((function(e,n){var t=e.bsPrefix,o=e.fluid,i=e.as,f=void 0===i?"div":i,d=e.className,p=(0,r.Z)(e,u),m=(0,c.vE)(t,"container"),v="string"===typeof o?"-".concat(o):"-fluid";return(0,l.jsx)(f,(0,a.Z)((0,a.Z)({ref:n},p),{},{className:s()(d,o?"".concat(m).concat(v):m)}))}));f.displayName="Container",f.defaultProps={fluid:!1},n.Z=f},89743:function(e,n,t){"use strict";var a=t(1413),r=t(44925),o=t(81694),s=t.n(o),i=t(72791),c=t(10162),l=t(80184),u=["bsPrefix","className","as"],f=i.forwardRef((function(e,n){var t=e.bsPrefix,o=e.className,i=e.as,f=void 0===i?"div":i,d=(0,r.Z)(e,u),p=(0,c.vE)(t,"row"),m=(0,c.pi)(),v=(0,c.zG)(),b="".concat(p,"-cols"),g=[];return m.forEach((function(e){var n,t=d[e];delete d[e],n=null!=t&&"object"===typeof t?t.cols:t;var a=e!==v?"-".concat(e):"";null!=n&&g.push("".concat(b).concat(a,"-").concat(n))})),(0,l.jsx)(f,(0,a.Z)((0,a.Z)({ref:n},d),{},{className:s().apply(void 0,[o,p].concat(g))}))}));f.displayName="Row",n.Z=f},10162:function(e,n,t){"use strict";t.d(n,{pi:function(){return c},vE:function(){return i},zG:function(){return l}});var a=t(72791),r=(t(80184),["xxl","xl","lg","md","sm","xs"]),o="xs",s=a.createContext({prefixes:{},breakpoints:r,minBreakpoint:o});s.Consumer,s.Provider;function i(e,n){var t=(0,a.useContext)(s).prefixes;return e||t[n]||n}function c(){return(0,a.useContext)(s).breakpoints}function l(){return(0,a.useContext)(s).minBreakpoint}},44925:function(e,n,t){"use strict";function a(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}t.d(n,{Z:function(){return a}})}}]);
//# sourceMappingURL=706.5e2f59ef.chunk.js.map