import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatBadgeModule, MatCardModule,
  MatStepperModule, MatTableModule,
  MatInputModule, MatSelectModule,
  MatButtonModule, MatProgressBarModule,
  MatNativeDateModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule, MatBadgeModule, MatStepperModule, MatTableModule , MatProgressBarModule,  MatInputModule, MatSelectModule, MatButtonModule, MatNativeDateModule
  ],
  exports: [
    MatCardModule, MatBadgeModule, MatStepperModule, MatTableModule, MatProgressBarModule,  MatInputModule, MatSelectModule, MatButtonModule, MatNativeDateModule
  ]
})
export class AppMaterialModule { };
