import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { AlertController} from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
/**
 * Generated class for the SalonContactPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-salon-contact',
  templateUrl: 'salon-contact.html',
})
export class SalonContactPage {
   name;
   email;
   countrycode;
   number;
   title;
   message;
    http;
    data;
    usertype;
         contactform:FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,http:Http, public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,public formBuilder: FormBuilder) {
  	this.http=http;
  	this.data={}
  	this.usertype=localStorage['user_type']
     let emailRegex =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      var name = /^[a-zA-Z ]{2,30}$/;
    
        this.contactform = formBuilder.group({
        
       name: ['', Validators.compose([Validators.pattern(name),Validators.required])],

        email: ['', Validators.compose([
         Validators.pattern(emailRegex), Validators.required])],

         countrycode: ['', Validators.compose([Validators.required])],

          number: ['', Validators.compose([Validators.required])],


           title: ['', Validators.compose([Validators.pattern(name),Validators.required])],

     message:['', Validators.compose([Validators.pattern(name),Validators.required])],
      


    });
  	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalonContactPage');
  }

ngOnInit(){

}

 saloncontact(){
    let loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
       loader.present();

    var link='http://18.220.97.146/barber/WebServices/contactUs.json';
    var data=JSON.stringify({


        usertype:this.usertype,
        name:this.name,
        email:this.email,
        countrycode:this.countrycode,
        contactnumber:this.number,
        messagetitle:this.title,
        yourmessage:this.message,
 
              
    });


    this.http.post(link,data)
    .map(res => res.json())
     .subscribe(data=>{

         loader.dismiss();
       this.data = data;
         console.log("response"+JSON.stringify(this.data.message));

               
       if(this.data.status==1){
          this.name='';
      this.email='';
      this.countrycode='';
      this.number='';
      this.title='';
      this.message='';
          let alert = this.alertCtrl.create({
                    title: 'Thank You!',
                    subTitle: 'Your message has been sent, We will contact you shortly!',
                    buttons: ['OK']
                    });
                    alert.present();  
                     this.usertype='';
     
     
   
       }

       else if(this.data.status==0){
          let alert = this.alertCtrl.create({
         title: 'Alert!',
        subTitle: 'Input Field Required.',
        buttons: ['OK']
         });
          alert.present();
         

       }
     });
    
  }
}
