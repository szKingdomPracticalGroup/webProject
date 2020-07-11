// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vuex from 'vuex'
import store from "../../webProject/src/store/store";
import axios from 'axios';
Vue.prototype.$axios = axios    //全局注册，使用方法为:this.$axios
Vue.config.productionTip = false;
import echarts from 'echarts'

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Vuex)
/* eslint-disable no-new */

Vue.prototype.getStatus=function(){
  let userName=sessionStorage.getItem('userName');
  console.log(userName);
  if(userName!==undefined){
    return true
  }
  return false;
}
Vue.prototype.showMessage=function(message,type='success'){
  this.$message({
    type:type,
    message,
  })
}
// router.beforeEach((to, from, next) => {
//   let userName=sessionStorage.getItem('userName');
//   console.log(userName)
//   if(to.name==='register'||to.name==='login'||to.name==='first_page'||to.name==='platform_introduction'){
//     next()
//     return
//   }else
//   {//如果不是登录,注册,首页界面
//     if(userName!==null &&userName!==undefined){
//       next()
//       return
//     }else{
//       next({
//         name:'login'
//       })
//       return
//     }
//   }
//
// });
new Vue({
  el: '#app',
  router,
  store:store,
  components: { App },
  template: '<App/>'
})
