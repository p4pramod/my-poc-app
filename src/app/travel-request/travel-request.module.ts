import { ReactiveFormsModule } from '@angular/forms';
import { TravelLegComponent } from './travel-request-create/travel-leg/travel-leg.component';
import { HeaderComponent, SidebarComponent } from '../../shared/components';
import { CommonModule } from '@angular/common';
import { TravelRequestComponent } from './travel-request.component';
import { NgModule } from '@angular/core';
import { TravelRequestRoutingModule } from './travel-request-routing.module';
import { TravelRequestCreateComponent } from './travel-request-create/travel-request-create.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ListenerComponent } from '../listener/listener.component';
import { ParentComponent } from '../parent/parent.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbDropdownModule.forRoot(),
    TravelRequestRoutingModule
  ],
  exports: [],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    TravelLegComponent,
    TravelRequestCreateComponent,
    TravelRequestComponent,
    ListenerComponent,
    ParentComponent
  ],
  providers: [],
})
export class TravelRequestModule { }
