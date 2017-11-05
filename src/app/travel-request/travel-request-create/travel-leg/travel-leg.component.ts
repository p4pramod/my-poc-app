import { ComponentSelectorRule } from 'codelyzer';
import { Observable } from 'rxjs/Rx';
import { routerTransition } from '../../../router.animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-travel-leg',
  templateUrl: './travel-leg.component.html',
  styleUrls: ['./travel-leg.component.scss'],
  animations: [routerTransition()]
})
export class TravelLegComponent implements OnInit {

  sendShowHindToLister: boolean;

  controllerFg: FormGroup;


  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.controllerFg = this.fb.group({
      'ContainerControl': ['asdfas'],
      'eventSender': this.fb.group({}),
      'eventReceiver': this.fb.group({})
    });

  }

  handleChangeEvent(val) {

    this.sendShowHindToLister = val;


  }

}
