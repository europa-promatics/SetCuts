import {Component}from '@angular/core';
import {IonicPage,NavController,NavParams}from 'ionic-angular';
import {PickDateUserPage}from '../pick-date-user/pick-date-user';
import {MenuController}from 'ionic-angular/index';
import {ModalController}from 'ionic-angular';
import {LoadingController}from 'ionic-angular';
import {AlertController}from 'ionic-angular';
import {Observable}from 'rxjs/Rx';
import {ServicesProvider}from '../../providers/services/services';
import {BarberReviewRatingPage}from '../barber-review-rating/barber-review-rating';
import {BarberPreviousworkimgPage}from '../barber-previousworkimg/barber-previousworkimg';
import {ToastController}from 'ionic-angular';
import {SocialSharing}from '@ionic-native/social-sharing';

/**
 * Generated class for the UserBarberProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-user-barber-profile',
    templateUrl: 'user-barber-profile.html',
})
export class UserBarberProfilePage {
    barberid;
    barbername;
    barberemail;
    service;
    imagedata;
    Choose_slot;
    service_id;
    showcard;
    first
    second
    third
    forth
    fifth
    count
    rating_count
    rating_text
    review
    reviews
    review_count
    fulldata;
    img
    phone
    barberpreviuswork;
    barber_status
    average
    avgrating
    barber_Check_booking
    barber_booking_user_status
    about_barber
    barber_prev_img;
    instagram;
    salon_id;
    Bussiness_barber_email;
    constructor(private menu: MenuController, private sharingVar: SocialSharing, public toastCtrl: ToastController, public serviceProvider: ServicesProvider, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
        this.barberid = this.navParams.get('id')
        this.average = this.navParams.get('average');
        this.fulldata = this.navParams.get('barberdata');
        this.service_id = this.navParams.get('serviceid');
        if (this.fulldata) {
            this.barberid = this.fulldata.id;
            this.barbername = this.fulldata.fullname;
            this.barberemail = this.fulldata.email;
            this.service = this.fulldata.service;
            this.img = this.fulldata.barber_image;
            this.phone = this.fulldata.phonenumber;
            this.barber_status = this.fulldata.barber_status;
            this.about_barber = this.fulldata.about_barber;
            this.instagram = this.fulldata.instagram;
            this.barberpreviuswork = this.fulldata.barberpreviousworkimage;
            this.salon_id = this.navParams.get('salon_id');
        }
        for (var a of this.average) {
            if (this.barberid == a.barber_id) {
                console.log('barberid' + this.barberid);
                console.log(a.barber_id + "" + a.avgrating);
                this.avgrating = a.avgrating;
            }
        }
        this.showcard = 'false';
        this.first = 'false';
        this.second = 'false';
        this.third = 'false';
        this.forth = 'false';
        this.fifth = 'false';
        this.imagedata = [{
                image_name: 'http://18.220.97.146/barber/app_link/img/images3.png'
            },
            {
                image_name: 'http://18.220.97.146/barber/app_link/img/images1.png'
            }, {
                image_name: 'http://18.220.97.146/barber/app_link/img/images2.png'
            }, {
                image_name: 'http://18.220.97.146/barber/app_link/img/salon_image.jpg'
            },
            {
                image_name: 'http://18.220.97.146/barber/app_link/img/photogallery-big-1.jpg'
            },
            {
                image_name: 'http://18.220.97.146/barber/app_link/img/shutterstock_268415039.jpg'
            },
            {
                image_name: 'http://18.220.97.146/barber/app_link/img/CrncgdzXgAAPvAe.jpg:large.jpeg'
            },
            {
                image_name: 'http://18.220.97.146/barber/app_link/img/photogallery-big-1.jpg'
            },
            {
                image_name: 'http://18.220.97.146/barber/app_link/img/shutterstock_268415039.jpg'
            },
            {
                image_name: 'http://18.220.97.146/barber/app_link/img/CrncgdzXgAAPvAe.jpg:large.jpeg'
            }
        ]
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad UserBarberProfilePage');
    }

    ionViewDidEnter() {
        this.menu.swipeEnable(false, 'nav');
    }

    share_insta() {
        var msg = this.instagram;
        var instaimg = "http://18.220.97.146/barber/img/barberimage/" + this.img;
        this.sharingVar.shareViaInstagram(msg, instaimg).then(() => {}).catch(() => {
            let toast = this.toastCtrl.create({
                message: 'Something went wrong please try again later!',
                duration: 2000,
                position: "bottom",
            });
            toast.present(toast);
        });
    }

    share_instagram() {
        let toast = this.toastCtrl.create({
            message: 'Barber link has been copied to clipboard you can paste on instagram!',
            duration: 2000,
            position: "bottom",
        });
        toast.present(toast);
        var message = this.instagram;
        if (this.img == null || this.img == 'null' || this.img == '') {
            var image = "http://18.220.97.146/barber/img/barberimage/U9Prra.image.jpg";
            this.go(message, image);
        }
        else {
            var image = "http://18.220.97.146/barber/img/barberimage/" + this.img;
            this.go(message, image);
        }
    }

    go(message, image) {
        this.sharingVar.shareViaInstagram(message, image).then(() => {}).catch(() => {});
    }

    share_instagram1() {
        var appName = "instagram";
        var message = 'message';
        var subject = "hello";
        var url = this.instagram;
        var image = "http://18.220.97.146/barber/img/barberimage/" + this.img;
        this.sharingVar.canShareVia(appName, message, subject, image, url).then(() => {}).catch(() => {});
    }

    bookbarber() {
        // if (this.barber_status == 1) {
        // let modal = this.modalCtrl.create('PickDateUserPage', {
        //   barber_id:this.barberid,
        //   service_id:this.service_id,
        //   salon_id:this.salon_id
        // });
        // modal.present();
        this.navCtrl.push('PickDateUserPage', {
            barber_id: this.barberid,
            service_id: this.service_id,
            salon_id: this.salon_id
        })
        // }
        //  else {
        //   let toast = this.toastCtrl.create({
        //     message: 'This barber is not available now!',
        //     duration: 2000,
        //     position: "bottom",
        //   });
        //   toast.present(toast);
        // }
    }

    rating() {
        if (this.barber_booking_user_status == "yes") {
            this.showcard = 'true';
        }
        else {
            this.showcard = 'false';
        }
    }

    add(id) {
        if (id == 1) {
            this.count = id;
            this.first = 'true';
        }
        else if (id == 2) {
            this.count = id;
            this.first = 'true';
            this.second = 'true';
        }
        else if (id == 3) {
            this.count = id;
            this.first = 'true';
            this.second = 'true';
            this.third = 'true';
        }
        else if (id == 4) {;
            this.count = id;
            this.first = 'true';
            this.second = 'true';
            this.third = 'true';
            this.forth = 'true';
        }
        else if (id == 5) {
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
        }
        else if (id == 2) {
            this.count = id - 1;
            this.second = 'false';
            this.third = 'false';
            this.forth = 'false';
            this.fifth = 'false';
        }
        else if (id == 3) {
            this.count = id - 1;
            this.third = 'false';
            this.forth = 'false';
            this.fifth = 'false';
        }
        else if (id == 4) {;
            this.count = id - 1;
            this.forth = 'false';
            this.fifth = 'false';
        }
        else if (id == 5) {
            this.count = id - 1;
            this.fifth = 'false';
        }
    }

    // submit_rating() {
    //   var flag=1;
    //   this.showcard = 'false';
    //   if (this.count == undefined || this.count == 'undefined') {
    //     this.rating_count = 0;
    //   } else {
    //     this.rating_count = this.count;
    //   }
    //   var user_id = localStorage['user_id'];
    //   let loading = this.loadingCtrl.create({
    //     content: 'Please wait...'
    //   });
    //   Observable.fromPromise(loading.present())
    //     .flatMap(data => this.serviceProvider.addrating_barber(user_id,this.barberid,this.rating_text,this.rating_count))
    //     .subscribe(data =>
    //       loading.dismiss().then(() => {
    //         // this.content=data
    //         this.ngOnInit();
    //         this.first = 'false';
    //         this.second = 'false';
    //         this.third = 'false';
    //         this.forth = 'false';
    //         this.fifth = 'false';
    //         this.rating_text = '';
    //       }),
    //       error =>
    //       loading.dismiss().then(() => {})
    //     );
    // }
    // close_rating() {
    //   this.showcard = 'false';
    // }

    view() {
        let modal = this.modalCtrl.create('BarberReviewRatingPage', {
            review_data: this.review
        });
        modal.present();
    }

    ngOnInit() {
        this.review_rating();
        this.barber_booking_user_check();
    }

    barber_booking_user_check() {
        var user_id = localStorage['user_id'];
        this.serviceProvider.barber_booking_user_check(this.barberid, user_id)
            .subscribe(data => {
                this.barber_Check_booking = data;
                this.barber_booking_user_status = this.barber_Check_booking.barber_status;
                console.log(JSON.stringify(this.barber_booking_user_status));
            }),
            error => {}

    }

    review_rating() {
        this.serviceProvider.barbergetReview_rating(this.barberid)
            .subscribe(data => {
                this.reviews = data;
                this.review = this.reviews.customerinfo;
                this.review_count = this.reviews.totalcustomer;
                console.log(JSON.stringify(this.review));
            }),
            error => {}

    }

    img1(img, b, full_img, i) {

        let modal = this.modalCtrl.create('BarberPreviousworkimgPage', {
            img: this.barber_prev_img,
            full_img: full_img,
            index: i,
            b: b
        });
        modal.present();
    }
    
    book_friend() {}
}