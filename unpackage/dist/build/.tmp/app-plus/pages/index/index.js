(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0d0d":function(t,a,e){"use strict";e.r(a);var n=e("925c"),i=e("9b5a");for(var o in i)"default"!==o&&function(t){e.d(a,t,function(){return i[t]})}(o);e("3270");var r=e("2877"),s=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,null,null);a["default"]=s.exports},"2e8e":function(t,a,e){},3270:function(t,a,e){"use strict";var n=e("2e8e"),i=e.n(n);i.a},"925c":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement;t._self._c},i=[];e.d(a,"a",function(){return n}),e.d(a,"b",function(){return i})},"9b5a":function(t,a,e){"use strict";e.r(a);var n=e("f0e7"),i=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(a,t,function(){return n[t]})}(o);a["default"]=i.a},f0e7:function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(e("8413"));function i(t){return t&&t.__esModule?t:{default:t}}var o=function(){return e.e("components/helloComp").then(e.bind(null,"eb11"))},r=function(){return e.e("components/trailerStars").then(e.bind(null,"3ac7"))},s={data:function(){return{carourselList:[],hotSuperheroList:[],hotTrailerList:[],guessULikeList:[],animationData:{},animationDataArr:[{},{},{},{},{}]}},onUnload:function(){this.animationData={},this.animationDataArr=[{},{},{},{},{}]},onLoad:function(){var a=this;this.animation=t.createAnimation(),t.request({url:n.default.localUrl+"/movie/carousel",method:"get",success:function(t){if(console.log(t," at pages\\index\\index.vue:195"),0===t.data.code){var e=t.data.data;a.carourselList=e}}}),t.request({url:n.default.localUrl+"/movie/hot?type=superhero",method:"POST",data:{type:"superhero"},success:function(t){if(0===t.data.code){var e=t.data.data;a.hotSuperheroList=e}}}),t.request({url:n.default.localUrl+"/movie/hot?type=trailer",method:"POST",data:{type:"trailer"},success:function(t){if(0===t.data.code){var e=t.data.data;a.hotTrailerList=e}}}),this.refresh()},onPullDownRefresh:function(){this.refresh()},methods:{refresh:function(){var a=this;t.showLoading({mask:!0}),t.showNavigationBarLoading(),t.request({url:n.default.localUrl+"/movie/guessULike",method:"get",success:function(t){if(0===t.data.code){var e=t.data.data;a.guessULikeList=e}},complete:function(){t.hideLoading(),t.hideNavigationBarLoading(),t.stopPullDownRefresh()}})},showTraller:function(a){var e=a.currentTarget.dataset.trailerid;t.navigateTo({url:"../movie/movie?trailerId="+e})},praiseMe:function(t){var a=this,e=t.currentTarget.dataset.gindex;this.animation.translateY(-60).opacity(1).step({duration:400}),this.animationData=this.animation,this.animationDataArr[e]=this.animationData.export(),setTimeout(function(){a.animation.translateY(0).opacity(0).step({duration:100}),a.animationData=a.animation,a.animationDataArr[e]=a.animationData.export()},1e3)},meIsPlaying:function(a){var e=this,n="";a&&(n=a.currentTarget.dataset.playindex,e.videoContext=t.createVideoContext(n));for(var i=e.hotTrailerList,o=0;o<i.length;o++){var r=i[o].id;r!=n&&t.createVideoContext(r).pause()}}},onHide:function(){this.videoContext&&this.videoContext.pause()},components:{helloComp:o,trailerStars:r}};a.default=s}).call(this,e("6e42")["default"])}},[["5775","common/runtime","common/vendor"]]]);