import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusCompleteComponent } from './status-complete.component';

describe('StatusCompleteComponent', () => {
  let component: StatusCompleteComponent;
  let fixture: ComponentFixture<StatusCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusCompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
