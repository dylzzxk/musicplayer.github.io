<template>
	<div class="playLists">
		
		
		<!--               实现点击切换歌单 -->
		<div class="tag" @click="tag()" >
			<span class="item" style="float: left;" :class="{active:actTag=='全部'}" @click="actTag='全部'">全部</span>
			<div class="tagHead" v-for="(item,index) in alltags" :key="index">
				<span class="item" :class="{active:actTag==item.name}" @click="actTag=item.name">{{item.name}}</span>
			</div>
			<!-- <h1>{{actTag}}</h1> -->
		</div>
		<h3></h3>
		
		
		<!--        使用prop传递给子组件 -->
		<playList :allList="allList" v-on:getPLId='toPlaylistDetail'></playList>
		
		
		<!--    currentchange  页码改变事件  -->
		<div class="pagination">
				 <el-pagination
					@current-change="handleCurrentChange"
					background
					layout="prev,pager,next"
					:total="total"
					:current-page="page"
					:page-size="36"></el-pagination>
		</div>
	
		
	</div>
</template>

<script>
	import axios from 'axios'
	import playList from '../../components/PlayLists/PlayList.vue'
	export default{
		components:{
			playList
		},
		data(){
			return {
				alltags:[],
				//当前选中的标签
				actTag:"全部",
				allList:[],
				//歌曲总数
				total:0,
				//页码
				page:1
				}
			},
		methods:{
			//歌单变化    当tag部分发生点击事件时，调用函数，重新  使用 参数acttag 刷新歌单
			tag(){
				// 每次切换页重置页码，使page在第一页
				this.page=1
				// console.log(this.actTag)
				axios({
				url:'/top/playlist/',
				method:'GET',
				params:{
					limit:36,
					
					//起始页  (页码-1)*每页的数量
					offset:(this.page-1)*36,
					//歌单标签，可选值如下
					cat:this.actTag
					
				} 
			}).then(res=>{
				// console.log(res)
				
				this.allList=res.data.playlists
				this.total=res.data.total
				
			})
			 },
			//封装歌单的函数
				tags(){
					// console.log(this.actTag)
					axios({
					url:'/top/playlist/',
					method:'GET',
					params:{
						limit:36,
						
						//起始页  (页码-1)*每页的数量
						offset:(this.page-1)*36,
						//歌单标签，可选值如下
						cat:this.actTag
						
					} 
				}).then(res=>{
					// console.log(res)
					
					this.allList=res.data.playlists
					this.total=res.data.total
					
				})
				 },
				
				//页码改变事件
				handleCurrentChange(val){
					// console.log(`当前页：${val}`)
					this.page=val
					this.tags()
				},
				
				toPlaylistDetail(id){
					//跳转页面
					this.$router.push(`/playlistDetail?q=${id}`)
				},
				
			},
		created() {
				//获取热门榜单信息
				axios({
					url:'/playlist/hot',
					method:'GET',
					
				}).then(res=>{
					
					this.alltags=res.data.tags
				}),
				
				//获取歌单
				this.tags()
			}
			
			
		
	}
</script>

<style>
	@import url("../../assets/css/all.css");
	.playLists{
		
			width: 1220px;
			height: 100%;
			color: black;
			margin: 0 auto;
		
	}
	.tag{
			line-height: 8px;	
			 /* border-bottom: 2px solid firebrick ; */
		}
	.tagHead{
		float: left;
	
	}
	span{
		margin-right: 10px;
		cursor: pointer;
	}
	.active{
		color: firebrick;
		
	}
	.pagination{
		
		margin-bottom:  60px;
	
			
	}



</style>
