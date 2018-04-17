import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { AlertController} from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import {Observable} from 'rxjs/Rx';
import {ServicesProvider} from '../../providers/services/services';
import {SalonAssignBarberToUserPage} from '../salon-assign-barber-to-user/salon-assign-barber-to-user';
/**
 * Generated class for the SalonViewuserProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-salon-viewuser-profile',
  templateUrl: 'salon-viewuser-profile.html',
})
export class SalonViewuserProfilePage {
customer_id;
name;
viewprofile;
username
phonenumber
email
fb_img
address
image;

  constructor(public alertCtrl: AlertController,public loadingCtrl: LoadingController,public serviceProvider:ServicesProvider,public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  this.customer_id=this.navParams.get('customer_id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalonViewuserProfilePage');
  }
 assignbarber() {
    let modal = this.modalCtrl.create('SalonAssignBarberToUserPage');
    modal.present();
  }
ngOnInit(){
   let loading = this.loadingCtrl.create({content: 'Please wait...'});
        Observable.fromPromise(loading.present())
        .flatMap(data => this.serviceProvider.salon_view_user_profile(this.customer_id))
        .subscribe(data =>
          loading.dismiss().then(() =>{ 
          console.log('salon_view_data'+JSON.stringify(data));
          this.viewprofile=data;
          this.name=this.viewprofile.data.fullname;
          this.username=this.viewprofile.data.fullname;
                 this.phonenumber=this.viewprofile.data.phonenumber;
                  this.email=this.viewprofile.data.email;
                   this.fb_img=this.viewprofile.data.image;
                      this.address=this.viewprofile.data.address;
                   if(this.fb_img==null || this.fb_img=='null'){
                     this.image='http://18.220.97.146/barber/app_link/img/team-member2.jpg';
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
                
          console.log(this.name);
          }),
          error =>
          loading.dismiss().then(() => {})
          );
}

}
