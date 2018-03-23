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


}
