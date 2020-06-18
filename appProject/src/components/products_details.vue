<template>
  <div class="products_details">
    <van-nav-bar
      title="组合详情"
      right-text="..."
      left-arrow
      @click-left="toFinancial"
      @click-right="showMoreMenu"
    />
    <div>
      <div class="project_title background_white">
        <span>{{products.project_title}}</span>
        <span>({{products.project_number}})</span>
      </div>
      <div class="params_container background_white">
        <div class="param_box " v-for="(combined_parameter,index) in products.combined_parameters" :key='index' >
          <span>{{combined_parameter.value}}</span>
          <span>{{combined_parameter.title}}</span>
        </div>
      </div>
      <div class="slogan background_white">
        <span>{{products.slogan}}</span>
      </div>
      <div class="net_worth_trend background_white">
        <span> 净值走势</span>
        <div>

        </div>
        <div class="trend_date">
          <div v-for="(trend,index) in products.trends" :key='index'>
            <span>{{trend.title}}</span>
          </div>
        </div>
      </div>
      <div class="proportion_of_investment background_white">
        <span>投资占比</span>
        <div id="myChart" :style="{width: '100vw', height: '40vw'}"></div>
      </div>
    </div>
    <div>
      <van-cell title="交易规则" is-link value="费率、交易时间"/>
    </div>
    <van-button type="info" class="buy" :block="true" size="large" @click="jumpToPurchase">立即买入</van-button>
  </div>

</template>

<script>
  export default {
    name: "products_details",
    data() {
      return {
        products: {
          project_title: '攻守兼备组合B',
          project_number: '100202',
          combined_parameters: [{
            title: '日涨跌幅',
            value: '+0'
          }, {
            title: '近一年收益率',
            value: '26.92%'
          }, {
            title: '最新净值',
            value: ''
          }
          ],
          slogan: '中低风险|0.00元起购',
          trends: [{
            title: '近1个月',
            value: '30',
          }, {
            title: '近3月',
            value: '90'
          }, {
            title: '近6月',
            value: '180'
          }, {
            title: '近1年'
          }]
        }

      }
    },
    mounted() {
      this.drawProportion()
    },
    methods: {
      toFinancial() {
        console.log('...')
      },
      showMoreMenu() {
        console.log('...')
      },
      drawProportion() {
        console.log(this.$echarts)
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        myChart.setOption({
          legend: {
            right: -0,
            orient: 'vertical',
            data: ['中小盘', '债券', '大盘', '货币']
          },
          tooltip:{
            trigger:'item',
            formatter: "{d}%"
          },
          series: [{
            type: 'pie',
            // clockwise: 'true',
            // startAngle: '0',
            // radius: '60%',
            // center: ['50%', '50%'],
            data: [
              {
                value: 20,
                name: '中小盘',

              }, {
                value: 45,
                name: '债券'
              }, {
                value: 25,
                name: '大盘'
              }, {
                value: 10,
                name: '货币'
              }
            ]
          }]
        })
      },
      jumpToPurchase(){
        //如果已经登录，跳转到购买页面
        console.log("我想跳到购买页面")
        this.$router.push({name:'purchase',params:{id:'参数'}});
        //如果没有登录，跳转到登录页面
      }
    }
  }
</script>

<style scoped>
  .background_white {
    background: #ffffff;
  }

  .project_title {
    box-sizing: border-box;
    padding: 1vh 6vw;
  }

  .project_title > span:first-child {
    font-size: 4vw;
  }

  .products_details {
    background: #F8F8F8;
    height: 100vh;
  }

  .van-nav-bar {
    background: #01B0FF;

  }

  .van-nav-bar__title {
    color: #C0FFFF;
  }

  .params_container {
    box-sizing: border-box;
    padding: 2vh 0;
    width: 100%;
    height: 14vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 1vh;
  }

  .param_box {
    width: 25vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }

  .param_box > span:first-child {
    color: #D43D4C;
    font-size: 8vw;
  }

  .param_box > span:nth-child(2) {
    color: #B3B3B5;
  }

  .slogan {
    background: #ffffff;
    width: 100%;
    box-sizing: border-box;
    padding: 0vh 3vw;
    height: 8vh;
    line-height: 8vh;
    font-size: 3.5vw;
    color: #C29949;
    margin-bottom: 2vh;
  }

  .net_worth_trend {
    height: 25vh;
    width: 100vw;

    position: relative;

    box-sizing: border-box;
  }

  .net_worth_trend > span:first-child {

  }

  .trend_date {
    position: absolute;
    width: 100vw;
    height: 8vh;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    justify-items: center;
  }

  .trend_date > div {
    border: .1vw solid #DEDEDE;
    border-bottom: .1vw solid #FFF;
    width: 100%;
    height: 8vh;
    line-height: 8vh;
    text-align: center;
  }

  .trend_date > div:first-of-type {
    border-left: .1vw solid #FFF;

  }

  .trend_date > div:last-of-type {
    border-right: .1vw solid #FFF;
  }

  .proportion_of_investment {
    width: 100vw;
    height: 25vh;
    box-sizing: border-box;
    padding: 2vh 2vw;
    font-size: 6vw;
  }

  .buy {
    position: fixed;
    bottom: 0;
    z-index: 100;
  }

  #myChart {
    margin: 0 auto;


  }
</style>
