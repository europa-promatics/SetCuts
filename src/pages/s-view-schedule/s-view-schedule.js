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
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';
import { NewPage } from '../new/new';
import { ModalController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the SViewSchedulePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SViewSchedulePage = /** @class */ (function () {
    function SViewSchedulePage(modalCtrl, toastCtrl, serviceProvider, navCtrl, navParams, loadingCtrl, http, alertCtrl, viewCtrl) {
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.serviceProvider = serviceProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        this.days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        this.datecolor = null;
        this.myflagCheck = false;
        this.myTime = [];
        this.checkindex = [];
        this.qote = [];
        this.box = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
        var m = new Date();
        var today = new Date();
        this.date_p = today.getDate();
        this.selectedYear = m.getFullYear();
        this.selectedMonth = m.getMonth();
        console.log(m.getMonth());
        var month = this.selectedMonth + 1;
        this.selectDate = this.date_p + '-' + month + '-' + this.selectedYear;
        this.calculate();
        this.userid = localStorage['user_id'];
        this.http = http;
        this.data = {};
    }
    SViewSchedulePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SViewSchedulePage');
    };
    SViewSchedulePage.prototype.pickDate = function (value) {
        if (value != null) {
            if (this.datecolor != null) {
                document.getElementById(this.datecolor).style.background = '#fff';
                document.getElementById(this.datecolor).style.color = "#000";
                this.datecolor = null;
                this.pickDate(value);
            }
            if (this.datecolor == null) {
                this.datecolor = value + 'datediv';
                document.getElementById(this.datecolor).style.background = '#c72228';
                document.getElementById(this.datecolor).style.color = "white";
                this.selectm = this.selectedMonth + 1;
                // alert("picked date "+value+'-'+this.selectedMonth+'-'+this.selectedYear);
                this.selectDate = value + '-' + this.selectm + '-' + this.selectedYear;
                // this.sendDate(this.selectDate);
            }
        }
    };
    SViewSchedulePage.prototype.calculate = function () {
        if ((this.selectedYear % 4 == 0 && this.selectedYear % 100 != 0) || this.selectedYear % 400 == 0) {
            this.leapornot = 'leap';
            this.totaldays = 366;
            if (this.selectedMonth + 1 == 1 || this.selectedMonth + 1 == 3 || this.selectedMonth + 1 == 5 || this.selectedMonth + 1 == 7 || this.selectedMonth + 1 == 8 || this.selectedMonth + 1 == 10 || this.selectedMonth + 1 == 12) {
                this.daysinmonth = 31;
            }
            if (this.selectedMonth + 1 == 2) {
                this.daysinmonth = 29;
            }
            if (this.selectedMonth + 1 == 4 || this.selectedMonth + 1 == 6 || this.selectedMonth + 1 == 9 || this.selectedMonth + 1 == 11) {
                this.daysinmonth = 30;
            }
        }
        else {
            this.leapornot = 'not leap';
            this.totaldays = 365;
            if (this.selectedMonth + 1 == 1 || this.selectedMonth + 1 == 3 || this.selectedMonth + 1 == 5 || this.selectedMonth + 1 == 7 || this.selectedMonth + 1 == 8 || this.selectedMonth + 1 == 10 || this.selectedMonth + 1 == 12) {
                this.daysinmonth = 31;
            }
            if (this.selectedMonth + 1 == 2) {
                this.daysinmonth = 28;
            }
            if (this.selectedMonth + 1 == 4 || this.selectedMonth + 1 == 6 || this.selectedMonth + 1 == 9 || this.selectedMonth + 1 == 11) {
                this.daysinmonth = 30;
            }
        }
        this.calculatedays();
        var z = 1;
        for (var i = 0; i < this.box.length; i++) {
            if (i >= this.monthfirstday) {
                if (z <= this.daysinmonth) {
                    this.box[i] = z;
                    z++;
                }
                else {
                    this.box[i] = null;
                }
            }
            else {
                this.box[i] = null;
            }
        }
    };
    SViewSchedulePage.prototype.previousMonth = function () {
        if (this.selectedMonth > 0) {
            this.selectedMonth = this.selectedMonth - 1;
        }
        else {
            this.selectedMonth = 11;
            this.selectedYear--;
        }
        this.calculate();
    };
    SViewSchedulePage.prototype.nextMonth = function () {
        if (this.selectedMonth < 11) {
            this.selectedMonth = this.selectedMonth + 1;
        }
        else {
            this.selectedMonth = 0;
            this.selectedYear++;
        }
        this.calculate();
    };
    SViewSchedulePage.prototype.calculatedays = function () {
        var d = 0;
        this.oddDays = this.selectedYear % 400;
        console.log(this.oddDays);
        for (var i = this.oddDays; i > 0; i--) {
            if ((i % 4 == 0 && i % 100 != 0) || i % 400 == 0) {
                d = d + 2;
                console.log('leap');
            }
            else {
                d = d + 1;
                console.log('not leap');
            }
        }
        if (d > 7) {
            d = d % 7;
        }
        var a = this.odddaysinmonth();
        console.log((a + d) % 7);
        this.monthfirstday = (a + d) % 7;
    };
    SViewSchedulePage.prototype.odddaysinmonth = function () {
        var d = 0;
        var m = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        for (var i = 0; i < this.selectedMonth; i) {
            d = d + m[i];
            i++;
        }
        if ((this.selectedYear % 4 == 0 && this.selectedYear % 100 != 0) || this.selectedYear % 400 == 0) {
            d = d + 1;
        }
        return d;
    };
    SViewSchedulePage.prototype.ngAfterViewInit = function () {
        var value = this.date_p;
        this.datecolor = value + 'datediv';
        document.getElementById(this.datecolor).style.background = '#c72228';
        document.getElementById(this.datecolor).style.color = "white";
    };
    SViewSchedulePage.prototype.view_Schedule = function () {
        // let modal = this.modalCtrl.create(NewPage,{date:this.selectDate});
        //    modal.present();
        this.navCtrl.push(NewPage, { date: this.selectDate });
    };
    SViewSchedulePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-s-view-schedule',
            templateUrl: 's-view-schedule.html',
        }),
        __metadata("design:paramtypes", [ModalController, ToastController, ServicesProvider, NavController, NavParams, LoadingController, Http, AlertController,
            ViewController])
    ], SViewSchedulePage);
    return SViewSchedulePage;
}());
export { SViewSchedulePage };
//# sourceMappingURL=s-view-schedule.js.map