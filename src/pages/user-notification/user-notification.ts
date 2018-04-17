import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController} from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import {Observable} from 'rxjs/Rx';
import {ServicesProvider} from '../../providers/services/services';
import {SalonBarberProfilePage} from '../salon-barber-profile/salon-barber-profile';
import {ReviewPurchasePage} from '../review-purchase/review-purchase';


/**
 * Generated class for the UserNotificationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-user-notification',
  templateUrl: 'user-notification.html',
})
export class UserNotificationPage {
    data;
    content
    paystate;
prouct_name;
transaction_id;
transaction_time;
transaction_status;
paydata
nonotfication
  constructor(public serviceProvider:ServicesProvider,public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController,   public alertCtrl: AlertController) {
        this.data = {};
        this.data.response = '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserNotificationPage');
  }
  
  salon_view_User_profile(barber_id,salon_id){

this.navCtrl.push('SalonBarberProfilePage',{barberid:barber_id,salon_id:salon_id})
  }
 ngOnInit(){
   localStorage['flag']=0;
  this.user_Notification_count();
    }
    user_Notification_count(){
      alert(localStorage['user_id']);
      var user_id=localStorage['user_id'];
      this.serviceProvider.userNotification(user_id)
         .subscribe(data  =>{ 
           if(localStorage['user_type']==0 && localStorage['flag']==0){
             setTimeout(() => {
     this.user_Notification_count();
    }, 10000);
           }
           
        if(data.status==0){
             console.log('no notification')
             this.nonotfication='true';
           }
           else{
              this.content=data.confirminfo;
              this.nonotfication='false';
           }
        }),
        error  => {}
    }

    cancel(booking_id){
      var user_id=localStorage['user_id'];
      this.ngOnInit();

      ////////////////paystatus 2 = cancel ///////////////////
      var paystatus=2;
         this.serviceProvider.PayStatus(booking_id,user_id,paystatus)
         .subscribe(data  =>{ 
console.log('data'+JSON.stringify(data));
        }),
        error  => {}
    }
    confirm(booking_id){
       var user_id=localStorage['user_id'];
      this.ngOnInit();

      ////////////////paystatus 2 = cancel ///////////////////
      var paystatus=1;
         this.serviceProvider.PayStatus(booking_id,user_id,paystatus)
         .subscribe(data  =>{ 
console.log('data'+JSON.stringify(data));
        }),
        error  => {}
    }
    Review(booking_id){
this.navCtrl.push('ReviewPurchasePage',{booking_id:booking_id});
    }
check_notification(index){;
var user_id=localStorage['user_id'];
         this.serviceProvider.BookingIndexStatusChanged(index,user_id)
         .subscribe(data  =>{ 
           this.user_Notification_count();
console.log('data'+JSON.stringify(data));
        }),
        error  => {}
}
}
