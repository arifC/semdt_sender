import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  bCounter:number = 0;
  iCounter:number = 0;

  constructor(public navCtrl: NavController) {

  }

  sendBarbara(counter) {

  }

  sendIrmgard(counter) {

  }
}
