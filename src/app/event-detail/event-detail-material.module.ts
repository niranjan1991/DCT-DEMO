import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import {MatTabsModule,
  MatBadgeModule, MatCardModule,
  MatStepperModule, MatTableModule,
  MatInputModule, MatSelectModule,
  MatButtonModule, MatProgressBarModule, MatIconModule,
  MatDatepickerModule
} from '@angular/material';
  
 

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
    MatStepperModule,
    MatTableModule,
    MatBadgeModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatProgressBarModule,
    MatIconModule,
    MatDatepickerModule
   
  ],
  exports: [  
    MatTabsModule,
    MatCardModule,
    MatStepperModule,
    MatTableModule,
    MatBadgeModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatProgressBarModule,
    MatIconModule,
    MatDatepickerModule
  ]
})
export class EventDetailMaterialModule {};
