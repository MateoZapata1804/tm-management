import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { HomePageRoutingModule } from './home-page/home-page-routing.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
    HomePageRoutingModule
  ],
  exports: [
    HomePageComponent
  ]
})

export class PagesModule { }
