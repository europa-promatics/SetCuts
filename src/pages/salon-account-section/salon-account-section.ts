import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SalonOwnerProfilePage} from '../salon-owner-profile/salon-owner-profile';
import {SalonServicePage} from '../salon-service/salon-service';

/**
 * Generated class for the SalonAccountSectionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-salon-account-section',
  templateUrl: 'salon-account-section.html',
})
export class SalonAccountSectionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalonAccountSectionPage');
  }
  salon_detail(){
  	this.navCtrl.push(SalonOwnerProfilePage);
  }
My_services(){
  this.navCtrl.push(SalonServicePage);
}
}
