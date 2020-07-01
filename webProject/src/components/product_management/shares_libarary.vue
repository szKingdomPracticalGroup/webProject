<template>
  <div>
    <p class="title">
      <i class="el-icon-s-marketing"></i>股票备选库
    </p>
    <div class="shares-table">
      <el-table :data="tableData" border>
        <el-table-column type="selection" width="55" v-model="chooseOrNot"></el-table-column>
        <el-table-column fixed prop="name" label="股票名称" width="150"></el-table-column>
        <el-table-column prop="code" label="股票代码" width="120"></el-table-column>
        <el-table-column prop="riskType" label="风险等级" width="120"></el-table-column>
        <el-table-column prop="prevClose" label="昨收" width="120"></el-table-column>
        <el-table-column prop="upAndDown" label="60日涨跌幅" width="120"></el-table-column>       
        <el-table-column prop="open" label="今开" width="120"></el-table-column>
        <el-table-column label="买入比例" width="120">{{chooseOrNot}}<div v-if='chooseOrNot'>123</div></el-table-column>
      </el-table>
    </div>
    <div class="confirmBtn">
      <el-button type="primary" @click="confirm">确认</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "firstPage",
  data() {
    return {
      tableData: [],
      chooseOrNot:false,
    };
  },
  created() {
    this.getInfo();
  },
  methods: {


    getInfo() {
      this.axios
        .get("http://123.57.46.173:9003/product/selectStockAlternateAll")
        .then(res => {
          this.tableData = res.data.data.data;
        });
    },
    confirm() {
      this.$confirm(
        "请确定您所选择的股票产品 \n 确定后将生成最终的产品组合，并完成产品的初始化?",
        "股票产品确定",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }
      )
        .then(() => {
          this.$message({
            type: "success",
            message: "确认成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消确认"
          });
        });
    }
  }
};
</script>
  
<style scoped>
el-table {
  width: 925px;
}
.title {
  font-size: 20px;
  margin: 10px;
  color: rgb(88, 160, 97);
}
.shares-table {
  width: 925px;
  margin: 50px auto;
  padding: 0;
}
.confirmBtn {
  display: flex;
  justify-content: flex-end;
  margin-right: 150px;
}
</style>