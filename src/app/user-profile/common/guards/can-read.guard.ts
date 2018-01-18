import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { take, map, tap } from 'rxjs/operators';
import { AuthService } from '../../../shared/service/auth.service';

@Injectable()
export class CanReadGuard implements CanActivate {

  constructor(private auth: AuthService) {  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.user$.pipe(
      take(1),
      map (user => user && this.auth.canRead(user) ? true : false),
      tap( canView => {
        if (!canView) {
          console.error('Access denied, Must have permission to view content');
        }
      })
    )
  }
}
