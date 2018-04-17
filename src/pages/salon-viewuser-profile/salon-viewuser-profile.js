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
import { ModalController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';
import { ServicesProvider } from '../../providers/services/services';
/**
 * Generated class for the SalonViewuserProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SalonViewuserProfilePage = /** @class */ (function () {
    function SalonViewuserProfilePage(alertCtrl, loadingCtrl, serviceProvider, navCtrl, navParams, modalCtrl) {
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.serviceProvider = serviceProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.customer_id = this.navParams.get('customer_id');
    }
    SalonViewuserProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SalonViewuserProfilePage');
    };
    SalonViewuserProfilePage.prototype.assignbarber = function () {
        var modal = this.modalCtrl.create('SalonAssignBarberToUserPage');
        modal.present();
    };
    SalonViewuserProfilePage.prototype.ngOnInit = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Please wait...' });
        Observable.fromPromise(loading.present())
            .flatMap(function (data) { return _this.serviceProvider.salon_view_user_profile(_this.customer_id); })
            .subscribe(function (data) {
            return loading.dismiss().then(function () {
                console.log('salon_view_data' + JSON.stringify(data));
                _this.viewprofile = data;
                _this.name = _this.viewprofile.data.fullname;
                _this.username = _this.viewprofile.data.fullname;
                _this.phonenumber = _this.viewprofile.data.phonenumber;
                _this.email = _this.viewprofile.data.email;
                _this.fb_img = _this.viewprofile.data.image;
                _this.address = _this.viewprofile.data.address;
                if (_this.fb_img == null || _this.fb_img == 'null') {
                    _this.image = 'http://18.220.97.146/barber/app_link/img/team-member2.jpg';
                }
                else {
                    var n = _this.fb_img.includes("http");
                    if (n == true || n == 'true') {
                        _this.image = _this.viewprofile.data.image;
                    }
                    else {
                        _this.image = 'http://18.220.97.146/barber/img/customerprofileimage/' + _this.viewprofile.data.image;
                    }
                }
                console.log(_this.name);
            });
        }, function (error) {
            return loading.dismiss().then(function () { });
        });
    };
    SalonViewuserProfilePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-salon-viewuser-profile',
            templateUrl: 'salon-viewuser-profile.html',
        }),
        __metadata("design:paramtypes", [AlertController, LoadingController, ServicesProvider, NavController, NavParams, ModalController])
    ], SalonViewuserProfilePage);
    return SalonViewuserProfilePage;
}());
export { SalonViewuserProfilePage };
//# sourceMappingURL=salon-viewuser-profile.js.map