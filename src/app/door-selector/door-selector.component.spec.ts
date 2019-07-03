import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoorSelectorComponent } from './door-selector.component';

describe('DoorSelectorComponent', () => {
  let component: DoorSelectorComponent;
  let fixture: ComponentFixture<DoorSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoorSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoorSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
