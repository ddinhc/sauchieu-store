import {  OnInit } from '@angular/core';
import { Input, Component } from '@angular/core';

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [{
    type: 'primary',
    message: 'This is an success alert',
  }
];
@Component({
  selector: 'app-alertbar',
  templateUrl: './alertbar.component.html',
})
export class AlertbarComponent implements OnInit {

alerts: Alert[];

  constructor() {
    this.reset();
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }
  ngOnInit() {
  }

}
