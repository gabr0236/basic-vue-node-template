<template>
	<div>
		<div class="p-4 bg-yellow-200 flex flex-row gap-8 font-bold pl-10">
			<RouterLink to="/">Page1</RouterLink>
			<RouterLink to="/page2">Page2</RouterLink>
		</div>
	</div>
	<div class="p-10">
		<RouterView />
	</div>
</template>

<script setup></script>

<style scoped></style>
