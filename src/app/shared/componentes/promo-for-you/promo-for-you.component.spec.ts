import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoForYouComponent } from './promo-for-you.component';

describe('PromoForYouComponent', () => {
  let component: PromoForYouComponent;
  let fixture: ComponentFixture<PromoForYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoForYouComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromoForYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
