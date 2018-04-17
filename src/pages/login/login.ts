import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ForgetPassword} from '../forget-password/forget-password';
import {Creataccount} from '../creataccount/creataccount';
import {Findsalonmap} from '../findsalonmap/findsalonmap';
import { AlertController} from 'ionic-angular';
import { LoadingController, MenuController } from 'ionic-angular';
import { Http } from '@angular/http';
import {SalonOwnerHomePage} from '../salon-owner-home/salon-owner-home';
import { TermsOfservicePage} from '../terms-ofservice/terms-ofservice';
import { Events } from 'ionic-angular';
import {SalonHome} from '../salon-home/salon-home';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {BarberHomePage} from '../barber-home/barber-home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
    http;
    data;
    email;
    password;
    flag;
    nav;menu;
    remembers;
    salon_img;
    barber_img;
    user_img;
    loginform:FormGroup;

    constructor( public formBuilder: FormBuilder,public events: Events, public menuCtrl: MenuController, public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController,  http: Http, public alertCtrl: AlertController) {
        this.http = http;
        this.data = {};
        this.data.response = '';
        this.menu = menuCtrl;
        this.menu.enable(true, 'myMenu');
        this.email=localStorage['email'];
        this.password=localStorage['password'];
        let emailRegex =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        this.loginform = formBuilder.group({
            emailaddress: ['', Validators.compose([Validators.maxLength(50), 
            Validators.pattern(emailRegex), Validators.required])],

            pass:['', Validators.compose( [Validators.maxLength(12)
            ,Validators.minLength(3),Validators.pattern(''), Validators.required])],
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad Login');
    }

    forgot(){
        this.navCtrl.push('ForgetPassword');
    }

    signup(){
        this.navCtrl.push('Creataccount');
    }

    login(){
        if(this.flag==true || this.flag=='true'){
            let loader = this.loadingCtrl.create({
                content: "Please wait..."
            });
            loader.present();
            var link = 'http://18.220.97.146/barber/WebServices/login.json';
            var data = JSON.stringify({
                email:this.email, 
                password: this.password,     
            });
            this.http.post(link, data).subscribe(data => {
                loader.dismiss();
                this.data.response = data;
                if (JSON.parse(data._body).status == 1){
                    let alert = this.alertCtrl.create({
                        title: 'Thank You!',
                        subTitle: 'Login successful.',
                        buttons: ['OK']
                    });
                    alert.present();
                    localStorage['user_type']=JSON.parse(data._body).data.usertype;
                    localStorage['full_name']=JSON.parse(data._body).data.fullname; 
                    localStorage['auth']='true';
                    this.user_img=JSON.parse(data._body).data.image;
                    this.salon_img=JSON.parse(data._body).data.profile_image;
                    this.barber_img=JSON.parse(data._body).data.barber_image;
                    // localStorage['salon_id']=JSON.parse(data._body).data.id;
                    if(this.remembers=='true' ||this.remembers==true){
                        console.log('remembers');
                        localStorage['email']=JSON.parse(data._body).data.email;
                        localStorage['password']=this.password;
                    }else{
                        console.log('not remembers'); 
                    }

                    console.log(localStorage['user_type']); 

                    if(localStorage['user_type']==0 || localStorage['user_type']=='0'){
                        this.navCtrl.setRoot(SalonHome);
                        localStorage['authenicate']='user';
                        console.log(JSON.parse(data._body).data.id);
                        localStorage['user_id']=JSON.parse(data._body).data.id;
                        if(this.user_img==null || this.user_img=='null'){
                            localStorage['img']='http://18.220.97.146/barber/app_link/img/team-member2.jpg';
                        }else{
                            var n=this.user_img.includes("http");
                            if(n==true || n=='true'){
                                localStorage['img']=this.user_img;
                            }
                            else{
                                localStorage['img']='http://18.220.97.146/barber/img/customerprofileimage/'+this.user_img;
                            }
                        }
                        this.events.publish('user:created', localStorage['user_type'], localStorage['full_name'], localStorage['auth'], localStorage['img'])
                    }
                    else if(localStorage['user_type']==1){
                        localStorage['authenicate']='salon';
                        localStorage['salon_id']=JSON.parse(data._body).data.id;
                        localStorage['barberId']=JSON.parse(data._body).data.barber_id;
                        if(this.salon_img==null || this.salon_img=='null'){
                            localStorage['img']='http://18.220.97.146/barber/app_link/img/team-member2.jpg';
                        }else{
                            var n=this.salon_img.includes("http");
                            if(n==true || n=='true'){
                                localStorage['img']=this.salon_img;
                            }
                            else{
                                localStorage['img']='http://18.220.97.146/barber/img/salonprofileimage/'+this.salon_img;
                            }
                        }
                        this.events.publish('user:created', localStorage['user_type'], localStorage['full_name'], localStorage['auth'], localStorage['img'])
                        console.log(localStorage['user_type']); 
                        this.navCtrl.setRoot(SalonOwnerHomePage);
                    }
                    else if(localStorage['user_type']==2){
                        localStorage['authenicate']='barber';
                        localStorage['barber_id']=JSON.parse(data._body).data.id;
                        localStorage['salon_under_barber_id']=JSON.parse(data._body).data.salonid;
                        localStorage['salon_id']=JSON.parse(data._body).data.salonid;
                        localStorage['role_rights']=JSON.parse(data._body).data.roleright;
                        if(this.barber_img==null || this.barber_img=='null'){
                            localStorage['img']='http://18.220.97.146/barber/app_link/img/team-member2.jpg';
                        }
                        else{
                            localStorage['img']='http://18.220.97.146/barber/img/barberimage/'+this.barber_img;
                        }
                        this.events.publish('user:created', localStorage['user_type'], localStorage['full_name'], localStorage['auth'], localStorage['img'])
                        console.log(localStorage['user_type']); 
                        this.navCtrl.setRoot(BarberHomePage);
                    }
                }
                else if (JSON.parse(data._body).message == "Invalid Email or password"){
                    localStorage['auth']='false';
                    let alert = this.alertCtrl.create({
                    title: 'Alert!',
                    subTitle: 'Invalid Email or password.',
                    buttons: ['OK']
                    });
                    alert.present();
                }
                else if (JSON.parse(data._body).message == "Please first verify your account then login"){
                    localStorage['auth']='false';
                    let alert = this.alertCtrl.create({
                    title: 'Alert!',
                    subTitle: 'Please first verify your account then login.',
                    buttons: ['OK']
                    });
                    alert.present();
                }
                else if (JSON.parse(data._body).message == "your account is not verified by admin side"){
                    localStorage['auth']='false';
                    let alert = this.alertCtrl.create({
                    title: 'Alert!',
                    subTitle: 'Your account is not verified by owner.',
                    buttons: ['OK']
                    });
                    alert.present();
                }
                else if (JSON.parse(data._body).message == "your account is deactivated by admin side"){
                    localStorage['auth']='false';
                    let alert = this.alertCtrl.create({
                    title: 'Alert!',
                    subTitle: 'Your account is not activated.',
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
    
    terms(){
        this.navCtrl.push('TermsOfservicePage');
    }
}
