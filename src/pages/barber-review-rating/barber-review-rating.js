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
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';
import { LoadingController } from 'ionic-angular';
/**
 * Generated class for the BarberReviewRatingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var BarberReviewRatingPage = /** @class */ (function () {
    function BarberReviewRatingPage(viewCtrl, serviceProvider, loadingCtrl, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.serviceProvider = serviceProvider;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.review = this.navParams.get('review_data');
        this.data = {};
    }
    BarberReviewRatingPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    BarberReviewRatingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BarberReviewRatingPage');
    };
    BarberReviewRatingPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-barber-review-rating',
            templateUrl: 'barber-review-rating.html',
        }),
        __metadata("design:paramtypes", [ViewController, ServicesProvider, LoadingController, NavController, NavParams])
    ], BarberReviewRatingPage);
    return BarberReviewRatingPage;
}());
export { BarberReviewRatingPage };
//# sourceMappingURL=barber-review-rating.js.map