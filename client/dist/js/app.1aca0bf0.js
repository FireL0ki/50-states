(function(t){function e(e){for(var a,i,s=e[0],o=e[1],u=e[2],d=0,f=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&f.push(c[i][0]),c[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var o=n[i];0!==c[o]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},c={app:0},r=[];function i(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-2d0c9189":"c81458cc","chunk-2d0cf391":"020c75ea","chunk-2d0da8f3":"c8c3e7e8","chunk-2d2248b6":"d84473c1","chunk-2d22523a":"4b710d99"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=c[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=c[t]=[e,a]}));e.push(n[2]=a);var r,o=document.createElement("script");o.charset="utf-8",o.timeout=120,s.nc&&o.setAttribute("nonce",s.nc),o.src=i(t);var u=new Error;r=function(e){o.onerror=o.onload=null,clearTimeout(d);var n=c[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",u.name="ChunkLoadError",u.type=a,u.request=r,n[1](u)}c[t]=void 0}};var d=setTimeout((function(){r({type:"timeout",target:o})}),12e4);o.onerror=o.onload=r,document.head.appendChild(o)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var l=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"026c":function(t,e,n){"use strict";n("4f82")},"15c0":function(t,e,n){},4156:function(t,e,n){},"4f82":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),c=Object(a["f"])("p",null,"TODO - app content ",-1);function r(t,e,n,r,i,s){var o=Object(a["A"])("page-header"),u=Object(a["A"])("router-view"),d=Object(a["A"])("page-footer");return Object(a["s"])(),Object(a["e"])("div",null,[Object(a["h"])(o),c,Object(a["h"])(u),Object(a["h"])(d)])}var i=function(t){return Object(a["v"])("data-v-49a9cd36"),t=t(),Object(a["t"])(),t},s={id:"block-header"},o=i((function(){return Object(a["f"])("h1",{id:"title"},"Have you visited every state?",-1)})),u=[o];function d(t,e,n,c,r,i){return Object(a["s"])(),Object(a["e"])("div",s,u)}var l={name:"PageHeader"},f=(n("df24"),n("6b0d")),b=n.n(f);const h=b()(l,[["render",d],["__scopeId","data-v-49a9cd36"]]);var O=h,p=function(t){return Object(a["v"])("data-v-52d1d5f6"),t=t(),Object(a["t"])(),t},v={id:"navigation-links"},j={class:"nav-link"},m=Object(a["g"])("Home"),A={class:"nav-link"},y=Object(a["g"])("About this Site"),g=p((function(){return Object(a["f"])("p",null,[Object(a["g"])("Header image by "),Object(a["f"])("a",{href:"https://unsplash.com/photos/KpBXAOs80YI"},"@chrislawton on Unsplash")],-1)})),S=p((function(){return Object(a["f"])("p",null,[Object(a["f"])("a",{target:"_blank",href:"https://icons8.com/icon/43632/map"},"Map icon"),Object(a["g"])(" by "),Object(a["f"])("a",{target:"_blank",href:"https://icons8.com"},"Icons8")],-1)}));function w(t,e,n,c,r,i){var s=Object(a["A"])("router-link");return Object(a["s"])(),Object(a["e"])("div",null,[Object(a["f"])("div",v,[Object(a["f"])("span",j,[Object(a["h"])(s,{to:"/"},{default:Object(a["G"])((function(){return[m]})),_:1})]),Object(a["f"])("span",A,[Object(a["h"])(s,{to:"/about"},{default:Object(a["G"])((function(){return[y]})),_:1})])]),g,S])}var V={name:"PageFooter"};n("b557");const k=b()(V,[["render",w],["__scopeId","data-v-52d1d5f6"]]);var M=k,Y=(n("b0c0"),{class:"state-list-container"});function E(t,e,n,c,r,i){var s=Object(a["A"])("state-summary"),o=Object(a["A"])("state-detail");return Object(a["s"])(),Object(a["e"])("div",null,[Object(a["f"])("div",null,[Object(a["h"])(s,{states:r.states},null,8,["states"])]),Object(a["f"])("div",Y,[(Object(a["s"])(!0),Object(a["e"])(a["a"],null,Object(a["z"])(r.states,(function(t){return Object(a["s"])(),Object(a["e"])("div",{class:"state-container",key:t.name},[Object(a["h"])(o,{state:t,onUpdateVisited:i.updateVisited},null,8,["state","onUpdateVisited"])])})),128))])])}var G=n("9b1b"),C=n.n(G),P=function(t){return Object(a["v"])("data-v-a9587982"),t=t(),Object(a["t"])(),t},I={class:"state-info"},W={class:"state-name"},z=P((function(){return Object(a["f"])("img",{class:"map-icon",src:C.a},null,-1)}));function Z(t,e,n,c,r,i){var s=Object(a["A"])("router-link");return Object(a["s"])(),Object(a["e"])("div",I,[Object(a["f"])("span",W,Object(a["C"])(n.state.name),1),Object(a["f"])("div",null,[Object(a["H"])(Object(a["f"])("input",{class:"visit-state",type:"checkbox","onUpdate:modelValue":e[0]||(e[0]=function(t){return r.visited=t}),onChange:e[1]||(e[1]=function(){return i.visitedChanged&&i.visitedChanged.apply(i,arguments)})},null,544),[[a["E"],r.visited]])]),Object(a["f"])("div",null,[Object(a["h"])(s,{to:{name:"StateMap",params:{state:n.state.name}}},{default:Object(a["G"])((function(){return[z]})),_:1},8,["to"])])])}var F={name:"StateDetail",emits:["update-visited"],props:{state:Object},data:function(){return{visited:this.state.visited}},methods:{visitedChanged:function(){this.$emit("update-visited",this.state.name,this.visited)}}};n("f4a2");const L=b()(F,[["render",Z],["__scopeId","data-v-a9587982"]]);var q=L,x={key:0,id:"all-visited-message"};function B(t,e,n,c,r,i){return Object(a["s"])(),Object(a["e"])("div",null,[Object(a["f"])("p",null,"There are a total of "+Object(a["C"])(n.states.length)+" states and the District of Columbia",1),Object(a["f"])("p",null,"You have visited "+Object(a["C"])(i.totalVisited)+" "+Object(a["C"])(i.units),1),i.areAllVisited?(Object(a["s"])(),Object(a["e"])("p",x,"You have visited all of the states and the District of Columbia")):Object(a["d"])("",!0)])}n("d3b7"),n("159b");var R={name:"StateSummary",props:{states:Array},computed:{totalVisited:function(){var t=0;return this.states.forEach((function(e){e.visited&&t++})),t},units:function(){return 1==this.totalVisited?"state":"states"},areAllVisited:function(){return this.totalVisited===this.states.length}}};n("9953");const X=b()(R,[["render",B],["__scopeId","data-v-2096fbfd"]]);var H=X,D={components:{StateDetail:q,StateSummary:H},name:"StateList",data:function(){return{states:[]}},mounted:function(){this.fetchAllStates()},methods:{fetchAllStates:function(){var t=this;this.$stateService.getAllStates().then((function(e){t.states=e})).catch((function(t){alert("Sorry, can't fetch state list"),console.error(t)}))},updateVisited:function(t,e){var n=this;this.$stateService.setVisited(t,e).then((function(){n.fetchAllStates()})).catch((function(t){alert("Sorry, can't update state"),console.error(t)}))}}};n("7bb4");const T=b()(D,[["render",E],["__scopeId","data-v-71d3e097"]]);var U=T,K={name:"App",components:{PageHeader:O,PageFooter:M,StateList:U}};n("cd24");const Q=b()(K,[["render",r]]);var J=Q,N=n("bc3a"),_=n.n(N),$={getAllStates:function(){return _.a.get("/api/states").then((function(t){return t.data}))},setVisited:function(t,e){var n={visited:e};return _.a.patch("/api/states/"+t,n).then((function(t){return t.data}))},getOneState:function(t){return _.a.get("/api/state/"+t).then((function(t){return t.data}))}},tt=n("3608"),et=Object(a["f"])("h2",null,"Where have you traveled to?",-1),nt=Object(a["f"])("p",null,"Use this site to keep track of which states you have traveled to",-1),at=Object(a["f"])("p",null,"A Vue.js site by Loki",-1),ct=[et,nt,at];function rt(t,e,n,c,r,i){return Object(a["s"])(),Object(a["e"])("div",null,ct)}var it={name:"AboutSite"};const st=b()(it,[["render",rt]]);var ot=st,ut={class:"state-map"},dt={key:0},lt={key:1},ft={key:2,id:"map-container"};function bt(t,e,n,c,r,i){var s=Object(a["A"])("l-tile-layer"),o=Object(a["A"])("l-map");return Object(a["s"])(),Object(a["e"])("div",ut,[Object(a["f"])("h2",null,"The state of "+Object(a["C"])(r.state.name),1),r.state.visited?(Object(a["s"])(),Object(a["e"])("p",dt,"You have visited this state")):(Object(a["s"])(),Object(a["e"])("p",lt,"You have not visited this state yet")),r.dataReady?(Object(a["s"])(),Object(a["e"])("div",ft,[Object(a["h"])(o,{ref:"map",onReady:i.onMapReady,center:i.mapCenter,zoom:r.state.zoom},{default:Object(a["G"])((function(){return[Object(a["h"])(s,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:"$copy; OpenStreetMap contributors"})]})),_:1},8,["onReady","center","zoom"])])):Object(a["d"])("",!0)])}n("d81d");var ht=n("5afd"),Ot={name:"StateMap",components:{LMap:ht["a"],LTileLayer:ht["b"]},data:function(){return{state:{},dataReady:!1,mapReady:!1}},mounted:function(){this.state.name=this.$route.params.state,this.fetchStateData()},methods:{fetchStateData:function(){var t=this;this.$stateService.getOneState(this.state.name).then((function(e){t.state=e,t.dataReady=!0})).catch((function(e){e.response&&404===e.response.status?t.state.name="?":(alert("Sorry, error fetching data about this state"),console.error(e))}))},onMapReady:function(){this.mapReady=!0},setMapView:function(){this.mapReady&&this.dataReady&&this.$ref.map.leafletObject.setView(this.mapCenter,this.zoom)}},computed:{mapCenter:function(){return[this.state.lat,this.state.lon]}}};n("026c");const pt=b()(Ot,[["render",bt],["__scopeId","data-v-228758d4"]]);var vt=pt,jt=Object(tt["a"])({history:Object(tt["b"])(),routes:[{path:"/",name:"StateList",component:U},{path:"/about",name:"AboutSite",component:ot},{path:"/map/:state",name:"StateMap",component:vt}]}),mt=(n("6cc5"),Object(a["c"])(J));mt.config.globalProperties.$stateService=$,mt.use(jt),mt.mount("#app")},"7aaa":function(t,e,n){},"7bb4":function(t,e,n){"use strict";n("4156")},"81bd":function(t,e,n){},9953:function(t,e,n){"use strict";n("81bd")},"9b1b":function(t,e){t.exports="data:image/png;base64,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"},b557:function(t,e,n){"use strict";n("7aaa")},c7e9:function(t,e,n){},cd24:function(t,e,n){"use strict";n("da09")},da09:function(t,e,n){},df24:function(t,e,n){"use strict";n("c7e9")},f4a2:function(t,e,n){"use strict";n("15c0")}});
//# sourceMappingURL=app.1aca0bf0.js.map