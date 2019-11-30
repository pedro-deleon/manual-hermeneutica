import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntencionParrafoComponent } from './intencion-parrafo.component';

describe('IntencionParrafoComponent', () => {
  let component: IntencionParrafoComponent;
  let fixture: ComponentFixture<IntencionParrafoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntencionParrafoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntencionParrafoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
