"use strict";(self.webpackChunkgenshin_optimizer=self.webpackChunkgenshin_optimizer||[]).push([[409,361],{73578:function(e,n,r){r.d(n,{Z:function(){return f}});var i=r(1413),s=r(45987),t=r(93433),a=r(90388),o=r(10658),l=r(24351),c=r(75308),u=r(55942),d=r(91839),x=r(80184),Z=["value","onChange"],h=(0,c.X)((0,t.Z)(l.yd));function f(e){var n=e.value,r=e.onChange,t=(0,s.Z)(e,Z);return(0,x.jsx)(d.Z,(0,i.Z)((0,i.Z)({exclusive:!0,value:n},t),{},{children:l.yd.map((function(e){var i;return(0,x.jsx)(a.Z,{value:e,onClick:function(){return r(h(n,e))},children:(0,x.jsx)(u.Z,{src:null===(i=o.Z.weaponTypes)||void 0===i?void 0:i[e],size:2})},e)}))}))}},44361:function(e,n,r){r.r(n),r.d(n,{default:function(){return b}});var i=r(93433),s=r(29439),t=r(39504),a=r(61889),o=r(58165),l=r(94721),c=r(66647),u=r(68870),d=r(20890),x=r(72791),Z=r(22020),h=r(10658),f=r(66218),p=r(42320),j=r(24351),g=r(3992),v=r(71310),m=r(68198),w=r(55942),y=r(9321),C=r(10157),k=r(73578),P=r(80184);function b(e){var n=e.show,r=e.ascension,b=void 0===r?0:r,z=e.onHide,T=e.onSelect,_=e.filter,N=void 0===_?function(){return!0}:_,G=e.weaponTypeFilter,S=(0,Z.$)(["page_weapon","weaponNames_gen"]).t,F=(0,p.Z)((function(){return f.Z.getAll}),[]),I=(0,x.useState)(G?[G]:(0,i.Z)(j.yd)),L=(0,s.Z)(I,2),q=L[0],A=L[1];(0,x.useEffect)((function(){return G&&A([G])}),[G]);var D=(0,x.useState)(""),E=(0,s.Z)(D,2),H=E[0],V=E[1],X=(0,x.useDeferredValue)(H),$=F?j.fG.filter((function(e){return N(F(e))})).filter((function(e){return q.includes(F(e).weaponType)})).filter((function(e){return!X||S("weaponNames_gen:".concat(e)).toLowerCase().includes(X.toLowerCase())})).sort((function(e,n){return F(n).rarity-F(e).rarity})):[];return F?(0,P.jsx)(y.Z,{open:n,onClose:z,children:(0,P.jsxs)(g.Z,{children:[(0,P.jsx)(t.Z,{sx:{py:1},children:(0,P.jsxs)(a.ZP,{container:!0,spacing:1,children:[(0,P.jsx)(a.ZP,{item:!0,children:(0,P.jsx)(k.Z,{value:q,onChange:A,disabled:!!G,size:"small"})}),(0,P.jsx)(a.ZP,{item:!0,flexGrow:1,children:(0,P.jsx)(o.Z,{autoFocus:!0,size:"small",value:H,onChange:function(e){return V(e.target.value)},label:S("weaponName"),sx:{height:"100%"},InputProps:{sx:{height:"100%"}}})}),(0,P.jsx)(a.ZP,{item:!0,children:(0,P.jsx)(m.Z,{onClick:z})})]})}),(0,P.jsx)(l.Z,{}),(0,P.jsx)(t.Z,{children:(0,P.jsx)(a.ZP,{container:!0,spacing:1,children:$.map((function(e){var n,r=F(e);return(0,P.jsx)(a.ZP,{item:!0,lg:3,md:4,children:(0,P.jsx)(v.Z,{sx:{height:"100%"},children:(0,P.jsxs)(c.Z,{onClick:function(){z(),T(e)},sx:{display:"flex"},children:[(0,P.jsx)(u.Z,{component:"img",src:r.getImg(b),sx:{width:100,height:"auto"},className:" grad-".concat(r.rarity,"star")}),(0,P.jsxs)(u.Z,{sx:{flexGrow:1,px:1},children:[(0,P.jsx)(d.Z,{variant:"subtitle1",children:r.name}),(0,P.jsxs)(d.Z,{children:[(0,P.jsx)(w.Z,{src:null===(n=h.Z.weaponTypes)||void 0===n?void 0:n[r.weaponType]})," ",(0,P.jsx)(C.q,{stars:r.rarity,colored:!0})]})]})]})})},e)}))})}),(0,P.jsx)(l.Z,{}),(0,P.jsx)(t.Z,{sx:{py:1},children:(0,P.jsx)(m.Z,{large:!0,onClick:z})})]})}):null}}}]);
//# sourceMappingURL=409.10fb87f8.chunk.js.map