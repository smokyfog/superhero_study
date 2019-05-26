<template>
	<view class="page">
		<!-- 轮播图 start -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="carousel">
			<swiper-item v-for="caroursel in carourselList" :key="caroursel.id">
				<image :src="caroursel.image" class="carousel"></image>
			</swiper-item>
		</swiper>
		<!-- 轮播图  end-->
		
		<!-- 热门超英  start -->
		<view class="page_block super_hot">
			<view class="hot_title_wapper">
				<image src="" mode=""></image>
				<view class="">
					热门超英
				</view>
			</view>
		</view>
		<!-- 热门超英 end -->
		
	</view>
</template>

<script>
	import common from "../../common/common.js"
	export default {
		data() {
			return {
				carourselList : []
			}
		},
		onLoad() {
			uni.request({
				url: common.serverUrl + '/index/carousel/list',
				// url: this.serverUrl + '/index/carousel/list',
				method: 'POST',
				header:{
					'content-type':'application/x-www-form-urlencoded'
				},
				data: {
					qq: "lee49448267"
				},
				success: res => {
					if(res.data.status ==200){
						var carourselList = res.data.data;
						this.carourselList = carourselList;
					}
				}
			});
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" >
	@import url("index.css");
	
</style>
