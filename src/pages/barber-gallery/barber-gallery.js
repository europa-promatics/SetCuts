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
import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';
import { Transfer } from '@ionic-native/transfer';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import { ActionSheetController } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';
var BarberGalleryPage = /** @class */ (function () {
    function BarberGalleryPage(serviceProvider, actionSheetCtrl, navCtrl, navParams, camera, file, filePath, transfer, loadingCtrl, http, alertCtrl) {
        this.serviceProvider = serviceProvider;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.file = file;
        this.filePath = filePath;
        this.transfer = transfer;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.data = {};
        this.data.response = '';
    }
    BarberGalleryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BarberGalleryPage');
    };
    BarberGalleryPage.prototype.picture = function (a) {
        var _this = this;
        if (a == 2) {
            this.camera.getPicture({
                destinationType: this.camera.DestinationType.DATA_URL,
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                encodingType: this.camera.EncodingType.JPEG,
                saveToPhotoAlbum: false
            }).then(function (imageData) {
                var base64Image = 'data:image/jpeg;base64,' + imageData;
                _this.pic = base64Image;
                var b = localStorage['salon_id'];
                _this.func1(b);
            }, function (err) {
                console.log('Camera is not Working');
            });
            // let options = {maximumImagesCount: 1,width: 300,height: 300,quality: 75}
            // ImagePicker.getPictures(options).then( (file_uris) => { this.pic = file_uris[0]} );
        }
        else if (a == 1) {
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
        }
    };
    BarberGalleryPage.prototype.func1 = function (user_id) {
        var _this = this;
        //  alert(user_id);
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
        fileTransfer.upload(this.pic, "http://18.220.97.146/barber/WebServices/barberPreviousWorkImage/" + b + '.json', options)
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
    BarberGalleryPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log('hii');
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();
        var link = 'http://18.220.97.146/barber/WebServices/barberPreviousWorkImageShowById.json';
        var data = JSON.stringify({
            barber_id: localStorage['barber_id'],
        });
        this.http.post(link, data)
            .subscribe(function (data) {
            loader.dismiss();
            _this.data.response = data;
            console.log(JSON.stringify(_this.data.response));
            _this.content_img = JSON.parse(data._body).message.image;
            _this.myArry = _this.content_img.split(',');
            _this.img0 = _this.myArry[0];
            _this.img1 = _this.myArry[1];
            _this.img2 = _this.myArry[2];
            _this.img3 = _this.myArry[3];
            console.log(JSON.stringify(_this.myArry));
            (function (error) { });
        });
    };
    BarberGalleryPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select image source!',
            buttons: [{
                    text: 'Camera',
                    icon: 'camera',
                    handler: function () {
                        _this.picture(1);
                        console.log('Camera clicked');
                    }
                }, {
                    text: 'Gallery',
                    icon: 'images',
                    handler: function () {
                        _this.picture(2);
                        console.log('Gallery clicked');
                    }
                }, {
                    text: 'Cancel',
                    icon: 'close-circle',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }]
        });
        actionSheet.present();
    };
    BarberGalleryPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-barber-gallery',
            templateUrl: 'barber-gallery.html',
        }),
        __metadata("design:paramtypes", [ServicesProvider, ActionSheetController, NavController, NavParams, Camera, File, FilePath, Transfer, LoadingController, Http, AlertController])
    ], BarberGalleryPage);
    return BarberGalleryPage;
}());
export { BarberGalleryPage };
//# sourceMappingURL=barber-gallery.js.map