<template>
	<view class="page">
		<view class="search_block">
			<view class="search_ico_wapper">
				<image src="/static/icos/search.png" class="search_ico"></image>
			</view>
			<input 
				placeholder="搜索预告" 
				maxlength="10" 
				class="search_text" 
				confirm-type="search"
				@confirm="searchMe"
				/>
		</view>
		
		<view class="movie_list page_block">
			
			<view class="movie_wapper" v-for="trailer in trailerList" :key="trailer.id">
				<image 
					:src="trailer.cover" 
					:data-trailerId="trailer.id"
					@click="showTraller"
					class="poster"
					></image>
			</view>
			
		</view>
	</view>
</template>

<script>
	import common from "../../common/common.js"
	export default {
		data() {
			return {
				trailerList:[],
				keywords: "",	//搜索的关键字
				page: 1,		//当前第几页
				totalPages: 1	//总页数
			}
		},
		onLoad() {
			uni.showLoading({	//开启loading
				mask:true,
				title:"请稍后.."
			})
			uni.showNavigationBarLoading()	//开启导航栏loading
			//查询猜你喜欢数据列表
			uni.request({
				url: common.serverUrl + '/search/list',
				method: "POST",
				header:{
					'content-type':'application/x-www-form-urlencoded'
				},
				data:{
					qq: this.qq,
					keywords: "",
					page: "",
					pageSize: ""
				},
				success: (res) => {
					if (res.data.status == 200) {
						var trailerList = res.data.data.rows;
						this.trailerList = trailerList;
					}
				},
				complete() {
					uni.hideLoading()
					uni.hideNavigationBarLoading()	//关闭导航栏loading
				}
			});
		},
		onReachBottom() {
			var me = this;
			var page = me.page + 1;			//查询下一个页面当前页数累加1
			var keywords = me.keywords;		//获得当前页面中data里的搜索值
			var totalPages = me.totalPages;	//获取总页数
			
			//如果当前需要分页的分页数和总页数页数相等，就不分页
			if(page > totalPages) {
				return
			}
			
			me.pagedTrailerList(keywords, page, 15)
		},
		methods: {
			showTraller(e){
				var trailerId = e.currentTarget.dataset.trailerid;
				//页面跳转api
				uni.navigateTo({
					url:"../movie/movie?trailerId="+trailerId
				})
				// uni.switchTab({
				// 	url:"../me/me"
				// })
			},
			pagedTrailerList(keywords, page, pageSize){
				var me = this
				uni.showLoading({	//开启loading
					mask:true,
					title:"请稍后.."
				})
				uni.showNavigationBarLoading()	//开启导航栏loading
				//查询猜你喜欢数据列表
				uni.request({
					url: common.serverUrl + '/search/list',
					method: "POST",
					header:{
						'content-type':'application/x-www-form-urlencoded'
					},
					data:{
						qq: this.qq,
						keywords: keywords,
						page: page,
						pageSize: pageSize
					},
					success: (res) => {
						if (res.data.status == 200) {
							var tempList = res.data.data.rows;
							me.trailerList = me.trailerList.concat(tempList);
							me.totalPages = res.data.data.total;	// 获取总页数
							me.page = page;		// 覆盖当前页面里的page
						}
					},
					complete() {
						uni.hideLoading()
						uni.hideNavigationBarLoading()	//关闭导航栏loading
					}
				});
			},
			searchMe(e){
				var me = this;
				//获取搜索的内容
				var value = e.detail.value;
				me.keywords = value;
				me.trailerList = [];
				me.pagedTrailerList(value, 1, 15)
			}
		}
	}
</script>

<style>
	@import url("search.css");

</style>
