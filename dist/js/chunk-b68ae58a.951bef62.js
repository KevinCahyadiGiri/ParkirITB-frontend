(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b68ae58a"],{"3a0a":function(t,r,e){},"5ed2":function(t,r,e){"use strict";e("3a0a")},7991:function(t,r,e){"use strict";e.r(r);var n=function(){var t=this,r=this,n=r.$createElement,a=r._self._c||n;return a("v-app",{staticClass:"mainContainer"},[a("div",{staticClass:"header"},[a("div",{staticClass:"logoContainer text-xs-center"},[a("img",{staticClass:"image",attrs:{src:e("2fd5"),width:"60",height:"60"}})]),a("div",{staticClass:"sarprasContainer"},[a("div",{staticClass:"sarprasitb"},[r._v("Sarpras ITB")]),a("div",{staticStyle:{"font-size":"13px"}},[r._v("Layanan Parkir Mahasiswa")])])]),a("div",{staticClass:"halo"},[a("div",{staticClass:"haloalex"},[r._v(" Halo, Alexandra! ")]),a("div",[r._v(" NIM Anda: 18218033 ")])]),a("div",{staticClass:"parkirNriwayat"},[a("div",[a("v-btn",{attrs:{color:"#86b9ff",tile:"",elevation:"0"},on:{click:function(t){return r.parkirSekarang()}}},[r._v(" Parkir Sekarang ")])],1),a("div",[a("v-btn",{attrs:{color:"#86b9ff",tile:"",elevation:"0"},on:{click:function(t){return r.riwayatParkir()}}},[r._v(" Riwayat Parkir ")])],1)]),a("div",{staticClass:"halo"},[a("div",{staticClass:"haloalex"},[r._v(" Saldo Anda ")]),a("div",[r._v(" "+r._s(r._f("toRp")(r.saldo))+" ")])]),a("div",{staticClass:"parkirNriwayat"},[a("div",[a("v-btn",{attrs:{color:"#86b9ff",tile:"",elevation:"0"},on:{click:function(){t.topUpClicked=!t.topUpClicked}}},[r._v(" Top Up Saldo ")])],1)]),null!==r.riwayat?a("div",{staticClass:"halo",on:{click:function(t){r.riwayat=null}}},[a("div",{staticClass:"haloalex"},[r._v("Riwayat")]),a("div",{staticStyle:{color:"transparent"}},[r._v("n")]),r._l(r.riwayat,(function(t){return a("div",{key:t.waktu},[a("div",[r._v(r._s(t.waktu.split(" ").slice(0,5).join(" ")))]),a("div",[r._v(r._s([t.status,t.parkiran].join(" ")))]),a("div",{staticStyle:{color:"transparent"}},[r._v("n")])])}))],2):r._e(),!0===r.topUpClicked?a("div",{staticClass:"topUpPop"},[a("div",{staticClass:"topUpField"},[a("v-text-field",{attrs:{label:"Nominal",required:"",outlined:"",dense:"",rules:[r.checkNumber]},model:{value:r.nominalTopUp,callback:function(t){r.nominalTopUp=t},expression:"nominalTopUp"}})],1),a("div",{staticClass:"toUpField"},[a("v-btn",{attrs:{outlined:"",disabled:!r.isNumber},on:{click:function(t){return r.topUp()}}},[r._v("Top Up")])],1)]):r._e()])},a=[];e("d3b7"),e("ac1f"),e("25f0"),e("5319"),e("96cf");function o(t,r,e,n,a,o,i){try{var c=t[o](i),s=c.value}catch(u){return void e(u)}c.done?r(s):Promise.resolve(s).then(n,a)}function i(t){return function(){var r=this,e=arguments;return new Promise((function(n,a){var i=t.apply(r,e);function c(t){o(i,n,a,c,s,"next",t)}function s(t){o(i,n,a,c,s,"throw",t)}c(void 0)}))}}var c={data:function(){return{saldo:0,riwayat:null,topUpClicked:!1,nominalTopUp:0,isNumber:!1,pattern:/^\d*[1-9]\d*$/,checkNumber:function(t){var r=/^\d*[1-9]\d*$/;if(!r.test(t))return"Not a number"}}},methods:{parkirSekarang:function(){var t=this;return i(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$axios.post("https://blooming-atoll-42885.herokuapp.com/log",{nim:18218033,namamahasiswa:"Alexandra Angeline",status:"masuk",parkiran:"sr"});case 2:alert("Kamu berhasil parkir");case 3:case"end":return r.stop()}}),r)})))()},riwayatParkir:function(){var t=this;return i(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$axios.get("https://blooming-atoll-42885.herokuapp.com/log/18218033").then((function(r){t.riwayat=r.data.data}));case 2:case"end":return r.stop()}}),r)})))()},topUp:function(){var t=this;return i(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$axios.post("https://blooming-atoll-42885.herokuapp.com/saldo/18218033",{topup:t.nominalTopUp}).then(i(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.nominalTopUp=0,t.isNumber=!1,t.topUpClicked=!1,r.next=5,t.$axios.get("https://blooming-atoll-42885.herokuapp.com/saldo/18218033").then((function(r){t.saldo=r.data.data.saldo})).catch((function(t){console.log(t)}));case 5:alert("Saldo berhasil ditambahkan");case 6:case"end":return r.stop()}}),r)}))));case 2:case"end":return r.stop()}}),r)})))()}},watch:{nominalTopUp:function(t){var r=/^\d*[1-9]\d*$/;this.isNumber=r.test(t)}},created:function(){var t=i(regeneratorRuntime.mark((function t(){var r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.get("https://blooming-atoll-42885.herokuapp.com/saldo/18218033").then((function(t){r.saldo=t.data.data.saldo})).catch((function(t){console.log(t)}));case 2:case"end":return t.stop()}}),t,this)})));function r(){return t.apply(this,arguments)}return r}(),filters:{toRp:function(t){return t=t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."),t="Rp"+t,t}}},s=c,u=(e("5ed2"),e("2877")),l=e("6544"),h=e.n(l),p=e("7496"),f=e("8336"),d=e("8654"),v=Object(u["a"])(s,n,a,!1,null,"59d73bf0",null);r["default"]=v.exports;h()(v,{VApp:p["a"],VBtn:f["a"],VTextField:d["a"]})},"96cf":function(t,r,e){var n=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(j){s=function(t,r,e){return t[r]=e}}function u(t,r,e,n){var a=r&&r.prototype instanceof m?r:m,o=Object.create(a.prototype),i=new R(n||[]);return o._invoke=C(t,e,i),o}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(j){return{type:"throw",arg:j}}}t.wrap=u;var h="suspendedStart",p="suspendedYield",f="executing",d="completed",v={};function m(){}function y(){}function g(){}var w={};w[o]=function(){return this};var k=Object.getPrototypeOf,x=k&&k(k(S([])));x&&x!==e&&n.call(x,o)&&(w=x);var b=g.prototype=m.prototype=Object.create(w);function _(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function L(t,r){function e(a,o,i,c){var s=l(t[a],t,o);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"===typeof h&&n.call(h,"__await")?r.resolve(h.__await).then((function(t){e("next",t,i,c)}),(function(t){e("throw",t,i,c)})):r.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return e("throw",t,i,c)}))}c(s.arg)}var a;function o(t,n){function o(){return new r((function(r,a){e(t,n,r,a)}))}return a=a?a.then(o,o):o()}this._invoke=o}function C(t,r,e){var n=h;return function(a,o){if(n===f)throw new Error("Generator is already running");if(n===d){if("throw"===a)throw o;return T()}e.method=a,e.arg=o;while(1){var i=e.delegate;if(i){var c=E(i,e);if(c){if(c===v)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===h)throw n=d,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=f;var s=l(t,r,e);if("normal"===s.type){if(n=e.done?d:p,s.arg===v)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(n=d,e.method="throw",e.arg=s.arg)}}}function E(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator["return"]&&(e.method="return",e.arg=r,E(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var a=l(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,v;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function N(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function U(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function S(t){if(t){var e=t[o];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function e(){while(++a<t.length)if(n.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:T}}function T(){return{value:r,done:!0}}return y.prototype=b.constructor=g,g.constructor=y,y.displayName=s(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"===typeof t&&t.constructor;return!!r&&(r===y||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},_(L.prototype),L.prototype[i]=function(){return this},t.AsyncIterator=L,t.async=function(r,e,n,a,o){void 0===o&&(o=Promise);var i=new L(u(r,e,n,a),o);return t.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(b),s(b,c,"Generator"),b[o]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){while(r.length){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=S,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(U),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],r=t.completion;if("throw"===r.type)throw r.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function a(n,a){return c.type="throw",c.arg=t,e.next=n,a&&(e.method="next",e.arg=r),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=r,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),U(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var a=n.arg;U(e)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},t}(t.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}}}]);
//# sourceMappingURL=chunk-b68ae58a.951bef62.js.map