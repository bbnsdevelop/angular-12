import { Component, OnInit } from '@angular/core';
import { CalcService } from '../services/calc.service';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  private result: number;
  private num1: number;
  private num2: number;
  private operation: string;

  constructor(private service: CalcService) { }

  ngOnInit(): void {
    this.clean();
  }

  clean(): void {
    this.num1 = 0;
    this.num2 = null;
    this.operation = null;
    this.result = null;
  }


  addNumber(numberToCalc: string): void {
  	if (this.operation === null || this.operation === undefined) {
  	  this.num1 = Number(this.concatNumber(String(this.num1), numberToCalc));
  	} else {
      this.num2 = Number(this.concatNumber(String(this.num2), numberToCalc));
  	}
  }

  concatNumber(numCurrent: string, numConcat: string): string {
    if (numCurrent === '0' || numCurrent === null || isNaN(Number(numCurrent))) {
  	  numCurrent = '';
  	}

  	if (numConcat === '.' && numCurrent === '') {
  	  return '0.';
  	}

  	if (numConcat === '.' && numCurrent.indexOf('.') > -1) {
  	  return numCurrent;
  	}

  	return numCurrent + numConcat;
  }

  defineOperation(operation: string): void {
   
  	if (this.operation === null || this.operation === undefined) {
      this.operation = operation;
      return;
  	}

   
  	if (this.num2) {
  		this.result = this.service.calculate(this.num1, this.num2, this.operation);
  		this.operation = operation;
  		this.num1 = this.result;
  		this.num2 = undefined;
  		this.result = undefined;
  	}
  }

  calc(): void {
  	if (this.num2 === null) {
  		return;
  	}

  	this.result = this.service.calculate(this.num1, this.num2, this.operation);
  }


  get display(): string {
  	if (this.result) {
  		return this.result.toString();
  	}
  	if (this.num2) {
  		return String(this.num2);
  	}
  	return String(this.num1);
  }

}
