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

    <el-table
      :data="tableData_jijin"
      style="width: 100%">
      <el-table-column
        prop="rank"
        label="排名"
        width="160">
      </el-table-column>
      <el-table-column
        prop="name"
        label="基金代码+名称"
        width="220">
      </el-table-column>
      <el-table-column
        prop="rate"
        label="增长率"
        width="180">
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
        width="160">
      </el-table-column>
      <el-table-column
        prop="name"
        label="股票代码+名称"
        width="220">
      </el-table-column>
      <el-table-column
        prop="rate"
        label="增长率"
        width="180">
      </el-table-column>
      <el-table-column prop="percentage" >
      <template slot-scope="scope">
      <el-progress :text-inside="true" :stroke-width="18" :percentage="scope.row.percentage" :color="tableData_gupiao"></el-progress>
        
      </template>
   
    </el-table-column>
    </el-table>




      </div>




      <div class="clean"></div>
      <div class="f3">789</div>



  </div> 


</template>

<script>
export default {
  data() {
    return {


        tableData_jijin: [{
            rank: '1',
            name: '001基金1',
            rate: '4.32%',
            percentage:80,
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
          }]

    };
  }
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
    height: 574px;
    border: 1px solid red;
    box-shadow: 0 0 3px 3px lightcoral;
}
.f2{
    
    width: 49%;
    float: right;
    height: 574px;
    border: 1px solid darkorange;
    box-shadow: 0 0 3px 3px orange;
}
.f3 {
    width: 100%;
    height: 700px;
    border: 1px solid black;
    align-content: center;
    margin-top: 20px;
}

</style>