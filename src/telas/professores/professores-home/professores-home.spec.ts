import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessoresHome } from './professores-home';

describe('ProfessoresHome', () => {
  let component: ProfessoresHome;
  let fixture: ComponentFixture<ProfessoresHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessoresHome],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfessoresHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
