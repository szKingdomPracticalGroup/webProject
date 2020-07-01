<template>
  <div class="product_management">
    <div class="breadcrumb"><!-- 面包屑 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/first_page' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/product_management">产品管理</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="product_management_body"><!-- 添加背景图片 -->
      <div class="product_management_title"> <!-- 标题部分 -->
        <p>
          平台累计投资人数已达{{cumulativeNumberOfPeople}}人 &nbsp;累计管理资金已达{{cumulativeValueOfMoney}}万元
        </p>
      </div>
      <div v-for="(product, index) in products" :key="index"> <!-- 产品区 -->
        <div class="product">
          <el-row :gutter="100">
            <el-col :span="12">
              <div class="product_left"></div>
            </el-col>
            <el-col :span="12">
              <div >
                <p class="product_name">{{product.productName}}</p>
                <p>{{product.productDescription}}</p>
                <p>当日购入<i>{{product.currentNumOfPeople}}</i>人次</p>
                <p>当日购买金额<i>{{product.currentValueOfMoney}}</i>万元</p>
                <el-button type="primary" @click="goToDetail(product.productName,product.productId)">组合详情</el-button>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import productImg from "../../assets/kingdom1.png"
  import axios from "axios";
  export default {
    name:'platform_introduction',
    data(){
      return{
        cumulativeNumberOfPeople:3682,
        cumulativeValueOfMoney:1646,
        productImg: productImg,
        products:[
            {
              productId:"",
              productName:"Product One",
              productDescription:"高风险高收益",
              currentNumOfPeople:220,
              currentValueOfMoney:189.47,
              background:"../../assets/kingdom1.png"
            },
            {
              productId:"",
              productName:"Product Two",
              productDescription:"低风险稳定收益",
              currentNumOfPeople:520,
              currentValueOfMoney:325.17,
              background:"../../assets/kingdom2.png"
            }
          ],
      }
    },
    created(){
      axios.get('http://123.57.46.173:9003/product/selectProductAll').then(res=>{
        console.log(res.data.data.data[0])
        let i = 0
        res.data.data.data.forEach(element => {
          console.log(element)
          this.products[i].productId = element.productid
          this.products[i].productName = element.name
          console.log(this.products[i])
          i = i + 1
        });
        
      }).catch(function(error){
      })
    },
    methods:{
      goToDetail(productName,productId){
        if(productId===1){
          this.$router.push({name:"combinationdetails_one",params:{productName:productName,productId:productId}})
        }else{
          this.$router.push({name:"combinationdetails_two",params:{productName:productName,productId:productId}})
        }

      }
    }
  }
</script>

<style scoped>
  .product_management{
    background: #fff;
    height: 100%;
    width: 100%;
  }

  .breadcrumb{
    margin-top: 10px;
    margin-bottom: 20px;
  }
  
  .product_management_body{
    height: 100%;
    width: 100%;
    background: url("../../assets/product_manage_background.jpg") no-repeat;
    background-size: cover;
    background-size: 100% 100%;
  }

  .product_management_title{
    color:white;
  }

  .product_management_title > p{
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    padding: 20px 0;
  }

  .product{
    padding: 20px;
    background: white;
    border: 1px solid white;
    border-radius: 4px;
    margin: 10px 100px;
    height: 250px;
  }

  .product_name{
    font-size: 20px;
    font-weight: bold;
  }

  .product p{
    margin: 20px 0;
  }

  .pruduct i{
    font-size: 20px;
    font-weight: bold;
    color: red;
  }

  .product_left{
    height: 250px;
    background: url('../../assets/kingdom1.png') no-repeat;
    background-size: cover;
    background-size: 100% 100%;
  }


  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
