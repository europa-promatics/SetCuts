var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ENV } from '../../app/env';
import { LoginModel } from '../../models/current';
var ServicesProvider = /** @class */ (function () {
    function ServicesProvider(http) {
        this.http = http;
        console.log('Hello ServicesProvider Provider');
        this.loginmodel = new LoginModel();
    }
    /////////////////////////////////////////////////////////Notfication Service /////////////////////////////////////////////////////////////////////////
    ServicesProvider.prototype.notification = function (item) {
        return this.http.post(ENV.endPoint + 'bookingCount.json', {
            barber_id: item
        })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return error;
        });
    };
    /////////////////////////////////////////////////////////Notfication status Active /////////////////////////////////////////////////////////////////////////
    ServicesProvider.prototype.notficationstatus = function (id, status) {
        return this.http.post(ENV.endPoint + 'bookingConfirm.json', {
            booking_id: id,
            bookingstatus: status
        })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return error;
        });
    };
    /////////////////////////////////////////////////////////Salon home service /////////////////////////////////////////////////////////////////////////
    ServicesProvider.prototype.salonhome = function () {
        return this.http.get(ENV.endPoint + 'salonImageShow.json')
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return error;
        });
    };
    ///////////////////////////////////////////////////////user notification /////////////////////////////////////////////////////////////////////////////
    ServicesProvider.prototype.userNotification = function (id) {
        return this.http.post(ENV.endPoint + 'bookingConfirmInfo.json', {
            customer_id: id,
        })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return error;
        });
    };
    ///////////////////React Native ////////////////////////
    ServicesProvider.prototype.react_service = function () {
        var a = 'iVBORw0KGgoAAAANSUhEUgAAAIAAAABQCAIAAABeYuqzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDU3RUFFODk3Mzc4MTFFNzlFQTlGMzc5MjNBMTNDQjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDU3RUFFOEE3Mzc4MTFFNzlFQTlGMzc5MjNBMTNDQjYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NTdFQUU4NzczNzgxMUU3OUVBOUYzNzkyM0ExM0NCNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NTdFQUU4ODczNzgxMUU3OUVBOUYzNzkyM0ExM0NCNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pj35zjMAABY8SURBVHja7DwHeFRV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';
        return this.http.post('http://ionicteam.com:8080/api/addRecipes', {
            email: 'r@gmail.com',
            mainImage: 'hjj.jpeg',
            recipeTitle: 'fghfhfh',
            description: 'gdfgfd',
            duration: '678',
            level: '56',
            kosher: 'fdfghb',
            notKosher: 'gfhjgfj',
            categories: 'fghgfh',
            ingredients: ['a', 'b', 'c'],
            instructions: ['d', 'e', 'f'],
            recipeImages: a,
        })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return error;
        });
    };
    ///////////////////////////////////////////////////Add rating//////////////////////////////////////////////////////////////////////////////////////////
    ServicesProvider.prototype.addrating = function (customerid, rating_text, rating_count, salon_id) {
        return this.http.post(ENV.endPoint + 'rating.json', {
            customer_id: customerid,
            salon_id: salon_id,
            rating: rating_count,
            description: rating_text,
        })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return error;
        });
    };
    ////////////////////////////////////////////////////////////User Rating View Detail page /////////////////////////////////////////////////////////////////
    ServicesProvider.prototype.Review_rating = function (salon_id) {
        return this.http.post(ENV.endPoint + 'customerInfoAccRating.json', {
            salon_id: salon_id,
        })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return error;
        });
    };
    //////////////////////////////////////////fav status ////////////////////////////////////////////////////////////////////////////////////////////////
    ServicesProvider.prototype.favstatus = function (customerid, salon_id) {
        return this.http.post(ENV.endPoint + 'salonFavouritestatus.json', {
            customer_id: customerid,
            salon_id: salon_id,
        })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return error;
        });
    };
    ////////////////////////////////////////////////////////////////////////Add Favourite /////////////////////////////////////////////////////////////////////
    ServicesProvider.prototype.addtofav = function (customerid, salon_id) {
        return this.http.post(ENV.endPoint + 'addFavouritesalon.json', {
            customer_id: customerid,
            salon_id: salon_id,
        })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return error;
        });
    };
    ////////////////////////////////////////////////////////////////////FAQ////////////////////////////////////////////////////////////////////
    ServicesProvider.prototype.FAQ = function () {
        return this.http.get(ENV.endPoint + 'manageFaq.json')
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return error;
        });
    };
    ///////////////////////////////////////GET salon service in barber registration page ///////////////////////////////////////////////////////////////////
    ServicesProvider.prototype.Getsalonservices = function (r) {
        return this.http.post(ENV.endPoint + 'getSalonServices.json', {
            salon_id: r
        })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return error;
        });
    };
    /////////////////////////////////////////////////////////////////////////////About Us ////////////////////////////////////////////////////////////////////////
    ServicesProvider.prototype.About_us = function () {
        return this.http.get(ENV.endPoint + 'aboutUs.json')
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return error;
        });
    };
    ////////////////////////////////////////////////////////////////////Barber Rating //////////////////////////////////////////////////////////////////////////////////
    ServicesProvider.prototype.addrating_barber = function (user_id, barber_id, descr, count, booking_id, flag) {
        return this.http.post(ENV.endPoint + 'barberRating.json', {
            customer_id: user_id,
            barber_id: barber_id,
            description: descr,
            rating: count,
            booking_id: booking_id,
            flag: flag
        })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return error;
        });
    };
    ServicesProvider.prototype.barbergetReview_rating = function (barber_id) {
        return this.http.post(ENV.endPoint + 'barberRatingInfo.json', {
            barber_id: barber_id,
        })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return error;
        });
    };
    ////////////////////////////////////////////////////////////barber-submit-online/offline-status///////////////////////////////////////////////////////////////////////////
    ServicesProvider.prototype.Status = function (barber_id, status) {
        return this.http.post(ENV.endPoint + 'barberOnlineOfflineStatus.json', {
            id: barber_id,
            barber_status: status,
        })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return error;
        });
    };
    /////////////////////////////////////////////////////////////////////////////user-barber-list///////////////////////////////////////////////////////////////////
    ServicesProvider.prototype.userbarberlist = function (salonid) {
        return this.http.post(ENV.endPoint + 'barberInfo', {
            salonid: salonid,
        })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return error;
        });
    };
    ///////////////////////////////////////////////////////Check Barber Status online/offline /////////////////////////////////////////////////
    ServicesProvider.prototype.barberstatuscheck = function (barberid) {
        return this.http.post(ENV.endPoint + 'barberOnlineOfflineStatusInfo.json', {
            barber_id: barberid,
        })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return error;
        });
    };
    /////////////////////////////////////////////////////// barber information ///////////////////////////////////////////////
    ServicesProvider.prototype.barberInfo = function (barberid) {
        return this.http.post(ENV.endPoint + 'barberInfoById.json', {
            barber_id: barberid,
        })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return error;
        });
    };
    ///////////////////////////////////////////////////////////Payment status ///////////////////////////////////////////////////////
    ServicesProvider.prototype.PayStatus = function (booking_id, user_id, paystatus) {
        return this.http.post(ENV.endPoint + 'paymentStatus.json', {
            booking_id: booking_id,
            customer_id: user_id,
            paystatus: paystatus
        })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return error;
        });
    };
    /////////////////////////////////////////////////////////////////// User-Appointment list //////////////////////////////////////////////////////
    ServicesProvider.prototype.User_appointment = function (user_id) {
        return this.http.post(ENV.endPoint + 'customerAppointmentList.json', {
            customer_id: user_id,
        })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return error;
        });
    };
    ////////////////////////////////////////////////////////////  Barber Appointment  ///////////////////////////////////////////////////////////////////////////
    ServicesProvider.prototype.barber_appointment = function (barber_id) {
        return this.http.post(ENV.endPoint + 'barberAppointmentList.json', {
            barber_id: barber_id,
        })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return error;
        });
    };
    /////////////////////////////////////////////////////////// How It Works /////////////////////////////////////////////
    ServicesProvider.prototype.HowItWorks = function () {
        return this.http.get(ENV.endPoint + 'howItWorks.json')
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return error;
        });
    };
    ///////////////////////////////////////Payment service ///////////////////////////////////////////////////////////////////////
    ServicesProvider.prototype.payment_service = function (user_id, bookingid, payment_id, pay_state, paystatus) {
        return this.http.post(ENV.endPoint + 'paymentConfirmation.json', {
            user_id: user_id,
            payment_id: payment_id,
            bookingid: bookingid,
            pay_state: pay_state,
            pay_status: paystatus,
        })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return error;
        });
    };
    ////////////////////////////////////////////////////////Login with Facebook //////////////////////////////////
    ServicesProvider.prototype.Facebook = function (email, username, fb_id, user_type, img) {
        return this.http.post(ENV.endPoint + 'facebookLogin.json', {
            email: email,
            fullname: username,
            facebook_id: fb_id,
            usertype: user_type,
            image: img,
        })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return error;
        });
    };
    ///////////////////////////////////////////////////Favourite list show ////////////////////////////////////////////
    ServicesProvider.prototype.FavList = function (user_id) {
        return this.http.post(ENV.endPoint + 'showFavouriteSalon.json', {
            customer_id: user_id,
        })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return error;
        });
    };
    /////////////////////////////////////////////////////////User-payment-list /////////////////////////////////////////
    ServicesProvider.prototype.userPayment_list = function (user_id) {
        return this.http.post(ENV.endPoint + 'customerPaymentList.json', {
            customer_id: user_id,
        })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return error;
        });
    };
    //////////////////////////////////////////// Check Last booking of User this barber /////////////////////////////////////
    ServicesProvider.prototype.barber_booking_user_check = function (barber_id, user_id) {
        return this.http.post(ENV.endPoint + 'customerBookingInformation.json', {
            customer_id: user_id,
            barber_id: barber_id,
        })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return error;
        });
    };
    //////////////////////////////////////////////////////Check last booking of user this salon/////////////////////////////////////
    ServicesProvider.prototype.salon_booking_user_check = function (salon_id, user_id) {
        return this.http.post(ENV.endPoint + 'salonBookingInformation.json', {
            customer_id: user_id,
            salon_id: salon_id,
        })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return error;
        });
    };
    ///////////////////////////////////////////////Success payment info ///////////////////////////////////////
    ServicesProvider.prototype.SuccessPaymentStatus = function (booking_id) {
        return this.http.post(ENV.endPoint + 'successPaymentStatus.json', {
            booking_id: booking_id,
        })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return error;
        });
    };
    /////////////////////////////////////////////////////Customer location Latitude or longitude ////////////////////
    ServicesProvider.prototype.customer_location = function (lat, long, user_id) {
        return this.http.post(ENV.endPoint + 'updateCustomerLatitudeLongitude.json', {
            latitude: lat,
            longitude: long,
            customer_id: user_id
        })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return error;
        });
    };
    /////////////////////////////////////////////////////////Salon payment ///////////////////////////////////////////////////////
    ServicesProvider.prototype.salon_payment = function (salon_id) {
        return this.http.post(ENV.endPoint + 'salonAppointmentList.json', {
            salon_id: salon_id
        })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return error;
        });
    };
    ////////////////////////////////////////////////////Salon-APPointment ///////////////////////////////////////////////////////
    ServicesProvider.prototype.salonAppointment = function (salon_id) {
        return this.http.post(ENV.endPoint + 'salonCheckAppointmentByDate.json', {
            salon_id: salon_id
        })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return error;
        });
    };
    /////////////////////////////////////////////////Salon-view-user_profile /////////////////////////////////////
    ServicesProvider.prototype.salon_view_user_profile = function (customer_id) {
        return this.http.post(ENV.endPoint + 'customerViewProfile.json', {
            customer_id: customer_id
        })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return error;
        });
    };
    ///////////////////////////////////////////Check barber availability /////////////////////////////////////////
    ServicesProvider.prototype.proceed_form = function (barber_id, service_id, date, timeStarts, user_id) {
        return this.http.post(ENV.endPoint + 'booking.json', {
            barber_id: barber_id,
            service_id: service_id,
            date: date,
            time: timeStarts,
            customer_id: user_id,
        })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return error;
        });
    };
    ///////////////////////////////////////Salon side Barber Schedule //////////////////////////////////////////
    ServicesProvider.prototype.salon_add_barber_schedule = function (salon_id, barber_id, date, qote) {
        return this.http.post(ENV.endPoint + 'barberSchedule.json', {
            barber_id: barber_id,
            salon_id: salon_id,
            date: date,
            time: qote,
        })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return error;
        });
    };
    /////////////////////////////////////Barber Schedule ///////////////////////////////////////////////////
    ServicesProvider.prototype.barber_schedule = function (barber_id, date) {
        return this.http.post(ENV.endPoint + 'barberScheduleByBarberId.json', {
            barber_id: barber_id,
            date: date
        })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return error;
        });
    };
    //////////////////////////////////////////////Salon-barber-list ///////////////////////////////////////////////
    ServicesProvider.prototype.salon_barber_list = function (salon_id) {
        return this.http.post(ENV.endPoint + 'barberInfo', {
            salonid: salon_id,
        })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return error;
        });
    };
    ///////////////////////////////////Terms of Service ///////////////////////////////////////////////////////
    ServicesProvider.prototype.TermsofService = function () {
        return this.http.get(ENV.endPoint + 'termsConditions.json')
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return error;
        });
    };
    ///////////////////////////////////////Salon View All barber list or appointment ///////////////////////////////
    ServicesProvider.prototype.salon_view_appointment = function (salon_id, date) {
        return this.http.post(ENV.endPoint + 'barberScheduleBySalonId.json', {
            salon_id: salon_id,
            date: date,
        })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return error;
        });
    };
    ////////////////////////////////////////////Complete service from salon'owner side //////////////////////////////
    ServicesProvider.prototype.Complete_service = function (booking_id, service) {
        return this.http.post(ENV.endPoint + 'serviceConfirmStatus.json', {
            booking_id: booking_id,
            service_complete_status: service,
        })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return error;
        });
    };
    ////////////////////////////////////Check_review_rating//////////////////////////////////////////////////
    ServicesProvider.prototype.Check_review_rating = function (booking_id) {
        return this.http.post(ENV.endPoint + 'reviewRatingByBookingId.json', {
            booking_id: booking_id,
        })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return error;
        });
    };
    ///////////////////////////////Booking through call ////////////////////////////////////////
    ServicesProvider.prototype.bookingbyCall = function (service, customer_name, phonenumber, callselectedtime, callbarbername, callbarberid, date) {
        return this.http.post(ENV.endPoint + 'custombooking.json', {
            customer_name: customer_name,
            phone_number: phonenumber,
            time: callselectedtime,
            barber_id: callbarberid,
            service: service,
            date: date
        })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return error;
        });
    };
    //////////////////////////BookingIndexStatusChanged/////////////////////////////
    ServicesProvider.prototype.BookingIndexStatusChanged = function (index, user_id) {
        return this.http.post(ENV.endPoint + 'bookingConfirmInfoIndexStatusChanged.json', {
            customer_id: user_id,
            array_index: index
        })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return error;
        });
    };
    //////////////////////////////Demo pay ///////////////////////////////////////
    /////////////////..............Customer_apyment_history........../////////////////////////////
    ServicesProvider.prototype.Customer_payment_history = function (customer_id) {
        return this.http.post(ENV.endPoint + 'customerPaymentHistory.json', {
            customer_id: customer_id,
        })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return error;
        });
    };
    /////////////////....................salon_payment_history....////////////////////////////////////
    ServicesProvider.prototype.salon_payment_history = function (salon_id) {
        return this.http.post(ENV.endPoint + 'salonPaymentHistory.json', {
            salon_id: salon_id,
        })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return error;
        });
    };
    /////////////////////barber Check availability according to time //////////////////
    ServicesProvider.prototype.check_availabilty = function (date, time, barber_id) {
        return this.http.post(ENV.endPoint + 'barberAvailablityOnDatetime.json', {
            date: date,
            time: time,
            barber_id: barber_id
        })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return error;
        });
    };
    ////////////////////////App Payment ///////////////////////////////////////
    ServicesProvider.prototype.App_single_Payment = function (user_id, booking_id, response_id, trans_status, transaction_status1, barber_id, salon_id, book_charges, book_service) {
        return this.http.post(ENV.endPoint + 'appSinglePayment.json', {
            user_id: user_id,
            bookingid: booking_id,
            transaction_id1: response_id,
            trans_status: trans_status,
            transaction_status1: transaction_status1,
            barber_id: barber_id,
            salon_id: salon_id,
            totalamount: book_charges,
            memo: book_service
        })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return error;
        });
    };
    ////////////////////Salon single payment earnings //////////////////////
    ServicesProvider.prototype.Myearning = function (salon_id) {
        return this.http.post(ENV.endPoint + 'offlineSettlement.json', {
            salon_id: salon_id,
        })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return error;
        });
    };
    ////////////////check booking status //////////////////////////
    // booking_status(booking_id): Observable<any> {
    // return this.http.post(ENV.endPoint+'paymentDoneStatusCheck.json',{
    // 	booking_id:booking_id
    // })
    // .map(response => {
    // return response.json();
    // })
    // .catch(error =>{
    // return error;
    // });
    // }
    ////////////////Stripe payment //////////////////////
    // stripe_pay(token,booking_id,customer_id,salon_id,amount,description){
    // return  this.http.post(ENV.endPoint+'stripe.json', {
    //          id:token,
    //          booking_id:booking_id,
    //          customer_id:customer_id,
    //          salon_id:salon_id,
    //          amount:amount,
    //          description:description
    // })
    // .map(response => {
    // return response.json();
    // })
    // .catch(error =>{
    // return error;
    // });
    // }
    ServicesProvider.prototype.stripe_pay = function (token, booking_id, customer_id, salon_id, amount, description) {
        return this.http.post(ENV.endPoint + 'stripe.json', {
            id: token,
            booking_id: booking_id,
            customer_id: customer_id,
            salon_id: salon_id,
            amount: amount,
            description: description
        })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return error;
        });
    };
    ServicesProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], ServicesProvider);
    return ServicesProvider;
}());
export { ServicesProvider };
//# sourceMappingURL=services.js.map