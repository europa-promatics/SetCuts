// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';
// declare var google: any;
// /**
//  * Generated class for the Showpath page.
//  *
//  * See http://ionicframework.com/docs/components/#navigation for more info
//  * on Ionic pages and navigation.
//  */
// @IonicPage()
// @Component({
//   selector: 'page-showpath',
//   templateUrl: 'showpath.html',
// })
// export class Showpath {

//   constructor(public navCtrl: NavController, public navParams: NavParams) {
//   }

//   ionViewDidLoad() {
//     console.log('ionViewDidLoad Showpath');
//   }

  
// ngOnInit(){

// 	var directionsService = new google.maps.DirectionsService;
//         var directionsDisplay = new google.maps.DirectionsRenderer;
//         var map = new google.maps.Map(document.getElementById('mape'), {
//           zoom: 12,
//           center: {lat: 30.5595, lng: 22.9375}
//         });


//         directionsDisplay.setMap(map);

//         directionsService.route({

//           origin: new google.maps.LatLng(30.9009650,75.8572760),
//            destination: new google.maps.LatLng(28.7040590, 77.1024900),
//           travelMode: google.maps.DirectionsTravelMode.DRIVING

//         }, function(response, status) {
//           // alert(status+' '+JSON.stringify(response));
//           if (status === 'OK') {
//             directionsDisplay.setDirections(response);
//             var route =response.routes[0];
//           } 
//           else 
//           {
            
//             alert('Something went wrong please try again!')
//           }
//         });
// }
// }










import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
declare var google
/**
 * Generated class for the Showpath page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-showpath',
  templateUrl: 'showpath.html',
})
export class Showpath {
s_lat
s_long
c_lat
c_long
lat:any;
lng:any;
  constructor( public viewCtrl: ViewController,public geolocation: Geolocation,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Showpath');
  }
dismiss(){
  this.viewCtrl.dismiss();
}

        ngOnInit(){
var a:number
var b:number
var c:number
var d:number
a=parseFloat(localStorage['customer_latitude']);
b=parseFloat(localStorage['customer_longitude']);
// c=parseFloat(localStorage['barber_latitude']);
// d=parseFloat(localStorage['barber_longitude']);
c=parseFloat(localStorage['salon_lat']);
d=parseFloat(localStorage['salon_lng']);
  var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var map = new google.maps.Map(document.getElementById('mape'), {
          zoom: 12,
          center: {lat: 25.1279484, lng:55.3862638 }
        });


        directionsDisplay.setMap(map);

        directionsService.route({

          origin: new google.maps.LatLng(c,d),
           destination: new google.maps.LatLng(a,b),
          travelMode: google.maps.DirectionsTravelMode.DRIVING

        }, function(response, status) {
          console.log('response'+JSON.stringify(response));
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
            var route = response.routes[0];
          } 
          else 
          {
            console.log('map is not displaying');
          }
        });
}
}
