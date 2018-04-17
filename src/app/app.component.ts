import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import {Login} from '../pages/login/login';
import {SalonHome} from '../pages/salon-home/salon-home';
import {AboutusUser} from  '../pages/aboutus-user/aboutus-user';
import {UserProfile} from '../pages/user-profile/user-profile';
import {UserAppointmentPage} from '../pages/user-appointment/user-appointment';
import {ContactUsPage} from '../pages/contact-us/contact-us';
import {FaqPage} from '../pages/faq/faq';
import {AccountSectionPage} from '../pages/account-section/account-section';
import {SalonRegisterationPage} from '../pages/salon-registeration/salon-registeration';
import {SalonOwnerHomePage} from '../pages/salon-owner-home/salon-owner-home';
import {SalonOwnerProfilePage} from '../pages/salon-owner-profile/salon-owner-profile';
import {TermsOfservicePage} from '../pages/terms-ofservice/terms-ofservice';
import {SalonBarberListPage} from '../pages/salon-barber-list/salon-barber-list';
import {SalonViewuserProfilePage} from '../pages/salon-viewuser-profile/salon-viewuser-profile';
import {SalonBarberProfilePage} from '../pages/salon-barber-profile/salon-barber-profile';
import {SalonAssignBarberToUserPage} from '../pages/salon-assign-barber-to-user/salon-assign-barber-to-user';
import {SalonServicePage} from '../pages/salon-service/salon-service';
import {SalonAvailabilityPage} from '../pages/salon-availability/salon-availability';
import { Events } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { AlertController } from 'ionic-angular';
import {BarberServicePage} from '../pages/barber-service/barber-service';
import {HowItWorksPage} from '../pages/how-it-works/how-it-works';
import {BarberHomePage} from '../pages/barber-home/barber-home';
import {BarberAvailabilityPage} from '../barber-availability/barber-availability';
import {PayemntUserPage}from '../pages/payemnt-user/payemnt-user';
import {PaymentSucessPage} from '../pages/payment-sucess/payment-sucess';
import {NewPage} from '../pages/new/new';
import {ENV} from './env';
import {SViewSchedulePage} from '../pages/s-view-schedule/s-view-schedule';
import {SalonPaymentHistoryPage} from '../pages/salon-payment-history/salon-payment-history';
import {CustomerPaymentHistoryPage} from '../pages/customer-payment-history/customer-payment-history';
import {SalonEarningsPage} from '../pages/salon-earnings/salon-earnings';
import {StripePaymentPage} from '../pages/stripe-payment/stripe-payment';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  usertype;
  name;
  auth;
  img;
  img1;
   // rootPage:any = NewPage;
    @ViewChild(Nav) nav: Nav;

  rootPage;


 pages: Array<{title: string, component: any, logo: string}>;
salon:  Array<{title: string, component: any, logo: string}>;
barber:  Array<{title: string, component: any, logo: string}>;
  constructor(public alertCtrl: AlertController,private socialSharing: SocialSharing, public events: Events,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
  events.subscribe('user:created', (user,fname, autth,user_img,log?) => {
    if(log){

     console.log('welcome '+log+''+user+''+fname);
 this.img=log;
 localStorage['img']=log;
  this.name=fname;

    }
else{
    console.log('Welcome', user+'name'+fname);
 // alert('Welcome'+user_img);
     this.usertype=user;
     this.name=fname;
     this.auth=autth;
      this.img1=user_img;
     if(this.img1==null || this.img1=='null'){
       this.img='null';
     }
     else{
       this.img=user_img;
     }
    
   }

  });
  

    this.pages = [
    
     // { title: 'Paysuccess', component: 'PaymentSucessPage', logo: 'home'},
      { title: 'HOME', component: SalonHome, logo: 'home'},
       { title: 'MY APPOINTMENTS', component: 'UserAppointmentPage', logo: 'home'},
        // { title: 'ACCOUNT SECTION', component: 'AccountSectionPage', logo: 'home'},
        { title: 'PAYMENT', component: 'PayemntUserPage', logo: 'home'},
        {title:'ORDER HISTORY',component:CustomerPaymentHistoryPage,logo:'home'},
         { title: 'HOW IT WORKS', component: 'HowItWorksPage', logo: 'home'},
          { title: 'FAQ', component: 'FaqPage', logo: 'home'},
        { title: 'CONTACT US', component: 'ContactUsPage', logo: 'home'},
        // {title:'Stripe', component:'StripePaymentPage',logo:'home'}
            //  { title: 'ABOUT US', component: 'AboutusUser', logo: 'home'},
      ]
      this.salon=[
       { title: 'HOME', component: SalonOwnerHomePage, logo: 'home'},
        // { title: 'MY AVAILABILITY', component: 'SalonAvailabilityPage', logo: 'home'},
         // { title: 'MY BARBERS', component: 'SalonBarberListPage', logo: 'home'},
         { title:'MY SERVICES', component:'SalonServicePage',  logo: 'home'},
         {title :'OUR CUSTOMER', component:'SalonAppointmentPage',logo:'home'},
         {title:'ORDER HISTORY', component:SalonPaymentHistoryPage,logo:'home'},
         // {title:'MY EARNINGS', component:SalonEarningsPage,logo:'home'}
         
      ]

       this.barber=[
       { title: 'HOME', component: BarberHomePage, logo: 'home'},
        { title: 'MY CUSTOMER', component: 'BarberAppointmentPage', logo: 'home'},
         // { title:'MY SERVICES', component:BarberHomePage,  logo: 'home'},
         
      ]

    if( localStorage['authenicate']=='user'){
       this.rootPage = SalonHome;
        this.usertype=0;
         this.auth='true';
          this.img=localStorage['img'];
         this.name=localStorage['full_name'];

    }
   else if(localStorage['authenicate']=='salon'){
      this.rootPage=SalonOwnerHomePage;
       this.usertype=1;
        this.auth='true';
         this.img=localStorage['img'];
         this.name=localStorage['full_name'];
    }
     else if(localStorage['authenicate']=='barber'){
      this.rootPage=BarberHomePage;
       this.usertype=2;
        this.auth='true';
         this.img=localStorage['img'];
         this.name=localStorage['full_name'];
    }
    else if(localStorage['authenicate']!='salon' || localStorage['authenicate']!='user' || localStorage['authenicate']!='barber' ){
      this.rootPage=HomePage;
    }
   

    platform.ready().then(() => {    
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  login(){
    this.nav.setRoot('Login');
  }
   openPage(page) {

    this.nav.setRoot(page.component);
      
  }
  salonPage(page){
    this.nav.setRoot(page.component);

  }
  share(){
        var mes = null;
        var title = 'SetCuts App';
         var message= 'Share via Setcuts app';
         var img='http://europa.promaticstechnologies.com/barber/img/logo.png';
        var path = 'https://www.dropbox.com/s/gnn9lgr971uatd8/SetCuts%4018_Aug_17.apk?dl=0';
         this.socialSharing.share(message, title, img, path)
            .then(() => {}).catch(() => {

            })

    
  }
  edit_page(){
     this.nav.setRoot('UserProfile');
  }
  edit_Profile_Salon(){
    this.nav.setRoot('SalonOwnerProfilePage');
  }
  edit_Profile_barber(){
    this.nav.setRoot('SalonBarberProfilePage')
  }
  logout(){
delete localStorage['user_id']
    let confirm = this.alertCtrl.create({
      title: 'Alert!',
      message: 'Are you sure want to Logout?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');

          }
        },
        {
          text: 'Agree',
          handler: () => {
                 this.auth='false';
                delete localStorage['authenicate'];
                delete localStorage['user_type'];
                delete localStorage['count'];
                delete localStorage['salon_under_barber_id'];
                delete localStorage['salon_id'];
                delete localStorage['barber_id'];
                delete localStorage['user_id'];
                delete localStorage['role_rights'];
                delete localStorage['flag'];
                delete localStorage['notification'];

            console.log('Agree clicked');
           
    this.nav.push(HomePage);
          }
        }
      ]
    });
    confirm.present();
  }
}

