import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsusLoquendiComponent } from './usus-loquendi.component';

describe('UsusLoquendiComponent', () => {
  let component: UsusLoquendiComponent;
  let fixture: ComponentFixture<UsusLoquendiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsusLoquendiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsusLoquendiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
