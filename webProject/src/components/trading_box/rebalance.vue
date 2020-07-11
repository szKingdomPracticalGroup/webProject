<template>
    <div class="rebalance">

        <header>再平衡流程</header>

        <div class="line"></div>

        <div class="breadcrumb"><!-- 面包屑 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/first_page' }">系统首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/transaction_overview' }">交易概览</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/rebalance' }">再平衡</el-breadcrumb-item>
        </el-breadcrumb>
        </div>
        <div class="clean"></div>

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

            <div class="dbutcon">
                <el-button type="danger" @click="openFullScreen2">product one 再平衡</el-button>
            </div>

        </div>

        <div class="f4">

            <section class="chart-container1">
                <el-row>
                    <el-col :span="12">
                        <div id="chartPie3" style="width:200%; height:400px;"></div>
                    </el-col>
                </el-row>
            </section>

            <section class="chart-container2">
                <el-row>
                    <el-col :span="12">
                        <div id="chartPie4" style="width:200%; height:400px;"></div>
                    </el-col>
                </el-row>
            </section>

            <div class="clean"></div>

            <div class="dbutcon">
                <el-button type="danger" @click="openFullScreen2">product two 再平衡</el-button>
            </div>

        </div>


    </div>


</template>

<script>

    import echarts from 'echarts';
    import {Loading} from 'element-ui';

    export default {
        data() {
            return {
                chartPie1: null,
                chartPie2: null,
                fullscreenLoading: false,
                Com1_recommendation:{
                    title_fundre:0.25,
                    title_stockre:0.75,
                    legend_recommendation:['基金1', '基金2', '基金3', '基金5', '基金6', '基金7', '基金8', '股票2', '股票4', '股票5', '股票6', '股票9'],
                    series_recommendation:[
                                {value: 5, name: '基金1'},
                                {value: 3.75, name: '基金2'},
                                {value: 3, name: '基金3'},
                                {value: 3.5, name: '基金5'},
                                {value: 3, name: '基金6'},
                                {value: 3.75, name: '基金7'},
                                {value: 3, name: '基金8'},
                                {value: 24, name: '股票2'},
                                {value: 28.5, name: '股票4'},
                                {value: 9.75, name: '股票5'},
                                {value: 9.75, name: '股票6'},
                                {value: 3, name: '股票9'}
                            ],
                },

                Com1_actual:{
                    title_fundac:0.50,
                    title_stockac:0.50,

                    legend_actual:['基金1', '基金2', '基金3', '基金5', '基金6', '基金7', '基金8', '股票2', '股票4', '股票5', '股票6', '股票9'],
                    series_actual:[
                                {value: 9, name: '基金1'},
                                {value: 6.75, name: '基金2'},
                                {value: 5.4, name: '基金3'},
                                {value: 6.3, name: '基金5'},
                                {value: 5.4, name: '基金6'},
                                {value: 6.75, name: '基金7'},
                                {value: 5.4, name: '基金8'},
                                {value: 17.6, name: '股票2'},
                                {value: 20.9, name: '股票4'},
                                {value: 7.15, name: '股票5'},
                                {value: 7.15, name: '股票6'},
                                {value: 2.2, name: '股票9'}
                            ],
                }
            };
        },


        methods: {
            openFullScreen2() {
                const loading = this.$loading({
                    lock: true,
                    text: 'Loading',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                setTimeout(() => {
                    loading.close();
                }, 2000);
            },
            drawPieChart1() {
                this.chartPie1 = echarts.init(document.getElementById('chartPie1'));
                this.chartPie1.setOption({
                    title: {
                        text: 'Product One 组合推荐',
                        subtext: (this.Com1_recommendation.title_fundre)*100+'%基金比例+' + (this.Com1_recommendation.title_stockre)*100+'%股票比例',
                        x: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: this.Com1_recommendation.legend_recommendation
                    },

                    series: [
                        {
                            name: '所占比例',
                            type: 'pie',
                            radius: '50%',
                            center: ['50%', '60%'],
                            data: this.Com1_recommendation.series_recommendation,
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
                        text: '当前 Product One 实际配比',
                        subtext: (this.Com1_actual.title_fundac)*100+'%基金比例+' + (this.Com1_actual.title_stockac)*100+'%股票比例',
                        x: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: this.Com1_actual.legend_actual
                    },

                    series: [
                        {
                            name: '所占比例',
                            type: 'pie',
                            radius: '50%',
                            center: ['50%', '60%'],
                            data: this.Com1_actual.series_actual,
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

            drawPieChart3() {
                this.chartPie3 = echarts.init(document.getElementById('chartPie3'));
                this.chartPie3.setOption({
                    title: {
                        text: 'Product Two 组合推荐',
                        subtext: (this.Com1_recommendation.title_fundre)*100+'%基金比例+' + (this.Com1_recommendation.title_stockre)*100+'%股票比例',
                        x: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: this.Com1_recommendation.legend_recommendation
                    },

                    series: [
                        {
                            name: '所占比例',
                            type: 'pie',
                            radius: '50%',
                            center: ['50%', '60%'],
                            data: this.Com1_recommendation.series_recommendation,
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

            drawPieChart4() {
                this.chartPie4 = echarts.init(document.getElementById('chartPie4'));
                this.chartPie4.setOption({
                    title: {
                        text: '当前 Product Two 实际配比',
                        subtext: (this.Com1_actual.title_fundac)*100+'%基金比例+' + (this.Com1_actual.title_stockac)*100+'%股票比例',
                        x: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: this.Com1_actual.legend_actual
                    },

                    series: [
                        {
                            name: '所占比例',
                            type: 'pie',
                            radius: '50%',
                            center: ['50%', '60%'],
                            data: this.Com1_actual.series_actual,
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
            drawCharts3() {
                this.drawPieChart3()
            },
            drawCharts4() {
                this.drawPieChart4()
            },
        },


        mounted: function () {
            this.drawCharts1();
            this.drawCharts2();
            this.drawCharts3();
            this.drawCharts4();
                

        },

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


    .clean {
        clear: both;
    }

    .line {
        width: 100%;
        height: 1px;
        border: 1.5px solid #FEEDA6;
    }

    .breadcrumb{
        margin-top: 10px;
        margin-bottom: 15px;
    }


    .f3 {
        width: 100%;
        height: 440px;
        align-content: center;
        border: 1px solid blue;
        box-shadow: 0 0 3px 3px cornflowerblue;

    }

    .dbutcon {
        width: 100%;
        text-align: center;
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

.f4 {
        width: 100%;
        height: 440px;
        align-content: center;
        border: 1px solid blue;
        box-shadow: 0 0 3px 3px cornflowerblue;
        margin-top: 80px;

    }

</style>