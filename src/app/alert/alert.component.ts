import { Component, OnInit } from '@angular/core';
import { AlertService } from './alert.service';
import { Observable } from 'rxjs';
import { Alert } from './alert.model';
import {
  animate,
  state,
  style,
  transition,
  trigger,
  group,
} from '@angular/animations';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  animations: [
    trigger('fade', [
      state('in', style({ opacity: 0, height: '*' })),
      transition('void => *', [
        style({ opacity: 0, height: 0, paddingTop: 0, color: 'transparent' }),
        animate(500),
      ]),
      transition('* => void', [
        group([
          animate(100, style({ color: 'transparent' })),
          animate(500, style({ opacity: 0, height: 0, paddingTop: 0 })),
        ]),
      ]),
    ]),
  ],
})
export class AlertComponent implements OnInit {
  constructor(private service: AlertService) {}

  ngOnInit(): void {}

  getAlerts(): Observable<Alert[]> {
    return this.service.getAlerts();
  }

  removeButton(id: number): void {
    this.service.removeAlert(id);
  }
}
