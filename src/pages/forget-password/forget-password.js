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
import { FormBuilder, Validators } from '@angular/forms';
/**
 * Generated class for the ForgetPassword page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ForgetPassword = /** @class */ (function () {
    function ForgetPassword(formBuilder, navCtrl, navParams, alertCtrl, loadingCtrl, http) {
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.data = {};
        this.data.response = '';
        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        this.loginform = formBuilder.group({
            emailaddress: ['', Validators.compose([Validators.maxLength(50),
                    Validators.pattern(emailRegex), Validators.required])],
        });
    }
    ForgetPassword.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgetPassword');
    };
    ForgetPassword.prototype.send = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();
        var link = 'http://18.220.97.146/barber/WebServices/forgotpassword.json';
        var data = JSON.stringify({
            email: this.email,
        });
        this.http.post(link, data)
            .subscribe(function (data) {
            loader.dismiss();
            _this.data.response = data;
            console.log(JSON.parse(data._body).status);
            if (JSON.parse(data._body).status == 1) {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Alert!',
                    subTitle: 'Check your mail inbox and follow the procedure to reset your passowrd ',
                    buttons: ['OK']
                });
                alert_1.present();
            }
            else if (JSON.parse(data._body).status == 0) {
                var alert_2 = _this.alertCtrl.create({
                    title: 'Alert!',
                    subTitle: 'Invalid email address.',
                    buttons: ['OK']
                });
                alert_2.present();
            }
            (function (error) {
            });
        });
    };
    ForgetPassword.prototype.Login = function () {
        this.navCtrl.push('Login');
    };
    ForgetPassword = __decorate([
        IonicPage(),
        Component({
            selector: 'page-forget-password',
            templateUrl: 'forget-password.html',
        }),
        __metadata("design:paramtypes", [FormBuilder, NavController, NavParams, AlertController, LoadingController, Http])
    ], ForgetPassword);
    return ForgetPassword;
}());
export { ForgetPassword };
//# sourceMappingURL=forget-password.js.map