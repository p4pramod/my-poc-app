import { routerTransition } from '../router.animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel-request',
  templateUrl: './travel-request.component.html',
  styleUrls: ['./travel-request.component.scss'],
  animations: [routerTransition()]
})
export class TravelRequestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
