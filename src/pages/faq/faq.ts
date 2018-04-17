import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {ServicesProvider} from '../../providers/services/services';
/**
 * Generated class for the FaqPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-faq',
  templateUrl: 'faq.html',
})
export class FaqPage {
faq;
answer;
count=0;
posts
http
data
  constructor(public serviceProvider:ServicesProvider,public navCtrl: NavController, public navParams: NavParams,  public alertCtrl: AlertController,public loadingCtrl: LoadingController,  http: Http) {
    
    this.http=http;
    this.data={}
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FaqPage');
  }
question(i){
	this.count++;
	if(this.count%2!=0){
		this.answer=i;
	}
	else{
		this.answer='p';
	}
}
ngOnInit(){
   
        this.serviceProvider.FAQ()
         .subscribe(data  =>{ 
    this.faq = data.faqinfo;
        }),
        error  => {}

    }
}