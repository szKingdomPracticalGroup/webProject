<template>
    <div class="risk_adjustment">
        <header>风险调仓</header>
        <div class="bread">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">交易盒子</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">风险调仓</a></el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="table_pagination">
                <el-button type="primary">审批历史</el-button>
                <el-button class="el-button--danger" @click="dialogVisible = true">确认调仓</el-button>

                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page.sync="currentPage1"
                        :page-size="100"
                        layout="total, prev, pager, next,jumper"
                        :total="1000">
                </el-pagination>
        </div>
        <el-table
                    border
                    height="500px"
                    size="medium"
                    ref="multipleTable"
                    :data="riskStockList"
                    tooltip-effect="dark"
                    @selection-change="handleSelectionChange">
                <el-table-column
                        type="selection"
                        width="50">
                </el-table-column>
                <el-table-column
                        label="股票名称"
                        width="200">
                    <template slot-scope="scope">{{ scope.row.stockName }}</template>
                </el-table-column>
                <el-table-column
                        prop="stockCode"
                        label="股票代码"
                        width="200">
                </el-table-column>
                <el-table-column
                        prop="riskRank"
                        label="风险等级"
                        show-overflow-tooltip
                        :filters="buyProductSelect"
                        :filter-method="filterHandler">
                </el-table-column>
                <el-table-column
                        prop="product"
                        label="产品"
                        show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                        prop="requestState"
                        label="60日跌幅"
                        show-overflow-tooltip>
                    <template slot-scope="scope">
                        <span class="span_blue ">{{scope.row.sixtyDateDrop}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="date"
                        label="今日开盘价"
                        show-overflow-tooltip>
                    <template slot-scope="scope">
                        <span >{{scope.row.openPrice}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="date"
                        label="风险阈值"
                        show-overflow-tooltip>
                    <template slot-scope="scope">
                        <span >{{scope.row.riskMax}}</span>
                    </template>
                </el-table-column>
            </el-table>
            <div class="bottom">
                <div>
                    <p class="bottom_title">调仓换股</p>
                    <p class="bottom_content">大盘在调仓时，投资者将自己手中所持的股票进行仓位调整和股票品种</p>
                    <p class="bottom_content">的更换。而调仓具体操作，一般情况下是大盘进入上行通道时，将领涨</p>
                    <p class="bottom_content">品种的股票仓位加大，甚至满仓</p>
                </div>
                <img src='../../assets/riskAdjustment.png' class="bottomPicture">
            </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "risk_adjustment",
        data() {
            return {
                currentPage1: 1,
                riskStockList: [
                    {
                        stockName:'平安银行',
                        stockCode:'SZ000001',
                        riskRank: '高',
                        product: '产品一',
                        sixtyDateDrop: '10%',
                        openPrice: 20,
                        riskMax: '5%'
                    },
                ],
            }
        },
        methods:{
            handleSizeChange() {//改变页的大小

            },
            handleCurrentChange(val) {//改变当前页
                console.log(`当前页: ${val}`);
            },
        },
    }
</script>

<style scoped>
    header {
        width: 100%;
        background: #5677FC;
        color: #fff;
        text-align: center;
        height: 40px;
        font-size: 20px;
        line-height: 40px;
    }

    .bread{
        width: 100%;
        height: 30px;
        line-height: 30px;
        padding: 20px 10px 0 10px;
        background:white;
        margin: 5px 0;
    }

    .table_pagination {
        height: 70px;
        box-sizing: border-box;
        padding: 10px 20px;
        font-size: 20px;
        font-weight: 600;
        display: flex;
        flex-wrap: nowrap;
        justify-content: flex-end;
        align-items: center;
        box-shadow: -1px 2px 3px 2px #CACBCC;
        margin-bottom: 20px;
    }

    .table_pagination >>> .el-button:first-child {
        margin-right: auto;
        background: #40A9FF;
        color: #fff
    }

    .table_pagination >>> .el-button:last-of-type {
        margin-right: 30px;
        background: #E64340;
    }

    .bottom{
        display:flex;
        justify-content: space-between;
        background: white;
        padding:15px 40px;
    }

    .bottom_title{
        font-size: 30px;
        margin-bottom: 10px;
        font-family: "Microsoft YaHei";
    }

    .bottom_content{
        font-family: "PingFang SC";
    }

    .bottomPicture{
        border-radius: 50%;
        height: 150px;
        margin-right: 80px;
    }
</style>