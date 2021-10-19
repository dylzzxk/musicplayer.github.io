<template>
	<div class="index">
		<navgiter></navgiter>
		<mainPage></mainPage>
		<player :playList="playList"></player>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	import mainPage from '../../components/index/mainPage.vue'
	import navgiter from '../../components/index/navgiter.vue'
	import player from '../../components/index/player.vue'
	export default{
		components:{
			mainPage,
			navgiter,
			player
		},
		computed:{
			...mapGetters(['playList'])
		},
		methods:{
			play(){
				this.musicUrl=url
			}
		}
			
	}
</script>

<style>
	.player{
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 100;
		width: 100%;
		background-color: black;
		
	}
		
	#musicPlayer{
		width: 100%;
	
	}
</style>
