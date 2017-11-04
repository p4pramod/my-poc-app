import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { HeaderComponent, SidebarComponent } from '../shared/components';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from '../shared/index';
import { TravelRequestComponent } from './travel-request/travel-request.component';


@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    AppComponent,
    TravelRequestComponent
  ],
  imports: [
    CommonModule,
    NgbDropdownModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
