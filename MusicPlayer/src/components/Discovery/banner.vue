<template>
	<div class="banner">
	 <!-- 轮播图 -->
	 <el-carousel :interval="4000" type="card"  width="100%">
	 	<el-carousel-item v-for="(item,index) in banners" :key="index">
	 		<!-- <h3 class="medium">{{item}}</h3> -->
			<!--                 绑定 -->
			<!-- <img class="banner" :src="item.imageUrl" alt=""/> -->
			 <el-image style="width: 100%;"
			 :src="item.imageUrl"
			 fit="fill" @click="getUrls(item.targetId)"></el-image>
	 	</el-carousel-item>
	 </el-carousel>
	 </div>
</template>

<script>
import axios from 'axios'
export default{
		data(){
			return {
				banners:[],
				
			}
		},
		created() {
			// console.log('created')
			//轮播图
			axios({
				url:'/banner',
				method:'GET'
				
			}).then(res=>{
				// 获取轮播图数据
				// console.log(res)
				console.log(res.data)
				this.banners=res.data.banners
			})
	},
	methods:{
		
		
		
		getUrls(id){
			// console.log(id)
			axios({
				url:'https://autumnfish.cn/song/url',
				method:'GET',
				params:{
					id
				}
			}).then(res=>{
				let url=res.data.data[0].url
				//设置给全局musicUrl的播放url
				// console.log(this.$parent.$parent)
				// this.$parent.musicUrl=url
				this.$root.musicUrl=url
				// console.log(this.$root.musicUrl)
			})
			
		}
	
	}
	}
</script>

<style>
</style>
