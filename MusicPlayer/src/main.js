// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
//导入懒加载
import VueLazyLoad from 'vue-lazyload'
// 作为全局仓库，都可调用
import store from '@/store'

// import VueResource from 'vue-resource'
// Vue.use(VueResource)

Vue.config.productionTip = false

import Discovery from './views/Discovery.vue'
import playLists from './views/playLists/playLists.vue'
import singers from './views/singers/singers.vue'
// import Movie from './components/Movie.vue'
import results from './views/results/results.vue'
import playlistDetail from './views/playlistDetail/playlistDetail.vue'
// import Songs from './components/Songs.vue'
import singerdetails from './views/singerDetails/singerdetails.vue'
import 'element-ui/lib/theme-chalk/index.css'



import moment from 'moment'

Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://localhost:3000'

//定义时间日期的全局过滤器
Vue.filter('timefmt',function(value,formatString){
	if(value){
		return moment(value).format(formatString);
	}else{
		return value
	}
	
})


Vue.filter('timeTo',function(duration){
	//全局过滤器(毫秒数转化为分钟)
	        //分钟
	        var minute = (duration /1000)/ 60;
	        var minutes = parseInt(minute);
	
	        if (minutes < 10) {
	            minutes = "0" + minutes;
	        }
	
	        //秒
	        var second = duration/1000% 60;
	        var seconds = Math.floor(second);
	        if (seconds < 10) {
	            seconds = "0" + seconds;
	        }
	        return `${minutes}:${seconds}`;
	    
})


//配置axios
axios.default.baseURL='/api'

//懒加载
Vue.use(VueLazyLoad,{
    // error:'./static/error.png',                        //报错需要的图片
    loading:require('./assets/img/loading.gif')					// 替换需要的图片
})

Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { 
	  App 
  },
  data:function(){
	  return {
		  musicUrl:''
	  }
  },
  template: '<App/>'
})
