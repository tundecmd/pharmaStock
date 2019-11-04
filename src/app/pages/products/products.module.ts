import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbInputModule,
  NbCardModule,
  NbButtonModule,
  NbActionsModule,
  NbUserModule,
  NbCheckboxModule,
  NbRadioModule,
  NbIconModule,
  NbSelectModule,
  NbDatepickerModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { ProductsRoutingModule } from './products-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products.component';
import { NewProductsComponent } from './new-products/new-products.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbIconModule,
    NbSelectModule,
    NbDatepickerModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [ProductsComponent, NewProductsComponent],
})
export class ProductsModule { }
