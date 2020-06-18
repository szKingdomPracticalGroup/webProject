import Vue from 'vue'
import Router from 'vue-router'
import home_page from '@/components/home_page'
import financial_transactions from '@/components/financial_transactions'
import me from '@/components/me'
Vue.use(Router)

export default new Router({
  routes: [
    {
    path:'/',
    name:'home_page',
    component:home_page
    },
    {
      path:'/home_page',
      name:'home_page',
      component:home_page
    },
    {
      path:'/financial_transactions',
      name:'financial_transactions',
      component:financial_transactions
    },
    {
      path:'/me',
      name:'me',
      component:me
    }
  ]
})
