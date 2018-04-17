import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserProfile} from '../user-profile/user-profile';
import {PayemntUserPage} from '../payemnt-user/payemnt-user';
import {ServicesProvider} from '../../providers/services/services';

@IonicPage()
@Component({
  selector: 'page-account-section',
  templateUrl: 'account-section.html',
})
export class AccountSectionPage {
a;
  constructor(public serviceProvider:ServicesProvider, public navCtrl: NavController, public navParams: NavParams) {
  	// this.a=this.serviceProvider.loginmodel;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountSectionPage');
  }
user_detail(){
	this.navCtrl.push('UserProfile');
}
user_payment(){
	this.navCtrl.push('PayemntUserPage');
}
}
