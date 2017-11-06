import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-listener',
  templateUrl: './listener.component.html',
  styleUrls: ['./listener.component.css']
})
export class ListenerComponent implements OnInit, OnChanges {

  @Input('fgroup')
  listnerFg: FormGroup;

  @Input()
  visible: boolean;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.addControlToForm()
  }

  ngOnChanges(change) {

    if (change.visible.previouseValue != change.visible.currentValue) {

      if (change.visible.currentValue == true)
        this.addControlToForm();

      if (change.visible.currentValue == false)
        this.listnerFg.removeControl('Name');

    }

  }

  addControlToForm() {
    this.listnerFg.addControl('Name', new FormControl());
  }


  cleasrControlToForm() {
    this.listnerFg.removeControl('Name');
  }

}
