<template>
    <div class="approval">
        <el-dialog
                title="审批确认"
                :visible.sync="dialogVisible"
                width="500px"
                >
            <p>请确定您所确认审批通过的申请</p>
            <span>确认后审批中的申请将分别进入买入和卖出阶段</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="confirmApproval">确 定</el-button>
            </span>
        </el-dialog>
        <header>审批流程</header>
        <div class="bread">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">交易盒子</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">审批</a></el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <!-- <el-divider></el-divider> -->
        <div class="table_pagination">
                <el-button type="primary"><i class="approval_history"></i> 审批历史</el-button>
                <el-button class="el-button--danger" @click="dialogVisible = true">确认审批</el-button>

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
                    :data="buyApprovalData"
                    tooltip-effect="dark"
                    @selection-change="handleSelectionChange">
                <el-table-column
                        type="selection"
                        width="50">
                </el-table-column>
                <el-table-column
                        label="序号"
                        width="200">
                    <template slot-scope="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column
                        prop="moneyValue"
                        label="金额"
                        width="200">
                </el-table-column>
                <el-table-column
                        prop="productName"
                        label="产品"
                        show-overflow-tooltip
                        :filters="buyProductSelect"
                        :filter-method="filterHandler">
                </el-table-column>
                <el-table-column
                        prop="expectReturn"
                        label="预期收益"
                        show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                        prop="requestState"
                        label="请求状态"
                        show-overflow-tooltip>
                    <template slot-scope="scope">
                        <span class="span_red ">{{scope.row.requestState}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="date"
                        label="提交日期"
                        show-overflow-tooltip>
                    <template slot-scope="scope">
                        <span>{{scope.row.date}}</span>
                    </template>
                </el-table-column>
        </el-table>

        <div class="table_pagination">
            <el-button type="primary"><i class="approval_history"></i> 审批历史</el-button>
            <el-button class="el-button--danger" @click="confirmApproval">确认审批</el-button>

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
                    :data="sellApprovalData"
                    tooltip-effect="dark"
                    @selection-change="handleSelectionChange">
                <el-table-column
                        type="selection"
                        width="50">
                </el-table-column>
                <el-table-column
                        label="序号"
                        width="200">
                    <template slot-scope="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="金额占比"
                        width="200">
                </el-table-column>
                <el-table-column
                        prop="productName"
                        label="产品"
                        show-overflow-tooltip
                        :filters="buyProductSelect"
                        :filter-method="filterHandler">
                </el-table-column>
                <el-table-column
                        prop="expectReturn"
                        label="预期收益"
                        show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                        prop="requestState"
                        label="请求状态"
                        show-overflow-tooltip>
                    <template slot-scope="scope">
                        <span class="span_blue ">{{scope.row.requestState}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="date"
                        label="提交日期"
                        show-overflow-tooltip>
                    <template slot-scope="scope">
                        <span >{{scope.row.date}}</span>
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
</template>

<script>
    import  axios from 'axios'
    import moment from 'moment'
    import Vue from 'vue'
    export default {
        name: "product_initialzation_fund",
        data() {
            return {
                dialogVisible:false,
                currentPage1: 1,
                multipleSelection: [],
                buyProductSelect:[{text: '产品一', value: '产品一'},{text: '产品二', value: '产品二'},],
                buyApprovalData: [{
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    moneyValue: 5000,
                    productName: '产品一',
                    expectReturn: 200,
                    requestState: '买入',

                },
                ],

                sellApprovalData: [
                    
                ],

                filter_items: [{
                    title: '基金类型',
                    itemList: ['股票型', '债券型', '货币型']
                }, {
                    title: '风险等级',
                    itemList: ['低', '中低', '中']
                }, {
                    title: '基金公司',
                    itemList: ['低', '中低', '中']
                }],
            }
        },
        created() {
            axios.get('/consultant/loadApprovalList').then(data=>{
                console.log(data.data.data)
                if(data.status===200){
                    data.data.data.buyApproval.forEach(element => {
                        element.date = moment(parseInt(element.transactiondate*1000)).format('YYYY-MM-DD')
                        element.moneyValue = element.sum
                        element.requestState = '买入'
                        
                        if(element.date!='Invalid date'){
                            this.buyApprovalData.push(element)
                        }
                    })

                    data.data.data.sellApproval.forEach(element => {
                        element.date = moment(parseInt(element.transactiondate*1000)).format('YYYY-MM-DD')
                        element.moneyValue = element.sum
                        element.requestState = '卖出'
                        if(element.date!='Invalid date'){
                            this.sellApprovalData.push(element)
                        }
                    })
                }else{
                    this.showMessage('获取失败','error')
                }
            }).catch(err=>{
                console.log('err')
                this.showMessage(`错误代码为${err}`,'error')
            })
        },
        methods:{
            changeActive(index, indexx) {
                console.log(index, indexx)
                this.selected_filters[index] = indexx
                console.log(this.selected_filters)
                this.$forceUpdate()
            },
            handleSelectionChange(val) {//复选框改变时，将内容添加到data的multipleSelection中
                this.multipleSelection = val;
                if(this.multipleSelection.length!=0){
                    console.log(this.multipleSelection)
                }
            },
            filterHandler(value, row, column) {
                const property = column['property'];
                return row[property] === value;
            },
            handleSizeChange() {

            },
            handleCurrentChange(val) {//改变当前页
                console.log(`当前页: ${val}`);
            },
            confirmApproval(){
                axios.post('/consultant/acceptApproval',{}).then(res=>{

                }).catch(err=>{
                    console.log('err')
                    this.showMessage(`错误代码为${err}`,'error')
                })
            }
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

    .approval_history{
        display: inline-block;
        width: 14px;
        height: 14px;
        background: url("../../assets/approvalHistory.png") no-repeat;
        background-size: 100%;
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