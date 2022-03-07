import { Exercise } from './exercise.model'
import { Injectable } from '@angular/core'
import { Subject, Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';


@Injectable({providedIn:'root'})
export class TrainingService{
    exerciseChanged = new Subject<Exercise>(); 
    exercisesChanged = new Subject<Exercise[]>();
    exercises: Exercise[] = [];

   private availableExercises: Exercise[] ;

    private runningExercise: Exercise | null;

    constructor(private db: AngularFirestore){}
    fetchExercises(){
            this.db.collection('availableExercises').snapshotChanges().pipe(
            map( 
              docArray=>{
              return docArray.map((arrayItem)=>{
                return{
                  id: arrayItem.payload.doc.id,
                  name: arrayItem.payload.doc.data()['name'],
                  duration:arrayItem.payload.doc.data()['duration'],
                  calories:arrayItem.payload.doc.data()['calories']
                }
              })
            })
          ).subscribe((exercises: Exercise[])=>{
              this.availableExercises = exercises;
              this.exercisesChanged.next([...this.availableExercises])
          })
    }
    startExercie(selectedId: string){
        this.runningExercise = this.availableExercises.find(exercise=>{
            return exercise.id ===selectedId;
        });
        this.exerciseChanged.next({...this.runningExercise});

    }
    completeExercise(){
        this.exercises.push(
            {...this.runningExercise, 
                date:new Date(), 
                state: 'completed' }
        )
        this.runningExercise = null;
        this.exerciseChanged.next(null);

    }
    cancelExercise( progress: number){
        this.exercises.push(
            {...this.runningExercise, 
                duration: this.runningExercise.duration * (progress / 100),
                calories: this.runningExercise.duration * (progress / 100),
                date:new Date(), 
                state: 'cancelled' }
        )
        this.runningExercise = null;
        this.exerciseChanged.next(null);


    }

    getExercises(){
        return this.availableExercises.slice();

    }
    getRunningExercise(){
        return {...this.runningExercise}
    }
    getCompletedOrCancelledExercises(){
        return this.exercises.slice();
    }
}