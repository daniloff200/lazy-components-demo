import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyChildrenComponent } from './lazy-children.component';

describe('LazyChildrenComponent', () => {
  let component: LazyChildrenComponent;
  let fixture: ComponentFixture<LazyChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
