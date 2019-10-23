import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppBootstrapModule } from './bootstrap.module'
import { AppMaterialModule } from '../app/material.module'; 
import { AppRoutingModule } from './app-routing.module'; 

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TrainingComponent } from './training/training.component';
import { MyStoryComponent } from './my-story/my-story.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';  
//import { ExpensesComponent } from './expenses/expenses.component';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { TrainingDetailComponent } from './training-detail/training-detail.component'; 


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TrainingComponent,
    MyStoryComponent,
    MyProfileComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    //ExpensesComponent,
    TrainingDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule, 
    BrowserAnimationsModule,
    AppBootstrapModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
