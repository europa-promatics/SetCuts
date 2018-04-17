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
import { ServicesProvider } from '../../providers/services/services';
/**
 * Generated class for the UserBarberListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var UserBarberListPage = /** @class */ (function () {
    function UserBarberListPage(serviceProvider, navCtrl, loadingCtrl, http, navParams) {
        this.serviceProvider = serviceProvider;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.http = http;
        this.data = {};
        this.salonid = this.navParams.get('salonid');
        this.serviceid = this.navParams.get('service_id');
        this.date = new Date();
    }
    UserBarberListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserBarberListPage');
    };
    // ngOnInit(){
    //     let loading = this.loadingCtrl.create({
    //     content: 'Please wait...'
    //      });
    //     loading.present();
    //   var link='http://europa.promaticstechnologies.com/barber/WebServices/barberInfo';
    //   	 var data=JSON.stringify({
    //     	salonid: this.salonid,	       
    //     });
    //         this.http.post(link,data)
    //         .map(res => res.json())
    //         .subscribe(data => {
    //           loading.dismiss();
    //         this.posts=data;
    //          console.log("barber info "+JSON.stringify(this.posts));
    //     });
    // }
    UserBarberListPage.prototype.ngOnInit = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Please wait...' });
        Observable.fromPromise(loading.present())
            .flatMap(function (data) { return _this.serviceProvider.userbarberlist(_this.salonid); })
            .subscribe(function (data) {
            return loading.dismiss().then(function () {
                _this.post = data;
                if (_this.post.message == "No barber in this salon") {
                    _this.nobarber = 'true';
                }
                else {
                    _this.posts = _this.post.barberinfo;
                    _this.full_averagerating = _this.post.averagerating;
                    _this.nobarber = 'false';
                }
                console.log("barber info " + JSON.stringify(_this.posts));
            });
        }, function (error) {
            return loading.dismiss().then(function () { });
        });
        ;
    };
    UserBarberListPage.prototype.viewBarberProfile = function (barberdata) {
        this.navCtrl.push('UserBarberProfilePage', { fulldata: this.posts, barberdata: barberdata, serviceid: this.serviceid, average: this.full_averagerating, salon_id: this.salonid });
    };
    UserBarberListPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-user-barber-list',
            templateUrl: 'user-barber-list.html',
        }),
        __metadata("design:paramtypes", [ServicesProvider, NavController, LoadingController, Http,
            NavParams])
    ], UserBarberListPage);
    return UserBarberListPage;
}());
export { UserBarberListPage };
//# sourceMappingURL=user-barber-list.js.map