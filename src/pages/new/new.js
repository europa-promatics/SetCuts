var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { AlertController } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';
import { Select } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
/**
 * Generated class for the NewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var NewPage = /** @class */ (function () {
    function NewPage(loadingCtrl, alertCtrl, viewCtrl, serviceProvider, http, navCtrl, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.serviceProvider = serviceProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.data = {};
        this.data.response = '';
        this.myTime = [];
        this.selectservice = 'false';
        this.date = this.navParams.get('date');
        this.table = [
            {
                time: '08:00 Am'
            },
            {
                time: '08:45 Am'
            },
            {
                time: '09:30 Am'
            },
            {
                time: '10:15 Am'
            },
            {
                time: '11:00 Am'
            },
            {
                time: '11:45 Am'
            },
            {
                time: '12:30 Pm'
            },
            {
                time: '01:15 Pm'
            },
            {
                time: '02:00 Pm'
            },
            {
                time: '02:45 Pm'
            },
            {
                time: '03:30 Pm'
            },
            {
                time: '04:15 Pm'
            },
            {
                time: '05:00 Pm'
            },
            {
                time: '05:45 Pm'
            },
            {
                time: '06:30 Pm'
            },
            {
                time: '07:15 Pm'
            },
            {
                time: '08:00 Pm'
            },
        ];
        //     this.table=[
        //    {
        // time:'08:00 Am'
        // },
        // {
        // time:'08:45 Am'
        // },
        // {
        // time:'09:30 Am'
        // },
        // {
        // time:'10:15 Am'
        // },
        // {
        // time:'11:00 Am'
        // },
        // {
        // time:'11:45 Am'
        // },
        // {
        // time:'12:30 Pm'
        // },
        // {
        // time:'01:15 Pm'
        // },
        // {
        // time:'02:00 Pm'
        // },
        // {
        // time:'02:45 Pm'
        // },
        // {
        // time:'03:30 Pm'
        // },
        // {
        // time:'04:15 Pm'
        // },
        // {
        // time:'05:00 Pm'
        // },
        // {
        // time:'05:45 Pm'
        // },
        // {
        // time:'06:30 Pm'
        // },
        // {
        // time:'07:15 Pm'
        // },
        // {
        // time:'08:00 Pm'
        // },
        // ]
    }
    NewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewPage');
    };
    NewPage.prototype.onTime = function (time, barbername, barber_id) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Please wait...' });
        Observable.fromPromise(loading.present())
            .flatMap(function (data) { return _this.serviceProvider.check_availabilty(_this.date, time, barber_id); })
            .subscribe(function (data) {
            return loading.dismiss().then(function () {
                console.log("data" + JSON.stringify(data.message));
                if (data.status == 1) {
                    if (localStorage['user_type'] == 1 || localStorage['user_type'] == "1") {
                        _this.showPrompt(time, barber_id);
                        _this.callselectedtime = time;
                        _this.callbarbername = barbername;
                        _this.callbarberid = barber_id;
                    }
                    else {
                        if (barber_id == localStorage['barber_id']) {
                            console.log("barber_id" + barber_id + " " + "localStorage['barber_id']" + localStorage['barber_id']);
                            console.log("time" + time + " " + "barbername" + barbername + "barber_id" + barber_id);
                            _this.showPrompt(time, barber_id);
                            _this.callselectedtime = time;
                            _this.callbarbername = barbername;
                            _this.callbarberid = barber_id;
                        }
                        else {
                        }
                    }
                }
                else {
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Alert!',
                        subTitle: 'Barber Not Available.',
                        buttons: ['OK']
                    });
                    alert_1.present();
                }
            });
        }, function (error) {
            return loading.dismiss().then(function () { });
        });
        //   this.serviceProvider.check_availabilty(this.date,time,barber_id)
        //          .subscribe(data  =>{ 
        //     console.log("data"+JSON.stringify(data.message));
        // if(data.status==1){
        //     if(localStorage['user_type']==1 || localStorage['user_type']=="1"){
        // this.showPrompt(time,barber_id);
        // this.callselectedtime=time;
        // this.callbarbername=barbername;
        // this.callbarberid=barber_id;
        //   }
        //   else{
        //     if(barber_id==localStorage['barber_id']){
        //       console.log("barber_id"+barber_id+" "+"localStorage['barber_id']"+localStorage['barber_id'])
        //       console.log("time"+time+" "+"barbername"+barbername+"barber_id"+barber_id);
        // this.showPrompt(time,barber_id);
        // this.callselectedtime=time;
        // this.callbarbername=barbername;
        // this.callbarberid=barber_id;
        //     }
        //     else{
        //     }   
        //   }
        // }
        // else{
        //   let alert = this.alertCtrl.create({
        //                         title: 'Alert!',
        //                         subTitle: 'Barber Not Available.',
        //                         buttons: ['OK']
        //                     });
        //                     alert.present();
        // }
        //         }),
        //         error  => {
        //         }
    };
    NewPage.prototype.ngOnInit = function () {
        var _this = this;
        this.service();
        var salon_id = localStorage['salon_id'];
        var date = this.date;
        this.serviceProvider.salon_view_appointment(salon_id, date)
            .subscribe(function (data) {
            if (data.status == 0) {
                console.log("no booking");
            }
            else {
                _this.barberscheduler = data.barberschedule;
            }
        }),
            function (error) { };
    };
    NewPage.prototype.banadobhai = function (serviceTime, localTime, custometime) {
        // let split=serviceTime.split(',')
        //  if (split.indexOf(localTime)!=-1){
        //      // var a="active";
        //      return c_name
        //  }
        // else{
        //   return "notactive"
        // }
        var b = serviceTime.concat(custometime);
        for (var i = 0; i < b.length; i++) {
            var obj = b[i];
            var splitData = obj.time.split(',');
            if (splitData.indexOf(localTime) != -1) {
                if (obj.customer) {
                    // code...
                    return obj.customer.fullname;
                }
                else {
                    return obj.customer_name;
                }
            }
            // code...
        }
    };
    NewPage.prototype.banadobhai2 = function (serviceTime, localTime, custometime) {
        // let split=serviceTime.split(',')
        //  if (split.indexOf(localTime)!=-1){
        //      // var a="active";
        //      return c_ph
        //  }
        var b = serviceTime.concat(custometime);
        for (var i = 0; i < b.length; i++) {
            var obj = b[i];
            var splitData = obj.time.split(',');
            if (splitData.indexOf(localTime) != -1) {
                if (obj.customer) {
                    return obj.customer.phonenumber;
                }
                else {
                    return obj.phone_number;
                }
            }
        }
    };
    NewPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    NewPage.prototype.showPrompt = function (time, barber_id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'ADD CUSTOMER APPOINTMENT',
            inputs: [
                {
                    name: 'Customer_name',
                    placeholder: 'Customer name',
                },
                {
                    name: 'Phone_number',
                    placeholder: 'Phone number',
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log(JSON.stringify(data));
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        console.log("data" + JSON.stringify(data));
                        _this.customer_name = data.Customer_name;
                        _this.phonenumber = data.Phone_number;
                        if (_this.customer_name == "" || _this.phonenumber == "") {
                            var alert_2 = _this.alertCtrl.create({
                                title: 'Alert!',
                                subTitle: 'Please fill all fields.',
                                buttons: ['OK']
                            });
                            alert_2.present();
                        }
                        else {
                            _this.selectservice = 'true';
                            _this.selcton();
                        }
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    NewPage.prototype.selcton = function () {
        this.select.open();
    };
    NewPage.prototype.notify = function () {
        var _this = this;
        this.selectservice = 'false';
        console.log("service" + this.gaming + "," + "customer name" + this.customer_name + "," + "phonenumber" + this.phonenumber + "," + "select time" + this.callselectedtime
            + "," + "barbername" + this.callbarbername
            + "," + "barber_id" + this.callbarberid + "," + "customer emailaddress" + this.emailaddress);
        this.serviceProvider.bookingbyCall(this.gaming, this.customer_name, this.phonenumber, this.callselectedtime, this.callbarbername, this.callbarberid, this.date)
            .subscribe(function (data) {
            _this.ngOnInit();
            console.log(JSON.stringify(data));
        }),
            function (error) { };
    };
    NewPage.prototype.service = function () {
        var _this = this;
        var salon_id = localStorage['salon_id'];
        this.serviceProvider.Getsalonservices(salon_id)
            .subscribe(function (data) {
            _this.items = data;
            console.log(JSON.stringify(data));
        }),
            function (error) { };
    };
    __decorate([
        ViewChild(Select),
        __metadata("design:type", Select)
    ], NewPage.prototype, "select", void 0);
    NewPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-new',
            templateUrl: 'new.html',
        }),
        __metadata("design:paramtypes", [LoadingController, AlertController, ViewController, ServicesProvider, Http, NavController, NavParams])
    ], NewPage);
    return NewPage;
}());
export { NewPage };
//# sourceMappingURL=new.js.map