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
import { ServicesProvider } from '../../providers/services/services';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Platform } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { SViewSchedulePage } from '../s-view-schedule/s-view-schedule';
/**
 * Generated class for the BarberHomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var BarberHomePage = /** @class */ (function () {
    function BarberHomePage(modalCtrl, toastCtrl, platform, diagnostic, geolocation, alertCtrl, serviceProvider, navCtrl, navParams, loadingCtrl) {
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.diagnostic = diagnostic;
        this.geolocation = geolocation;
        this.alertCtrl = alertCtrl;
        this.serviceProvider = serviceProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.c = 'false';
        this.b = 'false';
        this.a = 'false';
        if (localStorage['notification'] == 'false') {
            this.value3 = 'false';
        }
        else {
            this.value3 = 'true';
        }
    }
    BarberHomePage.prototype.barber_notification = function () {
        this.navCtrl.push('SalonNotificationPage', { notfication_data: this.bookinginfo });
    };
    BarberHomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BarberHomePage');
    };
    //   Status(){
    // var a=localStorage['barber_id'];
    // if(this.status==true){
    // var Status_active=1;
    // 	  let alert = this.alertCtrl.create({
    //     title: 'Confirm Status',
    //     message: 'Are you sure you want to be on duty?',
    //     buttons: [
    //       {
    //         text: 'No',
    //         role: 'cancel',
    //         handler: () => {
    //           console.log('No clicked');
    //           this.status_text='Off Duty';
    //           this.status='false';
    //         }
    //       },
    //       {
    //         text: 'Yes',
    //         handler: () => {
    //           console.log('Yes clicked');
    //           this.status_text='On Duty';
    //           	 this.serviceProvider.Status(a, Status_active)
    //          .subscribe(data  =>{ 
    //          	this.barberStatusdata=data;
    //          	if(this.barberStatusdata.message=="Barber status active saved suceessfully"){
    // console.log("active");
    //  this.status='true';
    //  let alert = this.alertCtrl.create({
    //                     subTitle: 'Status Updated successful ',
    //                     buttons: ['OK']
    //                     });
    //                     alert.present();  
    //   }
    //   console.log('data'+JSON.stringify(this.barberStatusdata.message));
    //         }),
    //         error  => {}
    //         }
    //       }
    //     ]
    //   });
    //   alert.present();
    //   }
    //   else if(this.status==false){
    //   	var Status_active=0;
    //   		  let alert = this.alertCtrl.create({
    //     title: 'Confirm Status',
    //     message: 'Are you sure you want to be off duty?',
    //     buttons: [
    //       {
    //         text: 'No',
    //         role: 'cancel',
    //         handler: () => {
    //           console.log('No clicked');
    //           this.status_text='On Duty';
    //           this.status='true';
    //         }
    //       },
    //       {
    //         text: 'Yes',
    //         handler: () => {
    //           console.log('Yes clicked');
    //           this.status_text='Off Duty';
    //           	 this.serviceProvider.Status(a, Status_active)
    //          .subscribe(data  =>{ 
    //   this.barberStatusdata=data;
    //     console.log('data'+JSON.stringify(this.barberStatusdata.message));
    //   if(this.barberStatusdata.message=="Barber status inactive saved successfully"){
    // console.log("Inactive");
    // this.status='false';
    //  let alert = this.alertCtrl.create({
    //                     subTitle: 'Status Updated successful ',
    //                     buttons: ['OK']
    //                     });
    //                     alert.present();     
    //   }
    //         }),
    //         error  => {}
    //         }
    //       }
    //     ]
    //   });
    //   alert.present();
    //   }
    // }
    BarberHomePage.prototype.add = function (id) {
        if (id == 0) {
            this.a = 'true';
            this.b = 'false';
            this.c = 'false';
            this.d = 'false';
            this.e = 'false';
            this.f = 'false';
            this.g = 'false';
            this.h = 'false';
            this.i = 'false';
        }
        else if (id == 1) {
            this.a = 'false';
            this.b = 'true';
            this.c = 'false';
            this.d = 'false';
            this.e = 'false';
            this.f = 'false';
            this.g = 'false';
            this.h = 'false';
            this.i = 'false';
            this.navCtrl.push('SalonBarberProfilePage');
        }
        else if (id == 2) {
            this.a = 'false';
            this.b = 'false';
            this.c = 'true';
            this.d = 'false';
            this.e = 'false';
            this.f = 'false';
            this.g = 'false';
            this.h = 'false';
            this.i = 'false';
            // this.navCtrl.push('BarberAppointmentPage');
            this.navCtrl.push(SViewSchedulePage);
        }
        else if (id == 3) {
            this.a = 'false';
            this.b = 'false';
            this.c = 'false';
            this.d = 'true';
            this.e = 'false';
            this.f = 'false';
            this.g = 'false';
            this.h = 'false';
            this.i = 'false';
        }
        else if (id == 4) {
            this.a = 'false';
            this.b = 'false';
            this.c = 'false';
            this.d = 'false';
            this.e = 'true';
            this.f = 'false';
            this.g = 'false';
            this.h = 'false';
            this.i = 'false';
            this.navCtrl.push('BarberGalleryPage');
        }
        else if (id == 5) {
            this.a = 'false';
            this.b = 'false';
            this.c = 'false';
            this.d = 'false';
            this.e = 'false';
            this.f = 'true';
            this.g = 'false';
            this.h = 'false';
            this.i = 'false';
            // let profileModal = this.modalCtrl.create('BarberSchedulePage',{barber_id:localStorage['barber_id']});
            //   profileModal.present();
            this.navCtrl.push('BarberSchedulePage', { barber_id: localStorage['barber_id'] });
        }
        else if (id == 6) {
            this.a = 'false';
            this.b = 'false';
            this.c = 'false';
            this.d = 'false';
            this.e = 'false';
            this.f = 'false';
            this.g = 'true';
            this.h = 'false';
            this.i = 'false';
            this.navCtrl.push('BarberAboutUsPage');
        }
        else if (id == 7) {
            this.a = 'false';
            this.b = 'false';
            this.c = 'false';
            this.d = 'false';
            this.e = 'false';
            this.f = 'false';
            this.g = 'false';
            this.h = 'true';
            this.i = 'false';
            this.navCtrl.push('FaqPage');
        }
        else if (id == 8) {
            this.a = 'false';
            this.b = 'false';
            this.c = 'false';
            this.d = 'false';
            this.e = 'false';
            this.f = 'false';
            this.g = 'false';
            this.h = 'false';
            this.i = 'true';
            this.navCtrl.push('ContactUsPage');
        }
    };
    BarberHomePage.prototype.ngOnInit = function () {
        this.notification_access();
        localStorage['flag'] = 0;
        // this.getnotfication();
        // this.barberstatus();
        if (localStorage['notification'] == 'true') {
            this.getnotfication();
        }
        // this.currentl();
        // this.checkLocation();
    };
    BarberHomePage.prototype.notification_access = function () {
        var _this = this;
        if (localStorage['count'] != 0) {
            var confirm_1 = this.alertCtrl.create({
                title: 'Enable Notifications?',
                message: 'Get notification for new booking , when someone add you as a barber',
                buttons: [
                    {
                        text: 'Not Now',
                        handler: function () {
                            _this.value3 = 'false';
                            localStorage['count'] = 0;
                            localStorage['notification'] = 'false';
                            console.log('Disagree clicked');
                        }
                    },
                    {
                        text: 'Yes',
                        handler: function () {
                            _this.getnotfication();
                            _this.value3 = 'true';
                            localStorage['count'] = 0;
                            localStorage['notification'] = 'true';
                            console.log('Agree clicked');
                        }
                    }
                ]
            });
            confirm_1.present();
        }
    };
    BarberHomePage.prototype.checkLocation = function () {
        var _this = this;
        this.platform.ready().then(function (readySource) {
            _this.diagnostic.isLocationEnabled().then(function (isAvailable) {
                console.log('Is available? ' + isAvailable);
                if (isAvailable == true) {
                    console.log('true');
                }
                else {
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Alert!',
                        subTitle: 'Please On Your GPS Location',
                        buttons: ['OK']
                    });
                    alert_1.present();
                }
            }).catch(function (e) {
                console.log(e);
            });
        });
    };
    BarberHomePage.prototype.currentl = function () {
        var _this = this;
        if (localStorage['count'] != 0) {
            var confirm_2 = this.alertCtrl.create({
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
            confirm_2.present();
        }
    };
    BarberHomePage.prototype.agree_location = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            console.log("position data" + JSON.stringify(position));
            console.log("current latitude " + JSON.stringify(position.coords.latitude));
            console.log("current longitute " + JSON.stringify(position.coords.longitude));
            _this.lat = position.coords.latitude;
            _this.lng = position.coords.longitude;
            localStorage['barber_latitude'] = _this.lat;
            localStorage['barber_longitude'] = _this.lng;
            // alert('barber_lat'+this.lat+" "+'barber_long'+this.lat);
        }, function (err) {
            console.log(err);
        });
    };
    BarberHomePage.prototype.getnotfication = function () {
        var _this = this;
        // let loading = this.loadingCtrl.create({content: 'Please wait...'});
        //    Observable.fromPromise(loading.present())
        //    .flatMap(data => this.serviceProvider.notification(localStorage['barber_id']))
        //    .subscribe(data =>
        //    loading.dismiss().then(() =>{ 
        //    	this.bookinginfo=data.bookinginfo;
        //    	this.notification_count=data.totalcustomer.count;
        //    }),
        //    error =>
        //    loading.dismiss().then(() => {})
        //    );
        this.serviceProvider.notification(localStorage['barber_id'])
            .subscribe(function (data) {
            _this.bookinginfo = data.bookinginfo;
            _this.notification_count = data.totalcustomer.count;
            if (localStorage['user_type'] == 2 || localStorage['flag'] == 0) {
                setTimeout(function () {
                    _this.getnotfication();
                }, 10000);
            }
        }),
            function (error) { };
    };
    BarberHomePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-barber-home',
            templateUrl: 'barber-home.html',
        }),
        __metadata("design:paramtypes", [ModalController, ToastController, Platform, Diagnostic, Geolocation, AlertController, ServicesProvider, NavController, NavParams, LoadingController])
    ], BarberHomePage);
    return BarberHomePage;
}());
export { BarberHomePage };
//# sourceMappingURL=barber-home.js.map