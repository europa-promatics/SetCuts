import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import {UserBarberProfilePage} from '../user-barber-profile/user-barber-profile';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import {ServicesProvider} from '../../providers/services/services';
import {LoginModel} from '../../models/current';

/**
 * Generated class for the UserBarberListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-user-barber-list',
  templateUrl: 'user-barber-list.html',
})
export class UserBarberListPage {
appointment;
http;
posts;
data;
salonid;
barbername;
serviceid;
date;
post
nobarber

full_averagerating
    loginmodel:LoginModel;
  constructor(public serviceProvider:ServicesProvider,public navCtrl: NavController,public loadingCtrl: LoadingController,http: Http,
    public navParams: NavParams) {
   	 	this.http=http;
   	    this.data={}
        this.salonid=this.navParams.get('salonid');
        this.serviceid=this.navParams.get('service_id');
        this.date=new Date();         
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserBarberListPage');
  }
// ngOnInit(){

//     let loading = this.loadingCtrl.create({
//     content: 'Please wait...'
//      });
//     loading.present();

//   var link='http://europa.promaticstechnologies.com/barber/WebServices/barberInfo';
//   	 var data=JSON.stringify({
//     	salonid: this.salonid,	       
//     });
//         this.http.post(link,data)
//         .map(res => res.json())
//         .subscribe(data => {
//           loading.dismiss();
//         this.posts=data;
//          console.log("barber info "+JSON.stringify(this.posts));
//     });
// }


ngOnInit(){
 
        let loading = this.loadingCtrl.create({content: 'Please wait...'});
        Observable.fromPromise(loading.present())
        .flatMap(data => this.serviceProvider.userbarberlist(this.salonid))
        .subscribe(data =>
          loading.dismiss().then(() =>{ 
            this.post=data;
            if(this.post.message=="No barber in this salon"){
              this.nobarber='true';
            }
            else{
              this.posts=this.post.barberinfo;
              this.full_averagerating=this.post.averagerating;
              this.nobarber='false';
            }
        console.log("barber info "+JSON.stringify(this.posts));
          }),
          error =>
          loading.dismiss().then(() => {})
          );
        ;
    }
    
viewBarberProfile(barberdata){

  this.navCtrl.push('UserBarberProfilePage',{fulldata:this.posts,barberdata:barberdata,serviceid:this.serviceid,average:this.full_averagerating,salon_id:this.salonid});
}
}
