import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoggedinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loggedin',
  templateUrl: 'loggedin.html',
})
export class LoggedinPage {

  email : string;

  constructor(private firebase:AngularFireAuth, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams) {
    this.email = firebase.auth.currentUser.email;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoggedinPage');
  }

  showAlert(message){
    this.alertCtrl.create({
      title: 'Loggedin Page',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  cerrarSesion(){

    let loading = this.loadingCtrl.create({
      content: 'Por favor espere...'
    });

    loading.present();

    //this.showAlert("Cerrando sesion...");
    this.firebase.auth.signOut()
    .then(data =>{
      loading.dismiss();
      //console.log("Sesion terminada: ", data);
      this.navCtrl.setRoot(HomePage);
      //console.log(this.firebase.auth.currentUser.email);
    })
    .catch(error =>{
      loading.dismiss();
      this.showAlert("Error: "+error.message);
    });
  }
}
