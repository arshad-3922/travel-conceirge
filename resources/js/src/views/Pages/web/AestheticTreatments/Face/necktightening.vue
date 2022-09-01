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
                <img :src="base_url+`/assets/web/images/img13.png`" alt="" class="img-fluid w-100 about-h-img">
            </div>
            <div class="col-lg-6 my-lg-auto mt-2">
                <h2 class="main-heading-l">
                    Radio Frequency Face /
                    Neck Tightening
                </h2>
                <h3 class="sub-heading mt-sm-0 mt-2">Non-Surgical Face Lift 60 Mins</h3>
                <p class="mt-lg-4 mt-2">The Non-Surgical Face Lift Works By Heating The Dermis Of The Skin And Stimulating Fibroblasts, Which Promotes The Production Of Collagen And Skin Elastin. This Action Increases The Production Of New Collagen And Elastin Fibres, Which Gives An Instant Tightening Effect. As A Result Of This, The Skin Feels Smoother, And Wrinkles Are Less Visible*.
                </p>
                <p class="mt-2">*Apto Beauty & Aesthetics Cannot Guarantee Specific Results.
                </p>
                <p class="mt-2">We Have A Range Of Technologies Which Can Penetrate To Different Depths Within The Skin. We Recommend Speaking To One Of Our Team Who Can Help You To Decide If Radiofrequency Is The Best Treatment For You.
                </p>
                <p class="mt-2">We Also Offer HIFU, Which Can Penetrate Deeper Into The Skin And Consequently Produce Longer Lasting Results.
                </p>
            </div>
        </div>
    </div>
</section>

<section class="intersting pb-lg-5 pb-3">
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
                                        <th class="">Numbe Of Session</th>
                                        <th class="">PRICE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="">01 Session</td>
                                        <td class="">£159</td>
                                    </tr>
                                    <tr>
                                        <td class="">01 Session</td>
                                        <td class="">£159</td>
                                    </tr>
                                    <tr>
                                        <td class="">01 Session</td>
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
            <div class="col-12 mt-lg-3 mt-2">
                <img :src="base_url+`/assets/web/images/f-7.png`" alt="" class="w-100 img-fluid">

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
                <h2 class="main-heading">What Happens?</h2>
                <p>After Cleansing And Opening The Pores With Steam, The Skin Is Gradually Heated Up To 40 Degrees. With The Combination Of Multi-Polar Radiofrequency Energy And Deep Thermal Heat, Fibroblasts Are Energised Which In Turn Stimulates The Production Of Collagen (See Research).
                </p>
                <p class="mt-2">
                    Due To The Nature Of The Skin Tightening Technology, Collagen Fibres Can Instantly Begin Thickening; Therefore, Clients May Be Able To Notice Results Immediately. You May Only Need The One Session. However, This Is Dependent Upon Your Goals And The Condition Of Your Skin*. A Consultation Will Enable Us To Identify The Number Of Courses Required.
                </p>
                <h2 class="main-heading mt-lg-5 mt-3">Non-Surgical Eye Lift 20 Mins</h2>
                <p>Our Non-Surgical Eye Lift Uses Bi-Polar Radio Frequencies That Penetrate Deep Into The Wrinkles And Fine Lines Around The Eye. The Radio Waves Promote The Production Of Collagen Cells And Elastin. Creases And Sagging Areas Are Targeted And Reduced.
                </p>
                <p class="mt-2">
                    Your Skin Will Feel Tighter And Have Less Visible Lines*.
                </p>
                <img :src="base_url+`/assets/web/images/f-8.png`" alt="" class="w-100 img-fluid mt-lg-3 mt-2">
                <h2 class="main-heading mt-lg-5 mt-3">Non-Surgical Neck Lift 30 Mins</h2>
                <p>Neglecting Your Neck Area When Following A Facial Regime Results In The Skin Looking Tired And Wrinkly. Our Non-Surgical Neck Lift Covers As Far As The Décolletage And Uses Radio Frequency To Heat Deep Into The Dermis Of The Skin, Rejuvenating And “Ironing Out” The Wrinkles. The Skin Is Left Feeling Smoother And Wrinkle Free*.
                </p>
                <p class="mt-2">
                    We Recommend A Free Phone Consultation Before All Of Our Treatments. The Consultation Will Allow Us To Answer Any Queries You May Have, And It Will Also Let Us Tailor The Best Non-Surgical Procedure To Meet Your Goals.
                </p>
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