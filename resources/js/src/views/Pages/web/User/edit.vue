<template>
    <div class="content-wrapper">
        <div class="content-body">
            <section id="configuration">
                <div class="row">
                    <div class="col-12">
                        <div class="card rounded pad-20">
                            <div class="card-content collapse show">
                                <div class="card-body card-dashboard">
                                    <div class="row">
                                        <div class="col-12">
                                            <h1><a href="user-listing.php"><i class="fa fa-angle-left"></i></a>Users
                                                Listing </h1>
                                        </div>
                                    </div>
                                    <div class="session-div">
                                        <div class="ses-header">
                                            <h2>Edit Profile </h2>
                                        </div>
                                        <div class="ses-content">
                                           <ValidationObserver v-slot="{handleSubmit}">
                                                <form ref="UserEditForm" @submit.prevent="handleSubmit(update)">
                                                    <div class="row">
                                                        <div class="col-12">
                                                            <div class="attached"><img
                                                                :src="`${user.image}`"
                                                                class="img-fluid" alt="">
                                                                <input type="file" id="upload" name="image" @change="setImage">
                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-lg-6 col-xl-4 form-group">
                                                            <label for="">First Name <span
                                                                class="text-danger">*</span></label>
                                                            <ValidationProvider name="First name" rules="required"
                                                                                v-slot="{ errors }">

                                                                <input type="text" class="form-control"
                                                                       name="first_name" v-model="user.name"
                                                                      >
                                                                <span class="text-danger">{{ errors[0] }}</span>
                                                            </ValidationProvider>
                                                        </div>
                                                        <div class="col-12 col-lg-6 col-xl-4 form-group">
                                                        <label for="">Last Name </label>
                                                                <input type="text" class="form-control" name="Last Name"
                                                                       v-model="user.last_name"
                                                                       placeholder="Enter Last Name">
                                                          
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-12 col-lg-6 col-xl-4 form-group">
                                                            <label for="">Phone Number <span
                                                                class="text-danger">*</span></label>
                                                            <ValidationProvider name="Phone number" rules="required"
                                                                                v-slot="{ errors }">
                                                                <input type="number" name="phone_number"
                                                                       v-model="user.phone_number" class="form-control"
                                                                      >
                                                                <span class="text-danger">{{ errors[0] }}</span>
                                                            </ValidationProvider>
                                                        </div>
                                                        <div class="col-12 col-lg-6 col-xl-4 form-group">
                                                            <label for="">Email <span
                                                                class="text-danger">*</span></label>
                                                            <ValidationProvider name="email" rules="required|email"
                                                                                v-slot="{ errors }">
                                                                <input type="email" class="form-control" name="email"
                                                                       v-model="user.email"
                                                                      >
                                                                <span class="text-danger">{{ errors[0] }}</span>
                                                            </ValidationProvider>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-12 col-xl-8 form-group">
                                                            <label for="">Address <span class="text-danger">*</span>
                                                            </label>
                                                            <ValidationProvider name="address" rules="required"
                                                                                v-slot="{ errors }">
                                                            <textarea name="address" v-model="address"
                                                                      placeholder="Enter Address"
                                                                      class="form-control">{{user.address}}</textarea>
                                                                <span class="text-danger">{{ errors[0] }}</span>
                                                            </ValidationProvider>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-12 col-lg-6 col-xl-4 form-group">
                                                            <label for="">Country <span
                                                                class="text-danger">*</span></label>
                                                            <ValidationProvider name="country" rules="required"
                                                                                v-slot="{ errors }">
                                                                <input type="text" class="form-control" name="country"
                                                                       v-model="user.country"
                                                                       placeholder="Enter Country">
                                                                <span class="text-danger">{{ errors[0] }}</span>
                                                            </ValidationProvider>
                                                        </div>
                                                        <div class="col-12 col-lg-6 col-xl-4 form-group">
                                                            <label for="">State <span
                                                                class="text-danger">*</span></label>
                                                            <ValidationProvider name="state" rules="required"
                                                                                v-slot="{ errors }">
                                                                <input type="text" class="form-control" name="state"
                                                                       v-model="user.state"
                                                                       placeholder="Enter state">
                                                                <span class="text-danger">{{ errors[0] }}</span>
                                                            </ValidationProvider>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-12 col-lg-6 col-xl-4 form-group">
                                                            <label for="">City <span
                                                                class="text-danger">*</span></label>
                                                            <ValidationProvider name="city" rules="required"
                                                                                v-slot="{ errors }">
                                                                <input type="text" class="form-control" name="city"
                                                                       v-model="user.city"
                                                                       placeholder="Enter City">
                                                                <span class="text-danger">{{ errors[0] }}</span>
                                                            </ValidationProvider>
                                                        </div>
                                                        <div class="col-12 col-lg-6 col-xl-4 form-group">
                                                            <label for="">Zip Code <span
                                                                class="text-danger">*</span></label>
                                                            <ValidationProvider name="zip code" rules="required"
                                                                                v-slot="{ errors }">
                                                                <input type="number" class="form-control" name="zipcode"
                                                                       v-model="user.zip_code"
                                                                       placeholder="Enter Zip Code">
                                                                <span class="text-danger">{{ errors[0] }}</span>
                                                            </ValidationProvider>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-12 form-group">
                                                            <input type="hidden" name="id" id="" :value="user.id">
                                                            <button class="orange-btn" type="submit" data-toggle="modal"
                                                                    data-target=".user-added">Update
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </ValidationObserver>
                                    </div>
                                    <h1>Session Details</h1>
                                    <div id="accordion" class="accordian-main">
                                        <div class="accordian table-acc">
                                            <div class="card-header" id="acc-one">
                                                <div id="pool-bet-accordian-div"
                                                     class=" d-flex justify-content-between align-items-center"
                                                     data-toggle="collapse" data-target=".pool-bet-acc"
                                                     aria-expanded="true" aria-controls="pool-bet-acc">
                                                    <h6>single Session </h6>
                                                    <i id="icon-pool-bet" class="fa fa-angle-down"></i>
                                                </div>
                                            </div>
                                            <div class="collapse show pool-bet-acc" aria-labelledby="acc-one"
                                                 data-parent="#accordion">
                                                <nav>
                                                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                                        <a class="nav-item nav-link active" id="nav-des-tab"
                                                           data-toggle="tab" href="#nav-des" role="tab"
                                                           aria-controls="nav-des" aria-selected="true">monday</a>
                                                        <a class="nav-item nav-link disabled" id="nav-tuesday-tab"
                                                           data-toggle="tab" href="#nav-tuesday" role="tab"
                                                           aria-controls="nav-tuesday" aria-selected="false">Tuesday</a>
                                                        <a class="nav-item nav-link disabled" id="nav-wed-tab"
                                                           data-toggle="tab" href="#nav-wed" role="tab"
                                                           aria-controls="nav-wed" aria-selected="false">Wednesday</a>
                                                        <a class="nav-item nav-link disabled" id="nav-thursday-tab"
                                                           data-toggle="tab" href="#nav-thursday" role="tab"
                                                           aria-controls="nav-thursday"
                                                           aria-selected="false">thursday</a>
                                                        <a class="nav-item nav-link disabled" id="nav-friday-tab"
                                                           data-toggle="tab" href="#nav-friday" role="tab"
                                                           aria-controls="nav-friday" aria-selected="false">friday</a>
                                                        <a class="nav-item nav-link disabled" id="nav-sat-tab"
                                                           data-toggle="tab" href="#nav-sat" role="tab"
                                                           aria-controls="nav-sat" aria-selected="false">Saturday</a>
                                                        <a class="nav-item nav-link disabled" id="nav-sunday-tab"
                                                           data-toggle="tab" href="#nav-sunday" role="tab"
                                                           aria-controls="nav-sunday" aria-selected="false">sunday</a>
                                                    </div>
                                                </nav>
                                                <div class="tab-content" id="nav-tabContent">
                                                    <div class="tab-pane fade show active" id="nav-des" role="tabpanel"
                                                         aria-labelledby="nav-des-tab">
                                                        <div class="clearfix"></div>
                                                        <div class="maain-tabble table-responsive">
                                                            <table
                                                                class="table table-striped table-bordered zero-configuration">
                                                                <thead>
                                                                <tr>
                                                                    <th>s.no</th>
                                                                    <th>Session Name</th>
                                                                    <th>Amount Paid</th>
                                                                    <th>Payment Date</th>
                                                                    <th>Date</th>
                                                                    <th>From</th>
                                                                    <th>To</th>
                                                                    <th>Status</th>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                <tr>
                                                                    <td>01</td>
                                                                    <td>Abc Session</td>
                                                                    <td>$123</td>
                                                                    <td>Dec-23-2019</td>
                                                                    <td>Dec-23-2019</td>
                                                                    <td>6PM</td>
                                                                    <td>4pm</td>
                                                                    <td>booked</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>01</td>
                                                                    <td>Abc Session</td>
                                                                    <td>$123</td>
                                                                    <td>Dec-23-2019</td>
                                                                    <td>Dec-23-2019</td>
                                                                    <td>6PM</td>
                                                                    <td>4pm</td>
                                                                    <td>Attended</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>01</td>
                                                                    <td>Abc Session</td>
                                                                    <td>$123</td>
                                                                    <td>Dec-23-2019</td>
                                                                    <td>Dec-23-2019</td>
                                                                    <td>6PM</td>
                                                                    <td>4pm</td>
                                                                    <td>Cancelled</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>01</td>
                                                                    <td>Abc Session</td>
                                                                    <td>$123</td>
                                                                    <td>Dec-23-2019</td>
                                                                    <td>Dec-23-2019</td>
                                                                    <td>6PM</td>
                                                                    <td>4pm</td>
                                                                    <td>Missed</td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <div class="tab-pane fade" id="nav-tuesday" role="tabpanel"
                                                         aria-labelledby="nav-tuesday-tab">
                                                    </div>
                                                    <div class="tab-pane fade" id="nav-wed" role="tabpanel"
                                                         aria-labelledby="nav-wed-tab">
                                                    </div>
                                                    <div class="tab-pane fade" id="nav-thursday" role="tabpanel"
                                                         aria-labelledby="nav-thursday-tab">
                                                    </div>
                                                    <div class="tab-pane fade" id="nav-friday" role="tabpanel"
                                                         aria-labelledby="nav-friday-tab">friday
                                                    </div>
                                                    <div class="tab-pane fade" id="nav-sat" role="tabpanel"
                                                         aria-labelledby="nav-sat-tab">sat
                                                    </div>
                                                    <div class="tab-pane fade" id="nav-sunday" role="tabpanel"
                                                         aria-labelledby="nav-sunday-tab">sunday
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h1>Session Details</h1>
                                    <div id="accordion" class="accordian-main">
                                        <div class="accordian table-acc">
                                            <div class="card-header" id="acc-one">
                                                <div id="pool-bet-accordian-div"
                                                     class=" d-flex justify-content-between align-items-center"
                                                     data-toggle="collapse" data-target=".pool-bet-acc"
                                                     aria-expanded="true" aria-controls="pool-bet-acc">
                                                    <h6>Multiple Session </h6>
                                                    <i id="icon-pool-bet" class="fa fa-angle-down"></i>
                                                </div>
                                            </div>
                                            <div class="collapse show pool-bet-acc" aria-labelledby="acc-one"
                                                 data-parent="#accordion">
                                                <nav>
                                                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                                        <a class="nav-item nav-link active" id="nav-m-des-tab"
                                                           data-toggle="tab" href="#nav-m-des" role="tab"
                                                           aria-controls="nav-m-des" aria-selected="true">monday</a>
                                                        <a class="nav-item nav-link " id="nav-m-tuesday-tab"
                                                           data-toggle="tab" href="#nav-m-tuesday" role="tab"
                                                           aria-controls="nav-m-tuesday"
                                                           aria-selected="false">Tuesday</a>
                                                        <a class="nav-item nav-link disabled" id="nav-m-wed-tab"
                                                           data-toggle="tab" href="#nav-m-wed" role="tab"
                                                           aria-controls="nav-m-wed" aria-selected="false">Wednesday</a>
                                                        <a class="nav-item nav-link " id="nav-m-thursday-tab"
                                                           data-toggle="tab" href="#nav-m-thursday" role="tab"
                                                           aria-controls="nav-m-thursday"
                                                           aria-selected="false">thursday</a>
                                                        <a class="nav-item nav-link disabled" id="nav-m-friday-tab"
                                                           data-toggle="tab" href="#nav-m-friday" role="tab"
                                                           aria-controls="nav-m-friday" aria-selected="false">friday</a>
                                                        <a class="nav-item nav-link disabled" id="nav-m-sat-tab"
                                                           data-toggle="tab" href="#nav-m-sat" role="tab"
                                                           aria-controls="nav-m-sat" aria-selected="false">Saturday</a>
                                                        <a class="nav-item nav-link disabled" id="nav-m-sunday-tab"
                                                           data-toggle="tab" href="#nav-m-sunday" role="tab"
                                                           aria-controls="nav-m-sunday" aria-selected="false">sunday</a>
                                                    </div>
                                                </nav>
                                                <div class="tab-content" id="nav-tabContent">
                                                    <div class="tab-pane fade show active" id="nav-m-des"
                                                         role="tabpanel" aria-labelledby="nav-m-des-tab">
                                                        <div class="clearfix"></div>
                                                        <div class="maain-tabble table-responsive">
                                                            <table
                                                                class="table table-striped table-bordered zero-configuration">
                                                                <thead>
                                                                <tr>
                                                                    <th>s.no</th>
                                                                    <th>Session Name</th>
                                                                    <th>Amount Paid</th>
                                                                    <th>Payment Date</th>
                                                                    <th>Date</th>
                                                                    <th>From</th>
                                                                    <th>To</th>
                                                                    <th>Status</th>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                <tr>
                                                                    <td>01</td>
                                                                    <td>Abc Session</td>
                                                                    <td>$123</td>
                                                                    <td>Dec-23-2019</td>
                                                                    <td>Dec-23-2019</td>
                                                                    <td>6PM</td>
                                                                    <td>4pm</td>
                                                                    <td>booked</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>01</td>
                                                                    <td>Abc Session</td>
                                                                    <td>$123</td>
                                                                    <td>Dec-23-2019</td>
                                                                    <td>Dec-23-2019</td>
                                                                    <td>6PM</td>
                                                                    <td>4pm</td>
                                                                    <td>Attended</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>01</td>
                                                                    <td>Abc Session</td>
                                                                    <td>$123</td>
                                                                    <td>Dec-23-2019</td>
                                                                    <td>Dec-23-2019</td>
                                                                    <td>6PM</td>
                                                                    <td>4pm</td>
                                                                    <td>Cancelled</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>01</td>
                                                                    <td>Abc Session</td>
                                                                    <td>$123</td>
                                                                    <td>Dec-23-2019</td>
                                                                    <td>Dec-23-2019</td>
                                                                    <td>6PM</td>
                                                                    <td>4pm</td>
                                                                    <td>Missed</td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <div class="tab-pane fade" id="nav-m-tuesday" role="tabpanel"
                                                         aria-labelledby="nav-m-tuesday-tab">
                                                        <div class="clearfix"></div>
                                                        <div class="maain-tabble table-responsive">
                                                            <table
                                                                class="table table-striped table-bordered zero-configuration">
                                                                <thead>
                                                                <tr>
                                                                    <th>s.no</th>
                                                                    <th>Session Name</th>
                                                                    <th>Amount Paid</th>
                                                                    <th>Payment Date</th>
                                                                    <th>Date</th>
                                                                    <th>From</th>
                                                                    <th>To</th>
                                                                    <th>Status</th>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                <tr>
                                                                    <td>01</td>
                                                                    <td>Abc Session</td>
                                                                    <td>$123</td>
                                                                    <td>Dec-23-2019</td>
                                                                    <td>Dec-23-2019</td>
                                                                    <td>6PM</td>
                                                                    <td>4pm</td>
                                                                    <td>booked</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>01</td>
                                                                    <td>Abc Session</td>
                                                                    <td>$123</td>
                                                                    <td>Dec-23-2019</td>
                                                                    <td>Dec-23-2019</td>
                                                                    <td>6PM</td>
                                                                    <td>4pm</td>
                                                                    <td>Attended</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>01</td>
                                                                    <td>Abc Session</td>
                                                                    <td>$123</td>
                                                                    <td>Dec-23-2019</td>
                                                                    <td>Dec-23-2019</td>
                                                                    <td>6PM</td>
                                                                    <td>4pm</td>
                                                                    <td>Cancelled</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>01</td>
                                                                    <td>Abc Session</td>
                                                                    <td>$123</td>
                                                                    <td>Dec-23-2019</td>
                                                                    <td>Dec-23-2019</td>
                                                                    <td>6PM</td>
                                                                    <td>4pm</td>
                                                                    <td>Missed</td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <div class="tab-pane fade" id="nav-m-wed" role="tabpanel"
                                                         aria-labelledby="nav-m-wed-tab">

                                                    </div>
                                                    <div class="tab-pane fade" id="nav-m-thursday" role="tabpanel"
                                                         aria-labelledby="nav-m-thursday-tab">
                                                        <div class="clearfix"></div>
                                                        <div class="maain-tabble table-responsive">
                                                            <table
                                                                class="table table-striped table-bordered zero-configuration">
                                                                <thead>
                                                                <tr>
                                                                    <th>s.no</th>
                                                                    <th>Session Name</th>
                                                                    <th>Amount Paid</th>
                                                                    <th>Payment Date</th>
                                                                    <th>Date</th>
                                                                    <th>From</th>
                                                                    <th>To</th>
                                                                    <th>Status</th>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                <tr>
                                                                    <td>01</td>
                                                                    <td>Abc Session</td>
                                                                    <td>$123</td>
                                                                    <td>Dec-23-2019</td>
                                                                    <td>Dec-23-2019</td>
                                                                    <td>6PM</td>
                                                                    <td>4pm</td>
                                                                    <td>booked</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>01</td>
                                                                    <td>Abc Session</td>
                                                                    <td>$123</td>
                                                                    <td>Dec-23-2019</td>
                                                                    <td>Dec-23-2019</td>
                                                                    <td>6PM</td>
                                                                    <td>4pm</td>
                                                                    <td>Attended</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>01</td>
                                                                    <td>Abc Session</td>
                                                                    <td>$123</td>
                                                                    <td>Dec-23-2019</td>
                                                                    <td>Dec-23-2019</td>
                                                                    <td>6PM</td>
                                                                    <td>4pm</td>
                                                                    <td>Cancelled</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>01</td>
                                                                    <td>Abc Session</td>
                                                                    <td>$123</td>
                                                                    <td>Dec-23-2019</td>
                                                                    <td>Dec-23-2019</td>
                                                                    <td>6PM</td>
                                                                    <td>4pm</td>
                                                                    <td>Missed</td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <div class="tab-pane fade" id="nav-m-friday" role="tabpanel"
                                                         aria-labelledby="nav-m-friday-tab">friday
                                                    </div>
                                                    <div class="tab-pane fade" id="nav-m-sat" role="tabpanel"
                                                         aria-labelledby="nav-m-sat-tab">sat
                                                    </div>
                                                    <div class="tab-pane fade" id="nav-m-sunday" role="tabpanel"
                                                         aria-labelledby="nav-m-sunday-tab">sunday
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="accordion" class="accordian-main">
                                        <div class="accordian table-acc">
                                            <div class="card-header" id="acc-one">
                                                <div id="friendly-bet-accordian-div"
                                                     class=" d-flex justify-content-between align-items-center"
                                                     data-toggle="collapse" data-target=".friendly-bet-acc"
                                                     aria-expanded="true" aria-controls="friendly-bet-acc">
                                                    <h6>Orders </h6>
                                                    <i id="icon-friendly-bet" class="fa fa-angle-down"></i>
                                                </div>
                                            </div>
                                            <div class="collapse show friendly-bet-acc" aria-labelledby="acc-one"
                                                 data-parent="#accordion">

                                                <div class="clearfix"></div>
                                                <div class="maain-tabble table-responsive">
                                                    <table
                                                        class="table table-striped table-bordered zero-configuration">
                                                        <thead>
                                                        <tr>
                                                            <th>s.no</th>
                                                            <th>Order ID</th>
                                                            <th>Amount Paid</th>
                                                            <th>Payment Date</th>
                                                            <th>Order Status</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td>01</td>
                                                            <td>001</td>
                                                            <td>$123</td>
                                                            <td>Feb-14-2020</td>
                                                            <td>In Process</td>
                                                        </tr>
                                                        <tr>
                                                            <td>01</td>
                                                            <td>001</td>
                                                            <td>$123</td>
                                                            <td>Feb-14-2020</td>
                                                            <td>Delivered</td>
                                                        </tr>

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </section>
    </div>
    </div>
</template>




<script>
export default {
            name:'edit',
            data(){
            return{
            user:'',   
            image:{}, 
            }     
            },
            created(){
           // alert(this.$route.params.id)    
            this.getUserById()
            },
            methods:{
            setImage(event){ 
            this.image  = event.target.files[0]
            //console.log(this.image)  
            },     
            getUserById(){
            axios({
            url:`api/auth/user/edit/${this.$route.params.id}`,
            method:'get'    
            }).then((response)=>{
            this.user = response.data.data
            console.log(response.data);    
            }).catch((err)=>{
            console.log(err.data.data) 
            }) 
            },       

           async update() {
                try {
                    let data = new FormData(this.$refs.UserEditForm);

                    for (const key in this.product) {
                        if (Array.isArray(this.product[key])) {
                        	if (key == 'secFiles') {
                                for (const fk in this.product[key]) {
                                    data.append(`secFiles[]`, this.product[key][fk]);
                                }
                            }

                        }

                        else {
                        }
                    }
                    let result = await axios.post(`api/auth/user/update/${this.$route.params.id}`, data);
                    if (result.data.data) {
                        this.$snotify.success("user updated successfully", "store");
                        this.$router.push({name: 'admin.users.index'});
                    } else {
                        this.$snotify.error("Error occur updating user", "store");
                    }
                } catch (e) {
                    console.log(e);
                }
            },
            
            }
     }

</script>