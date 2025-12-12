import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import store from '@/store'
import { MyPoster } from '@/components'
import '@/style.css'
Vue.use(ElementUI)

Vue.prototype.$ELEMENT = {
  size: 'small',
  zIndex: 2000
}

// global registet components
Vue.component('my-poster', MyPoster)
new Vue({
  router,
  // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
  store,
  render: h => h(App)
}).$mount('#app')