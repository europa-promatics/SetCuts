import {
    Component
}
from '@angular/core';
import {
    IonicPage,
    NavController,
    NavParams
}
from 'ionic-angular';
import {
    Http
}
from '@angular/http';
import 'rxjs/add/operator/map';
import {
    LoadingController
}
from 'ionic-angular';
import {
    ActionSheetController
}
from 'ionic-angular';
import {
    Camera,
    CameraOptions
}
from '@ionic-native/camera';
import {
    File
}
from '@ionic-native/file';
import {
    FilePath
}
from '@ionic-native/file-path';
import {
    Transfer,
    FileUploadOptions,
    TransferObject
}
from '@ionic-native/transfer';
import {
    AlertController
}
from 'ionic-angular';
import {
    Events
}
from 'ionic-angular';
import {
    ServicesProvider
}
from '../../providers/services/services';
import {
    Observable
}
from 'rxjs/Rx';
/**
 * Generated class for the SalonBarberProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-salon-barber-profile',
    templateUrl: 'salon-barber-profile.html',
})
export class SalonBarberProfilePage {
    full_data;
    barber_id;
    fullname;
    gender
    salonname
    phonenumber
    email
    service
    barber_image
    salonside
    edit
    http;
    editprofile
    data;
    pic
    multiservice;
    toppings
    barberid;
    usertype;
    post
    instagram
    items
    s_id
    s_barber_image
    about_barber;
    pic1;
    pic2;
    pic3;
    pic4;
    pic5;
    constructor(public serviceProvider: ServicesProvider, public events: Events, public navCtrl: NavController, public navParams: NavParams, http: Http,
        private camera: Camera, public alertCtrl: AlertController,
        private file: File, private filePath: FilePath, private transfer: Transfer,
        public actionSheetCtrl: ActionSheetController,
        public loadingCtrl: LoadingController) {
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
            this.barber_id = localStorage['barberId'];
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
            var b_img = this.full_data.barber_image
            var n = b_img.includes("http");
            if (n == true || n == 'true') {
                this.barber_image = this.full_data.barber_image;
            }
            else {
                this.barber_image = 'http://18.220.97.146/barber/img/barberimage/' + this.full_data.barber_image
            }
            // this.barber_image=this.full_data.barber_image;
        }
        // this.barberid=localStorage['barber_id']
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SalonBarberProfilePage');
    }

    edit_profile() {
        this.edit = 'true';
    }


    ngOnInit() {
        this.barberinfo();
        // this.salonservice();

    }
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
    barberinfo() {

        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        Observable.fromPromise(loading.present())
            .flatMap(data => this.serviceProvider.barberInfo(this.barber_id))
            .subscribe(data =>
                loading.dismiss().then(() => {
                    this.post = data;
                    this.fullname = this.post.barberinfo[0].fullname;
                    this.gender = this.post.barberinfo[0].gender;
                    this.salonname = this.post.barberinfo[0].salonname;
                    this.phonenumber = this.post.barberinfo[0].phonenumber;
                    this.email = this.post.barberinfo[0].email;
                    this.service = this.post.barberinfo[0].service;
                    this.about_barber = this.post.barberinfo[0].about_barber;
                    this.instagram = this.post.barberinfo[0].instagram;
                    var barb_img = this.post.barberinfo[0].barber_image;
                    if (this.post.barberworkimage[0]) {
                       // alert(this.post.barberworkimage[0]);
                       this.pic1="http://18.220.97.146/barber/img/barberpreviousworkimage/"+this.post.barberworkimage[0];
                    }
                    if (this.post.barberworkimage[1]) {
                       // alert(this.post.barberworkimage[1]);
                       this.pic2="http://18.220.97.146/barber/img/barberpreviousworkimage/"+this.post.barberworkimage[1];
                    }
                    if (this.post.barberworkimage[2]) {
                       // alert(this.post.barberworkimage[2]);
                       this.pic3="http://18.220.97.146/barber/img/barberpreviousworkimage/"+this.post.barberworkimage[2];
                    }
                    if (this.post.barberworkimage[3]) {
                       // alert(this.post.barberworkimage[3]);
                       this.pic4="http://18.220.97.146/barber/img/barberpreviousworkimage/"+this.post.barberworkimage[3];
                    }
                    if (this.post.barberworkimage[4]) {
                       // alert(this.post.barberworkimage[4]);
                       this.pic5="http://18.220.97.146/barber/img/barberpreviousworkimage/"+this.post.barberworkimage[4];
                    }


                    if (barb_img == null || barb_img == 'null') {
                        this.barber_image = 'http://18.220.97.146/barber/app_link/img/team-member2.jpg';
                    }
                    else {
                        var n = barb_img.includes("http");
                        if (n == true || n == 'true') {
                            this.barber_image = this.post.barberinfo[0].barber_image;
                        }
                        else {
                            this.barber_image = 'http://18.220.97.146/barber/img/barberimage/' + this.post.barberinfo[0].barber_image;
                        }
                    }
                    // this.barber_image=this.post.barberinfo[0].barber_image;
                    // this.s_barber_image='http://18.220.97.146/barber/img/barberimage/'+this.post.barberinfo[0].barber_image;
                    if (localStorage['user_type'] == 2) {


                        this.events.publish('user:created', localStorage['user_type'], this.fullname, localStorage['auth'], this.barber_image, this.barber_image)
                    }

                    console.log("barber info " + JSON.stringify(this.post));
                }),
                error =>
                loading.dismiss().then(() => {})
            );


    }

    save_profile() {
        let loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();

        var link = 'http://18.220.97.146/barber/WebServices/barberProfileEdit.json';
        var data = JSON.stringify({
            id: localStorage['barberId'],
            fullname: this.fullname,
            phonenumber: this.phonenumber,
            email: this.email,
            service: this.toppings,
            gender: this.gender,
            instagram: this.instagram,
            about_barber: this.about_barber,
        });
        this.http.post(link, data)
            .map(res => res.json())
            .subscribe(data => {
                loader.dismiss();
                this.editprofile = data;
                this.edit = 'false';
                this.image1Upload(localStorage['barberId']);
                this.ngOnInit();
                // alert("edit resp"+JSON.stringify(this.editprofile))
            });
    }

    public presentActionSheet() {
        let actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image Source',
            buttons: [{
                    text: 'Load from Library',
                    handler: () => {
                        this.fromgallery();
                    }
                },
                {
                    text: 'Use Camera',
                    handler: () => {
                        this.fromcamera();
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    }


    fromgallery() {
        // alert("inside gallery")
        this.camera.getPicture({
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            encodingType: this.camera.EncodingType.JPEG,
            saveToPhotoAlbum: false
        }).then((imageData) => {
            let base64Image = 'data:image/jpeg;base64,' + imageData;
            this.pic = base64Image;
            var a = localStorage['barber_id']
            this.func1(a);
        }, (err) => {
            console.log('Gallery is not Working')
        })
    }


    fromcamera() {
        // alert("inside camera")
        this.camera.getPicture({
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.CAMERA,
            encodingType: this.camera.EncodingType.JPEG,
            saveToPhotoAlbum: false
        }).then((imageData) => {
            let base64Image = 'data:image/jpeg;base64,' + imageData;
            this.pic = base64Image;
            var a = localStorage['barberId']
            this.func1(a);
        }, (err) => {
            console.log('Camera is not Working')
        })
    }

    func1(user_id: number) {
        // alert("hello user" + user_id);
        // alert(this.pic);
        // alert("inside function")
        console.log(this.pic)
        var b = this.barber_id;

        let loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();

        let options: FileUploadOptions = {
            fileName: 'image.jpg',
            fileKey: "barber_image",
            chunkedMode: false,
            mimeType: "image/jpg",
        }
        const fileTransfer: TransferObject = this.transfer.create();
        fileTransfer.upload(this.pic, "http://18.220.97.146/barber/WebServices/updatedbarberImage/" + b + '.json', options)
            .then(data => {
                this.data.response = data;
                loader.dismiss();
                // alert("data"+JSON.stringify(data));
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

    // -------------------------------17-3-2018---------------------------------

         /////////////////////////////////////////////////////// 1st img upload ///////////////////////////////////////////
      public presentActionSheet1() {
          let actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image Source',
            buttons: [
              {
          text: 'Load from Library',
          handler: () => {
            this.fromgallery1();
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.fromcamera1();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }


fromgallery1(){
  // alert("inside gallery")
  this.camera.getPicture({
  destinationType: this.camera.DestinationType.DATA_URL,
  sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
  encodingType: this.camera.EncodingType.JPEG,
   saveToPhotoAlbum: false
}).then((imageData) => {
 let base64Image = 'data:image/jpeg;base64,' + imageData;
 this.pic1=base64Image;
}, (err) => {
console.log('Gallery is not Working')
})
}



fromcamera1(){
// alert("inside camera")
this.camera.getPicture({
destinationType: this.camera.DestinationType.DATA_URL,
sourceType: this.camera.PictureSourceType.CAMERA,
encodingType: this.camera.EncodingType.JPEG,
saveToPhotoAlbum: false
}).then((imageData) => {
 let base64Image = 'data:image/jpeg;base64,' + imageData;
  this.pic1= base64Image;

}, (err) => {
console.log('Camera is not Working')
})
}




image1Upload(user_id:number){
        console.log(this.pic1)
        var b=user_id
        let options: FileUploadOptions = {
            fileName: 'image.jpg',
            fileKey: "image",
            chunkedMode: false,
            mimeType: "image/jpg",
        }
        const fileTransfer: TransferObject = this.transfer.create();
        fileTransfer.upload(this.pic1, "http://18.220.97.146/barber/WebServices/barberPreviousWorkImage/" + b + '.json',options)
            .then(data => {
                this.data.response=data;
                // this.func2(localStorage['barberId']);
            })
           , (err) => {
           }
}   


///////////////////////////////////////////////////2nd img upload //////////////////////////////////////////
  public presentActionSheet2() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.fromgallery2();
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.fromcamera2();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }


fromgallery2(){
  // alert("inside gallery")
  this.camera.getPicture({
  destinationType: this.camera.DestinationType.DATA_URL,
  sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
  encodingType: this.camera.EncodingType.JPEG,
   saveToPhotoAlbum: false
}).then((imageData) => {
 let base64Image = 'data:image/jpeg;base64,' + imageData;
 this.pic2=base64Image;
}, (err) => {
console.log('Gallery is not Working')
})
}



fromcamera2(){
// alert("inside camera")
this.camera.getPicture({
destinationType: this.camera.DestinationType.DATA_URL,
sourceType: this.camera.PictureSourceType.CAMERA,
encodingType: this.camera.EncodingType.JPEG,
saveToPhotoAlbum: false
}).then((imageData) => {
 let base64Image = 'data:image/jpeg;base64,' + imageData;
  this.pic2= base64Image;

}, (err) => {
console.log('Camera is not Working')
})
}




func2(user_id:number){
      console.log(this.pic)
          var b=user_id;
         
          let options: FileUploadOptions = {
           fileName: 'image.jpg',
            fileKey: "image",
            chunkedMode: false,
            mimeType: "image/jpg",
        }
          const fileTransfer: TransferObject = this.transfer.create();
          fileTransfer.upload(this.pic2, "http://18.220.97.146/barber/WebServices/barberPreviousWorkImage/" + b + '.json',options)
          .then(data => {
           this.data.response=data;
           this.func3(localStorage['barberId']);
      })

           , (err) => {
             
             

           
           }


}    

///////////////////////////////////////////// 3rd img upload img ////////////////////////////////////////////
      public presentActionSheet3() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.fromgallery3();
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.fromcamera3();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }


fromgallery3(){
  // alert("inside gallery")
  this.camera.getPicture({
  destinationType: this.camera.DestinationType.DATA_URL,
  sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
  encodingType: this.camera.EncodingType.JPEG,
   saveToPhotoAlbum: false
}).then((imageData) => {
 let base64Image = 'data:image/jpeg;base64,' + imageData;
 this.pic3=base64Image;
}, (err) => {
console.log('Gallery is not Working')
})
}



fromcamera3(){
// alert("inside camera")
this.camera.getPicture({
destinationType: this.camera.DestinationType.DATA_URL,
sourceType: this.camera.PictureSourceType.CAMERA,
encodingType: this.camera.EncodingType.JPEG,
saveToPhotoAlbum: false
}).then((imageData) => {
 let base64Image = 'data:image/jpeg;base64,' + imageData;
  this.pic3= base64Image;

}, (err) => {
console.log('Camera is not Working')
})
}




func3(user_id:number){
      console.log(this.pic)
          var b=user_id;
          
          let options: FileUploadOptions = {
          fileName: 'image.jpg',
            fileKey: "image",
            chunkedMode: false,
            mimeType: "image/jpg",


        }
          const fileTransfer: TransferObject = this.transfer.create();
          fileTransfer.upload(this.pic3, "http://18.220.97.146/barber/WebServices/barberPreviousWorkImage/" + b + '.json',options)
         
       
          .then(data => {
            this.data.response=data;
            this.func4(localStorage['barberId']);
                         
      
          


      })

           , (err) => {
              
           
           }


}  


//////////////////////////////////////4th image ///////////////////////////////////////////////
      public presentActionSheet4() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.fromgallery4();
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.fromcamera4();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }


fromgallery4(){
  // alert("inside gallery")
  this.camera.getPicture({
  destinationType: this.camera.DestinationType.DATA_URL,
  sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
  encodingType: this.camera.EncodingType.JPEG,
   saveToPhotoAlbum: false
}).then((imageData) => {
 let base64Image = 'data:image/jpeg;base64,' + imageData;
 this.pic4=base64Image;
}, (err) => {
console.log('Gallery is not Working')
})
}



fromcamera4(){
// alert("inside camera")
this.camera.getPicture({
destinationType: this.camera.DestinationType.DATA_URL,
sourceType: this.camera.PictureSourceType.CAMERA,
encodingType: this.camera.EncodingType.JPEG,
saveToPhotoAlbum: false
}).then((imageData) => {
 let base64Image = 'data:image/jpeg;base64,' + imageData;
  this.pic4= base64Image;

}, (err) => {
console.log('Camera is not Working')
})
}




func4(user_id:number){
      console.log(this.pic)
          var b=user_id;
          let options: FileUploadOptions = {
          fileName: 'image.jpg',
            fileKey: "image",
            chunkedMode: false,
            mimeType: "image/jpg",


        }
          const fileTransfer: TransferObject = this.transfer.create();
          fileTransfer.upload(this.pic4, "http://18.220.97.146/barber/WebServices/barberPreviousWorkImage/" + b + '.json',options)
         
       
          .then(data => {
            this.data.response=data;
            this.func5(localStorage['barberId']);
                         

          


      })

           , (err) => {
           
           }


}  


//////////////////////////5th image upload /////////////////////////////////////////////////////
      public presentActionSheet5() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.fromgallery5();
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.fromcamera5();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }


fromgallery5(){
  // alert("inside gallery")
  this.camera.getPicture({
  destinationType: this.camera.DestinationType.DATA_URL,
  sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
  encodingType: this.camera.EncodingType.JPEG,
   saveToPhotoAlbum: false
}).then((imageData) => {
 let base64Image = 'data:image/jpeg;base64,' + imageData;
 this.pic5=base64Image;
}, (err) => {
console.log('Gallery is not Working')
})
}



fromcamera5(){
// alert("inside camera")
this.camera.getPicture({
destinationType: this.camera.DestinationType.DATA_URL,
sourceType: this.camera.PictureSourceType.CAMERA,
encodingType: this.camera.EncodingType.JPEG,
saveToPhotoAlbum: false
}).then((imageData) => {
 let base64Image = 'data:image/jpeg;base64,' + imageData;
  this.pic5= base64Image;

}, (err) => {
console.log('Camera is not Working')
})
}




func5(user_id:number){
      console.log(this.pic)
          var b=user_id;
         

          let options: FileUploadOptions = {
          fileName: 'image.jpg',
            fileKey: "image",
            chunkedMode: false,
            mimeType: "image/jpg",


        }
          const fileTransfer: TransferObject = this.transfer.create();
          fileTransfer.upload(this.pic5, "http://18.220.97.146/barber/WebServices/barberPreviousWorkImage/" + b + '.json',options)
         
       
          .then(data => {
            this.data.response=data;
           // this.func_profile(localStorage['barberId'])
      })

           , (err) => {
           
           }


}    

}