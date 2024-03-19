import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InterceptorInterceptor } from './helpers/interceptor.interceptor';
import { ProductoComponent } from './components/producto/producto.component';
import { UpdateProductoComponent } from './components/update-producto/update-producto.component';
import { CategoriaComponent } from './components/categoria/categoria.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { ProveedorComponent } from './components/proveedor/proveedor.component';
import { UpdateProveedorComponent } from './components/update-proveedor/update-proveedor.component';
import { UpdateCategoriaComponent } from './components/update-categoria/update-categoria.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    DashboardComponent,
    ProductoComponent,
    UpdateProductoComponent,
    CategoriaComponent,
    ProveedorComponent,
    UpdateProveedorComponent,
    UpdateCategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: InterceptorInterceptor, multi: true

    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
