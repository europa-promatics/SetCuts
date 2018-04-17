import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';
import { Transfer, FileUploadOptions, TransferObject } from '@ionic-native/transfer';
import { AlertController} from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import { ActionSheetController } from 'ionic-angular';
declare var cordova: any;
declare var FileTransfer;
import {ServicesProvider} from '../../providers/services/services';


@IonicPage()
@Component({
  selector: 'page-barber-gallery',
  templateUrl: 'barber-gallery.html',
})


export class BarberGalleryPage {
    pic;
    gaming;
    http;
    data;
    content_img;
    myArry: any;
    img0;
    img1;
    img2;
    img3;
    constructor(public serviceProvider: ServicesProvider, public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private file: File, private filePath: FilePath, private transfer: Transfer, public loadingCtrl: LoadingController, http: Http, public alertCtrl: AlertController) {
        this.http = http;
        this.data = {};
        this.data.response = '';
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad BarberGalleryPage');
    }
    picture(a) {
        if (a == 2) {
            this.camera.getPicture({
                destinationType: this.camera.DestinationType.DATA_URL,
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                encodingType: this.camera.EncodingType.JPEG,
                saveToPhotoAlbum: false
            }).then((imageData) => {
                let base64Image = 'data:image/jpeg;base64,' + imageData;
                this.pic = base64Image;
                var b = localStorage['salon_id']
                this.func1(b);
            }, (err) => {
                console.log('Camera is not Working')
            })
            // let options = {maximumImagesCount: 1,width: 300,height: 300,quality: 75}
            // ImagePicker.getPictures(options).then( (file_uris) => { this.pic = file_uris[0]} );
        } else if (a == 1) {
            this.camera.getPicture({
                destinationType: this.camera.DestinationType.DATA_URL,
                sourceType: this.camera.PictureSourceType.CAMERA,
                encodingType: this.camera.EncodingType.JPEG,
                saveToPhotoAlbum: false
            }).then((imageData) => {
                let base64Image = 'data:image/jpeg;base64,' + imageData;
                this.pic = base64Image;
                var a = localStorage['barber_id']
                this.func1(a);
            }, (err) => {
                console.log('Camera is not Working')
            })
        }
    }
    func1(user_id: number) {
        //  alert(user_id);
        console.log(this.pic)
        var b = user_id;
        let loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();

        let options: FileUploadOptions = {
            fileName: 'image.jpg',
            fileKey: "image",
            chunkedMode: false,
            mimeType: "image/jpg",


        }
        const fileTransfer: TransferObject = this.transfer.create();
        fileTransfer.upload(this.pic, "http://18.220.97.146/barber/WebServices/barberPreviousWorkImage/" + b + '.json', options)


            .then(data => {
                this.data.response = data;

                loader.dismiss();
                let alert = this.alertCtrl.create({
                    title: 'Thank you!',
                    subTitle: 'Image Upload Sucessful',
                    buttons: ['OK']
                });
                alert.present();
                this.ngOnInit();


            })

            , (err) => {
                loader.dismiss();
                let alert = this.alertCtrl.create({
                    title: 'Error!',
                    subTitle: 'Try Again!',
                    buttons: ['OK']
                });
                alert.present();


            }


    }
    ngOnInit() {
        console.log('hii');
        let loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();
        var link = 'http://18.220.97.146/barber/WebServices/barberPreviousWorkImageShowById.json';
        var data = JSON.stringify({
            barber_id: localStorage['barber_id'],
        });
        this.http.post(link, data)
            .subscribe(data => {
                loader.dismiss();
                this.data.response = data;
                console.log(JSON.stringify(this.data.response));
                this.content_img = JSON.parse(data._body).message.image;
                this.myArry = this.content_img.split(',')
                this.img0 = this.myArry[0];
                this.img1 = this.myArry[1];
                this.img2 = this.myArry[2];
                this.img3 = this.myArry[3];
                console.log(JSON.stringify(this.myArry))


                error => {}
            });

    }
    presentActionSheet() {
        let actionSheet = this.actionSheetCtrl.create({
            title: 'Select image source!',
            buttons: [{
                text: 'Camera',
                icon: 'camera',
                handler: () => {
                    this.picture(1);
                    console.log('Camera clicked');
                }
            }, {
                text: 'Gallery',
                icon: 'images',
                handler: () => {
                    this.picture(2);
                    console.log('Gallery clicked');
                }
            }, {
                text: 'Cancel',
                icon: 'close-circle',
                role: 'cancel',
                handler: () => {
                    console.log('Cancel clicked');
                }
            }]
        });
        actionSheet.present();
    }

}

