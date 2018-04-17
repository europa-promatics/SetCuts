import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Observable} from 'rxjs/Rx';
import {ServicesProvider} from '../../providers/services/services';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {
    DomSanitizer
} from "@angular/platform-browser";

/**
 * Generated class for the UserAppointmentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-user-appointment',
  templateUrl: 'user-appointment.html',
})
export class UserAppointmentPage {
appointment;
Appointments;
past
pastAppointment
upcomingAppointment
cancelAppointment
currentAppointment
  constructor(  private domSanitizer: DomSanitizer,private alertCtrl: AlertController,public serviceProvider:ServicesProvider,public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams) {

  	this.Appointments='UPCOMING';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserAppointmentPage');
  }
      getSafeUrl(url: any) {
      var a=url;
      var b=a.includes('http');
      if(b==true || b=='true'){
          return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
        }  
        else{
           return this.domSanitizer.bypassSecurityTrustResourceUrl('http://18.220.97.146/barber/img/barberimage/'+url);
        }
      
    
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
    // var date_today=new Date();
    // var formated_date = formatDate(date_today);//Calling formatDate Function

    // var input_date="2015/04/22 11:12 AM";    

    // var currentDateTime = new Date(Date.parse(formated_date));
    // var inputDateTime   = new Date(Date.parse(input_date));

    // if (inputDateTime <= currentDateTime){

    //     //Do something...

    // }

    
// function compare(dateTimeA, dateTimeB) {
//     var momentA = moment(dateTimeA,"DD/MM/YYYY");
//     var momentB = moment(dateTimeB,"DD/MM/YYYY");
//     if (momentA > momentB) return 1;
//     else if (momentA < momentB) return -1;
//     else return 0;
// }

// alert(compare("11/07/2015", "10/07/2015"));
    ngOnInit(){
var user_id=localStorage['user_id'];
      let loading = this.loadingCtrl.create({content: 'Please wait...'});
        Observable.fromPromise(loading.present())
        .flatMap(data => this.serviceProvider.User_appointment(user_id))
        .subscribe(data =>
        loading.dismiss().then(() =>{ 
          this.past=data;
     
          this.pastAppointment=this.past.pastinfo;
          this.upcomingAppointment=this.past.upcominginfo;
          this.cancelAppointment=this.past.cancelinfo;
          this.currentAppointment=this.past.currentinfo;
          console.log('past'+JSON.stringify(this.upcomingAppointment));
        }),
        error =>
        loading.dismiss().then(() => {})
        );
             // setInterval(()=>{
             //   this.getnotfication()
             // }, 50000);
    }
}
