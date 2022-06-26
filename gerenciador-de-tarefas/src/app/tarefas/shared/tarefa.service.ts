import { Injectable, ɵSWITCH_TEMPLATE_REF_FACTORY__POST_R3__ } from '@angular/core';
import { Tarefa } from './';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

listarTodos(): Tarefa[]{
const tarefas = localStorage['tarefas'];
return tarefas ? JSON.parse(tarefas) : [];
}

cadastrar(tarefa: Tarefa):void{//push -- adiciona na lista
  const tarefas = this.listarTodos();
  tarefa.id = new Date().getTime();
  tarefas.push(tarefa);
  localStorage['tarefas'] = JSON.stringify(tarefas);
}

buscarPorId(id: number): Tarefa{//find -- retorna o que pede sobre a condição especifica
  const tarefas:Tarefa[] = this.listarTodos();
  return tarefas.find(tarefa => tarefa.id === id);
}

atualizar(tarefa: Tarefa):void{//forEach -- Faz uma verificação com os parametros apresentados 
  const tarefas: Tarefa[] = this.listarTodos();
  tarefas.forEach((obj, index, objs) => {
    if(tarefa.id === obj.id){
      objs[index] = tarefa; }});
  localStorage['tarefas'] = JSON.stringify(tarefas);
}

remover(id: number): void{//filter -- ele retorna tudo que vc pede sob uma condição
  let tarefas:Tarefa[] = this.listarTodos();
  tarefas = tarefas.filter(tarefa => tarefa.id !== id);
  localStorage['tarefas']=JSON.stringify(tarefas);
}

alterarStatus(id:number): void{
  const tarefas: Tarefa[] = this.listarTodos();
  tarefas.forEach((obj, index, objs) =>{
    if(id === obj.id){
      objs[index].concluida = !obj.concluida; //Nega a condição concluida
    }
  });
  localStorage['tarefas'] = JSON.stringify(tarefas);
}
}
