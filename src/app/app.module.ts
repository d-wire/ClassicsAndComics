import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DoorSelectorComponent } from './door-selector/door-selector.component';
import { AppRoutingModule } from './app-routing.module';
import { ComicReviewsComponent } from './comic-reviews/comic-reviews.component';
import { ClassicReviewsComponent } from './classic-reviews/classic-reviews.component';

import { FilterPipeModule } from 'ngx-filter-pipe';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    DoorSelectorComponent,
    ComicReviewsComponent,
    ClassicReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FilterPipeModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
