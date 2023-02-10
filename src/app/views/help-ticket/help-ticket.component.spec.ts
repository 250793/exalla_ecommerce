import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpTicketComponent } from './help-ticket.component';

describe('HelpTicketComponent', () => {
  let component: HelpTicketComponent;
  let fixture: ComponentFixture<HelpTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpTicketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
