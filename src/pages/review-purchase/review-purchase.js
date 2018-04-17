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
import { ServicesProvider } from '../../providers/services/services';
import { ModalController } from 'ionic-angular';
/**
 * Generated class for the ReviewPurchasePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ReviewPurchasePage = /** @class */ (function () {
    // private payPal: PayPal,
    function ReviewPurchasePage(modalCtrl, serviceProvider, navCtrl, navParams, loadingCtrl, http, alertCtrl) {
        this.modalCtrl = modalCtrl;
        this.serviceProvider = serviceProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        // this.datedata=this.navParams.get('date');
        // this.timedata=this.navParams.get('time');
        this.booking_id = this.navParams.get('booking_id');
        localStorage['booking_id'] = this.booking_id;
        this.http = http;
        this.data = {};
        this.data.response = '';
    }
    ReviewPurchasePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReviewPurchasePage');
    };
    ReviewPurchasePage.prototype.ngOnInit = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();
        var link = 'http://18.220.97.146/barber/WebServices/barberBookingInfoById.json';
        var data = JSON.stringify({
            customer_id: localStorage['user_id'],
            booking_id: localStorage['booking_id']
        });
        this.http.post(link, data)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            loader.dismiss();
            _this.data = data;
            _this.content = _this.data.bookinginfo;
            _this.Salon_name = _this.content.salonname;
            _this.barbername = _this.content.barbername;
            _this.address = _this.content.address;
            _this.service = _this.content.service;
            _this.date = _this.content.date;
            _this.time = _this.content.time;
            _this.charg = _this.content.charge;
            if (_this.charg == null || _this.charg == 'null') {
                _this.charges = 30;
                _this.total = 30;
            }
            else {
                _this.total = _this.content.charge;
                _this.charges = _this.content.charge;
            }
            _this.img1 = _this.content.image;
            var n = _this.img1.includes(",");
            if (n == true || n == 'true') {
                var a = _this.img1.split(',');
                _this.img = a[0];
            }
            else {
                _this.img = _this.content.image;
            }
        });
    };
    //     User_payment(){
    //             var paystatus=1;
    //       if(this.charges==null){
    //         this.charges=30;
    //       }
    //       else{
    //         this.charges=this.charges;
    //       }
    //        var user_id=localStorage['user_id'];
    //           this.payPal.init({
    //   "PayPalEnvironmentProduction":"EHAcM2INSj9ek0nFpvo407Lm6HAVMKek2IJ5Ogg-oAYUV_GHYn8SOluvJkEeQIgMXAJhU40zB1u8OYUL",
    //   "PayPalEnvironmentSandbox":"ARKMEv5yNKHYh4zpKWYZAJKgUy6YTNI_ZfJ2oo3o0pPoODn47DjbdmjIr3UmUfwMFbb3ovsZ41iu1mKB"
    // }).then(() => {
    //   this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
    //   })).then(() => {
    //     let payment = new PayPalPayment(this.charges, 'USD', 'Description', 'sale');
    //     this.payPal.renderSinglePaymentUI(payment).then((data) => {
    //       localStorage['data']=data;
    //       localStorage['data_client_enviornment']=data.client.environment;
    // localStorage['client_product_name']=data.client.product_name;
    //       localStorage['response_id']=data.response.id;
    //       localStorage['trans_time']=data.response.create_time;
    //       localStorage['trans_status']=data.response.state;
    //       localStorage['data.response_type']=data.response_type;
    //        this.payment_service(user_id,this.booking_id,localStorage['response_id'],localStorage['trans_status'],paystatus);
    //       if(data.response.state=="approved"){
    //         this.paystate='true';
    //         this.prouct_name=localStorage['client_product_name'];
    //         this.transaction_id=localStorage['response_id'];
    //         this.transaction_time= localStorage['trans_time'];
    //         this.transaction_status= localStorage['trans_status'];
    //       }
    //       else{
    //          let alert = this.alertCtrl.create({
    //       title: 'Something went wrong!',
    //       subTitle: 'Payment unsuccessful',
    //       buttons: ['OK']
    //     });
    //     alert.present();
    //       }
    //     }, (error) => {
    //        let alert = this.alertCtrl.create({
    //       title: 'Something went wrong!',
    //       subTitle: 'Payment unsuccessful',
    //       buttons: ['OK']
    //     });
    //     alert.present();
    //     });
    //   }, (error) => {
    //      let alert = this.alertCtrl.create({
    //       title: 'Something went wrong!',
    //       subTitle: 'Payment unsuccessful',
    //       buttons: ['OK']
    //     });
    //     alert.present();
    //   });
    // }, (error) => {
    //    let alert = this.alertCtrl.create({
    //       title: 'Something went wrong!',
    //       subTitle: 'Payment unsuccessful',
    //       buttons: ['OK']
    //     });
    //     alert.present();
    // });
    // }
    ReviewPurchasePage.prototype.payment_service = function (user_id, bookingid, payment_id, pay_state, paystatus) {
        var _this = this;
        var response = response;
        var bookingid = bookingid;
        var user_id = user_id;
        this.serviceProvider.payment_service(user_id, bookingid, payment_id, pay_state, paystatus)
            .subscribe(function (data) {
            // alert('data'+JSON.stringify(data));
            _this.paydata = data;
            if (_this.paydata.message == "your payment confirmation send to your email id") {
                // let alert = this.alertCtrl.create({
                //           title: 'Payment success!',
                //           subTitle: 'your payment confirmation send to your email id.',
                //           buttons: ['OK']
                //       });
                //       alert.present();
                _this.payment(_this.booking_id);
                var modal = _this.modalCtrl.create('PaymentSucessPage', { booking_id: bookingid, user_id: user_id });
                modal.present();
                // this.ngOnInit(); 
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Something went wrong!',
                    subTitle: 'Payment unsuccessful',
                    buttons: ['OK']
                });
                alert_1.present();
            }
        }),
            function (error) {
                var alert = _this.alertCtrl.create({
                    title: 'Something went wrong!',
                    subTitle: 'Payment unsuccessful',
                    buttons: ['OK']
                });
                alert.present();
            };
    };
    ReviewPurchasePage.prototype.payment = function (booking_id) {
        var user_id = localStorage['user_id'];
        ///////////////paystatus 1= Payment success /////////////////////////////
        var paystatus = 1;
        this.serviceProvider.PayStatus(booking_id, user_id, paystatus)
            .subscribe(function (data) {
            // this.navCtrl.push('PaymentSucessPage',{booking_id:booking_id,user_id:user_id});
        }),
            function (error) { };
    };
    ReviewPurchasePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-review-purchase',
            templateUrl: 'review-purchase.html',
        }),
        __metadata("design:paramtypes", [ModalController, ServicesProvider, NavController, NavParams, LoadingController, Http, AlertController])
    ], ReviewPurchasePage);
    return ReviewPurchasePage;
}());
export { ReviewPurchasePage };
//# sourceMappingURL=review-purchase.js.map