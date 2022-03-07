import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})

export class NewTrainingComponent implements OnInit {
 // exercises: Exercise[]= [];
  exercises: Exercise[];
  //@Output() startNewTraining = new EventEmitter<void>();
  constructor(private trainingService: TrainingService,
    ) { }

  ngOnInit(): void {
    this.trainingService.fetchExercises();
     this.trainingService.exercisesChanged.subscribe((exercises: Exercise[])=>{
      this.exercises = exercises;
     })
 
  }
  onStartTraining(form: NgForm){
    //this.startNewTraining.emit();
    console.log(form.value.exercise)
    this.trainingService.startExercie(form.value.exercise)

  }

}
