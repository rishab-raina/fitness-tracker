import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() toggleEvent =  new EventEmitter<void>();
   logedIn = false;
   private subscription = new Subscription() ;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
     this.subscription = this.authService.authChange.subscribe((logedIn)=>{
      
        this.logedIn = logedIn;
      
    
    })
  }

  onToggle(){
    this.toggleEvent.emit();

  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
