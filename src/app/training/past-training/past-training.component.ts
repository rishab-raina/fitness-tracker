import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.css']
})
export class PastTrainingComponent implements OnInit {
   speed = 100;
  constructor() { }
 
  ngOnInit(): void {
    console.log(this.speed);
  }
    
}
