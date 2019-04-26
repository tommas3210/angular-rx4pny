import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DwRecursiveMenuItemComponent} from './recursive-menu-item.component';

describe('DwRecursiveMenuItemComponent', () => {
  let component: DwRecursiveMenuItemComponent;
  let fixture: ComponentFixture<DwRecursiveMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DwRecursiveMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DwRecursiveMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
