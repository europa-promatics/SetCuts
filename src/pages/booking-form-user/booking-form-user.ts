import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ReviewPurchasePage} from '../review-purchase/review-purchase';
import { AlertController} from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';


/**
 * Generated class for the BookingFormUserPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-booking-form-user',
  templateUrl: 'booking-form-user.html',
})
export class BookingFormUserPage {
barber_id;
service_id;
time;
date;
style;
 http;
    data;
    contact;
    address;
    pincode;
  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController,  http: Http, public alertCtrl: AlertController) {
  	this.barber_id=this.navParams.get('barber_id');
  	this.service_id=this.navParams.get('service_id');
    // alert('serviceid'+this.service_id);
  	this.time=this.navParams.get('time');
  	this.date=this.navParams.get('date');
         this.http = http;
        this.data = {};
        this.data.response = '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingFormUserPage');
  }
PickbookingDate(){
  let loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
       loader.present();
    var link='http://18.220.97.146/barber/WebServices/barberBookingForm.json';
    var data=JSON.stringify({
  
      barber_id:this.barber_id,
      service_id:this.service_id,
      date: this.date, 
      time:this.time,
      customer_id:localStorage['user_id'],
      pincode: this.pincode,
      address:this.address,
      contactnumber:this.contact,

    });


    this.http.post(link,data)
     .subscribe(data=>{
 loader.dismiss();
       this.data = data;
      if (JSON.parse(data._body).status == 1) {
   let alert = this.alertCtrl.create({
                        title: 'Thank you booking success!',
                        subTitle: 'we will notify you after accept barber request.',
                        buttons: ['OK']
                    });

                    alert.present();
            // this.navCtrl.push('ReviewPurchasePage',{time:this.time,date:this.date});             
}
       else{
         let alert = this.alertCtrl.create({
                        title: 'Alert!',
                        subTitle: 'Something went wrong',
                        buttons: ['OK']
                    });
                    alert.present();
       }
     });

}
}
