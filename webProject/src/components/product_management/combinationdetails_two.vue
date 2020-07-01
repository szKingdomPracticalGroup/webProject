<template>
  <div class="combinationdetails_one">
      
      <header>组合详情1</header>

      <div class="line"></div>

      <div class="con1">
          <div class="breadcrumb">系统首页/产品管理/组合详情1</div>
          <div class="ton1"><el-button type="info">返回产品管理主页</el-button></div>
      </div>
      <div class="clean"></div>

      

      <div class="f1">

          <div class="tabletop">近一周基金利率排行榜（前十名）</div>
          
      </div>

      <div class="f2">

         <div class="tabletop">近一周股票利率排行榜（前十名）</div>

      </div>




      <div class="clean"></div>
      <div class="f3">

        <section class="chart-container1">
            <el-row>                     
                <el-col :span="12">
                    <div id="chartPie1" style="width:200%; height:400px;"></div>
                </el-col>          
            </el-row>
        </section>

        <section class="chart-container2">
            <el-row>                     
                <el-col :span="12">
                    <div id="chartPie2" style="width:200%; height:400px;"></div>
                </el-col>          
            </el-row>
        </section>

        <div class="clean"></div>
        <div class="f3foot">
          <div class="f3footleft">
            product one 组合推荐
          </div>
          <div class="f3footright">
            采用25%基金+75%股票的投顾组合 预期收益率为6.64%
          </div>


          
        </div>


      </div>


  </div> 


</template>

<script>

import echarts from 'echarts'

export default {
  data() {
    return {
      chartPie1:null,
      chartPie2:null
      

    };
  },


  methods: {                               
            drawPieChart1() {
                this.chartPie1 = echarts.init(document.getElementById('chartPie1'));
                this.chartPie1.setOption({
                    title: {
                        text: '25%基金比例',
                        subtext: 'Product--One',
                        x: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ['基金1', '基金2', '基金3', '基金5', '基金6','基金7','基金8']
                    },
                     
                    series: [
                        {
                            name: '所占比例',
                            type: 'pie',
                            radius: '50%',
                            center: ['50%', '60%'],
                            data: [
                                { value: 20, name: '基金1' },
                                { value: 15, name: '基金2' },
                                { value: 12, name: '基金3' },
                                { value: 14, name: '基金5' },
                                { value: 12, name: '基金6' },
                                { value: 15, name: '基金7' },
                                { value: 12, name: '基金8' }
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                });
            },

            drawPieChart2() {
                this.chartPie2 = echarts.init(document.getElementById('chartPie2'));
                this.chartPie2.setOption({
                    title: {
                        text: '75%股票比例',
                        subtext: 'Product--Two',
                        x: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ['股票2', '股票4', '股票5', '股票6', '股票9']
                    },
                     
                    series: [
                        {
                            name: '所占比例',
                            type: 'pie',
                            radius: '50%',
                            center: ['50%', '60%'],
                            data: [
                                { value: 32, name: '股票2' },
                                { value: 38, name: '股票4' },
                                { value: 13, name: '股票5' },
                                { value: 13, name: '股票6' },
                                { value: 4, name: '股票9' }
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                });
            },


            drawCharts1() {
                this.drawPieChart1()
            },

            drawCharts2() {
                this.drawPieChart2()
            },
        },
         
 
 
        mounted: function () {
            this.drawCharts1(),
            this.drawCharts2()
            
        },
      
        // updated: function () {
        //     this.drawCharts()
        // }





};
</script>

<style scoped>

header {
        width: 100%;
        background: #5677FC;
        color: #fff;
        text-align: center;
        height: 60px;
        font-size: 30px;
        line-height: 60px;
    }


.clean{ clear:both;}

.line {
    width: 100%;
    height: 1px;
    border: 1.5px solid #FEEDA6;
    }

.breadcrumb {
        position: relative;
        color: gray;
        font-weight: 700;
        margin: 20px;
        float: left;
    }

.con1{
    width: 100%;
    
}
.ton1{
    float: right;
    margin-right: 20px;
    margin-top: 10px;

}


.tabletop{
  height: 50px;
  line-height: 50px;
  padding-left: 10px;
  font-weight: bolder;
  background-color: white;
}

.f1 {
    width: 49%;
    float:left;
    height: 100px;
    border: 1px solid red;
    box-shadow: 0 0 3px 3px lightcoral;
}
.f2{
    
    width: 49%;
    float: right;
    height: 100px;
    border: 1px solid darkorange;
    box-shadow: 0 0 3px 3px orange;
}
.f3 {
    width: 100%;
    height: 550px;
    align-content: center;
    margin-top: 20px;
    border: 1px solid blue;
    box-shadow: 0 0 3px 3px cornflowerblue;
    
}

.f3foot{
  margin-top: 20px;
  height: 50px;
  line-height: 50px;
  text-align: center;
}

.f3footleft{
  width: 15%;
  margin-left: 25%;
  height: 50px;
  line-height: 50px;
  float: left;
  font-weight: bolder;
  color: #A8071A;
  font-size: 20px;

}

.f3footright{
  width: 40%;
  height: 50px;
  line-height: 50px;
  float: left;
  font-weight: bolder;
  font-size: 25px;
}


.chart-container1 {
        width: 49.5%;
        float: left;
        /* border: 1px solid blue; */

    }

.chart-container2 {
        width: 49.5%;
        float: right;
        /* border: 1px solid blue; */
    }

.el-col {
        padding: 30px 20px;
    }

</style>