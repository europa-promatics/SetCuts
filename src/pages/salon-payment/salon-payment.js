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
import { ServicesProvider } from '../../providers/services/services';
import { DomSanitizer } from "@angular/platform-browser";
/**
 * Generated class for the SalonPaymentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SalonPaymentPage = /** @class */ (function () {
    function SalonPaymentPage(domSanitizer, serviceProvider, navCtrl, navParams) {
        this.domSanitizer = domSanitizer;
        this.serviceProvider = serviceProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appointment = [
            { name: 'User name', oder_no: '32541635', date: '15.00, 25-05-2017', image: 'http://18.220.97.146/barber/app_link/img/team-member2.jpg', status: 'RECIEVED', color: 'suc' },
            { name: 'User name', oder_no: '32541635', date: '15.00, 25-05-2017', image: 'http://18.220.97.146/barber/app_link/img/team-member2.jpg', status: 'RECIEVED', color: 'suc' },
            { name: 'User name', oder_no: '32541635', date: '15.00, 25-05-2017', image: 'http://18.220.97.146/barber/app_link/img/team-member2.jpg', status: 'PENDING', color: 'pen' },
            { name: 'User name', oder_no: '32541635', date: '15.00, 25-05-2017', image: 'http://18.220.97.146/barber/app_link/img/team-member2.jpg', status: 'RECIEVED', color: 'suc' },
            { name: 'User name', oder_no: '32541635', date: '15.00, 25-05-2017', image: 'http://18.220.97.146/barber/app_link/img/team-member2.jpg', status: 'RECIEVED', color: 'suc' },
            { name: 'User name', oder_no: '32541635', date: '15.00, 25-05-2017', image: 'http://18.220.97.146/barber/app_link/img/team-member2.jpg', status: 'PENDING', color: 'pen' },
            { name: 'User name', oder_no: '32541635', date: '15.00, 25-05-2017', image: 'http://18.220.97.146/barber/app_link/img/team-member2.jpg', status: 'RECIEVED', color: 'suc' },
        ];
    }
    SalonPaymentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SalonPaymentPage');
    };
    SalonPaymentPage.prototype.getSafeUrl = function (url) {
        if (url != 'null' || url != null || url != '') {
            var a = url;
            var b = a.includes('http');
            if (b == true || b == 'true') {
                return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
            }
            else {
                return this.domSanitizer.bypassSecurityTrustResourceUrl('http://18.220.97.146/barber/img/customerprofileimage/' + url);
            }
        }
    };
    SalonPaymentPage.prototype.ngOnInit = function () {
        var _this = this;
        var salon_id = localStorage['salon_id'];
        this.serviceProvider.salon_payment(salon_id)
            .subscribe(function (data) {
            console.log('salon_payment_data' + JSON.stringify(data));
            _this.salon_app = data;
            _this.salonpaymentList = _this.salon_app.salonAppointmentList;
        }),
            function (error) {
                alert('error' + error);
            };
    };
    SalonPaymentPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-salon-payment',
            templateUrl: 'salon-payment.html',
        }),
        __metadata("design:paramtypes", [DomSanitizer, ServicesProvider, NavController, NavParams])
    ], SalonPaymentPage);
    return SalonPaymentPage;
}());
export { SalonPaymentPage };
//# sourceMappingURL=salon-payment.js.map