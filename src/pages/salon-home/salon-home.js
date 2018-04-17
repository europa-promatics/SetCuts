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
import { Observable } from 'rxjs/Rx';
import { ServicesProvider } from '../../providers/services/services';
import { Network } from '@ionic-native/network';
import { ToastController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Platform } from 'ionic-angular';
import { MenuController } from 'ionic-angular/index';
import { InAppBrowser } from '@ionic-native/in-app-browser';
/**
 * Generated class for the SalonHome page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SalonHome = /** @class */ (function () {
    function SalonHome(iab, menu, platform, diagnostic, geolocation, toastCtrl, network, serviceProvider, navCtrl, navParams, loadingCtrl, http, alertCtrl) {
        this.iab = iab;
        this.menu = menu;
        this.platform = platform;
        this.diagnostic = diagnostic;
        this.geolocation = geolocation;
        this.toastCtrl = toastCtrl;
        this.network = network;
        this.serviceProvider = serviceProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.data = {};
        this.data.response = '';
        // if(localStorage['notification']=='false'){
        //   this.value3='false';
        // }
        // else{
        //   this.value3='true';
        // }
    }
    SalonHome.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SalonHome');
        this.menu.swipeEnable(false, 'left');
        this.menu.enable(true, 'left');
    };
    SalonHome.prototype.rating = function () {
        this.showcard = 'true';
    };
    SalonHome.prototype.submit_rating = function () {
        var _this = this;
        //     this.data_barber_id
        // this.data_booking_id
        var flag = 1;
        ////////////flag=1 mean  customer rate to barber  //////////////
        this.showcard = 'false';
        if (this.count == undefined || this.count == 'undefined') {
            this.rating_count = 0;
        }
        else {
            this.rating_count = this.count;
        }
        var user_id = localStorage['user_id'];
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        Observable.fromPromise(loading.present())
            .flatMap(function (data) { return _this.serviceProvider.addrating_barber(user_id, _this.data_barber_id, _this.rating_text, _this.rating_count, _this.data_booking_id, flag); })
            .subscribe(function (data) {
            return loading.dismiss().then(function () {
                // this.content=data
                _this.first = 'false';
                _this.second = 'false';
                _this.third = 'false';
                _this.forth = 'false';
                _this.fifth = 'false';
                _this.rating_text = '';
            });
        }, function (error) {
            return loading.dismiss().then(function () { });
        });
    };
    SalonHome.prototype.close_rating = function () {
        var flag = 2;
        ////////////flag=2 mean  cancel rating //////////////
        var user_id = localStorage['user_id'];
        this.showcard = 'false';
        this.serviceProvider.addrating_barber(user_id, this.data_barber_id, this.rating_text, this.rating_count, this.data_booking_id, flag)
            .subscribe(function (data) {
            console.log('fav' + JSON.stringify(data));
        }),
            function (error) {
                alert('error' + error);
            };
    };
    SalonHome.prototype.add = function (id) {
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
    SalonHome.prototype.sub = function (id) {
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
    SalonHome.prototype.user_currentlocation = function () {
        var _this = this;
        if (localStorage['count'] != 0) {
            var confirm_1 = this.alertCtrl.create({
                title: 'Alert',
                message: 'Would you like to share your location with setcuts ?',
                buttons: [
                    {
                        text: 'No',
                        handler: function () {
                            localStorage['count'] = 0;
                            console.log('Disagree clicked');
                        }
                    },
                    {
                        text: 'Yes',
                        handler: function () {
                            _this.agree_location();
                            localStorage['count'] = 0;
                            console.log('Agree clicked');
                        }
                    }
                ]
            });
            confirm_1.present();
        }
    };
    SalonHome.prototype.agree_location = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            console.log("position data" + JSON.stringify(position));
            console.log("current latitude " + JSON.stringify(position.coords.latitude));
            console.log("current longitute " + JSON.stringify(position.coords.longitude));
            _this.lat = position.coords.latitude;
            _this.lng = position.coords.longitude;
            _this.currentposlat = position.coords.latitude;
            _this.currentposlng = position.coords.longitude;
            localStorage['customer_latitude'] = _this.currentposlat;
            localStorage['customer_longitude'] = _this.currentposlng;
            _this.customer_location(_this.currentposlat, _this.currentposlng);
            // alert('lat'+this.currentposlat+" "+'long'+this.currentposlng);
        }, function (err) {
            console.log(err);
        });
    };
    SalonHome.prototype.customer_location = function (lat, long) {
        var user_id = localStorage['user_id'];
        this.serviceProvider.customer_location(lat, long, user_id)
            .subscribe(function (data) {
            console.log(JSON.stringify(data));
        }),
            function (error) { };
    };
    SalonHome.prototype.seg = function (p, average) {
        if (this.Near == 'Nearby') {
            this.navCtrl.push('Findsalonmap');
        }
        else if (this.Near == 'Favourites') {
            this.navCtrl.push('FavouriteSalonPage', { content: p, average: average });
        }
    };
    SalonHome.prototype.map = function () {
        this.navCtrl.push('Findsalonmap');
    };
    SalonHome.prototype.favourite = function (p, average) {
        this.navCtrl.push('FavouriteSalonPage', { content: p, average: average });
    };
    SalonHome.prototype.getItems = function (ev) {
        //this.initializeItems();
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.content = this.content.filter(function (p) {
                return (p.salonname.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.content = this.cat;
        }
    };
    SalonHome.prototype.salon_detail = function (id, lat, lng, p) {
        localStorage['lat'] = lat;
        localStorage['lng'] = lng;
        this.navCtrl.push('Salondetail', { id: id, full_data: this.content, average: this.average, simple_Data: p });
    };
    SalonHome.prototype.salon_notification = function () {
        this.navCtrl.push('UserNotificationPage');
    };
    SalonHome.prototype.ngOnInit = function () {
        localStorage['flag'] = 0;
        this.Home();
        this.user_Notification_count();
        // this.internet();
        this.user_currentlocation();
        this.checkLocation();
        this.review_barber();
    };
    SalonHome.prototype.review_barber = function () {
        var _this = this;
        console.log("rating_booking" + JSON.stringify(localStorage['rating_booking_id']));
        if (localStorage['rating_booking_id']) {
            var a = JSON.parse(localStorage['rating_booking_id']);
            var b = this.unique(a);
            var d = b.length;
            var c = Math.floor(Math.random() * d);
            var e = a[c];
            ////e=booking_id/////////
            this.serviceProvider.Check_review_rating(e)
                .subscribe(function (data) {
                _this.check_review = data;
                var status = _this.check_review.status;
                if (status == 1) {
                    _this.data_barber_id = _this.check_review.data.barber_id;
                    _this.data_booking_id = _this.check_review.data.booking_id;
                    console.log(status);
                    _this.showcard = 'true';
                }
                else {
                    _this.showcard = 'false';
                }
            }),
                function (error) {
                    alert('error' + error);
                };
        }
    };
    SalonHome.prototype.unique = function (array) {
        return array.filter(function (el, index, arr) {
            return index == arr.indexOf(el);
        });
    };
    SalonHome.prototype.checkLocation = function () {
        var _this = this;
        this.platform.ready().then(function (readySource) {
            _this.diagnostic.isLocationEnabled().then(function (isAvailable) {
                console.log('Is available? ' + isAvailable);
                if (isAvailable == true) {
                    console.log('true');
                }
                else {
                    // let alert = this.alertCtrl.create({
                    //                    title: 'Alert!',
                    //                    subTitle: 'Please On Your GPS Location',
                    //                    buttons: ['OK']
                    //                });
                    //                alert.present();
                }
            }).catch(function (e) {
                console.log(e);
            });
        });
    };
    SalonHome.prototype.internet = function () {
        var _this = this;
        var disconnectSubscription = this.network.onDisconnect().subscribe(function () {
            var toast = _this.toastCtrl.create({
                message: 'network was disconnected!',
                duration: 5000,
                position: "bottom",
            });
            toast.present(toast);
        });
        var connectSubscription = this.network.onConnect().subscribe(function () {
            console.log('network connected!');
            setTimeout(function () {
                if (_this.network.type === 'wifi') {
                    var toast = _this.toastCtrl.create({
                        message: 'we got a wifi connection, woohoo!',
                        duration: 2000,
                        position: "bottom",
                    });
                    toast.present(toast);
                }
                else if (_this.network.type === 'unknown') {
                    var toast = _this.toastCtrl.create({
                        message: 'we got a unknown connection, offo!',
                        duration: 2000,
                        position: "bottom",
                        cssClass: "toast-success"
                    });
                    toast.present(toast);
                }
                else if (_this.network.type === 'ethernet') {
                    var toast = _this.toastCtrl.create({
                        message: 'we got a ethernet connection, woohoo!',
                        duration: 2000,
                        position: "bottom",
                        cssClass: "toast-success"
                    });
                    toast.present(toast);
                }
                else if (_this.network.type === '2g') {
                    var toast = _this.toastCtrl.create({
                        message: 'we got a 2g connection, woohoo!',
                        duration: 2000,
                        position: "bottom",
                        cssClass: "toast-success"
                    });
                    toast.present(toast);
                }
                else if (_this.network.type === '3g') {
                    var toast = _this.toastCtrl.create({
                        message: 'we got a 3g connection, woohoo!',
                        duration: 2000,
                        position: "bottom",
                        cssClass: "toast-success"
                    });
                    toast.present(toast);
                }
                else if (_this.network.type === '4g') {
                    var toast = _this.toastCtrl.create({
                        message: 'we got a 4g connection, woohoo!',
                        duration: 2000,
                        position: "bottom",
                        cssClass: "toast-success"
                    });
                    toast.present(toast);
                }
                else if (_this.network.type === 'none') {
                    var toast = _this.toastCtrl.create({
                        message: 'we got a none connection, offo!',
                        duration: 2000,
                        position: "bottom",
                        cssClass: "toast-success"
                    });
                    toast.present(toast);
                }
            }, 3000);
        });
    };
    SalonHome.prototype.Home = function () {
        var _this = this;
        this.serviceProvider.salonhome()
            .subscribe(function (data) {
            _this.content = data.saloninfo;
            _this.average = data.averagerating;
            _this.serviceProvider.loginmodel = data.saloninfo;
            _this.cat = data.saloninfo;
            //         setTimeout(() => {
            //  this.Home();
            // }, 5000);
        }),
            function (error) { };
        //  let loading = this.loadingCtrl.create({content: 'Please wait...'});
        //         Observable.fromPromise(loading.present())
        //         .flatMap(data => this.serviceProvider.salonhome())
        //         .subscribe(data =>
        //           loading.dismiss().then(() =>{ 
        //                this.content=data.saloninfo;
        //           this.average=data.averagerating;
        // this.serviceProvider.loginmodel=data.saloninfo;
        //            this.cat=data.saloninfo;
        //           }),
        //           error =>
        //           loading.dismiss().then(() => {})
        //           );
    };
    //     pay(){
    // var bookingid=2;
    // var clientDetails_applicationId="APP-80W284485P519543T";
    // var clientDetails_ipAddress="127.0.0.1";
    // var currencyCode="USD";
    // var feesPayer="SETCUTS"
    // var memo="Hair cutting";
    // var receiverList_receiver0_amount="21.00";
    // var receiverList_receiver0_email="info-facilitator@commercefactory.org";
    // var receiverList_receiver0_primary="true"
    // var receiverList_receiver1_amount="11.00";
    // var receiverList_receiver1_email="us-provider@commercefactory.org"
    // var receiverList_receiver1_primary="false";
    // var requestEnvelope_errorLanguag="en_US";
    // var returnUrl="http://www.yourdomain.com/success.html";
    // var cancelUrl="http://www.yourdomain.com/cancel.html";
    //  let loading = this.loadingCtrl.create({content: 'Please wait...'});
    //         Observable.fromPromise(loading.present())
    //         .flatMap(data => this.serviceProvider.DemoPay(clientDetails_applicationId,
    // clientDetails_ipAddress,
    // currencyCode,
    // feesPayer,
    // memo,
    // receiverList_receiver0_amount,
    // receiverList_receiver0_email,
    // receiverList_receiver0_primary,
    // receiverList_receiver1_amount,
    // receiverList_receiver1_email,
    // receiverList_receiver1_primary,
    // requestEnvelope_errorLanguag,returnUrl,
    // cancelUrl,bookingid))
    //         .subscribe(data =>
    //           loading.dismiss().then(() =>{ 
    //             console.log(JSON.stringify(data))
    //             this.a=data; 
    //             alert("data"+JSON.stringify(this.a.link));
    //             const browser = this.iab.create(this.a.link);
    //           }),
    //           error =>
    //           loading.dismiss().then(() => {
    //             alert("error"+error); 
    //           })
    //           );
    //     }
    //    notification_access(){
    //          if( localStorage['count']!=0){
    //   let confirm = this.alertCtrl.create({
    //     title: 'Enable Notifications?',
    //     message: 'Get notification for new booking , when someone add you as a barber',
    //     buttons: [
    //       {
    //         text: 'Not Now',
    //         handler: () => {
    //            this.value3='false';
    //            localStorage['count']=0;
    //            localStorage['notification']='false';
    //           console.log('Disagree clicked');
    //         }
    //       },
    //       {
    //         text: 'Yes',
    //         handler: () => {
    //            this.value3='true';
    //            localStorage['count']=0;
    //              localStorage['notification']='true';
    //              this.u();
    //           console.log('Agree clicked');
    //         }
    //       }
    //     ]
    //   });
    //   confirm.present();
    // }
    //   }
    SalonHome.prototype.user_Notification_count = function () {
        var _this = this;
        var user_id = localStorage['user_id'];
        this.serviceProvider.userNotification(user_id)
            .subscribe(function (data) {
            if (localStorage['user_type'] == 0 && localStorage['flag'] == 0) {
                setTimeout(function () {
                    _this.user_Notification_count();
                }, 10000);
            }
            if (data.totalcustomer) {
                _this.user_count = data.totalcustomer.count;
            }
            console.log(_this.user_count);
        }),
            function (error) { };
    };
    SalonHome = __decorate([
        IonicPage(),
        Component({
            selector: 'page-salon-home',
            templateUrl: 'salon-home.html',
        }),
        __metadata("design:paramtypes", [InAppBrowser, MenuController, Platform, Diagnostic, Geolocation, ToastController, Network, ServicesProvider, NavController, NavParams, LoadingController, Http, AlertController])
    ], SalonHome);
    return SalonHome;
}());
export { SalonHome };
//# sourceMappingURL=salon-home.js.map