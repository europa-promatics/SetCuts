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
import { LoadingController, MenuController } from 'ionic-angular';
import { Http } from '@angular/http';
import { ServicesProvider } from '../../providers/services/services';
/**
 * Generated class for the AboutusUser page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AboutusUser = /** @class */ (function () {
    function AboutusUser(serviceProvider, navCtrl, navParams, menuCtrl, loadingCtrl, http, alertCtrl) {
        this.serviceProvider = serviceProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.data = {};
        this.data.response = '';
    }
    AboutusUser.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutusUser');
    };
    AboutusUser.prototype.welcomepage = function () {
        this.navCtrl.push('AboutWelcome', { full_data: this.content });
    };
    AboutusUser.prototype.servicelist = function () {
        this.navCtrl.push('AboutService', { full_data: this.content });
    };
    AboutusUser.prototype.ngOnInit = function () {
        var _this = this;
        this.serviceProvider.About_us()
            .subscribe(function (data) {
            if (data.message == "something Wrong") {
            }
            else {
                _this.content = data.data;
                console.log('aboutus' + _this.content);
            }
        }),
            function (error) { };
    };
    AboutusUser = __decorate([
        IonicPage(),
        Component({
            selector: 'page-aboutus-user',
            templateUrl: 'aboutus-user.html',
        }),
        __metadata("design:paramtypes", [ServicesProvider, NavController, NavParams, MenuController, LoadingController, Http, AlertController])
    ], AboutusUser);
    return AboutusUser;
}());
export { AboutusUser };
//# sourceMappingURL=aboutus-user.js.map