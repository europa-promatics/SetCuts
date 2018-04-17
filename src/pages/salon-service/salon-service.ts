import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the SalonServicePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-salon-service',
  templateUrl: 'salon-service.html',
})
export class SalonServicePage {
items;
Array=[];
   http;
    data;
    content;
    service
    value
charges
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,public loadingCtrl: LoadingController,  http: Http) {
  	
      this.http = http;
        this.data = {};
        this.data.response = '';
//         this.items=[{service:'service1',  charge:'$150'},
// {service:'service2', charge:'$150'},
// {service:'service3', charge:'$150'},
// {service:'service4', charge:'$150'},
// {service:'service5', charge:'$150'}

// ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalonServicePage');
  }
  itemSelected(item: string) {
    console.log("Selected Item", item);
  }
  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'ADD SERVICES',
      message: "Enter a name of service or charges.",
      inputs: [
        {
          name: 'Service_name',
          placeholder: 'service name',

        },
        {
          name: 'Charges',
          placeholder: 'Charges',

        },
      ],

      buttons: [
        {
          text: 'Cancel',
          handler: data => {
        
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log(data);
            console.log(data.Charges)
            console.log(data.Service_name);
            console.log('Saved clicked');
            this.service=data.Service_name;
            this.charges=data.Charges;
            this.Array=data;

            console.log(this.Array);
            
              if(this.service=="" || this.charges==""){
     
             let alert = this.alertCtrl.create({
                        title: 'Alert',
                        subTitle: 'Please Fill all Fields',
                        buttons: ['OK']
                    });
                    alert.present();
     
  }


  else{
var a=this.charges;
var b=a.includes("$");
console.log('bbbbbbbbbbbbbbb'+b);
if(b==true || b=='true'){
  let alert = this.alertCtrl.create({
                        title: 'Alert',
                        subTitle: 'Dollar cannot be accepted',
                        buttons: ['OK']
                    });
                    alert.present(); 
}
else{
  this.Service(this.service,this.charges);
}
    // this.Service(this.service,this.charges);
  }


          }
        }
      ]
    });
    prompt.present();
  }

    Service(service,charges){
        let loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();
        var link = 'http://18.220.97.146/barber/WebServices/salonServices.json';
        var data = JSON.stringify({
            salon_id:localStorage['salon_id'],
            salon_service:service, 
            charge: charges     
        });
        this.http.post(link, data)
        .subscribe(data => {
            loader.dismiss();
            this.data.response = data;
            console.log(this.data.response);
            if (JSON.parse(data._body).message == "Data Saved successfully") {
                let alert = this.alertCtrl.create({
                    title: 'Thank You!',
                    subTitle: 'Service added sucessful',
                    buttons: ['OK']
                });
                alert.present();
                this.ngOnInit();
           }
           else{
             let alert = this.alertCtrl.create({
                    title: 'Alert!',
                    subTitle: 'Something went wrong!',
                    buttons: ['OK']
                });
                alert.present();
           }            
            error => {}            
        });
    }

    ngOnInit() {
        let loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();
        var link = 'http://18.220.97.146/barber/WebServices/getSalonServices.json';
        var data = JSON.stringify({
            salon_id:localStorage['salon_id'],     
        });


        this.http.post(link, data).subscribe(data => {

            // -------------mukul 15-3-2018------------------------
            console.log(JSON.parse(data._body).status);
            data=(JSON.parse(data._body))
            loader.dismiss();
            if (data.status=="true") {
                this.value='false';
                this.items=data.serviceinfo;
            }else{
                this.value='true';
            }
            // -------------mukul 15-3-2018-----------------------
            // if(JSON.parse(data._body).message=="There is no service inside this salon"){
            //     console.log('item null');
            //     this.value='true';
            // }
            // else{
            //     this.items = JSON.parse(data._body.serviceinfo);
            //     console.log(this.items);
            //     this.value='false';
            // }
            // this.data.response = data;
        }, error => {
            console.log(error);
        });
    }


  delete(service_id,salon_id){
 
       let loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();
        var link = 'http://18.220.97.146/barber/WebServices/deleteSalonService.json';
 var data = JSON.stringify({
      salon_id:salon_id,
      id: service_id,   
        });
        this.http.post(link, data)
            .subscribe(data => {
                loader.dismiss();
                // this.items = JSON.parse(data._body);
                 console.log(this.items);
                 this.ngOnInit();

                this.data.response = data;
            }, error => {
                console.log(error);
            });

  }
}
