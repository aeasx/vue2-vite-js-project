import Vue from "vue"
import Vuex from "vuex"
const state = () => ({
  items: ['hi', 'ds', 'ki', 'oi'],
  checkoutStatus: null
})

// getters
const getters = {
}

// actions
const actions = {
}

// mutations
const mutations = {
}
Vue.use(Vuex)
const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export default store