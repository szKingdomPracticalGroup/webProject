import Vue from 'vue'
import Router from 'vue-router'
import test from '../components/test.vue'
import login from '../components/login.vue'
import first_page from '@/components/first_page'
import project from '@/components/project'
import myPage from '@/components/myPage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'first_page',
      component:first_page
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path:'/first_page',
      name:'first_page',
      component:first_page
    },{
      path:'/project',
      name:'project',
      component:project
    },{
      path:'/myPage',
      name:'myPage',
      component:myPage
    }
  ],
  mode:'history'
})
