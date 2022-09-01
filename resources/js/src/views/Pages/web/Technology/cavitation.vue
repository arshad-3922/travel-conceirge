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
                <img :src="base_url+`/assets/web/images/img14.png`" alt="" class="img-fluid w-100">
            </div>
            <div class="col-lg-6 my-lg-auto mt-2">
                <h2 class="main-heading-l-2">
                    Cavitation Technology
                </h2>
                <p class="mt-lg-4 mt-2">3D Cavitation Is A Method Of Non-Surgical Liposuction. It Destroys Fat Cells In The Body Safely, Effectively And Non-Invasively Using Low Frequency Ultrasound Waves.
                </p>
                <p class="mt-2">The Treatment Works By Applying A Specially Designed Hand-Piece To Your Skin Which Transmits Ultrasonic Waves Back And Forth, Gradually Turning The Fat Cells Into Liquid, Without Harming Any Other Tissue. The Liquid Is Then Transported To The Liver And Kidneys And Expelled Naturally From The Body.
                </p>
                <p class="mt-2">3D Cavitation Is Ideal For Use On Localised Areas Such As The Thighs, Abdomen, Hips, Bottom And Upper Arms.
                </p>
                <p class="mt-2">
                    An Average Reduction Of Several Centimetres Can Often Be Achieved During A Single Session. However, We Normally Recommend A Course Of 6-8 Treatments To Achieve The Very Best Results.
                </p>
            </div>
        </div>
    </div>
</section>

<section class="intersting pb-lg-5 pb-3">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 text-center">
                <h2 class="main-heading">Is This 3D Cavitation Treatment Suitable For Me?
                </h2>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-10 mx-auto mt-lg-5 mt-3">
                <div class="row">
                    <div class="col-12 mt-2 text-center">
                        <p class="result-p">Every Patient At Apto Beauty & Aesthetics Undergoes A Thorough Consultation With One Of Our Experienced Team Where We Will Discuss Your Medical History And All Aspects Of The Procedure.
                        </p>
                        <p class="mt-2">
                            Because 3D Cavitation Is A Painless And Non-Invasive Procedure, With Virtually No Side Effects, It Is Suitable For Most People.
                        </p>
                        <p class="mt-2">
                            What Will I Feel During 3D Cavitation?
                        </p>
                        <p class="mt-2">
                            You Will Not Require Anaesthesia. The Most You Will Feel Is A Slight Tingling Or Warm Sensation On The Skin.
                        </p>
                        <img :src="base_url+`/assets/web/images/tl-1.png`" alt="" class="img-fluid w-100 mt-lg-3 mt-2">
                        <h2 class="pricing-heading mt-lg-5 mt-3">How Will I Feel After 3D Cavitation?</h2>
                        <p class="mt-lg-5 mt-3">The Procedure Leaves No Scarring, And You Will Be Fine To Return To Everyday Activities Immediately After Treatment. Any Slight Reddening Of The Skin Will Disappear Very Quickly.
                        </p>
                        <p>The Ultrasound Energy Is Designed To Target Fatty Tissues Beneath The Skin Only. It Will Not Affect The Blood Vessels, Nerves And Connective Tissue.
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
                <h2 class="main-heading">What Results Can I Expect From 3D
                    Cavitation Treatment?</h2>
                <p class="mt-lg-4 mt-2">This Depends On The Individual Patient And The Area(S) Being Targeted. Many Patients See Immediate Improvements. However, The Results Often Increase Over The Course Of A Few Weeks As The Body Starts Expelling The Broken-Down Fatty Tissue.
                </p>
                <p>We Always Recommend A Course Of Treatments To Achieve The Very Best Outcomes. Results Can Be Long Lasting, Especially If You Follow A Healthy Diet And Take Regular Exercise.
                </p>
                <p>Please Note That 3D Cavitation Is A ‘Reshaping’ And Toning Procedure. It Is Not A Treatment For Obesity And Will Not Aid Weight Loss.
                </p>
                <img :src="base_url+`/assets/web/images/img15.png`" alt="" class="img-fluid w-100 mt-lg-3 mt-2">

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