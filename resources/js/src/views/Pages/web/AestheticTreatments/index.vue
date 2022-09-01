<template>
    <div>
      
<section class="inner-banner">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 position-rlative">
                <img :src="baseUrl+`/assets/web/images/inner-banner.png`" alt="" class="img-fluid w-100">
                <h1 class="inner-banner-heading">Aesthetic Treatments</h1>
            </div>
        </div>
    </div>
</section>

<section class="hifu position-relative hifu-2">
    <img :src="baseUrl+`/assets/web/images/hifu-right.png`" alt="" class="hifu-right">
    <img :src="baseUrl+`/assets/web/images/hifu-left.png`" alt="" class="hifu-left">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 text-center mt-lg-5 mt-3">
                <a href="technology-detail-1.php" data-toggle="modal" data-target="#for-body">
                    <img :src="baseUrl+`/assets/web/images/tc-1.png`" alt="" class="surgeon-img ml-0">
                    <div class="treatment-div">
                        <h2>Body</h2>
                    </div>
                </a>
            </div>
            <div class="col-lg-4 text-center mt-lg-5 mt-3">
                <a href="technology-detail-2.php" data-toggle="modal" data-target="#for-face">
                    <img :src="baseUrl+`/assets/web/images/tc-4.png`" alt="" class="surgeon-img ml-0">
                    <div class="treatment-div">
                        <h2>Face</h2>
                    </div>
                </a>

            </div>
            <div class="col-lg-4 text-center mt-lg-5 mt-3">
                <a href="technology-detail-3.php" data-toggle="modal" data-target="#for-fat-reduction">
                    <img :src="baseUrl+`/assets/web/images/tc-3.png`" alt="" class="surgeon-img ml-0">
                    <div class="treatment-div">
                        <h2>fat Reduction</h2>
                    </div>
                </a>
            </div>
            <div class="offset-lg-4 col-lg-4 text-center mt-lg-5 mt-3">
                <a href="technology-detail-4.php" data-toggle="modal" data-target="#for-dermal-Aesthetics">
                    <img :src="baseUrl+`/assets/web/images/tc-5.png`" alt="" class="surgeon-img ml-0">
                    <div class="treatment-div">
                        <h2>Dermal Aesthetics</h2>
                    </div>
                </a>
            </div>
        </div>
    </div>
</section>
<!-- Hifu -->


<!-- Modal -->
<div class="modal fade" id="for-body" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered " role="document">
        <div class="modal-content site-modal">
            <i class="fas fa-times close modal-close" data-dismiss="modal" aria-label="Close"></i>
            <div class="text-center">
                <img :src="baseUrl+`/assets/web/images/tc-1.png`" alt="">
                <p class="service-div-two">Non Surgical Brazilian Bum Lift</p>
                <p class="service-div-two">RF Skin Tightening</p>
                <p class="service-div-two">RF Tummy Tightening</p>
                <p class="service-div-two">Shockwave Treatment</p>
            </div>
        </div>
    </div>
</div>
<!-- Modal -->
<!-- Modal -->
<div class="modal fade" id="for-face" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered " role="document">
        <div class="modal-content site-modal">
            <i class="fas fa-times close modal-close" data-dismiss="modal" aria-label="Close"></i>
            <div class="text-center">
                <img :src="baseUrl+`/assets/web/images/tc-4.png`" alt="">
                <p class="service-div-two">3D Chin Cryolipolysis</p>
                <p class="service-div-two">3D Hifu Face Lift</p>
                <p class="service-div-two">RF Double Chin Reduction</p>
                <p class="service-div-two">RF face and neck tightening</p>
            </div>
        </div>
    </div>
</div>
<!-- Modal -->
<!-- Modal -->
<div class="modal fade" id="for-fat-reduction" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered " role="document">
        <div class="modal-content site-modal">
            <i class="fas fa-times close modal-close" data-dismiss="modal" aria-label="Close"></i>
            <div class="text-center">
                <img :src="baseUrl+`/assets/web/images/tc-3.png`" alt="">
                <p class="service-div-two">3D Chin Cryolipolysis</p>
                <p class="service-div-two">Cryolipolisis Fat Freeze</p>
                <p class="service-div-two">RF Double Chin Reduction</p>
                <p class="service-div-two">RF Fat Melting</p>
                <p class="service-div-two">Ultrasound Cavitation</p>
            </div>
        </div>
    </div>
</div>
<!-- Modal -->
<!-- Modal -->
<div class="modal fade" id="for-dermal-Aesthetics" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered " role="document">
        <div class="modal-content site-modal">
            <i class="fas fa-times close modal-close" data-dismiss="modal" aria-label="Close"></i>
            <div class="text-center">
                <img :src="baseUrl+`/assets/web/images/tc-5.png`" alt="">
                <p class="service-div-two">Dermal Fillers for lips</p>
                <p class="service-div-two">Dermal fillers for Smile lines</p>
                <p class="service-div-two">Anti-wrinkle Injections</p>
                <p class="service-div-two">Dermaplaning</p>
                <p class="service-div-two">Micro needling</p>
            </div>
        </div>
    </div>
</div>
<!-- Modal -->
    </div>
</template>
<script>
export default {
    data(){
        return{
            baseUrl:base_url
        }
    }
}
</script>