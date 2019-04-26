import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DwTabRoutingComponent } from './dw-tab-routing.component';

describe('DwTabRoutingComponent', () => {
  let component: DwTabRoutingComponent;
  let fixture: ComponentFixture<DwTabRoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DwTabRoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DwTabRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
