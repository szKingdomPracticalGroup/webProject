<template>
  <div class="text"> 
    <p class="name">产品名称:</p>
     <el-divider></el-divider>
    <p>产品id:</p>
     <el-divider></el-divider>
    <p>产品风险类型:</p>
     <el-divider></el-divider>
    <p>策略:</p>
     <el-divider></el-divider>
    <p>预期收益率:</p>
     <el-divider></el-divider>
    <p>产品组合:</p>
     <el-divider></el-divider>
    <div id="myChart" :style="{width: '50vw', height: '20vw'}"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: ""
    };
  },
  created() {
    this.id = this.$route.params.id;
  },
  mounted() {
    this.drawProportion();
  },
  methods: {
    drawProportion() {
      console.log(this.$echarts);
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      myChart.setOption({
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line"
          }
        ]
      });
    }
  }
};
</script>

<style scoped>
  .name{
    margin-top:10px;
  }
  .text{
    color:rgb(88,160,97);
  }
</style>