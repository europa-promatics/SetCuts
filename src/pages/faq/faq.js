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
 * Generated class for the FaqPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var FaqPage = /** @class */ (function () {
    function FaqPage(serviceProvider, navCtrl, navParams, alertCtrl, loadingCtrl, http) {
        this.serviceProvider = serviceProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.count = 0;
        this.http = http;
        this.data = {};
    }
    FaqPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FaqPage');
    };
    FaqPage.prototype.question = function (i) {
        this.count++;
        if (this.count % 2 != 0) {
            this.answer = i;
        }
        else {
            this.answer = 'p';
        }
    };
    FaqPage.prototype.ngOnInit = function () {
        var _this = this;
        this.serviceProvider.FAQ()
            .subscribe(function (data) {
            _this.faq = data.faqinfo;
        }),
            function (error) { };
    };
    FaqPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-faq',
            templateUrl: 'faq.html',
        }),
        __metadata("design:paramtypes", [ServicesProvider, NavController, NavParams, AlertController, LoadingController, Http])
    ], FaqPage);
    return FaqPage;
}());
export { FaqPage };
//# sourceMappingURL=faq.js.map