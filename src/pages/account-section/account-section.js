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
var AccountSectionPage = /** @class */ (function () {
    function AccountSectionPage(serviceProvider, navCtrl, navParams) {
        this.serviceProvider = serviceProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // this.a=this.serviceProvider.loginmodel;
    }
    AccountSectionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountSectionPage');
    };
    AccountSectionPage.prototype.user_detail = function () {
        this.navCtrl.push('UserProfile');
    };
    AccountSectionPage.prototype.user_payment = function () {
        this.navCtrl.push('PayemntUserPage');
    };
    AccountSectionPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-account-section',
            templateUrl: 'account-section.html',
        }),
        __metadata("design:paramtypes", [ServicesProvider, NavController, NavParams])
    ], AccountSectionPage);
    return AccountSectionPage;
}());
export { AccountSectionPage };
//# sourceMappingURL=account-section.js.map