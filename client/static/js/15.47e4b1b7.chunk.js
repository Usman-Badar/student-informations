(this["webpackJsonpstudent-info"]=this["webpackJsonpstudent-info"]||[]).push([[15],{103:function(t,e,n){"use strict";n.r(e);var r=n(35),a=n(0),i=n(58),o=n(1),u=Object(a.lazy)((function(){return n.e(10).then(n.bind(null,112))}));e.default=function(){var t=Object(a.useState)([]),e=Object(r.a)(t,2),n=e[0],s=e[1],c=Object(a.useState)("Please wait..."),l=Object(r.a)(c,2),f=l[0],d=l[1];Object(a.useEffect)((function(){b()}),[]);var b=function(){i.a.emit("students/list"),i.a.on("students/list",(function(t){null===t.err?(s(t.data),d("")):d(t.err.code)}))};return Object(o.jsx)(a.Suspense,{fallback:Object(o.jsx)("div",{children:"Loading..."}),children:Object(o.jsx)(u,{Students:n,Message:f,onSearch:function(t){var e=t.target.value;i.a.emit("students/list/search",{body:e}),i.a.on("students/list/search",(function(t){console.log(t)}))}})})}},35:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(42);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,a=!1,i=void 0;try{for(var o,u=t[Symbol.iterator]();!(r=(o=u.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(s){a=!0,i=s}finally{try{r||null==u.return||u.return()}finally{if(a)throw i}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=15.47e4b1b7.chunk.js.map