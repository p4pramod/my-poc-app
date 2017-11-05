
import { Observable } from 'rxjs/Rx';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @Input('fgroup')
  parentFg: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {

    // this.parentFg = this.fb.group({
    //   'ShowHide': [true]
    // });
    this.parentFg.addControl('ShowHide', new FormControl());

    this.parentFg.get('ShowHide').valueChanges.subscribe((vl) => {

      console.log(vl);
      this.selectedValue.emit(vl);

    })

    this.parentFg.setValue({
      ShowHide: true
    })

  }

  @Output()
  selectedValue: EventEmitter<boolean> = new EventEmitter<boolean>();

}
