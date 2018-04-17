import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Observable} from 'rxjs/Rx';
import {ServicesProvider} from '../../providers/services/services';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {
    DomSanitizer
} from "@angular/platform-browser";
import {UserProfile} from '../user-profile/user-profile';
import { ModalController } from 'ionic-angular';
/**
 * Generated class for the BarberAppointmentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-barber-appointment',
  templateUrl: 'barber-appointment.html',
})
export class BarberAppointmentPage {
appointment;
Appointments;
past
pastAppointment
upcomingAppointment
cancelAppointment
role_right
currentAppontment
  constructor(public modalCtrl: ModalController, private domSanitizer: DomSanitizer, private alertCtrl: AlertController,public serviceProvider:ServicesProvider,public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams) {
  this.Appointments='UPCOMING';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarberAppointmentPage');
  }
    getSafeUrl(url: any) {
      var a=url;
      var b=a.includes('http');
      if(b==true || b=='true'){
          return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
        }  
        else{
           return this.domSanitizer.bypassSecurityTrustResourceUrl('http://18.220.97.146/barber/img/customerprofileimage/'+url);
        }
      
    
    }
  view_customer_profile(customer_id,lat,long){
    localStorage['customer_latitude']=lat;
     localStorage['customer_longitude']=long;
    //  let modal = this.modalCtrl.create('UserProfile',{customer_id:customer_id});
    // modal.present();

        this.navCtrl.push('UserProfile',{customer_id:customer_id});
  }
ngOnInit(){
	var barber_id=localStorage['barber_id'];
	let loading=this.loadingCtrl.create({content:'please wait...'});
	Observable.fromPromise(loading.present())
	.flatMap(data => this.serviceProvider.barber_appointment(barber_id))
	.subscribe(data => loading.dismiss().then(() =>{
		this.past=data;
		this.pastAppointment=this.past.pastinfo;
		this.upcomingAppointment=this.past.upcominginfo;
		this.cancelAppointment=this.past.cancelinfo;
    this.currentAppontment=this.past.currentinfo;
    this.role_right=localStorage['role_rights'];
    

		 // console.log('past'+JSON.stringify(this.pastAppointment));
  }),
        error =>
        loading.dismiss().then(() => {})
        );
             // setInterval(()=>{
             //   this.getnotfication()
             // }, 50000);
    }
}
