(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[14],{109:function(e,t,a){"use strict";var n,r=a(1),c=a(3),i=a(5),o=a.n(i),s=a(45),l=a(0),u=a.n(l),b=a(19),d=a(47),f=((n={})[b.b]="show",n[b.a]="show",n),j=u.a.forwardRef((function(e,t){var a=e.className,n=e.children,i=Object(c.a)(e,["className","children"]),j=Object(l.useCallback)((function(e){Object(d.a)(e),i.onEnter&&i.onEnter(e)}),[i]);return u.a.createElement(b.e,Object(r.a)({ref:t,addEndListener:s.a},i,{onEnter:j}),(function(e,t){return u.a.cloneElement(n,Object(r.a)({},t,{className:o()("fade",a,n.props.className,f[e])}))}))}));j.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},j.displayName="Fade",t.a=j},110:function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}a.d(t,"a",(function(){return n}))},116:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}a.d(t,"a",(function(){return n}))},118:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext({controlId:void 0});t.a=r},143:function(e,t,a){"use strict";var n=a(1),r=a(3),c=a(5),i=a.n(c),o=(a(61),a(0)),s=a.n(o),l=(a(60),a(151)),u=a(118),b=a(6),d=s.a.forwardRef((function(e,t){var a,c,l=e.bsPrefix,d=e.bsCustomPrefix,f=e.type,j=e.size,m=e.htmlSize,O=e.id,p=e.className,h=e.isValid,v=void 0!==h&&h,y=e.isInvalid,x=void 0!==y&&y,g=e.plaintext,w=e.readOnly,N=e.custom,C=e.as,k=void 0===C?"input":C,S=Object(r.a)(e,["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),E=Object(o.useContext)(u.a).controlId,P=N?[d,"custom"]:[l,"form-control"],A=P[0],I=P[1];if(l=Object(b.a)(A,I),g)(c={})[l+"-plaintext"]=!0,a=c;else if("file"===f){var D;(D={})[l+"-file"]=!0,a=D}else if("range"===f){var R;(R={})[l+"-range"]=!0,a=R}else if("select"===k&&N){var B;(B={})[l+"-select"]=!0,B[l+"-select-"+j]=j,a=B}else{var U;(U={})[l]=!0,U[l+"-"+j]=j,a=U}return s.a.createElement(k,Object(n.a)({},S,{type:f,size:m,ref:t,readOnly:w,id:O||E,className:i()(p,a,v&&"is-valid",x&&"is-invalid")}))}));d.displayName="FormControl",t.a=Object.assign(d,{Feedback:l.a})},151:function(e,t,a){"use strict";var n=a(1),r=a(3),c=a(5),i=a.n(c),o=a(0),s=a.n(o),l=a(4),u=a.n(l),b={type:u.a.string,tooltip:u.a.bool,as:u.a.elementType},d=s.a.forwardRef((function(e,t){var a=e.as,c=void 0===a?"div":a,o=e.className,l=e.type,u=void 0===l?"valid":l,b=e.tooltip,d=void 0!==b&&b,f=Object(r.a)(e,["as","className","type","tooltip"]);return s.a.createElement(c,Object(n.a)({},f,{ref:t,className:i()(o,u+"-"+(d?"tooltip":"feedback"))}))}));d.displayName="Feedback",d.propTypes=b,t.a=d},155:function(e,t,a){"use strict";var n=a(1),r=a(3),c=a(4),i=a.n(c),o=a(0),s=a.n(o),l=a(5),u=a.n(l),b={label:i.a.string.isRequired,onClick:i.a.func},d=s.a.forwardRef((function(e,t){var a=e.label,c=e.onClick,i=e.className,o=Object(r.a)(e,["label","onClick","className"]);return s.a.createElement("button",Object(n.a)({ref:t,type:"button",className:u()("close",i),onClick:c},o),s.a.createElement("span",{"aria-hidden":"true"},"\xd7"),s.a.createElement("span",{className:"sr-only"},a))}));d.displayName="CloseButton",d.propTypes=b,d.defaultProps={label:"Close"},t.a=d},216:function(e,t,a){"use strict";var n=a(1),r=a(3),c=a(5),i=a.n(c),o=a(0),s=a.n(o),l=a(24),u=a(25),b=a(6),d=a(109),f=a(155),j=a(33),m=a(12),O=a(43),p=Object(j.a)("h4");p.displayName="DivStyledAsH4";var h=Object(m.a)("alert-heading",{Component:p}),v=Object(m.a)("alert-link",{Component:O.a}),y={show:!0,transition:d.a,closeLabel:"Close alert"},x=s.a.forwardRef((function(e,t){var a=Object(l.a)(e,{show:"onClose"}),c=a.bsPrefix,o=a.show,j=a.closeLabel,m=a.className,O=a.children,p=a.variant,h=a.onClose,v=a.dismissible,y=a.transition,x=Object(r.a)(a,["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"]),g=Object(b.a)(c,"alert"),w=Object(u.a)((function(e){h&&h(!1,e)})),N=!0===y?d.a:y,C=s.a.createElement("div",Object(n.a)({role:"alert"},N?void 0:x,{ref:t,className:i()(m,g,p&&g+"-"+p,v&&g+"-dismissible")}),v&&s.a.createElement(f.a,{onClick:w,label:j}),O);return N?s.a.createElement(N,Object(n.a)({unmountOnExit:!0},x,{ref:void 0,in:o}),C):o?C:null}));x.displayName="Alert",x.defaultProps=y,x.Link=v,x.Heading=h,t.a=x},225:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return y}));var n=a(144),r=a.n(n),c=a(176),i=a(2),o=a(80),s=a(0),l=a(56),u=a(31),b=a(41),d=a(30),f=a(92),j=a(230),m=a(216),O=a(18),p=a(96),h=a(90),v=a(125);function y(){var e=Object(s.useState)(),t=Object(o.a)(e,2)[1],a=Object(s.useCallback)((function(){return t({})}),[]);return O.a.pageview("/setting"),Object(i.jsx)(l.a,{children:Object(i.jsxs)(u.a,{bg:"darkcontent",text:"lightfont",className:"mt-2",children:[Object(i.jsx)(u.a.Header,{children:"Database management"}),Object(i.jsxs)(u.a.Body,{children:[Object(i.jsx)(g,{forceUpdate:a}),Object(i.jsx)(N,{forceUpdate:a})]})]})})}function x(){navigator.clipboard.writeText(JSON.stringify(Object(v.c)())),alert("Copied database to clipboard.")}function g(e){var t=e.forceUpdate,a=h.a.getIdList().length,n=p.a.getIdList().length,r=Boolean(a||n);return Object(i.jsxs)(u.a,{bg:"lightcontent",text:"lightfont",className:"mb-3",children:[Object(i.jsx)(u.a.Header,{children:"Database Download"}),Object(i.jsxs)(u.a.Body,{children:[Object(i.jsxs)(b.a,{className:"mb-2",children:[Object(i.jsx)(d.a,{xs:12,md:6,children:Object(i.jsxs)("h6",{children:["Number of Characters: ",Object(i.jsx)("b",{children:a})]})}),Object(i.jsx)(d.a,{xs:12,md:6,children:Object(i.jsxs)("h6",{children:["Number of artifacts: ",Object(i.jsx)("b",{children:n})]})})]}),Object(i.jsx)("small",{children:'Notes: any data within the "Tools" page, e.g. Resin amount/timer, are not part of the downloaded database.'})]}),Object(i.jsx)(u.a.Footer,{children:Object(i.jsxs)(b.a,{children:[Object(i.jsx)(d.a,{xs:"auto",children:Object(i.jsx)(f.a,{disabled:!r,onClick:function(){return function(e){var t,a,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"data.json",r="application/json;charset=utf-8";if(null===(t=window)||void 0===t||null===(a=t.navigator)||void 0===a?void 0:a.msSaveOrOpenBlob){var c=new Blob([decodeURIComponent(encodeURI(e))],{type:r});navigator.msSaveOrOpenBlob(c,n)}else{var i=document.createElement("a");i.download=n,i.href="data:".concat(r,",").concat(encodeURIComponent(e)),i.target="_blank",document.body.appendChild(i),i.click(),document.body.removeChild(i)}}(JSON.stringify(Object(v.c)()))},children:"Download"})}),Object(i.jsx)(d.a,{children:Object(i.jsx)(f.a,{disabled:!r,variant:"info",onClick:x,children:"Copy to clipboard"})}),Object(i.jsx)(d.a,{xs:"auto",children:Object(i.jsx)(f.a,{disabled:!r,variant:"danger",onClick:function(){window.confirm("Are you sure you want to delete your database? All existing characters and artifacts will be deleted.")&&Object(v.b)(),t()},children:"Delete database"})})]})})]})}function w(){return(w=Object(c.a)(r.a.mark((function e(t,a){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:(n=new FileReader).onload=function(){a(n.result)},n.readAsText(t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e){var t,a,n,r=e.forceUpdate,c=Object(s.useState)(""),l=Object(o.a)(c,2),O=l[0],p=l[1],h=Object(s.useState)(""),y=Object(o.a)(h,2),x=y[0],g=y[1],N="";if(O)try{var C=n=JSON.parse(O),k=C.characterDatabase,S=C.artifactDatabase;t=Object.keys(k).length,a=Object.keys(S).length}catch(P){N="Invalid JSON: ".concat(P)}var E=Boolean(t||a);return Object(i.jsxs)(u.a,{bg:"lightcontent",text:"lightfont",children:[Object(i.jsx)(u.a.Header,{children:"Database Upload"}),Object(i.jsxs)(u.a.Body,{children:[Object(i.jsxs)(b.a,{className:"mb-2",children:[Object(i.jsx)(j.a.File,{className:"mb-2",label:x||"Upload your JSON file here",onChange:function(e){var t=e.target.files[0];e.target.value=null,t&&g(t.name),function(e,t){w.apply(this,arguments)}(t,p)},custom:!0,accept:".json"}),Object(i.jsx)("h6",{children:"...or Paste your data below..."}),Object(i.jsx)("textarea",{className:"w-100 text-monospace",value:O,onChange:function(e){return p(e.target.value)},style:{minHeight:"10em"}})]}),E&&Object(i.jsxs)(b.a,{children:[Object(i.jsx)(d.a,{xs:12,md:6,children:Object(i.jsxs)("h6",{children:["Number of Characters: ",Object(i.jsx)("b",{children:t})]})}),Object(i.jsx)(d.a,{xs:12,md:6,children:Object(i.jsxs)("h6",{children:["Number of artifacts: ",Object(i.jsx)("b",{children:a})]})})]}),Boolean(O&&(N||!E))&&Object(i.jsx)(m.a,{variant:"danger",children:N||"Unable to parse character & artifact data from file."})]}),Object(i.jsx)(u.a.Footer,{children:Object(i.jsx)(f.a,{variant:E?"success":"danger",disabled:!E,onClick:function(){!function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};window.confirm("Are you sure you want to replace your database? All existing characters and artifacts will be deleted before replacement.")&&(Object(v.d)(e),t())}(n),p(""),g(""),r()},children:"Replace database"})})]})}Object(v.a)()},80:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(99);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,c=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(s){r=!0,c=s}finally{try{n||null==o.return||o.return()}finally{if(r)throw c}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},81:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(98);function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}},86:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(110);var r=a(99);function c(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},87:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}a.d(t,"a",(function(){return n}))},92:function(e,t,a){"use strict";var n=a(1),r=a(3),c=a(5),i=a.n(c),o=a(0),s=a.n(o),l=a(6),u=a(43),b=s.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.variant,o=e.size,b=e.active,d=e.className,f=e.block,j=e.type,m=e.as,O=Object(r.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),p=Object(l.a)(a,"btn"),h=i()(d,p,b&&"active",c&&p+"-"+c,f&&p+"-block",o&&p+"-"+o);if(O.href)return s.a.createElement(u.a,Object(n.a)({},O,{as:m,ref:t,className:i()(h,O.disabled&&"disabled")}));t&&(O.ref=t),j?O.type=j:m||(O.type="button");var v=m||"button";return s.a.createElement(v,Object(n.a)({},O,{className:h}))}));b.displayName="Button",b.defaultProps={variant:"primary",active:!1,disabled:!1},t.a=b},93:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(99);function r(e,t){var a;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=Object(n.a)(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var r=0,c=function(){};return{s:c,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==a.return||a.return()}finally{if(s)throw i}}}}},94:function(e,t,a){"use strict";function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}a.d(t,"a",(function(){return r}))},98:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return n}))},99:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(110);function r(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(n.a)(e,t):void 0}}}}]);
//# sourceMappingURL=14.a37c27e4.chunk.js.map