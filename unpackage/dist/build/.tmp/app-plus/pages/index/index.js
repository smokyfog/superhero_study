(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0cbb":function(t,a,e){"use strict";e.r(a);var n=e("669d"),i=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(a,t,function(){return n[t]})}(r);a["default"]=i.a},2526:function(t,a,e){},"2b91":function(t,a,e){"use strict";var n=e("2526"),i=e.n(n);i.a},6096:function(t,a,e){"use strict";e.r(a);var n=e("72d4"),i=e("0cbb");for(var r in i)"default"!==r&&function(t){e.d(a,t,function(){return i[t]})}(r);e("2b91");var o=e("2877"),u=Object(o["a"])(i["default"],n["a"],n["b"],!1,null,null,null);a["default"]=u.exports},"669d":function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(e("8038"));function i(t){return t&&t.__esModule?t:{default:t}}var r=function(){return e.e("components/helloComp").then(e.bind(null,"311b"))},o=function(){return e.e("components/trailerStars").then(e.bind(null,"0838"))},u={data:function(){return{carourselList:[],hotSuperheroList:[],hotTrailerList:[],guessULikeList:[],animationData:{},animationDataArr:[{},{},{},{},{}]}},onUnload:function(){this.animationData={},this.animationDataArr=[{},{},{},{},{}]},onLoad:function(){var a=this;this.animation=t.createAnimation(),t.request({url:n.default.serverUrl+"/index/carousel/list",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{qq:this.qq},success:function(t){if(200==t.data.status){var e=t.data.data;a.carourselList=e}}}),t.request({url:n.default.serverUrl+"/index/movie/hot?type=superhero",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{qq:this.qq},success:function(t){if(200==t.data.status){var e=t.data.data;a.hotSuperheroList=e}}}),t.request({url:n.default.serverUrl+"/index/movie/hot?type=trailer",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{qq:this.qq},success:function(t){if(200==t.data.status){var e=t.data.data;a.hotTrailerList=e}}}),t.request({url:n.default.serverUrl+"/index/guessULike",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{qq:this.qq},success:function(t){if(200==t.data.status){var e=t.data.data;a.guessULikeList=e}}})},methods:{praiseMe:function(t){var a=this,e=t.currentTarget.dataset.gindex;this.animation.translateY(-60).opacity(1).step({duration:400}),this.animationData=this.animation,this.animationDataArr[e]=this.animationData.export(),setTimeout(function(){a.animation.translateY(0).opacity(0).step({duration:100}),a.animationData=a.animation,a.animationDataArr[e]=a.animationData.export()},1e3)}},components:{helloComp:r,trailerStars:o}};a.default=u}).call(this,e("6e42")["default"])},"72d4":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement;t._self._c},i=[];e.d(a,"a",function(){return n}),e.d(a,"b",function(){return i})}},[["6ba6","common/runtime","common/vendor"]]]);