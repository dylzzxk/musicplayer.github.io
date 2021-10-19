<template>
	<div class="musichome">
		<top :Authorization="Authorization"></top>
		<index></index>
		<login v-show="!Authorization&&showLogin"></login>
	</div>
	
</template>

<script>
	
	//导入
	import top from '../components/top/top.vue'
	import index from './index/index.vue'
	import login from '../components/login/login.vue'
	import {mapState, mapGetters, mapMutations, mapActions } from "vuex"
	export default{
		components:{
			top,
			index,
			login
			
		},
		computed:{
			...mapGetters([
				'showLogin',
				'Authorization',
				//当前歌单
				'playList'
				])
		},
	
		methods:{
			changeLoginstatu(statu){
				this.$store.dispatch("changeLoginstatu",statu)
			}
		}
	}
</script>

<style>
</style>
