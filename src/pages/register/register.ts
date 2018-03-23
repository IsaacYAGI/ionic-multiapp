import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseAuth } from '@firebase/auth-types';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('username') username;
  @ViewChild('password') password;

  constructor(private firebase:AngularFireAuth, public alertCtrl: AlertController, public loadingCtrl: LoadingController,  public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  showAlert(message){
    this.alertCtrl.create({
      title: 'Register Page',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  registrarUsuario(){

    let loading = this.loadingCtrl.create({
      content: 'Por favor espere...'
    });

    loading.present();


    this.firebase.auth.createUserWithEmailAndPassword(this.username.value,this.password.value)
    .then(data=>{
      loading.dismiss();
      this.showAlert("Usuario registrado exitosamente!");
    })
    .catch(error =>{
      loading.dismiss();
      this.showAlert("Error: "+error.message);
    });
    console.log(this.username.value,this.password.value);
  }

}
