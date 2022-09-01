<template>
    <div class="modal fade activeUser" id="activeUser" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <button type="button" class="btn-close close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <div class="modal-body text-center p-4">
                <img :src="base_url+`/assets/admin/images/question-mark.png`" alt="" class="img-fluid mb-3">
                <p class="fw-600 modal-para">{{title}}</p>
                <div class="mt-3">
                    <button type="button" class="btn btn-purple" data-dismiss="modal" @click="$emit('confirmed')">Yes</button>
                    <button type="button" class="btn btn-transparent" data-dismiss="modal"  @click="$emit('closed',false)">No</button>
                </div>
            </div>

        </div>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            base_url:baseUrl
        }
    },
    beforeCreate(){
    $('.modal-backdrop').remove()
    },
    props: {
        el: {
            type: String,
            default: 'successPopup',
        },
        title: {
            type: String, // String, Number, Boolean, Function, Object, Array
            required: false,
            default: ""
        }

    }
}

</script>
