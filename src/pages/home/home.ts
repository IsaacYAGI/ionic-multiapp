import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {RegisterPage} from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  login(){
    alert("Login clicked!");
  }

  register(){
    this.navCtrl.push(RegisterPage);
  }


  photos(){
    alert("Fotos clicked!");
  }


  maps(){
    alert("Mapas clicked!");
  }
}
