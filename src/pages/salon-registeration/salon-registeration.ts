import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Login } from '../login/login';
import { TermsOfservicePage } from '../terms-ofservice/terms-ofservice';
import { AlertController} from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import {  ModalController } from 'ionic-angular';
import { LocationSelectPage } from '../location-select/location-select';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation';
declare var google
/**
 * Generated class for the SalonRegisterationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-salon-registeration',
  templateUrl: 'salon-registeration.html',
})
export class SalonRegisterationPage {
  http;
  data;
 full_name;
email;
salon_name;
gender;
password;
confirm_password;
location;
lat;
lng;
flag;
name;
useremail;
pass;
cpass;
Bussiness_salon_email;
salonregister:FormGroup;

 placesService:any;
    map: any;
    markers = [];
    placedetails: any;
    bidlat;
    bidlng;
    bidlat1;
    bidlng1;
    point
    address:any = {
        place: '',
        set: false,
    };
  constructor(public navCtrl: NavController,public formBuilder: FormBuilder,public navParams: NavParams,
   public alertCtrl:AlertController, public loadingCtrl:LoadingController,private geolocation: Geolocation,
   http:Http,public modalCtrl: ModalController) {
  this.http=http;
  this.data={};
  this.data.response='';
   this.location='';


let emailRegex =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
let nameReg=/^([a-zA-Z ]){2,30}$/;
        this.salonregister = formBuilder.group({
         name: ['', Validators.compose([Validators.pattern(nameReg), Validators.required])],
         //   salonname: ['', Validators.compose([Validators.required])],
       useremail: ['', Validators.compose([ 
         Validators.pattern(emailRegex), Validators.required])],
       Bussiness_salon_email: ['', Validators.compose([ 
         Validators.pattern(emailRegex), Validators.required])],
          // gender: ['', Validators.compose([])],
     pass:['', Validators.compose( [Validators.maxLength(12)
        ,Validators.minLength(3),Validators.pattern(''), Validators.required])],
     cpass:['', Validators.compose( [Validators.maxLength(12)
        ,Validators.minLength(3),Validators.pattern(''), Validators.required])],
    });
  }

  ionViewDidLoad() {
  }



getLocation(){
   this.reset();
     let modal = this.modalCtrl.create(LocationSelectPage);
       modal.onDidDismiss(data => {
            console.log('page > modal dismissed > data > ', data);
            if(data){
                this.address.place = data.description;
                // get details
                this.geocodePlaceId(data.place_id);
            }                
        })
        modal.present();
}



 private reset() {
     
        this.address.place = '';
        this.address.set = false;

    }





geocodePlaceId(placeid) {
      var geocoder = new google.maps.Geocoder;
        geocoder.geocode({'placeId': placeid}, (results, status)=> {
        this.lat=results[0].geometry.location.lat();
        this.lng=results[0].geometry.location.lng();


        });


      }

       

 salon_reg(){


   



    if(this.flag==true || this.flag=='true'){
let loader=this.loadingCtrl.create({
  content:"please wait..."
});
loader.present();





var link='http://18.220.97.146/barber/WebServices/registerSalonOwner.json';
var data=JSON.stringify({
  fullname:this.full_name,
  email:this.email,
  password:this.password,
  confirmpassword:this.confirm_password,
  salonname:this.salon_name,
  usertype:1,
  location:this.address.place,
  address:this.address.place,
  latitude:this.lat,
  longitude:this.lng,
  Bussiness_salon_email:this.Bussiness_salon_email
});
this.http.post(link,data).subscribe(data=>{
  loader.dismiss();
  this.data.response=data;

                               if (JSON.parse(data._body).status == 1) {
                    let alert = this.alertCtrl.create({
                        title: 'Thank You!',
                        subTitle: 'Registration successful please Check your mail inbox  and verify your account',
                        buttons: ['OK']
                    });
                    alert.present(); 
                    this.navCtrl.push('Login');
                    
                }
                else  if (JSON.parse(data._body).status == 0){
                    let alert = this.alertCtrl.create({
                        title: 'Alert!',
                        subTitle: 'Enter Email address is already exist.',
                        buttons: ['OK']
                    });
                    alert.present();
                }
        
    error => {
    
                   }         
});
}
     else{
         let alert = this.alertCtrl.create({
                        title: 'Alert!',
                        subTitle: 'Please read and accept terms & conditions.',
                        buttons: ['OK']
                    });
                    alert.present();
        
      }
}
Salon_loginpage(){
this.navCtrl.push('Login');
}
terms(){
  this.navCtrl.push('TermsOfservicePage');
}
 }
