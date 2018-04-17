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
import { SalonOwnerHomePage } from '../salon-owner-home/salon-owner-home';
import { Events } from 'ionic-angular';
import { SalonHome } from '../salon-home/salon-home';
import { FormBuilder, Validators } from '@angular/forms';
import { BarberHomePage } from '../barber-home/barber-home';
var Login = /** @class */ (function () {
    function Login(formBuilder, events, menuCtrl, navCtrl, navParams, loadingCtrl, http, alertCtrl) {
        this.formBuilder = formBuilder;
        this.events = events;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.data = {};
        this.data.response = '';
        this.menu = menuCtrl;
        this.menu.enable(true, 'myMenu');
        this.email = localStorage['email'];
        this.password = localStorage['password'];
        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        this.loginform = formBuilder.group({
            emailaddress: ['', Validators.compose([Validators.maxLength(50),
                    Validators.pattern(emailRegex), Validators.required])],
            pass: ['', Validators.compose([Validators.maxLength(12),
                    Validators.minLength(3), Validators.pattern(''), Validators.required])],
        });
    }
    Login.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Login');
    };
    Login.prototype.forgot = function () {
        this.navCtrl.push('ForgetPassword');
    };
    Login.prototype.signup = function () {
        this.navCtrl.push('Creataccount');
    };
    Login.prototype.login = function () {
        var _this = this;
        if (this.flag == true || this.flag == 'true') {
            var loader_1 = this.loadingCtrl.create({
                content: "Please wait..."
            });
            loader_1.present();
            var link = 'http://18.220.97.146/barber/WebServices/login.json';
            var data = JSON.stringify({
                email: this.email,
                password: this.password,
            });
            this.http.post(link, data).subscribe(function (data) {
                loader_1.dismiss();
                _this.data.response = data;
                if (JSON.parse(data._body).status == 1) {
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Thank You!',
                        subTitle: 'Login successful.',
                        buttons: ['OK']
                    });
                    alert_1.present();
                    localStorage['user_type'] = JSON.parse(data._body).data.usertype;
                    localStorage['full_name'] = JSON.parse(data._body).data.fullname;
                    localStorage['auth'] = 'true';
                    _this.user_img = JSON.parse(data._body).data.image;
                    _this.salon_img = JSON.parse(data._body).data.profile_image;
                    _this.barber_img = JSON.parse(data._body).data.barber_image;
                    // localStorage['salon_id']=JSON.parse(data._body).data.id;
                    if (_this.remembers == 'true' || _this.remembers == true) {
                        console.log('remembers');
                        localStorage['email'] = JSON.parse(data._body).data.email;
                        localStorage['password'] = _this.password;
                    }
                    else {
                        console.log('not remembers');
                    }
                    console.log(localStorage['user_type']);
                    if (localStorage['user_type'] == 0 || localStorage['user_type'] == '0') {
                        _this.navCtrl.setRoot(SalonHome);
                        localStorage['authenicate'] = 'user';
                        localStorage['user_id'] = JSON.parse(data._body).data.id;
                        if (_this.user_img == null || _this.user_img == 'null') {
                            localStorage['img'] = 'http://18.220.97.146/barber/app_link/img/team-member2.jpg';
                        }
                        else {
                            var n = _this.user_img.includes("http");
                            if (n == true || n == 'true') {
                                localStorage['img'] = _this.user_img;
                            }
                            else {
                                localStorage['img'] = 'http://18.220.97.146/barber/img/customerprofileimage/' + _this.user_img;
                            }
                        }
                        _this.events.publish('user:created', localStorage['user_type'], localStorage['full_name'], localStorage['auth'], localStorage['img']);
                    }
                    else if (localStorage['user_type'] == 1) {
                        localStorage['authenicate'] = 'salon';
                        localStorage['salon_id'] = JSON.parse(data._body).data.id;
                        localStorage['barberId'] = JSON.parse(data._body).data.barber_id;
                        if (_this.salon_img == null || _this.salon_img == 'null') {
                            localStorage['img'] = 'http://18.220.97.146/barber/app_link/img/team-member2.jpg';
                        }
                        else {
                            var n = _this.salon_img.includes("http");
                            if (n == true || n == 'true') {
                                localStorage['img'] = _this.salon_img;
                            }
                            else {
                                localStorage['img'] = 'http://18.220.97.146/barber/img/salonprofileimage/' + _this.salon_img;
                            }
                        }
                        _this.events.publish('user:created', localStorage['user_type'], localStorage['full_name'], localStorage['auth'], localStorage['img']);
                        console.log(localStorage['user_type']);
                        _this.navCtrl.setRoot(SalonOwnerHomePage);
                    }
                    else if (localStorage['user_type'] == 2) {
                        localStorage['authenicate'] = 'barber';
                        localStorage['barber_id'] = JSON.parse(data._body).data.id;
                        localStorage['salon_under_barber_id'] = JSON.parse(data._body).data.salonid;
                        localStorage['salon_id'] = JSON.parse(data._body).data.salonid;
                        localStorage['role_rights'] = JSON.parse(data._body).data.roleright;
                        if (_this.barber_img == null || _this.barber_img == 'null') {
                            localStorage['img'] = 'http://18.220.97.146/barber/app_link/img/team-member2.jpg';
                        }
                        else {
                            localStorage['img'] = 'http://18.220.97.146/barber/img/barberimage/' + _this.barber_img;
                        }
                        _this.events.publish('user:created', localStorage['user_type'], localStorage['full_name'], localStorage['auth'], localStorage['img']);
                        console.log(localStorage['user_type']);
                        _this.navCtrl.setRoot(BarberHomePage);
                    }
                }
                else if (JSON.parse(data._body).message == "Invalid Email or password") {
                    localStorage['auth'] = 'false';
                    var alert_2 = _this.alertCtrl.create({
                        title: 'Alert!',
                        subTitle: 'Invalid Email or password.',
                        buttons: ['OK']
                    });
                    alert_2.present();
                }
                else if (JSON.parse(data._body).message == "Please first verify your account then login") {
                    localStorage['auth'] = 'false';
                    var alert_3 = _this.alertCtrl.create({
                        title: 'Alert!',
                        subTitle: 'Please first verify your account then login.',
                        buttons: ['OK']
                    });
                    alert_3.present();
                }
                else if (JSON.parse(data._body).message == "your account is not verified by admin side") {
                    localStorage['auth'] = 'false';
                    var alert_4 = _this.alertCtrl.create({
                        title: 'Alert!',
                        subTitle: 'Your account is not verified by owner.',
                        buttons: ['OK']
                    });
                    alert_4.present();
                }
                else if (JSON.parse(data._body).message == "your account is deactivated by admin side") {
                    localStorage['auth'] = 'false';
                    var alert_5 = _this.alertCtrl.create({
                        title: 'Alert!',
                        subTitle: 'Your account is not activated.',
                        buttons: ['OK']
                    });
                    alert_5.present();
                }
                (function (error) {
                });
            });
        }
        else {
            var alert_6 = this.alertCtrl.create({
                title: 'Alert!',
                subTitle: 'Please read and accept terms & conditions.',
                buttons: ['OK']
            });
            alert_6.present();
        }
    };
    Login.prototype.terms = function () {
        this.navCtrl.push('TermsOfservicePage');
    };
    Login = __decorate([
        IonicPage(),
        Component({
            selector: 'page-login',
            templateUrl: 'login.html',
        }),
        __metadata("design:paramtypes", [FormBuilder, Events, MenuController, NavController, NavParams, LoadingController, Http, AlertController])
    ], Login);
    return Login;
}());
export { Login };
//# sourceMappingURL=login.js.map