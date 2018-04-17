import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import { ModalController } from 'ionic-angular';
import {ServicesProvider} from '../../providers/services/services';

/**
 * Generated class for the BarberListSetSchedulePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-barber-list-set-schedule',
  templateUrl: 'barber-list-set-schedule.html',
})
export class BarberListSetSchedulePage {
appointment;
http;
posts;
no_barber
data;
salon_barber_list_data
salon_barber_data
  constructor(public modalCtrl: ModalController,public serviceProvider:ServicesProvider,public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController,http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarberListSetSchedulePage');
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
            this.barber_sch(this.appointment[0].id)
          }
          }),
          error =>
          loading.dismiss().then(() => {})
          );
}
barber_sch(barber_id){
 // let profileModal = this.modalCtrl.create('BarberSchedulePage',{barber_id:barber_id});
 //   profileModal.present();
 this.navCtrl.push('BarberSchedulePage',{barber_id:barber_id})
}
}
