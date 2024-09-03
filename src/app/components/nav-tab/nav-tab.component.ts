import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

export interface DashboardTab {
  label: string;
  routeName: string;
  content?: string;
}

@Component({
  selector: 'app-nav-tab',
  templateUrl: './nav-tab.component.html',
  styleUrl: './nav-tab.component.scss'
})

export class NavTabComponent {

  @Input() tabs: DashboardTab[] = [];

  constructor(){

  }
}
