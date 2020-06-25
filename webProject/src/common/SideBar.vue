<template>
  <div>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      active-text-color="#ffd04b"
       background-color=rgb(4,21,39)
      text-color="white"
      :router="true"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index="/firstPage">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>

            <el-menu-item index="/myPage">
        <i class="el-icon-user-solid"></i>
        <span slot="title">投顾人中心</span>
      </el-menu-item>

      <el-submenu>
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>产品</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/project">产品列表</el-menu-item>
        </el-menu-item-group>

        <el-submenu index="1-4">
          <template slot="title">备选库</template>
          <el-menu-item index="/sharesLibrary">股票备选库</el-menu-item>
          <el-menu-item index="/fundLibrary">基金备选库</el-menu-item>
        </el-submenu>
      </el-submenu>


    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  height: 825px;
  width: 200px;
}
.title{
  text-align: center;
}
</style>





