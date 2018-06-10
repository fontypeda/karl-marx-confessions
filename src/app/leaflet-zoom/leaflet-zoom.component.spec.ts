import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafletZoomComponent } from './leaflet-zoom.component';

describe('LeafletZoomComponent', () => {
  let component: LeafletZoomComponent;
  let fixture: ComponentFixture<LeafletZoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeafletZoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeafletZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
