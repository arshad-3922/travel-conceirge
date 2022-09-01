<template>
    <!-- Modal -->
    <div  class="modal fade" id="changepassword" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content rounded-0 blank-modal modal-back site-modal">
                <div class="modal-header">
                    <button type="button" class="close modal-close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="change-password-modal-main-wrapper">
                        <div class="change-password-head text-center">
                            <h3 class="black-text text-center mt-4">Change Password</h3>
                        </div>
                        <div class="change-password-body">
                            <ValidationObserver tag="div" v-slot="{handleSubmit}">
                                <form ref="changePassword" @submit.prevent="handleSubmit(onSubmit,$event)">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <label for="">Current Password</label>
                                            <ValidationProvider tag="div" name="Current Password" rules="required" v-slot="{errors}">
                                                <input name="current_password" v-model="current_password" type="password" class="site-input rounded w-100 login right-icon enter-input" placeholder="Enter Current Password">
                                                <div class="text-danger">{{errors[0]}}</div>
                                            </ValidationProvider>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <ValidationProvider tag="div" name="New Password" rules="required|confirmed:confirmation" v-slot="{errors}">
                                                <label for="">New Password</label>
                                                <input v-model="new_password" name="password" type="password" class="site-input rounded w-100 login right-icon enter-input" placeholder="Enter New Password">
                                                <div class="text-danger">{{errors[0]}}</div>
                                            </ValidationProvider>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <ValidationProvider tag="div" name="confirmation" rules="required" vid="confirmation" v-slot="{errors}">
                                                <label for="">Re-Type Password</label>
                                                <input name="password_confirmation" v-model="confirmation" type="password" class="site-input rounded w-100 login right-icon enter-input" placeholder="Enter Re-Type Password">
                                                <div class="text-danger">{{errors[0]}}</div>
                                            </ValidationProvider>
                                        </div>
                                    </div>
                                    <div class="text-center">
                                        <button type="submit" class="site-btn py-2">Save</button>
                                    </div>
                                </form>
                            </ValidationObserver>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
	import $ from 'jquery'
export default {
	data () {
	  return {
	    confirmation:'',
	    new_password : '',
	    current_password : '',
	  };
	},
    methods: {
        async onSubmit(e) {
        	let fd = new FormData(this.$refs.changePassword);
            let response = await axios.post('api/auth/changePassword', fd);
            if (response.data.data) {
                var self = this;
                this.$snotify.success(response.data.message);
                window.$('#changepassword').modal('hide');
                // this.$refs.changePassword.reset();
                this.forceRerender();

            } else {
                this.$snotify.error(response.data.message, 'Oops!');
            }
        },
        forceRerender() {
	      this.$parent.componentKey += 1;
	    }
    }
}

</script>
