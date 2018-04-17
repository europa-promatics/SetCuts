import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-about-welcome',
  templateUrl: 'about-welcome.html',
})
export class AboutWelcome {
fulldata;
d;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
this.d=this.navParams.get('full_data');
if(this.d==undefined || this.d=='undeifned' ){
	}
	else{
		 this.fulldata = this.navParams.get('full_data');

	}
 console.log(JSON.stringify(this.fulldata));
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutWelcome');
  }

}
