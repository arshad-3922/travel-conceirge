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
          </tr>
        </thead>
        <tbody>
          <tr v-for="(payment, index) in payments.data" :key="index">
            <td>{{ ++index }}</td>
            <td>{{ payment.user.name }}</td>
            <td>{{ payment.amount }}</td>
            <td>ABC</td>
            <td>{{ formatDate(payment.created_at) }}</td>
            <td>{{ payment.status }}</td>
          </tr>
          <no-record
            tag="tr"
            :colspan="6"
            :data="payments.data"
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
  computed: {
    ...mapState("admin", ["payments"]),
  },
};
</script>
