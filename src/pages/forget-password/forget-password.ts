import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController} from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import {Login} from '../login/login';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
/**
 * Generated class for the ForgetPassword page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-forget-password',
  templateUrl: 'forget-password.html',
})
export class ForgetPassword {
  http;
    data;
         loginform:FormGroup;
email;
  constructor( public formBuilder: FormBuilder,public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController, public loadingCtrl:LoadingController,http:Http) {
   this.http=http;
  this.data={};
  this.data.response='';
      let emailRegex =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

          this.loginform = formBuilder.group({
        
       emailaddress: ['', Validators.compose([Validators.maxLength(50), 
         Validators.pattern(emailRegex), Validators.required])],

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgetPassword');
  }
send(){
	let loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
       loader.present();
        var link = 'http://18.220.97.146/barber/WebServices/forgotpassword.json';

 var data = JSON.stringify({
        email:this.email, 
        
        });
        this.http.post(link, data)
            .subscribe(data => {
                loader.dismiss();
                this.data.response = data;
                console.log(JSON.parse(data._body).status); 
                                if (JSON.parse(data._body).status == 1) {
                    let alert = this.alertCtrl.create({
                        title: 'Alert!',
                        subTitle: 'Check your mail inbox and follow the procedure to reset your passowrd ',
                        buttons: ['OK']
                    });
                    alert.present();
                   
                    
                }
                else  if (JSON.parse(data._body).status == 0){
                    let alert = this.alertCtrl.create({
                        title: 'Alert!',
                        subTitle: 'Invalid email address.',
                        buttons: ['OK']
                    });
                    alert.present();
                }
        
           error => {
    
                   }            

});
}
Login(){
  this.navCtrl.push('Login');
}
}
