import {NgModule} from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import{MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import { MatNativeDateModule } from '@angular/material/core';
import {MatSidenavModule} from '@angular/material/sidenav'
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table'; 
import {CdkTableModule} from '@angular/cdk/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
    imports: [MatSliderModule,
              MatButtonModule,
              MatIconModule,
              MatFormFieldModule,
              MatInputModule,
              MatDatepickerModule,
              MatNativeDateModule,
              MatCheckboxModule,
              MatSidenavModule,
              MatToolbarModule,
              MatListModule,
              MatTabsModule,
              MatCardModule,
              MatSelectModule,
              MatProgressSpinnerModule,
              MatDialogModule,
              MatTableModule,
              MatSortModule,
              MatPaginatorModule
              
              


             ],
    exports: [MatSliderModule,
              MatButtonModule,
              MatIconModule,
              MatFormFieldModule,
              MatInputModule,
              MatDatepickerModule,
              MatNativeDateModule,
              MatCheckboxModule,
              MatSidenavModule,
              MatToolbarModule,
              MatListModule,
              MatTabsModule,
              MatCardModule,
              MatSelectModule,
              MatProgressSpinnerModule,
              MatDialogModule,
              MatTableModule,
              MatSortModule,
              MatPaginatorModule

             ]
})

export class MaterialModule{}