import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ServicesProvider} from '../../providers/services/services';
import {
    DomSanitizer
} from "@angular/platform-browser";

@IonicPage()
@Component({
  selector: 'page-how-it-works',
  templateUrl: 'how-it-works.html',
})
export class HowItWorksPage {
 // @ViewChild(Slides) slides: Slides;
 howitwork
 setter_slide;
  constructor(private domSanitizer: DomSanitizer,public serviceprovider:ServicesProvider, public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HowItWorksPage');
  }
   getSafeUrl(url: any) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl('http://18.220.97.146/barber/img/howitworksimg/' + url);
    }
ngOnInit(){
  this.serviceprovider.HowItWorks()
  .subscribe(data =>{
    this.howitwork=data;
    console.log("howitworks"+JSON.stringify(this.howitwork));
  }),
  error =>{

  }
}
}
