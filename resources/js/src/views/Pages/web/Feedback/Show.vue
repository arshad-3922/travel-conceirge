<template>
    <div class="content-wrapper">
        <div class="content-body">
            <!-- Basic form layout section start -->
            <section id="configuration" class="search view-cause">
                <div class="row">
                    <div class="col-12">
                        <div class="card pad-20">
                            <div class="card-content collapse show">
                                <div class="card-body table-responsive card-dashboard">
                                    <router-link :to="{name : 'admin.feedback.index'}">
                                        <h2>
                                            < FEEDBACK DETAILS</h2> </router-link> <section class="task-log-completed-box">
                                                <div class="">
                                                    <div class="row">
                                                        <div class="col-md-12 ">
                                                            <h5>Feedback id: {{feedback.id}}</h5>
                                                        </div>
                                                        <div class="col-md-2 mt-2">
                                                            <h6>Full Name:</h6>
                                                        </div>
                                                        <div class="col-md-10 mt-2">
                                                            <span class="gray-color">{{feedback.name}}</span>
                                                        </div>
                                                        <div class="col-md-2 mt-2">
                                                            <h6>Email:</h6>
                                                        </div>
                                                        <div class="col-md-10 mt-2">
                                                            <span class="gray-color">{{feedback.email}}</span>
                                                        </div>
                                                        <div class="col-md-2 mt-2">
                                                            <h6>Date:</h6>
                                                        </div>
                                                        <div class="col-md-10 mt-2">
                                                            <span class="gray-color">{{formatDate(feedback.created_at)}}</span>
                                                        </div>
                                                        <div class="col-md-2 mt-2">
                                                            <h6>Subject:</h6>
                                                        </div>
                                                        <div class="col-md-10 mt-2">
                                                            <span class="gray-color">ABC</span>
                                                        </div>
                                                        <div class="col-md-12 mt-2">
                                                            <h6>Message:</h6>
                                                            <span class="gray-color">{{feedback.message}}</span>
                                                        </div>
                                                    </div>
                                                </div>
            </section>
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
import { mapActions, mapState } from 'vuex';

export default {
	computed: {
		...mapState('admin', ['feedback']),
	},
	created() {
		this.fetch();
	},
	methods: {
		...mapActions('admin', ['getAll']),
		async fetch(page = 1) {
			let { feedback } = this.$route.params;
			let params = {
				route: route('admin.feedback.show', { feedback }),
				mutation: 'SET_FEEDBACK',
				variable: 'feedback',
				data: {}
			};
			let { data } = await this.getAll(params);

		}
	}
}

</script>