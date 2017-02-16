import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { YoloComponent } from './app.component';

@Component({
  selector: 'angular-library-component',
  template: ''
})
export class AppComponent {}


@NgModule({
  declarations: [
    YoloComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    
    FormsModule,
    HttpModule
  ],
  schemas: [
  ],
  entryComponents: [
    AppComponent
  ],
  providers: [],
  bootstrap: [YoloComponent]
})
export class AppModule { }
