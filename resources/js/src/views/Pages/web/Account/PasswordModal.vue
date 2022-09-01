<template>
    <div class="login-fail-main">
        <div class="featured inner">
            <div class="modal fade another-modal change-password-modal" tabindex="-1" role="dialog"
                 aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lgg">
                    <div class="modal-content">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                            aria-hidden="true">&times;</span></button>
                        <div class="payment-modal-main">
                            <div class="payment-modal-inner"><img src="images/payme.png" class="img-fluid" alt="">
                                <h1>Change Password</h1>
                                <ValidationObserver ref="observer" v-slot="{handleSubmit}">
                                    <form @submit.prevent="handleSubmit(update)">
                                        <div class="row">

                                            <div class="col-12 form-group">
                                                <label for="">Current Password</label>
                                                <ValidationProvider tag="div" name="current password "
                                                                    rules="required"
                                                                    v-slot="{errors}"
                                                                    class="col-12 form-group">

                                                    <input type="password" name="current_password"
                                                           v-model="current_password"
                                                           placeholder="Enter Current Password"
                                                           class="form-control">
                                                    <button class="view" type="button"><i class="fa fa-eye"></i>
                                                    </button>
                                                    <span class="text-danger">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>
                                            <div class="col-12 form-group">
                                                <label for="">New Password</label>
                                                <ValidationProvider tag="div" name="new password" rules="required"
                                                                    v-slot="{errors}"
                                                                    class="col-12 form-group">
                                                    <input type="password" name="password" v-model="password"
                                                           placeholder="Enter New Password"
                                                           class="form-control">
                                                    <button class="view" type="button"><i class="fa fa-eye"></i>
                                                    </button>
                                                    <span class="text-danger">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>
                                            <div class="col-12 form-group">
                                                <label for="">Retype Password</label>
                                                <ValidationProvider tag="div" name="retype password"
                                                                    rules="required"
                                                                    v-slot="{errors}"
                                                                    class="col-12 form-group">
                                                    <input type="password" name="retype_password"
                                                           v-model="retype_password" placeholder="Retype Password"
                                                           class="form-control">
                                                    <button class="view" type="button"><i class="fa fa-eye"></i>
                                                    </button>
                                                    <span class="text-danger">{{ errors[0] }}</span>
                                                </ValidationProvider>
                                            </div>
                                        </div>


                                        <div class="row">
                                            <div class="col-12 text-center">
                                                <button type="submit" class="orange-btn">update</button>
                                            </div>
                                        </div>
                                    </form>
                                </ValidationObserver>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            current_password: '',
            password: '',
            retype_password: '',
        };
    },
    methods: {
        async update() {
            try {
                // statements
                let fd = new FormData();
                this.buildFormData(fd, this.form);
                let {data} = await axios.post('api/auth/changePassword', fd);
                if (data.data) {
                    this.$snotify.success(data.message);
                     $('.change-password-modal').modal('hide')
                }else{
                     this.$snotify.error(data.message);
                }
            } catch (e) {
                // statements
                if (e.response) {
                    this.$refs.observer.setErrors(e.response.data.errors);
                }
                console.log(e);
            }
        }
    }
}
</script>
