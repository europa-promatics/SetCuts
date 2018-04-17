import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
    DomSanitizer
} from "@angular/platform-browser";

/**
 * Generated class for the SucesspagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sucesspage',
  templateUrl: 'sucesspage.html',
})
export class SucesspagePage {
   link:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private domSanitizer:DomSanitizer) {
   this.link=this.navParams.get('link')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SucesspagePage');
  }
  getSafeUrl() {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(this.link);
    }

}
