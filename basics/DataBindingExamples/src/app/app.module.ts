import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TwoWayDataBinding01Component } from './two-way-data-binding01/two-way-data-binding01.component';

@NgModule({
  declarations: [AppComponent, TwoWayDataBinding01Component],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
