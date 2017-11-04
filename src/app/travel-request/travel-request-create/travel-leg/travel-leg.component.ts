import { routerTransition } from '../../../router.animations';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-travel-leg',
  templateUrl: './travel-leg.component.html',
  styleUrls: ['./travel-leg.component.scss'],
  animations: [routerTransition()]
})
export class TravelLegComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
