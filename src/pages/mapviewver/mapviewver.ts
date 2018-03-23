import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation';

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
        enableHighAccuracy : true
    };

    this.geolocation.getCurrentPosition(this.options).then((pos : Geoposition) => {
        this.currentPos = pos;      
        console.log(pos);
        loading.dismiss();
    },(err : PositionError)=>{
        console.log("error : " + err.message);
        loading.dismiss();
    });
}


}
