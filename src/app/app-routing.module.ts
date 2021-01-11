import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "dashboards", loadChildren: () => import('src/app/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: "concessions", loadChildren: () => import('src/app/concessions/concessions.module').then(m => m.ConcessionsModule) },
  { path: "conciliations", loadChildren: () => import('src/app/conciliations/conciliations.module').then(m => m.ConciliationsModule) },
  { path: "**", redirectTo: "/dashboards"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
