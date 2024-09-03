import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavTabComponent } from './nav-tab/nav-tab.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { BudgetsComponent } from './budgets/budgets.component';
import { ItemAddComponent } from './modals/item-add/item-add.component';


@NgModule({
  declarations: [
    NavTabComponent,
    HomeComponent,
    InventoryComponent,
    BudgetsComponent,
    ItemAddComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    NavTabComponent
  ]
})
export class ComponentsModule { }
