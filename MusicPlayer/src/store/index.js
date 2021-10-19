// 用来状态管理 仓库
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import * as getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
	//相当于组件中的data，专门用来存放数据
	state,
	//相当于组件中的computed,getters是全局的
	getters,
	
	//相当于组件中的metohds，但是他不能使用异步方法（axios,定时器）
	mutations,
	//专门用来处理异步，实际处理状态值的仍是mutations
	actions,
	
	// //主模块
	// modules:{
		
	// }
	
})