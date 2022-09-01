<template>
<div>

<section class="inner-banner">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 position-rlative">
                <img :src="base_url+`/assets/web/images/inner-banner.png`" alt="" class="img-fluid w-100">
                <h1 class="inner-banner-heading"><router-link :to="{name:'web.technology.index'}" class="d-inline-block"><i class="fas fa-arrow-left mr-2 back-arrow"></i></router-link>Technology</h1>
            </div>
        </div>
    </div>
</section>


<section class="techno-prp">
    <div class="container">
        <div class="row my-4">
            <div class="col-lg-12 text-center">
                <h2 class="pricing-heading">PRP</h2>
                <p>Platelet-rich plasma (PRP) therapy uses injections of a concentration of a patient's own platelets to
                    accelerate the healing of injured tendons, ligaments, muscles and joints. In this way, PRP
                    injections use each individual patient's own healing system to improve musculoskeletal problems.</p>
            </div>
        </div>
        <div class="row my-5">
            <div class="col-lg-12 text-center">
                <h2 class="pricing-heading">How is the Treatment done?</h2>
                <p>PRP injections are done in three steps: To carry out the therapy, your own blood is drawn, likely
                    from your arm. That blood is then placed into a centrifuge to spin down into three layers: plasma
                    rich in platelets, platelet-poor plasma, and red blood cells. The PRP will be used, and the rest
                    will be tossed.</p>
            </div>
        </div>

        <div class="row my-5">
            <div class="col-lg-4">
                <div class="card border-none">
                    <img :src="base_url+`/assets/web/images/z-9.png`" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="interesting-heading">RESULTS</h5>
                        <p class="card-text">We recommend that 3-4 treatments would give the best results</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card border-none">
                     <img :src="base_url+`/assets/web/images/z-10.png`" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="interesting-heading">TIME</h5>
                        <p class="card-text">The treatment is 1-2 hours long and the downtime is minimal so you can go about your daily schedule immediately.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card border-none">
                     <img :src="base_url+`/assets/web/images/z-6.png`" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="interesting-heading">ANAESTHETICS</h5>
                        <p class="card-text">We use a mild numbing cream on the area of treatment</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


</div>
</template>
<script>
export default {
    data(){
        return{
            base_url:base_url
        }
    }
}
</script>