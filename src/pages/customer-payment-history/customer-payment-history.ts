import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {ServicesProvider} from '../../providers/services/services';
/**
 * Generated class for the CustomerPaymentHistoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-customer-payment-history',
  templateUrl: 'customer-payment-history.html',
})
export class CustomerPaymentHistoryPage {
history
a
  constructor(public serviceProvider:ServicesProvider,public navCtrl: NavController, public navParams: NavParams,  public alertCtrl: AlertController,public loadingCtrl: LoadingController,  http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerPaymentHistoryPage');
  }
ngOnInit(){
   var customer_id=localStorage['user_id'];
        this.serviceProvider.Customer_payment_history(customer_id)
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
