import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDiscente } from './cadastro-discente';

describe('CadastroDiscente', () => {
  let component: CadastroDiscente;
  let fixture: ComponentFixture<CadastroDiscente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroDiscente],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroDiscente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
