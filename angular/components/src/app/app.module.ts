import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataList } from './datalist.component';
import {ShowThis} from './show-this.component';

@NgModule({
  declarations: [
    AppComponent,
	DataList,
	ShowThis
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
