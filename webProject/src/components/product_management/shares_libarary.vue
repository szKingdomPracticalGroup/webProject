<template>
  <div class="product_initialzation_shares">
    <el-dialog :modal="false" title="股票产品确定" :visible.sync="dialogVisible" width="500px">
      <span>请确定您所选择的股票产品</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirm_fund_initial">确 定</el-button>
      </span>
    </el-dialog>
    <header>股票产品选择</header>
    <div class="card">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">产品管理</el-breadcrumb-item>
        <el-breadcrumb-item>产品初始化</el-breadcrumb-item>
        <el-breadcrumb-item>股票产品选择</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="filter_box">
        <div v-for="(filter_item,index) in filter_items" :key="index">
          <span class="filter_item_title">{{filter_item.title}}:</span>
          <span
            v-for="(item,indexx) in filter_item.itemList"
            :key="indexx"
            :class="{'item':true,'active':selected_filters[index]===indexx}"
            @click="changeActive(index,indexx)"
          >{{item}}</span>
        </div>
      </div>
      <div class="table_pagination">
        <span>股票备选库</span>
        <el-button class="el-button--danger" @click="dialogVisible = true">确认选择</el-button>

        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage1"
          :page-size="100"
          layout="total, prev, pager, next,jumper"
          :total="1000"
        ></el-pagination>
      </div>
      <div class="shares-table">
        <el-table :data="tableData" border>
          <el-table-column type="selection" width="55" v-model="chooseOrNot"></el-table-column>
          <el-table-column fixed prop="name" label="股票名称" width="150"></el-table-column>
          <el-table-column prop="code" label="股票代码" width="120"></el-table-column>
          <el-table-column prop="riskType" label="风险等级" width="120"></el-table-column>
          <el-table-column prop="prevClose" label="昨收" width="120"></el-table-column>
          <el-table-column prop="upAndDown" label="60日涨跌幅" width="120"></el-table-column>
          <el-table-column prop="open" label="今开" width="120"></el-table-column>
          <el-table-column label="买入比例" width="120">
            <template slot-scope="scope">
              <el-input v-model="scope.row.address"></el-input>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "firstPage",
  data() {
    return {
      tableData: [],
      chooseOrNot: false
    };
  },
  created() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      this.$axios
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
header {
  width: 100%;
  background: #5677fc;
  color: #fff;
  text-align: center;
  height: 100px;
  font-size: 30px;
  line-height: 100px;
}
.el-breadcrumb {
  padding: 50px;
}
.card {
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  width: 100%;
  box-sizing: border-box;
  padding-bottom: 50px;
}
.filter_box {
  box-sizing: border-box;
  width: 100%;
  padding: 10px 30px;
  display: flex;
  flex-direction: column;
  border: 1px solid #cfd0d0;
}
.filter_box > div {
  margin: 10px 0;
}
.filter_item_title {
  font-size: 10px;
  font-weight: 600;
}
.item {
  display: inline-block;
  cursor: pointer;
  width: 100px;
  padding: 10px 5px;
  margin: 0 50px;
  text-align: center;
  font-size: 10px;
  font-weight: 600;
}
.item:hover,
.active {
  background: #ffc069;
  color: #fff;
}
.table_pagination {
  height: 70px;
  box-sizing: border-box;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
  box-shadow: -1px 2px 3px 2px #cacbcc;
  margin-bottom: 20px;
}
.table_pagination > span:first-child {
  margin-right: auto;
}
.table_pagination >>> .el-button {
  margin-right: 30px;
  background: #e64340;
}
.span_red {
  color: #ff4747;
  font-weight: 700;
}
.span_blue {
  color: #5fb7ff;
  font-weight: 700;
}
</style>