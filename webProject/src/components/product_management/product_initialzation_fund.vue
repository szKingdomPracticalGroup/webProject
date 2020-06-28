<template>
    <div class="product_initialzation_fund">
        <el-dialog
                :modal="false"
                title="基金产品确定"
                :visible.sync="dialogVisible"
                width="500px"
                :before-close="handleClose">
            <span>请确定您所选择的基金产品</span>
            <p>确定后将按您所选产品进行组合，并进入股票产品选择界面</p>
            <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="confirm_fund_initial">确 定</el-button>
  </span>
        </el-dialog>
        <header>基金产品选择</header>
        <div class="card">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">产品管理</el-breadcrumb-item>
                <el-breadcrumb-item>产品初始化</el-breadcrumb-item>
                <el-breadcrumb-item>基金产品选择</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="filter_box">
                <div v-for="(filter_item,index) in filter_items">
                    <span class="filter_item_title">{{filter_item.title}}:</span>
                    <span v-for="(item,indexx) in filter_item.itemList"
                          :class="{'item':true,'active':selected_filters[index]===indexx}"
                          @click="changeActive(index,indexx)"
                    >
                        {{item}}
                    </span>
                </div>
            </div>
            <div class="table_pagination">
                    <span>基金备选库</span>
                    <el-button class="el-button--danger" @click="dialogVisible = true">确认选择</el-button>

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
                    height="1000px"
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
                        label="基金名称"
                        width="200">
                    <template slot-scope="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="基金代码"
                        width="200">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="风险等级"
                        show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="最新净值"
                        show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="日涨跌幅"
                        show-overflow-tooltip>
                    <template slot-scope="scope">
                        <span class="span_red ">{{scope.row.address}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="买入费率"
                        show-overflow-tooltip>
                    <template slot-scope="scope">
                        <span class="span_blue ">{{scope.row.address}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        align="right"
                        prop="address"
                label="买入比例">

                    <template slot-scope="scope">

                        <el-input v-model="scope.row.address"></el-input>
                    </template>
                </el-table-column>
            </el-table>

        </div>

    </div>
</template>

<script>
    import  axios from 'axios'
    export default {
        name: "product_initialzation_fund",
        data() {
            return {
                msg: 'HelloWorld!',
                selected_filters:[0,2,1],
                dialogVisible:false,
                currentPage1:1,
                tableData: [{
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-08',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-06',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-07',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }],
                filter_items:[{
                    title:'基金类型',
                    itemList:['股票型','债券型','货币型']
                },{
                    title:'风险等级',
                    itemList:['低','中低','中']
                },{
                    title:'基金公司',
                    itemList:['低','中低','中']
                }],
                test_tableList:[
                    {

                    }
                ],
                multipleSelection: []
            }
        },
        methods:{
            changeActive(index,indexx){
                console.log(index,indexx)
                this.selected_filters[index]=indexx
                console.log(this.selected_filters)
                this.$forceUpdate()
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            handleSizeChange(){

            },
            handleCurrentChange(){

            },
            confirm_fund_initial(){
                console.log('...')
                this.dialogVisible=false;
                this.$message({
                    type:'success',
                    message:'购买成功'
                })
                // axios.post().then(data=>{
                //
                // }).catch(err=>{
                //
                // })
            }
        }
    }
</script>

<style scoped>
    header {
        width: 100%;
        background: #5677FC;
        color: #fff;
        text-align: center;
        height: 100px;
        font-size: 30px;
        line-height: 100px;
    }
    .el-breadcrumb{
        padding: 50px;
    }
    .card {
        background: #fff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        width: 100%;
        box-sizing: border-box;
        padding-bottom: 50px;
    }
    .filter_box{
        box-sizing: border-box;
        width: 100%;
        padding:10px 30px ;
        display: flex;
        flex-direction: column;
        border:1px solid #CFD0D0;
    }
    .filter_box>div{
        margin: 10px 0;
    }
    .filter_item_title{
        font-size: 10px;
        font-weight:600;
    }
    .item{
        display: inline-block;
        cursor: pointer;
        width: 100px;
        padding: 10px 5px;
        margin:0 50px;
        text-align: center;
        font-size: 10px;
        font-weight:600;
    }
    .item:hover,.active{
        background: #FFC069;
        color: #fff;
    }
    .table_pagination{
        height: 70px;
        box-sizing: border-box;
        padding:10px 20px;
        font-size: 20px;
        font-weight: 600;
        display: flex;
        flex-wrap: nowrap;
        justify-content: flex-end;
        align-items: center;
        box-shadow: -1px 2px 3px 2px #CACBCC;
        margin-bottom: 20px;
    }
    .table_pagination>span:first-child{
        margin-right:auto
    }
    .table_pagination>>>.el-button{
        margin-right: 30px;
        background: #E64340;
    }
    .span_red{
        color:#FF4747;
        font-weight: 700;
    }
    .span_blue{
        color:#5FB7FF;
        font-weight: 700;
    }
</style>