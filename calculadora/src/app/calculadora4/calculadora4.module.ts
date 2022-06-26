import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Calculadora4Component } from './components';
import { CalculadoraService } from './services';



@NgModule({
  declarations: [
    Calculadora4Component
  ],
  imports: [
    CommonModule
  ],
    exports: [
      Calculadora4Component
  ],
providers:[
  CalculadoraService
]
})
export class Calculadora4Module { }
