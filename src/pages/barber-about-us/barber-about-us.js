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
/**
 * Generated class for the BarberAboutUsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var BarberAboutUsPage = /** @class */ (function () {
    function BarberAboutUsPage(serviceProvider, navCtrl, navParams) {
        this.serviceProvider = serviceProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BarberAboutUsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BarberAboutUsPage');
    };
    BarberAboutUsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.serviceProvider.About_us()
            .subscribe(function (data) {
            _this.fulldata = data.data;
            _this.aboutus_image = _this.fulldata.aboutus_image;
            _this.description = _this.fulldata.description;
            console.log('aboutus' + JSON.stringify(_this.fulldata));
        }),
            function (error) { };
    };
    BarberAboutUsPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-barber-about-us',
            templateUrl: 'barber-about-us.html',
        }),
        __metadata("design:paramtypes", [ServicesProvider, NavController, NavParams])
    ], BarberAboutUsPage);
    return BarberAboutUsPage;
}());
export { BarberAboutUsPage };
//# sourceMappingURL=barber-about-us.js.map