import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductInputComponent } from './product-input/product-input.component';
import { QuotationComponent } from './quotation/quotation.component';

const routes: Routes = [
 {path:'',component:ProductInputComponent},
 {path:'quotation',component:QuotationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
