import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciamentoListasComponent } from './gerenciamento-listas.component';

describe('GerenciamentoListasComponent', () => {
  let component: GerenciamentoListasComponent;
  let fixture: ComponentFixture<GerenciamentoListasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciamentoListasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciamentoListasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
