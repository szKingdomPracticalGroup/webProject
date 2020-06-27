<template>
    <div>
        <el-menu
                default-active="1-4-1"
                class="el-menu-vertical-demo"
                active-text-color="#ffd04b"
                background-color=rgb(4,21,39)
                text-color="white"
                :router="true"
                @open="handleOpen"
                @close="handleClose"
        >
            <el-menu-item index="/first_page">
                <i class="el-icon-s-home"></i>
                <span slot="title">系统首页</span>
            </el-menu-item>
            <el-menu-item index="/platform_introduction">
                <i class="el-icon-share"></i>
                <span slot="title">平台简介</span>
            </el-menu-item>
            <el-menu-item index="/myPage">
                <i class="el-icon-user-solid"></i>
                <span slot="title">投顾人中心</span>
            </el-menu-item>
            <el-submenu index="4">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>产品管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/project">产品列表</el-menu-item>
                    <el-menu-item index="/project">产品管理</el-menu-item>
                </el-menu-item-group>

            </el-submenu>
            <el-submenu index="5">
                <template slot="title">
                    <i class="el-icon-s-goods"></i>
                    <span>交易盒子</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="5-1">审批</el-menu-item>
                    <el-menu-item index="/buy">买入</el-menu-item>
                    <el-menu-item index="5-3">卖出</el-menu-item>
                    <el-menu-item index="5-4">再平衡</el-menu-item>
                    <el-menu-item index="5-5">风险调仓</el-menu-item>
                    <el-menu-item index="5-6">交易明细</el-menu-item>
                </el-menu-item-group>
            </el-submenu>

        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isCollapse: true
            };
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    };
</script>

<style scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        height: 825px;
        width: 200px;
    }

    .title {
        text-align: center;
    }
</style>





