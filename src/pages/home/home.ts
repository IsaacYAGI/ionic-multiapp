import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {RegisterPage} from '../register/register';
import { LoginPage } from '../login/login';
import { ImagenviewverPage } from '../imagenviewver/imagenviewver';
import { MapviewverPage } from '../mapviewver/mapviewver';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  login(){
    this.navCtrl.push(LoginPage);
  }

  register(){
    this.navCtrl.push(RegisterPage);
  }


  photos(){
    this.navCtrl.push(ImagenviewverPage);
  }


  maps(){
    this.navCtrl.push(MapviewverPage);
  }
}
