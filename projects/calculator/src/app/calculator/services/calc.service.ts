import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  static readonly SUM: string = '+';
  static readonly SUBTRACTION: string = '-';
  static readonly MULTIPLICATION: string = '*';
  static readonly DIVISION: string = '/';

  constructor() { }


  calculate(num1: number, num2: number, operation: string): number {
    let response: number;
    switch(operation){
      case CalcService.SUM:
        response = num1 + num2;
        break;
      case CalcService.SUBTRACTION:
        response = num1 - num2;
        break;
      case CalcService.MULTIPLICATION:
        response = num1 * num2;
        break;
      case CalcService.DIVISION:
        if(num1 == 0){
          response = 0;
        }else{
          response = num1 / num2;
        }
        break;  
      default:
        response = 0;
    }

    return response;
  }
}
