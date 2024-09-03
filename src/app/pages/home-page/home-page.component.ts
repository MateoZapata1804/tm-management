import { Component, OnInit } from '@angular/core';
import { DashboardTab } from '../../components/nav-tab/nav-tab.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  
  navTabs: DashboardTab[] = [];

  ngOnInit(): void {
    this.navTabs = [
      { label: 'Inicio', routeName: '' },
      { label: 'Inventario', routeName: 'inventory' },
      { label: 'Presupuestos', routeName: 'budgets' },
      { label: 'Ventas Hoy', routeName: 'sales' },
    ];
  }

  constructor() {}
}
