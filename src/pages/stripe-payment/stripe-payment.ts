import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Stripe } from '@ionic-native/stripe';
import { Http, Headers } from '@angular/http';
import {ServicesProvider} from '../../providers/services/services';
import { LoadingController,AlertController} from 'ionic-angular';
import {Observable} from 'rxjs/Rx';
import {SalonHome} from '../salon-home/salon-home';
/**
 * Generated class for the StripePaymentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-stripe-payment',
  templateUrl: 'stripe-payment.html',
})
export class StripePaymentPage {
	cardImage
	card: any = {
		number: '',
		expMonth: '',
		expYear: '',
		cvc: '',

	}
	montth: any
	datemonth: any;
	a
	status
	booking_id
salon_id
booking_charges
barber_id
service_id
	constructor(public alertCtrl: AlertController, public loadingCtrl: LoadingController, public serviceProvider: ServicesProvider, public navCtrl: NavController, public navParams: NavParams, private stripe: Stripe, public http: Http) {
		
		this.datemonth = [{
				month: "01"
			},
			{
				month: "02"
			},
			{
				month: "03"
			},
			{
				month: "04"
			},
			{
				month: "05"
			},
			{
				month: "06"
			},
			{
				month: "07"
			},
			{
				month: "08"
			},
			{
				month: "09"
			},
			{
				month: "10"
			},
			{
				month: "11"
			},
			{
				month: "12"
			}
		]

		this.montth = [
			{
				month: "2017",
				value: "17"
			},
			{
				month: "2018",
				value: "18"
			},
			{
				month: "2019",
				value: "19"
			},
			{
				month: "2020",
				value: "20"
			},
			{
				month: "2021",
				value: "21"
			},
			{
				month: "2022",
				value: "22"
			},
			{
				month: "2023",
				value: "23"
			},
			{
				month: "2024",
				value: "24"
			},
			{
				month: "2025",
				value: "25"
			},
			{
				month: "2026",
				value: "26"
			},
			{
				month: "2027",
				value: "27"
			},
			{
				month: "2028",
				value: "28"
			},
			{
				month: "2029",
				value: "29"
			},
			{
				month: "2030",
				value: "30"
			},
			{
				month: "2031",
				value: "31"
			},
			{
				month: "2032",
				value: "32"
			},
			{
				month: "2033",
				value: "33"
			},
			{
				month: "2034",
				value: "34"
			},
			{
				month: "2035",
				value: "35"
			},
			{
				month: "2036",
				value: "36"
			},
			{
				month: "2037",
				value: "37"
			},
			{
				month: "2038",
				value: "38"
			},
			{
				month: "2039",
				value: "39"
			},
			{
				month: "2040",
				value: "40"
			},
			{
				month: "2041",
				value: "41"
			},
			{
				month: "2042",
				value: "42"
			},
			{
				month: "2043",
				value: "43"
			},
			{
				month: "2044",
				value: "44"
			},
			{
				month: "2045",
				value: "45"
			},
			{
				month: "2046",
				value: "46"
			},
			{
				month: "2047",
				value: "47"
			},
			{
				month: "2048",
				value: "48"
			},
			{
				month: "2049",
				value: "49"
			},
			{
				month: "2050",
				value: "50"
			},
			{
				month: "2051",
				value: "51"
			},
			{
				month: "2052",
				value: "52"
			},

		]
		this.booking_id=this.navParams.get('booking_id');
        this.salon_id=this.navParams.get('salon_id');
        this.booking_charges=this.navParams.get('booking_charges');
        this.barber_id=this.navParams.get('booking_charges');
        this.service_id=this.navParams.get('service_id');
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad StripePaymentPage');
	}
	pay() {
		// alert(JSON.stringify(this.card));

		// var pulish_key = 'pk_test_FuxItpTrzmm5hi8MqmOCbFqO';
		var pulish_key='pk_live_KQwyqFAeTttFyqcLVluMJi3i';
		
		let loader = this.loadingCtrl.create({
			content: "Please wait..."
		});
		loader.present();
		this.stripe.setPublishableKey(pulish_key);
		this.stripe.createCardToken(this.card).then((token) => {
			loader.dismiss();
			this.fun(token)
		})
	}
	fun(token) {
		var booking_id = this.booking_id;
		var customer_id = localStorage['user_id'];
		var salon_id = this.salon_id;
		var amount = this.booking_charges;
		var description = "hello";
		let loading = this.loadingCtrl.create({
			content: 'Please wait...'
		});
		Observable.fromPromise(loading.present())
			.flatMap(data => this.serviceProvider.stripe_pay(token,booking_id,customer_id,salon_id,amount,description))
			.subscribe(data =>
				loading.dismiss().then(() => {
					this.a = data;
					this.status = this.a.status;
					if (this.status == 1) {
						let alert = this.alertCtrl.create({
							title: 'Thank you!',
							subTitle: 'Payment Successful',
							buttons: ['OK']
						});
						alert.present();
					
						this.navCtrl.setRoot(SalonHome);
					}
					else  {
						let alert = this.alertCtrl.create({
							title: 'Alert!',
							subTitle: 'Something went wrong!',
							buttons: ['OK']
						});
						alert.present();
						
					
					}
				}),
				error =>
				loading.dismiss().then(() => {
					let alert = this.alertCtrl.create({
						title: 'Error!',
						subTitle: 'Error' + error,
						buttons: ['OK']
					});
					alert.present();
				})
			);

	}

	cardCheck(a) {
		this.cardImage = this.cardd(a);

	}
	cardd(number) {

		
		var re = new RegExp("^4");
		if (number.match(re) != null)
			return "Visa.png";

		// Mastercard
		re = new RegExp("^5[1-5]");
		if (number.match(re) != null)
			return "Mastercard.png";

		// AMEX
		re = new RegExp("^3[47]");
		if (number.match(re) != null)
			return "AMEX.png";

		// Discover
		re = new RegExp("^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)");
		if (number.match(re) != null)
			return "Discover.png";

		// Diners
		re = new RegExp("^36");
		if (number.match(re) != null)
			return "Diners.png";

		// Diners - Carte Blanche
		re = new RegExp("^30[0-5]");
		if (number.match(re) != null)
			return "Diners.png";

		// JCB
		re = new RegExp("^35(2[89]|[3-8][0-9])");
		if (number.match(re) != null)
			return "JCB.png";

		// Visa Electron
		re = new RegExp("^(4026|417500|4508|4844|491(3|7))");
		if (number.match(re) != null)
			return "Visa Electron.png";

		re = new RegExp("^12");
		if (number.match(re) != null)
			return "Airplus.png";


		re = new RegExp("^67");
		if (number.match(re) != null)
			return "Maestro.png";
		return "";
	}


}
