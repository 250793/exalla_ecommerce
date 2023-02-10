import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusCanceledComponent } from './status-canceled.component';

describe('StatusCanceledComponent', () => {
  let component: StatusCanceledComponent;
  let fixture: ComponentFixture<StatusCanceledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusCanceledComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusCanceledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
