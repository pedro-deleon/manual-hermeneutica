import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementoExistencialHumanoComponent } from './elemento-existencial-humano.component';

describe('ElementoExistencialHumanoComponent', () => {
  let component: ElementoExistencialHumanoComponent;
  let fixture: ComponentFixture<ElementoExistencialHumanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementoExistencialHumanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementoExistencialHumanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
