<template>
    <div class="sell">

        <header>卖出流程</header>
        <div class="card">
            <span class="breadcrumb">交易盒子/卖出</span>
            <div class="table_pagination">
                <el-button icon="el-icon-refresh-left">卖出历史</el-button>
                <el-button class="el-button--danger">确认卖出</el-button>

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
                    height="600px"
                    size="medium"
                    ref="multipleTable"
                    :data="tableData"
                    tooltip-effect="dark"

                    @selection-change="handleSelectionChange">
                <el-table-column
                        type="selection"
                        width="200">
                </el-table-column>
                <el-table-column
                        label="序号"
                        width="200">
                    <template slot-scope="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="金额"
                        width="200">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="产品"
                        show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="预期收益"
                        show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="请求状态"
                        show-overflow-tooltip>
                    <template slot-scope="scope">
                        <span class="span_red ">{{scope.row.address}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="提交日期"
                        show-overflow-tooltip>
                    <template slot-scope="scope">
                        <span class="span_blue ">{{scope.row.address}}</span>
                    </template>
                </el-table-column>
            </el-table>
            <footer>
                <p>
                    <span>帮助</span>
                    <span>隐私</span>
                    <span>条数</span>
                </p>
                <p>
                    <span>copyright</span>
                    <span>@</span>
                    <span>2020Kingdom代客理财系统</span>
                </p>
            </footer>
        </div>

    </div>
</template>

<script>
    export default {
        name: "buy",
        data() {
            return {
                msg: 'HelloWorld!',
                selected_filters: [0, 2, 1],
                currentPage1: 1,
                dialogVisible:false,
                tableData: [],
                test_tableList: [
                    {}
                ],
                multipleSelection: []
            }
        },
        methods: {
            changeActive(index, indexx) {
                console.log(index, indexx)
                this.selected_filters[index] = indexx
                console.log(this.selected_filters)
                this.$forceUpdate()
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            handleSizeChange() {

            },
            handleCurrentChange() {

            },
            confirm_buy(){
                this.dialogVisible=false;
            }
        }
    }
</script>

<style scoped>
    .breadcrumb {
        position: relative;
        left: 0;
        color: #C2C2C2;
        font-weight: 700;
        margin: 20px;
        display: inline-block;
    }

    header {
        width: 100%;
        background: #5677FC;
        color: #fff;
        text-align: center;
        height: 100px;
        font-size: 30px;
        line-height: 100px;
    }

    .el-breadcrumb {
        padding: 50px;
    }

    .card {
        background: #fff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        width: 100%;
        box-sizing: border-box;
        padding-bottom: 50px;
        height: 600px;

    }

    .filter_box {
        box-sizing: border-box;
        width: 100%;
        padding: 10px 30px;
        display: flex;
        flex-direction: column;
        border: 1px solid #CFD0D0;
    }

    .filter_box > div {
        margin: 10px 0;
    }

    .filter_item_title {
        font-size: 10px;
        font-weight: 600;
    }

    .item {
        display: inline-block;
        cursor: pointer;
        width: 100px;
        padding: 10px 5px;
        margin: 0 50px;
        text-align: center;
        font-size: 10px;
        font-weight: 600;
    }

    .item:hover, .active {
        background: #FFC069;
        color: #fff;
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

    .span_red {
        color: #FF4747;
        font-weight: 700;
    }

    .span_blue {
        color: #5FB7FF;
        font-weight: 700;
    }

    footer {
        width: 100%;
        height: 100px;
        background: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #B1B1B2
    }

    footer > p {

        width: 300px;
        display: flex;
        justify-content: space-around;
        margin-bottom: 10px;

    }
</style>