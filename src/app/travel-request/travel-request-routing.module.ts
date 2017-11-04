import { TravelRequestCreateComponent } from './travel-request-create/travel-request-create.component';
import { TravelLegComponent } from './travel-request-create/travel-leg/travel-leg.component';
import { TravelRequestComponent } from './travel-request.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: TravelRequestComponent,
    children: [
      { path: '', component:TravelRequestCreateComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TravelRequestRoutingModule { }
