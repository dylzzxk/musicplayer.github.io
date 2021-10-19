<template>
	<div class="Songs">
		
			<div class="songsTag" @click="changeTag()">
				<span class="item" :class="{active:tag==0}" @click="tag=0">全部</span>
				<span class="item" :class="{active:tag==7}" @click="tag=7">华语</span>
				<span class="item" :class="{active:tag==96}" @click="tag=96">欧美</span>
				<span class="item" :class="{active:tag==8}" @click="tag=8">韩国</span>
				<span class="item" :class="{active:tag==16}" @click="tag=16">日本</span>
			</div>
			
			<songList :list="list"></songList>
	</div>
</template>

<script>
	import axios from 'axios'
	import songList from '../../components/Songs/songList.vue'
	export default{
		components:{
			songList
		},
			
		data(){
			return {
				list:[],
				tag:0
			}
		},
		methods:{
			changeTag(){
			
	
			
				axios({
					url:'https://autumnfish.cn/top/song',
					method:'GET',
					params:{
						type:this.tag
					}
				}).then(res=>{
					this.list=res.data.data
					// console.log(res)
				})
			}
		},
		created() {
			// // 获取最新音乐数据
			this.changeTag()
		
				}
		
	 }
	
</script>

<style>

	.Songs{
		margin: 0 auto;
		width: 1220px;
	}
	.songsTag{
		text-align: left;
		border-bottom: 2px solid firebrick;
	}

	span{
		margin-right: 30px;
		cursor: pointer;
	}	
	.active{
		color: firebrick;
	}
</style>
