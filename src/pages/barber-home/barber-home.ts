import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SalonBarberProfilePage} from '../salon-barber-profile/salon-barber-profile';
import { SalonNotificationPage} from '../salon-notification/salon-notification';
import { BarberGalleryPage} from '../barber-gallery/barber-gallery';
import { Observable} from 'rxjs/Rx';
import { ServicesProvider} from '../../providers/services/services';
import { LoadingController } from 'ionic-angular';
import { FaqPage} from '../faq/faq';
import { AlertController } from 'ionic-angular';
import { BarberAboutUsPage} from '../barber-about-us/barber-about-us';
import { BarberAppointmentPage} from '../barber-appointment/barber-appointment';
import { Geolocation } from '@ionic-native/geolocation';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Platform } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { BarberSchedulePage} from '../barber-schedule/barber-schedule';
import { ModalController } from 'ionic-angular';
import { SViewSchedulePage} from '../s-view-schedule/s-view-schedule';

declare var google
/**
 * Generated class for the BarberHomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-barber-home',
  templateUrl: 'barber-home.html',
})
export class BarberHomePage {
	a;b;c;d;e;f;g;h;i;
	bookinginfo;
	notification_count;
	status
	status_text
	navstatus
status_barber
	barberStatusdata
  lat:any;
lng:any;
value3;
  constructor(public modalCtrl: ModalController,private toastCtrl: ToastController,public platform: Platform,private diagnostic: Diagnostic, public geolocation: Geolocation,private alertCtrl: AlertController,public serviceProvider:ServicesProvider,public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController) {
  	this.c='false';
this.b='false';
this.a='false';
if(localStorage['notification']=='false'){
  this.value3='false';
}
else{
  this.value3='true';
}


  }

barber_notification(){
this.navCtrl.push('SalonNotificationPage',{notfication_data:this.bookinginfo});
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad BarberHomePage');
  }

//   Status(){
// var a=localStorage['barber_id'];

// if(this.status==true){
// var Status_active=1;

// 	  let alert = this.alertCtrl.create({
//     title: 'Confirm Status',
//     message: 'Are you sure you want to be on duty?',
//     buttons: [
//       {
//         text: 'No',
//         role: 'cancel',
//         handler: () => {
//           console.log('No clicked');
//           this.status_text='Off Duty';
//           this.status='false';
//         }
//       },
//       {
//         text: 'Yes',
//         handler: () => {
//           console.log('Yes clicked');
//           this.status_text='On Duty';
         
//           	 this.serviceProvider.Status(a, Status_active)
//          .subscribe(data  =>{ 
//          	this.barberStatusdata=data;
//          	if(this.barberStatusdata.message=="Barber status active saved suceessfully"){
// console.log("active");
//  this.status='true';
//  let alert = this.alertCtrl.create({
//                     subTitle: 'Status Updated successful ',
//                     buttons: ['OK']
//                     });
//                     alert.present();  

//   }
//   console.log('data'+JSON.stringify(this.barberStatusdata.message));
//         }),
//         error  => {}
//         }
//       }
//     ]
//   });
//   alert.present();
//   }
//   else if(this.status==false){
//   	var Status_active=0;
//   		  let alert = this.alertCtrl.create({
//     title: 'Confirm Status',
//     message: 'Are you sure you want to be off duty?',
//     buttons: [
//       {
//         text: 'No',
//         role: 'cancel',
//         handler: () => {
//           console.log('No clicked');
//           this.status_text='On Duty';
//           this.status='true';
//         }
//       },
//       {
//         text: 'Yes',
//         handler: () => {
//           console.log('Yes clicked');
//           this.status_text='Off Duty';
          
//           	 this.serviceProvider.Status(a, Status_active)
//          .subscribe(data  =>{ 
//   this.barberStatusdata=data;
//     console.log('data'+JSON.stringify(this.barberStatusdata.message));
//   if(this.barberStatusdata.message=="Barber status inactive saved successfully"){
// console.log("Inactive");
// this.status='false';
//  let alert = this.alertCtrl.create({
//                     subTitle: 'Status Updated successful ',
//                     buttons: ['OK']
//                     });
//                     alert.present();     

//   }

//         }),
//         error  => {}


//         }
//       }
//     ]
//   });
//   alert.present();
//   }
// }

add(id){
	if(id==0){
	this.a='true';
	this.b='false';
	this.c='false';	
	this.d='false';
	this.e='false';	
	this.f='false';
	this.g='false';	
	this.h='false';
	this.i='false';	

	}
	else if(id==1){
		this.a='false';
	this.b='true';
	this.c='false';	
	this.d='false';
	this.e='false';	
	this.f='false';
	this.g='false';	
	this.h='false';
	this.i='false';	
	this.navCtrl.push('SalonBarberProfilePage');
	}
	else if(id==2){
		this.a='false';
	this.b='false';
	this.c='true';	
	this.d='false';
	this.e='false';	
	this.f='false';
	this.g='false';	
	this.h='false';
	this.i='false';	
	// this.navCtrl.push('BarberAppointmentPage');
  this.navCtrl.push(SViewSchedulePage);
	}
	else if(id==3){
		this.a='false';
	this.b='false';
	this.c='false';	
	this.d='true';
	this.e='false';	
	this.f='false';
	this.g='false';	
	this.h='false';
	this.i='false';	
	}
	else if(id==4){
		this.a='false';
	this.b='false';
	this.c='false';	
	this.d='false';
	this.e='true';	
	this.f='false';
	this.g='false';	
	this.h='false';
	this.i='false';	
	this.navCtrl.push('BarberGalleryPage');
	
	}
	else if(id==5){
		this.a='false';
	this.b='false';
	this.c='false';	
	this.d='false';
	this.e='false';	
	this.f='true';
	this.g='false';	
	this.h='false';
	this.i='false';	
	// let profileModal = this.modalCtrl.create('BarberSchedulePage',{barber_id:localStorage['barber_id']});
 //   profileModal.present();
	 this.navCtrl.push('BarberSchedulePage',{barber_id:localStorage['barber_id']});
	
	}
	else if(id==6){
		this.a='false';
	this.b='false';
	this.c='false';	
	this.d='false';
	this.e='false';	
	this.f='false';
	this.g='true';	
	this.h='false';
	this.i='false';	
	this.navCtrl.push('BarberAboutUsPage');
	}
	else if(id==7){
		this.a='false';
	this.b='false';
	this.c='false';	
	this.d='false';
	this.e='false';	
	this.f='false';
	this.g='false';	
	this.h='true';
	this.i='false';
	this.navCtrl.push('FaqPage');	

	}
	else if(id==8){
		this.a='false';
	this.b='false';
	this.c='false';	
	this.d='false';
	this.e='false';	
	this.f='false';
	this.g='false';	
	this.h='false';
	this.i='true';	
  this.navCtrl.push('ContactUsPage');
	}

	

}
    ngOnInit(){
    	this.notification_access();
      localStorage['flag']=0;
        // this.getnotfication();
        // this.barberstatus();
        if( localStorage['notification']=='true'){
  this.getnotfication();
}
        // this.currentl();
        // this.checkLocation();
    }
    notification_access(){
    	     if( localStorage['count']!=0){
    let confirm = this.alertCtrl.create({
      title: 'Enable Notifications?',
      message: 'Get notification for new booking , when someone add you as a barber',
      buttons: [
        {
          text: 'Not Now',
          handler: () => {
          	 this.value3='false';
          localStorage['count']=0;
               localStorage['notification']='false';
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
          	 this.getnotfication();
          	 this.value3='true';
          	 localStorage['count']=0;
               localStorage['notification']='true';
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }
    }
    checkLocation()
{
this.platform.ready().then((readySource) => {

this.diagnostic.isLocationEnabled().then(
(isAvailable) => {
console.log('Is available? ' + isAvailable);
if(isAvailable==true ){
  console.log('true');
}
else{
 let alert = this.alertCtrl.create({
                    title: 'Alert!',
                    subTitle: 'Please On Your GPS Location',
                    buttons: ['OK']
                });
                alert.present();
}

}).catch( (e) => {
console.log(e);
});


});
}
    currentl(){
     if( localStorage['count']!=0){
let confirm = this.alertCtrl.create({
      title: 'Alert',
      message: 'Would you like to share your location with setcuts ?',
      buttons: [
        {
          text: 'No',
          handler: () => {
           localStorage['count']=0;
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.agree_location();
              localStorage['count']=0;
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }
  

 
    }

    agree_location(){
      this.geolocation.getCurrentPosition().then((position) => {
   console.log("position data"+JSON.stringify(position))
      console.log("current latitude "+JSON.stringify(position.coords.latitude))
       console.log("current longitute "+JSON.stringify(position.coords.longitude))
     
      this.lat=position.coords.latitude;
      this.lng=position.coords.longitude;

      localStorage['barber_latitude']=this.lat;
      localStorage['barber_longitude']=this.lng;
        // alert('barber_lat'+this.lat+" "+'barber_long'+this.lat);
    }, (err) => {
      console.log(err);
    });
    }
    getnotfication(){
   
    	// let loading = this.loadingCtrl.create({content: 'Please wait...'});
     //    Observable.fromPromise(loading.present())
     //    .flatMap(data => this.serviceProvider.notification(localStorage['barber_id']))
     //    .subscribe(data =>
     //    loading.dismiss().then(() =>{ 
     //    	this.bookinginfo=data.bookinginfo;
     //    	this.notification_count=data.totalcustomer.count;
     //    }),
     //    error =>
     //    loading.dismiss().then(() => {})
     //    );
          	 this.serviceProvider.notification(localStorage['barber_id'])
         .subscribe(data  =>{ 
this.bookinginfo=data.bookinginfo;
this.notification_count=data.totalcustomer.count;
if(localStorage['user_type']==2 || localStorage['flag']==0){
   setTimeout(() => {
     this.getnotfication();
    }, 10000);
}
      
        }),
        error  => {}
    }
// barberstatus(){
// 	var id=localStorage['barber_id'];
//       this.serviceProvider.barberstatuscheck(id)
//          .subscribe(data  =>{ 
//          	this.navstatus=data;
//          	this.status_barber=this.navstatus.barber_status;
//          	if(this.status_barber=="1"){
//          		this.status='true';
//          		this.status_text='On Duty';
//          	}
//          	else{
             
//          		this.status='false';
//          		this.status_text='Off Duty';
//          	}
//          	console.log(JSON.stringify(this.status_barber));
//         }),
//         error  => {}
            
//     }
}
