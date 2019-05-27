<template>
	<view class="content">
		<text class="icon-shuaxin"></text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				student: {
					age: 18
				},
				skill: ["java", "js", "php", "python"]
			}
		},
		onLoad() {
			console.log(uni.getSystemInfoSync().platform)
		},
		methods: {

		}
	}
</script>

<style>
	
</style>
