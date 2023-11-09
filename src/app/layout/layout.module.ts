import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout.router';
import { LayoutComponent } from './layout.component';
import { HomeModule } from '../home/home.module';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    HomeModule
  ]
})
export class LayoutModule { }
