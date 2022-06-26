import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.css']
})
export class EditarTarefaComponent implements OnInit {

  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm;
  tarefa: Tarefa;

  constructor(
    private tarefaService: TarefaService,
    private route: ActivatedRoute, // 
    private router: Router ) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id']; //snapshot.params - mapeado todos os paramentros cotidos na urls
            //esse + e um operador do ts para converter um valor string para numerico
    this.tarefa = this.tarefaService.buscarPorId(id);
    //chamo tarefa e coloco nele o id que foi criado em cima
  }

  atualizar():void{
    if(this.formTarefa.form.valid){
      this.tarefaService.atualizar(this.tarefa);
      this.router.navigate(['/tarefas']);
    }
  }

}
