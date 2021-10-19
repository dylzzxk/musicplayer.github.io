<template>
	<div class="results">
		<result v-on:getPLId='toPlaylistDetail' @getSingerId='toSingerdetails'></result>
	</div>
</template>

<script>

	import result from '../../components/Result/Result.vue'
	export default{
		components:{
			result
		},
		data(){
			return{
				playlistId:''
				// resultList:[]
			}
		},
		methods:{
			//去歌单详情页
			
			toPlaylistDetail(id){
				//跳转页面
				this.$router.push(`/playlistDetail?q=${id}`)
			},
			
			toSingerdetails(id){
				this.$router.push(`/singerdetails?q=${id}`)
			}
		}
	}
</script>

<style>
	.results{
		width: 1220px;
		height: 100%;
		margin: 0 auto;
		/* 距离底部 */
		padding-bottom: 50px;
	}
</style>
