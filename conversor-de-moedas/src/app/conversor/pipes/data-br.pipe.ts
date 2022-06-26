import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataBr'
})
export class DataBrPipe implements PipeTransform {
  /** 
   * Aplica formatação para a data.
   * 
   * @param string dataEn
   * @return string data no formato dd/mm/yyyy
   * 
   */

  transform(dataEn: string):string {
    if(!dataEn){
      return '';
    }
    const dataArr = dataEn.split('-'); // Adiciona o - a cada variavel, ou melhor, dia - mes - ano
    
    if(dataArr.length !== 3){ // se a data for diferente de 3, quer dizer que tem algo errado e retorna dataEn
      return dataEn;
    }
  return dataArr[2] + '/' + dataArr[1] + '/' + dataArr[0]; 
  // dentro desse array, as posições estão delimitadas POsição 0 e o ano, 1 o me e 2 o dia - padrão brasileiro.
     
    //return null;
  }

}
