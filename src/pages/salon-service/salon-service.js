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
/**
 * Generated class for the SalonServicePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SalonServicePage = /** @class */ (function () {
    function SalonServicePage(navCtrl, navParams, alertCtrl, loadingCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.Array = [];
        this.http = http;
        this.data = {};
        this.data.response = '';
        //         this.items=[{service:'service1',  charge:'$150'},
        // {service:'service2', charge:'$150'},
        // {service:'service3', charge:'$150'},
        // {service:'service4', charge:'$150'},
        // {service:'service5', charge:'$150'}
        // ]
    }
    SalonServicePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SalonServicePage');
    };
    SalonServicePage.prototype.itemSelected = function (item) {
        console.log("Selected Item", item);
    };
    SalonServicePage.prototype.showPrompt = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'ADD SERVICES',
            message: "Enter a name of service or charges.",
            inputs: [
                {
                    name: 'Service_name',
                    placeholder: 'service name',
                },
                {
                    name: 'Charges',
                    placeholder: 'Charges',
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        console.log(data);
                        console.log(data.Charges);
                        console.log(data.Service_name);
                        console.log('Saved clicked');
                        _this.service = data.Service_name;
                        _this.charges = data.Charges;
                        _this.Array = data;
                        console.log(_this.Array);
                        if (_this.service == "" || _this.charges == "") {
                            var alert_1 = _this.alertCtrl.create({
                                title: 'Alert',
                                subTitle: 'Please Fill all Fields',
                                buttons: ['OK']
                            });
                            alert_1.present();
                        }
                        else {
                            var a = _this.charges;
                            var b = a.includes("$");
                            console.log('bbbbbbbbbbbbbbb' + b);
                            if (b == true || b == 'true') {
                                var alert_2 = _this.alertCtrl.create({
                                    title: 'Alert',
                                    subTitle: 'Dollar cannot be accepted',
                                    buttons: ['OK']
                                });
                                alert_2.present();
                            }
                            else {
                                _this.Service(_this.service, _this.charges);
                            }
                            // this.Service(this.service,this.charges);
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    SalonServicePage.prototype.Service = function (service, charges) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();
        var link = 'http://18.220.97.146/barber/WebServices/salonServices.json';
        var data = JSON.stringify({
            salon_id: localStorage['salon_id'],
            salon_service: service,
            charge: charges
        });
        this.http.post(link, data)
            .subscribe(function (data) {
            loader.dismiss();
            _this.data.response = data;
            console.log(_this.data.response);
            if (JSON.parse(data._body).message == "Data Saved successfully") {
                var alert_3 = _this.alertCtrl.create({
                    title: 'Thank You!',
                    subTitle: 'Service added sucessful',
                    buttons: ['OK']
                });
                alert_3.present();
                _this.ngOnInit();
            }
            else {
                var alert_4 = _this.alertCtrl.create({
                    title: 'Alert!',
                    subTitle: 'Something went wrong!',
                    buttons: ['OK']
                });
                alert_4.present();
            }
            (function (error) { });
        });
    };
    SalonServicePage.prototype.ngOnInit = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();
        var link = 'http://18.220.97.146/barber/WebServices/getSalonServices.json';
        var data = JSON.stringify({
            salon_id: localStorage['salon_id'],
        });
        this.http.post(link, data).subscribe(function (data) {
            // -------------mukul 15-3-2018------------------------
            console.log(JSON.parse(data._body).status);
            data = (JSON.parse(data._body));
            loader.dismiss();
            if (data.status == "true") {
                _this.value = 'false';
                _this.items = data.serviceinfo;
            }
            else {
                _this.value = 'true';
            }
            // -------------mukul 15-3-2018-----------------------
            // if(JSON.parse(data._body).message=="There is no service inside this salon"){
            //     console.log('item null');
            //     this.value='true';
            // }
            // else{
            //     this.items = JSON.parse(data._body.serviceinfo);
            //     console.log(this.items);
            //     this.value='false';
            // }
            // this.data.response = data;
        }, function (error) {
            console.log(error);
        });
    };
    SalonServicePage.prototype.delete = function (service_id, salon_id) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();
        var link = 'http://18.220.97.146/barber/WebServices/deleteSalonService.json';
        var data = JSON.stringify({
            salon_id: salon_id,
            id: service_id,
        });
        this.http.post(link, data)
            .subscribe(function (data) {
            loader.dismiss();
            // this.items = JSON.parse(data._body);
            console.log(_this.items);
            _this.ngOnInit();
            _this.data.response = data;
        }, function (error) {
            console.log(error);
        });
    };
    SalonServicePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-salon-service',
            templateUrl: 'salon-service.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, AlertController, LoadingController, Http])
    ], SalonServicePage);
    return SalonServicePage;
}());
export { SalonServicePage };
//# sourceMappingURL=salon-service.js.map