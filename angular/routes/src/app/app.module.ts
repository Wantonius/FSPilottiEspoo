import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CarList} from './carlist.component';
import { CarForm} from './carform.component';
import { CarService} from './car.service';

@NgModule({
  declarations: [
    AppComponent,
	CarList,
	CarForm
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	FormsModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
