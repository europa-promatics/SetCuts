import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ServicesProvider} from '../../providers/services/services';
import {
    DomSanitizer
} from "@angular/platform-browser";
/**
 * Generated class for the SalonPaymentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-salon-payment',
  templateUrl: 'salon-payment.html',
})
export class SalonPaymentPage {
appointment;
salon_app;
salonpaymentList;
  constructor(private domSanitizer: DomSanitizer,public serviceProvider:ServicesProvider,public navCtrl: NavController, public navParams: NavParams) {
  	  		this.appointment=[
  	{name:'User name',oder_no:'32541635',date:'15.00, 25-05-2017',image:'http://18.220.97.146/barber/app_link/img/team-member2.jpg', status:'RECIEVED',color:'suc'},
  	{name:'User name',oder_no:'32541635',date:'15.00, 25-05-2017',image:'http://18.220.97.146/barber/app_link/img/team-member2.jpg', status:'RECIEVED',color:'suc'},
  	{name:'User name',oder_no:'32541635',date:'15.00, 25-05-2017',image:'http://18.220.97.146/barber/app_link/img/team-member2.jpg', status:'PENDING', color:'pen'},
  	{name:'User name',oder_no:'32541635',date:'15.00, 25-05-2017',image:'http://18.220.97.146/barber/app_link/img/team-member2.jpg', status:'RECIEVED', color:'suc'},
  	{name:'User name',oder_no:'32541635',date:'15.00, 25-05-2017',image:'http://18.220.97.146/barber/app_link/img/team-member2.jpg', status:'RECIEVED', color:'suc'},
  	{name:'User name',oder_no:'32541635',date:'15.00, 25-05-2017',image:'http://18.220.97.146/barber/app_link/img/team-member2.jpg', status:'PENDING', color:'pen'},
  	{name:'User name',oder_no:'32541635',date:'15.00, 25-05-2017',image:'http://18.220.97.146/barber/app_link/img/team-member2.jpg', status:'RECIEVED', color:'suc'},
  	]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalonPaymentPage');
  }
   getSafeUrl(url: any) {

    if(url!='null' || url!=null || url!=''){
       var a=url;
      var b=a.includes('http');
      if(b==true || b=='true'){
          return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
        }  
        else{
           return this.domSanitizer.bypassSecurityTrustResourceUrl('http://18.220.97.146/barber/img/customerprofileimage/'+url);
        }
       
    }

     
      
    
    }
ngOnInit(){
 
  var salon_id=localStorage['salon_id'];
      this.serviceProvider.salon_payment(salon_id)
         .subscribe(data  =>{ 
        console.log('salon_payment_data'+JSON.stringify(data));
        this.salon_app=data;
        this.salonpaymentList=this.salon_app.salonAppointmentList;

        }),
        error  => {
          alert('error'+error);
        }
}
}
