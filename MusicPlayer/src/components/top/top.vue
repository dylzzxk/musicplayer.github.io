<template>
	<div class="head">
		
		
		<input class="searchSong" type="text" v-model="inputValue" @keyup.enter="toSearch" placeholder="搜索"/>
		
		<div class="loginB" v-if="!Authorization"  @click="changeLoginstatu(true)">
			
			<span class="loginSta">未登录</span>
			
		</div>
		<div class="logine" v-else>
			
			<i class="el-icon-user">{{ Authorization.nickname }}</i>
			
			<span class="loginSta" @click="exits">退出</span>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapMutations, mapActions } from "vuex"
	import axios from 'axios'
	export default{
		data(){
			return{
				inputValue:""
			}
			
		},
		props:['Authorization'],
		methods:{
			toSearch(){
				//为空提示
				if(this.inputValue==''){
					alert("请输入内容")
				}else{
					// this.$router.push('/results')
					// 路由传参
					this.$router.push(`/results?q=${this.inputValue}`)
				}
				// 不为空跳转页面
			},
			changeLoginstatu(statu){
				this.$store.dispatch('changeLoginstatu',statu)
			},
			exits(){
				
				axios({
					url:'https://autumnfish.cn/logout',
					method:'GET'
				}).then(res=>{
					this.$message.success("成功退出");
					this.$store.dispatch("saveAuthorization",'');
				}).catch((error)=>{
					console.log(error)
				})
		   }
		}
	}
</script>

<style>
	.head{
		background-color: black;
		width: auto;
		height:35px ;
	}
		

	.loginB,.logine{
		width: auto;
		float: right;
		color: white;
		/* border-radius: 30%;
		border: 1px solid gray; */
		background-color: #000000;
		cursor: pointer;
	
	}
</style>
