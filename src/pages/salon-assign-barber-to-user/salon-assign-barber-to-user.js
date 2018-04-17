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
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
/**
 * Generated class for the SalonAssignBarberToUserPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SalonAssignBarberToUserPage = /** @class */ (function () {
    function SalonAssignBarberToUserPage(navCtrl, navParams, modalCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.appointment = [
            { name: 'Barber name', Service: 'Hair style spa, massage', image: 'http://18.220.97.146/barber/app_link/img/team-member2.jpg' },
            { name: 'Barber name', Service: 'Hair style spa, massage', image: 'http://18.220.97.146/barber/app_link/img/team-member2.jpg' },
            { name: 'Barber name', Service: 'Hair style spa, massage', image: 'http://18.220.97.146/barber/app_link/img/team-member2.jpg' },
            { name: 'Barber name', Service: 'Hair style spa, massage', image: 'http://18.220.97.146/barber/app_link/img/team-member2.jpg' },
            { name: 'Barber name', Service: 'Hair style spa, massage', image: 'http://18.220.97.146/barber/app_link/img/team-member2.jpg' },
            { name: 'Barber name', Service: 'Hair style spa, massage', image: 'http://18.220.97.146/barber/app_link/img/team-member2.jpg' },
            { name: 'Barber name', Service: 'Hair style spa, massage', image: 'http://18.220.97.146/barber/app_link/img/team-member2.jpg' }
        ];
    }
    SalonAssignBarberToUserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SalonAssignBarberToUserPage');
    };
    SalonAssignBarberToUserPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SalonAssignBarberToUserPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-salon-assign-barber-to-user',
            templateUrl: 'salon-assign-barber-to-user.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ModalController, ViewController])
    ], SalonAssignBarberToUserPage);
    return SalonAssignBarberToUserPage;
}());
export { SalonAssignBarberToUserPage };
//# sourceMappingURL=salon-assign-barber-to-user.js.map