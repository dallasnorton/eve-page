(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7046)}])},7046:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var r=n(5893),s=n(9008),a=n(5666),l=n.n(a),c=n(7294);function i(){return(0,r.jsxs)("svg",{className:"ml-3 h-4 w-4 animate-spin text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,r.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,r.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}function o(){return(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("img",{src:"images/f5-logo.svg",alt:"",className:"mr-2 h-8 w-8"}),(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4v16m8-8H4"})}),(0,r.jsx)("img",{src:"images/GitHub-Mark-64px.png",alt:"",className:"ml-2 h-9 w-9"})]})}function u(e,t,n,r,s,a,l){try{var c=e[a](l),i=c.value}catch(o){return void n(o)}c.done?t(i):Promise.resolve(i).then(r,s)}function d(e){return function(){var t=this,n=arguments;return new Promise((function(r,s){var a=e.apply(t,n);function l(e){u(a,r,s,l,c,"next",e)}function c(e){u(a,r,s,l,c,"throw",e)}l(void 0)}))}}function f(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var x=(0,n(5152).default)((function(){return n.e(171).then(n.t.bind(n,5171,23))}),{loadableGenerated:{webpack:function(){return[5171]},modules:["../components/Layout.js -> react-json-view"]},ssr:!1});function m(){var e=(0,c.useState)(!1),t=e[0],n=e[1],s=(0,c.useState)(),a=s[0],u=s[1],m=(0,c.useState)([]),h=m[0],p=m[1],g=(0,c.useState)([]),v=g[0],b=g[1],w=(0,c.useState)(""),j=w[0],N=w[1],y=(0,c.useState)(""),k=y[0],C=y[1];(0,c.useEffect)((function(){d(l().mark((function e(){var t,n,r,s;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/eve/api/v1/info");case 2:return t=e.sent,e.next=5,t.json();case 5:(n=e.sent)&&(u(n),(r=f(n.routes)).shift(),s=r.map((function(e){var t=e.action.share.split("/")[3];return{ref:"/".concat(t,"/"),name:t}})),b(s));case 7:case"end":return e.stop()}}),e)})))()}),[]),(0,c.useEffect)((function(){var e=d(l().mark((function e(){var t,n,r,s,a,c,i;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(2!==(t=k.split(".com/")).length){e.next=11;break}var l;return l=null===(n=t[1])||void 0===n?void 0:n.split("/"),r=l[0],s=l[1],e.next=6,fetch("https://api.github.com/repos/".concat(r,"/").concat(s,"/branches"));case 6:return a=e.sent,e.next=9,a.json();case 9:(c=e.sent).length?(i=c.map((function(e){return e.name})),p(i),N(i[0])):p([]);case 11:case"end":return e.stop()}}),e)})));k&&e()}),[k]);var _=d(l().mark((function e(){var t,r,s,a,c,i;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(!0),e.next=4,fetch("/eve/api/v1/pull",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({branch:j,dest:"/unitapps/app/".concat(j),repo:k})});case 4:return t=e.sent,e.next=7,t.json();case 7:return r=e.sent,console.log({data:r}),e.next=11,fetch("/eve/api/v1/info");case 11:return s=e.sent,e.next=14,s.json();case 14:(a=e.sent)&&(u(a),(c=f(a.routes)).shift(),i=c.map((function(e){var t=e.action.share.split("/")[3];return{ref:"/".concat(t,"/"),name:t}})),b(i)),n(!1),e.next=23;break;case 19:e.prev=19,e.t0=e.catch(0),console.warn(e.t0),n(!1);case 23:case"end":return e.stop()}}),e,null,[[0,19]])})));return(0,r.jsx)("div",{className:"max-w-8xl mx-auto",children:(0,r.jsx)("section",{className:"w-full text-black",children:(0,r.jsx)("div",{className:"my-8 p-4 text-black",children:(0,r.jsxs)("div",{className:"max-w-9xl mx-auto flex flex-col items-start bg-gradient-to-r from-blue-200 to-blue-100 px-5 py-8 lg:py-24",children:[(0,r.jsxs)("div",{className:"mb-4 flex w-full items-center justify-between lg:px-12",children:[(0,r.jsx)("h2",{className:"text-2xl font-bold leading-tight lg:text-4xl",children:"App Lab Console"}),(0,r.jsx)(o,{})]}),(0,r.jsxs)("div",{className:"flex w-full flex-col lg:flex-row",children:[(0,r.jsxs)("div",{className:"flex flex-col pl-0 lg:mb-0 lg:w-1/2 lg:flex-grow lg:items-start lg:pl-12 lg:pr-24 lg:text-left",children:[(0,r.jsxs)("div",{className:"mb-4 w-full",children:[(0,r.jsx)("label",{htmlFor:"Repository",className:"text-md block h-8 font-medium leading-8 text-gray-700",children:"Repository"}),(0,r.jsx)("input",{type:"text",name:"Repository",id:"Repository",onChange:function(e){return C(e.target.value)},className:" block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 "})]}),(0,r.jsx)("div",{className:"mb-4 flex w-full",children:(0,r.jsxs)("div",{className:"flex-1",children:[(0,r.jsx)("label",{htmlFor:"branch",className:"text-md block font-medium leading-8 text-gray-700",children:"Branch"}),(0,r.jsx)("select",{className:"form-select w-1/2 rounded-md border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed",onChange:function(e){return N(e.target.value)},disabled:0===h.length,children:h.map((function(e,t){return(0,r.jsx)("option",{children:e},t)}))}),(0,r.jsxs)("button",{className:"ml-4 inline-flex h-10 items-center rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300",onClick:_,disabled:0===j.length||0===k.length,children:["Deploy",t&&(0,r.jsx)(i,{})]})]})}),v.length>0&&(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("p",{className:"text-md block font-medium leading-8 text-gray-700",children:"Active Apps"}),(0,r.jsx)("div",{className:"flex flex-col items-start",children:v.map((function(e,t){return(0,r.jsx)("div",{className:"mt-2 flex h-6 items-center",children:(0,r.jsxs)("a",{href:e.ref,target:"_blank",rel:"noopener noreferrer",className:" flex items-center justify-center text-lg font-bold text-blue-700 underline hover:text-blue-500 ",children:[e.name,(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"ml-1 h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor",children:[(0,r.jsx)("path",{d:"M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"}),(0,r.jsx)("path",{d:"M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"})]})]})},t)}))})]})]}),(0,r.jsxs)("div",{className:"w-4/7 mt-8 lg:mt-0 lg:w-2/5 lg:pr-12",children:[(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("img",{src:"nginx/logo.png",alt:"",className:"h-8 w-8"}),(0,r.jsx)("p",{className:"text-md block font-medium text-gray-700",children:"NGINX Unit Configuration"})]}),(0,r.jsx)(x,{src:a,enableClipboard:!1,displayObjectSize:!1,displayDataTypes:!1,collapsed:!0,style:{background:"white",borderRadius:"6px",border:"1px solid rgb(209, 213, 219)",padding:12,minHeight:130}})]})]})]})})})})}function h(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.default,{children:[(0,r.jsx)("title",{children:"Eve Admin"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(m,{})]})}}},function(e){e.O(0,[774,161,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);