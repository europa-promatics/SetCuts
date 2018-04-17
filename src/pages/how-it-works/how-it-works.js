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
import { DomSanitizer } from "@angular/platform-browser";
var HowItWorksPage = /** @class */ (function () {
    function HowItWorksPage(domSanitizer, serviceprovider, navCtrl, navParams) {
        this.domSanitizer = domSanitizer;
        this.serviceprovider = serviceprovider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HowItWorksPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HowItWorksPage');
    };
    HowItWorksPage.prototype.getSafeUrl = function (url) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl('http://18.220.97.146/barber/img/howitworksimg/' + url);
    };
    HowItWorksPage.prototype.ngOnInit = function () {
        var _this = this;
        this.serviceprovider.HowItWorks()
            .subscribe(function (data) {
            _this.howitwork = data;
            console.log("howitworks" + JSON.stringify(_this.howitwork));
        }),
            function (error) {
            };
    };
    HowItWorksPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-how-it-works',
            templateUrl: 'how-it-works.html',
        }),
        __metadata("design:paramtypes", [DomSanitizer, ServicesProvider, NavController, NavParams])
    ], HowItWorksPage);
    return HowItWorksPage;
}());
export { HowItWorksPage };
//# sourceMappingURL=how-it-works.js.map