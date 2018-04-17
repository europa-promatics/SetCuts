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
/**
 * Generated class for the SalonPaymentHistoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SalonPaymentHistoryPage = /** @class */ (function () {
    function SalonPaymentHistoryPage(serviceProvider, navCtrl, navParams, alertCtrl, loadingCtrl, http) {
        this.serviceProvider = serviceProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    SalonPaymentHistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SalonPaymentHistoryPage');
    };
    SalonPaymentHistoryPage.prototype.ngOnInit = function () {
        var _this = this;
        var salon_id = localStorage['salon_id'];
        this.serviceProvider.salon_payment_history(salon_id)
            .subscribe(function (data) {
            _this.a = data;
            _this.history = _this.a.customer_payment;
            console.log(JSON.stringify(_this.history));
        }),
            function (error) { };
    };
    SalonPaymentHistoryPage.prototype.total = function (value1, value2) {
        return parseInt(value1) + parseInt(value2);
    };
    SalonPaymentHistoryPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-salon-payment-history',
            templateUrl: 'salon-payment-history.html',
        }),
        __metadata("design:paramtypes", [ServicesProvider, NavController, NavParams, AlertController, LoadingController, Http])
    ], SalonPaymentHistoryPage);
    return SalonPaymentHistoryPage;
}());
export { SalonPaymentHistoryPage };
//# sourceMappingURL=salon-payment-history.js.map