import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public api: ApiProvider) {

  }

  sendRudolfWakeup() {
    this.api.get('rudolf/wakeup').subscribe((res) => {
      console.log(res);  
    });
  }

  sendRudolfStatus() {
    this.api.get('rudolf/orient').subscribe((res) => {
      console.log(res);  
    });
  }

  sendIrmgardWakeup() {
    this.api.get('irmgard/wakeup').subscribe((res) => {
      console.log(res);
    });
  }

  sendIrmgardStatus() {
    this.api.get('irmgard/orient').subscribe((res) => {
      console.log(res);
    });
  }
}