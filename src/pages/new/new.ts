import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { AlertController } from 'ionic-angular';
import {ServicesProvider} from '../../providers/services/services';
import { Select } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';


/**
 * Generated class for the NewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-new',
  templateUrl: 'new.html',
})
export class NewPage {
  @ViewChild(Select) select: Select;
    table;
      http;
        data;
        gaming;
        barberschedule
        myTime:Array<{'name':any,'time':any[]}>

        barberscheduler;
        date;
        selectservice
        customer_name
        phonenumber
        items
        callselectedtime
        callbarbername
        callbarberid
        emailaddress
  constructor( public loadingCtrl: LoadingController, public alertCtrl: AlertController, public viewCtrl: ViewController,public serviceProvider:ServicesProvider, http: Http,public navCtrl: NavController, public navParams: NavParams) {
  	  this.http = http;
        this.data = {};
        this.data.response = '';
        this.myTime=[]
        this.selectservice='false';
        this.date=this.navParams.get('date');
 this.table=[
{
time:'08:00 Am'
},
{
time:'08:45 Am'
},
{
time:'09:30 Am'
},
{
time:'10:15 Am'
},
{
time:'11:00 Am'
},
{
time:'11:45 Am'
},
{
time:'12:30 Pm'
},
{
time:'01:15 Pm'
},
{
time:'02:00 Pm'
},
{
time:'02:45 Pm'
},
{
time:'03:30 Pm'
},
{
time:'04:15 Pm'
},
{
time:'05:00 Pm'
},
{
time:'05:45 Pm'
},
{
time:'06:30 Pm'
},
{
time:'07:15 Pm'
},
{
time:'08:00 Pm'
},
]
//     this.table=[
//    {
// time:'08:00 Am'
// },
// {
// time:'08:45 Am'
// },
// {
// time:'09:30 Am'
// },
// {
// time:'10:15 Am'
// },
// {
// time:'11:00 Am'
// },
// {
// time:'11:45 Am'
// },
// {
// time:'12:30 Pm'
// },
// {
// time:'01:15 Pm'
// },
// {
// time:'02:00 Pm'
// },
// {
// time:'02:45 Pm'
// },
// {
// time:'03:30 Pm'
// },
// {
// time:'04:15 Pm'
// },
// {
// time:'05:00 Pm'
// },
// {
// time:'05:45 Pm'
// },
// {
// time:'06:30 Pm'
// },
// {
// time:'07:15 Pm'
// },
// {
// time:'08:00 Pm'
// },
// ]
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPage');
  }
onTime(time,barbername,barber_id){
       let loading = this.loadingCtrl.create({content: 'Please wait...'});
        Observable.fromPromise(loading.present())
        .flatMap(data => this.serviceProvider.check_availabilty(this.date,time,barber_id))
        .subscribe(data =>
        loading.dismiss().then(() =>{ 
           console.log("data"+JSON.stringify(data.message));
if(data.status==1){
    if(localStorage['user_type']==1 || localStorage['user_type']=="1"){
      this.showPrompt(time,barber_id);
      this.callselectedtime=time;
      this.callbarbername=barbername;
      this.callbarberid=barber_id;
    }
  else{
    if(barber_id==localStorage['barber_id']){
      console.log("barber_id"+barber_id+" "+"localStorage['barber_id']"+localStorage['barber_id'])
      console.log("time"+time+" "+"barbername"+barbername+"barber_id"+barber_id);
      this.showPrompt(time,barber_id);
      this.callselectedtime=time;
      this.callbarbername=barbername;
      this.callbarberid=barber_id;
    }
    else{
    }   
  }
}
else{
  let alert = this.alertCtrl.create({
                        title: 'Alert!',
                        subTitle: 'Barber Not Available.',
                        buttons: ['OK']
                    });
                    alert.present();
}
        }),
        error =>
        loading.dismiss().then(() => {})
        );
//   this.serviceProvider.check_availabilty(this.date,time,barber_id)
//          .subscribe(data  =>{ 
//     console.log("data"+JSON.stringify(data.message));
// if(data.status==1){
//     if(localStorage['user_type']==1 || localStorage['user_type']=="1"){
// this.showPrompt(time,barber_id);
// this.callselectedtime=time;
// this.callbarbername=barbername;
// this.callbarberid=barber_id;
//   }
//   else{
//     if(barber_id==localStorage['barber_id']){
//       console.log("barber_id"+barber_id+" "+"localStorage['barber_id']"+localStorage['barber_id'])
//       console.log("time"+time+" "+"barbername"+barbername+"barber_id"+barber_id);
// this.showPrompt(time,barber_id);
// this.callselectedtime=time;
// this.callbarbername=barbername;
// this.callbarberid=barber_id;
//     }
//     else{

//     }   
//   }
// }
// else{
//   let alert = this.alertCtrl.create({
//                         title: 'Alert!',
//                         subTitle: 'Barber Not Available.',
//                         buttons: ['OK']
//                     });
//                     alert.present();
// }
//         }),
//         error  => {
//         }


}
ngOnInit(){
    this.service();
   	 var salon_id=localStorage['salon_id'];
     var date=this.date; 
          this.serviceProvider.salon_view_appointment(salon_id,date)
           .subscribe(data  =>{ 
               if (data.status==0) {
                 console.log("no booking")
               }else{

                 this.barberscheduler=data.barberschedule;
               }
            }),
          error  => {}
}
banadobhai(serviceTime,localTime,custometime){
  // let split=serviceTime.split(',')
  //  if (split.indexOf(localTime)!=-1){
  //      // var a="active";
  //      return c_name
  //  }
   // else{
   //   return "notactive"
   // }
    let b=serviceTime.concat(custometime)
   for (let i = 0; i < b.length; i++) {
     let obj=b[i]
     let splitData=obj.time.split(',')

     if (splitData.indexOf(localTime) !=-1) {
       if (obj.customer) {
         // code...
       return  obj.customer.fullname;
       }else{
         return obj.customer_name;
       }
     }
     // code...
   }
}
 banadobhai2(serviceTime,localTime,custometime){
  // let split=serviceTime.split(',')
  //  if (split.indexOf(localTime)!=-1){
  //      // var a="active";
  //      return c_ph
  //  }
  let b=serviceTime.concat(custometime)
  for (let i = 0; i < b.length; i++) {
     let obj=b[i]
     let splitData=obj.time.split(',')

     if (splitData.indexOf(localTime) !=-1) {
       if (obj.customer) {
    return  obj.customer.phonenumber;
       }
       else{
         return  obj.phone_number;
       }
     }
   }

}
dismiss(){
  this.viewCtrl.dismiss();
}


  showPrompt(time,barber_id) {
    let prompt = this.alertCtrl.create({
      title: 'ADD CUSTOMER APPOINTMENT',
      inputs: [
        {
          name: 'Customer_name',
          placeholder: 'Customer name',

        },
        {
          name: 'Phone_number',
          placeholder: 'Phone number',

        },
      ],

      buttons: [
        {
          text: 'Cancel',
          handler: data => {
      console.log(JSON.stringify(data));
      console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log("data"+JSON.stringify(data));
           this.customer_name=data.Customer_name;
            this.phonenumber=data.Phone_number;
            if(this.customer_name=="" || this.phonenumber=="" ){
                  let alert = this.alertCtrl.create({
                        title: 'Alert!',
                        subTitle: 'Please fill all fields.',
                        buttons: ['OK']
                    });
                    alert.present();
            }
            else{
 this.selectservice='true';
this.selcton();

            }
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }
  selcton(){
        this.select.open();     
  }
  notify(){
    this.selectservice='false';
    console.log("service"+this.gaming +","+"customer name"+this.customer_name+","+"phonenumber"+this.phonenumber+","+"select time"+this.callselectedtime
+","+"barbername"+this.callbarbername
+","+"barber_id"+this.callbarberid+","+"customer emailaddress"+this.emailaddress);
    this.serviceProvider.bookingbyCall(this.gaming,this.customer_name,this.phonenumber,this.callselectedtime
,this.callbarbername,
this.callbarberid,this.date)
            .subscribe(data => {
             this.ngOnInit();
      console.log(JSON.stringify(data));
            }),
        error  => {}   
  }
       service(){
         var salon_id=localStorage['salon_id'];
    this.serviceProvider.Getsalonservices(salon_id)
            .subscribe(data => {
                      this.items = data;
              console.log(JSON.stringify(data));
            }),
        error  => {}
  }
}
