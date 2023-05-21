import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMemoriaComponent } from './listar-memoria.component';

describe('ListarMemoriaComponent', () => {
  let component: ListarMemoriaComponent;
  let fixture: ComponentFixture<ListarMemoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarMemoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarMemoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
