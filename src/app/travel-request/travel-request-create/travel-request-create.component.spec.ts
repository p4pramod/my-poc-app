import { TravelLegComponent } from './travel-leg/travel-leg.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelRequestCreateComponent } from './travel-request-create.component';

describe('TravelRequestCreateComponent', () => {
  let component: TravelRequestCreateComponent;
  let fixture: ComponentFixture<TravelRequestCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      declarations: [TravelLegComponent, TravelRequestCreateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelRequestCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
