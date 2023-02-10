import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaoDeCreditoComponent } from './cartao-de-credito.component';

describe('CartaoDeCreditoComponent', () => {
  let component: CartaoDeCreditoComponent;
  let fixture: ComponentFixture<CartaoDeCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaoDeCreditoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartaoDeCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
