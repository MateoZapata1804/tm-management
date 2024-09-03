import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../components/home/home.component';
import { InventoryComponent } from '../../components/inventory/inventory.component';
import { BudgetsComponent } from '../../components/budgets/budgets.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "inventory", component: InventoryComponent},
  {path: "budgets", component: BudgetsComponent},
  {path: "sales", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
