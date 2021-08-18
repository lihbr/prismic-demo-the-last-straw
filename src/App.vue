<template>
	<app-header />
	<router-view />
	<app-footer />
</template>

<script setup>
import AppHeader from "./components/Header.vue"
import AppFooter from "./components/Footer.vue"
</script>
