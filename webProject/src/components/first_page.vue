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
        <el-button plain size="mini" @click="openTrade">交易概览</el-button>
      </div>
    </div>
<div class="bottom">
  <div>
    <p>设计+生产企业管理模式</p>
    <h6 class="bottomWord">组织结构模式的设计需要适应组织的不同发展阶段和新的目标而“与时俱进”</h6>
  </div>
  <img src='../assets/bottom.png' class="bottomPicture">
</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
   methods: {
    openBrief() {
      this.$router.push("platform_introduction");
    },
     openTrade(){
       this.$router.push("product_management");
     },
     openProduct(){
       this.$router.push("product_management");
     }
  }
};
</script>

<style scoped>
  .box{
    background-image: url('../assets/main.png');  
     background-repeat:no-repeat; 
     background-size:100% 100%;
    padding: 30px;
    color: white;
    height: 450px;
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
  .bottom{
    display:flex;
    justify-content: space-between;
  }
  .bottomWord{
    font-size:10px ;
    color: #686868;
  }
  .bottomPicture{
    border-radius: 50%;
    height: 150px;
    margin-right: 80px;
  }
  .btn>>>.el-button{
    box-shadow:0px 0px 3px 4px #FFF566 ;
    background:transparent;
    color:rgba(255,255,255,0.5)
  }
</style>