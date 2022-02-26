import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrainingService } from './training.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit, OnDestroy {
  ongoingTraining: boolean = false;
  private sub: Subscription;
  constructor(private trainingService: TrainingService) { }

  ngOnInit(): void {
    this.sub  = this.trainingService.exerciseChanged.subscribe(exercise=>{
      if(exercise)
        this.ongoingTraining = true;
    })
  }
  ngOnDestroy(){

  }

}
