import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SampleDirectiveComponent } from './sample-directive/sample-directive.component';
import { SampleTextComponent } from './sample-text/sample-text.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleDirectiveComponent,
    SampleTextComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
