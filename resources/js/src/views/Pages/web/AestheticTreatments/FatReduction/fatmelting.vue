<template>
 <div>
<section class="inner-banner">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 position-rlative">
                <img :src="base_url+`/assets/web/images/inner-banner.png`" alt="" class="img-fluid w-100">
                <h1 class="inner-banner-heading"><a href="Javascript:void(0)" class="d-inline-block"><i class="fas fa-arrow-left mr-2 back-arrow"></i></a>Fat Reduction</h1>
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
                <img :src="base_url+`/assets/web/images/fat-1.png`" alt="" class="img-fluid w-100">
            </div>
            <div class="col-lg-6 my-lg-auto mt-2">
                <h2 class="main-heading-l-2">
                    Radio Frequency Fat-Melting
                </h2>
                <p class="mt-lg-4 mt-2">Cryolipolysis Is Fast Becoming A Popular Treatment. In Basic Terms, This Treatment Involves The Freezing Of Fat Cells In A Specific Area Of The Body. Fat Cells Have A Weak Structure, And Therefore Cannot Survive At These Temperatures. They Die And Leave The Body Through The Lymphatic System, Which Works To Remove Toxins. As A Result Of This, Fat In The Target Area Is Reduced, Giving You A Healthier And Toned Appearance. Cryolipolysis Is Ideal For Areas Where Fat Is Hard To Get Rid Of Through Lifestyle, For Instance, The Chin, Stomach, And Back.

                </p>
                <p class="mt-lg-4 mt-2">It Is Important To Us That We Understand Your Goals. Therefore, Once You Have Undergone A Full Consultation, We Can Plan Your Treatment. Cryolipolysis Sessions Last Approximately 1 Hour, During Which Time A Cooling Gel Pad Is Placed Onto The Target Areas. When The Vacuum Applicator Draws In The Fat, You May Feel A Mild Cooling Sensation; This Is Perfectly Normal And All A Part Of The Fat Freezing Procedure.
                </p>
            </div>
        </div>
    </div>
</section>

<section class="intersting pb-lg-5 pb-3">
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h2 class="main-heading-two-line-2">How does Radio Frequency melt fat?</h2>
                <p class="mt-lg-4 mt-2">Radio Frequency Delivers A Safe Electrical Current To The Treated Area Via The Electrodes On The 3D Lipo Machine. The RF Heats The Area And Deeply Penetrates The Skin. Our Brain Interprets The RF As A Source Of Energy, Causing The Skin To React Like A Resistor. By Heating The Cells Within A Safe Range, This Tightens The Skin, Making It Smoother And Reducing Cellulite.</p>
                <p class="mt-3">As We Get Older, The Integrity Of Our Elastin And Collagen Proteins Decrease, Causing Our Skin To Wrinkle And Become Loose, As Well Making It More Susceptible To Cellulite. It Is The Heat From The Radio Frequency Procedure That Stimulates The Collagen, Causing It To Contract And Tighten, While Disrupting Stubborn Fat Cells.
                </p>
                <img :src="base_url+`/assets/web/images/radio.png`" alt="" class="img-fluid w-100">
            </div>
        </div>
    </div>
</section>

<section class="hifu position-relative">
    <img :src="base_url+`/assets/web/images/hifu-right.png`" alt="" class="hifu-right">
    <img :src="base_url+`/assets/web/images/hifu-left.png`" alt="" class="hifu-left">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 text-center mt-lg-5 mt-3">
                <img :src="base_url+`/assets/web/images/service-img.png`" alt="" class="surgeon-img ml-0">
                <div class="treatment-div treatment-div-2">
                    <h2>Is The Treatment</br>Safe?</h2>
                    <p>Our Radio Frequency Fat-Melting Treatment Is Safe And Relaxing. Before Your Treatment, We Will Assess Your Requirements And Discuss Your Goals. Once We’re Ready To Start, All You Need To Do Is Sit Back And Enjoy The Warmth Generated From The RF Applicator. The Procedure Lasts Approximately 30 Minutes.
                    </p>
                </div>
            </div>
            <div class="col-lg-4 text-center mt-lg-5 mt-3">
                <img :src="base_url+`/assets/web/images/service-img.png`" alt="" class="surgeon-img ml-0">
                <div class="treatment-div treatment-div-2">
                    <h2>How Long Until I Can </br>See Results?</h2>
                    <p>This Fat Loss Treatment Is Ideal If You Are Short On Time, As Results Can Be Experienced More Rapidly Than With Other Fat Reduction Techniques. Furthermore, You Should Continue To See Further Improvements In The Following Few Days*. The Number Of Sessions You Require Will Depend Upon Your Desired Results, Which Is Why We Suggest You Book A Free Telephone Consultation So We Can Discuss Your Goals. If More Than One Session Is Required, We Offer Discounts On Block Bookings.
                    </p>

                </div>
            </div>
            <div class="col-lg-4 text-center mt-lg-5 mt-3">
                <img :src="base_url+`/assets/web/images/service-img.png`" alt="" class="surgeon-img ml-0">
                <div class="treatment-div treatment-div-2">
                    <h2>Will There Be Side </br>Effects?</h2>
                    <p>We Recommend That You Do Not Sunbathe Or Use A Tanning Bed In The Week Proceeding Your Radio Frequency Treatment, As This Can Cause Some Irritation To The Skin. Mild Soreness Is Possible After The Treatment But Is Uncommon, And We Advise That You Use Moisturiser On The Area If Irritation Occurs.</p>
                    <p>We Also Recommend That You Drink Plenty Of Water In The Days Following Your Treatment As It Assists Collagen Reproduction.
                    </p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-center mt-lg-5 mt-3">
                <h2 class="pricing-heading">How Much Does It Cost?</h2>
                <p class="mt-3">The Cost Of The Treatment Will Depend Upon The Size Of The Treated Areas And The Number OF Sessions You Require. Contact Us Via The Booking Link And We Will Be Able To Go Through Your Options.</p>
                <router-link :to="{name:'web.requestform.index'}" class="d-inline-block yellow-btn mt-lg-5 mt-3">Request for Booking</router-link>
            </div>
        </div>

    </div>
</section>

</div>
</template>
<script>
export default {
    base_url:base_url
}
</script>