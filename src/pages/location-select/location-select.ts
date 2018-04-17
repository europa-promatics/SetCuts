
import { IonicPage,NavController, Platform, ViewController,NavParams } from 'ionic-angular';
import { Component, ElementRef, ViewChild, NgZone } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
declare var google;

/**
 * Generated class for the LocationSelectPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-location-select',
  templateUrl: 'location-select.html',
})
export class LocationSelectPage {
    @ViewChild('map') mapElement: ElementRef;
    @ViewChild('pleaseConnect') pleaseConnect: ElementRef;
    autocompleteItems: any;
    autocomplete: any;
    acService:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public zone: NgZone,public platform: Platform, public geolocation: Geolocation, public viewCtrl: ViewController) {
   
  }
 
   ngOnInit() {
        this.acService = new google.maps.places.AutocompleteService();        
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };        
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    chooseItem(item: any) {
        console.log('modal > chooseItem > item > ', item);
        this.viewCtrl.dismiss(item);
    }

    updateSearch() {
        console.log('modal > updateSearch');
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }
        let self = this;
        let config = { 
            types:  ['geocode'], // other types available in the API: 'establishment', 'regions', and 'cities'
            input: this.autocomplete.query 
            // componentRestrictions: { country: 'AR' } 
        }
        this.acService.getPlacePredictions(config, function (predictions, status) {
            console.log('modal > getPlacePredictions > status > ', status);
            self.autocompleteItems = [];            
            predictions.forEach(function (prediction) {              
                self.autocompleteItems.push(prediction);
            });
        });
}
 
   
 
    }
 
    

