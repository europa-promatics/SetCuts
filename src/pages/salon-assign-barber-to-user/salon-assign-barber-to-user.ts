import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController} from 'ionic-angular';
import { ModalController } from 'ionic-angular';

/**
 * Generated class for the SalonAssignBarberToUserPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-salon-assign-barber-to-user',
  templateUrl: 'salon-assign-barber-to-user.html',
})
export class SalonAssignBarberToUserPage {
appointment;
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController, public viewCtrl: ViewController) {
   	this.appointment=[
  	{name:'Barber name',Service:'Hair style spa, massage',image:'http://18.220.97.146/barber/app_link/img/team-member2.jpg'},
  	{name:'Barber name',Service:'Hair style spa, massage',image:'http://18.220.97.146/barber/app_link/img/team-member2.jpg'},
  	{name:'Barber name',Service:'Hair style spa, massage',image:'http://18.220.97.146/barber/app_link/img/team-member2.jpg'},
  	{name:'Barber name',Service:'Hair style spa, massage',image:'http://18.220.97.146/barber/app_link/img/team-member2.jpg'},
  	{name:'Barber name',Service:'Hair style spa, massage',image:'http://18.220.97.146/barber/app_link/img/team-member2.jpg'},
  	{name:'Barber name',Service:'Hair style spa, massage',image:'http://18.220.97.146/barber/app_link/img/team-member2.jpg'},
  	{name:'Barber name',Service:'Hair style spa, massage',image:'http://18.220.97.146/barber/app_link/img/team-member2.jpg'}
  	]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalonAssignBarberToUserPage');
  }
dismiss(){
 this.viewCtrl.dismiss();
}
}
