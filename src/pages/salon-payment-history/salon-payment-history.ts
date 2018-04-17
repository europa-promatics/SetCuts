import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {ServicesProvider} from '../../providers/services/services';
/**
 * Generated class for the SalonPaymentHistoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-salon-payment-history',
  templateUrl: 'salon-payment-history.html',
})
export class SalonPaymentHistoryPage {
history
a
  constructor(public serviceProvider:ServicesProvider,public navCtrl: NavController, public navParams: NavParams,  public alertCtrl: AlertController,public loadingCtrl: LoadingController,  http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalonPaymentHistoryPage');
  }
ngOnInit(){
   var salon_id=localStorage['salon_id'];
        this.serviceProvider.salon_payment_history(salon_id)
         .subscribe(data  =>{ 
         	this.a=data;
         	this.history=this.a.customer_payment;
console.log(JSON.stringify(this.history));
        }),
        error  => {}

    }
    total(value1,value2){
    	return parseInt(value1)+parseInt(value2);
    }
}
