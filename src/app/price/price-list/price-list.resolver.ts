import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

import { Observable } from 'rxjs';
import { Price } from '../price.model';
import { PriceService } from '../price.service';

@Injectable({
  providedIn: 'root',
})
export class PriceListResolver implements Resolve<Price[]> {
  constructor(private service: PriceService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Price[]> | Promise<Price[]> | Price[] {
    return this.service.list();
  }
}
