import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnotacionDenotacionComponent } from './connotacion-denotacion.component';

describe('ConnotacionDenotacionComponent', () => {
  let component: ConnotacionDenotacionComponent;
  let fixture: ComponentFixture<ConnotacionDenotacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnotacionDenotacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnotacionDenotacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
