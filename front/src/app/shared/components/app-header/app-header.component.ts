import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css'],
  imports: [ToolbarModule, Menu, ButtonModule]
})
export class AppHeaderComponent {
  userItems: MenuItem[] = [];

  constructor() {

  }

  ngOnInit() {
    this.userItems = [
      { label: 'New', icon: 'pi pi-plus' },
      { label: 'Search', icon: 'pi pi-search' }
    ];
  }
}
