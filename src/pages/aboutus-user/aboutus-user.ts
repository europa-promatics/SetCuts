import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AboutWelcome} from '../about-welcome/about-welcome';
import {AboutService} from '../about-service/about-service';
import { AlertController} from 'ionic-angular';
import { LoadingController, MenuController } from 'ionic-angular';
import { Http } from '@angular/http';
 import {Observable} from 'rxjs/Rx';
 import {ServicesProvider} from '../../providers/services/services';
/**
 * Generated class for the AboutusUser page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-aboutus-user',
  templateUrl: 'aboutus-user.html',
})
export class AboutusUser {
http;
    data;
    content;
  constructor(public serviceProvider: ServicesProvider,public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, public loadingCtrl: LoadingController,  http: Http, public alertCtrl: AlertController) {
    this.http = http;
        this.data = {};
        this.data.response = '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutusUser');
  }
welcomepage(){
	this.navCtrl.push('AboutWelcome',{full_data:this.content});
}
servicelist(){
	this.navCtrl.push('AboutService',{full_data:this.content});
}
  ngOnInit() {
          this.serviceProvider.About_us()
.subscribe(data  =>{ 
  if(data.message=="something Wrong"){

  }
  else{
     this.content = data.data;
                    console.log('aboutus'+this.content);
  }
         
        }),
        error  => {}

    }
}
