import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ServicesProvider} from '../../providers/services/services';
/**
 * Generated class for the BarberAboutUsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-barber-about-us',
  templateUrl: 'barber-about-us.html',
})
export class BarberAboutUsPage {
fulldata
aboutus_image
description
  constructor( public serviceProvider:ServicesProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarberAboutUsPage');
  }
  ngOnInit() {
          this.serviceProvider.About_us()
.subscribe(data  =>{ 
          this.fulldata = data.data;
          this.aboutus_image=this.fulldata.aboutus_image;
          this.description=this.fulldata.description;
                    console.log('aboutus'+JSON.stringify(this.fulldata));
        }),
        error  => {}

    }
}
