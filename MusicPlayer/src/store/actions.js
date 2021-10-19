export default{
	// //点击了减一后，放慢一秒执行减法
	// 	decreaseAsync(context){
	// 		context.commit('decrease')
	// 	},
	changeLoginstatu(context,payload){
		context.commit('changeLoginstatu',payload)
	},
	saveAuthorization(context,payload){
		context.commit('saveAuthorization',payload)
	},
	saveCookie(context,payload){
		context.commit('saveCookie',payload)
		
	},
	//添加到当前播放列表
	unshiftPlayList({ commit }, payload) {
	    commit('unshiftPlayList', payload)
	},
	pushPlayList({ commit }, payload) {
	    commit('pushPlayList', payload)
	},
}
