import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Salondetail} from '../salondetail/salondetail';
import {Findsalonmap} from '../findsalonmap/findsalonmap';
import { AlertController} from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import {UserNotificationPage} from '../user-notification/user-notification';
import {Observable} from 'rxjs/Rx';
import {ServicesProvider} from '../../providers/services/services';
import {LoginModel} from '../../models/current';
import { Network } from '@ionic-native/network';
import { ToastController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Platform } from 'ionic-angular';
import {FavouriteSalonPage} from '../favourite-salon/favourite-salon';
import { MenuController } from 'ionic-angular/index';
import { InAppBrowser } from '@ionic-native/in-app-browser';
declare var google

/**
 * Generated class for the SalonHome page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-salon-home',
  templateUrl: 'salon-home.html',
})
export class SalonHome {
content;
lat:any;
lng:any;
Near;
a;
   http;
    data;
    cat;
    content1;
    user_count;
    average;
    loginmodel:LoginModel;
    currentposlat
currentposlng
count;
value3
showcard
rating_count
first
second
third
forth
fifth
rating_text
check_review
data_barber_id
data_booking_id
  constructor(private iab: InAppBrowser,private menu: MenuController,public platform: Platform,private diagnostic: Diagnostic, public geolocation: Geolocation,public toastCtrl: ToastController, private network: Network, public serviceProvider:ServicesProvider,public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController,  http: Http, public alertCtrl: AlertController) {
  	  this.http = http;
        this.data = {};
        this.data.response = '';

// if(localStorage['notification']=='false'){
//   this.value3='false';
// }
// else{
//   this.value3='true';
// }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SalonHome');
      this.menu.swipeEnable(false, 'left');
    this.menu.enable(true, 'left');
  }
 
rating(){
this.showcard='true';
}
  submit_rating() {
//     this.data_barber_id
// this.data_booking_id
var flag=1;
 ////////////flag=1 mean  customer rate to barber  //////////////
    this.showcard = 'false';
    if (this.count == undefined || this.count == 'undefined') {
      this.rating_count = 0;
    } else {
      this.rating_count = this.count;
    }
    var user_id = localStorage['user_id'];
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    Observable.fromPromise(loading.present())
      .flatMap(data => this.serviceProvider.addrating_barber(user_id, this.data_barber_id, this.rating_text, this.rating_count,this.data_booking_id,flag))
      .subscribe(data =>
        loading.dismiss().then(() => {
          // this.content=data
          this.first = 'false';
          this.second = 'false';
          this.third = 'false';
          this.forth = 'false';
          this.fifth = 'false';
          this.rating_text = '';
        }),
        error =>
        loading.dismiss().then(() => {})
      );
  }
   close_rating() {
     var flag=2;

     ////////////flag=2 mean  cancel rating //////////////
      var user_id = localStorage['user_id'];
    this.showcard = 'false';
    this.serviceProvider.addrating_barber(user_id, this.data_barber_id, this.rating_text, this.rating_count,this.data_booking_id,flag)
         .subscribe(data  =>{ 
        console.log('fav'+JSON.stringify(data));
        }),
        error  => {
          alert('error'+error);
        }
    }


   add(id) {
    if (id == 1) {
      this.count = id;
      this.first = 'true';
    } else if (id == 2) {
      this.count = id;
      this.first = 'true';
      this.second = 'true';
    } else if (id == 3) {
      this.count = id;
      this.first = 'true';
      this.second = 'true';
      this.third = 'true';
    } else if (id == 4) {;
      this.count = id;
      this.first = 'true';
      this.second = 'true';
      this.third = 'true';
      this.forth = 'true';
    } else if (id == 5) {
      this.count = id;
      this.first = 'true';
      this.second = 'true';
      this.third = 'true';
      this.forth = 'true';
      this.fifth = 'true';
    }
  }
  sub(id) {
    if (id == 1) {
      this.count = id - 1;
      this.first = 'false';
      this.second = 'false';
      this.third = 'false';
      this.forth = 'false';
      this.fifth = 'false';
    } else if (id == 2) {
      this.count = id - 1;
      this.second = 'false';
      this.third = 'false';
      this.forth = 'false';
      this.fifth = 'false';
    } else if (id == 3) {
      this.count = id - 1;
      this.third = 'false';
      this.forth = 'false';
      this.fifth = 'false';
    } else if (id == 4) {;
      this.count = id - 1;
      this.forth = 'false';
      this.fifth = 'false';
    } else if (id == 5) {
      this.count = id - 1;
      this.fifth = 'false';
    }
  }
      user_currentlocation(){
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
       this.currentposlat=position.coords.latitude;
       this.currentposlng=position.coords.longitude;
       localStorage['customer_latitude']=this.currentposlat;
       localStorage['customer_longitude']=this.currentposlng;
       
       this.customer_location(this.currentposlat,this.currentposlng);
       // alert('lat'+this.currentposlat+" "+'long'+this.currentposlng);
    }, (err) => {
      console.log(err);
    });
}

    customer_location(lat,long){
      var user_id=localStorage['user_id'];
        this.serviceProvider.customer_location(lat,long,user_id)
         .subscribe(data  =>{ 
     console.log(JSON.stringify(data));
     
        }),
        error  => {}
    }


seg(p,average){
	if(this.Near=='Nearby'){
		this.navCtrl.push('Findsalonmap');
	}
	else if(this.Near=='Favourites'){
   this.navCtrl.push('FavouriteSalonPage',{content:p,average:average});
    }
	}

map(){
    this.navCtrl.push('Findsalonmap');
}
favourite(p,average){

     this.navCtrl.push('FavouriteSalonPage',{content:p,average:average});
}
 getItems(ev: any) {

        //this.initializeItems();
        let val = ev.target.value;
        if (val && val.trim() != '') {
            this.content = this.content.filter((p) => {
                return (p.fullname.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        } else {
            this.content = this.cat;
        }
    }

salon_detail(id,lat,lng,p){
   localStorage['lat']=lat;
   localStorage['lng']=lng;
	this.navCtrl.push('Salondetail',{id:id,full_data:this.content, average:this.average,simple_Data:p});
}
salon_notification(){
this.navCtrl.push('UserNotificationPage');
}
  ngOnInit() {
    localStorage['flag']=0;
this.Home();

this.user_Notification_count()
// this.internet();
this.user_currentlocation();
this.checkLocation();
this.review_barber();

    }




review_barber(){
  console.log("rating_booking"+JSON.stringify(localStorage['rating_booking_id']));
  if (localStorage['rating_booking_id']) {
   var a=JSON.parse(localStorage['rating_booking_id'])

var b=this.unique(a)
var d=b.length;
var c=Math.floor(Math.random() * d);
var e=a[c];
////e=booking_id/////////
 this.serviceProvider.Check_review_rating(e)
         .subscribe(data  =>{ 
             this.check_review=data;
             var status=this.check_review.status;
              
               if(status==1){
                  this.data_barber_id=this.check_review.data.barber_id;
               this.data_booking_id=this.check_review.data.booking_id;
               console.log(status);
this.showcard='true';

               }
               else{
                 this.showcard='false'
               }
                
        }),
        error  => {
          alert('error'+error);
        }
  }


}

unique(array){
         return array.filter(function(el, index, arr) {
                  return index == arr.indexOf(el);    
              });
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
 // let alert = this.alertCtrl.create({
 //                    title: 'Alert!',
 //                    subTitle: 'Please On Your GPS Location',
 //                    buttons: ['OK']
 //                });
 //                alert.present();
}

}).catch( (e) => {
console.log(e);
});


});
}
internet(){

  let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
       let toast = this.toastCtrl.create({
      message: 'network was disconnected!',
      duration: 5000,
       position: "bottom",
    });

toast.present(toast);
});

  let connectSubscription = this.network.onConnect().subscribe(() => {
  console.log('network connected!');
  setTimeout(() => {
    if (this.network.type === 'wifi' ) {
     
       let toast = this.toastCtrl.create({
      message: 'we got a wifi connection, woohoo!',
      duration: 2000,
      position: "bottom",
    });

toast.present(toast);
    }
    else if (this.network.type === 'unknown' ) {
      let toast = this.toastCtrl.create({
      message: 'we got a unknown connection, offo!',
      duration: 2000,
     position: "bottom",
       cssClass: "toast-success"
    });

toast.present(toast);
    }
    else if ( this.network.type === 'ethernet'  ) {
     let toast = this.toastCtrl.create({
      message: 'we got a ethernet connection, woohoo!',
      duration: 2000,
      position: "bottom",
       cssClass: "toast-success"
    });

toast.present(toast);
    }
    else if (this.network.type === '2g' ) {
      let toast = this.toastCtrl.create({
      message: 'we got a 2g connection, woohoo!',
      duration: 2000,
      position: "bottom",
       cssClass: "toast-success"
    });
      
toast.present(toast);
    }
    else if ( this.network.type === '3g' ) {
     let toast = this.toastCtrl.create({
      message: 'we got a 3g connection, woohoo!',
      duration: 2000,
       position: "bottom",
       cssClass: "toast-success"
    });
     
toast.present(toast);
    }
    else if ( this.network.type === '4g' ) {
      let toast = this.toastCtrl.create({
      message: 'we got a 4g connection, woohoo!',
      duration: 2000,
      position: "bottom",
      cssClass: "toast-success"
    });
      
toast.present(toast);
    }
    else if (  this.network.type === 'none') {
      let toast = this.toastCtrl.create({
      message: 'we got a none connection, offo!',
      duration: 2000,
       position: "bottom",
       cssClass: "toast-success"
    });
      
toast.present(toast);
    }
  }, 3000);
});
}
    Home(){
        this.serviceProvider.salonhome()
         .subscribe(data  =>{ 
          this.content=data.saloninfo;
          this.average=data.averagerating;
this.serviceProvider.loginmodel=data.saloninfo;
           this.cat=data.saloninfo;
    //         setTimeout(() => {
    //  this.Home();
    // }, 5000);
        }),
        error  => {}
//  let loading = this.loadingCtrl.create({content: 'Please wait...'});
//         Observable.fromPromise(loading.present())
//         .flatMap(data => this.serviceProvider.salonhome())
//         .subscribe(data =>
//           loading.dismiss().then(() =>{ 
//                this.content=data.saloninfo;
//           this.average=data.averagerating;
// this.serviceProvider.loginmodel=data.saloninfo;
//            this.cat=data.saloninfo;
           
//           }),
//           error =>
//           loading.dismiss().then(() => {})
//           );
        
    }
//     pay(){
     
// var bookingid=2;
// var clientDetails_applicationId="APP-80W284485P519543T";
// var clientDetails_ipAddress="127.0.0.1";
// var currencyCode="USD";
// var feesPayer="SETCUTS"
// var memo="Hair cutting";
// var receiverList_receiver0_amount="21.00";
// var receiverList_receiver0_email="info-facilitator@commercefactory.org";
// var receiverList_receiver0_primary="true"
// var receiverList_receiver1_amount="11.00";
// var receiverList_receiver1_email="us-provider@commercefactory.org"
// var receiverList_receiver1_primary="false";
// var requestEnvelope_errorLanguag="en_US";
// var returnUrl="http://www.yourdomain.com/success.html";
// var cancelUrl="http://www.yourdomain.com/cancel.html";
//  let loading = this.loadingCtrl.create({content: 'Please wait...'});
//         Observable.fromPromise(loading.present())
//         .flatMap(data => this.serviceProvider.DemoPay(clientDetails_applicationId,
// clientDetails_ipAddress,
// currencyCode,
// feesPayer,
// memo,
// receiverList_receiver0_amount,
// receiverList_receiver0_email,
// receiverList_receiver0_primary,
// receiverList_receiver1_amount,
// receiverList_receiver1_email,
// receiverList_receiver1_primary,
// requestEnvelope_errorLanguag,returnUrl,
// cancelUrl,bookingid))
//         .subscribe(data =>
//           loading.dismiss().then(() =>{ 
//             console.log(JSON.stringify(data))
//             this.a=data; 
//             alert("data"+JSON.stringify(this.a.link));
//             const browser = this.iab.create(this.a.link);
//           }),
//           error =>
//           loading.dismiss().then(() => {
//             alert("error"+error); 
//           })
//           );


//     }
  //    notification_access(){
  //          if( localStorage['count']!=0){
  //   let confirm = this.alertCtrl.create({
  //     title: 'Enable Notifications?',
  //     message: 'Get notification for new booking , when someone add you as a barber',
  //     buttons: [
  //       {
  //         text: 'Not Now',
  //         handler: () => {
  //            this.value3='false';
  //            localStorage['count']=0;
  //            localStorage['notification']='false';
  //           console.log('Disagree clicked');
  //         }
  //       },
  //       {
  //         text: 'Yes',
  //         handler: () => {
  //            this.value3='true';
  //            localStorage['count']=0;
  //              localStorage['notification']='true';
  //              this.u();
  //           console.log('Agree clicked');
  //         }
  //       }
  //     ]
  //   });
  //   confirm.present();
  // }
  //   }
    user_Notification_count(){
      var user_id=localStorage['user_id'];
      this.serviceProvider.userNotification(user_id)
         .subscribe(data  =>{ 
           if(localStorage['user_type']==0 && localStorage['flag']==0){
             setTimeout(() => {
     this.user_Notification_count();
    }, 10000);
           }
           
       if(data.totalcustomer){
        this.user_count=data.totalcustomer.count; 
       }
        
        console.log(this.user_count);
        }),
        error  => {}
    }

    }
 
