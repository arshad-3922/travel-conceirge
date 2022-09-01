<template>
<div>
<section>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 position-rlative">
                <img :src="base_url+`/assets/web/images/home-banner.png`" alt="" class="img-fluid w-100 home-banner-img">
                <div class="banner-text">
                    <h1>Go Under The Ice,<br/>Not The Knife
                    </h1>
                    <p>The Latest Technology For Natural Non-Invasive Face & Body Lifts,
                        Weight And Inch Loss, Pain And Rehab, Skin Improvements And Many
                        Other Health Conditions.</p>
                    <router-link :to="{name:'web.services.index'}" class="d-inline-block yellow-btn">Book an Appointment</router-link>
                    <span>or</span>
                    <router-link :to="{name:'web.requestform.index'}" class="d-inline-block black-btn"> Free Consultation</router-link>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="about-h position-relative">
    <img :src="base_url+`/assets/web/images/about-right.png`" alt="" class="about-right img-fluid">
    <img :src="base_url+`/assets/web/images/about-left.png`" alt="" class="about-left img-fluid">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <img :src="base_url+`/assets/web/images/img1.png`" alt="" class="img-fluid w-100 custom12">
            </div>
            <div class="col-lg-6 my-lg-auto mt-2">
                <h2 class="main-heading-l">
                    About Us
                </h2>
                <h2 class="main-heading">Apto Beauty & Aesthetics</h2>
                <h3 class="sub-heading mt-sm-0 mt-2">WE BELIEVE THAT BEAUTY AND AESTHETIC TREATMENTS SHOULD ENHANCE YOUR NATURAL BEAUTY, NOT MASK IT.</h3>
                <p class="mt-lg-4 mt-2">we are committed to helping you look and feel your best! our clinic is a relaxing environment where we put your comfort first, including in-depth consultations and post-treatment care. apto beauty and aesthetics combines advanced treatments and professional services of an aesthetics clinic.</p>
                <p class="mt-lg-4 mt-2">we provide excellent treatments using the best products in the industry, and continually update our training, qualifications and equipment as new products and treatments become available. by nurturing our fantastic team, we not only support their careers, we make sure that we give you the best possible results.
                </p>
            </div>
        </div>
    </div>
</section>

<section class="we-can">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <h2 class="main-heading-l-2">What We Can Do For You</h2>
                <h2 class="main-heading">Aesthetics Treatments</h2>
                <h3 class="sub-heading-two">3D Lipo Fat Freeze & Inch Loss</h3>
                <p class="mt-2">looking for a treatment which gives real results? fed up with a stubborn pocket of fat which you can’t get rid of no matter what you do?
                </p>
                <p class="mt-lg-4 mt-2">whether it’s your tummy, thighs, love handles, back or arms. we can help – we have just invested in the brand-new 3d lipo ultimate pro – medical grade machine, which is more effective than ever before. it means that whatever your body concern, we can help improve it.
                </p>
                <p class="mt-lg-4 mt-2">all you need to do now is book your free consultation by clicking on the link below
                </p>
                <router-link :to="{name:'web.requestform.index'}" class="yellow-btn d-inline-block mt-2 text-center">Book a Free No Obligation Consultation</router-link>
            </div>
            <div class="col-lg-6 mt-lg-0 mt-2">
                <img :src="base_url+`/assets/web/images/img2.png`" alt="" class="img-fluid w-100 we-can-img">
            </div>
        </div>
    </div>

</section>

<section class="hifu position-relative">
    <img :src="base_url+`/assets/web/images/hifu-right.png`" alt="" class="hifu-right">
    <img :src="base_url+`/assets/web/images/hifu-left.png`" alt="" class="hifu-left">
    <img :src="base_url+`/assets/web/images/about-left.png`" alt="" class="about-left img-fluid">
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h2 class="main-heading-two-line">HIFU Face & Body</h2>
                <p class="mt-lg-3 mt-2">the hifu ultrasound body, face and neck lift has become one of the most sought after non-surgical face-lifting treatments. unlike laser treatments, which penetrate the skin from the outside-in, the hifu procedure bypasses the surface of the skin, delivering targeted energy into the deep, structural tissues and muscles where collagen lives.</p>
                <img :src="base_url+`/assets/web/images/img3.png`" alt="" class="we-can-img w-100 img-fluid mt-lg-3 mt-2">
            </div>
        </div>
    </div>
</section>

<section class="hifu position-relative">
    <img :src="base_url+`/assets/web/images/about-left.png`" alt="" class="about-left img-fluid">
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h2 class="main-heading-two-line">Platelet Rich Plasma Treatments</h2>
                <p class="mt-lg-3 mt-2">PRP therapy works on the basis that the body’s own natural healing powers may slow and even reverse the ageing process. The technique is a clinically proven medical procedure that uses the science of stem cells, and the healing factors in your own blood, as a safe and effective alternative to a surgical face-lift procedure. With just one consultation you'll be able to start your rejuvenation process. When applying PRP to the skin, it can regenerate and rejuvenate your skin which causes skin problems such as acne, acne scarring, scarring, wrinkles, pigmentation, puffy eyes, baggy eyes and more.</p>
                <img :src="base_url+`/assets/web/images/hifu-main.png`" alt="" class="we-can-img w-100 img-fluid mt-lg-3 mt-2">
            </div>
        </div>
    </div>
</section>
<section class="hair">
    <div class="container">
        <div class="row">
            <div class="col-12 position-relative">
                <img :src="base_url+`/assets/web/images/about-left.png`" alt="" class="hair-back">
                <div class="white-div">
                    <div class="row">
                        <div class="col-lg-8 py-lg-5 py-3">
                            <h2 class="main-heading-l">Hair and Make-Up</h2>
                            <p class="mt-lg-3 mt-2">using only premium branded make-up such as mac, kryolan, urban decay, ben nye etc., and along with professional primers and techniques, we can guarantee your make-up will not only looks gorgeous & flawless but will last all day and evening even through the happy tears.</p>
                            <p class="mt-2">we offer beauty photographic, bridal and special occasion make-up.
                            </p>
                            <p class="my-2">we are passionate about our work and love to make our brides feel and look amazing for their special day.
                            </p>
                            <div class="text-sm-left text-center">
                                <router-link :to="{name:'web.services.index'}" class="d-inline-block yellow-btn">Book an Appointment</router-link>
                                <span>or</span>
                                <router-link :to="{name:'web.requestform.index'}" class="d-inline-block black-btn"> Free Consultation</router-link>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <img :src="base_url+`/assets/web/images/hair-img.png`" alt="" class="img-fluid w-100 hair-img">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

</div>
</template>
<script>
    import { mapState, mapActions } from 'vuex';
    export default {
        data() {
            return {
			    base_url:base_url,
            };
        },

}

</script>
