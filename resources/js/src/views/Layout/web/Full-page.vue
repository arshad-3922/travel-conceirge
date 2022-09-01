z`<template>
	<div class="wrapper">
		<top-header></top-header>
		<router-view></router-view>
		<vue-snotify></vue-snotify>
		<site-footer></site-footer>
	</div>
</template>

<script>
	const TopHeader = () => import('@views/Pages/web/Components/header/TopHeader.vue');
	const SiteFooter = () => import('@views/Pages/web/Components/footer/site-footer.vue');
export default {
	components: {
		TopHeader,
		SiteFooter
	},
}

</script>
