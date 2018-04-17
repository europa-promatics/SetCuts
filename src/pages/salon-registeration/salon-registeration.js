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
import { ModalController } from 'ionic-angular';
import { LocationSelectPage } from '../location-select/location-select';
import { FormBuilder, Validators } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation';
/**
 * Generated class for the SalonRegisterationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SalonRegisterationPage = /** @class */ (function () {
    function SalonRegisterationPage(navCtrl, formBuilder, navParams, alertCtrl, loadingCtrl, geolocation, http, modalCtrl) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.geolocation = geolocation;
        this.modalCtrl = modalCtrl;
        this.markers = [];
        this.address = {
            place: '',
            set: false,
        };
        this.http = http;
        this.data = {};
        this.data.response = '';
        this.location = '';
        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        var nameReg = /^([a-zA-Z ]){2,30}$/;
        this.salonregister = formBuilder.group({
            name: ['', Validators.compose([Validators.pattern(nameReg), Validators.required])],
            //   salonname: ['', Validators.compose([Validators.required])],
            useremail: ['', Validators.compose([
                    Validators.pattern(emailRegex), Validators.required
                ])],
            Bussiness_salon_email: ['', Validators.compose([
                    Validators.pattern(emailRegex), Validators.required
                ])],
            // gender: ['', Validators.compose([])],
            pass: ['', Validators.compose([Validators.maxLength(12),
                    Validators.minLength(3), Validators.pattern(''), Validators.required])],
            cpass: ['', Validators.compose([Validators.maxLength(12),
                    Validators.minLength(3), Validators.pattern(''), Validators.required])],
        });
    }
    SalonRegisterationPage.prototype.ionViewDidLoad = function () {
    };
    SalonRegisterationPage.prototype.getLocation = function () {
        var _this = this;
        this.reset();
        var modal = this.modalCtrl.create(LocationSelectPage);
        modal.onDidDismiss(function (data) {
            console.log('page > modal dismissed > data > ', data);
            if (data) {
                _this.address.place = data.description;
                // get details
                _this.geocodePlaceId(data.place_id);
            }
        });
        modal.present();
    };
    SalonRegisterationPage.prototype.reset = function () {
        this.address.place = '';
        this.address.set = false;
    };
    SalonRegisterationPage.prototype.geocodePlaceId = function (placeid) {
        var _this = this;
        var geocoder = new google.maps.Geocoder;
        geocoder.geocode({ 'placeId': placeid }, function (results, status) {
            _this.lat = results[0].geometry.location.lat();
            _this.lng = results[0].geometry.location.lng();
        });
    };
    SalonRegisterationPage.prototype.salon_reg = function () {
        var _this = this;
        if (this.flag == true || this.flag == 'true') {
            var loader_1 = this.loadingCtrl.create({
                content: "please wait..."
            });
            loader_1.present();
            var link = 'http://18.220.97.146/barber/WebServices/registerSalonOwner.json';
            var data = JSON.stringify({
                fullname: this.full_name,
                email: this.email,
                password: this.password,
                confirmpassword: this.confirm_password,
                salonname: this.salon_name,
                usertype: 1,
                location: this.address.place,
                address: this.address.place,
                latitude: this.lat,
                longitude: this.lng,
                Bussiness_salon_email: this.Bussiness_salon_email
            });
            this.http.post(link, data).subscribe(function (data) {
                loader_1.dismiss();
                _this.data.response = data;
                if (JSON.parse(data._body).status == 1) {
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Thank You!',
                        subTitle: 'Registration successful please Check your mail inbox  and verify your account',
                        buttons: ['OK']
                    });
                    alert_1.present();
                    _this.navCtrl.push('Login');
                }
                else if (JSON.parse(data._body).status == 0) {
                    var alert_2 = _this.alertCtrl.create({
                        title: 'Alert!',
                        subTitle: 'Enter Email address is already exist.',
                        buttons: ['OK']
                    });
                    alert_2.present();
                }
                (function (error) {
                });
            });
        }
        else {
            var alert_3 = this.alertCtrl.create({
                title: 'Alert!',
                subTitle: 'Please read and accept terms & conditions.',
                buttons: ['OK']
            });
            alert_3.present();
        }
    };
    SalonRegisterationPage.prototype.Salon_loginpage = function () {
        this.navCtrl.push('Login');
    };
    SalonRegisterationPage.prototype.terms = function () {
        this.navCtrl.push('TermsOfservicePage');
    };
    SalonRegisterationPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-salon-registeration',
            templateUrl: 'salon-registeration.html',
        }),
        __metadata("design:paramtypes", [NavController, FormBuilder, NavParams,
            AlertController, LoadingController, Geolocation,
            Http, ModalController])
    ], SalonRegisterationPage);
    return SalonRegisterationPage;
}());
export { SalonRegisterationPage };
//# sourceMappingURL=salon-registeration.js.map