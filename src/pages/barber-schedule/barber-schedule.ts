

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import {ServicesProvider} from '../../providers/services/services';
import {Observable} from 'rxjs/Rx';
import { LoadingController } from 'ionic-angular';
import $ from "jquery";
/**
* Generated class for the BarberSchedulePage page.
*
* See http://ionicframework.com/docs/components/#navigation for more info
* on Ionic pages and navigation.
*/
@IonicPage()
@Component({
selector: 'page-barber-schedule',
templateUrl: 'barber-schedule.html',
})
export class BarberSchedulePage {
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
selectm;
selectDate:any;
time_sch;
barber_time_info
barber_info;
mytsFidexdate=[];
datecolor:string=null;
qote=[];
myflagCheck:boolean=false;
checkindex=[];
myTime=[];
barber_id;
mytime
timedata;
backcolor;
dublicate=[];
barber_already_booked
current_date
today_date
changecolor
savechangecolor
card;
available
box:any=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','']
constructor( public loadingCtrl: LoadingController,public viewCtrl: ViewController,public serviceProvider:ServicesProvider, public navCtrl: NavController, public navParams: NavParams) {
this.barber_id=this.navParams.get('barber_id');
alert(this.barber_id)
let m=new Date();
this.selectedYear=m.getFullYear()
this.selectedMonth=m.getMonth()
console.log(m.getMonth());
this.calculate();
var today = new Date();
this.today_date = today.getDate();
    var month=this.selectedMonth+1;
  this.selectDate=this.today_date+'-'+month+'-'+this.selectedYear;
  this.current_date=this.today_date+'-'+month+'-'+this.selectedYear;
this.backcolor='disable';

this.time_sch=[
{
time:'08:00 Am'
},
{
time:'08:45 Am'
},
{
time:'09:30 Am'
},
{
time:'10:15 Am'
},
{
time:'11:00 Am'
},
{
time:'11:45 Am'
},
{
time:'12:30 Pm'
},
{
time:'01:15 Pm'
},
{
time:'02:00 Pm'
},
{
time:'02:45 Pm'
},
{
time:'03:30 Pm'
},
{
time:'04:15 Pm'
},
{
time:'05:00 Pm'
},
{
time:'05:45 Pm'
},
{
time:'06:30 Pm'
},
{
time:'07:15 Pm'
},
{
time:'08:00 Pm'
},
]

// this.time_sch=[
// {
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
// time:"11:00 Am"
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
ngAfterViewInit(){
    var value=this.today_date;
    this.datecolor = value + 'datediv';
document.getElementById(this.datecolor).style.background = '#c72228';
document.getElementById(this.datecolor).style.color = "white";
this.savedata(this.selectDate);
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
sendDate(a){
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
// if(this.selectDate>this.current_date){
//     console.log("selectdate"+this.selectDate);
//     this.savedata(this.selectDate)
//     console.log("match_date"+this.current_date);
// }
// else if(this.selectDate<this.current_date){
//     console.log("else selectdate"+this.selectDate);
//     console.log("else match_date"+this.current_date);
// }
// else if(this.selectDate==this.current_date){
//     console.log('equal');
//     this.savedata(this.selectDate)
// }
this.sendDate(this.selectDate);
this.savedata(this.selectDate)
}
}
}
ionViewDidLoad() {
console.log('ionViewDidLoad BarberSchedulePage');
}
edit(){
    this.changecolor='red';
    this.myflagCheck=true;
    this.backcolor='enable';
    this.savechangecolor='white';
}
tapnpick(i,a){
    if (this.myflagCheck!=true) {
        return;
    }else{
        // alert(JSON.stringify(a.check))
      if (a.check=="booked") {
          return;
      }else if (a.check=="color_class") {
              // alert("color_class"+JSON.stringify(a.check))
            if (this.mytsFidexdate.indexOf(a.time)!=-1) {
                // alert(" index  mila color_class"+JSON.stringify(a.check))
                let v = 'var_' + i;
                let  x = document.getElementById(v)
                x.style.background = "#cecece";
                let  indexcheck=this.mytsFidexdate.indexOf(a.time);
                this.mytsFidexdate.splice(indexcheck,1);
                this.myTime[i].check="none"
                console.log("json"+JSON.stringify(this.mytsFidexdate))
                // var index1=this.qote.indexOf(a.time);
                // this.qote.splice(index1,1);
            }else if (this.mytsFidexdate.indexOf(a.time)==-1) {
                // alert("index ni mila color_class"+JSON.stringify(a.check))
                let v = 'var_' + i;
                let  x = document.getElementById(v)
                x.style.background = "#25d366";
                // this.checkindex.push(i);
                this.mytsFidexdate.push(a.time);
                this.myTime[i].check="color_class"
                console.log("json else"+JSON.stringify(this.mytsFidexdate))
            }    
      }else if (a.check=='none') {
          // alert('none'+JSON.stringify(a.check))
                let v = 'var_' + i;
                let  x = document.getElementById(v)
                x.style.background = "#25d366";
                // this.checkindex.push(i);
                this.mytsFidexdate.push(a.time);
                this.myTime[i].check="color_class"
                console.log("json else"+JSON.stringify(this.mytsFidexdate))
      }
    }
//     console.log("a"+JSON.stringify(a));
//     if(a.check=='booked'){
//         // alert('already booked'+a.check);
//     }
//     else{
//         if(this.myflagCheck){
//             // if (a.check!='none')
// if (a.check!='none') {
    
//      if (this.mytsFidexdate.indexOf(a.time)!=-1) {
//         var v = 'var_' + i;
//          var x = document.getElementById(v)
//          x.style.background = "#cecece";
//         var indexcheck=this.mytsFidexdate.indexOf(a.time);
//              this.mytsFidexdate.splice(indexcheck,1);
//               console.log("json"+JSON.stringify(this.mytsFidexdate))
//              // var index1=this.qote.indexOf(a.time);
//              // this.qote.splice(index1,1);
//     }else{
//          var v = 'var_' + i;
//             var x = document.getElementById(v)
//              x.style.background = "#25d366";
//             // this.checkindex.push(i);
//             this.mytsFidexdate.push(a.time);
//              console.log("json else"+JSON.stringify(this.mytsFidexdate))
//     }    

    
// }else{
//   if (this.checkindex.length>0) {
//     if (this.checkindex.indexOf(i)==-1) {
//             var v = 'var_' + i;
//             var x = document.getElementById(v)
//              x.style.background = "#25d366";
//             this.checkindex.push(i);
//             this.qote.push(a.time);
//             console.log("push"+this.qote);

//     }
//     else if (this.checkindex.indexOf(i)!=-1) {
//         var v = 'var_' + i;
//          var x = document.getElementById(v)
//          x.style.background = "#cecece";
//         var index=this.checkindex.indexOf(i);
//              this.checkindex.splice(index,1);
//              var index1=this.qote.indexOf(a.time);
//              this.qote.splice(index1,1);
//               console.log("push1"+this.qote);
//     }

// }else{
//     var v = 'var_' + i;
//     var x = document.getElementById(v)
//     x.style.background = "#25d366";
//   this.checkindex.push(i);
//   this.qote.push(a.time);
//   console.log("qote"+this.qote);    
// }
// }
// }

// ////////////////time push ////////////////////////
// // if (this.qote.length>0) {
// //     if (this.qote.indexOf(a.time)==-1) {
           
// //             this.qote.push(a.time);
// //     }
// //     else if (this.qote.indexOf(a.time)!=-1) {
// //         var index=this.qote.indexOf(a.time);
// //              this.qote.splice(index,1);
// //     }

// // }else{

// //   this.qote.push(a.time);    
// // }
// }
}
Fix_schedule(){
    this.changecolor='white';
    this.savechangecolor='red';
var salon_id=localStorage['salon_id'];
var barber_id=this.barber_id;
var date=this.selectDate;
let mytsFixedLength=this.mytsFidexdate.length;

let myAlreadyFixedLength=this.barber_already_booked.length;
if (mytsFixedLength>myAlreadyFixedLength) {
    
    for(let i=0;i<this.mytsFidexdate.length;i++){
        var obj=this.mytsFidexdate[i];
        if (this.barber_already_booked.indexOf(obj)!=-1) {
            var index1=this.mytsFidexdate.indexOf(obj);
             this.mytsFidexdate.splice(index1,1);
             console.log("splice1"+JSON.stringify(this.mytsFidexdate));
        }
    }
}else{
    for(let i=0;i<this.barber_already_booked.length;i++){
        var obj=this.barber_already_booked[i];
        if (this.mytsFidexdate.indexOf(obj)!=-1) {
            var index1=this.mytsFidexdate.indexOf(obj);
             this.mytsFidexdate.splice(index1,1);
              console.log("splice2"+JSON.stringify(this.mytsFidexdate));
        }
    }
}
if(this.mytsFidexdate==undefined ){
this.timedata=this.qote.toString();
}
else{
    var a=this.mytsFidexdate.concat(this.qote);
    this.timedata=a.toString();
    console.log("timedata"+this.timedata);
}

// this.serviceProvider.salon_add_barber_schedule(salon_id,barber_id,date,this.timedata)
// .subscribe(data  =>{ 
//     this.savedata(date);
// console.log(JSON.stringify(data));


// }),
// error  => {}
 let loading = this.loadingCtrl.create({content: 'Please wait...'});
        Observable.fromPromise(loading.present())
        .flatMap(data => this.serviceProvider.salon_add_barber_schedule(salon_id,barber_id,date,this.timedata))
        .subscribe(data =>
          loading.dismiss().then(() =>{ 
   this.savedata(date);
console.log(JSON.stringify(data));
          }),
          error =>
          loading.dismiss().then(() => {})
          );
}

savedata(sdate){
this.myTime=[];
this.mytsFidexdate=[];
this.qote=[];
this.barber_time_info='undifine'
this.barber_already_booked=[];
// this.time_sch=this.dublicate;
for (var i = 0; i <this.time_sch.length; ++i) {
    this.time_sch[i].check='none'
    // code...=
}

var barber_id=this.barber_id;
var date=sdate;
 let loading = this.loadingCtrl.create({content: 'Please wait...'});
        Observable.fromPromise(loading.present())
        .flatMap(data => this.serviceProvider.barber_schedule(barber_id,date))
        .subscribe(data =>
          loading.dismiss().then(() =>{ 
                  this.myflagCheck=false;
    this.backcolor='disable';
this.barber_info=data;
if(this.barber_info.message=="Entered date is past date please select future date" || this.barber_info.status==0){
    this.available='true';
}
else{
    this.available='false';
if(this.barber_info.alreadyinfo[0]!='There is no time Booking' ){
this.barber_already_booked=this.barber_info.alreadyinfo;

console.log("alreadyinfo"+JSON.stringify(this.barber_already_booked));    
}

if(!this.barber_already_booked){
    this.barber_already_booked=[];
}
console.log("barber infoooo"+this.barber_info.barberinfo);

if (this.barber_info.barberinfo) {
this.barber_time_info=this.barber_info.barberinfo;

// this.mytsFidexdate=this.barber_info.barberinfo;
this.mytsFidexdate=this.barber_info.barberinfo.split(',');
console.log("mytsFidexdate"+JSON.stringify(this.mytsFidexdate));
}


if(this.barber_time_info!='undifine'){
    

    this.mytime='true';

 for(let i=0;i<this.time_sch.length;i++){
  var obj=this.time_sch[i]
 if(this.barber_already_booked){
    
      if(this.barber_already_booked.indexOf(obj.time)!=-1){

obj.check='booked';
this.myTime.push(obj);
  }
    else if (this.barber_time_info.indexOf(obj.time)!=-1) {
     obj.check='color_class';
     this.myTime.push(obj)

        
  }
  else{
    this.myTime.push(obj)
  }
 }
 else{
     if (this.barber_time_info.indexOf(obj.time)!=-1) {
     obj.check='color_class';
     this.myTime.push(obj)

        
  }
  else{
    this.myTime.push(obj)
  }
 }


} 

}
else{
    console.log('elseeeeeeeeeeeeeee');
  this.myTime=this.time_sch;
  console.log("myTime"+JSON.stringify(this.myTime));
  this.mytime='false';
}
}

console.log(JSON.stringify(data));
          }),
          error =>
          loading.dismiss().then(() => {})
          );

}
dismiss(){
  this.viewCtrl.dismiss();
}
close(){
    this.card='false';
}
}

