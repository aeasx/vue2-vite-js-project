const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')  // 路由懒加载
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  }
]
export default routes