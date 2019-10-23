import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import {  MatTabsModule, MatCardModule, MatDialogModule,
          MatDatepickerModule, MatFormFieldModule, MatInputModule,
          MatRadioModule, MatSelectModule,
         } from '@angular/material';
  
  
 

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
    MatDialogModule,
    MatDatepickerModule,
    MatFormFieldModule, MatInputModule,
    MatRadioModule,MatSelectModule
  ],
  exports: [  
    MatTabsModule,
    MatCardModule,
    MatDialogModule,
    MatDatepickerModule,
    MatFormFieldModule, MatInputModule,
    MatRadioModule, MatSelectModule
  ],
})
export class CalenderMaterialModule {};
