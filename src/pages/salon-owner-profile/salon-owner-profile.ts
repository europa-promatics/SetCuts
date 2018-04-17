import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { LoadingController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';
import { Transfer, FileUploadOptions, TransferObject } from '@ionic-native/transfer';
import { AlertController} from 'ionic-angular';
import { Events } from 'ionic-angular';
/**
 * Generated class for the SalonOwnerProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-salon-owner-profile',
  templateUrl: 'salon-owner-profile.html',
})
export class SalonOwnerProfilePage {
edit;
http;
viewprofile;
salonname;
salonnumber;
salonemail
editprofile
image;
pic;
data;
address;
website;
schedule;
about;
s_o_image
  constructor(public events: Events,public navCtrl: NavController, public navParams: NavParams,http:Http,
    private camera: Camera,public alertCtrl: AlertController,
     private file: File, private filePath: FilePath, private transfer: Transfer, 
    public actionSheetCtrl: ActionSheetController,
    public loadingCtrl: LoadingController) {
        this.http=http;
  	  	this.edit='false';
        this.data = {};
        this.data.response = '';
  }
 ngOnInit(){  
 let loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
       loader.present();

     var link='http://18.220.97.146/barber/WebServices/salonViewProfile.json';
     var data=JSON.stringify({
        salon_id:localStorage['salon_id']
     });
      this.http.post(link,data) 
      .map(res => res.json())
      .subscribe(data=>{
        loader.dismiss();
             this.viewprofile=data;
             console.log("profile"+JSON.stringify(this.viewprofile.data))
                 this.salonname=this.viewprofile.data.fullname;
                 this.salonnumber=this.viewprofile.data.phonenumber;
                  this.salonemail=this.viewprofile.data.email;
                   this.s_o_image=this.viewprofile.data.profile_image;
                  if(this.s_o_image==null || this.s_o_image=='null'){
                     this.image='http://18.220.97.146/barber/app_link/img/team-member2.jpg';
                  }
                else{


                 var n=this.s_o_image.includes("http");
                   if(n==true || n=='true'){
                     this.image=this.viewprofile.data.profile_image;
                   }
                   else{
                      this.image='http://18.220.97.146/barber/img/salonprofileimage/'+this.viewprofile.data.profile_image;
                   }
                 }
                 this.address=this.viewprofile.data.address;
                 this.website=this.viewprofile.data.website;
                 this.schedule=this.viewprofile.data.schedule;
                   this.about=this.viewprofile.data.about;
                    this.events.publish('user:created', localStorage['user_type'], this.salonname, localStorage['auth'], this.image,this.image,this.image)
              console.log("name"+JSON.stringify(this.viewprofile.data.fullname))
         });






  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalonOwnerProfilePage');
  }
  edit_profile(){
  		this.edit='true';
  }



save_profile(){



  let loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
       loader.present();

     var link='http://18.220.97.146/barber/WebServices/salonProfileEdit.json';
     var data=JSON.stringify({

         id:localStorage['salon_id'],
         fullname:this.salonname,
         phonenumber:this.salonnumber,
         email:this.salonemail,
         address:this.address,
         schedule:this.schedule,
         website:this.website,
         about:this.about
     });
      this.http.post(link,data) 
      .map(res => res.json())
      .subscribe(data=>{
        loader.dismiss();
             this.editprofile=data;
            // alert("edit resp"+JSON.stringify(this.editprofile))
            if(this.editprofile.message=='your profile updated successfully'){
             let alert = this.alertCtrl.create({
               title: 'Thank you!',
               subTitle: 'Profile Updated  Sucessfully',
               buttons: ['OK']
             });
             alert.present();
               this.edit='false';
               this.ngOnInit();
}
else {
         let alert = this.alertCtrl.create({
               title: 'ERROR',
               subTitle: 'TRY AGAIN!',
               buttons: ['OK']
             });
             alert.present();
              this.edit='true';

}
         });

}

 public presentActionSheet() {
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
 this.pic=base64Image;
 var a=localStorage['salon_id'];
this.func1(a);
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
  this.pic= base64Image;
   var a=localStorage['salon_id']
this.func1(a);
}, (err) => {
console.log('Camera is not Working')
})
}




func1(user_id:number){
     
        // alert("inside function")
      console.log(this.pic)
          var b=user_id;
          let loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
       loader.present();

          let options: FileUploadOptions = {
            fileName: 'image.jpg',
            fileKey: "profile_image",
            chunkedMode: false,
            mimeType: "image/jpg",


        }
          const fileTransfer: TransferObject = this.transfer.create();
          fileTransfer.upload(this.pic, "http://18.220.97.146/barber/WebServices/updatedSalonImage/" + b + '.json',options)
         
       
          .then(data => {
            this.data.response=data;
    
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
}
