<template>
<div>

    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" active-text-color='#58A061' text-color='grey' >
  <el-menu-item index="1">
      
    <i class="el-icon-menu"></i>
    <span slot="title">导航1</span>
  </el-menu-item>
  <el-menu-item index="2">
    <i class="el-icon-setting"></i>
    <span slot="title">导航2</span>
  </el-menu-item>
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
  }
</script>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    height: 825px;
    width: 200px;
  }
</style>





