<template>
<!--    <div class="login-fail-main user">-->
<!--        <div class="featured inner">-->
<!--            <div class="modal modal-1 fade bd-example-modal-lg" :id="el" tabindex="-1" role="dialog"-->
<!--                 aria-labelledby="exampleModalCenterTitle" aria-hidden="true">-->
<!--                <div class="modal-dialog modal-lgg conf">-->
<!--                    <div class="modal-content">-->
<!--                        <div class="modal-header">-->
<!--                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">-->
<!--                                <span aria-hidden="true">&times;</span>-->
<!--                            </button>-->
<!--                        </div>-->
<!--                        <form action="">-->
<!--                            <div class="payment-modal-main">-->
<!--                                <div class="payment-modal-inner">-->
<!--                                    <div class="row">-->
<!--                                        <div class="col-12">-->
<!--                                            <img class="m-0" src="admin/images/modal-icon.png">-->
<!--                                            <h2 v-html="title"></h2>-->
<!--                                            <div class="row">-->
<!--                                                <div class="col-12">-->
<!--                                                    <h3 v-html="subtitle"></h3>-->
<!--                                                </div>-->
<!--                                                <slot name="footer">-->
<!--                                                    <div class="col-12">-->
<!--                                                        <button type="button" class="can" @click="$emit('confirmed')"-->
<!--                                                                data-dismiss="modal" data-toggle="modal"-->
<!--                                                                data-target="#exampleModalCenter2">Yes-->
<!--                                                        </button>-->
<!--                                                        <button type="submit" class="con" @click="$emit('closed',false)"-->
<!--                                                                data-dismiss="modal">No-->
<!--                                                        </button>-->
<!--                                                    </div>-->
<!--                                                </slot>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </form>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->

<!--     <div class="login-fail-main">
        <div class="featured inner">
            <div class="modal fade  another-modal block-user-modal common-modal bd-example-modal-lg" :id="el" tabindex="-1" role="dialog"
                 aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lgg">
                    <div class="modal-content">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                            aria-hidden="true">&times;</span></button>
                        <div class="payment-modal-main">
                            <div class="payment-modal-inner">
                                <form action="">
                                    <div class="row">
                                        <div class="col-12 text-center">
                                            <img :src="`${base_url}/assets/admin/images/users.png`" class="img-fluid"
                                                 alt="">
                                            <h2 v-html="title"></h2>
                                            <p class="mb-2"><h3 v-html="subtitle"></h3></p>
                                            <button type="button" class="can" @click="$emit('confirmed')"
                                                    data-dismiss="modal" data-toggle="modal"
                                                    data-target="#exampleModalCenter2">Yes
                                            </button>
                                            <button type="submit" class="con" @click="$emit('closed',false)"
                                                    data-dismiss="modal">No
                                            </button>

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> -->

<div class="modal fade inactiveRecipe1 poppins" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content site-modal">
            <div class="text-center">
                <h2 class="modal-heading poppins mb-0" >{{title}}</h2>
                <p class="modal-text grey-text mt-1" >{{subtitle}}</p>
                <div class="modal-btn-div mt-3">
                    <button class="site-btn login-btn py-1 px-4" id="yesinactive"  @click="$emit('confirmed')">Yes</button>
                    <button class="site-btn orange-border py-1 px-4" data-dismiss="modal" aria-label="Close" @click="$emit('closed',false)">No</button>
                </div>
            </div>
        </div>
    </div>
</div>

    <!-- <div class="emplyee-add-modal-msg">
        <div class="modal fade" :id="el" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <i class="fas fa-question-circle fa-4x"></i>
                        <h4 v-html="title"></h4>
                        <span v-html="subtitle"></span><br>
                        <slot></slot>
                    </div>
                        <div class="modal-footer">
                    <slot name="footer">
                            <a href="javascript:void(0)" data-dismiss="modal" class="emplyee-add-btn">Close</a>
                    </slot>
                        </div>
                </div>
            </div>
        </div>
    </div> -->
</template>
<script>
export default {
    props: {
        el: {
            type: String,
            default: 'successPopup',
        },
        title: {
            type: String, // String, Number, Boolean, Function, Object, Array
            required: false,
            default: ""
        },
        subtitle: {
            type: String, // String, Number, Boolean, Function, Object, Array
            required: false,
            
        }
    }
}

</script>
