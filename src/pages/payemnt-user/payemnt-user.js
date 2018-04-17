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
import { Observable } from 'rxjs/Rx';
import { ServicesProvider } from '../../providers/services/services';
var PayemntUserPage = /** @class */ (function () {
    function PayemntUserPage(navCtrl, navParams, serviceProvider, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.serviceProvider = serviceProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        // 	this.appointment=[
        // {name:'Salon name',address:'32 yarrow terrace, hawick TD9, 9LL UK',price:'$150.00',date:'15.00, 25-05-2017',image:'assets/img/salon_image.jpg', status:'SUCCESSFUL',color:'suc'},
        // {name:'Salon name',address:'32 yarrow terrace, hawick TD9, 9LL UK',price:'$150.00',date:'15.00, 25-05-2017',image:'assets/img/salon_image.jpg', status:'SUCCESSFUL',color:'suc'},
        // {name:'Salon name',address:'32 yarrow terrace, hawick TD9, 9LL UK',price:'$150.00',date:'15.00, 25-05-2017',image:'assets/img/salon_image.jpg', status:'PENDING', color:'pen'},
        // {name:'Salon name',address:'32 yarrow terrace, hawick TD9, 9LL UK',price:'$150.00',date:'15.00, 25-05-2017',image:'assets/img/salon_image.jpg', status:'SUCCESSFUL', color:'suc'},
        // {name:'Salon name',address:'32 yarrow terrace, hawick TD9, 9LL UK',price:'$150.00',date:'15.00, 25-05-2017',image:'assets/img/salon_image.jpg', status:'SUCCESSFUL', color:'suc'},
        // {name:'Salon name',address:'32 yarrow terrace, hawick TD9, 9LL UK',price:'$150.00',date:'15.00, 25-05-2017',image:'assets/img/salon_image.jpg', status:'PENDING', color:'pen'},
        // {name:'Salon name',address:'32 yarrow terrace, hawick TD9, 9LL UK',price:'$150.00',date:'15.00, 25-05-2017',image:'assets/img/salon_image.jpg', status:'SUCCESSFUL', color:'suc'},
        // ]
    }
    PayemntUserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PayemntUserPage');
    };
    PayemntUserPage.prototype.ngOnInit = function () {
        var _this = this;
        var user_id = localStorage['user_id'];
        var loading = this.loadingCtrl.create({ content: 'Please wait...' });
        Observable.fromPromise(loading.present())
            .flatMap(function (data) { return _this.serviceProvider.userPayment_list(user_id); })
            .subscribe(function (data) {
            return loading.dismiss().then(function () {
                console.log('data' + JSON.stringify(data));
                _this.appointments = data;
                _this.appointment = _this.appointments.customerpaymentlist;
            });
        }, function (error) {
            return loading.dismiss().then(function () { });
        });
    };
    PayemntUserPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-payemnt-user',
            templateUrl: 'payemnt-user.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ServicesProvider, LoadingController, AlertController])
    ], PayemntUserPage);
    return PayemntUserPage;
}());
export { PayemntUserPage };
//# sourceMappingURL=payemnt-user.js.map