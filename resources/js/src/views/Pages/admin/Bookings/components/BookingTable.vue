<template>
  <div class="col-lg-12">
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
              <tr>
                <th>S.No</th>
                <th>Full Name</th>
                <th>Cost</th>
                <th>Service</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
               </tr>
        </thead>
        <tbody>
          <tr v-for="(booking, index) in bookings.data" :key="index">
            <td>{{ ++index }}</td>
            <td>{{ booking.user.name }}</td>
            <td>{{ booking.subscription.amount }}</td>
            <td>{{ booking.service.name }}</td>
            <td>Paid</td>
            <td>{{formatDate(booking.created_at)}}</td>
            <td>
              <div class="btn-group custom-dropdown">
                <button
                  type="button"
                  class="
                    btn
                    transparent-btn
                    bg-transparent
                    btn-drop-table btn-sm
                  "
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fa fa-ellipsis-v"></i>
                </button>
                <div class="dropdown-menu text-left custom-dropdown">
                  <router-link
                    :to="{ name: 'admin.bookings.show', params: { id: booking.id } }"
                    class="
                      dropdown-item
                      d-flex
                      align-items-center
                      justify-content-start
                    "
                  >
                    <i class="fas fa-eye"></i>
                    Booking Details
                  </router-link>
                </div>
              </div>
            </td>
          </tr>
          <no-record
            tag="tr"
            :colspan="7"
            :data="bookings.data"
            class="col-md-3"
          ></no-record>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      feedbackId: undefined,
      title: "",
      subTitle: "",
    };
  },
  computed: {
    ...mapState("admin", ["bookings"]),
    status() {
      return this.$route.params.status;
    },
  },
};
</script>
