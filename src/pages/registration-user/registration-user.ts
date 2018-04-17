import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Login} from '../login/login';
import {TermsOfservicePage} from '../terms-ofservice/terms-ofservice';
import { AlertController} from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  ModalController } from 'ionic-angular';
import { LocationSelectPage } from '../location-select/location-select';
import { Geolocation } from '@ionic-native/geolocation';
@IonicPage()
@Component({
  selector: 'page-registration-user',
  templateUrl: 'registration-user.html',
})
export class RegistrationUser {
    http;
    data;
    full_name;
email;
gender;
password;
confirm_password;
flag;
name;
useremail;
address;
lat;
lng;
contact;

custregister:FormGroup;
  constructor(private geolocation: Geolocation,public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder,
   public loadingCtrl: LoadingController,  http: Http, public alertCtrl: AlertController) {
   this.http = http;
        this.data = {};
        this.data.response = '';

 let emailRegex =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        this.custregister = formBuilder.group({
          

           name: ['', Validators.compose([Validators.maxLength(30), Validators.required])],


       useremail: ['', Validators.compose([
         Validators.pattern(emailRegex), Validators.required])],


          // gender: ['', Validators.compose([])],
          
        //    address:['', Validators.compose( [Validators.maxLength(200)
        // ,Validators.minLength(1),Validators.pattern(''), Validators.required])],

     pass:['', Validators.compose( [Validators.maxLength(12)
        ,Validators.minLength(3),Validators.pattern(''), Validators.required])],

      contact:['', Validators.compose( [Validators.maxLength(10)
        ,Validators.minLength(1),Validators.pattern(''), Validators.required])],

     cpass:['', Validators.compose( [Validators.maxLength(12)
        ,Validators.minLength(3),Validators.pattern(''), Validators.required])],
      


    });


  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationUser');
  }
  loginpage(){
this.navCtrl.push('Login');
  }
  reg(){
     if(this.custregister.controls["pass"].value!=this.custregister.controls["cpass"].value ) {
      let alert = this.alertCtrl.create({
                        title: 'Alert!',
                        subTitle: 'Password or confirm password Must be Same.',
                        buttons: ['OK']
                    });
                    alert.present();
     }
     else {


  	 // this.navCtrl.push(Login);
     if(this.flag==true || this.flag=='true' ){

let loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
       loader.present();
        var link = 'http://18.220.97.146/barber/WebServices/register.json';

 var data = JSON.stringify({
    fullname:this.full_name,
        email:this.email, 
         password: this.password,
           confirmpassword:this.confirm_password,
           usertype:0,
           phonenumber:this.contact,
        
                
        });
        this.http.post(link, data)
            .subscribe(data => {
                loader.dismiss();
                this.data.response = data;
                console.log(JSON.parse(data._body).status); 
                                if (JSON.parse(data._body).status == 1) {
                    let alert = this.alertCtrl.create({
                        title: 'Thank You!',
                        subTitle: 'Registration successful please Check your mail inbox  and verify your account.',
                        buttons: ['OK']
                    });
                    alert.present();
                    this.navCtrl.push('Login');
                    
                }
                else  if (JSON.parse(data._body).message == 'Entered email address or username is already registered with us.'){
                    let alert = this.alertCtrl.create({
                        title: 'Alert!',
                        subTitle: 'Entered email address  is already registered with us.',
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
}
terms(){
  this.navCtrl.push('TermsOfservicePage');
}
}
