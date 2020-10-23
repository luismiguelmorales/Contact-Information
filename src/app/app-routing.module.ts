import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditListingPageComponent } from './edit-listing-page/edit-listing-page.component';
import { MyListingsPageComponent } from './my-listings-page/my-listings-page.component';
import { NewListingPageComponent } from './new-listing-page/new-listing-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/my-listings', pathMatch: 'full' },
  { path: 'edit-listing/:id', component: EditListingPageComponent, pathMatch: 'full' },
  { path: 'my-listings', component: MyListingsPageComponent, pathMatch: 'full' },
  { path: 'new-listing', component: NewListingPageComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
