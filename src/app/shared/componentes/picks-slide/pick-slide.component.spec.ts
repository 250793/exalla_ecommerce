import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickSlideComponent } from './pick-slide.component';

describe('PickSlideComponent', () => {
  let component: PickSlideComponent;
  let fixture: ComponentFixture<PickSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickSlideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
