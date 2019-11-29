import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSidenavComponent } from './content-sidenav.component';

describe('ContentSidenavComponent', () => {
  let component: ContentSidenavComponent;
  let fixture: ComponentFixture<ContentSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
