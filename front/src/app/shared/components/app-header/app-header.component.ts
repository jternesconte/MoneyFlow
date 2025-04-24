import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ToolbarModule],
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent {
  items: MenuItem[] = [];

  ngOnInit() {
    
  }
}
