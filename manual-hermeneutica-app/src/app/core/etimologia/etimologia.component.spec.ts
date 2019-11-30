import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtimologiaComponent } from './etimologia.component';

describe('EtimologiaComponent', () => {
  let component: EtimologiaComponent;
  let fixture: ComponentFixture<EtimologiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtimologiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtimologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
