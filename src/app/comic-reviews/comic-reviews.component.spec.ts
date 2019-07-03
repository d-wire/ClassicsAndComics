import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicReviewsComponent } from './comic-reviews.component';

describe('ComicReviewsComponent', () => {
  let component: ComicReviewsComponent;
  let fixture: ComponentFixture<ComicReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
