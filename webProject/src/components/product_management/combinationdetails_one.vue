<template>
  <div class="combinationdetails_one">
      
      <header>组合详情1</header>

      <div class="line"></div>

      <div class="breadcrumb"><!-- 面包屑 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/first_page' }">系统首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/product_management' }">产品管理</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/combinationdetails_two' }">组合详情1</el-breadcrumb-item>
      </el-breadcrumb>
      </div>
      <div class="clean"></div>

      

      <div class="f1">

          <div class="tabletop">近一周基金利率排行榜（前十名）</div>

      <el-table
        :data="tableData_jijin"
        style="width: 100%">
        <el-table-column
          prop="rank"
          label="排名"
          width="120">
        </el-table-column>
        <el-table-column
          prop="name"
          label="基金代码+名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="rate"
          label="增长率"
          width="120">
        </el-table-column>
        <el-table-column prop="percentage" >
        <template slot-scope="scope">
        <el-progress :text-inside="true" :stroke-width="18" :percentage="scope.row.percentage" :color="tableData_jijin"></el-progress>
          
        </template>
     
        </el-table-column>
        </el-table>
          
      </div>

      <div class="f2">

         <div class="tabletop">近一周股票利率排行榜（前十名）</div>

            <el-table
          :data="tableData_gupiao"
          style="width: 100%">
          <el-table-column
            prop="rank"
            label="排名"
            width="120">
          </el-table-column>
          <el-table-column
            prop="name"
            label="股票代码+名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="rate"
            label="增长率"
            width="120">
          </el-table-column>
          <el-table-column prop="percentage" >
          <template slot-scope="scope">
          <el-progress :text-inside="true" :stroke-width="18" :percentage="scope.row.percentage" :color="tableData_gupiao"></el-progress>
            
          </template>
       
        </el-table-column>
        </el-table>

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
            采用<i>{{(this.fundPie.title)*100}}</i>%基金+<i>{{(this.stockPie.title)*100}}</i>%股票的投顾组合 预期收益率为<i>{{expectedrate}}</i>%
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
        chartPie2:null,


        tableData_jijin: [{
            rank: '1',
            name: '001基金1',
            rate: '4.32%',
            percentage:80.1,
            color: 'red'
          }, {
            rank: '2',
            name: '002基金2',
            rate: '4.30%',
            percentage:50,
            color: "red",
          }, {
            rank: '3',
            name: '003基金3',
            rate: '3.78%',
            percentage:30,
            color: "red"
          }, {
            rank: '4',
            name: '004基金4',
            rate: '3.67%',
            percentage:70,
            color: "red"
          },
          {
            rank: '5',
            name: '005基金5',
            rate: '3.55%',
            percentage:24,
            color: "red"
          },
          {
            rank: '6',
            name: '006基金6',
            rate: '3.01%',
            percentage:33,
            color: "red"
          },
          {
            rank: '7',
            name: '007基金7',
            rate: '2.43%',
            percentage:50,
            color: "red"
          },
          {
            rank: '8',
            name: '008基金8',
            rate: '1.78%',
            percentage:55,
            color: "red"
          },
          {
            rank: '9',
            name: '009基金9',
            rate: '1.72%',
            percentage:62,
            color: "red"
          },
          {
            rank: '10',
            name: '010基金10',
            rate: '0.99%',
            percentage:54,
            color: "red"
          }],


          tableData_gupiao: [{
            rank: '1',
            name: '001股票1',
            rate: '25%',
            percentage:60,
            color: "darkorange"
          }, {
            rank: '2',
            name: '002股票2',
            rate: '20%',
            percentage:57,
            color: "darkorange"
          }, {
            rank: '3',
            name: '003股票3',
            rate: '18.5%',
            percentage:88,
            color: "darkorange"
          }, {
            rank: '4',
            name: '004股票4',
            rate: '18%',
            percentage:40,
            color: "darkorange"
          },
          {
            rank: '5',
            name: '005股票5',
            rate: '15%',
            percentage:34,
            color: "darkorange"
          },
          {
            rank: '6',
            name: '006股票6',
            rate: '12%',
            percentage:56,
            color: "darkorange"
          },
          {
            rank: '7',
            name: '007股票7',
            rate: '10%',
            percentage:40,
            color: "darkorange"
          },
          {
            rank: '8',
            name: '008股票8',
            rate: '8%',
            percentage:65,
            color: "darkorange"
          },
          {
            rank: '9',
            name: '009股票9',
            rate: '5%',
            percentage:72,
            color: "darkorange"
          },
          {
            rank: '10',
            name: '010股票10',
            rate: '4.5%',
            percentage:34,
            color: "darkorange"
          }],

          fundPie:{
            title:0.25,
            legend:['基金1', '基金2', '基金3', '基金5', '基金6','基金7','基金8'],
            series:[
                     { value: 20, name: '基金1' },
                     { value: 15, name: '基金2' },
                     { value: 12, name: '基金3' },
                     { value: 14, name: '基金5' },
                     { value: 12, name: '基金6' },
                     { value: 15, name: '基金7' },
                     { value: 12, name: '基金8' }
                     ],
            

          },
          stockPie:{
            title:0.75,
            legend:['股票2', '股票4', '股票5', '股票6', '股票9'],
            series:[
                     { value: 32, name: '股票2' },
                     { value: 38, name: '股票4' },
                     { value: 13, name: '股票5' },
                     { value: 13, name: '股票6' },
                     { value: 4, name: '股票9' }
                     ],


          },
          expectedrate:6.64



    };
  },

  methods: {                               
            drawPieChart1() {
                this.chartPie1 = echarts.init(document.getElementById('chartPie1'));
                this.chartPie1.setOption({
                    title: {
                        text: (this.fundPie.title)*100+'%基金比例',
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
                        data: this.fundPie.legend
                    },
                     
                    series: [
                        {
                            name: '所占比例',
                            type: 'pie',
                            radius: '50%',
                            center: ['50%', '60%'],
                            data: this.fundPie.series,
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
                        text: (this.stockPie.title)*100+'%股票比例',
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
                        data: this.stockPie.legend
                    },
                     
                    series: [
                        {
                            name: '所占比例',
                            type: 'pie',
                            radius: '50%',
                            center: ['50%', '60%'],
                            data: this.stockPie.series,
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

.breadcrumb{
    margin-top: 10px;
    margin-bottom: 20px;
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
    height: 580px;
    border: 1px solid red;
    box-shadow: 0 0 3px 3px lightcoral;
}
.f2{
    
    width: 49%;
    float: right;
    height: 580px;
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
  width: 30%;
  margin-left: 8%;
  height: 50px;
  line-height: 50px;
  float: left;
  font-weight: bolder;
  color: #A8071A;
  font-size: 20px;

}

.f3footright{
  width: 50%;
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