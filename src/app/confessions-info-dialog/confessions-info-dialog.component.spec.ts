import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfessionsInfoDialogComponent } from './confessions-info-dialog.component';

describe('ConfessionsInfoDialogComponent', () => {
  let component: ConfessionsInfoDialogComponent;
  let fixture: ComponentFixture<ConfessionsInfoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfessionsInfoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfessionsInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
