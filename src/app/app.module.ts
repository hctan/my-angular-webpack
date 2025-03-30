import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
   bootstrap: [ AppComponent ],
 imports: [
     BrowserModule,
     AppComponent
 ]
})
export class AppModule {
}