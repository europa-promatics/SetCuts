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
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';
import { ServicesProvider } from '../../providers/services/services';
import { LoadingController } from 'ionic-angular';
/**
 * Generated class for the PaymentSucessPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PaymentSucessPage = /** @class */ (function () {
    function PaymentSucessPage(viewCtrl, loadingCtrl, navCtrl, navParams, serviceProvider) {
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.serviceProvider = serviceProvider;
        this.user_id = this.navParams.get('user_id');
        this.booking_id = this.navParams.get('booking_id');
    }
    PaymentSucessPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    PaymentSucessPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentSucessPage');
    };
    PaymentSucessPage.prototype.ngOnInit = function () {
        var _this = this;
        var booking_id = this.booking_id;
        var loading = this.loadingCtrl.create({ content: 'Please wait...' });
        Observable.fromPromise(loading.present())
            .flatMap(function (data) { return _this.serviceProvider.SuccessPaymentStatus(booking_id); })
            .subscribe(function (data) {
            return loading.dismiss().then(function () {
                console.log('data' + JSON.stringify(data));
                _this.pay_data = data;
                _this.successPaymentStatus = _this.pay_data.successPaymentStatus;
                _this.service = _this.successPaymentStatus.service;
                _this.transaction_id = _this.successPaymentStatus.payment_id;
                _this.order_id = _this.successPaymentStatus.order_id;
                _this.status = "approved";
                _this.pay_date = _this.successPaymentStatus.pay_date;
                _this.pay_time = _this.successPaymentStatus.pay_time;
                _this.total = _this.successPaymentStatus.total_payment;
            });
        }, function (error) {
            return loading.dismiss().then(function () { });
        });
    };
    PaymentSucessPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-payment-sucess',
            templateUrl: 'payment-sucess.html',
        }),
        __metadata("design:paramtypes", [ViewController, LoadingController, NavController, NavParams, ServicesProvider])
    ], PaymentSucessPage);
    return PaymentSucessPage;
}());
export { PaymentSucessPage };
//# sourceMappingURL=payment-sucess.js.map