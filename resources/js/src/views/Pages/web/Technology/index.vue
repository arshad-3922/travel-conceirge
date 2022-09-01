<template>
<div>
<section class="inner-banner">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 position-rlative">
                <img :src="base_url+`/assets/web/images/inner-banner.png`" alt="" class="img-fluid w-100">
                <h1 class="inner-banner-heading">Technology</h1>
            </div>
        </div>
    </div>
</section>
<section class="hifu position-relative hifu-2">
    <img :src="base_url+`/assets/web/images/hifu-right.png`" alt="" class="hifu-right">
    <img :src="base_url+`/assets/web/images/hifu-left.png`" alt="" class="hifu-left">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 text-center mt-lg-5 mt-3">
                <router-link :to="{name:'web.technology.cavitation'}" class="heading55">
                    <img :src="base_url+`/assets/web/images/tc-1.png`" alt="" class="surgeon-img ml-0">
                    <div class="treatment-div">
                        <h2>Cavitation</br>Technology </h2>
                    </div>
                </router-link>
            </div>
            <div class="col-lg-4 text-center mt-lg-5 mt-3">
                <router-link :to="{name:'web.technology.fatfreeze'}" class="heading55">
                    <img :src="base_url+`/assets/web/images/tc-2.png`" alt="" class="surgeon-img ml-0">
                    <div class="treatment-div">
                        <h2>Cryo Fat Freeze</br>Technology </h2>
                    </div>
                </router-link>

            </div>
            <div class="col-lg-4 text-center mt-lg-5 mt-3">
                <router-link :to="{name:'web.technology.hifu'}" class="heading55">
                    <img :src="base_url+`/assets/web/images/tc-3.png`" alt="" class="surgeon-img ml-0">
                    <div class="treatment-div">
                        <h2>HiFu</br>Technology </h2>
                    </div>
                </router-link>
            </div>
            <div class="col-lg-4 text-center mt-lg-5 mt-3">
                <router-link :to="{name:'web.technology.radiofrequency'}" class="heading55">
                    <img :src="base_url+`/assets/web/images/tc-4.png`" alt="" class="surgeon-img ml-0">
                    <div class="treatment-div">
                        <h2>Radio Frequency</br>Technology </h2>
                    </div>
                </router-link>
            </div>
            <div class="col-lg-4 text-center mt-lg-5 mt-3">
                <router-link :to="{name:'web.technology.shockwave'}" class="heading55">
                    <img :src="base_url+`/assets/web/images/tc-5.png`" alt="" class="surgeon-img ml-0">
                    <div class="treatment-div">
                        <h2>Shockwave</br>Technology </h2>
                    </div>
                </router-link>
            </div>

              <div class="col-lg-4 text-center mt-lg-5 mt-3">
                <router-link :to="{name:'web.technology.prp'}" class="heading55">
                    <img :src="base_url+`/assets/web/images/trement-hairlose.png`" alt="" class="surgeon-img ml-0">
                    <div class="treatment-div">
                        <h2>PRP</br>Technology </h2>
                    </div>
                </router-link>
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