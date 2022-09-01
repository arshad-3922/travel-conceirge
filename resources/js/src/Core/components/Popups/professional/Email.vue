<template>
    <ValidationObserver ref="verifyObserver" class="modal-content" tag="div" v-slot="{handleSubmit}">
        <div class="modal-content">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <div class="forget-pass">
                <div class="modal-body">
                    <h1>Password Recovery</h1>
                    <form ref="verify" @submit.prevent="handleSubmit(submit)">
                        <div class="row">
                            <div class="col-12 form-group">
                                <ValidationProvider tag="div" vid="email" name="Email" rules="required"
                                                    v-slot="{errors}" class="col-12 form-group">
                                    <input v-model="email" type="email" class="form-control" placeholder="Email">
                                    <i class="fa fa-envelope"></i>
                                    <div class="text-danger">{{ errors[0] }}</div>
                                </ValidationProvider>
                            </div>
                        </div>
                        <div class="col-12">
                            <button type="submit" class="form-control yel-btn" id="pwd1-btn">Continue</button>
                        </div>
                        <a href="javascript:void(0)" data-dismiss="modal" ><i
                            class="fa fa-arrow-circle-left"></i>back to
                            login</a>
                    </form>
                </div>
            </div>
        </div>
    </ValidationObserver>
</template>
<script>
export default {
    data() {
        return {
            email: '',
        };
    },
    methods: {
        openLoginPopup() {
            $('.auth-popup').modal('show');
            bus.$emit('show-login', 'Login');
        },
        changeVerificationType() {
        },
        async submit(e) {
            let fd = new FormData();
            fd.append('email', this.email)
            try {
                let response = await axios.post('api/auth/send/email', fd);
                if (response.data.status) {
                    this.$snotify.success(response.data.message);
                    this.$emit('change-forget-preview', {component: 'Code', email: this.email});
                } else {
                    this.$snotify.error(response.data.message);
                }
            } catch (e) {
                // statements
                if (e.response) {
                    this.$refs.verifyObserver.setErrors(e.response.data.errors);
                }
                console.log(e);
            }
        }
    }
}

</script>
