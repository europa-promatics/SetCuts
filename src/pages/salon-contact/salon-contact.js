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
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
/**
 * Generated class for the SalonContactPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SalonContactPage = /** @class */ (function () {
    function SalonContactPage(navCtrl, navParams, http, alertCtrl, loadingCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.http = http;
        this.data = {};
        this.usertype = localStorage['user_type'];
        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        var name = /^[a-zA-Z ]{2,30}$/;
        this.contactform = formBuilder.group({
            name: ['', Validators.compose([Validators.pattern(name), Validators.required])],
            email: ['', Validators.compose([
                    Validators.pattern(emailRegex), Validators.required
                ])],
            countrycode: ['', Validators.compose([Validators.required])],
            number: ['', Validators.compose([Validators.required])],
            title: ['', Validators.compose([Validators.pattern(name), Validators.required])],
            message: ['', Validators.compose([Validators.pattern(name), Validators.required])],
        });
    }
    SalonContactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SalonContactPage');
    };
    SalonContactPage.prototype.ngOnInit = function () {
    };
    SalonContactPage.prototype.saloncontact = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();
        var link = 'http://18.220.97.146/barber/WebServices/contactUs.json';
        var data = JSON.stringify({
            usertype: this.usertype,
            name: this.name,
            email: this.email,
            countrycode: this.countrycode,
            contactnumber: this.number,
            messagetitle: this.title,
            yourmessage: this.message,
        });
        this.http.post(link, data)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            loader.dismiss();
            _this.data = data;
            console.log("response" + JSON.stringify(_this.data.message));
            if (_this.data.status == 1) {
                _this.name = '';
                _this.email = '';
                _this.countrycode = '';
                _this.number = '';
                _this.title = '';
                _this.message = '';
                var alert_1 = _this.alertCtrl.create({
                    title: 'Thank You!',
                    subTitle: 'Your message has been sent, We will contact you shortly!',
                    buttons: ['OK']
                });
                alert_1.present();
                _this.usertype = '';
            }
            else if (_this.data.status == 0) {
                var alert_2 = _this.alertCtrl.create({
                    title: 'Alert!',
                    subTitle: 'Input Field Required.',
                    buttons: ['OK']
                });
                alert_2.present();
            }
        });
    };
    SalonContactPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-salon-contact',
            templateUrl: 'salon-contact.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, Http, AlertController,
            LoadingController, FormBuilder])
    ], SalonContactPage);
    return SalonContactPage;
}());
export { SalonContactPage };
//# sourceMappingURL=salon-contact.js.map