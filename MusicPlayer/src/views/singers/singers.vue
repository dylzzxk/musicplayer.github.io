<template>
	<div class="singers">
		<singer @getSingerInfo="getSingerInfo" ref="singer"></singer>
		
		<singerInfo :singerInfo="singerInfo" 
		v-on:getSingerId='toSingerdetails'></singerInfo>
	</div>
	
</template>

<script>
	import axios from 'axios'
	import singer from '../../components/singers/singer.vue'
	import singerInfo from '../../components/singers/singerInfo.vue'
	export default{
			
		components:{
			singer,
			singerInfo
		},
		data(){
			return{
				//歌手数据
				singerInfo:[]
			}
		},
		methods:{
			getSingerInfo(type,area,initial){
				axios({
					url:'https://autumnfish.cn/artist/list',
					method:'GET',
					params:{
						type:type,
						area:area,
						initial:initial,
						limit:30
					}
					
				}).then(res=>{
					console.log(res)
					//获取歌手数据
					this.singerInfo=res.data.artists
				})
			}, 
			
			toSingerdetails(id){
				this.$router.push(`/singerdetails?q=${id}`)
			}
		}
	}
</script>

<style>
	.singers{
		width: 1220px;
		height: 100%;
		margin: 0 auto;
	}

</style>
