import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductoComponent } from './components/producto/producto.component';
import { UpdateProductoComponent } from './components/update-producto/update-producto.component';


const routes: Routes = [
  {
    path:'', redirectTo:'/login', pathMatch:'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'producto',
    component: ProductoComponent
  },
  {
    path: 'updateProducto',
    component: UpdateProductoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
