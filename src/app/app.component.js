var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { SalonHome } from '../pages/salon-home/salon-home';
import { SalonOwnerHomePage } from '../pages/salon-owner-home/salon-owner-home';
import { Events } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { AlertController } from 'ionic-angular';
import { BarberHomePage } from '../pages/barber-home/barber-home';
import { SalonPaymentHistoryPage } from '../pages/salon-payment-history/salon-payment-history';
import { CustomerPaymentHistoryPage } from '../pages/customer-payment-history/customer-payment-history';
var MyApp = /** @class */ (function () {
    function MyApp(alertCtrl, socialSharing, events, platform, statusBar, splashScreen) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.socialSharing = socialSharing;
        this.events = events;
        events.subscribe('user:created', function (user, fname, autth, user_img, log) {
            if (log) {
                console.log('welcome ' + log + '' + user + '' + fname);
                _this.img = log;
                localStorage['img'] = log;
                _this.name = fname;
            }
            else {
                console.log('Welcome', user + 'name' + fname);
                // alert('Welcome'+user_img);
                _this.usertype = user;
                _this.name = fname;
                _this.auth = autth;
                _this.img1 = user_img;
                if (_this.img1 == null || _this.img1 == 'null') {
                    _this.img = 'null';
                }
                else {
                    _this.img = user_img;
                }
            }
        });
        this.pages = [
            // { title: 'Paysuccess', component: 'PaymentSucessPage', logo: 'home'},
            { title: 'HOME', component: SalonHome, logo: 'home' },
            { title: 'MY APPOINTMENTS', component: 'UserAppointmentPage', logo: 'home' },
            // { title: 'ACCOUNT SECTION', component: 'AccountSectionPage', logo: 'home'},
            { title: 'PAYMENT', component: 'PayemntUserPage', logo: 'home' },
            { title: 'ORDER HISTORY', component: CustomerPaymentHistoryPage, logo: 'home' },
            { title: 'HOW IT WORKS', component: 'HowItWorksPage', logo: 'home' },
            { title: 'FAQ', component: 'FaqPage', logo: 'home' },
            { title: 'CONTACT US', component: 'ContactUsPage', logo: 'home' },
        ];
        this.salon = [
            { title: 'HOME', component: SalonOwnerHomePage, logo: 'home' },
            // { title: 'MY AVAILABILITY', component: 'SalonAvailabilityPage', logo: 'home'},
            // { title: 'MY BARBERS', component: 'SalonBarberListPage', logo: 'home'},
            { title: 'MY SERVICES', component: 'SalonServicePage', logo: 'home' },
            { title: 'OUR CUSTOMER', component: 'SalonAppointmentPage', logo: 'home' },
            { title: 'ORDER HISTORY', component: SalonPaymentHistoryPage, logo: 'home' },
        ];
        this.barber = [
            { title: 'HOME', component: BarberHomePage, logo: 'home' },
            { title: 'MY CUSTOMER', component: 'BarberAppointmentPage', logo: 'home' },
        ];
        if (localStorage['authenicate'] == 'user') {
            this.rootPage = SalonHome;
            this.usertype = 0;
            this.auth = 'true';
            this.img = localStorage['img'];
            this.name = localStorage['full_name'];
        }
        else if (localStorage['authenicate'] == 'salon') {
            this.rootPage = SalonOwnerHomePage;
            this.usertype = 1;
            this.auth = 'true';
            this.img = localStorage['img'];
            this.name = localStorage['full_name'];
        }
        else if (localStorage['authenicate'] == 'barber') {
            this.rootPage = BarberHomePage;
            this.usertype = 2;
            this.auth = 'true';
            this.img = localStorage['img'];
            this.name = localStorage['full_name'];
        }
        else if (localStorage['authenicate'] != 'salon' || localStorage['authenicate'] != 'user' || localStorage['authenicate'] != 'barber') {
            this.rootPage = HomePage;
        }
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.login = function () {
        this.nav.setRoot('Login');
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.salonPage = function (page) {
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.share = function () {
        var mes = null;
        var title = 'SetCuts App';
        var message = 'Share via Setcuts app';
        var img = 'http://europa.promaticstechnologies.com/barber/img/logo.png';
        var path = 'https://www.dropbox.com/s/gnn9lgr971uatd8/SetCuts%4018_Aug_17.apk?dl=0';
        this.socialSharing.share(message, title, img, path)
            .then(function () { }).catch(function () {
        });
    };
    MyApp.prototype.edit_page = function () {
        this.nav.setRoot('UserProfile');
    };
    MyApp.prototype.edit_Profile_Salon = function () {
        this.nav.setRoot('SalonOwnerProfilePage');
    };
    MyApp.prototype.edit_Profile_barber = function () {
        this.nav.setRoot('SalonBarberProfilePage');
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        delete localStorage['user_id'];
        var confirm = this.alertCtrl.create({
            title: 'Alert!',
            message: 'Are you sure want to Logout?',
            buttons: [
                {
                    text: 'Disagree',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Agree',
                    handler: function () {
                        _this.auth = 'false';
                        delete localStorage['authenicate'];
                        delete localStorage['user_type'];
                        delete localStorage['count'];
                        delete localStorage['salon_under_barber_id'];
                        delete localStorage['salon_id'];
                        delete localStorage['barber_id'];
                        delete localStorage['user_id'];
                        delete localStorage['role_rights'];
                        delete localStorage['flag'];
                        delete localStorage['notification'];
                        console.log('Agree clicked');
                        _this.nav.push(HomePage);
                    }
                }
            ]
        });
        confirm.present();
    };
    __decorate([
        ViewChild(Nav),
        __metadata("design:type", Nav)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Component({
            templateUrl: 'app.html'
        }),
        __metadata("design:paramtypes", [AlertController, SocialSharing, Events, Platform, StatusBar, SplashScreen])
    ], MyApp);
    return MyApp;
}());
export { MyApp };
//# sourceMappingURL=app.component.js.map