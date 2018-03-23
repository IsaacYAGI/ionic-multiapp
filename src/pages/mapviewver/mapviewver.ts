import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,  } from 'ionic-angular';
import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation';

declare var google;
/**
 * Generated class for the MapviewverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mapviewver',
  templateUrl: 'mapviewver.html',
})
export class MapviewverPage {

  options : GeolocationOptions;
  currentPos : Geoposition;
  map: any;
  places : Array<any>; 
  @ViewChild('map') mapElement: ElementRef;

  constructor(private geolocation : Geolocation, public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapviewverPage');
    this.getUserPosition();
  }

  getUserPosition(){
    let loading = this.loadingCtrl.create({
      content: 'Por favor espere...'
    });

    loading.present();
    
    this.options = {
      enableHighAccuracy : true,
      timeout:10000
    };

    this.geolocation.getCurrentPosition(this.options).then((pos : Geoposition) => {
        
    this.currentPos = pos;  

    console.log(pos);
    this.addMap(pos.coords.latitude,pos.coords.longitude);

    loading.dismiss();

    },(err : PositionError)=>{
      console.log("error : " + err.message);
      loading.dismiss();
    });
  }
  addMap(lat,long){

    let latLng = new google.maps.LatLng(lat, long);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);    
    this.addMarker();

  }

  addMarker(){

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    let content = "<p>Esta es tu posicion actual</p>";          
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }

  showRestaurants(){
    let latLng = new google.maps.LatLng(this.currentPos.coords.latitude,this.currentPos.coords.longitude);
    
    this.getRestaurants(latLng).then((results : Array<any>)=>{
      this.places = results;
      for(let i = 0 ;i < results.length ; i++){
          this.createMarker(results[i]);
      }
    },(status)=>console.log(status));
  }

  getRestaurants(latLng){
    var service = new google.maps.places.PlacesService(this.map);
    let request = {
        location : latLng,
        radius : 8047 ,
        types: ["restaurant"]
    };
    return new Promise((resolve,reject)=>{
        service.nearbySearch(request,function(results,status){
            if(status === google.maps.places.PlacesServiceStatus.OK){
                resolve(results);    
            }else{
                reject(status);
            }
        }); 
    });
  }

  createMarker(place){
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: place.geometry.location
    });   
} 


}
