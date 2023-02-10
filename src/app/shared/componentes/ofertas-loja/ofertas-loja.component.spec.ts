import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertasLojaComponent } from './ofertas-loja.component';

describe('OfertasLojaComponent', () => {
  let component: OfertasLojaComponent;
  let fixture: ComponentFixture<OfertasLojaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfertasLojaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfertasLojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
