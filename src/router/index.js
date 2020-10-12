import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import no1 from '@/views/no1/no1'
import no2 from '@/views/no2/no2'
import no3 from '@/views/no3/no3'
import login from '@/views/commit/login'

Vue.use(Router)

const router= new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/no1',
      name: 'no1',
      component: no1,
      meta: {
        keepAlive: true
        }
    },
    {
      path: '/no2',
      name: 'no2',
      component: no2
    },
    {
      path: '/no3',
      name: 'no3',
      component: no3
    },
    {
      path: '/home',
      name: 'home',
      component: home
    }
  ]
})

// 路由守卫 
router.beforeEach((to, from, next) => {
  console.log(localStorage.getItem("token"));
  // if(localStorage.getItem("token")){
    next()

  // }else{
  //   localStorage.setItem("token","meikongli token");
  // }

})
export default router