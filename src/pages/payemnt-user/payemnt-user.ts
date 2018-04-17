import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController} from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import {Observable} from 'rxjs/Rx';
import {ServicesProvider} from '../../providers/services/services';


@IonicPage()
@Component({
  selector: 'page-payemnt-user',
  templateUrl: 'payemnt-user.html',
})
export class PayemntUserPage {
appointment;
appointments
  constructor(public navCtrl: NavController, public navParams: NavParams,public serviceProvider:ServicesProvider,public loadingCtrl: LoadingController,  public alertCtrl: AlertController) {
  	// 	this.appointment=[
  	// {name:'Salon name',address:'32 yarrow terrace, hawick TD9, 9LL UK',price:'$150.00',date:'15.00, 25-05-2017',image:'assets/img/salon_image.jpg', status:'SUCCESSFUL',color:'suc'},
  	// {name:'Salon name',address:'32 yarrow terrace, hawick TD9, 9LL UK',price:'$150.00',date:'15.00, 25-05-2017',image:'assets/img/salon_image.jpg', status:'SUCCESSFUL',color:'suc'},
  	// {name:'Salon name',address:'32 yarrow terrace, hawick TD9, 9LL UK',price:'$150.00',date:'15.00, 25-05-2017',image:'assets/img/salon_image.jpg', status:'PENDING', color:'pen'},
  	// {name:'Salon name',address:'32 yarrow terrace, hawick TD9, 9LL UK',price:'$150.00',date:'15.00, 25-05-2017',image:'assets/img/salon_image.jpg', status:'SUCCESSFUL', color:'suc'},
  	// {name:'Salon name',address:'32 yarrow terrace, hawick TD9, 9LL UK',price:'$150.00',date:'15.00, 25-05-2017',image:'assets/img/salon_image.jpg', status:'SUCCESSFUL', color:'suc'},
  	// {name:'Salon name',address:'32 yarrow terrace, hawick TD9, 9LL UK',price:'$150.00',date:'15.00, 25-05-2017',image:'assets/img/salon_image.jpg', status:'PENDING', color:'pen'},
  	// {name:'Salon name',address:'32 yarrow terrace, hawick TD9, 9LL UK',price:'$150.00',date:'15.00, 25-05-2017',image:'assets/img/salon_image.jpg', status:'SUCCESSFUL', color:'suc'},
  	// ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PayemntUserPage');
  }
ngOnInit(){

  var user_id=localStorage['user_id'];
   let loading = this.loadingCtrl.create({content: 'Please wait...'});
        Observable.fromPromise(loading.present())
        .flatMap(data => this.serviceProvider.userPayment_list(user_id))
        .subscribe(data =>
          loading.dismiss().then(() =>{ 
            console.log('data'+JSON.stringify(data));
            this.appointments=data;
            this.appointment=this.appointments.customerpaymentlist;
          }),
          error =>
          loading.dismiss().then(() => {})
          );
}

}
