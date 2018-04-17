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
var AboutWelcome = /** @class */ (function () {
    function AboutWelcome(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.d = this.navParams.get('full_data');
        if (this.d == undefined || this.d == 'undeifned') {
        }
        else {
            this.fulldata = this.navParams.get('full_data');
        }
        console.log(JSON.stringify(this.fulldata));
    }
    AboutWelcome.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutWelcome');
    };
    AboutWelcome = __decorate([
        IonicPage(),
        Component({
            selector: 'page-about-welcome',
            templateUrl: 'about-welcome.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], AboutWelcome);
    return AboutWelcome;
}());
export { AboutWelcome };
//# sourceMappingURL=about-welcome.js.map