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
var AboutService = /** @class */ (function () {
    function AboutService(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.lolo = [];
        this.d = this.navParams.get('full_data');
        if (this.d == undefined || this.d == 'undeifned') {
        }
        else {
            this.fulldata = this.navParams.get('full_data');
        }
        // var str = this.fulldata.service;
        // var splitted = str.split(" ", 1);
        this.items = [{
                service: 'Haircut'
            },
            {
                service: 'Beardtrim'
            },
            {
                service: 'EyeBrow Shaping'
            },
        ];
    }
    AboutService.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutService');
    };
    AboutService.prototype.itemSelected = function (item) {
        console.log("Selected Item", item);
    };
    AboutService = __decorate([
        IonicPage(),
        Component({
            selector: 'page-about-service',
            templateUrl: 'about-service.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], AboutService);
    return AboutService;
}());
export { AboutService };
//# sourceMappingURL=about-service.js.map