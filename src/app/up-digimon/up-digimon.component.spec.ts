import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpDigimonComponent } from './up-digimon.component';

describe('UpDigimonComponent', () => {
  let component: UpDigimonComponent;
  let fixture: ComponentFixture<UpDigimonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpDigimonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpDigimonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
