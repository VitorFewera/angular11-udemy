import { Directive, ElementRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[numero]',
  providers:[{
    provide: NG_VALUE_ACCESSOR,
    useExisting: NumeroDirective,
    multi: true
  }]
})

export class NumeroDirective implements ControlValueAccessor{

  onTouched: any;
  onChange: any;

  constructor(private el: ElementRef) {} //referencia para as 3 funçoes do ControlValueAccessor
  
  
   /**
   *Implementa evento de keyup para o elemento da diretiva
   *
   * @param any $event
   */

@HostListener('keyup', ['$event']) // keyup = evento usado para quando se clica em uma tecla
onKeyUp($event:any){//onKeyUo foi um evento que autor criou para passar a ação
  let valor = $event.target.value; // valor que o usuario clica
  let posDecimais = valor.indexOf('.'); //Verifica onde o ponto está

  valor = valor.replace(/[\D]/g, '');// validador de expressão regular - tudo que nao e numero, subistitui por nada

  if(posDecimais > 0){
    valor = valor.substr(0, posDecimais) + '.' + valor.substr(posDecimais);
  }
  $event.target.value = valor;
  this.onChange(valor);
}

/**
 * Registra função a ser chamada para atualizar o valor na model
 * 
 * @param any fn
 */
registerOnChange(fn:any): void{
  this.onChange = fn;
} 
/**
 * Registra função a ser chamada para atualizar o valor na model para evento touched.
 * 
 * @param any fn
 */
  registerOnTouched(fn: any): void{ //usado para mobile - tem que chamar as 3 funcoes para o ControlValueAccessor
    this.onTouched = fn;
  }
  /**
   * 
   * obtem o valor contido na model
   * @param any value
   */

  writeValue(value: any):void{
    this.el.nativeElement.value = value;
  }
}
