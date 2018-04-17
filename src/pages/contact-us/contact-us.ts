import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AlertController} from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {SalonHome} from '../salon-home/salon-home';
/**
 * Generated class for the ContactUsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-contact-us',
  templateUrl: 'contact-us.html',
})
export class ContactUsPage {
name;
email;
countrycode;
number;
title;
message;
http;
data;
usertype;
contactform:FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,http:Http,
  	public alertCtrl: AlertController,public formBuilder: FormBuilder,
  	public loadingCtrl: LoadingController) {
  	this.http=http;
    this.data={}
    this.usertype=localStorage['user_type']


    
      let emailRegex =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      // var name = /^[a-zA-Z ]{2,30}$/;
    
        this.contactform = formBuilder.group({
        
       name: ['', Validators.compose([Validators.required])],

        email: ['', Validators.compose([Validators.maxLength(50), 
         Validators.pattern(emailRegex), Validators.required])],

         countrycode: ['', Validators.compose([Validators.required])],

          number: ['', Validators.compose([Validators.required])],


           title: ['', Validators.compose([Validators.required])],

     message:['', Validators.compose([Validators.required])],
      


    });
    
  }
ngOnInit(){
  console.log('contact us ');
}
  usercontact(){

  	let loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
       loader.present();
  	  var link='http://18.220.97.146/barber/WebServices/contactUs.json';
  	 var data=JSON.stringify({


    	usertype:this.usertype,
    	name:this.name,
    	email:this.email,
    	countrycode:this.countrycode,
    	contactnumber:this.number,
    	messagetitle:this.title,
    	yourmessage:this.message,
  
    	       
    });


    this.http.post(link,data)
.map(res => res.json())
     .subscribe(data=>{
     	loader.dismiss();

        this.data= data;
         console.log("response"+JSON.stringify(this.data.message));
       if(this.data.message=='field is required'){

        let alert = this.alertCtrl.create({
        title: 'Alert',
        subTitle: 'Please fill all fields',
        buttons: ['OK']
         });
          alert.present();
       
       }
       else if(this.data.status==1){
      //              this.name='';
      // this.email='';
      // this.countrycode='';
      // this.number='';
      // this.title='';
      // this.message='';
       	 let alert = this.alertCtrl.create({
                    title: 'Thank You!',
                    subTitle: 'Your message has been sent, We will contact you shortly!',
                    buttons: ['OK']
                    });
                    alert.present();   
                 this.navCtrl.setRoot(SalonHome);
   
       }

     

     });
  }

  

}
