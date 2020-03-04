import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyChild1Component } from './lazy-child1.component';

describe('Lazy2aComponent', () => {
  let component: LazyChild1Component;
  let fixture: ComponentFixture<LazyChild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyChild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
