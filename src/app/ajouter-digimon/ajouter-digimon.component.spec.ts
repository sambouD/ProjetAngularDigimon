import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterDigimonComponent } from './ajouter-digimon.component';

describe('AjouterDigimonComponent', () => {
  let component: AjouterDigimonComponent;
  let fixture: ComponentFixture<AjouterDigimonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterDigimonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterDigimonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
