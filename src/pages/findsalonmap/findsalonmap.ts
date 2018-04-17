import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { App, MenuController } from 'ionic-angular';
import { Http } from '@angular/http';
import {Salondetail} from '../salondetail/salondetail';
import { LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
declare var google
/**
 * Generated class for the Findsalonmap page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-findsalonmap',
  templateUrl: 'findsalonmap.html',
})
export class Findsalonmap {
lat:any;
lng:any;
map:any;
data;
markers=[];
arr=[];
ar=[];
i:number=0;
j:number=0;
posts;
http;
asif1
asif2;
asif3;
asif4;
range;
userid;
userlat;
userlng;
nearbyrange;
latres;
filterrange;
currentposlat;
currentposlng;
  constructor(public navCtrl: NavController, 
  	public navParams: NavParams,app: App, menu: MenuController,http:Http,
  	public geolocation: Geolocation,
    public loadingCtrl: LoadingController) {
  	this.http=http;
    this.data={}
      this.posts='';
 this.userid=localStorage['user_id'];
 // alert("near by"+this.nearby)
  }

  ngOnInit(){
     
let loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
       loader.present();
    console.log("userid"+this.userid)
    

  this.http.get('http://18.220.97.146/barber/WebServices/salonInfo.json')
        .map(res => res.json())
        .subscribe(data => {
          loader.dismiss();
        // console.log(data);
        this.posts=data;
        console.log("salon info "+JSON.stringify(this.posts));
       
        

    });








this.geolocation.getCurrentPosition().then((position) => {
	 console.log("position data"+JSON.stringify(position))
       loader.dismiss();
      console.log("current latitude "+JSON.stringify(position.coords.latitude))
       console.log("current longitute "+JSON.stringify(position.coords.longitude))
     
      this.lat=position.coords.latitude;
      this.lng=position.coords.longitude;
      let mapEle = document.getElementById('map1');
      this.map = new google.maps.Map(mapEle,{
      center: {lat:position.coords.latitude, lng: position.coords.longitude},
      zoom: 11,
      mapTypeId: google.maps.MapTypeId.ROADMAP
 
    });


       google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      google.maps.event.trigger(mapEle, 'resize');
    });
     
       // this.salonmarker();
       this.usermarker(position.coords.latitude,position.coords.longitude);

       this.currentposlat=position.coords.latitude;
       this.currentposlng=position.coords.longitude;
       // this.Range(position.coords.latitude,position.coords.longitude);

    }, (err) => {
      console.log(err);
    });
  }





   usermarker(a,b){

     if(a &&b ){

	let marker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: {lat:a, lng: b}, 
   // icon:'assets/icon/salon.png'
       });     
     }
   }


Range(){
	// alert(this.nearbyrange);
   let nearbylat=[];
   let nearbylng=[];
   let nearbyslname=[];
   let lt:number=0;
   let lg:number=0;
   let nm:number=0;
	this.userid;
    // this.userlat=this.currentposlat;
    // this.userlng= this.currentposlng;
    this.nearbyrange;
let loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
       loader.present();
     var link='http://18.220.97.146/barber/WebServices/nearDistance.json';
     var data=JSON.stringify({

     	     userid:this.userid,
     	     latitude:this.currentposlat,
     	     longitude:this.currentposlng,
     	     radius:this.nearbyrange
     });

     this.http.post(link,data)
     .map(res=>res.json())
     .subscribe(data=>{
       loader.dismiss();
       if(data.message=="There is no salon near about you"){

       }
       else{
                 this.filterrange=data;
           console.log("filter data"+JSON.stringify(this.filterrange))

       for(let nearbydata of this.filterrange.saloninfo){

         nearbylat[lt]=nearbydata.latitude;
         nearbylng[lg]=nearbydata.longitude;
         nearbyslname[nm]=nearbydata.salonname;

         console.log("nearbylng"+JSON.stringify(nearbylat[lt]))

         let nearbylatLng = new google.maps.LatLng(nearbylat[lt],nearbylng[lg]);


  let marker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
      // position: {lat:a, lng: b}
    position: nearbylatLng,
    icon:'http://18.220.97.146/barber/app_link/icon/home.png'


       });     


   this.markers.push(marker);  
 
       }
       }
   


     });

}

}
