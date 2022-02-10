import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JogoDaVelhaService {

  private readonly TAM_TAB: number = 3;
  private readonly X: number = 1;
  private readonly O: number = 2;
  private readonly VAZIO: number = 0;

  private tabuleiro: any;
  private numMovimento: number = 0;
  private vitoria: any;

  private _jogador: number = this.X;
  private _showInicio: boolean = true;
  private _showTabuleiro: boolean = false;
  private _showFinal: boolean = false;


  constructor() { }

  inicializar(): void{
    this._showInicio = true;
    this._showTabuleiro = false;
    this._showFinal = false;
    this.numMovimento = 0;
    this._jogador = this.X;
    this.vitoria = false;
    this.iniciarTabuleiro();

  }

  iniciarTabuleiro(): void{
    this.tabuleiro = [this.TAM_TAB];
    for(let i = 0; i < this.TAM_TAB; i++){
      this.tabuleiro[i] = [this.VAZIO, this.VAZIO, this.VAZIO];
    }
  }

  get showInicio(): boolean{
    return this._showInicio;
  }

  get showTabuleiro(): boolean{
    return this._showTabuleiro;
  }

  get showFinal(): boolean{
    return this._showFinal;
  }

  get jogador(): number{
    return this._jogador;
  }

  iniciarJogo(): void{
    this._showInicio = false;
    this._showTabuleiro = true;
  }

  jogar(posX: number, posY: number): void{

  }

}
