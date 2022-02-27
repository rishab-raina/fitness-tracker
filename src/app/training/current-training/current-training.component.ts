import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogClose, MatDialogConfig } from '@angular/material/dialog';
import { StopTrainingComponent } from '../stop-training.component';
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';


@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  @Output() trainingStopped = new EventEmitter<void>();
  exercise: Exercise | null = null;
  progress = 0;
  timer: any;
  
  constructor(private dialog: MatDialog, private trainingService: TrainingService) {
   
   }

  ngOnInit(): void {
  
   this.exerciseInterval();
  }
  
  exerciseInterval(){
    this.exercise = this.trainingService.getRunningExercise();
    const step = this.exercise.duration / 100 * 1000
    this.timer = setInterval(()=>{
      this.progress += 1
      if(this.progress >=100){
        this.trainingService.completeExercise();
        clearInterval(this.timer)
      }
    },step)
  }
  onStopTraining(){
    clearInterval(this.timer);
    let passedData=  {
      data:{
        progress: this.progress
      }
      
    }
    let dialogRef = this.dialog.open(StopTrainingComponent, passedData  );
    dialogRef.afterClosed().subscribe((dialogRes)=>{
      //console.log(dialogRes)
      if(dialogRes)
        // this.trainingStopped.emit();
        this.trainingService.cancelExercise(passedData.data.progress)
      else
        this.exerciseInterval();
       
        
    })
  }

}
