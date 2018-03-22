import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  loginAndRegister(){
    alert("Login clicked!");
  }


  photos(){
    alert("Fotos clicked!");
  }


  maps(){
    alert("Mapas clicked!");
  }
}
