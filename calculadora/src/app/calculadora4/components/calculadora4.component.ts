import { LiteralMapEntry } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora4',
  templateUrl: './calculadora4.component.html',
  styleUrls: ['./calculadora4.component.css']
})
export class Calculadora4Component implements OnInit {

  private numero1: string;
  private numero2: string;
  private resultado: number;
  private operacao:string;

  constructor(private calculadoraService: CalculadoraService) {}
  ngOnInit(): void { 
  this.limpar();
  }
/**
 * Inicializa todos os operadores para os valores padrão.
 * 
 * @return void
 */

limpar(): void{
  this.numero1 = '0';
  this.numero2 = null;
  this.resultado = null;
  this.operacao = null;
}

/**
 * Adiciona o numero selecionado para o cálculo posteriormente.
 * 
 * @param string numero
 * @return void
 */

adicionaNumero(numero: string): void{
  if(this.operacao === null){
    this.numero1 = this.concatenarNumero(this.numero1, numero);
    } else {
      this.numero2 = this.concatenarNumero(this.numero2, numero);
    }

}
/**
 * retorna o valor concatenado. Trata o separador decimal.
 * 
 * @param string numAtual
 * @param string numConcat
 * @return string
 */

concatenarNumero(numAtual: string, numConcat: string): string{
  // caso contenha apenas '0' ou null, reinicia o valor
  if(numAtual === '0' || numAtual === null){
    numAtual = '';
  }
  
  // primeiro digito é '.', contenha um '0' antes do ponto
  if(numConcat === '.' && numAtual === ''){
    return '0.';
  }

  // caso '.' digitado e já contenha um '.', apenas retorna
  if(numConcat === '.' && numAtual.indexOf('.') >-1){
    return numAtual;
  }
  return numAtual + numConcat;
}
definirOperacao(operacao: string): void{
  // apenas define a operação caso não oexista uma
  if(this.operacao === null){
    this.operacao = operacao;
    return;
  }
  
  //Caso a operação definida e o numero 2 selecionado, efetua o calculo da operação
  if(this.numero2 !== null){
    this.resultado = this.calculadoraService.calcular(
      parseFloat(this.numero1),
      parseFloat(this.numero2),
        this.operacao);
      this.operacao = operacao;
      this.numero1 = this.resultado.toString();
      this.numero2 = null;
      this.resultado = null;
    }}
      /**
       * Efetua o calculo de uma operação
       * 
       * @return void 
       */

    calcular(): void{
        if(this.numero2 === null){
          return;
        }
        this.resultado = this.calculadoraService.calcular(
          parseFloat(this.numero1),
          parseFloat(this.numero2),
          this.operacao);
        }

  /**
   * Retorna o valor a ser exibido na tela da calculadora.
   * 
   * @return string
   */
  get display(): string{
    if(this.resultado !== null){
      return this.resultado.toString();
    }
    if(this.numero2 !== null){
      return this.numero2;
    }
    return this.numero1;
    }
  }


