(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/cover/cover"],{"2c54":function(t,n,o){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={data:function(){return{cover:""}},methods:{opertor:function(){var n=this;t.showActionSheet({itemList:["下载图片"],success:function(o){0==o.tapIndex&&(t.showLoading({title:"图片保存中..."}),t.downloadFile({url:n.cover,success:function(n){var o=n.tempFilePath;t.saveImageToPhotosAlbum({filePath:o,success:function(){t.showToast({title:"保存成功",duration:2e3})}})},complete:function(){t.hideLoading()}}))}})}},onLoad:function(n){this.cover=n.cover,t.setNavigationBarColor({frontColor:"#ffffff",backgroundColor:"#000000"})}};n.default=o}).call(this,o("6e42")["default"])},9002:function(t,n,o){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},a=[];o.d(n,"a",function(){return e}),o.d(n,"b",function(){return a})},af04:function(t,n,o){},baa7:function(t,n,o){"use strict";o.r(n);var e=o("9002"),a=o("ed00");for(var u in a)"default"!==u&&function(t){o.d(n,t,function(){return a[t]})}(u);o("d88a");var c=o("2877"),r=Object(c["a"])(a["default"],e["a"],e["b"],!1,null,null,null);n["default"]=r.exports},d88a:function(t,n,o){"use strict";var e=o("af04"),a=o.n(e);a.a},ed00:function(t,n,o){"use strict";o.r(n);var e=o("2c54"),a=o.n(e);for(var u in e)"default"!==u&&function(t){o.d(n,t,function(){return e[t]})}(u);n["default"]=a.a}},[["5180","common/runtime","common/vendor"]]]);