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
    <img :src="base_url+`/assets/web/images/about-right.png`" alt="" class="about-right img-fluid">
    <img :src="base_url+`/assets/web/images/about-left.png`" alt="" class="about-left img-fluid">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <img :src="base_url+`/assets/web/images/img11.png`" alt="" class="img-fluid w-100">
            </div>
            <div class="col-lg-6 my-lg-auto mt-2">
                <h2 class="main-heading-l-2 mt-lg-5">
                    Non-Surgical Brazilian Bum Lift
                </h2>
                <p class="mt-lg-4 mt-2">The Non-Invasive Brazilian Bum Lift At Apto Beauty & Aesthetics Is A Safe And Clinically Proven Way To Reduce Fatty Deposits And Cellulite While Tightening And Shaping The Skin.
                </p>
                <p class="mt-2">The Treatment Combines Cupping With Our Own RF Technology.
                </p>
                <p class="mt-2">Thanks To Breakthroughs In Science, Our Bespoke HD Lipo Technology Can Dramatically Improve The Appearance Of Your Buttocks, Without The Need To Resort To Drastic Measures Such As Surgery.
                </p>
                <p class="mt-2">If You’re Looking To Reduce Cellulite, Tighten The Skin And Lift Sagging Cheeks, Our Brazilian Bum Lift Treatment Could Be A Safe And Affordable Solution To Your Problems.
                </p>
                <p class="mt-2">Results May Vary. Apto Beauty & Aesthetics Cannot Guarantee Specific Results.
                </p>
            </div>
        </div>
    </div>
</section>

<section class="intersting pb-lg-5 pb-3">
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h2 class="main-heading-two-line-2">Benefits of the Brazilian Bum Lift Procedure</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-12 mt-lg-5 mt-3 text-center">
                <ul class="body-ul">
                    <li>
                        <p>Tightens The Skin</p>
                    </li>
                    <li>
                        <p>Reduces Cellulite</p>
                    </li>
                    <li>
                        <p>Reduces Stretch Marks</p>
                    </li>
                    <li>
                        <p>Contours The Buttocks</p>
                    </li>
                    <li>
                        <p>Treats Fatty Deposits </p>
                    </li>
                    <li>
                        <p>Clinically Proven</p>
                    </li>
                    <li>
                        <p>Instant Results</p>
                    </li>
                    <li>
                        <p>Safe And Affordable</p>
                    </li>
                </ul>

                <p class="result-p mt-lg-5 mt-3">At Apto Beauty & Aesthetics, The Brazilian Bum Lift Uses Radio Frequencies In Combination With A Vacuum, Which Effortlessly Penetrate Layers Of Subcutaneous Fat, Contouring Your Buttocks, While Tightening The Skin And Reducing Cellulite.
                </p>
                <p class="result-p mt-2">The Procedure Is Relaxing And Painless, And Unlike Surgery, The Treatment Requires No Downtime; You Can Even Do It On Your Lunch Break!</p>

            </div>
        </div>
    </div>
</section>


<section class="hifu position-relative">
    <img :src="base_url+`/assets/web/images/hifu-right.png`" alt="" class="hifu-right">
    <img :src="base_url+`/assets/web/images/hifu-left.png`" alt="" class="hifu-left">
    <img :src="base_url+`/assets/web/images/about-left.png`" alt="" class="ultra-sound img-fluid">
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
                                        <th class="">Type oF Treatment</th>
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
                <p>The Cost Of The Treatment Will Depend Upon The Size Of The Treated Areas And The Number Of Sessions You Require. Contact Us Via The Booking Link, And We Will Be Able To Go Through Your Options.
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