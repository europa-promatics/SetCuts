import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController} from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {ServicesProvider} from '../../providers/services/services';
/**
 * Generated class for the SalonEarningsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-salon-earnings',
  templateUrl: 'salon-earnings.html',
})
export class SalonEarningsPage {
offlne;
earning
totalamount
paid
unpaid
  constructor(public navCtrl: NavController, public navParams: NavParams,public serviceProvider:ServicesProvider,public loadingCtrl: LoadingController,  http: Http, public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalonEarningsPage');
  }
ngOnInit(){
	var salon_id=localStorage['salon_id'];
	let loading = this.loadingCtrl.create({
        content: 'Please wait...'
    });
    Observable.fromPromise(loading.present())
        .flatMap(data => this.serviceProvider.Myearning(salon_id))
        .subscribe(data =>
            loading.dismiss().then(() => {  
          this.offlne=data;
          	this.earning=this.offlne.data;
			this.totalamount=this.earning.totalamount;
			this.paid=this.earning.paid;
			this.unpaid=this.earning.unpaid;
      
            }),
            error =>
            loading.dismiss().then(() => {
            })
        );
}
}
