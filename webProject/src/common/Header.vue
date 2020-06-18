<template>
	<div class="head">
		<span >XXXXXX</span>

		<el-menu :default-active="activeIndex" 
			class="el-menu-demo" 
			mode="horizontal"
			@select="handleSelect" 
			active-text-color='#58A061'
			router='true'>
		 	<el-menu-item index="/firstPage">首页</el-menu-item>
		 	<el-menu-item index="/project">产品</el-menu-item>
		 	<el-menu-item index="/myPage">我的</el-menu-item>
		</el-menu>

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

<style>
	.head{
		color:rgb(88,160,97);
		background-color: white;
		font-size: 20px;
		display: flex;
		justify-content:space-between;
		align-items:center;
	}
	span{
		margin-left: 50px;
	}
	.avatar{
		margin-right: 50px;
	}
</style>
