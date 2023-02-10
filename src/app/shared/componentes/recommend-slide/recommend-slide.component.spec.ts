import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendSlideComponent } from './recommend-slide.component';

describe('RecommendSlideComponent', () => {
  let component: RecommendSlideComponent;
  let fixture: ComponentFixture<RecommendSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendSlideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
