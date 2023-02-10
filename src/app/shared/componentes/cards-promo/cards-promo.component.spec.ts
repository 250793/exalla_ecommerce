import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsPromoComponent } from './cards-promo.component';

describe('CardsPromoComponent', () => {
  let component: CardsPromoComponent;
  let fixture: ComponentFixture<CardsPromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsPromoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
