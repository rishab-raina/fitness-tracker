import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable()
export class AuthService{
    authChange = new Subject<boolean>();
    private user: null | User= null;

    constructor(private router: Router){}
    

    registerUser(authData:AuthData){
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random()*10000).toString()
        };
        this.authChange.next(true);
        this.authSuccessfully();
    }
    login(authData: AuthData){
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random()*10000).toString()

        };
        this.authChange.next(true);
        this.authSuccessfully()
    }
    logout(){
        this.user = null;
        this.authChange.next(false);
        this.router.navigate(['/login'])
        
    }
    getUser(){
        return {...this.user}
    }
    isAuth(){
        console.log("user in isAuth"+this.user)
        return !!this.user
        // if(this.user ==null)
        // return false;
        // else
        // return true;
    }
    private authSuccessfully(){
        this.router.navigate(['/training']);
    }
}