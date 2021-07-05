(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[15],{171:function(e,t,a){"use strict";a.d(t,"a",(function(){return S}));var n=a(164),i=a(101),r=a(170),c=a(77),s=a(169),l=a(14),o=a(59),u=a(60),d=a(180),v=a(168),j=a(192),b=a(94),f=a(167),h=a(28),m=a(25),O=a(179),p=a(176),g=a(186),y=a(91),x=a(8),L=a(174),S=function(){function e(){if(Object(o.a)(this,e),this instanceof e)throw Error("A static class cannot be instantiated.")}return Object(u.a)(e,null,[{key:"remove",value:function(e){var t=m.a.get(e);t&&(Object.values(t.equippedArtifacts).forEach((function(e){return h.a.moveToNewLocation(e,"")})),m.a.remove(e))}},{key:"getDisplayHeading",value:function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"anemo";if("basicKeys"===e)return"Basic Stats";if("genericAvgHit"===e)return"Generic Optimization Values";if("transReactions"===e)return"Transformation Reaction";if(e.startsWith("talentKey_")){var i,r,c=e.split("talentKey_")[1];return null!==(i=null===t||void 0===t||null===(r=t.getTalentOfKey(c,n))||void 0===r?void 0:r.name)&&void 0!==i?i:c}if(e.startsWith("weapon_")){var s,l=e.split("weapon_")[1];return null!==(s=null===a||void 0===a?void 0:a.name)&&void 0!==s?s:l}return""}}]),e}();S.getElementalName=function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return(null===f.a||void 0===f.a||null===(t=f.a[e])||void 0===t?void 0:t.name)||a},S.getLevelString=function(e){return"".concat(e.level,"/").concat(b.a[e.ascension])},S.getTalentFieldValue=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return(null===e||void 0===e?void 0:e[t])?Object(x.h)(null===e||void 0===e?void 0:e[t],a):n},S.hasOverride=function(e,t){return"finalHP"===t?S.hasOverride(e,"hp")||S.hasOverride(e,"hp_")||S.hasOverride(e,"characterHP")||!1:"finalDEF"===t?S.hasOverride(e,"def")||S.hasOverride(e,"def_")||S.hasOverride(e,"characterDEF")||!1:"finalATK"===t?S.hasOverride(e,"atk")||S.hasOverride(e,"atk_")||S.hasOverride(e,"characterATK")||!1:!!(null===e||void 0===e?void 0:e.baseStatOverrides)&&t in e.baseStatOverrides},S.getBaseStatValue=function(e,t,a,n){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return"specializedStatKey"===n?t.getSpecializedStat(e.ascension):"specializedStatVal"===n?t.getSpecializedStatVal(e.ascension):"weaponATK"===n?L.a.getWeaponMainStatValWithOverride(null===e||void 0===e?void 0:e.weapon,a):"enemyLevel"===n?e.level:n.includes("enemyRes_")?10:n in b.b?b.b[n]:"characterDEF"===n?t.getBase("def",e.level,e.ascension):"characterATK"===n?t.getBase("atk",e.level,e.ascension):"characterHP"===n?t.getBase("hp",e.level,e.ascension):i},S.getStatValueWithOverride=function(e,t,a,n){var i,r,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return S.hasOverride(e,n)?null!==(i=null===e||void 0===e||null===(r=e.baseStatOverrides)||void 0===r?void 0:r[n])&&void 0!==i?i:c:S.getBaseStatValue(e,t,a,n,c)},S.equipArtifacts=function(e,t){var a=m.a.get(e);if(a){var n=a.equippedArtifacts;y.h.forEach((function(a){var i,r,c=h.a.get(t[a]);if((null===c||void 0===c?void 0:c.location)!==e){var s=h.a.get(null===n||void 0===n?void 0:n[a]),l=null!==(i=null===c||void 0===c?void 0:c.location)&&void 0!==i?i:"";s&&h.a.moveToNewLocation(s.id,l),l&&m.a.equipArtifactOnSlot(l,a,null!==(r=null===s||void 0===s?void 0:s.id)&&void 0!==r?r:""),c&&h.a.moveToNewLocation(c.id,e)}})),m.a.equipArtifactBuild(e,t)}},S.calculateBuild=function(e,t,a,n){var i,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;e.artifacts?i=Object.fromEntries(e.artifacts.map((function(e,t){return[t,e]}))):e.equippedArtifacts&&(i=Object.fromEntries(Object.entries(e.equippedArtifacts).map((function(e){var t=Object(l.a)(e,2),a=t[0],n=t[1];return[a,h.a.get(n)]}))));var c=S.createInitialStats(e,t,a);return c.mainStatAssumptionLevel=r,S.calculateBuildwithArtifact(c,i,n)},S.calculateBuildwithArtifact=function(e,t,a){var n,i=d.a.setToSlots(t),r=v.a.setEffectsStats(a,e,i),c=Object(x.f)(e);Object.values(t).forEach((function(e){e&&(c[e.mainStatKey]=(c[e.mainStatKey]||0)+d.a.mainStatValue(e.mainStatKey,e.numStars,Math.max(Math.min(c.mainStatAssumptionLevel,4*e.numStars),e.level)),e.substats.forEach((function(e){return e&&e.key&&(c[e.key]=(c[e.key]||0)+e.value)})))})),r.forEach((function(e){return c[e.key]=(c[e.key]||0)+e.value})),j.a.parseConditionalValues({artifact:null===c||void 0===c||null===(n=c.conditionalValues)||void 0===n?void 0:n.artifact},(function(e,t,a){var n,r,s=Object(l.a)(a,2)[1],o=e.setNumKey;if(!(parseInt(o)>(null!==(n=null===i||void 0===i||null===(r=i[s])||void 0===r?void 0:r.length)&&void 0!==n?n:0))){var u=j.a.resolve(e,c,t).stats;Object.entries(u).forEach((function(e){var t=Object(l.a)(e,2),a=t[0],n=t[1];return c[a]=(c[a]||0)+n}))}})),c.equippedArtifacts=Object.fromEntries(Object.entries(t).map((function(e){var t=Object(l.a)(e,2),a=t[0],n=t[1];return[a,null===n||void 0===n?void 0:n.id]}))),c.setToSlots=i;var s=Object(g.a)(null===c||void 0===c?void 0:c.modifiers);return Object(p.c)(s,c).formula(c),c},S.mergeStats=function(e,t){return t&&Object.entries(t).forEach((function(t){var a=Object(l.a)(t,2),n=a[0],i=a[1];if("modifiers"===n){var r;e.modifiers=null!==(r=e.modifiers)&&void 0!==r?r:{};var c,o=Object(s.a)(Object.entries(i));try{for(o.s();!(c=o.n()).done;){var u,d=Object(l.a)(c.value,2),v=d[0],j=d[1];e.modifiers[v]=null!==(u=e.modifiers[v])&&void 0!==u?u:{};var b,f=Object(s.a)(Object.entries(j));try{for(f.s();!(b=f.n()).done;){var h,m=Object(l.a)(b.value,2),O=m[0],p=m[1];e.modifiers[v][O]=(null!==(h=e.modifiers[v][O])&&void 0!==h?h:0)+p}}catch(g){f.e(g)}finally{f.f()}}}catch(g){o.e(g)}finally{o.f()}}else void 0===e[n]?e[n]=i:"number"===typeof e[n]&&(e[n]+=i)}))},S.createInitialStats=function(e,t,a){var s,o,u,d,v=e=Object(x.f)(e),f=v.characterKey,h=v.elementKey,m=v.level,O=v.ascension,p=v.hitMode,g=v.infusionAura,w=v.reactionMode,N=v.talentLevelKeys,E=v.constellation,k=v.equippedArtifacts,K=v.conditionalValues,A=void 0===K?{}:K,_=v.weapon,C=void 0===_?{key:"",refineIndex:0}:_,T=["characterHP","characterATK","characterDEF","weaponATK","enemyLevel","physical_enemyRes_","physical_enemyImmunity"].concat(Object(c.a)(Object.keys(b.b))),W=Object.fromEntries(T.map((function(n){return[n,S.getStatValueWithOverride(e,t,a,n)]})));W.characterLevel=m,W.characterEle=null!==(s=null!==(o=t.elementKey)&&void 0!==o?o:h)&&void 0!==s?s:"anemo",W.characterKey=f,W.hitMode=p,W.infusionAura=g,W.reactionMode=w,W.conditionalValues=A,W.weaponType=t.weaponTypeKey,W.tlvl=N,W.constellation=E,W.ascension=O;var V=C.key,B=C.refineIndex;W.weapon={key:V,refineIndex:B},W.equippedArtifacts=k,["physical"].concat(Object(c.a)(y.d)).forEach((function(n){var i="".concat(n,"_enemyRes_");W[i]=S.getStatValueWithOverride(e,t,a,i),i="".concat(n,"_enemyImmunity"),W[i]=S.getStatValueWithOverride(e,t,a,i)}));var I=(null===(u=e)||void 0===u?void 0:u.baseStatOverrides)||{};Object.entries(I).forEach((function(e){var t=Object(l.a)(e,2),a=t[0],n=t[1];"specializedStatKey"!==a&&"specializedStatVal"!==a&&(W.hasOwnProperty(a)||(W[a]=n))}));var M=S.getStatValueWithOverride(e,t,a,"specializedStatVal"),z=S.getStatValueWithOverride(e,t,a,"specializedStatKey");for(var F in S.mergeStats(W,Object(r.a)({},z,M)),t.getTalentStatsAll(W,W.characterEle).forEach((function(e){return S.mergeStats(W,e)})),W.tlvl){var R;W.tlvl[F]+=null!==(R=W["".concat(F,"Boost")])&&void 0!==R?R:0}var D=L.a.getWeaponSubstatKey(a);D&&S.mergeStats(W,Object(r.a)({},D,L.a.getWeaponSubstatValWithOverride(null===(d=e)||void 0===d?void 0:d.weapon,a))),S.mergeStats(W,a.stats(W));A.artifact;var P=A.weapon,H=Object(i.a)(A,["artifact","weapon"]);return j.a.parseConditionalValues(Object(n.a)(Object(n.a)({},C.key&&{weapon:Object(r.a)({},C.key,null===P||void 0===P?void 0:P[C.key])}),H),(function(e,t,a){if(j.a.canShow(e,W)){var n=j.a.resolve(e,W,t).stats;S.mergeStats(W,n)}})),W},S.getDisplayStatKeys=function(e,t){var a,i=e.characterEle,r=["finalHP","finalATK","finalDEF","eleMas","critRate_","critDMG_","heal_","enerRech_","".concat(i,"_dmg_")];t.isAutoElemental||r.push("physical_dmg_");var c=Object(x.f)(p.a[i]),s=t.weaponTypeKey;c.includes("shattered_hit")||"claymore"!==s||c.push("shattered_hit");var o={},u=t.getTalent(i);u&&Object.entries(u.formula).forEach((function(t){var a=Object(l.a)(t,2),n=a[0],i=a[1];Object.values(i).forEach((function(t){if(t.field.canShow(e)){"normal"!==n&&"charged"!==n&&"plunging"!==n||(n="auto");var a="talentKey_".concat(n);o[a]||(o[a]=[]),o[a].push(t.keys)}}))}));var d=null===(a=O.a.formulas)||void 0===a?void 0:a.weapon[e.weapon.key];return d&&Object.values(d).forEach((function(t){if(t.field.canShow(e)){var a="weapon_".concat(e.weapon.key);o[a]||(o[a]=[]),o[a].push(t.keys)}})),Object(n.a)(Object(n.a)({basicKeys:r},o),{},{transReactions:c})}},174:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(59),i=a(185),r=function e(){if(Object(n.a)(this,e),this instanceof e)throw Error("A static class cannot be instantiated.")};r.getLevelName=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return i.a[e]||t},r.getLevelIndex=function(e){return i.b.indexOf(e)},r.getWeaponMainStatVal=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return e.baseStats.main[r.getLevelIndex(t)]||a},r.getWeaponSubstatVal=function(e,t){var a,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return(null===(a=e.baseStats.sub)||void 0===a?void 0:a[r.getLevelIndex(t)])||n},r.getWeaponSubstatKey=function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return(null===(t=e.baseStats)||void 0===t?void 0:t.substatKey)||a},r.getWeaponTypeName=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return i.c[e]||t},r.getWeaponTypeKeys=function(){return Object.keys(i.c)},r.getWeaponMainStatValWithOverride=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return(null===e||void 0===e?void 0:e.overrideMainVal)||r.getWeaponMainStatVal(t,null===e||void 0===e?void 0:e.levelKey,a)},r.getWeaponSubstatValWithOverride=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return(null===e||void 0===e?void 0:e.overrideSubVal)||r.getWeaponSubstatVal(t,null===e||void 0===e?void 0:e.levelKey,a)}},175:function(e,t,a){"use strict";var n={elements:{anemo:a.p+"static/media/Element_Anemo.f809fde3.png",cryo:a.p+"static/media/Element_Cryo.019d72f9.png",dendro:a.p+"static/media/Element_Dendro.8ee0f26d.png",electro:a.p+"static/media/Element_Electro.342332ac.png",geo:a.p+"static/media/Element_Geo.b7e865c6.png",hydro:a.p+"static/media/Element_Hydro.f2f8bd8a.png",pyro:a.p+"static/media/Element_Pyro.f65c2e38.png"},weaponTypes:{bow:a.p+"static/media/Weapon-class-bow-icon.b8e7b5ca.png",catalyst:a.p+"static/media/Weapon-class-catalyst-icon.2cbef800.png",claymore:a.p+"static/media/Weapon-class-claymore-icon.17418b20.png",polearm:a.p+"static/media/Weapon-class-polearm-icon.a4e7fffc.png",sword:a.p+"static/media/Weapon-class-sword-icon.4470b487.png"},resin:{fragile:a.p+"static/media/Item_Fragile_Resin.f9ec8223.png",condensed:a.p+"static/media/Item_Condensed_Resin.1cecf64a.png"},exp_books:{advice:a.p+"static/media/Item_Wanderer's_Advice.58c62cf7.png",wit:a.p+"static/media/Item_Hero's_Wit.a79e36d0.png",experience:a.p+"static/media/Item_Adventurer's_Experience.92b5d195.png"}};t.a=n},179:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(59),i=a(8),r=Promise.all([a.e(4),a.e(18)]).then(a.bind(null,212)).then((function(e){c.formulas=e.default,Object(i.e)(e.default,[],(function(e){return"function"===typeof e}),(function(e,t){return e.keys=t}))})),c=function e(){if(Object(n.a)(this,e),this instanceof e)throw Error("A static class cannot be instantiated.")};c.formulas={},c.get=function(e){return r.then((function(){return Object(i.q)(c.formulas,e)}))}},185:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return i})),a.d(t,"c",(function(){return r}));var n=["L1","L5","L10","L15","L20","L20A","L25","L30","L35","L40","L40A","L45","L50","L50A","L55","L60","L60A","L65","L70","L70A","L75","L80","L80A","L85","L90"],i={L1:"Lvl. 1",L5:"Lvl. 5",L10:"Lvl. 10",L15:"Lvl. 15",L20:"Lvl. 20",L20A:"Lvl. 20/40",L25:"Lvl. 25",L30:"Lvl. 30",L35:"Lvl. 35",L40:"Lvl. 40",L40A:"Lvl. 40/50",L45:"Lvl. 45",L50:"Lvl. 50",L50A:"Lvl. 50/60",L55:"Lvl. 55",L60:"Lvl. 60",L60A:"Lvl. 60/70",L65:"Lvl. 65",L70:"Lvl. 70",L70A:"Lvl. 70/80",L75:"Lvl. 75",L80:"Lvl. 80",L80A:"Lvl. 80/90",L85:"Lvl. 85",L90:"Lvl. 90"},r={sword:"Sword",claymore:"Claymore",catalyst:"Catalyst",bow:"Bow",polearm:"Polearm"}},186:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));a(14);var n=a(77),i=a(176);function r(e){var t=new Set;return e(new Proxy({},{get:function(e,a,n){t.add(a)}}),new Proxy({},{get:function(e,a,n){t.add(a)}})),Object(n.a)(t)}var c=Object.freeze(Object.fromEntries(Object.keys(i.b).map((function(e){return[e,r(i.b[e])]}))));function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object.keys(i.d),a=new Set;return t.forEach((function(t){return l(t,e,a)})),Object(n.a)(a)}function l(e,t,a){var n,i;a.has(e)||(null===(n=c[e])||void 0===n||n.forEach((function(e){return l(e,t,a)})),Object.keys(null!==(i=t[e])&&void 0!==i?i:{}).forEach((function(e){return l(e,t,a)})),a.add(e))}},201:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(14),i=a(90),r=a(50),c=a(0),s=a(350),l=a(19),o=a(44),u=a(22),d=a(43),v=a(161),j=a(8),b=a(1);function f(e){var t,a,f=e.pageKey,h=void 0===f?"":f,m=e.text,O=void 0===m?"":m,p=e.modalTitle,g=void 0===p?"":p,y=e.children,x=Object(c.useState)(null===(t=null===(a=Object(j.n)("infoShown"))||void 0===a?void 0:a[h])||void 0===t||t),L=Object(n.a)(x,2),S=L[0],w=L[1],N=Object(c.useState)(Array.isArray(O)?Object(j.j)(O):O),E=Object(n.a)(N,1)[0],k=function(){var e,t=null!==(e=Object(j.n)("infoShown"))&&void 0!==e?e:{};t[h]=!1,Object(j.r)("infoShown",t),w(!1)};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(s.a,{show:S,onHide:function(){return k()},size:"xl",variant:"success",contentClassName:"bg-transparent",children:Object(b.jsxs)(l.a,{bg:"darkcontent",text:"lightfont",children:[Object(b.jsx)(l.a.Header,{children:Object(b.jsxs)(o.a,{children:[Object(b.jsx)(u.a,{children:Object(b.jsx)(l.a.Title,{children:g})}),Object(b.jsx)(u.a,{xs:"auto",children:Object(b.jsx)(d.a,{variant:"danger",onClick:function(){return k()},children:Object(b.jsx)(r.a,{icon:i.B})})})]})}),Object(b.jsx)(l.a.Body,{children:Object(b.jsx)(c.Suspense,{fallback:Object(b.jsxs)("h3",{className:"text-center",children:["Loading... ",Object(b.jsx)(v.a,{animation:"border",variant:"primary"})]}),children:y})}),Object(b.jsx)(l.a.Footer,{children:Object(b.jsx)(d.a,{variant:"danger",onClick:function(){return k()},children:Object(b.jsx)("span",{children:"Close"})})})]})}),Object(b.jsx)(l.a,{bg:"lightcontent",text:"lightfont",className:"mb-2",children:Object(b.jsx)(l.a.Body,{className:"pl-2 py-0 pr-0",children:Object(b.jsxs)(o.a,{children:[Object(b.jsx)(u.a,{children:Object(b.jsx)("small",{children:E})}),Object(b.jsx)(u.a,{xs:"auto",children:Object(b.jsx)(d.a,{size:"sm",variant:"info",className:"m-0 py-1",onClick:function(){return w(!0)},children:Object(b.jsx)(r.a,{icon:i.s})})})]})})})]})}},217:function(e,t,a){"use strict";a.d(t,"a",(function(){return E}));var n=a(77),i=a(14),r=a(90),c=a(50),s=a(0),l=a(196),o=a(129),u=a(43),d=a(19),v=a(22),j=a(44),b=a(35),f=a(168),h=a(175),m=a(183),O=a(202),p=a(25),g=a(163),y=a(92),x=a(174),L=a(198),S=a(171),w=a(173),N=a(1);function E(e){var t,a=e.characterKey,E=e.onEdit,k=e.onDelete,K=e.cardClassName,A=void 0===K?"":K,_=e.bg,C=void 0===_?"":_,T=e.header,W=e.footer,V=void 0!==W&&W,B=Object(y.a)(),I=Object(i.a)(B,2)[1];Object(s.useEffect)((function(){return a&&p.a.registerCharListener(a,I),function(){a&&p.a.unregisterCharListener(a,I)}}),[a,I]);var M=Object(y.b)(f.a.getAll()),z=p.a.get(a),F=Object(y.b)(w.b.get(a)),R=Object(y.b)(z&&L.a.get(z.weapon.key)),D=Object(s.useMemo)((function(){return z&&F&&R&&M&&S.a.calculateBuild(z,F,R,M)}),[z,F,R,M]);if(!z||!F||!R||!D)return null;var P=z.weapon,H=z.constellation,q=F.name,G=D.characterEle,U=F.weaponTypeKey,Y=null===R||void 0===R?void 0:R.name,J=x.a.getWeaponMainStatValWithOverride(P,R),Q=x.a.getWeaponSubstatKey(R),X=x.a.getWeaponSubstatValWithOverride(P,R),Z=x.a.getLevelName(P.levelKey),$=null===R||void 0===R?void 0:R.passiveName;return Object(N.jsxs)(d.a,{className:A,bg:C||"darkcontent",text:"lightfont",children:[Object(N.jsx)(d.a.Header,{className:"pr-2",children:Object(N.jsxs)(j.a,{className:"no-gutters",children:[Object(N.jsx)(v.a,{children:T||Object(N.jsx)("h5",{children:Object(N.jsx)("b",{children:q})})}),Object(N.jsx)(v.a,{xs:"auto",children:Object(N.jsxs)("span",{className:"float-right align-top ml-1",children:[E&&Object(N.jsx)(u.a,{variant:"primary",size:"sm",className:"mr-1",onClick:function(){return E(a)},children:Object(N.jsx)(c.a,{icon:r.h})}),k&&Object(N.jsx)(u.a,{variant:"danger",size:"sm",onClick:function(){return k(a)},children:Object(N.jsx)(c.a,{icon:r.E})})]})})]})}),Object(N.jsxs)(d.a.Body,{onClick:function(){return null===E||void 0===E?void 0:E(a)},className:E?"cursor-pointer":"",children:[Object(N.jsxs)(j.a,{children:[Object(N.jsx)(v.a,{xs:"auto",className:"pr-0",children:Object(N.jsx)(l.a,{src:F.thumbImg,className:"thumb-big grad-".concat(F.star,"star p-0"),thumbnail:!0})}),Object(N.jsxs)(v.a,{children:[Object(N.jsxs)("h3",{className:"mb-0",children:[S.a.getLevelString(z)," ","C".concat(H)]}),Object(N.jsx)("h5",{className:"mb-0",children:Object(N.jsx)(m.a,{stars:F.star,colored:!0})}),Object(N.jsxs)("h2",{className:"mb-0",children:[Object(N.jsx)(l.a,{src:h.a.elements[G],className:"inline-icon"})," ",Object(N.jsx)(l.a,{src:null===(t=h.a.weaponTypes)||void 0===t?void 0:t[U],className:"inline-icon"})]})]})]}),Object(N.jsx)(j.a,{className:"mb-2",children:Object(N.jsxs)(v.a,{children:[Object(N.jsxs)("h6",{className:"mb-0",children:[Y,$&&"(".concat(P.refineIndex+1,")")," ",Z]}),Object(N.jsxs)("span",{children:["ATK: ",J,"  ",$&&Object(N.jsxs)("span",{children:[g.a.getStatName(Q),": ",X,g.a.getStatUnit(Q)]})]})]})}),Object(N.jsx)(j.a,{children:Object(N.jsx)(v.a,{children:M&&Object.entries(f.a.setEffects(M,D.setToSlots)).map((function(e){var t,a=Object(i.a)(e,2),r=a[0],c=a[1],s=null!==(t=null===M||void 0===M?void 0:M[r].name)&&void 0!==t?t:"",l=Math.max.apply(Math,Object(n.a)(c));return Object(N.jsx)("h5",{children:Object(N.jsxs)(o.a,{variant:"secondary",children:[s," ",Object(N.jsx)(o.a,{variant:"success",children:l})]})},r)}))})}),Object(N.jsx)(j.a,{children:["finalHP","finalATK","finalDEF","eleMas","critRate_","critDMG_","enerRech_"].map((function(e){var t=g.a.getStatUnit(e),a=D[e];return Object(N.jsxs)(v.a,{xs:12,children:[Object(N.jsxs)("h6",{className:"d-inline",children:[Object(O.a)(e)," ",g.a.getStatName(e)]}),Object(N.jsx)("span",{className:"float-right",children:(null===a||void 0===a?void 0:a.toFixed(g.a.fixedUnit(e)))+t})]},e)}))})]}),V&&Object(N.jsx)(d.a.Footer,{children:Object(N.jsx)(u.a,{as:b.b,to:{pathname:"/build",characterKey:a},children:"Generate Builds"})})]})}},347:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return z}));var n=a(79),i=a.n(n),r=a(104),c=a(14),s=a(90),l=a(50),o=a(0),u=a.n(o),d=a(149),v=a(44),j=a(22),b=a(19),f=a(161),h=a(190),m=a(43),O=a(196),p=a(233),g=a(206),y=a(34),x=a(35),L=a(175),S=a(25),w=a(201),N=a(91),E=a(92),k=a(8),K=a(174),A=a(171),_=a(217),C=a(173),T=a(84),W=a(1),V=u.a.lazy((function(){return a.e(22).then(a.bind(null,345))})),B=Object(o.lazy)((function(){return Promise.all([a.e(2),a.e(1)]).then(a.bind(null,211))})),I={level:"Level",rarity:"Rarity",name:"Name"};function M(e,t){return t===e?"":t}function z(e){var t,a=Object(o.useState)(""),n=Object(c.a)(a,2),x=n[0],z=n[1],R=Object(o.useState)((function(){return Object.keys(I)[0]})),D=Object(c.a)(R,2),P=D[0],H=D[1],q=Object(o.useReducer)(M,""),G=Object(c.a)(q,2),U=G[0],Y=G[1],J=Object(o.useReducer)(M,""),Q=Object(c.a)(J,2),X=Q[0],Z=Q[1],$=Object(o.useState)(!1),ee=Object(c.a)($,2),te=ee[0],ae=ee[1],ne=Object(E.a)(),ie=Object(c.a)(ne,2)[1],re=Object(o.useRef)(null);Object(o.useEffect)((function(){y.a.pageview("/character");var e=Object(k.n)("CharacterDisplay.state");if(e){var t=e.charIdToEdit,a=e.sortBy,n=e.elementalFilter,i=e.weaponFilter;z(t),H(a),N.d.includes(n)&&Y(n),K.a.getWeaponTypeKeys().includes(i)&&Z(i)}return S.a.registerListener(ie),function(){return S.a.unregisterListener(ie)}}),[ie]);var ce=null!==(t=Object(E.b)(C.b.getAll()))&&void 0!==t?t:{},se=function(e){var t,a;return null!==(t=null===(a=S.a.get(e))||void 0===a?void 0:a.level)&&void 0!==t?t:0},le=function(e){var t;return null===(t=ce[e])||void 0===t?void 0:t.star};Object(o.useEffect)((function(){var e={charIdToEdit:x,sortBy:P,elementalFilter:U,weaponFilter:X};Object(k.r)("CharacterDisplay.state",e)}),[x,P,U,X]);var oe=Object(o.useCallback)(function(){var e=Object(r.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.b.get(t);case 2:if(a=e.sent,"object"===typeof(n=null===a||void 0===a?void 0:a.name)&&(n=T.a.t("char_".concat(t,"_gen:name"))),window.confirm("Are you sure you want to remove ".concat(n,"?"))){e.next=7;break}return e.abrupt("return");case 7:A.a.remove(t),x===t&&z("");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[x,z]),ue=Object(o.useCallback)((function(e){z(e),setTimeout((function(){var e;null===(e=re.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}),500)}),[z,re]),de=Object(o.useCallback)((function(){z(""),ae(!1)}),[z]),ve=S.a.getCharacterKeyList().filter((function(e){var t,a;return(!U||U===(null===(t=ce[e])||void 0===t?void 0:t.elementKey))&&(!X||X===(null===(a=ce[e])||void 0===a?void 0:a.weaponTypeKey))})).sort((function(e,t){if("name"===P)return e<t?-1:e>t?1:0;if("level"===P){var a=se(t)-se(e);return a||le(t)-le(e)}var n=le(t)-le(e);return n||se(t)-se(e)})),je=Boolean(x||te);return Object(W.jsxs)(d.a,{ref:re,className:"mt-2",children:[Object(W.jsx)(w.a,{pageKey:"characterPage",modalTitle:"Character Management Page Guide",text:["Every character will be tested with in-game numbers for maximum accuracy.","You can see the details of the calculations of every number.","You need to manually enable auto infusion for characters like Choungyun or Noelle.",'You can change character constellations in both "Character" tab and in "Talents" tab.',"Modified character Stats show up in yellow."],children:Object(W.jsx)(V,{})}),je?Object(W.jsx)(v.a,{className:"mt-2",children:Object(W.jsx)(j.a,{children:Object(W.jsx)(u.a.Suspense,{fallback:Object(W.jsx)(b.a,{bg:"darkcontent",text:"lightfont",children:Object(W.jsx)(b.a.Body,{children:Object(W.jsxs)("h3",{className:"text-center",children:["Loading... ",Object(W.jsx)(f.a,{animation:"border",variant:"primary"})]})})}),children:Object(W.jsx)(B,{character:void 0,newBuild:void 0,tabName:void 0,editable:!0,setCharacterKey:ue,characterKey:x,onClose:de,footer:Object(W.jsx)(F,{onClose:de,characterKey:x})})})})}):null,Object(W.jsx)(b.a,{bg:"darkcontent",text:"lightfont",className:"mt-2",children:Object(W.jsx)(b.a.Body,{className:"p-2",children:Object(W.jsxs)(v.a,{children:[Object(W.jsx)(j.a,{xs:"auto",children:Object(W.jsx)(h.a,{children:N.d.map((function(e){var t;return Object(W.jsx)(m.a,{variant:U&&U!==e?"primary":"success",className:"py-1 px-2",onClick:function(){return Y(e)},children:Object(W.jsx)("h4",{className:"mb-0",children:Object(W.jsx)(O.a,{src:null===(t=L.a.elements)||void 0===t?void 0:t[e],className:"inline-icon"})})},e)}))})}),Object(W.jsx)(j.a,{children:Object(W.jsx)(h.a,{children:K.a.getWeaponTypeKeys().map((function(e){var t;return Object(W.jsx)(m.a,{variant:X&&X!==e?"primary":"success",className:"py-1 px-2",onClick:function(){return Z(e)},children:Object(W.jsx)("h4",{className:"mb-0",children:Object(W.jsx)(O.a,{src:null===(t=L.a.weaponTypes)||void 0===t?void 0:t[e],className:"inline-icon"})})},e)}))})}),Object(W.jsxs)(j.a,{xs:"auto",children:[Object(W.jsx)("span",{children:"Sort by: "}),Object(W.jsx)(p.a,{type:"radio",name:"level",value:P,onChange:H,children:Object.entries(I).map((function(e){var t=Object(c.a)(e,2),a=t[0],n=t[1];return Object(W.jsx)(g.a,{value:a,variant:P===a?"success":"primary",children:n},a)}))})]})]})})}),Object(W.jsxs)(v.a,{className:"mt-2",children:[!je&&Object(W.jsx)(j.a,{lg:4,md:6,className:"mb-2",children:Object(W.jsxs)(b.a,{className:"h-100",bg:"darkcontent",text:"lightfont",children:[Object(W.jsx)(b.a.Header,{className:"pr-2",children:Object(W.jsx)("span",{children:"Add New Character"})}),Object(W.jsx)(b.a.Body,{className:"d-flex flex-column justify-content-center",children:Object(W.jsx)(v.a,{className:"d-flex flex-row justify-content-center",children:Object(W.jsx)(j.a,{xs:"auto",children:Object(W.jsx)(m.a,{onClick:function(){return ae(!0)},children:Object(W.jsx)("h1",{children:Object(W.jsx)(l.a,{icon:s.r,className:"fa-fw"})})})})})})]})}),ve.map((function(e){return Object(W.jsx)(j.a,{lg:4,md:6,className:"mb-2",children:Object(W.jsx)(_.a,{header:void 0,cardClassName:"h-100",characterKey:e,onDelete:oe,onEdit:ue,footer:!0})},e)}))]})]})}function F(e){var t=e.onClose,a=e.characterKey;return Object(W.jsxs)(v.a,{children:[Object(W.jsx)(j.a,{children:Object(W.jsxs)(m.a,{variant:"info",as:x.b,to:{pathname:"/flex",characterKey:a},children:[Object(W.jsx)(l.a,{icon:s.n})," Share Character"]})}),Object(W.jsx)(j.a,{xs:"auto",children:Object(W.jsx)(m.a,{variant:"danger",onClick:t,children:"Close"})})]})}}}]);
//# sourceMappingURL=15.6963c2c0.chunk.js.map