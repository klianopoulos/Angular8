import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayDataBinding01Component } from './two-way-data-binding01.component';

describe('TwoWayDataBinding01Component', () => {
  let component: TwoWayDataBinding01Component;
  let fixture: ComponentFixture<TwoWayDataBinding01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoWayDataBinding01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWayDataBinding01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
