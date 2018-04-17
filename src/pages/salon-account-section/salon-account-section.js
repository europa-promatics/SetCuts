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
import { SalonOwnerProfilePage } from '../salon-owner-profile/salon-owner-profile';
import { SalonServicePage } from '../salon-service/salon-service';
/**
 * Generated class for the SalonAccountSectionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SalonAccountSectionPage = /** @class */ (function () {
    function SalonAccountSectionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SalonAccountSectionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SalonAccountSectionPage');
    };
    SalonAccountSectionPage.prototype.salon_detail = function () {
        this.navCtrl.push(SalonOwnerProfilePage);
    };
    SalonAccountSectionPage.prototype.My_services = function () {
        this.navCtrl.push(SalonServicePage);
    };
    SalonAccountSectionPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-salon-account-section',
            templateUrl: 'salon-account-section.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], SalonAccountSectionPage);
    return SalonAccountSectionPage;
}());
export { SalonAccountSectionPage };
//# sourceMappingURL=salon-account-section.js.map