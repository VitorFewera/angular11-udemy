import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Calculadora4Module } from './calculadora4';

@NgModule({
  declarations: [
    AppComponent
  ],
 
  imports: [
    BrowserModule,
    Calculadora4Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
