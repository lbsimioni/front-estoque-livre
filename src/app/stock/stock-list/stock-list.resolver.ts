import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

import { Observable } from 'rxjs';
import { StockService } from '../stock.service';
import { Stock } from '../stock.model';

@Injectable({
  providedIn: 'root',
})
export class StockListResolver implements Resolve<Stock[]> {
  constructor(private service: StockService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Stock[]> | Promise<Stock[]> | Stock[] {
    return this.service.list();
  }
}
