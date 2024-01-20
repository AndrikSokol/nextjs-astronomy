(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1203)}])},1203:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return k}});var a=n(5893),i=n(9008),r=n.n(i),o=n(7294);let c="https://api.nasa.gov/planetary/apod",l="G8HdfViMJfuBp5uQdjwqm0AhbvDahRxiNn1idQmy",s={getPlanetaryApod:async()=>{let t=await fetch("".concat(c,"?api_key=").concat(l),{next:{revalidate:86400}});if(!t.ok)throw Error("Unable to fetch data!");return t.json()},getPlanetaryApodRange:async t=>{let e=await fetch("".concat(c,"?api_key=").concat(l,"&start_date=").concat(t.from,"&end_date=").concat(t.to));if(!e.ok)throw Error("Unable to fetch data!");return e.json()}};var d=n(5616),h=n(3156),x=n(5861),u=n(6886),f=n(5010),p=n(9007);let g=t=>{let{planetaries:e}=t;return(0,a.jsx)(f.Z,{sx:{width:500,height:450},variant:"woven",cols:3,gap:8,children:e.map(t=>(0,a.jsx)(p.Z,{children:(0,a.jsx)("img",{srcSet:"".concat(t.url,"?w=161&fit=crop&auto=format&dpr=2 2x"),src:"".concat(t.url,"?w=161&fit=crop&auto=format"),alt:t.title,loading:"lazy"})},t.url))})};var j=n(9417),m=n(2422);let w=t=>{let{setPlanitaries:e}=t,[n,i]=(0,o.useState)({}),r=(t,e)=>{let n="".concat(e.$y,"-").concat(e.$M+1,"-").concat(e.$D);console.log(n),i(e=>({...e,[t]:n}))},c=async()=>{e(await s.getPlanetaryApodRange(n))};return(0,a.jsxs)(d.Z,{sx:{display:"flex",flexDirection:"row",gap:"10px"},children:[(0,a.jsx)(m.M,{sx:{backgroundColor:"white"},label:"From",value:n.from,onChange:t=>r("from",t)}),(0,a.jsx)(m.M,{sx:{backgroundColor:"white"},label:"To",value:n.to,onChange:t=>r("to",t)}),(0,a.jsx)(j.Z,{sx:{width:"200px"},variant:"contained",color:"success",onClick:c,children:"Get image"})]})};var y=n(5675),v=n.n(y);let _=()=>{let[t,e]=(0,o.useState)(null),[n,i]=(0,o.useState)(),[r,c]=(0,o.useState)(!0);return((0,o.useEffect)(()=>{(async()=>{try{let t=await s.getPlanetaryApod();e(t)}catch(t){console.error("Error fetching data:",t)}finally{c(!1)}})()},[]),r)?(0,a.jsx)(x.Z,{sx:{color:"white",width:"100%",textAlign:"center"},children:"Loading..."}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{style:{position:"fixed",zIndex:"-1",width:"100vw",height:"100vh"},children:(0,a.jsx)(v(),{src:"/night-sky.jpg",alt:"night sky",layout:"fill",objectFit:"cover"})}),(0,a.jsx)(h.Z,{maxWidth:"xl",sx:{color:"white"},children:(0,a.jsxs)(u.ZP,{container:!0,spacing:2,sx:{paddingTop:"10px"},children:[(0,a.jsxs)(u.ZP,{item:!0,xs:6,children:[(0,a.jsx)(w,{setPlanitaries:i}),n&&(0,a.jsx)(g,{planetaries:n})]}),(0,a.jsx)(u.ZP,{item:!0,xs:6,children:(0,a.jsxs)(d.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[(0,a.jsx)(x.Z,{variant:"h4",component:"h1",children:"Astronomy Picture of the Day"}),(0,a.jsx)(x.Z,{children:null==t?void 0:t.date}),(0,a.jsx)(x.Z,{variant:"h5",component:"h2",children:null==t?void 0:t.title}),(0,a.jsx)("img",{src:null==t?void 0:t.hdurl,alt:null==t?void 0:t.title,style:{maxWidth:"80%",height:"auto",borderRadius:"10px"}})]})})]})})]})};var k=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r(),{children:[(0,a.jsx)("title",{children:" Astronomy Picture of the Day"}),(0,a.jsx)("meta",{name:"description",content:"Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer."}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsx)("main",{children:(0,a.jsx)(_,{})})]})}},function(t){t.O(0,[163,888,774,179],function(){return t(t.s=8312)}),_N_E=t.O()}]);