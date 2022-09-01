<template>
    <div class="content-wrapper">
        <div class="content-body">
            <!-- Basic form layout section start -->
            <section id="configuration">
                <div class="row">
                    <div class="col-12">
                        <div class="card rounded pad-20">
                            <div class="card-content collapse show">
                                <div class="card-body card-dashboard">
                                    <div class="row">
                                        <div class="col-12">
                                            <h1>settings</h1>
                                            <h2 class="blue ml-md-2">Tax</h2>
                                        </div>
                                    </div>
                                    <ValidationObserver v-slot="{ handleSubmit }">
                                        <form ref="SettingFormTax" @submit.prevent="handleSubmit(saveSetting)">
                                            <div class="row mt-3 ml-md-4">
                                                <div class="col-12 ">
                                                    <label for="">Status</label>
                                                    <label class="event-check">Enable Tax Rates <input type="checkbox" name="enable_tax" v-model="enable_tax" :value="setting.tax_status">
                                                        <span class="checkmark"></span></label>
                                                    </div>
                                                    <div class="col-12 col-md-6 col-xl-6 col-lg-6 ">
                                                    <ValidationProvider name="tax" rules="required"
                                                       v-slot="{ errors }">

                                                       <label for="" class="last-lb">tax %</label>
                                                       <input type="text" class="form-control" name="tax" v-model="setting.tax">
                                                       <span class="text-danger">{{ errors[0] }}</span>
                                                   </ValidationProvider>
                                               </div>
                                               <div class="col-12 col-md-6 col-xl-12 col-lg-12">
                                                <button class="orange-btn" type="submit">Save</button>
                                            </div>
                                        </div>
                                    </form>
                                </ValidationObserver>
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
    export default {
        data() {
            return {
                tax:'',
                enable_tax: '',
                from: 'tax',
                setting: {}
            };
        },
        async created() {
            await this.getSetting();
        },
        methods: {
            async getSetting() {
                this.setting = (await axios.get(`/api/auth/setting`)).data;
                console.log(this.product);
            },
            async saveSetting()
            {
                 let data = new FormData(this.$refs.SettingFormTax);
                    data = data.append('from',this.from);
                let result = await axios.post(`api/setting/create`, data);
                 if (result.data.data) {
                this.$snotify.success(response.data.message)
                let self = this;
                setTimeout(function () {
                    self.$router.push({name: 'admin.session.index'});
                }, 1000);
            } else {
                this.$snotify.error(response.data.message)

            }

            }
        }
    }
</script>
