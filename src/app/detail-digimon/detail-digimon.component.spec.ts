import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDigimonComponent } from './detail-digimon.component';

describe('DetailDigimonComponent', () => {
  let component: DetailDigimonComponent;
  let fixture: ComponentFixture<DetailDigimonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailDigimonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDigimonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
