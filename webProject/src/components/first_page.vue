<template>
  <div class="firstPage">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }" class='title'>系统首页</el-breadcrumb-item>
      <!-- <el-breadcrumb-item :to="{ path: '/briefInfo' }">平台简介</el-breadcrumb-item> -->
    </el-breadcrumb>
    <div class="box">
      <h2>KINGDOM</h2>
      <h4>一个高效实用的代客理财开发平台</h4>
      <div class="btn">
        <el-button plain size="mini" @click="openBrief">平台简介</el-button>
        <el-button plain size="mini" @click="openProduct">产品管理</el-button>
        <el-button plain size="mini" @click="openTrade">交易盒子</el-button>
      </div>
    </div>

    <p>设计+生产企业管理模式</p>
    <h6>xxxxxxxxxxxxxxxxxxx</h6>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
   methods: {
    openBrief() {
      this.$router.push("briefInfo");
    }
  }
};
</script>

<style scoped>
  .box{
    background: orange;
    /* background-image: url(''); */
    padding: 30px;
    color: white;
    height: 500px;
  }
  .title{
      color: grey;
  margin: 20px 15px;
  }
  h2{
    margin-top: 70px;
    font-size: 50px;
  }
  h4{
        margin-bottom: 40px;
    font-size: 15px;
  }
  p{
    margin: 40px 30px 20px;
    font-size: 25px;
  }
  h6{
    margin-left: 40px;
    font-size: 15px;
  }
</style>
