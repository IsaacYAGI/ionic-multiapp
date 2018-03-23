import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the ImagenviewverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-imagenviewver',
  templateUrl: 'imagenviewver.html',
})
export class ImagenviewverPage {

  private imageSrc: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera) {
    this.imageSrc = "";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImagenviewverPage');
  }

  private openGallery (): void {
    let cameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI,      
      quality: 100,
      targetWidth: 1000,
      targetHeight: 1000,
      encodingType: this.camera.EncodingType.JPEG,      
      correctOrientation: true
    }
  
    this.camera.getPicture(cameraOptions)
      .then(file_uri =>{
        this.imageSrc = file_uri;
        //alert("Imagen URL: "+ this.imageSrc);
      },
      err => alert(err));   
  }

  private takePicture (): void {
    let cameraOptions = {
      //sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI,      
      quality: 100,
      targetWidth: 1000,
      targetHeight: 1000,
      encodingType: this.camera.EncodingType.JPEG,      
      correctOrientation: true
    }
  
    this.camera.getPicture(cameraOptions)
      .then(file_uri =>{
        this.imageSrc = file_uri;
        //alert("Imagen URL: "+ this.imageSrc);
      },
      err => alert(err));   
  }

}
