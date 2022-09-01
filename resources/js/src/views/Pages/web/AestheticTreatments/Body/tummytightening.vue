<template>
 <div>
<section class="inner-banner">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 position-rlative">
                <img :src="base_url+`/assets/web/images/inner-banner.png`" alt="" class="img-fluid w-100">
                <h1 class="inner-banner-heading"><a href="javascript:void(0)" class="d-inline-block"><i class="fas fa-arrow-left mr-2 back-arrow"></i></a>Body</h1>
            </div>
        </div>
    </div>
</section>
<section class="about-h position-relative">
    <img :src="base_url+`/assets/web/images/about-left.png`" alt="" class="about-left img-fluid">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <img :src="base_url+`/assets/web/images/body-img-2.png`" alt="" class="img-fluid w-100">
            </div>
            <div class="col-lg-6 my-lg-auto mt-2">
                <h2 class="main-heading-l-2 ">
                    Radio Frequency Tummy Tightening
                </h2>
                <p class="mt-lg-4 mt-2">Radio Frequency Tummy Tightening Is A Clinically Proven, Non-Invasive Treatment Designed To Reduce Sagging And Tighten The Skin On The Abdomen.
                </p>
                <p>Loose Abdominal Skin Can Occur For Several Reasons Including Ageing, Weight Fluctuations, And Pregnancy. In The Past, People Have Opted For Tummy Tightening Surgery. However, The Risks And Cost Associated With Going Under The Knife Are Considerable.
                </p>
                <p>Fortunately, With Advances In Non-Invasive Technology, Apto Beauty & Aesthetics Now Offers A Safe And Affordable Alternative To Surgery For Clients Wishing To Tighten And Rejuvenate Abdominal Skin.
                </p>
                <p>Understanding Your Requirements Is Paramount. Booking A Free Consultation Will Enable Us To Understand Your Concerns And Recommend A Treatment Or Course Of Treatments That Coincide With Your Goals.
                </p>
                <p>Each Session Lasts Approximately 40 Minutes, During Which Time You Can Relax, Have A Cup Or Tea Or Coffee And Enjoy Our In-Clinic Television.
                </p>
                <p>Our Clients Describe The Treatment As Relaxing. The Applicator Is Carefully Monitored As It Reaches Temperatures Of Up To 40 Degrees Celsius.</p>
            </div>
        </div>
    </div>
</section>
<!-- About -->
<!-- Interesting -->
<section class="intersting pb-lg-5 pb-3">
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h2 class="main-heading-two-line-2">Time</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-10 mx-auto mt-lg-5 mt-3 text-center">
                <p class="result-p">The Complete Procedure Will Last No Longer Than 40 Minutes, Allowing Clients To Resume Their Regular Activities Immediately Afterwards.
                </p>
            </div>
        </div>
    </div>
</section>

<!-- Interesting -->
<!-- Hifu -->
<section class="hifu position-relative">
    <img :src="base_url+`/assets/web/images/hifu-right.png`" alt="" class="hifu-right">
    <img :src="base_url+`/assets/web/images/hifu-left.png`" alt="" class="hifu-left">
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h2 class="main-heading-two-line-2">Prices</h2>
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
                                        <th class="">Type Of Treatment</th>
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
                                        <td class="">01</td>
                                        <td class=""><del>£159</del></td>
                                        <td class="">£159</td>
                                    </tr>
                                    <tr>
                                        <td class="">Chin Freeze + RF Chin Reduction</td>
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
                <h2 class="main-heading-two-line-2 mt-lg-5">Tummy Tightening Sessions</h2>
                <p>The Radio Frequency Tummy Tightening Apparatus Facilitates The Regrowth Of Collagen Fibres As A Result Of Carefully Targeted Thermal Energy. The Nature Of Your Goals And Your Responsiveness To The Treatment Will Dictate How Many Sessions Are Required. In Some Cases, A Single Session May Successfully Achieve The Desired Results* (See Research). However, In Other Cases Multiple Sessions May Be Required, In Which Case We Offer Discounts For Block Bookings.
                    *Results May Vary. Apto Beauty & Aesthetics Cannot Guarantee Specific Results.
                </p>
                <h2 class="main-heading-two-line-2 mt-lg-5">Before & Aftercare</h2>
                <p>Ensure That The Skin That Is Going To Be Treated Is Clean And Free Of Moisturisers Or Make-Up.
                    If You Are Undertaking Multiple Sessions, We Recommend You Take Regular Photographs To Document Your Progress As This May Help Us To Adapt Your Treatment Plan.
                </p>
                <img :src="base_url+`/assets/web/images/body-3.png`" alt="" class="w-100 img-fluid mt-lg-3 mt-2">
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-center mt-lg-5 mt-3">
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