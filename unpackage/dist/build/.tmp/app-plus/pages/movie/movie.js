(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/movie/movie"],{"096a":function(t,e,a){"use strict";var r=a("3512"),n=a.n(r);n.a},"185c":function(t,e,a){"use strict";a.r(e);var r=a("c670"),n=a("c423");for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);a("096a");var c=a("2877"),u=Object(c["a"])(n["default"],r["a"],r["b"],!1,null,null,null);e["default"]=u.exports},3512:function(t,e,a){},c423:function(t,e,a){"use strict";a.r(e);var r=a("d2cf"),n=a.n(r);for(var o in r)"default"!==o&&function(t){a.d(e,t,function(){return r[t]})}(o);e["default"]=n.a},c670:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},n=[];a.d(e,"a",function(){return r}),a.d(e,"b",function(){return n})},d2cf:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(a("bada"));function n(t){return t&&t.__esModule?t:{default:t}}var o=function(){return a.e("components/trailerStars").then(a.bind(null,"95d1"))},c={data:function(){return{trailerInfo:{},plotPicsArray:[],directorArray:[],actorArray:[]}},onLoad:function(e){console.log(e," at pages\\movie\\movie.vue:73");var a=this,n=e.trailerId;t.request({url:r.default.serverUrl+"/search/trailer/"+n,method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{qq:this.qq},success:function(t){if(200==t.data.status){var e=t.data.data;a.trailerInfo=e;var r=JSON.parse(e.plotPics);a.plotPicsArray=r}}}),t.request({url:r.default.serverUrl+"/search/staff/"+n+"/1",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{qq:this.qq},success:function(t){200==t.data.status&&(a.directorArray=t.data.data)}}),t.request({url:r.default.serverUrl+"/search/staff/"+n+"/2",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{qq:this.qq},success:function(t){200==t.data.status&&(a.actorArray=t.data.data)}})},methods:{},components:{trailerStars:o}};e.default=c}).call(this,a("6e42")["default"])}},[["9e91","common/runtime","common/vendor"]]]);