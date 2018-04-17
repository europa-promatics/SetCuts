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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
/**
 * Generated class for the Showpath page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Showpath = /** @class */ (function () {
    function Showpath(viewCtrl, geolocation, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.geolocation = geolocation;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Showpath.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Showpath');
    };
    Showpath.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Showpath.prototype.ngOnInit = function () {
        var a;
        var b;
        var c;
        var d;
        a = parseFloat(localStorage['customer_latitude']);
        b = parseFloat(localStorage['customer_longitude']);
        // c=parseFloat(localStorage['barber_latitude']);
        // d=parseFloat(localStorage['barber_longitude']);
        c = parseFloat(localStorage['salon_lat']);
        d = parseFloat(localStorage['salon_lng']);
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var map = new google.maps.Map(document.getElementById('mape'), {
            zoom: 12,
            center: { lat: 25.1279484, lng: 55.3862638 }
        });
        directionsDisplay.setMap(map);
        directionsService.route({
            origin: new google.maps.LatLng(c, d),
            destination: new google.maps.LatLng(a, b),
            travelMode: google.maps.DirectionsTravelMode.DRIVING
        }, function (response, status) {
            console.log('response' + JSON.stringify(response));
            if (status === 'OK') {
                directionsDisplay.setDirections(response);
                var route = response.routes[0];
            }
            else {
                console.log('map is not displaying');
            }
        });
    };
    Showpath = __decorate([
        IonicPage(),
        Component({
            selector: 'page-showpath',
            templateUrl: 'showpath.html',
        }),
        __metadata("design:paramtypes", [ViewController, Geolocation, NavController, NavParams])
    ], Showpath);
    return Showpath;
}());
export { Showpath };
//# sourceMappingURL=showpath.js.map