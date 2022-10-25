"use strict";(self.webpackChunkgenshin_optimizer=self.webpackChunkgenshin_optimizer||[]).push([[348],{30066:function(n,e,t){t.d(e,{W:function(){return m}});var r,o=t(1413),i=t(30168),a=t(93433),s=t(63204),l=t(47047),c=t(72791),u=t(22020),d=t(947),p=t(1614),f=t(12761),h=t(42320),x=t(24351),g=t(84082),Z=t(2380),v=t(80184);function m(n){var e=n.location,t=n.setLocation,m=n.filter,j=void 0===m?function(){return!0}:m,y=n.autoCompleteProps,b=void 0===y?{}:y,w=(0,u.$)(["ui","artifact","charNames_gen"]).t,k=(0,c.useContext)(p.t).database,C=(0,f.Z)().gender,I=(0,h.Z)((function(){return d.Z.getAll}),[]),W=(0,c.useCallback)((function(n){return w("charNames_gen:".concat((0,x.LP)(k.chars.LocationToCharacterKey(n),C)))}),[k,C,w]),P=(0,c.useCallback)((function(n){var e;return""===n?(0,v.jsx)(s.Z,{}):I?(0,v.jsx)(Z.Z,{src:null===(e=I(k.chars.LocationToCharacterKey(n),C))||void 0===e?void 0:e.thumbImgSide,sx:{pr:1}}):(0,v.jsx)(v.Fragment,{})}),[k,C,I]),S=(0,c.useCallback)((function(n){return"Traveler"===n?x._0.some((function(n){return k.charMeta.get(n).favorite})):!!n&&k.charMeta.get(n).favorite}),[k]),M=(0,c.useMemo)((function(){return[{key:"",label:w(r||(r=(0,i.Z)(["artifact:filterLocation.inventory"])))}].concat((0,a.Z)(Array.from(new Set(k.chars.keys.filter((function(n){return null===I||void 0===I||!I(n,C)||j(I(n,C))})).map((function(n){return(0,x.V7)(n)})))).map((function(n){return{key:n,label:W(n),favorite:S(n)}})).sort((function(n,e){return n.favorite&&!e.favorite?-1:!n.favorite&&e.favorite?1:n.label.localeCompare(e.label)}))))}),[w,W,S,k,I,j,C]);return(0,v.jsx)(c.Suspense,{fallback:(0,v.jsx)(l.Z,{variant:"text",width:100}),children:(0,v.jsx)(g.Z,(0,o.Z)({size:"small",options:M,valueKey:e,onChange:t,toImg:P,clearKey:""},b))})}},40020:function(n,e,t){t.d(e,{Z:function(){return p}});var r=t(63204),o=t(20890),i=t(72791),a=t(22020),s=t(947),l=t(1614),c=t(12761),u=t(42320),d=t(80184);function p(n){var e=n.location,t=(0,a.$)("ui").t,p=(0,i.useContext)(l.t).database,f=(0,c.Z)().gender,h=(0,u.Z)((function(){return s.Z.get(e&&p?p.chars.LocationToCharacterKey(e):"",f)}),[e,f,p]);return(0,d.jsx)(o.Z,{component:"span",children:null!==h&&void 0!==h&&h.name?h.nameWIthIcon:(0,d.jsxs)("span",{children:[(0,d.jsx)(r.Z,{sx:{verticalAlign:"text-bottom"}})," ",t("inventory")]})})}},2380:function(n,e,t){var r=(0,t(93457).Z)("img")((function(n){var e=n.theme;return{display:"inline-block",width:"auto",height:"2.3em",lineHeight:1,verticalAlign:"text-bottom",marginTop:e.spacing(-3),marginLeft:e.spacing(-1.25),marginRight:e.spacing(-1),marginBottom:e.spacing(-1)}}));e.Z=r},20005:function(n,e,t){function r(n){var e=n.condition,t=n.wrapper,r=n.falseWrapper,o=n.children;return e?t(o):r?r(o):o}t.d(e,{Z:function(){return r}})},84082:function(n,e,t){t.d(e,{Z:function(){return x}});var r=t(1413),o=t(45987),i=t(14361),a=t(94198),s=t(23786),l=t(57064),c=t(49900),u=t(47047),d=t(72791),p=t(68244),f=t(80184),h=["options","valueKey","label","onChange","disable","clearKey","toImg"];function x(n){var e,t=n.options,x=n.valueKey,g=n.label,Z=n.onChange,v=(n.disable,n.clearKey),m=n.toImg,j=(0,o.Z)(n,h),y=null!==(e=t.find((function(n){return n.key===x})))&&void 0!==e?e:{key:"",label:"ERROR"};return(0,f.jsx)(a.Z,(0,r.Z)({autoHighlight:!0,options:t,value:y,clearIcon:x!==v?void 0:null,onChange:function(n,e,t){return"clear"===t&&void 0!==v?Z(v):null!==e&&Z(e.key)},isOptionEqualToValue:function(n,e){return n.key===e.key},renderInput:function(n){return(0,f.jsx)(p.Z,(0,r.Z)((0,r.Z)({},n),{},{label:g,startAdornment:void 0!==y?m(y.key):void 0,hasValue:!(null===y||void 0===y||!y.key)}))},renderOption:function(n,e){return(0,f.jsxs)(s.Z,(0,r.Z)((0,r.Z)({value:e.key},n),{},{children:[(0,f.jsx)(l.Z,{children:m(e.key)}),(0,f.jsx)(c.Z,{children:(0,f.jsx)(d.Suspense,{fallback:(0,f.jsx)(u.Z,{variant:"text",width:100}),children:e.key===(null===y||void 0===y?void 0:y.key)?(0,f.jsx)("strong",{children:e.label}):e.label})}),!!e.favorite&&(0,f.jsx)(i.Z,{})]}))}},j))}},68244:function(n,e,t){t.d(e,{Z:function(){return c}});var r=t(1413),o=t(45987),i=t(13967),a=t(58165),s=t(80184),l=["hasValue","startAdornment","InputProps","sx"];function c(n){var e=n.hasValue,t=n.startAdornment,c=n.InputProps,u=n.sx,d=(0,o.Z)(n,l),p=(0,i.Z)();return(0,s.jsx)(a.Z,(0,r.Z)((0,r.Z)({},d),{},{variant:"filled",color:e?"success":"primary",hiddenLabel:!d.label,type:"search",InputProps:(0,r.Z)((0,r.Z)({},c),{},{startAdornment:t}),InputLabelProps:{style:{color:p.palette.text.primary}},sx:(0,r.Z)((0,r.Z)({},u),{},{"& .MuiFilledInput-root":{backgroundColor:e?p.palette.success.main:p.palette.primary.main,paddingTop:d.label?void 0:0,paddingBottom:0,flexWrap:"nowrap"},"& .MuiFilledInput-root.Mui-focused":{backgroundColor:e?p.palette.success.light:p.palette.primary.light},"& .MuiFilledInput-root:hover":{backgroundColor:e?p.palette.success.dark:p.palette.primary.dark},"& .MuiFilledInput-root:before":{border:"none"},"& .MuiFilledInput-root.Mui-disabled:before":{border:"none"},"& .MuiFilledInput-root:after":{border:"none"},"& .MuiFilledInput-root:hover:not(.Mui-disabled):before":{border:"none"},"& input[type=search]::-ms-clear":{display:"none",width:0,height:0},"& input[type=search]::-ms-reveal":{display:"none",width:0,height:0},"& input[type=search]::-webkit-search-decoration":{display:"none"},"& input[type=search]::-webkit-search-cancel-button":{display:"none"},"& input[type=search]::-webkit-search-results-button":{display:"none"},"& input[type=search]::-webkit-search-results-decoration":{display:"none"}})}))}},59215:function(n,e,t){t.d(e,{Z:function(){return g}});var r=t(1413),o=t(45987),i=t(53174),a=t(54483),s=t(2199),l=t(23786),c=t(24518),u=t(52791),d=t(22020),p=t(76899),f=t(33890),h=t(80184),x=["sortKeys","value","onChange","ascending","onChangeAsc"];function g(n){var e=n.sortKeys,t=n.value,g=n.onChange,Z=n.ascending,v=n.onChangeAsc,m=(0,o.Z)(n,x),j=(0,d.$)("ui").t;return(0,h.jsxs)(u.Z,{display:"flex",alignItems:"center",gap:1,children:[(0,h.jsx)(p.c,{t:j,i18nKey:j("sortBy"),children:"Sort by: "}),(0,h.jsxs)(s.Z,(0,r.Z)((0,r.Z)({},m),{},{children:[(0,h.jsx)(f.Z,{title:(0,h.jsx)(p.c,{t:j,i18nKey:j("sortMap.".concat(t)),children:{value:j("sortMap.".concat(t))}}),children:e.map((function(n){return(0,h.jsx)(l.Z,{selected:t===n,disabled:t===n,onClick:function(){return g(n)},children:j("sortMap.".concat(n))},n)}))}),(0,h.jsx)(c.Z,{onClick:function(){return v(!Z)},startIcon:(0,h.jsx)(a.G,{icon:Z?i.Pa6:i.xrW,className:"fa-fw"}),children:Z?(0,h.jsx)(p.c,{t:j,i18nKey:"ascending",children:"Ascending"}):(0,h.jsx)(p.c,{t:j,i18nKey:"descending",children:"Descending"})})]}))]})}},10157:function(n,e,t){t.d(e,{q:function(){return c}});var r=t(93433),o=t(53174),i=t(54483),a=t(91702),s=t(80184),l=function(){return(0,s.jsx)(i.G,{icon:o.Tab})},c=function(n){var e=n.stars,t=n.colored,o=void 0!==t&&t;return(0,s.jsx)(a.Z,{color:o?"warning":void 0,children:e?(0,r.Z)(Array(e).keys()).map((function(n,e){return(0,s.jsx)(l,{},e)})):null})}},73578:function(n,e,t){t.d(e,{Z:function(){return x}});var r=t(1413),o=t(45987),i=t(93433),a=t(90388),s=t(10658),l=t(24351),c=t(75308),u=t(55942),d=t(91839),p=t(80184),f=["value","onChange"],h=(0,c.X)((0,i.Z)(l.yd));function x(n){var e=n.value,t=n.onChange,i=(0,o.Z)(n,f);return(0,p.jsx)(d.Z,(0,r.Z)((0,r.Z)({exclusive:!0,value:e},i),{},{children:l.yd.map((function(n){var r;return(0,p.jsx)(a.Z,{value:n,onClick:function(){return t(h(e,n))},children:(0,p.jsx)(u.Z,{src:null===(r=s.Z.weaponTypes)||void 0===r?void 0:r[n],size:2})},n)}))}))}},90543:function(n,e,t){t.d(e,{Z:function(){return z}});var r,o=t(30168),i=t(53174),a=t(54483),s=t(40117),l=t(62002),c=t(66647),u=t(68870),d=t(47047),p=t(13400),f=t(20890),h=t(39504),x=t(2199),g=t(40165),Z=t(24518),v=t(72791),m=t(22020),j=t(10658),y=t(71310),b=t(30066),w=t(40020),k=t(20005),C=t(55942),I=t(10157),W=t(2139),P=t(66218),S=t(1614),M=t(27235),T=t(73036),K=t(18327),A=t(42320),L=t(74480),N=t(80184);function z(n){var e,t=n.weaponId,z=n.onClick,E=n.onEdit,_=n.onDelete,F=n.canEquip,G=void 0!==F&&F,D=n.extraButtons,O=(0,m.$)(["page_weapon","ui"]).t,R=(0,v.useContext)(S.t).database,V=(0,L.Z)(t),q=(0,A.Z)((function(){return null!==V&&void 0!==V&&V.key?P.Z.get(V.key):void 0}),[null===V||void 0===V?void 0:V.key]),H=(0,v.useCallback)((function(n){return n.weaponTypeKey===(null===q||void 0===q?void 0:q.weaponType)}),[q]),X=(0,v.useCallback)((function(n){return(0,N.jsx)(c.Z,{onClick:function(){return null===z||void 0===z?void 0:z(t)},children:n})}),[z,t]),$=(0,v.useCallback)((function(n){return(0,N.jsx)(u.Z,{children:n})}),[]),B=(0,v.useCallback)((function(n){return t&&R.weapons.set(t,{location:n})}),[R,t]),J=(0,v.useMemo)((function(){return q&&V&&(0,T.mP)([q.data,(0,T.v0)(V)])}),[q,V]);if(!V||!q||!J)return null;var Q=V.level,U=V.ascension,Y=V.refinement,nn=V.id,en=V.location,tn=void 0===en?"":en,rn=V.lock,on=J.get(M.ri.weapon.type).value,an=[M.ri.weapon.main,M.ri.weapon.sub,M.ri.weapon.sub2].map((function(n){return J.get(n)})),sn=q.getImg(U);return(0,N.jsx)(v.Suspense,{fallback:(0,N.jsx)(d.Z,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:300}}),children:(0,N.jsxs)(y.Z,{sx:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[(0,N.jsxs)(k.Z,{condition:!!z,wrapper:X,falseWrapper:$,children:[(0,N.jsxs)(u.Z,{className:"grad-".concat(q.rarity,"star"),sx:{position:"relative",pt:2,px:2},children:[!z&&(0,N.jsx)(p.Z,{color:"primary",onClick:function(){return R.weapons.set(nn,{lock:!rn})},sx:{position:"absolute",right:0,bottom:0,zIndex:2},children:rn?(0,N.jsx)(s.Z,{}):(0,N.jsx)(l.Z,{})}),(0,N.jsxs)(u.Z,{sx:{position:"relative",zIndex:1},children:[(0,N.jsxs)(u.Z,{component:"div",sx:{display:"flex",alignItems:"center",gap:1,mb:1},children:[(0,N.jsx)(C.Z,{sx:{fontSize:"1.5em"},src:null===(e=j.Z.weaponTypes)||void 0===e?void 0:e[on]}),(0,N.jsx)(f.Z,{noWrap:!0,sx:{textAlign:"center",backgroundColor:"rgba(100,100,100,0.35)",borderRadius:"1em",px:1},children:(0,N.jsx)("strong",{children:q.name})})]}),(0,N.jsxs)(f.Z,{component:"span",variant:"h5",children:["Lv. ",Q]}),(0,N.jsxs)(f.Z,{component:"span",variant:"h5",color:"text.secondary",children:["/",W.SJ[U]]}),(0,N.jsxs)(f.Z,{variant:"h6",children:["Refinement ",(0,N.jsx)("strong",{children:Y})]}),(0,N.jsx)(f.Z,{children:(0,N.jsx)(I.q,{stars:q.rarity,colored:!0})})]}),(0,N.jsx)(u.Z,{sx:{height:"100%",position:"absolute",right:0,top:0},children:(0,N.jsx)(u.Z,{component:"img",src:null!==sn&&void 0!==sn?sn:"",width:"auto",height:"100%",sx:{float:"right"}})})]}),(0,N.jsx)(h.Z,{children:an.map((function(n){return n.info.name?(0,N.jsxs)(u.Z,{sx:{display:"flex"},children:[(0,N.jsxs)(f.Z,{flexGrow:1,children:[n.info.icon," ",n.info.name]}),(0,N.jsx)(f.Z,{children:(0,K.p)(n)})]},JSON.stringify(n.info)):null}))})]}),(0,N.jsxs)(u.Z,{sx:{p:1,display:"flex",gap:1,justifyContent:"space-between",alignItems:"center"},children:[(0,N.jsx)(u.Z,{sx:{flexGrow:1},children:G?(0,N.jsx)(b.W,{location:tn,setLocation:B,filter:H,autoCompleteProps:{getOptionDisabled:function(n){return!n.key},disableClearable:!0}}):(0,N.jsx)(w.Z,{location:tn})}),(0,N.jsxs)(x.Z,{sx:{height:"100%"},children:[!!E&&(0,N.jsx)(g.Z,{title:(0,N.jsx)(f.Z,{children:O(r||(r=(0,o.Z)(["page_weapon:edit"])))}),placement:"top",arrow:!0,children:(0,N.jsx)(Z.Z,{color:"info",onClick:function(){return E(nn)},children:(0,N.jsx)(a.G,{icon:i.Xcf,className:"fa-fw"})})}),!!_&&(0,N.jsx)(Z.Z,{color:"error",onClick:function(){return _(nn)},disabled:!!tn||rn,children:(0,N.jsx)(a.G,{icon:i.I7k,className:"fa-fw"})}),D]})]})]})})}},70348:function(n,e,t){t.r(e),t.d(e,{default:function(){return q}});var r=t(74165),o=t(15861),i=t(29439),a=t(93433),s=t(68087),l=t(68870),c=t(61889),u=t(90388),d=t(58165),p=t(57246),f=t(47047),h=t(24518),x=t(39504),g=t(20890),Z=t(72791),v=t(10757),m=t(22020),j=t(76899),y=t(3992),b=t(91839),w=t(59215),k=t(10157),C=t(73578),I=t(66218),W=t(1614),P=t(68544),S=t(70645),M=t(42320),T=t(24351),K=t(75308),A=t(46956),L=t(60393),N=t(66045),z=t(11400),E=t(90543),_=t(80184),F=Z.lazy((function(){return t.e(361).then(t.bind(t,44361))})),G=(0,Z.lazy)((function(){return t.e(476).then(t.bind(t,74476))})),D={xs:1,sm:2,md:3,lg:3,xl:4},O={xs:10,sm:12,md:24,lg:24,xl:24},R=Object.keys(N.gd),V=(0,K.X)((0,a.Z)(T.wC));function q(){var n=(0,m.$)(["page_weapon","ui","weaponNames_gen"]).t,e=(0,Z.useContext)(W.t).database,t=(0,Z.useState)(e.displayWeapon.get()),a=(0,i.Z)(t,2),g=a[0],j=a[1];(0,Z.useEffect)((function(){return e.displayWeapon.follow((function(n,e){return j(e)}))}),[e]);var K=(0,Z.useState)(!1),q=(0,i.Z)(K,2),X=q[0],$=q[1],B=(0,P.Z)(),J=(0,i.Z)(B,2),Q=J[0],U=J[1],Y=(0,Z.useRef)(null),nn=(0,Z.useState)(0),en=(0,i.Z)(nn,2),tn=en[0],rn=en[1];(0,Z.useEffect)((function(){return v.ZP.send({hitType:"pageview",page:"/weapon"}),e.weapons.followAny((function(n,e){return("new"===e||"remove"===e)&&U()}))}),[U,e]);var on=(0,S.Z)(),an=O[on],sn=(0,M.Z)((function(){return I.Z.getAll}),[]),ln=(0,Z.useCallback)(function(){var t=(0,o.Z)((0,r.Z)().mark((function t(o){var i,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=e.weapons.get(o)){t.next=3;break}return t.abrupt("return");case 3:if(a=n("weaponNames_gen:".concat(i.key)),window.confirm(n("removeWeapon",{value:a}))){t.next=6;break}return t.abrupt("return");case 6:e.weapons.remove(o),g.editWeaponId===o&&e.displayWeapon.set({editWeaponId:""});case 8:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),[g.editWeaponId,e,n]),cn=(0,Z.useCallback)((function(n){e.displayWeapon.set({editWeaponId:n})}),[e]),un=(0,Z.useCallback)((function(n){cn(e.weapons.new((0,z.xg)(n)))}),[e,cn]),dn=(0,Z.useState)(""),pn=(0,i.Z)(dn,2),fn=pn[0],hn=pn[1],xn=(0,Z.useDeferredValue)(fn),gn=g.sortType,Zn=g.ascending,vn=g.weaponType,mn=g.rarity,jn=(0,Z.useMemo)((function(){var n,t=e.weapons.values,r=t.length;if(!sn)return{weaponIdList:[],totalWeaponNum:r};var o=t.filter((0,A.C)({weaponType:vn,rarity:mn,name:xn},(0,N.Xg)(sn))).sort((0,A.e)(null!==(n=N.gd[gn])&&void 0!==n?n:[],Zn,(0,N.Sn)(sn))).map((function(n){return n.id}));return Q&&{weaponIdList:o,totalWeaponNum:r}}),[Q,e,sn,gn,Zn,mn,vn,xn]),yn=jn.weaponIdList,bn=jn.totalWeaponNum,wn=(0,Z.useMemo)((function(){var n=Math.ceil(yn.length/an),e=(0,L.uZ)(tn,0,n-1);return{weaponIdsToShow:yn.slice(e*an,(e+1)*an),numPages:n,currentPageIndex:e}}),[yn,tn,an]),kn=wn.weaponIdsToShow,Cn=wn.numPages,In=wn.currentPageIndex,Wn=yn.length!==bn?"".concat(yn.length,"/").concat(bn):"".concat(bn),Pn=(0,Z.useCallback)((function(n,e){var t;null===(t=Y.current)||void 0===t||t.scrollIntoView({behavior:"smooth"}),rn(e-1)}),[rn,Y]),Sn=(0,Z.useCallback)((function(){return e.displayWeapon.set({editWeaponId:""})}),[e]),Mn=g.editWeaponId;return(0,Z.useEffect)((function(){Mn&&(e.weapons.get(Mn)||Sn())}),[e,Mn,Sn]),(0,_.jsxs)(l.Z,{my:1,display:"flex",flexDirection:"column",gap:1,children:[(0,_.jsx)(Z.Suspense,{fallback:!1,children:(0,_.jsx)(F,{show:X,onHide:function(){return $(!1)},onSelect:un})}),(0,_.jsx)(Z.Suspense,{fallback:!1,children:(0,_.jsx)(G,{weaponId:Mn,footer:!0,onClose:Sn})}),(0,_.jsxs)(y.Z,{ref:Y,sx:{p:2,pb:1},children:[(0,_.jsxs)(c.ZP,{container:!0,spacing:1,sx:{mb:1},children:[(0,_.jsx)(c.ZP,{item:!0,children:(0,_.jsx)(C.Z,{sx:{height:"100%"},onChange:function(n){return e.displayWeapon.set({weaponType:n})},value:vn,size:"small"})}),(0,_.jsx)(c.ZP,{item:!0,children:(0,_.jsx)(b.Z,{sx:{height:"100%"},value:mn,size:"small",children:T.wC.map((function(n){return(0,_.jsx)(u.Z,{value:n,onClick:function(){return e.displayWeapon.set({rarity:V(mn,n)})},children:(0,_.jsxs)(l.Z,{display:"flex",gap:1,children:[(0,_.jsx)("strong",{children:n}),(0,_.jsx)(k.q,{stars:1})]})},n)}))})}),(0,_.jsx)(c.ZP,{item:!0,flexGrow:1,children:(0,_.jsx)(d.Z,{autoFocus:!0,size:"small",value:fn,onChange:function(n){return hn(n.target.value)},label:n("weaponName"),sx:{height:"100%"},InputProps:{sx:{height:"100%"}}})}),(0,_.jsx)(c.ZP,{item:!0,children:(0,_.jsx)(w.Z,{sx:{height:"100%"},sortKeys:R,value:gn,onChange:function(n){return e.displayWeapon.set({sortType:n})},ascending:Zn,onChangeAsc:function(n){return e.displayWeapon.set({ascending:n})}})})]}),(0,_.jsxs)(c.ZP,{container:!0,alignItems:"flex-end",children:[(0,_.jsx)(c.ZP,{item:!0,flexGrow:1,children:(0,_.jsx)(p.Z,{count:Cn,page:In+1,onChange:Pn})}),(0,_.jsx)(c.ZP,{item:!0,children:(0,_.jsx)(H,{numShowing:kn.length,total:Wn,t:n})})]})]}),(0,_.jsxs)(Z.Suspense,{fallback:(0,_.jsx)(f.Z,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:500}}),children:[(0,_.jsx)(h.Z,{fullWidth:!0,onClick:function(){return $(!0)},color:"info",startIcon:(0,_.jsx)(s.Z,{}),children:n("page_weapon:addWeapon")}),(0,_.jsx)(c.ZP,{container:!0,spacing:1,columns:D,children:kn.map((function(n){return(0,_.jsx)(c.ZP,{item:!0,xs:1,children:(0,_.jsx)(E.Z,{weaponId:n,onDelete:ln,onEdit:cn,canEquip:!0})},n)}))})]}),Cn>1&&(0,_.jsx)(y.Z,{children:(0,_.jsx)(x.Z,{children:(0,_.jsxs)(c.ZP,{container:!0,alignItems:"flex-end",children:[(0,_.jsx)(c.ZP,{item:!0,flexGrow:1,children:(0,_.jsx)(p.Z,{count:Cn,page:In+1,onChange:Pn})}),(0,_.jsx)(c.ZP,{item:!0,children:(0,_.jsx)(H,{numShowing:kn.length,total:Wn,t:n})})]})})})]})}function H(n){var e=n.numShowing,t=n.total,r=n.t;return(0,_.jsx)(g.Z,{color:"text.secondary",children:(0,_.jsxs)(j.c,{t:r,i18nKey:"showingNum",count:e,value:t,children:["Showing ",(0,_.jsx)("b",{children:{count:e}})," out of ",{value:t}," Weapons"]})})}},70645:function(n,e,t){t.d(e,{Z:function(){return i}});var r=t(13967),o=t(95193);function i(){var n=(0,r.Z)(),e=(0,o.Z)(n.breakpoints.up("sm")),t=(0,o.Z)(n.breakpoints.up("md")),i=(0,o.Z)(n.breakpoints.up("lg"));return(0,o.Z)(n.breakpoints.up("xl"))?"xl":i?"lg":t?"md":e?"sm":"xs"}},74480:function(n,e,t){t.d(e,{Z:function(){return a}});var r=t(29439),o=t(72791),i=t(1614);function a(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=(0,o.useContext)(i.t),t=e.database,a=(0,o.useState)(t.weapons.get(n)),s=(0,r.Z)(a,2),l=s[0],c=s[1];return(0,o.useEffect)((function(){return c(t.weapons.get(n))}),[t,n]),(0,o.useEffect)((function(){return n?t.weapons.follow(n,(function(n,e,t){return"update"===e&&c(t)})):void 0}),[n,c,t]),l}},75308:function(n,e,t){t.d(e,{X:function(){return i}});var r=t(93433),o=t(60393);function i(n){return function(e,t){var i=e.length;return i===n.length?[t]:1===i&&e[0]===t?(0,r.Z)(n):(0,r.Z)(new Set((0,o.nh)(e,t)))}}},46956:function(n,e,t){t.d(e,{C:function(){return a},e:function(){return i}});var r=t(29439),o=t(37762);function i(n,e,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];return function(i,a){var s,l=(0,o.Z)(n);try{for(l.s();!(s=l.n()).done;){var c=s.value,u=0,d=t[c],p=d(i),f=d(a);if(0!==(u="string"===typeof p&&"string"===typeof f?p.localeCompare(f):f-p))return r.includes(c)?u:(e?-1:1)*u}}catch(h){l.e(h)}finally{l.f()}return 0}}function a(n,e){return function(t){return Object.entries(n).every((function(n){var o=(0,r.Z)(n,2),i=o[0],a=o[1];return e[i]&&e[i](t,a)}))}}}}]);
//# sourceMappingURL=348.d4c91479.chunk.js.map