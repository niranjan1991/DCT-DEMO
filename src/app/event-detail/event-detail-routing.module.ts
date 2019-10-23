import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventDetailComponent } from './event-detail.component';
import { ExpensesComponent } from '../expenses/expenses.component';

const routes: Routes = [
  { path:'', component: EventDetailComponent},
  { path:'expenses/:id', component: ExpensesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventDetailRoutingModule { }
