(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/cat_icon.a499faa0.png"},21:function(e,t,a){e.exports=a.p+"static/media/soy_sauce.d47132d1.png"},27:function(e,t,a){e.exports=a.p+"static/media/luckycat.eb9ff440.glb"},28:function(e,t,a){e.exports=a.p+"static/media/blue_fish.d24dc50d.png"},32:function(e,t,a){e.exports=a(44)},37:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(17),l=a.n(i),c=(a(37),a(8)),o=a(7),s=a(18),m=a.n(s);var u=function(){return r.a.createElement("div",{className:"homeButton"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:m.a})))};var d=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(u,null)),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/projects"},"projects")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://daniellehoo.github.io/blog/posts"},"blog")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/about"},"about")))))};var h=function(){var e=[{id:0,url:"http://www.instagram.com/danihoo",class:"fab fa-instagram"},{id:1,url:"http://github.com/daniellehoo",class:"fab fa-github"},{id:2,url:"http://www.twitter.com/daniellehoo",class:"fab fa-twitter"},{id:3,url:"http://www.soundcloud.com/danihoo",class:"fab fa-soundcloud"},{id:4,url:"http://www.linkedin.com/in/danielle-hoo",class:"fab fa-linkedin"},{id:5,url:"http://www.medium.com/@danihoo",class:"fab fa-medium"},{id:6,url:"https://www.pinterest.com/daniellemhoo/",class:"fab fa-pinterest"}].map(function(e){return r.a.createElement("div",{className:"button id_".concat(e.id,", key=").concat(e.id)},r.a.createElement("a",{href:"".concat(e.url)},r.a.createElement("i",{className:"".concat(e.class)})))});return r.a.createElement("div",{className:"social"},e)};var p=function(e){var t=Object(c.f)().url,a=Object.values(e)[0].map(function(e){return e.url===t?r.a.createElement("div",{dangerouslySetInnerHTML:{__html:(a=e.description,a.replace(/The Chinese in America/g,"<a href='https://www.penguinrandomhouse.com/books/288096/the-chinese-in-america-by-iris-chang/'>The Chinese in America</a>"))}}):null;var a});return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"project"},r.a.createElement(d,null),a,r.a.createElement(h,null)))},f=a(21),E=a.n(f);var b=function(){return r.a.createElement("div",{className:"contact"},r.a.createElement(d,null),r.a.createElement("h1",null,"About"),r.a.createElement("img",{src:E.a}),r.a.createElement("p",null,"brooklyn, NY resident"),r.a.createElement("p",null,"software engineer"),r.a.createElement("p",null,"former Museum of Modern Art (MoMA) employee"),r.a.createElement("p",null,"interest in contemporary art, design, & web development"),r.a.createElement("p",null,"occasional runner, wanderer & Canon G16 user"),r.a.createElement("div",{className:"spacer"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,"contact:",r.a.createElement("a",{href:"mailto:daniellem.hoo@gmail.com?subject=Hello!"},"email")),r.a.createElement(h,null))};var w=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Danielle Hoo",r.a.createElement("span",{class:"blinking-cursor"},"|")))},g=a(22),v=a(23),j=a(30),_=a(24),y=a(31),k=a(6),O=a(25),C=a(26),N=a.n(C),A=a(0),x=a(27),F=a.n(x),I=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(j.a)(this,Object(_.a)(t).call(this,e))).on_window_resize=function(){a.width=a.mount.getClientRects()[0].width,a.height=a.mount.getClientRects()[0].height,a.camera.aspect=a.width/a.height,a.camera.updateProjectionMatrix(),a.renderer.setSize(a.width,a.height)},a.start=a.start.bind(Object(k.a)(Object(k.a)(a))),a.stop=a.stop.bind(Object(k.a)(Object(k.a)(a))),a.animate=a.animate.bind(Object(k.a)(Object(k.a)(a))),a}return Object(y.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=this.mount.clientWidth,t=this.mount.clientHeight;this.scene=new A.rb,this.camera=new A.gb(75,e/t,.001,1e4),this.camera.position.z=4,this.renderer=new A.Lb({logarithmicDepthBuffer:!0,context:null,precision:"highhp",premultipliedAlpha:!0,antialias:!0,powerPreference:"high-performance"}),this.renderer.setClearColor("#FFFFFF"),this.renderer.setSize(e,t),this.mount.appendChild(this.renderer.domElement),this.controls=new N.a(this.camera,this.renderer.domElement),this.controls.update(),this.amb_light=new A.c(4210752,8),this.scene.add(this.amb_light),this.raycaster=new A.ob,this.mouse=new A.Gb;var a=this;(new O.a).load(F.a,function(e){a.model=e.scenes[0],a.scene.add(a.model);var t=(new A.g).setFromObject(a.model),n=t.max.x+.235,r=t.max.y;a.model.scale.set(3.5/n,3.5/r,3.5/r);(new A.g).setFromObject(a.model);a.model.position.x=0,a.model.position.y=0,a.model.position.z=0,a.model_bbox=(new A.g).setFromObject(a.model),console.log(this.model.material),a.model.material.transparent=!0,a.model.material.opacity=1},function(e){console.log(e.loaded/e.total*100+"% loaded")},function(e){console.log("An error happened")}),this.start()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.on_window_resize),this.stop(),this.mount.removeChild(this.renderer.domElement)}},{key:"start",value:function(){this.frameId||(this.frameId=requestAnimationFrame(this.animate))}},{key:"stop",value:function(){cancelAnimationFrame(this.frameId)}},{key:"animate",value:function(){this.renderScene(),this.frameId=window.requestAnimationFrame(this.animate)}},{key:"renderScene",value:function(){this.renderer.render(this.scene,this.camera)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"model",style:{width:"100vw",height:"100vh"},ref:function(t){e.mount=t}})}}]),t}(n.Component);var S=function(){return r.a.createElement("div",{className:"landing"},r.a.createElement(w,null),r.a.createElement(d,null),r.a.createElement(I,null),r.a.createElement(h,null))},z=a(29),M=a(28),D=a.n(M);var T=function(e){var t=Object(n.useState)("/"),a=Object(z.a)(t,2),i=(a[0],a[1],e.projectsData.map(function(e){return r.a.createElement("div",{className:"project id_".concat(e.id),key:e.id},r.a.createElement("a",{href:"/projects/".concat(e.url),onClick:function(){console.log("click")}},e.title),r.a.createElement("img",{src:e.img}))}));return r.a.createElement("div",{className:"projects"},r.a.createElement(d,null),r.a.createElement("h1",null,"Projects"),r.a.createElement("img",{src:D.a}),i,r.a.createElement(h,null))},B=(a(43),[{id:0,title:"Chinatown USA",url:"chinatown_usa",img:"https://live.staticflickr.com/65535/49593430952_712dc0cce1_b.jpg",description:"Chinatown, USA was inspired by The Chinese in America"},{id:1,title:"Our Children's Trust",url:"our_childrens_trust",img:"https://live.staticflickr.com/65535/49592718198_6760f8c00d_b.jpg",description:"our childreen's trustdfssdf "},{id:2,title:"Nicaragua",url:"nicaragua",img:"https://live.staticflickr.com/65535/49593769191_4de582e8d0_b.jpg",description:"GIEI NICA "},{id:3,title:"Amnesty International",url:"amnesty_international",img:"https://live.staticflickr.com/65535/49593280613_513f9fe243_b.jpg",description:"teear gassss "}]);r.a.createContext(B);var H=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(o.a,{basename:"".concat("/dev_portfolio","/")},r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",component:S}),r.a.createElement(c.a,{path:"/projects/:url"},r.a.createElement(p,{data:B})),r.a.createElement(c.a,{path:"/projects",render:function(e){return r.a.createElement(T,Object.assign({},e,{projectsData:B}))}}),r.a.createElement(c.a,{path:"/about",component:b}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(o.a,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.312e485f.chunk.js.map