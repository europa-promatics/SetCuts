import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as $ from 'jquery';
import {SalonContactPage} from '../salon-contact/salon-contact';
import {SalonGalleryPage} from '../salon-gallery/salon-gallery';
import {SalonRegisterBarberPage} from '../salon-register-barber/salon-register-barber';
import {SalonAppointmentPage} from '../salon-appointment/salon-appointment';
import {SalonPaymentPage} from '../salon-payment/salon-payment';
import {SalonOwnerProfilePage} from '../salon-owner-profile/salon-owner-profile';
import {SalonNotificationPage} from '../salon-notification/salon-notification';
import {SalonFaqPage} from '../salon-faq/salon-faq';
import {FaqPage} from '../faq/faq';
import {AboutusUser} from '../aboutus-user/aboutus-user';
import {BarberSchedulePage} from '../barber-schedule/barber-schedule';
import { ModalController } from 'ionic-angular';
import {BarberListSetSchedulePage} from '../barber-list-set-schedule/barber-list-set-schedule';
import {SViewSchedulePage} from '../s-view-schedule/s-view-schedule';

/**
 * Generated class for the SalonOwnerHomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-salon-owner-home',
  templateUrl: 'salon-owner-home.html',
})
export class SalonOwnerHomePage {
	a;b;c;d;e;f;g;h;i;j;
	
	
  constructor(public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams) {
this.c='false';
this.b='false';
this.a='false';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalonOwnerHomePage');
  }
add(id){
	if(id==0){
	this.a='true';
	this.b='false';
	this.c='false';	
	this.d='false';
	this.e='false';	
	this.f='false';
	this.g='false';	
	this.h='false';
	this.i='false';	
	this.j='false';	
	this.navCtrl.push('SalonRegisterBarberPage');

	}
	else if(id==1){
		this.a='false';
	this.b='true';
	this.c='false';	
	this.d='false';
	this.e='false';	
	this.f='false';
	this.g='false';	
	this.h='false';
	this.i='false';	
	this.j='false';	
	this.navCtrl.push('SalonBarberProfilePage');
	}
	else if(id==2){
		this.a='false';
	this.b='false';
	this.c='true';	
	this.d='false';
	this.e='false';	
	this.f='false';
	this.g='false';	
	this.h='false';
	this.i='false';	
	this.j='false';	

	this.navCtrl.push(SViewSchedulePage);
	}
	else if(id==3){
		this.a='false';
	this.b='false';
	this.c='false';	
	this.d='true';
	this.e='false';	
	this.f='false';
	this.g='false';	
	this.h='false';
	this.i='false';	
		this.j='false';	
	}
	else if(id==4){
		this.a='false';
	this.b='false';
	this.c='false';	
	this.d='false';
	this.e='true';	
	this.f='false';
	this.g='false';	
	this.h='false';
	this.i='false';	
		this.j='false';	
	this.navCtrl.push('SalonGalleryPage');
	}
	else if(id==5){
		this.a='false';
	this.b='false';
	this.c='false';	
	this.d='false';
	this.e='false';	
	this.f='true';
	this.g='false';	
	this.h='false';
	this.i='false';	
		this.j='false';	
	this.navCtrl.push('SalonPaymentPage');
	}
	else if(id==6){
		this.a='false';
	this.b='false';
	this.c='false';	
	this.d='false';
	this.e='false';	
	this.f='false';
	this.g='true';	
	this.h='false';
	this.i='false';	
		this.j='false';	
	this.navCtrl.push('AboutusUser');
	}
	else if(id==7){
		this.a='false';
	this.b='false';
	this.c='false';	
	this.d='false';
	this.e='false';	
	this.f='false';
	this.g='false';	
	this.h='true';
	this.i='false';	
	this.navCtrl.push('FaqPage');
	}
	else if(id==8){
		this.a='false';
	this.b='false';
	this.c='false';	
	this.d='false';
	this.e='false';	
	this.f='false';
	this.g='false';	
	this.h='false';
	this.i='true';	
	this.j='false';	
	this.navCtrl.push('SalonContactPage');
	}
	else if(id==9){
		this.a='false';
	this.b='false';
	this.c='false';	
	this.d='false';
	this.e='false';	
	this.f='false';
	this.g='false';	
	this.h='false';
	this.i='false';	
	this.j='true';	
	 // let profileModal = this.modalCtrl.create('BarberSchedulePage');
  //  profileModal.present();
	  if (localStorage['barberId']) {
	 	alert(localStorage['barberId']);
	 	this.navCtrl.push('BarberSchedulePage',{barber_id:localStorage['barberId']});
	  }
	}
	

}
salon_notification(){
	this.navCtrl.push('SalonNotificationPage');
}
}

