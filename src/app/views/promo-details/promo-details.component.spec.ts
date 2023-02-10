import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoDetailsComponent } from './promo-details.component';

describe('PromoDetailsComponent', () => {
  let component: PromoDetailsComponent;
  let fixture: ComponentFixture<PromoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
