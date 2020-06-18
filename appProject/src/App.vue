<template>
  <div id="app">

    <router-view/>
    <van-tabbar v-model="$store.state.activeTabbar" @change="setActiveTabbar"
                active-color="#07c160" inactive-color="#000" :fixed="true">
      <van-tabbar-item icon="home-o" to="/home_page">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/financial_transactions">理财</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to = "/me">我的</van-tabbar-item>
    </van-tabbar>

  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{

    }

  },
  methods:{
    setActiveTabbar(index){
      console.log(this.$store.state.activeTabbar)
      this.$store.commit('setActiveTabbar',index)
    }
  }
}
</script>

<style>

</style>
