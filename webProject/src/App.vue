<template>
  <div id="app">
    <el-container>
      <el-header>
        <img class="webLogo" src="https://i.loli.net/2020/06/15/YLenmNxhqQSyIwz.jpg" />
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
          <el-menu-item index="1" @click="toFirstPage">首页</el-menu-item>
          <el-menu-item index="2" @click="toProject">产品</el-menu-item>
          <el-menu-item index="3" @click="toFirstPage" disabled>我的</el-menu-item>
          <el-menu-item index="4" @click="toLogin">请先登录</el-menu-item>
        </el-menu>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-main>
            <router-view />
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    toLogin(){
      this.$router.push("/login");
    },
    toFirstPage() {
      this.$router.push("/firstPage");
    },
    toProject() {
      this.$router.push("/project");
    }
  }
};
</script>

<style>
.webLogo {
  height: 6vw;
  width: 12vw;
  margin-top: 50px;
}
.el-header {
  box-sizing: border-box;
  background:red;
  padding: 0 10% 0 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.el-menu-demo > .el-menu-item:last-child {
  color: red;
}
.el-main {

  padding-top: 5%;
  box-sizing: border-box;
  padding-right: 10%;
}
</style>
