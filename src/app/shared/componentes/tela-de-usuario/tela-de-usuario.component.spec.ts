import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaDeUsuarioComponent } from './tela-de-usuario.component';

describe('TelaDeUsuarioComponent', () => {
  let component: TelaDeUsuarioComponent;
  let fixture: ComponentFixture<TelaDeUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaDeUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaDeUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
