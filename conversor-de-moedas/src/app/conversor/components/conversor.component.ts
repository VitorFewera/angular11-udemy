import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Conversao, ConversaoResponse, Moeda } from '../models';
import { ConversorService, MoedaService } from '../services';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})

export class ConversorComponent implements OnInit {

moedas: Moeda[];
conversao: Conversao;
possuiErro: boolean;
conversaoResponse: ConversaoResponse;

@ViewChild("conversaoForm", { static: true }) conversaoForm: NgForm;

  constructor(
    private moedaService: MoedaService,
    private conversorService: ConversorService) { }

  ngOnInit(): void {
    this.moedas = this.moedaService.listarTodas();
    this.init();
  }

/**
 * Efetua a chamada para a conversão dos valores.
 * 
 * @return void
 */
init(): void{
  this.conversao = new Conversao('USD', 'BRL', null); //Pela programação, primeiro vem moedaDe e dps, moedaPara
  this.possuiErro = false;
}

/**
 * Efetura a chamada para a conversão dos valores
 * 
 * @return void
 */
converter(): void{
  if(this.conversaoForm.form.valid){
    //alert('Convertendo: '+JSON.stringify(this.conversao)); -- codigo antigo
    this.conversorService.converter(this.conversao).subscribe(response =>
    this.conversaoResponse = response, error => this.possuiErro = true); //subscribe usado para se inscrever no obsevable
  }
}



}