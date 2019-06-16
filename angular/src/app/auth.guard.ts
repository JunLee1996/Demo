import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, CanActivateChild, ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from './shared/app.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate ,CanActivateChild  {
  constructor(private router:Router,private route:ActivatedRoute,private as:AppService) { }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if(this.as.user){
    
      return true;
    }
    this.router.navigate(['login']);
    return false;
   
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.as.user){
     
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
  
}
