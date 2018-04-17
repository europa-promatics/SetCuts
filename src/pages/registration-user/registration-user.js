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
import { ModalController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
var RegistrationUser = /** @class */ (function () {
    function RegistrationUser(geolocation, modalCtrl, navCtrl, navParams, formBuilder, loadingCtrl, http, alertCtrl) {
        this.geolocation = geolocation;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.data = {};
        this.data.response = '';
        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        this.custregister = formBuilder.group({
            name: ['', Validators.compose([Validators.maxLength(30), Validators.required])],
            useremail: ['', Validators.compose([
                    Validators.pattern(emailRegex), Validators.required
                ])],
            // gender: ['', Validators.compose([])],
            //    address:['', Validators.compose( [Validators.maxLength(200)
            // ,Validators.minLength(1),Validators.pattern(''), Validators.required])],
            pass: ['', Validators.compose([Validators.maxLength(12),
                    Validators.minLength(3), Validators.pattern(''), Validators.required])],
            contact: ['', Validators.compose([Validators.maxLength(10),
                    Validators.minLength(1), Validators.pattern(''), Validators.required])],
            cpass: ['', Validators.compose([Validators.maxLength(12),
                    Validators.minLength(3), Validators.pattern(''), Validators.required])],
        });
    }
    RegistrationUser.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistrationUser');
    };
    RegistrationUser.prototype.loginpage = function () {
        this.navCtrl.push('Login');
    };
    RegistrationUser.prototype.reg = function () {
        var _this = this;
        if (this.custregister.controls["pass"].value != this.custregister.controls["cpass"].value) {
            var alert_1 = this.alertCtrl.create({
                title: 'Alert!',
                subTitle: 'Password or confirm password Must be Same.',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            // this.navCtrl.push(Login);
            if (this.flag == true || this.flag == 'true') {
                var loader_1 = this.loadingCtrl.create({
                    content: "Please wait..."
                });
                loader_1.present();
                var link = 'http://18.220.97.146/barber/WebServices/register.json';
                var data = JSON.stringify({
                    fullname: this.full_name,
                    email: this.email,
                    password: this.password,
                    confirmpassword: this.confirm_password,
                    usertype: 0,
                    phonenumber: this.contact,
                });
                this.http.post(link, data)
                    .subscribe(function (data) {
                    loader_1.dismiss();
                    _this.data.response = data;
                    console.log(JSON.parse(data._body).status);
                    if (JSON.parse(data._body).status == 1) {
                        var alert_2 = _this.alertCtrl.create({
                            title: 'Thank You!',
                            subTitle: 'Registration successful please Check your mail inbox  and verify your account.',
                            buttons: ['OK']
                        });
                        alert_2.present();
                        _this.navCtrl.push('Login');
                    }
                    else if (JSON.parse(data._body).message == 'Entered email address or username is already registered with us.') {
                        var alert_3 = _this.alertCtrl.create({
                            title: 'Alert!',
                            subTitle: 'Entered email address  is already registered with us.',
                            buttons: ['OK']
                        });
                        alert_3.present();
                    }
                    (function (error) {
                    });
                });
            }
            else {
                var alert_4 = this.alertCtrl.create({
                    title: 'Alert!',
                    subTitle: 'Please read and accept terms & conditions.',
                    buttons: ['OK']
                });
                alert_4.present();
            }
        }
    };
    RegistrationUser.prototype.terms = function () {
        this.navCtrl.push('TermsOfservicePage');
    };
    RegistrationUser = __decorate([
        IonicPage(),
        Component({
            selector: 'page-registration-user',
            templateUrl: 'registration-user.html',
        }),
        __metadata("design:paramtypes", [Geolocation, ModalController, NavController, NavParams, FormBuilder,
            LoadingController, Http, AlertController])
    ], RegistrationUser);
    return RegistrationUser;
}());
export { RegistrationUser };
//# sourceMappingURL=registration-user.js.map