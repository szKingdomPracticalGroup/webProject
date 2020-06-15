import Vue from 'vue'
import Router from 'vue-router'
import firstPage from '@/components/firstPage'
import project from '@/components/project'
import myPage from '@/components/myPage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'firstPage',
      component:firstPage
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
