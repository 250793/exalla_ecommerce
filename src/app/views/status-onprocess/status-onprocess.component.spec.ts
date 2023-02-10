import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusOnprocessComponent } from './status-onprocess.component';

describe('StatusOnprocessComponent', () => {
  let component: StatusOnprocessComponent;
  let fixture: ComponentFixture<StatusOnprocessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusOnprocessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusOnprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
