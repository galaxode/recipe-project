import { Injectable } from '@angular/core';
import { CanActivate,
         CanLoad,
         ActivatedRouteSnapshot,
         RouterStateSnapshot,
         Route,
         Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/signin']);
    }
  }

  canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/signin']);
    }
  }
}
