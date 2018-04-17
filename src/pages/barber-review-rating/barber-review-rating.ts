import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';
 import {ServicesProvider} from '../../providers/services/services';
  import {Observable} from 'rxjs/Rx';
  import { LoadingController } from 'ionic-angular';
/**
 * Generated class for the BarberReviewRatingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-barber-review-rating',
  templateUrl: 'barber-review-rating.html',
})
export class BarberReviewRatingPage {
review
reviews;
barber_id;
data;
  constructor(public viewCtrl: ViewController,public serviceProvider: ServicesProvider,  public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams) {
  	 this.review=this.navParams.get('review_data');
  	 this.data={};
  
  }
dismiss(){
  this.viewCtrl.dismiss();
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad BarberReviewRatingPage');
  }

}
