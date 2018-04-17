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
import {Showpath} from '../showpath/showpath';
/**
 * Generated class for the UserProfile page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfile {
edit;
http;
data;
viewprofile;
username
phonenumber
email
editprofile
pic
image
address;
image1;
fb_img;
customer_id;
c_id;
barber_view;
  constructor(public events: Events,public navCtrl: NavController, public navParams: NavParams,http:Http,
     private camera: Camera,public alertCtrl: AlertController,
     private file: File, private filePath: FilePath, private transfer: Transfer, 
    public actionSheetCtrl: ActionSheetController,
    public loadingCtrl: LoadingController) {
  	this.edit='false';
    this.http=http;
    this.data={}
    this.customer_id=this.navParams.get('customer_id');
    if(this.customer_id==undefined || this.customer_id=='undefined'){
      this.c_id=localStorage['user_id'];
      this.barber_view='false';
    }
    else{
this.c_id=this.customer_id;
this.barber_view='true';
    }

   
  }
  map(){
    this.navCtrl.push('Showpath');
  }

  ngOnInit(){



 let loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
       loader.present();

     var link='http://18.220.97.146/barber/WebServices/customerViewProfile.json';
     var data=JSON.stringify({
        customer_id:this.c_id
     });
      this.http.post(link,data) 
      .map(res => res.json())
      .subscribe(data=>{
        loader.dismiss();
             this.viewprofile=data;
             console.log("profile"+JSON.stringify(this.viewprofile.data))
                 this.username=this.viewprofile.data.fullname;
                 this.phonenumber=this.viewprofile.data.phonenumber;
                  this.email=this.viewprofile.data.email;
                  
                   
                   this.fb_img=this.viewprofile.data.image;
                   if(this.fb_img==null || this.fb_img=='null'){
                     this.image='assets/img/team-member2.jpg';
                   }
                   else{


                   var n=this.fb_img.includes("http");
                   if(n==true || n=='true'){
                     this.image=this.viewprofile.data.image;
                   }
                   else{
                      this.image='http://18.220.97.146/barber/img/customerprofileimage/'+this.viewprofile.data.image;
                   }
                   }
                   this.address=this.viewprofile.data.address;
                   localStorage['profile_img']=this.image;
                   // if(this.image!=null || this.image!='null'){
                   //   this.image1=this.image;
                   // }
                   if(this.customer_id==undefined || this.customer_id=='undefined'){
                      this.events.publish('user:created', localStorage['user_type'], this.username, localStorage['auth'], this.image,this.image);
                   }
                   


              console.log("name"+JSON.stringify(this.viewprofile.data.fullname))
         });

    




  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserProfile');
  }
  edit_profile(){
  		this.edit='true';
  }




save_profile(){
   let loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
       loader.present();

     var link='http://18.220.97.146/barber/WebServices/customerProfileEdit.json';
     var data=JSON.stringify({

         id:localStorage['user_id'],
         fullname:this.username,
         phonenumber:this.phonenumber,
         email:this.email,
         address:this.address
     });
      this.http.post(link,data) 
      .map(res => res.json())
      .subscribe(data=>{
        loader.dismiss();
             this.editprofile=data;
            // alert("edit resp"+JSON.stringify(this.editprofile.message))
             if(this.editprofile.message=='your profile updated successfully'){
                let alert = this.alertCtrl.create({
               title: 'Thank you!',
               subTitle: 'Profile Updated Sucessful',
               buttons: ['OK']
             });
             alert.present();
               this.edit='false';
               this.ngOnInit();
             }
             else{
                let alert = this.alertCtrl.create({
               title: 'ALERT!',
               subTitle: 'Something went Wrong',
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
  //alert("inside gallery")
  this.camera.getPicture({
  destinationType: this.camera.DestinationType.DATA_URL,
  sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
  encodingType: this.camera.EncodingType.JPEG,
   saveToPhotoAlbum: false
}).then((imageData) => {
 let base64Image = 'data:image/jpeg;base64,' + imageData;
 this.pic=base64Image;
 var a=localStorage['user_id']
this.func1(a);
}, (err) => {
console.log('Gallery is not Working')
})
}



fromcamera(){
//alert("inside camera")
this.camera.getPicture({
destinationType: this.camera.DestinationType.DATA_URL,
sourceType: this.camera.PictureSourceType.CAMERA,
encodingType: this.camera.EncodingType.JPEG,
saveToPhotoAlbum: false
}).then((imageData) => {
 let base64Image = 'data:image/jpeg;base64,' + imageData;
  this.pic= base64Image;
 var a=localStorage['user_id']
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
            fileKey: "image",
            chunkedMode: false,
            mimeType: "image/jpg",


        }
          const fileTransfer: TransferObject = this.transfer.create();
          fileTransfer.upload(this.pic, "http://18.220.97.146/barber/WebServices/updatedCustomerImage/" + b + '.json',options)
         
       
          .then(data => {
            this.data.response=data;
             loader.dismiss();
             let alert = this.alertCtrl.create({
               title: 'Thank you!',
               subTitle: 'Image Upload Sucessfully',
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
