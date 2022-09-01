<template>
	<table class="table table-striped text-xl-center table-bordered zero-configuration">
		<thead>
			<tr>
				<th>S.NO</th>
				<th>Name</th>
				<th>DATE</th>
				<th>ACTIONS</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>01</td>
				<td>Abc</td>
				<td>mm/dd/yyyy</td>
				<td>
					<div class="btn-group custom-dropdown ml-2 mb-1">
						<button type="button" class="btn btn-drop-table btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="fa fa-ellipsis-v"></i></button>
						<div class="dropdown-menu custom-dropdown"> 
							<router-link class="dropdown-item" :to="{name: 'admin.contactUs.show'}">View</router-link>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td>02</td>
				<td>Abc</td>
				<td>mm/dd/yyyy</td>
				<td>
					<div class="btn-group custom-dropdown ml-2 mb-1">
						<button type="button" class="btn btn-drop-table btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="fa fa-ellipsis-v"></i></button>
						<div class="dropdown-menu custom-dropdown"> 
							<router-link class="dropdown-item" :to="{name: 'admin.contactUs.show'}">View</router-link>
						</div>
					</div>
				</td>
			</tr>
		</tbody>
	</table>
</template>