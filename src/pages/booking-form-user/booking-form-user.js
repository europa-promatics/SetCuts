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
/**
 * Generated class for the BookingFormUserPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var BookingFormUserPage = /** @class */ (function () {
    function BookingFormUserPage(navCtrl, navParams, loadingCtrl, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.barber_id = this.navParams.get('barber_id');
        this.service_id = this.navParams.get('service_id');
        // alert('serviceid'+this.service_id);
        this.time = this.navParams.get('time');
        this.date = this.navParams.get('date');
        this.http = http;
        this.data = {};
        this.data.response = '';
    }
    BookingFormUserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BookingFormUserPage');
    };
    BookingFormUserPage.prototype.PickbookingDate = function () {
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
            time: this.time,
            customer_id: localStorage['user_id'],
            pincode: this.pincode,
            address: this.address,
            contactnumber: this.contact,
        });
        this.http.post(link, data)
            .subscribe(function (data) {
            loader.dismiss();
            _this.data = data;
            if (JSON.parse(data._body).status == 1) {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Thank you booking success!',
                    subTitle: 'we will notify you after accept barber request.',
                    buttons: ['OK']
                });
                alert_1.present();
                // this.navCtrl.push('ReviewPurchasePage',{time:this.time,date:this.date});             
            }
            else {
                var alert_2 = _this.alertCtrl.create({
                    title: 'Alert!',
                    subTitle: 'Something went wrong',
                    buttons: ['OK']
                });
                alert_2.present();
            }
        });
    };
    BookingFormUserPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-booking-form-user',
            templateUrl: 'booking-form-user.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, LoadingController, Http, AlertController])
    ], BookingFormUserPage);
    return BookingFormUserPage;
}());
export { BookingFormUserPage };
//# sourceMappingURL=booking-form-user.js.map