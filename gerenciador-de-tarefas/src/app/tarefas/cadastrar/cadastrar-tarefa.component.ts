import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Tarefa, TarefaService } from '../shared';

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent implements OnInit {

  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm;// confirma que o formulario esteja pronto para executar uma tarefa
  tarefa: Tarefa; 
  
  constructor(
    private tarefaService: TarefaService,
    private router: Router){}

  ngOnInit(): void { // instancia real para faze rassociação com interface
    this.tarefa = new Tarefa();
  }
  cadastrar(): void{
    if(this.formTarefa.form.valid){//condição para definir que o form e valido se por acaso o formulario possuir algum erro
      this.tarefaService.cadastrar(this.tarefa);//aqui chama o serviço tarefaService e faz o cadastro
      this.router.navigate(["/tarefas"]);// roteamento com outra tela pelo metodo navigate, dizendo que quero ir para /tarefas
    }
  }

}
