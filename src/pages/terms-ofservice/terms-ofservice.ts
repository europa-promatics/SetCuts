import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Observable} from 'rxjs/Rx';
import {ServicesProvider} from '../../providers/services/services';

/**
 * Generated class for the TermsOfservicePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-terms-ofservice',
  templateUrl: 'terms-ofservice.html',
})
export class TermsOfservicePage {
relationship
termsofservice
heading
content
privacypolicy
policyTitle
policydescription
  constructor(public serviceProvider:ServicesProvider, public navCtrl: NavController, public navParams: NavParams) {
  this.relationship="Terms";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TermsOfservicePage');
  }
  selectedtab(){
  }
    ngOnInit(){
      this.serviceProvider.TermsofService()
         .subscribe(data  =>{ 
         	this.termsofservice=data.termdata;
         	this.privacypolicy=data.policydata;
         	this.heading=this.termsofservice.heading;
         	this.content=this.termsofservice.content;
         	this.policyTitle=this.privacypolicy.title;
         	this.policydescription=this.privacypolicy.description;
        }),
        error  => {}
    }
}
