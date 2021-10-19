import Vue from 'vue'
import Router from 'vue-router'
import Discovery from '@/views/Discovery.vue'
import playLists from '@/views/playLists/playLists.vue'
import Songs from '@/views/Songs/Songs'
import singers from '@/views/singers/singers.vue'
import results from '@/views/results/results.vue'
// import playlistDetails from '@/components/PlayLists/playlistDetails.vue'

//导入歌单详情页面
import playlistDetail from '@/views/playlistDetail/playlistDetail.vue'
// import Movie from '@/components/Movie.vue'
import singerdetails from '@/views/singerDetails/singerdetails.vue'

Vue.use(Router)

export default new Router({
	// 配置地址 和组件的对应关系
  routes: [
	  //默认显示发现音乐页面
    {
		// 地址
      path: '/Discovery',
      name: 'Discovery',
	  //组件
      component: Discovery
    },
	
	{
		// 地址
	  path: '/Discovery',
	  name: 'Discovery',
	  //组件
	  component: Discovery
	},
	
	// {
	// 	// 地址
	//   path: '/Movie',
	//   name: 'Movie',
	//   //组件
	//   component: Movie
	// },
	
	{
		// 地址
	  path: '/playLists',
	  name: 'playLists',
	  //组件
	  component: playLists
	},
	
	{
		// 地址
	  path: '/Songs',
	  name: 'Songs',
	  //组件
	  //实现懒加载
	  component: resolve=>(require(["@/views/Songs/Songs"],resolve))
	},
	{
		path:'/singers',
		name:'singers',
		component:singers
	},
	{
		// 地址
	  path: '/results',
	  name: 'results',
	  //组件
	  component: results
	},
	{
		// 地址
		path: '/playlistDetail',
		name: 'playlistDetail',
		//组件
		component: playlistDetail
	},
	{
		// 地址
		path: '/singerDetails',
		name: 'singerdetails',
		//组件
		component: singerdetails
	}
	
  ]
})
