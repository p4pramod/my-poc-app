import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelLegComponent } from './travel-leg.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TravelLegComponent', () => {
  let component: TravelLegComponent;
  let fixture: ComponentFixture<TravelLegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[BrowserAnimationsModule],
      declarations: [ TravelLegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelLegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
