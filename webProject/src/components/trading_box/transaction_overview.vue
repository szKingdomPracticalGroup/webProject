<template>
  <div class="transaction_overview">

      <div class="breadcrumb"><!-- 面包屑 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/first_page' }">系统首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/transaction_overview' }">交易概览</el-breadcrumb-item>
      </el-breadcrumb>
      </div>

      <div class="topcan">
        <div class="topcan1">
          <div class="can1t">
            <router-link to="/rebalance">
            <img class="can1" src="../../assets/tsicon.png">
            </router-link>
          </div>
          <div class="can2d">待审批</div>
          <div class="can1d"><i>{{shenpi}}</i></div>
        </div>
        <div class="topcan1">
          <div class="can1t">
            <router-link to="/buy">
            <img class="can1" src="../../assets/tmricon.png">
            </router-link>
          </div>
          <div class="can2d">买入</div>
          <div class="can1d"><i>{{mairu}}</i></div>
        </div>
        <div class="topcan1">
          <div class="can1t">
            <router-link to="/sell">
            <img class="can1" src="../../assets/tmcicon.png">
            </router-link>
          </div>
          <div class="can2d">卖出</div>
          <div class="can1d"><i>{{maichu}}</i></div>
        </div>
        <div class="topcan2">
          <div class="can2t">
            <router-link to="/rebalance">
            <img class="can2" src="../../assets/tricon.png">
            </router-link>
            <div class="can2d">再平衡</div>
          </div>
          <div class="can3t">
            <router-link to="/risk_adjustment">
            <img class="can3" src="../../assets/tficon.png">
            </router-link>
            <div class="can2d">风险调仓</div>
          </div>
        </div>
      </div>

      <div class="middle">
       

      <el-tabs :tab-position="tabPosition" style="height: 400px;position:relative;width: 100%">
        <el-tab-pane label="待审批">
          <div id="sp" style="width: 100%;height: 400px;"></div>
        </el-tab-pane>
        <el-tab-pane label="买入">
          <div id="mr" style="width:2200%;height: 400px;"></div>
        </el-tab-pane>
        <el-tab-pane label="卖出">
          <div id="mc" style="width:2200%;height: 400px;"></div>
        </el-tab-pane>
      </el-tabs>


      </div>

      <div class="foot">
        <div class="footl">
          <div id="main" style="width: 100%;height: 400px;"></div>
        </div>
        
        <div class="footr">
          <div class="footr1">十天内待审批买入和卖出的总数占比</div>
          <div class="footr2">
            <div class="footr2l">处理个数</div>
            <div class="footr2r">涉及金额</div>
          </div>
          <div class="clean"></div>
          <div class="footr3">
            <div class="footr3l"><i>{{processnumber}}</i> 个</div>
            <div class="footr3r"><i>{{amountinvolved}}</i> 万元</div>
          </div>
        </div>
      </div>


      

      

      
      

      



  </div> 
  
</template>

<script>

import echarts from 'echarts';


export default {
  name: '',
  data() {
    return {
      
      shenpi:0,
      mairu:0,
      maichu:0,
      processnumber:345,
      amountinvolved:563.8,
      tabPosition: 'left',
			/*	opinion: ["1", "3", "3", "4", "5"],*/
        opinionData_sp: ["125", "242", "233", "133", "190","377","278","322","245","354"],
        opinionData_mr: ["106", "196", "101", "63", "77","263","96","260","79","289"],
        opinionData_mc: ["19", "46", "132", "70", "113","114","182","62","166","65"],
        name_sp:'近十天产品待审批数目',
        name_mr:'近十天产品买入数目',
        name_mc:'近十天产品卖出数目',

        charts: '',
                opinion:['待审批','买入','卖出'],
                opinionData:[
                  {value:335, name:'待审批'},
                  {value:310, name:'买入'},
                  {value:310, name:'卖出'}
                ]
        

    };
  },


  methods: {
			drawLine(id) {
				this.charts = echarts.init(document.getElementById(id))
				this.charts.setOption({
					tooltip: {
						trigger: 'axis'
					},
					legend: {
						data: [this[('name'+"_"+id)]]
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},

					toolbox: {
						feature: {
							saveAsImage: {}
						}
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
					data: ["1","2","3","4","5","6","7","8","9","10"]
					
					},
					yAxis: {
						type: 'value'
					},

					series: [{
						name: this[('name'+"_"+id)],
						type: 'line',
						stack: '总量',
						data: this[('opinionData'+"_"+id)]
					}]
				})
      },

      drawPie(id){
               this.charts = echarts.init(document.getElementById(id))
               this.charts.setOption({
                 tooltip: {
                   trigger: 'item',
                  
                 },
                 legend: {
                   orient: 'vertical',
                   x: 'left',
                   data:this.opinion
                 },
                 series: [
                   {
                     name:'个数',
                     type:'pie',
                     radius:['50%','70%'],
                     avoidLabelOverlap: false,
                     label: {
                       normal: {
                         show: false,
                         position: 'center'
                       },
                       emphasis: {
                         show: true,
                         textStyle: {
                           fontSize: '30',
                           fontWeight: 'blod'
                         }
                       }
                     },
                     labelLine: {
                       normal: {
                         show: false
                       }
                     },
                     data:this.opinionData
                   }
                 ]
               })
            }

    },

		//调用
		mounted() {
			this.$nextTick(function() {
        this.drawLine('sp'),
        this.drawLine('mr'),
        this.drawLine('mc'),
        this.drawPie('main')
			})
		}

  
};
</script>

<style scoped>

.clean{ clear:both;}
.breadcrumb{
    margin-top: 10px;
    margin-bottom: 20px;
  }

.topcan{
  width: 100%;
  height: 300px;
  /* border: 1px solid #666; */

}

.topcan1{
  width: 24%;
  height: 300px;
  border: 1px solid blue;
  float: left;
  box-shadow:0px 0px 3px 4px lightcyan ;
}
.topcan2{
  width: 27%;
  height: 300px;
  border: 1px solid blue;
  float: left;
   box-shadow:0px 0px 3px 4px lightcyan ;
}
.can1t{
  margin-top: 10px;
  text-align: center;
  align-content: center;
  width: 100%;
  height: 200px;
  /* border: 1px solid #666; */
}
.can1{
  width: 198px;
  height: 200px;
}
.can1d{
  margin-top: 20px;
  font-size: 28px;
  text-align: center;
  align-content: center;
  /* border: 1px solid #666; */
}

.can2t{
  margin-top: 10px;
  text-align: center;
  align-content: center;
  width: 100%;
  height: 100px;
  /* border: 1px solid #666; */
}
.can2{
  width: 100px;
  height: 100px;
}

.can2d{
  margin-top: 5px;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  align-content: center;
  /* border: 1px solid #666; */
}
.can3t{
  margin-top: 50px;
  text-align: center;
  align-content: center;
  width: 100%;
  height: 100px;
  /* border: 1px solid #666; */
}
.can3{
  width: 100px;
  height: 100px;
}

.middle{
  width: 99.6%;
  height: 400px;
  margin-top: 30px;
  border: 1px solid blue;
  box-shadow:0px 0px 3px 4px lightcyan ;
}

.foot{
  margin-top: 30px;
  /* border: 1px solid #666; */
}
.footr{
  width: 49.6%;
  float: left;
  border: 1px solid blue;
  box-shadow:0px 0px 3px 4px lightcyan ;
  height: 400px;
}
.footl{
  width: 50%;
  float: left;
  border: 1px solid blue;
  box-shadow:0px 0px 3px 4px lightcyan ;
}
.footr1{
  height: 100px;
  /* border: 1px solid #666; */
  text-align: center;
  line-height: 100px;
  font-size: 22px;
  color: blueviolet;
  font-weight: bold;
}
.footr2{
  margin-top: 40px;
  height: 50px;
  /* border: 1px solid #666; */
}
.footr2l{
  width: 40%;
  float: left;
  border: 1px solid blue;
  box-shadow:0px 0px 3px 4px lightcyan ;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  text-align: center;
  color: #666;
  font-weight: bold;
}
.footr2r{
  width: 40%;
  float : right;
  border: 1px solid blue;
  box-shadow:0px 0px 3px 4px lightcyan ;
  line-height: 50px;
  height: 50px;
  font-size: 14px;
  text-align: center;
  font-weight: bold;
  color: #666;
}
.footr3{
  height: 100px;
  /* border: 1px solid #666; */
}
.footr3l{
  float: left;
  border: 1px solid blue;
  box-shadow:0px 0px 3px 4px lightcyan ;
  height: 100px;
  line-height: 100px;
  text-align: center;
  width: 40%;
  font-size: 28px;
}
.footr3r{
  float: right;
  border: 1px solid blue;
  box-shadow:0px 0px 3px 4px lightcyan ;
  height: 100px;
  line-height: 100px;
  text-align: center;
  width: 40%;
  font-size: 28px;
}
</style>