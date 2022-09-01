<template>
	<div class="content-wrapper">
		<div class="content-body">
			<!-- Basic form layout section start -->
			<section id="configuration">
				<div class="row">
					<div class="col-12">
						<div class="card">
							<div class="card-content collapse show">
								<div class="card-dashboard pb-1">
									<div class="row px-2">
										<div class="col-12">
											<h3 class="mb-2 d-blue-text bold">Subscription</h3>
										</div>
									</div>
								</div>      
								<div class="clearfix"></div>
								<div class="clearfix"></div>
								<div class="card-dashboard pt-0">
									<subscription-table></subscription-table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>
<script>
	const SubscriptionTable = () => import('./components/SubscriptionTable.vue');


	import {mapActions, mapState} from 'vuex';

	export default {
		computed: {
			...mapState('admin', ['users', 'search', 'entries']),
		},
		components: {
			SubscriptionTable
		},
		created() {
			let {page} = this.$route.query;
			this.fetch(page);
		},
		watch: {
			search: function (val, oldVal) {
				this.fetch();
			},
			entries: function (val, oldVal) {
				this.fetch();
			},
		},
		methods: {
			...mapActions('admin', ['getAll']),
			async fetch(page = 1) {
				let {type, status} = this.$route.params;
				let params = {
					route: 'api/subscription',
					mutation: 'SET_SUBSCRIPTIONS',
					variable: 'data',
					data: {
						page,
						type,
						status,
						search: this.search,
						entries: this.entries,
					}
				};
				let {data} = await this.getAll(params);

				if (page != 1) {
					this.addRouteQuery({page});
				} else {

					this.addRouteQuery({});

				}
			}
		}

	}

</script>
