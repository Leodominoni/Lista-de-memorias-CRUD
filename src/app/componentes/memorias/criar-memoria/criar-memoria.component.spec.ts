import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarMemoriaComponent } from './criar-memoria.component';

describe('CriarMemoriaComponent', () => {
  let component: CriarMemoriaComponent;
  let fixture: ComponentFixture<CriarMemoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarMemoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarMemoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
