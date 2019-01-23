import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
/* import { FavoritesComponent } from './favorites/favorites.component'; */

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, //
  { path: 'dashboard', component: DashboardComponent },
  { path: 'product-detail/:id', component: ProductDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }