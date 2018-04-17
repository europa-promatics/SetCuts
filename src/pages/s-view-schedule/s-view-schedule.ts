import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {PickTimeUserPage} from '../pick-time-user/pick-time-user';
import { Http } from '@angular/http';
import { AlertController} from 'ionic-angular';
import { LoadingController, MenuController } from 'ionic-angular';
import {ServicesProvider} from '../../providers/services/services';
import {Observable} from 'rxjs/Rx';
import {NewPage} from '../new/new';
import { ModalController } from 'ionic-angular';

import {
  ToastController
} from 'ionic-angular';

/**
 * Generated class for the SViewSchedulePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-s-view-schedule',
  templateUrl: 's-view-schedule.html',
})
export class SViewSchedulePage {
    month:any=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  	days:any=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    selectedMonth;
    daysinmonth;
    selectedYear;
    date:number;
    year;
    leapornot;
    totaldays;
    oddDays
    monthfirstday;
    selectDate:any;
    userid;
    http;
    service_id;
    data;
    barber_id
    content
    selectm
    available
    timeStarts;
    datecolor:string=null;
    time_sch;
    date_p;
mytsFidexdate;
myflagCheck:boolean=false;
myTime=[];
barber_info
checkindex=[];
barber_time_info
mytime
qote=[];
backcolor
barber_already_booked
    box:any=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','']
  constructor(public modalCtrl: ModalController,public toastCtrl: ToastController,public serviceProvider:ServicesProvider, public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController,  http: Http, public alertCtrl: AlertController,
  public viewCtrl: ViewController) {
  	let m=new Date();
    var today = new Date();
this.date_p = today.getDate();
  	this.selectedYear=m.getFullYear()
  	this.selectedMonth=m.getMonth()
  	console.log(m.getMonth());
    var month=this.selectedMonth+1;
     this.selectDate=this.date_p+'-'+month+'-'+this.selectedYear;
    this.calculate();
    this.userid=localStorage['user_id']
    this.http=http;
    this.data={};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SViewSchedulePage');
  }
pickDate(value){
    if(value!=null){
      if(this.datecolor!=null){
        document.getElementById(this.datecolor).style.background = '#fff';
        document.getElementById(this.datecolor).style.color = "#000";
        this.datecolor=null;
        this.pickDate(value);
      }
      if(this.datecolor==null){
        this.datecolor = value + 'datediv';
        document.getElementById(this.datecolor).style.background = '#c72228';
        document.getElementById(this.datecolor).style.color = "white";
        this.selectm=this.selectedMonth+1;
        // alert("picked date "+value+'-'+this.selectedMonth+'-'+this.selectedYear);
        this.selectDate=value+'-'+this.selectm+'-'+this.selectedYear;
        // this.sendDate(this.selectDate);
      }
    }
  }
  calculate(){
    if((this.selectedYear % 4 == 0 && this.selectedYear % 100 !=0) || this.selectedYear % 400 == 0 )
    {
      this.leapornot='leap'
      this.totaldays=366;
      if(this.selectedMonth+1==1 || this.selectedMonth+1==3 || this.selectedMonth+1==5 || this.selectedMonth+1==7 || this.selectedMonth+1==8 || this.selectedMonth+1==10 || this.selectedMonth+1==12)
      {this.daysinmonth=31;}
      if(this.selectedMonth+1==2)
      {this.daysinmonth=29;}
      if(this.selectedMonth+1==4 || this.selectedMonth+1==6 || this.selectedMonth+1==9 || this.selectedMonth+1==11) 
      {this.daysinmonth=30;}
    }
    else{
      this.leapornot='not leap'
      this.totaldays=365;
      if(this.selectedMonth+1==1 || this.selectedMonth+1==3 || this.selectedMonth+1==5 || this.selectedMonth+1==7 || this.selectedMonth+1==8 || this.selectedMonth+1==10 || this.selectedMonth+1==12)
      {this.daysinmonth=31;}
      if(this.selectedMonth+1==2)
      {this.daysinmonth=28;}
      if(this.selectedMonth+1==4 || this.selectedMonth+1==6 || this.selectedMonth+1==9 || this.selectedMonth+1==11) 
      {this.daysinmonth=30;}
    }
    this.calculatedays();
    let z=1 
    for(let i=0;i<this.box.length;i++){
      if(i>=this.monthfirstday){
        if(z<=this.daysinmonth){
          this.box[i]=z;
          z++;
        }
        else{
          this.box[i]=null;
        }
      }
      else{
        this.box[i]=null;
      }
    }
  }
  previousMonth(){
    if(this.selectedMonth>0){
      this.selectedMonth=this.selectedMonth-1;  
    }else{
      this.selectedMonth=11;
      this.selectedYear--;
    }
    this.calculate();
  }
  nextMonth(){
  	if(this.selectedMonth<11){
  		this.selectedMonth=this.selectedMonth+1;	
  	}else{
  		this.selectedMonth=0;
  		this.selectedYear++;
  	}
    this.calculate();
  }
  calculatedays(){
    let d=0;
    this.oddDays = this.selectedYear % 400
    console.log(this.oddDays)
    for(let i=this.oddDays;i>0;i--){
      if((i % 4 == 0 && i % 100 != 0) || i % 400 == 0){
        d=d+2
        console.log('leap')
      }
      else{
        d=d+1
        console.log('not leap')
      } 
    }
    if(d>7){
      d = d % 7
    }
    let a = this.odddaysinmonth();
    console.log((a+d)%7)
    this.monthfirstday=(a+d)%7;
  }
  odddaysinmonth(){
    let d=0
    let m=[31,28,31,30,31,30,31,31,30,31,30,31]
    for(let i=0;i<this.selectedMonth;i){
        d=d+m[i];i++;
    } 
    if((this.selectedYear % 4 == 0 && this.selectedYear % 100 !=0) || this.selectedYear % 400 == 0){
      d=d+1;
    }  
    return d;
  }

ngAfterViewInit(){
  var value=this.date_p;
  this.datecolor = value + 'datediv';
document.getElementById(this.datecolor).style.background = '#c72228';
document.getElementById(this.datecolor).style.color = "white";
}
  view_Schedule(){
 // let modal = this.modalCtrl.create(NewPage,{date:this.selectDate});
 //    modal.present();
 this.navCtrl.push(NewPage,{date:this.selectDate});
     
  }
}
