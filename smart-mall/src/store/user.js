import { setInfo, getInfo } from '@/utils/storage'
export default {
  namespaced: true,
  state () {
    return {
      userInfo: getInfo
    }
  },
  mutations: {
    setUserInfo (state, obj) {
      state.userInfo.token = obj.token
      state.userInfo.userId = obj.userId
      setInfo(obj)
      console.log('vuex', state)
    }
  }
}
