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
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { ServicesProvider } from '../../providers/services/services';
/**
 * Generated class for the SalonNotificationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SalonNotificationPage = /** @class */ (function () {
    function SalonNotificationPage(serviceProvider, navCtrl, navParams, alertCtrl, loadingCtrl, http) {
        this.serviceProvider = serviceProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.data = {};
        this.data.response = '';
        // this.appointment=this.navParams.get('notfication_data');
        // alert(JSON.stringify(this.appointment));
    }
    SalonNotificationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SalonNotificationPage');
    };
    SalonNotificationPage.prototype.salon_view_User_profile = function (customer_id) {
        this.navCtrl.push('SalonViewuserProfilePage', { customer_id: customer_id });
    };
    SalonNotificationPage.prototype.confirm = function (notif_id) {
        var _this = this;
        var a = 1;
        var loading = this.loadingCtrl.create({ content: 'Please wait...' });
        Observable.fromPromise(loading.present())
            .flatMap(function (data) { return _this.serviceProvider.notficationstatus(notif_id, a); })
            .subscribe(function (data) {
            return loading.dismiss().then(function () {
                console.log("data" + data);
                _this.ngOnInit();
            });
        }, function (error) {
            return loading.dismiss().then(function () {
                console.log("error" + error);
                _this.ngOnInit();
            });
        });
    };
    SalonNotificationPage.prototype.decline = function (notif_id) {
        var _this = this;
        var a = 0;
        var loading = this.loadingCtrl.create({ content: 'Please wait...' });
        Observable.fromPromise(loading.present())
            .flatMap(function (data) { return _this.serviceProvider.notficationstatus(notif_id, a); })
            .subscribe(function (data) {
            return loading.dismiss().then(function () {
                console.log("data" + data);
                _this.ngOnInit();
            });
        }, function (error) {
            return loading.dismiss().then(function () {
                console.log("error" + error);
                _this.ngOnInit();
            });
        });
    };
    SalonNotificationPage.prototype.ngOnInit = function () {
        var _this = this;
        localStorage['flag'] = 0;
        this.serviceProvider.notification(localStorage['barber_id'])
            .subscribe(function (data) {
            _this.appointment = data.bookinginfo;
            _this.count = data.totalcustomer.count;
            if (localStorage['user_type'] == 2 || localStorage['flag'] == 0) {
                setTimeout(function () {
                    _this.ngOnInit();
                }, 10000);
            }
        }),
            function (error) { };
    };
    SalonNotificationPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-salon-notification',
            templateUrl: 'salon-notification.html',
            providers: [ServicesProvider]
        }),
        __metadata("design:paramtypes", [ServicesProvider, NavController, NavParams, AlertController, LoadingController, Http])
    ], SalonNotificationPage);
    return SalonNotificationPage;
}());
export { SalonNotificationPage };
//# sourceMappingURL=salon-notification.js.map