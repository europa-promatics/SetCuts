import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-about-service',
  templateUrl: 'about-service.html',
})


export class AboutService {
    items;
    fulldata;
    serv;
    lolo = []
    d;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.d=this.navParams.get('full_data');
if(this.d==undefined || this.d=='undeifned' ){
    }
    else{
         this.fulldata = this.navParams.get('full_data');

    }
 
        // var str = this.fulldata.service;
        // var splitted = str.split(" ", 1);
        this.items = [{
                service: 'Haircut'
            },
            {
                service: 'Beardtrim'
            },
            {
                service: 'EyeBrow Shaping'
            },
        ]
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad AboutService');
    }
    itemSelected(item: string) {
        console.log("Selected Item", item);
    }
}

