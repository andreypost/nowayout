(this.webpackJsonpnowayout=this.webpackJsonpnowayout||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"static/media/icons.223c41b8.svg"},31:function(e,t,a){e.exports=a.p+"static/media/Image_000.23ca43a7.jpg"},32:function(e,t,a){e.exports=a.p+"static/media/Image_001.dbf1ae4b.jpg"},33:function(e,t,a){e.exports=a.p+"static/media/Image_002.10d826eb.jpg"},34:function(e,t,a){e.exports=a.p+"static/media/Image_003.296106c4.jpg"},35:function(e,t,a){e.exports=a.p+"static/media/Image_004.538ef2ca.jpg"},36:function(e,t,a){e.exports=a(66)},41:function(e,t,a){},42:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t),a.d(t,"App",(function(){return B}));var n=a(0),c=a.n(n),l=a(28),r=a.n(l),o=a(6),i=a(1),s=(a(41),a(42),a(43),a(44),a(12)),m=a(29),u=a.n(m),d=a(14),f=a.n(d),E=function(){return Object(n.useEffect)((function(){var e=document.querySelector(".header__burger");return function(e){e.onclick=function(){!function(){var t,a=Object(s.a)(e.querySelectorAll("i"));try{for(a.s();!(t=a.n()).done;){t.value.classList.toggle("active")}}catch(n){a.e(n)}finally{a.f()}}()}}(e),function(){var t,a=Object(s.a)(e.querySelectorAll("i"));try{for(a.s();!(t=a.n()).done;){t.value.classList.remove("active")}}catch(n){a.e(n)}finally{a.f()}}}),[]),c.a.createElement("header",{className:"section sansBold"},c.a.createElement("nav",{className:"grid header__nav"},c.a.createElement("ul",{className:"flexcentbet header__links"},c.a.createElement("li",{className:"header__burger relative pointer"},c.a.createElement("i",null),c.a.createElement("i",null),c.a.createElement("i",null)),c.a.createElement("li",null,c.a.createElement(o.b,{to:"/"},"Rooms")),c.a.createElement("li",null,c.a.createElement(o.b,{to:"/"},"Booking")),c.a.createElement("li",null,c.a.createElement(o.b,{to:"/"},"Contacts"))),c.a.createElement(o.b,{to:"/",className:"header__logo"},c.a.createElement("svg",null,c.a.createElement("use",{xlinkHref:"".concat(f.a,"#logo")}))),c.a.createElement("ul",{className:"flexcentbet header__cabinet"},c.a.createElement("li",null,c.a.createElement("a",{href:"tel:+436606050000"},"+43 660 605 0000")),c.a.createElement("li",{className:"relative pointer"},c.a.createElement("svg",{className:"header__bag"},c.a.createElement("use",{xlinkHref:"".concat(f.a,"#shopingbag")})),c.a.createElement("svg",{className:"header__shop"},c.a.createElement("use",{xlinkHref:"".concat(f.a,"#basket")})),c.a.createElement("span",{className:"header__count px12 red"},"2")),c.a.createElement("li",{className:"flexcentbet header__lung"},c.a.createElement(o.b,{to:"/",className:"active"},"DE"),c.a.createElement(o.b,{to:"/"},"EN")))))},h=a(31),p=a.n(h),v=a(32),g=a.n(v),_=a(33),b=a.n(_),N=a(34),x=a.n(N),w=a(35),k=a.n(w),y=[{image:p.a,clase:"",title:"Da Vinci",descript:"Mystery",href:"/",timeout:"2020-07-16T21:00:00"},{image:g.a,clase:"",title:"Mission Belvedere",descript:"Action",href:"/",timeout:"2020-07-16T21:00:00"},{image:b.a,clase:"",title:"School of magic",descript:"Adventure",href:"/",timeout:"2020-07-16T24:00:00"},{image:x.a,clase:"active",title:"The Unknown",descript:"Horror with live actor",href:"/",timeout:"2020-07-16T21:00:00"},{image:k.a,clase:"active",title:"The Nun",descript:"Horror with live actor",href:"/",timeout:"2020-07-16T21:00:00"}],T=function(e){return c.a.createElement(o.b,{to:e.datos.href,className:"item flex card__vision pointer"},c.a.createElement("img",{src:e.datos.image,alt:"banner"}),e.children,c.a.createElement("div",{className:"card__title white"},c.a.createElement("h2",{className:"sansBold"},e.datos.title),c.a.createElement("p",{className:"sansThin relative card__text "+e.datos.clase},e.datos.descript)))},j=function(){return Object(n.useEffect)((function(){window.scrollTo(0,0);var e=null;return function(t){var a,n=Object(s.a)(t);try{var c=function(){var t=a.value,n=new Date(t.dataset.counter).getTime(),c=0,l=function(){var e=(new Date).getTime();if(!((c=n-e)<0)){var a=Math.floor(c%864e5/36e5),l=Math.floor(c%36e5/6e4),r=Math.floor(c%6e4/1e3);a<10&&(a="0"+a),l<10&&(l="0"+l),r<10&&(r="0"+r),t.innerHTML=a+" : "+l+" : "+r}};l(),e=setInterval((function(){l(),c<0&&clearInterval(e)}),1e3)};for(n.s();!(a=n.n()).done;)c()}catch(l){n.e(l)}finally{n.f()}}(document.querySelectorAll("#counterStock")),function(){clearInterval(e)}}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(E,null),c.a.createElement("main",null,c.a.createElement("section",{className:"section"},c.a.createElement(u.a,{className:"owl-carousel owl-theme",loop:!0,rewind:!0,margin:10,nav:!0,dots:!1,autoplay:!0,navText:!1,responsive:{0:{items:2},580:{items:3},1024:{items:4},1360:{items:5}}},c.a.createElement(T,{datos:y[0]},c.a.createElement("div",{className:"flexcentaround card__discount white"},c.a.createElement("h2",{className:"morganiteBold"},"20% off"),c.a.createElement("div",null,c.a.createElement("h4",{className:"sansThin px14"},"Limited-time Deal"),c.a.createElement("p",{className:"sansBlack px18",id:"counterStock","data-counter":y[0].timeout},"00 : 00 : 00 : 00")))),c.a.createElement(T,{datos:y[1]}),c.a.createElement(T,{datos:y[2]},c.a.createElement("div",{className:"flexcentaround card__discount white"},c.a.createElement("h2",{className:"morganiteBold"},"20% off"),c.a.createElement("div",null,c.a.createElement("h4",{className:"sansThin px14"},"Limited-time Deal"),c.a.createElement("p",{className:"sansBlack px18",id:"counterStock","data-counter":y[2].timeout},"00 : 00 : 00 : 00")))),c.a.createElement(T,{datos:y[3]}),c.a.createElement(T,{datos:y[4]}),c.a.createElement(T,{datos:y[0]}),c.a.createElement(T,{datos:y[1]}),c.a.createElement(T,{datos:y[2]}),c.a.createElement(T,{datos:y[3]}),c.a.createElement(T,{datos:y[4]})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=function(){return c.a.createElement(o.a,{basename:"/"},c.a.createElement(i.a,{exact:!0,path:"/",component:j}))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.e9756772.chunk.js.map