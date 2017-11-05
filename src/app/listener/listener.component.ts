import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listener',
  templateUrl: './listener.component.html',
  styleUrls: ['./listener.component.css']
})
export class ListenerComponent implements OnInit {

  @Input('fgroup')
  listnerFg: FormGroup;

  @Input()
  visible: boolean;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    // this.listnerFg = this.fb.group({
    //   'Name': ['test Value']
    // });

    this.listnerFg.addControl('Name', new FormControl());

  }

}
