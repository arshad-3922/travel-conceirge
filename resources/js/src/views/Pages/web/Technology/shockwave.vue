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
                <img :src="base_url+`/assets/web/images/r-4.png`" alt="" class="img-fluid w-100">
            </div>
            <div class="col-lg-6 my-auto mt-2">
                <h2 class="main-heading-l-2">
                    Shockwave Technology</br>
                </h2>
                <h2 class="sub-heading">3D SHOCKWAVE – CELLULITE REDUCTION</h2>
                <h2 class="sub-heading-two">Best for – Stubborn pockets of fat and cellulite Tech explained:</h2>
                <p class="mt-lg-4 mt-2">3D-Shockwave Works By Stimulating The Fat Breakdown, Collagen Synthesis, And Lymphatic Drainage.
                </p>
                <p class="mt-2">
                    3D-Shockwave Is Delivered By Placing A Probe Up Against The Areas Of Cellulite, As It Passes Over The Area It Emits Radial Waves Through The Skin.
                </p>
                <h2 class="sub-heading-two mt-lg-5 mt-3">How this tech works:</h2>
                <p class="mt-2">For Cellulite, Sound Waves Stimulate The Microcirculation Within The Fat Layer, Increasing The Metabolic Function Of The Area And Increasing Cellular Membrane Permeability. Free Fatty Acids And Glycerol Are Released From The Fat Cells And Sit In The Intercellular Space. Lymphatic Movement And Increased Blood Supply Remove These Waste Products From The Body.
                </p>
                <p class="mt-2">For Skin Tightening, Sound Waves Stimulate Blood And Lymphatic Circulation Within The Area. They Also Stimulate The Connective Tissue And Septa Mobility, Giving The Skin A Firmer Tone And Reducing The Dimples Within The Skin.
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
                        <h2 class="pricing-heading mt-lg-5 mt-3">What Areas Can Be Improved With 3D-Shockwave?</h2>
                        <p class="mt-3">3D-Shockwave Can Be Performed On Many Areas Of The Body Including The Outer And Inner Thighs, Knees, Arms, Hips, Buttocks And Stomach.
                        </p>

                        <h2 class="pricing-heading mt-lg-5 mt-3">How Many Treatments Are Recommended?</h2>
                        <p class="mt-2">A Course Of Treatment Is Typically 8-10 Individual 30 Minute Sessions.
                        </p>
                        <h2 class="pricing-heading mt-lg-5 mt-3">What Results Can I Expect From This Treatment?</h2>
                        <p class="mt-2">Results Are Seen As Quickly As 2 Weeks After Starting The Course. If You Exercise And Increase Your Water Intake You May See Ever Better Results. 90% Of Women Who Took Part In A Clinical Study Would Recommend This Treatment. Our Experienced Therapists Will Be Able To Tailor An Individual Shockwave Treatment Plan To Meet Your Desired Goal.
                        </p>
                        <img :src="base_url+`/assets/web/images/r-6.png`" alt="" class="img-fluid w-100 mt-lg-3 mt-2">
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
                <h2 class="main-heading">Can I Combine 3D-Shockwave
                    With Other Treatments?</h2>
                <p class="mt-lg-4 mt-2">Many People Who Undergo 3D-Shockwave Choose To Combine It With Other Procedures. We Would Advise That You Speak With One Of Our Therapists Prior To The Commencement Of 3D-Shockwave To Discuss Your Previous Treatments And Also Your Treatment Goals.
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-3 text-center mt-lg-5 mt-3 mx-auto">
                <img :src="base_url+`/assets/web/images/r-8.png`" alt="" class="img-fluid w-100">
            </div>
        </div>
        <div class="row">
            <div class="col-10 mx-auto text-center">
                <h2 class="main-heading mt-lg-5 mt-3">What Will I Experience During Treatment?</h2>
                <p class="mt-lg-4 mt-2">The Treatment Itself Is Quite Noisy, Making A Loud Knocking Sound. 3D Shockwave Is A Comfortable Treatment And Feels Like A Tapotement Massage.
                </p>
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