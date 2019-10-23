import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TrainingComponent } from './training/training.component';
import { MyStoryComponent } from './my-story/my-story.component'; 
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//import { ExpensesComponent } from './expenses/expenses.component';
import { MyProfileComponent } from './my-profile/my-profile.component'; 
import { TrainingDetailComponent } from './training-detail/training-detail.component'; 


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'calender', loadChildren: './calender/calender.module#CalenderModule' },
  { path: 'training', component: TrainingComponent },
  { path: 'mystory', component: MyStoryComponent },
  { path: 'myprofile', component: MyProfileComponent },
 // { path: 'expenses', component: ExpensesComponent },
  { path: 'trainingdetail/:id', component : TrainingDetailComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
