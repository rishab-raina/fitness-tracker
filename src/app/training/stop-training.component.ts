import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector:'app-stop-training',
    template:`
            <h1 mat-dialog-title>Are you sure?</h1>
            <mat-dialog-content>
            <p> You have already finished {{passedData.progress}} %</p>
            </mat-dialog-content>
            <mat-dialog-actions>
            <button mat-button [mat-dialog-close]="true">Yes</button>
            <button mat-button [mat-dialog-close]="false">Cancel</button>
            </mat-dialog-actions>
            `
})
export class StopTrainingComponent{
    constructor(@Inject(MAT_DIALOG_DATA) public passedData: {progress: number}){}
}