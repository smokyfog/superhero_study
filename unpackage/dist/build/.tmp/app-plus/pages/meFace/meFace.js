(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/meFace/meFace"],{"160e":function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a("8413"));function o(e){return e&&e.__esModule?e:{default:e}}var c={data:function(){return{tempFace:""}},onLoad:function(e){console.log(e," at pages\\meFace\\meFace.vue:35");var t=e.tempFilePaths;this.tempFace=t},methods:{changePendingFace:function(){var t=this;e.chooseImage({count:1,sizeType:["compressed"],sourceType:["album"],success:function(e){var a=e.tempFilePaths[0];t.tempFace=a}})},upload:function(){var t=this,a=t.getGlobalUser("globalUser");e.showLoading({mask:!0,title:"上传中,请稍后..."}),e.uploadFile({url:n.default.localUrl+"/user/uploadFace?userId=".concat(a.id),filePath:t.tempFace,name:"file",header:{headerUserId:a.id,headerUserToken:a.userUniqueToken},success:function(t){var a=JSON.parse(t.data);if(0===a.code){var n=a.data;e.setStorageSync("globalUser",n),e.navigateBack({delta:1})}else e.showToast({title:a.msg,image:"/static/icos/error.png",duration:2e3})},complete:function(){e.hideLoading()}})}}};t.default=c}).call(this,a("6e42")["default"])},"7e79":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},o=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return o})},"8b7d":function(e,t,a){"use strict";a.r(t);var n=a("160e"),o=a.n(n);for(var c in n)"default"!==c&&function(e){a.d(t,e,function(){return n[e]})}(c);t["default"]=o.a},"986f":function(e,t,a){"use strict";var n=a("9f87"),o=a.n(n);o.a},"9f87":function(e,t,a){},b0d2:function(e,t,a){"use strict";a.r(t);var n=a("7e79"),o=a("8b7d");for(var c in o)"default"!==c&&function(e){a.d(t,e,function(){return o[e]})}(c);a("986f");var u=a("2877"),r=Object(u["a"])(o["default"],n["a"],n["b"],!1,null,null,null);t["default"]=r.exports}},[["380c","common/runtime","common/vendor"]]]);