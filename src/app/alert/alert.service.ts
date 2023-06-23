import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Alert } from './alert.model';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private alerts: Alert[] = [];
  private alertsEmmitter$: BehaviorSubject<Alert[]> = new BehaviorSubject(
    this.alerts
  );

  constructor() {}

  getAlerts(): Observable<Alert[]> {
    return this.alertsEmmitter$;
  }

  removeAlert(id: number): void {
    this.alerts = this.alerts.filter((a) => a.id !== id);
    this.emmit();
  }

  addAlert(alert: Alert): void {
    if (this.alerts.length === 0) alert.id = 1;
    else alert.id = this.alerts[this.alerts.length - 1].id + 1;

    this.alerts.push(alert);
    this.emmit();
  }

  private emmit() {
    this.alertsEmmitter$.next(this.alerts);
  }
}
