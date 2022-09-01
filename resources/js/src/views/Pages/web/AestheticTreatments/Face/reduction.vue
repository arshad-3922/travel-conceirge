<template>
 <div>
<section class="inner-banner">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 position-rlative">
                <img :src="base_url+`/assets/web/images/inner-banner.png`" alt="" class="img-fluid w-100">
                <h1 class="inner-banner-heading"><a href="javascript:void(0)" class="d-inline-block"><i class="fas fa-arrow-left mr-2 back-arrow"></i></a>Face</h1>
            </div>
        </div>
    </div>
</section>

<section class="about-h position-relative">
    <img :src="base_url+`/assets/web/images/about-left.png`" alt="" class="about-left img-fluid">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <img :src="base_url+`/assets/web/images/f-4.png`" alt="" class="img-fluid w-100">
            </div>
            <div class="col-lg-6 my-lg-auto mt-2">
                <h2 class="main-heading-l-2">
                    RF Double Chin Reduction
                </h2>
                <p class="mt-lg-4 mt-2">Radio Frequency (RF) Double Chin Reduction Is One Of The Most Popular Non-Invasive Fat Loss Procedures Available At Apto Beauty & Aesthetics. Its Popularity Stems From Its Ability To Make Notable Reductions To Stubborn Double Chins*. Radio Frequency Treatments Are Quick, Painless And Require No Time, Not To Mention Being Far More Affordable Than Your Average Fat Loss Procedure.
                </p>
                <p class="mt-2">The Procedure Isn’t Just About Losing Fat Either; Radio Frequency Can Also Boost The Production Of Collagen In The Skin, Reducing Cellulite And Making The Skin Look And Feel Firmer* (See Research).
                </p>
                <p class="mt-2">The Treatment Can Be Highly Effective For Small Fatty Deposits Such As Double Chins And Chubby Cheeks.
                </p>
            </div>
        </div>
    </div>
</section>

<section class="intersting pb-lg-5 pb-3">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 text-center">
                <h2 class="main-heading">How Does Radio
                </h2>
                <h2 class="main-heading">Frequency Melt Fat?
                </h2>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-10 mx-auto mt-lg-5 mt-3">
                <div class="row">
                    <div class="col-12 mt-2 text-center">
                        <p class="result-p">Radio Frequency Delivers A Safe Electrical Current To The Treated Area Via The Electrodes. The RF Heats The Area And Deeply Penetrates The Skin. Our Brain Interprets The RF As A Source Of Energy And The Skin Reacts Like A Resistor. By Heating The Cells Within A Safe Range, This Causes The Skin To Tighten, Making It Smoother And Reducing Cellulite.
                        </p>
                        <p class="mt-2">
                            As We Get Older, The Integrity Of Our Elastin And Collagen Proteins Decrease, Causing Our Skin To Wrinkle And Become Loose, As Well Making It More Susceptible To Cellulite. It Is The Heat From The Radio Frequency Procedure That Stimulates The Collagen, Causing It To Contract And Tighten, While Disrupting Stubborn Fat Cells.
                        </p>
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
                <h2 class="main-heading">Prices</h2>
            </div>
        </div>
        <div class="row row-table">
            <div class="main-tabble table-responsive">
                <div class="dataTables_wrapper container-fluid dt-bootstrap4">
                    <div class="row">
                        <div class="col-sm-12">
                            <table class="table table-borderless dataTable">
                                <thead>
                                    <tr>
                                        <th class="">number Of Sessions</th>
                                        <th class="">PRICE</th>
                                        <th class="">SPECIAL PRICE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="">01</td>
                                        <td class=""><del>£159</del></td>
                                        <td class="">£159</td>
                                    </tr>
                                    <tr>
                                        <td class="">02</td>
                                        <td class=""><del>£159</del></td>
                                        <td class="">£159</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-center mt-lg-5 mt-3">
                <p>for optimal results, combine this treatment with 3d chin cryolipolysis
                </p>
                <img :src="base_url+`/assets/web/images/f-6.png`" alt="" class="w-100 img-fluid mt-lg-3 mt-2">
                <h2 class="main-heading mt-lg-5">Is The Treatment Safe?</h2>
                <p>Our Radiofrequency Double Chin Reduction Treatment Is Safe And Relaxing. Before Your Treatment, We Will Assess Your Requirements And Discuss Your Goals. Once We’re Ready To Start, All You Need To Do Is Sit Back And Enjoy The Warmth Generated From The RF Applicator. The Procedure Lasts Approximately 30 Minutes.
                </p>
                <h2 class="main-heading mt-lg-5">How Long Until I Can See Results?</h2>
                <p>This Fat Loss Treatment Is Great If You Are Short On Time, As Results Can Be Experienced More Rapidly Than With Other Fat Reduction Techniques. Furthermore, You Should Continue To See Further Improvements In The Few Days Following The Treatment*. The Number Of Sessions You Require Will Depend Upon Your Requirements, Which Is Why We Suggest You Book A Free Telephone Consultation So We Can Discuss Your Goals. If More Than One Session Is Required, We Offer Discounts On Block Bookings.
                </p>
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