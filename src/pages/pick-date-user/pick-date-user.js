var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Attribute } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';
import { Observable } from 'rxjs/Rx';
import { ToastController } from 'ionic-angular';
var PickDateUserPage = /** @class */ (function () {
    function PickDateUserPage(format, toastCtrl, serviceProvider, navCtrl, navParams, loadingCtrl, http, alertCtrl, viewCtrl) {
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
        this.card = 'false';
        this.barber_id = this.navParams.get('barber_id');
        this.service_id = this.navParams.get('service_id');
        this.salon_id = this.navParams.get('salon_id');
        var m = new Date();
        var today = new Date();
        this.date_p = today.getDate();
        this.selectedYear = m.getFullYear();
        this.selectedMonth = m.getMonth();
        console.log(m.getMonth());
        var month = this.selectedMonth + 1;
        var motnth1 = this.selectedMonth + 1;
        this.selectDate = this.date_p + '-' + month + '-' + this.selectedYear;
        if (motnth1 > 9) {
            this.datee = this.date_p + '-' + motnth1 + '-' + this.selectedYear;
        }
        else {
            var a = 0 + "" + motnth1;
            this.datee = this.date_p + '-' + a + '-' + this.selectedYear;
        }
        console.log('selected' + this.selectDate);
        this.calculate();
        this.userid = localStorage['user_id'];
        this.http = http;
        this.data = {};
        this.timeStarts = '10:44';
        //         this.time_sch=[
        // {
        // time:'08:00 Am'
        // },
        // {
        // time:'08:15 Am'
        // },
        // {
        // time:'08:30 Am'
        // },
        // {
        // time:'08:45 Am'
        // },
        // {
        // time:'09:00 Am'
        // },
        // {
        // time:'09:15 Am'
        // },
        // {
        // time:'09:30 Am'
        // },
        // {
        // time:'09:45 Am'
        // },
        // {
        // time:'10:00 Am'
        // },
        // {
        // time:'10:15 Am'
        // },
        // {
        // time:'10:30 Am'
        // },
        // {
        // time:'10:45 Am'
        // },
        // {
        // time:'11:00 Am'
        // },
        // {
        // time:'11:15 Am'
        // },
        // {
        // time:'11:30 Am'
        // },
        // {
        // time:'11:45 Am'
        // },
        // {
        // time:'12:00 Pm'
        // },
        // {
        // time:'12:15 Pm'
        // },
        // {
        // time:'12:30 Pm'
        // },
        // {
        // time:'12:45 Pm'
        // },
        // {
        // time:'01:00 Pm'
        // },
        // {
        // time:'01:15 Pm'
        // },
        // {
        // time:'01:30 Pm'
        // },
        // {
        // time:'01:45 Pm'
        // },
        // {
        // time:'02:00 Pm'
        // },
        // {
        // time:'02:15 Pm'
        // },
        // {
        // time:'02:30 Pm'
        // },
        // {
        // time:'02:45 Pm'
        // },
        // {
        // time:'03:00 Pm'
        // },
        // {
        // time:'03:15 Pm'
        // },
        // {
        // time:'03:30 Pm'
        // },
        // {
        // time:'03:45 Pm'
        // },
        // {
        // time:'04:00 Pm'
        // },
        // {
        // time:'04:15 Pm'
        // },
        // {
        // time:'04:30 Pm'
        // },
        // {
        // time:'04:45 Pm'
        // },
        // {
        // time:'05:00 Pm'
        // },
        // {
        // time:'05:15 Pm'
        // },
        // {
        // time:'05:30 Pm'
        // },
        // {
        // time:'05:45 Pm'
        // },
        // {
        // time:'06:00 Pm'
        // },
        // {
        // time:'06:15 Pm'
        // },
        // {
        // time:'06:30 Pm'
        // },
        // {
        // time:'06:45 Pm'
        // },
        // {
        // time:'07:00 Pm'
        // },
        // {
        // time:'07:15 Pm'
        // },
        // {
        // time:'07:30 Pm'
        // },
        // {
        // time:'09:00 Pm'
        // },
        // ]
        this.time_sch = [
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
    }
    PickDateUserPage.prototype.btn = function () {
        //   var points = ["08.00am", "08.30am","07.30pm", "04.30am", "11.30am", "10.00pm","05:30pm"];
        // points.sort();
        // console.log(points);
        // alert(JSON.stringify(points));
    };
    PickDateUserPage.prototype.close = function () {
        this.card = 'false';
    };
    PickDateUserPage.prototype.pickDate = function (value) {
        this.selectm = this.selectedMonth + 1;
        if (value > 9) {
            this.v = value;
        }
        else {
            this.v = 0 + "" + value;
        }
        if (this.selectm > 9) {
            this.comp_month = this.selectm;
            this.compare_full = this.v + '-' + this.comp_month + '-' + this.selectedYear;
        }
        else {
            this.comp_month = 0 + "" + this.selectm;
            this.compare_full = this.v + '-' + this.comp_month + '-' + this.selectedYear;
        }
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
                // this.selectm=this.selectedMonth+1;
                // alert("picked date "+value+'-'+this.selectedMonth+'-'+this.selectedYear);
                this.selectDate = this.v + '-' + this.selectm + '-' + this.selectedYear;
                this.barber_time_availability(this.selectDate);
                // if(this.compare_full>=this.datee){
                //  this.barber_time_availability(this.selectDate);
                // }
                // else{
                //   alert('less than current date');
                //    this.datecolor = value + 'datediv';
                //    this.card='false';
                // document.getElementById(this.datecolor).style.background = '#cecece';
                // document.getElementById(this.datecolor).style.color = "white";
                // }
                // this.sendDate(this.selectDate);
                // this.barber_time_availability(this.selectDate);
            }
        }
    };
    PickDateUserPage.prototype.calculate = function () {
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
    PickDateUserPage.prototype.previousMonth = function () {
        if (this.selectedMonth > 0) {
            this.selectedMonth = this.selectedMonth - 1;
        }
        else {
            this.selectedMonth = 11;
            this.selectedYear--;
        }
        this.calculate();
    };
    PickDateUserPage.prototype.nextMonth = function () {
        if (this.selectedMonth < 11) {
            this.selectedMonth = this.selectedMonth + 1;
        }
        else {
            this.selectedMonth = 0;
            this.selectedYear++;
        }
        this.calculate();
    };
    PickDateUserPage.prototype.calculatedays = function () {
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
    PickDateUserPage.prototype.odddaysinmonth = function () {
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
    PickDateUserPage.prototype.sendDate = function (a) {
    };
    PickDateUserPage.prototype.book = function () {
        var b = this.selectDate;
        if (b == undefined || b == 'undefined') {
            var alert_1 = this.alertCtrl.create({
                title: 'Alert!',
                subTitle: 'Please select time.',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            this.proceed_form(b);
            // this.navCtrl.push('PickTimeUserPage',{date:b,service_id:this.service_id,barber_id:this.barber_id, timeslot:this.content});
        }
    };
    PickDateUserPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    PickDateUserPage.prototype.ngOnInit = function () {
        // let loader = this.loadingCtrl.create({
        //             content: "Please wait..."
        //         });
        //        loader.present();
        //     var link='http://18.220.97.146/barber/WebServices/barberBookingInfo.json';
        //     var data=JSON.stringify({
        //       barber_id:this.barber_id,
        //     });
        //     this.http.post(link,data)
        //      .subscribe(data=>{
        //  loader.dismiss();
        //        this.data = data;
        //        this.content=JSON.parse(data._body).bookinginfo;
        //        console.log(JSON.stringify(this.content));
        //      });
    };
    PickDateUserPage.prototype.proceed_form = function (time) {
        var _this = this;
        var date = this.selectDate;
        var loading = this.loadingCtrl.create({ content: 'Please wait...' });
        Observable.fromPromise(loading.present())
            .flatMap(function (data) { return _this.serviceProvider.proceed_form(_this.barber_id, _this.service_id, date, time, localStorage['user_id']); })
            .subscribe(function (data) {
            return loading.dismiss().then(function () {
                _this.available = data;
                _this.barber_time_availability(date);
                if (_this.available.message == 'Booking Not Available') {
                    var alert_2 = _this.alertCtrl.create({
                        title: 'Alert!',
                        subTitle: 'Booking Not Available.',
                        buttons: ['OK']
                    });
                    alert_2.present();
                }
                else {
                    // this.PickbookingDate(this.barber_id,this.service_id,this.date,this.timeStarts)
                    console.log('booking_data' + JSON.stringify(data));
                    // this.navCtrl.push('BookingFormUserPage',{barber_id:this.barber_id,service_id:this.service_id,date:this.date,time:this.timeStarts});
                    _this.navCtrl.push('PickTimeUserPage', { full_data: _this.available, barber_id: _this.barber_id, service_id: _this.service_id, date: date, time: time, salon_id: _this.salon_id });
                }
            });
        }, function (error) {
            return loading.dismiss().then(function () { });
        });
    };
    // PickbookingDate(barber_id,service_id,date,time){
    //   let loader = this.loadingCtrl.create({
    //             content: "Please wait..."
    //         });
    //        loader.present();
    //     var link='http://18.220.97.146/barber/WebServices/barberBookingForm.json';
    //     var data=JSON.stringify({
    //       barber_id:barber_id,
    //       service_id:service_id,
    //       date: date, 
    //       time:time,
    //       customer_id:localStorage['user_id'],
    //     });
    //     this.http.post(link,data)
    //      .subscribe(data=>{
    //  loader.dismiss();
    //        this.data = data;
    //       if (JSON.parse(data._body).status == 1) {
    //    let alert = this.alertCtrl.create({
    //                         title: 'Thank you booking success!',
    //                         subTitle: 'we will notify you after accept barber request.',
    //                         buttons: ['OK']
    //                     });
    //                     alert.present();
    //             // this.navCtrl.push('ReviewPurchasePage',{time:this.time,date:this.date});             
    // }
    //        else{
    //          let alert = this.alertCtrl.create({
    //                         title: 'Alert!',
    //                         subTitle: 'Something went wrong',
    //                         buttons: ['OK']
    //                     });
    //                     alert.present();
    //        }
    //      });
    // }
    PickDateUserPage.prototype.barber_time_availability = function (sdate) {
        var _this = this;
        this.myTime = [];
        this.mytsFidexdate = [];
        this.qote = [];
        this.barber_time_info = 'undifine';
        for (var i = 0; i < this.time_sch.length; ++i) {
            this.time_sch[i].check = 'none';
        }
        var barber_id = this.barber_id;
        var date = sdate;
        var loading = this.loadingCtrl.create({ content: 'Please wait...' });
        Observable.fromPromise(loading.present())
            .flatMap(function (data) { return _this.serviceProvider.barber_schedule(barber_id, date); })
            .subscribe(function (data) {
            return loading.dismiss().then(function () {
                _this.myflagCheck = false;
                _this.card = 'true';
                _this.barber_info = data;
                var c = _this.barber_info.barberinfo;
                if (c) {
                    _this.available_time = _this.barber_info.barberinfo.split(',');
                    _this.no_available_slot = 'false';
                }
                else {
                    _this.no_available_slot = 'true';
                }
                // if(this.barber_info.alreadyinfo!=null ||this.barber_info.alreadyinfo!='null' || this.barber_info.alreadyinfo!=''){
                //   this.barber_already_booked=this.barber_info.alreadyinfo;
                // }
                // if (this.barber_info.barberinfo) {
                // this.barber_time_info=this.barber_info.barberinfo;
                // this.mytsFidexdate=this.barber_info.barberinfo.split(',');
                // console.log("mytsFidexdate"+JSON.stringify(this.mytsFidexdate));
                // }
                // if(this.barber_time_info!='undifine'){
                //     this.mytime='true';
                //  for(let i=0;i<this.time_sch.length;i++){
                //   if(this.barber_already_booked){
                //     var obj=this.time_sch[i]
                //    if(this.barber_already_booked.indexOf(obj.time)!=-1){
                // obj.check='booked';
                // this.myTime.push(obj);
                //   }
                //   else if (this.barber_time_info.indexOf(obj.time)!=-1) {
                //      obj.check='color_class';
                //      this.myTime.push(obj)
                //   }else{
                //     this.myTime.push(obj)
                //   }
                //   }
                //   else{
                //      var obj=this.time_sch[i]
                // if (this.barber_time_info.indexOf(obj.time)!=-1) {
                //      obj.check='color_class';
                //      this.myTime.push(obj)
                //   }else{
                //     this.myTime.push(obj)
                //   } 
                //   }
                // } 
                // }
                // else{
                //   this.myTime=this.time_sch;
                //   this.mytime='false';
                // }
                console.log(JSON.stringify(_this.myTime));
            });
        }, function (error) {
            return loading.dismiss().then(function () { });
        });
        // this.myTime=[];
        // this.mytsFidexdate=[];
        // this.qote=[];
        // this.barber_time_info='undifine'
        // for (var i = 0; i <this.time_sch.length; ++i) {
        //   this.time_sch[i].check='none'
        // }
        // var barber_id=this.barber_id;
        // var date=sdate;
        // this.serviceProvider.barber_schedule(barber_id,date)
        // .subscribe(data  =>{ 
        //   this.myflagCheck=false;
        //   // this.backcolor='disable';
        // this.barber_info=data;
        // if(this.barber_info.alreadyinfo!=null ||this.barber_info.alreadyinfo!='null' || this.barber_info.alreadyinfo!=''){
        //   this.barber_already_booked=this.barber_info.alreadyinfo;
        // }
        // if (this.barber_info.barberinfo) {
        //   // code...
        // this.barber_time_info=this.barber_info.barberinfo;
        // this.mytsFidexdate=this.barber_info.barberinfo.split(',');
        // console.log("mytsFidexdate"+JSON.stringify(this.mytsFidexdate));
        // }
        // if(this.barber_time_info!='undifine'){
        //     this.mytime='true';
        //  for(let i=0;i<this.time_sch.length;i++){
        //   if(this.barber_already_booked){
        //     var obj=this.time_sch[i]
        //    if(this.barber_already_booked.indexOf(obj.time)!=-1){
        // obj.check='booked';
        // this.myTime.push(obj);
        //   }
        //   else if (this.barber_time_info.indexOf(obj.time)!=-1) {
        //      obj.check='color_class';
        //      this.myTime.push(obj)
        //   }else{
        //     this.myTime.push(obj)
        //   }
        //   }
        //   else{
        //      var obj=this.time_sch[i]
        // if (this.barber_time_info.indexOf(obj.time)!=-1) {
        //      obj.check='color_class';
        //      this.myTime.push(obj)
        //   }else{
        //     this.myTime.push(obj)
        //   } 
        //   }
        // } 
        // }
        // else{
        //   this.myTime=this.time_sch;
        //   this.mytime='false';
        // }
        //  console.log(JSON.stringify(this.myTime));
        // }),
        // error  => {}
    };
    // tapnpick(i,a){
    //   if(a.check=='booked'){
    //   let toast = this.toastCtrl.create({
    //         message: 'Booking not available now!',
    //         duration: 2000,
    //         position: "bottom",
    //       });
    //       toast.present(toast);
    //   }
    // if(a.check=='color_class'){
    //   this.proceed_form(a.time)
    // }
    // }
    PickDateUserPage.prototype.tapnpick = function (i, a) {
        this.proceed_form(a);
    };
    PickDateUserPage.prototype.ngAfterViewInit = function () {
        var value = this.date_p;
        this.datecolor = value + 'datediv';
        document.getElementById(this.datecolor).style.background = '#c72228';
        document.getElementById(this.datecolor).style.color = "white";
        this.barber_time_availability(this.selectDate);
    };
    PickDateUserPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-pick-date-user',
            templateUrl: 'pick-date-user.html',
        }),
        __param(0, Attribute("format")),
        __metadata("design:paramtypes", [Object, ToastController, ServicesProvider, NavController, NavParams, LoadingController, Http, AlertController,
            ViewController])
    ], PickDateUserPage);
    return PickDateUserPage;
}());
export { PickDateUserPage };
//# sourceMappingURL=pick-date-user.js.map