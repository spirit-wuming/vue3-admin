import { Module } from 'vuex'
import { ILoginState } from './type'
import { IRootState } from '../type'

const loginMoudle: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      name: 'tom'
    }
  },
  actions: {
    setUserInfo({ commit }, name: any) {
      console.log(name)
      commit()
    }
  }
}
export default loginMoudle
