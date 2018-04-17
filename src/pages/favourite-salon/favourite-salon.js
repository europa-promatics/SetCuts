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
/**
 * Generated class for the FavouriteSalonPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var FavouriteSalonPage = /** @class */ (function () {
    function FavouriteSalonPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.favtotal = [];
        this.favCustomer = [];
        this.content = this.navParams.get('content');
        this.average = this.navParams.get('average');
    }
    FavouriteSalonPage.prototype.ngOnInit = function () {
        console.log('ionViewDidLoad FavouriteSalonPage');
        console.log(JSON.stringify(this.content[0].favourite_salon));
        //this.fav=this.content[0].favourite_salon;
        // for(let a of this.content){
        //   for(let b of a.favourite_salon){
        //     console.log(b.salon_id);
        //     console.log(b.customer_id);
        //   }
        // }
        for (var i = 0; i < this.content.length; i++) {
            var obj = this.content[i];
            for (var j = 0; j < obj.favourite_salon.length; ++j) {
                var obj2 = obj.favourite_salon[j];
                if (localStorage['user_id'] == obj2.customer_id) {
                    // code...
                    this.favtotal.push(obj2);
                }
                // code...
            }
        }
        if (this.favtotal.length > this.content.length) {
            for (var k = 0; k < this.favtotal.length; k++) {
                var obj3 = this.favtotal[i];
                for (var l = 0; l < this.content.length; l++) {
                    var obj4 = this.content[l];
                    if (obj3.salon_id == obj4.id) {
                        obj4['fav_status'] = "true";
                        this.favCustomer.push(obj4);
                    }
                    else {
                        this.favCustomer.push(obj4);
                    }
                }
                // code...
            }
            console.log("if", JSON.stringify(this.favCustomer));
        }
        else {
            for (var l = 0; l < this.content.length; l++) {
                var obj4 = this.content[l];
                for (var k = 0; k < this.favtotal.length; k++) {
                    obj3 = this.favtotal[k];
                    if (obj3.salon_id == obj4.id) {
                        obj4['fav_status'] = "true";
                        this.favCustomer.push(obj4);
                    }
                    else {
                        this.favCustomer.push(obj4);
                    }
                }
            }
            console.log("else", JSON.stringify(this.favCustomer));
        }
        this.average = this.navParams.get('average');
        this.user_id = localStorage['user_id'];
        this.uniqSalon = this.unique(this.favCustomer);
        console.log("customeer", JSON.stringify(this.uniqSalon));
    };
    FavouriteSalonPage.prototype.unique = function (array) {
        return array.filter(function (el, index, arr) {
            return index == arr.indexOf(el);
        });
    };
    FavouriteSalonPage.prototype.salon_detail = function (id, lat, lng, p) {
        localStorage['lat'] = lat;
        localStorage['lng'] = lng;
        this.navCtrl.push('Salondetail', { id: id, full_data: this.content, average: this.average, simple_Data: p });
    };
    FavouriteSalonPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-favourite-salon',
            templateUrl: 'favourite-salon.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], FavouriteSalonPage);
    return FavouriteSalonPage;
}());
export { FavouriteSalonPage };
//# sourceMappingURL=favourite-salon.js.map