<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::group(['prefix'=>'auth','middleware' => ['json.response', 'localization']], function () {
	//Auth
	Route::post('login', [App\Http\Controllers\Api\AuthController::class, 'login'])->name('login');
    Route::post('contactUs', [App\Http\Controllers\Api\AuthController::class, 'contactUs'])->name('contactUs');
    Route::post('register', [App\Http\Controllers\Api\AuthController::class, 'register'])->name('register');
    Route::post('complete-profile', [App\Http\Controllers\Api\AuthController::class, 'completeProfile'])->name('completeProfile')->middleware('auth:api');
    Route::post('send/email', [App\Http\Controllers\Api\AuthController::class, 'sendForgotCode'])->name('sendForgotCode');
	Route::post('verify/code', [App\Http\Controllers\Api\AuthController::class, 'verifiedForgotCode'])->name('verifiedForgotCode');
	Route::post('new-password', [App\Http\Controllers\Api\AuthController::class, 'forgotPasswordChange'])->name('forgotPasswordChange');
	Route::get('getProfile', [App\Http\Controllers\Api\AuthController::class, 'getProfile'])->name('getProfile')->middleware('auth:api');
    Route::get('logout', [App\Http\Controllers\Api\AuthController::class, 'logout'])->name('logout')->middleware('auth:api');
    Route::post('profile', [App\Http\Controllers\Api\AuthController::class, 'AdminProfile'])->name('AdminProfile')->middleware('auth:api');
    Route::post('profile/update', [App\Http\Controllers\Api\AuthController::class, 'updateProfile'])->name('updateProfile')->middleware('auth:api');
	Route::post('changePassword', [App\Http\Controllers\Api\AuthController::class, 'changePassword'])->name('changePassword')->middleware('auth:api');
    Route::get('users',[App\Http\Controllers\Api\AuthController::class, 'getUsers'])->name('getUsers')->middleware('auth:api');
    Route::get('newusers',[App\Http\Controllers\Api\AuthController::class, 'getNewUsers'])->name('getNewUsers')->middleware('auth:api');
    Route::get('dashboardData',[App\Http\Controllers\Api\AuthController::class, 'dashboardData'])->name('dashboardData')->middleware('auth:api');
    Route::post('user/block/{id}', [App\Http\Controllers\Api\AuthController::class, 'userStatus'])->name('userStatus')->middleware('auth:api');
    Route::post('user/updateStatus/{id}', [App\Http\Controllers\Api\AuthController::class, 'updateStatus'])->name('updateStatus')->middleware('auth:api');
    Route::post('user/update/{id}', [App\Http\Controllers\Api\AuthController::class, 'updateUser'])->name('updateUser')->middleware('auth:api');  
    Route::get('user/view/{id}', [App\Http\Controllers\Api\AuthController::class, 'getUserById'])->name('getUserById')->middleware('auth:api');
    Route::get('user/edit/{id}', [App\Http\Controllers\Api\AuthController::class, 'getUserByEdit'])->name('getUserByEdit')->middleware('auth:api');
    Route::post('AdminChangePassword', [App\Http\Controllers\Api\AuthController::class, 'updatePassword'])->name('updatePassword')->middleware('auth:api');
    Route::post('/user/changePassword', [App\Http\Controllers\Api\AuthController::class, 'changeUserPassword'])->name('changeUserPassword')->middleware('auth:api');
    Route::post('updateCommission', [App\Http\Controllers\Api\AuthController::class, 'updateAdminCommission'])->name('updateAdminCommission')->middleware('auth:api');
    Route::get('get-countries', [App\Http\Controllers\Api\AuthController::class, 'getCountries'])->name('getCountries');
    Route::get('get-subscriptions', [App\Http\Controllers\Api\AuthController::class, 'getSubsriptions'])->name('getSubsriptions');

});


//subscriptions apis
Route::group(['prefix'=>'subscriptions','middleware'=>['auth:api']],function(){
    Route::get('index',[App\Http\Controllers\Api\PackageController::class, 'index'])->name('packages.index');
    Route::post('create',[App\Http\Controllers\Api\PackageController::class, 'create'])->name('packages.create');
    Route::get('edit/{id}',[App\Http\Controllers\Api\PackageController::class, 'getPackageById'])->name('packages.getPackageById');
    Route::post('update',[App\Http\Controllers\Api\PackageController::class, 'update'])->name('packages.update');
});


//payments apis
Route::group(['prefix' => 'payments','middleware'=>['auth:api']],function(){
    Route::get('index',[App\Http\Controllers\Api\PaymentController::class, 'index'])->name('index');
});


//bookings apis
Route::group(['prefix' => 'bookings','middleware'=>['auth:api']],function(){
    Route::get('index',[App\Http\Controllers\Api\BookingController::class, 'index'])->name('bookings.index');
    Route::get('show/{id}',[App\Http\Controllers\Api\BookingController::class, 'getBookingById']);
});


//feedback apis
Route::group(['prefix' => 'feedbacks','middleware'=>['auth:api']],function(){
    Route::get('index',[App\Http\Controllers\Api\FeedbackController::class, 'index'])->name('feedbacks.index');
    Route::get('show/{id}',[App\Http\Controllers\Api\FeedbackController::class, 'getFeedbackById'])->name('feedbacks.getFeedbackById');

});

//cms apis
Route::group(['prefix' => 'cmss','middleware'=>['auth:api']],function(){
    Route::get('index',[App\Http\Controllers\Api\CMSController::class, 'index'])->name('cms.index');
    Route::get('show/{id}',[App\Http\Controllers\Api\CMSController::class, 'show'])->name('cms.show');
    Route::post('update/{id}',[App\Http\Controllers\Api\CMSController::class, 'update'])->name('cms.update');
    Route::post('delete/{id}',[App\Http\Controllers\Api\CMSController::class, 'delete'])->name('cms.delete');
});


//users routes
Route::group(['prefix' => 'user','middleware'=>['auth:api']],function(){
//hotel apis
Route::group(['prefix' => 'hotels'],function(){
    Route::get('explore-places',[App\Http\Controllers\Api\HotelController::class, 'getPlaces'])->name('hotels.get-places');
    Route::get('/',[App\Http\Controllers\Api\HotelController::class, 'index'])->name('hotels.index');
    Route::post('search',[App\Http\Controllers\Api\HotelController::class, 'getSearchInfo'])->name('hotels.get-search-info');
    Route::post('fovirate',[App\Http\Controllers\Api\HotelController::class, 'makeFovirate'])->name('hotels.make-fovirate');
    Route::get('details/{id}',[App\Http\Controllers\Api\HotelController::class, 'hotelDetail'])->name('hotels.hotel-details');
    Route::post('add-review',[App\Http\Controllers\Api\HotelController::class, 'postReview'])->name('hotels.post-review');
    Route::get('get-reviews',[App\Http\Controllers\Api\HotelController::class, 'getReviews'])->name('hotels.get-reviews');
    Route::get('get-fillters-info',[App\Http\Controllers\Api\HotelController::class, 'getHotelsByFilter'])->name('hotels.get-fillters-info');
    Route::post('add-guest',[App\Http\Controllers\Api\HotelController::class, 'addGuest'])->name('hotels.add-guest');
    Route::get('get-guests',[App\Http\Controllers\Api\HotelController::class, 'getGuests'])->name('hotels.get-guests');
    Route::delete('delete-guest/{id}',[App\Http\Controllers\Api\HotelController::class, 'deleteGuest'])->name('hotels.delete-guest');
    Route::post('check-availablity',[App\Http\Controllers\Api\HotelController::class, 'checkHotelAvailablity'])->name('hotels.check-availablity');
    Route::post('create-booking',[App\Http\Controllers\Api\HotelController::class, 'createBooking'])->name('hotels.create-booking');

});

//cars apis
Route::group(['prefix' =>'cars'],function(){
    Route::get('/',[App\Http\Controllers\Api\CarController::class, 'index'])->name('cars.index');
    Route::get('get-fillters-info',[App\Http\Controllers\Api\CarController::class, 'getCarsByFilter'])->name('cars.get-fillters-info');
    Route::post('confirm-booking',[App\Http\Controllers\Api\CarController::class, 'confirmBooking'])->name('cars.confirm-booking');
});

//payments
Route::group(['prefix' =>'payments'],function(){
    Route::get('/',[App\Http\Controllers\Api\UserController::class, 'paymentsLogs'])->name('payments.index');
});

//subscriptions
Route::group(['prefix' =>'subscriptions'],function(){
    Route::get('/',[App\Http\Controllers\Api\UserController::class, 'subscriptions'])->name('payments.index');
    Route::post('cancel/{id}',[App\Http\Controllers\Api\UserController::class, 'cancelSubscription'])->name('payments.cancelSubscription');
});

});




Route::post('find-booking',[App\Http\Controllers\Api\CarController::class,'fetchData']);



