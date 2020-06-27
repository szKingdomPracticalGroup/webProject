<template>
	<div class="head">
		<div class="logo">
			<p>投顾人管理端</p>
		</div>
		<!-- <el-menu default-active="0"
			class="el-menu-demo"
			mode="horizontal"
			active-text-color='#58A061'
			:router='true'>
		 	<el-menu-item index="/firstPage">首页</el-menu-item>
		 	<el-menu-item index="/project">产品</el-menu-item>
		 	<el-menu-item index="/myPage">我的</el-menu-item>
		</el-menu> -->

		<div class="avatar">
			<el-avatar :size="35" :src="circleUrl"></el-avatar>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
			}
		}
	}
</script>

<style scoped>
	.head{
		color:white;
		background-color:white;
		font-size: 20px;
		display: flex;
		justify-content:space-between;
		align-items:center;
		height: 60px;
		    height: 100%;
    box-sizing: border-box;
   		border-bottom: 1px solid #dcdfe6;
	}
	span{
		margin-left: 50px;
	}
	.logo{
		width: 200px;
		background: rgb(9,33,62);
		height:100%;
		display:flex;
		justify-content:center;
		align-items:center;
	}
	.avatar{
		margin-right: 50px;
	}

</style>
