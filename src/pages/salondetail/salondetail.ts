import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import {PickDateUserPage} from '../pick-date-user/pick-date-user';
import {UserBarberListPage} from '../user-barber-list/user-barber-list';
import { LoadingController } from 'ionic-angular';
import { AlertController} from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
 declare var google;
 import {Observable} from 'rxjs/Rx';
 import {ServicesProvider} from '../../providers/services/services';
  import { CallNumber } from '@ionic-native/call-number';
 import {Showpath} from '../showpath/showpath';
 import { SocialSharing } from '@ionic-native/social-sharing';
/**
 * Generated class for the Salondetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@IonicPage()
@Component({
    selector: 'page-salondetail',
    templateUrl: 'salondetail.html',
})
export class Salondetail {
    category;
    detail;
    address;
    review;
    image;
    background
    images;
    fulldata;
    salon_id;
    myArry: any;
    img0;
    http;
    data;
    favstatus
    stat
    fav
    latitude
    longitude
    map
    markers = [];
    clr;
    showcard;
    content;
    rating_text;
    date;
    rating_count;
    first;
    second;
    third;
    forth;
    fifth;
    count
    average
    avgrating
    simple_Data
    salon_Check_booking
salon_booking_user_status
    phone_num;
    business_salon_email;
    nobarber
posts
full_averagerating
post
    //
    constructor(private socialSharing: SocialSharing, private callNumber: CallNumber,public serviceProvider: ServicesProvider, public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public alertCtrl: AlertController,
        public loadingCtrl: LoadingController, http: Http) {
       this.latitude = parseInt(localStorage['lat']);
this.longitude = parseInt(localStorage['lng']);
localStorage['salon_lat'] = this.latitude;
localStorage['salon_lng'] = this.longitude
this.average = this.navParams.get('average');
this.simple_Data = this.navParams.get('simple_Data');
// this.business_salon_email=this.navParams.get('business_salon_email');
localStorage['Bussiness_salon_email'] = this.simple_Data.Bussiness_salon_email;
this.phone_num = this.simple_Data.phonenumber;
this.http = http;
this.data = {};
this.data.response = '';
this.detail = 'Services';
this.clr = 'withoutmap';
this.salon_id = this.navParams.get('id');
this.fulldata = this.navParams.get('full_data');

this.first = 'false';
this.second = 'false';
this.third = 'false';
this.forth = 'false';
this.fifth = 'false';
for (var p of this.average) {
    if (p.salon_id == this.salon_id) {
        console.log(p.avgrating);
        this.avgrating = p.avgrating;
    }

}

}

call() {
    this.callNumber.callNumber(this.phone_num, true)
        .then(() => console.log('Launched dialer!'))
        .catch(() => console.log('Error launching dialer'));
}
direction() {
    this.navCtrl.push('Showpath');
}
share() {
    var mes = null;
    var title = 'SetCuts App';
    var message = 'Share via Setcuts app';
    var img = 'http://18.220.97.146/barber/img/logo.png';
    var path = 'https://www.dropbox.com/s/gnn9lgr971uatd8/SetCuts%4018_Aug_17.apk?dl=0';
    this.socialSharing.share(message, title, img, path)
        .then(() => {}).catch(() => {

        })


}
ionViewDidLoad() {
    console.log('ionViewDidLoad Salondetail');
}


// --------------------------------mukul 16-3-2018------------------------

bookform(salon_id, service_id) {
    // alert(service_id)
    // this.navCtrl.push('UserBarberListPage', {
    //     salonid: salon_id,
    //     service_id: service_id
    // })

    let loading = this.loadingCtrl.create({content: 'Please wait...'});
        Observable.fromPromise(loading.present())
        .flatMap(data => this.serviceProvider.userbarberlist(salon_id))
        .subscribe(data =>
          loading.dismiss().then(() =>{ 
            this.post=data;
            if(this.post.message=="No barber in this salon"){
              this.nobarber='true';
            }
            else{
              this.posts=this.post.barberinfo;
              this.full_averagerating=this.post.averagerating;
              this.nobarber='false';
              this.navCtrl.push('UserBarberProfilePage',{fulldata:this.posts,barberdata:this.posts[0],serviceid:service_id,average:this.full_averagerating,salon_id:salon_id});
            }
        console.log("barber info "+JSON.stringify(this.posts));
          }),
          error =>
          loading.dismiss().then(() => {})
          );
        ;
}

// ------------------------------------------------------------------------------------

ngAfterViewInit() {

}

    


  



salonmarker(a, b) {

    if (a && b) {

        let marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: {
                lat: a,
                lng: b
            },

        });
    }
}
ngOnInit() {
    localStorage['flag'] = 1;
    this.favstat();
    this.Review_rating();
    this.salon_booking_user_check();

}
salon_booking_user_check() {
    var user_id = localStorage['user_id'];
    this.serviceProvider.salon_booking_user_check(this.salon_id, user_id)
        .subscribe(data => {
            this.salon_Check_booking = data;
            this.salon_booking_user_status = this.salon_Check_booking.barber_status;
            console.log(JSON.stringify(this.salon_booking_user_status));
        }),
        error => {}
}
Review_rating() {

    this.serviceProvider.Review_rating(this.salon_id)
        .subscribe(data => {
            this.review = data.customerinfo;
            console.log('review' + this.review);
        }),
        error => {}
}
favstat() {
    var a = localStorage['user_id']

    this.serviceProvider.favstatus(a, this.salon_id)
        .subscribe(data => {
            this.favstatus = data;
            if (this.favstatus.status == 'active') {

                this.stat = 1;
            } else {

                this.stat = 0;
            }
        }),
        error => {}
}

addfav() {
    var a = localStorage['user_id'];
    let loading = this.loadingCtrl.create({
        content: 'Please wait...'
    });
    Observable.fromPromise(loading.present())
        .flatMap(data => this.serviceProvider.addtofav(a, this.salon_id))
        .subscribe(data =>
            loading.dismiss().then(() => {
                this.fav = data;
                if (this.fav.message == 'Add to Favourite') {

                    let alert = this.alertCtrl.create({
                        title: 'Added in Favourite!',
                        subTitle: 'You have added this salon  in your favourite list!',
                        buttons: ['OK']
                    });
                    alert.present();
                    this.stat = 1;

                } else if (this.fav.message == 'Remove To Favourite') {

                    let alert = this.alertCtrl.create({
                        title: 'Removed From Favourite!',
                        subTitle: 'This salon is not longer available in your favourite list!',
                        buttons: ['OK']
                    });
                    alert.present();
                    this.stat = 0;

                }
            }),
            error =>
            loading.dismiss().then(() => {})
        );

}

demo() {

    if (this.detail == 'Map') {
        this.clr = 'map4';

        let mapEle = document.getElementById('map3');
        this.map = new google.maps.Map(mapEle, {

            center: {
                lat: this.latitude,
                lng: this.longitude
            },
            zoom: 11,
            mapTypeId: google.maps.MapTypeId.ROADMAP

        });

        google.maps.event.addListenerOnce(this.map, 'idle', () => {
            mapEle.classList.add('show-map');
            google.maps.event.trigger(mapEle, 'resize');
        });
        this.salonmarker(this.latitude, this.longitude)
    } else if (this.detail == 'Services') {

        this.clr = 'withoutmap';
    } else if (this.detail == 'Reviews') {

        if (this.salon_booking_user_status == "yes") {
            this.showcard = 'true';
        }
        this.clr = 'withoutmap';

        this.background = 'blur-filter';
    }


}
close_rating() {
    this.showcard = 'false';
}
submit_rating() {
    if(this.rating_text=='' ||this.rating_text=="" || this.rating_text==undefined || this.rating_text=='undefined'){
     let alert = this.alertCtrl.create({
                        title: 'Alert!',
                        subTitle: 'Input field required!',
                        buttons: ['OK']
                    });
                    alert.present(); 
      this.showcard = 'false';
    }else{
         this.showcard = 'false';
    if (this.count == undefined || this.count == 'undefined') {
        this.rating_count = 0;
    } else {
        this.rating_count = this.count;
    }

    var a = localStorage['user_id'];
    let loading = this.loadingCtrl.create({
        content: 'Please wait...'
    });
    Observable.fromPromise(loading.present())
        .flatMap(data => this.serviceProvider.addrating(a, this.rating_text, this.rating_count, this.salon_id))
        .subscribe(data =>
            loading.dismiss().then(() => {
                // this.content=data
                this.ngOnInit();
                this.rating_text = '';
                this.first = 'false';
                this.second = 'false';
                this.third = 'false';
                this.forth = 'false';
                this.fifth = 'false';
            }),
            error =>
            loading.dismiss().then(() => {
                this.ngOnInit();
            })
        );
    }
   
}
add(id) {
    if (id == 1) {
        this.count = id;

        this.first = 'true';
    } else if (id == 2) {
        this.count = id;
        this.first = 'true';
        this.second = 'true';
    } else if (id == 3) {
        this.count = id;
        this.first = 'true';
        this.second = 'true';
        this.third = 'true';
    } else if (id == 4) {;
        this.count = id;
        this.first = 'true';
        this.second = 'true';
        this.third = 'true';
        this.forth = 'true';

    } else if (id == 5) {
        this.count = id;
        this.first = 'true';
        this.second = 'true';
        this.third = 'true';
        this.forth = 'true';
        this.fifth = 'true';

    }

}
sub(id) {
    if (id == 1) {
        this.count = id - 1;

        this.first = 'false';
        this.second = 'false';
        this.third = 'false';
        this.forth = 'false';
        this.fifth = 'false';
    } else if (id == 2) {
        this.count = id - 1;
        this.second = 'false';
        this.third = 'false';
        this.forth = 'false';
        this.fifth = 'false';

    } else if (id == 3) {
        this.count = id - 1;
        this.third = 'false';
        this.forth = 'false';
        this.fifth = 'false';

    } else if (id == 4) {;
        this.count = id - 1;
        this.forth = 'false';
        this.fifth = 'false';

    } else if (id == 5) {
        this.count = id - 1;
        this.fifth = 'false';

    }

}

}

