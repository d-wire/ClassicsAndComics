import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicReviewsComponent } from './classic-reviews.component';

describe('ClassicReviewsComponent', () => {
  let component: ClassicReviewsComponent;
  let fixture: ComponentFixture<ClassicReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassicReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassicReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
