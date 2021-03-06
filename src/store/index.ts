import { createStore } from 'vuex'
import login from './login/login'
import { IRootState } from './type'

const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'coderwhy'
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login
  }
})

export default store
