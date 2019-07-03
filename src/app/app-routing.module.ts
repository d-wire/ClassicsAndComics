import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ComicReviewsComponent} from './comic-reviews/comic-reviews.component';
import {ClassicReviewsComponent} from './classic-reviews/classic-reviews.component';
import {DoorSelectorComponent} from './door-selector/door-selector.component';

const routes: Routes = [
  { path: '', redirectTo: '/door_select', pathMatch: 'full' },
  { path: 'door_select', component: DoorSelectorComponent },
  { path: 'comics', component: ComicReviewsComponent },
  { path: 'classics', component: ClassicReviewsComponent }
];

@NgModule({
  declarations: [],
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
