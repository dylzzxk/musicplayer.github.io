<template>
	<div class="playlistDetail">
		<playlistDetails :playlist="playlist" 
		></playlistDetails>
		
		<!-- <comment :commentlist="commentlist"></comment> -->
		<div class="comment" >
			<div class="commentIn">
			<el-input
			  type="textarea"
			  placeholder="请输入内容"
			  v-model="commentInfo"
			  maxlength="140"
			  show-word-limit
			  resize="none"
			  rows="4"
			>
			</el-input>
			<!-- <span v-show="Authorization" >{{Authorization.userId}}</span> -->
			<div class="send" @click="sendComment()">发布</div>
		</div>
			<div class="hotComment">
				<h4>精彩评论({{hotcount}})</h4>
				<div class="hotcommentDetail" v-for="(item,index) in hotcommentList" :key="index">
					
					<span class="item">
					<img :src="item.user.avatarUrl" style="width: 35px;height: 35px;border-radius: 50%;"/>
					</span>
					<span style="color: royalblue;" class="nickname">{{item.user.nickname}}:</span>
					<span>{{item.content}}</span>
					
					<!-- 回复 -->
					<div class="beReplied" v-if="item.beReplied.length!=0">
						<span style="color: royalblue;" class="nickname">{{item.beReplied[0].user.nickname}}:</span>
						<span>{{item.beReplied[0].content}}</span>
					</div>
					</br>
					<span style="color: gray;">{{item.time|timefmt('YYYY-MM-DD HH:mm:ss')}}</span>
				</div>
			</div>
			
			<div class="topComment">
				<h4>最新评论({{topcount}})</h4>
				<div class="topcommentDetail" v-for="(item,index) in topcommentList" :key="index">
					
					<span class="item">
					<img :src="item.user.avatarUrl" style="width: 35px;height: 35px;border-radius: 50%;"/>
					</span>
					<span style="color: royalblue;">{{item.user.nickname}}</span>
					<span>{{item.content}}</span>
					<!-- 回复 -->
					<div class="beReplied" v-if="item.beReplied.length!=0">
						<span style="color: royalblue;" class="nickname">{{item.beReplied[0].user.nickname}}:</span>
						<span>{{item.beReplied[0].content}}</span>
					</div>
					</br>
					<span style="color: gray;">{{item.time | timefmt('YYYY-MM-DD HH:mm:ss')}}</span>
				</div>
				
				<el-pagination
				@current-change="handleCurrentChange"
				background
				layout="prev,pager,next"
				:total="topcount"
				:current-page="page"
				:page-size="10"></el-pagination>
			</div>
		</div>
	</div>
	
</template>

<script>
	import {mapGetters} from 'vuex'
	import axios from 'axios'
	import playlistDetails from '../../components/PlayLists/playlistDetails.vue'
	// import comment from '../../components/PlayLists/comment.vue'
	export default{
		
		data(){
			return{
				page:1,
				//歌单详情
				playlist:{},
				//评论
				hotcommentList:[],
				topcommentList:[],
				hotcount:0,
				topcount:0,
				commentInfo: "",
				
			
			}
		},
		// name:playlistDetail,
		components:{
			playlistDetails,
		
			
		},
		computed:{
			...mapGetters(['cookie'])
		},
		created() {
			// 获取歌单列表
			axios({
				url:'https://autumnfish.cn/playlist/detail',
				method:'GET',
				params:{
					id:this.$route.query.q
				}
			}).then(res=>{
				this.playlist=res.data.playlist;
				
				// console.log(res)
			})
			
			//获取精彩评论
			axios({
				url:'https://autumnfish.cn/comment/hot',
				method:'GET',
				params:{
					id:this.$route.query.q,
					type:2
				}
			}).then(res=>{
				this.hotcommentList=res.data.hotComments;
				// this.topcommentList=res.data.topComments;
				this.hotcount=res.data.total;
				// console.log(res.data.hotComments)
				
			})
			
			//获取最新评论
			axios({
				url:'https://autumnfish.cn/comment/playlist',
				method:'GET',
				params:{
					id:this.$route.query.q,
					limit:10,
					offset:0,
					
				}
			}).then(res=>{
				// this.hotcommentList=res.data.hotComments;
				this.topcommentList=res.data.comments;
				this.topcount=res.data.total;
				console.log(res.data)
				
			})
			
			
		},
		
		methods:{
			handleCurrentChange(val){
				//获取页码
				this.page=val;
				
				//获取最新评论
				axios({
					url:'https://autumnfish.cn/comment/playlist',
					method:'GET',
					params:{
						id:this.$route.query.q,
						limit:10,
						offset:(this.page-1)*10
					}
				}).then(res=>{
					// this.hotcommentList=res.data.hotComments;
					this.topcommentList=res.data.comments;
					this.topcount=res.data.total;
					console.log(res.data)
					
				})
				
				
			},
			// 发送评论
			sendComment() {
				let cookie=this.$store.state.cookie;
				if (cookie == '' || cookie == null) {
				  return this.$message.error('请先登录才能评论！')
				}
				axios({
					url:'/comment',
					method:'GET',
					params: {
					t:1,
					type:2,
			       
			        
			        id: this.$route.query.q,
					content: this.commentInfo,
					cookie
			    
			      },
			    })
			    .then((res) => {
					// console.log(res);
					
					this.$message.success("评论成功,请刷新查看评论");
					this.topcommentList.unshift(res.comment);
					this.commentInfo=""
			     
			    })
			    .catch((error) => {
					console.log(error)
			
			    });
			 // this.$http
			 //   .get("/comment", {
			 //     params: {
			 //       t: 1,
			 //       type: 2,
			 //       id: this.$route.query.q,
			 //       content: this.commentInfo
			 //     },
			 //   })
			 //   .then((res) => {
			 //     this.$message.success("评论成功,请刷新查看评论");
			 //   })
			 //   .catch((error) => {
				//    console.log(error)
			 //     this.$message.error("请登录后再使用该功能哟");
			 //     this.$store.dispatch("changeLoginstatu", true);
			 //   });
			},
		}
	}
	
	
</script>

<style>
	.playlistDetail{
		width: 1220px;
		height: 100%;
		margin: 0 auto;
	}
	.comment{
		padding-top: 50px;
		width: 1220px;
		/* height: 500px; */
		text-align: left;
		padding-bottom: 50px;
	}
	.beReplied{
		background-color: lightgray;
	}
	span{
		line-height: 30px;
	}
	.send{
		line-height: 30px;
		text-align: right;
		/* border: 1px solid #000000; */
		cursor: pointer;
	}
</style>
