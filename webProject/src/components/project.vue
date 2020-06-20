<template>
  <div class="project">

    <el-row :gutter="20">
      <el-col :span="6">
        <el-card :body-style="{ padding: '10px'}" shadow="hover" :class="product">
          <router-link :to="{name:'projectDetail',params:{id:product.id}}" >
          <div class="card">
            <p class="title">产品一</p>
            <el-divider></el-divider>
            <el-row :gutter="20">
              <el-col :span="6">
                <div class="kind">产品风险类型</div>
              </el-col>
                 <el-divider direction="vertical"></el-divider>
              <el-col :span="6" :offset="6">
                <div class="yuqi">预期收益率</div>
              </el-col>
            </el-row>
            <p>产品组合</p>
            <p>投股id</p>
          </div>
          </router-link>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card :body-style="{ padding: '10px' }" shadow="hover">
         <div class="card">
            <p>产品2</p>
            <el-divider></el-divider>
            <el-row :gutter="20">
              <el-col :span="6">
                <div class="kind">产品风险类型</div>
              </el-col>
              <el-col :span="6" :offset="6">
                <div class="yuqi">预期收益率</div>
              </el-col>
            </el-row>
            <p>产品组合</p>
            <p>投股id</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "project",
  data() {
    return {
      product:
        {"id":1,"name":"Acbads"}

    };
  }
};
</script>

<style scoped>
.el-card {
  display: inline-block;
  width: 280px;
  height: 376px;
  margin: 20px 20px;
  background-color:rgb(205, 231,250);
}
.card {
  text-align: center;
  color: white;
}
.title{
  color: rgb(74, 94,178);
  font-size: 25px;
}
.router-link-active {
  text-decoration: none;
}
a {
   text-decoration: none;
 }
</style>
