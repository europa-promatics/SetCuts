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
import { ServicesProvider } from '../../providers/services/services';
/**
 * Generated class for the UserNotificationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var UserNotificationPage = /** @class */ (function () {
    function UserNotificationPage(serviceProvider, navCtrl, navParams, loadingCtrl, alertCtrl) {
        this.serviceProvider = serviceProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.data = {};
        this.data.response = '';
    }
    UserNotificationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserNotificationPage');
    };
    UserNotificationPage.prototype.salon_view_User_profile = function (barber_id, salon_id) {
        this.navCtrl.push('SalonBarberProfilePage', { barberid: barber_id, salon_id: salon_id });
    };
    UserNotificationPage.prototype.ngOnInit = function () {
        localStorage['flag'] = 0;
        this.user_Notification_count();
    };
    UserNotificationPage.prototype.user_Notification_count = function () {
        var _this = this;
        var user_id = localStorage['user_id'];
        this.serviceProvider.userNotification(user_id)
            .subscribe(function (data) {
            if (localStorage['user_type'] == 0 && localStorage['flag'] == 0) {
                setTimeout(function () {
                    _this.user_Notification_count();
                }, 10000);
            }
            if (data.status == 0) {
                console.log('no notification');
                _this.nonotfication = 'true';
            }
            else {
                _this.content = data.confirminfo;
                _this.nonotfication = 'false';
            }
        }),
            function (error) { };
    };
    UserNotificationPage.prototype.cancel = function (booking_id) {
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
    UserNotificationPage.prototype.confirm = function (booking_id) {
        var user_id = localStorage['user_id'];
        this.ngOnInit();
        ////////////////paystatus 2 = cancel ///////////////////
        var paystatus = 1;
        this.serviceProvider.PayStatus(booking_id, user_id, paystatus)
            .subscribe(function (data) {
            console.log('data' + JSON.stringify(data));
        }),
            function (error) { };
    };
    UserNotificationPage.prototype.Review = function (booking_id) {
        this.navCtrl.push('ReviewPurchasePage', { booking_id: booking_id });
    };
    UserNotificationPage.prototype.check_notification = function (index) {
        var _this = this;
        ;
        var user_id = localStorage['user_id'];
        this.serviceProvider.BookingIndexStatusChanged(index, user_id)
            .subscribe(function (data) {
            _this.user_Notification_count();
            console.log('data' + JSON.stringify(data));
        }),
            function (error) { };
    };
    UserNotificationPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-user-notification',
            templateUrl: 'user-notification.html',
        }),
        __metadata("design:paramtypes", [ServicesProvider, NavController, NavParams, LoadingController, AlertController])
    ], UserNotificationPage);
    return UserNotificationPage;
}());
export { UserNotificationPage };
//# sourceMappingURL=user-notification.js.map