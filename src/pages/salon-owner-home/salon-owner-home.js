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
import { ModalController } from 'ionic-angular';
import { SViewSchedulePage } from '../s-view-schedule/s-view-schedule';
/**
 * Generated class for the SalonOwnerHomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SalonOwnerHomePage = /** @class */ (function () {
    function SalonOwnerHomePage(modalCtrl, navCtrl, navParams) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.c = 'false';
        this.b = 'false';
        this.a = 'false';
    }
    SalonOwnerHomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SalonOwnerHomePage');
    };
    SalonOwnerHomePage.prototype.add = function (id) {
        if (id == 0) {
            this.a = 'true';
            this.b = 'false';
            this.c = 'false';
            this.d = 'false';
            this.e = 'false';
            this.f = 'false';
            this.g = 'false';
            this.h = 'false';
            this.i = 'false';
            this.j = 'false';
            this.navCtrl.push('SalonRegisterBarberPage');
        }
        else if (id == 1) {
            this.a = 'false';
            this.b = 'true';
            this.c = 'false';
            this.d = 'false';
            this.e = 'false';
            this.f = 'false';
            this.g = 'false';
            this.h = 'false';
            this.i = 'false';
            this.j = 'false';
            this.navCtrl.push('SalonOwnerProfilePage');
        }
        else if (id == 2) {
            this.a = 'false';
            this.b = 'false';
            this.c = 'true';
            this.d = 'false';
            this.e = 'false';
            this.f = 'false';
            this.g = 'false';
            this.h = 'false';
            this.i = 'false';
            this.j = 'false';
            this.navCtrl.push(SViewSchedulePage);
        }
        else if (id == 3) {
            this.a = 'false';
            this.b = 'false';
            this.c = 'false';
            this.d = 'true';
            this.e = 'false';
            this.f = 'false';
            this.g = 'false';
            this.h = 'false';
            this.i = 'false';
            this.j = 'false';
        }
        else if (id == 4) {
            this.a = 'false';
            this.b = 'false';
            this.c = 'false';
            this.d = 'false';
            this.e = 'true';
            this.f = 'false';
            this.g = 'false';
            this.h = 'false';
            this.i = 'false';
            this.j = 'false';
            this.navCtrl.push('SalonGalleryPage');
        }
        else if (id == 5) {
            this.a = 'false';
            this.b = 'false';
            this.c = 'false';
            this.d = 'false';
            this.e = 'false';
            this.f = 'true';
            this.g = 'false';
            this.h = 'false';
            this.i = 'false';
            this.j = 'false';
            this.navCtrl.push('SalonPaymentPage');
        }
        else if (id == 6) {
            this.a = 'false';
            this.b = 'false';
            this.c = 'false';
            this.d = 'false';
            this.e = 'false';
            this.f = 'false';
            this.g = 'true';
            this.h = 'false';
            this.i = 'false';
            this.j = 'false';
            this.navCtrl.push('AboutusUser');
        }
        else if (id == 7) {
            this.a = 'false';
            this.b = 'false';
            this.c = 'false';
            this.d = 'false';
            this.e = 'false';
            this.f = 'false';
            this.g = 'false';
            this.h = 'true';
            this.i = 'false';
            this.navCtrl.push('FaqPage');
        }
        else if (id == 8) {
            this.a = 'false';
            this.b = 'false';
            this.c = 'false';
            this.d = 'false';
            this.e = 'false';
            this.f = 'false';
            this.g = 'false';
            this.h = 'false';
            this.i = 'true';
            this.j = 'false';
            this.navCtrl.push('SalonContactPage');
        }
        else if (id == 9) {
            this.a = 'false';
            this.b = 'false';
            this.c = 'false';
            this.d = 'false';
            this.e = 'false';
            this.f = 'false';
            this.g = 'false';
            this.h = 'false';
            this.i = 'false';
            this.j = 'true';
            // let profileModal = this.modalCtrl.create('BarberSchedulePage');
            //  profileModal.present();
            if (localStorage['barberId']) {
                alert(localStorage['barberId']);
                this.navCtrl.push('BarberSchedulePage', { barber_id: localStorage['barberId'] });
            }
        }
    };
    SalonOwnerHomePage.prototype.salon_notification = function () {
        this.navCtrl.push('SalonNotificationPage');
    };
    SalonOwnerHomePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-salon-owner-home',
            templateUrl: 'salon-owner-home.html',
        }),
        __metadata("design:paramtypes", [ModalController, NavController, NavParams])
    ], SalonOwnerHomePage);
    return SalonOwnerHomePage;
}());
export { SalonOwnerHomePage };
//# sourceMappingURL=salon-owner-home.js.map