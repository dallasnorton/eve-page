(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1049)}])},1049:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return M}});var r=n(5893),a=n(9008),s=n(4051),o=n.n(s),l=n(7294);function i(){return(0,r.jsxs)("svg",{className:"ml-3 h-4 w-4 animate-spin text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,r.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,r.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}function c(){return(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("img",{src:"images/f5-logo.svg",alt:"",className:"mr-2 h-8 w-8"}),(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4v16m8-8H4"})}),(0,r.jsx)("img",{src:"images/GitHub-Mark-64px.png",alt:"",className:"ml-2 h-9 w-9"})]})}var u=n(5152),f=n(9704),d=n.n(f),p=JSON.parse('{"H":{"name":"dallas","private_key":"secret"}}');function h(e,t,n,r,a,s,o){try{var l=e[s](o),i=l.value}catch(c){return void n(c)}l.done?t(i):Promise.resolve(i).then(r,a)}function m(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var s=e.apply(t,n);function o(e){h(s,r,a,o,l,"next",e)}function l(e){h(s,r,a,o,l,"throw",e)}o(void 0)}))}}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){x(e,t,n[t])}))}return e}var b={eve:void 0},g=function(e){return{name:e.name,iat:Math.floor((new Date).getTime()/1e3),exp:Math.floor((new Date).getTime()/1e3)+3600}},w=function(){var e=m(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=g(t),e.next=3,null===d()||void 0===d()?void 0:d().sign(v({},n),null===t||void 0===t?void 0:t.private_key,{algorithm:"HS256"});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=m(o().mark((function e(t,n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),j=function(){var e=m(o().mark((function e(t,n){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b[t]){e.next=7;break}return e.next=3,y(n,t);case 3:return r=e.sent,e.abrupt("return",r);case 7:if(e.prev=7,!(d().verify(b[t],n.private_key,{algorithms:["RS256"]}).exp<Math.floor((new Date).getTime()/1e3))){e.next=15;break}return e.next=12,y(n,t);case 12:case 22:return e.abrupt("return",e.sent);case 15:return e.abrupt("return",authorizationTokens[t]);case 16:e.next=23;break;case 18:return e.prev=18,e.t0=e.catch(7),e.next=22,y(n,t);case 23:case"end":return e.stop()}}),e,null,[[7,18]])})));return function(t,n){return e.apply(this,arguments)}}();function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function N(e,t,n,r,a,s,o){try{var l=e[s](o),i=l.value}catch(c){return void n(c)}l.done?t(i):Promise.resolve(i).then(r,a)}function S(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var s=e.apply(t,n);function o(e){N(s,r,a,o,l,"next",e)}function l(e){N(s,r,a,o,l,"throw",e)}o(void 0)}))}}function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,s=[],o=!0,l=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(s.push(r.value),!t||s.length!==t);o=!0);}catch(i){l=!0,a=i}finally{try{o||null==n.return||n.return()}finally{if(l)throw a}}return s}}(e,t)||O(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e){return function(e){if(Array.isArray(e))return k(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||O(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){if(e){if("string"===typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(e,t):void 0}}var _=(0,u.default)((function(){return n.e(171).then(n.t.bind(n,5171,23))}),{loadableGenerated:{webpack:function(){return[5171]}},ssr:!1});function E(){var e=(0,l.useState)(!1),t=e[0],n=e[1],a=(0,l.useState)(),s=a[0],u=a[1],f=(0,l.useState)([]),d=f[0],h=f[1],m=(0,l.useState)([]),x=m[0],v=m[1],b=(0,l.useState)(""),g=b[0],w=b[1],y=(0,l.useState)(""),k=y[0],N=y[1];(0,l.useEffect)((function(){var e=function(){var e=S(o().mark((function e(){var t,n,r,a,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j("eve",p.H);case 3:return t=e.sent,"http://localhost:8080",e.next=7,fetch("".concat("http://localhost:8080","/api/v1/deployments"),{headers:{Authorization:"Bearer ".concat(t)}});case 7:return n=e.sent,e.next=10,n.json();case 10:(r=e.sent)&&(u(r),(a=A(r.routes)).shift(),s=a.map((function(e){var t=e.action.share.split("/")[3];return{ref:"/".concat(t,"/"),name:t}})),v(s)),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.warn(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,l.useEffect)((function(){var e=function(){var e=S(o().mark((function e(){var t,n,r,a,s,l,i,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(2!==(t=k.split(".com/")).length){e.next=11;break}return r=C(null===(n=t[1])||void 0===n?void 0:n.split("/"),2),a=r[0],s=r[1],e.next=6,fetch("https://api.github.com/repos/".concat(a,"/").concat(s,"/branches"));case 6:return l=e.sent,e.next=9,l.json();case 9:(i=e.sent).length?(c=i.map((function(e){return e.name})),h(c),w(c[0])):h([]);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();k&&e()}),[k]);var O=function(){var e=S(o().mark((function e(){var t,r,a,s,l,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(!0),e.next=4,fetch("/api/v1/pull",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({branch:g,dest:"/unitapps/app/".concat(g),repo:k})});case 4:return t=e.sent,e.next=7,t.json();case 7:return r=e.sent,console.log({data:r}),e.next=11,fetch("/api/v1/info");case 11:return a=e.sent,e.next=14,a.json();case 14:(s=e.sent)&&(u(s),(l=A(s.routes)).shift(),i=l.map((function(e){var t=e.action.share.split("/")[3];return{ref:"/".concat(t,"/"),name:t}})),v(i)),n(!1),e.next=23;break;case 19:e.prev=19,e.t0=e.catch(0),console.warn(e.t0),n(!1);case 23:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=S(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=A(x)).splice(t,1),v(n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,r.jsx)("div",{className:"mx-auto max-w-6xl",children:(0,r.jsx)("section",{className:"w-full text-black",children:(0,r.jsx)("div",{className:"my-8 p-4 text-black",children:(0,r.jsxs)("div",{className:"mx-auto flex max-w-7xl flex-col items-start bg-gradient-to-r from-blue-200 to-blue-100 px-5 py-8 lg:py-24",children:[(0,r.jsxs)("div",{className:"mb-4 flex w-full items-center justify-between lg:px-12",children:[(0,r.jsx)("h2",{className:"text-2xl font-bold leading-tight lg:text-4xl",children:"App Lab Console"}),(0,r.jsx)(c,{})]}),(0,r.jsxs)("div",{className:"flex w-full flex-col lg:flex-row",children:[(0,r.jsxs)("div",{className:"flex flex-col pl-0 lg:mb-0 lg:w-1/2 lg:flex-grow lg:items-start lg:pl-12 lg:pr-24 lg:text-left",children:[(0,r.jsxs)("div",{className:"mb-4 w-full",children:[(0,r.jsx)("label",{htmlFor:"Repository",className:"text-md block h-8 font-medium leading-8 text-gray-700",children:"Repository"}),(0,r.jsx)("input",{type:"text",name:"Repository",id:"Repository",onChange:function(e){return N(e.target.value)},className:" block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 "})]}),(0,r.jsx)("div",{className:"mb-4 flex w-full",children:(0,r.jsxs)("div",{className:"flex-1",children:[(0,r.jsx)("label",{htmlFor:"branch",className:"text-md block font-medium leading-8 text-gray-700",children:"Branch"}),(0,r.jsx)("select",{className:"form-select w-1/2 rounded-md border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed",onChange:function(e){return w(e.target.value)},disabled:0===d.length,children:d.map((function(e,t){return(0,r.jsx)("option",{children:e},t)}))}),(0,r.jsxs)("button",{className:"ml-4 inline-flex h-10 items-center rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300",onClick:O,disabled:0===g.length||0===k.length,children:["Deploy",t&&(0,r.jsx)(i,{})]})]})}),x.length>0&&(0,r.jsxs)("div",{className:"flex w-full flex-col",children:[(0,r.jsx)("p",{className:"text-md block font-medium leading-8 text-gray-700",children:"Active Apps"}),(0,r.jsx)("div",{className:"flex flex-col items-start",children:x.map((function(e,t){return(0,r.jsxs)("div",{className:"mt-2 flex h-6 w-full items-center justify-between md:w-1/2",children:[(0,r.jsxs)("a",{href:e.ref,target:"_blank",rel:"noopener noreferrer",className:" flex items-center justify-center truncate text-lg font-bold text-blue-700 underline hover:text-blue-500 ",children:[(0,r.jsx)("div",{className:"w-full truncate",children:e.name}),(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"ml-1 h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor",children:[(0,r.jsx)("path",{d:"M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"}),(0,r.jsx)("path",{d:"M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"})]})]}),(0,r.jsx)("button",{className:"ml-4 cursor-pointer text-blue-700 hover:text-blue-500",onClick:function(){return E(t)},children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})})]},t)}))})]})]}),(0,r.jsxs)("div",{className:"w-4/7 mt-8 lg:mt-0 lg:w-2/5 lg:pr-12",children:[(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("img",{src:"nginx/logo.png",alt:"",className:"h-8 w-8"}),(0,r.jsx)("p",{className:"text-md block font-medium text-gray-700",children:"NGINX Unit Configuration"})]}),(0,r.jsx)(_,{src:s,enableClipboard:!1,displayObjectSize:!1,displayDataTypes:!1,collapsed:!0,style:{background:"white",borderRadius:"6px",border:"1px solid rgb(209, 213, 219)",padding:12,minHeight:130}})]})]})]})})})})}function M(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.default,{children:[(0,r.jsx)("title",{children:"Eve Admin"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(E,{})]})}}},function(e){e.O(0,[714,216,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);