(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-meNickName-meNickName"],{1707:function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{globalUser:{}}},onLoad:function(){var n=this,t=n.getGlobalUser("globalUser");n.globalUser=t},methods:{formSubmitNickname:function(n){var t=this,a=n.detail.value.nickname;uni.request({url:t.serverUrl+"/user/modifyUserinfo?qq="+t.qq,data:{userId:t.globalUser.id,nickname:a},header:{headerUserId:t.globalUser.id,headerUserToken:t.globalUser.userUniqueToken},method:"POST",success:function(n){var t=n.data;if(200==t.status){var a=t.data;uni.setStorageSync("globalUser",a),uni.navigateBack({delta:1})}else 502!=t.status&&500!=t.status||uni.showToast({title:n.data.msg,image:"../../static/icos/error.png",duration:2e3})}})}}};t.default=e},"18a1":function(n,t,a){var e=a("39c6");"string"===typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);var i=a("4f06").default;i("28184d0c",e,!0,{sourceMap:!1,shadowMode:!1})},"1f19":function(n,t,a){"use strict";a.r(t);var e=a("1707"),i=a.n(e);for(var r in e)"default"!==r&&function(n){a.d(t,n,function(){return e[n]})}(r);t["default"]=i.a},"39c6":function(n,t,a){t=n.exports=a("2350")(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 页面铺满屏幕 */.page-fill[data-v-41161604]{width:100%;height:100%;position:absolute}.graywords[data-v-41161604]{color:#eaeaea}.input[data-v-41161604]{height:%?80?%;line-height:%?80?%;width:%?500?%;margin-left:%?40?%}.submitBtn[data-v-41161604]{width:95%;margin-top:%?40?%}",""])},a117:function(n,t,a){"use strict";var e=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("v-uni-view",{staticClass:"page page-fill"},[a("v-uni-form",{on:{submit:function(t){t=n.$handleEvent(t),n.formSubmitNickname(t)}}},[a("v-uni-view",{staticClass:"page_block",staticStyle:{"margin-top":"20upx"}},[a("v-uni-input",{staticClass:"input",attrs:{type:"text",name:"nickname",value:n.globalUser.nickname,placeholder:"请输入昵称","placeholder-class":"graywords",maxlength:"10"}})],1),a("v-uni-button",{staticClass:"submitBtn",attrs:{type:"primary","form-type":"submit"}},[n._v("提交")])],1)],1)},i=[];a.d(t,"a",function(){return e}),a.d(t,"b",function(){return i})},b2bc:function(n,t,a){"use strict";var e=a("18a1"),i=a.n(e);i.a},edfc:function(n,t,a){"use strict";a.r(t);var e=a("a117"),i=a("1f19");for(var r in i)"default"!==r&&function(n){a.d(t,n,function(){return i[n]})}(r);a("b2bc");var s=a("2877"),u=Object(s["a"])(i["default"],e["a"],e["b"],!1,null,"41161604",null);t["default"]=u.exports}}]);