(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{101:function(e,t,c){},102:function(e,t,c){},112:function(e,t,c){"use strict";c.r(t);var a,n=c(0),i=c.n(n),r=c(32),s=c.n(r),j=c(45),l=c(14),o=(c(101),c(11)),b=(c(102),c(172)),u=c(167),d=c(170),O="https://restcountries.com/v3.1",h="/all",x=function(e){return function(e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c={method:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET"};return t&&(c.body=JSON.stringify(t),c.headers={"Content-Type":"application/json; charset=UTF-8"}),fetch(O+e,c).then((function(e){if(!e.ok)throw new Error;return e.json()}))}(e)},m=c(171),p=c(176),g=c(174),f=c(173),v=c(168),y=c(175),A=c(163),C=c(156),E=c(157),w=c(60),k=c(2),S=Object(n.memo)((function(e){var t=e.country,c=t.name,a=t.flags,n=t.region,i=t.population,r=t.capital;return Object(k.jsx)(u.a,{item:!0,xs:2,children:Object(k.jsxs)(m.a,{sx:{maxWidth:345},children:[Object(k.jsx)(f.a,{component:"img",height:"140",image:a.svg,alt:"green iguana"}),Object(k.jsxs)(g.a,{children:[Object(k.jsx)(w.a,{gutterBottom:!0,variant:"h5",component:"div",children:c.common}),Object(k.jsxs)(y.a,{children:[Object(k.jsx)(A.a,{disablePadding:!0,children:Object(k.jsx)(C.a,{children:Object(k.jsx)(E.a,{primary:"Region: ".concat(n)})})}),Object(k.jsx)(A.a,{disablePadding:!0,children:Object(k.jsx)(C.a,{children:Object(k.jsx)(E.a,{primary:"Population: ".concat(i)})})}),Object(k.jsx)(A.a,{disablePadding:!0,children:Object(k.jsx)(C.a,{children:Object(k.jsx)(E.a,{primary:"Capital: ".concat(r)})})})]})]}),Object(k.jsx)(p.a,{children:Object(k.jsx)(v.a,{size:"small",children:"Learn More"})})]})})})),q=c(83),P=c.n(q),T=c(162),W=c(179),J=c(164),L=c(161),M=c(165);!function(e){e.Africa="Africa",e.Americas="Americas",e.Asia="Asia",e.Europe="Europe",e.Oceania="Oceania"}(a||(a={}));var N=function(){var e=Object(j.b)(),t=Object(o.a)(e,2),c=t[0],i=t[1],r=c.get("query")||"",s=c.get("region")||"",l=Object(n.useState)(r),b=Object(o.a)(l,2),d=b[0],O=b[1],h=Object(n.useCallback)(P()((function(e){i(e||s?{query:e,region:s}:{})}),500),[]);return Object(k.jsxs)(u.a,{container:!0,item:!0,xs:12,children:[Object(k.jsx)(u.a,{item:!0,xs:2,children:Object(k.jsx)(T.a,{fullWidth:!0,label:"Country",variant:"outlined",margin:"normal",value:d,onChange:function(e){O(e.target.value),h(e.target.value)}})}),Object(k.jsx)(u.a,{item:!0,xs:8}),Object(k.jsx)(u.a,{item:!0,xs:2,children:Object(k.jsxs)(W.a,{fullWidth:!0,children:[Object(k.jsx)(J.a,{id:"demo-simple-select-label",children:"Region"}),Object(k.jsxs)(L.a,{value:s,label:"Region",onChange:function(e){return t=e.target.value,void i({query:r,region:t});var t},children:[Object(k.jsx)(M.a,{value:"",children:"All"}),Object(k.jsx)(M.a,{value:a.Africa,children:"Africa"}),Object(k.jsx)(M.a,{value:a.Americas,children:"Americas"}),Object(k.jsx)(M.a,{value:a.Asia,children:"Asia"}),Object(k.jsx)(M.a,{value:a.Europe,children:"Europe"}),Object(k.jsx)(M.a,{value:a.Oceania,children:"Oceania"})]})]})})]})},R=function(){var e=Object(j.b)(),t=Object(o.a)(e,1)[0],c=t.get("query")||"",a=t.get("region")||"",i=Object(n.useState)([]),r=Object(o.a)(i,2),s=r[0],l=r[1],O=Object(n.useState)(!1),m=Object(o.a)(O,2),p=m[0],g=m[1],f=Object(n.useState)(""),v=Object(o.a)(f,2),y=v[0],A=v[1];Object(n.useEffect)((function(){g(!0),x(h).then(l).catch(A).finally((function(){return g(!1)}))}),[]);var C=Object(n.useMemo)((function(){var e=c.toLowerCase();return s.filter((function(t){return t.region.includes(a)&&t.name.common.toLowerCase().includes(e)}))}),[c,a,s]);return Object(k.jsxs)("div",{className:"app",children:[Object(k.jsx)(b.a,{elevation:8,children:Object(k.jsx)("h1",{className:"app__header",children:"Where in the world?"})}),p&&Object(k.jsx)(d.a,{}),!y&&Object(k.jsxs)(b.a,{elevation:16,style:{padding:"20px"},children:[Object(k.jsx)(N,{}),Object(k.jsx)(u.a,{container:!0,spacing:2,children:C.map((function(e){return Object(k.jsx)(S,{country:e},e.name.common)}))})]})]})};s.a.render(Object(k.jsx)(i.a.StrictMode,{children:Object(k.jsx)(j.a,{children:Object(k.jsx)(l.c,{children:Object(k.jsxs)(l.a,{path:"/",children:[Object(k.jsx)(l.a,{index:!0,element:Object(k.jsx)(R,{})}),Object(k.jsx)(l.a,{path:":filterType",element:Object(k.jsx)(R,{})})]})})})}),document.getElementById("root"))}},[[112,1,2]]]);
//# sourceMappingURL=main.2ea26a11.chunk.js.map