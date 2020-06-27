import Vue from 'vue'
import Router from 'vue-router'
import test from '../components/test.vue'
import login from '../components/login.vue'
import first_page from '@/components/first_page'
import project from '@/components/project'
import myPage from '@/components/myPage'
import register from "@/components/register";
import projectDetail from '@/components/projectDetail'
import fundLibrary from '@/components/fundLibrary'
import sharesLibrary from '@/components/sharesLibrary'
import personalInfo from '@/components/personalInfo'
import briefInfo from '@/components/briefInfo'
import platform_introduction from "../components/platform_introduction";
import buy from "../components/trading_box/buy";
import product_initialzation_fund from "../components/product_initialzation_fund";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'first_page',
            component: first_page
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
            path: '/first_page',
            name: 'first_page',
            component: first_page
        }, {
            path: '/project',
            name: 'project',
            component: project
        }, {
            path: '/myPage',
            name: 'myPage',
            component: myPage
        }, {
            path: '/register',
            name: 'register',
            component: register
        }, {
            path: '/sharesLibrary',
            name: 'sharesLibrary',
            component: sharesLibrary
        }, {
            path: '/fundLibrary',
            name: 'fundLibrary',
            component: fundLibrary
        },
        {
            path: '/personalInfo',
            name: 'personalInfo',
            component: personalInfo
        },
        {
            path: '/project/:id',
            name: 'projectDetail',
            component: projectDetail
        },
        {
            path: '/briefInfo',
            name: 'briefInfo',
            component: briefInfo
        }, {
            path: '/product_initialzation_fund',
            name: 'product_initialzation_fund',
            component: product_initialzation_fund
        }, {
            path: '/platform_introduction',
            name: 'platform_introduction',
            component: platform_introduction
        }, {
            path: '/buy',
            name: 'buy',
            component: buy
        }
    ],
    mode: 'history'
})
