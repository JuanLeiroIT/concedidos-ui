import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConciliationsRoutingModule } from './conciliations-routing.module';
import { ConciliationsComponent } from './pages/conciliations/conciliations.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ConciliationsComponent],
  imports: [
    CommonModule,
    ConciliationsRoutingModule,
    SharedModule,
  ]
})
export class ConciliationsModule { }
