var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { App, MenuController } from 'ionic-angular';
import { Http } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
/**
 * Generated class for the Findsalonmap page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Findsalonmap = /** @class */ (function () {
    function Findsalonmap(navCtrl, navParams, app, menu, http, geolocation, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.loadingCtrl = loadingCtrl;
        this.markers = [];
        this.arr = [];
        this.ar = [];
        this.i = 0;
        this.j = 0;
        this.http = http;
        this.data = {};
        this.posts = '';
        this.userid = localStorage['user_id'];
        // alert("near by"+this.nearby)
    }
    Findsalonmap.prototype.ngOnInit = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();
        console.log("userid" + this.userid);
        this.http.get('http://18.220.97.146/barber/WebServices/salonInfo.json')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            loader.dismiss();
            // console.log(data);
            _this.posts = data;
            console.log("salon info " + JSON.stringify(_this.posts));
        });
        this.geolocation.getCurrentPosition().then(function (position) {
            console.log("position data" + JSON.stringify(position));
            loader.dismiss();
            console.log("current latitude " + JSON.stringify(position.coords.latitude));
            console.log("current longitute " + JSON.stringify(position.coords.longitude));
            _this.lat = position.coords.latitude;
            _this.lng = position.coords.longitude;
            var mapEle = document.getElementById('map1');
            _this.map = new google.maps.Map(mapEle, {
                center: { lat: position.coords.latitude, lng: position.coords.longitude },
                zoom: 11,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });
            google.maps.event.addListenerOnce(_this.map, 'idle', function () {
                mapEle.classList.add('show-map');
                google.maps.event.trigger(mapEle, 'resize');
            });
            // this.salonmarker();
            _this.usermarker(position.coords.latitude, position.coords.longitude);
            _this.currentposlat = position.coords.latitude;
            _this.currentposlng = position.coords.longitude;
            // this.Range(position.coords.latitude,position.coords.longitude);
        }, function (err) {
            console.log(err);
        });
    };
    Findsalonmap.prototype.usermarker = function (a, b) {
        if (a && b) {
            var marker = new google.maps.Marker({
                map: this.map,
                animation: google.maps.Animation.DROP,
                position: { lat: a, lng: b },
            });
        }
    };
    Findsalonmap.prototype.Range = function () {
        var _this = this;
        // alert(this.nearbyrange);
        var nearbylat = [];
        var nearbylng = [];
        var nearbyslname = [];
        var lt = 0;
        var lg = 0;
        var nm = 0;
        this.userid;
        // this.userlat=this.currentposlat;
        // this.userlng= this.currentposlng;
        this.nearbyrange;
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();
        var link = 'http://18.220.97.146/barber/WebServices/nearDistance.json';
        var data = JSON.stringify({
            userid: this.userid,
            latitude: this.currentposlat,
            longitude: this.currentposlng,
            radius: this.nearbyrange
        });
        this.http.post(link, data)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            loader.dismiss();
            if (data.message == "There is no salon near about you") {
            }
            else {
                _this.filterrange = data;
                console.log("filter data" + JSON.stringify(_this.filterrange));
                for (var _i = 0, _a = _this.filterrange.saloninfo; _i < _a.length; _i++) {
                    var nearbydata = _a[_i];
                    nearbylat[lt] = nearbydata.latitude;
                    nearbylng[lg] = nearbydata.longitude;
                    nearbyslname[nm] = nearbydata.salonname;
                    console.log("nearbylng" + JSON.stringify(nearbylat[lt]));
                    var nearbylatLng = new google.maps.LatLng(nearbylat[lt], nearbylng[lg]);
                    var marker = new google.maps.Marker({
                        map: _this.map,
                        animation: google.maps.Animation.DROP,
                        // position: {lat:a, lng: b}
                        position: nearbylatLng,
                        icon: 'http://18.220.97.146/barber/app_link/icon/home.png'
                    });
                    _this.markers.push(marker);
                }
            }
        });
    };
    Findsalonmap = __decorate([
        IonicPage(),
        Component({
            selector: 'page-findsalonmap',
            templateUrl: 'findsalonmap.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams, App, MenuController, Http,
            Geolocation,
            LoadingController])
    ], Findsalonmap);
    return Findsalonmap;
}());
export { Findsalonmap };
//# sourceMappingURL=findsalonmap.js.map