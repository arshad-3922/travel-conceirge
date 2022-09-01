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
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <img :src="base_url+`/assets/web/images/body-img.png`" alt="" class="img-fluid w-100 about-h-img">
            </div>
            <div class="col-lg-6 my-lg-auto mt-2">
                <h2 class="main-heading-l">
                    RF Skin Tightening
                </h2>
                <p class="mt-lg-4 mt-2">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Aenean Euismod Bibendum Laoreet. Proin Gravida Dolor Sit Amet Lacus Accumsan Et Viverra Justo Commodo. Proin Sodales Pulvinar Tempor. Cum Sociis Natoque Penatibus Et Magnis Dis Parturient Montes, Nascetur Ridiculus Mus. Nam Fermentum, Nulla Luctus Pharetra Vulputate, Felis Tellus Mollis Orci, Sed Rhoncus Sapien Nunc Eget Odio. Lorem Ipsum Dolor Sit..
                </p>
                <p class="mt-lg-4 mt-2">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Aenean Euismod Bibendum Laoreet. Proin Gravida Dolor Sit Amet Lacus Accumsan Et Viverra Justo Commodo. Proin Sodales Pulvinar Tempor. Cum Sociis Natoque Penatibus Et Magnis Dis Parturient Montes.
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