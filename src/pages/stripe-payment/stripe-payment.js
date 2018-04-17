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
import { Stripe } from '@ionic-native/stripe';
import { Http } from '@angular/http';
import { ServicesProvider } from '../../providers/services/services';
import { LoadingController, AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';
import { SalonHome } from '../salon-home/salon-home';
/**
 * Generated class for the StripePaymentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var StripePaymentPage = /** @class */ (function () {
    function StripePaymentPage(alertCtrl, loadingCtrl, serviceProvider, navCtrl, navParams, stripe, http) {
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.serviceProvider = serviceProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.stripe = stripe;
        this.http = http;
        this.card = {
            number: '',
            expMonth: '',
            expYear: '',
            cvc: '',
        };
        this.datemonth = [{
                month: "01"
            },
            {
                month: "02"
            },
            {
                month: "03"
            },
            {
                month: "04"
            },
            {
                month: "05"
            },
            {
                month: "06"
            },
            {
                month: "07"
            },
            {
                month: "08"
            },
            {
                month: "09"
            },
            {
                month: "10"
            },
            {
                month: "11"
            },
            {
                month: "12"
            }
        ];
        this.montth = [
            {
                month: "2017",
                value: "17"
            },
            {
                month: "2018",
                value: "18"
            },
            {
                month: "2019",
                value: "19"
            },
            {
                month: "2020",
                value: "20"
            },
            {
                month: "2021",
                value: "21"
            },
            {
                month: "2022",
                value: "22"
            },
            {
                month: "2023",
                value: "23"
            },
            {
                month: "2024",
                value: "24"
            },
            {
                month: "2025",
                value: "25"
            },
            {
                month: "2026",
                value: "26"
            },
            {
                month: "2027",
                value: "27"
            },
            {
                month: "2028",
                value: "28"
            },
            {
                month: "2029",
                value: "29"
            },
            {
                month: "2030",
                value: "30"
            },
            {
                month: "2031",
                value: "31"
            },
            {
                month: "2032",
                value: "32"
            },
            {
                month: "2033",
                value: "33"
            },
            {
                month: "2034",
                value: "34"
            },
            {
                month: "2035",
                value: "35"
            },
            {
                month: "2036",
                value: "36"
            },
            {
                month: "2037",
                value: "37"
            },
            {
                month: "2038",
                value: "38"
            },
            {
                month: "2039",
                value: "39"
            },
            {
                month: "2040",
                value: "40"
            },
            {
                month: "2041",
                value: "41"
            },
            {
                month: "2042",
                value: "42"
            },
            {
                month: "2043",
                value: "43"
            },
            {
                month: "2044",
                value: "44"
            },
            {
                month: "2045",
                value: "45"
            },
            {
                month: "2046",
                value: "46"
            },
            {
                month: "2047",
                value: "47"
            },
            {
                month: "2048",
                value: "48"
            },
            {
                month: "2049",
                value: "49"
            },
            {
                month: "2050",
                value: "50"
            },
            {
                month: "2051",
                value: "51"
            },
            {
                month: "2052",
                value: "52"
            },
        ];
        this.booking_id = this.navParams.get('booking_id');
        this.salon_id = this.navParams.get('salon_id');
        this.booking_charges = this.navParams.get('booking_charges');
        this.barber_id = this.navParams.get('booking_charges');
        this.service_id = this.navParams.get('service_id');
    }
    StripePaymentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StripePaymentPage');
    };
    StripePaymentPage.prototype.pay = function () {
        // alert(JSON.stringify(this.card));
        var _this = this;
        // var pulish_key = 'pk_test_FuxItpTrzmm5hi8MqmOCbFqO';
        var pulish_key = 'pk_live_KQwyqFAeTttFyqcLVluMJi3i';
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();
        this.stripe.setPublishableKey(pulish_key);
        this.stripe.createCardToken(this.card).then(function (token) {
            loader.dismiss();
            _this.fun(token);
        });
    };
    StripePaymentPage.prototype.fun = function (token) {
        var _this = this;
        var booking_id = this.booking_id;
        var customer_id = localStorage['user_id'];
        var salon_id = this.salon_id;
        var amount = this.booking_charges;
        var description = "hello";
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        Observable.fromPromise(loading.present())
            .flatMap(function (data) { return _this.serviceProvider.stripe_pay(token, booking_id, customer_id, salon_id, amount, description); })
            .subscribe(function (data) {
            return loading.dismiss().then(function () {
                _this.a = data;
                _this.status = _this.a.status;
                if (_this.status == 1) {
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Thank you!',
                        subTitle: 'Payment Successful',
                        buttons: ['OK']
                    });
                    alert_1.present();
                    _this.navCtrl.setRoot(SalonHome);
                }
                else {
                    var alert_2 = _this.alertCtrl.create({
                        title: 'Alert!',
                        subTitle: 'Something went wrong!',
                        buttons: ['OK']
                    });
                    alert_2.present();
                }
            });
        }, function (error) {
            return loading.dismiss().then(function () {
                var alert = _this.alertCtrl.create({
                    title: 'Error!',
                    subTitle: 'Error' + error,
                    buttons: ['OK']
                });
                alert.present();
            });
        });
    };
    StripePaymentPage.prototype.cardCheck = function (a) {
        this.cardImage = this.cardd(a);
    };
    StripePaymentPage.prototype.cardd = function (number) {
        var re = new RegExp("^4");
        if (number.match(re) != null)
            return "Visa.png";
        // Mastercard
        re = new RegExp("^5[1-5]");
        if (number.match(re) != null)
            return "Mastercard.png";
        // AMEX
        re = new RegExp("^3[47]");
        if (number.match(re) != null)
            return "AMEX.png";
        // Discover
        re = new RegExp("^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)");
        if (number.match(re) != null)
            return "Discover.png";
        // Diners
        re = new RegExp("^36");
        if (number.match(re) != null)
            return "Diners.png";
        // Diners - Carte Blanche
        re = new RegExp("^30[0-5]");
        if (number.match(re) != null)
            return "Diners.png";
        // JCB
        re = new RegExp("^35(2[89]|[3-8][0-9])");
        if (number.match(re) != null)
            return "JCB.png";
        // Visa Electron
        re = new RegExp("^(4026|417500|4508|4844|491(3|7))");
        if (number.match(re) != null)
            return "Visa Electron.png";
        re = new RegExp("^12");
        if (number.match(re) != null)
            return "Airplus.png";
        re = new RegExp("^67");
        if (number.match(re) != null)
            return "Maestro.png";
        return "";
    };
    StripePaymentPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-stripe-payment',
            templateUrl: 'stripe-payment.html',
        }),
        __metadata("design:paramtypes", [AlertController, LoadingController, ServicesProvider, NavController, NavParams, Stripe, Http])
    ], StripePaymentPage);
    return StripePaymentPage;
}());
export { StripePaymentPage };
//# sourceMappingURL=stripe-payment.js.map