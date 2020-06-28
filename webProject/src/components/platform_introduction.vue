<template>
  <div class="platform_introduction">
    <header>
      <span class="breadcrumb">平台简介</span>
      <div>
        <p>
          Kinddom代客理财系统
        </p>
        <span>服务于投资者的高效代客理财平台</span>
      </div>
      <img src="../../static/platform_introduce/pic.png"/>
    </header>
    <article>
      <div v-for="(articleItem,index) in articleList">
        <img :src="articleItem.icon" class="iconImg"/>
        <div>
          <p>
            {{articleItem.title}}
          </p>
          <span>{{articleItem.content}}</span>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
  export default {
    name:'platform_introduction',
    data(){
      return{
        articleList:[{
          icon:'../../static/platform_introduce/icon1.png',
          title:'面向全权委托投资人',
          content:'平台面向的用户是全权委托的投资人，投资人只需要将资金转入平台，并选择相应的投资产品，即可获得由投顾人所选产品组合带来的收益'
        },{
          icon:'../../static/platform_introduce/icon2.png',
          title:'投顾产品',
          content:'按预期收益设计两款投顾产品，分别为收益较高但稳定性相对较低的产品和收益较低但稳定性相对较高的产品'
        },{
          icon:'../../static/platform_introduce/icon3.png',
          title:'自主账户及投顾账户',
          content:'投资者拥有自主账户，可以实时看到账户余额及查看投顾人对自己的投顾组合方案明细'
        },{
          icon:'../../static/platform_introduce/icon4.png',
          title:'指令生成',
          content:'投资者对自主账户进行相应交易操作时会生成相应指令，包括买入指令、卖出指令、再平衡指令'
        },{
          icon:'../../static/platform_introduce/icon5.png',
          title:'投顾签约',
          content:'投资者在选择产品进行委托前需要进行投顾签约，合理的承担一部分投资风险'
        },{
          icon:'../assets/platform_introduce/icon6.png',
          title:'交易明细',
          content:'在交易顺利进行后，系统会生成相应的交易明细和交易记录用作保持，并同时呈现给投资人'
        }]
      }
    },
    method:{

    }
  }
</script>

<style scoped>
  .platform_introduction{
     background: #fff;
    height: 100%;
    width: 100%;
  }
  header{

    position:relative;
    height: 350px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 10%;
  }
  .breadcrumb{
    position:absolute;
    left: 0;
    color:#C2C2C2;
    font-weight: 700;
    margin:20px ;
  }
  header>src{
    height: 30%;

  }
  header>div{

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  header>div>p{
    font-size: 1vw;
    margin: 3vh 0;
  }
  article{

    height: 70%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    padding: 0 10%;
  }
  article>div{
    box-sizing: border-box;
    font-size: 1.2vw;
    width: 35%;
    height: 20vh;
    display: flex;

    padding: 5vh 2vw 0 0;
  }
  article>div>div{
    box-sizing: border-box;
    padding: .2vh 0 0 2vw;
  }
  article>div>div>p{
    font-size: 1vw;
    margin-bottom: 1vw;
  }
  article>div>div>span{
    font-size: .8vw;
  }
  .iconImg{
    width: 30px;
    height: 30px;
    background-size: 100% 100%;
  }
</style>
