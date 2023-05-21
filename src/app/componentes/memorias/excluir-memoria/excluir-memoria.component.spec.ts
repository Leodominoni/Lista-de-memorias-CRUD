import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirMemoriaComponent } from './excluir-memoria.component';

describe('ExcluirMemoriaComponent', () => {
  let component: ExcluirMemoriaComponent;
  let fixture: ComponentFixture<ExcluirMemoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirMemoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirMemoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
