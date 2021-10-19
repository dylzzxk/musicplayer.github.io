<template>
	<div class="Recommend">
	<!-- 推荐歌单 -->
		<!-- <el-divider content-position="left"></el-divider> -->
		<h3>推荐歌单</h3>
		<el-row id="recrow" :gutter="40">
			<el-col id="reccol" :span="4" v-for="(item, index) in list" :key="index">
			<div class="items">
				<div class="img-wrap">
					<!-- <div class="desc-wrap">
						<span class="desc">{{item.name}}</span>
					</div> -->
					<el-image
						style="height: 170px;
						width: 170px;"
						:src="item.picUrl"
						fit="fill"></el-image>
					<!-- <span class="iconfont icon-play"></span> -->
					<div class="count">
					<i class="el-icon-headset"></i>
					{{
					item.playCount >= 10000
						? (item.playCount / 10000).toFixed(0) + "万"
						: item.playCount
					}}
				
					<i class="el-icon-video-play" style="cursor: pointer;" @click="getPLId(item.id)"></i>
					</div>
				</div>
				<p class="name">{{item.name}}</p>
			</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		data(){
			return {		
				//推荐歌单
				list:[]
			}
		},
		created() {
			// console.log('created')
			//推荐歌单
			axios({
				url:'/personalized',
				method:'GET',
				params:{
					//获取的数据量，默认为30
					limit:12
				}
			}).then(res=>{
				this.list=res.data.result
				// console.log(res.data.result)
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
	.Recommend{
		width: 1220px;
		height: 100%;
		/* 设置水平居中 */
		margin: 0 auto;
	}
	#recrow{
		margin-bottom: 20px;
		display: flex;
		flex-wrap: wrap;
	}
	#reccol{
		align-items: stretch;
		padding-bottom: 1.25rem;
		margin-bottom: 20px;
	
	}
	.count{
		color: #000000;
		font-weight: bold;
		position: absolute;
		top: 84%;
		right: 0;
		width: 170px; 
		height: 25px;
		background-color:snow;
		opacity: 0.25;
		text-align: left;
		border-top: 1px solid #000000;
		
	}
	.name{
		font-size: 15px;
		overflow: hidden;
		text-overflow: ellipsis;
		  /* 这里的display必须用-webkit-box */
		display: -webkit-box;
		 /* -webkit-line-clamp限制在一个块元素显示的文本的行数 */
		-webkit-line-clamp: 2;
		/* -webkit-box-orient排列方向 */
		-webkit-box-orient: vertical;
		
		}
		.img-wrap{
		position: relative;
		}
		.el-icon-video-play{
			position: absolute;
			right: 0;
			font-size: 25px;
		}
	
</style>
