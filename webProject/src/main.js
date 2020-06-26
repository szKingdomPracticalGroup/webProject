// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vuex from 'vuex'
import store from "../../webProject/src/store/store";
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(Vuex)
/* eslint-disable no-new */
// router.beforeEach((to, from, next) => {
//   if(to.name!=='login'){//如果不是登录界面
//     if(store.getters.isLogin===false){
//       next({
//         path:'/login'
//       })
//     }else{
//       next()
//     }
//   }else{
//     next()
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
