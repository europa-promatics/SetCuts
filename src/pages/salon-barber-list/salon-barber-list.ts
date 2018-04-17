import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SalonBarberProfilePage} from '../salon-barber-profile/salon-barber-profile';
import { Http } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import {ServicesProvider} from '../../providers/services/services';
import {BarberSchedulePage} from '../barber-schedule/barber-schedule';
import { ModalController } from 'ionic-angular';
/**
 * Generated class for the SalonBarberListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-salon-barber-list',
  templateUrl: 'salon-barber-list.html',
})
export class SalonBarberListPage {
appointment;
http;
posts;
no_barber
data;
salon_barber_list_data
salon_barber_data
  constructor(public serviceProvider:ServicesProvider,public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController,http: Http) {
         this.http=http;
     this.data={}
  	//   	this.appointment=[
  	// {name:'Barber name',Service:'Hair style spa, massage',image:'assets/img/team-member2.jpg'},
  	// {name:'Barber name',Service:'Hair style spa, massage',image:'assets/img/team-member2.jpg'},
  	// {name:'Barber name',Service:'Hair style spa, massage',image:'assets/img/team-member2.jpg'},
  	// {name:'Barber name',Service:'Hair style spa, massage',image:'assets/img/team-member2.jpg'},
  	// {name:'Barber name',Service:'Hair style spa, massage',image:'assets/img/team-member2.jpg'},
  	// {name:'Barber name',Service:'Hair style spa, massage',image:'assets/img/team-member2.jpg'},
  	// {name:'Barber name',Service:'Hair style spa, massage',image:'assets/img/team-member2.jpg'}
  	// ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalonBarberListPage');
  }
viewBarberProfile(data,barber_id){
  this.navCtrl.push('SalonBarberProfilePage',{fulldata:data, barberid:barber_id});
}

ngOnInit(){
  var  salonid= localStorage['salon_id']
   let loading = this.loadingCtrl.create({content: 'Please wait...'});
        Observable.fromPromise(loading.present())
        .flatMap(data => this.serviceProvider.salon_barber_list(salonid))
        .subscribe(data =>
          loading.dismiss().then(() =>{ 
            this.salon_barber_list_data=data;
            if( this.salon_barber_list_data.message=="No barber in this salon"){
            console.log('no barber ')
            this.appointment=0;
          }
          else{
            this.appointment= this.salon_barber_list_data.barberinfo;
         console.log("barber info "+JSON.stringify(this.appointment));
          }
          }),
          error =>
          loading.dismiss().then(() => {})
          );
}
}
