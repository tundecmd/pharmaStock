import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { SalesComponent } from './sales.component';
import { NewOrdersComponent } from './new-orders/new-orders.component';



const routes: Routes = [{
    path: '',
    component: SalesComponent,
    children: [
        {
            path: 'new-order',
            component: NewOrdersComponent
        }
    ]
}]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})

export class SalesRoutingModule {

}