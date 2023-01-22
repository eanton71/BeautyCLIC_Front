import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticaprivacidadComponent } from './politicaprivacidad.component';

describe('PoliticaprivacidadComponent', () => {
  let component: PoliticaprivacidadComponent;
  let fixture: ComponentFixture<PoliticaprivacidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliticaprivacidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliticaprivacidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
