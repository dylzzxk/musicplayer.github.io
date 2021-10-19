export default{
	// increase(state){
	// 	state.num++
	// }
	//              形参  如果commit时，不传参数过来，payload是undefined
	// increase(state,payload){
	// 	state.num+=payload?payload:1
	// },
		
	// decrease(state){
	// 	state.num--
	// }
	changeLoginstatu(state, showLogin){
		state.showLogin = showLogin
	},
	// 修改token，并将token存入localStorage
	saveAuthorization (state, user) {
	    // state.Authorization = user.Authorization;
	    // localStorage.setItem('Authorization', user.Authorization);
		state.Authorization=user
	},
	saveCookie(state,cookie){
		state.cookie=cookie
	},
	// 添加当前播放列表
	unshiftPlayList(state, playList) {
	    state.playList.unshift(playList);
	},
	pushPlayList(state, playList) {
	    state.playList.push(playList);
	},
	
	

}