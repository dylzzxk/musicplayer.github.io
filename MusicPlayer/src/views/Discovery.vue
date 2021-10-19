<template>
	<div class="Discovery">
		<banner></banner>
		<recommend v-on:getPLId='toPlaylistDetail'></recommend>	
		<news></news>
		<rangking-list v-on:getPLId='toPlaylistDetail'></rangking-list>
	</div>
</template>

<script>
import banner from '../components/Discovery/banner.vue'
import News from '../components/Discovery/News.vue'
import rangkingList from '../components/Discovery/rankingList.vue'
import recommend from '../components/Discovery/recommend.vue'

	export default{
		components:{
			banner,
			News,
			rangkingList,
			recommend
		},
		methods:{
			//去歌单详情页
			
			toPlaylistDetail(id){
				//跳转页面
				this.$router.push(`/playlistDetail?q=${id}`)
			},
		}
	}
</script>

<style>
	.Discovery{
		width: 100%;
		height: 100%;
		color: black;
		margin-bottom: 50px;
	}
</style>
