import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

import { Observable } from 'rxjs';
import { Merchandise } from '../merchandise.model';
import { MerchandiseService } from '../merchandise.service';

@Injectable({
  providedIn: 'root',
})
export class MerchandiseEditResolver implements Resolve<Merchandise> {
  constructor(private service: MerchandiseService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Merchandise> | Promise<Merchandise> | Merchandise {
    const id = route.params['id'];
    if (!id) return null;
    return this.service.find(id);
  }
}
