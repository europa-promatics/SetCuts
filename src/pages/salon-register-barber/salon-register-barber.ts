import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TermsOfservicePage} from '../terms-ofservice/terms-ofservice';
import {BarberServicePage} from '../barber-service/barber-service';
import { Http } from '@angular/http';
import { AlertController} from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import {Login} from '../login/login';
import {SalonOwnerHomePage} from '../salon-owner-home/salon-owner-home';
import {ServicesProvider}   from '../../providers/services/services';
import {Observable} from 'rxjs/Rx';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';
import { Transfer, FileUploadOptions, TransferObject } from '@ionic-native/transfer';
import { ActionSheetController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var cordova: any;
declare var FileTransfer;

@IonicPage()
@Component({
  selector: 'page-salon-register-barber',
  templateUrl: 'salon-register-barber.html',
})
export class SalonRegisterBarberPage {
    email
    password
    pic
    http
    data
    full_name
    phone
    gender
    service
    confirmpswd;
    flag;
    items
    service_salon
    about_me;
    inst_link;
    pic1;
    pic4;
    pic2;
    pic3;
    pic5;
    pic_barber_id;
    profilepic;
    Role
    salonregister:FormGroup;
    servicesData;
    constructor(public formBuilder: FormBuilder,public actionSheetCtrl: ActionSheetController, private camera: Camera, private file: File, private filePath: FilePath, private transfer: Transfer, public servicesProvider: ServicesProvider, public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, http: Http, public alertCtrl: AlertController) {
        this.http = http;
        this.data = {};
        this.data.response = '';
        this.Role="limited";
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

    ionViewDidLoad() {
        console.log('ionViewDidLoad SalonRegisterBarberPage');
    }
    terms() {
        this.navCtrl.push('TermsOfservicePage');
        // code...
    }
     ngOnInit(){
  
           let loading = this.loadingCtrl.create({content: 'Please wait...'});
           Observable.fromPromise(loading.present())
           var salon_id=localStorage['salon_id'];     
           this.servicesProvider.Getsalonservices(salon_id)
            .subscribe(data => {
                console.log(data);
                this.servicesData=data;
                loading.dismiss();
                this.items = this.servicesData.serviceinfo;
            });

  }
    salon_reg() {
        if (this.flag == true || this.flag == 'true') {
            let loader = this.loadingCtrl.create({
                content: "Please wait..."
            });
            loader.present();
            var link = 'http://18.220.97.146/barber/WebServices/barberRegistration.json';
            var data = JSON.stringify({
                fullname: this.full_name,
                email: this.email,
                usertype: 2,
                about_barber: this.about_me,
                salonid: localStorage['salon_id'],
                instagram: this.inst_link,
                roleright: this.Role,
                service:this.service
            });
            this.http.post(link, data).subscribe(data => {
                loader.dismiss();
                this.data.response = data;
                if (JSON.parse(data._body).status == 1) {
                    let alert = this.alertCtrl.create({
                        title: 'Thank You!',
                        subTitle: 'Registration successful please Check your mail inbox  and your Email and password send  in to your Email ',
                        buttons: ['OK']
                    });
                    this.navCtrl.setRoot(SalonOwnerHomePage);
                    alert.present();
                    this.pic_barber_id = JSON.parse(data._body).barber_id;
                    console.log('barber_id' + this.pic_barber_id);
                    this.func1(this.pic_barber_id);
                } else if (JSON.parse(data._body).message == "Registration unsucessfully field required") {
                    localStorage['auth'] = 'false';
                    let alert = this.alertCtrl.create({
                        title: 'Alert!',
                        subTitle: 'Input Field Required',
                        buttons: ['OK']
                    });
                    alert.present();
                }else if (JSON.parse(data._body).message == "Entered email address or username is already registered with us.") {
                    localStorage['auth'] = 'false';
                    let alert = this.alertCtrl.create({
                        title: 'Alert!',
                        subTitle: 'Enter Email address is already exist',
                        buttons: ['OK']
                    });
                    alert.present();
                }
                error => {}
            });
        } else {
            let alert = this.alertCtrl.create({
                title: 'Alert!',
                subTitle: 'Please read and accept terms & conditions.',
                buttons: ['OK']
            });
            alert.present();
        }
    }

///////////////////////////////////////////////////profile Img upload /////////////////////////////////
 public profileActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
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


fromgallery(){
  // alert("inside gallery")
  this.camera.getPicture({
  destinationType: this.camera.DestinationType.DATA_URL,
  sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
  encodingType: this.camera.EncodingType.JPEG,
   saveToPhotoAlbum: false
}).then((imageData) => {
 let base64Image = 'data:image/jpeg;base64,' + imageData;
 this.profilepic=base64Image;
}, (err) => {
console.log('Gallery is not Working')
})
}



fromcamera(){
// alert("inside camera")
this.camera.getPicture({
destinationType: this.camera.DestinationType.DATA_URL,
sourceType: this.camera.PictureSourceType.CAMERA,
encodingType: this.camera.EncodingType.JPEG,
saveToPhotoAlbum: false
}).then((imageData) => {
 let base64Image = 'data:image/jpeg;base64,' + imageData;
  this.profilepic= base64Image;

}, (err) => {
console.log('Camera is not Working')
})
}




func_profile(user_id:number){
      console.log(this.pic)
          var b=user_id;
         

          let options: FileUploadOptions = {
            fileName: 'image.jpg',
            fileKey: "barber_image",
            chunkedMode: false,
            mimeType: "image/jpg",


        }
          const fileTransfer: TransferObject = this.transfer.create();
          fileTransfer.upload(this.profilepic, "http://18.220.97.146/barber/WebServices/updatedbarberImage/" + b + '.json',options)
         
       
          .then(data => {
            this.data.response=data;
           
             
           
      })

           , (err) => {
             
             

           }


} 


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




func1(user_id:number){
      console.log(this.pic1)
          var b=user_id;
        

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
           
             this.func2(this.pic_barber_id);
                        
            



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
           this.func3(this.pic_barber_id);
                        
            
           

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
            this.func4(this.pic_barber_id);
                         
      
          


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
            this.func5(this.pic_barber_id);
                         

          


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
           this.func_profile(this.pic_barber_id);

          


      })

           , (err) => {
           
           }


}  

}

