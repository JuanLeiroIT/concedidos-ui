import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConcessionsRoutingModule } from './concessions-routing.module';
import { ConcessionsComponent } from './pages/concessions/concessions.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ConcessionsComponent],
  imports: [
    CommonModule,
    ConcessionsRoutingModule,
    SharedModule,
  ]
})
export class ConcessionsModule { }
