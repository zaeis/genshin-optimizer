"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[886],{91672:(t,e,n)=>{n.d(e,{Z:()=>r});var i=n(58918);function r(t,e){if(t.grouper>e.grouper)return-1;if(t.grouper<e.grouper)return 1;const n=i.Z.t(`artifactNames_gen:${t.key}`),r=i.Z.t(`artifactNames_gen:${e.key}`);return n<r?-1:n>r?1:0}},26617:(t,e,n)=>{n.r(e),n.d(e,{default:()=>ne});var i=n(82799),r=n(65396),a=n(67651),l=n(73673),s=n(92252),o=n(32510),c=n(85219),d=n(16549),u=n(65992),h=n(47746),Z=n(86432),f=n(79906),m=n(42523),p=n(7671),y=n(41075),g=n(67550),v=n(38553),b=n(83249),S=n(62197),w=n(94380),x=n(72841),k=n(107),P=n(2784),K=n(21548),C=n(31461),B=n(36893),X=n(45475),E=n(71765),I=n(52903);let A,O=t=>t;const R=["rarity","onChange","filter"];function U(t){let{rarity:e,onChange:n,filter:i}=t,r=(0,C.Z)(t,R);const{t:a}=(0,K.$G)("artifact");return(0,I.tZ)(X.Z,Object.assign({},r,{title:e?(0,I.tZ)(E.q,{stars:e,inline:!0}):a(A||(A=O`editor.rarity`)),color:e?"success":"primary",children:[5,4,3].map((t=>(0,I.tZ)(w.Z,{disabled:!i(t),onClick:()=>n(t),children:(0,I.tZ)(E.q,{stars:t,inline:!0})},t)))}))}var G=n(17206),$=n(83993),M=n(82056),T=n(56961),z=n(15378);let D,L=t=>t;const V=["slotKey","onChange","hasUnselect"];function N(t){let{slotKey:e="",onChange:n,hasUnselect:r=!1}=t,a=(0,C.Z)(t,V);const{t:l}=(0,K.$G)(["artifact","ui"]);return(0,I.BX)(X.Z,Object.assign({title:l(e?`artifact:slotName:${e}`:"artifact:slot"),color:e?"success":"primary",startIcon:e?(0,I.tZ)(z.Z,{slotKey:e}):void 0},a,{children:[r&&(0,I.BX)(w.Z,{selected:""===e,disabled:""===e,onClick:()=>n(""),children:[(0,I.tZ)($.Z,{children:(0,I.tZ)(o.Z,{})}),(0,I.tZ)(M.Z,{children:l(D||(D=L`ui:unselect`))})]}),r&&(0,I.tZ)(T.Z,{}),i.eV.map((t=>(0,I.BX)(w.Z,{selected:e===t,disabled:e===t,onClick:()=>n(t),children:[(0,I.tZ)($.Z,{children:(0,I.tZ)(z.Z,{slotKey:t})}),(0,I.tZ)(M.Z,{children:l(`artifact:slotName:${t}`)})]},t)))]}))}var W=n(87985),j=n(67937),H=n(72055),F=n(30609);const Y=["value","onChange","disabled","float"];function q(t){let{value:e,onChange:n,disabled:i=!1,float:r=!1}=t,a=(0,C.Z)(t,Y);const[l,s]=(0,P.useState)(""),o=(0,P.useCallback)((()=>{if(""===l)return n(0);const t=r?parseFloat:parseInt;n(t(l))}),[n,l,r]);return(0,P.useEffect)((()=>{var t;return s(null!=(t=null==e?void 0:e.toString())?t:"")}),[e,s]),(0,I.tZ)(F.Z,Object.assign({value:l,"aria-label":"custom-input",type:"number",onChange:t=>s(t.target.value),onBlur:o,disabled:i,onKeyDown:t=>"Enter"===t.key&&o()},a))}var _=n(26578),J=n(98927),Q=n(34612),tt=n(61420),et=n(54878),nt=n(25870),it=n(36999),rt=n(19807),at=n(43397),lt=n(36617);function st(t,e,n=!0){const[i,r]=(0,P.useState)(void 0);return(0,P.useEffect)((()=>{var e;let i=!0;return null!=(null==(e=t())?void 0:e.then((t=>i&&r([t])),console.error))||r(void 0),()=>{i=!1,!n&&r(void 0)}}),e),null==i?void 0:i[0]}var ot=n(69190);const ct=JSON.parse('{"5":{"def_":{"24.0":"24.1"},"critRate_":{"8.5":"8.6","19.5":"19.4","23.0":"22.9"}}}');var dt=n(41015),ut=n(85563),ht=n(82334),Zt=n(45220);function ft({efficiency:t,max:e=!1,t:n,valid:i}){const r=e?"maxSubEff":"curSubEff";return(0,I.tZ)(j.Z,{sx:{py:1,px:2},children:(0,I.BX)(y.ZP,{container:!0,spacing:1,children:[(0,I.tZ)(y.ZP,{item:!0,children:n(`editor.${r}`)}),(0,I.tZ)(y.ZP,{item:!0,flexGrow:1,children:(0,I.tZ)(ht.Z,{title:(0,I.BX)("span",{children:[(0,I.tZ)(S.Z,{variant:"h6",children:n(`editor.${r}`)}),(0,I.tZ)(S.Z,{children:(0,I.tZ)(K.cC,{t:n,i18nKey:`editor.${r}Desc`})})]})})}),(0,I.tZ)(y.ZP,{item:!0,xs:"auto",children:(0,I.tZ)(Zt.Z,{valid:i,max:900,value:i?t:"ERR"})})]})})}var mt=n(89343),pt=n(83673),yt=n(87051);let gt,vt,bt,St,wt,xt,kt,Pt=t=>t;function Kt({index:t,artifact:e,setSubstat:n}){var i;const{t:r}=(0,K.$G)("artifact"),{mainStatKey:a="",rarity:l=5}=null!=e?e:{},{key:s="",value:o=0,rolls:c=[],efficiency:d=0}=null!=(i=null==e?void 0:e.substats[t])?i:{},u=c.reduce(((t,e)=>t+e),0),h=rt.ZP.unit(s),Z=c.length;let f="",m=[],p=0;if(e){const t=e.rarity,{numUpgrades:n,high:i}=et.ZP.rollInfo(t);p=n+i-3-Z,m=s?et.ZP.getSubstatRollData(s,t):[]}const x=7-m.length;return!Z&&s&&o&&(f=f||r(gt||(gt=Pt`editor.substat.error.noCalc`))),p<0&&(f=f||r("editor.substat.error.noOverRoll",{value:p+Z})),(0,I.BX)(j.Z,{children:[(0,I.tZ)(g.Z,{sx:{display:"flex"},children:(0,I.BX)(v.Z,{size:"small",sx:{width:"100%",display:"flex"},children:[(0,I.BX)(X.Z,{startIcon:s?(0,I.tZ)(at.C,{statKey:s}):void 0,title:s?rt.ZP.getArtStr(s):r("editor.substat.substatFormat",{value:t+1}),disabled:!e,color:s?"success":"primary",sx:{whiteSpace:"nowrap"},children:[s&&(0,I.tZ)(w.Z,{onClick:()=>n(t,{key:"",value:0}),children:r(vt||(vt=Pt`editor.substat.noSubstat`))}),ot._.filter((t=>a!==t)).map((e=>(0,I.BX)(w.Z,{selected:s===e,disabled:s===e,onClick:()=>n(t,{key:e,value:0}),children:[(0,I.tZ)($.Z,{children:(0,I.tZ)(at.C,{statKey:e})}),(0,I.tZ)(M.Z,{children:rt.ZP.getArtStr(e)})]},e)))]}),(0,I.tZ)(mt.CC,{sx:{flexBasis:30,flexGrow:1},children:(0,I.tZ)(mt.ZP,{float:"%"===h,placeholder:r(bt||(bt=Pt`editor.substat.selectSub`)),value:s?o:void 0,onChange:e=>n(t,{key:s,value:null!=e?e:0}),disabled:!s,error:!!f,sx:{px:1},inputProps:{sx:{textAlign:"right"}}})}),!!m.length&&(0,I.tZ)(yt.Z,{children:r(St||(St=Pt`editor.substat.nextRolls`))}),m.map(((e,i)=>{var r,a,c;let d=(0,rt.qs)(u+e,h);return d=null!=(r=null==(a=ct[l])||null==(c=a[s])?void 0:c[d])?r:d,(0,I.tZ)(b.Z,{color:`roll${(0,dt.uZ)(x+i,1,6)}`,disabled:o&&!Z||p<=0,onClick:()=>n(t,{key:s,value:parseFloat(d)}),children:d},i)}))]})}),(0,I.tZ)(g.Z,{sx:{p:1},children:f?(0,I.tZ)(pt.Z,{color:"error",children:r(wt||(wt=Pt`ui:error`))}):(0,I.BX)(y.ZP,{container:!0,children:[(0,I.tZ)(y.ZP,{item:!0,children:(0,I.tZ)(pt.Z,{color:0===Z?"secondary":`roll${(0,dt.uZ)(Z,1,6)}`,children:Z?r("editor.substat.RollCount",{count:Z}):r(xt||(xt=Pt`editor.substat.noRoll`))})}),(0,I.tZ)(y.ZP,{item:!0,flexGrow:1,children:!!c.length&&[...c].sort().map(((t,e)=>(0,I.tZ)(S.Z,{component:"span",color:`roll${(0,dt.uZ)(x+m.indexOf(t),1,6)}.main`,sx:{ml:1},children:(0,rt.qs)(t,h)},`${e}.${t}`)))}),(0,I.tZ)(y.ZP,{item:!0,xs:"auto",flexShrink:1,children:(0,I.tZ)(S.Z,{children:(0,I.BX)(K.cC,{t:r,i18nKey:"editor.substat.eff",color:"text.secondary",children:["Efficiency: ",(0,I.tZ)(Zt.Z,{valid:!0,max:100*Z,value:d||r(kt||(kt=Pt`editor.substat.noStat`))})]})})})]})})]})}const Ct=n.p+"8e6fecde6da1a4ee.png",Bt=n.p+"5573acbcba497db1.png";function Xt({modalShow:t,hide:e}){return(0,I.tZ)(J.Z,{open:t,onClose:e,children:(0,I.BX)(W.Z,{children:[(0,I.tZ)(p.Z,{sx:{py:1},children:(0,I.BX)(y.ZP,{container:!0,children:[(0,I.tZ)(y.ZP,{item:!0,flexGrow:1,children:(0,I.tZ)(S.Z,{variant:"subtitle1",children:"How do Upload Screenshots for parsing"})}),(0,I.tZ)(y.ZP,{item:!0,children:(0,I.tZ)(H.Z,{onClick:e})})]})}),(0,I.tZ)(T.Z,{}),(0,I.BX)(p.Z,{children:[(0,I.BX)(k.Z,{variant:"outlined",severity:"warning",children:["NOTE: Artifact Scanning currently only work for ",(0,I.tZ)("strong",{children:"ENGLISH"})," artifacts."]}),(0,I.BX)(y.ZP,{container:!0,spacing:1,mt:1,children:[(0,I.tZ)(y.ZP,{item:!0,xs:8,md:4,children:(0,I.tZ)(g.Z,{component:"img",alt:"snippet of the screen to take",src:Bt,width:"100%",height:"auto"})}),(0,I.BX)(y.ZP,{item:!0,xs:12,md:8,children:[(0,I.tZ)(S.Z,{gutterBottom:!0,children:"Using screenshots can dramatically decrease the amount of time you manually input in stats on the Genshin Optimizer."}),(0,I.tZ)(S.Z,{variant:"h5",children:"Where to snip the screenshot."}),(0,I.BX)(S.Z,{gutterBottom:!0,children:["In game, Open your bag, and navigate to the artifacts tab. Select the artifact you want to scan with Genshin Optimizer. ",(0,I.tZ)("b",{children:"Only artifact from this screen can be scanned."})]}),(0,I.tZ)(S.Z,{variant:"h6",children:"Single artifact"}),(0,I.BX)(S.Z,{gutterBottom:!0,children:["To take a screenshot, in Windows, the shortcut is ",(0,I.tZ)("strong",{children:"Shift + WindowsKey + S"}),". Once you selected the region, the image is automatically included in your clipboard."]}),(0,I.tZ)(S.Z,{variant:"h6",children:"Multiple artifacts"}),(0,I.BX)(S.Z,{gutterBottom:!0,children:["To take advantage of batch uploads, you can use a tool like ",(0,I.tZ)("a",{href:"https://picpick.app/",target:"_blank",rel:"noreferrer",children:"PicPick"})," to create a macro to easily to screenshot a region to screenshot multiple artifacts at once."]}),(0,I.tZ)(S.Z,{variant:"h5",children:"What to include in the screenshot."}),(0,I.tZ)(S.Z,{children:"As shown in the Image, starting from the top with the artifact name, all the way to the set name(the text in green). "})]}),(0,I.BX)(y.ZP,{item:!0,xs:12,md:7,children:[(0,I.tZ)(S.Z,{variant:"h5",children:"Adding Screenshot to Genshin Optimizer"}),(0,I.tZ)(S.Z,{children:"At this point, you should have the artifact snippet either saved to your harddrive, or in your clipboard."}),(0,I.tZ)(S.Z,{gutterBottom:!0,children:'You can click on the box next to "Browse" to browse the files in your harddrive for multiple screenshots.'}),(0,I.BX)(S.Z,{children:["For single screenshots from the snippets, just press ",(0,I.tZ)("strong",{children:"Ctrl + V"})," to paste from your clipboard."]}),(0,I.BX)(S.Z,{gutterBottom:!0,children:["You should be able to see a Preview of your artifact snippet, and after waiting a few seconds, the artifact set and the substats will be filled in in the ",(0,I.tZ)("b",{children:"Artifact Editor"}),"."]}),(0,I.tZ)(S.Z,{variant:"h5",children:"Finishing the Artifact"}),(0,I.BX)(S.Z,{children:["Unfortunately, computer vision is not 100%. There will always be cases where something is not scanned properly. You should always double check the scanned artifact values! Once the artifact has been filled, Click on ",(0,I.tZ)("strong",{children:"Add Artifact"})," to finish editing the artifact."]})]}),(0,I.tZ)(y.ZP,{item:!0,xs:8,md:5,children:(0,I.tZ)(g.Z,{component:"img",alt:"main screen after importing stats",src:Ct,width:"100%",height:"auto"})})]})]}),(0,I.tZ)(T.Z,{}),(0,I.tZ)(p.Z,{sx:{py:1},children:(0,I.tZ)(H.Z,{large:!0,onClick:e})})]})})}var Et=n(24370),It=n(2344);const At={r:255,g:204,b:50},Ot=new class{constructor(t,e){this.data={},this.init=void 0,this.deinit=void 0,this.init=t,this.deinit=e}async borrow(t,e){this.data[t]||(this.data[t]={value:this.init(t),refCount:0});const n=this.data[t];n.refCount+=1;const i=await e(n.value);return n.refCount-=1,n.refCount||(delete this.data[t],this.deinit(t,n.value)),i}}((async t=>{const e=(0,Et.createScheduler)(),n=Array(2).fill(0).map((async n=>{const i=await(0,Et.createWorker)({errorHandler:console.error});await i.load(),await i.loadLanguage(t),await i.initialize(t),e.addWorker(i)}));return await Promise.any(n),e}),((t,e)=>{e.then((t=>t.terminate()))})),Rt=(t,e)=>{switch(e.type){case"upload":return{processed:t.processed,outstanding:[...t.outstanding,...e.files]};case"processing":return{processed:t.processed,outstanding:[...t.outstanding]};case"processed":return t.outstanding[0].file===e.file?{processed:[...t.processed,e.result],outstanding:t.outstanding.slice(1)}:t;case"pop":return{processed:t.processed.slice(1),outstanding:t.outstanding};case"clear":return{processed:[],outstanding:[]}}};function Ut(t){if(t.result)return;const{file:e,fileName:n}=t;t.imageURL=Gt(e),t.result=t.imageURL.then((async t=>{const r=await async function(t){const e=await(d=t,new Promise((t=>{const e=new Image;e.onload=({target:e})=>t(function(t){const e=document.createElement("canvas"),n=e.getContext("2d");return e.width=t.width,e.height=t.height,n.drawImage(t,0,0,t.width,t.height),n.getImageData(0,0,t.width,t.height)}(e)),e.src=d}))),n=e.width,i=Math.floor(e.height/2),r={rectangle:{top:i,left:0,width:n,height:i}},a=[$t(Tt(e,[140,140,140],[255,255,255],{mode:"bw",region:"top"})),$t(Tt(e,[30,50,80],[160,160,160],{region:"bot"}),r),$t(Tt(e,[30,160,30],[200,255,200],{mode:"bw",region:"bot"}),r)],l=function(t,e,n){const i=t;let r=0,a=0;const l=new Set([]);for(let s=0;s<n;s++){let t=0,n=!1;for(let r=0;r<e;r++){const a=4*(s*e+r);Mt({r:i[a],g:i[a+1],b:i[a+2]},At)?n||(n=!0,t++):n=!1}r!==t?(r=t,a=1):r&&(a++,a>=10&&l.add((0,dt.uZ)(r,3,5)))}return l}(e.data,e.width,e.height),[s,o,c]=await Promise.all(a);var d;return{whiteTexts:s,substatTexts:o,artifactSetTexts:c,rarities:l}}(t),[a,l]=function(t,e,n,r,a,l){const s=[...new Set([...e,"EmblemOfSeveredFate"])];let o=-1,c=[{setKey:"EmblemOfSeveredFate",rarity:3,level:0,slotKey:"flower",mainStatKey:"hp",substats:[],location:"",lock:!1,exclude:!1}];const d=(0,dt.O)(B.En,(t=>{let n=0;if(e.size){n+=[...e].reduce(((e,n)=>e+((0,tt.Sk)(n).rarity.includes(t)?1:0)),0)/e.size}if(r.length){n+=r.reduce(((e,n)=>e+(et.ZP.getSubstatRolls(n.key,n.value,t).length?1:0)),0)/r.length*2}return n}));for(const S of i.eV)for(const t of et.ZP.slotMainStats(S)){const i=(n.has(S)?1:0)+(a.has(t)?1:0),r=l.filter((e=>"%"!==e.unit||"%"===rt.ZP.unit(t))).map((t=>t.mainStatValue));for(const[n,a]of Object.entries(d)){const l=parseInt(n),d=s.filter((t=>(0,tt.Sk)(t).rarity.includes(l))),u=i+a;if(!(u+2<o)){for(const n of r){const i=et.ZP.mainStatValues(l,t),r=Math.max(0,i.findIndex((t=>t>=n))),a=u+(i[r]===n?1:0);for(const n of d){const i=a+(e.has(n)?1:0);i>=o&&(i>o&&(c=[]),o=i,c.push({setKey:n,rarity:l,level:r,slotKey:S,mainStatKey:t,substats:[],location:"",lock:!1,exclude:!1}))}}if(u>=o){const n=0;for(const i of d){const r=u+(e.has(i)?1:0);r>o&&(c=[]),o=r,c.push({setKey:i,rarity:l,level:n,slotKey:S,mainStatKey:t,substats:[],location:"",lock:!1,exclude:!1})}}}}}const u={},h={setKey:new Set,rarity:new Set,level:new Set,slotKey:new Set,mainStatKey:new Set,mainStatVal:new Set},Z=c[0],f=et.ZP.mainStatValue(Z.mainStatKey,Z.rarity,Z.level);Z.substats=r.filter(((t,e)=>t.key!==Z.mainStatKey&&r.slice(0,e).every((e=>e.key!==t.key))));for(let i=Z.substats.length;i<4;i++)Z.substats.push({key:"",value:0});for(const i of c)h.setKey.add(i.setKey),h.rarity.add(i.rarity),h.level.add(i.level),h.slotKey.add(i.slotKey),h.mainStatKey.add(i.mainStatKey);function m(t,e,n){return(0,I.BX)(I.HY,{children:["Unknown ",e," : Set to ",(0,I.tZ)(It.Z,{color:"error",children:n(t)})]})}function p(t,e,n,i){return(0,I.BX)(I.HY,{children:["Ambiguous ",n," ",(0,I.tZ)(It.Z,{color:"error",children:i(t)})," : May also be ",e.filter((e=>e!==t)).map(((t,e)=>(0,I.BX)(I.HY,{children:[(0,I.tZ)("b",{children:e>0?"/":""}),(0,I.tZ)(It.Z,{color:"warning",children:i(t)})]})))]})}function y(t,e,n){return(0,I.BX)(I.HY,{children:["Detected ",e," ",(0,I.tZ)(It.Z,{color:"success",children:n(t)})]})}function g(t,e,n){return(0,I.BX)(I.HY,{children:["Inferred ",e," ",(0,I.tZ)(It.Z,{color:"warning",children:n(t)})]})}function v(t,e,n,i){const r=new Set([...h[t]].filter((t=>e.has(t))));r.size>1?u[t]=p(Z[t],[...e],n,i):1===r.size?u[t]=y(Z[t],n,i):h[t].size>1?u[t]=m(Z[t],n,i):u[t]=g(Z[t],n,i)}v("setKey",e,"Set",(t=>(0,tt.Sk)(t).name)),v("rarity",t,"Rarity",(t=>(0,I.BX)(I.HY,{children:[t," ",1!==t?"Stars":"Star"]}))),v("slotKey",n,"Slot",(t=>(0,I.tZ)(I.HY,{children:et.ZP.slotName(t)}))),v("mainStatKey",a,"Main Stat",(t=>(0,I.tZ)(I.HY,{children:rt.ZP.getStr(t)}))),u.substats=(0,I.tZ)(I.HY,{children:Z.substats.filter((t=>""!==t.key)).map(((t,e)=>(0,I.tZ)("div",{children:y(t,"Sub Stat",(t=>(0,I.BX)(I.HY,{children:[rt.ZP.getStr(t.key),"+",(0,rt.qs)(t.value,rt.ZP.unit(t.key)),rt.ZP.unit(t.key)]})))},e)))});const b=t=>(0,I.BX)(I.HY,{children:[(0,rt.qs)(t,rt.ZP.unit(Z.mainStatKey)),rt.ZP.unit(Z.mainStatKey)]});l.find((t=>t.mainStatValue===f))?a.has(Z.mainStatKey)?(u.level=y(Z.level,"Level",(t=>"+"+t)),u.mainStatVal=y(f,"Main Stat value",b)):(u.level=g(Z.level,"Level",(t=>"+"+t)),u.mainStatVal=g(f,"Main Stat value",b)):(u.level=m(Z.level,"Level",(t=>"+"+t)),u.mainStatVal=m(f,"Main Stat value",b));return[Z,u]}(r.rarities,function(t){const e=new Set([]);for(const n of t)for(const t of i.q2)(0,dt.UX)(n.replace(/\W/g,""),(0,tt.Sk)(t).nameRaw.replace(/\W/g,""))<=2&&e.add(t);return e}(r.artifactSetTexts),function(t){const e=new Set;for(const n of t)for(const t of i.eV)(0,dt.UX)(n.replace(/\W/g,""),et.ZP.slotName(t).replace(/\W/g,""))<=2&&e.add(t);return e}(r.whiteTexts),function(t){const e=[];for(let n of t)n=n.replace(/^[\W]+/,"").replace(/\n/,""),ot._.forEach((t=>{const i=rt.ZP.getStr(t),r=("%"===rt.ZP.unit(t)?new RegExp(i+"\\s*\\+\\s*(\\d+[\\.|,]+\\d)%","im"):new RegExp(i+"\\s*\\+\\s*(\\d+,\\d+|\\d+)($|\\s)","im")).exec(n);r&&e.push({key:t,value:parseFloat(r[1].replace(/,/g,".").replace(/\.{2,}/g,"."))})}));return e.slice(0,4)}(r.substatTexts),function(t){const e=new Set([]);for(const a of t)for(const t of ot.r){var n,i,r;a.toLowerCase().includes(null!=(n=null==(i=rt.ZP.getStr(t))?void 0:i.toLowerCase())?n:"")&&e.add(t),t.includes("_bonu")&&(0,dt.UX)(a.replace(/\W/g,""),(null!=(r=rt.ZP.getStr(t))?r:"").replace(/\W/g,""))<=1&&e.add(t)}return e}(r.whiteTexts),function(t){const e=[];for(const n of t){let t=/(\d+[,|\\.]+\d)%/,i=t.exec(n);i&&e.push({mainStatValue:parseFloat(i[1].replace(/,/g,".").replace(/\.{2,}/g,".")),unit:"%"}),t=/(\d+[,|\\.]\d{3}|\d{2,3})/,i=t.exec(n),i&&e.push({mainStatValue:parseInt(i[1].replace(/[,|\\.]+/g,""))})}return e}(r.whiteTexts));return{file:e,result:{fileName:n,imageURL:t,artifact:a,texts:l}}}))}const Gt=t=>new Promise((e=>{const n=new FileReader;n.onloadend=({target:t})=>e(t.result),n.readAsDataURL(t)}));async function $t(t,e){const n=function(t){const e=document.createElement("canvas");return e.width=t.width,e.height=t.height,e.getContext("2d").putImageData(t,0,0),e}(t);return(await Ot.borrow("eng",(async t=>await(await t).addJob("recognize",n,e)))).data.lines.map((t=>t.text))}function Mt(t,e,n=5){const i=(t,e)=>Math.abs(t-e)<=n;return i(t.r,e.r)&&i(t.g,e.g)&&i(t.b,e.b)}function Tt(t,e,n,i){const{region:r="all",mode:a="color"}=i,l=Uint8ClampedArray.from(t.data),s="top"===r,o="bot"===r,c="all"===r,d="bw"===a,u="invert"===a,h=Math.floor(t.width*(t.height/2)*4);for(let Z=0;Z<l.length;Z+=4){const t=l[Z],i=l[Z+1],r=l[Z+2];(c||s&&Z<h||o&&Z>h)&&t>=e[0]&&t<=n[0]&&i>=e[1]&&i<=n[1]&&r>=e[2]&&r<=n[2]?d?l[Z]=l[Z+1]=l[Z+2]=0:u&&(l[Z]=255-t,l[Z+1]=255-i,l[Z+2]=255-r):l[Z]=l[Z+1]=l[Z+2]=255}return new ImageData(l,t.width,t.height)}let zt,Dt,Lt,Vt,Nt,Wt,jt,Ht,Ft,Yt,qt,_t,Jt=t=>t;const Qt=new Set(ot._);function te(t,e){switch(e.type){case"reset":return;case"substat":{const{index:n,substat:i}=e,r=i.key?t.substats.findIndex((t=>t.key===i.key)):-1;return-1===r||r===n?t.substats[n]=i:[t.substats[n],t.substats[r]]=[t.substats[r],t.substats[n]],Object.assign({},t)}case"overwrite":return e.artifact;case"update":return Object.assign({},t,e.artifact)}}const ee=(0,u.ZP)("input")({display:"none"});function ne({artifactIdToEdit:t="",cancelEdit:e,allowUpload:n=!1,allowEmpty:u=!1,disableSet:C=!1,disableSlot:B=!1}){var E,A;const{t:O}=(0,K.$G)("artifact"),{database:R}=(0,P.useContext)(nt.t),[$,M]=(0,P.useState)(!1),[T,z]=(0,lt.Z)();(0,P.useEffect)((()=>R.arts.followAny(z)),[R,z]);const[D,L]=(0,P.useReducer)(te,void 0),V=(0,P.useMemo)((()=>D&&(0,it.BG)(D)),[D]),[F,Y]=(0,P.useState)(!1),[{processed:ot,outstanding:ct},ht]=(0,P.useReducer)(Rt,{processed:[],outstanding:[]}),Zt=ot[0],mt=ct[0],pt=st((()=>null==mt?void 0:mt.imageURL),[null==mt?void 0:mt.imageURL]),yt=st((()=>null==mt?void 0:mt.result),[null==mt?void 0:mt.result]),gt=ot.length+ct.length,vt=null!=(E=null==Zt?void 0:Zt.imageURL)?E:pt,{artifact:bt,texts:St}=null!=Zt?Zt:{},wt=!(null==V||!V.location)||B;(0,P.useEffect)((()=>{!V&&bt&&L({type:"overwrite",artifact:bt})}),[V,bt,L]),(0,P.useEffect)((()=>{const t=Math.min(16-ot.length,3,ct.length),e=t&&!ct[0].result;ct.slice(0,t).forEach(Ut),e&&ht({type:"processing"})}),[ot.length,ct]),(0,P.useEffect)((()=>{yt&&ht(Object.assign({type:"processed"},yt))}),[yt,ht]);const xt=(0,P.useCallback)((t=>{t&&(M(!0),ht({type:"upload",files:Array.from(t).map((t=>({file:t,fileName:t.name})))}))}),[ht,M]),kt=(0,P.useCallback)((()=>ht({type:"clear"})),[ht]);(0,P.useEffect)((()=>{const t=t=>{var e;return xt(null==(e=t.clipboardData)?void 0:e.files)};return n&&window.addEventListener("paste",t),()=>{n&&window.removeEventListener("paste",t)}}),[xt,n]);const Pt=(0,P.useCallback)((t=>{t.target&&(xt(t.target.files),t.target.value="")}),[xt]),{old:Ct,oldType:Bt}=(0,P.useMemo)((()=>{var e;const n=T&&t&&R.arts.get(t);if(n)return{old:n,oldType:"edit"};if(void 0===V)return{old:void 0,oldType:""};const{duplicated:i,upgraded:r}=T&&R.arts.findDups(V);return{old:null!=(e=i[0])?e:r[0],oldType:0!==i.length?"duplicate":"upgrade"}}),[V,t,R,T]),{artifact:Et,errors:It}=(0,P.useMemo)((()=>{if(!V)return{artifact:void 0,errors:[]};const e=(0,it.m1)(V,t);return Ct&&(e.artifact.location=Ct.location,e.artifact.exclude=Ct.exclude),e}),[V,t,Ct]);(0,P.useEffect)((()=>{"new"===t&&(M(!0),L({type:"reset"}));const e=t&&T&&R.arts.get(t);e&&(M(!0),L({type:"overwrite",artifact:(0,dt.I8)(e)}))}),[t,R,T]);const At=V?(0,tt.Sk)(V.setKey):void 0,Ot=(0,P.useCallback)((()=>{null==e||e(),ht({type:"pop"}),L({type:"reset"})}),[e,L]),Gt=(0,P.useCallback)((t=>{var e,n;const i=t.setKey?(0,tt.Sk)(t.setKey):At;function r(t,e,n){return t&&e.includes(t)?t:null!=n?n:e[0]}t.setKey&&(t.rarity=r(null==V?void 0:V.rarity,i.rarity,Math.max(...i.rarity)),t.slotKey=r(null==V?void 0:V.slotKey,i.slots)),t.rarity&&(t.level=null!=(e=null==V?void 0:V.level)?e:0),t.level&&(t.level=(0,dt.uZ)(t.level,0,4*(null!=(n=t.rarity)?n:V.rarity))),t.slotKey&&(t.mainStatKey=r(null==V?void 0:V.mainStatKey,et.ZP.slotMainStats(t.slotKey))),t.mainStatKey&&(t.substats=[0,1,2,3].map((e=>V&&V.substats[e].key!==t.mainStatKey?V.substats[e]:{key:"",value:0}))),L({type:"update",artifact:t})}),[V,At,L]),$t=(0,P.useCallback)(((t,e)=>{L({type:"substat",index:t,substat:e})}),[L]),Mt=!It.length,{rarity:Tt=5,level:ne=0,slotKey:ie="flower"}=null!=V?V:{},{currentEfficiency:re=0,maxEfficiency:ae=0}=Et?et.ZP.getArtifactEfficiency(Et,Qt):{},le=ot.length||ct.length,se=(0,P.useCallback)((t=>{le&&t.preventDefault(),M(!1),e()}),[le,M,e]),oe=(0,h.Z)(),ce=(0,Z.Z)(oe.breakpoints.up("md")),de=V?i.Kj.find((t=>V.mainStatKey.includes(t))):void 0,ue=V?null!=de?de:"success":"primary",he=(0,P.useCallback)((t=>Gt({setKey:t})),[Gt]),Ze=(0,P.useCallback)((t=>""===t||!(!wt||"circlet"===ie||"PrayersForDestiny"!==t&&"PrayersForIllumination"!==t&&"PrayersForWisdom"!==t&&"PrayersToSpringtime"!==t)),[wt,ie]);return(0,I.tZ)(J.Z,{open:$,onClose:se,children:(0,I.tZ)(P.Suspense,{fallback:(0,I.tZ)(f.Z,{variant:"rectangular",sx:{width:"100%",height:$?"100%":64}}),children:(0,I.BX)(W.Z,{children:[(0,I.tZ)(Xt,{modalShow:F,hide:()=>Y(!1)}),(0,I.tZ)(m.Z,{title:(0,I.tZ)(K.cC,{t:O,i18nKey:"editor.title",children:"Artifact Editor"}),action:(0,I.tZ)(H.Z,{disabled:!!le,onClick:se})}),(0,I.BX)(p.Z,{sx:{display:"flex",flexDirection:"column",gap:1},children:[(0,I.BX)(y.ZP,{container:!0,spacing:1,columns:{xs:1,md:2},children:[(0,I.BX)(y.ZP,{item:!0,xs:1,display:"flex",flexDirection:"column",gap:1,children:[(0,I.BX)(g.Z,{sx:{display:"flex",gap:1},children:[(0,I.tZ)(G.Z,{disabled:C,size:"small",artSetKey:null!=(A=null==V?void 0:V.setKey)?A:"",setArtSetKey:he,sx:{flexGrow:1},label:null!=V&&V.setKey?"":O("editor.unknownSetName"),getOptionDisabled:({key:t})=>Ze(t)}),(0,I.tZ)(U,{rarity:V?Tt:void 0,onChange:t=>Gt({rarity:t}),filter:t=>{var e;return!(null==At||null==(e=At.rarity)||null==e.includes||!e.includes(t))},disabled:!At})]}),(0,I.BX)(g.Z,{component:"div",display:"flex",children:[(0,I.tZ)(q,{id:"filled-basic",label:"Level",variant:"filled",sx:{flexShrink:1,flexGrow:1,mr:1,my:0},margin:"dense",size:"small",value:ne,disabled:!At,placeholder:"0~"+4*Tt,onChange:t=>Gt({level:t})}),(0,I.BX)(v.Z,{children:[(0,I.tZ)(b.Z,{onClick:()=>Gt({level:ne-1}),disabled:!At||0===ne,children:"-"}),Tt?[...Array(Tt+1).keys()].map((t=>4*t)).map((t=>(0,I.tZ)(b.Z,{onClick:()=>Gt({level:t}),disabled:!At||ne===t,children:t},t))):null,(0,I.tZ)(b.Z,{onClick:()=>Gt({level:ne+1}),disabled:!At||ne===4*Tt,children:"+"})]})]}),(0,I.BX)(g.Z,{component:"div",display:"flex",children:[(0,I.tZ)(N,{disabled:wt||!At,slotKey:ie,onChange:t=>Gt({slotKey:t})}),(0,I.tZ)(j.Z,{sx:{p:1,ml:1,flexGrow:1},children:(0,I.tZ)(P.Suspense,{fallback:(0,I.tZ)(f.Z,{width:"60%"}),children:(0,I.tZ)(S.Z,{color:"text.secondary",children:V&&null!=At&&At.getSlotName(V.slotKey)?(0,I.BX)("span",{children:[(0,I.tZ)(_.Z,{size:2,src:(0,r.Hp)(V.setKey,V.slotKey)}),null==At?void 0:At.getSlotName(V.slotKey)]}):O(Dt||(Dt=Jt`editor.unknownPieceName`))})})})]}),(0,I.BX)(g.Z,{component:"div",display:"flex",children:[(0,I.tZ)(X.Z,{startIcon:null!=V&&V.mainStatKey?(0,I.tZ)(at.C,{statKey:V.mainStatKey}):void 0,title:(0,I.tZ)("b",{children:V?rt.ZP.getArtStr(V.mainStatKey):O(Lt||(Lt=Jt`mainStat`))}),disabled:!At,color:ue,children:et.ZP.slotMainStats(ie).map((t=>(0,I.tZ)(w.Z,{selected:(null==V?void 0:V.mainStatKey)===t,disabled:(null==V?void 0:V.mainStatKey)===t,onClick:()=>Gt({mainStatKey:t}),children:(0,I.tZ)(Q._,{statKey:t})},t)))}),(0,I.tZ)(j.Z,{sx:{p:1,ml:1,flexGrow:1},children:(0,I.tZ)(S.Z,{color:"text.secondary",children:V?`${(0,rt.qs)(et.ZP.mainStatValue(V.mainStatKey,Tt,ne),rt.ZP.unit(V.mainStatKey))}${rt.ZP.unit(V.mainStatKey)}`:O(Vt||(Vt=Jt`mainStat`))})})]}),(0,I.tZ)(ft,{valid:Mt,efficiency:re,t:O}),re!==ae&&(0,I.tZ)(ft,{max:!0,valid:Mt,efficiency:ae,t:O}),n&&(0,I.tZ)(j.Z,{children:(0,I.tZ)(p.Z,{sx:{display:"flex",flexDirection:"column",gap:1},children:(0,I.BX)(P.Suspense,{fallback:(0,I.tZ)(f.Z,{width:"100%",height:"100"}),children:[(0,I.BX)(y.ZP,{container:!0,spacing:1,alignItems:"center",children:[(0,I.tZ)(y.ZP,{item:!0,flexGrow:1,children:(0,I.BX)("label",{htmlFor:"contained-button-file",children:[(0,I.tZ)(ee,{accept:"image/*",id:"contained-button-file",multiple:!0,type:"file",onChange:Pt}),(0,I.tZ)(b.Z,{component:"span",startIcon:(0,I.tZ)(a.Z,{}),children:"Upload Screenshot (or Ctrl-V)"})]})}),(0,I.tZ)(y.ZP,{item:!0,children:(0,I.tZ)(b.Z,{color:"info",sx:{px:2,minWidth:0},onClick:()=>Y(!0),children:(0,I.tZ)(d.Z,{})})})]}),vt&&(0,I.tZ)(g.Z,{display:"flex",justifyContent:"center",children:(0,I.tZ)(g.Z,{component:"img",src:vt,width:"100%",maxWidth:350,height:"auto",alt:"Screenshot to parse for artifact values"})}),gt>0&&(0,I.tZ)(W.Z,{sx:{pl:2},children:(0,I.BX)(y.ZP,{container:!0,spacing:1,alignItems:"center",children:[!Zt&&mt&&(0,I.tZ)(y.ZP,{item:!0,children:(0,I.tZ)(x.Z,{size:"1em"})}),(0,I.tZ)(y.ZP,{item:!0,flexGrow:1,children:(0,I.tZ)(S.Z,{children:(0,I.BX)("span",{children:["Screenshots in file-queue: ",(0,I.tZ)("b",{children:gt})]})})}),(0,I.tZ)(y.ZP,{item:!0,children:(0,I.tZ)(b.Z,{size:"small",color:"error",onClick:kt,children:"Clear file-queue"})})]})})]})})})]}),(0,I.BX)(y.ZP,{item:!0,xs:1,display:"flex",flexDirection:"column",gap:1,children:[[0,1,2,3].map((t=>(0,I.tZ)(Kt,{index:t,artifact:Et,setSubstat:$t},t))),St&&(0,I.tZ)(j.Z,{children:(0,I.BX)(p.Z,{children:[(0,I.tZ)("div",{children:St.slotKey}),(0,I.tZ)("div",{children:St.mainStatKey}),(0,I.tZ)("div",{children:St.mainStatVal}),(0,I.tZ)("div",{children:St.rarity}),(0,I.tZ)("div",{children:St.level}),(0,I.tZ)("div",{children:St.substats}),(0,I.tZ)("div",{children:St.setKey})]})})]})]}),Ct&&(0,I.BX)(y.ZP,{container:!0,sx:{justifyContent:"space-around"},spacing:1,children:[(0,I.tZ)(y.ZP,{item:!0,xs:12,md:5.5,lg:4,children:(0,I.BX)(j.Z,{children:[(0,I.tZ)(S.Z,{sx:{textAlign:"center"},py:1,variant:"h6",color:"text.secondary",children:O("edit"!==Bt?"duplicate"===Bt?Nt||(Nt=Jt`editor.dupArt`):Wt||(Wt=Jt`editor.upArt`):jt||(jt=Jt`editor.beforeEdit`))}),(0,I.tZ)(ut.Z,{artifactObj:Ct})]})}),ce&&(0,I.tZ)(y.ZP,{item:!0,md:1,display:"flex",alignItems:"center",justifyContent:"center",children:(0,I.tZ)(j.Z,{sx:{display:"flex"},children:(0,I.tZ)(l.Z,{sx:{fontSize:40}})})}),(0,I.tZ)(y.ZP,{item:!0,xs:12,md:5.5,lg:4,children:(0,I.BX)(j.Z,{children:[(0,I.tZ)(S.Z,{sx:{textAlign:"center"},py:1,variant:"h6",color:"text.secondary",children:O(Ht||(Ht=Jt`editor.preview`))}),(0,I.tZ)(ut.Z,{artifactObj:Et})]})})]}),!Mt&&(0,I.tZ)(k.Z,{variant:"filled",severity:"error",children:It.map(((t,e)=>(0,I.tZ)("div",{children:t},e)))}),(0,I.BX)(y.ZP,{container:!0,spacing:2,children:[(0,I.tZ)(y.ZP,{item:!0,children:"edit"===Bt?(0,I.tZ)(b.Z,{startIcon:(0,I.tZ)(s.Z,{}),onClick:()=>{R.arts.set(Ct.id,D),u?Ot():(M(!1),e())},disabled:!D||!Mt,color:"primary",children:O(Ft||(Ft=Jt`editor.btnSave`))}):(0,I.tZ)(b.Z,{startIcon:(0,I.tZ)(s.Z,{}),onClick:()=>{R.arts.new(V),u?Ot():(M(!1),e())},disabled:!V||!Mt,color:"duplicate"===Bt?"warning":"primary",children:O(Yt||(Yt=Jt`editor.btnAdd`))})}),(0,I.tZ)(y.ZP,{item:!0,flexGrow:1,children:u&&(0,I.tZ)(b.Z,{startIcon:(0,I.tZ)(o.Z,{}),disabled:!V,onClick:()=>{window.confirm(O(zt||(zt=Jt`editor.clearPrompt`)))&&Ot()},color:"error",children:O(qt||(qt=Jt`editor.btnClear`))})}),(0,I.tZ)(y.ZP,{item:!0,children:!1}),Ct&&"edit"!==Bt&&(0,I.tZ)(y.ZP,{item:!0,children:(0,I.tZ)(b.Z,{startIcon:(0,I.tZ)(c.Z,{}),onClick:()=>{R.arts.set(Ct.id,Object.assign({},D,{location:Ct.location})),u?Ot():M(!1)},disabled:!D||!Mt,color:"success",children:O(_t||(_t=Jt`editor.btnUpdate`))})})]})]})]})})})}}}]);