import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventDetailRoutingModule } from './event-detail-routing.module';
import { EventDetailComponent } from './event-detail.component';
import { ExpensesComponent } from '../expenses/expenses.component';
import { EventDetailMaterialModule } from './event-detail-material.module';

@NgModule({
  declarations: [
    EventDetailComponent,
    ExpensesComponent
  ],
  imports: [
    CommonModule,
    EventDetailRoutingModule,
    EventDetailMaterialModule
  ]
})
export class EventDetailModule { }
