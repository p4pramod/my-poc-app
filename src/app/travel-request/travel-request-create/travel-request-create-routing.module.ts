import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TravelLegComponent } from './travel-leg/travel-leg.component';

const routes: Routes = [{
  path: '', component: TravelLegComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TravelRequestCreateRoutingModule { }
