<template>
	<div class="rankingList">
		<h3>榜单</h3>
		<div class="rankItems">
			<el-row id="rankRow" :gutter="60">
				<el-col id="rankCol" :span="8" v-for="(item,index) in rankingList" :key="index">
					<div class="list" style="width: 100%;">
						<!-- 榜单封面 -->
						<div class="listDesc"@click="getPLId(item.id)">
							
								<el-image
								:src="item.coverImgUrl"
								fit="fill"
								style="width: 150px;
								height: 150px;" ></el-image>
							<div class="toJump">
									
							<!-- <el-icon-video-play></el-icon-video-play> -->
								<i class="el-icon-video-play" style="font-size: 50px;color: #FFFAFA;"></i>
								
							</div>
						
							<span style="font-size: 20px;">{{item.name}}</span>
						</div>
						<!-- 榜单 -->
						<div class="rankDetails" v-for="(song,index) in item.tracks" :key="index">
							<table style="line-height: 35px;">
								
							<td width="50px"><span style="margin-right: 10px;">{{index+1}}</span></td>
							<td width="150px"><span style="margin-right: 10px;">{{song.first}}</span></td>
							<td width="150px"><span>{{song.second}}</span></td>
							</table>
						</div>
					</div>
				</el-col>
			</el-row>
		</div>
		
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		data(){
			return {
				rankingList:[],
				artistToplistInfo:[]
			}
		},
		created() {
			// 榜单
			axios({
				url:'/toplist/detail',
				method:'GET',	
			}).then(res=>{
				this.artistToplistInfo=res.data.artistToplist;
				this.rankingList=res.data.list.slice(0,3)
				console.log(res)
			})
			
		},
		// methods:{
		// 	playMusic(id){
		// 		// console.log(id)
		// 		axios({
		// 			url:'https://autumnfish.cn/song/url',
		// 			method:'GET',
		// 			params:{
		// 				id
		// 			}
		// 		}).then(res=>{
		// 			let url=res.data.data[0].url
		// 			//设置给父组件的播放url
		// 			this.$parent.musicUrl=url
		// 		})
		// 	}
		// }
		methods:{
			//获取歌单ID
			getPLId(id){
				this.$emit('getPLId',id);
			},
		}
		
	}
</script>

<style>
	@import url("../../assets/css/all.css");
	.rankingList{
		width: 1220px;
		height: 100%;
		/* 设置水平居中 */
		margin: 0 auto;
	}
	#rankRow{
		margin-bottom: 20px;
		display: flex;
		flex-wrap: wrap;
	}
	#rankCol{
		align-items: stretch;
		padding-bottom: 1.25rem;
		margin-bottom: 20px;
	
	}
	
	.listDesc{
		cursor: pointer;
		position: relative;
		margin-bottom: 20px;
	}
	.toJump{
		opacity: 0;
		position: absolute;
		top: 30%;
		left: 48%;
	}
	.toJump:hover{
		opacity: 1;
	}
	/* #rankRow{
		border: 2px solid black;
	} */
	.rankCol{
		background-color: aliceblue;
	}
		
	.rankDetails{
		text-align: left;
	}
</style>
