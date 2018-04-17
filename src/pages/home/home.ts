import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Creataccount} from '../creataccount/creataccount';
import {Login} from '../login/login';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import {ServicesProvider} from '../../providers/services/services';
import {SalonHome} from '../salon-home/salon-home';
import {SalonOwnerHomePage} from '../salon-owner-home/salon-owner-home';
import { Events } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { AlertController} from 'ionic-angular';
import { MenuController } from 'ionic-angular/index';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  item;
  items;
     FB_APP_ID: number = 350227812117177;
  constructor( private menu: MenuController,private fb:Facebook,public alertCtrl: AlertController, public actionSheetCtrl: ActionSheetController,public events: Events, public serviceProvider:ServicesProvider,public navCtrl: NavController) {
// this.fb.browserInit(this.FB_APP_ID, "v2.8");
  }
  ionViewDidLoad() {
    this.menu.swipeEnable(false, 'left');
    this.menu.enable(false, 'left');

  }
creataccount(){
	this.navCtrl.push('Creataccount');
}
login(){
	this.navCtrl.push('Login');
}
presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Login as a',
      buttons: [
        {
          text: 'CUSTOMER',
          role: 'destructive',
          handler: () => {
            var user_type=0;
             this.fb_login(user_type)
            console.log('Destructive clicked');
          }
        },{
          text: 'SALON OWNER',
          handler: () => {
             var user_type=1;
            this.fb_login(user_type)

            console.log('Archive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
  
  fb_login(user_type){
    let permissions = new Array();
    permissions = ["public_profile","email"];
    this.fb.login(permissions)
    .then((response)=>{
      let userId = response.authResponse.userID;
      let params = new Array();
     this.fb.api("/me?fields=name,gender,email,id", params)
      .then((user)=>{
      	
        user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
        this.facebook(user.email,user.name,userId,user_type, user.picture)
        })
    },(error)=>{
       let alert = this.alertCtrl.create({
                        title: 'Alert!',
                        subTitle: 'Something went wrong.',
                        buttons: ['OK']
                    });
                    alert.present();
    })
  }

  facebook(email,username,fbid,user_type,img){
        this.serviceProvider.Facebook(email,username,fbid,user_type,img)
         .subscribe(data  =>{ 

           this.item=data;
           console.log(JSON.stringify(this.item));
           this.items=this.item.data;
           if(user_type==this.items.usertype){
             let alert = this.alertCtrl.create({
                        title: 'Thank You!',
                        subTitle: 'Login successful.',
                        buttons: ['OK']
                    });
                    alert.present();
             localStorage['user_type']=this.items.usertype;
                    localStorage['full_name']=this.items.fullname;
                    localStorage['salon_id']=this.items.id;
                     localStorage['barber_id']=this.items.id;
                    localStorage['user_id']=this.items.id;
                    localStorage['auth']='true';
                    localStorage['img']=this.items.image;
                    this.events.publish('user:created', localStorage['user_type'], localStorage['full_name'], localStorage['auth'], localStorage['img'])
           if(this.items.usertype==0){
                  localStorage['authenicate']='user';
             this.navCtrl.setRoot(SalonHome);
            }
            else if(this.items.usertype==1){
               localStorage['authenicate']='salon';
              this.navCtrl.setRoot(SalonOwnerHomePage);
            }
           }
           else{
             if(this.items.usertype==0){
                  let alert = this.alertCtrl.create({
                        title: 'Alert!',
                        subTitle: 'Email id already exist as a customer',
                        buttons: ['OK']
                    });
                    alert.present();
            }
             else if(this.items.usertype==1){
                let alert = this.alertCtrl.create({
                        title: 'Alert!',
                        subTitle: 'Email id already exist as a salon owner',
                        buttons: ['OK']
                    });
                    alert.present();
            }
           
           }
        }),
        error  => {
         // let alert = this.alertCtrl.create({
         //                title: 'Alert!',
         //                subTitle: 'Something went wrong',
         //                buttons: ['OK']
         //            });
         //            alert.present();
        }
  }


  react_service(){
  localStorage['array']=['a','b','c'];
  alert()
       var user_id=localStorage['user_id'];
      this.serviceProvider.react_service()
         .subscribe(data  =>{ 
      
        console.log("data"+JSON.stringify(data));
        }),
        error  => {}
  }
 
  }


 // constructor(public menu: MenuController) {
 //    this.menu1Active();
 //  }

 //  menu1Active() {
 //    this.activeMenu = 'menu1';
 //    this.menu.enable(true, 'menu1');
 //    this.menu.enable(false, 'menu2');
 //  }

 //  menu2Active() {
 //    this.activeMenu = 'menu2';
 //    this.menu.enable(false, 'menu1');
 //    this.menu.enable(true, 'menu2');
 //  }