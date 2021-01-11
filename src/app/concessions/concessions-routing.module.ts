import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConcessionsComponent } from './pages/concessions/concessions.component';

const routes: Routes = [
  { path: "", component: ConcessionsComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConcessionsRoutingModule { }
