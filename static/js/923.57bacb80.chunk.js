"use strict";(self.webpackChunkgenshin_optimizer=self.webpackChunkgenshin_optimizer||[]).push([[923],{74476:function(e,n,i){i.r(n),i.d(n,{default:function(){return L}});var s=i(29439),t=i(40117),o=i(62002),r=i(63204),l=i(39504),a=i(61889),c=i(68870),d=i(20890),u=i(2199),x=i(24518),p=i(9585),f=i(94721),h=i(15021),Z=i(72791),j=i(22020),m=i(3992),v=i(71310),y=i(31038),g=i(68198),w=i(37503),k=i(88034),b=i(29371),C=i(9321),P=i(6805),T=i(10157),W=i(44361),D=i(13746),I=i(947),R=i(2139),z=i(66218),B=i(34369),N=i(26138),S=i(73036),E=i(24711),F=i(42320),G=i(74480),K=i(80184);function L(e){var n,i=e.weaponId,L=e.footer,M=void 0!==L&&L,_=e.onClose,q=e.extraButtons,H=(0,j.$)("ui").t,J=(0,Z.useContext)(D.R).data,U=(0,Z.useContext)(B.t).database,$=(0,G.Z)(i),A=null!==$&&void 0!==$?$:{},O=A.key,Q=void 0===O?"":O,V=A.level,X=void 0===V?0:V,Y=A.refinement,ee=void 0===Y?1:Y,ne=A.ascension,ie=void 0===ne?0:ne,se=A.lock,te=A.location,oe=void 0===te?"":te,re=A.id,le=(0,F.Z)((function(){return z.Z.get(Q)}),[Q]),ae=(0,Z.useCallback)((function(e){U.weapons.set(i,e)}),[i,U]),ce=(0,F.Z)((function(){return oe?I.Z.get(oe):void 0}),[oe]),de=ce&&ce.weaponTypeKey,ue=(0,Z.useCallback)((function(e){return re&&U.weapons.set(re,{location:e})}),[U,re]),xe=(0,Z.useCallback)((function(e){return e.weaponTypeKey===(null===le||void 0===le?void 0:le.weaponType)}),[le]),pe=(0,E.Z)(),fe=(0,s.Z)(pe,3),he=fe[0],Ze=fe[1],je=fe[2],me=null===le||void 0===le?void 0:le.getImg(ie);(0,Z.useEffect)((function(){if(le&&ae&&le.key===(null===$||void 0===$?void 0:$.key)&&le.rarity<=2&&(X>70||ie>4)){var e=(0,s.Z)(R.vF[0],2),n=e[0],i=e[1];ae({level:n,ascension:i})}}),[le,$,ae,X,ie]);var ve=(0,Z.useMemo)((function(){return le&&$&&(0,S.mP)([le.data,(0,S.v0)($)])}),[le,$]);return(0,K.jsx)(C.Z,{open:!!i,onClose:_,containerProps:{maxWidth:"md"},children:(0,K.jsxs)(v.Z,{children:[(0,K.jsx)(W.Z,{ascension:ie,show:he,onHide:je,onSelect:function(e){return ae({key:e})},weaponTypeFilter:de}),(0,K.jsx)(l.Z,{children:le&&ve&&(0,K.jsxs)(a.ZP,{container:!0,spacing:1.5,children:[(0,K.jsx)(a.ZP,{item:!0,xs:12,sm:3,children:(0,K.jsxs)(a.ZP,{container:!0,spacing:1.5,children:[(0,K.jsx)(a.ZP,{item:!0,xs:6,sm:12,children:(0,K.jsx)(c.Z,{component:"img",src:me,className:"grad-".concat(le.rarity,"star"),sx:{maxWidth:256,width:"100%",height:"auto",borderRadius:1}})}),(0,K.jsx)(a.ZP,{item:!0,xs:6,sm:12,children:(0,K.jsx)(d.Z,{children:(0,K.jsx)("small",{children:le.description})})})]})}),(0,K.jsxs)(a.ZP,{item:!0,xs:12,sm:9,sx:{display:"flex",flexDirection:"column",gap:1},children:[(0,K.jsx)(c.Z,{display:"flex",gap:1,flexWrap:"wrap",justifyContent:"space-between",children:(0,K.jsxs)(u.Z,{children:[(0,K.jsx)(x.Z,{color:"info",onClick:Ze,children:null!==(n=null===le||void 0===le?void 0:le.name)&&void 0!==n?n:"Select a Weapon"}),(null===le||void 0===le?void 0:le.hasRefinement)&&(0,K.jsx)(P.Z,{refinement:ee,setRefinement:function(e){return ae({refinement:e})}}),q]})}),(0,K.jsxs)(c.Z,{display:"flex",gap:1,flexWrap:"wrap",justifyContent:"space-between",children:[le&&(0,K.jsx)(b.Z,{level:X,ascension:ie,setBoth:ae,useLow:!le.hasRefinement}),(0,K.jsx)(x.Z,{color:"error",onClick:function(){return re&&U.weapons.set(re,{lock:!se})},startIcon:se?(0,K.jsx)(t.Z,{}):(0,K.jsx)(o.Z,{}),children:se?"Locked":"Unlocked"})]}),(0,K.jsx)(d.Z,{children:(0,K.jsx)(T.q,{stars:le.rarity})}),(0,K.jsx)(d.Z,{variant:"subtitle1",children:(0,K.jsx)("strong",{children:le.passiveName})}),(0,K.jsx)(d.Z,{gutterBottom:!0,children:le.passiveName&&le.passiveDescription(ve.get(N.ri.weapon.refineIndex).value)}),(0,K.jsxs)(c.Z,{display:"flex",flexDirection:"column",gap:1,children:[(0,K.jsxs)(m.Z,{children:[(0,K.jsx)(p.Z,{title:"Main Stats",titleTypographyProps:{variant:"subtitle2"}}),(0,K.jsx)(f.Z,{}),(0,K.jsx)(k.lD,{children:[N.ri.weapon.main,N.ri.weapon.sub,N.ri.weapon.sub2].map((function(e,n){var i=ve.get(e);return i.isEmpty||!i.value?null:(0,K.jsx)(k.JW,{node:i,component:h.ZP},i.info.key)}))})]}),J&&le.document&&(0,K.jsx)(w.Z,{sections:le.document})]})]})]})}),M&&re&&(0,K.jsx)(l.Z,{sx:{py:1},children:(0,K.jsxs)(a.ZP,{container:!0,spacing:1,children:[(0,K.jsx)(a.ZP,{item:!0,flexGrow:1,children:(0,K.jsx)(y.Z,{showDefault:!0,size:"small",defaultIcon:(0,K.jsx)(r.Z,{}),defaultText:H("inventory"),value:oe,onChange:ue,filter:xe,disable:function(e){return""===e},disableClearable:!0})}),(0,K.jsx)(a.ZP,{item:!0,flexGrow:2}),!!_&&(0,K.jsx)(a.ZP,{item:!0,children:(0,K.jsx)(g.Z,{sx:{height:"100%"},large:!0,onClick:_})})]})})]})})}}}]);
//# sourceMappingURL=923.57bacb80.chunk.js.map