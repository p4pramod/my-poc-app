import { TravelLegComponent } from './travel-request-create/travel-leg/travel-leg.component';
import { HeaderComponent, SidebarComponent } from '../../shared/components';
import { CommonModule } from '@angular/common';
import { TravelRequestComponent } from './travel-request.component';
import { NgModule } from '@angular/core';
import { TravelRequestRoutingModule } from './travel-request-routing.module';
import { TravelRequestCreateComponent } from './travel-request-create/travel-request-create.component';



@NgModule({
  imports: [
    CommonModule,
    TravelRequestRoutingModule
  ],
  exports: [],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    TravelRequestComponent,
    TravelRequestCreateComponent,
    TravelLegComponent
    ],
  providers: [],
})
export class TravelRequestModule { }
