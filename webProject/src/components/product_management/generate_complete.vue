<template>
  <div class="generate_complete">
    <div class="breadcrumb"><!-- 面包屑 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/product_management' }">产品管理</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/generate_complete">组合生成</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="generate_complete_body">    
        <div class="body_center">
            <div><!-- 图标部分 -->
                <div class="icon"><img src="../../assets/generate_complete.png"/></div>
                <p class="title">组合生成</p>
                <p class="description">生成组合后，您可以对所选组合进行修改，支持再次生成</p>
            </div>
            <div class="progress_bar"><!-- 进度条部分 -->
                <el-steps :active="4" align-center>
                    <el-step title="产品查看" description="产品ID"></el-step>
                    <el-step title="基金选择" description="投顾人"></el-step>
                    <el-step title="股票选择" description="生效日期"></el-step>
                    <el-step title="组合生成" description=""></el-step>
                </el-steps>
            </div>
            <div><!-- 按钮部分 -->
                <el-button>查看项目</el-button>
                <el-button type="primary">返回修改</el-button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
  import productImg from "../../assets/kingdom1.png"
  export default {
    name:'platform_introduction',
    data(){
      return{
        cumulativeNumberOfPeople:3682,
        cumulativeValueOfMoney:1646,
        productImg: productImg,
        products:[
            {
              productName:"Product One",
              productDescription:"高风险高收益",
              currentNumOfPeople:220,
              currentValueOfMoney:189.47,
              background:"../../assets/kingdom1.png"
            },
            {
              productName:"Product Two",
              productDescription:"低风险稳定收益",
              currentNumOfPeople:220,
              currentValueOfMoney:189.47,
              background:"../../assets/kingdom2.png"
            }
          ],
      }
    },
    methods:{
      goToDetail(productName){
        this.$router.push({name:"first_page",params:{productName:productName}})
      }
    }
  }
</script>

<style scoped>
  .generate_complete{
    background: #fff;
    height: 100%;
    width: 100%;
  }

  .breadcrumb{
    padding-top: 20px;
    margin-bottom: 20px;
  }

  .generate_complete_body{
      width: 100%;
      height: 100%;
  }
  
  .body_center{
      width: 70%;
      height: 100%;
      margin: 50px auto;
      text-align: center;
  }

  .icon{
      height: 100px;
      width: 100px;
      margin: 0 auto;
  }

  .icon img{
      width: 100%;
      height: 100%;
  }

  .title{
      font-size: 30px;
      font-weight: bold;
      margin: 20px;
  }

  .description{
      font-size: 15px;
      color: gray;
      margin: 20px;
  }

  .progress_bar{
    margin: 30px 0;
  }
</style>
