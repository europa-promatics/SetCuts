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
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { SalonOwnerHomePage } from '../salon-owner-home/salon-owner-home';
import { ServicesProvider } from '../../providers/services/services';
import { Observable } from 'rxjs/Rx';
import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';
import { Transfer } from '@ionic-native/transfer';
import { ActionSheetController } from 'ionic-angular';
import { FormBuilder } from '@angular/forms';
var SalonRegisterBarberPage = /** @class */ (function () {
    function SalonRegisterBarberPage(formBuilder, actionSheetCtrl, camera, file, filePath, transfer, servicesProvider, navCtrl, navParams, loadingCtrl, http, alertCtrl) {
        this.formBuilder = formBuilder;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.file = file;
        this.filePath = filePath;
        this.transfer = transfer;
        this.servicesProvider = servicesProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.data = {};
        this.data.response = '';
        this.Role = "limited";
        //     let emailRegex =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        //  let nameReg=/^([a-zA-Z ]){2,30}$/;
        //     this.salonregister = formBuilder.group({
        //        name: ['', Validators.compose([Validators.pattern(nameReg), Validators.required])],
        //    useremail: ['', Validators.compose([
        //      Validators.pattern(emailRegex), Validators.required])],
        //   about:['', Validators.compose( [Validators.maxLength(200)
        //     ,Validators.minLength(1),Validators.pattern(''), Validators.required])],
        //  insta:['', Validators.compose( [Validators.maxLength(200)
        //     ,Validators.minLength(1),Validators.pattern(''), Validators.required])],
        // });
    }
    SalonRegisterBarberPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SalonRegisterBarberPage');
    };
    SalonRegisterBarberPage.prototype.terms = function () {
        this.navCtrl.push('TermsOfservicePage');
        // code...
    };
    SalonRegisterBarberPage.prototype.ngOnInit = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Please wait...' });
        Observable.fromPromise(loading.present());
        var salon_id = localStorage['salon_id'];
        this.servicesProvider.Getsalonservices(salon_id)
            .subscribe(function (data) {
            console.log(data);
            _this.servicesData = data;
            loading.dismiss();
            _this.items = _this.servicesData.serviceinfo;
        });
    };
    SalonRegisterBarberPage.prototype.salon_reg = function () {
        var _this = this;
        if (this.flag == true || this.flag == 'true') {
            var loader_1 = this.loadingCtrl.create({
                content: "Please wait..."
            });
            loader_1.present();
            var link = 'http://18.220.97.146/barber/WebServices/barberRegistration.json';
            var data = JSON.stringify({
                fullname: this.full_name,
                email: this.email,
                usertype: 2,
                about_barber: this.about_me,
                salonid: localStorage['salon_id'],
                instagram: this.inst_link,
                roleright: this.Role,
                service: this.service
            });
            this.http.post(link, data).subscribe(function (data) {
                loader_1.dismiss();
                _this.data.response = data;
                if (JSON.parse(data._body).status == 1) {
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Thank You!',
                        subTitle: 'Registration successful please Check your mail inbox  and your Email and password send  in to your Email ',
                        buttons: ['OK']
                    });
                    _this.navCtrl.setRoot(SalonOwnerHomePage);
                    alert_1.present();
                    _this.pic_barber_id = JSON.parse(data._body).barber_id;
                    console.log('barber_id' + _this.pic_barber_id);
                    _this.func1(_this.pic_barber_id);
                }
                else if (JSON.parse(data._body).message == "Registration unsucessfully field required") {
                    localStorage['auth'] = 'false';
                    var alert_2 = _this.alertCtrl.create({
                        title: 'Alert!',
                        subTitle: 'Input Field Required',
                        buttons: ['OK']
                    });
                    alert_2.present();
                }
                else if (JSON.parse(data._body).message == "Entered email address or username is already registered with us.") {
                    localStorage['auth'] = 'false';
                    var alert_3 = _this.alertCtrl.create({
                        title: 'Alert!',
                        subTitle: 'Enter Email address is already exist',
                        buttons: ['OK']
                    });
                    alert_3.present();
                }
                (function (error) { });
            });
        }
        else {
            var alert_4 = this.alertCtrl.create({
                title: 'Alert!',
                subTitle: 'Please read and accept terms & conditions.',
                buttons: ['OK']
            });
            alert_4.present();
        }
    };
    ///////////////////////////////////////////////////profile Img upload /////////////////////////////////
    SalonRegisterBarberPage.prototype.profileActionSheet = function () {
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
    SalonRegisterBarberPage.prototype.fromgallery = function () {
        var _this = this;
        // alert("inside gallery")
        this.camera.getPicture({
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            encodingType: this.camera.EncodingType.JPEG,
            saveToPhotoAlbum: false
        }).then(function (imageData) {
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.profilepic = base64Image;
        }, function (err) {
            console.log('Gallery is not Working');
        });
    };
    SalonRegisterBarberPage.prototype.fromcamera = function () {
        var _this = this;
        // alert("inside camera")
        this.camera.getPicture({
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.CAMERA,
            encodingType: this.camera.EncodingType.JPEG,
            saveToPhotoAlbum: false
        }).then(function (imageData) {
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.profilepic = base64Image;
        }, function (err) {
            console.log('Camera is not Working');
        });
    };
    SalonRegisterBarberPage.prototype.func_profile = function (user_id) {
        var _this = this;
        console.log(this.pic);
        var b = user_id;
        var options = {
            fileName: 'image.jpg',
            fileKey: "barber_image",
            chunkedMode: false,
            mimeType: "image/jpg",
        };
        var fileTransfer = this.transfer.create();
        fileTransfer.upload(this.profilepic, "http://18.220.97.146/barber/WebServices/updatedbarberImage/" + b + '.json', options)
            .then(function (data) {
            _this.data.response = data;
        })
            , function (err) {
            };
    };
    /////////////////////////////////////////////////////// 1st img upload ///////////////////////////////////////////
    SalonRegisterBarberPage.prototype.presentActionSheet1 = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image Source',
            buttons: [
                {
                    text: 'Load from Library',
                    handler: function () {
                        _this.fromgallery1();
                    }
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        _this.fromcamera1();
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
    SalonRegisterBarberPage.prototype.fromgallery1 = function () {
        var _this = this;
        // alert("inside gallery")
        this.camera.getPicture({
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            encodingType: this.camera.EncodingType.JPEG,
            saveToPhotoAlbum: false
        }).then(function (imageData) {
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.pic1 = base64Image;
        }, function (err) {
            console.log('Gallery is not Working');
        });
    };
    SalonRegisterBarberPage.prototype.fromcamera1 = function () {
        var _this = this;
        // alert("inside camera")
        this.camera.getPicture({
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.CAMERA,
            encodingType: this.camera.EncodingType.JPEG,
            saveToPhotoAlbum: false
        }).then(function (imageData) {
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.pic1 = base64Image;
        }, function (err) {
            console.log('Camera is not Working');
        });
    };
    SalonRegisterBarberPage.prototype.func1 = function (user_id) {
        var _this = this;
        console.log(this.pic1);
        var b = user_id;
        var options = {
            fileName: 'image.jpg',
            fileKey: "image",
            chunkedMode: false,
            mimeType: "image/jpg",
        };
        var fileTransfer = this.transfer.create();
        fileTransfer.upload(this.pic1, "http://18.220.97.146/barber/WebServices/barberPreviousWorkImage/" + b + '.json', options)
            .then(function (data) {
            _this.data.response = data;
            _this.func2(_this.pic_barber_id);
        })
            , function (err) {
            };
    };
    ///////////////////////////////////////////////////2nd img upload //////////////////////////////////////////
    SalonRegisterBarberPage.prototype.presentActionSheet2 = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image Source',
            buttons: [
                {
                    text: 'Load from Library',
                    handler: function () {
                        _this.fromgallery2();
                    }
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        _this.fromcamera2();
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
    SalonRegisterBarberPage.prototype.fromgallery2 = function () {
        var _this = this;
        // alert("inside gallery")
        this.camera.getPicture({
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            encodingType: this.camera.EncodingType.JPEG,
            saveToPhotoAlbum: false
        }).then(function (imageData) {
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.pic2 = base64Image;
        }, function (err) {
            console.log('Gallery is not Working');
        });
    };
    SalonRegisterBarberPage.prototype.fromcamera2 = function () {
        var _this = this;
        // alert("inside camera")
        this.camera.getPicture({
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.CAMERA,
            encodingType: this.camera.EncodingType.JPEG,
            saveToPhotoAlbum: false
        }).then(function (imageData) {
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.pic2 = base64Image;
        }, function (err) {
            console.log('Camera is not Working');
        });
    };
    SalonRegisterBarberPage.prototype.func2 = function (user_id) {
        var _this = this;
        console.log(this.pic);
        var b = user_id;
        var options = {
            fileName: 'image.jpg',
            fileKey: "image",
            chunkedMode: false,
            mimeType: "image/jpg",
        };
        var fileTransfer = this.transfer.create();
        fileTransfer.upload(this.pic2, "http://18.220.97.146/barber/WebServices/barberPreviousWorkImage/" + b + '.json', options)
            .then(function (data) {
            _this.data.response = data;
            _this.func3(_this.pic_barber_id);
        })
            , function (err) {
            };
    };
    ///////////////////////////////////////////// 3rd img upload img ////////////////////////////////////////////
    SalonRegisterBarberPage.prototype.presentActionSheet3 = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image Source',
            buttons: [
                {
                    text: 'Load from Library',
                    handler: function () {
                        _this.fromgallery3();
                    }
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        _this.fromcamera3();
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
    SalonRegisterBarberPage.prototype.fromgallery3 = function () {
        var _this = this;
        // alert("inside gallery")
        this.camera.getPicture({
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            encodingType: this.camera.EncodingType.JPEG,
            saveToPhotoAlbum: false
        }).then(function (imageData) {
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.pic3 = base64Image;
        }, function (err) {
            console.log('Gallery is not Working');
        });
    };
    SalonRegisterBarberPage.prototype.fromcamera3 = function () {
        var _this = this;
        // alert("inside camera")
        this.camera.getPicture({
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.CAMERA,
            encodingType: this.camera.EncodingType.JPEG,
            saveToPhotoAlbum: false
        }).then(function (imageData) {
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.pic3 = base64Image;
        }, function (err) {
            console.log('Camera is not Working');
        });
    };
    SalonRegisterBarberPage.prototype.func3 = function (user_id) {
        var _this = this;
        console.log(this.pic);
        var b = user_id;
        var options = {
            fileName: 'image.jpg',
            fileKey: "image",
            chunkedMode: false,
            mimeType: "image/jpg",
        };
        var fileTransfer = this.transfer.create();
        fileTransfer.upload(this.pic3, "http://18.220.97.146/barber/WebServices/barberPreviousWorkImage/" + b + '.json', options)
            .then(function (data) {
            _this.data.response = data;
            _this.func4(_this.pic_barber_id);
        })
            , function (err) {
            };
    };
    //////////////////////////////////////4th image ///////////////////////////////////////////////
    SalonRegisterBarberPage.prototype.presentActionSheet4 = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image Source',
            buttons: [
                {
                    text: 'Load from Library',
                    handler: function () {
                        _this.fromgallery4();
                    }
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        _this.fromcamera4();
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
    SalonRegisterBarberPage.prototype.fromgallery4 = function () {
        var _this = this;
        // alert("inside gallery")
        this.camera.getPicture({
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            encodingType: this.camera.EncodingType.JPEG,
            saveToPhotoAlbum: false
        }).then(function (imageData) {
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.pic4 = base64Image;
        }, function (err) {
            console.log('Gallery is not Working');
        });
    };
    SalonRegisterBarberPage.prototype.fromcamera4 = function () {
        var _this = this;
        // alert("inside camera")
        this.camera.getPicture({
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.CAMERA,
            encodingType: this.camera.EncodingType.JPEG,
            saveToPhotoAlbum: false
        }).then(function (imageData) {
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.pic4 = base64Image;
        }, function (err) {
            console.log('Camera is not Working');
        });
    };
    SalonRegisterBarberPage.prototype.func4 = function (user_id) {
        var _this = this;
        console.log(this.pic);
        var b = user_id;
        var options = {
            fileName: 'image.jpg',
            fileKey: "image",
            chunkedMode: false,
            mimeType: "image/jpg",
        };
        var fileTransfer = this.transfer.create();
        fileTransfer.upload(this.pic4, "http://18.220.97.146/barber/WebServices/barberPreviousWorkImage/" + b + '.json', options)
            .then(function (data) {
            _this.data.response = data;
            _this.func5(_this.pic_barber_id);
        })
            , function (err) {
            };
    };
    //////////////////////////5th image upload /////////////////////////////////////////////////////
    SalonRegisterBarberPage.prototype.presentActionSheet5 = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image Source',
            buttons: [
                {
                    text: 'Load from Library',
                    handler: function () {
                        _this.fromgallery5();
                    }
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        _this.fromcamera5();
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
    SalonRegisterBarberPage.prototype.fromgallery5 = function () {
        var _this = this;
        // alert("inside gallery")
        this.camera.getPicture({
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            encodingType: this.camera.EncodingType.JPEG,
            saveToPhotoAlbum: false
        }).then(function (imageData) {
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.pic5 = base64Image;
        }, function (err) {
            console.log('Gallery is not Working');
        });
    };
    SalonRegisterBarberPage.prototype.fromcamera5 = function () {
        var _this = this;
        // alert("inside camera")
        this.camera.getPicture({
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.CAMERA,
            encodingType: this.camera.EncodingType.JPEG,
            saveToPhotoAlbum: false
        }).then(function (imageData) {
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.pic5 = base64Image;
        }, function (err) {
            console.log('Camera is not Working');
        });
    };
    SalonRegisterBarberPage.prototype.func5 = function (user_id) {
        var _this = this;
        console.log(this.pic);
        var b = user_id;
        var options = {
            fileName: 'image.jpg',
            fileKey: "image",
            chunkedMode: false,
            mimeType: "image/jpg",
        };
        var fileTransfer = this.transfer.create();
        fileTransfer.upload(this.pic5, "http://18.220.97.146/barber/WebServices/barberPreviousWorkImage/" + b + '.json', options)
            .then(function (data) {
            _this.data.response = data;
            _this.func_profile(_this.pic_barber_id);
        })
            , function (err) {
            };
    };
    SalonRegisterBarberPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-salon-register-barber',
            templateUrl: 'salon-register-barber.html',
        }),
        __metadata("design:paramtypes", [FormBuilder, ActionSheetController, Camera, File, FilePath, Transfer, ServicesProvider, NavController, NavParams, LoadingController, Http, AlertController])
    ], SalonRegisterBarberPage);
    return SalonRegisterBarberPage;
}());
export { SalonRegisterBarberPage };
//# sourceMappingURL=salon-register-barber.js.map