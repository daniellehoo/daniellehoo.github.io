(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/cat_icon.a499faa0.png"},21:function(e,t,a){e.exports=a.p+"static/media/soy_sauce.d47132d1.png"},27:function(e,t,a){e.exports=a.p+"static/media/luckycat.eb9ff440.glb"},28:function(e,t,a){e.exports=a.p+"static/media/blue_fish.d24dc50d.png"},32:function(e,t,a){e.exports=a(44)},37:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(17),l=a.n(i),c=(a(37),a(7)),o=a(8),s=a(18),m=a.n(s);var u=function(){return r.a.createElement("div",{className:"homeButton"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:m.a})))};var d=function(){return Object(c.f)(),r.a.createElement("div",{className:"nav"},r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(u,null)),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/projects"},"projects")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://daniellehoo.github.io/blog/posts"},"blog")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/about"},"about")))))};var h=function(){var e=[{id:0,url:"http://www.instagram.com/danihoo",class:"fab fa-instagram"},{id:1,url:"http://github.com/daniellehoo",class:"fab fa-github"},{id:2,url:"http://www.twitter.com/daniellehoo",class:"fab fa-twitter"},{id:3,url:"http://www.soundcloud.com/danihoo",class:"fab fa-soundcloud"},{id:4,url:"http://www.linkedin.com/in/danielle-hoo",class:"fab fa-linkedin"},{id:5,url:"http://www.medium.com/@danihoo",class:"fab fa-medium"},{id:6,url:"https://www.pinterest.com/daniellemhoo/",class:"fab fa-pinterest"}].map(function(e,t){return r.a.createElement("div",{className:"button id_".concat(e.id),key:"".concat(t)},r.a.createElement("a",{href:"".concat(e.url)},r.a.createElement("i",{className:"".concat(e.class)})))});return r.a.createElement("div",{className:"social",key:"1"},e)};var p=function(e){var t=Object(c.g)().url,a=Object.values(e)[0].map(function(e){return e.url===t?r.a.createElement("div",{key:e.id,dangerouslySetInnerHTML:{__html:(a=e.description,a.replace(/The Chinese in America/g,"<a href='https://www.penguinrandomhouse.com/books/288096/the-chinese-in-america-by-iris-chang/'>The Chinese in America</a>"))}}):null;var a});return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"project"},r.a.createElement(d,null),a,r.a.createElement(h,null)))},f=a(3),b=a(21),E=a.n(b);var w=function(){return r.a.createElement("div",{className:"about"},r.a.createElement(d,null),r.a.createElement("h1",null,"About"),r.a.createElement("img",{src:E.a}),r.a.createElement("p",null,"brooklyn, NY resident"),r.a.createElement("p",null,"software engineer"),r.a.createElement("p",null,"former Museum of Modern Art (MoMA) employee"),r.a.createElement("p",null,"interest in contemporary art, design, & web development"),r.a.createElement("p",null,"occasional runner, wanderer & Canon G16 user"),r.a.createElement("div",{className:"spacer"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,"contact:",r.a.createElement("a",{href:"mailto:daniellem.hoo@gmail.com?subject=Hello!"},"email")),r.a.createElement(h,null))};var g=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Danielle Hoo",r.a.createElement("span",{className:"blinking-cursor"},"|")))},v=a(22),j=a(23),y=a(30),k=a(24),_=a(31),O=a(6),N=a(25),C=a(26),A=a.n(C),x=a(0),F=a(27),I=a.n(F),S=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(y.a)(this,Object(k.a)(t).call(this,e))).on_window_resize=function(){a.width=a.mount.getClientRects()[0].width,a.height=a.mount.getClientRects()[0].height,a.camera.aspect=a.width/a.height,a.camera.updateProjectionMatrix(),a.renderer.setSize(a.width,a.height)},a.start=a.start.bind(Object(O.a)(Object(O.a)(a))),a.stop=a.stop.bind(Object(O.a)(Object(O.a)(a))),a.animate=a.animate.bind(Object(O.a)(Object(O.a)(a))),a}return Object(_.a)(t,e),Object(j.a)(t,[{key:"componentDidMount",value:function(){var e=this.mount.clientWidth,t=this.mount.clientHeight;this.scene=new x.rb,this.camera=new x.gb(75,e/t,.001,1e4),this.camera.position.z=4,this.renderer=new x.Lb({logarithmicDepthBuffer:!0,context:null,precision:"highhp",premultipliedAlpha:!0,antialias:!0,powerPreference:"high-performance"}),this.renderer.setClearColor("#FFFFFF"),this.renderer.setSize(e,t),this.mount.appendChild(this.renderer.domElement),this.controls=new A.a(this.camera,this.renderer.domElement),this.controls.update(),this.amb_light=new x.c(4210752,8),this.scene.add(this.amb_light),this.raycaster=new x.ob,this.mouse=new x.Gb;var a=this;(new N.a).load(I.a,function(e){a.model=e.scenes[0],a.scene.add(a.model);var t=(new x.g).setFromObject(a.model),n=t.max.x+.235,r=t.max.y;a.model.scale.set(3.5/n,3.5/r,3.5/r);(new x.g).setFromObject(a.model);a.model.position.x=0,a.model.position.y=0,a.model.position.z=0,a.model_bbox=(new x.g).setFromObject(a.model),console.log(this.model.material),a.model.material.transparent=!0,a.model.material.opacity=1},function(e){console.log(e.loaded/e.total*100+"% loaded")},function(e){console.log("An error happened")}),this.start()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.on_window_resize),this.stop(),this.mount.removeChild(this.renderer.domElement)}},{key:"start",value:function(){this.frameId||(this.frameId=requestAnimationFrame(this.animate))}},{key:"stop",value:function(){cancelAnimationFrame(this.frameId)}},{key:"animate",value:function(){this.renderScene(),this.frameId=window.requestAnimationFrame(this.animate)}},{key:"renderScene",value:function(){this.renderer.render(this.scene,this.camera)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"model",style:{width:"100vw",height:"100vh"},ref:function(t){e.mount=t}})}}]),t}(n.Component);var z=function(){return r.a.createElement("div",{className:"landing"},r.a.createElement(g,null),r.a.createElement(d,null),r.a.createElement(S,null),r.a.createElement(h,null))},M=a(29),D=a(28),T=a.n(D);var B=function(e){var t=Object(n.useState)("/"),a=Object(M.a)(t,2),i=(a[0],a[1],e.projectsData.map(function(e){return r.a.createElement("div",{className:"project id_".concat(e.id),key:e.id},r.a.createElement("a",{href:"/projects/".concat(e.url),onClick:function(){console.log("click")}},e.title),r.a.createElement("img",{src:e.img}))}));return r.a.createElement("div",{className:"projects"},r.a.createElement(d,null),r.a.createElement("h1",null,"Projects"),r.a.createElement("img",{id:"fish",src:T.a}),i,r.a.createElement(h,null))},H=(a(43),Object(f.a)()),W=[{id:0,title:"Chinatown USA",url:"chinatown_usa",img:"https://live.staticflickr.com/65535/49593430952_712dc0cce1_b.jpg",description:"Chinatown, USA was inspired by The Chinese in America"},{id:1,title:"Our Children's Trust",url:"our_childrens_trust",img:"https://live.staticflickr.com/65535/49592718198_6760f8c00d_b.jpg",description:"our childreen's trustdfssdf "},{id:2,title:"Nicaragua",url:"nicaragua",img:"https://live.staticflickr.com/65535/49593769191_4de582e8d0_b.jpg",description:"GIEI NICA "},{id:3,title:"Amnesty International",url:"amnesty_international",img:"https://live.staticflickr.com/65535/49593280613_513f9fe243_b.jpg",description:"teear gassss "}];r.a.createContext(W);var G=Object(c.h)(function(){return r.a.createElement("div",{className:"App"},r.a.createElement(c.b,{history:H,basename:"".concat("","/")},r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",component:z}),r.a.createElement(c.a,{path:"/projects/:url"},r.a.createElement(p,{data:W})),r.a.createElement(c.a,{path:"/projects",render:function(e){return r.a.createElement(B,Object.assign({},e,{projectsData:W}))}}),r.a.createElement(c.a,{path:"/about",component:w}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(o.a,null,r.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.554b8806.chunk.js.map