import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit, OnDestroy {
  @Output() closeSidenav = new EventEmitter<void>()
  isLogged=false;
  private subscription = new Subscription()
  constructor( private authService: AuthService) { }

  ngOnInit(): void {
    this.subscription = this.authService.authChange.subscribe(islogged=>{
      if(islogged)
        this.isLogged = true;
      else
      this.isLogged = false;
        
    })
  }
  onSidenavClose(){
    this.closeSidenav.emit();

  }
  onLogout(){
    this.authService.logout();
    this.onSidenavClose();
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
