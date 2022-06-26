import { Component, OnInit } from '@angular/core';
import { JogoDaVelhaService } from './shared';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css']
})
export class JogoDaVelhaComponent implements OnInit {

  constructor(private jogoDaVelhaService: JogoDaVelhaService) { }

  ngOnInit(): void {
    this.jogoDaVelhaService.inicializar();
  }
  /**
   * Retorna se a tela de inicio deve ser exibida.
   * 
   * @return boolean
   */

    get showInicio(): boolean{
      return this.jogoDaVelhaService.showInicio;
    }

    /**
     * Retorna se o tabuleiro deve ser exibido.
     * 
     * @return boolean
     */

    get showTabuleiro(): boolean{
      return this.jogoDaVelhaService.showTabulerio;
      }

    /**
     * Retorna se a tela de fim de jogo deve ser exibida.
     * 
     * @return boolean
     */
    get showFinal(): boolean{
      return this.jogoDaVelhaService.showFinal;
    }

    /**
     * Retorna se a tela de começo de jogo deve ser exibida
     * 
     * @return void
     */

    iniciarJogo(): void{
      this.jogoDaVelhaService.iniciarJogo();
    }

    /**
     *Realiza uma jogada ao clicar em um local no tabuleiro
     *   
     * @param posX 
     * @param posY 
     * @return void
     */

    jogar(posX: number, posY: number):void{
      this.jogoDaVelhaService.jogar(posX, posY);
    }

    /**
     * Retorna se a peça X deve ser exibida na casa clicada 
     * 
     * @param posX 
     * @param posY 
     * @return boolean
     */
    
    exibirX(posX: number, posY:number): boolean{
      return this.jogoDaVelhaService.exibirX(posX, posY);
    }

    /**
     * Retorna se a peça O deve ser exibida na saca clicada
     * 
     * @param posX 
     * @param posY 
     * @return boolean
     */

    exibirO(posX: number, posY:number): boolean{
      return this.jogoDaVelhaService.exibirO(posX, posY);
    }

    /**
     * Mostra a vitoria do jogador
     * 
     * @param posX 
     * @param posY 
     * @returns boolean
     */
    
    exibirVitoria(posX: number, posY: number): boolean{
      return this.jogoDaVelhaService.exibirVitoria(posX, posY);
    }
    
    /**
     * Retorna o número do jogador a jogar.
     * 
     * @return number
     */
      
    get jogador(): number{
      return this.jogoDaVelhaService.jogador;
    }

    /**
     * Inicia um novo jogo
     * 
     * @return void
     */
    novoJogo(): void{
      this.jogoDaVelhaService.novoJogo();
    }

    

  }
