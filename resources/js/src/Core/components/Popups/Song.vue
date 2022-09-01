<template>
<div id="popups" class="modal fade song poppins" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content site-modal">
            <i class="fas fa-times close modal-close" data-dismiss="modal" aria-label="Close"></i>
            <div class="text-center">
                <h2 class="modal-heading poppins mb-0" >Song</h2>
                   <audio controls>
                    <source :src="songFile" type="audio/mpeg">
                    </audio>
                <div class="modal-btn-div mt-3">
                    <button class="site-btn orange-border py-1 px-4" data-dismiss="modal" aria-label="Close" @click="$emit('closed',false)">Close</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>

export default {
    components:{
       
    },
    beforeCreate(){
    $('.modal-backdrop').remove()
    },
    props: {
        el: {
            type: String,
            default: 'successPopup',
        },
        songFile: {
            type: String, // String, Number, Boolean, Function, Object, Array
            required: false,
            default: ""
        },

    }
}

</script>
