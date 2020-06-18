<template>
  <div class="home_page">
    <div class="colorbox"></div>
    <div class="user-info">
      <el-card class="box-card">
        <div slot="header" class="clearfix" v-on:click = "handleClick">
          <span>财富账户&nbsp;<van-icon name="eye-o" /></span>
          <el-button style="float: right; padding: 3px 0" type="text"><van-icon name="arrow" /></el-button>
        </div>
        <div class="box-card-body">
          <div class="total-assets has-right-border">
            总资产（元）
            <p>￥****</p>
          </div>
          <div class="total-assets has-right-padding">
            累计收益（元）
            <p>￥****</p>
          </div>
        </div>
      </el-card>
    </div>
    <!-- <van-cell-group>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group> -->
    <div class="rotation-chart">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <h3>组合产品A</h3>
          中低风险|0.00元起购
          <p>26.92%</p>
        </van-swipe-item>
        <van-swipe-item>
          <h3>组合产品B</h3>
          中高风险|10000.00元起购
          <p>26.92%</p>
        </van-swipe-item>
      </van-swipe>
    </div>
    <van-cell title="精选产品" is-link @click="jumpToProduct"/>
    
    <van-cell title="组合产品B" value="10%" size="large" label="低风险|0元起投" url=""/>
    <!-- <van-cell title="路由跳转" is-link to="index" /> -->
  </div>
</template>

<script>
  export default {
    name: 'home_page',
    data(){
      return{
        active:1
      }
    },
    methods:{
      handleClick(){
        console.log('财富管理被点了一下！')
      },
      jumpToProduct(e){
        console.log(e);
        this.$router.push({name:'financial_transactions',params:{id:'参数'}});
      }
    }
  }
</script>

<style>
  .colorbox{
    background: #6ec1f5;
    height: 50px;
  }

  .user-info{
    box-shadow: 2px 3px 50px 5px  rgba(0,0,0,0.3);
  }

  .rotation-chart{
    margin-top: 20px;
  }

  .my-swipe .van-swipe-item {
    color: #fff;
    /* font-size: 20px; */
    line-height: 1em;
    text-align: center;
    background-color: #6ec1f5;
  }

  .van-swipe-item p{
    font-size: 30px;
    color:red;
  }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 96%;
    margin-left: 2%;
  }

  .total-assets{
    width: 49%;
    float: left;
    color: gray;
  }
  .has-right-border{
    border-right: 1px solid gray;
  }
  has-right-padding{
    margin-left: 10%;
  }
</style>
