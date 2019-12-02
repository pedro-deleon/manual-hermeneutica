import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModismosComponent } from './modismos.component';

describe('ModismosComponent', () => {
  let component: ModismosComponent;
  let fixture: ComponentFixture<ModismosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModismosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModismosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
