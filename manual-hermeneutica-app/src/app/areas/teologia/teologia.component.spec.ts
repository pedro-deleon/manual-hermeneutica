import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeologiaComponent } from './teologia.component';

describe('TeologiaComponent', () => {
  let component: TeologiaComponent;
  let fixture: ComponentFixture<TeologiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeologiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
