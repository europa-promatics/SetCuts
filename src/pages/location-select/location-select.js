var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IonicPage, NavController, Platform, ViewController, NavParams } from 'ionic-angular';
import { Component, ElementRef, ViewChild, NgZone } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
/**
 * Generated class for the LocationSelectPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LocationSelectPage = /** @class */ (function () {
    function LocationSelectPage(navCtrl, navParams, zone, platform, geolocation, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.zone = zone;
        this.platform = platform;
        this.geolocation = geolocation;
        this.viewCtrl = viewCtrl;
    }
    LocationSelectPage.prototype.ngOnInit = function () {
        this.acService = new google.maps.places.AutocompleteService();
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
    };
    LocationSelectPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    LocationSelectPage.prototype.chooseItem = function (item) {
        console.log('modal > chooseItem > item > ', item);
        this.viewCtrl.dismiss(item);
    };
    LocationSelectPage.prototype.updateSearch = function () {
        console.log('modal > updateSearch');
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }
        var self = this;
        var config = {
            types: ['geocode'],
            input: this.autocomplete.query
            // componentRestrictions: { country: 'AR' } 
        };
        this.acService.getPlacePredictions(config, function (predictions, status) {
            console.log('modal > getPlacePredictions > status > ', status);
            self.autocompleteItems = [];
            predictions.forEach(function (prediction) {
                self.autocompleteItems.push(prediction);
            });
        });
    };
    __decorate([
        ViewChild('map'),
        __metadata("design:type", ElementRef)
    ], LocationSelectPage.prototype, "mapElement", void 0);
    __decorate([
        ViewChild('pleaseConnect'),
        __metadata("design:type", ElementRef)
    ], LocationSelectPage.prototype, "pleaseConnect", void 0);
    LocationSelectPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-location-select',
            templateUrl: 'location-select.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, NgZone, Platform, Geolocation, ViewController])
    ], LocationSelectPage);
    return LocationSelectPage;
}());
export { LocationSelectPage };
//# sourceMappingURL=location-select.js.map