(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/meInfo/meInfo"],{"4c6e":function(e,t,a){"use strict";a.r(t);var n=a("b4f9"),o=a("ac9b");for(var r in o)"default"!==r&&function(e){a.d(t,e,function(){return o[e]})}(r);a("9a0c");var u=a("2877"),c=Object(u["a"])(o["default"],n["a"],n["b"],!1,null,null,null);t["default"]=c.exports},"9a0c":function(e,t,a){"use strict";var n=a("d927"),o=a.n(n);o.a},ac9b:function(e,t,a){"use strict";a.r(t);var n=a("b1d3"),o=a.n(n);for(var r in n)"default"!==r&&function(e){a.d(t,e,function(){return n[e]})}(r);t["default"]=o.a},b1d3:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a("8038"));function o(e){return e&&e.__esModule?e:{default:e}}var r={data:function(){return{globalUser:{}}},methods:{modifySex:function(){e.navigateTo({url:"../sex/sex"})},modifyBirthday:function(){e.navigateTo({url:"../meBirthday/meBirthday"})},modifyNickName:function(){e.navigateTo({url:"../meNickName/meNickName"})},operator:function(){var t=this,a=t.getGlobalUser("globalUser");e.showActionSheet({itemList:["查看我的头像","从相册选择上传"],success:function(t){var n=t.tapIndex;if(0==n){var o=[];o.push(a.faceImage),e.previewImage({urls:o,current:o[0]})}else 1==n&&e.chooseImage({count:1,sizeType:["compressed"],sourceType:["album"],success:function(t){var a=t.tempFilePaths[0];e.navigateTo({url:"../meFace/meFace?tempFilePaths="+a})}})}})},cleanStorage:function(){e.clearStorageSync(),e.showToast({title:"清理缓存成功",mask:!1,duration:1500})},logout:function(){var t=this,a=this.getGlobalUser("globalUser");e.request({url:n.default.serverUrl+"/user/logout?userId=".concat(a.id,"&qq=").concat(t.qq),method:"POST",success:function(t){200==t.data.status&&(e.removeStorageSync("globalUser"),e.switchTab({url:"../me/me"}))}})}},onShow:function(){var e=this,t=e.getGlobalUser("globalUser");e.globalUser=t}};t.default=r}).call(this,a("543d")["default"])},b4f9:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},o=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return o})},d927:function(e,t,a){}},[["fbf3","common/runtime","common/vendor"]]]);