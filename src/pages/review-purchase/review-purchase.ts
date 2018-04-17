import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController} from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {ServicesProvider} from '../../providers/services/services';
// import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';
import {PaymentSucessPage} from '../payment-sucess/payment-sucess';
import { ModalController } from 'ionic-angular';

/**
 * Generated class for the ReviewPurchasePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-review-purchase',
  templateUrl: 'review-purchase.html',
})
export class ReviewPurchasePage {
Salon_name;
address;
service;
date;
time;
charges;
total;
 http;
    data;
    content;
    datedata;
    img;
timedata
booking_id
barbername
paydata
paystate
prouct_name
transaction_id
transaction_time
transaction_status
charg
img1
// private payPal: PayPal,
  constructor(public modalCtrl: ModalController,public serviceProvider:ServicesProvider,public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController,  http: Http, public alertCtrl: AlertController) {
  // this.datedata=this.navParams.get('date');
  // this.timedata=this.navParams.get('time');
  this.booking_id=this.navParams.get('booking_id');
  localStorage['booking_id']=this.booking_id;


             this.http = http;
        this.data = {};
        this.data.response = '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewPurchasePage');
  }
ngOnInit(){
  let loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
       loader.present();
    var link='http://18.220.97.146/barber/WebServices/barberBookingInfoById.json';
    var data=JSON.stringify({
  
      customer_id:localStorage['user_id'],
    booking_id:localStorage['booking_id']
    });


    this.http.post(link,data)
    .map(res=>res.json())
     .subscribe(data=>{
 loader.dismiss();
       this.data = data;
       this.content=this.data.bookinginfo;
      this.Salon_name=this.content.salonname;
      this.barbername=this.content.barbername;
      this.address=this.content.address;
        this.service=this.content.service;
            this.date=this.content.date;
    this.time=this.content.time;
    this.charg=this.content.charge;
    if( this.charg==null ||  this.charg=='null'){
      this.charges=30;
      this.total=30;
    }
    else{
       this.total=this.content.charge;
       this.charges=this.content.charge;
    }
   
    this.img1=this.content.image;
      var n=this.img1.includes(",");
if(n==true || n=='true'){
  var a=this.img1.split(',');
  this.img=a[0];
}
else{
  this.img=this.content.image;
}
 
     });

}
//     User_payment(){
//             var paystatus=1;
//       if(this.charges==null){
//         this.charges=30;
//       }
//       else{
//         this.charges=this.charges;

//       }
//        var user_id=localStorage['user_id'];
//           this.payPal.init({
//   "PayPalEnvironmentProduction":"EHAcM2INSj9ek0nFpvo407Lm6HAVMKek2IJ5Ogg-oAYUV_GHYn8SOluvJkEeQIgMXAJhU40zB1u8OYUL",
//   "PayPalEnvironmentSandbox":"ARKMEv5yNKHYh4zpKWYZAJKgUy6YTNI_ZfJ2oo3o0pPoODn47DjbdmjIr3UmUfwMFbb3ovsZ41iu1mKB"
// }).then(() => {
  
//   this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
   
//   })).then(() => {
//     let payment = new PayPalPayment(this.charges, 'USD', 'Description', 'sale');
//     this.payPal.renderSinglePaymentUI(payment).then((data) => {
//       localStorage['data']=data;
//       localStorage['data_client_enviornment']=data.client.environment;
// localStorage['client_product_name']=data.client.product_name;
//       localStorage['response_id']=data.response.id;
//       localStorage['trans_time']=data.response.create_time;
//       localStorage['trans_status']=data.response.state;
//       localStorage['data.response_type']=data.response_type;
//        this.payment_service(user_id,this.booking_id,localStorage['response_id'],localStorage['trans_status'],paystatus);
//       if(data.response.state=="approved"){
//         this.paystate='true';
//         this.prouct_name=localStorage['client_product_name'];
//         this.transaction_id=localStorage['response_id'];
//         this.transaction_time= localStorage['trans_time'];
//         this.transaction_status= localStorage['trans_status'];
//       }
//       else{
//          let alert = this.alertCtrl.create({
//       title: 'Something went wrong!',
//       subTitle: 'Payment unsuccessful',
//       buttons: ['OK']
//     });
//     alert.present();
//       }

     
//     }, (error) => {
//        let alert = this.alertCtrl.create({
//       title: 'Something went wrong!',
//       subTitle: 'Payment unsuccessful',
//       buttons: ['OK']
//     });
//     alert.present();
     
//     });
//   }, (error) => {
//      let alert = this.alertCtrl.create({
//       title: 'Something went wrong!',
//       subTitle: 'Payment unsuccessful',
//       buttons: ['OK']
//     });
//     alert.present();
//   });
// }, (error) => {
//    let alert = this.alertCtrl.create({
//       title: 'Something went wrong!',
//       subTitle: 'Payment unsuccessful',
//       buttons: ['OK']
//     });
//     alert.present();
// });
// }

    payment_service(user_id,bookingid,payment_id,pay_state,paystatus)
    {
      var response=response;
      var bookingid=bookingid;
      var user_id=user_id;
        this.serviceProvider.payment_service(user_id,bookingid,payment_id,pay_state,paystatus)
         .subscribe(data  =>{ 
           // alert('data'+JSON.stringify(data));
           this.paydata=data;
           if(this.paydata.message=="your payment confirmation send to your email id"){
              // let alert = this.alertCtrl.create({
              //           title: 'Payment success!',
              //           subTitle: 'your payment confirmation send to your email id.',
              //           buttons: ['OK']
              //       });
              //       alert.present();

          this.payment(this.booking_id);
       let modal = this.modalCtrl.create('PaymentSucessPage',{booking_id:bookingid,user_id:user_id});
    modal.present();
            // this.ngOnInit(); 
           }
           else{
             let alert = this.alertCtrl.create({
      title: 'Something went wrong!',
      subTitle: 'Payment unsuccessful',
      buttons: ['OK']
    });
    alert.present();
           }

           
        }),
        error  => {
          let alert = this.alertCtrl.create({
      title: 'Something went wrong!',
      subTitle: 'Payment unsuccessful',
      buttons: ['OK']
    });
    alert.present();
        }

    }
        payment(booking_id){
      var user_id=localStorage['user_id'];

      ///////////////paystatus 1= Payment success /////////////////////////////
      var paystatus=1;
         this.serviceProvider.PayStatus(booking_id,user_id,paystatus)
         .subscribe(data  =>{ 
          // this.navCtrl.push('PaymentSucessPage',{booking_id:booking_id,user_id:user_id});
        }),
         
        error  => {}
    }
}
