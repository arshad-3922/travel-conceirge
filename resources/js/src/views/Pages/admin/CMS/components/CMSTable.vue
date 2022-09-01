<template>
  <div class="col-lg-12">
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Page Title</th>
            <th>Last Updated On</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(cms,index) in cmss.data" :key="index">
            <td>{{ ++index }}</td>
            <td>{{ cms.name }}</td>
            <td>{{ formatDate(cms.created_at) }}</td>
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
                    :to="{ name: 'admin.cms.show', params: { id: cms.id } }"
                    class="
                      dropdown-item
                      d-flex
                      align-items-center
                      justify-content-start
                    "
                  >
                    <i class="fas fa-eye"></i>
                    View
                  </router-link>
                </div>
              </div>
            </td>
          </tr>
          <no-record
            tag="tr"
            :colspan="4"
            :data="cmss.data"
            class="col-md-3"
          ></no-record>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { mapState} from "vuex";
export default {
  data() {
    return {
      feedbackId: undefined,
      title: "",
      subTitle: "",
    };
  },
  computed: {
    ...mapState("admin", ["cmss"]),
    status() {
      return this.$route.params.status;
    },
  },
};
</script>
