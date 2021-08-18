<template>
	<header>
		<div class="container">
			<router-link to="/">
				<h2>
					The Last Straw
				</h2>
			</router-link>
			<img src="../assets/horseHello.png" alt="">
		</div>
	</header>
</template>

<style scoped>
header {
	border-bottom: 4px solid;
	background: #ffffff;
}

.container {
	height: 120px;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

img {
	height: 100%;
}
</style>
