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

<section class="about-h position-relative">
    <img :src="base_url+`/assets/web/images/about-left.png`" alt="" class="about-left img-fluid">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <img :src="base_url+`/assets/web/images/r-1.png`" alt="" class="img-fluid w-100">
            </div>
            <div class="col-lg-6 my-auto mt-2">
                <h2 class="main-heading-l-2">
                    Radio Frequency</br>
                    Technology
                </h2>
                <p class="mt-lg-4 mt-2">3D-RF Face & Body Penetrates The Skin Layers To Selectively Heat The Skin Tissue And The Extra Cellular Matrix Where The Collagen Fibres Are Embedded. The Local Heating Of The Area Being Treated Causes An Immediate Contraction Of The Collagen Fibres, And At The Same Time Increases The Metabolism Of The Fibroblast Order To Accelerate Production Of New Collagen And Elastin Fibres To Create A Smoother, Healthier And Younger Looking Skin.
                </p>
            </div>
        </div>
    </div>
</section>
<section class="intersting pb-lg-5 pb-3">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-7 mx-auto mt-lg-5 mt-3">
                <div class="row">
                    <div class="col-12 mt-2 text-center">
                        <h2 class="pricing-heading mt-lg-5 mt-3">Can I Combine 3D-RF Face & Body With Other Treatments?</h2>
                        <p class="mt-3">3D-RF Face & Body Can Be Performed Standalone. The Treatment Is Recommended For Skin Tightening And Anti-Ageing For The Face And Body. However Your Therapist May Choose To Combine 3D-RF Face & Body With Other Treatments To Provide You With A Bespoke Facial Depending On Your Skin.
                        </p>

                        <h2 class="pricing-heading mt-lg-5 mt-3">How Many Treatments Are Recommended?</h2>
                        <p class="mt-2">A Course Of Treatment Is Typically Advised To Achieve Maximum Results This Is Usually 6-8 Treatments, One Treatment Per Week For 6-8 Weeks.
                        </p>
                        <h2 class="pricing-heading mt-lg-5 mt-3">What Results Can I Expect From This Treatment?</h2>
                        <p class="mt-2">Results Can Be Seen As Soon As After Your First Treatment, However A Course Of Treatments Are Recommended As Results Are Further Improved After Each Treatment.
                        </p>
                        <img :src="base_url+`/assets/web/images/r-2.png`" alt="" class="img-fluid w-100 mt-lg-3 mt-2">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="hifu position-relative">
    <img :src="base_url+`/assets/web/images/hifu-right.png`" alt="" class="hifu-right">
    <img :src="base_url+`/assets/web/images/hifu-left.png`" alt="" class="hifu-left">
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h2 class="main-heading">Can I Combine 3D-RF Face & Body With Other Treatments?</h2>
                <p class="mt-lg-4 mt-2">3D-RF Face & Body Can Be Performed Standalone. The Treatment Is Recommended For Skin Tightening And Anti-Ageing For The Face And Body. However Your Therapist May Choose To Combine 3D-RF Face & Body With Other Treatments To Provide You With A Bespoke Facial Depending On Your Skin.
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-3 text-center mt-lg-5 mt-3">
                <img :src="base_url+`/assets/web/images/tc-1.png`" alt="" class="surgeon-img ml-0">
                <div class="treatment-div">
                    <h2>Cavitation</h2>
                </div>
            </div>
            <div class="col-lg-3 text-center mt-lg-5 mt-3">
                <img :src="base_url+`/assets/web/images/tc-2.png`" alt="" class="surgeon-img ml-0">
                <div class="treatment-div">
                    <h2>3D-HIFU </h2>
                </div>

            </div>
            <div class="col-lg-3 text-center mt-lg-5 mt-3">
                <img :src="base_url+`/assets/web/images/tc-3.png`" alt="" class="surgeon-img ml-0">
                <div class="treatment-div">
                    <h2>Radio Frequency</h2>
                </div>
            </div>
            <div class="col-lg-3 text-center mt-lg-5 mt-3">
                <img :src="base_url+`/assets/web/images/tc-3.png`" alt="" class="surgeon-img ml-0">
                <div class="treatment-div">
                    <h2>Shockwave Therapy</h2>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-center">
                <h2 class="main-heading mt-lg-5 mt-3">What Will I Experience During Treatment?</h2>
                <p class="mt-lg-4 mt-2">3D-RF Face & Body Is A Relaxing Treatment. Product Will Be Applied To The Skin, This Acts As A Conductor For The 3D-RF Face & Body Energy. A Small, Round Handpiece Will Be Placed Onto The Skin And Moved In Gentle Circular Motions. A Slight Beeping Noise Will Come From The Machine, The Handpiece Will Get Warmer And Warmer, Building Heat Until It Reaches 40 Degrees. Your Therapist Will Use An Infrared Thermometer To Measure The Heat Of The Skin. Once Temperature Has Built Up To 40 Degrees, Your Therapist Will Continue To Maintain The Heat, Continuing Treatment On The Area For 2-4 Minutes, Before Moving Onto The Next Area.
                </p>
                <img :src="base_url+`/assets/web/images/r-3.png`" alt="" class="mt-lg-3 mt-2 img-fluid w-100">
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