import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreschVeganComponent } from './fresch-vegan.component';

describe('FreschVeganComponent', () => {
  let component: FreschVeganComponent;
  let fixture: ComponentFixture<FreschVeganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreschVeganComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreschVeganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
