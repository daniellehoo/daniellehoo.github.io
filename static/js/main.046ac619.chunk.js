(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/cat_icon.a499faa0.png"},22:function(e,t,a){e.exports=a.p+"static/media/soy_sauce.d47132d1.png"},28:function(e,t,a){e.exports=a.p+"static/media/luckycat.eb9ff440.glb"},29:function(e,t,a){e.exports=a.p+"static/media/blue_fish.d24dc50d.png"},32:function(e,t,a){e.exports=a(44)},37:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(18),l=a.n(i),c=(a(37),a(8)),o=a(11),s=a(7),m=a(19),u=a.n(m);var d=function(){return r.a.createElement("div",{className:"homeButton"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:u.a})))};var h=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],i=t[1];return r.a.createElement("div",{className:"nav"},r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",{className:a,onClick:function(){return i()}},r.a.createElement(d,null)),r.a.createElement("li",{className:a,onClick:function(){return i()}},r.a.createElement(s.c,{to:"/projects"},"projects")),r.a.createElement("li",{className:a,onClick:function(){return i()}},r.a.createElement("a",{href:"https://daniellehoo.github.io/blog/posts"},"blog")),r.a.createElement("li",{className:a,onClick:function(){return i()}},r.a.createElement(s.c,{to:"/about"},"about")))))};var p=function(){var e=[{id:0,url:"http://www.instagram.com/danihoo",class:"fab fa-instagram"},{id:1,url:"http://github.com/daniellehoo",class:"fab fa-github"},{id:2,url:"http://www.twitter.com/daniellehoo",class:"fab fa-twitter"},{id:3,url:"http://www.soundcloud.com/danihoo",class:"fab fa-soundcloud"},{id:4,url:"http://www.linkedin.com/in/danielle-hoo",class:"fab fa-linkedin"},{id:5,url:"http://www.medium.com/@danihoo",class:"fab fa-medium"},{id:6,url:"https://www.pinterest.com/daniellemhoo/",class:"fab fa-pinterest"}].map(function(e,t){return r.a.createElement("div",{className:"button id_".concat(e.id),key:"".concat(t)},r.a.createElement("a",{href:"".concat(e.url)},r.a.createElement("i",{className:"".concat(e.class)})))});return r.a.createElement("div",{className:"social",key:"1"},e)};function f(e,t){var a;switch(e){case"Chinatown USA":a=t.replace(/The Chinese in America/g,"<a href='https://www.penguinrandomhouse.com/books/288096/the-chinese-in-america-by-iris-chang/' target='_blank'>The Chinese in America</a>");break;case"Our Children's Trust":a=t.replace(/Our Children's Trust/g,"<a href='https://www.ourchildrenstrust.org/' target='_blank'>Our Children's Trust</a>").replace(/SITU Research/g,"<a href='https://situ.nyc/research' target='_blank'>SITU Research</a>").replace(/Leaflet.js/g,"<a href='https://leafletjs.com/' target='_blank'>Leaflet.js</a>").trim();break;default:console.log("")}return a}var b=function(e){var t=Object(c.f)().url,a=e.projectsData,n=a.map(function(e){return e.url===t?r.a.createElement("div",{key:e.id,class:"projectClass",dangerouslySetInnerHTML:{__html:f(e.title,e.description)}}):null}),i=a.map(function(e){return e.url===t?r.a.createElement("img",{src:e.img}):null});return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"project"},r.a.createElement(h,null),n,i,r.a.createElement("div",{className:"back"},r.a.createElement("a",{href:"#/Projects"},"<< Back to Projects")),r.a.createElement(p,null)))},g=a(3),w=a(22),E=a.n(w);var v=function(){return r.a.createElement("div",{className:"about"},r.a.createElement("div",null,r.a.createElement(h,null)),r.a.createElement("h1",null,"About"),r.a.createElement("div",null,r.a.createElement("img",{src:E.a})),r.a.createElement("p",null,"brooklyn, NY resident"),r.a.createElement("p",null,"software engineer working in javascript and react"),r.a.createElement("p",null,"former Museum of Modern Art (MoMA) employee"),r.a.createElement("p",null,"interest in contemporary art, design, & web development"),r.a.createElement("p",null,"occasional runner, wanderer & Canon G16 user"),r.a.createElement("div",{className:"spacer"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,"contact:",r.a.createElement("a",{href:"mailto:daniellem.hoo@gmail.com?subject=Hello!"},"email")),r.a.createElement(p,null))};var j=function(){var e=Object(n.useState)("Danielle Hoo"),t=Object(o.a)(e,2),a=t[0],i=t[1];return r.a.createElement("div",{className:"header"},r.a.createElement("form",null,r.a.createElement("input",{type:"text",id:"lname",name:"lname",value:a,onChange:function(e){return i(e.target.value)},autoFocus:!0})))},k=a(23),y=a(24),C=a(30),_=a(25),O=a(31),N=a(6),A=a(26),I=a(27),x=a.n(I),F=a(0),S=a(28),T=a.n(S),U=function(e){function t(e){var a;return Object(k.a)(this,t),(a=Object(C.a)(this,Object(_.a)(t).call(this,e))).on_window_resize=function(){a.width=a.mount.getClientRects()[0].width,a.height=a.mount.getClientRects()[0].height,a.camera.aspect=a.width/a.height,a.camera.updateProjectionMatrix(),a.renderer.setSize(a.width,a.height)},a.start=a.start.bind(Object(N.a)(Object(N.a)(a))),a.stop=a.stop.bind(Object(N.a)(Object(N.a)(a))),a.animate=a.animate.bind(Object(N.a)(Object(N.a)(a))),a}return Object(O.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){var e=this.mount.clientWidth,t=this.mount.clientHeight;this.scene=new F.rb,this.camera=new F.gb(75,e/t,.001,1e4),this.camera.position.z=4,this.renderer=new F.Lb({logarithmicDepthBuffer:!0,context:null,precision:"highhp",premultipliedAlpha:!0,antialias:!0,powerPreference:"high-performance"}),this.renderer.setClearColor("#FFFFFF"),this.renderer.setSize(e,t),this.mount.appendChild(this.renderer.domElement),this.controls=new x.a(this.camera,this.renderer.domElement),this.controls.update(),this.amb_light=new F.c(4210752,8),this.scene.add(this.amb_light),this.raycaster=new F.ob,this.mouse=new F.Gb;var a=this;(new A.a).load(T.a,function(e){a.model=e.scenes[0],a.scene.add(a.model);var t=(new F.g).setFromObject(a.model),n=t.max.x+.235,r=t.max.y;a.model.scale.set(3.5/n,3.5/r,3.5/r);(new F.g).setFromObject(a.model);a.model.position.x=0,a.model.position.y=0,a.model.position.z=0,a.model_bbox=(new F.g).setFromObject(a.model),console.log(this.model.material),a.model.material.transparent=!0,a.model.material.opacity=1},function(e){console.log(e.loaded/e.total*100+"% loaded")},function(e){console.log("An error happened")}),this.start()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.on_window_resize),this.stop(),this.mount.removeChild(this.renderer.domElement)}},{key:"start",value:function(){this.frameId||(this.frameId=requestAnimationFrame(this.animate))}},{key:"stop",value:function(){cancelAnimationFrame(this.frameId)}},{key:"animate",value:function(){this.renderScene(),this.frameId=window.requestAnimationFrame(this.animate)}},{key:"renderScene",value:function(){this.renderer.render(this.scene,this.camera)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"model",style:{width:"100vw",height:"100vh"},ref:function(t){e.mount=t}})}}]),t}(n.Component);var z=function(){return r.a.createElement("div",{className:"landing"},r.a.createElement(j,null),r.a.createElement(h,null),r.a.createElement(U,null),r.a.createElement(p,null))},D=a(29),L=a.n(D);var M=function(e){var t=e.projectsData.map(function(e){return r.a.createElement("div",{className:"projectList",key:e.id},r.a.createElement("a",{href:"#/".concat(e.url)},e.title))});return r.a.createElement("div",{className:"projects"},r.a.createElement(h,null),r.a.createElement("h1",null,"Projects"),r.a.createElement("img",{id:"fish",src:L.a}),r.a.createElement("div",{className:"projectsContainer"},t),r.a.createElement(p,null))},B=(a(43),Object(g.a)()),H=[{id:0,title:"Chinatown USA",url:"chinatown_usa",img:"https://live.staticflickr.com/65535/49593430952_712dc0cce1_b.jpg",description:"Chinatown, USA was inspired by The Chinese in America by Iris Chang and the work of American conceptual artist, John Baldessari. It is the digital photographic capturing of Chinese owned businesses in North America with minimal geometric interventions."},{id:1,title:"Our Children's Trust",url:"our_childrens_trust",img:"https://live.staticflickr.com/65535/49592718198_6760f8c00d_b.jpg",description:"Our Children's Trust is the first civil litigation for climate change accountability in U.S. History. Working as part of the SITU Research team, I built a platform using Leaflet.js that was to be used for evidentiary presentation in court."},{id:2,title:"Nicaragua",url:"nicaragua",img:"https://live.staticflickr.com/65535/49593769191_4de582e8d0_b.jpg",description:"GIEI NICA "},{id:3,title:"Amnesty International",url:"amnesty_international",img:"https://live.staticflickr.com/65535/49593280613_513f9fe243_b.jpg",description:"teear gassss "}];r.a.createContext(H);var P=Object(c.g)(function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s.b,{history:B,basename:"".concat("","/")},r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",component:z}),r.a.createElement(c.a,{path:"/projects",render:function(e){return r.a.createElement(M,Object.assign({},e,{projectsData:H}))}}),r.a.createElement(c.a,{path:"/about",component:v}),r.a.createElement(c.a,{path:"/:url",render:function(e){return r.a.createElement(b,Object.assign({},e,{projectsData:H}))}}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(s.a,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.046ac619.chunk.js.map