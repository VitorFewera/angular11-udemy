import { HttpClient } from '@angular/common/http';
import { inject, TestBed } from '@angular/core/testing';

import { ConversorService } from './conversor.service';

describe('ConversorService', () => {
  let service: ConversorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        ConversorService
      ],
      imports:[
        HttpClient
      ]
    });
    service = TestBed.inject(ConversorService);
  });

  it('should ...', inject ([ConversorService], (service: ConversorService)  =>{
     expect(service).toBeTruthy();
}));
});
