import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login/login.vue'
import first_page from '@/components/first_page'
import myPage from '@/components/myPage'
import register from "@/components/login/register";
import personalInfo from '@/components/personalInfo'
import briefInfo from '@/components/briefInfo'
import platform_introduction from "../components/platform_introduction";
import buy from "../components/trading_box/buy";
import fund_library from '@/components/product_management/fund_library'
import combinationdetails_one from "../components/product_management/combinationdetails_one";
import combinationdetails_two from "../components/product_management/combinationdetails_two";
import rebalance from "../components/trading_box/rebalance";
import product_management from "../components/product_management/product_management";
import generate_complete from "../components/product_management/generate_complete";
import shares_libarary from "../components/product_management/shares_libarary";
import transaction_details from "../components/transaction_details";
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'first_page',
            component: first_page
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/first_page',
            name: 'first_page',
            component: first_page
        }, {
            path: '/product_management',
            name: 'product_management',
            component: product_management
        }, {
            path: '/myPage',
            name: 'myPage',
            component: myPage
        }, {
            path: '/register',
            name: 'register',
            component: register
        },
        {
            path: '/personalInfo',
            name: 'personalInfo',
            component: personalInfo
        },
        {
            path: '/briefInfo',
            name: 'briefInfo',
            component: briefInfo
        }, {
            path: '/fund_library',
            name: 'fund_library',
            component: fund_library
        }, {
            path: '/platform_introduction',
            name: 'platform_introduction',
            component: platform_introduction
        }, {
            path: '/buy',
            name: 'buy',
            component: buy
        },{
            path: '/combinationdetails_one',
            name: 'combinationdetails_one',
            component: combinationdetails_one
        },{
            path: '/combinationdetails_two',
            name: 'combinationdetails_two',
            component: combinationdetails_two
        },{
            path: '/rebalance',
            name: 'rebalance',
            component: rebalance
        },{
            path: '/generate_complete',
            name: 'generate_complete',
            component: generate_complete
        },{
            path: '/shares_libarary',
            name: 'shares_libarary',
            component: shares_libarary
        },{
            path: '/combinationdetails_two',
            name: 'combinationdetails_two',
            component: combinationdetails_two
        },{
            path: '/combinationdetails_two',
            name: 'combinationdetails_two',
            component: combinationdetails_two
        },{
            path: '/transaction_details',
            name: 'transaction_details',
            component: transaction_details
        }
    ],
    mode: 'hash'
})
