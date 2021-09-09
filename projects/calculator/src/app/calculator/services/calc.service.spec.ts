import { inject, TestBed } from '@angular/core/testing';

import { CalcService } from './calc.service';

describe('CalcService', () => {
  let service: CalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be 1 + 4 = 5', () => {
    inject([CalcService], (service: CalcService) =>{
      let sum = service.calculate(1, 4, CalcService.SUM);
      expect(sum).toEqual(5);
    });
  });

});
