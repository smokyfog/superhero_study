(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0079":function(e,t,i){"use strict";i.r(t);var a=i("e7da"),r=i.n(a);for(var n in a)"default"!==n&&function(e){i.d(t,e,function(){return a[e]})}(n);t["default"]=r.a},"045f":function(e,t,i){"use strict";var a=i("9687"),r=i.n(a);r.a},"0838":function(e,t,i){"use strict";i.r(t);var a=i("28c0"),r=i("0079");for(var n in r)"default"!==n&&function(e){i.d(t,e,function(){return r[e]})}(n);i("e52a");var o=i("2877"),s=Object(o["a"])(r["default"],a["a"],a["b"],!1,null,"8a606e72",null);t["default"]=s.exports},"0cbb":function(e,t,i){"use strict";i.r(t);var a=i("e3e8"),r=i.n(a);for(var n in a)"default"!==n&&function(e){i.d(t,e,function(){return a[e]})}(n);t["default"]=r.a},"28c0":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"movie_score_wapper"},[e._l(e.yellowScore,function(e){return i("v-uni-image",{staticClass:"star_ico",attrs:{src:"/static/icos/star-yellow.png"}})}),e._l(e.grayScore,function(e){return i("v-uni-image",{staticClass:"star_ico",attrs:{src:"/static/icos/star-gray.png"}})}),1==e.showNum?i("v-uni-view",{staticClass:"movie_score"},[e._v(e._s(e.innerScore))]):e._e()],2)},r=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return r})},"311b":function(e,t,i){"use strict";i.r(t);var a=i("c69d"),r=i("81da");for(var n in r)"default"!==n&&function(e){i.d(t,e,function(){return r[e]})}(n);i("e754");var o=i("2877"),s=Object(o["a"])(r["default"],a["a"],a["b"],!1,null,"307abd11",null);t["default"]=s.exports},6096:function(e,t,i){"use strict";i.r(t);var a=i("9b4d"),r=i("0cbb");for(var n in r)"default"!==n&&function(e){i.d(t,e,function(){return r[e]})}(n);i("045f");var o=i("2877"),s=Object(o["a"])(r["default"],a["a"],a["b"],!1,null,"98975fbe",null);t["default"]=s.exports},8038:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a="https://www.imovietrailer.com/superhero",r={serverUrl:a};t.default=r},8084:function(e,t,i){var a=i("b690");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=i("4f06").default;r("33f9f0e3",a,!0,{sourceMap:!1,shadowMode:!1})},"81da":function(e,t,i){"use strict";i.r(t);var a=i("ffeb"),r=i.n(a);for(var n in a)"default"!==n&&function(e){i.d(t,e,function(){return a[e]})}(n);t["default"]=r.a},9687:function(e,t,i){var a=i("a431");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=i("4f06").default;r("4581f298",a,!0,{sourceMap:!1,shadowMode:!1})},"9b4d":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"page"},[i("v-uni-swiper",{staticClass:"carousel",attrs:{"indicator-dots":!0,autoplay:!0,interval:3e3,duration:1e3}},e._l(e.carourselList,function(e){return i("v-uni-swiper-item",{key:e.id},[i("v-uni-image",{staticClass:"carousel",attrs:{src:e.image}})],1)}),1),i("v-uni-view",{staticClass:"page_block super_hot"},[i("v-uni-view",{staticClass:"hot_title_wapper"},[i("v-uni-image",{staticClass:"hot_ico",attrs:{src:"/static/icos/hot.png"}}),i("v-uni-view",{staticClass:"hot_title"},[e._v("热门超英")])],1)],1),i("v-uni-scroll-view",{staticClass:"page_block hot",attrs:{"scroll-x":"true"}},e._l(e.hotSuperheroList,function(t){return i("v-uni-view",{key:t.id,staticClass:"single_poster",attrs:{"data-trailerId":t.id},on:{click:function(t){t=e.$handleEvent(t),e.showTraller(t)}}},[i("v-uni-view",{staticClass:"poster_wapper"},[i("v-uni-image",{staticClass:"poster",attrs:{src:t.cover}}),i("v-uni-view",{staticClass:"movie_name"},[e._v(e._s(t.name))]),i("trailerStars",{attrs:{innerScore:t.score,showNum:"1"}})],1)],1)}),1),i("v-uni-view",{staticClass:"page_block super_hot"},[i("v-uni-view",{staticClass:"hot_title_wapper"},[i("v-uni-image",{staticClass:"hot_ico",attrs:{src:"/static/icos/interest.png"}}),i("v-uni-view",{staticClass:"hot_title"},[e._v("热门预告")])],1)],1),i("v-uni-view",{staticClass:"hot_movies page_block"},e._l(e.hotTrailerList,function(t,a){return i("v-uni-video",{key:a,staticClass:"hot_movie_single",attrs:{id:t.id,"data-playIndex":t.id,src:t.trailer,poster:t.poster,controls:""},on:{play:function(t){t=e.$handleEvent(t),e.meIsPlaying(t)}}})}),1),i("v-uni-view",{staticClass:"page_block super_hot"},[i("v-uni-view",{staticClass:"hot_title_wapper"},[i("v-uni-image",{staticClass:"hot_ico",attrs:{src:"/static/icos/guess-u-like.png"}}),i("v-uni-view",{staticClass:"hot_title"},[e._v("猜你喜欢")])],1)],1),i("v-uni-view",{staticClass:"page_block guess_u_like"},e._l(e.guessULikeList,function(t,a){return i("v-uni-view",{key:a,staticClass:"single_like_movie"},[i("v-uni-image",{staticClass:"poster like_movie",attrs:{src:t.cover,"data-trailerId":t.id},on:{click:function(t){t=e.$handleEvent(t),e.showTraller(t)}}}),i("v-uni-view",{staticClass:"movie_desc"},[i("v-uni-view",{staticClass:"movie_title"},[e._v(e._s(t.name))]),i("trailerStars",{attrs:{innerScore:9.1,showNum:"0"}}),i("v-uni-view",{staticClass:"movie_info movie_title"},[e._v(e._s(t.basicInfo))]),i("v-uni-view",{staticClass:"movie_info movie_title"},[e._v(e._s(t.releaseDate))])],1),i("v-uni-view",{staticClass:"movie_oper",attrs:{"data-gIndex":a},on:{click:function(t){t=e.$handleEvent(t),e.praiseMe(t)}}},[i("v-uni-image",{staticClass:"praise_ico",attrs:{src:"/static/icos/praise.png"}}),i("v-uni-view",{staticClass:"praise_me"},[e._v("点赞")]),i("v-uni-view",{staticClass:"praise_me animation_opacity",attrs:{animation:e.animationDataArr[a]}},[e._v("+1")])],1)],1)}),1)],1)},r=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return r})},a431:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".carousel[data-v-98975fbe]{width:100%;height:%?440?%}\r\n\r\n/* 热门超英 start */.super_hot[data-v-98975fbe]{margin-top:%?12?%;padding:%?20?%}.hot_title_wapper[data-v-98975fbe]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.hot_ico[data-v-98975fbe]{width:%?30?%;height:%?30?%;margin-top:%?15?%}.hot_title[data-v-98975fbe]{font-size:20px;margin-left:%?20?%;font-weight:500}.hot[data-v-98975fbe]{width:100%;white-space:nowrap}.single_poster[data-v-98975fbe]{display:inline-block;margin-left:%?20?%}.poster_wapper[data-v-98975fbe]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.poster[data-v-98975fbe]{width:%?200?%;height:%?270?%}.movie_name[data-v-98975fbe]{width:%?200?%;margin-top:%?10?%;font-size:14px;font-weight:700;\r\n\t/* name超出则省略 */white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis}\r\n\r\n/* 热门超英 end */\r\n\r\n/* 热门预告  start*/.hot_movies[data-v-98975fbe]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:%?0?% %?20?% %?20?% %?20?%}.hot_movie_single[data-v-98975fbe]{width:%?350?%;height:%?220?%;margin-top:%?10?%}\r\n\r\n/* 热门预告   end */\r\n\r\n/* 猜你喜欢 start */.guess_u_like[data-v-98975fbe]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.single_like_movie[data-v-98975fbe]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding:%?30?% %?20?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.like_movie[data-v-98975fbe]{width:%?180?%;height:%?240?%;border-radius:3%}.movie_desc[data-v-98975fbe]{width:%?340?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.movie_info[data-v-98975fbe]{white-space:normal;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis}.movie_title[data-v-98975fbe]{color:grey;font-size:14px}\r\n\r\n/* 点赞css */.movie_oper[data-v-98975fbe]{width:%?140?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-left:dashed 1px;border-left-color:#dbdbda}.praise_ico[data-v-98975fbe]{width:%?40?%;height:%?40?%;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center}.praise_me[data-v-98975fbe]{font-size:14px;color:#feab2a;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center}.animation_opacity[data-v-98975fbe]{font-weight:700;opacity:0}\r\n\r\n/* 猜你喜欢 end */",""])},b64a:function(e,t,i){var a=i("fc7e");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=i("4f06").default;r("22b683da",a,!0,{sourceMap:!1,shadowMode:!1})},b690:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".movie_score_wapper[data-v-8a606e72]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:raw;-ms-flex-direction:raw;flex-direction:raw}.star_ico[data-v-8a606e72]{width:%?20?%;height:%?20?%;margin-top:%?6?%}.movie_score[data-v-8a606e72]{font-size:12px;color:grey;margin-left:%?20?%}",""])},c69d:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[e._v(e._s(e.msg)),i("v-uni-view",{},[i("v-uni-input",{staticClass:"txt",attrs:{type:"text",value:e.myval}})],1)],1)},r=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return r})},e3e8:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(i("8038")),r=o(i("311b")),n=o(i("0838"));function o(e){return e&&e.__esModule?e:{default:e}}var s={data:function(){return{carourselList:[],hotSuperheroList:[],hotTrailerList:[],guessULikeList:[],animationData:{},animationDataArr:[{},{},{},{},{}]}},onUnload:function(){this.animationData={},this.animationDataArr=[{},{},{},{},{}]},onLoad:function(){var e=this;uni.request({url:a.default.serverUrl+"/index/carousel/list",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{qq:this.qq},success:function(t){if(200==t.data.status){var i=t.data.data;e.carourselList=i}}}),uni.request({url:a.default.serverUrl+"/index/movie/hot?type=superhero",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{qq:this.qq},success:function(t){if(200==t.data.status){var i=t.data.data;e.hotSuperheroList=i}}}),uni.request({url:a.default.serverUrl+"/index/movie/hot?type=trailer",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{qq:this.qq},success:function(t){if(200==t.data.status){var i=t.data.data;e.hotTrailerList=i}}}),this.refresh()},onPullDownRefresh:function(){this.refresh()},methods:{refresh:function(){var e=this;uni.showLoading({mask:!0}),uni.showNavigationBarLoading(),uni.request({url:a.default.serverUrl+"/index/guessULike",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{qq:this.qq},success:function(t){if(200==t.data.status){var i=t.data.data;e.guessULikeList=i}},complete:function(){uni.hideLoading(),uni.hideNavigationBarLoading(),uni.stopPullDownRefresh()}})},showTraller:function(e){var t=e.currentTarget.dataset.trailerid;uni.navigateTo({url:"../movie/movie?trailerId="+t})},praiseMe:function(e){},meIsPlaying:function(e){var t=this,i="";e&&(i=e.currentTarget.dataset.playindex,t.videoContext=uni.createVideoContext(i));for(var a=t.hotTrailerList,r=0;r<a.length;r++){var n=a[r].id;n!=i&&uni.createVideoContext(n).pause()}}},onHide:function(){this.videoContext&&this.videoContext.pause()},components:{helloComp:r.default,trailerStars:n.default}};t.default=s},e52a:function(e,t,i){"use strict";var a=i("8084"),r=i.n(a);r.a},e754:function(e,t,i){"use strict";var a=i("b64a"),r=i.n(a);r.a},e7da:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"trailerStars",data:function(){return{yellowScore:0,grayScore:5}},props:{innerScore:0,showNum:0},created:function(){var e=0;null!=this.innerScore&&void 0!=this.innerScore&&""!=this.innerScore&&(e=this.innerScore);var t=parseInt(e/2),i=5-t;this.yellowScore=t,this.grayScore=i}};t.default=a},fc7e:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".txt[data-v-307abd11]{color:red}",""])},ffeb:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={props:{myval:{type:String}},name:"helloComp",data:function(){return{msg:"helloComp这是你的自定义组件"}}};t.default=a}}]);