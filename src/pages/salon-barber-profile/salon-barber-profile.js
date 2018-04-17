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
import 'rxjs/add/operator/map';
import { LoadingController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';
import { Transfer } from '@ionic-native/transfer';
import { AlertController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';
import { Observable } from 'rxjs/Rx';
/**
 * Generated class for the SalonBarberProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SalonBarberProfilePage = /** @class */ (function () {
    function SalonBarberProfilePage(serviceProvider, events, navCtrl, navParams, http, camera, alertCtrl, file, filePath, transfer, actionSheetCtrl, loadingCtrl) {
        this.serviceProvider = serviceProvider;
        this.events = events;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.file = file;
        this.filePath = filePath;
        this.transfer = transfer;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.usertype = localStorage['user_type'];
        this.data = {};
        this.data.response = '';
        this.s_id = this.navParams.get('salon_id');
        if (this.s_id == undefined || this.s_id == 'undefined') {
            localStorage['salon_under_barber_id'] = localStorage['salon_under_barber_id'];
        }
        else {
            localStorage['salon_under_barber_id'] = this.s_id;
        }
        this.barberid = this.navParams.get('barberid');
        if (this.barberid == undefined || this.barberid == 'undefined') {
            this.barber_id = localStorage['barber_id'];
        }
        else {
            this.barber_id = this.barberid;
        }
        console.log('hello' + JSON.stringify(this.full_data));
        if (this.full_data == undefined || this.full_data == 'undefined') {
            this.edit = 'false';
        }
        else {
            this.edit = 'false';
            this.fullname = this.full_data.fullname;
            this.gender = this.full_data.gender;
            this.salonname = this.full_data.salonname;
            this.phonenumber = this.full_data.phonenumber;
            this.email = this.full_data.email;
            this.service = this.full_data.service;
            this.instagram = this.full_data.instagram;
            this.about_barber = this.full_data.about_barber;
            var b_img = this.full_data.barber_image;
            var n = b_img.includes("http");
            if (n == true || n == 'true') {
                this.barber_image = this.full_data.barber_image;
            }
            else {
                this.barber_image = 'http://18.220.97.146/barber/img/barberimage/' + this.full_data.barber_image;
            }
            // this.barber_image=this.full_data.barber_image;
        }
        // this.barberid=localStorage['barber_id']
    }
    SalonBarberProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SalonBarberProfilePage');
    };
    SalonBarberProfilePage.prototype.edit_profile = function () {
        this.edit = 'true';
    };
    SalonBarberProfilePage.prototype.ngOnInit = function () {
        this.barberinfo();
        // this.salonservice();
    };
    // salonservice(){
    //   var salon_id=localStorage['salon_under_barber_id'];
    //                let loading = this.loadingCtrl.create({content: 'Please wait...'});
    //       Observable.fromPromise(loading.present())   
    //          this.serviceProvider.Getsalonservices(salon_id)
    //           .subscribe(data => {
    //               loading.dismiss();
    //                this.items = data;
    //           });
    // }
    SalonBarberProfilePage.prototype.barberinfo = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Please wait...' });
        Observable.fromPromise(loading.present())
            .flatMap(function (data) { return _this.serviceProvider.barberInfo(_this.barber_id); })
            .subscribe(function (data) {
            return loading.dismiss().then(function () {
                _this.post = data;
                _this.fullname = _this.post.barberinfo[0].fullname;
                _this.gender = _this.post.barberinfo[0].gender;
                _this.salonname = _this.post.barberinfo[0].salonname;
                _this.phonenumber = _this.post.barberinfo[0].phonenumber;
                _this.email = _this.post.barberinfo[0].email;
                _this.service = _this.post.barberinfo[0].service;
                _this.about_barber = _this.post.barberinfo[0].about_barber;
                _this.instagram = _this.post.barberinfo[0].instagram;
                var barb_img = _this.post.barberinfo[0].barber_image;
                if (barb_img == null || barb_img == 'null') {
                    _this.barber_image = 'http://18.220.97.146/barber/app_link/img/team-member2.jpg';
                }
                else {
                    var n = barb_img.includes("http");
                    if (n == true || n == 'true') {
                        _this.barber_image = _this.post.barberinfo[0].barber_image;
                    }
                    else {
                        _this.barber_image = 'http://18.220.97.146/barber/img/barberimage/' + _this.post.barberinfo[0].barber_image;
                    }
                }
                // this.barber_image=this.post.barberinfo[0].barber_image;
                // this.s_barber_image='http://18.220.97.146/barber/img/barberimage/'+this.post.barberinfo[0].barber_image;
                if (localStorage['user_type'] == 2) {
                    _this.events.publish('user:created', localStorage['user_type'], _this.fullname, localStorage['auth'], _this.barber_image, _this.barber_image);
                }
                console.log("barber info " + JSON.stringify(_this.post));
            });
        }, function (error) {
            return loading.dismiss().then(function () { });
        });
    };
    SalonBarberProfilePage.prototype.save_profile = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();
        var link = 'http://18.220.97.146/barber/WebServices/barberProfileEdit.json';
        var data = JSON.stringify({
            id: localStorage['barber_id'],
            fullname: this.fullname,
            phonenumber: this.phonenumber,
            email: this.email,
            service: this.toppings,
            gender: this.gender,
            instagram: this.instagram,
            about_barber: this.about_barber,
        });
        this.http.post(link, data)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            loader.dismiss();
            _this.editprofile = data;
            _this.edit = 'false';
            _this.ngOnInit();
            // alert("edit resp"+JSON.stringify(this.editprofile))
        });
    };
    SalonBarberProfilePage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image Source',
            buttons: [
                {
                    text: 'Load from Library',
                    handler: function () {
                        _this.fromgallery();
                    }
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        _this.fromcamera();
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    SalonBarberProfilePage.prototype.fromgallery = function () {
        var _this = this;
        // alert("inside gallery")
        this.camera.getPicture({
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            encodingType: this.camera.EncodingType.JPEG,
            saveToPhotoAlbum: false
        }).then(function (imageData) {
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.pic = base64Image;
            var a = localStorage['barber_id'];
            _this.func1(a);
        }, function (err) {
            console.log('Gallery is not Working');
        });
    };
    SalonBarberProfilePage.prototype.fromcamera = function () {
        var _this = this;
        // alert("inside camera")
        this.camera.getPicture({
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.CAMERA,
            encodingType: this.camera.EncodingType.JPEG,
            saveToPhotoAlbum: false
        }).then(function (imageData) {
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.pic = base64Image;
            var a = localStorage['barber_id'];
            _this.func1(a);
        }, function (err) {
            console.log('Camera is not Working');
        });
    };
    SalonBarberProfilePage.prototype.func1 = function (user_id) {
        var _this = this;
        alert("hello user" + user_id);
        alert(this.pic);
        // alert("inside function")
        console.log(this.pic);
        var b = this.barber_id;
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();
        var options = {
            fileName: 'image.jpg',
            fileKey: "barber_image",
            chunkedMode: false,
            mimeType: "image/jpg",
        };
        var fileTransfer = this.transfer.create();
        fileTransfer.upload(this.pic, "http://18.220.97.146/barber/WebServices/updatedbarberImage/" + b + '.json', options)
            .then(function (data) {
            _this.data.response = data;
            loader.dismiss();
            // alert("data"+JSON.stringify(data));
            var alert = _this.alertCtrl.create({
                title: 'Thank you!',
                subTitle: 'Image Upload Sucessful',
                buttons: ['OK']
            });
            alert.present();
            _this.ngOnInit();
        })
            , function (err) {
                loader.dismiss();
                var alert = _this.alertCtrl.create({
                    title: 'Error!',
                    subTitle: 'Try Again!',
                    buttons: ['OK']
                });
                alert.present();
            };
    };
    SalonBarberProfilePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-salon-barber-profile',
            templateUrl: 'salon-barber-profile.html',
        }),
        __metadata("design:paramtypes", [ServicesProvider, Events, NavController, NavParams, Http,
            Camera, AlertController,
            File, FilePath, Transfer,
            ActionSheetController,
            LoadingController])
    ], SalonBarberProfilePage);
    return SalonBarberProfilePage;
}());
export { SalonBarberProfilePage };
//# sourceMappingURL=salon-barber-profile.js.map