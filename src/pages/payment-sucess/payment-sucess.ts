import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController} from 'ionic-angular';
import {Observable} from 'rxjs/Rx';
import {ServicesProvider} from '../../providers/services/services';
import { LoadingController } from 'ionic-angular';
/**
 * Generated class for the PaymentSucessPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-payment-sucess',
  templateUrl: 'payment-sucess.html',
})
export class PaymentSucessPage {
user_id;
booking_id;
successPaymentStatus
pay_data
service
transaction_id
order_id
status
total
pay_date
pay_time
  constructor( public viewCtrl: ViewController,public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams,public serviceProvider:ServicesProvider) {
  	this.user_id=this.navParams.get('user_id');
  	this.booking_id=this.navParams.get('booking_id');
  }

dismiss(){
  this.viewCtrl.dismiss();
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentSucessPage');
  }
    ngOnInit(){
var booking_id=this.booking_id;
 let loading = this.loadingCtrl.create({content: 'Please wait...'});
        Observable.fromPromise(loading.present())
        .flatMap(data => this.serviceProvider.SuccessPaymentStatus(booking_id))
        .subscribe(data =>
          loading.dismiss().then(() =>{ 
console.log('data'+JSON.stringify(data));
this.pay_data=data;
this.successPaymentStatus=this.pay_data.successPaymentStatus;
this.service=this.successPaymentStatus.service;
this.transaction_id=this.successPaymentStatus.payment_id;
this.order_id=this.successPaymentStatus.order_id;
this.status="approved";
this.pay_date=this.successPaymentStatus.pay_date;
this.pay_time=this.successPaymentStatus.pay_time;
this.total=this.successPaymentStatus.total_payment;
          }),
          error =>
          loading.dismiss().then(() => {})
          );
        
    }
}
