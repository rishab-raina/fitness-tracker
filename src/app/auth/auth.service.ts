import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { TrainingService } from '../training/training.service';


@Injectable()
export class AuthService{
    authChange = new Subject<boolean>();
    private user: null | User = null;
    isAuthenticated = false;

    constructor(
        private router: Router, 
        private fireAuth: AngularFireAuth,
        private trainingService: TrainingService){}
    

    registerUser(authData:AuthData){
        // this.user = {
        //     email: authData.email,
        //     userId: Math.round(Math.random()*10000).toString()
        // };
        this.fireAuth.createUserWithEmailAndPassword(authData.email, authData.password)
        .then((res)=>{
            console.log(res)
            this.authChange.next(true);
        this.authSuccessfully();
        
        })
        .catch(err=>{
            console.log(err)
            this.isAuthenticated = false
        })
        
    }
    login(authData: AuthData){
        // this.user = {
        //     email: authData.email,
        //     userId: Math.round(Math.random()*10000).toString()

        // };
        this.fireAuth.signInWithEmailAndPassword(authData.email, authData.password)
        .then((res)=>{
            this.authChange.next(true);
            console.log(res)
            this.authSuccessfully()
        })
        .catch(err=>console.error(err)
        )
        
        
        
    }
    logout(){
        this.fireAuth.signOut();
        this.user = null;
        this.authChange.next(false);
        this.router.navigate(['/login'])
        this.trainingService.cancelSubscriptions()
        
    }
    getUser(){
        return {...this.user}
    }
    isAuth(){
        console.log("user in isAuth"+this.user)
        return !!this.isAuthenticated
        // if(this.user ==null)
        // return false;
        // else
        // return true;
    }
    private authSuccessfully(){
        this.isAuthenticated = true;
        this.router.navigate(['/training']);
    }
}