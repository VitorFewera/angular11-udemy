/* Serviço responsavel por executar as operaçoes da calculadora*/

import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  /* Define as constantes utilizadas para identificar as operações de calculo*/
static readonly SOMA:string = '+';
static readonly SUBTRACAO:string = '-';
static readonly DIVISAO: string = '/';
static readonly MULTIPLICACAO:string = '*';
//'static' serve para facilitar o aceso da constante  
//"readonly" e um valor que so pode ser lido
  constructor() { }
  /* Aqui crio o metodo para criação do calculo
  vai receber 3 variaveis - num1: number , num2:number e operação: string
  dentro da função crio o resultado para recerber resultado*/

  calcular(num1:number, num2: number, operacao: string): number{
    let resultado: number;
    switch(operacao){
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
        break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1-num2;
        break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
        break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1*num2;
        break;
      default: resultado = 0;
      }
        return resultado;
    }
  }

