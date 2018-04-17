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
import { Observable } from 'rxjs/Rx';
import { ServicesProvider } from '../../providers/services/services';
/**
 * Generated class for the SalonEarningsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SalonEarningsPage = /** @class */ (function () {
    function SalonEarningsPage(navCtrl, navParams, serviceProvider, loadingCtrl, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.serviceProvider = serviceProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    SalonEarningsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SalonEarningsPage');
    };
    SalonEarningsPage.prototype.ngOnInit = function () {
        var _this = this;
        var salon_id = localStorage['salon_id'];
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        Observable.fromPromise(loading.present())
            .flatMap(function (data) { return _this.serviceProvider.Myearning(salon_id); })
            .subscribe(function (data) {
            return loading.dismiss().then(function () {
                _this.offlne = data;
                _this.earning = _this.offlne.data;
                _this.totalamount = _this.earning.totalamount;
                _this.paid = _this.earning.paid;
                _this.unpaid = _this.earning.unpaid;
            });
        }, function (error) {
            return loading.dismiss().then(function () {
            });
        });
    };
    SalonEarningsPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-salon-earnings',
            templateUrl: 'salon-earnings.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ServicesProvider, LoadingController, Http, AlertController])
    ], SalonEarningsPage);
    return SalonEarningsPage;
}());
export { SalonEarningsPage };
//# sourceMappingURL=salon-earnings.js.map