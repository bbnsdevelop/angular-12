import { Component, OnInit } from '@angular/core';
import { CalcService } from '../services/calc.service';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  result: number | undefined;

  constructor(private service: CalcService) { }

  ngOnInit(): void {
    this.calc();
  }

  calc(){
    let num1: number = 10;
    let num2: number = 15;
    let operation: string = '+'
    this.result = this.service.calculate(num1, num2, operation);
  }


}
