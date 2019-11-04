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
  NbSelectModule,
  NbIconModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { SalesRoutingModule } from './sales-routing.module';
import { SalesComponent } from './sales.component';
import { NewOrdersComponent } from './new-orders/new-orders.component';

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
    SalesRoutingModule,
    NbSelectModule,
    NbIconModule,
  ],
  declarations: [
    SalesComponent,
    NewOrdersComponent,
  ],

})
export class SalesModule { }
