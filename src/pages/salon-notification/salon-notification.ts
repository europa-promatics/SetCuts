import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SalonViewuserProfilePage} from '../salon-viewuser-profile/salon-viewuser-profile';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import {Observable} from 'rxjs/Rx';
import { Http } from '@angular/http';
import {ServicesProvider} from '../../providers/services/services';

/**
 * Generated class for the SalonNotificationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-salon-notification',
  templateUrl: 'salon-notification.html',
  providers:[ServicesProvider]
})
export class SalonNotificationPage {
appointment;
   http;
   items;
    data;
full_data;
count
  constructor(public serviceProvider:ServicesProvider, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,public loadingCtrl: LoadingController,  http: Http) {
  	   this.http = http;
        this.data = {};
        this.data.response = '';
        // this.appointment=this.navParams.get('notfication_data');
        // alert(JSON.stringify(this.appointment));
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalonNotificationPage');
  }
salon_view_User_profile(customer_id){
  this.navCtrl.push('SalonViewuserProfilePage',{customer_id:customer_id});
}


  confirm(notif_id) {
    var a=1
       let loading = this.loadingCtrl.create({content: 'Please wait...'});
        Observable.fromPromise(loading.present())
        .flatMap(data => this.serviceProvider.notficationstatus(notif_id,a))
        .subscribe(data =>
   
        loading.dismiss().then(() =>{ 
          console.log("data"+data);
             this.ngOnInit();
      
        }),
        error =>
        loading.dismiss().then(() => {
          console.log("error"+error)
          this.ngOnInit();
        })
        );
    }
    decline(notif_id) {
    var a=0;
       let loading = this.loadingCtrl.create({content: 'Please wait...'});
        Observable.fromPromise(loading.present())
        .flatMap(data => this.serviceProvider.notficationstatus(notif_id,a))
        .subscribe(data =>
   
        loading.dismiss().then(() =>{ 
          console.log("data"+data);
             this.ngOnInit();
      
        }),
        error =>
        loading.dismiss().then(() => {
          console.log("error"+error)
          this.ngOnInit();
        })
        );
    }
    ngOnInit(){
      alert
      localStorage['flag']=0;
    this.serviceProvider.notification(localStorage['barberId'])
        .subscribe(data =>
       { 
          this.appointment=data.bookinginfo;
          this.count=data.totalcustomer.count;
          if(localStorage['user_type']==2 || localStorage['flag']==0){
   setTimeout(() => {
     this.ngOnInit();
    }, 10000);
}
        }),
        error =>
       {}
        
    }
}
