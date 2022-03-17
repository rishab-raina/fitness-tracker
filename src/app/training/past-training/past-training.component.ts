import { Component, OnInit, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';

import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.css']
})
export class PastTrainingComponent implements OnInit,AfterViewInit, OnDestroy {
  displayedColumns = ['date', 'name', 'duration', 'calories', 'state'];
  dataSource = new MatTableDataSource<Exercise>();
  @ViewChild(MatSort) sortTable: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  private subs: Subscription;

  constructor(private trainingService: TrainingService) {}

  ngOnInit() {
    
    this.subs = this.trainingService.finshedExercisesChanged.
    subscribe((exercises:Exercise[])=>{
      this.dataSource.data = exercises
    })
    this.trainingService.getCompletedOrCancelledExercises();
    
  }
  ngAfterViewInit(){
    this.dataSource.sort = this.sortTable;
    this.dataSource.paginator = this.paginator;

  }
  applyFilter(event){
     this.dataSource.filter = event.target.value;
  }
  ngOnDestroy(){
    this.subs.unsubscribe();
  }
}
