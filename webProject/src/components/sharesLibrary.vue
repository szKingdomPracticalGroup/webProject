<template>
<div>
  <p class="title"><i class="el-icon-s-marketing"></i>股票备选库</p>
  <el-table :data="tableData" border style="width: 870px">
    <el-table-column fixed prop="date" label="股票名称" width="150"></el-table-column>
    <el-table-column prop="name" label="风险等级" width="120"></el-table-column>
    <el-table-column prop="province" label="股票代码" width="120"></el-table-column>
    <el-table-column prop="city" label="最新净值" width="120"></el-table-column>
    <el-table-column prop="address" label="日涨跌幅" width="120"></el-table-column>
    <el-table-column prop="zip" label="买入费率" width="120"></el-table-column>
    <el-table-column label="操作" width="120">
      <template>
        <el-button type="text">选择</el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
export default {
  name: "firstPage",
  data() {
    return {
      tableData: [
        {
          date: "深圳金证",
          name: "低",
          province: "134213",
          city: "0.7833",
          address: "+23.22%",
          zip: "0.12%"
        },
        {
          date: "东北大学",
          name: "中",
          province: "655311",
          city: "0.2368",
          address: "+10.42%",
          zip: "0.12%"
        },
        {
          date: "茅台",
          name: "中",
          province: "982320",
          city: "1.2381",
          address: "+15.88%",
          zip: "0.12%"
        },
        {
          date: "大悦城",
          name: "高",
          province: "100234",
          city: "0.8729",
          address: "+30.02%",
          zip: "0.12%"}
      ]
    };
  },
  methods: {
    handleClick(row) {
      console.log(row);
    }
  }
};
</script>
  
<style scoped>
.title{
  font-size: 20px;
  margin: 10px;
  color: rgb(88,160,97);
}
</style>