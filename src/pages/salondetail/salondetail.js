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
import { ModalController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { ServicesProvider } from '../../providers/services/services';
import { CallNumber } from '@ionic-native/call-number';
import { SocialSharing } from '@ionic-native/social-sharing';
/**
 * Generated class for the Salondetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Salondetail = /** @class */ (function () {
    //
    function Salondetail(socialSharing, callNumber, serviceProvider, navCtrl, navParams, modalCtrl, alertCtrl, loadingCtrl, http) {
        this.socialSharing = socialSharing;
        this.callNumber = callNumber;
        this.serviceProvider = serviceProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.markers = [];
        this.latitude = parseInt(localStorage['lat']);
        this.longitude = parseInt(localStorage['lng']);
        localStorage['salon_lat'] = this.latitude;
        localStorage['salon_lng'] = this.longitude;
        this.average = this.navParams.get('average');
        this.simple_Data = this.navParams.get('simple_Data');
        // this.business_salon_email=this.navParams.get('business_salon_email');
        localStorage['Bussiness_salon_email'] = this.simple_Data.Bussiness_salon_email;
        this.phone_num = this.simple_Data.phonenumber;
        this.http = http;
        this.data = {};
        this.data.response = '';
        this.detail = 'Services';
        this.clr = 'withoutmap';
        this.salon_id = this.navParams.get('id');
        this.fulldata = this.navParams.get('full_data');
        this.first = 'false';
        this.second = 'false';
        this.third = 'false';
        this.forth = 'false';
        this.fifth = 'false';
        for (var _i = 0, _a = this.average; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p.salon_id == this.salon_id) {
                console.log(p.avgrating);
                this.avgrating = p.avgrating;
            }
        }
    }
    Salondetail.prototype.call = function () {
        this.callNumber.callNumber(this.phone_num, true)
            .then(function () { return console.log('Launched dialer!'); })
            .catch(function () { return console.log('Error launching dialer'); });
    };
    Salondetail.prototype.direction = function () {
        this.navCtrl.push('Showpath');
    };
    Salondetail.prototype.share = function () {
        var mes = null;
        var title = 'SetCuts App';
        var message = 'Share via Setcuts app';
        var img = 'http://18.220.97.146/barber/img/logo.png';
        var path = 'https://www.dropbox.com/s/gnn9lgr971uatd8/SetCuts%4018_Aug_17.apk?dl=0';
        this.socialSharing.share(message, title, img, path)
            .then(function () { }).catch(function () {
        });
    };
    Salondetail.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Salondetail');
    };
    Salondetail.prototype.bookform = function (salon_id, service_id) {
        // alert('salon_id'+salon_id);
        // alert('service_id'+service_id);
        // let modal = this.modalCtrl.create(UserBarberListPage,{id:id});
        //     modal.present();
        this.navCtrl.push('UserBarberListPage', {
            salonid: salon_id,
            service_id: service_id
        });
    };
    Salondetail.prototype.ngAfterViewInit = function () {
    };
    Salondetail.prototype.salonmarker = function (a, b) {
        if (a && b) {
            var marker = new google.maps.Marker({
                map: this.map,
                animation: google.maps.Animation.DROP,
                position: {
                    lat: a,
                    lng: b
                },
            });
        }
    };
    Salondetail.prototype.ngOnInit = function () {
        localStorage['flag'] = 1;
        this.favstat();
        this.Review_rating();
        this.salon_booking_user_check();
    };
    Salondetail.prototype.salon_booking_user_check = function () {
        var _this = this;
        var user_id = localStorage['user_id'];
        this.serviceProvider.salon_booking_user_check(this.salon_id, user_id)
            .subscribe(function (data) {
            _this.salon_Check_booking = data;
            _this.salon_booking_user_status = _this.salon_Check_booking.barber_status;
            console.log(JSON.stringify(_this.salon_booking_user_status));
        }),
            function (error) { };
    };
    Salondetail.prototype.Review_rating = function () {
        var _this = this;
        this.serviceProvider.Review_rating(this.salon_id)
            .subscribe(function (data) {
            _this.review = data.customerinfo;
            console.log('review' + _this.review);
        }),
            function (error) { };
    };
    Salondetail.prototype.favstat = function () {
        var _this = this;
        var a = localStorage['user_id'];
        this.serviceProvider.favstatus(a, this.salon_id)
            .subscribe(function (data) {
            _this.favstatus = data;
            if (_this.favstatus.status == 'active') {
                _this.stat = 1;
            }
            else {
                _this.stat = 0;
            }
        }),
            function (error) { };
    };
    Salondetail.prototype.addfav = function () {
        var _this = this;
        var a = localStorage['user_id'];
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        Observable.fromPromise(loading.present())
            .flatMap(function (data) { return _this.serviceProvider.addtofav(a, _this.salon_id); })
            .subscribe(function (data) {
            return loading.dismiss().then(function () {
                _this.fav = data;
                if (_this.fav.message == 'Add to Favourite') {
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Added in Favourite!',
                        subTitle: 'You have added this salon  in your favourite list!',
                        buttons: ['OK']
                    });
                    alert_1.present();
                    _this.stat = 1;
                }
                else if (_this.fav.message == 'Remove To Favourite') {
                    var alert_2 = _this.alertCtrl.create({
                        title: 'Removed From Favourite!',
                        subTitle: 'This salon is not longer available in your favourite list!',
                        buttons: ['OK']
                    });
                    alert_2.present();
                    _this.stat = 0;
                }
            });
        }, function (error) {
            return loading.dismiss().then(function () { });
        });
    };
    Salondetail.prototype.demo = function () {
        if (this.detail == 'Map') {
            this.clr = 'map4';
            var mapEle_1 = document.getElementById('map3');
            this.map = new google.maps.Map(mapEle_1, {
                center: {
                    lat: this.latitude,
                    lng: this.longitude
                },
                zoom: 11,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });
            google.maps.event.addListenerOnce(this.map, 'idle', function () {
                mapEle_1.classList.add('show-map');
                google.maps.event.trigger(mapEle_1, 'resize');
            });
            this.salonmarker(this.latitude, this.longitude);
        }
        else if (this.detail == 'Services') {
            this.clr = 'withoutmap';
        }
        else if (this.detail == 'Reviews') {
            if (this.salon_booking_user_status == "yes") {
                this.showcard = 'true';
            }
            this.clr = 'withoutmap';
            this.background = 'blur-filter';
        }
    };
    Salondetail.prototype.close_rating = function () {
        this.showcard = 'false';
    };
    Salondetail.prototype.submit_rating = function () {
        var _this = this;
        if (this.rating_text == '' || this.rating_text == "" || this.rating_text == undefined || this.rating_text == 'undefined') {
            var alert_3 = this.alertCtrl.create({
                title: 'Alert!',
                subTitle: 'Input field required!',
                buttons: ['OK']
            });
            alert_3.present();
            this.showcard = 'false';
        }
        else {
            this.showcard = 'false';
            if (this.count == undefined || this.count == 'undefined') {
                this.rating_count = 0;
            }
            else {
                this.rating_count = this.count;
            }
            var a = localStorage['user_id'];
            var loading_1 = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            Observable.fromPromise(loading_1.present())
                .flatMap(function (data) { return _this.serviceProvider.addrating(a, _this.rating_text, _this.rating_count, _this.salon_id); })
                .subscribe(function (data) {
                return loading_1.dismiss().then(function () {
                    // this.content=data
                    _this.ngOnInit();
                    _this.rating_text = '';
                    _this.first = 'false';
                    _this.second = 'false';
                    _this.third = 'false';
                    _this.forth = 'false';
                    _this.fifth = 'false';
                });
            }, function (error) {
                return loading_1.dismiss().then(function () {
                    _this.ngOnInit();
                });
            });
        }
    };
    Salondetail.prototype.add = function (id) {
        if (id == 1) {
            this.count = id;
            this.first = 'true';
        }
        else if (id == 2) {
            this.count = id;
            this.first = 'true';
            this.second = 'true';
        }
        else if (id == 3) {
            this.count = id;
            this.first = 'true';
            this.second = 'true';
            this.third = 'true';
        }
        else if (id == 4) {
            ;
            this.count = id;
            this.first = 'true';
            this.second = 'true';
            this.third = 'true';
            this.forth = 'true';
        }
        else if (id == 5) {
            this.count = id;
            this.first = 'true';
            this.second = 'true';
            this.third = 'true';
            this.forth = 'true';
            this.fifth = 'true';
        }
    };
    Salondetail.prototype.sub = function (id) {
        if (id == 1) {
            this.count = id - 1;
            this.first = 'false';
            this.second = 'false';
            this.third = 'false';
            this.forth = 'false';
            this.fifth = 'false';
        }
        else if (id == 2) {
            this.count = id - 1;
            this.second = 'false';
            this.third = 'false';
            this.forth = 'false';
            this.fifth = 'false';
        }
        else if (id == 3) {
            this.count = id - 1;
            this.third = 'false';
            this.forth = 'false';
            this.fifth = 'false';
        }
        else if (id == 4) {
            ;
            this.count = id - 1;
            this.forth = 'false';
            this.fifth = 'false';
        }
        else if (id == 5) {
            this.count = id - 1;
            this.fifth = 'false';
        }
    };
    Salondetail = __decorate([
        IonicPage(),
        Component({
            selector: 'page-salondetail',
            templateUrl: 'salondetail.html',
        }),
        __metadata("design:paramtypes", [SocialSharing, CallNumber, ServicesProvider, NavController, NavParams, ModalController, AlertController,
            LoadingController, Http])
    ], Salondetail);
    return Salondetail;
}());
export { Salondetail };
//# sourceMappingURL=salondetail.js.map