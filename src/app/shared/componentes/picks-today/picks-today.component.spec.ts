import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicksTodayComponent } from './picks-today.component';

describe('PicksTodayComponent', () => {
  let component: PicksTodayComponent;
  let fixture: ComponentFixture<PicksTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicksTodayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PicksTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
