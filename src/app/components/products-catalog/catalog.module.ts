import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogRoutingModule } from './catalog-routing.module';
import { ProductsCatalogComponent } from './products-catalog.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [ProductsCatalogComponent],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class CatalogModule { }
