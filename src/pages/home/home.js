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
import { NavController } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { ServicesProvider } from '../../providers/services/services';
import { SalonHome } from '../salon-home/salon-home';
import { SalonOwnerHomePage } from '../salon-owner-home/salon-owner-home';
import { Events } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { MenuController } from 'ionic-angular/index';
var HomePage = /** @class */ (function () {
    function HomePage(menu, alertCtrl, actionSheetCtrl, events, serviceProvider, fb, navCtrl) {
        this.menu = menu;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.events = events;
        this.serviceProvider = serviceProvider;
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.FB_APP_ID = 350227812117177;
        this.fb.browserInit(this.FB_APP_ID, "v2.8");
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.menu.swipeEnable(false, 'left');
        this.menu.enable(false, 'left');
    };
    HomePage.prototype.creataccount = function () {
        this.navCtrl.push('Creataccount');
    };
    HomePage.prototype.login = function () {
        this.navCtrl.push('Login');
    };
    HomePage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Login as a',
            buttons: [
                {
                    text: 'CUSTOMER',
                    role: 'destructive',
                    handler: function () {
                        var user_type = 0;
                        _this.fb_login(user_type);
                        console.log('Destructive clicked');
                    }
                }, {
                    text: 'SALON OWNER',
                    handler: function () {
                        var user_type = 1;
                        _this.fb_login(user_type);
                        console.log('Archive clicked');
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    HomePage.prototype.fb_login = function (user_type) {
        var _this = this;
        var permissions = new Array();
        permissions = ["public_profile", "email"];
        this.fb.login(permissions)
            .then(function (response) {
            var userId = response.authResponse.userID;
            var params = new Array();
            _this.fb.api("/me?fields=name,gender,email,id", params)
                .then(function (user) {
                user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
                _this.facebook(user.email, user.name, userId, user_type, user.picture);
            });
        }, function (error) {
            var alert = _this.alertCtrl.create({
                title: 'Alert!',
                subTitle: 'Something went wrong.',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    HomePage.prototype.facebook = function (email, username, fbid, user_type, img) {
        var _this = this;
        this.serviceProvider.Facebook(email, username, fbid, user_type, img)
            .subscribe(function (data) {
            _this.item = data;
            console.log(JSON.stringify(_this.item));
            _this.items = _this.item.data;
            if (user_type == _this.items.usertype) {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Thank You!',
                    subTitle: 'Login successful.',
                    buttons: ['OK']
                });
                alert_1.present();
                localStorage['user_type'] = _this.items.usertype;
                localStorage['full_name'] = _this.items.fullname;
                localStorage['salon_id'] = _this.items.id;
                localStorage['barber_id'] = _this.items.id;
                localStorage['user_id'] = _this.items.id;
                localStorage['auth'] = 'true';
                localStorage['img'] = _this.items.image;
                _this.events.publish('user:created', localStorage['user_type'], localStorage['full_name'], localStorage['auth'], localStorage['img']);
                if (_this.items.usertype == 0) {
                    localStorage['authenicate'] = 'user';
                    _this.navCtrl.setRoot(SalonHome);
                }
                else if (_this.items.usertype == 1) {
                    localStorage['authenicate'] = 'salon';
                    _this.navCtrl.setRoot(SalonOwnerHomePage);
                }
            }
            else {
                if (_this.items.usertype == 0) {
                    var alert_2 = _this.alertCtrl.create({
                        title: 'Alert!',
                        subTitle: 'Email id already exist as a customer',
                        buttons: ['OK']
                    });
                    alert_2.present();
                }
                else if (_this.items.usertype == 1) {
                    var alert_3 = _this.alertCtrl.create({
                        title: 'Alert!',
                        subTitle: 'Email id already exist as a salon owner',
                        buttons: ['OK']
                    });
                    alert_3.present();
                }
            }
        }),
            function (error) {
                // let alert = this.alertCtrl.create({
                //                title: 'Alert!',
                //                subTitle: 'Something went wrong',
                //                buttons: ['OK']
                //            });
                //            alert.present();
            };
    };
    HomePage.prototype.react_service = function () {
        localStorage['array'] = ['a', 'b', 'c'];
        alert();
        var user_id = localStorage['user_id'];
        this.serviceProvider.react_service()
            .subscribe(function (data) {
            console.log("data" + JSON.stringify(data));
        }),
            function (error) { };
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [MenuController, AlertController, ActionSheetController, Events, ServicesProvider, Facebook, NavController])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
// constructor(public menu: MenuController) {
//    this.menu1Active();
//  }
//  menu1Active() {
//    this.activeMenu = 'menu1';
//    this.menu.enable(true, 'menu1');
//    this.menu.enable(false, 'menu2');
//  }
//  menu2Active() {
//    this.activeMenu = 'menu2';
//    this.menu.enable(false, 'menu1');
//    this.menu.enable(true, 'menu2');
//  }
//# sourceMappingURL=home.js.map