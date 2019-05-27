<template>
	<view class="page">
		<!-- <helloComp myval="hello next"></helloComp> -->
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
				<image src="../../static/icos/hot.png" class="hot_ico"></image>
				<view class="hot_title">
					热门超英
				</view>
			</view>
		</view>
		<!-- 热门超英 end -->
		
		
		<scroll-view scroll-x="true" class="page_block hot">
			<view class="single_poster" v-for="hotSuperheroList in hotSuperheroList" :key="hotSuperheroList.id">
				<view class="poster_wapper">
					<image :src="hotSuperheroList.cover" class="poster"></image>
					<view class="movie_name">
						{{hotSuperheroList.name}}
					</view>
					
					<trailerStars :innerScore="hotSuperheroList.score" showNum="1"></trailerStars>
				</view>
			</view>
			
		</scroll-view>
	</view>
</template>

<script>
	import common from "../../common/common.js"
	import helloComp from "../../components/helloComp.vue";
	import trailerStars from "../../components/trailerStars.vue"
	export default {
		data() {
			return {
				carourselList : [],
				hotSuperheroList:[]
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
			
			//查询热门超英
			uni.request({
				url: common.serverUrl + '/index/movie/hot?type=superhero',
				method: "POST",
				header:{
					'content-type':'application/x-www-form-urlencoded'
				},
				data:{
					qq:'lee49448267'
				},
				success: (res) => {
					if (res.data.status == 200) {
						var hotSuperheroList = res.data.data;
						this.hotSuperheroList = hotSuperheroList;
					}
				}
			});
			
		},
		methods: {
			
		},
		components: {
			helloComp,
			trailerStars
		},
	}
</script>

<<<<<<< HEAD
<style>
=======
<style lang="scss" >
	@import url("index.css");
>>>>>>> 3a11ddc4a0174d2d6f026729a60da2863c12368e
	
</style>
