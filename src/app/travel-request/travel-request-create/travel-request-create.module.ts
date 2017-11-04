import { TravelRequestCreateComponent } from './travel-request-create.component';
import { TravelLegComponent } from './travel-leg/travel-leg.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TravelRequestCreateRoutingModule } from './travel-request-create-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TravelRequestCreateRoutingModule
  ],
  declarations: [TravelLegComponent, TravelRequestCreateComponent]
})
export class TravelRequestCreateModule { }
