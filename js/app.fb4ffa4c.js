(function(t){function e(e){for(var a,o,s=e[0],l=e[1],c=e[2],p=0,d=[];p<s.length;p++)o=s[p],n[o]&&d.push(n[o][0]),n[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],a=!0,s=1;s<r.length;s++){var l=r[s];0!==n[l]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=r[0]))}return t}var a={},n={app:0},i=[];function o(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=a,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(r,a,function(e){return t[e]}.bind(null,a));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("cd49")},"3cb4":function(t,e,r){"use strict";var a=r("ad0e"),n=r.n(a);n.a},"51d6":function(t,e,r){"use strict";var a=r("8c55"),n=r.n(a);n.a},"5c0b":function(t,e,r){"use strict";var a=r("5e27"),n=r.n(a);n.a},"5e27":function(t,e,r){},8404:function(t,e,r){"use strict";var a=r("c996"),n=r.n(a);n.a},"8c55":function(t,e,r){},a97f:function(t,e,r){"use strict";var a=r("fb7c"),n=r.n(a);n.a},ad0e:function(t,e,r){},c996:function(t,e,r){},cd49:function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var a=r("2b0e"),n=r("a65d"),i=r.n(n),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"headers"},[r("transition",["done"!==t.loadingState.state?r("div",{staticClass:"loader"},[r("div",{staticClass:"loading-bar",style:{width:(t.loadingState.download?t.loadingState.download:0)+"%"}}),r("div",{staticClass:"loading-title"},[r("div",{staticClass:"loading-title-main"},[t._v("Loading data...")]),r("div",{staticClass:"loading-title-sub"},["downloading"===t.loadingState.state?r("span",[t._v("downloading ("+t._s(t.loadingState.download.toFixed(2))+"%)")]):r("span",[t._v("extracting data")])])])]):t._e()])],1),r("div",{staticClass:"main",attrs:{id:"main"}},[r("player-conf-panel",{staticClass:"player-conf-panel-a",attrs:{"player-name":"A",id:"player-conf-panel-a"},on:{becomeValid:function(e){return t.scrollMainPanel(1)}},model:{value:t.playerA,callback:function(e){t.playerA=e},expression:"playerA"}}),r("player-conf-panel",{staticClass:"player-conf-panel-b",attrs:{"player-name":"B",id:"player-conf-panel-b"},model:{value:t.playerB,callback:function(e){t.playerB=e},expression:"playerB"}})],1),r("div",{staticClass:"actions"},[r("action-button",{attrs:{label:"clear all results"},on:{click:function(e){return t.clear()}}}),r("action-button",{attrs:{label:"reset selections"},on:{click:function(e){return t.reset()}}}),r("action-button",{attrs:{label:"roll the dice !"},on:{click:function(e){return t.roll()}}})],1),r("div",{staticClass:"results"},[r("transition-group",{attrs:{name:"results",tag:"div"}},t._l(t.results,function(t){return r("roll-result",{key:t.key,attrs:{input:t}})}),1),t._l(t.errors,function(e){return r("div",[t._v(t._s(e))])}),r("div",{staticClass:"version"},[t._v("version "+t._s(t.version))])],2)])},s=[],l=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),c=r("d225"),u=r("b0b4"),p=r("308d"),d=r("6bb5"),b=r("4e2b"),f=r("9ab4"),v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"action-button",attrs:{disabled:t.disabled},on:{click:function(e){return e.preventDefault(),t.onClick(e)}}},[t._v(t._s(t.label))])},y=[],g=r("60a3"),h=function(t){function e(){var t;return Object(c["a"])(this,e),t=Object(p["a"])(this,Object(d["a"])(e).apply(this,arguments)),t.animation=!1,t}return Object(b["a"])(e,t),Object(u["a"])(e,[{key:"onClick",value:function(){var t=this;this.animation=!0,setTimeout(function(){return t.animation=!1},500)}}]),e}(g["d"]);f["a"]([Object(g["c"])()],h.prototype,"label",void 0),f["a"]([Object(g["c"])()],h.prototype,"active",void 0),f["a"]([Object(g["c"])()],h.prototype,"disabled",void 0),f["a"]([Object(g["b"])("click")],h.prototype,"onClick",null),h=f["a"]([g["a"]],h);var O=h,m=O,j=(r("a97f"),r("2877")),C=Object(j["a"])(m,v,y,!1,null,"ec47007e",null),A=C.exports,w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{viewBox:"0 0 175 200"}},[r("a",{attrs:{tabindex:"0"},on:{click:t.onClick}},[r("polyline",{attrs:{id:"hexagon",points:"87,2 173,50 173,150 87,198 2,150 2,50 87,2"}}),r("text",{attrs:{x:"90",y:"95","text-anchor":"middle","font-size":"70","dominant-baseline":"central","alignment-baseline":"central"}},[t._v("\n            "+t._s(t.label)+"\n        ")])])])},k=[],x=function(t){function e(){return Object(c["a"])(this,e),Object(p["a"])(this,Object(d["a"])(e).apply(this,arguments))}return Object(b["a"])(e,t),Object(u["a"])(e,[{key:"onClick",value:function(){}}]),e}(g["d"]);f["a"]([Object(g["c"])()],x.prototype,"label",void 0),f["a"]([Object(g["c"])()],x.prototype,"active",void 0),f["a"]([Object(g["b"])("click")],x.prototype,"onClick",null),x=f["a"]([g["a"]],x);var B=x,_=B,E=(r("3cb4"),Object(j["a"])(_,w,k,!1,null,"154fbab6",null)),P=E.exports,D=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"player-conf-panel"},[r("h2",[t._v("Player "+t._s(t.playerName)+" Burst")]),r("select-hex-button",{staticClass:"grid-6",attrs:{options:t.diceOptions,value:t.value.burst},on:{input:t.updateBurst}}),r("h2",[t._v("Player "+t._s(t.playerName)+" rolls on")]),r("select-hex-button",{staticClass:"grid-30",attrs:{options:t.attributesOptions,value:t.value.attribute},on:{input:t.updateAttribute}})],1)},S=[],H=r("75fc"),F=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"select-hex-buttons"},t._l(this.options,function(e,a){var n;return r("hex-button",{key:e.label,class:(n={active:t.value===e.value,"select-hex-button":!0},n["select-hex-button-"+(a+1)]=!0,n),attrs:{label:e.label?e.label:e.value},on:{click:function(r){return t.onOptionSelect(e)}}})}),1)},R=[],$=function(t){function e(){return Object(c["a"])(this,e),Object(p["a"])(this,Object(d["a"])(e).apply(this,arguments))}return Object(b["a"])(e,t),Object(u["a"])(e,[{key:"onOptionSelect",value:function(t){this.$emit("input",t.value)}}]),e}(g["d"]);f["a"]([Object(g["c"])({default:null})],$.prototype,"value",void 0),f["a"]([Object(g["c"])({default:[]})],$.prototype,"options",void 0),$=f["a"]([Object(g["a"])({components:{HexButton:P}})],$);var M=$,N=M,I=Object(j["a"])(N,F,R,!1,null,"1a9a1849",null),T=I.exports;function L(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,a)}return r}function q(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?L(r,!0).forEach(function(e){Object(l["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):L(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var V=function(t){function e(){var t;return Object(c["a"])(this,e),t=Object(p["a"])(this,Object(d["a"])(e).apply(this,arguments)),t.diceOptions=Object(H["a"])(Array(6).keys()).map(function(t){return{value:t+1}}),t.attributesOptions=Object(H["a"])(Array(30).keys()).map(function(t){return{value:t+1}}),t}return Object(b["a"])(e,t),Object(u["a"])(e,[{key:"updateBurst",value:function(t){var e=!this.value.attribute||!this.value.burst,r=!this.value.attribute||!t;this.$emit("input",q({},this.value,{burst:t})),e&&!r&&this.$emit("becomeValid")}},{key:"updateAttribute",value:function(t){var e=!this.value.attribute||!this.value.burst,r=!this.value.burst||!t;this.$emit("input",q({},this.value,{attribute:t})),e&&!r&&this.$emit("becomeValid")}}]),e}(g["d"]);f["a"]([Object(g["c"])({default:""})],V.prototype,"playerName",void 0),f["a"]([Object(g["c"])({default:null})],V.prototype,"value",void 0),V=f["a"]([Object(g["a"])({components:{SelectHexButton:T}})],V);var W=V,J=W,z=(r("8404"),Object(j["a"])(J,D,S,!1,null,"5ae319e6",null)),Q=z.exports,X=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"roll-result"},[r("h5",[t._v(t._s(t.input.playerA.burst)+" dice at "+t._s(t.input.playerA.attribute)+" VS "+t._s(t.input.playerB.burst)+" dice at "+t._s(t.input.playerB.attribute))]),r("div",{staticClass:"ftf-grid",style:{"grid-template-columns":t.percentData.playerACrit+"% "+t.percentData.playerAHit+"% auto "+t.percentData.playerBHit+"% "+t.percentData.playerBCrit+"%"}},[r("div",{staticClass:"ftf-grid-legend ftf-grid-legend-top"},[r("span",{staticClass:"player-a"},[t._v("Player A hit ("+t._s((t.percentData.playerACrit+t.percentData.playerAHit).toFixed(2))+"%)")]),r("span",{staticClass:"player-b"},[t._v("Player B hit ("+t._s((t.percentData.playerBCrit+t.percentData.playerBHit).toFixed(2))+"%)")])]),r("div",{staticClass:"ftf-grid-legend-bar ftf-grid-legend-bar-top ftf-grid-legend-bar-player-a"}),r("div",{staticClass:"ftf-grid-legend-bar ftf-grid-legend-bar-top ftf-grid-legend-bar-player-b"}),r("div",{staticClass:"ftf-grid-bar ftf-grid-bar-player-a crit"}),r("div",{staticClass:"ftf-grid-bar ftf-grid-bar-player-a hit"}),r("div",{staticClass:"ftf-grid-bar ftf-grid-bar-nothing"}),r("div",{staticClass:"ftf-grid-bar ftf-grid-bar-player-b hit"}),r("div",{staticClass:"ftf-grid-bar ftf-grid-bar-player-b crit"}),r("div",{staticClass:"ftf-grid-legend-bar ftf-grid-legend-bar-bottom ftf-grid-legend-bar-player-a"}),r("div",{staticClass:"ftf-grid-legend-bar ftf-grid-legend-bar-bottom ftf-grid-legend-bar-player-b"}),r("tr",{staticClass:"ftf-grid-legend ftf-grid-legend-bottom"},[r("span",{staticClass:"player-a"},[t._v("Player A Crit ("+t._s(t.percentData.playerACrit.toFixed(2))+"%)")]),r("span",{staticClass:"player-b"},[t._v("Player B Crit ("+t._s(t.percentData.playerBCrit.toFixed(2))+"%)")])])])])},G=[],K=(r("a481"),r("28a5"),r("96cf"),r("3b8d")),U=r("3f4f"),Y="IQB",Z=3,tt="iqd-rolls",et=18900,rt=13701847,at=function(){function t(){Object(c["a"])(this,t),this.callback=null}return Object(u["a"])(t,[{key:"subscribe",value:function(t){this.callback=t}},{key:"emit",value:function(t){this.callback&&this.callback(t)}}]),t}(),nt=new at,it=new at;function ot(){return st.apply(this,arguments)}function st(){return st=Object(K["a"])(regeneratorRuntime.mark(function t(){var e,r,a,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if("indexedDB"in window){t.next=2;break}throw new Error("This browser doesn't support IndexedDB");case 2:return t.next=4,Object(U["a"])(Y,Z,{upgrade:function(){var t=Object(K["a"])(regeneratorRuntime.mark(function t(e,r,a,n){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e.objectStoreNames.contains(tt)){t.next=3;break}return t.next=3,e.createObjectStore(tt);case 3:case"end":return t.stop()}},t)}));function e(e,r,a,n){return t.apply(this,arguments)}return e}()});case 4:return e=t.sent,t.next=7,e.count(tt);case 7:return r=t.sent,console.log("currently "+r+" entries in indexedDb"),a=r!=et,a?(console.log("loading rolls"),nt.emit({state:"downloading",download:0}),n=new XMLHttpRequest,n.responseType="json",n.onerror=function(t){it.emit("Request to load data failed")},n.addEventListener("progress",function(t){var e;e=t.lengthComputable?t.loaded/t.total*100:t.loaded/rt*100,nt.emit({state:"downloading",download:e}),console.log(e)}),n.addEventListener("readystatechange",function(){var t=Object(K["a"])(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(2!=n.readyState||200!=n.status){t.next=4;break}console.log("starting download"),t.next=19;break;case 4:if(3!=n.readyState){t.next=8;break}console.log("Download is under progress"),t.next=19;break;case 8:if(4!=n.readyState){t.next=19;break}if(200==n.status){t.next=12;break}return it.emit("Failed to download data, please reload"),t.abrupt("return");case 12:console.log("Downloading has finished"),console.time("inserting"),nt.emit({state:"extracting",download:100}),r=new Worker("/PersistRollsWorker.js"),r.onerror=function(t){return it.emit(t.message)},r.onmessage=function(t){switch(console.log("got response from worker",t&&t.data),t.data.state){case"ready":r.postMessage({action:"load",storeName:tt,rolls:n.response});break;case"loaded":console.timeEnd("inserting"),nt.emit({state:"done"});break;case"error":it.emit(t.data.details);break}},r.postMessage({action:"init",dbName:Y,dbVersion:Z});case 19:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()),n.open("get","rolls/rolls.json"),n.send()):(nt.emit({state:"done"}),console.log("data loading not needed")),t.abrupt("return");case 12:case"end":return t.stop()}},t)})),st.apply(this,arguments)}function lt(t){return ct.apply(this,arguments)}function ct(){return ct=Object(K["a"])(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(U["a"])(Y,Z);case 2:return r=t.sent,t.abrupt("return",r.get(tt,e));case 4:case"end":return t.stop()}},t)})),ct.apply(this,arguments)}var ut=function(t){function e(){var t;return Object(c["a"])(this,e),t=Object(p["a"])(this,Object(d["a"])(e).apply(this,arguments)),t.data=null,t.percentData={playerACrit:0,playerAHit:0,nothing:0,playerBCrit:0,playerBHit:0},t.total=0,t}return Object(b["a"])(e,t),Object(u["a"])(e,[{key:"onInputChange",value:function(){var t=Object(K["a"])(regeneratorRuntime.mark(function t(e){var r,a,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!(e&&e.playerA&&e.playerB&&e.playerA.burst&&e.playerB.burst)){t.next=8;break}return r=e.playerA.burst>e.playerB.burst,a=r?e.playerB.burst+"dicesat"+e.playerB.attribute+"vs"+e.playerA.burst+"dicesat"+e.playerA.attribute:e.playerA.burst+"dicesat"+e.playerA.attribute+"vs"+e.playerB.burst+"dicesat"+e.playerB.attribute,console.log("loading data from"+a+", invert="+r),t.next=6,lt(a);case 6:n=t.sent,this.loadData(n,r);case 8:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"loadData",value:function(t,e){console.log(t);var r={playerACrit:0,playerAHit:0,nothing:0,playerBCrit:0,playerBHit:0};this.total=0;for(var a=0,n=Object.keys(t);a<n.length;a++){var i=n[a],o=i.replace(/c/g,"").split("v"),s=o[0].split("h"),l=o[1].split("h"),c=parseInt(s[0]),u=parseInt(s[1]),p=parseInt(l[0]),d=parseInt(l[1]);e?c>0?r.playerBCrit+=t[i]:u>0?r.playerBHit+=t[i]:p>0?r.playerACrit+=t[i]:d>0?r.playerAHit+=t[i]:r.nothing+=t[i]:c>0?r.playerACrit+=t[i]:u>0?r.playerAHit+=t[i]:p>0?r.playerBCrit+=t[i]:d>0?r.playerBHit+=t[i]:r.nothing+=t[i],this.total+=t[i]}this.data=r,this.percentData={playerACrit:parseFloat((r.playerACrit/this.total*100).toFixed(2)),playerAHit:parseFloat((r.playerAHit/this.total*100).toFixed(2)),nothing:parseFloat((r.nothing/this.total*100).toFixed(2)),playerBCrit:parseFloat((r.playerBCrit/this.total*100).toFixed(2)),playerBHit:parseFloat((r.playerBHit/this.total*100).toFixed(2))}}}]),e}(g["d"]);f["a"]([Object(g["c"])({default:null})],ut.prototype,"input",void 0),f["a"]([Object(g["e"])("input",{immediate:!0,deep:!0})],ut.prototype,"onInputChange",null),ut=f["a"]([g["a"]],ut);var pt=ut,dt=pt,bt=(r("51d6"),Object(j["a"])(dt,X,G,!1,null,"0a874130",null)),ft=bt.exports;function vt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,a)}return r}function yt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?vt(r,!0).forEach(function(e){Object(l["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):vt(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var gt=function(t){function e(){var t;return Object(c["a"])(this,e),t=Object(p["a"])(this,Object(d["a"])(e).call(this)),t.results=[],t.playerA={},t.playerB={},t.loadingState={state:"done",download:0},t.errors=[],t.version=JSON.parse(unescape("%7B%22name%22%3A%22infinity-quick-dice%22%2C%22version%22%3A%220.1.0%22%2C%22license%22%3A%22unlicense%22%2C%22private%22%3Atrue%2C%22scripts%22%3A%7B%22serve%22%3A%22vue-cli-service%20serve%22%2C%22build%22%3A%22vue-cli-service%20build%22%2C%22ui%22%3A%22vue%20ui%22%2C%22lint%22%3A%22vue-cli-service%20lint%22%2C%22test%3Aunit%22%3A%22vue-cli-service%20test%3Aunit%22%7D%2C%22browserslist%22%3A%5B%22%3E%200.2%25%22%2C%22last%202%20versions%22%5D%2C%22dependencies%22%3A%7B%22core-js%22%3A%22%5E2.6.5%22%2C%22idb%22%3A%22%5E4.0.4%22%2C%22register-service-worker%22%3A%22%5E1.6.2%22%2C%22vue%22%3A%22%5E2.6.10%22%2C%22vue-class-component%22%3A%22%5E7.0.2%22%2C%22vue-property-decorator%22%3A%22%5E8.1.0%22%2C%22vue-toasted%22%3A%22%5E1.1.27%22%7D%2C%22devDependencies%22%3A%7B%22@types/jest%22%3A%22%5E23.1.4%22%2C%22@vue/cli-plugin-babel%22%3A%22%5E3.9.0%22%2C%22@vue/cli-plugin-pwa%22%3A%22%5E3.9.0%22%2C%22@vue/cli-plugin-typescript%22%3A%22%5E3.9.0%22%2C%22@vue/cli-plugin-unit-jest%22%3A%22%5E3.9.0%22%2C%22@vue/cli-service%22%3A%22%5E3.9.0%22%2C%22@vue/test-utils%22%3A%221.0.0-beta.29%22%2C%22babel-core%22%3A%227.0.0-bridge.0%22%2C%22sass%22%3A%22%5E1.18.0%22%2C%22sass-loader%22%3A%22%5E7.1.0%22%2C%22ts-jest%22%3A%22%5E23.0.0%22%2C%22typescript%22%3A%22%5E3.4.3%22%2C%22vue-template-compiler%22%3A%22%5E2.6.10%22%7D%7D")).version,nt.subscribe(t.setLoading),it.subscribe(t.addError),ot().catch(function(e){return t.errors.push(e.message)}),t}return Object(b["a"])(e,t),Object(u["a"])(e,[{key:"addError",value:function(t){this.errors.push(t)}},{key:"setLoading",value:function(t){this.loadingState=t}},{key:"checkForm",value:function(){var t=!0;return"done"!==this.loadingState.state?(g["d"].toasted.show("Please wait the end of data loading",{type:"error"}),t=!1):this.playerA&&this.playerA.burst&&this.playerA.attribute&&this.playerB&&this.playerB.burst&&this.playerB.attribute||(g["d"].toasted.show("at least burst and roll are needed for both players",{type:"error"}),t=!1),t}},{key:"roll",value:function(){this.checkForm()&&this.results.unshift({key:this.results.length,playerA:yt({},this.playerA),playerB:yt({},this.playerB)})}},{key:"reset",value:function(){this.playerA={},this.playerB={},this.scrollMainPanel(0)}},{key:"scrollMainPanel",value:function(t){var e=document&&document.getElementById("main");null!=e&&e.scroll({behavior:"smooth",left:t*e.offsetWidth,top:0})}},{key:"clear",value:function(){this.results=[]}}]),e}(g["d"]);gt=f["a"]([Object(g["a"])({components:{ActionButton:A,RollResult:ft,PlayerConfPanel:Q,SelectHexButton:T,HexButton:P}})],gt);var ht=gt,Ot=ht,mt=(r("5c0b"),Object(j["a"])(Ot,o,s,!1,null,null,null)),jt=mt.exports,Ct=r("9483");Object(Ct["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; refreshing."),setTimeout(function(){window.location.reload()},1e3)},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),a["a"].use(i.a,{position:"top-center",duration:5e3,fullWidth:!1,fitToScreen:!1,action:{text:"Close",onClick:function(t,e){e.goAway(0)}}}),a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(jt)}}).$mount("#app")},fb7c:function(t,e,r){}});
//# sourceMappingURL=app.fb4ffa4c.js.map