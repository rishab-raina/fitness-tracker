import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})

export class NewTrainingComponent implements OnInit {
  exercises: Exercise[]= [];
  //@Output() startNewTraining = new EventEmitter<void>();
  constructor(private trainingService: TrainingService) { }

  ngOnInit(): void {
    this.exercises = this.trainingService.getExercises();
  }
  onStartTraining(form: NgForm){
    //this.startNewTraining.emit();
    console.log(form.value.exercise)
    this.trainingService.startExercie(form.value.exercise)

  }

}
