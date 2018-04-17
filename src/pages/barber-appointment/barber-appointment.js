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
import { Observable } from 'rxjs/Rx';
import { ServicesProvider } from '../../providers/services/services';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { DomSanitizer } from "@angular/platform-browser";
import { ModalController } from 'ionic-angular';
/**
 * Generated class for the BarberAppointmentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var BarberAppointmentPage = /** @class */ (function () {
    function BarberAppointmentPage(modalCtrl, domSanitizer, alertCtrl, serviceProvider, loadingCtrl, navCtrl, navParams) {
        this.modalCtrl = modalCtrl;
        this.domSanitizer = domSanitizer;
        this.alertCtrl = alertCtrl;
        this.serviceProvider = serviceProvider;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Appointments = 'UPCOMING';
    }
    BarberAppointmentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BarberAppointmentPage');
    };
    BarberAppointmentPage.prototype.getSafeUrl = function (url) {
        var a = url;
        var b = a.includes('http');
        if (b == true || b == 'true') {
            return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
        }
        else {
            return this.domSanitizer.bypassSecurityTrustResourceUrl('http://18.220.97.146/barber/img/customerprofileimage/' + url);
        }
    };
    BarberAppointmentPage.prototype.view_customer_profile = function (customer_id, lat, long) {
        localStorage['customer_latitude'] = lat;
        localStorage['customer_longitude'] = long;
        //  let modal = this.modalCtrl.create('UserProfile',{customer_id:customer_id});
        // modal.present();
        this.navCtrl.push('UserProfile', { customer_id: customer_id });
    };
    BarberAppointmentPage.prototype.ngOnInit = function () {
        var _this = this;
        var barber_id = localStorage['barber_id'];
        var loading = this.loadingCtrl.create({ content: 'please wait...' });
        Observable.fromPromise(loading.present())
            .flatMap(function (data) { return _this.serviceProvider.barber_appointment(barber_id); })
            .subscribe(function (data) { return loading.dismiss().then(function () {
            _this.past = data;
            _this.pastAppointment = _this.past.pastinfo;
            _this.upcomingAppointment = _this.past.upcominginfo;
            _this.cancelAppointment = _this.past.cancelinfo;
            _this.currentAppontment = _this.past.currentinfo;
            _this.role_right = localStorage['role_rights'];
            // console.log('past'+JSON.stringify(this.pastAppointment));
        }); }, function (error) {
            return loading.dismiss().then(function () { });
        });
        // setInterval(()=>{
        //   this.getnotfication()
        // }, 50000);
    };
    BarberAppointmentPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-barber-appointment',
            templateUrl: 'barber-appointment.html',
        }),
        __metadata("design:paramtypes", [ModalController, DomSanitizer, AlertController, ServicesProvider, LoadingController, NavController, NavParams])
    ], BarberAppointmentPage);
    return BarberAppointmentPage;
}());
export { BarberAppointmentPage };
//# sourceMappingURL=barber-appointment.js.map