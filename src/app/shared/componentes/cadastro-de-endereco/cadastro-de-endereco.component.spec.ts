import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDeEnderecoComponent } from './cadastro-de-endereco.component';

describe('CadastroDeEnderecoComponent', () => {
  let component: CadastroDeEnderecoComponent;
  let fixture: ComponentFixture<CadastroDeEnderecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroDeEnderecoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroDeEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
