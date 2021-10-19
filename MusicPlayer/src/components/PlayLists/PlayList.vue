<template>
	<div class="playList">
		<h3 style="border-color: white;"></h3>
		<!-- <h1 ref="changes">{{actTag}}</h1> -->
		<el-row id="playrow" :gutter="40">
			<el-col id="playcol" :span="4" v-for="(item, index) in allList" :key="index">
			<div class="items">
				<div class="img-wrap">
					<!-- <div class="desc-wrap">
						<span class="desc">{{item.name}}</span>
					</div> -->
					<el-image
						style="height: 170px;
						width: 170px;"
						:src="item.coverImgUrl"
						fit="fill"></el-image>
					<!-- <span class="iconfont icon-play"></span> -->
					<div class="count">
					<i class="el-icon-headset"></i>
					{{
					item.playCount >= 10000
						? (item.playCount / 10000).toFixed(0) + "万"
						: item.playCount
					}}
				
					<i class="el-icon-video-play" @click="getPLId(item.id)" style="cursor: pointer;"></i>
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
		//接受父组件的传值
		props:{
			allList:Array
		},
		// data(){
		// 	return{
		// 		// alllist:[],
		// 		//当前选择的数据 默认全部
		// 		// tag:"全部",
		// 		// actTags:this.actTag
		// 	}
		// },
		
		
		// created() {
		// 	axios({
		// 		url:'https://autumnfish.cn/top/playlist/',
		// 		method:'GET',
		// 		params:{
		// 			limit:36,
		// 			offset:0,
		// 			//歌单标签，可选值如下
		// 			cat:"全部"
					
		// 		} 
		// 	}).then(res=>{
		// 		// console.log(res)
				
		// 		this.alllist=res.data.playlists
		// 	})
			
			
			
		methods:{
			//获取歌单ID
			getPLId(id){
				this.$emit('getPLId',id);
			},
		}
			
		// },
		// methods:{
		// 	change(){
		// 		this.actTag=this.$refs.changes.innerText
		// 	}
		// },
	// methods:{
	// 	tags(){
	// 		// console.log(actTag)
			
	// 		// this.actTags=this.$refs.changes.innerText;
	// 		axios({
	// 			url:'https://autumnfish.cn/top/playlist/',
	// 			method:'GET',
	// 			params:{
	// 				limit:36,
	// 				offset:0,
	// 				//歌单标签，可选值如下
	// 				cat:this.actTag
					
	// 			} 
	// 		}).then(res=>{
	// 			console.log(res)
				
	// 			this.alllist=res.data.playlists
	// 		})
			
	// 	}
		
		
	// }
		
		
		
		
		
	}
</script>

<style>
@import url("../../assets/css/all.css");
.playList{
	width: 1220px;
	margin: 0 auto;
}
#playrow{
		margin-bottom: 20px;
		display: flex;
		flex-wrap: wrap;
	}
	#playcol{
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
