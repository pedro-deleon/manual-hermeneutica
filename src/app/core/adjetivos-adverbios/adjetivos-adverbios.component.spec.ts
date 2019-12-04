import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjetivosAdverbiosComponent } from './adjetivos-adverbios.component';

describe('AdjetivosAdverbiosComponent', () => {
  let component: AdjetivosAdverbiosComponent;
  let fixture: ComponentFixture<AdjetivosAdverbiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdjetivosAdverbiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjetivosAdverbiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
