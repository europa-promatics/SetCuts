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
/**
 * Generated class for the SalonOwnerProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SalonOwnerProfilePage = /** @class */ (function () {
    function SalonOwnerProfilePage(events, navCtrl, navParams, http, camera, alertCtrl, file, filePath, transfer, actionSheetCtrl, loadingCtrl) {
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
        this.edit = 'false';
        this.data = {};
        this.data.response = '';
    }
    SalonOwnerProfilePage.prototype.ngOnInit = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();
        var link = 'http://18.220.97.146/barber/WebServices/salonViewProfile.json';
        var data = JSON.stringify({
            salon_id: localStorage['salon_id']
        });
        this.http.post(link, data)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            loader.dismiss();
            _this.viewprofile = data;
            console.log("profile" + JSON.stringify(_this.viewprofile.data));
            _this.salonname = _this.viewprofile.data.fullname;
            _this.salonnumber = _this.viewprofile.data.phonenumber;
            _this.salonemail = _this.viewprofile.data.email;
            _this.s_o_image = _this.viewprofile.data.profile_image;
            if (_this.s_o_image == null || _this.s_o_image == 'null') {
                _this.image = 'http://18.220.97.146/barber/app_link/img/team-member2.jpg';
            }
            else {
                var n = _this.s_o_image.includes("http");
                if (n == true || n == 'true') {
                    _this.image = _this.viewprofile.data.profile_image;
                }
                else {
                    _this.image = 'http://18.220.97.146/barber/img/salonprofileimage/' + _this.viewprofile.data.profile_image;
                }
            }
            _this.address = _this.viewprofile.data.address;
            _this.website = _this.viewprofile.data.website;
            _this.schedule = _this.viewprofile.data.schedule;
            _this.about = _this.viewprofile.data.about;
            _this.events.publish('user:created', localStorage['user_type'], _this.salonname, localStorage['auth'], _this.image, _this.image, _this.image);
            console.log("name" + JSON.stringify(_this.viewprofile.data.fullname));
        });
    };
    SalonOwnerProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SalonOwnerProfilePage');
    };
    SalonOwnerProfilePage.prototype.edit_profile = function () {
        this.edit = 'true';
    };
    SalonOwnerProfilePage.prototype.save_profile = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();
        var link = 'http://18.220.97.146/barber/WebServices/salonProfileEdit.json';
        var data = JSON.stringify({
            id: localStorage['salon_id'],
            fullname: this.salonname,
            phonenumber: this.salonnumber,
            email: this.salonemail,
            address: this.address,
            schedule: this.schedule,
            website: this.website,
            about: this.about
        });
        this.http.post(link, data)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            loader.dismiss();
            _this.editprofile = data;
            // alert("edit resp"+JSON.stringify(this.editprofile))
            if (_this.editprofile.message == 'your profile updated successfully') {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Thank you!',
                    subTitle: 'Profile Updated  Sucessfully',
                    buttons: ['OK']
                });
                alert_1.present();
                _this.edit = 'false';
                _this.ngOnInit();
            }
            else {
                var alert_2 = _this.alertCtrl.create({
                    title: 'ERROR',
                    subTitle: 'TRY AGAIN!',
                    buttons: ['OK']
                });
                alert_2.present();
                _this.edit = 'true';
            }
        });
    };
    SalonOwnerProfilePage.prototype.presentActionSheet = function () {
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
    SalonOwnerProfilePage.prototype.fromgallery = function () {
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
            var a = localStorage['salon_id'];
            _this.func1(a);
        }, function (err) {
            console.log('Gallery is not Working');
        });
    };
    SalonOwnerProfilePage.prototype.fromcamera = function () {
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
            var a = localStorage['salon_id'];
            _this.func1(a);
        }, function (err) {
            console.log('Camera is not Working');
        });
    };
    SalonOwnerProfilePage.prototype.func1 = function (user_id) {
        var _this = this;
        // alert("inside function")
        console.log(this.pic);
        var b = user_id;
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();
        var options = {
            fileName: 'image.jpg',
            fileKey: "profile_image",
            chunkedMode: false,
            mimeType: "image/jpg",
        };
        var fileTransfer = this.transfer.create();
        fileTransfer.upload(this.pic, "http://18.220.97.146/barber/WebServices/updatedSalonImage/" + b + '.json', options)
            .then(function (data) {
            _this.data.response = data;
            loader.dismiss();
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
    SalonOwnerProfilePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-salon-owner-profile',
            templateUrl: 'salon-owner-profile.html',
        }),
        __metadata("design:paramtypes", [Events, NavController, NavParams, Http,
            Camera, AlertController,
            File, FilePath, Transfer,
            ActionSheetController,
            LoadingController])
    ], SalonOwnerProfilePage);
    return SalonOwnerProfilePage;
}());
export { SalonOwnerProfilePage };
//# sourceMappingURL=salon-owner-profile.js.map