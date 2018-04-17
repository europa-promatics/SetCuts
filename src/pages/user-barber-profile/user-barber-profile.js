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
import { MenuController } from 'ionic-angular/index';
import { ModalController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';
import { ToastController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
/**
 * Generated class for the UserBarberProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var UserBarberProfilePage = /** @class */ (function () {
    function UserBarberProfilePage(menu, sharingVar, toastCtrl, serviceProvider, alertCtrl, loadingCtrl, navCtrl, navParams, modalCtrl) {
        this.menu = menu;
        this.sharingVar = sharingVar;
        this.toastCtrl = toastCtrl;
        this.serviceProvider = serviceProvider;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.barberid = this.navParams.get('id');
        this.average = this.navParams.get('average');
        this.fulldata = this.navParams.get('barberdata');
        this.service_id = this.navParams.get('serviceid');
        if (this.fulldata) {
            this.barberid = this.fulldata.id;
            this.barbername = this.fulldata.fullname;
            this.barberemail = this.fulldata.email;
            this.service = this.fulldata.service;
            this.img = this.fulldata.barber_image;
            this.phone = this.fulldata.phonenumber;
            this.barber_status = this.fulldata.barber_status;
            this.about_barber = this.fulldata.about_barber;
            this.instagram = this.fulldata.instagram;
            this.barberpreviuswork = this.fulldata.barberpreviousworkimage;
            this.salon_id = this.navParams.get('salon_id');
        }
        for (var _i = 0, _a = this.average; _i < _a.length; _i++) {
            var a = _a[_i];
            if (this.barberid == a.barber_id) {
                console.log('barberid' + this.barberid);
                console.log(a.barber_id + "" + a.avgrating);
                this.avgrating = a.avgrating;
            }
        }
        this.showcard = 'false';
        this.first = 'false';
        this.second = 'false';
        this.third = 'false';
        this.forth = 'false';
        this.fifth = 'false';
        this.imagedata = [{
                image_name: 'http://18.220.97.146/barber/app_link/img/images3.png'
            },
            {
                image_name: 'http://18.220.97.146/barber/app_link/img/images1.png'
            }, {
                image_name: 'http://18.220.97.146/barber/app_link/img/images2.png'
            }, {
                image_name: 'http://18.220.97.146/barber/app_link/img/salon_image.jpg'
            },
            {
                image_name: 'http://18.220.97.146/barber/app_link/img/photogallery-big-1.jpg'
            },
            {
                image_name: 'http://18.220.97.146/barber/app_link/img/shutterstock_268415039.jpg'
            },
            {
                image_name: 'http://18.220.97.146/barber/app_link/img/CrncgdzXgAAPvAe.jpg:large.jpeg'
            },
            {
                image_name: 'http://18.220.97.146/barber/app_link/img/photogallery-big-1.jpg'
            },
            {
                image_name: 'http://18.220.97.146/barber/app_link/img/shutterstock_268415039.jpg'
            },
            {
                image_name: 'http://18.220.97.146/barber/app_link/img/CrncgdzXgAAPvAe.jpg:large.jpeg'
            }
        ];
    }
    UserBarberProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserBarberProfilePage');
    };
    UserBarberProfilePage.prototype.ionViewDidEnter = function () {
        this.menu.swipeEnable(false, 'nav');
    };
    UserBarberProfilePage.prototype.share_insta = function () {
        var _this = this;
        var msg = this.instagram;
        var instaimg = "http://europa.promaticstechnologies.com/barber/img/barberimage/" + this.img;
        this.sharingVar.shareViaInstagram(msg, instaimg).then(function () { }).catch(function () {
            var toast = _this.toastCtrl.create({
                message: 'Something went wrong please try again later!',
                duration: 2000,
                position: "bottom",
            });
            toast.present(toast);
        });
    };
    UserBarberProfilePage.prototype.share_instagram = function () {
        var toast = this.toastCtrl.create({
            message: 'Barber link has been copied to clipboard you can paste on instagram!',
            duration: 2000,
            position: "bottom",
        });
        toast.present(toast);
        var message = this.instagram;
        if (this.img == null || this.img == 'null' || this.img == '') {
            var image = "http://europa.promaticstechnologies.com/barber/img/barberimage/U9Prra.image.jpg";
            this.go(message, image);
        }
        else {
            var image = "http://europa.promaticstechnologies.com/barber/img/barberimage/" + this.img;
            this.go(message, image);
        }
    };
    UserBarberProfilePage.prototype.go = function (message, image) {
        this.sharingVar.shareViaInstagram(message, image).then(function () { }).catch(function () { });
    };
    UserBarberProfilePage.prototype.share_instagram1 = function () {
        var appName = "instagram";
        var message = 'message';
        var subject = "hello";
        var url = this.instagram;
        var image = "http://europa.promaticstechnologies.com/barber/img/barberimage/" + this.img;
        this.sharingVar.canShareVia(appName, message, subject, image, url).then(function () { }).catch(function () {
        });
    };
    UserBarberProfilePage.prototype.bookbarber = function () {
        // if (this.barber_status == 1) {
        // let modal = this.modalCtrl.create('PickDateUserPage', {
        //   barber_id:this.barberid,
        //   service_id:this.service_id,
        //   salon_id:this.salon_id
        // });
        // modal.present();
        this.navCtrl.push('PickDateUserPage', { barber_id: this.barberid,
            service_id: this.service_id,
            salon_id: this.salon_id });
        // }
        //  else {
        //   let toast = this.toastCtrl.create({
        //     message: 'This barber is not available now!',
        //     duration: 2000,
        //     position: "bottom",
        //   });
        //   toast.present(toast);
        // }
    };
    UserBarberProfilePage.prototype.rating = function () {
        if (this.barber_booking_user_status == "yes") {
            this.showcard = 'true';
        }
        else {
            this.showcard = 'false';
        }
    };
    UserBarberProfilePage.prototype.add = function (id) {
        if (id == 1) {
            this.count = id;
            this.first = 'true';
        }
        else if (id == 2) {
            this.count = id;
            this.first = 'true';
            this.second = 'true';
        }
        else if (id == 3) {
            this.count = id;
            this.first = 'true';
            this.second = 'true';
            this.third = 'true';
        }
        else if (id == 4) {
            ;
            this.count = id;
            this.first = 'true';
            this.second = 'true';
            this.third = 'true';
            this.forth = 'true';
        }
        else if (id == 5) {
            this.count = id;
            this.first = 'true';
            this.second = 'true';
            this.third = 'true';
            this.forth = 'true';
            this.fifth = 'true';
        }
    };
    UserBarberProfilePage.prototype.sub = function (id) {
        if (id == 1) {
            this.count = id - 1;
            this.first = 'false';
            this.second = 'false';
            this.third = 'false';
            this.forth = 'false';
            this.fifth = 'false';
        }
        else if (id == 2) {
            this.count = id - 1;
            this.second = 'false';
            this.third = 'false';
            this.forth = 'false';
            this.fifth = 'false';
        }
        else if (id == 3) {
            this.count = id - 1;
            this.third = 'false';
            this.forth = 'false';
            this.fifth = 'false';
        }
        else if (id == 4) {
            ;
            this.count = id - 1;
            this.forth = 'false';
            this.fifth = 'false';
        }
        else if (id == 5) {
            this.count = id - 1;
            this.fifth = 'false';
        }
    };
    // submit_rating() {
    //   var flag=1;
    //   this.showcard = 'false';
    //   if (this.count == undefined || this.count == 'undefined') {
    //     this.rating_count = 0;
    //   } else {
    //     this.rating_count = this.count;
    //   }
    //   var user_id = localStorage['user_id'];
    //   let loading = this.loadingCtrl.create({
    //     content: 'Please wait...'
    //   });
    //   Observable.fromPromise(loading.present())
    //     .flatMap(data => this.serviceProvider.addrating_barber(user_id,this.barberid,this.rating_text,this.rating_count))
    //     .subscribe(data =>
    //       loading.dismiss().then(() => {
    //         // this.content=data
    //         this.ngOnInit();
    //         this.first = 'false';
    //         this.second = 'false';
    //         this.third = 'false';
    //         this.forth = 'false';
    //         this.fifth = 'false';
    //         this.rating_text = '';
    //       }),
    //       error =>
    //       loading.dismiss().then(() => {})
    //     );
    // }
    // close_rating() {
    //   this.showcard = 'false';
    // }
    UserBarberProfilePage.prototype.view = function () {
        var modal = this.modalCtrl.create('BarberReviewRatingPage', {
            review_data: this.review
        });
        modal.present();
    };
    UserBarberProfilePage.prototype.ngOnInit = function () {
        this.review_rating();
        this.barber_booking_user_check();
    };
    UserBarberProfilePage.prototype.barber_booking_user_check = function () {
        var _this = this;
        var user_id = localStorage['user_id'];
        this.serviceProvider.barber_booking_user_check(this.barberid, user_id)
            .subscribe(function (data) {
            _this.barber_Check_booking = data;
            _this.barber_booking_user_status = _this.barber_Check_booking.barber_status;
            console.log(JSON.stringify(_this.barber_booking_user_status));
        }),
            function (error) { };
    };
    UserBarberProfilePage.prototype.review_rating = function () {
        var _this = this;
        this.serviceProvider.barbergetReview_rating(this.barberid)
            .subscribe(function (data) {
            _this.reviews = data;
            _this.review = _this.reviews.customerinfo;
            _this.review_count = _this.reviews.totalcustomer;
            console.log(JSON.stringify(_this.review));
        }),
            function (error) { };
    };
    UserBarberProfilePage.prototype.img1 = function (img, b, full_img, i) {
        var modal = this.modalCtrl.create('BarberPreviousworkimgPage', {
            img: this.barber_prev_img, full_img: full_img, index: i, b: b
        });
        modal.present();
    };
    UserBarberProfilePage.prototype.book_friend = function () {
    };
    UserBarberProfilePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-user-barber-profile',
            templateUrl: 'user-barber-profile.html',
        }),
        __metadata("design:paramtypes", [MenuController, SocialSharing, ToastController, ServicesProvider, AlertController, LoadingController, NavController, NavParams, ModalController])
    ], UserBarberProfilePage);
    return UserBarberProfilePage;
}());
export { UserBarberProfilePage };
//# sourceMappingURL=user-barber-profile.js.map