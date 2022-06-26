import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class JogoDaVelhaService {
  // readonly = par amostrar um atributo que nao sofrera alteração
  private readonly TAM_TAB: number = 3; // tamanho do tabuleiro
  private readonly X: number = 1;
  private readonly O: number = 2;
  private readonly VAZIO: number = 0;

  private tabuleiro: any;
  private numMovimentos: number = 0 ; //soma num de movimentos = se chegar em 9 moviemntos = empate
  private vitoria: any;

  private _jogador: number = 0;
  // telas que vão ser exibidas
  private _showInicio: boolean = true;
  private _showTabuleiro: boolean = true;
  private _showFinal: boolean = true; 

  constructor() {}

  /**
   * Inicializa o jogo. Define exibição da tela inicial.
   * 
   * @return void
   */
  inicializar(): void{
    this._showInicio = true;
    this._showTabuleiro = false; // = false ==> deixa essa tela escondida 
    this._showFinal = false;
    this.numMovimentos = 0;
    this._jogador = this.X;
    this.vitoria = false;
    this.inicializarTabuleiro();
  }

  /**
   * Inicilaiza o tabuleiro do jogo com vazio para todas as posições.
   * 
   * @return void
   */
  inicializarTabuleiro(): void{
    this.tabuleiro = [this.TAM_TAB];
    for(let i = 0; i< this.TAM_TAB; i++){
      this.tabuleiro[i]= [this.VAZIO, this.VAZIO, this.VAZIO];
    }
  }

  /**
   * Retorna se a tela de inicio deve ser ixibida
   * 
   * @return boolean
   */
  get showInicio(): boolean{
    return this._showInicio;
  }

  /**
   * Retorna se o tabuleiro deve ser exibido.
   * 
   * @return boolean
   */
  get showTabulerio(): boolean{
    return this._showTabuleiro;
  }

    /**
   * Retorna se a tela de fim de jogo deve ser ixibida
   * 
   * @return boolean
   */
     get showFinal(): boolean{
      return this._showFinal;
    }

   /**
   * Retorna o numero do jogador a jogar
   * 
   * @return boolean
   */
  get jogador(): number{
    return this._jogador;
  }

  /**
   * Exibe o tabuleiro
   * 
   * @return void
   */
  iniciarJogo(): void{
    this._showInicio = false;
    this._showTabuleiro = true;
  }

  /**
   * Realiza uma jogada dado as coordenadas do tabuleiro.
   * 
   * @param number posX
   * @param number posY
   * @return void
   */
  jogar(posX: number, posY:number):void{
    // jogada invalida
    if(this.tabuleiro[posX][posY !== this.VAZIO || this.vitoria]){ // Se ja possui algum valor nessa casa, jogada invalida
      return;
    }
    this.tabuleiro[posX][posY] = this._jogador;
    this.numMovimentos++;
    this.vitoria = this.fimJogo(posX, posY, this.tabuleiro, this._jogador); // verifica se o jogo acabou
    this._jogador = (this._jogador ===this.X) ? this.O : this.X; // ternario: se o X tiver jogando, mudo a vez para o prox ser O
    
    if(!this.vitoria && this.numMovimentos < 9){ // Se o jogo nao teve vitoria, e não deu os 9 movimentos, cpu joga 
      this.cpuJogar();
    }

    //houve vitoria
    if(this.vitoria !== false){
       this._showFinal = true;
    }

    //houve empate
    if(!this.vitoria && this.numMovimentos === 9){
      this._jogador = 0; // jogador 0 significa empate
      this._showFinal = true;
    }}
    
    /**
     * Verifica e retorna se o jogo terminou.
     * 
     * @param number linha
     * @param number coluna
     * @param any tabuleiro
     * @param number jogador
     * @return array 
     */

      fimJogo(linha: number, coluna: number, tabuleiro: any, jogador: number ){
        let fim: any = false;

        //valida a linha
        if(tabuleiro[linha][0] === jogador &&
          tabuleiro[linha][1] === jogador &&
          tabuleiro[linha][2] === jogador){
            fim = [linha, 0], [linha, 1], [linha, 2];
        }
        
        //valida a coluna
        if(tabuleiro[0][coluna] === jogador &&
          tabuleiro [1][coluna] === jogador &&
          tabuleiro [2][coluna] === jogador){
            fim = [[0, coluna], [1, coluna], [2, coluna]];
          }
        
        //valida as diagonais
        if(tabuleiro[0][0] === jogador &&
          tabuleiro [1][1] === jogador &&
          tabuleiro [2][2] === jogador){
          fim = [[0,0], [1,1], [2,2]];
        }

        if(tabuleiro[0][2] === jogador &&
          tabuleiro[1][1] === jogador &&
          tabuleiro[2][0] === jogador){
            fim = [[0,2], [1,1], [2,0]];
          }
      
        return fim;  
      }
/**
 * Lógica para simular jogada do computador em modo aleatorio.
 * 
 * @return void
 */
  cpuJogar(): void{
    // 1° tenta verificar jogada de vitória
    let jogada: number [] = this.obterJogada(this.O);
  
  if(jogada.length <= 0){
    // Se nai der, jogar para evitar derrota, e buscar empate
    jogada = this.obterJogada(this.X);
  }
  
  if(jogada.length <= 0){
    //joga aleatorio
    let jogadas:any = [];
    for(let i=0; i<this.TAM_TAB; i++){
      for(let j=0; j<this.TAM_TAB; j++){
        if (this.tabuleiro[i][j] === this.VAZIO){
          jogadas.push([i, j]);
        }
      }
    }
    let k = Math.floor((Math.random() * (jogadas.length - 1 )));
    jogada = [jogadas[k][0], jogadas [k][1]]; 
    // Faz a atulização do jogo em relação as jogadas
  }
  this.tabuleiro[jogada[0]] [jogada[1]] = this._jogador; //Escolhe e faz a jogada
  this.numMovimentos++; // Incremenda o numero de movimentos
  this.vitoria = this.fimJogo(jogada[0], jogada[1], this.tabuleiro, this._jogador);//Verifica se a jogada foi suficiente para vencer o jogo
  this._jogador = (this._jogador === this.X) ? this.O: this.X;} //Passa a vez para outro jogador

   /**Obtém uma jogada válida para vitória de um jogador.
    * 
    * @param number jogador
    * @return number[]
    */
   obterJogada(jogador:number): number[]{
     let tab = this.tabuleiro;
      for(let lin = 0; lin < this.TAM_TAB; lin ++){
        for(let col = 0; col<this.TAM_TAB; col++){
          if(tab[lin][col] !== this.VAZIO){
            continue;
          }
          tab[lin][col] = jogador;
          if(this.fimJogo(lin, col, tab, jogador)){
            return [lin, col];
          }
          tab[lin][col]=this.VAZIO;
        }
      }
      return[];
   }   

   /**
    * Retorna se a peça X deve ser exibida para a coordenada informada.
    * 
    * @param number posX
    * @param number posY
    * @return boolean
    */

   // Verifica se na posição existe X ou O
    exibirX(posX: number, posY: number): boolean{
      return this.tabuleiro[posX][posY] === this.X;
    }

    exibirO(posX: number, posY: number): boolean{
      return this.tabuleiro[posX][posY] === this.O;
    }

    exibirVitoria(posX: number, posY: number): boolean{
      let exibirVitoria: boolean = false;
      if(!this.vitoria){
        return exibirVitoria;
      }

      for(let pos of this.vitoria){
        if(pos[0] === posX && pos[1] === posY){
          exibirVitoria = true;
          break;
        }
      }
      return exibirVitoria;
    }

    /**
     * Inicializa um novo jogo, assim como exibe o tabuleiro.
     * 
     * @return void
     */
    novoJogo(): void{
      this.inicializar();
      this._showFinal = false;
      this._showInicio = false;
      this._showTabuleiro = true;
    }
     }  


