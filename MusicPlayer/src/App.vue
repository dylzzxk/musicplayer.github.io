<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
   <!-- 测试组件
		<Home></Home>
		<About></About>
		<Btn></Btn>
	 -->
	<!-- 正确组件 -->
	<musichome></musichome>
	<!-- <router-view></router-view> -->
  </div>
</template>

<script>
//导入

import musichome from './views/musicHome.vue'
import { mapGetters, mapMutations, mapActions } from "vuex"

export default {
	
  //注册组件
  components:{
		
	 musichome
  },
	
  name:'app',



}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

</style>
