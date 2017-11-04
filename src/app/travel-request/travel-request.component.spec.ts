import { RouterModule } from '@angular/router';
import { TravelRequestRoutingModule } from './travel-request-routing.module';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { TravelLegComponent } from './travel-request-create/travel-leg/travel-leg.component';
import { TravelRequestCreateComponent } from './travel-request-create/travel-request-create.component';
import { HeaderComponent, SidebarComponent } from '../../shared/components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelRequestComponent } from './travel-request.component';

describe('TravelRequestComponent', () => {
  let component: TravelRequestComponent;
  let fixture: ComponentFixture<TravelRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [

        HeaderComponent,
        SidebarComponent,
        TravelRequestComponent,
        TravelRequestCreateComponent,
        TravelLegComponent
      ],
      imports: [
        CommonModule,

        RouterModule.forRoot([
          {
             path:'',
             redirectTo:'app',
             pathMatch:'full',
          },
         ]),
        BrowserAnimationsModule
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
