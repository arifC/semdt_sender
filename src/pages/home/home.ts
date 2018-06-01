import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  bCounter: number = 0;
  iCounter: number = 0;

  constructor(public navCtrl: NavController, public api: ApiProvider) {

  }

  sendBarbara(counter) {
    let body = {
      'counter': this.bCounter
    }
    this.api.post('barbara', body).subscribe((res) => {
      console.log(res);  
    });;
    this.bCounter++;
  }

  sendIrmgard(counter) {
    let body = {
      'counter': this.iCounter
    }
    this.api.post('irmgard', body).subscribe((res) => {
      console.log(res);
    });
    this.iCounter++;
  }
}
