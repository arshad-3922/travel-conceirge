@extends('..layouts/web.app')
@section('title')
Register
@endsection
@section('content')
<div class="content-wrapper">
<div class="content-area signup">
		<div class="container">
			<div class="row mb-3 justify-content-center">
				<div class="col-md-8 col-lg-12 text-center">
					<h3 class="navy-text" data-aos="zoom-in" data-aos-easing="linear" data-aos-anchor-placement="bottom-bottom" data-aos-delay="800">Create Your Professional Account </h3 class="navy-text">
				</div>
			</div>

            <div class="row mb-5 justify-content-center">
				<div class="col-5 col-md-4 col-lg-4 col-xl-2 text-center my-4"> 
					<img src="{{asset('web-images/user-img.png')}}" alt="" class="img-fluid profile-details-img mb-1 position-relative">
					<label for="drag-files">
						<img src="{{asset('web-images/upload-icon.png')}}" class="img-fluid upload-icon" alt="">
					</label>
					<div class="d-none">
						<input type="file" name="" id="drag-files">
					</div>
				</div>
                <div class="col-12 text-left">
					<form action="">
						<div class="row mt-3">
							<div class="col-lg-12">
								<div class="row mb-lg-5">
									<!-- FULL NAME -->
									<div class="col-xl-6 col-lg-6 col-12 mb-xl-2 mb-lg-2 mb-md-3 mb-3">
										<p class="d-grey-text semi-bold mb-2">Full Name:</p>
										<input type="text" class="form-control form-control-sm site-input border-28 f-16 l-grey-text" placeholder="Enter Full Name">
									</div>

									<!-- PHONE NUMBER -->
									<div class="col-xl-6 col-lg-6 col-12 mb-xl-2 mb-lg-2 mb-md-3 mb-3">
										<p class="d-grey-text semi-bold mb-2">Phone No:</p>
										<input type="number" class="form-control form-control-sm site-input border-28 f-16 l-grey-text" placeholder="Enter Phone Number ">
									</div>
								</div>

								<div class="row mb-lg-5">
									<!-- Email Address -->
									<div class="col-xl-6 col-lg-6 col-12 mb-xl-2 mb-lg-2 mb-md-3 mb-3">
										<p class="d-grey-text semi-bold mb-2">Email Address:</p>
										<input type="email" class="form-control form-control-sm site-input border-28 f-16 l-grey-text" placeholder="Enter Email Address">
									</div>
									<!-- Country: -->
									<div class="col-xl-6 col-lg-6 col-12 mb-lg-2 mb-md-5 mb-4">
										<p class="d-grey-text semi-bold mb-2">Country:</p>
										<select name="" id="" class="site-input select-box">
											<option value="Afghanistan">Afghanistan</option>
											<option value="??land Islands">??land Islands</option>
											<option value="Albania">Albania</option>
											<option value="Algeria">Algeria</option>
											<option value="American Samoa">American Samoa</option>
											<option value="Andorra">Andorra</option>
											<option value="Angola">Angola</option>
											<option value="Anguilla">Anguilla</option>
											<option value="Antarctica">Antarctica</option>
											<option value="Antigua and Barbuda">Antigua and Barbuda</option>
											<option value="Argentina">Argentina</option>
											<option value="Armenia">Armenia</option>
											<option value="Aruba">Aruba</option>
											<option value="Australia">Australia</option>
											<option value="Austria">Austria</option>
											<option value="Azerbaijan">Azerbaijan</option>
											<option value="Bahamas">Bahamas</option>
											<option value="Bahrain">Bahrain</option>
											<option value="Bangladesh">Bangladesh</option>
											<option value="Barbados">Barbados</option>
											<option value="Belarus">Belarus</option>
											<option value="Belgium">Belgium</option>
											<option value="Belize">Belize</option>
											<option value="Benin">Benin</option>
											<option value="Bermuda">Bermuda</option>
											<option value="Bhutan">Bhutan</option>
											<option value="Bolivia">Bolivia</option>
											<option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
											<option value="Botswana">Botswana</option>
											<option value="Bouvet Island">Bouvet Island</option>
											<option value="Brazil">Brazil</option>
											<option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
											<option value="Brunei Darussalam">Brunei Darussalam</option>
											<option value="Bulgaria">Bulgaria</option>
											<option value="Burkina Faso">Burkina Faso</option>
											<option value="Burundi">Burundi</option>
											<option value="Cambodia">Cambodia</option>
											<option value="Cameroon">Cameroon</option>
											<option value="Canada">Canada</option>
											<option value="Cape Verde">Cape Verde</option>
											<option value="Cayman Islands">Cayman Islands</option>
											<option value="Central African Republic">Central African Republic</option>
											<option value="Chad">Chad</option>
											<option value="Chile">Chile</option>
											<option value="China">China</option>
											<option value="Christmas Island">Christmas Island</option>
											<option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
											<option value="Colombia">Colombia</option>
											<option value="Comoros">Comoros</option>
											<option value="Congo">Congo</option>
											<option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
											<option value="Cook Islands">Cook Islands</option>
											<option value="Costa Rica">Costa Rica</option>
											<option value="Cote D'ivoire">Cote D'ivoire</option>
											<option value="Croatia">Croatia</option>
											<option value="Cuba">Cuba</option>
											<option value="Cyprus">Cyprus</option>
											<option value="Czech Republic">Czech Republic</option>
											<option value="Denmark">Denmark</option>
											<option value="Djibouti">Djibouti</option>
											<option value="Dominica">Dominica</option>
											<option value="Dominican Republic">Dominican Republic</option>
											<option value="Ecuador">Ecuador</option>
											<option value="Egypt">Egypt</option>
											<option value="El Salvador">El Salvador</option>
											<option value="Equatorial Guinea">Equatorial Guinea</option>
											<option value="Eritrea">Eritrea</option>
											<option value="Estonia">Estonia</option>
											<option value="Ethiopia">Ethiopia</option>
											<option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
											<option value="Faroe Islands">Faroe Islands</option>
											<option value="Fiji">Fiji</option>
											<option value="Finland">Finland</option>
											<option value="France">France</option>
											<option value="French Guiana">French Guiana</option>
											<option value="French Polynesia">French Polynesia</option>
											<option value="French Southern Territories">French Southern Territories</option>
											<option value="Gabon">Gabon</option>
											<option value="Gambia">Gambia</option>
											<option value="Georgia">Georgia</option>
											<option value="Germany">Germany</option>
											<option value="Ghana">Ghana</option>
											<option value="Gibraltar">Gibraltar</option>
											<option value="Greece">Greece</option>
											<option value="Greenland">Greenland</option>
											<option value="Grenada">Grenada</option>
											<option value="Guadeloupe">Guadeloupe</option>
											<option value="Guam">Guam</option>
											<option value="Guatemala">Guatemala</option>
											<option value="Guernsey">Guernsey</option>
											<option value="Guinea">Guinea</option>
											<option value="Guinea-bissau">Guinea-bissau</option>
											<option value="Guyana">Guyana</option>
											<option value="Haiti">Haiti</option>
											<option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
											<option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
											<option value="Honduras">Honduras</option>
											<option value="Hong Kong">Hong Kong</option>
											<option value="Hungary">Hungary</option>
											<option value="Iceland">Iceland</option>
											<option value="India">India</option>
											<option value="Indonesia">Indonesia</option>
											<option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
											<option value="Iraq">Iraq</option>
											<option value="Ireland">Ireland</option>
											<option value="Isle of Man">Isle of Man</option>
											<option value="Israel">Israel</option>
											<option value="Italy">Italy</option>
											<option value="Jamaica">Jamaica</option>
											<option value="Japan">Japan</option>
											<option value="Jersey">Jersey</option>
											<option value="Jordan">Jordan</option>
											<option value="Kazakhstan">Kazakhstan</option>
											<option value="Kenya">Kenya</option>
											<option value="Kiribati">Kiribati</option>
											<option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
											<option value="Korea, Republic of">Korea, Republic of</option>
											<option value="Kuwait">Kuwait</option>
											<option value="Kyrgyzstan">Kyrgyzstan</option>
											<option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
											<option value="Latvia">Latvia</option>
											<option value="Lebanon">Lebanon</option>
											<option value="Lesotho">Lesotho</option>
											<option value="Liberia">Liberia</option>
											<option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
											<option value="Liechtenstein">Liechtenstein</option>
											<option value="Lithuania">Lithuania</option>
											<option value="Luxembourg">Luxembourg</option>
											<option value="Macao">Macao</option>
											<option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
											<option value="Madagascar">Madagascar</option>
											<option value="Malawi">Malawi</option>
											<option value="Malaysia">Malaysia</option>
											<option value="Maldives">Maldives</option>
											<option value="Mali">Mali</option>
											<option value="Malta">Malta</option>
											<option value="Marshall Islands">Marshall Islands</option>
											<option value="Martinique">Martinique</option>
											<option value="Mauritania">Mauritania</option>
											<option value="Mauritius">Mauritius</option>
											<option value="Mayotte">Mayotte</option>
											<option value="Mexico">Mexico</option>
											<option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
											<option value="Moldova, Republic of">Moldova, Republic of</option>
											<option value="Monaco">Monaco</option>
											<option value="Mongolia">Mongolia</option>
											<option value="Montenegro">Montenegro</option>
											<option value="Montserrat">Montserrat</option>
											<option value="Morocco">Morocco</option>
											<option value="Mozambique">Mozambique</option>
											<option value="Myanmar">Myanmar</option>
											<option value="Namibia">Namibia</option>
											<option value="Nauru">Nauru</option>
											<option value="Nepal">Nepal</option>
											<option value="Netherlands">Netherlands</option>
											<option value="Netherlands Antilles">Netherlands Antilles</option>
											<option value="New Caledonia">New Caledonia</option>
											<option value="New Zealand">New Zealand</option>
											<option value="Nicaragua">Nicaragua</option>
											<option value="Niger">Niger</option>
											<option value="Nigeria">Nigeria</option>
											<option value="Niue">Niue</option>
											<option value="Norfolk Island">Norfolk Island</option>
											<option value="Northern Mariana Islands">Northern Mariana Islands</option>
											<option value="Norway">Norway</option>
											<option value="Oman">Oman</option>
											<option value="Pakistan">Pakistan</option>
											<option value="Palau">Palau</option>
											<option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
											<option value="Panama">Panama</option>
											<option value="Papua New Guinea">Papua New Guinea</option>
											<option value="Paraguay">Paraguay</option>
											<option value="Peru">Peru</option>
											<option value="Philippines">Philippines</option>
											<option value="Pitcairn">Pitcairn</option>
											<option value="Poland">Poland</option>
											<option value="Portugal">Portugal</option>
											<option value="Puerto Rico">Puerto Rico</option>
											<option value="Qatar">Qatar</option>
											<option value="Reunion">Reunion</option>
											<option value="Romania">Romania</option>
											<option value="Russian Federation">Russian Federation</option>
											<option value="Rwanda">Rwanda</option>
											<option value="Saint Helena">Saint Helena</option>
											<option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
											<option value="Saint Lucia">Saint Lucia</option>
											<option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
											<option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
											<option value="Samoa">Samoa</option>
											<option value="San Marino">San Marino</option>
											<option value="Sao Tome and Principe">Sao Tome and Principe</option>
											<option value="Saudi Arabia">Saudi Arabia</option>
											<option value="Senegal">Senegal</option>
											<option value="Serbia">Serbia</option>
											<option value="Seychelles">Seychelles</option>
											<option value="Sierra Leone">Sierra Leone</option>
											<option value="Singapore">Singapore</option>
											<option value="Slovakia">Slovakia</option>
											<option value="Slovenia">Slovenia</option>
											<option value="Solomon Islands">Solomon Islands</option>
											<option value="Somalia">Somalia</option>
											<option value="South Africa">South Africa</option>
											<option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
											<option value="Spain">Spain</option>
											<option value="Sri Lanka">Sri Lanka</option>
											<option value="Sudan">Sudan</option>
											<option value="Suriname">Suriname</option>
											<option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
											<option value="Swaziland">Swaziland</option>
											<option value="Sweden">Sweden</option>
											<option value="Switzerland">Switzerland</option>
											<option value="Syrian Arab Republic">Syrian Arab Republic</option>
											<option value="Taiwan">Taiwan</option>
											<option value="Tajikistan">Tajikistan</option>
											<option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
											<option value="Thailand">Thailand</option>
											<option value="Timor-leste">Timor-leste</option>
											<option value="Togo">Togo</option>
											<option value="Tokelau">Tokelau</option>
											<option value="Tonga">Tonga</option>
											<option value="Trinidad and Tobago">Trinidad and Tobago</option>
											<option value="Tunisia">Tunisia</option>
											<option value="Turkey">Turkey</option>
											<option value="Turkmenistan">Turkmenistan</option>
											<option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
											<option value="Tuvalu">Tuvalu</option>
											<option value="Uganda">Uganda</option>
											<option value="Ukraine">Ukraine</option>
											<option value="United Arab Emirates">United Arab Emirates</option>
											<option value="United Kingdom">United Kingdom</option>
											<option value="United States">United States</option>
											<option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
											<option value="Uruguay">Uruguay</option>
											<option value="Uzbekistan">Uzbekistan</option>
											<option value="Vanuatu">Vanuatu</option>
											<option value="Venezuela">Venezuela</option>
											<option value="Viet Nam">Viet Nam</option>
											<option value="Virgin Islands, British">Virgin Islands, British</option>
											<option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
											<option value="Wallis and Futuna">Wallis and Futuna</option>
											<option value="Western Sahara">Western Sahara</option>
											<option value="Yemen">Yemen</option>
											<option value="Zambia">Zambia</option>
											<option value="Zimbabwe">Zimbabwe</option>
										</select>
									</div>
								</div>

							
								<div class="row mb-lg-5">
									<!-- WORK CATEGORIES -->
									<div class="col-xl-6 col-lg-6 col-12 mb-xl-2 mb-lg-2 mb-md-3 mb-3">
											<p class="d-grey-text semi-bold mb-2">Select Category of work:</p>
										<div class="tag-box">
											<span class="tag">Abc <a href="#_"><i class="fas fa-times-circle"></i></a></span>
											<span class="tag">Abc <a href="#_"><i class="fas fa-times-circle"></i></a></span>
										</div>
										<select name="" id="" class="site-input">
											<option value="">Search</option>
											<option value="">ABC</option>
											<option value="">XYZ</option>
											<option value="">ASD</option>
											<option value="">LOP</option>
										</select>
									</div>

									<!-- SERVICES-->
									<div class="col-xl-6 col-lg-6 col-12 mb-xl-2 mb-lg-2 mb-md-3 mb-3">
										<p class="d-grey-text semi-bold mb-2">List your Services:</p>
										<div class="tag-box">
											<span class="tag">Abc <a href="#_"><i class="fas fa-times-circle"></i></a></span>
											<span class="tag">Abc <a href="#_"><i class="fas fa-times-circle"></i></a></span>
										</div>
										<select name="" id="" class="site-input">
											<option value="">Search</option>
											<option value="">ABC</option>
											<option value="">XYZ</option>
											<option value="">ASD</option>
											<option value="">LOP</option>
										</select>
									</div>
								</div>

								<div class="row mb-lg-5">
									<div class="col-12">
										<h5 class="semi-bold d-grey-text f-28">Portfolio:</h5>
											<div class="upload-files py-5 px-1 my-1 d-flex justify-content-center">
												<div class="drop-zone">
													<h5 class="d-grey-text">Drag and drop files here</h5>
												</div>
											</div>
									</div>
									<div class="col-12 my-4">
										<div class="d-flex align-items-center justify-content-center cta-buttons">
											<a href="pro-sign-up.php" class="darkblue-cta mx-3" data-aos="zoom-in" data-aos-easing="linear" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="900">Add More</a>
										</div>
									</div>
									
								</div>

								<div class="row mb-lg-5">
									<!-- Where you word-->
									<div class="col-12 mb-xl-2 mb-lg-2 mb-md-3 mb-3"> 
										<p class="d-grey-text semi-bold mb-2">Where do you Work:</p>
										<input type="text" class="form-control form-control-sm site-input border-28 f-16 l-grey-text" placeholder="Enter Work Location">
									</div>
								</div>

								<div class="row mb-lg-5">
									<!-- New Password -->
									<div class="col-xl-6 col-lg-6 mb-xl-2 mb-lg-2 mb-md-3 mb-3">
										<p class="d-grey-text semi-bold mb-2">New Password:</p>
                                        <div class="form-field">
                                            <input type="password" class="site-input both-icon enter-input" placeholder="Enter New Password" name="" id="">
                                            <i class="fa fa-eye-slash enter-icon right-icon" aria-hidden="true"></i>
                                        </div>
                                    </div>

									<!-- Confirm Password -->
									<div class="col-xl-6 col-lg-6 col-12 mb-xl-2 mb-lg-2 mb-md-3 mb-3"> 
										<p class="d-grey-text semi-bold mb-2">Confirm New Password:</p>
									<div class="form-field">
                                            <input type="password" class="site-input both-icon enter-input" placeholder="Confirm New Password" name="" id="">
                                            <i class="fa fa-eye-slash enter-icon right-icon" aria-hidden="true"></i>
                                        </div>
									</div>
								</div>

								<div class="row text-center">
									<div class="col-6 col-md-4 mt-3 mx-auto">
                                        <button class="rounded-pill w-100 btn darkblue-cta px-1 py-2 border-100" data-aos-anchor-placement="bottom-bottom" data-toggle="modal" data-target=".signupRequest" data-dismiss="modal" aria-label="Close">Sign up</button>
                                    </div>

									<div class="col-12 mt-3">
									<span class="navy-text mx-1">Already have an account?</span><a href="#" class="forgot-link" data-toggle="modal" data-target=".proLogin" data-dismiss="modal" aria-label="Close"> Login</a>
									</div>
								</div>

							</div>
						</div>
					</form>
                </div>
            </div>
		</div>
	</div>
</div>
@endsection