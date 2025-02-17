import {createComponent, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateEmployeeComponent} from "./employee/create-employee/create-employee.component";
import {ListEmployeeComponent} from "./employee/list-employee/list-employee.component";
import {UpdateEmployeeComponent} from "./employee/update-employee/update-employee.component";

const routes: Routes = [
  {path:'',redirectTo:'employee', pathMatch:'full'},
  {path:'add', component: CreateEmployeeComponent},
  {path:'employees', component: ListEmployeeComponent},
  { path: 'update/:id', component: UpdateEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
