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
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { ModalController } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';
/**
 * Generated class for the BarberListSetSchedulePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var BarberListSetSchedulePage = /** @class */ (function () {
    function BarberListSetSchedulePage(modalCtrl, serviceProvider, navCtrl, navParams, loadingCtrl, http) {
        this.modalCtrl = modalCtrl;
        this.serviceProvider = serviceProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
    }
    BarberListSetSchedulePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BarberListSetSchedulePage');
    };
    BarberListSetSchedulePage.prototype.ngOnInit = function () {
        var _this = this;
        var salonid = localStorage['salon_id'];
        var loading = this.loadingCtrl.create({ content: 'Please wait...' });
        Observable.fromPromise(loading.present())
            .flatMap(function (data) { return _this.serviceProvider.salon_barber_list(salonid); })
            .subscribe(function (data) {
            return loading.dismiss().then(function () {
                _this.salon_barber_list_data = data;
                if (_this.salon_barber_list_data.message == "No barber in this salon") {
                    console.log('no barber ');
                    _this.appointment = 0;
                }
                else {
                    _this.appointment = _this.salon_barber_list_data.barberinfo;
                    console.log("barber info " + JSON.stringify(_this.appointment));
                    _this.barber_sch(_this.appointment[0].id);
                }
            });
        }, function (error) {
            return loading.dismiss().then(function () { });
        });
    };
    BarberListSetSchedulePage.prototype.barber_sch = function (barber_id) {
        // let profileModal = this.modalCtrl.create('BarberSchedulePage',{barber_id:barber_id});
        //   profileModal.present();
        this.navCtrl.push('BarberSchedulePage', { barber_id: barber_id });
    };
    BarberListSetSchedulePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-barber-list-set-schedule',
            templateUrl: 'barber-list-set-schedule.html',
        }),
        __metadata("design:paramtypes", [ModalController, ServicesProvider, NavController, NavParams, LoadingController, Http])
    ], BarberListSetSchedulePage);
    return BarberListSetSchedulePage;
}());
export { BarberListSetSchedulePage };
//# sourceMappingURL=barber-list-set-schedule.js.map