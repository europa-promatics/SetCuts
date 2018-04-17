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
import { LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';
import { ServicesProvider } from '../../providers/services/services';
import { DomSanitizer } from "@angular/platform-browser";
/**
 * Generated class for the SalonAppointmentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SalonAppointmentPage = /** @class */ (function () {
    function SalonAppointmentPage(domSanitizer, serviceProvider, loadingCtrl, navCtrl, navParams) {
        this.domSanitizer = domSanitizer;
        this.serviceProvider = serviceProvider;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rating = [];
        this.appointment = [
            { name: 'User Name', address: '32 yarrow terrace, hawick TD9, 9LL UK', date: '15.00, 25-05-2017', image: 'http://18.220.97.146/barber/app_link/img/team-member2.jpg' },
            { name: 'User Name', address: '32 yarrow terrace, hawick TD9, 9LL UK', date: '15.00, 25-05-2017', image: 'http://18.220.97.146/barber/app_link/img/team-member2.jpg' },
            { name: 'User Name', address: '32 yarrow terrace, hawick TD9, 9LL UK', date: '15.00, 25-05-2017', image: 'http://18.220.97.146/barber/app_link/img/team-member2.jpg' },
            { name: 'User Name', address: '32 yarrow terrace, hawick TD9, 9LL UK', date: '15.00, 25-05-2017', image: 'http://18.220.97.146/barber/app_link/img/team-member2.jpg' },
            { name: 'User Name', address: '32 yarrow terrace, hawick TD9, 9LL UK', date: '15.00, 25-05-2017', image: 'http://18.220.97.146/barber/app_link/img/team-member2.jpg' }
        ];
        this.Appointments = 'UPCOMING';
    }
    SalonAppointmentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SalonAppointmentPage');
    };
    SalonAppointmentPage.prototype.getSafeUrl = function (url) {
        var a = url;
        var b = a.includes('http');
        if (b == true || b == 'true') {
            return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
        }
        else {
            return this.domSanitizer.bypassSecurityTrustResourceUrl('http://18.220.97.146/barber/img/customerprofileimage/' + url);
        }
    };
    SalonAppointmentPage.prototype.ngOnInit = function () {
        var _this = this;
        var salon_id = localStorage['salon_id'];
        var loading = this.loadingCtrl.create({ content: 'Please wait...' });
        Observable.fromPromise(loading.present())
            .flatMap(function (data) { return _this.serviceProvider.salonAppointment(salon_id); })
            .subscribe(function (data) {
            return loading.dismiss().then(function () {
                _this.past = data;
                _this.pastAppointment = _this.past.pastinfo;
                _this.upcomingAppointment = _this.past.upcominginfo;
                _this.cancelAppointment = _this.past.cancelinfo;
                _this.currentAppointment = _this.past.currentinfo;
                console.log('salon_appointment' + JSON.stringify(data));
            });
        }, function (error) {
            return loading.dismiss().then(function () { });
        });
    };
    SalonAppointmentPage.prototype.Complete_service = function (booking_id) {
        var _this = this;
        var service = 1;
        this.rating.push(booking_id);
        localStorage['rating_booking_id'] = JSON.stringify(this.rating);
        ///////////Service = 1 for Complete service from salon' owner side or service =0 pending /////////////
        this.serviceProvider.Complete_service(booking_id, service)
            .subscribe(function (data) {
            console.log("data" + JSON.stringify(data));
            _this.ngOnInit();
        }),
            function (error) { };
    };
    SalonAppointmentPage.prototype.cancel = function (booking_id) {
        var _this = this;
        var service = 2;
        ///////////Service = 2 for cancel service from salon' owner side or service =2 pending /////////////
        this.serviceProvider.Complete_service(booking_id, service)
            .subscribe(function (data) {
            console.log("data" + JSON.stringify(data));
            _this.ngOnInit();
        }),
            function (error) { };
    };
    SalonAppointmentPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-salon-appointment',
            templateUrl: 'salon-appointment.html',
        }),
        __metadata("design:paramtypes", [DomSanitizer, ServicesProvider, LoadingController, NavController, NavParams])
    ], SalonAppointmentPage);
    return SalonAppointmentPage;
}());
export { SalonAppointmentPage };
//# sourceMappingURL=salon-appointment.js.map