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
/**
 * Generated class for the UserAppointmentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var UserAppointmentPage = /** @class */ (function () {
    function UserAppointmentPage(domSanitizer, alertCtrl, serviceProvider, loadingCtrl, navCtrl, navParams) {
        this.domSanitizer = domSanitizer;
        this.alertCtrl = alertCtrl;
        this.serviceProvider = serviceProvider;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Appointments = 'UPCOMING';
    }
    UserAppointmentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserAppointmentPage');
    };
    UserAppointmentPage.prototype.getSafeUrl = function (url) {
        var a = url;
        var b = a.includes('http');
        if (b == true || b == 'true') {
            return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
        }
        else {
            return this.domSanitizer.bypassSecurityTrustResourceUrl('http://18.220.97.146/barber/img/barberimage/' + url);
        }
    };
    UserAppointmentPage.prototype.cancel = function (booking_id) {
        var user_id = localStorage['user_id'];
        this.ngOnInit();
        ////////////////paystatus 2 = cancel ///////////////////
        var paystatus = 2;
        this.serviceProvider.PayStatus(booking_id, user_id, paystatus)
            .subscribe(function (data) {
            console.log('data' + JSON.stringify(data));
        }),
            function (error) { };
    };
    // var date_today=new Date();
    // var formated_date = formatDate(date_today);//Calling formatDate Function
    // var input_date="2015/04/22 11:12 AM";    
    // var currentDateTime = new Date(Date.parse(formated_date));
    // var inputDateTime   = new Date(Date.parse(input_date));
    // if (inputDateTime <= currentDateTime){
    //     //Do something...
    // }
    // function compare(dateTimeA, dateTimeB) {
    //     var momentA = moment(dateTimeA,"DD/MM/YYYY");
    //     var momentB = moment(dateTimeB,"DD/MM/YYYY");
    //     if (momentA > momentB) return 1;
    //     else if (momentA < momentB) return -1;
    //     else return 0;
    // }
    // alert(compare("11/07/2015", "10/07/2015"));
    UserAppointmentPage.prototype.ngOnInit = function () {
        var _this = this;
        var user_id = localStorage['user_id'];
        var loading = this.loadingCtrl.create({ content: 'Please wait...' });
        Observable.fromPromise(loading.present())
            .flatMap(function (data) { return _this.serviceProvider.User_appointment(user_id); })
            .subscribe(function (data) {
            return loading.dismiss().then(function () {
                _this.past = data;
                _this.pastAppointment = _this.past.pastinfo;
                _this.upcomingAppointment = _this.past.upcominginfo;
                _this.cancelAppointment = _this.past.cancelinfo;
                _this.currentAppointment = _this.past.currentinfo;
                console.log('past' + JSON.stringify(_this.upcomingAppointment));
            });
        }, function (error) {
            return loading.dismiss().then(function () { });
        });
        // setInterval(()=>{
        //   this.getnotfication()
        // }, 50000);
    };
    UserAppointmentPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-user-appointment',
            templateUrl: 'user-appointment.html',
        }),
        __metadata("design:paramtypes", [DomSanitizer, AlertController, ServicesProvider, LoadingController, NavController, NavParams])
    ], UserAppointmentPage);
    return UserAppointmentPage;
}());
export { UserAppointmentPage };
//# sourceMappingURL=user-appointment.js.map