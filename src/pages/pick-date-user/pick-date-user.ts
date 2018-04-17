import { Component,Attribute }from '@angular/core';
import { IonicPage,NavController,NavParams,ViewController }from 'ionic-angular';
import { PickTimeUserPage }from '../pick-time-user/pick-time-user';
import { Http }from '@angular/http';
import { AlertController }from 'ionic-angular';
import { LoadingController,MenuController }from 'ionic-angular';
import { ServicesProvider }from '../../providers/services/services';
import { Observable }from 'rxjs/Rx';
import { ToastController }from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { LocationSelectPage } from '../location-select/location-select';
import { PopoverController } from 'ionic-angular';
import { AddressPopupPage } from '../address-popup/address-popup';

@IonicPage()
@Component({
    selector: 'page-pick-date-user',
    templateUrl: 'pick-date-user.html',
})
export class PickDateUserPage {

    month: any = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    days: any = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    selectedMonth;
    daysinmonth;
    selectedYear;
    date: number;
    year;
    card
    leapornot;
    totaldays;
    oddDays
    monthfirstday;
    selectDate: any;
    userid;
    http;
    service_id;
    data;
    barber_id
    content
    selectm
    available
    timeStarts;
    datecolor: string = null;
    time_sch;
    date_p;
    mytsFidexdate;
    myflagCheck: boolean = false;
    myTime = [];
    barber_info
    checkindex = [];
    barber_time_info
    mytime
    qote = [];
    backcolor
    available_time
    barber_already_booked;
    datee
    v
    compare_full
    comp_month
    salon_id
    no_available_slot
    bookingAddress;
    box: any = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
    constructor(@Attribute("format") format,public popoverCtrl: PopoverController,public modalCtrl: ModalController, public toastCtrl: ToastController, public serviceProvider: ServicesProvider, public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, http: Http, public alertCtrl: AlertController,
        public viewCtrl: ViewController) {
        // alert('hy')
        this.card = 'false';
        this.barber_id = this.navParams.get('barber_id');
        this.service_id = this.navParams.get('service_id');
        // alert(this.service_id)
        this.salon_id = this.navParams.get('salon_id');
        let m = new Date();
        var today = new Date();
        this.date_p = today.getDate();
        this.selectedYear = m.getFullYear()
        this.selectedMonth = m.getMonth()
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
        this.userid = localStorage['user_id']
        this.http = http;
        this.data = {};
        this.timeStarts = '10:44';
        this.time_sch = [{
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
        ]

    }
    btn() {
        //   var points = ["08.00am", "08.30am","07.30pm", "04.30am", "11.30am", "10.00pm","05:30pm"];
        // points.sort();
        // console.log(points);
        // alert(JSON.stringify(points));

    }

    close() {
        this.card = 'false';
    }

    pickDate(value) {
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
            this.comp_month = 0 + "" + this.selectm
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
    }
    calculate() {
        if ((this.selectedYear % 4 == 0 && this.selectedYear % 100 != 0) || this.selectedYear % 400 == 0) {
            this.leapornot = 'leap'
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
            this.leapornot = 'not leap'
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
        let z = 1
        for (let i = 0; i < this.box.length; i++) {
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
    }
    previousMonth() {
        if (this.selectedMonth > 0) {
            this.selectedMonth = this.selectedMonth - 1;
        }
        else {
            this.selectedMonth = 11;
            this.selectedYear--;
        }
        this.calculate();
    }
    nextMonth() {
        if (this.selectedMonth < 11) {
            this.selectedMonth = this.selectedMonth + 1;
        }
        else {
            this.selectedMonth = 0;
            this.selectedYear++;
        }
        this.calculate();
    }
    calculatedays() {
        let d = 0;
        this.oddDays = this.selectedYear % 400
        console.log(this.oddDays)
        for (let i = this.oddDays; i > 0; i--) {
            if ((i % 4 == 0 && i % 100 != 0) || i % 400 == 0) {
                d = d + 2
                console.log('leap')
            }
            else {
                d = d + 1
                console.log('not leap')
            }
        }
        if (d > 7) {
            d = d % 7
        }
        let a = this.odddaysinmonth();
        console.log((a + d) % 7)
        this.monthfirstday = (a + d) % 7;
    }
    odddaysinmonth() {
        let d = 0
        let m = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        for (let i = 0; i < this.selectedMonth; i) {
            d = d + m[i];
            i++;
        }
        if ((this.selectedYear % 4 == 0 && this.selectedYear % 100 != 0) || this.selectedYear % 400 == 0) {
            d = d + 1;
        }
        return d;
    }

    sendDate(a) {


    }


    book() {
        var b = this.selectDate;
        if (b == undefined || b == 'undefined') {
            let alert = this.alertCtrl.create({
                title: 'Alert!',
                subTitle: 'Please select time.',
                buttons: ['OK']
            });
            alert.present();
        }
        else {
            this.proceed_form(b);
            // this.navCtrl.push('PickTimeUserPage',{date:b,service_id:this.service_id,barber_id:this.barber_id, timeslot:this.content});
        }
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
    ngOnInit() {
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
    }

    proceed_form(time) {
        // alert("asda")
        // alert(localStorage['user_id'])
        var date = this.selectDate;
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        Observable.fromPromise(loading.present())
            .flatMap(data => this.serviceProvider.proceed_form(this.barber_id,this.bookingAddress, this.service_id, date, time, localStorage['user_id']))
            .subscribe(data =>
                loading.dismiss().then(() => {
                    this.available = data;
                    console.log(this.available)
                    this.barber_time_availability(date);
                    if (this.available.message == 'Booking Not Available') {
                        let alert = this.alertCtrl.create({
                            title: 'Alert!',
                            subTitle: 'Booking Not Available.',
                            buttons: ['OK']
                        });
                        alert.present();
                    }
                    else {
                        // this.PickbookingDate(this.barber_id,this.service_id,this.date,this.timeStarts)
                        console.log('booking_data' + JSON.stringify(data));
                        // this.navCtrl.push('BookingFormUserPage',{barber_id:this.barber_id,service_id:this.service_id,date:this.date,time:this.timeStarts});
                        this.navCtrl.push('PickTimeUserPage', {
                            full_data: this.available,
                            barber_id: this.barber_id,
                            service_id: this.service_id,
                            date: date,
                            time: time,
                            salon_id: this.salon_id
                        });
                    }
                }),
                error =>
                loading.dismiss().then(() => {})
            );
    }
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

    barber_time_availability(sdate) {
        this.myTime = [];
        this.mytsFidexdate = [];
        this.qote = [];
        this.barber_time_info = 'undifine'
        for (var i = 0; i < this.time_sch.length; ++i) {
            this.time_sch[i].check = 'none';
        }


        var barber_id = this.barber_id;
        var date = sdate;
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        Observable.fromPromise(loading.present())
            .flatMap(data => this.serviceProvider.barber_schedule(barber_id, date))
            .subscribe(data =>
                loading.dismiss().then(() => {
                    this.myflagCheck = false;
                    this.card = 'true';
                    this.barber_info = data;
                    var c = this.barber_info.barberinfo;
                    if (c) {
                        this.available_time = this.barber_info.barberinfo.split(',');
                        this.no_available_slot = 'false';
                    }
                    else {
                        this.no_available_slot = 'true';
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
                    console.log(JSON.stringify(this.myTime));


                }),
                error =>
                loading.dismiss().then(() => {})
            );
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

    }

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

    tapnpick(i, a) {
        
        let popup = this.popoverCtrl.create(AddressPopupPage);

          popup.onDidDismiss(data=>{
              // alert(JSON.stringify(data));
              this.bookingAddress=data
              if (this.bookingAddress) {
                   this.proceed_form(a);
              }
             
          })
        popup.present();
    }

    ngAfterViewInit() {
        var value = this.date_p;
        this.datecolor = value + 'datediv';
        document.getElementById(this.datecolor).style.background = '#c72228';
        document.getElementById(this.datecolor).style.color = "white";
        this.barber_time_availability(this.selectDate);
    }
}