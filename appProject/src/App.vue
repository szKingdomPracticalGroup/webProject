<template>
  <div id="app">

    <router-view/>
    <van-tabbar v-model="active" active-color="#07c160" inactive-color="#000" :fixed="true">
      <van-tabbar-item icon="home-o" to="/home_page">首页</van-tabbar-item>
      <van-tabbar-item icon="search">理财</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/financial_transactions">我的</van-tabbar-item>
    </van-tabbar>

  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      active:1
    }
  },
}
</script>

<style>

</style>
