import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController} from 'ionic-angular';
import {
    DomSanitizer
} from "@angular/platform-browser";
import { Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';
/**
 * Generated class for the BarberPreviousworkimgPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-barber-previousworkimg',
  templateUrl: 'barber-previousworkimg.html',
})
export class BarberPreviousworkimgPage {
	@ViewChild(Slides) slides: Slides;
img;
image
full_img
index
b;
full_img2;
  constructor(private domSanitizer: DomSanitizer,public viewCtrl:ViewController, public navCtrl: NavController, public navParams: NavParams) {
this.img=this.navParams.get('img');

this.b=this.navParams.get('b');
if(this.b==1){
	this.full_img=this.navParams.get('full_img');
}
else{
	this.full_img2=this.navParams.get('full_img');
}
this.index=this.navParams.get('index');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarberPreviousworkimgPage');
  }
  getSafeUrl2(url: any) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
    }
    getSafeUrl(url:any){
    	       return this.domSanitizer.bypassSecurityTrustResourceUrl('http://18.220.97.146/barber/img/barberpreviousworkimage/' + url);
    }
dismiss(){
  this.viewCtrl.dismiss();
}
}
