<template>
	        <table class="table table-borderless dataTable">
                  <thead>
                    <tr>
                      <th>S.No <span class="up-down ml-2"></span></th>
                      <th>User ID <span class="up-down ml-2"></span></th>
                      <th>First Name <span class="up-down ml-2"></span></th>
                      <th>Last Name <span class="up-down ml-2"></span></th>
                      <th>Email <span class="up-down ml-2"></span></th>
                      <th>Reg. Date <span class="up-down ml-2"></span></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(user,index) in users" :key="index">
                      <td>{{++index}}</td>
                      <td>{{user.id}}</td>
                      <td>{{user.first_name}}</td>
                      <td>{{user.last_name}}</td>
                      <td>{{user.email}}</td>
                      <td>{{formatDate(user.created_at)}}</td>
                    </tr>
                  </tbody>
                </table>
</template>
<script>
export default {
	  props:{
        users: {
            type: Array,
            required: true,
        }
    }
	}
</script>
