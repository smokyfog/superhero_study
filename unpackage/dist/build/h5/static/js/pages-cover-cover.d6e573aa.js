(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-cover-cover"],{"01fb":function(e,t,n){var o=n("3a19");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var i=n("4f06").default;i("e9a778ae",o,!0,{sourceMap:!1,shadowMode:!1})},"1a27":function(e,t,n){"use strict";n.r(t);var o=n("2e6f"),i=n("f532");for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);n("2687");var r=n("2877"),c=Object(r["a"])(i["default"],o["a"],o["b"],!1,null,"b31d3ada",null);t["default"]=c.exports},2687:function(e,t,n){"use strict";var o=n("01fb"),i=n.n(o);i.a},"2e6f":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"black"},[n("v-uni-image",{staticClass:"cover",attrs:{src:e.cover,mode:"widthFix"},on:{longpress:function(t){t=e.$handleEvent(t),e.opertor(t)}}})],1)},i=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i})},"3a19":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".black[data-v-b31d3ada]{background-color:#000;width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:fixed}.cover[data-v-b31d3ada]{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center}",""])},"8e8a":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={data:function(){return{cover:""}},methods:{opertor:function(){var e=this;uni.showActionSheet({itemList:["下载图片"],success:function(t){0==t.tapIndex&&(uni.showLoading({title:"图片保存中..."}),uni.downloadFile({url:e.cover,success:function(e){var t=e.tempFilePath;uni.saveImageToPhotosAlbum({filePath:t,success:function(){uni.showToast({title:"保存成功",duration:2e3})}})},complete:function(){uni.hideLoading()}}))}})}},onLoad:function(e){this.cover=e.cover,uni.setNavigationBarColor({frontColor:"#ffffff",backgroundColor:"#000000"})}};t.default=o},f532:function(e,t,n){"use strict";n.r(t);var o=n("8e8a"),i=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=i.a}}]);