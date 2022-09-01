<template>
  <div>
    <section class="inner-banner">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 position-rlative">
            <img
              :src="base_url + `/assets/web/images/inner-banner.png`"
              alt=""
              class="img-fluid w-100"
            />
            <h1 class="inner-banner-heading">{{categoryName}}</h1>
          </div>
        </div>
      </div>
    </section>

<section class="intersting treatment-page">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 text-center">
                <h2 class="main-heading-two-line-2">{{categoryName}} Services</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-9 mx-auto mt-lg-5 mt-3">
            
                <div class="row" v-if="service.length > 0">
                    <div class="col-lg-6 mt-4" v-for="(item,index) in service" :key="index">
                        <img :src="base_url+`/assets/web/images/service-img.png`" alt="" class="team-img pl-3">
                        <div class="interesting-div">
                               <h3 class="interesting-heading2 pl-3">{{item.item_data.name}}</h3>
                                <p class="interesting-para-custom pl-3" :id="item.id">{{item.item_data.description}}</p>
                                <br />
                               <a v-if="item.item_data.description && item.item_data.description.length > 300" href="javascript:void(0)" class="custom-btn pl-3 pt-0">
                                 <input type="button" class="custom-btn" :id="`btn`+item.id"  @click="readMore(item.id)" value="Read More" /></a>
                               <br />
                              <button
                              data-toggle="modal"
                              data-target="#inactive"
                              class="yellow-btn mt-lg-5 mt-3 ml-3"
                              @click="bookAppointment(item.id)"
                              >
                              Book an Appointment
                            </button>
                        </div>
                    </div>
                </div>

                   <div class="row" v-else>
                    <div class="col-lg-6 mt-4" >
                        <div class="interesting-div">
                              <h3 class="interesting-heading2 pl-3">No Services Found!</h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>

    <div
      class="modal fade bd-example-modal-lg"
      id="inactive"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content site-modal">
          <i
            class="fas fa-times close modal-close"
            data-dismiss="modal"
            aria-label="Close"
          ></i>
          <div class="text-center">
            <div class="loading"></div>
            <iframe
              src=""
              id="booking_container"
              style="min-height: 500px; width: 100%; height: 100%; border: none"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  data() {
    return {
      service: {},
      base_url: base_url,
      categoryName:'',
      settings: {
        dots: true,
        focusOnSelect: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        touchThreshold: 1,
      },
       isReadMore:true,
       isHide:false,
      iframeUrl:
        "https://squareup.com/appointments/buyer/widget/ee6om5x0vllf78/LBSNZD7101TRK?buttonTextColor=ffffff&amp;amp;color=006aff&amp;amp;locale=en&amp;amp;service_id=",
    };
  },
  // computed: {
  // 	...mapState('web', ['service']),
  // },
  components: {
    VueSlickCarousel,
  },
  created() {
    this.fetch();
    this.categoryName = this.$route.params.name
    localStorage.setItem("service_id", this.$route.params.id);
  },
  methods: {
    ...mapActions("web", ["getAll"]),
    async fetch() {
      let serviceId = this.$route.params.id;
      let params = {
        route: "api/web/serviceDetails",
        mutation: "SET_SERVICE",
        variable: "data",
        data: {
          id: serviceId,
        },
      };
      let { data } = await this.getAll(params);
      this.service = data.data;
    },
    bookAppointment(id) {
      $("#booking_container").attr("src", this.iframeUrl + id);
      $("iframe").on("load", function (e) {
        $(".loading").css("display", "none");
      });
    },
   readMore(id,status){
     let btn = document.getElementById(`btn`+id).value;
     $(`#`+id).toggleClass("interesting-para-custom pl-3");
     if(btn == 'Read More'){
       document.getElementById(`btn`+id).setAttribute('value','Hide');
     }if(btn == 'Hide'){
       document.getElementById(`btn`+id).setAttribute('value','Read More');
     }
    
   } 
  },
};
</script>