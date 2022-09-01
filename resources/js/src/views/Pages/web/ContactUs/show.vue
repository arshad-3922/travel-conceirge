<template>
	<div class="content-wrapper">
        <div class="content-body">
            <!-- Basic form layout section start -->
            <section id="configuration">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-content collapse show">
                                <div class="card-dashboard pb-1">
                                    <div class="row px-2">
                                        <div class="col-12">
                                            <router-link :to="{name: 'admin.contactUs.index'}"><h3 class="mb-2 d-blue-text bold"><i class="fas fa-angle-left"></i> Contact Us</h3></router-link>
                                        </div>
                                        <div class="col-sm-6 d-flex align-items-center">
                                            <p class="yellow-text">Name: <span class="black-text">Peter Williams</span></p>
                                        </div>
                                        <div class="col-sm-6 d-flex align-items-center">
                                            <p class="yellow-text">Email: <span class="black-text">peter@email.com</span></p>
                                        </div>
                                        <div class="col-12 pb-5">
                                            <p class="yellow-text mb-1">Message</p>
                                            <p class="black-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</p>
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