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
import { DomSanitizer } from "@angular/platform-browser";
import { Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';
/**
 * Generated class for the BarberPreviousworkimgPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var BarberPreviousworkimgPage = /** @class */ (function () {
    function BarberPreviousworkimgPage(domSanitizer, viewCtrl, navCtrl, navParams) {
        this.domSanitizer = domSanitizer;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.img = this.navParams.get('img');
        this.b = this.navParams.get('b');
        if (this.b == 1) {
            this.full_img = this.navParams.get('full_img');
        }
        else {
            this.full_img2 = this.navParams.get('full_img');
        }
        this.index = this.navParams.get('index');
    }
    BarberPreviousworkimgPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BarberPreviousworkimgPage');
    };
    BarberPreviousworkimgPage.prototype.getSafeUrl2 = function (url) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
    };
    BarberPreviousworkimgPage.prototype.getSafeUrl = function (url) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl('http://18.220.97.146/barber/img/barberpreviousworkimage/' + url);
    };
    BarberPreviousworkimgPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        ViewChild(Slides),
        __metadata("design:type", Slides)
    ], BarberPreviousworkimgPage.prototype, "slides", void 0);
    BarberPreviousworkimgPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-barber-previousworkimg',
            templateUrl: 'barber-previousworkimg.html',
        }),
        __metadata("design:paramtypes", [DomSanitizer, ViewController, NavController, NavParams])
    ], BarberPreviousworkimgPage);
    return BarberPreviousworkimgPage;
}());
export { BarberPreviousworkimgPage };
//# sourceMappingURL=barber-previousworkimg.js.map