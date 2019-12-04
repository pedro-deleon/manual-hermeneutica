import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntencionAutorComponent } from './intencion-autor.component';

describe('IntencionAutorComponent', () => {
  let component: IntencionAutorComponent;
  let fixture: ComponentFixture<IntencionAutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntencionAutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntencionAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
