import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '../components/test.vue'
import login from '../components/login.vue'
import firstPage from '@/components/firstPage'
import project from '@/components/project'
import myPage from '@/components/myPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
      path:'/firstPage',
      name:'firstPage',
      component:firstPage
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
  hash:'history'
})
