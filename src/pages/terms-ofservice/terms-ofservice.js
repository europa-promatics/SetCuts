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
 * Generated class for the TermsOfservicePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TermsOfservicePage = /** @class */ (function () {
    function TermsOfservicePage(serviceProvider, navCtrl, navParams) {
        this.serviceProvider = serviceProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.relationship = "Terms";
    }
    TermsOfservicePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermsOfservicePage');
    };
    TermsOfservicePage.prototype.selectedtab = function () {
    };
    TermsOfservicePage.prototype.ngOnInit = function () {
        var _this = this;
        this.serviceProvider.TermsofService()
            .subscribe(function (data) {
            _this.termsofservice = data.termdata;
            _this.privacypolicy = data.policydata;
            _this.heading = _this.termsofservice.heading;
            _this.content = _this.termsofservice.content;
            _this.policyTitle = _this.privacypolicy.title;
            _this.policydescription = _this.privacypolicy.description;
        }),
            function (error) { };
    };
    TermsOfservicePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-terms-ofservice',
            templateUrl: 'terms-ofservice.html',
        }),
        __metadata("design:paramtypes", [ServicesProvider, NavController, NavParams])
    ], TermsOfservicePage);
    return TermsOfservicePage;
}());
export { TermsOfservicePage };
//# sourceMappingURL=terms-ofservice.js.map