import { Component } from '@angular/core';
import { IonicPage,NavController, Platform, ViewController,NavParams } from 'ionic-angular';


/**
 * Generated class for the BarberServicePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-barber-service',
  templateUrl: 'barber-service.html',
})
export class BarberServicePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarberServicePage');
  }
  save(){
        this.viewCtrl.dismiss();
    }
}
