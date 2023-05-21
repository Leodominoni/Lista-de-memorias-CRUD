import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMemoriaComponent } from './editar-memoria.component';

describe('EditarMemoriaComponent', () => {
  let component: EditarMemoriaComponent;
  let fixture: ComponentFixture<EditarMemoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarMemoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarMemoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
