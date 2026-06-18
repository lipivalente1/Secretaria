import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Defesas } from './defesas';

describe('Defesas', () => {
  let component: Defesas;
  let fixture: ComponentFixture<Defesas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Defesas],
    }).compileComponents();

    fixture = TestBed.createComponent(Defesas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
