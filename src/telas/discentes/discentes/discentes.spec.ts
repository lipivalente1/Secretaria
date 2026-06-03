import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Discentes } from './discentes';

describe('Discentes', () => {
  let component: Discentes;
  let fixture: ComponentFixture<Discentes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Discentes],
    }).compileComponents();

    fixture = TestBed.createComponent(Discentes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
