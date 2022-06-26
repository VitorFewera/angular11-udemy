import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CalculadoraService } from '../services';
//import { Calculadora4Module } from '../calculadora4.module';

import { Calculadora4Component } from './calculadora4.component';

describe('Calculadora4Component', () => {
  let component: Calculadora4Component;
  let fixture: ComponentFixture<Calculadora4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Calculadora4Component ],
      providers:[
        CalculadoraService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Calculadora4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve garantir que 3 + 2 = 5', () => {
    let btn3 = fixture.debugElement.query(By.css('#btn3'));
    let btnSoma = fixture.debugElement.query(By.css('#btnSoma'));
    let btn2 = fixture.debugElement.query(By.css('#btn2'));
    let btnCalcular = fixture.debugElement.query(By.css('#btnCalcular'));
    let display = fixture.debugElement.query(By.css('#display'));

    btn3.triggerEventHandler('click', null);
      fixture.detectChanges();
   
    btnSoma.triggerEventHandler('click', null);
      fixture.detectChanges();
   
    btn2.triggerEventHandler('click', null);
      fixture.detectChanges();
   
    btnCalcular.triggerEventHandler('click', null);
      fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('5');
  });
});
