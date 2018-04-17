import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoadingController} from 'ionic-angular';
import {Observable} from 'rxjs/Rx';
import {ServicesProvider} from '../../providers/services/services';
import {
    DomSanitizer
} from "@angular/platform-browser";
/**
 * Generated class for the SalonAppointmentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-salon-appointment',
  templateUrl: 'salon-appointment.html',
})
export class SalonAppointmentPage {
appointment;
Appointments;
past
pastAppointment
upcomingAppointment
cancelAppointment
currentAppointment
rating=[]
  constructor(  private domSanitizer: DomSanitizer,public serviceProvider:ServicesProvider, public loadingCtrl:LoadingController, public navCtrl: NavController, public navParams: NavParams) {
  	this.appointment=[
  	{name:'User Name',address:'32 yarrow terrace, hawick TD9, 9LL UK',date:'15.00, 25-05-2017',image:'http://18.220.97.146/barber/app_link/img/team-member2.jpg'},
  	{name:'User Name',address:'32 yarrow terrace, hawick TD9, 9LL UK',date:'15.00, 25-05-2017',image:'http://18.220.97.146/barber/app_link/img/team-member2.jpg'},
  	{name:'User Name',address:'32 yarrow terrace, hawick TD9, 9LL UK',date:'15.00, 25-05-2017',image:'http://18.220.97.146/barber/app_link/img/team-member2.jpg'},
  	{name:'User Name',address:'32 yarrow terrace, hawick TD9, 9LL UK',date:'15.00, 25-05-2017',image:'http://18.220.97.146/barber/app_link/img/team-member2.jpg'},
  	{name:'User Name',address:'32 yarrow terrace, hawick TD9, 9LL UK',date:'15.00, 25-05-2017',image:'http://18.220.97.146/barber/app_link/img/team-member2.jpg'}
  	]
  	this.Appointments='UPCOMING';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalonAppointmentPage');
  }
   getSafeUrl(url: any) {
      var a=url;
      var b=a.includes('http');
      if(b==true || b=='true'){
          return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
        }  
        else{
           return this.domSanitizer.bypassSecurityTrustResourceUrl('http://18.220.97.146/barber/img/customerprofileimage/'+url);
        }
      
    
    }
ngOnInit(){
  var salon_id=localStorage['salon_id'];
   let loading = this.loadingCtrl.create({content: 'Please wait...'});
        Observable.fromPromise(loading.present())
        .flatMap(data => this.serviceProvider.salonAppointment(salon_id))
        .subscribe(data =>
          loading.dismiss().then(() =>{ 
             this.past=data;

       this.pastAppointment=this.past.pastinfo;
          this.upcomingAppointment=this.past.upcominginfo;
          this.cancelAppointment=this.past.cancelinfo;
          this.currentAppointment=this.past.currentinfo;
        console.log('salon_appointment'+JSON.stringify(data));

          
          }),
          error =>
          loading.dismiss().then(() => {})
          );
}
Complete_service(booking_id){
  var service=1;
    this.rating.push(booking_id);
    localStorage['rating_booking_id']=JSON.stringify(this.rating);
  ///////////Service = 1 for Complete service from salon' owner side or service =0 pending /////////////
 this.serviceProvider.Complete_service(booking_id,service)
         .subscribe(data  =>{
         console.log("data"+JSON.stringify(data)); 
         this.ngOnInit();
        }),

        error  => {}
}
cancel(booking_id){
 var service=2;
  ///////////Service = 2 for cancel service from salon' owner side or service =2 pending /////////////
 this.serviceProvider.Complete_service(booking_id,service)
         .subscribe(data  =>{
         console.log("data"+JSON.stringify(data)); 
          this.ngOnInit();
        }),

        error  => {} 
}

}
