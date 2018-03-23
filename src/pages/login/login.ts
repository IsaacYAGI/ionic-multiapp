import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseAuth } from '@firebase/auth-types';

import { LoggedinPage } from '../loggedin/loggedin';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('username') username;
  @ViewChild('password') password;

  constructor(private firebase:AngularFireAuth, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  showAlert(message){
    this.alertCtrl.create({
      title: 'Login Page',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  loginUser(){
    this.firebase.auth.signInWithEmailAndPassword(this.username.value, this.password.value)
    .then(data => {
      this.showAlert('Successfully loggedin!');
      this.navCtrl.setRoot(LoggedinPage);
    })
    .catch(error => {
      this.showAlert('Error: '+error.message);
    });
  }
}
