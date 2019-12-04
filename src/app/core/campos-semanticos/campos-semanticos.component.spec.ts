import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamposSemanticosComponent } from './campos-semanticos.component';

describe('CamposSemanticosComponent', () => {
  let component: CamposSemanticosComponent;
  let fixture: ComponentFixture<CamposSemanticosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamposSemanticosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamposSemanticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
