import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RegistrationUser} from '../registration-user/registration-user';
import {SalonRegisterationPage} from '../salon-registeration/salon-registeration';


@IonicPage()
@Component({
  selector: 'page-creataccount',
  templateUrl: 'creataccount.html',
})
export class Creataccount {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Creataccount');
  }
  customer(){
  	this.navCtrl.push('RegistrationUser');
  }
salonowner(){
  this.navCtrl.push('SalonRegisterationPage');
}
}
