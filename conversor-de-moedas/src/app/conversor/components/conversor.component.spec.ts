import { HttpClient } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NumeroDirective } from '../directives';
import { DataBrPipe } from '../pipes';
import { ConversorService, MoedaService} from '../services';
import { ModalCotacaoComponent } from '../utils';

import { ConversorComponent } from './conversor.component';

describe('ConversorComponent', () => {
  //MoedaService
  let component: ConversorComponent;
  let fixture: ComponentFixture<ConversorComponent>;

  beforeEach( async   (() => {
    TestBed.configureTestingModule({
      declarations: [ ConversorComponent,
      NumeroDirective,
      DataBrPipe,
      ModalCotacaoComponent ],
      providers:[ConversorService, MoedaService],
      imports:[
        FormsModule,
        HttpClient,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
