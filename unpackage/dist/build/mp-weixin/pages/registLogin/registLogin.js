(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/registLogin/registLogin"],{"0b87":function(e,a,t){"use strict";t.r(a);var n=t("d730"),r=t("bb7b");for(var o in r)"default"!==o&&function(e){t.d(a,e,function(){return r[e]})}(o);t("756d");var i=t("2877"),u=Object(i["a"])(r["default"],n["a"],n["b"],!1,null,null,null);a["default"]=u.exports},"166a":function(e,a,t){},"756d":function(e,a,t){"use strict";var n=t("166a"),r=t.n(n);r.a},bb7b:function(e,a,t){"use strict";t.r(a);var n=t("e85f"),r=t.n(n);for(var o in n)"default"!==o&&function(e){t.d(a,e,function(){return n[e]})}(o);a["default"]=r.a},d730:function(e,a,t){"use strict";var n=function(){var e=this,a=e.$createElement;e._self._c},r=[];t.d(a,"a",function(){return n}),t.d(a,"b",function(){return r})},e85f:function(e,a,t){"use strict";(function(e){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(t("8038"));function r(e){return e&&e.__esModule?e:{default:e}}var o={data:function(){return{}},methods:{appOAuthLogin:function(a){var t=this,r=a.currentTarget.dataset.logintype;e.login({provider:r,success:function(a){e.getUserInfo({provider:r,success:function(a){var o=a.userInfo,i="",u="",s="";"weixin"==r?(i=o.avatarUrl,u=o.nickName,s=o.openId):"qq"==r?(i=o.figureurl_qq_2,u=o.nickName,s=o.openId):"sinaweibo"==r&&(i=o.avatar_large,u=o.nickname,s=o.id),e.request({url:n.default.serverUrl+'/appUnionLogin/"'.concat(r,"?qq=").concat(t.qq),data:{loginType:r,appLoginUserBO:a,openIdOrUid:s,nickname:u,face:i},method:"POST",success:function(a){if(200==a.data.status){var t=a.data.data;e.setStorageSync("globalUser",t),e.switchTab({url:"../me/me"})}}})}})}})},wxLogin:function(a){var t=this,r=a.detail.userInfo;console.log(r.avatarUrl),e.login({provider:"weixin",success:function(a){var o=a.code,i=1;e.request({url:n.default.serverUrl+"/mpWXLogin/".concat(o,"?qq=").concat(t.qq),data:{avatarUrl:r.avatarUrl,nickName:r.nickName,whichMP:i},method:"POST",success:function(a){console.log(a);var t=a.data.data;e.setStorageSync("globalUser",t),e.switchTab({url:"../me/me"})}})}})},formSubmit:function(a){var t=a.detail.value?a.detail.value.username:"",r=a.detail.value?a.detail.value.password:"";e.request({url:n.default.serverUrl+"/user/registOrLogin?qq="+this.qq,method:"POST",header:{"content-type":"application/json;charset=UTF-8"},data:{username:t,password:r},success:function(a){if(200==a.data.status){var t=a.data.data;e.setStorageSync("globalUser",t),e.switchTab({url:"../me/me"})}else 500==a.data.status&&e.showToast({title:a.data.msg,duration:2e3,image:"/static/icos/error.png"})},complete:function(){}})}},onLoad:function(){}};a.default=o}).call(this,t("543d")["default"])}},[["855a","common/runtime","common/vendor"]]]);