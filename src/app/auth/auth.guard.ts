import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private authService: AuthService,
        private router: Router){}
    
    canActivate(  
        route: ActivatedRouteSnapshot,  
        state: RouterStateSnapshot
        
        ):
    boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>
    {
        if(this.authService.isAuth())   {
            console.log("auth guard allowed")
            return true;
        }
        
          
        else{
            console.log("auth guard "+this.authService.isAuth())
            this.router.navigate(['/login']);
            return false
        }
        
    }
}