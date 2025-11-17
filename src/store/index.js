import Vue from "vue"
import Vuex from "vuex"
const state = () => ({
  items: ['hi', 'ds', 'ki', 'oi'],
  checkoutStatus: null,
  todos: [
    { id: 1, title: 'one', done: true },
    { id: 2, title: 'two', done: false },
    { id: 3, title: 'three', done: true }
  ]
})

// getters 用于从state中的到计算属性
const getters = {
  doneTodos: state => state.todos.filter(todo => todo.done),
  getTodoById: state => (id) => state.todos.find(todo => todo.id === id)
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