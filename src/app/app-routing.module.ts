import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [{ path: '', redirectTo: '', pathMatch: 'full' },
{ path: '', component: ProductGridComponent },
{ path: 'product', component: ProductPageComponent }, 
{ path: 'navbar', component: NavbarComponent },];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
