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
 * Generated class for the UserProfile page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var UserProfile = /** @class */ (function () {
    function UserProfile(events, navCtrl, navParams, http, camera, alertCtrl, file, filePath, transfer, actionSheetCtrl, loadingCtrl) {
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
        this.edit = 'false';
        this.http = http;
        this.data = {};
        this.customer_id = this.navParams.get('customer_id');
        if (this.customer_id == undefined || this.customer_id == 'undefined') {
            this.c_id = localStorage['user_id'];
            this.barber_view = 'false';
        }
        else {
            this.c_id = this.customer_id;
            this.barber_view = 'true';
        }
    }
    UserProfile.prototype.map = function () {
        this.navCtrl.push('Showpath');
    };
    UserProfile.prototype.ngOnInit = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();
        var link = 'http://18.220.97.146/barber/WebServices/customerViewProfile.json';
        var data = JSON.stringify({
            customer_id: this.c_id
        });
        this.http.post(link, data)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            loader.dismiss();
            _this.viewprofile = data;
            console.log("profile" + JSON.stringify(_this.viewprofile.data));
            _this.username = _this.viewprofile.data.fullname;
            _this.phonenumber = _this.viewprofile.data.phonenumber;
            _this.email = _this.viewprofile.data.email;
            _this.fb_img = _this.viewprofile.data.image;
            if (_this.fb_img == null || _this.fb_img == 'null') {
                _this.image = 'assets/img/team-member2.jpg';
            }
            else {
                var n = _this.fb_img.includes("http");
                if (n == true || n == 'true') {
                    _this.image = _this.viewprofile.data.image;
                }
                else {
                    _this.image = 'http://18.220.97.146/barber/img/customerprofileimage/' + _this.viewprofile.data.image;
                }
            }
            _this.address = _this.viewprofile.data.address;
            localStorage['profile_img'] = _this.image;
            // if(this.image!=null || this.image!='null'){
            //   this.image1=this.image;
            // }
            if (_this.customer_id == undefined || _this.customer_id == 'undefined') {
                _this.events.publish('user:created', localStorage['user_type'], _this.username, localStorage['auth'], _this.image, _this.image);
            }
            console.log("name" + JSON.stringify(_this.viewprofile.data.fullname));
        });
    };
    UserProfile.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserProfile');
    };
    UserProfile.prototype.edit_profile = function () {
        this.edit = 'true';
    };
    UserProfile.prototype.save_profile = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();
        var link = 'http://18.220.97.146/barber/WebServices/customerProfileEdit.json';
        var data = JSON.stringify({
            id: localStorage['user_id'],
            fullname: this.username,
            phonenumber: this.phonenumber,
            email: this.email,
            address: this.address
        });
        this.http.post(link, data)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            loader.dismiss();
            _this.editprofile = data;
            // alert("edit resp"+JSON.stringify(this.editprofile.message))
            if (_this.editprofile.message == 'your profile updated successfully') {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Thank you!',
                    subTitle: 'Profile Updated Sucessful',
                    buttons: ['OK']
                });
                alert_1.present();
                _this.edit = 'false';
                _this.ngOnInit();
            }
            else {
                var alert_2 = _this.alertCtrl.create({
                    title: 'ALERT!',
                    subTitle: 'Something went Wrong',
                    buttons: ['OK']
                });
                alert_2.present();
                _this.edit = 'true';
            }
        });
    };
    UserProfile.prototype.presentActionSheet = function () {
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
    UserProfile.prototype.fromgallery = function () {
        var _this = this;
        //alert("inside gallery")
        this.camera.getPicture({
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            encodingType: this.camera.EncodingType.JPEG,
            saveToPhotoAlbum: false
        }).then(function (imageData) {
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.pic = base64Image;
            var a = localStorage['user_id'];
            _this.func1(a);
        }, function (err) {
            console.log('Gallery is not Working');
        });
    };
    UserProfile.prototype.fromcamera = function () {
        var _this = this;
        //alert("inside camera")
        this.camera.getPicture({
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.CAMERA,
            encodingType: this.camera.EncodingType.JPEG,
            saveToPhotoAlbum: false
        }).then(function (imageData) {
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.pic = base64Image;
            var a = localStorage['user_id'];
            _this.func1(a);
        }, function (err) {
            console.log('Camera is not Working');
        });
    };
    UserProfile.prototype.func1 = function (user_id) {
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
            fileKey: "image",
            chunkedMode: false,
            mimeType: "image/jpg",
        };
        var fileTransfer = this.transfer.create();
        fileTransfer.upload(this.pic, "http://18.220.97.146/barber/WebServices/updatedCustomerImage/" + b + '.json', options)
            .then(function (data) {
            _this.data.response = data;
            loader.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Thank you!',
                subTitle: 'Image Upload Sucessfully',
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
    UserProfile = __decorate([
        IonicPage(),
        Component({
            selector: 'page-user-profile',
            templateUrl: 'user-profile.html',
        }),
        __metadata("design:paramtypes", [Events, NavController, NavParams, Http,
            Camera, AlertController,
            File, FilePath, Transfer,
            ActionSheetController,
            LoadingController])
    ], UserProfile);
    return UserProfile;
}());
export { UserProfile };
//# sourceMappingURL=user-profile.js.map