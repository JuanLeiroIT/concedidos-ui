import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConciliationsComponent } from './pages/conciliations/conciliations.component';

const routes: Routes = [
  { path: "", component: ConciliationsComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConciliationsRoutingModule { }
