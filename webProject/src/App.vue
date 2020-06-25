<template>
  <div id="app">
    <el-container style="height:100%" >
      <el-header><Header/></el-header>
      <el-container>
        <el-aside width="200px"><SideBar/></el-aside>
        <el-container>
          <el-main><router-view/></el-main>
          <el-footer><footer/></el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from "./common/Header.vue";
import Footer from "./common/Footer.vue";
import SideBar from "./common/SideBar.vue";
import login from './components/login'
export default {
  name: "app",
  components: {
    Header,
    Footer,
    SideBar,
    login
  },
  data(){
    return{
      isLogin:this.$store.state.isLogin,
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  height: 100%;
}
#app {
  height: 100%;
  width: 100%;
  position: fixed;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  background-color: rgb(244, 244, 244);
}

.el-header{
  padding: 0px 0px;
}
.el-aside{
  margin-top: 10px;
}
.el-main{
  height: 100%;

  padding: 10px;
}
</style>
