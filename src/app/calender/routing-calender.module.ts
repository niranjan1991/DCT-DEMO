import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CalenderComponent } from "./calender.component";
//import { EventDetailComponent } from "../event-detail/event-detail.component";
//import { ExpensesComponent } from '../expenses/expenses.component';
 


const routes: Routes = [
    { path: "", component: CalenderComponent },
    { path : "event/:id", loadChildren: '../event-detail/event-detail.module#EventDetailModule'
    // children: [
    //     { path: 'expenses',  component: ExpensesComponent },
    //   ]
    },
    // { path: "expenses:/id", component : ExpensesComponent }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})

export class calenderRoutingModule { }