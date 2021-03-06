var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import { SalonHome } from '../salon-home/salon-home';
import { Observable } from 'rxjs/Rx';
import { ServicesProvider } from '../../providers/services/services';
import { ModalController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ActionSheetController } from 'ionic-angular';
import { DomSanitizer } from "@angular/platform-browser";
/**
 * Generated class for the PickTimeUserPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PickTimeUserPage = /** @class */ (function () {
    // private payPal: PayPal,
    function PickTimeUserPage(actionSheetCtrl, iab, domSanitizer, modalCtrl, serviceProvider, navCtrl, navParams, loadingCtrl, http, alertCtrl) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.iab = iab;
        this.domSanitizer = domSanitizer;
        this.modalCtrl = modalCtrl;
        this.serviceProvider = serviceProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.date = this.navParams.get('date');
        this.barber_id = this.navParams.get('barber_id');
        this.service_id = this.navParams.get('service_id');
        this.content = this.navParams.get('timeslot');
        this.salon_id = this.navParams.get('salon_id');
        this.timeStarts = this.navParams.get('time');
        this.full_data = this.navParams.get('full_data');
        console.log("full_data" + JSON.stringify(this.full_data));
        if (this.full_data) {
            this.barber_name = this.full_data.data[0].barber_name;
            this.book_charges = this.full_data.data[0].charge;
            console.log('barber_name' + this.barber_name);
            this.book_service = this.full_data.data[0].service;
            this.book_customer_name = this.full_data.data[0].customer_name;
            this.address = this.full_data.data[0].address;
            this.barber_image = this.full_data.data[0].barber_image;
            this.salonname = this.full_data.data[0].salonname;
        }
        this.http = http;
        this.data = {};
        this.data.response = '';
        this.saloonPayment = {};
        // this.today = new Date().toISOString();
    }
    PickTimeUserPage.prototype.home = function () {
        this.navCtrl.setRoot(SalonHome);
    };
    PickTimeUserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PickTimeUserPage');
    };
    PickTimeUserPage.prototype.getSafeUrl = function () {
        return this.domSanitizer.bypassSecurityTrustResourceUrl('http://18.220.97.146/barber/WebServices/success');
    };
    //    presentActionSheet(booking_id) {
    //   let actionSheet = this.actionSheetCtrl.create({
    //     title: 'Payment options',
    //     buttons: [
    //       {
    //         text: 'Pay Via Card',
    //         role: 'Pay_Via_Card',
    //         icon: 'card',
    //         handler: () => {
    //             this.User_payment(booking_id);
    //           console.log('Pay_Via_Card clicked');
    //         }
    //       },{
    //         text: 'Pay Via Paypal',
    //         icon: 'browsers',
    //         handler: () => {
    //             this.user_backened_payment(booking_id);
    //           console.log('Pay_Via_Paypal clicked');
    //         }
    //       },{
    //         text: 'Cancel',
    //         role: 'cancel',
    //         icon: 'close',
    //         handler: () => {
    //           console.log('Cancel clicked');
    //         }
    //       }
    //     ]
    //   });
    //   actionSheet.present();
    // }
    PickTimeUserPage.prototype.PickbookingDate = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();
        var link = 'http://18.220.97.146/barber/WebServices/barberBookingForm.json';
        var data = JSON.stringify({
            barber_id: this.barber_id,
            service_id: this.service_id,
            date: this.date,
            time: this.timeStarts,
            customer_id: localStorage['user_id'],
        });
        this.http.post(link, data)
            .subscribe(function (data) {
            loader.dismiss();
            _this.data = data;
            if (JSON.parse(data._body).status == 1) {
                // let alert = this.alertCtrl.create({
                //                      title: 'Thank you booking success!',
                //                      subTitle: 'we will notify you after accept barber request.',
                //                      buttons: ['OK']
                //                  });
                //                  alert.present();
                var booking_id = JSON.parse(data._body).booking_id;
                // this.User_payment(booking_id);
                // this.user_backened_payment(booking_id);
                // this.presentActionSheet(booking_id);
                _this.stripe_payment(booking_id);
                _this.booking_status_check = JSON.parse(data._body).booking_id;
                // this.navCtrl.push('ReviewPurchasePage',{time:this.time,date:this.date});             
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Alert!',
                    subTitle: 'Something went wrong',
                    buttons: ['OK']
                });
                alert_1.present();
            }
        });
    };
    // sandbox secret id   "PayPalEnvironmentProduction":"EHAcM2INSj9ek0nFpvo407Lm6HAVMKek2IJ5Ogg-oAYUV_GHYn8SOluvJkEeQIgMXAJhU40zB1u8OYUL",
    // client id    "PayPalEnvironmentSandbox":"ARKMEv5yNKHYh4zpKWYZAJKgUy6YTNI_ZfJ2oo3o0pPoODn47DjbdmjIr3UmUfwMFbb3ovsZ41iu1mKB"
    // User_payment(booking_id) {
    //     if (this.book_charges == null) {
    //         this.book_charges = 30;
    //     } else {
    //         this.book_charges = this.book_charges;
    //     }
    //     var user_id = localStorage['user_id'];
    //        this.payPal.init({
    //         "PayPalEnvironmentProduction": "AQuem8NpAoznYvON1a86_6wQccw7GcP1Ihj4PGncESkV9rBcqvnMMfN7GTJh0fxwN6on1kxivtceqyRd",
    //         "PayPalEnvironmentSandbox": "ATT-MyxJiVlKtTSdjPPbRp_IbCQORN3ne6BqzcHpiKpjXVaJJT_XACbqg5PUbjLLQ9U2S4HvDkSsJkAY"
    //     }).then(() => {
    //         this.payPal.prepareToRender('PayPalEnvironmentProduction', new PayPalConfiguration({
    //         })).then(() => {
    //             let payment = new PayPalPayment(this.book_charges, 'CAD', this.book_service, 'sale');
    //             this.payPal.renderSinglePaymentUI(payment).then((data) => {
    //                 localStorage['data'] = data;
    //                 localStorage['data_client_enviornment'] = data.client.environment;
    //                 localStorage['client_product_name'] = data.client.product_name;
    //                 localStorage['response_id'] = data.response.id;
    //                 localStorage['trans_time'] = data.response.create_time;
    //                 localStorage['trans_status'] = data.response.state;
    //                 localStorage['data.response_type'] = data.response_type;
    //                 // 
    //                 if (data.response.state == "approved") {
    //                     this.paystate = 'true';
    //                     var transaction_status1="COMPLETED";
    //                     this.prouct_name = localStorage['client_product_name'];
    //                     this.transaction_id = localStorage['response_id'];
    //                     this.transaction_time = localStorage['trans_time'];
    //                     this.transaction_status = localStorage['trans_status'];
    //                      this.payment_service(user_id, booking_id, localStorage['response_id'], localStorage['trans_status'], transaction_status1,this.book_charges,this.book_service);
    //                 } else {
    //                    var transaction_status1="INCOMPLETE";
    //                     let alert = this.alertCtrl.create({
    //                         title: 'Alert!',
    //                         subTitle: 'Payment Cancelled',
    //                         buttons: ['OK']
    //                     });
    //                     alert.present();
    //                     this.payment_service(user_id, booking_id, localStorage['response_id'], localStorage['trans_status'], transaction_status1,this.book_charges,this.book_service);
    //                 }
    //             }, (error) => {
    //                 var transaction_status1="INCOMPLETE";
    //                 // let alert = this.alertCtrl.create({
    //                 //     title: 'Alert!',
    //                 //     subTitle: 'Payment Cancelled',
    //                 //     buttons: ['OK']
    //                 // });
    //                 // alert.present();
    //                  this.payment_service(user_id, booking_id, error, error, transaction_status1,this.book_charges,this.book_service);
    //             });
    //         }, (error) => {
    //             let alert = this.alertCtrl.create({
    //                 title: 'Something went wrong!',
    //                 subTitle: 'Payment unsuccessful',
    //                 buttons: ['OK']
    //             });
    //             alert.present();
    //         });
    //     }, (error) => {
    //         let alert = this.alertCtrl.create({
    //             title: 'Something went wrong!',
    //             subTitle: 'Payment unsuccessful',
    //             buttons: ['OK']
    //         });
    //         alert.present();
    //     });
    // }
    ///////////////////////////////////paymemt service //////////////////////////////////////
    PickTimeUserPage.prototype.payment_service = function (user_id, booking_id, response_id, trans_status, transaction_status1, book_charges, book_service) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        Observable.fromPromise(loading.present())
            .flatMap(function (data) { return _this.serviceProvider.App_single_Payment(user_id, booking_id, response_id, trans_status, transaction_status1, _this.barber_id, _this.salon_id, book_charges, _this.book_service); })
            .subscribe(function (data) {
            return loading.dismiss().then(function () {
                _this.a_pay = data;
                if (_this.a_pay.status == "1" || _this.a_pay.status == 1) {
                    var alert_2 = _this.alertCtrl.create({
                        title: 'Thank you !!',
                        subTitle: 'We have recieved your payment. Your Transaction details will be listed in app shortly.',
                        buttons: ['OK']
                    });
                    alert_2.present();
                    _this.navCtrl.setRoot(SalonHome);
                }
                else {
                    var alert_3 = _this.alertCtrl.create({
                        title: 'Payment cancelled.',
                        subTitle: 'Please try again !',
                        buttons: ['OK']
                    });
                    alert_3.present();
                }
            });
        }, function (error) {
            return loading.dismiss().then(function () {
                // alert('single_payment error'+error);
            });
        });
    };
    /////////////////////////////////////////////////////////////////////////////////////////
    // user_backened_payment(booking_id) {
    //      this.saloonPayment.bookingid = booking_id;
    //      this.saloonPayment.salon_id = this.salon_id;
    //      this.saloonPayment.barber_id = this.barber_id;
    //      this.saloonPayment.user_id = localStorage['user_id'];
    //     console.log("salon_id" + this.saloonPayment.salon_id + " " + "barber_id" + this.saloonPayment.barber_id);
    //      this.saloonPayment.clientDetails_applicationId = "APP-80W284485P519543T";
    //      this.saloonPayment.clientDetails_ipAddress = "127.0.0.1";
    //      this.saloonPayment.currencyCode = "USD";
    //      this.saloonPayment.feesPayer = "SETCUTS";
    //      this.saloonPayment.memo = this.book_service;
    //      this.saloonPayment.receiverList_receiver0_amount = this.book_charges;
    //      this.saloonPayment.receiverList_receiver0_email = "Katoch.senthal@yahoo.com";
    //      this.saloonPayment.receiverList_receiver0_primary = "true"
    //      this.saloonPayment.receiverList_receiver1_amount = "11.00";
    //      this.saloonPayment.receiverList_receiver1_email = "info-facilitator@commercefactory.org";
    //      this.saloonPayment.receiverList_receiver1_primary = "false";
    //      this.saloonPayment.requestEnvelope_errorLanguag = "en_US";
    //     let loading = this.loadingCtrl.create({
    //         content: 'Please wait...'
    //     });
    //     Observable.fromPromise(loading.present())
    //         .flatMap(data => this.serviceProvider.DemoPay(this.saloonPayment))
    //         .subscribe(data =>
    //             loading.dismiss().then(() => {
    //                 console.log("data"+JSON.stringify(data));
    //                 this.a = data;
    //                     if(this.a.status=="failure"){
    //                     let alert = this.alertCtrl.create({
    //                     title: 'Something went wrong!',
    //                     subTitle: 'Please try again later',
    //                     buttons: ['OK']
    //                     });
    //                     alert.present();  
    //                     }
    //                 else{
    //                    var payKey =this.a.payKey;
    //                 this.link = this.a.link;
    //                 const browser = this.iab.create(this.a.link);
    //                 this.navCtrl.popToRoot()
    //                 }
    //             }),
    //             error =>
    //             loading.dismiss().then(() => {
    //                 let alert = this.alertCtrl.create({
    //                     title: 'Something went wrong!',
    //                     subTitle: 'Please try again later',
    //                     buttons: ['OK']
    //                     });
    //                     alert.present(); 
    //             })
    //         );
    // }
    // booking_fun(){
    //     var booking_id=this.booking_status_check;
    //     this.serviceProvider.booking_status(booking_id)
    //         .subscribe(data => {
    //             setTimeout(() => {
    //      this.booking_fun();
    //     }, 10000);
    //         }),
    //         error => {}   
    // }
    PickTimeUserPage.prototype.stripe_payment = function (booking_id) {
        this.navCtrl.push('StripePaymentPage', { booking_id: booking_id, salon_id: this.salon_id,
            booking_charges: this.book_charges,
            barber_id: this.barber_id,
            service_id: this.service_id });
    };
    PickTimeUserPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-pick-time-user',
            templateUrl: 'pick-time-user.html',
        }),
        __metadata("design:paramtypes", [ActionSheetController, InAppBrowser, DomSanitizer, ModalController, ServicesProvider, NavController, NavParams, LoadingController, Http, AlertController])
    ], PickTimeUserPage);
    return PickTimeUserPage;
}());
export { PickTimeUserPage };
//# sourceMappingURL=pick-time-user.js.map