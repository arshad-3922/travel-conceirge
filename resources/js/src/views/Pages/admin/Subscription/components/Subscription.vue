<template>
<div class="">
    <div class="col-lg-12" v-for="(subscription,index) in  subscriptions" :key="index">
    <div class="pkg-wrapper mb-2">
      <div class="row mb-2">
        <div class="col-lg-4">
          <label class="primary_heading" for="name">Package Name</label>
          <p class="sec_heading">{{subscription.name}}</p>
        </div>
        <div class="col-lg-4">
          <label class="primary_heading" for="amount">Amount</label>
          <p class="sec_heading">$ {{subscription.amount}}</p>
        </div>
        <div class="col-lg-4">
          <label class="primary_heading" for="name">Status</label>
          <p class="sec_heading">{{(subscription.status) ? 'Active' : 'Inactive'}}</p>
        </div>
      </div>
      <div class="row mb-2">
        <div class="col">
          <label class="primary_heading" for="features">Features</label>
          <span class="sec_heading" v-for="(feature,index) in subscription.features" :key="index">{{feature}} :</span>
        </div>
      </div>
      <div class="row mb-2">
        <div class="col">
          <label class="primary_heading" for="subscription"
            >Subscription Note</label
          >
          <p class="sec_heading">
            {{subscription.description}}
          </p>
        </div>
      </div>
      <router-link :to="{name:'admin.subscriptions.edit',params:{id:subscription.id}}" class="btn pkg-primary-btn">Edit</router-link>
      <button
        class="btn pkg-primary-btn ml-0"
        type="button"
        data-toggle="modal"
        data-target="#package-deleted"
      >
        Delete
      </button>
    </div>
  </div>
</div>
</template>
<script>
import {mapState} from "vuex";
export default {
  data() {
    return {
      userId: 0,
    };
  },
  computed: {
    ...mapState("admin", ["subscriptions"]),
    status() {
      return this.$route.params.status;
    },
  },
};
</script>
